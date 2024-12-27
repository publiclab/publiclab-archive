---
title: "Ecosynth: upcoming open source 3d mapping for forests"

tagnames: '3d, uav, forest, pointcloud, bundleadjustment, sfm, structure-from-motion'
author: warren
path: /notes/warren/6-14-2012/ecosynth-upcoming-open-source-3d-mapping-forests.md
nid: 2491
uid: 1

cids: 1441,4820,5504

---

![](https://publiclab.org/sites/default/files/UMBC_Knoll_2012_10_24_oblique.png)

# Ecosynth: upcoming open source 3d mapping for forests

by [warren](../../../profile/warren) | June 14, 2012 17:08

June 14, 2012 17:08 | Tags: [3d](../tag/3d), [uav](../tag/uav), [forest](../tag/forest), [pointcloud](../tag/pointcloud), [bundleadjustment](../tag/bundleadjustment), [sfm](../tag/sfm), [structure-from-motion](../tag/structure-from-motion)

----

[Ecosynth](http://ecotope.org/ecosynth/blog/page/About-Ecosynth.aspx) is a recently NSF-funded project to create an open source toolchain for collecting aerial photos of forests with a small automated hexa-copter, and generating point clouds and 3d models for forestry and ecosystem analysis. I had the opportunity to visit the project for the first annual Ecosynth Workshop to see their system in action and brainstorm next steps.

Ecosynth uses a commercial UAV called the Microkopter (~$2000-5000), but is [looking at flying](http://ecotope.org/ecosynth/blog/post/2012/05/08/Arducopter-Back-in-Flight.aspx) the open hardware Arducopter for more customizability, and to move to a more open source platform. They are focusing on optimizing the collection of point clouds of small plots of forest from an altitude of 200-300 feet using a cheap-ish ($200 used) Canon SD 4000 IS with the trigger taped down (yeah PLOTS!). The six-prop mini helicopter runs a route like a Zamboni and after collecting a couple thousand images, it lands automatically. I got to see a test flight at UMBC's "test forest" which is less than 250m square and has been [thoroughly surveyed](http://ecotope.org/ecosynth/blog/post/2012/05/02/Update-on-Herbert-Run-Survey.aspx), which lets them compare their results to traditional measurements. 

<a href="https://www.flickr.com/photos/jeffreywarren/7181133595/" title="Ecosynth Hexacopter with Canon SD4000 IS by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7215/7181133595_43c260dcc9.jpg" width="500" height="375" alt="Ecosynth Hexacopter with Canon SD4000 IS"></a>

The flight test took about 15 minutes, and using Agisoft's Photoscan software (proprietary) they can generate a nice rich 3d model of the forest in about a day and a half depending on the size of the data. It seems like we could easily do the same with [kite or balloon data](/tool/balloon-mapping) -- in fact, they began in 2009 using a kite but switched to model aircraft to get more control and stability. I think the PLOTS community has made huge strides in getting good unblurred imagery, so we should see if we can replicate with our tools.

<a href="https://www.flickr.com/photos/jeffreywarren/7181129565/" title="Ecosynth Hexacopter by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7073/7181129565_00fcefc363.jpg" width="500" height="375" alt="Ecosynth Hexacopter"></a>

Part of their NSF grant includes refining and improving the bundle adjustment system, and although they abandoned the open-source program [Bundler](http://phototour.cs.washington.edu/bundler/), which took as much as 10x longer to generate point clouds, they seem very interested in moving back to open source systems, in part due to the potential for community involvement and in part because the "black box" of using Agisoft's system makes it difficult to do good quantitative science. For example, as Agisoft updated their software recently, discrepancies have appeared between recent and older point clouds, but it is impossible to know what's changed in the algorithm. Also, the desire to do in-the-field point cloud generation with some GPU acceleration mods for Bundler, and to customize the algorithms for forest datasets (branches, leaves, and such are tough to pattern-match) mean that open source looks like a good strategy for them.

Interestingly, they've also been doing ground-based image collection to make point clouds of treetrunks and ground cover. They're looking for ways to join the aerial data with the ground data to create more complete models of forests.

At the end of the day, Ecosynth is starting development of an open source toolchain which provides an alternative to expensive LIDAR systems (although I pointed out some of the [cheap, DIY lidar experiments]() I've runinto online) and forest/ecosystem analysis tools and methodologies which the PLOTS community can both contribute to and put to use.

<a href="https://www.flickr.com/photos/jeffreywarren/7366416368/" title="Ecosynth flight path planning by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8014/7366416368_ff6e8bb519.jpg" width="500" height="375" alt="Ecosynth flight path planning"></a>

As the project starts to gather steam, plans are to release a disk image (runnable on Amazon EC2 or VirtualBox) with the full suite of tools on it, and possibly a screencast of the whole toolchain. I look forward to when we'll be able to get a copy and test it out on some balloon and kite imagery! 
