---
title: "Outreachy proposal: New Dashboard Implementation"

tagnames: 'software, first-time-poster, lat:1.010689, lon:9.997558, zoom:6, outreachy-winter-2020, outreachy-2020-winter-proposals, response:24687'
author: stace
path: /notes/stace/10-26-2020/outreachy-proposal-new-dashboard-implementation.md
nid: 24814
uid: 726043
cids: 27522,27531,27552
---

# Outreachy proposal: New Dashboard Implementation

by [stace](/profile/stace) | October 26, 2020 15:49

October 26, 2020 15:49 | Tags: [software](/tag/software), [first-time-poster](/tag/first-time-poster), [lat:1.010689](/tag/lat:1.010689), [lon:9.997558](/tag/lon:9.997558), [zoom:6](/tag/zoom:6), [outreachy-winter-2020](/tag/outreachy-winter-2020), [outreachy-2020-winter-proposals](/tag/outreachy-2020-winter-proposals), [response:24687](/tag/response:24687)

----

-><-

#### About Me

Name: Stacy Tonui

Location: Kenya

#### Project Description

New Dashboard Implementation

#### Problem Statement

The current dashboard implements some of the components from the Bootstrap Library but the user interface is not intuitive and might cause confusion to a new user. The proposed design uses more Bootstrap components improve this to ensure to make it so that a new team member can easily join and understand exactly what to do and where exactly everything is.

#### Tasks

Regarding [this](https://github.com/publiclab/plots2/issues/8513) discussion created by Cess Wanjiru, the implementation phase can be divided into the following tasks:

**i. Creating an "All Posts" Page using the tag page as the model**

The new dashboard design will replace the posts with a list of topics hence the need of new place to display all posts.

![image description](/i/41291.png "Capture.PNG")

The "people" tab will be replaced by a "comments" tab which will display the comments in a card format like the way the notes are displayed above which show the author, link to node, permalinks, no of comments on parent node and time ago.

-><em>Suggestion</em><-![image description](/i/41285.png "not_aligned.PNG")

- Tweak the standard card component code to avoid misalignment of the cards as seen on the tag page. Bootstrap properties like d-"flex" and "flex-fill" maybe used to achieve this.

**ii. Implement the new dashboard design**

![image description](/i/41286.png "pldesign.PNG")

As an improvement of the dashboard which is currently in use, the new one, as shown above, will have the following changes:

- It will display the topics followed with some of the titles of the posts of that respective topic as the main content.
- It will have a recommended/topics and all topics below the section.
- A "Welcome to Public Lab" section on the sidebar which is more user friendly and minimalistic as compared to the one currently implemented.
- A location section on the sidebar which will also let you add a location.
- It should have a link to the 'all posts' page created preferably next to the "topics you follow" link.
- The dashboard will also display a Blog topic at the top of he dashboards list and will exclude blog from the subscribed list below to avoid double display.

_Suggestion_

- Unsubscribe button should be visible on the topic's card header for affordance purposes![image description](/i/41287.png "button.PNG")

**iii. Ensuring the page renders well in mobile view**![image description](/i/41288.png "mobile.PNG")

The page in mobile views should be as shown above.

_Suggestion_

- A 'get started' link before the 'add location' button on mobile view which brings up this section as a modal. This will be helpful for new users. ![image description](/i/41292.png "gt.PNG")

---------

#### Timeline

Week 1

- Interact with team members in the Public lab community.
- Review the mockup designs and make changes if necessary

Week 2

- Get started on the all posts page design starting with visual implementation first.
- Create FTO issue

Week 3

- Implement functionality of the all posts page.
- Create FTO issue

Week 4

- Get started with implementing the dashboard design. Use the bootstrap 4 elements to implement the design.
- Create FTO issue

Week 5

- Finish up on implementation of the design.
- Start working on the functionality of the dashboard i.e make sure the links, and buttons and working as expected.
- Create FTO issue

Week 6

- Ensure the dashboard is working as expected, displaying topics followed by a specific user
- Create FTO issue

Week 7

- Pin the blog topic and exclude blog topic from the subscribed topic below it.
- Create FTO issues

Week 8

- Add trending topics.
- Create FTO issue

Week 9

- Connect topic search to autocomplete dropdown.
- Create FTO issue

Week 10

- Ensure the map functionality is working as expected.
- Connect "Nearby activity" button to display once a location is added.

Week 11

- Work on how to allow notifications of blog updates using the subscribe system
- Ensure that the page is responsive on mobile devices.
- Create FTO issues

Week 12 - 13

- Implement changes to the project if necessary
- Create FTO issues

---------

First-time contribution.

### [](https://publiclab.org/notes/itm2017004/03-12-2020/outreachy-proposal-optimize-performance-and-accessibility-of-public-lab-content#First-time+contribution)

I started contributing to Public lab this October and these my contributions.

[https://github.com/publiclab/plots2/pull/8635](https://github.com/publiclab/plots2/pull/8635 "https://github.com/publiclab/plots2/pull/8635")

[https://github.com/publiclab/plots2/pull/8599](https://github.com/publiclab/plots2/pull/8599 "https://github.com/publiclab/plots2/pull/8599")

[https://github.com/publiclab/plots2/pull/8577](https://github.com/publiclab/plots2/pull/8577)

[https://github.com/publiclab/plots2/pull/8550](https://github.com/publiclab/plots2/pull/8550)

[https://github.com/publiclab/plots2/pull/8523](https://github.com/publiclab/plots2/pull/8523)

---------

### Experience [](https://publiclab.org/notes/itm2017004/03-12-2020/outreachy-proposal-optimize-performance-and-accessibility-of-public-lab-content#Experience)

I just completed my degree in Computer Science, awaiting my graduation from Moi University, Kenya.

I enjoy problem solving through code and my expertise is mainly in web development. Some of the projects I've built include:

[Tawala](http://tawala.benair.co.ke/)- An E-Commerce Site built with Bootstrap, JavaScript and Laravel.

[Auctioneer](http://auction.nasoinvestmentltd.co.ke/)- An E-Commerce Site built with Bootstrap and Laravel.

My [Github ](https://github.com/stacytonui?tab=repositories)has more projects that I have enjoyed working on.

---------

### Passion [](https://publiclab.org/notes/itm2017004/03-12-2020/outreachy-proposal-optimize-performance-and-accessibility-of-public-lab-content#Passion)

I was highly impressed on learning about PublicLab, what it does and what it stands for. I loved the way it uses its platform to share information and address environmental issues. This is a cause that I've always try to participate in and bringing that and technology together is a dream for me.

The past few weeks that I've contributed to PublicLab have been nothing but amazing. It was my first time contributing to open source and I was and still am fascinated with how they have created a very welcoming and supportive environment especially for first time contributors. I'm excited to continue contributing and belong in the PublicLab community.