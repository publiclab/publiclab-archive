---
title: "Graded oils using UV fluorescence"\ntagnames: 'spectrometer, oil, fluorescence, spectral-workbench, crude, smoothing, clipping, oil-testing-kit, barnstar:basic, exposure, with:warren, equalizing, 405nm'
author: mathew
path: /notes/mathew/09-23-2014/graded-oils-using-uv-fluorescence.md
nid: 11173
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/006/968/original/Screen_Shot_2014-09-22_at_9.15.17_PM.png)

# Graded oils using UV fluorescence

by [mathew](../profile/mathew) | September 23, 2014 04:21

September 23, 2014 04:21 | Tags: [spectrometer](../tag/spectrometer), [oil](../tag/oil), [fluorescence](../tag/fluorescence), [spectral-workbench](../tag/spectral-workbench), [crude](../tag/crude), [smoothing](../tag/smoothing), [clipping](../tag/clipping), [oil-testing-kit](../tag/oil-testing-kit), [barnstar:basic](../tag/barnstar:basic), [exposure](../tag/exposure), [with:warren](../tag/with:warren), [equalizing](../tag/equalizing), [405nm](../tag/405nm)

----

###What we want to do
Me and @Warren  are trying to replicate [the heavy to light sorting of oils,](/notes/mathew/09-17-2014/laser-pointers-and-the-lif-literature) as seen in ["Laser Remote Sensing at Sea, A Quantitative Approach" byT. Hengstermann and R. Reuter ](http://mobile.www.eproceedings.org/Advances/1-2-1992/1-2_09_Henstermann.pdf) and [a bunch of other people's work.](/wiki/oil-testing-kit-literature)

Specifically,  we're looking in a shift in the color of spectra emitted by [fluorescing oils](/wiki/oil-testing-kit) from red (heavy oil) to blue (lighter oil).  look at Figures 1, 4a & b  from Hengstermann & Reuter:

[![1992_Hengstermann_EARSeL_fig1.png](https://i.publiclab.org/system/images/photos/000/006/966/medium/1992_Hengstermann_EARSeL_fig1.png)](https://i.publiclab.org/system/images/photos/000/006/966/original/1992_Hengstermann_EARSeL_fig1.png)

[![1992_Hengstermann_EARSeL_fig4a.png](https://i.publiclab.org/system/images/photos/000/006/961/medium/1992_Hengstermann_EARSeL_fig4a.png)](https://i.publiclab.org/system/images/photos/000/006/961/original/1992_Hengstermann_EARSeL_fig4a.png)

[![1992_Hengstermann_EARSeL_fig4b.png](https://i.publiclab.org/system/images/photos/000/006/962/medium/1992_Hengstermann_EARSeL_fig4b.png)](https://i.publiclab.org/system/images/photos/000/006/962/original/1992_Hengstermann_EARSeL_fig4b.png)

###Our attempt and results

I tried to replicate this in spectral workbench, first on [one spectrometer](/notes/mathew/09-19-2014/grading-oils-with-uv-fluorescence) and then again with a [bunch of spectrometers with different cameras in them](/notes/mathew/09-22-2014/replicating-the-grading-of-oils-with-uv-fluorescence-on-other-cameras-pt-1).  @warren has been [working with the data](/notes/warren/09-23-2014/better-smoothing-and-equalizing-graph-height-for-comparison-of-oil-spectra) and [re-working spectral workbench](https://github.com/publiclab/spectral-workbench/commit/b3187f0bfdc971188d0959a9e39dc9ef44db3c5f) to do cool things with the data. We've been talking on the phone too.

@warren tried smoothing the graphs, equalizing area, and equalizing height. The most legible and compelling, is to split the area of the graph and mark the exact middle.  When that is performed, the progression of oil grades from light to dark (blue to red) is nice and clear.

 [To quote Jeff](/notes/warren/09-23-2014/better-smoothing-and-equalizing-graph-height-for-comparison-of-oil-spectra#c10374):

OK, I added a couple more features -- one which bisects a graph with a vertical line where the area of the graph is equally divided -- what's that actually called? Anyhow I've just labelled it "Find graph 'centers'":

[![menu](https://i.publiclab.org/system/images/photos/000/006/963/original/Screen_Shot_2014-09-22_at_11.09.35_PM.png)](https://i.publiclab.org/system/images/photos/000/006/963/original/Screen_Shot_2014-09-22_at_11.09.35_PM.png)

I also made a "Crop view" feature so you can zoom in a bit. It kind of sucks so maybe I'll add a real zoom feature and let people scroll back and forth. But it's too late tonight. But this makes it much easier to see the sequence of heavy/light oils:

https://spectralworkbench.org/sets/show/1482, of the SYBA cam:

[![https://spectralworkbench.org/sets/show/1482](https://i.publiclab.org/system/images/photos/000/006/964/original/Screen_Shot_2014-09-22_at_11.08.18_PM.png)](https://i.publiclab.org/system/images/photos/000/006/964/original/Screen_Shot_2014-09-22_at_11.08.18_PM.png)

https://spectralworkbench.org/sets/show/1484, of the filterless Infragram Webcam:

[![https://spectralworkbench.org/sets/show/1484](https://i.publiclab.org/system/images/photos/000/006/965/original/Screen_Shot_2014-09-22_at_11.11.57_PM.png)](https://i.publiclab.org/system/images/photos/000/006/965/original/Screen_Shot_2014-09-22_at_11.11.57_PM.png)

And https://spectralworkbench.org/sets/show/1481, of the filterless Infragram Webcam:

[![https://spectralworkbench.org/sets/show/1481](https://i.publiclab.org/system/images/photos/000/006/967/original/Screen_Shot_2014-09-22_at_11.12.51_PM.png)](https://i.publiclab.org/system/images/photos/000/006/967/original/Screen_Shot_2014-09-22_at_11.12.51_PM.png)

###Questions and next steps
The order of oil grades is similar between the two different spectrometers.  But each camera still produces different centers. 

To make these spectra comparable between cameras, it looks like some sort of calibration samples will be needed.  There are a lot of moving parts in these measurements such as concentration, or the path of the laser. We're still using a variable light path-- moving the laser around-- to give us spectra that aren't blown out.  

[![blowout](https://i.publiclab.org/system/images/photos/000/006/960/original/Screen_Shot_2014-09-22_at_9.35.46_PM.png)](https://i.publiclab.org/system/images/photos/000/006/960/original/Screen_Shot_2014-09-22_at_9.35.46_PM.png)

Blowouts are a big problem we both noticed, and we're thinking some blowout warning in Spectral workbench might be useful.  It might [aso be possible to just watch one color channel](http://publiclab.org/notes/warren/09-23-2014/better-smoothing-and-equalizing-graph-height-for-comparison-of-oil-spectra):

###Why do we want to do this? 
we're looking to make an inexpensive means of identifying oil in the field that works between different cameras and devices.