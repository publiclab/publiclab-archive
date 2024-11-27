---
nid: 13310
title: Photos to 3D
path: public/static/notes/cfastie/07-26-2016/photos-to-3d.md
uid: 554
tagnames: vermont,kite-aerial-photography,kap,sfm,structure-from-motion,autokap,recap-360,autodesk
---

# Photos to 3D

*Above: Part of a 3D model (top) produced by ReCap 360 from 58 kite aerial photos and the same model textured with the photos (bottom). The models are made in "Preview" mode, not "Ultra" mode.*

Public Lab has received support from Autodesk, Inc. to use its software and training to improve the designs of aerial photography rigs and to produce 3D topographic models from aerial photographs. Autodesk created AutoCAD, the long time industry standard CAD (computer-aided design) program. They now have a large suite of engineering and design programs.

Some of us will be using Autodesk's ReCap 360 which allows multiple photos of the same surface or object to be combined into 3D models. While we are waiting for training to begin, I installed ReCap 360 and determined that it apparently allows only
laser and LIDAR scans to be combined into 3D models. The program linked me to an [online version of ReCap 360](https://recap360.autodesk.com) (free account required) which allows photos to be stitched together into 3D models. So I tried it on some old kite photos.

[![Free-687-768.jpg](//i.publiclab.org/system/images/photos/000/017/235/medium/Free-687-768.jpg)](//i.publiclab.org/system/images/photos/000/017/235/original/Free-687-768.jpg)  
*Above: One of 58 kite aerial photos submitted to ReCap 360. I walked the kite around these buildings so I was able to select photos which included views of the buildings from many different angles (but not every angle).*

Last November I flew a Saturn V Rig over the campus of Middlebury College [for other reasons](https://publiclab.org/notes/cfastie/11-08-2015/converging-on-an-1886-viewpoint) and took hundreds of aerial photos. The Saturn V Rig pans and tilts the camera to capture every angle, and I selected 58 photos which included a cluster of campus buildings from all (most) sides. One of the long white buildings was not photographed from the eastern side, so ReCap 360 had no information about that entire side of the building. The 3D model it made reflects this gap in it's database. The western side of the buildings is shown in the lead image above, and you can see the entire model and fly around it here (I think): https://recap360.autodesk.com/fireflyviewer/9c48149fb0d64b1889d4fa5b59a0ac88. [Update: it looks like you need an Autodesk account to see the model][Update: I might have learned how to share this model]

[![AtwaterEast.jpg](//i.publiclab.org/system/images/photos/000/017/236/medium/AtwaterEast.jpg)](//i.publiclab.org/system/images/photos/000/017/236/original/AtwaterEast.jpg)  
*Above: This is the easternmost aerial photo taken during the flight so ReCap 360 had no data about the east side of that building.*

I also submitted some older aerial photos to ReCap 360. These were 2011 KAP photos from ruins of the 17th century British fort at Crown Point New York. These photos were taken using a Brooxes pan/tilt rig and CAMremote autoKAP controller lofted by a Levitation Delta kite. Stitched 360° panoramas from that flight [can be seen here.](http://fastie.net/above-crown-point/)

[![Crown-abovec1600.jpg](//i.publiclab.org/system/images/photos/000/017/237/medium/Crown-abovec1600.jpg)](//i.publiclab.org/system/images/photos/000/017/237/original/Crown-abovec1600.jpg)  
*Above: A couple of dozen KAP photos from 2011 were stitched together by ICE to reveal the plan of the British star fort. Some of these same photos, and many more, were submitted to ReCap 360 to make a 3D model of the fort.*

I submitted 35 photos to the ReCap 360 site, and the model of the fort can be viewed here: https://recap360.autodesk.com/fireflyviewer/9a913fba007443a18cf11f4f16086a9c. (Unless this link does not work.) [Update: it looks like you need an Autodesk account to see the model][Update: I think I figured out how to share models]

[![Crown-20111102-89-2345.jpg](//i.publiclab.org/system/images/photos/000/017/238/medium/Crown-20111102-89-2345.jpg)](//i.publiclab.org/system/images/photos/000/017/238/original/Crown-20111102-89-2345.jpg)  
*Above: One of the 35 photos stitched into a 3D model of the fort. The eastern wall of the earthworks (top left, in deep shadow) is not included in the current model.*

ReCap 360 could not include all of my photos in a model, so one side of the fort is not included. That might be because those photos were looking back into the afternoon sun. ReCap 360 allows control points on individual photos to be linked to other photos already stitched into the model, but I could not get that to work. So the model shown here is incomplete. 

[![Crown2pan.jpg](//i.publiclab.org/system/images/photos/000/017/239/large/Crown2pan.jpg)](//i.publiclab.org/system/images/photos/000/017/239/original/Crown2pan.jpg)  
*Above: A shaded relief depiction of the 3D model (top) and the model textured with the aerial photos used to derive the model (bottom).*

Below is a video of the two models being moved around at the ReCap 360 web site. Both models were stitched in "Preview" mode not "Ultra" mode. I have lots of questions for our instructor about these two modes and also:

- There is no obvious way to get the completed mesh data, or any other data, from the site. Please tell me that is possible. Whoops, that's not a question.
-  Is there a trick for adding new photos to an incompletely stitched model?
-  Does the Windows version of ReCap 360 really not do photos (only scans)?
- How do you share a model with others?
- Does ReCap 360 use GPS data in the EXIF headers of the photos?
- What is the difference between ReCap 360 and [Autodesk's 123D Catch](http://www.123dapp.com/)?

<iframe width="640" height="360" src="https://www.youtube.com/embed/FLHsqdrJ9xw?rel=0" frameborder="0" allowfullscreen></iframe>










