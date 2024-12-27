---
title: "Oil Testing Kit"

tagnames: 'spectrometer, oil-spill, oil, illustrated-guides, sample-prep, sampling, instructions, oil-testing, oil-testing-kit, prompt:oil-testing-kit, parent:spectrometry'
author: warren
path: /wiki/oil-testing-kit.md
nid: 10112
uid: 1
cids: 25633
---

![](https://publiclab.org/public/system/images/photos/000/011/271/original/IMG_20150521_145931_2.jpg)

# Oil Testing Kit

by [warren](/profile/warren), [stevie](/profile/stevie), [pdhixenbaugh](/profile/pdhixenbaugh), [MelissaN](/profile/MelissaN), [mathew](/profile/mathew), [gretchengehrke](/profile/gretchengehrke), [mollydanielsson](/profile/mollydanielsson), [bsugar](/profile/bsugar), [Shannon](/profile/Shannon), [liz](/profile/liz)

March 06, 2014 13:58 | Tags: [spectrometer](/tag/spectrometer), [oil-spill](/tag/oil-spill), [oil](/tag/oil), [illustrated-guides](/tag/illustrated-guides), [sample-prep](/tag/sample-prep), [sampling](/tag/sampling), [instructions](/tag/instructions), [oil-testing](/tag/oil-testing), [oil-testing-kit](/tag/oil-testing-kit), [prompt:oil-testing-kit](/tag/prompt:oil-testing-kit), [parent:spectrometry](/tag/parent:spectrometry)

----

_Detect and grade different kinds of oils using an ultraviolet laser and a DIY spectrometer._

### Introduction

The **Oil Testing Kit** is an open source Do-It-Yourself kit which attempts to make it possible to identify oil pollution by type. This means matching a suspected sample with a known sample of crude oil, motor oil, heating oil, or other petroleum-based contaminant using a homemade fluorescence spectrometer. A spectrometer enables you to precisely measure the colors of light emitted by diluted samples when they are illuminated with strong ultraviolet light, as shown above in an early prototype. 

The OTK was developed as a more focused branch of the larger [DIY Spectrometry](/wiki/spectrometer) project, to specifically prove out an affordable oil pollution detection technique. Both projects were started in the wake of the BP oil disaster, as a means to increase accountability wherever oil pollution occurs. 

### Booklet

Read about the Oil Testing Kit program in our report **[DIY Oil Testing: Progress toward community oil pollution analysis](/wiki/diy-oil-testing)** -- and/or order the booklet:

[Order now](http://www.blurb.com/bookstore/invited/6273104/1134a468b8a88950f2f05ef238dd2837fd517437) ($10 paperback) 

****

**Table of contents** | 
--------------------|---------------------
**Instructions** | A step-by-step guide to measuring oil contamination with the Oil Testing Kit
[Construction](/wiki/oil-testing-kit-construction) | Assemble your Oil Testing Kit (separate page) plus a parts list to build your own
[Collect](#Collect) | Find and collect oil pollution outside and prepare it for analysis
[Scan](#Scan) | Shine UV light through and get a clear snapshot through a DIY spectrometer
[Compare](#Compare) | Add your samples to a set and do some analysis
[Hazards & Disposal](#Hazards) | Please use caution and safely dispose of oils after your tests!

Related pages | 
--------------------|---------------------
[OTK Beta program](/wiki/oil-testing-kit-beta) | 
[Related research](/tag/oil-testing-kit) | Recent research notes on the project
[Literature](/wiki/oil-testing-kit-literature) | Readings and scientific papers about these techniques
[Workshop](/wiki/oil-testing-event) | A workshop structure for oil testing


****

## Questions

[oil-testing-kit](/tag/question:oil-testing-kit)

****

## Status & Limitations

We are now collecting results from the [Public Beta Program](/wiki/oil-testing-kit-beta), which is being used to test out the kit in advance of our main launch.

Although our long-term goal is to create a kit capable of fingerprinting a specific oil and tying it to a specific polluter and pollution event, our most immediate goal is to classify the oil type by weight, in relation to a range of known samples, ranging from motor oil to different crude oils. We are increasingly confident in the kits ability to perform this more narrow task. 

We do not currently attempt to use the kit to:

* tell you the type of oil without comparing it to other known samples
* compare data directly with data from other kits -- only from the same kit and experimental setup
* measure oil directly in the field
* make measurements with a smartphone (we're focusing on the desktop interface first)

That does not mean these are impossible, or that we're not interested in working on these challenges in the future. But we are choosing to rigorously attempt to complete narrower, more focused challenges before moving on to more complex tests. One step at a time! There is ongoing research (as of January 2016) in:

* collecting and concentrating oil samples [from sheens on the surface of water](/tag/sheen)
* [gain-correcting spectra](/tag/gain-correction) for comparisons across devices
* [refining a cuvette holder with a controlled LED light](/tag/cuvette-frame) for better control of illumination and alignment

****

We ran [a Kickstarter campaign](https://www.kickstarter.com/projects/publiclab/the-homebrew-oil-testing-kit) in Fall 2014 to distribute a run of these kits, which did not meet its goal, but the video below is a good introduction to the project:

<iframe width="640" height="480" src="https://www.kickstarter.com/projects/publiclab/the-homebrew-oil-testing-kit/widget/video.html" frameborder="0" scrolling="no"> </iframe>

****
#Instructions

The process of testing oils can be described in three overall steps; 

1. **Collect** samples of suspected oil or tar from the ground, and dissolve small amounts in mineral oil so they are translucent
2. **Scan** - illuminate the solutions with ultraviolet light -- presently using a 405 nanometer blue laser -- and record the light spectrum with a DIY spectrometer
3. **Compare** the spectrum to those of similarly prepared samples of [known pollutant oils](/notes/warren/05-03-2013/crude-oil-samples-for-purchase-online), as well as a negative control

Here we will discuss and illustrate these steps in depth -- but keep in mind this process is always evolving. See the [Challenges section](#Challenges) for ways to get involved and contribute.

****

##Collect

[![IMG_20150701_165050.jpg](https://i.publiclab.org/system/images/photos/000/010/502/medium/IMG_20150701_165050.jpg)](https://i.publiclab.org/system/images/photos/000/010/502/original/IMG_20150701_165050.jpg)

Collecting samples has three basic steps: 

* A) collecting bits of suspected solid residue in a glass container
* B) dissolving it in mineral oil, ideally in a second container
* C) preparing a final dilution with more mineral oil in a final scanning container (a cuvette) with flat sides for scanning

****

####Locating samples

Originally, we focused on tar balls which were washing up on US Gulf Coast shorelines following the BP oil spill. These ranged from hard black lumps to orange residue. But oil contamination takes many forms, from residue around a street drain, to a sheen or buildup on the surface of the water. Here are some examples:

[![4809200807_cdb5f15e1f_b.jpg](https://i.publiclab.org/system/images/photos/000/005/446/thumb/4809200807_cdb5f15e1f_b.jpg)](https://i.publiclab.org/system/images/photos/000/005/446/original/4809200807_cdb5f15e1f_b.jpg)[![4741795572_a892463f4e_b.jpg](https://i.publiclab.org/system/images/photos/000/005/447/thumb/4741795572_a892463f4e_b.jpg)](https://i.publiclab.org/system/images/photos/000/005/447/original/4741795572_a892463f4e_b.jpg)[![oil-on-tracks-long-view-3_Weaver_MN.jpg](https://i.publiclab.org/system/images/photos/000/002/877/thumb/oil-on-tracks-long-view-3_Weaver_MN.jpg)](https://i.publiclab.org/system/images/photos/000/002/877/original/oil-on-tracks-long-view-3_Weaver_MN.jpg)[![IMG_20140714_161104.jpg](https://i.publiclab.org/system/images/photos/000/005/451/thumb/IMG_20140714_161104.jpg)](https://i.publiclab.org/system/images/photos/000/005/451/original/IMG_20140714_161104.jpg)

_Left to right: dried oil on rocks in 2010, Louisiana coast [by Cesar Harada CC-BY-NC-SA](https://www.flickr.com/photos/worldworldworld/4809200807/in/set-72157624236184769), oil residue in the ocean in 2010, Louisiana coast [by Cesar Harada CC-BY-NC-SA](https://www.flickr.com/photos/worldworldworld/4741795572/in/set-72157624236184769), Oil tanker leak [on tracks beside Mississippi River](/notes/marlokeno/02-12-2014/cp-rr-oil-tanker-leak-from-red-wing-to-winona-mn-beside-mississippi-river), by @marlokeno, swabbing a street grate by @warren_

****

#### Containers and labeling

Use glass bottles with very secure sealing lids to store samples, and keep them in a dark box or room. Label sample bottles with the **date, time, and location**. If you also give it a unique number, any other information can be kept in a notebook next to that number, such as further notes on the location and its condition. Take a photo of the sample with your label, in the place you found the sample, for context. 

This photo is of a sample already dissolving in mineral oil, but typically we've collected relatively dry samples and dissolved them later. You can put a small amount into an empty sample jar or use the cue tips to put residue directly into mineral oil as in the next step.

[![tmp_4526-IMG_20140804_1447261450697028.jpg](https://i.publiclab.org/system/images/photos/000/006/029/medium/tmp_4526-IMG_20140804_1447261450697028.jpg)](https://i.publiclab.org/system/images/photos/000/006/029/original/tmp_4526-IMG_20140804_1447261450697028.jpg)

****

#### Preparing samples

Use a cotton swab or small brush, dipped in mineral oil, to break up some of the material and dissolve it in a glass jar of mineral or baby oil. Wear gloves before handling suspected pollutants. You may need to rub the sample for a while to get it to dissolve. If it does not dissolve, [there may be more aggressive ways to dissolve it](#Dissolving+samples). Where possible, try not to put too much sand or other stuff in the jar, but once the sample is dissolved these will fall to the bottom. It's a good idea to keep extra samples (dry, as you found them) in glass jars, stored in a cool dark place, as there may be an opportunity to test them later with more expensive, official means (see [Validate your results](#Validate+your+results) below). 

[![IMG_0878.JPG](https://i.publiclab.org/system/images/photos/000/003/228/medium/IMG_0878.JPG)](https://i.publiclab.org/system/images/photos/000/003/228/original/IMG_0878.JPG)

Seal the bottle tightly with the cap. You can then gently swirl the bottle to help the residue to dissolve, but try to avoid getting your sample in contact with the lid, especially if it is plastic. It may take some time before the mineral oil takes on a distinct but faint yellowish hue and you may then have to wait for the sediment to settle out. You want the liquid to be quite translucent, with the chunky stuff settled to the bottom. 

Once you're ready to sample, use an eyedropper to transfer a small amount of the dissolved liquid to a cuvette for scanning. The square, flat, optically clear sides of the cuvette will make it easier to shine a laser directly through with no distortion, and to line up the generated light with your spectrometer.

****

#### Concentration

One big issue is getting the correct concentration of sample dissolved. If it's too little, we may not be able to get it to glow under UV light. Too much and it could be too dark for the light to be visible in the bottle. Ideally we'd like to have the same concentration in each sample bottle, but determining this is very difficult as the samples may be mixed, so they can't easily be weighed. We recommend going by how dark they are -- try for a color similar to very dilute tea:

[![dilute.JPG](https://i.publiclab.org/system/images/photos/000/010/505/medium/dilute.JPG)](https://i.publiclab.org/system/images/photos/000/010/505/original/dilute.JPG) [![too-dark.png](https://i.publiclab.org/system/images/photos/000/010/504/medium/too-dark.png)](https://i.publiclab.org/system/images/photos/000/010/504/original/too-dark.png)

_The darker sample by @eustatic is too dark for the laser to get through_

****

## Scan

Now that your sample is prepared, you may be able to get it to fluoresce or glow by shining an ultraviolet light through it. We have had good results using a blue/UV laser, a 405 nanometer laser which is the same as found in a Blu-Ray player. See [the parts list](/wiki/oil-testing-kit-construction#Parts+list) for where to buy one. Strong UV LEDs can also work, but are not as bright. They are, however, easier to line up with a spectrometer's opening slit. LEDs are also not as narrow wavelength laser, so they could produce different resultant fluorescence spectra. 

[![IMG_0887.JPG](https://i.publiclab.org/system/images/photos/000/003/232/medium/IMG_0887.JPG)](https://i.publiclab.org/system/images/photos/000/003/232/original/IMG_0887.JPG)

<div class="alert">Don't look at the laser, as it can hurt your eyes, even if you're not pointing it directly at your eye! Use yellow glasses and only turn it on when completely enclosed in the box. <a href="/wiki/oil-testing-kit-warning">Read more about laser safety here &raquo;</a></div>

Note that the laser will have a purple-ish color by itself (as seen in the lead image at the top of the page) -- this is not fluorescence, but just scattering of the laser light. What you're looking for is any other color -- whitish, bluish, greenish -- which is not from the laser, but is produced in the material itself as it's excited by the UV light. 

To measure precisely the colors that are being produced, we will use Public Lab's DIY [Desktop Spectrometer v3.0](/wiki/desktop-spectrometry-kit-3-0) and the companion [Oil Testing Kit](/wiki/oil-testing-kit-construction), which you can build yourself or [purchase as a kit](http://store.publiclab.org/collections/spectrometry). 

[fold:Expand to learn more about spectrometry]

[![fluorescence-spec-diagram.png](https://i.publiclab.org/system/images/photos/000/005/470/large/fluorescence-spec-diagram.png)](https://i.publiclab.org/system/images/photos/000/005/470/original/fluorescence-spec-diagram.png)

#### How fluorescence spectrometry works

Colored light is often a blend of different colors. A spectrometer is a device which splits those colors apart, like a prism, and measures the strength of each color. A typical output of a spectrometer looks like this **spectrum of the daytime sky**, with the actual light spectrum at the top and the graph of wavelength (horizontal axis) and intensity (vertical axis) below:

[![sky.png](https://i.publiclab.org/system/images/photos/000/005/455/original/sky.png)](https://spectralworkbench.org/analyze/spectrum/19882)

While there are many ways to use a spectrometer, in this case  we're causing the samples to glow by exciting them with a high-energy UV light. When we scan the fluorescence from an oil sample, we can clearly see the laser color, or wavelength, which is only in a narrow range around 405 nanometers, to the left:

[![oil-spectrum.png](https://i.publiclab.org/system/images/photos/000/005/456/original/oil-spectrum.png)](https://spectralworkbench.org/analyze/spectrum/14919)

All the remaining light, to the right of that tall peak, is produced by the excited material in the sample. The **shape of that curve** can be matched against other samples to help us identify what ours is. But first, we'll need a spectrometer. See [Oil Testing Kit Construction](/wiki/oil-testing-kit-construction) for how to get and assemble one. 

[unfold]

#### Illuminate the sample

The basic idea is that you need to illuminate your sample with a laser beam perpendicularly to the direction your spectrometer is pointing, and to align it so that you can see enough light. See how the Oil Testing Kit attachment for the Public Lab Spectrometer keeps the device lined up with a sample container and perpendicular to a laser:

[![otk-perpendicular.jpg](https://i.publiclab.org/system/images/photos/000/010/499/medium/otk-perpendicular.jpg)](https://i.publiclab.org/system/images/photos/000/010/499/original/otk-perpendicular.jpg)

Even with the cover flap, you may want to turn the lights off and close the blinds so that you reduce ambient light from the room. When actually using the spectrometer, cover the laser entirely with the flap described [on the construction page](/wiki/oil-testing-kit-construction#Assembly), as shown here, and wear yellow protective glasses against any light that leaks out:

[![IMG_20150803_133625_2.jpg](https://i.publiclab.org/system/images/photos/000/011/027/medium/IMG_20150803_133625_2.jpg)](https://i.publiclab.org/system/images/photos/000/011/027/original/IMG_20150803_133625_2.jpg)

You'll want to see something like this in the software:

[![oil-spectrum-range.png](https://i.publiclab.org/system/images/photos/000/005/458/original/oil-spectrum-range.png)](https://spectralworkbench.org/analyze/spectrum/14919)

If you don't, but you can visibly see fluorescence in your container with the naked eye ([see below](#Compare) for examples), check that the laser is aligned to pass right in front of the spectrometer slit -- this should be ensured by the design of the OTK attachment. For help on this step (or any other), post a question on the site and someone will help you out:

[question:oil-testing-kit] 

You want the curve to the left of the tall peak (which is the laser) to be mostly between 25% and 75% intensity, so it's not "clipping" by being too bright but you're getting enough light to see a clear shape amongst the noise. You should also use "RGB mode" (in the Tools section of a saved spectrum page) to check that none of the three channels is overexposed. You may also see an automated warning for overexposure, which checks for this same issue:

[![RGB.png](https://i.publiclab.org/system/images/photos/000/007/350/thumb/RGB.png)](https://i.publiclab.org/system/images/photos/000/007/350/original/RGB.png)

#### Tuning brightness

This process of getting the right amount of light into the spectrometer can be difficult, but there is a provided strip of acetate designed to help dim (or attenuate) the light coming into the spectrometer. It looks like the following image, and can be inserted into a slit in the OTK attachment to control the amount of light reaching the spectrometer:

[![IMG_20150407_150502-2.jpg](https://i.publiclab.org/system/images/photos/000/010/506/medium/IMG_20150407_150502-2.jpg)](https://i.publiclab.org/system/images/photos/000/010/506/original/IMG_20150407_150502-2.jpg)

****

#### Refine your technique

Once you get a basic scan, save and label it, but consider some of these techniques to improve your data collection: 

* take several scans (we recommend three) for each sample using the same technique, and label them #1, #2 -- compare them to evaluate if the spectra are consistent
* scan multiple samples from the same site to see if the samples are representative of an area
* smooth your data [using the macro described in this note](/notes/warren/09-23-2014/better-smoothing-and-equalizing-graph-height-for-comparison-of-oil-spectra)

Once you're confident that your sampling is consistent and rigorous, you're ready to start comparing the data you've collected.

****

## Compare

When identifying oil, we are hoping to measure the color of fluorescence of the Poly-Aromatic Hydrocarbons (PAHs) in the sample. The best way to identify a sample would be to compare it to a selection of similarly-prepared known reference materials. For example, if you have unknown X, you could compare it to both: A) a **known sample of crude oil** and B) a **known uncontaminated sample of material** (perhaps soil) to see which it matches best. 

[![x-a-b.png](https://i.publiclab.org/system/images/photos/000/005/450/medium/x-a-b.png)](https://i.publiclab.org/system/images/photos/000/005/450/original/x-a-b.png)

**Which is it more like?** Ideally, it should be compared to a range of possible references. For example, if it's possible the sample is heating oil or motor oil, you could compare it to similarly prepared samples of those as well. [Some research has shown](/notes/warren/11-25-2013/poster-on-issues-with-pah-detection-in-fish) that vitamins A and E can produce fluorescence similar to petroleum products.

### Set up a comparison

<div class="alert alert-warning">This section is under construction -- it will be updated with the new Oil Testing Kit Beta prototype design.</div>

Read over ​[this detailed research note](/notes/mathew/09-19-2014/grading-oils-with-uv-fluorescence) to see how to compare your sample to a range of different weights of oil -- but keep in mind that since it was published, we've vastly improved noise reduction (smoothing) and comparison features [as described in this note](/notes/warren/09-23-2014/better-smoothing-and-equalizing-graph-height-for-comparison-of-oil-spectra).

(photo of provided samples)

### Oil Testing Kit Beta procedure

Not every experiment will follow this pattern, but we're standardizing the basic test in order to validate this technique. If you're part of the OTK Beta program, follow these steps; you can use this as a template for your own experiment:

1. Scan each of the (#) labeled and unknown samples in your Beta package pictured above on [Spectral Workbench](https://spectralworkbench.org), ensuring the appropriate intensity range using the attenuator strip.  Take triplicate scans of each sample and label them `OTK_(sample#, e.g. 20W50)_a`, `OTK_(sample#)_b`, etc
2. In the notes section for each scan, record the excitation source used (e.g. Blu-Ray 405 nm laser), any attenuation, any dilution done, ambient lighting conditions, and any other relevant information.
3. For each analytical session, make a CFL calibration scan, and use that to calibrate each scan performed in that session. 
4. Tag each with `oil-testing-kit`
5. Run the "Auto smooth" macro in the "More Tools" menu (shown below) on **each** spectrum.
6. Add all your scans to a set.
7. Use the "Equalize area" button below the graph on the set display page
8. Use the "Find graph 'centers' only between 410-700nm" tool under "More tools" in the set display page
9. Take a screenshot of the resulting graph and [post it to this site as a research note](/post?tags=oil-testing-kit,spectrometer,oil-testing-kit-beta) along with a link to your set. 

[![IMG_20140722_230007_2.jpg](https://i.publiclab.org/system/images/photos/000/005/452/large/IMG_20140722_230007_2.jpg)](https://i.publiclab.org/system/images/photos/000/005/452/original/IMG_20140722_230007_2.jpg)

[![smooth.png](https://i.publiclab.org/system/images/photos/000/010/516/medium/smooth.png)](https://i.publiclab.org/system/images/photos/000/010/516/original/smooth.png)

[![Screen_Shot_2014-07-23_at_12.04.33_AM.png](https://i.publiclab.org/system/images/photos/000/005/453/original/Screen_Shot_2014-07-23_at_12.04.33_AM.png)](https://spectralworkbench.org/sets/show/745)

####Calibration and intensity

Your spectrometer [should be calibrated](/wiki/spectral-workbench-calibration) and the very tall peaks from the laser light should align if this has been done correctly. If your scans are too dim (mostly under <25%) or too bright (hitting the 100% ceiling), you may want to try re-running them. 

If your scans were not made with the same amount of light, or if the spectrometer was not aligned the same way, two scans of the same material may not appear the same on your plot -- which would make it hard or impossible to see whether or not your sample is a good match. [Some research suggests](/notes/warren/3-2-2011/spectral-comparison-tutorial-amateur-astronomers) that such spectra should be comparable if their area is equalized -- this [remains to be demonstrated].(#Challenges)

#### Positive and negative controls

When trying to assess what type of material is in an unknown sample, it is best to analyze the unknown and a known sample of that material in the same analytical session, if possible.  In order to assess the influence of the mineral oil used to dissolve or dilute your sample, take triplicate scans of the mineral oil without any sample added, and compare the spectra of mineral oil with and without added sample.  These mineral oil samples are considered "blanks" or "negative controls."  In addition to these measures, think critically about your testing techniques and any possibility for error. Could there have been stray light, was the fluorescence intensity of your spectra too bright or too dim? Was the spectrometer perpendicular to the excitation source? Did you use a fresh eye dropper and cuvette for each sample, or is there the possibility for cross-contamination? Are there mistakes you could have made? Evaluate the reproducibility of the spectra of each sample, and evaluate the precision of the match you've found between your unknown sample and your references. Could another material produce the same color spectrum as your suspected contaminant, and fool your test? (See [this research on Vitamins E and A causing such false positives](/notes/warren/11-25-2013/poster-on-issues-with-pah-detection-in-fish)). 

#### Validate your results

An extra step that may give your work more credibility is to submit a few of your samples for analysis to a lab, or to [use other tests](/notes/warren/01-16-2014/reagent-based-pah-voh-pcb-testing-kits-for-soil-and-water-with-pricing) to confirm your results. Alternatively, if you know other testing has occurred, you can try to extend its results by re-testing the same site or samples, correlating your results with the previous test, and performing your own tests over a larger area or on more sites, or over a longer time span.

#### Publish

Ask others to critique your work or help you refine it [on the plots-spectroscopy discussion list](/lists) or by [posting a research note thoroughly describing your results](/post?tags=sampling,oil-testing-kit,spectrometer). Even if your work is not done, it's a great idea to share and solicit feedback on your plan before, during, and after you've done the work. You may be able to build on previous work on the website, and your work will help others who are seeking to perform similar tests.

****

## Hazards

Please do not use the provided blue laser outside the Oil Test Kit frame, and cover the sample chamber while activating the laser. [Review important laser safety guidelines here](/wiki/oil-testing-kit-warning)

Please use gloves and handle oils only in a well-ventilated area. Do not touch oils with your bare skin.

Please read the Material Safety Data Sheet (MSDS) for each oil type included in the Oil Testing Kit: 

<a href="https://i.publiclab.org/system/images/photos/000/010/860/original/MSDS_5W30_motor_oil_Hess.pdf"><i class="icon icon-file"></i> MSDS_5W30_motor_oil_Hess.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/010/861/original/MSDS_20W50_Gulfpride.pdf"><i class="icon icon-file"></i> MSDS_20W50_Gulfpride.pdf</a> 

<a href="https://i.publiclab.org/system/images/photos/000/010/863/original/MSDS_crude_oil_sweet_Hess.pdf"><i class="icon icon-file"></i> MSDS_crude_oil_sweet_Hess.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/010/862/original/MSDS_80W90_Lucas.pdf"><i class="icon icon-file"></i> MSDS_80W90_Lucas.pdf</a> 

<a href="https://i.publiclab.org/system/images/photos/000/010/864/original/MSDS_Diesel_fuels_Hess.pdf"><i class="icon icon-file"></i> MSDS_Diesel_fuels_Hess.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/010/865/original/MSDS_gasoline_Hess.pdf"><i class="icon icon-file"></i> MSDS_gasoline_Hess.pdf</a>


## Disposal

[AutoZone](https://duckduckgo.com/?q=!gm AutoZone) and [Napa Auto Parts](https://duckduckgo.com/?q=!gm Napa Auto Parts) both accept used oil for proper disposal/recycling. Also see the American Petroleum Institute's search page for disposal centers near you: http://search.earth911.com/american-petroleum-institute.php

If you have **no other options**, we are willing to mail you a shipping label to send your used samples, well sealed and bagged in their original packaging, back to us for proper disposal. Please contact staff@publiclab.org if you need this service, and please use it as a last resort only. 

****

### Dissolving samples

We use mineral oil as it's non-toxic and cheap, and can be purchased in most pharmacies as either mineral oil or "baby oil". Be aware that most baby oils have "fragrance" added, and the influence of these unspecified fragrant compounds on fluorescence has not been evaluated in this project yet. Some samples you collect may not dissolve readily, and more aggressive solvents may be able to dissolve these, such as methanol or denatured alcohol. These are not as safe to handle, however, so we advise caution if you attempt this. **Please [post a research note](/post?tags=sampling,oil-testing-kit,spectrometer) if you attempt this, as it is an unexplored area.**

### Challenges

This document, and this methodology, is still under active development. What you see on this page is only the best attempt so far at collating and presenting the [work of Public Lab contributors to date](/tag/spectrometer). Some of the challenges that remain include:

* developing a better, simpler method for getting consistent concentrations of sample dissolved
* determining if [normalizing the area under the curve](/notes/warren/3-2-2011/spectral-comparison-tutorial-amateur-astronomers) (in software) for different samples may make consistent concentration less important -- can matching still succeed?
* developing a quick-to-assemble but precise and durable and cheap version of [Public Lab's DIY spectrometer for scanning samples](/wiki/spectrometer)
* scanning known samples of oil for use in comparisons
* determining if it's necessary to scan references (and have crude samples) when testing, or if we can rely on previously scanned references -- are scans consistent enough or do we have to [mail crude around](/notes/warren/05-03-2013/crude-oil-samples-for-purchase-online)?
* exposure: how do we ensure enough light from the sample enters the spectrometer, and (when using a laser) that aligning the light with the slit is easy? 
* developing a way to [save smoothed data](/notes/warren/10-09-2013/trying-to-detect-emission-lines-in-flare-spectra-from-chalmette) in SpectralWorkbench

Be sure to [share your research](/post?tags=spectrometer,oil-testing-kit,fluorescence) as you tackle these questions -- publish early and often! Remember that every additional step can add complexity and cost to the process, so always keep in mind what such steps achieve, and balance that against the potential barrier to entry they cause.

#### Variations

There are many variations of the process which could be useful. These include:

* collecting samples from a sheen on the surface of the water -- which may be difficult as sheens are extremely thin and spread out
* measuring fluorescence in-situ on the ground, without collecting or concentrating samples in a jar -- which could be difficult as it's very dilute and mixed with other things like water, dirt, or plant matter

Many of these may be future goals of the project, but we are focusing on our primary use case of collecting contaminated soil or residue from the ground, dissolving it in mineral oil, and illuminating it with UV in a visible-range spectrometer.

****

### Resources

* [Illustrations for the Oil Testing Kit](/wiki/oil-testing-kit-illustrations)