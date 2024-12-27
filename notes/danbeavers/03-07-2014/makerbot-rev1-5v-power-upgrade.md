---
title: "Makerbot Rev1 5v Power Upgrade"

tagnames: '3d-printing, makerbot, maintenance'
author: danbeavers
path: /notes/danbeavers/03-07-2014/makerbot-rev1-5v-power-upgrade.md
nid: 10137
uid: 51

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/003/176/original/115_0039.JPG)

# Makerbot Rev1 5v Power Upgrade

by [danbeavers](../../../profile/danbeavers) | March 07, 2014 18:34

March 07, 2014 18:34 | Tags: [3d-printing](../tag/3d-printing), [makerbot](../tag/makerbot), [maintenance](../tag/maintenance)

----

###What I want to do
The 5v power supply on the Makerbot Rev1 is marginal and subject to failure.  I replaced the power supply with a Lucent JCO3A1-29M DC - DC Power Module.
###My attempt and results
My first attempt failed when I cut the on board 5v module leads with dikes.  Don't do this.  It will pull up the traces on the board.  Instead UNSOLDER the leads.  I used a solder tool with a split end to twist the lead off of the pad as I melted the solder with a soldering iron.

Wiring is illustrated in the following pictures.  The leads to unsolder are shown where the 5v lead is connected.  The 5v lead is the center lead of the old module.  The new module is mounted with hot glue.

[![board.jpg](https://i.publiclab.org/system/images/photos/000/003/174/medium/board.jpg)](https://i.publiclab.org/system/images/photos/000/003/174/original/board.jpg)


[![module.jpg](https://i.publiclab.org/system/images/photos/000/003/175/medium/module.jpg)](https://i.publiclab.org/system/images/photos/000/003/175/original/module.jpg)

###Why I'm interested
I don't want the motherboard to fail.  The stock 5 volt power module is rated for a maximum of 25 volts and should be operated at about 12 volts continuously, not 24 volts.