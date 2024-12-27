---
title: "Google Summer of Code 2019 Final Report"

tagnames: 'open-source, soc, gsoc-2019, gsoc-2019-final-report'
author: sidntrivedi012
path: /notes/sidntrivedi012/08-26-2019/google-summer-of-code-2019-final-report.md
nid: 20681
uid: 572743

---

![](https://publiclab.org/public/system/images/photos/000/034/890/original/gsoc.jpg)

# Google Summer of Code 2019 Final Report

by [sidntrivedi012](../../../profile/sidntrivedi012) | August 26, 2019 14:34

August 26, 2019 14:34 | Tags: [open-source](../tag/open-source), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

----

## Introduction

**Public Lab** has been doing a great amount of super inspiring work on improving the standard of science and environmental research in the community through various technologies and tools. The scale of products and softwares that they develop is a thing to reckon with. Also, the community vibe and the friendly nature of the members really helps a lot of beginners to start contributing to their projects.

I am really utterly humbled that I got the opportunity to work for Public Lab as a student through the **Google Summer of Code Program**. Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a programming project and this year I worked(and will surely continue to) with Public Lab on the [spectral-workbench.js](https://github.com/publiclab/spectral-workbench.js) Project.

## Spectral Workbench
![SWB](https://ksr-ugc.imgix.net/assets/011/408/630/57bd36aff6491f39860bcfb7d8c4edd4_original.jpg?ixlib=rb-2.0.0&crop=faces&w=1552&h=873&fit=crop&v=1463682252&auto=format&frame=1&q=92&s=b4785baab53ad216092dadabdc76a4f7)

The [SpectralWorkbench](http://spectralworkbench.org) is a really awesome software which helps anyone who wants to carry out environmental research or any scientific work conduct spectrometry with the least amount of cost and hardware. Through the Spectral Workbench, we can use the camera of our mobiles and laptops as a spectrometer. It works as a real spectrometer and shows all the RGB values as well as we can also calibrate values in it in order to match it to the already known values of certain substances.

## Work Completed

### Fixing the Demo of the Capture part

There was a very uncommon error popping up in the demo of the capture functionality of Spectral-workbench. I looked through the libraries like flot which maybe causing it but got no success. Finally, after a conversation with the mentors I figured out that the width was automatically being set to 0. So, I fixed it by hardocoding the width of the plot div.<br>
Here is the link to the Pull Request : [https://github.com/publiclab/spectral-workbench.js/pull/107](https://github.com/publiclab/spectral-workbench.js/pull/107)

### Adding Connect to Pi Button and its functioning

Since, the project needed to be connected to Raspberry Pi since many Hardware enthusiasts may prefer using PiCamera for their projects and research thus, we thought of implementing it in the project. The feature has been implemented but has 1-2 shortcomings which will surely be patched in this week. Hoping that it will be live as soon as possible.<br>The link to the Pull Request : [https://github.com/publiclab/spectral-workbench.js/pull/103](https://github.com/publiclab/spectral-workbench.js/pull/103)

### Adding Code of Conduct to the Project

Since, every project needs a Code of Conduct for maintaining the spirit of collaboration and cooperation. Thus, I added the Public Lab Code of Conduct in this Pull Request : [https://github.com/publiclab/spectral-workbench.js/pull/109](https://github.com/publiclab/spectral-workbench.js/pull/109)

### Making First-Timer-Issues

A great part of any project is its outreach and how easily can beginners start contributing to it. Thus, we here at Public Lab have a culture of making **First timer issues(FTOs)** which are really easy to solve and give the beginners a headstart to work on the project.<br>Here are the FTOs that I created :

- [https://github.com/publiclab/spectral-workbench.js/issues/113](https://github.com/publiclab/spectral-workbench.js/issues/113)
- [https://github.com/publiclab/spectral-workbench.js/issues/110](https://github.com/publiclab/spectral-workbench.js/issues/110)
- [https://github.com/publiclab/spectral-workbench.js/issues/111](https://github.com/publiclab/spectral-workbench.js/issues/111)

## Remaining Work

Completion of GSoC is just a date, open source continues forever. Thus, after GSoC , I will be implementing the following tasks which are remaining and finally get my project up and running.

- Porting the SWB to Safari Browser [IN PROGRESS] - The work on it is currently in progress.
- Refactoring of capture.js file. [TODO]
- Bundling the code. [TODO]
- Making a React app around the library. [TODO]

## What GSoC taught me in terms professionally and mentally

Google Summer of Code and also my mentors made me learn and analyse a lot of stuff which I earlier didn't know of. Working in open-source projects requires a lot of discipline and a skill to priortise the tasks one needs to perform with respect to the circumstances around him. One needs to have a certain amount of dedication,commitment and discipline towards the work. I had this habit of burning the last minute oil and not working consistently. But, the mentors gave me space and guided me about it.

I have now learnt the value of consistency and commitment in the working culture. Also, a gem that my mentors told me was that in open-source, communication is a very very important thing that one needs to take care of. In the early days, I missed to communicate well with them but after some time, things somewhat improved.

With this huge amount of learning, I will try to better myself as much as I can. Will try to inculcate the discpline and get the left work completed as soon as possible :)

## Gratitude

Finally, I would firstly like to thank **Public Lab** and **Google** for giving me such an opportunity to contribute to such a sane cause. I will surely carry it forward and tell more of my friends and college folks about the benefits of contributing to open-source softwares. <br><br>Next, I would like to thank all of my mentors [Jeffrey Warren](https://github.com/jywarren) , [Mayank Pathela](https://github.com/starkblaze01), [Dhiraj Sharma](https://github.com/Dhiraj240) and [Harshith Pabbati](https://github.com/harshithpabbati) for being such an awesome guide and understanding every sitation. Everything I learnt, I learnt from them. <br><br>Last but not the least, I would like to thank the almighty for everything.
