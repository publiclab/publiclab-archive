---
title: Google Summer of Code 2019 Work Product 2019
tagnames: gsoc, soc, gsoc-2019, soc-2019, gsoc-2019-final-report
author: namangupta
path: /notes/namangupta/08-25-2019/google-summer-of-code-2019-work-product-2019.md
nid: 20664
uid: 522848

---

# Google Summer of Code 2019 Work Product 2019

by [namangupta](../profile/namangupta) August 25, 2019 19:24

August 25, 2019 19:24 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

```
![](http://i.imgur.com/MQdo60Z.png)

## GSoC 2019 Work Product - Naman Gupta

- **Student**: Naman Gupta
- **Github**: [Naman Gupta](https://github.com/namangupta01) 
- **Organisation**: [Public Lab](https://publiclab.org/)

## Aim

To implement WebSockets for various real-time communication in the project such as sending real-time browser notifications to Desktop and Mobile Devices for various users Action and to build a Graph Plotting Library.

### About Project
In this summer of code I was working on two projects. In major part of the summer i.e in last two phase I worked on WebSockets Implementation for real time interation using Action Cable. And in the first phase I worked on the setup of Graph Library from scratch. In the former project, I setup action cable for websocet connectivity in the project for real time communication which are currently being used to notify users via real time browser notification whenever a user comments or likes or being mentioned in the post. Most of the part in this projects goes to testing of action cable stream to action cable connection to various implementaion of action cable such as comments, like and mentioned. In the later project, I setup the data-grapher project from a single file structure to the standard node library file structure and divide the code into multiple files using oops design pattern. I have also added the feature of adding multiple graphs using multiple csv to the library. In the end, I also worked on some of bugs and issues outside my Google Summer of Code project i.e fixing issues related reply-by-mail and reply-by-tweet.

### WebSocket Integration for Real Time actions such as Notification

#### Action Cable Setup
Pull Request: https://github.com/publiclab/plots2/pull/5744,
https://github.com/publiclab/plots2/pull/6017,
https://github.com/publiclab/plots2/pull/6023

##### Tasks Performed:
- Setup of Config of Action Cable
- Setup of redis to work with Action Cable to store the connected Sockets Information.
- Implemented socket connection Authorization based on login type.
- Created a basic channel where Admin can broadcast messages from their socket rooms.

#### Add different Channels for creating different rooms.
Pull Requests: https://github.com/publiclab/plots2/pull/5972,
https://github.com/publiclab/plots2/pull/6003

##### Task Performed:
- Added User channel, User Notification channel
- Implemented Browser Notification for comment Addition for Computers.

#### Add Test For Action Cable Streams

Pull Request: https://github.com/publiclab/plots2/pull/5985

##### Task Performed: 
- Added `action-cable-testing` gem for testing Action Cable Streams
- Wrote tests for Action Cable Streams

#### Add Action Cable Connection Unit Tests

Pull request: https://github.com/publiclab/plots2/pull/6032

##### Task Perfomed:
- Added Action Cable Connection Unit Tests

#### Add Room Channel Tests
Pull Request: https://github.com/publiclab/plots2/pull/6034

##### Task Performed:
- Added test for subscription of user Room Channel
- Added test to check no broadcast when user is non admin
- Added test to check broadcast when user is admin.

#### Add User Channel Tests
Pull request: https://github.com/publiclab/plots2/pull/6036

##### Task Performed:
- Added test for no subscription of Websocket Connection when user is not logged-in.
- Added test for subscription of Websocket Connection when user is logged-in.

#### Add Tests for User Notification Channel

Pull Request: https://github.com/publiclab/plots2/pull/6038

##### Task Performed:
- Added test for no subscription of Websocket Connection to User Notification Channel when user is not logged-in.
- Added test for subscription of Websocket Connection to User Notification Channel when user is logged-in.

### Add UI Part for Browser Notification settings

Pull request: https://github.com/publiclab/plots2/pull/6105

##### Task Performed:
- Added UI Part for Browser Notification settings

#### Add Browser Notification for like
Pull Request: https://github.com/publiclab/plots2/pull/6153/

##### Task Performed:
- Added Browser Notification for like

#### Make Browser Notification Work on Mobile Phone
Pull Request: https://github.com/publiclab/plots2/pull/6158/

##### Task Performed: 
- Added Service worker for notification on mobile phones.
- Handled notification on click events in service worker.

#### Added Action cable integration tests 
Pull Request: https://github.com/publiclab/plots2/pull/6030

##### Task Performed:
- Action cable integration tests for browser notification while posting comments
- Added Fixtures
- Added test for no broadcast when there is no comments request
- Added test for no broadcast when user not logged-in
- Added test for zero broadcast when user not logged-in
- Added test for broadcast when user logged-in
- Added test for number of broadcasts when user logged-in
- Added test for broadcast to only users with particular tag.
- Added test for no broadcast to no enganged user.

#### Make Browser Notification Work on Mobile Phone
Pull Request: https://github.com/publiclab/plots2/pull/6158/

##### Task Performed: 
- Added Service worker for notification on mobile phones.
- Handled notification on click events in service worker.
```

```
<br>
```

```
------------
```

```
<br>
```

```
### Data Grapher Library

#### Project Setup
Pull Request: https://github.com/publiclab/simple-data-grapher/pull/5

##### Tasks Performed:
- Setup of project using node.

#### Add Jquery, Papaparse and chart.js
Pull Requests: https://github.com/publiclab/simple-data-grapher/pull/7

##### Task Performed:
- Added Jquery, Papaparse and chart.js dependencies

#### Implement Live Build and add browserify package for requiring different files

Pull Request: https://github.com/publiclab/simple-data-grapher/pull/10/

##### Task Performed:
- Added npm script to watch changes and build on changes and added browserify package

#### Add testing Framework

Pull Request: https://github.com/publiclab/simple-data-grapher/pull/13

##### Task Performed:
- Added Mocha, Chai and tests

#### Restructure whole project in oops based desgin pattern using es6 and add multiple graph feature.

Pull Request: https://github.com/publiclab/simple-data-grapher/pull/29, https://github.com/publiclab/simple-data-grapher/pull/36

##### Task Performed:
- Restructured whole code from one single file to various files using oops based design pattern.
- Implemented live requring of different files.
- Added Live building of src/ into dist/.
- Added Multiple Graph Feature from multiple columns.

#### Add project setup and run instruction

Pull Request: https://github.com/publiclab/simple-data-grapher/pull/62

##### Task Performed:
- Added project setup and run instructions

------------

## Additional Links

- [Blogs](https://publiclab.org/profile/namangupta)
- [Pull Requests](https://github.com/publiclab/plots2/pulls?q=is%3Aopen+is%3Apr+author%3Anamangupta01+label%3Asummer-of-code "Pull Requests")
- [Issues](https://github.com/publiclab/plots2/issues?q=is%3Aopen+is%3Aissue+author%3Anamangupta01+label%3Agsoc)
- [Commits](https://github.com/publiclab/plots2/commits?author=namangupta01 "Commits")

## Mentors

Special thanks to the Public Lab collaborators and following mentors.

- Jeffrey Warren
```