---
title: Contributing to Public Lab hardware
tagnames: collaboration, community, open-hardware, contributing
author: warren
path: /wiki/contributing-to-public-lab-hardware.md
nid: 12417
uid: 1

---

# Contributing to Public Lab hardware

by [liz](../profile/liz), [warren](../profile/warren)

November 16, 2015 19:25 | Tags: [collaboration](../tag/collaboration), [community](../tag/community), [open-hardware](../tag/open-hardware), [contributing](../tag/contributing)

----

###Rough Draft

This is a first attempt at a well-documented way for people to post suggested improvements to Public Lab tools, so that they may be integrated into a "base design" -- which will also be the version the [Kits Initiative](/wiki/kits) will produce and ship. [Leave a comment on this post](/notes/warren/11-16-2015/an-open-open-hardware-development-cycle) if you'd like to be involved -- this workflow is evolving!

##Overview

* easy for anyone to post an upgrade
* the maintainers (see below) are responsible for responding to, and attempting to integrate upgrades
* there's public dialogue about what design goals are (see below), and what needs to happen for an upgrade to meet them
* clear expectations and public dialogue about how, when, and why new changes are incorporated

****
##Public dialogue about design goals

As part of technical scoping, and defining what problem a technique / technology addresses, each tool should have at the top of its wiki page the following sections, and discuss these publicly on lists and in notes/comments as part of public dialogue about design goals: 

* What is our environmental concern (concern)
* What policy or general public opinion exists related to our concern (regulations, pressure spots)
* What data gets action taken on our concern (target for measurement)
* Potential strategies to get actionable data (desired capabilities for a technique or tool)
* What technology we are pursuing (current development goals for technique / tool)
* existing functionalities of a technique / tool (if any)

****

##Project maintainers

> Who decides if a change can be integrated?

Great question. Borrowing from [the free software world](https://mako.cc/projects/howto/FreeSoftwareProjectManagement-HOWTO/developers.html) we're proposing that each project will have a "maintainer" who's the point person for reviewing and merging updates, communicating, documentation, etc. That's not to say they'll be a monarch -- maintainers' main job will be communicating between contributors, supporting and shepherding new contributions, and above all **transparency** -- keeping the community up to date on the roadmap, development progress and active design discussions. 

It'll also be their job to ensure that there's a broad base of contribution. If it's too hard to contribute, because the design files are too hard to find or read, or require expensive tools to edit, or because submissions are shouted down by an unfriendly and unhelpful gang of jargon-wielding technocrats, that's a problem! We're hoping to use this project as a pilot to set some standards for openness and accessibility. 

For the Spectrometer project, the maintainer will be @warren, and such documentation is forthcoming -- see below! 

****

##How to contribute

We'll soon be posting draft documentation on how to edit the source production files, but basically we're going to use specially-tagged research notes as `upgrade:toolname` -- so, for the spectrometer, you'd tag your post `upgrade:spectrometer`, and callout the project maintainer in a comment, like this: @warren

To be accepted and merged into the production version, a proposal will have to meet the kit's cost, complexity, materials, and processes specifications. Part of the project team's job is to clearly document these, and to keep them simple and affordable. Actually, those are our first specs; so far, we're thinking that proposed changes must be:

* simple, both to assemble and to manufacture
* affordable
* made of easy to source parts
* broken into small parts if possible
* manufacturable (we'll be posting more about what this means)
* ideally in a format that's ready to be merged into our production files (again, more on this soon)
* submitted and ready by the posted deadline

These requirements ensure that proposals meet some of our broader project goals of accessibility and cost, but also ensure that the [Public Lab Kits Initiative](/wiki/kits) can actually reasonably incorporate and manufacture the changes, and can plan around a known timeline. But never fear -- we'll work with folks to refine their proposals to be compatible -- that's part of the maintainer's responsibility, as mentioned above.

Ideally, and eventually, each tool page following this methodology will display:

* a list of proposed upgrades
* a button to post a proposal
* guidance on what proposals must include and how to contribute

****
##Projects using this methodology 

###Spectrometer
We're piloting this workflow with the [Public Lab Spectrometer project](/wiki/spectrometer), but [leave a comment here](/notes/warren/11-16-2015/an-open-open-hardware-development-cycle) if you'd like a project your involved in to follow it too. 

For the [spectrometer project](/wiki/spectrometer), tag your proposed upgrades with `upgrade:spectrometer`, or click this button:

<a class="btn btn-large btn-primary" href="/post?tags=upgrade:spectrometer,upgrade">Post a spectrometer upgrade</a>

###Riffle Datalogger
Just getting underway (March 2016), not yet incorporated onto http://publiclab.org/wiki/riffle

