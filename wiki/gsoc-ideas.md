---
title: SoC ideas
tagnames: gsoc, developers, parent:gsoc, software-outreach, rgsoc-2019, gsoc-2019
author: warren
path: /wiki/gsoc-ideas.md
nid: 868
uid: 1

---

# SoC ideas

by [warren](../profile/warren), [liz](../profile/liz), [bansal_sidharth2996](../profile/bansal_sidharth2996), [harmanjolly97](../profile/harmanjolly97), [pydevsg](../profile/pydevsg), [IshaGupta18](../profile/IshaGupta18), [lit2017001](../profile/lit2017001), [govindgoel](../profile/govindgoel), [debasish_sahoo1998](../profile/debasish_sahoo1998), [alaxallves](../profile/alaxallves), [sagarpreet](../profile/sagarpreet), [keshavgarg234156](../profile/keshavgarg234156), [siaw23](../profile/siaw23), [gauravano](../profile/gauravano), [jainaman224](../profile/jainaman224), [souravirus](../profile/souravirus), [divyabaid16](../profile/divyabaid16), [IgorWilbert](../profile/IgorWilbert), [harshithpabbati](../profile/harshithpabbati), [mkashyap354](../profile/mkashyap354), [Supun](../profile/Supun), [ryzokuken](../profile/ryzokuken), [ashwinvasudevan](../profile/ashwinvasudevan), [nedhorning](../profile/nedhorning), [stevie](../profile/stevie), [ddileona](../profile/ddileona), [mathew](../profile/mathew), [dhenrynola](../profile/dhenrynola), [Sreyanth](../profile/Sreyanth), [patcoyle](../profile/patcoyle), [gonzoearth](../profile/gonzoearth)

February 28, 2012 22:12 | Tags: [gsoc](../tag/gsoc), [developers](../tag/developers), [parent:gsoc](../tag/parent:gsoc), [software-outreach](../tag/software-outreach), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019)

This is the ideas page for Public Lab's [Rails Girls Summer of Code](https://railsgirlssummerofcode.org/) and [Google Summer of Code program](/gsoc), programs for student fellows to work on free and open source projects. 

**Important** -- if you're new to Public Lab software contributing, see our **[Welcome page](https://code.publiclab.org#r=all)** and our [Contributing page](/wiki/contributing-to-public-lab-software)

## Get in touch

We love :heart: to hear from new contributors! Reach out on our Gitter chatroom: http://gitter.im/publiclab/publiclab.


## Contribution guidelines

Our [Contributing to Public Lab Software](/wiki/contributing-to-public-lab-software) page has our preferred guidelines for submitting changes. Please read it over!

We also love it when students show that they can work well with us by trying a `first-timers-only` issue, and even **submitting a pull request**. This gives us confidence that you've read our contribution guidelines and would be ready to jump into a project. To get started, see our welcome page:

> Welcome page: https://code.publiclab.org/#r=all

****

### How to post a proposal

(for students)

Please first leave a comment on the post below, and tell us what you're interested in and a bit about your experience. It's also great to hear if you've forked [one of our codebases](/wiki/developers)) and installed it on your computer [or a test environment](). Done with that? How about running tests? Tell us how far you've gotten, and ask us for help -- we're happy to help you get started!

Ask questions, and share your ideas:

> Call for SoC mentors for 2021: https://github.com/publiclab/plots2/issues/9219


## Questions

[questions:soc]

****

## 2022 Ideas

Note that these projects could fit in either a smaller or larger project timeline, depending on the applicant's experience, or the depth of detail the applicant wants to go into on each item. We're happy to discuss this with you!


### Legacy code deprecation

**Part of:** https://github.com/publiclab/plots2

**Description:** (This project may be combined with another small project) Our codebase retains a variety of old database models, code segments, and removing them is a delicate task involving correcting tests, restructuring the database, and more. This project will:
    
* build on completed projects to continue the work of removing older legacy models and tables from our system
* adjust or remove tests along with code removal
* use Rails database migrations to remove unused tables
* produce archival exports of data which we are deleting if necessary
* merge and combine deprecated content types into standard ones; for example, Maps become Wiki pages
* test out migrations in development environments and on our cloned copy of the production server, to ensure smooth deployment
* increase code coverage as a result of reducing unused and untested code
* deprecation projects listing is available at https://github.com/publiclab/plots2/milestone/24
* read more at: https://github.com/publiclab/plots2/issues/956

**Outcomes:** Reduction in codebase size and complexity, easier maintainability and higher code quality and consistency.

**List:** https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab 

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Project size:** 350h OR could be split into 2 175h projects

**Potential mentors:**  Jeffrey Yoo Warren (jywarren),  Cess, ADD YOUR NAME HERE



### Refine User Interfaces across PublicLab.org

Part of: https://github.com/publiclab/plots2 

**Description:** As teachers increasingly use PublicLab.org in the classroom, we are looking to improve a collection of User Interface/User eXperience (UI/UX) and related features on the platform. Some are navigational, some are stylistic, and some introduce new interfaces or ways of browsing content. For any project involving a design change, we are interested in seeing mockups/designs first, discussing with community representatives, and then developing code. Projects would include the following:

This project will:

- Brainstorm better interlinked navigation between https://publiclab.org/wiki pages <> https://store.publiclab.org <> individual tag pages (like https://publiclab.org/tag/water-quality).
- Template for random “generator” that will bring up a random piece of content for a given topic, for use around the site to re-surface old content.
    - It may need some tuning to ensure old content meets some threshold minimum # of views, comments, etc - to ensure it’s interesting enough!
