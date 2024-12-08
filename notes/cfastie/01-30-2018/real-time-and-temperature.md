---
title: Real time and temperature
tagnames: arduino, barnstar:empiricism, data-logging, mini-pearl-logger, real-time-clock, ds3231, pro-mini
author: cfastie
path: /notes/cfastie/01-30-2018/real-time-and-temperature.md
nid: 15638
uid: 554

---

# Real time and temperature

by [cfastie](../profile/cfastie) January 30, 2018 04:03

January 30, 2018 04:03 | Tags: [arduino](../tag/arduino), [barnstar:empiricism](../tag/barnstar:empiricism), [data-logging](../tag/data-logging), [mini-pearl-logger](../tag/mini-pearl-logger), [real-time-clock](../tag/real-time-clock), [ds3231](../tag/ds3231), [pro-mini](../tag/pro-mini)

I had some [Mini Pearl Loggers][1] outside this month and encountered three potential problems related to very cold temperatures. The real-time clock (RTC) modules were responsible for these issues.

1. There are different variants of the DS3231 RTC integrated circuit. One of them is not rated for temperatures below 0°C.
2. Time data from the RTC can be wrong when the coin cell battery in the RTC module is worn out and also cold.
3. The standard libraries for interacting with the RTC do not correctly report temperatures below 0°C.

