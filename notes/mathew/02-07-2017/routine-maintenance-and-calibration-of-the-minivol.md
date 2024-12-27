---
title: "Routine maintenance and calibration of the MiniVol, with images"

tagnames: 'air-quality, check, dust, silica, pm, particle-sensing, pm-monitoring, minivol, activity:minivol, replication:13902, regular, single-point, understanding, step'
author: mathew
path: /notes/mathew/02-07-2017/routine-maintenance-and-calibration-of-the-minivol.md
nid: 13907
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/019/473/original/20170109_145812_%281%29.jpg)

# Routine maintenance and calibration of the MiniVol, with images

by [mathew](../../../profile/mathew) | February 07, 2017 20:20

February 07, 2017 20:20 | Tags: [air-quality](../tag/air-quality), [check](../tag/check), [dust](../tag/dust), [silica](../tag/silica), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [pm-monitoring](../tag/pm-monitoring), [minivol](../tag/minivol), [activity:minivol](../tag/activity:minivol), [replication:13902](../tag/replication:13902), [regular](../tag/regular), [single-point](../tag/single-point), [understanding](../tag/understanding), [step](../tag/step)

----

_This activity is a replication of [This note][1]._

Every five sample periods the [MiniVol][2] must be subjected to the routine maintenance of a cleaning, leak check, and single-point flow rate check.

Beyond routine maintenance, pump components may become worn, manifesting in irregular or erratic flow. Consult section 6.2 of the Manual to address these issues.

Maintenance Menu:

* [Regular Cleaning][3]
* [Check for Leaks][4]
* [Single-point flow calibration][5]
* [Understanding Calibration][6]
* [Step-by-Step Calibration][7]

## Regular Cleaning
_These instructions based on section 6.1.2 of the MiniVol TAS manual._

Every 5 sample periods or after checking that the Easy Maintenance Target inside the impactor is soiled.

The MiniVol comes with two impactor assemblies with two EMTs each, one for PM10 and the other for PM2.5.

[![IMG_20170203_150030.png][9]][8]

Opening up the impactor assembly:

[![20170203_141436.jpg][11]][10][![20170203_141451.jpg][13]][12]

Push the impactor out with your thumb:

[![IMG_20170203_150155.jpg][15]][14][![20170203_141658.jpg][17]][16][![20170203_141727.png][19]][18]

The following procedure should be used for all four EMTs.

1) Clean the EMT by wiping with a clean lint-free cloth or paper towel.
2) Apply a small amount of low vapor pressure grease to the applicator.
3) Use the straight edge to apply the grease to the EMT in a spreading or "buttering" motion, so that it is a flat surface between the lip of the EMT.

[![IMG_20170203_150453.jpg][21]][20]

4) After application wipe any excess grease from the edge of the EMT
5) Re-insert the EMT into the impactor.

## Check for leaks
The pump need a quick check leak to make sure nothing was damaged in transit.

1) Remove the impactor/filter holder from the inlet tube, if its attached.
2) orient the MiniVol so it is vertical, with the inlet up top.
3) Unscrew the inlet tube compression fitting, pull the inlet tube all the way out, and tighten the compression fitting.

[![IMG_20170203_151731.png][23]][22]

4) Turn the pump on by pressing the ON/AUTO/OFF button on the timer until a bar on the lower edge of the display is above "ON." The pump will start and the power indicator LED will light up.

[![20170206_171659.png][25]][24]

5) Cover the air inlet tube with the palm of your hand.

[![20170203_152613.jpg][27]][26]

6)  The ball in rotameter (flow gauge) should drop to zero and should not be moving at all.

[![rotameter-to-zero.png][29]][28]

