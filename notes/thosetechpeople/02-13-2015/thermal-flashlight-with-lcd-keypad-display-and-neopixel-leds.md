---
title: 'Thermal Flashlight with LCD keypad display and Neopixel LEDs'
tagnames: thermal-photography, arduino, thermal-flashlight, fritzing, response:625, heat, activity:thermal-flashlight, activity:thermal-flashlight-assembly
author: thosetechpeople
path: /notes/thosetechpeople/02-13-2015/thermal-flashlight-with-lcd-keypad-display-and-neopixel-leds.md
nid: 11581
uid: 435226

---

![](https://publiclab.org/public/system/images/photos/000/008/963/original/IMG_20150210_075830_hdr.jpg)

# Thermal Flashlight with LCD keypad display and Neopixel LEDs

by [thosetechpeople](../profile/thosetechpeople) February 13, 2015 15:03

February 13, 2015 15:03 | Tags: [thermal-photography](../tag/thermal-photography), [arduino](../tag/arduino), [thermal-flashlight](../tag/thermal-flashlight), [fritzing](../tag/fritzing), [response:625](../tag/response:625), [heat](../tag/heat), [activity:thermal-flashlight](../tag/activity:thermal-flashlight), [activity:thermal-flashlight-assembly](../tag/activity:thermal-flashlight-assembly)

----

We added an LCD display with keypad and replaced the rgb LED with a 16 LED Neopixel ring. This will allow you to see a display of the temperature and control the temperature range for the LEDs. You can find more info on our project here http://silver.skiles.gatech.edu/~psilva6/thermalFlashlight/ .

To build this you will need the parts and instructions for the thermal flashlight that are posted here http://publiclab.org/notes/warren/12-12-2011/circuit-diagram-simple-thermal-flashlight. minus the LED and the 100 ohm and 180 ohm resistors.
You will also need these parts:
Neopixel ring http://www.adafruit.com/products/1463
LCD keypad shield http://www.amazon.com/ZITRADES-Keypad-Display-Arduino-Duemilanove/dp/B00BOMPW60/

You will start by connecting the LCD to your arduino.

The LCD has passthroughs for all of the connections that it is not using. There are no headers on the LCD, so you will want to solder your wires to the passthroughs. 

Connect the sensor to the LCD following the instructions from publiclab above.

Connecting the Neopixel ring is even easier than the single rgb LED option. Simply connect the 5V power on the ring to the 5V power on the LCD. Connect the ground on the ring to the ground on the LCD. Finally, connect the data on the ring to digital 3 on the LCD. This is not labeled, but it should be the fourth passthrough from the edge of the PCB. If the LCD is lighting up and the ring isn't, make sure the libraries are installed. If the libraries check out, the data wire on the ring is probably connected to the wrong passthrough. We recommend only soldering this connection one you are certain you have the right passthrough.

You will need to install the libraries from here 
NeoPixel: https://github.com/adafruit/Adafruit_NeoPixel
Temp Sensor: https://github.com/adafruit/Adafruit-MLX90614-Library

The right button should take you to the hot temp adjustment and the left button should take you to the cold temp adjustment. The up and down keys should adjust the temperature. The display will show the current temp by default at start up.
The code you will need is posted below:

    //Sample using LiquidCrystal library
    #include <LiquidCrystal.h>
    #include <Wire.h>
    #include <Adafruit_MLX90614.h>
    #include <Adafruit_NeoPixel.h>
    
    /*******************************************************
    
    This program will test the LCD panel and the buttons
    Mark Bramwell, July 2010
    
    ********************************************************/
    
    // select the pins used on the LCD panel
    LiquidCrystal lcd(8, 9, 4, 5, 6, 7);
    
    // define some values used by the panel and buttons
    int lcd_key     = 0;
    int adc_key_in  = 0;
    #define btnRIGHT  0
    #define btnUP     1
    #define btnDOWN   2
    #define btnLEFT   3
    #define btnSELECT 4
    #define btnNONE   5
    
    // change these to adjust the range of temperatures you want to measure 
    // (these are in Farenheit)
    int COLDTEMP = 60;
    int HOTTEMP  = 80;
    int tempSwitch = 0;
    
    #define NeoPixel 3 //Pin for NewPixel
    Adafruit_NeoPixel strip = Adafruit_NeoPixel(24, NeoPixel, NEO_GRB + NEO_KHZ800); //Instance of    NeoPixel
    Adafruit_MLX90614 mlx = Adafruit_MLX90614(); //Instance of temp sensor

    // read the buttons
    int read_LCD_buttons()
    {
     adc_key_in = analogRead(0);      // read the value from the sensor 
     // my buttons when read are centered at these valies: 0, 144, 329, 504, 741
     // we add approx 50 to those values and check to see if we are close
     if (adc_key_in > 1000) return btnNONE; // We make this the 1st option for speed reasons since it will be the    most likely result
    // For V1.1 us this threshold
    // if (adc_key_in < 50)   return btnRIGHT;  
    // if (adc_key_in < 250)  return btnUP; 
    // if (adc_key_in < 450)  return btnDOWN; 
    // if (adc_key_in < 650)  return btnLEFT; 
    // if (adc_key_in < 850)  return btnSELECT;  
    
    // For V1.0 comment the other threshold and use the one below:

     if (adc_key_in < 50)   return btnRIGHT;  
     if (adc_key_in < 195)  return btnUP; 
     if (adc_key_in < 380)  return btnDOWN; 
     if (adc_key_in < 555)  return btnLEFT; 
     if (adc_key_in < 790)  return btnSELECT;   
    
     return btnNONE;  // when all others fail, return this...
    }

    void updateColor() {
      uint8_t red, blue;
      float temp = mlx.readObjectTempF();
  
      if (temp < COLDTEMP) temp = COLDTEMP;
      if (temp > HOTTEMP) temp = HOTTEMP;
    
      // map temperature to red/blue color
      // hotter temp -> more red
      red = map(temp, COLDTEMP, HOTTEMP, 0, 255);  
      // hotter temp -> less blue
      blue = map(temp, COLDTEMP, HOTTEMP, 255, 0);  
    
      colorWipe(strip.Color(red, 0, blue), 0);
      
      delay(50); // can adjust this for faster/slower updates
    }
    
    void setup()
    {
     lcd.begin(16, 2);              // start the library
     lcd.setCursor(0,0);
     lcd.print("Temperature:"); // print a simple message
     
     mlx.begin();  
     strip.begin();
     //strip.show(); // Initialize all pixels to 'off'
    }
     
    void loop()
    {
      lcd.setCursor(9,1);            // move cursor to second line "1" and 9 spaces over
      lcd.setCursor(0,1);            // move to the begining of the second line
      lcd_key = read_LCD_buttons();  // read the buttons
    
     switch (lcd_key)               // depending on which button was pushed, we perform an action
     {
       case btnRIGHT:
         {
         lcd.print("Adjust Hot");
         tempSwitch = 0;
         break;
         }
       case btnLEFT:
         {
         lcd.print("Adjust Cold");
         tempSwitch = 1;
         break;
         }
       case btnUP:
         {
         lcd.print("COLDTEMP: " + COLDTEMP);
         if (!tempSwitch) {COLDTEMP--;}
         break;
         }
       case btnDOWN:
         {
         lcd.print("Adjust Hot  ");
         if (tempSwitch) {HOTTEMP--;}
         break;
         }
       case btnSELECT:
         {
         lcd.print("SELECT");
         break;
         }
         case btnNONE:
         {
         lcd.print(mlx.readObjectTempF());
         break;
         }
     }
      updateColor();
    }
     
    // Fill the dots one after the other with a color
    void colorWipe(uint32_t c, uint8_t wait) {
      for(uint16_t i=0; i<strip.numPixels(); i++) {
        strip.setPixelColor(i, c);
        strip.show();
        delay(wait);
      }
    }

