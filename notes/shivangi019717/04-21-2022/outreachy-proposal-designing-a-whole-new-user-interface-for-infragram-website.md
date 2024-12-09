---
title: 'Outreachy proposal:  Designing a whole new user-interface for Infragram website'
tagnames: software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022
author: shivangi019717
path: /notes/shivangi019717/04-21-2022/outreachy-proposal-designing-a-whole-new-user-interface-for-infragram-website.md
nid: 30549
uid: 796011

---

![](https://publiclab.org/public/system/images/photos/000/046/357/original/my_wrireframe.png)

# Outreachy proposal:  Designing a whole new user-interface for Infragram website

by [shivangi019717](../profile/shivangi019717) April 21, 2022 18:51

April 21, 2022 18:51 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

---------

## About me

I am Shivangi Singh, an engineering sophomore from Guru Gobind Singh Indraprastha University, Delhi. I am a tech enthusiast, in 1 and a half years of college, I have explored many techs and participated in coding competitions, hackathons, tech talks, and many such events. I have found a keen interest in technology and want to contribute to it. I have started my open source journey at Hacktoberfest and I really enjoyed it, so I decided to do more work with open source. Apart from tech, I like dancing, exploring music, and cooking.

**Affiliation:** Bhagwan Parshuram Institute of Technology, GGSIPU

**Location:** India

**Email:** [shivangi019717@gmail.com](mailto:shivangi019717@gmail.com)

**Github:** [SHIVANGISINGH1](https://github.com/SHIVANGISINGH1)

**Linkedin:** [Shivangi Singh][1]

## Project description:  

[Infragram][2] is a web-based tool for analyzing plant health with near-infrared imagery.This project aims to redesign the existing user interface of the Infragram, to make it more user friendly thus improving the user experience. This can be achieved by adding a tutorials guide on the home page, adding cross browser drag and drop, redesigning the website by making it responsive.  

### Abstract/summary (<20 words):

Design a new user interface for [Infragram][3] website, thus making it more user friendly. 

### Problem

1. The Infragram website does not have a proper navigation bar and footer.
                        ![no navbar and footer](/i/46259.png "Screenshot_2022-04-21_010432.png")

2. The website could be divided into different sections instead of having everything on the same 
     page.

3. Every Question opens up a iframe that is very large in size and overflows.
                        ![iframe overflows](/i/46262.png "Screenshot_2022-04-21_010846.png")

4. The website is not very responsive and the content is overflowing. We could solve this issue by 
     making it more responsive for different screen sizes with the help of Bootstrap 4.  
                                ![overlfow][4]

5. There is no discard/remove current image option easily visible to the users.And no button to 
     close the camera too.
                                     ![no discard button](/i/46264.png "Screenshot_2022-04-21_011432.png")

6. In the form added in the website labels are absent. Labels help the screen reader to read out the 
     text aloud. 
                                 ![label][5]                   

7. In the mobile view, there is no option to select the rear camera, on opening only the front camera 
     is visible. 
                                          ![no rear camera option][6]

8. The content is overflowing and not responsive. 
                             
![overflow image][7]




### Project Goals

 1. Designing the Infragram tools.                              
                         ![tools][8]

2. There can be a separated sidebar for displaying the different functionalities.

3. For the presets: We can add a presets pop up like this with some images and a shop icon for 
         redirecting to Public lab stores for buying these filters.  
                   ![presets][9]

4.  Designing the whole [Infragram][10] website. I have proper a design for the whole new 
      infragram website. 
      It was large so you can find it at this link: [Infragram UI][11]

5.  Implementing the cross-browser drag and drop functionality on the entire page: 
     The drag and drop functionality can be implemented with the help of [HTML Drag and drop API][12] 
     The user could easily select the draggable images and drop them on the page that will be the 
     drop zone.              
    The drag-and-drop interoperability is relatively broad among desktop browsers so we can use 
    this API. 

6.   Shifting the Q&A section to a different Help page. 
                                     ![help][13]

7. The iframes for each question can be displayed properly with no horizontal scrolling and just the 
     vertically scrolling to enhance the user experience. 
                                                 ![iframe][14]

8.  Designing a new footer for the infragram. 
                                                                ![footer][15]

9. Making the entire website responsive using bootstrap. 

### 


Timeline/milestones


WEEK TASKS

---------

\*\*

\*\*

1st week (30th May - June 5)  <br> <pre>
                       1\. Interact with the community.  <br>
                       2\. Discuss the timeline for the project with the mentor. <br>
                       3\. Decide the mockup design for the website with bootstrap.  <br>
                       4\. Outreachy Blog Prompt: "Introduce yourself". <br>
</pre>
\*\*  
\*\*

---------

2nd week (June 6 - June 12)    <pre>    // I have my exams this week. <br>
</pre>

2nd week (June 13 - June 19) <br> <pre>
                       1\. Start implementing the selected design. <br> 
                       2\. Interacting with the mentors and fellow GSOC intern.  <br>
                       3\. Testing the added changes.  <br>
                       4\. Outreachy Blog Prompt: "Everybody  Struggles". <br>
</pre>
\*\*  
\*\*

---------

3rd week (June 20 - June 26) <br> <pre>
                       1\. Start working on drag and drop functionality with the fellow GSOC intern.   <br>
                       2\. Testing it among different browsers.  <br>
                       3\. Taking feedback from mentors and incorporating the changes. <br>
</pre>
\*\*  
\*\*

---------

4rth week (June 27 - July 3) <br> <pre>
                       1\. Start working on the design for the help page in the Q&A section. <br> 
                       2\. Collaborating on designing the home page.  
                       3\. Taking feedback from the mentor for the designs.  
                       4\. Outreachy Blog Prompt: "Think about your audience". </pre>

---------

5th week (July 4 - July 10) <pre>
                      1\. Working on adding a POP-UP MODEL with a fellow intern.  
                      2\. Implementing and testing the designs.  
                      3\. Taking feedback from the mentor and incorporating the changes.  
                      4\. Create FTO issues.   </pre>

---------

6th week (July 11 - July 17) <pre>
                     1\. Working on a design for the header and the footer.  
                     2\. Write a "Mid-point project progress" blog post.  
                     3\. Implementing the selected design.  
                     4\. Taking feedback from the mentor and incorporating the changes. </pre>

---------

7th week (July 18 - July 24) <pre>
                     1\. Working on designing the Home page, make it more user-friendly.  
                    2\. Testing the added changes.  
                    3\. Create FTO issues. </pre>

---------

8th week (July 25 - July 31) <pre>
                     1\. Design a new colorize popup modal window to describe each colormap and offer 
                      thumbnails.  
                     2\. Discussing the design with the mentor and fellow Intern.  
                     3\. Implementing the decided design.  
                     4\. Testing the added changes.  
                     5\. Blog prompt: "Career opportunities".   </pre>

---------

9th week (Aug 1 - Aug 7) <pre>
                     1\. Taking feedback from the mentors and incorporating changes.  
                     2\. Discussing design for the Mobile view of the website.  
                     3\. Create FTO issues.   </pre>

---------

10th week (Aug 8 - Aug 14) <pre>
                      1\. Implementing the design for the mobile view.  
                      2\. Testing the added changes.  
                      3\. Taking feedback from the mentors and incorporating changes.  
                      4\. Work on the resume.   </pre>

---------

11th week (Aug 15 - Aug 21) <pre>
                      1\. Completing any backlog from the tasks above if any.  
                      2\. Discuss the progress with the mentors.  
                      3\. Create FTO issues.   </pre>

---------

12th week (Aug 22 - Aug 26) <pre>
                      1\. Wrapping up any incomplete tasks.  
                      2\. Writing the "Final project progress blog post".  
                      3\. Working on the documentation.    </pre>

### Needs

I would like to get constant feedback on my work from my mentors. I need their help and guidance to move forward with my tasks. 

### First-time contribution

My first contribution to Public lab:  https://github.com/publiclab/infragram/pull/246
<br>

Issue opened: <br>
1. https://github.com/publiclab/infragram/issues/386 <br>
2. https://github.com/publiclab/infragram/issues/389 <br>

PR's <br>
1. https://github.com/publiclab/infragram/pull/246 <br>
2. https://github.com/p-v-o-s/infragram-js/pull/85 <br>
3. Closed PR: https://github.com/publiclab/infragram/pull/393 <br>
  
Recent Activity:  <br>
https://github.com/search?q=commenter%3ASHIVANGISINGH1+org%3Apubliclab

---------

### Experience

I am interested in various web-related technologies. I have worked with the front-end and some back-end techs. I am familiar with Html, CSS, and javascript, currently, I am also learning React. I have most of my projects in vanilla JS but I am familiar with Jquery too. As the project will use Bootstrap 4 for implementation, I have done some projects with bootstrap also. 

Last year I did one Full stack project, so I am familiar with the UI/UX design, restful routing, npm packages and more. I have found my interest in web development and still learning about it. I have started my journey with UI/UX recently and was fascinated by the idea of designing. All of my projects can be found on [Github][16]. 
<br>
I started my open source journey at Hacktoberfest last year, from then I wanted to learn more about open source and how it works. I loved the community interactions, healthy competition, making contributions and learned a lot from them. I would want to keep contributing and learning with open source.   

---------

### Teamwork

I have completed my 2 months internship as a front end web developer, working with the entire team I realised the importance of team work. I have actively participated in hackathons this year. I am also a active member of my college technical society, at which I have organized many tech events as well as taught basic computer fundamentals with the team. In open source I found Infragram which has a great community so I decided to contribute and work with them.

---------

### Passion

Last year I worked on the topic of smart farming. Just reading about it and understanding how different countries like North America, Israel, Mexico are practising it and helping the people. My interest in smart farming was the reason to choose this project. I liked the idea how Public lab helps people to easily capture infrared images and see the condition of their plant health. Apart from that I also like the Public lab community. I have always got reply of my doubts and everyone is helpful and supporitive. 

### Audience

The Infragram project aims to help the small farmers, reaserschers, environmental activists and more. As the project is open source it provides the opportunity for others to help improve it. Working with this project I want to help people who are new to open source, how can they get started and make their contributions.

### Commitment

The time commitments are mentioned above in the timeline. I will be not present for a week when I have my exams, apart from that I can work all the weeks. I can give 40+ hrs a week as this internship will be my only priority. I do not have my college from 1 June to 16 August and I will be available from 9:00 AM IST(3:30 AM UTC) till 1:00 AM  IST (7:30 PM UTC) . My college will open around in September. So I will have three months (apart from my semester exams) free from any interruptions.  

  [1]: https://www.linkedin.com/in/shivangi-singh-4686b5206/
  [2]: https://infragram.org
  [3]: https://infragram.org/
  [4]: /i/46348.png "overlfoe.png"
  [5]: /i/46347.png "label.png"
  [6]: /i/46333.jpg "IMG-20220421-WA0003.jpg"
  [7]: /i/46352.jpg "IMG-20220421-WA0007.jpg"
  [8]: /i/46311.png "Screenshot_2022-04-21_141251.png"
  [9]: /i/46312.png "presets.png"
  [10]: https://infragram.org/
  [11]: https://www.figma.com/file/JNo3ay7WwQM9SZJ28q7xZg/Infragram-UI-design-wireframe?node-id=0:1
  [12]: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
  [13]: /i/46313.png "help.png"
  [14]: /i/46314.png "ifrmae.png"
  [15]: /i/46316.png "footer.png"
  [16]: https://github.com/SHIVANGISINGH1