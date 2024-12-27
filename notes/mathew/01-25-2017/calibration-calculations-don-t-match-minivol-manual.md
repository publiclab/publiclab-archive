---
title: "calibration calculations don't match MiniVol manual"

tagnames: 'calibration, question, air-quality, dust, silica, pm, pump, mini-buck, pm-monitoring, question:question, dust-sensing, question:pm, question:minivol'
author: mathew
path: /notes/mathew/01-25-2017/calibration-calculations-don-t-match-minivol-manual.md
nid: 13876
uid: 4

cids: 16100,16108,16109,22411,22412,22414,30351,30372

---

![](https://publiclab.org/public/system/images/photos/000/019/362/original/20170109_145812.jpg)

# calibration calculations don't match MiniVol manual

by [mathew](../../../profile/mathew) | January 25, 2017 02:17

January 25, 2017 02:17 | Tags: [calibration](../tag/calibration), [question](../tag/question), [air-quality](../tag/air-quality), [dust](../tag/dust), [silica](../tag/silica), [pm](../tag/pm), [pump](../tag/pump), [mini-buck](../tag/mini-buck), [pm-monitoring](../tag/pm-monitoring), [question:question](../tag/question:question), [dust-sensing](../tag/dust-sensing), [question:pm](../tag/question:pm), [question:minivol](../tag/question:minivol)

----

I'm trying to calibrate a [MiniVol](https://publiclab.org/notes/mathew/01-10-2017/overview-minivol-pm-monitor) air sampler pump with a [minibuck](https://publiclab.org/notes/mathew/06-11-2015/mini-buck-vs-the-bubbles#how+the+Mini-Buck+M-30+works) flow calibrator.

Before I can do that, however, I have to check that I'm doing the calibration math correctly, and I'm having some trouble.  While the spreadsheet I've prepared appears to produce numbers in the right range, the results differ from factory-provided calibration data sets.   Can you help check my work?

###The MiniVol Calibration instructions
Appendix A: Calculating flow rate, on page 59 of the [MiniVol Manual](http://itepsrv1.itep.nau.edu/itep_course_downloads/MiniVol_Resources/MiniV_Manual.pdf) describes the calibration procedure.  

The MiniVol has a rotameter for setting and checking pump flow in the field.  Its readings are only nominal, and not the 5lpm (liters per minute) that are actually needed.
![MiniVol rotameter ][1]

The rotameter needs to be set for a number that corresponds to an actual flow rate of 5lpm (liters per minute), not an indication of 5lpm  To determine the actual flow rate, six measurements are taken with the flow calibration standard (in this case a MiniBuck) at six different flow rates from 4-6.5lpm as indicated on the rotameter.

In the following chart, the variables defining different variables are described as:

* __m<sub>vol</sub>__ slope of the least square line from the linear regression 
* __b<sub>vol</sub>__ intercept of the least square line from the linear regression
* __r<sup>2</sup>__ coefficient of determination from linear regression
* __Q<sub>ind</sub>__ indicated flow rate on sampler's rotameter
* __Q<sub>act</sub>__ actual flow rate as measured by the calibration standard
* __Q<sub>@std</sub>__ calculated flow rate at standard conditions, from Equation 1
 - standard pressure: 760mmHg, standard temp: 298°K)
 - Equation 1: Q<sub>@std</sub> = m<sub>vol</sub> x Q<sub>ind</sub> + b<sub>vol</sub>
* __Q<sub>calc</sub>__ calculated flow rate of sampler determined from the linear regression results
* __Diff__ the % difference between measured and calculated flow rates

This calibration chart came with the MiniVol:
![image description][2]

###Recreating the calibration chart

I Attempted to re-create this chart in a [LibreOffice](https://www.libreoffice.org/) spreadsheet ([Download][3]).  I quickly noticed a few issues of clarity on the variables described above:

* __m<sub>vol</sub>, b<sub>vol</sub>, r<sup>2</sup>__ slope of the least square line, intercept, & coeficient of determination from the linear regression 
 - _This is slightly unclear but I assume they mean of X,Y pairs (Q<sub>ind</sub> , Q<sub>act</sub>) a [least squares linear regression](https://en.wikipedia.org/wiki/Least_squares), which is a basic [feature in LibreOffice](https://help.libreoffice.org/Chart/Trend_Lines)._
* __Q<sub>calc</sub>__ calculated flow rate of sampler determined from the linear regression results
 - _This statement is pretty unclear, and I therefore took it to be the equation described as: Q<sub>act</sub>, for use in calculating the actual flow rate under sampling conditions which appears to be different from Q<sub>act</sub> for the purposes of the chart:_
 - Q<sub>act</sub> = (m<sub>vol</sub>Q<sub>ind</sub> + b<sub>vol</sub>) x √((P<sub>std</sub>/P<sub>act</sub>) x (T<sub>act</sub>/T<sub>std</sub>))
* __Diff__ the % difference between measured and calculated flow rates
 -  _This statement is also unclear, but I took it to be the difference between Q<sub>act</sub> (measured) and Q<sub>calc</sub> (calculated)._

and I got these results:
![my spreadsheet][4]

The spreadsheet appears to work pretty well-- I'm getting a decent correspondence between Q<sub>calc</sub> and Q<sub>act</sub>, BUT... the results don't match up with Airmetrics form AT ALL.  None of the calculated values are the same, none of the Linear regression results match. 

##Checking my results
I tried a few different checks.  

The manual has an example calibration with different numbers:

![Here's what Airmetrics had][5]

![Here's what I got][6]

Again, good correspondence within my sheet, and this time a closer correspondence to Airmetrics numbers.  

####Am I having a significant digits issue in my spreadsheet?


I tried to see if somehow I was using the wrong linear regression, so I replaced my calculated linear regression with Airmetrics results.  That didn't bring me any closer to Airmetrics numbers though. 

###Can you tell what's wrong? Is it my assumptions?
I'm not sure where my assumptions are going wrong, but I imagine the mistake is somewhere in these assumptions:

* __m<sub>vol</sub>, b<sub>vol</sub>, r<sup>2</sup>__ slope of the least square line, intercept, & coeficient of determination from the linear regression 
 - _This is slightly unclear but I assume they mean of X,Y pairs (Q<sub>ind</sub> , Q<sub>act</sub>) a [least squares linear regression](https://en.wikipedia.org/wiki/Least_squares), which is a basic [feature in LibreOffice](https://help.libreoffice.org/Chart/Trend_Lines)._
* __Q<sub>calc</sub>__ calculated flow rate of sampler determined from the linear regression results
 - _This statement is pretty unclear, and I therefore took it to be the equation described as: Q<sub>act</sub>, for use in calculating the actual flow rate under sampling conditions which appears to be different from Q<sub>act</sub> for the purposes of the chart:_
 - Q<sub>act</sub> = (m<sub>vol</sub>Q<sub>ind</sub> + b<sub>vol</sub>) x √((P<sub>std</sub>/P<sub>act</sub>) x (T<sub>act</sub>/T<sub>std</sub>))
* __Diff__ the % difference between measured and calculated flow rates
 -  _This statement is also unclear, but I took it to be the difference between Q<sub>act</sub> (measured) and Q<sub>calc</sub> (calculated)._

  [1]: https://publiclab.org/system/images/photos/000/019/356/large/minivol.png "minivol.png"
  [2]: https://publiclab.org/system/images/photos/000/019/357/large/20170124_162343.jpg "20170124_162343.jpg"
  [3]: https://publiclab.org/system/images/photos/000/019/359/large/Screen_Shot_2017-01-24_at_4.20.15_PM.png "Screen_Shot_2017-01-24_at_4.20.15_PM.png"
  [4]: https://publiclab.org/system/images/photos/000/019/359/large/Screen_Shot_2017-01-24_at_4.20.15_PM.png "Screen_Shot_2017-01-24_at_4.20.15_PM.png"
  [5]: https://publiclab.org/system/images/photos/000/019/361/large/20170124_162334.jpg "20170124_162334.jpg"
  [6]: https://publiclab.org/system/images/photos/000/019/363/large/Screen_Shot_2017-01-24_at_6.25.34_PM.png "Screen_Shot_2017-01-24_at_6.25.34_PM.png"
  [attachment-1]: https://publiclab.org/system/images/photos/000/019/358/original/MiniVol_calibration.zip "MiniVol_calibration.zip"
  [attachment-2]: https://publiclab.org/system/images/photos/000/019/358/original/MiniVol_calibration.zip "MiniVol_calibration.zip"