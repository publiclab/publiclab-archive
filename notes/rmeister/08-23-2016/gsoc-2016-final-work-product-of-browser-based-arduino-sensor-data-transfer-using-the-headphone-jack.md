---
nid: 13390
title: GSoC 2016: Final Work Product of Browser-based Arduino sensor data transfer using the headphone jack
path: public/static/notes/rmeister/08-23-2016/gsoc-2016-final-work-product-of-browser-based-arduino-sensor-data-transfer-using-the-headphone-jack.md
uid: 468994
tagnames: arduino,gsoc,barnstar:basic,gsoc-2016,webjack,headphone-jack,softmodem,response:13397
---

# GSoC 2016: Final Work Product of Browser-based Arduino sensor data transfer using the headphone jack

##Project Details 
__Project Title:__ Browser-based Arduino sensor data transfer using WebRTC and headphone jack

__Project Proposal:__ https://publiclab.org/notes/rmeister/03-24-2016/browser-based-arduino-sensor-data-transfer-using-webrtc-and-headphone-jack

__Abstract/Summary:__ The project allows web pages to access sensor data from Arduino via WebRTC and the common audio jack of smartphones.

__Organization mailing list:__ https://groups.google.com/forum/?hl=en#!forum/plots-dev

__GitHub Organization Page:__ publiclab

