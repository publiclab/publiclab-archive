---
title: GSoC proposal: Mapknitter Image Management and Synchronous Editing
tagnames: software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals
author: igniteeng000
path: /notes/igniteeng000/04-06-2019/gsoc-proposal-mapknitter-image-management.md
nid: 18969
uid: 551692

---

# GSoC proposal: Mapknitter Image Management and Synchronous Editing

by [igniteeng000](../profile/igniteeng000) April 05, 2019 20:24

April 05, 2019 20:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals)

## 

About me

**Full Name:** Ashutosh Kumar

**Email:** [igniteeng000@gmail.com](mailto:igniteeng000@gmail.com)

[Github](https://github.com/igniteeng000 "https://github.com/igniteeng000") [Linkedin](https://www.linkedin.com/in/igniteeng000/ "https://www.linkedin.com/in/igniteeng000/") [Publiclab](https://publiclab.org/profile/igniteeng000)

**Affiliation:** Indian Institute of Information Technology Vadodara

**Student year:** 3rd year

**Field of study:** Information Technology, B.Tech.

**Location:** Gujarat, India

**Project:** [](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Image+Management "https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Image+Management")[Mapknitter Image Management](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Image+Managem) and Synchronous Editing

**Potential Mentors:** Jeff Warren, Emmanuel Hayford, Aman Jain

## **Project description**

MapKnitter is based around the upload of images, the positioning of those images on a map, and the compositing of those images into map export formats. This project idea focuses on the systems for tracking changes on those images, collecting them into sets, storing image history, and other improvements which we hope will simplify and reconfigure the MapKnitter codebase.

### **Abstract/summary (<20 words):**

Revamp mapknitter codebase and UI. Implement Version Control and Image Management System. Create an Image Overlay layer to show all images in a given region. Expand test coverage and add automation bots.

### **Problem**

The aim of this project is to help users to have a better User experience and have better involvement while positioning images in mapknitter. The project aims to achieve the following milestones:-

**Part 1**

- **_Revamp image sidebar menu._**
- **_Order Images in Sidebar._**
- **_Apply filter with image sequencer and upload a new version._**
- **_Save image instead of download._**
- **_Version Control._**
- **_Keyboard Shortcuts._**
- **_Revamp image popover menu._**
- **_Undo Redo changes._**

**Part 2**

- **_Select multiple images to export._**
- **_View all images for a given region in maps._**
- **_Image timeline slider._**
- **_Image upload speed optimization._**
- **_Find nearby peoples._**
- **_Get coordinates of the mouse pointer._**
- **_Fork a map._**
- **_Revamp Mapknitter UI._**

**Part 3**
Synchronous Editing

- **_Create room, join room, link sharing._**
- **_Real time image editing and placement._**
- **_Undo redo changes._**
- **_Lock and unlock editing._**
- **_View and share mouse pointers._**
- **_File change history._**
- **_Increase test coverage._**
- **_Addition of bots like codeclimate._**

### **Implementation**

- **Revamp image sidebar menu.**

Add the edit button to edit the image using image sequencer. Add place button which will place the image on map and unplace will remove from map. Currently, there is no unplace button so you cannot remove an image from the map. A expand button to expand the version history of an image.

- **Order Images in Image Sidebar.**

Drop down menu showing name, size and modified time to order them. Search bar to search image. Add Pagination.

- **Apply filter with image sequencer and upload new version.**

User can choose steps from drop down or enter steps separated by comma to apply image sequencer filters to Individual image or whole set of images. They can also save modified image. ![image description](/i/31149.png "img_seq.PNG")

  
- **Version History.**

Add save feature in Leaflet popup toolbar which save a copy of image instead of downloading.When save button is pressed it creates a image then it add that image to Image version history and mark that as active. on expanding version history user can see all version of image and choose the required version. We check for only image corners to reduce the size of our database because all other attributes remain same in other versions.

In this demo gif user can see version history, create new version and can rollback to desired version easily.

![image description](https://lh5.googleusercontent.com/Tq1Q1yNi0gT8QKP1UKornV1CwEtjsamv9cuxOtMplmAnTo1NUNrRMTDqw4lMmIDUtX7htDzPQeLbViJlXOweH33xoWYNSFieT93eXZbzMPzeCTBHr58PiW9cmr9VxYXUlTw4ufE)

  
- **Undo Redo.**

User can easily undo changes using keyboard shortcuts which will improve the user experience a lot. Rollback to previous version of image from image history. ![image description](https://lh5.googleusercontent.com/0ha5-SI7tHVfDwEKjpTjZxyMIIpGajevA5MXqYjEw2XSBzjcZ6WVA_YbDzOybfT-6HOfsp-MUwMbz7z7eLdzJvN-kHvYisbRhBny8Ksp-aWJ96LrLSjLLFVCEgXQxNcqmOV2h-A)

  
- **Keyboard shortcuts.**

Use mousetrap library to assign keyboard mapping to the leaflet popup toolbar. Examples: shift + s, shift+d to save and download the image.

![image description](/i/31151.png "key_short.PNG")

  
  
- **Expand Button.**

Expand or minimize image history. Choose from image history to make it parent.

- **Select multiple images to export.**

All images have a status they are placed or not. So when user does not want to export that image it can simply change its status to unplace to remove that image from map. All image with status place will be exported. User can also simply select the desired images to export.

- **View all images for a given region in maps.**

Will use Leaflet Environmental Layers, which already has a MapKnitter API query to fetch maps in a given bounding box; then we'd just have to switch to displaying full images once you zoom in far enough. To display distortable images we need two things src file of the image and corner points of the image. ![image description](https://lh6.googleusercontent.com/82QhuM-AZm-0LlS5gdkh_NC6PqNpt5RxYc_oF_IUmiR_3H2JpN9T1H5d1zsJNQVOVtO2elkE7v27aPVA-kxBCmZwapNfOrrJEvR8T0-pk1WgPLlWmQ_mcraWE5ZoIGYFSZa_1Xs)

  
- **Image timeline slider.**

Add a slider view to display maps at that time period.Will use leaflet sliderControl.js

Demo

![timeline](https://lh4.googleusercontent.com/5Ne_NM-HorNOb8lHbAxQgwHEFx4ntF5GTgw82CgXhFWXtlmuCPNVHY_kHrebTp1P_S6pJCnkpUZ6gTWn0SlTeu510QlOFsFBVv5-VT4ReNGbn_iYrkp6Tu-CWRah7wHufWfbiQs)

  
Pseudo Code

![Slider](/i/31168.png "cslider.png")

  
- **Image upload speed optimization.**

Use image compression libraries like tinypng to compress image.

- **Find nearby peoples.**

Find top contributors of that place and show that users on map

- **Get coordinates of the mouse pointer.**

Add feature which can tell coordinates of the mouse pointer on clicking.

- **Fork a map.**

Add option to freely experiment with changes without changing the original map.

- **Revamp Mapknitter UI.**

Will develop UI for the UI mockups created by Publiclab community after so much discussions and research. [Publiclab Mockups](https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2_4zc/edit#slide=id.g4e2261b4b2_0_0)

- **Synchronous Editing.**

"Last-write wins" isn't good enough for collaborative editors. To handle merge conflicts, there are 2 competing technologies: OTs and CRDTs. OTs require special handling for each & every command, so they are more error prone and adding features is a huge undertaking. **CRDTs** are simpler, at the expense of being more memory-intensive, which is usually an acceptable trade-off.
Google docs uses diff-match pattern which is based on OT. However, Latest real time editors are built by using crdt.

**Challenges** in Real Time Content Sync

- **Commutativity:** Concurrent insert and delete operations converge to the same result regardless of the order in which they are applied.
- **Idempotency:** Repeated delete operations produce the same result.

**Solution:**

- **Commutativity:** Globally Ordered Characters. CRDT ensure commutativity by using fractional indices as opposed to numerical indices.
- **Idempotency:** Globally Unique Characters. CRDT ensure Idempotency by assigning Site ID and Site Counter properties whenever a new character is inserted.

We have two types of changes local and remote.

**Remote change: insertion**

- Get index of the preceding character in the CRDT
- Insert character in the CRDT
- Create a local change inserting a character at that index

**Remote change: deletion**

- Get the index of a character with the same position identifier in the CRDT
- Delete that character in the CRDT
- Create a local change deleting a character at that index

**Local change: insertion at position n**

- Find the nth and (n+1)th character in the CRDT
- Create a position identifier between character n and n + 1 and insert character in the CRDT
- Send out a remote insert change for that character

**Local change: deletion at position n**

- Find the nth character in the CRDT
- Delete that character in the CRDT
- Send out a remote delete change for that character

Please read this [case study](https://conclave-team.github.io/conclave-site/ "https://conclave-team.github.io/conclave-site/") for a deep understanding.

Check this link for [awesome-crdt](https://github.com/alangibson/awesome-crdt) resources.

I have prior experience of builting collaborating editors.I have built two text editor apps using CRDT.

- [https://reator.herokuapp.com](https://reator.herokuapp.com)
- [https://coderelayy.herokuapp.com](https://coderelayy.herokuapp.com)

I have used **Yjs** framework to build these projects.
Yjs is a framework for offline-first p2p shared editing on structured data like text, richtext, json, or XML. It is fairly easy to get started, as Yjs hides most of the complexity of concurrent editing.

Yjs offers multiple type of object.

![image description](https://publiclab.org/i/31314.png "yjs.png")

  
But now challenge is to implement that for image editor.
I have made a demo app for collaborative image editor.
Right now Upload image, delete image, real time resize, replace, undo redo are implemented and working in real time.

Please check the video.
<iframe width="560" height="315" src="https://www.youtube.com/embed/62-z-b_hCWE" frameborder="0" allowfullscreen=""></iframe>


### **Timeline/milestones**

![image description](/i/31315.png "timenew.PNG")


### **Needs**

I would need all the guidance and feedback from the community to ensure the project is heading in a desirable direction. I might also need the help of previous contributors of the project to understand the implementation of certain aspects of the project.

**First-time contribution**

**At the time of writing this down, my contributions have been as follows.**![image description](/i/31316.png "contnew.PNG")

- Pull Requests (10 total, 9 closed, 1 open): [Navigate](https://github.com/pulls?q=is:open%20is:pr%20author:igniteeng000%20archived:false%20user:publiclab)
- Issues (14 total, 9 closed, 5 open): [Navigate](https://github.com/issues?q=is:issue%20author:igniteeng000%20archived:false%20user:publiclab "https://github.com/issues?q=is:issue%20author:igniteeng000%20archived:false%20user:publiclab")
- Comments (on 39 issues): [Navigate](https://github.com/search?utf8=%E2%9C%93&q=commenter:igniteeng000%20org:publiclab&type=Issues "https://github.com/search?utf8=%E2%9C%93&q=commenter:igniteeng000%20org:publiclab&type=Issues")
- Review Requests (15 closed, 1 open): [Navigate](https://github.com/pulls?q=review-requested:igniteeng000%20user:publiclab "https://github.com/pulls?q=review-requested:igniteeng000%20user:publiclab")

---------

### **Experience**

I started my engineering journey from competitive coding. I usually take part in weekly and monthly contests held on codechef and hackerrank. I was selected for ACM ICPC onsite round in 2017 that was a proud moment because I was representing my institute for the first time at ICPC. I gradually moved toward software development.I am good at problem solving and solved 400+ questions on various competitive sites ([stopstalk](https://www.stopstalk.com/user/profile/igniteeng000)) I am a Full Stack Developer with more than 1.5 years of Experience.I have done programming in python , java, ruby, cpp. I have experience of software developement in ruby and rails, **mern** (Mongo db, express, react, node js)stack, **lamp** (linux, apache, mysql, php) stack. I have also experience of artificial intelligence and voice technologies. One of my voice assistant app **mind games** is in **top 10** of the Google action store in games category.

I have been contributing to PublicLab from more than **six** months now and have also worked with PublicLab in GCI 2018 as a **Google Code In mentor**. In which I created and mentored 20+ tasks. I am a **Google India Scholar** who get an exclusive Android Developer Nanodegree traning program for 9 months. I am a certified android developer by Udacity and Google.

**Projects:**

- **Readit:** The user subscribes to a large number of subreddits, finds it hard to keep up with them.The Readit is an andorid app which will show you the top posts from all your favourite subreddits so you'll always be up to date.
- **Reator:** Reator is a decentralized code editor with real-time collaborative editing for browser with communication features. Reator uses Conflict-Free Replicated Data Types(CRDT) to make sure all users stay in-sync and WebRTC to allow users to send messages directly to one another. Inspired by google docs.
- **EasyGst:** Accounting Software for Small businesses in India.
- **KnowQuest:** Question Bank for our Institute.

**Certifications:**

- _2019, Google and Coursera, Advanced Machine Learning with TensorFlow on GCP._
- _2018, Google and Udacity, Android Developer Nanodegree._
- _2018, Google and Coursera, IT support Professional Certificate._
- _2017, ACM ICPC onsite round._
- _2017, IIITV hackathon runner up._
- _2017, Coursera, Programming for Everybody_

### **Teamwork**

I lead my team into **ACM ICPC** from our institute for the first time. I was also a **slack moderator** in Google Udacity Scholarship program. I have done various group projects. In my previous semester, we had a software engineering group project of 5 peoples. The project which we decide to work on requires a lot of new skills and challenges. However, we tackle all the problems and complete the project on time. I am also a **Placement Cell Coordinator** of my institute and coordinate placement activities. I have also volunteered for 1 month at a child NGO Sarthi to understand their real life problems and provide a technological solution to them.

### **Passion**

I am inspired by the motive of Public Labs to learn how to investigate environmental concerns on your own. I love the idea of using inexpensive DIY techniques to make this planet a better place to live. It's everyone responsibility to take care of the environment. Improving workflow and user experience of mapknitter would encourage better participation and promote a wonderful community to unite and discuss problems and make a change to this world.

### **Audience**

The target audience of this project are the users of these maps and the website. Improving UI,UX, and workflow of the maps will help users to understand the workflow easily and they can utilize the platform well. As a big fan of Open Source technologies, I intend to use only free software and technologies that are accessible to the community.

### **Commitment**

I understand this is a serious commitment and equivalent to a full time summer job. I have a semester break from 8 May - 25 July. So I can give up to 8 hrs a day easily during this duration to this project. I have no further commitment this summer.