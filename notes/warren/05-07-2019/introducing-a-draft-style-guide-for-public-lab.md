---
title: 'Introducing a (draft) Style Guide for Public Lab'
tagnames: website, design, blog, code, interface, style-guide, ui, with:sylvan, pin:ui
author: warren
path: /notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab.md
nid: 19270
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/031/836/original/Screen_Shot_2019-05-07_at_3.25.14_PM.png)

# Introducing a (draft) Style Guide for Public Lab

by [warren](../profile/warren) May 07, 2019 20:07

May 07, 2019 20:07 | Tags: [website](../tag/website), [design](../tag/design), [blog](../tag/blog), [code](../tag/code), [interface](../tag/interface), [style-guide](../tag/style-guide), [ui](../tag/ui), [with:sylvan](../tag/with:sylvan), [pin:ui](../tag/pin:ui)

----

For a long time, folks making new pages and interfaces at [PublicLab.org](http://PublicLab.org) have not had much (if any) guidance or direction, and, understandably, have brought their own ideas to the project. This is great initiative, but we could do a better job setting some clear design conventions, and the whole site would benefit from some more consistency.

@sylvan and I have been working on a Style Guide to serve this purpose. This guide is designed to support coders, designers, and writers building and designing pages on [PublicLab.org](http://PublicLab.org).

We're at a point where we could use some input and feedback, so here's a draft!

Our goals include:

### Simpler and more consistent design

- **Easier to understand and use:** clear and well-explained guidance for design will make it easier to start doing UI work at Public Lab, and easier for people using [PublicLab.org](http://PublicLab.org) to use.
- **Less customization:** using standard libraries like Bootstrap 4 ([http://getbootstrap.com](http://getbootstrap.com)) and less custom code will make it less fragile, more compatible and accessible, and easier to upgrade. We strongly encourage using widely familiar interface design conventions, so people don't to have to "learn how to use [PublicLab.org](http://PublicLab.org)."
- **Easier to maintain:** with a set of standards, it will be clearer what UI /should/ look like, and less likely that it will diverge and become inconsistent or messy. Less code will be easier to maintain at a high level of quality in the long term.
- **More support and guidance** for people designing new pages/interfaces

### Increased stability

- **Better organized UI code:** cleaning up our code, reducing redundancy, and standardizing (and re-using) templates will make it easier for everyone to do good UI design overall.
- **Better UI tests:** our new System Tests enable testing of complex client/server interactions exactly like a user will experience them. We aim for high coverage: [https://github.com/publiclab/plots2/issues/5316](https://github.com/publiclab/plots2/issues/5316)
- **Fewer UI breakages:** all of this should contribute to fewer bugs system-wide.

This guide won't cover every situation, but will establish an overall approach to UI design that all our work should build on cohesively.

Check out the draft style guide here -- comments and input are very welcome!

[https://docs.google.com/presentation/d/1-XHlVn3KQxSjS5WzHgc1l1qvFwqUC5f3-7GXugUP9u4/edit?ts=5cab5403#slide=id.g58d9556a0e\_1\_523](https://docs.google.com/presentation/d/1-XHlVn3KQxSjS5WzHgc1l1qvFwqUC5f3-7GXugUP9u4/edit?ts=5cab5403#slide=id.g58d9556a0e_1_523 "https://docs.google.com/presentation/d/1-XHlVn3KQxSjS5WzHgc1l1qvFwqUC5f3-7GXugUP9u4/edit?ts=5cab5403#slide=id.g58d9556a0e_1_523")

We'll be adding more and more annotations as we go, so that it's clear /why/ we've made these recommendations, and how to apply them.

We'll also be following up in a later version with code samples and links to templates!

****

**Update**

For developing more complex mockups and prototypes, this may be a great tool!

https://www.layoutit.com