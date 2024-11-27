---
nid: 12651
title: passive-pm-analysis
path: public/static/wiki/passive-pm-analysis.md
uid: 4
tagnames: parent:passive-pm
---

# passive-pm-analysis

###Analysis Prep
In analyzing passive particle monitors, we’ll collect a glass slide cover with a 6mm circle of dust that has settled over 1-10 days in a [passive particle monitor](http://publiclab.org/notes/mathew/09-02-2015/replicating-a-passive-dust-monitor-method) we've [imaged](http://publiclab.org/notes/mathew/09-03-2015/optical-imaging-of-passive-particle-monitors).

[![glass slide with a dot drawn on it](https://i.publiclab.org/system/images/photos/000/011/458/medium/Screen_Shot_2015-09-03_at_5.21.06_PM.png)](https://i.publiclab.org/system/images/photos/000/011/458/original/Screen_Shot_2015-09-03_at_5.21.06_PM.png)

We’ll take a survey of 40 images ([see note on imaging](http://publiclab.org/notes/mathew/09-03-2015/optical-imaging-of-passive-particle-monitors)) of the glass slide cover at 100x:

[![forty different sample squares](https://i.publiclab.org/system/images/photos/000/011/459/medium/Screen_Shot_2015-09-02_at_7.45.29_PM.png)](https://i.publiclab.org/system/images/photos/000/011/459/original/Screen_Shot_2015-09-02_at_7.45.29_PM.png)

We’ll then process the images in full-contrast black and white and fill any “holes” in the image so that the image can be processed more easily. We’ll use ImageJ, which may have standard functions for contrast if not hole filling, though Ott and Peters used it to do that.

[![20xfrac_snd17-contrast.png](https://i.publiclab.org/system/images/photos/000/011/460/medium/20xfrac_snd17-contrast.png)](https://i.publiclab.org/system/images/photos/000/011/460/original/20xfrac_snd17-contrast.png)

Each individual particle will be sized as if it was a circle of the same area (projected area diameter) as the as the particle's outline (the projected area) and measured for circularity. Circularity is a ratio of the area to perimeter: 1 / (4π gravity x Area / Perimeter^2) Again, we’ll use ImageJ, which should have standard functions for this.   

[![areavsperimeter.jpg](https://i.publiclab.org/system/images/photos/000/011/461/medium/areavsperimeter.jpg)](https://i.publiclab.org/system/images/photos/000/011/461/original/areavsperimeter.jpg)

At this stage we’ll know:

* number of images x image area = survey area 
* number of  PM2.5 & of PM10 -sized particles on the survey area
* time the monitor was exposed.

 we want to figure out what the average mass concentration of dust was in the air over the sample period, in a micrograms per cubic meter (μg/m^3) equivalent. 

We’ll be following the mass concentration analysis used in on field samples in Ott et al.  I’ve tried to collect a procedure, for a deeper explanation please read the paper: 

> Darrin K. Ott, Naresh Kumar, Thomas M. Peters. Passive sampling to capture spatial variability in PM10–2.5. Atmospheric Environment 42 746–756 (2008)

…with supplementary information from its references: 

> Darrin K. Ott, William Cyrs, Thomas M. Peters. Passive measurement of coarse particulate matter, PM10-2.5. Aerosol Science 39 156 – 167 (2008)


> [Jeff Wagner and Janet M. Macher. Comparison of a Passive Aerosol Sampler to Size-Selective Pump Samplers in Indoor Environments. AIHA Journal 64 630–639 (2003)](http://www.unc.edu/courses/2006spring/envr/116l/001/AIHAJ%2064%20630-639%20%282003%29%20Wagner%20and%20Macher.pdf)


> Jeff Wagner and David Leith. Passive Aerosol Sampler. Part I: Principle of Operation. Aerosol Science and Technology 34: 186– 192 (2001)


> Jeff Wagner and David Leith. Passive Aerosol Sampler. Part II: Wind Tunnel Experiments. Aerosol Science and Technology 34: 193– 201 (2001)


> [Hinds, W.C. (1999). Aerosol technology: properties, behavior, and measurement of airborne particles. New York: Wiley. ISBN 0-471-19410-7](ftp://ftp.cdc.gov/pub/Documents/OEL/02.%20Kuempel/References/Hinds_1999-Aerosol%20technology.pdf)

I’ve used annotation that is more “pseudocode” than math annotations in text, and then drawn the symbolic math by hand because I don't know how to do math annotation on a computer (this research note probably accepts [LaTeX](https://en.wikibooks.org/wiki/LaTeX/Mathematics) syntax but i don't know it)
###Calculating Individual Particle Mass

the mass of the particle is a volume times particle density, corrected for the relative circularity of the particle:

Mass = (π/6) x particleDensity x (projectedDiameter / ParticleCircularity)^3

[![Untitled-6.jpg](https://i.publiclab.org/system/images/photos/000/011/466/medium/Untitled-6.jpg)](https://i.publiclab.org/system/images/photos/000/011/466/original/Untitled-6.jpg)

particle circularity is: 1 / (4π gravity x Area / Perimeter^2) 

We know the projected-area diameter and circularity of each particle, and we can assume, as Ott et al. and Wagner & Macher 2003 did, that dust is 2g/m^-3.  

They assume this number because particle density has a smaller effect on the results than other factors and is hard to know over a varied sample period.  We can pick a different concentration from the literature or based on test results of background dust characteristics from a filter-based assessment (more on page 157, Ott et al.). 

###Calculating a particle’s contribution to the mass concentration

The Contribution of the particle is the mass flux of the particle divided by its deposition value

Contribution = massFlux / depositionValue

[![Untitled-1.jpg](https://i.publiclab.org/system/images/photos/000/011/463/medium/Untitled-1.jpg)](https://i.publiclab.org/system/images/photos/000/011/463/original/Untitled-1.jpg)

unpacking this (explained below) into one equation, we get

Contribution = [Mass / (sampleArea x Time)] / [ [[(particleDensity x projectedDiameter^2) / (18 x dynamicViscosity)] x g] x .00595 x [[projectedDiameter x [(particleDensity x projectedDiameter^2) / (18 x dynamicViscosity)]g] / kinematicViscosity]^-0.439 ]

[![contribution.jpg](https://i.publiclab.org/system/images/photos/000/011/464/medium/contribution.jpg)](https://i.publiclab.org/system/images/photos/000/011/464/original/contribution.jpg)

**I could use help understanding what the kinematicViscosity or dynamicViscosity are, all other numbers accounted for**

####Mass Flux of the Particle

I don’t really know what mass flux means but its the mass of a particle divided by the total sample area times the total sample time:

massFlux = Mass / sampleArea x Time

[![Untitled-2.png](https://i.publiclab.org/system/images/photos/000/011/465/medium/Untitled-2.png)](https://i.publiclab.org/system/images/photos/000/011/465/original/Untitled-2.png)

####Deposition Value of a Particle
The deposition value of particle is the ambient deposition value multiplied by an empirical “mesh factor” derived in a wind tunnel data in Wagner and Leith Pt. II.

depositionValue = depositionAmbient x meshFactor

[![Untitled-2-2.png](https://i.publiclab.org/system/images/photos/000/011/467/medium/Untitled-2-2.png)](https://i.publiclab.org/system/images/photos/000/011/467/original/Untitled-2-2.png)

#####Ambient Deposition factor
Ott et al. ’s deposition factor is the “relaxation time of the particle” multiplied by gravitational constant.

depositionAmbient = relaxationTime x gravity

[![Untitled-4.jpg](https://i.publiclab.org/system/images/photos/000/011/468/medium/Untitled-4.jpg)](https://i.publiclab.org/system/images/photos/000/011/468/original/Untitled-4.jpg)

relaxationTime = (particleDensity x projectedDiameter^2) / (18 x dynamicViscosity)

[![Untitled-5.jpg](https://i.publiclab.org/system/images/photos/000/011/469/medium/Untitled-5.jpg)](https://i.publiclab.org/system/images/photos/000/011/469/original/Untitled-5.jpg)

#####Mesh Factor
the mesh factor is a “best fit” line for emipirical data.  It depends on the relaxation time like the ambient deposition factor, and something called kinematic viscosity of air:

.00595 [(projectedDiameter x relaxationTime x gravity) / kinematicViscosity)^-0.439

[![Untitled-3.jpg](https://i.publiclab.org/system/images/photos/000/011/470/medium/Untitled-3.jpg)](https://i.publiclab.org/system/images/photos/000/011/470/original/Untitled-3.jpg)

> Both of these factors are dependent on a physics concepts left unexplained in the literature that I’m stuck on, but assume are easily calculatable but temperature dependent: the dynamic and kinematic viscosity of air.
_see Ott, Cyrs & Peters 2008 page 159._

Can I just plug in numbers for dynamic and kinematic viscosity from [a table of values like this one](http://www.engineeringtoolbox.com/dry-air-properties-d_973.html)? 

###Calculating the Average Mass Concentration

The average mass concentration is discrete integral of the individual particle’s contribution to mass concentration, multiplied by a curve for respirable PM10 and PM2.5 following [Hinds 1999](ftp://ftp.cdc.gov/pub/Documents/OEL/02.%20Kuempel/References/Hinds_1999-Aerosol%20technology.pdf) page 255:

[![pm10.jpg](https://i.publiclab.org/system/images/photos/000/011/471/medium/pm10.jpg)](https://i.publiclab.org/system/images/photos/000/011/471/original/pm10.jpg)

**Values of Ei** |  
--------------------|---------------------
E = 0.9585—(0.00408 x projectedDiameter^2) | for projectedDiameter <15μm 
E = 0 | for projectedDiameter > 15μm 

**E for PM 2.5:**

PM2. 5 = [1 + exp((3.233 x projectedDiameter) - 9.495)^-3.368

--------------------------------------------------------------

###What I want to do
I want to document the manual steps of processing the images of passive particle monitors, stepping through the first part of the process outlined in my [previous note on analysis.](/notes/mathew/09-04-2015/analyzing-passive-monitors)  See also: [imaging passive particle monitors](/notes/mathew/09-03-2015/optical-imaging-of-passive-particle-monitors), [replicating passive particle monitors](/notes/mathew/09-02-2015/replicating-a-passive-dust-monitor-method), [research background](/notes/mathew/08-21-2014/low-cost-passive-aerosol-monitors)

the goal is to take a full-color microscope image and:

* Set the scale 
* convert to a high-contrast black and white image through "thresholding"
* fill any "holes" in the high contrast particles
* measure the particles' perimeter and area

###My attempt and results
I used [Fiji](http://fiji.sc/Fiji), a distribution of ImageJ with a nice interface and easier scripting capabilities all ready to use.

####Setting the Scale
I found [instructions in the Fiji help for setting the scale.](http://fiji.sc/SpatialCalibration)

First, draw a line of a known length (preferably on top of a calibrated scale) on one of the images using the _Line Selection_ tool
[![_Fiji_Is_Just__ImageJ_and_dust_documentation_and_Untitled_46.png](https://i.publiclab.org/system/images/photos/000/011/636/medium/_Fiji_Is_Just__ImageJ_and_dust_documentation_and_Untitled_46.png)](https://i.publiclab.org/system/images/photos/000/011/636/original/_Fiji_Is_Just__ImageJ_and_dust_documentation_and_Untitled_46.png)

[![Screen_Shot_2015-09-18_at_4.59.06_PM.png](https://i.publiclab.org/system/images/photos/000/011/637/medium/Screen_Shot_2015-09-18_at_4.59.06_PM.png)](https://i.publiclab.org/system/images/photos/000/011/637/original/Screen_Shot_2015-09-18_at_4.59.06_PM.png)

Now go to the menu _Analyze > Set Scale._

* Set unit length to μm (you an type um)
* check "global"
*  this will make it apply to all the other images opened

You can find and check this calibration under _Plugins > Utilities > Image Properties_

####Thresholding the image
Thresholding makes everything on one side of a color or lightness threshold a single color.  We are going to do it on a greyscale image to get a black and white image that is "binary," i.e. every pixel is either black or white.

First, convert the image to greyscale by going to _Image > Type > 8 bit_

Now we want to threshold the image to a binary image.  Go to _Image > Adjust > Threshold_

There are a variety of available modes, all of them seem to produce a decent binary image if the brightness is adjusted correctly.  It is an open question as to which we should use.

[![Screen_Shot_2015-09-18_at_6.28.37_PM.png](https://i.publiclab.org/system/images/photos/000/011/638/medium/Screen_Shot_2015-09-18_at_6.28.37_PM.png)](https://i.publiclab.org/system/images/photos/000/011/638/original/Screen_Shot_2015-09-18_at_6.28.37_PM.png)

select a threshold that isolates particles without including noise.  This should be the same threshold used universally during processing, so some testing is called for. 

Now to make sure there aren't any greyscale elements left by using the command _Process > Binary > Make Binary_

You should have something like this:

[![20xfrac_snd17-threshholded.png](https://i.publiclab.org/system/images/photos/000/011/639/medium/20xfrac_snd17-threshholded.png)](https://i.publiclab.org/system/images/photos/000/011/639/original/20xfrac_snd17-threshholded.png)

####Filling "Holes"

While thresholding gave us a good high-contrast image, somewhat transparent or reflective particles have "holes" inside them (left) that we want to fill (right):

[![Screen_Shot_2015-09-18_at_6.32.18_PM.png](https://i.publiclab.org/system/images/photos/000/011/640/medium/Screen_Shot_2015-09-18_at_6.32.18_PM.png)](https://i.publiclab.org/system/images/photos/000/011/640/original/Screen_Shot_2015-09-18_at_6.32.18_PM.png)

Go to _Process > Binary > Fill Holes_

####Analysis
Now our image is ready to analyze.  We first need to set the measurements that will be taken. Go to _Analyze > Set Measurements_ and check off:

* Area
* Perimeter
* Shape Descriptors

Shape Descriptors will give us the ["circularity" factor needed for our volume calculations.](/notes/mathew/09-04-2015/analyzing-passive-monitors)

Now go to _Analyze > Analyze Particles_

ImageJ has now calculated the area and perimeter of the particles and represents them as idealized ovals.  

[![Drawing_of_20xfrac_snd17-ovals.png](https://i.publiclab.org/system/images/photos/000/011/641/medium/Drawing_of_20xfrac_snd17-ovals.png)](https://i.publiclab.org/system/images/photos/000/011/641/original/Drawing_of_20xfrac_snd17-ovals.png)

We also have a .xls (Excel spreadsheet) file that we can use to run the volumetric equivalents [described previously.](/notes/mathew/09-04-2015/analyzing-passive-monitors)

###Questions and next steps
The manual procedure will be useful in helping us make decisions about how best to image the particles and what thresholding system to use.  ultimately though, we want to create [an automated script.](http://fiji.sc/Scripting_Help) 
