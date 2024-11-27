---
nid: 18947
title: GSoC Proposal 2019: Mapknitter's Rails Upgrade
path: public/static/notes/alaxallves/04-03-2019/gsoc-proposal-2019-mapknitter-s-rails-upgrade.md
uid: 577447
tagnames: mapknitter,gsoc,proposal,soc,first-time-poster,2019,soc-2019,soc-2019-proposals,soc-2019-projects
---

# GSoC Proposal 2019: Mapknitter's Rails Upgrade

---------

# **About me**

**Full Name:** Álax de Carvalho Alves

**Email:** [alaxallves@gmail.com](mailto:alaxallves@gmail.com)

**GitHub:** alaxalves

**Gitlab:** alaxalves

**LinkedIn:** Álax Alves - [https://www.linkedin.com/in/%C3%A1lax-de-carvalho-alves-8a90aa164/](https://www.linkedin.com/in/%C3%A1lax-de-carvalho-alves-8a90aa164/)

**Affiliation:** Universidade de Brasilia - UnB

**Location:** Brasilia, Distrito Federal - Brazil

**Project:** Mapknitter [https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Rails+5+Upgrades](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+Rails+5+Upgrades)

My name is Álax Alves, I'm a student from Brazil and currently I am an undergraduate of Software Engineering at University of Brasília (UnB), Brasília, Brazil. I will get my degree at the end of this year. The time I have spent in college made me very passionate about Ruby on Rails, DevOps and Open Source. This means the concept of contributing to a bigger context, that's why I think this project fits right in for me since, along with PublicLab's team, I have identified some issues regarding those topics I have mentioned I like, and it would also give me the opportunity to part of something with such noble ideals as PublicLab.

I have been an intern at LAPPIS (which stands for Advanced Laboratory of Production, Research and Software Innovation) for a long time now. This laboratory is focused on applied research on DevOps, and contribute heavily with Open Source projects, in many areas such as Chatbots, Data Analysis, Machine Learning and Social Networks, all of those using Agile development methods. LAPPIS professors encourage a culture of a collaborative effort between teachers and students to contribute actively to Free Software communities, and use of Agile practices. The laboratory has collaborated to numerous open source projects, such as Rocket.Chat, Linux kernel, Debian, Noosfero, Rasa. Several students that worked in the laboratory have participated to GSoC as both mentees as mentors in past editions. I have played different roles throughout my experience in LAPPIS, such as Developer, Product Owner, Scrum Master, DevOps Developer.

Throughout these experiences, I had the privilege to collaborate in several open source projects, learn from engaged maintainers and community leaders, improve my technical and interpersonal skills, teach newcomers whenever possible. They not only enriched my coding skills, but also my ability to work as a team, either remotely or pairing.

---------

# **Project description**

First of all in order to get this type of upgrade working we must have an stable test coverage, so my first issue will be Increase test coverage. Along with that I plan to improve the DevOps pipeline, I have started some of this effort in [https://github.com/publiclab/mapknitter/pull/363](https://github.com/publiclab/mapknitter/pull/363). I have also some ideas to improve the CI integration, such as breaking it into multiple runners to fasten the build. For this initial part of the project I have planned something like 1 month to get everything properly set up.

_**NOTE: This step is fundamental according to [https://guides.rubyonrails.org/upgrading\_ruby\_on\_rails.html#test-coverage](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#test-coverage "https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#test-coverage")**_

-><-After that we can start with the upgrade itself. I feel like it's a good practice to open smaller Pull Requests containing smaller, but significant, parts of code. For instance, I have empirically upgrade Mapknitter to Rails 4.2.8 in [https://github.com/alaxalves/mapknitter/tree/rails4](https://github.com/alaxalves/mapknitter/tree/rails4) and experienced some of its struggles.

---------

# **Abstract/summary (<20 words):**

Gradually update Rails versions for Mapknitter in order to get more stable versions, and improve some of DevOps workflow.

# **Problem**

Contributing to Mapknitter made me acknowledge a powerful tool such as mapknitter, but also got me in touch with the code and PublicLab org practices. By contributing to the community I took notice of some of the issues I'd like to attack on this project such as:

1- Get Mapknitter to have a better control of its dependencies by version locking, and upgrade its dependecies manager from Bower to Yarn.

2- ( Implement all of the environments(Production, Test, Development) | Improve the existing ) in a modern workflow such as Docker.

3 - Seta new tool to monitor Test Coverage or improve Coveralls usage. Finally, test the code(I'd like to set a modest coverage percentage with my mentor to implement).

4 -Improve the continuous integration tool project relation by scaling its running pipelines and adding test scripts.

5 - And last but not least I want to update the entire code to a newer Ruby language syntax and Rails framework syntax, this will remove any, or in the worst case, most of the deprecation warnings that are on Mapknitter.

To summarize, I believe that first of all we should increase code coverage, then create a more stable workflow pipeline by updating CI configuration and the app's environments. Then move forward with the gradual Rails upgrades. All os these steps willbe followed by a Contigency time, which is a time for the PublicLab community to review my code and if needed there's a review time, on which I will apply the desired changes. By the end of the GSoC program we should have a very stable environment certified by the increased test coverage, improved - more embracing - CI configuration, with stable working environments and obviously properly updated to latest Rails.

# Workflow Diagram

![image description](/i/31187.png "publiclab.png")

_This diagram sums up my intentions on PublicLab's Mapknitter._

# Timeline/milestones

Application Review Period (April 9, 2019 - May 6, 2019)

After sending my application, I'm going to study Mapknitter's code base even more deeply, so I can get used with its patterns, code styling, test workflow (fixtures, factories) etc. I'd also like to get more familiar with MapKnitter's test suite to understand better their similarities and differences. And also plan a strategy, along with the community, on increasing the test coverage, that is my first goal.

#### Community Bonding (May 6 - 27, 2019)

During this period I want to get to know more and get known on the PublicLab community. I know this is important because PublicLab maintain a huge project structure, and a small change in Mapknitter could affect many people, so I want to be aligned with the organization intents. This is important because some of my work in Mapknitter could be reused in others parts of PublicLab projects. At the same time, I will still be studying the tools and codebase. I may even solve some small issues on the repository. This way I will make me comfortable with the code, and will see a clearer path to achieve my GSoC proposals, and also will provide trust to the PublicLab community in my work.

#### Coding Period (May 27, 2019 - August 19, 2019)

##### Week 1 (May 27, 2019 - June 3, 2019)

The first step would be increase Mapknitter's code coverage. Along with my mentor we could preset a stable test coverage percentage and then the new tests will be Pull Requested to the community evaluation, so we can be confident about the nexts steps we'll take on upgrading Mapknitter's rails framework version.

##### Weeks 2-3 (June 3 - 17, 2019)

The next step would be setting a stable development/test/production environment. We could achieve that by creating stable docker environments and later a stable CI pipeline that could go over the entire workflow.

##### Week 4 (June 17 - 24, 2019)

After having efficient test coverage, stable environments and DevOps pipeline, there's a stable and trustable environment. It is time to start with the first rails upgrade in Mapknitter. I'd like to start upgrading to Rails version 4.2.8 that is the closest stable version to current Mapknitter's, a WIP status MR will be opened so that the community could be able to review it meanwhile.

##### Evaluation 1 (June 24 - 28, 2019)

By the end of this first period, Mapknitter will have test coverage increased, stable dockerized environments and will support Rails version 4.2.8\.

##### Weeks 5-6 (July 1 - 15, 2019)

On the second phase, after the feedback from the community is done, code refactoring or even new features could be suggested and added. After everything is properly reviewed we could start working on a upcoming upgrade from Rails 4.2.8 to Rails 5.0.1 and open a WIP status MR.

##### Week 7 (July 15 - 22, 2019)

Again, after the code is reviewed, we need to get feedback from users and/or maintainers of PubliLab community. Any possible bug should be fixed here. If nothing critic appears we could start working in a Rails 5.0.1 to Rails 5.1.6 upgrade.

##### Evaluation 2 (July 22 - 26, 2019)

On this milestone Mapknitter will have a stable functional version running on Rails 5.1.6 version. The MR will be already opened allowing the community to review and suggest changes.

##### Weeks 8-9 (July 29 - August 12, 2019)

On the third phase we will start upgrading Mapknitter from Rails 5.1.6 to Rails 5.2.2, worth to mention that a WIP status MR will be opened so that the PublicLab community get in touch with the work that is getting done.

Any eventual bug should be fixed, and some missing tests should be written. But, at this point the source code should be stable.

##### Week 10 (August 12 - 19, 2019)

On the third phase we will start upgrading Mapknitter from Rails 5.2.2 to Rails 6.0.0, worth to mention that a WIP status MR will be opened so that the PublicLab community get in touch with the work that is getting done.

This final part of the project could also be used as a contingency time. If anything goes wrong, this period of time should be used to fix these problems. Any final feedback should be given at this point, and a final Pull Request should be opened.

#### Students Submit Code and Final Evaluations (August 19 - 26, 2019)

The final release should contain:

- Test coverage tool set up and increased test coverage.
- Mapknitter dependencies and core code updated to latest Rails version.
- Switch of deprecated side-tools, such as Bower.
- Deprecated dependencies and pieces of code removed.
- CI integration and pipeline improved.
- Docker and Docker Compose set for all environments.

---------

# **Needs**

I'd like to have a constant validation from the PublicLab team, this means having a solid communication channel and a great code review policy. I intend to break this single update in several and reviewing the consequent MRs is essential.

# **First-time contributions**

# Comments, to show overall community involvement (like helping others):

[https://github.com/publiclab/mapknitter/pull/306#issuecomment-468680872](https://github.com/publiclab/mapknitter/pull/306#issuecomment-468680872)

[https://github.com/publiclab/mapknitter/issues/345#issuecomment-479225060](https://github.com/publiclab/mapknitter/issues/345#issuecomment-479225060)

[https://github.com/publiclab/mapknitter/pull/357/files/6e073f7e2990b31c7738676c57f7993a24f110b4#r262072044](https://github.com/publiclab/mapknitter/pull/357/files/6e073f7e2990b31c7738676c57f7993a24f110b4#r262072044)

[https://github.com/publiclab/mapknitter/pull/363#issuecomment-470319037](https://github.com/publiclab/mapknitter/pull/363#issuecomment-470319037)

# Open issues:

[https://github.com/publiclab/mapknitter/issues/305](https://github.com/publiclab/mapknitter/issues/305)

# Closed PRs:

[https://github.com/publiclab/mapknitter/pull/363](https://github.com/publiclab/mapknitter/pull/363)

[https://github.com/publiclab/mapknitter/pull/450](https://github.com/publiclab/mapknitter/pull/450)

[https://github.com/publiclab/mapknitter/pull/429](https://github.com/publiclab/mapknitter/pull/429)

[https://github.com/publiclab/mapknitter/pull/357](https://github.com/publiclab/mapknitter/pull/357)

---------

# **Experience**

I have gotten in touch with the open software world 3-4 years ago when I started taking practical subjects in my university. First I have learned C lang - which I did not like much - later C++, Java and then Ruby. I fell in love with Ruby and have been working with it ever since. I have been working with Ruby for a quite long time now, specifically since my 3rd semester in college(2016) since I started college(2015), that dates 3-4 years now. Most of the projects I have been involved are using Ruby as the main language and Rails as the main framework, either as an API or web application.

I have also some experience working with Python, ShellScript, BashScript, Haskell, Maven, Spring and more. I'm a huge fan of container architecture, docker enthusiast, I love automation and DevOps pipelining.

I am also pretty familiar with relational and non-relational databases such as PostgresQL, MySQL, SQLite, Redis, Mongo and more. I think it's worth to mention that I have recently worked with this this type of framework upgrade in [Noosfero](https://gitlab.com/noosfero/noosfero/merge_requests/1438). Regarding Noosfero and Mapknitter in peculiar its good to mention that I have experienced upgrading noosfero's rails framework used in a HUGE software, not only the framework, but obviously its related dependencies, upgrading the entire production environment from Debian Jessie(8) to Debian Stretch(9), I have also worked on improving the CI configuration provided by GitLab CI, by including a Code Quality pipeline check.

- **Noosfero:** Dated back to 2007, it is the greater software I worked/have been working with. Basically Noosfero it's an open source framework for social networking with blog, e-Portfolios, CMS, RSS, thematic discussion, events scheduling... I started contributing with Noosfero in 2017 and have been contributing until now with Noosfero's community(350+ contributors). For such relevant contributions I am currently one of its maintainers.  
Link: [https://gitlab.com/noosfero/noosfero/](https://gitlab.com/noosfero/noosfero/)
- **Falko API:** I'm one of Falko's co-author, developer and currently maintainer. Had the opportunity to participate both in Software management and development using Rational Unified Process(RUP) and later Scrum/XP. But What is Falko? To summarize, Falko is an open source platform to manage scrum based agile projects. Falko also is integrated with Github's API and CodeClimate API, Falko gets there as a third-part app that will use you GitHub data to help you manage your agile projects. It has every basic "module" to maintain an agile project, for instance managing user stories (issues), sprints, releases, sprints reviews and retrospectives. Falko also generates charts and info about your team progress like velocity and burndown.Link: [https://github.com/falko-org/Falko-API/](https://github.com/falko-org/Falko-API/)
- **Falko Frontend:** Falko is a platform to manage Agile/Scrum projects. Link: [https://github.com/falko-org/Falko/](https://github.com/falko-org/Falko/)
- Falko website: [http://falko.surge.sh](http://falko.surge.sh)
- **SMI(slave):** It's a low level system that communicates with Energy Transductors such as those, in order to collect its data, structure it and ship to another module to generate charts and such regarding energy consumption. Link: [https://gitlab.com/lappis-unb/projects/SMI/smi-slave](https://gitlab.com/lappis-unb/projects/SMI/smi-slave)
- **Analizo:** I'm pretty passionate about shellscript and/or bashscript, I like to use those mostly for automation scripts in order to improve DevOps pipelines. In Analizo I have planned and implemented a pipeline to automate the generation of a GitHub release and DockerHub automated deploy for it's parser module called Doxyparse. Analizo is a free, multi-language, extensible source code analysis. It supports the extraction and calculation of a fair number of source code metrics, generation of dependency graphs, and software evolution analysis. Link: [https://github.com/analizo/doxyparse](https://github.com/analizo/doxyparse)
- Analizo website: [http://www.analizo.org/](http://www.analizo.org/)
- **Owla:** Just like Falko, I'm one of Owla's co-author, developer and currently maintainer. Owla has been my first big/relevant Ruby on Rails webapp. For Owla I had the opportunity to participate in the Software development using Rational Unified Process(RUP) and later Scrum/XP. Owla is an open source online tool to aid both teachers and students to improve their experiences on classes. Some of its features include Real-time Q&A, Real time slides sharing - both using Rails' WebSocket - comments and forums. Link: [https://github.com/crabsolutions/Owla/](https://github.com/crabsolutions/Owla/)
- Owla website: [https://appowla.herokuapp.com/](https://appowla.herokuapp.com/)
- **Rasp API:** For this project I have been more responsible for the DevOps workflow, I had the opportunity to configure Docker environments and Gitlab CI and deploying it into the Raspberry Pi. Rasp API has been a module of a greater IoT context. Rasp API is an open source Sinatra-based API that runs inside a Raspberry Pi Model 3B. This API is responsible for collecting data from a lot of water related sensors, such as TDS, temperature, Turbidity, Ph, and more. Those water samples are collected, saved and sent Klara API.  
Link: [https://gitlab.com/klara-org/rasp-api](https://gitlab.com/klara-org/rasp-api)
- **Klara API:** Klara API is also part of the IoT context along with Rasp API project. This one a Rails API app that is responsible for storing and provisioning the application data. It structures and sends data regarding the water properties, previously collected by the RASP API, into order to maintain a robust distributed database concerning the water quality of a certain region. Citus DB was the technology used to manage the distributed databases, that use the Master/Slave logic to replicate its data. Besides that, it provisions structured JSON data for the frontend so that it could generate charts and water quality related statistics.  
Link: [https://gitlab.com/klara-org/klara-api](https://gitlab.com/klara-org/klara-api)
- **Klara Frontend:** This application uses info from water samples to make charts about the water quality on a certain region (or country). [https://gitlab.com/klara-org/klara](https://gitlab.com/klara-org/klara)
- **Dontfile:** In this app in particular I have worked as an open source collaborator only. Dontfile is a DontPad-like app written in Rails that makes sharing files easier across internet users.  
Link: [https://github.com/MatheusRich/dontfile](https://github.com/MatheusRich/dontfile)
- Dontfile website: [http://dontfile.com/](http://dontfile.com/)
- **Avaleasy API:** I have participed in this project as a developer only. It is basically a Node Express with a Mongo database backend to serve an app that makes a teacher work easier by implementing the TBL framework to help out managing tests and such. Link: [https://github.com/MPS-FGA/Avaleasy-backend](https://github.com/MPS-FGA/Avaleasy-backend)
- **Avaleasy APP:** A React Native app that makes the frontend for the API. Link: [https://github.com/MPS-FGA/Avaleasy-app](https://github.com/MPS-FGA/Avaleasy-app)
- **Simian:** I have participed in this project as a developer only. A Pygame built 2D game engine with python! Link: [https://github.com/Desenho2018-1/simian](https://github.com/Desenho2018-1/simian)
- Simian website: [https://desenho2018-1.github.io/simian](https://desenho2018-1.github.io/simian)
- **Pan-Pan:** I have participed in this project as a developer only. Pan Pan! is an web application that aims to aid music bands management so that they upgrade their performance. Link: [https://github.com/Desenho2018-1/pan-pan](https://github.com/Desenho2018-1/pan-pan)
- **Graskell:** I have participed in this project as a developer only. A small Haskell library that includes some graphs related functions. Link: [https://github.com/Paradigmas2018-1/graskell/](https://github.com/Paradigmas2018-1/graskell/)

# Significant Contributions

Here are some contributions for some diverse Open Source projects I consider most relevant:

**Noosfero's Rails upgrade:**

Along with my colleagues, I had the opportunity to upgrade this huge software to latest Rails at the time (Rails 5.1.6), along with that I had to fix around ~8000 (EIGHT THOUSAND) tests.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1438/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1438/diffs)

**Noosfero's Code Quality tool and Rubocop stylesheet setup:**

Here I have set GitLab's default tool to check the code for quality downgrades also have improves a rubocop pipeline check to standardize the code.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1636/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1636/diffs)

**Noosfero's set up of Varnish and Apache services:**

In this case I have integrated Apache and Varnish serves along the docker pipeline that had been previously set in the code.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1616/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1616/diffs)

**Noosfero's Enabling importing CSV in CustomForm module:**

Basically, I have helped to implement CSV sheets importing and exporting by creating an "adapter" class to manage those interactions. Consequently wrote a migration so that older instances kept its data.

[https://gitlab.com/noosfero/noosfero/merge\_requests/1605/diffs](https://gitlab.com/noosfero/noosfero/merge_requests/1605/diffs)

**Klara API's setup of Citus Database:**

Citus horizontally scales PostgreSQL databases across commodity servers using sharding and replication. In this case I had to replace previous Postgres logic to work distributedly with Citus.

[https://gitlab.com/klara-org/klara-api/merge\_requests/4/diffs](https://gitlab.com/klara-org/klara-api/merge_requests/4/diffs)

**Klara API's setting of Sidekiq executor to parallely serve api and jobs, also setting Redis to cache JSON data:**

I think the title is self explanatory on this one. :)

[https://gitlab.com/klara-org/klara-api/merge\_requests/11/diffs](https://gitlab.com/klara-org/klara-api/merge_requests/11/diffs)

**Ruby-Lang's enabling multiple runners in Travis:**

This is a small but very significant contribution to me since Ruby is a great organization. Here I have just set Travis to parallel its jobs to fasten ruby-lang's builds.

[https://github.com/ruby/www.ruby-lang.org/pull/1993/files](https://github.com/ruby/www.ruby-lang.org/pull/1993/files)

**Mapknitter's improving docker, setting Yarn in favor of Bower and upgrading to Rails 4.2.8:**

Here I have contributes to Mapknitter's production environment that is dockerized, by that I have also improved Travis CI settings and consequently mapped some asset precompilation issues, dependencies versioning issues, and so. Despite of not being merged the work I have done here has been used in subsequent merge requests.

[https://github.com/publiclab/mapknitter/pull/363/files](https://github.com/publiclab/mapknitter/pull/363/files)

**Dontfile's upgrade to Rails 5.2.2:**

Dontfile is a small software so upgrading it to Rails 5.2.2 has given me some experience, certainly not a painful one, actually has given me a chance to learn more.

[https://github.com/MatheusRich/dontfile/pull/79/files](https://github.com/MatheusRich/dontfile/pull/79/files)

**Falko API's implementation Adapter design pattern:**

Here I have refactored some old code to "respect" Adapter design pattern so that we could get a more concise code and better modules intercommunication.

[https://github.com/falko-org/Falko-API/pull/149/files](https://github.com/falko-org/Falko-API/pull/149/files)

**Simian Engine's release version 0.0.1:**

In this case I have shipped the first of 3 versions of Simian game engine, with PyPi and DockerHub automated deploy already set.

[https://github.com/Desenho2018-1/simian/pull/32/files](https://github.com/Desenho2018-1/simian/pull/32/files "https://github.com/Desenho2018-1/simian/pull/32/files")

**Falko's setting auto deploy:**

For Falko I have set Travis and Dokku integration to auto deploy a version when a merge request was accepted in master branch.

[https://github.com/falko-org/Falko/pull/170/files](https://github.com/falko-org/Falko/pull/170/files)

**Analizo's Doxyparse set up of auto GitHub release creation process:**

In Analizo's parser module Doxyparse I have implemented an entire automated workflow to generate a new Doxyparse version. I have used mostly shellscripts for this.

[https://github.com/analizo/doxyparse/pull/9/files](https://github.com/analizo/doxyparse/pull/9/files)

[https://github.com/analizo/doxyparse/pull/11](https://github.com/analizo/doxyparse/pull/11)

[https://github.com/analizo/doxyparse/pull/10](https://github.com/analizo/doxyparse/pull/10)

# 

# **Teamwork**

# 

I have experience working with Rational Unified Process, Scrum, XP, SAFe frameworks, but mostly with Scrum/XP. The majority of my experience is working with open source software. I have been now a long-time member of LAPPIS lab, which stands for Advanced Laboratory of Production, Research and Software Innovation). This labs works heavily with Open Source projects, in many tech areas such as ChatBots, Machine Learning, Web Design, Data Analysis and etc. [https://lappis.rocks/#team](https://lappis.rocks/#team "https://lappis.rocks/#team")

I have also previously experienced working in a startup company, it has also been a great experience, working in a multidisciplinar team. [https://tenhoemcasa.com](https://tenhoemcasa.com "https://tenhoemcasa.com/")

# 

# **Passion**

I have started working recently with PublicLab community and what I have loved the most it was how close the core developers get to the new contributors. But one of the things that made me propose to PublicLab it's the idea of using my tech knowledge to fight an important issue as Pollution.

# **Audience**

As a big fan of Open Source technologies I intend to use only free softwares and technologies that are accessible to the community.

# **Commitment**

I truly understand this kind of commitment since I have experience in Open Source projects, that's why I intend will give my full dedication and commitment to this project.