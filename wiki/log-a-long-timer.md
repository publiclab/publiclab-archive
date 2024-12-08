---
title: Log-a-Long Timer
tagnames: arduino, datalogger, kaptery, data-logging, parent:data-logging, mini-pearl-logger, low-power-logging, log-a-long-timer
author: cfastie
path: /wiki/log-a-long-timer.md
nid: 15848
uid: 554

---

# Log-a-Long Timer

by [cfastie](../profile/cfastie)

March 01, 2018 16:56 | Tags: [arduino](../tag/arduino), [datalogger](../tag/datalogger), [kaptery](../tag/kaptery), [data-logging](../tag/data-logging), [parent:data-logging](../tag/parent:data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [low-power-logging](../tag/low-power-logging), [log-a-long-timer](../tag/log-a-long-timer)

This very simple timer circuit can allow data loggers (and other devices) to operate for many months on small batteries. The timer supplies power to the device only at the desired interval, so between data logging events only the timer uses power. The timer itself consumes very little power (30µA), so batteries last a long time. Assembling the timer involves soldering three components to a little printed circuit board (PCB). The data logging interval can be set between 5 and 110 minutes.

This timer works well with data loggers based on 3.3 volt Arduinos like the [Mini Pearl Loggers](https://publiclab.org/wiki/mini-pearl-logger). The low-power TPL5110 cannot tolerate more than 5.5 volts, so five volt Arduinos (which like to get about 6 volts) are harder to use with the timer. 

When the logging event is complete (e.g., data is written to an SD card) the sketch on the Arduino signals the timer circuit to cut power. Until the next logging event, the Arduino logger is turned off and uses no power. When the timer again supplies power to the Arduino, the sketch begins to run and instructs the logger to collect data from sensors, do calculations, save data to an SD card, etc., and eventually sends a signal back to the timer to cut power again.

[![logalong_20180228-2705ps.JPG](https://publiclab.org/system/images/photos/000/023/779/medium/logalong_20180228-2705ps.JPG)](https://publiclab.org/system/images/photos/000/023/779/original/logalong_20180228-2705ps.JPG)  
*Above: The parts included in a Log-a-Long Timer Kit. A selection of five surface-mount resistors (bottom) allows one to be chosen for the desired logging interval. Ruler hatch marks are mm.*

###Parts

- [SOIC8 to DIP8 adapter](https://www.aliexpress.com/item/2016-electronic-circuit-20-PCS-SOP8-SO8-SOIC8-SMD-to-DIP8-Adapter-PCB-Board-Converter-Double/32592419821.html) (green circuit board)
- [TPL5110 timer IC](https://www.digikey.com/product-detail/en/texas-instruments/TPL5110DDCT/296-38830-1-ND/5130150)
- [P-channel mosfet](https://www.digikey.com/product-detail/en/diodes-incorporated/DMG3415U-7/DMG3415UDICT-ND/2052799)
- Selection of surface mount resistors. Choose one to determine logging interval:
    4302 (43KΩ) = 5 minutes, 6202 (62KΩ) = 12 minutes, 9102 (91KΩ) = 29 minutes, 1203 (120KΩ) = 55 minutes, 1603 (160KΩ) = 110 minutes
- 1MΩ through-hole resistor to clean up the Done line (optional)
- 4 male header pins, 1 extra-long pin

Header pins are not needed if the five wires to the battery and data logger are soldered directly to the pin holes. Header pins allow DuPont wires (not included in the kit) to slide on to make the connections.

[![TPLDIYgreen2.jpg](https://publiclab.org/system/images/photos/000/023/780/medium/TPLDIYgreen2.jpg)](https://publiclab.org/system/images/photos/000/023/780/original/TPLDIYgreen2.jpg)  
*Above: Build diagram for the Log-a-Long Timer Kit. Three components and five wires must be soldered to the green PCB.*

###Assembly steps

1.	Solder the TPL5110 to the PCB on the side with larger solder pads. The six legs (1-6) should connect to pads 1 to 3 and 6 to 8. The orientation is important. This can be done with fancy equipment (solder paste, reflow oven, rework station) or any good soldering iron--tin the six pads on the PCB, align the IC, and heat each leg with a soldering iron.
2.	Solder the two legs on one side of the mosfet (Gate and Source) to pin holes 7 and 8 as shown. Solder the third leg (Drain) to solder pad 5.
3.	If you are using header pins (instead of soldering wires directly to the pin holes) solder male header pins on the underside of the PCB at holes 1, 2, 5, and 6. Two wires must be connected to ground, so an extra-long pin (included) can be used at pin 2 so a connector can be attached above and below the PCB.
4.	If you are soldering wires directly to pin holes 1, 2, 5, and 6, do it now. Two ground wires (from battery and Arduino) get connected to hole 2.
5.	Solder a resistor between holes 2 (Ground) and 3 (Delay) to determine the logging interval. The orientation is not important.
6.	Connect hole 1 to solder pad 8 with a short wire or solder blob.
7.	Solder a 1MΩ through-hole resistor between holes 2 (Ground) and 6 (Done). The legs of the resistor can be cut to fit. It can be under the PCB but might be easier on top if you used header pins. This is optional but can clean up the signal sent from the Arduino to cut the power.  

[![miniPearl_20180226-2690.JPG](https://publiclab.org/system/images/photos/000/023/781/medium/miniPearl_20180226-2690.JPG)](https://publiclab.org/system/images/photos/000/023/781/original/miniPearl_20180226-2690.JPG)  
*Above: A Log-a-Long Timer (left) controlling a Mini Pearl Logger.*

### Activities

[activities:log-a-long-timer]

### Questions

[questions:log-a-long-timer]


