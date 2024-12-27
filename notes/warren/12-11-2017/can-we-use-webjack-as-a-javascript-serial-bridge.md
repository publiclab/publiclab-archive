---
title: "Can we use WebJack as a JavaScript - Serial bridge?"

tagnames: 'arduino, webjack, question:webjack, data-logging, question:webjack-challenge, webjack-challenge'
author: warren
path: /notes/warren/12-11-2017/can-we-use-webjack-as-a-javascript-serial-bridge.md
nid: 15351
uid: 1

cids: 

---

# Can we use WebJack as a JavaScript - Serial bridge?

by [warren](../../../profile/warren) | December 11, 2017 15:43

December 11, 2017 15:43 | Tags: [arduino](../tag/arduino), [webjack](../tag/webjack), [question:webjack](../tag/question:webjack), [data-logging](../tag/data-logging), [question:webjack-challenge](../tag/question:webjack-challenge), [webjack-challenge](../tag/webjack-challenge)

----

WebJack enables communication between an #arduino and a web browser, without any plugins. A cheap Arduino could be plugged into another Arduino to listen to it's serial communications, relaying them back and forth with a browser. This would be helpful for quickly connecting with any serial-enabled device (like an Arduino) without a serial driver on your computer. You could even do it via a phone -- any device that has a headphones port and a web browser.

This example using [webjack-firmata](https://github.com/publiclab/webjack-firmata) implements serial communication via firmata's `serialWrite`, but depends on StandardFirmataPlus.ino, which has [not yet been ported over to be WebJack compatible](https://github.com/publiclab/webjack-firmata/issues/19). This could allow webjack-firmata to act as a serial bridge.

## [](https://github.com/publiclab/webjack-firmata#install)