---
title: "Modifying Expectations: A Progress Report"

tagnames: 'blog-submission, outreachy'
author: christie_reni
path: /notes/christie_reni/01-20-2020/modifying-expectations-a-progress-report.md
nid: 22350
uid: 630062

cids: 

---

# Modifying Expectations: A Progress Report

by [christie_reni](../../../profile/christie_reni) | January 20, 2020 10:43

January 20, 2020 10:43 | Tags: [blog-submission](../tag/blog-submission), [outreachy](../tag/outreachy)

----

The theme this time is 'Modifying Expectations' and this post is about my progress during the first half of my internship. I had submitted a project proposal with a project timeline which included tasks and goals that I had planned to accomplish during my internship period. Here's the link to my original project proposal: [My project proposal](https://publiclab.org/notes/christie_reni/10-26-2019/outreachy-proposal-refine-geographic-ui-and-js-integration-for-publiclab-org). The first time I had to modify the tasks I had in my timeline was when my internship began. Since my co-intern and I had timelines that overlapped we started by dividing up tasks that each of us would work on and had to reorder them according to priority with inputs from our mentors.

As time went on working together and completing goals, I had to move tasks around my timeline to work on ones that were more relevant to the previous tasks I had completed. There were times I was stuck on a task, specifically testing which took more time than I had planned. Then there were times that I worked on fixing bugs or other tasks which weren't initially planned.

**Week 1:** The first week started off with planning and discussing tasks with my mentors and co-intern. My first task was to fix map permalinks that were overwritten on page load. This was one of those tasks that weren't on my timeline. I had initially gotten stuck but got it working in a couple of days with some guidance. I then went on to work on an embed feature for Leaflet Environmental Layers library which was integrated into the Public Lab and Mapknitter website. This was supposed to be worked on this week, Week 7 but was prioritized over other tasks. It was an easy transition as it was related to the first task.

**Week 2:** I continued to work on the embed feature from the feedback from mentors and deployed it to gh-pages on my forked copy of the repo, worked on a bug where the active base layer on the map, integrated into the Public Lab website, was not selected in the map's layer control and fixed code formatting to be consistent across all the files in the LEL library.

![baselayer-bug](https://user-images.githubusercontent.com/29401459/70794425-9ee72c80-1dc3-11ea-8d7c-84e01e374132.png) ![baselayer-fix](https://user-images.githubusercontent.com/29401459/70794681-38aed980-1dc4-11ea-8233-7efa449e2a4f.png)

**Week 3:** I worked on making a domain name a settable option in the embed feature and writing tests for it, worked on fixing layer names in documentation and collected layer information, created a map control to display a note at the top of the map and cloned the demo page to show the new control on it.

![crisner.github.io_leaflet-environmental-layers_example_embed.html.png](https://renishachristieblog.files.wordpress.com/2020/01/crisner.github.io_leaflet-environmental-layers_example_embed.html_.png)

**Week 4:** I created a new layers menu control, from an existing mockup, that had layer groups, displayed more layer information and filtered layers that were not in the map bounds or zoom level.

![user-images.githubusercontent.com_29401459_71523891-f53e8a00-28f0-11ea-83b8-02395d4ccd6b.png (1).png](https://renishachristieblog.files.wordpress.com/2020/01/user-images.githubusercontent.com_29401459_71523891-f53e8a00-28f0-11ea-83b8-02395d4ccd6b.png-1.png)

**Week 5:** I wrote tests for the new layer menu. While trying to write tests with Jasmine, I was stuck trying to figure out errors. I tried to setup Karma test runner for Jasmine because it seemed to work but spent a lot of time trying to set it up correctly. It would have been a success if it weren't for the 404 errors where it couldn't find the dependencies linked in the fixtures. After discussing it with my mentors I finally figured out that the errors were because of es6 code I had in the file. It worked once I set up babel to transpile the code to es5\. I ended up implementing a search feature using a plugin while trying to take a break from testing.

**Week 6:** I started off by implementing an update to Fractracker mobile layer in the LEL library and refactored some code in the new layers menu. Also worked on errors and other bugs from updating the LEL library in [publiclab.org](http://publiclab.org). Apart from this, I worked on a new feature where a notification would show up if new layers were available when the user is interacting with the map.

![newmarker](https://user-images.githubusercontent.com/29401459/72167496-39518480-33f1-11ea-8f7d-a891d8fe1252.gif)

**Week 7:** This week I worked on fixing some bugs, added media queries for new layer menu for extra small screen sizes, and worked on getting the toggle control ready for use in a new minimal mode feature that I will be working on. The new layer menu was available only for the demo file. So, I worked on implementing it to be used when integrating it to other websites.

I tried to add first-timers-only issues which are important to welcoming new members into the community and updated documentation whenever I could. My work was also mainly on the Leaflet Environmental Layer(LEL) library. For anyone who compares my original timeline to what I've done so far, it can be evident that the tasks have been completely reordered. The tasks seemed to flow from one to another as they were relevant to each other and it was important to go along with it to keep the momentum. I have planned to finish tasks related to UI first and continue to focus on missing tests and the remaining tasks on my timeline for the second half of my internship.