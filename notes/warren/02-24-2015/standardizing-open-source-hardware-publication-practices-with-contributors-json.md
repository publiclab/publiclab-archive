---
nid: 11636
title: Standardizing open source hardware publication practices with contributors.json
path: public/static/notes/warren/02-24-2015/standardizing-open-source-hardware-publication-practices-with-contributors-json.md
uid: 1
tagnames: open-hardware,attribution,contributing,oshwa
---

# Standardizing open source hardware publication practices with contributors.json

[Alicia Gibb](http://www.oshwa.org/about/our-team/) of OSHWA and I (I'm on their board) cooked up the idea, chatting a few months ago, of a "spec" for a file similar to the CONTRIBUTORS or [CREDITS text files](https://github.com/torvalds/linux/blob/master/CREDITS) found in some FOSS projects -- a kind of text file format for describing your project and providing key information. So, a little broader than just listing contributors, but really fulfilling all of the [Open Source Hardware Definition](http://www.oshwa.org/definition/). As it'd be machine readable, it could form the basis for a repository -- the URLs to these files in different peoples' online posted docs could be scraped and indexed. 

This sample has a lot of ideas, some better than others, but the most minimal example would be really short; just `title`, `version`, `description`, `license`, `contributors`, and `source_files`.

<noscript><code>
{
	"title": "Infragram",
	"variant": "Point & Shoot",
	"version": "v0.0.1",
	"description": "A multispectral camera",
	"documentation": "http://publiclab.org/wiki/infragram",
	"license": "CERN OHL 1.1",
	"license_link": "http://publiclab.org/licenses",
	"contributors": [
		{ "name": "Jeffrey Warren", "email": "jeff@unterbahn.com" },
		{ "name": "Don Blair", "email": "don.blair@organizers.publiclab.org" }
	],
	"source_files": [
		{ "link": "http://publiclab.org/system/images/foo.jpg", "description": "circuit diagram" },
	],
	"bill_of_materials": [
		{ "link": "http://amazon.com/product/mallow", "description": "The marshmallows" },
		{ "title": "duct tape" }
	],
	"builds_upon": [
		{
			"title": "irkit",
			"link": "https://github.com/jywarren/irkit",
			"license": "CERN OHL 1.1",
			"license_link": "http://publiclab.org/licenses"
		}
	]
}
</code></noscript>

<script src="https://gist.github.com/jywarren/a4dafb0f02e731eacb14.js"></script>

Link to Gist example: https://gist.github.com/jywarren/a4dafb0f02e731eacb14

What do you think? It's a slightly more concrete way to kick off any discussions of repositories, and people could begin creating these "contributors.json" files now, which could help in later attempts to create a more comprehensive directory of open hardware projects. 

Basically this is just a rough proposal, but it wouldn't be too hard for Public Lab tool pages to provide such a standardized JSON file, and perhaps others would adopt it as a draft standard?