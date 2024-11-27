---
nid: 13632
title: Blink a LED - Write a 'Sketch' and build a breadboard circuit for the Riffle
path: public/static/notes/pdhixenbaugh/10-20-2016/blink-an-led-write-a-sketch-and-build-a-breadboard-circuit-for-the-riffle.md
uid: 459085
tagnames: riffle,riffle-beta,difficulty:medium,status:review-me,category:build,time:1h,activity:riffle,activity:datalogger,activity:data-logging
---

# Blink a LED - Write a 'Sketch' and build a breadboard circuit for the Riffle

###Goals 
The goal of this activity is to get familiar with writing code and designing circuits for the Riffle Datalogger by 

* Writing a riffle sketch
* Making a breadboard circuit
* Blinking an external LED

Materials needed:

* Riffle_386
* Resistors
* LEDs
* Breadboard
* Wires

### Activity
Let's find a good barebones piece of code to copy and start from. This will do:
    
    // on the Riffle, pin 9 is connected to an on-board LED.
    
    // the setup function runs once when you press reset or power the board
    void setup() {
      pinMode(9, OUTPUT); 
    }
    
    // the loop function runs over and over again forever
    void loop() {
      digitalWrite(9, HIGH);   // turn the LED on (HIGH is the voltage level)
      delay(1000);              // wait for a second
      digitalWrite(9, LOW);    // turn the LED off by making the voltage LOW
      delay(1000);              // wait for a second
    }

Using the commands `pinMode` and `digitalWrite`, make a sketch and build a circuit that lights up an external LED. Look at arduino help, documentation, and other riffle sketches for examples. (For instance, how do you turn on the 3V3 pin? It may not be how you'd expect).

This sparkfun guide to LEDs will be useful: https://learn.sparkfun.com/tutorials/light-emitting-diodes-leds

The Riffle's Pinout Diagram may be helpful: **EDIT** Take this as a reference, with a grain of salt, and rely on example code for how to use it.

[![pinout_diagram.png](https://publiclab.org/system/images/photos/000/018/519/large/pinout_diagram.png)](https://publiclab.org/system/images/photos/000/018/519/original/pinout_diagram.png)


To orient yourself, odd numbered pins are on the elevated row, even numbered pins are on the lower row. Pins 1 and 2 are the top-side of the board (where the SD card enters). Pins 13 and 14 are at the bottom side of the board (the side that's labeled publiclab.org/riffle, and the side the microUSB plugs in on).

Basic safety considerations: do this at your own risk. Shorting out the riffle (having 3V3 voltage go directly into another pin for example) may break it. High current may burn out your LED. Use a resistor in series with the LED to lower the current. A good ballpark resistor value might be 460 Ohms. But try it for yourself: start with higher resistances and move to lower ones.

###Hints
* If you need help, post research notes with what you've done so far, use the "ask a question" feature of the public lab website, or ask on the discussion lists.

###Share your results
* **Replicate** this activity, post the code that worked for you, and pictures of your experimental setup.

###Bonus Activity:
* Activate an analog-to-digital pin on the riffle, and use it to measure voltage at different points on the breadboard, and display the value in the serial monitor

###Why I'm interested
* This is designed to help folks learn how to build a new circuit and write a new sketch. 
 * It uses materials that should be easy to obtain from electronics hobbyist stores, and may be already on hand.
 * Similar tutorials are available for Arduino, however things are slightly different with the Riffle_368, so this activity may help the Arduino hobbyist learn about those differences.
 * This activity is part 3 of a series of research notes exploring the riffle and arduino documentation for the first time, which can be looked at [here](https://publiclab.org/n/13457).
* To learn how to write and edit activities. If you have ideas about what would make this activity better, please share them in the comments below!

