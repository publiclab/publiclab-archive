---
title: "WebJack progress"\ntagnames: 'arduino, arduino-uno, sensor-readout, sensor-nodes, serial-link, webjack, activity:webjack, category:dev'
author: rmeister
path: /notes/rmeister/07-11-2016/webjack-progress.md
nid: 13277
uid: 468994

---

![](https://publiclab.org/public/system/images/photos/000/016/940/original/webjack_arduino_temp_sensor.png)

# WebJack progress

by [rmeister](../profile/rmeister) | July 11, 2016 15:04

July 11, 2016 15:04 | Tags: [arduino](../tag/arduino), [arduino-uno](../tag/arduino-uno), [sensor-readout](../tag/sensor-readout), [sensor-nodes](../tag/sensor-nodes), [serial-link](../tag/serial-link), [webjack](../tag/webjack), [activity:webjack](../tag/activity:webjack), [category:dev](../tag/category:dev)

----

It's time for an update about WebJack. As you see from the picture above the decoder is in a functional state. It is not merged into the main repository yet, but is available here: [https://rmeister.github.io/webjack/examples/](https://rmeister.github.io/webjack/examples/). 
There were two major design decisions on the way to get it working, that I'll explain here.

###1. Decoding Logic
Instead of evaluating the demodulated signal at fixed points after recognition of a preamble, the time between zero-crossings is measured and divided by the samples per bit. The result gets rounded to an integer. This integer is the amount of consecutive zeros or ones. A finite state machine will finally retrieve the data. 
Lets simplify the explanation with an example. So e.g. between the current and the last zero-crossing were 49 times 36 samples (per bit), which means it must be the preamble and the FSM goes into the 'START' state. Next comes the start bit, which is a zero, and eventually the first data bits are zero as well. Meaning if the amount X of equal bits since the preamble end is largen than 1 (and smaller than 9, as the 9th bit must be the stop bit == high == zero-crossing), we can assume that X - 1 zeros were sent. The FSM goes into 'DATA' state or in case of an error back into 'PREAMBLE' state. In the 'DATA' state the decoder adds retrieved bits until a byte is completed. Then in the 'STOP' state the decoder checks if another byte follows or if the transmission is over (push bit). 
I was inspired to build the decoder this way by the implementation of modem.js. The algorithmis less dependent on the shape of the demodulated signal and therefore less error-prone.

###2. Used Frequencies
During development I plugged the cable from the Arduino into my notebook and everything was fine. But on my phone I received either nothing at all or heavily corrupted data. It took a while until I figured out that recording audio with webRTC on different machines can give you very different results. Here are three recordings (2x mobile, 1x notebook) made with [https://webaudiodemos.appspot.com/AudioRecorder](https://webaudiodemos.appspot.com/AudioRecorder/index.html):

[![attenuation2.png](//i.publiclab.org/system/images/photos/000/016/944/large/attenuation2.png)](//i.publiclab.org/system/images/photos/000/016/944/original/attenuation2.png)

You can see that the amplitude is varying for the two mobile phones, depending on the frequency. For the notebook, both frequencies have almost the same amplitude. This totally makes sense after I've read this blog article about audio codecs in webRTC:
[https://bloggeek.me/single-voice-codec-webrtc/](https://bloggeek.me/single-voice-codec-webrtc/)

WebRTC was build with voice communication in mind and therefore may cut down the transmitted frequency range to reduce bandwidth. The lowpass filter seems not to be that sharp, so the used 7350Hz for a logical 1 still can be found in my recordings. But the attenuation is clearly visible and causes difficulties in demodulation. Look closely at the difference of the following two pictures:

Phone:
[![nexus.png](//i.publiclab.org/system/images/photos/000/016/945/large/nexus.png)](//i.publiclab.org/system/images/photos/000/016/945/original/nexus.png)
Notebook:
[![notebook.png](//i.publiclab.org/system/images/photos/000/016/946/large/notebook.png)](//i.publiclab.org/system/images/photos/000/016/946/original/notebook.png)

You may notice the asymmetry of the first signal, taken from the demodulated phone recording. This causes problems, because the decoding logic assumes a symmetrical signal, for which zero-crossings accur at the middle of the peak-to-peak distance. This results in too short or too long distances between zero-crossings, making it difficult to distinguish the exact number of consecutive bits.
However, the solution to this problem is rather simple: utilizing frequencies that will not be attenuated. Based on the earlier error calculations and the given limit of 7kHz, these frequencies come into consideration:

- 2450Hz
- 3675Hz
- 4900Hz 

First one I tried was 3675Hz, half of the former 7350Hz. It turned out that this will not work, due to overlapping thresholds at the decoder of the SoftModem implementation that break the correct detection of bits at the µC. 
After changing the frequencies to 2450Hz (zero) and 4900Hz (one), both transmission directions do work on mobile phones. I'v tested with two phones and three browsers (Chrome, Firefox, Opera) so far.

###Questions and next steps
It would be great to test with much more recordings, made with plenty of different phones. Currently I'm using the SoftModem shield, but one could probably feed the wires directly (or at least with a protecting capacitor) into the Arduino pins. Maybe I should try that so I can instruct others to make recordings without the special shield.
