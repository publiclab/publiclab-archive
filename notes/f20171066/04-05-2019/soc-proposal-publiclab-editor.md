---
title: "SoC proposal: PublicLab.Editor"

tagnames: 'software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, lat:19.075983, lon:72.877655'
author: f20171066
path: /notes/f20171066/04-05-2019/soc-proposal-publiclab-editor.md
nid: 18970
uid: 579292
cids: 23797
---

![](https://publiclab.org/public/system/images/photos/000/031/135/original/editor.png)

# SoC proposal: PublicLab.Editor

by [f20171066](/profile/f20171066) | April 05, 2019 20:36

April 05, 2019 20:36 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [rgsoc-2019](/tag/rgsoc-2019), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [soc-2019-proposals](/tag/soc-2019-proposals), [lat:19.075983](/tag/lat:19.075983), [lon:72.877655](/tag/lon:72.877655)

----

About Me

**Name:** Nirav Asher

**Github:** [https://github.com/niravasher](https://github.com/niravasher)

**LinkedIn:** [https://www.linkedin.com/in/nirav-asher-974447182/](https://www.linkedin.com/in/nirav-asher-974447182/)

**Email:** [f20171066@pilani.bits-pilani.ac.in](mailto:f20171066@pilani.bits-pilani.ac.in)

**Gitter:** niravasher

**Affiliation:** Birla Institution of Technology and Science, Pilani campus.

**Location:** Pilani, India

Being a user-focused full stack Web Developer and Open Source enthusiast, I am pursuing a degree of Bachelor at BITS Pilani, Pilani campus.

## Developing PublicLab.Editor as a library.

## Organization: Public Lab

## Project description

A general purpose, JS/Bootstrap UI framework for rich text posting. An author-friendly, minimal, mobile/desktop interface for creating blog-like content, designed for [PublicLab.org](http://PublicLab.org).

### **Abstract/summary (<20 words)**

Enhancing the Image upload, text format copy and paste and preview features.

## Problem

This project aims at enhancing the following new features.

1. Same format of text on copy and paste
2. Image Upload

## WHAT PROBLEM AM I TRYING TO SOLVE?

## On pasting of text from resources like websites, word or PowerPoint, the text looks something like this.

## ![image description](/i/31140.png "lorem.png")

## ORIGINAL TEXT

![image description](/i/31141.png "original1.png")![image description](/i/31142.png "original2.png")

---------

## This chart shows how Editor currently works. There are certain issues attached to the current implementation of PublicLab.Editor:

1. Font size changes
2. Font family changes
3. Background colour: The background colour of a website from where the text is copied gets pasted.
4. Markdown changes

## CURRENT METHOD TO UPLOAD IMAGES

## ![image description](/i/31143.png "current1.png")

## POST FEATURE ADDITION (proposed)

## ![image description](/i/31144.png "proposed.png")

## The following issues are present with the image upload

1. Drag and drop of image gives a message saying "image upload has failed, that's all we know".
2. UI of image upload popup can be improved.

## PREVIEW FUNCTIONALITY

As per my pull request [https://github.com/publiclab/PublicLab.Editor/issues/286](https://github.com/publiclab/PublicLab.Editor/issues/286 "https://github.com/publiclab/PublicLab.Editor/issues/286"), modifications will be required in this code present in the editorFile.js.

## The preview functionality goes as follows:

1. Initially all the inputs are empty. User fills in the required details and presses the preview button.
2. All the data filled in by the user will be stored in the local storage of the browser.
3. From the local storage it will then will retrieved and displayed on the preview tab (Preview tab is also initially empty).
4. All this data will be shown in green color.
5. Then user tries to edit some of his details and presses preview button again to check whether he is right or wrong.
6. The newly added information will be shown in green, deleted information will be shown in red and the information not deleted will be shown in grey.
7. The local storage of the user's browser will be updated automatically for continuously storing previous and new changes.

## The preview tab looks something like this.

## ![image description](/i/31145.png "preview.png")

## The following would be my milestones to improve PublicLab.Editor

1. Completing the core functionality with full Node.js support --- adding correct style properties to the elements, image upload to server automatically on drop.
2. Supporting a large size of image upload
3. Enabling all sided bordered table.
4. Having a full-fledged preview functionality
5. Publish to npm

## Timeline

![image description][1]

Community bonding period 
------------------------------

Public Lab has a very friendly and professional community. I understand all the expectations of Public Lab from me, the code base of the project and the mentor's expectations from this project. A discussion of how the final code should look along with the UI will be planned during this period. Major refactoring of the code will be done here will the details of the timeline being more specific.

## Requirements

I would require help from mentors and would always accept help from other contributors.

## Contributions to PublicLab.Editor

Here are the issues reported by me

[https://github.com/publiclab/PublicLab.Editor/issues/created\_by/niravasher](https://github.com/publiclab/PublicLab.Editor/issues/created_by/niravasher)

## Experience

Being interested in programming languages, I began my adventures in this arena by being a front-end web developer in my first year of college. As a member of Association of Computing Machinery (ACM) and Coding Club at BITS Pilani, Pilani campus, I have worked on many projects that these two associations host during college fests, and will be working in the future events as well.

1. The official Bits Open Sports meet (BOSM, the sports fest) website and the registration software has been completely developed by the coding club web development team of which I am a part of. [https://www.bits-bosm.org/](https://www.bits-bosm.org/)

2. [www.qbox.com](http://www.qbox.com/) is a Bitsian startup that is accessed to and used by multiple users simultaneously and I contributed towards the making of the user interface, the back- end of this. In a nutshell, I helped to create most of the web-app, which is a huge success now.

3. In my sophomore, I have worked with a company named Ekeeda, and contributed to develop its website ([www.ekeeda.com](http://www.ekeeda.com/)) which provides video lectures to students all over the world.

4. Stock market simulation, a collaborative project with Economics and Finance association is an annual online event whose front-end model is developed by me.

These are some of the major ones that I developed, there are many others on my github repository. [https://github.com/niravasher](https://github.com/niravasher)

## Skill set

Front-end languages: HTML, CSS, JavaScript

Front-end development frameworks: jQuery, Bootstrap, Materialize.

Backend experience: Node.js

## Teamwork

Group Projects and events, talks, hackathons, etc, and all the successful events organized by my club / organization required huge amount of co-ordination and teamwork. I currently being a sophomore, also have to manage the team and to get the work done by everyone, alongside managing my academics. I believe in the quote "Talent wins games but teamwork and intelligence win championships". I have always given my 100% to the team no matter how hostile the conditions are and always have set the team as my first priority.

## Passion

"You have a lot of passion for what you are doing because it is so hard...that if you don't any rational person would give up". After coming to college, I started to explore different things and find what I am really passionate about. I would try and feel what I really enjoyed doing and went on to pursue it. I would use this as a yardstick and not feel the pressure to do what others are telling me to do. I am sure that I want to work on computing, to build computing products and to do the thing which still keeps me going, that is, to build products that will be used by billions of people and makes a difference to them.

## Audience

It is my dream to build something that the whole world can use, no matter their age. My goal is to build image sequencer in such a way that it can be used to make all the modifications that the user wants it to have. The more it's user friendliness increases, the more will be its success to making a better and simpler tomorrow. Modules like adding text or shadow on the image or adding a gradient to the webpage can be a bit confusing in css, but it can be a lot easier after developing these modules.

## Commitment

I totally understand that developing this product is a very serious commitment. I will stay dedicated and give my best to perform each part of the project responsively. I'd love to contribute to Public Lab even after GSoC because I have really seen the technology built here and am being more attracted to it.

  [1]: /i/31146.png "Screenshot_(78).png"