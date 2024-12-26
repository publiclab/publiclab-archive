---
title: "Writing a topic page on PublicLab.org"\ntagnames: 'website, guides, how-to, activities, authoring-help, topics, with:a1ahna, topic-pages, activity:website, with:bhamster'
author: warren
path: /notes/warren/03-22-2019/writing-a-topic-page-on-publiclab-org.md
nid: 18779
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/030/526/original/Screen_Shot_2019-03-22_at_12.38.22_PM.png)

# Writing a topic page on PublicLab.org

by [warren](../profile/warren) | March 19, 2019 18:10

March 19, 2019 18:10 | Tags: [website](../tag/website), [guides](../tag/guides), [how-to](../tag/how-to), [activities](../tag/activities), [authoring-help](../tag/authoring-help), [topics](../tag/topics), [with:a1ahna](../tag/with:a1ahna), [topic-pages](../tag/topic-pages), [activity:website](../tag/activity:website), [with:bhamster](../tag/with:bhamster)

----

Creating a topic page is a strategy for organizing community knowledge on the Public Lab website; by grouping peoples' work under common themes, we make it easier to browse and engage with.

## What's a topic page?

Topic pages (like the one pictured above) are wiki pages with simple, high-level names, like "soil" "water" "agriculture" or "datalogging". For example:

- [https://publiclab.org/pipeline-monitoring](https://publiclab.org/pipeline-monitoring)
- [https://publiclab.org/microscopes](https://publiclab.org/microscopes)
- [https://publiclab.org/facilitation](https://publiclab.org/facilitation)

They're for:

- collecting a bunch of related pages and posts at an easy-to-find top-level page
- creating a Q&A around a topic
- presenting information in a clearer, easier-to-digest way
- inviting people to help add to the knowledge base

If you're looking to start a topic page, first look around the site to see if there is already one for your topic; these top-level pages will also lead into "sub-topics" (read more below), so they're a good place to start:

[https://publiclab.org/topics](https://publiclab.org/topics)

Many of these are barely started or need formatting help; read on to learn how to improve them.

---------

### Choosing a name

The first step in making a topic page is to choose a good, short, memorable name that will result in an easy URL to remember, like [**PublicLab.org/air**](http://PublicLab.org/air) or **[PublicLab.org/stormwater](http://PublicLab.org/stormwater)**.

This will also determine the matching **tag name** that we'll be giving to all posts and pages on this topic -- like `pipeline-monitoring` or `water-quality`. Anyone can add tags to a page -- you'll notice these tags on the right side of many pages; this helps link all related content together.

![image description](/i/30524.png "Screen_Shot_2019-03-22_at_12.34.57_PM.png")

**Note:** [PublicLab.org](http://PublicLab.org) URLs follow certain rules: If you go to [https://publiclab.org/water-quality](https://publiclab.org/water-quality), it will direct you to a wiki page at [https://publiclab.org/wiki/water-quality](https://publiclab.org/wiki/water-quality). But if there isn't one, it'll direct to [https://publiclab.org/tag/water-quality](https://publiclab.org/tag/water-quality), which shows a list of content tagged with `water quality`.

### Create a page

You can use a template from this page: [https://publiclab.org/templates;](https://publiclab.org/templates; "https://publiclab.org/templates;") the "Method Template Lite" is a good one to start with.

Or you can start with a blank page and build it up gradually. Create a new wiki page here, and name it with your chosen name:

[https://publiclab.org/wiki/new](https://publiclab.org/wiki/new)

**Note:** the first paragraph of a page is used as the "summary" - it'll appear on the matching tag page; for example, compare [https://publiclab.org/water-quality](https://publiclab.org/water-quality) with [https://publiclab.org/tag/water-quality](https://publiclab.org/tag/water-quality)

### Easy redirects

Sometimes you really want a page like **/water-quality**, but you want people to be able to go to a simpler, easier to remember URL like [https://publiclab.org/water](https://publiclab.org/water "https://publiclab.org/water") too. No problem; we can make redirect pages!

Creating a blank page at [https://publiclab.org/water](https://publiclab.org/water) and adding the tag "redirect:water-quality" will redirect everyone from /water to /water-quality. You can make multiple redirects all leading to the same place. Just be sure that the destination page exists.

> **Example:** /nitrates and /nitrites both go to /nitrogen with redirect tags like `redirect:nitrogen`

---------

## Collecting related pages

Once we have a page, we need to start tagging related pages with the tag name (matching the page URL). So for the page [PublicLab.org/pipeline-monitoring](http://PublicLab.org/pipeline-monitoring), we add the tag `pipeline-monitoring` to any page we want to be grouped with this one. This goes for both research notes (by individual authors) and for wiki pages.

### Parent tags & sub-pages

Most wiki pages that are related, or could be a sub-topic of ours, can be tagged with a special "parent" tag parent:pipeline-monitoring, and this will give them each an automatic link back to our new top-level page. If your pages is too long, you can break it into separate pages and give them this tag.

If you want to display a list of wiki pages on your new topic page, you can use this special code (called an _[inline power tag](/power-tags#Inline+power+tags)_), which will automatically insert a table of wiki pages which have the specified tag, once you publish the page:

> `[wikis:pipeline-monitoring]`

That will show any wiki page tagged with pipeline-monitoring. If you want to show all pages with the "parent tag" leading back here, use:

> `[wikis:parent:pipeline-monitoring]`

Here's how it looks when you hit publish:

![image description](/i/30523.png "Screen_Shot_2019-03-22_at_12.21.55_PM.png")

---------

### Making a Questions section

A common way to start off a topic page is to collect questions on the topic, and show them in a list under a **Questions ** heading. You can do this with a special inline tag for questions:

> `[questions:pipeline-monitoring]`

This is great for posting things for comment, or getting input. Often there are already questions if you go to the tag page and look under the "questions" section. For example, for mining, here are a few:

[https://publiclab.org/questions/tag/mining](https://publiclab.org/questions/tag/mining)

There may be more that aren't yet tagged, and will take some searching around for. Leave a comment below and we can help you out!

### Making an Activities section 

One more thing you can post on a topics page is a list of related activities, or guides. This has a similar inline tag to questions; but for activities:

> `[activities:pipeline-monitoring]`

Read more about activities here: http://publiclab.org/activities

## Step-by-step

There's a lot we can do to improve and refine the huge amount of content across the Public Lab site, but this covers some of the basics. We're working (in [the UI project](/ui)) to make these steps easier or more automatic, and there are lots of small oddities we are working to improve.

Please offer your feedback or ideas for improvements in the comments, and if you get stuck or something doesn't work, we're also happy to help out. Thanks for helping make Public Lab an easier-to-navigate community knowledge base!