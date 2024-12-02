---
nid: 17494
title: Comment templates
path: public/static/wiki/comment-templates.md
uid: 1
tagnames: location:blurred,templates,lat:28,lon:77,place:india,parent:templates,zoom:6
---

# Comment templates

Authors on PublicLab.org can add a tag to pages to insert a text template into the commenting text input box. This can be useful when soliciting input on an idea, such as in [a call for feedback](/questions/warren/02-21-2018/what-do-you-think-about-this-new-design-sketch-for-a-welcome-page), or a survey. 

## How it works

First, [create a wiki page](/wiki/new?tags=comment-template,template&title=-template) named `______-template` where `______` is something unique. 

Once it's saved, go to the page (a note or question page, or blog -- wiki page comments don't have this yet) and add a tag to that page using the name of your template:

`comment-template:________`

So if your page were created as `/wiki/2018-community-survey-template`, your template tag would be:

`comment-template:2018-community-survey-template`

Once you've done this, reload the page and you should see your template appear!


[![image.png](/i/27554)](/i/27554)


## Advanced

Sometimes you want text that is visible to the commenter as they're writing it, but doesn't appear in the final comment. You can put text in carets in this format, and it'll be hidden once it's posted:

`<!-- this text won't appear in the final comment -->`

The format of the `<!--` and `-->` are very specific, and if you don't follow this pretty exactly, the text may not be hidden. 

****

## Examples

Here are some examples of templates for various purposes (some for pages, not comments):

[wikis:template]

## Questions

[questions:comment-templates]
