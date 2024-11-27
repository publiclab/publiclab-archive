---
nid: 9317
title: Eye-Fi + BAP + Solar install = Win?
path: public/static/notes/natevw/09-12-2013/eye-fi-bap-solar-install-win.md
uid: 804
tagnames: balloon-mapping,live-streaming,photo-rig,eye-fi
---

# Eye-Fi + BAP + Solar install = Win?

##What I want to do

Broadcast our progress as my dad and I install solar PV panels on my roof, using the balloon kit for a great perspective.

##My attempt and results

So far it's going great :-)

**[solar.batsig.nl](http://solar.batsig.nl/)** should offer a live feed of our progress over the next few days. Right now it's updating every 10s since I was testing range, but when this battery runs out I'll likely bump it to a 1m/5m interval or so. Source code is at https://github.com/natevw/fishgoblub/tree/solar

##Questions and next steps

There's a lot of hops, so the live feed isn't always quite as reliable as I'd like. The biggest issue is probably battery life. I'm using http://chdk.wikia.com/wiki/Battery_Intervalometer which seems to help, but I suspect the Eye-Fi is a significant additional drain, especially at the edge of WiFi connectivity.