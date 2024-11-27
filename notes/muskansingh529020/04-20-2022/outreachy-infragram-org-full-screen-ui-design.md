---
nid: 30538
title: Outreachy: Infragram.org full-screen UI design 
path: public/static/notes/muskansingh529020/04-20-2022/outreachy-infragram-org-full-screen-ui-design.md
uid: 795978
tagnames: outreachy,first-time-poster,outreachy-2022,outreachy-summer-2022
---

# Outreachy: Infragram.org full-screen UI design 

About Me

\*\*  
\*\*

- Name: Muskan Singh
- Personal Email: [muskansingh529020@gmail.com](mailto:muskansingh529020@gmail.com)
- Gitter handle: muskan2901
- Telephone: +91 9650529020
- Country of Residence: India
- Timezone: IST(Indian Standard Time)
- Typical Working Hours: 15:00-1900, 22:00-05:00(IST) 6:00-8:00,9:30-13:30,16:30-23:30 (UTC)
- Language: English
- Github: [https://github.com/muskan2901](https://github.com/muskan2901)

\*\*  
\*\*

Project Description

\*\*  
\*\*

The Infragram project is a compilation of various efforts to enable user to compare the health of their crops themself using infrared photography.This project aims at improving the User Interface at [Infragram.org](http://Infragram.org) by fixing some known bugs and implementing various features like cross-browser drag-and-drop, Full-Screen mode enhancement, and some UI improvements.

\*\*

\*\*

Abstract/Summary (<20 words)

\*\*  
\*\*

As Infragram is extremely helpful for everyone. We want to improve the collection of user interface/user experience (UI / UX) and related features on the platform to make it user friendly.

\*\*  
\*\*

Problem(s)

1. Allow cross-browser drag-and-drop on the entire page instead of just selecting an image.

Listening for dragging events #

There are a number of different events to attach to for monitoring the entire drag and drop process.

- [dragstart](https://developer.mozilla.org/docs/Web/API/Document/dragstart_event)
- [drag](https://developer.mozilla.org/docs/Web/API/Document/drag_event)
- [dragenter](https://developer.mozilla.org/docs/Web/API/Document/dragenter_event)
- [dragleave](https://developer.mozilla.org/docs/Web/API/Document/dragleave_event)
- [dragover](https://developer.mozilla.org/docs/Web/API/Document/dragover_event)
- [drop](https://developer.mozilla.org/docs/Web/API/Document/drop_event)
- [dragend](https://developer.mozilla.org/docs/Web/API/Document/dragend_event)

The following below are the code snippet for the same.

\*\*

\*\*

|

function handleDragStart(e) {  
this.style.opacity = '0.4';  
}

function handleDragEnd(e) {  
this.style.opacity = '1';  
}

let items = document.querySelectorAll('.container .box');  
items.forEach(function (item) {  
item.addEventListener('dragstart', handleDragStart);  
item.addEventListener('dragend', handleDragEnd);  
});|

\*\*  
\*\*

## Adding additional visual cues with dragenter, dragover, and dragleave

\*\*

\*\*

|

document.addEventListener('DOMContentLoaded', (event) =\> {

function handleDragStart(e) {  
this.style.opacity = '0.4';  
}

function handleDragEnd(e) {  
this.style.opacity = '1';

items.forEach(function (item) {  
item.classList.remove('over');  
});  
}

function handleDragOver(e) {  
e.preventDefault();  
return false;  
}

function handleDragEnter(e) {  
this.classList.add('over');  
}

function handleDragLeave(e) {  
this.classList.remove('over');  
}

let items = document.querySelectorAll('.container .box');  
items.forEach(function(item) {  
item.addEventListener('dragstart', handleDragStart);  
item.addEventListener('dragover', handleDragOver);  
item.addEventListener('dragenter', handleDragEnter);  
item.addEventListener('dragleave', handleDragLeave);  
item.addEventListener('dragend', handleDragEnd);  
item.addEventListener('drop', handleDrop);  
});  
});|

\*\*  
\*\*

## Completing the drop

\*\*  
\*\*

|

function handleDrop(e) {  
e.stopPropagation(); // stops the browser from redirecting.  
return false;  
}|

1. Move the Q&A feature into a Help menu.

- Earlier Help menu was not in the correct position.
- Now will place it in the navbar under the Help button.
- Help button is linked to Q&A section on another page.
- Please refer to the Mockup below for visualization.

1. Design a new interface (using [Bootstrap 4](https://getbootstrap.com/docs/4.6/); current version is [Bootstrap 3](https://getbootstrap.com/docs/3.3/)) for [Infragram.org](http://Infragram.org) which is full screen with a toolbar, solicit and incorporate input from user community.

All the components of this interface will be built-in using Bootstrap4\.

Mockup design for home page of infragram:

The homepage is extremely necessary for us because it serves as the first impression to potential users.

Here are the features I have enhanced and added.

- A responsive navbar containing learn More, Buy Modded Camera and Help buttons.
- Help will direct to the Q & A section on another page.
- Added full-screen mode. It can be exited by clicking on the same icon again.
- Linked the Infragram's tool page with a "Get Started' button.
- Made a collage of five images. It will change one after another. This will make the website look more eye captivating.
- Created "Why Infragram?" and "How to use?" sections to give an overview of what infragram is all about and will help getting started.
- Added a Dropdown button in the footer for selecting language of user's comfort.
- Added socials of Public lab in the footer.
- Please have a look at theMockup representation.

Mockup design for the infragram tool page

- Users can upload the images by following three ways:

1. Drag & Drop.
2. Browse from device.
3. Infragram's webcam.

- As space is extremely valuable, I have added icons for saving, downloading, and sharing images easily just by clicking on their respective icons.
- Added full-screen mode. It can be exited by clicking on the same icon again.
- Aligned tool buttons properly, their functions will expand and will appear on the left of the screen. It can be closed by clicking on the same tool button again.
- Image will be uploaded edge to edge.

Mobile view:

- In the navbar, links are replaced with hamburger icon for small devices.
- To center our box we use the align-items property to align our item on the cross axis, which in this case is the block axis running vertically. We use justify-content to align the item on the main-axis, which in this case is the inline axis running horizontally.
- Rest features will work the same as the Desktop View mentioned above.
- Kindly have a look at the mockup for small devices below:

Mockup design for Home Page

![](https://lh3.googleusercontent.com/xG8ZuNubLPqEwWoKkcYr8xhELtfc4U76-wqTDMXzqBVNXebnAnVYoZm54QDe_qOFEDIhbWocKLIX93K2wBDz_ZLPXnbuOl6bOWqDA64J_B7VowhLtgUmmlSLQ84vMwrvH5mjtHu1)

Mockup design for sandbox (Desktop View)

![](https://lh4.googleusercontent.com/01qHblTZ7a3DjjK6GXzM3xJ-7Fv8K36kVrBLgsi5bfN-0I6OFdzJzRiCqnA3RU-1EvvpIV6m1CV1Pn03UHUpIXOVH1IxlMyoGE07py2DLy7OuirkRBZvt8zrDpyjT5n4-Tq5BS7z)Mockup design for sandbox (Mobile View)![](https://lh3.googleusercontent.com/YcMhDZnwVXK2WBwl13pNI8XfzqP9C901ZEHdobfUddGuGzIbm-JQ_qBMMdVOt_PUijwbYpJ9RMqwT05GaeS48vpgFwP9yUGfqjl1roIVWhcuGiiYB_3iKi-bZydLK6AqopC6_5dT)

**4\. Add a popup "Welcome" modal box which guides your first few steps:**

- "Welcome" modal box warmly greets the users and also help them in understanding the interface easily.
- We will be implementing it using intro.js.
- IntroJs has a robust and complete API, which gives you the ability to customize and change the library with your preferred settings.
- There are some default options available in IntroJs to configure the library, such as the Next, Back, and Done button label in the tooltip box or the default position of tooltips which will help us to make the Welcome modal box.
- Below are the code snippets for implementation for the same.

Files Name:index.html

|

"Welcome!" data-intro="Hello World! 👋" class="card-demo"\>

class="card shadow--md"\>

class="card\_\_image" data-intro="Intro.js can highlight on elements"\>

src="..."  
alt="Image alt text"  
title="Logo Title Text 1"  
/\>

class="card\_\_body" data-title="Farewell!" data-intro="And this is the last step!"\>

#### Quaco Lighthouse

|

|

introJs().setOptions({  
steps: \[{  
intro: "Hello world!"  
}, {  
element: document.querySelector('#login'),  
intro: "Click here to login!"  
}\]  
}).start();|

- I will make the "Welcome" modal box as shown in the gif below:

[Gif link](https://drive.google.com/file/d/12wfiuWTD_fVeHGJnRkhjNwNyrGSTkri0/view?usp=drivesdk)

![](https://lh5.googleusercontent.com/i4iQcQHnlcZHotPAi3PBj6tvmL4xwQ916D4ZdrKLm-kiVFdS6887Tn08oBDjCtk6yBdCbeJW8-cwnuVy5Dbmj-JAyIK7qP3MWYqI1wyjZRqkOe69jEdiYz_CkRBkcAuTZcjIqh--)

\*\*  
\*\*

\*\*

5\. Iterate with user feedback

\*\*

- User feedback is essential to guide for influence innovations and changes to our website.
- It gives us a glimpse inside your users' minds and we can use that information to improve their experience, reduce drop-offs, and boost conversions.
- Below shown is an example of user feedback, where user can easily share their experience.
- I will add emojis, the easiest way to relate emotions.
- Added a text box where user can submit their feedback conveniently.

\*\*

\*\*

![](https://lh6.googleusercontent.com/IdFtYQlf8GPnUtcyzyFpSkpCU9BkFL-Q8FskxYvZetsA2FGmGf-sEBw6sDEA9PUp2kEx03Hwmgu-t6C9xMsZxsZDX1eHj2fMKn0fXQ3MM3wNVZTO24VIvkcmEXdFTJr3y60FGvU3)

\*\*

\*\*

**6\. Stretch goal: design a new colorize popup modal window to describe each colormap and offer thumbnails.**

On clicking on the preset button on the tool page User will get to know the suitable filter ie, BLUE filter for Infragram filter packs and webcams and RED filter for infragram Point and Shoot cameras.

\*\*  
\*\*

Here, I will give an idea about how the colormap works.

As the user will hover on the more information icon present in default and stretched Colormap.

It will show two stages of images:

Before and after the use of default colormap. Likewise for stretched colormap.

\*\* ![](https://lh6.googleusercontent.com/SB-4rDwNb-b8SnfPDkinOr2vARMFzwNPQn0DqNU_F9IU5hYBoX_gM9EqIXYAzxDzzGO8BPLqF1Fd_ayc0Oj0r1b-b_yuRzsAu_gZmzC6JXV5HwIredSoBKxhZLBXUDlfNdzP91Ph)

\*\* Timeline/milestones \*\*  
\*\*

|

Week|

Tasks|
|

Week 1

- Connect with the community and come to a conclusion on the design drafts/mockups.
- Make changes as advised by the mentors.
- Understand the UI and different use cases.
- Any suggested changes to the timeframe and procedure should be discussed with the mentors.
- Learn how to develop tests for easy testing and verification of the work.

**  
**

Week 2

- Begin by developing a fresh design for the Infragram tool(Desktop view).
- Adding full-screen mode in the navbar.
- Add a side toolbar buttons to the full-screen UI.
- Changes should be tested.

**  
**

Week 3

- Working on integrating the preset design, analysing, colouring, and overlaying.
- Get feedback from your mentors and make improvements as needed.
- Develop and write tests.
- Creating FTO's whenever required.

**  
  
  
**

Week 4

- Discuss the strategy of implementing cross-browser drag & drop throughout the full website with the mentors.
- Implementation of strategy.
- Discussion with GSoC students.
- Check out the new additions.

**  
**

Week 5

- Developing "Welcome" modal box.
- Testing after making the changes.
- Discussion with the mentors.
- Working on Mentor's feedback.

**  
**

Week 6

- Iterate with the user's feedback.
- Finish the Infragram tool's user interface.
- Ensure that all of the functionality are working properly.
- Presenting it to the mentors and receiving their input.

**  
**

Week 7

- Begin constructing Infragram's home page.
- Working on navbar and footer.
- Discussion of different approaches with GSoC students.

**  
**

Week 8

- Work on expanding the home page with new sections.
- Developing "Why Infragram?" 
- and "How to use?" sections.
- Check out the new additions.
- Creating FTO issues.

**  
**

Week 9

- Work on the collage of photos section.
- Completing interface of the home page.
- Make sure that all of the features are working properly.
- Feedback from Mentors.

**  
**

Week 10

- Working on Mobile interface.
- Feedback from mentors.
- Discussion with fellow GSoC students.
- Implementation of feedback and suggestions. 

**  
**

Week 11

- Working on the responsiveness of the mobile interface.
- Completion of iteration with user's feedback.
- Discussion and feedback from the mentors.

**  
**

Week 12

- Working on stretch goals.
- Completion of pending tasks.
- Improvement of documentation.

**  
**

Week 13

- Create FTO issues. 
- More community bonding. 
- Helping new contributors to contribute more towards Public Lab.

  
  
  
  
  
  
  
\*\*

\*\*

Needs:

\*\*  
\*\*

Libraries-

- Bootstrap
- Canvas

\*\*  
\*\*

One of the most important aspect is to get proper guidance and support from the mentors to assure that am working in the right direction.

\*\*  
\*\*

First Time Contribution

\*\*  
\*\*

- Involvement with the community on Gitter, Matrix, and Github.

\*\*  
\*\*

- Interaction with GSoC applicants working on the same project.

\*\*  
\*\*

Pull Request: [https://github.com/publiclab/infragram/pull/344](https://github.com/publiclab/infragram/pull/344) (hold)

Issue: [https://github.com/publiclab/infragram/issues/387](https://github.com/publiclab/infragram/issues/387 "https://github.com/publiclab/infragram/issues/387")

FTO-issue: [https://github.com/publiclab/plots2/issues/11080](https://github.com/publiclab/plots2/issues/11080 "https://github.com/publiclab/plots2/issues/11080")

\*\*

**Experience:**  
\*\*

\*\*  
\*\*

I am Muskan second-year undergrad at Indira Gandhi Delhi Technical University for Women, Delhi, INDIA. This is the first time I am contributing to a real world open source project and also interacting with other developers. The experience so far has been awesome. I developed a passion for programming and web development in my freshman year. I have completed a full-stack web development course from Angela Yu, Udemy, and also made various projects during this course.

- Secured Institute Rank 11 and All India Graduation Year Rank 290 in CodeKaze coding competition by Coding Ninja.
- I have participated in various hackathons to implement my skills practically to solve real-life problems. I have also been a part of top teams in API Fest 2022 by Postman, held over 28 countries.
- Selected for UAcelt Winter of Mentorship 2.0, completed two projects.
- Secured All India Rank 16 in IBM's Aptitude test.
- Successfully completed Virtual Engineering Program from GOLDMAN SACHS.
- Successfully completed Consultant Program from ACCENTURE.

\*\*  
\*\*

I have been learning and working on web related stuff for over a year and a half. I feel passionate about it mostly because of the amount of power it gives us to turn an idea into a reality. I have plentiful experience in this field. It doesn't take me long to understand a well-structured code like Infragram or to implement something I have never done before.

Some plus points about me:

● I am a fast learner and need very less amount of time to understand complex code and implement new features.

● I have excellent Googling skills. Therefore, I can usually google my way out of problems.

● I have a thorough understanding of git.

● I can easily devote around 40+ hours each week to complete tasks in my timeline.

\*\*

\*\*

Previously Worked Project:

\*\*  
\*\*

HACKTEST

\*\*  
\*\*

- Created an API with 3 members that feed of latest contests and hackathons from different sites.
- Created an API Schema to perform CRUD operations.
- Saved the latest contest and hackathon details in MongoDB.
- GitHub Link: [https://github.com/muskan2901/HackTest](https://github.com/muskan2901/HackTest "https://github.com/muskan2901/HackTest")
- Deployed Link: [https://hack-test.vercel.app/](https://hack-test.vercel.app/)
- Tech Stack: Javascript, MongoDB, Node.js, HTML5,CSS3, Express.

\*\*

\*\*

CHROME EXTENSION

\*\*  
\*\*

- Created a My Dictionary chrome extension.
- Tells about the searched word meaning, example, synonyms.
- Word's grammatical categorization and pronunciation.
- GitHub Link: [https://github.com/muskan2901/MyDictionary](https://github.com/muskan2901/MyDictionary "https://github.com/muskan2901/MyDictionary")
- Tech Stack: HTML5, CSS3, JavaScript.

\*\*

\*\*

Gamify: A Gamify Website (Frontend Project)

\*\*

\*\*

- Gamify is a user-interactive gaming website with a couple of easy yet entertaining games to enjoy the free time with.
- The website will give complete access to the games and will allow them to play single player games according to their choice for free.
- GitHub Link: [https://github.com/muskan2901/Gamify](https://github.com/muskan2901/Gamify)
- Deployed link: [https://gamingtogether.netlify.app/](https://gamingtogether.netlify.app/)
- Tech Stack: HTML5, CSS3, JavaScript(DSA)

**Teamwork**

\*\*  
\*\*

I have participated in many hackathons and have partnered with various participants around the world. Working together means success, so I firmly believe in teamwork. I have won several hackathons, Thanks to teamwork. I also been a part of various workshops held at the university, sometimes as a conductor and sometimes as a participant.

\*\*  
\*\*

Currently, I am Mentoring four groups of unprivileged girls (three girls each) and guide them about how they can make their career in STEM. I am helping them for cracking engineering entrances and also providing study material for the same purpose.

\*\*  
\*\*

I am also a member of two NGOs "KIlkari Homes" and "Khushi Homes". These are Orphanages for children. Every Sunday I used to select a motivational or an inspirational movie and show it to them. The purpose behind this initiative is to teach important life lessons to them. As the children are not mature enough, we decided to convey it through movies. This helps them to visualize everything and provides a better understanding. This also helps in the improvement of their mental health. I feel so overwhelmed after bringing a smile to their face.

**Passion**

\*\*  
\*\*

I have been an enthusiastic developer. I have always loved the concept of open source and wanted to contribute for the same. Outreachy provides a good platform to dive right into the middle of open source development with the opportunity to work in big open source projects with the core developers. This makes me excited and eager to participate in it.

I choose Infragram because it is very well aligned with my interests and also correlated to what I have worked on in the past. Other than that, this project provides a good opportunity to apply my learning on a practical scale. This is my field of interest and therefore the natural inclination to this project. I will continue contributing to Infragram in future and I'm thrilled to put in my best.

\*\*

**Audience**  
\*\*

This project will have a huge impact on humanity as it is connected to everyone's life. Be it for a farmer growing crops, researchers researching on vegetation, or an ordinary individual planting plants for decorating their house. Everybody wants to analyse plant's health. People would love Infragram for analysing plant's health in such a easier and effective manner.

**Commitment**

I have NO other obligations and will work full time on the proposed project during the Outreachy internship period. There won't be any Academic conflict so will be completely focusing on the project throughout the internship journey.