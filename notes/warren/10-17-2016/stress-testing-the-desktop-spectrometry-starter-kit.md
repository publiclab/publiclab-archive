---
title: Stress-testing the Desktop Spectrometry Starter Kit
tagnames: spectrometer, kits, leaffest, spectrometry, testing, parts-and-crafts, activity:spectrometry, difficulty:medium, activity:dssk, category:test-limits, status:in-progress, time:1h, stress-testing, rigidity
author: warren
path: /notes/warren/10-17-2016/stress-testing-the-desktop-spectrometry-starter-kit.md
nid: 13569
uid: 1

---

# Stress-testing the Desktop Spectrometry Starter Kit

by [warren](../profile/warren) October 17, 2016 17:00

October 17, 2016 17:00 | Tags: [spectrometer](../tag/spectrometer), [kits](../tag/kits), [leaffest](../tag/leaffest), [spectrometry](../tag/spectrometry), [testing](../tag/testing), [parts-and-crafts](../tag/parts-and-crafts), [activity:spectrometry](../tag/activity:spectrometry), [difficulty:medium](../tag/difficulty:medium), [activity:dssk](../tag/activity:dssk), [category:test-limits](../tag/category:test-limits), [status:in-progress](../tag/status:in-progress), [time:1h](../tag/time:1h), [stress-testing](../tag/stress-testing), [rigidity](../tag/rigidity)

At Wednesday's [Open Hardware Documentation Night][1], hosted by Parts & Crafts, @wmacfarl and I used the time to run and document some tests on the rigidity and robustness of the [Desktop Spectrometry Starter Kit][2].

@stoft posted a proposal for a [set of tests to run to establish robustness and rigidity empirically][3]. We also tested a more rigid kit, using [this stability upgrade][4] to the kit, also by @stoft. Thanks, Dave!

Based on this draft set of tests @stoft proposed, we attempted to test the kit by:

- twisting it
- dropping it from 3 feet
- tugging the USB cable
- putting 3 heavy books on it

Obviously, this was fun. You should try it too -- here are the steps:

### 1\. Setup & materials

You'll need:

