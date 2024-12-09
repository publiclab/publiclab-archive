---
title: 'Video/Audio interface, Web page & Microcontroller'
tagnames: arduino, sensing
author: donblair
path: /notes/donblair/10-14-2012/videoaudio-interface-web-page-microcontroller.md
nid: 4407
uid: 43651

---

![](https://publiclab.org/sites/default/files/publiclabisrad.png)

# Video/Audio interface, Web page & Microcontroller

by [donblair](../profile/donblair) October 14, 2012 21:27

October 14, 2012 21:27 | Tags: [arduino](../tag/arduino), [sensing](../tag/sensing)

----

<strong>The dream:</strong> every smart phone, laptop, or desktop can analyze data from an external, microcontroller (Arduino)-based temperature, pressure, etc sensor -- inexpensive, powerful, ubiquitous scientific instruments!  <strong>The Problem:</strong> transmitting data between an external sensor (e.g., an Arduino + temperature sensor) and a computer or smart phone usually requires installing special software on the computer / smartphone that can communicate with the sensor, e.g. via a USB cable.  This is often inconvenient (various versions of the software are required, depending on the operating system, etc); and, in many important cases, impossible (many high school computing facilities do not allow software to be installed without permission). <strong> The Solution: </strong> -- audio and video!

Nearly every computer or laptop or smartphone now has an internet browser, and the most recent "modern" browsers are now capable of accessing webcams or audio ports on the the device.  This is how the PLOTS spectral workbench works, for example.  The aim is then to develop a browser-based recording, plotting, analysis, and uploading tool that can interpret data received via the audio jack or the webcam, and then record, plot, analyze, and save such data.  

I first heard of this idea at LEAFFEST, when Jeff Warren mentioned the idea of using blinking LEDs to calibrate the web-based PLOTS thermal flashlight tool.  Later, at Public Lab's Brooklyn laboratory, Leif mentioned efforts to use the audio communication idea. And Todd, a friend who teaches high school chemistry, has long bemoaned his inability to install software on student-accessible computers in his district.  This note is intended to get this idea out there in the PLOTS community & to get folks thinking about how this sort of interface might be put together ... the resultant device / software would be very useful! 


### Towards a solution ...

1. Audio
The least-expensive and most robust solution seems to be to transmit signals via the audio port.  E.g., and Arduino could create an audio signal on one of its output pins, and this signal could enter a computer or smart phone via an audio jack.  There are extant projects and products with designs for accomplishing this.  Some relevant links are listed below.

2. Video
This might be done by having an Arduino display a QR code pattern on an LCD, and having a webcam on a computer / smart phone interpret this signal.  One advantage would be that no cable is required.  But this is likely more expensive, and data transmission rates would likely be much slower than via audio.

### Annotated Links / Resources

#### Audio

-- An Arduino shield called a "<a href="http://www.elechouse.com/elechouse/index.php?main_page=product_info&cPath=90_92&products_id=2199
">SoftModem</a>" that provides an Arduino library + audio interface to iPhones and Android phones. 

-- A <a href="http://www.creativedistraction.com/demos/sensor-data-to-iphone-through-the-headphone-jack-using-arduino/">nice writeup</a>:  "Sensor data to iphone through the headphone jack using arduino".


-- <a href="https://github.com/NeoCat/FSK-Serial-Generator-in-JavaScript">Code</a> for generating FSK in Javascript -- compatible with the SoftModem Arduino library above.

-- Sparkfun: <a href="https://www.sparkfun.com/products/10331
">audio jack modem for android</a>.

-- The <a href="http://web.eecs.umich.edu/~prabal/projects/hijack/
">Hijack project</a> --  data and power from phone’s audio port. Hardware <a href="http://www.seeedstudio.com/wiki/index.php?title=Hijack#Introduction">for sale at SeeedStudio</a>.

-- <a href="http://www.arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1274970878">Relevant post</a> on an arduino forum.
 
-- Assorted other links:

http://code.google.com/p/arms22/downloads/list
http://sree.cc/electronics/arduino-as-an-fsk-modem
http://www.ohscope.com/2009/02/24/serial-port-on-iphone-with-minicom/
http://hcgilje.wordpress.com/2010/02/15/iphone-serial-communication/
http://redpark.com/c2db9.html

#### Video 

<strong>QR code method</strong>: Using an LCD driven by an Arduino-based sensor to display a QR code, which could then be read by any webcam on a laptop or smart phone.

-- A <a href="http://www.webqr.com/index.html">javascript / HTML5 implementation of a QR code reader</a>, with <a href="https://github.com/LazarSoft/jsqrcode">code</a>.

First steps:
-- Just generated a QR code <a href="http://www.webqr.com/create.html">here</a>, for the text:

{"tempC": 30.3,"pressATM": 1.01} 

which generated a 29 x 29 QR code.

Then I tried a "data packet" (I don't even know if these are well-formed JSON): 

{"packet": {"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 
1.1}, {"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 1.1}, 
{"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 1.1}, 
{"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 1.1}, 
{"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 1.1}, 
{"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 1.1}, 
{"tempC": 30.3, "pressATM": 1.1}, {"tempC": 30.3, "pressATM": 1.1}, } 

which generated a QR code that was under 80x80.

-- There's a <a href="http://www.adafruit.com/products/618">160x128 LCD on Adafruit for $10</a> (which might mean it's 
even cheaper to find them elsewhere if one knows where to look); 
-- and they've already assembled it into <a href="http://www.adafruit.com/products/358 ">a breakout board for $25</a>;
-- which has <a href="http://learn.adafruit.com/1-8-tft-display">a tutorial</a> for using it with an Arduino;
-- Next step:  one could quickly test the resolution limits and etc by displaying example QR codes on a laptop screen, then reading them from the laptop with one's phone camera into an HTML5 reader ...
-- <a href="http://www.qrstuff.com/blog/2011/11/23/qr-code-minimum-size ">Guidelines</a> for estimating the minimal QR code size for a given amount of data, as well as the maximum distance a typical smart phone can be at in order to read a given QR code size

<strong>Other (easier / better ?) methods</strong>:

-- Should also look into simply blinking an LED as a way of encoding data! 

-- Or: transmitting a binary string by turning a series of LEDs on / off simulataneously ...