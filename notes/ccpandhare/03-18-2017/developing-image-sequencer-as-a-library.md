---
title: 'Developing Image Sequencer as a Library'
tagnames: software, gsoc, gsoc-2017, soc, soc-2017, rgsoc-2017, soc-2017-proposals, response:13975, gsoc-2017-accepted, image-sequencer, first-time-poster
author: ccpandhare
path: /notes/ccpandhare/03-18-2017/developing-image-sequencer-as-a-library.md
nid: 14035
uid: 503543

---

# Developing Image Sequencer as a Library

by [ccpandhare](../profile/ccpandhare) March 18, 2017 21:20

March 18, 2017 21:20 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [rgsoc-2017](../tag/rgsoc-2017), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975), [gsoc-2017-accepted](../tag/gsoc-2017-accepted), [image-sequencer](../tag/image-sequencer), [first-time-poster](../tag/first-time-poster)

----

## 

Note: This is a draft and some sections are under development

# About me

Name: Chinmay Pandhare  
Email: [ccpandhare@gmail.com](mailto:ccpandhare@gmail.com)  
GitHub Profile: [https://github.com/ccpandhare](https://github.com/ccpandhare)

Gitter Nick: ccpandhare

Institute: BITS Pilani (Pilani Campus)  
Degree: B.E. Electrical and Electronics Engineering (Class of 2020)

Location: Pilani, Rajasthan, India (GMT + 5:30)

# Developing Image Sequencer as a Library

Image Sequencer is a non-destructive image processing library built with
JavaScript which creates a new image at each step in a sequence of steps.

# Current State:

Image Sequencer is in early-development phase. The core functionality
(addition of a step, removal of a step, insertion of a step, etc.) is being
implemented. There are a few modules present. Calculations aren't GPU
accelerated. As a result, there is a lag when images larger than 700KB are
handled.

# Aim of my project:

\_\_

The aim of my Project is to expand the module library by implementing
powerful and useful image processing modules (As listed at the end of this
proposal) with possible integration with GPU.js for enabling GPU-backed
calculations and hence enhance performance, reliability and speed. And,
ultimately, to develop Image Sequencer as an importable library for image
manipulation. Also, support will be developed for JSON input. This is
explained below in detail.

# Current functioning of Image Sequencer

![image description](https://publiclab.org/system/images/photos/000/019/861/large/e6436b1e-1df0-4800-8936-1855e7830eac.jpg "e6436b1e-1df0-4800-8936-1855e7830eac.jpg")

This chart shows how Image Sequencer currently works. There are certain
issues attached to the current implementation of Image Sequencer:

1. **Long call syntax** --- This can be improved upon.
2. **Only one image** is handled per instance of Image Sequencer
3. **Direct DOM manipulation** --- This makes Image Sequencer demo specific. i.e, Dependant on the HTML UI
4. **No JSON support** --- This makes integration of Image Sequencer into large-scale projects impractical.
5. **Time Lag** --- When a step is added, sequencer.run() runs through all the steps --- this creates an unnecessary time lag.
6. The outputs of different steps aren't stored and hence can't be accessed at will. The library simply injects the output images into the UI.
7. **No** functionality for modules to send logs or **non-image data** to user.
8. **Non GPU-accelerated** --- This slows down speed for images \> 700KB

My project aims at restructuring the code and expanding the module base
which will lead to faster and neater usage.

# Post-Project functioning (Draft)

![image description](https://publiclab.org/system/images/photos/000/019/862/large/623e3993-8e3e-4f78-9991-45172c07616f.jpg "623e3993-8e3e-4f78-9991-45172c07616f.jpg")

This chart shows how I plan to make Image Sequencer work. These would be my milestones:

1. **Completing the core functionality** --- addStep/s, removeStep/s, insertStep/s, getOutput, stepLog.
2. **Supporting JSON** type input & output to enable easy use and shorter
call syntaxes.
3. Enhancing speed with the help of **GPU accelerated calculations** using GPU.js.
4. Accepting logs / **non-image outputs** from modules.
5. Enabling **multiple image handling**
6. Reducing dependancy on UI and DOM Manipulation
7. **Implementing modules** (non-exclusive list at end of the proposal)
8. Publish to npm.

# Post-Project Usage Examples (Both methods)

**Method - 1** (Similar to the existing model):

![image description](https://publiclab.org/system/images/photos/000/019/863/large/e12f3593-a8ab-4428-848b-b9aa9e73cdd9.jpg "e12f3593-a8ab-4428-848b-b9aa9e73cdd9.jpg")

**Method - 2** (JSON Model):

![image description](https://publiclab.org/system/images/photos/000/019/864/large/90431773-21b9-44c6-8cc5-5be55b6a5fd3.jpg "90431773-21b9-44c6-8cc5-5be55b6a5fd3.jpg")

# Timeline (Coding Days: May 30 to Aug21)

**Week 1 & 2 **(May 30 to June 11)****---**Core Functionality and JSON**  
Implementing the core functions addStep/s, removeStep/s, insertStep/s, getOutput, stepLog, complete with JSON input/output support. This will include most of the restructuring work. ImageSelect.js will no longer have a 'special module' status as it currently does.

  
**Week 3 **(June 12 to June 18)****---**Multiple Image Support and GPU.js integration**  
Support will be added for handling multiple images. User would be able to access data relating to any step on any image at will.

GPU.js will be integrated with Image Sequencer. So that the matrix calculations of modules are GPU accelerated, whenever possible. This will include changes in /src/PixelManipulation.js and other files.  
Community review for Core Functionality and JSON.

  
**Week 4 **(June 19 to June 25)****---**Module Logs**  
Module logs will be returned to user. A method getOutput will be introduced. This will enable modules to send non-image data to the user. For example, A QR Code reading module can send detected data to the user.  
Community review for Multiple Image Support and GPU.js integration.

  
**Weeks 5 & 6 **(June 26 to July 9)****---**Module Implementation**  
Modules in the list of module candidates will be implemented along with  Additional modules as suggested by the community. Also a special module, 'Color Space' will be implemented which changes the colour space of the image to user defined functions of r, g, b, a.

Community review for Module Logs

  
**Weeks 7 & 8 **(July 10 to July 23)****---**Work on Demo**  
Demo will be reworked, with a better UserInterface.js. UserInterface.js will be made demo-independent --- It's function will be independent of the implementation where Image Sequencer is being used.

Community review for Module Implementation.

  
**Weeks 9 to 13 **(July 24 to August 21)****---**Final Work, Fixes, Suggestions**  
This period will be for bug-fixing, goal-expansion, and implementing community suggestions. Also, My college starts functioning from July 31\. So my contribution might decrease a bit in this period. This will officially conclude my work for Image Sequencer, though I'll still be associated with the project and contribute to it, as and when possible.

  
# Contributions  

This is my fork of the Image Sequencer project: [https://github.com/ccpandhare/image-sequencer](https://github.com/ccpandhare/image-sequencer)

These are a few of my contributions to publiclab/image-sequencer:

1. **Added** removeStep functionality **(****Built****)** \[PR **#17**\]
2. **Fixed** addStep functionality **(****Merged****)** \[PR **#12**\] \[Issue #2\]
3. **Added** Crop Module **(****Merged****)** \[PR **#8**\] \[Issue #5\]
4. **Bugfixes** in ImageThreshold.js and ImageSelect.js (Merged) \[PR **#6**\] \[Issue #2\]
5. Detected and reported issues #19, #15, #14, #13, #3, #2

# Experience

I am a Web Developer and a Python enthusiast. I have worked on many technologies till date and have done that over the past six years.

Some of my notable projects:

1. **Ziolk** : A tool for designing T-Shirts online (**JavaScript** - Canvas - Fabric.js)  
Basic Functionality : Adding shapes, text, images, background removal form imported images, flipping objects along X and Y axes.  
GitHub Link : [https://github.com/ccpandhare/ziolk](https://github.com/ccpandhare/ziolk)
2. **Nalanda Lite** : A script to auto-download lecture slides (**Python** - BeautifulSoup)  
Basic Functionality : Download/Update Lecture slides from our college portal, Nalanda and store them on the user's laptop.  
GitHub Link : [https://github.com/ccpandhare/nalandalite](https://github.com/ccpandhare/nalandalite)
3. **Document management portal for the** **District Court of Jhunjhunu**, Rajasthan State, India in association with the Media Lab, BITS Pilani. (**PHP** - **mySQL**)

# Skill Set

**Front-end Languages** : HTML, CSS, JavaScript

**Front-end development frameworks used** : SASS, HAML

**Front-end deployment frameworks used** : jQuery, Angular.js, D3.js, Bootstrap, Materialize, Fabric.js.

**Back-end Experience** : PHP, mySQL, Node.js

# Teamwork

I am a part of DVM BITS Pilani. We are a group of students who create Android Applications, Websites and Videos for the various tests of our college. This is some of the latest work undertaken by DVM:

[http://bits-oasis.org](http://bits-oasis.org) , [http://bits-bosm.org](http://bits-bosm.org) , [http://bits-apogee.org](http://bits-apogee.org) 

  
# List of Module Candidates (non-exhaustive)

  
This list is compiled from the original Readme.md of Image Sequencer and my own online searches.

__  

1. rExtract [https://github.com/linuxenko/rextract.js](https://github.com/linuxenko/rextract.js)
2. Histogram [https://www.npmjs.com/package/histogram](https://www.npmjs.com/package/histogram)
3. Flood Fill [https://github.com/hughsk/flood-fill](https://github.com/hughsk/flood-fill)
4. Blink Diff [https://www.npmjs.com/package/blink-diff](https://www.npmjs.com/package/blink-diff)
5. Pixel Match [https://www.npmjs.com/package/@schornio/pixelmatch](https://www.npmjs.com/package/@schornio/pixelmatch)
6. PNGJS Image [https://github.com/yahoo/pngjs-image](https://github.com/yahoo/pngjs-image)
7. CannyJS [https://github.com/yuta1984/CannyJS](https://github.com/yuta1984/CannyJS)
8. JavaScript Edge Detection [http://codepen.io/taylorcoffelt/pen/EsCcr](http://codepen.io/taylorcoffelt/pen/EsCcr)
9. JSQRCode [https://github.com/vicapow/jsqrcode](https://github.com/vicapow/jsqrcode)
10. quaggaJS [https://serratus.github.io/quaggaJS/](https://serratus.github.io/quaggaJS/)
11. jquery.facedetection [https://github.com/jaysalvat/jquery.facedetection](https://github.com/jaysalvat/jquery.facedetection)
12. Popular Image Filters