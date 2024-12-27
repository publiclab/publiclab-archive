---
title: "Outreachy proposal: "

tagnames: 'software, soc, soc-2018, rgsoc-2018, outreachy, outreachy-2018, outreachy-2018-proposals, response:17359, first-time-poster'
author: faithngetich188
path: /notes/faithngetich188/11-02-2018/outreachy-proposal.md
nid: 17468
uid: 555582

cids: 21102,21106,21127,21140

---

# Outreachy proposal: 

by [faithngetich188](../../../profile/faithngetich188) | November 02, 2018 20:40

November 02, 2018 20:40 | Tags: [software](../tag/software), [soc](../tag/soc), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018), [outreachy-2018-proposals](../tag/outreachy-2018-proposals), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster)

----

## About me

I am an avid opensource enthusiast who loves to develop software solutions using simplistic approaches to complex problems. I embody excellence, passion, integrity, and collaborations as my core value. above all, I am an individual who is smart, friendly, willing to learn and loves challenges.

_Self-Motivation: I am highly determined to reach my goals, once set. I understand the value that I can give to a project when I am motivated and make the project my own._

_Adaptability: I am very flexible, and adapt easily to new environments. The constant in life is change, so knowing how to be fluid and rise above when changes occur is something I have learned to appreciate_

_Teamwork: I have been part Agile ventures community and Rails girls Nairobi community. This has taught me the essence of understanding team dynamics and how it impacts the productivity of a team._

_I am also a triathlete - swimming is my favorite._

**Affiliation** Opensource junior developer at Agile Ventures.

**Location:** Nairobi-Kenya

Contacts: [faithngetich188@gmail.com](mailto:faithngetich188@gmail.com)

## Project description

Abstract/summary (<20 words):

### Problem

_What problem(s) does your project solve?_

_My project gives a rich and very insightful visualization of community trends and activity._

### Timeline/milestones

Note: I will test drive all my solutions.

1st Week

- Onboarding week
- Meet and get to know everyone I will be working closely with.
- Discus and set up required meetings/check-ins.
- Review the proposed UI mock-ups.

2nd Week & 3rd week

- Implement the UI button of adding the CSV download button and the hover effect of the graph.
- (i) Add the Download button in the view plots2/app/views/stats/index.html.erb file.
- (ii) Backend: Work on the functionality to get raw data from the stats page issue. The current need is to be able to download the raw data .csv file and be able to see the numbers per week. This will allow easy access to the raw data.
- (iii) Controller action to handle the download click action.
- (iv) Add a route for this action.
- (v) Add a module to handle download logic.
- ![image description](/i/27479.jpg "Download_CSV.jpg")

4th Week & 5th week

- Statistics on questions answered versus unanswered one. Work on the insightful visualizations of this statistics.
- (i) Add an over statistics partial that will render the total questions asked and the pie chart in the plots2/app/views/questions.
- (ii) Add methods that provide total questions, answered questions, and unanswered questions to the statistics partial.

![image description](/i/27474.jpg "Questions__and_Answers.jpg")

6th Week & 7th Week

- Work on the Activity page. The aim is consolidation/standardization of this page with that of Contributors stats, so adding similar graphs will give a visualization of the activity statistics.
- (i) config/locales/views/notes/stats/en.yml to add the activity stats table heading text i.e 40 contributions in this period.
- (ii) Refactor the app/views/stats/range.html.erb file to include the graphs Nodes.
- (iii) Refactor the Back by and forward by view. 
- ![image description](/i/27516.jpg "Activity_page.jpg")

  
8th Week

- Work on the creation of weekly caching of data task to address the performance issue.

9th Week

