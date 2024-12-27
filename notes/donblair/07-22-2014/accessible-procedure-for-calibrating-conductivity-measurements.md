---
title: "Accessible procedure for calibrating conductivity measurements?"

tagnames: 'water-quality, conductivity, riffle, coqui, question:water-quality, question:coqui, question:conductivity, salinity, question:salinity'
author: donblair
path: /notes/donblair/07-22-2014/accessible-procedure-for-calibrating-conductivity-measurements.md
nid: 10949
uid: 43651
cids: 9593,9610,9618
---

![](https://publiclab.org/public/system/images/photos/000/005/448/original/USGS.01104455.04.00095..20140701.20140722..0..gif)

# Accessible procedure for calibrating conductivity measurements?

by [donblair](/profile/donblair) | July 22, 2014 21:45

July 22, 2014 21:45 | Tags: [water-quality](/tag/water-quality), [conductivity](/tag/conductivity), [riffle](/tag/riffle), [coqui](/tag/coqui), [question:water-quality](/tag/question:water-quality), [question:coqui](/tag/question:coqui), [question:conductivity](/tag/question:conductivity), [salinity](/tag/salinity), [question:salinity](/tag/question:salinity)

----

###What I want to do

Find a way that folks can calibrate a conductivity sensor using readily-available items.

For this first pass, I'm just trying to see if I can get a range of water samples that more or less span the range of conductivity values measured in the Stony Brook river, so that the conductivity circuit we're using is tuned to approximately the right range of values.  Will fill in more detail later, dumping some notes here for reference:
###My attempt and results

Helpful references:

- http://www.hannacan.com/conseils_EC_en.htm
- http://appslabs.com.au/salinity.htm

1 tspn salt ~ 5.7 grams of salt

1 cup of water ~ 240 mL of water

> For NaCl, 1 uS/cm at 25 C ~ .5 mg/L = 1 ppm

[Recent USGS Stony Brook conductivity sensor measurements](http://waterdata.usgs.gov/ma/nwis/uv?cb_00060=on&cb_00010=on&cb_00095=on&format=gif_default&site_no=01104455&period=&begin_date=2014-07-1&end_date=2014-07-22) span around 0 to 2000 uS/cm:

Let's see if we can come up with a bunch of water samples that span the range from 0 to 2000, without needing special equipment ...

### Equipment:

- Distilled water from CVS is ideal -- likely around 0.5 uS/cm
- Tap water is likely around 500 uS/cm to 800 uS/cm, will increase all values by that amount -- but might be okay if we're really just trying to generate some ballpark solutions ... 

### Procedure

- Place 6 cups of water in a large pot
- Add 1 tspn of salt to pot

This yields: 5.7 / (6.0*0.24) = 4 g / L --> 8000 uS/cm

Now reduce concentration by 50%, in stages, keeping each 3 cup sample that results as a reference solution:

- pour off half into new container labeled "8000 uS/cm", then, in original container, mix in 3 cups of water --> 2 g / L --> 4000 uS/cm

- pour off half into new container (--> "4000 uS/cm"), mix in 3 cups of water to original container-> 1 g / L --> 2000 uS/cm 

- pour off half (--> 2000 uS/cm), mix in 3 cups of water --> .5 g / L --> 1000 uS/cm

- pour off half (--> 1000 uS/cm), mix in 3 cups of water --> .25 g / L --> 500 uS/cm

- pour off half (--> 500 uS/cm), mix in 3 cups of water --> .13 g / L --> 250 uS/cm

- pour off half (--> 250 uS/cm), mix in 3 cups of water --> .06 g / L --> 125 uS/cm

###Questions and next steps

Did I goof up around anything really basic here?  

If this works out, more or less, the next step will be to attempt to calibrate the 555 conductivity meter against these solutions ... 