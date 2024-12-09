---
title: Outreachy proposal: Improve MapKnitter Lite.
tagnames: software, lat:0, lon:0, outreachy, first-time-poster, zoom:5, outreachy-2022, outreachy-winter-2022, response:35976
author: malikk
path: /notes/malikk/11-01-2022/outreachy-proposal-improve-mapknitter-lite.md
nid: 36025
uid: 817695

---

![](https://publiclab.org/public/system/images/photos/000/047/262/original/Mapknitter_Lite.png)

# Outreachy proposal: Improve MapKnitter Lite.

by [malikk](../profile/malikk) November 01, 2022 16:29

November 01, 2022 16:29 | Tags: [software](../tag/software), [lat:0](../tag/lat:0), [lon:0](../tag/lon:0), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:5](../tag/zoom:5), [outreachy-2022](../tag/outreachy-2022), [outreachy-winter-2022](../tag/outreachy-winter-2022), [response:35976](../tag/response:35976)

----

## About me

Hi there, I'm Olatunbosun Abdulmalik Olaosebikan, a front-end web developer and an upcoming open-source contributor. My story of how I got into technology is not a glamorous and/or uplifting one. It was August 2020, I was bored out of my mind after a series of anime binge-watching. My mom noticed and sent me a link to LinkedIn Learning to become a software developer, out of curiosity and boredom I took the classes. Fast track to now, after a lot of backsliding, doubts, and indecision, I can proudly say this is the path for me. With that, I've garnered substantial experience from internships and various teams I've had the opportunity to work with. It truly has been a rollercoaster.

Email: [7malikk@gmail.com](mailto:7malikk@gmail.com)

