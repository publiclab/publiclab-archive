---
title: "Water quality voicemails: Vojo & Coqui"

tagnames: 'water-quality, coqui, voicemail, audio, vojo, activity:coqui-usage, activity:coqui-mods'
author: donblair
path: /notes/donblair/09-10-2014/water-quality-coqui-voicemails.md
nid: 11121
uid: 43651

cids: 10257,10259

---

![](https://publiclab.org/public/system/images/photos/000/006/710/original/coqui_thumb.jpg)

# Water quality voicemails: Vojo & Coqui

by [donblair](../../../profile/donblair) | September 10, 2014 22:06

September 10, 2014 22:06 | Tags: [water-quality](../tag/water-quality), [coqui](../tag/coqui), [voicemail](../tag/voicemail), [audio](../tag/audio), [vojo](../tag/vojo), [activity:coqui-usage](../tag/activity:coqui-usage), [activity:coqui-mods](../tag/activity:coqui-mods)

----

###What I want to do

What if anyone could use any phone -- 'smart' or otherwise -- to leave a 'water quality voicemail'? 

This is an idea that emerged out of a series of amazing discussions with:

- Catherine D'Ignazio
- Heather Craig
- Willow Brugh
- Lily Bui
- Gordon Mangum
- Jeff Warren
- Will Macfarlane
- Jo Guldi
- Zach Gates
- Katie Gradowski
- Brian Browne
- Mat Lippincott
- Jiansheng Feng
- Ben Gamari
- Craig Versek
- Seth Woodworth
- Lia Rudolph
- A bunch of other folks! (I'll try to come back here and edit them in as I recall them -- thanks everyone!)

There were two tools that sparked this idea:

### Tool #1: Coqu&iacute; --  audio-based sensor data

The [Coqui](http://pvos.org/coqui/) is an audio-based sensor being [developed by the Public Lab community](http://publiclab.org/notes/donblair/07-15-2014/recap-open-water-workshop-july-12-2014) that outputs a resistor-dependent audible frequency (where, e.g., 'water' can be one of the resistors).  The idea behind the Coqui is that audio frequency is a particularly intuitive way of interpreting a sensor signal:  for example, when the conductivity is high, the frquency goes up:

<iframe width="560" height="315" src="//www.youtube.com/embed/LHQe74oW2ig?list=UUmmEmOGni0fzzDsXiZEVWNw" frameborder="0" allowfullscreen></iframe>

It's really just a very simple circuit to breadboard, with a few, inexpensive components:

[![IMG_0680.JPG](https://i.publiclab.org/system/images/photos/000/006/722/medium/IMG_0680.JPG)](https://i.publiclab.org/system/images/photos/000/006/722/original/IMG_0680.JPG)

The round, black object on the board is just a piezo buzzer -- that's how we're generating audio tones.  Off-camera are a set of probes that go into the water, as well as a battery.  Here's an earlier version of the schematic that used an LED instead of a buzzer:


[![555conductivity-nocap_bb-aug12.png](https://i.publiclab.org/system/images/photos/000/006/723/medium/555conductivity-nocap_bb-aug12.png)](https://i.publiclab.org/system/images/photos/000/006/723/original/555conductivity-nocap_bb-aug12.png)


We've been imagining turning this into a 'kit' -- both a breadboard-able version, and a small, inexpensive circuit board that could be attached to a phone or laptop -- and include an option to simply generate audio tones on a piezo buzzer, so that people can 'hear their water quality' directly.

### Tool #2:  Vojo -- gathering narratives easily over voicemail and SMS

[Vojo](http://vojo.co/en/content/about) is a voicemail / SMS system developed by folks at the [Center for Civic Media](https://civic.mit.edu/) that allows anyone to create a 'story group' with a unique phone # and extension.  Users can call in and leave voicemails, and these mp3s can then be downloaded via a web interface. Because the system is voice / text-based and can be used via 'dumb phones', it's a great way of allowing a lot of people all over the world to contribute their voices to a project, like a survey, or a community history -- any project that hopes to collect responses and 'stories' from a wide range of people.  


[![logo-full.png](https://i.publiclab.org/system/images/photos/000/006/724/medium/logo-full.png)](https://i.publiclab.org/system/images/photos/000/006/724/original/logo-full.png)


For example, check out this project to collect narratives from people affected by Hurricane Sandy:

<a href="http://www.sandystoryline.com/"><img src="https://i.publiclab.org/system/images/photos/000/006/721/medium/SSL_Logo6.png" width=200></a>



### MASHUP!

What got several of us excited was the idea of combining a Coqui (sensor data via audio) with Vojo (a nice system for collecting audio data):

> A mashup of inexpensive, audio-based water quality sensors with ubiquitous telephony infrastructure might allow anyone with a phone to record 'water quality voicemails' which could then be analyzed to discern regional differences in water quality parameters.  This might really serve to democratize the exchange of data among communities concerned about their local water quality.

Imagine:  folks could 'phone in' their sensor data, and perhaps add additional metadata (geolocation, local observations, etc) via touch tone responses.  This data could then be aggregated and analyzed through some simple audio processing techniques to build up a map-like picture of e.g. water quality in a region.  **Neat!**

The following results are the combined efforts of a bunch of folks putting a ton of brain cycles into figuring out such an idea could work ...

### My attempts and results

#### Attempt #1: FAIL

The first iteration of the Coqui simply outputs a constant tone that is related to the conductivity of the water being sampled.  We set up a Vojo account (very easy), set up a story group, got our phone number, set up our Coqui conductivity probe, and gave it a shot -- 

<iframe width="30%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167149194&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

Nothing went through!  Maybe we hadn't set up Vojo correctly?  We tried again, recording a voice message ...

<iframe width="30%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167149189&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

... and this worked very nicely.  So, what went wrong with the coqui attempt?

Our first thought:  the phone system doesn't like high-pitched noises.  In fact, there are probably all sorts of sophisticated algorithms in place for filtering out such noise. Oh dear.  How are we going to get the system to allow in our water quality signal?

We looked up the standard for the phone system.  It allows only in a select band of frequencies.  So we chose resistors and capacitors for the coqui to get us in the appropriate range, as a test.  This got us somewhere -- we could hear the tone in the background -- but it still seemed to cut out a lot:

<iframe width="30%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167151087&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

So then we thought -- the phone system is probably using some sophisticated algorithm to identify audio that sounds like a 'voice' -- variable pitches and onsets -- and filter out constant whines / hums.  When we hear the coqui signal come through in that last clip (which really sounded like a constant tone to us in the room), it's probably making it through only when we move the phone a little closer / further away from the coqui speaker, so that the frequency / volume changes enough for the algorithm to think 'I'd better capture this, it might be a voice'.  Hmm.  Not very satisfactory ...

How can we make the signal sound more like a voice, and trick the (ubiquitous!) phone infrastructure into thinking that the coqui is someone speaking, and thus let it through?  Mat had an idea:  use an additional 555 timer to turn the coqui on and off repeatedly.  It will still be transmitting at a frequency that is dependent on the conductivity -- but the signal will come through as a series of 'beeps'.  

#### Attempt #2: LESS FAIL


[![IMG_0681.JPG](https://i.publiclab.org/system/images/photos/000/006/725/medium/IMG_0681.JPG)](https://i.publiclab.org/system/images/photos/000/006/725/original/IMG_0681.JPG)


We set up the circuit, and gave it a shot.   By the way -- @mathew, I finally tried your 'audio jack probe' idea -- and it seems to work really well!

[![IMG_0678.JPG](https://i.publiclab.org/system/images/photos/000/006/726/medium/IMG_0678.JPG)](https://i.publiclab.org/system/images/photos/000/006/726/original/IMG_0678.JPG)


[![IMG_0677.JPG](https://i.publiclab.org/system/images/photos/000/006/727/medium/IMG_0677.JPG)](https://i.publiclab.org/system/images/photos/000/006/727/original/IMG_0677.JPG)

**What happened:**  You can sort of tell the transition from constant tone (doesn't come through well) to discrete 'beeps' (comes through nicely!):

<iframe width="30%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167149190&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

Woohoo!  That's definitely something we could analyze in an audio program afterwards and pull out the frequency; so we can get coqui signals over the voicemail system!

#### Attempt #3: LOUD SUCCESS!

We set it up again, and made sure the phone mic was right up against (too close to?) the coqui speaker (WARNING: it's a little loud :)):

<iframe width="30%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167149192&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

Okay, that's nice and clear!  If we place the coqui inside an enclosure (a cardboard box say), we could come up with a 'standard distance' that one should place a phone mic away from the speaker, for best results.  We could even have a place *inside* the box for the dumb phone to rest, to protect it from outside noises while recording.  COOL.

#### Attempt #4: WATER QUALITY DJ

It's also pretty fun to play with dipping the coqui probe into a conductive liquid and fiddle around with the electrodes right on the surface of the liquid (skip to about 0:16): 

<iframe width="30%" height="150" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167151086&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

This is somewhat reminiscent of another popular artist online:

Anyway, now we're on our way!  A next step is to come up with a nice method for calibrating various coqui probes ... and we've got some fun ideas around how to do that ... stay tuned!

###Questions and next steps

- Should we make a standard coqui conductivity probe, to avoid having to do too much calibration on the user end?

- What's the best way to analyze the audio that goes through this voicemail system?

- It seems that piezo and other speakers are going to generate different frequency profiles.  What's the best speaker for optimizing voicemail signals?

- One issue is that the frequency range in which it's best to measure conductivity (> 10 kHz) might put us outside the desirable sampling range in the phone system (which maxes out around 3 kHz).  So we're going to look into cheap chips that can reduce frequencies ('digital counters'), to place them on the board.  

- What about a microphone cable that connects directly into a smartphone .... ?

- Are there some clever additional ways of encoding information -- in the duration / frequency of the beeps, say?

- Could we encode geolocation by asking folks to use the touch tone pad to enter in a code -- an index to a location (which we publish online), lat / lon, zipcode, etc?  

- Conductivity will be affected by temperature.  Users could be provided with a cheap thermometer, and punch in the thermometer value via touch tone at the end of the message ... or perhaps a thermistor could control the frequency of the beep, so that temperature was encoded as the beep frequency (separate from the frequency of each beep ... if you see what I mean).

- Add more ideas / questions in the comments!

###Why I'm interested

The Coqui is a simple system for measuring environmental parameters, and outputs and intuitive audio signal.  Vojo is a simple system for recording and sharing voicemails from folks in the field.  Combining these ideas would allow anyone with a phone (smart or 'dumb') to send in water quality data!