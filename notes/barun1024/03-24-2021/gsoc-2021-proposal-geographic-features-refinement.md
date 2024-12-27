---
title: "GSoC 2021 Proposal: Geographic Features Refinement"

tagnames: 'software, soc, first-time-poster, gsoc-2021, gsoc-2021-proposals'
author: barun1024
path: /notes/barun1024/03-24-2021/gsoc-2021-proposal-geographic-features-refinement.md
nid: 26021
uid: 647185

---

![](https://publiclab.org/public/system/images/photos/000/043/037/original/Geographic_features_refinement.png)

# GSoC 2021 Proposal: Geographic Features Refinement

by [barun1024](../../../profile/barun1024) | March 24, 2021 22:28

March 24, 2021 22:28 | Tags: [software](../tag/software), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2021](../tag/gsoc-2021), [gsoc-2021-proposals](../tag/gsoc-2021-proposals)

----

## About Me

Name : Barun Acharya

Github : [https://github.com/daemon1024](https://github.com/daemon1024)

Project Title : Geographic Features Refinements

Gitter : daemon1024

Affiliation : Jaypee Institute of Information Technology, India

Location : Noida, India

Student year: Sophomore (second-year student)

Field of study: Computer Science and Engineering, B.Tech.

Portfolio : [https://daemon1024.github.io/](https://daemon1024.github.io/)

## Project Description

### Abstract/Summary (<20 Words)

Smoothen, expand and refine the various geographical features under Public Lab's website. This includes standardizing, adding new leaflet environmental layers, increasing content on [https://publiclab.org/map](https://publiclab.org/map) and various other refinements.

### Problems

##### Standardize "Spreadsheet to Layer"

We have an awesome utility to add a leaflet environmental layer using data sourced from a spreadsheet, more details at [https://github.com/publiclab/leaflet-environmental-layers#spreadsheet-based-layers](https://github.com/publiclab/leaflet-environmental-layers#spreadsheet-based-layers). But currently it's not feasible for non programmers to use this utility or how to source the data for the layer to be based upon.

###### Workflow

![workflow](https://user-images.githubusercontent.com/47106543/114304935-5a70bb80-9af3-11eb-9386-6e4663226a6f.png)

The above workflow doesn't need a server dependency as it is automated using GitHub API and actions, and in case of any failure it still provides a manual alternative.

The intended workflow would start with volunteers submitting the form, which automatically opens up an issue, which in turn triggers the GitHub action, the script runs in the action environment and finally generates a pull request with the new layer.

The proposed workflow has fallback for each and every step, in case any step has a failure there will be a provision to complete it manually.

In case every automation fails, the fallback and most basic workflow is providing the volunteer with instructions to open up an issue. Once a public lab contributor picks it up, they have to manually run the script to generate the new layer and make a pull request linking it back to the issue.

I understand that the primary audience might not all be developers and will try to maintain a smooth workflow for them while detailing out each and every fallbacks and progress while making the whole process extremely accessible.

Details about `spreadsheet2layer.js`:

- Provide an abstraction for [https://github.com/publiclab/leaflet-environmental-layers/blob/master/src/util/googleSpreadsheetLayer.js](https://github.com/publiclab/leaflet-environmental-layers/blob/master/src/util/googleSpreadsheetLayer.js)
- Has minimum required user inputs
- Auto Generate tests for the generated layer
- An extremely simplified function code to generate the layers
[![carbon(2).png](/i/43246)](/i/43246?s=o)

Some additional points to note:

- We can provide "Open Gitpod to try out new layer" option in the generated pull request.
- Providing an independent file/code which can be included/copied over to anyone's codebase so as to include the generated layer. We can see some examples at [https://github.com/publiclab/leaflet-environmental-layers#adding-layers-individually](https://github.com/publiclab/leaflet-environmental-layers#adding-layers-individually) but they still require LEL dependency. We can refactor some of the internal dependency so as anyone can include them.
![independent layer](https://user-images.githubusercontent.com/47106543/114310293-06240680-9b08-11eb-8a75-b3d76d793eb2.png)
- We can generate sample previews using these independent components and deploy them to static pages using github pages or alternatives.

##### Add and refine environmental layers as part of the Leaflet Environmental Layers library

Since we would have a new standardized process to add spreadsheet based layers, it will open up ample opportunity to add various layers.

Also there are many issues open regarding layer requests, broken layers or need for optimizations [publiclab/leaflet-environmental-layers/issues](https://github.com/publiclab/leaflet-environmental-layers/issues "https://github.com/publiclab/leaflet-environmental-layers/issues"). I will try to address them.

##### Increase amount of content shown per page-view at /map

Currently the content on [https://publiclab.org/map](https://publiclab.org/map) on initial load shows very few users/pages and gradually increases.

The current possible solution includes developing a microservice which scrapes the Public Lab API. This micro-service intends to replace the current direct API access.

Details about the microservice:

- Cache data from API to reduce server load?
- Provide data more in line with how we want to display content
- Provide a bbox-queryable GeoJSON service
- Ensuring the content is ranked by some filters like recency, views, comments, likes etc. . . as well as adding an option to provide custom filters.

The current API at `/api/nearbyPeople` returns data in the form of

```json
{
  "items": [
    {
      "doc_id",
      "doc_type",
      "doc_url",
      "doc_title",
      "latitude": "42",
      "longitude": "-71",
      "blurred": true,
       .
       .
    },
```

Since the microservice would be a GeoJSON service, the proposed form of data returned would be:

```json
{
  "type": "PlacesCollection",
  "places": [
    {
      "type": "place",
      "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
      },
      "properties": {
        "blurred": "",
        "id":"",
        "name":,
        data
        .
        .
        .
      }
    },
  ],
  "type": "PeopleCollection",
  "People": [
    {
      "type": "Person",
      "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
      },
      "properties": {
        "profile": "",
        "id":"",
        "name":,
        data
        .
        .
        .
      }
    },
  ]
}
```

Since GeoJSON would be a standardized format of data it would help integrate PL data with other applications as well.
For legacy support, we can choose to provide them both and only respond with GeoJSON when the API request type is `application/geo+json`.

##### Improving Load Times

We are currently loading individual nodes while monitoring loads. I propose to pre cluster various nodes based on zoom levels and we dynamically create requests based on the current bounding box. The simplest way is to use a plugin such as [Marker Clusterer](https://github.com/Leaflet/Leaflet.markercluster/). Clusterer helps the rendering on the client side greatly as it means the client computer doesn't have to draw hundreds/thousands of points, it just draws 10-40\.

![https://leaflet.github.io/Leaflet.markercluster/example/marker-clustering-realworld.388.html](https://media1.giphy.com/media/q4e8hWxpjnax2hcPbp/giphy.gif)

##### Ensure empty people grid squares don't generate pop-ups and ensuring grid squares with blurred locations are tinted

![image](https://user-images.githubusercontent.com/47106543/112377955-5596c400-8d0c-11eb-8c1b-4b5ce3ba3968.png)

Currently every empty grid square generates this pop-up. This pop-up should only be generated on grid squares which are actually blurred in line with [https://github.com/publiclab/leaflet-blurred-location](https://github.com/publiclab/leaflet-blurred-location) and these grid squares should be tinted and should be visibly different from other grid elements.

### Timeline

| Time period | Tasks |
|-------------|-------|
| Community Bonding Period | <li>Discuss&nbsp; any changes in my project or timeline with the mentors<br></li><li>Create GitHub projects/kanban boards to have structured goals and milestones</li><li>Go through the project, code-base and issues, set priorities for critical bugs and features</li> |
| Coding Period Starts |       |
| Week 1 (June 7, 2021 - June 14, 2021) | <li>Prototype spreadsheet to layer abstraction</li><li>Have a working spreadsheet2layer.js script which can generate leaflet layers</li> |
| Week 2 (June 14, 2021 - June 21, 2021) | <li>Add test harnesses to auto generate tests for layers</li><li>Refine and finalize various elements of the script</li><li>Establish the manual workflow for the standardized process</li><br> |
| Week 3 (June 21, 2021 - June 28, 2021) | <li>Set up webpage/element which contains the form</li><li>Set up GitHub Actions and Environment to run the script</li><li>Integrate the entire workflow</li> |
| Week 4 (June 28, 2021 - July 5, 2021) | <li>Inspect the process and write tests</li><li>Add further enhancements including gitpod/ static previews of new layers and independent code content generation</li><li>Add more leaflet environmental layers using the new process and help Public Lab’s community to contribute new layers through this new workflow</li> |
| Week 5 (July 5, 2021 - July 12, 2021) | <li><span><span>Write documentation and blogs to make community members as well as a wider audience acquainted with the new </span>standardized<span>&nbsp;workflow for adding new map layers.</span></span></li><li><span>Benchmark contents on PL People API&nbsp;</span></li><li><span>Plan out the needs of the service so as to increase the amount of content shown on map</span></li> |
| Week 6 (July 12, 2021 - July 19, 2021)<br>Evaluations (July 12, 2021 - July 16, 2021) | <li><span>Prototype the microservice which returns appropriate set of contents to be displayed on </span><code class="md-code md-code-inline">/map</code></li><li>Set up scripts for scraping content</li> |
| Week 7 (July 19, 2021 - July 26, 2021) | <li>Continue working on the microservice<br><span></span></li><li><span>Migrate the current integration to newly developed microservice</span><br></li> |
| Week 8 (July 26, 2021 - August 2, 2021) | <li><span>Write system and integration tests for the microservice</span></li><li>Develop solutions for ensuring appropriate pop-ups and tinted boxes on the map for blurred locations</li> |
| Week 9 (August 2, 2021 - August 9, 2021) | <li><span>Improve load times by bbox and tbox optimisations</span></li><li><span>Set up map clusters to further improve client side loads</span></li><li><span>Continuously benchmarking and improving load times</span></li> |
| Week 10 (August 9, 2021 - August 16, 2021) | <li>Buffer period for winding up any remaining tasks</li><li><span><span>Add finishing touches like style improvements and comments to my code</span></span></li><li><span><span>Do intensive bug testing and see if there are more test cases to be written.</span></span></li> |
| Week 11 (August 16, 2021 - August 23, 2021) | Code Submission and Final Evaluations |

I have only listed down the potential priority and focus tasks for each week in the above timeline, In addition to that my work in each week would be a blend of the following :

- Breaking down issues into smaller modular tasks
- Interacting and getting feedback from mentors
- Team meetings
- Helping out other contributors
- ##### Testing
Testing is a very important aspect of software development. It helps in more accurate, consistent and reliable results. I plan to add all unit, functional, integration and system tests, since we need them all for all 'units' to work cohesively. I will be adding unit tests after completing each unit/functions. For integration tests, I prefer the top-down approach and testing each unit integration step by step and expanding. Functional tests for handling edge cases and other behavioral tests.
- ##### Outreach
  - Writing blog post sharing my progress and GSoC experience along the way
  - Opening up FTO's for new contributors and help review any pull requests.
  - Improve Documentation, making them beginner friendly so as to make new contributors feel more guided through them.

### Contributions

I have been an active contributor throughout the Public Lab ecosystem of repositories - with significant contributions to Public Lab's Image Sequencer and Plots2\. Not only contributing with code and pull requests but being an active member by reviewing PRs, helping other fellow contributors, engaging in discussions and such. I am also part of the Image Sequencer CLI maintainers team and am working on the new test suite for sequencer CLI.

[Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Adaemon1024+org%3Apubliclab&type=Issues)

[Issues](https://github.com/issues?q=is%3Aissue+author%3Adaemon1024+archived%3Afalse+user%3Apubliclab+is%3Aopen "https://github.com/issues?q=is%3Aissue+author%3Adaemon1024+archived%3Afalse+user%3Apubliclab+is%3Aopen")

[Pull Requests](https://github.com/pulls?q=is%3Apr+author%3Adaemon1024+archived%3Afalse+user%3Apubliclab "https://github.com/pulls?q=is%3Apr+author%3Adaemon1024+archived%3Afalse+user%3Apubliclab")

### Experience

I feel very passionate about developing software and automating things. I feel very happy when my software helps people out and make their lives easier and more fun!

I primarily program in JavaScript and Go but not limited by them. I have worked on projects in various languages including Python, Ruby, Rust and C++.

Some of my notable projects are:

- **Needzo** - [https://devpost.com/software/needzo](https://devpost.com/software/needzo) | Auth0 Hackathon (Fifth-Community)  
Needzo lets those under self-isolation and other vulnerable groups request deliveries and allows local volunteers to sort through, claim, and complete those deliveries with a gamified approach.
- **EndangAR** - [https://devfolio.co/submissions/endangar-bfce](https://devfolio.co/submissions/endangar-bfce "https://devfolio.co/submissions/endangar-bfce") | Bitbox Winner - EchoAR Showcase
We wanted to spread and create more empathy and knowledge towards the environment and wildlife out there. EndangAR is our project through which we spread awareness of endangered flora and fauna through an interactive map interface and rendering plant and animal models in 3D as well as Augmented Reality
- **Bikeshed** - [https://github.com/daemon1024/bikeshed](https://github.com/daemon1024/bikeshed)  
A friendly neighborhood GitHub bot which automates trivial tasks for an organization and aims to provides a welcoming environment for newcomers.
- **Bolt262** - [https://github.com/daemon1024/bolt262](https://github.com/daemon1024/bolt262)  
It is CLI utility to run test262 tests for various hosts ( currently tested with node ). It currently aims to be as fast as possible and optimizations wherever possible.
- **TabuRei** - [https://github.com/daemon1024/TabuRei](https://github.com/daemon1024/TabuRei "https://github.com/daemon1024/TabuRei")  
TabuRei is an all-in-one browser extension to manage and store your tab clutter and restore them on the fly. It is fully Open-Source, and loaded with features. Try it at [https://addons.mozilla.org/en-US/firefox/addon/taburei/](https://addons.mozilla.org/en-US/firefox/addon/taburei/ "https://addons.mozilla.org/en-US/firefox/addon/taburei/")

I take workshops and talks to bridge the gap between newcomers and development and spread awareness for FOSS at Open Source Developers Community([OSDC](https://osdc.netlify.app/)). Some of the projects I have collaborated at OSDC :

- **Community Tools API OSDC** - [https://github.com/osdc/ct-api](https://github.com/osdc/ct-api)
Proposed and Working on the automation of organizing meetups and notifying the attendees for OSDC.
- **OSDC Bots** - [https://github.com/osdc/bots/commits?author=daemon1024](https://github.com/osdc/bots/commits?author=daemon1024)
Maintaining and Contributing various fun and automation features to the community bots available for discord and telegram.

Other open source contributions:

- **Add remove-members helper tool implemented in go** - [https://github.com/kubernetes/org/pull/2575](https://github.com/kubernetes/org/pull/2575)
- **Implement getting resource list for a service** - [https://github.com/keptn/keptn/pull/3232](https://github.com/keptn/keptn/pull/3232)
- **Consistently note in algorithms wherever steps may be inserted/modified elsewhere** - [https://github.com/tc39/ecma262/pull/2196](https://github.com/tc39/ecma262/pull/2196)
- **Make Pycon India 2020 site responsive** - [https://github.com/pythonindia/inpycon2020/pull/78](https://github.com/pythonindia/inpycon2020/pull/78)
- **Add graphiql create-react-app example** - [https://github.com/graphql/graphiql/pull/1510](https://github.com/graphql/graphiql/pull/1510)
- **Fix confusing error message in fs.utils** - [https://github.com/nodejs/node/pull/32896](https://github.com/nodejs/node/pull/32896)
- **Handle detached arrays in XRView** - [https://github.com/servo/servo/pull/26185](https://github.com/servo/servo/pull/26185)

### Teamwork

I have participated in various hackathons and collaboratively made solutions to various societal problems with teams of 3/4 and have accomplishments in many of them.
I volunteer at [OSDC](https://osdc.netlify.app/) and we conduct meetups and events as well as work on projects with the entire community and thus, know how to work in a community.
I am a firm believer of collaborative development and working with communities which is visible through most of my open source contributions.

### Passion

I have been involved with Public Lab for quite a while now, and I started contributing because how caring and progressive the community was and I am really passionate about giving back to the community and continuing as well as improving this welcoming environment in the future.

### Audience

This project aims to ease the process of adding interactive statistical map layers for volunteers and scientists which in-turn will help them display there research in much more intuitive manner. It will also attract developers and contributors who can leverage the LEL ecosystem. With additional optimized content on the `/map` page, it will improve the discoverability of research notes and community projects, bringing the Public Lab community closer and more interactive.

### Commitment

There is no conflict of interest in coding phase as of now and I don't plan to have any other commitment during the period. If there will be any sudden changes in university schedule, I will discuss with the mentors.

I'd like to mention that I will, as I have done previously, continue to actively interact with the newer contributors and provide insight and any help that I can regarding their PRs and issues during (and after) my GSoC period. Hence, I firmly believe that I will deliver my assignments with commitment and promptness.

I look forward to working with the awesome community of Public Lab for a long time!

### Needs

Help and guidance of my mentors as well as coordination from other contributors is all I need.