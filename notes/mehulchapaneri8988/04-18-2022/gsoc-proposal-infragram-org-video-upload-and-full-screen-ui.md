---
title: 'GSoC"proposal: Infragram.org  video upload  and full-screen UI '
tagnames: software, gsoc, soc, first-time-poster, gsoc-2022, gsoc-2022-proposals, 376github, 228githubpubliclab
author: mehulchapaneri8988
path: /notes/mehulchapaneri8988/04-18-2022/gsoc-proposal-infragram-org-video-upload-and-full-screen-ui.md
nid: 30475
uid: 792355

---

![](https://publiclab.org/public/system/images/photos/000/046/063/original/LinkedIn_cover_-_1.jpg)

# GSoC"proposal: Infragram.org  video upload  and full-screen UI 

by [mehulchapaneri8988](../profile/mehulchapaneri8988) April 18, 2022 13:01

April 18, 2022 13:01 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2022](../tag/gsoc-2022), [gsoc-2022-proposals](../tag/gsoc-2022-proposals), [376github](../tag/376github), [228githubpubliclab](../tag/228githubpubliclab)

----

## About me

Name                  : Mehul Chapaneri 

University          :  LJ Institute of  Engineering and technology

Course               :  BCA (Bachelors’s in Computer Application)

Location             :  India, Gujarat, Ahmedabad

Language           :  English, Gujarati , Hindi 

Timezone            : Ahmedabad,Gujarat (GMT+ 5:30)

Connect With me :  Github  ,  Linkedin  

Email                   :  mailto:mehulchapaneri8988@gmail.com

Gsoc Full time    : yes 

Pursuing Bachelor's degree in Computer Applications at LJ university I am passionate about learning Open Source real-world projects. This is my first-time Contributing open source I enjoy Contributing to open source organizations wholeheartedly. I am already proficient in (C, Javascript, HTML, CSS,  ) or with a new technology that I have to learn as I build the solution. My semester will complete in late April leaving me enough time to get ready for my GSoC project. If I am selected, I shall be able to work around 40 hrs a week on the project, though am open to putting in more effort if the work requires it.

    **Why Public Lab?**

I was seeking to do a challenging project this summer the Google summer of code 2022 provides the perfect opportunity after Going through the organization list GSOC 2022 the public lab infragram: online infrared image analysis in the javascript, HTML, CSS project offered a perfect match. I have contributed to other open-sour organizations; however, after reviewing their project ideas I decided that I should focus on the Public lab project. Once this decision was made after reaching out to the public lab community. it prods to be a good fit for reaching my project Goals. Becoming a part of the Public lab community not only for Gsoc but, In the future as well, is planned While being very well versed with the application stack that Public lab employ will give me a head start learning curve it also allows for a more immediate impact on the overall Public lab mission.


## Project description

Public Lab is a small non-profit which supports communities facing environmental problems. Our work involves open-source hardware, developed collaboratively across our network of community groups, environmental advocates, scientists, and organizers -- and the software we create supports their work in collecting, analyzing, and understanding environmental problems. The infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. Infragram.org                              


The project  About Infragram.org full-screen UI and video upload intrigues me, here is an idea on how to go about this project :- 

Synopsis :

        Infragram.org enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam.



### Abstract/summary (<20 words):

This project aims to make the user experience more enjoyable by fixing or tweaking aspects of the user interface. These changes could also be helpful for users exclusively using a keyboard because of the reduced item count and UI changes.



Technical Details :
### Problem
we need to aim for it to be both user-friendly as well as developer-friendly. Both of these revolve around how well the Interface of the application is For a user.
 There are other issues as well. For example, the contents of the footer are not center-aligned, whereas the rest of the application is center-aligned. There is uneven padding and the fonts used are not user-friendly.
The color is compatible with each other but does not get along well enough.
The application is currently not responsive and this is a major problem.
Allow drag and drop of a video, which will play on loop and have controls to scroll through, pause, etc.
 The application currently has a major problem as can be seen :
  [![Desktop_-_1.jpg](/i/46012)](/i/46012?s=o)

Mockup/solution

