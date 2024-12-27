---
title: "Automated recording of daily behavioral and vibroacoustic activity in Xylocopa virginica"

tagnames: 'raspberry-pi, massachusetts, insects, vibrations, northeast, rpi, bees, project'
author: ShawnSmall
path: /wiki/monitoring-bee-behavior-with-a-raspberry-pi.md
nid: 24654
uid: 721831

---

![](https://publiclab.org/public/system/images/photos/000/041/752/original/Eastern_Carpenter_Bee_-_Xylocopa_virginica__Leesylvania_State_Park__Woodbridge__Virginia_by_Judy_Gallagher_is_licensed_with_CC_BY_2.0._To_view_a_copy_of_this_license__visit_httpscreativecommons.orglicensesby2.0.jpg)

# Automated recording of daily behavioral and vibroacoustic activity in Xylocopa virginica

by [ShawnSmall](../profile/ShawnSmall)

September 26, 2020 03:01 | Tags: [raspberry-pi](../tag/raspberry-pi), [massachusetts](../tag/massachusetts), [insects](../tag/insects), [vibrations](../tag/vibrations), [northeast](../tag/northeast), [rpi](../tag/rpi), [bees](../tag/bees), [project](../tag/project)

----

__Photo credit: Eastern Carpenter Bee - Xylocopa virginica, Leesylvania State Park, Woodbridge, Virginia by Judy Gallagher is licensed with CC BY 2.0. To view a copy of this license, visit https.creative.commons.org licenses by 2.0__

Hi Everyone, 

for my undergraduate thesis, I am conducting research on the eastern carpenter bee, _Xylocopa virginica_. Here, I will be using a Raspberry Pi Zero WH to both operate data collection devices and to store collected data. Transducers and a camera will be placed outside of an eastern carpenter bee nesting gallery, and vibroacoustic and circadian activity pattern data will be collected. A pilot data collection period will occur between February and March. If the data collection instrument is successful, then the work will continue for an additional year after I graduate, where future students will be able to take over my work.

(My original Public Lab research note on this work: https://publiclab.org/notes/ShawnSmall/09-19-2020/monitoring-bee-behavior-with-a-raspberry-pi)

(My website highlighting this research: [https://shawnsmall.github.io])

### Location

This work will be conducted in eastern Massachusetts. An artificial carpenter bee nest will be set up on private property. Bees will be relocated from their natural nesting gallery before becoming active after hibernating to the artificial nest.

### Goals and Motivations

This work will contribute to the body of knowledge on an understudied large carpenter bee species. Here, the vibroacoustic behavior and the daily activity patterns of the eastern carpenter bee will be monitored. The frequencies of performed behaviors will be identified and two transducers will be used to approximate the location of the bee producing sounds from within the gallery during each recording.

I also intend to demonstrate ease of designing and building one's own data collection instrument, which is a much cheaper alternative to purchasing expensive scientific equipment. By combining hardware with open source software, researchers are able to build custom instruments without dedicating large portions of their funding to buying expensive instruments. This data collection instrument is highly generalizable - all sorts of taxa can be monitored for behavioral observations with this device. Hopefully, other researchers will construct their own data collection instrument for future behavioral studies.

### People who are involved

I am a student in the Open Science Instrumentation and Data Collection thesis seminar at UMass Amherst.

### What are we working on now:

I am currently working on locating wild, estivating eastern carpenter bees. My research plans have changed slightly, so I built an artificial carpenter bee nest to house wild bees that I hope to collect. I am also working on testing the vibroacoustic data collection components of the data collection instrument.

### Updates

<a class="btn btn-large btn-primary" href="https://publiclab.org/subscribe/tag/CarpenterBees">Subscribe to updates on this project </a>

**Update # 1:** I am submitting my research proposal in just a few days time. A complete (but subject to change) list of hardware for this project is available in the activities section. Each of my finalized data collection instruments are expected to cost around $300.00. If I were operating the instrument with a main power supply instead of a field work friendly solar charging system (solar panel + PiJuice HAT + battery), then the finalized instrument would cost about $130 for hardware.

**Update # 2:** I submitted my grant proposal this week, for a requested $1,000.00. This funding will be enough for me to build three versions of my data collection instrument: one prototype and two finalized versions. Each instrument is expected to cost $329.86 in hardware. Next, I will work on creating a more precise methodology for my work.

**Update # 3:** In the coming weeks I will continue to practice Raspberry Pi coding. Ultimately, the goal is to have a working prototype data collection instrument before the end of this year. For the initial prototype testing, I will focus on testing the transducers and the camera pre-capture and post-capture system. The solar power system will be tested after the data collection components have been tested.

**Update # 4:** In addition to the current activities listed above, I am going to focus on practicing my Raspberry Pi coding. The goal is to continue building my growing Raspberry Pi knowledge and to start creating programs for the camera and for the transducer operation.

**Update # 5:** I am continuing to practice with the Raspberry Pi, continuing to develop my methodology, and continuing to develop my literature review. In the near future, I will begin protoyping my data collection instrument. I will test out camera operation and transducer operation, with the goal of having working data collection systems before the end of this year. I am also working on an Instructable to explain the device assembly and operation, and possibly a website to communicate my results and the societal impact of my work.

**Update # 6:** I have nearly completed my informal literature review, so I will start working on my formal annotated bibliography shortly. I am also still working on methodology. I am tackling new Raspberry Pi case studies weekly to develop my coding knowledge. Recently, I presented my current work to some of my peers. It was good to present to others and to share my work in a live (Zoom) setting.

**Update # 7:** I am ready to start working on my annotated bibliography, which will detail the findings in all the primary literature that I am citing for my thesis. The annotated bibliography is my formal literature review. I am still developing my methods and my initial code program for the prototype instrument.

**Update # 8:** Hello everyone, my current semester is approaching its conclusion and I am proud of the new coding skills that I developed over the course of the semester. I still have plenty of room for improvement; I will continue practicing in the coming months. I started working on my annotated bibliography, which will detail all of the literature that I intend to cite in my honors thesis. I decided that my work will include the motion (https://motion-project.github.io/motion_guide.html) and the SoX (http://sox.sourceforge.net/Docs/Documentation) program libraries among others. I expect the majority of my program to be based on these two libraries. I commenced the development of my own website this week, that is intended to further highlight my thesis research. I will create the website with an open source programming software, to continue with the open source theme of this research. More details will follow shortly.

**Update # 9:** My website discussing this research is now live ([https://shawnsmall.github.io]). To stick with the open source theme of this research, the website is programmed using HTML. I hosted the website with Github for simplicity and cost effectiveness. Please note that some of the website features are still under development. My next steps will be to ensure that the contact form works, to ensure that the website displays properly on small-screen devices, and to customize the URL. I am also adding my first draft of the data collection instrument's Python program to Github this week.

**Update #10:** This is my first Public Lab update of 2021. I built an artificial carpenter bee nest that will house bees once I collect them. I am searching for locations in eastern Massachusetts that have known carpenter bee activity, so that I may collect all of the bees in a natural nesting gallery and relocate them. I am also working on testing the audio components of my data collection instrument.

### Questions

My research questions:

**What are the daily frequencies of performed behaviors in _X. virginica_?**

**What are the species typical daily high and low activity patterns?**

****

### Activities we’ve done in our project

[t\CarpenterBees](../../tag/activity:t\CarpenterBees)

**Materials List (subject to change):**

-Transducer;
-Audio Injector Sound Zero Board;
-Plastic Enclosure;
-PiJuice HAT Portable Power Supply (UPS);
-PiJuice 5000mAh Battery;
-Raspberry Pi Zero Wireless WH (Pre-Soldered Header);
-MicroSD Card -16 GB - Class 10 - BLANK;
-Official Raspberry Pi Zero Case + Mini Camera Cable;
-Micro-USB Power Supply - 5.1V 2.5A, UL Listed;
-Ethernet Hub and USB Hub w/ Micro USB OTG Connector;
-Aluminum Heatsink for Raspberry Pi Zero;
-PiJuice Solar Panel - 12 Watt;
-Hosa CPR-202 Dual 1/4" TS to Dual RCA Stereo Interconnect Cable, 2 Meters;
-Arducam Day/Night Raspberry Pi Camera;
- MakerSpot spacers and standoff hardware;
-Jumper Cables;
-1 TB micro SDXC cards


### Data


__