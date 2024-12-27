---
title: "MiniVol pre-deployment preparation, with images"

tagnames: 'air-quality, dust, silica, pm, particle-sensing, pm-monitoring, minivol, activity:minivol, prepping, 1031710, 600-007, replication:13898'
author: mathew
path: /notes/mathew/02-09-2017/minivol-pre-deployment-preparation-with-images.md
nid: 13911
uid: 4
cids: 29430
---

![](https://publiclab.org/public/system/images/photos/000/019/500/original/pm10gif.gif)

# MiniVol pre-deployment preparation, with images

by [mathew](/profile/mathew) | February 09, 2017 01:14

February 09, 2017 01:14 | Tags: [air-quality](/tag/air-quality), [dust](/tag/dust), [silica](/tag/silica), [pm](/tag/pm), [particle-sensing](/tag/particle-sensing), [pm-monitoring](/tag/pm-monitoring), [minivol](/tag/minivol), [activity:minivol](/tag/activity:minivol), [prepping](/tag/prepping), [1031710](/tag/1031710), [600-007](/tag/600-007), [replication:13898](/tag/replication:13898)

----

_This activity is a replication of [this note](/notes/mathew/02-02-2017/minivol-pre-deployment-preparation) with more images._

# Prepping the MiniVol for Deployment

## Before delivery

Go through the [Site Identification](/wiki/minivol#Activities) activity to confirm that the monitoring site conforms to the siting requirements, there is a good mounting location at the site, and that you know how to get temperature and pressure information.

## Unbox and check

Open the MiniVol case and check that you have:

- MiniVol
- AA battery for timer
- filter/impactor assemblies
- battery packs
- battery charger
- mounting bracket
- mounting pole
- ratchet straps
- PM sampling field data log
- prepared 47mm filters in cassettes
- Disposable gloves

_OR_

- 47mm filters
- empty cassettes
- cassette separator
- PTFE-coated forceps![image description](https://publiclab.org/system/images/photos/000/019/490/large/20170207_161119_crop.png "20170207_161119_crop.png")

  
## MiniVol Pre-deployment Setup:

#### Check that the battery is charged and charge if needed

The battery is best stored partially charged, but should be fully charged before deployment. Press the "test" button to check:![image description](https://publiclab.org/system/images/photos/000/019/491/large/20170207_161211.png "20170207_161211.png")

  
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
8) If the rotameter does not read zero, proceed to ["Troubleshooting leaks."](/notes/mathew/03-26-2017/troubleshooting-leaks-on-the-minivol)

_if the air inlet tube is covered the Low Flow LED will light up and the sampler will shut down after 15-20 seconds. Press the Reset button twice to turn the sampler back on._


#### Record expected local weather conditions

Using the local weather source identified in the [Site Identification activity](/wiki/minivol#Activities), record the forcasted temperature and pressure on your Field Data Log.

> If temperature/pressure is in the wrong units, the [MiniVol spreadsheet](/wiki/minivol#how+is+the+MiniVol+used?) has calculators you can use in the 'Flow calculator' tab.

#### Set the programmable timer

The best way to ensure 24 hours of monitoring is to set the MiniVol's programmable timer to turn the sampler on and off automatically, using the AUTO setting. The pump can be turned on and off manually with the ON/OFF settings.

##### Check that the programmable timer is controlling the MiniVol.

With a battery pack inserted into the sampler, press the ON/AUTO/OFF button until the display shows a bar above "ON." Verify that the pump motor has started and the red power indicator LED is on.

![settings on the timer](https://publiclab.org/system/images/photos/000/019/448/original/20170206_171659.png)

###### Set the real time clock so that it is configured to the correct date and time.

1. Set the day. Hold down the CLOCK button while pressing the WEEK button until the correct day appears on the top of the display ![image description][1]
2. Set the Hour. Hold down the CLOCK button while pressing the HOUR button until the correct hour is displayed. Make sure that AM or PM is correctly displayed. 
3. Set the Minute. Hold down the CLOCK button and press the MIN buttion until the display indicates the correct minute. The seconds display will always reset to zero.

###### Set the monitoring period's on/off times

Pick the time you want the MiniVol to start on the monitoring day. Be conservative, so that you know you'll have the MiniVol setup by the time the period starts, and that you will be picking up the MiniVol after the period finishes. 


1. Press the PROG button once to enter programming mode. 1ON will appear near the lower left corner of the display.
2. Press the HOUR and MIN buttons to enter the power-on time for the monitoring period.
3. Press the WEEK button to select the day of the monitoring period. "Mo Tue We Th Fr Sa Su" indicates that the monitor will run every day. Continue pressing the WEEK button until only the day of the monitoring period is selected.
4. Press the PROG button to move to setting the power-off time. 1OFF will appear near the lower left corner of the display.
5. Press the HOUR and MIN buttons to enter a power-off time identical to the power-on time.
6. Press the WEEK button to select _the day after_ the power-on time.
7. Press the PROG button again to move to the second power-on time. 2ON will appear near the lower left corner of the display.
8. If you are monitoring for several consecutive days, set the second on/off time with sufficient time to recover and replace the impactor/filter holder assembly and battery. Repeat steps 2-6 to set the second on/off time. Up to six on/off times can be set.
9. Make sure the programmed on/off times for your monitoring period are turned on, and all other times are turned off. Press the PROG button to step through the times you entered.
10. Press the reset/recall button, RST/RCL, to disable (RST) or reactivate (RCL) programmed on/off times. **Both ON and OFF times must be disabled**. When you reactivate an entry, it will return to values set before you performed a reset. 
11. Pres the CLOCK button to return to real-time display.
12. Press the ON/AUTO/OFF button until the bar is positioned above AUTO.


RST/RCL Reset (off) vs Recalled (on):

![setting start time off][2] ![Setting time ON][3] 

#### Determine the Pump's flow rate set point

The pump's rotameter (flow gauge) is sensitive to temperature and pressure change and is effected by the MiniVol itself. A flow rate set point must therefore be calculated for each sampling project so that 5 liters per minute are actually sampled, based on the MiniVol's unique flow calibration.
**Flow rate adjustment Warning: Do not turn off the sampler while adjusting the flow, and do not adjust flow while the sampler is off. When the two flow rate adjustment LEDs turn off, the sampler has recorded its flow rate and can then be turned off.**
\[need image of flow rate LEDs\]

**Any error condition requires the reset button to be hit twice to reset.**

Using the Flow Calculator tab of the MiniVol spreadsheet, enter:

- the date of deployment,
- source of the weather report for the deployment date
- the weather station name
- the time you read the report
- the temperature
- the pressure

If the temperature or pressure of the report come in the wrong units, use the calculators on the Flow Calculator tab to convert it to mmHg and degrees C.

![image description][4]

The Flow meter set point will be displayed. This is the setting for the rotameter (flow gauge) to actually achieve 5 liters per minute under expected conditions.

#### Load filter into a cassette

> _Whenever possible, filters come pre-installed in cassettes. This step is usually unnecessary_

Materials:

- 47mm Filters in petrislide cover
- PTFE-coated forceps _(Saint-Gobain D1069288, from Fisher scientific #1031710)_.
- Cassette Separator _(Airmetrics #600-007)_
- Clean disposable gloves

Perform indoors in a clean space. Use teflon-tipped forceps, and only handle air filters by their edges, with forceps. Never bend or fold filters, and always store in petrislides cover.

Select a filter and remove cover from petrislide.

Use forceps to install the filter into the filter cassette

place the filter cassette in the filter holder.

place an identifying tag on the filter holder so the id of the mounted filter is known.

#### Install Filter Cassette in Impactor

Materials needed:

- Filter in Cassette
- Disposable Gloves
- Impactor Assembly
- Clean plastic bag

The MiniVol sorts particles by size with impactors, so that a specific size range of particles can be captured on the filter.

Stacked on the MiniVol are two stages of impactors, a PM10 (top, silver) and PM2.5 (bottom, gold) impactor. Use the PM10 impactor alone for PM10, use the PM10 and PM2.5 impactors for PM2.5, and use no impactors to collect total suspended particles (for heavy metal emissions).

- TSP configuration
- PM 10 configuration _after fig 4.2 from the MiniVol manual_

![image description][5]

- PM 2.5 configuration: _after fig 4.3 from the MiniVol manual_

![image description][6]

Assemble the stack of impactors for your deployment as shown. Use gloves to handle the filter and cassette assembly. Place in the appropriate filter holder and press assembly together until it bottoms out.

Place the entire clean filter and impactor assembly into a plastic bag or other case for transport to the site. It is best to keep the filter assembly in a vertical position until installed on the sampler.

![image description][7]

  [1]: https://publiclab.org/system/images/photos/000/019/495/large/20170207_170957.png "20170207_170957.png"
  [2]: https://publiclab.org/system/images/photos/000/019/498/large/20170207_171401.png "20170207_171401.png"
  [3]: https://publiclab.org/system/images/photos/000/019/497/large/20170207_171359.png "20170207_171359.png"
  [4]: https://publiclab.org/system/images/photos/000/019/499/large/Screen_Shot_2017-02-08_at_5.10.18_PM.png "Screen_Shot_2017-02-08_at_5.10.18_PM.png"
  [5]: https://publiclab.org/system/images/photos/000/019/492/large/pm10gif.gif "pm10gif.gif"
  [6]: https://publiclab.org/system/images/photos/000/019/493/large/pm25gif.gif "pm25gif.gif"
  [7]: https://publiclab.org/system/images/photos/000/019/494/large/20170207_174826.jpg "20170207_174826.jpg"

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