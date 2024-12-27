---
title: "A DIY gas-finding camera?"

tagnames: 'thermal-photography, infrared, camera, flir, methane, voc, gasfinder'
author: mathew
path: /notes/mathew/11-21-2014/a-diy-gas-finding-camera.md
nid: 11377
uid: 4
cids: 10811,10813,10814,10815,10816,10817,10819,10823,10831,10832,11297
---

![](https://publiclab.org/public/system/images/photos/000/008/049/original/Screen_Shot_2014-11-20_at_8.21.11_PM.png)

# A DIY gas-finding camera?

by [mathew](/profile/mathew) | November 21, 2014 04:26

November 21, 2014 04:26 | Tags: [thermal-photography](/tag/thermal-photography), [infrared](/tag/infrared), [camera](/tag/camera), [flir](/tag/flir), [methane](/tag/methane), [voc](/tag/voc), [gasfinder](/tag/gasfinder)

----

###What I want to do
Explore whether its possible to make a camera that can see VOCs, like the very expensive [FLIR Gasfinder 320](http://www.flir.com/cs/emea/en/view/?id=41384) camera can.  Tons of people at the [Barnraising](/wiki/barnraising) and at [Science for Action](http://www.gcmonitor.org/2014-conference/) conference wanted one. Me too.

[cover image above from wikimedia commons](https://en.wikipedia.org/wiki/File:Jenkins_mechanical_scan_television_camera_1931.jpg)

Here is a Gasfinder 320 filming a 240x320 pixel image of an oil train taken by the [Vancouver Action Network](vancouveractionnetwork.blogspot.com).  Note the VOCs pluming off the car. 

<iframe width="420" height="315" src="//www.youtube.com/embed/35uC1gLctnw" frameborder="0" allowfullscreen></iframe>

Real cool stuff.  Too bad rental was several thousand dollars for a weekend, and the cameras cost tens of thousands of dollars, up to [$84,000 new](http://www.window.state.tx.us/procurement/tools/655-M2_PriceList.xls) (Excel file from Texas state aquisitions dept).

My hypothesis is that a camera of roughly half the resolution could be constructed using the techniques of early single-sensor mechanical television systems from the 1920's and 1930's and single photodiode sensitive in the 3200-3400nm range of the FLIR Gasfinder 320.

###My attempt and results

How did [mechanical televisions](https://en.wikipedia.org/wiki/Mechanical_television) work? by scanning a picture one line at a time, so that the signal of a single sensor only represents a single point in the image at any given time.  A series of[scanning systems, from belts with holes in them to mechanical disks and spinning mirror screws were tried](http://earlytelevision.org/Yanczer/yanczer_index.html), mechanical disks were the simplest system.  Most had 30-60 scan lines, but lots of places on the internet list 120-200 lines as the upper limit of a mechanical scanning (Nipkow) disk. The Gasfinder 320 has only 240 scan lines.  A mechanical TV camera works exactly the same way as the TV, except a lightbulb is replaced witha light sensor.  Watch this great documentary on the Baird system starting at :57:

<iframe width="420" height="315" src="//www.youtube.com/embed/92dN2G5-D4c?t=57s" frameborder="0" allowfullscreen></iframe>


###Questions and next steps
DIY projects abound for mechanical televisions that can be made from simple materials, but to use this scanning disk system with a camera, some sort of lens must be added, and a device for focusing captured light the right type of sensor. 

We would need to:

* identify a photodiode that works in the right infrared range (3200-3400nm);
* identify lenses that also work;
* filter light to the specific range
* build a scanning disk system;
* find or create software and hardware for converting the signal to a digital video source

the scanning disk system looks like it will be easy to build and can be bought off the shelf.  The software doesn't seem too hard either. The hard part seems to be lenses and sensors.  I think that some digital processing will reduce the flicker and produce much clearer images than the early mechanical TV sets.

####Sensors & Optics

 According to the FLIR website, the Gasfinder 320 operates in the 3200-3400nm range using an [Indium Antimonide (InSb) sensor. According to Wikipedia](https://en.wikipedia.org/wiki/Indium_antimonide) this sensor is fairly high speed.  More on the science of why it sees hydrocarbon gasses is [here](http://www.photonics.com/Article.aspx?PID=5&VID=116&IID=782&AID=56861).  To quote:
 "A wave number of 3019/cm (3.3-µm wavelength) relates to the absorption band of the antisymmetrical valence oscillation (a), whereas the deformation oscillation (d), whose movement is similar to the unfolding of an umbrella, causes a strong attenuation around a wavelength of 7.6 µm (at a wave number of 1306/cm). Both areas are suited for remote methane gas sniffing, with the stronger attenuation value favoring the use of the MWIR band around 3.3 µm. "

I can't find a InSb photodiode for sale, [but they are out there.](http://www.judsontechnologies.com/indiumant.html)

I found some lenses for sale that also filter to Midwave IR, but they are crazy expensive, [$300](http://www.edmundoptics.com/optics/optical-lenses/aspheric-lenses/mid-wave-long-wave-infrared-ir-aspheric-lenses/3205)-[$800](http://www.edmundoptics.com/optics/optical-lenses/achromatic-lenses/infrared-ir-achromatic-lenses/3224).  [There seem to be issues with focal length](http://www.thorlabs.us/images/TabImages/23094-S01.pdf) and ["chromatic" aberation (in the IR)](https://en.wikipedia.org/wiki/Chromatic_aberration). [these lenses seem to have the tightest filtration](http://www.thorlabs.us/newgrouppage9.cfm?objectgroup_id=4791).


####Television Kits & Resources

a couple DIY resources that are awesome:

a [30-line Baird Televisor kit for £29.95](http://www.mindsetsonline.co.uk/Catalogue/ProductDetail/televisor?productID=1cf4ed9b-d903-4fd0-a58d-d856ba03a613&catalogueLevelItemID=00000000-0000-0000-0000-000000000000). It also comes with software for sending "audio pictures" to the Baird Televisor. 

A printable PDF [30-line of a Nipkow disk.](http://www.zarkovision.de/nbtv-disc2.pdf)

[OpenSCAD](http://www.openscad.org/) code for [generating a disk of any size or density](http://www.taswegian.com/NBTV/forum/viewtopic.php?f=8&t=1894&hilit=3d+print)

'''
    // Parametric Nipkow Disk Generator
    // Andrew Davie

    $fn = 32;                     // smooth curves (bigger=smoother)

    DISC_DIAMETER = 150;         // in mm

    SCANLINES = 32;               // number of holes!

    HOLE_EDGE_OFFSET = 20;         // mm in from outer edge for first hole
    HOLE_DIAMETER = 0.5;         // size of scanline pinholes
    HOLE_SPACING = 0.6;            // spacing between scanline holes
    DISC_THICKNESS = 1;            // mm

    MOUNT_HOLES = 5;               // number of holes for mounting screws
    MOUNT_HOLE_DIAMETER = 3;      // mm screws
    MOUNT_CENTER_HOLE = 10;         // radius of center hole
    MOUNT_HOLE_POSITION = 15;      // radius of mounting hole position

    difference(){

       // Start with the basic disc
       cylinder(r=DISC_DIAMETER,h=DISC_THICKNESS);


       // ... and remove the following items...

       // Internal shaft/mount hole
       cylinder(r=MOUNT_CENTER_HOLE,h=DISC_THICKNESS);

       // Screw mount holes
       for (i=[0:MOUNT_HOLES-1]) {
          rotate([0,0,360*i/MOUNT_HOLES])
             translate([MOUNT_HOLE_POSITION,0,0])
                cylinder(r=MOUNT_HOLE_DIAMETER/2,h=DISC_THICKNESS);
       }

       // Scanline holes around edge in spiral
       for (i=[0:SCANLINES-1]) {
          rotate([0,0,360*i/SCANLINES])
             translate([DISC_DIAMETER-HOLE_EDGE_OFFSET-i*HOLE_SPACING,0,0])
                cylinder(r=HOLE_SIZE,h=1);
       }


    }
'''

[Hackaday](http://hackaday.com/2010/04/13/mechanical-scanning-television/),[hackaday project link](http://bs.cyty.com/menschen/e-etzold/archiv/TV/mechanical/scanningdisc.htm)

An alternative: Mirror arrays:
<iframe width="560" height="315" src="//www.youtube.com/embed/lDzmPBzbgwE" frameborder="0" allowfullscreen></iframe>

###Why I'm interested
Even at low resolution and a $1000 of lenses and sensors, a mechanical TV camera would still be amazingly accessible compared to existing commercial systems, and immediately valuable in monitoring oil and gas sites.  

As a mechanical device, most of the complicated parts can be laser cut or 3D printed and assembled by users.  The design is not black boxed at all and is easy to modify and understand.