7) If the rotameter reads zero, turn the sampler off by pressing the ON/AUTO/OFF button on the timer until the bar on the lower edge of the display is above the "OFF."
8) If the rotameter does not read zero, proceed to ["Troubleshooting leaks."](https://publiclab.org/notes/mathew/03-26-2017/troubleshooting-leaks-on-the-minivol)

_if the air inlet tube is covered the Low Flow LED will light up and the sampler will shut down after 15-20 seconds. Press the Reset button twice to turn the sampler back on._

## MiniVol Calibration instructions

##### Understanding Calibration
_Appendix A: Calculating flow rate, on page 59 of the [MiniVol Manual][40] describes this calibration procedure._ Notes on the equations in the calibration can be found in this [research question.][41]

The MiniVol has a rotameter for setting and checking pump flow in the field. Its readings are only nominal, and not the exact 5lpm (liters per minute) that are actually needed. The MiniVol must therefore be subjected to a calibration once yearly.

![MiniVol rotameter ][42]

The rotameter needs to be set for a number that corresponds to an actual flow rate of 5lpm (liters per minute), not an indication of 5lpm. To determine the actual flow rate, six measurements are taken with the flow calibration standard (in this case a MiniBuck) at six different flow rates from 4-6.5lpm as indicated on the rotameter.

These six points are then subjected to a linear regression, the results of which are used to calculate an a rotameter flow rate setting specific to the MiniVol that will achieve 5lpm under field conditions.

This calibration chart came with the MiniVol:
![image description][43]

- **mvol** slope of the least square line from the linear regression
- **bvol** intercept of the least square line from the linear regression
- **r2** coefficient of determination from linear regression
- **Qind** indicated flow rate on sampler's rotameter
- **Qact** actual flow rate as measured by the calibration standard
- **Q@std** calculated flow rate at standard conditions, from Equation 1

- standard pressure: 760mmHg, standard temp: 298°K)
- Equation 1: Q@std = mvol x Qind + bvol

- **Qcalc** calculated flow rate of sampler determined from the linear regression results
- **Diff** the % difference between measured and calculated flow rates

This chart and the calculations that are used to create it are withinthe MiniVol Spreadsheet, found [here.][44]

##### Step by Step calibration

Materials Needed:

- MiniBuck Calibrator
- MiniVol
- Charged MiniVol battery
- bubble level
- [MiniVol spreadsheet][44]
- Source for a nearby reading of atmospheric pressure
- calibrated thermometer for temperature
- Holder for faceplate

[![20170207_111851.jpg][46]][45]

Before beginning:

- Identify a local source of weather information (see instructions in the [activity][47] and record the current pressure.
- Download the MiniVol Spreadsheet from [here.][44] It is in Open Document Format (ODF) and requires an ODF-compatible spreadsheet program such as [LibreOffice.][48]
- Prep a holder for the faceplate (cut a notch in a piece of wood, like this 2"x 4" [![20170207_111553.jpg][50]][49]

1) Prepare the MiniBuck Calibrator with the soap solution.

[![IMG_20170203_154006.jpg][52]][51]

2) Insert the MiniVol battery.

[![IMG_20170203_152152.jpg][54]][53]

3) Remove the MinVol faceplate to access the pump and internal plumbing. Remove the four faceplate thumbscrews and the sampler mount thumbscrew and lift off the faceplate.

[![20170203_152829.png][56]][55]

4) At the back of the rotameter at its top outlet is a small brass orifice. Press the vinyl hose from the Minibuck over the orifice.

[![IMG_20170203_153908.png][58]][57]

5) Attach the other end of the vinyl hose to the bottom nozzle of the MiniBuck.

[![IMG_20170203_154111.jpg][60]][59]

6) Orient the MiniVol vertically, and balance the faceplate vertically inside the faceplate holder.
7) Check that the faceplate is truly vertical with the bubble level. It is crucial that the rotameter is truly vertical to get an accurate reading.

[![IMG_20170203_154307.png][62]][61]

7) Take a reading of the temperature for the space you are in, and take a reading of the pressure from your local weather source. Record this information in the calibration spreadsheet.

[![Screen_Shot_2017-02-07_at_12_06_01_PM.png][64]][63]

