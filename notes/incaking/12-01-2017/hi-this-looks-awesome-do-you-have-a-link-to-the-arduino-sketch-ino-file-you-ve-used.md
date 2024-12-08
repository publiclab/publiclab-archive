---
title: Hi, this looks awesome! Do you have a link to the Arduino sketch (.ino) file you've used?
tagnames: include
author: incaking
path: /notes/incaking/12-01-2017/hi-this-looks-awesome-do-you-have-a-link-to-the-arduino-sketch-ino-file-you-ve-used.md
nid: 15283
uid: 519451

---

# Hi, this looks awesome! Do you have a link to the Arduino sketch (.ino) file you've used?

by [incaking](../profile/incaking) December 01, 2017 03:27

December 01, 2017 03:27 | Tags: [include](../tag/include)

```

/\*

Ph And Temperature Sensing Sample Code

\* ph meter sensor data reading

\* real time temperature monitoring

Hardware List

\* 18B20 temperature sensor

\* dfrobot ph sensor

\* dfrobot bluno controller and IO expansion shield

\* Micro USB Cable for power and programming

Author: Lauren

Date: 2015/02/06

\*/

#include "OneWire.h"

int Temperature\_GreenPin = 2; //DS18S20 Signal pin on digital 2

int PH\_BluePin = 0; //Ph sensor pin on analog 0

//Temperature chip i/o

OneWire ds(Temperature\_GreenPin); // on digital pin 2

void setup(void) {

Serial.begin(9600);

}

float temperature,phValue,ecValue;

void loop(void) {

temperature = readTemperature();

phValue = readPh();

Serial.print("Temp: ");

Serial.print(temperature);

Serial.print(" degree PH Value: ");

Serial.println(phValue);

delay(100); //just here to slow down the output so it is easier to read

}

float readPh(){

int buf\[10\],temp;

for(int i=0;i<10;i++) //Get 10 sample value from the sensor for smooth the value

{

buf\[i\]=analogRead(PH\_BluePin);

delay(10);

}

for(int i=0;i<9;i++) //sort the analog from small to large

{

for(int j=i+1;j<10;j++)

{

if(buf\[i\]\>buf\[j\])

{

temp=buf\[i\];

buf\[i\]=buf\[j\];

buf\[j\]=temp;

}

}

}

unsigned long int avgValue=0;

for(int i=2;i<8;i++) //take the average value of 6 center sample

avgValue+=buf\[i\];

float phValue=(float)avgValue\*5.0/1024/6; //convert the analog into millivolt

phValue=3.5\*phValue; //convert the millivolt into pH value

return phValue;

}

float readTemperature(){

//returns the temperature from one DS18S20 in DEG Celsius

byte data\[12\];

byte addr\[8\];

if ( !ds.search(addr)) {

//no more sensors on chain, reset search

ds.reset\_search();

return -1000;

}

if ( OneWire::crc8( addr, 7) != addr\[7\]) {

Serial.println("CRC is not valid!");

return -1000;

}

if ( addr\[0\] != 0x10 && addr\[0\] != 0x28) {

Serial.print("Device is not recognized");

return -1000;

}

ds.reset();

ds.select(addr);

ds.write(0x44,1); // start conversion, with parasite power on at the end

byte present = ds.reset();

ds.select(addr);

ds.write(0xBE); // Read Scratchpad

for (int i = 0; i < 9; i++) { // we need 9 bytes

data\[i\] = ds.read();

}

ds.reset\_search();

byte MSB = data\[1\];

byte LSB = data\[0\];

float tempRead = ((MSB << 8) | LSB); //using two's compliment

float TemperatureSum = tempRead / 16;

return TemperatureSum;

}
```