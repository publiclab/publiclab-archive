---
title: "Dual camera kit electronics"\ntagnames: 'near-infrared-camera'
author: warren
path: /wiki/dual-camera-kit-electronics.md
nid: 1796
uid: 1

---

# Dual camera kit electronics

by [mathew](../profile/mathew), [warren](../profile/warren)

April 26, 2012 13:38 | Tags: [near-infrared-camera](../tag/near-infrared-camera)

----

##Introduction##

To get the cameras to trigger simultaneously, we chose to trigger them via USB using a feature of the CHDK.

<a href="https://www.flickr.com/photos/jeffreywarren/7173631724/" title="Dual camera setup by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7073/7173631724_fe4623fbd0.jpg" width="500" height="375" alt="Dual camera setup"></a>

(above, completed electronics setup with dual 9v option)

<a href="https://www.flickr.com/photos/jeffreywarren/6935669297/" title="Dual camera 555 trigger by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7053/6935669297_7f27683c21.jpg" width="500" height="375" alt="Dual camera 555 trigger"></a>

##Assembling the 555 circuit##

* Pretty good instructions come in the 555 timer package, [Velleman model MK 111](http://cs-sales.net/veintikitras.html)
* Potentiometer confusion
* Stripping and attaching the USB cables

<a href="https://www.flickr.com/photos/jeffreywarren/6935669735/" title="Dual camera 555 trigger by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7065/6935669735_fdd64f4002.jpg" width="500" height="375" alt="Dual camera 555 trigger"></a>

----

##Connecting the batteries##

###Battery selection###

* Two different batteries are needed: 
  * a 12 volt battery to run the timer, and
  * a 5.5 volt (or more) for actually triggering the camera.

**12v battery issue**

For the 12 volt battery there are a few options, but **since the 12v battery which shipped with the kit seems to be inadequate**, we are now recommending two 9v batteries connected in series to make an 18v battery, shown below. This is a bit too much power but it seems to run fine. However, it's a good idea to tape over the exposed leads so they don't short circuit something.

There are other, lighter weight alternatives, [such as described by Chris Fastie](http://publiclaboratory.org/notes/cfastie/5-2-2012/no-output-signal-ir-kit-timer#comment-719).

<a href="https://publiclab.org/sites/default/files/imagecache/default/2012-05-08%2019.35.13.jpg"><img src="https://publiclab.org/sites/default/files/imagecache/default/2012-05-08%2019.35.13.jpg" /></a>

<div class="caption right">

<a href="https://www.flickr.com/photos/jeffreywarren/6983498676/" title="5 coin cell batteries + 1 screw fit in the holder by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7211/6983498676_eb3f02dec6_m.jpg" width="240" height="180" alt="5 coin cell batteries + 1 screw fit in the holder"></a>

<a href="https://www.flickr.com/photos/jeffreywarren/7129585053/" title="Place them inside one by one by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7064/7129585053_ff0a8f520f_m.jpg" width="240" height="180" alt="Place them inside one by one"></a>

</div>
To keep things simple, and because it's hard to find an efficient, cheap and lightweight way to hold 4 cell batteries, here we show how to fit 4 coin cell batteries into an N-type battery holder, which is provided in the dual infrared kit -- using a small wood screw. 

This is a bit of a "hack" but has worked very well - 4 1.5 volt batteries is ~6v and very little current is needed to actually trigger the camera.

<a href="https://www.flickr.com/photos/jeffreywarren/6983501162/" title="Four should fit snugly and securely by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8019/6983501162_ed148d2cfb.jpg" width="500" height="375" alt="Four should fit snugly and securely"></a>

----

##Splicing USB cables##

<div class="caption right">
<a href="https://www.flickr.com/photos/jeffreywarren/6983507076/" title="Snip the USB cable to at least 8 inches long by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7236/6983507076_de56036678_m.jpg" width="240" height="180" alt="Snip the USB cable to at least 8 inches long"></a>
</div>

Using a wire stripper, cut at least 8 inches of USB cable, preserving the smaller connector. Strip off the plastic wrapping to expose the smaller wires within and trim away the foil, fine metal strands, and the green and white wires. You'll want more extra wire than shown - maybe trimming to leave an inch of exposed red and black wires will give you some working room. Do this for 2 USB cables, identically.

Now, you can take both red wires and the red wire from one of your (N-type) battery holders, twirl them together, and solder them together firmly. Do the same with JUST the two black leads from the USB cables.

<div class="caption right">
<a href="https://www.flickr.com/photos/jeffreywarren/7129595197/" title="Separate out the wires from the wrapping by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7071/7129595197_011c38669d_m.jpg" width="240" height="180" alt="Separate out the wires from the wrapping"></a>

<a href="https://www.flickr.com/photos/jeffreywarren/6983512146/" title="Snip off all but red and black; strip off their wrapping by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7111/6983512146_c1444df2e9_m.jpg" width="240" height="180" alt="Snip off all but red and black; strip off their wrapping"></a>
</div>

###Assembly###

You should be left with two loose black leads: one a combined lead from the USB cables and one from the other end of your battery holder. Place them into the headers of the 555 timer as shown and screw them into place (the screws will hold the wires firmly in the headers. The below images show the old 12v battery (the one without the screw "hack") -- just exchange this for the two 9v batteries in series as described above.

<a href="https://www.flickr.com/photos/jeffreywarren/6987137528/" title="555 dual camera triggering wiring by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7192/6987137528_cd2bc7034a.jpg" width="500" height="375" alt="555 dual camera triggering wiring"></a>

Here are a couple images of the whole setup:

<a href="https://www.flickr.com/photos/jeffreywarren/6990386660/" title="555 timer diagram by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8020/6990386660_364788f9ae.jpg" width="500" height="382" alt="555 timer diagram"></a>

<a href="https://www.flickr.com/photos/jeffreywarren/7133162233/" title="555 dual camera triggering setup by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7243/7133162233_1b8dc3237a.jpg" width="500" height="375" alt="555 dual camera triggering setup"></a>