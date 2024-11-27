---
nid: 15241
title: Overview: Hackteria Remix: Building a Basic Microscope with Raspberry Pi
path: public/static/notes/partsandcrafts/11-26-2017/building-a-raspberry-pi-microscope.md
uid: 66014
tagnames: raspberry-pi,dust,pm,barnstar:basic,hackteria,with:kgradow1,with:warren,microscope,passive-particle-monitors,microscopes,activity:microscopes,with:wmacfarl,with:bmela,activity:basic-microscope,series:basic-microscope
---

# Overview: Hackteria Remix: Building a Basic Microscope with Raspberry Pi

# What is a Microscope?

A microscope at its core consists of 4 things being held in place in relationship to each other.

1. **A light**. Most microscopes are designed to shine light through a thin slice of a sample. Because magnification works by spreading out light rays, microscopes need to have dedicated light sources to keep the sample well and evenly lit.
2. **A sample-holder.** The sample is the thing that you're looking at. A microscope needs to be able to hold the sample steady and very close to the lens to keep it in focus. The sample holder should be able to be moved up and down with some precision to focus the image.
3. **A lens**. We shine light through the sample and into the lens. The lens refracts light in a way that magnifies an image. Many microscopes have multiple lenses, but the main lens that provides the primary magnification in a microscope is called an "objective." Many microscope objectives are actually complicated arrangements of multiple lenses, but for our purposes we can treat the objective as a single lens.
4. **A camera or eyepiece.** This is how we actually look at the sample. The refracted light comes out of the lens and hits the camera or eyepiece to create an image.

---------

