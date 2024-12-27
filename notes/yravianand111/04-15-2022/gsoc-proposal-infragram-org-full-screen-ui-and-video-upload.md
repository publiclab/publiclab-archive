---
title: "GSoC"proposal: Infragram.org full-screen UI and video upload "

tagnames: 'software, gsoc, soc, first-time-poster, gsoc-2022, gsoc-2022-proposals'
author: yravianand111
path: /notes/yravianand111/04-15-2022/gsoc-proposal-infragram-org-full-screen-ui-and-video-upload.md
nid: 30405
uid: 784616
cids: 30039,30040,30066
---

# GSoC"proposal: Infragram.org full-screen UI and video upload 

by [yravianand111](/profile/yravianand111) | April 15, 2022 11:03

April 15, 2022 11:03 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [first-time-poster](/tag/first-time-poster), [gsoc-2022](/tag/gsoc-2022), [gsoc-2022-proposals](/tag/gsoc-2022-proposals)

----

### About me

My name is Ravi Anand. I am a student studying computer science, 
currently in my 3rd and final year. I like programming and developing 
different things like websites, apps, designs, etc. Currently I am 
learning web development with MERN stack.

Affiliation University of Delhi

Location: India

### Project description

Refine Infragram UI and video upload

Revamp the Infragram UI for better usability, better looks and better functionality.

The UI has to be redesigned to make it easily usable and beginner friendly who can use it without problems, doubts or confusion.

Drag and Drop feature along with Video upload feature is also to be 
added to increase usability for different use case, so Infragram can be 
used for image as well as videos of different resolution to analyse 
plant health.

### Problem Description:

Infragram is a very great project but there is alot of room for 
improvement. The color scheme, font sizes, buttons, margins, allignment,
modals, tooltips, links, Image container needs alot of improvement.

The infragram is meant to analyse plant health which can be used by a
scientist or a farmer from corner of world. The project has to be 
developed with every use case in mind, it cannot be sophisticated which 
leaves the user clueless or confused. The terms used and the UI in the 
project are not beginner friendly. They can be improved for better 
usability.

The project is not responsive and the UI is not fully functioning in the mobile view.

There is also drag and drop feature for image and video along with video resolutions to be added in the project.

I have divided my proposal in 3 phases for the next 3 month of 
internship (The amount of task I am mentioning might take more than 3 
months of internship, which I am willing to do)

The first phase will cover the redesign and development of infragram for desktop display for pc users.

The second phase will cover the redesign and development of infragram for mobile view for phone users.

The third phase will cover adding of functionality like different 
video resolutions, drag and drop for whole screen, any more 
functionalities required for beginner user for NDVI filters.

## Proposed Solution:

