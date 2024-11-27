---
nid: 13403
title: Riffle Device: Water Conductivity Sensor
path: public/static/notes/rebeccah/08-29-2016/riffle-device-water-conductivity-sensor.md
uid: 489342
tagnames: water,data,probe,conductivity,riffle,logger,quality,coqui,open,rtc,drinking,surface,activity:riffle,riffle-examples,activity:conductivity,activity:coqui-version
---

# Riffle Device: Water Conductivity Sensor

###What I Want To Do
The ultimate goal is to design an inexpensive device that can be placed in streams across Western Pennsylvania. Accomplishing the goal will give data on surface water as a bigger picture, and also to raise awareness of water contamination issues. To do so, the Riffle+Coquí device, incorporating a specially designed probe and waterproof housing, will be utilized to measure the conductivity of water.

###My Attempt
[![Screen_Shot_2016-08-29_at_10.45.20_AM.png](//i.publiclab.org/system/images/photos/000/017/824/large/Screen_Shot_2016-08-29_at_10.45.20_AM.png)](//i.publiclab.org/system/images/photos/000/017/824/original/Screen_Shot_2016-08-29_at_10.45.20_AM.png)

####a. RIFFLE
To tackle the problem of a lack of information on the conductivity of surface water in Western Pennsylvania, a network of inexpensive Riffle Real Time Clock (RTC) data loggers will be deployed. The Riffle has and three power sources, built in temperature sensor diodes, and a customizable protoboard. The Riffle can be powered with a lithium- ion battery, a button-cell battery, and a USB/microUSB port. The temperature is automatically logged on a microSD card for the Riffle. In order for the Riffle to measure conductivity, a circuit design capable of doing so was soldered onto the protoboard attachment. A number or circuit diagrams designed to measure conductivity were built and tested. The Coquí was the front-runner design that was used and adapted to the Riffle attachment.


<a href="//i.publiclab.org/system/images/photos/000/017/825/original/Coqui_Schematic_schem.pdf"><i class="fa fa-file"></i> Coqui_Schematic_schem.pdf</a>

[![Screen_Shot_2016-08-29_at_10.46.42_AM.png](//i.publiclab.org/system/images/photos/000/017/826/large/Screen_Shot_2016-08-29_at_10.46.42_AM.png)](//i.publiclab.org/system/images/photos/000/017/826/original/Screen_Shot_2016-08-29_at_10.46.42_AM.png)

####b. COQUÍ
To tackle the problem of a lack of information on the conductivity of surface water in Western Pennsylvania, a network of inexpensive Riffle Real Time Clock data loggers will be deployed. The Riffle has and three power sources, built in temperature sensor diodes, and a customizable protoboard. The Riffle can be powered with a lithium-ion battery, a button-cell battery, and a USB/microUSB port. The temperature is automatically logged on a microSD card for the Riffle. In order for the Riffle to measure conductivity, a circuit design capable of doing so was soldered onto the protoboard attachment. A number or circuit diagrams designed to measure conductivity were built and tested. The Coquí was the front- runner design that was used and adapted to the Riffle attachment.

The Coquí (Figure 5) is designed with a probe that acts as a variable resistor. When the electrodes are placed into a solution, the solution has a specific conductance; therefore acting as a resistor. Depending upon the voltage going through the circuit, the pitch of the piezo speaker varies. For example, if the probe is placed into water with high conductance, the pitch of the sound released from the piezo speaker increases. The speaker can be replaced with an LED light that will act similarly to the speaker. The light shines brighter the more conductive the sample is. The LED that is already in the circuit diagram in Figure 5 acts as an ‘on/off’ power indicator.

To adapt the Coquí to the Riffle attachment, the piezo speaker is replaced with the analog read pin. The protoboard is designed where the top two rows are labeled connections that run to the data logger. The rest of the pins on the protoboard are connected vertically down the board. A diagram of the Coquí design for the protoboard can be seen in Figure 6. The LED is still used as a power indicator in the protoboard design.


[![Screen_Shot_2016-08-29_at_10.50.18_AM.png](//i.publiclab.org/system/images/photos/000/017/827/large/Screen_Shot_2016-08-29_at_10.50.18_AM.png)](//i.publiclab.org/system/images/photos/000/017/827/original/Screen_Shot_2016-08-29_at_10.50.18_AM.png)

####c. PROBE DESIGN
Many considerations went into designing the final probe, as seen in Figure 7. The probe material needed to have essentially no conductance and the electrodes needed to be fixed. In addition, the chosen design made calculating the cell constant simple. The probe is made of a plastic marker cap. Plastic does not easily conduct making it the perfect material for the probe. The electrodes on the probe are made of thin nichrome wire, which is fixed in place with electrical tape on two ends. The cell constant is measured in centimeter-1 and is a function of the distance between the electrodes and the effective area of the electrodes. Therefore, the cell constant is easy to calculate since the distance between the electrodes is fixed. In addition, the diameter of the wire is so small we can assume they are points, rather than large surfaces with an area. The equation for the cell constant is as follows: K=d/A where K=cell constant, A= Effective area of electrodes, d= Distance between electrodes. 


[![Screen_Shot_2016-08-29_at_10.52.22_AM.png](//i.publiclab.org/system/images/photos/000/017/828/large/Screen_Shot_2016-08-29_at_10.52.22_AM.png)](//i.publiclab.org/system/images/photos/000/017/828/original/Screen_Shot_2016-08-29_at_10.52.22_AM.png)

[![Screen_Shot_2016-08-29_at_10.52.12_AM.png](//i.publiclab.org/system/images/photos/000/017/829/large/Screen_Shot_2016-08-29_at_10.52.12_AM.png)](//i.publiclab.org/system/images/photos/000/017/829/original/Screen_Shot_2016-08-29_at_10.52.12_AM.png)

####d. RIFFLE + COQUÍ HOUSING
A housing for the Riffle+Coquí was designed, iterated upon, and 3D printed. The final design, which incorporates a compartment for the lithium-ion battery, compartments for protoboard connections, and magnetic snap closure, can be seen in Figure 8a and Figure 8b. The housing is important because the device must be able to be completely submerged in the water being tested; therefore, the casing needs to be waterproof. The design has as little openings as possible due to this feature. The housing also features a magnetic snap closure to keep the lid in place. When all the contents are properly placed into the housing, the lid and probe opening can be sealed with waterproof material.

###My Results
The pen probe was put into different conductivity standards in a 250 mL beaker for ten minutes, and placed in DI water in a 250 mL beaker for two minutes in between each block of measurements. At the end, the probe was allowed to air dry for five minutes. A table detailing the standard values used can be seen below. The Riffle logged a data point every second. The ideal outcome is to obtain a curve and corresponding equation from the data points logged by the Riffle+Coquí. Using solutions with known conductivities, we can calibrate the Riffle+Coquí readings into actual conductivity measurements in the Riffle code.

[![Screen_Shot_2016-08-29_at_10.53.53_AM.png](//i.publiclab.org/system/images/photos/000/017/830/large/Screen_Shot_2016-08-29_at_10.53.53_AM.png)](//i.publiclab.org/system/images/photos/000/017/830/original/Screen_Shot_2016-08-29_at_10.53.53_AM.png)

The data results did not give a trustworthy curve, as seen in the Graph 1 below, but there is a noticeable trend. Each block of data is a different size for each conductivity standard. The standard deviation of the data points for each solution was calculated and graphed in Graph 2: The standard deviations though for each solution, was over a large range, causing doubts of the data.

Graph 1:
[![Screen_Shot_2016-08-29_at_10.58.51_AM.png](//i.publiclab.org/system/images/photos/000/017/831/large/Screen_Shot_2016-08-29_at_10.58.51_AM.png)](//i.publiclab.org/system/images/photos/000/017/831/original/Screen_Shot_2016-08-29_at_10.58.51_AM.png)

Graph 2:
[![Screen_Shot_2016-08-29_at_10.59.30_AM.png](//i.publiclab.org/system/images/photos/000/017/832/large/Screen_Shot_2016-08-29_at_10.59.30_AM.png)](//i.publiclab.org/system/images/photos/000/017/832/original/Screen_Shot_2016-08-29_at_10.59.30_AM.png)

###Questions and Next Steps

Points of confusion/trouble:

- The data logger would record points when the Coquí was built on a breadboard and attached to the Riffle. When the Coquí was built on the Riffle protoboard attachment, no data was being logged. The protoboard design needs further modifications and improvements. 

- The data points achieved were all over the place. No steady curved was found. What could be causing the Riffle to be logging points as such? Could it be faulty code?

Let me know what you think. 