![image description](https://publiclab.org/system/images/photos/000/022/578/large/microscope_1_with_labels_and_explanation.jpg "microscope_1_with_labels_and_explanation.jpg")

---------

All of these pieces are individually very simple, but they have to be held in place with a precise relationship to each other. The microscope stand is the part that holds everything together.

Because the geometry of the stand is related to the geometry of the individual components, I will go over the components that we've chosen to use for this project and how to set them up.

![image description](https://publiclab.org/system/images/photos/000/022/579/large/breakout_diagram_1.jpg "breakout_diagram_1.jpg")

# Build a Microscope in Six Easy Steps

This project remixes two existing open source microscope projects -- the [Hackteria scope](https://hackteria.org/wiki/index.php/DIY_microscopy) and the [Open Flexure Microscope](https://publiclab.org/notes/mathew/04-17-2016/making-an-openflexure-microscope) - to make a free-standing Raspberry Pi microscope that streams video to a laptop. We'll be posting short-form build instructions in the near future. In the meantime, we've broken the project out into roughly six steps.

[**QUICK BUILD INSTRUCTIONS**](https://publiclab.org/notes/partsandcrafts/12-02-2017/quick-build-raspberry-pi-microscope)

1. [Setting Up the Raspberry Pi camera for wireless streaming](https://publiclab.org/notes/partsandcrafts/12-03-2017/setting-up-the-raspberry-pi-camera-for-wireless-streaming)
2. [Attaching Your Raspberry Pi Camera to a Microscope Objective Lens](https://publiclab.org/notes/partsandcrafts/02-15-2018/2-attaching-your-raspberry-pi-camera-to-a-microscope-objective-lens)
3. [Building the Microscope Stage](https://publiclab.org/notes/partsandcrafts/01-22-2018/building-the-microscope-stage)
4. [Lighting Your Sample](https://publiclab.org/notes/partsandcrafts/02-26-2018/4-lighting-your-sample)
5. [Testing and Calibrating Your Microscope](https://publiclab.org/notes/partsandcrafts/02-26-2018/5-testing-and-calibrating-your-microscope)
6. [Looking at Dust (and other things)](https://publiclab.org/notes/partsandcrafts/02-26-2018/6-looking-at-dust-and-other-things)

NOTE: As this project is a work-in-progress all of these documents should be considered drafts.  Step 6, in particular, deserved much more attention then we give it!

---------

# Step 1: Setting up the Raspberry Pi and Camera for Wireless Streaming

Full build instructions: [Setting Up the Raspberry Pi and Camera for Wireless Streaming](https://publiclab.org/notes/partsandcrafts/12-03-2017/setting-up-the-raspberry-pi-camera-for-wireless-streaming)

One of the common ways to think about using the Raspberry Pi is as a cheap, low-power desktop computer to which you can attach peripherals: mouse, keyboard, monitor, and power supply. In this configuration, you would set up your microscope as another peripheral and view it locally on a monitor.

![image description](https://publiclab.org/system/images/photos/000/022/580/large/old_raspberry_pi_setup.jpg "old_raspberry_pi_setup.jpg")

This setup is great, but if we're just trying to get images from a microscope, we don't need a standalone computer; we need a way to capture photos in real time. Instead we're going to set up the Raspberry Pi Zero for wireless streaming to send images from our camera directly to the computer.

---------

![image description](https://publiclab.org/system/images/photos/000/022/581/large/raspicam_zero_network_setup_1.jpg "raspicam_zero_network_setup_1.jpg")

We're essentially using the Raspberry Pi Zero as a web server to stream images from the Pi camera over the local network. This will let us access the images directly from any local computer by typing in a web address. It also makes our microscope significantly more portable.

We use the Pi Zero W because with proper configuration the built-in wifi allows us to do all of our communication with the camera over a network and avoid ever plugging a monitor and keyboard into the Pi directly.

## 

---------

# Step 2: Attaching Your Raspberry Pi Camera to a Microscope Objective Lens

Full build instructions: [Attaching Your Raspberry Pi Camera to a Microscope Objective Lens](https://publiclab.org/notes/partsandcrafts/02-15-2018/2-attaching-your-raspberry-pi-camera-to-a-microscope-objective-lens)

A microscope objective is essentially a stacked lens that gathers and focuses light to magnify an image. We'll be working with 40x and 100x objectives that you would typically attach to a stereo microscope. Rather than a conventional eyepiece, we're using the sensor from a Raspberry Pi camera to capture and stream images directly to our laptop. The objective is connected to the sensor by a 3D printed optics tube.

Adadpting the Open Flexure optics tube. We've been using parts developed for the OpenFlexure microscope project to connect our camera to our lens. While we found the assembly process for the entire OpenFlexure microscope to be more complex and difficult then we wanted for a first DIY microscope project, they have produced a lot of useful 3D models of parts to interface with the Raspberry Pi camera.![image description](https://publiclab.org/system/images/photos/000/022/582/large/3_parts_to_the_optics_module.jpg "3_parts_to_the_optics_module.jpg")

![image description](https://publiclab.org/system/images/photos/000/022/589/large/building_the_optics_module_V1.jpg "building_the_optics_module_V1.jpg")![image description](https://publiclab.org/system/images/photos/000/022/590/large/building_the_optics_module_V2.jpg "building_the_optics_module_V2.jpg")

## 

---------

# Step 3: Building the Microscope Stage

Full build instructions: [Building the Microscope Stage](https://publiclab.org/notes/partsandcrafts/01-22-2018/building-the-microscope-stage)  
The goal is to make a stand that holds the camera mount and lens in place and allows you to place a sample just barely above the top of the objective lens with a system for moving the sample up and down very small amounts to bring it into focus. We use a laser-cut microscope stand based on a design made by the Hackteria -- [https://hackteria.org/wiki/DIY\_microscopy](https://hackteria.org/wiki/DIY_microscopy)

![image description](https://publiclab.org/system/images/photos/000/022/591/large/hackteria_2_with_labels.jpg "hackteria_2_with_labels.jpg")

Dimensions for 40 - 100x objective. The camera holder and tube and 100x objective lens are together about 73mm tall. The 40x objective that we're using is about 2mm shorter than the 100x, but the setup for both of them is roughly equivalent.

One of the reasons we've been using this design is because the Open SCAD files they provide are very easy to use and modify. [https://www.thingiverse.com/thing:1057872/#files](https://www.thingiverse.com/thing:1057872/#files)

![image description](https://publiclab.org/system/images/photos/000/022/592/large/hackteria_SCAD.png "hackteria_SCAD.png")

The frame is put together so that the top of the objective lens is just slightly below the surface of the stage where you will place your sample.

## 

---------

# Step 4: Attaching a light

Full build instructions: [Lighting Your Sample](https://publiclab.org/notes/partsandcrafts/02-26-2018/4-lighting-your-sample)

The important thing about the illumination is that it be a small, very bright point light source. We want all of our light to be going into a very narrow aperture at the top of the microscope objective lens. Almost any light source will do, as long as it is bright enough and we can easily point it into the lens.

We decided that the cheapest thing to do would be just to wire up a single bright LED to a power source and glue it to a piece of flexible wire. You could save yourself this step by finding an already existing suitable light source. Our build for this involves 2 AA batteries, a battery holder with a built-in switch, some extra wires, a length of coat-hanger wire and some hot glue. This is very far from the optimal way to build this, but it works.

![image description](https://publiclab.org/system/images/photos/000/022/593/large/LED_light.jpg "LED_light.jpg")

## 

---------

# Step 5: Testing and Calibrating Your Microscope

Full build instructions: [Testing and Calibrating Your Microscope](https://publiclab.org/notes/partsandcrafts/02-26-2018/5-testing-and-calibrating-your-microscope)

To calibrate our microscope we will use a device called a stage micrometer. A stage micrometer is a tiny ruler mounted on a slide. Our ruler is 1 mm across and is divided into 100 ticks. The distance between each tick is 10 microns.

![image description](https://publiclab.org/system/images/photos/000/022/594/large/stage_micrometer_1.jpg "stage_micrometer_1.jpg")

---------

# Step 6: What Can We See? Looking at Dust
More details here: [Looking at Dust](https://publiclab.org/notes/partsandcrafts/02-26-2018/6-looking-at-dust-and-other-things)
This is the most current version of this microscope:![image description](https://publiclab.org/system/images/photos/000/022/617/large/IMG_20171125_221612.jpg "IMG_20171125_221612.jpg")

![image description](https://publiclab.org/system/images/photos/000/022/618/large/IMG_20171124_184509_%283%29.jpg "IMG_20171124_184509_(3).jpg")

We looked at a couple of different samples with a 40x objective and a 100x objective to get a sense of the kinds of images we can produce with this setup. The first two are reference images; the third is a slide that (we were told) comes from a quarry near Wisconsin. Using the 100x objective, you can make out the shape and outline of dust particles in the 2-5 um range, which gets us a step closer to being able to identify respirable particles using this setup.

![image description](https://publiclab.org/system/images/photos/000/022/598/large/sample_1.jpg "sample_1.jpg")

![image description](https://publiclab.org/system/images/photos/000/022/596/large/sample_2.jpg "sample_2.jpg")  
![image description](https://publiclab.org/system/images/photos/000/022/597/large/sample_3.jpg "sample_3.jpg")