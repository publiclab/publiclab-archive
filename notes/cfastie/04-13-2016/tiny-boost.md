---
title: "Tiny boost"

tagnames: 'kite-mapping, arduino, vermont, kite, saturnv, skyshield, half-spherical, eos_m, voltage, battery, boost, response:12906'
author: cfastie
path: /notes/cfastie/04-13-2016/tiny-boost.md
nid: 12963
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/015/501/original/LREOS40o40_3k.jpg)

# Tiny boost

by [cfastie](../../../profile/cfastie) | April 13, 2016 01:22

April 13, 2016 01:22 | Tags: [kite-mapping](../tag/kite-mapping), [arduino](../tag/arduino), [vermont](../tag/vermont), [kite](../tag/kite), [saturnv](../tag/saturnv), [skyshield](../tag/skyshield), [half-spherical](../tag/half-spherical), [eos_m](../tag/eos_m), [voltage](../tag/voltage), [battery](../tag/battery), [boost](../tag/boost), [response:12906](../tag/response:12906)

----

*Above: Stereographic projection of a spherical panorama stitched from 40 photos taken by a Canon EOS M camera on a Saturn V Rig hanging from the ceiling by its Picavet in the middle of the living room.*

Last fall as it got cooler, I noticed that the batteries powering the servos on the Saturn V autoKAP rig [were lasting less than an hour](https://publiclab.org/notes/cfastie/10-23-2015/power-to-the-skyshield). I switched from four AAA to six AAA batteries to fix the problem, and assumed that the increase in voltage (from 6 volts to 9 volts) was responsible for the fix. Today's tests suggest that the fix was not solely related to voltage.

Last week I [compared four switching regulators](https://publiclab.org/notes/cfastie/04-02-2016/plenty-boost) (boost converters) which maintain a constant output voltage  even as the voltage input from batteries wanes. I was lusting after a fifth regulator which cost a lot more, and when it went on sale on Arduino Day (Arduino's 11th birthday, I think) I bought a couple from [Pololu](https://www.pololu.com/product/791). The range of voltages which the Pololu regulator handles seemed better for powering the SkyShield on the Saturn V Rig, but when it arrived I confirmed another reason that it might be worth $11.00 -- it's tiny. The best $3.00 regulator I tested weighs 11 grams, and the new Pololu one weighs only 1.6 grams.

[![boost_20160412-4589.jpg](//i.publiclab.org/system/images/photos/000/015/504/medium/boost_20160412-4589.jpg)](//i.publiclab.org/system/images/photos/000/015/504/original/boost_20160412-4589.jpg)  
*Above: The $3.00 Sunkee regulator (right) and the comparatively tiny and expensive Pololu regulator (left).*

The Pololu regulator is so small I was able to install it inside a case for four AAA batteries. It fits in one of the battery bays.

[![boost_20160412-4604.jpg](//i.publiclab.org/system/images/photos/000/015/506/medium/boost_20160412-4604.jpg)](//i.publiclab.org/system/images/photos/000/015/506/original/boost_20160412-4604.jpg)  
*Above: I originally powered the SkyShield autoKAP controller with four AAA in one of these cases. Now three batteries in the case is all I need, even in cool weather.*

I tested the new regulator with three AAA batteries by hanging the Saturn V Rig with Canon EOS M inside the house (it was raining outside). The EOS M weighs two or three times as much as a typical PowerShot, so the servos would get a workout. I also wanted to test the pan and tilt positions to make sure the EOS M was capturing photos with enough overlap to stitch together. The SkyShield operated the pan and tilt servos for hours, but the camera was turned on for just 10 or so complete cycles (40 photos per cycle). The IR LED for triggering the camera was always flashing, so the power test was definitive. The main image above demonstrates that the photo overlap should be good.

[![SatVLR.jpg](//i.publiclab.org/system/images/photos/000/015/507/medium/SatVLR.jpg)](//i.publiclab.org/system/images/photos/000/015/507/original/SatVLR.jpg)  
*Above: An EOS M on the [Saturn V Rig](http://kaptery.com/product/saturn-v-rig) with a [SkyShield autoKAP controller](http://kaptery.com/product/skyshield-autokap-controller) powered by three AAA batteries with a switching regulator.*

The first test was done at room temperature (about 66°F) with three Tenergy AAA batteries. These are 1.2 volt, 1000mAh rechargeable Ni-MH batteries. After the newly regulated batteries powered the servos for four hours without issue, I got bored and ended the test.

[![TenergyV.PNG](//i.publiclab.org/system/images/photos/000/015/508/large/TenergyV.PNG)](//i.publiclab.org/system/images/photos/000/015/508/original/TenergyV.PNG)  
*Above: The output voltage of three Tenergy batteries dropped from 3.82V to 3.52V while powering the servos for four hours. The output of the switching regulator stayed constant at about 6.14V.* 

The second test was in the garage where it was 40°F today. This time I used three eneloop batteries which are 1.2 volts like the Tenergy AAA, but are only 750mAh. I cooled the batteries to 40°F before the test started.

[![eneloopV.PNG](//i.publiclab.org/system/images/photos/000/015/509/large/eneloopV.PNG)](//i.publiclab.org/system/images/photos/000/015/509/original/eneloopV.PNG)  
*Above: The output of three eneloop batteries dropped from 3.94V to 3.47V in four hours, but then fell to 2.61V an hour later. During that hour, the servos stopped working even as the output of the regulator stayed constant at 6.14V. When I warmed the batteries back to about 60°F, the servos ran again, but not for long.*

Although I had assumed that when the servos failed to function properly it was because the battery voltage dropped below some threshold, today's tests suggest that the voltage was plenty high to operate everything. The servo failure might have been due to insufficient current which I did not measure. 

The specs for the switching regulator indicate that it can operate on input voltage as low as 1.5V. And it was indeed producing 6.14V when the batteries gave it as little as 2.61V. 

Since I find electricity to be indistinguishable from magic, I don't really know what was responsible for the servo failure. But four hours of operation on three AAA rechargeable batteries is the excellent result I was hoping for. This was the result at 40°F as well as at room temperature, so that is really good news for cool weather flying. Instead of flying the Saturn V Rig with six AAA like I have done since October, I can now save almost the weight of three AAA. That 30 gram bonus will help when I try to fly the 365 gram brick of EOS M for the first time this spring. Or maybe not until summer if the weather doesn't improve soon.
