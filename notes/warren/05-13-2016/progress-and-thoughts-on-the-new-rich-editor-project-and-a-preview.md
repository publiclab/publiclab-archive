---
title: 'Progress and thoughts on the new Rich Editor project, and a preview'
tagnames: website, software, web, developers, coding, wwg, rich-editor, wysiwyg
author: warren
path: /notes/warren/05-13-2016/progress-and-thoughts-on-the-new-rich-editor-project-and-a-preview.md
nid: 13114
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/016/176/original/Screenshot_2016-05-13_at_3.33.26_PM.png)

# Progress and thoughts on the new Rich Editor project, and a preview

by [warren](../profile/warren) May 13, 2016 19:39

May 13, 2016 19:39 | Tags: [website](../tag/website), [software](../tag/software), [web](../tag/web), [developers](../tag/developers), [coding](../tag/coding), [wwg](../tag/wwg), [rich-editor](../tag/rich-editor), [wysiwyg](../tag/wysiwyg)

----

As you [may have heard][1], we're writing a new editor for PublicLab.org -- in fact, I'm using an early prototype of it to write this post. Why are we writing a new library? For a few reasons:

### Broadening participation

We're very interested in what makes an editor welcoming and intuitive to first-time posters. Wikipedia's 2013-present [Visual Editor][2] project cited broadened participation from new contributors as one of their top goals, and that's true for us too. A good UI design need not reduce usefulness for experienced contributors in order to make editing easier for newcomers, but it takes some serious design work to accomplish this, beyond just the rich text input area itself. We're hoping that a good UI will do more than attract new contributors, but may diversify the kinds of people who feel comfortable and interested in posting on PublicLab.org.

### Rich text editors are changing a lot

We've long wanted to switch to a "what you see is what you get" rich editor, but a lot of progress has been made in the past year or so, between projects like [ProseMirror][3], [Woofmark][4], and others tackling the challenge of a "better editor" and bringing some new ideas to the table as well. (Check out, for example, this interesting post [by the folks at Medium][5].) We're not looking to compete with these, but rather build a rich and complete editing environment around them, with a fleshed-out look & feel, and due to all the work going on, it's a good time to do this.

### Interface design

One thing we're looking to do is to create staged complexity (a bit Edward Tufte-style) -- to show only the most essential features first (to avoid clutter), but make it intuitive to find and use more advanced features. Slack is pretty good at this -- there are **lots **of features available, but the displayed interface isn't overwhelmingly complex. One thing I like in Slack is that extra information is often shown only when you begin interacting with something -- like when you begin typing, hints appear just below the text box:


[![Screenshot_2016-05-11_at_3.48.13_PM.png](//i.publiclab.org/system/images/photos/000/016/174/large/Screenshot_2016-05-11_at_3.48.13_PM.png)](//i.publiclab.org/system/images/photos/000/016/174/original/Screenshot_2016-05-11_at_3.48.13_PM.png)


  
Likewise, some menus are only shown when you hover your mouse over an element:

[![Screenshot_2016-05-09_at_4.42.11_PM.png](//i.publiclab.org/system/images/photos/000/016/173/large/Screenshot_2016-05-09_at_4.42.11_PM.png)](//i.publiclab.org/system/images/photos/000/016/173/original/Screenshot_2016-05-09_at_4.42.11_PM.png)
  
In our prototype, we've used this idea to show/hide helpful tips, so that the page isn't overrun with advice, and you're only being prompted with assistance related to the area you're focused on. If you wait a couple seconds, you can see this simulated in this gif -- or [try it out yourself](/editor/examples/).  

[![sh-ani.gif](//i.publiclab.org/system/images/photos/000/016/175/large/sh-ani.gif)](//i.publiclab.org/system/images/photos/000/016/175/original/sh-ani.gif)  
  
Anyhow, we're currently only prototyping different ways of creating a hierarchy of information, and not yet at the stage where we're ready to begin actually writing good, helpful tips. 

### Modularization

One more thing -- we're breaking the editor up into smaller modules: zones for the title, the main image, the body, and the tags, for example. We're hoping that this model of development will enable us to re-use large portions of this for different things, like a comments editor or, more importantly, a wiki editor (a project we'll start this summer). Modules will also make it easier to develop and maintain more complex behaviors, such as those which may make up part of our upcoming [Q&A system][6]

We also hope that other communities may be interested in an editor which is designed from the ground up to be friendly and welcoming to authors and contributors. Although we're targeting our own website, [PublicLab.org][7], the editor as a whole will be adaptable to other platforms, and we've talked about making a WordPress plugin available. If other communities use it, others will potentially share the burden of maintenance and of improving and refining the editor. So if you're looking for a rich and friendly editing experience, drop us a line!

  
And while I'm at it, here's a link to the repository where we're developing the editor:

  
https://github.com/publiclab/PublicLab.Editor  

  
Thanks, all!

[1]: https://publiclab.org/notes/warren/04-29-2016/early-design-ideas-for-the-rich-editor-project
[2]: https://en.wikipedia.org/wiki/VisualEditor
[3]: http://prosemirror.net/
[4]: http://bevacqua.github.io/woofmark/
[5]: https://medium.engineering/why-contenteditable-is-terrible-122d8a40e480#.onk8sxsjc
[6]: https://publiclab.org/notes/ananyo2012/05-11-2016/design-ideas-for-expanded-q-a-project
[7]: http://publiclab.org
