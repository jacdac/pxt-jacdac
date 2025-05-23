namespace modules {
    /**
     * A color bitmap.
     **/
    //% fixedInstances blockGap=8
    export class BitmapClient extends jacdac.Client {

        private readonly _height : jacdac.RegisterClient<[number]>;
        private readonly _width : jacdac.RegisterClient<[number]>;            

        constructor(role: string) {
            super(jacdac.SRV_BITMAP, role)

            this._height = this.addRegister<[number]>(jacdac.BitmapReg.Height, jacdac.BitmapRegPack.Height, jacdac.RegisterClientFlags.Const)
            this._width = this.addRegister<[number]>(jacdac.BitmapReg.Width, jacdac.BitmapRegPack.Width, jacdac.RegisterClientFlags.Const)            
        }
    

        /**
        * Gets the height of the bitmap.
        */
        //% callInDebugger
        //% group="Display"
        //% weight=100
        height(): number {
            this.start();            
            const values = this._height.pauseUntilValues() as any[];
            return values[0];
        }

        /**
        * Gets the width of the bitmap.
        */
        //% callInDebugger
        //% group="Display"
        //% weight=99
        width(): number {
            this.start();            
            const values = this._width.pauseUntilValues() as any[];
            return values[0];
        }


        /**
        * 
        */
        //% group="Display"
        //% blockId=jacdac_bitmap_fill_cmd
        //% block="%bitmap fill $color"
        //% weight=98
        fill(color: number): void {
            this.start();
            this.sendCommand(jacdac.JDPacket.jdpacked(jacdac.BitmapCmd.Fill, jacdac.BitmapCmdPack.Fill, [color]))
        }
    
    }
    
    //% fixedInstance whenUsed weight=1 block="bitmap1"
    export const bitmap1 = new BitmapClient("bitmap1");
}