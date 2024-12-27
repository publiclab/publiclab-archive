---
title: "Outreachy proposal:Design a new full-screen UI for Infragram.org"

tagnames: 'software, outreachy, first-time-poster, zoom:11, outreachy-2022, outreachy-summer-2022, lat:23.830576, lon:91.288146'
author: SomyaSinghal
path: /notes/SomyaSinghal/04-21-2022/outreachy-proposal-design-a-new-full-screen-ui-for-infragram-org.md
nid: 30543
uid: 792904
cids: 30106,30129,30135,30156
---

![](https://publiclab.org/public/system/images/photos/000/046/304/original/out-1.png)

# Outreachy proposal:Design a new full-screen UI for Infragram.org

by [SomyaSinghal](/profile/SomyaSinghal) | April 21, 2022 11:11

April 21, 2022 11:11 | Tags: [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [zoom:11](/tag/zoom:11), [outreachy-2022](/tag/outreachy-2022), [outreachy-summer-2022](/tag/outreachy-summer-2022), [lat:23.830576](/tag/lat:23.830576), [lon:91.288146](/tag/lon:91.288146)

----

## About me:

**Name**: Somya Singhal

**University**: National Institute of Technology, Agartala

**Course** **Major**: Computer Science and Engineering

**Year** **Of** **Graduation**: 2023

**Location**: NIT Agartala, Tripura, India

**Github**: [https://github.com/Somya-Singhal](https://github.com/Somya-Singhal)

**Email**: [singhalsomya14@gmail.com](mailto:singhalsomya14@gmail.com)

**Contact**: (+91) 9634707333

My name is Somya Singhal. I am a third-year Computer Science undergraduate at NIT Agartala. I am a self-taught developer. During my previous internships, I had explored the field of web development and machine learning but my interest gradually inclined towards web development. I am proficient in C/C++ and Javascript and was also enrolled in the course where I learnt MERN stack. After that I was really excited that I've spent my last few months completely immersed in remote development, building my own small projects starting from a blogging website, to-do list, portfolio and some other mini projects.

I like to collaborate with others and work in a team as the exchange of ideas happens and each idea has some best part in it, which at last when refined and combined, leads to a great step ahead.

I love coding because I love the problem-solving aspect of it, so I code daily. I am always eager to learn from others and from my part, honestly try my best to help others. I also love music, plants and art.

### 

## Project description

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. [Infragram.org](http://infragram.org/) enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen and create space for new features like multiple resolutions of video, dragging in a recorded video instead of a still image for conversion, and pop up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

### Abstract/summary (<20 words):

Design a new full-screen UI for [Infragram.org](http://Infragram.org) and creating space for new features.

### Problem:

### 

I have listed some issues(along with suggestions) that I noticed while looking through the Infragram website:

1\. The main heading of Infragram could be made to look more attractive which would give a nice look at first sight to the user. The text above the options like Quick Start, Source, Convert/Analyze, Overlay are not properly visible and moreover the color of the "Colorize" option is different than Source, Convert/Analyze and Overlay options, so this could be modified. Another problem is that the grid icon is not properly centered in the Overlay button. We could also notice that in the right size the grey box is expanding to cover the area equally but it looks empty which could also be improved. When the user will choose the RGB analyzer, the alignment of all options gets disturbed as the "Overlay" option comes down and the boxes of "RGB" are expanded to cover most of the area, so this can also be taken into care. When we click on "Overlay" button, to highlight instead of green color any other can be used which would match with the whole palette. The number that is displayed to show the current value in the slider can be placed somewhere either just after the slider or can be made to hover when the user will take their cursor over the slider.

_![image description](/i/46271.png "out-4.png")_

2\. The image section where the user will upload the image and the options pallet above it could be made to come in alignment with each other so that the interface will look clean and in proper alignment. Another improvement could be made when the image is enlarged, it is covering the upper part of the Q&A section and also there is no button or any indication as to where to click to get back to normal image size.

_![image description](/i/46273.png "out-5.png")_

3\.

_![image description](/i/46274.png "out-6.png")_

4\. Responsive view can also be modified. Here are some issues that I looked at in the responsive view of the page.

_![image description](/i/46275.png "out-7.png")_

### 

### Mockup Design:

1\. The new user interface of "[Infragram.org](http://Infragram.org)" includes the following features-

- Firstly, I made the header look more attractive. In the header a menu bar will be present which has three options 1)About Us(this will take the user to infragram main page) 2)Mod a camera 3)Buy a moded camera.
- Then, I made sure that whether the user chooses Grey, RGB or HSV, in all the three options alignment would not get disturbed. I implemented this using a drop-down menu that has all the three options and RGB and HSV also have a text area present where the user can enter the desired value in the provided area. After it's done drop-down will automatically collapse and the chosen option will be selected.
- **I added a new feature that is to switch between dark and light theme so that users can switch according to their choice.**
- As it was suggested in the idealist to add cross-browser drag-and-drop instead of just selecting an image so I implemented this in mockup design where the user can select between three-option: 1) To drag and drop the image 2) To browse the image 3) Connect to an infragram webcam
- I redesigned the footer section.

