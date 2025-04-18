# Button smasher

This little application is a **button smasher**
game for the micro:bit V2. It allows you to increment the counter for 10 seconds... good luck!

## Create the counter

The button smasher game is about counting button clicks, so let's start
by adding a counter variable and show it on the screen.

-   create a new variable called `counter`
-   in a `forever` block, use `show string` to display the counter value.

```blocks
let counter = 0
basic.forever(function () {
    basic.showNumber(counter)
})
```

## Jacdac button down event

We'll add an event block to listen for when the button is `down` so that we can increment the counter.

-   drag a `on button 1 down` block from the `modules` toolbox
-   if you cannot find this block, start a _button_ simulator in Jacdac and click **ADD BLOCKS** button

```blocks
let counter = 0
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
})
basic.forever(function () {
    basic.showNumber(counter)
})
```

## Increment the counter

Add the code to increment the counter and refresh the display

-   add code to increment `counter` by 1 under the `down` event
-   add `stop animation` (from the `led -> advanced`) as well to force refreshing the screen

```blocks
let counter = 0
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    counter += 1
    led.stopAnimation()
})
basic.forever(function () {
    basic.showNumber(counter)
})
```

## Test in the simulator

It's time to test your code using the Jacdac simulator. If you haven't started a button simulator yet,
click on **Start simulators** to get one.
Button smash the virtual button and you should see number increment on the micro:bit!

## Add a countdown

To end the game, let's add a `||logic:if then else||` block that only allows incrementing
the counter for the first 10 seconds of the micro:bit running.

-   drag a `||logic:if then else||` block in the down event and move the current blocks under the `then` section
-   add code that checks that `||input:running time (ms)||` is less (<) than `10000` (ms).

```blocks
let counter = 0
modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (input.runningTime() < 10000) {
        counter += 1
        led.stopAnimation()
    }
})
basic.forever(function () {
    basic.showNumber(counter)
})
```

## Download to your micro:bit V2

Connect your micro:bit V2, slot it into the Jacdaptor and connect a Jacdac button.
Press the **Download** button to get your code running on the micro:bit. Happy smashing!

```package
jacdac=github:jacdac/pxt-jacdac
jacdac-button=github:jacdac/pxt-jacdac/button
```