[![DS3231variants.jpg](https://publiclab.org/system/images/photos/000/023/393/medium/DS3231variants.jpg)](https://publiclab.org/system/images/photos/000/023/393/original/DS3231variants.jpg)  
_Figure 1\. Four different variants of the DS3231 RTC chip. Maxim makes chips etched with DS3231S, DS3231SN, and DS3231M. I don't know who makes a chip etched with "DS3231." The "#" and the "+" signify that the chip is ROHS compliant (contains no lead, etc.). I don't know what the round mark on the DS3231 chip means (other than just marking pin 1 on the chip). The red PCB is a Riffle and the others are standalone RTC modules like the lead image._

###1. Variants of DS3231

The DS3231 RTC integrated circuit is made by Maxim Integrated in San Jose, CA. Datasheets for the chip list three variants, and one of them has an operating temperature of 0° to 70°C (Table 1). So the "DS3231S" variant is not rated for use below freezing.

_Table 1\. Operating temperature ranges of DS3231 chips. Data are from Maxim datasheets for the [DS3231 S and SN variants](https://www.maximintegrated.com/en/products/digital/real-time-clocks/DS3231.html) and the [DS3231M variant](https://www.maximintegrated.com/en/products/digital/real-time-clocks/DS3231M.html) chips. I found no information about the "DS3231" variant._  
[![VariantTable.PNG](https://publiclab.org/system/images/photos/000/023/394/medium/VariantTable.PNG)](https://publiclab.org/system/images/photos/000/023/394/original/VariantTable.PNG)

There are two odd things about the information in Table 1\. I tested the DS3231S variant by putting it in the freezer and it performed normally. The temperature dropped well below 0°C and there were no signs of failure. The other odd thing is that many of the RTC modules I have purchased on eBay have the "DS3231" variant of the chip that does not appear to be one of the three made by Maxim. I couldn't confirm that Maxim makes an RTC chip that has "DS3231" etched on it. So the "DS3231" could be a counterfeit chip. I tested it in the freezer and it performed normally.

[![FreezRiff.PNG](https://publiclab.org/system/images/photos/000/023/395/large/FreezRiff.PNG)](https://publiclab.org/system/images/photos/000/023/395/original/FreezRiff.PNG)  
_Figure 2\. Temperature results from a 2016 beta Riffle with a DS3231S RTC chip. The Riffle recorded data from a BME280 sensor and the temperature sensor in the RTC chip while inside my freezer. The logging interval of five minutes was determined by the Atmega 328p microprocessor, not the RTC, but the RTC provided the timestamps for each data logging event. The timestamps indicate that the RTC was functioning normally even at temperatures well below 0°C. The discrepancy between the temperature results from the BME280 and RTC are irrelevant to the current issue._

Although very cold temperatures could present problems for certain RTC chips, my tests did not reveal any problems. All four variants of the chip were exposed to temperatures below -17°C and seemed to work normally. I did not test for temperature accuracy, just general ballpark operation and especially interval length inconsistencies.

###2. Low battery voltage

I encountered erroneous results from the RTC in a Mini Pearl Logger when I first deployed one outside in early January when I was testing the Adafruit TPL5110 Low Power Timer. It appeared that the interval between logging events became very short when the temperature was below about -13°C (Figure 3).

[![RTCfailJan6-7a.PNG](https://publiclab.org/system/images/photos/000/023/396/large/RTCfailJan6-7a.PNG)](https://publiclab.org/system/images/photos/000/023/396/original/RTCfailJan6-7a.PNG)  
_Figure 3\. Temperature results and logging interval for 400 logging events recorded by a Mini Pearl Logger with Adafruit Low Power Timer. The logging interval appears to change from 9.3 minutes to 10 seconds when the temperature drops to about -18°C. In fact, the interval was remaining at 9.3 minutes but the timestamps provided by the RTC were wrong when it was that cold._

This result suggested that the Adafruit timer was misbehaving, but inspection of the data revealed that the logging intervals were correct and the problem was the timestamps provided by the RTC. I learned this problem was caused by a worn out coin cell battery in the RTC module when I replaced that battery and the problem disappeared. When it's that cold the coin cell battery can't be the one that has been powering the RTC for a year.

[![2.5ColdDays.PNG](https://publiclab.org/system/images/photos/000/023/397/large/2.5ColdDays.PNG)](https://publiclab.org/system/images/photos/000/023/397/original/2.5ColdDays.PNG)  
_Figure 4\. The same temperature data as in Figure 3 with the x-axis modified with the correct logging interval (9.3 minutes). This time course of temperature matches local US Weather Service data for those days in January._

###3. Incorrect parsing of RTC data

The standard code to retrieve data from an RTC does not report the correct temperature when it is below 0°C. It seems odd that the Arduino libraries for RTCs have not been updated to fix this, but the code is available to insert into a sketch. Below is the code I have been using. This is a separate function, so to get the temperature in a sketch insert a line like

float rtcTemp = rtcMinus();

```
float rtcMinus() {                                                  
Wire.beginTransmission(DS3231_I2C_ADDRESS); 
Wire.write(0x11);   // the register where the temp data are stored
Wire.endTransmission();
Wire.requestFrom(DS3231_I2C_ADDRESS, 2); // ask for two bytes
if (Wire.available()) 
{
     tMSB = Wire.read();      // 2s complement int portion
     tLSB = Wire.read();       // fraction portion
     rtcTempC = ((((short)tMSB << 8) | (short)tLSB) >> 6) / 4.0; 
}
return rtcTempC;
}
```

[![BadRTCtemp.PNG](https://publiclab.org/system/images/photos/000/023/398/large/BadRTCtemp.PNG)](https://publiclab.org/system/images/photos/000/023/398/original/BadRTCtemp.PNG)  
_Figure 5\. Temperature data from a BME280 sensor and from the sensor on a DS3231 RTC. The RTC data were retrieved from the RTC using a standard command from the DS3231 library (e.g., rtc get.temperature;). Whenever the actual temperature is below 0°C, the RTC temperature appears to be equal to the real temperature plus 255\. The code above solves this problem._

###Lessons

The first of these three issues never produced incorrect results. All four of the different DS3231 chip variants worked below -15°C. I encountered incorrect results from the second and third issues, and searching for a fix led me to the information about the chip variants. It's good to know that worn out coin cell batteries are not reliable on the coldest days in Vermont. I still don't know why the DS3231S variant seems to work fine at temperatures well below zero, or who makes the "DS3231" variant.

I'm also curious about why the code to correctly retrieve temperature data from an RTC is not incorporated into the libraries for the DS3231\.

But it's now time to move on to some other arbitrary and capricious minutiae of Arduino.

[Here is the sketch that was running on the Riffle](https://publiclab.org/system/images/photos/000/023/402/original/RiffleBME.txt)

  [1]: https://publiclab.org/tag/mini-pearl-logger