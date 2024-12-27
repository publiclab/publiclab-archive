---
title: "Browser-based Arduino sensor data transfer using WebRTC and headphone jack"

tagnames: 'software, gsoc, coding, germany, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827, first-time-poster'
author: rmeister
path: /notes/rmeister/03-24-2016/browser-based-arduino-sensor-data-transfer-using-webrtc-and-headphone-jack.md
nid: 12883
uid: 468994
cids: 14045,14056,14063,14064,14556,14557,14560,14564,14565,14567,14573,14650,14657,14659
---

# Browser-based Arduino sensor data transfer using WebRTC and headphone jack

by [rmeister](/profile/rmeister) | March 24, 2016 19:45

March 24, 2016 19:45 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [coding](/tag/coding), [germany](/tag/germany), [hidden:response](/tag/hidden:response), [gsoc-2016](/tag/gsoc-2016), [gsoc-2016-proposals](/tag/gsoc-2016-proposals), [response:12827](/tag/response:12827), [first-time-poster](/tag/first-time-poster)

----

**Name:** Richard Meister

**Affiliation (school/degree)** B.sc. in Electrical Engineering and Information Technology, Technical University Darmstadt

**Location (where you are):** Darmstadt, Germany

**Email:** richard.meister.de@gmail.com

**Phone:** +491769144XXXX

**Project title:**  Browser-based Arduino sensor data transfer using WebRTC and headphone jack

## Project description

__Abstract/summary:__

This project allows web pages to access sensor data from Arduino via WebRTC and the common audio jack of smartphones.

__Describe the need your project fulfills:__

Many open data projects rely on volunteers spending time to gather data, e.g. from remotely placed sensor nodes that capture environmental parameters. Generally, the more data the better conclusions can be drawn. However, many projects suffer from having not enough volunteers and therefore collected data. If there is a lack of volunteers the barrier to contribute to a project needs to be lowered. This projects approach is to reduce the barrier by removing the necessity for contributors to install a specific software _and_ to possess particular hardware. People often unwillingly install additional software. Besides this, it is a time consuming task that does not contribute to a project itself. But the even bigger obstacle is hardware. If it comes to buying additional hardware, most people will think twice before starting to contribute. A solution for these two problems would be appreciated by a large number of projects.

__How will your project meet this need:__

Making this project as independent as possible from the underlying hardware, a wired connection via headset socket was chosen. Not only that headset sockets are highly common in past and present smartphones - probably more common than Bluetooth or NFC as other candidates for this purpose - the communication via audio signals also has another huge benefit: Recording and processing audio from a web page with JavaScript and WebRTC makes a completely barrier-free solution. Instead of installing an application the user simply visits a web page.

