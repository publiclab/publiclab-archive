---
title: 'Rich Editor project: Calling for alpha testers!'
tagnames: software, gsoc, developers, code, tags, rich-editor, wysiwyg
author: warren
path: /notes/warren/08-15-2016/rich-editor-project-calling-for-alpha-testers.md
nid: 13353
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/017/619/original/Screenshot_2016-08-15_at_4.55.19_PM.png)

# Rich Editor project: Calling for alpha testers!

by [warren](../profile/warren) August 15, 2016 21:20

August 15, 2016 21:20 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [developers](../tag/developers), [code](../tag/code), [tags](../tag/tags), [rich-editor](../tag/rich-editor), [wysiwyg](../tag/wysiwyg)

----

Hello all -- it's been some time since the [original call for input][1] on the new #rich-editor project, but a huge amount of progress has been made, and we have [a mostly-functioning initial version][2] -- I'm using it right now to write this post.

Now, I'd like to ask for some initial alpha testers to give it a try. There are some rough edges -- see below for some known bugs -- but there's a working "history" module which will do a lot to ensure that you don't lose anything while you type, so I think it's a good time to ask people to try it out and provide some feedback!

#### What to look for

We're looking in part for some feedback on the interface in general -- what it's like to write posts in rich text instead of Markdown, how image uploading works, what are the hiccups and problems you encounter. But we also have some specific features to try out:

- table generation
- various formatting -- headings, blockquotes, lists
- pasting rich content from other sites or even from MS Word... (totally untested!)
- recovering past versions from the history module
- the new tagging interface
- the (still buggy) `@` and `#` autocompletion helpers (see known bugs below)

In general, we'd like to know how close we are to this going live, what features we should enable/disable for a live version (vs. a "beta features" version, perhaps) and how you like the solutions we've come up with. A lot of changes are under the hood, and will enable us to tweak and refine the interface with your input. 

#### Known bugs

- Any autocompletion features (related posts, suggested tags, author name) are still returning very brief "example" results until the new Rich Search system comes online later this month (it's a #gsoc project!)
- Using the `@` and `#` characters triggers an autocompletion menu, but this sometimes results in the cursor moving unexpectedly, or a line being deleted. Please excuse this bug and use the history and undo features to recover any lost typing! To avoid this, simply manually type out #tags and @usernames, instead of hitting enter or using your mouse or arrow keys to select a suggestion. 
- Pasting HTML links seems not always to work properly -- we're looking into this.

Thanks, just reply below in the comments if you'd like to be an alpha tester!

  
To try it out, just go to https://publiclab.org/editor/

[1]: /notes/warren/04-13-2016/call-for-input-on-upcoming-rich-editor-and-rich-wiki-projects-for-publiclab-org
[2]: https://publiclab.org/editor/