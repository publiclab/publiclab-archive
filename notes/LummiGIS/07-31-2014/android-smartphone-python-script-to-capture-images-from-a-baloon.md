---
title: "Android smartphone/Python Script to capture images from a balloon."

tagnames: 'balloon-mapping'
author: LummiGIS
path: /notes/LummiGIS/07-31-2014/android-smartphone-python-script-to-capture-images-from-a-baloon.md
nid: 11002
uid: 426179
cids: 9992,20074,21432
---

# Android smartphone/Python Script to capture images from a balloon.

by [LummiGIS](/profile/LummiGIS) | July 31, 2014 22:34

July 31, 2014 22:34 | Tags: [balloon-mapping](/tag/balloon-mapping)

----

We used an old Android smartphone, the Scripting Language for Android (SL4A), and Python to auto trigger the phones camera while suspended from a balloon.  This was a nice alternative to purchasing a camera since I had the old phone sitting around and no rubber banding the camera button was needed.  While there was an app available from the Google Play store to auto capture images, the app only captured low resolution images with a max 10 second delay.  

The phone needs to have SL4A installed (http://code.google.com/p/android-scripting/downloads/detail?name=sl4a_r6.apk&can=2&q=) and Python (http://code.google.com/p/android-scripting/downloads/detail?name=PythonForAndroid_r4.apk).  The installation instructions are available from the download sites.

The script when executed, will prompt the user for a delay time (seconds before image capture begins), the total number of images to capture, and the number of seconds of delay between captures.

Be sure to set the phone settings to ensure that the phone will not go into sleep mode.  I had to design a holder out of foam, duct tape, and a sheet of plastic to ensure that the screen did not touch the foam, nor were any buttons pressed during flight.

You are welcome to write me for the script.  I tired to post the script  below but this site is not  treating it very well.  I am sure you hackers can figure it out!
Gerry:        geraldg@lummi-nsn.gov

try:
    print "Android/SL4A Balloon Camera Auto Shooter"
    print "Created by Gerry Gabrisch GISP, GIS Manager Lummi Indian Business Council."
    print "geraldg@lummi-nsn.gov"
    print "Copy? Right! 2014, No rights reserved."
    
    import android
    import time
    droid = android.Android()

    delay = droid.dialogGetInput('Input 1','Delay before starting?','60').result
    numberOfShots = droid.dialogGetInput('Input 2','Total images to capture?', '20').result
    delayBetweenShots = droid.dialogGetInput('Input 3','Delay (Seconds) between captures','30').result
    droid.ttsSpeak('taking pictures in'+  delay +'seconds')
    time.sleep(int(delay))
    counter = 1
    droid.ttsSpeak('taking pictures now')
    while counter <=int(numberOfShots):
        droid.cameraCapturePicture('/sdcard/DCIM/Camera/'+str(counter)+ ".jpg")
        counter +=1
        if counter != int(numberOfShots):
            time.sleep(int(delayBetweenShots))

    print "done without error..."
    droid.ttsSpeak('Finished without error...')
    del droid
    
    
except:
    print "error!!!!!!!!!!!!!!!!"
    del droid
