---
title: "GSoC Proposal 2020: Mapknitter Image Export and Spectral Workbench upgrade"

tagnames: 'soc-2020-proposals, zoom:18, lat:-15.890474, lon:-48.014493'
author: alaxallves
path: /notes/alaxallves/03-06-2020/gsoc-proposal-2020-spectral-workbench-rails-and-devops-upgrades.md
nid: 23093
uid: 577447
cids: 26438,26481,26496,26546,26561,26564,26565,26571,26606,26609,26621
---

![](https://publiclab.org/public/system/images/photos/000/038/365/original/upgrade-2.jpg)

# GSoC Proposal 2020: Mapknitter Image Export and Spectral Workbench upgrade

by [alaxallves](/profile/alaxallves) | March 06, 2020 14:07

March 06, 2020 14:07 | Tags: [soc-2020-proposals](/tag/soc-2020-proposals), [zoom:18](/tag/zoom:18), [lat:-15.890474](/tag/lat:-15.890474), [lon:-48.014493](/tag/lon:-48.014493)

----

# About me

**Full Name:** Álax de Carvalho Alves

**Email:** [alaxallves@gmail.com](mailto:alaxallves@gmail.com)

**GitHub:** alaxalves

**Gitlab:** alaxalves

**LinkedIn:** Álax Alves - [https://www.linkedin.com/in/alaxalves/](https://www.linkedin.com/in/alaxalves/)

**Affiliation:** Universidade de Brasília - UnB

**Location:** Brasília, Distrito Federal - Brazil

**Organization:** Digital Impact Alliance

**Sub-Organization:** Public Lab

**Timezone:** Brasilia Standard Time (GMT-3)

**Telephone:** +55 61 998 053 551

**Project:** DIAL: PublicLab's Spectral Workbench - Rails and DevOps Upgrades [https://publiclab.org/wiki/gsoc-ideas#Spectral+Workbench±+Rails+and+DevOps+upgrades](https://publiclab.org/wiki/gsoc-ideas#Spectral+Workbench+-+Rails+and+DevOps+upgrades)
and part of
[https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Image+Management](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Image+Management)

# PublicLab's Mapknitter Image Export and Spectral Workbench upgrade

# Introduction

I'm currently an undergraduate of Software Engineering at University of Brasília (UnB), Brasília, Brazil. I will get my degree at the middle of this year. The time I have spent in college made me very passionate about Ruby on Rails, Open Source and specially DevOps. Contributing to a bigger context, specially a project with social impact, has been one of the professional practices I'd like to keep performing, among various other reasons I'll discuss that's why I think this project fits right in for me. Along with PublicLab's wide community of contributors, I have identified some issues and needs for the Spectral Workbench project repository.

I have been an intern at LAPPIS (which stands for Advanced Laboratory of Production, Research and Software Innovation) for almost 5 years. This college laboratory is focused on applied research on DevOps, and contributes heavily with Open Source projects, in many areas such as Chatbots, IOT, Data Analysis, Machine Learning and Social Networks, all of those using Agile development methods. LAPPIS professors encourage a culture of a collaborative effort between teachers and students to contribute actively to Free Software communities, and use of Agile practices. The laboratory has collaborated on numerous open source projects, such as Rocket.Chat, Linux kernel, Debian, Noosfero, Rasa. Several students that worked in the laboratory have participated in GSoC as both mentees as mentors in past editions. I have played different roles throughout my experience in LAPPIS, such as Developer, Product Owner, Scrum Master, DevOps Developer.

Also I have been an active contributor throughout the PublicLab ecosystem of repositories - with significant contributions to PublicLab's Mapknitter, Plots2 and Spectral Workbench itself. Not only contributing with code and pull requests but being an active member by reviewing PRs, helping other fellow contributors, engaging in discussions and such.

Throughout these experiences, both in Open Source communities and in a physical laboratory, I had the privilege to contribute to social causes, collaborate in several open source projects, learn from maintainers and community leaders, improve my technical and interpersonal skills, teach newcomers and much more. Such experiences not only enriched my coding skills, but also my soft skills, such as the ability to work as a team, either remotely or pairing.

# Project description

This kind of upgrading project requires a set of "pre-steps" in order to be done smoothly. First step is obtaining stable test coverage, so my first issue will be to increase and stabilize test coverage. Along with that I plan to improve the DevOps pipeline, by having a trusted Continuous Integration tool, a test environment that reflects our developing environment. I have started some of this effort in [https://github.com/publiclab/spectral-workbench/pull/480](https://github.com/publiclab/spectral-workbench/pull/480).

I also have some ideas on improving the CI integration, such as breaking it into multiple runners to fasten the build -- which I have already done here -\> [https://github.com/publiclab/spectral-workbench/pull/487](https://github.com/publiclab/spectral-workbench/pull/487). By achieving this we'll have not only a more trustful environment to work on, but also a more standardized project, since we have this type of CI settings in other PL projects, such as Mapknitter and Plots2 repositories.

For this initial part of the project I have planned ~1 month to get everything properly set up.

After getting a nice test coverage, a proper CI and developing environment we can start with the upgrade itself. It's widely embraced as a good practice to open smaller Pull Requests containing smaller, but significant, parts of code as in an granular/incremental upgrade. Not only we'll get more stable code versions but it'll feel like there's progress being made. For that I'll count on the quick review of fellow contributors to get the project flowing constantly.

I have already started this effort by opening several PRs at Spectral Workbench repository at [https://github.com/publiclab/spectral-workbench/pulls/alaxalves](https://github.com/publiclab/spectral-workbench/pulls/alaxalves)For the Mapknitter Export upgrade project, the first step is to identify which parts of the export module need to be upgraded. Also, we need to define how the upgrades should happen and which new features or flows should be changed/included on the upgrade.

I could identify a few upgrades that can be done in the export module. One thing is the method: `def self.generate_perspectival_dist` defined in the `lib/exporter.rb` file. This method is clearly doing a lot of things it “shouldn’t” when it comes to one of Rails’ core principles - keeping code readable, small and simple.

By going through the exporter module the first step is breaking those huge methods into smaller ones, in order to get a code easier to understand, and even easier to maintain. This being done, we could reduce the amount of params that are needed to execute the method in `app/models/warpable.rb#L154`, which can significantly increase the performance of the method `generate_perspectival_distort` defined at the warpable model, since it runs on every to-be exported image.

The same idea given by the def self.generate_perspectival_dist method can by used for `def self.run_export(user,resolution,export,id,slug,root,average_scale,placed_warpables,key)`, `def self.generate_composite_tiff(coords, origin, placed_warpables, slug, ordered)` and `def self.distort_warpables(scale, warpables, export, slug)` methods. 

Along with this code refactoring, some features such as collecting a set of image URLs and their corner coordinates, determining the image dimensions in pixel and converting corner coordinates to pixel positions can be worked on alongside the refactoring. In other words given a collection of warped images, calculate pixel positions of image collection relative to each other. This would involve some refactoring at `app/models/map.rb` file. Some other performance related features, such as producing an SVG artifact containing images at relative positions for less memory usage, might be discussed with the mentors as the project flows - the idea list is extensive.

I think it’s possible to accomplish both projects since I am already familiar with Mapknitter code, since I’ve been a heavy contributor and also because Spectral Workbench has a small codebase in comparison to Mapknitter’s and Plots2’s, so the Rails upgrade is going to be less painful.

# Abstract/summary (<20 words):

Improve the project's DevOps workflow and proceed gradually with the Rails versions upgrades for Spectral Workbench, in order to get more stable versions. Along with that, the Mapknitter’s export idea is to run the exporting process as a scalable web service - which has been recently achieved; but also work on the performance of the Export module, by doing some refactoring and including previously defined feature with it.

# Problem

Being part of the great PublicLab community has gotten me acquainted with the coding and organization practices and patterns and contributing to Spectral Workbench and the Mapknitter projects made me acknowledge the powerful tool they are, but also made me take notice of some of the issues I'd like to attack on this project besides the upgrade itself, when it comes to the Spectral Workbench project, the main goals are:

1 - Better/stabler control of its ruby and javascript dependencies. By switching its dependencies manager from Bower to Yarn, and locking gem version on the Gemfile.

2 - Containerize the development environment using Docker's modern tooling. Effort started in [https://github.com/publiclab/spectral-workbench/pull/470](https://github.com/publiclab/spectral-workbench/pull/470).

3 - Include and configure a tool to monitor Test Coverage, such as SimpleCov.

4 - Improve the continuous integration tool project relation by scaling its running pipelines and adding test scripts. Effort has started in [https://github.com/publiclab/spectral-workbench/pull/480](https://github.com/publiclab/spectral-workbench/pull/480)

5 - Update the entire code to a newer Ruby language syntax and Rails framework syntax, this will remove any, or in the worst case, most of the deprecation warnings.

6 - Standardize Spectral Workbench code and practices by setting a ruby coding stylesheet as in Mapknitter and Plots2 projects.

Summarizing, the major milestones are increasing the test coverage, then creating a more stable workflow pipeline by updating CI configuration and the app's environments. Then move forward with the gradual Rails upgrades.

In order to get a more fluid developing schedule, a plan that I have developed during my contributions to Mapknitter project can be replicated to the Spectral Workbench upgrading project. Since opening a PR to Mapknitter's main branch was taking a little longer than expected, we have adopted a new strategy in order to work faster. Along with the mentors we came up with the following plan: Create a development branch where we ourselves could merge our changes/hotfixes/upgrades/improvements to such branch than see how it went on the CI tools, then, if successful, keep working with the upgrade or something else. With this we could work faster, since we wouldn't need to wait for approval of the merge. Along with that we have opened a pull request from this development branch to main branch, to make our work more transparent to the mentors and to ourselves, thus making it easier to review, since every change will be in a single pull request. This strategy has been proven to be very effective since made possible to be ahead of schedule at the Mapknitter project.

When it comes to the Mapknitter image export project, the main goals are:
1 - Identify with mentors which parts of the Exporting module should be upgraded and how. Also, which features or flow changes can be done along with the upgrade.
2 - Refactor the existing Export-related modules and methods
3 - Change the Export related methods callbacks spread around the Mapknitter code
4 - Work on significant performance upgrades, by replacing outdated code and setting a new image exporting flow - new callbacks and processors.
5 - Work on new features related to the image exporting process previously defined with mentors.
 
By the end of the GSoC program we should have a very stable Spectral Workbench environment certified by the increased test coverage, improved CI configuration, with stable working environments and obviously properly updated to the latest Rails. And an improved Mapknitter image export flow with significant performance upgrades and newly designed features.


# Timeline/milestones

## Detailed Timeline

### Proposal Review Period (March 31, 2020 - May 3, 2020)

In this phase I intend to study Spectral Workbench's code base more deeply, so I can get used to its goals, functionalities, patterns, code styling, test workflow (fixtures, factories) etc. It is also important to get more familiar with Spectral's test suite to better understand their similarities and differences. And also plan a strategy, along with the community, on increasing the test coverage, that is my first goal. Meanwhile keep working on obtaining a stable development environment.

Regarding the Mapknitter export project I plan on identifying along with mentors the parts of the Image Exporting module that should be upgraded and how we will accomplish that. Also, which features or flow changes can be done along with the upgrade. By doing this “investigation” and planning job on this part of the calendar we’ll certainly be able to complete the task on schedule or even ahead of it.

### Community Bonding (May 4, 2020 - June 1, 2020)

This period I'd like to get to know more and get known in the PublicLab community since there are newcomers every day, and also get familiar with the interested parts(stakeholders) of the Spectral Workbench and Mapknitter project.

This is important because PublicLab maintains a massive project structure and a vast community, and a small change in any project could affect many people, so I want to be aligned with the organization and project intents. It's a good plan since I could replicate existing work in PublicLab's ecosystem, thus having a more standardized collection of projects - which makes it easier for newcomers to contribute. Also it’ll be easier to get acquainted of the organization’s goals.

Along with that, I will still be studying the tools that could be used and codebase. I may even solve some small issues on the repository. This way I will make myself comfortable with the code, and will see a clearer path to achieve my GSoC proposals, and also will provide trust to the PublicLab community in my work. This schedule applies both for the Spectral Workbench and the Mapknitter Image Exporting project.

At this part of the project I plan on already having everything defined regarding the Mapknitter Image Exporting project when it comes to which parts should be upgraded and how; And which features or exporting flow changes will be done along with the upgrade.

### Coding Period (June 1, 2020 - August 31, 2020)

#### Week 1 (June 1, 2020 - June 7, 2020)

In this period, the first step on the Spectral project would be obtaining a stable development environment(using Docker), then increase Spectral Workbench''s test coverage. Along with my mentor we could previously set a stable test coverage percentage and then the new tests will be Pull Requested to the community evaluation, so we can be confident about the next steps we'll take on.

Formalizing a plan through a GitHub issue is also a plan for this part of the project. Which means writing down what and how everything of the Exporting project will be accomplished, so that the community can discuss and give their input. Also, I plan on start refactoring the first code pieces of the Export module.

#### Weeks 2-3 (June 8 - June 14, 2020)

The next step on Spectral would be upgrading/improving the existing development/test/production environment along with the CI/CD pipelines. We could achieve that by creating stable docker environments and later a stable CI/CD pipeline that could go over the entire workflow. Also the plan is already start with the Rails 3.2 -> Rails 4.2 upgrade in parallel. 

In the Mapknitter Exporting project, I intend to keep on refactoring the existing Export-related modules and methods and in parallel change the Export related methods callbacks spread around the Mapknitter code.

#### Week 4-5 (June 15 - June 29, 2020)

The refactoring of the existing Export-related modules and methods and callbacks spread around the Mapknitter code. A WIP pull request will be opened so that reviewers can give their input as fast as they can.

At the Spectral project, after having efficient test coverage, stable environments and DevOps pipeline, there's a stable and trustable environment. Upgrading to Rails version 4.2.8 is the most logical next step to take, because we'll be able to obtain a stable project version faster and easier -some benefits of gradual upgrades. Along with this upgrade we can start locking the gems versions to the proper ones. A WIP pull request will also be opened on Spectral so that reviews can give their input as fast as they can.

### Evaluation 1 (June 29 - July 5, 2020)

At this first milestone, the plan is having Spectral Workbench project with increased test coverage, stable dockerized environment, stable and improved CI/CD pipelines and running on Rails version 4.2.8.

By this time of the schedule, the existing Export-related modules and methods along with the callbacks spread around the Mapknitter code should be entirely improved.

#### Weeks 6-7 (July 6 - July 19, 2020)

In the second phase, after the feedback from the community is done, code refactoring or even minor improvements could be suggested and added. After everything is properly reviewed we could start working on an upcoming upgrade from Rails 4.2.8 to Rails 5.0.1 and open a WIP status pull request. Along with that we can start switching our javascript dependencies manager, removing Bower and start setting Yarn.
 
For the Mapknitter Export project, after I receive the community feedback I can start working on the suggestions. And then begin the work on the performance upgrades, by replacing outdated code and setting a new image exporting flow - all new callbacks and processors. A third party library for such work could also be considered to integrate. Since new features will be already planned and established, I intend to already start working on those.

#### Week 8 (July 20 - 26, 2020)

By this time of schedule, we’ll have achieved significant performance upgrades with the Export module, with new methods and callbacks, and new features for it will be on execution.

In Spectral, after the code is reviewed, we need to get feedback from users and/or maintainers of the PublicLab community. Any possible bug should be fixed here and can be used as a contingency time, in order to work on unfinished issues. If nothing critical appears we could start working in a Rails 5.0.1 to Rails 5.2.2 upgrade. The goal is having Spectral running on Rails 5.2.2 by the end of this period.

### Evaluation 2 (July 27 - August 2, 2020)

On this milestone Spectral Workbench will have a stable functional version running on Rails 5.2.2 version. In the Mapknitter project we should have the exporting modules completely improved and a couple of new features and export flow should be already set up. A pull request will be already opened allowing the community to review and suggest changes for both projects.

And any eventual bug or improved will be either discussed or taken care of. Also, for Spectral I intend to start switching our assets "precompilator" from Sprockets to Webpacker, in order to get a more up-to-date pattern.

#### Weeks 9-10 (August 3 - August 16, 2020)

In the third phase we will start upgrading from Rails 5.2.2 to Rails 6.0.0, worth mentioning that a WIP status MR will be opened so that the PublicLab community gets in touch with the work that is getting done. And any eventual new feature for Mapknitter’s exporting project will be developed at this latest parts, a WIP pull request will be opened for these in order to get constant reviews and feedback for the community.

Any eventual bug should be fixed, and some missing tests should be written, for example controller, model and/or system tests. But, at this point the source code should be stable enough for production, already with the new javascript dependencies manager, Yarn - this regarding the Spectral upgrade project - the work on Sprockets replacing should still be going on in parallel as well.

#### Week 11-12 (August 17 - 30, 2020)

In the last phase Rails 6.0.0 with Webpacker will be completely set for Spectral, worth to mention that a WIP status pull request will be opened so that the PublicLab community get in touch with the work that is getting done. Hopefully we'll have the Rails 6 Debian package already done in order to ship Spectral to production with the latest Rails.

The plans for Mapknitter Image Export project is having the export modules completely refactored with readable methods that have significantly better performance when it comes to the older methods. This refactoring will also present new features for the exporting module, such as generating an SVG artifact containing images at relative positions and others.

This final part of the project - last two weeks - could also be used as a contingency time. If anything goes wrong or takes more than planned, this period of time should be used to work on these problems. Any final feedback should be given at this point, and a final Pull Request should be opened.

### Students Submit Code and Final Evaluations (August 31 - September 7, 2020)

The final release for Mapknitter’s Export module should contain:

- Export module refactored to a more readable code 
- Export module with more performatic methods
- Pixel positions calculation of image collections feature
- Producing SVG artifact containing images at relative positions feature
- Models and Controllers with exporting related callbacks completely
- New performatic image exporting flow

The final release for Spectral Workbench should contain:

- Test coverage tool set up and increased test coverage.
- SW dependencies and core code updated to the latest Rails version.
- Switch of deprecated side-tools, such as Bower and SProckets.
- Deprecated dependencies and pieces of code removed.
- CI/CD integration and pipeline improved.
- Docker and Docker Compose set for all environments.

## Summarized Timeline for Spectral Workbench project

![](https://i.imgur.com/hIPhVPi.jpg)

# Other Commitments

I currently have no ongoing college activities due to the corona virus crisis. The forecast for decreasing the number of infections in my country is for September, so I think that at least until June / July I will be working only on this project, in case of back to college activities I would still have around 30 hours of weekly availability.


# Needs

I'd like to have a constant validation from the PublicLab team, this means having a solid communication channel and a great code review policy. I intend to break this single update in several and reviewing the consequent pull requests is essential to get this done smoothly.


# Contributions to PublicLab


**Contribution to PublicLab's Spectral Workbench**

[https://github.com/publiclab/spectral-workbench/pulls/alaxalves](https://github.com/publiclab/spectral-workbench/pulls?q=is%3Apr+author%3Aalaxalves+is%3Aclosed)

**Several contributions to PublicLab's Mapknitter**

[https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3Aalaxalves+is%3Aclosed](https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3Aalaxalves+is%3Aclosed)

**Some contributions to PublicLab's Plots2**

[https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aalaxalves+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aalaxalves+is%3Aclosed)


# Experience

I have gotten in touch with the open software world 3-4 years ago when I started taking practical subjects in my university. First I have learned C lang - which I did not like much - later C++, Java and then Ruby. I fell in love with Ruby and have been working with it ever since. I have been working with Ruby for quite a long time now, specifically since my 3rd semester in college(2016) since I started college(2015), that dates 3-4 years now. Most of the projects I have been involved in are using Ruby as the main language and Rails as the main framework, either as an API or web application.

I have some experience working with Python, ShellScript, BashScript, Haskell, Maven, Spring and more. I'm a huge fan of container architecture, docker enthusiast, I love automation and DevOps pipelining.

I am also pretty familiar with relational and non-relational databases such as PostgresQL, MySQL, SQLite, Redis, Mongo and more. I think it's worth mentioning that I have recently worked with this type of framework upgrade in [Noosfero](https://gitlab.com/noosfero/noosfero/merge_requests/1438). Regarding Noosfero and Mapknitter in peculiar its good to mention that I have experienced upgrading noosfero's rails framework used in a HUGE software, not only the framework, but obviously its related dependencies, upgrading the entire production environment from Debian Jessie(8) to Debian Stretch(9), I have also worked on improving the CI configuration provided by GitLab CI, by including a Code Quality pipeline check.

- **Mapknitter:** Mapknitter is a free and open-source software created and run by Public Lab. It lets people upload their own aerial images, position them in a web interface over some existing map data, share it, and export for print. I have worked in Mapknitter during GSoC 2019, with its Rails upgrades, besides that a lot has also been accomplished, such as improved CI/CD pipelines, modern side-tools, old code removal, and etc. Link: [https://github.com/publiclab/mapknitter](https://github.com/publiclab/mapknitter)
- **Noosfero:** Dated back to 2007, it is the greater software I worked/have been working with. Basically Noosfero it's an open source framework for social networking with blog, e-Portfolios, CMS, RSS, thematic discussion, events scheduling... I started contributing with Noosfero in 2017 and have been contributing until now with Noosfero's community(350+ contributors). For such relevant contributions I am currently one of its maintainers.  
Link: [https://gitlab.com/noosfero/noosfero/](https://gitlab.com/noosfero/noosfero/)
- **Falko API:** I'm one of Falko's co-author, developers and currently maintainer. Had the opportunity to participate both in Software management and development using Rational Unified Process(RUP) and later Scrum/XP. But What is Falko? To summarize, Falko is an open source platform to manage scrum based agile projects. Falko also is integrated with Github's API and CodeClimate API, Falko gets there as a third-part app that will use you GitHub data to help you manage your agile projects. It has every basic "module" to maintain an agile project, for instance managing user stories (issues), sprints, releases, sprints reviews and retrospectives. Falko also generates charts and info about your team progress like velocity and burndown.Link: [https://github.com/falko-org/Falko-API/](https://github.com/falko-org/Falko-API/)
- **Falko Frontend:** Falko is a platform to manage Agile/Scrum projects. Link: [https://github.com/falko-org/Falko/](https://github.com/falko-org/Falko/)
- **SMI-Slave:** The Sistema de Monitoramento de Insumos of the Universidade de Brasília (SMI-UnB), is a web application developed to assist in the monitoring and management of Universidade de Brasília's power consumption and distribution. The idea is to monitor, collect and display data of each campus power supply, allowing a much better comprehension of the usage patterns and energy quality received from the distribution station. SMI is divided is three layers. The slave layer is responsible for the communication with energy transductors and data collection. Link: [https://gitlab.com/lappis-unb/projects/SMI/smi-slave](https://gitlab.com/lappis-unb/projects/SMI/smi-slave)
- **SMI-Master:** The master layer, which is responsible for all the data management, data processing, and database redundancy. Link: [https://gitlab.com/lappis-unb/projects/SMI/smi-master](https://gitlab.com/lappis-unb/projects/SMI/smi-master)
- **SMI-Front:** The presentation layer, which holds the front-end of the application, including the dashboard for researchers. Link: [https://gitlab.com/lappis-unb/projects/SMI/smi-front](https://gitlab.com/lappis-unb/projects/SMI/smi-front)
- **Analizo:** I'm pretty passionate about shell script and bash script, I like to use those mostly for automation in order to improve DevOps pipelines. In Analizo I have planned and implemented a pipeline to automate the generation of a GitHub release and DockerHub automated deploy for it's parser module called Doxyparse. Analizo is a free, multi-language, extensible source code analysis. It supports the extraction and calculation of a fair number of source code metrics, generation of dependency graphs, and software evolution analysis. Link: [https://github.com/analizo/doxyparse](https://github.com/analizo/doxyparse)
- Analizo website: [http://www.analizo.org/](http://www.analizo.org/)
- **Owla:** Just like Falko, I'm one of Owla's co-author, developer and currently maintainer. Owla has been my first big/relevant Ruby on Rails web app. For Owla I had the opportunity to participate in the Software development using Rational Unified Process(RUP) and later Scrum/XP. Owla is an open source online tool to aid both teachers and students to improve their experiences in classes. Some of its features include Real-time Q&A, Real time slides sharing - both using Rails' WebSocket - comments and forums. Link: [https://github.com/crabsolutions/Owla/](https://github.com/crabsolutions/Owla/)
- **Rasp API:** For this project I have been more responsible for the DevOps workflow, I had the opportunity to configure Docker environments and Gitlab CI and deploying it into the Raspberry Pi. Rasp API has been a module of a greater IoT context. Rasp API is an open source Sinatra-based API that runs inside a Raspberry Pi Model 3B. This API is responsible for collecting data from a lot of water related sensors, such as TDS, temperature, Turbidity, Ph, and more. Those water samples are collected, saved and sent to the Klara API.  
Link: [https://gitlab.com/klara-org/rasp-api](https://gitlab.com/klara-org/rasp-api)
- **Klara API:** Klara API is also part of the IoT context along with the Rasp API project. This one a Rails API app that is responsible for storing and provisioning the application data. It structures and sends data regarding the water properties, previously collected by the RASP API, into order to maintain a robust distributed database concerning the water quality of a certain region. Citus DB was the technology used to manage the distributed databases, that use the Master/Slave logic to replicate its data. Besides that, it provisions structured JSON data for the frontend so that it could generate charts and water quality related statistics.  
Link: [https://gitlab.com/klara-org/klara-api](https://gitlab.com/klara-org/klara-api)
- **Klara Frontend:** This application uses info from water samples to make charts about the water quality in a certain region (or country). [https://gitlab.com/klara-org/klara](https://gitlab.com/klara-org/klara)
- **Dontfile:** In this app in particular I have worked as an open source collaborator only. Dontfile is a DontPad-like app written in Rails that makes sharing files easier across internet users.  
Link: [https://github.com/MatheusRich/dontfile](https://github.com/MatheusRich/dontfile)
- Dontfile website: [http://dontfile.com/](http://dontfile.com/)
- **Avaleasy API:** I have participated in this project as a developer only. It is basically a Node Express with a Mongo database backend to serve an app that makes a teacher work easier by implementing the TBL framework to help out managing tests and such. Link: [https://github.com/MPS-FGA/Avaleasy-backend](https://github.com/MPS-FGA/Avaleasy-backend)
- **Avaleasy APP:** A React Native app that makes the frontend for the API. Link: [https://github.com/MPS-FGA/Avaleasy-app](https://github.com/MPS-FGA/Avaleasy-app)
- **Simian:** I have participated in this project as a developer only. It isa Pygame 2D game engine built in python! Link: [https://github.com/Desenho2018-1/simian](https://github.com/Desenho2018-1/simian)
- Simian website: [https://desenho2018-1.github.io/simian](https://desenho2018-1.github.io/simian)
- **Pan-Pan!:** I have participated in this project as a developer only. Pan Pan! is an web application that aims to aid music bands management so that they upgrade their performance. Link: [https://github.com/Desenho2018-1/pan-pan](https://github.com/Desenho2018-1/pan-pan)
- **Graskell:** I have participated in this project as a developer only. A small Haskell library that includes some graphs related functions. Link: [https://github.com/Paradigmas2018-1/graskell/](https://github.com/Paradigmas2018-1/graskell/)

# Significant Contributions

Here are some contributions for some diverse Open Source projects I consider most relevant:

**Mapknitter's Rails upgrade:**

During Google Summer of Code 2019 I had the opportunity to know the wide PublicLab ecosystem of projects, I have fallen in love with the community, they have welcomed me very well. For Mapknitter's upgrading project I got the chance to work not only with Ruby on Rails itself, but also javascript and bash script. Along with a fellow developer we have gotten the chance to learn a lot and also be free to plan our schedule and execute it. And we have successfully upgraded Mapknitter from Rails 3.2 to Rails 5.1.6\. Unfortunately we could not merge the Rails 6 upgrade because we could not ship it to production, since there's a restriction in our production environment to Debian packaging. See: [https://github.com/publiclab/mapknitter/pull/824#issuecomment-523285255](https://github.com/publiclab/mapknitter/pull/824#issuecomment-523285255)

A small resume of the trajectory can be found at: [https://publiclab.org/notes/alaxallves/08-24-2019/google-summer-of-code-2019-report](https://publiclab.org/notes/alaxallves/08-24-2019/google-summer-of-code-2019-report)

**Noosfero's Rails upgrade:**

Along with my colleagues, I had the opportunity to upgrade this huge software to latest Rails at the time (Rails 5.1.6), along with that I had to fix around ~8000 (EIGHT THOUSAND) tests.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1438/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1438/diffs)

**SMI-Front's setting of Server-Side-Rendering:**

Since there was a need for replacing the Client-Side rendering with Server-Side rendering I took this mission to accomplish the change. The results are in the link below.

[https://gitlab.com/lappis-unb/projects/SMI/smi-front/-/merge\_requests/26](https://gitlab.com/lappis-unb/projects/SMI/smi-front/-/merge_requests/26)

**SMI-Slave's script to automatically setup everything that was needed in a Raspberry Pi:**

We always had to take several equal steps in order to properly install everything that was required in the various Raspberries we had. What I did here was gathering all those similar steps in a script and now with a single command you can install everything we need for SMI-Slave run properly in a Raspberry Pi.

[https://gitlab.com/lappis-unb/projects/SMI/smi-slave/-/merge\_requests/63](https://gitlab.com/lappis-unb/projects/SMI/smi-slave/-/merge_requests/63)

**Dontfile's upgrade to Rails 5.2.2:**

Dontfile is a small software, so upgrading it to Rails 5.2.2 has given me some experience, certainly not a painful one, but also a chance to learn more.

[https://github.com/MatheusRich/dontfile/pull/79/files](https://github.com/MatheusRich/dontfile/pull/79/files)

**Noosfero's Code Quality tool and Rubocop stylesheet setup:**

Here I have set GitLab's default quality tool to check the code for quality downgrades. I have also improved the rubocop checks to standardize the code.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1636/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1636/diffs "https://gitlab.com/noosfero/noosfero/merge_requests/1636/diffs")

**Noosfero's set up of Varnish and Apache services:**

In this case I have integrated Apache and Varnish serves along the docker pipeline that had been previously set in the code.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1616/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1616/diffs)

**Noosfero's Enabling importing CSV in CustomForm module:**

Basically, I have helped to implement CSV sheets importing and exporting by creating an "adapter" class to manage those interactions. Consequently wrote a migration so that older instances could keep its data.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1605/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1605/diffs)

**Klara API's setup of Citus Database:**

Citus horizontally scales PostgreSQL databases across commodity servers using sharding and replication. In this case I had to replace previous Postgres logic to work distributedly with Citus.

[https://gitlab.com/klara-org/klara-api/merge\_requests/4/diffs](https://gitlab.com/klara-org/klara-api/merge_requests/4/diffs)

**Klara API's setting of Sidekiq executor to parallel serve api and jobs, also setting Redis to cache JSON data:**

[https://gitlab.com/klara-org/klara-api/merge\_requests/11/diffs](https://gitlab.com/klara-org/klara-api/merge_requests/11/diffs)

**Ruby-Lang's enabling multiple runners in Travis:**

This is a small but very significant contribution to me since Ruby is a great organization. Here I have just set Travis to parallel its jobs to fasten ruby-lang's builds.

[https://github.com/ruby/www.ruby-lang.org/pull/1993/files](https://github.com/ruby/www.ruby-lang.org/pull/1993/files)

**Mapknitter's improving docker, setting Yarn in favor of Bower and upgrading to Rails 4.2.8:**

Here I have contributed to Mapknitter's production environment that is dockerized, by that I have also improved Travis CI settings and consequently mapped some asset precompilation issues, dependencies versioning issues, and so on. Despite not being merged the work I have done here has been used in subsequent merge requests.

[https://github.com/publiclab/mapknitter/pull/363/files](https://github.com/publiclab/mapknitter/pull/363/files)

**Falko API's implementation Adapter design pattern:**

Here I have refactored some old code to "respect" Adapter design pattern so that we could get a more concise code and better modules intercommunication.

[https://github.com/falko-org/Falko-API/pull/149/files](https://github.com/falko-org/Falko-API/pull/149/files)

**Simian Engine's release version 0.0.1:**

In this case I have shipped the first of 3 versions of Simian game engine, with PyPi and DockerHub automated deploy already set.

[https://github.com/Desenho2018-1/simian/pull/32/files](https://github.com/Desenho2018-1/simian/pull/32/files)

**Falko's setting auto deploy:**

For Falko I have set Travis and Dokku integration to auto deploy a version when a merge request was accepted in the master branch.

[https://github.com/falko-org/Falko/pull/170/files](https://github.com/falko-org/Falko/pull/170/files)

**Analizo's Doxyparse setup of auto GitHub release creation process:**

In Analizo's parser module Doxyparse I have implemented an entire automated workflow to generate a new Doxyparse version. I have used mostly shell scripts for this.

[https://github.com/analizo/doxyparse/pull/9/files](https://github.com/analizo/doxyparse/pull/9/files)

[https://github.com/analizo/doxyparse/pull/11](https://github.com/analizo/doxyparse/pull/11)

[https://github.com/analizo/doxyparse/pull/10](https://github.com/analizo/doxyparse/pull/10)

# Teamwork

I have experience working with Rational Unified Process, Scrum, XP, SAFe frameworks, but mostly with Scrum/XP. The majority of my experience is working with open source software. I have been now a long-time member of LAPPIS lab, which stands for Advanced Laboratory of Production, Research and Software Innovation) and the PublicLab community. Both work heavily with Open Source projects, in many tech areas such as iOT, ChatBots, Machine Learning, Web Design, Data Analysis, etc.

More specifically regarding PublicLab, my entire Mapknitter project has been collaborative, I worked asynchronously with a fellow student named Kaustubh Nair (@kaustubh-nair on GitHub) throughout the whole project, and it turned out to be a very successful project.

I have also previously experienced working in a startup company, it has also been a great experience, working in a multidisciplinary team.

# Passion

I have started working with the PublicLab community for almost a year now and what I have loved the most is how close the core developers get to the new contributors and how they trust us developers. My mentors have given me so much freedom to work that kept me motivated to always do more and with more quality. But one of the main things that made me propose to PublicLab it's the idea of using my tech knowledge to help keep science free and accessible to all.

# Audience

As a big fan of Open Source technologies I intend to use only free softwares and technologies that are accessible to the community.

# Commitment

I truly understand this kind of commitment. That's why I intend to give my full dedication and commitment to this project. I know it will be a wonderful contribution not only to the PublicLab community but also to my future professional career.