---
title: "Conductivity and Temperature Meter"

tagnames: 'water-quality, conductivity, barnstar:basic, waterquality, activity:conductivity, activity:temperature'
author: bhickman
path: /notes/bhickman/05-09-2016/conductivity-and-temperature-meter.md
nid: 13091
uid: 201929

cids: 14617,14630,14637,14647,14662,15295,15332,15333,16791,16807,27075,27867,31359

---

![](https://publiclab.org/public/system/images/photos/000/016/031/original/image001.jpg)

# Conductivity and Temperature Meter

by [bhickman](../../../profile/bhickman) | May 09, 2016 05:21

May 09, 2016 05:21 | Tags: [water-quality](../tag/water-quality), [conductivity](../tag/conductivity), [barnstar:basic](../tag/barnstar:basic), [waterquality](../tag/waterquality), [activity:conductivity](../tag/activity:conductivity), [activity:temperature](../tag/activity:temperature)

----

##Overview
The goal of this project was to make a conductivity and temperature (CT) sensor that gives accurate and repeatable measurements while still being affordable. In the quest for that goal, a simple circuit board and probe were designed. The design applies an AC square wave across a voltage divider, where one of the resistors is a know value and the second is determined by the resistance of the solution being measured. 

##Electrodes and Thermistor
 

[![20160209_194610.jpg](//i.publiclab.org/system/images/photos/000/016/021/medium/20160209_194610.jpg)](//i.publiclab.org/system/images/photos/000/016/021/original/20160209_194610.jpg)




The body of the conductivity and temperature (CT) sensor was made from a 1” PVC tube which was cut to about six inches long. The end caps where the electrodes, thermostat, and data cable come through were made by drilling holes in common PVC fittings found at the local hardware store. 


[![20160209_194046_1.jpg](//i.publiclab.org/system/images/photos/000/016/034/medium/20160209_194046_1.jpg)](//i.publiclab.org/system/images/photos/000/016/034/original/20160209_194046_1.jpg)



[![2.jpg](//i.publiclab.org/system/images/photos/000/016/022/medium/2.jpg)](//i.publiclab.org/system/images/photos/000/016/022/original/2.jpg)




 
The conductivity electrodes were made from two pieces of graphite, each about one inch long. Wires were attached to the graphite electrodes by wrapping them a few times around the graphite and using heat shrink to hold them in place. Heat shrink was also applied to the entire surface of the graphite except for the last couple millimeters which will be exposed to solution. I found that its important that the heat shrink provide insulation between the graphite and the PVC end caps, otherwise noisy and unstable readings would result. 
The thermistor was also wrapped in heat shrink except for a half inch portion that’s exposed to the test solution. I believe this is unnecessary to use heat shrink on the thermistor, but I drilled my hole to large and the added width from the heat shrink made for a better fit…

After the graphite electrodes and thermistor were wrapped in heat shrink, appropriately sized holes were drilled in one PVC end cap. The electrodes and thermistor were inserted and epoxied into place, using copious amounts of epoxy to ensure water tightness.  


[![3.jpg](//i.publiclab.org/system/images/photos/000/016/023/medium/3.jpg)](//i.publiclab.org/system/images/photos/000/016/023/original/3.jpg)



Using another end cap, a hole was drilled so that a four conductor cable could be run through the hole. Again the cable was epoxied into place using copious amounts of epoxy to ensure water tightness. Quick connects were used to connect the wires from the electrodes and thermistor to the cable, and the end caps were screwed into place. 





 


##Circuit board



[![image005.png](//i.publiclab.org/system/images/photos/000/016/030/medium/image005.png)](//i.publiclab.org/system/images/photos/000/016/030/original/image005.png)





The circuit for the CT sensor is fundamentally a voltage divider. An example of a voltage divider is shown above, and the relationship between input (Vin) and output (Vread) voltage is given by Vread = Vout(R2/(R2+R1)). Using some algebra, you can solve the equation for R2, which gives R2 = (V2*R1)/(V1-V2). By using a known input voltage (3.3V square wave in this case), a known value for R1, and reading the voltage at Vread, the value of an unknown resistor (i.e. water sample) at R2 can be determined. 



[![conductivity_example.png](//i.publiclab.org/system/images/photos/000/016/026/medium/conductivity_example.png)](//i.publiclab.org/system/images/photos/000/016/026/original/conductivity_example.png)



 
The actual CT circuit is only a bit more complicated and is shown above. The resistor values of the voltage divider can be selected from a number of values using a digital switch. In the above circuit resistors R1-R4 would correspond to R1 in the simple voltage divider circuit; and R5, R6, and R8 (Rprobe) would correspond to R2 in the simple voltage divider circuit.  By selecting a resistor (R1-R4) that is closest to the resistance of the sample to be analyzed, a more accurate measurement can be made. Also, resistors R5 or R6 act as an internal reference allowing you to check for drift before making a measurement with the conductivity probe (R8).

##Conductivity Calibration
The conductivity calibration is fairly straight forward, although a calibration must be preformed for each conductivity range being measured (i.e. each resistor- R1-R4 - that can be selected by the digital switch). The conductivity calibration is done by simply setting the digital switch to the desired range (on board resistor), then putting resistors of accurately known values in place of the conductivity cell and recording the voltage output at the microcontroller. 

Once the relationship between read voltage and cell resistance is know from the above calibration, the next step is to determine the cell constant of the conductivity cell. The cell constant is the relationship between measured resistance and conductance. To determine the cell constant you simple select one of the on board resistor values (R1-R4) that has been calibrated, and the conductivity cell (R8 in the above circuit) with the digital switch. Then measure the resistance of a few solutions of known conductivity (i.e. a KCl solution).



[![image007.png](//i.publiclab.org/system/images/photos/000/016/027/medium/image007.png)](//i.publiclab.org/system/images/photos/000/016/027/original/image007.png)





[![image008.png](//i.publiclab.org/system/images/photos/000/016/028/medium/image008.png)](//i.publiclab.org/system/images/photos/000/016/028/original/image008.png)





  
 

##Temperature Calibration

The temperature calibration was done in a similar fashion as the conductivity calibration. The calibration is done by putting a resistor across the terminals where the thermistor would be attached and measuring the voltage output. The resistors should span the range of resistances the thermistor will have in the temperature range expected. This can be determined by looking at the Resistance-Temperature (RT) data provided with the thermistor. 

Once the resistance to output voltage is known for the thermistor circuit, the next step is to fit to the RT data provided with the thermistor to an equation in Excel or like program. From the above calibration and the equation generated from the thermistor’s RT data, the temperature can be determined. 
 


[![image009.png](//i.publiclab.org/system/images/photos/000/016/029/medium/image009.png)]