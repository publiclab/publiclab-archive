---
title: "Sanm camera board for spectrometer kit"

tagnames: 'spectrometer, kits, webcam, desktop-spectrometry-kit, sanm'
author: mathew
path: /notes/mathew/3-18-2013/sanm-camera-board-spectrometer-kit.md
nid: 6400
uid: 4

---

![](https://publiclab.org/sites/default/files/Screen shot 2013-03-18 at 4.34.54 PM.png)

# Sanm camera board for spectrometer kit

by [mathew](../../../profile/mathew) | March 19, 2013 00:09

March 19, 2013 00:09 | Tags: [spectrometer](../tag/spectrometer), [kits](../tag/kits), [webcam](../tag/webcam), [desktop-spectrometry-kit](../tag/desktop-spectrometry-kit), [sanm](../tag/sanm)

----

Today a [small camera board](http://www.aliexpress.com/store/product/2-0-megapixel-USB2-0-Camera-Module-HM2050-cmos-board-camera-with-LED-indicator/404311_663037480.html) made by [Sanm](http://sanmtech.com/) arrived in the mail from Hong Kong.  It came without a USB cable, just a 5-pin header, so I used the pinout diagram on its product page and [wikipedia's USB pinout reference](http://en.wikipedia.org/wiki/Pinout#USB_pinout) to put together a cable.

Sanm pinout:
1 VDD
2 D-
3 D+
4 GND


Then I took out the filter by unscrewing the lens and prying it loose, closed it up, and plugged it in, and it worked.  It identified itself to my computer as a "BisonCam NB Pro" which appears to be the internal webcam of the [MSI GT780R](GT780R). 

The camera has a sensor half the size of the Syba webcams that currently come with the desktop spectrometry kit, and the board is much thinner 60mm long:
<a href="https://www.flickr.com/photos/14397636@N07/8570547818/" title="sanm camera board testing by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8241/8570547818_8ba8dfe235_z.jpg" width="640" height="480" alt="sanm camera board testing"></a>

The board has a bright white LED on it that needs to be covered.  I put some electrical tape over it:
<a href="https://www.flickr.com/photos/14397636@N07/8570543920/" title="sanm camera board testing by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8236/8570543920_bb3241ba81_z.jpg" width="640" height="480" alt="sanm camera board testing"></a>

I mounted a DVD fragment using two layers of double-sided foam tape:
<a href="https://www.flickr.com/photos/14397636@N07/8570545016/" title="sanm camera board testing by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8515/8570545016_b33d579b82_z.jpg" width="640" height="480" alt="sanm camera board testing"></a>

In order to get a flat surface for mounting, I used the broken off mounting point of a Syba cam, and stuck the Sanm board to the side of it with double sided tape.  In this photo I marked where the body of the Syba cam had been with a pen, and ticked off the lens location, for comparison.  I believe my lens placement for the Sanm camera is roughly the same place as the Syba cam:
<a href="https://www.flickr.com/photos/14397636@N07/8569446385/" title="sanm camera board testing by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8516/8569446385_f91a694b46_z.jpg" width="640" height="480" alt="sanm camera board testing"></a>

The Sanm cam barely fits.  It sticks beyond the lip of the conduit box, but the lid bulges out a little bit and closes fine:
<a href="https://www.flickr.com/photos/14397636@N07/8570541596/" title="sanm camera board testing by mathew.lippincott, on Flickr"><img src="https://farm9.staticflickr.com/8513/8570541596_88e348a462_z.jpg" width="480" height="640" alt="sanm camera board testing"></a>

the results are a little dim, despite the otherwise great quality of the camera. Any thoughts? 
<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/5243'></iframe>

