---
title: '1602 HD44780 LCD with 74HC595 Shift Register Help'
tagnames: question:general
author: nanawhite107
path: /notes/nanawhite107/07-04-2017/1602-hd44780-lcd-with-74hc595-shift-register-help.md
nid: 14616
uid: 510328

---

# 1602 HD44780 LCD with 74HC595 Shift Register Help

by [nanawhite107](../profile/nanawhite107) July 04, 2017 10:16

July 04, 2017 10:16 | Tags: [question:general](../tag/question:general)

----

I'm using an Arduino Uno for this project.

I set up a 1602 HD44780 LCD with the Arduino uno, and was able to get the "Hello World" example to run (easy peasy).

Here is the [74HC595 datesheet](http://www.componentschip.com/details/Texas-Instruments/74HC595D.html)

I need to run it on 3 Arduino outputs because the project I'm going to use the LCD with already needs a lot of pins. So, I ordered a 74HC595 Shift Register. I've tried 3-4 different ways to do this (from Googling), but only one of them has let me display text properly, but the "setCursor" doesn't work so I'm only able to write on the first row, and not the second. I am able to set the cursor column though.

Does anyone have a good example that I can use to try to get this running?
