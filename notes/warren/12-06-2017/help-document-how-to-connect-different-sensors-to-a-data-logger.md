---
title: Help document how to connect different sensors to a data logger
tagnames: arduino, seeks:replications, requests, activity:requests
author: warren
path: /notes/warren/12-06-2017/help-document-how-to-connect-different-sensors-to-a-data-logger.md
nid: 15320
uid: 1

---

# Help document how to connect different sensors to a data logger

by [warren](../profile/warren) December 06, 2017 16:05

December 06, 2017 16:05 | Tags: [arduino](../tag/arduino), [seeks:replications](../tag/seeks:replications), [requests](../tag/requests), [activity:requests](../tag/activity:requests)

We have a range of [data logger projects](/wiki/data-logging) on the site, most of which are Arduino-based, and therefore pretty compatible! (Thanks, #arduino!) Let's work together to compile information on **different sensors that could be used across these different platforms**. That way, each data logging project doesn't have to develop its own separate documentation for each type of sensor. (above image by @zengirl2 in [this post](https://publiclab.org/notes/Zengirl2/09-01-2017/mini-pearl-logger-replication))

To make it easier to connect a specific sensor to any datalogger, let's go through the big list of sensors and add information about compatibility.   

  
### 1\. Choose a sensor from the list

There's a huge list of sensors organized by type [on the Water Sensors page](https://publiclab.org/wiki/water-sensors). 

I've embedded that list here; find one that has no information under the **Interface column:**

<iframe style="border: 0; width:100%; height: 1000px; overflow: auto;" src="https://docs.google.com/spreadsheets/d/1UwjRqU8kHTwEcnDdO2Zxkr8zkFkaGfyePJ-cdnxJzw0/pubhtml?widget=true&amp;headers=false"></iframe>

See and [edit the full spreadsheet here](https://docs.google.com/spreadsheets/d/1UwjRqU8kHTwEcnDdO2Zxkr8zkFkaGfyePJ-cdnxJzw0/edit?usp=sharing)

****
  
### 2\. Follow the URL and look for interface information

[Vernier sensors](https://www.vernier.com/engineering/arduino/) list compatible devices under **Compatibility Requirements**, but their site is more helpful than most. We're hoping for Arduino compatibility. ![image description](https://publiclab.org/system/images/photos/000/022/822/large/Screenshot_2017-12-06_at_10.38.26_AM.png "Screenshot_2017-12-06_at_10.38.26_AM.png")

  
### 3\. Add **Arduino** to the **Interfaces** column if it's there

Or, if you see something like "USB + Bluetooth", add that. Some sensors have a proprietary interface and are not compatible with anything but the parent company's devices. That's good to know too -- mark that "Proprietary".

---------

That's it! Thanks -- 

  
1. If you're up to it, [add a new entry to the Connecting Sensors section](https://publiclab.org/wiki/water-sensors#Connecting+sensors) of the Water Sensors page, showing how to actually plug in and program the sensor!
2. If you're looking to add new sensors to the list, see this activity:  

  
> [Help collect environmental sensors + probes on a shared list](https://publiclab.org/notes/warren/12-06-2017/help-collect-environmental-sensors-probes-on-a-shared-list)