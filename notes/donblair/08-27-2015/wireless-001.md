---
title: "Wireless 001"\ntagnames: 'wireless, open-water, radio'
author: donblair
path: /notes/donblair/08-27-2015/wireless-001.md
nid: 12175
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/011/297/original/wireless.png)

# Wireless 001

by [donblair](../profile/donblair) | August 27, 2015 18:53

August 27, 2015 18:53 | Tags: [wireless](../tag/wireless), [open-water](../tag/open-water), [radio](../tag/radio)

----

[header image from dev.physicslab.org]

## Background

A first pass on notes re: various options for broadcasting data from point to point.

The goal here is to have hardware that allows for reliable transmission of data over a distance without requiring actual cables between devices, in particular for wireless monitoring of environmental parameters.

There is a wide array of hardware approaches; we'll often use 'radio' to refer to any hardware that accomplishes wireless transmission.  Different radios are able to transmit different differences reliably for a given amount of energy (depending on the radio wavelength, and the specifics of the radio design); so energy considerations come in quickly if e.g. we're running the device off a battery. A basic list of considerations might then be:

- How far do we need to transmit? (what range should the radio have)
- Are we using a battery, or are we connected to the electrical grid? (what are the energy resources available)

If, for example, we're hoping to put a wireless node out in a field where there is no power line, and want to send information back to a base station that is 1 kilometer away, all for under $100, we'll select a radio that has at least a 1 km range when given sufficient power; and then, when we figure out what size battery + solar panel we can buy with our remaining budget, we'll have to figure out how often we can broadcast data without completely sapping the batteries before they can be recharged by the sun.

In other words -- there's some figuring involved!

So, let's take a first pass at this problem, using a particular example:  sending water parameter data from a field site to a base station.  

Here are some low-cost radios that are easy to source:

- Cell modem: Adafruit FONA (SIM800)
- 433 MHz: Moteino (RFM69)
- Bluetooth (BLE): Bluefruit (Bluetooth BLE)
- Wifi: Adafruit Wifi Module (CC3000) 

Here are some of the characteristics / pros / cons of each.

### Cell modem  

A good example of this sort of technology is the [Adafruit FONA](http://www.adafruit.com/products/1963?gclid=Cj0KEQjw6vquBRCow62uo-_J_YYBEiQAMO6HimQOlkuzxVL-0okhQbUoONyUpwh6gntl6Kk8GkTCLVEaAn088P8HAQ) - $45 (+ $5 for antenna + $10 for sim card + $10 for battery). 

This device requires a microcontroller (Arduino or equivalent) in order to work.  The libraries provided by Adafruit make it very easy to send an SMS (or make a phone call!).  Getting data online and into a database when using SMS will require some intermediary, like Twilio.com, which allows for sending SMS-es to a phone number and then triggering an HTTP POST or GET command via their server software.  It appears possible to do an HTTP POST or GET directly from the FONA, but I haven't yet figured out how to do this reliably.  

**Connectivity**. he connectivity of a cell modem requires cell service; the FONA operates on a 2G network, and connectivity will be a function of which SIM card is used.  

**Power**. We haven't yet worked out the power requirements for the FONA; but early tests indicate that it should be possible to send an SMS every 15 minutes fora month on a 2200 mAH battery if one turns the device off when it's not sending (will post code for doing this with an Arduino in a subsequent post).

**Cost**.  Note that in addition to the hardware, one must pay the data / SMS fees associated with the SIM card plan.

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/wireless_001/assets/fona.png" width=300>

### 433 MHz / RFM69

- RFM69 - $5 on EBay or equiv 

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/wireless_001/assets/rfm69.jpg" width=300>

This nice little radio has become popular in the Arduino world, recently; it is an update of the RFM12 hardware.  Options include 433 and 915 MHz bands (restrictions apply on using one or the other of these bands, depending on the country you're in).  

The radio requires a microcontroller in order to be used, and connects via the 'SPI' interface (a certain subset of microcontroller pins).   

**Connectivity**. The nice thing about this device is that it allows for point-to-point transmission for very little money, in a way that doesn't depend on any other infrastructure -- no cell tower network, no wifi router / ethernet.  The range is about 50 meters for the low-power version; with the higher-power verison and a special attenna, some users have been able to achieve ranges of 1 km or more. My impression is that Bluetooth connections are a bit finicky to get right; people have trouble pairing their devices in a consistent manner.  But I haven't yet tried it, so no personal experience to report. 

**Power**. Details regarding power will depend on whether one is using hte 'high power' or 'low power' version, and how long one broadcasts; but in gneneral, this device would be in the 'low power radio' category.

**Cost**. Inexpensive!  $5 for the radio itself.  That said, one will need a breakout board or equivalent in order to use it.  An example of a project that combines an Arduino clone and this radio is the 'Moteino' project -- [Moteino](http://lowpowerlab.com/moteino/) - $20 -- check it out!

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/wireless_001/assets/moteino.png" width=300>

### Bluetooth

I haven't yet played with Bluetooth; but for short-range (10 meters?) point-to-point connection, low power, and the ability to interface with computers (laptops, smart phones), it seems like a very useful option.  Two pieces of hardware looks promising:

- [nRF8001 Bluetooth LE breakout](http://www.adafruit.com/products/1697) -- $23 

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/wireless_001/assets/nrf8001.png" width=300>

- [Bluefruit](http://www.adafruit.com/product/1588) -- $23 

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/wireless_001/assets/bluefruit.png" width=300>

Both of these require the addition of a microcontroller or other device.  

**Connectivity**.  Point-to-point *and* node-to-laptop or node-to-computer.  Range is typically 10 meters or less (though I've heard that folks are getting longer ranges out of BLE than this).

**Power**.  Haven't yet looked into details, but on the 'low power' side of things.

**Cost**.  About equivalent to adding a cell modem or a wifi device. 


### WIFI

Wifi is an attractive connectivity technology, as many urban areas and homes are already connected.  An example piece of hardware is the following breakout board (for use with a microcontroller):

- [Adafruit WIFI module (CC3000-based)](http://www.adafruit.com/product/1469) - $35

<img src="https://raw.githubusercontent.com/OpenWaterProject/ow-lab-notebook/master/wireless_001/assets/cc3000.png" width=300 >

**Connectivity**. Good, in a sense; in my experience, most devices have ended up being hard to keep connected in a reliable way.  This might just point to writing more sophisticated software that resets the hardware after a failed / dropped connection.  This is easier with a full operating system, like that found on the Raspberry Pi in the [OPK project](http://publiclab.org/wiki/open-pipe-kit).  

**Power**.  WIFI tends to be on the 'high power' side for WIFI. No hard statistics, but it's a more complex protocol than that used for the RFM69, say. 

**Cost**.  Modules seem to average about $35 -- but there is now a lower-cost chip that has started to become popular in the Arduino world, the ['ESP8266'](https://www.adafruit.com/products/2282)
