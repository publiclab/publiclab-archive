---
title: Willow Creek Water Quality Monitoring (EC and TDS)
tagnames: water-quality, water-quality-sensor, activity:turbidity, activity:data-logging, mini-pearl-logger, activity:mini-pearl-logger, tds, activity:conductivity, response:14702, reclamation
author: MadTinker
path: /notes/MadTinker/03-21-2018/willow-creek-water-quality-monitoring-electrical-conductivity-sensor.md
nid: 15996
uid: 461206

---

# Willow Creek Water Quality Monitoring (EC and TDS)

by [MadTinker](../profile/MadTinker) March 21, 2018 22:57

March 21, 2018 22:57 | Tags: [water-quality](../tag/water-quality), [water-quality-sensor](../tag/water-quality-sensor), [activity:turbidity](../tag/activity:turbidity), [activity:data-logging](../tag/activity:data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [activity:mini-pearl-logger](../tag/activity:mini-pearl-logger), [tds](../tag/tds), [activity:conductivity](../tag/activity:conductivity), [response:14702](../tag/response:14702), [reclamation](../tag/reclamation)

\[The above picture is of my wife spreading grass and wild flower seeds on our section of the Willow Creek Reclamation Area. For those of you in the Western US, this should be an alarming picture. We are at the headwaters of the Rio Grande watershed and there hasn't been much snow- about 50% of snowpack. Where she is standing the snow is usually about a meter deep. If we don't get more snow this winter, you won't get water this summer. Dave \]

\[Edit: 4/18/18 - parts list correction\]

The goal of this portion of the [Willow Creek Reclamation water quality monitoring](https://publiclab.org/n/14702) is focused on developing sensor/data logger packages to be deployed along Willow Creek, near Creede, Colorado. The first sensor discussed here is a variation of the [DFRobot TDS sensor](https://www.dfrobot.com/product-1662.html) combined with temperature sensor. A second write will focus on the [DFRobot turbidity sensor.](https://www.dfrobot.com/product-1394.html) Both will be packaged independently with the [Mini-Pearl logger](https://publiclab.org/tag/mini-pearl-logger) being developed by @cfastie. I suppose in some ways this also constitutes multiple replications of the construction of the Mini-Pearl logger. Many thanks to Chris @cfastie for his patience with my questions.

\[Caution: The following notes are a work in progress.\]

**Parts List**

Arduino 3.3V Pro Mini - ebay ($1.90)

MiniSD card module - ebay ($0.55)

[](https://www.dfrobot.com/product-689.html)[DS18B20 from DFRobo](https://www.dfrobot.com/product-689.html)t ($6.90)

[DFRobot TDS Sensor/Meter](https://www.dfrobot.com/product-1662.html) ($12.90)

[DS3231 RTC/AT24C32 eeprom](https://www.ebay.com/itm/DS3231-AT24C32-IIC-Precision-Real-Time-Clock-RTC-Memory-Module-for-Arduino/121936579559?epid=10014451982&hash=item1c63fc8be7:g:7V8AAOSwdJ9aOFnD) ($1.18) Note [power saving modifications suggested here](https://thecavepearlproject.org/2014/05/21/using-a-cheap-3-ds3231-rtc-at24c32-eeprom-from-ebay/)

[FT232RL FTDI to TTL Serial Adapter](https://www.ebay.com/itm/FT232RL-3-3V-5-5V-FTDI-USB-to-TTL-Serial-Adapter-Module-for-Arduino-Mini-Port-/381374421597) ($1.78)

[Battery pack](https://www.ledsupply.com/accessories/aa-battery-holder-switch-leads) ($1.49)

3x AA ($1.88)

[CR2032 ](https://www.digikey.com/product-detail/en/panasonic-bsg/CR2032/P189-ND/31939)[coin battery for RTC](https://www.digikey.com/product-detail/en/panasonic-bsg/CR2032/P189-ND/31939) ($0.29)

Misc pipe, coupling, etc for packaging ($10.50)

**Data Logger**

Construction of the data logger is pretty straightforward. You can follow instructions provided for the Arduino pro-mini 3.3V provided by either [Ed Mallon](https://thecavepearlproject.org/how-to-build-an-arduino-data-logger/) (Cave Pearl) or [Chris Fastie](https://publiclab.org/wiki/mini-pearl-logger) @cfastie (mini-pearl).

![image description](https://publiclab.org/system/images/photos/000/024/174/large/IMG_8493_%281%29.jpg "IMG_8493_(1).jpg")

**Temperature Sensor**

Sorry I don't have more detailed pictures of the assembly. The temperature sensor is the [](https://www.dfrobot.com/product-689.html)[](https://www.dfrobot.com/product-689.html)[DS18B20 from DFRobo](https://www.dfrobot.com/product-689.html)t. This is a one wire sensor (red and black wire to power, yellow wire to digital pin 2). It is waterproof, but additional shrink wrap will be added before installation in carrier.

**TDS Sensor**

The TDS sensor is the [DFRobot TDS Sensor/Meter](https://www.dfrobot.com/product-1662.html). This is an analog device that comes with a connector/conditioner card. As with the temperature sensor, wiring is pretty straightforward: red and black wire to power, blue wire to analog pin A1\. The sensor is advertised as water proof.

As you can see from the picture below, things get a little crowded - I didn't plan ahead very well when I first constructed the data logger. The data logger and battery pack were attached to one side of a small piece of Lexan (clear plastic sheet). The TDS conditioner card was attached to the other side.

The TDS sensor pulls a reading from the temperature sensor and compensates the voltage reading from the TDS sensor. The drop in voltage (a measure of the electrical conductivity) is then converted to a TDS reading through a simple multiplier (x 0.5 ).

![image description](https://publiclab.org/system/images/photos/000/024/287/large/IMG_8529_%281%29.jpg "IMG_8529_(1).jpg") ![image description](https://publiclab.org/system/images/photos/000/024/286/large/IMG_8527_%281%29.jpg "IMG_8527_(1).jpg")

![image description](https://publiclab.org/system/images/photos/000/024/288/large/IMG_8526_%281%29.jpg "IMG_8526_(1).jpg")

**Code**

Will post a github link to the code soon. Such as it is. The libraries for the TDS sensor seem to be memory hogs so may have to re-think the Arduino platform. Everything seems to be working fine. I've pirated a bunch of code from @cfastie 's Mini-Pearl and from Ed Mallon's Cave Pearl project and scavenged some code from DFRobot wiki for the TDS/EC sensor.

**Packaging**

3"ID PVC pipe was chosen as the best available option for packaging. Two holes were drilled (1/4"D) through the PVC end plug. The TDS/EC and Temperature sensors fit snugly in the holes and some (crude) preliminary testing was done to see if the proximity of the Temperature sensor influenced the TDS/EC sensor and there did not seem to be a significant change in the voltage drop across the TDS sensor. The PVC plug was then epoxied in place. The entire, completed sensor package is presented below. (the black ABS fitting is being replace with a white PVC end cap)

![image description](https://publiclab.org/system/images/photos/000/024/289/large/IMG_8534_%281%29.jpg "IMG_8534_(1).jpg") ![image description](https://publiclab.org/system/images/photos/000/024/290/large/IMG_8541.jpg "IMG_8541.jpg")

**Callibration**

\[Still haven't gotten this bit of code running, but the unit wasn't significantly off from the TDS pen used for calibration.\]

**Initial Deployment**

Just received permission to do the sensor testing in Willow Creek. Working on a deployment scheme (how to attach to the stream bed). Sent out a notice to the community via Facebook so they wouldn't freak out about seeing a suspicious package.

A few pictures of sensor package placement. This is a short term experiment for a week to test the packaging, the sensor, data collection, etc. Placement is such that the sensors are pointing down stream, the package is buried in a few large rocks. We are at the lowest flow of the year so the water depth is only 6" or so. If we get any runoff, the depth will be grow to a couple feet in the next month. The goal is to complete the initial assessment, correct all the bad things and then re-deploy in about two weeks. \[apologies for the large pictures, for some reason, the page layout would only do small or large size images.\]

![image description](https://publiclab.org/system/images/photos/000/024/314/large/DSC_0278_%281%29.jpg "DSC_0278_(1).jpg")

![image description](https://publiclab.org/system/images/photos/000/024/315/large/DSC_0286_%281%29.jpg "DSC_0286_(1).jpg")

![image description](https://publiclab.org/system/images/photos/000/024/312/large/DSC_0285_%281%29.jpg "DSC_0285_(1).jpg")

Don't let the sunshine fool you. It was cold enough that the icicles were forming on my cuffs.

![image description](https://publiclab.org/system/images/photos/000/024/313/large/IMG_8545.jpg "IMG_8545.jpg")

**Initial Deployment**

The unit was tested for a week to evaluate the structural integrity, data collection, etc.

![image description](https://publiclab.org/system/images/photos/000/024/593/large/IMG_8584.jpg "IMG_8584.jpg") ![image description](https://publiclab.org/system/images/photos/000/024/595/large/IMG_8585.jpg "IMG_8585.jpg")

The initial testing was less than successful. The sensors and data logger functioned for a bit over 3 days of the planned 8 days. The unit developed a small leak at some point after that and the data collection was corrupted and then the unit shutdown. (A movie of the water being emptied could not be uploaded.)

A new seal is being developed and another test is planned to begin in about 3 weeks.

Final Deployment

TBD

**Test Results**

TBD

**Questions**

TBD

**Lessons Learned**

I had originally planned on packaging this in a 1" ID length of PVC. The mini-pearl fit very nicely in this small profile package. I found a number of battery packs that also fit snugly inside the PVC - and they were on sale for 1/3 the original price. A previous note documented the [re-wiring of the USB connector.](https://publiclab.org/n/15700) Unfortunately I found that the battery pack power automatically cuts off when the current draw drops to zero. Which happens intentionally when the mini-pearl logger goes into a power saving mode. Looks like I have some power packs as stocking stuffers for next Christmas. Back to a traditional battery pack.

![image description](https://publiclab.org/system/images/photos/000/024/154/large/IMG_8495.jpg "IMG_8495.jpg")

**Additional Background**

I'm pretty new at this so take this grain of salt (there must be a TDS joke in there somewhere), but yes, I'm pretty sure that most/all TDS meters measure conductivity and convert to a TDS measurement. That was why I originally asked the question. When I took my water quality monitoring class from the State of Colorado, the folks there indicated that they no longer report TDS (nor TS - total solids) because it is difficult to establish state-wide baselines. One major issue is the conversion from EC to TDS depends on so many things that a simple multiplier is very location and season dependent.

So many things can be involved with TDS (total dissolved solids) and TS (total solids): salts, minerals, organic matter, etc. It is no longer a standardized metric for water quality in Colorado. Note the emphasis on 'standardized'. The same holds true for EC (conductivity). However, EC is still recognized by the EPA as an 'indicator' of water quality. As an indicator, you are looking for changes or patterns. After discussing what I wanted to do with my EC loggers, that was how the Colorado Parks and Wildlife suggested that I present the data and the overall effort related to simple water quality monitoring. EC is cheap to monitor, easy to communicate to the masses, easy to teach to kids (e.g. coqui), and reasonably understood by the folks I would need to communicate with. Obviously there are still some technical issues with EC sensors in general. I'm hoping the new sensor mitigates some of those issues. And also the EC sensor will be paired with a turbidity sensor and there should be a correlation between those two readings.

I also have a Riffle (still in the packing material) and maybe after some fires have died down, I'll take a look at connecting those two.