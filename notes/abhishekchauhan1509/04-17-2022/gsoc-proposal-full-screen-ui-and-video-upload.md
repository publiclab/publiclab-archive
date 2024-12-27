---
title: "GSoC"proposal: Full-screen UI and video upload "

tagnames: 'software, gsoc, soc, first-time-poster, gsoc-2022, gsoc-2022-proposals'
author: abhishekchauhan1509
path: /notes/abhishekchauhan1509/04-17-2022/gsoc-proposal-full-screen-ui-and-video-upload.md
nid: 30443
uid: 794981
cids: 30023,30043,30044,30061
---

![](https://publiclab.org/public/system/images/photos/000/045/909/original/4621650.png)

# GSoC"proposal: Full-screen UI and video upload 

by [abhishekchauhan1509](/profile/abhishekchauhan1509) | April 17, 2022 01:09

April 17, 2022 01:09 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [first-time-poster](/tag/first-time-poster), [gsoc-2022](/tag/gsoc-2022), [gsoc-2022-proposals](/tag/gsoc-2022-proposals)

----

## 

## ![](https://lh6.googleusercontent.com/m8fXtA4txWt-X3kbEQgbV21VEnWjr4rO1lGBOMzNwOXqoS1eFlFckiiF0tWY0uduIjUF34PZspPkXhUzdrLXXX20nR10TvvU7B_TsbE4m9FPdPWPDttoI6P4OPzKFDPU2ZYS03oY) 

  
-><-

**

->INFRAGRAM: Full-screen UI and&nbsp;<span style="font-size: 1rem;">video upload</span><-

->Proposal - Google Summer of Code 2022<-**-><-

**About Me**

- **Name**: Abhishek Chauhan
- **Personal** **Email**: [abhishekchauhan1509@gmail.com](mailto:abhishekchauhan1509@gmail.com)
- **Gitter** **handle**: abhishekchauhan15
- **Telephone**: +91 8882876897
- **Country** **of** **Residence**: India
- **Timezone**: IST (India)
- **Typical** **Working** **Hours**:15:00-19:00, 22:00-05:00 ( IST ) 6:00-8:00, 9:30-13:30, 16:30-23:30 (UTC)
- **Language**: English
- **Github**: [abhishekchauhan15](https://github.com/abhishekchauhan15)

  
## Project description

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. [Infragram.org](http://Infragram.org) enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen, accept multiple resolutions of video, output multiple resolutions, and will allow dragging in a recorded video instead of a still image for conversion.

Abstract/summary (<20 words):

As research work is increasing all over the world scientist and researchers use Infragram for their analysis, we are looking to improve a collection of User Interface/User Experience (UI/UX) and related features on the platform.

### Problem

What problem(s) does your project solve?

**1.Allow cross-browser drag-and-drop on the entire page instead of just selecting an image**

## Common grounds

All tested browsers follow the same event pattern when a file is dragged into or out of the page:

1. User drags into the page:

```
DragEvent { type: “dragenter”, target:  }
`````

|

1. User drags across the page:

| 

```
<p></p><p><span>DragEvent { type: </span><span>“dragover”</span><span>, target: </span><span></span><span> }</span></p>
```|

1. User drags out of the page:

| 

```
DragEvent { type: “dragenter”, target:  }
`````

|

1. User drops on the page:

| 

```
DragEvent { type: “drop”, target:  }
`````

|

1. User drags from the page into an element:

| 

```
<p></p><p><span>DragEvent { type: </span><span>“dragenter”</span><span>, target:</span><span style="font-size: 1rem;">}</span></p><div class="“droptarget”"><span>DragEvent { type: “dragleave”, target:  }</span></div>
`````

``

|

- User drags from an element to the body element:

| 

```
DragEvent { type: “dragenter”, target:  }<br>DragEvent { type: “dragleave”, target:}<br>
````  
`

|

Detecting if a drag & drop is happening anywhere on the page

| 

```
<p></p><p><span>var</span><span> eventCounter = 0;</span><span><br></span><span>var</span><span> draggingInPage = </span><span>false</span><span>;</span><span><br></span><span><br></span><span>body.addEventListener(</span><span>‘dragenter’</span><span>, </span><span>function</span><span> () {</span><span><br></span><span>&nbsp; &nbsp; eventCounter += 1;</span><span><br></span><span>&nbsp; &nbsp; draggingInPage = </span><span>true</span><span>;</span><span><br></span><span>});</span><span><br></span><span>body.addEventListener(</span><span>‘dragleave’</span><span>, </span><span>function</span><span> () {</span><span><br></span><span>&nbsp; &nbsp; eventCounter -= 1;</span><span><br></span><span>&nbsp; &nbsp; draggingInPage = eventCounter &gt; 0;</span><span><br></span><span>});</span><span><br></span><span>body.addEventListener(</span><span>‘drop’</span><span>, </span><span>function</span><span> () {</span><span><br></span><span>&nbsp; &nbsp; eventCounter = 0;</span><span><br></span><span>&nbsp; &nbsp; draggingInPage = </span><span>false</span><span>;</span><span><br></span><span>});</span></p><br>
````  
`|

## **

## 2.Detecting if the user is dragging files or text

## To detecting dragging text vs dragging files, different properties of the events dataTransfer need to be accessed in different Browsers.**

## 

In Chrome, Firefox, and Safari, the DataTransfer object at the event.dataTransfer has a types property which is a string array that will contain "Files" when files are dragged

| 

```
var draggingFiles = false;<br>function onDragEnter(event) {<br>    draggingFiles = event.dataTransfer.types.indexOf(‘Files’) >= 0;<br>}<br>
````  
`

|

Microsoft Internet Explorer and Edge will provide a DOMStringList instead of an array, therefore using Array methods like includes or indexOf is not possible. For DOMStringList, using the contains method yields the same result:

| 

```
var draggingFiles = false;<br>function onDragEnter(event) {<br>    draggingFiles = event.dataTransfer.types.contains(‘Files’);<br>}<br>
````  
`

|

### DataTransfer.files

All browsers have an event.data.transfer. files property, but it is only filled for drop events and has a length of 0 during dragenter/dragover/dragleave (or is null altogether).

### jQuery and drag & drop events

When jQuery is used for adding the event handler, the DataTransfer object might not be carried over to the jQuery-created event, but is still accessible via the browser event stored as originalEvent:

| 

```
function dragEventHandler(event) {<br>    var dataTransfer = event.dataTransfer || (event.originalEvent && event.originalEvent.dataTransfer);<br>    // … other code …<br>}<br>$(‘body’).on(‘dragenter dragover dragleave’, dragEventHandler);<br>
````  
`

|

### Using instanceof for events

Unlike all other tested browsers, Safari uses MouseEvent instead of DragEvent.

\*\*  
\*\*

| 

```
Unlike all other tested browsers, Safari uses MouseEvent instead of DragEvent.<br>function handleAllEvents(event) {<br>    if (event instanceof DragEvent) {<br>        handleDragEvent(event); // not called in Safari<br>    } else {<br>        // …<br>    }<br>}<br>
````  
`

|

2\. Design a new interface for [Infragram.org](http://Infragram.org) which is full screen with a toolbar, solicit and incorporate input from the user community

Mockup Design for the front page of I[nfragram](http://infragra.org)

Navbar
  - Navbar contains Home, Gallery, and FAQ
  - On click on FAQ, it will redirect it to the next page (Q/A previously)
  - Gallery will take to the images posted by other users.

General Buttons
  - Start Now Button will take to the actual analysis tool.
  - Learn more will take you to the just below section "What is Infragram"
  - View more will load more images.

![](https://lh4.googleusercontent.com/ylH4d-eU1NrPASHaV4_ytQdXnWdvGXFQFiUlyBAJ5mJT7cc-AxrJIvAjQqTGwqgJya7b2vx7FXTWFhrebe6cQdiSs3isnYFcUpKynX5j5gvVSm8Pq7yT4um3FI7UqD8eWsZsmAOH)

![](https://lh3.googleusercontent.com/KJwTme03RAbRJcOzWL7otVVIe8Jf4C7sNIJhPMfD0cnFwFOlqAgQKgkno9fXbUEZ5BsAxrXrG6mTmjl74psyAAHHBXhN_zzLOPZ5thTord5l_sFGHJPmlK3thaBuTJDRIO6MpgGV)

Mockup design for the infragram tool page

Navbar
  - Home Page will take back to above page
  - Gallery Button will take you to images posted by happy infragram users :P
  - FAQ will take you to next page opening all the questions asked by users and they will be sorted according to popular questions and most recent questions.
  - Full Screen: It will enable you to use it tool on full screen.
  - Upon clicking on the full screen we can make the header or navbar disappear for the edge-to-edge web app.

Tools Area
  - Presets opens the Quickstart menu
  - Analysis gives you all the flexibility to choose how to analyze your image through the drop-down menu
  - Colorise gives you the option to choose the colormap

Drop Down Area
  - Users can Drag and drop their image and video here
  - On Clicking on any place in the drag and drop area user can browse image/video from the system
  - Connect to infragram webcam will open webcam to capture the image
  - By clicking on the drop-down button beside the camera icon it will open the resolution size in which you want to capture the photo through webcam.
  - The upload area is made larger so that we can utilise the use all the pixels we can on the screen
  - A full-screen edge-to-edge app, vertically and horizontally.

Bottom Area
  - Save will save your image in your public lab account
  - The download will download your image to your device
  - The export will support exporting your image into different formats
  - All these save, download export buttons are at the button and drag and drop section in the middle so that when you've selected an image, you don't need to see that prompt anymore! That'll save space and keep the remaining tools simpler as well

![](https://lh6.googleusercontent.com/mM99jMLm0v1MeN1Hs4lkx7T20nB13h1iTe2Gog4JK19l8a4ZsOuOddErdi-IlP_h96Lev66m7pTr9m5QDQKnDUbDVpiQ5TuHum2jC3EymmhF6i_tWCa1VzZhBdrKmNwvzCtQ0ABX) Desktop View [(Enlarged Image)](https://photos.app.goo.gl/zUBkCxJFjQn5TgVZ8)

'

Mobile View [(Enlarged Image)](https://photos.app.goo.gl/UxKsE5tgHM76QZBE9)

![](https://lh5.googleusercontent.com/pCl523gzqIhPXNq5uKn7VAQw4q5NTpynX0tpNYhibi4suUdQpnfEe8dz9iGovHLk6IgWEfoHWjtF9fEL9KTN7R1Hn3Z7uyFa2KvxB2YifWQmd8jPDw2DjnVwxV9pgKJlZ76f1P8e)

3 . Move the Q&A feature into a Help menu
  - Q&A Section is named as FAQ
  - It has been moved to Help menu
  - Reffer the above UI mockups for visualization

4\. Add a popup "Welcome" modal box which guides your first few steps
  - Bootstrap Tour will help us to make the Welcome tour of our Site
  - File Name : /[infragram](https://github.com/publiclab/infragram)/[src](https://github.com/publiclab/infragram/tree/main/src)/ui/tour.js

| 

```
// Instance the tour<br>var tour = new Tour({<br>  steps: [<br>  {<br>    element: “#my-element”,<br>    title: “Welcome to Infragra Tour”,<br>    content: “Infragram is an online tool for analyzing plant health with near-infrared       imagery”<br>  },<br>  {<br>    element: “#my-other-element”,<br>    title: “Title of my step”,<br>    content: “Content of my step”<br>  }<br>]});<br><br>// Initialize the tour<br>tour.init();<br><br>// Start the tour<br>tour.start();<br>
````  
`

|

![](https://lh5.googleusercontent.com/QWMcx4MrRi8qOnhd909QWGBcpyEGRgfo6tTUqIqoGqP68dGcjQXh08d50dzv3cAnz0RvkqAViRPOkdsCqtTqD2txAtmaE2ev_fL-7DmFJC9mOw07MvVgQUsRqmdxgApdlkykEzwN)

**

5\. Integrate new cross-platform WebRTC video library for Safari iOS support:

|**

```
module.exports = function Camera(options) {<br>  var canvas, <br>      ctx;<br><br>  // Initialize getUserMedia with options<br>  function initialize() {<br>    getUserMedia(webRtcOptions, success, deviceError);<br><br>    // iOS Safari 11 compatibility: [https://github.com/webrtc/adapter/issues/685](https://github.com/webrtc/adapter/issues/685)<br>    webRtcOptions.videoEl.setAttribute(‘autoplay’, ‘autoplay’);<br>    webRtcOptions.videoEl.setAttribute(‘playsinline’, ‘playsinline’);<br><br>    window.webcam = webRtcOptions; // this is weird but maybe used for flash fallback?<br>    canvas = options.canvas || document.getElementById(“image”);<br>    ctx = canvas.getContext(“2d”);<br>    // Trigger a snapshot w/ button<br>    // – move this to interface.js?<br>    $("#snapshot").show();<br>    $("#live-video").show();<br>    $("#webcam").show();<br>  }<br>
````  
`  
  

|

6\. Accept multiple resolutions of video

File name :infragram/src/util/getUserMedia.js
  - Different Resolution Sizes that we will be accepting

| 

```
<p></p><p><span>// Resulotion Map</span><span><br></span><span>// Map resolution option name to value</span><span><br></span><span>const</span><span> resolutionMap ={</span><span><br></span><span> </span><span>“1080p”</span><span>: { width: </span><span>1920</span><span>, height: </span><span>1080</span><span>},</span></p><p><span>&nbsp;“720p”</span><span>: { width: </span><span>1080</span><span>, height: </span><span>720</span><span> },</span><span><br></span><span> </span><span>“480p”</span><span>: { width: </span><span>854</span><span>, height: </span><span>480</span><span> },</span><span><br></span><span> </span><span>“360p”</span><span>: { width: </span><span>640</span><span>, height: </span><span>360</span><span> },</span><span><br></span><span> </span><span>“240p”</span><span>: { width: </span><span>426</span><span>, height: </span><span>240</span><span> }</span><span><br></span><span>&nbsp; }<br></span></p>
````  
`

|

\*\*

\*\*
  - Accessing the webcam and connecting to it

| 

```
Sw.getuserMedia = function(options) {<br> Adapter JS.webRTCReady ( () => {<br>   // The WebRTC API is ready.<br>   const container = document.getElementById(‘webcam’),<br>          video = document.createElement(‘video’);<br>    container.appendChild(video);<br>   video.autoplay = true;<br>    [video.id](http://video.id) = ‘webcam-video’<br>   const successCallback = stream => {<br>      $(’#heightIndicator’).show()<br>      $(’#webcam-msg’).hide()<br>      attachMediastream(video, stream)<br>      if ($w.flipped == true) {<br>        Sw.flipped = false; // <= turn it false because f_h() will toggle it. messy.<br>        $w.flip_horizontal();<br>      }<br>    };<br>   const errorCallback = () => console.warn(error);<br>    getuserMedia($w.defaultConstraints, successCallback, errorCallback);<br>  });<br>};<br>
````<= turn it false because f_h() will toggle it. messy.  
`

|

  - Changing the resolution according to the user

| 

```
<p></p><p><span>$w. updateResolution = </span><span>function</span><span>(resolution) {</span><span><br></span><span> </span><span>const</span><span> width = resolutionMap</span></p><div class="powertags">Power tag: resolution</div>.width,<br>      height = resolutionMap<div class="powertags">Power tag: resolution</div>.height;<br> const constraints = {<br>   …Sw.defaultconstraints,<br>   video: {<br>    … $w.defaultConstraints.video,<br>     width: { min: width },<br>     height: { min: height }<br>   }<br> };<br>
````  
`

|

7\. Allow drag and drop of a video, which will play on loop and have controls to scroll through, pause, etc.
  - Show the video on browser and render thumbnail
  - Plays the video on load

| 

|

  - To play video on loop

| 

|

8\. Allow conversion of the whole video by recording from the canvas

Approach
  - Define a Blink side interface which exposes the current canvas frame's pixel data to Chrome
  - Modify HTMLCanvasElement to implement the said interface
  - Add content/.../CanvasCaptureHandler in Chrome that reads pixel data via the said interface and converts it into a Chrome-friendly video frame
  - Add HTMLCanvasElement::captureStream() method to create a MediaStream by bringing these elements together
  - Make sure that MediaStream follows the same origin restrictions as other canvas access methods
  - Handle cases: captureStream(), captureStream(frameRate), captureStream(0)
  - Create a JS & WebRTC demo
  - Implement the additional CanvasCaptureMediaStream interface on Blink
  - Provide requestFrame() method that pushes a single video frame to the stream
  - Create additional JS & WebRTC demos

\*\*

\*\*

| 

  
|

  - Create a MediaStream object from your canvas.

| 

var videoStream = canvas.captureStream(30);   
// the parameter is the desired framerate  
// if you want to manually trigger the frames, that can be useful if you struggle to create a real-time animation:  
  

```
var videoStream = canvas.captureStream(0);<br>// and then every time you want to capture a frame (in your render loop for example):<br>videoStream.getVideoTracks()[0].requestFrame();<br>
````  
`

|

  - Create a [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) object:

| 

```
var mediaRecorder = new MediaRecorder(videoStream);
`````

|

  - Store the available data returned by this MediaRecorder object:

| 

```
var chunks = [];<br>mediaRecorder.ondataavailable = function(e) {<br> chunks.push(e.data);<br>};<br>
````  
`

|

  - Convert it into a video when we finished the recording:

| 

```
<p></p><p><span>mediaRecorder.onstop = </span><span>function</span><span>(e) {</span><span><br></span><span>var</span><span> blob = </span><span>new</span><span> Blob(chunks, { </span><span>‘type’</span><span> : </span><span>‘video/mp4’</span><span> });&nbsp;</span></p><p><span>// other types are available such as ‘video/webm’ for instance, see the doc for more info</span><span><br></span><span> chunks = [];</span><span><br></span><span> </span><span>var</span><span> videoURL = URL.createObjectURL(blob);</span><span><br></span><span> video.src = videoURL;</span><span><br></span><span>};<br></span></p>
````  
`

|

  - To start and stop the recording, just use the following functions:

| 

```
mediaRecorder.start();<br>mediaRecorder.stop();<br>
````  
`

|

9\. Allow selecting multiple output resolutions as well

![](https://lh6.googleusercontent.com/zfRu1dDWayyICPuQJTS9wsMoBoLqSRLqi_CMG7VF0Z45moDwn-uVQBBIircJxmeA-fPkB0ewEx583P6lZ3YLd_n_7OiDh9eFw1O2uYym8S3DlkCCKgRf7NVNQf5Cb6bANbHXFNED)

User will be allowed to select the webcam resolution

How do you think we should determine what the available resolutions are from an incoming video feed?

File name :infragram/src/util/resolutionScan .js

Approach :
  - Find & list camera devices on load
  - Call gUM early to force user gesture and allow device enumeration
  - Localhost unsecure http connections are allowed
  - Show text of what res's are used on QuickScan
  - Start scan by controlling the quick and full scan buttons
  - If there is device enumeration run through the deviceList to see what is selected
  - Make sure there is at least 1 camera selected before starting
  - If no device enumeration doesn't pass a Camera ID
  - Calls getUserMedia for a given camera and constraints
  - Kill any running streams
  - Change the video dimensions
  - Save results to the candidate so

| 

//Start scan by controlling the quick and full scan buttons  
$('button').click(function(){  
  
//setup for a quick scan using the hand-built quickScan object  
if (this.innerHTML === "Quick Scan") {  
console.log("Quick scan");  
tests = quickScan;  
}  
//setup for a full scan and build scan object based on inputs  
else if (this.innerHTML === "Full Scan") {  
let highRes = $('#hiRes').val();  
let lowRes = $('#loRes').val();  
console.log("Full scan from " + lowRes + " to " + highRes);  
tests = createAllResolutions(parseInt(lowRes), parseInt(highRes));  
}  
else {  
return  
}  
  
scanning = true;  
$('button').prop("disabled", true);  
$('table').show();  
$('#jump').show();  
  
//if there is device enumeration  
if (devices) {  
  
//run through the deviceList to see what is selected  
for (let deviceCount = 0, d = 0; d < deviceList.length; d++) {  
if (deviceList[d]
.selected) {  
//if it is selected, check the label against the getSources array to select the proper ID  
for (let z = 0; z < devices.length; z++) {  
if (devices[z]
.value === deviceList\[d\].value) {  
  
//just pass along the id and label  
let camera = {};  
[camera.id](http://camera.id) = devices[z]
.value;  
camera.label = devices[z]
.text;  
selectedCamera[deviceCount]
= camera;  
console.log(selectedCamera[deviceCount]
.label + "\[" + selectedCamera[deviceCount]
.id + "\] selected");  
deviceCount++;  
}  
}  
}  
}  
  
//Make sure there is at least 1 camera selected before starting  
if (selectedCamera\[0\]) {  
gum(tests[r]
, selectedCamera\[0\]);  
}  
else {  
console.log("No camera selected. Defaulting to " + deviceList\[0\].text);  
//$('button').prop("disabled",false);  
  
selectedCamera\[0\] = {id: deviceList\[0\].value, label: deviceList\[0\].text};  
gum(tests[r]
, selectedCamera\[0\]);  
  
}  
}  
//if no device enumeration don't pass a Camera ID  
else {  
selectedCamera\[0\] = {label: "Unknown"};  
gum(tests[r]
);  
}  
  
});

|

10 . Write UI tests for new Infragram UI, using Jest
  - Install Jest using yarn
  - Create test.js files with respect to all infragram UI modules.
  - Include test script in package.json file.
  - run yarn test on previously created test files.

11.Stretch goal: allow zooming/panning of video within canvas

Zooming consist of :
  - Zoom In
  - Zoom Out
  - Move Right
  - Move Left

| 

  
  
  
  
  
  
  
  
  
  
  
  
</html\>

|

### Timeline/milestones \*\*

Pre-GSoC Period - Till 20th May
  - Understanding the idea and getting doubts resolved as soon as possible.
  - Going through already available code, understanding it's working.
  - Solving already opened issues related to the project.
  - Writing some tests to head start.

Community Bonding (20 May 2022 - 12 June 2022)
  - Get familiar with the community and attend Public Lab open calls to get an idea of what needs to be done.
  - Discuss Project with mentors and brainstorm some ideas which could have multiple approaches.

Week 1 (12 June 2022 - 19 June 2022 )
  - Start working on cross-browser drag-and-drop on the entire page
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 2 (19 June 2022 - 25 June 2022)
  - Work on implementing a new interface (using [Bootstrap 4](https://getbootstrap.com/docs/4.6/)) for [Infragram.org](http://infragram.org/) which is full screen.
  - Make refinements to the toolbar, solicit and incorporate input from the user community.
  - Communicate with Outreachy participant.
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 3 (25 June 2022 - 30 June 2022)
  - Work on transferring the Q&A feature into a Help menu
  - Communicate with Outreachy participants.
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.
  - Attend PubicLab open call for feedback from the user community.

Week 4 (30 June 2022 - 6 July 2022)
  - Work on welcome modal and tooltip tutorial with Bootstrap tour.
  - Communicate with Outreachy participant.
  - Make corresponding UI changes.
  - Create FTOs whenever possible
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 5 (6 July 2022 - 13 July 2022)
  - Work on new cross-platform WebRTC video library for Safari iOS support
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 6 (13 July 2022 - 20 July 2022)
  - Work on accepting multiple resolutions of video.
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 7 (20 July 2022 - 25 July 2022)
  - Implement loop, pause, play, and sleek bar on canvas video (processing dropped video locally).
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 8 (26 July 2022 - 3 August 2022)
  - Work on converting the whole video by recording from the canvas.
  - Make corresponding UI changes.
  - Write Tests for the changes made.
  - Take feedback from mentors and improve.

Week 9 (3 August 2022 - 8 August 2022)
  - Allow zooming/panning of video within canvas
  - Work on UI tests for new Infragram UI.
  - Create FTOs for newcomers.
  - Write/modify documentation for the change made during the internship.

### Needs

Libraries :
  - grunt-tape
  - grunt-cli
  - grunt-contrib-concat
  - grunt-contrib-watch
  - grunt-contrib-jasmine
  - jasmine-jquery
  - matchdep
  - tape
  - Bootstrap
  - canvas

Other these libraries we will need a Safari browser to test features

Most important we'll require constant support, suggestions, and guidance from the mentors and all give feedback and suggestions for the PublicLab community also.

### First Time Contribution:
  - Comments, to show overall community involvement (like helping others):

![](https://lh6.googleusercontent.com/oOXdJcPkzFwOjQ9HgROjxXkpHU6wXg4u7ld52t7QEP54C-pGomuhEmbKsSytv5U_rvbgM9uETUF7fwEKg6umI2yyq4qHETAvcZIgTiM8HK3tOzjk1GUjq9nbsbCq3yxXdio0tadY)

![](https://lh6.googleusercontent.com/n17r853ad2t-ld6IUfceko8_-rDbTLLA7oEPYs8K708eBDyo7F7stX6WNZpsqk0P-Seeff_NCBE6hT1o67rhiB7B3d-3OuBFp7ToNvIkgwqVmJFguV7Gp9AR5fLvui2D_6oiQmeV)

And many more ...
  - Closed PRs: [https://github.com/publiclab/plots2/pull/11010](https://github.com/publiclab/plots2/pull/11010)

[https://github.com/publiclab/plots2/pull/11016](https://github.com/publiclab/plots2/pull/11016)

[https://github.com/publiclab/infragram/pull/349](https://github.com/publiclab/infragram/pull/349)

[https://github.com/publiclab/plots2/pull/11070](https://github.com/publiclab/plots2/pull/11070)

Merged: [https://github.com/publiclab/plots2/pull/11071](https://github.com/publiclab/plots2/pull/11071)

FTO Issue [https://github.com/publiclab/infragram/issues/created\_by/abhishekchauhan15](https://github.com/publiclab/infragram/issues/created_by/abhishekchauhan15)

[https://github.com/publiclab/plots2/issues/created\_by/abhishekchauhan15](https://github.com/publiclab/plots2/issues/created_by/abhishekchauhan15)

---------

### Experience

\*\*  
\*\*

Since my first year at college, I have been exposed to many languages and tools because of the guidance of community people, from the very beginning I have done Frontend development which included learning HTML, CSS, various CSS frameworks/ libraries like bootstrap, tailwind CSS, Material UI, Frontend frameworks like ReactJs.

I have also done backend so which includes learning NodeJs, ExpressJs and databases like MongoDB Firebase, and also know to use tools like GIT, GitHub, Postman

I have also taken various technical sessions in college like demonstrating the workflow of git and GitHub

Some of my Projects:
  - HackTest : [https://github.com/abhishekchauhan15/HackTest](https://github.com/abhishekchauhan15/HackTest)

• API that gives the feed of the latest contests and hackathons from different sites.

• Saved the latest contests and hackathons details into MongoDB

• Created an API Schemato to perform CRUD operations

• CRUD operations can be done if the user wants to operate
  - DJPKart:[https://github.com/abhishekchauhan15/DJPkart](https://github.com/abhishekchauhan15/DJPkart)

• Created an E-Commerce Store.

• Processed user input information, items, and a number of items in the local storage of the app to return a subtotal price

based on the items added to the cart.

• Added Carousel for latest Sales updates.

• Add to Cart + Add to Wishlist feature with the addition of review of the product option
  - DJPTourism:[https://github.com/abhishekchauhan15/djp-tourism](https://github.com/abhishekchauhan15/djp-tourism)

• Created a Web application for tourist for the purpose to visit INDIA.

• Added map and 360 view with help of google maps.

• Utilized the layout editor to create a UI for the application in order to allow different scenes to interact with the page.
  - Snake Mania: [https://github.com/abhishekchauhan15/Snake-Mania](https://github.com/abhishekchauhan15/Snake-Mania)

• Designed a snake game ([Must Try](https://ekgamingkatha.netlify.app/))

• Used local storage for the storage of the highest points.

---------

### Teamwork

Well because of my community involvement I'm privileged to show my leadership skills many times and at the same time be a good team member. I have worked with 2 teams at the same time (12 members each ). I have also done many projects in a team with the help of my community mates, schoolmates, and our college professors and this thing taught me only one thing "It's not about the journey it's about the people ".

Additionally, I have participated my many hackathons, open-source events, open-fests, and teamed up with various participants all across different parts of India, and have been awarded prizes in some of them

---------

### Passion

I really like how public labs tools help scientists and researchers to make this world a better place. You guys are solving real-world problems as HackTest API (one of my projects) does. I find PublicLab and my visions aligned.

\*\*  
\*\*

Secondly the community and mentors and amazing. I have in many places people sometimes do ask silly doubts and then also mentors reply to their questions very kindly.

\*\*  
\*\*

This kindness and visionary goals attract me more to work for the PublicLabs

### Audience

This project will ease the process of researchers and curious people alike who are involved with using Infragram as a platform to analyze their plant health to draw some meaningful insights out of their analysis. Furthermore, It will be an honor to implement added features that will make the Infragram experience more enjoyable and intuitive for all that use it.

### Commitment

I don't have a particular conflicting schedule during the period of GSoC so I can surely dedicate my time (40- 45 hr /week) to this project.

I can assure you that if I get selected to work with Public Lab this summer, I

definitely will try my level best to make this project successful and will love to continue

working with Public Lab's other projects even after the summer.

I would love to mentor in any other projects of Public Lab. Further, I would really love to work under such great mentors of Public Lab .

Also for some reasons, if I am not selected this year even then I'll try to contribute to this and

other projects as much as possible and retry again next year.

Looking forward to working with you.

Thanks And Regards

Abhishek Chauhan