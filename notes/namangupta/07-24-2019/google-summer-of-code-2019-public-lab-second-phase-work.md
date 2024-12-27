---
title: "Google Summer of Code 2019 @ Public Lab: Second Phase Work"

tagnames: 'gsoc, gsoc-2019'
author: namangupta
path: /notes/namangupta/07-24-2019/google-summer-of-code-2019-public-lab-second-phase-work.md
nid: 20273
uid: 522848

---

![](https://publiclab.org/public/system/images/photos/000/034/088/original/download.png)

# Google Summer of Code 2019 @ Public Lab: Second Phase Work

by [namangupta](../../../profile/namangupta) | July 24, 2019 20:40

July 24, 2019 20:40 | Tags: [gsoc](../tag/gsoc), [gsoc-2019](../tag/gsoc-2019)

----

In GSoC 2019 second phase, I further continued my work and focused more on the notification project after doing work into the Simple Data Grapher project for the most of the time of the first phase. And completed the Browser Notification API integration with the publiclab system. Browser Notification API is integrated with the comment posting which means whenever a user post comments on any node, those people who have been mentioned or liked or have subscibed to the tag that the node is having will receive the Browser Notification. And only those user will get notification who want to get it by using user\_tags but for now we enabled it for all the user by doing notifications:all.

After setup of Action Cable [https://github.com/publiclab/plots2/pull/5744](https://github.com/publiclab/plots2/pull/5744) in GSoC 2019 First Phase Work, we were all set to build Real-Time Notifications by using Browser Notification API.

So in Second Phase, in [https://github.com/publiclab/plots2/pull/5972](https://github.com/publiclab/plots2/pull/5972 "https://github.com/publiclab/plots2/pull/5972") I added UserRoom, UserNotificationRoom, UserRoomm and Added Browser Notification for Comments.

All these real-time transfer of data works by using Action Cable Streams, so it is very important to use Test Action Cable Stream so that it is ensured that it is working fine. So in [https://github.com/publiclab/plots2/pull/5985](https://github.com/publiclab/plots2/pull/5985 "https://github.com/publiclab/plots2/pull/5985"), I wrote tests for ActionCable Streams.

In [https://github.com/publiclab/plots2/pull/6003](https://github.com/publiclab/plots2/pull/6003), Fixed some bug related to permission prompt. In the initial implementation, we were showing notification permission prompt to all the user whether the user is logged in or not so in [https://github.com/publiclab/plots2/pull/6017](https://github.com/publiclab/plots2/pull/6017 "https://github.com/publiclab/plots2/pull/6017") we changed it to appear the prompt to the users only when they are logged in and don't appear when the user is not logged in.

In [https://github.com/publiclab/plots2/pull/6023](https://github.com/publiclab/plots2/pull/6023 "https://github.com/publiclab/plots2/pull/6023"), Fixed some bug related to the users to which the system was sending notifications.

As I discussed above, It is very important to write tests in a big and complex system such as a public lab so that it can be ensured that everything is working fine. So in [https://github.com/publiclab/plots2/pull/6032](https://github.com/publiclab/plots2/pull/6032 "https://github.com/publiclab/plots2/pull/6032"), I added action cable connection unit tests which check for the Action Cable Connection and also test the identification of the user when a user is logged in.

In [https://github.com/publiclab/plots2/pull/6034](https://github.com/publiclab/plots2/pull/6034 "https://github.com/publiclab/plots2/pull/6034"), I added Room Channel Test, which tests the functionality that the Room Channel provides.

Similarly, in [https://github.com/publiclab/plots2/pull/6036](https://github.com/publiclab/plots2/pull/6036), [https://github.com/publiclab/plots2/pull/6038](https://github.com/publiclab/plots2/pull/6038 "https://github.com/publiclab/plots2/pull/6038"), Wrote tests for UserChannel and UserNotificationChannel respectively.

Biggest and one of the important tests were written in [https://github.com/publiclab/plots2/pull/6030](https://github.com/publiclab/plots2/pull/6030), this contains the integration tests for Comment Posting Flow.

The Browser Notification is currently not working in Browser in Android Phone. This has something related to the fact that normal notification doesn't workings unless it is originated by users gestures. So to solve this problem I am working and researching the way using which we can show notification on Mobile Device. One of the ways I found is Using by using Background ServiceWorker but I still have to research more about it.

Additional to these, solved some bugs outside this project which is [https://github.com/publiclab/plots2/pull/6064](https://github.com/publiclab/plots2/pull/6064), [https://github.com/publiclab/plots2/pull/5897](https://github.com/publiclab/plots2/pull/5897 "https://github.com/publiclab/plots2/pull/5897"). First is related to reply-by-tweet and second is related to reply-by-email.

In third phase, I am going to work majorly on making notification working on Mobile Devices and making the broadcasting of Notifications to the browser using Background job using Background Queuing System and more.

Thanks!!