---
title: "Internationalize publiclab.org GSoC 2016"

tagnames: 'software, gsoc, coding, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827'
author: ZhanLiangUF
path: /notes/ZhanLiangUF/03-19-2016/internationalize-publiclab-org-gsoc-2016.md
nid: 12863
uid: 468876
cids: 14016,14024,14058,20434
---

![](https://publiclab.org/public/system/images/photos/000/015/147/original/undefined)

# Internationalize publiclab.org GSoC 2016

by [ZhanLiangUF](/profile/ZhanLiangUF) | March 19, 2016 22:01

March 19, 2016 22:01 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [coding](/tag/coding), [hidden:response](/tag/hidden:response), [gsoc-2016](/tag/gsoc-2016), [gsoc-2016-proposals](/tag/gsoc-2016-proposals), [response:12827](/tag/response:12827)

----

DISCLAIMER- Ignore image above. I can't seem to find a way to delete it.

**Name:** Zhan Liang

**Affiliation (school/degree**): University of Florida, Major in Biotechnology and Minor in Business Administration. Graduate in fall of 2017.

**Location (where you are):** Gainesville, Florida.

**Email**: Zliang@ufl.edu

**Phone: (if you prefer not to post it here, please email it to organizers@publiclab.org with a link to your application.)- **813-766-0288

**Project(s) you're working on or want to, i.e. Spectral Workbench or MapKnitter: **Publiclab.org

**Project title **-- the title of YOUR proposed project: Internationalize publiclab.org

****Project description **** Internationalize publiclab.org

**Abstract/summary (<20 words): ** Internationalization is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization.

**Describe the need your project fulfills:** 

So far, all publiclab.org have is the functionality to tag a post or wiki with "lang:es" for spanish, and then you can see the content in spanish. This works for other language too. Once internalization is in place, people can localize the footer, header, sidebars, menus, posting forms, and more. 

**How will your project meet this need:** 

Internationalize headers and footers and eventually create subdomains for each language.

**Timeline/milestones:**

Apr.22-May 9

•	Learn the skills require for the project.

•	Set up a slack for communication with my mentor.

•	Become familiar with internationalization gem.

May 10-June 6

•	Provide an array of languages that will be available.

•	 Each locale requires a file to store translations for the headers and footers.Create locale files using the root key, one for each language.

•       Will require help with the translations of each locale file.

•	Changing layout will be necessary because some text will be 2-3 times longer or shorter due to the translation. 

•       Add new views for the new locale files for the different languages. We can use the **translate** method that will accept one argument and look up the translation file regarding to the argument. 

•	Write unit/integration test for controllers/views/routes changed.

June 07-June 20

•	Add language-switching control to the menu using bootstrap's style and scripts.

•	Thus we will need new routes for changing the locale and most likely change in the settings controller.

•	We can go fancier by setting the locale based on the User’s Country, by using the gem ‘geocoder’.

•	Write CSS files for language switching control.

•	Write unit/integration test for the views/controllers/routes for the other language.

June 21- July 1(Midterm)

•	Submit code to mentor.

•	Evaluations.

July 2-31

•	At this point, all the links, buttons, labels, and menu items will be translated.

•	Translating user-generated content will be the most challenging thing to do.

•	Install Globalize gem. This gem uses a separate translation table, so we will have to modify which field we want to translate before migration.

•	Create appropriate migration for posts, and modify accordingly using the **up** and **down** method because globalize doesn't support change method.

August 1- August 23

•	Clean up CSS files, and try to move as much code from view to controller.

•	Submit code to mentor.

•	Mentor will evaluate our final code.






**What broader goal is your project working towards?**

Allowing publiclab.org to be accessed in different languages which will increase the amount of users.

**What resources will you need: people, documentation, literature, sample data, hardware if applicable:**

Will need people to do the actual translations, and need more specific documentation on internationalizing a website. 

Current documentation I have is -[ Rails Internationalization(I18n) API](http://guides.rubyonrails.org/i18n.html) by rubyonrails and [Go Global with Rails and I18n](http://www.sitepoint.com/go-global-rails-i18n/) by Sitepoint; [Geocoder documentation](https://github.com/alexreisner/geocoder)

**Setup 
Have you forked the relevant codebases? Installed them in a dev environment such as Cloud9.io? Need help doing so? Please provide a link to each of the above.**

Yes, I am using sublime text editor and have ruby and rails installed on my system. https://github.com/ZhanLiangUF/plots2

**Experience 
Describe your technical background; what languages you use, what projects you've contributed to before, links to GitHub or other code repositories or samples. Have you read the Contributor Guidelines at https://publiclab.org/wiki/contributing-to-public-lab-software and are you comfortable submitting pull requests?**

I have experience in Java, Ruby on Rails, and Swift. Github link: http://github.com/ZhanLiangUF. Yes I have read the contributor guidelines and I have submitted pull requests before so I am comfortable with them.


**Teamwork 
Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient.**

I am currently working on a iOS development team using swift. We are a group of three working on a car pooling application to get groceries. We work on separate user stories and push to a different branch and use github to merge our work. By working on our own for different features, I have come across many obstacles in which I was able to solve by using the power of google. 

**Expertise 
Would you describe yourself as especially good at or interested in some aspect of coding or problem solving, or open source science? Provide examples and links. Are you particularly suited to this proposed project?
**

I think I am a good problem solver. I did not come from a computer science background, so most of the time I had to solve my own problems without outside help when coding. Furthermore, I am suited for this proposed project because I speak two languages: Chinese and English, and understand the importance of internationalization of PublicLab. China's pollution is pretty bad from personal experience and I believe that internationalizing PublicLab to Chinese and other languages will benefit many people and the environment.


**Interest 
Do you have prior interest in or work towards open science or environmental justice goals?**

Being a Biotechnology major, I have learned a lot about environmental justice. I have a passion for software development and this is a great cause for my passion. 

**Audience 
Whom will your work serve? Lay users, other programmers, non-technical people or nerds? While exploring advanced techniques is great, we especially appreciate proposals which make technologies and techniques more legible and user-friendly to non-technical users.**

Internationalizing Public Lab will allow access to more users, especially users that don't know English. 

**Context 
What motivates you to do the proposed work? Do you also have coursework or degree related reasons for pursuing it? This wouldn't necessarily be a bad thing - if you are for example looking to explore work related to a thesis topic**. 

I want to meet new people and gain new experience by contributing to Open Source projects such as this one. Furthermore, I love the goals of Public Lab and would love for more user accessibility to Public Lab. 

**Ongoing involvement 
Explain how you intend to continue being an active member of your project and/or Public Laboratory AFTER the summer is over.**

I will continue to contribute to PublicLab. Internationalizing will take a while, especially if we want to do more than one language. Furthermore I would like to participate as a mentor after successful completion of my project. 

**
Commitment 
Do you understand this is a serious commitment, equivalent to a full-time paid summer internship or summer job?**

 Yes, I intend to commit full-time to this project.