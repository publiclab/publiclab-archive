---
title: "How to Compile NOAA APT 1.2.0 and 1.3.0 on Mac"

tagnames: 'seeks:replications, lat:51.50735, lon:-0.127758, zoom:6, open-weather, activity:open-weather, response:24043'
author: sashae
path: /notes/sashae/07-02-2020/how-to-compile-noaa-apt-1-2-0-on-mac.md
nid: 24052
uid: 693684

---

![](https://publiclab.org/public/system/images/photos/000/039/985/original/Screenshot_2020-06-10_09.15.39.png)

# How to Compile NOAA APT 1.2.0 and 1.3.0 on Mac

by [sashae](../../../profile/sashae) | July 02, 2020 07:50

July 02, 2020 07:50 | Tags: [seeks:replications](../tag/seeks:replications), [lat:51.50735](../tag/lat:51.50735), [lon:-0.127758](../tag/lon:-0.127758), [zoom:6](../tag/zoom:6), [open-weather](../tag/open-weather), [activity:open-weather](../tag/activity:open-weather), [response:24043](../tag/response:24043)

----

### Guide for installing the open source satellite image decoding software NOAA APT 1.2.0 and NOAA APT 1.3.0 on Mac OS 10.15

Since 2018, the most popular satellite image decoding software [WXtoImg](https://wxtoimgrestored.xyz/), has been abandoned by its creators. With changes in Windows and Mac Operating Systems, this means the last version of WXtoImg has a limited lifetime and usability. Although WXtoImg still runs on Windows, it will not run on Mac OS 10.15 Catalina, because Catalina no longer supports 32 bit applications like WXtoImg. WXtoImg is a closed source, proprietary software.

There are lots of [alternatives to WXtoImg](https://noaa-apt.mbernardi.com.ar/alternatives.html), but all of them require compilation, Python, and / or don't provide graphical user interfaces. The vast majority of these alternatives will not run on Mac OS, and very few are open source. This situation led [Martin Bernardi](https://noaa-apt.mbernardi.com.ar/) to create an open source, user friendly satellite image decoding software for both Windows and Mac users, called [NOAA APT 1.2.0](https://noaa-apt.mbernardi.com.ar/). The software is also potentially useful for advanced GNU/Linux users.

NOAA APT 1.2.0 takes a raw WAV file recording of a NOAA satellite pass and decodes the image embedded in the audio file. The software has a number of other features including:

- Add map overlays with countries, states, provinces and lakes.
- Easy to use Graphical User Interface
- Possible to disable syncing and export every step of the decoding process, useful for corrupted recordings
- Telemetry band reading
- Resampling WAV files preserving modification timestamps
- Modifying timestamps of files
- Editing filter parameters from a configuration file
- Rotating the output image, in case of ascending (South to North) passes.

NOAA APT 1.3.0 was released in Autumn 2020. This new version of the software has a number of additional features including:
- Customisable false colour imagery

A fully packaged version of NOAA APT 1.2.0 or NOAA APT 1.3.0 for downloading and installing on a Mac does not exist yet. However @sashae has collaborated with Martin and radio amateur Bill Liles to produce an 11-step series of instructions for 'compiling' NOAA APT 1.2.0 and NOAA APT 1.3.0 on Macs running 10.15 Catalina (it will probably work on Mac OS Big Sur too).

## Instructions:

Locate the Terminal application on your Mac. Open Terminal and type in the following commands in order, pressing enter after each command.

1\. Install Rustup:

curl --proto '=https' --tlsv1.2 -sSf [https://sh.rustup.rs](https://sh.rustup.rs) | sh

Terminal may ask if you want to proceed with the installation. Enter '1' to 'proceed with installation' and press enter.

2\. To finish installing Rustup:

source $HOME/.cargo/env

3\. To install Homebrew:

/bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/master/install.sh](https://raw.githubusercontent.com/Homebrew/install/master/install.sh))"

4\. You will be prompted to enter your password: type in your computer password and press enter.

If prompted to continue the installation press enter.

5\. To install gtk+3:

brew install gtk+3 adwaita-icon-theme openssl

6\. Installing NOAA APT 1.2.0  - OR - NOAA APT 1.3.0:
Open a Browser and paste in the following link to download and extract NOAA APT 1.2.0:

[https://github.com/martinber/noaa-apt/archive/v1.2.0.zip](https://github.com/martinber/noaa-apt/archive/v1.2.0.zip)

Or this link to extract NOAA APT 1.3.0: [https://github.com/martinber/noaa-apt/archive/v1.3.0.zip][1]

Unzip and save the "noaa-apt-1.2.0" or "noaa-apt-1.3.0" folder in your Downloads folder.

7\. Back in Terminal you have to move to the downloaded folder and run the cargo command to compile:

cd Downloads/noaa-apt-1.2.0/

OR

cd Downloads/noaa-apt-1.3.0/

8\. Then enter the following command:

export PKG\_CONFIG\_PATH=/usr/local/lib/pkgconfig/

9\. Then enter the command:

cargo build --release

10\. A pop up window will ask you to allow Terminal to access files in your Downloads folder. Choose 'OK'.

![image description](/i/39986.png "Screen_Shot_2020-06-16_at_2.10.09_PM.png")

Pop up window

11\. To run the program, the command is:

./target/release/noaa-apt

The following window will appear which launches the programme:![image description](/i/40054.png "Screenshot_2020-06-30_12.01.26.png")

A manual for using the programme is found here:

[https://noaa-apt.mbernardi.com.ar/usage.html](https://noaa-apt.mbernardi.com.ar/usage.html)

Note: to open NOAA APT 1.2.0 or NOAA APT 1.3.0 in the future, try opening Terminal and entering

1\. cd Downloads/noaa-apt-1.2.0/

2\. ./target/release/noaa-apt

OR

1\. cd Downloads/noaa-apt-1.3.0/

2\. ./target/release/noaa-apt

...and pressing enter. If that doesn't work, you may need to open Terminal and enter the following three commands in order to start up the programme:

1\. cd Downloads/noaa-apt-1.2.0/

2\. cargo build --release

3\. ./target/release/noaa-apt

- OR -

1\. cd Downloads/noaa-apt-1.3.0/

2\. cargo build --release

3\. ./target/release/noaa-apt

@sashae would like to recognise and thank Martin Bernardi who authored NOAA APT 1.2.0 and helped write these instructions for Mac OS; Bill Liles for an initial round of testing and feedback; and Jol Thoms for further testing on Mac OS.

  [1]: https://github.com/martinber/noaa-apt/archive/v1.3.0.zip