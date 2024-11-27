---
nid: 18208
title: Inline map testing 
path: public/static/notes/sagarpreet/01-30-2019/inline-map-testing.md
uid: 516343
tagnames: testing,developers
---

# Inline map testing 

A brief guide to embedding maps on \[PublicLab.org\](http://PublicLab.org) pages.  
  
Inline maps are a form of \`inline power tags\` which you can read more about on \[the power tags page\](/wiki/power-tags). These will display any content tagged with \`lat:\_\_\_\_\` and \`lon:\_\_\_\_\` tags showing location, near the provided coordinates.  
  
Basic usage is with \`\[map:content:\_latitude\_:\_longitude\]\`; for example:  
  
\`\[map:content:29.9:-90.0\]\` gets you:  
  
\[map:content:29.9:-90.0\]  
  
\`\[map:content:40.7:-73.9\]\` gets you:  
  
\[map:content:40.7:-73.9\]  
  
A good place to quickly find lat/lon for any place is \[http://osm.org\](http://osm.org) (the URL will change as you pan around).  
  
\### Zoom level  
  
Note how if you specify more precise numbers (more digits), it doesn't search as widely. Also, the precision sets the zoom level of the map, so shorter (less precise) coordinates make for a more zoomed-out map.  
  
\`\[map:content:40.70:-73.90\]\`  
  
\[map:content:40.70:-73.90\]  
  
\### Tag-filtered maps  
  
This type of inline map shows only content tagged with a given tagname. It follows the format \`\[map:tag:\_tagname\_:\_latitude\_:\_longitude\]\`. For example:  
  
\`\[map:tag:infragram:43:-71\]\` shows only nodes tagged with \`infragram\`.  
  
\[map:tag:infragram:43:-71\]  
  
\## Questions on a topic near a place  
  
(we don't currently have a lot of questions tagged with locations, but if we add some it'll work)  
  
\`\[map:tag:question:infragram:43:-71\]\`  
  
\[map:tag:question:infragram:43:-71\]  
  
\## People maps  
  
\[map:people:42:-71\]