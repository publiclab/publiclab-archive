---
nid: 14780
title: GSoC 2017: Final Work Product of Image Sequencer Project
path: public/static/notes/ccpandhare/08-23-2017/gsoc-2017-final-work-product-of-image-sequencer-project.md
uid: 503543
tagnames: image-processing,gsoc,google-summer-of-code,image-analysis,gsoc-2017,soc,soc-2017,response:14788
---

# GSoC 2017: Final Work Product of Image Sequencer Project

# Developing Image Sequencer as a Library

---------

## Project Details

**Project Proposal** : [publiclab/developing-imge-sequencer-as-a-library](https://publiclab.org/notes/ccpandhare/03-18-2017/developing-image-sequencer-as-a-library)

**GSoC Project Link** : [https://summerofcode.withgoogle.com/projects/#5154454941728768](https://summerofcode.withgoogle.com/projects/#5154454941728768)

**Repository Host** : [GitHub](https://github.com/)

**Repositories to which contributions were made** [publiclab/image-sequencer](https://github.com/publiclab/image-sequencer), [jywarren/fisheye-gl](https://github.com/jywarren/fisheyegl/)

**Languages and Frameworks** : `JavaScript`, `Node.JS`, `HTML`, `CSS`, `jQuery`

**Final Work Product** : A JavaScript image processing library "image-sequencer" made available via [NPM](https://npmjs.org/package/image-sequencer) which can be used from the UNIX Command Line, an Online Demo (In browser compatible JS) or in NodeJS.

**Project Planner GitHub Issue** : This GitHub issue has a checklist of all my contributions during GSoC with references to all pull requests -- [https://github.com/publiclab/image-sequencer/issues/23/](https://github.com/publiclab/image-sequencer/issues/23/)

**Link to GitHub Project** : ["Image Sequencer GSoC Project"](https://github.com/publiclab/image-sequencer/projects/1)

**Distribution link (NPM)** : [npm/image-sequencer](https://npmjs.org/package/image-sequencer)

## Sections

This Document is divided in the following sections:

- Project Description - This section describes my project - What it does and a link to the Demo.
- Get involved in the development - What arre the further steps, and what tasks were undertaken to help new contributors to get started wih the project.
- How the Demo works - This section describes how to use the online demo.
- How the CLI works - This section describes how to use the CLI.
- Code Links and Statistics - This section has links to all the Issues and Pull Requests generated and resolved and some basic statistics.
- Features Implemented - A list of tasks undertaken by me in my GSoC Project

### Project Description

In this GSoC project, development of a JavaScript library for non-destructive image processing, [Image Sequencer](https://github.com/publiclab/image-sequencer) was started and the library was published to [NPM](https://npmjs.org/package/image-sequencer).

#### Introduction

Image Sequencer is different than other image processing libraries in the way that instead of modifying the original image, it creates a new image at each step in an instance. It works on both VanillaJS and Node.JS. It works as an API and can be easily integrated into one's projects which involve image processing. The targeted users of this library are scientists that require image processing for their research, or as a matter of fact, developers of any project requiring image processing.

#### Walkthrough

Image Sequencer can be used on NodeJS and on the Browser.

The working:

- One or more images are loaded in for processing.
- One or more transformations (called steps/modules) are applied.
- Outputs are generated after the application of these steps ("running").

Demo:
The Image Sequencer main demo can be found at [https://publiclab.github.io/image-sequencer/examples/](https://publiclab.github.io/image-sequencer/examples/)

### Get involved in the development

Although I shall continue to contribute to Public Lab, I have created some `first-timer-only` issues to help new contributors get started with the code base. They can be found [here](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=is%3Aissue%20is%3Aopen%20label%3Afirst-timers-only).

Next development Steps for Image Sequencer would be:

- Extending the CLI functionality
- Adding new Image Processing modules
- Extending support to animated GIFs
- Creating fuller documentations using an API development framework
- Possibly integrating Image Sequencer with [Infragram](https://infragram.org/)

[Contributing guidelines and how to contribute a module](https://github.com/publiclab/image-sequencer/tree/master/CONTRIBUTING.md)

### How to use the Online Demo

The online demo can be found [here](https://publiclab.github.io/image-sequencer/examples/).

- The Demo loads with a default image of a barrel distorted grid and a single step ("invert").

![Demo Default](https://publiclab.org/system/images/photos/000/021/458/large/Screen_Shot_%E0%A5%A7%E0%A5%AF%E0%A5%A9%E0%A5%AF-%E0%A5%A6%E0%A5%AC-%E0%A5%A6%E0%A5%AC_at_%E0%A5%A7%E0%A5%A7.%E0%A5%A6%E0%A5%A9.%E0%A5%A7%E0%A5%AF.JPG "Screen_Shot_१९३९-०६-०६_at_११.०३.१९.JPG")

- You can remove steps using the "cross" button at the right of the steps.

![Remove Step Demo](https://publiclab.org/system/images/photos/000/021/459/large/Screen_Shot_%E0%A5%A7%E0%A5%AF%E0%A5%A9%E0%A5%AF-%E0%A5%A6%E0%A5%AC-%E0%A5%A6%E0%A5%AC_at_%E0%A5%A7%E0%A5%A7.%E0%A5%A9%E0%A5%A8.%E0%A5%AA%E0%A5%AD.JPG "Screen_Shot_१९३९-०६-०६_at_११.३२.४७.JPG")

- You can add a step from the bottom of the Page. If the step accepts any inputs, The options for the same will be shown.
- The placeholders of the options denote the default values.

![Add Step Demo](https://publiclab.org/system/images/photos/000/021/460/large/Screen_Shot_%E0%A5%A7%E0%A5%AF%E0%A5%A9%E0%A5%AF-%E0%A5%A6%E0%A5%AC-%E0%A5%A6%E0%A5%AC_at_%E0%A5%A7%E0%A5%A7.%E0%A5%A9%E0%A5%A8.%E0%A5%A7%E0%A5%AF.JPG "Screen_Shot_१९३९-०६-०६_at_११.३२.१९.JPG")

- Change the image using the button on the top.

### How to use the CLI

Currently the CLI is in its basic stage and only one step can be added as of now. This is how to use the CLI:

```
image-sequencer $ npm i -g
```

This will install image-sequencer and enable the global binary command "sequencer". If you don't install globally, sequencer can also be accessed by the executable `index.js`

```
$ sequencer -i [PATH TO IMAGE] -s name-of-step
```

OR

```
image-sequencer $ ./index.js -i [PATH TO IMAGE] -s name-of-step
```

Help options can be accessed as:

```
$ sequencer --help
```

OR

```
image-sequencer $ ./index.js --help
```

### Code Links and Statistics

All Statistics are as of 23rd August 2017

**Project Planner GitHub Issue** : This GitHub issue has a checklist of all my contributions during GSoC with references to all pull requests -- [https://github.com/publiclab/image-sequencer/issues/23/](https://github.com/publiclab/image-sequencer/issues/23/)

**Link to GitHub Project** : ["Image Sequencer GSoC Project"](https://github.com/publiclab/image-sequencer/projects/1)

**Distribution link (NPM)** : [npm/image-sequencer](https://npmjs.org/package/image-sequencer)

**Link to GitHub Issues**

- [All Assigned Issues](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=assignee%3Accpandhare%20is%3Aissue) ![12 open, 33 Closed](https://publiclab.org/system/images/photos/000/021/383/large/AllIssuesOpenClose.JPG)
- [New Feature Requests](https://github.com/publiclab/image-sequencer/issues?q=assignee%3Accpandhare+is%3Aissue+label%3A%22new+feature%22) ![6 Open, 11 Closed](https://publiclab.org/system/images/photos/000/021/385/large/NewFeatureOpenClose.JPG "NewFeatureOpenClose.JPG")
- [Bugs Found & Resolved](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=is%3Aissue%20label%3A%22bug%22%20) ![3 Open, 5 Closed](https://publiclab.org/system/images/photos/000/021/386/large/BugsOpenClose.JPG "BugsOpenClose.JPG")
- [Questions Raised](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=is%3Aissue%20label%3A%22question%22%20) ![0 Open, 7 Closed](https://publiclab.org/system/images/photos/000/021/387/large/QuestionsOpenClose.JPG "QuestionsOpenClose.JPG")
- [Documentation Updates](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=is%3Aissue%20label%3A%22documentation%22%20) ![0 Open, 3 Closed](https://publiclab.org/system/images/photos/000/021/388/large/DocsOpenClose.JPG "DocsOpenClose.JPG")

**Pull Requests** : [All Pull Requests Opened by me](https://github.com/publiclab/image-sequencer/pulls?utf8=%E2%9C%93&q=is%3Apr) ![image description](https://publiclab.org/system/images/photos/000/021/390/large/PROpenClose.JPG "PROpenClose.JPG")

**Contributions** (Includes Build Files) :

![Contributions](https://publiclab.org/system/images/photos/000/021/389/large/contributions.JPG "contributions.JPG")

### Features Implemented

Image Sequencer has two major parts:

- The core library, which handles the images generated and the image processing modules.
- The Modules, which are responsible for the actual processing of images.

My project was broken down into three major phases:

- Implementing core functionality of the library
- Implementing image processing modules
- Creating demos for Image Sequencer

Core Functionality Features:

- Can handle multiple images at once
- Accepts input in various intuitive formats, and also in JSON -- making it very easy to use and implement in one's projects.
- Provides a UI handling system, which makes it very easy to create a User Interface which suits their project needs.
- Supports Modules which require textual input from the user and output textual values apart from the image.
- Produces no global variables, and hence doesn't clutter the main project's code.
- Chainable methods, Callbacks for easy usage.

Module Features:

- Every module works independently, making it easy to contribute modules and to port modules from existing libraries to Image Sequencer.
- Modules have their own `info.json` files which define them and their inputs and outputs. This helps to build User Interfaces.
- Modules handle their own UIs by emitting out events.