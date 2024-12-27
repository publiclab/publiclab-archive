---
title: "Omniauth and Gamification of contributing to Public Lab"

tagnames: 'software, gsoc, gsoc-2017, soc, soc-2017, rgsoc-2017, soc-2017-proposals, response:13975, first-time-poster'
author: vaibhavgeek
path: /notes/vaibhavgeek/03-28-2017/omniauth-and-gamification-of-contributing-to-public-lab.md
nid: 14066
uid: 504058
cids: 16517,16522,16523,16524
---

# Omniauth and Gamification of contributing to Public Lab

by [vaibhavgeek](/profile/vaibhavgeek) | March 28, 2017 19:03

March 28, 2017 19:03 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [gsoc-2017](/tag/gsoc-2017), [soc](/tag/soc), [soc-2017](/tag/soc-2017), [rgsoc-2017](/tag/rgsoc-2017), [soc-2017-proposals](/tag/soc-2017-proposals), [response:13975](/tag/response:13975), [first-time-poster](/tag/first-time-poster)

----

## **

Proposal for Google Summer of Code 2017**

# Personal Information

## **

Name: Vaibhav Maheshwari

Email: [vaibhav.dkm@gmail.com](mailto:vaibhav.dkm@gmail.com) 

Education: Integrated Master of science(MSc) in Maths(2015-20),

Sardar Vallabhbhai National Institute of Technology, Surat

India

Time Zone: Indian Standard Time (GMT +5:30)  
  

Website: [www.vaibhavgeek.tech](http://www.vaibhavgeek.tech)

Github: [https://github.com/vaibhavgeek](https://github.com/vaibhavgeek)

LinkedIn: 

[https://www.linkedin.com/in/vaibhav-maheswhari-407aaa88/](https://www.linkedin.com/in/vaibhav-maheswhari-407aaa88/)

Twitter: [https://twitter.com/vaibhavgeek](https://twitter.com/vaibhavgeek)  
**

# About Me

## **

I am passionate about programming and have been programming since I was 14 years old. I have tried to build 2 startups in last 5 years and they have won few awards. I have been developing in Ruby on Rails for last 2 years now.   

Previous Projects

I've done some long-term projects with my time. 

- [https://github.com/vaibhavgeek/edunova](https://github.com/vaibhavgeek/edunova): Edunova is a social, game based and community based learning platform which enables student to connect with each other and learn through games. It uses Machine Learning to personalize the learner's experience. This application was built on Ruby on Rails and Bootstrap. 
- [https://github.com/vaibhavgeek/friendyoke](https://github.com/vaibhavgeek/friendyoke): Friendyoke was a social networking website which enabled people to connect with each other. I made this website in the year 2008, at that time in India, facebook was still gaining traction and other social networking websites were not even known. This website was built on top of ASP.NET, C# and Telerik Tools.  

- [https://github.com/sumedh123/ihack](https://github.com/sumedh123/ihack): This project was about using smart contracts and blockchain to create a research journal instead of traditional system of publishing of research papers. ([Link to Blog post](http://www.vaibhavgeek.tech/2017/01/blockchain-based-research-journal.html))   

More projects can be viewed on my github profile mentioned above.**

# Project Description 

## **

There are multiple themes I would like to explore with my project. They are as followed. 

1. Facebook, Google, Twitter Omniauth Login.   
This would enable users to sign in and sign-up with single click and would save them the trouble of typing the username and passwords every time. I have had some experience with omniauth and login with social networks feature in website.  ![jIbhH.png](https://lh3.googleusercontent.com/r1YCRc-06czERQDa8O_ahTO3nAohaX4N6O3M_vZvlY_oRJ0WUmE_3i9cYgR2UwnN-I8diyopSOvb7Wfkp7_01dCVPRrvNCHHiFXWTRRLbxzVeFHul3iLumbG6yEel00TE6kU2xHi)

This approach is clumsy and is most commonly used everywhere. I allows direct access to user with username and password. Below is an image on how I would implement it.   ![CHsIH.png](https://lh5.googleusercontent.com/L5V2SBRFCOyJ7T4VfFqCIC00b_mUK37ByTCPdvR34cDrJZRSqooXQEmnOI2bz65tWeSqZgYQCiCSmK37SbPOv5S2sEEiwJTlEWJ0_rgTIZXWutlDF9QxH7suIY-oLvI_79JXLkOw)

This is an ideal approach that's how I would like to proceed with the problem.   

2\. I would also like to work on Gamification of contributing answers, comments to the publiclab. It would be deeply integrated with the profile of the person. Each person would receive medals based on 

- the number of likes on each answer authored by the user
- number of answers written by the user
- number of likes on a question asked by the user
- number of questions asked by the user
- number of comments by the user. 
- other contributions to the website by the user.

The criteria for receiving the medals would be clearly listed on the webpage.  This would enable further engaged contribution. Top contributors can be listed on the home page with something known as "hall of fame". (debatable) **

# Why do I want to do this project?

## **

I have been involved in creating social platforms and working on educational platforms for the people. One of the most important things that I have realized is that any platform thrives only because of active engagement of people. I have closely studied tactics applied by different organizations to retain users on their own websites. PublicLab has the benefit of organizing physical meetups which thus enables PublicLab to create a curated and exclusive set of people enthusiastic about serving a cause. My aim of doing this project to enable a proper channel of communication on this curated platform. 

  
My previous projects may have gained some popularity in startup expos but failed miserably to gain traction real-time. Working on a project which has community building based on ground traveling and creating an architecture for them which would be used by loads of people is something that excites me a lot.   
**

# Timeline

## **

I plan to allocate at least 40 hours per week on this project and share weekly progress updates with the community.  
  

Pre SOC period: I would work on understanding authlogic and omniauth and thus improving some of the features on the website. I plan to create omniauth social login along with authlogic.  

May 5 -- May 30: I plan to allocate most of the time understanding the architecture, and working on improving the personal profile page of the user such as edit profile, completion of user profile and forgot password scenario if the user has signed up using a social network.    

May 30 -- June 30: I plan to allocate at least 40 hours per week on this project and share weekly progress updates with the community. This would include start working on gamification of contribution system.   
  

July 1 -- July 24: I plan to allocate at least 40 hours per week on this project and share weekly progress updates with the community.  

July 24 -- August 21: Completing the gamification of contributions by the users on the profile of the person.   

August 21 -- September 5: Adding the final documentation and tests, and cleaning the code. Looking into the community feedback and make sure everything is in place and is working. Preparing for End-term evaluation.  
  
**

# Do you have any other commitments during the summer of code period (i.e. between June and August)?

## 

No, I don't have any commitments between 23 May, 2016 to 30 Aug, 2016\. 

### Abstract/summary (<20 words):

### Problem

_What problem does your project solve?_

### Timeline/milestones

_Break your project up into small projects -- one per week!_

### Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_

### Setup

_Have you forked the relevant codebases? Installed them in a dev environment such as [Cloud9.io](http://Cloud9.io)? Need help doing so? Please provide a link to each of the above._

---------

### Experience

_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples._

_Have you looked over our welcome page and are you familiar with how to make your first contribution? Have you already?_

---------

### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

---------

### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

### Audience

_Whom do you want your work to help? We especially appreciate proposals which make technologies and techniques more welcoming and friendly to those who've often been excluded._

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_