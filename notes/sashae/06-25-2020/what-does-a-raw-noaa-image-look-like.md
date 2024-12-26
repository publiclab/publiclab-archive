---
title: "What does a raw NOAA image look like?"\ntagnames: 'satellite-imagery, noaa, lat:51.50735, lon:-0.127758, zoom:6, open-weather'
author: sashae
path: /notes/sashae/06-25-2020/what-does-a-raw-noaa-image-look-like.md
nid: 24040
uid: 693684

---

![](https://publiclab.org/public/system/images/photos/000/039/929/original/NOAA_18_S_72_W_2020-06-05_11-10_BST_contrast.png)

# What does a raw NOAA image look like?

by [sashae](../profile/sashae) | June 25, 2020 13:32

June 25, 2020 13:32 | Tags: [satellite-imagery](../tag/satellite-imagery), [noaa](../tag/noaa), [lat:51.50735](../tag/lat:51.50735), [lon:-0.127758](../tag/lon:-0.127758), [zoom:6](../tag/zoom:6), [open-weather](../tag/open-weather)

----

As they orbit around the planet, NOAA satellites continuously transmit images of Earth's surface. They transmit in two modes: APT (Automatic Picture Transmission) and HRPT (High Resolution Picture Transmission). The APT or 'direct readout service' of the NOAA satellites is the most easily and widely received. 

**  
**

APT images are produced by the "primary scanning instrument" on the NOAA satellite: the Advanced Very High Resolution Radiometer (AVHRR). This instrument is designed to detect five channels of radiant energy from the surface of the Earth ranging from the visible spectrum, the near-infrared, and infrared spectra. 

**  
**

The APT signal is derived from the AVHRR's original digital data, however this data is converted into an analogue signal. Analogue is a term that refers to information that is represented by a continuously variable physical quantity. In the case of the APT transmission, frequency modulation (FM), or changes in the physical variable of frequency, is used to encode the digital information in a radio wave. The two images that appear in the APT signal usually consist of information from one of the visual channels and one of the infrared channels. At night, two infrared images are usually found. Therefore, the final product from an APT transmission consists of two images, side by side, representing the same view of the Earth in two different spectral bands. (See attached image) 

**  
**

When @sophied and I first began to decode APT transmissions from NOAA satellites we were interested by the fact that they look like film strips. There are a series of notches and blocks separating the two channels of information. These notches and strips encode telemetry information that is unique to the satellite orbiting overhead. The length of the image that one receives is also unique to your place on Earth, your view of the sky, your antenna, your software defined radio skills, and how well you track the orbit of the satellite.