Here I have attached a presentation of the Mockup design to give an idea of my design:[https://docs.google.com/presentation/d/1dhP-56pkVy440\_\_tZ4rU9MLaS2pMr6fGgE4qabonh6I/edit?usp=sharing](https://docs.google.com/presentation/d/1dhP-56pkVy440__tZ4rU9MLaS2pMr6fGgE4qabonh6I/edit?usp=sharing)

## UI of [Infragram.org](http://Infragram.org):

_![image description](/i/46276.png "out-8.png")_\_\_

## 

## Dark Mode

## _![image description](/i/46277.png "out-9.png")_

### 

### 

2\. Next suggested change in the idealist list was to add a welcome model that would guide the user. Below are the step-by-step screenshots which would be exactly how the welcome model will be implemented to help the user. When the pop-up will come for any message, the area to which that message will be pointing(or where the user needs to click) will be visible and rest of the whole background will be blurred to prevent the user from clicking somewhere else.

### Welcome pop-up (to ask whether a user wants to take a quick tour or not)

_![image description](/i/46285.png "out-13.png")_

### 

### 

### Step-1![image description](/i/46286.png "out-14.png")

### 

### 

### Step-2![image description](/i/46287.png "out-15.png")

### 

### 

### Step-3![image description](/i/46288.png "out-16.png")

### 

### 

### Step-4![image description](/i/46289.png "out-17.png")

### 

### 

### Step-5![image description](/i/46290.png "out-18.png")

### 

### 

3\. Next suggested change in the idealist was to move Q&A to help menu.I implemented this feature in the mockup design using a bubble which will always be present at the right bottom corner along the page as user scrolls through the page.Whenever user clicks on that icon, a pop-up box will be shown which will help the user to either submit their question or visit the Q&A page by clicking on the URL(provided their in the chatbox itself when conversation started).

![image description](/i/46291.png "out-19.png")

### 

### 

4\. This is how the responsive view will look like.

  
![image description](/i/46531.png "pl-f-1.png")

  
  
In responsive view the menu bar will be collapsible and here also in addition to the three options that were present in the desktop view an additional option will be present for Q&A section which will take the user to the Q&A page so that either he/she can submit their questions there or browse through previously posted questions.![image description](/i/46532.png "pl-i-3.png")

  
  
I have added this section which I thought of implementing as a slider(containing links to some useful resources related to infragram.org)![image description](/i/46533.png "pl-i-4.png")

  
### 

### 

  
![image description](/i/46534.png "pl-i-5.png")

###   

  
After clicking on the "Presets" option, the drop-down menu will be expanded and all information about presets could be seen. Similarly, for "Analysis", "Colorize" and "Overlay" options.

  
![image description](/i/46535.png "pl-f-2.png")

  
![image description](/i/46536.png "pl-f-3.png")

  
![image description](/i/46537.png "pl-f-4.png")

  
![image description](/i/46538.png "pl-f-5.png")

  
  
### Timeline/milestones

### 

Week 1(May 30- Jun 4)

1. Complete onboarding to Public Lab
2. Discuss how communication would be carried throughout the internship period
3. Make changes to the internship project based on feedback from mentors
4. Create FTO issue to update README with these changes
5. Write a blog post (Outreachy's prompt): "Introduce yourself" or a different topic agreed with mentors

Week 2(Jun 5- Jun 11)

1. Learn about and understand the existing UI first
2. Understand the UI flow and goals, various different use cases
3. Discuss the mockup prepared and make the necessary changes
4. Create FTO's wherever possible
5. Write a blog post to document the process

Week 3(Jun 12- Jun18)

1. Create a wireframe and solicit feedback
2. Add elements like menu bar,header and footer
3. Create FTOs wherever possible
4. Write a blog post (Outreachy's prompt): "Everybody struggles" or a different topic agreed with mentors

Week 4(Jun 19- Jun 25)

1. Implement cross-browser drag-and-drop on the entire page
2. Set up other elements
3. Create a FTO related to these changes or any other suitable area
4. Write a blog post to document the process

Week 5(Jun 26- Jul 2)

1. Implement Q&A feature into a help menu
2. Implement feature using bootstrap 4, breaking it down into smaller issues
3. Creating FTO's wherever possible
4. Write a blog entry (Outreachy's prompt): "Think about your audience" or a different topic agreed with mentors

Week 6(Jul 3-Jul 9)

1. Implement a popup "Welcome" model box
2. Add Javascript wherever needed
3. Create FTOs wherever possible
4. Write a blog entry to document the process

Week 7(Jul 10-Jul 16)

1. Create final non-functioning mockup using minimal JavaScript and mostly HTML and CSS
2. Document the UI changes to make hooking with JavaScript easier
3. Write a blog entry (Outreachy's prompt): Mid-point project progress or a different topic agreed with mentors

Week 8(Jul 17- Jul 23)

1. Implement the new interface and start hooking it with JavaScript by collaborating with possible GSoC accepted student
2. Discuss with the community and fix bugs
3. Write a blog post to document the process
4. Create a related FTO if possible, or use another suitable topic

Week 9(Jul 24- Jul 30)

1. Clean the code and use a uniform casing system to name files
2. Hook the rest of the UI with the JS
3. Fix bugs and create FTO's wherever possible
4. Write a blog entry (Outreachy's prompt): "Career opportunities" or a different topic agreed with mentors

Week 10(Jul 31- Aug 6)

1. Complete hooking with JS
2. Ensure each feature/function still works
3. Write a blog post to document the process

Week 11(Aug 7- Aug 13)

1. Design a new colorize popup model window to describe each colormap
2. Offer thumbnails
3. Work on Outreachy's prompt: resume

Week 12(Aug 14- Aug 20)

1. Buffer week to complete possible pending tasks

Week 13(Aug 21-Aug 22)

1. Write final project progress blog post, highlighting achievements, pending tasks and further work
2. Final feedback

\* This feedback/improvement actually starts right after I publish this proposal, but this is when the internship officially starts.

\*\* Blogging is going to be a key activity towards the documentation of the process. A post of this kind might cover a specific task of the week (i.e. something I struggled with), relevant thoughts, or pretty much anything I would like to share about that week's experience.

### Needs

I will need the constant feedback from my mentors and the Public Lab GitHub community

### First-time contribution

You can use links like these to show recent activity:

1\. Overall community involvement (like helping others):

- [https://github.com/publiclab/infragram/issues/300](https://github.com/publiclab/infragram/issues/300)
- [https://github.com/publiclab/plots2/pull/11044#issuecomment-1104971479](https://github.com/publiclab/plots2/pull/11044#issuecomment-1104971479)

2\. Issues

| Issues | Status |
|--------|--------|
| [https://github.com/publiclab/plots2/issues/11026](https://github.com/publiclab/plots2/issues/11026)<br> | Closed<br> |
| [https://github.com/publiclab/plots2/issues/11009](https://github.com/publiclab/plots2/issues/11009)<br> | Open<br> |
| [https://github.com/publiclab/infragram/issues/272](https://github.com/publiclab/infragram/issues/272)<br> | Open<br> |
| [https://github.com/publiclab/infragram/issues/325](https://github.com/publiclab/infragram/issues/325)<br> | Closed<br> |
| [https://github.com/publiclab/infragram/issues/300](https://github.com/publiclab/infragram/issues/300 "https://github.com/publiclab/infragram/issues/300")<br> | Closed<br> |

3\. Pull Requests

| Pull Request | Status | Description |
|--------------|--------|-------------|
| [https://github.com/publiclab/plots2/pull/11031](https://github.com/publiclab/plots2/pull/11031)<br> | Merged <br> | Noticed some warnings in style.css and resolved add the standard style rule in addition to the vendor-prefixed version.  <br> |
| [https://github.com/publiclab/infragram/pull/275](https://github.com/publiclab/infragram/pull/275)<br> | Merged <br> | Enhanced the comments to be more readable in config.yml<br> |
| [https://github.com/publiclab/infragram/pull/330](https://github.com/publiclab/infragram/pull/330)<br> | Open <br> | Tried to make changes because I thought that the function was not written properly(i.e it was defined outside the scope of its declaration) and also found some syntax error.<br> |
| [https://github.com/publiclab/infragram/pull/324](https://github.com/publiclab/infragram/pull/324)<br> | Open <br> | Fixed the use of initMouseEvent as it has been deprecated.<br> |

### Experience

I've been coding for approximately two year. I started my journey by learning the most basic language C, then gradually I shifted to C++ , then my interest got inclined towards web development, so I explored a variety of technologies. First I tried my hands at building some basic websites using HTML and CSS. Then to add the functionality I explored Javascript ES6\. After this, I learned and understood git, Github and version control. I also explored working with Linux based system where I learned to perform tasks through the command line. I found learning the Unix Command line and working with bash commands to be really powerful as it saves a lot of time. I was also fascinated after getting to know some popular CSS frameworks like Bootstrap, Tailwind and Materialize CSS to make the website responsive. I also tried my hands-on learning Jquery. While learning about the front-end development I was engaged in learning by doing which made me understand the concepts well and worked on the front-end part of some projects. Then I started learning about the backend development where I explored Node.js, Express.js, APIs, EJS and some databases like MongoDB. Currently, I am learning React JS.

Apart from Web Development, I have also explored Machine Learning where I worked to build a supervised ML model for well log analysis as a part of the project of my internship. This is the link to that project: [Well log analysis](https://github.com/Somya-Singhal/Well-Log-Analysis-ML-Model-)I have made some projects as I mentioned above constantly during the period of my learning. The link to Github is: [Github link](https://github.com/Somya-Singhal)

This is link of my Resume: [https://drive.google.com/file/d/1yV6QNB3YflhAXUFuwsVNmH85FQsml0Tb/view?usp=sharing](https://drive.google.com/file/d/1yV6QNB3YflhAXUFuwsVNmH85FQsml0Tb/view?usp=sharing)

---------

### Teamwork

I always enjoy working in a team. Below are some of the contributions that I made while working in a team.

During my internship at a startup, I worked with a team where we had to collaborate and make the designed UI to be implemented. During the whole duration of the internship, I was actively involved in getting feedback and asking for reviews of my design. After one project has been completed, my mentor was impressed by the way I was collaborating with all the team members to combine our ideas and then presenting the refined ideas to the mentors that I was assigned to lead the whole team for the rest of the duration during the internship.

During my college fest, I had taken part in "Aayam" where my team participated in the "Robowar Competition". It was a great experience collaborating with each other and designing the prototype. And the most motivating part was that we were the only girls team competing in this event, so I felt really proud that we had at least tried and initiated to do something out of boundaries.

I feel that teamwork can lead a project to success most of the time. While working in the team we brainstorm and put together all our ideas which leads to a great discussion and a comprehensive output. Anyone does not feel stuck to one problem and work could be completed within the scheduled time.

---------

### Passion

When I had gone through all the projects that Public Lab, I found that these projects are solving a real-life environmental issue which is a really major issue and also keep the affordability and user experience(accessibility) to be prior. These ideas immediately presented the perfect opportunity for me to apply the knowledge I acquired and excited me to seize this opportunity to positively impact the environment through my contributions to technology, creativity, and environmental issues-based project.

I love the way the Public Lab community is strongly bonded and the amount of interest and patience they show to help any newbie understand the problems whenever they got stuck and gives the enthusiasm of not giving up but instead keep on exploring and learning. The community's regular feedback allows us to brainstorm the ideas that could gradually be improved starting from a small initial thought. I believe that the whole process of learning with this community will be an exciting and unforgettable journey.

---------

### Audience

The Infragram is an Infrared Photography project which brings together a range of different efforts to make the affordable and Do-It-Yourself plant health comparisons possible with infrared photography to bring technology to power for everyday people from gardeners examining plants in their yards to organic farmers, wetlands activists and more. It helped them to look at the very complex biological systems and the more information that they can get about how they're functioning and midseasons allow them to make adjustments. After the BP oil disaster, experts were trying to look at the Infrared photography of the Wetlands but the existing tools were extremely expensive. This project not only is beneficial for experts but also sees the role of infrared photography in the home as well so geek gardeners can learn about the growth of their household plants.

This has changed the understanding of ecology around us from gardens and farms to rivers and coastlines nearest to us.

---------

### Commitment

My project will be my primary focus during my internship. I will dedicate 40 hours per week to my project for the 13 weeks of the Outreachy internship. I will be actively involved in asking questions, helping other teammates, contacting the mentors and will keep them updated by completing the work on time. My utmost goal during the entire period of the Outreachy internship will be to complete my project in the best possible manner.