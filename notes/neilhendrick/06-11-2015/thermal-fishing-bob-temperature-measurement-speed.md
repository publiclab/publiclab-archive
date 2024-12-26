---
title: "Thermal Fishing Bob Temperature Measurement Speed"\ntagnames: 'thermal-imaging, thermal-fishing-bob'
author: neilhendrick
path: /notes/neilhendrick/06-11-2015/thermal-fishing-bob-temperature-measurement-speed.md
nid: 11974
uid: 421122

---

# Thermal Fishing Bob Temperature Measurement Speed

by [neilhendrick](../profile/neilhendrick) | June 11, 2015 22:20

June 11, 2015 22:20 | Tags: [thermal-imaging](../tag/thermal-imaging), [thermal-fishing-bob](../tag/thermal-fishing-bob)

----

### A test to see how quickly the Thermister used in the Thermal Fishing Bob can measure changes in temperature###
Conducted at the [Themal Fishing Bob Barnraising](http://www.publiclab.org/wiki/thermal-fishing-bob-barnraising)
Followed setup instructions for [Thermal Fishing Bob](http://publiclab.org/wiki/thermal-fishing-bob)

The thermister measure changes in temperature as changes in resistance, and changes that value into a color value for the Bob.

How quickly can it register a change in temperature of 35 degrees?
At room temperature (62 degrees) the thermister shows a steady value.
When the thermister is inserted in the mouth under the tongue, it changes value to body temperature (98.6 degrees)

The change in temperature takes @20 seconds to raise the temperature from 62 to 98
The thermister is slower when returning to room temperature, taking 54 seconds to go from body temperature to room temperature.

###Questions and next steps
1. Is the measurement time fast enough?
     <br>It is fast enough for slow moving or stationary temp measurements.
     <br>It is too slow for fast moving measurements.

2. What is a faster sensor?
      <br>[This?](http://www.adafruit.com/products/381)

###Why I'm interested
The thermal Bob can't be used with the current thermister to quickly respond to changes in temperature. 
For faster measurement, a [digital temperature sensor] (http://www.adafruit.com/products/381) could be used to get a faster reading, and the faster read time would make display of the temperature value by color much more accurate. 

