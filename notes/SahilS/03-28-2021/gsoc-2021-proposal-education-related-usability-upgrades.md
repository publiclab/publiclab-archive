---
title: GSOC 2021 Proposal: Education-related usability upgrades
tagnames: gsoc, soc, first-time-poster, gsoc-2021-proposals
author: SahilS
path: /notes/SahilS/03-28-2021/gsoc-2021-proposal-education-related-usability-upgrades.md
nid: 26047
uid: 746332

---

# GSOC 2021 Proposal: Education-related usability upgrades

by [SahilS](../profile/SahilS) March 28, 2021 14:50

March 28, 2021 14:50 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2021-proposals](../tag/gsoc-2021-proposals)

## About Me:

---------

Name: Sahil Saha

GitHub: [https://github.com/sahilsaha7773](https://github.com/sahilsaha7773)

Email: [sahilsaha7773@gmail.com](mailto:sahilsaha7773@gmail.com)

Affiliation: Jalpaiguri Government Engineering College (1st year)

Field of Study: Computer Science and Engineering (B.Tech.)

Location: India

## Project Description:

---------

Bug fixes, feature additions, and improvements focused on educational users while incorporating feedback from the public lab's educational community.

## Abstract/Summary:

---------

This project aims to fix bugs, add new features, and refine the UI, focused on the public lab's educational users. The new features to be added include improvement of autocompletion results, a listing of drafts on profile pages, detailed tooltips on maps, a system for pre-approved posting for students that can bypass the moderation system, and refined display of coauthored posts on profile pages. The above-mentioned features will make it easier for educators to use the platform more effectively.

## Project Goals and their implementation:

---------

### Drafts listing on profile/tag pages

Add a listing of drafts on profile and tag pages to make it easier for users to find saved drafts, the UI should follow the public lab style guidelines.

Profile page sample preview:

![](https://lh3.googleusercontent.com/fv5JO09daa8U8XQFYwKSUVCcPC-OygxLltgSTdRH99k8013PqIiltth-zqvO9nTM4c1Peau26SkJXe5wNwudE23HA_vaPKSRndwvyhuMqgV4hMibPB9VfXfwf0ReQo7jmDXizZqX)

Tag page sample preview:

![](https://lh5.googleusercontent.com/No34vImVTjRe3mVkm7YOJNZfrVMN9RqGv1hnGc87uX0o-CIEJ9Oxjp25Ror50AQyEaCKelsjFlL-wUgIhuLELLofXrFJguBn_J58DpRtVKgc9Qj8AAoJ6K5FYrGjUmW82Hrg8kNr)

This can be done by creating a separate method in the Tag model class named find\_draft\_notes which gives all the nodes of type: 'note' and status: 3 created by the current\_user arranged in descending order according to the timestamp that is the recent one shown first:

![](https://lh3.googleusercontent.com/dG7PqDyMd_T1om4wSafoPDtXJt-GBtFxPH6GeWpGmBcMO8AxCrZVCSYa1vD2cEBXWBIk7CpuwCRg14vSpxn2lOBbdTmIRB1ONQUYcZhb1cInef3RamSaZLaFMHdFPk_1XFlkxK3I)

And another method to find\_draft\_notes\_by\_tag which takes two parameters tagnames and current\_user, and returns nodes with type: 'note', status: 3, created by current\_user and having tags consisting of tagnames:

![](https://lh5.googleusercontent.com/Lkr-WjCl6VFPEbJRHE76S70zl-ooGC3Zox2YNI-x2ZoJo40iEVJ5HZofY2vfBxRwKGYyQwlCh3DuMBO8sYd0QWY4QcUvKspv3sJ4RdwPkl72dDJIzuQOWNKzImNEGXSs6dYkepOT)

Then display them on the profile page if the current\_user is the same as the profile\_user, and on the tag page in a separate tab named "Drafts" keeping with the public lab [style guide](https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab).

## Invites

---------

A system for pre-approved invites that can bypass the moderation queue while posting. An invite link should look like this, [https://publiclab.org/invite?code=12345](https://publiclab.org/invite?code=12345). These links can be created by educators to invite a specific user. The invite link will open up an option to create a post and publish it directly bypassing the moderation queue.

The posts created with an invite link will have a special status that can bypass the moderation queue, the users invited will receive a notification consisting of the invite link.

An invite link will have 1 week expiry time from the time of creation.

## Display of coauthored posts

---------

Add refined display of coauthored posts on the profile page, first seeking community reps input to refine design choices and decide whether to show coauthored posts mixed in with authored posts or in a separate section.

Sample preview of coauthored posts as a separate section (this is not the final design):

![](https://lh5.googleusercontent.com/-44Rcs5CQudAQ2jV_LoMsFstXWRujuVixMUt1hXxqNDUkzA8C_fpABLAxyXua5ebSQDSKKZFNMA6t5Gwo2Yn6-r2D-pOVPvmk_wwWqsfq3ePxHZpcUSS-jQKdziR0uzBsTb5hFNi)

## Improvements in autocompletion

---------

Autocompletion results will Include usernames used recently, or who are recently active on the site with full wildcard matching similar to GitHub @ mentioning system. A collection of usernames will be prefetched and cached daily or weekly which will be added to the API responses.

## Documentation improvements

---------

The steps given to "subscribe to all tags" at [https://publiclab.org/wiki/moderation#Moderation+systems](https://publiclab.org/wiki/moderation#Moderation+systems "https://publiclab.org/wiki/moderation#Moderation+systems") is out-dated and needs to be updated with the latest steps.

## Other improvements/fixes

---------

- Add Bootstrap tooltips explaining latitude longitude tags on pages linked with a place or a map.
- Refine the design and details of the newly relaunched dashboard with community input.

## Timeline

---------

![](https://lh3.googleusercontent.com/55d9pWMw6N2eBz4dx-NRSoQ3MRQGM6S_RD2TDTWObRq--4969JIzzZFDKPN_80zvnKwY2wStWYyamu6vQVwxVNQGtmoW7vPUDTzs6HKIXDwv2_mQABFa5IaWLmS3NUMWe5FbTVwN)

# Contributions

---------

I have recently been an active member of the public lab community, I have contributed to Public Lab's plots2 repository, by opening and reviewing [PRs](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:sahilsaha7773%20is:closed "https://github.com/publiclab/plots2/pulls?q=is:pr%20author:sahilsaha7773%20is:closed") and [issues](https://github.com/publiclab/plots2/issues?q=is:issue%20author:sahilsaha7773%20is:closed).

# Commitment

---------

I understand that this is a serious commitment and I am ready to commit 40+ hours weekly to complete my project within the given time.

# Needs

---------

Guidance from my mentors and suggestions from the members of the public lab community.