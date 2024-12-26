---
title: "Outreachy proposal: MapKnitter.org Spam Management system"\ntagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: sakshi24
path: /notes/sakshi24/04-19-2022/outreachy-proposal-mapknitter-org-spam-management-system.md
nid: 30512
uid: 781808

---

![](https://publiclab.org/public/system/images/photos/000/046/213/original/2560px-Outreachy-logo.svg.png)

# Outreachy proposal: MapKnitter.org Spam Management system

by [sakshi24](../profile/sakshi24) | April 19, 2022 23:44

April 19, 2022 23:44 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

<br>

## About me

Hello, I am Ashlesha Dixit, a Computer Science and Engineering undergraduate student at IIT (BHU) Varanasi, India. I am an open-source enthusiast. 

**Name:** Ashlesha Dixit

**Email:** ashlesha.dixit.cd.cse20@itbhu.ac.in

**Alternate Email:** sakshinch@gmail.com 

**Github:** https://github.com/sakshi-2412

**Affiliation:** Indian Institute of Technology (BHU) Varanasi

**Location:** Varanasi, India

**Timezone:** Indian Standard Time (UTC + 05:30)

**Resume:** [Resume Link](https://drive.google.com/file/d/18aCsen1EgGlxwRkwxEjcmeiq-cy-tXJZ/view?usp=sharing)

<br>

## Project description

MapKnitter is an amazing platform to upload your own aerial images and place them over existing map data with features to share and export them. Unfortunately, MapKnitter has consistent spamming and lacks a spam management system. This project focuses on building a spam management system in the MapKnitter website, very similar to Public Lab. It will include a spam management dashboard with details of each map and author, and buttons to moderate them both individually and in bulk. There will be functionalities to classify maps and users according to their status (spammed/published/..) for quick moderation. Moderated maps and users will be denied normal privileges. The aim is to create a convenient system for moderators and users to minimise spamming in order to have a smooth experience with the website.

<br>

### Abstract/summary (<20 words):

To build a spam management system for MapKnitter.org.

<br>

## Problem

To moderate maps and users, a spam management dashboard (say https://mapknitter.org/spam) will have to be created very similar to Public Lab spam management dashboard (https://publiclab.org/spam2).

To maintain consistency, the UI and logic of the spam dashboard should be similar to the Public Lab spam management dashboard for the following reasons

- Increased usability by admins/moderators who will be comfortable with working and navigating through the dashboard.
- Easy to understand codebase for developers.
- Any new feature in the Public Lab spam dashboard can be easily added to the MapKnitter spam dashboard or vice-versa.

To uniquely identify both dashboards, we can change the colour scheme of MapKnitter spam dashboard after discussing with the mentors.

I will be frequently referring to the work already done by Gaurav Sachdeva in the PR - https://github.com/publiclab/mapknitter/pull/1030 while discussing the project tasks.

Spam moderation will require adding status as an additional column to both map and user database tables (work already started by Gaurav Sachdeva). Status will reflect the condition of maps and users. Keeping the logic of status same as that in Public Lab, we have 

For maps ->

- Status 0 - Spammed
- Status 1 - Published
- Status 4 - Unmoderated

For users ->

- Status 0 - Banned
- Status 1 - Normal
- Status 5 - Moderated

<br>
Breaking down the tasks that we have for this project -
<br>

#### **_I. A view of all recent maps_**
A rough look of the dashboard is given below -> 

[![spamDashboard.jpg](/i/46199)](/i/46199?s=o)

For displaying all recent maps, we will select all maps from the database and sort them in the decreasing order of their id (the ones which are created recently will be displayed first).

[![orderMap.png](/i/46196)](/i/46196?s=o)

This code will be added to the method **_spam_maps_** in **_spam_management_controller.rb_** (a new file already created by Gaurav Sachdeva in the linked PR) and it will be called through spam dashboard’s route - **_spam/_** in **_routes.rb_**.

Apart from recent maps, the dashboard can have other features similar to the Public Lab dashboard.

##### MENU

The Menu can have the following items for now-

[![newMenu.jpg](/i/46195)](/i/46195?s=o)

A rough idea how we are going to deal with the moderation is given below : 

[![Untitled_Diagram.drawio.png](/i/46190)](/i/46190?s=o)

<br>

**=> MAP MODERATION**

Map moderation will deal with two parts :

-  INDIVIDUAL MAPS -> 
We will have buttons to publish, spam, or delete individual maps and ban or unban their authors. For example, if we are dealing with spamming a map -

     1. Add a button to spam a map, link it to a route.
     2. Add the route in **_routes.rb_**, like **_moderate/spam/:id_**, which will call a method, say **_map_spam_**.
     3. Add map_spam method in **_admin_controller.rb_** (new file) which will verify the role of the currently logged-in user. The passed id of the map will be extracted to find that map from the database and mark that map as spam using **_@map.spam_**. Author of the map will also be banned, if they exist. A rough code is given below ->

          [![indiSpam.png](/i/46192)](/i/46192?s=o)

     4. In the **_map.rb_** models file, add the spam method which will update the status of the map as zero.

          [![spamModal.png](/i/46193)](/i/46193?s=o)


<br>

-  BULK MODERATION -> 
We will have buttons to select, publish, spam, or delete maps and ban or unban authors in bulk (selecting multiple maps or users at a time). For example, if we are dealing with spamming maps in bulk -

     1. Add a button to spam selected maps, link it to a route using a javascript file (**_spam.js_**), just like in plots2 repository, in order to join the ids of all the maps in the route.
     2. Add the route in **_routes.rb_**, like **_batch_spam/:ids_**, which will call a method, say **_maps_spam_**. 
     3. Add maps_spam method in **_batch_controller.rb_** (new file) which will verify the role of the currently logged-in user. The passed array of ids will be extracted to find all the associated maps from the database. Each map will be marked as spam using **_map.spam_**. Authors of these maps will also be banned, if they exist. A rough code is given below ->

         [![batchSpam.png](/i/46191)](/i/46191?s=o)

<br>

**=> USER MODERATION**

User moderation will have similar logic to map moderation. We will have buttons to ban/unban/moderate users individually or in bulk. Work has already been started by Gaurav Sachdeva in this direction.

**=> FLAGGED MAPS**

Normal users, along with admins and moderators, should have the privilege to flag maps to moderators if they find anything strange. Flagged maps will be displayed in the spam dashboard from where moderators can moderate them.

**=> INSIGHTS**

This page will display insights of the past month - number of unmoderated, spammed, flagged, published maps and a moderation graph.

<br> 

##### MAP-USER FILTRATION

For maps ->

[![mapFilter.png](/i/46188)](/i/46188?s=o)

For Users ->

[![userFilter_(1).png](/i/46187)](/i/46187?s=o)

Maps are classified into the following classes - recent (creation time), new activity (update time), spammed, unmoderated and published maps. Each filtration type will call the method **_spam_maps_** in **_spam_management_controller.rb_** (code already written by Gaurav Sachdeva) through a route - **_spam/filter/:type_**. Maps will be filtered based on the passed parameter - type. Similarly, users are classified into active (all), moderated, banned, moderators, and admins.

<br> 

##### OTHER FEATURES
Apart from these, the dashboard can have features of pagination, search filter, link to Public Lab spam dashboard, etc.

<br>

#### **_II. Displaying information about maps_**
In our spam dashboard view (say **_spam.html.erb_**), we will be displaying -

**1. Information about each map -**

[![infoMap1.png](/i/46176)](/i/46176?s=o)

We will display the name (title) of each map which will be linked to the map’s detail page. Information about the status of the map will be also displayed - published, spammed or unmoderated.

[![infoMap2.png](/i/46175)](/i/46175?s=o)

**2. Author’s status -**

[![authorStatus.png](/i/46177)](/i/46177?s=o)

For each map, we will display the name of the author who has created the map. The name will be a hyperlink to the profile of the author (where all maps by the author are displayed). Number of maps that the author has created will also be written. In the end, we will be showing if the author is a new contributor or not (logic discussed later). We will have to handle the case of anonymous authors carefully using conditional statements. We can also give different text colours to anonymous users, normal users and admins/moderators for smooth moderation.

**3. Number of images, placed or not -**

[![numberOfImages.png](/i/46178)](/i/46178?s=o)

Number of images associated with each map can be accessed by **_map.warpables_**. For checking if we have the images placed or not, we can do it using the **_placed_warpables_** method. Maybe we can also display the number of placed images.

**4. New contributor -**

[![new_contributor_(1).png](/i/46183)](/i/46183?s=o)

For checking if the author is a new contributor, we can use similar logic as in the plots2 repository. We can define a method called **_new_contributor_** in the **_user.rb_** models file and call it by **_map.user.new_contributor_**. It will check and return a green badge of “new contributor” if the user has created just one map which is not more than one month old.

To sum up, these are the files (along with their purpose) that we are going to deal with.

![image description][3]

<br>

#### **_III. Permission for currently logged-in user_**
Only admins and moderators will be allowed to view the spam management dashboard. To check whether the logged-in user is a normal user, admin, or moderator, we can update the existing Profiles API (https://publiclab.org/api/srch/profiles?query=). This API will ensure that we are synced with the latest information about the role of the user and avoid unwanted circumstances.

In the **_search.rb_** file of the **_api/srch folder_**, we are passing ‘USERS’ as our **_doc_type_** while initialising a new DocResult (logic written in **_doc_result.rb_** models file). We are also assigning doc_type (=’USERS’) as our **_category_**. Rather than this, in the category section we can pass the role or status of the user. We can have the following categories - NORMAL, ADMIN, MODERATOR, BANNED, MODERATED, and pass them for category initialization in doc_result.rb.

[![categoryIfElse.png](/i/46173)](/i/46173?s=o)

[![categoryDoc.png](/i/46174)](/i/46174?s=o)

We are also passing the status of the user to check if they have been banned from publiclab.org or not (Refer Task 8).

<br>

#### **_IV. Link from publiclab.org/spam2_**

[![linkDashboard.jpg](/i/46172)](/i/46172?s=o)

In the menu of the Public Lab spam management dashboard, we can add a link to the Mapknitter spam management dashboard. This is one of the most suitable places to add the link as it fits in the category of spam moderation. This task can be created as a FTO for new contributors.

<br>

#### **_V. Display maps of the user when they are banned_**
When a moderator tries to ban a user, we can open a modal on the same page which will 

- Display a list/thumbnail of the maps this user has created. We can limit the number of these maps (maybe 6-8) to avoid congested UI.
- Rather than displaying every map, we can add a link - “See all maps by this user” - which will open a new window to the profile of that user (https://mapknitter.org/profile/user)
- We can also add a link to open all these maps in the spam management dashboard itself if the moderator wants to individually check each map. This can be done using a search query.
- In the end, we will add a button to mark all the maps of this user as spam.

This approach will work well if we are banning a single user. If we are dealing with multiple users, we can just open the modal with a button to mark all maps of the selected users as spam.

<br>

#### **_VI. Spam all maps by the banned user_**
For this task, we will create a route in **_routes.rb_** like **_spam/username/_** which will call a method in our **_admin_controller.rb_** to handle the logic. We will find the instance of this user (say @user) through the passed-in username and will select all the maps by this user to mark each map as spam.

[![spamAllMaps.png](/i/46169)](/i/46169?s=o)

<br>

#### **_VII. Forbid login by banned users_**
After banning a user or setting their status as 0, we handle the login logic in the **_openid_authentication_** method of **_sessions_controller.rb_**. After finding the user by their identity url, we can check their status. A pseudo-code is given below:

[![forbidLogin.png](/i/46168)](/i/46168?s=o)

Some work has been done by Gaurav Sachdeva regarding alerting and redirecting moderated users.

<br>

#### **_VIII. Check status of logged-in Public Lab users_**
We have already discussed updating the Profiles API to check the status of a user - NORMAL, BANNED, MODERATED, etc. This API can be called while running the **_current_user_** function located in **_application_controller.rb._** If we find that the current user is banned or moderated, we will display a flash error and destroy the user’s session. 

Maybe, the API can be called every 6 hours since we are calling it in the current_user function which is frequently used in many pages. If a banned or moderated user tries to navigate through the pages which use the current_user function, the API will be called.

To call the API regularly, we will use the **_whenever_** Ruby gem. It will create a **_schedule.rb_** file for us in the **_config_** folder, where we can run the current_user function. Pseudo code given below -  

[![every6hours.png](/i/46167)](/i/46167?s=o)

<br>

#### **_IX. Build on early work by Gaurav Sachdeva_**
The PR made by Gaurav Sachdeva tackles the logic for adding maps created by anonymous or first-time-poster users into the moderation queue (spam by anonymous users can be handled to a large extent with this idea). Breaking down the work that has already been done in this PR -> 

- A status column is added to the maps by running migration. [**_schema.rb_**]
- While saving the map after creation, moderation service is called where the map is marked as moderated if it requires moderation (anonymous or first-time-poster authors). [**_maps_controller.rb, moderation_service/moderate_map.rb_**]
- Maps are classified on the basis of their status into moderated (=4), banned (=0), or normal (=1). Similarly, users are classified into moderated (=5), banned (=0) or normal (=1) [**_models/map.rb , models/user.rb_**]
- Methods to mark a user as moderated, normal and banned are written [**_models/user.rb_**]
- Filtering of maps and users on the basis of their status/role is done. [**_spam_management_controller.rb_**]
- Method for alerting and redirecting while dealing with moderated users or spammed maps is written [**_application_controller.rb_**]

I propose changing the classification of maps that has been done in this PR from NORMAL, BANNED, MODERATED to PUBLISHED, SPAMMED, UNMODERATED in order to maintain consistency of logic with plots2 repository.

The things that have to be done following this work -

- Complete the remaining backend functionalities like marking a map as spammed/published/.., bulk moderation, etc.
- Integrate the backend functionalities with frontend components of spam management dashboard.
- Restrict displaying spammed and unmoderated maps in the main website, handle login by banned and moderated users.
- Add buttons for admins and moderators to spam/delete maps directly from the main website (like in map detail pages or map thumbnail list pages).

   [![map-thumbnail.jpg](/i/46166)](/i/46166?s=o)

   This is how a map thumbnail will look like to a moderator/admin. There will be buttons to flag, spam and delete a map.

   For normal users, there will be a button to flag maps to the moderators. Additionally, there will be buttons to archive or delete those maps that they have created. The existing archive system can be enhanced by adding buttons to unarchive a map, displaying archived maps of the user on a dedicated page, etc. This work can be done after completion of the project (post-outreachy period).

<br>

### Timeline/milestones

[![timeline.png](/i/46164)](/i/46164?s=o)

<br> 

### Needs

In order to complete this project effectively, I will highly appreciate the mentors to give me honest feedback on my work regularly and guide me to enhance the quality of my PRs.

<br> 

### Contributions

I have been contributing to Public Lab since December, 2021 in the plots2 and mapknitter repositories. Following are my contributions - 

**1. Comments, to show overall community involvement:**

- https://github.com/search?p=1&q=commenter%3Asakshi-2412+org%3Apubliclab&type=Issues

**2. Issues created (total 8 and counting):**

- Repository  plots2 : https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Asakshi-2412+

- Repository mapknitter : https://github.com/publiclab/mapknitter/issues?q=is%3Aissue+author%3Asakshi-2412+

**3. PRs opened (total 14 and counting):**

- Repository  plots2 : https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3A%40me+

- Repository mapknitter : https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3A%40me+

****

<br> 

### Experience

I started with basic coding in C++ while I was in high school and continued it in college in my first year. In the summer last year, I participated in a six week long development event organised by my college which I won. Since then I haven’t stopped because I finally got to know my field of interest - software development - which I am really passionate about. 

I have worked on a number of projects which gave me exposure to many technologies - Django, React, Bootstrap, SQL, Ruby on Rails, Postman, Chart.js, Node.js, C++, Python.

Projects that I have majorly worked on are ->

**1. VACCINO :**

- Exposure: Django, SQL, Bootstrap
- This is a Vaccination Management Website which allows an institute to smoothly manage and verify vaccination and covid related details of its members, thus facilitating survey maintenance to control the corona outbreak.
- Link - https://github.com/sakshi-2412/vaccino
 
**2. HACKALOG :**

- Exposure: React, Django
- Contributing to my college's own hackathon platform by updating UI designs, adding functionality to edit a submission using APIs, and developing an admin portal (ongoing).
- Link - https://hackalog.copsiitbhu.co.in/
  
**3. OTHER PROJECTS :** 

- Links can be found here -  https://github.com/sakshi-2412 

****

<br>

### Teamwork

I started with my open-source journey through the Hackalog project by learning and contributing with my peers. My love for open-source cultivated because of this project.

My friend and I built the Vaccino project, even though we were living in different cities at that time. This is a special project because it was the first time we made a website from scratch with an idea of our own.

Along with other students and guidance from seniors, I am contributing to the website of codefest - annual tech fest of Computer Science Department, IIT (BHU) by re-designing the pages according to the decided theme and implementing it on the frontend. I had to learn designing for this project and it was worth it.

We are working as a team of three on a deep learning project to detect dental diseases in panoramic dental images under the guidance of one of our respected professors.

As a member of the software development group of my college - COPS, I am actively involved in organising workshops and events in the college. I conducted an introductory workshop to Git and GitHub for freshers which had 100+ participants. I made a youtube video on Django Views as a part of the Django tutorial which is going to be released soon by COPS.

****

<br> 

### Passion

I love the culture of open source where people from all over the world connect together irrespective of their background and yield something meaningful for the betterment of others. 

I am specifically interested in Public Lab because of its motive to provide environmental justice. I have lived in New Delhi, India for 18 years. In autumn, the air quality of Delhi is the worst. I remember going to school with a face mask and almost zero visibility on roads due to thick cover of polluted air. Everyone in the city suffers from breathing problems during these months. I wish that every place on this earth is free from pollution so that everyone can enjoy the warm touch of nature and I highly appreciate the efforts Public Lab is making in this direction. Looking forward to future contributions!

<br> 

### Audience

Spam in MapKnitter brings a negative look to the website. MapKnitter should  provide useful and apt content to all the users. Unnecessary and offensive posts that could hurt anyone should be avoided. Quality content will also ensure more participation by new users. It is also important that admins and moderators have a smooth experience while using the spam management system in order to quickly and effectively moderate the website. This project is for everyone who wants to effortlessly use MapKnitter! 

<br> 

### Commitment

I understand this project is a serious commitment. I ensure that I can devote the required time, 30 hours per week, for the same since I do not have any other engagement in the summers.

  [1]: /i/46224.png "Untitled_Diagram.drawio_(1).png"
  [2]: /i/46229.jpg "2-2.jpg"
  [3]: /i/46230.jpg "Untitled_Diagram3.jpg"