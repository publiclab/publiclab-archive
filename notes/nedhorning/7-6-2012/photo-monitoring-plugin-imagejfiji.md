---
title: Photo monitoring plugin for ImageJ/Fiji
tagnames: near-infrared-camera, plugin, photo-monitoring, infragram, timelapse
author: nedhorning
path: /notes/nedhorning/7-6-2012/photo-monitoring-plugin-imagejfiji.md
nid: 2719
uid: 133

---

# Photo monitoring plugin for ImageJ/Fiji

by [nedhorning](../profile/nedhorning) July 06, 2012 21:31

July 06, 2012 21:31 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [plugin](../tag/plugin), [photo-monitoring](../tag/photo-monitoring), [infragram](../tag/infragram), [timelapse](../tag/timelapse)

This is an update on the photo monitoring software I've been working on. A few weeks ago I wrote a Fiji [1] macro that can be used to register a visible and near infrared image that were acquired at roughly the same time. That macro lives on GitHub [2] and comes with a guide on how to use it.

In addition to the macro I started working on a set of photo monitoring plugins for ImageJ and Fiji. The pugins appear under the Plugins menu once they are installed so they should be easier to use. There are currently two plugins. The one is effectively a duplication of the image registration macro with some modifications that were difficult to implement as a macro. For example, using the plugin the log file will be saved even if the program crashes, it is possible to interact with your computer while the plugin is running without interfering with the processing. And I think it runs a little raster. 

The other plugin is a convenience plugin that automates the process of creating image pairs. The plugin calculates the time offset between the two cameras and then creates image pairs by finding the closest match. A file of image pairs that can be input into the image registration plugin is created. 

Since the plugins are written in Java instead of the ImaegJ macro language there are more options for customization. Over time, as I become more familiar with Java, the ImageJ API, and related software libraries I expect to add more plugins. 

I uploaded the source files,.jar file ready to install and a user guide to GitHub [3]. To download the .jar file or guide just click on “Download” then select the file you want to download. I'm not much of a programmer so if anyone has input about the way I have the software and guide on GitHub or the software itself please let me know. 

The plugin and guide are still pretty rough but I wanted to get it out so people can test and comment. I'm looking for feedback on bugs and feature requests for additional plugin capabilities. Any comments on the guide are welcome too. If anyone else is interested in helping with the plugins or guide that would be great too. 

[1] http://fiji.sc/wiki/index.php/Fiji
[2] https://github.com/nedhorning/RegisterPhotos
[3] https://github.com/nedhorning/PhotoMonitoringPlugin