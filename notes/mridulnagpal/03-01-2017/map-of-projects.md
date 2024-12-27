---
title: "Map of Projects"

tagnames: 'software, gsoc, gsoc-2017, soc, soc-2017, rgsoc-2017, soc-2017-proposals, response:13975, gsoc-2017-accepted, first-time-poster'
author: mridulnagpal
path: /notes/mridulnagpal/03-01-2017/map-of-projects.md
nid: 13979
uid: 497953

cids: 16298,16299,16308,16317,16350,16407,16414,16423,16439,16459,16469,16470,16496,16513,16546,16553,16747

---

# Map of Projects

by [mridulnagpal](../../../profile/mridulnagpal) | March 01, 2017 21:31

March 01, 2017 21:31 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [rgsoc-2017](../tag/rgsoc-2017), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975), [gsoc-2017-accepted](../tag/gsoc-2017-accepted), [first-time-poster](../tag/first-time-poster)

----

## About me

**Name** : Mridul Nagpal

**Github** : [https://github.com/mridulnagpal](https://github.com/mridulnagpal)

**LinkedIn:** [https://www.linkedin.com/in/mridul-nagpal-0663bb131/](https://www.linkedin.com/in/mridul-nagpal-0663bb131/)

**Affiliation** : International Institute of Information Technology, Hyderabad - 500032

**Location:** Hyderabad, India

**Email:** [mridulnagpal07@gmail.com](mailto:mridulnagpal07@gmail.com)

**Project Title:** Map of all Projects

**Gitter:** mridulnagpal

## Project description

The project I will be doing this summer will be :-

### **Map of all Projects of PublicLab:**

Public Lab is an open community that works online
through this interactive wiki where people can pose questions, post
their research and reach out to others. Research questions are focused
on addressing local issues, and are driven by on-the-ground community
work.

These research/wiki notes have some special tags added
to them to make them easier to reach and comprehend. My project will be
to add some more tags making these notes even better. These notes may be
about any event that is going to take place someplace. My project would
be to add a tag that would add a map to this note. Other features of
the project are following:

- Creating a module for PublicLab to add maps to research/wiki notes
- The module will be available on npm
- It will use an html template to render all the information regarding the location of the event
- Testing of the module will be done using Jasmine
- Privacy features to manage who all can see the location you added
- A map consisting of all the nearby projects by PublicLab using google's geolocation API
- Information about the organizers, requirements, # participants, etc. all available through the map
- Interactive markers to highlight all the places of interest nearby and far out as you pan out

### 

### Summary :

There can be a browseable map to display all of
the projects of PublicLab nearby on a piece of map. There will be
markers on
the place of events, which when clicked will tell about the details of
the project, people involved, etc. . We can also
link the markers to the page showing the requirements for the project
and all about it. You could even have options such as interested so that
other people can see the same. We can directly link these maps to the
wikis using power tags and let the author input some details
regarding the same.The resultant repository will be a package like the publiclab.Editor ([https://www.npmjs.com/package/publiclab-editor](https://www.npmjs.com/package/publiclab-editor)) which will be integrated to plots2 repo.

### Problem

_What problem does your project solve?_

This project will make the events by PublicLab more
easily accessible and provide a better interface to people. The organizer can identify himself as the organizer
and can specify the equipments required for the project. We can even
link the map to the PublicLab store for the required equipment. This can
also help the organizer get an estimate on the number of people
attending the event. This will let one explore multiple notes on the basis of location using a single platform.

**A prototype to add location to content/profile:**

![image description](https://publiclab.org/system/images/photos/000/019/758/large/Screenshot_from_2017-03-09_12-50-42.png "Screenshot_from_2017-03-09_12-50-42.png")

### Timeline/milestones:

I will use Agile Development Methodology for this project. Given
below is a rough timeline for my project, subject to change by mentor
intervention:

- **Community Bonding period (22 April - 23 May):** I
will go through the source code of PublicLab.Editor( [https://github.com/publiclab/PublicLab.Editor/](https://github.com/publiclab/PublicLab.Editor/)), Inline Markdown Editor ([https://github.com/publiclab/inline-markdown-editor](https://github.com/publiclab/inline-markdown-editor)) and polish my
approach for this project.
- **Week 1 (23 May - 29 May):** Creating a standardized User location storing system which store a User's location to his/her profile (the columns are already present in the database just needs integration with the new built page using [https://github.com/publiclab/plots2/blob/master/app/controllers/location\_tags\_controller.rb](https://github.com/publiclab/plots2/blob/master/app/controllers/location_tags_controller.rb)).
- **Week 2 (30 May - 5 June):** Design and implement a display for displaying maps on a User's profile (Using bootstrap and CSS according to the feedback by the mentor).
- **Week 3 (6 June - 12 June):** Integrating map features such as privacy options, removing maps to the backend using ruby controllers and database.
- **Week 4 (13 June - 19 June):** Enable viewing people on the basis of their location (done using controller in ruby and maps using leaflet library).
- **Week 5 (20 June - 26 June):** Using Jasmine to write the controller
tests for the functionality and other unit tests required. And fixing the bugs so far.

_Mid term evaluation_

- **Week 6 (27 June - 3 July):** Integrating abstract map functions to wiki/research notes as well.
- **Week 7 (4 July - 10 July):** Adding external information such as gear required, organizers, etc. to any event notes' map.
- **Week 8 (11 July - 17 July):** Fixing any bugs/Buffer time.
- **Week 9 (18 July - 31 July):** Building a Location Notification system (Writing a controller to retrieve people/research notes on the basis of location).
- **Week 11 (1 Aug - 15 Aug):** Continuing with the notification system (adding tests using Jasmine, validation and perfecting the system).
- **Week 12 (15 Aug - 29 Aug):** Buffer Time.

_Final term Evaluation are submitted to Google_

#### Data model after completion of project:

#### 

#### ![image description](https://publiclab.org/system/images/photos/000/019/935/large/plots2_Data_Model.jpg "plots2_Data_Model.jpg")

### Needs:

All the resources I will be requiring are on the internet such as PublicLab.Editor, Jasmine documentation, leaflet documentation, etc. And I would of course require the guidance of my mentor.

### Setup:

I have forked and built plots2\. I have been contributing to it for a little time as well. All tests pass, I have it set up on my local and it works smoothly.

Fork: [https://github.com/mridulnagpal/plots2](https://github.com/mridulnagpal/plots2)

### Experience:

I have experience with Django, Ruby on Rails, Javascript, C++, HTML, CSS. I have been working on this project for approximately a month now.

Here are all of my PR's:

---------

- [https://github.com/publiclab/plots2/pull/1310](https://github.com/publiclab/plots2/pull/1310)
- [https://github.com/publiclab/plots2/pull/1257](https://github.com/publiclab/plots2/pull/1257)
- [https://github.com/publiclab/plots2/pull/1223](https://github.com/publiclab/plots2/pull/1223)
- [https://github.com/publiclab/plots2/pull/1279](https://github.com/publiclab/plots2/pull/1279)
- [https://github.com/publiclab/plots2/pull/1202](https://github.com/publiclab/plots2/pull/1202)
- [https://github.com/publiclab/plots2/pull/1171](https://github.com/publiclab/plots2/pull/1171)
- [https://github.com/publiclab/plots2/pull/1149](https://github.com/publiclab/plots2/pull/1149)
- [https://github.com/publiclab/plots2/pull/1131](https://github.com/publiclab/plots2/pull/1131)

And some more...

### Teamwork:

I have been part of National Graphics Competition and scored a grade A for a project which included 3 members. I find it easy to mix up with people and am comfortable to work in a team. I also have been building a web project for my college with my team.

### 

### Passion:

Being in college under the load of assignment I do not get much time to think about the better of the world. Therefore I think this would be the best platform for me to atleast do something for the greater good rather than my own. I also have keen interest in web development and this project will let me enhance my skills.

### Audience:

I would try my level best to make whole of my project well documented and easy for users to interact with. I will make sure that LocationTags using maps will be easy to interact with.

### Commitment:

I understand that this project is equivalent to a full time summer job and will work on it according the timeline I have mentioned above.