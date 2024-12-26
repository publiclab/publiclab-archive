---
title: "Optical Imaging of Passive Particle Monitors"\ntagnames: 'air-quality, dust, particulates, silica, frac-sand, pm, particle-sensing, particle-monitoring, fracsand, microscope, passive-particle-monitors, passive-pm, parent:frac-sand, activity:microscope, microscopes, activity:microscopes, particle-imaging'
author: mathew
path: /notes/mathew/09-03-2015/optical-imaging-of-passive-particle-monitors.md
nid: 12194
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/011/446/original/20xfrac_snd17-contrast.jpg)

# Optical Imaging of Passive Particle Monitors

by [mathew](../profile/mathew) | September 03, 2015 03:08

September 03, 2015 03:08 | Tags: [air-quality](../tag/air-quality), [dust](../tag/dust), [particulates](../tag/particulates), [silica](../tag/silica), [frac-sand](../tag/frac-sand), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [particle-monitoring](../tag/particle-monitoring), [fracsand](../tag/fracsand), [microscope](../tag/microscope), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [parent:frac-sand](../tag/parent:frac-sand), [activity:microscope](../tag/activity:microscope), [microscopes](../tag/microscopes), [activity:microscopes](../tag/activity:microscopes), [particle-imaging](../tag/particle-imaging)

----

This is an attempt to document the steps in a method of imaging for the passive monitor [you can make with instructions here](/notes/mathew/09-02-2015/replicating-a-passive-dust-monitor-method), as written in:  

Darrin K. Ott, William Cyrs, Thomas M. Peters. Passive measurement of coarse particulate matter, PM10-2.5. Aerosol Science 39 156 – 167 (2008)

###Prepping the glass cover slip
Starting from these instructions:

“Sample collection was started by removing the tape tab and ended by re-covering the passive sampler with a clean tape tab. The sample was prepared for analysis in a clean, designated area of the laboratory by removal of the mesh cap and placement of the SEM mount in a holder. The cover glass was marked with a focusing dot just outside of the circle drawn to delineate the boundary of the sample area. This dot facilitated focus of the microscope on the plane of particle deposition. With forceps, the substrate was inverted and placed face down on the center of a clean microscope slide that had been cleaned in the same manner as the substrate described above. The substrate was then held in place on the slide with two pieces of tape. Care was taken to ensure that the tape did not cover the marked circle or the focusing dot.”

Questions arise: _How do we draw a circle to designate the boundary of the sample area? What should the slide look like that the slide cover is attached to?_ I have a fairly definitive answer to the second question, and an inconclusive one to the first question.

####Marking a focus point and a circle
marking a focus point is easy.  just dab a pen down away from the 
I tried marking a circle,  and it was too hard.  

[![IMG_20150902_172708.jpg](https://i.publiclab.org/system/images/photos/000/011/439/medium/IMG_20150902_172708.jpg)](https://i.publiclab.org/system/images/photos/000/011/439/original/IMG_20150902_172708.jpg)

I instead marked four dots at points along the circle while still in the cap.  I don’t know how I’d draw a circle after removing from the cap, sitting on a tiny SEM with no adhesive.  that just seems beyond difficult.  it is very precarious:

[![IMG_20150902_182856.jpg](https://i.publiclab.org/system/images/photos/000/011/440/medium/IMG_20150902_182856.jpg)](https://i.publiclab.org/system/images/photos/000/011/440/original/IMG_20150902_182856.jpg)

I also thought back to the sizing of the Ott et al. sample area vs. the Wagner & Leith sample area.  Ott’s sample area is .8mm narrower than Wagner and Leith’s 6.8mm sample area.  is that to account for marking under the cap? Ott et al. don’t explain this size difference. 

####What kind of Slide?
 
[Ott et al [page 158] suggest taking 40 images over ~70% of the 6mm circular sample on the glass cover slip.  What does that look like? I wondered if there was a standard lab procedure.  Andrew Maselli suggested a grid on a slide.  I looked up standard grid slides and grids of the size “one low-powered field” (100X) are [1.45mm wide](http://labscientific.com/Histology/Microscope-Slides/Grid-Slides/).  

[![Screen_Shot_2015-09-02_at_7.46.38_PM.png](https://i.publiclab.org/system/images/photos/000/011/437/medium/Screen_Shot_2015-09-02_at_7.46.38_PM.png)](https://i.publiclab.org/system/images/photos/000/011/437/original/Screen_Shot_2015-09-02_at_7.46.38_PM.png)

Laying such a grid across a 6mm circle, the size of our sample area, it appears that there are 40 complete squares, and that the circle is roughly 55 squares in area, so the fields represent ~70% of the sample area. 

[![Screen_Shot_2015-09-02_at_7.45.29_PM.png](https://i.publiclab.org/system/images/photos/000/011/436/medium/Screen_Shot_2015-09-02_at_7.45.29_PM.png)](https://i.publiclab.org/system/images/photos/000/011/436/original/Screen_Shot_2015-09-02_at_7.45.29_PM.png)

**It seems the glass cover slip should be taped face down on a low-powered field grid slide. but…**

Can we capture a full low powered field grid in one image? 
Ott et al. (pg 158) imaged the slide at 1064 x 1280 pixels at 100x optical resolution (10x objective lens), with a resolution of 0.524μm per pixel.  This is a 557.5μm x 670.7μm stage,  about 1/5 the size of a 1450μm “low power field” sample size…   
I don’t really know what to make of that.

###Imaging the slide
Andrew Maselli suggested focusing down the the plane of the grid, centring a grid square, then focusing up to the plane of dust and imaging there.  This requires setting a focus height for the focusing dot, and returning to that height. 

The light of the microscope will also have to be focused on the dust plane. 

Andrew Maselli also suggested using the “bright field” setting on the microscope, which produces a nice high-contrast image.  This image taken with a Zeiss Axial Observer z1, a very expensive microscope.

[![farc_snd6_(c6).jpg](https://i.publiclab.org/system/images/photos/000/011/438/medium/farc_snd6_%28c6%29.jpg)](https://i.publiclab.org/system/images/photos/000/011/438/original/farc_snd6_%28c6%29.jpg)
 
compared to a color image taken with a less expensive Zeiss
Axioskop which costs about $1000 used:

[![20xfrac_snd17.jpg](https://i.publiclab.org/system/images/photos/000/011/449/medium/20xfrac_snd17.jpg)](https://i.publiclab.org/system/images/photos/000/011/449/original/20xfrac_snd17.jpg)

Both of these would probably work well with the software, where we’re going to be sizing particles in ImageJ, and will need some custom algorithm that makes a strong threshold between light and dark and ”fills holes,” or light spots in otherwise black particles on a white background.

The light field image produces clearer particles:

[![farc_snd6_(c6)-contrast.jpg](https://i.publiclab.org/system/images/photos/000/011/443/medium/farc_snd6_%28c6%29-contrast.jpg)](https://i.publiclab.org/system/images/photos/000/011/443/original/farc_snd6_%28c6%29-contrast.jpg)

[![20xfrac_snd17-contrast.jpg](https://i.publiclab.org/system/images/photos/000/011/444/medium/20xfrac_snd17-contrast.jpg)](https://i.publiclab.org/system/images/photos/000/011/444/original/20xfrac_snd17-contrast.jpg)

### Next steps… 
Using ImageJ and extrapolating mass concentrations!

Ott et al validated their process by imaging NIST traceable 5-μm borosilicate glass microspheres (Catalog # 9005, Duke Scientific, Fremont, CA).
