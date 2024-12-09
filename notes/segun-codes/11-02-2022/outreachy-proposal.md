---
title: 'Outreachy Proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service'
tagnames: software, outreachy, first-time-poster, zoom:6, lat:9.081999, lon:8.675277, outreachy-2022, lat:9.0804, lon:8.679199, outreachy-winter-2022
author: segun-codes
path: /notes/segun-codes/11-02-2022/outreachy-proposal.md
nid: 36041
uid: 818626

---

![](https://publiclab.org/public/system/images/photos/000/047/265/original/thumbnail2.jpg)

# Outreachy Proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service

by [segun-codes](../profile/segun-codes) November 02, 2022 10:12

November 02, 2022 10:12 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [lat:9.081999](../tag/lat:9.081999), [lon:8.675277](../tag/lon:8.675277), [outreachy-2022](../tag/outreachy-2022), [lat:9.0804](../tag/lat:9.0804), [lon:8.679199](../tag/lon:8.679199), [outreachy-winter-2022](../tag/outreachy-winter-2022)

----

#### About Me
Segun Adodo is my name and I am a software engineer with academic background in Information System. I have experience working with Javascript, NodeJS and associated technologies. As a technology enthusiast, I am passionate about building software solutions and services that redefine and improve in a rather meaningful way how humans live, work and relax.

I haven't any prior experience contributing to any project in free software community, Leaflet.distortableImage is my first. However, I am delighted to jumpstart the odyssey with Public Lab. When not building or studying software related things, then on a modest note, I'm probably following global current affairs, perusing material on human geography or generally taking it easy.

Location: Nigeria

#### Project Description
---------
The project is mainly focused on developing new features and introducing ideas capable of improving user experience and increasing availability of the service.

#### Abstract/Summary
---------
This project focuses on three main areas: features
development, rigidity lessening and software testing for improved UX, service availability.

#### Problem
---------
The web service in its current states works and offers users an appreciable user experience good enough to provide the intended value. However, opportunities for further improvement exist. Some useful features that can make a difference in terms of usability and flexibility of use are still missing. For instance, there's no functionality to support fetching images from alternative sources thus introducing issues related to tight-coupling. This means the service is not usable any time [archive.org](http://archive.org) is down for any reason.

Again, there's currently no intuitive way to restore welcomeModal, an existing image overlay and their respective floating toolbars to view after a user closes them. In the case of welcomeModal, the existing workaround of having to reload the webpage is counterintuitive. Also, the service does not provide functionality to support undoing a delete operation. In addition, right on the map, user has no access to brief details about the image being distorted while using the service. Such information where available can help user remember what image is currently being distorted. A busy or easily distracted user can benefit from such feature.

#### Some Implementation Details
---------
PROBLEMS AND DETAILS

1\. Key man risk/tight-coupling: image not fetchable from alternative sources apart from [archive.org](http://archive.org) putting service availability at risk - See SNIPPET 1 and welcomeModal SCREENSHOT 1 below.

2\. Tight-coupling/Rigidity: Current code for retrieving user-supplied URL deeply wires in [archive.org](http://archive.org). This means, adding new images sources will take avoidable extra time - See SNIPPET 1\.

```
//SNIPPET 1 (from project file /example/archive.html as authored by @vanithaak)
//NOTE: archive.org is hard-coded in or expected from user. This is a case of tight-coupling
function extractKey() {
  let getUrl;
  //keyman risk/rigid/tight coupling
  if(!input.value.includes('archive.org/details/') && !input.value.includes('https://'))  {
       getUrl = 'https://archive.org/details/${input.value}/'; 
       showImages(getUrl); 
   }
   else if(!input.value.includes('https://'))  {
       getUrl = 'https://${input.value}';
       showImages(getUrl);   
   } else  {
       getUrl = input.value;
       showImages(getUrl)
   }
}
```

CANDIDATE SOLUTION

a. Increase sources of image to three (can be agreed upon)

b. refactor SNIPPET 1 to use code and algorithm below

```
//Store the image sources here. Let's assume we want three image sources
const imageSources = [
   //"labp.io" & "plab.com" used for demo purposes only
   { hostName: ‘archive.org’,  imageUrlformat:  ‘archive.org/details/xxxx’},
   { hostName: plab.com’, imageUrlformat:  ‘plab.com.com/details/username/xxxx’}, 
   { hostName: ‘labp.io’, imageUrlformat:  ‘labp.io/username/xxxx’}  
];

//Only have to change hard-coded hostnames in three places to replace/add new image source 
Function extractKey() {
  //Algorithm - Less rigid, less tight-coupling, no key man risk
  Check hostname on user-supplied url
  If hostname is plab.com
     //processes passed url using pattern similar to SNIPPET 1
     invoke extractKeyForPLab(imageSources[1]) 
 
  If hostname is labp.io
    //processes passed url using pattern similar to SNIPPET 1
    invoke extractKeyForLabP(imageSources[2]) 

  //default behaviour is to fetch from archive.org
  If hostname is archive.org or hostname is missing 
	invoke extractKeyDefault(imageSources[0])  
}
```

SCREENSHOT 1

![image description](/i/47292.png "Screenshot-1.PNG")

---------

PROBLEM AND DETAILS

3\. No intuitive way to close welcomeModal/overlays: this means user must reload or refresh page, but then it's not intuitive and reload/refresh is only appropriate when an uncontrolled error occurs on a webpage. See SCREENSHOT 2\.

4\. No functionality to undo deletion of image overlay.

CANDIDATE SOLUTIONS

```
//Algorithm for restoring closed welcomeModal
If welcomeModal is closed through any means
   //no need to refresh/reload the page, it's unintuitive
   make "redisplay" button visible
   If user clicks "redisplay" button
      Restore welcomeModal to view
      make "redisplay" button invisible

//Algorithm for restoring deleted image overlay (undo delete operation)
//Assumption: Only one delete operation can be reversed
//This is not set in stone though
If image overlay is closed through any means
   If image source server supports caching
      If image size is less than allowedCachableMaxSize
        persist image in browser localCache
    //same as 'redisplay' button but behaves slightly differently here
   make "undo" button visible 
   If user clicks "undo" button
      disable "undo" button
      If image exists in localCache
          fetch image from browser cache
          restore image to view
          make "undo" button invisible
      Otherwise
          //multiple steps appear to user as one step
          fetch same image from original source (e.g., archive.org)
          display message "loading image" to user
          restore image to view
          make message "loading image" disappear
          make "undo" button invisible
   Otherwise
      If user reloads/refreshes page
       make "undo" button invisible
```

SCREENSHOT 2![image description](/i/47293.png "Screenshot-2.PNG")

---------

PROBLEMS/ENHANCEMENT OPPORTUNITY AND DETAILS

5\. Currently, no information about image overlay is shown to user. So user has no way to quickly get information (as a form of reminder) about image being distorted.

CANDIDATE SOLUTION

1\. Augment image overlays with brief information for instance in a tooltip-like fashion. The information can jog users' memory of what image they are working on.

```
//Algorithm for applying augmented reality to image overlays
If image overlay exists
  //name given to file when uploaded to archive.org etc.
  retrieve image name during http-get operation
  wire-up tooltip (tooltip hidden by default)
  populate tooltip with image name(tooltip still hidden)
  //see SCREENSHOTS 3A & 3B for "nonSelectedMode" and "selectedMode"
  while image overlay is not in selectedMode
    If mouseOver event on image or mouseOn event occurs
        display tooltip
        If mouseOver image event ends
           hide tooltip
        If mouseOn image event ends
           hide tooltip
```

SCREENSHOT 3A

Shows image overlay and tooltip box with user-supplied information such as "City center".

![image description](/i/47296.png "Screenshot-3A.PNG")

SCREENSHOT 3B

Shows image overlay in selectedMode.

![image description](/i/47297.png "Screenshot-3B.PNG")

#### Timeline/Milestones
---------
**Week 1 (Dec 05 - 09, 2022)**

Engage mentors and study the source files that I will be working with. Also, complete work on separating js codes in .html files in /examples/ folder into standalone .js files should there be any outstanding issues on this.

**Week 2 (Dec 12 - 16, 2022)**

Implement functionality to support fetching (plus validation) of images from alternative sources (e.g., [openlibrary.org](http://openlibrary.org), [webarchive.org.uk](http://webarchive.org.uk) etc.) to [archive.org](http://archive.org).

**Week 3 (Dec 19 - 23, 2022)**

Refactor code, in /examples/archive.html that validates and corrects user-supplied URLs to be less rigid. Validation criteria (e.g., hostname, URL format) are specified and lifted programmatically from a config file instead of hard-coding the criteria in the code. This way and where needed, it's possible to easily switch from one or more image source(s) to another (e.g., [archive.org](http://archive.org) to [webarchive.org.uk](http://webarchive.org.uk)) by just updating the config file and without updating the code.

**Week 4 (Dec 26 - 30, 2022)**

Implement a fix to address the bug raised in issue #981 with details "Deselect event listener is triggered when selecting and deselecting, and it does this for all image overlay in the map #981".

**Week 5 (Jan 02 - 06, 2023)**

Implement an intuitive functionality (e.g. button controlled) to restore image overlay and floating toolbar to view after close button on the floating toolbar is clicked (e.g., in project file examples/index.html) without having to refresh.

**Week 6 (Jan 09 - 13, 2023)**

Implement functionality to support undoing deletion of image overlays in example/select.html; this can be activated with click event from an undo delete button and cntrl-z keyboard input.

**Week 7 (Jan 16 - 20, 2023)**

Implement "undo deletion" of image overlays in example/index.html; this can be activated with click event from an undo delete button and cntrl-z keyboard input.

**Week 8 (Jan 23 - 27, 2023)**

Implement functionality for "undoing deletion of image overlays" in example/archive.html; this can be activated with click event from an undo delete button and cntrl-z keyboard input.

**Week 9 (Jan 30 - 03 Feb, 2023)**

Implement a feature to display brief useful information (e.g., in a tooltip-like style or better alternatives) about a selected image overlay. This is useful in case a user tries to remember what a given image is all about.

**Week 10 (Feb 6 - 10, 2023)**

Implement a context-based button to activate the functionality to restore welcomeModal on /examples/archive.htm/ to view after being closed through 'begin' or 'close' button.

**Week 11 (Feb 13 - 17, 2023)**

Implement a fix for the bug reported in issue #700 with title "Make export keybinding ('e') update the control toolbar UI".

**Week 12 (Feb 20 - 24, 2023)**

Write test scripts for functions in project folder src/edit/\*.

**Week 13 (Feb 27 - 03, 2023)**

Continue work on writing test scripts for functions in project folder src/edit/\*.

### Needs
---------
Documentation, Community support

#### First-time Contribution
---------
[https://github.com/publiclab/Leaflet.DistortableImage/pull/1152](https://github.com/publiclab/Leaflet.DistortableImage/pull/1152)

#### Comments, To Show Overall Community Involvement (Like Helping Others)
---------
As a form of community involvement, I created the following first-timer only issues for the benefit other participants from Outreachy.

1. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1218](https://github.com/publiclab/Leaflet.DistortableImage/issues/1218)
2. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1185](https://github.com/publiclab/Leaflet.DistortableImage/issues/1185)
3. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1184](https://github.com/publiclab/Leaflet.DistortableImage/issues/1184)
4. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1183](https://github.com/publiclab/Leaflet.DistortableImage/issues/1183)
5. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1182](https://github.com/publiclab/Leaflet.DistortableImage/issues/1182)

#### Open Issues:
---------
1. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1185](https://github.com/publiclab/Leaflet.DistortableImage/issues/1185)
2. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1184](https://github.com/publiclab/Leaflet.DistortableImage/issues/1184)
3. [https://github.com/publiclab/Leaflet.DistortableImage/issues/1182](https://github.com/publiclab/Leaflet.DistortableImage/issues/1182)

#### Closed PRs:
---------
1. [https://github.com/publiclab/Leaflet.DistortableImage/pull/1177](https://github.com/publiclab/Leaflet.DistortableImage/pull/1177)
2. [https://github.com/publiclab/Leaflet.DistortableImage/pull/1214](https://github.com/publiclab/Leaflet.DistortableImage/pull/1214)
3. [https://github.com/publiclab/Leaflet.DistortableImage/pull/1186](https://github.com/publiclab/Leaflet.DistortableImage/pull/1186)
4. https://github.com/publiclab/Leaflet.DistortableImage/pull/1263

#### Experience
---------
I learnt writing software through my academic trainings back in school and other online resources. Currently, I am comfortable writing software in Java and Javascript programming languages and will for now now continue to deepen my skills in them. I plan to begin learning python sometime next year. To reinforce my skills, I have worked on a number of backend and frontend javascript projects. These include a "node-chat-app" which is a web socket powered real-time chat app that can be used by multiple users for real-time communication. The application is built using HTML/CSS, client-side javascript and NodeJs plus the [socket.io](http://socket.io) library.

A second project is a simple "CLI-based diary" that can be used to record personal life events and it is modeled after a physical hardcopy diary. I also built a "webserved weather app" that uses location name to generate weather forecast. Another project I embarked upon is a cloud-based mongodb-powered API-based task manager app. I have some other projects built using Java and Spring framework. These experiences plus my positive attitude towards continuous learning have been helpful in developing and continually growing my skills in writing software. Some of my projects on github are available on the links below.

1. [https://github.com/segun-codes/task-manager-api-app](https://github.com/segun-codes/task-manager-api-app)
2. [https://github.com/segun-codes/node-chat-app](https://github.com/segun-codes/node-chat-app)
3. [https://github.com/segun-codes/cli-diary-app](https://github.com/segun-codes/cli-diary-app)
4. [https://github.com/segun-codes/webserved-weather-app](https://github.com/segun-codes/webserved-weather-app)
5. [https://github.com/segun-codes](https://github.com/segun-codes)

#### Teamwork
---------
Apart from my experience so far on Public lab, I have only worked with teams of people on closed source projects. The teams were mainly comprised of professional software developers or information technology students building software solutions. The teams were diverse in terms of gender and level of skills. In both cases, we collaborated virtually and in-person. Dissenting opinions were managed through extensive discussion on pro and cons of the opposing views before a way forward is agreed upon. Team members, as required, demonstrated mutual respect and assisted one and another to achieve project objectives. As for the professional teams, I was a developer who also contributed to developing design ideas. But then I functioned as the lead in a student-led project team while in school.

As a practice, I study my team members especially senior colleagues, to assess their level of expertise and then figure out through them (amongst other ways) what next I should learn. I have been in meetings where my teammates mentioned some technologies that were not familiar to me so I quickly picked them up and then conducted personal research on them to avoid having to depend on my team members for understanding or slow down the pace of our progress on projects. Also, I have found myself in a 3-member project team where one of the members had less strong coding skills and so I had to position to cover for any slack that may result therefrom. For me, this meant spending more time on the project we were working on, conducting more research etc. as the team heavily relied on my attitude and capacity to deliver.

My central source of self-motivation and continuous drive for self-sufficiency derives from a mentality of always wanting to be a resource person. Now, this does not suggest negative attitude towards learning from others but that I should not only learn from others but also position myself as one others could learn/benefit from.

#### Passion
---------
The fact that Mapknitter deals with the environment excites me. I am passionate about humans living in harmony with their environment in every sense of it. So I believe all human endeavours including software engineering should support multiplying environment-related knowledge, environmental preservation and development in a sustainable way.

#### Audience
---------
This project should be of help to users such as geographers, environmental scientists and even moviemakers who must show scenes where aerial earth photos are stitched to convey a message or simply stoke interest in matters related to the environment.

#### Commitment
---------
I clearly understand the time commitment involved. Plan is to expend a minimum of 8hrs/day on a 5days/week work schedule fully dedicated to this project. This translates to at least a 40hrs/week commitment.
