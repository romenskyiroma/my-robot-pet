input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showIcon(IconNames.Heart)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
    if (input.lightLevel() < 5) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (input.lightLevel() > 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
