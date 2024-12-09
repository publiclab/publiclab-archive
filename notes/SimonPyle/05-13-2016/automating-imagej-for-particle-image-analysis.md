---
title: 'Automating ImageJ for particle image analysis'
tagnames: image-processing, dust, silica, pm, particle-sensing, image-analysis, microscope, passive-particle-monitors, passive-pm, activity:microscope, microscopes, activity:microscopes, particle-imaging, particle-analysis
author: SimonPyle
path: /notes/SimonPyle/05-13-2016/automating-imagej-for-particle-image-analysis.md
nid: 13116
uid: 468943

---

![](https://publiclab.org/public/system/images/photos/000/016/180/original/MacroProcess.gif)

# Automating ImageJ for particle image analysis

by [SimonPyle](../profile/SimonPyle) May 13, 2016 23:33

May 13, 2016 23:33 | Tags: [image-processing](../tag/image-processing), [dust](../tag/dust), [silica](../tag/silica), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [image-analysis](../tag/image-analysis), [microscope](../tag/microscope), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [activity:microscope](../tag/activity:microscope), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes), [particle-imaging](../tag/particle-imaging), [particle-analysis](../tag/particle-analysis)

----

###What I want to do
Measuring air quality with passive particle collectors requires an accurate count of the size and number of particles collected. [ImageJ](https://imagej.nih.gov/ij/) (or [Fiji](http://fiji.sc/)) has tools that speed up this analysis, but a series of steps must be applied to each image for analysis. A single slide can result in dozens of photographs to cover the entire sample area, so we want to automate this process as much as possible.

ImageJ has a [macro language](https://imagej.nih.gov/ij/docs/macro_reference_guide.pdf) somewhat akin to a simplified version of Java that includes a built-in recorder to automate actions. I wrote a script to automate the process of analyzing images.

These results then need to be entered into the spreadsheet developed by @mathew from [these calculations](https://publiclab.org/notes/mathew/09-04-2015/analyzing-passive-monitors).

###My attempt and results

The macro (version 0.1) can be [downloaded here.](https://drive.google.com/open?id=0Bx39hrslIqvjblJiYURHZnpBd3M)

####Macro Workflow

This roughly follows @mathew's process of [using ImageJ to process passive particle monitor samples](https://publiclab.org/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples)

* Prompt for a directory with images 
    * all images from one sample need to be in a directory without other images. The macro will attempt to ignore files without image-type file suffixes.
* Prompt for flatfield image for correction, if available
* Calibrate image scale
    * prompt for image with calibration ruler, 
    * draw a line between two points of known distance, 
    * enter known distance and units
    * store scale to be applied to each image
* Open first image to manually apply cropping to cut out vignetting
    * store crop setting to be applied to all images
* Create new directory to save for analysis results and images 
* For each file in directory with a valid image extension ('tif', 'tiff', 'jpg', 'jpeg', 'bmp', 'fits', 'pgm', 'ppm', 'pbm','gif', 'png', 'jp2','psd’):
    * Apply flat field calibration
    * Apply cropping
    * Convert to 8-bit image
    * Apply auto threshold
    * Make binary
    * Fill holes
    * Analyze particles (and superimpose a particle count number on each particle in the saved image)
        * (each of these steps saves a separate image as an intermediate step)
* Save the results table as a csv ("results.csv")
* Save the area measured and image count as a separate csv ("area.csv)

#### Options

[![Screenshot_2016-05-13_18.11.18.png](//i.publiclab.org/system/images/photos/000/016/184/large/Screenshot_2016-05-13_18.11.18.png)](//i.publiclab.org/system/images/photos/000/016/184/original/Screenshot_2016-05-13_18.11.18.png)

I included some image correction to handle [image calibration.](https://publiclab.org/notes/mathew/03-26-2016/automating-passive-particle-monitor-analysis) 

Vignetting is handled by selecting a region of interest in one image; that crop area is then applied to all of the images in the sample.

[Flatfield image correction](http://imagej.net/Image_Intensity_Processing#Flat-field_correction) is available. If the sample includes an image taken with an empty slide (a "flat-field), that image can be used to remove uneven illumination from the photos.

If there is not an existing flat-field image, the macro can generate a [pseudo flat-field](http://imagej.net/Image_Intensity_Processing#Pseudo-correction). The macro asks for a "radius value" to generate a gaussian blurred version of the image. This radius needs to be large enough to generate a blurred image where the individual particles are no longer visible.

@mathew found that extracting the blue channel before processing images helped, so that is an option as well.

There are two options for calibrating the image scale. You can either measure a scale in an image or enter a known value of pixels per inch. (The latter option may be useful in ensuring consistency across runs of the macro, especially as the needed values are exported to the "area.csv" file at the end of each run.)

###Questions and next steps
An approach that might be worth incorporating is [Rolling-Ball background correction](http://imagej.net/Image_Intensity_Processing#Rolling-Ball_background_correction). This could help reduce issues with uneven illumination.

A big question is how to remove potential false-positives from the image. Dust in the microscope or on the slide can cause dark blotches, or uneven illumination can affect the results of image processing.  Flatfield correction is a start, but only affects false positives that are consistent across images.

Here is an image of what I think are potential false positives (dust?). Flat-field correction will handle the stable dust, but not the dust that "moves" across images.

[![DustGif.gif](//i.publiclab.org/system/images/photos/000/016/177/large/DustGif.gif)](//i.publiclab.org/system/images/photos/000/016/177/original/DustGif.gif)

It might be good for the macro to save a pseudo flat-field when it's generated for future reference. When using a pseudo flat-field, I'm running the "Mean..." command with various radius values until I find one that sufficiently blurs the image, and then use that value to run the macro.

Thanks to @mathew & @AmberWise for their input and guidance!