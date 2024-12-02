---
nid: 19288
title: Detect Hydrogen Sulfide (Fart ) in Public Toilets with Arduino UNO/NodeMCU(ESP8266)
path: public/static/notes/silentsairam/05-09-2019/detect-hydrogen-sulfide-fart-in-public-toilets-with-arduino-uno-nodemcu-esp8266.md
uid: 553044
tagnames: arduino,h2s,farts,arduino-uno,h2s-detector,hydrogen-sulfide-sensor,lat:12.945469,lon:80.147393
---

# Detect Hydrogen Sulfide (Fart ) in Public Toilets with Arduino UNO/NodeMCU(ESP8266)

```
Overview:
In this prototype, with Arduino UNO board, but any board with one analog input could be used.
This project requires some very simple soldering to attach 4 header pins with 500 0hms resistor to the perforated board.

Measurement VOCs:  
Sensitive to hydrogen, ammonia, ethanol, hydrogen sulfide, toluene, cigarette smoke.

Measurement Value: 
ppm, Here we measure in Voltage

Parts: 
1 x Arduino Uno with USB cable ,
1 x TGS23062 H2S sensor( picture below),
1 x Perforated board or Breadboard, Wires to solder and soldering station, conductive flux.
  

*TGS2602 sensor pins Arduino Uno:*
Pin1 - GND 	-  of A1
Pin2 - In series 450 ohm or 500-ohm resistor, 	The resistor is connected to the Arduino pin A1
Pin3 - 5V 	+  Of 5V
Pin4 - 5V 	+  Of 5V

[link text](https://gitlab.com/Sairamdhandapani/heart-beat-monitor-with-arduino-/tree/master/H2S%20sensor%20test)
```