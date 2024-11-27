---
nid: 593
title: Thermal Camera: Arduino UNO + MLX90614 IR Thermometer
path: public/static/notes/ad/11-28-2011/thermal-camera-arduino-uno-mlx90614-ir-thermometer.md
uid: 373
tagnames: thermal-photography,arduino,thermal-flashlight
---

# Thermal Camera: Arduino UNO + MLX90614 IR Thermometer

I did the following steps: 

1) Hardware: 
Connect the MLX90614 (<a href="http://www.sparkfun.com/datasheets/Sensors/Temperature/SEN-09570-datasheet-3901090614M005.pdf">refer to the datasheet</a>) as follows: 
Pin 1 on MLX (SCL) connect to ANALOG pin 5 on Arduino 
Pin 2 on MLX (SDA) connect to ANALOG pin 4 on Arduino 
Pin 3 on MLX (VDD) connect to 3.3V on Arduino 
Pin 4 on MLX (VSS) connect to GROUND on Arduino 

Now use "pull ups" on the SCL and SDA lines by connecting a 4.7K ohm resistor from the Pin 3 VDD line to the SCC line and a 4.7K ohm resistor from the Pin 3 VDD line to the SDA line. 

<img src="http://bildr.org/blog/wp-content/uploads/2011/01/MLX90614_hookup.png" alt="Image of Thermometer Hook Up" />


2) Connect the RBG LED. Simple wiring diagram for RGB LED: <a href="http://wiring.org.co/learning/basics/rgbled.html">http://wiring.org.co/learning/basics/rgbled.html</a>. For the attached Arduino sketch, hook up is as follows: 
<img src="http://wiring.org.co/learning/basics/imgs/RGBLED.png" alt="RGB LED Pins" />

Leg 1 = RED pin of the LED to PWM pin 6
Leg 2 = Ground
Leg 3 = GREEN pin of the LED to PWM pin 5
Leg 4 = BLUE pin of the LED to PWM pin 3 {***NOT pin 4 as shown in the diagram above!!!!!!!!!}

3) Software: 
Download MLX90614 IR Thermometer Library here: <a href="http://bildr.org/2011/02/mlx90614-arduino/">http://bildr.org/2011/02/mlx90614-arduino/</a>

To make this code work, before you load the code, or even open the Arduino program, we need to place the “I2Cmaster” in your Arduino Library. 

On your Mac:: In (home directory)/Documents/Arduino/libraries
On your PC:: My Documents -> Arduino -> libraries
On your Linux box:: (home directory)/sketchbook/libraries




Final Arduino sketch attached. 

