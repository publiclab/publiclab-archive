---
nid: 101
title: Balloon Mapping
path: public/static/wiki/balloon-mapping-2.md
uid: 1
tagnames: 
---

# Balloon Mapping

<img src='http://farm3.static.flickr.com/2629/4098484223_0f3a511098.jpg' />

Satellite images can be a great place to start when making a map. But Google’s images are often several years old, and may not be high resolution enough. And isn’t it creepy that they’re taking pictures of you?

With a helium filled balloon you can take your own aerial pictures, stitch them together, and view them a web map like Cartagen or Google Maps. We’re working on a way to trace them and create a PDF to print out.

When you fly your balloon, check for any local regulations - federal regulation say less than 500 feet high is OK, and if your balloon is smaller than 6-feet in diameter and less than 115 cubic feet in volume, you're even excepted from that: [Federal moored balloon regulations](http://www.chem.hawaii.edu/uham/part101.html). Try to stay away from tall buildings because you could scrape against them, but also because the wind currents near them cause a lot of turbulence and your photos come out blurry.

## Materials ##

(See [Balloon Mapping Materials](/wiki/balloon-mapping-materials) for a full list of required materials)

**Balloons**

Weather balloons can be kind of pricey, starting at ~$12 US dollars in packs of 2 (for 24 dollars total plus shipping) for a three foot wide and 20 dollars plus shipping for an eight-foot balloon. You can compare prices here:

**Helium**

Helium can be bought from Airgas if they’re nearby, or you can ask your local party store where they get theirs. A small tank of 80 cubic feet or so should be enough for a couple flights, at about ~$30. We’re also experimenting with [hot air balloons](http://wiki.grassrootsmapping.org/show/HotAirBalloons) and [hydrogen balloons](http://wiki.grassrootsmapping.org/show/HydrogenBalloons) but don’t advise that you try this yet. 

(Some great documentation on building this rig and using even hot air balloons can be found here: [http://www.paulillsley.com/airphoto/systems/balloons-kites.html](http://www.paulillsley.com/airphoto/systems/balloons-kites.html))

**String**

You’ll need about 500 feet of string minimum, and 1000-1500 feet is better. Either nylon (#18) from the hardware store will do; I've used a $3 roll of woven nylon string. I worry about the string getting caught on a building  so I think the woven stuff is good - it can fray without breaking.

[Video](http://vimeo.com/12292673) of winding 4,500' of string onto a reel with a bicycle.

**Camera mounting**

Your camera will bob and wave around in any amount of wind. I try to fly balloons only in minimal wind (less than 5mph) but if you do have bobbing and spinning you can stabilize things by using a Picavet suspension, which is made from a small wooden X (about a 30 cm across) with rings at each corner, and a kind of complicated string setup. I taped the camera to the center of the X and things improved a lot. See instructions for a Picavet here: [Picavet suspension](http://arch.ced.berkeley.edu/kap/equip/picavet.html)

A simpler rig can be made from a soda bottle: [Soda Bottle Rig](http://wiki.grassrootsmapping.org/show/SodaBottleRig)

<div markdown='0' style='float:right; width:280px;padding:14px;'><img src="http://arch.ced.berkeley.edu/kap/images/picadiag.gif" /></div>

**Camera**

You’ll need a camera which can take pictures automatically every 10 seconds. Most Canon cameras can be used with the [CHDK](http://chdk.wikia.com/wiki/CHDK), a firmware hack which lets you run scripts off your SD card. Put the following script in the scripts folder on the card once you’ve installed the CHDK. (We need a Chdk Troubleshooting? page… coming soon)

[Download script](http://grassrootsmapping.org/chdk-timer.txt) (right-click to save, or option-click on a Mac)

See also:

It’s also worth it to set your shutter speed really high - like 1/500 or 1/1000. My Canon didn’t have shutter speed settings so I turned up the ISO as high as it’d go. My images are grainy but fairly sharp. For the additional information concerning the settings of the camera you have, check the page for the specific model on the CHDK wiki.

If you have trouble with your camera turning off mid-flight, see the ChdkIssues page for suggestions... basically use new-ish batteries and fully charge them before flying.

**Camera alternatives**

For more camera options, see CameraOptions - it's possible to use any Android phone which is easier though more expensive. Flip video cameras also work.

## Combining the images into a map ##

<div markdown='0' style="float:right; width:300px;padding:14px;"><a href="https://www.flickr.com/photos/jeffreywarren/4518554393/" title="Beaver Country Day School map by jeferonix, on Flickr"><img src="http://farm5.static.flickr.com/4024/4518554393_5616fd50e5_m.jpg" width="240" height="164" alt="Beaver Country Day School map" /></a>

[Cartagen Knitter](http://cartagen.org/maps) can be used to 'knit' the images you've captured into a completed, georeferenced map.</div>

Once you’ve captured a bunch of photographs you’ll need to stitch them together. Try [Cartagen Knitter](http://cartagen.org/maps) (more information at the CartagenKnitter page)

Keep in mind that you’ll want a lot of images that overlap quite a bit, and that are generally pointing downward. The more sideways your images, the harder it’ll be to warp them and stitch them together.

## Additional References ##

* [Blog post about Balloon Aerial Photography](http://blog.makezine.com/archive/2006/11/balloon_aerial_photograph.html) 
* [Info on Balloon Aerial Photography](http://gis.mapsofworld.com/aerial-photography/balloon-aerial-photography.html)
