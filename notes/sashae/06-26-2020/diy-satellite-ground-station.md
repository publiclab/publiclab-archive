---
title: DIY Satellite Ground Station
tagnames: satellite-imagery, barnstar:basic, barnstar:empiricism, seeks:replications, noaa, lat:51.50735, lon:-0.127758, antenna, zoom:6, open-weather, activity:open-weather, with:sophied
author: sashae
path: /notes/sashae/06-26-2020/diy-satellite-ground-station.md
nid: 24043
uid: 693684

---

![](https://publiclab.org/public/system/images/photos/000/042/417/original/DSC00603.jpg)

# DIY Satellite Ground Station

by [sashae](../profile/sashae) June 26, 2020 17:12

June 26, 2020 17:12 | Tags: [satellite-imagery](../tag/satellite-imagery), [barnstar:basic](../tag/barnstar:basic), [barnstar:empiricism](../tag/barnstar:empiricism), [seeks:replications](../tag/seeks:replications), [noaa](../tag/noaa), [lat:51.50735](../tag/lat:51.50735), [lon:-0.127758](../tag/lon:-0.127758), [antenna](../tag/antenna), [zoom:6](../tag/zoom:6), [open-weather](../tag/open-weather), [activity:open-weather](../tag/activity:open-weather), [with:sophied](../tag/with:sophied)

----

This guide is a **Beta version** and is currently being tested! Testing may take longer than planned as due to supply chain issues caused by the Covid-19 pandemic some hardware components might be temporarily unavailable.

---------

If you use the guide, please send @sashae and @sophied feedback: what worked, what was missing or could have been clearer?

#### Guide for the reception of NOAA satellite images using software defined radio on Windows or MacOS

We document here only a few ways to receive an Automatic Picture Transmission (APT) from active National Oceanic and Atmospheric Administration (NOAA) satellites. Other software and hardware setups are possible! Importantly, the guide is limited to Windows and MacOS. Please get in touch if you would like to contribute instructions for Linux or another operating system.

![image description](/i/39939.png "NOAA_19_N_80_W_2020-05-17_18-03_BST_msa_horizontal.png")

_NOAA 19 N 80 W 2020-05-17 18-03 BST Multi-spectral Analysis_

## What you need

### Hardware

- A **computer** of any model. 4GB RAM or higher is ideal.
- A **software defined radio dongle**. There are many kinds are available:
  - [RTL-SDR V3](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) is the cheapest, reliable and most adaptable dongle, in our opinion. (£27)
  - [Airspy Mini](https://airspy.com/airspy-mini) (£120)
  - [Funcube Dongle Pro+](https://www.hamradio.co.uk/sdr-amsat-uk-funcube/funcube/funcube-dongle-pro-pd-4094.php) \*Not compatible with CubicSDR (£150)
- An **antenna** capable of receiving circularly polarised transmissions:
  - [Turnstile](https://shop.amsat-uk.org/FUNCube_TLM_Receive_Antenna/p3815740_15628535.aspx) (£38)  
We both use a 137 MHz turnstile antenna purchased from AMSAT UK. However the AMSAT UK online shop is frequently sold out of these antennas. They can be ordered directly from the original supplier [Winkler Spezialantennen](https://www.winklerantennenbau.de/).
  - [Quadrifilar Helix (QFH)](http://tinhatranch.com/how-to-build-a-qfh-quadrifilar-helix-antenna-to-download-images-from-weather-satellites/#.Xv2Yg5NKj3A)
  - [V-dipole](https://www.rtl-sdr.com/simple-noaameteor-weather-satellite-antenna-137-mhz-v-dipole/) or [Double Cross Antenna](https://imgur.com/a/TiZ41). There is a great tutorial on making a V-dipole antenna on [RTL-SDR blog](https://www.rtl-sdr.com/simple-noaameteor-weather-satellite-antenna-137-mhz-v-dipole/). 
- One or two **cables**. We recommend two options:
  - an RF cable for connection between antenna and dongle (£5--10).  
The RF cable should have 50 ohms impedance. Two metres is a good length. The cable needs a male SMA plug to fit into the dongle.
  - a USB A male to USB A female extension cable (£5--10) _and_ a short cable or adapter to connect your dongle to your antenna. Ideally, the USB cable should be no longer than 3 metres to avoid interference. This set-up is based on the [RTL-SDR dongle kits](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) (£35), which come with a dongle, adapter, extension cable as well as a portable dipole antenna.

\*Not all dongles are compatible with SDR# and CubicSDR. Before purchasing, check the dongle is compatible with the software you intend to use!

Note: #open-weather hopes to publish a tutorial on DIY antenna design and construction soon!

### Software

- **Software defined radio**
  - For Windows: [SDR#](https://airspy.com/download/) (free)
  - For MacOS: [CubicSDR](https://github.com/cjcliffe/CubicSDR/releases) (free)
- **Virtual audio cable**
  - For MacOS: [Soundflower](https://soundflower.en.softonic.com/mac/download) (free)
  - For Windows: [VB Cable](https://www.vb-audio.com/Cable/) (free)
- **Satellite decoding software**  
For both Windows and Mac OS we use the beta version of [WXtoImg](https://wxtoimgrestored.xyz/downloads/) (free)

<div class="alert alert-block alert-danger">

<p><strong>MacOS 10.15 Catalina compatibility issues</strong></p>

<p>If you are running MacOS 10.15 Catalina you will not be able to download, install and use WXtoImg. This is because 10.15 Catalina no longer supports 32 bit applications. If you are in this position you have several options:</p>

<p>
<li><a href="https://support.apple.com/en-us/HT201468">Partition your Mac to run Windows 10 via Bootcamp</a>. Then install your SDR software, virtual audio cable and WXtoImg on your Windows partition. You will need to enter the partition whenever you want to use the aforementioned software to decode NOAA APT transmissions.</li>
<li>Use an alternative satellite decoding software that runs on Max OS Catalina, like <a href="https://noaa-apt.mbernardi.com.ar">NOAA APT 1.2.0</a>, an open source programme developed by Martin Bernardi. NOAA APT 1.2.0 has fewer features than WXtoImg, for example it does not have false-colour images and live decoding. Instead of piping audio directly from SDR software to the satellite decoding software, as you can do with WXtoImg, in NOAA APT 1.2.0 will need to make a recording of the satellite transmission using your SDR software then you upload the WAV file.,The software produces reasonably large, high contrast and detailed images. See the activity post: <a href="https://publiclab.org/notes/sashae/07-02-2020/how-to-compile-noaa-apt-1-2-0-on-mac">How to Compile NOAA APT 1.2.0 on Mac</a></li>
<li>Use a browser-based APT Decoder, like <a href="http://jthatch.com/APT3000/APT3000.html">APT 3000 on Mac</a>. Like NOAA APT 1.2.0, you will need to upload pre-recorded WAV files. The browser then generates the satellite images. The quality of images produced by APT 3000 is less than NOAA APT 1.2.0 and WXtoImg, but it is a simple alternative that does not require significant effort or time.</li>
<li>Use a virtual machine like <a href="https://www.parallels.com/">Parallels</a> to run Windows 10 on your Mac. This is a paid service that enables you to run Windows on your Mac without partitioning your hard drive. At the time of publishing a desktop license cost £69.99.</li>
</p>
</div>

### Humans

Once you've assembled the hardware, a day to half a day, a little patience and, ideally, a buddy to do things like hold your antenna while you tune the software.

### Useful acronyms

| Acronym | Description |
|---------|-------------|
| RF      | Radio Frequency |
| APT     | Automatic Picture Transmission |
| NOAA    | National Oceanic and Atmospheric Administration |
| MacOS   | Mac or Macintosh Operating System |
| SDR     | Software Defined Radio |
| WAV     | Waveform Audio File |
| AVHRR   | Advanced Very High Resolution Radiometer |
| LEO     | Low Earth Orbit |
|         |             |

## Understanding what you are about to do

### NOAA satellite transmissions

**How do NOAA satellites collect data?**  
The images transmitted by NOAA satellites are produced by the satellite's primary scanning instrument called the Advanced Very High Resolution Radiometer (AVHRR). The instrument is designed to detect five channels of radiant energy from the surface of the Earth ranging from the visible spectrum to the near-infrared and infrared or thermal spectra. As the satellite passes over a given part of the earth, the AVHRR sensors collect and transmit data in near-real time. Think of the satellite as scanning Earth's surface line by line. In the resulting images each pixel is approximately 4 × 4 km.

**How do they transmit data?**  
The NOAA satellites have inbuilt radio antennas that transmit the data collected by the AVHRR instrument on a frequency in the 137 MHz range. To minimise interference between satellites, each NOAA satellite transmits on a different frequency within the 137 MHz range.

**How do NOAA satellites orbit?**  
NOAA satellites orbit the Earth sun-synchronously. A sun-synchronous orbit is a nearly polar orbit in which the satellite passes over a given point of the planet's surface at the same time everyday. The NOAA satellites follow a Low Earth Orbit (LEO). A LEO is an Earth-centered orbit with an altitude below 2,000 km. Each satellite circles the Earth approximately every 100 minutes.

### Hardware

**What does the antenna do?**  
Your antenna is a sensor. It catches electromagnetic waves and transforms them into an electrical current i.e. an electrical signal. All antennas are tuned to specific frequency ranges meaning that they receive or transmit these frequencies best. Most antennas are directional.

**What does the RF cable do?**  
An RF cable is an insulated radio frequency cable. It includes a central conductor surrounded by a shield conductor. The cable carries electrical signals from one point to another (i.e. from your antenna to your dongle) without introducing interference.

**What does the dongle do?**  
The dongle receives the electrical signal from the coaxial cable, filters it, and converts it from analogue to a digital I/Q so that it can be read by your computer.

### Software

**Why do you need software?**  
You need software to process the digital signal sent to your computer by your dongle. Software makes these signals visible and audible; other software decodes the signals transmitted by the satellites into visual images.

**What are the different kinds of software needed?**  
To decode transmissions from satellites, you need three kinds of software:

- **Software Defined Radio** or **SDR** software to demodulate the radio waves caught by your antenna and tune to specific frequencies, like a traditional radio. SDR software outputs audio
- Satellite decoding software (e.g. **WXtoImg**) to take the audio generated by the SDR software and decode it into an image
- A **virtual audio cable** software to link the SDR software and the satellite decoding software...

**How can I practice using SDR software?**  
The best way to practice using SDR technologies is to take your equipment (antenna, computer, dongle and cables) out into a nearby open space, plug everything in, launch your SDR software, and have fun exploring the radio spectrum. You can try things like changing modes (modulation), scrolling through ham radio bands, and switching frequencies. See below for start up guide to SDR software.

<div class="alert alert-block alert-secondary">
:bulb: You can also get comfortable with SDR software by visiting websites like <a href="http://www.websdr.org/">WebSDR</a> and choosing a radio receiver to play with. This way you don't need any software or hardware to practice!
</div>

**How do you connect your SDR software to your satellite decoding software?**  
No matter what kind of computer you have and what kind of SDR software you prefer, you need to send the audio output from your SDR software to your satellite decoding software (e.g. WXtoImg). You can use a range of free software to act as the 'virtual cable' between the SDR software and satellite decoding software. @sophied uses Soundflower (for Mac) while @sashae prefers VB Cable (for Windows 10).

## Instructions

![image description](/i/40093.jpg "open-weather-ground-station-2020.jpg")

_DIY satellite ground station, @sophied [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)_

### Step 1: Assemble your kit

1\. Connect your antenna to your **RF cable**. (If you need to assemble your antenna do this first)

2\. Screw the coaxial cable into the non-USB side of the dongle (Be careful not to over tighten the cable connector as they are easily destroyed. No more than finger tight)

3\. Plug your dongle into a free USB port on your computer

This is the basic set up that you will use to decode weather satellite images. In order for this set-up to become operational, you need to follow the steps below to install and run the software. It's a good idea to unplug your dongle before you continue.

### Step 2: Install a virtual audio cable

1\. Download and install a virtual audio cable. We use [Soundflower](https://soundflower.en.softonic.com/mac/download) for Mac (@sophied) and [VB Cable](https://www.vb-audio.com/Cable/) for Windows (@sashae).

2\. Follow the install instructions on the application's website.

### Step 3: Set up your SDR software

#### If you are using SDR# for Windows, follow these steps:

[See below for SDR software set up on MacOS](https://publiclab.org/notes/sashae/06-26-2020/diy-satellite-ground-station?_=1593901184#If+you+are+using+CubicSDR+for+Mac,+follow+these+steps:)

![image description](/i/39941.jpg "Photo_15-04-2020__20_04_28.jpg")

_@sashae decoding a NOAA satellite pass using SDR# and WXtoImg_

1\. Download and install [SDR#](https://airspy.com/download/). Since SDR# involves a batch installer that requires an exchange of drivers, please refer to this [SDR# Quick Start Guide](https://www.rtl-sdr.com/rtl-sdr-quick-start-guide/).

2\. Plug your dongle into a USB port. Launch SDR#.

![image description](/i/39942.png "SDR_Sharp_Full_Window.png")

_SDR# start-up window_

3\. Select your **Dongle type**. Use the arrow to Select **Source** \> **\[Your Dongle\]**

4\. Set the Audio **Samplerate**. In the left panel, scroll down to view the Audio settings. Select **Samplerate** \> **192,000 sample/second**. Sample Rate is dependent on your PC's soundcard, so it may be that 192,000 sample/sec is not available, in which case try selecting a lower sample rate, like 48,000 sample/sec.

5\. Adjust **Audio Input** and **Output** settings. Make sure the audio input is your computer's soundcard. For @sashae this means selecting **MME Microsoft soundcard** from the input list. Make sure the audio output is your virtual audio cable.

6\. In the Audio section, make sure to uncheck the '**Filter Audio**' box.

![image description](/i/39980.png "AudioSettingsSM.png")

_SDR# audio settings_

7\. Start receiving: Click the **Play** button at the top left of the window.

8\. Tune to a **frequency**: In the frequency display box, click on the upper half of each number to increase, and the lower half to decrease frequency. You can also click, drag and scroll through frequencies using the waterfall display.

![image description](/i/39979.png "Frequency_SM.png")

_Changing frequency in SDR#_

9\. Changing **Modes**: click bubbles labelled **AM, NFM, WFM, USB, LSB, CW** at the left panel to change the mode in which data is demodulated by the software. For receiving transmissions from NOAA satellites, Choose **WFM** or "Wide FM".

![image description](/i/39945.png "ModesSelection.png")

_Selecting modes in SDR#_

10\. Adjusting **Bandwidth**: in the left panel, find the window for bandwidth; use your number keys or the small up / down arrows to increase or decrease bandwidth. For receiving satellite transmissions, select a bandwidth between **36,000 - 45,000 Hz**.

<div class="alert alert-block alert-secondary">
:wrench: You can also use your mouse: in the waterfall display, click on the edge of the frequency range and drag left or right to manually increase or decrease bandwidth.
</div>

11\. Adjusting **Volume**: drag the Volume slider to increase or decrease.

<div class="alert alert-block alert-secondary">
:wrench: Other settings in SDR# can remain in default modes; For example the Filter in SDR# can remain <b>Blackman-Harris 4</b>.
</div>

#### If you are using CubicSDR for Mac, follow these steps:

![image description](/i/40090.jpg "Screenshot_2020-04-14.jpg")

_@sophied decoding a NOAA satellite pass using CubicSDR and WXtoImg_

1\. Download and install [CubicSDR](https://github.com/cjcliffe/CubicSDR/releases/tag/0.2.4).

<div class="alert alert-block alert-secondary">
:wrench: You will be directed to the most recent version of CubicSDR on GitHub. If you cannot see a file with "Mac" in its name, look for "Darwin". Why? MacOS software runs off a piece of open source software called Darwin.
</div>

2\. Launch **CubicSDR**

3\. In the dialog window select your dongle from the **Devices** list and click **Start**. For example, for the RTL-SDR dongle select "Generic RTL2832U OEM :: 00000001".

![image description](/i/39974.png "CubicSDR-dialogue-box_SM.png")

_CubicSDR Dialogue window_

<div class="alert alert-block alert-secondary">
:wrench: If you do not know it already, find out the sample rate of your dongle. When the dongle is selected, its sample rate will be displayed in the table on the right side of the dialogue window. Make a note of it.
</div>

4\. Click **Sample Rate** and select the correct sample rate for your dongle. The sample rate for the RTL-SDR dongle is 1.92 MHz.

![image description](/i/39975.png "CubicSDR-sample-rate_SM.png")

_Sample Rate menu in CubicSDR_

5\. To check CubicSDR is working, click anywhere on the bottom waterfall.

The default settings for Cubic SDR are:

| Setting | Default |
|---------|---------|
| Modulation type | FM (Frequency Modulation) |
| Demodulation frequency | 100 MHz |
| Bandwidth | 200 KHz |
| Audio out | You computer’s default audio output |
|         |         |

<div class="alert alert-block alert-secondary">
:bulb: In Europe, the 100 MHz area of the radio spectrum is used for public radio broadcasts. If you click on an area of the waterfall in yellow or orange you should hear a radio station.
</div>

<div class="alert alert-block alert-secondary">
:wrench: CubicSDR offers useful <b>Hover Tips</b> and information on commands and shortcuts in the bottom bar of the window. Hover Tips are switched on by default and are a great way to get to know the software. If you want to turn them off, click <b>Settings</b> and deselect <b>Show hover tips</b>. Take time to explore these!
</div>

6\. Tune to a **frequency**. There are three easy ways to tune to a frequency in CubicSDR

- Under the label 'Centre Frequency', click on the upper and lower parts of the numbers.

![image description](/i/39976.png "CubicSDR-frequency_SM.png")

_Tuning to a frequency in CubicSDR_

- Click on the lower waterfall.
- Begin typing a number. A pop-up window will appear. Complete typing the frequency you want and, on your keyboard, press Return. Remember, the default until is Megahertz, always written as MHz. Megahertz is a unit of frequency equal to one million hertz.

![image description](/i/39978.png "CubicSDR-set-frequency_SM.png")

_Frequency pop-up window in CubicSDR_

7\. To change "Modulation type" or **modes,** on the top left select **AM, FMS, NBFM, AM, LSB, USB, DSB, I/Q.** NOAA satellite transmissions are **FM**, which is the acronym for Frequency Modulation.

8\. Adjust the bandwidth. Under the label **Bandwidth**, click on the upper and lower parts of the numbers.

9\. Adjust the **audio output volume**. In the top left, click and drag the vertical green bar.

10\. Select the **audio output**: click the audio-out dropdown in the top left corner and choose your virtual audio device that you previously setup. In @sophied 's case this is "**Soundflower (2ch)**".

CubicSDR can freeze when quitting. When this happens, right click on the CubicSDR icon and Force Quit.

### Step 4: Set up WXtoImg, your satellite decoding software

1\. Download and install [WXtoImg](https://wxtoimgrestored.xyz/beta/).

When you first launch WXtoImg, you will be taken through a series of steps to tailor the software to your computer. Go through the steps. Then follow the instructions below.

2\. Assigning your **Ground Station Location**. Select Options \> Ground Station Location (you can either search for a city or input your latitude and longitude manually)

![image description](/i/39966.png "WXtoImgGroundStationLocation.png")

_Ground station location in WXtoImg_

3\. Update **Keplers**. Select **File** \> **Update Keplers** (It is good to update Keplers before every satellite decoding session to maintain accuracy) (the computer must be connected to the Internet for this to work)

4\. Adjusting the **Map Overlay** settings. Select **Options** \> **Map Overlay Options**

<div class="alert alert-block alert-secondary">
:bulb: You can choose in what colour you would like the map to appear and ground station to appear, or choose to hide them)
</div>

5\. Adjust the **Recording Options**: Select **Options** \> **Recording Options**

- In the dialogue box that appears, select your chosen virtual audio cable. Select Soundcard \> \[Your Virtual Audio Cable\]
- Choose **11025** as the sample rate.
- Input elevation settings for receiving satellite signals; Tip: good settings to begin: maximum elevation above **9** degrees; record only when satellite is above **8** degrees.
- Select what kind of antenna you are using from the Antenna Type list. See image below for recording settings employed by @sashae:

![image description](/i/39967.png "2Annotation_2020-05-22_165521.png")

_WXtoImg: Recording Options Dialogue Box_

6\. Checking the **Satellite Pass List**: Select **File** \> **Satellite Pass List**. This will generate a window with upcoming times at which NOAA satellites will pass over your ground station location)

<div class="alert alert-block alert-secondary">
:bulb: FM or frequency modulation is the encoding of information in a carrier wave by varying the frequency of the wave. In AM or amplitude modulation, information is encoded in the amplitude (signal strength) of the carrier wave.
</div>

### Step 5: Test that WXtoImg can 'hear' your SDR software

1\. Tune to an FM radio station (around 100 Mhz) using your preferred SDR software

<div class="alert alert-block alert-secondary">
:wrench: Since you are piping the audio coming from the SDR software to WXtoImg with a virtual audio cable you should not be able to hear the station through your computer speakers. If you can hear the station, adjust your Audio Output.
</div>

2\. In WXtoImg, Select **Record** \> **Manual Test.**

3\. Do lines filled with tiny dots or speckles start loading in the WXtoImg window? If so, WXtoImg can hear your radio software and the audio connection is working.![image description](/i/39968.jpg "1_QYUeTv3dVbqBLlvaguysiw.jpg")

_WXtoImg attempting to decode FM radio static_

4\. In the bottom right, is the volume level green? If it is 'in the green' this means the signal is in a good range for decoding. If it is not green (e.g. if it is red or yellow) adjust the volume on your SDR software until the WXtoImg volume becomes green.

### Step 6: Decoding an image from a satellite pass

**Important to know:**

**When is the next 'good' satellite pass over your location?**

A 'good' pass is a pass that is more than 10 minutes long. In the Satellite Pass list, Duration is measured in minutes. In the Satellite Pass list generated by WXtoImg, find the next 11+ minute pass.

![image description](/i/39969.png "Screenshot_2020-06-25_15.03.44.png")

_Satellite pass list in WXtoImg_

<div class="alert alert-block alert-secondary">
:wrench: the list shows Local Time and UTC Time. Take note of the difference.
</div>

**What direction is the satellite traveling?**  
In the Satellite Pass List, note whether the satellite is Northbound or Southbound. Also note whether the satellite will be to the east or west of you, and at what maximum elevation. For example: a NOAA 15 Southbound pass at 49W MEL (Maximum Elevation) means the satellite is traveling south and at its max elevation (mid way through the pass) it will be 49 degrees out of 90 (where 90 is directly overhead) to the west. This means that mid way through the pass, if you are using a Turnstile antenna, you should be aiming your antenna diagonally upward to the west at a 49 degree angle. If you are using a V-Dipole antenna like that in the "RTL-SDR v3 with the V-dipole antenna kit" you should keep the antenna parallel to the ground with a north-south orientation (and the two antenna 'ears' 120 degrees apart both facing South).

**What frequency will the satellite be transmitting on?**  
Make sure to note down the frequency of your chosen satellite pass (see the rightmost column in the Satellite Pass List where Frequency is listed in Mhz).

**Where can you best receive this transmission in your local area?**  
The transmission is best received from a wide open area with a good horizon. This could be a park, a parking lot, a rooftop, a hill, a beach or a balcony (as long as the balcony has a clear view of the path of the satellite)

### Pre-satellite pass checklist

- Are you tuned to the frequency of the satellite?
- Are you using a 36,000--45,000 Hz bandwidth and demodulating with FM (CubicSDR) or Wide FM (SDR#)
- Is your SDR software sending audio to WXtoImg (see above steps for testing that they can hear each other)?
- Are you pointing / orienting your antenna in the right direction?

In SDR# the waterfall display can freeze or stutter. If this happens simply close the programme and reopen it, keeping your dongle plugged in.

### Receiving your first satellite transmission

1\. A few minutes before the pass is due to start. On WXtoImg Select **File** \> **Record** \> **Auto Record**; When the satellite passes over the elevation you designated in the Recording Options dialogue box, you should start receiving a signal.

2\. The satellite signal looks like a faint series of dots and dashes that will begin to appear on the waterfall display of your SDR software;

![image description](/i/39970.png "SDRFaint.png")

_Traces in the SDR# waterfall display_

3\. When you see the satellite signal, adjust the frequency (if needed) so that the SDR / radio software is centred on the signal. This might mean increasing the frequency 1 or 2 MHz

4\. Adjust for the **Doppler shift**. The frequency of the transmission 'drifts' from a little higher than the satellite's designated frequency to a little lower than the designated frequency. During the pass adjust for this Doppler shift by using the arrows or dragging in the waterfall display to keep the radio software centred on the satellite signal.

5\. If you are using a Turnstile antenna, remember to **track the satellite** as it orbits overhead. You can let the visible strength of the signal guide you. If you are using another antenna like a V-Dipole you need to pay attention to orientation: keep the antenna parallel to the ground with a north-south orientation (and the two antenna 'ears' 120 degrees apart both facing South).

You will see a marked difference in signal strength on the waterfall display if you are pointing the antenna in the right direction vs. the wrong direction.

6\. Periodically check WXtoImg to make sure the volume is green and the pass is being decoded.

![image description](/i/39971.png "Screenshot_2020-06-25_17.50.31.png")

_WXtoImg window: live-decoding a satellite image from NOAA 19_

7\. When the pass is over, WXtoImg will begin to automatically process the raw data. You will see the software 'working' as it combines information from different sensors to produce a series of b/w and colour images. When it is done processing 'Done' will appear in the bottom left of the window.

8\. Stop WXtoImg from waiting for the next satellite by selecting **File** \> **Stop.**

9\. The image you have just received will be stored in the **Raw Images** tab. You can double click on the raw image of the pass and then use the Enhancements menu to look through the different combinations of sensor data.

10\. The raw image and audio file unique to this pass will also be saved in WXtoImg's 'Raw' and 'Audio' folders on your computer.

## Congratulations on your first attempt!

![image description](/i/40103.gif "NOAA-18-2020-04-23.gif")

_WXtoImg enhancements_

## Troubleshooting

**My satellite decoding software loads a black image during the test**  
This means there is something wrong in the connection between your SDR / radio software and WXtoImg. You need to double check all of the connections and virtual audio cables. Double check the Audio Output on your SDR software and the Soundcard (Audio Input) in WXtoImg.

**The volume is in the red, close to 0 during the test**  
This means that the signal coming into WXtoImg is far too quiet for WXtoImg to be able to process it. Turn up the volume on your SDR software. If this doesn't work there may be an issue with the audio inputs and outputs connecting the SDR software to WXtoImg.

On MacOS, check that the Master volume for Soundflower is not turned down.

1. **Application** \> **Utilities** \> **Audio MIDI Setup**
2. In Audio MIDI Setup, select **Soundflower (ch2)**
3. Drag the level of the Master volume to the maximum value, usually 1

**Alternative Guides for Decoding Weather Satellite Images**

@sophied and @sashae have found many other useful guides during their attempt to learn how to decode weather satellite images. They found that reading different guides often clarifies different issues since authors put emphasis on different details in the process. These guides include:\*\*

- [RTL-SDR Tutorial: Receiving NOAA Weather Satellite Images](https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-noaa-weather-satellite-images/ "https://www.rtl-sdr.com/rtl-sdr-tutorial-receiving-noaa-weather-satellite-images/")
- [Martin Bernardi's Guide to Receiving NOAA Images](https://noaa-apt.mbernardi.com.ar/guide.html "https://noaa-apt.mbernardi.com.ar/guide.html")
- [Alex Wuff's How to Download Live Images from Government Weather Satellites](https://hackernoon.com/weather-sat-9620228789c8 "https://hackernoon.com/weather-sat-9620228789c8")

If you have other issues, questions or concerns do ask a question on the #open-weather project page or get in touch with @sophied and @sashae.

![image description](/i/40088.jpg "Satellite-catching-London-2020.jpg")

_Catching a satellite, London, 2020_