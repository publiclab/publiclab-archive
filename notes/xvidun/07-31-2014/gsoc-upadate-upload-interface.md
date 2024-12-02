---
nid: 10999
title: GSoC Upadate - Upload Interface
path: public/static/notes/xvidun/07-31-2014/gsoc-upadate-upload-interface.md
uid: 421168
tagnames: mapknitter,gsoc,gsoc-2014,response:10594,upload-interface
---

# GSoC Upadate - Upload Interface

###What I want to do
I've been working on the upload interface for Mapknitter in the past week. In the coming weeks I'm looking to add more features to the interface based on points discussed earlier

I think Justin has completed his work on Leaflet.Illustrate, it might be necessary to discuss on integration.

###My attempt and results

####Features implemented
1. GPS "indicators" for images that indicate if EXIF GPS is available for a uploaded image.
2. "Disable auto-placement" option.
3. New bootstrap modal.

It looks like this! 

[![UI.png](https://i.publiclab.org/system/images/photos/000/005/684/medium/UI.png)](https://i.publiclab.org/system/images/photos/000/005/684/original/UI.png)

I know it looks dirty and having all "GPS indicators" might seem like an overkill, instead we could also simply have just "GPS". Having all indicators was necessary for testing auto-placement, based on feedback I can change them.

####Planned features
1. Need to work on necessary communication between knitter and the upload interface(show/hide, delete image.
2. Listing images from the current region, possibly with a tabbed UI to list both "My images" and "Images from viewport".

###Questions
I'd be happy to hear what you'd like to see in the interface, or any other suggestion.