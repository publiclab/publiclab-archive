---
nid: 17977
title: Particulate sensor using a STBM271
path: public/static/notes/david_uwi/12-19-2018/particulate-sensor-using-a-stbm271.md
uid: 469053
tagnames: arduino,particulate-sensing,air-quality,particulates,pm,caribbean,hardware,air-sensors,stbm271,trinidad-and-tobago
---

# Particulate sensor using a STBM271

![image description](/i/28453.png "particlenovdec(large).png")![image description](/i/28452.png "particle_sch.png")

The device uses a STBM271 (from Rapid Electronics). It is very much the same type of device that has been used by others (under different names) and uses light scattering to measure particle number and size. There are two channels one was set to \>1um and the other was fixed at \>2.5 um.  
The length of the pulses from each channel were compared to get an idea of the difference in sensitivity. The more sensitive channel gave pulses (for a given particle) 4 times longer so the readings from the more sensitive (\>1 um) were scaled accordingly.  
I think the factor of 4 comes from the volume to suface area ratio of 1um and 2.5um (2.5 to the power of 1.5 =3.95).

The time is taken from a clock crystal and is fed into 3 16-bit counters in the microprocessor. one counter runs freely the other two are gated by the output from the channels of the dust sensor. The readings from the counters are accumutaed fro 512 seconds for each data point.  
There is sufficient flash memory in the microprocessor to collect readings from the two channels for 6 weeks. Presented (top) is the data for the \>2.5 um channel (average value over 6 weeks 17 ug/m3).

The graph seems to have lost most of its resolution on upload. There is a peak in particulates between about 9am to 12 noon and a rather strange low period in the early afternoon which may be an artifact due to changes in wind speed/temperature.