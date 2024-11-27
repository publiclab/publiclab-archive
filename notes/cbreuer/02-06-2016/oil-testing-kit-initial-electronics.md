---
nid: 12666
title: Oil Testing Kit Initial Electronics
path: public/static/notes/cbreuer/02-06-2016/oil-testing-kit-initial-electronics.md
uid: 49682
tagnames: spectrometer,fluorescence,cuvette,oil-testing-kit,barnstar:basic,cuvette-frame,response:12616
---

# Oil Testing Kit Initial Electronics

##What I Want To Do

I'm currently working on designing the electronics and code, and eventually working on Jeff's design of the casing, for the florescence oil testing kit. 

##My Attempt and Results

Using Autodesk's 123D Circuits, I modeled the circuit and simulated the code running on it, which all seemed fine. The circuit currently uses a full R3 Arduino, though switching to a 3V Trinket from Adafruit should have no problems. Essentially, the circuit is just a potentiometer sending values to the arduino, where the resistance value gets scaled down to being out of 255, the max brightness value. The value is then sent to the LED, which has a hardwired switch to turn the LED on and off. The circuit/code/simulation can be found [here](https://123d.circuits.io/circuits/1515905/edit#breadboard). 

Code: 

    int potPin= A2;  
    int ledPin= 9;  
    int readValue;  
    int writeValue; 
    
      void setup() {
      pinMode(potPin, INPUT);  
      pinMode(ledPin, OUTPUT); 
      Serial.begin(9600);      
    }

    void loop() {
     delay(1000);
     readValue = analogRead(potPin);  
     writeValue = (255./1023.) * readValue; 
     analogWrite(ledPin, writeValue);      
    }

##Next Steps

I just ordered a 3V Trinket and the other parts so they should be here soon, at which point I can actually wire it up and make sure it works. One possibility for the code, which I've discussed with Jeff is the option to send the brightness value on the Trinket to Spectral Workbench, in case a use for it is found. I'll probably start looking at Jeff's design for a casing and modify it to fit the electronics.