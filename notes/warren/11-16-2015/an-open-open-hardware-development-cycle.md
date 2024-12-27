---
title: "An "open open hardware" development cycle"

tagnames: 'spectrometer, collaboration, community, open-hardware, kits, dsk, kits-initiative, with:mathew, with:liz, open-open-hardware, transparency, with:tonyc'
author: warren
path: /notes/warren/11-16-2015/an-open-open-hardware-development-cycle.md
nid: 12416
uid: 1
cids: 12909,12932,15005,15052
---

![](https://publiclab.org/public/system/images/photos/000/012/764/original/Screenshot_2015-11-13_at_3.30.23_PM.png)

# An "open open hardware" development cycle

by [warren](/profile/warren) | November 16, 2015 19:12

November 16, 2015 19:12 | Tags: [spectrometer](/tag/spectrometer), [collaboration](/tag/collaboration), [community](/tag/community), [open-hardware](/tag/open-hardware), [kits](/tag/kits), [dsk](/tag/dsk), [kits-initiative](/tag/kits-initiative), [with:mathew](/tag/with:mathew), [with:liz](/tag/with:liz), [open-open-hardware](/tag/open-open-hardware), [transparency](/tag/transparency), [with:tonyc](/tag/with:tonyc)

----

Greetings! Starting today, we're adopting a more open, but also more integrated development process for [the Public Lab Spectrometer project](/wiki/spectrometer). 

This is an evolving process building on some of the [discussions we've had about open tool development](http://publiclab.org/notes/liz/09-28-2015/ideas-on-opening-open-hardware), and we hope to learn from this process and adopt it across other Public Lab projects. I'm 'coauthoring' with @mathew, @tonyc and @liz since this post is a distillation of discussions we (and other PL folks as well!) have had.

Our goals in this "open open hardware" methodology are:

* clear instructions for contributing to a design
* low barrier to entry for new contributors
* predictable revision timeline: possible new release every 6 months?
* a transparent roadmap for reviewing and integrating changes
* regular iteration and feedback on proposed changes to help them get prepared for the next release due date
* a "maintainer" for each project who will help coordinate contributions, as well as support and promote dialogue and transparency with contributors
* a single, consistent, versioned, "baseline" design for the project, emphaisizing simplicity & low cost, but upon which advanced mods may be made

More on the exact steps for contributing will be documented on a new ["Contributing to Public Lab Hardware" wiki page](/wiki/contributing-to-public-lab-hardware) soon! But this is going to be an evolving process as we learn :-)

##The Public Lab Desktop Spectrometer v3.1

As part of this process, we'll be collating and merging in a number of changes to the 3.0 Desktop Spectrometer, and collecting the design files -- as well as instructions on how to propose changes -- in the coming weeks. This will be marked as version 3.1, and will be the first in what we hope will become a fairly regular upgrade cycle. 

More on this soon, but version 3.1 will focus on:

* separating the optics from the spectrometer enclosure, to increase rigidity
* more rigidly attaching the DVD grating to the webcam block
* developing a better "trap" for the USB cable to reduce pull on the camera
* generally improving documentation and piloting the iterative design process

I've [already posted one](/notes/warren/11-13-2015/slit-holder-for-desktop-spectrometer) update integrating suggestions and will be posting more and/or helping folks to compile and publish their modifications for the 3.1 revision in coming weeks. 

[![IMG_20151113_111847_3.jpg](//i.publiclab.org/system/images/photos/000/012/750/medium/IMG_20151113_111847_3.jpg)](//i.publiclab.org/system/images/photos/000/012/750/original/IMG_20151113_111847_3.jpg)


##Convergence vs. divergence

Importantly, this isn't an attempt to squash all the amazing variations and diversity of tool-hacking that goes on in the community. It's primarily a means to offer a pathway for such changes and hacks to be merged back into the "trunk" -- which will be the manufactured kit offered by the [Public Lab Kits Initiative](/wiki/kits), as well as a reference design upon which folks can base their modifications. There are a lot of clear advantages to maintaining a cheap, more-standardized reference design. One particularly important reason is to ensure a low-barrier starting point to newcomers; another is to make co-development easier by disseminating a consistent design for easier coordination, data consistency, and troubleshooting. 
