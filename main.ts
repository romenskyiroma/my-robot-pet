input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
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
    if (input.lightLevel() < 1) {
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
    if (input.lightLevel() > 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
