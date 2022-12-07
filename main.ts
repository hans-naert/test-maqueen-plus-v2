DFRobotMaqueenPlusV2.I2CInit()
basic.showString(DFRobotMaqueenPlusV2.readVersion())
serial.writeLine(DFRobotMaqueenPlusV2.readVersion())
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1) {
        DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
    } else {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
    }
})
