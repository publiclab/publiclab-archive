---
nid: 15351
title: Can we use WebJack as a JavaScript - Serial bridge?
path: public/static/notes/warren/12-11-2017/can-we-use-webjack-as-a-javascript-serial-bridge.md
uid: 1
tagnames: arduino,webjack,question:webjack,data-logging,question:webjack-challenge,webjack-challenge
---

# Can we use WebJack as a JavaScript - Serial bridge?

WebJack enables communication between an #arduino and a web browser, without any plugins. A cheap Arduino could be plugged into another Arduino to listen to it's serial communications, relaying them back and forth with a browser. This would be helpful for quickly connecting with any serial-enabled device (like an Arduino) without a serial driver on your computer. You could even do it via a phone -- any device that has a headphones port and a web browser.

This example using [webjack-firmata](https://github.com/publiclab/webjack-firmata) implements serial communication via firmata's `serialWrite`, but depends on StandardFirmataPlus.ino, which has [not yet been ported over to be WebJack compatible](https://github.com/publiclab/webjack-firmata/issues/19). This could allow webjack-firmata to act as a serial bridge.

## [](https://github.com/publiclab/webjack-firmata#install)