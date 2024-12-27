---
title: "Advanced Searching and Sorting Tool for publiclab.org"

tagnames: 'software, gsoc, coding, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827, rich-search, first-time-poster'
author: Ujitha
path: /notes/Ujitha/03-12-2016/advanced-searching-and-sorting-tool-for-publiclab-org.md
nid: 12837
uid: 467748

---

# Advanced Searching and Sorting Tool for publiclab.org

by [Ujitha](../../../profile/Ujitha) | March 12, 2016 12:24

March 12, 2016 12:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [coding](../tag/coding), [hidden:response](../tag/hidden:response), [gsoc-2016](../tag/gsoc-2016), [gsoc-2016-proposals](../tag/gsoc-2016-proposals), [response:12827](../tag/response:12827), [rich-search](../tag/rich-search), [first-time-poster](../tag/first-time-poster)

----

Name: T. U. R. Perera

Email: ujithaperera1@gmail.com

IRC nick: Ujitha

LinkedIn profile: https://lk.linkedin.com/in/ujithaperera

Location: Colombo, Sri Lanka (GMT +5:30)

Education: Bsc(Hons) in Information Technology, Faculty of Information Technology, University of Moratuwa.

Phone: +94710573293

Project :  PublicLab.org - Search and sorting

Project title - Advanced Searching and Sorting Tool

**Project description**

##Abstract/summary (<20 words):
Developing a service (set of classes within the project) for searching and sorting to output advanced nested results by prioritising tags and power tags. 

##Describe the need your project fulfils:
As describe in (link for issue), there is major issue to search among profile contents. Therefore search must expand to cover all the possible search result outcomes in the system. And also when data in the database getting larger, then occurs the requirement of a efficient sorting mechanism. with difficulties of having sorted, well formatted information from the system developing other tools and features should not be prioritise. Because public lab is all about knowledge. knowledge should deliver fast and effective manner. therefore all the tags should be sorted according to any pattern that user request. Such as alphabetically, date wise etc. And with effectiveness of the sorting system, it’s big support for users and also for admin board to sorting based activities. such as removing inappropriate contents, spam removals, modify autocompletions. 

##How will your project meet this need:
According to my study,  I saw that searching logic is written in the “app/controllers/search_controller.rb”. We can develop the next features of the search in this same controller but I would like to suggest to move this code to several classes as a service for the implementing  and development ease. Then we can reference those searching and sorting methods from the search controller or any other controller (for future development requirement) 

