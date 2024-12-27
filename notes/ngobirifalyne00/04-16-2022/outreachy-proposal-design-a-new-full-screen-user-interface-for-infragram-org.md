---
title: "Outreachy proposal: Design a new full-screen user interface for Infragram.org"

tagnames: 'software, outreachy, first-time-poster, zoom:6, outreachy-2022, outreachy-summer-2022, lat:4.022465, lon:9.195443'
author: ngobirifalyne00
path: /notes/ngobirifalyne00/04-16-2022/outreachy-proposal-design-a-new-full-screen-user-interface-for-infragram-org.md
nid: 30435
uid: 795460

---

![](https://publiclab.org/public/system/images/photos/000/045/832/original/infragram_page.PNG)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [ngobirifalyne00](../../../profile/ngobirifalyne00) | April 16, 2022 09:38

April 16, 2022 09:38 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022), [lat:4.022465](../tag/lat:4.022465), [lon:9.195443](../tag/lon:9.195443)

----

\##About me

My name is **Ngobiri Falyne Chinaero**, a graduate of computer engineering from the university of Buea-Cameroon. Find below other information about me.

Year of Graduation: 2018

Github: [https://github.com/falyne](https://github.com/falyne)

Contact: (+237)672397994

Email: [ngobirifalyne00@gmail.com](mailto:ngobirifalyne00@gmail.com)

**Affiliation**

**Location:** Limbe-Cameroon

## Project description

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. [Infragram.org](http://infragram.org/) enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project intends to design a new UI for the infragram full screen. This include the modification of the existing components for better user experience, addition of multiple features can can make the site more user friendly and even user directives.

### Abstract/summary (<20 words):

_project To design and implement a new and improved full-screen UI for infragram to allow cross browser drag and drop with user friendly directives and navigation._

### Problem

_For the infragram page to comfortably serve the audience, it has to be user friendly meaning the interface does not have to overwhelm a new user. As a user i felt like elements on the infragram UI are just every where on the page thus not knowing where to begin when i get there. Also there is no particular place to get help incase i am stuck. And the design has a lot of space left at the side making the design not to look good._

### Mockup/solution

**With my approach , i have addressed three major issues to handle**

-I have designed the entire infragram UI to have side bar on the left and on the right. This is to position elements in a way that they won't be everywhere. The right sidebar(With the menus which hides and shows contents) contains the presets while the left side bar(With menu to hide/show contents) contains the features of the image which can be edited.\*\*\_-I also include a help bottom that will contain possible help solutions to users incase they get stuck.

-I have also included cross browser drag and drop than just image selection.

[![infragram_page.PNG](/i/46300)](/i/46300?s=o)


Responsive Designs.

[![Ipad_view1.PNG](/i/46280)](/i/46280?s=o)

[![mobile_view1.PNG](/i/46281)](/i/46281?s=o)

The Help Menu will Display Contents like

-Q & A 

-Getting started

-Image properties (Format, size, formatting,)

-How to use infragram 

Implementing cross browser drag and drop feature.
The drag and drop feature will be implemented using HTML5/Javascript in three major steps 

Step 1: Defining a Draggable Objects

<a href="#" draggable="true">Object</a>

Step 2: Setting Events on the Draggable Objects

for (var i=0; i<userNodes.length; i++){

EventHelpers.addEvent(userNode\[i\], 'dragstart', userDragStartEvent);

EventHelpers.addEvent(userNode\[i\], 'dragend', userDragEndEvent);  

}

Step 3: Setting Events on the Target Objects

for (var i=0; i<userListNode.length; i++){

var userListNode = userListNodes[i];

EventHelpers.addEvent(userListNode, 'dragover', cancel);

EventHelpers.addEvent(userListNode, 'dragleave', userDragLeaveListEvent);  

EventHelpers.addEvent(userListNode, 'drop', userDropListEvent);  

EventHelpers.addEvent(userListNode, 'dragenter', userDragOverListEvent);  

}

Timeline/milestones

May 30 - June 4 (week 1):

- Community bonding
- Communicate and interact with mentor and/or community members to get a few suggestions and ideas.
- Setting of working environment (Bootstrap 4)

June 5 - June 11 (week 2):

- Learn about and understand the existing UI first
- Understand the UI flow and goals, various different use cases

June 12 - June 18(week 3):

- Discuss use case for the updated Mockup
- Create Repository for the new UI design

June 19 - June 25 (week 4):

- Create a wireframe and solicit feedback

June 26 - July 2 (week 5):

- Allow cross-browser drag-and-drop on the entire page instead of just selecting an image

July 3- July 9 (week 6):

- move Q&A feature into a Help menu

July 10- July 16 (week 7):

- add a popup "Welcome" modal box

July 17- July 23 (week 8):

- creating a working "mockup" interface with Bootstrap elements (that is not hooked up to JS yet)

August 24 - July 30(week 9):

- Iterate with user feedback

July 31 - August 6 (week 10):

- Implement the new interface in HTML/JS (perhaps in cooperation with possible Google Summer of Code intern on corresponding project) - begin with an "index2.html" next to the original index.html

August 7- August 13(week 11):

- Ensure each feature/function still works

August 14 - August 20(week 12):

- Documentation of a working manual for external contributors and end user manual.

August 21-August 26(week 13):.

- Stretch goal: design a new colorize popup modal window to describe each colormap and offer thumbnails
- Final evaluation feedback due.\_\[\]

### Needs

_i will need the collaboration of the public lab team/mentors to go through my proposals and provide collaboration in order to go through this_

### First-time contribution

[https://code.publiclab.org/#r=all](https://code.publiclab.org/#r=all "https://code.publiclab.org/#r=all")

And paste in links to your initial contributions here so we can see!

You can use links like these to show recent activity:

- Comments, to show overall community involvement (like helping others): [https://github.com/search?utf8=✓&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues)
- Open issues:
- Closed PRs: [https://github.com/publiclab/plots2/pull/11038](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Ajywarren+is%3Aclosed)

---------

### Experience

I have been into front end development for the past two years using html, css, javascript and frameworks like bootstrap and wordpress. \_

I have also been into graphics design using adobe photoshop for over two years now-i am really interested in graphics designing. Lately i have been learning a new tool inkscape

i also use the pencil tool for wireframing.

I am a fast learner and very flexible and very committed to whatever I do.

---------

### Teamwork

I have been part of some project teams.

- I have been involved in the development of a wordpress site. Here i was the lead developer and so we had to meet and get proposals from the team members and from there we'll deliberate on which way to go. Here I learnt to be flexible so as to fully comprehend the proposals of all and also how to communicate greatly.
- Member of the WAAW STEM cell at my university where we organised tutorials for junior students who were into the stem education and carried out hands-on projects as a team. This taught me much about community bonding and team work.
- I was greatly motivated with being in the waaw foundation because the main objective was about giving back to the community.

### Passion

Growing up I have really been passionate in engaging into agriculture, though fate had it that I swayed towards technology, I have always sought ways that our agricultural systems could be improved through the use of technology. Seeing this project on publiclab i had a breath of relieve that this will give me great insight on how to improve agriculture in my community.

Coming from a house that Agriculture sponsored us throughout our entire schooling and many kids as well i think this initiative can help the people in my community greatly.

### Audience\_

**\_\_**_Most developing countries are into agriculture though in a local form. Plant health is of paramount importance to both the agriculturalist and even the consumers. Introducing this technology to the local farmers needs a lot of flexibility and easy to use precepts hence this project is there to enhance usage of this system by both tech-savvy and non tech-savvy agriculturalists to help them better their production with prior knowledge. The infragram should have the feelings that make every person very comfortable when using it. I believe with my design this_ _could be made possible_\*\*\*\*

---------

### Commitment\_

_I donot have any commitment, i will be available to put in 8 hours every day for the infragram project in other to bring out a new fully user friendly UI._

---------