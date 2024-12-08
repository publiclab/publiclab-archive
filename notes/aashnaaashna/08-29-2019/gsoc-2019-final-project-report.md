---
title: GSOC 2019: Final Project Report
tagnames: gsoc-2019-final-report
author: aashnaaashna
path: /notes/aashnaaashna/08-29-2019/gsoc-2019-final-project-report.md
nid: 20717
uid: 553271

---

# GSOC 2019: Final Project Report

by [aashnaaashna](../profile/aashnaaashna) August 29, 2019 20:57

August 29, 2019 20:57 | Tags: [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

## GSOC 2019 Work Report

- **Student**: Aashna Mittall
- **Github**: @aashna27
- **Organisation**: [PUBLICLAB](https://fossasia.org/)
- **Project**: [Image Sequencer](https://github.com/publiclab/image-sequencer)

## Introduction

Image Sequencer is a sequential Image Processing and analysis system for browser, Node.js and the command line. It is non destructive in the sense that a new Image is created after each processing step. It is targeted towards people trying to run analysis on scientific imagery for their research.

## Final Deliverables

### A. Input and UI Enhancement:

Improved alternatives for entering color(rgba) inputs and position-coordinates.

- Colorpicker inputs for modules.
![color-picker](https://user-images.githubusercontent.com/26546120/62968959-b6a1aa80-bdfb-11e9-9e2e-1b9b57edcd32.png)

- Click image for entering position coordinates for image processing.
![ezgif com-crop](https://user-images.githubusercontent.com/26546120/62970486-1e0d2980-bdff-11e9-83ad-d8b8701af763.gif)
- Download functionality for step image.

### B. Project Maintainability

- Eslint, Husky and lint-staged were setup to ensure that the commits made to code-base comply with coding standards and also automated code consistency using the configs provided by the libraries, while documenting the functionality added and commands that are to be used. Comments were also incorporated along-side the configs to ensure easy understandability for fellow developers and future contributors.
- Refactored the use of a function and reduced duplicacy (pixel.set() function that is used to manipulate the rgb values of image pixels.

### C. Functionalities Added

- Added the all new Noise Reduction as a image processing module for Image Sequencer. It took input an image and the processing technique type(Mean Filtering and Median Filtering) and processed the image based on the input and showed great results for noise ridden images.
- Optimised Image Preview Generation for image thumbnails resolving the stalled preview creation in mobile devices and for huge images.

![ezgif com-video-to-gif(1)](https://user-images.githubusercontent.com/26546120/63457682-fa6e6280-c440-11e9-8974-52ac88cfcbd5.gif)

- Text Overlay Module was made compatible for Node environment.

### D. Opencv.js incorporated in Image Sequencer

- The marking of blobs/regions in microscopic images was made possible with the addition of Opencv.js to Image Sequencer. It also opens doors for advanced image processing in the app in coming future.

![collage(1)](https://user-images.githubusercontent.com/26546120/63457320-58e71100-c440-11e9-9346-358aa2533dc8.jpg)

### E. Bug Fixes and Improvements

- Fixed connectivity issues and got the saving image and image sequence dropdowns functional.
- Corrected script to get jasmine testing working for the project.
- Fixed grid-overlay module to work for negetive input values and in node environment.
- Fixed the bug on adding certain modules from drop-down selection.

## Code Links

Pull Requests for Image Sequencer - [Link](https://github.com/publiclab/image-sequencer/pulls/aashna27)

Issues in Image Sequencer - [Link](https://github.com/publiclab/image-sequencer/issues?q=is%3Aopen+is%3Aissue+author%3Aaashna27+-label%3Afirst-timers-only)

Blog Posts - [Link](https://publiclab.org/notes/aashnaaashna/06-26-2019/opencv-js-for-blob-detection-in-microscopic-images)[Link](https://publiclab.org/notes/aashnaaashna/07-25-2019/gsoc-2019-progress-blog-phase-1-and-phase-2)

First timer Only Issues - [Link](https://github.com/publiclab/image-sequencer/issues?q=is%3Aopen+is%3Aissue+author%3Aaashna27+label%3Afirst-timers-only)

## What's Left

This summer has been very exciting and while I was working on some tasks there was less time for a few tasks to be implemented so I have drafted them into well illustrative issues to be picked and worked upon in future.

- Bluring image with a given radius.
- Save image in different formats(eg JPG/JPEG)

## My Experience

It has been a great experience working for Publiclab this summer and it has been a great opportunity to interact and communicate with my mentors and fellow contributors. I would like to thank everyone for their support.