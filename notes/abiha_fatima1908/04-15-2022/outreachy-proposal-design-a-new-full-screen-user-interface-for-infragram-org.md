---
title: "Outreachy proposal: Design a new full-screen user interface for Infragram.org"\ntagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: abiha_fatima1908
path: /notes/abiha_fatima1908/04-15-2022/outreachy-proposal-design-a-new-full-screen-user-interface-for-infragram-org.md
nid: 30407
uid: 793042

---

![](https://publiclab.org/public/system/images/photos/000/045/781/original/outreachy-logo.png)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [abiha_fatima1908](../profile/abiha_fatima1908) | April 15, 2022 12:38

April 15, 2022 12:38 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

---------

## About me

I am Abiha Fatima, a junior year undergraduate student majoring in Computer Engineering from AMU, India. I've been fascinated by programming since I was 16\. I have sound knowledge on various web technologies and also have a little exposure to competitive coding. I am an open-source enthusiast and I truly believe in the capability it holds to inﬂuence and create tools for the upliftment of mankind. My experience with open source has been a steep learning curve for me. When I'm not in front of a computer screen, I'm probably reading a book or exploring music.

**Affiliation:** Aligarh Muslim University

**Location:** Aligarh, India

**Email:** [abiha.fatima1908@gmail.com](mailto:abiha.fatima1908@gmail.com)

**GitHub:** [AbihaFatima](https://github.com/AbihaFatima)

**Time zone:** Indian Standard Time (UTC + 05:30)

**LinkedIn:** [Abiha Fatima](https://www.linkedin.com/in/abiha-fatima/)

**Twitter:** [\_abiha\_fatima](https://twitter.com/_abiha_fatima)

## Project description

[Infragram.org](https://infragram.org/) is a web-based tool for analyzing plant health with near-infrared imagery. It aims to democratize and improve reporting about environmental impacts, so that people can better understand the health of the plants around them. This project aims to redesign the existing user interface of the [Infragram](https://infragram.org/sandbox/), to make it more user friendly along with improving the user experience. This can be done by adding new features like a quick guide on first use, cross-browser drag and drop and revamping the UI for better usability.

### Abstract/summary (<20 words):

Design a new full-screen user interface for [Infragram.org](http://Infragram.org), thus making it user friendly along with improving the user experience.

### Problem

1. Improper paddings and spacing can be spotted on the toolbar and it is not mobile responsive.

![](https://lh6.googleusercontent.com/aSrk5llLfuVLSUpz1GmPnOEmfqF3uwlExIRhrFn_cVlCqZmYkdXialNlg9Bhz6Ue6-FJmTpNVD7bx1ZV22qCGkUUmrRrBbFWg9m6ZwxMznjuk2ye85hOpBuB6eGhULNSmFiy2IZi)

2\. The header and footer are not very organized and old fashioned. The footer lacks proper spacing and padding.

![](https://lh4.googleusercontent.com/f77DUS2fDfLFmz1FNVB0QflGUiPpRLpD9Xpx7ss7VuiRdz-LmQNJOs2TueHwYW9cymugJX1Cbj316cFFxNacWg2hnvsmyAfEgjVnTVBotLv5Sbeo76Nyp-7AnF7RA5CSFYcDPjAU)

3\. There is no guide to tell users how to use the application. Moreover, the presets are not very descriptive and thus can be overwhelming for first time users.

![](https://lh4.googleusercontent.com/fymBctA5qKA5EAZj3RQc25Ca-OsoXw3GdsN-eKz0R98xOX-O0RFttbyta2xoXE93cEoJ_JmHmsL8rmpL05eTrcZZE4NTAuEUwhnc_sa5b6zFoNjGF6rklpQ6IiZiX7Dq9lZQOEpw)

To test accessibility of the application, I used the [WAVE tool](https://wave.webaim.org/) to check its correspondence with [W3C's Web Content Accessibility Guidelines](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines), and found out there are many areas of the project that can be improved.

Here's the detailed report: [https://wave.webaim.org/report#/https://infragram.org/sandbox/](https://wave.webaim.org/report#/https://infragram.org/sandbox/)

![](https://lh6.googleusercontent.com/FcZXQwVol67hRAD-ddfp2BQL9XYEQebRPTHf3Y6gTTKwgzcooNJwPSqOrOqiiOger7FiJqzA4I_e9YghbPVbMXoXwQ9paLsZx4SDlYg0oucXty0uA7CQamzkI0NZOqtRE6ziOrJU)

Here are few problems that are related to accessibility of the application:

**1\. Elements must have sufficient color contrast against the background.**

![](https://lh6.googleusercontent.com/SIb0IgADzsBEp5P4kTFjIt9-d5T2-4LhiJjy9KwnNmHfLr9qAgB51mDulXBChs1Aqb8mxIOZCL5liyM4zP-zBXZeFiqDghxfaNHbG8KZoLA9B76Vz6ggmT5J9pJQCBLQPFs_caLi)

The contrast of the highlighted areas is critically low as 1.65:1\. The expected contrast ratio should be higher than 4.5:1\.

Some people with low vision experience low contrast, meaning that there aren't very many bright or dark areas. Everything tends to appear about the same brightness, which makes it hard to distinguish outlines, borders, edges, and details. Text that is too close in luminance (brightness) to the background can be hard to read.

A fix to this problem will be that all elements must have sufficient contrast between text in the foreground and background colors behind it in accordance with [WCAG 2 AA contrast ratio thresholds.](https://www.w3.org/TR/WCAG20-TECHS/G18.html) I have proposed a better color contrast below.

**2\. Form control does not have a corresponding label.**

![](https://lh3.googleusercontent.com/DfOETA9P_tymQDI63BRXXjCrc5TGmIUQ8-O5OkRRifAPQJQU8S9ulUklTpIpmhy5DAU3DkpDiKKc8nnb81yPHP8iAURiWX08mrEk8jiIME6lhKaO_Bo5K7Ao0vBCy5pLCNl4RQ8i)

[https://github.com/publiclab/infragram/blob/main/index.html#L109-L123](https://github.com/publiclab/infragram/blob/main/index.html#L109-L123)

Effective form labels are required to make forms accessible. The purpose of form elements such as radio buttons, input fields, etcetera, is often apparent to sighted users. Screen readers require useful form labels to identify form fields. Adding a label to all form elements eliminates ambiguity and contributes to a more accessible product. Form labels also provide visible descriptions and larger clickable targets for form controls.

A fix to this would be using the element to associate it with its respective form control. If there is no visible label, either provide an associated label, add a descriptive title attribute to the form control, or reference the label(s) using [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby).

**3\. Device dependent event handler is present.**

![](https://lh5.googleusercontent.com/xbm7kAPo5QS5X9HZNmXa1guq2lEZvGO4IujEsu_28iU_kxMpfp8K7ojaxfxqHadei8jQOm4k5gcDS8j2QED0jbZ9d87VwFilAvAPFNGP9-p7DWCHw3FNPBpRCvzsOpbWK4EtmUKx)

[https://github.com/publiclab/infragram/blob/main/index.html#L174](https://github.com/publiclab/infragram/blob/main/index.html#L174)

An event handler is present that may not be accessible. The JavaScript events in use do not appear to be accessible to both mouse and keyboard users. To be fully accessible, critical JavaScript interaction should be device independent. These device dependent handlers are present at multiple places across the application.

A fix to this would be using a device independent event handler (which responds to both keyboard and mouse) or by using both a mouse dependent and a keyboard dependent event handler.

This will make the application accessible to people with motor impairments, or dexterity impairments, this group ranges all the way from those who would prefer not to use a mouse, because perhaps they find it painful, or to someone who may be physically paralyzed and have limited range of motion for certain parts of their body. Motor impaired users may use a keyboard, switch device etc. to interact with their computer.

### Project Goals

I wish to redesign the existing user interface of the [Infragram](https://infragram.org/sandbox/index.html), to make it more user friendly along with improving the user experience. I'll be improving the existing features and adding new features in different phases.

**Phase - (I): Revamping the Infragram tool**

At the moment, the [Infragram](https://infragram.org/sandbox/index.html) UI/UX is clustered and not very intuitive. I wish to propose following changes:

1\. A well organized layout for this tool with consistent header and footer throughout.

2\. Implementing a side toolbar for full screen interface which will boost the user accessibility.

![](https://lh4.googleusercontent.com/CvBABDuYpBfH9newkhrIMHxEsgL1tyyl6rXDygBQrm0b8MElgGknFOGjMMWQ_gwNbbzmpre5c7p467nHduV_X6DvCGQntXYcsG3nyRFrUp3vXrosvVUXloapVcTVxrBjuxCqlJvp)

3\. Adding an improved design for Presets:

![](https://lh5.googleusercontent.com/NQv4La9Wg53CL8_bK-k_f4NI88LnbkB8Ul3mAz7T_RJoo5iD_l33XtOCpsyQFbxej5yl-IxTJszueGbe8aUJia3jts7-o3GD55RdxGUNGglIRTPz0j65YHcwM64tHNVsLpjdIhd8)

4\. Adding a quick tour guide on first use to give some insight to users about the different components and their roles.

- We can implement it either by using [Intro.js](https://introjs.com/docs) or [bootstrap tour](http://bootstraptour.com/api/), both are easy to implement.
- Intro.js is open source and is widely used due to its user-friendly solutions.

![](https://lh4.googleusercontent.com/GjjvenlBZ-ihCS5G9FcosSylZmkEjVdDXg7sBWG9oAN64qULQJHmB-ZkyQMC_nTYPG-6cyVSr5oTGZY5d7Sj09nJyHCKh6U4LA-7IPm1V9y7jy_uN2VC0tN245DrSYqhceQI1gsW)

Some important features of Intro.js are:

- No dependencies: It does not require any other dependencies
- Small and fast: The library's smaller size makes the guiding process smooth and intuitive.
- User-Friendly: Navigation is user-friendly and provides various themes that can be selected as per our preference.
- Browser Compatibility: Works on all major browsers like Google Chrome, Mozilla Firefox, Opera, Safari, and Internet Explorer.
- Documentation: The documentation is excellent with samples and examples of each element to be introduced.

5\. Implement Cross browser drag and drop:

- [HTML drag-and-drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API) allows us to introduce drag and drop features in web browsers.
- In all, there are eight events the browser fires related to drag and drop, we will use only four that will be fired when an object falls into a drop zone: _dragenter_, _dragleave_, _dragover_ and _drop_ .
- By defining the attributes for the _ondragover_ and _ondrop_ event handler, we can transform any HTML element into a valid drop target.

![](https://lh3.googleusercontent.com/USPMgfY6KEBAL16d6S1_AV1Z4M6cyxjdAiStaQBb8AoZu1pWuWQS3yJtuekiomFTGW7pfjamgVzko7-Xx_yA3o-7xfdZaVQEVSgKTPtkwdR_ybWUI1O4fs38uLbLxQTJ-gC3SGIJ)

The mobile view of the above interface would look like:

![](https://lh6.googleusercontent.com/y6hnHqAbBmViqY8ZpBfJQ5uedqCMNz6avWJhKOjVaCLQEv-wZbVbRbYOcfgmO0mKFYGTF2Pm-DIMW0vu7fWxS6E0Pr7XnFKtqrPIlH1Bn06Xagn_pG_idwWhvbZOoCmELFVLblrx)

6\. Adding Fullscreen option:

JavaScript's [Fullscreen API](https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API) provides a native way for browsers to enter/exit fullscreen mode. It has methods and properties to handle HTML elements in full-screen.

- To open an element in fullscreen, we use the _element.requestFullscreen()_ method to parent element to make it as full screen. This method makes an asynchronous request to make the element be displayed in full-screen mode.
- To exit fullscreen we can use _document.exitFullscreen()_ .

All the components of this interface will be made edge to edge using [Bootstrap 4](https://getbootstrap.com/docs/4.6/getting-started/introduction/).The [Bootstrap Grid System](https://getbootstrap.com/docs/4.0/layout/grid/ "https://getbootstrap.com/docs/4.0/layout/grid/") will be used for this, specifically Responsive Layouts. It will be made up of groupings of Rows & Columns inside Containers.

---------

**Phase - (II): Implement a new interface for Infragram**

The information in the current website is scattered. There is a need to reorganize everything and add more information.

New front page of Infragram will consist of:

1. A consistent Navbar with fullscreen option
2. Infragram logo on browser's tab bar
3. About us section
4. FAQ section
5. Images by recent Contributors similar to one on Infragram's page
6. Redesigned footer

Here's what it will look like:

![](https://lh4.googleusercontent.com/60XPpoQmUN_21QKzklysw8PoUmPGVcNibFfO2RnbC5HBjYXbRvnxgxhFZf3hVuwq9H3-ZjaU_-411QS7Y2GypmN1mXqcJX8jZYjjCStz0c02n0YyPir6b2FTMzX6RM_LpWs8rAdD)This design would have a better user interface and an improved user experience. The web application will be made accessible to everyone regardless of their capabilities or what hardware and software they use.

The above proposed design is proposed keeping all the challenges in mind, it is made to welcome as many users as possible by ensuring:

- The application is keyboard-friendly by adding device independent handler wherever possible.
- The content on the site is easily accessible by adding [ARIA landmarks](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page).
- Alt text will be added to all images.
- All the forms will be correctly labelled.
- Right color contrast will be chosen.

The color contrast that I wish to propose passes all the below tests (tested using [WAVE](https://wave.webaim.org/) tool).

![](https://lh4.googleusercontent.com/5asn1hehdZB1LJSYZMqWHFC67_xhGf6ohwvE3Y7HkxkGFb-4QUTn0l68jggIKQL93CzCi_28ggnH0CCJQ8B5x8dB_sQxEtzBvtLofkmGCP7ICfn-ce1WH5He8xmYEi5oj7F3izXK)

### 

---------

### Timeline/milestones

| Week | Tasks |
|------|-------|
| Week-1 (May 30 - June 5)                      <br> | <li>Interact with the community and settle over the design drafts/mockups.</li><li><span>Understand the UI and different use cases.</span><br></li><li><span><span><span>Discuss the timeline and process with the mentors for any suggested modification.</span></span><br></span></li><li><span><span><span>Write an introduction blog.</span></span></span></li> |
| Week-2 (June 6 - June 12)<br> | <li>Start off with implementing a new design for the Infragram tool.</li><li><span>Work on adding a side toolbar for full screen interface.</span><br></li><li><span><span><span>Test the changes.</span></span><br></span></li><li><span><span><span><span><span>Interact with the mentors and fellow GSoC student.</span></span><br></span></span></span></li> |
| Week-3 (June 13 - June 19)<br> | <li>Work on implementing a new design for presets.</li><li>Test added changes.</li><li>Get feedback from the mentors and incorporate changes.</li><li>Create FTO issues.</li> |
| Week-4 (June 20 - June 26)<br> | <li>Work on implementing cross browser Drag and Drop feature on the entire page.</li><li>Discuss the approach with the mentor and selected GSoC student.</li><li>Test the added changes.</li> |
| Week-5 (June 27 - July 3)<br> | <li>Work on implementing the welcome modal (quick guide).</li><li>Test the changes.</li><li>Get feedback from mentors.</li><li>Iterate with user feedback.</li><li>Write blog.</li> |
| Week-6 (July 4 - July 10)<br> | <li><span style="background-color: transparent; font-size: 1rem;">Complete the Infragram tool interface.</span><br></li><li>Test all the functionalities work properly.</li><li>Get feedback from mentors.</li><li>Create FTO issues.</li> |
| Week-7 (July 11 - July 17)<br> | <li>Start implementing the front-page <span>for Infragram in Bootstrap 4.</span></li><li><span><span><span>Communicate with fellow GSoC student over design and various approaches.</span></span></span></li> |
| Week-8 (July 18 - July 24)<br> | <li>Work on adding different sections to the front-page.</li><li>Making it descriptive and user friendly.</li><li>Test the added changes.</li><li>Work on creating FTO issues<span> .</span></li><li><span><span><span>Writing a blog post on project progress so far.</span></span><br></span></li> |
| Week-9 (July 25 - July 31)<br> | <li>Work on redesigning the section for recent images.</li><li>Complete the front-page interface.</li><li>Test all functionalities work properly.</li><li>Iterate with user feedback.</li> |
| Week-10 (Aug 1 - Aug 7)<br> | <li>Discuss approaches with the mentor and fellow GSoC student on making the tool mobile responsive.</li><li><span>Work on creating FTO issues.</span></li> |
| Week-11 (Aug 8 - Aug 14)<br> | <li>Continue working to make the whole interface mobile responsive</li><li><span>Get feedback from mentors.</span></li> |
| Week-12 (Aug 15 - Aug 21)<br> | <li>Work on uncompleted tasks, if any and review with mentors all contributions made so far.</li><li>Work on stretch goals (If time permits).</li><li>Improve the documentation.</li> |
| Week-13 (Aug 22 - Aug 26)<br> | <li>Write a wrap up blog to document work done on the project during the internship.</li><li><span>Create FTO issues.</span></li> |

### 

---------

### Needs

I would like to get constant feedback from my mentors on my work on PRs and guidance if stuck on any issue.

### 

---------

### First-time contribution

My first contribution to public lab: [https://github.com/publiclab/infragram/pull/195](https://github.com/publiclab/infragram/pull/195)

FTO's opened:

- [https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AAbihaFatima+label%3Afirst-timers-only](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AAbihaFatima+label%3Afirst-timers-only)
- [https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AAbihaFatima+is%3Aclosed+label%3Afto-candidate](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AAbihaFatima+is%3Aclosed+label%3Afto-candidate)

Issues: [https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AAbihaFatima+is%3Aclosed+](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3AAbihaFatima+is%3Aclosed+)

PR's: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3AAbihaFatima+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3AAbihaFatima+is%3Aclosed)

Recent Activity: [https://github.com/search?utf8=%E2%9C%93&q=commenter%3AAbihaFatima+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3AAbihaFatima+org%3Apubliclab&type=Issues)

---------

### Experience

I recently got introduced to the world of open source through Hacktoberfest last year and I haven't looked back since. I absolutely love the idea of open source software and am thoroughly enjoying it. I am trying to contribute as I learn.

I am quite comfortable with web development technologies like HTML, CSS and JavaScript. I have developed many projects while learning web development. Apart from that I am also polishing on Data Structures and Algorithms concepts and for that I primarily code in C++. I am proficient in UI/UX design and have an eye for details. I am inspired by [Mandel's golden rules for user interface design](https://theomandel.com/wp-content/uploads/2012/07/Mandel-GoldenRules.pdf) and try to incorporate it in every project I do.

I had developed an [e-commerce application](https://github.com/AbihaFatima/shopitel-ecommerce-app) using MERN stack. I've learnt a lot about component-level-design, routing, payment gateway API's and authentication. Apart from that I learnt the importance of well documented and easy to understand code.

All my projects can be found here: [https://github.com/AbihaFatima](https://github.com/AbihaFatima)

I am comfortable using Linux and Windows, version control using git, and Visual Studio Code (for every other language) as my default editor due to the large repository of extensions they feature.

---------

### Teamwork

I have actively participated in group projects and hackathons in teams. I enjoy working with people and learning from them. While I have been actively on Github since around last year, I was way too hesitant to even strike up a conversation and now thanks to Public Lab, I can actively participate in discussions. I have learnt a lot about teamwork in these months. I would love to keep contributing to Public Lab and its other open source projects and learn as I grow.

---------

### Passion

I've always been very interested in Open source software development. I love how it's goal-oriented and how vital Public Lab is to people around the world, and this means that the work I do is going to be used by people all over the world. This community is extremely helpful - any query's resolution is just a message away. I just love how appreciated everyone is in this community. I have also had an incredible opportunity to learn a lot from different contributors. I definitely feel I am a part of this community and I am thankful to it. In future, I would definitely love to remain and be part of Public Lab.

### 

---------

### Audience

This project is aimed to redesign [Infragram.org](http://Infragram.org) at Public Lab, which will impact a range of different groups to meet the diverse needs of gardeners, farmers, environmental activists, researchers, conservationists, and more.

### Commitment

I'll be mostly working full-time on the code on weekdays (Monday to Friday) and will easily be able to work 40+ hours a week. My awake hours would usually be between 10 AM IST (4:30 AM UTC) to 2 AM IST the next day (8:30 PM UTC) and I'm comfortable working anytime during this period. Except for a few days of traveling during mid of August (which I'll be informing in advance to my mentors), I'll be having no other absences.

My university starts around in the second week of August, after which I will be attending university for 2 to 3 hours. I won't be having any examinations during that month. Also, I've added less tasks in the last weeks in the Timeline/Milestones to wrap up everything on time. So I shall be able to dedicate enough time to the project.