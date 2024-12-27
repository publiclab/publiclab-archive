---
title: "Microscope calibration overlays… What’s the best approach?"

tagnames: 'calibration, raspberry-pi, microscope, opencv, activity:microscope, gsoc-2018, activity:community-microscope, community-microscope, microscope-calibration, community-microscope-prototyping, activity:community-microscope-usage, activity:microscope-calibration, overlay'
author: MaggPi
path: /notes/MaggPi/06-23-2018/microscope-calibration-overlays-what-s-the-best-approach.md
nid: 16563
uid: 501996
cids: 19884,21162,25184,25185,25186
---

![](https://publiclab.org/public/system/images/photos/000/025/306/original/Slide3.JPG)

# Microscope calibration overlays… What’s the best approach?

by [MaggPi](/profile/MaggPi) | June 23, 2018 18:35

June 23, 2018 18:35 | Tags: [calibration](/tag/calibration), [raspberry-pi](/tag/raspberry-pi), [microscope](/tag/microscope), [opencv](/tag/opencv), [activity:microscope](/tag/activity:microscope), [gsoc-2018](/tag/gsoc-2018), [activity:community-microscope](/tag/activity:community-microscope), [community-microscope](/tag/community-microscope), [microscope-calibration](/tag/microscope-calibration), [community-microscope-prototyping](/tag/community-microscope-prototyping), [activity:community-microscope-usage](/tag/activity:community-microscope-usage), [activity:microscope-calibration](/tag/activity:microscope-calibration), [overlay](/tag/overlay)

----

Research question

Microscope calibration overlays... What's the best approach?

Introduction:

DIY microscope kits such as [https://www.kickstarter.com/projects/publiclab/the-community-microscope-kit](https://www.kickstarter.com/projects/publiclab/the-community-microscope-kit) , seek to develop tools that are 'affordable and simple as possible while still providing great microscopic images'. One option to simplify microscopic measurement is to create overlays that provide a scale reference.

Microscope calibration procedures typically use a very small ruler of a known length that will permit an accurate comparison for additional measurements. For example:

[https://publiclab.org/notes/mathew/08-23-2016/calibrating-a-microscope](https://publiclab.org/notes/mathew/08-23-2016/calibrating-a-microscope)

[https://publiclab.org/notes/partsandcrafts/02-26-2018/5-testing-and-calibrating-your-microscope](https://publiclab.org/notes/partsandcrafts/02-26-2018/5-testing-and-calibrating-your-microscope)

Using computer vision techniques it is possible to measure the ruler and display calibration references directly on a video display. The advantages of video overlay is that the viewer can see a reference scale and image at the same time.

Overlay Example

To demonstrate how a reference overlay could be used to assist microscopic measurements, computer vision software (opencv) was used to measure a calibrated ruler and then display a grid pattern.

A video run thru is at: [https://youtu.be/fnmG-ueE\_3k](https://youtu.be/fnmG-ueE_3k). (Best viewed at full screen to see the screen overlay.)

Step 1

A known reference is imaged and stored.

[![Slide1.JPG](/i/25298)](/i/25298)
Step 2\. A computer program reads the image and prompts the user to input scale information from the reference image. The software automatically computes a scale ratio which is used to create a grid overlay. (Note that the microscopic objective and camera resolution cannot be changed from step 1.)

[![Slide2.JPG](/i/25299)](/i/25299)

Step 3\. New object is now inserted on the microscope stage and is compared with the grid overlay. The user can now easily scale the image as well as determine the total measurement area.

[![Slide3.JPG](/i/25300)](/i/25300)

Note that the grid is square on the video display but rectangular when the image is converted to jpg format. The jpg grid measurement scale is consistent with the image scale.

[![Slide4.JPG](/i/25301)](/i/25301)

This slide below demonstrates different type of overlay patterns.

[![Slide5.JPG](/i/25302)](/i/25302)

Since there is wide range of techniques and display option available, this note request advice on best possible design and calibration methods.

-What is the best way to measure the reference and pass the data to the computer generated overlay?
-What type of overlay should be generated? Color? Pattern? Live video or stored on image?
-Should a grid be used at all? Would it be better to just generate a scale and insert on the image?

Note that I could also use computer vision to count the number of ruler divisions automatically. I didn't want to program this step until other calibration reference options were considered.  
The goal is to calibrate without the cost of a purchased reference.

See: [https://publiclab.org/notes/amirberAgain/05-23-2018/use-of-a-5-bill-for-microscope-calibration](https://publiclab.org/notes/amirberAgain/05-23-2018/use-of-a-5-bill-for-microscope-calibration)

The picture below attempts to use the side markings of a 5 dollar bill as a calibration reference. The irregular shapes would probably prevent any accurate measurements.

[![Slide6.JPG](/i/25303)](/i/25303)

Related posts:
[https://publiclab.org/notes/amirberAgain/01-12-2018/python-and-opencv-to-analyze-microscope-slide-images-of-airborne-particles](https://publiclab.org/notes/amirberAgain/01-12-2018/python-and-opencv-to-analyze-microscope-slide-images-of-airborne-particles)[https://publiclab.org/notes/MaggPi/06-05-2018/usb-webcam-vs-raspberry-pi-v2-field-of-view-fov-comparison-community-microscope-initial-evaluation-2](https://publiclab.org/notes/MaggPi/06-05-2018/usb-webcam-vs-raspberry-pi-v2-field-of-view-fov-comparison-community-microscope-initial-evaluation-2)
Software posted at:
[https://github.com/MargaretAN9/Peggy/blob/master/Pi Camera/videooverlayfinal.py](https://github.com/MargaretAN9/Peggy/blob/master/Pi%20Camera/videooverlayfinal.py)

@warren, @icarito, @amirberAgain