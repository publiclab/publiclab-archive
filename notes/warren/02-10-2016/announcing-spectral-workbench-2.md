---
title: "Announcing Spectral Workbench 2"

tagnames: 'spectrometer, software, spectral-workbench, developers, code, oil-testing-kit'
author: warren
path: /notes/warren/02-10-2016/announcing-spectral-workbench-2.md
nid: 12677
uid: 1
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/014/220/original/Screenshot_2016-02-10_at_9.27.16_AM.png)

# Announcing Spectral Workbench 2

by [warren](/profile/warren) | February 10, 2016 14:34

February 10, 2016 14:34 | Tags: [spectrometer](/tag/spectrometer), [software](/tag/software), [spectral-workbench](/tag/spectral-workbench), [developers](/tag/developers), [code](/tag/code), [oil-testing-kit](/tag/oil-testing-kit)

----

A couple weeks ago, we soft-launched **[Spectral Workbench 2](https://spectralworkbench.org)**, and today we've turned on these interfaces as the default for all users. This version has been in development for many months, and we've integrated much of the [feedback you've provided starting exactly one year ago](/notes/warren/02-10-2015/planning-for-spectral-workbench-2-0). 

This release includes many exciting new features and upgrades, including:

* a new, more precise and user-friendly [calibration system](/wiki/spectral-workbench-calibration)
* trackable versioning of data with the [Snapshots system](/wiki/spectral-workbench-snapshots)
* reversible changes to your data with the [Operations system](/wiki/spectral-workbench-operations)
* a completely new [Analysis interface](/wiki/spectral-workbench-tools)
* a new, d3-based graphing system
* a [thoroughly documented JavaScript API](/wiki/spectral-workbench-api)
* a Jasmine client-side test suite
* a much-expanded Rails test suite
* improvements and fixes across most pages
* much more! a full listing of features & issues in this relesase [can be found here](https://github.com/publiclab/spectral-workbench/issues?utf8=%E2%9C%93&q=milestone%3A%222.0+launch%22)

****

##What does this mean for you?

Most of the changes are in the Analysis interface; new ways to calibrate, to extract data from images, to manipulate, subtract, and compare spectra. Our hope is that many basic tasks will be easier, more intuitive, more flexible, and more powerful. Many new tasks are now possible as well, including wavelength range limiting, (reversible) smoothing, and as mentioned, subtraction of spectra from other spectra. These tools are built in a new, standardized user interface which is extensible -- we plan to continue adding new features as we go, building on this foundation.

So a few notes on the biggest new features -- ones which will fundamentally change how you interact with data on Spectral Workbench:

![Snapshots screenshot](https://i.publiclab.org/system/images/photos/000/013/616/medium/Screenshot_2016-01-11_at_5.24.33_PM.png)

##What are Snapshots?

Snapshots freeze a specific state of your spectrum so that the data as it exists at that moment can be used in other contexts, for example by other users. It's like **version control for your data** -- if you use a spectrum by reference, such as to calibrate, or in a comparison, you can expect that you'll see the snapshot of that spectrum just as it was when you made that reference (see References vs. Snapshots below). No later changes to the spectrum will affect referring work. Snapshots appear as a "thumbtack" icon in the Operations table, which we'll get to in a moment.

This is a complex feature, so we've created a [thorough overview of Snapshots to help you work with them](/wiki/spectral-workbench-snapshots).

****

![Operations screenshot](//i.publiclab.org/system/images/photos/000/014/218/medium/Screenshot_2016-02-10_at_9.24.11_AM.png)

##What are Operations?

A major change in Spectral Workbench 2 is a system called **Operations** (previously known as PowerTags). When you save a spectrum, you usually have to perform additional operations, sometimes [setting a cross section](#crossSection), certainly calibrating, and sometimes then smoothing or otherwise manipulating the data. But for various reasons, you often want to record and even revert some of those changes. Maybe you want to do them differently, or to recalibrate. 

Operations are the new way to do this. Each time you apply an operation, the resulting dataset is saved in a [snapshot](/wiki/spectral-workbench-snapshots), so that a copy is archived and available in the database without having to run each calculation every time. operations typically feature a `key:value` pair. Creating operations is easy; the Tools pane below each spectrum guides you through creating them with a simple form, and adds your operation when you click Apply. Some operations reference other spectra, for comparison or subtraction. You'll be presented with a menu and search form to find the right spectrum to use.

[Read more about Operations here](/wiki/spectral-workbench-operations)

****

##Videos

In general, I've spent a lot of time rewriting and revising the documentation for all of Spectral Workbench, and new tutorial videos are being posted:


[See tutorial videos](/wiki/spectral-workbench-usage#Videos)

<iframe width="640" height="480" src="https://www.youtube.com/embed/oRL-H5hTyug?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

****

##Troubleshooting

As with any new, complex system, we expect some hiccups as this rolls out. We've massively expanded the test suite for both [server-side](https://github.com/publiclab/spectral-workbench/tree/master/test/) and [client-side](https://github.com/publiclab/spectral-workbench/tree/master/spec/) code, which has already done much to improve reliability and catch problems before they're published. 

But if you have trouble, please help us fix and improve the software by [reporting issues](/wiki/issues) -- we rely on your feedback to address problems!


[![Screenshot_2016-01-26_at_3.06.14_PM.png](//i.publiclab.org/system/images/photos/000/014/219/medium/Screenshot_2016-01-26_at_3.06.14_PM.png)](//i.publiclab.org/system/images/photos/000/014/219/original/Screenshot_2016-01-26_at_3.06.14_PM.png)



##Where's the code?

Do you code? The latest version of Spectral Workbench can always be found on Github at https://github.com/publiclab/spectral-workbench/

If you're interested in contributing, please check out our [Developers page](/wiki/developers) and our guide to [contributing to Public Lab software](/wiki/contributing-to-public-lab-software). We need your help!

****

Anyhow, thanks to everyone who's helped to make this release possible; especially to @liz, @stevie, @stoft, @ygstcu, @cfastie, @justinmanley, @icarito, and the many others who dreamed up features, designed and tested them, found and solved problems, and generally helped to make Public Lab software excellent. And thanks to everyone who was patient and supportive of me and the rest of the SWB team for the past months! 