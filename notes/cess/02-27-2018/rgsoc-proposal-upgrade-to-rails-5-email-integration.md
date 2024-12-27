---
title: "RGSoC proposal: Upgrade to Rails 5 "

tagnames: 'software, gsoc, soc, response:13975, gsoc-2018, soc-2018, rgsoc-2018, soc-2018-proposals, first-time-poster'
author: cess
path: /notes/cess/02-27-2018/rgsoc-proposal-upgrade-to-rails-5-email-integration.md
nid: 15823
uid: 525958
cids: 18647,18649,18791,18796,18884,18889
---

![](https://publiclab.org/public/system/images/photos/000/023/730/original/upgrade.jpg)

# RGSoC proposal: Upgrade to Rails 5 

by [cess](/profile/cess) | February 27, 2018 07:22

February 27, 2018 07:22 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018), [rgsoc-2018](/tag/rgsoc-2018), [soc-2018-proposals](/tag/soc-2018-proposals), [first-time-poster](/tag/first-time-poster)

----

---------

## About me

**Name :** Ceciliah Wairimu and Stella Ireri

**Github :** [https://github.com/cesswairimu and https://github.com/stlireri  
](https://github.com/cesswairimu)

**Affiliation :** Agile Ventures and Tezza Solutions

**Location :** Nairobi, Kenya

**Email :** [cessmbuguar@gmail.com](mailto:cessmbuguar@gmail.com)

**Project Title :** Upgrade to rails 5

**Gitter :** cess

**Twitter:** [cesswairimu254 and ](https://twitter.com/cesswairimu254)@_stegah

I ( Ceciliah) graduated in December 2017 with a degree in Computer Science . I am currently a mentor and a coach at Rails Girls Nairobi. I am also a member of Agile Ventures, which is a charity dedicated to crowd-sourced learning and software development, where I contribute to open source projects.

## Project description

_Upgrade to Rails 5 -_ Upgrade from the current Rails 4.2 to Rails 5\.

### Abstract/summary (<20 words):

Start upgrading from the models side and running tests to fix any breaks.

### Problem

1: Upgrade to rails 5 to get the great features of Rails 5 - Rails 5 have a couple of additions dealing with perfomance, security andn new features. New features include action cable and test runner, and remove the deprecated features. Also be at the updated version of Rails. From 5.0 its easier to move to the next versions.

---------

### Timeline/milestones

Week 1: Understand the structure of plots2 , update gem dependencies: change rails version in gemfile to read rails 5.0.0., run bundle update:rails and rails app:update

Week 2: Define application classes that are inherited from. These are ApplicationMailer, ApplicationRecord and ApplcationJob. Create these application classes, change mailers, models and jobs to inherit from these respectively.

Week 3: Rails Controller testing: Check changes made in rspec for rails 5, implement and debug

Week 4: Change validations, run tests and fix any breaking tests: Rails 5 has changed the relation to require presence by default for belongs\_to. Create an initializer to explicitly configure this behaviour, and where belongs\_to is optional, add optional in models.

Week 5: Halt chain callbacks and change any parameters inheriting from hash. In Rails 5.0, returning false in an Active Record or Active Model callback
will not have this side effect of halting the callback chain, as in Rails 4.2\. Instead, callback
chains must be explicitly halted by calling throw(:abort). Add this configuration to do this active record configuration for this and test https requests methods

Week 6: Investigate if all gems work as expected and replace where necessary

Week 7: Testing the whole application and fixing failing tests

Week 8: Fixing failing tests and reviewing the whole process

Week 9: Document the whole process, gems substitutions made, any models changed, e.t.c

Week 10: Implement PR review requests.

### Needs

I will need the upgrade documentation which is available from the rails guides site.

A while back I used this [blog](https://hashrocket.com/blog/posts/how-to-upgrade-to-rails-5) when I was helping a friend upgrade and it really helped.

I will be working on this with my teammate(Stella Ireri) .

Equivalent gems to the existing ones which I can get from the ruby gems sites.

I will need to know the basic project structure so as to be able to fix specs which may fail.

### First-time contribution

I made a little contribution last month and I am familiar with the contribution guidelines.Here is the [PR.](https://github.com/publiclab/plots2/pull/2059) I am also in the project's gitter for communication.

[https://github.com/publiclab/plots2/pull/2059](https://github.com/publiclab/plots2/pull/2059)

---------

### Experience

I undertook an undergraduate program in computer science at the university. I chose to do the course because i liked computers and what they can do. In diving deeper to the world of computers, i came to love software development. During my third year break i attended a boot camp where i was first introduced to Ruby, Rails, Version control with git, open source and issue tracking. After the boot camp I joined a community, Agile Ventures, where i learned about sprints, scrums and code enhancement tools like Rubocop and code climate. I contribute to open source projects every now and then. I am one of the leads of Rails Girls Nairobi , where we meet weekly and introduce other ladies to code using Ruby on Rails and how to get involved in open source projects.

Code links:

- l[https://github.com/mboya/mpesa\_stk/pull/6](https://github.com/mboya/mpesa_stk/pull/6) - mpesa-stk : Ruby gem, helped with documentation
- [https://github.com/publiclab/plots2/pull/2059](https://github.com/publiclab/plots2/pull/2059) - PR to add a button in plots
- [https://github.com/code9ty/website/pull/33](https://github.com/code9ty/website/pull/33) - Code9ty Bootcamp website. here, I used Ruby on Rails and bootstarp for development.
- [https://github.com/AgileVent](https://github.com/AgileVent)ures/LocalSupport/pull/425, [https://github.com/AgileVentures/LocalSupport/pull/429](https://github.com/AgileVentures/LocalSupport/pull/429), [https://github.com](https://github.com)/AgileVentures/LocalSupport/pull/479 and [https://github.com/AgileVentures/LocalSupport/pull/423](https://github.com/AgileVentures/LocalSupport/pull/423) - I used Ruby on Rails for development
- [https://github.com/cesswairimu/shahada:](https://github.com/cesswairimu/shahada:) This is a Lecturer -Student communication channel, built using Ruby on Rails,

---------

### Teamwork

Code9ty bootcamp team: We were a team of 7 in the cohort where we collaborated in making applications such as the code9ty website mention above, personal projects during the learning process, and pair programming.

Rails Girls Nairobi : In this community I am a coach and I have two students that I coach who are getting started on Ruby on Rails

_Technovation: I was a coach and had a team of 5 high school girls who I coached make an android application using MIT app Inventor , to solve a problem facing there community._

---------

### Passion

The plots2 project: The idea of open sourcing research data is what interests me most about Public Lab.

### Audience

_This project will be a resource to the whole Public Lab community with the increase in performance, security and addition of new features._

For collaborators it will make it easy to move to the next versions in future.

### Commitment

I will dedicate 8 hours per day to work on this project and work to meet my milestones. I am self-motivated and will involve my teammate in the process of working throughout the project. I will ask for assistance from my coaches if i get a challenge and if they have no solution I will consult the mentor.