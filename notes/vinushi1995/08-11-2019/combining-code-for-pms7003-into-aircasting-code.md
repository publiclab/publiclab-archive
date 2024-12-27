---
title: "combining code for PMS7003 into Aircasting code"

tagnames: 'code, airquality, barnstar:basic, arduino-uno, question:air-quality, define, include, pm2.5, pms7003, aircasting, combiningcodes'
author: vinushi1995
path: /notes/vinushi1995/08-11-2019/combining-code-for-pms7003-into-aircasting-code.md
nid: 20501
uid: 605818
cids: 25234,25235
---

# combining code for PMS7003 into Aircasting code

by [vinushi1995](/profile/vinushi1995) | August 11, 2019 07:50

August 11, 2019 07:50 | Tags: [code](/tag/code), [airquality](/tag/airquality), [barnstar:basic](/tag/barnstar:basic), [arduino-uno](/tag/arduino-uno), [question:air-quality](/tag/question:air-quality), [define](/tag/define), [include](/tag/include), [pm2.5](/tag/pm2.5), [pms7003](/tag/pms7003), [aircasting](/tag/aircasting), [combiningcodes](/tag/combiningcodes)

----

hello,

I am making an air quality sensor using the aircasting app. according to the instructions given at [http://habitatmap.org/habitatmap\_docs/HowToBuildAnAirCastingAirMonitor.pdf](http://habitatmap.org/habitatmap_docs/HowToBuildAnAirCastingAirMonitor.pdf "http://habitatmap.org/habitatmap_docs/HowToBuildAnAirCastingAirMonitor.pdf") . howver i'm adding the pms7003 sensor as an extra. 

this is the pms7003 sesnor code which works well separately

  

```

```

```

```

```

```
#include 
SoftwareSerial pmsSerial(8, 9);
 
void setup() {
  // our debugging output
  Serial.begin(115200);
 
  // sensor baud rate is 9600
  pmsSerial.begin(9600);
}
 
struct pms5003data {
  uint16_t framelen;
  uint16_t pm10_standard, pm25_standard, pm100_standard;
  uint16_t pm10_env, pm25_env, pm100_env;
  uint16_t particles_03um, particles_05um, particles_10um, particles_25um, particles_50um, particles_100um;
  uint16_t unused;
  uint16_t checksum;
};
 
struct pms5003data data;
    
void loop() {
  if (readPMSdata(&pmsSerial)) {
    // reading data was successful!
    Serial.println();
    Serial.println("---------------------------------------");
    Serial.println("Concentration Units (standard)");
    Serial.print("PM 1.0: "); Serial.print(data.pm10_standard);
    Serial.print("\t\tPM 2.5: "); Serial.print(data.pm25_standard);
    Serial.print("\t\tPM 10: "); Serial.println(data.pm100_standard);
    Serial.println("---------------------------------------");
    Serial.println("Concentration Units (environmental)");
    Serial.print("PM 1.0: "); Serial.print(data.pm10_env);
    Serial.print("\t\tPM 2.5: "); Serial.print(data.pm25_env);
    Serial.print("\t\tPM 10: "); Serial.println(data.pm100_env);
    Serial.println("---------------------------------------");
    Serial.print("Particles > 0.3um / 0.1L air:"); Serial.println(data.particles_03um);
    Serial.print("Particles > 0.5um / 0.1L air:"); Serial.println(data.particles_05um);
    Serial.print("Particles > 1.0um / 0.1L air:"); Serial.println(data.particles_10um);
    Serial.print("Particles > 2.5um / 0.1L air:"); Serial.println(data.particles_25um);
    Serial.print("Particles > 5.0um / 0.1L air:"); Serial.println(data.particles_50um);
    Serial.print("Particles > 10.0 um / 0.1L air:"); Serial.println(data.particles_100um);
    Serial.println("---------------------------------------");
    delay(2000);
  }
}
 
boolean readPMSdata(Stream *s) {
  if (! s->available()) {
    return false;
  }
  
  // Read a byte at a time until we get to the special '0x42' start-byte
  if (s->peek() != 0x42) {
    s->read();
    return false;
  }
 
  // Now read all 32 bytes
  if (s->available() < 32) {
    return false;
  }
    
  uint8_t buffer[32];    
  uint16_t sum = 0;
  s->readBytes(buffer, 32);
 
  // get checksum ready
  for (uint8_t i=0; i<30; i++) {
    sum += buffer[i];
  }
 
  /* debugging
  for (uint8_t i=2; i<32; i++) {
    Serial.print("0x"); Serial.print(buffer[i], HEX); Serial.print(", ");
  }
  Serial.println();
  */
  
  // The data comes in endian'd, this solves it so it works on all platforms
  uint16_t buffer_u16[15];
  for (uint8_t i=0; i<15; i++) {
    buffer_u16[i] = buffer[2 + i*2 + 1];
    buffer_u16[i] += (buffer[2 + i*2] << 8);
  }
```  // put it into a nice struct :)
  memcpy((void *)&data, (void *)buffer_u16, 30);
 
  if (sum != data.checksum) {
    Serial.println("Checksum failure");
    return false;
  }
  // success!
  return true;
}<30; i++) {
    sum += buffer[i];
  }
 
  /* debugging
  for (uint8_t i=2; i<32; i++) {
    Serial.print("0x"); Serial.print(buffer[i], HEX); Serial.print(", ");
  }
  Serial.println();
  */
  
  // The data comes in endian'd, this solves it so it works on all platforms
  uint16_t buffer_u16[15];
  for (uint8_t i=0; i<15; i++) {
    buffer_u16[i] = buffer[2 + i*2 + 1];
    buffer_u16[i] += (buffer[2 + i*2] << 8);
  }
```  

however i tried to integrate this into the aircasting code and the values arent displayed. it always shows pm1.0 pm2.5 and pm10 all 3 as 0 or a very high equal value like 12600

  
here is the combined code i used. 

  

```

#include 
#include  //Header for software serial communication
SoftwareSerial mySerial(2, 3); //Assign 2 as Rx and 3 as Tx
dht DHT;
#define DHT22_PIN 7

#include 
SoftwareSerial pmsSerial(8, 9);
 
float temp, humi, maxv, CO;
int   circ = 5, heat = 6;

void setup()
{
  Serial.begin(115200); //Serial communication for Arduino Serial Monitor
  mySerial.begin(115200); //Serial communcation for Aircasting Application
  pmsSerial.begin(9600);
  pinMode(circ, OUTPUT);
  pinMode(heat, OUTPUT);
 
}

//pms7003
struct pms5003data {
  uint16_t framelen;
  uint16_t pm10_standard, pm25_standard, pm100_standard;
  uint16_t pm10_env, pm25_env, pm100_env;
  uint16_t particles_03um, particles_05um, particles_10um, particles_25um, particles_50um, particles_100um;
  uint16_t unused;
  uint16_t checksum;
};
 
struct pms5003data data;

void loop()
{
 if (readPMSdata(&pmsSerial)) {
   Serial.print("PM 1.0: "); Serial.print(data.pm10_env);
    Serial.print("\t\tPM 2.5: "); Serial.print(data.pm25_env);
    Serial.print("\t\tPM 10: "); Serial.println(data.pm100_env);

    mySerial.print(data.pm10_env);
  mySerial.print(";InsertSensorPackageName;PMS7003-PM1.0;PM-1.0;data.pm10_env;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");

  mySerial.print(data.pm25_env);
  mySerial.print(";InsertSensorPackageName;PMS7003-PM2.5;PM-2.5;data.pm25_env;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");

    mySerial.print(data.pm25_env);
  mySerial.print(";InsertSensorPackageName;PMS7003-PM10;PM-10;data.pm100_env;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");
 }

  
  //call up the calculation functions
  GetCO();
 
  Serial.println();
 

//pms7003

   Serial.print("PM 1.0: "); Serial.print(data.pm10_env);
    Serial.print("\t\tPM 2.5: "); Serial.print(data.pm25_env);
    Serial.print("\t\tPM 10: "); Serial.println(data.pm100_env);

    mySerial.print(data.pm10_env);
  mySerial.print(";InsertSensorPackageName;PMS7003-PM1.0;PM-1.0;data.pm10_env;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");

  mySerial.print(data.pm25_env);
  mySerial.print(";InsertSensorPackageName;PMS7003-PM2.5;PM-2.5;data.pm25_env;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");

    mySerial.print(data.pm25_env);
  mySerial.print(";InsertSensorPackageName;PMS7003-PM10;PM-10;data.pm100_env;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");
    
  //Display of CO gas sensor
  mySerial.print(CO);
  mySerial.print(";InsertSensorPackageName;TGS2442;CO Gas;CO;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");
  Serial.print("CO Gas: ");
  Serial.print(CO);
  Serial.print("% ");
  Serial.println();

 
  
  //temp sensor
   int chk = DHT.read22(DHT22_PIN);
  temp = DHT.temperature;
  mySerial.print(temp);
  mySerial.print(";InsertSensorPackageName;DHT22-Temp;Temperature;temp;response indicator;RI;0;10;20;30;40");
  mySerial.print("\n");
  Serial.print("Temperature=");
  Serial.print(temp);
  Serial.println();

  //Display of Humidity Sensor
   humi = DHT.humidity;
  mySerial.print(humi);
  mySerial.print(";InsertSensorPackageName;DHT22-Humi;Humidity;humi;response indicator;RI;0;25;50;75;100");
  mySerial.print("\n");
  Serial.print("Humidity=");
  Serial.print(humi);
  Serial.println();

  
//MQ9 sensor
float sensor_volt, RS_gas, ratio;
float R0 = 0.40; 
  float sensorValue = analogRead(A0); 
  sensor_volt = ((float)sensorValue / 1024) * 5.0; 
  RS_gas = (5.0 - sensor_volt) / sensor_volt; // Depend on RL on yor module 
  ratio = RS_gas / R0; // ratio = RS/R0 
  
 //Display of MQ-9 Gas Sensor
  mySerial.print(ratio);
  mySerial.print(";InsertSensorPackageName;MQ9;Gas;gas;response indicator;RI;0;2;5;7;10");
  mySerial.print("\n");
  Serial.print("Gas Ratio=");
  Serial.print(ratio);
  Serial.println();

 
delay(2000); //Delay of 1 second for ease of viewing 
}

boolean readPMSdata(Stream *s) {
  if (! s->available()) {
    return false;
  }
  
  // Read a byte at a time until we get to the special '0x42' start-byte
  if (s->peek() != 0x42) {
    s->read();
    return false;
  }
 
  // Now read all 32 bytes
  if (s->available() < 32) {
    return false;
  }
    
  uint8_t buffer[32];    
  uint16_t sum = 0;
  s->readBytes(buffer, 32);
 
  // get checksum ready
  for (uint8_t i=0; i<30; i++) {
    sum += buffer[i];
  }
 
  /* debugging
  for (uint8_t i=2; i<32; i++) {
    Serial.print("0x"); Serial.print(buffer[i], HEX); Serial.print(", ");
  }
  Serial.println();
  */
  
  // The data comes in endian'd, this solves it so it works on all platforms
  uint16_t buffer_u16[15];
  for (uint8_t i=0; i<15; i++) {
    buffer_u16[i] = buffer[2 + i*2 + 1];
    buffer_u16[i] += (buffer[2 + i*2] << 8);
  }
 
  // put it into a nice struct :)
  memcpy((void *)&data, (void *)buffer_u16, 30);
 
  if (sum != data.checksum) {
    Serial.println("Checksum failure");
    return false;
  }
  // success!
  return true;
}
void GetCO()
{
  digitalWrite(circ, LOW);
  analogWrite(heat, 245);
  delay(14);
  analogWrite(heat, 0);
  delay(981);
  digitalWrite(circ, HIGH);
  delay(3);
  float val1 = analogRead(A1);
  CO = map(val1, 0 , 1023, 0, 100);
}

float map(float x, float in_min, float in_max, float out_min, float out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
```

```
<br>
```