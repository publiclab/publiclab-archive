---
title: "Outreachy proposal: Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service"

tagnames: 'software, outreachy, first-time-poster, lat:20, lon:78, zoom:6, outreachy-2022, outreachy-winter-2022'
author: vanithak
path: /notes/vanithak/10-31-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
nid: 36023
uid: 818148
cids: 30735,30736,30737
---

![](https://publiclab.org/public/system/images/photos/000/047/248/original/Untitled_design.png)

# Outreachy proposal: Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service

by [vanithak](/profile/vanithak) | October 31, 2022 19:40

October 31, 2022 19:40 | Tags: [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [lat:20](/tag/lat:20), [lon:78](/tag/lon:78), [zoom:6](/tag/zoom:6), [outreachy-2022](/tag/outreachy-2022), [outreachy-winter-2022](/tag/outreachy-winter-2022)

----

## About me

_**Name**: Vanitha K_

_**Email ID**: [kvanitha780@gmail.com](mailto:kvanitha780@gmail.com)_

_**LinkedIn**: [http://www.linkedin.com/in/vanitha-k-aa1bb2190](http://www.linkedin.com/in/vanitha-k-aa1bb2190 "http://www.linkedin.com/in/vanitha-k-aa1bb2190")_

_**Github**: [https://github.com/vanithaak](https://github.com/vanithaak)_

**_Twitter_**: [https://twitter.com/vkrishnannn](https://twitter.com/vkrishnannn)_

**Location:** India

## Project description

Adapt parts of [MapKnitter.org](http://MapKnitter.org), a complex and powerful system which lets you upload your own aerial images, position/rubbersheet them in a web interface over existing map data, and share via web or composite and export for print. It's a prototype were, this could be done without depending on an expensive server, and instead adapting the JavaScript heart of MapKnitter to run as a lightweight service using Internet Archive image collections. Once a visitor can paste in the URL of an Internet Archive image collection and begin making a map with it, we will extend this to include saving maps, and even want to try making use of the latest in JavaScript image processing to prototype full-resolution image compositing and download in the browser.

### Abstract/summary (<20 words):

MapKnitter is a project to upload aerial images and share via web or composite and export for print.

### Problem

The project easily helps to share aerial images easily via web(reduces complexity).

1. When opening a map, detect a key like "texas-barnraising" from a longer URL like [https://archive.org/details/texas-barnraising](https://archive.org/details/texas-barnraising)

> Algorithm

```
1. When user supplier the URL and hits enter
   A function extractKey() is called
2. In function extractKey()
   a variable getURL will be defined to store updated URL
   if the URL doesn't include('archive.org/details/') and include('https://')
      getURL will be updated with updated URL
      getURL will passed to showImages() function
   else if the URL doesn't only include('https://')
      getURL will be updated with updated URL
      getURL will passed to showImages() function
   else
      getURL will be updated with updated URL
      getURL will passed to showImages() function

//showImages() is already present in the code, it will do the work of fetching the images
```

2\. Add a geocoding search box (where you type a location and it moves the map view) to the demo so upon creating a map users can navigate to a specific place

> Algorithm

```
We can use Leaflet Plugin and add necessary tags in the head tag

1. geocoder() will be used, followed by addTo(map)

//map is already defined in the code.
```

![image description](/i/47249.png "geocoder.png")

3\. Add a "drag image onto page to add" feature to the Leaflet.DistortableImage demo so people can import multiple images into maps in the demo at [https://publiclab.github.io/Leaflet.DistortableImage/examples/export.html](https://publiclab.github.io/Leaflet.DistortableImage/examples/export.html)

**_It's a quite big problem. So, it would be hard to write the whole algorithm here (requires implementation to be exact)_**

> Algorithm

```
// I believe it can be done with EventListeners

1. drag In event will be called to insert an image in the map
2. drop to load the image

and so on..
```

4\. Allow current map state (like a "save game" button) to be exported to a downloadable "mapknitter-saved.json" format (see [https://github.com/publiclab/image-sequencer-app#usage](https://github.com/publiclab/image-sequencer-app#usage) for possible JSON format and [https://gis.stackexchange.com/q/298808](https://gis.stackexchange.com/q/298808) / [https://geojson.org/](https://geojson.org/) for official GeoJSON standard)

> Algorithm

```
1. pass the images to savetoLocalStorage() function
2. In savetoLocalStorage()
    save the image nodes to new variable result
    stringify result to set it in localStorage
3. Call click event when clicked on "Save File" button
   call downlaodFromLocalStorage() function
4. In downloadFromLocalStorage() function
    get Items from localStorage and save it in new variable obj
    stringify obj, encode it and save it in new variable data //data will act as href
    set attributes of the button and download mapknitter-saved.json
```

![image description](/i/47258.png "modal.png")

![image description](/i/47259.png "download.png")

```
can be made pretty using undefined/null parameter in stringify function
```

5\. Add local saving of maps, via localStorage (may be limited by filesize?) so you don't lose your work when you refresh the page (using same format as "mapknitter-saved.json")

> Algorithm

```
1. pass the images to savetoLocalStorage() function
2. In savetoLocalStorage()
    save the image nodes to new variable result
    stringify result to set it in localStorage
```

![image description](/i/47254.png "lat_lon.png")

6\. May be generating a svg of the map, using the positions

> Algorithm

```
1. Read the JSON file.
2. convert it into an array(coordinates)
3. Pass the array to generate_svg() function
      create element svg
      set required Attributes
      for coordinate in coordinates
          create path to make a map?
```

7\. Display Bootstrap like tooltips

_As elements are already created for rotation, export image, delete image etc. We can add attributes using setAttribute_

![image description](/i/47261.png "tooltip.png")

8\. Then I'll work on other issues mentioned in #998

### Timeline/milestone

_During the internship period I'll be active in the community, ask doubts through out (I get tons of doubts). Create issues, solve them, try to help others who are contributing etc. Weekly update dates on every Monday_

Week 1 (Dec 5 - Dec 10)

- Meet the mentors, understand the code.
- Ask relavant doubts.

Week 2 (Dec 11 - Dec 17)

- See if their could be further improvement done on "geocoding search box/ detect key from URL"

Week 3 (Dec 18 - Dec 24) and Week 4 (Dec 25 - Dec 31)

- Drag Image onto page load (It's a little complex task)

Week 5 (Jan 1 - Jan 7)

- local saving of maps, via localStorage

Week 6 (Jan 8 - Jan 13)

- generating a SVG of the map using the positions and client-side webgl-distort

Week 7 (Jan 16 - Jan 21)

- Allow current map state (like a "save game" button) to be exported to a downloadable "mapknitter-saved.json" format

Week 8 (Jan 22 - Jan 28)

- maps would still be exportable using our cloud exporter

Week 9 (Jan 29 - Feb 4)

- Bootstrap tooltips or any UI related work

Week 10 (Feb 5 - Feb 11) and Week 11(Feb 12 - Feb 18)

- Discuss with mentors and work on stretch goals

Week 12 (Feb 19 - Feb 25) and Week 13 (Feb 26 - Mar 3)

- Buffer week

### Needs

- Documentation of [MapKnitter.org](http://MapKnitter.org)
- Great community of people and mentors
- Set of different images to upload in [archive.org](http://archive.org), for testing.

### First-time contribution

Comments:

- Comments, to show overall community involvement (like helping others): [https://github.com/search?p=1&q=commenter%3Avanithaak+org%3Apubliclab&type=Issues](https://github.com/search?p=1&q=commenter:vanithaak%20org:publiclab&type=Issues)

Created Issue:

- Add Polygon to searched area: [https://github.com/publiclab/Leaflet.DistortableImage/issues/1250](https://github.com/publiclab/Leaflet.DistortableImage/issues/1250)

Open Issue(s):

- Save positions of map in localStorage: [https://github.com/publiclab/Leaflet.DistortableImage/pull/1225](https://github.com/publiclab/Leaflet.DistortableImage/pull/1225)
- Fetch positions of map in localStorage to a downloadable file(mapknitter.json): [https://github.com/publiclab/Leaflet.DistortableImage/pull/1237](https://github.com/publiclab/Leaflet.DistortableImage/pull/1237)
- Enhance menu items by using bootstrap toolitps: [https://github.com/publiclab/Leaflet.DistortableImage/pull/1249](https://github.com/publiclab/Leaflet.DistortableImage/pull/1249)

Closed PRs:

- Geocoding Search Box: [https://github.com/publiclab/Leaflet.DistortableImage/pull/1158](https://github.com/publiclab/Leaflet.DistortableImage/pull/1158)
- First FTO: [https://github.com/publiclab/Leaflet.DistortableImage/pull/1207](https://github.com/publiclab/Leaflet.DistortableImage/pull/1207)
- Detect key from longer URL: [https://github.com/publiclab/Leaflet.DistortableImage/pull/1175](https://github.com/publiclab/Leaflet.DistortableImage/pull/1175)

---------

### Experience

**Previous Experience:** In my previous experience as a Front-End Developer Intern at
Wellness Forever, I worked on various projects for the company. I collaborated with Project
Manager and Senior Developer to deliver the final product. We ensured that our projects are
delivered before deadlines, and it's made according to company's requirements. During my
Freelance in Wellness Forever I had to work on the existing projects and enhance the UI.
Before Wellness Forever, I worked with Avlin Studios as Web Developer Intern, where I we
made 60+ HTML Email Templates with the team of interns for the better reach of the
company and bring new clients.

**Knowledge of Software & Open Source:** I've had not only experience in Software & Tech
but also in Open Source, which is very popular among students for its opportunities. I have
designed 5 logos for Google Code In' 19, participated in hackathons, learnt new technologies
during the short span of time.

---------

### Teamwork

I've got many opportunities to work in a team.

- Back in High School, me and my best friend, participated in a Science Exhibition and went to Nationals.
- Organised successful events in High School and College, with a team of 4 atleast.
- Partcipated in Hackathons.
- Now , I'm working part-time as a Front End Dev, where you have to work together to deliver projects before deadline.

The common thing here to be self-motivated is to prove yourself, you can handle a team and work together and there's always room for improvement and growth.

---------

### Passion

I live in the most polluted city in India, What Public lab is doing was quite intriguing to me. So, I started contributing to the project. I've made a project in High School to reduce car accidents with the help of sensors and Arduino.

Public Lab has a very welcoming community and mentors, who made me feel included, while I was contributing and they allow people with any experience to contribute to their projects! Open Source is for everyone.

### Audience

I believe the people who are aiming to understand or predict Earth's atmospheric phenomena including the weather like meteorologists, would be highly benefitted by using a powerful tool like MapKnitter. Where, they can share their predictions easily by uploading the images and sharing the coordinates through a simple JSON file.

This is what Public Lab wants to do, investigate environmental concerns, using inexpensive DIY techniques.

### Commitment

I do understand it's a full time commitment. So, I'm ready to give 30 - 40 hours per week. Open to negotiating work hours!