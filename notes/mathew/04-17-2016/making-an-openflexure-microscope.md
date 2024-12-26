---
title: "Making an OpenFlexure Microscope"\ntagnames: 'raspberry-pi, dust, particle-sensing, microscope, passive-pm, microscopy, pm-monitor, openflexure, activity:microscope, microscopes, activity:microscopes, activity:open-flexure-microscope'
author: mathew
path: /notes/mathew/04-17-2016/making-an-openflexure-microscope.md
nid: 12997
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/015/654/original/P_20160417_104728.jpg)

# Making an OpenFlexure Microscope

by [mathew](../profile/mathew) | April 17, 2016 21:55

April 17, 2016 21:55 | Tags: [raspberry-pi](../tag/raspberry-pi), [dust](../tag/dust), [particle-sensing](../tag/particle-sensing), [microscope](../tag/microscope), [passive-pm](../tag/passive-pm), [microscopy](../tag/microscopy), [pm-monitor](../tag/pm-monitor), [openflexure](../tag/openflexure), [activity:microscope](../tag/activity:microscope), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes), [activity:open-flexure-microscope](../tag/activity:open-flexure-microscope)

----

###Goals: 
Determine if The [Open Flexure](http://docubricks.com/projects/openflexure-microscope) microscope can replace expensive lab microscopes in the analysis of [Passive PM monitors](/wiki/pm-dev).  In this note i’ll describe how I replicated an early version of this 3D printed microscope and slide stage, my experiences, assembly issues, and suggestions.

I’ll round out by discussing the next stage modifications to the OpenFlexure microscope to add a higher magnification lens and motorize the slide stage.   This microscope is the second part, along with ImageJ software automation 

###What make the OpenFlexure microscope so cool?
The OpenFlexure microscope replaces almost all meshing geared parts in an automated slide stage with four-bar linkages that print in a single 3D print without supports.  These flexing plastic joints give extremely good stability and smooth motion to the slide stage, reducing the difficulty of manufacturing dramatically.  This is a brilliant mechanical re-imagining of a microscope's parts around 3D printing and flexible plastic joints, or "live hinges" as they're called in plastics manufacturing.

[![1.4941068.figures.online.f3.gif](//i.publiclab.org/system/images/photos/000/015/640/large/1.4941068.figures.online.f3.gif)](//i.publiclab.org/system/images/photos/000/015/640/original/1.4941068.figures.online.f3.gif)

While the area of the slide stage is only 4x4x8mm, that is plenty of space to analyze the small samples we'll use. It will also be used by the [WaterScope group](http://www.waterscope.org/technologies/) for similarly sized samples for bacteria counting. 

###Equipment and Instructions

I started from the [first draft instructions up on Docubricks](http://docubricks.com/projects/openflexure-microscope). I downloaded the instructions and was able to open them in Firefox.  The instructions are still in an early stage, I suggest you read them completely before assembly. 

Notes on the instructions’ parts list: you don’t need hex-head m3 screws and I couldn’t find those in US hardware stores.  

[![P_20160325_192704.jpg](//i.publiclab.org/system/images/photos/000/015/643/large/P_20160325_192704.jpg)](//i.publiclab.org/system/images/photos/000/015/643/original/P_20160325_192704.jpg)

**Tools:**

* M3 screwdriver
* needlenose pliers
* 3/32” drill bit (specifies METRIC)
* Well-tuned 3D printer

**Raspberry pi equipment:**

* Raspberry Pi
* Raspberry Pi Camera
* Keyboard, Mouse
* HDMI TV, monitor, or converter
* microUSB power supply, 2A or above

**Materials:**

* 3x 30mm M3 Hex head screw
* 6x m3 washer 
* 2x 8mm M3 screws (pan head)
* 6x rubber bands 1mm cross section by 15cm unstretched
* white LED, 3mm dia. (or other hacked light) 
* ~40 ohm resistor (or two 22 ohm resistors in series)
* jumper wires for Raspberry pi to LED

**Open Flexure microscope parts to print:**
The instructions suggest (kind of buried) that the dovetail joints between the microscope body and lens assembly and light holder will work better if the small parts are not printed one at a time, but instead printed all together, because it slows the layers cooling and produces more accurate parts.

test your printer with just_leg_test.stl

Print:

* 1x piscope_5_12.stl
* 4x untitled_foot.stl
* 1x camera_lens_pliers.stl
* 3x gear_elevator.stl
* 3x gear.stl
* 1x illumination.stl
* 1x optics_all_in_one.stl
* 2x sample_clip.stl

You don't need:

*camera_board_gripper.stl
*camera_cover.stl

There is a part missing from the list, the "rear foot", which I hacked together from one of the regular feet and a couple of rubber bands (below). 

###Assembly issues and suggestions
I'm not going to go step-by-step through the instructions here, I'm just going to highlight some issues I had and design suggestions for the microscope and instructions. 

####Printing
I had a heck of a time printing, since the main microscope body takes 5-7 hours to print at low-medium resolution.  That is longer, apparently, than our Makerbot or the Makerbot 2X's at [Ctrl-H](http://pdxhackerspace.org/) could stay in tune, and the prints failed either in the plastic extrusion, bed adhesion, or bed leveling which caused layer adhesion issues.  In the end the only finished parts I got out of our Makerbot were the feet.

I used [PSU LID's](https://psu-epl.github.io/) Ultimaker 2 and Mojo printer from Stratsys. It took about 14 total hours of machine time to print the parts, not counting failed prints.  This is a prodigious printing project for a good, in-tune printer. 

[![P_20160323_123413.jpg](//i.publiclab.org/system/images/photos/000/015/641/large/P_20160323_123413.jpg)](//i.publiclab.org/system/images/photos/000/015/641/original/P_20160323_123413.jpg)

[![P_20160324_120838.jpg](//i.publiclab.org/system/images/photos/000/015/642/large/P_20160324_120838.jpg)](//i.publiclab.org/system/images/photos/000/015/642/original/P_20160324_120838.jpg)


####The Feet & Gears

Get the Gears together like this, and then press the screw's head down into the gear against a table:

[![P_20160328_091518.jpg](//i.publiclab.org/system/images/photos/000/015/645/large/P_20160328_091518.jpg)](//i.publiclab.org/system/images/photos/000/015/645/original/P_20160328_091518.jpg)


Holding the nut in place while tightening the screw is hard.  It would be much easier if this hexagonal shaft was smaller and held the nut from turning.  As is I was able to pin the nut as shown and tighen it on:

[![P_20160328_090713.jpg](//i.publiclab.org/system/images/photos/000/015/644/large/P_20160328_090713.jpg)](//i.publiclab.org/system/images/photos/000/015/644/original/P_20160328_090713.jpg)

While the instructions describe Pulling the rubberbands through the feat and up and over the levers as "tricky," I would say it was absolute hell.  it took over an 1 hour per gear to assemble these, four hours total.

Hand position:

[![P_20160328_103554.jpg](//i.publiclab.org/system/images/photos/000/015/646/large/P_20160328_103554.jpg)](//i.publiclab.org/system/images/photos/000/015/646/original/P_20160328_103554.jpg)

The quadrupled rubberbands have to go. They don't seem to fit in the slots provided, and make the microscope a bit wobbly. Quadrupled rubber bands broke repeatedly during assembly and I i used doubled bands:

[![P_20160328_095154.jpg](//i.publiclab.org/system/images/photos/000/015/647/large/P_20160328_095154.jpg)](//i.publiclab.org/system/images/photos/000/015/647/original/P_20160328_095154.jpg)

Doubled rubber bands were still hard. This should be a single rubber band of the appropriate strength, here's a chart of [standard sizes (US)](http://www.rubberband.com/about-us/rubber-bands-size-chart). 

I used the slide clip to hold the bands in place while feeding through the microscope body:

[![P_20160328_105701.jpg](//i.publiclab.org/system/images/photos/000/015/648/large/P_20160328_105701.jpg)](//i.publiclab.org/system/images/photos/000/015/648/original/P_20160328_105701.jpg)
[![P_20160328_094559.jpg](//i.publiclab.org/system/images/photos/000/015/649/large/P_20160328_094559.jpg)](//i.publiclab.org/system/images/photos/000/015/649/original/P_20160328_094559.jpg)

The hook (pictured above) for rubber bands had no space to maneuver, and the bands get roughed up sliding through this narrow channel.  There needs to be a channel on the side of the gear stack for the hook, that would greatly simplify this step.

There was no rear leg in the print files folder, so I printed an extra leg and strapped it to the base with a rubber band.  It works alright. 

[![P_20160417_144232.jpg](//i.publiclab.org/system/images/photos/000/015/653/large/P_20160417_144232.jpg)](//i.publiclab.org/system/images/photos/000/015/653/original/P_20160417_144232.jpg)

####The light
I didn't end up using the LED, since it turns out I only have 5mm LEDs in my stash.  I modified the light assembly to hold a broken endoscope with dimmable LEDs:


[![P_20160412_165122.jpg](//i.publiclab.org/system/images/photos/000/015/651/large/P_20160412_165122.jpg)](//i.publiclab.org/system/images/photos/000/015/651/original/P_20160412_165122.jpg)

[![P_20160412_175524.jpg](//i.publiclab.org/system/images/photos/000/015/652/large/P_20160412_175524.jpg)](//i.publiclab.org/system/images/photos/000/015/652/original/P_20160412_175524.jpg)

in attaching the dovetail jointed light holder to the microscope's main body I broke the 'tower' it was mounted on and had to super glue it back together.  it broke again while attaching my light, and I glued and stinted it together, but this part needs to be stronger or thicker, I think. 

[![P_20160417_104728.jpg](//i.publiclab.org/system/images/photos/000/015/650/large/P_20160417_104728.jpg)](//i.publiclab.org/system/images/photos/000/015/650/original/P_20160417_104728.jpg)

In the end this light works well.  I would consider buying a new endoscope for this part, and using the webcam to show the sample and table position during educational lessons.

###Capturing with Raspberry Pi

See the [camera documentation](https://www.raspberrypi.org/wp-content/uploads/2013/07/RaspiCam-Documentation.pdf)


open a preview window on the command line:
raspistill -p ’100,100,740,580’ -t 60000

which starts a window 100 pixels from the top of the screen, 100 pixels from the left, 480 high, 640 wide.  -t 60000 sets it going for ten minutes. 

I then cancel the process with ctrl-c

and take a still:

raspistill -n -o 16042016_sample_1.tiff 

-o is for capturing a file, -n prevents a preview window from opening


###Future parts: 
The next step is to add a better lens, or "objective." @TonyC and Richard Bowman and I have talked back and forth, and we believe this is the objective that fits, [sold on Alibaba.](http://www.aliexpress.com/item/40X-L-195-Plan-Achromatic-Biological-Microscope-Objective-Lens-Laboratory-Biomicroscopy-Accessories-20-2mm-for-Medical/32600189317.html?spm=2114.40010208.4.32.A7pVmT
)

The Objective is:

* 40x 
* RMS mount 
* 160mm focus 
* NA 0.6-0.8

Richard Bowman's notes:
The ones I used had a conjugate distance of 160mm, but it's possible the difference between 195mm and 160mm is simply that they've measured from the front rather than the back of the lens...  

the objectives we bought were also advertised as 195, but they are standard 160mm tube length lenses - this is what's marked on the barrel.  195mm is the distance from the sample to the image, rather than the distance from the objective's shoulder (above the thread) to the image plane - which is what the RMS standard says should be 160mm as I understand it.

Motors and Automation:
Coming soon!