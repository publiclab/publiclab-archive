---
title: "spectral-workbench released for Node.js"

tagnames: 'web-development, spectral-workbench, code, javascript, nodejs'
author: warren
path: /notes/warren/04-07-2016/spectral-workbench-released-for-node-js.md
nid: 12933
uid: 1
cids: 23525,23526,23527
---

![](https://publiclab.org/public/system/images/photos/000/015/401/original/Screenshot_2016-04-07_at_12.05.45_PM.png)

# spectral-workbench released for Node.js

by [warren](/profile/warren) | April 07, 2016 16:19

April 07, 2016 16:19 | Tags: [web-development](/tag/web-development), [spectral-workbench](/tag/spectral-workbench), [code](/tag/code), [javascript](/tag/javascript), [nodejs](/tag/nodejs)

----

I spent a little time over the past few days to do a test, and was able to get the JavaScript portions of [Spectral Workbench 2](https://github.com/publiclab/spectral-workbench) to run independently from the parent Rails application, and was able to get it running as a pure JavaScript library, and release it as an NPM module: https://github.com/publiclab/spectral-workbench.js

You can now install spectral-workbench with:

    npm install spectral-workbench

Note that not all functions can be run from Node.js, since some still depend on a browser environment and HTML. The goal here is to modularize so that:

* code is more maintainable
* the JavaScript modules are potentially more broadly useful on their own

I'm interested in how these functions could be further broken down into smaller, reusable parts, and also how they might be of use to other spectrometry hackers out there. 

All the tests are running and maybe the next step would be to make it possible to read an image directly from a Node.js console, and extract a spectrum. I also think this is a good space to try reading in various spectral data formats -- that functionality would then be made available in SpectralWorkbench.org. There's also more modularization to do -- for example, further generalizing some of the functions, and breaking out the web-UI-related code, potentially into its own sub-library. 


[![Screenshot_2016-04-07_at_12.12.41_PM.png](//i.publiclab.org/system/images/photos/000/015/402/large/Screenshot_2016-04-07_at_12.12.41_PM.png)](//i.publiclab.org/system/images/photos/000/015/402/original/Screenshot_2016-04-07_at_12.12.41_PM.png)



This is just an experimental step, but if others out there are interested in developing spectral analysis software, we may be able to build a wider coalition around these tools if they're more flexible and repurposable. I still think the vast majority of DIY spectrometry folks will use SpectralWorkbench.org, but this may help us to refine the tools that underpin it. 