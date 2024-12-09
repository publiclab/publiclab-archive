---
title: 'Rich Profile Pages on PublicLab.org - GSoC 2016'
tagnames: software, gsoc, gsoc-2016, proposal, response:12827
author: Franktank
path: /notes/franktank/03-10-2016/improving-user-experience-on-public-lab.md
nid: 12824
uid: 468625

---

# Rich Profile Pages on PublicLab.org - GSoC 2016

by [Franktank](../profile/Franktank) March 10, 2016 04:48

March 10, 2016 04:48 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2016](../tag/gsoc-2016), [proposal](../tag/proposal), [response:12827](../tag/response:12827)

----

**Name:** Franky Liang

**Affiliation (school/degree):** University of Florida, Bachelor of Science Computer Science

**Location (where you are):**Gainesville

**Email:** fliangz@ufl.edu

**Phone:** (if you prefer not to post it here, please email it to organizers@publiclaboratory.org with a link to your application.)

**Project(s) you're working on or want to, i.e. Spectral Workbench or MapKnitter:** publiclab.org

**Project title** : Improving user experience on public lab through implementation of profile tags

**Project description**

**Abstract/summary (<20 words):** 
     Improve organization of PublicLab through implementation of profile tags. 

**Describe the need your project fulfills:** 
     Implementing this feature allows users to tag profiles which is a highly requested feature.Also, writing test code will allow for refactoring of the application for more modern gem versions.  

**How will your project meet this need: **
     Adding profile tags is a largely desired request on PublicLab.It will also help improve searching and sorting implementations. Also, I will be focused on implementing user stories through TDD. I will write RSpec tests before developing features so future technical contributors to Public Lab will be able to refactor code with much ease. The test code will also help me refactor the application as necessary for upgrading gem version.

**Timeline/milestones:** 


**April 22nd - May 22nd**
Become accustomed to codebase of plots2
Connect with the community to see input on desired tags and features
Get to know my mentors and other contributors for GSoC in order to better communicate over the summer

**May 23rd - June 5th**
Begin by writing RSpec tests for features that rely on gem versions
Refactor code to allow for dependence on newer gem versions

**June 6th - June 19th**
Create profile_tag model and add to schema
Write tests for the profile tagging forms
Develop forms -> specs for form will be determined during community bonding time period

**June 20th - July 3rd**
Set restrictions on tags based on role of user
Add icons for users of different roles -> will get input from the community

**July 4th - July 17th**
Add methods to drupal_node.rb
Implement map and try other ways of acquiring user locations -> GoogleMaps API, geocoder, etc

**July 18th - July 31st**
Improve interface of forms, maps page, etc

**August 1 - August 15**
Optimize code and ensure it does not break through refactoring based on tests


  May 23 - June 20 (Mid-term) 
     Write test code for major functionalities that rely on gems
     Refactor code after updating gem versions 
     Create profile_tag model and add to schema
     Profile tagging form for users
          Location,role,topic,gear,skill, etc
     Set restrictions on certain tags based on role of user
          Admin, etc
  June 20 - August 23(Final week)
     Some user stories from before mid-term may roll over
     Add icons for users of different roles
     Implement better map and way of acquiring location
          GoogleMaps API
     Play with display of barnstars
     Use Angular/React to work on improving interface of application
          Improve navigability of website

     My initial plan of action is to write RSpec test code for all major functionalities of Public Lab. This will allow me to refactor code for upgrading gem versions and dependencies. Then I will work on implementing profile tags. I will implement all the listed user stories on https://publiclab.org/wiki/gsoc-ideas for Rich profile pages, and as I develop out the features, I will think of more ways to tag profiles for better organization of data. A good idea might also be to implement GoogleMaps API for maps and locations. After finishing the profile tags I will work on styling the application for a more pleasurable interface through AngularJS or ReactJS.


**What broader goal is your project working towards?** 
     Making Public Lab more friendly for users, technical or non-technical.

