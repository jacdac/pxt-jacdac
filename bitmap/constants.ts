namespace jacdac {
    // Service Bitmap constants
    export const SRV_BITMAP = 0x1bb168b8
    export const enum BitmapReg {
        /**
         * Constant # uint16_t. Gets the height of the bitmap.
         *
         * ```
         * const [height] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Height = 0x180,

        /**
         * Constant # uint16_t. Gets the width of the bitmap.
         *
         * ```
         * const [width] = jdunpack<[number]>(buf, "u16")
         * ```
         */
        Width = 0x181,
    }

    export namespace BitmapRegPack {
        /**
         * Pack format for 'height' data.
         */
        export const Height = "u16"

        /**
         * Pack format for 'width' data.
         */
        export const Width = "u16"
    }

    export const enum BitmapCmd {
        /**
         *
         * ```
         * const [color] = jdunpack<[number]>(buf, "u8")
         * ```
         */
        Fill = 0x80,
    }

    export namespace BitmapCmdPack {
        /**
         * Pack format for 'fill' data.
         */
        export const Fill = "u8"
    }
}
