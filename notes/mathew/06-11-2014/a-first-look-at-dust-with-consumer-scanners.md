---
title: "a first look at dust with consumer scanners "

tagnames: 'silica, pm, midwest, particle-sensing, particulate-monitoring, openair, stickypad, passive-pm'
author: mathew
path: /notes/mathew/06-11-2014/a-first-look-at-dust-with-consumer-scanners.md
nid: 10550
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/004/667/original/Screen_Shot_2014-06-10_at_6.18.38_PM.png)

# a first look at dust with consumer scanners 

by [mathew](../../../profile/mathew) | June 11, 2014 02:58

June 11, 2014 02:58 | Tags: [silica](../tag/silica), [pm](../tag/pm), [midwest](../tag/midwest), [particle-sensing](../tag/particle-sensing), [particulate-monitoring](../tag/particulate-monitoring), [openair](../tag/openair), [stickypad](../tag/stickypad), [passive-pm](../tag/passive-pm)

----

###What I want to do
See if I can't see [PM10 or even PM2.5](/wiki/particle-sensing) particles on a consumer scanner.  I purchased a Canon canoscan 9000F MK II, which allegedly does 9600dpi, or interpolated 192000 dpi.  

###My attempt and results
####Sticky pad prep
Using packing tape (probably polypropylene with acrylic adhesive) I made a quick [sticky pad](/notes/mathew/06-05-2014/the-development-of-stickypad-monitoring) and left it out for 30 hours near my window. following the [sticky pad method]((/notes/mathew/06-05-2014/the-development-of-stickypad-monitoring)) I covered it in plastic wrap labeled PVC and BPA free, which means its [probably LDPE](https://en.wikipedia.org/wiki/Plastic_wrap).  I got a lot of bubbles and wrinkles trapped, which was bad.  Better technique would help, but this seems to be a bit of an issue for getting good sticky pad readings.   I might go to a shellac instead. 

[![IMG_20140610_163246.jpg](https://i.publiclab.org/system/images/photos/000/004/661/medium/IMG_20140610_163246.jpg)](https://i.publiclab.org/system/images/photos/000/004/661/original/IMG_20140610_163246.jpg)



####Scanning
Then I went to scan the sticky pad, first in visible light to determine particle size, and then hopefully with [polarized light later on a modified scanner](/notes/mathew/05-21-2014/imagining-testing-polarized-light-microscopy-for-silica-dust-speciation). The scanning experience was underwhelming.

[![Screen_Shot_2014-06-10_at_5.13.39_PM.png](https://i.publiclab.org/system/images/photos/000/004/664/medium/Screen_Shot_2014-06-10_at_5.13.39_PM.png)](https://i.publiclab.org/system/images/photos/000/004/664/original/Screen_Shot_2014-06-10_at_5.13.39_PM.png)

despite its advertised 9600dpi resolution, the scanner can't even fake it-- it crashes the software to select more than 4800dpi.  After running around support websites, installing different Canon software packages, and a good measure of cursing those who build the [TWAIN specification](https://en.wikipedia.org/wiki/TWAIN) into software on consumer scanners (commercial scanners don't need drivers), I discovered a link suggesting my work might all be futile anyways.  The effective resolution, [according to these testers,](http://www.filmscanner.info/en/CanonCanoScan9000F.html) is about 1700dpi, not the 9600 advertised.

I gave up and just played with the 4800dpi image.  

####Image Processing
the raw image made it hard to zoom in and look at dust: 

[![Screen_Shot_2014-06-10_at_6.06.40_PM.png](https://i.publiclab.org/system/images/photos/000/004/669/medium/Screen_Shot_2014-06-10_at_6.06.40_PM.png)](https://i.publiclab.org/system/images/photos/000/004/669/original/Screen_Shot_2014-06-10_at_6.06.40_PM.png)

But pull the contrast severely, and the particles start to pop right out:

[![Screen_Shot_2014-06-10_at_6.14.56_PM.png](https://i.publiclab.org/system/images/photos/000/004/670/medium/Screen_Shot_2014-06-10_at_6.14.56_PM.png)](https://i.publiclab.org/system/images/photos/000/004/670/original/Screen_Shot_2014-06-10_at_6.14.56_PM.png)

Still, its hard to actually make out very small particles.  On a 4800dpi scan, each pixel is about 5.3µm across.  In the image below one can barely make out two dots of particles that from their pixel dimensions are 15-30µm across.  If the effective resolution is 1700dpi, then the actual image pixels don't get smaller than 15µm, or 3x3 4800dpi pixels. This test seems to confirm the results from [Patrick Wagner at Scan Dig](http://www.filmscanner.info/en/CanonCanoScan9000F.html), that I mentioned earlier, and the effective resolution of 1700dpi.  Bummer.

[![Screen_Shot_2014-06-10_at_6.21.27_PM.png](https://i.publiclab.org/system/images/photos/000/004/671/medium/Screen_Shot_2014-06-10_at_6.21.27_PM.png)](https://i.publiclab.org/system/images/photos/000/004/671/original/Screen_Shot_2014-06-10_at_6.21.27_PM.png)


###Questions and next steps
So much for getting pm 2.5 measurements on a stock consumer scanner. That is pretty disappointing. I learned more about scanner resolution generally, and have some leads on [slide scanners that have an effective resolution of 3300dpi](http://www.filmscanner.info/en/QuatoIntelliScan5000.html) that ought to have a chance of picking up PM10, but it looks like PM2.5 is out of the range of any scanner currently on the consumer/entry level professional market.

At this point, my choice is to switch optical instruments, lower my standards to PM 10, or [build my own instrument](/notes/mathew/05-21-2014/imagining-testing-polarized-light-microscopy-for-silica-dust-speciation).  I'm still pretty keen on the latter option.  Having built several projectors before I'm confident in the ability of hacked-together optics to get good results, and there are a whole century of well made lenses on Ebay for cheap because they don't fit new stuff. 

Back to the drawing board...