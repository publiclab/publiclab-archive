---
title: "IR filter switchers"

tagnames: 'near-infrared-camera, infrared, ircam, infrared-camera, filter-switcher'
author: mathew
path: /notes/mathew/3-12-2013/ir-filter-switchers.md
nid: 6315
uid: 4

---

![](https://publiclab.org/sites/default/files/Screen shot 2013-03-12 at 7.49.19 PM.png)

# IR filter switchers

by [mathew](../../../profile/mathew) | March 13, 2013 03:11

March 13, 2013 03:11 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [infrared](../tag/infrared), [ircam](../tag/ircam), [infrared-camera](../tag/infrared-camera), [filter-switcher](../tag/filter-switcher)

----

following up on my [IR/Visible light camera dreams](/notes/mathew/3-11-2013/irvisible-light-camera-dreams-parts), I've been tracking down a component from the inside of security cameras: a solenoid-driven filter switcher (IR-CUT or IRC filter)! this a device that can quickly slide one filter in place of another, allowing a near-infrared night vision mode. IF it switched fast enough, a hyperspectral photo could be compiled from multiple images taken with a single camera.  I'm seeing times for filter switching ranging from 40-200ms.  40ms might be fast enough to take two rapid succession photos without too much blur.

Its hard to find the individual components, but they should be cheap, as they appear to already be [integrated into some cheap M12-mount security camera lenses](http://www.aliexpress.com/item/2-8mm-lens-ICR-Specifications-for-2-8mm-lens-IR-cut-Switching-Mechanism-Free-Shipping/511690264.html). Shenzhen Zonhen Electric Appliances Co., Ltd is [listing bulk orders at $1.10](http://www.made-in-china.com/showroom/pollyluodan/product-detaileMcmRLgHgvpV/China-Dual-Filter-Switcher-ZHS-0504-.html) all over the internet, but they aren't returning my e-mails (bad sign).  ShenZhen VERITION technology Co.,Ltd has [two](http://www.alibaba.com/product-free/113502466/IR_Cut_filter_removable.html) different [models](http://www.alibaba.com/product-free/112570399/IR_CUT_Switcher_Dual_filters_switcher.html) listed for $15.

[Optitrack filter switcher, $50](http://www.naturalpoint.com/optitrack/products/v120-slim/buy.html)

[Leopard Imaging Inc. filter switcher, $20](http://shop.leopardimaging.com/product.sc?productId=140&categoryId=19)

[5v filter switcher, 200ms, $25](http://www.electronics123.com/s.nl/it.A/id.2901/.f)
it was good to find a speed rating!

[40ms dual filter switcher](http://www.eopc.com/fs2.html)

##Filter Wheels##
less attractive and slower are filter wheels, like this [$6 filter wheel for the iphone](http://www.amazon.com/Wisedeal-Special-Effect-Filters-Protective/dp/B00ALLT5AO/)

[Here's an awesome arduino-powered one just for doing science.](http://intermittentshorts.blogspot.com/2012/12/an-arduino-based-synchronized-fast.html)