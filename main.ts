radio.onReceivedNumber(function (receivedNumber) {
    Serial_Number = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (Voter.indexOf(Serial_Number) == -1) {
        Voter.push(Serial_Number)
        if (receivedNumber == 255) {
            Yes += 1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    Yes = 0
    Voter = []
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Yes)
})
let Serial_Number = 0
let Yes = 0
let Voter: number[] = []
radio.sendNumber(25)
Voter = []
Yes = 0
