---
nid: 15859
title: GSoC proposal: Card UI/UX Implementation v2 & Bootstrap 4 Upgradation
path: public/static/notes/amitsin6h/03-04-2018/gsoc-proposal-card-ui-ux-implementation-v2.md
uid: 515111
tagnames: software,gsoc,soc,response:13975,gsoc-2018,soc-2018,soc-2018-proposals
---

# GSoC proposal: Card UI/UX Implementation v2 & Bootstrap 4 Upgradation

---------

## About me

**Name:** Amit Kumar Singh

**Github:** [https://github.com/amitsin6h](https://github.com/amitsin6h)

**LinkedIn:** [https://www.linkedin.com/in/amitsin6h/](https://www.linkedin.com/in/amitsin6h/)

**Email:** [amitsin6h@gmail.com](mailto:amitsin6h@gmail.com)

**Blog:** [http://amitsin6h.wordpress.com/](http://amitsin6h.wordpress.com)

**Gitter:** amitsin6h

**College:** Marwari College Ranchi, Ranchi University

**Location:** Ranchi, Jharkhand, India

I am a Open Source Enthusiast, Researcher, Developer. Currently, I am a final year student pursuing my bachelors from **Marwari College Ranchi** which is affiliated with **Ranchi University**.

## Project description

###**_Part 1: Card UI/UX implementation_**

_I will be implementing card UI/UX design in the website this will give a great look and feel to the Public Lab website._

**Recent Activity / Posts Design**_Demo: [https://amitsin6h.github.io/card-design-publiclab/index.html](https://amitsin6h.github.io/card-design-publiclab/index.html)_

**Profile Design**_Demo: [https://amitsin6h.github.io/card-design-publiclab/profile.html](https://amitsin6h.github.io/card-design-publiclab/profile.html)_

**Question Design**_Demo: [https://amitsin6h.github.io/card-design-publiclab/questions.html](https://amitsin6h.github.io/card-design-publiclab/questions.html)_

**Question and Answer detail Design**_Demo: [https://amitsin6h.github.io/card-design-publiclab/qa-details.html](https://amitsin6h.github.io/card-design-publiclab/qa-details.html)_

###**_Part 2: Upgrading to Bootstrap 4_**

_Issue [https://github.com/publiclab/plots2/issues/1716](https://github.com/publiclab/plots2/issues/1716)_

_For this project I will also involve new contributors as most the place it would require class change in the html or some css change in code. This will also attract new contributors to solve the issue and help them to successfully make the PR._

Helpful links for upgrading to Bootstrap 4\.

_[http://getbootstrap.com/docs/4.0/migration/](http://getbootstrap.com/docs/4.0/migration/)_

_[https://goo.gl/PxVDCL](https://goo.gl/PxVDCL)_

_[https://genesisui.com/tools/bootstrap-4-migration-tool/](https://genesisui.com/tools/bootstrap-4-migration-tool/)_ _(On-line migration tool)_

_[http://demo.bootstraptor.com/bootstrap4/](http://demo.bootstraptor.com/bootstrap4/)_ _(On-line migration tool)_


_**Checklist**_

_**General Recommendations / Miscellaneous**_

_Make a branch called something along the lines of bootstrap-4 in the publiclab/plots2 repository. All PRs made for this issue and all related ones need to use that branch as a base and not master. That branch would be merged into master only when the migration would be complete, we would verify the results and optionally, bootstrap 4 comes out of beta._

_Fixing pagination_

_Fixing the navigation bar_

_**Deprecated --- Replace with modern alternatives**_

_Refactor all existing wells into cards._

_Refactor all existing panels into cards._

_Refactor all existing thumbnails into cards._

_Glyphicons, if any, should be replaced by other icons. Let's use only font-awesome for all our icons, they are good enough for most of our use cases._

_**Grid System**_

_Bump all grid sizes by one. (eg: sm becomes md, md becomes lg and so on)._

_Add support for new xs tier for improving support at smaller mobile/IoT devices._




### Abstract/summary (<20 words):

_I will be working towards implementation of Card UI/UX to Public Lab website and bring a great look & feel._

### Problem

_My project is trying to solve UI/UX of the website and will give a new look and feel to the Public Lab website._

### Timeline/milestones

_1\. First I will work with the \[[https://publiclab.org/home](https://publiclab.org/home)\] page, the place where we see "Recent community Activity". Implementing card design to it will give a great look. As am ready with the design it wont be difficult for me but I need to take care that the design is responsive._

_2\. Second I will work with the \[[https://publiclab.org/dashboard](https://publiclab.org/dashboard)\] page, the place where see "Activity". I will be implementing card design to it and for this also I will be using the same design which is used by the home page in the "Recent community Activity" so it wont be an issue in implementing._

_3\. Third the \[[https://publiclab.org/profile/](https://publiclab.org/profile/)\] user profile page. In this page I will be implementing card design as well as I will give dashboard like look and feel in profile page._

_4\. Fourth the \[[https://publiclab.org/questions/](https://publiclab.org/questions/)\] QA page and its detail view page. In this page I will be implementing card design to the QA page and also in the detail view of QA. I have also planed to shift the position of **\[Post an answer\] box** reason to do this is, If QA detail view pages has lots of answers and comments user would have to go to the bottom to answer that particular questions which has lots of comments and answers. And I think this will be a problem so planned to keep it on top. See the demo of **Question and Answer detail Design** for detail._

_5\.Fifth, after the part 1 is done. I will start my work towards bootstrap 4 upgradation. Upgrading to bootstrap 4 wont be a problem for me as I have great experience working with bootstrap._

\_

\_

_**First Phase:**_ **May 14, 2018 - June 15, 2018**

_May 14 - May 19: Create design for the Home page and Dashboard Page._

_May 20 - May 25: Create design for the Profile page._

_May 26 - June 5: Fetch the required data which is need to for Profile page design._

_June 6 - June 15: Check the responsive and fix bugs._

_Submit the First Phase._

\_  
\_

_**Second Phase:**_ **June 16, 2018 - July 9, 2018**

_June 16 - June 19: Create design for the Questions and Answer page._

_June 20 - June 24: Create design for the Questions and Answer detail page._

_June 25 - June 30: Check the responsive and fix bugs._

_**Complete first part of the project and start the second part**._

_July 1 - July 9: Increase Grid Systems._

_Submit the Second Phase._

\_  
\_

_**Final Phase**_: **July 10, 2018 - August 5, 2018**

_July 10 - July 15: Fix pagination and navigation bar._

_July 15 - July 17: Remove glyphicons and Use of font awesome._

_July 18 - July 20: Change labels and badges, and introduced the .badge-pill class to provide rounded corners._

_July 20 - July 27: Replace deprecated code to modern alternatives._

_July 28 - August 2: Feedback and fix according to it._

_August 3 - August 5: Review all the work done._

_Make the Final submit._

### Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_

_I only need Mentors guidance to do this project._

### First-time contribution

_I have made recent few contribution in Public Lab still their are few Pull Request which require reviews and merge and also will be making more contribution to Public Lab._

_Issues Created_

[https://github.com/publiclab/plots2/issues/2454](https://github.com/publiclab/plots2/issues/2454)

[https://github.com/publiclab/plots2/issues/2437](https://github.com/publiclab/plots2/issues/2437)

_Pull Requests_

[https://github.com/publiclab/leaflet-blurred-location/pull/120](https://github.com/publiclab/leaflet-blurred-location/pull/120)  
[https://github.com/publiclab/plotsbot/pull/94](https://github.com/publiclab/plotsbot/pull/94)  
[https://github.com/publiclab/plots2/pull/2515](https://github.com/publiclab/plots2/pull/2515)  
[https://github.com/publiclab/plots2/pull/2431](https://github.com/publiclab/plots2/pull/2431)

---------

### Experience

_It all started due to my passion and curiosity to learn new technology. I was in class 12th when I wanted to know how website are built and after finding the answer in google. I came to knew about blogspot, wordpress, other CMS, and also came to know how to make make website by coding. Then I started to learn HTML & CSS, Javascript, Jquery and this is how learnt website development. Same time during the website development I came across to factors Static website and Dynamic website this helped to learn server side programming language Python and PHP was my first server side language that I learnt. After this I got curious to know how android apps work and this curiosity pushed me towards Android development and then I started to learn Java and also created few Android apps. During the android development I also came to know about json data type. I have also worked with few startups and companies from my area Ranchi, Jharkhand. I have worked as Software developer. Technologies that I have used and worked with are: Ionic for Hybrid App development, Android Development, Python, PHP, Java, Ruby, Ruby On Rails, Nodejs, Fullstack development using MEANjs, HTML & CSS, Javascript, Frameworks like Django and Codeigniter, Hybrid software development using Nodewebkit._

_Below are few links which shows my experience, love towards open source_

_[https://github.com/amitsin6h](https://github.com/amitsin6h)_

_[www.c-sharpcorner.com/members/amit-singh262/](http://www.c-sharpcorner.com/members/amit-singh262/)_

_[http://amitsin6h.wordpress.com/](http://amitsin6h.wordpress.com/)_

---------

### Teamwork

_I have worked with few startups and companies and we used to work in team when the project was assigned._

_Their are few projects which I worked with someone whom I don't even know , It was the first Government Hackathon which I participated but on the day of hackathon those who were single was asked to form a team and I was one of them and after that we formed team of 2-3 and we discussed lots of idea for our app that we were making, during the time lots of things happened and I noticed that in a team work one should never think negative ,nor use such words which demoralize any team team member. We should always try to motivate and we should never lose the hope, and that Government Hackathon we came in Top 10\. Second hackathon we came third and in third hackathon we came first ._

_I have been also contributing to other open source project and also volunteering some of the organization and what ever the work is assigned we do it in team. I have also organized successfully events and workshops with my team._

_This how understand the meaning teamwork._

---------

### Passion

_The first time I visited Public Lab and I found no new fto issues or beginners friendly issue but I wanted to start my contribution with Public Lab so made comment that I don't see any open fto or beginners friendly issues and people of Public Lab are great they helped to make my first contribution and yeah Jeffery Warren tagged me whenever their was new fto based issue and helped me to make contribution to Public Lab projects. I see Public Lab very supporting and friendly community._

### Audience

_So as my project is mostly based on UI/UX designing and we see people like love to use app or website which has great UI/UX and I hope to make the Public Lab website more amazing with my UI/UX skills. I see in most of the pages specially on the profile page when their is lots of activity and post its does not get readable and I hope to solve this issue from the website. I will be also trying to improve the UI/UX of the website as far as possible._

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

_I understand that this is a serious commitment and assure you that I
will complete the work, also once am done with the card design. I would
love to work in complete improvement of UI/UX of Public Lab website, hope to bring a
great look and feel to the website._