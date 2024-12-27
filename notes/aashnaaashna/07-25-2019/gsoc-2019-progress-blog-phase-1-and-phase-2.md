---
title: "Gsoc-2019 Progress Blog: Phase 1 and Phase 2"

tagnames: 'soc-2019-eval'
author: aashnaaashna
path: /notes/aashnaaashna/07-25-2019/gsoc-2019-progress-blog-phase-1-and-phase-2.md
nid: 20317
uid: 553271

cids: 25146,25147,25149,25150,25188

---

# Gsoc-2019 Progress Blog: Phase 1 and Phase 2

by [aashnaaashna](../../../profile/aashnaaashna) | July 25, 2019 18:45

July 25, 2019 18:45 | Tags: [soc-2019-eval](../tag/soc-2019-eval)

----

I am working for Image Sequencer and for reference you can have a look at my proposal [here][1]. This post is intends to provide a summary of my progress in the GSoc journey.

# PHASE 1

- Adding Color picker for inputs  
which provided ease of use for user to input color values in many modules - Crop, DrawRectangle, Grid- overlay, Paint-Bucket, Replace-color, Text-Overlay, Tint.
- Added Noise Removal module  
with algorithms - Median Filtering and Mean Filtering. As implied it processes a noise ridden image to reduce it.
- Text Overlay compatible with Node  
This was my phase 1 task but it was completed in the second phase.
- Added Eslint, Git Husky and Lint-staged  
This has helped to provide various javascript configurations to be maintained in the project and improved the maintainability and coding rules withing the codebase. This was a 3rd Phase task but was completed early within the community bonding period.

Apart from these I also did some **bonus commits!!**

- Added the download image button and removed it from image click which was troublesome for users.
- Corrected the jasmine script.
- Also added more Eslint configurations for project requirements.


# PHASE 2

- Successfully introduced Opencv.js  
to the code-base to enable the use of powerful image-processing in Image Sequencer.
- Implemented Particle detection and identification for microscopic images using opencv.js  
in the project.Unfortunately due to unavailability of npm versions the pull request has not been merged in the project but work is still going on to incorporate it by the most suitable options.
- Solved issue of the image previews taking long to load  
The fix helped to load the previews much faster and also solved the problem of the app crashing due to the time it took to load very large images.

I have also opened first - timer only issues to welcome new-comers into the community.

## Tasks left from Phase 1 

 1. UI testing using Jasmine Jquery is still left to be achieved. Attempts were made to achieve UI testing using Jasmine-jquery but it hasn't yet been completed.

 2. "Click to add inputs" is also left. This feature enables the user to point on image to be able to enter the input coordinates.

This has been my journey so far, happy to share my progress. To gain detailed information of the work please visit [here][2].

Keep Learning and keep contributing!!

  [1]: https://publiclab.org/notes/aashnaaashna/04-03-2019/soc-proposal-image-sequencer
  [2]: https://github.com/publiclab/image-sequencer/commits?author=aashna27