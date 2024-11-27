---
nid: 15584
title: GSoC proposal: Leaflet Blurred Location Part 2
path: public/static/notes/mridulnagpal/01-22-2018/leaflet-blurred-location.md
uid: 497953
tagnames: gsoc,soc,gsoc-2018,soc-2018-proposals,gsoc-2018-final
---

# GSoC proposal: Leaflet Blurred Location Part 2

## About Me

**Name** : Mridul Nagpal

**Github** : [https://github.com/mridulnagpal](https://github.com/mridulnagpal)

**LinkedIn:** [https://www.linkedin.com/in/mridul-nagpal-0663bb131/](https://www.linkedin.com/in/mridul-nagpal-0663bb131/)

**Affiliation** : International Institute of Information Technology, Hyderabad - 500032

**Location:** Hyderabad, India

**Email:** [mridulnagpal07@gmail.com](mailto:mridulnagpal07@gmail.com)

**Project Title**: Leaflet Blurred Location

**Gitter:** mridulnagpal

## Project description

The project I will be doing this summer will be :-

### Leaflet Blurred Location:

#### This summer we will be enhancing the present Leaflet Blurred Location library. We will first be adding a Display library name Leaflet Blurred Location Display (already exists with basic functioning [https://publiclab.org/notes/warren/02-28-2017/call-for-proposals](https://publiclab.org/notes/warren/02-28-2017/call-for-proposals)). We can also start connecting people on the basis of the location they enter. We can switch to other geolocation API to make it faster. Option to subscribe to specific locations as well linked with email notifications. Some brief summary points are as follows:

1\. Connect people on the basis of location they enter.

2\. Change geolocation API

3\. Subscription to specific regions (with email notifications)

4\. Add information about projects to maps like title, # of contributors, etc.

### Detailed features:

1\. Connect people on the basis of their location they enter - We will have some bins on the basis of precision the user enters and will have a database for all the projects happening, whenever a user enter his lat-lng using leaflet blurred location, we will cross check with our database and either create a bin or add the user to an existing bin depending on the precision, then if there are any updates on any project in that bin, we notify all the people belonging to that bin. We can also add an option to connect among other people in that region(bin), not only projects.

2\. Change geolocation API - Change our currently used google geolocation API to [https://www.npmjs.com/package/node-geocoder](https://www.npmjs.com/package/node-geocoder) or some other API, and explore any extra features it might provide us.

3\. Subscription to specific regions - Even if a user is not in a region/bin, he/she can subscribe to that region/bin and will be added to that bin and treated like all other people in that bin.

4\. Add information about projects to maps - This will include adding information about any project inside a region/bin, this information will help in creating emails to be sent to the users subscribed to the bin, thus helping them understand more about the project.

### About existing leaflet blurred location:

The library already exists with many functionalities and we will be adding to those functionalities. There is a live demo for leaflet blurred location hosted live from the gh-pages branch of the github repo. I will be making changes to that repo and maintain a constant demo for all the things I implement in the library. The current live demo is hosted at [https://publiclab.github.io/leaflet-blurred-location/examples/](https://publiclab.github.io/leaflet-blurred-location/examples/) . All the visual changes can be seen on the demo page and all the backend functionalities can be checked using the console. The existing repo for leaflet blurred location is present at [https://github.com/publiclab/leaflet-blurred-location](https://github.com/publiclab/leaflet-blurred-location). The basic functioning of the existing library can be seen in the documentation present in the repo as well.

### Issues to be resolved (Already existing):

- [https://github.com/publiclab/plots2/issues/2254](https://github.com/publiclab/plots2/issues/2254)
- [https://github.com/publiclab/plots2/issues/1934](https://github.com/publiclab/plots2/issues/1934)
- [https://github.com/publiclab/leaflet-blurred-location/issues/84](https://github.com/publiclab/leaflet-blurred-location/issues/84)
- [https://github.com/publiclab/leaflet-blurred-location/issues/116](https://github.com/publiclab/leaflet-blurred-location/issues/116)
- [https://github.com/publiclab/leaflet-blurred-location/issues/119](https://github.com/publiclab/leaflet-blurred-location/issues/119)
- [https://github.com/publiclab/plots2/issues/141](https://github.com/publiclab/plots2/issues/1416)

### Timeline/milestones:

I will use Agile Development Methodology for this project. Given
below is a rough timeline for my project, subject to change by mentor
intervention:

- **Community Bonding period (24 April - 14 May):** I
will go through the source code of PublicLab.leaflet-blurred-location( [https://github.com/publiclab/leaflet-blurred-location](https://github.com/publiclab/PublicLab.Editor/)) and improve my approach for this project.
- **Week 1 (15 May - 22 May):** Creating the threshold where a our blurred location starts being a point. And testing the code written using Jasmine (This will be done in the leaflet-blurred-location-display library).
- **Week 2 (23 May - 30 May):** Rendering a default display on each tag page, like [https://publiclab.org/tag/stormwater](https://publiclab.org/tag/stormwater) or [https://publiclab.org/tag/air-quality](https://publiclab.org/tag/air-quality). (This will be done in the main plots2 repo).
- **Week 3 (31 June - 6 June):** Starting with the area-based subscription, creating test mails for subscribers as we do so.(Also to be done in the main repo or create a new repo separately just for this).
- **Week 4 (7 June - 14 June):** Continuing with area-based subscription adding Q & A feature of
what you are subscribed to.

Phase 1 evaluation

- **Week 5 (16 June - 23 June):** Buffer time for testing and polishing of work done till now.
- **Week 6 (24 June - 1 July):** Prompts to add other profile tags (roles, affinities, interests) on
profile, for (on profile page) what equipment you have and are
willing to show up with to a group field event, for (on profile page) what equipment you have and are willing to loan out.
- **Week 7 (2 July - 9 July):** Continuing with prompts and testing each one while implementing them .
- **Week 8 (10 July - 17 July):** Making new Leaflet layers on [Publiclab.org](http://Publiclab.org) maps (SkyTruth Alerts, the Toxic Release Inventory: [https://publiclab.org/q/15653](https://publiclab.org/q/15653)).

Phase 2 evaluation

- **Week 9 (18 July - 25 July):** Adding 2 more layers to [Publiclb.org](http://Publiclb.org) maps ([WaterReporter.org](http://WaterReporter.org) (uses GeoJSON), MapKnitter maps ([publiclab/mapknitter#251](https://github.com/publiclab/mapknitter/issues/251)))
- **Week 10 (26 July - 2 Aug):** Adding tests for all the layers added above and integrating with main repo.
- **Week 11 (3 Aug - 10 Aug):** Buffer Time.

_Final term Evaluation are submitted to Google_

### Structure for Power Tagging using geolocation:

![image description](https://publiclab.org/system/images/photos/000/024/175/large/proposal.png "proposal.png")

### Needs:

All the resources I will be requiring are on the internet such as
PublicLab.Editor, Jasmine documentation, leaflet documentation, etc. And
I would of course require the guidance of my mentor.

### Setup:

I have built and tested all 3 repos involved in my project and have forks of all three.

Fork: [https://github.com/mridulnagpal/plots2](https://github.com/mridulnagpal/plots2)

### Experience:

I have experience with Django, Ruby on Rails, Javascript, C++, HTML,
CSS. I have been working on this project for approximately a month now.

Here are some of my PR's:

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

I have been part of National Graphics Competition and scored a grade A
for a project which included 3 members. I find it easy to mix up with
people and am comfortable to work in a team. I also have been building a
web project for my college with my team.

### Passion:

Being in college under the load of assignment I do not get much time
to think about the better of the world. Therefore I think this would be
the best platform for me to atleast do something for the greater good
rather than my own. I also have keen interest in web development and
this project will let me enhance my skills.

### Audience:

I would try my level best to make whole of my project well documented
and easy for users to interact with. I will make sure that LocationTags
using maps will be easy to interact with.

### Commitment:

I understand that this project is equivalent to a full time summer
job and will work on it according the timeline I have mentioned above.

#### 

##