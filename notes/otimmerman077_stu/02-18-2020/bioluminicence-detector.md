---
title: Bioluminescence Detector
tagnames: arduino, water-sensing, sensors, first-time-poster, wateristic, with:amallozzi, zoom:6, lat:29.935895, lon:-90.109863, bioluminescence
author: otimmerman077_stu
path: /notes/otimmerman077_stu/02-18-2020/bioluminicence-detector.md
nid: 22841
uid: 626363

---

![](https://publiclab.org/public/system/images/photos/000/038/181/original/whatisbiolum.jpg)

# Bioluminescence Detector

by [otimmerman077_stu](../profile/otimmerman077_stu) February 18, 2020 05:24

February 18, 2020 05:24 | Tags: [arduino](../tag/arduino), [water-sensing](../tag/water-sensing), [sensors](../tag/sensors), [first-time-poster](../tag/first-time-poster), [wateristic](../tag/wateristic), [with:amallozzi](../tag/with:amallozzi), [zoom:6](../tag/zoom:6), [lat:29.935895](../tag/lat:29.935895), [lon:-90.109863](../tag/lon:-90.109863), [bioluminescence](../tag/bioluminescence)

----

[Omari\_Timmerman\_-\_District\_Poster\_2020.pdf](/i/38180.pdf)

Jyesi and Omari used an arduino and photo diode to pick up the wavelengths o light. Set it up in the range of 450nm-490nm to specifically pick up on the light that bioluminescence is usually in. We ended up doing 3 versions and version 3 was the successful one. So our future plans are to make this waterproof do if you think you can help please contact me. Or just any additional information.

  
# Current Build:

![image description](/i/38202.png "Wateristic_V3.0_Breadboard.png")

  
  
# Current Code:

int sensorPin = A2;

int sensorValue = 0;

const int high = 15; //set high parameter

const int low = 5; //set low parameter

**  
  
**

void setup(void) {

pinMode(A2, INPUT); //sensor

pinMode(2, OUTPUT); //red

pinMode(3, OUTPUT); //yellow

pinMode(4, OUTPUT); //green

Serial.begin(9600);

pinMode(sensorPin, INPUT); 

}

**  
  
**

void loop(void) {

sensorValue = analogRead(sensorPin);

float lightlevel = (sensorValue) \* 5.0; //amplifying signal

**  
**

Serial.print("Light Level: ");

Serial.print(lightlevel);  

**  
**

if (lightlevel < low) { //low, red light on

digitalWrite(2, HIGH);

digitalWrite(3, LOW);

digitalWrite(4, LOW);

Serial.println(" No Bioluminescence");

}

else if (lightlevel \>= high) { //high, green light on

digitalWrite(2, LOW);

digitalWrite(3, LOW);

digitalWrite(4, HIGH);

Serial.println(" Bioluminescence");

}

else { //medium, yellow light on

digitalWrite(2, LOW);

digitalWrite(3, HIGH);

digitalWrite(4, LOW);

Serial.println("Low Bioluminescence");

}

delay(10);

}