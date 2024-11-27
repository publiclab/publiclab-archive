---
nid: 36049
title: Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service
path: public/static/notes/vickylydy/11-03-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
uid: 816217
tagnames: software,outreachy,first-time-poster,zoom:6,lat:7.362466,lon:12.348632,outreachy-2022,outreachy-winter-2022
---

# Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service

About me

_Hi, I am called Victory-Lydia Excel Halleluyah. I am a frontend developer and an aspiring fullstack developer. I wanted to be a medical doctor from the beginning until one day someone spoke to me about software engineering and I decided to give it a try and since then I don't regret my decision. It has not been easy but the passion for it overcame it all._

**Location:** Cameroon

## Project description

The goal of this project is to improve the mapknitter lite for mapmaking with aerial photos as a lightweight web service, making mapknitter available locally/offline with javascript as its core.

### Abstract/summary (<20 words):

Improve the mapknitter lite for mapmaking with aerial photos as a lightweight web service.

### Problem

The web service in its current states works and offers users an appreciable user experience good enough to provide the intended value. However, opportunities for further improvement exist. Some useful features that can make a difference in terms of usability and flexibility of use are still missing.

This project sets the groundwork for working locally/offline or from a static page using just the core browser-based library Leaflet.DistortableImage, then goes on to attempt a completely in-browser map stitching exporting process.

  
### Tasks and Proposed Implementation/Ideas [](https://publiclab.org/notes/malikk/11-01-2022/outreachy-proposal-improve-mapknitter-lite?_=1667320272#Tasks+and+Proposed+Implementation/Ideas)

Task 1: load image thumbnails in the sidebar instead of full images (we should be able to tell from the Archive's collection response which is thumbnails) so we don't overload with a huge image collection.

Implementation/Ideas.

- A limit/cap should be set to represent a "huge image collection", for example upon user submission of a link, the response being the images, if greater than say 250, should be displayed in a grid format (4 or 5 columns, less on tablet).
- When the user hovers(long press on a tablet) over an image, it pops up within a visible width and image name.

Task 2: maps would still be exportable using our cloud exporter

Implementation/Ideas: Based on the idea from the [mapknitter.org](http://mapknitter.org/) export feature, a similar feature should be created with JS.

  
### Timeline/milestones

**Week 1: December 5 - December 11**

Community bonding

Familiarising my self with the code base.

Week 2 (Dec 12 - 16, 2022)

Implement functionality to support fetching (plus validation) of images from alternative sources (e.g., [openlibrary.org](http://openlibrary.org/ "http://openlibrary.org/"), [webarchive.org.uk](http://webarchive.org.uk/) etc.) to [archive.org](http://archive.org/).

Week 3 (Dec 19 - 23, 2022)

Write tests for this implementation

Create FTO issues if need be.

If any review from mentors, will work on it.

Week 4 (Dec 26 - 30, 2022)

Implement a fix to address the bug raised in issue #981 with details "Deselect event listener is triggered when selecting and deselecting, and it does this for all image overlay in the map #981".

Week 5 (Jan 02 - 06, 2023)

_create a unique identifier for each image so that the browser knows which location to place it on the map based off previous uploads._

Week 6 (Jan 09 - 13, 2023)

Implement functionality to support undoing deletion of image overlays in example/select.html; this can be activated with click event from an undo delete button and cntrl-z keyboard input.

Week 7 (Jan 16 - 20, 2023)

Create FTOs if need be.

Implement feedbacks from mentors.

Week 8 (Jan 23 - 27, 2023)

_create a feature that makes it possible to upload more than one image to the map this can be done by mapping each image to a particular location on the map._

Week 9 (Jan 30 - 03 Feb, 2023)\_  
\_

_implement a feature that lets you save your edited work locally._

Week 10 (Feb 6 - 10, 2023)\_  
\_

Implement a context-based button to activate the functionality to restore welcomeModal on /examples/archive.htm/ to view after being closed through 'begin' or 'close' button.

Week 11 (Feb 13 - 17, 2023)

Work on other issues.

Week 12 (Feb 20 - 24, 2023)

Review of my work and taking up corrections from the mentor.

Week 13 (Feb 27 - 03, 2023)

Review of my work and taking up corrections from the mentor.

### Needs

_I will need: people, documentation, and support from mentors._

\_  
\_

### First-time contribution

You can use links like these to show recent activity:

- Comments, to show overall community involvement (like helping others): I created an [issue https://github.com/publiclab/Leaflet.DistortableImage/issues/1217](https://github.com/publiclab/Leaflet.DistortableImage/issues/1217)
- Closed PRs: [https://github.com/publiclab/plots2/pull/11516](https://github.com/publiclab/plots2/pull/11516)

---------

### Experience

_I learnt software from W3schools, Youtube. I also practised with Frontend Mentor and freeCodeCamp. I studied Javascript and react.js._

---------

### Teamwork

_I did the zuri schorlarship program that helped me to communicate better with people and accomodate people and also we usually work in teams in a propram called night of code organised my Seven Dev Community in Cameroon._

---------

### Passion

_I love the fact that I am working in Publiclab. Since it deals with the environment and there are alot of things the climate change has done to our world working with Publiclab will eradicate those things._

### Audience

\_My target is the world at large and especially women because women don't have a lot of opportunities in this world because of gender inequality so \_

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day! I understand the commitment and I will live by it._

Plan is to expend a minimum of 8hrs/day on a 5days/week work schedule fully dedicated to this project. Which is at least a 40hrs/week commitment.\_  
\_