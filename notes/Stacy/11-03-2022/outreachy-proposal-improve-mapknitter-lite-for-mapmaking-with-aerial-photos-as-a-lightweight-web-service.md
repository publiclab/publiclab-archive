---
title: "Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service"

tagnames: 'software, outreachy, first-time-poster, zoom:2, outreachy-2022, outreachy-winter-2022, lat:-41.292381, lon:174.778746'
author: Stacy
path: /notes/Stacy/11-03-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
nid: 36047
uid: 816623
cids: 30761
---

![](https://publiclab.org/public/system/images/photos/000/047/282/original/IMG_5932.HEIC)

# Outreachy proposal: Improve MapKnitter Lite for Mapmaking with Aerial Photos as a Lightweight Web Service

by [Stacy](/profile/Stacy) | November 03, 2022 06:35

November 03, 2022 06:35 | Tags: [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [zoom:2](/tag/zoom:2), [outreachy-2022](/tag/outreachy-2022), [outreachy-winter-2022](/tag/outreachy-winter-2022), [lat:-41.292381](/tag/lat:-41.292381), [lon:174.778746](/tag/lon:174.778746)

----

## About me

My name is Liry Wang. I am a part time sales consultant in country road. I'd like to change my career path from sales consultant to be a Full Stack Web Developer. I've learnt Javascript, Html, Css by myself through some online courses. This is my first time to be an open source contributor. And I'm happy with it.

Email ID: liryyy12@gmail.com

LinkedIn: https://www.linkedin.com/in/liry-wang-9084b5112/ 

Github: https://github.com/liryyy 

Loction:  Wellington, New Zealand

## Project description

Adapt parts of MapKnitter.org, a complex and powerful system which lets you upload your own aerial images, position/rubbersheet them in a web interface over existing map data, and share via web or composite and export for print. We are prototyping ways this could be done without depending on an expensive server, and instead adapting the JavaScript heart of MapKnitter to run as a lightweight service using Internet Archive image collections. Once a visitor can paste in the URL of an Internet Archive image collection and begin making a map with it, we will extend this to include saving maps, and even want to try making use of the latest in JavaScript image processing to prototype full-resolution image compositing and download in the browser. 

### Abstract/summary (<20 words):

Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service  

  
### Problem

### Add GPS/EXIF metadata detection for rough auto-placement using lat/lon, compass, elevation  

  
### Timeline/milestones

Week 1: December 5 - December 11

- Meet the mentors and members in the community
- Get some feedback with the implements and PRs
- Understanding the whole code

Week 2: December 12 - December 18

- Work on the processing and check which part has been complete

Week 3: December 19 - December 26

- Work on the gps/exif metadata detection

Week 4: December 27 - January 2

- Find lat/lon and place image there

Week 5: January 3 - January 9

- Review the test from last week
- Do some update from mentors' feedback

Week 6: January 10 - January 16

- Work on the angle of rotation and rotate image accordingly

Week 7: January 17 - January 23

- Review the code from last week
- Do some update from mentors' feedback

Week 8: January 24 - January 30

- Work on finding the camera altitude and scale the image accordingly

Week 9: January 31 - February 6

- Work on finding the camera altitude and scale the image accordingly
- Collect feedback from mentors

Week 10: February 7 - February 13

- Use Google's ElevationService using .getElevationForLocations() to estimate ground altitude above sea level and compare to camera altitude above sea level to correctly roughly size image based on "distance from the ground"

Week 11: February 14 - February 20

- Use Google's ElevationService using .getElevationForLocations() to estimate ground altitude above sea level and compare to camera altitude above sea level to correctly roughly size image based on "distance from the ground"

Week 12: February 21 - February 27

- Recenter map with  map.fitBounds() to display the image at center of viewer

Week 13: February 28 - March 6

- Get feedback from mentors

### Needs

The support from mentors, documentation, literature, sample data, hardware if applicable  

### First-time contribution

- [https://github.com/publiclab/Leaflet.DistortableImage/pull/1258](https://github.com/publiclab/Leaflet.DistortableImage/pull/1258)
- https://github.com/publiclab/plots2/pull/11549

---------

### Experience

I've learnt HTML,CSS, and Javascript through Freecodecamp and learnt Full Stack Web Development through an Udemy online course.

---------

### Teamwork

I am an experienced team worker. When I was in university, I had lots of opportunities to do group work. After I worked as a saleswoman for four years, I had 4 to 20 team members working together. We discussed and scheduled our working process, and checked the result on a regular basis.    

---------

### Passion

Although I've used some open source software before, this is my first time to be a contributor to an open source project. I feel so happy about that. I hope I can be a part of Public Lab as a contributor for a long time.

### Audience

As a woman who wants to change her career path is a pretty hard thing. I hope I can increase my abilities and help more women to be open source contributors from different minority groups.

### Commitment

I understand this is a serious commitment, equivalent to a full-time job. I am ready to work for 30 - 40 hours per week. Open to negotiating work hours.