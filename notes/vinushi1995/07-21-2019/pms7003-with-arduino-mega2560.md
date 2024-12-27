---
title: "PMS7003 with Arduino MEGA2560"

tagnames: 'arduino, question:air-quality, include, pm2.5, first-time-poster, pms7003'
author: vinushi1995
path: /notes/vinushi1995/07-21-2019/pms7003-with-arduino-mega2560.md
nid: 20210
uid: 605818
cids: 25094,25096,26194
---

# PMS7003 with Arduino MEGA2560

by [vinushi1995](/profile/vinushi1995) | July 21, 2019 04:12

July 21, 2019 04:12 | Tags: [arduino](/tag/arduino), [question:air-quality](/tag/question:air-quality), [include](/tag/include), [pm2.5](/tag/pm2.5), [first-time-poster](/tag/first-time-poster), [pms7003](/tag/pms7003)

----

Hello, a first timer here. Thanks in Advance for anyone kind enough to offer me advice.

i have been trying to make an air quality monitor using the Aircasting app. To measure particulate matter i got the PMS7003 Sensor. Does anyone know a proper wiring diagram and a code that works with arduino? I've been trying some codes but have been encountering problems in most of them. This is the latest code i've been using and it seems to be giving values in 100s which is very high  

  

```

```
#include <br><br>SoftwareSerial mySerial(10,11); // Arudino Uno port RX, TX<br><br>void setup() {<br>  // for debuging<br>  Serial.begin(115200); <br> <br>  // Use software serial<br>  mySerial.begin(9600);<br>}<br><br>void loop() {<br>  // put your main code here, to run repeatedly:<br>  static int CheckFirst=0;<br>  static int pm_add[3][5]={0,};<br>  static int pm_old[3]={0,};<br>  int chksum=0,res=0;;<br>  unsigned char pms[32]={0,};<br> <br> <br>  if(mySerial.available()>=32)<br>  {<br><br>    for(int j=0; j<32 ; j++){<br>      pms[j]=mySerial.read();<br>      if(j<30)<br>        chksum+=pms[j];<br>    }<br><br>    if(pms[30] != (unsigned char)(chksum>>8)<br>        || pms[31]!= (unsigned char)(chksum) ){<br><br>     <br>    }<br>    if(pms[0]!=0x42 || pms[1]!=0x4d )<br> <br><br>  Serial.print("Dust raw data debugging :  ");<br>  Serial.print("1.0ug/m3:");<br>  Serial.print(pms[10]);<br>  Serial.print(pms[11]);<br>  Serial.print("  ");<br>  Serial.print("2.5ug/m3:");<br>  Serial.print(pms[12]);<br>  Serial.print(pms[13]);<br>  Serial.print("  ");<br>  Serial.print("10ug/m3:");<br>  Serial.print(pms[14]);<br>  Serial.println(pms[15]);<br>  }<br><br>  <br>   delay(2000);}
```<br>
```