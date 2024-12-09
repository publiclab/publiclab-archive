---
title: Outreachy proposal: Design a new full-screen user interface for Infragram.org
tagnames: software, proposal, lat:0, lon:0, outreachy, first-time-poster, zoom:3, outreachy-2022, outreachy-summer-2022
author: Thekachi
path: /notes/Thekachi/04-17-2022/outreachy-proposal-design-a-new-full-screen-user-interface-for-infragram-org.md
nid: 30447
uid: 792901

---

![](https://publiclab.org/public/system/images/photos/000/045/964/original/Screenshot_2022-04-17_at_12.02.05.png)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [Thekachi](../profile/Thekachi) April 17, 2022 11:21

April 17, 2022 11:21 | Tags: [software](../tag/software), [proposal](../tag/proposal), [lat:0](../tag/lat:0), [lon:0](../tag/lon:0), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:3](../tag/zoom:3), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

---------

## About me

Hi, i'm Onyekachi Okwuolisa.   
  
I'm a frontend developer who specializes in creating the interface and visual aspects of the web. I studied Chemical Engineering at the University of Michael Okpara. I grew with a keen interest and passion in the technology space on my first 'hello world' with HTML. Later on, I took courses to learn the fundamentals and also advance my knowledge of HTML, CSS, React, JavaScript, and its frameworks.   
  
Over the years, I have attained lots of experience being a frontend developer, creating, collaborating, and implementing web designs which have greatly improved my skill. I have done a few internships and I was part of GADS2020 (Google Andela Developer Scholarship) program as a Mobile Specialist, after the program, I got called back to be a Mentor for the next Cohort of GADS2021\. Being a mentor and a team lead exposes me to more collaboration and communication with peers, and multitasking. I'm open to learning new things and advancing more to become a full-stack developer.  
  
I love coding, and with an engineering mindset, I love solving problems. I'm a huge fan of making things work irrespective of how it is achieved. Outside coding, I'm a gamer and I hope to become a world-class chess player!.  
  

**Affiliation** \#100devs

**Location:** Lagos, Nigeria.

## Project description

