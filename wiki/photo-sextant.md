---
title: "Photo Sextant"

tagnames: 'grassrootsmappingwiki'
author: warren
path: /wiki/photo-sextant.md
nid: 1733
uid: 1
cids: 
---

# Photo Sextant

by [warren](/profile/warren)

April 21, 2012 14:49 | Tags: [grassrootsmappingwiki](/tag/grassrootsmappingwiki)

----

<div markdown='1' style='width:470px;float:right;padding-left:15px;'>![photosextant](http://farm3.static.flickr.com/2488/4169302344_639f35876a_o.png)
</div>

This page discusses the proposed use of cell phone cameras and Java (J2ME) to automate geolocation based on the height of the sun above the horizon plus the exact time, as in a sextant.

### Code ###

Java code exists for generating data needed to calculate position from sextant readings without a nautical almanac:

[http://celestjava.sourceforge.net/](http://celestjava.sourceforge.net/)

We're working to get this running in J2ME on a mobile device such as the Nokia 6130 (which I bought in Vietnam).

See CalculatingPosition for a working page on the math behind deriving position from sextant readings.

### Precision ###

Wikipedia references some numbers on expected accuracy which are discouraging, but perhaps useful not for authoring maps but for reporting geographic data or calling for help via SMS.

`"Since 1 minute of error is about a nautical mile, the best possible accuracy of celestial navigation is about 0.1 nautical miles (200 m). At sea, results within several nautical miles, well within visual range, are acceptable. A highly-skilled and experienced navigator can determine position to an accuracy of about 0.25-nautical-mile (460 m).[1]"

[Wikipedia: Sextant](http://en.wikipedia.org/wiki/Sextant)

It's been suggested that the resolution of a cell phone camera (say, 1-3 megapixels) cannot provide the resolution needed for a good reading. 3 megapixels equates to approximately 2048×1536 pixel resolution, and 2 is about 1600x1200. Assuming that the sun is in the image, we could expect to use 1000-2000 pixels to measure an angle. The iPhone has ~53°x~37.5°, and 2 megapixels of resolution (Apple downreses to 800x600 in their camera app). Using the longer dimension that would offer an absolute best of 1600px for about 53°, or a maximum of 30.2 px per degree. That's about 2 minutes per pixel... and while we could do some subpixel stuff, a rough estimate would be of about 400m precision as absolute maximum. That's not bad.

### Possible improvements to precision ###

To improve this, Chris Csikszentmihályi and I discussed using a toy telescope lens to magnify a smaller range... if we got only 26° in 2 megapixels we might be able to match a sextant or better. We'd then have to recalculate the field of view of the camera. Or if we used a 5 megapixel camera we'd get 3000px for ~53°, which would get us close to 1 minute precision.

### Using radial gradients to identify sun position ###

For times when the sun is not near the horizon or there is even cloud cover, we can use the radial gradient of brightness to find the sun's position, as shown in the illustration below:

![Illustration of radial gradient technique](http://farm3.static.flickr.com/2492/4123180708_82fe3e5003_o.png)