__Repositories Contributed to:__ [publiclab/webjack](https://github.com/publiclab/webjack), [publiclab/webjack-firmata](https://github.com/publiclab/webjack-firmata), [arms22/SoftModem](https://github.com/arms22/SoftModem)


##Code Links
__Links to all Commits:__

- https://github.com/publiclab/webjack/commits/master?author=rmeister
- https://github.com/publiclab/webjack-firmata/commits/master?author=rmeister 
- https://github.com/arms22/SoftModem/commits/master?author=rmeister
- https://github.com/rmeister/SoftModem/commits/attiny-support?author=rmeister

__Link to issues outside Publiclab's repositories:__ https://github.com/arms22/SoftModem/issues?utf8=%E2%9C%93&q=is%3Aissue%20author%3Armeister%20

##Research Notes
During the summer I've published four research notes on PublicLab's site:

- https://publiclab.org/notes/rmeister/06-10-2016/serial-communication-via-headphone-jack
- https://publiclab.org/notes/rmeister/07-11-2016/webjack-progress
- https://publiclab.org/notes/rmeister/07-18-2016/webjack-testers-needed
- https://publiclab.org/notes/rmeister/07-18-2016/webjack-test-without-arduino

For the WebJack-Firmata demo I published a screencast on YouTube:

https://www.youtube.com/watch?v=eWr3kahwo78

##Project Description

Within this GSoC project, WebJack and WebJack-Firmata were developed and documentation was contributed to SoftModem, an Arduino library that is the counterpart of WebJack. 

###WebJack
WebJack is a client side JavaScript library that enables webpages to communicate with Arduino/Genuino microcontrollers via audio signals and the headphone jack. Therefore, audio cables are the intended communication channel. But to some extend, wireless transmissions with speakers and microphones work as well. WebJack is available in NPM.

The API of WebJack consists of three methods: `send(data)`, `listen(handler)` and `validateJSON(data)`. 

The `send()` method expects data as parameter, encodes the data with Frequency-Shift-Keying and the SoftModem encoding scheme and finally plays the generated audio samples with the Web Audio API. Encoding is done in the encoder.js module, which is inspired by an existing [FSK generator](https://github.com/NeoCat/FSK-Serial-Generator-in-JavaScript). In case a device plays audio with a sampling rate different from 44.1kHz, that is the frequency SoftModem was designed for, a resampler module converts the generated signal to the right sampling rate.

The `listen()` method uses the Web Audio API as well, to capture audio data from the microphone. A webpage that executes WebJack will query the user to allow recording microphone input, unless the users denied capturing user media in general. The Web Audio API regularly delivers audio data in chunks. These are fed into the decoder.js module, where the received signal gets demodulated and in the following a finite state machine detects and evaluates transmissions. Successfully received data is passed over to the handler that is given to the `listen()` method.

In case data is transmitted as JSON, the helper method `validateJSON()` validates and returns received data as JavaScript object.

The API methods are implemented in the main module called 'webjack.js'. This module also handles all calls to the Web Audio API. In particular the module makes use of the [adapter.js](https://github.com/webrtc/adapter) shim for interoperability between browsers. WebJack has been tested with Chrome, Firefox and Opera. The Safari browser does not support the required Web Audio API method `getUserMedia()`, yet.

The repository for WebJack also features a decoder for SoftModem signals written in Matlab: 
https://github.com/publiclab/webjack/tree/master/matlab#softmodem-demodulator-and-decoder


The benefit of this script was to visualize the demodulation process and to quickly try out a different decoding method. Find a picture of the demodulation steps below.


[![figure_all.png](//i.publiclab.org/system/images/photos/000/017/741/large/figure_all.png)](//i.publiclab.org/system/images/photos/000/017/741/original/figure_all.png)



Providing a working demo of WebJack was an important point to reduce the barrier of installing WebJack and setting up an own project with it. Therefore, and as a proof of concept, a GitHub page was created:
https://publiclab.github.io/webjack/examples/

The demo allows to send arbitrary text and displays received data.

[![demo_webjack.png](//i.publiclab.org/system/images/photos/000/017/742/large/demo_webjack.png)](//i.publiclab.org/system/images/photos/000/017/742/original/demo_webjack.png)


During development, changing the decoder parameters can result in significantly different results. Furthermore, WebJack uses a physical, capacitively coupled link with varying characteristics for every device. Improved decoding quality on one device can mean decreased decoding quality on a different device. To overcome this, recordings of signals were taken from three different devices and used as data sources for automated tests. 
There are also loopback tests, with the encoder genereating a signal and the decoder reading the same signal. This way, all 256 combinations of bits can be tested efficiently. Logical decoding errors that are unrelated to physical parameters will be detected by this test. 

For testing [tape](https://github.com/substack/tape) is utilized in conjunction with [Sinon.JS](https://github.com/sinonjs/sinon). 


#### Known Issues and Future Work
A remaining issue that could not be solved is [crosstalk](https://en.wikipedia.org/wiki/Crosstalk). As a consequence of crosstalk between wires, the decoder instantly receives the signal sent by the encoder. For long cables the crosstalk virtually leads to loopback of sent data. However there are two countermeasures one can take: Making the cable as short as possible, or if this is not viable, enabling the echo cancellation feature of the Web Audio API. The latter is implemented in a special profile, which can be set in the constructor of WebJack.

One thing that is possibly worth implementing in future is forward error corrections. FSK is a digital modulation scheme, but huge parts of the transmission channel are in the analog domain and therefore error prone. Wireless transmission via speakers would profit even more from error corrections, because the noise level is higher there.


###WebJack-Firmata
Firmata is a RPC-like protocol for Arduino. It remotely gives access to many methods of the Arduino API. For example it lets a remote device control and query digital pins of the microcontroller via serial connection. Often a general purpose sketch is loaded to the Arduino, that only waits for commands, executes them and reports the answer back. This way the complete program logic can reside on the remote machine. An other use case is polling sensor data from the microcontroller. 

WebJack-Firmata implements a transport layer for the existing [Firmata.js](https://github.com/firmata/firmata.js) client. WebJack replaces the common serial connection and enables Firmata.js to run on webpages. The implementation is inspired by an ethernet transport layer from Rick Waldron.

Here is a gif of WebJack-Firmata's demo:


[![out.gif](//i.publiclab.org/system/images/photos/000/017/743/large/out.gif)](//i.publiclab.org/system/images/photos/000/017/743/original/out.gif)




The demo has five buttons for different commands, that I will describe beginning from the left:

The first button allows to __query capabilities__ of the Arduino or the loaded sketch respectively. This is usually not necessary and only implemented for debugging purposes.

The __Query Firmware__ button requests the used firmware version on the Arduino. At the first load of the webpage the request is executed automatically. The report is displayed in the 'Log' section of the demo.

With __digitalWrite__ one can set the output level of an arbitrary pin (except those used for WebJack/SoftModem itself).

A click on __analogRead__ instructs the Arduino to regularly read and report the value of an analog pin.

__Reset__ does not restart the microcontroller, but sets all received configurations back to default. In the demo application this can be used to stop the analog readings. 



###SoftModem
[SoftModem](https://github.com/arms22/SoftModem) is an Arduino library used as interface for WebJack. The library is used in its original form. For convenience and lowering the entry barrier in using the library, it was added to the Arduino Library Manager during the summer. Also its documentation is now improved.

SoftModem was developed and designed for the ATmega328p by Atto Arms. This is the microcontroller integrated in the Arduino Uno and several other Arduino boards. But many other microcontrollers are capable of generating FSK signals, too. Reading the datasheets of ATtiny85 and ATmega32U4 revealed that only a [few changes](https://github.com/rmeister/SoftModem/commit/0487d519aada11c9a50dd3aede8c7ef508a5d13f) are necessary to let the library compile and generate a proper signal. However, receiving data on those controllers is more complicated due to resource constraints. 