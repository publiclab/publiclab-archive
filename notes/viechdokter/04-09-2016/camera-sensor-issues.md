---
title: "Camera sensor issues"

tagnames: 'spectrometer, overexposure, sunlight, camera_sensor, channel_intensity'
author: viechdokter
path: /notes/viechdokter/04-09-2016/camera-sensor-issues.md
nid: 12949
uid: 468990

---

![](https://publiclab.org/public/system/images/photos/000/015/439/original/sunlight_12_curve_only.jpg)

# Camera sensor issues

by [viechdokter](../../../profile/viechdokter) | April 09, 2016 13:24

April 09, 2016 13:24 | Tags: [spectrometer](../tag/spectrometer), [overexposure](../tag/overexposure), [sunlight](../tag/sunlight), [camera_sensor](../tag/camera_sensor), [channel_intensity](../tag/channel_intensity)

----

Yeah, I know! Many guys here do REAL scientific work, whereas I just toy around with my new spectrograph. But well...

Today we have some sun here in Germany so I tried to "work" on the overexposure problem. While doing this there were a few things I noticed in the spectra I wanted to share with you. Here is the first spectrum:

[![sunlight_9.jpg](//i.publiclab.org/system/images/photos/000/015/433/large/sunlight_9.jpg)](//i.publiclab.org/system/images/photos/000/015/433/original/sunlight_9.jpg)

The sun was just behind a cloud, so I aimed the spectrograph towards the sky and got a diffuse sunlight spectrum. The greens were still slightly overexposed. As in the sunset pictures the yellow is almost gone. Unfortunately you seem to get yellows only when the greens are strongly overexposed. Everything that lowers overall light intensity takes away parts of the spectrum. Shame, really!

But now lets have a look at the curve of this spectrum only:

[![sunlight_9_curve_only.jpg](//i.publiclab.org/system/images/photos/000/015/434/large/sunlight_9_curve_only.jpg)](//i.publiclab.org/system/images/photos/000/015/434/original/sunlight_9_curve_only.jpg)

Although the green is clipped (overexposed) we can see two distinct intensity peeks there. And even more interesting we can detect three different peaks of red! Now the dilemma:

the grating is supposed to bend the light of different wavelengths into different directions. Although we usually see yellow as a sum of red and green light - in the rainbow it is a colour of its own right. About 610 nm. The camera sensor can only detect red, green and blue, so it will compose all the other colours out of those three. Violet is blue plus red, isn't it? Yes, the curve shows a small red peak and a lot of blue in the place where we get the violet colour. Blue plus red equals violet. Every small kid knows that. 

But hey! When the grating bends the lightwaves of different wavelengths into different direction, how can we detect _any red at all_ in the blueish part of the spectrum? Shouldn't the red be only on the right hand side? What exactly detects the camera sensor? 

I used to think that photons of different energy (different wavelengths) induce electron flow in different sensors (red, blue, and green sensors) and that the sensor ranges "overlap a bit" so that  certain photons affect two sensors if their wavelength is in between say red and green. But in this curve it looks like all three sensors use photons from the whole range of wavelengths.

Here is the next spectrum. Direct sunlight through the slit. Green is strongly overexposed:

[![sunlight_11.jpg](//i.publiclab.org/system/images/photos/000/015/435/large/sunlight_11.jpg)](//i.publiclab.org/system/images/photos/000/015/435/original/sunlight_11.jpg)

And the curve again:

[![sunlight_11_curve_only.jpg](//i.publiclab.org/system/images/photos/000/015/436/large/sunlight_11_curve_only.jpg)](//i.publiclab.org/system/images/photos/000/015/436/original/sunlight_11_curve_only.jpg)

We now have a nice yellow but we still have the two green and three red peaks, almost exactly at the same places (same distances) but they are a bit redshifted (about 10 nm to the right). But why exactly is there a drop in the intensity of greens between the two green peaks? Even in the strongly overexposed spectrum the green drops in the middle. Why?

And another overexposure issue. Look at this curve:

[![sunlight_12.jpg](//i.publiclab.org/system/images/photos/000/015/437/large/sunlight_12.jpg)](//i.publiclab.org/system/images/photos/000/015/437/original/sunlight_12.jpg)

All three channels are strongly overexposed and clipped. I wonder why the image in the middle becomes grey. Is this the camera's way to say: "That's too much for me! Let's fade to grey!"? And look at the curve again:

[![sunlight_12_curve_only.jpg](//i.publiclab.org/system/images/photos/000/015/438/large/sunlight_12_curve_only.jpg)](//i.publiclab.org/system/images/photos/000/015/438/original/sunlight_12_curve_only.jpg)

Each colour channel is clipped at a certain point because of the strong light, but in the middle (the "strange behaviour part") all three of them are _clipped and reduced_ to 80% which adds up to grey (100% would be white, 0% would be black). So the camera sensor doesn't mind a single colour becoming too intense but when all three of them get too bright in one place it darkens the whole part down a bit.

Brain food, huh?



