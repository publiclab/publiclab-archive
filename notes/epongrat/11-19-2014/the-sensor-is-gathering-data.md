---
nid: 11369
title: Pollution to Solution: The sensor is gathering data!
path: public/static/notes/epongrat/11-19-2014/the-sensor-is-gathering-data.md
uid: 428825
tagnames: air-quality,umass-amherst,amherst-media,5-college,publiclab-at-umass
---

# Pollution to Solution: The sensor is gathering data!

###What I want to do
I want to measure ozone and NO2 in the air at two high schools in Springfield. Currently I would like to use code to program my sainsmart ozone module to talk to my adafruit datalogger shield through my arduino uno.

###My attempt and results
I met with Sarita Hudson, the Manager of the Pioneer Asthma Coalition to discuss the possibility of collecting air quality data in Springfield. She told me about the work that PVAC is doing in Springfield to reduce idling at schools. She was very encouraging and she has reached out to her contacts at two high schools asking if I could measure air quality there.


[![PVAC.jpg](https://i.publiclab.org/system/images/photos/000/008/013/medium/PVAC.jpg)]


With the help of my colleague Daniel Smoglia, we soldered wires to the ozone sensor. We tried finding code and tried wiring the sensor to the datalogger shield so we could collect data but we couldn't find any code online that worked.


I met with Professor Steve Brewer at UMass Amherst to work with him to develop code that would make my sensor talk to the SD card in my adafruit datalogger shield. He already had worked with code to program his CO2 sensor so we worked from that. We succeeded in gathering readings from the sensor! This is the code we used:

''' include "SD.h" include <Wire.h> include "RTClib.h" include <SPI.h> define redLEDpin 3 define greenLEDpin 4

const int chipSelect = 10;

int t = 0;

// CO2 calibration int analogPin = A0;

char datastring[80];

float vbaseppm = 4.15; //MUST BE SET ACCORDING TO CALIBRATION for base concentration float vhighppm = 3.01; //MUST BE SET ACCORDING TO CALIBRATION for high concentration float deltavs = vbaseppm - vhighppm; float A = deltavs/(log10(.01) - log10(.1)); // this is log10(base) - log10(high) float B = log10(.01);

void setup() {

Serial.begin(9600); Serial.println("time,voltage,co2ppm");

pinMode(10, OUTPUT);

if (!SD.begin(chipSelect)) {

Serial.println("Card failed, or not present"); // don't do anything more: return;

} Serial.println("card initialized."); }

void loop() { t = t + 1; int data = analogRead(analogPin); //digitise output from c02 sensor float voltage = data/204.6; //convert output to voltage

// Calculate co2 from log10 formula (see sensor datasheet)

float power = ((voltage - vbaseppm)/A) + B; float co2ppm = pow(10,power);

digitalWrite(greenLEDpin, HIGH);

File dataFile = SD.open("datalog.txt", FILE_WRITE);

dataFile.print(t); dataFile.print(","); dataFile.print(voltage); dataFile.print(","); dataFile.print(co2ppm,2); dataFile.print("\n");

//sprintf(datastring,"%d,%f,%f",t,voltage,co2ppm);

//dataFile.println(datastring);

dataFile.close();

Serial.print(t); Serial.print(","); Serial.print(voltage); Serial.print(","); Serial.print(co2ppm); Serial.print("\n");

digitalWrite(greenLEDpin, LOW);

delay(1000); }

'''


I tried again at home and I got this error: 

Sketch uses 16,784 bytes (52%) of program storage space. Maximum is 32,256 bytes.
Global variables use 1,143 bytes (55%) of dynamic memory, leaving 905 bytes for local variables. Maximum is 2,048 bytes.
avrdude: ser_open(): can't open device "/dev/cu.usbmodemfa131": No such file or directory
ioctl("TIOCMGET"): Inappropriate ioctl for device

###Questions and next steps
My first question is how do I fix this error. My second question is, what is the best way to power the sensor for days on end?

Tomorrow the plan is to meet with Professor Peltier at UMass Amherst to calibrate my sensor in his gas lab.
Soon I plan to purchase a battery pack and a power regulator. I also plan to adjust the code to it only takes readings at certain times of day.


###Why I'm interested
I'm interested in gathering air quality data because 1 in 5 kids in Springfield have asthma and I believe that it is related to pollution in the air that they breath.