- Better disambiguate “search for this term” vs. “Go to the page for this topic” in navbar search box UI. Pressing Enter for “water” goes to tag page /tag/water, but pressing escape then enter searches for the string “water” - let’s manage this better and use better textual hints using Bootstrap UI elements!
- Develop a category tree interactive feature at /topic-tree with nested topics in a tree view like: https://www.appropedia.org/Appropedia:Fundamental_category_tree using asynchronous calls to Rails and JavaScript code to insert nested https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details elements
- Add a date-picker to new timeframe selector for /tag/____ pages: https://github.com/publiclab/plots2/issues/2439 
- Change information hierarchy on Profile Pages to feature user-generated content, not group content, in topical “cards” shown in main column, for example on https://publiclab.org/profile/sarasage each card shows posts by other users
- Streamline the process for teachers (https://publiclab.org/education) becoming moderators (https://publiclab.org/moderation) (this may be a refinement of process)

**Outcomes:** An improved, more coherent UI on PublicLab.org for educators in particular.

**List:** https://gitter.im/publiclab/publiclab

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Project size:** 350h OR could be split into 2 175h projects

**Potential mentors:** Jeffrey Yoo Warren (jywarren), Cess, Tilda




### MapKnitter Local

Part of: https://github.com/publiclab/Leaflet.DistortableImage/, https://github.com/publiclab/mapknitter 

**Description:** MapKnitter.org is a complex and powerful system which lets you upload your own aerial images, position (rubbersheet) them in a web interface over existing map data, and share via web or composite and export for print. We are looking for ways this could be done without depending on a server in the long-term, and want to try making use of the latest in JavaScript image processing to prototype full-resolution image processing and download in the browser. This project sets groundwork for working locally/offline or from a static page using just the core browser-based library Leaflet.DistortableImage, then goes on to attempt a completely in-browser map stitching exporting process. 

This project will:

- Add a geocoding search box to the demo so upon creating a map users can navigate to a specific place
- Add a “drag image onto page to add” feature to the Leaflet.DistortableImage demo so people can import multiple images into maps in the demo at https://publiclab.github.io/Leaflet.DistortableImage/examples/export.html  
- Allow current map state to be exported to a downloadable “distortableGeoJSON.json” format (see https://github.com/publiclab/image-sequencer-app#usage for current JSON format and https://gis.stackexchange.com/q/298808 / https://geojson.org/ for official GeoJSON standard)
Add local saving of maps, via localStorage (may be limited by filesize?) so you don’t lose your work when you refresh the page (using “distortableGeoJSON.json”)
- Allow map initialization from a “distortableGeoJSON.json” format which auto-places the images
    - Could it detect missing images from the distortableGeoJSON.json file and prompt the user to drag them onto the page? This would take some UI work.
- The hard part: local full-res map exporting: 3 possible approaches: 
    - switch to Ruby exporter in exporting demo: https://github.com/publiclab/Leaflet.DistortableImage/issues/751 (maybe easiest, although it means you’d have to find how to send the local images to the remote exporter)
    - rework the JS exporter for local use: https://github.com/publiclab/image-sequencer-app (challenging to rework server-side multi-threaded Node code)
    - or use the existing webgl-distort individual image export (https://github.com/publiclab/Leaflet.DistortableImage/#full-resolution-download) and stack them into one giant image using https://github.com/nodeca/pica (hard but relatively straightforward)

**Stretch goals:**

- Rework portions of MapKnitter.org code to:
    - use DistortableGeoJSON to save map state
    - Initialize map using DistortableGeoJSON

**Outcomes:** The ability to create and export maps from a static HTML/JS-based page, even offline.

**List/chat:** https://gitter.im/publiclab/publiclab

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** hard

**Project size:** 350h OR could be split into 2 175h projects

**Potential mentors:** Jeffrey Yoo Warren (jywarren), Cess, Tilda


## Infragram.org full-screen UI and video upload

(There is a matching UI-focused Outreachy project idea below. If a fellow is selected, that will absorb much of the UI design portion of this project but collaboration and coordination will still be required for implementation.)

Part of: https://github.com/publiclab/infragram 

**Description:** The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. Infragram.org enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen, accept multiple resolutions of video, output multiple resolutions, and will allow dragging in a recorded video instead of a still image for conversion.

This project will:

* Allow cross-browser drag-and-drop on the entire page instead of just selecting an image
* Design a new interface (using [Bootstrap 4](https://getbootstrap.com/docs/4.6/); current version is [Bootstrap 3](https://getbootstrap.com/docs/3.3/)) for Infragram.org which is full screen with a toolbar, solicit and incorporate input from user community
* Move Q&A feature into a Help menu
* Add a popup “Welcome” modal box which guides your first few steps based on tutorial at https://publiclab.org/n/15075 and more at https://publiclab.org/infragram#Activities 
* Integrate new cross-platform WebRTC video library for Safari iOS support: https://github.com/publiclab/infragram/issues/39
* accept multiple resolutions of video (see https://github.com/publiclab/spectral-workbench/issues/893 for an example of doing this!)
* Allow drag and drop of a video, which will play on loop and have controls to scroll through, pause, etc. Note that this won’t actually upload the video but will process it locally.
* Allow conversion of the whole video (this will be difficult) by recording from the canvas (see https://webrtc.github.io/samples/src/content/capture/canvas-record/ and https://medium.com/@amatewasu/how-to-record-a-canvas-element-d4d0826d3591)
    * allow selecting multiple output resolutions as well
* Write UI tests for new Infragram UI, using Jest (https://jestjs.io/)
* Stretch goal: allow zooming/panning of video within canvas
* Stretch goal: allow selecting an area of the screen and calculating an average color value (or average NDVI value from the scale)
* Stretch goal: expand the colorize menu to describe each colormap and offer thumbnails (could use https://sequencer.publiclab.org to achieve this)

**Outcomes:** A better layout and UI for Infragram.org, and ability to use it on uploaded videos.

**List/chat:** https://gitter.im/publiclab/publiclab

**Prerequisites:** JavaScript

**Difficulty Level:** medium

**Project size:** 350h, or 175h if focus is on non-UI portions only

**Potential mentors:** Jeffrey Yoo Warren (jywarren), Cess, Tilda


### Outreachy projects:

## Outreachy: Infragram.org full-screen UI design

This project is reserved for Outreachy applicants. There is a matching project for GSoC applicants above.

Part of: https://github.com/publiclab/infragram 

**Description:** The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. Infragram.org enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen and create space for new features like multiple resolutions of video, dragging in a recorded video instead of a still image for conversion, and pop up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

This project will:

* Design a new interface (using [Bootstrap 4](https://getbootstrap.com/docs/4.6/); current version is [Bootstrap 3](https://getbootstrap.com/docs/3.3/)) for Infragram.org which is full screen with a toolbar, solicit and incorporate input from user community
    * Learn about and understand the existing UI first
    * Understand the UI flow and goals, various different use cases
    * Create a wireframe and solicit feedback
        * Allow cross-browser drag-and-drop on the entire page instead of just selecting an image
        * Suggestion: move Q&A feature into a Help menu
        * Suggestion: add a popup “Welcome” modal box which guides your first few steps based on tutorial at https://publiclab.org/n/15075 and more at https://publiclab.org/infragram#Activities 
    * Try creating a working “mockup” interface with Bootstrap elements (that is not hooked up to JS yet)
    * Iterate with user feedback
* Implement the new interface in HTML/JS (perhaps in cooperation with possible Google Summer of Code intern on corresponding project) - begin with an “index2.html” next to the original index.html
* Ensure each feature/function still works
* Stretch goal: design a new colorize popup modal window to describe each colormap and offer thumbnails (could use https://sequencer.publiclab.org to achieve this)

**Outcomes:** A better layout and full-screen UI for Infragram.org.

**List/chat:** https://gitter.im/publiclab/publiclab

**Prerequisites:** JavaScript

**Difficulty Level:** medium

**Potential mentors:** Jeffrey Yoo Warren (jywarren), Cess, Tilda


### Outreachy: MapKnitter.org Spam Management system

Part of: https://github.com/publiclab/mapknitter

Description: We have a range of spam management tools and systems at PublicLab.org, but MapKnitter.org has persistent spam, even though users rely on PublicLab.org to log in. We have a range of ideas to improve the situation, ranging from integrating MapKnitter.org with PublicLab’s spam management system, creating a unified visual style between the systems, implementing user status restrictions for moderated users and maps, and more. 

This project will:

* Create a view of all recent maps in a table with buttons for moderating each, very similar to https://publiclab.org/n/24349 
* Display information about each map, such as the author’s status, how many images it has, whether images have been placed, whether the author is new
* Check via the Public Lab API whether the current logged-in user is a moderator to determine if they can view the spam table
* Add a link/tab from publiclab.org/spam2 to the MapKnitter spam dashboard
* Display a list of any maps a banned PublicLab.org user has (if any) when they are banned
* Offer a button to spam all maps by that user in one click, like mapknitter.org/spam/user/<username>
* Forbid login by users who’ve been banned on MapKnitter, by setting their status to 0
* Regularly check (hourly? daily?) (when running current_user function) if users have been banned from publiclab.org (via an API call)
* Build on early work by Gaurav Sachdeva in https://github.com/publiclab/mapknitter/labels/spam 

List: https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab

Prerequisites: JavaScript, Ruby on Rails

Difficulty Level: medium

Potential mentors: Jeffrey Yoo Warren, Cess, ADD YOUR NAME HERE





****

## 2021 Ideas

An in-depth discussion of these ideas has been posted at https://github.com/publiclab/plots2/issues/9257; please feel free to ask questions or offer ideas there! 


### Education-related usability upgrades

**Part of:** https://github.com/publiclab/plots2

**Description:** Due to the growing community of educators using our PublicLab.org content management system, we are hoping to tackle a collection of systems, features, and fixes focused on educational users, and incorporating feedback from our community of educators. These would include the following:


* Include usernames you’ve used recently, or who are recently active on the site, in autocompletion results with full wildcard matching (this will require some SQL and API tuning)
* Adding listing of drafts to profile pages (and designing a minimal way to display these in keeping with our style guide: https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab)
* add tooltips explaining latitude/longitude tags on pages such as https://publiclab.org/wiki/puerto-rico, linking to https://publiclab.org/location-privacy as well
* Complete email notification opt-outs for moderators, to improve this system for educators: https://github.com/publiclab/plots2/issues/9114. Update the instructions for humans here: https://publiclab.org/wiki/moderation#Moderation+systems as the step to "subscribe to all tags" is out-dated. 
* Create system for pre-approved signup invitations for students to create accounts that bypass the moderation queue (i.e. if they have such a code as https://publiclab.org/signup?key=12345 they can bypass moderation) -- and make such links expire after 1 week. 
* Refined display of co-authored posts on profile pages (see https://publiclab.org/wiki/power-tags#General+power+tags and examples at https://publiclab.org/notes/otimmerman077_stu/02-18-2020/bioluminicence-detector https://publiclab.org/profile/amallozzi) (first seeking community reps input to refine design choices)
* Refine design and details of newly relaunched dashboard with community input

**List:** https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab 

**Prerequisites:** HTML/CSS, some JavaScript, some Ruby on Rails

**Difficulty Level:** easy

**Potential mentors:**  Jeffrey Yoo Warren, Cess Wairimu, ADD YOUR NAME HERE



### Tag/topic system refinements

**Part of:** https://github.com/publiclab/plots2

**Description:** Our growing community has seen a major reorganization of content and activity around topic areas in the past year or two, and as this featureset has matured, we are looking to refine and improve it based on community input. This project would include the following:

* Fixes to MYSQL queries driving https://publiclab.org/stats/subscriptions , which has known bugs at https://github.com/publiclab/plots2/issues/7908
* Tag locking: ensure that if content is tagged `locked` by a mod/administrator, only mods/administrators can add/delete tags on that page (building on existing system at https://publiclab.org/wiki/locked) (To prevent banned users from adding tags as a form of spam.)
* Retroactively delete tags added by users who have been banned
* Prevent first-time-posters from tagging work except their own, add appropriate warnings/alerts and/or hide tag form from first-time-posters
* Develop a category tree interactive feature at /topic-tree with nested topics in a tree view like: https://www.appropedia.org/Appropedia:Fundamental_category_tree
* Refine display of interrelationship of topics, potentially using `parent:____` tags (as described in https://publiclab.org/wiki/power-tags#General+power+tags)
* Tweak co-authorship author link display on note pages by separating author names with commas, not “with” - for example on https://publiclab.org/notes/otimmerman077_stu/02-18-2020/bioluminicence-detector 
* Finalize display of tags/topics in sidebar using small "cards" styles -  https://github.com/publiclab/plots2/pull/8684
* Continued refinements to the Cytoscape visualization at https://publiclab.org/tags based on community input

**List:** https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab 

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**  Jeffrey Yoo Warren,  Cess Wairimu, ADD YOUR NAME HERE




### Geographic features refinements

**Part of:** https://github.com/publiclab/plots2

**Description:** Public Lab community members are increasingly sharing geographic context while sharing on the PL website. We have a robust geographic metadata system and site-wide prompts to add geotags. This project will focus on key optimizations and additions which will smooth and expand geographic features, including:

* A “Spreadsheet to Layer” workflow using a GitHub issue template and/or bot to walk people through formatting a spreadsheet, inserting it into a JavaScript file, and opening a pull request to add the data to the Leaflet Environmental Layers library, which drives geo layers on the Public Lab site: https://github.com/publiclab/leaflet-environmental-layers
* This may include: developing a static microsite on GitHub Pages where you can enter a Spreadsheet URL and it generates a code file for a Leaflet layer
* It might also auto-generate tests for the new layer
* Increase amount of content shown per page-view at /map - currently we show few users/pages per refresh; increase while monitoring server load
* Possible solution: Develop a prototype micro-service to scrape the Public Lab API for geographic content and generate a bbox-queryable GeoJSON service, to display both people and pages, to replace direct API access at https://github.com/publiclab/leaflet-environmental-layers/blob/main/src/PLpeopleLayer.js
* Ensure empty people grid squares don’t generate popups - following https://publiclab.org/location-privacy and https://github.com/publiclab/leaflet-blurred-location
* Ensure grid squares with blurred locations are tinted
* Develop ideas and prototypes for how to ensure “important” or expected content is surfaced
* Ranking by recency, views - brainstorm with community reps
* Add and refine environmental layers as part of the Leaflet Environmental Layers library
* Improve load times by ensuring bbox and tbox optimization

**List:** https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab 

**Prerequisites:** JavaScript, Node, Ruby on Rails

**Difficulty Level:** hard

**Potential mentors:**  Jeffrey Yoo Warren, ADD YOUR NAME HERE





### Translation system refinements

**Part of:** https://github.com/publiclab/plots2

**Description:** (This project may be combined with another small project) Our internationalization (i18n) system exists but lacks a consistent workflow for importing new translations, as well as suffering from some HTML parsing and UI shortcomings. This project will:
    
* refine the custom translation helper which handles missing languages and prompts users to contribute to translation
* resolving HTML parsing issues causing it to fail on complex nested HTML
* Improving CSS display of missing translation prompt
    * develop a page to recruit translators and document and provide workflow guidance for code tasks related to translation import
    * develop improved workflows for first-timers-only issues based on translation coding tasks; for example, ways to easily self-test translations or to prepare pull requests for review
    * read more at: https://github.com/publiclab/plots2/#internationalization

**List:** https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab 

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**  Jeffrey Yoo Warren,  Cess, ADD YOUR NAME HERE


### Legacy code deprecation

**Part of:** https://github.com/publiclab/plots2

**Description:** (This project may be combined with another small project) Our codebase retains a variety of old database models, code segments, and removing them is a delicate task involving correcting tests, restructuring the database, and more. This project will:
    
* build on completed projects to continue the work of removing older legacy models and tables from our system
* adjust or remove tests along with code removal
* use Rails database migrations to remove unused tables
* produce archival exports of data which we are deleting if necessary
* merge and combine deprecated content types into standard ones; for example, Maps become Wiki pages
* test out migrations in development environments and on our cloned copy of the production server, to ensure smooth deployment
* increase code coverage as a result of reducing unused and untested code
* deprecation projects listing is available at https://github.com/publiclab/plots2/milestone/24
* read more at: https://github.com/publiclab/plots2/issues/956

**List:** https://gitter.im/publiclab/publiclab, https://gitter.im/publiclab/publiclab 

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**  Jeffrey Yoo Warren,  Cess, ADD YOUR NAME HERE


### spectral-workbench.js JS/Rails integration

**Part of:** https://github.com/publiclab/spectral-workbench, https://github.com/publiclab/spectral-workbench.js

**Description:** 
Our newly revamped and tested library at spectral-workbench.js was designed to work both on its own (https://github.com/publiclab/spectral-workbench.js/) or as a JavaScript component in a larger system, the spectralworkbench.org Rails application. Work on the standalone library is nearly complete and this project will take on the integration of the newly revamped and re-organized code into the parent Rails application, following a pattern shown at https://github.com/publiclab/inline-markdown-editor for housing a JS project within a Rails project. Parts of this project are already included for displaying saved and graphed data at pages like https://spectralworkbench.org/spectrums/205427, but the new code will replace the live capture interface at https://spectralworkbench.org/capture/, and will need to be able to access the following server-side resources and routes:

* fetching recent calibrations by the logged-in user
* prompting people to log in to save data
* detecting the need to calibrate and directing people to the appropriate page and/or docs
* fetching the most recent calibration and using it to display calibrated data

The current JavaScript code at https://spectralworkbench.org/capture performs all of this, and should be saved at https://spectralworkbench.org/capture/legacy, while the new code should be launched first at https://spectralworkbench.org/capture/new and compared for feature parity with the legacy version before any legacy systems are move or modified. The project will also require some Rails full-stack system tests to confirm functionality in the new UI.

**List:** https://gitter.im/publiclab/publiclab

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**  Jeffrey Yoo Warren,  Cess, ADD YOUR NAME HERE

****

## 2020 Ideas

> Call for SoC mentors for 2020: https://github.com/publiclab/plots2/issues/7360

The following have been reviewed and formatted by our Summer of Code team. 

Mentors, please **add your name by any project you'd be able to mentor with**!

### Spectral Workbench - Rails and DevOps upgrades (high priority)

**Part of: ** [Spectral Workbench](https://github.com/publiclab/spectral-workbench)

**Description: **
Spectral Workbench is an open-source tool to perform low-cost spectral analysis and to share those results online. It consists of a Ruby on Rails web application for publishing, archiving, discussing, and analyzing spectra online -- running at [](http://spectralworkbench.org). Contains a core library for analyzing and manipulating spectral data, that  has been spun out into its own self-contained JavaScript module, which is then included into this application.

This a big project, that will involve good knowledge not only in Ruby on Rails and DevOps implementation. It is also a very important project since Spectral Workbench is a core module for the PL ecosystem, as elucidated by [this image](https://publiclab.org/system/images/photos/000/032/413/original/Screen_Shot_2019-05-22_at_5.37.11_PM.png), some of the changes will be aimed at infrastructure and sustainability, as we can't make big changes or improvements without, for example, better tests, ci/cd pipelines, low-level monitoring tools, a more up-to-date Rails stack and etc. Also some bug fixes, cleaning up and refactoring of the existing system. 
To list some tasks:

- Rails 3 => Rails 6
- Deprecate SPRockets in favor of newer Webpack+Rails
- Expanded tests (model, controller, integration, system...)
- Remove unwanted files
- Better CI/CD integration
- Deprecate outdated callbacks
- Refactor current Asset pipeline (use Yarn in favor of Bower)
- Containerize all the modules (docker-friendly)

**List: ** [plots-dev@googlegroups.com](plots-dev@googlegroups.com), [https://publiclab.org/chat](https://publiclab.org/chat)

**Prerequisites: ** Ruby on Rails, DevOps

**Difficulty level: ** Hard

**Potential mentors:**  Sagarpreet Chadha

### Editor repair and fortification (high priority)

**Part of:** https://github.com/publiclab/plots2

**Description:** 

This is a big project that should be broken into multiple pieces: (i.e. user facing vs developer facing)

The Public Lab Editor (https://github.com/publiclab/PublicLab.Editor/) is a WYSIWYG rich text editor built on the Woofmark library, which is full of bugs. At this point we don't want to change the overall UI design significantly, but are very interested in identifying the many bugs resulting in a bad editing experience for users of PublicLab.org (at https://publiclab.org/post, login required). 

Potential bugs:

* toolbar positioning & stickiness
* fix inserting stuff into lists, tables (or have the interface indicate why this not possible or preferred)
* turning off `/` search bar hotkey
* bold-ing errors
* making text into headers and back

Interface improvements:

* Making the editor responsive on publiclab.org
* Image upload popup box
* Hover tooltips 

Development process refinement: 

testing, maintainability, ease of contribution
Jest UI testing
Coverage tracking
Workflow for documenting bugs

Wiki editor: https://publiclab.org/wiki/new consistency with https://publiclab.org/post editor


**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript

**Difficulty Level:** medium/hard

**Potential mentors:** Jeff Warren, Sagarpreet Chadha, Debasish Sahoo,Govind Goel, Divy Khare , Sudipto Ghosh



### Printability of posts and wiki pages

**Part of:** https://github.com/publiclab/plots2

**Description:** Some of our users reference content made thru our community while they're offline or away from computer devices. We'd like to encourage and enable this dissemenation of the knowledge on paper. For this project, we'd like our wiki pages and other website posts to be implemented in a way that prints well. Currently, our site uses CSS print stylesheets (https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/). But an option could also be a print-specific page view or optimizing the default view for printing. This project would ideally also create safeguards in the development process to ensure this functionality remains protected from inadvertent breakage by future contributors, during changes to the wiki page and layout. 

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** HTML/CSS, some JavaScript, some Ruby on Rails

**Difficulty Level:** easy

**Potential mentors:**  Jeff Warren, Emily Ashley, Sagarpreet Chadha, Debasish Sahoo,Govind Goel, Isha Gupta



### Spam management dashboard

**Part of:** https://github.com/publiclab/plots2

**Description:** We have a range of spam management tools and systems at PublicLab.org, for moderating incoming posts, comments, and wiki page edits. These include Recaptcha, manual review, a page at https://publiclab.org/spam (login and privileges required) and ways to moderate individual comments and revisions. This project would refine these systems, provide them with tests (including full-stack system tests for some), and provide some UI refinements to make spam management easier (bulk moderation, for example), while ensuring that members of the moderation team are on-board with any proposed changes. 


Stretch goal: option to receive daily digest of unresolved spam candidates

Resources:
    * Style guide: https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab
    * https://github.com/publiclab/plots2/milestone/14

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:** Jeff Warren, Sagarpreet Chadha, Divy Khare, Isha Gupta, Sudipto Ghosh, Harman Singh



### Leaflet Environmental Layers (LEL): time slider UI

**Part of:** https://github.com/publiclab/leaflet-environmental-layers

**Description:** (more coming) add an optional control to the LEL library allowing layer data to be filtered by a time attribute. 

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript

**Difficulty Level:** hard

**Potential mentors:**  Jeff Warren, Emily Ashley,  Sagarpreet Chadha, Divy Khare



### Site-wide accessibility on PublicLab.org

**Part of:** https://github.com/publiclab/plots2

**Description:** Improve site-wide accessibility of PublicLab.org, and develop systems to preserve and expand accessibility features as the codebase grows in the future. Project topics may include:

alt-text, aria, accessibility scans, colorblindness analysis, intersection with our translation systems (https://github.com/publiclab/plots2/milestone/22), integration with our features system (https://github.com/publiclab/plots2/blob/master/doc/DATA_MODEL.md#Features ), adding a checkbox or automated accessibility/linting for pull requests.
This would also involve a plan for maintaining coverage for accessibility for future development processes. 

Resources:
    * https://www.w3.org/WAI/ER/tools/

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** easy/medium

**Potential mentors:** Jeff Warren, Sagarpreet Chadha, Debasish Sahoo, Govind Goel, Harman Singh



### Post Customization Mechanisms (i.e. "power tags")

**Part of:** https://github.com/publiclab/plots2

**Description:** A variety of functionality can be added to posts and wiki pages, and in the back-end this is driven by the addition of special tags known as "power tags" -- for example, adding a location to a post, adding co-authors to a post, adding topical associations and adding other types of metadata. But the idea of "power tags" is confusing to people. Regular users should not need to know what power tags are, or how they work, to add these functions to their posts. This project will require user interviews and needfinding to better understand and document what functionality people want to add to their posts and what their goals are, and to build on this information to develop a) a proposed UI for adding functionality, and b) carefully collecting feedback on the proposal to refine it into a usable prototype for adding functions to posts (which will likely use power tags in the back-end to function). 

This is a system that has developed and changed over time; some users are accustomed to adding new functions to their posts using power-tags directly, but _____ is not legible or intuitive to new users. We are welcoming a re-examination of how the UI of this system works and strongly interested in decoupling the UI from how the underlying system works. 

Resources:
    * https://publiclab.org/wiki/power-tags
    * https://publiclab.org/n/15582
    * https://publiclab.org/notes/liz/08-30-2016/check-out-these-activity-grids 


**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** UI/UX interests, JavaScript, Ruby on Rails?

**Difficulty Level:** medium/hard

**Potential mentors:**  Jeff Warren, Sagarpreet Chadha





****

## 2019 Ideas

The following have been reviewed and formatted by our Summer of Code team. 

Mentors, please add your name by any project you'd be able to mentor with!




### Leaflet Environmental Layers

**Part of:** https://github.com/publiclab/leaflet-environmental-layers

**Description:** LEL - a collection of different environmental map layers in an easy to use Leaflet library. This new library is rapidly seeing many new layers, and we need some additional structure to help make the display/management of this amazing data smoother. This would include: 

- additional layers for oilandgasthreatmap.com, OpenStreetMap tag-based data layers, higher resolution wind data, and more
- improved layer management system with bounding boxes + zooms from layer metadata
- standardization of layer types (tile, rss, csv, geojson, polygonal, also subtypes like spreadsheet, esri)
  - and code to make adding new layers of a generic type eaiser
- improved workflow for incorporating and accepting new layers (submission template)
- minimial 'dots' ui
- layer metadata -- description, source, docs for each, relevant bounding box and zoom levels, version, in a single file
- UI for highlighting new layers in current viewport as you drag/zoom
- submission form for new layers
- unique-id based layer toggling in URL hash
- standardization of per-item popover UI (image, description, source, toggle, link)

All of this has been documented and further detailed in this planning issue: https://github.com/publiclab/leaflet-environmental-layers/issues/134

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Leaflet JS

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren, Sagarpreet Chadha



Igor Wilbert (@IgorWilbert)

[prompt:text:LEL mentor names here]

****


### MapKnitter Rails 5 Upgrades

**Part of:** https://github.com/publiclab/mapknitter

**Description:** MapKnitter.org lets people upload their own aerial images, position (rubbersheet) them in a web interface over existing map data, and share via web or composite and export for print. It includes several sub-components, including a JS UI, but the core application is written in Rails.

As part of our big upcoming upgrades to the MapKnitter platform, a range of Rails changes and improvements will make up the core of this project idea. Some of the changes will be aimed at infrastructure and sustainability, as we can't make big changes or improvements without, for example, better tests and a more up-to-date Rails stack. Others will be bug fixes and cleanup of the existing system. To list some:

* Rails 3 => 5.1 upgrade: 
* expanded tests
* expand test fixtures
* deprecate very old MapKnitter 1 templates, controllers
* compile list of routes/URLs to build functional tests around
* move or refactor lots into models for unit testing
* get CI running
* map out JS API endpoints of MapKnitter, write functional tests for them
* consolidate and reorganize editor vs. viewer vs. maps listing templates, exporter templates
* attempt to remove all Way and Node code

To see a full list of sub-projects, see https://github.com/publiclab/mapknitter/issues/300

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** Ruby on Rails

**Difficulty Level:** hard

**Potential mentors:**

* Jeff Warren

Sagarpreet Chadha

Emmanuel Hayford

souravirus

Aman Jain

[prompt:text:MapKnitter Rails 5 mentor names here]

****


### MapKnitter Image Management

**Part of:** https://github.com/publiclab/mapknitter

**Description:** MapKnitter is based around the upload of images, the positioning of those images on a map, and the compositing of those images into map export formats. This project idea focuses on the systems for tracking changes on those images, collecting them into sets, storing image history, and other improvements which we hope will simplify and reconfigure the MapKnitter codebase. This may include:

* ability to order images in sidebar
* ability to select collection of images to export
* view of all images for given region in maps
* ability to choose time bounding box (some kind of layer manager maybe needed)
* refresh background images while dragging
* ability to upload new versions of an image
* ability to apply filters to images (with Image Sequencer) and upload new version
* ability to select a set of images from which to generate an export
* new templates and APIs to present images on any map, selected by bounding box
* image versioning, locking, and reverting
* possible collaboration with the Synchronous Editing project below on API and UI additions

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails?

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

Sagarpreet Chadha

Emmanuel Hayford

Aman Jain

Gaurav Sachdeva

[prompt:text:MapKnitter Image Management mentor names here]

****


### MapKnitter Synchronous Editing

**Part of:** https://github.com/publiclab/plots2

**Description:** A long sought feature of MapKnitter is the ability to collaborate in real time on image upload and placement, as if it were Google Docs. This will involve changes from the MapKnitter codebase to the Leaflet.DistortableImage front-end image distortion UI. Parts of this project would likely involve:

* a low-latency plan for real-time multi user image placement (locking/unlocking/transactions)
* standardization and testing of image JS API
* potential low-latency API, possibly using sockets
* a simultaneous multi-user UI, highlighting images and animating their movement, like Google docs
* edit history/reversion, accept changes UI, possibly in a "history" menu?
* image "locking" or edit rejection UI for real-time use
* javascript tests (Jasmine, perhaps) for many of these features
* documentation of these features for downstream use by other libraries
* possible development of an interface layer between or extension of Leaflet.DistortableImage and the MapKnitter API
* possibly extract MapKnitter JS library from https://github.com/publiclab/mapknitter/tree/master/app/assets/javascripts/mapknitter as part of above

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails?

**Difficulty Level:** easy/medium/hard

**Potential mentors:**

* Jeff Warren

Emmanuel Hayford

Sagarpreet Chadha

[prompt:text:MapKnitter synchronous editing mentors names here]

****



### MapKnitter UI

**Part of:** https://github.com/publiclab/Leaflet.DistortableImage

**Description:** MapKnitter's interactive image distortion UI is implemented in a Leaflet library called Leaflet.DistortableImage, which needs some major improvements. The changes might be built into the core library or could be developed as a set of extension libraries. Tasks include:

* multiple image selection
* image ordering
* simpler menu API to add new tools like `addMenu`, (even after initialization)
* nested menus or modal for more tools
* image menu overhaul
* general debugging
* debugging of menu placement, hide/show (list out bugs)
* full res download from menu, esp. a way to pass in full-res original image src for this exporting function
* 'place with geodata' tool, based on existing code 
* ability to set order in Leaflet DistortableImage (use z-index) using function like `map.order_by(f())`; integrate with MK UI

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Leaflet

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

Sagarpreet Chadha

Igor Wilbert (@IgorWilbert)

[prompt:text:MapKnitter UI mentor names here]

****



### MapKnitter Cloud Exporter

**Part of:** https://github.com/publiclab/mapknitter

**Description:** An serverless Exporting system for MapKnitter maps built around a Docker containerized Image Sequencer image processor, and/or a GDAL/ImageMagick alternative. We are exploring parallel tracks for cloud-based MapKnitter exporting, and one option is a JavaScript based process, while the other is a more traditional approach with a containerized GDAL/ImageMagick approach as currently used in MapKnitter.

The base idea is to run the export process as a scalable web service, possibly "serverless" or REST, in Google Cloud and/or other cloud providers like Amazon AWS Lambda (primarily Google Cloud but compatible with others).

Importantly, either approach would ideally present the same API so that we could swap or compare their performance.

A much more in-depth description of this project can be found here: https://github.com/publiclab/mapknitter/issues/298


**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** Ruby on Rails, serverless architecture, nodejs, possibly GDAL

**Difficulty level:** hard

**Potential mentors:**

* Jeff Warren

[prompt:text:MapKnitter Cloud Exporter mentor names here]


****



### Image Sequencer (multiple possible projects)

**Part of:** https://github.com/publiclab/image-sequencer

**Description:** Image Sequencer is a general purpose, step-by-step image processing library in pure JavaScript, which we are building out to support a range of image-analysis tasks across Public Lab and beyond. We have a rang
e of big projects we are eager to implement to dramatically improve performance, implement much-needed new module types, and more:

- text overlay module (multiple approaches; https://github.com/publiclab/image-sequencer/issues/431) (still needs work to function in node environment)
- Performance: webgl, webassembly acceleration, worker threads: https://github.com/publiclab/image-sequencer/labels/performance
- Gallery of real-world and environmental use cases: Colorimetry tool, particle sizing + analysis https://github.com/publiclab/image-sequencer/issues/707 - potentially showing a bunch of sequences in a gallery with descriptions
- see Colorimetric testing project here: https://github.com/publiclab/image-sequencer/issues/979
- expanded testing (especially of UI and CLI), improved code organization, better maintainability via https://codeclimate.com/github/publiclab/image-sequencer

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, nodejs

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

Igor Wilbert (@IgorWilbert)

Harshith Pabbati

h

[prompt:text:Image Sequencer mentor names here]

****


### Community Toolbox

**Part of:** https://github.com/publiclab/community-toolbox

**Description:** Community Toolbox has become a core part of our success in growing our community and welcoming newcomers. Now we seek to refactor, standardize it and build tests to ensure its stabiliity and maintainability. This will include a data storage layer following the MVC schema, though in pure client-side JavaScript. It will include better defined views and modular utility functions. The result will be a library more people and projects can take up to use themselves, as well as more ways to understand a growing community -- who is involved, who is stuck, who is supporting others for any given time period. It could include a "how to" for different orgs, a menu of common views, and integration of the all-contributors spec for defining what kinds of contributions are recognized and valued: https://github.com/all-contributors/all-contributors

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Nodejs

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

Igor Wilbert (@IgorWilbert)

[prompt:text:Community Toolbox mentor names here]

****


### Microscope live stitching, auto-stitch in MapKnitter (magnetic attraction)

**Part of:** https://github.com/publiclab/image-sequencer, https://github.com/publiclab/Leaflet.DistortableImage

**Description:** Multiple Public Lab projects, from microscopy to map stitching, require easy-to-use techniques for joining multiple images into a larger image. While high-end approaches for this often involve "bundle adjustment", we propose a different approach, which either a) runs blob tracking in video or sequential images to determine image offset, or b) runs low-res pattern matching between image pairs, and uses different UI approaches to indicate matches to the user (magnetic attraction, spiderwebs connecting matched points, highlight of matched image pairs). Other variations are possible but we envision a general purpose set of JavaScript utility libraries which accept two images, and output the matching pixel pairs, as well as one which takes sequential input images and attempts to place them on a growing virtual canvas based on matches. Other solutions are welcome but we hope to incorporate these into both Image Sequencer and Leaflet.DistortableImage, as well as potentially a web-based demo for use with a microscope live video feed.  

Read more on one approach: https://github.com/publiclab/image-sequencer/issues/300

Also see: https://github.com/publiclab/Leaflet.DistortableImage/issues/110

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, NodeJS

**Difficulty Level:** hard

**Potential mentors:**

* Jeff Warren

Igor Wilbert (@IgorWilbert)

[prompt:text:Microscope Live Stitching mentor names here]

****

                                                                                                                                                                                             
### Spectral Workbench Capture

**Part of:** https://github.com/publiclab/spectral-workbench, https://github.com/publiclab/spectral-workbench.js

**Description:** DIY spectrometry has long been part of Public Lab's open source work, but our software is showing its age and is too spaghetti-like. We are slowly refactoring the spectral capture interface from Spectral Workbench into a stand-alone library which can produce spectral data for upload to SpectralWorkbench.org or download locally in CSV or JSON format. UI testing in Jasmine and code modularity using Browserify would both be great. This could ultimately become its own library called `spectral-workbench-capture` and even a full app such as `spectral-workbench-capture-react` or similar. Possible components:

- integration and tests
- consolidation and testing of API for search, matching, etc
- development of React app around basic ui modules (with compartmentalization of React code from core capture code)

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, some Ruby on Rails (for integration)

**Difficulty Level:** hard

**Potential mentors:**

* Jeff Warren

[prompt:text:Spectral Workbench Capture mentor names here]

****



### Sensor data upload and display library

**Part of:** https://github.com/publiclab/plots2 (though will be in standalone repository)

**Description:** 

Many people across Public Lab and in DIY environmental work create and need to manage data easily without being a programmer. This will be a web-based JavaScript + HTML library which will allow drag-and-drop of CSV sensor data
 onto web platforms such as PublicLab.org, but will maintain modularity as a reusable library. It would feature:

- simple configuration menu for graph type
- use of a simple standard graphing library like chart.js or any reasonable alternative
- data column selection
- browse-able time slider
- see https://github.com/publiclab/PublicLab.Editor or https://github.com/publiclab/inline-markdown-editor for modular examples
- one-click "open in ____" system for WTFCSV and google spreadsheets (list of export options)
- (additionally) display of per-user data list on publiclab.org, so you can see all the CSVs you've uploaded in a list; https://publiclab.org/data/_____, perhaps?

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, some Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

Souravirus

[prompt:text:Sensor data upload mentor names here]

****



### Public Lab Notifications system

**Part of:** https://github.com/publiclab/plots2 (though will be in standalone repository)

**Description:** The Notifications API (https://developer.mozilla.org/en-US/docs/Web/API/notification) allows for UI notifications on mobile and desktop initiated from JavaScript. This project would build out such a system, with the backing of a new API on `plots2` for triggering such notifications when new comments or posts are created. 

The project would be made up of client-side code to display notifications (and prevent multiples from being posted if multiple windows are open), and a back-end API to trigger them when new content is posted, potentially using Action Cable.

Read more at: https://github.com/publiclab/plots2/issues/2497

This project may need to be combined with other work to be large enough for a summer's work. 

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren
* Sidharth Bansal

[prompt:text:Notifications system mentor names here]

****
