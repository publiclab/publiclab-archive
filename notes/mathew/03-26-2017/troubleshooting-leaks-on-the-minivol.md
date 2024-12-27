---
title: "Troubleshooting leaks on the MiniVol"

tagnames: 'air-quality, dust, silica, pm, particle-sensing, pm-monitoring, pm-sensing, minivol, airmetrics, activity:minivol'
author: mathew
path: /notes/mathew/03-26-2017/troubleshooting-leaks-on-the-minivol.md
nid: 14062
uid: 4
cids: 
---

# Troubleshooting leaks on the MiniVol

by [mathew](/profile/mathew) | March 26, 2017 23:30

March 26, 2017 23:30 | Tags: [air-quality](/tag/air-quality), [dust](/tag/dust), [silica](/tag/silica), [pm](/tag/pm), [particle-sensing](/tag/particle-sensing), [pm-monitoring](/tag/pm-monitoring), [pm-sensing](/tag/pm-sensing), [minivol](/tag/minivol), [airmetrics](/tag/airmetrics), [activity:minivol](/tag/activity:minivol)

----

This activity is to troubleshoot leaks on the [Minivol](/wiki/minivol) PM monitor.

## Check for leaks
If you have already checked for leaks and discovered one, move on to Troubleshooting Leaks below.

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
8) If the rotameter does not read zero, proceed to "Troubleshooting leaks."

_if the air inlet tube is covered the Low Flow LED will light up and the sampler will shut down after 15-20 seconds. Press the Reset button twice to turn the sampler back on._


## Troubleshooting Leaks
If the ball in the rotameter is moving or does not read zero, a leak exists. Check the following factors, re-testing for leaks after each.

[![20170207_104714.png][31]][30]

_location of components inside the MiniVol_

- Check that the inlet tube is fully extended and the compression fitting is tight

[![20170206_171659.png][25]][24]

The following checks require removing the faceplate to access the pump and internal plumbing. Remove the four faceplate thumbscrews and the sampler mount thumbscrew and lift off the faceplate.

[![20170203_152843.jpg][33]][32]

- Check that all push on fittings are secure
- check and tighten all compression fittings

[![20170203_153001.png][35]][34]

- Check for cracks in the rotameter (flow gauge) around the inlet and outlet

[![20170207_103416.png][37]][36]

- check for cracks in the pulse dampener

![20170207_103625.png][38]

If there are cracks in the pulse dampener or rotameter, major service is needed on the MiniVol, and it cannot be deployed.

## Single-point flow rate check

Perform a single-point flow rate check with a flow meter, and confirm the curve established during calibration. The result should be within =/- 10% of 5lpm.

1. Use the [MiniVol Spreadsheet](https://publiclab.org/wiki/minivol#how+is+the+MiniVol+used?) specific to your MiniVol's serial number to determine the flow rate set point for the current temperature and pressure.
2. Follow the MiniVol Calibration instructions below, substituting the flow rate set point for the calibration points.


[22]: https://publiclab.org/system/images/photos/000/019/447/original/IMG_20170203_151731.png
[23]: https://publiclab.org/system/images/photos/000/019/447/large/IMG_20170203_151731.png
[24]: https://publiclab.org/system/images/photos/000/019/448/original/20170206_171659.png
[25]: https://publiclab.org/system/images/photos/000/019/448/large/20170206_171659.png
[26]: https://publiclab.org/system/images/photos/000/019/449/original/20170203_152613.jpg
[27]: https://publiclab.org/system/images/photos/000/019/449/large/20170203_152613.jpg
[28]: https://publiclab.org/system/images/photos/000/019/450/original/rotameter-to-zero.png

[30]: https://publiclab.org/system/images/photos/000/019/456/original/20170207_104714.png
[31]: https://publiclab.org/system/images/photos/000/019/456/large/20170207_104714.png
[32]: https://publiclab.org/system/images/photos/000/019/451/original/20170203_152843.jpg
[33]: https://publiclab.org/system/images/photos/000/019/451/large/20170203_152843.jpg
[34]: https://publiclab.org/system/images/photos/000/019/452/original/20170203_153001.png
[35]: https://publiclab.org/system/images/photos/000/019/452/large/20170203_153001.png
[36]: https://publiclab.org/system/images/photos/000/019/454/original/20170207_103416.png
[37]: https://publiclab.org/system/images/photos/000/019/454/large/20170207_103416.png
[38]: https://publiclab.org/system/images/photos/000/019/455/original/20170207_103625.png