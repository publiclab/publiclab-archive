---
title: "Call for input on upcoming Rich Editor and Rich Wiki projects for PublicLab.org"

tagnames: 'software, web, blog, developers, wwg, rich-editor, rich-wiki, ui, question:ui'
author: warren
path: /notes/warren/04-13-2016/call-for-input-on-upcoming-rich-editor-and-rich-wiki-projects-for-publiclab-org.md
nid: 12969
uid: 1
cids: 14230,14235,14340,14442,14443,14446,14447,14461,14463
---

![](https://publiclab.org/public/system/images/photos/000/015/522/original/IMG_20160413_163125-2.jpg)

# Call for input on upcoming Rich Editor and Rich Wiki projects for PublicLab.org

by [warren](/profile/warren) | April 13, 2016 20:58

April 13, 2016 20:58 | Tags: [software](/tag/software), [web](/tag/web), [blog](/tag/blog), [developers](/tag/developers), [wwg](/tag/wwg), [rich-editor](/tag/rich-editor), [rich-wiki](/tag/rich-wiki), [ui](/tag/ui), [question:ui](/tag/question:ui)

----

Hi, all - we're launching a new project for the PublicLab.org website to completely revise the research note posting form based on input from various folks. This summer, we'll launch a similar effort to redesign our wiki pages. 

As is always the case in coding, our to-do list could be infinitely long ;-) but I'm hoping to get some of the basic ideas and goals out there in this post, and solicit input and futher suggestions which we'll use to decide on a scope for this project.
 We're looking to achieve our top goals within a defined timeline, so not everything will be incorporated, but we'll do our best to knock the highest items off the list. 


## Rich Editor

The Rich Editor project is focused on the following goals, so far:

* easier, more newcomer-friendly posting experience
* clearer prompts/scaffolding for formatting and tagging your work
* tools to encourage authors to invite others into their work
* not overwhelming authors with too much interface
* backwards compatibility with older notes

Some ways we're hoping to address these will most likely include:

* a rich text, What-You-See-Is-What-You-Get (WYSIWYG) editor (possibly using the [Woofmark library](http://bevacqua.github.io/woofmark/))
* WYSIWYG image upload and management
* more customized interface for different note types (events, questions, etc)
* modularizing parts of the new editor for re-use by others as an independent library (PublicLab.Editor.js or `npm install publiclab-editor`)

Other ideas that could come into play:

* prompting people to describe their work in steps
* prompting for materials/methods -- to enable others to reproduce
* suggested tags interface
* drafts, revisions, better auto-save
* more comprehensive co-authoring
* "write a research note about this" bookmarklet
* inline display of a collection of notes, by tag

Have ideas, want to explore/brainstorm/encourage/caution on any of the above? Please leave a comment!

****

## Rich Wiki

Some of the work on the Rich Editor will likely be re-used in the Rich Wiki project, but wikis are more complex (multiple authors, for one), which is why we're doing this project second. 

There's a lot here, and we have more time to plan, but the overall goals are to:

* make the wiki a more collaborative space
* invite more people in to edit/maintain wikis
* make wikis a place to write together, instead of write over one another
* make edits visible to other authors, so they can be discussed
* make it easier to keep wikis up to date and relevant
* make wikis more of a living document -- a place to work together, not to just dump information


Ideas/plans:

* rich/WYSIWYG editing (built on the Rich Editor work)
* commenting and/or in-line commenting
* commenting UI: speech-bubble icon in margin
* "suggest a change" feature, "resolved" 
* comment history
* editing of subsections: "edit this section"
* more embedding options like maps, data
* concurrent editing? (difficult but possible)
* "staleness" reminders: 
  * top of page notice if no edits in X weeks
  * email notification to all authors/watchers "this page hasn't been updated in a while. Mark it [out-of-date] [needs-help]"
  * listing at `https://publiclab.org/wiki/stale`
* more wiki page templates: guides, events, how-to, etc?
* page "Pulse" as Github does for projects, to see a snapshot of collaboration: https://github.com/publiclab/plots2/pulse/monthly


A couple may be completed earlier as they've become a priority due to an increase in spam:

* wiki edit notifications, subscriptions
* wiki page locking

Anyhow, please jump in with ideas -- we'll likely have to break out some features into separate discussions, so I may break out (at least) the Rich Wikis part of this into its own research note, but either way, we're eager to hear from folks!