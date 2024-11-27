---
nid: 13285
title: DIY fluorometer and solvent free extraction and dispersion of oil in water
path: public/static/notes/jakemartin/07-12-2016/diy-fluorometer-and-solvent-free-extraction-and-dispersion-of-oil-in-water.md
uid: 422965
tagnames: oil,spectrometry,fluorescence,sampling,extraction,oil-testing,fluorometer,diy-fluorometer,activity:sampling,activity:oil-testing,activity:fluorescecne,activity:fluorescence
---

# DIY fluorometer and solvent free extraction and dispersion of oil in water

###What I want to do

Measure small amounts of oil in water making use of solvent free extraction and dispersion of oil in water.

###My attempt and results
[The full details are posted on my blog](http://nznano.blogspot.co.uk/2016/07/diy-fluorometer-for-detecting-oil.html) but briefly making use of a non-toxic extraction using a detergent I was able to disperse the oil into the solution and detect 100 ppm of olive oil in water.

[![photo_4_(11).JPG](//i.publiclab.org/system/images/photos/000/017/020/large/photo_4_%2811%29.JPG)](//i.publiclab.org/system/images/photos/000/017/020/original/photo_4_%2811%29.JPG)

Sample	Frequency (Hz)
Water	42.9±0.2
Triton X-100	45.0±0.2
100 ppm olive oil	55.1±0.2
1000 ppm olive oil	62.3±0.2
Pure olive oil	5985
Room lights	20,000

###Questions and next steps

I would really like to integrate this into a sheild for a low-cost microcontroller like an Arduino.

[![spK2ImzH8MpoeHdkYJEFQHQ.png](//i.publiclab.org/system/images/photos/000/017/022/large/spK2ImzH8MpoeHdkYJEFQHQ.png)](//i.publiclab.org/system/images/photos/000/017/022/original/spK2ImzH8MpoeHdkYJEFQHQ.png)

Improving the detection limit could be done by integrating some optics into the design. 

Another next step is to work out sampling methods to allow for comparisons with different samples. (which have probably already been developed by environmental agencies) 

###Why I'm interested

Identifying the type of oil is the first step in determining what oil pollution is present however it would be excellent to quantify the oil pollution. I am also interested in measuring turbidity of water using this as I think the light sensor is accurate enough.