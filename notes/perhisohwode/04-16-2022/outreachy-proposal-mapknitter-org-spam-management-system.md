---
title: Outreachy proposal: MapKnitter.org Spam Management system
tagnames: software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022
author: perhisohwode
path: /notes/perhisohwode/04-16-2022/outreachy-proposal-mapknitter-org-spam-management-system.md
nid: 30442
uid: 793563

---

# Outreachy proposal: MapKnitter.org Spam Management system

by [perhisohwode](../profile/perhisohwode) April 16, 2022 18:39

April 16, 2022 18:39 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

---------

## About me

Hi, I'm Peculiar Erhisohwode, a full-stack software developer and a budding open-source contributor. The ability to solve real-life problems with data and technology has always been a source of fascination to me, and this is what inevitably prompted my challenging yet interesting and rewarding journey into the world of tech roughly 2 years ago. Since then, I have worked in several teams to collaboratively build scalable and usable products that are changing and improving lives and businesses.

**Email**: [p](mailto:manasakashyap@iiitb.org)[erhisohwode@gmail.com](mailto:erhisohwode@gmail.com)

**Github**: [https://github.com/PeculiarE](https://github.com/Manasa2850)

**Location:** Lagos, Nigeria

## Project description

We have a range of spam management tools and systems at [PublicLab.org](http://PublicLab.org), but [MapKnitter.org](http://MapKnitter.org) has persistent spam even though users rely on [PublicLab.org](http://PublicLab.org) to log in. This project aims to improve the situation with several ideas including integrating MapKnitter with PublicLab's spam management system, creating a unified visual style between both systems, and implementing user status restrictions for moderated users and maps.

## Abstract/summary (<20 words):

Build an effective spam management system for MapKnitter based on and similar to the existing system at PublicLab.

## Problem

Currently, there's lot of spam being posted on MapKnitter. Some maps are created without images and/or a descriptive text, some have images uploaded but not yet placed on the maps. Sometimes, the text provided is offensive and unpleasant to other users. There are also gazillions of maps titled 'test' or a variation of it.

Presently, on MapKnitter, an admin can archive/spam and delete maps but these actions must be done on each individual map one by one unlike the bulk actions (spam, delete, ban, publish etc) available on PublicLab.

There is also no way to ban a user who has created a spam map, or even prevent a user that has been banned either on PublicLab or MapKnitter from logging onto the latter.

## Project Tasks/Goals and Proposed Ideas/Implementations

### 1a. Create a view of all recent maps

I initially designed three simple wireframe tables for the proposed MapKnitter spam dashboard:

##### The Map Moderation Table (Wireframe):

[![Screenshot_2022-05-03_at_20.51.50.png](/i/46627)](/i/46627?s=o)

##### The User Moderation Table (Wireframe):

[![Screenshot_2022-05-03_at_20.54.50.png](/i/46628)](/i/46628?s=o)

##### The Comment Moderation Table (Wireframe):

[![Screenshot_2022-05-03_at_20.58.15.png](/i/46629)](/i/46629?s=o)

However, as advised by @warren in the comments section, **Comment Moderation** will be a future goal of the project and will be implemented after assessing the severity of spam in comments.

For the MVP of this project, we will focus on **Map Moderation** and **User Moderation**. The fully-designed mockups of these spam tables can be seen below.

Having a unified visual style across MapKnitter and [PublicLab.org](http://PublicLab.org) is one of the goals of this project, and so these mockups incorporate the colour scheme, layout, and style of the PublicLab spam2 dashboard.

##### User Moderation Table (Design Mockup):

[![Screenshot_2022-05-03_at_16.28.49.png](/i/46630)](/i/46630?s=o)

##### Map Moderation Table (Design Mockup):

[![Screenshot_2022-05-02_at_20.56.26.png](/i/46631)](/i/46631?s=o)

### 1b. Information Displayed on the Map Moderation Table

As seen on the tables above, the following information will be displayed for each map:

##### A. Map Name

This will be clickable and when clicked, a pop-up modal will open showing the description/about text, location, and co-ordinates of the map. This provides moderators with additional information to make informed moderation decisions without leaving the spam dashboard.

[![modal-demo_(1).gif](/i/46632)](/i/46632?s=o)

##### B. Number of Map Images

This includes the total number of images uploaded by the author as well as the number of uploaded images that have been placed on the map.

##### C. Map Author

This shows the author details as well as the total number of maps created by the author. if this is the first map the author has created, they are assigned the **new author** badge pending when the map is published.

##### D. Map Status

For maps to be effectively moderated, they have to be assigned a status. Adopting the same status assignation used in [PublicLab.org](http://PublicLab.org) to ensure uniformity, each map will have either of the 3 statuses below at any point in time:

0 - BANNED/SPAMMED (Maps with spam content and are hidden from view).

1 - PUBLISHED (Maps with no spam content and are visible to all).

4 - UNMODERATED (Maps created by first-time authors and visible to only the author and moderators).

[In the PR created by Gaurav Sachdeva on map moderation](https://github.com/publiclab/mapknitter/pull/1030/files) (whose work this project will be building on), a migration has already been created to update the **maps** table with the **status** column as well as a function (**first-time-poster?**) to check if an author is a first-time poster:

Building on these foundations, an FTO issue will be created to automatically assign the published or unmoderated status to new maps at the point of creation.

The FTO will involve adding lines 7 - 8 and 16 - 19 (in the code snippet below) to the **create** function in the **app/controllers/maps\_controller.rb** file.

```
<script src="https://gist.github.com/PeculiarE/b43a35ff3a34feb10abb43d22eacefaf.js"></script>
```
<!-- -->

Functions for fetching spammed maps and banned users on the moderation table have already been created to some extent by Gaurav Sachdeva on the **app/controller/spam\_management\_controller.rb** file.

More FTO issues can be also be created for the following:

A. Calling the **alert\_and\_redirect\_moderated** function (already created by Gaurav Sachdeva) in the single-map fetching and single-user fetching routes.

B. Editing functions for fetching maps and authors on the [https://www.mapknitter.org/gallery](https://www.mapknitter.org/gallery "https://www.mapknitter.org/gallery") route to exclude banned authors, spammed maps, and first-time-author maps yet to be moderated.

C. Clicking on the existing spam button on the gallery page beside each individual map should perform the same function as spamming a single map on the map moderation table.

### 2\. Moderation of Maps and Users

Moderators can:

A. Spam and unspam a single map

B. Batch-spam and batch-unspam multiple maps

C. Ban and unban an author

D. Batch-ban and batch-unban multiple authors

To spam a map, we first have to create the **spam** method on the **map model** in the **app/models/map.rb** file:

```
<script src="https://gist.github.com/PeculiarE/5889061b2009bc2a4b7424d23f525e9c.js"></script>
```
<!-- -->

Then in the **app/controllers/spam\_management\_controller.rb** file, the **spam\_map** function will be created to spam a map by its id.

```
<script src="https://gist.github.com/PeculiarE/db4c0856913623d1fee3dacf06a5e813.js"></script>
```
<!-- -->

Asides the **logged\_in\_as** function I used to protect the route in the code snippet above, all functions in the **app/controller/spam\_management\_controller.rb** file are also protected by the **validate\_user** function created in Gaurav Sachdeva's PR. This function checks that the user is logged in and is a moderator or admin before the action can be carried out.

In keeping with the policy at [PublicLab.org](http://PublicLab.org), spamming a map will automatically ban the author of that map. **However, the author must not be anonymous**.

The ban method on the user model has already been created in Gaurav Sachdeva's PR.

Similar to a map, a user at any point in time will be given either of 3 statuses:

0 - BANNED (Author is unable to login and create maps)

1 - NORMAL (Author can login and create maps)

5 - MODERATED (Author is unable to login and create maps)

The addition of the **status** column via a database migration has also been done already by Gaurav Sachdeva.

Assigning the first-timer-status (4) to a new author on the fly will be created as an FTO issue.

### 3\. Display a list of any maps a banned user has (if any) when they are banned and offer a button to spam all maps by that user in one click.

##### Scenario 1:

If a single user is directly banned by a moderator on the user moderation table or is banned via the spamming of their map (see code snippet above), in the success message shown to the moderators, we can provide a redirect link to the author's profile page displaying all their maps.

On the profile page, the moderator will be able to click on a **Spam All Maps** button (visible to only mods and admins) to batch-spam all the maps.

![image description](/i/45872.png "Screenshot_2022-04-16_at_12.21.13.png")

##### Scenario 2:

On banning multiple authors (see code snippet below), we can provide a redirect link to the '**Banned Authors**' tab on the gallery.

```
<script src="https://gist.github.com/PeculiarE/4c606e2cf711d80892caa19ec265f5bb.js"></script>
```
<!-- -->

This tab will only be visible to moderators and admins and would display the most recently banned authors (authors banned within the past 1 hour).

Moderators can then click on each author to view a list of their maps, and then spam maps.

![image description](/i/45866.png "Screenshot_2022-04-16_at_12.00.37.png")

A sample code of the data to be fetched on the **Banned Authors** page is shown below. It will involve editing the **app/controllers/users\_controller.rb** file:

```
<script src="https://gist.github.com/PeculiarE/d690a78195023c9b069ca8aeb1d5f38a.js"></script>
```
<!-- -->

##### Alternative Methods:

A. Alternatively, instead of displaying the redirection link in the success message for either of these scenarios, we can just automatically redirect the moderators to these pages.

B. We could also implement an **auto\_spam** method that runs under the hood when a user is banned. Once a user is banned, this method will be called and all the user's maps will be banned. I created this method (see Task 5 below) to help automatically spam maps during login and the periodic API calls.

C. Additionally, the View Maps button on each row on the user moderation table will also link to the maps-display page.

### 4\. Add a link/tab from [publiclab.org/spam2](http://publiclab.org/spam2) to the MapKnitter spam dashboard

This could be created as a simple FTO issue and can be achieved in either of the following ways:

##### Option 1:

We can have a tab beside the menu dropdown on the [PublicLab.org](http://PublicLab.org) spam2 dashboard. This tab will redirect moderators to MapKnitter's spam management dashboard:

![image description](/i/45802.png "Screenshot_2022-04-15_at_21.04.36.png")

##### Option 2:

Or we can have the redirect tab inside the menu dropdown itself:

<![image description](/i/45814.png "Screenshot_2022-04-15_at_21.16.09.png")

On the reverse side, we could also add a link/tab to [PublicLab.org](http://PublicLab.org)'s spam2 dashboard from MapKnitter's spam dashboard (another FTO issue).

Additionally, similar to what we have on [PublicLab.org](http://PublicLab.org), moderators on MapKnitter should be able to access MapKnitter's spam dashboard from the profile dropdown on the navigation bar. This could also be an FTO issue.

[![Screenshot_2022-05-07_at_21.29.29.png](/i/46665)](/i/46665?s=o)

A code snippet showing this proposed change on the **_login.html.erb** file in the **app/views/layouts** folder can be seen below:

```
<script src="https://gist.github.com/PeculiarE/6211ec2269f6d3ecc76a5ad42f85ed9f.js"></script>
```
<!-- -->

### 5\. Forbid login by users who have been banned

The flowchart below helps to illustrate the updated login process on MapKnitter once we introduce the spam moderation:

[![Screenshot_2022-05-03_at_18.44.31.png](/i/46635)](/i/46635?s=o)

On the PublicLab codebase(**plots2**), the **add\_sreg** function in the **app/controllers/open\_id\_controller.rb** file provides both the user's status and role in the variable **registration**.

When both new and existing users attempt to login to MapKnitter via PublicLab, this variable can then be accessed and the user's role and status extracted using the **open\_id authentication** method in the **app/controllers/sessions\_controller.rb** file.

We will thus update the open\_id authentication method to encompass all necessary checks as shown below:

```
<script src="https://gist.github.com/PeculiarE/5a4cf2ee57793ca44ebf9d8923dbb40d.js"></script>
```
<!-- -->

Users who have been banned on PublicLab are denied access to MapKnitter and their maps are automatically spammed by virtue of an **auto\_spam** method to be created on the **app/models/user.rb** file

```
<script src="https://gist.github.com/PeculiarE/f9ee279cf63e22ccc0a314da9804ee23.js"></script>
```
<!-- -->

### 6\. Regularly check if the currently-logged-in user has been banned from [Publiclab.org](http://Publiclab.org) and if the currently-logged-in user is a moderator to determine if they can view the spam table (all via an API call)

To achieve these, we will carry out the following steps:

##### Step 1:

Update the PublicLab API **profiles** endpoint ([https://www.publiclab.org/api/srch/profiles](https://www.publiclab.org/api/srch/profiles)) to include the status and role of the user in the profile details being fetched.

This will be achieved by editing the **search\_profiles** function in the **app/api/srch/search.rb** file on the **plots2** codebase.

The function will be tweaked to extract the role and status of the user from the search results. See the highlighted section in the code snippet below:

[![Screenshot_2022-04-16_at_12.47.11.png](/i/46636)](/i/46636?s=o)

Also, the **app/models/doc\_result.rb** file (on the **plots2** codebase as well) will be edited to include the status and role in the data structure being generated.

See the highlighted sections in the code snippet below:

[![Screenshot_2022-04-16_at_12.43.46.png](/i/46637)](/i/46637?s=o)

These changes will be created as simple FTO issues for first-timers.

##### Step 2:

Once the PL API has been updated with the needed information, we can then run a migration to create a **datetime column** on the users table.

```
<script src="https://gist.github.com/PeculiarE/7a4196a2e57ce4477709b2a545c01247.js"></script>
```

<!-- -->

The **last\_synced** column will help track the last time the user's data was updated via the API call.

##### Step 3:

A new file **publiclab\_client.rb** will be created in the **app/services** folder. This file will contain the client service calling the external PublicLab API:

```
<script src="https://gist.github.com/PeculiarE/ef3a08dcaf53a924d98659ff58c346e9.js"></script>
```
<!-- -->

##### Step 4:

Next, we will create a **sync\_with\_publiclab** function in the **app/controllers/application\_controller.rb** file. This function executes the **PublicLab Client** service 1 hour after the last update and moderates or bans the user if they have been moderated or banned on PublicLab. Maps belonging to that user are also automatically spammed.

The role of the user is also updated so if a moderator has been demoted to the 'basic' role on PublicLab once the role is updated, they will no longer be able to access the spam dashboard

We can adjust the checking interval to 2 hours or more. For this proposal, I will be making use of 1 hour in my code snippets.

```
<script src="https://gist.github.com/PeculiarE/aacdd4bfd1abfae07d7d2ec8e75d0c67.js"></script>
```
<!-- -->

##### Step 5:

Finally, and very importantly, we will need to edit the **current\_user** function (also in the **app/controllers/application\_controller.rb** file) to check the status of the current user anytime it is called and subsequently log the user out if they have been banned.

Since the **current_user** function is called quite often, it will be used to call the **sync\_with\_publiclab** function but the latter will only make the sync request to PublicLab if the last time the request was made was over an hour ago.

```
<script src="https://gist.github.com/PeculiarE/c3f2921cac13bd1326b7c13faad2b2c9.js"></script>
```

<!-- -->

##### Possible caching problem:

Currently, the API request on PublicLab caches the result for 2 days. This would have to be completely removed or adjusted to fit the periodic checking interval MapKnitter will be implementing as the point of the hourly API calls is to get real-time updates. 

### 7\. Regularly updating and syncing MapKnitter when users are banned on PublicLab (additional task based on the discussion in the comments section below)

##### Background:

While calling the PublicLab API on the **current\_user** function (see Task 6 above) does help sync MapKnitter and PublicLab, it only does so for the user currently logged in.

In addition, the updated login process (see Task 5 above) also provides a means to sync both systems.

However, what happens when a non-logged-in user is banned on PublicLab? Until they attempt to login, their status on MapKnitter will remain active and their maps visible even though they've been banned on PublicLab.

##### Proposed solution:

Rather than having moderators switch between both MapKnitter and PublicLab, that is, banning on [PublicLab.org](http://PublicLab.org) spam dashboard and then heading to MapKnitter to do the same and spam author maps (--this process could also become quite complicated when multiple authors are banned at once on Public Lab--), I would suggest a sync via an API call through the following steps:

###### Step 1:

First, we have to edit the Public Lab **profiles** API to also accept a timestamp value. it currently accepts only usernames.

This timestamp value will be the current time at which the call to the API is made. A pseudo-code for the search query to be executed on the database will look like this:

```
<script src="https://gist.github.com/PeculiarE/b3b2a412206f646df090d8309e528146.js"></script>
```

<!-- -->

###### Step 2:

On MapKnitter, the **PublicLab Client** service created in Task 6 will be edited to fetch these recently updated users on PublicLab:

```
<script src="https://gist.github.com/PeculiarE/713cf6ff73680293aaa2e206a4489cfa.js"></script>
```

<!-- -->

###### Step 3:

Next, we will create a new controller file called **jobs\_controller.rb** in the **app/controllers** folder. In this file, we will write a function that will call the **PublicLab Client** service, extract users from the resulting array, and update the status and role of users whose ids are on MapKnitter. Maps are then auto-spammed for these users.

```
<script src="https://gist.github.com/PeculiarE/ca7a3bb6266088258b590717820844ec.js"></script>
```
<!-- -->

###### Step 4:

Finally, we schedule a background job job that runs this sync twice a day (at midday and midnight) and this can be easily set up with **cron** and the **Whenever** gem.

```
<script src="https://gist.github.com/PeculiarE/0a2a9bf67fe6df199dbdf78b40bead2c.js"></script>
```
<!-- -->

We could adjust the sync frequency to once a day. However, regardless of the choice we make, the success message to moderators banning on Public Lab should relay the fact that the user's status will be updated on MapKnitter.

For example, if syncing happens twice a day, the success message shown to moderators on PulicLab's spam 2 dashboard should run along these lines:

'**4 users banned successfully. If users exist on MapKnitter, their status on MapKnitter will be updated within 12 hours**'

###### Conclusion:

The tricky part in this task would be editing the API to return the required array of data matching the given conditions mentioned above.

Once that is done, the remaining steps are quite simple to achieve. This task could be added to the 'stretch goals' of the project.

## Stretch Goals/Future Ideas for the Project

1. Comment moderation.
2. Adjusting the location of the comments section: should be placed on the single map-display page instead of on the map-edit page.
3. Ability of other users to flag maps and comments they think are spam (similar to what we have on PublicLab).
4. Creating an insights page complete with summaries and graphs (similar to what we have on PublicLab).
5. Full text search within the moderation tables.
6. Anonymous users are also responsible for some of the spam on MK but the current proposition has no way to checkmate this as all anonymous users have the same id on the database (i.e. 0). We can't say which map belongs to which of the anonymous users and banning one anonymous user translates to banning all. A tentative suggestion is to record the IP address of the anonymous user at the point of creating a map. The IP address serves as the unique identifier for that user. So when moderating maps, if a moderator spams a map from that IP address, the anonymous user connected to that address will be banned and all their maps spammed. However, I'm not sure if this contravenes any data privacy and confidentiality law or even negates the whole point of anonymity in the first place.
7. We can also tackle the issue of co-authorship because that's another way spam happens. Anonymous maps are not locked and so any logged-in user can edit their content. I believe we should be able to track and moderate revisions to a map by another person besides the original author.
8. Notifying first-time authors of map approval by mail using the Mailer service we already have on [PublicLab.org](http://PublicLab.org). This should be achievable using API calls

## Timeline/milestones

_**PHASE 1: ROUTES AND ENDPOINTS CREATION**_

**Week 1**: May 30 - June 5

- Community bonding and onboarding to PublicLab
- Receive final feedback on design mockups and make changes (if any)
- Create a detailed planning issue on the MapKnitter repository
- Run migrations on map and user tables

**Week 2**: June 6 - June 12

- Create the protected routes and endpoints for moderating maps - spam, delete, publish (both batch and single actions)
- Create possible FTO issues
- Write tests for the new features to ensure a robust codebase
- Make changes (if any) based on mentors' feedback

**Week 3**: June 13 - June 19

- Create the protected routes and endpoints for fetching data for each tab on the map moderation table
- Create possible FTO issues
- Write tests for the new features to ensure a robust codebase
- Make changes (if any) based on mentors' feedback

**Week 4**: June 20 - June 26

- Create the protected routes and endpoints for moderating users - ban and unban (both batch and single actions)
- Create possible FTO issues
- Write tests for the new features to ensure a robust codebase
- Make changes (if any) based on mentors' feedback

**Week 5**: June 27 - July 3

- Create the protected routes and endpoints for fetching data for each tab on the user moderation table
- Create possible FTO issues
- Write tests for the new features to ensure a robust codebase
- Make changes (if any) based on mentors' feedback

**Week 6**: July 4 - July 10

- Edit login process to forbid banned users from logging into MapKnitter
- Create FTO issues to return user's status and role from the PublicLab API.
- Create internal service on MapKnitter to call the PublicLab API hourly to check if the current user has been banned, spam the maps if true, and then log the user out.
- Write tests for the new changes introduced to ensure a robust codebase
- Make changes (if any) based on mentors' feedback

_**PHASE 2: DESIGN IMPLEMENTATION AND INTEGRATION**_

**Week 7**: July 11 - July 17

- Design implementation of the map moderation table
- Integration with already-created endpoints
- Create possible FTO issues
- Make changes (if any) based on mentors' feedback

**Week 8**: July 18 - July 24

- Design implementation of the user moderation table
- Integration with already-created endpoints
- Create possible FTO issues
- Make changes (if any) based on mentors' feedback

**Week 9**: July 25 - July 31

- Create FTO issues for adding the Spam All Maps button (visible to only the mods and admins) to author's profile page
- Create extra tabs (visible to only the mods and admins) on the map gallery for displaying 'banned authors' and 'unbanned authors'
- Make changes (if any) based on mentors' feedback

**Week 10**: August 1 - August 7

- Create FTO issues for directing moderators to both MapKnitter and PublicLab dashboards
- Create a FTO issue to change the action of the spam icons besides maps in the gallery
- Make changes (if any) based on mentors' feedback

_**PHASE 3: DOCUMENTATION AND PENDING TASKS**_

**Week 11**: August 8 - August 14

- Create a detailed document describing the purpose and usage of the MapKnitter spam dashboard (similar to what we have here: [https://publiclab.org/notes/keshav\_sethi0004/08-18-2020/spam-management-dashboard-documentation](https://publiclab.org/notes/keshav_sethi0004/08-18-2020/spam-management-dashboard-documentation))
- Make changes (if any) based on mentors' feedback

**Week 12**: August 15 - August 21

- Create a FTO issue to access the created documentation from the MapKnitter spam dashboard.
- Take on any of the stretch-goals that can be quickly completed within 2 weeks
- Make changes (if any) based on mentors' feedback

**Week 13**: June 27 - July 3

- Complete any pending task.
- Make changes (if any) based on mentors' feedback

## Needs

I would love to receive feedback on my PRs and also be able to get help and guidance from the community when I get stuck or confused.

## Contributions and Community Involvement

I joined the PublicLab community this year (March 2022) and I have made (and still making) several contributions across multiple repos, collaborating with other contributors, providing support, creating FTO issues, and helping out in any way that I can.

1\. Overall community involvement and participation:

- [https://github.com/search?p=1&q=commenter%3APeculiarE+org%3Apubliclab&type=Issues&utf8=✓](https://github.com/search?p=1&q=commenter%3APeculiarE+org%3Apubliclab&type=Issues&utf8=%E2%9C%93)

2\. Providing support and helping out others:

- [https://github.com/publiclab/plots2/pull/10909](https://github.com/publiclab/plots2/pull/10909) - Reviewed a PR and offered helpful suggestions
- [https://github.com/publiclab/infragram/pull/334](https://github.com/search?p=1&q=commenter%3APeculiarE+org%3Apubliclab&type=Issues&utf8=%E2%9C%93) - Reviewed a PR and offered helpful suggestions
- [https://github.com/publiclab/infragram/pull/250](https://github.com/publiclab/infragram/pull/250 "https://github.com/publiclab/infragram/pull/250") - Reviewed a PR and offered helpful suggestions
- [https://github.com/publiclab/mapknitter/pull/1647](https://github.com/publiclab/mapknitter/pull/1647) - Reviewed a PR and offered helpful suggestions
- [https://github.com/publiclab/mapknitter/pull/1689](https://github.com/publiclab/mapknitter/pull/1689) - Reviewed a PR and offered helpful suggestions
- [https://github.com/publiclab/plots2/issues/10944](https://github.com/publiclab/plots2/issues/10944) - Provided detailed visual tests of possible solutions to a bug raised by a PL user
- [https://github.com/publiclab/plots2/pull/10866](https://github.com/publiclab/plots2/pull/10866) - Tested React version changes made by the dependabot bot before PR could be merged
- [https://github.com/publiclab/plots2/issues/10844](https://github.com/publiclab/plots2/issues/10844) - Assisted other contributors in setting up the Plots2 repo locally
- [https://github.com/publiclab/mapknitter/issues/307](https://github.com/publiclab/mapknitter/issues/307) - Assisted other contributors in setting up the MapKnitter project locally
- [https://github.com/publiclab/mapknitter/issues/1659](https://github.com/publiclab/mapknitter/issues/1659) - Opened a weekly check-in and encouraged all SoC applicants to draft their proposals before the deadlines
- Answering questions and providing support in the Gitter/Matrix [chatroom](https://app.element.io/#/room/#publiclab:matrix.org) with username: Peculiar Erhisohwode (@peculiar\_erhis)

3\. Merged PRs (7 PRs and counting):

- [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+ "https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+")
- [https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+](https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+ "https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed")
- [https://github.com/publiclab/community-toolbox/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+](https://github.com/publiclab/community-toolbox/pulls?q=is%3Apr+author%3APeculiarE+is%3Aclosed+)

4\. Issues created (14 issues and counting, 8 of which are FTOs):

- [https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3APeculiarE+](https://github.com/publiclab/plots2/issues?q=is%3Aclosed+is%3Aissue+author%3APeculiarE+)
- [https://github.com/publiclab/mapknitter/issues?q=is%3Aissue+author%3APeculiarE](https://github.com/publiclab/mapknitter/issues?q=is%3Aissue+author%3APeculiarE+is%3Aclosed)
- [https://github.com/publiclab/community-toolbox/issues?q=is%3Aissue+author%3APeculiarE](https://github.com/publiclab/community-toolbox/issues?q=is%3Aissue+author%3APeculiarE+is%3Aclosed)

---------

## Experience

My journey into tech began nearly 2 years ago when I got accepted into an all-female software development bootcamp. I got introduced to HTML, CSS, JavaScript and even though it was challenging coming from a banking environment, I found it very interesting and exciting to build simple, basic webpages and projects that could be used by others to make their lives simpler and easier.

My success in the bootcamp earned me a place in an advanced coding academy where I was trained on using both front-end and back-end frameworks and libraries (such as Bootstrap, TailwindCSS, jQuery, VueJs, Express, NodeJs) in building web applications. I also learnt how to use databases, both relational (PostgreSQL and MySQL) and non-relational (MongoDB), to save and query information.

Ever since graduating from the academy, I have been fortunate to secure several internship and part-time roles working with other software engineers to not only learn but to also build scalable and usable products using all the technologies and stacks listed above. Some of these products include a human resource management app for companies seeking to ease the onboarding, management, and retiring of employees and a data-collection web app for a legal firm filing lawsuits on behalf of its clients.

Working in a team with several other developers taught me the importance of modularising your code for reusability and writing clean code that needs no explanation to the developer either reviewing your work or intending to continue from where you stopped

Along the way, I have built (and am still building) several personal pet projects (a simple wallet app for financial and transactional services, a Goodreads clone, an investment app, an ecommerce API), participated and ended up as a finalist in a Coil hackathon, learnt a new query language (GraphQL) in just one month and used it in building products, and volunteered as an instructor and facilitator at a coding academy.

But my biggest accomplishment so far was being an integral member of the technical team of software developers responsible for building the newest web version of Edusko Africa ([https://www.edusko.com/](https://www.edusko.com/)), the largest education hub in Africa.

All my personal projects can be found on my Github: [https://github.com/PeculiarE](https://github.com/PeculiarE?tab=repositories).

Almost every project I've worked on was largely based on JavaScript. This would be my first Ruby project but I am not daunted. I have an intermediate knowledge of Python (due to some data science and analytics courses I have taken previously), and its close similarity with Ruby has helped me to better and quickly understand the latter's syntax and even use it to solve [simple issues](https://github.com/publiclab/mapknitter/issues/1645) and [assist others](https://github.com/publiclab/mapknitter/issues/307#issuecomment-1094968720). I am a quick and enthusiastic learner and I am sure I will master it in no time.

## Teamwork

My journey in software development till date has been a story of teamwork. In the bootcamp and academy mentioned earlier, I learnt how to share ideas with other participants, work collaboratively, and explain difficult concepts as simply as possible to ensure everyone was on the same page.

During the final weeks of the academy, we were split into teams of 3 and asked to work on a final project. Here, teamwork came to the rescue as although I was initially assigned to work on the backend side of the project, I didn't hesitate to contribute to the frontend of the project once it became obvious that my teammates needed help in that area.

In my internship roles, I learnt the importance of self-sufficiency, effective communication and collaboration; balancing the fine act of being able to figure out problems on your own without existing in a silo and knowing when and how to reach out when you get stuck and encounter a blocker.

A perfect example of this was when I was paired with a senior developer. I made it a point of duty to regularly update him on my progress every morning (what I worked on the previous day, what I was going to work on that day, blockers encountered and how I solved them, and blockers I was unable to resolve, if any). It taught me independence and accountability as a member of a team.

---------

## Passion

My country, Nigeria, is a land beset with severe environmental problems. We have incessant oil spillage in the South, major land degradation caused by mining activities in the North and Middle Belt areas, and poor waste management and sanitation practices in almost every large city. But what worries me the most is the negligent attitude towards documenting and taking steps to resolve these problems.

I have witnessed friends and loved ones lose their means of livelihood (due to oil spillages and land degradation) and even fall sick thanks to the toxic waste being emitted by factories wrongly located in residential areas.

Prior to coming across the PublicLab community, I assumed that the fight against environmental injustice was near impossible for low-income earners and even rural communities struggling with pollution problems. And I felt incapable of doing anything.

However, I have since come to discover that PublicLab provides a wide range of tools (MapKnitter, Spectral Workbench, Infragram among others) that can be very beneficial to my country. This, of course, motivates me to take up the fight for environmental justice in any way I can. I can recommend PublicLab's easy-to-use DIY tools to other environmental advocates and play my part in keeping these tools effective and efficient.

## Audience

MapKnitter is a very handy tool for environmental advocates as they can stitch real-life aerial images on existing maps to get a printable, shareable map detailing real-life environmental events and concerns (e.g. flooding).

However, if the site is inundated with spam, it becomes increasingly frustrating for existing users to continue making use of this tool and also quite difficult for new users to understand the true purpose and intended usage of the site.

I want this spam management project to help de-clutter the site and make it welcoming and useful to both long-time veterans and people like me (newbies exploring the world of DIY environmental advocacy and coming across PublicLab for the first time.)

## Commitment

I do understand that this is a full-time commitment, and I am readily available to work for 40 - 45 hours every week from 9AM to 5pm GMT+1\.