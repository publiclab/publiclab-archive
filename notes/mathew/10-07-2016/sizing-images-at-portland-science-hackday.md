---
nid: 13533
title: Sizing particles in microscope images at Portland Science Hackday
path: public/static/notes/mathew/10-07-2016/sizing-images-at-portland-science-hackday.md
uid: 4
tagnames: calibration,silica,frac-sand,pm,particles,particle-monitoring,microscope,passive-particle-monitors,passive-pm,parent:frac-sand,pm-monitoring,pm-sensing,microscopes,sizing,particle-imaging
---

# Sizing particles in microscope images at Portland Science Hackday

_[Image](https://publiclab.org/notes/SimonPyle/05-13-2016/automating-imagej-for-particle-image-analysis) @SimonPyle_ 

Tonight and tomorrow (October 8th) the [Portland Science Hack Day](http://portland.sciencehackday.org/) will be running, and I’ll be joining Jenny Malloy with my [OpenFlexure microscope](/notes/mathew/07-21-2016/openflexure-microscope-high-resolution-assembly) to work on [image analysis for sizing particles with ImageJ](/notes/mathew/08-23-2016/calibrating-a-microscope).  In this note, I’ll provide some background, purpose and activities for getting started at analysing particle size under a microscope.

###Background

Sizing particles is the first step towards [measuring airborne particles optically](https://publiclab.org/wiki/passive-pm) to bring accountability to the emissions of [sand miners](https://publiclab.org/wiki/frac-sand) and other industrial operations.  Read more on background research with the tag #passive-pm.  Here is an example of a research study using passive particle monitors and [visible light microscopy of particles](/notes/mathew/04-06-2016/mapping-dust-hotspots-with-low-cost-monitors).

[ImageJ](http://fiji.sc/) has capabilities [accessible in its menus](/notes/mathew/09-19-2015/using-imagej-to-process-passive-particle-monitor-samples) for doing particle sizing. It is also scriptable by using the script recording capabilities, or using a [variety of languages including Python.](https://publiclab.org/notes/SimonPyle/05-13-2016/automating-imagej-for-particle-image-analysis)

###Goals & Resources
My primary goal is for Image J’s measurement of particle diameter to correspond with the known diameter of [standardized spheres](/notes/mathew/08-23-2016/calibrating-a-microscope) (2.07 um polystyrene latex spheres).  

My secondary goal is to figure out whether microscope calibration requires standardized spheres or if it can be done with a stage micrometer— a small ruler visible under a microscope.

Here are a series of scripts to try out:

@SimonPyle's [Python script](https://publiclab.org/notes/SimonPyle/05-13-2016/automating-imagej-for-particle-image-analysis)

Two more macros created with ImageJ's macro [recording functions](http://imagejdocu.tudor.lu/doku.php?id=gui:plugins:macros):

<a href="//i.publiclab.org/system/images/photos/000/018/354/original/ImageJMacros.zip"><i class="fa fa-file"></i> ImageJMacros.zip</a>

[Image set of particles to practice with](https://i.publiclab.org/system/images/photos/000/018/350/original/20160923_PSL_Sphere_SET.zip)

for use in [calibrating a microscope](https://publiclab.org/notes/mathew/08-23-2016/calibrating-a-microscope).
