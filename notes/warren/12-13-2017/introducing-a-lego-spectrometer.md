---
title: "Introducing a Lego Spectrometer"

tagnames: 'spectrometer, kits, spectrometry, blog, lego, lego-spectrometer, lego-quickstart'
author: warren
path: /notes/warren/12-13-2017/introducing-a-lego-spectrometer.md
nid: 15364
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/022/930/original/PC051869.JPG)

# Introducing a Lego Spectrometer

by [warren](/profile/warren) | December 13, 2017 17:34

December 13, 2017 17:34 | Tags: [spectrometer](/tag/spectrometer), [kits](/tag/kits), [spectrometry](/tag/spectrometry), [blog](/tag/blog), [lego](/tag/lego), [lego-spectrometer](/tag/lego-spectrometer), [lego-quickstart](/tag/lego-quickstart)

----

We've been making and distributing [Do-It-Yourself spectrometers](http://store.publiclab.org/collections/spectrometry) since 2011, and have been through [4 major kit versions](/w/spectrometry) and hundreds of different community contributed modifications, new versions, changes, and more. As a community we've gotten really good at helping people **build a spectrometer**, but we need to do a huge amount more to support more advanced work, more rigorous and consistent experiments, and more consistent and better data collection.

For the numbers, we've shipped thousands of spectrometry kits, and over **12,000 people have uploaded spectra** to our open source online database, Spectral Workbench. That database now includes over **100,000 spectra**:

[http://spectralworkbench.org/stats](http://spectralworkbench.org/stats)

Now we're ready to take this to the next level with a better design that incorporates a vast amount of input and ideas from this huge contributor community.

The new **4.0 Desktop Spectrometry Kit** is made of... Legos! We're calling it the **Lego Spectrometer**. 

[Read more about it here](/lego)

You can pre-order it for $50 now in the Public Lab Store, or see the plans at the bottom of this page, in several formats.

<a href="https://store.publiclab.org/collections/spectrometry" class="btn btn-primary btn-lg">Pre-order a kit</a> <a href="https://publiclab.org/notes/warren/12-13-2017/assembling-the-public-lab-lego-spectrometer" class="btn btn-default btn-lg">See assembly instructions</a>

We'll also be posting build instructions shortly -- and like all Public Lab kits, it's open source hardware -- [CERN OHL 1.2](http://www.ohwr.org/documents/294).

## Design goals

Over the years, we've identified a few really critical improvements that have been tough to solve:

- rigidity
- [easy to source parts](/w/lego-spectrometer#Parts)
- modularity - working together
- image quality

Our mission is to make it easier, cheaper, and more accessible to do environmental monitoring, and to do that as an open source, collaborative community. And of course part of that is cost -- while people build upon our kits with more expensive options and upgrades, we want the basic kit to be extremely affordable.

So, this design tries to address each of these challenges with ideas and input from the community:

  
![image description](https://publiclab.org/system/images/photos/000/022/894/large/PB291826.JPG "PB291826.JPG")  

## Rigidity

A stable, rigid device is pretty critical for consistent measurements, but many of the ways we tried to solve this were cost prohibitive at the price point we wanted in our kit -- wood frames, lasercutting, 3d printing. There have been some fantastic designs that are rock solid, but Legos allowed us to make a kit that's extremely precise and robust enough to throw in a backpack and not worry that it'll go out of calibration.

## Sourcing

Past kits have been wonderfully cheap and easy to modify, but they incorporated die cutting and printing with white ink on black paper -- not easy to replicate in the home. This Lego design has almost identical dimensions to our [foldable papercraft spectrometers](/wiki/paper-spec), but you can affordably order parts for just one kit from [http://Bricklink.com](http://Bricklink.com), or print it on a 3D printer from the models below, and know that the dimensions will be exactly the same. See the [assembly instructions](https://publiclab.org/notes/warren/12-13-2017/assembling-the-public-lab-lego-spectrometer) for a list of the exact parts and where to source them.

![image description](https://publiclab.org/system/images/photos/000/022/931/large/PC051872.JPG "PC051872.JPG")  

## Modularity

It can be tough in an open source community to get people to work together on a single design, to agree to shared conventions -- everyone wants to try something new and exciting! But if we could get people to modularize and separate out their spectrometers, their sample holders, their light sources and cameras, we could mix and match, and people could make improvements to one piece without breaking compatibility with the rest.

Today we're proposing a standard Lego-based interface, which will ensure rigid connections between each part, starting with the connection between the spectrometer body and the sample holder and light source.

Below you'll find open source 3D models for the key components, so you can 3D print these connections, but if you already have a device or a sample apparatus, just add these pieces to make it compatible with other Lego Spectrometers. And post your designs! We'd love to hear from you in the comments below.

![image description](https://publiclab.org/system/images/photos/000/022/908/large/PC051878.JPG "PC051878.JPG")  

## Raspbery Pi Camera

The revolution kicked off by the Raspberry Pi project has made high quality imaging incredibly easy. The Raspberry Pi camera modules are perfect for a DIY spectrometer, with low noise, high sensitivity and small size.

[https://publiclab.org/wiki/raspberry-pi-spectrometer](https://publiclab.org/wiki/raspberry-pi-spectrometer)

But there are still problems to solve there, not least an easy way to connect the whole system to our browser-based uploader at [Spectral Workbench](http://spectralworkbench.org)! Pitch in and let's iron out some of these issues.

---------

## Add-ons

We're really hoping people will build on these designs, using the Lego 3-pin interface described above, and add things like:

- different lighting sources
- different sample container attachments
- adaptors for things like telescopes & bigger cameras

But most of all, we're looking for well-documented guides on how to do different tests with these devices. Let's put them to work!

Try solving some of these challenges, or add your own!

[spectrometry-challenge](/tag/question:spectrometry-challenge)
