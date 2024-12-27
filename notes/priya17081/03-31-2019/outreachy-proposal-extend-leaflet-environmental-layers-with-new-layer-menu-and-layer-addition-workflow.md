---
title: "Outreachy proposal: Extend Leaflet Environmental Layers with new layer menu and layer addition workflow"

tagnames: 'software, soc, lat:28, lon:77, outreachy, response:17359, first-time-poster, soc-2019, outreachy-2019, soc-2019-proposals, outreachy-2019-proposals, lat:28.5, lon:77.2'
author: priya17081
path: /notes/priya17081/03-31-2019/outreachy-proposal-extend-leaflet-environmental-layers-with-new-layer-menu-and-layer-addition-workflow.md
nid: 18911
uid: 579680
cids: 23568,23577,23587,23591,23609,23655,23657,23658,23660,23680,23799,23813
---

![](https://publiclab.org/public/system/images/photos/000/030/919/original/image.png)

# Outreachy proposal: Extend Leaflet Environmental Layers with new layer menu and layer addition workflow

by [priya17081](/profile/priya17081) | March 31, 2019 06:15

March 31, 2019 06:15 | Tags: [software](/tag/software), [soc](/tag/soc), [lat:28](/tag/lat:28), [lon:77](/tag/lon:77), [outreachy](/tag/outreachy), [response:17359](/tag/response:17359), [first-time-poster](/tag/first-time-poster), [soc-2019](/tag/soc-2019), [outreachy-2019](/tag/outreachy-2019), [soc-2019-proposals](/tag/soc-2019-proposals), [outreachy-2019-proposals](/tag/outreachy-2019-proposals), [lat:28.5](/tag/lat:28.5), [lon:77.2](/tag/lon:77.2)

----

---------

## About me

Name : Priya Kaushal

**Affiliation** : Indraprastha Institute of Information Technology

**Location:** New Delhi , India

GitHub : @Priyak5

## Project description

Extend Leaflet Environmental Layers with new layer menu and layer addition workflow

### Abstract/summary (<20 words):

Using additional Data Structures to improve management and UI of new layers being created using Leaflet.js.Use additional functions in the library for cleaner and easily understandable information.

### Problem

_The management and UI of many newly added layers can be improved to make it work smoother and easily understandable for people. Improvement in structure of layers and well explained documentation for people to understand. Removal of small bugs already present and more which may arise due to changes and frequent testing of software for smoother flow._

### Timeline/milestones

How I decide to go
on about the problem.

Milestone 1 :

After getting
familiar with the code base thoroughly through the individual task
and work environment in week 0 and 1

We move on to improving the structure and standardization of layers.

While studying
leaflet.js these functions can be used to improve the problems in
zooming and making the process more precise.![image description](/i/30923.png "Screenshot_from_2019-03-31_21-10-27.png")

![image description](/i/30924.png "Screenshot_from_2019-03-31_21-08-43.png")

The current state of the layers on the map look like :  
![image description](/i/30922.png "Screenshot_from_2019-03-31_21-07-49.png")

To improve this in terms of UI and readability we can have choice
for every base layer first that is which base layer/layers are
to be currently displayed on the map.

Then provide options for the type of base layer, which instead of
being displayed all at once can be grouped according to type
and then the required one can be chosen.

Instead of displaying base layer 1 after being selected we can
rename the choice

according to what property has been displayed by the map in the
corresponding

layer

My idea can be very
roughly presented as  
![image description](/i/30921.png "aww-board.png")

This would resolve
the problem of collapsible layers. When multiple layers are selected
they are ordered alphabetically.

Milestone 2 :

For documentation of
creation of new layers , video tutorials can be created to help new
comers walk through the process of how to create and manage new
layers along with their properties.

This can be made
into an FTO where the existing documentation on layers are provided.
This along with a precise documentation can be linked to the main
website in the help section.

Testing can also be
made in an FTO where new comers can do rigorous testing of website and
in case an error is found , provide proper steps on how they reached
to the error along with any suggestions to resolve this problem.

Milestone 3 :

There is a scope of
lot of improvement

1\. Add many more
layers depicting more information.

2.Improving the UI
of maps with multiple layers

My idea for above
including making the size of the dots or markers on the map a little
smaller or in ration with the amount of current zoom level.

While displaying
multiple layer the priority of the latest selected layer should be
the highest and the marker for other properties on the map can be
made lighter.

Working on this
idea:

[https://publiclab.org/notes/sagarpreet/06-06-2018/leaflet-environmental-layer-library](https://publiclab.org/notes/sagarpreet/06-06-2018/leaflet-environmental-layer-library)

[https://publiclab.org/notes/sagarpreet/07-16-2018/leaflet-environmental-layer-library-part-2](https://publiclab.org/notes/sagarpreet/07-16-2018/leaflet-environmental-layer-library-part-2)

3.The places where
the layers are very concentrated can be made into a single marker and
according to the zoom level can be made visible (only when present in
the bounding region).

4\. We can create
option where the user enters the zoom level along with a choice of
rough view and detailed view of the map.

5.Locking of layers:

The user can lock a
layer and select others accordingly.

6\. A new feature
which has been added should be on top of the pop up box with a small
mark saying new, in order to attract attention towards it.

Below is my project Timeline , I will be contributing a day per week for testing and reviewing Pr's and improving readability of Code.

Along the way I will try to create FTO's for encouraging new comers like me.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

  
_TESTING _

I plan to follow
the following stratergy for testing after discussing the correctness
and precision with the mentors.

As the map needs
to be precise for every location , the task can be divided among st
various people and locations where the data from the json string can
be checked at various instances of time to see if the data presented
on the map is correct. 

I plan to make
this into an FTO'S for new comers to learn testing for which the
whole documentation on how to use json and extract data from it will
be provided. 

For
the smooth flow of website I plan to follow the same procedure as it
is now. That is if any user of the website finds any glitch or error
in layers , map or the website in general they can report it on
github or on the issue section of website which would be checked
regularly. 

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

TIME PERIOD TASKS

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Week 0

After Announcement of Results : Community Bonding Period

1)Interacting with people and members of Public Lab.

1. Get review of my plan according to suggestions provided by
mentors.

3)Learning about new technologies being used in the project and
understanding the code base in depth.

1. Create prototype of the proposed changes in the website and
structure of layers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

May 20 - May 26 : Getting familiar and testing the Individual
tasks provided in issue #134

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

May 27 - June 2 : Improving structure and standardization of layer
types.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

June 3 - June 9 : Resolve existing and new bugs.

Improve documentation of code and template on how to create and
add new layers and working on them.

Create FTO's for new comers.

Rigorous Testing of the current phase.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

June 10 - June 16 : Complete Structure of layers

Code for adding new layers of generic type easier

Create Meta Data for layers

Standardization of layers (tile, rss, csv, geojson, polygonal,
also subtypes like spreadsheet #121 , esri)

Improve layer management

Documentation and Testing

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Focus on improving existing UI and adding new features if
possible.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
June
17 - June 23 : FTO's, Documentation, Reviewing PR's

and other small UI changes in other pages

June 24 - June 30 : Work on collapsible sections in Leaflet Layers
in browser control interface and other small changes to make the UI
better. Testing of whatever changes have been made till now.

July 1 - July 7 : Finish improving popup content, thumbnails
images etc , standardization of per-item popover UI (image,
description, source, toggle, link). Testing and Documentation.

July 8 - July 14 : Improve UI for highlighting new layers in
current view port when drag/zoom.

Enable and disable layers using js. Working on issue #103 for
adding new layer along side an existing for more information,

July 15 - July 21 : FTO's, Documentation, Reviewing PR's,
Testing

and other small UI changes in other pages

Feedback from mentors on workflow and if ant changes need to be
done.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

PHASE 3  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

July 22 - July 28 : Work on New Layers

July 29 - Aug 4 : Addition of tests for better testing, maybe open
FTO's for testing

Aug 5 - Aug 11 : leftover changes in Layer Management and
resolving bugs.

Aug 12 - Aug 20 : Final documentation of the project and reducing
redundant code.

Final Testing and feedback from mentors

Needs

Guidance from mentors and other experienced contributors in the community. \_

### First-time contribution

I have made one contribution and am working on the other while trying to find more issues which can be resolved using my current skill set.

[https://github.com/publiclab/Leaflet.DistortableImage/pull/183](https://github.com/publiclab/Leaflet.DistortableImage/pull/183)

[https://github.com/publiclab/Leaflet.DistortableImage/issues/182](https://github.com/publiclab/Leaflet.DistortableImage/issues/182)

---------

### Experience

I am undergraduate pursuing B-Tech in Computer Science Engineering from IIIT-Delhi. Most of the knowledge I currently have is through my college courses like Introduction to Programming, Data Structures and Algorithms , Advanced Programming , Computer Organization etc . As it can be read everywhere IIIT-Delhi is famous for making everyone learn by applying the theory on projects and assignments. IIIT-D has taught be how to work in pressure of deadlines and being more efficient in work.

Projects in 1st Semester :

(Skills Learned : Problem Solving, Coding Practice , Python and its libraries)

Introduction To Programming :

Make a Tic Tac Toe using python and calculate probability of winning fot Naive Vs Naive , Naive vs Pro , Pro vs Pro.

Implement k-maps

System Management :

(Skills Learned : HTML, CSS, JavaScript)

Build your own website using HTML providing information and details about you.

Projects in 2nd Semester :

(Skills Learned: Arduino , Visualization , Working with circuits , working in a team,Java , MIT App development)

Introduction to Engineering Design:

(All the projects were build from scratch)

Bassic Lamp

[https://sites.google.com/a/iiitd.ac.in/the-bass-ic-lamp/home](https://sites.google.com/a/iiitd.ac.in/the-bass-ic-lamp/home)

Anti - Drowning System.

[https://sites.google.com/iiitd.ac.in/technoverts/the-video?authuser=0](https://sites.google.com/iiitd.ac.in/technoverts/the-video?authuser=0)

Projects in 3rd Semester:

(Skills Learned :Java, JavaFx, Working on Git )

Advanced Programming:

Computer Game Snake Vs Block same as available in play store along with additional features and Animation with Main Page, Leader-board , Serialization of the game.

Projects in 4th Semester (Current Semester):

Database Management System:

Make your own Database Management System (Project Taken by me is management of website like Book My show where people can book concert tickets anywhere in the world , refund feature also included)

---------

### Teamwork

Most of the projects assigned in my university were/are group projects which helped me adjust in an environment where many people work together efficiently to get work done and how to respect everyone's opinion and discussing problems and brainstorming solutions.

---------

### Passion

What fascinated me about engineering was that it had a solution for every problem in an empirical form and not just mere theory. This was what intrigued me and encouraged me to pursue CSE. After joining IIIT-Delhi I got the exposure of how your skills can be used to make significant changes. I have always been interested in design hence i focused on learning HTML,CSS, JS and looking forward to contribute to Public Lab.

### Audience

My work would be targeted on making the User Interface better and easily use-able by people and smooth flow of multiple new layers.