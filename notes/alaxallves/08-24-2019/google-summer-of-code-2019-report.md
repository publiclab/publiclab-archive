---
title: Google Summer of Code 2019 Report
tagnames: mapknitter, gsoc, google, barnstar:excessive-enthusiasm, report, 2019, rails-6, gsoc2019, googlesummerofcode, gsoc-2019-final-report
author: alaxallves
path: /notes/alaxallves/08-24-2019/google-summer-of-code-2019-report.md
nid: 20656
uid: 577447

---

![](https://publiclab.org/public/system/images/photos/000/034/830/original/rails-6.0.0.beta.png)

# Google Summer of Code 2019 Report

by [alaxallves](../profile/alaxallves) August 24, 2019 19:18

August 24, 2019 19:18 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [google](../tag/google), [barnstar:excessive-enthusiasm](../tag/barnstar:excessive-enthusiasm), [report](../tag/report), [2019](../tag/2019), [rails-6](../tag/rails-6), [gsoc2019](../tag/gsoc2019), [googlesummerofcode](../tag/googlesummerofcode), [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

----

# What is a MapKnitter

[Mapknitter](https://github.com/publiclab/mapknitter) is a free and open-source software created and run by Public Lab. It lets people upload their own aerial images, position them in a web interface over some existing map data, share it, and export for print. It includes a bunch of sub-components - which contains a JavaScript UI-  but the core application is written in Rails.

## The challenge has been accepted!

My GSoC project was about upgrading Mapknitter project from
Rails 3.2 to Rails 6.0. Initially, the project was running on Rails 3.2. So, to get a smoother upgrade, some steps should be taken before.

I knew that this would involve a lot of work and challenges to overcome, but I got the chance to work with
some stuff I've never imagined I would.

## [The upgrade to Rails 4.2.11](https://github.com/publiclab/mapknitter/pull/578)

This initial upgrade was not only about the basics of an update of this kind. It involved a lot of preparation before it, this means writing a few more tests and refactoring the CI behavior. 

[Kaustubh Nair](https://github.com/kaustubh-nair) took charge of the testing part, and I took charge of the CI part, this has given me a chance to almost entirely change the way _Travis CI_ works inside Mapknitter.

Since opening a PR to main branch was taking a little longer than expected, we have adopted a new strategy in order to work faster. Along with the mentors we came up with the following: Create a _development_ branch where we ourselves could merge our changes/hotfixes/upgrades/improvements to such branch then see how it went on the CI tools, and, if successful, keep working with the upgrade or something else. With this we could work faster, since we wouldn't need to wait for the approval of the merge. Along with that we have opened a PR from this development branch to main branch, to make our work more transparent to the mentors and to ourselves. This strategy has been proven to be very effective since, as I mentioned before, it's one of the things that made possible for us to be ahead of schedule.

During this part of the program, I have mostly worked on setting a proper environment for us to work on top of. That's why I have focused not only on establishing a stable Travis CI but also on stable docker environments.

During the setups, I have realized that Travis had been using our production environment, which is not good at all. So we have successfully split the development/test/production environments and made some improvements to Travis integration by having parallel jobs (what caused the builds to be ~2x faster).

You can find more of my work [here](https://github.com/publiclab/mapknitter/pull/605) and some more improvements [here](https://github.com/publiclab/mapknitter/pull/672).

## [The upgrade to Rails 5.2.3](https://github.com/publiclab/mapknitter/pull/685)

Rails 5.2.3 was the one that took more time and had me involved in a lot of different stuff. Part of this was because we have decided to skip a few versions and went straight ahead with 5.2.3. Great decision by the way!

During this upgrade, I had the opportunity to work with Jenkins. I changed some of its workflows and refactored some of its scripts [here](https://github.com/publiclab/mapknitter/commit/27f8941a4068acde1cd45fd1c7b93f60cae9e754#diff-b67911656ef5d18c4ae36cb6741b7965R3). 

Besides all of this, I got to refactor some of the Rails' Asset Pipeline workflow, this involved entirely using Yarn (totally deprecated Bower) and Sprockets. Also helped to set up some system tests [here](https://github.com/publiclab/mapknitter/pull/936).

Skipping some Rails versions and going straight forward with Rails 5.2.3 came out to be a very smart decision because even though it took a quite long time to finish, actually got us pretty ahead of schedule when we finished it. This made our friend [Vidit Chitkara](https://github.com/viditchitkara) able to start his work on top of our Rails 5 branch, then he started setting _ActionCable_.

Besides Yarn and _ActionCable_, with latest Rails we were able to remove some deprecated initializers and files, improve the database setting and its integration with Mapknitter core and Travis.

In this phase of the project, we were also able to properly use Rubocop linter and stylesheet, following the same standards used in [Plots2](https://github.com/publiclab/plots2) project. Which makes the PublicLab's ecosystem more cohesive and uniform. Now we have a whole single job to keep track of the asset pipeline in Travis, used to keep track of changes made across the libs used in Mapknitter and its changes influence on our codebase.

We have also set Rails' _Bootsnap_ to improve the loading time of our app, since it caches some expensive operations, like HTTP requests.

There was a massive refactoring of our routes since this version of Rails doesn't allow abstract routing anymore, due to security issues. So by refactoring, we've made Mapknitter less sensitive to security breaches. Since we're talking security, we've enforced the usage of strong params to HTTP requests too, which wraps our "payloaded" objects better for requesting.

All of the described above has been majorly done at [publiclab/mapknitter#685](https://github.com/publiclab/mapknitter/pull/685)

## [Upgrade to Rails 6.0.0](https://github.com/publiclab/mapknitter/pull/824)

To get Rails 6.0 running we had to upgrade our Ruby version. Complicated right?! Not really, just had to update our Gemfile and Dockerfile with the desired _Ruby_ version - in our case 2.6.3 - and that's it. Also, a bunch of improvements have been gotten, such as deprecating old patterns in favor of newer ones, using the latest sintax and such.

This upgrade came out to be smoothest of the _upgrade series_ I had been working on. Rudely I just had to run the update task provided by the Rails team - thank God for that task - and also kept on checking the [RailsDiff website](http://www.railsdiff.org) - a loyal friend to help in this kind of upgrade. Along with that, I removed a bunch of unwanted files that had been floating through the project.

### Upcoming work

Is worth to mention that when I finished the Rails 6.0.0 upgrade, I realized that would be super if we had Webpacker setup. This would involve many, many changes in our codebase. But I went straight ahead with this - motivated by our favorable schedule. In simple words, it would merely involve removing _Sprockets_ and starting using _Webpacker_. Piece of cake, right? 

Not really!

But in fact, I got pretty far with this. Actually, you can see everything I accomplished [here](https://github.com/alaxalves/mapknitter/pull/4/files). But this has taken more time than I expected, and after a friendly discussion with my mentors [we decided to keep Webpacker implementation as a future work](https://github.com/publiclab/mapknitter/pull/824#issuecomment-521776258). But I took a lot of advantage of this actually. In fact, getting involved in this Rails 6 + Webpacker thing made me learn SO MUCH about the Rails Asset Pipeline y' all cannot imagine. Not only this, but I got the chance to get my good friend [Arthur Diniz](https://github.com/arthurbdiniz) (_Debian_ GSoC 2019 mentee) to collaborate with us of _PublicLab_, he gave us valuable info y' all can get [here](https://github.com/publiclab/mapknitter/pull/824#issuecomment-523285255).

# Some other cool stuff accomplished

## Rubocop as part of the development flow

After a lot of negotiation, along with my mentors and colleagues, we got to use Rubocop to standardize more our coding and present to the newcomers some good coding practices. Y'all can get most of this [here](https://github.com/publiclab/mapknitter/pull/547). One nice thing about this is that we used the same Rubocop settings as the ones used in [Plots2 project](https://github.com/publiclab/plots2), so we contribute across projects we can actually see patterns that make contributing easier.

## Reduce CI runtime

Since I'm a good old DevOps enthusiast, solving this type of issue is my thing. With [this MR](https://github.com/publiclab/mapknitter/pull/794) I have helped to reduce our build time DRASTICALLY. See the comparative for yourself:


**Before caching:**
<div style="display: block; margin-left: auto; margin-right: auto; width: 95%">
    <img src="https://user-images.githubusercontent.com/19597045/60455123-05a8cd00-9c0c-11e9-9e9b-4263f541c078.png" style="display: block; margin-left: auto; margin-right: auto; width: 85%">
</div>

**After caching:**
<div style="display: block; margin-left: auto; margin-right: auto; width: 95%">
    <img src="https://user-images.githubusercontent.com/19597045/60455136-0ccfdb00-9c0c-11e9-9e25-9a961970b783.png" style="display: block; margin-left: auto; margin-right: auto; width: 85%">
</div>
Pretty neat, huh?!

## Playing with Jenkins

One of the many wonderful experiences that GSoC 2019 have given to me is the opportunity to try tools I have only heard of. One of these tools was the automation server Jenkins.

As I said before, I'm a lover of DevOps, so nothing more pleasing to such creature than having the opportunity to get along with Jenkins. In fact, I got to make some improvements to the continuous delivery method provided by my coder friends of PublicLab. You can get some of the work I have made [here](https://github.com/publiclab/mapknitter/pull/844), [here](https://github.com/publiclab/mapknitter/pull/853) and [here](https://github.com/publiclab/mapknitter/pull/858).

## Setting _ActionCable_

If you guys didn't know my GSoC 2019 was entirely collaborative. Actually in all of the upgrades mentioned before I had the help of [Kaustubh Nair](https://github.com/kaustubh-nair) and many others.

Anyway, setting Action Cable was not in my project scope at all, but [Vidit Chitkara](https://github.com/viditchitkara)(another GSoC 2019 mentee) realized that for the [Mapknitter Image Management and Synchronous Editing project](https://github.com/publiclab/mapknitter/issues/609) we needed _ActionCable_ up and running, and consequently Rails 5. This had us joining forces to get both projects rolling.

<div style="display: block; margin-left: auto; margin-right: auto; width: 85%">
    <img src="https://dailyanimeart.files.wordpress.com/2014/07/uchiha-and-senju-alliance1.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 85%">
</div>


_Visual representation of Vidit Chitkara and me joining forces_


So, to get _ActionCable_ we needed Rails 5 on MapKnitter asap and stable. So Kaustubh and I had it finished, and afterwards I hopped on [publiclab/mapknitter#805](https://github.com/publiclab/mapknitter/pull/805) to get it on top of our [Rails 5 Merge Request](https://github.com/publiclab/mapknitter/pull/685). For _ActionCable_ we had to get a _Puma_ server running, but MapKnitter already uses _Passenger_ as its server. So we need to open another tab in our terminal and `bundle exec puma -C config/puma.rb` right? 

>  NOPE!

We all know this doesn't work on production, so I had to setup [_Foreman_](https://github.com/ddollar/foreman), a powerful gem that allows you to describe a set of processes required to run your application. I had used it before in other projects, so I knew it would work. And it did!


## Some more collaborative stuff

I have accomplished a lot, thanks to many people that helped me. I will list below and quickly describe some more Merges I did with the help of good samaritans.


### [Fixing mismatching dependencies for Yarn](https://github.com/publiclab/mapknitter/pull/803)

Believe it or not, I spent almost 2 weeks working on this issue. Came out to be 4-5 lines of code. This made me a little disappointed. xD

### [Fixing Maps loading](https://github.com/publiclab/mapknitter/pull/885)

I am not the biggest fan of Javascript. But thank God for [Sasha Boginsky](https://github.com/sashadev-sky) (one of my mentors), she has helped me a lot during the project, and [publiclab/mapknitter#885](https://github.com/publiclab/mapknitter/pull/885) was just one the merges she has braved to help me. Not only her but [Jeffrey Warren](https://github.com/jywarren), [Gaurav Sachdeva](https://github.com/gauravano), [Sebastian Silva](https://github.com/icarito), and many others.

### [Plots2](https://github.com/publiclab/plots2)

It's clear that my GSoC project was on top of [Mapknitter](https://github.com/publiclab/mapknitter), but during the program, I also got the chance to work on _Plots2_ project as well. I had the opportunity to fix a few issues there, among those, I could help to set ChromeDriver to system tests [here](https://github.com/publiclab/plots2/pull/5751) and to fix a minor issue regarding the version of Google Chrome browser we also use for system tests [here](https://github.com/publiclab/plots2/pull/6099). 


It's worth to mention that I could quickly fix those bugs in _Plots2_ thanks to a similar issue I got when working on the [_Noosfero_ project](https://gitlab.com/noosfero/noosfero/), right [here](https://gitlab.com/noosfero/noosfero/merge_requests/1687/diffs) and [here](https://gitlab.com/noosfero/noosfero/blob/ebfd6203d47b410c85154fb1d866cca412d24954/script/install-dependencies/debian-stretch.sh). 

# The end?

This was a HUGE article, I know, but it just had to be. This was my first time being a GSoC mentee. 
Contributing to such a large organization as _PublicLab_ was just a fantastic experience! I'll carry on the lessons I've learned for the rest of my life.

Well guys, that's it! GSoC 2019 has been a great experience to me, definitely want to participate again next year.

Special thanks to the entire _PublicLab_ community for trusting me such hard task, but also the _Noosfero_ team and _LAPPIS_ team.

# Important Links

- [My first contribution ever to PublicLab](https://github.com/publiclab/mapknitter/pull/363)

- [The Development branch MR](https://github.com/publiclab/mapknitter/pull/669)

- [Travis CI Improvement](https://github.com/publiclab/mapknitter/pull/672)

- [Splitting the work environments](https://github.com/publiclab/mapknitter/pull/605)

- [Setting Up Rubocop](https://github.com/publiclab/mapknitter/pull/547)

- [Rails 4 Upgrade](https://github.com/publiclab/mapknitter/pull/578)

- [Rails 5 Upgrade](https://github.com/publiclab/mapknitter/pull/891)

- [Jenkins Improvement part 1](https://github.com/publiclab/mapknitter/pull/844)

- [Jenkins Improvement part 2](https://github.com/publiclab/mapknitter/pull/853)

- [Jenkins Improvement part 3](https://github.com/publiclab/mapknitter/pull/858)

- [Fixing Map Loading and the Rails' Assets usage](https://github.com/publiclab/mapknitter/pull/885)

- [ActionCable and Foreman setup](https://github.com/publiclab/mapknitter/pull/956)

- [Rails 6 Upgrade](https://github.com/publiclab/mapknitter/pull/824)

- [Rails 6 Upgrade with WebPacker](https://github.com/alaxalves/mapknitter/pull/4)

- [Kaustubh's Report on GSoC](https://publiclab.org/notes/kaustubh_nair/08-26-2019/gsoc19-mapknitter-rails-upgrade)

- [Vidit's Report on GSoC](https://publiclab.org/notes/vidit/08-26-2019/gsoc-2019-wrapup)

> _This is not a bug, it's a Feature_ - [M. Richard](https://github.com/MatheusRich)
