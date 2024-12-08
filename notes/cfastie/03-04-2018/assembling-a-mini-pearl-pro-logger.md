---
title: Assembling a Mini Pearl Pro Logger
tagnames: arduino, sensors, datalogger, data-logging, activity:arduino, mini-pearl-logger, activity:mini-pearl-logger
author: cfastie
path: /notes/cfastie/03-04-2018/assembling-a-mini-pearl-pro-logger.md
nid: 15857
uid: 554

---

# Assembling a Mini Pearl Pro Logger

by [cfastie](../profile/cfastie) March 04, 2018 03:10

March 04, 2018 03:10 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [datalogger](../tag/datalogger), [data-logging](../tag/data-logging), [activity:arduino](../tag/activity:arduino), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger)

A Mini Pearl Pro Logger Kit includes four electronic modules which must be soldered together. Wires and a wiring diagram are included, and this research note is the closest thing to step-by-step assembly instructions. It is not critical to follow the exact sequence below. The important thing is to connect the correct pins (holes) on each of the modules. The goal is to mount the connected modules on a 3D printed plate so the logger becomes a sturdy unit. These instructions mostly apply to both the Mini Pearl Logger and Mini Pearl Pro Logger kits, although the Mini Pearl Logger does not always have a timer.

![image description](https://publiclab.org/system/images/photos/000/023/818/large/MinPerlFritzTPLgo.jpg "MinPerlFritzTPLgo.jpg")

_Above: Wiring diagram for the Mini Pearl Logger with low-power timer. These connections will have to be made with soldered wires. The diagram shows ground wires (black) from three modules connecting to a single GND pin on the Arduino Pro Mini. The Pro Mini has two other GND pins which can also be used so each wire can connect to a different pin. Any GND pin can be used for any module._

![image description](https://publiclab.org/system/images/photos/000/023/804/medium/miniPearl_20180223-2658ps2.jpg "miniPearl_20180223-2658ps2.jpg")

_Step 1: Layout. These are the four modules before they are prepared. The microSD card module and real-time clock module (right) come with header pins already soldered on. The Arduino Pro MIni and low-power timer (left) are shipped with no header pins. Shown is a Mini Pearl Pro Logger with the Adafruit Low-power Timer option. A different timer (Log-a-Long Timer) is an option with either kit. The goal is to solder wires between these modules so the finished logger can be mounted on the plate in the above configuration. Getting the wires to be the correct length is the hardest part of the build._

![image description](https://publiclab.org/system/images/photos/000/023/805/medium/miniPearl_20180225-2674.JPG "miniPearl_20180225-2674.JPG")

_Step 2: Solder headers to the Pro Mini. The Arduino Pro Mini must have six 90° header pins soldered on one end (right) to connect with a UART adapter cable for programming and serial monitoring. It is also handy to solder one male header to the VCC pin (bottom, between A3 and RST) if you might later want to power an additional component. The Pro Mini will eventually have 13 wires soldered to it, but the far end of these wires will be soldered to the other components first and later connected to the Pro Mini._

![image description](https://publiclab.org/system/images/photos/000/023/806/medium/miniPearl_20180225-2676ps.jpg "miniPearl_20180225-2676ps.jpg")

\_Step 3: Solder six wires to the microSD module. The microSD module has straight header pins, but the build is tidier if these are bent 90° before the wires are soldered on. I removed the black plastic strip from the pins before I bent them, but that is optional. The wires must be about 4 cm long, but the VCC wire [red] should be about 5 cm and the GND wire [black] can be about 3 cm (if it connects to the closest GND pin on the Pro Mini)._

![image description](https://publiclab.org/system/images/photos/000/023/807/medium/minipearl_20180303-2714.JPG "minipearl_20180303-2714.JPG")

_Step 4\. Prepare the real-time clock. The RTC module comes with six 90° header pins on one end and none on the other. Solder four wires each about 7 cm long to the four I2C pins (GND, VCC, SDA, SCL). I2C sensors can be connected to the I2C pins at the other end (right). Four 90° pins have been soldered on above, but you might want to connect your sensor wires differently (e.g., solder wires directly to the holes). A resistor has been removed from the RTC modules in the kits to disable the circuit which charges the coin cell battery because the coin cell batteries included in the kits are not rechargeable._

![image description](https://publiclab.org/system/images/photos/000/023/808/medium/minipearl_20180303-2710.JPG "minipearl_20180303-2710.JPG")

_Step 5: Wire the battery case and timer. The two wires from the battery case can be soldered directly to the VDD (red) and GND (black) holes on the Adafruit Low Power Timer. Three other wires connect to the Arduino Pro Mini. Wires about 7 cm long should be soldered to GND, DRV, and DONE._

![image description](https://publiclab.org/system/images/photos/000/023/817/medium/miniPearl_20180218-2610-2.JPG "miniPearl_20180218-2610-2.JPG")  
_Step 6: Solder resistor. The timer interval can be set with a potentiometer on the timer or with a resistor. To lock in a timer interval, an included resistor can be soldered between the GND and Delay holes ("6202" above). You will also have to cut the jumper trace on the other side of the module ("Trim Enable")._

![image description](https://publiclab.org/system/images/photos/000/023/809/medium/miniPearl_20180225-2670-2ps.jpg "miniPearl_20180225-2670-2ps.jpg")

_Step 7: Log-a-Long timer option. If you have the [Log-a-Long Timer Kit](https://publiclab.org/notes/cfastie/03-01-2018/low-power-timer-upgrade), follow the instructions to prepare it with the same five wires as the Adafruit timer._

![image description](https://publiclab.org/system/images/photos/000/023/810/medium/miniPearl_20180226-2688a.jpg "miniPearl_20180226-2688a.jpg")

_Step 8\. Solder 13 wires to the Arduino Pro Mini. Arrange the prepared modules on the mounting plate. One module at a time, arrange the wires so they reach the correct pins on the Pro Mini. Three wires from the timer can pass through a square hole and under the plate then emerge through a round hole to reach the RAW, GND, and A3 pins. As you finish each module you can use a twist wire to secure it to the plate, but leave the Pro Mini loose until all soldering is done._ _In the build above, most wires enter the holes in the Pro Mini from below and are soldered from the top. As more wires are soldered to the Pro Mini, soldering subsequent wires becomes more difficult. So an alternate approach is to start by soldering the four wires for the RTC to the Pro Mini (and not to the RTC), and end by soldering them to the RTC._

![image description](https://publiclab.org/system/images/photos/000/023/813/large/miniProPins.jpg "miniProPins.jpg")

_Step 8\. (continued): Solder wires to Pro Mini. Here are the pins on the Pro Mini that must be connected. There are three available ground (GND) holes (avoid the one at the top for the FTDI cable) and three wires to connect to ground (connect to any of the GND holes, they are all the same). There is only one VCC hole, and two wires must be soldered to it. It is easiest to solder them both at the same time. If you might need to power another component (e.g., a one-wire sensor), it is handy to have a header pin soldered to VCC and to one of the GND holes (it just makes later soldering easier)._

![image description](https://publiclab.org/system/images/photos/000/023/814/medium/miniPearl_20180226-2690.JPG "miniPearl_20180226-2690.JPG")

_Step 9: Attach battery case. An elastic cord is passed through holes and tied tightly around the battery case. All of the modules have been secured with one or two twist wires. Two four-wire cables (old phone cables) have been soldered to the I2C pass-through pins on the RTC (right) to connect to I2C sensors. Note the two header pins sticking up from the Pro Mini at the VCC and GND pins in case I want to power another component (I do)._

The Pro Mini, RTC, and Adafruit timer have LEDs which shine when power is supplied by the timer. To save battery power, these can be disabled by removing resistors from the modules, or cutting a jumper trace on the Adafruit timer. Because the LEDs shine only for two or three seconds during each logging event, they might not use much power. For very long deployments, disabling the LEDs could extend battery life enough to justify the effort.