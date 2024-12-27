---
title: "Infrared Insect Microscopy"

tagnames: 'pi, raspberry, microscope, multispectral-imaging, activity:microscope, gsoc-2018, activity:community-microscope, community-microscope, noir, activity:community-microscope-usage, pin:activity:community-microscope-usage'
author: MaggPi
path: /notes/MaggPi/06-21-2018/infrared-insect-microscopy.md
nid: 16540
uid: 501996

cids: 19848,19849,19851,19880,19883,21380,21393,27714

---

![](https://publiclab.org/public/system/images/photos/000/025/254/original/Slide4.JPG)

# Infrared Insect Microscopy

by [MaggPi](../../../profile/MaggPi) | June 21, 2018 05:11

June 21, 2018 05:11 | Tags: [pi](../tag/pi), [raspberry](../tag/raspberry), [microscope](../tag/microscope), [multispectral-imaging](../tag/multispectral-imaging), [activity:microscope](../tag/activity:microscope), [gsoc-2018](../tag/gsoc-2018), [activity:community-microscope](../tag/activity:community-microscope), [community-microscope](../tag/community-microscope), [noir](../tag/noir), [activity:community-microscope-usage](../tag/activity:community-microscope-usage), [pin:activity:community-microscope-usage](../tag/pin:activity:community-microscope-usage)

----

Summary:This research note shows microscopic images/ videos of three insects observed with white and IR (850nm/940nm) LED light.   The images show that viewing insect internal features is possible. 

Introduction:  This note demonstrates that DIY microscope kits such as  https://www.kickstarter.com/projects/publiclab/the-community-microscope-kit , can be modified with a Raspberry Pi NoIR camera and IR LEDs to obtain  infrared images.  One reason to adapt microscopes for IR imaging is that many insect parts  are transparent when viewed with infrared light.   Insect infrared observations have been done since 2005 using a variety of  IR photomicroscopy techniques  ( http://www.microscopy-uk.org.uk/mag/indexmag.html?http://www.microscopy-uk.org.uk/mag/artoct05/dwd50ir.html ).   Adapting microscopes with a Raspberry PI  NoIR camera/ IR LEDs extends the range of these techniques by permitting high definition video, real time image processing and multispectral imaging.  

Procedure:
Microscope modifications: -The general approach is to combine a Raspberry Pi NoIR  camera with a microscope objective.   One possible method is to use a camera holder such as: https://publiclab.org/notes/partsandcrafts/11-26-2017/building-a-raspberry-pi-microscope

-Lighting modifications:Push button switches were used to toggle between different wavelengths.  Two LEDS were used for IR viewing. 

    -Two 850nm LEDs connected to push button switch
    -Two 940 nm LEDs connected to push button switch
    -One white LED  connected to push button switch

 -Video Processing-Since IR images  have a washed out effect,  video was adjusted for high contrast  (80 picamera settings).  This adjustment makes a noticeable difference in being able to detect internal features.  Video was captured and displayed (on youtube) in h264 format.

 -Bug collection - Sticky paper on top of light (sticky side up)  placed outdoors at night.   Typically is takes less then 20 minutes to collect bug samples.   Paper (with bug) is then cut for mounting on  microscope stage. 


Insect Infrared  Microscope Examples: 

-------------------------------------------------------------------------------
[![Slide1.JPG](/i/25251)](/i/25251)




-Bug 1a video (center) shows circulation/pumping action/850 nm view https://youtu.be/4D7N47cHwHA


-Bug 1b video (head) shows head internal features /850nm view
https://youtu.be/F-Pif_V5uEE








-------------------------------------------------------------------------------------------
[![Slide2.JPG](/i/25252)](/i/25252)


-Bug 2 video (center) shows circulation/pumping action/850nm and 940nm views  https://youtu.be/keh14V4n7Vg







--------------------------------------------------------------------------------------
[![Slide3.JPG](/i/25253)](/i/25253)


-Bug 3 video (head) shows pumping action/850nm and 940nm views https://youtu.be/WOMTCmb2dVw


---------------------------------------------------------------------------------------------
@warren, @icarito, @amirberAgain


Related posts:

https://publiclab.org/notes/MaggPi/06-05-2018/usb-webcam-vs-raspberry-pi-v2-field-of-view-fov-comparison-community-microscope-initial-evaluation-2 

https://youtu.be/I99p_4ypk_c