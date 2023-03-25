# Measure the sound value and send it o display on the computer screen
def on_forever():
    serial.write_value("x", input.sound_level())

# Start the program and run the forever loop
basic.show_icon(IconNames.HEART)
basic.forever(on_forever)
