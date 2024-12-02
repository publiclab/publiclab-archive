---
nid: 12989
title: Automatic Gain Control vs. Inverse square law
path: public/static/notes/viechdokter/04-16-2016/automatic-gain-control-vs-inverse-square-law.md
uid: 468990
tagnames: spectrometer,intensity-calibration,intensity,distance,agc,gain-control
---

# Automatic Gain Control vs. Inverse square law

After my first trials with my torch light and the problems with the "light rings" it was emitting I tried again, this time focussing it better and keeping the light path straight. I took spectra of that LED torch light at a lot of different distances. 

The "inverse square law" states that the light intensity (flux) is inversely proportional to the distance of the light source squared. So intensity times distance squared should be constant.  

Intensity * distance^2 = const. 

The distance part is easy, but what about the intensity/flux? Red, green, blue? Average? Well I took the CSV data sheet and summed up ALL values in ALL three channels.

Then I put the sums into the above equation. Well, there was no constant. One distance brought a five times higher "constant" than another distance. 

I guess thats because of the Automatic Gain Control of the webcam in my spectrometer. 

**And now my next thought**: could that somehow be a way to find out more about the specifics of the AGC of the webcam? Derive some AGC curve that under certain circumstances could just be substracted from other curves to take away the AGC effect?

Any ideas?