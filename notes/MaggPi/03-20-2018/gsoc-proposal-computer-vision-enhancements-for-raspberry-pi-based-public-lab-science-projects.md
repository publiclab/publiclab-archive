---
title: GSoC proposal: Computer Vision enhancements for Raspberry Pi based Public Lab Science Projects
tagnames: software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, gsoc-2018-final
author: MaggPi
path: /notes/MaggPi/03-20-2018/gsoc-proposal-computer-vision-enhancements-for-raspberry-pi-based-public-lab-science-projects.md
nid: 15978
uid: 501996

---

# GSoC proposal: Computer Vision enhancements for Raspberry Pi based Public Lab Science Projects

by [MaggPi](../profile/MaggPi) March 20, 2018 02:44

March 20, 2018 02:44 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [gsoc-2018-final](../tag/gsoc-2018-final)

----

## About me
18 year old aspiring computer programmer; interested in computer science and how computer vision can be applied to automate spectroscopic analysis.  

**Affiliation**  
-Currently enrolled in high school/ Northern Virginia Community College with goal to  transfer to a University  (TBD) in 2018
**Location:**  Northern Virginia, United States

## Project description

The project would provide a series of modular python programs that could be used to support different Public Lab imaging and spectrum measurement toolkits.  The programs enable near real time OpenCV computer vision (CV) measurements of images or spectra.  The CV measurements can be used to improve instrument performance (feedback that controls lighting amplitude or  camera array exposure times) or assist calibration by subtracting reference images/spectra.   
General objectives include:
•	increasing the scope and usability of Public lab Spectral Workbench and spectrometer kits
•	collecting software techniques from Raspberry PI, computer vision and Adafruit  blogs into a single source that can be applied to science projects
•	provide code that would automate data collection and present data in a visually appealing manner
•	optimize the use of Raspberry PI visible and NOIR camera in Public lab spectrometer kits
•	provide a foundation for new spectroscopic applications using python/opencv image processing libraries 

### Abstract/summary (<20 words):
Computer Vision enhancements for Raspberry Pi based Public Lab Science Projects

### Problem
The problem I would like to solve is make camera integration easier into spectroscopic systems.  Current systems  are faced with multiple problems ranging from poor dynamic range, limited annotation and manual processing.   

### Timeline/milestones
Community Bonding period (April 23 - May 14)

•  Familiarize with published software on PublicLab site/check operation.  
•  Configure Raspberry Pi 3 B+ with latest software
•  Identify project camera(s) and spectrometer(s) 
•  Determine documentation requirements
•  Connect with mentor(s)

Phase 1 Code deliverables:basic camera functions: (May 14 to June 15 Evaluation)

•  Week 1	        -How to annotate picture/video 
•  Week 2		-Camera resolution options and memory implications
•  Week 3		-Optimization of camera settings
•  Week 4  	-Prepare documentation/final evaluation

Phase 2 Code deliverables:GPIO and Computer Vision(CV):  (June 16  to July13 Evaluation)
• Week 5		-Controlling light sources for imaging or spectroscopy
• Week 6		-Manipulating RGB images/Histogram (masked) measurements
• Week 7		-Time Lapse CV/Frame data annotations
• Week 8	 	-Prepare documentation/final evaluation

Phase 3 Code deliverables:Spectroscopic Applications (July 14  to Aug 14 Evaluation)
• Week 9		-Controlling dynamic range with feedback from CV processed spectrographs
• Week 10		-Spectroscopic calibration for (near) real time spectroscopy
• Week 11		-Transmission spectroscopy experiment – Is it possible to use a transmission grating  and CV for a low cost imaging spectrometer? 
• Week 12 	 -Prepare documentation/final evaluation

### Needs
	-Open CV
  	-Raspberry Pi 3 B+ w/camera
	-Transmission grating
 	-Public lab spectrometry kits
	-Documentation requirements

### First-time contribution

An example  of prior work is available at the public lab website(s): 
[https://publiclab.org/notes/MaggPi/03-15-2018/computer-vision-led-plant-measurement-system][1]
https://github.com/MargaretAN9/Peggy
[link text][2]

### Experience

Almost all my experience is from Raspberry Pi programming.   I have taken one  JAVA course on programming at a Community College.   I have also taken 4 years of computer graphics/art  in high school and become  proficient in Adobe Illustrator/Lightroom/Photoshop.   

****
### Teamwork

An example of past team contributions is my work for  a NASA program called VASTS (Virginia  Aerospace Science and Technology Scholars).   The program selects 30 high school students to work with NASA engineers to design a hypothetical human Mission to Mars.   I lead the strategic communications team that developed  a consolidated system design  across the different engineering  teams.  You can see the final design in a short video at: [https://www.youtube.com/watch?v=gOZS4kw82cE&feature=youtu.be][3]

****

### Passion

I understand that this proposal is not listed as a Public Lab GSOC topic.  I just can’t pretend to be interested in topics such as ‘email or editor enhancements’.  But, if you’re talking about the chance to help create new ways for software to automate scientific measurements then I am all in. 
I have been using Raspberry Pi for my science fair projects since sophomore year.   My current interest is OpenCV computer vision measurements that can be used to enhance imaging and spectroscopic applications.  With Public lab guidance (and equipment) I hope to continue my passion and develop a better understanding of software algorithms and scientific instrumentation


### Audience
I would like to provide open source  code that I wish was available when I first started  working Raspberry PI based  science projects.    I believe that code would be useful to Public lab and Raspberry PI communities. 

### Commitment
-High motivation given the alternative is a summer job at the mall.  What’s could be more fun than tinkering with computers, cameras and gratings all day!    

  [1]: https://publiclab.org/notes/MaggPi/03-15-2018/computer-vision-led-plant-measurement-system
  [2]: http://An%20example%20%20of%20prior%20work%20is%20available%20at%20the%20public%20lab%20website%28s%29:%20%20https://publiclab.org/notes/MaggPi/03-15-2018/computer-vision-led-plant-measurement-system%20https://github.com/MargaretAN9/Peggy
  [3]: https://www.youtube.com/watch?v=gOZS4kw82cE&feature=youtu.be