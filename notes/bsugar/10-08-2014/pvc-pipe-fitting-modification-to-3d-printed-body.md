---
title: 'PVC Pipe Fitting Modification to 3D Printed Body'
tagnames: spectrometer, countertop-spectrometer, 3d-printing, midwest, barnstar:excessive-enthusiasm, mid-west, response:10066
author: bsugar
path: /notes/bsugar/10-08-2014/pvc-pipe-fitting-modification-to-3d-printed-body.md
nid: 11249
uid: 217812

---

![](https://publiclab.org/public/system/images/photos/000/007/374/original/IMG_2744.JPG)

# PVC Pipe Fitting Modification to 3D Printed Body

by [bsugar](../profile/bsugar) October 08, 2014 01:50

October 08, 2014 01:50 | Tags: [spectrometer](../tag/spectrometer), [countertop-spectrometer](../tag/countertop-spectrometer), [3d-printing](../tag/3d-printing), [midwest](../tag/midwest), [barnstar:excessive-enthusiasm](../tag/barnstar:excessive-enthusiasm), [mid-west](../tag/mid-west), [response:10066](../tag/response:10066)

----

*Special thanks to a friend at my local hometown library for her help in making this possible, and for sending me the many animated gifs enclosed in this note.  Aside from keeping my spirits up, they are as much a part of this research as the product itself.*

###What I want to do (and why I'm interested)

**TL;DR:** I wanted to modify the [3D printed spectrometry housing](http://publiclab.org/notes/RTegelbeckers/02-25-2014/3d-printed-body-for-diy-spectrometry-kit) created by @RTegelbeckers so that it could be used with the [countertop spectrometer](http://publiclab.org/notes/warren/04-17-2013/final-countertop-spectrometer-design).  Here are the <a href="https://i.publiclab.org/system/images/photos/000/007/377/original/diy-spectrometer-housing-w-adapter.stl"><i class="icon icon-file"></i> .STL files</a>, or you can download them and see them rendered [here](http://shpws.me/wiZI) 


**A;DoR** (Awesome Do Read!)

For some reason, I'm obsessed with the [countertop spectrometer](http://publiclab.org/notes/warren/04-17-2013/final-countertop-spectrometer-design).  I've been told cell phones are sometimes better, but I just don't care.  I like the way it looks, and it has a light, and a knob that can dim that light.

At the same time, I've been unsatisfied with the woodblock in electrical conduit setup.  I might have built it incorrectly, but it never quite stayed in place, and I couldn't remove it without having to create new foam tabs.

I was happy to find this [instructable](http://www.instructables.com/id/3D-Printed-spectrometer-using-Public-Lab-DIY-kit/?ALLSTEPS) (oddly not found through Public Lab) and it's accompanying [research note](http://publiclab.org/notes/RTegelbeckers/02-25-2014/3d-printed-body-for-diy-spectrometry-kit) designed by @RTegelbeckers, of a 3D printed housing for the spectrometer that contains a built-in wood block equivalent for the webcam (amongst other interesting features).

However, this version did not contain the outlet that allows for the attachment to the PVC piping necessary to convert it to the countertop spec.  I figured this would be as good an opportunity as any to try my hand at modifying it.

Fortunately, I have a friend at my hometown library who was willing to help me print it.  

###My attempt and results

I was very pleased to find that McMaster Carr has 3D cad files for the [original housing](http://www.mcmaster.com/#7154k73/=u1xol9).  They're in STEP format, and the only 3D modeling software I had (and could understand how to use was) was [SketchUp](http://www.sketchup.com/?gclid=CLnJ4YrWm8ECFQooaQod4YAADw) (ney Google SketchUp).  The folks who took over SketchUp no longer provide that feature for free.  Good news! SketchUp has extensions that can handle [STEP files](https://extensions.sketchup.com/en/content/simlab-step-importer-sketchup).  Bad news.  You can only use it 15 times or for two weeks, which ever comes first.

My plan was to create a test version of just the adapter to make sure it fit the PVC pipe, and then attach it to the plans from @RTegelbeckers.  Instead of importing the whole housing and then slicing it, I found a [1" adapter](http://www.mcmaster.com/#4880k73/=u1xtq6) that was the same size as the pipe that would fit into the original housing (though not threaded).  Then, I created a rectangle (er...[cuboid](http://www.mathsisfun.com/geometry/cuboids-rectangular-prisms.html)), and used the extrusion tool (the one that looks like a stamp) to create a small base, and affixed the adapter to it.  

Affixing the adapter was enormously difficult as SketchUp does not come with great tools for making sure that it is level.  It comes with even worse tools for measuring.  Eventually, I got it right.  Then, I also wanted to create a cap so that when I used it for the oil testing kit, I could block the light out.  Now, if you're smarter than me, you're probably thinking that I don't need that.  Hold that thought.

To make the cap, I downloaded a [3/4" inch adapter](http://www.mcmaster.com/#4880k72/=u1y1gr) which has a 1 5/16" outer diameter.  I then crated a circle, and once again, used the extruder tool to pull it out, and spent an inordinate amount of time fitting it.  One thing to note, SketchUp by default creates circles that are really highly sided polygons.  To get something that's actually circular, set it to 100 sides or so.  After checking all of measurements, I sent it off to my friend to print.  The makerbot that they have (and I imagine most 3D printers) require that the file be in .STL format.  The SketchUp extension for which can be found [here](https://extensions.sketchup.com/en/content/sketchup-stl).  As an aside, it is probably easier to import the extensions from within SketchUp, so you can just search for "STEP" and "STL" respectively.

[![Screen_Shot_2014-10-07_at_7.41.29_PM.png](https://i.publiclab.org/system/images/photos/000/007/353/medium/Screen_Shot_2014-10-07_at_7.41.29_PM.png)](https://i.publiclab.org/system/images/photos/000/007/353/original/Screen_Shot_2014-10-07_at_7.41.29_PM.png)

You'll notice that in one of the pictures, the head of the cap has a circle around it.  This means that inside, the shapes are not actually joined together.  When it printed, the outer circle of the cap fell off.  

[![IMG_2718.JPG](https://i.publiclab.org/system/images/photos/000/007/354/medium/IMG_2718.JPG)](https://i.publiclab.org/system/images/photos/000/007/354/original/IMG_2718.JPG)

My friend knew what to do, and introduced me to a [repair tool](https://modelrepair.azurewebsites.net/index.php) hosted by Microsoft and powered by NetFab which is for just this purpose.  And voila! (Note, for the rest of this note, assume that I ran the files through NetFab everytime I went to print).

The only problem with this was that the 3D printer extrudes plastic in such a way that it leaves ridges which made the cap difficult to get out once it was put in.  I sanded down the ridges and drilled a hole in the base (in case suction was an issue) and even then I could not get fit all the way.  

[![IMG_2700.JPG](https://i.publiclab.org/system/images/photos/000/007/357/medium/IMG_2700.JPG)](https://i.publiclab.org/system/images/photos/000/007/357/original/IMG_2700.JPG)

[![IMG_2683.JPG](https://i.publiclab.org/system/images/photos/000/007/355/medium/IMG_2683.JPG)](https://i.publiclab.org/system/images/photos/000/007/355/original/IMG_2683.JPG)

Fortunately, I knew that the diameter of the actual adapter and cap did fit the corresponding PCV pipes.

[![photo_1.JPG](https://i.publiclab.org/system/images/photos/000/007/359/medium/photo_1.JPG)](https://i.publiclab.org/system/images/photos/000/007/359/original/photo_1.JPG)

I attempted to create a smaller cap by decreasing the diameter of the fitting and reducing the surface area of the fitting (why I thought I needed the latter in the first place I can't say).  SketchUp did not make it very easy to make adjustments smaller than a millimeter and in the end, the cap was too loose to even stay on.

[![IMG_2713.JPG](https://i.publiclab.org/system/images/photos/000/007/361/medium/IMG_2713.JPG)](https://i.publiclab.org/system/images/photos/000/007/361/original/IMG_2713.JPG)

Disheartened, I returned home.  Remember earlier when I said that if you were smarter than me you already know that I didn't need the cap?  Well, I finally realized that I didn't need the cap.  First, you don't need it for the original housing.  Second, the adapter was going to go on an already solid back since the 3D printed housing had a different outlet for the cord.

[![dramatic-sheep.gif](https://i.publiclab.org/system/images/photos/000/007/375/medium/dramatic-sheep.gif)](https://i.publiclab.org/system/images/photos/000/007/375/original/dramatic-sheep.gif)

[![westohmy.gif](https://i.publiclab.org/system/images/photos/000/007/360/medium/westohmy.gif)](https://i.publiclab.org/system/images/photos/000/007/360/original/westohmy.gif)

[![alwaysmoar.gif](https://i.publiclab.org/system/images/photos/000/007/358/medium/alwaysmoar.gif)](https://i.publiclab.org/system/images/photos/000/007/358/original/alwaysmoar.gif)

I attached the adapter to the actual 3D printed housing that I'd be using in the end.  While it was unlikely that there would be any difference, I decided to slice off the majority of the housing to make sure that the adapter fit before printing off the whole housing.  SketchUp does not make it easy to slice things (or at least I couldn't find out how to) so I used [Tinkercad](https://tinkercad.com/) which has a "hole" feature.  (Tinkercad has other limitations in particular, that it only lets you rotate your objects in predefined increments.) 

Success!

[![IMG_2698.JPG](https://i.publiclab.org/system/images/photos/000/007/362/medium/IMG_2698.JPG)](https://i.publiclab.org/system/images/photos/000/007/362/original/IMG_2698.JPG)

Finally, I sent the entire plans to be printed.  Unlike the previous test print, the 3D printing software elected to print the full housing on it's side.  

[![20140916_142849_resized.jpg](https://i.publiclab.org/system/images/photos/000/007/363/medium/20140916_142849_resized.jpg)](https://i.publiclab.org/system/images/photos/000/007/363/original/20140916_142849_resized.jpg)

Success...?

[![oprahbees.gif](https://i.publiclab.org/system/images/photos/000/007/364/medium/oprahbees.gif)](https://i.publiclab.org/system/images/photos/000/007/364/original/oprahbees.gif)

Not really.  Just bees.  This did not allow the adapter part to adhere to the housing (my working hypothesis is a combination of gravity, and the fact that it was "glued" to the housing one line at a time, instead of a full circle all at the same time).  This also made for a poor print of the ramp for the camera.

[![20140916_170151_resized.jpg](https://i.publiclab.org/system/images/photos/000/007/365/medium/20140916_170151_resized.jpg)](https://i.publiclab.org/system/images/photos/000/007/365/original/20140916_170151_resized.jpg)

The good news is that I was able to file it all out and I can still use the housing for oil testing.  My friend set the printer to print the housing adapter side up and it worked! 

\o/

[![snuggy.gif](https://i.publiclab.org/system/images/photos/000/007/373/medium/snuggy.gif)](https://i.publiclab.org/system/images/photos/000/007/373/original/snuggy.gif)

[![IMG_2721.JPG](https://i.publiclab.org/system/images/photos/000/007/368/medium/IMG_2721.JPG)](https://i.publiclab.org/system/images/photos/000/007/368/original/IMG_2721.JPG)


[![IMG_2740.JPG](https://i.publiclab.org/system/images/photos/000/007/367/medium/IMG_2740.JPG)](https://i.publiclab.org/system/images/photos/000/007/367/original/IMG_2740.JPG)


[![IMG_2743.JPG](https://i.publiclab.org/system/images/photos/000/007/369/medium/IMG_2743.JPG)](https://i.publiclab.org/system/images/photos/000/007/369/original/IMG_2743.JPG)


[![IMG_2744.JPG](https://i.publiclab.org/system/images/photos/000/007/366/medium/IMG_2744.JPG)](https://i.publiclab.org/system/images/photos/000/007/366/original/IMG_2744.JPG)

Naturally, the end result comes with a lot of structural crud which needs to be removed.  Be aware that the crud in near the port for the cord is not all superfluous.  The material half way down is supposed to stay and be flexible to keep the cord pinched in place.

[![IMG_2755.JPG](https://i.publiclab.org/system/images/photos/000/007/370/medium/IMG_2755.JPG)](https://i.publiclab.org/system/images/photos/000/007/370/original/IMG_2755.JPG)

[![IMG_2731.JPG](https://i.publiclab.org/system/images/photos/000/007/371/medium/IMG_2731.JPG)](https://i.publiclab.org/system/images/photos/000/007/371/original/IMG_2731.JPG)

You can purchase the metal cover and gasket separately.  Sadly, I cannot find the link.  If you can, let me know, especially since I need them.  A search elicits some [results](https://www.google.com/search?q=+cover+%26+gasket+for+LB+conduit+fitting).

###Questions and next steps

3D printing is probably not accessible for all people.  I can't recall the price but printing it with Ponoko or Shapeways was cost prohibitive.  Perhaps we can make a 3D printed block to fit inside the original housing.  This would have more surface area for the foam sticky pads to adhere to.    As cool as 3D printing your housing is, it would be more cost effective to change over to a [PVC LB Conduit](http://www.mcmaster.com/#7905k33/=u1xm89) and drill holes to hold the wooden block.  3D modeling software that is free and stands just above the level of beginner but not too intermediate is hard to come by in that I have not found one.  If you know of one let me know.

When I saw the structural elements that the 3D printer had added, I found that it had created a thin wall between the opening and the camera.  The wall is too thick to block out the light, but a slightly thicker version could be created to replace the black bond paper cube with a slit.  I'm not sure how thin the slit much be, must it be paper thin?  Or, maybe just some rails to hold it so you don't need the whole cube.

[![IMG_2753.JPG](https://i.publiclab.org/system/images/photos/000/007/372/medium/IMG_2753.JPG)](https://i.publiclab.org/system/images/photos/000/007/372/original/IMG_2753.JPG)

I'd also love to try [this](http://publiclab.org/notes/bhickman/08-27-2014/3d-printed-ccd-spectrometer-wheetrometer-3-0) recent addition to the 3D printed spec family by @brickman.


