---
title: "Fortifying Public Lab Text Editor and Adding Custom Inserts"

tagnames: 'first-time-poster, outreachy-2020-proposals'
author: shreyaa
path: /notes/shreyaa/04-06-2020/fortifying-public-lab-text-editor-and-adding-custom-inserts.md
nid: 23313
uid: 676730

cids: 

---

# Fortifying Public Lab Text Editor and Adding Custom Inserts

by [shreyaa](../../../profile/shreyaa) | April 06, 2020 16:24

April 06, 2020 16:24 | Tags: [first-time-poster](../tag/first-time-poster), [outreachy-2020-proposals](../tag/outreachy-2020-proposals)

----

Name: Shreyaa Sharma

Course: Civil Engineering

University: Indian Institute of Technology, Roorkee, India

Location: ​Roorkee - 247667, India

Timezone: ​UTC +5:30 India Time Zone

Email: [shreyaa\_s@ce.iitr.ac.in](mailto:shreyaa_s@ce.iitr.ac.in)

Github: [shreyaa-s](https://github.com/shreyaa-s)

Gitter Handle: shreyaa-s

  
ABOUT ME  

I am a fresher at IIT Roorkee currently pursuing BTech in Civil Engineering. I have always loved the concept of open source and wanted to contribute to the same. I have been trying to contribute in the small ways I could, by having all my projects on GitHub so that others can benefit from the same and trying to fix minor bugs. Outreachy provides a great opportunity for women to step foot into the world of open source development with the chance to work in big open-source projects with the core developers. This makes me excited and eager to participate in it. 

I have been interested in software development since my freshman year and have been exploring space since then. I am a developer at SDSLabs which fosters and promotes technical activities on the campus. It caters to all the technical needs of the students. As a member of the group, I have worked on progressive web apps, and miniature games to name a few. My field of work mainly deals with web development and occasionally game development. I have worked in PHP (Vanilla, Toro, and Twig), ReactJS, and Vanilla Javascript mainly.

  
STATEMENT OF MOTIVATION  

I chose this particular project because it is very well aligned with my interests and also correlated with what I have worked on in the past. Being an avid reader myself, it's easy for me to look at the project from a user's point of view. Other than that, this project provides a good opportunity to apply my learnings on a practical scale. This is my field of interest and therefore the natural inclination to this project.

  
  
## PROGRAMMING EXPERIENCE

### Programming Languages and Skills :

- In-depth knowledge of Javascript, HTML, and CSS
- Git VCS with knowledge of Subversion
- Sound knowledge of MySQL
- Fluent in C++, PHP
- Object-Oriented Programming, Analysis, and Design

### Development Environment :

- Kubuntu 18.04 with KDE Plasma 5
- Visual Studio Code
- Bash/Zsh

  
  
## PAST PROJECTS

### Rassasy

#### SDSWoC, IIT Roorkee

- Spearheaded the development of an online pre-ordering system in campus canteens to reduce waiting time and increase efficiency
- Worked on the dynamic rendering of orders and order status.
- The app comprises of a PHP backend coupled with a MySQL database and front-end built using HTML, CSS, Bootstrap and JavaScript.

### Kill-Zee

#### GGJ, IIT Roorkee

- A 2D game made for a global game jam in Lua
- Implemented the function to keep the player within the screen
- Added image to the player

### Cerebro

#### SDSLabs, IIT Roorkee

- A platform for predictive modeling and analytics competitions for the campus.
- Implemented lazy loading in the website using ReactJS.

  
## Open Source Contributions

## Pull Requests:

## Public Lab Editor 

## **

- PR#423 : [FIX: adds missing entries in .gitignore](https://github.com/publiclab/PublicLab.Editor/pull/423)
- PR#426 : [FIX: spelling mistakes](https://github.com/publiclab/PublicLab.Editor/pull/426)**

## Public Lab Plots2

## **

- PR#7705 : [https://github.com/publiclab/plots2/pull/7705](https://github.com/publiclab/plots2/pull/7705)
- PR#7768 : [https://github.com/publiclab/plots2/pull/77](https://github.com/publiclab/plots2/pull/7705)68**

## Mozilla Firefox Voice

## **

- PR#1214 : [https://github.com/mozilla/firefox-voice/pull/1214](https://github.com/mozilla/firefox-voice/pull/1214)
- PR#1218 : [https://github.com/mozilla/firefox-voice/pull/121](https://github.com/mozilla/firefox-voice/pull/1214)8
- PR#1313 : [https://github.com/mozilla/firefox-voice/pull/1](https://github.com/mozilla/firefox-voice/pull/1214)313
- PR#1314 : [https://github.com/mozilla/firefox-voice/pull/1314](https://github.com/mozilla/firefox-voice/pull/1214)
- PR#1333 : [https://github.com/mozilla/firefox-voice/pull/1](https://github.com/mozilla/firefox-voice/pull/1214)333  
**

## Issues opened: 

## Public Lab Editor

## **

- Issue#422: [Missing entries in .gitignore](https://github.com/publiclab/PublicLab.Editor/issues/422)
- Issue#424: [Spelling mistakes](https://github.com/publiclab/PublicLab.Editor/issues/424)
- Issue#457: [New line added with bold formatting](https://github.com/publiclab/PublicLab.Editor/issues/457)
- Issue#458: [Overlapping image and table dialog box](https://github.com/publiclab/PublicLab.Editor/issues/458)
- Issue#459: [Shifting of selected data to new line with bold formatting](https://github.com/publiclab/PublicLab.Editor/issues/459)**

## Public Lab Plots2

## 

- Issue#7775: [Spamaway check in signup is skipped](https://github.com/publiclab/plots2/issues/7775)

  
## Project Synopsis

##   

The Public Lab Editor is a WYSIWYG rich text editor which is a component of the Public [Lab.org](http://Lab.org) community content management system. The Editor is built on the Woofmark library which is no longer actively maintained. The aim of the project is to identify and fix bugs for improved user experience and introduce custom inserts to expand the Editor's functionality by creating simple and intuitive ways to add advanced content to posts, such as maps, tables, and lists of content from elsewhere on the Public [Lab.org](http://Lab.org) website.

The First Phase of the Project consists of removing the bugs present in the Editor. This consists of the bugs that I encountered as well as already documented bugs on the project repository.

The Second Phase is the part of the project that introduces general modifications to the already existing features. The first two parts of this phase are about improving the responsiveness of the mobile site and ToolBar modifications. The third part is to create a rich mapping between shortcode syntax and visible UI to introduce the features already present in the Editor in the rich text mode.

The Third Phase is to add custom inserts to the Editor. The Editor is built on a modular system, and I propose the idea to develop an extension, a new module, alongside the existing modules. The project will work on the shortcode syntax to ensure compatibility for people who use codes directly in the text, both for existing posts and in the Editor itself where current users may expect to be able to continue using this syntax. The user will be able to configure and insert their selection and make changes or tweaks to already added inserts.\*\*

##   

## Project Tasks

###   

### Phase I: Identifying and fixing bugs

#### Toolbar

## 

As of right now, there are numerous issues related to the toolbar's positioning. The toolbar is only applicable and required for the text area. Public Lab's Editor provides the user with a floating toolbar so that the user doesn't have to scroll all the way till the bottom to edit a piece of text but the misplaced toolbar negatively affects the user experience. As depicted in the image below:

![](https://lh5.googleusercontent.com/T5-MjWYiFWCyPJIyIA0ZU8eSQHmxn90pSB6ivqc9cG91TjCE-RL1Jq2iweVAHxVuhgUiYAuHClHMRlEjilBOUxAHSY6CIjeeR_sxTgjrI-qChjE-3vWO5PQ-uk_bkhyD5QjA3qzw)

A potential solution to both these issues will be to have a fixed toolbar at the top of the page, below the navbar, which is visible/enabled only when the focus is set to the text area or a fixed vertical toolbar to the left.

#### Table

The tables when inserted do not offer any formatting options.

1. The tables do not have borders by default and the users do not have an option to add them.
2. The alignment of the table rows is automatic and the user has little control over them.![](https://lh5.googleusercontent.com/jX_bTskMNWb94yubdYnQbSlRTUbwjnHVEdhdTp5a7NfIVn7uo1F3bYV57BIFgHbwR9mSMywpdxcJzQWx9B_mgC-lcYKeGC5NIL7pN41t2lI6NJLA8ONSB6nZpnzcwlSDANd00rXn)

I propose to add formatting options to the tables. The user can choose to add or remove borders and resize the table column.

#### Location

Existing Problems:

1. The spinner in 'use current location' appears every time 'Use current location' button is clicked. The number of active spinners should not exceed one. Also, the action should cancel on the second consecutive click if the user had clicked on the button by mistake.

![](https://lh6.googleusercontent.com/W30IjuquhAR1WZ7qUAV7tHeFuDlk7nqhTfUeL-peOs8RMWGVfHARNnwAPIwWHzwl9H-KtZW5kJpHXg3rr3nmkcbGd8_oMIR3oxl5sRxsvjNNJM4eHcOz_UN2_j0Gif6DQJN-3V5i)

2\. Clicking on the 'Add a location' button which should expand a menu containing the options to enter location using place name, coordinates or using existing location.

#### Responsiveness & Space Efficiency

### 

1. The Editor becomes space inefficient when used from a mobile device. I propose to reduce the numbered heading size and move them to the left of the concerned box.
2. The 'Extras' bar at the bottom of the page is not center-aligned in the mobile site due to the shifting of the heading to the top of the bar.

![](https://lh5.googleusercontent.com/_7Lp86aO3QqZ7M1mOosyqNZ_WWEJNEwDVER4LJVZM22tlyCPwX0Qb15_nWV3BfmbLsgd9iqzAcCxsjk6UWdDsYdwl2XHkvuauy0tBFLS4bjeg15qseEAnXK-6O_T55rD2AqOx0Ca) ![](https://lh5.googleusercontent.com/ONFLCzVGc6wKnjZsVjtZo9GIf4i5-gwGdBJ3m2ZyDYN5dCaK_2IPnMOPEBzaKpfA-e9lD9X2VdSmsgqvllNq8W02z1IV-ZwbxKUrFq1Mt_36hA5j_NmH8M6r-DetIwc3PHQ_bxk_)

3\. The third part of the Editor ie. the 'Add a location' takes up a lot of space. It could be shrunk down into a single button and the menu would expand only when the button is clicked.

4\. Fixing the 'Publish' button to the bottom of the web page to make it more space-efficient.

5\. Fixing the misplaced toolbar.

![](https://lh4.googleusercontent.com/2cdJnGcRuJtBeMRVtbw3FbiytAlqmrQoNacqTUKIGYjQ7rISdgteJjS1b5EF0yZCBD6T3km5OS82dh11un69xvtLi7sNOocqB36j7jSjm6akN2qa3hkPyQB8ocqskhYFQ6SJ-9aT)

#### ToolBar Modifications

####   

1. Highlighting Bold and Italics icon when in use.
2. Collapse 'Add table' pop up menu on adding table to text area.  
  

#### Adding Tools for shortcode syntax

Some of the features of Editor, like adding activity grids, are present in shortcode syntax in the markdown mode but can't be used in the rich text mode. A solution to this would be to develop a rich mapping between shortcode syntax and visible UI. A column would be added in the 'More' drop-down menu in the 'Extras' tab. This would open up a drop-down list of additional features that are, as of now, present in markdown mode but not in rich text mode. I propose to introduce a visible UI for the following inline features:

1. Button
2. Notes
3. Wiki
4. Nodes
5. Activity

The options 2-5 can be added in the form of both lists and grids. The option will be given to the user to choose between the two.\*\*

Phase III: Adding Custom Inserts

#### Adding functionalities to the 'Extras' tab

![](https://lh3.googleusercontent.com/9NY-TnrDKV5niviZeHzxEt3uVoHUbERP5XDssG9XgkwAFpnGGdhML6AqdNd9K9aHeLVuybm1PWbThga5K90PeMXc8HPPavmauWysoNYiwl3WG0D1lwRjD1ACF7tv-c63SrWARAM3)

- Invite Responses  

Clicking this button would open up a dialog box with a search bar and suggestions of top writers of the topic. Clicking on the name of a user would send an invite for a response to the user and a green tick in front of the user's username. A list item would be added to the plots repository with the title 'Invitations' in the drop-down menu shown below. Also, a list item would be added to the notification settings that would give the user option to receive email notifications.

![](https://lh5.googleusercontent.com/p-73nrG5XtYYiOrZS5emHEUhgkBAMIRCSDe5RJugjVEWlRtOw3Po49ugO4Ig2RqMWiJKWclAuIrOEdRTdVvMSqkqN6u4Agqp5YabdyeOUfFgIHTn_xvGrPy7nl78Ak8HkHWa6uSg)

2\. Event

Clicking on this button would open up a dialog box with a calendar, a search bar and a list of suggested users. The person creating the event could choose to send invites to specific users or simply schedule an event. The notifications would work similarly to the one explained above.

![](https://lh6.googleusercontent.com/On6dW5v7WCLWaWpz1DYe-m_1qVNeoUrjvFJ8PBHwKCr1lXp0d04TxuYQEsjybkip8yv7M3SpembKe-y_yaKGCJL3vXVl-iQjJcixmh5Hrby-mUG7eCr_le3hMYbp6kEfhUiSybCR)

3\. Map

A user could choose to include maps in the editor. For example, a person writing a research note on the varying water quality from city to city or the history of natural disasters could be highly benefited by displaying a map and marking important locations of the study. It would work similar to 'Add a location feature' and a person could choose to mark(pinpoint) several locations in a map like shown below.

![](https://lh5.googleusercontent.com/bg7zjqsmTJkP-RzZw23qK-sxES7Pc8EDjs4k8P_zwjvWlArY3dWTyFQaupsCVfC8U6pdkiuQ14Ny5ogaHoSO7qASjKh1EdAm-mL0bGi0K2M9-Tdfz7ZlPJ-DOGcOn5fWeq-API3b)

4\. Chart

The Editor has always been a platform to share knowledge. One of the charts' functionality's many uses would be in research notes based on surveys. The target audience and the researcher could opt for a chart based representation. In the dialog box, the writer would select the type of chart, enter no of constituents of the charts and can select custom colors for each from the research palette. On clicking 'Prepare Chart' he would see a prepared chart in his text area.

![](https://lh6.googleusercontent.com/VUDcSOjHdKszaSxyQbQNTATBdDGk-K3f7BsFf8ruZuoKV0D4Mcy1Rx1_D2UupJ_Kl2VBJpE_T0ZSN3sCdMt2rVxbwmRZMViKx-MJ-xYFLyzHBGTftjhXfHmeLumva2MvFCKGWBJz)

5\. More

- Social Icons

#### A developer could choose to add reference to his GitHub profile or a blogger to his Instagram post. For rich text editing experience, a user could add the social icon for relevant sites at the bottom and add the link to the concerned profile or post.   

- Additional ToolBar

An interface for already present functions that were previously used in markdown mode with shortcodes.

#### Additions to ToolBar :
  1. Left and Right Align : Along with center alignment, the user would also get an option to left-align or right-align the data. It would be done at the Woofmark level.
  2. Audio: The user would get an option to embed an audio clip in the text area.
  3. Video: Along with youtube video links, the user could also add a video which would be added using an iframe. If time permits, the feature would be made compatible with google drive, dropbox, along with uploading from the device. A maximum limit would be set on video upload.
  4. Underline: Introduce an underline icon in the toolbar.
  5. Calendar: The author would be able to add widgets such as a calendar in the text area.

Project Outline :  

### Media Features :

| Features | Currently Available | In this module |
|----------|---------------------|----------------|
| Image    | ✓<br>               | ✓<br>          |
| File Upload | ✓<br>               | ✓<br>          |
| Video<br> | ✕<br>               | ✓<br>          |
| Youtube Video | ✓<br>               | ✓<br>          |
| Hyperlink<br> | ✓<br>               | ✓<br>          |
| Calendar | ✕<br>               | ✓<br>          |
| Audio    | ✕<br>               | ✓<br>          |
| Geotagging (maps)<br> | ✕<br>               | ✓<br>          |
| Charts   | ✕                   | ✓<br>          |
| Social Icons<br> | ✕<br>               | ✓<br>          |

### Formatting and Extra Features :

| Features | Currently Available | In this module |
|----------|---------------------|----------------|
| Bold     | ✓<br>               | ✓<br>          |
| Italic   | ✓<br>               | ✓<br>          |
| Underline | ✕<br>               | ✓<br>          |
| Center Align | ✓<br>               | ✓<br>          |
| Left, Right Align | ✕<br>               | ✓<br>          |
| Table Formatting | ✕<br>               | ✓<br>          |
| Create Event | ✕<br>               | ✓<br>          |
| Invite a Response | ✕<br>               | ✓<br>          |
| Toolbar  | Floating            | Fixed          |

### Other Features :
  - Space efficient design in mobile site
  - 'Add a location' drop-down menu.
  - Controlling notifications of the new custom inserts.
  - Adding tools in visible UI for shortcode syntax.

  
# Timeline

Official Coding Period (19 May - 18 Aug)

# Phase I: Identifying Bugs and fixing them

#### Week 1 - 3 (19 May- 9 June)
  - Work on the aforementioned bugs
  - Sort through the issues on Github labeled as bug and fix them in order of priority.
  - Prepare for initial feedback
  - Test the current code base to document other existing issues and create first-timer issues.

  
# Phase II: General Modifications

#### Week 3 - 4 (9 June - 16 June)
  - Complete the first part of modifications
  - Open up new issues on the encountered bugs especially for first-timers.
  - Testing the modifications

#### Week 4 - 6 (16 June - 30 June)
  - Complete second part and third part of modifications
  - Summarize rules and add comments wherever necessary.
  - Will require rigorous manual testing, henceforth will take the most time.
  - Clean up of redundant code.
  - Prepare for mid-term evaluation

  
# Phase III: Adding custom Inserts

#### Week 6-9 (1 July - 22 July)
  - Work on adding the functionalities to extras tab (first part)
  - Regular testing to find bugs and fixing them along with opening minor issues to welcome newcomers to the community.

#### Week 9 - 11 (23 July - 13 August)
  - Adding functionalities to the ToolBar(second part)
  - Specify unit tests for possible test cases.
  - Finding and documenting bugs and opening relevant issues.
  - This requires manual testing.

#### Week 12 (13 August - 18 August)
  - Complete minor tasks.
  - General code cleanup and state proper contribution documentation for manual testing.
  - Any work left shall be completed here including writing tests and documentation.
  - Prepare for Final Submission.

  
  
# Time Commitment

My vacations were supposed to start on 5 May and end on 15 July. I have yet to receive any update about the change in timetable due to COVID-19 pandemic. The official Outreachy period is from 19 May to 18 August. I can easily devote 45-50 hours a week until my college reopens and 40-45 hours per week after that. Although there are no exams scheduled in this period as of now, in case they are pushed back to this duration owing to Covid-19, I would require a 5 days long break for the same. I'm also free on the weekends and I intend to complete most of the work before my college reopens.

Other than this project, I have no commitments/vacations planned for the summer. I shall keep my status posted to all the community members on a weekly basis and maintain transparency in the project.

  
  
# Post Outreachy

I have learned a lot and was introduced to a completely new ecosystem by contributing to the Public Lab and even after the Outreachy period ends, I plan on contributing to this organization, by adding to my past projects and working on open issues.

The aforementioned project that I will be working on is not only going to help developers with a better rich text editing experience but also a generated agreement for the not so technical people and newcomers. By integrating the short code syntax and visible UI in the text Editor itself, it will improve the user experience.

The highlight of my experience so far with Public Lab has been the fast-planned development and the active involvement of the mentors. With the community growing continuously, I feel responsible for all the projects I'm a part of. Having picked up a lot of development skills, my major focus would be to help the project and the community grow.