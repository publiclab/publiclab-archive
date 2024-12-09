---
title: [GSoC 2014 Proposal - DRAFT] Sky Cam Enhancements
tagnames: gsoc, skycam, gsoc-2014, coding
author: mj7007
path: /notes/mj7007/03-20-2014/gsoc-2014-proposal-draft-sky-cam-enhancements.md
nid: 10208
uid: 421351

---

![](https://publiclab.org/public/system/images/photos/000/003/344/original/IMG_20130912_190456.jpg)

# [GSoC 2014 Proposal - DRAFT] Sky Cam Enhancements

by [mj7007](../profile/mj7007) March 20, 2014 07:06

March 20, 2014 07:06 | Tags: [gsoc](../tag/gsoc), [skycam](../tag/skycam), [gsoc-2014](../tag/gsoc-2014), [coding](../tag/coding)

----

Name: Jayaruwan Mannapperuma

Affiliation: Computer Science and Engineering

Location: Sri Lanka

Email: mj7007@gmail.com

Phone: +94 716327761

Project(s) you're working on or want to: Sky Cam

Project title: Sky Cam Enhancements 

#Project Description#

**Summary:**

This project focuses on enhancing the quality of the sky cam android application in code level and user level perspectives. It describes how the existing features will be improved and how the new features will be integrated to the application which result a user friendly consistent product which can be maintained for a long time while adding new features.

**Describe the need your project fulfills:**

*  By enhancing the existing code base, the maintainability of the code will be much easier. All the methods and functionality is in the Main Activity class and I refactored it for some extent during these days. Also, this reduces the bugs that could happen, when the project grows.
*  By redesigning the existing theme, a same look and feel can be given to each UI elements in the application to enhance the quality of the application
*  Using in app gallery feature, the users can easily see the photos taken by the application. Also, they can read the EXIF tags of those photos without using another tool.
*  By saving the exposure configurations, the user doesn’t want to configure the camera each time the application starts.
*  By enhancing the photo taking feature, the battery life of the phone can be improved which results longer flying hours.
*  When we think about a flight, the photo taking timer is started before the kite is launched. So, the app takes unnecessary photo graphs until it reaches to a particular height. By having a trigger to start the timer resolves this problem.
*  By triggering Canon cameras simultaneously, high res images can be taken which have more clear details.
*  If the light drops significantly during a flight, there's no use of taking photos in a dark environment which is a waste of battery power. This problem can be solved by pause shooting.
*  By auto adjusting ISO-mode according to the light improves the quality of the photos, taken.

**How will your project meet this need:**

These are the tasks I planned to do for GSoC 2014, which fulfil those needs mentioned above.

1. Refactoring the existing code
The code base of Sky Camera has to be well organised and formatted, as the existing code base seems not well structured. I will break the main functionalities into separate classes and packages so that each class is responsible to perform a specific task. As a research work, I have done this half way and there will be lots of refactoring to be done in order to have a maintainable clean code.

2. Updating the existing theme of Sky Cam
The action bar (Header), buttons, icons, dialogs will be redesigned to follow a specific theme. As the screen sizes of the android phones vary to each other, the theme should support for multiple screen sizes to give a better user experience with the application. 

3.  Implementing in-app Gallery
An application specific gallery will be implemented to display the photos taken by the Sky Camera application. Here, the user will be able to browse the photos taken and can delete the blurred photos. Also, I will implement a dialog box to show the EXIF tag details for a specific photo so that user can easily read the content of EXIF tags without using another tool.

4.  Implementing Main Menu
Implementing a separate main menu for the app helps to present the application features to the user in a user-friendly manner. Main menu page consists of two main parts. They are a weather dashboard and set of image buttons to go to different pages (“Start Camera”, “Gallery”, “Make a map”, “Balloon/Kite Tutorial”) in the app. Weather dashboard will show the weather updates (temperature, wind direction, wind speed, humidity, etc.) of the location, which would be important before a flight. These data will be taken using an external weather update source.

5. Updating Exposure Settings
Using a dropdown instead of seek bar for iso-modes is appropriate. Currently it shows some hard coded values. This also has to be changed, as some ISO modes don’t support for some mobile phones. So the app should obtain the iso-modes supported by the phone’s camera and then show them in a dropdown.

6. Saving Exposure Settings
The exposure settings will be saved so that user doesn’t want to configure the exposure settings each time application starts. Exposure index and the iso-mode are saved in the preferences such that these values will be used to configure the camera automatically.

7. Low power mode which disables the screen
It's not necessary to keep the screen off in a flight. Therefore, I will disable the screen after few minutes of starting the timer.

8. Trigger to start the timer to take photos
I'm planning to add an alarm to trigger the photo taking timer so that the photos can be taken after the kite is in the right elevation. 

9. Add more sensor data to EXIF tags
I'll be adding sensor data such as GPS (already done), yaw, pitch, roll, tilt, light sensitivity, atmospheric pressure, temperature. I'm using the in-built sensors in the mobile phone to take the relevant data and these sensor data will be integrated to EXIF tags.

10. Simultaneously drive an interface to trigger a pair of Canon cameras in sync using CHDK.
I'm planning to trigger a "beep" sound in each timeout so that the canon cameras can be triggered by CHDK to take simultaneous photographs. 

11. Switch to video after a preset number of time outs, and then switch back to stills
The user will be able to preset a number of timeouts which will start to record the video for preset time duration. After the timeout of the video, it will trigger the photo taking timer again to start shooting photos and this will happen iteratively.

12. Pause shooting if light drops below a threshold
Using the data collected by the light sensor in the phone, the shooting of photos will be paused if the light drops below a preset threshold value.

13. Auto adjust ISO-level if the light drops below a threshold
Using the data collected by the light sensor in the phone, the ISO-values is switched to preset value if the light drops below a preset threshold. When the light rises above the threshold, the iso-value will be reset.

**Timeline/milestones:**

I have planned to continuously contribute for the Sky Cam project until community bonding period starts (April 21) by fixing bugs and submitting patches. During GSoC working period, the tasks I’m going to complete as follows.

Pre-coding Period (Until May 19)

* Breaking down functionalities into to separate classes
* Fixing existing bugs and refactoring the code
* Code review, testing and bug fixing.
* Having Skype sessions with the mentor to clarify doubts if any

May 19 - June 1

* Updating the existing theme of Sky Cam
* Implementing main menu
* Testing on different android devices
* Fixing bugs

June 2 - June 15

* Implementing in-app gallery
* Implementing EXIF tag viewer
* Testing

June 16 - June 22

* Implementation of low power mode
* Updating Exposure Settings
* Saving Exposure Settings
* Testing

June 27 - June 26

* Code reviews
* Refactoring the code and testing
* Submitting for mid term evaluations

June 27 - July 13

* Add more sensor data to EXIF tags
* updating EXIF tag viewer in gallery

July 14 - July 27

* Implementing alarm to trigger the photo taking timer
* Implementing a functionality to trigger canon cameras in CHDK mode
* Testing the functionality

July 28 - August 3

* Switch to video after a preset time period, and then switch back to stills
* Update the preference to enter the duration of the video
* Testing

August 4 - August 10

* Implementing pause shooting if light drops below a threshold
* Implementing a feature to auto adjust ISO-level

August 11 - August 17

* Improve the documentation related to the features I have implemented

August 18 - August 21

* Code reviews
* Refactoring the code and testing
* Submitting for final evaluations

**What broader goal is your project working towards?**

To make the Sky Cam android app more reliable and effective while utilizing the capabilities of the android phones to improve the quality of the application.

**What resources will you need:**

People: To point me in the right direction regarding implementation of Canon CHDK feature

#Experience#

I’ve been developing android application since 2010. I have done many android/web projects working as a [freelancer](http://www.freelancer.com/u/mj7007.html). Some of the projects that I have done can be found below.

 - [Pool Guy Android App](https://www.freelancer.com/projects/Mobile-Phone-Android/Simple-Pool-chemical-tracking-app.html) - [Google Play Version](https://play.google.com/store/apps/details?id=com.jaycreations.poolguy)

 - [HTTP Logging Android App](https://www.freelancer.com/projects/Mobile-Phone-Android/HTTP-logging-android-app.html)

 - [Home Automation Android App](https://www.freelancer.com/projects/Mobile-Phone-iPhone/Home-automation-Mobile-Application.html)

 - [iSMS for Android](https://play.google.com/store/apps/details?id=com.jaycreations.guesswho.isms)

 - HTML5 2D Game (Web & Android) developed using Construct2 Game Engine

 - Car Audit System ([Web](https://github.com/mj7007/Greenmotion-Car-Audit-System-Web-Application) & [Android](https://github.com/mj7007/Greenmotion-Car-Audit-System)) - 3rd Year Software Engineering project

 - [Voice command based Mobile App](https://github.com/mj7007/iCommand)

I have been working as a trainee software engineer in [MillenniumIT Software (PVT) Ltd](http://www.millenniumit.com/main.php) for my internship which due on 14th May, 2014. I’ve been doing a web service and android-based research project these days.

#Teamwork#

I have done different kinds of software projects working as a group of 4 members in the university in DBMS and software engineering modules. So I have a good knowledge of managing a group and working as a team to accomplish the tasks given. 

#Expertise#
I have a fluent background of programming in Java, C, C++, PHP, HTML, Javascript. I have done various kinds of projects in these languages which really helped me to improve and polish my skills. I'm comfortable in making use of jUnit testing and Robotium which is a test automation framework for Android. My [LinkedIN](http://lk.linkedin.com/pub/jayaruwan-mannapperuma/34/658/596) profile will provide much more details about my developer expertise.

#Ongoing involvement #
After successful google summer, I'm planning to continuously work on this project as a community service. It's a pleasure for me to witness this project, growing day by day adding new features.

#Commitment#
I'm a person who likes to deliver high quality output for a given task which makes me happy. So, I'm sure that I will give my best to accomplish these tasks in order to get a quality output during google summer. Because of this quality, I'm able to maintain a good rating working as a freelancer in Freelancer.com.

#Contribution so far#
I was able to start the code refactoring by breaking the tasks into classes and I created a [pull request](https://github.com/publiclab/sky-camera/pull/15) which was merged to master after few commits. But there are lots of refactoring to be done, before I start with the tasks listed above.
