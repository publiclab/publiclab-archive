---
title: 'S4: Small Satellites for Secondary Students'
tagnames: spectrometer, balloon-telemetry-kit, sensor, first-time-poster
author: RocketScientist
path: /notes/RocketScientist/04-11-2019/s4-small-satellites-for-secondary-students.md
nid: 19041
uid: 583835

---

![](https://publiclab.org/public/system/images/photos/000/031/421/original/fullsizeoutput_acb3.jpeg)

# S4: Small Satellites for Secondary Students

by [RocketScientist](../profile/RocketScientist) April 11, 2019 23:06

April 11, 2019 23:06 | Tags: [spectrometer](../tag/spectrometer), [balloon-telemetry-kit](../tag/balloon-telemetry-kit), [sensor](../tag/sensor), [first-time-poster](../tag/first-time-poster)

----

A project I have been working on (ARLISS for the past 20 years - inventors of CanSats and CubeSats), in various versions over the years, is S4 - science payloads for amateur rockets and high altitude balloons - and even LEO satellites, for secondary school students.   The current format is a PocketQube - 1/8 of a CubeSat - 50mm on a side.

  
The current open source version is a very high powered ARM Cortex M4 Arduino based instrument with lots of sensors:

  
- GPS to 80 km
- barometric pressure to 100k' MSL
- humidity
- total volatile organic compounds: CO, alcohols, 
- eCO2,
- internal and external temperature,
- IMU - 3D acceleration, gyroscope, magnetometer
- particulate matter spectrometer: PM1.0, PM2.5, PM5.0
- 410-940 nm 18 channel light spectrometer,
- 640x480 visible light camera (ground facing), (intend to upgrade to Public Labs false color work)
- 30x24 thermal imaging camera (ground facing - coaxial with visible camera),
- omnidirectional beta, X-ray and gamma radiation spectrometer < 1 MeV,
- lightning sensor to ~ 100 km range,
- solid state Flash storage,
- telemetry via unlicensed spread spectrum LoRa at 900 MHz.

We have completed a fairly robust open source Arduino/C/C++ software suite for data collection and telemetry.   3D printed enclosures.   Recovery systems.   Deployment.  The system is open source and rather inexpensive - a few hundred $ in parts for the full up complement.  Of course, when packaged for LEO the cost goes up though only a subset of the sensors make sense in orbit.

  
We can, with our colleagues in rocketry, put up these payloads in amateur sounding rockets (with either captive recovery or deployed for independent recovery under parachute) or as payload under high altitude balloons to altitudes ranging from 1000' MSL to over 100,000' MSL' and we can sample the atmosphere column, look as the ground, and look at the sky.

  
What I would like some help with helping nail down some the interesting science we seem capable of doing with these sensors - in the atmosphere column up to the mesosphere with aerosols as well as the ground. 

  
It seems we can do some interesting crowd sourced citizen science about the atmosphere and about crops, vegetation - soil moisture?   So maybe we can also look at ways at crowd sourcing data analysis.

  
Help.  Looking for collaborators.

  
Ken