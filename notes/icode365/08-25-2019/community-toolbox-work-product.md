---
title: 'Introducing Community Toolbox 2.0'
tagnames: social-media, gsoc, code, barnstar:basic, newcomers, blog-submission, summer-of-code, welcoming, community-toolbox, gsoc-19, soc-19, gsoc-2019-final-report, pin:community-toolbox
author: icode365
path: /notes/icode365/08-25-2019/community-toolbox-work-product.md
nid: 20662
uid: 553778

---

![](https://publiclab.org/public/system/images/photos/000/034/871/original/fto-wp.png)

# Introducing Community Toolbox 2.0

by [icode365](../profile/icode365) August 25, 2019 11:52

August 25, 2019 11:52 | Tags: [social-media](../tag/social-media), [gsoc](../tag/gsoc), [code](../tag/code), [barnstar:basic](../tag/barnstar:basic), [newcomers](../tag/newcomers), [blog-submission](../tag/blog-submission), [summer-of-code](../tag/summer-of-code), [welcoming](../tag/welcoming), [community-toolbox](../tag/community-toolbox), [gsoc-19](../tag/gsoc-19), [soc-19](../tag/soc-19), [gsoc-2019-final-report](../tag/gsoc-2019-final-report), [pin:community-toolbox](../tag/pin:community-toolbox)

----

Community Toolbox is a platform dedicated to community growth and getting insights on organization-wide activities.

**Project Title:** Community Toolbox Overhaul

**Mentors:** Jeffrey Warren, Sagarpreet Chadha-1 and Harshith

**GSoC Proposal Link:** [community toolbox overhaul proposal](https://publiclab.org/notes/icode365/03-02-2019/soc-proposal)

**Repository:** [community-toolbox](https://github.com/publiclab/community-toolbox)

**Link to Commits:** [publiclab/community-toolbox/commits?author=rishabh570](https://github.com/publiclab/community-toolbox/commits?author=rishabh570&since=2019-05-01&until=2019-09-03)

## About the Project

Community-Toolbox is a place where we welcome newcomers to our community & open-source. It provides a list of _first-timers-only_ and _first-timers-only-candidate_ issues, information about any specific repository which includes a list of contributors, recent-contributors which comes with a lot of filters which helps in getting insights about the activity status, first-timers-only authors list, leaderboard and much more.

## Work Done

- Added the config file which helps in making the project portable [216](https://github.com/publiclab/community-toolbox/pull/216)
- Implemented a list of stale issues [217](https://github.com/publiclab/community-toolbox/pull/217)
- Implemented dropdown for navigation [219](https://github.com/publiclab/community-toolbox/pull/219)
- Implemented a set of filters for recent contributors section which includes sorting and showing data for different time periods [238](https://github.com/publiclab/community-toolbox/pull/238)
- Added night mode theme [221](https://github.com/publiclab/community-toolbox/pull/221)
- Added a list of first-timers-only issue authors [225](https://github.com/publiclab/community-toolbox/pull/225)
- Added a copy to clipboard button [232](https://github.com/publiclab/community-toolbox/pull/232)
- Implemented a user notification system [236](https://github.com/publiclab/community-toolbox/pull/236)
- Built a leaderboard of contributors [235](https://github.com/publiclab/community-toolbox/pull/235)
- Added progressive web app support to community toolbox, can also be used as a standalone mobile app [239](https://github.com/publiclab/community-toolbox/pull/239)
- Implemented data fallback support in case of no network connectivity [239](https://github.com/publiclab/community-toolbox/pull/239)
- Wrote unit tests for the project [246](https://github.com/publiclab/community-toolbox/pull/246)
- Added documentation which includes an explanation about the project structure, a getting started guide (along with video version) and modified how to use guide. [258](https://github.com/publiclab/community-toolbox/pull/258)
- Refactored the code [231](https://github.com/publiclab/community-toolbox/pull/231), [213](https://github.com/publiclab/community-toolbox/pull/213)

## Walkthrough

### Stale Issues

So for generating the list of stale issues, what the code does is, first it fetches the list of issues for the organization (sends paginated requests) and then it looks into each issue's data (that Github API sends back) to check if the issue is stale or not.![image description](/i/34832.png "stale-wp.png")

### Dropdown for navigation

It is built to make the process of switching to different repositories easier. Also, it is useful when using the website as a standalone app because there is no URL bar present in the app.
The data of the dropdown i.e., dropdown items are not hardcoded instead, they come from the database which ensures that no manual work is required when adding a new repository to the list.

![image description](/i/34834.png "dropdown-wp.png")

### Filter options for recent contributors' list

This list shows the data for recent contributors and certain filters are required for this list, like sorting the list according to the highest contributions (leaderboard), alphabetical, etc. Also, as sometimes the data needs to have a wider time frame for specific purposes, the filter also provides different time frames to show data against.

The idea implemented here is that all the filters for a wider time frame can be derived from the main contributors' data for the longest possible time frame that user could ask for and i.e., a period of 6 months...all the data for smaller possible time frames can be easily obtained if we have contributors' data for 6 months (for a particular repository). So whenever, the user asks for the contributors' data we first and foremost fetch the data for 6 months so that we don't have to hit the internet for any further calls for that particular repository.

Here's a GIF for some quick overview,![image description](/i/34835.gif "filter_latest.gif")

### Night mode theme

This utility uses localStorage to save user's choice and turns on the themes accordingly. For shifting to night mode, the `filter` property of CSS is used which inverts the colors of the page and turns images into grayscale.![image description](/i/34836.png "night-wp.png")

### List of FTO issue authors

This is a list of people who create `first-timers-only` issues to welcome new people to the community. The filtering for this list happens at the time of fetching issues in `demo.js` which checks if the issue contains labels like "first-timers-only" or "fto".

\[ As a side note, the data for issues is never stored in the database because issues list must show real-time data and not the cached one! \]![image description](/i/34837.png "fto-wp.png")

### Copy to clipboard

This utility is required when people need to copy the names of the contributors in bulk, like when mentioning people in the check-In for example. This is a very useful feature in that kind of situations, so this is incorporated into contributors and recent contributors list.
It uses creating a "hidden" input field which contains all the names of the people and when copy button is clicked, the names from the input field get copied to the event clipboard which can be pasted anywhere.

### Notification system for network issues

This is basically concerned with user's awareness about the website. If anything happens wrong in the backend and no data is shown, the user should be able to know so that he/she does some action instead of waiting for the data to show. "Node Snackbar" is used for this purpose and any network call that is unsuccessful throws the error which is caught and displayed to the user.

Below is the GIF showing that,![image description](/i/34838.gif "repo-notification-wp.gif")

### Progressive web app

This feature enables the website for offline access to the page and it allows the site to be installed as a standalone mobile app. A service worker is used which follows `Network with Cache Fallback Policy` along with constant cache modification technique which ensures that

- User is served with the latest copy of data if he/she is online
- Data is shown to the user from the cache when he/she if offline with the guarantee of the cache containing the latest copy of data.

This way we ensure that the user is getting the most recent stats in any case.![image description](/i/34839.gif "offline_working.gif")

### Writing units tests

As of now, tests are completed for the controller layer. `jest` and `jest-when` are used for this purpose and different test suites contain tests for different files in the controller layer.

The structure looks like this,

![image description](/i/34840.png "tests-structure-wp.png")

![image description](/i/34841.png "tests-passing-wp.png")

## Writing documentation

This includes documentation for the project overview so that a new person can get the gist of what & why behind the working, it includes a getting started guide also which includes a video version also so that people face the least possible resistance while working on the project and finally a how to use page.

![image description](/i/34861.png "project-overview-wp.png")

Documentation can be visited here: [https://github.com/Rishabh570/community-toolbox/blob/DOCS/README.md](https://github.com/Rishabh570/community-toolbox/blob/DOCS/README.md)

## The approach towards developing features

Community-toolbox follows Model-View-Controller (MVC) like architecture and in the project,

- `models/` acts as the _model layer_,
- `utils/` acts as the _controller layer_, and
- `UI/` acts as the _view layer_.

So when developing any new feature for community-toolbox, the following approach is taken,

1. At first, the functionality is triggered by the client which means a function in `community-toolbox.js` is invoked.
2. The control then goes to the utility function defined in `utils/` (controller layer) which is invoked by `community-toolbox.js` file.
3. The utility function after doing necessary work invokes the helper functions for the database `/models/utils/` which are meant to do modifications in the database.
( Helper functions provide an outside layer for the database which can talk to the outside code regarding DB modifications, these are always invoked from the controller layer when the goal is to do changes in the DB. However, they can be called from anywhere for read-only operations ).
4. After the DB is updated (if it is meant to be), controller layer sends control back to the interface file (community-toolbox.js) which then sends the response received to the view layer (UI/),
5. The view layer displays the desired data to the client!![image description](/i/34862.png "approach-wp.png")

  
## First timer only issues

The first-timer-only issues are the set of issues that are designed specifically keeping new contributors in mind. They are made to welcome new contributors in our community with the least friction possible. This has always helped us to grow and keep welcoming new people to our community.
I'll be making first-timer-only issues as much as possible. It is always highly appreciated if you take some time to create first-timer-only (FTO) issues.

For new contributors, you can take up any FTO issue and start working on it. You can ask for help at any point in time. Once you get your first Pull Request (PR) approved and merged, you can go ahead and start working on `help-wanted`/`first-timers-only-candidate`/`stale issues` and/or you can even create FTO issues yourself, for others!

Template for FTO issues can be found [here](https://github.com/publiclab/plots2/blob/master/.github/first-timers-issue-template.md).

FTOs created by me: [https://github.com/publiclab/community-toolbox/issues?utf8=✓&q=is%3Aissue+author%3Arishabh570+label%3Afirst-timers-only+](https://github.com/publiclab/community-toolbox/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Arishabh570+label%3Afirst-timers-only+)

## How to get started

To get started with community toolbox, you can visit the [link](https://youtu.be/wkC2AgLiaTM) here.

## What next?

Some of the things that can be worked on as of now are,

- Making site UI responsive
- Debugging for night mode's uncertain behavior ([https://github.com/publiclab/community-toolbox/issues/233](https://github.com/publiclab/community-toolbox/issues/233))
- Fixing padding (CSS) issues with the list of contributors (avatar card's UI improvements)
- Increasing site load speed. As images are the major factor, lazy loading can be implemented
- Showing some visual clue to figure out the last deployed data (maybe commit hash can be used)
- Giving user the ability to refresh the application cache.

"Ambitious" issues will be the part of the development roadmap (can also be called as things we wish to implement and include in the website), they obviously need smaller milestones. These are the issues that we hope to accomplish in one year.

I am deeply grateful to PublicLab for giving me this opportunity and showing trust in me, everybody involved in the community is simply awesome!