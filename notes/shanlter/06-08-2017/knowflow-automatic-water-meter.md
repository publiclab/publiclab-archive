---
title: "Build KnowFlow: automatic water moniter"

tagnames: 'arduino, water-quality, water, water-quality-sensor, open-water, barnstar:photo-documentation, china, seeks:replications, data-logging, knowflow, activity:water-monitoring, activity:data-logging, activity:knowflow'
author: shanlter
path: /notes/shanlter/06-08-2017/knowflow-automatic-water-meter.md
nid: 14511
uid: 420999

---

![](https://publiclab.org/public/system/images/photos/000/020/720/original/BOM.JPG)

# Build KnowFlow: automatic water moniter

by [shanlter](../../../profile/shanlter) | June 08, 2017 09:35

June 08, 2017 09:35 | Tags: [arduino](../tag/arduino), [water-quality](../tag/water-quality), [water](../tag/water), [water-quality-sensor](../tag/water-quality-sensor), [open-water](../tag/open-water), [barnstar:photo-documentation](../tag/barnstar:photo-documentation), [china](../tag/china), [seeks:replications](../tag/seeks:replications), [data-logging](../tag/data-logging), [knowflow](../tag/knowflow), [activity:water-monitoring](../tag/activity:water-monitoring), [activity:data-logging](../tag/activity:data-logging), [activity:knowflow](../tag/activity:knowflow)

----

For couple of months I'm at Shanghai, working with [DFRobot](https://www.dfrobot.com), a robotics and open source hardware provider company, to develop an open source automatic water quality monitoring device that could be used for [Pearl River monitoring](https://publiclab.org/notes/shanlter/09-21-2016/pearl-river-monitoring-in-guangzhou).

Background in environmental investigation NGO, my knowledge on electronic development is very limited. Hopefully this document could help people like me to easily understand and replicate such a tool.

**KnowFlow** is the name of this water quality monitoring device, based on Arduino Uno. It can automatically monitor 5 parameters of water: **pH, Temperature, Dissolved Oxygen, Electronic Conductivity, ORP**.

Currently, KnowFlow is powered by a 7.4V lipo battery, the data is stored in a SD card. The field test will be described in a separate research note.

DFRobot produces all the electronic components except for DO, which is produced by Atlas Scientific (btw, [all the DFRobot's products are open source](https://www.dfrobot.com/wiki/index.php/Main_Page)), most of the materials I listed are made by them.

##Prepare the materials
![image description](https://publiclab.org/system/images/photos/000/020/692/large/BOM.JPG "BOM.JPG")

- Central Control Unit: Arduino Uno (DFRobot Bluno in this case) and Expansion Shield (DFRobot Expansion Shield V7.1 in this case)
- Water Sensors: pH (pH probe and pH circuit board); EC (EC probe and EC circuit board); ORP (ORP probe and ORP circuit board); Temperature (temperature probe and temperature circuit board); Dissolved Oxygen (DO probe, BNC and circuit board); real time clock circuit board
- Data Storage: Micro-SD module, Micro SD card
- Fit and fix: mounting plate, water proof box( 200mm\_150mm\_75mm), water proof joint
- Other parts: Cables (Wires), bread board, bolts and nuts, screws, battery, double-sided adhesive, write on tape, small wrench, spiral cable wrap

The size, modal, drawings, and other specifications of the materials can be found [here at google docs](https://docs.google.com/spreadsheets/d/1rwVUIwqTOvZiKi_0vdBPrXMIw2YB-nsFnhaVy5seE-M/edit?usp=sharing).

##Software

1. Download Arduino IDE
2. Download Knowflow code from [KnowFlow github](https://github.com/KnowFlow/KnowFlow_AWM)
3. find "WaterMonitor.ino" from the downloaded file, open it with Arduino IDE
4. Connect your Arduino Uno board, in menus, select "Tools - Board: Arduino Uno", and "Ports - /dev/cu.usb..."
5. click "Verify", than "Upload" the software to your board.

##Hardware

We need to connect all the sensors, MicroSD card module to the Arduino, then fixed it to the plate and the waterproof box, connected to the power supply.

Those who are familiar with the Arduino could directly read code annotation

**1. Connect the circuit board and other modules to the Arduino expansion (I / O Expansion Shield V7.1)**

- **Connect EC:** Plug one end of the "orange-red-black" cable to the EC circuit board, other end to the IN terminal of the isolation module. Plug the white end of the "blue-red-black" cable to the OUT terminal of the isolation module, the black end to **Analog port** A1, note the color should be matched.

![image description](https://publiclab.org/system/images/photos/000/020/695/large/EC_signal_module.JPG "EC_signal_module.JPG")

![image description](https://publiclab.org/system/images/photos/000/020/694/large/EC_Signal_Arduino.JPG "EC_Signal_Arduino.JPG")

- **Connect the pH:** Plug the white end of the "blue-red-black" cable to the pH data transfer board, the black end to port A2.

![image description](https://publiclab.org/system/images/photos/000/020/696/large/pH_Arduino.JPG "pH_Arduino.JPG")

- **Connect ORP:** Like EC, Plug one end of the "orange-red-black" cable to the EC data adapter and the other end to the IN terminal of the isolation module. Plug the white end of the "blue-red-black" cable to the OUT terminal of the isolation module, and the black end to the A3

![image description](https://publiclab.org/system/images/photos/000/020/697/large/ORP_Arduino.JPG "ORP_Arduino.JPG")

- **Connection temperature:** Plug the white end of the "green-red-black" cable to the Plugable Terminal V2, and the black end to **Digital Port** D5

![image description](https://publiclab.org/system/images/photos/000/020/698/large/Temp_Arduino.JPG "Temp_Arduino.JPG")

- **Connect the dissolved oxygen DO:** The connection of the dissolved oxygen is bit complicated. Using four wires and breadboard to connect DO to the serial port (connection principle is GND-GND, VCC-VCC, TX-RX, RX-TX)

![image description](https://publiclab.org/system/images/photos/000/020/700/large/DO_BNC.jpg "DO_BNC.jpg")

![image description](https://publiclab.org/system/images/photos/000/020/701/large/DO_Arduino_cable.jpg "DO_Arduino_cable.jpg")

**Note! Very important!** Each time you re-upload the program to Arduino, you need to pull out the Rx (0) Tx (1) cable, and re-plug it after uploading. Otherwise it can not be programmed successfully.

- **Connect the Real Time Clock (RTC) module:** Plug the white end of the "blue-green-red-black" cable to RTC, and the black end to the blue I2C interface (you might need to wrap the line in case it's too long)
- **Connect the MicroSD card module to the blue SD card slot (note the direction) and insert the Micro SD card**

![image description](https://publiclab.org/system/images/photos/000/020/699/large/RTC_Arduino.JPG "RTC_Arduino.JPG")

**Great!!! All sensors are connected!**

Tips: You can use the write-on tape to mark different sensors to avoid confounding, and wrap the analog cables and DO cables respectively to avoid clutter.

**2. Place the mounting plate to the waterproof box**

(The drawing of the mounting plate is here at [GitHub](https://github.com/KnowFlow/KnowFlow_AWM/blob/master/Hardware/Box_and_Plate.dwg) )

Find the mounting plate, bolts and screws, install the hexagonal column to the small holes. The nylon column is mounted on the front of the board and the nut is mounted on the opposite side. Among which, the 4 Arduino fixing hole requires 6mm nylon column, which the rest requires 4mm nylon columns. You can use a small wrench to help tighten.

![image description](https://publiclab.org/system/images/photos/000/020/702/large/nylon_coloum.jpg "nylon_coloum.jpg")

![image description](https://publiclab.org/system/images/photos/000/020/703/large/Plate.JPG "Plate.JPG")

Use two 4mm screws to secure the board in the waterproof box. (Some waterproof box might conflict with the lower right column, it can be removed in this case)

![image description](https://publiclab.org/system/images/photos/000/020/704/large/Plate_Box.JPG "Plate_Box.JPG")

**3. Attach the electronic components to the mounting plate**

- Since the DO module is more difficult to install, so we should install it first. (it can also be soldered). Attach the double-sided adhesive tape under the DO breadboard. Pass BNC interface from the circuit board through the hole, adhere the breadboard.

![image description](https://publiclab.org/system/images/photos/000/020/705/large/DO_Box.JPG "DO_Box.JPG")

- Fix Arduino Uno, place the Arduino expansion board.

![image description](https://publiclab.org/system/images/photos/000/020/706/large/Arduino_Box.JPG "Arduino_Box.JPG")

- Pass the BNC of ORP's circuit board though the rightmost hole of the waterproof box, fix it to the mounting plate with screws, install EC and pH in the same way.

![image description](https://publiclab.org/system/images/photos/000/020/707/large/ORP_EC_pH_Box.JPG "ORP_EC_pH_Box.JPG")

- Adhere the two isolating modules to the top right of the mounting plate by tape.

![image description](https://publiclab.org/system/images/photos/000/020/708/large/batch_DSC_2623.JPG "batch_DSC_2623.JPG")

- Fix RTC

![image description](https://publiclab.org/system/images/photos/000/020/709/large/RTC_Box.JPG "RTC_Box.JPG")

- Now, only left temperature module. Tighten the waterproof connector to the round hole outlet of the temperature probe

![image description](https://publiclab.org/system/images/photos/000/020/710/large/Waterproof_connector.JPG "Waterproof_connector.JPG")

![image description](https://publiclab.org/system/images/photos/000/020/711/large/batch_DSC_2630.JPG "batch_DSC_2630.JPG")

- Then, the temperature probe has a bare end of the line, followed by waterproof connector cover and round hole,

![image description](https://publiclab.org/system/images/photos/000/020/712/large/batch_DSC_2631.JPG "batch_DSC_2631.JPG")

- There are three "gates" in the front of the temperature signal adapter board. Press the button above, and the "gate" will open. Plug the yellow wire in the A gate, the red wire to B gate, black wire to C gate. Try to pull out the three wires respectively to make sure there're fastened after plugging in.

![image description](https://publiclab.org/system/images/photos/000/020/713/large/Temp_insert.JPG "Temp_insert.JPG")

- Use a screw to secure the temperature signal adapter board to the board and tighten the waterproof connector nut on the housing.

![image description](https://publiclab.org/system/images/photos/000/020/714/large/Temp_install.JPG "Temp_install.JPG")

- In-box part is completed, now connect the battery to test whether the installation is correct. If the light turns on, it means that the circuit is normal.

![image description](https://publiclab.org/system/images/photos/000/020/716/large/batch_DSC_2638.JPG "batch_DSC_2638.JPG")

- Close the box and connect each probes.

![image description](https://publiclab.org/system/images/photos/000/020/717/large/batch_DSC_2642.JPG "batch_DSC_2642.JPG")

**Done!**

![image description](https://publiclab.org/system/images/photos/000/020/718/large/batch_DSC_2645.JPG "batch_DSC_2645.JPG")

The field test of this device will be written in a separate research note.

![image description](https://publiclab.org/system/images/photos/000/020/719/large/Lauren_Field_Test.jpg "Lauren_Field_Test.jpg")