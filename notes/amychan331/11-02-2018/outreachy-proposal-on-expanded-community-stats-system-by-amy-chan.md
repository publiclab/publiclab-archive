---
title: Outreachy proposal on expanded community stats system by Amy Chan
tagnames: software, soc, soc-2018, rgsoc-2018, outreachy, outreachy-2018, outreachy-2018-proposals, response:17359, first-time-poster
author: amychan331
path: /notes/amychan331/11-02-2018/outreachy-proposal-on-expanded-community-stats-system-by-amy-chan.md
nid: 17463
uid: 556795

---

# Outreachy proposal on expanded community stats system by Amy Chan

by [amychan331](../profile/amychan331) November 02, 2018 05:49

November 02, 2018 05:49 | Tags: [software](../tag/software), [soc](../tag/soc), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018), [outreachy-2018-proposals](../tag/outreachy-2018-proposals), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster)

\## About me

  
\*\*Affiliation\*\*: Self-taught
programmer. Graduated as architecture major from Cal Poly SLO. Took a
couple of community college classes & a lot of
Meetup/workshop/hackahon.

  
\*\*Location:\*\*: San Francisco, CA, USA

  
\*\*Github:\*\*: amychan331

  
\*\*Twitter:\*\*: craftplustech

  
\## Project description & Summary

  
Building on the existing community
metrics system at [http://publiclab.org/stats](http://publiclab.org/stats),
improve the current interface and performance, which has gotten messy
from the various features added in over the years. 

  
\### Problem

  
As platform that focus on democratizing
science, Public Lab deals with a lot of data and statistics. This
project help make those information more accessible by adding and
improving data visualization features to organize, filter, and
categorize them.

  
\### Timeline/milestones

  
12/4/2018 - Familiarize myself with the
codebase, particularly those related to the issue of "Back-end
sub-projects to collect this data". Start working on how to
provide downloadable JSON and/or CSV data from various stats pages.

12/11/2018 - Provide new statistics on
the # of questions answered versus questions asked

12/18/2018 - Creating weekly caching of
data to address the performance issues. Create interface of the
caching so people know when reports were generated.

12/25/2018 - Consolidation of existing
"range pages" with the main stats page

01/01/2019 - Create display for tags
most used in a given period default display of contributors "for
all time" on the stats page

01/08/2019 - Review codes done so far
for any problem and clean up

01/15/2019 - Create a new stats page
section, "Statistics per tag". Inside, start creating
display of stats as above task, but on a per-tag basis, via standard
model functions with unit tests

01/22/2019 - For "Statistics per
tag", create display of a list of subscribers for each tag and a
closer mirroring between stats pages and tag pages

01/29/2019 - Review "Statistics
per tag" for any problem and clean up

02/05/2019 - For stats menu, create
small "bar graph" icons around site which lead to
appropriate pages in the stats system and ensure that there is
ability to click bar graphs to open that actual collection of items
in a view

02/12/2019 - For stats menu, create a
date range selector for stats ranges

02/19/2019 - Review stats menu for any
problem and clean up

02/26/2019 - Last week clean up and bug
fix. Consider if there are time to work on stretch goal.

  
\### Needs

  
Mentors to review my pull request. I
would probably need sample data since the project is about expanding
the community stats systems. 

  
\### First-time contribution

  
My first-time contribution is to debug
and improve the code behind the preview features of editors.
Currently, it is awaiting for review at:
[https://github.com/publiclab/plots2/pull/3720](https://github.com/publiclab/plots2/pull/3720)

  
\*\*\*\*

  
\### Experience

  
I started learning to program because I
was creating an online design portfolio and wanted to do more than
what the WordPress blog provided. As a very hands-on person, I
started learning basic HTML, CSS, JavaScript, and PHP. Later on, I
learn about the free community college classes on programming, so I
started taking them at night while working in a print shop during the
day. I got to further improve my existing skills and also got
interested in Python. Eventually, I got an internship with Stanford
University as web development intern for managing their Drupal site.

  
In my spare time, I started helping out
with Sponsorlane, a platform that help nonprofit connect with
sponsors. It uses Keystone.js, a Node-based CMS I never worked with
before. In that framework, I help migrate the admin dashboard with a
stats front page to a more responsive Bootstrap-based theme. I worked
a lot with JavaScript and data visualization tools like Chart.js and
D3\. Though the repo is private, I can provide images if requested.

  
Earlier this year, I also got to work
with Astrokit, a Django-based open-source webtool project sponsored
by NASA to help amateur astronomer. Though I have never worked with
Django and the project only have 2 months left, I took the project
on. One of my favorite experience was when I was building a library
to convert data into either CSV or ALCDEF file format so users can
download them. My work can be found here:
[https://github.com/typpo/astrokit/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Aamychan331](https://github.com/typpo/astrokit/pulls?utf8=✓&q=is%3Apr+author%3Aamychan331)+

  
I am still new to Ruby on Rails, but as
a self-taught programmer, I excel in learning language on the job,
and I have a good foundation in JavaScript and working with existing
architecture.

  
\*\*\*\*

  
\### Teamwork

I like to participate in tech events
like workshops and hackathons, where I am often in teams of 2-5\. 

I am also a volunteer for Techtonica, a
non-profit that provides technology training and job placement for
Bay Area women with low income. In there, I help write curriculum in
their open-source repos with other fellow volunteers during their
hack nights. My work can be found here:
[https://github.com/Techtonica/curriculum/pulls?utf8=%E2%9C%93&q=+is%3Apr+author%3Aamychan331](https://github.com/Techtonica/curriculum/pulls?utf8=✓&q=+is%3Apr+author%3Aamychan331)+

  
\*\*\*\*

  
\### Passion

  
I am definitely interested in both open
science and environmental justice. Copy from what I had previously
stated in my Github introduction, I had immigrated from Hong Kong
when I was young. Having lived in 2 metropolitan and coming from a
low-income family, I have always been interested in the environment -
both in term of natural and artificial materials - and their combined
affect on local, vulnerable communities. As a result, even in high
school, I took architecture classes and AP Environmental Science.
From there on, I studied architecture in college, interned in a
community design firm, and then became a LEED Green Associate right
after I graduate.

  
  
\### Audience

  
People who are interested in improve
the environment in their community no matter what their financial or
education background may be. One of the many reason I am interested
in this project is because creating better visual interactions with
stats and data makes science more accessible to community that have
less access to education.