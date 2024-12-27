---
title: "riffle-protocol"

tagnames: 'riffle, parent:riffle'
author: mathew
path: /wiki/riffle-protocol.md
nid: 12165
uid: 4
cids: 
---

# riffle-protocol

by [mathew](/profile/mathew)

August 24, 2015 20:52 | Tags: [riffle](/tag/riffle), [parent:riffle](/tag/parent:riffle)

----

###Retrieving data from the device.

The Riffle records its data to a microSD card that is located on the main circuit board. In order to retrieve the data, you will need to remove the microSD card and use e.g. a [USB microSD card reader](http://www.adafruit.com/products/939?gclid=Cj0KEQjwgeuuBRCiwpD0hP3Cg4kBEiQAHflm1jJaBdTB5TKhnM_JuWlwOrSy5-REoqRxxiS6VXGHP8YaAmK_8P8HAQ)  or a [microSD card adapter](http://www.ebay.com/itm/like/130878609308?ul_noapp=true&chn=ps&lpid=82).  [PIC of reader options -- an adapter; or, device that reads uSD directly]

[![microSDLocation.png](https://i.publiclab.org/system/images/photos/000/011/268/medium/microSDLocation.png)](https://i.publiclab.org/system/images/photos/000/011/268/original/microSDLocation.png)

###Opening the device.

* Open the bottle cap on the device. The cap may contain several sensors, connected via wires to the main datalogger board (which holds the microSD card).
* Gently remove the bottle cap, attempting to maintain the wired connections between the sensor cap and the main board.  
* With some fiddling, the cap and connecting wires should allow for pulling datalogger device out of the bottle, allowing access to the microSD card.
Remove the microSD card. 

###Retrieving the data.

* The data is stored on the microSD card in “.csv” format, suitable for viewing in most spreadsheet software.
* If there are several data files on the card, the data of interest on the microSD card will be the data file with the greatest index.  E.g., there may be several files named “data001.csv”, “data002.csv”, data003.csv”; in this case, you will be looking to copy “data003.csv” off the board.
* Another check: in the data file, the first column will be a timestamp, containing the date and time of the measurements.  Check to make sure the timestamps in the file correspond with the deployment time of the device.
Copy the relevant data file from the microSD to some secure storage location (e.g. a laptop).
* To avoid future confusion, it is probably best to delete the copy of the data file on the microSD card, once it has been copied, if the same microSD card is going to be used for the next deployment.

###Redeploying the device.

* Make sure that a formatted microSD card is placed in the device securely.  It will not ‘click’ into place -- it simply needs to be pressed into the appropriate slot, and should sit there stably. 
* Replace the datalogger inside the device, taking care to maintain the connection of sensor wires with the cap.  
* Screw the cap back on securely.  Optionally, you will want to use additional methods for maintaining a waterproof seal at the cap:
* Teflon tape used on the threads of the cap
* SIlicone sealant used along the edge of the cap
… etc. 


###Ways of analyzing / using the data.

Depending on the sensor configuration used and the firmware, the data is most likely in the format:

*	timestamp_1, measurement_A_1, measurement_B_1, measurement_C_1, …
*	timestamp_2, measurement_A_2,  measurement_C_2, measurement_C_2, …
	…

… where the first ‘column’ of data is the timestamp (incremented by the measurement time interval, on each new row), and the subsequent columns are associated with various sensor readings. 

* Often, one is interested in plotting one or more of the recorded measurements in a graph -- e.g., on

[![graphExample.png](https://i.publiclab.org/system/images/photos/000/011/267/medium/graphExample.png)](https://i.publiclab.org/system/images/photos/000/011/267/original/graphExample.png)

* One simple way of accomplishing this is to upload the entire file to Google 
*  Sheets, or a similar spreadsheet program.  Here, we’ll use the example of Google Sheets. 
*  Here is a quick guide for uploading a ‘.csv’ file to Google Sheets: https://support.google.com/docs/answer/40608?hl=en
*  Once the data is located in Google Sheets, one can then plot one or more of the sensor reading columns vs. the timestamp in order to get a reading over time.  Here is a quick guide for doing that: https://support.google.com/docs/answer/63728?hl=en
