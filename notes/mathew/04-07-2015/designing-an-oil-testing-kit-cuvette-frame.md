---
title: "Designing an Oil Testing Kit Cuvette Frame"\ntagnames: 'laser, fluorescence, desktop-spectrometer, oil-testing-kit, 405nm, otk'
author: mathew
path: /notes/mathew/04-07-2015/designing-an-oil-testing-kit-cuvette-frame.md
nid: 11750
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/009/566/original/IMG_20150407_150745.jpg)

# Designing an Oil Testing Kit Cuvette Frame

by [mathew](../profile/mathew) | April 07, 2015 22:53

April 07, 2015 22:53 | Tags: [laser](../tag/laser), [fluorescence](../tag/fluorescence), [desktop-spectrometer](../tag/desktop-spectrometer), [oil-testing-kit](../tag/oil-testing-kit), [405nm](../tag/405nm), [otk](../tag/otk)

----

I’ve been working to design an [oil testing](/wiki/oil-testing-kit) add-on the the [spectrometer 3.0](/wiki/desktop-spectrometry-kit-3-0) incorporating the feedback from @stevie, @warren, @stoft, and others regarding the current oil testing kit and spectrometer.

The design is requirements are to unite a 405nm laser pointer, a container for oil, and the spectrometer such that easily repeatable measurements can be taken.  

