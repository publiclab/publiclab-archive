---
title: "Draft of a Public Lab Software Roadmap: Comments welcome!"

tagnames: 'software, code, wwg, software-outreach, soc, diagram, roadmap'
author: warren
path: /notes/warren/05-22-2019/draft-of-a-public-lab-software-roadmap-comments-welcome.md
nid: 19494
uid: 1
cids: 24239,24248,24249,24250,24252,24254,24256,24257,24258,25707,25714,26086,26665,27746,31347
---

![](https://publiclab.org/public/system/images/photos/000/032/413/original/Screen_Shot_2019-05-22_at_5.37.11_PM.png)

# Draft of a Public Lab Software Roadmap: Comments welcome!

by [warren](/profile/warren) | May 22, 2019 19:46

May 22, 2019 19:46 | Tags: [software](/tag/software), [code](/tag/code), [wwg](/tag/wwg), [software-outreach](/tag/software-outreach), [soc](/tag/soc), [diagram](/tag/diagram), [roadmap](/tag/roadmap)

----

Hi, all - we've been working on this idea for a "Roadmap for Public Lab code projects", as part of our goal to improve transparency, discussion, and the sharing of decision-making in the Public Lab code community. We on the Public Lab staff, and people who've been very involved in PL, use a few different venues to discuss/plan/chart our work, including:

- A yearly collection and prioritization of ideas for projects for our Outreachy and Summer of Code programs: [https://publiclab.org/gsoc-ideas](https://publiclab.org/gsoc-ideas "https://publiclab.org/gsoc-ideas")
- Proposals submitted, reviewed, and selected for Outreachy and Summer of Code: [https://publiclab.org/notes/warren/02-28-2019/call-for-summer-of-code-2019-proposals](https://publiclab.org/notes/warren/02-28-2019/call-for-summer-of-code-2019-proposals)
- Our internal staff Web Working Group prioritization spreadsheet (quite complicated) that's updated/reviewed at each staff retreat: [https://docs.google.com/spreadsheets/d/1tXTu5iOUwq52Oy0R2D\_zSdefinxnbKmKpHKaUG1YoYE/edit#gid=407040784](https://docs.google.com/spreadsheets/d/1tXTu5iOUwq52Oy0R2D_zSdefinxnbKmKpHKaUG1YoYE/edit#gid=407040784 "https://docs.google.com/spreadsheets/d/1tXTu5iOUwq52Oy0R2D_zSdefinxnbKmKpHKaUG1YoYE/edit#gid=407040784")
- Our shared community design mockups document (where lots of smaller scale project development happens on a page by page basis): [https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2\_4zc/edit#slide=id.g558b0e2e98\_1\_0](https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2_4zc/edit#slide=id.g558b0e2e98_1_0)

(Above _draft_ diagram [from our Mockups document](https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2_4zc/edit#slide=id.g5a6cac5901_0_0 "https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2_4zc/edit#slide=id.g5a6cac5901_0_0"), NOTE: [updated diagram below](#c26086))

**Update: software overview:** we've just (as of Nov 2020) published a new [Software Overview](/software-overview) page with a detailed description of all our software projects, who uses them, goals and how they interconnect. Take a look!

A roadmap can provide an overall trajectory -- not to replace the above processes, but to link them together into a coherent direction that helps community members stay synchronized and play a larger role in planning out new features, implementing them, and ensuring that activity across the code community matches our community-wide priorities and the mission of our organization.

In this roadmap, I've tried to highlight one specific major change in direction, which is the shift towards a more stable core codebase at [PublicLab.org](http://PublicLab.org), while providing a framework and support for "satellite projects" which are more ambitious and exploratory to happen in a modular way -- much as the Editor project, Leaflet Environmental Layers, Image Sequencer, and others have done. Our hope is that this can provide a more consistent and stable experience for site users, while leaving plenty of opportunities for interesting and innovative projects for our coding community.

Here's the draft:

---------

### Roadmap

The Public Lab Software Roadmap will help us build shared goals around software development, especially for the `plots2` codebase, but also for how we plan/start/build/maintain and even gracefully abandon coding projects at Public Lab.

#### Goals:

1. A more stable [PublicLab.org](http://PublicLab.org) experience whose core functions are consistent and error-free
2. An easier to maintain site that has fewer and fewer bugs
3. New features when appropriate
4. Interesting new projects for people to work on & space to prototype really great ideas that will make the site better
5. Useful tools of all kinds for people across the PL network

#### Problems:

1. People making new features could use more help understanding how they fit into the big picture and what purpose they serve in the broader Public Lab community
2. New features can sometimes disrupt basic site functions - by generating new code
3. Continuous change can be good (site improvements) but also an issue if people constantly have to re-learn core systems

#### Ideas:

1. This Roadmap, to help us coordinate
2. More and better tests to stabilize our code
3. Deprecating old code and aiming for a simpler, less complex core codebase
4. Style Guides (both the [visual style guide here](https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab) and a code style guide!)
5. Spinning out stand-alone "satellite projects" that run on minimal infrastructure (mostly in JavaScript) that can be installed as "modules" on the site, rather than add to the codebase complexity: like the [Editor project](https://github.com/publiclab/PublicLab.Editor/), [Leaflet Environmental Layers](https://github.com/publiclab/leaflet-environmental-layers), [Image Sequencer](https://github.com/publiclab/image-sequencer), and others
6. Allow/encourage rewrites of site functions... (like in React, which was a popular idea this year)... only? ...if they come with good tests (end-to-end system tests?)
7. Identify and rally contributors towards "[big projects](https://github.com/publiclab/plots2/milestones)" (milestones?) and "[priority fixes + features](https://github.com/publiclab/plots2/labels/priority)" (the "priority" label) we're trying to complete and recruit help on (rather than starting new projects? or, at least higher priority than?) to start to complete them and reduce our "technical debt" (is this a good frame? [https://en.wikipedia.org/wiki/Technical\_debt](https://en.wikipedia.org/wiki/Technical_debt))
8. Encourage ppl to choose a segment of the code to specialize in (add your name to a group?) to build longer-term institutional memory and capacity to maintain the codebase (not sure about this one? Would love input!)

Roadmaps are a great way to set a trajectory for a community. Here's a great example from the p5js community: [https://github.com/processing/p5.js/blob/master/developer\_docs/roadmap.md](https://github.com/processing/p5.js/blob/master/developer_docs/roadmap.md)

#### Overall project goals

A clear and specific definition of what we want our website to do (especially what no other platform provides) helps everyone distinguish between "core" functions and "satellite functions," freeing us up to prototype, explore, and innovate in satellite functions, while prioritizing stability in core functions.

So, let's try to describe what makes our platform unique, and what it's core functions are!

Part of this is gotten at in this section of our main README file:

[https://github.com/publiclab/plots2/#what-makes-this-project-different](https://github.com/publiclab/plots2/#what-makes-this-project-different)

> _The people who create our platform make very different design and technology decisions from other projects, and this stems from our deep belief that, to see a change in the world, we must build and maintain systems that reflect our values and principles._

> _From design to system architecture to basic vocabulary and communication patterns, our systems have grown organically since 2010 to support a powerful, diverse, and cooperative network of people capable of taking on environmental problems that affect communities around the world. The platform we have built together speaks to this shared history in many ways, big and small. It reflects input from people facing serious health issues, on-the-ground organizers, policy specialists, hardware hackers, educators, and civil servants._

> _This broad community, and the Public Lab team have facilitated a space where we can discuss, break down, construct, prototype, and critique real-world projects. Together we have shaped a platform that incorporates familiar pieces, but ultimately looks and feels quite different from anywhere else on the internet. Our platform continues to grow and be refined, but it also reflects a commitment to listening to one another, to mutual respect and support, to an awareness of the barriers and challenges presented by gaps in expertise and knowledge, and a sensitivity to the inequalities and power imbalances perpetuated by many mainstream modes of knowledge production and technological and scientific development._

> _Our mutual aims of democratizing inexpensive and accessible do-it-yourself techniques has allowed us to create a collaborative network of practitioners who actively re-imagine the human relationship with the environment. Our goals are supported and facilitated by a system which questions and even challenges how collaborative work can happen._

We could refine or adjust this! Here's a further brainstorm, and we'd love to hear more:

- an easy to use platform for ____ (collaboration, organizing, regional organizing, collaborative project development, building a collective knowledge base?)
- an equitable and respectful space for collaboration
- a knowledge base that builds long-term ...
  - long-term easy-to-access and navigate repo of resources
  - quick and easy access to organizational pages (open hour, barnraising)
  - nuanced search (water quality, education)
  - serendipitous browsing (related, recommended) with human input
  - help to interconnect topics & organize knowledge
- think on: integrating different entry points/perspectives?
- well-integrated with other platforms (social, APIs, things like github or instructables or etc etc)
- good integration with online and real-world events
- for collaborative public research
- clear and easier connections with store (and other PL online ecosystem)
  - and potentially /any/ other site

#### How to get more involved

(This may need more building out)

- Join one of the reviewers groups:
- [https://github.com/publiclab/plots2/issues/4707](https://github.com/publiclab/plots2/issues/4707)
- [https://github.com/publiclab/image-sequencer/issues/656](https://github.com/publiclab/image-sequencer/issues/656)
- [https://github.com/publiclab/plots2/blob/master/doc/CHECKINS.md](https://github.com/publiclab/plots2/blob/master/doc/CHECKINS.md)

---------

That's what we've got so far! We'd love to hear more, as we hope this document evolves into something that we can all look to as we build out projects and community here. Thank you, leave comments below!