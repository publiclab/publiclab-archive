---
title: HOBO 4-Channel Logger with Larger Battery
tagnames: kits, datalogger, hardware
author: norbert
path: /notes/norbert/07-23-2018/hobo-4-channel-logger-with-larger-battery.md
nid: 16766
uid: 542953

---

![](https://publiclab.org/public/system/images/photos/000/025/836/original/onelogger_0426s.jpg)

# HOBO 4-Channel Logger with Larger Battery

by [norbert](../profile/norbert) July 23, 2018 04:51

July 23, 2018 04:51 | Tags: [kits](../tag/kits), [datalogger](../tag/datalogger), [hardware](../tag/hardware)

----

Hobo model U12-008 is a reliable data logger for outdoor environments that can be connected to up to four temperature sensors. It only has the following disadvantage: a short battery life. The power supply is a puny CR-2032 coin battery (220mAh), which lasts around two years (with 1 hour logging intervals), though the manufacturer recommends replacing it every year. When the logger is in a remote field location, that is an inconveniently short time. Moreover, to change the battery one has to open the logger, work with tiny screws and, ideally, re-lubricate the rubber O-ring, which, depending on the weather, can be a hassle. I exchanged the battery holder of the U12-008 to prolong the battery life.

The CR-2477 is a 1000mAh coin cell battery with similar discharge characteristics as the CR-2032, but more than 4 times the capacity. It still fits into the logger body, although with a diameter of 24mm, instead of 20mm, it blocks one connector, so only 3 of the 4 channels remain usable. Given that the memory is small (64kB or 43,000 measurements), I figured that losing one channel is acceptable. The selection of battery holders available for the CR-2477 is limited. I went for the LIR2477 battery holder, which has two pins that need to be soldered.

![image description](/i/25837.jpg "twologgers_0420s.jpg")

The photos show i) two U12-008 Hobo data loggers, one with the standard battery and the other with the larger battery, ii) Battery holder with wire soldered to it, iii) modified data logger.

Procedure:

1. Unsolder the old battery holder. This is easy, but do not pull on the contacts too hard, otherwise the bottom contacts will come off, which cannot be fixed with resoldering.
2. Solder a short wire to the negative pin of the battery holder. This is the most difficult part, because it's not an easy connection to make. (I used an 18-gauge stranded copper cable with thick insulation - see photo.) Bend the contact before or after the soldering, otherwise it takes up too much vertical space.
3. Make sure a sensor cable is plugged into one of the connectors next
to the battery, otherwise one risks blocking two rather than only one
channel.
4. Bend the positive pin of the holder and solder it straight into the board.
5. Solder the wire to the positive contact. Done. Insert the battery.
6. I applied acrylic conformal coating to the new contacts to protect
them from humidity. I don't know whether that makes any difference, but
it's better to be safe.

![image description](/i/25839.jpg "holder_s.jpg")

![image description](/i/25845.jpg "onelogger_0426s.jpg")

Validation:

I tested the modified logger by tying several sensors together to see whether they measure the same temperature as an unmodified logger. Over a day at room temperature, the measured air temperatures remain well within 0.1 Celsius from one another, the same variation one typically finds between sensors/channels. So the accuracy of the measurements appears to be unimpaired.

Removing that battery from its holder is not easy. I practiced that, so I won't have to struggle with it in the field. Also, unlike the CR-2032, the CR-2477 is not a battery commonly found in stores, so it has to be ordered online before the day comes when even this battery needs to be replaced. I am hoping for a 5-year lifetime.