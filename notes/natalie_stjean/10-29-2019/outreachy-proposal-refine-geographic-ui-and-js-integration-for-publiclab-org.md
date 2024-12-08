---
title: Outreachy proposal: Refine Geographic UI and JS Integration for PublicLab.org
tagnames: software, soc, outreachy, response:17359, first-time-poster, soc-2019, outreachy-2019, outreachy-2019-proposals
author: natalie_stjean
path: /notes/natalie_stjean/10-29-2019/outreachy-proposal-refine-geographic-ui-and-js-integration-for-publiclab-org.md
nid: 21336
uid: 625194

---

# Outreachy proposal: Refine Geographic UI and JS Integration for PublicLab.org

by [natalie_stjean](../profile/natalie_stjean) October 29, 2019 15:32

October 29, 2019 15:32 | Tags: [software](../tag/software), [soc](../tag/soc), [outreachy](../tag/outreachy), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster), [soc-2019](../tag/soc-2019), [outreachy-2019](../tag/outreachy-2019), [outreachy-2019-proposals](../tag/outreachy-2019-proposals)

## About me

**Name:** Natalie St Jean

**Location:** Massachusetts, USA

## Project description

### Abstract/summary (<20 words):

Map UI improvements and integration of maps and location data in the Public Lab website.

### Problem

Public Lab has some ability to track location information but right now it is not being fully utilized. Some methods of location tagging are broken, some just need to be refined. Leaflet Environmental Layers (LEL) maps UI needs updating before they can be fully integrated on the Public Lab website and in external websites.

This project has 3 phases.

The goal for the first phase is to create a consistent use of maps and geo-location data through the Public Lab website (plots2 repository). Public Lab has some ability to track location information but right now it is not being fully utilized and it has errors.

The second phase of this project involves updating the Leaflet Environmental Layers repository, specifically the UI. There are issues that need to be completed before embedding can be achieved.

The third phase is integrating embedded maps into PublicLab.


#### Phase 1: Geo-Location


#### Notes/Wiki Posts

At the “Add a location” section if the map is used to click and pan the background of the entire page changes slightly darker and does not return to white. There is no obvious reason it should be doing this, the background should stay white.
 
Problem to fix:

![Post location map - color changed][1]

The map is freezing when a location name is typed in - it gets stuck on the loading animation and won’t allow further input. Selecting a location via the map is working, selecting via current location button is working, but typing in a city name and clicking on the correct option is not working, the spinner just keeps spinning and never completes. This needs to be fixed.
 
Problem to fix:

![Post location map - frozen on search][2]
 
When a user makes a new page or note it should offer a default location of the user’s profile location. The location should be able to be changed or deleted by the user.
 
Clicking on “Blur your location: learn more” loads a new page - you lose the post you were making. This should open a new window, like the “Image tips” link does.
 
Suggested changes:

![Post location - suggested changes][3]
 
Also when a page or note is tagged with a location longitude and latitude any child elements made on or from that page should also have the same location tag.


#### User Profile

Currently Users can add their latitude and longitude using the powertag system on their profile. This is both hidden and not explained. Currently the function for viewing the map and selecting a location works but the tag is not being added to the user and the profile map does not get updated with the location.
 
Current method:

![Current method of location adding][4]

If a location is entered in this box it freezes with the spinner going and never shows a location:

![Location entry frozen][5]
 
I propose adding a more visible form on the Edit User page just for adding a location. For consistency I would use the same form as used on https://publiclab.org/post - it could have a button that will show the form when clicked on, or it could have a form that is always visible. If the user already has a location entered the button should read “Edit my location” instead. There should also be a “remove my location” button to reset it. The benefits of adding a location should be explained on the page, as should the ability to “blur my location”.
 
Suggested:

![User profile - add location collapsed][6]

When the Add location button is clicked on:

![User profile - add location expanded][7]

The button text will change to "edit" if the user has a location saved and a remove location button is added. This is the form:

![user profile - edit location expanded][8]

At the top of the user’s profile there is a map image that shows only for the user if they do not have a location saved. It has a button that says “share your location,” but when clicked on the screen gets darker and freezes. This should lead to the new method of location entry.
 
Problem to fix:

![User profile - old map frozen][9]
 
Suggested:

![User profile - new map prompt][10]
 
If a user does not have a current location we should display a prompt on their dashboard suggesting they enter one. This should include an explanation about the benefits of adding it. This should be able to be dismissed if they don’t want to add a location.
 
Suggested:

![Dashboard - new prompt][11]


#### Phase 2: Leaflet Environmental Layers

