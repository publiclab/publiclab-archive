---
title: "DIY water monitoring workshop at HKBU"\ntagnames: 'workshop, water-quality, knowflow, activity:knowflow'
author: shanlter
path: /notes/shanlter/01-19-2018/diy-water-monitoring-workshop-at-hkbu.md
nid: 15550
uid: 420999

---

# DIY water monitoring workshop at HKBU

by [shanlter](../profile/shanlter) | January 19, 2018 04:08

January 19, 2018 04:08 | Tags: [workshop](../tag/workshop), [water-quality](../tag/water-quality), [knowflow](../tag/knowflow), [activity:knowflow](../tag/activity:knowflow)

----

I gave a 3 hour workshop on [DIY water monitoring at HKBU yesterday](https://dnnsociety.org/2018/01/05/workshop-harvest-water-quality-data-for-environmental-investigation-diy-monitor-with-arduino/). and want to share my schedule and slides here.

Ideally it should be **2 X 3hour workshop**, or **2 X 3hour indoor workshop plus half day fieldwork**. I just don't have more time yesterday...

This is a project based learning workshop that contains 3 parts: **Problem, Learn, Create.** the slides I am using is here:

[https://drive.google.com/open?id=1TIIJFnPvrtT2ub-9-Aj0d39julhbXjMo](https://drive.google.com/open?id=1TIIJFnPvrtT2ub-9-Aj0d39julhbXjMo)

# Problem

I prepared 5 problems as examples that need to be further investigate or solve. it's here. If have more time, actually can take participants out for 0.5-1 day fieldwork, to better understand local problem

[https://drive.google.com/open?id=15DSqDwup6LiTnPYZ7PjgriwOkLp8pwLS](https://drive.google.com/open?id=15DSqDwup6LiTnPYZ7PjgriwOkLp8pwLS)

# Learn

there are 2 session:

**1\. Learn water quality assessment with quick test kits.**

I introduce this part with a water guessing game. All participants were asked to bring water sample, and I also prepare some samples. I put the sample into different bottles, to let them guess which is what by testing the water.

I prepared these test kits: **TSD, Chlorine, Hardness, NH4, PO4, CODmn, pH, heavy mental...** most of the kits can be purchased from the following websites:

pH strips, hardness strips, [http://www.mn-net.com/tabid/4928/Default.aspx](http://www.mn-net.com/tabid/4928/Default.aspx)

Sealed reagents for ammonia, COD, phosphate, etc [http://kyoritsu-lab.co.jp](http://kyoritsu-lab.co.jp/)

Chlorine test kits like _[https://detail.tmall.com/item.htm?id=544348124604&ali\_refid=a3\_430583\_1006:1110492222:N:余氯测试剂:b0075cf3109ed5fe3340378b628f08bf&ali\_trackid=1\_b0075cf3109ed5fe3340378b628f08bf&spm=a230r.1.14.1](https://detail.tmall.com/item.htm?id=544348124604&ali_refid=a3_430583_1006:1110492222:N:%E4%BD%99%E6%B0%AF%E6%B5%8B%E8%AF%95%E5%89%82:b0075cf3109ed5fe3340378b628f08bf&ali_trackid=1_b0075cf3109ed5fe3340378b628f08bf&spm=a230r.1.14.1)_

**2\. Learn Arduino basic with arduino uno, and write a simple code to read and store TDS value into a microSD Card**

sample code is here but I encourage the participant to write by themselve

[https://github.com/shanlter/HKBU\_WorkShop](https://github.com/shanlter/HKBU_WorkShop)

the procedure is mostly like this:

- turn on LED
- connect TDS sensor
- Make interactions between TDS and LED (e.g tds over 150ppm led will blink)
- store data into SD card
- connect real time clock
- put everything together.

the sensors, board, and modules are here

[http://www.dfrobot.com.cn/goods-1527.html](http://www.dfrobot.com.cn/goods-1527.html)

# Create

I don't have time for this part, but ideally participant will group on to discuss/design their system, and prototype it, with the provided materials