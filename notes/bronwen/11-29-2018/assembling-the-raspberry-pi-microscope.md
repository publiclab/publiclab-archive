---
title: Assembling the Raspberry Pi Microscope
tagnames: kits, with:warren, microscope, hardware, activity:raspberry-pi, activity:microscope, community-kits, community-microscope, activity:community-microscope-assembly, raspberry-pi-microscope, raspberrypi-microscope
author: Bronwen
path: /notes/bronwen/11-29-2018/assembling-the-raspberry-pi-microscope.md
nid: 17775
uid: 237313

---

# Assembling the Raspberry Pi Microscope

by [Bronwen](../profile/Bronwen) November 29, 2018 15:15

November 29, 2018 15:15 | Tags: [kits](../tag/kits), [with:warren](../tag/with:warren), [microscope](../tag/microscope), [hardware](../tag/hardware), [activity:raspberry-pi](../tag/activity:raspberry-pi), [activity:microscope](../tag/activity:microscope), [community-kits](../tag/community-kits), [community-microscope](../tag/community-microscope), [activity:community-microscope-assembly](../tag/activity:community-microscope-assembly), [raspberry-pi-microscope](../tag/raspberry-pi-microscope), [raspberrypi-microscope](../tag/raspberrypi-microscope)

These are instructions for assembling the Raspberry Pi version of the microscope. These are posting with images from the kit which is available in our online store as/of winter 2018/2019\. Since users are constantly modifying and improving on designs and techniques, we also suggest taking a look at the [Community Microscope Wiki](https://publiclab.org/wiki/micro), where you can browse related work by other collaborators on this project.

If you haven't already assembled your microscope stage, you can [find a how-to here.](https://publiclab.org/notes/bronwen/05-07-2018/community-microscope-assembly-instructions)

### Lens removal

Before starting, you'll need to remove the lens from your Raspberry Pi (if you got a Kickstarter kit, we've done this already, and taped the lens back in place loosely to avoid dust).

Removing a lens can be pretty tough. There are actually 2 types of lens "cylinders" - one with a 4-prong pattern like a propeller, and one with a more complex shape. There may also be an older type with 3 prongs, but we've never seen one. Some Pi cameras ship with a circular lens removal tool which works really well (pictured below). ![image description](/i/27966.png "Screen_Shot_2018-11-30_at_12.14.59_PM.png")

But most do not, so try one of these sources for a 3d-printable one, or try using a piece of 1x4 Lego brick (for the propeller-type ones).

- [https://www.thingiverse.com/thing:1574661](https://www.thingiverse.com/thing:1574661)
- [https://www.thingiverse.com/thing:1570865](https://www.thingiverse.com/thing:1570865) (this one worked nicely for 3- and 4-prong lenses)

It may also be possible to remove the entire lens mount, [see here for instructions](https://publiclab.org/notes/MaggPi/04-08-2018/raspberry-pi-microscope-close-up-lens-system) by @MaggPi.

The most reliable way we've found, which works with any type of lens, is to use a set of pliers with very fine teeth to grip the threaded sides of the inner cylinder, and to steadily twist the lens. Don't apply too much force to compress the lens or it will crush, but do apply steady turning pressure to rotate the lens so the glue unsticks and you can unscrew it. Here are some photos:

![The](/i/27967.jpg "IMG_20181107_115539.jpg")

---------

### Pi Assembly

Step one: unpack your kit and make sure you have the camera parts shown below.

![image description](/i/27928.jpg "IMG_20181126_154531_285.jpg")

Step 2: Insert your pre-flashed SD card into the Raspberry Pi board. Are you using your own materials instead of the kit from the store? Find the instructions for [loading the camera software here](https://publiclab.org/wiki/pi-builder) or [here.](https://github.com/publiclab/pi-builder/labels/recipe)

![image description](/i/27929.jpg "IMG_20181126_154606_298.jpg")

Step 3: CAREFULLY insert the cable exactly as shown. Orientation matters! Very gently, pull the black bar so that is loose (making sure not to separate it from the unit). Insert the cable so that it is firmly and evenly in place, and then push the black piece back in to secure it in place.

If you accidentally break off the black plastic piece (this piece is quite delicate), you can still insert it as you normally would, using a little bit of tape to help secure it (making sure not to cover any of the electronic components).

:![image description](/i/27930.jpg "IMG_20181126_154646_022.jpg")

Step 4: Insert the wide end of the cable into the camera. There is scotch tape covering the lens to keep it clean during shipment and assembly.

![image description](/i/27932.jpg "IMG_20181126_154725_095.jpg")

Step 5: Place the board into the case as shown. The slots for the power and data ports will show you the correct orientation. There are spacers to ensure that the board is level and secure inside the case: if there is a lot of wiggle room, or if the board seems crooked you may have failed to align with the spacers.

![image description](/i/27933.jpg "IMG_20181126_154749_478.jpg")

The camera will rest inside the board.

![image description](/i/27934.jpg "IMG_20181126_154834_061.jpg")

Step 6: Fit the lens into the top piece of the camera case.

![image description](/i/27935.jpg "IMG_20181126_154907_728.jpg")

and then close the unit.

: ![image description](/i/27936.jpg "IMG_20181126_154939_001.jpg")

Step 7: Center the lens adaptor over the camera opening, and secure it to the camera case using foam tape. Some users like to mask the sides with gaff or electrical tape to lessen the possibility of light leaks, but this is optional.

For the next step, there are 3D-printable adapter parts that are more complex and help change the distances and spacing more precisely than our adapter. (Ours was also 3d printed, although it's super simple) You can find a number of options at the [OpenFlexure Microscope project](https://www.thingiverse.com/thing:2301024).)

![image description](/i/27937.jpg "IMG_20181126_155008_886.jpg")

Step 8: GENTLY screw the lens into the adaptor. You may wish to separate the lens from the camera body if you are planning to travel with the microscope and think it may be jostled in transit.

![image description](/i/27938.jpg "IMG_20181126_155045_057.jpg")

Step 9:

Place your camera and lens on your camera stage so that the lens is centered under the top hole, as seen here, and then connect to power via the micro USB port on the side (the power and data ports are side by side, you don't need to use the data port unless you are flashing your own SD card--- the store kits come pre-flashed.  ![image description](/i/27939.jpg "RPIMICRO.jpg")

Step 10: Connecting!

Once you assemble and plug in your Pi with the provided SD card (or flash your own from [one of the recipes here](https://github.com/publiclab/pi-builder/labels/recipe)):

1. wait 3-5 minutes for it to start up
2. connect to the `00-PiCamera` wifi network with password `publiclab`
3. wait for the popup prompt, or use `Click to log in to this network`, or if nothing happens, go to [http://pi.local](http://pi.local/)(NOT `https`, sorry!) and you'll see the welcome page.

Any questions/problems/suggestions? Post below and let us know!