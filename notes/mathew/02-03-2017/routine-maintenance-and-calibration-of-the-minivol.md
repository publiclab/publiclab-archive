---
title: 'Routine maintenance and calibration of the MiniVol'
tagnames: air-quality, dust, silica, pm, particle-sensing, pm-monitoring, minivol, activity:minivol
author: mathew
path: /notes/mathew/02-03-2017/routine-maintenance-and-calibration-of-the-minivol.md
nid: 13902
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/019/426/original/20170109_145812.jpg)

# Routine maintenance and calibration of the MiniVol

by [mathew](../profile/mathew) February 03, 2017 02:33

February 03, 2017 02:33 | Tags: [air-quality](../tag/air-quality), [dust](../tag/dust), [silica](../tag/silica), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [pm-monitoring](../tag/pm-monitoring), [minivol](../tag/minivol), [activity:minivol](../tag/activity:minivol)

----

_This activity would benefit from images. I have not performed the activity yet and have only compiled instructions from across different sections of the manual. When I replicate this activity, I'll include images._

Every five sample periods the [MiniVol](/wiki/minivol) must be subjected to the routine maintenance of a cleaning, leak check, and single-point flow rate check.

Beyond routine maintenance, pump components may become worn, manifesting in irregular or irratic flow.  Consult section 6.2 of the Manual to address these issues. 

##Regular Cleaning 
_These instructions based on section 6.1.2 of the MiniVol TAS manual._

Every 5 sample periods or after checking that the Easy Maintanence Target inside the impactor is soiled.  

The MiniVol comes with two impactor assemblies with two EMTs each, one for PM10 and the other for PM2.5. The following procedure should be used for all four EMTs.

1. Clean the EMT by wiping with a clean lint-free cloth or paper towel.
2. Apply a small amount of low vapor pressure grease to the applicator. In this example we use a semi-rigid stainless steel ruler. 
3. Use the straight edge to apply the grease to the EMT in a spreading or "buttering" motion.
4. After application wipe any excess grease from the edge of the EMT
5. Re-insert the EMT into the impactor.


##Check for leaks
The pump need a quick check leak to make sure nothing was damaged in transit. 

1. Remove the impactor/filter holder from the inlet tube.
2. orient the MiniVol so it is vertical, with the inlet up top.
2. pull the inlet tube all the way out so that its compression fitting is tight.
3. Turn the pump on by pressing the ON/AUTO/OFF button on the timer until a bar on the lower edge of the display is above "ON." The pump will start and the power indicator LED will light up.
4. Cover the air inlet tube with the palm of your hand.
5. The ball in rotameter (flow gauge) should not be moving at all and should read zero.
6. If the rotameter reads zero, turn the sampler off by pressing the ON/AUTO/OFF button on the timer until the bar on the lower edge of the display is above the "OFF." 
7. If the rotameter does not read zero, proceed to "Troubleshooting leaks."

_if the air inlet tube is covered the Low Flow LED will light up and the sampler will shut down after 15-20 seconds. Press the Reset button twice to turn the sampler back on._

####Troubleshooting leaks
If the ball in the rotameter is moving or does not read zero, a leak exists.  Check the following factors, re-testing for leaks after each.

* Check that the inlet tube is fully extended and the compression fitting is tight

The following checks require removing the faceplate to access the pump and internal plumbing. Remove the four faceplate thumbscrews and the sampler mount thumbscrew and lift off the faceplate.

* Check that all push on fittings are secure
* Check for cracks in the rotameter (flow guage) around the inlet and outlet
* check for cracks in the pulse dampener
* check and tighten all compression fittings

[make diagram after figure 2.2]


##Single-point flow rate check

Perform a single-point flow rate check with a flow meter, and confirm the curve established during calibration. The result should be within =/- 10% of 5lpm.

1. Use the MiniVol Spreadsheet to determine the flow rate set point for the current temperature and pressure. 
2. Follow the MiniVol Calibration instructions below, substituting the flow rate set point for the calibration points. 


##MiniVol Calibration instructions