8) Turn the pump on by pressing ON/AUTO/OFF button on the timer until a bar on the lower edge of the display is above "ON." The pump will start and the power indicator LED will light up.

[![20170206_171659.png][25]][24]

> Flow rate adjustment Warning: Do not turn off the sampler while adjusting the flow, and do not adjust flow while the sampler is off. When the two flow rate adjustment LEDs turn off, the sampler has recorded its flow rate and can then be turned off.
> Any error condition requires the reset button to be hit twice to reset.

9) Set the rotameter to 6.5lpm, reading from the center of the ball. This setting corresponds to the column Qind on the spreadsheet.

[![IMG_20170203_160443.png][66]][65]

10) Turn on the MiniBuck.
11) Take a reading with the MiniBuck by pressing down the bubble wand. Record the reading in the column "Qact" on the spreadsheet, next to the Qind row with a value of 6.5\.

[![IMG_20170203_160931.jpg][68]][67]

[![Screen_Shot_2017-02-07_at_12_06_01_PM.png][70]][69]

12) Repeat steps 8-12 for rotameter settings of 6.0, 5.5, 5.0, 4.5, and 4.0lpm.


[1]: /notes/mathew/02-03-2017/routine-maintenance-and-calibration-of-the-minivol
[2]: /wiki/minivol
[3]: #Regular+Cleaning
[4]: #Check+for+Leaks
[5]: #Single-point+flow+rate+check
[6]: #Understanding+Calibration
[7]: #Step+by+Step+calibration
[8]: https://publiclab.org/system/images/photos/000/019/438/original/IMG_20170203_150030.png
[9]: https://publiclab.org/system/images/photos/000/019/438/large/IMG_20170203_150030.png
[10]: https://publiclab.org/system/images/photos/000/019/439/original/20170203_141436.jpg
[11]: https://publiclab.org/system/images/photos/000/019/439/large/20170203_141436.jpg
[12]: https://publiclab.org/system/images/photos/000/019/440/original/20170203_141451.jpg
[13]: https://publiclab.org/system/images/photos/000/019/440/large/20170203_141451.jpg
[14]: https://publiclab.org/system/images/photos/000/019/441/original/IMG_20170203_150155.jpg
[15]: https://publiclab.org/system/images/photos/000/019/441/large/IMG_20170203_150155.jpg
[16]: https://publiclab.org/system/images/photos/000/019/442/original/20170203_141658.jpg
[17]: https://publiclab.org/system/images/photos/000/019/442/large/20170203_141658.jpg
[18]: https://publiclab.org/system/images/photos/000/019/444/original/20170203_141727.png
[19]: https://publiclab.org/system/images/photos/000/019/444/large/20170203_141727.png
[20]: https://publiclab.org/system/images/photos/000/019/446/original/IMG_20170203_150453.jpg
[21]: https://publiclab.org/system/images/photos/000/019/446/large/IMG_20170203_150453.jpg
[22]: https://publiclab.org/system/images/photos/000/019/447/original/IMG_20170203_151731.png
[23]: https://publiclab.org/system/images/photos/000/019/447/large/IMG_20170203_151731.png
[24]: https://publiclab.org/system/images/photos/000/019/448/original/20170206_171659.png
[25]: https://publiclab.org/system/images/photos/000/019/448/large/20170206_171659.png
[26]: https://publiclab.org/system/images/photos/000/019/449/original/20170203_152613.jpg
[27]: https://publiclab.org/system/images/photos/000/019/449/large/20170203_152613.jpg
[28]: https://publiclab.org/system/images/photos/000/019/450/original/rotameter-to-zero.png
[29]: https://publiclab.org/system/images/photos/000/019/450/large/rotameter-to-zero.png
[30]: https://publiclab.org/system/images/photos/000/019/456/original/20170207_104714.png
[31]: https://publiclab.org/system/images/photos/000/019/456/large/20170207_104714.png
[32]: https://publiclab.org/system/images/photos/000/019/451/original/20170203_152843.jpg
[33]: https://publiclab.org/system/images/photos/000/019/451/large/20170203_152843.jpg
[34]: https://publiclab.org/system/images/photos/000/019/452/original/20170203_153001.png
[35]: https://publiclab.org/system/images/photos/000/019/452/large/20170203_153001.png
[36]: https://publiclab.org/system/images/photos/000/019/454/original/20170207_103416.png
[37]: https://publiclab.org/system/images/photos/000/019/454/large/20170207_103416.png
[38]: https://publiclab.org/system/images/photos/000/019/455/original/20170207_103625.png
[39]: https://publiclab.org/system/images/photos/000/019/455/large/20170207_103625.png
[40]: http://itepsrv1.itep.nau.edu/itep_course_downloads/MiniVol_Resources/MiniV_Manual.pdf
[41]: /questions/mathew/01-25-2017/calibration-calculations-don-t-match-minivol-manual
[42]: https://publiclab.org/system/images/photos/000/019/356/large/minivol.png "minivol.png"
[43]: https://publiclab.org/system/images/photos/000/019/357/large/20170124_162343.jpg "20170124_162343.jpg"
[44]: /wiki/minivol#activities
[45]: https://publiclab.org/system/images/photos/000/019/459/original/20170207_111851.jpg
[46]: https://publiclab.org/system/images/photos/000/019/459/large/20170207_111851.jpg
[47]: /wiki/minivol#activities "pre-deployment"
[48]: http://www.libreoffice.org/
[49]: https://publiclab.org/system/images/photos/000/019/460/original/20170207_111553.jpg
[50]: https://publiclab.org/system/images/photos/000/019/460/large/20170207_111553.jpg
[51]: https://publiclab.org/system/images/photos/000/019/461/original/IMG_20170203_154006.jpg
[52]: https://publiclab.org/system/images/photos/000/019/461/large/IMG_20170203_154006.jpg
[53]: https://publiclab.org/system/images/photos/000/019/462/original/IMG_20170203_152152.jpg
[54]: https://publiclab.org/system/images/photos/000/019/462/large/IMG_20170203_152152.jpg
[55]: https://publiclab.org/system/images/photos/000/019/464/original/20170203_152829.png
[56]: https://publiclab.org/system/images/photos/000/019/464/large/20170203_152829.png
[57]: https://publiclab.org/system/images/photos/000/019/465/original/IMG_20170203_153908.png
[58]: https://publiclab.org/system/images/photos/000/019/465/large/IMG_20170203_153908.png
[59]: https://publiclab.org/system/images/photos/000/019/466/original/IMG_20170203_154111.jpg
[60]: https://publiclab.org/system/images/photos/000/019/466/large/IMG_20170203_154111.jpg
[61]: https://publiclab.org/system/images/photos/000/019/468/original/IMG_20170203_154307.png
[62]: https://publiclab.org/system/images/photos/000/019/468/large/IMG_20170203_154307.png
[63]: https://publiclab.org/system/images/photos/000/019/469/original/Screen_Shot_2017-02-07_at_12_06_01_PM.png
[64]: https://publiclab.org/system/images/photos/000/019/469/large/Screen_Shot_2017-02-07_at_12_06_01_PM.png
[65]: https://publiclab.org/system/images/photos/000/019/471/original/IMG_20170203_160443.png
[66]: https://publiclab.org/system/images/photos/000/019/471/large/IMG_20170203_160443.png
[67]: https://publiclab.org/system/images/photos/000/019/470/original/IMG_20170203_160931.jpg
[68]: https://publiclab.org/system/images/photos/000/019/470/large/IMG_20170203_160931.jpg
[69]: https://publiclab.org/system/images/photos/000/019/472/original/Screen_Shot_2017-02-07_at_12_06_01_PM.png
[70]: https://publiclab.org/system/images/photos/000/019/472/large/Screen_Shot_2017-02-07_at_12_06_01_PM.png