**What resources will you need: people, documentation, literature, sample data, hardware if applicable:** 
     Documentation on common tags that people would use. 
     If more sample data is needed, I will work on improving the seeds.rb file.
     Assistance reviewing RSpec test code to ensure desired functionalities are accounted for. 
     https://github.com/publiclab/plots2/issues/104 -> powertagging
     https://github.com/publiclab/plots2/issues/167  &&         https://github.com/publiclab/plots2/issues/265 -> barnstars
     https://github.com/publiclab/plots2/blob/master/app/models/drupal_node.rb#L235-L283 -> user.has_tag()
     https://github.com/publiclab/plots2/blob/master/app/views/notes/tools_places.html.erb#L4-L15 -> map, can use GoogleMaps API to improve?
    https://github.com/publiclab/mapknitter/blob/master/app/views/map/_new.html.erb#L29-L84 -> refactor code for better form implementation and add styling to css files
Reference searching and sorting to see how I can develop the profile tags to assist in optimization of functions
 https://github.com/publiclab/plots2/issues/317 - Additional sorts
 https://github.com/publiclab/plots2/issues/179 - Tags and pagination
 https://github.com/publiclab/plots2/issues/99 - Autocompletion
 https://github.com/publiclab/plots2/issues/308
 https://github.com/publiclab/plots2/issues/209 - Optimize search
 https://github.com/publiclab/plots2/issues/104 - Power tag

**Experience:**

**Describe your technical background; what languages you use, what projects you've contributed to before, links to GitHub or other code repositories or samples**
     I have experience developing with Ruby on Rails, HTML, CSS, Javascript, and Swift, sample work can be seen on my Github at https://www.github.com/franktank. 

**Teamwork**

**Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient.**
     I am working on a web development team at a local startup in Gainesville. I contribute about 10-15 hours a week. I participate by doing current tasks needed on our pivotal tracker. I have worked on developing the backend with Rails and cleaning up the front end with HTML/CSS/JS. Through this, I have gained a lot of experience writing test code as well. Also, I am on an iOS mobile development team of 3 people. We are currently building a carpool application. We divide the features of the application and then push branches to GitHub to merge. With each feature, we have to figure out how to implement it by ourselves. Whether it is implementing calls to Parse or using Google API for location requests, I do a lot of searching to find out how to get the features to work properly. 

**Expertise**

**Would you describe yourself as especially good at or interested in some aspect of coding or problem solving, or open source science? Provide examples and links. Are you particularly suited to this proposed project?**
     I am interested in applications development using Rails, example projects can be seen on my GitHub. I have worked on implementing some features that are desired for Public Lab already.

**Interest**

**Do you have prior interest in or work towards open science or environmental justice goals?**

     I have prior interest in environmental justice but I have not actively pursued this interest. 

**Audience**

**Whom will your work serve? Lay users, other programmers, non-technical people or nerds? While exploring advanced techniques is great, we especially appreciate proposals which make technologies and techniques more legible and user-friendly to non-technical users.**

     My work will serve all users of Public Lab. Making the website more organized and friendly will lead to a better experience for non-technical users and technical users.

**Context**

**What motivates you to do the proposed work? Do you also have coursework or degree related reasons for pursuing it? This wouldn't necessarily be a bad thing - if you are for example looking to explore work related to a thesis topic.**

     I am interested in contributing to open source projects using Ruby on Rails. I enjoy developing applications using RoR in my free time. I would like to use my experience with Rails to further assist projects such as Public Lab. Public Lab interests me because it connects communities together to bring awareness of environmental justice. 

**Ongoing involvement**

**Explain how you intend to continue being an active member of your project and/or Public Laboratory AFTER the summer is over.**

     I plan on being an active member by periodically maintain the source code of Public Lab. I plan on being a mentor for others interested in contributing to Public Lab by guiding them through my own experiences. I also intend to seek out further feature requests to implement in order to continue the development of Public Lab.

**Commitment**

**Do you understand this is a serious commitment, equivalent to a full-time paid summer internship or summer job?**

     Yes. I intend to contribute atleast 40 hours a week to Public Lab.