---
title: "Spectral Workbench usage"

tagnames: 'spectrometer, spectralworkbench, upload, red, parent:spectral-workbench, uvc, manual, save'
author: warren
path: /wiki/spectral-workbench-usage.md
nid: 598
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/014/052/original/Screenshot_2016-02-03_at_3.15.07_PM.png)

# Spectral Workbench usage

by [joyofsoy](../profile/joyofsoy), [warren](../profile/warren), [jiwon](../profile/jiwon), [MirianCelia](../profile/MirianCelia), [mathew](../profile/mathew), [100ideas](../profile/100ideas)

November 30, 2011 00:06 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench), [upload](../tag/upload), [red](../tag/red), [parent:spectral-workbench](../tag/parent:spectral-workbench), [uvc](../tag/uvc), [manual](../tag/manual), [save](../tag/save)

----

## Basics

SpectralWorkbench.org is a web-based software suite for collecting spectra, using your [Public Lab DIY spectrometer](/wiki/spectrometer). 

Once you have an assembled spectrometer connected to your computer or smartphone, create an account at https://spectralworkbench.org, log in and click `Capture`. You'll then be able to connect to your spectrometer, capture and save spectra, and analyze and share them. 

****

### Capturing

Watch [the video below](#Videos) for a quick overview on capturing spectra. 

### Calibration

You'll notice that many other spectra on the site have a scale showing "nm" or nanometer units on the horizontal axis. To get scaled data, you must calibrate your spectrometer. There are several kinds of calibration but here we're talking about wavelength calibration, which allows your spectrometer to display a wavelength value for any color of light it sees. Luckily, this is easy -- to learn how, see the [Spectral Workbench Calibration page](/wiki/spectral-workbench-calibration).

[spectral-workbench-calibration](../../tag/question:spectral-workbench-calibration)

### Tools

Spectral Workbench has a range of tools which may be used on any spectrum page to manipulate or analyze your data. [Read about them on the Tools page](/wiki/spectral-workbench-tools)

### Find similar

The "find similar spectra" tool has also been added to the [tools page](/spectral-workbench-tools)

****

### Sets

You can save multiple spectra in a permanent set in one of two ways:

**Technique 1:** Use the "Compare" interface on a spectrum page to compare one or more spectra with the one you have open already, then in the new "Comparisons" tab, click "Save as set." as shown:

[![Screenshot_2016-02-02_at_1.23.27_PM.png](//i.publiclab.org/system/images/photos/000/014/036/medium/Screenshot_2016-02-02_at_1.23.27_PM.png)](//i.publiclab.org/system/images/photos/000/014/036/original/Screenshot_2016-02-02_at_1.23.27_PM.png)

**Technique 2:** From an existing set, click "Add spectrum" at the bottom for a search interface for finding and adding spectra:

[![Screenshot_2016-02-03_at_3.09.19_PM.png](//i.publiclab.org/system/images/photos/000/014/051/medium/Screenshot_2016-02-03_at_3.09.19_PM.png)](//i.publiclab.org/system/images/photos/000/014/051/original/Screenshot_2016-02-03_at_3.09.19_PM.png)


****

### Sampling

How do you analyze samples of liquids, gases, or solids? Learn more about sampling here: http://publiclab.org/wiki/spectrometry-sampling

There are also a variety of activities being documented here if you're looking for spectrometry activities to attempt: http://publiclab.org/wiki/spectrometry-activities

****

### Analysis

**Once your spectrometer is calibrated, what do you do next?** This is the central question of our open spectrometry community. People are building and using these spectrometers for many reasons and there are different approaches being actively developed. For the time being, try browsing recent [contributed open spectrometry research](/notes/spectrometer), and look over [our growing list of applications and resources](/wiki/spectral-analysis)

[spectral-analysis](../../tag/question:spectral-analysis)

****

## Videos

Various tutorial videos on using Spectral Workbench.

<iframe width="640" height="480" src="https://www.youtube.com/embed/Y6RZ-egosn0?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

Watch this short video for a quick walkthrough of the whole process:

<iframe width="640" height="480" src="https://www.youtube.com/embed/vK4qjaNn3WI?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

This 10 minute video goes into greater depth on how calibration works and how to do it well:

<iframe width="640" height="480" src="https://www.youtube.com/embed/KpQrEldgR-I?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

Watch this video about using Operations via the tool panes:

<iframe width="640" height="480" src="https://www.youtube.com/embed/ZNZk_E3Nt3o?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

See [Spectral Workbench Help](/wiki/spectral-workbench-help) if you have trouble.

## Troubleshooting

Many things can go wrong (or right) when collecting spectra. Here are a few to look out for:

[spectral-workbench](../../tag/question:spectral-workbench)

****

### Overexposure

If there's too much light, the camera's sensors can't compensate and will be maxed out. On your graph, this looks like it's "hitting the ceiling" and you get a section with only 100% brightness. (Sometimes this happens in only one channel and you can't see until you enable RGB mode, as in the below image.)

<a href="https://www.flickr.com/photos/jeffreywarren/8283626633/" title="Overexposure by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8084/8283626633_c0d5e18313_m.jpg" width="240" height="189" alt="Overexposure"></a>

There are a few things you can do:

* dim the source light
* move it further away
* use a diffuser (milky plastic, a sheet of paper), although this may affect your spectrum
* reflect light off of a piece of white paper or a wall (or, for something with a very clean white spectrum, try Teflon)
* use more sample (if you have, say, a colored liquid)

By default, Spectral Workbench chooses the top row of pixels as a cross-section of your spectrum image. If there is variability in the brightness of your spectrum image, vertically, as shown below, you may be able to select a different cross-section which does not have clipping. Go to **More Tools** and choose "**Set sample row**", then click on the image at a point where the brightness is lower. Please read [this section about what the cross section represents](/wiki/spectral-workbench-calibration#Video+cross+section+vs+Image+cross+section), as it may vary based on how you are capturing.

However, if your spectrum is not perfectly vertical (for example if you've uploaded an image from a smartphone or still camera), selecting a different sample row may invalidate your calibration, since each color is now in a different location in the horizontal axis. In that case, you may need to take a new spectrum with lower light or shorter exposure. 

[![Screen_Shot_2014-10-23_at_6.03.19_PM.png](https://i.publiclab.org/system/images/photos/000/007/612/medium/Screen_Shot_2014-10-23_at_6.03.19_PM.png)](https://i.publiclab.org/system/images/photos/000/007/612/original/Screen_Shot_2014-10-23_at_6.03.19_PM.png)


### Light leakage

If your spectrometer is not sealed well, light may enter the imaging chamber and mess up your readings. The below image has some white light leaking in -- just seal up your spectrometer well with dark tape, especially where your camera attaches to it.

![Leakage](https://spectralworkbench.org/system/photos/1995/thumb/image.jpg)

## Advanced use

### Timing

Sometimes, when using the "waterfall" interface in live capture, you don't quite catch that moment when a flare of light is _just perfect_. You can use **Set cross section** under "Tools" on the spectrum page to choose the best cross-section of the image.

![Timing](https://spectralworkbench.org/system/photos/1991/thumb/capture.png)

### Webcam configuration

Most webcams have auto exposure and color "correction" so that in dim light, you can still see. This will unfortunately change the exposure between readings, so for quantitative work, it must be disabled. On Linux, you can use the "uvcdynctl" utility [as outlined here](https://github.com/jywarren/spectral-workbench/issues/2).

On a Mac, you can download this utility: http://www.phoboslab.org/log/2009/07/uvc-camera-control-for-mac-os-x

"Sluggo" from DM9.se has written a UVC library and control app for OS.X.  It works pretty well with a logitech c900 webcam, allowing GUI-based control of whitebalance, exposure, and focus(!).  He's also working on an ObjectiveC wrapper. http://www.dm9.se/?tag=uvc-ctrl

If you find a comparable utility for Windows, please post it here.

### Webcam selection

Some computers/browsers will initially choose the built-in webcam instead of the one in your spectrometer. On Chrome, some recent versions make it quite difficult to select the correct camera. Please first confirm that your computer can recognize the camera **at all** by using a desktop photo booth program and/or [trying out this demo site](http://shinydemos.com/color-picker/).

**Chrome ~v30+**

In more recent versions of Chrome, you can click the camera-shaped icon in the address bar:

[![Screen_Shot_2014-04-03_at_3.22.46_PM.png](https://i.publiclab.org/system/images/photos/000/003/480/medium/Screen_Shot_2014-04-03_at_3.22.46_PM.png)](https://i.publiclab.org/system/images/photos/000/003/480/original/Screen_Shot_2014-04-03_at_3.22.46_PM.png)

**Chrome v26+**

In slightly older versions of Chrome, you can click the camera-shaped icon in the address bar, then go into the menu settings to choose a camera:

![Screen_Shot_2013-06-02_at_10.07.43_AM.png](https://i.publiclab.org/system/images/photos/000/000/458/medium/Screen_Shot_2013-06-02_at_10.07.43_AM.png)

Click "Manage media settings" and close the dialog which pops up (the menu you want is behind it). Then scroll down to find the Media section, and select the webcam, as shown below. Close the Settings page. You may need to reload the Spectral Workbench page now.

![Screen_Shot_2013-06-02_at_10.08.16_AM.png](https://i.publiclab.org/system/images/photos/000/000/459/medium/Screen_Shot_2013-06-02_at_10.08.16_AM.png)

**Chrome v25**

If you are using Chrome 25+ and have a webcam in addition to your spectrometer, Google hid the "camera selection" menu under **Settings > Advanced Settings > Privacy > Content Settings > Media > Camera**. This is really unfortunate, but Google has improved that interface in more recent versions.

**Chrome 21-24** 

In older versions, you can just choose a camera in the dropdown to the upper-right corner, then click Allow to the upper left.

### Offline use

Spectral Workbench may be used offline once it is loaded in your browser. To do so, visit:

https://spectralworkbench.org/capture/offline

Once you've visited the above address, you will be able to access that page even without an internet connection, as long as you use the same browser. Read more about it here: [Spectral Workbench Offline](/wiki/spectral-workbench-offline)

### spectral-workbench.js

You can also use a pure JavaScript version of Spectral Workbench, ideal for use with a [Raspberry Pi spectrometer](/raspberry-pi-spectrometer). The code is here:

https://github.com/publiclab/spectral-workbench.js

### spectral-workbench.py

@cedarlodge is developing a Python library too. See it in action here: https://publiclab.org/n/15880

Code: https://github.com/publiclab/spectral-workbench.py

