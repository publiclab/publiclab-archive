---
title: "Calibrating low cost air quality sensor part 2"

tagnames: 'calibration, air-quality, dustduino, pm, particulate-matter, air-sensors, activity:calibration'
author: jiteovien
path: /notes/jiteovien/08-20-2018/calibrating-low-cost-air-quality-sensor-part-2.md
nid: 16967
uid: 540008
cids: 20511
---

# Calibrating low cost air quality sensor part 2

by [jiteovien](/profile/jiteovien) | August 20, 2018 16:08

August 20, 2018 16:08 | Tags: [calibration](/tag/calibration), [air-quality](/tag/air-quality), [dustduino](/tag/dustduino), [pm](/tag/pm), [particulate-matter](/tag/particulate-matter), [air-sensors](/tag/air-sensors), [activity:calibration](/tag/activity:calibration)

----

This is a follow up post to \[Calibrating low cost air quality sensor\]([https://publiclab.org/notes/jiteovien/07-18-2018/calibrating-low-cost-air-quality-sensor-1-2](https://publiclab.org/notes/jiteovien/07-18-2018/calibrating-low-cost-air-quality-sensor-1-2)).

I built 3 sensors around the Shinyei that log data on an SD card. I also 3D printed some enclosures. A picture of a finished box (lid not shown) is below. I tested the sensors pretty extensively indoors to ensure that the program and electronics were running well. I did not find any issues.

![image description](/i/26274.jpg "IMG_6307.jpg")

I've been working closely with the Rhode Island Department of Environmental Management's to understand their air quality monitoring network and identify potential gaps. On Friday 8/3, I had the opportunity to collocate 2 (the third was not ready) of my sensors with a Federal Equivalent Method (FEM) sensor at their "near-road" site along Interstate 95 on Hayes and Park Street in Providence, RI. The FEM collects mass concentrations on an hourly basis using a filter and weigh technique. This is in contrast to the optical particle count to mass approximation technique used in low cost sensors such as the Dustduino, Dylos, Speck and Purple Air. These sites often look like a small trailer from the outside. Some images of the inside are below.

![](https://lh3.googleusercontent.com/XjDjFbYSY0ivRlEhgOBA5tslOS9ReadgjXKZrP0suKxtF2fRPzOH4-_W6GGKeb003oJlFaNZrKw-IXlDgsAZHkI19TYerP6OjVsUBmysPoGWLvuOooDousH8wQB4Y2pA8hVn8CD2)![](https://lh5.googleusercontent.com/D27nP0nvRiLvY4Ay1KM6XI6gbifx1kL7LL3MWl6w1-wnKEiZ0uMxYXVsnJ06Skw5m0MgTpA7074_cUDHeM0dUyFE5KlmAvpGtblLFIHCco_sY9MNzqUPNmWi-UzLva7LIiTpc8Yq)

The circled machine in the picture on the left is the FEM sensor that uses a beta attenuation monitoring (BAM) method.

The machine in the picture on the right is an ultrafine particle counter. It uses condensation to enlarge the particles such that they may be measured optically.

The two sensors were placed on the roof of the trailer and just duct-taped to the grated roof for some security. Photos of the sensor on top of the trailer can be seen below.

![](https://lh6.googleusercontent.com/AZTi6wuHcfl9hqVH-p9QM_kEYjVnbl2nbnO83Eodex-HooR_MU-yWIPrA-tlAcxjzOlX7c91b8vUcbEOXdynoNnG52eghqavm_GyBsQzXiTZ8KsjbZeW0U-S_c_zeynT_Kyq3oQO)![](https://lh5.googleusercontent.com/ZLSyL5vgJwfYVRQGL844hFc0Z46H18iHMDnLDOBCw8GVtVI8yRTDt0J0lTaG7S3mVwVgkD-XP7LKE9SAd5pxw_NMzvxP199N6SvZ5zqiJ4TcMHBktfUsSMqQg9b0AFEY1KbSlxId)

On my first collocation attempt, there was a rainstorm within 24 hours. Coordinating with the DEM availability was challenging and I was not able to return to the site until 8/16\. By then, as I had feared, there was a small pool of water within the enclosure and the arduino had rusted a bit. When I checked the electronics that day, they were not working and i was unable to read the SD cards on my computer. A few days later, the electronics are functioning but I am only able to read one of the SD cards. And that data file was tampered with as well. So I have no data from the Dustduino but on 8/16 I setup the 3rd sensor that hadn't had any water damage by itself and will pick it up later this week.

Some reflections from this experience:

- An alternative method for storing data is using a Wi-Fi module as discussed in some other posts. Wi-fi logging can have challenges especially when intending to use a sensor in an outdoor or remote environment. However, investigating this option in the specific location i wanted to use could have potentially helped save the data.
- I'm interested in thinking about more thoughtfully crafted casing designs for the Dustduino and I invite others to do so as well. Some initial thoughts I have are:
  - Not having the lid be on the top surface
  - I intentionally made the lid to not be tightly-fitted so I could easily access the electronics an SD card. Maybe rethink this choice because a press-fit design would be more impenetrable to water
  - Using geometries like slanted surfaces that would naturally re-direct water away from the box
  - Could also create a casing _within_ a casing to tightly cover electronics that don't need to be easily accessible