---
title: Update on the photo monitoring plugin for ImageJ/Fiji
tagnames: near-infrared-camera, plugin, photo-monitoring
author: nedhorning
path: /notes/nedhorning/11-1-2012/update-photo-monitoring-plugin-imagejfiji.md
nid: 4732
uid: 133

---

![](https://publiclab.org/sites/default/files/RegPhotoFirstScreen.png)

# Update on the photo monitoring plugin for ImageJ/Fiji

by [nedhorning](../profile/nedhorning) November 01, 2012 16:45

November 01, 2012 16:45 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [plugin](../tag/plugin), [photo-monitoring](../tag/photo-monitoring)

----

I recently updated the photo monitoring plugin that can be used to create NDVI and false color infrared images using a dual-camera setup that pairs a visible light camera with a near infrared (NIR) camera. This setup is being used by a number of folks in the PLOTS community. Some recent results from the plugin have been posted by PLOTS members [<a href="http://publiclaboratory.org/notes/cfastie/10-29-2012/agricultural-mapping">1</a>,<a href="http://publiclaboratory.org/notes/cfastie/10-31-2012/ndvi-output">2</a>,<a href="http://publiclaboratory.org/notes/patcoyle/11-1-2012/results-simple-aerial-photomapping-session-ewb-regional-workshop">3</a>]

The plugin will work with ImageJ [<a href="http://rsb.info.nih.gov/ij/">4</a>] or the related Fiji [<a href="http://fiji.sc/">5</a>] software that works on Windows, Apple and Linux operating systems. The plugin is designed to provide advanced image processing capabilities using an simple user interface. The plugin, user guide and related files can be downloaded from GitHub [<a href="https://github.com/nedhorning/PhotoMonitoringPlugin">6</a>]. Instructions for installing the plugin can be found in the user guide which can be accessed as a PDF file by clicking on the “Downloads” button on the GitHub page. When running the plugin I suggest starting with the default parameters and then adjusting them as you become more familiar with the different options. This is still beta software so make sure you backup your data before any processing.

Here are some additions to this latest version – more details are in the user guide:
Added an option to enhance the visible and NIR bands before calculating NDVI. This will tend to normalize the NDVI images that are output as long as the land cover composition of the images is similar in all photos. For example, the method works well when the images all cover vegetated landscapes but might not work well if some are from urban landscapes and others are primarily vegetated. 

Added an option to scale the NDVI color images to a user-defined range of NDVI values. When a color NDVI image is created the plugin need to scale the NDVI values which range from -1 to +1 to the range of pixel values allowed in the color image which is 0 to 255. Using this new option a user can define how this scaling takes place. The default is to set an NDVI value of -1 to 0 and and NDVI value of +1 to 255 and then scale all NDVI data between those two extremes linearly. If you are not interested in NDVI values under 0 you can specify that the minimum NDVI value for the scaling is 0 and in that case NDVI values of 0 and less will be assigned to an output value of 0 and an NDVI values of +1 will be assigned to an output value of 255. 

Another addition is three customized color tables for coloring the NDVI images. The color tables are optimized for a specific range of NDVI values. The user guide has instructions for making your own customized color tables. 

In the next couple weeks I will add additonal research notes focused on specific tasks and topics related to the plugin to help make it easier to use and to provide a better understanding how the different options work. If you have any questions or comments please use the Comments feature at the bottom of this page. 

[1] <a href="http://publiclaboratory.org/notes/cfastie/10-29-2012/agricultural-mapping">http://publiclaboratory.org/notes/cfastie/10-29-2012/agricultural-mapping</a>
[2] <a href="http://publiclaboratory.org/notes/cfastie/10-31-2012/ndvi-output">http://publiclaboratory.org/notes/cfastie/10-31-2012/ndvi-output</a>
[3] <a href="http://publiclaboratory.org/notes/patcoyle/11-1-2012/results-simple-aerial-photomapping-session-ewb-regional-workshop">http://publiclaboratory.org/notes/patcoyle/11-1-2012/results-simple-aerial-photomapping-session-ewb-regional-workshop</a>
[4] <a href="http://rsb.info.nih.gov/ij/">http://rsb.info.nih.gov/ij/</a>
[5] <a href="http://fiji.sc/">http://fiji.sc/</a>
[6] <a href="https://github.com/nedhorning/PhotoMonitoringPlugin">https://github.com/nedhorning/PhotoMonitoringPlugin</a>