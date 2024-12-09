---
title: dual camera trigger
tagnames: balloon-mapping, kite-mapping, triggering
author: mathew
path: /wiki/dual-camera-trigger.md
nid: 1923
uid: 4

---

# dual camera trigger

by [mathew](../profile/mathew), [cfastie](../profile/cfastie)

May 07, 2012 23:33 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [triggering](../tag/triggering)

----

Jeffrey Warren has extensively investigated using 555 circuits to trigger cameras via CHDK.  This appears to be the least expensive option, [his notes are here](/wiki/dual-camera-kit-electronics).  

Chris Fastie has explored Jeff's 555 setup and refined it into a beautifully constructed timer setup that costs less than $20:
<iframe width="420" height="315" src="https://www.youtube.com/embed/hRYcv7CO7R8" frameborder="0" allowfullscreen></iframe>


for making completely DIY 555 circuits, [see Mathew Lippincott's note here](/report/adjustable-555-based-shutter-trigger-circuit).

Chris has also used a tiny remote control purchased on ebay. [his notes and KAP forum discussions here.](/notes/cfastie/4-22-2012/tiny-remote-control)

And an [AuRiCo](http://skyware.fam-engels.de/), or AutoRigController, [sold in the states by Brooks Leffler](http://www.brooxes.com/newsite/BBKK/BBKK-PARTS.html#AuRiCo).  His notes are [here](/notes/cfastie/4-10-2012/almost-synchronous-shutters) and [here](/notes/cfastie/4-14-2012/good-shutter-synchronization).  The AuRiCo is quite capable and very small and lightweight, but costs a lot (it can also control two servos).  The one sold at Brooxes for US$64 is a special version that DOES NOT HAVE an output for USB shutter release via CHDK.  So it requires a US$44 cable (same page) to work via USB.  [Peter Engels](http://skyware.fam-engels.de/) sells a version that does have an output for USB triggering via CHDK. 