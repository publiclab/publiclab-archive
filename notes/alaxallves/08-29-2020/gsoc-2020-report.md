---
title: "GSoC 2020: Mapknitter Export Module and Spectral Workbench upgrades"

tagnames: 'mapknitter, spectral-workbench, gsoc, soc, zoom:16, gsoc2020, exporter-gem, lat:-15.889, lon:-48.015, soc-2020-final'
author: alaxallves
path: /notes/alaxallves/08-29-2020/gsoc-2020-report.md
nid: 24471
uid: 577447
cids: 27309,27310,27314,27317
---

![](https://publiclab.org/public/system/images/photos/000/040/716/original/o-que-%C3%A9-devops-1.png)

# GSoC 2020: Mapknitter Export Module and Spectral Workbench upgrades

by [alaxallves](/profile/alaxallves) | August 29, 2020 02:20

August 29, 2020 02:20 | Tags: [mapknitter](/tag/mapknitter), [spectral-workbench](/tag/spectral-workbench), [gsoc](/tag/gsoc), [soc](/tag/soc), [zoom:16](/tag/zoom:16), [gsoc2020](/tag/gsoc2020), [exporter-gem](/tag/exporter-gem), [lat:-15.889](/tag/lat:-15.889), [lon:-48.015](/tag/lon:-48.015), [soc-2020-final](/tag/soc-2020-final)

----

# What I did

Spectral Workbench is an open-source tool to perform low-cost spectral analysis and to share those results online. It consists of a Ruby on Rails web application for publishing, archiving, discussing, and analyzing spectra online. 

Mapknitter Exporter Sinatra is minimal Sinatra app to run MapKnitter exports in the cloud, using the mapknitter-exporter gem. 

In my Google Summer of Code project I have gotten the chance to work across all three of these repositories and it was plenty of work, trust me. 

A little more about my proposal can be found [here](https://publiclab.org/notes/alaxallves/03-06-2020/gsoc-proposal-2020-spectral-workbench-rails-and-devops-upgrades?_=1583504846)

# Preparing the environment

This kind of work requires a lot of preparation, by this I mean prepare the environment for us to work on, and that’s what I did in Spectral Workbench, Exporter gem and Mapknitter Exporter Sinatra cli projects. 

[Here](https://github.com/publiclab/spectral-workbench/pull/470) I have basically rewrite the docker workflow of the project. Since it was a pretty old repository with very legacy code and practices, it required some restructuring on the configuration files. For instance, the MySQL instance was not dockerized at the time I started the project, and there was no automation that aided the developer to easily get to code.

<br>
<div style="display: block; margin-left: auto; margin-right: auto; width: 85%">
    <img src="https://i.imgur.com/NWwWXkR.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 85%">
</div>
<br>

Still in Spectral, some sort of preparation was required at the continuous integration tool as well, at first it was needed to set up “local” builds for Travis, so that we could obtain a testing environment that simulated faithfully the development/production environment. Besides this, previously it was configured for the CI tool to run all tests at once - what seems to be a nice idea at first, but at long range caused the builds to last “forever”. Then, I have split the test running to execute each test suite separately, thus taking advantage of the parallelism implemented. [Here](https://github.com/publiclab/spectral-workbench/pull/480) and [here](https://github.com/publiclab/spectral-workbench/pull/487) you can find more about the mentioned changes.

When it comes to the Exporter Gem project, the preparation consisted in getting the continuous integration tool (Travis CI) properly set up so it could reflect the project’s environment precisely. And also it included some performance upgrades since it has been also configured a multistage build so that the CI pipelines could run in parallel, and thus faster. This entire work is available at [publiclab/mapknitter-exporter#470](https://github.com/publiclab/spectral-workbench/pull/470).

A similar work to this has been developed at the Mapknitter Exporter Sinatra client project. The preparation for the upcoming updates involved significant changes in the Travis CI tool, this reflected on some performance upgrades since it was configured parallel builds and a script that sets up the packages needed for the application to run. It is also important to note that cache has been configured for every CI tool in each repository, that way, allied to the parallelism, the builds run significantly faster than before. All of this work can be found [here](https://github.com/publiclab/mapknitter-exporter-sinatra/pull/58).

It is important to note that this work regarding the CI tool parallelization and better setup caused the builds to be around 2x faster than before, in all three repositories (Spectral, Exporter Gem and Mapknitter Exporter Sinatra).

# The Rails and DevOps upgrades

After getting a nice test coverage, a proper CI and developing environment we could start with the upgrade itself. It's widely embraced as a good practice to open smaller Pull Requests containing smaller and significant parts of code as in a granular upgrade. One of my plans for the project was obtaining a stable test coverage, by increasing the test coverage for the Spectral Workbench. It is important to say that this part of the plan was not accomplished the way it was planned, the test coverage was being achieved along with the rest of the main project and it did not make part of the “Preparation” phase of the project. 

I have embraced the same work strategy from last year that consisted in creating a _development_ branch where I could merge the changes/hotfixes/upgrades/improvements to such branch then see how it went on the CI tools, and, if successful, keep working with the upgrade or something else. With this I could work faster, since it wouldn't need to wait for the merge approval. Along with that, opening a PR from this _development_ branch to the _main_ branch made my work more transparent to the mentors.

At [this](https://github.com/publiclab/spectral-workbench/pull/499) part of the project I have configured Ruby 2.6, Rails 4.2 and Node 13. This PR already introduced countless benefits for the Spectral project, for example, Strong Parameters feature that was introduced in Rails 4 prevents assigning request parameters to objects unless they have been explicitly permitted. Practically that meant removing the _attr_accessible_ and _attr_protected_ calls from models and adding a new method to the respective controllers to handle the parameters. 

The main advantage of all of this is that they are defined in the controller and can be dynamically assigned in run time _attr_accessible_ was a more static and monolithic way to whitelist attributes, thus making Strong Parameters more flexible. Since every model has been refactored at the previously mentioned PR to give support to the Strong Parameters approach we now have a more modern and trustful code. Talking about security, the usage of strong params to HTTP requests wraps our "payloaded" objects better for requesting, which made the requests better structured.


The majority of gems have also been upgraded, now supporting newer Ruby and Rails. And another good thing that came out of this too was that after the upgrade was complete, it was required a staging environment so that we could test out the changes that were made on the cloud. So along with the help of PublicLab’s sysadmin Sebastian, we have set up an automated staging environment, in a way that when I pushed to a _staging_ branch, I could follow up the Jenkins build on the console and hit an endpoint to verify live the changes I have made. 

The Node version has been upgraded too, thus giving a better support for the javascript dependencies manager at the time, which was Bower. 

In the meantime my good friend Ruturaj was giving me ultra help with tests. All of his work is on the list below:

- https://github.com/publiclab/spectral-workbench/pull/490
- https://github.com/publiclab/spectral-workbench/pull/493
- https://github.com/publiclab/spectral-workbench/pull/494
- https://github.com/publiclab/spectral-workbench/pull/496
- https://github.com/publiclab/spectral-workbench/pull/509
- https://github.com/publiclab/spectral-workbench/pull/511
- https://github.com/publiclab/spectral-workbench/pull/514
- https://github.com/publiclab/spectral-workbench/pull/518

He has been of great help for me, his help and friendship is the living proof of the great community the PublicLab is. He has taken a lot of his time to help me and made me very thankful. Reminded me of the good spirit that it is working with open source software.

<br>
<div style="display: block; margin-left: auto; margin-right: auto; width: 70%">
    <img src="https://static.zerochan.net/Elric.Brothers.full.326239.jpg" style="display: block; margin-left: auto; margin-right: auto; width: 70%">
</div>

_Visual representation of me and Ruturaj teaming up on the project._

<br>

With Ruturaj’s help we got to increase the test coverage by more than 20%, Spectral Workbench went from ~60% to a little more than ~80%. This could be measured right after I got to include and configure SimpleCov to get the test coverage percentages [here](https://github.com/publiclab/spectral-workbench/pull/508).

At the Exporter gem some of my work consisted in refactoring the code base, to do that I counted with the help of Rubocop, a very well known tool in PublicLab’s ecosystem of projects. With Rubocop we got to standardize our coding and present to the newcomers some good coding practices. In a practical manner, one nice thing about this, is that we used the same Rubocop settings as the ones used in Plots2, Mapknitter and Spectral Workbench. [Here](https://github.com/publiclab/mapknitter-exporter/pull/31) is where I have Rubocop for the Exporter Gem, [here](https://github.com/publiclab/spectral-workbench/pull/533) is for Spectral Workbench and [here](https://github.com/publiclab/mapknitter-exporter-sinatra/pull/57) is where I have set Rubocop for Mapknitter Exporter Sinatra, all of them following the same coding rules, thus making the PublicLab's ecosystem more cohesive and uniform.

Later, upgrading to Rails 5 was one task that took a little less time than upgrading to Rails 4, but it had me involved in a lot of different stuff.

During this upgrade, there was a massive refactoring of our routes since this version of Rails doesn't allow abstract routing anymore, due to security issues. So by refactoring, Spectral got less sensitive to security breaches. Also, during this upgrade I have removed Bower completely and set up the latest compatible Yarn, which meant a very significant upgrade for Spectral since Bower has been deprecated and no longer maintained. The entire Rails 5 upgrade can be found [here](https://github.com/publiclab/spectral-workbench/pull/530).

When it comes to testing, a main request of my mentor Jeffrey Warren for this project was the configuration and inclusion of some system tests, and I got to that [here](https://github.com/publiclab/spectral-workbench/pull/537). It is important to notice that this involved configuring ChromeDriver and its adapter gems and also implementing a couple of tests to validate the configuration, which worked very well by the way.

At this point a massive refactoration work has been made at the Mapknitter Exporter Sinatra client at [publiclab/mapknitter-exporter-sinatra#56](https://github.com/publiclab/mapknitter-exporter-sinatra/pull/56). Here I'm just on phase one of Sinatra's modular code styling. According to the Sinatra docs: “When a classic style application is run, all Sinatra::Application public class methods are exported to the top-level.” Also, using the classical style prevents you from running more than one Sinatra application per Ruby process – all calls to these top-level methods are handled by Sinatra::Application, functioning as a singleton. We can avoid these potentially-confusing scoping problems by reorganizing our application into what Sinatra calls the “modular” style - which is what I'm starting to do here. Besides mitigating scoping issues, we could reduce code duplication(by using lambdas) and some other advantages.

And finally, one of my last great contributions was the configuration of GitPod for Spectral Workbench and Mapknitter Exporter Sinatra. GitPod is an online IDE which can be launched from any GitHub page; within seconds, GitPod provides you with a fully working development environment, including a VSCode-powered IDE and a cloud-based Linux container configured specifically for the project. Having GitPod configured provided immense benefits for the community; the configuration for both projects can be found [here](https://github.com/publiclab/spectral-workbench/pull/540) for Spectral Workbench and [here](https://github.com/publiclab/mapknitter-exporter-sinatra/pull/76) for the Mapknitter Exporter Sinatra.

# Other contributions

### Remove `command` from compose files

Here I have helped in PublicLab’s Plots2 project that was failing to start the Passenger web server, causing the application not to start.
Link: [publiclab/plots2#8111](https://github.com/publiclab/plots2/pull/8111)


# Links for every contribution I made on the GSoC period

### Spectral Workbench

- https://github.com/publiclab/spectral-workbench/pull/470
- https://github.com/publiclab/spectral-workbench/pull/480
- https://github.com/publiclab/spectral-workbench/pull/487
- https://github.com/publiclab/spectral-workbench/pull/495
- https://github.com/publiclab/spectral-workbench/pull/499
- https://github.com/publiclab/spectral-workbench/pull/508
- https://github.com/publiclab/spectral-workbench/pull/515
- https://github.com/publiclab/spectral-workbench/pull/516
- https://github.com/publiclab/spectral-workbench/pull/527
- https://github.com/publiclab/spectral-workbench/pull/530
- https://github.com/publiclab/spectral-workbench/pull/533
- https://github.com/publiclab/spectral-workbench/pull/537
- https://github.com/publiclab/spectral-workbench/pull/539
- https://github.com/publiclab/spectral-workbench/pull/540

### Mapknitter Exporter Sinatra

- https://github.com/publiclab/mapknitter-exporter-sinatra/pull/56
- https://github.com/publiclab/mapknitter-exporter-sinatra/pull/58
- https://github.com/publiclab/mapknitter-exporter-sinatra/pull/57
- https://github.com/publiclab/mapknitter-exporter-sinatra/pull/69
- https://github.com/publiclab/mapknitter-exporter-sinatra/pull/76

### Exporter Gem

- https://github.com/publiclab/mapknitter-exporter/pull/27
- https://github.com/publiclab/mapknitter-exporter/pull/31
- https://github.com/publiclab/mapknitter-exporter/pull/37

### Plots2

- https://github.com/publiclab/plots2/pull/8111