my approach, I've tackled all the 4 major changes suggested in the idealist:
(https://publiclab.org/wiki/gsoc-ideas#Infragram.org+full-screen+UI+and+video+upload)

Allow cross-browser drag-and-drop on the entire page instead of just selecting an image
Design a new interface (using Bootstrap 4; the current version is Bootstrap 3) for Infragram.org which is full screen with a toolbar, solicit and incorporate input from the user community
Add a popup “Welcome” modal box which guides your first few steps based on the tutorial at
Move the Q&A feature into a Help menu.
 
 Mockup Solution  here:  
[![1.jpg](/i/46017)](/i/46017?s=o)





2 picture link:
[![2.jpg](/i/46013)](/i/46013?s=o)

3 picture link:
[![3.jpg](/i/46019)](/i/46019?s=o)













 4 Picture link:
[![4.png](/i/46018)](/i/46018?s=o)
In these photos, we can see Allow cross-browser drag-and-drop on the entire page instead of just selecting an image to many features that enable.
5 picture link: 
[![5.jpg](/i/46025)](/i/46025?s=o)
 





### Timeline/milestones 



Pre-GSoC Period - Till 20th May:-
Understand the relevant parts of the interface and try to figure out what the final product should look like, how many and what kind of views should be made, etc.
Solving already opened issues related to the project.
Write a blog and post it
Understanding the idea and getting doubts resolved as soon as possible.
 
Community Bonding:-
Project Discuss with mentors and brainstorm some ideas which could have multiple approaches.
Get acquainted with the theInfragram interferes and the procedure that needs to be followed to submit the code and get it reviewed. Discuss with the team what exactly needs to be the problem statement.
               
 Week 1:-
Make corresponding UI changes.
Take feedback from mentors and improve.
Writing some tests to head start making something new.
 Week 2:-
make refinements to the toolbar, and solicit and incorporate input from the user community.
Create a repository for the new UI and start setting up the environment.
We can Discuss use cases for the updated mockup.
The workload has been kept less this week so that I can practice other crucial techniques such as adding test cases and understanding code review workflow.
.
Week 3:-
Communicate with GSoC/ Outreachy participant.
We can Set up the HTML and CSS or javascript interface for the mockup solution
Creat simple sections like  Navabar/ Footer 
Take feedback from mentors and improve.
 
Week 4:-
Set up other elements like the help bubble and the corresponding pop up
Add Javascript wherever needed
Week 5:-
Work on new cross-platform WebRTC video library for Safari iOS support
Document the UI changes to make hooking with JavaScript easier.
Implement the final mockup and start hooking it with JavaScript by collaborating with possible GSoC accepted student
 
Week 6:-
Work on accepting multiple resolutions of video.
Write Tests for the changes made.
Week 7:-
We can Allow cross-browser drag and drop.
Instagram to video Implement loop, pause, play, and sleek bar on canvas video (processing dropped video locally).
Fix bugs in features.
Week 8:-
In The UI hooks the Javascript
the cross-browser drag and drop find  the bug and fix it
Week 9:-
Make the mockup functional completely.
 And review these functions.
Week 10:-
I can Collaborate with the outreachy applicant intern to discuss the final Evaluation UI
Week 11:-
 Make a Responsive website.

Week 12&13 :-
Collect all pending PR and issues and complete this.
 
Contributions

show overall community involvement (like helping others): Search * Mehul89 https://github.com/mehul89
Open issues: #376Github Publiclab/infragarm
PRs :#229Github Publiclab/infragarm , #228GithubPubliclab/infragarm ,
 
 
Personal Inspiration for the Project 

 
I have been passionate about open-source projects since the day I started contributing. It's a healthy community that promotes mutual learning and growth. When I came across Public Lab, I was intrigued by the activity on its Gitter. I have never seen such a community that actively helps the contributors and promotes discussion. I am really excited to work on the idea. first came to know about it from their TED talk, which inspired me to read their research paper. It is my aim to be able to get this technology in the hands of as many people as I possibly can. I already had plans to work on an implementation of this technology during these summer vacations. I have a huge personal inspiration to get this technology out to the world, and you can be assured of my motivation to complete this project. I would be glad if I could do this as a part of GSOC along with the Public lab


### Experience

I am currently in the first year of BCA (bachelor’s in computer application) at  LJ Institute of  Engineering and technology this is the first time to apply in Gsoc and open-source but I like to contribute in :
HTML
CSS
Javascript
React.js
Php
C
I have worked with CSS libraries and frameworks like Bootstrap and Material UI as well.  I have been working with Figma for over a year now and it is my go-to tool for designing and implementing mockups.I have made high-fidelity prototypes using Figma as well.




### Teamwork
I have been contributing to various open-source projects which have taught me a lot about teamwork and how to 'code and collaborate' as well as build on the feedback given by the community.



### Audience

Most of Asia and Africa depend on staple crops and to make it easier for them to use such an application, it becomes really important to have a user-friendly interface that makes navigation easier. I have used a color palette that is less straining to the eyes and fonts that are impactful. The design overall is really focused to make Infragram a go-to stop for every beginner who wants to take benefit from its applications.

### Commitment

I will be dedicating the vacation to contributing to making Infragram a user-friendly application so that it can be utilized to its maximum potential. I have been a part of many college societies and clubs since my first year and managed my love for programming, academics, and club activities pretty decently. Since now I am in much fewer clubs, I will use the time management skills to structure my day such that I will be able to dedicate maximum time to Instagram.

###References




Most of the content including images and input video for this document has been taken from Youtube.