[![fluorescence-spec-diagram.png](https://i.publiclab.org/system/images/photos/000/009/565/medium/fluorescence-spec-diagram.png)](https://i.publiclab.org/system/images/photos/000/009/565/original/fluorescence-spec-diagram.png)

**The features the kit needs to have are:**

* a method or container for keeping the laser’s light path through the sample consistent
* a means of lining up the laser with the collimation slit and sample so it stays in place.
* a means of controlling the brightness of very bright fluorescences.

I also wanted a fourth feature— the add-on should be made out of pieces of paper that can be printed and cut at home.

###Design process
I worked almost entirely on paper, producing flat vector illustrations in adobe illustrator.  I cut about half the prototypes out by hand, and the other half on a laser cutter.

Some prototypes & sketches:

[![IMG_20150326_143507_crop.jpg](https://i.publiclab.org/system/images/photos/000/009/573/medium/IMG_20150326_143507_crop.jpg)](https://i.publiclab.org/system/images/photos/000/009/573/original/IMG_20150326_143507_crop.jpg)

I started with some [1cm square graph paper](https://i.publiclab.org/system/images/photos/000/007/733/original/open_grid_8.5x11.pdf) from the [Open Structures project.](http://openstructures.net/pages/9)

[![IMG_20150226_183937.jpg](https://i.publiclab.org/system/images/photos/000/009/574/medium/IMG_20150226_183937.jpg)](https://i.publiclab.org/system/images/photos/000/009/574/original/IMG_20150226_183937.jpg)

I then turned those into vector files, printed them out, and cut with an craft knife onto thicker paper underneath, and made scores for folding with a butter knife.

[![IMG_20150305_144852.jpg](https://i.publiclab.org/system/images/photos/000/009/575/medium/IMG_20150305_144852.jpg)](https://i.publiclab.org/system/images/photos/000/009/575/original/IMG_20150305_144852.jpg)

[![IMG_20150302_120109.jpg](https://i.publiclab.org/system/images/photos/000/009/576/medium/IMG_20150302_120109.jpg)](https://i.publiclab.org/system/images/photos/000/009/576/original/IMG_20150302_120109.jpg)

###Oil Containers
We haven’t found a cuvette or small container which is at once:

* affordable
* leak resistant
* has a consistent light path
* isn’t melted by volatile hydrocarbons

Small cast glass containers for nail polish and the like don’t have flat sides and so the light path changes, and glass cuvettes are prohibitively expensive. Cuvettes are designed to have consistent light paths for optical measurements.  This beautiful [round-lidded cuvette is almost perfect](http://www.shop.spectrecology.com/Disposable-ultra-micro-UV-cuvette-759220-759220.htm).  But its made out of polystyrene, and diesel, crude, and other products melt the cuvettes.  Notice the droplets dripping through the middle:

[![IMG_20150407_152019.jpg](https://i.publiclab.org/system/images/photos/000/009/567/medium/IMG_20150407_152019.jpg)](https://i.publiclab.org/system/images/photos/000/009/567/original/IMG_20150407_152019.jpg)

Most cuvettes are square, and have square lids. We have found that all the square lids leak.  They’re terrible.  But… they don’t melt and the light path is consistent. so I designed around an acrylic cuvette that costs $0.25 each. This is the biggest problem with the design.  If you can find a round-lidded acrylic cuvette please tell us.
Leaky cuvettes leaking:

[![IMG_20150407_152042.jpg](https://i.publiclab.org/system/images/photos/000/009/568/medium/IMG_20150407_152042.jpg)](https://i.publiclab.org/system/images/photos/000/009/568/original/IMG_20150407_152042.jpg)

###Lining up the laser
Building a frame out of paper that holds the laser rigidly was a bit challenging, as we’re using a laser pointer for consistency of packaging and its low cost.  This means the button is on a tube, and usually requires some force to press.  The frame needs to elevate the laser to the collimation slit of the spectrometer and not deform when the button is pressed.  I tried two different strategies based on triangles, and settled on an interlocking triangular frame in a box that is very rigid. 

Five significant prototypes:
[![IMG_20150406_170108.gif](https://i.publiclab.org/system/images/photos/000/009/569/medium/IMG_20150406_170108.gif)](https://i.publiclab.org/system/images/photos/000/009/569/original/IMG_20150406_170108.gif)

###Brightness control
previously, we’d [diluted the samples to control for brightness](/notes/mathew/09-19-2014/grading-oils-with-uv-fluorescence) of fluorescence, which isn’t the best strategy, as dilution is time consuming and error prone.  I switched, at @stoft’s suggestion, to a gradient slider in front of the laser.  It can be printed on an acetate transparency sheet.

[![IMG_20150407_150502.jpg](https://i.publiclab.org/system/images/photos/000/009/570/medium/IMG_20150407_150502.jpg)](https://i.publiclab.org/system/images/photos/000/009/570/original/IMG_20150407_150502.jpg)

###Connecting to the spectrometer
I went through a couple of strategies to connect directly to the spectrometer but have removed them from this version.  This makes for some instability.  Flaps that slide into the front side of the spectrometer (rectangular ones) were the most effective, but pulling them in and out was hard and could damage the geometry.  I'm not settled on leaving the two parts disconnected, but the frame does work in its current state.

[![IMG_20150406_170303.jpg](https://i.publiclab.org/system/images/photos/000/009/572/medium/IMG_20150406_170303.jpg)](https://i.publiclab.org/system/images/photos/000/009/572/original/IMG_20150406_170303.jpg)

###Help out!
If you're interested in helping us with testing, we can send beta kits to you in exchange for documentation.

[![IMG_20150320_183152.jpg](https://i.publiclab.org/system/images/photos/000/009/577/medium/IMG_20150320_183152.jpg)](https://i.publiclab.org/system/images/photos/000/009/577/original/IMG_20150320_183152.jpg)

###Old versions & files
download all the older versions here.  new versions in my note on construction.
<a href="https://i.publiclab.org/system/images/photos/000/009/586/original/allcombinedversions.zip"><i class="icon icon-file"></i> allcombinedversions.zip</a>

[![all_combined.png](https://i.publiclab.org/system/images/photos/000/009/579/medium/all_combined.png)](https://i.publiclab.org/system/images/photos/000/009/579/original/all_combined.png)

[![all_combined3.png](https://i.publiclab.org/system/images/photos/000/009/580/medium/all_combined3.png)](https://i.publiclab.org/system/images/photos/000/009/580/original/all_combined3.png)

[![all_together5.png](https://i.publiclab.org/system/images/photos/000/009/581/medium/all_together5.png)](https://i.publiclab.org/system/images/photos/000/009/581/original/all_together5.png)

[![all_combined2.png](https://i.publiclab.org/system/images/photos/000/009/582/medium/all_combined2.png)](https://i.publiclab.org/system/images/photos/000/009/582/original/all_combined2.png)

[![all_combined4.jpg](https://i.publiclab.org/system/images/photos/000/009/583/medium/all_combined4.jpg)](https://i.publiclab.org/system/images/photos/000/009/583/original/all_combined4.jpg)

[![all-together7-laser.jpg](https://i.publiclab.org/system/images/photos/000/009/584/medium/all-together7-laser.jpg)](https://i.publiclab.org/system/images/photos/000/009/584/original/all-together7-laser.jpg)

[![all-together8-laser.jpg](https://i.publiclab.org/system/images/photos/000/009/585/medium/all-together8-laser.jpg)](https://i.publiclab.org/system/images/photos/000/009/585/original/all-together8-laser.jpg)
