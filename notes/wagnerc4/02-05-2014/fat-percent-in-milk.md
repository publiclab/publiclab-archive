---
title: "Fat percent in milk"

tagnames: 'spectrometer, milk, milk-fat, activity:spectrometry'
author: wagnerc4
path: /notes/wagnerc4/02-05-2014/fat-percent-in-milk.md
nid: 10012
uid: 420634
cids: 8170,8171,8172,8173,8174,8176,8177,8178,13221,15047
---

![](https://publiclab.org/public/system/images/photos/000/002/782/original/DSC00567.JPG)

# Fat percent in milk

by [wagnerc4](/profile/wagnerc4) | February 05, 2014 19:37

February 05, 2014 19:37 | Tags: [spectrometer](/tag/spectrometer), [milk](/tag/milk), [milk-fat](/tag/milk-fat), [activity:spectrometry](/tag/activity:spectrometry)

----

I work in a litter industry that process milk cow, here the fat percent is measured with: Gerber method.
Some industries have a instrument that measures some parameters of the milk, but is too expensive...  I think this instrument is some kind of spectrometer.
So I try to measure the fat percent, with the publiclab spectrometer.

**Materials**:
 - spectrometer
 - lamp 30 watts
 - tube and carton

[![DSC00567.JPG](https://i.publiclab.org/system/images/photos/000/002/779/medium/DSC00567.JPG)](https://i.publiclab.org/system/images/photos/000/002/779/original/DSC00567.JPG)

[![DSC00568.JPG](https://i.publiclab.org/system/images/photos/000/002/780/medium/DSC00568.JPG)](https://i.publiclab.org/system/images/photos/000/002/780/original/DSC00568.JPG)

In the spectrum I only evaluate blue.

To analyse the spectrum I use debian testing, and install these **packages**:

apt-get install mplayer python-imaging python-matplotlib


**Script milk_fat.py**:

    #! /usr/bin/env python
    """
    Author: Wagner Corrales M.
    """
    
    from bisect import bisect
    from subprocess import call
    from Image import open
    from matplotlib.pyplot import plot, show
    
    values = {96.00: 4.0,
              96.70: 3.9,
              97.30: 3.8,
              97.90: 3.7,
              98.40: 3.6,
              98.80: 3.5,
              99.15: 3.4,
              99.50: 3.3,
              99.80: 3.2,
              100.10: 3.1,
              100.40: 3.0,
              100.70: 2.9,
              100.95: 2.8,
              101.15: 2.7,
              101.35: 2.6,
              101.50: 2.5,
              101.65: 2.4,
              101.75: 2.3,
              101.85: 2.2,
              101.90: 2.0,
              101.95: 1.9,
              102.00: 1.8}
    v_keys = sorted(values.keys())
    v_values = [values[k] for k in v_keys]
    
    def info(spectrum):
      s0, s1 = 0, 0
      for s in spectrum[5:355]:
        s0 = s0 + s
      for s in spectrum[355:635]:
        s1 = s1 + s
      key = ((s1/280.0)*100)/((s0+s1)/630.0)
      index = bisect(v_keys, key)
      print key, v_values[index]
    
    call("mplayer tv:// -tv device=/dev/video1:width=640:height=480:outfmt=rgb24 -frames 5 -vo png", shell=True)
    
    pix = open('00000005.png').load()
    r = [pix[i, 240][0] for i in range(640)]
    g = [pix[i, 240][1] for i in range(640)]
    b = [pix[i, 240][2] for i in range(640)]
    plot(r, "r")
    plot(g, "g")
    plot(b, "b")
    show()
    
    info(b)
    

The script need execution permissions:
chmod a+x milk_fat.py

Then execute the script:
./milk_fat.py

**Examples**:

[![fat3.5.png](https://i.publiclab.org/system/images/photos/000/002/783/medium/fat3.5.png)](https://i.publiclab.org/system/images/photos/000/002/783/original/fat3.5.png)


[![fat2.7.png](https://i.publiclab.org/system/images/photos/000/002/784/medium/fat2.7.png)](https://i.publiclab.org/system/images/photos/000/002/784/original/fat2.7.png)





These result perfect!!!