---
title: "An accessible browser-based decoder for NOAA images"

tagnames: 'seeks:replications, open-weather, activity:open-weather'
author: sashae
path: /notes/sashae/05-03-2022/an-accessible-browser-based-decoder-for-noaa-images.md
nid: 30701
uid: 693684
cids: 30168,30169,30173,30174,30175,30178,30348,30349,30350,30570,30571,30675,30677,30679,30680,30681,30689,30692,30705,30706,31036,31388
---

![](https://publiclab.org/public/system/images/photos/000/046/908/original/137.912_2022-07-16_11-44-21_-_Olga_Mie%CC%A8kus.png)

# An accessible browser-based decoder for NOAA images

by [sashae](/profile/sashae) | May 03, 2022 14:04

May 03, 2022 14:04 | Tags: [seeks:replications](/tag/seeks:replications), [open-weather](/tag/open-weather), [activity:open-weather](/tag/activity:open-weather)

----

<div class="alert alert-block alert-danger">
**Research note in progress**
This is the first draft of a set of observations and documentation about decoding, demodulating and processing NOAA satellite images that resulted in a new browser based decoder called open-weather apt. You can access the decoder at: https://apt.open-weather.community/
Last edited 18th July 2022
</div>

# Introduction

NOAA satellites sense earth's surface using six visible light and infrared sensors. The data from these sensors is combined to produce images.

The satellites encode or [modulate][1] image data into a 2400 Hz signal. This signal is transmitted to earth via a radio wave between 137 and 138 MHz depending upon which NOAA satellite is received. The format of the transmitted signal is called Automatic Picture Transmission (APT).

Using an antenna and software defined radio, you can record the signal transmitted by a NOAA satellite. See this [DIY Satellite Ground Station guide](https://publiclab.org/notes/sashae/06-26-2020/diy-satellite-ground-station) for an accessible set of instructions. Your recording, in the form of a WAV file, can be decoded into an image using different methods.

Absolute Value, Cosine and Hilbert/FFT are three methods for decoding or [demodulating][2] the WAV file into an image. They operate in slightly different ways, and so will produce different images. Histogram Equalisation increases the contrast of the image.

open-weather apt emerged from a desire to understand the process of decoding APT audio recordings into NOAA satellite images, and a need for an accessible online decoder for new practitioners during open-weather [DIY Satellite Ground Station workshops][3]. 

open-weather apt is forked from Thatcher's [APT 3000](https://jthatch.com/APT3000/APT3000.html). It is a collaboration between [open-weather](https://open-weather.community/), Bill Liles NQ6Z and [Grayson Earle](https://graysonearle.com/).

# How does a sound become an image?

Recording a NOAA satellite signal using software defined radio produces an audio file. How does this audio file translate into an image?

Let's first take a look at the format of APT transmission: what are NOAA satellites sending to earth? ![image description](/i/46911.png "Format_APT_data.png")

APT Transmission Format. Source: NOAA Users Guide

The APT format includes:

- two channels of visual data, A and B
- two sync signals: sync A and sync B
- telemetry data
- space data/ minute markers

One line of information in the APT format (including sync signals, telemetry, space data and channel A/B images) takes 0.5 seconds. This means two full lines of data are transmitted per second.

<div class="alert alert-block alert-info">
:ear: How does a NOAA signal sound? Does it have a rhythm or a tone? Can you distinguish any repeated elements or a structure? Here is a sample: https://dropbox.com/s/xif376sqn09bps9/20210720111842.wav Take a moment to have a listen.
</div>

After listening, you may observe that there is a clear rhythm in the audio. There is a characteristic 'tick tock' at regular intervals. There is also a high pitched 'ring' or tone that sounds a lot like [this](https://www.youtube.com/watch?v=Vy26npVAxl4).

What are you hearing? The audio file contains three important frequencies: 2400 Hz, 1040 Hz and 832 Hz. These frequencies correspond to specific parts of the APT format. All other frequencies in the audio file are noise caused by your radio environment, your ground station setup or your body. Here are the uses of the three frequencies:

- 2400 Hz - pixel values (in grayscale) for channel A and B images
- 1040 Hz - channel A sync signal
- 832 Hz - channel B sync signal

We can visualise these frequencies to get a better understanding of how they carry data. The image below shows the APT signal in a section of an audio recording. (Note: an absolute value function has been applied so that we are only seeing positive values of the signal. A wave normally includes positive and negative values). 

The APT signal is represented by the blue line. The x axis is samples of data. The units of the y axis depend on the programme used to visualise the signal. From 34000 to 34600 samples on the x axis, the 'level' or amplitude of the signal changes, yet the frequency remains the same. The different amplitudes can be mapped onto pixel values in grayscale, where black corresponds to a very low value (e.g. 0) and white is a high value. 

However, it is not as easy as mapping every value of a wave amplitude onto a pixel value. Depending on the sample rate in which the audio file was recorded, there will be a different number of samples per second. Common audio sample rates are 48000, 44100 and 11025 samples per second. 

Yet the APT diagram tells us that the satellite sends only 909 'words' in one line of Channel A, and 909 'words' in one line of Channel B. For NOAA, 'words' means units of information, or pixels. This means that there are only 909 pixels in each line of Channel A and Channel B respectively. One whole line of data, including telemetry, syncs and space data, has 2080 pixels. To determine what the values of these pixels are, it is necessary to downsample the audio file from its original sample rate. open-weather apt accepts audio files at 11025 samples / second, and downsamples this information to 4160 samples per second (2080 pixels per line in 0.5 seconds x 2 = 4160 pixels per second). 

After 34600 samples on the x axis, the frequency and amplitude changes: there are seven distinct spikes in the blue line. These seven spikes are the channel A sync signal. This signifies the start of a new line of data in the APT format.

![image description](/i/46905.png "apt_expaned_demod.png")

Visualisation of an APT signal. Source: Bill Liles

The clarity of the satellite image is partly dependent on signal strength. As signal strength decreases, the image quality decreases because it becomes more difficult to distinguish the 2400 Hz amplitude levels to determine the pixel values. When the signal is weaker, the signal to noise ratio is also worse, so determining the correct amplitude might be impossible or not consistent. Also, a weak signal or a noisy file can result in a missed channel A sync signal which may produce a slanted image like this:

![image description](/i/46909.jpg "Noel_no_sync_scan_44000_samples_no_1.jpg")

Raw satellite image with a missed first sync. Source: Floren Noel via open-weather apt

open-weather apt was designed with first-time satellite signal decoders in mind. Unlike other satellite signal decoders that do not specify where they search for the first 'sync' in the audio file, open-weather apt allows you to modify the number of seconds in which the programme searches for the first sync. This means that the programme can more easily find the first sync even when the beginning of the audio file is very noisy.  

# Demodulation Methods

There are several different ways to demodulate the APT signal into an image. The diagram below represents these methods.

The green line is the message signal (we can think of it as the original data transmitted by the satellite). The red line is the carrier signal, and the purple line shows the modulated signal (where the carrier signal has been modulated by the message signal). The demodulation process should retrieve something that is as close to the original message signal as possible.

The three bottom purple lines show the signal demodulated using ABS (Absolute Value); the signal demodulated using the Hilbert FFT method; and finally, the signal demodulated using the law of Cosines.

:mag\_right: Which method do you think is the most precise?

![image description](/i/46906.png "AM_different_demods.png")

Comparing AM demodulation methods. Source: Bill Liles

## Absolute Value

This is the simplest and quickest way to decode an audio recording of an APT signal into an image. 

A wave, for example a 2400 Hz sine wave, has negative and positive values. If we take the absolute value of all the points in the wave, we end up with only positive values in a time series. After applying a downsampler, we can derive the data for the 'words' or pixels in the NOAA satellite image. 

## Hilbert FFT

This is the most processing-heavy, but most precise, way to decode an audio recording of an APT signal into an image. 

We have a time series of samples. First, we turn that time series into what are known as [I/Q signals][4]. 

<div class="alert alert-block alert-info">
What are I/Q signals? A sine wave can be decomposed into, or synthesized from, two amplitude-modulated sinusoids that are offset in phase by one-quarter cycle (90 degrees or π/2 radians). These are In-phase or Quadrature Components (I/Q signals): https://en.wikipedia.org/wiki/In-phase_and_quadrature_components
</div>

There are two ways to do this. One is to use a FIR ([Finite Impulse Response filter][5]) with a specific set of coefficients known as a Hilbert Transform. This filter produces the Q time series to go along with the I time series. The other way involves taking the [Fast Fourier Transform][6] (FFT) of the input time series, set all the negative frequencies of the transform to zero and then take the inverse Fourier Transform. This is the method that is used in open-weather apt. 

Given an I/Q time series, the AM demodulation is the absolute value of each pair of points defined as:
abs(I_i, Q_i) = sqrt( I_i * I_i + Q_i * Q_i) where I_i and Q_i are the ith samples of the I/Q time series.

## Cosine

<div class="alert alert-block alert-danger">
:muscle: This section is in progress...
</div>

This demodulation method is sourced from Martin Bernardi's [code][7] for the open-source satellite signal decoding programme [NOAA APT 1.3.1][8]. 

To generate each output sample, we use the current input sample, the previous input sample and the carrier frequency. Note: the sine and cosine functions are computed in radians and not degrees. Theta is 2π times the carrier frequency in Hz divided by the sample rate in samples/sec. 

The method uses the following equation:

![image description][9]

The equation for demodulating a signal using the Law of Cosines. Source: Martin Bernardi 

# Histogram Equalisation 

Raw NOAA satellite images can often look very gray and uniform. Histogram equalisation increases the contrast of images so that more detail can potentially be observed, for example the difference between land and sea, or small features in clouds. 

Histogram equalization in open-weather apt accomplishes this by effectively spreading out the pixel brightness values from gray towards black and white. 

![image description][10]

Histograms of an image before and after equalisation. Source: Wikipedia. 

More coming soon...

  [1]: https://en.wikipedia.org/wiki/Modulation
  [2]: https://en.wikipedia.org/wiki/Demodulation
  [3]: https://publiclab.org/notes/sashae/06-21-2021/diy-satellite-ground-station-workshop
  [4]: https://en.wikipedia.org/wiki/In-phase_and_quadrature_components
  [5]: https://en.wikipedia.org/wiki/Finite_impulse_response
  [6]: https://en.wikipedia.org/wiki/Fast_Fourier_transform
  [7]: https://github.com/martinber/noaa-apt/commit/ddcaf40d62ed900c900723f8ad241a285fc095e0#diff-6765f794952aefa15a6efc249870386afffa5c2ddab9a243607ee9be2fed57b4
  [8]: https://noaa-apt.mbernardi.com.ar/index.html
  [9]: /i/46917.png "demodulation.png"
  [10]: /i/46918.png "Histogrammeinebnung.png"