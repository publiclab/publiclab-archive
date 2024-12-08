---
title: tms-filter utility mirrored at publiclaboratory.org
tagnames: 
author: warren
path: /notes/warren/4-17-2011/tms-filter-utility-mirrored-publiclaboratoryorg.md
nid: 176
uid: 1

---

# tms-filter utility mirrored at publiclaboratory.org

by [warren](../profile/warren) April 17, 2011 19:14

April 17, 2011 19:14 | Tags: 

I put up a new mirror of the TMS-filter utility I created with folks at JumpStart/OpenMapsCaucasus:

http://tmsfilter.publiclaboratory.org/

Theirs is still up at:

http://tms.mapspot.ge

My original message describing the service:

<blockquote>Hello all - 

At OpenMapsCaucasus/JumpStart and in other places I've had trouble reconciling the standard OSGeo implementation (origin at bottom-left) of TMS which gdal2tiles.py generates, and the OSM convention (origin at top-left).  There may be a simpler way to do this, but for on-the-fly translation between the two implementations, we've created this tool:

http://tms.mapspot.ge/

You enter one or the other, and it generates links for both formats. It asks you to register (name, description etc. all optional) and generates a relatively short URL for each.

Please feel free to use it, fork the source: 

http://github.com/jywarren/tms-filter

or tell us how to improve it. This has, for example, allowed JOSM viewing of gdal2tiles.py derived tiles with minimal fuss.

Jeff</blockquote>