---
title: 'New beta capture interface for Spectral Workbench'
tagnames: spectrometer, spectralworkbench
author: warren
path: /notes/warren/12-12-2013/new-beta-capture-interface-for-spectral-workbench.md
nid: 9875
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/002/405/original/Screen_Shot_2013-12-12_at_11.00.16_AM.png)

# New beta capture interface for Spectral Workbench

by [warren](../profile/warren) December 12, 2013 16:07

December 12, 2013 16:07 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench)

----

I've been working in my spare time on a new interface for capturing spectra, pictured above, which is available at:

https://spectralworkbench.org/capture/beta

It uses the more flexible and robust Bootstrap interface widgets which I've been using on the rest of the site, and combines the mobile and desktop interfaces into a single flexible layout (which means that any feature we add to one will be available for both).

###Features

Some of this is really just reconstructing the features of the old interface in the new one, but one very nice addition is that you can now click to choose the "sampling row" in the mobile interface:

[![Screen_Shot_2013-12-12_at_10.59.27_AM.png](https://i.publiclab.org/system/images/photos/000/002/404/medium/Screen_Shot_2013-12-12_at_10.59.27_AM.png)](https://i.publiclab.org/system/images/photos/000/002/404/original/Screen_Shot_2013-12-12_at_10.59.27_AM.png)

You can also do comparisons and run macros from the beta mobile interface. This is all a bit untidy at present, but now that it's implemented, refining it and adding new features should be much easier. 

[![Screen_Shot_2013-12-12_at_11.00.39_AM.png](https://i.publiclab.org/system/images/photos/000/002/406/medium/Screen_Shot_2013-12-12_at_11.00.39_AM.png)](https://i.publiclab.org/system/images/photos/000/002/406/original/Screen_Shot_2013-12-12_at_11.00.39_AM.png)

_The still-untidy macros pane on the new beta capture interface._

###Questions and next steps

We need to think a bit more about the macro interface and how new macros and additional tools are laid out in this new screen. There's more space than before, but the last interface got cluttered pretty fast, so I'd like to have some overarching layout strategy to avoid that. Also, I'd like to integrate some kind of premade online IDE component in the macros pane, so you can actually prototype in there, as well as search for and run macros. 

Anyhow, feedback and bug reports are welcome; what do you think about making this the default interface? Is it ready? Is it at least better than the old one?