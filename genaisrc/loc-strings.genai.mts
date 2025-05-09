script({
    title: "translate blocks",
    description: "Translate block strings in compiled locales files",
    parameters: {
        lang: {
            type: "string",
            description: "translation locale",
            default: "fr",
        },
    },
})

// language parameterization
const langCode = env.vars.lang
console.log(`lang: ${langCode}`)

// given a language code, refer to the full name to help the LLM
const langName = {
    fr: "French",
    "es-ES": "Spanish",
    de: "German",
    sr: "Serbian",
    vi: "Vietnamese",
    it: "Italian",
}[langCode]
if (!langName) cancel(`unknown language ${langCode}`)

const files = env.files.filter(({ filename }) =>
    /^_locales\/[a-z0-9\-_]+-strings\.json$/i.test(filename)
)
for (const file of files) {
    await translateFile(file)
}
console.log(YAML.stringify(files.map(f => f.filename)))

async function translateFile(file: WorkspaceFile) {
    const { filename, content } = file
    console.log(`> ${filename}`)
    const dir = path.dirname(filename)

    // read the stings, which are stored as a JSON record
    const strings: Record<string, string> = JSON.parse(content)

    // find the existing translation and remove existing translations
    const trfn = path.join(dir, langCode, path.basename(filename))
    const translated: Record<string, string> =
        (await workspace.readJSON(trfn)) || {}
    for (const k of Object.keys(strings)) if (translated[k]) delete strings[k]

    // shortcut: all translation is done
    if (Object.keys(strings).length === 0) {
        console.log(`no strings to translate`)
        return
    }

    console.log(`strings: ${Object.keys(strings).length} to translate`)

    // the prompt engineering piece
    const { fences, text } = await runPrompt(
        ctx => {
            ctx.$`
## Role

You are an expert at Computer Science education. 
You are an expert TypeScript coder. 
You are an expert at Microsoft MakeCode.
You are an expert ${langName} translator.

## Task

Translate the content of ORIGINAL to ${langName} (lang-iso '${langCode}').
The ORIGINAL files are formatted as a .env file.

Write the translation as a .env format to the output. 
- Do NOT add markdown formatting.
- ALWAYS add quotes around values


## Recommendations

- DO NOT translate the keys
- DO translate the values to ${langName} (lang-iso '${langCode}')
- DO NOT use foul language.

### Block Strings

The value for keys ending with "|block" are MakeCode block strings (https://makecode.com/defining-blocks)
and should be translated following these rules:

- Every variable name is prefixed with a '%' or a '$', like %foo or $bar.
- Do NOT translate variable names.
- Some variable names have a value, like '%foo=toggleOnOff'. The value should be NOT translated.
- All variables in the original string should be in the translated string.
- Make sure to translate '\\%' to '\\%' and '\\$' to '\\$' if they are not variables.
- Event string starts with 'on', like 'on pressed'. Interpret 'on' as 'when' when, like 'when pressed', when translating.
- The translations of "...|block" string should be short.

`
            ctx.def("ORIGINAL", INI.stringify(strings), { language: "ini" })
        },
        { label: filename, cache: "translate" }
    )
    const news = INI.parse(fences?.[0]?.content || text) || {}

    // validate that keys are the same
    for (const key in news)
        if (!strings[key]) {
            console.warn(`key ${key} not found in original`)
            delete news[key]
        }

    // merge the translations
    Object.assign(translated, news)

    // write the translations back if modified
    const newContent = JSON.stringify(translated, null, 2)
    if (content !== newContent) await workspace.writeText(trfn, newContent)

    // TODO build and validate translations
}
