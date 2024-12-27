---
title: "Stand Alone Data Logger for Field Use"

tagnames: 'sensors, datalogger, logging'
author: bhickman
path: /notes/bhickman/03-05-2015/stand-alone-data-logger-for-field-use.md
nid: 11654
uid: 201929

cids: 11274,11282

---

![](https://publiclab.org/public/system/images/photos/000/009/151/original/Temp_v_time.png)

# Stand Alone Data Logger for Field Use

by [bhickman](../../../profile/bhickman) | March 05, 2015 07:26

March 05, 2015 07:26 | Tags: [sensors](../tag/sensors), [datalogger](../tag/datalogger), [logging](../tag/logging)

----

##Purpose:  
Many project require that instruments be left in the field for extended periods of time to collect data. Many of these instruments do not log data, but have an analog output that must be recorded by some other device. Previously [Dr. Summers](http://publiclab.org/profile/JSummers) has developed a couple boards ([here](http://publiclab.org/notes/JSummers/09-23-2014/datalogger-part-2b-simpler-hardware-some-observations-about-ion-selective-electrodes-and-ram) and [here](http://publiclab.org/notes/JSummers/09-25-2014/datalogger-part-2a-generating-a-signal-amplifying-it-and-displaying-the-data)) that, once connected to a computer, will log an analog instrument’s output as well as display the data in real time. This note demonstrates how to take the board developed by Dr. Summers and use it without the need for a computer.

##Attempts and Results:  
In order to log data without a computer another means of data storage was needed. Dr. Summers has written a program that stores data internally on the Tiva microcontroller, and a further description may or may not be coming soon. However, in this note a SD card was used for data storage. The first step was to design a shield for a SD card that was compatible with Dr. Summers’s data logger boards (a few minor discrepancies remain, but are being worked out). This shield is available [here](https://oshpark.com/shared_projects/hg5SVGoN), and the bill of materials for this shield can be found at the bottom of the page. This SD shield allows you to read and write data to files on a SD card, as well as providing breakout connections intended to be used with either a [real time clock](https://www.virtuabotix.com/product/virtuabotix-ds1302-real-time-clock-rtc-module-arduino-versalino/) (RTC) or a [GPS unit](https://www.virtuabotix.com/product/virtuabotix-4-pin-9600-baud-gps-module-arduino-raspberry-pi-microcontrollers/).  
. 
Dr. Summers’s previous data loggers are designed to take parameters that a user enters into a GUI to adjust the gain, offset, number of runs, and number of channels to log. In order to avoid the need to bring a computer into the field, these parameters are stored in a text file that can be edited on the SD card. Once the microcontroller is turned on, it reads these parameters and starts a logging program as prescribed in the parameters file. An example file is shown below.


[![params.png](https://i.publiclab.org/system/images/photos/000/009/152/medium/params.png)](https://i.publiclab.org/system/images/photos/000/009/152/original/params.png)  
*Example txt file for setting data logger parameters.*



In this note, for an example use of the data logger setup, a thermocouple attached to an [AD595CQ chip](http://www.analog.com/media/en/technical-documentation/data-sheets/AD594_595.pdf) was used as the analog instrument. The AD595CQ takes a thermocouple signal and amplifies it so that the output increases by 10mV per degree Celsius. The output of the AD595CQ was then connected to the positive input of Dr. Summers’s data logger board (There are supposed to be BTA connectors on the data logger board, but I forgot to order them…). The parameters file on the SD card was adjusted so that the data logger collects data every ten seconds and would do so continuously. The data logger setup was then connected to a +5 volt power supply via the usb cable, and left for about a day (21.8 hours) to collect data. 



[![WP_20150220_002_EDITED.png](https://i.publiclab.org/system/images/photos/000/009/153/medium/WP_20150220_002_EDITED.png)](https://i.publiclab.org/system/images/photos/000/009/153/original/WP_20150220_002_EDITED.png)  
*Components of data logger setup.*



[![WP_20150220_009.jpg](https://i.publiclab.org/system/images/photos/000/009/154/medium/WP_20150220_009.jpg)](https://i.publiclab.org/system/images/photos/000/009/154/original/WP_20150220_009.jpg)  
*Data logger setup ready to go.*




At the end of the day 7852 temperature readings, consisting of 86,136 bytes of data, were collected and stored on the SD card. The results of the data are shown below. 



[![Temp_v_time.png](https://i.publiclab.org/system/images/photos/000/009/155/medium/Temp_v_time.png)](https://i.publiclab.org/system/images/photos/000/009/155/original/Temp_v_time.png)  
*21.8 hours worth of temperature data collected every 10 seconds stored on the data logger's SD card.*

 


Questions and Next Steps:
----------------------------------
Detailed instructions on how to set up the software and hardware for the data logger.
Small adjustment in circuit.
Put the setup in a weather tight box and log some instruments in the field.
Create GUI for adjusting parameters file.

Things you will need:
=================
1. **SD card shield bill of materials:**

    * 1 X [SD card shield PCB](https://oshpark.com/shared_projects/hg5SVGoN) 
    * 1 X [SD card holder](http://www.digikey.com/product-detail/en/2041021-4/A101492CT-ND/2571152)
    * 1 X [90 deg. male headers](http://www.digikey.com/product-search/en?KeyWords=S1111EC-05-ND&WT.z_header=search_go)
    * 2 X 10X2 row male/female headers (samtec.com part # SSW-110-23-G-D)

2. [Data logger board](http://publiclab.org/notes/JSummers/04-09-2014/datalogger-part-2-hardware-design)

3. [Tiva LaunchPad](http://www.digikey.com/product-detail/en/EK-TM4C123GXL/296-35760-ND/3996736) 

4. Energia code (Git Hub…Coming soon-ish)

5. **Energia libraries:**

    * Dr. Summers's AltSPI (Git Hub…Coming soon-ish)
    * [SD](http://forum.stellarisiti.com/topic/442-energia-library-stellaris-launchpad-fatfs-energia-library/page-3#entry7027) 
    * [RTC](https://www.virtuabotix.com/virtuabotix-ds1302-real-time-clock-module-pin-out-coding-guide/) 