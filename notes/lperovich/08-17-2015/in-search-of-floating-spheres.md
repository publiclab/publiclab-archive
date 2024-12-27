---
title: "in search of floating spheres..."

tagnames: 'thermal-fishing, thermal-fishing-bob, riffle'
author: lperovich
path: /notes/lperovich/08-17-2015/in-search-of-floating-spheres.md
nid: 12153
uid: 443410

cids: 12398,12399,12408,12409,12413,12414,12415,12953,12958,12959

---

![](https://publiclab.org/public/system/images/photos/000/011/166/original/sphere.jpg)

# in search of floating spheres...

by [lperovich](../../../profile/lperovich) | August 17, 2015 23:18

August 17, 2015 23:18 | Tags: [thermal-fishing](../tag/thermal-fishing), [thermal-fishing-bob](../tag/thermal-fishing-bob), [riffle](../tag/riffle)

----

I'm searching for the best housing for a re-imagination of the thermal fishing bob.

I'd like to replace the Country Time Lemonade container with something sleeker and more functional.  This may involve fabrication in the shop or collaborating with a manufacturer to get custom parts made remotely.

Basic parameters of the new object:

* spherical 
* floats
* white opaque
* ~5" diameter
* can be opened to insert electronics
* can be water sealed (additional step may be necessary)

We (thanks [OBMG](http://obm.media.mit.edu/)!) brainstormed a number of existing objects that fit at least some of these parameters:

* ping pong balls
* beach ball
* easter eggs
* cupcake containers
* Russian nesting dolls
* wiffle balls
* PVC caps
* balloons
* "shade balls" (see [here](http://news.nationalgeographic.com/2015/08/150812-shade-balls-los-angeles-California-drought-water-environment/) and [here](http://time.com/3998554/shade-balls-graphic/))

This suggested the following processes, some of which can be done on site at MIT:

* Vacuum forming ([youtube video](https://youtu.be/hukafUxglmE))
* Blow molding ([youtube video](https://youtu.be/NE4c1gwzPb4))
* Hypnotic video about making ping pong balls [here](https://youtu.be/ujmAutYTezs)

I'm also contacting manufacturers to see if this can be custom made offsite:

* [Engineering Laboratories](http://plasticballs.com/contact.htm)
* [XavierC](http://xavierc.net/Contact.php) [interview](http://www.bloomberg.com/news/articles/2015-08-11/who-s-behind-the-96-million-shade-balls-they-just-rolled-into-l-a-s-reservoirs-)
* [Artisan Screen Process](http://www.artisanscreen.com/mp-index.html)
* [Orange Products](http://www.orangeproducts.com/)

An Alibaba search is next on the list...I've had good luck with manufactures found there in the past!

--------------------------------------------------------------------------------------------------------------------

Thanks everyone for the great suggestions in the comments and elsewhere!  I put together a summary of sources I've found since the original post:

**Current winner: acrylic ornaments**
[size 1](http://www.amazon.com/Clear-Plastic-Acrylic-Fillable-Ornament/dp/B002WZIO4U/)
[size 2](http://www.amazon.com/Pack-80mm-Borealis-Acrylic-Fillable-Ornaments/dp/B004C63VVI)
[size 3](http://factorydirectcraft.com/catalog/products/1302_1039-22510-case_of_72_60mm_acrylic_fillable_keepsake_ball_ornaments.html)

**Other options**
[fishing bobbers](http://www.amazon.com/Invincible%C2%AE-10-Pack-Assorted-Size-Bobbers/dp/B0000BVF8T/) (@warren)

towfish (@mathew)

beer ball/party ball (@DavidMack @liz)
(hard to find!  some forums suggested these might not be sold now) 

LED balls
[version 1](http://www.homedepot.com/p/Banana-Boat-LED-Glitter-Ball-BBGGLOBE100/205870810) [version 2](http://www.homedepot.com/p/Banana-Boat-LED-Small-Ball-BBSMBALL100/205870812?MERCH=REC-_-PIPHorizontal1_rr-_-205870810-_-205870812-_-N) [version 3](http://www.homedepot.com/p/Banana-Boat-LED-Small-Ball-BBSMBALL100/205870812?MERCH=REC-_-PIPHorizontal1_rr-_-205870810-_-205870812-_-N)

[soft dome doorstops](http://www.walmart.com/ip/Bulldog-Hardware-Dome-Soft-Doorstops-2pk-White/17474309)

[custom ping pong balls](http://www.pingpongballs.net/products/Biggest-Size-50mm-%252d-Custom-White-Ping-Pong-Balls-%252d-2-Color-Imprint.html)

ice cube trays to use in molding & casting parts [version 1](http://www.amazon.com/gp/product/B00IK592XS/) [version 2](http://www.amazon.com/Home-Complete-Ice-Ball-Maker-Mold/dp/B00H8RVMC8/)

**Brainstorming points of interest:**

* rubber wine glasses
* rubber balls with a slit hole in them 

I've also put together a list of Alibaba manufacturers to contact.

**Re: electronics** (@warren)

Don (@donblair) and I have been working together base regularly on this--our long term plan is to use this as one of the first breakout boards for the Riffle.  For this round of prototyping it's been easier to get things going on Arduinos (Riffles are still a time intensive board to put together).  We did recently transfer to the 3.3V Arduino Pro Mini since it's a closer cousin to the Riffle than the Uno--so hopefully it'll be a seamless transfer to the Riffle when it's good to go.  Data logging and GPS are other things we're adding as it'd be nice to complement the real time display with logged data that we can dig into a bit.

Also, for this particular implementation, the larger size is an intentional design choice as it is better for visibility from a distance, especially given the number we're initially planning to put in a chain (~5).  It is interesting to thing about another version that's smaller--more of a point source net of data--as a potential next step or alternative direction.  
