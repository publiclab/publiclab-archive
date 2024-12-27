---
title: "SoC proposal: Improving UI and Structure of Leaflet Environmental Layers"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, response:18440, lat:20.303417, lon:85.78125'
author: rkpattnaik780
path: /notes/rkpattnaik780/04-05-2019/soc-proposal-improving-ui-and-structure-of-leaflet-environmental-layers.md
nid: 18967
uid: 577587
cids: 23734,23796,23815,24047,24111
---

# SoC proposal: Improving UI and Structure of Leaflet Environmental Layers

by [rkpattnaik780](/profile/rkpattnaik780) | April 05, 2019 15:32

April 05, 2019 15:32 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [first-time-poster](/tag/first-time-poster), [rgsoc-2019](/tag/rgsoc-2019), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [soc-2019-proposals](/tag/soc-2019-proposals), [response:18440](/tag/response:18440), [lat:20.303417](/tag/lat:20.303417), [lon:85.78125](/tag/lon:85.78125)

----

## Project Information:

Organization: Public Lab

Student: Ramakrishna Pattnaik

Potential Mentors: Jeffrey Warren, Igor Wilbert

## Contact Information:

Github: [https://github.com/rkpattnaik780](https://github.com/rkpattnaik780)

Gitlab: [https://gitlab.com/rkpattnaik780](https://gitlab.com/rkpattnaik780)

Affiliation: College Of Engineering and Technology, Bhubaneswar, India

Location: Bhubaneswar, India

Project title: Leaflet Environmental Layers

Email: [rkpattnaik780@gmail.com](mailto:rkpattnaik780@gmail.com)

LinkedIn: [linkedin.com/in/rkpattnaik780](https://www.linkedin.com/in/rkpattnaik780/)

Time zone: UTC +5:30

Blog: [medium.com/@rkpattnaik780](https://medium.com/@rkpattnaik780)

Gitter handle: rkpattnaik780

I am a pre-final year student of Computer Science and Engineering from College of Engineering and Technology, Bhubaneswar.

## Project Description:

This library is built using LeafletJS Library and using this we can choose combinations of layers to display on map where each layer provides some environment related data.

## Abstract:

Improving the code structure and user interface of leaflet environmental layers along with adding more functionalities and additional layers.

## Problems and solutions:

#### Coding guidance to add new layers

- A quickstart guide for adding new layers can be highly helpful for making new contributors familiar with the codebase and helping them add new layers.
- Tutorials providing step by step approach to add a new layer can be provided along with live examples.

#### Issue template for adding new layers

- An issue labelled 'new layer' should be self sufficient in terms of relevant information.
- A methodology should be clearly defined for addition of new layers into the library in a consistent manner.

#### Improving modularilty

- The current codebase has some amount of redundant codes and scope for increasing modularity.
- We can use webpack to keep layers in separate files and bundling them together.

#### Internal documentation and linting

- Each function should be properly explained.
- Linting should be provided to ensure the code maintains readability and can be easily grasped by a new comers.
- The code should follow a proper style guide, like one laid out by Google: [https://google.github.io/styleguide/jsguide.html#formatting-comments](https://google.github.io/styleguide/jsguide.html#formatting-comments)

#### Adding tests

- The library uses a lots of API, making it difficult to check manually if all of them are working manually.
- JavaScript test frameworks like Jasmine can be used to test the functioning of APIs and layers time to time.

#### Lack of active contributors to the library

- The library has currently a small number of regular contributors. Focus should be given on attracting new contributors and motivating them to keep contributing.
- One-to-one mentoring can be followed till a new contributor gets comfortable with the code base and a good amount of 'fto' issues should be made regularly.
- Good documentations and contributing guidelines will be very helpful to attract new and active contributors.

#### Incorporating Leaflet.VectorGrid plugin

- The library currently supports raster tiles which are slowly rendered as compared to vector tiles.
- Many of the layers are gradually moving to vector tiles. Even the OpenInfraMaps have switched to vector tiles which is why the layers aren't working in the library anymore.

#### Improving the User Interface

- Improving the content of popup.
- Supporting minimal mode to display dots instead of markers in a togglable manner.
- Displaying optional legends for each layer.
- Keeping track of bounding box of each layer and the current view to prevent display of unnecessary stuffs.
- Using tabs to show toggle layers.

#### Including a working demo for fix whenever map is modified

- Using surge for generating the static web-page demo link every time a pull request is made to get a preview of the changes made.

#### Incorporating TravisCI

- TravisCI can be used for testing and linting purposes.
- It can be used to tests each time a PR is made.

#### Addition of new layers and improving layer management

- Many new layers including - sea level rise layers, historical flooding data, national emissions inventory data layer, additional fractracker layers, air monitoring layers, etc.
- Standardization of layer types and modules to add layers of generic type.
- Enable/Disable the option to toggle layers based on the current map bounds.

## Timeline:

This is a rough schedule of my work as the part of GSoC. It will be subject to

modifications as suggested by the community.

#### Post proposal Submission (09/04 - 06/05):

- Getting more familiar with the code base by solving more issues.
- Coding guide for addition of new layers and issue template.
- Exploring through various Leaflet plugins and learning Jasmine for testing.

#### Community Bonding (06/05 - 27/05):

- I will use this time for discussing strategies for improving the structure of the library.
- Finalising the UI by selecting from various proposed UI mockups.

#### Week 1 (28/05 - 02/06):

- Identification and creation of functions to help reduce redundancy in the layers.
- Refactoring layers to use the common functions.

Week 2 (03/06 - 09/06):

#### Week 1 (28/05 - 02/06):

- Standardization of different layer types.
- Code to make addition of new layers of a generic type easier

#### Week 3 (10/06 - 16/06):

- Implementing Leaflet.VectorGrid plugin and fixing the OpenInfraMap layer which currently uses vector tile layers.

#### Week 4 (17/06 - 23/06):

- Displaying optional legends for each layer.
- Implementing minimal mode to toggle between markers and dots.

#### **First evaluation (24/06 - 28/06)**

#### Week 5 (24/06 - 30/06):

- Improving content of the popup with thumbnails and links.
- Using Leaflet-Hash to open the map at a given location and zoom level.

#### Week 6 (01/07 - 07/07):

- Implementing the bounding box strategy, keeping track of available layers and showing only those which intersect with the current map bounds.

#### Week 7 (08/07 - 14/07):

- Event listener to handle identification of new layers and notifying the user.
- Enable/Remove layers based on current map bounds.

#### Week 8 (15/07 - 21/07):

- Storing information about new layers in JSON files.
- Implementation of new layers.

#### **Second evaluation (22/07 - 26/07)**

#### Week 9 (22/07 - 28/07):

- Adding documentations for the library.
- Using eslint instead of jshint for linting.
- Issue template, PR template, Coding guidance for adding new layers.

#### Week 10 (29/07 - 04/08):

- Writing tests for the library using Jasmine and HTML tests for proper functioning of the map.

#### Week 11 (05/08 - 11/08):

- Configuring TravisCI for the library.
- Incorporating surge for previews during PR.

#### Week 12 (12/08 - 18/08):

- Buffer period to catch up with backlog.
- Refactor the code.
- Bug fixing (If any left)
- Refining documentation

#### Week 13 (19/08 - 26/08):

- Prepare for final submission.
- Discuss future scope of the project.

#### **Final evaluation (26/08 - 02/09)**

#### Post final evaluation:

- Mentoring first time contributors...
- Getting familiar with other public lab projects that use this library and contributing to them.

## Needs:

I would need all the guidance and feedback from the community to ensure the project is heading in a desirable direction. I might also need the help of previous contributors of the project to understand the implementation of certain aspects of the project.

## First-time contributions:

I feel public lab follows a really amiable approach to welcome new contributors. I believe every new comer faces difficulty in finding a suitable issue to work upon and getting his doubts cleared by the community. The community website serves well in helping the newcomers find a good first issue and I have always found the community to be quick and patient when it comes to solving doubts.  
For my first contribution, I found all the issues to be already claimed. I asked the community for helping me find an issue in the gitter channel and was asked to look at issues labeled ef→-candidate.

My first contribution : [https://github.com/publiclab/leaflet-environmental-layers/pull/124](https://github.com/publiclab/leaflet-environmental-layers/pull/124)  
It felt great to have my first PR merged in this project. I was glad to receive a invite to join the Public Lab community that motivated me to keep contributing to this project.

Open issues: [https://github.com/publiclab/leaflet-environmental-layers/issues/created\_by/rkpattnaik780](https://github.com/publiclab/leaflet-environmental-layers/issues/created_by/rkpattnaik780)  
Closed PRs: [https://github.com/publiclab/leaflet-environmental-layers/pulls?q=is%3Apr+is%3Aclosed+author%3Arkpattnaik780](https://github.com/publiclab/leaflet-environmental-layers/pulls?q=is%3Apr+is%3Aclosed+author%3Arkpattnaik780)  
Comments: [https://github.com/search?utf8=%E2%9C%93&q=commenter%3Arkpattnaik780+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Arkpattnaik780+org%3Apubliclab&type=Issues)

# Experience:

I am Ramakrishna Pattnaik, a pre-final year Computer Science and Engineering student from College of Engineering and Technology, Bhubaneswar. In my academic curriculum, I have opted for courses in programming, data structures, algorithms, databases, operating system, and AI. Apart from my regular curriculum, I am a web developer who has primarily worked with MEAN stack along with Flask, Vue.js, D3.js and other popular web technologies. I am proficient in C, C++, Java and Python programming language.

I was always fascinated to see apps making our day to day lives easier and I intend to contribute to software that will impact the lives of people. My programming journey began from higher secondary when I had basics of C++ programming and SQL in the course curriculum. As soon as I joined college I ventured more into technologies beyond the usual course structure. I started working on full stack website development using MEAN stack along with responsive web design and data visualization. Having experience as a freelance website developer, I am confident at Android application development and also have experience in AI projects particularly in "Deep Learning" and "Computer Vision".

I have done two web development internships under startups as a student which helped me gain more knowledge regarding the best practices of web development as well as production-level code. The first internship revolved around creating a database management system. My second internship had me working with geospatial data along with database storage and map-based data visualizations. I have good knowledge of Git and actively use GitHub for contributing and collaborating in projects.

**GitHub profile**: [https://github.com/rkpattnaik780](https://github.com/rkpattnaik780)

**GitLab profile**: [https://gitlab.com/rkpattnaik780](https://gitlab.com/rkpattnaik780 "https://gitlab.com/rkpattnaik780")

Projects :-

- [Illness Predictor](https://github.com/rkpattnaik780/Illness_predictor)
- [Engineer's Cup Live](https://github.com/rkpattnaik780/engineers-cup-live-score "https://github.com/rkpattnaik780/engineers-cup-live-score")
- [Angular-socket yeoman](https://www.npmjs.com/package/generator-socket-ng1)
- [Crimson](https://github.com/rkpattnaik780/crimson/)

## Team work:

I have worked in a team for most of my projects, coding competitions, hackathons and internships. I have participated in various hackathons in city & national level and won two. I have done two web development internships in startups. My first internship revolved around creating a database management system. My second internship had me working with geospatial data along with database and map-based data visualizations. I have been comfortable working in team and always considered to be a team player. I believe that developing something as a team makes the project finer as it has inputs from different perspectives as well as helps the developers learn from best parts of each other.

## Passion:

Climate change has become a matter of since the last two decades. Our environment has become more polluted than ever and as concerned human beings we need to protect it from further degradation. According to a recent survey, India accounts for 22 of the 30 most polluted cities of the world. According to the report, air pollution will cause around 7 million premature deaths globally next year and have a major economic impact. I wish to be a part of the Public Lab family cause I want to play my part in this big fight against climate change.

## Audience:

I want my work to help the various newly established environmental NGOs. I also want new contributors to find this project beginner friendly and get familiar with open source.

## Commitment:

I am very well aware of the efforts it is going to take to make this project successful. I am ready to give my best in order to make this endeavour successful and will love to continue with Public Lab through and beyond the summer.

\_\_