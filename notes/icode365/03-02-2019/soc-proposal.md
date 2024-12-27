---
title: "SoC proposal: Community Toolbox overhaul"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects'
author: icode365
path: /notes/icode365/03-02-2019/soc-proposal.md
nid: 18450
uid: 553778

cids: 22021,22024,22178,22179,22198,22201,22202,22241,23327,23555,23561,23648,23726,23730,23738,23783

---

![](https://publiclab.org/public/system/images/photos/000/029/701/original/Screenshot_from_2019-03-02_17-56-47.png)

# SoC proposal: Community Toolbox overhaul

by [icode365](../../../profile/icode365) | March 02, 2019 12:22

March 02, 2019 12:22 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [first-time-poster](../tag/first-time-poster), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects)

----

# About me

I'm Rishabh Rawat, a 3rd year (Junior year) engineering student specializing in Electronics and Communication from GGSIPU, India.

I'm working with PublicLab since October 2018\. I was part of the **Google Code-In mentors** team.

**Github:** [https://github.com/rishabh570](https://github.com/rishabh570 "https://github.com/rishabh570")

**LinkedIn:** [https://linkedin.com/in/rishabh570](https://linkedin.com/in/rishabh570)

**Email:** [icode365@gmail.com](mailto:rishabhrawat570@gmail.com)

**Location:** New Delhi, India

# Project description

As we know, community-toolbox plays a big role when it comes to welcoming newcomers and having an in-depth look at our growing community, the idea revolves around enhancing the project with some new features and making it more reliable (by the error reporting to the user and the likes).

In short, it includes adding tests, documentation, and features while ensuring the maintainability of code backed with high reliability.

# Abstract/summary (<20 words):

The implementation of this project can be classified majorly into 3 categories,

- Adding features,
  - Dropdown for navigation,
  - Implements PWA with offline & data fallback support, make it run as a standalone mobile app,
  - FTO author list,
  - Notifications for user knowledge,
  - Night mode,
  - Leaderboard of contributors,
  - Filter for recent contributors,
  - Stale issues,
  - Make the project portable,
  - Add bot for generating a list of all contributors,
  - Add copy to clipboard button
- Writing tests, and
- Writing documentation.

# Problem

Community-toolbox allows everybody to take a look at the activities going on in the PublicLab projects, helps in welcoming newcomers. It plays a major role in growing our community, the newcomers can look for fto and help-wanted issues in order to get-started & other people are able to notice their contributions and help them.

But, as our community is growing so fast, we need to be more active in community involvements in order to keep welcoming newcomers with the least possible latency, quick reviews, noticing stale issues and providing motivation to newcomers along with ease of use so that user can take a look at the page (cached), when he or she is offline.

# Implementation

### Refactoring the code

The code in the current state is not refactored and contains files with lots of big chunk of functions. File names are not specified accordingly and the project structure needs to be updated. It is clearly not easy to read and get started with, so this idea includes segregating the code according to their use-case. This will make the code very easy to read and will make it highly maintainable.

Refactoring the code will make the project structure look like (based on the current state of code),

[![refactor.png](/i/30236)](/i/30236)

Here, in these screenshots, the model/database component is segregated according to the stages of their workflow, **initialize.js** will set-up the database, **crud.js** will be containing the code related to creation, deletion and reading the database and at last, **util.js** will provide the helper functions which will communicate with the outer code and to pass parameters to it.

Similarly, UI files, scripts, and utilities will get refactored.

### Filter for sorting recent contributors

This idea includes adding a filter button for recent contributors' section which will allow users to sort the list according to the number of commits (highest first or lowest first).

This would include other filters like **alphabetical** and **most-recent commit first**.

We can store the data that we get for recent contributors from the Github API in the database so that we can manipulate it according to our needs.

[![filter_(1).png](/i/30237)](/i/30237)

### Add dropdown for navigation

This includes adding a dropdown button for navigation, the user can view data for different repositories without having to change the URL by himself. This will make navigation much easier for people who don't know anything about URL & stuff.

Also, if a user will use the project as a standalone app, he won't have any address bar to enter the URL, so a navigation dropdown would make it sense.

Here's a quick look at the dropdown button working,

![image description](/i/31268.gif "navigation.gif")

### Add a list of FTO issue authors

This idea includes showing a list of `first-timer-only` issue authors in order to appreciate the effort of people helping newcomers. This will encourage people & will lead us to a more welcoming community.

Currently, we get a list of `fto` & `fto-candidate`issues for any repository that is provided in the URL. We can filter out the issues having the label `first-timers-only` in order to get their corresponding authors and show the formed list on the page. Here's a quick look at the list formed,

[![fto-authors.png](/i/30882)](/i/30882?s=o)

### Add a list showing stale issues

One of the important sign of growing with everybody is no one should be stuck on a single issue for a long time, this is hence one of the most important steps we need to take in order to ensure "newcomer friendliness". It will surely improve a newcomer's experience.

As provided by Github API, we can fetch an organization's list of issues on which we can perform a check that if that issue's last updated date is within a period of 5-10 days (or so) or not. If it's not within 5-10 days (10 days is a good amount of time to measure against), we will put it on stale issues list so that people can take a look and help the author or contributor.

**1\.** We first iterate over the issues and check if it's last updated date is 10 days back or not,

![image description](/i/31269.png "Screenshot_from_2019-04-08_14-19-28.png")

**2\.** Then we push all the issues that are considered "stale" to the "staleIssues" array and call the UI function,

![image description](/i/31312.png "uiStale1.png")

**3\.** Finally, the UI code renders the data to the user

![image description](/i/31271.png "uiStale.png")

### Adding the Notification system

This includes adding a notification system to the website. The main reason behind it is keeping the user in touch through notifications. This would let the user know what is going on or what's gone wrong. It will include notifications for some unexpected errors, exceeding the API limit and the likes.

A simple error notification will look like,

[![error_notification.gif](/i/30238)](/i/30238)

### Adding Leaderboard of contributors

As the name suggests, this idea is about making a leaderboard of contributors last week/last month and show them on the page. This would provide inspiration to the new contributors and a sense of healthy competition will surely increase the productivity of people. As of now, we get the list of contributors last week and last month, that would help in extracting the list of super helpful contributors.

#### Step1: Calling utility function to store the RECENT contributors' data

![image description](https://publiclab.org/i/31173.png "filter2.png")

#### Step2: Storing the data to the database

![image description](https://publiclab.org/i/31174.png "filter3.png")

#### Step3: Using the data saved according to the filters we need to implement

![image description](https://publiclab.org/i/31176.png "filter4.png")

Here's a quick look at plots2 leaderboard based on last month's commits,![image description](/i/31171.png "leaderboard.png")

### Modify all contributors list's logic to include contributors of all different kinds

As we measure leaderboard according to the **number of commits** only, some of the contributors may get neglected in the process. Although creating the leaderboard by measuring all the variable factors (like comments, reactions, help in the chat, emojis, informal feedback, etc.) for each and every member is not possible (as Github API doesn't support that) but we can incorporate some library or logic to include all the of contributors while generating the list of all contributors so that no one gets neglected out.

As per discussion, we can use [**allcontributors.org**](http://allcontributors.org) for this purpose. It is basically a Github App (a bot) that helps us achieve that. The step associated are as follows:

#### Step 1: Install the Github App on community toolbox

The first step is to install the bot on the project so that it can take certain actions. (Below is an example screenshot of installation page)

![image description](/i/31283.png "installbot.png")

#### Step 2: Configure the bot

We need to add a configuration file for the bot so that we can alter the behavior of the bot according to our needs. There's one option for setting the target file (the file which will get affected with every addition of contributor).

Here's an example config file,

![image description](/i/31284.png "botconfig.png")

#### Step 3: This is pretty much it on the coding part

After we've set up the bot and provided our version of custom JSON file as a config file, the bot is up and running on the project and now it is ready to work.

Its workflow goes something like,

**1\.** Bot gets triggered when certain comments are present in issue or Pull request threads

![image description](/i/31285.png "botcomment.png")

**2\.** After the PR gets merged, the corresponding contributor is added to the list affecting the targetted file. The contributors' card comes up something like this (with emojis expressing the type of contributions he or she did)!

![image description](/i/31286.png "botlist.png")

### Make community toolbox easily adaptable by other organizations or people in general

As we know, community toolbox is a portfolio of our community which does much more than that. It plays a major role in welcoming newcomers and maintaining momentum while iterating over our development milestones. It can surely turn out to be helpful for other people or organizations too, for sure!

This idea includes making the project portable so that any other organization can use it for their own purposes as well. This would be so much good for everybody, making this happen is way more fun.

As the only file we render is **index.html**, we need to make it portable first. It includes sourcing the data of index.html from a JSON file which will be the only file any new organization would have to change in order to get going with the setup.

All of the requests that get sent in the backend are already flexible to any organization, just needs some checks.

We can use **jQuery's getJSON()** to fetch the data from the JSON file and then we can insert that data to our **index.html** file accordingly.

### Add a night mode theme

As community toolbox is a website that is very frequently visited by people especially by newcomers, there should be support for _night mode_ theme which will help people use the website at night easily without straining their eyes.

It will also remember the user's choice when he visits after some time and will apply the theme accordingly. Like if the user had switched to _night mode_ in his last visit, he'll be looking at the same mode he switched to, in his future visit.

![image description](/i/31179.gif "night_mode1.gif")

### Implement copy to clipboard for usernames

This idea includes adding a button for copy to clipboard functionality so that the job of copying & pasting the usernames of contributors become much easier for people. This can be helpful whenever we need to mention a bunch of people (like in check-ins).

This would include writing javascript code for copying the text to clipboard, **document.execCommand("copy")** would help in achieving that.

Here's a quick look at the functionality,

**1\.** Usernames get copied to clipboard after clicking that "Copy to clipboard" button,![image description](/i/31343.png "clipboard_pic.png")

**2\.** Now we can paste them anywhere,

![image description](/i/31344.png "clipboard_pic1.png")

### Implement PWA

#### Offline support with data-fallback

As of now, the project does not support visiting the page when offline and does not support data-fallback in case of Github API not returning any data back to us.

So, this idea includes adding a service worker for converting the project into a Progressive Web App (PWA) which will help us achieve the following,

- Visit a (cached) page when offline provided he/she has visited that page at least once before,
- \[Data Fallback\] Take a look at the data that Github API provides when the user is offline, the copy of the data will _always_ be the latest one and will be reliable. In case, the website couldn't make a successful request to the Github API, the data will be fetched from the stored clone of the most recent data that API sent to the site.
- Visit the project through his/her smartphone after adding the website to the home screen (as a standalone application).

Here's a script which will register the _service worker_,

[![sw_register.png](/i/30869)](/i/30869?s=o)

Here's a quick look at how the website will behave when offline:

[![ezgif.com-gif-maker.gif](/i/30242)](/i/30242)

#### Adding the website to the home screen

The user would be able to add the website to the home screen so that he/she doesn't have to go to the browser to visit the site. Moreover, having a separate "app" for visiting `code.publiclab.org` would enhance the UX and we will be able to add more OS specific features to the site in th future (like push notifications, using the camera, etc.).

[![standalone_app.gif](/i/30884)](/i/30884?s=o)

### Add Tests to the project

As the project is slowly getting big and so our community, we need a proper test suite to test the code written to ensure that we don't break anything as we move forward. This would promise high maintainability with less vulnerability to errors. Writing the tests can be broken down into 2 major categories,

  
**1\.** Writing tests for the code written till first evaluation, and

**2\.** writing the tests for the remaining part.

  
This way we can ensure that the code already present (by the end of first evaluation) is well covered with tests so that we can move forward without hesitation. 

  
Here's the tentative directory structure for tests,

  
![image description](/i/31345.png "tests.png")

  
### Adding Documentation

As the project is getting big, it needs proper documentation for a newcomer to get going with it and it should be easy to read and get started with. The good way of structuring this documentation would be to show a flowchart of the functions/files and indicate the flow of control through it. Adding code snippets will make it more easy to understand.

A sample flowchart for showing the control flow of the project in its current state looks like,

[![community-toolbox.jpg](/i/30240)](/i/30240)

This can be explained along with code snippets. A good way of structuring the documentation.

---------

# Timeline/milestones![image description](/i/31342.png "timeline-final.png")

Also, I'll try to create as many FTOs and PR reviews as I can, at the end of each week.

---------

# Needs

I'll be needing the guidance of my mentor(s), I'll be going through some documentations/libraries which is easily available on the internet :).

# Contributions to PublicLab

- [Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Arishabh570+org%3Apubliclab&type=Issues)

### Contributions to Community Toolbox

- **Issues**
  - [Link](https://github.com/publiclab/community-toolbox/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Arishabh570+)
- **Pull Requests**
  - [Link](https://github.com/publiclab/community-toolbox/pulls?q=is%3Apr+author%3Arishabh570+is%3Aclosed)

### Contributions to other repositories

- **Issues**
  - [plots2](https://github.com/publiclab/plots2/issues/created_by/rishabh570)
  - [image sequencer](https://github.com/publiclab/image-sequencer/issues/created_by/rishabh570)
- **Pull Requests**
  - [image sequencer](https://github.com/publiclab/image-sequencer/pulls?q=is%3Apr+author%3Arishabh570+is%3Aclosed)
  - [leaflet environmental layers](https://github.com/publiclab/leaflet-environmental-layers/pulls?q=is%3Apr+author%3Arishabh570+is%3Aclosed)

### Check-in

I've opened a check-in [here](https://github.com/publiclab/plots2/issues/4607).

---------

# Experience

I started programming around 1.5yrs back. So my first exposure to programming (web development) was learning HTML and CSS. I am contributing to PublicLab since October 2018\.

I was the part of _the Google Code-In Mentors team_ at PublicLab.

I've worked on other projects as well, I made incoming webhook notifiers and chatbots (more like slash commands) (on an already baselined codebase) for Zulip, I've worked with coding blocks as I was part of their annual summer of code event named Bountiful Open Source Summer (BOSS) and ranked in top 10, my personal projects include a python/Django website ([https://github.com/rishabh570/refresher](https://github.com/rishabh570/refresher)) and a simple chat-app made with Django-channels ([https://github.com/rishabh570/chatroom](https://github.com/rishabh570/chatroom)) and a dynamic theme firefox add-on ([https://github.com/Rishabh570/themed](https://github.com/Rishabh570/themed)).

---------

# Teamwork

I've had my summer internship at Malik Ventures last year, I was working with a team of 6 people. We were working on two projects at that time, [radixhealthcare.org](http://radixhealthcare.org) (website for a hospital) and [harvin.academy](https://harvin.academy/) (a coaching institute) and I was responsible for the backend part (Node.js/Express). That was my first exposure to how teams work.

Moreover, I've been working with PublicLab since GCI'18, opened a couple of issues on multiple repositories and worked on multiple issues. Working with PublicLab has definitely solidified my understanding of how _big_ teams work.

---------

# Passion

We at PublicLab have such a diverse group of people. Our community is very active which helps in maintaining the momentum, I get to learn so much while working on the project and the best thing is, we care about welcoming newcomers to our community (by ftos/fto-candidate/help-wanted) which is great. A good cause mixed with technology is a great combination!

---------

# Audience

My project would help in making the organization's portfolio more robust and will provide some features which will help in having a deeper look at the community involvements and welcoming newcomers.

---------

# Commitment

Yes, I understand that. I would be fully committed to my work.