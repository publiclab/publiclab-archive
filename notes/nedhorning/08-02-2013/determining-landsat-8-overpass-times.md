---
title: "Determining Landsat 8 overpass times"\ntagnames: 'remote-sensing, landsat, satellite-imagery, activity:remote-sensing'
author: nedhorning
path: /notes/nedhorning/08-02-2013/determining-landsat-8-overpass-times.md
nid: 8960
uid: 133

---

![](https://publiclab.org/public/system/images/photos/000/001/010/original/landsat-8-satellite.jpeg)

# Determining Landsat 8 overpass times

by [nedhorning](../profile/nedhorning) | August 02, 2013 22:54

August 02, 2013 22:54 | Tags: [remote-sensing](../tag/remote-sensing), [landsat](../tag/landsat), [satellite-imagery](../tag/satellite-imagery), [activity:remote-sensing](../tag/activity:remote-sensing)

----

There has been some discussion about coordinating aerial mapping missions with the overpass of Landsat satellites so I wanted to post a a guide on how to determine when the Landsat 8 satellite is scheduled to pass over your area of interest. 

With the recent launch of the Landsat 8 satellite ([http://www.nasa.gov/mission_pages/landsat/main/index.html#.UfwQJN8wvWQ](http://www.nasa.gov/mission_pages/landsat/main/index.html#.UfwQJN8wvWQ)) a freely available source of moderate resolution (~30m) multispectral imagery is available. The orbit of Landsat 8 is such that it covers the save area on the earth every 16 days. 

To determine when Landsat 8 is going to pass over your area of interest you first need to determine the path and row of the image that covers your area. The more recent Landsat satellites use the World Reference System (WRS-2) to index the footprint of each Landsat scene. There are several tools you can use to find the WRS-2 path/row coordinates but one that I often use is the USGS Global Visualization Viewer ([http://glovis.usgs.gov/](http://glovis.usgs.gov/)). If you go to the GloVis website you can click on your area (or at least near it) in the map in the upper left corner of the page. You can also enter the latitude and longitude coordinates of your area if you know them. If you want to see State or country boundaries you can select Map Layers => Admin Boundaries, Countries or other overlays to help you navigate the satellite images that appear on the right. If you click on an image that covers your area a yellow box is drawn around it and it appears on top of the other images that overlap with it. When your image is selected you will see the path and row numbers in their respective boxes on the left side of the web page. You will need to path number before going to the next step. 


![GloVis.jpg](/system/images/photos/000/001/008/medium/GloVis.jpg)


The next step is to create a spreadsheet of overpass dates for your area. You can use GloVis to find the date of a recent Landsat 8 image but an easier way is to use the Landsat 8 Acquisition Calendar ([http://landsat.usgs.gov/tools_L8_acquisition_calendar.php](http://landsat.usgs.gov/tools_L8_acquisition_calendar.php)). When the  Landsat 8 Acquisition Calendar web page opens you can click on a date and you will see a list of paths (orbits) scheduled for that day. To find a day that corresponds to the path of your area you can simply click on different dates until you find the one you're looking for. Each day the path numbers increment by 7 so keeping that in mind you should be able to find an  overpass date for your path without too much trouble. For example, on August 1, 2013 Landsat 8 will acquire image along path 9 so the next day I know that it will acquire images over pass 16. If that's too confusing just click on the calendar until you find a date for your path.


![CalcSample.jpg](/system/images/photos/000/001/009/medium/CalcSample.jpg)



Once you have one date you can calculate future overpasses using Calc, Excel or any other spreadsheet. The way I do it is enter the date in one cell then the cell below it I add 16 to the date. For example in figure 2 below I entered “07/28/2013” in cell B3 and “=B3+16” in B4.

The satellite passes over the same area at roughly the same time each pass. To find an approximate time you can look at the graphic at: [http://www.ssec.wisc.edu/datacenter/LANDSAT-8/](http://www.ssec.wisc.edu/datacenter/LANDSAT-8/) a few days before the acquisition date and/or look at the archives at: [http://www.ssec.wisc.edu/datacenter/LANDSAT-8/archive/](http://www.ssec.wisc.edu/datacenter/LANDSAT-8/archive/). You'll have to interpolate between the times on the map but you should be able to get quite close. Keep in mind the times on the map are in UTC and need to be adjusted to your local time. 

If you actually manage to acquire images while the satellite is flying overhead you can then download the Landsat image that was acquired at the same time and do your analysis. You'll also be able to see exactly when the sensor acquired the image by looking at the metadata. The images can be downloaded using the GloVis site a few days after it is acquired.

If you acquire aerial images using near-infrared and/or visible cameras the same time (or nearly the same time) the satellite is acquiring images you can compare pixel values from your camera with those from the satellite and possibly use that information to calibrate your camera. Since the satellite image pixel size is 30m x 30m you would want to be acquiring images over a fairly level and large homogeneous area like a level grass field or large patch of bare soil. Even if you don't play with calibration it's still interesting to see the difference and similarity between the image your camera records and what the satellite records. 