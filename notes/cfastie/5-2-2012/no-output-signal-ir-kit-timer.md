---
nid: 1891
title: No output signal on IR kit timer
path: public/static/notes/cfastie/5-2-2012/no-output-signal-ir-kit-timer.md
uid: 554
tagnames: near-infrared-camera,triggering,debugging,troubleshooting,555-timer
---

# No output signal on IR kit timer

This was the first circuit board I have ever soldered, so I was pleased that the 555 timer kit that was included in the Kickstarter <a href="http://publiclaboratory.org/wiki/dual-camera-kit-guide">IR camera package</a> had a handy illustration of what your soldered contacts should look like.  It was disconcerting that most of my contacts closely resembled the image of how the contacts should NOT look, but my completed timer actually worked!  

But maybe not really.  Although the onboard LED blinks and the relay clicks in time with the intervals set by the potentiometers, I have not been able to get the timer to output a usable pulsed signal.  Jeff was having problems as well, and he thinks it is a power issue – the device might need a stronger battery to operate correctly.  I have been running it with the 12 volt A23 battery Jeff supplied, and I have not tried another 12 volt power source.  The <a href="http://www.vellemanusa.com/products/view/?id=350686">product description</a> says “12VDC…15VDC / 100mA.”  I think my two 6v lantern batteries would be too much (about 300mA apiece). 

I have tried different batteries for the other part of the timer.  The output circuit needs its own battery, and this would supply power to the cameras through the USB cables. Canon Powershots are supposed to <a href="http://chdk.wikia.com/wiki/CameraFeatures">need about 3.5 to 5.5 volts</a> to be triggered through the USB ports, and it is possible to damage some cameras with more than 5 volts. I tried without success to power the output circuit with:
3x   1.5v button cells (=4.5v), 
3x   1.2v rechargeable AAA (=3.6v),
4x   1.2v rechargeable AAA (=4.8v),
6x   1.2v rechargeable AA (=7.2v).

These tests were done with a test lamp, NOT a camera.  So the timer was running (on a 12v A23 battery) and the output terminals were connected to a test lamp and battery.  The failure always exhibits what might be a diagnostic feature (to someone who understands this stuff).  When the power and test lamp are connected to the COM and NC terminals, the current is continuous even as the timer is going through its intervals.  When the power is connected to the COM and NO terminals, there is never any current. So it appears that the relay is not doing its switching thing.  The product description says “3A/24V output relay with dry switch-over contact.”  So maybe it will work with closer to 24 volts on the output circuit.  But that is way too much to run through a USB cable to the camera.

I have successfully triggered the Canon A495 from the IR camera pair with:
3x   1.5v button cells (=4.5v), 
3x   1.2v rechargeable AAA (=3.6v),
4x   1.2v rechargeable AAA (=4.8v).

Jeff said he was triggering the camera with 6v.  Don’t try this at home!

I think I am stumped.  Any suggestions about what to try next?
