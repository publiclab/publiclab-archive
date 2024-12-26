---
title: "Outreachy proposal: PublicLab.org UI Improvements"\ntagnames: 'software, soc, outreachy, response:17359, first-time-poster, soc-2019, outreachy-2019, outreachy-2019-proposals'
author: divyabaid16
path: /notes/divyabaid16/03-23-2019/outreachy-proposal-publiclab-org-ui-improvements.md
nid: 18830
uid: 578652

---

![](https://publiclab.org/public/system/images/photos/000/030/566/original/outreachy.png)

# Outreachy proposal: PublicLab.org UI Improvements

by [divyabaid16](../profile/divyabaid16) | March 23, 2019 12:52

March 23, 2019 12:52 | Tags: [software](../tag/software), [soc](../tag/soc), [outreachy](../tag/outreachy), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster), [soc-2019](../tag/soc-2019), [outreachy-2019](../tag/outreachy-2019), [outreachy-2019-proposals](../tag/outreachy-2019-proposals)

----

\*\*

## About me

Name: Divya Baid

Github: [](https://github.com/divyabaid16)[](https://github.com/divyabaid16)[d](https://github.com/divyabaid16)[ivyabaid16](https://github.com/divyabaid16)

LinkedIn: [divya-baid](https://www.linkedin.com/in/divya-baid)

Public Lab: [divyabaid16](https://publiclab.org/profile/divyabaid16)

Affiliation: The LNM Institute of Information Technology, Jaipur

Degree: Communication and Computer Engineering

Location: Jaipur, India

## Project description

[PublicLab.org](http://publiclab.org) UI improvements

### Abstract/summary (<20 words):

Implement new HTML templates using bootstrap 4 UI library and Style Guide provided by Public Lab.

### Problem\*\*

**Implement new designs across various pages in [PublicLab.org](https://publiclab.org/) to make it look more appealing to the user and make it, even more, user-friendly.**

\*\*  
\*\*

---------

### Timeline/milestones

**Milestone 2: Dashboard**

\*\*![](https://lh3.googleusercontent.com/aorNPGew5I-WhCPhs3tmgZP7ydJcTvVBPOJK6E9Mi7bJykjzvRCo6fX59KmIBipMJNDxhzuyc40qX310Plh3TGrO6T_SVRoDQQaOF7M4ePdsgsbcuvBH6Wz7_MPVRz6x2hSf9pNy)  
\*\*

\*\*  
\*\*

---------

May 20 - May 22:

Creating a "shadow" interface that can be accessed by going to, for example,/dashboard2 and making all the possible changes out here keeping the /dashboard page as it is.

Currently, all the individual topics are shown as individual posts in the order of recently created, edited or commented. Here, I propose to change the individual posts to be displayed in the form of a card UI based on the topic rather than timing. This card UI is universal for the rest of the pages too. Create the card UI during this period.

May 23 - May 25

Displaying topics on the dashboard based on subscriptions rather than how recent the post is so that the user just sees all the relevant topic and doesn't miss out on anything that is important for him. In this way, the user doesn't have to look for everything that is going on within the organization and still get to know everything that is important for him.

May 26 - May 27

Currently, all the tags that are displayed are completed scattered. They have no category to be classified upon and makes it quite confusing for the user to choose from them. It must be systematically aligned. Aligning the tags as recommended topics and current topics would be a good idea so that the user can differentiate between the tags and get recommendations very easily helping them to find more related topics. Recommender system has always been a good idea that helps the user a lot.

May 28 - May 31

Addition of current happenings section, i.e the latest addition to the website. It would be good to be aware of what all things are going on. This can be an analogy to the latest news feature. This should be something similar to the scrolling view present at one of the sides where (max limit ~ 10) would be scrolling showing all new additions of notes in all other topics. In this way, for some users who would like to look into all the notes rather than just the subscribed one has access to it. This can be placed somewhere at the bottom so that the user who wishes to look at it can do and who doesn't also do not have any major interference with the main UI. And then add a button of seeing more, to view all the topics in descending order.

June 1 - June 4

Add a map to the right side of the page that shows all the happening in the nearby area of the user. The user can click on a particular location and get the details of the topics in that area. This is something like auto-subscribing the topics that are going on in the area nearby and be aware of all the notes that are being published around. Clicking on the specific location on the map would show a modal giving more information about the topics going on at that place. The UI proposed looks good and uses the space very efficiently here.

June 5

Connecting "close card" button to a modal asking whether the user would like to unsubscribe the topic or not. To explain this we can think if the user closes a particular card, it simply means that the user is not interested in that and it could be linked to the unsubscribe button. And also, if the user just closes the card and doesn't want to unsubscribe the topic, he is welcome to ignore the modal.

Proposed UI of the modal:

\*\*\*\*\*\*![](https://lh6.googleusercontent.com/JJuFRz2MDGFha9LCjf_b07aeEIOaHx9T5-JiAw-8i8VoHxhaSYwr-WdIiMgw4WkW6xzH4jP8r0xptOs5Lf64T8T0yChfQcJFuKClaL1iXfKSFqoAGSzh7OQ5iotPJYZxjlCAdLFU)\*\*\*\*\*\*June 6 - June 8

Currently, when we click on the option to create a new post, the user is simply carried on the main text editing page. Instead, there should be a modal that must appear and ask a user what kind of post he wants to create so that user gets a clear picture of the internal divisions of the post and create point to point notes that have a well-targeted audience. The modal must have the option of asking a question, sharing a project or a story and describing the issue. The user can also select the templates from variously available templates and have a good experience while creating a post.

Proposed UI for following more topics:

---------

**![](https://lh5.googleusercontent.com/TWAsIjKcMXpbT9-0me3bVQf-n41doWPicJ0e2grdq3CU8ufm2hf3CvZdmiq7-w_fekwroJZY7aXH96HjBDTDOhnh601MPqJGc6pc2-5h1dHuLDi2qqLWSnCmBtt0oQ_E-QRp4OEt)**\*\*\*\*

June 9 - June 11

While clicking on the follow more topic, there should be a modal appearing showing the trending and popular topics. This will make it easier for the user to choose from the topics and will simultaneously have the option to search for more topics.

After winding up with the implementation of this page, I would create a survey form for all the user and collect their feedback. According to their feedback, I will create some more issue and work on them in due course of time and make the UI user satisfactory.

If the feedback is positive, then we can basically make this page /dashboard.

**Milestone 2: People Page**

\*\*  
\*\*

****![](https://lh6.googleusercontent.com/UstjhkBs__EjMCrTYzkN4-mYnJtSBaZavQQutRmx2PmvTls9wQF3Tuz26PjePb-YAcJsNtAfRyb6r0Zwxk7O8TLU1FXOjnzi9C7ZvnaeNALhnpdjW1KtBg_yXmHLO3erBiVrDmT6)****

June 12 - June 13

Modify the page according to the proposed UI. Create card-based UI for profile listing instead of a list of items and get ready for the next set of tasks to be completed.

June 14

Currently, the map is placed at the top which takes the entire space, it would be a good idea to display the map towards the right instead of the top. The popup modal that will be built in the dashboard section can be used here.

June 15 - June 17

Below the map, there can be an option to search for people belonging to a particular place. I.e there can be a list of places and upon clicking them, the user would find all the people who belong to that area. This is needed as the user might want to get connected to the nearby people. These placed are arranged in the ascending order of their distance from the user's location. A user can also click to see for more places as there are a limited number of places already displayed. We can also incorporate some more places but that would make the UI look a bit messy so just keeping on to a limited number of places. For the functionality of the code, I will write well-defined functions and validate them.

June 18 - June 19

Write unit tests to all the functions written and test their validity. Testing is an important part of coding and that cannot be ignored.

June 20 - June 22

Work on writing documentation for user as well as developer, create new FTOs as per the requirement, to welcome new contributor and make sure that they have a good experience. Provide necessary help wherever required. Review PRs and write the blog.

**Milestone 3: Questions page**

\*\*  
\*\*

****![](https://lh5.googleusercontent.com/S4GzlazkPoWQe2adLfehJ8YExyboK36yuiX1TKg0UHJOFCl6WCoHOkGIrGcjOpx6oV35j4_0uy_DcNM3KqbferSSli5S9Erdrn2l9a-iQ80jiYr8y0rYLOHx7HEyivQTRjHjB0qf)****

June 23 - June 24:

Modify the page according to the proposed UI. Create a basic layout and re-arrange the things in order.

June 25 - June 28:

Currently, there is a text field that enables the user to ask the question. The disadvantage of this is simply that sometimes the questions can be really big. So, the questions are carried out very long making it difficult to view the entire question before submitting it. So to make it more convenient for the user, text area can be added that is wide and sufficient enough for the users to ask the question. Also, while tying the questions, a function of auto-suggestion must be implemented so that it could be very helpful to the user and decreases the number of words that need to be typed.

June 29 - July 1:

Write well-understood instructions for the users that will be visible to them on clicking the \*more\* button. The instructions will be on how to use this feature easily and efficiently so that the user doesn't get stuck up. We can even extend this idea for other sections too and write document labelled as \*help wanted\* that would be useful to the users whenever they are stuck up on any feature. Equivalently, in the navbar, we can create an option for help and in that page, have the list of a feature present throughout and on clicking a particular value, the user can get access to the functionality of that particular feature.

June 2 - July 5:

Implement the section of featured questions. Here, it will list all the questions that a user can look for particular topics subscribed. We can also add some more filters to the featured questions. Here there can also be an option to sort the questions on the basis of the date answered, number of views, etc. The questions will be shown in the form of card UI placed below the text area at the bottom of the screen.

June 6 - July 8:

After clicking on the next button after typing a question, a list of questions must appear that match the best with the question asked. The user can select from this list that suits the interest at its best. If there is no matching question or the keywords, the user can post his question as a new question and will be redirected to the text editor asking him to publish the question. A proper unit test must be written for the functions implemented here.

June 9 - July 11:

Work on writing documentation for users, create new FTOs for first timers to welcome them and guide them. Provide necessary help wherever required and review PRs.

**Milestone 4: Profile Page**

\*\*  
\*\*

****![](https://lh3.googleusercontent.com/U8e_ELIP1bz6--IA97l6A-2jtv9WtMNw8ZrGzG4nCz3Pz3uupcrNQ9797xt1zSBrNWy2pG6iGVIDdIeqP9CDi4Jjolqj5sUl2LH0jiHTkHFh-wabBQpDRqZVL8yizWplpC_5MF6d)****

July 12 - July 13:

Modify the page according to the proposed UI. Create a basic layout and arrange the things in order. Adjust the map and make the necessary changes.

July 14 - July 15

Keeping Activity section is not a good option as consistency is not to be measured here. Quality and the number of events performed by the user are the key factors to look here. Only the amount of contribution is to be noted. So the task would involve to remove the activity section and instead list all the relevant subheadings along with the number of times it is performed. This would accurately show the relevant details in the profile of a user and the activities performed by him rather than the date on which activity was performed. Icons can also be added depending upon the requirements to give a more visual effect supported by a tooltip.

July 16 - July 19:

Implement the toggle button to view the tags and other profile information like bio, a bit more in detail. if someone is viewing his own profile, then there can be an option to edit the profile there itself and add tags describing him making it convenient for the user to visualize his own profile. In the \*more\* option, users can view the roles, affinities, interests and there can be an option to edit these if the user is viewing his own profile.

July 20 - July 22:

A feature to get the list of the most active tag for the user. Here, the default value for the number of tags can be kept as 5 and can be extended up to 10\. \*See more\* option is added beside the last tag to be able to see all the tags that the user has subscribed. This can be incorporated after the map.

July 23 - July 24:

Work on user and programmer documentation, create new issues for first timers to welcome them and make them well equipped with the codebase and the community. Provide necessary help wherever required. Review PRs, write a blog regarding the learning till now and complete any pending tasks.

\*\*

### Milestone 5: Redesigning the footer section

July 25 - July 31: Discuss the new design of the footer, make various changes to it and if finalized, implement the new design.

\*\*

### Milestone 6: Additional Task + wrap up

August 1 - August 3:

Complete pending task (if any or work on new issues). In this period I will try to address the feedback given to me by reviewers and I will work on the UI tasks which is incomplete based upon the priority of the same.

August 4 - August 15:

Integration of alerts to guide subscriptions and welcome to new users. It can be something like when a new user creates an account or sign up, first, there should be some email verification sent to the user that can for activities for the next 24 hours. Next, after confirming the email address, a well-written document can be emailed to the user after confirmation of the account. Now, when the user starts using the website, they can be something like a tour of the website briefing the user of some of the important and most used pages in a friendly manner.

August 16 - August 18:

Blog: I will be writing multiple blogs explaining my experience as an intern which will be beneficial for the new contributors.

FTOs: FTOs are very important in order to welcome new contributors, I will try to find and create issues with clear steps to fix them in order to get the newcomers familiar with the codebase.

Reviewing: Although I will try my best to review most of the PRs during my internship period, during this period I will make sure that I have reviewed as much PRs as possible.

August 19 -20:

Submit the final internship report.

\*\*

### Needs

Guidance and support of mentors and everyone attached to this community.

Documentation and other resources that is easily available.

### First-time contributions

Pull requests:

- Open: [https://github.com/publiclab/plots2/pulls/divyabaid16](https://github.com/publiclab/plots2/pulls/divyabaid16)
- Merged: [https://github.com/publiclab/plots2/commits?author=divyabaid16](https://github.com/publiclab/plots2/commits?author=divyabaid16)

Issues created: [https://github.com/publiclab/plots2/issues/created\_by/divyabaid16](https://github.com/publiclab/plots2/issues/created_by/divyabaid16)

My involvement in the community: [https://github.com/search?p=1&q=commenter%3Adivyabaid16+org%3Apubliclab&type=Issues&utf8=%E2%9C%93](https://github.com/search?p=1&q=commenter%3ACleverFool77+org%3Apubliclab&type=Issues&utf8=%E2%9C%93)

---------

### Experience

I'm a third-year undergraduate student and have explored a lot of things throughout my college life. In the first year, I started out with C and C++. I have been coding throughout and have a good knowledge of data structure and algorithms.

In the meantime, I started developing the interest in Web Development when I learned several web technologies with the help of FreeCodeCamp. Hence, I learned many things which includes HTML, CSS, JavaScript, jQuery, ReactJS and now, it's Ruby on Rails too :D

Apart from these, I have knowledge of Python, Flask, MySQL, SQLite, RESTful APIs and I am always willing to explore new technologies.

Currently,

- I am a **mentor at Learn IT Girl, 4th Edition** which is an initiative to guide and bring girls in tech inspired by the Anita Borg's vision of bringing 50% women in computing by 2020\.
- Also, I am working as a **teaching assistant** in the Data Structure and Algorithms Lab to help the juniors.

Previously, I have worked as a **teaching assistant** in the Electronics-I Lab to guide the juniors.

I am an active participant and mentor in my college's computer club Cybros with the help of which I like to share my knowledge to the juniors. I have always encouraged them to participate in coding events & to get involved with the open source. I have always tried to help my juniors with their regular lab exercise, projects, etc and assisted them in every possible way.

## Achievements

- **Winner of Smart India Hackathon**, 2019, software edition, organised by the Government of India
- **Received Merit-based ****scholarship** in the first and second semester of my college.

### Projects

- **Productivity Analysis using Outlook email data:** In a team of 6 members, Built an Email Analyzer tool with Python, Flask, Networkx and a bit of nltk which Analyse organizational productivity & efficiency based on Outlook email data. It uses the concept of Social Network Analysis. Given the email data, it generates a pdf report which provides info about employees who are doing how much productive work. It sends an email to the client containing the report.
- **E-commerce Web App:** Built an E-commerce site using React.JS, jQuery, HTML, CSS, etc and deployed it using Netlify. [Here](https://ecommerce-phone-divya.netlify.com) is the link of the deployed web site. The [source code](https://github.com/divyabaid16/E-commerce-React) of the website has been hosted on Github.
- **IMDB Search:** Using Python and its libraries including Beautiful Soup I wrote the Python script to get the list of top 50 movies in a given year and get their genre(s) and rating(s). [Here](https://github.com/divyabaid16/IMDB-Search) is the link to the project.
- **Sachin Data Visualisation:** Data Visualization on Sachin Tendulkar's One Day International cricket career and hosted it using Netlify. [Here](https://sachin-d3js.netlify.com/) is the link to the web page. [Here](https://github.com/divyabaid16/Sachin-Data-Visualization) is the link of source code. Technologies used are D3.JS, React.JS, HTML, CSS, jQuery.
- **Random Quote Machine:** Built a Random Quote Machine using HTML, CSS, JavaScript, fetched JSON data from a Forismatic API. [Here](https://codepen.io/divyabaid/full/pVvNLN) is the link to the project.

### Research Project

In a team of 2, using the concepts of Artificial Intelligence, we're trying to build a Seismocardiography based system for the remote monitoring of the health of the heart in order to curb the health-related problems faced by the people all over the world. Technologies used are Arduino board, accelerometer, C, Python, Bluetooth module HC-05\.

### Certifications

- **Algorithmic Toolbox** by University of California, San Diego & Higher School of Economics on Coursera
- **Certificate of Recognition** by GirlScript Foundation
- **Certificate of Achievement "Learn IT Girl!" 3rd Edition** by Learn IT Girl
- **Certificate of completion of SEO** by Udemy

#### Contributions in other organizations

| <br>Organization | Link to PRs | Period |
|------------------|-------------|--------|
| Mozilla          | [PRs](https://github.com/pulls?utf8=%E2%9C%93&q=is:pr%20author:divyabaid16%20archived:false%20user:mozilla%20) | Feb 2018 - April 2018 |
| FOSSASIA         | [PRs](https://github.com/pulls?utf8=%E2%9C%93&q=is:pr%20author:divyabaid16%20archived:false%20user:fossasia) | December 2018 |

### Teamwork

I have always been a team player throughout. I had learned the importance of teamwork and group work since I was a child. Playing outdoor games and other extra-curricular activities taught me that.

In the **Smart India Hackathon Software Edition 2019** with my team of a total of 6 members. We were declared the winners of our problem statement and it as all possible because of our combined hard work and efforts of the entire team.

Apart from that, most of our projects at University are performed in a team. I have worked with a team of 2, 3 to a team of 10\. With so many people supporting and advising you, learning becomes faster and things become easier to understand.

In **Public Lab** too, I'm loving the efforts everyone is making to encourage each and everyone and the collaboration with which things are going on is simply amazing.

---------

### Passion

I like building various stuff using different technologies depending on the feedback of the people. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of our community.

Open source has always been great. You get to learn so much just by looking at different people and various code base. This is so encouraging.

Public lab as always been a welcoming and a very supportive community for everyone belonging here including the newcomers. This support has helped me to come this way and helped me complete many contributions. I never felt as if I was a newcomer, instead, I was part of many discussions that felt so great.

I aspire to work further with our community and be an asset here.

### Post-Outreachy

I will continue the contributions to [PublicLab.org](http://PublicLab.org) as by doing so it helps me to learn many things and I would love to utilise the power of open source in order to serve the underserved communities. I will like to guide and bring new contributors to this community as this will help us to achieve and fulfil the vision of Public Lab.

**More importantly**, if the community approves, I will be happy to coordinate a conference or a workshop in our University's annual techno-management fest [Plinth](https://www.plinth.in) which will help students to get involved with the community and will increase the Public Lab's outreach.

### Audience

With the re-designing of many many new pages and making it more user-friendly, all the users of this website will be benefitted. They would find the new way much more convenient and user interactive.

As suggested by Warren, by creating a new design on /dashboard2\. I will try to get the feedback of the limited audience on the new designs with the help of [https://lookback.io](https://lookback.io).

I have also included writing the documentation so it would benefit the new developers.\*\*