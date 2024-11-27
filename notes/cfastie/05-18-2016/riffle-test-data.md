---
nid: 13127
title: Riffle test data
path: public/static/notes/cfastie/05-18-2016/riffle-test-data.md
uid: 554
tagnames: arduino,temperature,water-quality,riffle,micro-sd,response:13122,riffle-beta,category:test-limits,data-logging
---

# Riffle test data

I think the [corruption of the micro SD card](https://publiclab.org/notes/cfastie/05-18-2016/riffle-test-1) I was using in the Riffle had nothing to do with the Riffle. I have a USB card reader for both regular and micro SD cards and I inserted the micro SD card when another SD card was already inserted. Then I removed the regular SD card. That must have bricked the micro SD card. Strange.

So this time I took the other SD card out before I inserted the one fresh from the Riffle. The CSV file went right into Excel and includes some useful data.

[![RTCtemptrace.JPG](//i.publiclab.org/system/images/photos/000/016/209/large/RTCtemptrace.JPG)](//i.publiclab.org/system/images/photos/000/016/209/original/RTCtemptrace.JPG)  
*Figure 1. 400 data points from the temperature sensor embedded in the real time clock integrated circuit on the Riffle. The Riffle and battery were carried to three places during an hour of recording the temperature.*

The sensor in the RTC seems to respond well to temperature changes (Fig. 1). The temperature data are stepped, i.e., identical data points are repeated, usually seven times (Tables 1 and 2).  During the first half of the data log file, the timestamps indicate that the readings were made every eight seconds (Table 1), but that changed after about 35 minutes so that timestamps are only one second apart and then skip 55 seconds (Table 2). I don't know whether this is the way the sketch was written or an artifact of the hardware. The data for battery status are not stepped like the temperature data.

[![table2.JPG](//i.publiclab.org/system/images/photos/000/016/215/medium/table2.JPG)](//i.publiclab.org/system/images/photos/000/016/215/original/table2.JPG)  
*Table 1. Example from the first part of the data file. For the first half of the data file the timestamps are regularly spaced about eight seconds apart. The temperature readings are typically repeated seven times, so a new temperature is recorded about every minute.*


[![table.JPG](//i.publiclab.org/system/images/photos/000/016/210/medium/table.JPG)](//i.publiclab.org/system/images/photos/000/016/210/original/table.JPG)  
*Table 2. Example from the later part of the data file. For the second half of the data file the timestamps are not at regular intervals, but are about one second apart for about seven readings and then skip a minute or so. Temperature readings are typically repeated seven times.*

The data for battery level indicate that level increased when the Riffle was in the freezer (Fig. 2). Battery level is also erratic when the Riffle is being moved around compared to sitting stationary. Carrying the Riffle from the 3D printer to the freezer causes more variation than being inside my shirt while I am sitting. The change in timestamp interval after about 35 minutes is conspicuous in Figure 2.

[![RTC_batt.JPG](//i.publiclab.org/system/images/photos/000/016/216/large/RTC_batt.JPG)](//i.publiclab.org/system/images/photos/000/016/216/original/RTC_batt.JPG)  
*Fig. 2. 400 data points for battery level (green) and temperature from RTC (red).*

Data for analog0 voltage, whatever that is, are not very interesting (Fig. 3).

[![RTC_analog0.JPG](//i.publiclab.org/system/images/photos/000/016/217/large/RTC_analog0.JPG)](//i.publiclab.org/system/images/photos/000/016/217/original/RTC_analog0.JPG)  
*Fig. 3. 400 data points for temperature (red) and "analog0 voltage" (purple). I don't know what analog0 voltage is.*

I have a bunch of external sensors I could hook up to the Riffle. It looks like it is going to be a lot of work to figure out how to wire them up and modify a sketch to log the data. It would be good to have a step by step procedure for doing that. 
