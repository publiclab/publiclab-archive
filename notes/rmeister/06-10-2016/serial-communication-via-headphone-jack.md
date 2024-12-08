---
title: Serial communication via headphone jack
tagnames: arduino, barnstar:basic, sensor-readout, sensor-nodes, serial-link, fsk-decoder, activity:webjack, category:dev
author: rmeister
path: /notes/rmeister/06-10-2016/serial-communication-via-headphone-jack.md
nid: 13185
uid: 468994

---

# Serial communication via headphone jack

by [rmeister](../profile/rmeister) June 10, 2016 18:06

June 10, 2016 18:06 | Tags: [arduino](../tag/arduino), [barnstar:basic](../tag/barnstar:basic), [sensor-readout](../tag/sensor-readout), [sensor-nodes](../tag/sensor-nodes), [serial-link](../tag/serial-link), [fsk-decoder](../tag/fsk-decoder), [activity:webjack](../tag/activity:webjack), [category:dev](../tag/category:dev)

The main goal of this work is a communication channel between a sensor node (Arduino) and a browser client, that does not require installing drivers or other additional software. With a technology called WebRTC, browsers are capable of recording the audio input from the microphone. Therefore the headphone jack was choosen to implement the needed communication channel. As microphones use two-wire cable, data has to be transmitted serially. There is already an Arduino library that implementing this: [SoftModem](https://github.com/arms22/SoftModem). And with [modem.js](https://github.com/dolske/modem.js) a JavaScript implementation is given, that uses the same modulation scheme, but slightly different encoding. Thus, modem.js is not compatible with SoftModem (yet). That is why I started writing a decoder from scratch. 

For reasons of familiarness, I've written an [exemplary decoder](https://github.com/rmeister/webjack/blob/enhanced-octave-decoder/matlab/softmodem_read.m) in the Matlab/Octave language. Afterwards I'm going to translate the gained knowledge into a JavaScript implementation. 

Before explaining the decoder itself I will recapitulate some technical fundamentals.

## Technical background
The SoftModem library modulates data into signals with Frequency Shift Keying in the audible range. To be more exact, SoftModem uses BFSK (binary FSK, also sometimes called 2FSK) that is working with two frequencies. A binary 0 is mapped to the lower frequency and a binary 1 to the higher frequency. In the following picture we can see a recorded signal with its two frequencies.


[![figure_fsk.png](//i.publiclab.org/system/images/photos/000/016/577/large/figure_fsk.png)](//i.publiclab.org/system/images/photos/000/016/577/original/figure_fsk.png)



But why do we even need this modulation and don't just pass the signal like this:


[![figure_unmod_tx.png](//i.publiclab.org/system/images/photos/000/016/578/large/figure_unmod_tx.png)](//i.publiclab.org/system/images/photos/000/016/578/original/figure_unmod_tx.png)



Well the reason is, that we want to transmit data via the headphone jack. This means we have a capacitively coupled link (due to safety and other reasons I will not further explain). From this we can conclude, that only alternating signals will pass the connection. So if we try to transmit the signal unmodulated, the receiver would see this:


[![figure_unmod_rx.png](//i.publiclab.org/system/images/photos/000/016/579/large/figure_unmod_rx.png)](//i.publiclab.org/system/images/photos/000/016/579/original/figure_unmod_rx.png)



Clearly, it is hard to detect bits correctly in this signal. For a sequence of identical bits the amplitude drops until a different bit follows. In the case of a (long) preamble the signal would fall very close to zero, making it impossible to detect its presence after a while.

### Demodulation

First of all, we want to demodulate the signal, meaning we want to translate the low frequency into a constant low signal level and the high frequency into a high signal level. As we are interested in only two frequencies, we can calculate the correlation between the received signal and the two respective frequencies, instead of doing a full FFT. These are the steps for the correlation with one frequency:

1. Obtain a window of the signal with a window length close to the number of samples per bit
2. Multiply every sample with a sine and cosine of the frequency
3. Sum up all products with the sine and separately all products of the cosine multiplication 
4. Square the two sums
5. Add the squared sums
6. Take the square root of the summation
7. Save the value as first sample of the correlation
8. Move the window one sample ahead and start over

Done for both frequencies, we obtain two signals containing the information how strong the frequency in question is present in the original signal. Finally, the difference of the correlation signals is the demodulated signal. 

In the following picture we see (in this order) the recorded signal, the correlation with the lower frequency, the correlation with the higher frequency and the resulting demodulated signal.


[![figure_all.png](//i.publiclab.org/system/images/photos/000/016/580/large/figure_all.png)](//i.publiclab.org/system/images/photos/000/016/580/original/figure_all.png)



One thing to note is the window length for the correlation process. Using a window leads to an averaged signal. Ideally the length fits to the number of samples per bit. If the length is to large, the influence from the previous and next bits will increase, which makes the resulting waveform blurred. In contrast to the demodulated signal above, the picture below shows a result with adjusted window length.


[![figure_demodulated.png](//i.publiclab.org/system/images/photos/000/016/581/large/figure_demodulated.png)](//i.publiclab.org/system/images/photos/000/016/581/original/figure_demodulated.png)

 
Now the signal is ready for decoding.

### Decoding

To understand the decoding process, let's first explain how data is encoded by SoftModem. This is similar to usual serial communication (e.g. UART). There are two main differences: befor sending the Start bit a preamble is prepended and the end of a transmission is denoted by a Push bit. Omitting the Push bit means more data will follow.


State |1|0|X|X|X|X|X|X|X|X|1|1
-------|----------|-------|----|----|----|----|----|----|----|----|------|------
Meaning | Preamble | Start | d0 | d1 | d2 | d3 | d4 | d5 | d6 | d7 | Stop | Push 


Now let's see how we can decode the demodulated signal. The decoder is build as a finite state machine with the states __PREAMBLE__, __START__, __DATA__, __STOP__. Initially it is in the state PREAMBLE. In this state the decoder trys to find the preamble by counting the samples that are larger than a certain threshold. If a preamble was detected, the decoder jumps to the middle of the Start bit and goes into the START state. There the decoder evaluates if the Start bit is set or if it jumped into the START state by mistake. In case the Start bit is set, the decoder jumps ahead for the number of samples per bit. Now the decoder position should be in the middle of the first Data bit and in state DATA. In this position it evaluates the first Data bit and consecutively the following 7 bits. Afterwards, the decoder goes into the state STOP and checks if the Stop bit was set correctly. Following, the decoder checks the Push bit. If the Push bit is set, transmission is over and we go to the PREAMBLE state. Else the next state is DATA, as a missing Push bit is the equivalent of a Start bit and indicates that the sender will continue transmitting data.

In the next picture we see the positions (red lines), where the demodulated signal will evaluated by the decoder.


[![figure_eval_pos.png](//i.publiclab.org/system/images/photos/000/016/582/large/figure_eval_pos.png)](//i.publiclab.org/system/images/photos/000/016/582/original/figure_eval_pos.png)


There is one issue with this proceeding: synchronization. Given that the transmitter sends faster (or slower) than the decoder expects, there will be an offset and the decoder may check bits at a wrong position. This problem occurs due to rounding errors in SoftModem. I [calculated](https://docs.google.com/spreadsheets/d/1FgNwMYz1BY7YfkxdFYrwCYVjnjbC_Py1jo3o2qMi5ug/edit?usp=sharing) the relative error for the duration of a single bit for the default parameter sets of SoftModem.


Baud                      | 126    | 315   | 630   | 1225
---------------------------|--------|-------|-------|-------
Lower frequency           | 882    | 1575  | 3150  | 4900
Higher frequency          | 1764   | 3150  | 6300  | 7350
                           |        |       |       |       
relative error / bit HIGH | 10,72% | 4,43% | 4,43% | 0,04%
 relative error / bit  LOW  | 4,21%  | 1,75% | 1,75% | 0,04%


Regarding the error, the baudrate is negligible and the error rather depends on the used frequencies. To generate an alternating signal, SoftModem makes use of timers. After the timer hits a certain count, the signal will be flipped. When calculating the this count, a rounding error is induced. 
Another error may be induced by the choice of the sampling rate of the decoder. E.g. at the (common) sampling rate of 44,1kHz and a signal frequency of 1575Hz, one period will be exactly 28 samples. But if we choose a sampling rate of 29,4kHz (and the same signal frequency), one period would be aprox. 18.7 samples.

Furthermore I came across another problem regarding the detection of the preamble. In SoftModem the length of the preamble is variable, increasing with the time since the last transmission (until a maximum that depends on the baud rate). This is not necessarily bad, but the minimum preamble length may also be smaller than a sequence of  8 consecutive 1's. In case one transmission ended (with a push bit) and a new transmission starts immediately, the preamble is short and may not be detected. 
Other encoding schemes solve such issues with [bit stuffing](https://en.wikipedia.org/wiki/Bit_stuffing). In this case, I'd like to propose changing SoftModem to use a fixed length preamble.