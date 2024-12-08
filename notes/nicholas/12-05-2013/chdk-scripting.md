---
title: CHDK Scripting
tagnames: balloon-mapping, triggering, chdk, camera-triggering, camera-scripting, activity:camera-triggering, activity:chdk
author: nicholas
path: /notes/nicholas/12-05-2013/chdk-scripting.md
nid: 9858
uid: 53894

---

# CHDK Scripting

by [nicholas](../profile/nicholas) December 05, 2013 20:38

December 05, 2013 20:38 | Tags: [balloon-mapping](../tag/balloon-mapping), [triggering](../tag/triggering), [chdk](../tag/chdk), [camera-triggering](../tag/camera-triggering), [camera-scripting](../tag/camera-scripting), [activity:camera-triggering](../tag/activity:camera-triggering), [activity:chdk](../tag/activity:chdk)

The last several time I've been balloon/kite mapping I've used the standard Cannon A495 which so many Public Labbers love. In reality I borrowed this camera and used the SD card which came with and which uses the CHDK timer script. All of this was pre-installed for me so I never really had a full grasp on how to install and use the CHDK stuff myself. But no more!

In preparation for the Public Mapping Mission course and the mapping of Newtown Creek, I went ahead and explored some of the ins and outs of the CHDK. Below are my notes.  The notes are a bit long but the process is actually pretty easy and quick.  There may be some variation based on computer and camera differences but this is what I was able to get working.  Good luck!!!

**System Notes:**

Camera: Cannon Powershot SX160 IS
Computer: Mac OSX 10.9 (Mavericks)
SD Card: SanDisk 8GB SDHC 1 30MB/s
Script: [chdk-timer.txt](https://i.publiclab.org/system/images/photos/000/005/354/original/chdk-timer.txt) (sent to me by Liz Barry)

**Step 1:** Download [STICK](http://zenoshrdlu.com/stick/stick.html)

This is an application that will automatically find your camera's firmware version, download the firmware and install CHDK. This application basically does everything for you!

**Step 2:** Run stick.sh

This might be a funny step for some. The downloaded zip file has lots of file depending on which computer and operating system you are using. Since I am using Mac OSX 10.9, what I needed to do is open Terminal (/Application/Utilities/Terminal), change directories into the stick folder (cd ~/Downloads/stick/), and run the stickx.sh file (bash stickx.sh).  You man need to install Java which is noted on the STICK web page.  Furthermore, double clicking the stickx.sh file might work.  When I tried this it launched Xcode which I didnt want to deal with.

Program Interface:

[![Screen_Shot_2013-12-05_at_3.35.45_PM.png](https://i.publiclab.org/system/images/photos/000/002/358/medium/Screen_Shot_2013-12-05_at_3.35.45_PM.png)](https://i.publiclab.org/system/images/photos/000/002/358/original/Screen_Shot_2013-12-05_at_3.35.45_PM.png)



**Step 3:** Take sample photo

Insert the SD card into the camera and take a photo. Any photo will do. Eject the SD card from the camera and insert it into the computer.

**Step 4:** Follow Directions in the Stick application.

First, drag the photo that you just took off of the SD card an drop it onto the STICK application.  This will then get the firmware version of you camera from information on the photo.  Click next several times to walk through the STICK application.  

**Step 5:** Upload custom script

At this point, STICK has installed a bunch of files onto the SD card.  CHDK is now installed and ready to go.  What we want to do next is to install our custom script.  [This script](https://i.publiclab.org/system/images/photos/000/005/354/original/chdk-timer.txt) will take a photo at a regular interval.  Take the text file and drop it onto the SD card in the scripts folder (/CHDK/Scripts).

**Step 6:** Lock the SD card

Now that the script is on the SD card, you can eject the card and insert it into the camera.  **IMPORTANT**  Be sure to lock the SD card.  This tells the camera to use CHDK and not to act like a 'normal' SD card.

**Step 7:** Selecting the script

The hard part is over!  You've successful install CHDK onto your SD card and uploaded a script to the camera!  Now you need to activate that script.  When the camera turns on, push the 'FUNC/SET' button.  This takes you into the CHDK mode.  From there, navigate to "Load Script from File".  This will show you all of the scripts installed.  Select the one you uploaded (chdk-timer.txt).  There should also be a section at the bottom of this menu that says 'Interval Shooting Non-stop'.  I usually set the interval to 10seconds.

**Step 8:** Start/Stop the script

This is the step that always throws me off.  You must start the script by pushing the 'take photo' button.  Once you've pushed this the first time, the script should activate and start taking pictures automatically!!!!!  If you want to stop this, just push the 'take photo' button again.

Congratulations!!!! You've successfully installed a script to your camera!  Now you're ready for some balloon/kite mapping!
