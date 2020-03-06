function calibrate () {
    ambient = input.lightLevel()
    ambient = 0
    for (let index = 0; index < 10; index++) {
        ambient += input.lightLevel()
    }
    ambient = ambient / 10
    ambient += -20
}
function countdown () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    music.setTempo(100)
    music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            music.changeTempoBy(9)
            basic.pause(20000 / 25)
            led.unplot(x, y)
        }
    }
    music.stopMelody(MelodyStopOptions.All)
    music.setTempo(120)
    music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.showIcon(IconNames.Happy)
}
let ambient = 0
calibrate()
basic.forever(function () {
    if (input.lightLevel() < ambient) {
        countdown()
    } else {
        basic.showIcon(IconNames.Ghost)
    }
})
