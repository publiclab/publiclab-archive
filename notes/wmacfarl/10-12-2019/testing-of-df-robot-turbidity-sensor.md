---
title: "Testing of DF Robot Turbidity Sensor"

tagnames: 'arduino, sensors, water-quality, turbidity, oil-and-gas-water-trio, activity:oil-and-gas-water-trio'
author: wmacfarl
path: /notes/wmacfarl/10-12-2019/testing-of-df-robot-turbidity-sensor.md
nid: 21114
uid: 424597

cids: 25761

---

![](https://publiclab.org/public/system/images/photos/000/035/701/original/00_turbidity_sensor.jpg)

# Testing of DF Robot Turbidity Sensor

by [wmacfarl](../../../profile/wmacfarl) | October 08, 2019 15:48

October 08, 2019 15:48 | Tags: [arduino](../tag/arduino), [sensors](../tag/sensors), [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [oil-and-gas-water-trio](../tag/oil-and-gas-water-trio), [activity:oil-and-gas-water-trio](../tag/activity:oil-and-gas-water-trio)

----

## Purpose
This note is part of a series on setting up, testing, and calibrating the DF Robot analog liquid sensors.

Because all of the sensors in this series share a common interface, much of what you need to do to set up and use them is the same regardless of which sensor you are using.

See [this guide](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors) for an overview of the sensors and the basic setup process.

This note contains details about the process that are specific to using the DF Robot Turbidity sensor with the Arduino.  The section headings in this guide all link to the corresponding sections in the general sensor overview guide.

## [Required Materials][1]

- [DFRobot Turbidity Sensor](https://www.dfrobot.com/product-1394.html)**[](https://www.dfrobot.com/product-1394.html) ($9.90 from [DFRobot](https://www.dfrobot.com/))

  This is the sensor that we are going to be using to collect data. The sensor itself is a small plastic enclosure with a light-source and light-sensor. The sensor shines light out from the light source. This light travels through a small quantity of the liquid you are measuring. The amount of light that makes it through the liquid to the light-sensor gives us a measurement of how opaque the water is.

  The sensor plugs into a small board with a circuit. This board can be connected to your Arduino and simplifies the process of getting data from the sensor.

- See the [materials list in the series overview](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Materials+needed) for other materials.

## Step 1:  [Testing Your Arduino](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Step+1:+Testing+Your+Arduino)

Before we do any work building the circuit for our sensor or writing code for the Arduino, we want to make sure that the Arduino works on its own and that we can connect to it using our computer.

To test the Arduino, we need to install the Arduino IDE software, connect the Arduino to our computer, and upload a simple test program to verify that everything is functioning. If we do this before we do any other work then we will know that we are starting with a functioning Arduino.

For more detail see: [Setting Up and Testing an Arduino](https://publiclab.org/notes/wmacfarl/10-22-2019/how-to-set-up-and-test-an-arduino).

## Step 2: [Connecting Your Sensor to Your Arduino][2]

The DFRobot Turbidity sensor consists of two parts, the sensor probe and the circuit board. This can be connected to each other and to your Arduino with the included sets of wires.

![image description](https://publiclab.org/i/35625.jpg "turbidity_sensor_parts.jpg")

The sensor probe can be connected to the circuit board using the included BLACK-YELLOW-RED set of 3 wires.

These wires have a white plastic connector on both sides that will allow you to plug them into sockets on the sensor probe and the circuit board.

#### Start by plugging the wire into the plug on the circuit board.

![image description](https://publiclab.org/i/35628.jpg "sensor_hookup_right.jpg")

_NOTE: These wires are NOT reversible. Make sure the correct side of the wires is connected to the circuit board._

If you are looking at the circuit board from the top with the writing right-side-up, you will plug the wire into the socket on the left side of the board.

The BLACK wire will be the top wire, with YELLOW in the middle and RED on the bottom.

The plug on the other side of the wire has a small plastic clip on top of it but is otherwise identical and will fit into this socket but the wires go RED BLACK YELLOW. This setup is incorrect.![image description](/i/35629.jpg "sensor_hookup_wrong.jpg")

#### Plug the other side of the wires to the socket on the sensor probe

The other side of the set of wires has a small tab on the top of the plug and has a color-order of RED-BLACK-YELLOW. Plug this side into the socket on the bottom of the sensor-probe.

![image description](/i/35630.jpg "sensor_hookup_complete.jpg")

\_Note: if the board and probed are arranged in this way, then the wiring should be as follows:\_

- TOP wire on board connected to the BOTTOM wire on the probe
- MIDDLE wire on board connected to TOP wire on probe
- BOTTOM wire on board connected to MIDDLE wire on probe

## Step 3: Connect Hook-up Wires to Sensor Circuit Board

On the other side of the circuit board from the sensor connection there is another socket that you can plug your other set of wires into. These wires will allow us to connect our sensor to our Arduino.

![image description](/i/35635.jpg "circuit_board_complete.jpg")

This BLACK-RED-BLUE set of wires has the plug to connect to the sensor-board on one side and a set of sockets on the other. We will use our hook-up wire to make a connection between these sockets and our Arduino.

![image description](/i/35636.jpg "board_to_hookup_wire.jpg")

## Step 4: [Connect Sensor Circuit Board to Arduino][3]
See [this section in the overview guide for instructions.](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Step+3:+Connect+Sensor+Circuit+Board+to+Arduino)

The DF Robot analog sensors all share a common design so that they all connect to the Arduino in the same way.

## Step 5: [Upload and Test Code][4]
For more information about the general process of finding and using Arduino code to work with sensors see [this section in the overview guide.](https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Step+4:+Upload+and+Test+Code)

The [turbidity sensor guide](https://wiki.dfrobot.com/Turbidity_sensor_SKU__SEN0189) on the DF Robot wiki has sample code that we can use to get started.  The most important thing to note about this code is that at uses the analog pin **A0** to read input from the sensor.  This means that we need to make sure we plugged our sensor's DATA (BLUE) wire into pin A0. 

```
```

void setup() {
Serial.begin(9600); //Baud rate: 9600
}
void loop() {
int sensorValue = analogRead(A0);// read the input on analog pin 0:
float voltage = sensorValue \* (5.0 / 1024.0); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
Serial.println(voltage); // print out the value you read:
delay(500);
}

```
```

This code is pretty simple. It does just a couple of things:

- Sets up a way to send data from the Arduino to the computer over the USB port: **Serial.begin(9600)**
- Reads the a value coming in from the sensor on pin A0: **sensorValue = analogRead(A0)**
- Does some math to convert that value, which comes in as a number between 0 and 1023, to a voltage for easier reading: **voltage = sensorValue \* (5.0 /1024.0)**
- Sends this voltage to the computer over the USB port: **Serial.println(voltage)**

It does that over and over again with a half-second delay between each reading.

We can copy and paste this code into our Arduino IDE and then use the "Upload" button to send it to the Arduino.

![image description](/i/35695.png "arduino_code.png")

If everything is working, some lights should blink on the Arduino we should see an "Upload Successful" message at the bottom of the IDE.![image description](/i/35696.png "upload_successful.png")

If you don't, you can refer to the "Troubleshooting" steps in the beginning of this guide that we went through when we first tested our Arduino.

### Step 6: [Read Sensor Values][5]

Now that we've uploaded our code to the Arduino we want to check to see that we are getting data values back from our sensor and that these values make sense.

We can see the data being sent to our computer over the USB port using a tool in the Arduino software called the "Serial Monitor." You can access it through the "Tools" menu.

![image description](https://publiclab.org/i/35697.png "tools_serial_monitor.png")

The serial monitor will bring up a window that looks like this. You should see a new number between 0 and 5 appear once every half-second. This is the reading we are getting from our sensor. A _higher_ number corresponds to more light making its way to the sensor - this means \_less \_turbidity.

When the sensor is just in the air you should get a relatively high value. I get around 3.5 If I put an opaque object in the sensor probe I get a number near 0\.

This depicts me putting a piece of cardstock between the sensor probes and then taking it out again.![image description](/i/35698.png "data.png")

### Next Steps

Now that we know we are getting data that makes some sense and has some relationship to the sensor, our next steps are to calibrate it more precisely and take some measurements of actual liquids. We will go over that process in another research note.

### Troubleshooting

If you \_aren't \_getting sensible seeming data, there are a couple of likely culprits.

- If the value you get is always "0.0", you have probably reversed the wiring plug between the circuit board and the sensor probe. See "Step 1" for more details.
- If you are always getting a middling value that changes randomly without any regard for what is between the sensor probe, you have probably plugged the SIGNAL wire into the wrong pin of the Arduino. Make sure it is plugged into pin **A0** and that the code you have uploaded to the board says \*\*analogRead(A0) \*\*to match.
- If you don't get any number coming in through the Serial Monitor, you have probably not successfully uploaded your code to the Arduino. See the \*\*Testing Your Arduino \*\*section for more information.

If you have any other problems, \_please \_leave a comment on this research note. I would love to help you debug the issue and add it to my troubleshooting guide!

  [1]: https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Materials+needed
  [2]: https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Materials+needed
  [3]: https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Materials+needed
  [4]: https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors#Step+4:+Upload+and+Test+Code
  [5]: https://publiclab.org/notes/wmacfarl/10-22-2019/testing-the-df-robot-liquid-sensors?_=1571791816#Step%205:%20Read%20Sensor%20Values%20Using%20Serial%20Monitor