---
title: Initial results and resolution of timelapse mode issue: PL Mobius Infragram Point and Shoot
tagnames: infragram, timelapse, fiji, mobius, question:timelapse, question:infragram-point-shoot
author: patcoyle
path: /notes/patcoyle/11-08-2014/initial-results-and-timelapse-mode-issue-pl-mobius-infragram-point-and-shoot.md
nid: 11327
uid: 77

---

# Initial results and resolution of timelapse mode issue: PL Mobius Infragram Point and Shoot

by [patcoyle](../profile/patcoyle) November 08, 2014 23:18

November 08, 2014 23:18 | Tags: [infragram](../tag/infragram), [timelapse](../tag/timelapse), [fiji](../tag/fiji), [mobius](../tag/mobius), [question:timelapse](../tag/question:timelapse), [question:infragram-point-shoot](../tag/question:infragram-point-shoot)

###What I want to do

Start using PL Mobius Infragram Point and Shoot. But I hit a snag on the timelapse mode. Looking for suggestions. (update: 11/10/14: Chris Fastie's tip, led me to the Mac version of the configuration software. Turned out it was operator error. Reading the instructions for the sorftware, led me to re-read the README file instructions: I'd missed the part about needing to upload the revised configuration back into the camera. The same key-press sequence used to download the configuration from the camera will also upload it to the camera. That did it.)

###My attempt and results

Followed the included README file instructions. 
1. Turned the camera on with the "Power" button while also pressing "Mode" until the red light blinked 3 times (5-6 seconds) to generate a config
2. Plugged it in via USB and waited for the disk to appear
3. Replaced the generated config file with a renamed copy of the file "SYSCFG.TXT.timelapse.example" 

The custom white balance from this configuration file looks like it worked, but I am having trouble with getting the timelapse mode to work.

(updated: However, I'd missed: 4. repeat turn on pressing mode. When I did that, timelapse worked.)

This initial attempt resulted in video as shown below: 

<iframe width="420" height="315" src="//www.youtube.com/embed/Gx8CxzoQrdE" frameborder="0" allowfullscreen></iframe>

Tried again and made sure the mode LED was red after two presses of the mode button, didn't give flashing red LED. Repeated tries just capture single images as shown below:

[![IMAG0001.JPG](https://i.publiclab.org/system/images/photos/000/007/783/medium/IMAG0001.JPG)](https://i.publiclab.org/system/images/photos/000/007/783/original/IMAG0001.JPG)


[![IMAG0002.JPG](https://i.publiclab.org/system/images/photos/000/007/784/medium/IMAG0002.JPG)](https://i.publiclab.org/system/images/photos/000/007/784/original/IMAG0002.JPG)

With the uploaded config file: timelapse worked. Here is contact sheet with images:

[![contact_sheet.jpg](https://i.publiclab.org/system/images/photos/000/007/789/medium/contact_sheet.jpg)](https://i.publiclab.org/system/images/photos/000/007/789/original/contact_sheet.jpg)



Good news is they process nicely with Ned Horning's Fiji Photomonitoring plugin.


[![IMAG0001_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/007/785/medium/IMAG0001_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/007/785/original/IMAG0001_NDVI_Color.jpg)


[![IMAG0002_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/007/786/medium/IMAG0002_NDVI_Color.jpg)](https://i.publiclab.org/system/images/photos/000/007/786/original/IMAG0002_NDVI_Color.jpg)



###Questions and next steps
Figure this out (Done: 11/10/14). Start using. Look at less fish-eye lens options.
###Why I'm interested
This camera is such a nice entry point, I want to exercise it, get familiar with it, use it.