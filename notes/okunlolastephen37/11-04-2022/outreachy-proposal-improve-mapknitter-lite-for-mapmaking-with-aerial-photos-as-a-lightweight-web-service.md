---
title: 'Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service'
tagnames: software, lat:0, lon:0, outreachy, first-time-poster, zoom:3, outreachy-2022, outreachy-winter-2022
author: okunlolastephen37
path: /notes/okunlolastephen37/11-04-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
nid: 36053
uid: 818708

---

![](https://publiclab.org/public/system/images/photos/000/047/319/original/images.jpeg)

# Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service

by [okunlolastephen37](../profile/okunlolastephen37) November 04, 2022 03:24

November 04, 2022 03:24 | Tags: [software](../tag/software), [lat:0](../tag/lat:0), [lon:0](../tag/lon:0), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:3](../tag/zoom:3), [outreachy-2022](../tag/outreachy-2022), [outreachy-winter-2022](../tag/outreachy-winter-2022)

----

**

  
---------

## About me

My name is Okunlola Stephen, a budding tech enthusiast of Nigerian descent, passionate about creating innovative people-planet technological solutions to contemporary issues.

An Animal Scientist by training (University of Ibadan) with an impressive aptitude for statistics and problem-solving, I first caught an interest in tech three years ago. My tech journey took me from attending a series of tech webinars on Zoom to taking a couple of tech courses online before finally gaining admission into Semicolon early in 2022\.

I am currently rounding up my study at the prestigious Semicolon, Lagos-Nigeria where I have built a formidable proficiency in some programming languages (Javascript, HTML, and CSS). I have also built an invaluable connection with mentors consisting of past natives and elders at Semicolon who have diligently guided my steps in programming, digital marketing, and techpreneurship.

I am deeply fascinated by the tremendous opportunity Outreachy brings and I can't wait to start working on selected tech projects.

**

Location: Nigeria  
**__

## Project description

The project is mainly focused on developing new features and introducing ideas capable of improving user experience and increasing the availability of the service.

  
### Problem

The web service in its current state works and offers users an appreciable user experience good enough to provide the intended value. However, opportunities for further improvement exist. Some useful features that can make a difference in terms of usability and flexibility of use are still missing. For instance, there's no functionality to support fetching images from alternative sources thus introducing issues related to tight coupling. This means the service is not usable any time [archive.org](http://archive.org/) is down for any reason.  

### Timeline/milestones

Week 1 (Dec 05 - 09, 2022)

Engage mentors and study the source files that I will be working with. Also, complete work on separating js codes in .html files in the/examples/ folder into standalone .js files should there be any outstanding issues on this.

Week 2 (Dec 12 - 16, 2022)

