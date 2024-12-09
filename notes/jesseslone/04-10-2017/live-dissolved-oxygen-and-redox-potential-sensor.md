---
title: 'Live Dissolved Oxygen and Redox Potential Sensor'
tagnames: water-quality, dissolved-oxygen, wastewater, define, include, orp, water-sensors, wastewater-organic-matter
author: jesseslone
path: /notes/jesseslone/04-10-2017/live-dissolved-oxygen-and-redox-potential-sensor.md
nid: 14103
uid: 494770

---

![](https://publiclab.org/public/system/images/photos/000/020/117/original/IMG_0623.JPG)

# Live Dissolved Oxygen and Redox Potential Sensor

by [jesseslone](../profile/jesseslone) April 10, 2017 04:11

April 10, 2017 04:11 | Tags: [water-quality](../tag/water-quality), [dissolved-oxygen](../tag/dissolved-oxygen), [wastewater](../tag/wastewater), [define](../tag/define), [include](../tag/include), [orp](../tag/orp), [water-sensors](../tag/water-sensors), [wastewater-organic-matter](../tag/wastewater-organic-matter)

----

I'm using a variety of hardware, not all of which is open-source (my design is, but not the products themselves), to create a live feed on [io.adafruit.com](http://io.adafruit.com). You can view the feed at the following URL: [https://io.adafruit.com/jesseslone/dashboards/water-quality-sensor](https://io.adafruit.com/jesseslone/dashboards/water-quality-sensor)

# Overview

I am currently using a NodeMCU board based on the ESP8266, but I will be transferring the project over to Adafruit's feather ecosystem to take advantage of some additional wireless options. The ESP8266 has some impressive capabilities, like an onboard SSD that can be used for data logging, so that connectivity issues don't disrupt your data, etc. It also has a sleep mode, as do the Atlas Scientific boards, that could allow the device to run for at least a month on a rechargeable battery. The code is terrible in its current state, as there are currently no libraries for the Atlas Scientific boards that utilize their I2C capabilities.

These sensors are in a small wastewater treatment system. The test system does not discharge into waterways, and the treated water is used for landscaping irrigation. I'm trying to find a way to model what is referred to as BOD or biochemical oxygen demand (basically quantify the volume of biological waste) based on how the treatment volume responds to certain events, such as aeration. With that information, treatment parameters can be adjusted to reduce the release of ammonia and other compounds into waterways.

As a side benefit, constant monitoring can reduce pollution events by timely notification of mechanical failures. The next step is adding a feed that indicates when aeration starts and stops so that the data will make a little more sense.

# Dashboard

Let me discuss what you see on the current dashboard and then cover what I used to make the setup work.![image description](https://publiclab.org/system/images/photos/000/020/113/large/Screen_Shot_2017-04-09_at_10.16.13_PM.png "Screen_Shot_2017-04-09_at_10.16.13_PM.png")

The first thing you see is shown above, a few guages to show what the current readings are from the sensors. ORP is a measurement of the voltage potential in a solution. Oxidation and reduction reactions in a solution either absorb or release electrons. This leaves the solution with a surplus or deficit of electrons, which is measured with the ORP probe. Interestingly, the ORP state of wastewater gives a generally good indication of the bacterial activity that is happening. I'll post some more research later, but my understanding is that the DO and ORP readings above would indicate that the wastewater is likely to produce fillamentous bacterial growth, which is generally bad. Also, it is wasting energy in the aeration process. In this case, the business that uses this treatement plant is closed on the weekend, so there is no waste added, and the bacteria have consumed most of the available waste in the system.

After the guages, you can see a normalized graph that shows the all of the readings, scaled so they will all be visible. It goes back 7 days, and makes it pretty clear when the sensor setup failed to upload readings for about a day. Also, at the beginning of the feed, you can see where I was getting the sensors calibrated.![image description](https://publiclab.org/system/images/photos/000/020/115/large/Screen_Shot_2017-04-09_at_10.57.56_PM.png "Screen_Shot_2017-04-09_at_10.57.56_PM.png")

The last part is a running four hour graph of the DO and the ORP sensor. You can see on this graph that the readings do not always have a clear correlation. I plan on getting more data to determine what affects the ORP sensor.![image description](https://publiclab.org/system/images/photos/000/020/114/large/Screen_Shot_2017-04-09_at_10.16.45_PM.png "Screen_Shot_2017-04-09_at_10.16.45_PM.png")

# How it's Made

The materials that I am currently using:

- NodeMCU ESP8266 development board
- Solderless Breadboard
- An old oudoor control panel we had on hand
- DS18B20 temperature sensor
- Atlas Scientific DO kit
- Atlas Scientific ORP kit

Here is the Fritzing diagram:![image description](https://publiclab.org/system/images/photos/000/020/116/large/ShopSensorBoard_bb.png "ShopSensorBoard_bb.png")

The code is hacked together from the example code from Atlas Scientific along with code from Adafruit. The Atlas Scientific code was designed to use an Arduino as an interface via serial console, so I ended up hard coding the "R" that is sent to get a reading into the I2C code samples and pushing the results to AdafruitIO. It works, but it is not pretty:

```
// Adafruit IO Temperature & Humidity Example
// Tutorial Link: https://learn.adafruit.com/adafruit-io-basics-temperature-and-humidity
//
// Adafruit invests time and resources providing this open source code.
// Please support Adafruit and open source hardware by purchasing
// products from Adafruit!
//
// Written by Todd Treece for Adafruit Industries
// Copyright (c) 2016-2017 Adafruit Industries
// Licensed under the MIT license.
//
// All text above must be included in any redistribution.


// edit the config.h tab and enter your Adafruit IO credentials
// and any additional configuration needed for WiFi, cellular,
// or ethernet clients.
#include "config.h"
#include <Adafruit_Sensor.h>
#include <OneWire.h>
#include <DallasTemperature.h>
#include <Wire.h>                //enable I2C.
#define oxySensor1 97            //default I2C ID number for EZO D.O. Circuit.
#define redox1 98               //default I2C ID number for EZO ORP Circuit.

// Digital pin the DS18B20 is connected to. Do not use digital pins 0 or 1 since those conflict with the use of Serial.
#define tmpPin 12

OneWire oneWire(tmpPin);
DallasTemperature sensors(&oneWire);

// set up the 'temperature'  feed

AdafruitIO_Feed *temperature = io.feed("ds18b20");
AdafruitIO_Feed *dissolvedOxy = io.feed("shopdo");
AdafruitIO_Feed *normDO = io.feed("shop.do-norm");
AdafruitIO_Feed *redox = io.feed("shopredox");
AdafruitIO_Feed *redoxnorm = io.feed("shopredoxnorm");

void setup() {

  // start the serial connection
  Serial.begin(115200);
  Wire.begin();                //enable I2C port.

  // wait for serial monitor to open
  while(! Serial);

  // initialize DS18B20
  sensors.begin();
  // connect to io.adafruit.com
  Serial.print("Connecting to Adafruit IO");
  io.connect();

  // wait for a connection
  while(io.status() < AIO_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  // we are connected
  Serial.println();
  Serial.println(io.statusText());

}

void loop() {

  // io.run(); is required for all sketches.
  // it should always be present at the top of your loop
  // function. it keeps the client connected to
  // io.adafruit.com, and processes any incoming data.
  io.run();

  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  Serial.println("DONE");
  // After we got the temperatures, we can print them here.
  // We use the function ByIndex, and as an example get the temperature from the first sensor only.
  Serial.print("Temperature for the device 1 (index 0) is: ");
  Serial.println(sensors.getTempCByIndex(0)); 

  // save fahrenheit (or celsius) to Adafruit IO
  temperature->save(sensors.getTempCByIndex(0));

  //Get DO Level
  getDO(oxySensor1);

  //Get redox level;
  ORPread(redox1) ;

  // wait 5 seconds (5000 milliseconds == 5 seconds)
  delay(5000);

}

void getDO(int oxySensor) {                   //the main loop.
  char computerdata[20];           //we make a 20 byte character array to hold incoming data from a pc/mac/other.
  byte received_from_computer = 0; //we need to know how many characters have been received.
  byte code = 0;                   //used to hold the I2C response code.
  char DO_data[20];                //we make a 20 byte character array to hold incoming data from the D.O. circuit.
  byte in_char = 0;                //used as a 1 byte buffer to store in bound bytes from the D.O. Circuit.
  int time_ = 1800;                //used to change the delay needed depending on the command sent to the EZO Class D.O. Circuit.
  float DO_float;                  //float var used to hold the float value of the DO.
  char *DO;                        //char pointer used in string parsing.
  char *sat;                       //char pointer used in string parsing.
  float do_float;                  //float var used to hold the float value of the dissolved oxygen.
  float sat_float;                 //float var used to hold the float value of the saturation percentage.
  byte i = 0;                   //counter used for DO_data array.
  float do_norm;
 // if (Serial.available() > 0) {                                           //if data is holding in the serial buffer
 //   received_from_computer = Serial.readBytesUntil(13, computerdata, 20); //we read the data sent from the serial monitor(pc/mac/other) until we see a <CR>. We also count how many characters have been received.
 //   computerdata[received_from_computer] = 0;                             //stop the buffer from transmitting leftovers or garbage.
 //   computerdata[0] = tolower(computerdata[0]);                           //we make sure the first char in the string is lower case.
 //   if (computerdata[0] == 'c' || computerdata[0] == 'r')time_ = 1800;    //if a command has been sent to calibrate or take a reading we wait 1800ms so that the circuit has time to take the reading.
 //   else time_ = 300;                                                     //if not 300ms will do


    Wire.beginTransmission(oxySensor);                                      //call the circuit by its ID number.
    Wire.write("R");                                             //transmit the command that was sent through the serial port.
    Wire.endTransmission();                                               //end the I2C data transmission.



    delay(time_);                     //wait the correct amount of time for the circuit to complete its instruction.

    Wire.requestFrom(oxySensor, 20, 1); //call the circuit and request 20 bytes (this may be more than we need)
    code = Wire.read();               //the first byte is the response code, we read this separately.

    switch (code) {                   //switch case based on what the response code is.
      case 1:                         //decimal 1.
        Serial.println("Success");    //means the command was successful.
        break;                        //exits the switch case.

      case 2:                         //decimal 2.
        Serial.println("Failed");     //means the command has failed.
        break;                        //exits the switch case.

      case 254:                      //decimal 254.
        Serial.println("Pending");   //means the command has not yet been finished calculating.
        break;                       //exits the switch case.

      case 255:                      //decimal 255.
        Serial.println("No Data");   //means there is no further data to send.
        break;                       //exits the switch case.
    }


    while (Wire.available()) {       //are there bytes to receive.
      in_char = Wire.read();         //receive a byte.
      DO_data[i] = in_char;          //load this byte into our array.
      i += 1;                        //incur the counter for the array element.
      if (in_char == 0) {            //if we see that we have been sent a null command.
        i = 0;                       //reset the counter i to 0.
        Wire.endTransmission();      //end the I2C data transmission.
        break;                       //exit the while loop.
      }
    }

    if (isDigit(DO_data[0])) {
      string_pars(DO_data); //If the first char is a number we know it is a DO reading, lets parse the DO reading
      // save DO reading to Adafruit IO
      dissolvedOxy->save(DO_data);
      DO_float=atof(DO_data);
      do_norm = DO_float * 10;
      normDO->save(do_norm);
      
    }
    else {                            //if it’s not a number
      Serial.println(DO_data);        //print the data.
      for (i = 0; i < 20; i++) {      //step through each char
        DO_data[i] = 0;               //set each one to 0 this clears the memory
      }
    }
//  }
}

void string_pars(char DO_data[20]) {                  //this function will break up the CSV string into its 2 individual parts, DO and %sat.
  byte flag = 0;                      //this is used to indicate is a “,” was found in the string array
  byte i = 0;                         //counter used for DO_data array.


  for (i = 0; i < 20; i++) {          //Step through each char
    if (DO_data[i] == ',') {          //do we see a ','
      flag = 1;                       //if so we set the var flag to 1 by doing this we can identify if the string being sent from the DO circuit is a CSV string containing tow values
    }
  }

  if (flag != 1) {                    //if we see the there WAS NOT a ‘,’ in the string array
    Serial.print("DO:");              //print the identifier
    Serial.println(DO_data);          //print the reading
    flag = 0;                         //reset the flag
  }

 // if (flag == 1) {                    //if we see the there was a ‘,’ in the string array
 //   DO = strtok(DO_data, ",");        //let's pars the string at each comma
 //   sat = strtok(NULL, ",");          //let's pars the string at each comma
 //   Serial.print("DO:");              //print the identifier
 //   Serial.println(DO);               //print the reading
 //   Serial.print("Sat:");             //print the identifier
 //   Serial.println(sat);              //print the reading
 //   flag = 0;                         //reset the flag
 // }
                                      
    /*                                //uncomment this section if you want to take the ASCII values and convert them into a floating point number.
    DO_float=atof(DO);
   sat_float=atof(sat);
   */ 
}

void ORPread(int address) {                   //the main loop.
  char computerdata[20];           //we make a 20 byte character array to hold incoming data from a pc/mac/other.
  byte received_from_computer = 0; //we need to know how many characters have been received.
  byte code = 0;                   //used to hold the I2C response code.
  char ORP_data[20];               //we make a 20 byte character array to hold incoming data from the ORP circuit.
  byte in_char = 0;                //used as a 1 byte buffer to store in bound bytes from the ORP Circuit.
  byte i = 0;                      //counter used for ORP_data array.
  int timey = 1800;                //used to change the delay needed depending on the command sent to the EZO Class ORP Circuit.
  float ORP_float;                 //float var used to hold the float value of the ORP.
  float normRedox;                 //normalized redox for pretty graphs against DO and temperature
//  if (Serial.available() > 0) {                                           //if data is holding in the serial buffer
//    received_from_computer = Serial.readBytesUntil(13, computerdata, 20); //we read the data sent from the serial monitor(pc/mac/other) until we see a <CR>. We also count how many characters have been received.
//    computerdata[received_from_computer] = 0;                             //stop the buffer from transmitting leftovers or garbage.
//    computerdata[0] = tolower(computerdata[0]);                           //we make sure the first char in the string is lower case.
//    if (computerdata[0] == 'c' || computerdata[0] == 'r')timey = 1800;    //if a command has been sent to calibrate or take a reading we wait 1800ms so that the circuit has time to take the reading.
//    else timey = 300;                                                     //if any other command has been sent we wait only 300ms.


    Wire.beginTransmission(address); //call the circuit by its ID number.
//    Wire.write(computerdata);        //transmit the command that was sent through the serial port.
    Wire.write("R");                   //TEST just read the data 
    Wire.endTransmission();          //end the I2C data transmission.

    if (strcmp(computerdata, "sleep") != 0) {  //if the command that has been sent is NOT the sleep command, wait the correct amount of time and request data.
                                               //if it is the sleep command, we do nothing. Issuing a sleep command and then requesting data will wake the ORP circuit.
 
    
    timey = 1800;                   //TEST need a timey wimey value since we're not taking serial commands right now
    delay(timey);                    //wait the correct amount of time for the circuit to complete its instruction.

    Wire.requestFrom(address, 20, 1); //call the circuit and request 20 bytes (this may be more than we need)
    code = Wire.read();             //the first byte is the response code, we read this separately.

    switch (code) {                 //switch case based on what the response code is.
      case 1:                       //decimal 1.
        Serial.println("Success");  //means the command was successful.
        break;                        //exits the switch case.

      case 2:                        //decimal 2.
        Serial.println("Failed");    //means the command has failed.
        break;                         //exits the switch case.

      case 254:                      //decimal 254.
        Serial.println("Pending");   //means the command has not yet been finished calculating.
        break;                         //exits the switch case.

      case 255:                      //decimal 255.
        Serial.println("No Data");   //means there is no further data to send.
        break;                       //exits the switch case.
    }

    while (Wire.available()) {         //are there bytes to receive.
      in_char = Wire.read();           //receive a byte.
      ORP_data[i] = in_char;           //load this byte into our array.
      i += 1;                          //incur the counter for the array element.
      if (in_char == 0) {              //if we see that we have been sent a null command.
        i = 0;                         //reset the counter i to 0.
        Wire.endTransmission();        //end the I2C data transmission.
        break;                         //exit the while loop.
      }
    }

    Serial.println(ORP_data);          //print the data.
//  }
}
  //Uncomment this section if you want to take the ORP value and convert it into floating point number.
  ORP_float=atof(ORP_data);
  redox->save(ORP_float);
  normRedox = ORP_float * .01 + 10;
  redoxnorm->save(normRedox);
}
```