---
title: "GSoC proposal:  Image Sequencer"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects'
author: aashnaaashna
path: /notes/aashnaaashna/04-03-2019/soc-proposal-image-sequencer.md
nid: 18943
uid: 553271
cids: 23714,23719,23720,23727,23739,23776,23794,23836,23837,24878
---

![](https://publiclab.org/public/system/images/photos/000/031/186/original/ip.jpg)

# GSoC proposal:  Image Sequencer

by [aashnaaashna](/profile/aashnaaashna) | April 03, 2019 09:52

April 03, 2019 09:52 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [first-time-poster](/tag/first-time-poster), [rgsoc-2019](/tag/rgsoc-2019), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [soc-2019-proposals](/tag/soc-2019-proposals), [soc-2019-projects](/tag/soc-2019-projects)

----

---------

# Title : Image Sequencer enhancement focusing Module Implementations, Particle analysis and code Maintainability.

## About me

**Name**: Aashna MIttal

**Email:** [aashna.mittal27@gmail.com](mailto:aashna.mittal27@gmail.com)

**Github**: [https://github.com/aashna27](https://github.com/aashna27 "https://github.com/aashna27")

**Affiliation**: Indira Gandhi Delhi Technical University for Women

**Location:** Delhi, India

**Timezone**: Indian Standard Time (UTC +05:30)

**Google Code-in Mentor 2018 Publiclab**

---------

## Project description

_**Image Sequencer** is a sequential image processing library completely
written in javascript which currently supports Node.js and the browser.
It has the capability of outputting the processed image at each step as
well as a CLI for ease of use right from the terminal._

My proposal for the project is based on enhancements that would incorporate real world use cases into the project and testing and maintainability that will bring consistency in contribution, make reviewing and testing thorough.

### Abstract/summary :

The goal involves enhancing Image Sequencer and making it rich by incorporating:

1. More refined input options for coordinates(x,y) and color inputs
2. Optimizing resize, fixing load-Preview to reduce load time and improve application performance
3. Particle sizing and analysis using OpenCV
4. Noise removal for targeting better image refinement
5. Add Blur Radius functionality upon the existing blur module
6. Adding Compositing module
7. Improvise project maintainability and consistency. Add tests, documentation for new features added during coding period.

### Problem

The proposal idea described enhances Image sequencer by providing better user interface and user-friendly input options and expanding the domain by opening doors to real-world analysis . In addition the idea ensures preservation of project maintainability and testing alongside the addition of new modules and enhancement of the existing ones.

### Implementation

### Part 1 : **Input Enhancement**

Currently various modules such as the crop module, Paint-bucket module ask the user to manually input the position coordinates(x,y) ,however this can be improved by using mouse gestures("click") to input the respective values for a friendly user-experience.

![image description](/i/31348.png "input.PNG")

The click would trigger and event listener , which will help determine the coordinates of the position.

Additionally the color input for modules such as paintbucket, replace-color etc. can also be improved by improving the HTML UI to incorporate a color picker. There are various libraries that will facilitate color picker and the UI would thus include a field as below:

![image description](/i/31349.png "inputtt.png")

### Part 2 : Project Maintainability

I aim to ensure code consistency and pr testing by using

- **Husky for git hooks** ensures that the codebase stays clean and ensure certain qualitiy policies. Typical usage is for static analysis or [linting.It](http://linting.It) is useful to break the build if something is not right, but it is even more useful to auto-correct issues before committing.
- **Code Climate** provides three types of commit statuses for quality, security, or style issues.Important features of code-climate are maintainability checks,test [coverage.It](http://coverage.It) analyzes your code using 10-point maintainability assessment and users to enforce test coverage which requires all new code in a Pull Request to meet a configurable minimum threshold of test coverage percentage.

![image description](/i/31350.png "codeclimate.png")

### Part 3 : Real-world use cases using Particle sizing and Analysis

The particle identification for sizing and analysis involves the usage of OpenCV , their is a series of steps to be followed for achieving the output. Thanks to jywarren for identifying the approach.

![image description](https://media.springernature.com/lw785/springer-static/image/art:10.1007/s12145-018-0333-y/MediaObjects/12145_2018_333_Fig3_HTML.gif)

The above image is taken for reference purpose from [here.  
](https://link.springer.com/article/10.1007/s12145-018-0333-y)

To limit the usage of OpenCV I would use the meta-modules for binarization and edge-detection of the input image . Since the project is backed by Node.js OpenCV has to be explored for incorporation in the project(To be done during Community bonding period).

I have been through a few articles to back-up my approach and here are the links -

[OpenCV4Node,](https://www.npmjs.com/package/opencv4nodejs "https://www.npmjs.com/package/opencv4nodejs")

[Node-OpenCV , ](https://github.com/peterbraden/node-opencv "https://github.com/peterbraden/node-opencv")

[OpenCvTutorial,](https://community.risingstack.com/opencv-tutorial-computer-vision-with-node-js/ "https://community.risingstack.com/opencv-tutorial-computer-vision-with-node-js/")[  
](https://community.risingstack.com/opencv-tutorial-computer-vision-with-node-js/)

[MeasuringSize](https://www.pyimagesearch.com/2016/03/28/measuring-size-of-objects-in-an-image-with-opencv/ "https://www.pyimagesearch.com/2016/03/28/measuring-size-of-objects-in-an-image-with-opencv/")

![image description](/i/31351.png "opencv.PNG")

Above is just a snapshot of a portion of the code for measuring particle size, there are various steps involved that will be implemented during the course of implementation.

### Part 4 : Modules to be added

#### **1 ) Noise Removal Module**

There are various forms of Image noise and below is a pictorial representation(Interference Noise) of how the sequencer would be successful using this module.

![image description](/i/31352.jpg "Electrical-interference2.jpg")

Below is an easy representation of an algorithm for Noise Removal:

![image description](https://publiclab.org/i/31137.png "Noise_-8.png")

Use Case - It is really important for image processing to ensure correct analysis, and can be a refinement step before various Image Analysis procedures.

#### **2 ) Blur Radius feature in Blur Module**:

The blur radius will add another input mode to the blur module allowing images to be blurred following the input radius:

![image description](/i/31353.jpg "blur_radius.jpg")

### Part 5 : Scope for new Contributors

Throughout the period I will make sure to create first-timers only issue to help expand our community.

---------

**OUTREACH: I will also host meetups in my college and specially among my juniors to promote and encourage them to contribute to Public Lab and promote coding with Public Lab on my social media accounts.**

![image description](/i/31185.png "noise_description.PNG")

Some examples of about how I will create issues for new contributors, although the list is **not** just limited to these :

1. Description for new Added modules : This will be a simple start and also
motivate the contributor to go-ahead and search for them.
2. Documentation and typos : This will motivate the contributor to
understand the functionality and read through the
documentation.Instances of how this has been done in the past are : #187
, #884, 408\.
3. Help with CSS bugs: I would also guide them on how to address their first UI bugs in the project.

### Timeline/milestones

My semester exams are from 13th May to 25th May and this period overlaps a portions of community bonding period , however being really excited for the opportunity , I would make all the extra effort to ensure that I am active and catch up and discuss for events henceforth with my mentors . Also from the time my exams end I would devote my time to working towards implementing my proposal.

Also during the community bonding period I plan to Explore OpenCV for incorporation in the project as I have mentioned in the Implementation section(Part 3) of this proposal.

[Link to my academic calendar](https://www.igdtuw.ac.in/index.php?option=com_content&view=article&id=610&Itemid=196)

#### Week 1 (May 27 - June 2)

Adding **Code Climate** for maintainability of commits and test coverage, ****closes issue #920****.Additionally **UI testing** using jasmine which is a part of Image Sequencer will be added during this period.

#### _Week 2(June 3 - June 9)_

Modify the **HTML UI** to incorporate **color picker** input and using **click to add inputs for coordinates(x,y)**.
This will simplify input process. The color picker will be incorporated
using Bootstrap color picker or any other relevant library/module.This
will close issues #[597](https://github.com/publiclab/image-sequencer/issues/597) and #[796](https://github.com/publiclab/image-sequencer/issues/796).

#### Week 3 (June 10 - June 16)

Implementation of **Noise Removal** module **and adding** Unit Testing **for the module.**

#### _Week 4 (June 17 - June 23)_

**Make the **text Overlay** Module **compatible with Node** environment and **fix various bugs** in the project, to ensure continuous monitoring ,maintenance and improvement.**

#### **PHASE 1 EVALUATIONS (June 24 - June 28)**

Improve and refactor code till now and implement any suggested changes or enhancements.

#### _Week 5,6,7(June 29 - July 21)_

Perform **particle sizing and analysis** and implement the analysis using new **HTML UI** , presenting a statistical analysis of particle sizes in images. Also fix **resizing of images for loading preview of quick-add steps**.This will close issues #172 ****and**** \#922

#### **PHASE 2 EVALUATION (July 22 - July 26)**

Testing and incorporating any modifications or enhancements.

#### _Week 8(July 26- August 1)_

**Implement Compositing Module** along with its **Testing**. This will close issues #[961](https://github.com/publiclab/image-sequencer/issues/961 "https://github.com/publiclab/image-sequencer/issues/961").

#### Week 9 ( August 2 - August 8)

Implement the ability of **blurring image with a given radius** and add **testing** using **git husky** to ensure code maintainability and committing erroneous code.This will close issue #[944](https://github.com/publiclab/image-sequencer/issues/944).

#### Week 10 ( August 9 - August 12)

Add the functionality to save the image in various file formats example JPG/JPEG ****and**** provide documentation of all the necessary modules and new functionalities added and improved.

#### Week 10,11(August 13 - August 19)

I will devote my time in **fixing issues** and **drafting first-timer-only** issues. Alongside I would make CSS changes and **improve the UI/UX.**

#### **FINAL EVALUATION (August 19 - August 26)**

All throughout the period I will make sure to **review PRs** ,being a member of the reviewing team and help others with their issues and participate in **discussions and ideas**.

### Needs

While working on the above mentioned tasks, I will highly appreciate reviews and suggestions from other contributors in the community, like the culture has been till now.

### Contributions

I have been a part of public lab for around 6 months now and all this while I have had a really developing and supporting experience within the community. The fellow contributors and organization maintainers have helped me throughout and I am happy and proud to be a part of the reviewing team and GCI mentor 2018 for public lab. An account of my contributions is presented below:

#### Module Contributions

- Text Overlay Module (Merged #917)
- Threshold Module (Merged #722 )
- Dithering Module (Merged #617 )
- Rotate Module (Merged #454 )

#### Installation and Bug Fixes

- Corrected default view for Saturation Module (Merged #772)
- Fixes Crop module (Merged #803 )
- Fixes Decode-QR module (Merged #680 )
- TakePhoto fixes (Merged #641)
- Added scripts in package.JSON to fix installation (Merged #411)

#### UI Improvements

- Corrected view for centralizing Crop Module(Merged #867)
- Header opens new page (Merged #619)
- Modified style for step remove notification(Merged #620 )
- Added slider for brightness and blur modules (Merged #428)
- Added link in description of edge-detect module(Merged #419)

#### New Features and improvement

- RGB values displayed on hover (Merged #808)
- Added sliders for various modules for input (Merged #603)
- Toggle-able collapse added for modules(Merged #636 )
- Added second spinner for image loading (Merged #691 )
- Accept type images in input field (Merged #366)

#### Unit Testing

- Added tests for modules - Blur , Dither , Rotate. Resize etc. (Merged #752)
- Added tests for Text Overlay module (Merged #943 ).

#### I have opened up various issues - #751 , #491 , #588, #407, #408 ,#390 and [more.](https://github.com/publiclab/image-sequencer/issues?q=is:issue%20is:closed%20author:aashna27)

Reviewed following PRs - #931 , #908, #847, #736, #712 and more [can be seen here](https://github.com/publiclab/image-sequencer/pulls?q=is:pr%20is:closed%20reviewed-by:aashna27)

Also I have helped others with there issues and pull requests.

---------

### Experience

Currently, I am in my last year(4th Year) Of B.Tech, pursuing Information Technology from Indira Gandhi Delhi Technical University for Women(IGDTUW) . I love working on logical and challenging part of web development. I have worked extensively in Node.js and have been contributing to Image Sequencer from quite some time. I have 25 commits till now and plan to contribute more substantially this GSoc period and afterwards also.

Being a Google Code-In Mentor'2018 at Public Lab helped me review and guide young students. I plan to review more PR's and help the Image Sequencer project grow and make the code-base suitable for industry. I have and will continue contributing in PR discussion as well, to help fellow developers.

I worked as a tech intern in TCS last summer, wherein I built a web-application in Node.js using MogoDB for maintaining the [database.It](http://database.It) was a chat application having private chat and group-chat functionality using [socket.io](http://socket.io) framework.The application also allowed the users to login and signup using Facebook and Google+ , by using the passport OAuth strategy.[Github Link of the project.](https://github.com/aashna27/WebConnect)

---------

### Teamwork

Working as an Intern for TCS, got me the exposure of how teamwork is done in Software Development field.Additionally, I have taken part in Smart India Hackathon 2018 ,_a unique initiative to identify new and disruptive digital technology innovations for solving the challenges faced by our country and I learnt how one evolves to show their skills and motivate the members to achieve the target over a short period of time. Moreover contributing to Public Lab, helped me to interact and work with developers across the world. I learnt how we work to solve the community problems ourselves and also help each other to keep up the loop in Image Sequencer. I am really inspired , and would love to promote his kind of behavior wherever I go._

---------

### Passion

I had worked in java-script and node but had never been introduced to image-processing and how it works. Being here at _Public Lab_ and working for Image Sequencer has made me learn how we have so many algorithms and how much processing can be done by logical application and iterations . One thing I have learnt is that there is no limit to what we can create and present with images and how this can be made so powerful with processing.This is something I absolutely love about being working in Image Sequencer and I really want to continue to work and explore more with the opportunity of summer of code with Public Lab.

### Audience

I believe that Image Sequencer has helped me grow and learn ,and the insight of this proposal "Particle sizing and Analysis" is a real world application for this project. I believe that the implementation and approach of this will really motivate all the new  
community contributors and students who are actively seeking application of their projects and work.

---------

### Commitment

_I understand that spending my summer with Image Sequencer demands commitment and having understood this I commit to spending 40 hours each week to satisfying my proposal and I am ready to overtime in situations of running behind the schedule._