- Write a script to go back through posts and tag first-timer posts with `first-time-poster` tag, retroactively so they show up at [https://publiclab.org/tag/first-time-poster,](https://publiclab.org/tag/first-time-poster,) to improve stats on first-time posting
- The script will go through everyone's post and add a first-time-poster tag to their first post. A rake task that can only be run by an authorized person.
- Depending on how many users are in the production database, it can be run in batches.

10th Week & 11th week

- Stretch goal: Make statistics system compatible with GrimoireLab

12 Week

- A retrospective of my whole internship experience.

### Needs

_- Documentation of the project_

\_  
\_

_- Weekly/ Bi-weekly syncs to measure my progress and receive feedback on my overall performance._

_- An environment where I feel empowered to grow._

\_- More information on the \_caching of data weekly to reduce the load task. I'd like to have more context on the data we're referring to and what's causing the performance issue.

- More information on the specific data we will be using.
- GrimoireLab can help us do the following,

1. Automatic and incremental **data gathering** from almost any tool (_data source_) related with contributing to Open Source development (source code management, issue tracking systems, forums, etc.)
2. Automatic gathered **data _enrichment_**, merging duplicated identities, adding additional information about contributors affiliation, calculation delays, geographical data, etc.
3. **Data visualization**, allowing filtering by time range, project, repository, contributor, etc.

which of these three functionalities are we interested in?

### First-time contribution

[https://github.com/publiclab/infragram-js/pull/9](https://github.com/publiclab/infragram-js/pull/9)

[https://github.com/publiclab/pi-builder/pull/32](https://github.com/publiclab/pi-builder/pull/32)

[https://github.com/publiclab/pi-builder/pull/31](https://github.com/publiclab/pi-builder/pull/31)

[https://github.com/publiclab/infragram/pull/12](https://github.com/publiclab/infragram/pull/12)

[https://github.com/publiclab/infragram/pull/11](https://github.com/publiclab/infragram/pull/11)

[https://github.com/publiclab/webjack/pull/75](https://github.com/publiclab/webjack/pull/75)

[https://github.com/publiclab/webjack/pull/74](https://github.com/publiclab/webjack/pull/74)

[https://github.com/publiclab/mapknitter/pull/279](https://github.com/publiclab/mapknitter/pull/279)

[https://github.com/publiclab/mapknitter/pull/278](https://github.com/publiclab/mapknitter/pull/278)

[https://github.com/publiclab/spectral-workbench.js/pull/53](https://github.com/publiclab/spectral-workbench.js/pull/53)

[https://github.com/publiclab/spectral-workbench.js/pull/52](https://github.com/publiclab/spectral-workbench.js/pull/52)

[https://github.com/publiclab/spectral-workbench/pull/413](https://github.com/publiclab/spectral-workbench/pull/413)

[https://github.com/publiclab/spectral-workbench/pull/412](https://github.com/publiclab/spectral-workbench/pull/412)

[https://github.com/publiclab/image-sequencer/pull/404](https://github.com/publiclab/image-sequencer/pull/404)

[https://github.com/publiclab/image-sequencer/pull/403](https://github.com/publiclab/image-sequencer/pull/403)

[https://github.com/publiclab/Leaflet.DistortableImage/pull/109](https://github.com/publiclab/Leaflet.DistortableImage/pull/109)

[https://github.com/publiclab/Leaflet.DistortableImage/pull/108](https://github.com/publiclab/Leaflet.DistortableImage/pull/108)

[https://github.com/publiclab/leaflet-blurred-location-display/pull/15](https://github.com/publiclab/leaflet-blurred-location-display/pull/15)

[https://github.com/publiclab/leaflet-blurred-location-display/pull/14](https://github.com/publiclab/leaflet-blurred-location-display/pull/14)

[https://github.com/publiclab/leaflet-blurred-location/pull/158](https://github.com/publiclab/leaflet-blurred-location/pull/158)

[https://github.com/publiclab/leaflet-blurred-location/pull/157](https://github.com/publiclab/leaflet-blurred-location/pull/157)

[https://github.com/publiclab/inline-markdown-editor/pull/19](https://github.com/publiclab/inline-markdown-editor/pull/19)

[https://github.com/publiclab/inline-markdown-editor/pull/18](https://github.com/publiclab/inline-markdown-editor/pull/18)

[https://github.com/publiclab/leaflet-environmental-layers/pull/67](https://github.com/publiclab/leaflet-environmental-layers/pull/67)

[https://github.com/publiclab/leaflet-environmental-layers/pull/66](https://github.com/publiclab/leaflet-environmental-layers/pull/66)

[https://github.com/publiclab/community-toolbox/pull/68](https://github.com/publiclab/community-toolbox/pull/68)

[https://github.com/publiclab/community-toolbox/pull/66](https://github.com/publiclab/community-toolbox/pull/66)

[https://github.com/publiclab/plots2/pull/3687](https://github.com/publiclab/plots2/pull/3687)

[https://github.com/publiclab/plots2/pull/3671](https://github.com/publiclab/plots2/pull/3671)

---------

### Experience

I am a self-taught programmer. I started my programming journey using Python stack then switched to Ruby. I have considerable experience in the Ruby language with a bias in Rails, _an understanding of basic computer programming principles, OOP, data structures, and TDD. I am currently an opensource contributor at Agile ventures and have contributed to projects that have exposed to me Rails and bits of Javascript. Some of my contributions include:_

_1\. [https://github.com/AgileVentures/LocalSupport/commit/ae7cb8242c2b08a1fd037b17bf9dc441d9c534e2](https://github.com/AgileVentures/LocalSupport/commit/ae7cb8242c2b08a1fd037b17bf9dc441d9c534e2)_

_2\. [https://github.com/roschaefer/rundfunk-mitbestimmen/pull/865](https://github.com/roschaefer/rundfunk-mitbestimmen/pull/865)_

_3\. [https://github.com/roschaefer/rundfunk-mitbestimmen/pull/892](https://github.com/roschaefer/rundfunk-mitbestimmen/pull/892)_

4 [https://github.com/championer-org/championer\_one/commits?author=faithngetich&since=2018-08-31&until=2018-09-30](https://github.com/championer-org/championer_one/commits?author=faithngetich&since=2018-08-31&until=2018-09-30).

_5\. [https://github.com/roschaefer/rundfunk-mitbestimmen/pull/538/commits/e73ab599b38910f83ea822e31a5b767ab6ab1a83](https://github.com/roschaefer/rundfunk-mitbestimmen/pull/538/commits/e73ab599b38910f83ea822e31a5b767ab6ab1a83)_

_6\. [https://github.com/roschaefer/rundfunk-mitbestimmen/pull/830](https://github.com/roschaefer/rundfunk-mitbestimmen/pull/830)_

_7\. [https://github.com/AgileVentures/LocalSupport/pull/831](https://github.com/AgileVentures/LocalSupport/pull/831)_

_8\. [https://github.com/AgileVentures/LocalSupport/pull/627](https://github.com/AgileVentures/LocalSupport/pull/627)_

Some of my personal projects can be found on my GitHub repository.  
[https://github.com/faithngetich](https://github.com/faithngetich)

---------

### Teamwork

I am currently an active open source contributor as a junior developer to Agile Ventures, a fully remote UK Charity dedicated to crowdsourced learning and project development. We follow Agile methodology and thus I take part in scrums, weekly meetings, and retrospectives.

---------

### Passion

I am interested in Public Lab since it's an opensource project/community. _I am drawn to environments dedicated to open source and free software. I believe they should be free to copy and distribute so everybody on the planet can enjoy it._

_I pride in excellence and this is why I feel so much connected to Public Lab's mission to democratize science to address environmental issues that affect people. I believe that access to information enables societies to make better decisions about everything in our day to day lives like environment, health, diet, fashion and gladly Public lab makes this possible._

_I would be thrilled to have an opportunity to help develop this product and see it used to ease the everyday lives of people while appealing to their user experience._

I'm super passionate about understanding new technology and the impact the work I do has on projects in totality and with this, I'm ready to give 100% to ensure that I am successful.

### Audience

Improving Information access is my main goal. I believe that access to information enables societies to make better decisions about everything in our day to day lives. _I would like to harness the power of information in developing countries to engage people in matters of environment, politics, and governance._