---
nid: 20682
title: GSoC'19 with Public Lab
path: public/static/notes/lit2017001/08-26-2019/gsoc-19-with-public-lab.md
uid: 577890
tagnames: google-summer-of-code,gsoc-19,soc-19,gsoc-final-eval,gsoc-2019-final-report
---

# GSoC'19 with Public Lab

# GSoC'19 with Public Lab

![](https://avatars2.githubusercontent.com/u/4621650?s=200&v=4)

**Student:**

- Divy Khare ([divy123](https://github.com/Divy123))

**Mentors:**

- Jeffrey Warren ([jywarren](https://github.com/jywarren))
- Igor Wilbert ([igorwilbert](https://github.com/igorwilbert))
- Rahul Bhatia ([rbhatia46](https://github.com/rbhatia46))
- Harshith Pabbati ([harshithpabbati](https://github.com/harshithpabbati))
- Sagarpreet Chaddha ([sagarpreet-chaddha](https://github.com/sagarpreet-chadha))

## Overview

This summer, I worked with [Public Lab](https://publiclab.org/) with the aim to optimize the performance of image sequencer, add modules to it, add more tests, documentation and lay the foundation of colorimetry, a web based tool to measure indoor pollution level.

The main objectives of my projects were:

- **To implement web assembly for pixel manipulation.**
  - In this part, I explored webassembly (or popularly known as wasm) which was used to accelerate the pixel processing implemented in various modules inside Image Sequencer. This made the modules' working faster and hence optimized the overall working. Initially, I was using emscripten but later came to know it does not allow the passing of code from JavaScript to the language like C, C++ we are using to be compiled to wasm. To overcome, I used the native wasm compiler and got the job done. But that was not the end of the task as the heavy part came when, I came to know that both browser and node versions of the wasm functionality could not be achieved by the same peice of code. So yes, completing that was a bit challenging part.
- **Implementing toggleWasm functionality**
  - This was a very cool feature suggested by my mentors, where I implemented a functionality to toggle between the wasm and the non-wasm versions of the code.
- **Testing out things and documenting them**
  - Here I changed various tests and added the documentation to the newly added features and functionalities which can help the people better know about the project. We also worked on bench marking the wasm tests alongside the other ones and the results were proving the efforts made.

![code search demo](https://i.imgur.com/ZOTWNnS.png)

_Fig. 1: A screenshot for benchmark tests with wasm._

![code search demo](https://i.imgur.com/tE70Qi5.png)

_Fig. 2: A screenshot for benchmark tests without wasm._

- **Minify-Image module**
  - This was a module, as the name suggests, the one we can use to minify images both on browser and node. It takes the image-quality as input and produces a minified image. This uses lossy compression as the dimensions are not affected, rather the quality of image is reduced. I, also documented the module and added the test that actually checks for the functionality by comparing the size of input and output images.
- **Fixing Insert-step functionality**
  - The insert step funtionality was broken and I fixed the same.
- **Improving Documentation**
  - I have also opened an issue for documenting various parts of code to make it more user and contributor friendly. This is a way long process and I make changes whenever I come across some parts of code, I feel can be better explained.
- **Making Colorimetry UI**
  - In this, I made a simple UI using HTML, CSS, JavaScript as per the mock up provided to me by the mentors.

![code search demo](https://i.imgur.com/V34DaQN.png)

_Fig. 1: A screenshot for colorimetry UI._

- **Making Colorimetry function based on Image-Sequencer**
  - In this, Image Sequencer has been used to crop and average the two patches of the colorimetry badge and then output the ratio of darkness of left part of the badge and the right one.

## Code Contributions

All of my work related to the search can be seen below:

### Colorimetry

- https://github.com/publiclab/colorimetry/pull/22
- https://github.com/publiclab/colorimetry/pull/14
- https://github.com/publiclab/colorimetry/pull/13
- https://github.com/publiclab/colorimetry/pull/11

### Image 
- https://github.com/publiclab/image-sequencer/pull/1149
- https://github.com/publiclab/image-sequencer/pull/1131
- https://github.com/publiclab/image-sequencer/pull/1093
- https://github.com/publiclab/image-sequencer/pull/1169
- https://github.com/publiclab/image-sequencer/pull/1135

## Future Plans

Image Sequencer has lots of opportunities to work with:

- **UI testing**: I am planning to create a wel established setup for UI testing in Image Sequencer and colorimetry both. I am planning to use Jest with puppeteer for this as it is a highly recommended choice.
- **Generalizing Colorimetry**: We can plan to generalize the use case architecture as discussed in (#18). This is a great place to expand what we are doing today for tomorrow.
- **Creating more FTOs and improving documentation**: I will be working on helping more and more first timers and improve documentation to help not only the new contributors but also to the regular ones. In this, I also plan to document the colorimetry project so that it becomes easy for others to contribute.

As I love being a contributor of Public Lab, I am hoping to work on the above mentioned features in next couple of months.

## Related Blog Posts

- [GSOC 2019: Optimising Image Sequencer using web assembly, adding Minify-Image MOdule and various code fixing and refactoring ](https://publiclab.org/notes/lit2017001/07-24-2019/google-summer-of-code-phase-ii)

## Thanks

I would like to thank my mentors **Jeffrey Warren** ([jywarren](https://github.com/jywarren)), **Igor Wilbert** ([igorwilbert](https://github.com/igorwilbert)),\*\* Rahul Bhatia\*\* ([rbhatia46](https://github.com/rbhatia46)), **Harshith Pabbati** ([harshithpabbati](https://github.com/harshithpabbati)), **Sagarpreet Chaddha** ([sagarpreet-chaddha](https://github.com/sagarpreet-chadha)) for their awesome guidance and support. And of course, many thanks to the other members of Public Lab for making it such a great learning place. It's been a great experience. The summers were awesome. :tada: