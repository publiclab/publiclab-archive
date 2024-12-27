---
title: "Infrablue minutiae"

tagnames: 'ndvi, vermont, white-balance, infragram, infrablue, cmos, response:8869, ccd, response:8900, metadata, standardization, data-collection'
author: cfastie
path: /notes/cfastie/07-17-2013/infrablue-minutiae.md
nid: 8901
uid: 554

cids: 6331

---

![](https://publiclab.org/public/system/images/photos/000/000/826/original/BuchberryNDVI.jpg)

# Infrablue minutiae

by [cfastie](../../../profile/cfastie) | July 17, 2013 13:43

July 17, 2013 13:43 | Tags: [ndvi](../tag/ndvi), [vermont](../tag/vermont), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [cmos](../tag/cmos), [response:8869](../tag/response:8869), [ccd](../tag/ccd), [response:8900](../tag/response:8900), [metadata](../tag/metadata), [standardization](../tag/standardization), [data-collection](../tag/data-collection)

----

<em>Image above: Bunchberry (</em>Cornus canadensis<em>) flowers, Denali Highway, June 30, 2013. (Canon A810, color settings off, Rosco #74, white balance on blue paper in sun, Ned's Fiji plugin, both histograms stretched [2%], NDVIBlu2RedWB.lut)</em>

Lots of people are testing infrablue cameras now, and some really interesting results are being reported. There are many variables that determine how useful an infrablue photo is, and we are starting to understand a few of these variables. To understand more about what makes a useful infrablue photo, it’s important to know several things about how each image was created. If an NDVI image made from an infrablue photo is presented, information about its creation is also important (and be sure to also include the original infrablue photo from the camera). So it helps to have some way of knowing all the following things to get the most out of the experiments everyone is doing:

* Camera make and model 
* Camera color settings (“Vivid,” “Skin tone,” “Off,” etc.)
* Infrablue filter type (Rosco #2007, Apollo 4400, etc.)
* Was a custom white balance done?
* Custom white balance procedure:
	* Color of surface used
	* Ambient light impacting surface (sun, shade, indoors, etc)
* Was post-processing done? (color or brightness adjustments)
* Method of making NDVI image
	* [Infragram web app](http://infragram.org/) (available options will change, these should be reported)
        * [Infragram Sandbox](http://infragram.org/static/sandbox/) (available options will change, these should be reported)
	* [Ned’s Fiji plugin](https://github.com/nedhorning/PhotoMonitoringPlugin)
		* Was the histogram of the blue or red channel stretched? How much?
		* What color table was applied? (It’s best to also include a color scale with all NDVI images)
		* Fiji can produce both a color NDVI image and a grayscale floating point NDVI image which can then have a color table applied, but the two methods produce                        different outcomes. Please report if the grayscale image was used.
		* Was any adjustment to the NDVI image done in Fiji or elsewhere? (e.g., Fiji allows fine tuning the display of the color table.)
	* Other method of making NDVI (please describe and include the color table)

It seems like a lot to report, but all of these things influence how the final image looks. Without this information, learning from everyone's efforts or trouble shooting problems is not possible.

![IMG_46641500.jpg](https://i.publiclab.org/system/images/photos/000/000/827/large/IMG_46641500.jpg)
<p></p><em>Including an RGB photo of the scene in your NDVI images is too much to ask. But it can really help in troubleshooting.</em>