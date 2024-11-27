---
nid: 1808
title: Website projects
path: public/static/wiki/website-projects.md
uid: 1
tagnames: website,out-of-date
---

# Website projects

(This page is a snapshot of 2011-13 out of date website improvement ideas)

Formatting based on:  http://publiclaboratory.org/wiki/gsoc-ideas 

##Due Dates##

April 18: Point people write 1-2 sentence descriptions
April 19: Team review complete
April 20: Send to list to see if others are interested in working on these tasks
May 15: Proposals for each item due

Discussion has started in Github on some projects; feel free to jump in there or on the main mailing list (publiclaboratory@googlegroups.com).

###Mockups###

As the design process moves from defining needs/problems to proposing solutions, you may be ready to start making mockups. These can be sketched on a napkin or made in Photoshop, but [Balsamiq's "Mockups" app](http://balsamiq.com) is a nice way to create simple sketch-like mockups to try out design ideas. We have an open-access account where anyone can jump in and make/modify mockups:

https://publiclaboratory.mybalsamiq.com/

----

##Solution may require programming##

###User interface with website- involvement in projects###
This project will address involvement questions such as how to host a meet-up, how do I get involved in a regional Public Lab project or on a Public Lab tool. We’ll also be developing a system to address topics that people are requesting assistance with.

Point: Shannon
Team: Liz, Sara, Mathew (passive)
Importance: High
Github home: https://github.com/jywarren/plots/issues/121

* As a user how do I get involved in project/what can I give to that project/what do I need help with
  - Mirror in the place page- whether there is a development/place page (different question)
  - At top of tool page- localities to get involved in/features to get involved in
  - Need templates for prospective features timelines- so people have a format- new tool- what   features can be developed with it
  - Better bug tracking/features for tools
Github issue/sketches/wireframes/minimal requirements from programmers- 

###Subscription to feeds###
The goal of this project is to increase the usability of subscriptions by making them easier to make and track. We also aim to use the subscriptions to facilitate online collaboration by allowing individuals to know and communicate with those following them.

Point: Sara
Team: Mathew, Jeff
Importance: High
Github home: https://github.com/jywarren/plots/issues/122

* who subscribes to my feed/how do I reach them
  - dashboard needs to have more of a user interface
  - global dashboard feature? (what's this?)
  - More documentation

###User Dashboard redesign###
User dashboards suffer from lack of actionability (clear calls to action), crowding, and other issues. We will look at other sites' dashboards, make mockups, solicit feedback, and analyze current use patterns in Google Analytics. 
Point: Jeff
Team: Shannon, Liz, Sara, Mathew
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/123

* User dashboard is not clear - Needs wireframe
- customizable user dashboards - what it should look like

###$$$ page###
We’re interested in either creating a new page/system for donations or figuring out how to integrate all existing forms of income into a single page. Will require some research into both microfinance options and standard donation systems.

Point: Shannon
Team: Mathew
Importance: High-Medium
Github home: https://github.com/jywarren/plots/issues/124

* Comprehensive site for buying and giving money - solve with navigation rather than just content

###PLOTS App Development###
Point: Liz
Team: Stewart, Sara
Importance: Exploratory project
Github home: https://github.com/jywarren/plots/issues/125

* Think that the website for most people should be an app - phone/tablet- mobile interfaces would allow for easier platform for searching content - easy way to inject things to website and as a way for people to interact
timeline- who can write- scoping or screenshot of what it looks like- how many months
*  need to consider consuming content (solved with mobile compatible theme/ui) vs producing (idea of simple photo uploading, Research Note posting app) - could be 2 separate projects. 

###Place pages overhaul###
This project will create pages that are more dynamic than the current pages including the integration of events for each site, meet-up groups, forums (really?), links into related wiki pages and content, etc.

Point: Shannon
Team: Mathew
Importance: High
Github home: https://github.com/jywarren/plots/issues/126

* Place pages- not so much a wiki, but an aggregator/dashboard type of site-specific calendar, ways to express interest, meet-ups, etc
- needs wireframes
- Github issue, how much needs to be programmed/content
* priority on how to get involved locally... see also http://publiclaboratory.org/wiki/mailing-lists

###Integrate mailing list with home page###
The goal of this project is to increase interaction between the mailing list and the website by facilitating the push and pull of data and conversations between these two communication methods. Specifically we will review and revise current cross communication such as the mailing list feed on the website.

Point: Sara
Team: RJ, Stewart, Shannon, Jeff
Importance: Medium- by October
Github home: https://github.com/jywarren/plots/issues/12 (originally a duplicate issue: https://github.com/jywarren/plots/issues/127)

* How to integrate mailing list with homepage - takes up big bandwidth on the homepage - clearer ways that the mailing list and website interface - feeds that mention a place or tool are added into online “archive” of pages
* consideration that mailing list content is not open sourced by default but all web content is... keep in mind
* possible alternatives to google groups, or at least independent archiving 
* possible to archive the mailing list on our site, indexed with our search engine

###Make user profiles “cute” and more useful###
First we want to make user profiles more attractive- adding images, better ways for users to connect and making sure that you can actually find someone you’re looking for. The second part of this project is to explore a badge system such as barnstars (wikipedia) or the Mozilla badges.

Point: Shannon
Team: Jeff, Liz
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/128

* User profiles look cuter- linked to place and tool pages- more searchable
- badging - either community appreciation awards, or actual "verified expertise" -- either or both of these would be showing up on user's profile page. 
* more user metrics, like tools or places most involved in?

###Thermal image archiving###
We need to settle on what this data looks like and attempt to categorize it for sorting/tagging/archiving, and if it come in different formats than we attempt a 1.0 categorization. The goal is to create the most effective format and archive such that people will be encouraged to contribute and help cultivate it onward. 

Point: Stewart
Team: Sara, Shannon, Jeff
Importance: Medium-low
Github home: https://github.com/jywarren/plots/issues/129

* Archive for thermal images
* potential Glowdoodle integration 

###Bitnami stack for MapMill and MapKnitter###
We’ve started off in the Gulf Coast by creating DVDs of images and maps for libraries. We’d like to create MapKnitter and MapMill into formats that can be demoed and used offline. The principal use scenario is for locations where there isn’t a strong Internet connection- which is alot of places.

Point: Shannon
Team: Mathew, Stewart, Anita, Jeff 
Importance: High
Github home: https://github.com/jywarren/plots/issues/130

* Bitnami stack- running MapMill and MapKnitter for running on a stick offline (this is already mostly done but no non-programmer documentation and little testing; there is a mapknitter github issue for this)
* fundraising for NGOs
- Sara Farmer- NGO communities to reach out to (specifically for offline)- note

###Annotations/geo-comments for maps###
PLOTS would like to use annotations to record field notes and facilitate conversations about the things going on within the maps themselves. Map observers can comment or ask questions about what they see. Stories behind the map such as irrigation design or pollution can be told.

Point: Stewart
Team: Shannon, Jeff, Mathew, RJ
Importance: High
Github home: https://github.com/jywarren/plots/issues/131

* Linked maps/annotation layers- all of a map of one place can be linked or displayed on top of each other- interface questions (the layers exist)- tagging system- legibility issue
- Annotated maps- code has been written by RJ but its stalled
- Mick Thompson
* probably building on leaflet viewer
* choice to build this in mapknitter or in the plots archive...

###Programming bottleneck###
Exploring strategies for attracting more programmers to the PLOTS site and tools, potentially reaching out to Drupal or other FOSS communities and holding a hackathon. Also 2013 Google Summer of Code.
Point: Jeff
Team: Stewart, Shannon
Importance: High
Github home: https://github.com/jywarren/plots/issues/132

* Solution for programming bottleneck

###Sandbox category for tools###
Renaming or modifying tool status labels and creating better documentation for criteria for different tags. Displaying or branding status more clearly on tool pages. Mockups and wiki content.
Point: Jeff
Team: n/a
Importance: n/a
Github home: https://github.com/jywarren/plots/issues/133

* Want to add a “sandbox” category for tools “In development” “Field tested”- sandbox- any idea anyone has to make anything

###"Mega-like" buttons (open to re-naming)###
Exploratory/brainstorming about how to engage users asynchronously across the lifetime of a project. Cheerleaders might subscribe to hear when projects reach certain stages, or offer bounties or resources contingent on certain outcomes depending on what each has to offer. 
Point: Mathew
Team: Jeff
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/134

* Would like casual users to be able to ask the page “tell me about x when y has the feature”
- new feature proposal
- casual users as cheerleaders for developers
- better version of a “like” button
- how it might be solved- how much time/resources
- what would be the ideal outcome/benefit

###Case studies on website use###
Interested in developing case studies around use of the Public Laboratory website? This project might be of particular interest to social scientists in the community that want to talk to others about how they perceive different functions of the website.

Point: Shannon
Team: not yet assigned
Importance: low- September
Github home: https://github.com/jywarren/plots/issues/135

* Case studies on how various parts of the community uses the website.
* integration with analytics and public display of graphed trends of our community's use... "measuring our own growth"

##Can be solved by anyone##

###Visual overload on home page###
Separation of different use cases on home page (new technical user, new activist user, returning users...) and better lead into use cases ("how to get involved" stories) might result in a more approachable site. A short video intro and possibly binary tree could be used. 
Point: Jeff
Team: not assigned/collaborative?
Importance: high
Github home: https://github.com/jywarren/plots/issues/136

* Too much change on the homepage- front page is busy- less movement- want returning users to see consistency/new users wouldn’t be overwhelmed (visual overload)

###User interface for "editing/changing the website"###
Clarify and if need be simplify how to edit or add to the site. Offer staged invitation to at first simply post research notes and later edit or create wiki pages. Advanced uses may not need to be apparent to new users. Make people aware that they can materially change the website via editing wiki pages.  
Point: Jeff
Team: Shannon, Stewart
Importance: High
Github home: https://github.com/jywarren/plots/issues/137

* People knowing that they can change the website
  - Don’t know what it means to subscribe
  - Does every feature of the site have to be clear to every user?
  - If they aren’t already tech literate- doesn’t always occur to them that they can edit
  - More obscure or advanced features shouldn’t bother people
  - What are core things that can help people collaborate?
  - Wiki vs. research note
  - Even if we are simplifying- need to make clear, easily findable documents
  - Instructions are an issue- what are problems and proposed solutions
- Wiki page is called “getting started”- on your user dashboard- other entry points
- landing page/home page different
- Too many words on site- slightly obscure more advance info

###Tool page- development of documentation/dashboard###
This project aims to revise the documentation of tool development on the website in order to increase community access and participation in development through better tools for tracking involvement, communicating/setting/meeting project development needs and goals and improving information flows between tool development projects. Specifically we will redesign the tools homepage, tool pages, and a develop “tool developer” dashboard.

Point: Sara
Team: Mathew, Jeff
Importance: high
Github home: https://github.com/jywarren/plots/issues/138

* Confusion on tool pages- development or documentation- move towards a tool developer dashboard and tool documentation page- lots of development that is going on. It should be clear what the current stable prototype is, and equally clear what the advancing edges of the project are and what is needed. 
- Are you looking to build the tool- get involved in process with other people- do you want to know what the tool is about?
* tabbed approach offering different uses: Introduction, Current progress/use, How to make/use (wiki), Use cases/applications, Interpreting and using data

###Documentation overload/strategy###
Too much documentation creates its own problems. A unified index of how-tos could work if it is up to date. Other options include a help chatroom or better wiki indexing. Resolve orphaned documentation problem. 
Point: Mathew
Team: Liz
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/139

* Documentation is becoming so complete that its too much- Get Started page gets lost (this is related to tool page redesign)
- Look at Khan Academy type model for all our instructions- embedded everywhere- organize ToC/index style
- Links out to full developer/documentation page
- Each how to that belongs under each category

###Better organization for research notes###
The goal of this item is to enable easier browsing of research notes by people unfamiliar with PLOTS.  Basic categories of spectral techniques or balloon mapping arranged in order of technical nature or date created would be great.  Possibly no thumbnails would allow more results to be shown on the page.

Point: Adam
Team: Jeff
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/140

* Research notes are too esoteric- want them lumped into bins- browsing is crazy
- navigation issue
* connection between research notes section and specific tools pages
* research notes from tools/places you're watching?

###Re-examining and extending GrassrootsMapping.org###
The Grassroots Mapping blog (grassrootsmapping.org) is awesome, but we’ve really moved away from using it. We are interested in  recreating the blog as a more comprehensive Public Laboratory site where people can share stories that might not fit in the “research note” category. On this project you’ll help with the site redesign, generating content and wrangling people to write.
Point: Shannon
Team: Jeff, Adam
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/141

* Reintegrate blog into use- not GM- for all PL- community contributed content
- how does it tie into tool use/research notes
* try to use research notes infrastructure but focus on a more narrative use and presentation. 

###Links to apps on website###
Better interconnect the peripheral "apps" like MapKnitter and SpectralWorkbench with the Plots site. common user login, better links from tool pages to apps.
Point: Jeff
Team: Adam
Importance: high
Github home: https://github.com/jywarren/plots/issues/142

* Clearer links to all apps from webpage- more buttons/cuter
  - rethink how new user would come to use MapKnitter/Spec workbench- simple to use instructions for someone to make a map- intro page overwhelming- need to oversimplify- documentation project?
  - content overhaul
(ask Jeff how to make a button in wiki page)

###Events page rethink###
The Events page needs to link to sites and have searchable text, not just the embedded Google Cal api.  Events should be presented uniformly and efficiently.
Point: Adam
Team: Jeff
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/143

* Events page uses too many acronyms, can’t search by place, not an engaging format, can’t post your own event
- "event" tag for research notes about events, maybe just get rid of tab)

###GMF and website interconnection###
Explore ways to better integrate the Grassroots Mapping Forum with the website, including more interactivity from the Forum and potentially generating Forums pdfs directly from the website using tags.
Point: Mathew
Team: Stewart, Jeff, Shannon
Importance: ongoing project
Github home: https://github.com/jywarren/plots/issues/144
* Link between GMF and website
- new feature, how do we build forums
- M do better job as a GD template

###"Walking papers"-style offline contribution tools###
Public Laboratory research and archive entry forms essentially. Example: We create a PLOTS stylized template for the map details page that is filled out by the mapping party and when the map is added to the website the form is transcribed. In some cases this will allow more participation on the website among non-digital people, but it should also help people realize what to do after the flight, and could go along with our current paper instructions from the kit. We could also create offline forms for other things such as research notes.
Point: Stewart
Team: Shannon, Sara, Liz
Importance: High
Github home: https://github.com/jywarren/plots/issues/145

* Walking papers (like a logbook)- build out set of open street data- some people with GPS units, people don’t have computers- OSM trainers digitize map on paper- corners on map built with points and QR code- can be transferred into OSM database. One way to address- have series of forms or other forms- we take the form to the website

###Site navigation overview###
Design assessment and work on menus, headers, user interface related to navigation for different kinds of users. Analysis of Google Analytics, wireframing and testing of new header designs. Potential splitting of Logged-in and Non-logged-in headers.
Point: Jeff
Team: Shannon, Sara
Importance: Medium
Github home: https://github.com/jywarren/plots/issues/146

* Overall navigation design- does it work
- basic navigational structure of website- can we change that- is there a better basic paradigm of navigation
- many different possible improvements
- site map
- overall design
- explore other types of navigation?
- list of navigational aggrevances- different types of users- pose as question to interface designers- testing different headers and sidebars
- Float proposals for different ones- user interface could be done empirically