Design a new full-screen user interface for [I](http://infragram.org/)[nfragram.org](https://infragram.org/)  
  
This project covers the aspect of creating and implementing a new full-screen design that makes the user interface more user-friendly, and accessible to newer features(like dragging in a recorded video instead of a still image for conversion and pop-up panels with Q&A, tips, tutorials, and more). and also improves the user experience for [infragram.org](https://infragram.org/).   

### Abstract/summary (<20 words): 

###   

### Design and implement a new full-screen user interface with new features for infragram.org

###   

### Problem Statement

Infragram is sure a great online tool that analyses plant health with near-infragram imagery. after going through the UI and design of the project I think there's a need for improvement in various aspects of the project which I've grouped into different phases and will elaborate more on.   
  
Firstly, The use of the same layout for both mobile and desktop. The design and font size for mobile is so tiny leaving the user to zoom in before reading through. Which isn't much a good UI and experience for mobile users. The Recent Images is so much in the main page, else we can have a different page styled perfectly for that. The infragram project needs an improved responsive main page and landing page that will create a good first impression on users, definitely help attract more and keep users to the specific service thereby increasing conversion rate and more leads.   
  
The overhaul UI for the sandbox page needs a total new full-screen design, and layout keeping in mind the existing functionality for both mobile and desktop devices usage, thereby creating more mobile traffic and providing a seamless user experience.   
  
Implement new functionality such as: accessibility guidelines are met throughout the page, and the drag and drop functionality to make it more interactive, and engaging.   
  

### Problem Solution

**Phase 1: Design and implement a new main and landing page.**  
  
1\. Making use of Boostrap: With the help of bootstrap4, we can achieve a lightweight and customizable webpage which is a more user-friendly framework that is consistent and supports major of all browsers and CSS compatibility fixes than the older version of bootstrap3\.   
  
2\. A Wireframe design: There's a need for a well-structured main webpage where users can easily scroll through and find all necessary concrete information regarding the project from its main URL. such as about page, how to use, and more. With a drag and drop functionality, file upload should also be on the main page.   
  
3\. Content on page: From what has been posted in PublicLab, we can get some adequate good filling content to be displayed in the webpage of infragram such as what is infragram, connecting to webcam and more. To which I added some dummy text into the wireframe which will be replaced with their actual write-up.  
  
4\. Responsiveness: Since we'll make use of bootstrap4 the webpage will be nicely responsive for all device screens. see below the image for the mobile view wireframe. included hamburger for mobile view.

  
![image description](/i/45810.jpg "on2onyekachi-inframgram-Page-1.jpg")

Link: [Main-page](https://github.com/on2onyekachi/infragram-mockup/blob/main/on2onyekachi-infragram-Page-1.drawio.svg)  
  
**Phase 2: Desing and implementing a new full-screen UI for infragram(sandbox page).**  
  
Improving and creating a new layout for newer features which include:  
1\. Creating a welcome Popup Modal: This modal box will simply guide the user with pieces of information on the basic actions and steps in using the infragram tool.  
  
2\. Improving Toolbar: As an improved design, the toolbar will cover all the necessary buttons such as the edit, download, share, settings, and delete. and will be represented with icons with tooltips. also, info icons will be included in the edit options for further information on each button. The setting button will consist of a video resolution format to pick on. 

  
3\. Implementing a full-screen Drag and Drop functionality for images,videos across different browsers: This will be achieved using the HTML drag and drop API mainly for the desktop mode. Improving the interaction with a camera with media API that accesses a device's native cameras. 

  
4\. Q&A moved to a help menu which can be displayed as a semi full-screen modal.   
  
![image description](/i/45812.jpg "on2onyekachi-infragram-Page-2.jpg")  
  
**Link: [page-2](https://github.com/on2onyekachi/infragram-mockup/blob/main/on2onyekachi-Page-2.drawio.svg) **

  
**Phase 3: Implementation of more functionality.**

**  
**This phase will consist of extra additional functionality to the project such as:  
1\. Save and Export button functionality.   
2\. Making sure accessibility guidelines are met throughout the page.

4\. Search functionality on the Q&A page.  
3\. Organise the HTML, CSS, and JavaScript files in the codebase, thereby removing reductant files.  
4\. Making sure all functionality for conversion still works perfectly. 

  
User flow process can be shown as. ![image description](/i/45884.jpg "on2onyekachi-Userflow.jpg")  

### 

---------

Timeline/milestones

---------

### PHASE 1: Design and Implementation of Main Page.

**Week 1:** Engage mentors, and colleagues, also familiarise myself with files and finalized UI that I will be working with and making changes to.  
  
**Week 2:** Work on Implementing the finalized UI design for infragram. Creating an index2.html file including a custom CSS file will help to override style. Setting up Bootstrap 4, and other dependable libraries locally on the Project. Implementing the design for the landing page, navbar, and other sections of the page with respective content.  
  
**Week 3:** More on implementing the finalized design on other sections of the page. Ensuring all buttons' active and hover states are consistent with other buttons on the page. More work on the navbar, dropdowns, and links are functional including smooth animations and flow.   
  
**Week 4:** More work on implementing the UI for responsiveness. Ensuring Mobile view has a well-defined font size and feel. file upload, drag and drop, integrating with a camera functions on the main page.  

### PHASE 2: Design the full-screen for the Sandbox page

**Week 5:** Work on Implementing the finalized UI for the Sandbox page. Creating a new file sandbox.html. Interaction between pages and links also, Ensures the structure and implementation are responsive to different screen sizes.   
  
**Week 6:** More on Implementing the finalized design including drag and drop functionality, a welcome popup modal, toolbar, quick start, and edit options buttons.   
  
**Week 7:** Implement the finalized UI for the Q&A, feedback popup modal. fix z-index and styling for different popup modals. Ensure file upload for images, and integration with the camera to capture images. Enable closing of any active popovers using the ESC button or by clicking on the page body.  
  
**Week 8:** Work on Implementing drag and drop for video files. Ensuring videos files are captured and are well converted/analyzed. Ensuring the video resolution buttons are effective for the video.  

### PHASE 3: Additional UI fixes

**Week 9:** Ensure all functionality still work across all edit(basic and advance), settings, save, and export buttons respectively on the image/video. Test for accessibility across all pages, and search functionality.  
  
**Week 10:** Review and resolve spacing, font style, content, animation, overlapping, and any other fixes on uncompleted tasks should there be any, and review with the mentors, colleagues, and all contributions so far. Make necessary updates if need be.  
  
**Week 11 and 12:** Test run on the new infragram for both mobile and desktop usage. Documentation for setup, installation, the technology used, changes made, challenges, and fixes.

### Needs

_If a professional uses Google. I'll surely need brainstorming sessions, assistance, guidance, and contributions from my mentors and colleagues to scale through this._  

### First-time contribution

First congratulation message working on publicLab/Infragram project. 

FTO issue: [https://github.com/publiclab/infragram/pull/267](https://github.com/publiclab/infragram/pull/267 "https://github.com/publiclab/infragram/pull/267") (closed PR)

Other contribution to mention such as reviewing Pull Request, created more FTO for first-timers:

[https://github.com/publiclab/community-toolbox/pull/551](https://github.com/publiclab/community-toolbox/pull/551) (Closed PR)  

[https://github.com/publiclab/plots2/issues/10962](https://github.com/publiclab/plots2/issues/10962) (Open Issue)

[https://github.com/publiclab/community-toolbox/issues/550](https://github.com/publiclab/community-toolbox/issues/550) (Open Issue)

[https://github.com/publiclab/community-toolbox/issues/548](https://github.com/publiclab/community-toolbox/issues/548) (Open Isue)

[https://github.com/publiclab/plots2/issues/10973](https://github.com/publiclab/plots2/issues/10973) (Open Issue)

[https://github.com/publiclab/infragram/issues/286](https://github.com/publiclab/infragram/issues/286) (Open Issue)

[https://github.com/publiclab/mapknitter/pull/1657#discussion\_r851615003](https://github.com/publiclab/mapknitter/pull/1657#discussion_r851615003) (Review Contribtubion)

---------

### Experience

_I have been a frontend developer since 2020 and have exposed myself to advance more as a frontend developer. Over the years I have learned greatly by reviewing people's code, making necessary changes, and implementing what I learned into a different project. This has been the best process I used in advancing my knowledge and skill as a developer. To this, I have had more experience in using HTML5, CSS, CSS preprocessor (Sass, Less), Git, Bootsrap, SemanticUi, React, Javascript, and its frameworks, JQuery. And some others which I'm less familiar with are Node.js, Espress.js, and MySQL.  
  
Some project which I did includes:_  

__

1. _Weather PWA~ Source Code:  [https://github.com/on2onyekachi/Weather-PWA](https://github.com/on2onyekachi/Weather-PWA "https://github.com/on2onyekachi/Weather-PWA") with the live link: [https://weather-app-fb0dc.web.app/](https://weather-app-fb0dc.web.app/) _
2. _Moonlighter: ~ Source Code:  __[https://github.com/Saucecode-Hackathon-Moonlight-Group/moonlight](https://github.com/Saucecode-Hackathon-Moonlight-Group/moonlight "https://github.com/Saucecode-Hackathon-Moonlight-Group/moonlight") with the live link: [https://moonlighter.netlify.app/](https://moonlighter.netlify.app/ "https://moonlighter.netlify.app/")_
3. Portfolio ~ Source Code: [https://github.com/on2onyekachi/on2onyekachi](https://github.com/on2onyekachi/on2onyekachi "https://github.com/on2onyekachi/on2onyekachi") With the Live Link: [https://on2onyekachi.netlify.app/](https://on2onyekachi.netlify.app/)
4. Soko ~ Source Code: [https://github.com/on2onyekachi/soko-homepage](https://github.com/on2onyekachi/soko-homepage) with the live link: [https://main--soko-alagee.netlify.app/](https://main--soko-alagee.netlify.app/)

---------

### Teamwork

_Teamwork is something that has brought me this far. I have been a team leader for a "SauceCode" hackathon group which truly improved my coding skill, working together with developers who are fast-growing and committed. Most especially it helped me improve my soft skill, having to communicate and brainstorm regularly which also involves time management to meet goals._

---------

### Passion

_Contributing to open source has been something I really want to engage myself in, having come across the "Infragram project" from PublicLab as an open community that collaboratively provides and develops accessible, open-source, do-it-yourself technology for investigating local environmental justice challenges. I needed to be part of this so that I'll get the maximum help needed, so my dream to contribute to tons of projects that a lot of people will use, hence helping lives positively as a developer will be achieved._

### Audience

  
_Nowadays, technology is growing rapidly and vast which lot of people spend the most time using the net going about their day to day activities. As a frontend developer, I intend to create seamless usage and feel for all, creating more user-friendly web apps and pages with newer technology._

_  
_

### Commitment

_I do understand the commitment associated with the program which i signed up for._ I'm willing to contribute full-time to the project as the proposed schedule for Outreachy Internship for 2022(May - August) being perfectly in-line and matches my availability.