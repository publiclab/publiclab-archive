---
nid: 21316
title: How can I calibrate a turbidity sensor?
path: public/static/notes/wmacfarl/10-28-2019/how-can-i-calibrate-a-turbidity-sensor.md
uid: 424597
tagnames: water-quality,turbidity,question:water-quality,oil-and-gas,question:oil-and-gas,question:turbidity,oil-and-gas-water-trio,question:oil-and-gas-water-trio,oil-and-gas-water-quality,question:oil-and-gas-water-quality,simple-water-sensor-platform,question:simple-water-sensor-platform
---

# How can I calibrate a turbidity sensor?

I am using [this DFRobot Turbidity sensor](https://www.dfrobot.com/product-1394.html). The associated [wiki page](https://wiki.dfrobot.com/Turbidity_sensor_SKU__SEN0189) has some sample code that includes some sample code and some information about converting between voltage and NTU (Nephelometric Turbidity Unit)![image description](https://raw.githubusercontent.com/DFRobot/DFRobotMediaWikiImage/master/Image/_relationship_diagram.jpg)

But I would like to verify this relationship and explore how various factors effect its accuracy. To do that, I would like to have some way to calibrate these sensors.

It appears that distilled water should have a turbidity of less than .1 NTU. It appears that you can purchase Formazin solution for turbidity calibration that comes in a standard 4,000 NTU solution.

[https://www.amazon.com/Hach-246142-Formazin-Turbidity-Standard/dp/B00N3ZS45C/ref=sr\_1\_fkmr0\_1?keywords=4000+btu+turbidity&qid=1572274634&sr=8-1-fkmr0](https://www.amazon.com/Hach-246142-Formazin-Turbidity-Standard/dp/B00N3ZS45C/ref=sr_1_fkmr0_1?keywords=4000+btu+turbidity&qid=1572274634&sr=8-1-fkmr0)

Instructions that I have found on the internet say that you take this solution and "dilute it to the desired instrument range."

Is turbidity going to decrease linearly as I dilute this solution? So if I make a preparation of 1 part Formazin solution and 1 part distilled water, should it have a turbidity of 2,000 NTU?

Is this a good way to go about this calibration and testing? Are there other techniques I should look at?