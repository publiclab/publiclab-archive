---
nid: 776
title: Temperature during Thatchmore Farms flight
path: public/static/notes/warren/2-10-2012/temperature-during-thatchmore-farms-flight.md
uid: 1
tagnames: 
---

# Temperature during Thatchmore Farms flight

Here it is in a Javascript Flot graph:

<iframe border="0" width="520px" height="320px"src="http://publiclaboratory.org/download/north-visible-temperature.html"></iframe>

Extracted from exif data (attached with sample image) as a result of [this conversation](https://groups.google.com/forum/?fromgroups#!topic/grassrootsmapping/S7Zj4VaiFEE) ([Earlier thread](https://groups.google.com/forum/?fromgroups#!topic/grassrootsmapping/q-Lhd9E9tWA))

I used the following command to extract the data, did some find/replace, and made a Flot graph (view source on the graph above)

<code>exiftool -csv -CreateDate -CameraTemperature north-visible/IMG_* > exiftool-export-2.txt</code>