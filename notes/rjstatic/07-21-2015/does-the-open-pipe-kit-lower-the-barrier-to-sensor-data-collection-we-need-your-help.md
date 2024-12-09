---
title: Does the Open Pipe Kit lower the barrier to sensor data collection? We need your help.
tagnames: kit, blog, monitoring, environmental, open-pipe-kit, opk, open, pipe
author: rjstatic
path: /07-21-2015/does-the-open-pipe-kit-lower-the-barrier-to-sensor-data-collection-we-need-your-help.md
nid: 12084
uid: 174

---

![](https://publiclab.org/public/system/images/photos/000/010/745/original/opk-steps.jpg)

# Does the Open Pipe Kit lower the barrier to sensor data collection? We need your help.

by [rjstatic](../profile/rjstatic) July 21, 2015 06:13

July 21, 2015 06:13 | Tags: [kit](../tag/kit), [blog](../tag/blog), [monitoring](../tag/monitoring), [environmental](../tag/environmental), [open-pipe-kit](../tag/open-pipe-kit), [opk](../tag/opk), [open](../tag/open), [pipe](../tag/pipe)

----

### What I want to do
More and more we're able to capture the data around us and send it to the Internet. But do we have control of our data? What if a corporation hasn't made a widget for what we want to capture? The goal of the [Open Pipe Kit project](http://openpipekit.org) is to democratize the Internet of Things.

The current Open Pipe Kit approach optimizes for the following:

- Prioritize users' freedom of choice with modular sensor and database drivers.
- "Frameworky" enough to build a User Interface to allow the average person to pipe data while still maintaining developer happiness.
- Use of off the shelf hardware.

###My attempt and results
There are three major parts of the Open Pipe Kit project: 

1) The [Open Pipe Kit Bakery](http://openpipekit.github.io/opk-bakery/) is a form based User Interface application that generates a pipe running on a USB Thumb Drive. This is our proof of concept attempt at lowering the barrier to entry for nonprogrammers. The web app knows what sensor and database drivers there are by pulling data from the Open Pipe Kit packages site. Submit your own OPK Package there and you'll see it included in the OPK Bakery. Dooooo it. It's ok if things break.

2) The [Open Pipe Kit Developer Standards](http://openpipekit.github.io/wiki/index.html#!developer.md) that describe how Command Line Interfaces can be used in a modular way to pull data from sensors and push that data to databases. I've created an "experimental" category there which is starting to look kind of safe but there is still more discussion to be had around it how it plays with things like the Bakery which is just a prototype afterall.

3) The [Pirateship disk image](http://openpipekit.github.io/pirate.sh/) for Raspberry Pi, that when running, looks for a file on a USB Thumb Drive named `autorun.sh` and launches it. This simplifies the Raspberry Pi experience into something a bit more like the Arduino experience but with all the power of Linux. The Pirateship Disk Image also includes the `pirateship` Command Line Interface that has awesome little gems for connecting to WiFi networks. Add the command `pirateship adapter <wifi network name> WPA <wifi password>` to a file named `autorunonce.sh` on your USB drive and your Raspberry Pi will connect to your wifi network.

###Questions and next steps
There are two questions, that if the answer is yes to both, then we're onto something.

1) The first question is "Do the OPK Standards make developers happy?" A group of about a dozen of us have talked about this a lot at the [OPK Hangout calls on Thursday nights](http://openpipekit.github.io/wiki/index.html#!developer.md#Support) for the past six months and we seem pretty happy about this approach. We could use more voices but most importantly we could use you trying to make command line interfaces for sensors and sharing them back along with your experiences.

2) The second question is "Does the Open Pipe Kit bakery lower the barrier to collecting data with sensors?" The Bakery is the __fourth iteration__ of our experiments with lowering the barrier to entry. While we have validated some aspects of the OPK Bakery with past prototypes, this thing is far from well tested. 


###Why I'm interested
I want pulling data from sensors and pushing it somewhere to be a solved problem. I want it to be boring like hammers and nails. I want hardware for doing this on the shelves of hardware stores. I want us all to have the ability to collect and control data in the Internet of Things. 

Why? Because I think we can make the world a better place when we have a better understanding of our environment. Particularly in our ability to affect the productive capacity of small scale agriculture. I believe an increase in that productive capacity increases the resilience of our communities and their ability to forge their own future that would allow us to reject endless war and an exploitive financial system.

-- R.J. Steinert