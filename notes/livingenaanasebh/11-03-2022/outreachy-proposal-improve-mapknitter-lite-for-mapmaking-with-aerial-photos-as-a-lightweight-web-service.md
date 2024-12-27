---
title: "Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service"

tagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: livingenaanasebh
path: /notes/livingenaanasebh/11-03-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
nid: 36043
uid: 816440
cids: 30749,30753,30754,30759
---

![](https://publiclab.org/public/system/images/photos/000/047/267/original/IMG_20221103_001225.jpg)

# Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service

by [livingenaanasebh](/profile/livingenaanasebh) | November 03, 2022 00:22

November 03, 2022 00:22 | Tags: [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [outreachy-2022](/tag/outreachy-2022), [outreachy-summer-2022](/tag/outreachy-summer-2022)

----

---------

# **About me**

My name is Living Enaanasebh Jamala Aka AndroGenius-codes. I am a front-end soon to be full stack developer. I work with technologies like vanilla JavaScript, React js, Node Js, tailwind css etc

This is my first time contributing to open source and so far it's being awesome.

I have some coding experience having interned with side hustle, ingressive for good, google Africa Developer program.

The only thing i love as much as coding is public health care.

**Location**: Nigeria

---------

# **Project description**

This project aims to make improvements to the image upload options for MapKnitter Lite project. the aim is to Create a page called local.html( i got the name from a mentor). In this page users will be able to upload images directly from their local machine. I am also going create navigation bar for the pages.

---------

# **Abstract/summary**

Create an upload option directly from local machine, implement navigation option.

---------

# **Problem**

- Currently the archive.html page only accepts images from [archive.org](http://archive.org). this could be a huge problem if [archive.org](http://archive.org) ever goes down.
- this method also prevents you from uploading more than one image at once.
[![archive_page.png](/i/47304)](/i/47304?s=o)
- Navigation on the website is currently a chore .there's no way to navigate to the other pages from index.html. navigating requires inputting the values of the page manually.
[![navigation.PNG](/i/47305)](/i/47305?s=o)

#   

# **Implementation of goals**

- Create Local.html page
Implement a drag on drop feature. users are prompted to drag or drop their images when they navigate to local.html
when they upload a file they are warned that their file is only available offline and that if they want to access it online they'd have to upload their image to [archive.org](http://archive.org) then visit the archive.html .
- create an API end point to store the uploaded images.

[![local.PNG](/i/47306)](/i/47306?s=o)

- Create a Navigation bar with links to the different pages on all the pages

---------

# **Timeline/milestones**

Week 1- Engaging with mentors and other members of the team, in depth study of the codebase, ask the mentors any questions i might have about the project.

Week 2 - UI/UX design and implementation of the drag and drop feature of local.html, provide a way to navigate to other pages from local.html

Week 3- work on how to store the uploaded images in the codebase .I Initially used localStorage but a mentor pointed out that there's a 5mb limit for that. I might have to create an API to store the images using Node Js.

Week 4 - work on preventing uploaded images from getting deleted when the page is refreshed.

Week 5- create a unique identifier for each image so that the browser knows which location to place it on the map based off previous uploads. I can try to do this by matching it with the name of the image.

Week 6- a review of everything i have done so far. Engage the mentors and my colleagues to look for possible improvements.

Week 7- implementation of the corrections from my mentors and colleagues.

Week 8 - create a feature that makes it possible to upload more than one image to the map this can be done by mapping each image to a particular location on the map.

Week 9- implement a feature that lets you save your edited work locally (still working on how to implement this)

Week 10- review and correction of previous mistakes

Week 11- review and correction of previous mistakes

Week 12 - work on other issues like creating navigation links, add link to local.html.

Week 13 - get feed back from mentors

---------

# **Needs**

Ample support from mentors .

---------

# **First-time contribution**

I Created a video showing how to install plots2 using gitpod:

[https://github.com/publiclab/plots2/issues/11467](https://github.com/publiclab/plots2/issues/11467)

**Open issues**:

[https://github.com/publiclab/Leaflet.DistortableImage/pull/1236](https://github.com/publiclab/Leaflet.DistortableImage/pull/1236)

**Closed PRs:**

[https://github.com/publiclab/Leaflet.DistortableImage/pull/1178](https://github.com/publiclab/Leaflet.DistortableImage/pull/1178)[https://github.com/publiclab/Leaflet.DistortableImage/pull/1162](https://github.com/publiclab/Leaflet.DistortableImage/pull/1162 "https://github.com/publiclab/Leaflet.DistortableImage/pull/1162")

---------

# **Experience**

I started learning software development about 2 years ago. I started learning with YouTube but later joined coursera and Udemy. I have picked up JavaScript, react js , node Js from joining various boot camps most recent of which is sidehustle Nigeria.

---------

# **Teamwork**

I have worked with the side hustle node Js community of which i was the team leader for my group. I was tasked with dividing the work among my teammates and ensuring that we all worked together to create end points for an API project .

---------

# **Passion**

So far the leaflet.distortable project has been my main focus but i am also interested in the plots2 project. I just started contributing to open source when I joined outreachy and i think it's something i plan on doing for a very long time.

---------

# **Audience**

As a woman finding her feet in tech this has been a wonderful experience. I hope to help increase open source contributions from women from different minority groups.

---------

# **Commitment**

I understand that this is a very time consuming commitment. I have always been great at time management and I intend to show this during the internship.
I plan on dedicating at least 5hours of work to the project everyday. If for any reason i have to cut back on work I'll make sure to inform my mentor and work out a plan to make up for lost time.