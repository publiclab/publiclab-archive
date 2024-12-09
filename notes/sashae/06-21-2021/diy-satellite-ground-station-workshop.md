---
title: 'DIY Satellite Ground Station Workshop '
tagnames: diy-satellite, eu, denmark, open-weather, with:sophied
author: sashae
path: /notes/sashae/06-21-2021/diy-satellite-ground-station-workshop.md
nid: 25627
uid: 693684

---

![](https://publiclab.org/public/system/images/photos/000/042/616/original/DSC00603.jpg)

# DIY Satellite Ground Station Workshop 

by [sashae](../profile/sashae) June 21, 2021 14:24

June 21, 2021 14:24 | Tags: [diy-satellite](../tag/diy-satellite), [eu](../tag/eu), [denmark](../tag/denmark), [open-weather](../tag/open-weather), [with:sophied](../tag/with:sophied)

----

On 18th September 2020, [Open-weather](https://open-weather.community/) (@sophied and @sashae) hosted a DIY Satellite Ground Station workshop at the Wagenhallen Community Centre in Stuttgart, DE. Nine participants spent one day thinking about community weather sensing, climate justice, using DIY amateur radio technology for environmental monitoring practices and how feminist thinking might alter gendered notions of technology and science. At the end of the workshop day, each participant had assembled, tested and successfully employed their own DIY Satellite Ground Station to capture and decode a live transmission from a National Oceanic and Atmospheric Administration (NOAA) satellite. The architecture of the workshop drew from the [DIY Satellite Ground Station Guide](https://publiclab.org/notes/sashae/06-26-2020/diy-satellite-ground-station) published by @sophied and @sashae on Public Lab in June 2020\.   

Founded in April 2020, Open-weather is a collective, artistic experiment in imaging and imagining the earth and its weather systems using DIY community tools. For more information on the project, see our [Public Lab Wiki](https://publiclab.org/wiki/open-weather) and [project site](https://open-weather.community/). For more detailed information on open-weather tools, principles and protocols, and some insight into how we work, see the [open-weather feminist handbook](http://almanacprojects.com/public-programme/open-weather-feminist-handbook).   

![The DIY Satellite Ground Station workshop was part of a two-day event supported by Akademie Schloss Solitude, called 'Sensing Environments with Care: Feminist Practices and Technologies of Embodiment. More info here: https://www.akademie-solitude.de/en/event/sensing-environments-with-care-feminist-practices-and-technologies-of-embodiment/](/i/42618.jpg "DSC00660_copy_2.jpg")

The DIY Satellite Ground Station workshop was part of a two-day event called 'Sensing Environments with Care: Feminist Practices and Technologies of Embodiment' supported by Akademie Schloss Solitude, Stuttgart and the Wagenhalle Kunstverein. More info on this event [here](https://www.akademie-solitude.de/en/event/sensing-environments-with-care-feminist-practices-and-technologies-of-embodiment/).

![image description](/i/42619.jpg "DSC00462_copy.jpg")

The workshop began with a satellite decoding demonstration by @sophied and @sashae.

![image description](/i/42631.jpg "DSC00486.jpg")

While @sashae oriented a turnstile antenna toward the orbiting path of NOAA 18, @sophied adjusted for the doppler shift, checked the bandwidth and managed the live-decoding process using CubicSDR and WXtoImg software. While demonstrating, @sophied and @sashae spoke about the process of decoding NOAA satellite transmissions.

![image description](/i/42632.png "202009181140-pristine.png")

The resulting image included two channels of information: a left channel composed of near infrared data, and a right channel of mid- and far-infrared data. Characteristic of NOAA APT imagery, telemetry information was encoded in the film-like strips at the edges and in the centre. A large cloud mass hovered over Spain and France, while the Alps were faintly visible in Northern Italy. These features sparked discussions on the local weather in Germany and how it might relate to the meteorological systems of the Euroepean continent. In order to view the images in more detail, the workshop participants returned to the Wagenhalle Kunstverein studio space.

![image description](/i/42622.jpg "DSC00518.jpg")

After further describing and analysing the image decoded in the demonstration, @sophied and @sashae presented the feminist principles behind #open-weather. This included a discussion of the politics of location, the role of our bodies, and key questions of accessibility and power in relation to DIY technology practices and environmental sensing.

![image description](/i/42633.jpg "DSC00527.jpg")

The conversation grew to include topics of nature-culture relationships, questioning the gendered assumptions behind radio technology, and thinking about the meaning of weather as both meteorological and more-than-meteorological (following Neimanis and Hamilton, 2018).

![image description](/i/42623.jpg "DSC00666.jpg")

After a morning of conversation, the afternoon began with a tutorial on software. Participants downloaded and installed the software defined radio and satellite decoding software suited to their operating systems and personal computers.

![image description](/i/42634.jpg "DSC00533.jpg")

While some participants (with older Mac OS's and Windows computers) downloaded WXtoImg for satellite signal decoding, others compiled NOAA APT 1.2.0, an open-source satellite signal decoding software created by Martin Bernardi and several other collaborators. A step by step guide for compiling NOAA APT on Mac computers running Catalina is available via the Open-weather Public Lab Wiki [here](https://publiclab.org/notes/sashae/07-02-2020/how-to-compile-noaa-apt-1-2-0-on-mac).

![image description](/i/42624.jpg "DSC00544.jpg")

Once everybody had acquired the necessary software, @sophied and @sashae explained the hardware. Each participant received their own turnstile antenna, RTL-SDR dongle, cables and adapters for personal use.

![image description](/i/42625.jpg "DSC00593.jpg")

The group then walked to a nearby community garden to put everything together.

![image description](/i/42626.jpg "DSC00574.jpg")

Antennas were assembled manually. Adapters were connected to RF cables and RTL-SDR dongles were plugged into USB ports.

![image description](/i/42635.jpg "DSC00603.jpg")

A memorable moment occurred when hardware and software was all linked together, and the first sounds of the radio environment emerged from computer speakers!

![image description](/i/42627.jpg "DSC00584.jpg")

This sparked conversation about radio wave propagation, the location of the community garden as a site of radio reception and the relationships between nearby infrastructure or buildings and the noise, gaps or static in the radio spectrum.

![image description](/i/42628.jpg "DSC00607.jpg")

In order to become comfortable adjusting frequency, bandwidth and modulation type, participants explored the radio spectrum through their own hardware and software ecosystems. An important step was to practice audio-recording via CubicSDR software, so that we could be sure that audio files were saving correctly on personal computers.

![image description](/i/42629.jpg "DSC00655.jpg")

Shortly after 6pm, the group assembled in a circle in the Wagenhalle community garden, ahead of the orbit of NOAA 19 over Stuttart. In sync with each other and the satellite, the group then tuned-to and recorded the 11-minute transmission of NOAA 19\. The characteristic sound of the satellite, emerging from everyone's computer speakers, echoed throughout the garden.

The DIY Satellite Ground Station workshop was an experiment in collective practice, environmental pedagogy and feminist thinking. Participants were able to keep their kit at the end of the day, and have since continued to decode NOAA satellite passes and to upload recordings to the #open-weather [archive](https://open-weather.community/archive.html).

For their generous support, energies and contributions to the hosting of the workshop, @sophied and @sashae would like to thank Elke aus dem Moore, Sophie-Charlotte Thieroff, Sophia Sadzakov, Helmut Dietz, Sander Wickersheim, Silke Pflüger, Marieanne Roth, Akademie Schloss Solitude and Wagenhalle Kunstverein. For their participation and contributions to the open-weather project, we thank Nerea Calvillo, Naomi Waltham-Smith, Jasmin Schädler, Sybille Neumeyer, Christina Maria Pfeifer, Martina Gunkel, Hannes Schwertfeger, Elise Bienzle and Oliver Storz.