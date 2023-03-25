//  Measure the sound value and send it o display on the computer screen
//  Start the program and run the forever loop
basic.showIcon(IconNames.Heart)
basic.forever(function on_forever() {
    serial.writeValue("x", input.soundLevel())
})
