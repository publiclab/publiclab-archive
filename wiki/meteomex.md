---
nid: 24071
title: MeteoMex: online monitoring of climate and volatile organic compounds
path: public/static/wiki/meteomex.md
uid: 7
tagnames: soil,vocs,data-logger,volatile-organochlorine-compounds,soil-sampling,meteomex,climate-data,non-commercial,solar-energy,volatile-organic-compounds
---

# MeteoMex: online monitoring of climate and volatile organic compounds

The online monitoring of air temperature, humidity, atmospheric pressure, and volatile organic compounds (VOCs) gives essential information for agriculture/ gardening, safety, and contamination. 
The [MeteoMex project](http://www.meteomex.com/) develops open hardware/ software kits that are internet-of-things (IoT) capable, open technology, and of low cost.

### My vision: Community collection of climate data

The installation of many MeteoMex instances worldwide would allow the **generation of massive amounts of climate and contamination data**, using low-cost and affordable sensors. **Public access to these data** and data mining would allow documenting changes in the environment at the microscale and improve predictions.
At the same time, the MeteoMex devices serve for **optimizing the use of limited resources** such as energy for heating/ cooling and water for irrigation.

### Location

I started the MeteoMex project in Germany during a [sabbatical stay at the Max Planck Institute for Chemical Ecology](http://www.meteomex.com/serendipity/index.php?/archives/7-My-Sabbath-Year-2018-2019.html). My wife is a researcher/ professor studying interactions between plants and microbes in arid zones (see e.g., her paper in the [New Phytologist, 2015](https://nph.onlinelibrary.wiley.com/doi/full/10.1111/nph.13697)). However, monitoring the environmental conditions at the microscale (individual plants) is not trivial. Therefore, I was asked by her to develop simple and low-cost devices that are 'fieldable'. Coming back to our research institute [CINVESTAV, Irapuato](http://www.ira.cinvestav.mx), Mexico, I developed different versions of the MeteoMex. Currently, I see the high potential in monitoring greenhouses and buildings, since already small adjustments in air conditioning are having a significant impact on energy consumption. As well, air contamination and its effect on human health are receiving more attention from the public, why we are now collaborating with the [National Institute for Respiratory Diseases in Mexico City](https://www.gob.mx/salud/iner). 

### Goals and Motivations

I am a researcher/ professor for analytical chemistry, with a focus on mass spectrometry ([my Google Scholar profile](https://scholar.google.com.mx/citations?hl=de&user=fyMS1UQAAAAJ&view_op=list_works&sortby=pubdate)). My research group has a strong commitment with the **development of open hardware and software** for supporting the [non-commercial peer production](http://www.congo-education.net/wealth-of-networks/) (see e.g., our [Open LabBot](https://www.sciencedirect.com/science/article/pii/S0026265X19321873)). My initial motivation was the collection of environmental data for supporting basic research. I learned about the [Arduino](https://www.arduino.cc) technology, sensors and [PCB design](https://en.wikipedia.org/wiki/Printed_circuit_board). 
Then, I tested various platforms for the internet-of-things (IoT) and concluded that online collection of data from many distributed low-end units is more informative than a few high-end analytical instruments. The MeteoMex project has a modular design. All of them use Arduino-compatible [Wemos](https://www.wemos.cc) boards with WiFi connections. The devices can be powered by USB, battery, or solar energy. Depending on the PCB, either I2C bus sensors can be used, analog or digital sensors.
Now, **I want to make the platform accessible to the community and address real-world questions and problems**.

### People who are involved

I am the leading developer of the project. Although I am already quite satisfied with the technical advance of MeteoMex, now **I am looking for people that use them in different applications and spread the word**. Several collaborators are using the MeteoMex in their scientific projects, such as monitoring soil parameters in the desert, air quality in urban areas, and server room monitoring.

### What are we working on now

My main interest at the moment is **scaling the project**. We founded a company, [Kuturabi SA de CV](http://kuturabi.com) for the technology transfer of our lab developments, importing components, writing invoices, and paying people. This company is somehow strange because we focus on the development of non-proprietary technology and open software rather than short-term profit. Economically speaking, our goal for the next twelve months would be a month with a zero balance ;-).
The **MeteoMex terra** (soil moisture and temperature) still needs some development work for the **operation on solar/ battery energy**. As well, we are currently testing the use of a MeteoMex as a **data logger** (without the need for a WiFi connection) with an SD card/ real-time clock shield.  

### Updates

Are you interested in following along in the project? Subscribe to the tag below to get updates when we post new material. 

<a class="btn btn-large btn-primary" href="https://publiclab.org/subscribe/tag/meteomex">Subscribe to updates on this project </a>

[notes:meteomex] 

### Questions

Here's a place to list things you have questions about or issues or **challenges you're hoping to solve in this project**. What questions helped guide the work? Let's build out a Frequently Asked Questions area:

[questions:meteomex]

****

### Activities we've done in our project

[activities:meteomex]

### Data
At the moment, I am running an [Open Source Thingsboard server](https://thingsboard.io/) for collecting the data. The backend is a [PostgreSQL database](https://www.postgresql.org/). Access to these data is possible with a guest account.
**Some examples of life installations**
Weather station with VOCs monitoring:
<http://www.meteomex.com:8080/dashboard/cbde9020-2f3e-11ea-a96e-c3dba8703f6d?publicId=e96f3c70-2f4d-11ea-a96e-c3dba8703f6d>
Greenhouse (climate only):
<http://www.meteomex.com:8080/dashboard/41cec270-5026-11ea-82fe-e564ffe0f994?publicId=e96f3c70-2f4d-11ea-a96e-c3dba8703f6d>
Chemical lab (climate and VOCs):
http://www.meteomex.com:8080/dashboard/cc908db0-3241-11ea-a96e-c3dba8703f6d?publicId=e96f3c70-2f4d-11ea-a96e-c3dba8703f6d