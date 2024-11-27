---
nid: 11533
title: Desktop Spectrometry Kit 3.0
path: public/static/wiki/desktop-spectrometry-kit-3-0.md
uid: 4
tagnames: spectrometer,kits,spectrometry,assembly,list:plots-spectrometry,prompt:spectrometry,beautiful,parent:spectrometry
---

# Desktop Spectrometry Kit 3.0

The **Desktop Spectrometry Starter Kit** (now at version 3.0) is our most recent “reference design” incorporating some community improvements while balancing low cost and relative ease of construction. The DSSK was originally created as part of the Public Lab Spectrometry Project’s goal of identifying suspected oil residue after the BP oil spill. 

We have not yet met all our intended goals for this design, which is still being refined by contributors like you. Explore its capabilities in the [Activity grid](/wiki/spectrometry#Activities), and post your own for others to try. Improve on this design by (for example) adding a sample holder or attaching a light, and contributing to the [Additions & Modifications section](/wiki/spectrometry#Hardware+Mods) section of the main spectrometry page.

* [Capabilities](#Capabilities)
* [Limitations and goals](#Limitations+and+goals)
* [Challenges](#Challenges)
* [Activities](#Activities)
* [Upgrades](#Upgrades)
* [Frequently Asked Questions](#Frequently+Asked+Questions)
* [Assembly](#Assembly) - including link to parts list and plans
* [Get involved in the next revision](#Get+involved+in+the+next+revision)

## Capabilities

Many [basic improvements or additions](#Upgrades) can improve the capabilities of the DS3. But with the starter kit alone, you should be able to:

* Measure spectra with ~3 nanometer resolution ([help refine this](/questions/warren/08-22-2016/how-can-a-spectrometer-s-wavelength-resolution-be-measured))
* Measure light from 400-700 nanometers (roughly the range of human vision) or [more if you upgrade your kit](/wiki/spectrometry#Hardware+Mods)

Can you [propose an experiment](/post) to provide a better answer?

## Limitations & Goals

Because most webcams’ exposure compensation cannot be disabled, we don’t know if or how much colors have been “boosted” between different photos. Because of this, you can compare spectra taken with the same device, but you can't necessarily compare between different devices -- but this is a challenge we’re working towards (see gain calibration in the grid below).

> **Note:** If you are working on an **urgent issue** such as a threat to your or someone else’s health, please know that these techniques may not be ready for your use; it's possible that they never will be. [Read more here](/notes/gretchengehrke/09-29-2016/common-low-cost-technique-limitations)

Add limitations here in the form of questions like "How can we correct for gain compensation in webcams?" so that others can propose solutions. Propose a solution, upgrade, or new feature yourself by first posing the question it addresses:

[notes:question:dssk]

<a href="/post?template=question&tags=question:dssk,question:spectrometry" class="btn btn-primary">Ask a new question</a> to explore further possible upgrades

Here are some which we'd like to adapt into question/answer format:

* Gain calibration: [correct for the gain compensation](/wiki/spectrometry#Upgrades) of most webcams using a calibrated light source
* Improve the rigidity of the device: see [rigidity upgrades](/wiki/spectrometry#Upgrades)
* Attach a [light source and a sample holder](/wiki/spectrometry#Upgrades) to scan samples


****

## Challenges

We're working to refine and improve DIY spectrometry on a number of fronts; here, take a look at the leading challenges we're hoping to solve, and post your own. For now, we're using the Q&A feature, so just click "Ask a question" to post your own challenge.

Be sure to add:

* constraints: expense, complexity
* goals: performance, use cases

[questions:spectrometry-challenge]

****

## Activities

These are some activities specific to the Desktop Spectrometry Starter Kit -- for a full list of activities you can do with a DIY spectrometer, [see the main Spectrometry page](/wiki/spectrometry#Activities)

[activities:dssk]

<a href="/post?tags=activity:spectrometry,activity:dssk,spectrometry,spectrometer,seeks:replications&title=How%20to%20do%20X" class="btn btn-primary">Add your own activity</a> <a href="/post?tags=question:dssk,question:spectrometry,request:activity&template=question&title=How%20do%20I...&redirect=question" class="btn btn-primary">Request an activity guide</a>

_Guides should include a materials list and a step-by-step construction guide with photo documentation. Learn what [makes a good activity here](https://publiclab.org/notes/warren/09-17-2016/what-makes-a-good-activity)._

****

## Upgrades

Have you added to your starter kit, improved it, or redesigned it? Show others how to take it to the next level by posting a build guide here:

[upgrades:dssk]

<a href="/post?tags=upgrade:dssk,upgrade:spectrometry,seeks:builds&title=Spec%20Upgrade:%20[new%20name]" class="btn btn-primary">Add your upgrade guide here</a> <a href="/post?tags=request:upgrade,page:spectrometry&template=question&title=How%20do%20I...&redirect=question" class="btn btn-primary">Request or propose an upgrade</a>

_Mods should include a parts list and a step-by-step construction guide with photo documentation. See an example._

****

## Get involved in the next revision

As these upgrades mature, the Kits initiative will incorporate some into the Desktop Spectrometry Starter Kit itself (depending on cost & complexity) as part of our commitment to [an open hardware design process](/notes/warren/11-16-2015/an-open-open-hardware-development-cycle)

****


## Frequently Asked Questions

This section is for questions about the **Desktop Spectrometry Starter Kit**, specifically. For questions about spectrometry in general, [see this FAQ](/wiki/spectrometry#Frequently+Asked+Questions). 

<a class="btn btn-primary" href="/post?tags=question:dssk,question:spectrometry&template=question">Ask a question about the DSSK</a>

[notes:question:dssk]

****

###Using your spectrometer

Once you've assembled your spectrometer and are ready to use it, plug it in and visit [SpectralWorkbench.org](https://spectralworkbench.org) to begin recording data with it. The web-based software works in the **Chrome, Firefox and Opera browsers** on most computers and smartphones. 

###(Peer) Support

Public Lab is not a corporation; we're an open community of DIY environmental science researchers which you have just joined! The best place to get help is the spectrometry mailing list; to join, sign up in the form to the left. 

The spectrometry mailing list is made up of people like you, who are building and improving open source spectrometry techniques. Ask questions, look for help, and consider helping others too!

You can also post a question on this site; it helps to share some photos or screenshots of what you're trying to do:

[question:spectrometry]

****

# Assembly

Assembly instructions are now provided as a step-by-step activity; leave feedback and ask questions in the comments below the post:

[Desktop Spectrometry Starter Kit 3.0 Assembly Instructions](https://publiclab.org/notes/abdul/10-13-2016/desktop-spectrometry-starter-kit-3-0-instructions) - by @mathew, @warren, and @abdul -- formerly hosted on this page.

### Design files

The card-paper box design files can be found here: https://github.com/publiclab/spectrometer3

## Print assembly instructions

<a href="https://i.publiclab.org/system/images/photos/000/008/968/original/instruction_booklet_1.0-print-halfpage.pdf"><i class="icon icon-file"></i> instruction_booklet_1.0-print-halfpage.pdf</a> - Print a cleaned-up version of this page from a PDF

<a href="https://i.publiclab.org/system/images/photos/000/008/969/original/spectrometer3.0-instructions1.0-booklet.pdf"><i class="icon icon-file"></i> spectrometer3.0-instructions1.0-booklet.pdf</a> - Print a booklet-formatted version from a PDF

****

### Design notes

Here are the series of notes printed on the spectrometer. Notes below by: @amysoyka, @straylight, @wagnerc4, @ygzstc, @cfastie, @stoft, & @Alex-McCarthy.

* lens focus: [/n/7226](/n/7226)
* grating angle: [/n/5964](/n/5964) [/n/5892](/n/5892)
* spectrometer development history: [/n/10691](/n/10691)
* removable slit cards: [/n/11246](/n/11246)

**Spectrometer development:**

* calibration: [/n/191]( /n/191)
* linearity: [/n/10476](/n/10476) [/n/6225](/n/6225)

### Evolution

Consult the following notes on development for the evolution of this design:

* @mathew [paper spectrometer 1](/notes/mathew/11-07-2014/a-paper-spectrometer-design)
* [paper spectrometer 2](/notes/mathew/12-06-2014/a-paper-spectrometer-design-pt-2)