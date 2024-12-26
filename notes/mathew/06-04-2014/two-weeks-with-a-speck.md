---
title: "Two weeks with a Speck"\ntagnames: 'air, dust, open-air, particle-sensing, particle-monitoring, particulate-monitoring, dust-monitoring, openair'
author: mathew
path: /notes/mathew/06-04-2014/two-weeks-with-a-speck.md
nid: 10528
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/004/517/original/14155445079_6657caf3aa_b.jpg)

# Two weeks with a Speck

by [mathew](../profile/mathew) | June 04, 2014 03:51

June 04, 2014 03:51 | Tags: [air](../tag/air), [dust](../tag/dust), [open-air](../tag/open-air), [particle-sensing](../tag/particle-sensing), [particle-monitoring](../tag/particle-monitoring), [particulate-monitoring](../tag/particulate-monitoring), [dust-monitoring](../tag/dust-monitoring), [openair](../tag/openair)

----

_Carpentry. 80 times worse than rush hour._

###What I want to do
Illah Nourbakhsh and Beatrice Dias from [CMU CREATE Lab](http://www.cmucreatelab.org/) sent me a [Speck particulate monitor](/notes/chrisbartley/04-15-2014/speck-particle-monitor).  I plugged it in and let it run. 

###My attempt and results

The first thing I noticed is that it is minutely sensitive to its placement. It draws air in the side and out its bottom, and needs to be placed on a flat surface.  Also, as the instructions mentioned, it didn't like direct sun.  The measurements went up in sun.

There was a definite correlation between the rush of morning traffic and particulate levels.  They would roughly double.  But its also pretty  cloudy in the morning, and I should really look at humidity too before making a judgement but... I don't have any software package that stands up to the CSV file produced by the speck. Excel, LibreOffice, both crapped out when I made a graph.  So I'm going to visualize the data using this screenshot from a frozen LibreOffice.

[![Screen_Shot_2014-06-03_at_6.04.23_PM.png](https://i.publiclab.org/system/images/photos/000/004/518/medium/Screen_Shot_2014-06-03_at_6.04.23_PM.png)](https://i.publiclab.org/system/images/photos/000/004/518/original/Screen_Shot_2014-06-03_at_6.04.23_PM.png)

I was hoping to present the dates out of their Unix time stamps and [into a regular date format](https://forum.openoffice.org/en/forum/viewtopic.php?f=13&t=606), but should've been faster at the screen captures.  

Maybe I'll try again sometime with some other software.
here's the CSV file and the ODF spreadsheet with a column of human readable dates.

<a href="https://i.publiclab.org/system/images/photos/000/004/519/original/data_samples.csv"><i class="icon icon-file"></i> data_samples.csv</a>

<a href="https://i.publiclab.org/system/images/photos/000/004/520/original/0519-0603data.ods"><i class="icon icon-file"></i> 0519-0603data.ods</a>

###Taking it Apart

<iframe src="https://www.flickr.com/photos/14397636@N07/14337555431/in/photostream/player/" width="500" height="375" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

the scoop underneath is where air enters.

<iframe src="https://www.flickr.com/photos/14397636@N07/14340876495/in/photostream/player/" width="500" height="375" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

USB power/data and the small fan exhaust on the side. 

<iframe src="https://www.flickr.com/photos/14397636@N07/14361074343/in/photostream/player/" width="500" height="375" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Air comes in the rectangle in the bottom.

<iframe src="https://www.flickr.com/photos/14397636@N07/14154220239/in/photostream/player/" width="500" height="375" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Notice how the [Syhitech DSM501A](http://www.chinaeds.com/zl/20123814144392849_DSM501APDF.pdf) sensor's ports line up with a baffle to direct air through it, and the intake port lines up with the bottom of the sensor.

<iframe src="https://www.flickr.com/photos/14397636@N07/14337550191/in/photostream/player/" width="375" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Still sawdust collected on the inside of the fan.  sheesh.  That was last week.

<iframe src="https://www.flickr.com/photos/14397636@N07/14339241462/in/photostream/player/" width="500" height="375" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

Everything is press fit in place, after the three screws holding the two parts of the case are out, everything slides in and out easily.

<iframe src="https://www.flickr.com/photos/14397636@N07/14337546951/in/photostream/player/" width="370" height="500" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>


###Why I'm interested
This thing is really sweet- very finished, easy to use- it made me immediately sensitive to changes in particulates.  Also there's a good chance its as [good as expensive things.](/wiki/dustduino). Just look at [the study](http://www.atmos-meas-tech-discuss.net/7/605/2014/amtd-7-605-2014.pdf) linked in the [Dustduino wiki page.](/wiki/dustduino)

Also, [check out this cool visualization of air quality around Pittsburgh.](http://explorables.cmucreatelab.org/explorables/speck-in-home-explorable.html)