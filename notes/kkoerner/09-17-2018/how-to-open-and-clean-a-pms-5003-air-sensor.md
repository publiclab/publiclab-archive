---
title: 'How to Open and Clean a PMS 5003 Air Sensor'
tagnames: teardown, air-quality, pollution, sensor, airpollution, air-sensors, purpleair, plantower, activity:purpleair, pms-5003, activity:plantower
author: kkoerner
path: /notes/kkoerner/09-17-2018/how-to-open-and-clean-a-pms-5003-air-sensor.md
nid: 17133
uid: 442666

---

![](https://publiclab.org/public/system/images/photos/000/026/588/original/IMG_20180917_134236.jpg)

# How to Open and Clean a PMS 5003 Air Sensor

by [kkoerner](../profile/kkoerner) September 17, 2018 19:25

September 17, 2018 19:25 | Tags: [teardown](../tag/teardown), [air-quality](../tag/air-quality), [pollution](../tag/pollution), [sensor](../tag/sensor), [airpollution](../tag/airpollution), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [plantower](../tag/plantower), [activity:purpleair](../tag/activity:purpleair), [pms-5003](../tag/pms-5003), [activity:plantower](../tag/activity:plantower)

----

Inside the PMS 5003

Looking to get inside this sensor to do maintenance or
curious about what it looks like on the inside? We had a malfunctioning Purple
Air channel, so we swapped out the PMS 5003 in our PurpleAir and opened the old
malfunctioning sensor up. Here's more on how to open a PMS5003 sensor and clean
it, while keeping it intact.![image description](/i/26589.jpg "IMG_20180917_134236.jpg")

Materials:

- X-acto knife or small blunt utility knife
- Small electrical screw driver (Phillips head)
- Small electrical screw driver (flat head)
- Q-tips
- Distilled water

\_  
Opening the Outside Cover\_

The easiest way to leave the outside blue/silver cover
intact is to shimmy under it with an X-acto knife (or other, less sharp utility
knife if you have one) and lift and hold the edge on each half of the metal
plating open with a small electronics screwdriver (see the pictures below). Be very careful if you use a sharp X-acto knife like we did, always face the blade away from you and if you have a blunt utility knife use that instead. If you can get under the metal plating with just a small flat head electronics screw driver that's another good option![image description](/i/26590.jpg "IMG_20180917_132817.jpg")

\_  
\_

It's easiest to start on the side with the tan connection port on it, as you can use the port to get under the metal outside of the sensor. The goal is to get under the metal plating with the Xacto-knife and bend the metal up slightly to lift it off of the black slide clips the metal is attached to. ![image description](/i/26592.jpg "IMG_20180917_132843.jpg")

Follow the same process around each half of the sensor's metal exterior. Be careful for springs falling out, there are 4 springs in the sensor and they will jump out once you get each side open, so it's best to work over a large flat surface so they don't fall on the floor and get lost.

_Taking out the Circuit Board_

Once you have the metal off of the sensor you should be able
to see the inside circuit board on one side of the sensor and the laser and fan
plug on the other. Disconnect the fan plug by pulling the red black and yellow
wire until it dislodges from the back of the board. ![image description](/i/26593.jpg "IMG_20180917_133210.jpg")

Flip the board over and you'll see a small H-shaped plastic
cover over the connection port. Slide that out by hand and it will reveal the
rest of the board. ![image description](/i/26594.jpg "IMG_20180917_133746.jpg")

There are three screws on the board, use a small Philips
head screwdriver to remove them. Then, you can slide the board out. Before you
handle the circuit board make sure to ground yourself against a metal surface
so you don't fry the board with static.

The easiest way to slide the circuit board out is to take a
small screwdriver and lever it under the board through the connection port hole.
Once you slide it out you can start cleaning the sensor. ![image description](/i/26595.jpg "IMG_20180917_134157.jpg")

![image description](/i/26596.jpg "IMG_20180917_134149.jpg")

_Cleaning the Sensor_

We used a method from the Shinyei PPD60PV datasheet
involving distilled water and q-tips. Take a small amount of distilled water
and dip one end of a q-tip in. Carefully go over the lens of the sensor with
the damp q-tip and the IR receiver located opposite of the lens. Use the other
end of the q-tip to gently dry off the sensor and wait a few minutes for it to
air dry. Make sure to not to touch the tips of the q-tip with your hands, as
the oils from your hands could get on the q-tip and may affect the sensor.

![image description](/i/26597.jpg "IMG_20180917_134944.jpg")

Use the q-tip to clean the rest of the inside surface of the
sensor. Ours had a small spider in it (RIP little guy) who made a home in our
sensor, causing it to malfunction. Make sure you get any dirt or debris on the
inside surface of the metal and plastic.![image description](/i/26598.jpg "IMG_20180917_135519.jpg")

_Reassembling the Sensor_

Reassembly is relatively straightforward. Once the sensor
components are dry (about 5 minutes), place it the board back into the plastic
case, threading the cable through the hole in the plastic. Reconnect the fan cable
to the back side of the board and flip the sensor so the board is visible.
Screw in the three screws that attach the board to its plastic case. Insert the
H-shaped plastic cover into the slot over the connection port. Make sure the
springs are back in the holes on each side of the sensor. Then, slide the metal
covers over each side of the assembled sensor. You may have to press the metal
down over the black slide clips, but if it's not too bent, they should click
back into place. ![image description](/i/26599.jpg "IMG_20180917_143931.jpg")

_Testing the Sensor - UPDATE 10/08/18_

For our first test of the repaired sensor, we used an Arduino mega and some adapted code from [Adafruit](https://learn.adafruit.com/pm25-air-quality-sensor/arduino-code). Below is a picture of the setup.![image description](/i/26850.jpg "IMG_20180918_111431.jpg")

  
![image description](/i/26851.jpg "IMG_20180918_114141.jpg")

  
![image description](/i/26852.jpg "IMG_20180918_114839.jpg")

  
For some reason, this did not track well at all with the PurpleAir, so we initially thought the sensor may still be broken and the repair may have failed. However, this may have been due to our code or the way our sensor was connected to the board. Still working on this, but once I have it I'll post a graph of our PurpleAir values vs our repaired PMS5003\. 

For our second test, we decided to insert the repaired sensor back into the PurpleAir and see if it tracked with the other operational Channel A of the PurpleAir sensor. Taking apart a PurpleAir and swapping out sensors is relatively easy, if there's a desire for a similar guide or some tips, leave a comment and we can do a similar tutorial. Below are some early comparison graphs of the repaired sensor, note that the repair happened at around 11:30 and the repaired sensor was Channel B

  
![image description](/i/26846.png "CAC_10.08.18_11.30_Replacement.png")

  
  
  
![image description](/i/26847.png "CAC_10.08.18_11.30_Replacement_2.png")![image description](/i/26848.png "CAC_10.08.18_11.30_Replacement_3.png")

  
These graphs seem to track as well as before the repair took place. Before the repair, we were using a brand new PMS5003 we inserted into Channel B, which was running for about a month. This suggests that, despite our first test, the repair was most likely a success. 

Since it's only been a few hours, we'll keep monitoring how well these track (and maybe have an R^2 value over a few days or so), but for now it tentatively looks like you can clean and repair a PMS5003 and fix a broken channel in a PurpleAir. However, your mileage may vary if you try to compare different code or configurations of the PMS5003 to the PurpleAir data. 

Thanks for reading and
good luck!