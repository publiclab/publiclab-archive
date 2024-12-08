---
title: GSoC 2022 proposal: Inragram.org full-screen UI and video upload
tagnames: software, gsoc, soc, first-time-poster, zoom:6, gsoc-2022, gsoc-2022-proposals, lat:4.1492, lon:9.294433, soc-2022, soc-2022-proposal, soc-2022-proposals, gsoc-2022-proposal
author: forcha
path: /notes/forcha/04-05-2022/gsoc-proposal-full-screen-ui-and-video-upload.md
nid: 30254
uid: 791076

---

# GSoC 2022 proposal: Inragram.org full-screen UI and video upload

by [forcha](../profile/forcha) April 05, 2022 09:48

April 05, 2022 09:48 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [gsoc-2022](../tag/gsoc-2022), [gsoc-2022-proposals](../tag/gsoc-2022-proposals), [lat:4.1492](../tag/lat:4.1492), [lon:9.294433](../tag/lon:9.294433), [soc-2022](../tag/soc-2022), [soc-2022-proposal](../tag/soc-2022-proposal), [soc-2022-proposals](../tag/soc-2022-proposals), [gsoc-2022-proposal](../tag/gsoc-2022-proposal)

## About me

Name : Forcha Pearl Fri

Personal Email : [forchapearl1@gmail.com](mailto:forchapearl1@gmail.com)

