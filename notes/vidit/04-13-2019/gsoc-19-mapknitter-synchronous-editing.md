---
title: GSOC-19 Mapknitter synchronous editing
tagnames: summer-camp, gsoc, google-summer-of-code, gsoc-proposal, summer-of-code, soc-2019-proposals, soc-2019-projects
author: vidit
path: /notes/vidit/04-13-2019/gsoc-19-mapknitter-synchronous-editing.md
nid: 19051
uid: 517093

---

# GSOC-19 Mapknitter synchronous editing

by [vidit](../profile/vidit) April 13, 2019 19:42

April 13, 2019 19:42 | Tags: [summer-camp](../tag/summer-camp), [gsoc](../tag/gsoc), [google-summer-of-code](../tag/google-summer-of-code), [gsoc-proposal](../tag/gsoc-proposal), [summer-of-code](../tag/summer-of-code), [soc-2019-proposals](../tag/soc-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects)

**1\. ABOUT ME**

Name: Vidit Chitkara

Affiliation: Guru Gobind Singh Indraprastha University, New Delhi, India-110078

Location: Delhi, India-110034

Github: [ViditChitkara](https://github.com/ViditChitkara)

Email: [chitkara.vidit@gmail.com](mailto:chitkara.vidit@gmail.com)

LinkedIn: [linkedin.com/in/vidit-chitkara-22656a13b/](https://www.linkedin.com/in/vidit-chitkara-22656a13b/)

Project Title: Mapknitter Synchronous Editing

Gitter: ViditChitkara

**2\. PROJECT DESCRIPTION**

Mapknitter Synchronous Editing

**3\. ABSTRACT/SUMMARY**

With the increasing trend of using real time features, it has been possible to enhance the User Experience quite well. This project focuses on providing real time user image placement which includes dragging and dropping the images onto the editor without latency, changing the position of image in real-time showing custom animations while images are being dragged from one position to another.

**4\. PROBLEM**

The aim of this project is to help users have a better User experience and have better involvement with Public Lab. The project aims to achieve the following milestones:-

- a low-latency plan for real-time multi user image placement (locking/unlocking/transactions)
- standardization and testing of image JS API
- potential low-latency API, possibly using sockets
- a simultaneous multi-user UI, highlighting images and animating their movement, like Google docs
- edit history/reversion, accept changes UI, possibly in a "history" menu?
- image "locking" or edit rejection UI for real-time use
- javascript tests (Jasmine, perhaps) for many of these features
- documentation of these features for downstream use by other libraries
- possible development of an interface layer between or extension of Leaflet.DistortableImage and the MapKnitter API

**5\. APPROACH**

5.1 There are different methods through which concurrent editing can be handled:-

Using a central server - The most common scenario is a central server that all clients have to communicate with. The server could keep track of how the document of each participant looks. Both A and B then send a diff with their changes to the server. The server would then apply the changes to the respective tracking documents. Then it would perform a three-way-merge and apply the changes to the master document. It would then send the diff between the master document and the tracking documents to the respective clients. This is called [differential synchronization](https://neil.fraser.name/writing/sync/).\*\*  
\*\*

![](https://lh4.googleusercontent.com/bcHIOu8hIJQCgAXG79bAIDw8le0NIQXZKt_aTbyr_M3S546RMbqXezfCeOB8-BkD1Hd5wkLFuNBwXGbvvof4G__ARLKm-Lxk_XC7W_clQg01nCI-4Zp9NJN21O_G91N7g5s1JwNd)

5.2 Jasmine Tests:-

1. We may use the jasmine-rails gem to start with.
2. rails generate jasmine\_rails:install This generator will create all necessary files and configuration required and also mounts a test runner to localhost:3000/specs to get started with writing the specs.
3. Configuration for jasmine test runner is done under spec/javascripts/support/jasmine.yml
4. Jasmine tests are much similar to rails spec :-


```
<p></p><p>it(“should not be possible to play”, function() {</p><p>    player.stop();</p><p>    expect(player.isPlaying).toBeFalsy();</p><p>    expect(player.currentlyPlayingSong).not.toEqual(song);</p><p>});</p>
```

**6\. TIMELINE**

Community Bonding Period \[May 6-- May 27\]-\> Understand Mapknitter's codebase, discuss with mentor, the relevant issues of the project and requirements for them. Break the features into several first timer issues, to encourage greater participation. Then starting with the prototype of the features.

\[May 28 -- June 10\]-\> Start with the multi user image placement in real time. Will be looking to use the lock--unlock--transaction algorithm for this, so that data isn't lost.  
\[June 10 -- June 13\]-\> Testing of image JS API.  
\[June 14 -- June 16\]-\> Write tests for real time image placement feature.  
\[June 17 -- June 20\]-\> Reduce the latency of the API using Sockets.  
\[June 24 -- June 28\]-\> First evaluation, discuss our way forward with the mentors.  
\[June 29 -- July 6\]-\> Work on showing animation when user places an image from one position to another. Building a UI similar to Google Docs.  
\[July 7 -- July 14\]-\> Work on Edit History dashboard which will have a list of features including edit history, etc.

\[July 15 -- July 21\]-\> Work on image locking/edit rejection feature when editing in real time.  
\[July 22 -- July 26\]-\> Second evaluation, discuss the final leftovers with the mentors.\[July 27 -- August 10\]-\> Start writing documentation for the above feature and write test for them too.  
\[August 11 -- august 18\]-\> Brushing the code in the above parts, wherever possible. Do testing of all the parts as a complete system. Complete the documentation.

**7\. SETUP**

Yes I have forked the mapknitter repository on my local machine which is up-to-date...

**8\. OUTREACH PLAN**

Publiclab have always helped me grow as a developer. As a part of my outreach plan:-

- I would like to open several first-timer-issues to encourage really great participation for new contributors.
- Being a member of my college's google developer's group I would conduct various open source sessions and encourage new contributors to contribute to publiclab.
- I would also like to break my gsoc work into smaller parts which could be taken by first-timers and inculcate greater confidence among them.

**9\. AUDIENCE**

Image positioning on a document is something very important. Providing a real time image positioning feature will definitely intrigue users and will encourage them to better express their views with the help of this tool.

**10\. COMMITMENT**

I understand that this project requires time commitment equivalent to a full-time job. I am really pumped up to give my best for this project.