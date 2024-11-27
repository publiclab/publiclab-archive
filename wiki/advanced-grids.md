---
nid: 15582
title: Advanced Grids
path: public/static/wiki/advanced-grids.md
uid: 1
tagnames: parent:power-tags,basic-microscope:,basic-
---

# Advanced Grids

## Thumbnail grids

`[notes:grid:coqui]` will collect notes tagged with `coqui` in a grid of thumbnails:

[notes:grid:coqui]


## Wiki grids

`[wikis:coqui]` will collect wiki pages tagged with `coqui`:

[wikis:coqui]

## Combined grids

You can now use `[nodes:_____]` to show both wikis and notes:

[nodes:purpleair]



## People maps

[map:people:42:-71]

## Exclusive grids

Grids that show content with one tag but not if it has a second tag:

The basic pattern is: `[questions:include!exclude`

So to exclude #basic-microscope:

`[questions:microscopes!basic-microscope]`

[questions:microscopes!basic-microscope]
