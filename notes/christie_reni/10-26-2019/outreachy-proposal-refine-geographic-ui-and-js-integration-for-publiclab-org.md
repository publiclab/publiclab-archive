---
title: Outreachy proposal: Refine Geographic UI and JS Integration for PublicLab.org
tagnames: soc, outreachy, first-time-poster, outreachy-2019, outreachy-2019-proposals, response:18518
author: christie_reni
path: /notes/christie_reni/10-26-2019/outreachy-proposal-refine-geographic-ui-and-js-integration-for-publiclab-org.md
nid: 21306
uid: 630062

---

# Outreachy proposal: Refine Geographic UI and JS Integration for PublicLab.org

by [christie_reni](../profile/christie_reni) October 26, 2019 20:06

October 26, 2019 20:06 | Tags: [soc](../tag/soc), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2019](../tag/outreachy-2019), [outreachy-2019-proposals](../tag/outreachy-2019-proposals), [response:18518](../tag/response:18518)

----

## About me

**Name:** Renisha Christie. A

**Location:** India

**GitHub:** [crisner](https://github.com/crisner)

**Twitter:** [crisner86](https://twitter.com/crisner86)

**LinkedIn:** [renishachristie](https://www.linkedin.com/in/renishachristie/)

**Website:** [https://www.renishachristie.com/](https://www.renishachristie.com/)

## Project description

Refine the UI and JS integration of leaflet environmental layers for [PublicLab.org](http://PublicLab.org)

### Abstract/summary (<20 words):

Refine existing features and implement new ones for creating UI that is friendly for new and experienced users alike.

### Problem

Improve map UI, and use geographic data and user information for better user experience and easier sharing of information in map layers.

1. Make the layers control more readable by grouping layers and formatting them
2. Zoom in to user's location if the user shares their location
3. Provide an input field for users to search for a location
4. Display the number of layers available for a location when a map is zoomed in
5. On expanding layer control, prioritize the layers available to make it easy for the user to find
6. When a user selects a layer that has a legend, inform the user so they can decide if they want the legend displayed or hidden(eg: Justicemap layers)
7. Make it easier to add common layer types so that the code is not repeated
8. Add testing for all layers
9. Update documentation
10. Add a button to share the map onto other pages/sites
11. Guide users on how to use the UI through a tour/walkthrough.

### Timeline/milestones

| Week | Days | Tasks |
|------|------|-------|
| week 0 | Dec 03 - Dec 09 | 1) Discuss and review tasks with mentors.<br> 2) Work with leaflet control as discussed in [issue #156](https://github.com/publiclab/leaflet-environmental-layers/issues/156) by using Leaflet.LayerTreePlugin by Alexander Arakelyan - [Demo](https://rawgit.com/bambrikii/leaflet-layer-tree-plugin/master/examples/basic-example.htm) or Leaflet.Control.Layers.Tree by Javier Jimenez Shaw - [Demo](https://jjimenezshaw.github.io/Leaflet.Control.Layers.Tree/examples/options.html)<br> 3) Style layer control elements. |
| week 1 | Dec 10 - Dec 16 | 1) Work on zooming in on map based on user location using geolocation.<br> 2) Implement a search field.<br> 3) Work on zooming in based on location entered by the user in the search field.<br> 4) Display or alert the number of layers available in the current location when the user is zoomed in.<br> 5) Create FTO’s to encourage contribution.<br> 6) Get feedback from mentors |
| week 2 | Dec 17 - Dec 23 | 1) Work on suggestions received from mentor feedback.<br> 2) Implement a toggle button to display the number of available layers which toggles to the wider menu.<br> 3) Show available layers with a wide menu similar to the mockup in [issue #232](https://github.com/publiclab/leaflet-environmental-layers/issues/232).<br> 4) Implement a report functionality for layers that accept reports like OdorLog referred from [issue #138](https://github.com/publiclab/leaflet-environmental-layers/issues/138).<br> 5) Update user documentation<br> 6) Create more FTO’s at the end of the week. |
| week 3 | Dec 24 - Dec 30 | 1) Test UI functionality.<br> 2) Add option to display legends.<br> 3) Implement minimal mode as discussed in [issue #123](https://github.com/publiclab/leaflet-environmental-layers/issues/123).<br> 4) Add a button toggle between default mode and minimal mode. |
| week 4 | Dec 31 - Jan 06 | 1) Work on reducing repetitive code and create a function to create layers by passing in parameters.<br> 2) Discuss with mentors the common layer types to be considered and look for similarities in code.<br> 3) Implementation: <ul><li>Create a class for properties and methods common for all layers.</li><li>Create subclasses for common layer types</li><li>Enclose them in a function and pass layer-specific information as parameters.</li><li>Add standard layer methods as mentioned in <a title="" href="https://github.com/publiclab/leaflet-environmental-layers/issues/251">issue #251</a></li><li>Return the layer</li></ul> 4) Create FTOs for creating new layers once the implementation is done. |
| week 5 | Jan 07 - Jan 13 | 1) Standardize tests for layers.<br> 2) Document the process.<br> 3) Add tests for layers that do not have spec files.<br> 4) Create issues for writing tests to include contributions from the community.<br> 5) Include standard tests every time a new layer is added.<br> 6) Get mentor feedback. |
| week 6 | Jan 14 - Jan 20 | 1) Work on suggestions received from mentor feedback.<br> 2) Display a help button on the map that has options for users.<br> 3) Implement an option for user instructions or walkthrough for the map’s UI. [Possible plugins to be used during implementation](https://www.appcues.com/blog/73-tooltip-plugins-made-with-jquery-css-javascript-or-more).<br> 4) Add option to report bugs. Implement by directing the user to an issue template for bug reports.<br> 5) Add option to request new layers - referred from [issue #135](https://github.com/publiclab/leaflet-environmental-layers/issues/135). Implement by directing the user to an issue template for requesting new layers.<br> 6) Update documentation. |
| week 7 | Jan 21 - Jan 27 | 1) Display tooltips.<br> 2) Implement an embed button to generate an iframe that can be used in other pages or sites.<br> 3) Make it possible to embed the map with only the active layers.<br> 4) Enable users to choose the features they want to keep when they embed a map. |
| week 8 | Jan 28 - Feb 03 | 1) Work on a features list where the user can toggle features they want to use.<br> 2) Work on the possibility of grouping features.<br> 3) List information on all the layers, its data sources, URLs, and any other additional information for reference.<br> 4) Update documentation.<br> 5) Get mentor feedback.<br> 6) Create FTOs at the end of the week. |
| week 9 | Feb 04 - Feb 10 | 1) Work on suggestions received from mentor feedback.<br> 2) Check UI on mobile screens.<br> 3) Test map’s user interface.<br> 4) Test custom utilities. |
| week 10 | Feb 11 - Feb 17 | 1) Identify and record errors in geographic UI for [PublicLab.org](http://PublicLab.org).<br> 2) Identify and record areas that can be improved.<br> 3) Create FTOs or issues to facilitate contributions.<br> 4) Add marker spiderfier feature to all layers with markers.<br> 5) Look into [issue #121](https://github.com/publiclab/leaflet-environmental-layers/issues/121) - Spin out Leaflet.SpreadsheetLayer as a stand-alone Leaflet library |
| week 11 | Feb 18 - Feb 24 | 1) Continue to work on issues from the previous week.<br> 2) Review UI in leaflet environmental layers.<br> 3) Refine badge showing the number of active layers. ([PR](https://github.com/publiclab/leaflet-environmental-layers/pull/269) currently in review).<br> 4) Check for missing documentation and update the same.<br> 5) Testing the changes. |
| week 12 | Feb 25 - Mar 02 | 1) Find and resolve bugs.<br> 2) Refine and improve testing where possible.<br> 3) Get feedback from the mentors and work on it.<br> 4) Create FTOs.<br> 5) Write a report/blog about the experience. |

