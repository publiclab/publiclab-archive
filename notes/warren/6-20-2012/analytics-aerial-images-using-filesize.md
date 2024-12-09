---
title: Analytics on aerial images -- using filesize
tagnames: balloon-mapping, kite-mapping, analysis, temperature, blurriness, sorting, image-sorting, activity:image-sorting
author: warren
path: /notes/warren/6-20-2012/analytics-aerial-images-using-filesize.md
nid: 2589
uid: 1

---

![](https://publiclab.org/sites/default/files/Picture 4_2.png)

# Analytics on aerial images -- using filesize

by [warren](../profile/warren) June 20, 2012 19:50

June 20, 2012 19:50 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [analysis](../tag/analysis), [temperature](../tag/temperature), [blurriness](../tag/blurriness), [sorting](../tag/sorting), [image-sorting](../tag/image-sorting), [activity:image-sorting](../tag/activity:image-sorting)

----

**Update, June 2014:** This has now been implemented as part of MapKnitter, known as [MapKnitter Sorter](https://mapknitter.org/sorter/). Please give it a try there.

****

I'm looking for some easy ways to sort blurry images from crisp ones (and good from bad) for a whole batch of images. My first thought was -- run a quick analysis on each image for blurriness, with a script. But for 2000-4000 images, that takes too long!!

OK, how about this: just look at the filesize! I already noticed that all-black or all-blurry images at the beginning and end of a flight are much smaller JPGs since less detailed photos will compress better. I tried graphing this to see if there's a pattern. My graph is here:

http://archive.publiclaboratory.org/aerial-image-analytics/

Open source code (messy): https://github.com/jywarren/aerial-image-analytics

<iframe width=500 height=300 border=0 src="http://archive.publiclaboratory.org/aerial-image-analytics/"></iframe>

My other thought (also graphed) was to use the temperature of the camera, as stored in the EXIF tags -- an idea [explored in an older post](http://publiclaboratory.org/notes/warren/2-10-2012/temperature-during-thatchmore-farms-flight) -- to see if we could calculate the altitude very roughly and trim out all images under a certain threshold -- say a hundred feet or lower. The above graph shows that maybe the temperature system is no good -- it just kept going up and up, and I think that's just because the camera is getting hot in the sun and from running continuously. Jessi even said "the camera's hot" when we took it down after the flight at UMBC's test forest.

So these are just a few ideas but it'd be neat to have a script to quickly dump 1/3 of your images if they're blurry -- for example:

<a href="https://www.flickr.com/photos/jeffreywarren/7409817002/" title="Blurry kite photo from the ground by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8024/7409817002_06fd9b3f9d.jpg" width="500" height="375" alt="Blurry kite photo from the ground"></a>

###Update

I never followed up with another post about this, but the tool was later refined quite a bit and a javascript 'drag and drop' interface made this very easy and effective. To use it, visit: 

> https://mapknitter.org/sorter/ (updated address)

Here are some screenshots of the process:

1. Drag all the images into the drop zone:

[![Screen_Shot_2013-09-03_at_8.43.18_AM.png](https://i.publiclab.org/system/images/photos/000/001/379/medium/Screen_Shot_2013-09-03_at_8.43.18_AM.png)](https://i.publiclab.org/system/images/photos/000/001/379/original/Screen_Shot_2013-09-03_at_8.43.18_AM.png)

2. They'll be graphed by filename order (x) and file size (y). See how turbulence can create wildly varying filesize... but also consider that if some visually complicated feature enters the scene, that can also create a higher filesize since the image will not compress as well:

[![Screen_Shot_2013-09-03_at_8.43.24_AM.png](https://i.publiclab.org/system/images/photos/000/001/380/medium/Screen_Shot_2013-09-03_at_8.43.24_AM.png)](https://i.publiclab.org/system/images/photos/000/001/380/original/Screen_Shot_2013-09-03_at_8.43.24_AM.png)

3. Enter a "cutoff size" in megabytes and press "Apply" to highlight filenames of images above that size:

[![Screen_Shot_2013-09-03_at_8.45.02_AM.png](https://i.publiclab.org/system/images/photos/000/001/381/medium/Screen_Shot_2013-09-03_at_8.45.02_AM.png)](https://i.publiclab.org/system/images/photos/000/001/381/original/Screen_Shot_2013-09-03_at_8.45.02_AM.png)