---
title: Expanding Public Lab's community stats system
tagnames: software, soc, soc-2018, rgsoc-2018, outreachy, outreachy-2018, outreachy-2018-proposals, response:17359, first-time-poster
author: romrod
path: /notes/romrod/11-06-2018/expanding-public-lab-s-community-stats-system.md
nid: 17476
uid: 558157

---

# Expanding Public Lab's community stats system

by [romrod](../profile/romrod) November 06, 2018 04:36

November 06, 2018 04:36 | Tags: [software](../tag/software), [soc](../tag/soc), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018), [outreachy-2018-proposals](../tag/outreachy-2018-proposals), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster)

----

(This template is for students applying to code outreach programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=17360&tags=soc,outreachy,outreachy-2018,outreachy-2018-proposals](https://publiclab.org/post?n=17360&tags=soc,outreachy,outreachy-2018,outreachy-2018-proposals) You can delete this line once you've started filling it out.)

---------

## About me

**Affiliation**: Outreachy

**Location:** US

## Project description

### Expansion of Public Lab's community stats system for improved accessibility and information density.

### Problem

The need of a more detailed statistical information and its accessibility for different use cases.

### Timeline/milestones

**Back-end projects:**  
**Week 1:** downloadable data from stats pages: #963 (break-me-up issue)******  
Week 2:** statistics on questions **answered** versus **asked** (from [https://publiclab.org/questions/](https://publiclab.org/questions/))******  
Week 3:** caching of data weekly (noting this in interface so people know) to reduce loadconsolidation/standardization of "range pages" like [https://publiclab.org/stats/range/10-05-2015/10-05-2016/](https://publiclab.org/stats/range/10-05-2015/10-05-2016/) with main stats page at [https://publiclab.org/stats?time=September%2026,%202017%2022:43](https://publiclab.org/stats?time=September%2026,%202017%2022:43)**********  
Week 4:** tags most used in this period (linking into per-tag stats, below)**************  
Week 5:** Add display of Total Contributors "for all time" as default for main /stats - #3499
  

**Stats per tag:****  
Week 6:** subscribers for each tag: [https://publiclab.org/stats/subscriptions](https://publiclab.org/stats/subscriptions)**  
Week 7:** closer mirroring between stats pages and tag pages  
**Week 8:** stats as above, but per-tag?**Week 9:** script to go back through posts and tag first-timer posts with `first-time-poster` tag, retroactively so they show up at [https://publiclab.org/tag/first-time-poster](https://publiclab.org/tag/first-time-poster), to improve stats on first-time posting  

**Interface design projects:**  
**Week 10:** small "bar graph" icons around site which lead to appropriate pages in the stats system (using [https://fontawesome.com/v4.7.0/](https://fontawesome.com/v4.7.0/))**  
Week 11:** date range selector for stats ranges (calendar or draggable date ranges like [https://github.com/publiclab/plots2/graphs/contributors?from=2013-11-07&to=2016-11-18&type=c ](https://github.com/publiclab/plots2/graphs/contributors?from=2013-11-07&to=2016-11-18&type=c)**  
Week 12:** ability to click bar graphs to open that actual collection of items in a view such as [https://publiclab.org/tag/mobius](https://publiclab.org/tag/mobius)

**Stretch goals:**  
Since some of the tasks outlined in the timeline might take less than a week to complete, it might be feasible to accomplish the following stretch goals:
  
  
**Extra 1:** make statistics system compatible with GrimoireLab using [https://github.com/chaoss/grtimoirelab-perceval](https://github.com/chaoss/grtimoirelab-perceval)  

## 

**Extra 2:** retroactively apply the first-time-poster tag ([https://publiclab.org/tag/first-time-poster](https://publiclab.org/tag/first-time-poster)) to previous posts so that we can retroactively graph newcomer posting rate over time

### Needs

Mentoring from the main collaborators to point me in the right direction whenever needed. In terms of documentation, I believe most can be found online,but it would be good to have the support to acquire certain materials to produce better solutions for the project. The availability of a server to test things out would be useful, too, yet not strictly necessary.

### First-time contribution

My first merged pull request for Public Lab: [https://github.com/publiclab/plots2/pull/3882](https://github.com/publiclab/plots2/pull/3882) solved Issue #3451: [https://github.com/publiclab/plots2/issues/3451](https://github.com/publiclab/plots2/issues/3451).

---------

### Experience

My experience is in JavaScript, Python, and a little bit of Ruby on Rails and C. I know HTML and CSS and I am comfortable learning frameworks, libraries and tools whenever necessary. I am mostly self-taught, and have participated in a few structured courses to speed up my learning. My [GitHub Profile](https://github.com/romanrodriguez) contains several examples of said learning.

---------

### Teamwork

### 

I have written documentation and blog posts for open source projects collaborating with their leads. My favorite ones have been the Beaker Browser, and the CLI tool tldr. I mentored students at Udacity after being a student myself. I like to hang around the FreeCodeCamp, [DEV.to](http://DEV.to), and Codenewbies communities.

---------

### Passion

I'd like to help solve the very real problems that are affecting so many people around the world. I am passionate about purpose-driven social networks that bring the best out of us instead of the worst. Public Lab provides such a community and the opportunity to shape an important area in a possitive way.

---------

### Audience

A better understanding of the project's metrics brings more resources and popularity for Public Lab to keep on growing and providing access to tools for scientists, environmentalists, or anyone trying to get the right things done under constraining circumstances.

---------