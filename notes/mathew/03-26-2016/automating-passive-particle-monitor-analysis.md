---
nid: 12893
title: Automating Passive Particle Monitor Analysis
path: public/static/notes/mathew/03-26-2016/automating-passive-particle-monitor-analysis.md
uid: 4
tagnames: frac-sand,pm,polarized-light-microscopy,particle-monitoring,particle,microscope,passive-particle-monitors,passive-pm,parent:frac-sand,microscopy,pm-monitoring,with:simonpyle,microscopes,activity:microscopes,particle-imaging
---

# Automating Passive Particle Monitor Analysis

Along with @AmberWise, @Damarquis, @Pagyebo, I've been working to make and document a method of analyzing [SEM stub passive particle monitors](/wiki/passive-pm) with visible light microscopy in order to determine [PM2.5-10 pollution](/wiki/pm#Regulation).

As we've begun working with the samples we've identified a number of issues with imaging, issues we believe will be easier to solve with automated analysis and imaging stages.  This note describes some of the issues and challenges we've defined, and solutions we're pursuing.

###Imaging time and analysis evaluation

The current process of [imaging passive PM samples](/notes/mathew/10-27-2015/systematic-imaging-of-passive-particle-monitors-on-an-sem) is rather laborious, involving taking 10-40 images per sample, [processing them in ImageJ](/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples)
), and then [analyzing the results](https://publiclab.org/notes/mathew/09-04-2015/analyzing-passive-monitors) in this [spreadsheet](https://docs.google.com/spreadsheets/d/1xSVT9lxary0zZhhEqhrX3hsdIb4shbYhaOJx_RWhESg/edit). 

To complicate matters further, [the analysis](/notes/Damarquis/10-20-2015/using-imagej-to-analyze-threshold-and-saving-results-on-windows-10) depends on lighting conditions in the thresholding stage.  [Thresholding](/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples#Thresholding+the+image) divides the image into a high-contrast black and white image.  If the particles in the light section are less dark than the background of the dark section, thresholding can't be targeted:

[![Wi_HA_120715_20x_6.jpg](//i.publiclab.org/system/images/photos/000/015/219/medium/Wi_HA_120715_20x_6.jpg)](//i.publiclab.org/system/images/photos/000/015/219/original/Wi_HA_120715_20x_6.jpg)

To solve these two issues, we're seeking to get an automated microscope and script ImageJ to [process images](/notes/mathew/09-04-2015/analyzing-passive-monitors) automatically.  I recently brainstormed a bit about ImageJ scripting goals and workflows with @SimonPyle from Public Lab's Chicago chapter about ImageJ, and the different problems and successes @Pagybo has had with taking evenly lit microscope images. This note will focus on good images for use in ImageJ,  and the ImageJ scripting workflow.

For an automated microscope slide stage I'm currently replicating the [OpenFlexure](http://docubricks.com/projects/openflexure-microscope) microscope @TonyC found at [GOSH](http://openhardware.science/why-gosh/). I will talk more about that in a future note. 

Read our [development plan](https://publiclab.org//wiki/pm-dev).

See [all the research notes tagged passive-pm](/tag/passive-pm)

###Imaging issues

**Vignetting & uneven lighting **

Vignetting is when an image is darker at the edges.  It causes the same problem as uneven lighting, which is also present in this 20X image:

[![Screen_Shot_2016-03-25_at_8.42.15_PM.png](//i.publiclab.org/system/images/photos/000/015/223/medium/Screen_Shot_2016-03-25_at_8.42.15_PM.png)](//i.publiclab.org/system/images/photos/000/015/223/original/Screen_Shot_2016-03-25_at_8.42.15_PM.png)

Here are a variety of different thresholds, they all either miss the translucent particles on the left or the solid particles on the right:

[![Montage.jpg](//i.publiclab.org/system/images/photos/000/015/224/medium/Montage.jpg)](//i.publiclab.org/system/images/photos/000/015/224/original/Montage.jpg)

**Lessons Learned in Imaging**

Thresholding can highlight noise, especially "one pixel particles" that are just image artifacts.  Some filter for particles below a certain size will have to be implemented.

Getting rid of uneven lighting is ideal.  This seems possible through adjustment of the camera and lighting setup.  Here is an image with better camera white balance adjustment and a tuned light:
<a href="//i.publiclab.org/system/images/photos/000/015/225/original/10_26_15_PG1_6_20x.tif"><i class="fa fa-file"></i> 10_26_15_PG1_6_20x.tif</a>

Thresholding is much more successful hear over a range of particle sizes, particle types, and thresholding settings:

[![Montage.jpg](//i.publiclab.org/system/images/photos/000/015/226/medium/Montage.jpg)](//i.publiclab.org/system/images/photos/000/015/226/original/Montage.jpg)

Still, some effects from the background lighting unevenness remain.

**Challenges and Checks**

A challenge will be automating image analysis while accounting for image-to-image thresholding discrepancies and discarding poorly thresholded images. We think being able to check automated particle counting by eye can accomplish this. @SimonPyle suggested we use the tiling (or "montage" in ImageJ") functions to put images on to the same page, like in the image above.  This would let whoever is analyzing samples to quickly check the computer's work. 

A second challenge is verifying the perimeters of particles are determined correctly.  Two comparisons seem helpful.  Hand-measured [particle perimeters](/notes/mathew/09-04-2015/analyzing-passive-monitors#Analysis+Prep_)  can be compared to computer measured particle perimeters.  We will also co-locate our monitors with [FEM & FRM monitors for verification](/wiki/pm-dev).

###Batch processing in ImageJ and output goals

Scripting ImageJ to walk through the sample processing stages automatically for a samples' entire image set would allow rapid iteration on the thresholding and sizing steps. Luckily, [ImageJ has an Macro Recorder that can record the menu steps of analysis for batch processing](http://imagej.net/Batch_Processing).  While ImageJ can be scripted in a variety of languages, we'd like to stick to its native scripting language for ease.

Our goals are to create a script that outputs a whole image set to a single tiled image for visual verification.  As the script steps through the analysis steps of thresholding, filling, perimeter measurement, and circularity calculation, it would save a tiled image of each step with each particle numbered uniquely.  These numbers would be in the output CSV file.

###next steps
Time to get scripting!
