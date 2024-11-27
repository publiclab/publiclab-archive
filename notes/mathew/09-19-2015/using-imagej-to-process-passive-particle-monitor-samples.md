---
nid: 12229
title: Using ImageJ to process passive particle monitor samples
path: public/static/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples.md
uid: 4
tagnames: image-processing,air-quality,petcoke,particulates,silica,pm,particle-sensing,particle-monitoring,image-analysis,passive-particle-monitors,passive-pm
---

# Using ImageJ to process passive particle monitor samples

###What I want to do
I want to document the manual steps of processing the images of passive particle monitors, stepping through the first part of the process outlined in my [previous note on analysis.](/notes/mathew/09-04-2015/analyzing-passive-monitors)  See also: [imaging passive particle monitors](/notes/mathew/09-03-2015/optical-imaging-of-passive-particle-monitors), [replicating passive particle monitors](/notes/mathew/09-02-2015/replicating-a-passive-dust-monitor-method), [research background](/notes/mathew/08-21-2014/low-cost-passive-aerosol-monitors)

the goal is to take a full-color microscope image and:

* Set the scale 
* convert to a high-contrast black and white image through "thresholding"
* fill any "holes" in the high contrast particles
* measure the particles' perimeter and area

###My attempt and results
I used [Fiji](http://fiji.sc/Fiji), a distribution of ImageJ with a nice interface and easier scripting capabilities all ready to use.

####Setting the Scale
I found [instructions in the Fiji help for setting the scale.](http://fiji.sc/SpatialCalibration)

First, draw a line of a known length (preferably on top of a calibrated scale) on one of the images using the _Line Selection_ tool
[![_Fiji_Is_Just__ImageJ_and_dust_documentation_and_Untitled_46.png](https://i.publiclab.org/system/images/photos/000/011/636/medium/_Fiji_Is_Just__ImageJ_and_dust_documentation_and_Untitled_46.png)](https://i.publiclab.org/system/images/photos/000/011/636/original/_Fiji_Is_Just__ImageJ_and_dust_documentation_and_Untitled_46.png)

[![Screen_Shot_2015-09-18_at_4.59.06_PM.png](https://i.publiclab.org/system/images/photos/000/011/637/medium/Screen_Shot_2015-09-18_at_4.59.06_PM.png)](https://i.publiclab.org/system/images/photos/000/011/637/original/Screen_Shot_2015-09-18_at_4.59.06_PM.png)

Now go to the menu _Analyze > Set Scale._

* Set unit length to μm (you an type um)
* check "global"
*  this will make it apply to all the other images opened

You can find and check this calibration under _Plugins > Utilities > Image Properties_

####Thresholding the image
Thresholding makes everything on one side of a color or lightness threshold a single color.  We are going to do it on a greyscale image to get a black and white image that is "binary," i.e. every pixel is either black or white.

First, convert the image to greyscale by going to _Image > Type > 8 bit_

Now we want to threshold the image to a binary image.  Go to _Image > Adjust > Threshold_

There are a variety of available modes, all of them seem to produce a decent binary image if the brightness is adjusted correctly.  It is an open question as to which we should use.

[![Screen_Shot_2015-09-18_at_6.28.37_PM.png](https://i.publiclab.org/system/images/photos/000/011/638/medium/Screen_Shot_2015-09-18_at_6.28.37_PM.png)](https://i.publiclab.org/system/images/photos/000/011/638/original/Screen_Shot_2015-09-18_at_6.28.37_PM.png)

select a threshold that isolates particles without including noise.  This should be the same threshold used universally during processing, so some testing is called for. 

Now to make sure there aren't any greyscale elements left by using the command _Process > Binary > Make Binary_

You should have something like this:

[![20xfrac_snd17-threshholded.png](https://i.publiclab.org/system/images/photos/000/011/639/medium/20xfrac_snd17-threshholded.png)](https://i.publiclab.org/system/images/photos/000/011/639/original/20xfrac_snd17-threshholded.png)

####Filling "Holes"

While thresholding gave us a good high-contrast image, somewhat transparent or reflective particles have "holes" inside them (left) that we want to fill (right):

[![Screen_Shot_2015-09-18_at_6.32.18_PM.png](https://i.publiclab.org/system/images/photos/000/011/640/medium/Screen_Shot_2015-09-18_at_6.32.18_PM.png)](https://i.publiclab.org/system/images/photos/000/011/640/original/Screen_Shot_2015-09-18_at_6.32.18_PM.png)

Go to _Process > Binary > Fill Holes_

####Analysis
Now our image is ready to analyze.  We first need to set the measurements that will be taken. Go to _Analyze > Set Measurements_ and check off:

* Area
* Perimeter
* Shape Descriptors

Shape Descriptors will give us the ["circularity" factor needed for our volume calculations.](/notes/mathew/09-04-2015/analyzing-passive-monitors)

Now go to _Analyze > Analyze Particles_

ImageJ has now calculated the area and perimeter of the particles and represents them as idealized ovals.  

[![Drawing_of_20xfrac_snd17-ovals.png](https://i.publiclab.org/system/images/photos/000/011/641/medium/Drawing_of_20xfrac_snd17-ovals.png)](https://i.publiclab.org/system/images/photos/000/011/641/original/Drawing_of_20xfrac_snd17-ovals.png)

We also have a .xls (Excel spreadsheet) file that we can use to run the volumetric equivalents [described previously.](/notes/mathew/09-04-2015/analyzing-passive-monitors)

###Questions and next steps
The manual procedure will be useful in helping us make decisions about how best to image the particles and what thresholding system to use.  ultimately though, we want to create [an automated script.](http://fiji.sc/Scripting_Help) 