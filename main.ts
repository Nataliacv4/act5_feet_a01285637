input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    yard = feet / 3
    basic.showNumber(yard)
    basic.showString("yard")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    centimeters = feet * 30.48
    basic.showNumber(centimeters)
    basic.showString("centimeters")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    inches = feet * 12
    basic.showNumber(inches)
    basic.showString("inches")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(feet)
    basic.showString("feet")
    basic.showString("=")
    meters = feet / 3.281
    basic.showNumber(meters)
    basic.showString("meters")
})
let meters = 0
let inches = 0
let centimeters = 0
let yard = 0
let feet = 0
feet = randint(1, 100)