##### Implementation:

**Layer control**

The current layer control(fig 1.1) would be modified to make it easier for the users to find the layers. The layer needs to be less crowded by adding a bit more whitespace as shown in fig 1.2\. It would also be less distracting if the colours are removed from the layer names. Instead, a simple icon displaying the layer colour would be prepended to the layer names. The layers would need to be grouped according to their data or their source. The user would be able to expand or collapse these groups. These changes would be implemented with the help of plugins, samples for which can be seen in fig 1.0\.

![image description](/i/36225.png "fig01_2.png")

**Map features**

The map would be more user-friendly by improving existing features like the layer control as shown above and also by adding new features such as adding displays to alert the user of available layers or active layers and other options such as a search functionality and zooming in based on the user's current location for creating a better user experience. ![image description](/i/36243.png "fig02_3.png")

The features are numbered in the image above, which is used for reference in the details of its implementation below.

**1)** A toggle button to toggle between the default mode and minimal mode to be displayed once the minimal mode is implemented in code. This map would launch in default mode. The first toggle button, in the image below, shows the button state when the minimal mode is turned on and the second one is the default state. The position next to the layer control would be ideal as the user can easily toggle it on and off while browsing the layers.

![image description](/i/36244.png "1.png")

**2)** A display to show the number of layers the user has currently turned on. It updates the number of layers upon user interaction with the layers control.

**3)** **&** **4)** A help button for the user with options displayed upon click. The button would display the following options:

![image description](/i/36241.png "3.png")

-\> 'Suggest layer' which the user could select if they want to suggest a new layer to add to the map. Clicking on this would take the user to a template to collect layer information such as URLs, sources, data sets, what the layer is about and if the source accepts reports from the public.

-\> _'Take a tour'_ which the user could select if they want to know about the various features of the interface. This would be implemented through a walkthrough by displaying tooltips for each feature with an option to dismiss or go to the next one. This can be started automatically when the map is loaded with an option to dismiss in the beginning, when the features are newly introduced, and later make it available only through the help button after a while.

