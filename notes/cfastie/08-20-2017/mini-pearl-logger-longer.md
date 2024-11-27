---
nid: 14774
title: Mini Pearl Logger longer
path: public/static/notes/cfastie/08-20-2017/mini-pearl-logger-longer.md
uid: 554
tagnames: arduino,sensors,data-logging,bme280,arduino-pro-mini,mcp9808,activity:data-logging,mini-pearl-logger,response:14598,mini-pearl,activity:mini-pearl-logger
---

# Mini Pearl Logger longer

I made some incremental progress getting the Mini Pearl Logger to log data for more than two weeks on a set of batteries. But the longevity increased only to three weeks, so there is lots more work to do.

[![Pearl_20170818-0748.JPG](https://publiclab.org/system/images/photos/000/021/374/medium/Pearl_20170818-0748.JPG)](https://publiclab.org/system/images/photos/000/021/374/original/Pearl_20170818-0748.JPG)  
*Above: I deployed two separate Mini Pearl Loggers in the compost pile. One had most of the connections soldered (upper) and one had the connections made with Dupont wires (lower). Each logger was on a separate circuit and both fit into a 32 ounce Nalgene bottle. A BME280 sensor (left) outside the bottle was connected to one logger, and two MCP9808 sensors on long wires were connected to the other logger. Each logger was powered by a set of four AAA eneloop batteries.*

The primary thing that changed this time compared to the last trial ([see comments here](https://publiclab.org/notes/cfastie/07-01-2017/mini-pearl-jam)) was that I used separate loggers for a BME280 sensor (barometric pressure, temperature, humidity) and the MCP9808 temperature sensors in the compost pile. Each sensor requires some power, so minimizing the number of sensors on a logger allows the batteries to last longer.

[![sensors_20170723-0184.JPG](https://publiclab.org/system/images/photos/000/021/375/medium/sensors_20170723-0184.JPG)](https://publiclab.org/system/images/photos/000/021/375/original/sensors_20170723-0184.JPG)  
*Above: MCP9808 sensors are in the two PVC tubes in the compost. One BME280 sensor on another logger is outside of the Nalgene bottle. There is also an LED outside of the bottle which I can connect at any time to see if a logger is still running.*

[![5trialsMPL.PNG](https://publiclab.org/system/images/photos/000/021/376/large/5trialsMPL.PNG)](https://publiclab.org/system/images/photos/000/021/376/original/5trialsMPL.PNG)  

The results from the two loggers deployed this time are compared to three previous trials (Table 1, trials 4 and 5 are from the current deployment). With three MCP9808 sensors and one BME280 sensor on one Mini Pearl Logger, the sleep current was 2.3mA (Table 1). With just two MCP9808 sensors the logger sleep current was 1.4mA, and with only one BME280 sensor the sleep current was 1.0mA. Reducing the number of sensors increased the logger longevity from 13.5 days to 22.5 days (Table 1). The logger with one BME280 sensor stopped logging data after only 12 days even though the batteries had not run down after 22 days. This might have been related to a big rain storm on the 12th day (the BME280 sensor was somewhat exposed to the elements).

[![sensors_20170723-0187.JPG](https://publiclab.org/system/images/photos/000/021/377/medium/sensors_20170723-0187.JPG)](https://publiclab.org/system/images/photos/000/021/377/original/sensors_20170723-0187.JPG)  
*Above: At the beginning of this trial. The styrofoam cooler shades the Nalgene bottle and protects the external BME280 sensor from sun and rain. The BME280 sensor might have succumbed to the elements during a rain storm on the 12th day.*

[![AugustCompost.PNG](https://publiclab.org/system/images/photos/000/021/378/large/AugustCompost.PNG)](https://publiclab.org/system/images/photos/000/021/378/original/AugustCompost.PNG)  
*Above: Temperature data from the Mini Pearl Logger with one working MCP9808 sensor in the compost and the sensor in the real time clock (RTC) on that logger (upper) and sensor data from the other Mini Pearl Logger with one BME280 sensor (lower). That logger stopped logging BME280 data after day 12.*

Although this compost pile was smaller than previous piles this year, the temperature near the center of the pile reached 70°C (158°F). I built the pile the day before I installed the sensors, so I missed the rapid warm-up from about 25°-30°C to near 70°C in one day. Because this pile was small, hard rain events were recorded as brief decreases in compost temperature. These rain events are also recorded as deviations from the diurnal oscillations in air temperature and humidity.

During this trial, only one of the MCP9808 sensors worked, and the BME280 sensor stopped working after 12 days. This might be due to poor connectivity across the non-soldered connections, especially those outside of the Nalgene bottle and somewhat exposed to the elements. The MCP9808 failure might have been caused by non-soldered connections in the tangle of things that must be stuffed into the Nalgene bottle after all the checks are made to ensure everything is working. But I don't know exactly why sensors stopped working this time.

The loggers were writing data to the microSD card every 10 minutes which produces a nice high resolution record. For many monitoring purposes, collecting data every hour or every eight hours might be sufficient. That is a very easy change to make and could greatly increase the longevity of the these loggers. It is also possible to save more frequently collected sensor data in a memory buffer and then write it to the SD card only once every day or two, but I'm not sure how to do that. I suspect there are some other changes which would reduce the sleep current or the power used to write data to the SD card. 



