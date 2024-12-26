---
title: "[GSoC 2014 Proposal] Re-designing UI, Improving Web integration for Sky Cam Android app"\ntagnames: 'gsoc'
author: tbhargav
path: /notes/tbhargav/03-17-2014/gsoc-2014-proposal-re-designing-ui-improving-web-integration-for-sky-cam-android-app.md
nid: 10192
uid: 421490

---

![](https://publiclab.org/public/system/images/photos/000/003/292/original/skycamguimockupdraft.png)

# [GSoC 2014 Proposal] Re-designing UI, Improving Web integration for Sky Cam Android app

by [tbhargav](../profile/tbhargav) | March 17, 2014 03:32

March 17, 2014 03:32 | Tags: [gsoc](../tag/gsoc)

----


###Name and Contact Information
**Name:** Tushar Bhargava 
**Email Address:** tushar1995@gmail.com
**Website:** http://tusharbhargava.wordpress.com/
**Phone number:** +1-407-719-9004 (USA) ; 91-9650054707 (India)
**IRC Nick:** theterabyte

### Brief Bio

I am a first year Computer Science student at Brown University (USA). However, for GSoC 2014 I will be back home in New Delhi, India. I have been part of the Open Source movement for several years now, and have been a columnist for [Full Circle Magazine](http://fullcirclemagazine.org/) (the Ubuntu Linux community magazine) and written for _Open Source For You_ (the largest Open Source magazine in India).

### Relevant Skills and Past Projects 

I have been coding in **Java for over 5 years** and am proficient in it. I am also well versed with making Android apps. Listed below are **two fully functional, Open Source Android apps I made**:

1.) **Arthashastra:** an Open Source, educational Android app designed to teach high school and college students the basics of financial literacy.

2.) **Green Foot:** an Open Source, Android app that was designed during Hack@Brown, to encourage users to **reduce their carbon footprint** by performing simple eco-friendly tasks and thereby increase their “green score”. 

The link to the screenshots and the source code of the above apps: http://tusharbhargava.wordpress.com/coding-lab/ 

I am also comfortable using Google Groups, mailing lists, IRC channels and other forms of communication used by the Open Source community.  

###What I Want To Do ( Project Idea )

I wish to improve Sky Camera's UI by making the following changes:

1.) **A home screen for the app:** so that the camera is not automatically activated when the user opens the app. This both saves power (battery life) and gives the user time to properly understand the app, in essence it gives him an "overview of the app". Having a home screen will make the app more intuitive and help non-tech savvy users navigate the app. 

2.) **Better theme, icons and labels for the app:** the app can be improved by using a more consistent [theme](http://developer.android.com/guide/topics/ui/themes.html). The current theme also might make reading the labels hard for color blind users, choosing neutral colors (eg: blue, white) could help avoid this. The "Settings" icon might be ambiguous, providing a label next to it would be helpful. Also certain items listed under "Settings" such as "Attach phone to balloon; Make a map; Visit Us" might be used as separate collapsible menu items as users might not expect them to be under "Settings". Lastly the app icon can be improved as well, it is essentially the "first impression" of the app, and therefore should look good! 

3.) **Other miscellaneous UI improvements:** Prevent app from displaying  "About" every time it starts. Also stop dialog asking user to turn GPS on. Such obtrusive pop-up messages disrupt the user experience and go against [good design principles](http://developer.android.com/design/get-started/principles.html). I also wish to change the "About" message display as currently the entire "About" text does not display. Perhaps another UI widget should be used instead of an "Alert Dialog" (which is not traditionally used for this purpose). Also modify the "start timer" UI elements to incorporate a dialog to allow setting the timer interval within the camera window itself (instead of going to settings).  

I also want to improve the **Internet integration** for Sky Camera so that it can leverage the power of the Web better. In particular I want to provide **Facebook integration** for Sky Cam.

This might seem unnecessary and unneeded as Sky Cam is primarily for making maps from aerial photographs while Facebook is a social website. However, I believe that doing so will be in harmony with Public Lab's mission of providing tools for environmental exploration and creating environmental awareness. If Sky Cam helps users find instance of environmental degradation (eg: depleted forest cover), then allowing them to post these photos to Facebook can help make more people aware of the problem, and even convince some to join the cause!

###My attempt and results 

I have designed a home screen mock-up (attached "main image"). This should hopefully demonstrate that I am capable of designing an elegant and intuitive GUI. However, please do note that the home screen shown is only a mock-up and my final version will be even better!

I have also downloaded and set up the [Facebook SDK](https://developers.facebook.com/docs/android/scrumptious), which will allow users of Sky Cam to post their photos to the site if they choose to. 

Note: Many of the links I have included throughout this proposal are to show that I have researched the resources needed and know where to start!

###Timeline

**May 19 to June 20:** Creating a Home screen. Providing easy access to most useful buttons/settings. Linking the UI with the necessary Android "Activities"/"Intents" 

**June 20 to July 10:** Creating a new theme for the app. Designing new icons. Improving Settings menu item. Designing new menu items within collapsible menu.

**July 10 to July 31:** Implementing the UI improvements listed in the "Miscellaneous" section above. Start working on Facebook Integration.

**August 1 to August 10:** Complete Facebook integration.

**August 10 to August 18:** Testing the code and the app. Commenting the code and ensuring proper documentation. 

###Questions and next steps

1.) Is my project idea challenging enough? Conversely am I trying to do too many things?

2.) In what ways can this proposal be improved? 

3.) Are there any general guidelines (especially in terms of interface) that other Public Lab tools follow, and Sky Cam deviates from? 


###Why I'm interested

As I mentioned before I am a big fan of the Open Source movement. As a student I have always been concerned about the threat of environmental degradation and am interested in how to prevent it, especially using technology. My app **Green Foot**  (mentioned in "Past Projects") was an attempt to combine my love for technology and my concern for the environment into an app that tried to create positive change. I hope to be given a chance to contribute to Sky Cam so that I can further both the Open Source community and help provide tools to better understand the ecological threat. 