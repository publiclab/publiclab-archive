---
title: "Almost synchronous shutters"

tagnames: 'balloon-mapping, near-infrared-camera, kite-mapping, triggering, chdk, synchrony'
author: cfastie
path: /notes/cfastie/4-10-2012/almost-synchronous-shutters.md
nid: 1652
uid: 554

cids: 

---

![](https://publiclab.org/sites/default/files/timtstv-20120410-120-11.jpg)

# Almost synchronous shutters

by [cfastie](../../../profile/cfastie) | April 10, 2012 21:06

April 10, 2012 21:06 | Tags: [balloon-mapping](../tag/balloon-mapping), [near-infrared-camera](../tag/near-infrared-camera), [kite-mapping](../tag/kite-mapping), [triggering](../tag/triggering), [chdk](../tag/chdk), [synchrony](../tag/synchrony)

----

I finally got two cameras to shoot simultaneously.  Shooting pairs of visible and near IR photos can exploit simultaneous shooting to get the same scene in each photo even though the cameras rig is swaying in the wind.  It was harder than I thought to synchronize the cameras because several camera settings must be identical.  I used two Canon Powershot SD1100 cameras (identical except for firmware version) running CHDK.  The timer was an AuRiCo controller designed to point a KAP rig as well as trigger the shutter.  It was set for an interval of 10 seconds.  It is not designed to trigger two cameras, so I made a Y cable to split its output signal to the USB ports on two cameras. The timer device shipping with the KickStarter visible/IR cameras will probably operate in a similar manner.  I did not use the capabilities of CHDK which are designed to precisely synchronize the shutter release of multiple cameras.  That may be an upcoming project, especially if someone can give me some hints about how it's supposed to work. 

I determined the degree of synchrony by pointing both cameras at a monitor displaying a <a href="http://www.shodor.org/interactivate/activities/Stopwatch/">stopwatch program</a> with a tenth of a second digit.  So far, the shutters do not always release at exactly the same time, but the difference is only about a tenth of a second.  I think CHDK can do a better job of this, but that will require additional testing.

<img src="http://fastie.net/wp-content/uploads/2012/04/timercheck.jpg" alt="Side-by-side photos of a stopwatch program" width="500" />

Even the low-end PowerShots like the SD 1100 have an extensive menu of settings.  Loading CHDK adds lots more switches.  Here are a few settings which may be critical to getting two cameras to trigger simultaneously. 

<strong>CAMERA MENU</strong>

<strong>MANUAL Mode:</strong> eliminates some variables that the two cameras might choose differently, and enables some additional options (see below).

<strong>Image stabilization (IS) OFF</strong>:  eliminates the potential for the two cameras to take different amounts of time to shoot.

<strong>Focus mode on INFINITY</strong> (only available in MANUAL mode):  I used MACRO mode for this test, but using infinity focus mode eliminates some variance in focus time between the cameras. For aerial shooting, I usually set focus on infinity mode which prevents the automatic focus procedure from trying to focus on anything closer than about 10 feet away.

<strong>CHDK MENU </strong>

<strong>Enable remote operation:</strong>  In the CHDK Main Menu select Miscellaneous Stuff/Remote Parameters/Enable Remote.   The "Synchable Remote" options do not have to be selected.  Although these are designed to precisely synchronize multiple cameras, I don't know how to use them.  Maybe someone can fill me in. 
 
To force both cameras to use the same shutter speed, set <strong>Shutter Priority:</strong>  On some Canon Powershots, you can set the shutter speed directly, but in low-end models shutter speed is always automatic (I think).  I always use Shutter Priority during flights so the shutter speed stays constant and high (usually 1/800 sec.), and the aperture varies to keep the exposure correct.  Low-end Canon Powershots do not have this feature (Tv), but CDHK offers it.  To turn it on in the CHDK menu, select Extra Photo Operations/Disable Overides = OFF, then Overide Shutter Speed = 1/800 (or whatever), then Value Factor=1.  I also deselect or turn OFF everything else on that menu page.

<strong>Script:</strong>  It is possible to trigger the shutter via the USB port without a CHDK script running in the camera, but scripts allow additional control.  I was running this minimal script during the synch tests:

    @title USBremote  
    while 1  

      do  

      a = get_usb_power  

    until a>0  

      shoot  

      a = 0  

    wend  

    end `  

There are a few other ways to accomplish this in a uBasic script, and maybe some of them would work better than this one.