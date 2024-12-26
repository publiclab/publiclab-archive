---
title: "GSoC 2021 experience with Public Lab"\ntagnames: 'spectral-workbench, soc, soc-2021-final'
author: waridrox
path: /notes/waridrox/08-28-2021/gsoc-2021-experience-with-public-lab.md
nid: 27630
uid: 745996

---

![](https://publiclab.org/public/system/images/photos/000/044/748/original/1*tsw1ypPVNddLK3yF7G33JQ.png)

# GSoC 2021 experience with Public Lab

by [waridrox](../profile/waridrox) | August 28, 2021 16:47

August 28, 2021 16:47 | Tags: [spectral-workbench](../tag/spectral-workbench), [soc](../tag/soc), [soc-2021-final](../tag/soc-2021-final)

----

Some context about the project  
**Public Lab** has a renowned web app called **spectral workbench** that is responsible for capturing, analysing and saving the data to an open sourced database of spectrums.

My project revolved around creating a new capture interface utilising the spectral workbench.js NPM library - _[https://www.npmjs.com/package/spectral-workbench](https://www.npmjs.com/package/spectral-workbench)_.

The idea was to use this library in the rails app so that there is less maintenance overhead required.

**My original proposal** - [https://publiclab.org/notes/waridrox/04-03-2021/gsoc-2021-proposal-spectral-workbench-js-js-rails-integration](https://publiclab.org/notes/waridrox/04-03-2021/gsoc-2021-proposal-spectral-workbench-js-js-rails-integration)

**GSoC final report** - [https://medium.com/@waridrox/gsoc-2021-at-public-lab-final-report-7347b7edf466](https://medium.com/@waridrox/gsoc-2021-at-public-lab-final-report-7347b7edf466)

## Project accomplishments

Ironically, even though I'd made the proposal for the work that I'll be doing for the summer, there was still some confusion regarding the project 😅 which was then cleared by my mentors.

Once that was sorted, I was good to go...

![image description](/i/44755.gif "200.gif")

- Soon after, during setting up the project locally, I realised that the dependencies were outdated, and were in dire need of an upgrade. So I updated all the dependencies but the CI tests failed since the dependency bump proved to be too major for the app and could not build properly.

![image description](/i/44749.gif "unnamed.gif")

- Later I realised the benefits of yarn over npm especially if the dependencies are being installed from the frozen lock file 😅. After that I tried to update the dependencies one at a time until I was able to pass all the tests 🚀 - _[https://github.com/publiclab/spectral-workbench/pull/671](https://github.com/publiclab/spectral-workbench/pull/671)_

Then came the time for integrating the js library to the new capture interface.

This is when the project ran into a major blocker since the live capture graph was stopping on safari browsers. Since we were aiming for cross browser compatibility, this was crucial. Later upon further investigation, it was discovered that the flot graph was stopping after a certain height on the webpage -\_\_https://github.com/publiclab/spectral-workbench/issues/665

![image description](/i/44756.gif "penguins-of-madagascar-wut.gif")

- This is currently solved with by-passing the conventional behaviour of bootstrap stepper and instead use an additional JS file to show and hide the elements. Once we resolve this issue, we should be fine without the additional JS file - _[https://github.com/publiclab/spectral-workbench/pull/672](https://github.com/publiclab/spectral-workbench/pull/672)_
- After this, it was time to make the new interface responsive. Since we were already utilising the spectral workbench library, we utilised the css too, following the familiar DRY principle - _[https://github.com/publiclab/spectral-workbench/pull/672](https://github.com/publiclab/spectral-workbench/pull/672)_
- Apart from the proposal, I worked on the camera switching feature by giving users the option to choose their preferred device from a dropdown. It was fun to experiment with this, with the Iriun camera ([https://iriun.com](https://iriun.com)) which converts a smartphone camera into a native camera which could then be detected as a video input - _[https://github.com/publiclab/spectral-workbench.js/pull/247](https://github.com/publiclab/spectral-workbench.js/pull/247)_
- Finally it was time to implement some tests 🧪 after making the page accessible 👀([https://github.com/publiclab/spectral-workbench/pull/701](https://github.com/publiclab/spectral-workbench/pull/701)). I learned about rack sessions and the faker gem which when combined, enabled me to generate session ids for users with some fake data like their names and email ids, ultimately logging in the user into the app. This then opened doors to test things like uploading, capturing, saving and deleting spectrums which required the user to be logged in to the app - _[https://github.com/publiclab/spectral-workbench/pull/702](https://github.com/publiclab/spectral-workbench/pull/702)_

  
## Final Result

At the end, the project proved to be a success and is now live at [http://spectralworkbench.org/capture/v2](http://spectralworkbench.org/capture/v2) 🎉

![image description](/i/44751.gif "unnamed-3.gif")

> Here's the preview -

<iframe width="560" height="315" src="https://www.youtube.com/embed/ff6DykzVjhg" frameborder="0" allowfullscreen=""></iframe>


## What's left

The faking of the user media was not able to work on system tests - _https://github.com/publiclab/spectral-workbench/issues/710_.
After this, we can have even more comprehensive tests.


## Experience with PL

All in all it was really a charming experience to learn and grow with Public Lab especially through the weekly calls with mentors on discussion of the ongoing progress of the projects which always started with an icebreaker question to liven up the mood .

I hope the users will use the new interface thereby providing feedback so that further enhancements can be made accordingly.

I would like to thank all my mentors ❤️ especially @warren for providing guidance and support whenever I required. Looking forward to continue contributing to Public Lab 🎈💯