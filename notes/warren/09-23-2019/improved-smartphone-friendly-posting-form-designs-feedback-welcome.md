---
title: 'Improved smartphone-friendly posting form designs: feedback welcome!'
tagnames: design, style-guide, ui, one-cranston, onecranston, digital-impact, brown
author: warren
path: /notes/warren/09-23-2019/improved-smartphone-friendly-posting-form-designs-feedback-welcome.md
nid: 20973
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/035/407/original/Screen_Shot_2019-09-23_at_11.32.04_AM.png)

# Improved smartphone-friendly posting form designs: feedback welcome!

by [warren](../profile/warren) September 23, 2019 17:02

September 23, 2019 17:02 | Tags: [design](../tag/design), [style-guide](../tag/style-guide), [ui](../tag/ui), [one-cranston](../tag/one-cranston), [onecranston](../tag/onecranston), [digital-impact](../tag/digital-impact), [brown](../tag/brown)

----

In preparation to support groups like #onecranston and our collaborators at Brown University's Superfund Research Group, we are working to improve how our site works on mobile devices like smartphones and tablets. Right now, the "posting form" is pretty rough on a small screen. So we're starting with just the basics of getting an easy-to-view, easy-to-use posting interface. 

  
But we're also interested in how to easily reference a specific geographic location when you post, as well as how to customize form prompts, so that different groups using the Public Lab website can create different engagement prompts that suit their own projects. Imagine these scenarios:

  
- Asking people to submit old stories about nearby places' industrial histories
- Prompting people to report oil and gas related pollution in their community
- Documenting a set of locations with attached sensor data

We won't be able to hit EVERY use case, and surely some of the more complex ones (like sensor data) may take a little more complex interfaces to do, but I want to just be sure the basic design is clear, works on most devices, and is intuitive, even for folks who don't use their phones a lot for this kind of thing. 

  
We have a design working doc here in case you want to see the nuts and bolts: [https://docs.google.com/presentation/d/16d082sKOBRI3N3CxIYJOOziX1adfHB0gxnNDje654zM/edit#slide=id.g5fee22bbff\_0\_18](https://docs.google.com/presentation/d/16d082sKOBRI3N3CxIYJOOziX1adfHB0gxnNDje654zM/edit#slide=id.g5fee22bbff_0_18)  

  
And here are the sketches (they're not functional yet):

  
### Starting with a Google form

Google has hit a lot of the basic accessibility issues like standardized ways to show placeholder text, so I built a super basic form there, then tried reproducing it in a mockup that would reflect our site's styles. I used an example prompt we brainstormed with folks from #OneCranston. 

  
![image description](/i/35403.png "Screen_Shot_2019-09-23_at_11.32.28_AM.png")

  
Google Forms doesn't have geographic location inputs (in the test form, i just added an image as a fake map), so I added a simple one to our design, based on [our Style Guide draft](https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab). I first tried putting the map at the top, and assuming the current location, but letting people edit it, kind of like in the Lyft app (shown for reference):

  
![image description](/i/35409.png "Screen_Shot_2019-09-23_at_12.42.40_PM.png")

  
One concern is if the form is really long. If prompts get quite in-depth, that could make it more confusing to see where you are in the process, so I added a circular Material Design "call to action" button that floats on the bottom right. My idea was that if you haven't filled the text areas out, it would bring you to the next one, but if you have, it then becomes a "**POST**" button. 

  
Some types of prompts will ask for a photo, like if you're documenting a spill or something. So there needs to be a clear place for that, but it does make the page a lot longer, and the upload interface isn't usually great on phones. I tried (above) adding a secondary circular floating button to add a photo, but I think this needs work. 

  
![image description](/i/35404.png "Screen_Shot_2019-09-23_at_11.32.10_AM.png")

  
### On a map

Finally, in trying to think through where prompts feed into maps, and how maps then invite the addition of more posts, I'm doing a bit of work (still based on the Style Guide) to see how such prompts can be part of a wiki page. This is the part of the design I'm least advanced on, but the basic view seems relatively simple: 

  
![image description](/i/35405.png "Screen_Shot_2019-09-23_at_11.31.55_AM.png")

  
### Input welcome!

  
The above are all in progress, but if you have suggestions, ideas, issues or anything else to add, please jump in in the comments below!