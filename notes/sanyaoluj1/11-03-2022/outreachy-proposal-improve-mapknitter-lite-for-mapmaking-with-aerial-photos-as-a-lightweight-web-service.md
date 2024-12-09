---
title: Outreachy Proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service
tagnames: software, outreachy, first-time-poster, zoom:5, outreachy-2022, outreachy-winter-2022, lat:6.839169, lon:4.042968
author: sanyaoluj1
path: /notes/sanyaoluj1/11-03-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
nid: 36051
uid: 816148

---

![](https://publiclab.org/public/system/images/photos/000/047/281/original/mapknitter.png)

# Outreachy Proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service

by [sanyaoluj1](../profile/sanyaoluj1) November 03, 2022 18:39

November 03, 2022 18:39 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:5](../tag/zoom:5), [outreachy-2022](../tag/outreachy-2022), [outreachy-winter-2022](../tag/outreachy-winter-2022), [lat:6.839169](../tag/lat:6.839169), [lon:4.042968](../tag/lon:4.042968)

----

## **About me**

I'm Joseph Sanyaolu, an aspiring software engineer. I got into tech about a year ago, being self taught has been challenging and I've also learnt a lot. I completed a course on JavaScript recently and I'm still learning. I want to be a full stack software developer, but I have no experience working in the tech industry, other than the little projects and works I've done to improve my skills.

I enjoy being in front of my computer screen, not necessarily coding, but doing something for improvements, fun or tech related.

**Location:** Ago-Iwoye, Nigeria

## **Project description**

Mapknitter, is simply a system whereby anyone can upload aerial images in a web interface over existing map data. This images can be shared, or export to be printed.

This project is to improve mapknitter and also make it as lightweight as possible. Using internet archive images collections, the latest JavaScript image processing to prototype full resolution image and download it in the browser, this and other improvements will make the mapknitter lightweight while still offering the best.

### **Abstract/summary**

Improve the mapknitter into a lightweight web service for mapmaking with aerial photos.

### **Problem **

The mapknitter lite is currently running an archived version, the JavaScript code is still in ES5 format, which is kind of outdated, and for a project that wants to use the latest JavaScript image processing, and also wants to run lightweight, the code needs to be updated to have the latest and current JavaScript features.

**_Implementing a geocoding searchbox_**![image description](/i/47285.png "Searchbox.png")

This feature is needed, so that users can navigate to a specific place or area. This will search an array of JSON objects for given keywords and display the result on the webpage, whilst the map responds and navigates to the area.

**_Allowing users to drag images onto page to add them, without saving the images._**

**![image description](/i/47326.png "code-snapshot.png")_  
_**

This will allow users to drag image files onto the webpage to add them, without saving the images and also import multiple images onto the map.**  
**

We will also notice users when they're working with the drag feature, letting them know that they're editing with local images and it needs to be saved to [archive.org](http://archive.org) if they'd like to work online or export the map.

There should be a prompt for download image scale, when a user want's to download or export the images.

_**Updating the general JavaScript code, so as to accommodate new features.**_

The JavaScript code used for Mapknitter lite is mostly ES5 format and outdated. As we are working on improving mapknitter, and also making it lightweight, we need the code to be formatted to the latest and recent format so as to accommodate the new and recent features. The changes to the code will also add to the speed, efficiency and accuracy of the mapknitter website, I believe.

  
### **Timeline/milestones**

**Week 1: **Get familiar with mentors, codebase, projects and organization in general. Get prepares and setup workspace.  

**Week 2:** Check the code that makes up the mapknitter and make the necessary updates, like modification of functions, functional scope, and general update to the JavaScript code to the latest or ES6 format.

**Week 3: **Begin work on implementing the geocoding search box, check out the JSON files from which the data that is search will be fetched.

**Week 4 and Week 5:** Continuation of project in week 3, then move to allowing users to the page without saving the images and also allowing for upload of multiple files, working on the notice and prompt on download scale of images.

**_Week 6:_** Continuation of projects in week 3\. Get feedback on projects and work done in the past weeks, review pasts works, make changes and additions where necessary.

**Week 7: **Work on detecting key from URL using JavaScript's URLSearchParams or windows.location.search. Create issues where needed and reach out to mentors and others on the project progress and ways to improve the most important aspects of mapknitter.

**Week 8 and Week 9:** Work on accepting a JSON file by URL or upload to a map. Begin work on the UI part of mapknitter, by modification of the buttons, search bar and so on. create a unique identifier for each image so that the browser knows which location to place it on the map based off previous uploads. I can try to do this by matching it with the name of the image.

**Week 10 and Week 11:** Work on creating a unique identifier for each image so that the browser knows which location to place it on the map using previous uploads. Also, saving the positions in local storage for offline usage and that will make it faster to load.

**Week 12: **Check other issues that could be worked on, review PRs, create issues, make general improvements based on requests and guides from mentors.

**Week 13:** Complete uncompleted or unconcluded projects or tasks. Make changes based on mentor's review and feedback.

  
### **Needs**

- Documentations on the project and mapknitter itself
- Community and mentor's support alongside guidance

  
### **First-time contribution**

This is my first time contribution: [https://github.com/publiclab/plots2/pull/11476](https://github.com/publiclab/plots2/pull/11476)

**Initial contributions**

- Removed logical NOT operator where unnecessary: [https://github.com/publiclab/Leaflet.DistortableImage/pull/1265](https://github.com/publiclab/Leaflet.DistortableImage/pull/1265)
- I created an issue for first timers: [https://github.com/publiclab/plots2/issues/11537](https://github.com/publiclab/plots2/issues/11537 "https://github.com/publiclab/plots2/issues/11537")
- I created an issue for first timers: [https://github.com/publiclab/plots2/issues/11481](https://github.com/publiclab/plots2/issues/11537)

---------

### **Experience**

I started into tech about a year, since then, I've learnt HTML, CSS, and JavaScript, all being self taught. I found JavaScript particularly interesting and I recently completed a full course on JavaScript with mini projects like a calculator. This is my first ever real project and first experience and it's been fun and educative so far. PublicLab's Mapknitter will definately be my first open-source and first ever project. This is going to be a push into the tech industry and also a path to my software developer career.

---------

### **Passion**

I enjoy tech and computers in general. I've always been found to solve problems related to tech and computers...I decided to put this to good use and it's been steady progress back to back.

### **Audience**

This should be of help to everyone in general, but be used mostly by geographers, environmental advocates, those who need aerial pictures or people who study the environment, earth's atmosphere and so on. It focuses on environmental concerns, making it possible for anyone to access and use by using DIY technique.

### **Commitment**

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

I do understand it's a full time and serious commitment, and I'm ready to work for 30 - 40 hours per week, 6 - 8 hours per day.