---
title: 'Simple data logger'
tagnames: datalogger, pressure, barometric, activity:data-logging, datalogger-option
author: david_uwi
path: /notes/david_uwi/04-25-2017/simple-data-logger.md
nid: 14138
uid: 469053

---

![](https://publiclab.org/public/system/images/photos/000/020/196/original/dataloggerpic.JPG)

# Simple data logger

by [david_uwi](../profile/david_uwi) April 25, 2017 15:32

April 25, 2017 15:32 | Tags: [datalogger](../tag/datalogger), [pressure](../tag/pressure), [barometric](../tag/barometric), [activity:data-logging](../tag/activity:data-logging), [datalogger-option](../tag/datalogger-option)

----

Newer microprocessors have quite a bit of flash memory and any that is left over from the main program can be used to store data. So a single chip can act as simple data logger. It also uses very little power 2xAAA bateries will last for about one year with a monitor screen attached or several years if the screen is disconnected.  
I have used the chip PIC16F18326 which has 16K of 14 bit words. After loading the processing program some 14K is left to store data. I have used it to measure barometric pressure at 12 minute intervals for 16 weeks (each 12 minute point is the average of 360 readings).  
Below is the graph of 16 weeks of data (note the picture is only 2K pixels across and there are 13K data points so some information is lost).![image description](https://publiclab.org/system/images/photos/000/020/193/large/output.png "output.png")  
Below is the circuit diagram. Accurate timing is achieved by using a clock crystal.![image description](https://publiclab.org/system/images/photos/000/020/195/large/datalogger.png "datalogger.png")