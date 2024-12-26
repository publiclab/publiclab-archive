---
title: "Flew iPhone/CHDK robust prototype, 2 cameras triggering"\ntagnames: 'near-infrared-camera, triggering, chdk, balloon-telemetry-kit'
author: patcoyle
path: /notes/patcoyle/5-27-2012/prototype-running-2-cameras-triggering-iphonechdk.md
nid: 2220
uid: 77

---

![](https://publiclab.org/sites/default/files/7271146692_c58354c49e_c.jpg)

# Flew iPhone/CHDK robust prototype, 2 cameras triggering

by [patcoyle](../profile/patcoyle) | May 27, 2012 04:44

May 27, 2012 04:44 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [triggering](../tag/triggering), [chdk](../tag/chdk), [balloon-telemetry-kit](../tag/balloon-telemetry-kit)

----

<strong>Update:</strong> 
Flew iPhone CDHK remote trigger robust prototype with Delta Leviathan and a Canon A490 (IR), A495 and iPhone 4s in the <a href="http://publiclaboratory.org/notes/patcoyle/3-31-2012/3-camera-housing-photos-and-test-kap-session">3-camera rig</a>. 

A Few second video is at: http://youtu.be/StcwNAG5evc

Launched kite, secured it. Configured rig with cameras and iPhone. Started gps app (GPSStone) and Time Fugit, set to two-second pulses (cameras fire in synch every second pulse). Plugged cables in. Confirmed shooting, clipped onto line with Broox hangups.

GPS recorded about an hour from 5:05 till 6:05, track registered 1.41 miles, max altitude 240m, about 787 feet, so given ground level was ~ 535 feet, ~250 feet above ground level. At altitude average was ~ 210 feet above ground level.

See image for track in Google Earth. I noticed we can't upload KMZ files. Might rethink this, since a good way to show results.

Worked rig up to altitude and walked around Robertson Park.

When hauled kite in, the A490 was still triggering, the A495 had stopped.

<strong>Observations/Issues:</strong>

Unfortunately, cameras still produced overexposed images (as noted for <a href="http://publiclaboratory.org/notes/patcoyle/5-19-2012/3-camera-rig-testing-chdk-0">earlier test flight with MK111</a>), info for photos showed 1/125 for many. Perhaps <a href="http://publiclaboratory.org/wiki/dual-camera-kit-software">shutter override</a> will need to be set.

When hauled kite in, not clear why the A495 had stopped, yet the A490 was still running. Batteries still seemed ok.

GPSStone did not record gps points at regular intervals. For the one-hour session, with over 800 photos, it only captured 88 track points. Emailed app support to see if have a settings issue, where it only captures every 25 meters. Other gps apps do capture regularly, e. g., iHikeGPS.

iPhone had shifted and was not pointed straight down. Ok for gps, but an issue in terms of future plans to capture attitude data.

I'm attracted to the repeatability and ease of set-up offered by Chris Fastie's more rectilinear camera mounting approach. Plus it offers nice Picavet approach options. However, I'd like to have it offer more crash resistance. Today, several times the package fell (short distances, 4-6 feet) onto the lawn (chosen for just this reason) as I hauled it in. 

Lost half of cover housing for CDHK remote trigger robust prototype, but Don has source for more. Suggests ought to secure it with tape or other means. 

                     ***

Chris Fastie suggested this revision outline the motivation to fly a smart phone (in this case an iPhone or iPod Touch4) since we have a <a href="http://publiclaboratory.org/notes/cfastie/5-10-2012/flight-ready-mk111-timer">nice solution in the inexpensive MK111 timer</a> that shipped with the dual camera Kickstarter balloon mapping kit.

The <a href="http://publiclaboratory.org/notes/patcoyle/3-31-2012/3-camera-housing-photos-and-test-kap-session">idea is to run a gps or sensor data app</a> simultaneously with an app like Tommaso Piazza's Time Fugit, with an interface to trigger a pair of Canon cameras in synch using CHDK.

I have attached Tommaso Piazza's zip file with his CERN OHL release of the schematic for the circuit and associated information.

The tradeoff for the extra weight and cost to replace the MK111 timer with an iPhone or iPod Touch4, is that it would allow one to trigger the cameras with CHDK remote, while capturing the full gps and yaw, pitch and roll information. 

However, I am learning the iPhone iOS imposes limitations on what an app can do in background mode. The developer replied to my email about SensorLogger and whether it could run in background, with, "No it can't. This is a restriction imposed by iOS - only a very small number of APIs can deliver data when the app isn't in the foreground, and most of the sensor data ones are not included. Sorry!" He replied to my question about learning more with, with:
http://developer.apple.com/library/ios/#DOCUMENTATION/iPhone/Conceptual/iPhoneOSProgrammingGuide/ManagingYourApplicationsFlow/ManagingYourApplicationsFlow.html

It has a section, "Implementing Long-Running Background Tasks  ... For tasks that require more execution time to implement, you must request specific permissions to run them in the background without their being suspended. In iOS, only specific app types are allowed to run in the background...."  It  goes on to discus things that developers need to do for each of these types. What I can't tell, is if you have one of these types, e. g., a gps app, "An app that provides continuous location updates to the user (even when in the background) can enable background location services by including the UIBackgroundModes key (with the location value) in its Info.plist file. The inclusion of this value in the UIBackgroundModes key does not preclude the system from suspending the app, but it does tell the system that it should wake up the app whenever there is new location data to deliver. Thus, this key effectively lets the app run in the background to process location updates whenever they occur,..." could also access the sensor data and write it to a file. Tommaso is exploring app options. 

Alternatively, one could write a new app that does everything one wants in the foreground. Or worst case, when really need sensor data, fly the MK111 to trigger cameras along with an iPhone to run a gps app in background and sensor data app in foreground. On days when gps is sufficient, fly the iPhone/CHDK trigger with gps app in background. Perhaps there are some other scenarios as well.

The parts came, for Tommaso Piazza's CHDK remote circuit design to use his Time Fugit iPhone app.

I took part of afternoon off and met Don Pomplun to see about getting it going. After some issues and revisions to resistor values, we did! His experience and diagnostic equipment was very helpful as was his patience in talking me through the process.

The next day, I added the second USB cable and the prototype is triggering both the A490 and A495 cameras using Tommaso Piazza's Time Fugit iPhone app and CHDK remote circuit based on his design.

I started putting short videos in playlist at: https://www.youtube.com/playlist?list=PL2084F959991904DA

A few photos are at: https://www.flickr.com/photos/coylepdc/sets/72157629898884914/

One <a href="http://youtu.be/4VO_o3XkPjs">video shows the two cameras triggering</a>. The rest show Don Pomplun and me working through getting it to run initially.

I tried to put the prototype in the <a href="http://publiclaboratory.org/notes/patcoyle/3-31-2012/3-camera-housing-photos-and-test-kap-session">3-camera juice-bottle rig</a> to get it running and test fly it, but the cable movement pulled a capacitor loose from the breadboard configuration. Might be able to rig it up so cables are stabilized and don't pull on the components, but a hard connected prototype would be better. 

Don completed a more robust, hard-soldered protype from the second set of components I ordered. <a href="https://www.flickr.com/photos/coylepdc/sets/72157629976251716/">See photos</a>. Also on this page.


After it is iterated enough, deciding on sensible way to make short runs of production units would be next. Again, I'm a novice, but others know the options.


The custom circuit takes a pulse at designated intervals from the iPhone app and the integrated circuit is an op amp that enables the overall circuit to put out near zero or ~5V depending on if it sees the pulse signal from the iPhone. In this prototype, the battery provides the power to trigger the cameras, since the iPhone output which we measured at ~0.2V, is not sufficient.(However, subsequent emails with Tommaso and Dom indicate with volume all the way up and equalization off, Don reports output of 0.242, but Tommaso reports 1.4V. This suggests more testing is needed, but one might be able to revise the approach and eliminate the battery.)

CDHK on the cameras has remote triggering enabled in CHDK as well as the synch remote feature to use the second pulse to shoot in synchrony. The pair do shoot on the second pulse. Currently, Tommaso Piazza's iPhone app interval between pulses is constant. It currently does not support a suggested mode  where it might be better to wait just 2 seconds after the first pulse and then signal the cameras to shoot, but wait maybe 10-15 seconds more before the next pair of signals. (I checked, see image synch testing, which showed reasonable nominal triggering with photos at 4 second intervals on both cameras.)

We used a regulator to get 5V from a 9V battery, so don't know if the 3 AA batteries in Tommaso's design are enough.

We also changed the circuit slightly. We omitted the 100k ohm R1 resistor shown near the iPhone input. Since we were not able to trigger it with the 20k ohm R3 resistor we started changing it until at 1.5k ohm it did. The breadboard unit uses a 1k ohm resistor. Subsequently, Tommaso, has noted the design intent with his original schematic as well as an enhancement to to the application that will need it as well. Given the higher voltage available form the iPhone headphone output, further testing is in order. 

We'll explore best way to share the evolving design with the CERN OHL. As I noted above, I have attached Tommaso's zipped set of files. I have not yet marked the schematic with the design changes Don and I made (described above) which is now running as the robust prototype.

Special thanks to Tommaso and Don.
