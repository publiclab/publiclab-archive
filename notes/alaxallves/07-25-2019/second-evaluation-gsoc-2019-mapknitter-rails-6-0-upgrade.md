---
title: Second Evaluation (GSoC 2019): Mapknitter Rails 6.0 upgrade
tagnames: mapknitter, gsoc, rails, soc, upgrade, gsoc-2019, soc-2019, gsoc-19, soc-2019-eval
author: alaxallves
path: /notes/alaxallves/07-25-2019/second-evaluation-gsoc-2019-mapknitter-rails-6-0-upgrade.md
nid: 20309
uid: 577447

---

# Second Evaluation (GSoC 2019): Mapknitter Rails 6.0 upgrade

by [alaxallves](../profile/alaxallves) July 25, 2019 13:33

July 25, 2019 13:33 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [rails](../tag/rails), [soc](../tag/soc), [upgrade](../tag/upgrade), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [gsoc-19](../tag/gsoc-19), [soc-2019-eval](../tag/soc-2019-eval)

Time flew by really quick, the second phase of GSoC is nearly over! A lot of challenges have been overcame, but there's also a lot of challenges to come. I have accomplished a lot, more than planned actually, but there's more to come.  

  
Currently me and Kaustubh are pretty ahead of schedule, according to my proposal(available here -\> [https://publiclab.org/notes/alaxallves/04-03-2019/gsoc-proposal-2019-mapknitter-s-rails-upgrade#Coding+Period+(May+27,+2019+-+August+19,+2019)](https://publiclab.org/notes/alaxallves/04-03-2019/gsoc-proposal-2019-mapknitter-s-rails-upgrade#Coding+Period+(May+27,+2019+-+August+19,+2019))) we would be starting Rails 5.1.6 upgrade by now, but we have fixed this and we're already working on Rails 6.0, a pretty good timing.

Okay, what have we accomplished so far(Since GSoC's phase 1):

  
**Rails 4.2.11**

  
In Mapknitter, we have successfully set up Rails 3.2 -\> Rails 4.2.11 upgrading, this involved mostly me, Kaustubh and Cess. During this part I have mostly worked on setting a proper environment for us to work on top of. That's why I have focused on setting a stable Travis CI, and docker environment. During the setups, I have realized that Travis had been using our production environment, which is not good at all. So we have successfully split the development/test/production environments and made some improvements to Travis integration by having parallel jobs(what made the travis build ~2x faster).

Since opening a PR to main branch was taking a little longer than expected, we have adopted a new strategy in order to work faster. Along with the mentors we came up with the following: Create a development branch where we ourselves could merge our changes/hotfixes/upgrades/improvements to such branch than see how it went on the CI tools, then, if successful, keep working with the upgrade or something else. With this we could work faster, since we wouldn't need to wait for approval of the merge. Along with that we have opened a PR from this development branch to main branch, to make our work more transparent to the mentors and to ourselves. This strategy has been proven to be very effective since, as I mentioned before, it's one of the things that made possible for us to be ahead of schedule.

  
That PRs regarding the above are:

[https://github.com/publiclab/mapknitter/pull/605](https://github.com/publiclab/mapknitter/pull/605 "https://github.com/publiclab/mapknitter/pull/605")  

[https://github.com/publiclab/mapknitter/pull/578](https://github.com/publiclab/mapknitter/pull/578 "https://github.com/publiclab/mapknitter/pull/578")

[https://github.com/publiclab/mapknitter/pull/672](https://github.com/publiclab/mapknitter/pull/672 "https://github.com/publiclab/mapknitter/pull/672")

**Rails 5.2.3**

We decided to skip a few releases and go straight forward from Rails 4.2.11 to Rails 5.2.3, which is rails' latest stable. This upgrade is successfully set up and available at the unstable branch already [here](https://jenkins.laboratoriopublico.org/job/Mapknitter-Unstable/166/console). If you're super aware of what is currently set on Mapknitter's main branch right now, you'll realize that Jenkins steps are different, that's because there has been some improvements to Jenkins scripts as well, that was needed since our environment stack would have to be a little different with Rails 5 since its Yarn integration was fully complete.

Since we had a very stable Mapknitter on latest Rails, I'd say very early, our friend Vidit Chitkara was able to start his work on top of our branch, then he started setting Action Cable (which requires Rails 5) to carry out the synchronous image management project(Details [here](https://github.com/publiclab/mapknitter/issues/609)). Besides Yarn and Action Cable, with latest Rails we were able to remove some deprecated initializers and files, improve the database setting and its integration with Mapknitter core and Travis.

In this phase of the project, we were also able to properly use Rubocop linter and stylesheet, following the same standards used in Plots2 project. Which makes the PublicLab's ecosystem more cohesive and uniform. Now we have a whole single job to keep track of the asset pipeline in Travis, used to keep track of chagnes made across the libs used in Mapknitter and its changes influence on our codebase.

We have also set Rails' Bootsnap to improve the loading time of our app, since it caches some expensive operations, like HTTP requests. There was a massive refactoring of our routes, since latest Rails doesn't allow abstract routing anymore, due to security issues, so by refactoring we're made Mapknitter less sensitive to security breaches, since we're talkin security we've enforced the usage of strong params to HTTP requests too, which wraps our payloaded objects better for requesting.

All of the above has been done at:

https://github.com/publiclab/mapknitter/pull/685 (Yes, it's a huge PR xD)
https://github.com/publiclab/mapknitter/pull/803
https://github.com/publiclab/mapknitter/pull/843
https://github.com/publiclab/mapknitter/pull/844
https://github.com/publiclab/mapknitter/pull/853
https://github.com/publiclab/mapknitter/pull/858

Since Rails has been merged to development branch there has been a lot of hotfixes lately, all of them available at:
https://github.com/publiclab/mapknitter/pull/669

**Rails 6.0**

We have just started with Rails 6.0, it needed Ruby >2.5, so it has been done xD. The complete setup of a newer Ruby is done. Also a bunch of upgrade has been set already too, such as deprecating old patterns in favor of newer ones, using latest sintax and such. In order to finish Rails 6.0, I think, we're only need to fix the Webpacker integration, in favor of Sprockets, then it's done. A good reminder is that we're using latest Rails 6.0 available, that is the first release cadidate. So when there's a stabler Rails version we'll need to upgrade that too.

The Rails 6.0-rc1 merge request is available at:

https://github.com/publiclab/mapknitter/pull/824