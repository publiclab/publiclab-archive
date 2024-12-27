---
title: "Research Note Workflows"

tagnames: 'research'
author: donblair
path: /notes/donblair/08-11-2014/research-note-workflows.md
nid: 11035
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/007/702/original/researchNotes.png)

# Research Note Workflows

by [donblair](../../../profile/donblair) | August 11, 2014 19:34

August 11, 2014 19:34 | Tags: [research](../tag/research)

----

###What I want to do

Jeff Walker and I have discussed coming up with a research note generation workflow that would fit nicely with our particular needs. The approach described here isn't going to be the right 'research note creation' approach for everyone, or even most people; but we think it'll be a very useful approach for folks who are writing up long, complex research notes, that involve intricate, special formatting. And this approach also has some other nice features (described below).  The basic approach is:

1. Write up a research note on your local computer, in markdown, using your favorite text editor.
2. Use a tool that renders an html version of the research note, based on this markdown file.
3. Put these files (the markdown, the html, and any associated data / images) in a git repository, hosted on github.com
4. Use 'github pages' to serve your html file on the web
5. Create a research note on publiclab.org, and, in the body of the text, embed the resultant 'github page' URL as an "iframe" object in the research note. You can then tag or otherwise edit the research note, as per usual.

First, I'll just jot down what motivated us to follow this approach; then you can see our Google Hangout On Air, where we recorded a little run-through of the process -- which generated the following research note:  http://publiclab.org/notes/walkerjeffd/08-11-2014/kayak-deployment-on-8-7-2014

### Motivation

**Local editing of research notes.** Writing and editing a long, complex document -- journal articles, computer programs, or particularly in-depth research notes -- is hard.  While much of our writing output these days is 'published' online -- via emails, html documents, in shared document folders, or as code that runs on a server -- most of us still choose to do the bulk of our writing on a local computer.  Writing and editing locally has several advantages:

- no stable internet connection is needed
- one usually has access to more powerful text-editing capabilities, and can take advantage of special formatting techniques that might be too esoteric to include in publiclab.org's rendering engine
- it's easier to manipulate and organize the relevant files.

For some of the longer and more complex research notes I've been writing on publiclab.org, I've begun to crave these 'local' tools.

**Collaboration and version control.** Further,  the 'version control' tools used in the software industry have begun to infiltrate document production, and scientific research generally.  It's very useful, in projects that involve collaboration and/or many drafts of the same piece of writing, to use software that can keep track of changes.  

**Literate programming, and replicability.**  Finally, ongoing and increasing concerns about the replicability of scientific research have led some practitioners to imagine new forms of scientific discourse that embed as much of the relevant data and analysis tools in the publication as possible.  For example: if you're writing a research note on the geographic distribution of oil refineries in Louisiana, your research might have involved using a program to scrape some online databases for the locations and names of these refineries; then you might upload this data into a Google Map.  So that others can follow in your footsteps, it'd be great if you could write up a research note that not only displays the outcomes of this procedure, but embeds the actual, executable code necessary to generate those outcomes:  a script that fetches the data online, and formats it for Google Maps; another script that uploads the data to Google Maps.  This way, someone who wanted to replicate your data (or generate similar data, for another location), could simply 'fork' your research note immediately and repeat your process. The procedure we're describing here allows for this.

###My attempt and results

We'll be writing up the below video into a more concise recipe for folks to follow, but it hopefully gives a basic overview of the workflow that Jeff has come up with, and the one we'll be following when writing up more complex research notes: 

<iframe width="560" height="315" src="//www.youtube.com/embed/zv-puLcL3oA?rel=0" frameborder="0" allowfullscreen></iframe>

Feel free to ask any clarifying questions / suggest improvements to the process in the comments below!

