---
nid: 13182
title: Compost is hot, says Riffle
path: public/static/notes/cfastie/06-09-2016/compost-is-hot-says-riffle.md
uid: 554
tagnames: arduino,vermont,temperature,sensors,water-quality,riffle,barnstar:basic,humidity,compost,response:13158,category:field-test,data-logging,activity:riffle,riffle-examples,activity:data-logging
---

# Compost is hot, says Riffle

*Above: Two temperature probes wired to a Riffle in the Nalgene bottle.*

Cellular respiration in living organisms is the oxidation of energy-rich molecules (e.g., glucose). Respiration produces heat which warm blooded animals use to regulate their body temperature, but the heat is just dissipated by most organisms. 

[![compost_20160607-5869.jpg](//i.publiclab.org/system/images/photos/000/016/558/medium/compost_20160607-5869.jpg)](//i.publiclab.org/system/images/photos/000/016/558/original/compost_20160607-5869.jpg)  
*Above: A year's worth of garden and kitchen refuse. It doesn't look like much because some of it is old and rotten and because squirrels and their friends eat a lot of it during the year.*

Bacteria release this heat of respiration as they consume organic matter, and when millions of them are close together in an insulated place, it can get hot. If a compost pile is built of stuff that bacteria like to consume, and there is enough oxygen and water, and the pile is big enough so that its center is well insulated from the outside, it can get very hot.

[![compost_20160607-5885.jpg](//i.publiclab.org/system/images/photos/000/016/559/medium/compost_20160607-5885.jpg)](//i.publiclab.org/system/images/photos/000/016/559/original/compost_20160607-5885.jpg)  
*Above: The finished pile on Tuesday with fresh hay and grass clippings mixed with the old stuff.*

Every spring I build a compost pile with a year's worth of garden and kitchen refuse. Some of this is already old and rotten and some is new. This year I mixed this stuff with  fresh lawn clippings and all the [winter rye I harvested from the nitrogen addition plots](https://publiclab.org/notes/cfastie/05-23-2016/graze-anatomy). The fast working bacteria need some nitrogen, and those two grass materials should be a good source of it.

[![compost_20160607-5905.jpg](//i.publiclab.org/system/images/photos/000/016/560/medium/compost_20160607-5905.jpg)](//i.publiclab.org/system/images/photos/000/016/560/original/compost_20160607-5905.jpg)  
*Above: The Riffle (red) and battery (blue) ready to go into a Nalgene bottle.*

A couple of hours after I built the pile I inserted two 70 cm long PVC probes into it so the ends were near the center. An I2C temperature sensor (MCP98080) was slid down to the end of each pipe. I used the wire from old telephone extension cables (Why do I have such a huge box full of old 6' cables?) to wire the sensors to the Riffle. These cables have four wires which is just what an I2C sensor needs.

[![compost_20160607-5896.jpg](//i.publiclab.org/system/images/photos/000/016/561/medium/compost_20160607-5896.jpg)](//i.publiclab.org/system/images/photos/000/016/561/original/compost_20160607-5896.jpg)  
*Above: The MCP9808 sensors were attached to dowel rods so they could be slid into the PVC probes (5/8" OD PVC). Film vials covered the top of each probe to keep rain out. A DHT22 sensor is on a short three-wire lead (bottom center). An extra phone extension (bottom right) is in place for future projects.* 

A DHT22 humidity and temperature sensor was also hooked up for logging ambient air data near the pile. I potted the [lamp pipe nipples](https://publiclab.org/notes/cfastie/03-11-2016/nalgene-submarine) with silicone sealant (Dow Corning 700) to waterproof the cable exits from the Nalgene bottle. I passed an extra phone cable through before I applied the sealant in case I need it for another logging project sometime.

[![compost_20160607-5911.jpg](//i.publiclab.org/system/images/photos/000/016/562/medium/compost_20160607-5911.jpg)](//i.publiclab.org/system/images/photos/000/016/562/original/compost_20160607-5911.jpg)  
*Above: The potted cables exiting the Nalgene bottle include three old phone cables and one three-wire RC lead for the DHT22 sensor. I don't know if my potting job with the silicone sealant would survive submersion, but it should be good for rain.*

[![compost_20160607-5919.jpg](//i.publiclab.org/system/images/photos/000/016/563/medium/compost_20160607-5919.jpg)](//i.publiclab.org/system/images/photos/000/016/563/original/compost_20160607-5919.jpg)  
*Above: The MCP9808 sensors at the ends of the dowel rods. Rubber bands hold the sensors in place and the Velcro straps form pistons which fill the PVC pipe and block air flow up and down the pipe. The red jumper wires on the sensors give them different I2C addresses so the Riffle can read them one at a time.*

[![compost_20160607-5924.jpg](//i.publiclab.org/system/images/photos/000/016/564/medium/compost_20160607-5924.jpg)](//i.publiclab.org/system/images/photos/000/016/564/original/compost_20160607-5924.jpg)  
*Above: The two probes inserted to different depths. Some duct tape held the film vials securely in place. The DHT22 sensor is in the iced-tea jug with some paper towels to provide shade. The transparent Nalgene bottle with the Riffle was later covered with white styrofoam to keep it from getting too hot in the sun.*

I started the data logging with a sketch derived from Don's riffle_basic_logging sketch, but I could not figure out how to make it log at intervals longer than 18 seconds. So I collected a lot more data than I needed for the first overnight 16 hour period. Then Kina shared his [new logging sketch](https://github.com/kinasmith/publicLab/blob/master/Riffle/SHT21_Logger/SHT21_Logger.ino) and I modified it for the sensors I was using. I set the logging interval for 300 seconds (5 minutes) and it worked perfectly.

[![MCPDay2.JPG](//i.publiclab.org/system/images/photos/000/016/565/large/MCPDay2.JPG)](//i.publiclab.org/system/images/photos/000/016/565/original/MCPDay2.JPG)  
*Above: Temperature data for the first 40 hours of logging. The break in the traces is when I brought everything inside (the PVC pipes stayed in place) and switched to Kina's sketch. The sensor nearest to the center of the pile reached 66°C (150°F) after 40 hours.*

[![DHTDay2.JPG](//i.publiclab.org/system/images/photos/000/016/566/large/DHTDay2.JPG)](//i.publiclab.org/system/images/photos/000/016/566/original/DHTDay2.JPG)  
*Above: Air temperature and humidity from the DHT22 sensor at the top of the compost pile. It rained both nights and the humidity pegged at 100%. The paper towel inside the sensor enclosure (iced-tea jug) probably absorbs and releases water and introduces a lag into the DHT22 readings compared to outside the jug. The logging interval for the first 16 hours (18 seconds) differs from the last 24 hours (5 minutes).*

[![VoltsDay2.JPG](//i.publiclab.org/system/images/photos/000/016/567/large/VoltsDay2.JPG)](//i.publiclab.org/system/images/photos/000/016/567/original/VoltsDay2.JPG)  
*Above: Kina's sketch computes battery voltage from pin A3 (I think). This record is from 24 hours. I'm not sure what I should conclude from this.*

When the new sketch based on Kina's was loaded on the Riffle, I could not start the Riffle logging without the Riffle being connected to a computer. That is the same experience I had with the riffle_basic_logging sketch, but another sketch started logging as soon as the Riffle was powered on ([see this thread](https://groups.google.com/forum/#!topic/plots-waterquality/rD8jRvL0i-0)). It would be good to figure out what causes the difference and if it is possible to make any sketch start running without a computer.

Here is the sketch I used: 
<a href="//i.publiclab.org/system/images/photos/000/016/569/original/KinaMCPDHT.txt"><i class="fa fa-file"></i> KinaMCPDHT.txt</a>







  

