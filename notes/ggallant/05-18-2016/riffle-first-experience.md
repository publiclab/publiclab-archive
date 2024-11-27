---
nid: 13123
title: Riffle first experience
path: public/static/notes/ggallant/05-18-2016/riffle-first-experience.md
uid: 427373
tagnames: riffle,riffle-beta
---

# Riffle first experience

###What I want to do

Yesterday (5/17/2016) I received a Riffle beta board in the mail. Nicely packaged with all the expected components. My goal is to evaluate the Riffle as a data logging tool.

###My attempt and results

The first 2 hours of using the board were a complete failure. My environment is a  quad core laptop running Fedora 23 Linux and I was unable to connect to the Riffle via USB. The device was usually detected but a encountered a number of errors including:

   No serial port detected.
   Invalid IOCTL.
   Unable to upload.
   Connected one time then failed.

I have other Arduino style boards with the CH-340 chip and they worked OK. I also booted Windows on the same laptop and was unable to do anything.

After a few hours and the following experiments it is working better:

   1. Tried different USB ports on laptop.
   2. Changed to a short USB cable.
   3. Attached the 3.7 LiPo battery.
   4. Added a powered USB hub.

With each of the hardware changes the results became more stable.

Eventually I was able to build and upload the three example sketches. Currently the blink and real time clock setup work without problem. The data logging example is random. During setup it always performs at least one reset (sometimes many) and then usually works.

I am guessing that there is a power problem. Either my laptop cannot supply sufficient power or the Riffle is consuming too much.

###Questions and next steps

The big question of course is "Why". Today I will:

  1. Undo and repeat yesterdays activities.
  2. Try with different computers.
  3. Examine signals with scope.
  4. Isolate the data logging reset problem.

I do have RTC and SD modules that can connect to standard Adruino for comparison. 