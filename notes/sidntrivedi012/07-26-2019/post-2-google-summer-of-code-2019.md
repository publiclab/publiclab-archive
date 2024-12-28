---
title: "Post 2 - Google Summer of Code 2019"

tagnames: 'spectral-workbench, gsoc-2019, soc-2019-eval, spectral-workbench-capture'
author: sidntrivedi012
path: /notes/sidntrivedi012/07-26-2019/post-2-google-summer-of-code-2019.md
nid: 20335
uid: 572743
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/034/169/original/Screenshot_2019-07-25_at_11.26.20_PM.png)

# Post 2 - Google Summer of Code 2019

by [sidntrivedi012](/profile/sidntrivedi012) | July 26, 2019 22:11

July 26, 2019 22:11 | Tags: [spectral-workbench](/tag/spectral-workbench), [gsoc-2019](/tag/gsoc-2019), [soc-2019-eval](/tag/soc-2019-eval), [spectral-workbench-capture](/tag/spectral-workbench-capture)

----

Martin Fowler, a Software Design Maestro said -

> "Not all eyes that notice bugs in Open Source code belong to saints who will report or repair them \>in the interest of the public good."

Thus, I tried to take my first step towards being a _saint_ by starting with solving some issues present in the demo of the capture code present in [Spectral-Workbench.js](https://github.com/publiclab/spectral-workbench.js). It was really a fun task to do and also helped me to get acknowledged about the codebase of the project.

The bug was that whenever one started the capture demo in a browser, the camera as well all other functionalities won't work since an error related to [flot.js](https://github.com/flot/flot) library popped up which prevented the graph from being plotted. Here's the error that was popping up -

```javascript
Uncaught Error: Invalid dimensions for plot, width = 0, height = 200
    at getCanvasDimensions (jquery.flot.js:803)
    at setupCanvases (jquery.flot.js:853)
    at new Plot (jquery.flot.js:224)
    at Function.$.plot (jquery.flot.js:2690)
    at getRow (capture.js:341)
```

I had never used `flot` before thus, I started to go through the documentation of the flot project. After some searching up and discussing with mentors, I came to find that the width was being set to 0 even though the `index.html` file had `width:100%` parameter in it. We had some discussion over it on the github issue thread and finally it was resolved by manually adding the width in the stylesheet and removing it from the html file instead.

I was looking for a better solution to it using javascript which made it take more time than it should have but ultimately, editing the css file was the thing I had to do ultimately.

Having done that, due to some personal circumstances I could not work and contribute for a few days. I am really lucky to have found such cooperating mentors who understood my situation and encouraged me to work.

Thus, currently I have been working on introducing a button in the demo to [connect PiCamera with the Spectral-Workbench](https://github.com/publiclab/spectral-workbench.js/issues/75). Have implemented most of the part but some error is arising due to the breaking of Travis CI which we'll try to get fixed within this week.

#### Making First-timer-issues (FTOs)

In Public Lab, we have a culture of giving back to the community by making First timer issues which a new contributer can easily solve and thus, get known with -

- the basic objective of the project.
- the directory structure of the project.
- the git workflow we follow while solving issues and sending patches.
- the way one should communicate in communities with other members.

Also, it gives him/her the start and the boost to contribute further. Every great contributer once started with a small bug/patch and eventually goes on to become a frequent contributor to the project.

Thus, I made a few First-timer-only issues in the project and to my surprise one issue was patched the other day. This made me realise how well the culture of open-source is thriving and spreading. I felt really happy to review their Pull-Requests and encouraged them to contribute more.

#### Next Milestones

Having completed the _Connect to Raspeberry-Pi_ feature, I have the following tasks on my roadmap -

- Patch the download button not working problem.
- Use grunt and bundle the files.
- Ensure that both the features are working.
- Work on the `getUsermedia API` and ensure that the project works on iOS.
- Refactor `capture.js` into independent components.

I have some more tasks to be completed after getting the above points ticked which I will chalk out after discussing with the mentors. As of now, my focus is to get the above milestones completed as soon and as efficiently as possible.

At the last, I would really like to thank all my mentors for their awesome guidance,belief and cooperation. I can't find better mentors than you.

`:wq` for now.