---
title: "Recap: Open Water Workshop, 7/12/14"

tagnames: 'cambridge, video, boston, workshop, parts-and-crafts, water-quality, conductivity, riffle, open-water, northeast, barnstar:basic, barnstar:empiricism, 555, riffle-cricket, piezo, mit, hooray, civic-media, barnstar:video-documentation'
author: donblair
path: /notes/donblair/07-15-2014/recap-open-water-workshop-july-12-2014.md
nid: 10693
uid: 43651
cids: 9512,9518,9538,9539,9556,9644,21154,21155
---

![](https://publiclab.org/public/system/images/photos/000/005/294/original/hPP.png)

# Recap: Open Water Workshop, 7/12/14

by [donblair](/profile/donblair) | July 15, 2014 06:44

July 15, 2014 06:44 | Tags: [cambridge](/tag/cambridge), [video](/tag/video), [boston](/tag/boston), [workshop](/tag/workshop), [parts-and-crafts](/tag/parts-and-crafts), [water-quality](/tag/water-quality), [conductivity](/tag/conductivity), [riffle](/tag/riffle), [open-water](/tag/open-water), [northeast](/tag/northeast), [barnstar:basic](/tag/barnstar:basic), [barnstar:empiricism](/tag/barnstar:empiricism), [555](/tag/555), [riffle-cricket](/tag/riffle-cricket), [piezo](/tag/piezo), [mit](/tag/mit), [hooray](/tag/hooray), [civic-media](/tag/civic-media), [barnstar:video-documentation](/tag/barnstar:video-documentation)

----

<iframe src="//player.vimeo.com/video/100778803?title=0&amp;byline=0&amp;portrait=0" width="700" height="393" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
*Katie explaining how the 555-based audio conductivity meter works.  The sensor she built was able to distinguish, via audible tones, between "groundwater runoff" and "seawater" levels of salinity.  Credit: this brief interview with Katie was filmed by [Heather Craig](http://civic.mit.edu/users/hhcraig), and was edited by [William Everett](http://williammeverett.com/).*

## Overview

On Saturday, July 12, a fine bunch of folks gathered on the 5th floor of the Media Lab to talk about water! 

A few weeks ago, Public Lab had received generous support from [Rackspace](http://rackspace.com) for an Open Water event in July; and we decided to use the funds we'd received towards holding a workshop focused on exploring '[conductivity](http://en.wikipedia.org/wiki/Conductivity_(electrolytic))' as an [important and widely-used water quality parameter](http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/).  In addition to facilitating a group discussion on the topic, we hoped we could work together on prototyping a simple, inexpensive way of measuring conductivity:  there are some situations (like suspected fracking contamination of house tap water) in which simply knowing that there has been a recent 'spike' in conductivity can be sufficient to indicate a serious water quality problem -- so having an inexpensive, accessible tool that indicates conductivity spikes could be very useful!

After a great discussion in the first few hours of the workshop, we ended up making great progress on the electronics.  By the end of the workshop, we had:

- built simple, cheap 555 conductivity meters on a breadboard
- demonstrated that we could distinguish solutions of varying salinity from one another using this circuit
- added an 'audio' component to the circuit via a piezo buzzer, allowing one to 'hear' the conductivity of solutions -- neat!
- wired up an audio jack to the circuit, so that the resultant audio could be recorded on a smartphone or laptop
- tested out browser-based pitch detection software -- different levels of conductivity can now be assessed using only the browser!
- had lots of fun!

## The workshop begins ... 

The event started a little past 11 AM, with the following folks eventually gathering in the conference room that [Catherine d'Ignazio](http://civic.mit.edu/users/kanarinka) had so nicely reserved for us. 

[![conductivityEdit.png](https://i.publiclab.org/system/images/photos/000/005/371/medium/conductivityEdit.png)](https://i.publiclab.org/system/images/photos/000/005/371/original/conductivityEdit.png)

*The first part of the workshop involved a wide-ranging discussion around the water quality projects that have been brewing within the Public Lab community.*

- [Heather Craig](http://civic.mit.edu/users/hhcraig)
- [Wang Yu](http://civic.mit.edu/users/wangyu)
- [Craig Versek](https://www.linkedin.com/pub/craig-versek/27/272/771)
- [Jiansheng Feng](https://www.linkedin.com/pub/jiansheng-feng/35/683/92b)
- [Christine Walley](http://web.mit.edu/anthropology/people/faculty/walley.html)
- [Lily Bui](https://www.linkedin.com/pub/lily-bui/20/197/896)
- [Melissa Eliot](https://www.linkedin.com/pub/melissa-eliot/69/463/607)
- [Katie Gradowski](http://partsandcrafts.org/about-us/people/)
- [Will Macfarlane](http://partsandcrafts.org/about-us/people/)
- [Eben Pendleston](https://www.linkedin.com/in/ebenp)
- [Don Blair](publiclab.org/profile/donblair)

After introducing ourselves, we had a great, free-form discussion about water quality for the first two hours of the workshop.  Some of the topics included:

- Public Lab's [Riffle](http://publiclab.org/wiki/riffle) open hardware water quality monitor
- The ways in which inexpensive, non-proprietary sensors might allow for new and important questions to be asked and answered in water quality 
- What a distributed water quality monitoring effort might look like, and some of the associated challenges
- How we might calibrate open hardware sensors
- Brainstorming ways of developing community support structures for distributed water quality monitoring efforts
- Suggestions for organizations with whom to partner on these efforts
- The notion of setting up 'tool libraries' for water quality monitoring in libraries and community centers (places like [Parts & Crafts](http://partsandcrafts.org/)). 

[![IMG_1066.JPG](https://i.publiclab.org/system/images/photos/000/005/341/medium/IMG_1066.JPG)](https://i.publiclab.org/system/images/photos/000/005/341/original/IMG_1066.JPG)

*Whiteboard writings from first few hours of discussion.*

## Basics of conductivity

After a great discussion, we ordered pizza, and started working on building our own DIY conductivity sensors.   We soon realized that we needed to be clear about what conductivity actually *is*.  Craig lead us through a nice discussion on the whiteboard ...

[![IMG_1024.JPG](https://i.publiclab.org/system/images/photos/000/005/309/medium/IMG_1024.JPG)](https://i.publiclab.org/system/images/photos/000/005/309/original/IMG_1024.JPG)

*Craig's impromptu lecture provided us all with a useful overview of how conductivity is measured ...* 

[![IMAG1144_1.jpg](https://i.publiclab.org/system/images/photos/000/005/311/medium/IMAG1144_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/311/original/IMAG1144_1.jpg)

*Craig's depiction of a basic conductivity measurement. Also, see the [Wikipedia entry on conductivity](http://en.wikipedia.org/wiki/Conductivity_(electrolytic)).*

*Aside*: here's a great [primer](http://www.fondriest.com/environmental-measurements/parameters/water-quality/conductivity-salinity-tds/) from Fondriest for those unfamiliar with how conductivity is measured.

## First: creating a resistance-dependent oscillation circuit

Folks then quickly dove into building the circuit, with the idea that doing so would make for a good, hands-on way to get a feel for how conductivity works. 

The basic circuit we aimed to assemble is very 'simple' when it comes to the electronics world.  Here's the basic idea:

There is an inexpensive ($0.50) chip called the '555 timer' which, when connected to a few resistors, capacitors, and a power supply, will provide an oscillating output voltage.  The rate of this oscillation depends on one of the resistors in the circuit.  So, for example, one can hook up an LED to the 555 timer output, and control the rate of LED blinking by changes the value of the proper resistor.  In our kit, we had a 555, and LED, and a component that provides user-controlled resistance:  a potentiometer.  The [resultant circuit](555 Blinky LED circuit](http://www.555-timer-circuits.com/flashing-led.html) was the first circuit we aimed to build in the workshop.  [More on how that connects with conductivity further down this page ...]

We based on assembly on a design put together by Ben Gamari, based on [another circuit we found online](http://www.practicalmaker.com/products/arduino-shields/ec-shield-assembled):


[![555conductivity-nocap_bb-aug12.png](https://i.publiclab.org/system/images/photos/000/006/377/medium/555conductivity-nocap_bb-aug12.png)](https://i.publiclab.org/system/images/photos/000/006/377/original/555conductivity-nocap_bb-aug12.png)



*The circuit we assembled at the workshop ... [note: this version works!]*

For reference, here's a schematic showing a similar circuit:

[![FI66X99H7996R0X.MEDIUM.jpg](https://i.publiclab.org/system/images/photos/000/005/238/medium/FI66X99H7996R0X.MEDIUM.jpg)](https://i.publiclab.org/system/images/photos/000/005/238/original/FI66X99H7996R0X.MEDIUM.jpg)

*Reference schematic for the 'astable 555 timer circuit', which oscillates at a frequency controlled by resistors in the circuit*

>  The way this 555 'astable' oscillating circuit is constructed, the oscillation frequency of the output will *increase* as the resistance value R2 *decreases*.

For reference, here are the parts required to build the circuit, with associated costs.  We aimed to be able to build 10 kits in the workshop, so some of the items are priced in units of 10 (with a few thrown in, just in case):

From [Adafruit](http://adafruit.com):

- 10 x Half-size breadboard[ID:64] = $45.00
- 1 x Breadboarding wire bundle[ID:153] = $6.00
- 10 x Waterproof 2xAA Battery Holder with On/Off Switch[ID:770] = $35.60
- 10 x Piezo Buzzer (PS1240) [ID:160] = $13.50
- 10 x Breadboard trim potentiometer (10K) [ID:356] = $11.30
- 1 x Super Bright Blue 5mm LED (25 pack)[ID:301] = $8.00

From [Digikey](http://digikey.com):

- 12 x 555 timer integrated circuit,  LMC55CN/NOPB-ND = $13.73 

For 10 kits, this ends up being under $14 per kit -- not bad!

Here's how the parts arrived to the workshop:

[![IMAG1150_1.jpg](https://i.publiclab.org/system/images/photos/000/005/308/medium/IMAG1150_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/308/original/IMAG1150_1.jpg)

*555 timer conductivity circuit parts*

Folks quickly dug into those boxes and found what they needed!

[![IMAG1142_1.jpg](https://i.publiclab.org/system/images/photos/000/005/312/medium/IMAG1142_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/312/original/IMAG1142_1.jpg)

*Everyone starts assembling the circuit ...*

[![IMG_1028.JPG](https://i.publiclab.org/system/images/photos/000/005/313/medium/IMG_1028.JPG)](https://i.publiclab.org/system/images/photos/000/005/313/original/IMG_1028.JPG)

*Don placed his schematic on the main screen, so that everyone could reference it ...*


[![IMG_1030.JPG](https://i.publiclab.org/system/images/photos/000/005/314/medium/IMG_1030.JPG)](https://i.publiclab.org/system/images/photos/000/005/314/original/IMG_1030.JPG)

*Intense concentration ...*


[![IMG_1042.JPG](https://i.publiclab.org/system/images/photos/000/005/315/medium/IMG_1042.JPG)](https://i.publiclab.org/system/images/photos/000/005/315/original/IMG_1042.JPG)

*Really digging in ...*


[![IMG_1059.JPG](https://i.publiclab.org/system/images/photos/000/005/316/medium/IMG_1059.JPG)](https://i.publiclab.org/system/images/photos/000/005/316/original/IMG_1059.JPG)

*Eben wondering why his circuit isn't blinking ...*

[![IMG_1065.JPG](https://i.publiclab.org/system/images/photos/000/005/317/medium/IMG_1065.JPG)](https://i.publiclab.org/system/images/photos/000/005/317/original/IMG_1065.JPG)

*Katie wondering why *her* circuit isn't blinking ...*

[![IMG_1083.JPG](https://i.publiclab.org/system/images/photos/000/005/319/medium/IMG_1083.JPG)](https://i.publiclab.org/system/images/photos/000/005/319/original/IMG_1083.JPG)

*Yu and Katie puzzling over their circuits ...*

At some point, Will pointed out that Don's schematic was **wrong all along**:

[![IMG_1058.JPG](https://i.publiclab.org/system/images/photos/000/005/318/medium/IMG_1058.JPG)](https://i.publiclab.org/system/images/photos/000/005/318/original/IMG_1058.JPG)

Will quickly figured out how to fix the error, and everyone was quickly able to build a working 555 timer circuit very easily, with a flashing LED controlled by a variable resistor (potentiometer):

[![IMG_1085.JPG](https://i.publiclab.org/system/images/photos/000/005/320/medium/IMG_1085.JPG)](https://i.publiclab.org/system/images/photos/000/005/320/original/IMG_1085.JPG)

[![20140712_143049.jpg](https://i.publiclab.org/system/images/photos/000/005/241/medium/20140712_143049.jpg)](https://i.publiclab.org/system/images/photos/000/005/241/original/20140712_143049.jpg)

Aside: later that evening, Lily -- who missed the prototyping segment of the workshop -- was able to follow the corrected schematic at home, and afterwards tweeted in her successful result:

[![lily.png](https://i.publiclab.org/system/images/photos/000/005/345/medium/lily.png)](https://i.publiclab.org/system/images/photos/000/005/345/original/lily.png)

## Using the oscillator to assess conductivity

In order to move from simply blinking an LED to a conductivity measurement, the plan was then to replace the resistor which was controlling the 555 timer oscillation frequency with a 'DIY conductivity probe':  two stainless steel screws poked through a plastic water bottle cap.  When the probe is dipped into the water sample the resistance of the water between the two screws now controls the LED frequency.  (For those who are following the schematic above:  the conductivity probe replaces "R2" in the schematic).  A simple way to visualize relative changes in conductivity!


> Because the oscillation frequency will *increase* as the resistance value R2 *decreases*, now that we're using water in lieu of the resistor R2, we expect that the oscillation frequency will *increase* as the conductivity of the water between the two metal screws *increases*.  I.e.: the greater the oscillation frequency we observe, the greater the conductivity of the solution in which the probe sits.  

To construct the conductivity probe, some of us simply used the water bottle cap: sticking the screws through the cap, and connecting wires to the screw ends on the inside of the cap:

[![20140712_150326.jpg](https://i.publiclab.org/system/images/photos/000/005/246/medium/20140712_150326.jpg)](https://i.publiclab.org/system/images/photos/000/005/246/original/20140712_150326.jpg)

As you'll see in some of the videos later, this led to trouble:  the cap often ended up sinking into the water sample, submerging the entire cap and dunking the alligator clips into the water, so that instead of measuring the conductivity across the stainless steel screw tips, the measurement was of the conductivity between the alligator clip ends.  Not good!

It turned out that a better way was to keep the top half of the bottle attached, which served to keep the wires away from the water:

[![20140712_143829.jpg](https://i.publiclab.org/system/images/photos/000/005/242/medium/20140712_143829.jpg)](https://i.publiclab.org/system/images/photos/000/005/242/original/20140712_143829.jpg)

[![IMG_0322.JPG](https://i.publiclab.org/system/images/photos/000/005/342/medium/IMG_0322.JPG)](https://i.publiclab.org/system/images/photos/000/005/342/original/IMG_0322.JPG)

[![IMG_0321.JPG](https://i.publiclab.org/system/images/photos/000/005/343/medium/IMG_0321.JPG)](https://i.publiclab.org/system/images/photos/000/005/343/original/IMG_0321.JPG)

*The water bottle cap conductivity probe.*

## Salinity measurements 

In advance of the workshop, Craig had carefully measured out various amounts of table salt in order for us to be able to be able to prepare some water samples whose salinity matched some [real-world examples]:

A few days before the workshop, we'd found a nice [table of salinity values](http://www.fao.org/docrep/t0667e/t0667e05.htm) for some typical real-world scenarios:

[![Salinities.png](https://i.publiclab.org/system/images/photos/000/005/344/medium/Salinities.png)](https://i.publiclab.org/system/images/photos/000/005/344/original/Salinities.png)

(Note: a good reference for conductivity references and conversions is [here](http://www.hannacan.com/conseils_EC_en.htm).)

Craig had prepared several vials of table salt, in masses appropriate for mixing with 100 mL of water in order to generate samples that matched the concentrations in the above table values:

[![20140712_160519.jpg](https://i.publiclab.org/system/images/photos/000/005/239/medium/20140712_160519.jpg)](https://i.publiclab.org/system/images/photos/000/005/239/original/20140712_160519.jpg)

We should have used distilled water to create the solutions, but we didn't have any handy, so we used the bottled water that came in the plastic bottles (although next time we'll ask every participant to find a recycled water bottle to bring!).

So we then measured out 100 mL into the 'bottom half' of the plastic water bottles (which we'd cut in half earlier to make the probes) ... and added the various salt amounts that Craig had prepaired to the 100 mL volume of water:

- Solution no. 1: No salt (distilled water).
- Solution no. 2: 100 mg (low salt).
- Solution no. 3: 425 mg (medium salt).
- Solution no. 4: 1100 mg (high salt).
- Solution no. 6: 5000 mg (brine - similar to salt water).

(Not sure what happened to number 5!  I think it was dumped accidentally in the process of mixing ... )

[![IMG_1060.JPG](https://i.publiclab.org/system/images/photos/000/005/322/medium/IMG_1060.JPG)](https://i.publiclab.org/system/images/photos/000/005/322/original/IMG_1060.JPG)

*Craig and Melissa creating solutions of varying salinity ...*

[![20140712_160313.jpg](https://i.publiclab.org/system/images/photos/000/005/245/medium/20140712_160313.jpg)](https://i.publiclab.org/system/images/photos/000/005/245/original/20140712_160313.jpg)

*Solutions #4 and #6, with bottle cap conductivity probes, connected to 555 circuits with LEDs that blink at a frequency that increases as the conductivity of the solution increases.*

We all then started exploring how solutions of varying salinity affected the rate of oscillation in our circuits, by watching the LED blink rate change as we dipped the probe in to the various samples ...

[![IMAG1159_1.jpg](https://i.publiclab.org/system/images/photos/000/005/324/medium/IMAG1159_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/324/original/IMAG1159_1.jpg)

[![IMG_1063.JPG](https://i.publiclab.org/system/images/photos/000/005/323/medium/IMG_1063.JPG)](https://i.publiclab.org/system/images/photos/000/005/323/original/IMG_1063.JPG)

[![IMG_1054.JPG](https://i.publiclab.org/system/images/photos/000/005/325/medium/IMG_1054.JPG)](https://i.publiclab.org/system/images/photos/000/005/325/original/IMG_1054.JPG)

[![IMAG1162_1.jpg](https://i.publiclab.org/system/images/photos/000/005/326/medium/IMAG1162_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/326/original/IMAG1162_1.jpg)

Fun stuff!

## Audible conductivity!

One issue with assessing conductivity through the blinking of an LED is that when the blink rate exceeds a threshold value, the [human eye can't discern the individual blinks -- and although the LED, which then seems constantly lit, might vary slightly in brightness, the differences might be hard to discern.  

So we tried replacing the LED in the circuit with ... a piezo buzzer!  At low frequencies, we heard 'clicks' at a certain rate; and as the frequencies increased, we began to hear tones.  

> The oscillation frequency of the circuit output *increases* with increasing conductivity.  (Keep that in mind when watching the videos / listening to the audio track below!)

Will does a nice job explaining how this measurement works in the following video:

<iframe width="560" height="315" src="//www.youtube.com/embed/u8fn49incyw?rel=0" frameborder="0" allowfullscreen></iframe>

Don also attempts to explain the setup in this video:

<iframe width="560" height="315" src="//www.youtube.com/embed/eijx8hRngsM?rel=0" frameborder="0" allowfullscreen></iframe>

(And recall that Katie also does a great job explaining the concept in the video at the top of this research note.)

Afterward, we all spent several happy minutes making solutions 'sing' their conductivity values ...

... and then Craig and Jiansheng began to work on seeing whether, instead of a piezo buzzer, they could simply hook up an audio jack directly to the laptop, and record / display the resultant oscillations as a 'sound input':

[![IMAG1158_1.jpg](https://i.publiclab.org/system/images/photos/000/005/328/medium/IMAG1158_1.jpg)](https://i.publiclab.org/system/images/photos/000/005/328/original/IMAG1158_1.jpg)

Yu determined that we'd probably be safe if we dropped the input voltage down to below 1.3 V (it began at 3V, due to the 2 X AA batteries powering the circuit); so Jiansheng and Craig used the potentiometer in the kit to create a voltage divider, dropping the input down below 1 V (if I recall correctly):

Once we had the audio jack setup, we navigated our browser to an open source, browser-based 'pitch detection' page (really fun!) that determines the dominant frequency in an audio input signal (of the sort that our circuit was now providing):

[![pitch.png](https://i.publiclab.org/system/images/photos/000/005/339/medium/pitch.png)](https://i.publiclab.org/system/images/photos/000/005/339/original/pitch.png)

> You can test this browser-based pitched detection live right now, [here](http://webaudiodemos.appspot.com/pitchdetect/)!

Here was our very first test of getting the browser to 'recognize conductivity levels' via the laptop audio input jack (spoiler alert: it pretty much worked!)

[Warning: the following video involves some overly-gleeful exclamations from Don ...]

<iframe width="560" height="315" src="//www.youtube.com/embed/G4e7GQeODYI?rel=0" frameborder="0" allowfullscreen></iframe>

Notice that the final sample didn't quite register as a separate frequency.  As Craig points out in the video, we're still not quite sure how the frequency-detection algorithm works; we thought there could be issues with our input frequency being too high; or with the fact that the algorithm expects a sinusoidal, rather than a sawtooth wave (of the sort we presumed ours was)

We tried the test again:  


<iframe width="560" height="315" src="//www.youtube.com/embed/GTi43sbCOOk?rel=0" frameborder="0" allowfullscreen></iframe>

This time, we noticed that two of the solutions were no longer very different.  This was likely because of 'cross-contamination' of the sample preparations -- we were constantly dipping the same probe in the various solutions in a random order, and we probably ended up mixing the various solutions together this way, changing their salt concentrations and diminishing any differences among them.  

Meanwhile, Yu had figured out now to use a basic web audio framework to collect 'raw frequency values' from the javascript frequency detection library:

[![IMG_1087.JPG](https://i.publiclab.org/system/images/photos/000/005/330/medium/IMG_1087.JPG)](https://i.publiclab.org/system/images/photos/000/005/330/original/IMG_1087.JPG)

Very promising!  In the end, it now seems as though someone who knows a bit of javascript could eventually work out a way of allowing for a calibration procedure, and thereafter displaying conductivity values in the browser -- all without the user needing to install any software!

## Recording conductivity values on a laptop via audio jack

To finish off our investigations, we decided to use a popular open source sound recording program, [Audacity](http://audacity.sourceforge.net/), in order to record the audio input values.  (We were curious as to what conductivity 'really sounded like'!)

[![audacity1.png](https://i.publiclab.org/system/images/photos/000/005/340/medium/audacity1.png)](https://i.publiclab.org/system/images/photos/000/005/340/original/audacity1.png)

[![IMG_1094.JPG](https://i.publiclab.org/system/images/photos/000/005/331/medium/IMG_1094.JPG)](https://i.publiclab.org/system/images/photos/000/005/331/original/IMG_1094.JPG)

Because our solutions seemed contaminated, we started off with a containr of fresh tap water, and simply added salt to that container in between samples. You can hear the results by pressing play in the audio recording below:  

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158855337&amp;color=ff5500&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Our recollection is that the probe begins in air (minimal sound), and then is placed in tap water (Warning -- you'll hear an alarm-like BUZZ! You might want to turn your volume down ...).  We then added in some salt, with the probe still in the solution (you'll hear the frequency increase, smoothly) ... and then we took the probe out of the water (sounds like a record player needle scratch, and then silence) ... added some salt, and replaced the probe (BUZZ! but this time at a higher frequency).  We tried this several times; but because we weren't listening to the audio 'live' while doing it, we weren't quite successful and generating noticeable differences in frequency with each sample:

In retrospect, one issue is probably that, in this experiment, we were only adding an 'additional pinch of salt' in each iteration -- the same amount of salt each time, more or less -- whereas our earlier solutions (which displayed noticeable differences in frequency) had concentration differences that increased ten-fold with each sample.  We're eager to try the experiment again, with greater differences in concentration (or a revised circuit, with greater sensitivity).

We tried a second time quickly before wrapping up:

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/158847988&amp;color=0066cc&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

At this point, we all agreed that we'd had an incredibly productive workshop session -- and that it all went so well because of all of the really great folks who showed up. 

## A big thank you!

A big *thank you* goes out to:

> [![rackspace.png](https://i.publiclab.org/system/images/photos/000/005/351/medium/rackspace.png)](http://rackspace.com)

and

> [![civiclogo.png](https://i.publiclab.org/system/images/photos/000/005/352/medium/civiclogo.png)](http://civic.mit.edu)

... and **everyone who came to the workshop**!

Thanks, folks -- you were all amazing! Let's gather together again soon ...

*Heather Craig and Don Blair co-organized the event; most of the above videos and pictures were taken by Heather, with the remaining taken by Craig Versek.*