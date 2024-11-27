---
nid: 3325
title: New MapKnitter bugfixes
path: public/static/notes/warren/8-17-2012/new-mapknitter-bugfixes.md
uid: 1
tagnames: balloon-mapping,mapknitter
---

# New MapKnitter bugfixes

Just a couple new fixes to MapKnitter which may be worth a re-export if you have a large map. I finally got around to fixing the bug some folks have seen where exported maps are sorted differently, meaning that some images float to the top only on export, even if you saw them sorted differently while editing them. This is now resolved:

https://github.com/jywarren/mapknitter/issues/104

Also, the issue with the center of the map being established only when you *start* editing a map is now fixed (pending final bug checking) and it now re-calculates and saves a map center whenever you deselect an image:

https://github.com/jywarren/mapknitter/issues/115

Happy mapping and as always, report bugs at:

https://github.com/jywarren/mapknitter/issues/new