As data transmission via audio cable is not that usual, the question may arise what data transfer rate will be possible. To answer this, I looked for some ratings of software serial [implementation](http://www.pjrc.com/teensy/td_libs_AltSoftSerial.html). Considering that there needs to be some space for other operations, for soft serial a data rate of 57,6kbit/s is feasible. But in this projects scenario we have a [capacitive coupled](http://www.elechouse.com/elechouse/images/product/softmodem/Arduino%20softmodem-5.jpg) link, which means the signal has to be modulated to a carrier, as DC signals do not pass capacitors. Therefore a carrier has to be generated, consuming CPU time. This makes clear why the existing [SoftModem](https://github.com/arms22/SoftModem) library merely supports up to 1200 bit/s. Sufficient for transmission of individual values but maybe a little slow for larger amount of buffered data and definitely too slow for real time streaming of captured data (Arduino Unos sampling rate is approx. [9600 samples per second](http://www.microsmart.co.za/technical/2014/03/01/advanced-arduino-adc/), resulting in 96kbit data per second).

Getting a first working prototype should be straight forward, as there already is a counterpart to SoftModem: [modem.js](https://github.com/dolske/modem.js). Subsequent, the focus is on a clean implementation giving reliable communication and reproducible results. Afterwards, I would like to investigate two possible enhancements: On the one hand speeding up transfer rate, e.g. by using a different modulation scheme. On the other hand, probably more important, the [Firmata](https://github.com/firmata/protocol) protocol would make it possible to write a general purpose Arduino sketch, allowing the user to dynamically choose a sensor source. Should there be still time left, I would like to find out if a wireless solution with audio signals is feasible, because it will further reduce the barrier for users.

__Timeline/milestones:__

The time schedule presented here is a relative optimistic estimation, as until now the coding seems to be straight forward. Occurring problems are taken into account with the last weeks being more flexible and scheduled with extended goals. Also I have to mention that there will be one week between June the 23th and august the 3rd that I have to spend for an advanced training course in the Alps.

- Community Bonding period (22 April - 23 May):
	As the proposed project is not directly related to other projects from PublicLab, I will use this period to take a closer look at the community in general. To be more accurate, my aim is to identify at which projects my contribution can be utilized and if there are more specific requirements to be taken into account.
- Week 0 (16 May - 20 May):
	Understand SoftModem, (re)writing documentation, wiring components together, eventually testing CPU load and looking on waveforms more closely.
- Week 1 (23 May - 29 May):
	Understand modem.js, design of a clean demo web page.
- Week 2 (30 May - 5 June):
	Finishing basic demo web page.
- Week 3 (6 June - 12 June):
	Beginning of Firmata integration, making necessary changes to the different libraries.
- Week 4 (13 June - 19 June):
	Necessary code changes will be completed. Testing advanced Firmata features like I2C, servos, stepper motors, etc.
- Week 5 (20 June - 26 June):
	Adding advanced Firmata capabilities to the demo web page.
	Mid term evaluation.
- Week 6 (27 June - 3 July):
	Unavailable due to advanced training course.
- Week 7 (4 July - 10 July):
	More tests and error rate evaluation.
- Week 8 (11 July - 17 July):
	Enhancing stability, eventually implementing error detection/correction.
- Week 9 (18 July - 24 July):
	Time for further improvements.
- Week 10(25 July - 31 July):
	RPC (e.g. Firmata) compatibility and example Arduino sketches.
- Week 11 (1 Aug - 15 Aug):
	Write a tutorial based on the example sketch and investigate extended goals/future work.
- Week 12 (15 Aug - 23 Aug):
	Cleaning up code and documentation.


__What broader goal is your project working towards?__

The promotion of open science can be seen as the main goal. Getting more people involved in open projects is not an easy task. Lowering the barrier for non-technical people will lower the effort that needs to be taken to get enough volunteers. As side-effect, more people get in contact with science and they will see that it does not need an academical background to be a scientist. This surely is a benefit in multiple ways.

__What resources will you need: people, documentation, literature, sample data, hardware if applicable:__

I will need a shield that extends the Arduino with a headphone jack, linked below. The shield is not necessary in the first place, as I am able to verify waveforms with an oscilloscope.

- Arduino, present
- Oscilloscope, present
- [SoftModem Arduino Shield](http://www.elechouse.com/elechouse/index.php?main_page=product_info&cPath=90_92&products_id=2199), needed

### Setup

I forked SoftModem and modem.js. In the next days I will program an Arduino with SoftModem and capture some output signals with an oscilloscope.


### Experience

As a master student of electronics and data engineering, my technical background includes several programming languages. Regarding digital signal processing, I am familiar with Matlab/Octave. In last my last university project I used Octave to generate signals for brute-forcing garage door openers. I gained experience in Python during a project for acoustic device classification and also web related projects like my bachelor thesis. The language I am most experienced in is Java, because I spend two years as research assistant, programming back end and client applications for the [Simpli-City](http://simpli-city.eu/) project. Last semester I worked on a smaller project that included JavaScript and particularly Angular programming, so JavaScript is not completely new to me but I am sure my skills regarding it can be enhanced. What should not be missing is C, where I have basic knowledge, including tasks like implementing SPI or I2C drivers. I am confident to transfer my DSP knowledge from Matlab to JavaScript and C.

I have read the PublicLab guidelines and albeit my GitHub account is still empty, I know the concept of pull requests through the use of GitLab for university projects.

### Teamwork
Besides university projects, I worked in the international team of the Simpli-City project. It began as a closed source project, but to my knowledge some of the code was published. My involvement in the project included writing an sensor abstraction layer as background service for an Android application. In the first place I had to familiarize with the Android SDK. Furthermore I developed multiple back end services running on a central server, making sensor data available to third party applications. The contribution started during my bachelor studies, but required techniques not covered yet at university, so I had to teach them myself. Regarding teamwork I found it very motivating to get support by more experienced developers.

### Expertise
During my studies I had a strong focus and interest in communication schemes. This covers a wide range of technologies I used in several projects. Publish-subscribe mechanisms like MQTT are well known to me, since I implemented an energy-efficient push notification service in the context of my bachelor thesis. Besides network protocols that enable the so-called Internet of Things, I am very familiar with radio signals. Within the scope of a course about physical layer security I implemented a program to hack remotely controlled garage door openers. For my private projects and experiments with microcontrollers, serial communication is a basic and well known task. My expertise is logically connecting remote hardware and making it available in software, which is why I am suited for this project.

### Interest

In the past there were no larger contributions to open science projects. Once in a while I installed an app for crowdsourcing purposes, e.g. sensing network speed and availability during large public events.


### Audience

Generally this project targets everyone, but especially non-technical users will profit. For them it will become dramatically easier to contribute to open data projects. In consequence such projects will profit from this work. Additionally developers will be equipped with a new way of communication.

### Context

I have the time to do this project, it is for a good purpose and I can explore a topic in the broad field of embedded electronics. I would like to further dive into this field, as I can envision doing a related master thesis.

### Ongoing involvement

Two months after this project I am going to start my master thesis. Until then I will be available for code improvements and other tasks. I can imagine further contribution in the context of a related thesis topic.

### Commitment

I am well aware this project will be a three month full time job. Accordingly I will choose only few university courses that will not be in conflict with this project.
