---
title: "Low consumption motor & DC generator."

tagnames: 'electric-generator, motor-generator, electric-motor, sphere-motor, sphere-electric-motor, simple-electric-motor, simple-motor, dc-motor, dc-generator, dc-electric-generator, low-power-input-motor, low-voltage-motor, low-voltage-electric-motor, solar-motor, low-power-consumption-motor, low-power-consumption-electric-motor, low-consumption-motor, low-consumption-electric-motor'
author: sciencetoolbar
path: /notes/sciencetoolbar/11-10-2018/sphere-motor-low-input-power-sphere-generator.md
nid: 17509
uid: 513114

---

![](https://publiclab.org/public/system/images/photos/000/027/591/original/Sphere_motor_-_low_input_power.jpg)

# Low consumption motor & DC generator.

by [sciencetoolbar](../../../profile/sciencetoolbar) | November 10, 2018 18:02

November 10, 2018 18:02 | Tags: [electric-generator](../tag/electric-generator), [motor-generator](../tag/motor-generator), [electric-motor](../tag/electric-motor), [sphere-motor](../tag/sphere-motor), [sphere-electric-motor](../tag/sphere-electric-motor), [simple-electric-motor](../tag/simple-electric-motor), [simple-motor](../tag/simple-motor), [dc-motor](../tag/dc-motor), [dc-generator](../tag/dc-generator), [dc-electric-generator](../tag/dc-electric-generator), [low-power-input-motor](../tag/low-power-input-motor), [low-voltage-motor](../tag/low-voltage-motor), [low-voltage-electric-motor](../tag/low-voltage-electric-motor), [solar-motor](../tag/solar-motor), [low-power-consumption-motor](../tag/low-power-consumption-motor), [low-power-consumption-electric-motor](../tag/low-power-consumption-electric-motor), [low-consumption-motor](../tag/low-consumption-motor), [low-consumption-electric-motor](../tag/low-consumption-electric-motor)

----

**_Low consumption motor_**

Objective : to build an electric motor operated under low power (voltage and current) , powered by a single small solar panel which can operate in the artificial light and which can be transformed in a small electric dc generator.

**VIDEO 1\. : TEST 1 "Low consumption motor"**

**[https://www.youtube.com/watch?v=Dh079n4TYn0](https://www.youtube.com/watch?v=Dh079n4TYn0)**

**_Neodymium sphere 19 mm diameter - the key component_**

Material NdFeB
Shape, Sphere
Diameter 19 mm
Tolerance +/- 0,1 mm, Coating Chrome-plated (Ni-Cu-Ni-Cr), Manufacturing method sintered
Magnetisation N38
Strength approx. 4,9 kg (approx. 48,1 N), Max. working temperature 80°C, **Weight 27,2943 g**, Curie temperature 310 °C, Residual magnetism Br 12200-12600 G, 1.22-1.26 T, Coercive field strength bHc 10.8-11.5 kOe, 860-915 kA/m, Coercive field strength iHc ≥12 kOe, ≥955 kA/m, Energy product (BxH)max 36-38 MGOe, 287-303 kJ/m³
19 mm , Pollutant-free according to RoHS Directive 2011/65/EU.**\_  
\_**

**Important** : the metal cases with screws should be positioned : one to the **N** magnetic pole of the neodymium sphere 19 mm diameter and the second one on the **S** magnetic pole of the sphere. ( **In the presented Video 1\. , at the first test, the metal cases weren't properly placed on the sphere and the motor doesn't reached the full speed** )

**In the upper side of the sphere there is no friction between the screw and the iron - see the TEST 2**

\*\*VIDEO 2\. : low consumption motor TEST 2 \*\*

[**https://www.youtube.com/watch?v=3qr0PBhojwk**](https://www.youtube.com/watch?v=3qr0PBhojwk)\*\*  
\*\*

Input DC power - mini solar panel -VIMUN SC-3012-2A, 29.44mm×11.6mm×1.1mm, 4 cells

There are a total of four electrical components. A small solar panel ( VIMUN SC-3012-2A, 29.44mm×11.6mm×1.1mm, 4 cells. The following specifications were listed, 2.0 Vos, 9.0 UAsc, 1.5 Vop, at 200Lux), a 470 uF 10 V electrolytic capacitor, a coil iron less with thin copper wire and a small circuit board with a black blob on it.

Under this blob is the integrated circuit chip. It provides the correctly timed pulses to the coil and magnet combination. The integrated circuit is more or less just a low frequency oscillator which runs at approximately 1 Hz most likely driving an open drain NMOS switch ( output on pin 3 ) which periodically connects the coil to the - terminal. The circuit pulses the 18 mH coil causing the neodymium sphere magnet spinning.

electrical components used (excepting the coil iron less ) - from a solar powered flapping toy.

![image description](/i/27594.jpg "spere_motor_circuit_2.jpg")

![image description](/i/27592.jpg "sphere_motor_circuit.jpg")

\*\*![image description](/i/27598.jpg "low_voltage_motor_-_neodymium_magnet_sphere.jpg")\_

\*\*

**_DC generator. Sphere generator._**

![image description](/i/27657.jpg "DC_electric_generator.jpg")\*\*  
**The presented low voltage electric motor can be transformed in a DC generator by adding a second coil iron - less, a rectifier (Ac to DC) and a led :**

**The rectifier used in this test can be found in a old phone charger.**

**IMPORTANT NOTE : if you will connect directly the led to the solar panel, the led will NOT light , due to the low voltage output of the solar panel.**

\*\*The second coil used can be found in a syncronous motor 230 V (microwave turntable motor)  
\*\*
\*\*

**Important :**

without using the rectifier (AC to DC ) results AC voltage.

**VIDEO 2\. : TEST 1 "DC GENERATOR. Sphere generator" - DC voltage**

[**https://www.youtube.com/watch?v=BhZ4kNVp20w**](https://www.youtube.com/watch?v=BhZ4kNVp20w)

In the presented video the "led " is from a printer scanner light (DC voltage).

[sciencetoolbar@gmail.com](mailto:sciencetoolbar@gmail.com)

_a sciencetoolbar project [http://sciencetoolbar.com](http://sciencetoolbar.com)_