---
title: "CHDK usb remote shutter Digispark sketch"

tagnames: 'near-infrared-camera, triggering, chdk, camera-triggering'
author: patcoyle
path: /notes/patcoyle/1-30-2013/chdk-usb-remote-shutter-digispark-sketch.md
nid: 5811
uid: 77

cids: 

---

![](https://publiclab.org/sites/default/files/Untitled 1.jpg)

# CHDK usb remote shutter Digispark sketch

by [patcoyle](../../../profile/patcoyle) | January 31, 2013 04:36

January 31, 2013 04:36 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [triggering](../tag/triggering), [chdk](../tag/chdk), [camera-triggering](../tag/camera-triggering)

----

So here is the 10 sec interval Sketch, I also have two of the DigiSparks loaded with the 5 sec interval one (just change the last command from delay(10000) to delay(5000)). I wire twisted up a set of USB cables and 9v battery for power and verified it triggered the Canon’s. 
***Updated: I went ahead and soldered up the configuration and got it ready to fly. See <a href="http://publiclaboratory.org/notes/patcoyle/2-23-2013/prototype-juice-bottle-bottom-dual-camera-rig">note</a> with it in dual bottle bottom prototype rig.

<iframe width="420" height="315" src="https://www.youtube.com/embed/sk_2e9TcEiA" frameborder="0" allowfullscreen></iframe>


<iframe width="420" height="315" src="https://www.youtube.com/embed/CfOXMcVGeWY" frameborder="0" allowfullscreen></iframe>

The sync problem has not yet been resolved. Was hoping with the shorter paired pulses, followed by longer wait would be better. However, inspection of the images shows the visible is shooting at close to the 5 second interval, while the IR is closer to 10, so it is apparently not ready to shoot again in time. 

See CHDK forum exchange, at end of this note, for ideas to resolve this issue. I have not had time to work through all these.

I had trouble with the Mac version of the software, so ran it on Windows 7. Then had trouble with DigiSpark plugged into USB hub port which was resolved when plugged it directly into laptop USB port.

Sketch is named: CHDK_trgr_10s. It was based on the Digispark Start example sketch.

// the setup routine runs once when you press reset:
void setup() {               
  // initialize the digital pin as an output.
  pinMode(1, OUTPUT); //LED on Model A (the model we have)  
}
// the loop routine runs over and over again forever:
void loop() {
              // used to trigger CHDK USB remote with pair of short on/off
              // pulses followed by a longer delay, then repeat
              // 
              // turn the 5V and LED on (HIGH is the voltage level)
  digitalWrite(1, HIGH);
  delay(100);               // wait for a 0.1 second
              // turn the 5V and LED off by making the voltage LOW
  digitalWrite(1, LOW);

              // for 2nd time turn the 5V and LED on (HIGH is the voltage level)
  digitalWrite(1, HIGH);
  delay(100);               // wait for a 0.1 second
              // turn the 5V and LED off by making the voltage LOW
  digitalWrite(1, LOW); 
 delay(10000);               //wait 10 sec
}

*** CHDK forum exchange:

 Re: Canon PowerShot A1200
« Reply #116 on: Yesterday at 18:28:58 »

    Publish
    Quote

Quote from: patcoyles on Yesterday at 11:27:56

    Waterwingz, Update:I'm running into a problem using usb remote with a pair of A1200s, one modified to shoot IR. The Remote parameters are set: Enable Remote, on; Switch Type, OnePush; Control Mode, Normal; Enable Synch, on. 


Sounds about right.

Quote

    I have a timer circuit that makes the 5v circuit, currently set for every 4 sec, so takes image every 8 sec. 


So its a square wave - 5V on for 4 seconds,  0V for the other 4 seconds ? Any way to make that 5V for 6 seconds, 0v for 2 seconds ? (see below) [I did not clarify this is not the pulse the YimeFugit iPhone App puts out.]

Quote

    However, the cameras are not triggering in synch, looks like one is a pulse off. I used similar setup (but older CHDK) with A490/495 pair. Sometimes ran into same problem, but got to work, not sure how. See processed result at:
    https://mapknitter.org/map/view/ewb-regional-cal-poly-ndvi


I think that the most likely issue here is focus lock.  If the camera does not successfully get focus  (&exposure) lock during the 4 second half press,  it may not take a picture when the 5V is removed.    This is an aerial application and your timer circuit allows just 4 seconds for the camera to lock focus for each shot.  Also,  I have no idea if the IR mod makes this even more difficult ? 

So first of all,  make absolutely sure you have the Canon focus mechanism setup correctly.  You definitely need "Servo AF" turned OFF!  Its probably also a good idea to set AF Frame to Normal and AF Frame Size to Small. This could explain how you got things to work in the past.

If that doesn't clean things up,  you can use a script to set the focus and lock it a few seconds into your fllght.  You can then operate the shutter under script control (with AE lock as well) on the falling edge of the USB signal - but I'll need to check the code to make sure the "sync" function still works.   Alternately, it might be possible to have the script issue an "Exit Alt" command to allow normal timed shooting to continue - I need to look into that too to make sure focus stays locked in that mode.

You can also set focus lock manually with the Canon buttons.  Point the camera(s) off into the distance and press the "left/flower" button after first "half pressing & holding" the shutter release button.  You will see the letter AFL appear in yellow on the Canon OSD if you do it right.

If you can change the power pulse duty cycle as mentioned above, that could help too.

Quote

    I'm looking for troubleshooting help and a reliable startup/turn on sequence so can reliably get the cameras to shoot together. 


Why are you thinking this is a startup/turn on sequence issue?  Are you just guessing that the sync problem is always with the first shot or can you tell that for sure from the pixs?   If so,  it might still be a focus problem, but it might be something different I guess.
« Last Edit: Yesterday at 19:36:04 by waterwingz » 