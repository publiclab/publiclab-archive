---
title: "GSoc Proposal: OAuth & Upgrade to Bootstrap 4"

tagnames: 'gsoc, user, soc, gsoc-2018, soc-2018-proposals, config, gsoc-2018-final'
author: bansal_sidharth2996
path: /notes/bansal_sidharth2996/02-20-2018/gsoc-proposal-oauth-authentication.md
nid: 15771
uid: 503599

cids: 18607,18613,18615,18887,18960,18961,18962,18980,18992,18993,19045,19046,19047,19071,19072,19126,19128,19133,19143,19166,19167,19168,19210,19211,19212,19214,19215,19217,19218,19219,19236,19237,19239,19240,19241,19243,19302,19303

---

![](https://publiclab.org/public/system/images/photos/000/023/721/original/omniauth.png)

# GSoc Proposal: OAuth & Upgrade to Bootstrap 4

by [bansal_sidharth2996](../../../profile/bansal_sidharth2996) | February 20, 2018 00:23

February 20, 2018 00:23 | Tags: [gsoc](../tag/gsoc), [user](../tag/user), [soc](../tag/soc), [gsoc-2018](../tag/gsoc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [config](../tag/config), [gsoc-2018-final](../tag/gsoc-2018-final)

----

**Name:** Sidharth Bansal

**Affiliation (school/degree)** 2nd yr, B. Tech, Software Engineering Course at Delhi Technological University, India

**Location (where you are):** New Delhi, India (GMT +5:30)

**Email:** [bansal.sidharth2996@gmail.com](mailto:bansal.sidharth2996@gmail.com)

**LinkedIn Profile**: [https://www.linkedin.com/in/sidharth-bansal-99648b129/](https://www.linkedin.com/in/sidharth-bansal-99648b129/)

****  

**IRC nick:** Sidharth

**Project(s) you're working on or want to**: plots2

## Project description

#### Abstract/summary (<20 words)

Authorising users through Google, Facebook, Github and Twitter through Omniauth gem.

Upgrade the current bootstrap version 3 to version 4\.

**Describe the need your project fulfils:**

Mentors' guidance and documentation.

Few important links are

- [http://getbootstrap.com/docs/4.0/migration/](http://getbootstrap.com/docs/4.0/migration/)
- [http://www.dotnetcurry.com/javascript/1334/migrating-bootstrap-3-to-bootstrap-4](http://www.dotnetcurry.com/javascript/1334/migrating-bootstrap-3-to-bootstrap-4)
- [http://upgrade-bootstrap.bootply.com](http://upgrade-bootstrap.bootply.com/)
- [http://www.rubydoc.info/gems/omniauth-facebook/3.0.0](http://www.rubydoc.info/gems/omniauth-facebook/3.0.0)

etc.

#### How will your project meet this need?

The project's need is to give the users the ability to sign up and log in to various social media websites like Facebook, Google, Github and Twitter. This project will allow the users not to fill in the details again at Public Lab. The account of a user will be linked so that if a user links through any one of the accounts, he will be able to log in and will be able to use any of his/her accounts properly.

Secondly, the project will ultimately give a better experience to the user after we shall upgrade to Bootstrap 4

#### 

#### 

# **Timeframe**

**Community Bonding period** (April 23 16:00 UTC - May 14)

Read the documentation, get up to speed to begin working on their projects, discussing the plans with the mentors.

**Phase 1** _Work Period_ (May 14 -June 15 16:00 UTC)

May 14 - May 20 Completion of #2388([https://github.com/publiclab/plots2/issues/2388](https://github.com/publiclab/plots2/issues/2388)) ie Login through facebook

May 21 - May 31 Login to Google

June 1 - June 8 Login to Twitter

June 9 - June 15 Bug fixes and documentation of the first evaluation

Evaluation (June 11 16:00 UTC -June 15 16:00 UTC)

Writing research note on the first evaluation of the GSoC Proposal

**Phase 2** _Work Period_ (June 16 -- July 9 16:00 UTC)

June 16 - June 20 Login to Github

June 20 - June 23 Completion Of the first part of the project - OAuth

June 23 - June 30 Replacement of glyphicons with font awesome

July 1 - July 9 Fix Pagination

_Evaluation_ (July 9 16:00 UTC - July 13 16:00 UTC)

Writing research note on the second evaluation of the GSoC Proposal

**Phase 3** _Work Period_ (July 14 -August 5)

July 14 - July 21 Fix Navigation links

July 22 - July 28 Fix Navigation bars

July 29 - August 31 Replace deprecated code to modern alternatives

_Evaluation_ (August 6 - August 14 16:00 UTC)

Writing final Evaluation research note according to GSoC guidelines and checking that all tests pass or any Bug fixes in the code and submitting final evaluations

# OAuth

This would include the basic login and signup through the Facebook, Google, Github and Twitter. There would be integration tests for the same. Documentation of the various gems used will also be a part of it.

IMPLEMENTATION

Authentication systems have a User model which handles most of the authentication logic but having multiple logins forces to correctly separate the concepts of an Identity and a User. An Identity is a particular authentication method which a user has used to identify themselves with public labs whilst a User manages data which is directly related to public lab website itself.

Migrations:

```
class CreateIdentities ```