---
title: "Packaged photo monitoring plugins available on the GitHub repositoy"

tagnames: 'remote-sensing, imagej, fiji, barnstar:basic'
author: nedhorning
path: /notes/nedhorning/01-13-2016/packaged-photo-monitoring-plugins-available-on-the-github-repositoy.md
nid: 12582
uid: 133

cids: 13377,14586,14591,15940,26599,26897

---

![](https://publiclab.org/public/system/images/photos/000/013/623/original/Fiji-icon.png)

# Packaged photo monitoring plugins available on the GitHub repositoy

by [nedhorning](../../../profile/nedhorning) | January 13, 2016 17:51

January 13, 2016 17:51 | Tags: [remote-sensing](../tag/remote-sensing), [imagej](../tag/imagej), [fiji](../tag/fiji), [barnstar:basic](../tag/barnstar:basic)

----

Today I added packaged Fiji/ImageJ/photo monitoring plugin software to the plugin's GitHub repository. This was done in response to a problem that prevents the photo monitoring plugin from working with the latest version of Fiji. The packaged software includes the “Fiji Life-Line version, 2014 November 25” version of Fiji (available from Fiji website: http://fiji.sc/Downloads), the photo monitoring plugin and all of the required files to run it. 

Installation of the software should be as simple as downloading the appropriate “.zip” file, uncompressing it then clicking on the “Fiji” icon in the newly created directory to launch Fiji. The photo monitoring plugin should be visible from the Fiji menu. 

These are the bundled software packages and the platforms that are supported:
Linux 32-bit: fiji-linux32-20141125_PM.zip 
Linux 64-bit: fiji-linux64-20141125_PM.zip  
Windows 32-bit: fiji-win32-20141125_PM.zip
Windows 64-bit: fiji-win64-20141125_PM.zip
All platforms (no JRE): fiji-nojre-20141125_PM.zip

NOTE: Support for OS X is coming (I don't have a Mac) but for now it is best to download the “Fiji Life-Line version, 2014 November 25” file from the website linked above and then follow the directions in the plugin installation guide. Once I am able to unpackage the OS X .dmg file I'll post that package here.

These have not been thoroughly tested so if you have problems please let me know. If you can help package the OS X files please contact me. 