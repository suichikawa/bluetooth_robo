function right () {
    pins.servoWritePin(AnalogPin.P0, 180)
    pins.servoWritePin(AnalogPin.P8, 85)
}
function back () {
    pins.servoWritePin(AnalogPin.P0, 50)
    pins.servoWritePin(AnalogPin.P8, 105)
}
function front () {
    pins.servoWritePin(AnalogPin.P0, 110)
    pins.servoWritePin(AnalogPin.P8, 65)
}
function left () {
    pins.servoWritePin(AnalogPin.P0, 90)
    pins.servoWritePin(AnalogPin.P8, 0)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Square)
})
function stop () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = parseFloat(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    if (cmd == 2) {
        front()
    } else if (cmd == 4) {
        left()
    } else if (cmd == 6) {
        right()
    } else if (cmd == 8) {
        back()
    } else if (cmd == 5) {
        stop()
    } else {
        basic.showNumber(cmd)
    }
})
let cmd = 0
bluetooth.startUartService()
basic.showString("Ok")
basic.showIcon(IconNames.Happy)