GitHub: [https://github.com/7malikk](https://github.com/7malikk)

Location: Abuja, Nigeria

## Project description

MapKnitter is a powerful system that allows one to upload aerial images, position them in a web interface over existing map data, and share via web or composite and export for print. The goal of this project is to improve the mapknitter lite for mapmaking with aerial photos as a lightweight web service, making mapknitter available locally/offline with javascript as its core.

### Abstract/summary (<20 words):

Improve the mapknitter lite for mapmaking with aerial photos as a lightweight web service.

### Problem

[MapKnitter.org](http://MapKnitter.org) is a complex and powerful system that lets you upload your own aerial images, position (rubbersheet) them in a web interface over existing map data, and share via web or composite and export for print but at a cost in terms of Web hosting and servers.


We are looking for ways this could be done without depending on a server in the long term, and want to try making use of the latest in JavaScript image processing to prototype full-resolution image processing and download it in the browser.

This project sets the groundwork for working locally/offline or from a static page using just the core browser-based library Leaflet.DistortableImage, then goes on to attempt a completely in-browser map stitching exporting process.

### Tasks and Proposed Implementation/Ideas

From the tasks laid out in [this planning issue](https://github.com/publiclab/Leaflet.DistortableImage/issues/998), starting with the task that does not have PR connected to them:

Task 1: load image thumbnails in the sidebar instead of full images (we should be able to tell from the Archive's collection response which is thumbnails) so we don't overload with a huge image collection.

Implementation/Ideas.

- A limit/cap should be set to represent a "huge image collection", for example upon user submission of a link, the response being the images, if greater than say 250, should be displayed in a grid format (4 or 5 columns, less on tablet).
- When the user hovers(long press on a tablet) over an image, it pops up within a visible width and image name. Check out the GIF below:
- ![](https://lh5.googleusercontent.com/Tia9T9ZkVjPKbPc_NPSu48d9_XG7rA3xGujhHb2A4GJ9rUdlfB2ZHHhad3s8RtmYnHVe7etVwMebk8DoxBVrUFPk_s3ioxqL3Fq_6PNkUK3wIIoSY3r9FDOJ8VcpXwg6U0yE34h-kE-nuKrH890X9nfdUljDwHBv-7NI5enYSSK22ONeZRcOJdFYgQ)

Task 2: maps would still be exportable using our cloud exporter

Implementation/Ideas: Based on the idea from the [mapknitter.org](http://mapknitter.org) export feature, a similar feature should be created with JS.

Task 3: allowing download of the positions as a JSON file: mapknitter.json

Implementation/Ideas: Using the idea [here](https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser), with an exception of JSON.stringify.

Task 4: generating an SVG of the map using the positions and client-side webgl-distort.

Implementation/Ideas:

Task 5: accepting a JSON file by URL or upload to load a map

Implementation/Ideas: Reverse the idea for Task 3\.

### Timeline/milestones

Week 1: December 5 - December 11

- Community bonding and onboarding to Publiclab
- Receive feedback on implementation/ideas
- Review PRs related to the planning issue
- Create a planning/discussion issue for task 1

Week 2: December 12 - December 18

- Write tests for this implementation (TDD approach)
- Implement the cap, which checks the number of images in the response
- Create a function which reduces the size of the images depending on the cap
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 3: December 19 - December 26

- Write tests for this implementation (TDD approach)
- Implement the hover popup feature
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 4: December 27 - January 2

- Write tests for this implementation (TDD approach)
- Implement cloud exporter using JS
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 5: January 3 - January 9

- Write tests for this implementation (TDD approach)
- Implement download in JSON format
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 6: January 10 - January 16

- Write tests for this implementation (TDD approach)
- Implement download in JSON format
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 7: January 17 - January 23

- Write tests for this implementation (TDD approach)
- Implement SVG generation using positions and [client-side WebGL distort](https://github.com/jywarren/webgl-distort)
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 8: January 24 - January 30

- Write tests for this implementation (TDD approach)
- Implement a function to accept JSON files by URL or upload to load a map
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 9: January 31 - February 6

- Create a discussion issue for Stretch Tasks
- Collate feedback from mentors
- Create possible FTO issues.

Week 10: February 7 - February 13

- Write tests for this implementation (TDD approach)
- Implement a button to open Leaflet.DistortableImage in view-only mode
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 11: February 14 - February 20

- Clarify feature ideas to add GPS/EXIF metadata detection for auto-placement
- Create possible FTO issues.
- Collate feedback from mentors

Week 12: February 21 - February 27

- Write tests for this implementation (TDD approach)
- Implement tasks in add GPS/EXIF metadata detection for auto-placement
- Create possible FTO issues.
- Make changes (if any) based on mentors' feedback

Week 13: February 28 - March 6

- Complete any pending task.
- Make changes (if any) based on mentors' feedback

### Needs

I would appreciate it if I could get feedback on my PRs and in discussion and planning issues, alongside guidance when I get confused or stuck.

### Contributions and Community Involvement

I joined the Publiclabs community in October 2022, and I have made contributions to various repos, collaborating with other contributors, providing support, creating FTO issues, and helping others.

1. Overall community involvement and participation:

- [https://github.com/search?q=commenter%3A7malikk+org%3Apubliclab&type=Issue](https://github.com/search?q=commenter%3A7malikk+org%3Apubliclab&type=Issues)

2. Open issues:

- [https://github.com/search?q=org%3Apubliclab+7malikk&type=issues](https://github.com/search?q=org%3Apubliclab+7malikk&type=issues "https://github.com/search?q=org%3Apubliclab+7malikk&type=issues")

3. Closed PRs:

- [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3A7malikk+is%3Aclosed+](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3A7malikk+is%3Aclosed+ "https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3A7malikk+is%3Aclosed+")
- [https://github.com/publiclab/Leaflet.DistortableImage/pulls?q=is%3Apr+7malikk+is%3Aclosed](https://github.com/publiclab/Leaflet.DistortableImage/pulls?q=is%3Apr+7malikk+is%3Aclosed "https://github.com/publiclab/Leaflet.DistortableImage/pulls?q=is%3Apr+7malikk+is%3Aclosed")

---------

### Experience
I guess this is where we go into the time before the Fastrack. After picking and dropping the software development course on LinkedIn Learning, I fell off my wagon entirely, and delved into other career paths. It all leads me back here. 

As a kid I loved taking care of people, meeting their needs, giving them a reason to smile and what not, with such traits, it was said that I was a born doctor, Fastrack to college, I got accepted to study Biology, shocker, my home country's educational system is a work in progress coupled with sentiments.

Fast track to December 2021, I was done with college, my youth service commenced, and life was beginning to look a lot different from what it was back home. Then, in search of purpose and worthwhile skill to develop, I picked up programming once again but this time with a clearer head and a resolve almost as hard as steel.

Four months after, I had the basics of JavaScript on lock and moved to ReactJS, after attending boot camps, lots of self-learning, and practice (practice projects on my GitHub), I got a one-off project, it meant everything to me, haha, with this project I got to build a web app for a microfinance bank, where users could perform various transactions. It was an interesting one, I learned a lot that my boot camps and self-learning did not teach me all about using ReactJs and interacting with a RESTful API. Afterwhich I got to work on another project which was a virtual farming solution, I don't think i have ever been so attached to a solution as much as i was to this one. I learned to use firebase as a backend service and not just for authentication and hosting.

In my experience with these projects, i had to work with various teams, oversee a couple, express initiative and alot more than i could outline here.

All my personal projects can be found on my Github: https://github.com/7malikk
Although most of them are private.

---------

### Teamwork

In my experience as a web developer, as aforementioned, I have had the opportunity to work with various teams, from the days in my boot camps, where we were sectioned into teams to work on various projects and assignments. This was my first time being paired up on a project, I learned communication and working collaboratively during this period. I also learned the importance of time management and organizational skills. It was quite exhilarating. 

In other projects, I have had to make design suggestions due to my way of thinking as regards the end user. As a front-end developer, it should be a priority. 

I also learned to ask questions the right way most developers, after a failed attempt run to the nearest mentor or senior or colleague for aid, which as a developer should not be the case. I also learned to know when to reach out for help after several attempts.

---------

### Passion
As we all may currently be aware, a significant amount of my home country, Nigeria is submerged underwater due to various reasons all with ties to a topic, Climate Change. I can go on and on about how the world as a whole does not take Climate Change seriously, they preach "Keep your emissions to a minimum", "Make use of eco-friendly processes" and what not meanwhile in certain countries' backyards the gas emissions cloud the sky, and baby steps are being taken to address all this. It's sickening. The current flood is but only one of the many environmental issues my home country faces (talk about oil spillage, land degradation, etc).

Coming across Publiclabs various tools, was like the holy grail for a developer, a way I could contribute to the fight against environmental injustice from my PC. I'm glad to be a part of it.

### Audience

_Whom do you want your work to help? We especially appreciate proposals that make technologies and techniques more welcoming and friendly to those who've often been excluded._
The target audience, is the world at large, especially the environmental advocates, taking an example the flood, advocates could make use of Mapknitter lite as a substitute to rubber sheet aerial images on the existing maps to get a printable, downloadable map, with details of current events just like the Mapknitter itself, which is painfully offline.

### Commitment

I do understand that this is a full-time commitment, and I am readily available to work for 40 - 45 hours every week from 9 A.M. to 5 P.M. GMT+1.