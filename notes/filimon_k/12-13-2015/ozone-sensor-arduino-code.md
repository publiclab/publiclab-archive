---
nid: 12508
title: Ozone sensor arduino code
path: public/static/notes/filimon_k/12-13-2015/ozone-sensor-arduino-code.md
uid: 460113
tagnames: response:12506
---

# Ozone sensor arduino code

#include <SPI.h>
#include <SD.h>

#define chipSelect 10
unsigned long time;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  
  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("card initialized.");
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue0 = analogRead(A0);
  int sensorValue1 = analogRead(A1);
  int sensorValue2 = analogRead(A2);
  float voltage0 = sensorValue0 * 0.00488;
  float voltage1 = sensorValue1 * 0.00488;
  float voltage2 = sensorValue2 * 0.00488;
  
  // create datastring and SD card Logging
  String dataString = 
    String(time/1000) + "," + 
    String(voltage0) + "," +
    String(voltage1) + "," +
    String(voltage2);
    
    // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  File dataFile = SD.open("datafile.txt", FILE_WRITE);
  
  // if the file is available, write to it:
  if (dataFile) {
    dataFile.println(dataString);
    dataFile.close();
    // print to the serial port too:
    Serial.println(dataString);
  }
  // if the file isn't open, pop up an error:
  else {
    Serial.println("error opening datalog.txt");
  }
  Serial.println(dataString);
  
  time = millis();
  delay(1000);        // delay in between reads for stability
}
