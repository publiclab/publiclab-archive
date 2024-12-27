---
title: "Automatic Spectrometer Calibration and Offline SWB - GSoC 2014 Proposal"

tagnames: 'spectrometer, spectralworkbench, matching, gsoc, gsoc-2014, gsoc-proposal'
author: Sreyanth
path: /notes/Sreyanth/03-04-2014/automatic-spectrometer-calibration-and-offline-swb-gsoc-2014-proposal.md
nid: 10103
uid: 96713

---

![](https://publiclab.org/public/system/images/photos/000/003/125/original/SWB_LOGO.png)

# Automatic Spectrometer Calibration and Offline SWB - GSoC 2014 Proposal

by [Sreyanth](../../../profile/Sreyanth) | March 04, 2014 18:29

March 04, 2014 18:29 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench), [matching](../tag/matching), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [gsoc-proposal](../tag/gsoc-proposal)

----

**Name:** Mora Sreyantha Chary, (fondly called as _Sreyanth_)

**Affiliation (school/degree):** National Institute of Technology Karnataka (Computer Engineering, 2014)

**Location: **Hyderabad, India (during summer). **Time zone:** UTC + 5:30

**Email:** sreyanth@gmail.com

**Project I want to work on:** Spectral Workbench

**_Proposed_ Project title:** Automatic Spectrometer Calibration & Macros Module, Offline Version of SWB


##Project description
**_Abstract:_**

The public laboratory’s Spectral Workbench provides its users with tools to share the spectra and work on it. I would like to add few extra yet important functionalities -- A mechanism enabling SWB to automatically calibrate the spectrometer(s) of the users and a Macros module . With these in place, the users will be able to make sure that their spectrometers are accurately calibrated and thus can be helpful while calibrating the newly uploaded spectrums. The Macros module helps the users to automate most of their manual routine work on SWB. This helps the users with high end computation requirements use the Macros module and let the SWB do the work for them. And the second part of this project is a popular demand from various people on the mailing lists -- an offline version of SWB. With the stand-alone Java version deprecated, a browser based offline version, preferably using the existing HTML and JS, and the LocalStorage of HTML5 to store the captures, and a mechanism to upload the captures when connected to the internet, is really necessary. With these two features, the SWB will be much more user friendly and effective too.

**_The need my project fulfills:_**

My project aims to automate the error-prone calibration of spectrometers, thus making the process effective. Users may not, sometimes, accurately calibrate the spectrometers. Or, in some cases, may not calibrate at all. To encourage them to calibrate the spectrometers, it will be ideal to auto-calibrate and ask the user just to confirm what (s)he sees on the screen. This will help in easy calibration, easy validation (as the user clicks the button after being satisfied by the calibration) and effective spectral analysis. The Macros module helps the users to write their own macros and plugin to the SWB. Also, an offline SWB is a popular request, which will let the users to use SWB even when there is no internet connection, entirely using their own web-browser without needing to install new software and configuring -- which has proven to be complex at times. My project will bring out a fully functional offline SWB.

**_How will my project meet this need:_**

My project will come up with the required mechanism for auto calibration. The steps involved are:
1.     Check for CFL patterns. When a CFL pattern is observed (using the spectral matching module -- may be?), ask the user if (s)he would like to auto-calibrate. This can be extended to other spectral patterns like Neon after initial testing of the module’s performance on CFL.
2.     Find the major known peaks and calculate the distances between them. Use the ratios of these distances to come up with a candidate calibration.
3.     Color detection -- find the middle blue line and bright green line using various image processing techniques. Check for over exposure. If all the 3 channels are over exposed, either accept the candidate calibration, or ask the user to change the setup to make sure the exposure is reduced. Else, use the color information to generate another candidate calibration. Calculate a measure (for time being, let us consider it to be Hamming Distance), and see if the candidate calibration using colors is close enough to the one obtained using the ratios of distances method. If it is close enough, then the system is doing good, accept the candidate calibration from step 2. Else, check for over exposure in any of the channels. If over exposed, accept candidate from step 2. Else, accept it from step 3.
4.     Ask the user to name the device -if (s)he wishes to, so that they can use this calibration for other spectrums captured with that particular device
5.     Save the calibration, if the user is satisfied with the highlighted lines. Or else, manual calibration -- note that this manual calibration will now be added to our search space. Next time, our algorithms will perform better!!
6.     For the time being, let’s consider the linear calibration first. Based on the results achieved, we can extend the system to use a nonlinear calibration model.
Macro’s module:
1.     Refactor the existing Macros module. Also refactor and add few functions in the SWB API so that easier integration and effective use of SWB is possible.
How to go about implementing offline SWB?
1.     Use most of the HTML and almost all the JS already written
2.     Use the localStorage of HTML5 to store spectrums.
3.     Even the calibration is stored.
4.     An option to choose and upload all or few of the spectrums captured offline on to online SWB, when there is an internet connection available (achieved by pinging our server)
5.     Create a module, to which these offline spectrums can be securely uploaded and processed to make sure this won’t result in a Denial of Service attack (using some sort of CSRF tags).
6.     The above said module will be a two way one. One can upload the offline spectrums. At the same time, download the calibrated spectrums for offline use.