-\> _'Report a bug'_ for the user to select if they encounter any issues when using the map. Clicking on the button would take the user to an issue template for reporting bugs.

**5)** An option to display legends if legends are available in the active layers. The 'show legend' button shows up on the screen as a way to alert the user that legends are available for the selected layers if the legends are not already shown on the screen. Also, when the visible legends are closed the button will help get the legends back on the screen if the user needs them.

**6)** An embed button that provides the code to the user, that can be used to embed the maps on other pages or other sites. Considering adding sharing options to popular social networking platforms such as facebook and twitter.

**7) & 8)** A _'features'_ button that displays the features in the map that can be toggled on or off by the user. For example, if the user does not have any need for the search feature they can turn it off so that it is removed from the screen.

![image description](/i/36242.png "4.png")

Other options that can be added to the features list includes the _'embed'_ option and the _'show legends'_ option. This state is to be preserved when the map is shared or embedded to other pages and sites.

**9)** A badge that displays the number of layers available when the user is zoomed in on a location. The number of layers displayed shows the user the number of layers available for the location they are zoomed in. Considering adding a 'new' alert near the badge when the user moves the map to a location that has layers which weren't available in the previous location's bounds.

**10)** Upon clicking the badge(mentioned in the last point), a wider menu that lists only the layers available would be displayed in the centre of the screen(as shown in the main image). This wider menu will also enable the user to toggle the visibility of the map and report an event if community reports are accepted by the layers. There will also be a short description of the layers for the user to know what the available layers are about. Considering adding the ability for the user to arrange the layer order that affects the layer's position on the map. This is useful when the user wants a layer's markers to be displayed on the top from the rest.

**11)** A search field to enter the location the user wants to look at on the map. Entering the location in the search field and pressing enter moves the map to that location if the entered location is valid. This could be improved to accept location coordinates from the user.

### Needs

Guidance and feedback from mentors and support from the community.

### First-time contribution

Here are the pull requests I made.

- [https://github.com/publiclab/leaflet-environmental-layers/pull/264](https://github.com/publiclab/leaflet-environmental-layers/pull/264)
- [https://github.com/publiclab/leaflet-environmental-layers/pull/265](https://github.com/publiclab/leaflet-environmental-layers/pull/265)
- [https://github.com/publiclab/leaflet-environmental-layers/pull/269](https://github.com/publiclab/leaflet-environmental-layers/pull/269 "https://github.com/publiclab/leaflet-environmental-layers/pull/269")
- [https://github.com/publiclab/leaflet-environmental-layers/pull/270](https://github.com/publiclab/leaflet-environmental-layers/pull/270)
- [https://github.com/publiclab/plots2/pull/6576](https://github.com/publiclab/plots2/pull/6576)

Here are the first-timer issues I created.

- [https://github.com/publiclab/leaflet-environmental-layers/issues/271](https://github.com/publiclab/leaflet-environmental-layers/issues/271)
- [https://github.com/publiclab/leaflet-environmental-layers/issues/272](https://github.com/publiclab/leaflet-environmental-layers/issues/272)
- [https://github.com/publiclab/plots2/issues/6688](https://github.com/publiclab/plots2/issues/6688)  

---------

### Experience

I am a self-taught developer. I developed my skills from online courses. I also received the Grow with Google scholarship and earned a Front End Web Developer Nanodegree from Udacity. I have been learning React, Redux, and back-end web development with Nodejs, express, and MongoDB. I gained experience in working in a collaborative environment thanks to the student community in Udacity.

Some of my side projects:

- neighbourhood map - a single page app that shows restaurants in my neighbourhood made with Mapbox GL JS, a JavaScript library to render interactive maps. Link to repository -\> [https://github.com/crisner/neighbourhood-map](https://github.com/crisner/neighbourhood-map)
- weather app - A web app that displays current temperature and weather using Google's geolocation API to find the user's current location and Open Weather Map API for weather information. Link to repository -\> [https://github.com/crisner/weather-app](https://github.com/crisner/weather-app)

---------

### Teamwork

I worked in a team for a collaborative project called 'jeevan-rakht' as a Udacity scholarship student. I was responsible for building the initial landing page and designing UI mock-ups for the web app.

I have also worked in small teams in my previous jobs which were related to designing and 3d visualization.

---------

### Passion

I have held concerns regarding the planet close to my heart as a child and have always tried to stress the importance of nature and the environment whenever it came up in conversations. I believe we should be aware of how our actions affect our environment and make informed decisions about the choices we make to minimize our impact.

What I find interesting about Public Lab is that it is a platform that shares scientific knowledge about concerns relating to the environment. I am glad to be able to contribute to the cause of sharing such knowledge and equipping people with the right information.

### Audience

I want my work to help people, new or regular users, who are looking for information or to add or suggest new information to do so with ease.