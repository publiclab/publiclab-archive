---
title: Thermal imaging of Refrigerators and Milk 
tagnames: thermal-photography, thermal-flashlight, thermal-imaging, northeastern, milk, insulation, refrigerators, heat, upgrade:thermal-flashlight, replication:625
author: williammanning
path: /notes/williammanning/12-03-2014/thermal-imaging-of-refrigerators-and-milk.md
nid: 11425
uid: 432240

---

![](https://publiclab.org/public/system/images/photos/000/008/206/original/Screen_Shot_2014-12-02_at_3.54.34_PM.png)

# Thermal imaging of Refrigerators and Milk 

by [williammanning](../profile/williammanning) December 03, 2014 05:00

December 03, 2014 05:00 | Tags: [thermal-photography](../tag/thermal-photography), [thermal-flashlight](../tag/thermal-flashlight), [thermal-imaging](../tag/thermal-imaging), [northeastern](../tag/northeastern), [milk](../tag/milk), [insulation](../tag/insulation), [refrigerators](../tag/refrigerators), [heat](../tag/heat), [upgrade:thermal-flashlight](../tag/upgrade:thermal-flashlight), [replication:625](../tag/replication:625)

----

## Thermal Flashlight Design
Originally the Arduino and breadboard were placed inside a thin DayQuil box for housing. The battery was attached to the backside of the box externally and holes were created in the box for both the sensor and the LED. We took this device to a local convenience store to test the thermal flashlight and we ran into some trouble. The sensor was set back in the box and this led to confounding light from the LED. Even inside a store refrigerator, the LED was only fluctuating between a light green and a yellow color, which indicated that the walk in fridge was around 55 degrees due to our Arduino programmed settings. Thus, we took the thermal flashlight back to reassemble the housing for better overall results. 
[![IMG_6051.JPG](https://i.publiclab.org/system/images/photos/000/008/191/medium/IMG_6051.JPG)](https://i.publiclab.org/system/images/photos/000/008/191/original/IMG_6051.JPG)

Our new and improved design featured the battery secured to the back of the of the breadboard and the entire unit secured to the bottom of an iPhone box. Situating the battery behind the breadboard and sensor pushed the sensor closer to the testing surface and made the entire device more compact. The shallow box casing allowed the sensor to be as close to the tested surface as possible yet maintain stability and protection. A top covering was added to the bottom half of the face to protect the Arduino board and hold the entire unit in place, ideally protecting the reset button.
[![IMG_3215.jpeg](https://i.publiclab.org/system/images/photos/000/008/192/original/IMG_3215.jpeg)](https://i.publiclab.org/system/images/photos/000/008/192/original/IMG_3215.jpeg)

To take our thermal images we used both a slow shutter setting on a camera and the iPhone app "Long Exposure", both allowing for clear colors and quality pictures. 

##Application of the Thermal Flashlight

We hypothesized that our refrigerators would be set and kept at a temperature that would prevent spoiling and excess bacteria development in milk. After some research we determined that all fridges should be kept at a temperature below 45 degrees Fahrenheit and above the freezing temperature of milk (31 degrees F). The Arduino was set for a temperature range of 20 degrees to 80 degrees to see the range of colors projected by the thermal flashlight in the kitchen. To get accurate temperature data to test our hypothesis we collected data with the Arduino plugged into the computer. 

##My attempt and results

We first tested Will's fridge by taking two thermal images and collecting the data from the Arduino. As you can see in the following three images, the refrigerator was clearly colder than the ambient air and even projected a blue color in the back of the fridge and the freezer indicating a temperature down around the 20 degree minimum. The data from the Arduino was far more accurate, revealing that the back of the fridge dipped to 34 and near the door was around 45. Our hypothesis was supported by the data collected at this fridge but was later brought into question.

[![Screen_Shot_2014-12-02_at_3.53.27_PM.png](https://i.publiclab.org/system/images/photos/000/008/198/medium/Screen_Shot_2014-12-02_at_3.53.27_PM.png)](https://i.publiclab.org/system/images/photos/000/008/198/original/Screen_Shot_2014-12-02_at_3.53.27_PM.png)
[![Screen_Shot_2014-12-02_at_3.54.34_PM.png](https://i.publiclab.org/system/images/photos/000/008/197/medium/Screen_Shot_2014-12-02_at_3.54.34_PM.png)](https://i.publiclab.org/system/images/photos/000/008/197/original/Screen_Shot_2014-12-02_at_3.54.34_PM.png)
[![Screen_Shot_2014-12-02_at_11.13.28_PM.png](https://i.publiclab.org/system/images/photos/000/008/207/medium/Screen_Shot_2014-12-02_at_11.13.28_PM.png)](https://i.publiclab.org/system/images/photos/000/008/207/original/Screen_Shot_2014-12-02_at_11.13.28_PM.png)

Next we tested Maeve and Corrie's fridge and mini fridge in their apartment. Again we saw a diversified thermal map with the fridge showing blue and green colors, putting the temperature in the appropriate range. When we collected data with the Arduino however, we found the exact temperature of the fridge to be as high as 50.9 degrees F and only as low as 45.32 degrees F in the back of the fridge, as evidenced below. In the mini fridge we saw even greater variation ranging from 38 in the back to 48 on the door. This data refuted our original hypothesis so we saw this as an area for future inquiry. Could our fridges be less effective than we thought and lead to souring products and bacteria growth without our knowing? Or could these results be from warmer room temperatures or other confounding variables? 

[![IMG_5774.JPG](https://i.publiclab.org/system/images/photos/000/008/208/medium/IMG_5774.JPG)](https://i.publiclab.org/system/images/photos/000/008/208/original/IMG_5774.JPG)
[![IMG_5773.JPG](https://i.publiclab.org/system/images/photos/000/008/212/medium/IMG_5773.JPG)](https://i.publiclab.org/system/images/photos/000/008/212/original/IMG_5773.JPG)

Finally we took our device to Wollaston's to see if their open refrigeration system kept milk at the optimal temperature. We found that the milk in the rear - closest to the cooling system - was kept at temps ideal to preserve milk around 33 degrees. The milk out-front, accessible, and susceptible to spatial heat was up around 44 or 45 degrees which is still preservative but on the border of the safe temperature. These results came from data collected by the Arduino (and highlighted below) because unfortunately we could not turn off the lights in the store while customers were shopping. 


[![IMG_2187.JPG](https://i.publiclab.org/system/images/photos/000/008/217/medium/IMG_2187.JPG)](https://i.publiclab.org/system/images/photos/000/008/217/original/IMG_2187.JPG)


[![Screen_Shot_2014-12-02_at_11.23.23_PM.png](https://i.publiclab.org/system/images/photos/000/008/214/medium/Screen_Shot_2014-12-02_at_11.23.23_PM.png)](https://i.publiclab.org/system/images/photos/000/008/214/original/Screen_Shot_2014-12-02_at_11.23.23_PM.png)

##Reflection
Because we had a range of data collected from three different refrigeration systems we saw ample room to expand this data collection to see if fridge temperatures fluctuated as much with a larger sample than what we collected. Due to the degree of difference in temperature and the different thermal maps it was clear that our flashlight was working and testing our hypothesis but it was impossible to say whether the hotter fridge affected the milk directly or was a confounding result due to warmer air temperature or any other variable. 
[![IMG_5786.JPG](https://i.publiclab.org/system/images/photos/000/008/215/medium/IMG_5786.JPG)](https://i.publiclab.org/system/images/photos/000/008/215/original/IMG_5786.JPG)
