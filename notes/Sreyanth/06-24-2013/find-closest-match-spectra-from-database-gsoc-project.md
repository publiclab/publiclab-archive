---
title: "Find closest match spectra from database - GSoC project"

tagnames: 'spectrometer, spectral-workbench, gsoc, spectral-matching, first-time-poster'
author: Sreyanth
path: /notes/Sreyanth/06-24-2013/find-closest-match-spectra-from-database-gsoc-project.md
nid: 8410
uid: 96713
cids: 5984,6403,6408,6417
---

![](https://publiclab.org/public/system/images/photos/000/000/573/original/logo_%283%29.png)

# Find closest match spectra from database - GSoC project

by [Sreyanth](/profile/Sreyanth) | June 24, 2013 07:46

June 24, 2013 07:46 | Tags: [spectrometer](/tag/spectrometer), [spectral-workbench](/tag/spectral-workbench), [gsoc](/tag/gsoc), [spectral-matching](/tag/spectral-matching), [first-time-poster](/tag/first-time-poster)

----

##Who I am
Hi everyone. I am Sreyantha Chary Mora (preferred: _Sreyanth_), a senior undergrad majoring in Computer Engineering at the National Institute of Technology Karnataka, Surathkal. This summer, I am working for the Public Lab as a GSoC student.

##What I will be working on
The public laboratory’s Spectral Workbench provides its users with tools to share the spectra and work on it. I would like to add an extra yet important functionality. A scalable spectral matching mechanism. With this in place, the users will be able to see some results which show up when the system finds some similar spectra in the database. This helps the user explore and learn more about his/her uploaded spectrum.

##Formal details of the project
**Title**: Find closest match spectra from database

**Mentor**: Jeffrey Warren

##More details
**What need will my project fulfill?**

My project aims to provide the users a scalable and fast system which can look up the database for similar spectra in which they might be interested in and are working on, thus help them in their research or study. This also helps us to discover interesting patterns being observed across various spectra, which normally are believed to be different. My project, on successful completion and integration, makes this task easier and helpful.

**How am I going to do this?**

I want to adapt the Opticks codebase and integrate it into the Spectral Workbench first. This may need laborious work. But is believed to produce awesome results. Next problem will be to check the scalability of the code. So, I would like to do an algorithmic study and try to enhance the solution for the problem of spectral matching. Also, if time permits, I would like to come up with a similarity index of top matched spectra.

##Technical Details
One thing we can do is to check each spectrum with every other spectrum in the database, calculate RMS values and decide which of them are similar. This would take a lot of time to run. Also, the results as we require may not be obtained.

So, I will basically implement the well-known two algorithms, for image-based spectral search. As I am new to this jargon, if I say something technically incorrect, forgive me, and feel free to correct me.

1. Spectra Angle Mappings

2. Wang-Bovik Quality Index algorithm

I started reading the Opticks extension and am trying to come up with a spectral matching module in Python. Scalabililty seems to be a issue here. I am thinking of implementing these algorithms by the mid-term evaluation (or a week or so later) and integrating the module with the workbench. Then work on scalability issues and ranking measures in the remaining time.

**Did I get something wrong?**

Please mail me at (sreyanth@gmail.com) or my mentor Jeffrey (jeff@publiclab.org) directly and let us know where I went wrong.

Thats all for now! Will keep you people posted on the progress of this project in the weeks to come.