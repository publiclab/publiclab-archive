---
title: "Rig refinement"

tagnames: 'balloon-mapping, kite-mapping, kite-aerial-photography, 3dprinting, kaptery, response:11726'
author: cfastie
path: /notes/cfastie/02-14-2016/rig-refinement.md
nid: 12686
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/014/283/original/TraySupp2pan.jpg)

# Rig refinement

by [cfastie](../../../profile/cfastie) | February 14, 2016 16:18

February 14, 2016 16:18 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [kite-aerial-photography](../tag/kite-aerial-photography), [3dprinting](../tag/3dprinting), [kaptery](../tag/kaptery), [response:11726](../tag/response:11726)

----

*Above: Detail of the base of a camera tray displayed in the slicing program Simplify3D. I placed tiny support structures (darker orange) under the curved base to keep the strands from drooping where the angle was lowest (left panel). On the right is a display of the individual beads of plastic to be printed, including those in the support structures. Color represents the printing speed (blue is slower).*

I got a message from Mark who is printing his own Redstone Rig from the [files at Thingiverse](http://www.thingiverse.com/tag:KAPtery). He had some really good suggestions for improving the models. 

[![RedTrayMock.JPG](//i.publiclab.org/system/images/photos/000/014/284/large/RedTrayMock.JPG)](//i.publiclab.org/system/images/photos/000/014/284/original/RedTrayMock.JPG)  
*Above: A camera tray. These are printed in this position and usually can be printed without support. The rounded lower corners do not always print perfectly without support because each new layer is not laid down on top of an existing layer.*

Mark suggested that the lower corners of the camera tray could be square instead of rounded to make 3D printing simpler.  Sometimes printing the bottom corners without support results in some messy surfaces because each layer cannot be laid down directly on top of a previous layer. Printing some tiny support structures along with the trays can help (see lead image), but the curved surface is rarely perfect. Making the bottom corners less rounded would be a good modification. It will make the part easier to print successfully without having the slicer and printer settings dialed in perfectly. 

[![RedstoneLegMock.JPG](//i.publiclab.org/system/images/photos/000/014/285/large/RedstoneLegMock.JPG)](//i.publiclab.org/system/images/photos/000/014/285/original/RedstoneLegMock.JPG)  
*Above: The Redstone Rig and the bolt-on leg brackets. Leg brackets are printed flat (lower right) and no support must be built during the print. Printing the brackets on their side would require support structures.*

Mark also suggested splitting the leg bracket into two parts and adding the long tube to the model of the upper frame. That way the long tube would be printed vertically, which is the best way to print tubes without support (each layer can be laid down on top of the previous layer).  

The entire leg bracket was originally part of the upper frame but support structures had to be printed for the angled tubes.  It was split off as a separate part to avoid printing with support and to make the part stronger.  The long tube could have remained as part of the upper frame but just got dragged along with the angled tubes.

This arrangement has some advantages. It allows the rig to be flown without any leg brackets to save weight. These same leg brackets are used on the Titan 2 Rig which has a big dual camera tray with integrated leg brackets. So the separate leg brackets are not needed on the upper frame when the Titan 2 Rig carries two cameras. However, the Titan 2 frame can also be used with a single camera tray in which case the independent leg brackets are the only way to attach legs.  The current leg brackets are also used in a [new rig being developed](https://publiclab.org/notes/cfastie/01-27-2016/the-jerkpan), and having the long tube is very handy in that design. Also, integrating the long tube with the two angled tubes does a lot to strengthen the angled tubes which otherwise might be more prone to splitting when a force is applied to an inserted leg.

So the current design is pretty workable, and the leg bracket prints well without support even though that long tube is horizontal. Some of the advantages don’t apply if you are just printing one copy of the Redstone Rig. It’s really great to hear about people modifying the designs for a particular use or to make printing easier on their printer.  The latest versions of the [models for KAPtery rigs are always available for download at Thingiverse](http://www.thingiverse.com/tag:KAPtery) and I include an stl file (goes right into your slicer) and also the Sketchup file (mostly useful if you use Sketchup to design models). I just added a new version of the leg bracket model which allows the nuts to fit better. Guides for printing the models are at the [KAPtery]( http://kaptery.com/guides/).  It’s always good to hear if you have ideas about the models or have made successful prints of the rigs.