I will follow the [planning issues set out here](https://github.com/publiclab/leaflet-environmental-layers/issues/134).

With the end goal of updating the map view and enabling embedded maps on PublicLab, here are the issues I've chosen for this project:

- Add standard methods for each layer show() hide() isVisible() [#251][12]
- Create a layer name aggregator function [#253][13]
- Create collapsible sections in the Leaflet layers legend [#156][14]
- Add minimal 'dots' location marker option [#123][15]
- Location search bar: use autocomplete geocoder and re-center map (no issue yet)
- Track bounding box of view, display only layers that intersect with
viewable area [#117][16]
- Display "new items" marker if there are new layers in the viewable
area [#133][17]
- Enable easy sharing of maps from viewing a map ("embed" button) [#252][18] - Users will be able to select which layers to display in the embedded map. Inline maps will be responsive and styled with Bootstrap

#### Phase 3: Embedding LEL Maps on PublicLab.org

The final goal for this project is to create a way of using iframes to embed Leaflet Environmental Layers maps into wiki posts, notes and questions. If at that point there is an external page users can visit to create their own LEL map they will be able to easily carry it over into a post they are making at PublicLab. I propose we also have a built in way to create a map - say a button on the create post page - that they can then insert into their post/wiki page and customize using the existing UI controls and those expanded in Phase 2. Using these controls the user would be able to:

- select the base layer
- activate specific environmental layers or layer groups
- quickly tell if there are new layers that can be used
- select minimal dots markers or standard markers
- search a location or use the mouse to select the view
- view any legends that are attached to the viewed layers
 
Finally, once posted other users will be able to use the embed button to share the map on other pages or websites.
 
This shows a map with the search bar expanded and the layers menu closed. This also shows 1 method we could highlight new available layers: with a colored circle.

![Embedded map UI design 1][19]
 
This shows a map with the search bar closed and the layers menu expanded. It shows the 2nd method we could use to highlight new available layers: red text “new”

![Embedded map UI design 2][20]
 
The bottom left-hand corner of the map is reserved for legends that display with some of the map layers.


### Timeline/Milestones

This project starts Dec 2 2019 and ends Mar 3 2020. I've scheduled out the tasks by full week (each week ending on a Friday, except the last week + 2 days).

Every week also includes the following tasks:

- Testing: new functions need a unit test, new processes need a system test.
- Opening new FTO issues and welcoming newcomers in the chat and GitHub issues.
- Checking in with mentors and making changes to PRs based on feedback given.

#### Geo-Location on [PublicLab.org](http://PublicLab.org)

| Week | Tasks |
|------|-------|
| 1: Dec 2-6   | On place pages (/wiki/:place) and note pages (/notes/…) any items (eg buttons) posted on that page set the same lat and lon as the parent page<br> On posts and pages offer a default value of user’s profile location as first option |
| 2: Dec 9-13  | Fix “Add a location” drop-down box for adding a post<br> On add new post, set “Blur your location” link to open a new window |
| 3: Dec 16-20  | Fix implementation of location latitude and longitude for users using the power tags<br> On “edit profile” (/profile/:user/edit) user can set and delete their location<br> Make sure map on profile is updated correctly |
| 4: Dec 23-27  | Add prompt to Dashboard (/dashboard) to add user location, if user doesn’t have a location set.<br> Fix “share your location” on map on profile (/profile/:user), it isn’t working<br> Create tests for Dashboard and Edit Profile location updating and deleting |


#### Leaflet Environmental Layers - Map Display

| Week | Tasks |
|------|-------|
| 5: Dec 30 - Jan 3  | Add standard methods for each layer show() hide() isVisible() [#251][21] |
| 6: Jan 6-10  | Create a layer name aggregator function [#253][22] <br> Create collapsible sections in the Leaflet layers legend [#156][23] |
| 7: Jan 13-17  | Add minimal ‘dots’ location marker option [#123][24] |
| 8: Jan 20-24  | Location search bar: use autocomplete geocoder and re-center map |
| 9: Jan 27-31  | Track bounding box of view, display only layers that intersect with viewable area [#117][25] |
| 10: Feb 3-7  | Display “new items” marker if there are new layers in the viewable area [#133][26] |

#### Embedding Leaflet Environmental Layer Maps on [PublicLab.org](http://PublicLab.org)

| Week | Tasks |
|------|-------|
| 11: Feb 10-14  | For new wiki pages, notes and questions:<br> Add an option for adding an embedded (iframe) map into the post<br> Allow users to choose which environmental layers to include on the map<br> Use responsive Bootstrap styling on inline maps |
| 12: Feb 17-21  | Enable easy sharing of maps from viewing a map (“embed” button) [#252][27] |

#### Finishing Up

| Week | Tasks |
|------|-------|
| 13: Feb 24 - Mar 3  | Finish up any incomplete issues<br> Complete a new issue, if time allows<br> Make my final report |

### Needs

Most of what I need is available online as documentation and I will need guidance from the Mentors.

### First-time Contribution

**My FTO issue:**  
**[](https://github.com/publiclab/mapknitter/pull/1064)**[https://github.com/publiclab/mapknitter/pull/1064](https://github.com/publiclab/mapknitter/pull/1064) (merged)

**Contributions:**  
[https://github.com/publiclab/plots2/pull/6402](https://github.com/publiclab/plots2/pull/6402) (open)  
[https://github.com/publiclab/plots2/pull/6472](https://github.com/publiclab/plots2/pull/6472) (merged)  
[https://github.com/publiclab/plots2/pull/6422](https://github.com/publiclab/plots2/pull/6422) (open)

**List of Created FTOs:**  
[https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Anstjean+label%3Afirst-timers-only](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Anstjean+label%3Afirst-timers-only "https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Anstjean+label%3Afirst-timers-only")

### Experience

GitHub: [https://github.com/nstjean](https://github.com/nstjean)

I started writing code in high school and loved it! I attended the University of the Fraser Valley (Abbotsford, BC, Canada) and received my Bachelors of Information Systems, with a focus on Object Oriented Programming in Java. I achieved the Dean's List for most of my semesters and was awarded several scholarships.

After college I freelanced part-time as a Web Developer, working mainly with PHP, MySQL, WordPress and other Content Management Systems. I also did design work with HTML, CSS and Photoshop.

After taking a break to raise children I've started back in again with classes and practice to update my skills. I have experience with HTML, CSS, JavaScript, JQuery, PHP. I also spent some time playing with NodeJS. While I have not worked in a Ruby project before I don't find it very hard to switch to a new language, it's just a different way of framing the same concepts.

Recently I completed a project: [mnffl.net](http://mnffl.net/) - Git repository is here: [https://github.com/nstjean/mnffl](https://github.com/nstjean/mnffl)  
This app was written in Laravel/PHP with a MySQL database, styled with Bootstrap. I find the structure of functionality of Rails to be very similar to Laravel, so even though I had never worked in Rails before I was able to jump in.

### Teamwork

I have worked in a collaboratively many times in a non-technical setting. I am a part the executive board for the Parent-Teacher-Organization (PTO) for an elementary school; I am a Co-Leader for a Girl Scout Troop and help plan events with our Girl Scout Service Unit; I have been a leader/moderator for various online message boards. I know well the value of good communication.

As a web developer I have done contract work for companies as a freelancer, I have worked with small business owners to create their website, but I have never worked in a fully collaborative setting. This is the main reason I wanted to work on Open Source, to learn the workflow and gain experience creating code in a communal setting. I am really enjoying having others around to ask for help and get feedback from.

### Passion

I love working with Non-Profit Organizations and have volunteered my time often - both with Web Development and in other capacities: animal rescues, school organizations, and Girl Scouts. I feel it's important to spend my time on good causes.

I absolutely love science and it's become somewhat my mission in Girl Scouts to bring STEM to these young, energetic girls. I want them to grow up feeling engaged and informed, and to throw their own passion into whatever science field interests them. It is so important to open up science to a wider audience, to make it accessible and understandable, not just for their knowledge but for the benefit of society. I was very excited to see Public Lab as an option in Outreachy and knew that it was a great fit for both my skills and my interests.

### Audience

The audience for these updates are mostly non-web-savvy users. These may be scientists well-versed in the topics they are writing about, or they may be an interested layperson who is looking for knowledge and would look to collaborate. They will have limited knowledge of web app systems and how they work.

  [1]: /i/36166.png "Post_4.png"
  [2]: /i/36171.png "Post_3_BORDERED.png"
  [3]: /i/36167.png "Post_2_with_text_2_BORDERED.png"
  [4]: /i/36155.png "Fig_1.png"
  [5]: /i/36172.png "Fig_1_D.png"
  [6]: /i/36157.png "User_Profile_1a_with_text_BORDERED.png"
  [7]: /i/36158.png "User_Profile_1b_BORDERED.png"
  [8]: /i/36159.png "User_Profile_3_BORDERED.png"
  [9]: /i/36160.png "Fig_2.png"
  [10]: /i/36161.png "User_Profile_4_with_text_BORDERED.png"
  [11]: /i/36162.png "Dashboard_1_BORDERED.png"
  [12]: https://github.com/publiclab/leaflet-environmental-layers/issues/251
  [13]: https://github.com/publiclab/leaflet-environmental-layers/issues/253
  [14]: https://github.com/publiclab/leaflet-environmental-layers/issues/156
  [15]: https://github.com/publiclab/leaflet-environmental-layers/issues/123
  [16]: https://github.com/publiclab/leaflet-environmental-layers/issues/117
  [17]: https://github.com/publiclab/leaflet-environmental-layers/issues/133
  [18]: https://github.com/publiclab/leaflet-environmental-layers/issues/252
  [19]: /i/36168.png "Map_Option_1_Closed.png"
  [20]: /i/36169.png "Map_Option_2_Open.png"
  [21]: https://github.com/publiclab/leaflet-environmental-layers/issues/251
  [22]: https://github.com/publiclab/leaflet-environmental-layers/issues/253
  [23]: https://github.com/publiclab/leaflet-environmental-layers/issues/156
  [24]: https://github.com/publiclab/leaflet-environmental-layers/issues/123
  [25]: https://github.com/publiclab/leaflet-environmental-layers/issues/117
  [26]: https://github.com/publiclab/leaflet-environmental-layers/issues/133
  [27]: https://github.com/publiclab/leaflet-environmental-layers/issues/252