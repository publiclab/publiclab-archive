---
title: "SoC proposal: Image Sequencer"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, lat:10.850515, lon:76.271083'
author: lohithabhagam123
path: /notes/lohithabhagam123/04-09-2019/soc-proposal-image-sequencer.md
nid: 19009
uid: 577728

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/031/341/original/wallpaper.jpg)

# SoC proposal: Image Sequencer

by [lohithabhagam123](../../../profile/lohithabhagam123) | April 09, 2019 13:13

April 09, 2019 13:13 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [first-time-poster](../tag/first-time-poster), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [lat:10.850515](../tag/lat:10.850515), [lon:76.271083](../tag/lon:76.271083)

----

---------

## About me

Name: Lohitha Bhagam

Affiliation: Amrita Vishwa Vidyapeetham, Kerala, India

Location: Kerala, India

Github: [https://github.com/lohitha02](https://github.com/lohitha02 "https://github.com/lohitha02")

Email: [lohithabhagam123@gmail.com](mailto:lohithabhagam123@gmail.com)

Gitter handle: lohitha02

## Project description

### What is Image Sequencer and what does it do :

Image Sequencer is a general purpose prototype sequential image processing library which is written in JavaScript. Instead of modifying the original image, it creates and processes a new image at each step in a sequence, each modification makes a new copy of image resulting in a series of images showing each step. Also, we can use this via CLI. It was built for the use of browsers as well as on the Raspberry Pi.

My proposal for the project mainly focuses on addition of new modules and enhancing the existing modules along with the testing and maintainability of the project.

### Core objectives

- New modules to image-sequencer
  - Segmentation smoothing
  - Draw image module
- Improving the text overlay module
- Improving the existing modules
  - Enhancing the paint bucket module
  - Improving the rotate module
  - Improving the draw-rectangle module
  - Bugs in blur module
- Fixing Bugs in crop module re: colorimetry, Colorimetry plan
- The issue about Image getting delete

### Possible solutions

1. ### New modules to image-sequencer

- #### Segmentation smoothing module 
  - This module can be used to generate a smooth surface segmentation for datasets that were segmented on images with large slice thickness, leading to "staircase" effect. 
  - This module was motivated by the need to generate smooth segmentations for prostate MRI images, which typically have a high in-plane resolution (0.5mm) relative to the slice thickness (3mm).
  - The module operates by resampling the input to isotropic voxel resolution and applying Gaussian smoothing to the resampled image. 
    - ##### Use cases :
      - MRI-ultrasound fusion biopsy of the prostate
      - Therapy planning
      - Treatment response assessment
- #### Image-Draw module 
  - The Image-Draw module provides simple 2D graphics for image objects. You can use this module to 
  - create new images, annotate or retouch existing images, and to generate graphics on the fly for web use.
    - We can have a simple draw image module by having the following jquery.min.js, raphael.min.js, json2.min.js, and raphael.sketchpad.js javascript library files.

| <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&lt;script type=</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#48b685;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">"text/javascript"</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&gt;</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;&nbsp;&nbsp;</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#815ba4;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">var</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> sketchpad = Raphael.sketchpad(</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#48b685;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">"editor"</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">, {</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;&nbsp;&nbsp;width: </span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#f99b15;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">img.width;</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;&nbsp;&nbsp;height: </span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#f99b15;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">img.height;</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;&nbsp;&nbsp;editing: </span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#f99b15;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">true;</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">});</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#8d8687;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">// When the sketchpad changes, update the input field.</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;sketchpad.change(</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#815ba4;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">function</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">() {</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;$(</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#48b685;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">"#data"</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">).val(sketchpad.json());</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> &nbsp;});</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"><br></span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#ef6155;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">&lt;/script&gt;</span></p>|
  
  

1. ### Improving the text overlay module

- Current problem: The positioning of the text should be given manually by entering the values of the horizontal and vertical positions.
  - Possible solution: We can improve it to have a click and drag option so that we can drag the text on the image to the specific position that we require.
- Current problem: The module is working only for the first step.

![](https://lh4.googleusercontent.com/XqaTLEgkZg9OZsCzB_WBIUA8uj7SIy35iDZ8Uzo85utOvJ9yt3EDtF-spqwBzFmCYE8Mb2NmMoTA2OZOM6nvnECPsMJyk38ax-TpuK1aNE1z56mbtoHeps2mt2h6Oeq9A-XLgDwu)

  - Possible solution: Improve it so that it will work for all the other steps. I have opened an issue [#990](https://github.com/publiclab/image-sequencer/issues/990) regarding this and would be glad to solve it.
- Besides text effects, we can also improve the module by implementing some new features to it 

Maybe we can have some filter effects, emoji effects, some stickers.

1. ### Improving the existing modules to make them more user-friendly

- #### Enhancing the paint bucket module
  - Current problem: We have to give the input values of x and y manually by typing and this makes hard for the user since we may not be able to give the exact value of the pixel where we want to change the color.
  - Possible solution: Instead, we can automate it like if we select the mouse and drag then, the x and y values will automatically get upgraded and this will be very helpful for the user. 
- #### Bugs in blur module :
  - Current problem: The amount of gaussian blur is not changing even after changing the intensity value.

![](https://lh3.googleusercontent.com/bV_3ZWIp_3VHx62jEQ6mH9pf8uA5Q3JoC7WVNirI3K8Frjc5ebPvfvJeEhUQuheHZBm0wQ_Ssqb7xR3QOR63ppR_EHw0wKqu9dBJ3mV3WAl261HXzilTyWntCXKzLqRhm_GF0hLl)  

- #### Improving the rotate module :
  - Current problem: When we are rotating the module at some particular angles we are losing some part of the image.  

![](https://lh4.googleusercontent.com/ot56-TubRvQuLVeElCns4dpf23zLjs9OIJsxW1ASC2U9FjyxIbds5UoL8vf-CijDbtfSu3oTHdn4AkbN9Rw2m3tD_VSiQ99d8l6mlN3wD0umQNWOq1wkEpO1Wk4jcBArKBASKV18)

  - Possible solution : We have to try to make changes to the image so that when the image is rotated to a particular angle, instead of the image getting cropped and rotated, the image will fit/shrink to a particular size so that no part of the image is lost and then it will get rotated to the required angle.  

- #### Improving the draw-rectangle module : 
  - Current problem: Right now we don't have options to choose different colors for the border of the rectangle or to choose different borders.  
![](https://lh5.googleusercontent.com/R4nVXFMEzoMonVlf-vzIKVs2rm9cOmSvXt0MaqK89cGR3Gg5bM_dlzlLxQL7tNfHr3K6L8pUd6EzHYL1jqrNKxYwB2W9ZEyvqsQok_LVGkpOVllhyKKqbbC70i1t2MDj55CJiReU)  
  
  
  
  
  

  - Possible solution: We can improve it for having an option where the user can choose which color he/she wants and also different styles of borders instead of a plain boring one. 

### 4) Bugs in crop module re: colorimetry, Colorimetry plans

- When the input values of x and y are less than 10 then instead of getting cropped the color of the image is getting changed.

![](https://lh5.googleusercontent.com/mET4TuGIO7YLmFEkEVv_ynmjvRiKag3wYZw-WLuWbzq1axpXdSejc77Yl2f4IwJ7xn5q-_wT0kh_79VwJtGH0ZJZsrahYcwWBkQT-aAwyrBB261_k4MJk8KjpCtUKaDn8sazGZUO)

- Also instead of inputting the x and y values by typing them, we can improve it to have a click and drag option, so if we click from where to where we want to crop the module then the respective values of x and y will get updated automatically.

The code goes wrong here: Because sequencer .steps\[1\].img Element  is not returning anything. But img.img-thumbnail  is still returning.  

| <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#815ba4;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">function</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> </span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#fec418;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">imgEl</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">() {</span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> </span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#815ba4;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">return</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;"> step.img Element; </span></p><p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">}</span></p>|
  

| <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">step.imgElement = step.ui.querySelector(</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#48b685;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">"a img.img-thumbnail"</span><span style="font-size:11pt;font-family:Consolas,sans-serif;color:#a39e9b;background-color:#2f1e2e;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">); </span></p>|
  

![](https://lh3.googleusercontent.com/6sCrUCM3zcM65WtgaPLr3KjcjsNpeeqPNmazIIR2Mu3sWb9NgQOlH8AYVjXj-wwU9P1XSq3tYh_g_Q2pvHNLyBSPOWW0lscJHnu-fBw-2VvEir4iJKNSdPHqxUnAwneIhUAk_vTd)

- #### Particle identification and sizing for air pollution :
  - This issue addresses any general useful-in-real-life modules. The blob analysis module can be used to detect the amount of lead on the surface. This can be used to detect lead on samples of any general thing.
  - It can be used to detect the change in something. Especially change in physical properties like color.
  - Microparticles in the air can be sized using a module like this as well. 
  - A sample can be analyzed under a microscope, this module can separate particles from the background and calculate their area and approximate diameter if they were shaped like a sphere.

### 5) Bugs in Grid Overlay module

- The image is working only for the first step and not working in case of the other steps.

![](https://lh3.googleusercontent.com/mgNgktZNLLgL3CHLnTn5lHyEv4WlbndIJdVE6ZeUsqM6qabYUPCyAkrr1qgIqNxEYHd-cCXw1EjJQM8ogzeiJRxDRb4QqN9wj8HBfPk3J-E4Sk4qKIDIagKm6Hc54TJL9UA0WUrt)  

- Also we need to refresh the page every time after entering the value for the changes to be applied.  

### Timeline/milestones

- My end semester exams overlap during the period of community bonding (ie: from May 6 to May 21). During this period I would definitely try to make up time to follow the discussions and to be in contact with the community and the mentors. As soon as my exams end I will start implementing the things that I've mentioned in the proposal.

1st and 2nd weeks (ie: May 27th to June 9th)

Adding a draw image module and segmentation smoothing module.

3rd week (ie: June 10th to June 17th)

Improving the text overlay module.

4th week (ie: June 18th to 24th)

"First Evaluation"

Feedback and implementing the finalized module ideas before the first evaluation.

5th week (ie: June 25th to 1st July) Work period

Bug fixes and starts working on improvisation of paint-bucket, crop, and other modules.

6th and 7th week (ie: July 2nd to July 15th)

Improvisation of the modules and work on bugs in grid overlay module.

8th week(ie: July 16th to 22nd)

Feedback and bug fixes before the second evaluation.

9th and 10th week(ie: July 23rd to 5th August)

Start working on bugs in crop module re: colorimetry, colorimetry plans.

11th and 12th week(ie: August 6th to 19th)

Work on particle identification and sizing of the particles issue.

13th week(ie: August 20th to 26th)

Will add documentation for all newly added features and will make sure that throughout the period I will help the fellow contributors by reviewing PRs and by creating FTO's and new issues.

### 

### Needs

I would definitely require the guidance from the mentors as well as the community, help from the other contributors are always welcome.

### First-time contribution

I've been actively contributing to Public Lab since past few months. I've solved a few issues and am looking forward to solve many more.

- [https://github.com/publiclab/image-sequencer/pull/841](https://github.com/publiclab/image-sequencer/pull/841) (merged)
  - It is about documenting the new modules that were added to the image sequencer, and also doc-linking all the modules. It gave me a clear idea about the code base of the modules, how they function and how they are linked.
- [https://github.com/publiclab/image-sequencer/pull/795](https://github.com/publiclab/image-sequencer/pull/795) (merged)
  - It is about fixing the "Save As" button since it was over-flowing on the small screens. It gave me a clear idea about how the index.html page works.
- [https://github.com/publiclab/image-sequencer/pull/991](https://github.com/publiclab/image-sequencer/pull/991) (reviewed)
  - It is about adding a spinner while the GIF is generating this PR also helped to know more about image-sequencer and it's code base.

Issues opened by me:

- [https://github.com/publiclab/image-sequencer/issues/969](https://github.com/publiclab/image-sequencer/issues/969) (closed issue)
- [https://github.com/publiclab/image-sequencer/issues/990](https://github.com/publiclab/image-sequencer/issues/990) (open issue)
- [https://github.com/publiclab/image-sequencer/issues/997](https://github.com/publiclab/image-sequencer/issues/997) (open issue)
- [https://github.com/publiclab/image-sequencer/issues/998](https://github.com/publiclab/image-sequencer/issues/998) (open issue)

---------

### Experience

I've been into web-development for quite a few time. I'm good at HTML, CSS, and JS, node.js; besides web, I also know Python and C.

I've worked on a couple of projects till now -

1. Hackference project1: It helps to schedule and organize the daily academic tasks according to the priorities of the user and receive on time notification of task deadlines via 'gsapi' telegram bot for students. The extra features include statistics of work time, random mind game after task completion.
2. Vidyut project2: This was the project that we have done at a hackathon that was conducted in our college.

---------

### Teamwork

I have taken part in some hackathons and that experience gave me a lot of understanding on how exactly a team should work and every time I gave my best for the success of my team. I find it very easy to work along with people and respect their ideas and opinions. And I always believe that the success of any project depends more on coordination between team members.

---------

### Passion

I love contributing to the Open source communities. I have also taken part in Open source events like Hacktoberfest. I loved all the projects of Public Lab, the community is very friendly and very interactive. I got to learn so much from here and I'm looking forward to learn much more.

The thing that interests me the most about the public lab is it supports communities facing environmental justice issues.

Also, I'm interested in applying Open science to solve environmental issues and that is why I chose Public Lab and I strongly feel that this will be the best community that actually relates to me in many ways.

### How this project is going to affect the Audience

Lead is a dangerous toxicant that affects multiple body systems and is harmful to everyone especially young children.

There are many ways by which people are getting exposed to lead in day to day life and it is estimated that it will cost around $253 to $342 for doing a simple lead analysis.

One exposure one time isn't going to cause a problem, of course, especially at very low levels. But repeated exposures over time from multiple sources could create a threat, especially to young children whose brains and organs are still developing.

This project helps all the people who are financially backward and all those who couldn't afford lots of money for analysis. Especially the lead detection analysis, if #707 issue is solved then it will be of great use to a very big crowd.

### Commitment

Yes, I completely understand the commitment to this project and would try my level best for making this project successful. I will work according to the time-line mentioned above and will surely devote more than 6 hours a day for the development of the project and the community.

### Reference

1. [https://publiclab.org/notes/tech4gt/02-19-2018/gsoc-proposal-image-sequencer-v2-processing-on-steroids](https://publiclab.org/notes/tech4gt/02-19-2018/gsoc-proposal-image-sequencer-v2-processing-on-steroids)
2. [https://github.com/publiclab/image-sequencer/issues/431](https://github.com/publiclab/image-sequencer/issues/431)
3. [https://github.com/mattdesl/fontpath](https://github.com/mattdesl/fontpath)
4. [https://github.com/publiclab/image-sequencer/labels/performance](https://github.com/publiclab/image-sequencer/labels/performance)
5. [https://github.com/publiclab/image-sequencer/issues/979](https://github.com/publiclab/image-sequencer/issues/979 "https://github.com/publiclab/image-sequencer/issues/979")