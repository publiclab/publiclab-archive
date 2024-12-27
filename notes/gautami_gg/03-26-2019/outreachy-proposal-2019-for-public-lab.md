---
title: "Outreachy Proposal 2019 For Public Lab: "

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, lat:12.971598, lon:77.594562, outreachy-2019, soc-2019-proposals, outreachy-2019-proposals, soc-2019-projects'
author: gautami_gg
path: /notes/gautami_gg/03-26-2019/outreachy-proposal-2019-for-public-lab.md
nid: 18867
uid: 579624

cids: 23462,23463,23464,23481,23483,23512,23530,23598,23606,23649,23650

---

![](https://publiclab.org/public/system/images/photos/000/030/766/original/outreachy.png)

# Outreachy Proposal 2019 For Public Lab: 

by [gautami_gg](../../../profile/gautami_gg) | March 26, 2019 17:46

March 26, 2019 17:46 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [first-time-poster](../tag/first-time-poster), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [lat:12.971598](../tag/lat:12.971598), [lon:77.594562](../tag/lon:77.594562), [outreachy-2019](../tag/outreachy-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [outreachy-2019-proposals](../tag/outreachy-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects)

----

## About me

_**Name** : Gautami Gupta_

**Affiliation** : Integrated Masters in Computer science at International Institute of Information Technology, Bangalore

**Location:** Bangalore, India

**Github**: [https://github.com/gautamig54](https://github.com/gautamig54)

**Email**: [Gautami.Gupta@iiitb.org](mailto:Gautami.Gupta@iiitb.org)

### Abstract/summary (<20 words)

Through this project I aim to enhance the User Interface of Public Lab.

### Problem

Improve the UI of Public Lab website and implement new designs, focused on the following pages :

- [Questions Page](https://publiclab.org/questions)
- [Dashboard](https://publiclab.org/dashboard)
- Profile Page
- [People's page](https://publiclab.org/people)
- [Tags/topics Page ](https://publiclab.org/tags)
- [Individual Tags Page](https://publiclab.org/tag/first-time-poster "https://publiclab.org/tag/first-time-poster")

### Project description / Design Mock-ups

#### Dashboard

Dashboard is the most important page for a signed in user. It provides various functionalities like asking a question, posting an issue, viewing the comments, posts and questions.

- Issue: The dashboard has an image leading to the Public Lab blog page which is a list of all the blog posts published by Public Lab. On the blog page, it is very tough to differentiate between the posts as there is no proper demarcation between the posts.\[Reference to: Wireframe 1(a) - 2\]

    Proposed Solution: A better way is to implement a more user-friendly UI which will have carousel consisting of all the posts. Each tile of the carousel will have a title and a primary image to help the user navigate better. On clicking the particular tile, the user will be redirected to that post.

- Issue: The Activity section on dashboard is cluttered as it displays the comments, posts, questions and events, all in one place.\[Reference to: Wireframe 1(a) - 3\]

    Proposed Solution: I will improve the user experience by having a proper division of activities on the dashboard as shown in the wireframe 1(a). Moreover, I will redesign the UI to have two cards in a row as it is neater and more readable.

- Issue: The dashboard also contains a different HTML card for comments made by the users. These comments do not provide any reference to the posts on the dashboard until users click on it, resulting in users being unaware of the post. Also, putting a huge number of comments on the dashboard will clutter it. \[Reference to: Wireframe 1(a) - 3\]

    Proposed Solution: Improvement for this will be to remove the comments show card and include it in the research notes/wiki/questions HTML card.

- Issue: Currently, the wikis are displayed in the sidebar.\[Reference to: Wireframe 1(a) - 3\]

    Proposed Solution: Placing them with research notes and questions is a better option as it looks more organised.

<p align="center">
<img src="https://lh6.googleusercontent.com/GRChUoHWemiEyzC3YbVTrHqEjEVb36-JYHrG8fNm4fRJLVYKkk8Lvj7MyiFjPF8SBVwPxjr11k4aTSbDFXJuhnZ1PCoJC_qWIsm-r5C9xEyAuPCaPSe2WoiBYNIskhUHzkzGCoB0"></p>
<p align="center">Wireframe 1(a)</p>
<br>

- Issue: "Your work" link in the existing UI as shown in the figure below, directs the user to the profile page, whereas it should open the list of all the activities of a user on that very page.\[Reference to: Wireframe 1(a) - 6\]

    Proposed Solution: I will add one more tab for "Your work" on the dashboard which will show a list of all the contributions done by the user.

<p align="center">
<img src="https://lh4.googleusercontent.com/GA0bkVs7q0C2GTSFDLavgyG5znTv2dFlOxoQgKUfGr7C7DG32eZMefQtKUbLxjK6xzifXqlaTvf1JWSSCaYx-XWxRiKhB6yM3kYTQYLednxv2AAblLV-2P6tg_guynaHgIPMB6TC"></p>
<br>

- Issue: The dashboard does not contain user-specific recommendations. \[Reference to: Wireframe 1(a) - 5\]

    Proposed Solution: I will implement a more personalized dashboard with a tab "For you" containing the posts/wikis/questions filtered by the topics a user is interested in. User's interest can be figured out from the pinned topics they have added on their profile page or from the tags which they use the most in their activities.

- UI Improvements to the Sidebar:
  - Issue: In the existing UI, the sidebar is not fixed.\[Reference to: Wireframe 1(a) - 4,5\]

    Proposed Solution: As it contains important activities and information, I suggest fixing the position of the sidebar so that it does not move while scrolling.

  - Issue: To make the sidebar user-friendly and appealing.\[Reference to: Wireframe 1(a) - 1\]

    Proposed Solution: I will remove the different buttons for creating questions/work done/issue brief and implement a single button for making an activity. Clicking on the "Activity" button will open a dropdown which will display the options of "Ask a question", "Share your work", "Create a new wiki" or "Write a new issue brief".

  - Issue: Sidebar does not contain a section on Trending topics and New topics.\[Reference to: Wireframe 1(a) - 4\]

    Proposed Solution: Sidebar will also have a section of Trending topics and New topics. These topics will be based on the statistics done from the backend data collected from the users following the website.

- Cards on Dashboard:
  - Issue: Cards have irregular sizes which look cluttered and unorganized.\[Reference to: Wireframe 1(a) - 3\]

    Proposed Solution: Resize all the cards to be of the same size so that it looks organized and symmetric.

  - Issue: In the present UI, the topics/tags for research notes, questions, events are missing which is important for a user.\[Reference to: Wireframe 1(b) - 7\]

    Proposed Solution: Suggesting to add topics/tags on the cards itself.

  - Issue: Missing a small description on the posts.\[Reference to: Wireframe 1(d) - 9\]

    Proposed Solution: Adding a title for each post along with one or two lines of description. There will be a 'read more' button which will redirect the user to a separate page of that particular event/question/research note.

  - Issue: No like or upvote functionality.\[Reference to: Wireframe 1(c) - 8\]

    Proposed Solution: Coming up with a "like" functionality for each card using the "[acts\_as \_votable](https://github.com/ryanto/acts_as_votable)" gem. Also, a user can star, follow/unfollow, spam/not spam from the card itself, they don't have to go to the actual page for these actions. This will significantly make the website more user-friendly.

<p align="center">
<img src="https://lh3.googleusercontent.com/dQZjcjslBa6j4O11XIadfExgbhaIaHvgnPdiSgf2i4_3bTupSC0VlBoAAOFkLuvrAQnSNYoDDWT_F3Hr2xIZepax3JZ8MUAf7IQKTVapG5kkqy-ti5fTLMuX3oQqDC8ylQXdtfEh"></p>
<p align="center">Wireframe 1(b)</p>
<br>

<p align="center">
<img src="https://lh5.googleusercontent.com/U-Z6tvvVl5RL7I0qRxetDzv3bymFyqCDFjwiO1XGd2TN0I7d38fGGUIw5wWlEqDKprMlZzsn0WzWPJ_NJwPY5zo8J-ia0LeZNiGPwUhnfyrizyQW0KEmC2WUfP4FIcg-1LHHpLEh"></p>
<p align="center">Wireframe 1(c)</p>
<br>

<p align="center">
<img src="https://lh4.googleusercontent.com/IsS86_NsQqw-iLytYpFFhMWDJoE39Ny8gx8tYmD_0rq1J3EZARo-PYeyqLGbCqMwOGYAn4y-Ab-qpYwkjVj1H5dsRsvgricVSreoG7bzTd6_rDCMFQBskvJC478aTC51lj2nBjmN"></p>
<p align="center">Wireframe 1(d)</p>
<br>

### Questions Page

Users use the Questions page to ask a question or find answers, hence the fields related to this page should be given the utmost importance.

- Issue: Presently after writing down a question, the user has to press continue which redirects the user to another page.

    Proposed Solution: I believe that the experience of the user can be greatly increased if we add a modal on the screen. The user can add a question and its tags in the modal itself without going to another page. To encourage the users to ask questions we will provide a larger box for queries.

The question and answers displayed will follow the same card designs as mentioned in the dashboard design.(Wireframes 1(b), 1(c), 1(d))

<p align="center">
<img src="https://lh6.googleusercontent.com/WLwpVjYhVmhHQhgmEAhE_3loBTlf3KmpoA0gQNoBbB8p1syMATr3KitoyeTCorqQ0xLHGWJ_NNhlNv3zLlZcjy7pBdlIlc5fStJ2Sfusf20Vjrk9a6tXDbrsvgBHUT8tOr2q_9t6"></p>
<p align="center">Wireframe 2(a)</p>
<br>

<p align="center">
<img src="https://lh6.googleusercontent.com/TyScamJhs75K1jV6GzVWiWkYTetYNpbkT1vxxOuew43uO02oSdzfD93MS4tBcPaXBAa2tP_nk5xLt2w_sdWvtpRowc8wmuLPY1dIaV0YIRtyNyaahEkcnz1z8dU2foqPfTB4pHpq"></p>
<p align="center">Wireframe 2(b)</p>
<br>

### Profile Page

- Issue: The current implementation has an activity chart that shows the daily activity of the users. This chart will be very sparse as the users might not make contributions on a daily basis. \[Reference to: Wireframe 3(a) - 1\]

    Proposed Solution: I suggest implementing a monthly or weekly activity graph as it would be more appealing to the user and would be relatively denser than the daily activity charts.

- Issue: The sidebar containing user information is not fixed. \[Reference to: Wireframe 3(a) - 2\]

    Proposed Solution: When you scroll down the profile of a user and then wish to follow that user, you will have to come back to the top to do so. It would be better to fix the sidebar so that the user's information is visible on the profile at all times.

- Issue: Current profile page has the username after the activity chart. Thus, on scrolling down there is no mention of the username on the page.\[Reference to: Wireframe 3(a) - 2\]

    Proposed Solution: I will add the username below the profile picture on the sidebar, which makes the name visible at all times on the profile.

- Issue: As of now, the current profile page shows the live location of the user on a map.\[Reference to: Wireframe 3(a) - 3\]

    Proposed Solution: I suggest that it is more relevant to mention the city and country of the user on the profile page. This makes the profile look cleaner and less crowded.
- **Features proposed:**
  - I will add a feature that allows users to add a short bio so that it will be easy for others to get to know the user.\[Reference to: Wireframe 3(a) - 4\]
  - I will add a category column where users can define the category under which they belong. Eg. SOC applicants, SOC mentors, Environmentalists etc. The category can be decided explicitly by the mentors and can be asked from the users when they sign up. This makes it easier for others to know the domain of the users.\[Reference to: Wireframe 3(a) - 5\]
  - I will also add a "Recents" tab which highlights or displays the recent activities of the user.\[Reference to: Wireframe 3(a) - 6\]

<p align="center">
<img src="https://lh3.googleusercontent.com/_m3312sdzKTPz9jSbDHdXell90J5f7TO9ADUFkmYC1Br9FWf-VQ0alNAnxcWUMYGC2j8NXIyw2dOcK6TfCFhuHJJCKv6TOsRR-4ZWerIzgWT-NW-AAwyQfQEeZVpViUwwyt_B6Uy"></p>
<p align="center">Wireframe 3(a)</p>
<br>

### People's Page

- Issue: Simultaneous view for contributors list and their map location

    Proposed Solution: Redesigning the page into two columns, where on the left-hand side, the web page will have a list of all the members of Public Lab sorted in order of recent activity. While on the right-hand side the web page, it will have a map displaying the location of the users (by default), which is fixed so that a user can have a look at the map while scrolling through the members.

- Adding filters on the map for better visualizations based on the following criterion \[Reference to: Wireframe 4(a) - 1\]:
  - By activity: The map (scattered) will display areas of high activity to areas of lower activity. The member list will be sorted in descending order of activities.
  - By category: As per the earlier suggestion in the Profile's page to add a category to users. The map (scattered) will display the areas specific to those categories.

- Issue: No search availability.\[Reference to: Wireframe 4(a) - 2\]

    Proposed Solution: Enabling it with a search bar which allows users to search on the basis of members name and location.

<p align="center">
<img src="https://lh5.googleusercontent.com/xH_Vm7Wwp8AeSc1MQP-M7pbgn4KKW0Wfw_n5X9k80TGO7awicYlHff75BwaAYc9jFKim9ZJniYXV2ikHw5p5egbIRJptgPDUpLBDR84LqGFGjf7-CvkW8U5Sf62PRJocK4lgrUDk"></p>
<p align="center">Wireframe 4(a)</p>
<br>

### Topics/Tags Page

The following design was given by Public Lab designers. [https://github.com/publiclab/plots2/issues/5090](https://github.com/publiclab/plots2/issues/5090)

The page contains two columns where the left side has the list of all the topics (in the form of cards) sorted in descending order of its usability and the right side of the page has a "tags graph". Its nodes of the graph specify the topics.

I will implement the following on this page:

- Issue: The search bar implemented for searching the topics search the content on the entire website instead of searching through the topics.

    Proposed Solution: Fixing it to just search for topics.

- Issue: No filter functionality on the graph

    Proposed Solution: Below the graph, there are links through which we can modify the graph to have a particular number of tags/topics (nodes). Eg. on selecting 100, a graph with 100 nodes will be displayed.

My contribution in implementing this design can be viewed here as pull requests to the organization GitHub repository [https://github.com/publiclab/plots2/pull/5209](https://github.com/publiclab/plots2/pull/5209)

- Adding the links below the graph
- Highlighting the active link.

<p align="center">
<img src="https://lh5.googleusercontent.com/utDcqgG-Bor7vq-N42FbCFL3R88gP5EsRuKSAot4a7itXpkKlDvpjy_4vvxfbVAAKDGdmdkINvcJviJEtfZvDEKm8tXups-PIkLgZWvQSMLMfJGw_ZruDe8MXq3ym1L0L11GxeKW"></p>
<br>

### Individual Tags Page

- I will revamp the UI of the Tags page to give the user a better experience.

<p align="center">
<img src="https://lh6.googleusercontent.com/qxZQbLwFW3DLEI0wmxkCuZ5LrLF2_MFzUYvxe1piHD_o2sGHWdldfyVJe6HU7eUwByZcul9akqrVkszyFNwloeZYtlDHQUFP3Wu3CA6tt9-BxxhPRYZLUJpqGvgp3EgOIKcUTsGa"></p>
<p align="center">Wireframe 5(a)</p>
<br>

### Other improvements and features to be added in the UI :

- Issue: On the events page, there is no provision for the location of the event.

    Proposed Solution: I intend to implement a map on the right sidebar of the events page, which will have pins pointing to the locations of all the upcoming events.

- The calendar on the events page has dates marked for all the events. On clicking a date, a tooltip will open with short information regarding the event. This will happen along with a zoomed in view inside the map showing the location of the event.

- On the blog page, it is tough to navigate through the blog posts as one has to scroll down through the whole page to find a particular post, which can be intimidating for the user. Implementing a more user-friendly UI which will have cards for each of the blog posts.

- Adding a feature of deactivating/soft delete an user's account for a given time. 

- Working on translating the webpages into different languages. 

- All the pages on the website have high loading time. I wish to optimize the backend queries for the website which also enhances the user experience.

### Timeline/milestones

May 7 - May 20 (Community Bonding Period)

- Understand Existing Code base.
- Discuss with the mentor about the best way to go about the implementation.

Starting with the questions page, as discussed with the mentors.![image description](/i/30767.png "Screen_Shot_2019-03-26_at_11.20.45_PM.png")![image description](/i/30768.png "Screen_Shot_2019-03-26_at_11.21.50_PM.png")![image description](/i/30770.png "Screen_Shot_2019-03-26_at_11.22.02_PM.png")

####Testing:

Since, the project is based on UI improvements, it will require testing more often. I will be testing the implementations after every two weeks in order to proceed clearly to the other set of implementations. 

### First-time contribution

I have been contributing to Public Lab for a month now. Following are the Pull Requests, Issues and other activities that I have worked on during the month:

- [Pull requests](https://github.com/publiclab/plots2/pulls/gautamig54)
- [Issues created by me](https://github.com/publiclab/plots2/issues/created_by/gautamig54)
- [First-timer-issues created by me](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Agautamig54+label%3Afirst-timers-only+is%3Aopen)
- [My other activities ](https://github.com/publiclab/plots2/search?q=commenter%3Agautamig54+org%3Apubliclab&type=Issues)

### Experience

Technology stack : Ruby on Rails, Bootstrap, React js, Python, Javascript,HTML, CSS, Java, C, C++, Shell scripting, Ocaml, Prolog, Mysql, Postgresql

Operating Systems : macOS, Windows, Ubuntu

Other : Git

Courses : Software Development, Programming Languages, Operating Systems, Machine Learning, Networking, Visual Recognition, Automatic Speech Recognition, DBMS, Design and Analysis of Algorithms, Data structures.

Projects :

- [Platform for Legal Queries](https://github.com/gautamig54/LawHub-LearnIt-Girl)(Ruby on Rails)
A bridge between common people and lawyers. This website provides information about a case,e.g. what sections are enforced, what judgments have been passed etc. One can also hire lawyers here
- Abstract text summarizing (Neural Network and Deep Learning).
A research project which focuses on abstractive summarization of a transcript using ANN(Artificial Neural network), RNN(Recurrent Neural Network) and LSTM(Long Short Term Memory networks)
- [San Francisco Crime Classification](https://github.com/gautamig54/SanFrancisco-Crime-Classification) (Machine Learning)
Predicting the crime in the city according to the time and location using multi class softprob with XGBoost.
- [Blog](https://github.com/gautamig54/blog_g) (Ruby on Rails)
Implementing functionalities like user authentication, search bar, filtering etc.
- [Mini Cab aggregator](https://github.com/gautamig54/mini-cab-aggregator) (Java)
GUI and OOPs implementation. Booking a cab depending on the minimum distance of the cab from the pickup point. Pickup and the destination points are set by clicking on the screen.
- [BattleShip Game](https://github.com/gautamig54/battleship) (Python)
A multiplayer battleship game with GUI (pygame).

### Teamwork

"None of us is as smart as all of us." --Ken Blanchard

I have worked in teams of sizes varying from two to twenty. In my college, I have got be a team member as well as a team manager of the events/projects. I have worked in many academic projects of courses like Programming Languages, Machine Learning, Software engineering etc. which usually have 3-4 members.

I have taken part in many hackathons like FlipKart grid, SIH, AngelHack etc where we had to work in collaboration.

I was the designing head of the TEDxIIITBangalore where I managed a team of 20 people working on different tasks.

I am also a part of Alumni Committee, Internet Committee and the head of Dance Club and Visual Arts Club of my college, IIIT Bangalore.

---------

### Passion

I have always been a technophile and an avid learner. I delved into programming at the age of 15\. I have developed a lot of interest in open source community. It all began from designing creative web pages, and now I have explored various tools for full stack development. I worked on a range of domains varying from Deep Learning to Web Development. I have always wanted to make a change in the society and I understood that in this era of automation and the extent to which people are dependent on the technical boons, pursuing this field can be my way of making a change. And hence, the idea behind Public Lab is to to mark a change and improve the environmental conditions attracted me to contribute to the project.

Public Lab provides me an opportunity to interact with experienced mentors from different parts of the globe. I always wanted to contribute to live projects and Outreachy provides a platform to be a part of innovative and creative projects.

### Audience

Public Lab being an environmental research organisation, the main audience of it would be environmentalists. Other than that, Public Lab also facilitates environmental justice issues by monitoring the environment and advising communities facing any such issue. This invites users from all sectors, be it from a MNC or from a small community. Thus, to facilitate the user experience, one must look from the perspective of all users. We need to make the overall experience very simple for non-technical users, but keeping in mind not to make it too simple for technical users, which otherwise would make them feel the UI is "below their expected standards". My plans for the UI improvements take into account all the users of Public Lab. I plan to simplify and clean the UI so that users find it easy to use and have an overall great experience using the app.

### Commitment

I'm confident that with this plan and with the right guidance from the mentors on how to proceed and how they want to implement the above application, I can improve Public Lab and make significant contributions in both Backend and Frontend. I will be fully devoted to the organisation as I do not have any other commitments to work on in the timeframe of Outreachy programme. I shall be devoting 40-45 hours per week.

Public Lab provides a very open and encouraging work culture. Through Public Lab, not only will I gain knowledge but also it will be a delightful experience and a matter of honour to be a part of such a renowned organisation while working on such a noble cause.