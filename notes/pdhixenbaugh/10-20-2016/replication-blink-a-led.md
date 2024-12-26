---
title: "(SPOILERS): Blink a LED"\ntagnames: 'replication:13632'
author: pdhixenbaugh
path: /notes/pdhixenbaugh/10-20-2016/replication-blink-a-led.md
nid: 13633
uid: 459085

---

![](https://publiclab.org/public/system/images/photos/000/018/522/original/IMG_20161020_154529.jpg)

# (SPOILERS): Blink a LED

by [pdhixenbaugh](../profile/pdhixenbaugh) | October 20, 2016 21:22

October 20, 2016 21:22 | Tags: [replication:13632](../tag/replication:13632)

----

SPOILERS! You shouldn't read this if you want to figure out the activity on your own FIRST!

###What I want to do

* Post my 'solution' to the activity: https://publiclab.org/notes/pdhixenbaugh/10-20-2016/blink-an-led-write-a-sketch-and-build-a-breadboard-circuit-for-the-riffle
* Learn about this whole Activity business

###My attempt and results

So this was a little harder than I thought. I looked at the thermistor code as an example of how to turn the 3V3 pin on and off, and designed some code that looks like it would do it. Read below, or see this ["Gist" on Github](https://gist.github.com/pdhixenbaugh/b2bb714ff07558ba73b4d492264e0599) for a nicely highlighted version.

    // Riffle example by pdhixenbaugh
    // on the Riffle, pin 9 is connected to an on-board LED.
    
    const int built_in = 9; //Built-in LED
    const int hdr_pwr_enable = 8; //enable "3V3" pin for header power
    
    
    // the setup function runs once when you press reset or power the board
    void setup() {
      //initialize the built-in LED
      pinMode(built_in, OUTPUT); 
    
      // put the 3V3 pin in the right mode, and turn it off
      pinMode(hdr_pwr_enable, OUTPUT);
      digitalWrite(hdr_pwr_enable, HIGH); //Turn off power
    
      
    }
    
    // the loop function runs over and over again forever
    void loop() {
      digitalWrite(built_in, HIGH);   // turn the built-in LED on (HIGH is the voltage level)
    
      // turn on external power
      digitalWrite(hdr_pwr_enable, HIGH); //Turn off external power
      
      delay(1000);              // wait for a second
      
      digitalWrite(built_in, LOW);    // turn the built-in LED off by making the voltage LOW
      
      // turn off external power
      digitalWrite(hdr_pwr_enable, LOW); //Turn on external power
      
      delay(3000);              // wait for three seconds in "off" mode
    }

Coding the 3V3 pin works counterintuitively: `digitalWrite(8,HIGH)` turns the pin off, while `digitalWrite(8,LOW)` turns it on. According to @donblair, while arduino pins usually take HIGH to mean high voltage, and LOW to mean low voltage (aka OFF) the 3V3 pin is controlled by a MOFSET connected to pin 8 that operates with different logic: turning the MOFSET on HIGH turns off the current flowing through 3V3. Turning off the MOFSET with LOW allows the current to flow freely. It is done this way so that the 3V3 pin supplies more current than a normal Atmel 386 digital pin would. Or so I understand it.

I didn't need to code anything to have GND work as a ground, and no code I've read ever does. So there's that.

###Designing the circuit!
*I had no idea how much current would blow out the LED, so I started by using all 3 of my resistors in series. But nothing lit up.  I got out a multimeter and tried testing stuff. Yes, the resistors had resistance. But there was no voltage across them. I realized that I was plugging the wires into the wrong pins on the riffle pinout! I was using the protoboard pinout diagram at the time, and not orienting myself right.

With all my resistors in, and the wires connected to the right pinout, I got a dim glow with the LED. I ended up taking out all the resistors except for a 470 Ohm resistor, which let the LED blink brightly.

Done correctly, my circuit looked like this:
[![IMG_20161020_154529.jpg](https://publiclab.org/system/images/photos/000/018/521/large/IMG_20161020_154529.jpg)](https://publiclab.org/system/images/photos/000/018/521/original/IMG_20161020_154529.jpg)

[![IMG_20161020_171010.jpg](https://publiclab.org/system/images/photos/000/018/520/large/IMG_20161020_171010.jpg)](https://publiclab.org/system/images/photos/000/018/520/original/IMG_20161020_171010.jpg)

I did find something neat though -- depending on when I had the the LEDs blink on and off, the code would sometimes, though not always, get *stuck* with the red LED lit up. I have no idea why this happens, but I have proof... https://youtu.be/-_q_Mha6Gc0 It would get stuck after a few loops when the onboard LED and the external LED were coded to alternate.

###Questions and next steps

* Is it "Blink a LED" or "Blink an LED" ? Do you read it as "Blink an El Ee Dee" or "Blink a "Led" ? This question may go forever without a satisfying answer
* I didn't do the "Bonus Activity" -- it still stands ready for the first person to attempt it.

###Why I'm interested
I really wanted to figure out how to "do electronics" with the Riffle, and learning by putting together this activity (first the goals, then the solution) gave me a lot more confidence in building future projects using the Riffle.