before the developments of searching methods, have to have sufficient study about possible data retirements from the system and how often these queries get triggered. With this information we can develop good mechanism(s) by starting zero using Active Record query interface or we can use supportive gems like [ransack](https://github.com/activerecord-hackery/ransack), [squeel](https://github.com/activerecord-hackery/squeel), [sunspot](https://github.com/sunspot/sunspot). But we have to check for conflicts that generate with the current plots2 system before proceed. 

After the search result retirement we can restrict these data and order them according to user required parameters. This also can be developed with support of  the using gems like [mongoid](https://github.com/mongodb/mongoid). we can add all the customizations to suite “Search and sorting” idea requirement. 
		
##Timeline/milestones:

[![Screen_Shot_2016-03-12_at_3.34.33_PM.png](//i.publiclab.org/system/images/photos/000/014/771/large/Screen_Shot_2016-03-12_at_3.34.33_PM.png)](//i.publiclab.org/system/images/photos/000/014/771/original/Screen_Shot_2016-03-12_at_3.34.33_PM.png)


##What broader goal is your project working towards?
with the increment of users and research notes searching and sorting process might get slow. Therefore I planned to make open variables to connect another controller or class. In future we can implement new technologies without much modification to existing code base. 

And also with the range of data we have, there may be a requirement to drop relational databases and go for nosql or objects oriented databases. at this scenario also our searching and sorting should function properly by using suitable adaptors to our system.

##What resources will you need : 
Definitely I need more dummy or live data of the system than seeds file provides. 

Documentations of technologies that I’m going to use and research papers about data searching and sorting algorithms. 

Need guidance from PublicLab director board and from my mentor.  

##Setup:
Yes I have forked the publiclab/plots2 repository and I have a running version in my local. And I pulled all the updates with remote repository.

[cloud9 development environment](https://c9.io/ujithaperera/plot2)

[Forked repository](https://github.com/ujithaperera/plots2)

##Experience :
Before I attend to university I practised java technologies and mySQL as a database server. In Java I have very good knowledge about java SE developments and Java EE developments. I learnt fundamental web building blocks from java web applications and spring framework. In my university level I move to ruby and Rails as a web development framework. 
I have started web development since 4 years. I have come a long way since. I have experience in technologies such as Ruby, Java, JavaScript, HTML, CSS, GIT and frameworks/libraries such as Java SDK,  Android SDK, Spring MVC, Hibernate, Ruby on Rails, jQuery, jQuery UI, Backbone.js etc. 
I also managed to work part time company called [Vesess](vesess.com) which is specialized in web application development, during the 2nd year of my undergraduate course. I mostly worked with technologies like Ruby, RoR, MySQL, GIT, Javascript etc.

In this time period I developed [HappyInvoicing](http://104.236.212.50) by using ruby on rails and developed few modules for the project called [vgo](https://app.vgodispatch.com) which is the main backend app Sri Lankan taxi service called "vgo" in Vesess.  
And now I am an Intern at Vesess and contributing [project Hiveage](hiveage.com) by improving its test cases 
Yes I went through the contributor guidelines and I have good knowledge about Git and I am very much familiar with both GitHub and GitLab. 

##Teamwork :
As a university student teamwork is not a strange thing to me. In all the academic projects we work as a team. In my first year we developed an automated gas leakage detector with another five students and in my second year we developed a software project to store small java apps and sell them to users. In both of these projects, they were one year projects and having five members in the team. So in experience I know that there are barriers, failures and conflicts when working in with a team, and also with my experience I know how to manage difficulties that we have to face and how to communicate with team mates with motivative manner. As I mention above I'm glad to say that with this experiences I worked with professional software developing team in the industry and I was able to contribute successfully to those SaaS projects developed using Ruby on Rails with my teamwork skills.

##Expertise :
I have experience in nested sql queries with rails and worked with postgreSQL also. since rails is independent from database server I can use my knowledge to write searching and sorting algorithms for the current requirement

##Audience :
My searching and sorting service serve to all the users in the publiclab.org and to all the admins in the system. My solution provides very user friendly searching experience to the user and tag sorting can be done by very simple clicks. therefore any kind of user can take the advantage of this service. no any technical background needed. And through the API any authorised user can search data from the publiclab.org knowledge base.

##Context :
Free and open source means that you are free to explore it, develop it, adjust it or distribute it, unlike the proprietary software. It’s a great concept to share knowledge and resources among people without commercial or any other restrictions. Long story short, open source is my passion now. I’m more interested in web applications than desktop applications. When I was developing web applications I noticed that almost every library/framework that I used is open source. That’s how I became interested in open source community

##Ongoing involvement:
These are my previous contribution to the project 

[https://github.com/publiclab/plots2/issues/383](https://github.com/publiclab/plots2/issues/383)

[https://github.com/publiclab/plots2/issues/407](https://github.com/publiclab/plots2/issues/407)

And I was able to find the mysql12 version issue and I notified it to the developer group through plots2-dev group. And was able to fix this issue with mentor Jeffery Warren.

Its pleasure for me to work team like Publiclab. I like to join Publiclab journey and contribute to the project [plots2](https://github.com/publiclab/plots2) specially from backend developments. After the GSoC event I research more about searching and sorting and hope to improve the system time to time with the help of the community. It's very useful for my academics in the university and great experience for my life.

##Commitment:
Yes I Understood that Importance of this project and I can spend required time period to complete particular task without being time oriented. and since my mentors and me are in completely different time zones I can keep my communication with my mentor organization without any interruptions and delays.