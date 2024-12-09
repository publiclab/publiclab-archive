---
title: 'GSoC proposal: Image-Sequencer v2 : Processing on steroids'
tagnames: software, gsoc, soc, response:13975, gsoc-2018, soc-2018, image-sequencer, soc-2018-proposals, gsoc-2018-final, first-time-poster
author: tech4gt
path: /notes/tech4gt/02-19-2018/gsoc-proposal-image-sequencer-v2-processing-on-steroids.md
nid: 15767
uid: 523178

---

# GSoC proposal: Image-Sequencer v2 : Processing on steroids

by [tech4gt](../profile/tech4gt) February 19, 2018 13:57

February 19, 2018 13:57 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [image-sequencer](../tag/image-sequencer), [soc-2018-proposals](../tag/soc-2018-proposals), [gsoc-2018-final](../tag/gsoc-2018-final), [first-time-poster](../tag/first-time-poster)

----

# About me

_**Name: Varun Gupta**_

**Email: [varun.gupta1798@gmail.com](mailto:varun.gupta1798@gmail.com)(personal) / [varung.it.16@nsit.net.in](mailto:varung.it.16@nsit.net.in)(educational)**

**Github: [tech4gt](https://github.com/tech4gt)**

**Gitter Nickname: tech4gt**

**Location:** **New Delhi, India**

**Affiliation: BE Information Technology at Netaji Subhash Institute of Technology(NSIT) (Batch of 2020)**

## Project description

_Image Sequencer is a sequential image processing library completely written in javascript which currently supports Node.js and the browser. It has the capability of outputting the processed image at each step as well as a CLI for ease of use right from the terminal._

## Abstract/summary:

_Goal of the project is enhancing Image-Sequencer for both users and contributors by adding more modules, enhancing existing ones, improvisations on demo, an even better CLI and an a plugins system to make module contribution easier and independent._

## Problem

- The current module contribution system needs for you to clone the code and make changes to it and generate a pull request, this is not a solution viable for ling term because the source code size would keep on increasing, also if a user does not wish to use all the modules he/she would have to download all of them, this also makes debugging difficult.
- Current demo is not very feature rich and needs improvements in various areas, for instance it doeas not support caching of files for offline use, sharing directly from the demo and the UI can use some improvements as well
- The current CLI syntax is long and tedious, does not support naming of the output image and hence chainability is not very effective. For instance currently to chain the cli with moving the final image to a new location looks like this

```
sequencer -i "image path" -o "path to output directory" -s "steps" && mv "output path/sequencer
```

- Some modules need very high computational power and the CPU is falling short, Edge Detection for instance takes incredibly long times to process for higher resolution images and hence these calculations should be GPU accelerated
- The project is not setup with stuff like codecov, codeclimate and others
- Mobile browsers and lower grade hardware have a hard time processing images due to limited processing power and thermal limitations, also long processing times give an unsatisfactory user experience especially on mobile devices.

![](https://imgur.com/download/wH6ryyk)

![](https://imgur.com/download/OCzHFNO)
According to statistics a considerable amount of users are using devices with low processing power, especially in under privileged communities and developing countries. This hardware can simply not run heavy modules locally.(in many cases mobile devices is the only device people own)

## Proposed Solutions

### Adding a plugin system ([Issue 190](https://github.com/publiclab/image-sequencer/issues/190))

Making it easier for people to develop modules independently, the modules will be divided into 2 categories, _Core Modules_ and _Plugin Modules_

- Core modules would be bundled with the source code and they would provide a basic set of functions
- Plugin modules would be more complex and would not be bundled with the source code but would be installed via _NPM_ and then can be binded with the main project to customize Image Sequencer according to needs
![](https://user-images.githubusercontent.com/25617855/37243382-480e8216-249e-11e8-9b73-9d0dde341dd1.jpeg)

Currently the modules are hardcoded into the modules.js file but by having a modules.json file which will contain the details for all the modules currently bound to the system and modules.js will load its modules based on the information from this file and being a json file more modules can be dynamically added and removed

Building a CLI Around the new architecture so that non technical users can directly add modules from the CLI, after completion this will be the workflow

```
npm i image-sequencer
npm i sequencer-blur
sequencer --bind-module sequencer-blur
sequencer -i "
```

Adding a one line module building option using the dynamic module

### RESTful API ([Issue 198](https://github.com/publiclab/image-sequencer/issues/198))

An express server and a RESTful api for clients with low processing power. This expands the reach of the project to a much wider audience particularly people who cannot afford higher tier hardware to run complex modules like Edge Detection.This also provides a new way of using image sequencer and opens the project up for future clients such as native apps. Also the user will have an option in the UI to use local machine or remote server for processing and a time threshold in which if the processing does not complete the code will fallback to using API. Images will be uploaded to imgur api and link will be sent to the api. API structure is listed below:

#### `/api/v1/convert`

```
Request body:
{
    image: String,
    steps : [String],
}

Response body:

{
    images : [String]
}
```

![](https://imgur.com/download/ODOzqe2)

### CLI Improvements

Refactor the cli and add `-n --out-name` option to name the final output image, by default this will be set to the name of the input image. Extension detection and conversion to seamlessly convert between file formats without even specifying the convert step. The syntax for the above example will look like

```
sequencer -i "photo.jpg" -s "steps" -o "out dir" && mv "outdir/photo.jpg" "target dir"
```

A conflict of name will be resolved by prompting the user for a new name and by default adding appropriate number to the name of the image

Also using the `-n` option for automatic extension detection the following command will invoke the proposed jpg to png module on the final image and export it as a png image

```
sequencer -i "photo.jpg" -n "photo.png -s "steps""
```

- Setup the project with CodeCov, bithound,codefactor, codeclimate and codebeat to increase code maintainability and quality. A deploy to heroku button for quickly deploying and testing our newly created server on heroku
Documentaion should look something like this

![](https://user-images.githubusercontent.com/25617855/36345819-29b9c4ac-1458-11e8-9ae3-43c230bee646.png)![](https://imgur.com/download/wEmUFRE)

- A list of module ideas(non-exhaustive):
  - [blur](https://www.npmjs.com/package/ndarray-gaussian-filter)
  - [Text Overlay](https://github.com/mattdesl/fontpath-simple-renderer)
  - [Histogram](https://www.npmjs.com/package/histogram)
  - [Dithering](https://github.com/publiclab/image-sequencer/issues/138)
  - [Flood Fill](https://github.com/hughsk/flood-fill)
  - Png to jpeg and vice versa([https://github.com/yahoo/pngjs-image](https://github.com/yahoo/pngjs-image))
  - [Contrast](https://github.com/publiclab/image-sequencer/issues/157)
  - Saturation
  - Combine(Combine different channels of different images)
  - [Encrypt using AES or any other suitable algorithm](https://github.com/publiclab/image-sequencer/issues/178)
  - [FaceDetection](https://github.com/jaysalvat/jquery.facedetection)
  - [Region Detection](https://github.com/publiclab/image-sequencer/issues/172)

# Current issues on github which will be closed: #[177](https://github.com/publiclab/image-sequencer/issues/177),#[178](https://github.com/publiclab/image-sequencer/issues/178),#[176](https://github.com/publiclab/image-sequencer/issues/176),#[172](https://github.com/publiclab/image-sequencer/issues/172),#[159](https://github.com/publiclab/image-sequencer/issues/159),#[158](https://github.com/publiclab/image-sequencer/issues/158),#[157](https://github.com/publiclab/image-sequencer/issues/157)#[138](https://github.com/publiclab/image-sequencer/issues/138),#[130](https://github.com/publiclab/image-sequencer/issues/130),#[119](https://github.com/publiclab/image-sequencer/issues/119),#[116](https://github.com/publiclab/image-sequencer/issues/116),#[112](https://github.com/publiclab/image-sequencer/issues/112)

  
## Linting

Since linting is a very important part of development workflow and ensuring code quality, the code written would be properly linted in order to be less bug prone and better readability. Also I would add proper comments so as to make the code easier to understand for new contributors

## Timeline/milestones (May 14 - Aug 6)

My semester exams end around 30 May and hence I would not be able to do very significant contributions in the first one-two weeks but I will make up for it in the following weeks(Link to my academic calendar : [http://www.nsit.ac.in/static/documents/calender/UG/calender\_B.E. even semester 2018.pdf](http://www.nsit.ac.in/static/documents/calender/UG/calender_B.E.%20even%20semester%202018.pdf)

### **Weeks 1,2 (May 14 - May 27)**

CLI syntax refactoring and addons like adding the final name parameter and implementing extension detection for a new and supercharged CLI which is chainable.

### **Week 3 (May 28 - June 3)**

Implementing the conversion module which converts images into different formats to integrate with the CLI extension detection also implementing one line module genaration with the CLI using dynamic module. Peer and mentor review for the new CLI.

### **Week 4,5 (June 4 - June 17)**

Implementing the new module system and make separate existing modules into core and plugins, publish the plugin modules as npm packages, building the CLI for it.

### Week 6 (June 18 - June 24)**Fixing bugs or delays encountered, adding unit tests for the features implemented and incorporate the suggestions from the community into the codebase**

### **Week 7,8 (June 25 - July 8)**

GPU accelaration for heavy calculations with GPU.js. Adding support for CodeCov, Bithound, Codefactor, Codeclimate and Codebeat to increase code maintainability and quality and updating the documentation with the badges plus a deploy to heroku button so that new contributors can easlily deploy the API. Peer and mentor review for the new module system.

### **Week 9,10 (July 9 - July 22)**

Implementing finalized module ideas. Writing unit tests for the new modules. Peer review for gpu accelaration.

### **Week 11,12 (July 23 - August 6)**

Feedback and bug fixes. Final submissions and completion. Start with the RESTful API work on which will continue after summer

## Needs

_I would be implementing all the code i have mentioned above but help from other contributors in always appreciated ;-)._

_We will eventually need to deploy our API to a server with decent processing capabilities.(Can also be done later at anytime)_

## Contributions

I have been actively contributing to the Image Sequencer project since quite a while now and recently I have been accepted into the **Public Lab reviewers team**.

This is my fork of the project: [https://github.com/tech4gt/image-sequencer](https://github.com/tech4gt/image-sequencer)

Below is a non-exhaustive list of my most notable contributions to the project

### CLI Improvements

- Added Basic Mode to only output final image (**Merged PR #154**)
- Added Progress Bar for syncronus operation (**Built PR #180**)
- Added Config parameter to pass the details of the steps (**Merged PR #171**)
- Create Output Directory immediately before image processing (**Merged PR #167**)
- Inform The user of the async operation(**Merged PR #152**)

### Module Contributions

- Added Canny Edge Detection Module for detecting edges from a png image (**Merged PR #168**)
- Added Brightness Module for manipulating percentage brightness(**Merged PR #161**)

### Documentation and bug fixes

- Added bookmarklet to replace all images in a page (**Merged PR #164**)
- Created documentation for the added features and bug fixes (**Merged PRs #174, #162, #160 ...**)

Apart from this detected and raised issues (**#177, #176, #174, #170, #162, #158, #157, #153**) and reviewed **PR #155,#179**

\*\*Full List of all PRs and Issues submitted \*\***[https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=author%3Atech4GT+](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=author:tech4GT%20)**

---------

## Experience

I am a Node.js based web and android developer, a javascript and kotlin lover and contributer to various open source projects as well as author of some.

I interned at open source organization [Coding Blocks](https://github.com/coding-blocks) for the better part of 2 years where I helped with open source development of Node and Android projects and acted as a teaching assistant for the bootcamps. Below is a list of my most notable projects

### 1\. Passport-Oneauth :

A custom passport OAuth2 strategy written in javascript for coding blocks' [Oneauth](https://github.com/coding-blocks/oneauth) Server which plugs into the [passport](http://www.passportjs.org/) middleware and provides authentication for the OAuth2 compliant server oneauth, inspired by [passport-facebook](https://www.npmjs.com/package/passport-facebook) and [passport-google-oauth](https://www.npmjs.com/package/passport-google-oauth) (Authored)

**npm**: [https://npmjs.com/package/passport-oneauth](https://npmjs.com/package/passport-oneauth)

**github**: [https://github.com/coding-blocks/passport-oneauth](https://github.com/coding-blocks/passport-oneauth)

### 2\. Shortlr :

A custom URL shortening service written in node.js inspired by google's [goo.gl](https://goo.gl/) adding features like custom shorturls and login with OAuth2 (**Contributed**)

**live demo**: [https://cb.lk/admin](https://cb.lk/admin)

**github**: [https://github.com/coding-blocks/shortlr](https://github.com/coding-blocks/shortlr)

### 3\. Hacker-Blocks Extended :

A Node.js based portal for submission and evaluation of static websites and android apps (**Co-Authored**)

Hacker-Blocks-Extended/dev-submit is a complete backend built on an express.js and potgreSQL based stack which has a RESTful API for submissions and testing using [phantomjs](http://phantomjs.org/) and [Appetize.io](https://appetize.io/) . Our vision for this project is to build a portal for practicing development like there exist for competitive programming. (**Co-Authored**) (Ongoing)

github: [https://github.com/coding-blocks/dev-submit](https://github.com/coding-blocks/dev-submit)

### 4\. Chrome Extension for shortlr :

A chrome extension that shorts a url using the shortlr API and copies it to user's clipboard (**Authored**)

**github**: [https://github.com/coding-blocks/shortlr\_chrome\_extension](https://github.com/coding-blocks/shortlr_chrome_extension)

## Teamwork

_I was a part of the coding blocks organization where we teach students how to code. All the code written here is open source and i worked with the team of interns on many open source projects some of which are mentioned above. Apart from that I also helped students learn as teaching assistant in the bootcamps "Data structures and algorithms in java" and "Android App Development". I cleared doubts and helped people debug their code and hence I have complete understanding of working in a team, respecting other members' opinions and maintaining protocol. I understand the importance of team work in any great project._

\_  
\_

# 

## Outreach\_I strongly believe in sharing knowledge and collective growth, I have tried to encourage other contributors and newcomers to contribute to the project through opening FTO(First Timers Only) issues([List Here](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=is:issue%20author:tech4GT%20label:first-timers-only%20)) and I would continue to do so. I will allow for newcomers to contribute to the project by breaking up tasks into smaller pieces and opening FTO issues for easier tasks. Also a part of my proposal is to allow for independent module development so that developers can make modules for image-sequencer without going through the process of getting it approved, also they would be able to publish their modules separately if they want to. I would love to work with other people on the project and i will try to make the project as developer friendly as possible.

\_

---------

## Passion

_I am a javascript lover and an Image processing enthusiast. The way we can change an entire picture by simple mathematical transformations is just fascinating for me and hence i love Image Sequencer. I also admire the way we can apply image processing in real life to get various types of information from plant and soil health to particles in water._

## Audience

_I believe this project can be helpful to small scale farmers and peasants where the health of their crops and soil can be analyzed and especially in a country like india where majority of the people cannot afford to buy expensive equipment and pay loads of money for analysis._

## Commitment

_I completely understand the commitment here and I would love to commit myself to this project and grow as a programmer, I currently spend almost 6 hours a day on open source development I am willing to devote any amount of time required for the program and since the program overlaps with my semester break it would be possible to do so._