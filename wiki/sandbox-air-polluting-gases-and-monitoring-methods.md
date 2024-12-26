---
title: "sandbox-air-polluting-gases-and-monitoring-methods"\ntagnames: ''
author: bhamster
path: /wiki/sandbox-air-polluting-gases-and-monitoring-methods.md
nid: 25102
uid: 664477

---

# sandbox-air-polluting-gases-and-monitoring-methods

by [bhamster](../profile/bhamster)

November 24, 2020 19:54 | Tags: 

----

**What are some common outdoor air-polluting gases and what kinds of tools are available to detect and measure them?** On this page, we’re collecting information on gas-phase pollutants, approaches to investigate them, example tools, and pollutant-related posts from the Public Lab community. For a similar overview of particulate matter monitoring, [check out this page](https://publiclab.org/wiki/choosing-a-method-for-particulate-matter-monitoring). 

_**These lists are nowhere near exhaustive, please help them grow by editing this page or adding and answering questions!**_ 

_You can also follow along and get updates on new resources by subscribing to `gas-monitoring`._

<a class="btn btn-primary btn-lg" href="https://publiclab.org/subscribe/tag/gas-monitoring">Subscribe to gas-monitoring</a>
<hr>

## Main approaches to monitor gases

+ **[Odor logging](https://publiclab.org/wiki/odor)**: many air pollutants have a [distinctive smell](https://publiclab.org/notes/kgradow1/10-31-2020/smells-that-kill-how-to-identify-odours). Learn how to keep an odor log and map bad odor events, and check out other posts on Public Lab about odor. 
+ **[Air sampling](https://publiclab.org/wiki/air-sampling)**: capturing air in a container, for example through [whole air sampling](https://publiclab.org/notes/kgradow1/05-30-2020/whole-air-sampling) (like grab samples) or sorbent tube sampling. Check out @kgradow1’s [post](https://publiclab.org/notes/kgradow1/05-30-2020/whole-air-sampling) to learn the difference between these two sampling approaches. The air sample typically requires [lab analysis](https://publiclab.org/wiki/air-lab-testing), which will tell you exactly what compounds are in the air sample and their concentrations (amount per volume of air).
+ **[Air sensors](https://publiclab.org/wiki/air-sensors)**: detect gases continuously, in real-time. There are many commercially-available sensors for detecting specific gases, and they vary in the way they sense chemicals, their price, sensitivity, and accuracy.
+ **Colorimetric strips / badges**: a material with a reactive surface changes color when exposed to a gas, with the amount of color-change indicating the relative amount of exposure. Generally lower-cost and easy to use, with the main limitation being less quantitative data.
<br>
<br>

## Common gas-phase air pollutants and example tools

<div class="alert alert-warning" role="alert">
<ul>
<li><a href="https://publiclab.org/wiki/sandbox-air-polluting-gases-and-monitoring-methods#Volatile+organic+compounds+(VOCs)">Volatile organic compounds (VOCs)</a></li>
<li><a href="https://publiclab.org/wiki/sandbox-air-polluting-gases-and-monitoring-methods#Nitrogen+oxides+(NOx)">Nitrogen oxides (NOx)</a></li>
<li><a href="https://publiclab.org/wiki/sandbox-air-polluting-gases-and-monitoring-methods#Ground-level+ozone+(O3)">Ground-level ozone (O3)</a></li>
<li><a href="https://publiclab.org/wiki/sandbox-air-polluting-gases-and-monitoring-methods#Hydrogen+sulfide+(H2S)">Hydrogen sulfide (H2S)</a></li>
<li><a href="https://publiclab.org/wiki/sandbox-air-polluting-gases-and-monitoring-methods#Carbon+monoxide+(CO)">Carbon monoxide (CO)</a></li>
</ul>
</div>

<hr>

### Volatile organic compounds (VOCs)

+ **What are VOCs?** Carbon-based compounds that evaporate easily into gases. VOCs react with nitrogen oxides (NOx) and sunlight to form ozone, another air pollutant.
+ **Common VOCs in outdoor air**: benzene, toluene, ethylbenzene, and xylene (BTEX); ethylene oxide; light alkanes.
+ **Common sources**: oil and gas operations, petrochemical plants (e.g., plastics manufacturing), chemical manufacturing, agricultural activities, motor vehicle exhaust, solvent use. 
<br>

#### Example tools to detect VOCs

**Air samplers paired with lab analysis** currently give more accurate and precise results than commercially available low-cost air sensors for VOCs. 

Data from **low-cost devices that use metal oxide (MOX) sensors** (like the Adafruit CCS811 Air Quality Sensor Breakout, meant for indoor air) or **photoionization detector (PID) sensors** to detect VOCs have questionable accuracy. [This comment](https://publiclab.org/questions/stevie/02-28-2020/does-anyone-have-experience-assembling-low-cost-voc-kits-using-adafruit-s-voc-sensor#c26516) from @cfastie fabulously explains how the CCS811 MOX VOC sensor works, its benefits, and its limitations:
>In general, these sensors will allow you to see how VOC is changing over time or in response to events. The absolute values for VOC will not have much meaning (i.e., they won't stand up in court).

<br>

##### **[Bucket monitor](https://publiclab.org/wiki/bucket-monitor)**

<img style="width: 100%; height: 100%" src="https://publiclab.org/i/41801?s=o" alt="bucket">

+ Grab samples
+ With lab analysis, can test for up to 97 VOCs
+ Open source tool with complete [build](https://publiclab.org/notes/kgradow1/11-08-2020/how-to-build-a-bucket-air-monitor) and [sampling](https://publiclab.org/notes/A_SCH/11-08-2020/how-to-take-a-sample-with-a-bucket-monitor?_=1604854405) instructions 
+ [Community success stories](https://publiclab.org/notes/A_SCH/11-08-2020/mobilizing-action-through-community-science-draft) in using the bucket monitor to take action
<br>

##### **[Summa canister ](https://publiclab.org/wiki/air-sampling#The+Summa+Canister)**

+ Grab samples or integrated samples
+ With lab analysis, can test for up to 97 VOCs
+ Commercially available, some air testing labs rent them out
<br>

##### **[Sorbent tube](https://publiclab.org/notes/kgradow1/05-30-2020/whole-air-sampling#How+is+whole+air+sampling+different+from+sorbent+tube+sampling?) / cartridge samplers**

+ Integrated samples
+ Targeted test for specific compounds
+ Wearable/portable device
+ Commercially available
<br>

##### **[EPA’s Sensor Pod (S-Pod)](https://www.epa.gov/sciencematters/tracking-emissions-using-new-fenceline-monitoring-technology)**

+ Photoionization detector (PID) sensor
+ Detects air pollution plumes and total VOC concentration, especially suited for fenceline monitoring
+ Open source
+ Sensor is paired with a canister grab sampler; solar-powered
<br>

##### **["Sniffle" beta project - Methane Gas Sensor](https://publiclab.org/notes/Bob/06-17-2016/riffle-beta-project-methane-gas-sensor)**

+ Datalogging sensor for methane
+ Detects natural gas leaks
+ Combined with a GPS to help map methane readings
+ Open source, by @Bob
<br>

#### Community posts about VOCs

[nodes:voc]

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

### Nitrogen oxides (NOx)

+ **What are nitrogen oxides?** Gases including nitric oxide (NO) and nitrogen dioxide (NO2). They react in ambient air to form other pollutants: particulate matter and when sunlight is present, ozone.
+ **Common sources**: power plants (coal- and oil-fired), industrial facilities, motor vehicle emissions
<br>

#### Example tools to detect NOx

[This comment](https://publiclab.org/questions/Alex_Solaga/05-18-2020/which-no2-sensor-for-low-concentration-measurement#c26882) by @guolivar offers an excellent summary of a few lower-cost NO2 sensors.  

##### **[MACA - Open AQ monitor](https://publiclab.org/wiki/maca)**

<img style="width: 50%; height: 50%" src="https://publiclab.org/i/41807?s=o" alt="MACA">

+ Metal oxide sensor for nitrogen dioxide, carbon monoxide, and ozone, plus an optical sensor for particulate matter
+ Open source, Arduino-based monitor by @nanocastro
<br>

##### **[Smart Citizen Kit 1.1](https://waag.org/en/project/smart-citizen-kit)**

+ NO2 and CO sensors on version 1.1
+ Open source
<br>

#### Community posts about nitrogen oxides

[nodes:nitrogen-dioxide]

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

### Ground-level ozone (O3)

+ **What is gound-level ozone?** A secondary pollutant that’s a  major part of smog and forms when volatile organic compounds (VOCs) or carbon monoxide react with nitrogen oxides in the presence of sunlight. 
+ **Common sources**: motor vehicle emissions, industrial facilities 
<br>

#### Example tools to detect ground-level ozone

##### **[MACA - Open AQ monitor](https://publiclab.org/wiki/maca)**

<img style="width: 50%; height: 50%" src="https://publiclab.org/i/41807?s=o" alt="MACA">

+ Metal oxide sensor for ozone, carbon monoxide, and nitrogen dioxide, plus an optical sensor for particulate matter
+ Open source, Arduino-based monitor by @nanocastro
<br>

##### **[Ozone sensor (MiCS-2614)](https://publiclab.org/notes/filimon_k/12-13-2015/ozone-sensor-mics-2614-and-blue-light-sensor-mini-photocell)**

+ Electromechanical ozone sensor
+ A wearable, Arduino-based platform by @filimon_k
<br>

##### **[AirSensEUR](http://www.snuffle.org/doku.php?id=airsenseur)**

+ Electrochemical sensors for ozone, nitrogen dioxide, nitric oxide, carbon monoxide
+ Open source
<br>

#### Community posts about ground-level ozone

[nodes:ozone]

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

### Hydrogen sulfide (H2S)

+ **What is hydrogen sulfide?** A flammable gas with a strong odor of rotten eggs at low concentrations, and weaker odor at high concentrations or after longer exposure to low concentrations. Check out the Public Lab [hydrogen sulfide wiki page here](https://publiclab.org/wiki/hydrogen-sulfide) to learn more about hydrogen sulfide regulations and DIY detection methods, and see questions from the Public Lab community. Also check out this [summary of methods for detecting hydrogen sulfide](https://publiclab.org/wiki/hydrogen-sulfide-detection). A few tools are highlighted below.
+ **Common sources**: agricultural industry (e.g., concentrated animal feeding operations = CAFOs) crude oil and natural gas production, volcanic emissions
<br>

#### Example tools to detect hydrogen sulfide

##### **[Photographic paper](https://publiclab.org/wiki/hydrogen-sulfide-photopaper)**

<img style="width: 50%; height: 50%" src="https://publiclab.org/system/images/photos/000/023/126/original/Screen_Shot_2018-01-08_at_3.11.42_PM.png" alt="photographicpaper">

+ Strips of photographic paper tarnish (darken) when exposed to hydrogen sulfide. Darker strips indicate higher levels of exposure. 
+ Easy-to-interpret results, [but less quantitative](https://publiclab.org/wiki/hydrogen-sulfide-photopaper#Method+Limitations).
+ [Find many community posts about photopaper testing here](https://publiclab.org/tag/h2s-photopaper).
<br>

##### **[Copper pipe testing](https://publiclab.org/wiki/hydrogen-sulfide-copper-pipe)**

+ Elemental copper in the pipe reacts with hydrogen sulfide and turns a purple-black color as copper sulfide is produced.
+ Low-cost and accessible method, but has yet to be quantified or validated.
+ Check out more [community posts about copper pipe testing here](https://publiclab.org/tag/h2s-copper-pipe).
<br>

##### **[Bucket monitor](https://publiclab.org/wiki/bucket-monitor)**

+ Grab samples
+ Use with lab analysis to measure H2S levels
+ Open source tool with complete [build](https://publiclab.org/notes/kgradow1/11-08-2020/how-to-build-a-bucket-air-monitor) and [sampling](https://publiclab.org/notes/A_SCH/11-08-2020/how-to-take-a-sample-with-a-bucket-monitor?_=1604854405) instructions 
+ [Community success stories](https://publiclab.org/notes/A_SCH/11-08-2020/mobilizing-action-through-community-science-draft) in using the bucket monitor to take action
<br>

##### **[Hydrogen sulfide sensors](https://publiclab.org/wiki/hydrogen-sulfide-sensor)**

+ Arduino-based platforms using commercially available sensors.
<br>

#### Community posts about hydrogen sulfide

Questions: https://publiclab.org/wiki/hydrogen-sulfide#Questions

Activities: https://publiclab.org/wiki/hydrogen-sulfide#Activities

And more research notes and wiki pages from the hydrogen sulfide tag page here: https://publiclab.org/tag/hydrogen-sulfide

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

### Carbon monoxide (CO)

+ **What is carbon monoxide?** A colorless and odorless gas.
+ **Common sources**: burning fossil fuels, motor vehicle emissions.
<br>

#### Example tools to detect carbon monoxide

##### **[MACA - Open AQ monitor](https://publiclab.org/wiki/maca)**

+ Metal oxide sensor for nitrogen dioxide, carbon monoxide, and ozone, plus an optical sensor for particulate matter
+ Open source, Arduino-based monitor by @nanocastro
<br>

##### **[Smart Citizen Kit 1.1](https://waag.org/en/project/smart-citizen-kit)**

+ CO and NO2 sensors on version 1.1
+ Open source
<br>

#### Community posts about carbon monoxide

[nodes:carbon-monoxide]

<br>
<hr style="height:2px;border-width:0;color:gray;background-color:gray">

## Questions about outdoor gas-phase pollutants

[gas-monitoring](../../tag/question:gas-monitoring)

<br>
<br>

## Activities about outdoor gas-phase pollutants

[gas-monitoring](../../tag/activity:gas-monitoring)

<br>
<br>

## Further reading and resources

+ [Snuffle.org](http://www.snuffle.org/doku.php?id=start): Lots of information on low-cost sensors for various air pollutants