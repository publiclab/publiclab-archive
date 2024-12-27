---
title: "Ongoing design of compact cuvette frame"

tagnames: 'spectrometer, fluorescence, cuvette, oil-testing-kit, response:12462, response:11063, response:12472, cuvette-frame, response:12561, upgrade:spectrometry, upgrade:dssk, status:under-development, seeks:builds, time:5h, difficulty:medium'
author: warren
path: /notes/warren/01-25-2016/ongoing-design-of-compact-cuvette-frame.md
nid: 12616
uid: 1

cids: 13399,13400,13401,13431,13432,13434,13565,13578,13637

---

![](https://publiclab.org/public/system/images/photos/000/013/822/original/IMG_20160125_081251.jpg)

# Ongoing design of compact cuvette frame

by [warren](../../../profile/warren) | January 25, 2016 18:27

January 25, 2016 18:27 | Tags: [spectrometer](../tag/spectrometer), [fluorescence](../tag/fluorescence), [cuvette](../tag/cuvette), [oil-testing-kit](../tag/oil-testing-kit), [response:12462](../tag/response:12462), [response:11063](../tag/response:11063), [response:12472](../tag/response:12472), [cuvette-frame](../tag/cuvette-frame), [response:12561](../tag/response:12561), [upgrade:spectrometry](../tag/upgrade:spectrometry), [upgrade:dssk](../tag/upgrade:dssk), [status:under-development](../tag/status:under-development), [seeks:builds](../tag/seeks:builds), [time:5h](../tag/time:5h), [difficulty:medium](../tag/difficulty:medium)

----

###What I want to do

Continue spare-time development of a smaller, more stable and compact, multi-use cuvette frame attachment for the 3.0 Desktop Spectrometry Kit, summarized in a few previous posts by myself and @tonyc:

* https://publiclab.org/n/12561
* https://publiclab.org/n/12462
* https://publiclab.org/n/11063
* https://publiclab.org/n/12472

###My attempt and results

I developed a vector design for my Silhouette Cameo desktop paper cutter, trying to get it to fit on a letter-sized (8.5x11") sheet. I modified the design after printing and assembling it; see my modifications in the laid-out-flat photo below.


[![IMG_20160125_081309.jpg](//i.publiclab.org/system/images/photos/000/013/816/medium/IMG_20160125_081309.jpg)](//i.publiclab.org/system/images/photos/000/013/816/original/IMG_20160125_081309.jpg)

[![IMG_20160125_081538.jpg](//i.publiclab.org/system/images/photos/000/013/818/medium/IMG_20160125_081538.jpg)](//i.publiclab.org/system/images/photos/000/013/818/original/IMG_20160125_081538.jpg)


[![IMG_20160125_081218.jpg](//i.publiclab.org/system/images/photos/000/013/819/medium/IMG_20160125_081218.jpg)](//i.publiclab.org/system/images/photos/000/013/819/original/IMG_20160125_081218.jpg)

The internal part is made of two C-shaped folded pieces which bolt together using long bolts spaced out with 1/2" nylon tubes; one nice thing is that I believe the whole thing can be very precisely raised and lowered by turning the bolts; they hold on the cardstock. A final version might be made of a flexible plastic sheeting.

The two "wings" slot into the slots on the spectrometer, and index at all four corners. Because of the fold-over bottom and top, it's very sturdy. I put a hole on the back for where the knob for dimming the light will go -- remember, we're going to try to [get this working with LEDs](/notes/warren/01-05-2016/testing-high-brightness-405nm-leds-in-fluorescence-spectroscopy-of-oils), and if not, maybe a laser diode component, dimmed with a dial.

The "stack" fits inside and is folded over with a big flap, like this:


[![IMG_20160125_081401.jpg](//i.publiclab.org/system/images/photos/000/013/820/medium/IMG_20160125_081401.jpg)](//i.publiclab.org/system/images/photos/000/013/820/original/IMG_20160125_081401.jpg)


[![IMG_20160125_081410.jpg](//i.publiclab.org/system/images/photos/000/013/821/medium/IMG_20160125_081410.jpg)](//i.publiclab.org/system/images/photos/000/013/821/original/IMG_20160125_081410.jpg)


[![IMG_20160125_081819.jpg](//i.publiclab.org/system/images/photos/000/013/840/medium/IMG_20160125_081819.jpg)](//i.publiclab.org/system/images/photos/000/013/840/original/IMG_20160125_081819.jpg)



###Questions and next steps

I haven't added the extra flaps to the digital file yet, but they're pretty straightforward, and I'll update soon. And there are some sub-millimeter sizing issues on the "stack" -- and i also messed up one of the screw hole locations. 

Then I'll need to try putting the electronics in. I'm going to try to screw the Arduino Trinket and the LED board directly to the paper enclosure.

**Update:** adjusted the digital file to match the modifications; still needs some work on sub-millimeter sizing and maybe flap locking: 
<a href="//i.publiclab.org/system/images/photos/000/013/824/original/cuvette-frame-7.pdf"><i class="icon icon-file"></i> cuvette-frame-7.pdf</a> (have to modify publiclab.org to accept dxf uploads)


[![Screenshot_2016-01-25_at_10.07.44_AM.png](//i.publiclab.org/system/images/photos/000/013/841/medium/Screenshot_2016-01-25_at_10.07.44_AM.png)](//i.publiclab.org/system/images/photos/000/013/841/original/Screenshot_2016-01-25_at_10.07.44_AM.png)