**_Timeline/milestones:_**

Working on it. I want the ideas to be refined, so that I will come up with the timeline appropriately.

**_What broader goal is my project working towards?_**

Effective spectral processing for everyone, everywhere!

**_What resources I will need:_**

I am a lone worker who loves to work independently without much guidance. I love learning and implementing. This is my weakness, and sometimes, I fall behind schedule. But I strongly believe learning is necessary for not just implementing, but required to implement it right. I would be needing help from the mentor and the community as well regarding the spectra analysis. I would also be needing a foldable from Public Lab so that I can experiment and test the modules I write instantly. Also any literature, which I can understand is much valuable. I don’t need a popular paper, but I need a right paper so that a CS grad like me can understand it. Also constant feedback and support is always appreciated.

**_Experience:_**

I was a GSoCer for Public Lab in 2013. I worked on finding closest match spectrum from the database.
More about the project can be found here:

3. http://publiclab.org/notes/Sreyanth/09-14-2013/finding-closest-match-spectra-from-the-database-gsoc-final-post

2. http://publiclab.org/notes/Sreyanth/07-29-2013/finding-closest-match-spectra-from-the-database-gsoc-work-done-so-far

1. http://publiclab.org/notes/Sreyanth/06-24-2013/find-closest-match-spectra-from-database-gsoc-project

Also, I have written my own code to do my course projects. I list them here for you (recent first):

1.     Discovering XML Injection Vulnerabilities in Web Applications -- a framework for vulnerability scanners for XML injections

2.	Twitminer (A classifier which classifies the tweets into ‘sports’ or ‘politics’): Written in Python. (used sci-kit learn for this)

3.	External Merge Sort Implementation for one billion integers (wanted to have some fun!). Written in C.

4.	Top Down Parser for a subset of C language. Written in C using Lex and Yacc.

5.	Multi-threaded chat server and chat application. Written for my socket programming lab in C.

6.	iAd- Integrated Ad Agency Management System. Written in JSP.

7.	Capture the Flag platform. Written in Python. Used Django, PHP and CGI.

8.	eAgromet – Advisory system for Agricultural Scientists. Written in JSP and Python.

9.	A Deterministic Cryptarithmetic solver. Written in Python.

10.	Online Driving Licensing System. Written using PHP.

In addition, my application, [CulinarYou!](gcdc2013-culinaryou.appspot.com) was a finalist in Google Cloud Developer Challenge 2013

**_Teamwork_**

Yes, I have worked in a team for my course projects [6th and 10th in the above list]. Also, my last summer internship at the International Institute of Information Technology was also a team project [8th in the above list]. According to me, working in a team needs good communication. Without which the project will be a bit out of the road. Luckily, all my team mates used to discuss the ideas and implementation plan almost daily and we made it a huge success.

**_Expertise_**

Well, I consider myself good enough and well suited to handle this project. I am already well versed with the SWB codebase. I am comfortable with RoR and JS. I am good with C and Python too. Web tech, I am good with Django and Google App Engine too. With immense experience in developing web applications, I think I am well suited for this project. And more importantly, I love coding, optimizing, scaling and again looking it all over to make sure it meets MY standards. My standards are: Correct output, less time, neatly labeled variables, sufficient documentation.

**_Interest_**

Yes. I always had a thing for open science. In my humble opinion, science is not confined to just scholars. Everyone can learn, use, discover and invent it. Why should only scientists perform experiments? Aren’t the others really fit to even learn some basic phenomena in the nature? And yeah, I realize that public lab is a nice platform working towards this goal. I actually even want to recommend that public lab should start some initiative only for kids to develop the interest for science in them.  

**_Audience_**

Non – technical users. The user need not know anything how this is implemented.

**_Context_**

The main thing that motivates to work on this is, my attachment to this project. I loved working on SWB last year, with great inputs from my mentor as well as the PLOTS community. I thought to switching the project, to Infragram for a while. But, I thought of making SWB much more effective and then jump on to Infragram -- the reason being, I believe I am going to be a developer for Public Lab in the future too. Continuing the same enthusiasm, I want to contribute to the same project. This project posed some interesting coding challenges to me, and am constantly motivated by the way my mentor looks at these issues. So, this project won't only strengthen my coding skills, it also enriches my analytical thinking. With this in mind, I am reapplying for the same project.

**_Ongoing involvement_**

By the time GSoC ends, we would have a fully functioning auto calibration system, and an offline SWB. I would like to be a part of PLOTS community ever after the end of GSoC, mainly because of the interesting issues and projects Public Lab looks into.

**_Commitment_**

Yes. I have no other commitments for this summer. I want to devote the entire time, approximately, some 40 hrs a week to my GSoC project.


**Please note: This is still a draft and is going to significantly change in the upcoming days. Please feel free to give your valuable feedback by commenting on this post, or by emailing me (sreyanth@gmail.com) or Jeff (jywarren@gmail.com)**