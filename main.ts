radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == MOVE_90) {
        servos.P1.setAngle(Ang_Test)
        basic.showIcon(IconNames.Triangle)
    } else if (receivedNumber == Move_Back) {
        servos.P1.setAngle(Ang_0)
        basic.showIcon(IconNames.Target)
    } else if (receivedNumber == Move_bf) {
        servos.P1.setAngle(Ang_0)
        basic.showIcon(IconNames.Chessboard)
        servos.P1.setAngle(Ang_right)
        basic.pause(1000)
        servos.P1.setAngle(Ang_left)
        basic.pause(1000)
        servos.P1.setAngle(MOVE_90)
        basic.pause(1000)
        servos.P1.setAngle(Ang_0)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(MOVE_90)
    servos.P1.setAngle(Ang_Test)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(Move_bf)
    servos.P1.setAngle(Ang_right)
    basic.pause(1000)
    servos.P1.setAngle(Ang_left)
    basic.pause(1000)
    servos.P1.setAngle(MOVE_90)
    basic.pause(1000)
    servos.P1.setAngle(Ang_0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Move_Back)
    servos.P1.setAngle(Ang_0)
})
let Ang_right = 0
let Ang_left = 0
let Ang_Test = 0
let Ang_0 = 0
let Move_bf = 0
let Move_Back = 0
let MOVE_90 = 0
let RADIO_GROUP_SELECTED = 32
MOVE_90 = 1
Move_Back = 2
Move_bf = 3
Ang_0 = 0
Ang_Test = 90
Ang_left = 30
Ang_right = 170
radio.setGroup(RADIO_GROUP_SELECTED)
basic.showNumber(RADIO_GROUP_SELECTED)
servos.P1.setAngle(Ang_0)
basic.showIcon(IconNames.Yes)
