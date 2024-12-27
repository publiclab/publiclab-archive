---
title: "Cape Cod Bay Watch Landsat Tutorial notes 7/14/14"

tagnames: 'massachusetts, cape-cod-bay-watch, landsat, tutorial, thermal, northeast, thermal-plume, landsat-7, qgis'
author: karenv
path: /wiki/cape-cod-bay-watch-landsat-tutorial-notes-7-14-14.md
nid: 10980
uid: 60501
cids: 
---

# Cape Cod Bay Watch Landsat Tutorial notes 7/14/14

by [karenv](/profile/karenv)

July 26, 2014 15:11 | Tags: [massachusetts](/tag/massachusetts), [cape-cod-bay-watch](/tag/cape-cod-bay-watch), [landsat](/tag/landsat), [tutorial](/tag/tutorial), [thermal](/tag/thermal), [northeast](/tag/northeast), [thermal-plume](/tag/thermal-plume), [landsat-7](/tag/landsat-7), [qgis](/tag/qgis)

----

These are the notes from a tutorial that Ned Horning gave to the members of Cape Cod Bay Watch and the Jones River Watershed Association, (Pine duBois, Alex Mansfield, Karen Vale, and Adam Augello) and Don Blaire from Public Lab, on how to download and edit GeoTIFF Landsat images on QGIS. Cape Cod Bay Watch and the JRWA want to use this program for thermal mapping of Cape Cod Bay, specifically to measure the thermal plume generated from the Pilgrim Nuclear Power Station in Plymouth. 

Website: glovis.usgs.gov

-must have Java 7 or older to run program
-won’t work on Google Chrome if you have a Mac

Steps below use Pilgrim Nuclear Power Station in Plymouth, MA as an example:

•	Choose the image of Cape Cod Bay by typing in 11/31 next to “path/row”

•	Click on “Resolution” then “240 m” 

•	Can click on “Collection” then “Landsat Archives” then “L7 SLC off (2003>)” (this has images taken every eight days. However, there are data gaps within this information so that 22% of the dates are missing)

•	or Can click on “Collection” then “Landsat Archives” then “Landsat 8 OLI” (this only has images every sixteen days. However, the dates offset Landsat 7’s so that you can supplement the days of both to get 4 data points in a twenty-four day period [not taking into account missing data points]) 

•	Can change the date underneath the “Scene Information” box. Click “next scene” to see next available image in the series. Only want to download images without cloud cover.

•	In the “Scene Information” box you can see the date, the % of the image that is covered by clouds (“CC”), and the Scene ID

•	If you scroll your cursor over the image, below the image it will tell you the corresponding latitude and longitude

•	To download a particular image, click the “Add” button on the bottom left hand side of the screen. The scene ID will show up in a box above it. You can go through more images and add them to this box, until you are ready to “Send to Cart.” This is where you will have to sign in. Once you do so, click the green button on the far right of the screen, next to the red X. Then, for Landsat 8, click on GeoTIFF Data Product.  

• To open images, you will need GIS, QGIS (this was the recommended program), uDig (you can download this from http://udig.refractions.net/) or gvsig (download from  http://www.gvsig.org/web) 

•	If using QGIS:

➢	Click “Home” 
➢	“Downloads”
➢	then find the B10 or B11 file
➢	double-click on the B10 or B11 file to get an image on the screen
➢	once you see the image, the file name will be listed near the bottom left-hand side of the screen 
➢	double-click on the name of the file, which will bring you to “Properties”
➢	Once there:
o	Under “Load min/max values,” set to “mean +/– standard 
deviation,” and set that to “1”
o	Under “Extent,” set to current
o	Under “Accuracy,” set to “Actual (slower)”
o	Then click “Load”

•	Zoom to where you want until the image starts getting blurry, then apply the same “properties” steps for that zoomed in view

•	TXT file= metadata file= all of the data about that image 

•	1 pixel= 30 m squared

•	darker images are colder

•	lighter images are warmer

•	make sure you don’t confound cloud cover and water temperature 

•	tools to enhance the image:

•	Linear calibration:  mx+b= top of the atmosphere radients units (similar to Watts)
 where m= mult. band value (gain), x= band value and b= y intercept= add band value times 0.1 (offset)

in other words: TOA Radiance = DN * RADIANCE_MULT_BAND_10 + RADIANCE_ADD_BAND_10

DN is the pixel values in the image. 

•	TOA (top of atmosphere radients) = power= intensity of radiation that is hitting the center of the point- you can convert this to "brightness temperature" (water temp. and surface temp. not adjusted to atmosphere) 

•	can assign brightness temperature to pixels. To create a formula for doing this, double click. 

•	Can use this equation to calculate the brightness temperature if you know the TOA:

T = K2_CONSTANT_BAND_10 / (ln((K1_CONSTANT_BAND_10 / TOA Radiance) + 1))

If you want to combine both of these so you only have to run it once the equation is:
T = K2_CONSTANT_BAND_10 / (ln((K1_CONSTANT_BAND_10 / (DN * RADIANCE_MULT_BAND_10 + RADIANCE_ADD_BAND_10)) + 1))


Here is the formula that you can use in QGIS Raster Calculator:
"LC80120312014173LGN00_B10@1" * 0.0003342 + 0.1

You would replace "LC80120312014173LGN00_B10@1" with your image. 

Here is the formula that should work in the QGIS Raster Calculator but it doesn't since it appears that the natural logarithm, "ln", isn't supported yet in this new version of the raster calculator. The user guide mentions that it will be supported in a future release. 

•	1321.08 / ln(774.89 / ("LC80120312014173LGN00_B10@1" * 0.0003342 + 0.1) + 1)

"I'm not sure of the best way for you to calculate brightness temperature since this isn't working at this time. The problem is that there are several options and they all require using another software package. One option that might be useful would be to do the processing using an R script. I could write a script that would require you to enter the image directory path and name and the script would clip out your area of interest and create a GeoTiff brightness temperature image. I think the script would be able to read the metadata text file so you wouldn't have to enter those TOA radiance and K coefficients by hand. You could run the script outside of QGIS and I can probably get it to work inside of QGIS if that's easier for you.” –Ned Horning_

•	Ned recently said that he will create an R script, which you would enter the directory (the number that starts with LC8 which comes up after you unzip the Landsat image) and the path (also included within the LC8 value, which is a reference to the “path and row” numbers that you would have seen on the Glovis website before you downloaded the image) into to get a set of information with you won't be able to see graphically until you drag it onto the QGIS canvas. 

•	To calculate the surface temperature, as opposed to brightness temperature, which is a relative measurement that measures temperature gradients, you would have to get some real temperature data for a certain point that you could compare to the Landsat value. You would then subtract the difference of this two points to get an actual value. It would be ideal to get multiple data points to compare so that your vaue is more accurate.
 
•	You could go about getting surface temperature data by using buoy temperature data, or by using surface temperature data from satellite images that are produced daily by MODIS, or just by browsing the internet for sea surface data.


•	could create legend, but would have to specify what brightness temperature is or that the difference between the plume and the bay is in relative measurements

•	you could also draw a transect (draw a line, graph above it with relative temp. above the plume)
