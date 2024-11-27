---
nid: 9898
title: Power Tags
path: public/static/wiki/power-tags.md
uid: 1
tagnames: posting,list:plots-dev,power-tags,tags,parent:authoring-help,activity-grids,location:blurred,lat:10,parent:website,lon:106,zoom:6,place:vietnam
---

# Power Tags

**Power tags** are an advanced feature which can add extra functions and layout options to your wiki pages (and sometimes research notes). They are entered like regular tags but follow the format `key:value`. After adding a power tag, you must refresh the page to see changes made. 

To add tags, look for this box at the bottom of a wiki page or research note:


[![tags.png](https://i.publiclab.org/system/images/photos/000/006/790/medium/tags.png)](https://i.publiclab.org/system/images/photos/000/006/790/original/tags.png)

### For Educators: 

* Visit this page to learn how to post your assignment, and have student submissions grouped with it: https://publiclab.org/wiki/requesting-responses

### General power tags 

* `activity:____` -- will list the content in an activity grid set to that tag
* `alert:___` --  will show the feature as alert on that node.
* `events:foo` displays a listing of research notes tagged with "event" and "foo", and a link to post new notes with those tags in the left sidebar. 
* `lang:es` or `iso:es` is the way to indicate language in a research note or event. In this example, `es` indicates Spanish. [View two letter language codes here](https://www.loc.gov/standards/iso639-2/php/code_list.php). 
* `lat:__` and `lon:__` -- will add a location to your note and add a map to the content sidebar. This can also be set in your profile as your user location.
* `zoom:__` with `lat:__` and `lon:__` -- will override the location map zoom to the specified value. Must be between 1 (world) and 18 (building). Also works on your user location for the map on your profile page.
* `locked` -- locks a wiki page from edits except to moderators and admins. An atypical power tag in that it doesn't follow `key:value` format; [documentation here](https://publiclab.org/wiki/locked)
* `redirect:____` -- redirects a page to the page with the specified ID -- i.e. `redirect:100` would redirect to node 100. Does not affect admins or moderators. 
* `series:____` -- displays a message of "This is part of a series on `tagname`." with a link to /tag/tagname
* `parent:foo` adds a bar that links back to a parent wiki page
* `pin:foo` causes the content it is on to show up as featured content above this website's Google Search results when that specific search term is typed in, https://publiclab.org/search?q=foo
* `place` with `lat:____` and `lon:______` tags, will add your page to the map [on the Places page](/places)
* `prompt:_____` - adds a prompt area below a node, to encourage authors to additionally refine their posts (helpful to avoid long post templates)
* `question:____` -- will list the content in as a question on that tag page
* `with:username` adds a co-author to your research note with a live link to the user's profile page, however, the note itself will not show up under that user's profile. 

### Older powertags

These are still supported but we are seeking to phase them out. 

* `abtest:____` – redirects 50% of page visitors to the page of id given, such as `abtest:1234` -- for "user testing" two versions of a page. Admins and moderators not affected. 
* `list:foo` displays recent posts from a Google Group with the name "foo" and a subscription input box
* `sidebar:featured` displays "featured" links and images in the sidebar instead of the usual "related content"
* `sidebar:none` removes the right sidebar, including the edit icons. This not only visually presents the page in a simpler layout, but effectively limits changes to the page by anyone except admins and moderators. 
* `style:minimal` hides the wiki toolbar (but it's accessible via a small caret button)
* `style:nobanner`
* `style:wide` removes the 800px width limit from wiki pages, and allows them to flow full page

****

### Prompt powertags

By adding a `prompt:FOO` power tag on a node, for example via a link to post such as `https://publiclab.org/post?tags=prompt:photo`, the post will display an HTML feature with (in this example) the name `prompt-photo`. 

Using this, admins may create any HTML content to be displayed just under the post - for example, a notice to add a photo to your post, or guidance on further posting. The feature may even include JavaScript functions to add/remove tags (`add_tag('new-tag')`) or comments (`add_comment('This post is ____')`), allowing a sequence of prompts to be generated which guide the user through a more gradual updating or refinement of their post. 

Once a feature named `prompt:______` exists, you may use it on as many posts as you like, and can incorporate it into a posting form link like: https://publiclab.org/post?tags=prompt:YOURPROMPT (substituting your unique prompt name for `YOURPROMPT`).

### Alerts

You can display alerts using power tags. Admins can create new types of alerts which can be displayed on any wiki or note. An example is `alert:testing-2` -- use this tag on your page, and you'll see an example alert appear at the top of the page content (below the title).

Available alerts using this system are:

* `alert:testing-2`
* `alert:under-construction` (shows message `This page is under construction`)

[![alert-testing-2.png](/i/39048)](/i/39048?s=o)

**Admins:** to create new alerts, [create a new Feature](/features) with the name `alert-_____` where the blank is the alert name. For example, for the tag `alert:testing-2`, the feature is named `alert-testing-2`.  The text of the Feature must include the "alert" HTML too, as in [this example](https://gist.github.com/jywarren/b1ef7aea7415fad98b085a96c68db9fa).

****

## Inline power tags

You can now use "inline" power tags in the middle of a research note or wiki page. The first one is for generating a list of notes for a given tag, and is used in this format:

> `[notes:<tagname>]`

For more **advanced inline tagging**, see [Advanced Grids](/n/15582)

For example, to list all notes tagged with `peru`, you can use:

> `[notes:peru]`

Wiki pages can be listed too:

> `[wikis:coqui]`

For a more complex example, you can list all questions on the topic of "infragram" using:

> `[notes:question:infragram]`


#### Thumbnail grids

Either notes or generally `nodes` (notes + wikis) can be displayed as a grid of thumbnail images. The syntax for this is:

> `[notes:grid:coqui]` (for notes)

> `[nodes:grid:coqui]` (for notes + wikis)

#### Buttons

To create a button with text on top that links somewhere outside of publiclab, use:

> `[button:foo:https://www.google.com]`

The above creates a button with a "foo" on top of a button that links to Google. For a button that links somewhere on the site, you can use something like:

> `[button:foo:/questions]`

The above creates a button with the text `foo` on top that links to: "[link you are currently on, you can find this on your address bar]/questions". So if I'm on `https://publiclab.org`, this links to `https://publiclab.org/questions`.

### Advanced grids

More advanced uses like **activity grids** can be found in this post: 

https://publiclab.org/notes/liz/08-30-2016/check-out-these-activity-grids

And in the [requesting responses](https://publiclab.org/wiki/requesting-responses) documentation.

### Inline People Lists

`[people:organizer]` -- will display any people tagged as organizers. Add profile tags on your profile page (admins can do this for anyone)

Example:

[people:organizer]

### Inline Maps

Maps may be embedded inline, displaying content tagged with `lat:___` and `lon:___` location tags. Read more [about inline maps here](/wiki/inline-maps).

### Inline graphs

This feature is still in testing, but allows display of a CSV file as a graph:

`[graph:/i/25356.csv]` will display:

[graph:/i/25356.csv]

****

### Prompts

Prompts let us offer a place on a wiki page where a reader can enter text and it's directly inserted into the text of the wiki page just above the prompt. 

`[prompt :text:Placeholder text]` (without space after `prompt`)

That looks like this when saved:

[prompt:text:Placeholder text]

We can also ask for longer-form text input with the keyword `paragraph` -- but be aware that the "placeholder text" can only hold letters, numbers and spaces -- no punctuation (yet):

`[prompt :paragraph:Placeholder text]` (without space after `prompt`)

That looks like this when saved:

`

[prompt:paragraph:Placeholder text]`

Two identical prompts on one page can cause trouble, but if you add a unique id, you can get around that:

`[prompt :text:Placeholder text:UNIQUE-ID]` (without space after `prompt`)

The prompts are [better documented here](https://jywarren.github.io/short-code-forms/examples/).


There's also this type of "edit here" prompt:

> `[ edit ]` (but without spaces)

Which generates this type of prompt:

[edit]


****

### Automated power tags, not for manual adding

You might see some of these being generated automatically, like when checking the box for a Research Note to be an "Event" or a "question" or when awarding Barnstars to someone's Research Note. Don't manually add these: 

* `event:rsvp` `date:YYYY-MM-DD` `rsvp:username` 
* `barnstar:barnstarname`
* `question:foo` `response:foo`


### Tag aliasing

_This feature is for admins only -- please contact web@publiclab.org with questions._

We've created a system for aliasing tags, which serves a number of purposes:

A) **disambiguation** -- we have both `spectrometer` and `spectrometry` -- as of recently, we'd prefer `spectrometry`. So we make each the alias of the other, and the two become somewhat (but not completely) interchangeable on the site. 

1. When looking at https://publiclab.org/tag/spectrometer, you see content tagged with `spectrometry`, and vice versa.
2. Email notifications do not yet take advantage of aliasing, but may at some point (see below). 

B) **subcategories** -- `multispectral-imaging` contains and is broader than `infragram`.

1. When looking at https://publiclab.org/tag/multispectral-imaging, you should see content tagged with `infragram`.
2. When looking at https://publiclab.org/tag/infragram, you should **NOT** see content tagged with `multispectral-imaging` -- your query is more specific than that.

**Later goals:**

Some aliasing features are more complex and not complete yet. 

**Email subscriptions** - when people subscribe to a tag, they should receive emails when content is posted using a tag that is a (more generalized) alias of the subscribed-to tag. 