1\. Color Schemes -![image description](https://lh5.googleusercontent.com/NUgQTAAqowcAQElgfSV19ddLB0FXlkliZWYz5rfpjti1-Sexmv8iwSbp1mujJdDNKmkk_5U9PX24VeO7tKtyOrueSwG3KUbL4Brs8ESEFDXGu6lKYWktsrljPL5PZ4lGYstyRQol "color_scheme.png")

The blueish color scheme does not look, so I think it can be 
discussed with mentors and color scheme can be changed. I thought 
infragram project is around plants so green color would look good, I 
tried it but it doesn't look too good but with trial and error color 
scheme can be selected. The bootstrap 4.0 green color is used in below 
image.![image description](https://lh5.googleusercontent.com/-dATEUk74exMlvuP6qOOqAVYDzZAb1tNcm47wJyyJSU-ALel0ZMNlWIT_VryqCK49uHqJarhvbKhLc7SsnjaExD97uVtXZR7I616tHejxCLN_esFtRG1LKbJ6x-yUKduHBMxi9r- "green_color.png")

2\. The heading and font sizes too small -

The headings for buttons are too small and color is also same as 
background which does not look good and also not easily readable.![image description](https://lh3.googleusercontent.com/_MHWN1DUw_pK-D9W8ewoRBB10V3R7FOJ4r3xCUseoX1yR6O4EjP8ot4SYaF9de1fx_uxshv6p2ErFC1VQHgjWOY07QPMU0XBvykZbjwzVYPCXXSJZeK3tTB1emEKurf_7UNPD7px "img_1file1.png")

3\. The bugs in toolbar -

1\. The button icons are not in center.

2\. The tooltip given in presets button is a link for the page about infragram but not how to use infragram.

3\. The presets modal is vague, demo images for blue and red filter should be added.

![image description](https://lh4.googleusercontent.com/VVBXkpPOq_UvqG5CRiICAVTRin2fPJy0XyvCnS86ST84UJzzo-s_K8OwRby-cdWD4wp7ASVN9nqqZSPlOkiiQuD6EtLri0S1sF87b2mESmu4QYXlqFynjWAu5EV-bLezg6e_Em4C "modal.png")

4\. The size bar and save button for overlay should be hidden until 
overlay is selected right now it works opposite on clicking overlay 
button the save button is hidden but if the user wants to change the 
overlay size he has to click on overlay again and then change the grid 
size.![image description](https://lh5.googleusercontent.com/BFDgBM-LwYZlVYHiuTouTO5U-8hYeA198Z1_ofCduPxNTKtdswq8XIDTXXdBoL4tZjbBePuAH--i5YBMHdfUj5mpw_bbxyhMydgFU8dR1rdxUxIvzh3jeK4dvdlYR9IXnsDVqFOk "video-gif.gif")

4\. The image/video container -

1\. The black canvas which is meant to contain image or video does not
look good, it can be replaced with grey or any light color and text can
be written there to drag and drop image or video.![image description](https://lh5.googleusercontent.com/Thu2XtDQWL2TjNTXtaajzuWaii_X_8JJDpSSvrU01L2HzNqcJ40H9_ZcV7lzc3r4vx-r29ltIRMs9W4xyJldUf-ritOJzvA0M8d95uoOpWPVSmUmVX0fm3QzLZ3x5IrEoc-QzkKF "black_canvas.png")

2\. On clicking the image canvas (1) it gets full screen but the text 
is not in the middle but on disproportionate location, (2) the image 
canvas is not full screen it just covers the visible display on 
scrolling the page the Q&A section of page is visible - this is a 
bug and can be solved.

![image description](https://lh6.googleusercontent.com/lulogTauzaX2QSz4lfSxpS_yc47RtegPIxVJbii0KlrgQGoQQm8VyQKTnqc5u3wbvclgpc6InbtEAySHK5SqVvtJ9KHwzj2d1w3VyzhSwvj_mC2yaXIS7heKXtWxYMZlKFJBHILZ "black_fullscreen.png")

### 1\. My Demo Design for sandbox infragram which is subjected to change according to input from community and mentors-![image description](https://lh4.googleusercontent.com/A10NvWpDJwKmo47MBxesoMOUEyB5zXB29RKBow5SHdZCiy_12AE00vIPTvBKZ3_7lLCqYrIEksc8bPo_Vlsl_6Na77TZak3Tjs17VY9QJc2cUCNY-K-7UhhVMQuSu1LPx-nqLVM1 "infragram.png")

### 2\. Demo for all the popups/tooltips -

![image description](https://publiclab.org/i/46518.png "Infragram-Modals.png")[Image Link](https://drive.google.com/file/d/14h31FAIXUuo92g3Cnrtbm3niaMn7dkLA/view?usp=sharing)

### 3\. Demo design for Infragram sandbox on full screen -

![image description](https://publiclab.org/i/46513.png "Edge-Case-Image.png")

[Image Link](https://drive.google.com/file/d/1-8FX_44MZp20Dh8c8vt2wh-zg4O2Ivzq/view?usp=sharing)

I have tried to copy the style of [photopea.com](http://photopea.com) here. I have also tried to open options like in [photopea.com](http://photopea.com) opening small tooltip adjacent to the option. It can be further changed/improved from the inputs from mentors and community.

### 3\. The popup modal for tutorial of the infragram project-

![image description](https://lh6.googleusercontent.com/K0i-gm5pq1Gw7Z5n5aEbNPv6VpIkVQueDxxhv7w8lyagqQ4wuPCPERCvAEH4Ep492nUmDz6E2xpal797HrnB0P1QKJQLogxZKCfh1EP4h21dgtOro5D5EXCeJT1a9uhRea2FvrZN "help-modal.png")

-\> We can follow this and create tutorials modals for beginners 
who can also access it from footer as mentioned in the design shared 
above.

1\. The bootstrap has modal class for this purpose [Bootstrap Modal.](https://getbootstrap.com/docs/4.6/components/modal/)

2\. The modal can be customised with css and can be positioned anywhere on the screen with css and javascript. [Customize Bootstrap Modal](https://stackoverflow.com/questions/20854035/is-it-possible-to-customize-style-of-bootstrap-modal)

4\. The Help button can be used to do two of the things, we can either
open another page for QnA or we can open QnA in the same page just 
below the help button and above the footer.

### 5.The Video Resolution Exporting (Idea credit -@[forch](https://publiclab.org/profile/forcha)[a](https://publiclab.org/profile/forcha) Proposal Link - ([Link](https://publiclab.org/notes/forcha/04-05-2022/gsoc-proposal-full-screen-ui-and-video-upload))-

![image description](https://lh6.googleusercontent.com/u5MWVg9OLglUgMcMv09S9_UujNUpnHzVIuTWGWYGXDXXUUxI8sRatoB3eqwcD4oCqFxoXSMx2_OyIeULVunEd0Ej7JPzNa-VspR5a4YgxV3l2eC6K6-OWV8ySguKJ2TZaHDLuI9a "infra-video.png")

- One thing I would like to add over the idea forcha had is we can 
also add an option of auto in which the image or video will be exported 
in the same format it was imported in. This feature might be useful for 
those users who do not remember or do not want to choose resolutions 
again and again.

### 6\. My Demo Design for infragram main page -![image description](https://publiclab.org/i/46519.png "Infragram-Main-Page.png")

[Image Link  
](https://drive.google.com/file/d/112Is3Xe2tI-kKO5rdpWRt8zUgYxlVtPk/view?usp=sharing)

In Infragram home page, the main content is very small in font size 
as if we are trying that the audience does not read the content. 
Therefore I have focused my design on content, so we are able to provide
information about infragram with images and then we are asking our 
audience to try out infragram and then we share images they can check 
and then the QnA to solve doubts or confusion.

### 7\. Allow cross-browser drag-and-drop on the entire page instead of just selecting an image-

File - infragram/src/file-upload.js

- We can use Event Listener DragEnter, DragLeave, Drag, etc to drag and drop files.
- **Code html**  
![image description](https://lh3.googleusercontent.com/zRLHxS7tep75XgzKtYkiv0eaBl01dt59sI_zZvCHpn69ai-EBVxgpGk8Op5Gx7miAHj4H3of5o_OnZcohXznK4v0YLmETCvX7iZhP9tQFHK4R_JHmZzdA_-svzRjvr94piNJst3e "code_html.png")

**Javascript**![image description](https://publiclab.org/i/46317.png "code.png")

We can use code like this, and make the whole screen as dropzone and 
as soon as the file is dropped we can catch it in our infragram project.

## 8\. Demo Design for Mobile View -

![image description](https://publiclab.org/i/46530.png "Mobile_Design.png")

These are two pages of infragram sandbox mobile view which can be used here and it looks good too. Insipred by this [website  
](https://www.iloveimg.com/photo-editor)

This design can be improved upon and changed according to inputs from mentors and community members.

### Timeline/milestones

Week 1

- Understanding the codebase and coding practice at public lab.
- Get familiar with the mentors and community. Getting to know everybody in the community.
- Trying to form new ideas and features to help the community

Week 2

- Discuss and brainstrorm ideas with mentors regarding the infragram main page desktop UI.
- Implement the changes discussed.
- Write Tests for the changes made.
- Get Feedback from the mentors and improve upon them.

Week 3

- Discuss the infragram sandbox desktop UI with mentors .
- Make the changes discussed
- Write Tests for the changes made.
- Get Feedback from the mentors and improve upon them.

Week 4

- Discuss the drag and drop feature with mentors and come with an optimal way
- Implement those ideas and features
- Write Tests for the changes made.
- Get Feedback from mentors and improve upon them.

Week 5

- Discuss the video implementation of drag and drop with mentors.
- Implement video drag and drop and play, pause, loop.
- Write Tests for the changes made.
- Get feedback from mentors and improve upon them.

Week 6

- Discuss the ideas of resolution of videos importing and exporting
- Implement changes with automatic detecting resolution with getUserMedia in system.
- Write tests for the changes made.
- Get feedback from mentors and improve upon them.

Week 7

- Discuss the conversion of videos from canva in infragram.
- Implement the WebRTC and WebGL libraries to convert per frame of the video.
- Write tests for the changes made.
- Get feedback from mentors and improve upon them.

Week 8

- Discuss ideas about help menu for audience in sandbox infragram and infragram main page.
- Make the corresponding UI changes.
- Write tests for the changes made.
- Take feedback from mentors and improve upon them.Week 9
- Discuss ideas about tutorial of the Infragram sandbox.
- Implement the changes decided
- Write tests for the changes made.
- Take feedback from the mentors and improve upon them.

Week 10

- Discuss ideas about tutorial of the mobile view of the Infragram sandbox UI
- Implement the changes decided
- Write tests for the changes made.
- Take feedback from the mentors and improve upon them.

Week 11

- Discuss ideas about tutorial of the mobile view of the Infragram main page UI
- Implement the changes decided
- Write tests for the changes made.
- Take feedback from the mentors and improve upon them.

Week 12

- Work on tasks pending or any other task which came up.
- Try to sum up everything and solve stretch goals of zooming/panning of videos.
- Write tests for the changes made.
- Take feedback from the mentors and improve upon them.

In all 3 months of my internship, I will try my best to help the 
beginners and community of public lab, I wil try to create FTOs, solve 
doubts or confusion and share my knowledge when needed.

### Contributions

- Comments, to show overall community involvement (like helping others):[https://github.com/search?q=commenter%3ARaviAnand111+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues)
- Open issues:[https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3ARaviAnand111](https://github.com/publiclab/plots2/issues/created_by/jywarren "https://github.com/publiclab/plots2/issues/created_by/jywarren")
- Closed PRs:[https://github.com/publiclab/PublicLab.Editor/pulls?q=is%3Apr+author%3ARaviAnand111](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Ajywarren+is%3Aclosed)

---------

### Experience

I have been learning how to code for 6 months all by myself from 
youtube and blogs. I have created some projects with HTML, CSS, 
Javascript. I have started learning MERN stack and have created some 
React websites which uses javascript. I am developing a portfolio 
website for my college society.

---------

### Teamwork

I am joint secretary of the tech society of my college, I have 
organised various events with 60+ members from my society. I have also 
headed a group of students who are creating website for our society.

I have been contributing in PublicLab for more than 6 months now, 
Many of the public lab community members have helped me, to name a new @mathildaudufo @NaruDesigns
have helped me alot and I have been trying every to since to do same 
for every beginner and a curious student I find. I have been helping 
beginners on gitter and google meets in public lab community since 1 
month.

---------

### Passion

The aim of Public Lab interests me, the perseverence it has interests
me, the work it has been doing interests me, the way it is helping the 
countries and the world is what interests me. I had not contributed in 
open source before Public Lab was the first place I contributed in and I
am grateful for the people here because of whom I had great experience.
I like to help people and while doing so doing something for the 
greater good as saving our environment with help of people and cheap 
also. So many good things public lab is doing it just makes your proud 
you are part of this community.

Thank You

### Audience

According to me, the software service everything we are providing at 
public lab is for every human who wants to do something for nature for 
people and everyone. But while being of help to everybody it is also 
caring and helping those far from reach of technology and financial 
status. They too can help us and help themselves with the services and 
things we provide. Therefore while writing code or creating anything I 
try my best to focus on beginners and people who do not have much 
knowledge but still have shown courage to give us a try.

Thank You

## Commitment

I will be graduating in May, so I will be free from june and will be 
able to provide my full time internship. To be honest I am going to try 
to give more time and effort than it is demanded here, because that is 
what this opportunity means to me. I will be completely free so I will 
try to give my all. ThankYou