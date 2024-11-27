---
nid: 16427
title: Updating the WheeTrometer: Code for running the CCD.
path: public/static/notes/JSummers/06-03-2018/updating-the-wheetrometer-code-for-running-the-ccd.md
uid: 304279
tagnames: spectrometer,spectroscopy,wheetrometer
---

# Updating the WheeTrometer: Code for running the CCD.

[](/tag/GOAL)

# [GOAL](/tag/GOAL):

This research note is about driving a photodiode array (also called a charge capture device, or CCD) with the goal of developing an open-source spectrometer for science education. We hope to update the design of Ben Hickman's spectrometer, the WheeTrometer. Right now we are making pretty good progress and hope to have a pretty simple to use CCD / microcontroller / user interface before too long. One issue with the WheeTrometer is that the specified light sensor is no longer available. To address this, we are looking into the Toshiba TCD1304 charge capture device (CCD). This CCD is available from Mouser for about $25 ([https://www.mouser.com/\_/?Keyword=TCD1304DG(8Z%2CAW)](https://www.mouser.com/_/?Keyword=TCD1304DG(8Z%2CAW))) and is used in spectrometers sold by a number of commercial sources, including Thor Labs, Ocean Optics, BWSpec and StellarNet.

[](/tag/SOME)

# [SOME](/tag/SOME) BACKGROUND:

Information on the TCD1304 is surprisingly hard to to get. The data on the Toshiba web site is total crap. The only way we have made progress is by following a series of posts by a guy named Esben Rossel who was able to get this running himself. The posts are found [here](https://tcd1304.wordpress.com/).  I thought Esben also published stuff under the name Flat Cat or Fl@C@, but apparently that is not him. Esben provides a link to the datasheet [here](https://tcd1304.wordpress.com/timing-requirements/). While it would be tempting to just copy Esben's work, he is running a Linux environment and uses a microcontroller that we are unfamiliar with (STM32F401RE nucleo). Since we run Windows and are more familiar with the TI products (specifically, the Tiva C LaunchPad, sold [here](https://www.mouser.com/ProductDetail/Texas-Instruments/EK-TM4C123GXL?qs=TB/Q0sBK/GefKGr%252bQsiJWQ==&gclid=CjwKCAjwo87YBRBgEiwAI1Lkqba0EhX9NS-EthwKZ6beYh0zDMiqWHigp8tgwe3DA67CN0yKR41o1RoC32cQAvD_BwE) for $13), we decided to go in that direction. I know that people will ask about doing this with Arduino. It has been a while since I worked in Arduino and even then I never got that involved in it. The upshot is that I don't know, but I doubt it would be possible to implement this stuff in the Arduino IDE. If you can't use the IDE, I don't see the point of using Arduino. If you still want to pursue this in Arduino, I recommend starting with the Due, not the Uno. Both the Due and the TI product have clock speed working for them. The CCD requires a pretty accurate clock running at between 0.8 and 2.4 MHz. Signals at two other pins (ICG and SH) must be synchronized with the clock at the start and finish of an acquisition. Timing requirements are described in the data sheet provided by Esben. While it may be possible to run the clock from the 16 MHz Uno, I think you will have trouble. The next question is ADC resolution. The TI product and the Due both have 12 bit ADCs. The TI ADC can acquire at 1 M samples per second. I have not seen the sample rate for the Due.

Anyway, ... This post introduces the goals of project and documents what we have learned about the firmware requirements so far. Until recently, my experience coding the microcontroller has been limited to the Energia IDE, which is very similar to the Arduino IDE. After it became apparent that this IDE would not allow us to control the microcontroller timing with sufficient timescale accuracy, we began learning the TI IDE (Code Composer Studio, available [here](http://processors.wiki.ti.com/index.php/Download_CCS) for free). Mostly we followed the Tiva workshop [labs](http://processors.wiki.ti.com/index.php?title=Getting_Started_with_the_TIVA%E2%84%A2_C_Series_TM4C123G_LaunchPad&DCMP=tivac&HQS=TM4C123G-Launchpad-Workshop). Code Composer Studio is a C based thing that is not intuitive if you don't know C, but allows pretty refined control.

# SOME THINGS THAT DON'T WORK:

We initially tried to run the clock using timer based interrupts, but the interrupts introduce unacceptable delays. We also tried toggling pins high and low with delays between. This also failed
due to delays in the implementation.

# WHAT DOES WORK:

I got on a TI online forum and described the issues we were having. The first guy responding suggested we use the PWM
module to generate the clock, ICG and SH signals. That, it turns out,
is a much better way of doing things. To establish the 1 MHz clock for
the CCD, we set up the system clock at
80 MHz, the pwm clock at 10 MHz, set the PWM period at 10 clock cycles
(1 microsecond) and set the duty cycle to 5 (half the clock period). We
initially tried running the ICG and SH signals off of the pwm as well
and that almost works. The problem with this approach is that all of the
pwm generators share a clock and the pwm counter has a finite maximum
period. It just covers too much space to have a clock with 100 ns
resolution count up to tens of ms.  
The next problem was to get the ICG signal synchronized with the CCD
clock. We were unable to get this to work by just triggering the
spectrometer after the delay. We were able to get around this by introducing a pwm based interrupt that increments a clock counter. When the clock counter hits a specified value, an initiation method is run that triggers the ICG and SH pulses. The initiation method has delays incorporated that align the initiation pulses with the clock pulses and constrain the total run time for the initiation sequence to be an integer multiple of the clock period. Since the initiation method is triggered by the pwm based interrupt, it is possible to keep the ICG and SH pulses synchronized with the CCD clock.  
The figure below shows the output from the CCD read pin in the lower (blue) trace and the SH pulse on the upper (yellow) trace as read by my oscilloscope. For most of the output in this figure, the pixels are showing saturation behavior. ![image description](/i/25084.jpg "output4.jpg")

# WHERE CAN I GET THE CODE?

The initial code can be found in a folder titled ccd-test1 at our GitHub page ([https://github.com/SmokyMountainScientific/WheeTrometer](https://github.com/SmokyMountainScientific/WheeTrometer)). You probably don't want the code yet but it is there if you do.

# WHAT HAS YET TO BE DONE?

Well, first there is the issue of the ADC timing. Calling an analog to digital conversion in the software code introduces a time delay of several hundred nanoseconds and that is just not going to work. The documentation on the microcontroller says that you can trigger ADC on a timer, so that is probably the way to do it. There are also issues like (second) communicating with a host computer to write parameters to the microcontroller, (third) getting the data to the host computer and (fourth) writing the user interface code. It is also likely that we will want to (fifth) add an amplifier to the board. I think we have a pretty good start on most of these issues, but it will take a little time to get it all working.