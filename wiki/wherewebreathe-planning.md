---
title: WhereWeBreathe Planning
tagnames: wherewebreathe, parent:wherewebreathe
author: warren
path: /wiki/wherewebreathe-planning.md
nid: 10555
uid: 1

---

# WhereWeBreathe Planning

by [warren](../profile/warren)

June 12, 2014 14:09 | Tags: [wherewebreathe](../tag/wherewebreathe), [parent:wherewebreathe](../tag/parent:wherewebreathe)

This page attempts to track the current status of WhereWeBreathe design process.

Time estimates:

1. Setup & communication: 39h
2. Site architecture and database design: 22h
3. Template coding, form and graph implementation: 76h
4. User login, security & privacy: 52h

****

##WhereWeBreathe

Public Lab is collaborating on a project to enable people facing indoor formaldehyde air contamination to better understand the effects of exposure, exacerbating variables and potential mitigation techniques. Participants can advance and collectivize scientific knowledge of chronic formaldehyde exposure's effects by selectively sharing health and symptom information with others experiencing similar issues. The site will feature a series of questions related to exposure and symptoms, and site users will be able to tell their stories and exchange information with others, anonymously if they wish.

###Tech stack

We are planning for a Node.js website with:

* express framework
* mongo database with Rails-like mongoose ORM (see https://github.com/publiclab/infragram-js for an example)
* user authentication
* Bootstrap interface with mobile (fluid) layout: http://getbootstrap.com
* graphs with d3: http://d3js.org/

https://github.com/publiclab/wherewebreathe/issues

##Web development phases

###1. Setup & communication

Minimum viable product: 

* Features:
  * user registration, email confirmation, password reset
  * collection of answers to various questions in database for each user
  * user toggle for public/private responses (all or nothing)
  * display of aggregate answers and (for public users) individual answers/narratives
  * 
* Interface: this Phase 1 will include the following pages/pagetypes: 
  * front page
  * signup page
  * welcome modal box upon first login
  * question form
  * graph display of answers page, with display of long-form narratives for each question
  * settings page with privacy switch
  * login/password reset page
* Questionnaire
  * current draft: https://docs.google.com/forms/d/1BvjKvH5dUFNjhhDdA4NNtsTHiXgurjJN3-c72mcrvFM/viewform

###2. Site architecture and database design

* sitemap: see below
* MVC data models, futureproofing & planning for future possible PublicLab.org integration
  * database scalablity and how we store answers to questions.
* possible anonymous aggregate database download formatting in both conventional csv/excel and custom plaintext for analysis in stata - download popover on each graph page, bulk download from footer and/or settings page

[![wwb-sitemap-2.png](https://i.publiclab.org/system/images/photos/000/004/854/medium/wwb-sitemap-2.png)](https://i.publiclab.org/system/images/photos/000/004/854/original/wwb-sitemap-2.png)


_Background: https://github.com/publiclab/wherewebreathe/issues/14 (bulk download)_

###3. Template coding, form and graph implementation

####Basic look & feel

Wherever possible, we'll be using default Bootstrap styles to save time/effort and use consistent, familiar web idiom. Very minimal page w/ header & footer, following this design:

[![header.png](https://i.publiclab.org/system/images/photos/000/004/837/medium/header.png)](https://i.publiclab.org/system/images/photos/000/004/837/original/header.png)

With 2 columns of useful links or information in the footer, with plenty of extra space, as on PublicLab.org; light grey on white.

####Mobile compatibility

Fluid layout (see https://github.com/publiclab/wherewebreathe/issues/5) should allow for a workable mobile view with minimal tweaking, but some elements will be hidden on mobile browsers to simplify layout:

[![fluid.png](https://i.publiclab.org/system/images/photos/000/004/839/medium/fluid.png)](https://i.publiclab.org/system/images/photos/000/004/839/original/fluid.png)

####Front page

* static content, or possibly displaying one dynamic graph
* introduce the project, and display some graphed data. How much and what kind of data can we show?
* mockup forthcoming

_Discussion continuing at https://github.com/publiclab/wherewebreathe/issues/15_

####Dashboard

* we will simply display questions instead of having a "dashboard", for phase I
* A modal "welcome" box if you've just signed up to be friendly and orient first-timers. Also perhaps a status box (can defer to Phase II) with how many questions you've answered, tips or suggestions for next steps. These can use standard Bootstrap modal style, as long as it works on mobile. 

_Background: https://github.com/publiclab/wherewebreathe/issues/1, https://github.com/publiclab/wherewebreathe/issues/3_

####Question form

* questionnaire; current draft can be found here: https://docs.google.com/forms/d/1BvjKvH5dUFNjhhDdA4NNtsTHiXgurjJN3-c72mcrvFM/viewform?usp=send_form
* UI/UX testing/review of question form
  * this is something we can do somewhat informally, as the more serious UI/UX review could be after this beta project is launched, and could feed into Phase II revisions later.

Current mockups: _none for question form, but can follow questions in draft survey above, and visual style established in signup page below._

_Background: https://github.com/publiclab/wherewebreathe/issues/8, https://github.com/publiclab/wherewebreathe/issues/4_

####Graph and narratives display

* basic design in below mockups; further mockups showing different question types in progress
* likely d3, aggregate data serving and display discussion ongoing but likely bar graphs as shown in mockup
* privacy review: what info is actually exposed in this graph? Can individual contributor information be deduced? "Down-res'ing" or obfuscating identifying information

Current mockups:

[![graph-design.png](https://i.publiclab.org/system/images/photos/000/004/835/medium/graph-design.png)](https://i.publiclab.org/system/images/photos/000/004/835/original/graph-design.png)

_Background: https://github.com/publiclab/wherewebreathe/issues/8_

###4. User login, security & privacy

* signup page design process (see mockup)
  * username & password creation & email-based recovery (closely follow process & design on http://publiclab.org/login)
  * UI/UX testing/review of registration: run through the signup process and "new user experience" a few times with varying types of users
* security/privacy of the database - starting with storing as little identifiable user data as possible
* privacy control panel/switch (see mockup)

Current mockups:

[![signup.png](https://i.publiclab.org/system/images/photos/000/004/836/medium/signup.png)](https://i.publiclab.org/system/images/photos/000/004/836/original/signup.png)

[![privacy.png](https://i.publiclab.org/system/images/photos/000/004/840/medium/privacy.png)](https://i.publiclab.org/system/images/photos/000/004/840/original/privacy.png)

_Background: https://github.com/publiclab/wherewebreathe/issues/7_

####Beta production server setup

* we have VMs available via our hosting provider and a donation from Rackspace... mostly this will be meeting/communicating with Dogi our sysadmin and getting login credentials, installing packages etc.
* security/privacy audit if possible
* access policy for team members (not part of web dev)

****

##Phase 1.5

* Mailgun for emails
* admin interface
* SSL
