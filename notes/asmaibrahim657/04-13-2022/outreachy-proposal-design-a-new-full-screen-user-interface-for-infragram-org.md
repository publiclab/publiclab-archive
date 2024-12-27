---
title: "Outreachy proposal: Design a new full-screen user interface for Infragram.org"

tagnames: 'software, outreachy, first-time-poster, zoom:6, lon:74.355468, outreachy-2022, outreachy-summer-2022, lat:31.522361'
author: asmaibrahim657
path: /notes/asmaibrahim657/04-13-2022/outreachy-proposal-design-a-new-full-screen-user-interface-for-infragram-org.md
nid: 30356
uid: 793876

cids: 30006,30009,30016,30019,30059,30101

---

![](https://publiclab.org/public/system/images/photos/000/045/798/original/tres.jpg)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [asmaibrahim657](../../../profile/asmaibrahim657) | April 13, 2022 20:33

April 13, 2022 20:33 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [lon:74.355468](../tag/lon:74.355468), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022), [lat:31.522361](../tag/lat:31.522361)

----

## About me

I am Asma Butt, a Computer Science Student pursuing my bachelors degree from University of Engineering and Technology.I am a junior Mern Stack Developer have good knowledge of different technologies (Html,Css, Bootstrap,Reactjs,Nodejs,Expessjs and MongoDb).Im also interested in Ui/Ux ad graphic design work.I Love to explore new technologies and learning by [implementation.In](http://implementation.In) my free Time I love to do sketching and calligraphy.

_GitHub: [https://github.com/AsmaIbrahimButt](https://github.com/AsmaIbrahimButt)_

_Resume: [https://docs.google.com/document/d/1vEdffd6oCqc7GmX7XnasRBkrHIUz9xt4/edit?usp=sharing&ouid=109334027309420597980&rtpof=true&sd=true](https://docs.google.com/document/d/1vEdffd6oCqc7GmX7XnasRBkrHIUz9xt4/edit?usp=sharing&ouid=109334027309420597980&rtpof=true&sd=true)_

LinkedIn: [https://www.linkedin.com/in/asma-butt-4063a31a6/](https://www.linkedin.com/in/asma-butt-4063a31a6/)

Location: _Lahore, Pakistan_

Time zone: UTC+05:00

### Project Description:

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. [Infragram.org](http://Infragram.org) enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen and create space for new features like multiple resolutions of video, dragging in a recorded video instead of a still image for conversion, and pop up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

### Abstract/summary (<20 words):

Redesign the user interface of infragram to be full-screen and create a space for few new features like multiple resolutions of video, pop up panels with Q&A etc.

### Problem

_1.Header of the infragram is not disguisable from the toolbar and Alignment should be balanced._![image description](/i/46307.png "header.PNG")

The user interface of the header section is difficult to distinguish from toolbar. In addition of these the alignment in the toolbar section is not equally balanced from left and right side that probably annoying for a user to proceed further. The spacing between each components is not equally divided. There is lack of color theme consistency .

**Suggested Solution:**

![image description](/i/45800.png "headerss.PNG")

By improving the alignment among each components helps the user to easily proceed further. Make enough space between header and toolbar ,therefore, user can easily distinguishable it.

2\. Cross Browser drag and drop functionality:

I will implement the cross browser drag and drop implementation using Javascript and jquery.

I will used the HTML first which consists of two HTML DIV controls "_Source"_ and "_Destination"_. To the Source DIV I have added some images which eventually will be dragged and dropped to the Destination DIV.

Code Snippet:

![image description](/i/45858.png "firstsnimpet.PNG")

Drag and drop implementation using JavaScript &jQuery

The very first thing I have done is inheritance of the jQuery and the jQuery UI CSS and JS files.Inside the jQuery document ready event handler, I have applied the Draggable plugin to all the images inside the Source DIV so they can be dragged and [dropped.To](http://dropped.To) the Destination DIV I have applied the Droppable plugin so that it can accept the dropped images. As soon as the images are dropped they are appended to the DIV.I have added JavaScript alert boxes to notify users when the images are dropped successfully and when it is not successful if the images are dropped outside the Destination DIV.

Code snippet:

![image description](/i/45860.png "jquery.PNG")

3\. Rebuild the question answer section that can work as help menu.  
![&lt;h3 id=](/i/46237.jpg)

[4\. ](http://4.To "http://4.to/")To make responsive each section responsive I will used the bootstrap grid system therefore, It will responsive for each devices.

### Timeline/milestone

**Week 1( _May 30- Jun 4)_**

- Learn about the existing user interface of infragram
properly
- Communicate with the mentors
- Make sure to understand the complete workflow of
interface
- Understand the end goals
- Identify and clarify the all requirements using the methodology
of various use cases

**Week 2 (_Jun 5- Jun 11)_**

Make low fidelity wireframes of infrgram

\*
Getting solicit feedback from the community

\*
Note down the pain points after getting feedback from the user

\*
Ideate the solutions for the problems that user face

**Week 3 (_July 12- Jun18)_**

\*
Consider the feedback of the users or the community and make the
wireframe improve

\*
Add a cross browser drag-and-drop on the entire page instead of just
selecting an image

\*
Improve the useability

**Week 4 (_Jun 19- Jun 25)_**

\*
Move Q&A feature into a Help menu

\*
Make the help system design consistent so that user can easily identify
between help and simple flow of website.

\*
Design a complete help system on the other page so that user cannot
distract.

**Week 5 (_Jun 26- Jul 2)_**

\*
Add a popup "Welcome" modal box which guides your first few steps based
on tutorial at [https://publiclab.org/n/15075](https://publiclab.org/n/15075) and more at [https://publiclab.org/infragram#Activities](https://publiclab.org/infragram#Activities)

\*
Make effective popup so that user can proceed further easily

\*
Add Content in the popup relevant to the user intensions

\*
Make the mockups using icons,colors,fonts,and text

\*
Prototype the high fidelity wireframes

**Week 6 (_Jul 3-Jul 9)_**

\*
Try creating a working "mockup" interface with Bootstrap elements (that
is not hooked up to JS yet)

\*
Make the responsive for all devices

\*
Negotiating with community and the mentors

**Week 7 (_Jul 10-Jul 16)_**

\*
Iterate the mockups

\*
Getting user feedback and again iterate the design

\*
Consider the user reviews and try to implement those features in the
user interface using bootstrap4

**Week 8 (_Jul 17- Jul 23)_**

\*
Enhance the useability by designing the features that leads to the user
to its end goal easily

\*
Communicate with the mentors for guidance

\*
Make sure the user interface of the infragram display perfectly for all
devices

**Week 9 (_Jul 24- Jul 30)_**

\*
Communicate with the Google summer of Code Intern

\*
Implement the new interface in HTML/JS( cooperation with possible Google
Summer of Code intern on corresponding project)

\*
Begin with an "index2.html" next to the original index.html

**Week 10 (_Jul 31- Aug 6)_**

\*
Discussing the issues with the Google summer of Code intern and with the
mentors

\*
Resolve the issues while implementing the new interface in Html/css

**Week 11 (_Aug 7- Aug 13)_**

\*
Integrate the all features functionality

\*
Ensure each feature/function still works

\*
Resolving the errors or issue with the help of mentors

**Week 12 (_Aug 14- Aug 23)_**

\*
Make sure the structure of the files and folder be understandable

\*
Checking the all files indentation

\*
Make sure the code should be clean

**Week 13 (_Aug 24- Aug 30)_**

\* Stretch goal: design
a new colorize popup modal window to describe each colormap and offer
thumbnails (could use [https://sequencer.publiclab.org](https://sequencer.publiclab.org/) to achieve this)

\*\*\*\*Need:

Guidance from mentors and communication with the community members related to the project issues.

### First-time contribution

- Open issues: [https://github.com/publiclab/plots2/issues/10985](https://github.com/publiclab/plots2/issues/10985 "https://github.com/publiclab/plots2/issues/10985")
- Closed PRs: [https://github.com/publiclab/plots2/pull/10992#pullrequestreview-937312355](https://github.com/publiclab/plots2/pull/10992#pullrequestreview-937312355 "https://github.com/publiclab/plots2/pull/10992#pullrequestreview-937312355")
- [https://github.com/publiclab/plots2/issues/11025](https://github.com/publiclab/plots2/issues/11025)

---------

### Experience

I have working knowledge of all major programming languages including HTML, CSS, Bootstrap, JavaScript, Json, jQuery, AJAX, React, and Nodejs on MongoDb. Recently, I did my internship on reactjs at LGM. I am a creative and enthusiastic developer who is always eager to learn something new related to technology. I focus on the implementation of a variety of software solutions in addition to developing, modifying, and maintaining existing software.

I have developed the To Do app using reactjs

[https://github.com/AsmaIbrahimButt/Task1-LGMVIP-WEB-.git](https://github.com/AsmaIbrahimButt/Task1-LGMVIP-WEB-.git)

I have also design a grocery shop static template using Html,Css and bootstrap.

---------

### Teamwork

Im used to do Pair programming during my four years at university, I worked on semester term projects with allocated groups. We worked on a School Management Website, and I was in charge of designing the front-end and implementing using Html and bootstrap. Consistent communication between my teammates and me was critical to the project's success.

---------

### Passion

_Public Lab is a community where one can learn how to investigate environmental concerns using DIY techniques amongst other effective solutions, for me its a great opportunity to pursue my passion of designing by redesigning the user interface of infragram._

### Audience

_This work is for the Public Lab open network made up of community organizers, educators, technologists, researchers working to create spam management issue to make sure that details are actually true and confirmed, and open source contributors like myself trying to make the world a better place in our own way one code at a time_

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

Yes, I understand. I will commit my full time in this project and can spend at least 40 hours per week. I have great passion in coding and designing. I am willing to pay my efforts in making the user interface more easy to useable for the users.