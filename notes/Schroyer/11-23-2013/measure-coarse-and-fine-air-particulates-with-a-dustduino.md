---
nid: 9818
title: Measure coarse and fine air particulates with a DustDuino
path: public/static/notes/Schroyer/11-23-2013/measure-coarse-and-fine-air-particulates-with-a-dustduino.md
uid: 381809
tagnames: arduino,particulate-sensing,air-quality,dustduino,dust,particulates,particulate,pm,fablab,shinyei,activity:dustduino,activity:pm,activity:data-logging,activity:dust,air-sensors,first-time-poster
---

# Measure coarse and fine air particulates with a DustDuino

<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-HTdN5Qg4Mf8/UmCl7W1rgSI/AAAAAAAABys/VgxbdptOeTw/s1600/dustduino+proto+2+desk.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="358" src="http://1.bp.blogspot.com/-HTdN5Qg4Mf8/UmCl7W1rgSI/AAAAAAAABys/VgxbdptOeTw/s640/dustduino+proto+2+desk.jpg" width="640" /></a></div>
<span id="goog_1033043237"></span><span id="goog_1033043238"></span><br />
_Originally posted on [MentalMunition.com](http://www.mentalmunition.com/2013/10/measure-air-pollution-in-your-home-or.html), on 10/18/2013._
<br />
This week, the World Health Organization (WHO) took a major step by announcing that air pollution is carcinogenic to humans.
<br />
WHO also announced they are considering particulate matter, a major component of indoor and outdoor air pollution, as carcinogenic to humans as well.
<br />
The <a href="http://www.iarc.fr/">International Agency for Research on Cancer</a> (IARC), a special unit inside WHO tasked with promoting international collaborations on cancer research, reached that conclusion after reviewing more than 1000 scientific papers on the carcinogenicity of air pollutants.
<br />
Air pollution and particulate matter will be included in IARC's Monograph, which is an encyclopedia of known carcinogens. Particulate matter will be classified as a Group 1 carcinogen, along with tobacco smoke and asbestos.
<br />
In an IARC press release [1], the Deputy Head of the Monographs Programme, Dr. Dana Loomis, said that the group's goal was to "evaluate the air everyone breathes rather than focus on specific air pollutants."
<br />
"The results from the reviewed studies point in the same direction: the risk of developing lung cancer is significantly increased in people exposed to air pollution," he said.
<br />
This finding elevates the urgency to clean up the air, both outdoors and indoors. But how does one find out the condition of the air in the first place? How healthy is your air?
<br />
<!--more-->Finding that answer can be difficult and expensive. Most Environmental Protection Agency-quality particulate matter monitors send air through a filter, which must be precisely weighed, and produce only one reading a day. Other EPA monitors that sample continuously cost more than $14,000 each to deploy.[2]
<br />
Mass concentration is the norm for quantifying airborne particulate matter worldwide, and is usually expressed in micrograms of particulates per cubic meter of air (μg/m3). However, there are an increasing number of affordable particulate sensors coming on the market which rely instead on lasers and LEDs to count the number of particles instead.
<br />
For more background on the specifics of particulate matter sensing, please refer to earlier work on Mental Munition regarding particle counting sensors [3,4]. This post will focus on hacking together your own <a href="http://www.mentalmunition.com/2013/05/dustduino-plan-to-crowdsource.html">DustDuino</a> prototype, which will allow you to monitor dust levels in your home (or back yard) from anywhere you have internet access, for about $100.
<br />
What will the end product look like, online? <a href="http://xively.com/feeds/499600824">It will look a little like this (my own live DustDuino feed).</a>
<br />
To make a DustDuino, you will need:
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-4VxDLuDJfP8/UmCoqUufsLI/AAAAAAAABzE/03lt24VK5H4/s1600/DustDuino+guts.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="358" src="http://2.bp.blogspot.com/-4VxDLuDJfP8/UmCoqUufsLI/AAAAAAAABzE/03lt24VK5H4/s640/DustDuino+guts.jpg" width="640" /></a></div>
<br />
1) A WiFi network in your home
2) <a href="https://www.sparkfun.com/products/11021">Arduino Uno development board</a>
3) <a href="http://www.mouser.com/ProductDetail/Arduino/A000064/?qs=Cvel0QnFNSJK4W8LtutgWg%3D%3D&amp;gclid=CLvD8cGAn7oCFeYWMgodYEEAtA">Arduino Wireless Proto Shield</a><br />
4) <a href="http://www.seeedstudio.com/depot/grove-dust-sensor-p-1050.html">Shinyei PPD-42 Dust Sensor </a>
5) <a href="https://www.sparkfun.com/products/10822">Sparkfun Roving Networks RN-XV WiFi module</a>
6) <a href="http://www.seeedstudio.com/depot/typeb-usb-cable-for-arduino-diecimila-and-freeduino-p-130.html?cPath=98_100">USB type B cable</a> (for programming the Arduino)
7) <a href="http://www.seeedstudio.com/depot/wall-adapter-power-supply-9vdc-1a-p-1509.html?cPath=1_4">9V DC power supply</a> (or a 5V USB cell phone charger along with your USB-B cable)
8) <a href="https://www.sparkfun.com/products/11367">22AWG solid core hookup wire</a> (M/M jumper wires can be used in a pinch)
9) Soldering equipment (soldering iron, solder, and soldering paste)
10) Arduino sketch from the <a href="https://github.com/NodeJournalism/DustDuino">DustDuino GitHub repository</a> (<a href="https://github.com/NodeJournalism/DustDuino/archive/master.zip">zipped repo</a> also contains background literature on the PPD-42, mass concentration algorithms, and the DustDuino logo).
<br />
<h2>
Step 1: Program the WiFi module</h2>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-vOlrwmM9lwE/UQ6lUWp4pAI/AAAAAAAAAvQ/4WUGJ2uioMM/s1600/RNXV_PIC.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="358" src="http://2.bp.blogspot.com/-vOlrwmM9lwE/UQ6lUWp4pAI/AAAAAAAAAvQ/4WUGJ2uioMM/s640/RNXV_PIC.jpg" width="640" /></a></div>
<br />
For the DustDuino to transmit any data, it needs to be connected to your home WiFi network. <a href="http://www.mentalmunition.com/2013/06/step-by-step-guide-to-programming-rn-xv.html">Consult my post on programming the RN-XV for details</a>.
<br />
Like the Arduino Uno, which serves as the DustDuino's "brain," the RN-XV will be on constantly. The RN-XV is set up to connect to your home's WiFi network as soon as power is connected, and it will remain connected so long as there is power.<br />
<h2>
Step 2: Hook up the Shinyei PPD-42 particulate sensor</h2>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://4.bp.blogspot.com/-iyoKpH_NNzA/UmCm11WKsHI/AAAAAAAABy0/SAm5evZGfVQ/s1600/PPD42+connector.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="358" src="http://4.bp.blogspot.com/-iyoKpH_NNzA/UmCm11WKsHI/AAAAAAAABy0/SAm5evZGfVQ/s640/PPD42+connector.jpg" width="640" /></a></div>
<br />
When you order the Shinyei sensor, it will come packaged with a connector to interface with the <a href="http://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134">Seeedstudio Grove Shield</a>. Instead of purchasing a whole new shield just to attach a single sensor, I recommend simply sticking either jumper wires, or stripped 22AWG solid core wire into the end of the Grove connector.
<br />
The black wire on the Grove cable corresponds to ground, so that wire should be connected to GND on the Arduino Wireless Shield. The red wire on the Grove cable will be connected to 5V on the Wireless Shield, while the remaining white wire will be plugged into the digital "8" pin on the Shield.
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://3.bp.blogspot.com/-V66NnhE8Y1A/UmCngtjIpCI/AAAAAAAABy8/AtYVdVgDVD8/s1600/PPD42+solder+P2.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="358" src="http://3.bp.blogspot.com/-V66NnhE8Y1A/UmCngtjIpCI/AAAAAAAABy8/AtYVdVgDVD8/s640/PPD42+solder+P2.jpg" width="640" /></a></div>
<br />
There's another issue with using the included Grove connector: it doesn't make use of all the sensor's available channels. The included connector will only make use of the Shinyei's P1 channel, which is for counting particles between 1 and 10 microns. But the PPD-42 also has a P2 channel, which counts particles between 2.5 and 10 microns.
<br />
By measuring both P1 and P2 channels, it's possible for the DustDuino to differentiate between the PM2.5 and PM10, which are the two major ranges of particles recognized by the EPA and similar agencies. The smaller particulates that measure 2.5 microns and under are of special concern, since those have the potential to enter the blood stream and cause the most harm [5].
<br />
To measure the P2 channel, strip a solid core 22AWG wire and solder the end of the wire to the second pin on the PPD-42. This is the pin located between GND and 5V. It might be a good idea to use a little hot glue to insulate the connection and provide a little strength.
<br />
Your new P2 channel will be connected to the digital "9" pin on the Wireless Shield.
<br />
<h2>
Step 3: Set up a Xively account </h2>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-eYhwnKz5Le0/UmF-2p8u6-I/AAAAAAAABzw/VNvtQPSwIh0/s1600/xively1.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="400" src="http://1.bp.blogspot.com/-eYhwnKz5Le0/UmF-2p8u6-I/AAAAAAAABzw/VNvtQPSwIh0/s640/xively1.jpg" width="640" /></a></div>
<br />
All that data being produced by the DustDuino will have to go somewhere, and it might as well go somewhere you can easily access. Xively is a service that <a href="https://xively.com/whats_xively/">markets itself</a> as a "public cloud specifically for the internet of things," which allows you to view your sensor data from home computer, tablet, or smartphone.
<br />
That service can get quite expensive, but you can <a href="https://xively.com/signup/">sign up for a free developer account</a>, which can store up to 30 channels of data across five devices (a channel is a single stream of data -- like temperature, or humidity, or PM2.5 or PM10). With a free Xively account, any data older than 30 days will be deleted.
<br />
Xively can walk you through the process of <a href="https://xively.com/dev/tutorials/xively/">setting up an account</a>, but there are some specific things you'll need to do to make sure it's set up to receive DustDuino data.
<br />
You will need to create a device with four channels, named:
<br />
PM10
PM10count
PM25
PM25count
<br />
PM10count and PM25count channels will store the number of PM10 and PM2.5 particles counted by the Shinyei PPD-42 sensor, while PM10 and PM25 channels will store mass concentration as calculated by the DustDuino code.
<br />
Record the Feed ID for this device, which you'll need to insert into the Arduino code later. Also save the name of the device, which you'll also need for the Arduino code.
<br />
The last thing you'll need to do here is to create an API key which will give your DustDuino permission to store data on your Xively account. Every time the DustDuino sends data to Xively, it needs send along this unique key. To make a new API key, or find an existing key, go to "settings," and then click "Master Keys."
<br />
Copy and paste this API key somewhere easy to find, as you'll need to manually insert it into the Arduino code in our next step.
<br />
<h2>
Step 4: Code the Arduino</h2>
<br />
The Arduino is fairly capable "out of the box," but for more complicated tasks like getting the RN-XV to connect to the Xively server, it's helpful to have blocks of code already written out. Those blocks of code are known as <a href="http://arduino.cc/en/Reference/Libraries">libraries</a>.
<br />
Fortunately there's only one library you'll need for the DustDuino, and that's the <a href="https://github.com/harlequin-tech/WiFlyHQ">WiFlyHQ library</a>. The Arduino website has instructions on how to <a href="http://arduino.cc/en/Guide/Libraries">install Arduino libraries</a>.
<br />
After installing the WiFlyHQ library, open up the DustDuino.ino file in the Arduino IDE. Find the <span style="font-family: &quot;Courier New&quot;,Courier,monospace;">#define APIKEY</span> code and replace the hash signs with your API Key.
<br />
Find the very next line, which begins <span style="font-family: &quot;Courier New&quot;,Courier,monospace;">#define FEEDID</span>, and replace the hash signs with the Feed ID.
<br />
Finally, in the very next line, which begins <span style="font-family: &quot;Courier New&quot;,Courier,monospace;">#define USERAGENT</span>, replace the hash signs with the device name.
<br />
Save the sketch, and with the Wireless Shield detached from the Arduino Uno, upload the sketch to the Arduino. After the sketch is uploaded, you may re-connect the Wireless Shield. Make sure the switch on the Wireless Shield is set to "Micro" before connecting your DustDuino to a power source.
<br />
You have several options for powering your DustDuino. You can purchase a separate "wall wart" style 9-volt DC adapter for the Arduino, or you can run power through the Arduino Uno's USB-B port.
<br />
If you do decide to supply power through the USB-B port, you may do so with a universal cell charging adapter that has a female USB connector. Most of these chargers supply 5 volts, but just to be sure, make sure to read any text on your cell charger. Another easy way to power the Arduino Uno is to keep it plugged in to your computer's USB port, but you have to keep your computer powered at all times.
<br />
<h2>
Step 5: Keep everything together</h2>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-ePbhNS-BMe4/UmCpWWtqESI/AAAAAAAABzQ/Av7xqDICOV0/s1600/DustDuino+unboxed.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="358" src="http://2.bp.blogspot.com/-ePbhNS-BMe4/UmCpWWtqESI/AAAAAAAABzQ/Av7xqDICOV0/s640/DustDuino+unboxed.jpg" width="640" /></a></div>
<span id="goog_1639516571"></span><span id="goog_1639516572"></span><br />
The Shinyei PPD-42 must be placed upright to work correctly. In other words, it must be placed on a vertical surface, with the connector must be pointing down, and the chrome part of the sensor pointing up.
<br />
This placement is important to drive air into the sensor. Inside the sensor chamber, at the bottom, is a resistor that heats up when power is connected. With this resistor, the sensor creates a warm updraft of air, which is meant to circulate dust inside the chamber.
<br />
According to an email from Shinyei customer service, the sensor doesn't need any kind of fan to blow air inside the sensor chamber. But the chamber must be open to the air you wish to sense.
<br />
The container doesn't have to be elaborate. One solution is to secure the sensor to the side of a cardboard box with a pushpin (the sensor has a convenient hole at the top of its circuit board for this kind of thing). If you have a cork board or other board that can be stuck with pins, you also can mount your sensor on a wall.
<br />
<div class="separator" style="clear: both; text-align: center;">
<a href="http://2.bp.blogspot.com/-xWLes9mtr2I/UmCsyJYz7eI/AAAAAAAABzY/FFZlGrbmGnM/s1600/dustduino+proto+2+on+wall.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="640" src="http://2.bp.blogspot.com/-xWLes9mtr2I/UmCsyJYz7eI/AAAAAAAABzY/FFZlGrbmGnM/s640/dustduino+proto+2+on+wall.jpg" width="480" /></a></div>
<br />
At the beginning of this post is a picture of a work in progress: an acrylic cube in which to store the DustDuino. The sides of this cube were cut from an 1/8th inch acrylic sheet using a 50-watt CO2 Epilog laser engraver at the <a href="http://cucfablab.org/">CU Community Fab Lab</a>. The design is not yet perfected, but when finished, the pattern will be made available as a PDF for download.
<br />
Please note that if you intend to deploy this sensor in your backyard, you will need to make a waterproof housing that still allows the sensor to sample air. You must also ensure the power source to your DIY housing is waterproof, as well. Like the indoor acrylic housing, this is a work in progress.
<br />
<h2>
One last word about this prototype</h2>
<div class="separator" style="clear: both; text-align: center;">
<a href="http://1.bp.blogspot.com/-Aav6lLpRvGQ/UmF9eGri4XI/AAAAAAAABzo/STmOFct3W-Y/s1600/dustduino+logo.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="640" src="http://1.bp.blogspot.com/-Aav6lLpRvGQ/UmF9eGri4XI/AAAAAAAABzo/STmOFct3W-Y/s640/dustduino+logo.jpg" width="640" /></a></div>
<br />
The DustDuino is a work in progress. I cannot make any guarantees as to whether your particular project will work. Having said that, this device has worked great for me so far. So given my personal success, and the recent WHO and IARC findings about particulate matter being carcinogenic, I felt it was time to release instructions and code into the wild.
<br />
If you put together a DustDuino have it working correctly, or have any suggestions, feel free to drop me a line at mschroyer@gmail.com.<br />
<h2>
Sources</h2>
<br />
<a href="http://www.iarc.fr/en/media-centre/iarcnews/pdf/pr221_E.pdf">[1]</a> "IARC: Outdoor air pollution a leading environmental cause of cancer deaths," International Agency for Research on Cancer, 17 October 2013.<br />
<a href="http://wireless.ece.drexel.edu/research/sd_air_quality.pdf">[2]</a> Uva, M., Falcone, R., McClellan, A., Ostapowicz, E. "Preliminary Screening System for Ambient Air Quality in Southeast Philadelphia," Drexel University, 2009.<br />
<a href="http://www.mentalmunition.com/2013/09/understanding-air-pollution-with-simple.html">[3]</a> Schroyer, M. "Understanding air pollution with a simple dust sensor," MentalMunition.com, 5 September 2013.<br />
<a href="http://www.mentalmunition.com/2013/05/dustduino-plan-to-crowdsource.html">[4]</a> Schroyer, M. "DustDuino: A plan to crowdsource environmental reporting with low-cost dust sensors," 30 May 2013.<br />
<a href="http://www.epa.gov/air/urbanair/">[5]</a> "What Are the Six Common Air Pollutants?" Environmental Protection Agency, 20 April 2012.