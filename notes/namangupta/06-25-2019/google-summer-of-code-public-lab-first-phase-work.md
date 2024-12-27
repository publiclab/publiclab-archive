---
title: "Google Summer of Code @ Public Lab : First Phase Work"

tagnames: 'gsoc, soc, gsoc-2019, soc-2019, gsoc-19'
author: namangupta
path: /notes/namangupta/06-25-2019/google-summer-of-code-public-lab-first-phase-work.md
nid: 19861
uid: 522848
cids: 24915
---

# Google Summer of Code @ Public Lab : First Phase Work

by [namangupta](/profile/namangupta) | June 25, 2019 19:14

June 25, 2019 19:14 | Tags: [gsoc](/tag/gsoc), [soc](/tag/soc), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [gsoc-19](/tag/gsoc-19)

----

In GSoC 2019, I am working on two projects one is Simple Data Grapher and another is Implementation of WebSocket in PublicLab. In simple data grapher which is a new library that we are building for making Graphs using CSV data, there was a lot to learn and implement. From implementing the standard structure of the scalable javascript application to making the code moduar using OOPs concept in Javascript using es6 to setting testing suite there was lot to learn and do.

So in https://github.com/publiclab/simple-data-grapher/pull/5 I did javascript project setup using npm with src/ directory for code, dist/ for compiled code and used dependency architecture structure which containes all the dependency of the project.

In https://github.com/publiclab/simple-data-grapher/pull/7 and https://github.com/publiclab/simple-data-grapher/pull/10 I have added dependencies such as PapaParse, Chart.js, Jquery and in the later I have added npm scripts to watch changes and added browserify package.

In https://github.com/publiclab/simple-data-grapher/pull/13 I have added Mocha, Chai testing suite and added a simple tests.

And https://github.com/publiclab/simple-data-grapher/pull/29, this is the very big pull request contains the lots of work from re-organizing and modularizing the code from one file to mvc structure and also making this library easy to use for the user by just calling one function. Also added Multiple Graph using multiple CSV feature. 
In this implementation, when user call's a `new SimpledataGrapher` function a new instance is created and user can use as many instance he wants by just using the above code and can make as many multiple graphs he wants. More details is in the pull request. Have a look ! :D

In https://github.com/publiclab/simple-data-grapher/pull/36, I added some patch related to multiple graph using multiple csv.

In my second project i.e Implementing webSockets in Public Lab using Action Cable I have opened https://github.com/publiclab/plots2/pull/5744, in which I did setup of  Action Cable Structure and made a basic room which is connected to all the users and the user who are loggedin with the role of admin can broadcast message in the browser console as of now.
While working on action cable, when I ran it on my local it was working fine but when I ran it on unstable webSocket was not connecting --it was showing some errors. I spent some time researching over it and found out that it was due to reverse-proxy i.e nginx that we are using on `unstable`. So after doing some experiments with the nginx configurations it finally worked and now admin can send message to the browser console of all the active sessions. Next part of this is to make rooms for node and give notification to all the users connected to or related to that node.
Next on simple data grapher I am going to work on writing tests and making the project more user friendly for new comers.