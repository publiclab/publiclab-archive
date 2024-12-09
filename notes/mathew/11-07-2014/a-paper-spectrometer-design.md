---
title: a paper spectrometer design
tagnames: spectrometer, desktop-spectrometer, fold-up, dsk, oil-testing-kit, barnstar:photo-documentation, paper
author: mathew
path: /notes/mathew/11-07-2014/a-paper-spectrometer-design.md
nid: 11324
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/007/766/original/IMG_20141106_161031.jpg)

# a paper spectrometer design

by [mathew](../profile/mathew) November 07, 2014 21:27

November 07, 2014 21:27 | Tags: [spectrometer](../tag/spectrometer), [desktop-spectrometer](../tag/desktop-spectrometer), [fold-up](../tag/fold-up), [dsk](../tag/dsk), [oil-testing-kit](../tag/oil-testing-kit), [barnstar:photo-documentation](../tag/barnstar:photo-documentation), [paper](../tag/paper)

----

###What I want to do
build a spectrometer that doesn't use a conduit box, out of mostly paper and cardboard. I want it to be easy to open and close, and ideally all the pieces could be printed on 8.5' x 11" paper

suggested by @cfastie in his research note on
  
In light of various ideas in the [history](/wiki/spectrometer-history)

###My attempt and results
Eschewing the more [flexible concepts](/notes/mathew/08-01-2014/hardware-design-work-for-the-oil-testing-kit) (more [1](/notes/mathew/08-20-2014/clips-for-the-next-spectrometer), [2](/notes/mathew/08-29-2014/clips-for-the-next-spectrometer-pt-2) ) that Warren and I were prototyping before the breakthroughs in the oil testing kit assay ( [1](/notes/warren/09-12-2014/webcam-brightness-testing-for-oil-testing-kit) [2](/notes/mathew/09-17-2014/laser-pointers-and-the-lif-literature), [3](/notes/mathew/09-19-2014/grading-oils-with-uv-fluorescence), [4](/notes/mathew/09-22-2014/replicating-the-grading-of-oils-with-uv-fluorescence-on-other-cameras-pt-1), [5](/notes/warren/09-23-2014/better-smoothing-and-equalizing-graph-height-for-comparison-of-oil-spectra), [6](/notes/mathew/09-23-2014/graded-oils-using-uv-fluorescence), [7](/notes/warren/10-21-2014/spectral-workbench-previewing-and-clipping-warnings))  that lead to a realization that a fixed geometry was fine-- we don't seem to really need to play with the geometry much. 