- one (or two, if you're comparing) Desktop Spectrometry Starter Kits, version 3.0 **which you're willing to destroy**, although the webcam will probably be OK
- some cardboard and strong tape -- about 2 square feet (for the test stand)
- a compact fluorescent lamp
- a blank piece of printer paper (to bounce light off of)
- a laptop
- some heavy books

I built a small "test stand" from cardboard, so that we could remove and replace the spectrometers between "stresses" and be confident that they were pointed the same direction with regard to the light source. To reduce overexposure, we bounced the light off a blank sheet of printer paper.

  
![image description][5]

@wmacfarl built the "default" spectrometer from a kit, and I had already upgraded another one at #leaffest a few weeks ago. The new one had a misprint so it was easy to tell apart, but you might want to clearly label them "1" and "2" -- or "upgraded" and "default."

### 2\. Baseline data

With each of the spectrometers, we took two scans, removed it from the stand, replaced it, and took two more. This was to be sure that removing/replacing the spectrometers wouldn't change the readings significantly. I waited at least 10 seconds between scans, but you can see the timestamps for exact figures:

<iframe width='100%' height='550px' style='border:none;' src='//spectralworkbench.org/sets/embed2/3297'></iframe>

Note that I tagged everything with `stability-upgrade` -- but once I was done, I also added everything to a few sets; using tags was just an easy way to see all the data on a page as I went: [https://spectralworkbench.org/tags/stability-upgrade][6]

### 3\. Twist it

@wmacfarl and I each took a spectrometer by its extremes and hand-twisted it firmly but without a huge amount of force. We twisted twice in each direction -- left, right, left, right. We then swapped spectrometers and twisted again twice in each direction.

![image description][7]

The unreinforced kit ripped a bit (2-3 mm) on the front upper right corner. Its spectrum also moved "down" the screen by about 20 pixels, so I had to move the cross section down too. I'm not sure if this change in cross-section also had an effect on the calibration, but the lines were pretty straight up and down, so I think not a huge one. Not as big as the twist itself, surely.

  
![image description][8]

  
### 4\. Drop it

We then dropped each spectrometer three times from waist level (~3 feet). We didn't drop them in different orientations, but that could be a further test -- we just weren't sure how to do that thorougly and controlled, and were already doing a lot of tests -- maybe next time.

<iframe width="853" height="480" src="https://www.youtube.com/embed/DzTlOOTa1Vk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>


After the drops, there was a light leak on the top front right corner of the default (unreinforced) spectrometer, but I smushed it down with my finger before scanning.

### 5\. Tug the cable

We each tugged the cable sharply a couple times -- me with about a pound of force. Both cables were knotted inside their boxes, which I'm not sure is in the official instructions.

### 6\. Pile books on it

We took three books: The New Way Things Work and two other similar sized books (I can weigh these if anyone's interested) and placed them on top of each spectrometer on the floor, and waited a few seconds.

This seemed pretty pedestrian compared to our previous tests, but it did move the cross-section of the default unreinforced spectrometer down again, and I reset the cross section to accommodate this. Note that since I didn't have two computers set up, the cross section of both is changed each time. I think the spectra are vertical enough that this won't be a problem, but if we see a consistent shift in both devices after doing this, we may need to re-evaluate and use separate computers.

![image description][9]

### 7\. Data comparison

A lot of data -- and definite drifts. I'll go back and make two sets -- one of the reinforced (upgraded), and one of the unreinforced (default) spectrometer scans.

**Update:** separated them out:

* Reinforced: https://spectralworkbench.org/sets/3300
* Unreinforced: https://spectralworkbench.org/sets/3301

I'm not going to embed this because it's so much data it slows the page down, but here is the full set:

https//spectralworkbench.org/sets/3299

And here are two screen captures of the two separate devices:


[![Screen_Shot_2016-10-17_at_1.18.01_PM.png](/system/images/photos/000/018/420/large/Screen_Shot_2016-10-17_at_1.18.01_PM.png)](/system/images/photos/000/018/420/original/Screen_Shot_2016-10-17_at_1.18.01_PM.png)

 [![Screen_Shot_2016-10-17_at_1.17.51_PM.png](/system/images/photos/000/018/421/large/Screen_Shot_2016-10-17_at_1.17.51_PM.png)](/system/images/photos/000/018/421/original/Screen_Shot_2016-10-17_at_1.17.51_PM.png)


There are other ways to analyze this data -- if you'd like, please download all the CSVs or JSON files and share your own take on this.


### Conclusions

First, I believe we're missing two scans -- the post-twist-tests for the reinforced device. But since there's not a lot of drift on that device overall, I think that only means we can't tell the effects of the **twist** and **drop** tests apart -- but they're both way smaller than with the unreinforced device.

This'll need some followup analysis -- the drift between each step, and the stability of scans between the tests -- before we can draw solid conclusions. I hope it's enough data and I'd love help picking it apart!

This was fun, but it did take a little while (about an hour) to go through the tests and record things thoroughly. I think it's a great first step in defining a spec (no pun intended) toward which we wish our kits, or upgrades to the kits, to meet, and a reasonable methodology for running tests against such a spec. It's important that others can replicate these steps, and there is probably room for improvement on documenting them.

However, just one thought after actually doing these tests -- they're quite violent to the device. Should you expect to be able to do this to the kit and not see some drift (4-5nm in the unreinforced one)? Or could we set a less stressful test that the basic kit would have a better chance at passing, and that would not place such (seemingly extreme) robustness requirements on it? This is really a restating [of Dave Stoft's question here](https://publiclab.org/questions/stoft/09-15-2016/what-mechanical-specs-can-and-should-plab-spectrometers-meet).

I'd love to hear suggestions and input, and thanks to @wmacfarl for helping me do some damage!

[1]: https://publiclab.org/notes/warren/09-27-2016/document-your-hardware-upgrades-at-parts-crafts-documentation-days-oct-12-19
[2]: https://publiclab.org/wiki/desktop-spectrometry-kit-3-0
[3]: https://publiclab.org/questions/stoft/09-15-2016/what-mechanical-specs-can-and-should-plab-spectrometers-meet
[4]: https://publiclab.org/notes/stoft/09-16-2016/stability-upgrade-mockup-for-plab-spectrometer-3-0
[5]: /system/images/photos/000/018/415/large/IMG_20161012_192316.jpg
[6]: https://spectralworkbench.org/tag/stability-upgrade
[7]: /system/images/photos/000/018/416/large/IMG_20161014_202841-2.jpg
[8]: /system/images/photos/000/018/418/large/IMG_20161015_232808.jpg
[9]: /system/images/photos/000/018/417/large/IMG_20161014_202923-2.jpg

