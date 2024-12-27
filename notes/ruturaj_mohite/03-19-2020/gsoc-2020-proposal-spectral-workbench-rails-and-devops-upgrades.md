---
title: "GSoC 2020 proposal: Spectral Workbench - Rails and DevOps upgrades"

tagnames: 'software, soc, response:13975, first-time-poster, lat:10, lon:70, zoom:5, soc-2020, soc-2020-proposals'
author: ruturaj_mohite
path: /notes/ruturaj_mohite/03-19-2020/gsoc-2020-proposal-spectral-workbench-rails-and-devops-upgrades.md
nid: 23184
uid: 658211

---

![](https://publiclab.org/public/system/images/photos/000/038/640/original/gsoc.png)

# GSoC 2020 proposal: Spectral Workbench - Rails and DevOps upgrades

by [ruturaj_mohite](../../../profile/ruturaj_mohite) | March 19, 2020 10:06

March 19, 2020 10:06 | Tags: [software](../tag/software), [soc](../tag/soc), [response:13975](../tag/response:13975), [first-time-poster](../tag/first-time-poster), [lat:10](../tag/lat:10), [lon:70](../tag/lon:70), [zoom:5](../tag/zoom:5), [soc-2020](../tag/soc-2020), [soc-2020-proposals](../tag/soc-2020-proposals)

----

## About me

Name: Ruturaj Mohite

Affiliation: International Institute of Information Technology, Bangalore

Github: @gr455

Email(PL): [ruturaj.mohite@iiitb.org](mailto:ruturaj.mohite@iiitb.org)

Email(Google): [mohite.ruturaj15@gmail.com](mailto:mohite.ruturaj15@gmail.com)

Linkedin: [Ruturaj Mohite](https://www.linkedin.com/in/ruturaj-mohite-bba864190/)

Location: Bangalore, India

Timezone: Indian Standard Time (UTC +5:30)

## Background

I am an Electronics and Communication Engineering freshman at International Institute of Information Technology, Bangalore. I am a part of the Software Development Group of my university called Zense. I have worked on projects in Python, C and Ruby on Rails and contributed to a few open source organizations including PublicLab, because of which I have built a great interest and fascination towards open source development.

## Project description

### Abstract/summary (<20 words):

**Spectral Workbench - Rails and DevOps upgrades**

The aim of the project is to upgrade the Rails, migrate away from deprecated asset pipelines and expand spectral-workbench's test coverage.

### Problem

1. Upgrade from current Rails 3.2 to Rails 6.0
2. Improve test coverage
3. Migrate asset management from Bower+Sprockets to Yarn+Webpack
4. Remove deadweight

### Implementation

1. **Upgrade from current Rails 3.2 to Rails 6.0**

The Rails upgrade will take place in the following steps:

1. Rails 3.2 to Rails 4.0
2. Rails 4.0 to Rails 4.2
3. Rails 4.2 to Rails 5.0
4. Rails 5.0 to Rails 5.1
5. Rails 5.1 to Rails 5.2
6. Rails 5.2 to Rails 6.0

In this process, all the outdated callbacks will also be removed with each step.

![](https://lh5.googleusercontent.com/VnpPeC-fdgMc6oWuTPCC8YIUUnF6NpSoifO0mlod8xHPKVVF3eIcQqxrSs2_YXZt-T_rfZyWFK1cBd5dtsEdlzyOqTN1Qd_tPNufhT8rRMaigOsbnS2IYGcCMsH1_WgbrMSft2mQ)

1. **Improve test coverage**

The spectral-workbench test coverage stands at about 74% currently, with this goal, I aim to bring it up to about 85% which will also aid in the Rails upgrade to track the changes made between each upgrade step and make sure the application has no errors between the steps. Along with functional and unit tests, I also intend on writing system tests for spectral-workbench using `selenium web-driver` and `capybara` once we hit Rails 5.1 in the upgrade, to test the whole workflow as it appears to the user.
The system tests' implementation will be similar to what is done in Mapknitter.
Selenium web-driver will be configured in the following way:

![image description](/i/38633.png "Screenshot_(83).png")

And a sample test will look like:

![image description](/i/38634.png "Screenshot_(86).png")

So far, I have made some progress regarding this:

[https://github.com/publiclab/spectral-workbench/pull/486](https://github.com/publiclab/spectral-workbench/pull/486)

[https://github.com/publiclab/spectral-workbench/pull/490](https://github.com/publiclab/spectral-workbench/pull/490)  

And created an issue against a hurdle I faced during writing tests:

[https://github.com/publiclab/spectral-workbench/issues/488](https://github.com/publiclab/spectral-workbench/issues/488)

1. **Migrate asset management from Bower+Sprockets to Yarn+Webpack**

Due to the deprecation of Bower, the project will be migrated to Yarn for the management of its Javascript dependencies.
I plan to carry this out using `bower-away`.
This will do away with modules in `public/lib` and will instead store them in `node_modules/@bower_components` and create a symlink to references of `public/lib` to reference `node_modules/@bower_components` in the postinstall script.

![image description](/i/38635.png "Screenshot_(88).png")

Further the asset pipeline will be substituted with Webpack once we hit Rails 5.1 in the upgrade.

1. **Remove deadweight**

This is a little tricky as it would require a lot of manual work to find dead code. The process is to find dead code, remove it and run tests to make sure the code removal didn't break anything. This is where the expanded test coverage will help a lot.

By the end of the summer, we should have:

- Rails 6
- Test coverage of at least 85% + System tests
- Better CI
- Asset management switched to Yarn+Webpack
- All unwanted files and dead code removed

### Timeline/milestones

![image description](/i/38706.png "Timeline.png")

### Needs

I would require frequent reviews from the community members on my work and guidance from my mentor in case I get stuck somewhere.

### First-time contribution

Contributing to PublicLab has been a very learning experience. In the past months of my contribution towards PublicLab, I have contributed to Mapknitter and Spectral-Workbench by solving bugs, writing tests, adding feature enhancements and reviewing others' pull requests. I have developed a deeper understanding of the Rails framework and DevOps. I have also learnt the process of testing a large Rails application writing a few tests for Spectral-Workbench myself.

I chose Spectral-Workbench as my GSoC project because I am very fascinated by Ruby on Rails and its capabilities in developing web applications. I also have a very good understanding of the code base of Spectral-Workbench. With this project, I aim to develop my skills in backend development, testing and DevOps; and gain experience of working on a big project used by thousands of people worldwide.

These are some of my contributions towards PublicLab:

- Pull Requests : [https://github.com/publiclab/spectral-workbench/pulls/gr455](https://github.com/publiclab/spectral-workbench/pulls/gr455)
- Issues : [https://github.com/publiclab/spectral-workbench/issues/created\_by/gr455](https://github.com/publiclab/spectral-workbench/issues/created_by/gr455)
- Comments : [https://github.com/publiclab/spectral-workbench/issues?q=commenter%3Agr455](https://github.com/publiclab/spectral-workbench/issues?q=commenter%3Agr455)

---------

### Experience

I have worked on various projects in Python, C and Ruby on Rails which can be found on my Github. Some of these are:

_**[League](https://github.com/gr455/league)**_

An application to manage players and teams playing in a league built using Ruby on Rails

**_[Gesture-mouse](https://github.com/gr455/gesture-mouse)_**

A Python program built using OpenCV HAAR Cascade Classification to detect user's hand to control the mouse cursor using gestures

**_[MegaByte-CTF](https://github.com/RishikeshChapekar/MegaByte-CTF "https://github.com/RishikeshChapekar/MegaByte-CTF")_**

A Capture The Flag contest that I made with my friends from high school which contains challenging questions related to cyber security.

In the past, I have also contributed to open source organizations other than PublicLab like **[coala](https://github.com/coala/coala/) and [Zense](https://github.com/zense).**

---------

### Teamwork

Personally, I am a great fan of teamwork and collaborative efforts. I have had really good experiences working on team projects before. I am a part of [Zense](https://zense.co.in/), the software development group of my university and am currently working on projects with a team. In the past, I have participated in many hackathons with a team and have also completed team projects such as _[MegaByte-CTF](https://github.com/RishikeshChapekar/MegaByte-CTF)._
I not only seek collaboration from a team but also to learn from the other team members.

---------

### Passion

My motivation behind working for this project is to get more exposure in open source development. I have been a part of PublicLab for over 3 months and have a great appreciation for the open source tools PL provides. I have also learnt a lot on my way here and hope to learn a lot more through this project.

### Audience

This project will not only be helpful to the users of spectral-workbench but also introduces prospects of new features to be added in the future.

### Commitment

I completely understand that this project requires a full time commitment and am ready to invest 6 to 7 hours (or more if required) daily for completion of this project.