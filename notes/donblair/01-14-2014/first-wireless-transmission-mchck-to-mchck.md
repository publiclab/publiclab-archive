---
nid: 9940
title: First wireless transmission, mchck to mchck!
path: public/static/notes/donblair/01-14-2014/first-wireless-transmission-mchck-to-mchck.md
uid: 43651
tagnames: temperature,wireless,pvos,water-quality,water-monitoring,water-quality-sensor,ioby,mystic-river,mchck
---

# First wireless transmission, mchck to mchck!

###What I want to do

As part of our [IOBY crowdfunding campaign to develop a DIY water quality sensor](https://ioby.org/project/mystic-river-open-water), we wanted to get two mchck.org microcontroller boards to talk to one another via cheap Nordic radios (~$2 ea on Ebay), in order to prototype wireless transmission of data from one water quality probe to another, or from one water quality probe to a home base / laptop.

[![nordic.JPG](https://i.publiclab.org/system/images/photos/000/002/539/medium/nordic.JPG)](https://i.publiclab.org/system/images/photos/000/002/539/original/nordic.JPG)


###My attempt and results

#### Sensor node design
Here's the current basic setup (including aspects of the sensor that have nothing to do with wireless communication):

The design isn't quite finished, and there a few things we might be able to do to optimize costs, but:

The design is for a water probe that will measure temperature, conductivity, and water depth (pressure), and can transmit data wirelessly.  

- The radio we're using is one that is rated to 1 km, and has been used in many Arduino projects out there (so there's some nice code out there):  we grabbed a pair for [$7 each on Ebay](http://www.ebay.com/itm/NRF24L01-Wireless-Transceiver-Module-2-4G-SMA-Antenna-/121252231568).

- The microcontroller board is a DIY ARM board that costs $7 in parts (not available to buy yet, but the schematics and how-tos are all available here: http://mchck.org). 

- The battery will likely consist of 3 AA batteries -- maybe $10 for some nice ones?

- The temperature and conductivity sensors will probably cost under $10, more like $5, in parts.

- The pressure sensor we're thinking of using is a waterproof sensor that can be found for $20 on [alibaba](http://www.alibaba.com/showroom/ms5803-05ba-.html).

- The enclosure is going to be made of PVC parts, and probably costs < $10 in parts at the hardware store.

So, unless I'm missing something -- around $70-$80 in parts for the whole thing?  This is cool, because the comparable commercial sensors that do all of this (without wireless communication, and generated encrypted data files that require yet more software) typically run around $1500 - $2000.

There are several contexts in which e.g. only temperature and conductivity would be of interest, I believe, and wireless transmission wouldn't be necessary -- bringing the cost down ...

#### Wireless test

Ben Gamari wrote the code; we plugged in one mchck to his laptop, and the other into my laptop (just to power it) -- and I walked outside in the cold over 20 meters away. The data being transmitted was "(time, core temperature)", and although we lost some packets when I walked out of range, we were able to track the rapid decrease in temperature as I walked outside:

[![wireless1.png](https://i.publiclab.org/system/images/photos/000/002/531/medium/wireless1.png)](https://i.publiclab.org/system/images/photos/000/002/531/original/wireless1.png)

This was using the cheaper Nordic radio, which has a built-in antenna rated at '100 meters'.

(I'm research note blogging this 'live' -- we're about to try the longer-range radio ... will update in a moment ... )

UPDATE:

With one device using the 'internal' antenna, and one device using the 'external' antenna, we got around .3 km line-of-sight before my laptop battery died.  WOOHOO!

Here's a video (click on the image to launch the Youtube video, or you can also find it [here](https://www.youtube.com/watch?v=2MIirzCrK9U)):

[![wirelessLaptop3.png](https://i.publiclab.org/system/images/photos/000/002/537/medium/wirelessLaptop3.png)](https://www.youtube.com/watch?v=2MIirzCrK9U)

###Questions and next steps

Next experiment will be be with two 'external' antennae, and a fully-charged battery ...

For an overview of the project, go [here](http://publiclab.org/wiki/mystic-river).

