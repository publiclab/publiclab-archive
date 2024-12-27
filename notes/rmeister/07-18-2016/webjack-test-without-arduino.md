---
title: "WebJack: Test without Arduino"

tagnames: 'arduino, alphatest, sensors, gsoc, barnstar:photo-documentation, webjack, headphone-jack, category:build, activity:webjack'
author: rmeister
path: /notes/rmeister/07-18-2016/webjack-test-without-arduino.md
nid: 13296
uid: 468994
cids: 14960,14962,14963,14964,14965,14966,14967,14971,15118,15119,15120,15121,15122,15123,15126,15127,15132,15155,15156,15157,15158,15176,15187,17964
---

![](https://publiclab.org/public/system/images/photos/000/017/116/original/audio_crossover.jpg)

# WebJack: Test without Arduino

by [rmeister](/profile/rmeister) | July 18, 2016 15:22

July 18, 2016 15:22 | Tags: [arduino](/tag/arduino), [alphatest](/tag/alphatest), [sensors](/tag/sensors), [gsoc](/tag/gsoc), [barnstar:photo-documentation](/tag/barnstar:photo-documentation), [webjack](/tag/webjack), [headphone-jack](/tag/headphone-jack), [category:build](/tag/category:build), [activity:webjack](/tag/activity:webjack)

----

WebJack can also be tested without an Arduino/Genuino board. For an explanation of the WebJack project and a tutorial for testing _with_ Arduino, take a look on this [research note](https://publiclab.org/notes/rmeister/07-18-2016/webjack-testers-needed), as I'm going to skip it here.


Requirements:

- 4-pin male-to-male headphone cable
- two mobile devices with a headphone jack and a browser


Instead of an Arduino we can use a second mobile device to replay a recording of the SoftModem signal. But to do so, we need sort of an 'audio crossover' cable. The audio output of one device has to be connected with the microphone input of the other device. Therefore we have to cut off the cable and cross two of the lines. Those are the lines connected to the tip and the sleeve of the connector. For better overview, here is a sketch:

[![audio_crossover.jpg](//i.publiclab.org/system/images/photos/000/017/114/large/audio_crossover.jpg)](//i.publiclab.org/system/images/photos/000/017/114/original/audio_crossover.jpg)

(the colors may not be representative your cable)

After patching up the cable, please follow this steps:

1. Load this recording to the sending device: <a href="//i.publiclab.org/system/images/photos/000/017/115/original/WebJack_test_signal.wav"><i class="fa fa-file"></i> WebJack_test_signal.wav</a>
2. Open the [demo website](https://publiclab.github.io/webjack/examples) on the receiving device:

	[![qr_webjack_demo.gif](//i.publiclab.org/system/images/photos/000/017/088/large/qr_webjack_demo.gif)](//i.publiclab.org/system/images/photos/000/017/088/original/qr_webjack_demo.gif)
_Hint for Mac/OS X: please use Chrome/Firefox/Opera. Safari does not support WebRTC yet._
3. Plug in the 'crossover' cable and start playing the recorded file at the sending device.
4. Is there some text arriving at the 'Received Data' box on the demo page?

	Yes -> Great, it works! Please leave a comment on which devices you used.

	No -> Then please point the receiving device to this [WebRTC recorder](https://webaudiodemos.appspot.com/AudioRecorder/index.html) and record for about 5 seconds (while playing the WebJack_test_signal.wav on the other phone). Please save the recording and post it as comment, attached with information about your setup (smartphone/devices, browser).



__That's it, thank you for your help! __
