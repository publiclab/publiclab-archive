---
title: 'Introducing Pi Builder'
tagnames: raspberry-pi, blog, raspbian, with:warren, pi-camera, raspberry-pi-cameras, activity:raspberry-pi, activity:pi-camera, response:15289, response:9719, response:16180, pi-builder
author: icarito
path: /notes/icarito/10-21-2018/introducing-pi-builder.md
nid: 17262
uid: 448589

---

![](https://publiclab.org/public/system/images/photos/000/027/085/original/Screenshot_2018-10-04_at_4.52.43_PM.png)

# Introducing Pi Builder

by [icarito](../profile/icarito) October 10, 2018 03:13

October 10, 2018 03:13 | Tags: [raspberry-pi](../tag/raspberry-pi), [blog](../tag/blog), [raspbian](../tag/raspbian), [with:warren](../tag/with:warren), [pi-camera](../tag/pi-camera), [raspberry-pi-cameras](../tag/raspberry-pi-cameras), [activity:raspberry-pi](../tag/activity:raspberry-pi), [activity:pi-camera](../tag/activity:pi-camera), [response:15289](../tag/response:15289), [response:9719](../tag/response:9719), [response:16180](../tag/response:16180), [pi-builder](../tag/pi-builder)

----

The Public Lab [Kits Initiative](/kits) uses [Raspberry Pi cameras](/pi-camera) more and more, and was in need of a workflow to generate customized operating system images for specific needs such as the [Microscope](/micro) and [Lego Spectrometer Kits](/lego).

In general, while Raspberry Pi mini-computer boards are amazing, there's a significant barrier for many people to use them, which is the installation and configuration of the memory card with useful software -- like camera software, for example!

### Plug and play

We wanted to have a way to generate different pre-loaded SD cards, repeatably and reliably, for different uses. And we wanted people to be able to simply insert an SD card, plug in the camera and power, and start using the Raspberry Pi as a camera as quickly as possible.

We also had a desire to build a process whereby the community could participate in the construction of the operating system that we distribute with our kits and also to share recipes and ready-made images for usage in specific scenarios.

The default operating system image is meant to simplify the workflow for kit users, so these well-defined features needed to be set up:

- A WiFi hotspot with a \_captive portal \_(like airport WiFi) so you are prompted as soon as you connect
- A streaming web camera application
- Ability to run scripts (e.g. Timelapse)
- A friendly landing page with links to the above

I was contracted for this and so I had to come up with great shoulders to stand on in order to deliver all features! Disclosure: I am also Public Lab's part time Systems Administrator.

Fortunately thanks to the great work of the [Hypriot Project](https://github.com/hypriot/image-builder-rpi), and the Gitlab CI service, we are able to iterate quickly and collaboratively, from an orderly and flexible base.

**Please consider this release a Beta to try out**

## Download

**[☁️ Download latest combined image](https://gitlab.com/publiclab/pi-builder/-/jobs/106403228/artifacts/raw/hypriotos-rpi-combined.img.zip)**

## Documentation

The documentation is included with the combined image.
You may also read it [online](https://publiclab.gitlab.io/pi-builder/).

We also have a page for [Q&A, troubleshooting, and activity guides here](/pi-builder).


## Contributing

Adding a new "recipe" is quite easy -- it is possible to fork our [repository](https://github.com/publiclab/pi-builder), make your modifications and [open a pull request](https://github.com/publiclab/pi-builder/pulls), which our system will use to generate a new custom image. You can then download a fully built customized image ready to be burnt into your Pi¹.

**¹**: Tested on Pi Zero W only.

We'll be thrilled to see this repository evolve in alignment with the communities's needs.