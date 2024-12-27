---
title: "Outreachy proposal: Rebuilding Spectral Workbench capture and analysis interface"

tagnames: 'first-time-poster, lat:31.520369, lon:74.358747, zoom:6, outreachy-winter-2021'
author: wajeehamushtaq1
path: /notes/wajeehamushtaq1/10-27-2021/outreachy-proposal-rebuilding-spectral-workbench-capture-and-analysis-interface.md
nid: 27968
uid: 775423

cids: 29359,29389,29394

---

![](https://publiclab.org/public/system/images/photos/000/044/956/original/IMG_20201208_122730.jpg)

# Outreachy proposal: Rebuilding Spectral Workbench capture and analysis interface

by [wajeehamushtaq1](../../../profile/wajeehamushtaq1) | October 27, 2021 11:33

October 27, 2021 11:33 | Tags: [first-time-poster](../tag/first-time-poster), [lat:31.520369](../tag/lat:31.520369), [lon:74.358747](../tag/lon:74.358747), [zoom:6](../tag/zoom:6), [outreachy-winter-2021](../tag/outreachy-winter-2021)

----

# 

# About Me:

Name: Wajeeha Mushtaq

Email: [wajeehamushtaq1@gmail.com](mailto:wajeehamushtaq1@gmail.com)

Github:[](https://github.com/Manasa2850)[https://github.com/wajeehamushtaq](https://github.com/wajeehamushtaq)

Resume: [](https://drive.google.com/file/d/12dDsTzY5Oh8ck491wTRK2oRame-kIAVw/view?usp=sharing)[Resume](https://drive.google.com/file/d/12dDsTzY5Oh8ck491wTRK2oRame-kIAVw/view)

Location: Lahore, Pakistan

Timezone: UTC+05:00

# Project Description:

Spectral Workbench is a web app that allows amateurs and researchers to analyze and record spectral data. The data is then provided to a live open-sourced database with hundreds of spectrums so that everyone may profit from it. Spectral Workbench is a JavaScript and Ruby program that collects spectra in the form of images with associated JSON data from low-cost DIY spectrometers. It uses the JavaScript library, which can be used standalone or as part of a bigger Ruby on Rails application. The goal of this project is to rebuild the Spectral Workbench capture and analysis interface, as well as to create a modern version of the "capture" interface for collecting data from a smartphone camera, as well as to rework and integrate that new interface into the Rails app. Complete the upgrades by reintegrating all existing features into the new system, as well as expanding the new system's capabilities.

# Abstract/summary (<20 words):

Redeveloping the Spectral Workbench capture and analysis interface by including all prior functionality into the new system while also adding new features.

# Problem:

1\. Reconnect broken routes/ routes that need to be repaired:

Some routes, such as forking spectra, comparing, and matching spectrum, have been lost. Spectral Workbench does not display spectra when transferring calibration or creating sets and comparisons. The "Copy Calibration" box appears, however, the spinning circle continues to spin without displaying any spectra. Calibrating and comparing does not appear to be achievable.

![](https://lh3.googleusercontent.com/TC8bCneBvWSkYZkHFWi1y-c5lkdYRbR4C_g6cHtnrJMSQ_11uW3Xe3KBbqjSmSgwgUuEsGJNMCkfxTdi-AHc8VLHmrmXkhwlKLjvR8pVl8ahb503tFavi8y1WKZkDif9JaQkZIQ)

  
2\. Protect routes with functional tests

```
 test "test get request for spectra show" do<br>
```

Once all the routes are connected or repaired, we will start protecting routes using functional tests.

3\. Reproduce detection of fluorescent lights

The identification of fluorescent lights from the old capture interface will be replicated in the new capture interface. This then provides calibration, as well as a top-level alert. Using jQuery, we'll add an alert box to the top of the page.

![](https://lh4.googleusercontent.com/acRioL6LJopZPRQLmfb_bjdz2qpVtIWqj6Jo9eG22_p-GJ0pnrcrVVz_CCgwXJyFow3RB-XXfhp3GJiHhFmLchpeDEcOquddLbJle7cHwr28wKN2cn0xvvHKv0otOa14C88k7rU)

```
jQuery(document).ready(function() {

         $W.observe_contrast(

           false,

           function() {

             $('#cfl-detect i').css('color','red');

       alert("Create an alert for detected fluorescent lights");

           },

           function() {

             $('#cfl-detect i').css('color','white');

           })

       })
```

4\. Debug Safari compatibility and confirm iOS compatibility

On Mac OS, the new Capture Interface works, however on iOS, it freezes on the first frame of video, despite the "waterfall" continuing. The live camera feed cannot be loaded on both [https://spectralworkbench.org/capture](https://spectralworkbench.org/capture) and localhost:8080/examples/capture/ on (iOS 14/ iPadOS) in safari or chrome browser. This means that iOS users will be unable to view the live feed because these popular browsers do not support it.

On macOS, a distinct scenario has been noticed, in which the live feed does load after prompting for camera access on localhost. However, it does not at [https://spectralworkbench.org/capture](https://spectralworkbench.org/capture). On current versions of iOS, getUserMedia() works perfectly. In general, 11.1 and higher are acceptable.

We'll need to connect an iOS device to a Mac and use the Safari remote debugging setup to troubleshoot this. You'll be able to get a console and a javascript debugger this way.

If you've already used getUserMedia() to ask the user for permission to use the camera and/or microphone, enumerateDevices() will work. The emumerateDevices() results are ambiguous or missing without such permission. This is done in order to avoid browser fingerprinting.

Here's some code similar to what I've used to enumerate media sources on several browser platforms, including iOS, Android, and desktops. Because it's a simple way to handle the Promise delivered by getUserMedia, I've used async / await (). However, if you want, you can use the Promise directly. (Please note that I've updated this code to remove any application-specific information, but I haven't debugged it yet.)

```
async function enumerateSources() {
   if(navigator && navigator.mediaDevices && typeof navigator.mediaDevices.enumerateDevices === 'function' ) {
     try {
       /* open a generic stream to get permission to see devices;
        * Mobile Safari insists */
       const stream = await navigator.mediaDevices.getUserMedia(
               { video: true, audio: true} )
       let devices = await navigator.mediaDevices.enumerateDevices()
       const cameras = devices.filter( device => {
         return device.kind === 'videoinput'
       })
       if (cameras.length >= 1) console.log ('cameras avail')
       const mics = devices.filter( device => {
         return device.kind === 'audioinput'
       })
       if (mics.length >= 1) console.log ('mics avail')
      /* release stream */
       const tracks = stream.getTracks()
       if( tracks ) {
         for( let t = 0; t < tracks.length; t++ ) tracks[t].stop()
       }
       return ({cameras, mics})
     } catch(error) {
      /* user refused permission, or media busy, or some other problem */
       console.error(error.name, error.message)
       return {cameras:[], mics:[]})
     }
   }
   else throw ('media device stuff not available in this browser')
}
```

5\. Develop setting to increase capture image resolution 

  
Develop options to raise the resolution of the captured image beyond the existing fixed 640px. With the getUserMedia API parameters, you can enable resolution changes. Image Capture is a camera hardware configuration API that allows you to capture still photos. This API is available on Android and desktop in Chrome 59\. Zoom, brightness, contrast, ISO, and white balance are just a few of the camera functions that may be controlled via the API. The best part is that Image Capture lets you use the full resolution of any camera or webcam on your device. Previous methods for taking photos on the Internet relied on video snapshots, which have a lesser resolution than still images.

  
A MediaStreamTrack is used as the source for an ImageCapture object. The API then offers two capture methods, takePhoto() and grabFrame(), as well as methods to access and adjust the camera's capabilities and settings.

```
var widthSlider = document.querySelector('input[type=range]');
 
imageCapture.getPhotoCapabilities()
 .then(function(photoCapabilities) {
   widthSlider.min = photoCapabilities.imageWidth.min;
   widthSlider.max = photoCapabilities.imageWidth.max;
   widthSlider.step = photoCapabilities.imageWidth.step;
   return imageCapture.getPhotoSettings();
 })
 .then(function(photoSettings) {
   widthSlider.value = photoSettings.imageWidth;
 })
 .catch(error => console.error('Error getting camera capabilities and settings:', error));
```

  
6\. Reconnect functions within Rails app

Within the Rails app, reconnect and refine the "Compare spectra" and "Find Similar" functions.

Present in app/views/spectrum/show and app/views/spectrum/\_tools

  
7\. Develop test cases for the capture program, such as calibration, overexposure detection, and possibly using pre-recorded video.

  
8\. Without using the Rails app, construct a stand-alone programme from the viewer and capture components

  
- Drag + drop functionality

```
function allowDrop(ev) {
   ev.preventDefault();
 }
  function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
 }
  function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 }
```

  
- View a graph for saved JSON data or image

We will be using Chart.js to load new data from saved JSON object

  
9\. Create documentation for setup and initialization of capture interface

  
# Timeline/milestones

  
![image description](/i/44977.png "Screenshot_(369).png")

  
  
![image description](/i/44978.png "Screenshot_(370).png")

  
  
# Needs

Mentors are available to provide comments on PRs, answer questions, and clear up any misunderstandings.

  
# Contributions with Public Lab

FTO: [https://github.com/publiclab/spectral-workbench/pull/766](https://github.com/publiclab/spectral-workbench/pull/766)   

FTO created: [https://github.com/publiclab/spectral-workbench/issues/770](https://github.com/publiclab/spectral-workbench/issues/770)   

Other Contributions:  

[https://github.com/publiclab/spectral-workbench/issues/754#issuecomment-948275573](https://github.com/publiclab/spectral-workbench/issues/754#issuecomment-948275573)   

[https://github.com/publiclab/plots2/pull/10358](https://github.com/publiclab/plots2/pull/10358)   

[https://github.com/publiclab/plots2/pull/10359](https://github.com/publiclab/plots2/pull/10359)   

[https://github.com/publiclab/plots2/pull/10304](https://github.com/publiclab/plots2/pull/10304) 

  
  
# Experience

I have working knowledge of all major programming languages including HTML, CSS, SASS, JavaScript, Json, jQuery, AJAX, React, and Ruby on Rails. Recently, I did my internship on react and ruby on rails at Devsinc. I am a creative and enthusiastic developer who is always eager to learn something new related to technology. I focus on the implementation of a variety of software solutions in addition to developing, modifying, and maintaining existing software.

A Blog App was one of the projects on which I worked. This project taught me a lot, but most importantly, it taught me how to write better code. Because this project was larger than most of my others, I needed to write clean code.

Github Repo: [https://github.com/wajeehamushtaq/blog-app](https://github.com/wajeehamushtaq/blog-app "https://github.com/wajeehamushtaq/blog-app")

The second app is Zombie-Apocalypse-Survival. It is the inventory system application that helps survivors to trade safely. If any 5 survivors mark any person as infected then the person will assume as a zombie and he will no longer access the application functionalities.

Github Repo: [https://github.com/wajeehamushtaq/Zombie-Apocalypse-Survival](https://github.com/wajeehamushtaq/Zombie-Apocalypse-Survival)

  
# Teamwork

During my four years at university, I worked on semester term projects with allocated groups. We worked on a Plagiarism Checker Website, and I was in charge of designing the front-end and implementing the site's algorithms. Consistent communication between my teammates and me was critical to the project's success. I also worked on the MediPro app, which is an online medicine delivery service.

  
# Passion

I used to enjoy coding when I was younger. I am constantly experimenting with new applications and technology. This piqued my interest in coding and inspired me to create my own software. In addition, I'm interested in digital illustrations. In my spare time, I dabble in graphic design.

  
# Audience:

Spectral Workbench is a web app that allows amateurs and researchers to analyze and record spectral data. After that, the data is contributed to a live open-sourced database with hundreds of spectrums so that everyone may profit from it.

  
# Commitment

Because I have no commitments, I will always be available. From Monday through Friday, I'll be working for 40 to 45 hours.