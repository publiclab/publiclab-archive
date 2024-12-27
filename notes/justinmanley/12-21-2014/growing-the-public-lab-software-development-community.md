---
title: "Growing the Public Lab Software Development Community"

tagnames: 'community, server, software, development, software-deployment, developers, barnstar:basic, plots-dev, contributing, software-development, deployment, software-outreach'
author: justinmanley
path: /notes/justinmanley/12-21-2014/growing-the-public-lab-software-development-community.md
nid: 11490
uid: 421556
cids: 10984,10989,10990,10993,10997,10998
---

![](https://publiclab.org/public/system/images/photos/000/008/515/original/contributing.png)

# Growing the Public Lab Software Development Community

by [justinmanley](/profile/justinmanley) | December 21, 2014 19:25

December 21, 2014 19:25 | Tags: [community](/tag/community), [server](/tag/server), [software](/tag/software), [development](/tag/development), [software-deployment](/tag/software-deployment), [developers](/tag/developers), [barnstar:basic](/tag/barnstar:basic), [plots-dev](/tag/plots-dev), [contributing](/tag/contributing), [software-development](/tag/software-development), [deployment](/tag/deployment), [software-outreach](/tag/software-outreach)

----

I have become convinced over the past few months that Public Lab can improve the way we produce software.  Open source software developed by Public Lab - MapKnitter, Infragram, and SpectralWorkbench, to name a few of the most widely-used - powers much of the grassroots scientific research that is central to Public Lab's mission.  Despite this, contributions to Public Lab software come overwhelmingly from a tiny core cadre of developers.

For example, as of now (December 2014), while the main Public Lab mailing list has over 3,100 members and the plots-dev mailing list has about 70 members,

* MapKnitter has five contributors
* SpectralWorkbench has five contributors
* The website publiclab.org has seven contributors
* Infragram has four contributors.

(counting only contributors to the master branch).  Many of these (few) contributors commit to multiple Public Lab projects.

More seriously, code quality is not consistent.  Code is seldom tested, follows no standard conventions, and (in some cases) relies on legacy libraries that are not maintained.  In short, much of Public Lab's codebase flaunts software development best practices and makes joining and maintaining the code more difficult than need be.

### How can we improve?

#### Develop Guidelines for Contributors

I'm starting by putting together a wiki page for Public Lab software contributors.  

There already a wiki page covering [Developing Source Tools with Public Lab](http://publiclab.org/wiki/developing-open-source-tools-public-lab-draft-page) - but this page is more about the philosophy of open-source and the advantages of developing open-source tools as part of a community.  We could use a page that provides a technical guide to working with Public Lab. [Contributing to Public Lab Software](http://publiclab.org/wiki/contributing-to-public-lab-software) is that page.

Compiling a list of development guidelines and best practices is critical to the growth of the Public Lab software development community.  First and most importantly, it will improve the quality of our code.  Prominently published contributor guidelines following standard conventions - and a codebase conforming to those guidelines - are signals to developers of the integrity of an open-source project.  Guidelines are also important for newcomers - folks just getting started with coding - because they provide structure and instruction.

#### Integrate discussion on plots-dev and GitHub Issues

Another thing we might do is to create an [IFTTT](https://ifttt.com) recipe to send an email to the plots-dev list whenever someone opens a bug report for a Public Lab software project on GitHub.  Right now, for the most part, users with issues either send a message to the plots-dev mailing list reporting a bug, or they open an issue on GitHub - but not both.  

Sending a message to the plots-dev mailing list is great.  Really!  Sometimes people don't want to report a bug - they just have questions about how to use the software - and the mailing list is a great place for those questions.  The mailing list is great because everyone who is interested in Public Lab software is on it, so sending a message to the plots-dev list gives that message a wide audience.

But GitHub is where most of the actual work gets done.  New features and bugfixes are pushed to GitHub, and pull requests are discussed on GitHub.  Furthermore, GitHub provides powerful, simple, and expressive tools for engaging with code, including GitHub Issues, diff comments, and todo lists.  The disadvantage of GitHub (at the moment) is that the audience for GitHub issues is vastly smaller than the audience on plots-dev.

The status quo serves to maintain the gulf between technical and non-technical Public Lab contributors.  Issues often start on plots-dev, then migrate over to GitHub Issues once work begins on bugfixes; splitting the discussion across multiple forums like this makes it hard to follow the trajectory of a bug.  It is my hope that integrating plots-dev and GitHub Issues with an IFTTT recipe would make the bugfix process more efficient and get non-technical or non-contributing technical folks involved with the codebase on GitHub in new ways.


### Goals
* Make it easier for technical folks to make high-quality contributions to the Public Lab codebase
* Make it easier for maintainers to accept contributions from the community
* Engage non-technical community members with Public Lab code
* Encourage software development best practices that will make Public Lab software more reliable, easier to maintain, less buggy, and longer-lived

### Questions

As I've worked on the Contributors guide, I've realized that I'm unsure of the proper audience for the guide.  Is it possible to assemble a guide for contributors that is appropriate for non-technical and technical community members alike?  Is it too early to add non-technical content to the Contributors guide (i.e. What is git? What is GitHub?).  This raises a few questions to which I've provided some partial answers:

What forms might non-technical engagement take?

* Get non-technical folks to create a GitHub account and post bug reports on GitHub issues rather than sending it to the plots-dev list (See above).
* In addition to kite-mapping and spectrometry, we might host workshops every now and then focused on getting people set up with GitHub and git and thinking about open-source software.

How might we reach outside of the Public Lab community to engage technical folks?

* Release general-purpose libraries.
* Libraries that are used by the open-source community at large will raise Public Lab's profile in the open-source software community and pique the interest of serious developers who are looking to get involved.
* Leaflet.Illustrate, Leaflet.DistortableImage, and Leaflet.Toolbar are examples of general-purpose libraries (all JavaScript libraries) that have been developed in service of Public Lab products.
* Are there features in other Public Lab software projects - Infragram, SpectralWorkbench - that might be drawn out and developed as a standalone library supporting the Public Lab app?

I envision Public Lab growing to include a community of engineers and software developers who are excited about building open-source software tools and teaching members of the community how to contribute.  What do you think?  Let's get a discussion started!
