---
nid: 14689
title: How to power the KnowFlow?
path: public/static/notes/rockets/07-27-2017/how-to-power-the-knowflow.md
uid: 492583
tagnames: power,data-logging,knowflow,question:knowflow,question:data-logging-power
---

# How to power the KnowFlow?

###What I want to do or know
Because the KnowFlow is based on arduino system. So you can use 2 way to power KnowFlow. One way is just use a usb cable and power bank within 5v to power it, the other way is just use a 7.4~9v DC power or adapter to power it .

###Background story
@shanlter @rocket Thanks for the suggestion of the power bank. My biggest question, particularly related to the power bank in the link, was the voltage requirement of the KnowFlow. The DFRobot power unit was a 7.4V 2500mAh, while the item in the link was unknown (maybe 3.7V?). I also looked at a few power banks for the iPhones and the voltage for those was generally unspecified, but likely 5V.

hi @madtinker, I know what you worry about it. I will say that the power bank is oK, since the main board is arduino uno. The power input will be 2 ways, the usb will be accepted by 5v which is almost all of the usb power bank use. the other input is for the battery like li-battery which is from 7.4~12v. If you use a li-battery like 7.4v, the voltage will be low to 5v by the chip on the board. So don't worry about it. Both them will be ok. And I think I will put your question into FAQ. Would you mind me to do that?

@rockets Yes! that is exactly what I was concerned about. I'm too new at this to figure out what's an intelligent Uno question. I think a fundamental bit of confusion I had related to the difference between the voltage in at the barrel plug and the voltage in at the mini-USB. This is my understanding: the barrel plug requires greater than 5V since the power is conditioned down to 5V. If it is exactly 5V, the Uno ends up being underpowered. The micro-USB takes in exactly 5V since that is the established standard, controlled voltage from a traditional USB port on a computer. My question is really: can I use a 5V power pack on the barrel connection. It seems that you think it's okay. Which is perfect for my application so I hope that it is correct.
I'm trying a bunch of combinations. I purchased a Standard USB to barrel cable to test using an iPhone-type power pack. I also purchased the same 7.4V power pack and charger that @shanlter used (per pictures). [I sell blacksmithing items to finance my Watershed Reclamation efforts - had a good chunk of sales over 4th of July so I'm splurging a bit on stuff.]
No problem with you putting the notes in the FAQ. Very much appreciated.
