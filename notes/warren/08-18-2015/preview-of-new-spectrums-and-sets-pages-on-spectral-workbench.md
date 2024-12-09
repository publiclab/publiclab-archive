---
title: Preview of new Spectrums and Sets pages on Spectral Workbench
tagnames: web-development, software, spectral-workbench, development, spectral-workbench-api
author: warren
path: /notes/warren/08-18-2015/preview-of-new-spectrums-and-sets-pages-on-spectral-workbench.md
nid: 12154
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/011/169/original/Screenshot_2015-08-18_at_2.09.18_PM.png)

# Preview of new Spectrums and Sets pages on Spectral Workbench

by [warren](../profile/warren) August 18, 2015 18:37

August 18, 2015 18:37 | Tags: [web-development](../tag/web-development), [software](../tag/software), [spectral-workbench](../tag/spectral-workbench), [development](../tag/development), [spectral-workbench-api](../tag/spectral-workbench-api)

----

Hi, all - I just deployed preview versions of the new Spectral Workbench 2.0 Sets and Spectrums pages, which are now linked to from the existing Sets and Spectrums pages with a button like this:

[![Screenshot_2015-08-18_at_2.20.33_PM.png](https://i.publiclab.org/system/images/photos/000/011/171/medium/Screenshot_2015-08-18_at_2.20.33_PM.png)](https://i.publiclab.org/system/images/photos/000/011/171/original/Screenshot_2015-08-18_at_2.20.33_PM.png)

Take a look at an example spectrum and set in the new interface:

* https://spectralworkbench.org/spectrums/show2/55072
* https://spectralworkbench.org/sets/show2/2446

###Calibration and wavelength range indicators

One interface addition of note is the colored indicators you'll now see next to spectrum titles, showing (green checkbox) if the spectrum is calibrated and (red arrows) whether it's had it's wavelength range limited. I've also made range powertags appear purple in tag lists, so they're more noticeable. I think we'll make all powertags distinct like that, to show which materially affect the data, and which are just descriptors. 

###Tools layout

I'm experimenting with tool layout on the Spectrum page. There are a lot of tools and we're trying to expand this and make it more legible through a rewrite of the API system. I'm considering switching to FontAwesome v4 icons, and Bootstrap v3, so that we can more tightly design this area. I hope it'll include a search field for macros, as well as an area to read the description and instructions for macros. But for now, just a list of buttons. 

[![Screenshot_2015-08-18_at_2.11.50_PM.png](https://i.publiclab.org/system/images/photos/000/011/170/large/Screenshot_2015-08-18_at_2.11.50_PM.png)](https://i.publiclab.org/system/images/photos/000/011/170/original/Screenshot_2015-08-18_at_2.11.50_PM.png)

###Questions and next steps

More than anything, I wanted to share some of the progress made, and solicit input, design suggestions, and even code contributions as this system develops. Our development checklist for this pretty big project is at https://github.com/publiclab/spectral-workbench/pull/139

What do you think? Ideas for improvements? Requests? Leave a comment!