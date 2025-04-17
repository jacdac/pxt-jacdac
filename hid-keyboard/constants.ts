namespace jacdac {
    // Service HID Keyboard constants
    export const SRV_HID_KEYBOARD = 0x18b05b6a

    export const enum HidKeyboardSelector { // uint16_t
        //% block="none"
        None = 0x0,
        //% block="error roll over"
        ErrorRollOver = 0x1,
        //% block="post fail"
        PostFail = 0x2,
        //% block="error undefined"
        ErrorUndefined = 0x3,
        //% block="a"
        A = 0x4,
        //% block="b"
        B = 0x5,
        //% block="c"
        C = 0x6,
        //% block="d"
        D = 0x7,
        //% block="e"
        E = 0x8,
        //% block="f"
        F = 0x9,
        //% block="g"
        G = 0xa,
        //% block="h"
        H = 0xb,
        //% block="i"
        I = 0xc,
        //% block="j"
        J = 0xd,
        //% block="k"
        K = 0xe,
        //% block="l"
        L = 0xf,
        //% block="m"
        M = 0x10,
        //% block="n"
        N = 0x11,
        //% block="o"
        O = 0x12,
        //% block="p"
        P = 0x13,
        //% block="q"
        Q = 0x14,
        //% block="r"
        R = 0x15,
        //% block="s"
        S = 0x16,
        //% block="t"
        T = 0x17,
        //% block="u"
        U = 0x18,
        //% block="v"
        V = 0x19,
        //% block="w"
        W = 0x1a,
        //% block="x"
        X = 0x1b,
        //% block="y"
        Y = 0x1c,
        //% block="z"
        Z = 0x1d,
        //% block=" 1"
        _1 = 0x1e,
        //% block=" 2"
        _2 = 0x1f,
        //% block=" 3"
        _3 = 0x20,
        //% block=" 4"
        _4 = 0x21,
        //% block=" 5"
        _5 = 0x22,
        //% block=" 6"
        _6 = 0x23,
        //% block=" 7"
        _7 = 0x24,
        //% block=" 8"
        _8 = 0x25,
        //% block=" 9"
        _9 = 0x26,
        //% block=" 0"
        _0 = 0x27,
        //% block="return"
        Return = 0x28,
        //% block="escape"
        Escape = 0x29,
        //% block="backspace"
        Backspace = 0x2a,
        //% block="tab"
        Tab = 0x2b,
        //% block="spacebar"
        Spacebar = 0x2c,
        //% block="minus"
        Minus = 0x2d,
        //% block="equals"
        Equals = 0x2e,
        //% block="left square bracket"
        LeftSquareBracket = 0x2f,
        //% block="right square bracket"
        RightSquareBracket = 0x30,
        //% block="backslash"
        Backslash = 0x31,
        //% block="non us hash"
        NonUsHash = 0x32,
        //% block="semicolon"
        Semicolon = 0x33,
        //% block="quote"
        Quote = 0x34,
        //% block="grave accent"
        GraveAccent = 0x35,
        //% block="comma"
        Comma = 0x36,
        //% block="period"
        Period = 0x37,
        //% block="slash"
        Slash = 0x38,
        //% block="caps lock"
        CapsLock = 0x39,
        //% block="f1"
        F1 = 0x3a,
        //% block="f2"
        F2 = 0x3b,
        //% block="f3"
        F3 = 0x3c,
        //% block="f4"
        F4 = 0x3d,
        //% block="f5"
        F5 = 0x3e,
        //% block="f6"
        F6 = 0x3f,
        //% block="f7"
        F7 = 0x40,
        //% block="f8"
        F8 = 0x41,
        //% block="f9"
        F9 = 0x42,
        //% block="f10"
        F10 = 0x43,
        //% block="f11"
        F11 = 0x44,
        //% block="f12"
        F12 = 0x45,
        //% block="print screen"
        PrintScreen = 0x46,
        //% block="scroll lock"
        ScrollLock = 0x47,
        //% block="pause"
        Pause = 0x48,
        //% block="insert"
        Insert = 0x49,
        //% block="home"
        Home = 0x4a,
        //% block="page up"
        PageUp = 0x4b,
        //% block="delete"
        Delete = 0x4c,
        //% block="end"
        End = 0x4d,
        //% block="page down"
        PageDown = 0x4e,
        //% block="right arrow"
        RightArrow = 0x4f,
        //% block="left arrow"
        LeftArrow = 0x50,
        //% block="down arrow"
        DownArrow = 0x51,
        //% block="up arrow"
        UpArrow = 0x52,
        //% block="keypad num lock"
        KeypadNumLock = 0x53,
        //% block="keypad divide"
        KeypadDivide = 0x54,
        //% block="keypad multiply"
        KeypadMultiply = 0x55,
        //% block="keypad add"
        KeypadAdd = 0x56,
        //% block="keypad subtrace"
        KeypadSubtrace = 0x57,
        //% block="keypad return"
        KeypadReturn = 0x58,
        //% block="keypad1"
        Keypad1 = 0x59,
        //% block="keypad2"
        Keypad2 = 0x5a,
        //% block="keypad3"
        Keypad3 = 0x5b,
        //% block="keypad4"
        Keypad4 = 0x5c,
        //% block="keypad5"
        Keypad5 = 0x5d,
        //% block="keypad6"
        Keypad6 = 0x5e,
        //% block="keypad7"
        Keypad7 = 0x5f,
        //% block="keypad8"
        Keypad8 = 0x60,
        //% block="keypad9"
        Keypad9 = 0x61,
        //% block="keypad0"
        Keypad0 = 0x62,
        //% block="keypad decimal point"
        KeypadDecimalPoint = 0x63,
        //% block="non us backslash"
        NonUsBackslash = 0x64,
        //% block="application"
        Application = 0x65,
        //% block="power"
        Power = 0x66,
        //% block="keypad equals"
        KeypadEquals = 0x67,
        //% block="f13"
        F13 = 0x68,
        //% block="f14"
        F14 = 0x69,
        //% block="f15"
        F15 = 0x6a,
        //% block="f16"
        F16 = 0x6b,
        //% block="f17"
        F17 = 0x6c,
        //% block="f18"
        F18 = 0x6d,
        //% block="f19"
        F19 = 0x6e,
        //% block="f20"
        F20 = 0x6f,
        //% block="f21"
        F21 = 0x70,
        //% block="f22"
        F22 = 0x71,
        //% block="f23"
        F23 = 0x72,
        //% block="f24"
        F24 = 0x73,
        //% block="execute"
        Execute = 0x74,
        //% block="help"
        Help = 0x75,
        //% block="menu"
        Menu = 0x76,
        //% block="select"
        Select = 0x77,
        //% block="stop"
        Stop = 0x78,
        //% block="again"
        Again = 0x79,
        //% block="undo"
        Undo = 0x7a,
        //% block="cut"
        Cut = 0x7b,
        //% block="copy"
        Copy = 0x7c,
        //% block="paste"
        Paste = 0x7d,
        //% block="find"
        Find = 0x7e,
        //% block="mute"
        Mute = 0x7f,
        //% block="volume up"
        VolumeUp = 0x80,
        //% block="volume down"
        VolumeDown = 0x81,
    }


    export const enum HidKeyboardModifiers { // uint8_t
        //% block="none"
        None = 0x0,
        //% block="left control"
        LeftControl = 0x1,
        //% block="left shift"
        LeftShift = 0x2,
        //% block="left alt"
        LeftAlt = 0x4,
        //% block="left gui"
        LeftGUI = 0x8,
        //% block="right control"
        RightControl = 0x10,
        //% block="right shift"
        RightShift = 0x20,
        //% block="right alt"
        RightAlt = 0x40,
        //% block="right gui"
        RightGUI = 0x80,
    }


    export const enum HidKeyboardAction { // uint8_t
        //% block="press"
        Press = 0x0,
        //% block="up"
        Up = 0x1,
        //% block="down"
        Down = 0x2,
    }

    export const enum HidKeyboardCmd {
        /**
         * Presses a key or a sequence of keys down.
         *
         * ```
         * const [rest] = jdunpack<[([jacdac.HidKeyboardSelector, jacdac.HidKeyboardModifiers, jacdac.HidKeyboardAction])[]]>(buf, "r: u16 u8 u8")
         * const [selector, modifiers, action] = rest[0]
         * ```
         */
        Key = 0x80,

        /**
         * No args. Clears all pressed keys.
         */
        Clear = 0x81,
    }

    export namespace HidKeyboardCmdPack {
        /**
         * Pack format for 'key' data.
         */
        export const Key = "r: u16 u8 u8"
    }

}