#####Understanding Calibration
_Appendix A: Calculating flow rate, on page 59 of the [MiniVol Manual](http://itepsrv1.itep.nau.edu/itep_course_downloads/MiniVol_Resources/MiniV_Manual.pdf) describes this calibration procedure._  Notes on the equations in the calibration can be found in this [research question.](/questions/mathew/01-25-2017/calibration-calculations-don-t-match-minivol-manual)

The MiniVol has a rotameter for setting and checking pump flow in the field.  Its readings are only nominal, and not the exact 5lpm (liters per minute) that are actually needed.  The MiniVol must therefore be subjected to a calibration once yearly.

![MiniVol rotameter ][1]

The rotameter needs to be set for a number that corresponds to an actual flow rate of 5lpm (liters per minute), not an indication of 5lpm.  To determine the actual flow rate, six measurements are taken with the flow calibration standard (in this case a MiniBuck) at six different flow rates from 4-6.5lpm as indicated on the rotameter.

These six points are then subjected to a linear regression, the results of which are used to calculate an a rotameter flow rate setting specific to the MiniVol that will achieve 5lpm under field conditions.

This calibration chart came with the MiniVol:
![image description][2]

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

This chart and the calculations that are used to create it are withinthe MiniVol Spreadsheet, found [here.](/wiki/minivol#activities)

#####Step by Step calibration

Materials Needed:

* MiniBuck Calibrator
* MiniVol
* Charged MiniVol battery
* bubble level
* MiniVol spreadsheet
* Source for a nearby reading of atmospheric pressure
* calibrated thermometer for temperature

Before beginning, identify a local source of weather information (see instructions in the [activity](/wiki/minivol#activities "pre-deployment") and record the current pressure.

1. download the MiniVol Spreadsheet from [here.](/wiki/minivol#activities) It is in Open Document Format (ODF) and requires an ODF-compatible spreadsheet program such as [LibreOffice.](http://www.libreoffice.org/)

2. Prepare the MiniBuck Calibrator with the soap solution.
2. Insert the MiniVol battery.
3. Remove the MinVol faceplate to access the pump and internal plumbing. Remove the four faceplate thumbscrews adn the sampler mount thumbscrew and lift off the faceplate.
4. At the back of the rotameter at its top outlet is a small brass oriface.  Press the vinyl hose from the Minibuck over the oriface.
5. Attach the other end of the vinyl hose to the bottom nozzle of the MiniBuck.
6. Orient the MiniVol vertically, and balance the faceplate vertically.
7. Check that the faceplate is truly vertical with the bubble level. It is crucial that the rotameter is truly vertical to get an accurate reading.
8. Take a reading of the temperature for the space you are in, and take a reading of the pressure from your local weather source. Record this information in the calibration spreadsheet.
8. Turn the pump on by pressing ON/AUTO/OFF button on the timer until a bar on the lower edge of the display is above "ON." The pump will start and the power indicator LED will light up.
>Flow rate adjustment Warning: Do not turn off the sampler while adjusting the flow, and do not adjust flow while the sampler is off. When the two flow rate adjustment LEDs turn off, the sampler has recorded its flow rate and can then be turned off. 
>Any error condition requires the reset button to be hit twice to reset.
9. Set the rotameter to 6.5lpm, reading from the center of the ball. This setting corresponds to the column Qind on the spreadsheet.
10. Turn on the MiniBuck. 
11. Take a reading with the MiniBuck by pressing down the bubble wand. Record the reading in the column "Qact" on the spreadsheet, next to the Qind row with a value of 6.5.
12. Repeat steps 11-13 for rotameter settings of 6.0, 5.5, 5.0, 4.5, and 4.0lpm.




  [1]: https://publiclab.org/system/images/photos/000/019/356/large/minivol.png "minivol.png"
  [2]: https://publiclab.org/system/images/photos/000/019/357/large/20170124_162343.jpg "20170124_162343.jpg"
  [3]: https://publiclab.org/system/images/photos/000/019/359/large/Screen_Shot_2017-01-24_at_4.20.15_PM.png "Screen_Shot_2017-01-24_at_4.20.15_PM.png"
  [4]: https://publiclab.org/system/images/photos/000/019/359/large/Screen_Shot_2017-01-24_at_4.20.15_PM.png "Screen_Shot_2017-01-24_at_4.20.15_PM.png"
  [5]: https://publiclab.org/system/images/photos/000/019/361/large/20170124_162334.jpg "20170124_162334.jpg"
  [6]: https://publiclab.org/system/images/photos/000/019/363/large/Screen_Shot_2017-01-24_at_6.25.34_PM.png "Screen_Shot_2017-01-24_at_6.25.34_PM.png"
  [attachment-1]: https://publiclab.org/system/images/photos/000/019/358/original/MiniVol_calibration.zip "MiniVol_calibration.zip"
  [attachment-2]: https://publiclab.org/system/images/photos/000/019/358/original/MiniVol_calibration.zip "MiniVol_calibration.zip"