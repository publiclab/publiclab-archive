---
title: "Pole photography on a small neighborhood creek"

tagnames: 'boston, polemapping, massachusetts, pole-photography, pole-mapping, creek, northeast, first-time-poster, qgis'
author: kanarinka
path: /notes/kanarinka/11-12-2013/pole-photography-on-a-small-neighborhood-creek.md
nid: 9770
uid: 994
cids: 7532,7534,7543,7547,7555,7566,7740,7749,7753,7756,7778
---

![](https://publiclab.org/public/system/images/photos/000/002/205/original/creek_deep_zoom_thumb.jpg)

# Pole photography on a small neighborhood creek

by [kanarinka](/profile/kanarinka) | November 12, 2013 12:09

November 12, 2013 12:09 | Tags: [boston](/tag/boston), [polemapping](/tag/polemapping), [massachusetts](/tag/massachusetts), [pole-photography](/tag/pole-photography), [pole-mapping](/tag/pole-mapping), [creek](/tag/creek), [northeast](/tag/northeast), [first-time-poster](/tag/first-time-poster), [qgis](/tag/qgis)

----

[![IMG_5617.jpg](https://i.publiclab.org/system/images/photos/000/002/207/medium/IMG_5617.jpg)](https://i.publiclab.org/system/images/photos/000/002/207/original/IMG_5617.jpg)


I'm doing a research project on a small, unnamed creek in my neighborhood for a sensors class. For the project, I'm putting sensors in the creek (light levels, temperature, Ph Probe, water depth, and even a microphone which will stream live sound over the Internet) and creating a networked visualization of the current status of the creek that neighbors can tune into from afar.

My idea for the web visualization is to use pole photography as the central interactive element so that people had a "new" view of the creek in their neighborhood. I want them to be able to zoom in and out of hi resolution imagery but also get an overall sense of the creek's extent and, additionally, make the case for this little bitty creek being pretty important in the overall scheme of things.

<iframe style='width: 640px; height: 480px; margin: 0' frameborder='0' scrolling='no' src='http://research.microsoft.com/en-us/um/redmond/groups/ivm/HDViewSL/HDIFrame.htm?FileName=%3C%3Fxml%20version%3D%221.0%22%3F%3E%0D%0A%3Croot%3E%0D%0A%20%20%3Cimageset%0D%0A%20%20%20%20url%3D%22http://kanarinka.brownbag.me/neighborhoodcreek/creek_deep_zoom_files/%7Bl%7D/%7Bc%7D_%7Br%7D.png%22%0D%0A%20%20%20%20levels%3D%2217%22%0D%0A%20%20%20%20width%3D%2211010%22%0D%0A%20%20%20%20height%3D%2249086%22%0D%0A%20%20%20%20projection%3D%22cylindricalTransverse%22%0D%0A%20%20%20%20thetaMin%3D%2264.197411%22%0D%0A%20%20%20%20thetaMax%3D%22117.021736%22%0D%0A%20%20%20%20phiMin%3D%2253.122124%22%0D%0A%20%20%20%20phiMax%3D%22306.898529%22%0D%0A%20%20%20%20rollPitchYaw%3D%220.000000%200.000000%200.000000%22%0D%0A%20%20%20%20alphaBlend%3D%220%22%0D%0A%20%20%20%20maxZoom%3D%222.000000%22%0D%0A%20%20%20%20tileWidth%3D%22254%22%0D%0A%20%20%20%20tileHeight%3D%22254%22%0D%0A%20%20%20%20tileOverlap%3D%221%22%0D%0A%20%20/%3E%0D%0A%3C/root%3E%0D%0A&amp;FOV=44.057&amp;Yaw=90.61&amp;Pitch=180.01&amp;Viewer=1'></iframe>
_The file you see above is a Deep Zoom export from Microsoft ICE. Click on the zoom buttons to see more detail._


##Pole Photography Test
I [asked around the Public Lab community](https://groups.google.com/forum/#!topic/plots-boston/-9S4dMKnxmU) for how people have done pole photography in the past and what the workflow is like for capturing and stitching images. Liz Barry, Chris Fastie and Gerard Toomstra had some helpful advice and links to prior work. Notably, [Chris' garden map](http://publiclab.org/notes/cfastie/08-11-2013/garden-pap-map) was very similar and gave me the idea of using a fishing pole for a lightweight but tall pole.

I rigged up my Sony Nex-5N camera this weekend to an 8-foot fishing pole using some of the rubber bands and carabiners from my balloon mapping kit. I walked next to the creek for a distance of about 100 feet trying to keep the camera at about the same altitude. Unfortunately my camera shoots REALLY FAST in continuous shooting mode so I captured way more images than I really wanted.

For post-production I downloaded all the images and discarded the blurry ones (about 60-70% of them, very painstaking). I tried aligning a few myself with Photoshop (ouch, slow and difficult to do manually) and then quickly moved to test [Microsoft ICE](http://research.microsoft.com/en-us/um/redmond/groups/ivm/ICE/) which had been recommended by a couple people. Microsoft ICE worked pretty awesomely although it is a huge memory hog and I had to delete about 16GB of files from my computer to get the image exported properly.


##Questions and next steps
This was a great test and I'll probably use this image for my class visualization. I wish the light weren't so uneven but this is workable for a prototype. In the future, I'm hoping to have a neighborhood event with kids and parents where we walk the whole creek, do pole photography on the entirety (probably about a 1/4 - 1/2 mile), make observations and collect water samples to test.

+ Is there a program that will detect blurriness in images and flag them or delete them somehow?
+ Is there any relatively easy way to add geodata to this map? It is not essential that it be georeferenced but it would be nice. I can supply the lat/long coordinates but it seemed like adding that data to the images is non-trivial.
+ Anyone know of good examples of using an aerial image as an interface for exploring environmental data? I'm going to be adding the live, networked sensor outputs to the zooming visualization above along with some sound so that people can "tune in" to the creek and hear what's going on there.