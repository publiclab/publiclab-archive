---
nid: 37422
title: Enviro-Track
path: public/static/notes/rmd6502/11-13-2022/enviro-track.md
uid: 819526
tagnames: air-quality,pm2.5,pm10,first-time-poster,zoom:7,lat:29.630771,lon:-95.097572
---

# Enviro-Track

This project uses a FireBeetle ESP-32 module by DFRobot, a Solar panel + charge control board also by DFRobot, an 18650 battery, and a SDS011 particulate (pm2.5 and pm10) sensor.

We have an existing backend (written in Ruby on Rails) and firmware, and the goal is to improve the firmware (written in standard Arduino) so the sensor node can run indefinitely using just solar power.

Long term goal is to expand the node to be able to handle any type of sensor, so data can be collected anywhere based on need.  

I will post the github URLs after this Tuesday's call, and update the image to be a picture of the node.