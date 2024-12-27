---
title: "GSoC Update: Week 1"

tagnames: 'gsoc, upload, response:10138, gsoc14, jquery-file-upload'
author: xvidun
path: /notes/xvidun/05-28-2014/gsoc-update-week-1.md
nid: 10516
uid: 421168

---

![](https://publiclab.org/public/system/images/photos/000/004/484/original/download.jpg)

# GSoC Update: Week 1

by [xvidun](../../../profile/xvidun) | May 28, 2014 22:47

May 28, 2014 22:47 | Tags: [gsoc](../tag/gsoc), [upload](../tag/upload), [response:10138](../tag/response:10138), [gsoc14](../tag/gsoc14), [jquery-file-upload](../tag/jquery-file-upload)

----

##Progress:
For the past week I've been working on improving the upload interface for Mapknitter image upload. This is the weekly update on work that has been done.

Working git branch:[UIModelling](https://github.com/xvidun/mapknitter/tree/UIModelling)


 -  Implemented multiple image upload with drag-drop feature. Implemented JSON response from the controllers to work asynchronously with the file upload plugin. 
 -  Integrated a basic file upload interface based on [blueimp's demo](http://blueimp.github.io/jQuery-File-Upload/) of basic plus UI using it as a major reference. Have to work on bringing a cleaner interface in the coming weeks.

As of now I do not have a remote server to push my work for preview. Jeff said something about providing  remote derver to GSoC students which if provided I can push to, otherwise I can try hosting on heroku or openshift.

##Preview:

[![gsoc1_5.png](https://i.publiclab.org/system/images/photos/000/004/478/medium/gsoc1_5.png)](https://i.publiclab.org/system/images/photos/000/004/478/original/gsoc1_5.png)


[![gsoc1_4.png](https://i.publiclab.org/system/images/photos/000/004/477/medium/gsoc1_4.png)](https://i.publiclab.org/system/images/photos/000/004/477/original/gsoc1_4.png)


[![gsoc1_2.png](https://i.publiclab.org/system/images/photos/000/004/476/medium/gsoc1_2.png)](https://i.publiclab.org/system/images/photos/000/004/476/original/gsoc1_2.png)


##Incomplete tasks:
 -  As you can see the interface is really dirty, I will have to work on designing a cleaner interface.
 -  The interface used is not very relevant for Mapknitter, function to delete directly from interface are not yet worked on. Some redesigning of the UI has to be done, which I would definitely need help on.
 -  Although the upload works smoothly, the relevant callbacks has not yet been made, tried working on it and I'm having issues doing it from the current upload Iframe. Also integration with Anish's project has to be done.
 - Client side validation has not yet been worked on - will not be difficult using the plugins validation functions. Currently validation works interactively with failure response from server.
 - There are some file-upload dependencies that have to be removed and make it lighter.

##Experiences:
 - Although jquery-fileupload by Blueimp used here is a great plugin implementing it was a real hassle while taking it longer than expected to understand and implement. 
 - The plugin lacks good documentation so I had to use other sources to figure things out. Although I could not use the jquery-fileupload gem for lack of support for version 2.3.15, it was a great resource to understanding to implement the plugin in a rails context.

This has been a great week with most of the major work on the schedule done and looking forward to another good week with Public Lab and GSoC.