Implement functionality to support fetching (plus validation) of images from alternative sources (e.g., [openlibrary.org](http://openlibrary.org/), [webarchive.org.uk](http://webarchive.org.uk/) etc.) to [archive.org](http://archive.org/).

Week 3 (Dec 19 - 23, 2022)

Restructure code, in /examples/archive.html that validates and corrects user-supplied URLs to be less rigid. Validation criteria (e.g., hostname, URL format) are specified and lifted programmatically from a config file instead of hard-coding the criteria in the code. This way and where needed, it's possible to easily switch from one or more image source(s) to another (e.g., [archive.org](http://archive.org/) to [webarchive.org.uk](http://webarchive.org.uk/)) by just updating the config file and without updating the code.

Week 4 (Dec 26 - 30, 2022)

Restructure code, in /examples/archive.html that validates and corrects user-supplied URLs to be less rigid. Validation criteria (e.g., hostname, URL format) are specified and lifted programmatically from a config file instead of hard-coding the criteria in the code. This way and where needed, it's possible to easily switch from one or more image source(s) to another (e.g., [archive.org](http://archive.org/ "http://archive.org/") to [webarchive.org.uk](http://webarchive.org.uk/)) by just updating the config file and without updating the code continue.  

Week 5 (Jan 02 - 06, 2023)  

Implement an intuitive functionality (e.g. button controlled) to restore image overlay and floating toolbar to view after the close button on the floating toolbar is clicked (e.g., in project file examples/index.html) without having to refresh.

Week 6 (Jan 09 - 13, 2023)

Implement functionality to support undoing the deletion of image overlays in example/select.html; this can be activated with a click event from an undo delete button and control-z keyboard input.

Week 7 (Jan 16 - 20, 2023)

Implement "undo deletion" of image overlays in example/index.html; this can be activated with a click event from an undo delete button and control-z keyboard input.

Week 8 (Jan 23 - 27, 2023)

Implement functionality for "undoing the deletion of image overlays" in example/archive.html; this can be activated with a click event from an undo delete button and control-z keyboard input.

Week 9 (Jan 30 - 03 Feb, 2023)

Implement a feature to display brief useful information (e.g., in a tooltip-like style or better alternatives) about a selected image overlay. This is useful in case a user tries to remember what a given image is all about.

Week 10 (Feb 6 - 10, 2023)

Implement a context-based button to activate the functionality to restore welcomeModal on /examples/archive.htm/ to view after being closed through the 'begin' or 'close' button.

Week 11 (Feb 13 - 17, 2023)

Implement a context-based button to activate the functionality to restore welcomeModal on /examples/archive.htm/ to view after being closed through the 'begin' or 'close' button.  

Week 12 (Feb 20 - 24, 2023)  

Write test scripts for functions in the project folder src/edit/\*.

Week 13 (Feb 27 - 03, 2023)

Continue work on writing test scripts for functions in the project folder src/edit/\*.

### Needs**

**____**__Support from my mentors__****__

### First-time contribution

**https://github.com/publiclab/Leaflet.DistortableImage/issues/1133**

---------

### Experience

I first developed an interest in programming three years ago. My tech journey began by attending free tech webinars on Zoom to taking a couple of tech courses online before finally gaining admission into Semicolon (Lagos-Nigeria) early in 2022 where I've rounded up my studies.

I have built a formidable proficiency in Javascript, HTML, and CSS, to mention a few. During my study at Semicolon, I collaborated with cohort members on a series of projects notably project 'Capstone' while also building invaluable connections with mentors consisting of past natives and elders at Semicolon who have diligently guided my steps in programming, digital marketing, and techpreneurship.

Here is a Github link to a sample project I worked on:******https://github.com/Straw4yu**

### Teamwork

My watchword is achieving the task, developing people, and building proactive, resilient teams: This is my disposition when working on a team. I am a full-stack developer by training, proficient in developing fully-fledged platforms, complete with databases, servers, and clients. I have close source experience, I particularly love designing user interactions, developing APIs and RESTful services, as well as testing and fixing bugs in existing codes.

Working on project 'Capstone' at Semicolon provided my first hands-on team experience. I was thoroughly invested in testing and debugging the software which I accomplished with relative ease. A self-starter with the ability to think on my feet, I equally, randomly lent a hand to other teams to ensure optimal UI/UX optimization

---------

### Passion

I am passionate about unfettered access to knowledge which doubles as a fundamental right and rightly underlines why the eradication of illiteracy figures prominently among United Nations SDGs.

Since Public Lab was founded to bridge the information blackout of the 2010 BP oil disaster, so much progress has been made in open-source work, open hardware, and licensing. Public Lab's mission statement resonates strongly in me, which consists in "Pursuing environmental justice through community science and open technology." 

As I prepare to actualize my dream career of a brief stint in a Fortune 500 tech company, I relish the incredible opportunity Public Lab offers to join a rich and culturally-diverse group of community researchers to tap into the invaluable grassroots expertise. I plan to use the experience gathered to further the cause of open science, sustainable partnerships, and responsible people-planet technology when I finally develop a series of personal life apps.

  
### Audience

I belong to a grossly underrepresented group in the Nigerian tech space at around 0.05% of Nigerian techpreneurs. In Nigeria, access to technology is limited by many factors ranging from age, ethnicity, socioeconomic status, and perhaps race too. This birthed my strong belief in the democratization of technology and initiatives that help bring high-tech closer to a wide range of users, especially marginalized groups. This will entail the creation of 'life apps' that proffer innovative people-planet solutions to dire challenges. The technological solutions will incorporate biometric automation tools complete with an effective password manager to optimize user experience for the technologically disadvantaged especially in the EMEA portfolio. An option of an easy-to-use add-on or plug-in function (and regular updates) should be considered to optimize the existing programs.

Commitment  

I understand this is an engagement that requires serious commitment, and I am confident my training, experience, and current schedule are perfect for this internship engagement. I have rounded up my lectures at Semicolon and currently awaiting a positive response to my Outreachy Internship application. 

Upon selection, I will dedicate 10 hours daily to the assigned projects while working with my Outreachy mentor to deliver the set task(s) well ahead of the delivery schedule. The breakdown of my daily schedule will be as follows: ..................