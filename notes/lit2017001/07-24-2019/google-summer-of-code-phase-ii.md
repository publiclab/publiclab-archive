---
title: 'Google Summer of Code: Phase II'
tagnames: gsoc, soc, gsoc-2019, soc-2019, soc-2019-eval
author: lit2017001
path: /notes/lit2017001/07-24-2019/google-summer-of-code-phase-ii.md
nid: 20292
uid: 577890

---

# Google Summer of Code: Phase II

by [lit2017001](../profile/lit2017001) July 24, 2019 22:26

July 24, 2019 22:26 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-eval](../tag/soc-2019-eval)

----

It has been a very splendid time till date working on Image Sequencer and I learnt a lot of things. Here I will summarize, some core points of my work from the very first day of the coding period:

## Phase I

- Implementing WebAssembly:

In this part, I explored webassembly (or popularly known as wasm) which was used to accelerate the pixel processing implemented in various modules inside Image Sequencer. This made the modules' working faster and hence optimized the overall working. Initially, I was using emscripten but later came to know it does not allow the passing of code from JavaScript to the language like C, C++ we are using to be compiled to wasm. To overcome, I used the native wasm compiler and got the job done. But that was not the end of the task as the heavy part came when, I came to know that both browser and node versions of the wasm functionality could not be achieved by the same peice of code. So yes, completing that was a bit challenging part.

- Implementing toggleWasm functionality:

This was a very cool feature suggested by my mentors, where I implemented a functionality to toggle between the wasm and the non-wasm versions of the code.

- Testing out things and documenting them:

Here I changed various tests and added the documentation to the newly added features and functionalities which can help the people better know about the project. We also worked on bench marking the wasm tests alongside the other ones and the results were proving the efforts made.

- Helping others and making first-timer issues

In this phase I opened some first-timer issues and helped the new contributors to get those PRs merged. I also participated in the open calls which is a cool time to know about what others are doing and asking your doubts which makes the issue solving a lot easier.

## Phase II

- Minify-Image module:

This was a module, as the name suggests, the one we can use to minify images both on browser and node. It takes the image-quality as input and produces a minified image. This uses lossy compression as the dimensions are not affected, rather the quality of image is reduced. I, also documented the module and added the test that actually checks for the functionality by comparing the size of input and output images.

- Fixing Insert-step functionality:

The insert step funtionality was broken and I fixed the same and right now I am working on adding UI tests, and am actually learning the same to do it in a better way.

- Colorimetry

Initially, I started with working on making the UI for the colorimetry project (which is a great tool to measure indoor pollution levels using the colorimetry badge) as described in the mock-up but later due to some change in plans as discussed between me and my mentor, I am now working on a different UI. Later, I will be integrating Image-Sequencer inside and getting the basic functionality completed.

- Web workers

So, this part comprises of running Image-Sequencer on a different thread so that other processes running on the browser don't slow down. I am still exploring the best way to do that and have came up with one which is causing some errors in the browser currently. Searching for some better options to do that more efficiently.

- Collaboration with team and helping out new contributors:

I have opened some first-timer issues and helped people come through it. Also I have been in regular talks with my team mates and helped them and got helped by them to solve the issues.
As suggested by my mentors in the first-phase evaluations, this time I always recorded my progress on the PRs so that others can better understand my code and help out. I also adopted parallel working strategies like those of colorimetry and web-workers so that it doesn't slow on my progress and truly concurrency is a cool thing.

- Better documentation:

I have also opened an issue for documenting various parts of code to make it more user and contributor friendly. This is a way long process and I make changes whenever I come across some parts of code, I feel can be better explained.

This is something, I am up to till date and will continue with adding features that will enhance all my previous work like colorimetry and try finding solutions for issues like web-workers.

Apart from this, it has been my priority to document the things better and I will continue doing the same. First-timer issues have been a great way to interact with new contributors and that really feels good.

At the end, I would like to thanks my mentors to support me and for helping me in getting all this in place.