---
title: "RGSoC: v2 API development"

tagnames: 'software, gsoc, soc, response:13975, gsoc-2018, soc-2018, rgsoc-2018, soc-2018-proposals, soc-2018-api, with:stefannibrasil, first-time-poster'
author: milaaraujo
path: /notes/milaaraujo/02-23-2018/rgsoc-v2-api-development.md
nid: 15805
uid: 525897

cids: 18586,18587,18589,18646,18651,18861,18862,18863,19140,19404,19431

---

# RGSoC: v2 API development

by [milaaraujo](../../../profile/milaaraujo) | February 23, 2018 05:34

February 23, 2018 05:34 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [soc-2018-api](../tag/soc-2018-api), [with:stefannibrasil](../tag/with:stefannibrasil), [first-time-poster](../tag/first-time-poster)

----

## About us

**Names:** Camila Araújo and Stefanni Brasil

**Location:** Vancouver, Canada

We are the Rails Girls Summer of Code team Brazilian housewives coding: [https://teams.railsgirlssummerofcode.org/teams/740](https://teams.railsgirlssummerofcode.org/teams/740)

**Github:** [https://github.com/stefannibrasil](https://github.com/stefannibrasil) and [https://github.com/milaaraujo](https://github.com/milaaraujo)

We are Brazilians and we are housewives who love to coding.

---------

## Project description

### Abstract/summary (<20 words):

Work on the release of the v2 of Public Lab API to support the new Swagger interface, covered with tests and documentation. Also add the documentation to the new token system.

### Problem

The Public Lab API is extensive and there are some endpoints who need to be updated to the Swagger interface. Also, it does not have a full documentation and tests coverage. We aim to work on that to prevent bugs in the future and to make it easier to retrieve data to be used on the stats page.

### Timeline/milestones

We are planning on doing weekly small releases, following the modularity methodology. All steps below includes writing tests and docs while we work on the week task:

| Week | Days | Tasks |
|------|------|-------|
| 1-2  | 02/July-13/July | Study Grape Entities and Swagger code and docs |
| 3-4  | 16/July-27/July | Refactor SearchService and Search endpoints |
| 5 | 30/July-03/Aug | Import Author endpoint to Swagger interface |
| 6 | 06/Aug-10/Aug | Import Tagged notes to Swagger interface |
| 7 | 13/Aug-17/Aug | Test moved endpoints on Swagger interface |
| 8 | 20/Aug-24/Aug | Refactor SearchService and Search endpoints to improve/standardize the web search function |
| 9 | 27/Aug-31/Aug | Ensure multiple format access: JSON, RSS, etc., for legacy endpoints that have these formats |
| 10 | 03/Sep-07/Sep | Write unit tests for the back-end to various APIs by writing Services like TypeAheadService |
| 11 | 10/Sep-14/Sep | Write unit tests for the back-end to various APIs by writing Services like SearchService |
| 12 | 17/Sep-21/Sep | Ensure that v2 of Public Lab is fully working and solve possible bugs |
| 13 | 24/Sep-28/Sep | Finish our contribution by reviewing the docs and help planning the next steps for future contributors |

### Needs

Documentation, literature, sample data, mentors and coaches.

---------

## First-time contribution

We have already done some contributions to Public Lab:

https://github.com/publiclab/plots2/commits?author=milaaraujo  

https://github.com/publiclab/plots2/commits?author=stefannibrasil  

And we intend to work on more complicated Issues together before July to get more familiar with Public Lab docs and code guides.

---------

## Experience

We have some experience using Python, Java, C and academic research.

**Camila:** I finished my Computer Science Master's degree last year. I've been working with academic research since my first year as a undergrad student. I have learned to program using C. After that, in most of the courses I attended at university I used C or C++. Also at the beginning of my graduation I worked for a short period as a PHP Web Developer. Then I was in different research projects and for each of them I had to learn a different language/technology. For example Python, Django, Perl, Matlab and R. I'm a beginner in the open-source world, so my first contribution was to the Public Lab project. Here in Canada I have signed up to be a mentor on the Ladies Learning Code program.

**Stefanni:** Me, Stefanni, have experience with Ruby on Rails, Docker, Kubernetes, Agile and Continuous Integration, Pair Programming and Code Review. I have a blog and there I share my learning path. On my Github, I also started a Ruby Farm project and a tutorial following Agile Web Development with Rails - 4th edition. I also did a Game using PyGame and Arduino for children to learn basic mathematics concepts.

I also was a Coach on Rails Girls Sao Paulo 2017\. I talked on RubyConf Sao Paulo 2017 about being a beginner in code and giving tips for those who want to change their careers to tech.

---------

## Teamwork

**Camila:** As a researcher I worked on different projects, with different teams and also on my own, with the guidance of a teacher. In my first projects I worked directly with a PhD student and performed simpler implementation tasks with other undergraduate students. Over time, I gained autonomy until I was able to work on my own projects alone. I think when you work alone in your own project it is very important to be self-motivated and self-sufficient because anybody will get your project off the ground for you.

**Stefanni:** I did an internship in a fintech and working with a team of 13 remote developers was a great experience. I have great communication skills, so working in a team is something that I like. Sharing tips and helping others is something that I enjoy.

---------

## Passion

**Camila:** First, as a a beginner in the open-source world, I really like Public Lab project because its concern on being beginner-friendly. One thing I am passionate about is understanding how sociological aspects are reflected in current technologies. In my master's degree thesis I demonstrated the existence of racial bias/stereotypes in search engines, and what is the role of the algorithms on the propagation of these bias/stereotypes. I chose this topic because I believe it is something that impacts society in some way. Just as I believe that investigating environmental concerns, as Public Lab does, is something that can positively impact society and help the environment.

**Stefanni:** Yes, we are interested in Public Lab mission because we believe that providing resources for researchers can improve Education. I changed my career to Software because I wanted to help other people and helping a project like Public Lab is a great opportunity to do that. Also, DIY science rocks!

---------

## Audience

Everyone who wants to share knowledge

---------

## Commitment

We'll meet everyday to work together. We are applying for the 40h per week internship, so we are excited for coding this summer! We plan to use Trello to break the tasks into smaller tasks and share them with our mentors and coaches.