That doesn't mean we couldn't do better than the existing conduit box, as @stoft, @cfastie, and others have pointed out.   Getting the [relationship of spectrometer's grating, slit, and camera](/notes/cfastie/2-5-2013/grating-angle) just right is hard in the short conduit box spectrometer.  

Following @cfastie's empirical data (from the note linked above), I wanted a spectrometer with a 20cm distance between the camera and slit, and therefore a 45 degree camera angle and 60 degree grating angle.  

I started by making a very rough prototype from an [existing desktop spectrometer insert and parts](/wiki/dsk), and [some black aluminum foil.](http://www.bhphotovideo.com/c/product/688227-REG/LEE_Filters_280R_Black_Aluminum_Foil.html)

[![IMG_20141021_201721.jpg](https://i.publiclab.org/system/images/photos/000/007/735/medium/IMG_20141021_201721.jpg)](https://i.publiclab.org/system/images/photos/000/007/735/original/IMG_20141021_201721.jpg)

[![IMG_20141021_201921.jpg](https://i.publiclab.org/system/images/photos/000/007/737/medium/IMG_20141021_201921.jpg)](https://i.publiclab.org/system/images/photos/000/007/737/original/IMG_20141021_201921.jpg)

I made a little cap for the 45 degree wood block that holds the grating at 60 degrees:

[![IMG_20141021_201854.jpg](https://i.publiclab.org/system/images/photos/000/007/736/medium/IMG_20141021_201854.jpg)](https://i.publiclab.org/system/images/photos/000/007/736/original/IMG_20141021_201854.jpg)

And used another small block to step the .18mm optically printed slit 5mm back from a 2mm wide baffle.  this "double slit" a wider baffle and second slit, came out of an e[xperiment to limit stray light](http://publiclab.org/notes/mathew/10-09-2014/shorter-spectrometer-geometry-with-two-slits). That was very effective, but needed a longer distance to the camera.

[![IMG_20141021_201904.jpg](https://i.publiclab.org/system/images/photos/000/007/738/medium/IMG_20141021_201904.jpg)](https://i.publiclab.org/system/images/photos/000/007/738/original/IMG_20141021_201904.jpg)

[![IMG_20141021_201738.jpg](https://i.publiclab.org/system/images/photos/000/007/739/medium/IMG_20141021_201738.jpg)](https://i.publiclab.org/system/images/photos/000/007/739/original/IMG_20141021_201738.jpg)


Then I set about making an open-and-closable shroud out of the prototype parts.  To make sure everything was in easy metric relationships, I prototyped on some [Open Structures](http://openstructures.net/pages/9) grid paper I printed out.  i then rapidly violated their guidelines regarding tape :-P
<a href="https://i.publiclab.org/system/images/photos/000/007/733/original/open_grid_8.5x11.pdf"><i class="icon icon-file"></i> open_grid_8.5x11.pdf</a>

[![IMG_20141107_112029.jpg](https://i.publiclab.org/system/images/photos/000/007/734/medium/IMG_20141107_112029.jpg)](https://i.publiclab.org/system/images/photos/000/007/734/original/IMG_20141107_112029.jpg)

after getting a prototype of the tab closures working, I made some vector plans:

[![Screen_Shot_2014-11-07_at_12.18.08_PM.png](https://i.publiclab.org/system/images/photos/000/007/740/medium/Screen_Shot_2014-11-07_at_12.18.08_PM.png)](https://i.publiclab.org/system/images/photos/000/007/740/original/Screen_Shot_2014-11-07_at_12.18.08_PM.png)

[![Screen_Shot_2014-11-07_at_12.17.40_PM.png](https://i.publiclab.org/system/images/photos/000/007/741/medium/Screen_Shot_2014-11-07_at_12.17.40_PM.png)](https://i.publiclab.org/system/images/photos/000/007/741/original/Screen_Shot_2014-11-07_at_12.17.40_PM.png)

[![Screen_Shot_2014-11-07_at_12.17.52_PM.png](https://i.publiclab.org/system/images/photos/000/007/742/medium/Screen_Shot_2014-11-07_at_12.17.52_PM.png)](https://i.publiclab.org/system/images/photos/000/007/742/original/Screen_Shot_2014-11-07_at_12.17.52_PM.png)

And then taped them to black paper and cut them out with an exacto.

[![IMG_20141106_113317.jpg](https://i.publiclab.org/system/images/photos/000/007/743/medium/IMG_20141106_113317.jpg)](https://i.publiclab.org/system/images/photos/000/007/743/original/IMG_20141106_113317.jpg)

here they are in their assembly relationship, and partially assembled:

[![IMG_20141106_151328.jpg](https://i.publiclab.org/system/images/photos/000/007/744/medium/IMG_20141106_151328.jpg)](https://i.publiclab.org/system/images/photos/000/007/744/original/IMG_20141106_151328.jpg)

Here are the printable PDFS.  I should really differentiate the cut and fold lines, this is a first draft so they aren't super clear yet:
<a href="https://i.publiclab.org/system/images/photos/000/007/745/original/endcaps.pdf"><i class="icon icon-file"></i> endcaps.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/007/748/original/wrapper.pdf"><i class="icon icon-file"></i> wrapper.pdf</a>

<a href="https://i.publiclab.org/system/images/photos/000/007/746/original/angle.pdf"><i class="icon icon-file"></i> angle.pdf</a>

###Assembly

I glued two blocks together so they were the full width (4cm) of the spectrometer chamber-- it makes easier alignment.

[![IMG_20141106_154502.jpg](https://i.publiclab.org/system/images/photos/000/007/749/medium/IMG_20141106_154502.jpg)](https://i.publiclab.org/system/images/photos/000/007/749/original/IMG_20141106_154502.jpg)

[![IMG_20141106_154456.jpg](https://i.publiclab.org/system/images/photos/000/007/750/medium/IMG_20141106_154456.jpg)](https://i.publiclab.org/system/images/photos/000/007/750/original/IMG_20141106_154456.jpg)

I then glued down the bottom panel of the rear end cap onto the cardboard panel that forms the bottom of the spectrometer:

[![IMG_20141106_152727.jpg](https://i.publiclab.org/system/images/photos/000/007/753/medium/IMG_20141106_152727.jpg)](https://i.publiclab.org/system/images/photos/000/007/753/original/IMG_20141106_152727.jpg)

[![IMG_20141106_155703.jpg](https://i.publiclab.org/system/images/photos/000/007/752/medium/IMG_20141106_155703.jpg)](https://i.publiclab.org/system/images/photos/000/007/752/original/IMG_20141106_155703.jpg)

I mounted the camera assembly flush to the rear cap, and also taped a dvd grating in place:

[![IMG_20141106_161013.jpg](https://i.publiclab.org/system/images/photos/000/007/754/medium/IMG_20141106_161013.jpg)](https://i.publiclab.org/system/images/photos/000/007/754/original/IMG_20141106_161013.jpg)

unfortunately I didn't account for where the webcam cord was going to go.  so I cut a slit in the rear panel and slid it out, and then taped everything closed.  Big oversight: 

[![IMG_20141106_160602.jpg](https://i.publiclab.org/system/images/photos/000/007/755/medium/IMG_20141106_160602.jpg)](https://i.publiclab.org/system/images/photos/000/007/755/original/IMG_20141106_160602.jpg)

I then lined up the optical slit, little block, and front endcap with baffle slit:

[![IMG_20141106_162920.jpg](https://i.publiclab.org/system/images/photos/000/007/756/medium/IMG_20141106_162920.jpg)](https://i.publiclab.org/system/images/photos/000/007/756/original/IMG_20141106_162920.jpg)

and then glued its base down too:

[![IMG_20141106_163221.jpg](https://i.publiclab.org/system/images/photos/000/007/757/medium/IMG_20141106_163221.jpg)](https://i.publiclab.org/system/images/photos/000/007/757/original/IMG_20141106_163221.jpg)

then it was time to close the wrapper around the spectrometer and close all the tabs:

[![IMG_20141106_161359.jpg](https://i.publiclab.org/system/images/photos/000/007/758/medium/IMG_20141106_161359.jpg)](https://i.publiclab.org/system/images/photos/000/007/758/original/IMG_20141106_161359.jpg)

[![IMG_20141106_161431.jpg](https://i.publiclab.org/system/images/photos/000/007/760/medium/IMG_20141106_161431.jpg)](https://i.publiclab.org/system/images/photos/000/007/760/original/IMG_20141106_161431.jpg)

[![IMG_20141106_161452.jpg](https://i.publiclab.org/system/images/photos/000/007/761/medium/IMG_20141106_161452.jpg)](https://i.publiclab.org/system/images/photos/000/007/761/original/IMG_20141106_161452.jpg)

[![IMG_20141106_163530.jpg](https://i.publiclab.org/system/images/photos/000/007/762/medium/IMG_20141106_163530.jpg)](https://i.publiclab.org/system/images/photos/000/007/762/original/IMG_20141106_163530.jpg)

Then It was time for light-tightness testing with a halogen. Some light can slip underneath the gap between the cardboard panel and the front cap.  that was the only spot I could find.

[![IMG_20141106_164337.jpg](https://i.publiclab.org/system/images/photos/000/007/763/medium/IMG_20141106_164337.jpg)](https://i.publiclab.org/system/images/photos/000/007/763/original/IMG_20141106_164337.jpg)

spectra look nice and clear.  The two green peaks are visible (though blown out in this image)

[![Photo_on_11-6-14_at_4.50_PM.jpg](https://i.publiclab.org/system/images/photos/000/007/764/medium/Photo_on_11-6-14_at_4.50_PM.jpg)](https://i.publiclab.org/system/images/photos/000/007/764/original/Photo_on_11-6-14_at_4.50_PM.jpg)

###Questions and next steps

I'm really happy with the tabs, they let the whole thing be opened and closed for adjustments to the camera or slit, etc.  

I'm going to replace the cardboard with a piece of plywood or other more rigid material, its not rigid enough.

the connecting tabs need to be 1mm shorter to make them easier to insert into the slits.  

I need a solution to the USB cable that is straightforward.

I want to make a laser-pointer/cuvette holder that attaches to the front.