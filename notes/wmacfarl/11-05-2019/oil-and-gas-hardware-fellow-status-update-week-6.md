---
title: "Oil and Gas Hardware Fellow Status Update: Week 6!"

tagnames: 'water-quality, turbidity, oil-and-gas, oil-and-gas-water-trio'
author: wmacfarl
path: /notes/wmacfarl/11-05-2019/oil-and-gas-hardware-fellow-status-update-week-6.md
nid: 21392
uid: 424597

cids: 25803

---

![](https://publiclab.org/public/system/images/photos/000/036/218/original/cell_phone_turbidity.jpg)

# Oil and Gas Hardware Fellow Status Update: Week 6!

by [wmacfarl](../../../profile/wmacfarl) | November 05, 2019 01:41

November 05, 2019 01:41 | Tags: [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [oil-and-gas](../tag/oil-and-gas), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio)

----

My work during this last week was focused on two different big things. The first was prepping and doing outreach for our upcoming [Open Hour on November 12th](https://publiclab.org/openhour "https://publiclab.org/openhour"). We are all doing planning and outreach to bring a group of people together to discuss issues around oil, gas, and water monitoring. It looks like we will have a lot of really amazing and knowledgeable people with a lot of different backgrounds and experiences and I'm really looking forward to the conversations.

This Open Hour conversation is at approximately the halfway point of our fellowship work and we hope that it will help us start to synthesize the different strands of research and investigation that we've been doing so far as well as give us some new ideas and direction for the second half of our work.

Apart from the Open Hour, the main thing I've been working on is a prototype for a simple turbidity sensor/data logger kit. I had previously been planning on spending a lot of my time extending the [sensor documentation that I've been working on](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors), as well as further research on sensor calibration, but after some conversation and discussion I decided to switch gears a little bit and work on developing a very simple sensor-kit that we could try to get out into people's hands.

Developing a very simple kit like this poses some questions about how to display sensor-data in a useful way that doesn't require too much extra hardware or software. As one possible answer to this question, I started working on a turbidity sensor prototype that uses a USB-Keyboard interface to send data from the sensor to your computer or cell phone. So you plug the sensor into your usb port, place it in the water you want to measure, and turn it on. When it's on, it just starts typing out the data as it takes measurements, allowing you to put it into a spreadsheet or any other piece of computer software.

This way of getting data from the sensor to the computer is a little bit strange, but it has a lot of advantages:

- It requires no additional hardware or software -- no driver installation, no circuit-building complications
- It puts data directly wherever the user wants it (such as a spreadsheet) in an easily readable format
- It works automatically with all operating systems, kinds of computers, and even most cell phones
- It interfaces with the computer and outputs data in a way that is really easy to write additional software wrappers around if you want to do something fancier in a web app or even cell-phone app

I'm really excited about exploring the possibilities of this kind of data-logging, starting with the turbidity sensor but extending it to the other DF Robot liquid sensors and beyond -- I think it is a very fruitful way to think about making it easy to get quantitative data from basic, cheap, DIY sensors.  

I will be posting some of this ongoing design work, along with thoughts and questions about how to make these tools useful and accessible in the following week and I hope to return to the process of documenting other sensors as well as calibration processes as well, with some new lessons from this simple kit design.