Github : [https://github.com/Forchapeatl](https://github.com/Forchapeatl)

Gitter Handle : [forchapeatl](https://gitter.im/forchapeatl)

Affiliation University of Buea, Faculty of Engineering and Technology.

**Location:** Buea, Cameroon

Timezone: West African Time (UTC+1)

## Project description

This project aims at improving the User Interface at [Infragram.org](http://Infragram.org) by fixing some known bugs and implementing various features like cross-browser drag-and-drop, Full Screen mode enhancement, Video NDVI analysis, and some UI improvements.

Abstract/summary (<20 words):

### Problem

_What problem(s) does your project solve?_

After doing some research in the current Infragram UI I concluded some of the following problems.

1. **No option to close WebCam input**: There is no available option to turn off the Infragram Web Camera. _This overloads the internal buffer memory and may cause a time lag between reading and releasing the input feed.![image description](https://user-images.githubusercontent.com/24577149/157638941-8f984ec8-fa5b-4647-90e6-fa7aacae01e6.png)_
2. **Front Camera does not mirror**: \_ The video stream of the front camera is not filpped , this causes a lot of confusion as most users are versed with the mirror feel of a front camera.![image description](/i/45612.png "157654718-95310b6f-3dc0-41da-a3c3-b1039910e10b.png")
3. **No image/video file filters on Infragram's file input**: This leads user uncertainty to the functionality of the infrared analysis. ![image description](/i/45613.jpg "imgpture.JPG")
4. **The full screen icon is made invisible** whenever an image is set for analysis. This makes it difficult to identify the button required for full screen mode. ![image description](/i/45614.jpg "infrapture.JPG")
5. **No functionality is provided to** **exit the Infragram full screen display**. This makes the interface suboptimal and reduces user engagement.
6. **Absence of images to help people** **chose the right filter** to assist users in choosing the right image on the presets modal. In regards to this [Issue #226 ](https://github.com/publiclab/infragram/issues/226) ![image description](https://user-images.githubusercontent.com/24359/158415823-4c9ae0b0-0ad0-4ee0-9fa9-7048f390034a.png)

### Project Goals\*\*

**1\. Implement Cross-browser drag-and-drop**

![image description](https://user-images.githubusercontent.com/24577149/166470603-aaee0bc5-c7a3-40d0-85ab-87628dce9e4e.png)


**infragram/src/file-upload.js**

<script src="https://gist.github.com/Forchapeatl/9c44484fe4136d73748d7259e165e02a.js"></script>

- Define the drop zone (The target element for the file drop): I will include the HTML "ondrop" and "ondragover" attributes to the desired element.
- Use Boostrap CSS library to style our dropdown element.
- Define JavaScript events to handle file the dragover and file drop processes.
- Define events to pass the dropped file to our infragram canvas for Analysis.

**2\. Implement a new interface (using [Bootstrap 4](https://getbootstrap.com/docs/4.6/)) which is full screen with a toolbar, solicit and incorporate user input.**

- Install Boostrap and Uninstall Boostrap 3

**infragram/package.json**

<script src="https://gist.github.com/Forchapeatl/f1fe14322570a46d46b2503ccbd81517.js"></script>

- Identify parent element containing the toolbar and the canvas.
- Replace full screen icon transparent background with color (solution to problem 4).
- Check which FullScreen method is available on browser.
- Create a function to enter and exit fullscreen mode when ever requested.
- Assign the FullScreen mode function to the identified parent div Element.

**infragram/src/fullscreen.js**

<script src="https://gist.github.com/Forchapeatl/59ecfeaca26408843b10d4e2fd7fa51d.js"></script>

**3\. Add Welcome modal and tooltip tutorial with Bootstrap tour API**

![image description](/i/45637.jpg "tour.JPG")

**infragram/index.html**

<script src="https://gist.github.com/Forchapeatl/978e9ecb1aceb6b2f627b277aceee4fd.js"></script>

- Identify all HTML elements necessary for the walk through guide.
- Write messages describing the functionality of each element.
- Set up Bootstrap tour steps with identified HTML elements and their corresponding messages.

**3.1\. Transfer Q&A Section to help menu**

<script src="https://gist.github.com/Forchapeatl/8d1f32ef2a1c5dc4f680a1af19629e6f.js"></script>

**4\. Integrate new cross-platform WebRTC latest camera selection API from getUserMedia.**

**infragram/src/io/camera.js**

<script src="https://gist.github.com/Forchapeatl/0e3a9c373a0891088210efbe2a6f603e.js"></script>

- Check for mediaDevices API Device Support.
- Request permission to make use of the media input devices.
- Let the user choose from their available list of video devices in HTML option tag by calling the enumerateDevices method of WebRTC.
- Display the Video Stream on the Browser.
- Flip video stream alignment to mirror object when front camera is selected.(Solution to case 2).

**5\. Accept multiple video resolutions**
![image description][3]

.![image description](/i/45638.jpg "CamRes.JPG")

**infragram/src/io/camera.js**

<script src="https://gist.github.com/Forchapeatl/6ca8c389f0c84bace612db6c5645320e.js"></script>

- Specify video heights and Widths on MediaStream Constraints.
- Implement Boostrap style on HTML select tag to handle objects returned from MeadiaStream enumerate device method.

**6\. Perform Video analysis on browser.**

- Create hidden video element on Infragram page.
- Allow file input type to accept only image and video files (Solution to problem 3)
- Load the dropped video file into our HTML video element.
- Match the dropped video to fit the size infragram Canvas element.
- Create and Design Play and Pause buttons to overlay on infragram Canvas.
- Attach Designed buttons to play and pause events of our video element.
- Hide and display play / pause upon selection of image or video file.

---------

**7\. Allow conversion of the whole video (WebGL video manipulation).**

![image description](/i/45652.png "canvaspx.png")

**infragram/src/processors/javascript.js**

<script src="https://gist.github.com/Forchapeatl/42250b12745d9deaa2232767a14c4591.js"></script>

- Allow conversion of the whole video.
- Grab hold of the video and canvas elements.
- Grab the canvas's webgl-context so I can draw on it.\*\*
- Attach draw function to the "play" event on the video element.
- Draw the current frame of the video directly onto the infragram canvas.
- Capture canvas each animation and store in a chunk array.
- Construct a blob from our array when recording stops ( video ends ).
- Create second a video element.
- Create URL from second video element and pass to the source of our second vide element.

\*\*

**8\. select multiple output resolutions.**

**9\. **Write UI tests for new Infragram UI, using Jest.****

- Install Jest using yarn
- Create test.js files with respect to all infragram UI modules.
- Include test script in package.json file.
- run yarn test on previously created test files.


**10\. Refine Infragram presets modal.**

![image description](https://user-images.githubusercontent.com/24577149/162645685-7e6275e5-f625-411c-b7c0-395aa6615c85.gif)

<script src="https://gist.github.com/Forchapeatl/0a7a2528f7ab1c3fc9faf46e82147018.js"></script>

**11\. Allow zooming/panning of video within canvas**

- Define mouse and touch events required for Zooming/panning`
- Grab the current context of Canvas element.
- Set Context.scale to enable zooming on Canvas.
- Set Context.translate to create our panning effect...

### Timeline/milestones [](https://publiclab.org/notes/YogeshSharma01/04-04-2021/gsoc-proposal#Timeline/milestones)\*\*

### 

Pre-GSoC Period - Till 20th May

- Understanding the idea and getting doubts resolved as soon as possible.
- Going through already available code, understanding its working.
- Solving already opened issues related to the project.
- Writing some tests to head start.

Community Bonding (20 May, 2022 - 12 June, 2022)

- Get familiar with the community and attend Public Lab open calls to get an idea what needs to be done.
- Discuss Project with mentors and brainstorm some ideas which could have multiple approaches.

Week 1 (12 June, 2022 - 19 June, 2022 )

- Start working on cross-browser drag-and-drop on the entire page
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 2 (19 June, 2022 - 25 June, 2022)

- Work on implementing a new interface (using [Bootstrap 4](https://getbootstrap.com/docs/4.6/)) for [Infragram.org](http://Infragram.org) which is full screen.
- Make refinements to the toolbar, solicit and incorporate input from user community.
- Communicate with Outreachy participant.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 3 (25 June, 2022 - 30 June, 2022)

- Work on transferring Q&A feature into a Help menu
- Communicate with Outreachy participant.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.
- Attend PubicLab open call for feedback from the user community.

Week 4 (30 June, 2022 - 6 July, 2022)

- Work on welcome modal and tooltip tutorial with Bootstrap tour.
- Communicate with Outreachy participant.
- Make corresponding UI changes.
- Create FTO's whenever possible
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 5 (6 July, 2022 - 13 July, 2022)

- Work on new cross-platform WebRTC video library for Safari iOS support
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 6 (13 July, 2022 - 20 July, 2022)

- Work on accepting multiple resolutions of video.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 7 (20 July, 2022 - 25 July, 2022)

- Implement loop, pause, play and sleek bar on canvas video (processing dropped video locally).
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 8 (26 July, 2022 - 3 August, 2022)

- Work on converting the whole video by recording from the canvas.
- Make corresponding UI changes.
- Write Tests for the changes made.
- Take feedback from mentors and improve.

Week 9 (3 August 2022 - 8 August, 2022)

- Work on UI tests for new Infragram UI.
- Create FTO's for newcomers.
- Write/modify documentations for the change made during internship.

See this page for guidance on breaking your plan up into small, self-contained parts: [https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration](https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration)

### Needs

_I will need guidance from my counselors. suggestions or feedback from all members of the PublicLab will be positive and will help me build, complete my project and contribute to the community._

### Public Lab contributions

- Comments, to show overall community involvement (like helping others): [Search \* commenter:Forchapeatl org:publiclab (github.com)](https://github.com/publiclab/plots2/issues?q=commenter:forchapeatl)
- Open issues: [Issues \* publiclab/plots2 (github.com)](https://github.com/publiclab/plots2/issues?q=is:issue%20author:forchapeatl)
- Closed PRs: [Pull requests \* publiclab/plots2 (github.com)](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3AForchapeatl+is%3Aclosed+sort%3Acreated-asc)
- Open PRs: [open PRs Public lab] (https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3AForchapeatl+sort%3Acreated-asc+is%3Aopen)

---------

### Experience

I am currently a 6th-year student at University of Buea, Faculty of Engineering and Technology, Cameroon, and have been doing web development right from the second year of my college. I have worked on projects based on JavaScript, React, and Ruby.

---------

### Teamwork

Well Regarding Public Lab, I have gained a lot of experience and guidance from every member of the PublicLab especially @mathildaudufo and Working in Public Lab has been a great journey for me till now and I hope the same for the future as well.

---------

### Passion

My friends and I are currently working on a water sanitary evaluation project. Infragram made us realize that the using infrared to calculate the NDVI of the vegetation surrounding each water source, we would have an estimate to the degree of pollution to that water source . With knowledge of of how well the vegetation appears, we can mark a water source as pure or harmful. Not only has this project brought us insight , it has also improved my heath as I now only consume vegetables based on their Infragram analysis.

### Audience

_This_ project will ease the process of researchers and curious people alike who are involved with using Infragram as a platform to analyse their plant health to draw some meaningful insights out of their analysis. Furthermore, It will be an honor to implement added
features which will make the Infragram experience more enjoyable and intuitive for
all that use it.

### Commitment

I don't have particular conflicting schedule in the
period of GSoC and I can work full-time.

  [1]: https://user-images.githubusercontent.com/24577149/166470603-aaee0bc5-c7a3-40d0-85ab-87628dce9e4e.png
  [2]: https://user-images.githubusercontent.com/24577149/166470603-aaee0bc5-c7a3-40d0-85ab-87628dce9e4e.png
  [3]: /i/46508.png "multipleRes.png"