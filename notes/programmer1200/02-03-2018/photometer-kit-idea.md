---
title: Photometer Kit idea 
tagnames: arduino, diy, kit, water-quality, turbidity, barnstar:basic, photometer, activity:turbidity, community-kits-prep, activity:prototype, activity:photometer
author: programmer1200
path: /notes/programmer1200/02-03-2018/photometer-kit-idea.md
nid: 15672
uid: 509305

---

# Photometer Kit idea 

by [programmer1200](../profile/programmer1200) February 03, 2018 05:39

February 03, 2018 05:39 | Tags: [arduino](../tag/arduino), [diy](../tag/diy), [kit](../tag/kit), [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [barnstar:basic](../tag/barnstar:basic), [photometer](../tag/photometer), [activity:turbidity](../tag/activity:turbidity), [community-kits-prep](../tag/community-kits-prep), [activity:prototype](../tag/activity:prototype), [activity:photometer](../tag/activity:photometer)

---------

\*\*Project: Photometer kit \*\*

**Design : 1.0 version**

**Zachary Marlow OPEN source**

A photometer measures the
intensity of a light and the can be used to determine the amount of light being
blocked by the sample. The amount of light can help determine suspended solids
and the quality of the water sample

In my design the photometer is
mostly 3d printed and has a total of four 3d printed parts. There is also the
light source (modified laser pointer), GA1A1S202WP sensor (adafruit), Arduino
Nano . There is a small area where
a custom filter can be added if wanted. The entire device can fit completely in
one hand.

**Size**

Total size : 80 mm x 30 mm

**Cuvette**

The Cuvettes
sold by Pubic Labs works perfect for this application and very affordable.

\*\*Light Source \*\*

In my design, I wanted to keep
the overall price down, to allow for this to happen the light source needed to
be creative. Dollar General sells a laser pointer for $3, by removing the lens
you essentially convert the laser into a red diode.

**Method of running the Photometer**

Connect the Arduino Nano to your
computer and launch the code provided using the Arduino Compiler, once
successfully uploaded launch Arduino Serial Graph. Insert a control sample into the photometer
to get a base level, copy and paste this data into excel or google docs. Now insert
the test sample and repeat these steps for each sample you want to test.

**To determine loss:**

Sample = S, C= Control, R =
Remainder

S/C=R-1

R-1= Loss

**Proof of concept test:**

Control: Distilled Water

Sample 1: 1/3 Coffee Grounds 2/3
Water

Sample 2: 2/3 Coffee Grounds 1/3
Water

In this test, I created two
different samples each with different amounts of coffee in them. I went one by
one starting with the control of course just to create a base line on the
amount of light. Next went sample one and then sample 2, I copy and pasted each
data into google docs and created this chart.

![image description](https://publiclab.org/system/images/photos/000/023/442/large/chart_%283%29.png "chart_(3).png")

From this data, it can be determined
that Sample 1 blocked a total of 14.51 %~ of the light and Sample 2 blocked
18.32%~ of the light.

**Coding the Arduino:**

Now in this project there is a
little bit of coding necessary but for the most part all you must do is load
the code. It has already been coded and prepared for upload. For those who have
interest in coding I have posted the code below. Most of this is the generic code
provided by Adafruit, I just took out a few things lines to make it a little
easier to transfer the data to excel.

**Code: Copy everything between the lines**

---------

int sensorPin = A0; // select the input pin for the potentiometer

float rawRange = 1024; //
3.3v

float logRange = 5.0; //
3.3v = 10^5 lux

void setup()

{

analogReference(EXTERNAL); //

Serial.begin(9600);

Serial.println("Adafruit Analog Light
Sensor Test");

}

void loop()

{

// read the raw value from the sensor:

float rawValue = analogRead(sensorPin);

Serial.println(rawValue);

delay(500);

}

float RawToLux(int raw)

{

float logLux = raw \* logRange / rawRange;

return pow(10, logLux);

}

---------

**Photos of the Photometer:**

\*\*![image description](https://publiclab.org/system/images/photos/000/023/441/large/27368990_10156034872645995_341684662827132407_o.jpg "27368990_10156034872645995_341684662827132407_o.jpg") \*\*

**![image description](https://publiclab.org/system/images/photos/000/023/439/large/27540558_10156034873355995_5450698835579126199_n.jpg "27540558_10156034873355995_5450698835579126199_n.jpg")**

---------

---------