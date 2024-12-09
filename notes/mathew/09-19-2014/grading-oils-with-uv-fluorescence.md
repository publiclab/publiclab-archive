---
title: Grading oils with UV fluorescence
tagnames: spectrometer, laser, fluorescence, crude, oil-testing-kit, 405nm
author: mathew
path: /notes/mathew/09-19-2014/grading-oils-with-uv-fluorescence.md
nid: 11163
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/006/905/original/IMG_20140918_123107.jpg)

# Grading oils with UV fluorescence

by [mathew](../profile/mathew) September 19, 2014 17:44

September 19, 2014 17:44 | Tags: [spectrometer](../tag/spectrometer), [laser](../tag/laser), [fluorescence](../tag/fluorescence), [crude](../tag/crude), [oil-testing-kit](../tag/oil-testing-kit), [405nm](../tag/405nm)

----

###What I want to do
I want to be able to grade oils from light to heavy. I'm going to use a means of UV Fluorescence with a 405nm laser pointer. I'll look at the emission spectra and see if I get a shift of the spectra's peak from green to blue as I move from light to heavy oils.  My goal is to replicate a UV Fluorescence technique used in UV LIDAR research.

[previously...](/notes/mathew/09-17-2014/laser-pointers-and-the-lif-literature).

Also,

* Can I replicate the location of emission spectra from a 337nm Nitrogen laser?
* Can I see peak transition in oil grades from light to heavy oils? 
 * what about motor oils?
 * can I distinguish diesel from crude?  
###My attempt and results

#### the setup
The target oils were things I could find nearby-- a few grades of motor oil, some gear oil, crude oil from North Dakota, and deisel fuel.  The idea is lighter oils should have a greener peak, and heavier ones a blue peak.

I started with a rectangular cuvette that @warren sent me and filled it with 1ml of mineral oil.   

[![IMG_20140918_113547.jpg](https://i.publiclab.org/system/images/photos/000/006/902/medium/IMG_20140918_113547.jpg)](https://i.publiclab.org/system/images/photos/000/006/902/original/IMG_20140918_113547.jpg)

 I determined concentration by adding single drops of the target oils.

[![IMG_20140918_115204.jpg](https://i.publiclab.org/system/images/photos/000/006/904/medium/IMG_20140918_115204.jpg)](https://i.publiclab.org/system/images/photos/000/006/904/original/IMG_20140918_115204.jpg)


####results

#####do the different solutions have the same peaks?

These different concentration spectra seem to have similar peaks between 1-3nm apart. 
<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/1458'></iframe>

the higher concentrations gave me a spectra with a clear cutoff, as if I saturated the image.  Is this correct?** I want to trust the lower intensity spectra more.  should I?
**
<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/1456'></iframe>

<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/1455'></iframe>

<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/1454'></iframe>

#####Do I see a shift from green to blue as the oil gets lighter?

######Motor Oils
Will the heavier 80W-90 have a more blue peak than the 20W-50?

* 5W-30 has a peak at 444nm
* 20W-50 at 436-8nm
* 80W-90 at 432-435nm

<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/1461'></iframe>

Well, they seem to roughly follow the blue shift pattern

2-cycle is unlabeled, and so its grade isn't known.  but it has a peak at 445

######Crude Oil & Diesel
I see 10nm between North Dakota crude and Diesel. The North Dakota crude is dissolved 1 droplet in 2ml of mineral oil, the diesel is undiluted, I am comparing them at similar fluorescences, not concentrations.  

<iframe width='500px' height='200px' border='0' src='https://spectralworkbench.org/sets/embed/1460'></iframe>


Is that good? I'm not really sure.  it seems like less of a gap than between different grades of crude.

###Questions and next steps

I need people to replicate this experiment.

**Hypotheses:**
1) by varying the concentration of the target oil to get a lower, less blown out spectrum. true or not?


###Why I'm interested
To distinguish crude oil from fuel oil, and ultimately from organic naturally occuring substances  that also fluoresce, such as decaying organic matter (DOM) or humic acid.
[![IMG_20140918_123107.jpg](https://i.publiclab.org/system/images/photos/000/006/903/medium/IMG_20140918_123107.jpg)](https://i.publiclab.org/system/images/photos/000/006/903/original/IMG_20140918_123107.jpg)
