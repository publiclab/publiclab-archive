---
title: "NASA Aeropod unboxing"

tagnames: 'air-column-monitor, kap, leaffest, anemometer, wind-speed-meter, atmosphere, sensors, wind, data-logging, wind-sensor, series:diy-wind-sensors, leaffest2017, location:blurred, lon:-73, wind-speed, aeropod, lat:43.9'
author: cfastie
path: /notes/cfastie/09-29-2017/nasa-aeropod-unboxing.md
nid: 14968
uid: 554

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/021/793/original/Aerokat_20170928-1118.JPG)

# NASA Aeropod unboxing

by [cfastie](../../../profile/cfastie) | September 29, 2017 00:39

September 29, 2017 00:39 | Tags: [air-column-monitor](../tag/air-column-monitor), [kap](../tag/kap), [leaffest](../tag/leaffest), [anemometer](../tag/anemometer), [wind-speed-meter](../tag/wind-speed-meter), [atmosphere](../tag/atmosphere), [sensors](../tag/sensors), [wind](../tag/wind), [data-logging](../tag/data-logging), [wind-sensor](../tag/wind-sensor), [series:diy-wind-sensors](../tag/series:diy-wind-sensors), [leaffest2017](../tag/leaffest2017), [location:blurred](../tag/location:blurred), [lon:-73](../tag/lon:-73), [wind-speed](../tag/wind-speed), [aeropod](../tag/aeropod), [lat:43.9](../tag/lat:43.9)

----

The [NASA Aeropod](https://technology.nasa.gov/patent/GSC-TOPS-10) arrived this week in a box and I opened the box and took everything out.

I like everything about the Aeropod. It's a system for collecting data to describe a profile of the atmosphere. If you lift it with a kite or balloon, you will have data about temperature, humidity, wind speed, and wind direction at different elevations, and that is referred to by some as a vertical profile of the atmosphere.

The sensors on the Aeropod are all in a commercial device called a Kestrel 5500 Wind Meter. It measures wind speed with a little propeller, and measures temperature, humidity, and barometric pressure with some secret proprietary patented sensors that you and I don't know anything about. The data are saved in memory and can be uploaded to a computer or phone.

[![Aerokat_20170928-1127.JPG](https://publiclab.org/system/images/photos/000/021/794/medium/Aerokat_20170928-1127.JPG)](https://publiclab.org/system/images/photos/000/021/794/original/Aerokat_20170928-1127.JPG)  
_Above: The Kestrel 5500 at the upwind end of the Aeropod. This is a fancy hand held anemometer with environmental sensors and data logging capability._

The Aeropod device holds the Kestrel and allows it to point into the wind. I hung it up in the back yard and it worked really well. I thought it would be hard to assemble it so it was balanced well enough for the long rod to be horizontal and aligned with the wind, but it goes together in two minutes and was already adjusted to be balanced. It just hangs there and points into the wind. The electronic compass in the Kestrel knows which way it's pointing, so you get data on wind direction.

All the little brackets and connectors are 3D printed and have been carefully designed and well printed. There are even printed bolts and threaded holes that screw together perfectly. I like the colors they chose.

I don't know why the recommended suspension is a 15 foot long piece of string. It seems that a much shorter rod might be less likely to whip around or get tangled. So I built a one meter long carbon fiber pendulum and I will try that during LEAFFEST. Also the connection to the flying line seems to be a little more complicated than it has to be, so I will try a different method. I guess it's a little pretentious to start modifying NASA atmospheric equipment as soon as I get it out of the box, but there are some traits of old field researchers that are probably not worth the effort to modify.

[![Aerokat_20170928-1106.JPG](https://publiclab.org/system/images/photos/000/021/795/medium/Aerokat_20170928-1106.JPG)](https://publiclab.org/system/images/photos/000/021/795/original/Aerokat_20170928-1106.JPG)  
_Above: The supplied gear to connect the Aeropod to the flying line includes a Brooxes Hangup, a carabiner, and a swivel. That's a lot of hardware._

[![Aerokat_20170928-1111.JPG](https://publiclab.org/system/images/photos/000/021/796/medium/Aerokat_20170928-1111.JPG)](https://publiclab.org/system/images/photos/000/021/796/original/Aerokat_20170928-1111.JPG)  
_Above: This longline snap might be a cheaper, lighter, and easier to use system for hanging the Aeropod from the flying line._

I left the Aeropod hanging in the backyard for an hour or so today. It was recording data every five seconds. It's very easy to setup the connection to a computer to transfer the data via USB. The csv file opens right up in Excel.

[![yard_test1.PNG](https://publiclab.org/system/images/photos/000/021/797/large/yard_test1.PNG)](https://publiclab.org/system/images/photos/000/021/797/original/yard_test1.PNG)  
_Above: Three of the data series recorded by the Kestrel. Wind chill index is computed from measurements of wind speed and air temperature. The dips in wind chill index are associated with peaks in wind speed._

At LEAFFEST this weekend we hope to compare the Aeropod with the [SkyPod](https://publiclab.org/wiki/skypod-gps-logger). Both will measure wind speed, temperature, humidity, and barometric pressure. It could be quite revealing to put them both on the same kite line.