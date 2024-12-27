---
title: "Outreachy proposal: New Dashboard Implementation Project"

tagnames: 'software, first-time-poster, outreachy-winter-2020, outreachy-2020-winter-proposals, response:24687'
author: shreeti_019
path: /notes/shreeti_019/10-26-2020/outreachy-proposal-new-dashboard-implementation-project.md
nid: 24811
uid: 725955
cids: 27526,27540,27546,27549,27558
---

![](https://publiclab.org/public/system/images/photos/000/041/222/original/dashboard.png)

# Outreachy proposal: New Dashboard Implementation Project

by [shreeti_019](/profile/shreeti_019) | October 26, 2020 01:57

October 26, 2020 01:57 | Tags: [software](/tag/software), [first-time-poster](/tag/first-time-poster), [outreachy-winter-2020](/tag/outreachy-winter-2020), [outreachy-2020-winter-proposals](/tag/outreachy-2020-winter-proposals), [response:24687](/tag/response:24687)

----

# 

Name: Shreeti Upreti

Location: Kathmandu, Nepal

Timezone: (GMT+5:45)

Email: [shreeti.019@gmail.com](mailto:shreeti.019@gmail.com)

Github:[https://github.com/Shreets](https://github.com/Shreets)

**ABOUT ME**

I am a Software engineer from Nepal. I have worked 2 years as a Data Analyst, but as of late I find myself more interested in working with web applications and hence I have been transitioning for the same lately. I am passionate about making the web accessible and inclusive. Outreachy opens up great opportunities for the under-represented to step into the world of the open source community and to work and learn first hand with seasoned mentors. This is what motivates me to participate in this program.

I am currently a full stack developer intern at [Queeery LLC](http://www.queeery.com/) which is a web portal for promotion of queer events, gatherings, and meetups throughout the queer collective. I am responsible for Front end and back end development of the web application platform. I work mainly with MERN stack. My responsibilities range from bug fixes to working individually on new features. I have worked with tools like Puppeteer to pre-render client side rendered applications and Docker to deploy the application along with its libraries and other dependencies as a single package.

**STATEMENT OF MOTIVATION**

Not only do I find web application development interesting but it is my goal to make web accessible to users the best way possible. I realize that I can function most productively when I can use my skills in projects that aligns with my objectives. I am inclined to this particular project because the mission of Public lab resonates with my goal and also is correlated with my past projects/work.

## RELEVANT PROGRAMMING EXPERIENCE

[Queeery LLC](http://www.queeery.com/) : Full Stack Developer (Intern)

August 2020 - November 2020

- Front end and back end development of Queeery web application platform (ReactJS/NodeJS)
- Used tools like Puppeteer to pre-render client side rendered application.
- Dockerized the application to deploy the application along with its libraries and other dependencies as a single package.

## SKILLS

Technical skills

1. JavaScript
2. ReactJS
3. Python
4. Django (basics)
5. HTML/CSS
6. Bootstrap (basics)
7. SQL

### Development Environment :

- Ubuntu 20.04
- Visual Studio Code

## PAST PROJECTS

1\. Mutual-GitHub

web store: [https://chrome.google.com/webstore/detail/mutual-github/momfmojdajiafeagimngkaekoooihmcn](https://chrome.google.com/webstore/detail/mutual-github/momfmojdajiafeagimngkaekoooihmcn)

git repo: [https://github.com/Shreets/Mutual-GitHub](https://github.com/Shreets/Mutual-GitHub)

This is a google chrome extension used to see mutual GitHub followers when you visit a person's profile. This was developed entirely using vanilla javascript with HTML and CSS for styling. Here, I worked with authentication, javascript promises and github API that helped me learn my way around with core concepts of javascript.

2\. Vivid-Covid

website link : [https://shreets.github.io/Vivid-Covid/](https://shreets.github.io/Vivid-Covid/)

git repo: [https://github.com/Shreets/Vivid-Covid](https://github.com/Shreets/Vivid-Covid)

This is a web application that only shares positive news about COVID-19 recovery cases. It has been created using ReactJS and Mapbox. This project was built so I could implement what I had learned with React. I also learned how to integrate Mapbox with any project. I learned to work with multiple libraries at once. Sharpened my front end skills and most importantly this project got me started on a habit of diligently going through documentations to get grasps of newer concepts to solve any problems along the way.

3\. Binge

website link : [https://shreets.github.io/Binge/](https://shreets.github.io/Binge/ "https://shreets.github.io/Binge/")

git repo : [https://github.com/Shreets/Binge](https://github.com/Shreets/Binge)

This was my first React-app: A ReactJS based TV series recommendation application that suggests the users details of series they might want to. The application recommended movies and its details from an API at random to users. Besides react concepts like Hooks, I learned a lot about front end development and user interface design during this process. I developed interest and skills in UI development with this project.

4\. Pig Dice Game

git repo : [https://github.com/Shreets/Pig-Dice-Game](https://github.com/Shreets/Pig-Dice-Game)

Javascript based multiplayer dice game where the one who rolls dice up to 100 points first wins. The catch is that the points roll back to 0 when dice is rolled to 1\. However, there is a hold option to secure the points and update them on scoreboard so that they don't roll back when dice face shows 1\. Developing this game helped me sharpen my javascript and CSS skills.

## OPEN SOURCE CONTRIBUTIONS

## **Public Lab Plots2**

- PR#8558 : [https://github.com/publiclab/plots2/pull/8558](https://github.com/publiclab/plots2/pull/8558 "https://github.com/publiclab/plots2/pull/8558")
- PR#8650 :[https://github.com/publiclab/plots2/pull/8650](https://github.com/publiclab/plots2/pull/8650 "https://github.com/publiclab/plots2/pull/8650")

## **PROJECT DESCRIPTION**

New Dashboard Implementation Project

**Abstract/summary (<20 words):**

Implement newly designed Dashboard for [publiclab.org](http://publiclab.org/) to make it more user friendly and usable.

**PROBLEM**

Public Lab dashboard needs improvement in their design so as to best enhance it's presentation to first timers as well as the day-to-day users visiting the site. This is necessary to help users; technical and non-technical feel at ease to navigate through the features and pages that Public Lab has to offer.

Also, since the new dashboard design will display a list of topics, not posts, and some users will need a new place to see the full list of posts once the previous dashboard design is replaced, a new page that will display a list of posts needs to be implemented.

**IMPLEMENTATION**

**MILESTONE I : DASHBOARD IMPLEMENTATION**

PHASE I: DASHBOARD PAGE DESIGN AND RESPONSIVENESS:

The first task would be to get started with designing the dashboard page layouts. This phase would mainly consist of preparing basic layout for the dashboard while making sure it is responsive.

This includes

- designing topic card contents that hides on clicking the "X"
- drop-down menu display on clicking the three dots icon in the topic card.
- Links and buttons that redirects to more posts/topics pages or all post pages
- Alert message notifying the pages the users have followed/un-followed
- Collapsible "Follow more topic" bar with topics buttons
- Popup to pin users location upon clicking "Add your location" button
- Search bar to search for desired topics![image description](/i/41223.png "new_dashboard.png")

The designing part will be done while keeping responsiveness of the page into account.

![image description](/i/41226.png "mob_view.png")

**PHASE II: API INTEGRATION**

Multiple API integration will be necessary in the dashboard for various features. The main approach to this will be

1. Using existing API to fetch and display data in front end
2. Creating new API
3. Updating the existing API to make necessary changes to accommodate to new dashboard design.

API integration will be necessary for following features:

**_1\._** **_Tag Card_**

The tag topic card needs to fetch following information from API:

1. top 3 posts (filter and fetch from existing API)
2. number of people discussing the topic (fetch from existing API)
3. number of posts on the topic beside the ones listed (filter and fetch from existing API)![image description](/i/41230.png "tag-card.png")

****\_2\. \_**Alert message notifying the pages the users have followed/unfollowed******![image description](/i/41233.png "follow-unfollow-info.png")

The alert division needs to fetch the topics followed or unfollowed by the user and display it. This API should already exist and can be used possibly without much changes.

**_3\. Trending Topics_**

In order to display the currently trending topics , regularly updated topics need to be fetched from the API. This API is already being used in the older dashboard.

![image description](/i/41235.png "trending-topic.png")

**_4\. Featured Topics_**

An API for the featured topics need to be created so as to display them for the users to see in the dashboard. This feature doesn't already exist in the dashboard and needs to be worked on from the scratch.

![image description](/i/41236.png "featured-topics.png")

**Featured topics and Trending topics must update the users' subscription API when any topic is selected form those lists**

**_5\. Search Topic:_**

The search bar needs to fetch the searched topic from the API when the user hits the key word in the search bar. This feature doesn't already exists in dashboard and needs to be worked on from scratch\*\*

![image description](/i/41238.png "search-topic.png")

**6\. Add Location Button**  
This button displays a popup with options for users to pin their location as shown below. The information will be fetched from already existing API.

![image description](/i/41239.png "location.png")

![image description](/i/41240.png "popuplocation.png")

**_7\. Subscription List_**

Fetch list of topics subscribed by the user and display them in the dashboard. This API should already exist in the project and can be used as is or with minor changes if necessary

**_8\. More Topics To Follow_**

This section will display the topics that haven't already been subscribed by the users. The unsubscribed topics need to be filtered when fetching the data from API before displaying it in the dashboard.

PHASE III: Add Dynamic Feature

add a dynamic Feature in sidebar, and under the list of topics, and at top of page (full width), to allow admins to configure content to display there without code base changes, using the admin panel at /features

PHASE IV: ACCESSIBILITY CHECK

In this phase, the newly developed dashboard and the all post pages will be tested for their user friendliness. Following points (and more after more discussion and feedback from the team/community) will be taken care of during this phase

1. Provide image description with alternate text for images
2. Make sure to add more contrast between the content and the background if necessary
3. Work on making all the content on the website accessible with a keyboard alone as well.
4. Add meaningful descriptions for links so that it is easier for users to navigate through the application.

PHASE V: TESTING

Write necessary tests for the features/functions that were added in this milestone.

PHASE VI: FEEDBACK

Once the PR is created, make changes to code/functionality based on PR review and feedback from the community

**MILESTONE II: ALL POSTS PAGE IMPLEMENTATION**

PHASE I: ALL POSTS PAGE DESIGN AND RESPONSIVENESS:

The first task would be to get started with designing the "all posts" page layouts. This phase would mainly consist of preparing basic layout while making sure it is responsive.

This includes

- Navbar displaying different tabs than links to respective tab sections
- Body division displaying full list of posts
- Individual cards for each posts displaying image, topic, author and the published date
- Topic and author in display cards set as links to the post's page and author's profile respectively. The image will be clickable as well and should link to the post's page as well.

![image description](/i/41245.png "allpost-mockup.png")

The design will be developed considering the tag pages as a model. Tag page design can be reused in designing [this.In](http://this.In) doing so, odd line folding on individual posts in topic cards will be resolved too

PHASE II: COMMENT TAB SECTION DESIGN AND RESPONSIVENESS:

In the comment section of the tab, The comments will be displayed in card format with additional information like author, topics commented on, permalink, link to the comment on parent node and timestamp showing how long ago the comment was posted. The most recent comment will be displayed first

![image description](/i/41246.png "cmtsec.png")

PHASE III : API INTEGRATION AND IMPLEMENTATION

The API for comments already exists in the project. Existing API will be used to fetch the data in an order such that the most recent comment is fetched first and displayed in the comment cards.

PHASE IV: ACCESSIBILITY CHECK

In this phase, the newly developed dashboard and the all post pages will be tested for their user friendliness. Following points (and more after more discussion and feedback from the team/community) will be taken care of during this phase

1. Provide image description with alternate text for images
2. Make sure to add more contrast between the content and the background if necessary
3. Work on making all the content on the website accessible with a keyboard alone as well.
4. Add meaningful descriptions for links so that it is easier for users to navigate through the application.

PHASE V: TESTING

Write necessary tests for the features/functions that were added in this milestone.

PHASE VI: FEEDBACK

Once the PR is created, make changes to code/functionality based on PR review and feedback from the community

**TIMELINE**

Official Coding Period (1 Dec -1 March)

| | MILESTONE I : DASHBOARD IMPLEMENTATION| 7 WEEKS|
| | | |
| <div style="max-height: 105px;">WEEK 1-2</div>| PHASE I: DASHBOARD PAGE DESIGN AND RESPONSIVENESS:| 1.5 weeks (60hrs)|
| overall page layout| 16hrs|
| Topic card and its content design| 16hrs|
| Alert message sections| 8hrs|
| Follow more topics section with search bar| 20hrs|
| | | |
| <div style="max-height: 210px;">WEEK2-4</div>| PHASE II: API INTEGRATION| 2.5 weeks (86 hrs)|
| | |
| Tag Card| 10hrs|
| Alert message notifying the pages the users have followed/unfollowed| 10hrs|
| Trending Topics| 2hr|
| Featured Topics| 20hrs|
| Search Topic:| 20hrs|
| Add Location Button| 4hrs|
| Subscription List| 8hrs|
| More Topics To Follow| 12hrs|
| | | |
| <div style="max-height: 63px;">WEEK 5</div>| PHASE III: Add Dynamic Feature| 4 days (32hrs)|
| Understand how dynamic features work| 8hrs|
| Implementation| 24hrs|
| | | |
| | | |
| <div style="max-height: 63px;">WEEK 5</div>| PHASE IV: ACCESSIBILITY CHECK| 1.5 day (12hrs)|
| Test for Accessibility| 4hrs|
| Implementation| 8hrs|
| | | |
| WEEK 6| PHASE V: TESTING| 1 week (40 hrs)|
| | | |
| WEEK 7| PHASE VI: FEEDBACK| 3 days (24 hrs)|
| | | |
| | MILESTONE II: ALL POSTS PAGE IMPLEMENTATION| 4 WEEKS|
| | | |
| <div style="max-height: 84px;">WEEK 8</div>| PHASE I: ALL POSTS PAGE DESIGN AND RESPONSIVENESS:| 28hrs|
| | |
| design page layout (navbar/indivisual cards display )| 20hr|
| individual card display| 8hrs|
| | | |
| <div style="max-height: 84px;">WEEK8-WEEK9</div>| PHASE II: COMMENT TAB SECTION DESIGN AND RESPONSIVENESS:| 22hr|
| | |
| design page layout| 12hr|
| design/style comment cards| 10hr|
| | | |
| <div style="max-height: 42px;">WEEK 9</div>| PHASE II : API INTEGRATION AND IMPLEMENTATION| 16hr|
| Fetch data and displaying in the front end| 16hr|
| | | |
| <div style="max-height: 63px;">WEEK 9</div>| PHASE IV: ACCESSIBILITY CHECK| 12hrs|
| Test for Accessibility| 4hrs|
| Implementation| 8hrs|
| | | |
| WEEK 10| PHASE V: TESTING| 40 hrs|
| | | |
| WEEK 11| PHASE VI: FEEDBACK| 24 hrs|

\*This is a roughly estimated time. With consideration to time it may take to understand existing codes, unforeseen design changes , resolve issues and bugs, working on feedback from reviews I have left space for a 1 week buffer time.

**NEEDS**

I would need the guidance and help from my mentors and the community members in reviewing my work and finishing the project.

**TEAMWORK**

1\. Cotiviti Nepal Pvt. Ltd :

I have worked with teams my entire career. I worked with team of 10-20; technical and non-technical, in my job as data analyst in span of 2 years. Beside that I also worked in close liaison with vendors and offshore project managers (Waltham,USA) regarding data delivery requirements.

2\. Queeery LLC :

During my internship here, I worked collaboratively with team of 8\.

I have experienced and enjoyed the enthusiasm and reinforcement that comes with a great teams and I look forward to working with a team of friendly, driven and supportive people.

**PASSION**

Public Labs initiation to provide a cleaner and sustainable world to live in is commendable in itself to inspire me and the others to be the part of this project no matter how small. Living in one of the most polluted cities in the world (Kathmandu) I understand how important it is for people to have access to knowledge to solve or mitigate the problems that come with it.

I believe Improving the user interface of public labs would encourage better participation and would create an inclusive environment for users with lesser knowledge in web applications usage.

**AUDIENCE**

For the people visiting the public Labs website everyday, It is not necessary that all who visit are comfortable using web applications. I want my work to improve user interface so as to make the website easy to navigate. The motive of this project implementation will make users' experience exploring the public labs better and more intuitive. I would love to see people benefit from easy access to knowledge that Public Lab has to provide without any inconvenience due to inaccessibility.

**COMMITMENT**

I understand that this is a very serious commitment and I intend to take it as a full time job while it lasts. I have no other commitments for the duration of this internship and have every intention to commit my work hours to completion of this project