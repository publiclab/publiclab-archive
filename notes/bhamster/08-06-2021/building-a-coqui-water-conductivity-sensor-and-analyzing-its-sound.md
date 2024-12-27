---
title: "Building a Coqui water conductivity sensor and analyzing its sound"

tagnames: 'water-quality, conductivity, coqui, sound, replication:18313, replication:16465'
author: bhamster
path: /notes/bhamster/08-06-2021/building-a-coqui-water-conductivity-sensor-and-analyzing-its-sound.md
nid: 27442
uid: 664477
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/044/579/original/Spectrogram_copy.png)

# Building a Coqui water conductivity sensor and analyzing its sound

by [bhamster](/profile/bhamster) | August 06, 2021 23:10

August 06, 2021 23:10 | Tags: [water-quality](/tag/water-quality), [conductivity](/tag/conductivity), [coqui](/tag/coqui), [sound](/tag/sound), [replication:18313](/tag/replication:18313), [replication:16465](/tag/replication:16465)

----

I just built the Coqui water conductivity sensor by following the steps in this activity: [Build a sound-generating Coqui conductivity sensor (new version!)](https://publiclab.org/notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor). It was really fun to put together and try out right away!

<br>

### Building the coqui

I didn't end up using the terminal block mentioned in the [parts list](https://publiclab.org/notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor#Parts+List). And the jumper wires I had were a bit long, so my build doesn't look as neat as the one in the instructions. But it's still super cute.

<img style="width: 70%; height: 70%" src="https://publiclab.org/i/44581.jpg" alt="assembled coqui sensor">

_<small>Assembled coqui water conductivity sensor.</small>_

<br>

### Testing the coqui

To try to get different sounds out of the coqui, I made a couple salt water solutions that hopefully varied in [conductivity](https://www.epa.gov/national-aquatic-resource-surveys/indicators-conductivity) (how well they conduct electric current). Using a handy silicone baby food tray, I made three test samples: 

- Plain cold tap water (2 tbs)
- Slightly salty water (0.1 g salt/ml = 0.5 tsp salt in 2 tbs cold water)
- More salty water (0.2 g salt/ml = 1 tsp salt in 2 tbs cold water)  


<img style="width: 60%; height: 60%" src="https://publiclab.org/i/44582.jpg" alt="test solutions">

_<small>Solutions with different concentrations of salt for testing the coqui.</small>_

  
When I dipped the probe wires into the different solutions, **I did notice a difference in the buzzing sounds produced by the plain water versus the two salt solutions!** 🔉🎉 The salt solutions sounded louder and higher pitched (higher frequency). I couldn't really tell the difference between the two salt solutions with just my ears, though.

<br> 
 
### Analyzing the coqui's sound

I wanted to analyze the sound further, so I followed the guidance in this neat activity by @imvec: [Analyzing the signal of the Coqui using Audacity](https://publiclab.org/notes/imvec/06-11-2018/analizing-the-signal-of-the-coqui-using-audacity). I recorded the coqui's sounds for each test solution with my laptop microphone, nothing fancy (though I did realize I should move my analog desk clock after seeing the ticks appear on the recording). I tried to keep the probe wires as still as possible. My frequency analysis plots ended up looking like this:

  
<img style="width: 60%; height: 60%" src="https://publiclab.org/i/44583.jpg" alt="Plain water frequency distribution">

_<small>Coqui's response to plain tap water. The horizontal axis shows sound frequency (pitch) and the vertical axis shows sound level (loudness).</small>_ 

<br>
  
<img style="width: 60%; height: 60%" src="https://publiclab.org/i/44585.jpg" alt="Slightly salty water frequency distribution">

_<small>Coqui's response to a 0.1 g/ml salt solution. The horizontal axis shows sound frequency (pitch) and the vertical axis shows sound level (loudness).</small>_  

<br>

<img style="width: 60%; height: 60%" src="https://publiclab.org/i/44586.jpg" alt="More salty water frequency distribution">

_<small>Coqui's response to a 0.2 g/ml salt solution. The horizontal axis shows sound frequency (pitch) and the vertical axis shows sound level (loudness).</small>_

<br>

Hard to tell major differences in the frequency histogram! (histogram = bar graph showing the distribution of frequencies along the horizontal axis.) There's a good bit of noise.   
  

The spectrogram (below) showing frequency versus time is interesting! Brighter colors indicate higher sound levels. Not entirely sure what to make of this. You can see where I was moving the coqui probes in the wiggly parts of the plain water spectrogram at the top.

  
<img style="width: 60%; height: 60%" src="https://publiclab.org/i/44587.jpg" alt="Spectrograms">

_<small>Spectrograms of sound signals produced by the coqui in different test solutions. Top = plain water, middle = 0.1 g/ml salt solution, bottom = 0.2 g/ml salt solution. The vertical axis is frequency (pitch) in hertz, the horizontal axis is time, and the brighter colors indicate sound level (loudness).</small>_ 

<br>
  
Listening to the recordings playing back from my desktop speakers, it was harder to tell a difference between test solutions. Maybe the laptop mic wasn't picking up signal differences very well? Or maybe my ears heard what they expected to hear when I originally tested the salt solutions? 🤷🏻‍♀️

I thought that distilling this down further and just calculating an average frequency for each test solution might help show differences (or lack thereof). I exported the frequency data from Audacity, which produced two columns of data: frequency in hertz (Hz) and level in decibels (dB). Then I calculated the average frequency for each solution's whole sound signal, weighted by signal amplitude. I got amplitude by converting decibel output back with 10^(dB/20). 

  
Average frequency weighted by amplitude:
  
+ Plain tap water: 5820 Hz
+ 0.1 g/ml salt solution: 5900 Hz
+ 0.2 g/ml salt solution: 6190 Hz

  
According to [this National Institutes of Health publication](https://www.ncbi.nlm.nih.gov/books/NBK20366/), the human ear is capable of noticing these differences in pitch.

  
The coqui build and recordings and analysis were all pretty fun to do. I'm hoping to keep experimenting with different solutions, and maybe a more controlled sound environment.