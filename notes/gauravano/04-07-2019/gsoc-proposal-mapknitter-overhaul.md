---
nid: 18914
title: [withdrawn] GSoC Proposal: Mapknitter Overhaul 
path: public/static/notes/gauravano/04-07-2019/gsoc-proposal-mapknitter-overhaul.md
uid: 515081
tagnames: outreach,gsoc,software-development,gsoc-2019,soc-2019,lat:28.704059,lon:77.10249,soc-2019-proposals
---

# [withdrawn] GSoC Proposal: Mapknitter Overhaul 

## About me

**Name:** Gaurav Sachdeva

**Github:** [https://github.com/gauravano](https://github.com/gauravano)

**LinkedIn:** [www.linkedin.com/in/gauravano](http://www.linkedin.com/in/gauravano)

**Email:** [sachdeva.gaurav1997@gmail.com](mailto:sachdeva.gaurav1997@gmail.com)

**Gitter:** gauravano

**Affiliation:** Guru Gobind Singh Indraprastha University, Delhi, India

**Location:** Delhi, India

I am a passionate Web developer, Open source enthusiast, and a programmer. Currently, I am pursuing BTech in Information Technology from Bharati Vidyapeeth's College of Engineering (affiliated to GGSIPU), Delhi.I am in my final year.

## Project description

Implementing major features in Mapknitter such as Spam Management using Moderation system, Image management features to allow smooth interaction with distortable images and exports, image versioning, etc.

This project aims at solving the following problems:-

1. Solving the problem of Spam on Mapknitter - [https://github.com/publiclab/mapknitter/milestone/4](https://github.com/publiclab/mapknitter/milestone/4)
2. Image Management issues:

    2.1\. Ability to order images in the sidebar

    2.2\. Ability to select a collection of images to export

    2.3\. View of all images for a given region in maps

    2.4\. Ability to choose time bounding box (some kind of layer manager may be needed)

    2.5\. Refresh background images while dragging

    2.6\. Ability to upload new versions of an image

    2.7\. Ability to apply filters to images (with Image Sequencer) and upload a new version

    2.8\. Ability to select a set of images from which to generate an export

    2.9\. New templates and APIs to present images on any map, selected by a bounding box

    2.10\. Image versioning, locking and reverting

**Future goal (will solve it if time permits):**
Possible collaboration with the Synchronous Editing project below on API and UI additions

## Implementation

---------

### **Part I**: **Spam Management on Mapknitter**

---------

At [https://publiclab.org](https://publiclab.org), we have Spam Management System, which moderates nodes and comments created by new contributors, the system is pretty effective there. We can implement a similar system at [https://mapknitter.org](https://mapknitter.org).

#### Steps of Implementation:

**Step 1\. Fetching data from plots2 to mapknitter:** We need to fetch the user status from plots2 to mapknitter, so we don't have to change the user status by visiting production console.

As per current setup, we can only access 8 fields as allowed by Simple registration extension - [https://openid.net/specs/openid-simple-registration-extension-1\_0.html](https://openid.net/specs/openid-simple-registration-extension-1_0.html)

Options we have for fetching data:

- Making API
- Accessing role by another name like fullname which is allowed by Simple registration extension. But, yeah, it can confuse people and also fields are still limited.
- These fields are maintained in openid/extensions/sreg - [https://github.com/openid/ruby-openid/blob/a8e643d194acc35c7d5890109b14e0c6f590a1fe/lib/openid/extensions/sreg.rb#L6-L17](https://github.com/openid/ruby-openid/blob/a8e643d194acc35c7d5890109b14e0c6f590a1fe/lib/openid/extensions/sreg.rb#L6-L17)
We can try to override it and add more fields?

I think making API is good, as we can use it for other purposes and by this was we won't be playing with the code of `ruby-openid` gem.

**Step 2\. Implementing backend:** Making controllers and creating methods to change map/comment status when created, changing status to normal when approved by a moderator or marking it as spam.

**Step 3\. Implementing frontend:** Adding alerts, buttons, etc at maps page, dashboard, etc which would allow moderators to do the moderation work

**Step 4\. Writing tests:** Implementation of unit and functional tests for the feature

### **Part 2**: **Image Management issues:**

---------

#### 2.1 Ability to order images in the sidebar

I did some work on this one. Although, it seems complete but there's still improvement required.
<iframe src="https://www.youtube.com/embed/6nrq1xEDP2E" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>

#### 2.2 Ability to select a collection of images to export

I performed the exporting part which now allows multiple image exporting but the images I was able to export are non-distortable. I want some more guidance on this part, like i saw there was new Collection class implemented at Leaflet.DistortableImage, is it related to that?  
  
<iframe src="https://www.youtube.com/embed/-vNsuIWrHGQ" allowfullscreen="" width="560" height="315" frameborder="0"></iframe>

#### 2.3 Image versioning, locking and reverting

In mapknitter, we store Image in Warpable table, storing just image here. Now, each warpable has 4 nodes associated with them, these nodes exist in cases where image is placed on the map. 

Each node stores latitude and longitude of each corner of the image so if we have 4 nodes of a warpable we can show the image. When we move, rotate and do any operation on a image which changes it's cordinates then nodes are created for that movement. We generate nodes for all these movements but show only the lastest nodes when map refreshes. 

1. Versioning of warpable will include creating a revision table which would store all the data which a warpable table stores.

2. Creating a revision: We can have a button in toolbar which will allow us to create a revision.

As the place is less on the maps page, we can add a option in image toolbar to open a modal which would show all the revisions of a warpable and would let user to revert to any old version, etc.

![Screenshot from 2019-04-07 16-08-08](https://user-images.githubusercontent.com/20878070/55682768-7023d700-5955-11e9-957b-f3ebaec108fe.png)
 
3. Testing of this part will include creation of unit as well as functional tests for each of the functions we'll create for revision management. 

#### 2.4  Ability to choose time bounding box (some kind of layer manager may be needed)

Will be updated shortly...


## Timeline

---------

Due to the GCI summit, I wouldn't be available from June 9 - June 21\. I will compensate for this absence by starting the coding earlier in bonding period only as I am well familiar with community and the workflow.

Keeping in view the Outreach I will make some FTO issues, corresponding to some tasks and those tasks are highlighted by the ![example label](https://gh-label-svg.now.sh/label.svg?color=FFFF66&text=Outreach) tag

![timeline_1](https://user-images.githubusercontent.com/20878070/55668327-641d1400-5886-11e9-8889-6af043229de8.png)![timeline_2](https://user-images.githubusercontent.com/20878070/55668330-67b09b00-5886-11e9-98e6-35c102adf5cd.png)![timeline_3](https://user-images.githubusercontent.com/20878070/55668329-67b09b00-5886-11e9-803f-a0569aa8dc3f.png)


---------

## Outreach Plan

---------

Open Source is all about collaboration with others, and learning from each other so, I would love to involve other first-time contributors to my project. These are some of the things I have decided upon:-

- I have given some thought on the parts of my project and have marked those parts where I can open FTO issues or FTO- candidate. In my timeline, there is a Tags section, there I have used ![example label](https://gh-label-svg.now.sh/label.svg?color=FFFF66&text=Outreach) tag, for highlighting those parts. Also, at time of execution more issues from other parts can also be opened.
- I would write blogs, describing my journey with PublicLab, the importance of open source, and about my GSoC experience with PublicLab - selection in GSoC, work till that point, etc.

---------

### Needs

---------

I would require the guidance of mentors and help from other contributors is always welcome :)

---------

### Setup

---------

I have forked and built Mapknitter repository.

---------

## Experience

---------

I started my development journey from first-year of college with learning Android development from my college seniors. I have developed many Android applications, participated and been appreciated in Google Hackathon (part of Android with Applied CS course) for most creative app organized at Google, Gurgaon, India. In the second year, I started to explore Web development by started learning Ruby on Rails. My interest has grown in web development so I continued building more web applications and also started to learn more new languages and frameworks. Today, I develop web applications in React, Java, JavaScript, nodeJS, Wordpress, etc. My majority of projects are in Ruby on Rails and I prefer using it because any web application can be built faster in Rails than any other framework. Most of my projects can be found at my GitHub handle

I have also worked as a web developer intern in a biotech startup PurSolutions ([www.puresoluble.com](http://www.puresoluble.com)). PurSolutions is a
biotechnology company located in Nashville, TN which provides cytoskeletal proteins for research and industrial purposes.

I have also worked as a Teaching Assistant in a start-up, namely, Coding Ninjas ([www.codingninjas.in](http://www.codingninjas.in)) for their Data Structures with Java course.

I was Technical head of my college computer society BVPCSI, where I was responsible for organizing technical events, workshops, codelabs, etc. for college students.

I have completed GSoC in 2018 with Public Lab, mentored in Google Code-In and Outreachy. I have also completed Nagarro bootcamp in 2018\.

---------

## Contributions to Public Lab :

---------

I am contributing in the Public Lab community from past 1 year and 7 months. I have done many commits, opened many issues, reviewed and merged many PRs and looking forward to many more. I have been consistently active in the community, helped many contributors and have also welcomed many first-timers to the community. I am also part of the Public Lab reviewers and maintainers team. My contributions to the Public Labs are listed below :

Merged Pull Requests :
[https://github.com/publiclab/plots2/commits?author=gauravano](https://github.com/publiclab/plots2/commits?author=gauravano)

[https://github.com/publiclab/mapknitter/commits?author=gauravano](https://github.com/publiclab/mapknitter/commits?author=gauravano)

Issues opened by me :
[https://github.com/publiclab/plots2/issues?utf8=✓&q=is%3Aissue+author%3Agauravano](https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Agauravano)

[https://github.com/publiclab/mapknitter/issues?utf8=✓&q=is%3Aissue+author%3Agauravano](https://github.com/publiclab/mapknitter/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Agauravano)

---------

## Teamwork

---------

I have developed many projects in team, and always gave my best for the success of my team. I have played the role of team leader in most of the projects I was/am part of. I am big fan and regular participant of hackathons as they push one to show their skills in limited time as well as train one to be a good team player.

I was technical head of [BVPCSI](https://www.facebook.com/bvcoecsi/) so been regular in organizing tech events, codelabs, etc., this position also helped me to become a good team player and leader.

I have also successfully completed GSoC with Public Lab in 2018\. And, currently I am Software Community Coordinator at Public Lab.

## Passion

---------

I love contributing to the open source communities and Open source events like Hacktoberfest, Google Code-In, Outreachy, etc. I like Public Lab because the members of community are very welcoming, helping and awesome. I got to learn so much here and looking forward to learn much more.

---------

## Audience

---------
1. I chose Spam management as the first part because as per current state of the website, it's very difficult to see a genuine map in bunch of spam, because anyone can create a map anonymously. So, Spam management will help us in maintaining the website content and preventing genuine posts from spam.

2. Image Management  will provide more functionalities to users. User can save the image revision, organize images in sidebar, export only those images which they like,etc.   

--------

## Commitment

---------

Yes, I understand that this is serious commitment equivalent to a full-time job. I will give my best in performing each part of the project and also try to help other community members and newcomers as much as possible. I would love to contribute to PublicLab community even after the summer as I have learned so much here.