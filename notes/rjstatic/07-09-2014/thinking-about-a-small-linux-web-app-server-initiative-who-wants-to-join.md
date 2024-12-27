---
title: "Thinking about a small Linux web app server initiative. Who wants to join?"

tagnames: 'server, farmhack, raspberry-pi, apitronics, open-ground, fido, rpi, groundhog, ole, agpl, couchdb, open-pipe-kit'
author: rjstatic
path: /07-09-2014/thinking-about-a-small-linux-web-app-server-initiative-who-wants-to-join.md
nid: 10668
uid: 174

---

![](https://publiclab.org/public/system/images/photos/000/005/186/original/raspberry-pi-fido_4.jpg)

# Thinking about a small Linux web app server initiative. Who wants to join?

by [rjstatic](../../../profile/rjstatic) | July 09, 2014 12:54

July 09, 2014 12:54 | Tags: [server](../tag/server), [farmhack](../tag/farmhack), [raspberry-pi](../tag/raspberry-pi), [apitronics](../tag/apitronics), [open-ground](../tag/open-ground), [fido](../tag/fido), [rpi](../tag/rpi), [groundhog](../tag/groundhog), [ole](../tag/ole), [agpl](../tag/agpl), [couchdb](../tag/couchdb), [open-pipe-kit](../tag/open-pipe-kit)

----

> __Definition: Ground Server__ ~
A Ground Server hosts websites like a Cloud Server hosts websites on the Internet except it's on the ground which means the websites are accessible via your Local Area Network. Ground Servers are usually hosted on little credit card sized computers like the [$35 Raspberry Pi](http://www.raspberrypi.org/) or [$45 BeagleBone Black from Texas Instruments](http://beagleboard.org/Products/BeagleBone+Black). It's Ground Computing, not Cloud Computing.
Originally coined by [Jason Huggins](https://twitter.com/hugs/status/1605680019). [More about Ground Computing](https://groundcomputing.hackpad.com/About-Ground-Computing-oHwlcUmeH94)

## Intro
Since taking my first web development class in 2004 I have been hosting my creations on the Cloud but for the past few years I've worked with [Dogi (Public Lab server admin)](http://publiclab.org/profile/nemo) hosting web apps in an unusual place, the ground where the applications are actually used. Servers that host web apps used to cost thousands of dollars but with the arrival of small Linux computers like the Raspberry Pi, you can host your own web apps locally for under $50. But it's not just about hosting web apps, the economics of "small Linux" can be used for environmental monitoring and automation which will have interesting implications for areas such as health, agriculture, environmental justice, and many more. In this post I hope to get you excited about the potential of Ground Computing and explain how we can build a foundationational kit for Ground Computing that will solve many of the common pitfalls when starting the development of a Ground Server. We need your help so please read on!

## Our journey from the Cloud to the Ground, a summary of recent Ground Server deployments
In Ghana where it is cost prohibitive to have students online all day to access resources like [Khan Academy](https://www.khanacademy.org/), [Open Learning Exchange Ghana](http://cms.oleghana.org/) and [Open Learning Exchange International](http://www.ole.org/) had been running a large box server in a small community to provide access to such resources. Last year with funding from USAID's All Children Reading program we were able launch the [Ghana Reads program](http://ghanareads.ole.org.gh/) in 24 schools where we installed Raspberry Pi computers as the school servers, and with the help of [CouchDB](http://couchdb.apache.org/), we were able to easily create a [sneakernet](http://en.wikipedia.org/wiki/Sneakernet) where we could deliver more content from the Cloud and feedback could sync back up to the Cloud. The school servers published the BeLL Web App which helped teachers plan their course activities and sync resources to $60 tablets.   

![The first six Raspberry Pi servers with the BeLL Software deployed in Ghana.](https://raw.githubusercontent.com/rjsteinert/rjsteinert.github.io/7fccdf6472a10b5aefe2a66eab18b77592fea604/thinking-about-a-small-linux-web-app-server-initiative/ghana-reads-raspberry-pi-deployment.jpg)
> The first six Raspberry Pi servers with the BeLL Software deployed in Ghana.

These small Linux computers are good for more than just serving up web apps, they can also do data collection and automation. For example, the Fido project uses a Raspberry Pi with a connected USB temperature sensor to detect when a greenhouse is too hot or too cold. When a temperature is detected that is outside the bounds set by the Farmer in the local web app, the Ground Server text messages the farmer through the local WiFi connection (text messages can be sent for free via emails by the way). See the demo of a Fido in action at Wild Miller Gardens [here](https://www.youtube.com/watch?v=j9prK_yXcnU&feature=youtu.be) and the check out the code on Github over [here](https://github.com/rjsteinert/Fido).

![Within the first few weeks of having installed Fido, farmer Joel of Wild Miller Garden was alerted via text message that it was getting too cold in his Greenhouse at night for the vegetables he was growing.](https://raw.githubusercontent.com/rjsteinert/rjsteinert.github.io/7fccdf6472a10b5aefe2a66eab18b77592fea604/thinking-about-a-small-linux-web-app-server-initiative/joel-and-fido.png)
> Within the first few weeks of having installed Fido, farmer Joel of Wild Miller Garden was alerted via text message that it was getting too cold in his Greenhouse at night for the vegetables he was growing.

Back in 2011 I worked Mathew Lippencott and Molly Danielson of [Cloacina](http://mdml.co/portfolio/bathrooms-are-gross-so-were-redesigning-them/) on an online app that publishes historical environmental data about compost piles to surrounding neighbors, the same application today could be hosted on a $35 Raspberry Pi computer and the web app could be broadcasted via local WiFi with the help from the a project I worked on called Apitronic's Hive app. See the summary of that platform on the successfully funded Kickstarter page [here](https://www.kickstarter.com/projects/lthiery/apitronics-wireless-platform) and the code is on Github [here](https://github.com/apitronics/Hive).

![Arduino monitoring a compost pile and sending data through text messages to the Cloud. The same thing could now be built for less without the need for the Cloud server.](https://raw.githubusercontent.com/rjsteinert/rjsteinert.github.io/7fccdf6472a10b5aefe2a66eab18b77592fea604/thinking-about-a-small-linux-web-app-server-initiative/rodent-resistant-composter.png)
> Arduino monitoring a compost pile and sending data through text messages to the Cloud. The same thing could now be built for less without the need for the Cloud server.


## Thinking about an Open Ground SDK
For the past few years Dogi and I have been working fairly quietly on the various projects mentioned above and through that work there are components I've found that are useful across those projects and useful for many other future projects by people like you! I'm looking to create an Open Ground SDK which will be a collection of code modules commonly needed when developing a Ground Server, many of which can be extracted from work already done. I'm also interested in developing an App server which when running will publish a web page for graphically using many of the modules in Open Ground SDK. These apps could serve as examples of how to integrate the Open Ground SDK modules into your own project or could be used as is. We also want to publish an example of Open Ground SDK in action for the Raspberry Pi (and possibly also the BeagleBone Black now that they support Debian!). This project could be called GroundHog which will have the App server preinstalled and could be used as a starting point for your Ground Server project. 

## Modules
For now, the following modules are wrapped up in the [Fido](https://github.com/rjsteinert/Fido) project, [Apitronics Hive](https://github.com/apitronics/Hive) project, and [BeLL](http://github.com/open-learning-exchange/) project.

- WiFi Connect - Define what WiFi network the Ground Server should connect to.
- WiFi Access Point Mode - Turn your Ground Computing device into a WiFi access point so you do not need any additional hardware to access the Apps on your Ground Server. 
- Hostname - Define the hostname of the Ground Server so it can easily be reached at a human readable URL on the network. Example: http://myserver.local versus the IP address which is hard to figure out http://192.168.0.101
- Heartbeat - Configure where your Ground Server's heartbeat should call back to so the server you're pointing to can keep you up to date on the status of your Ground Server. Great for knowing when your alarms can't alarm you!
- Updater - A framework for publishing updates for Ground Servers and an API to query for available updates and install them.
- Disk space - a HTTP service for inquiring about the status of disks attached to a Ground Server.
- Clone/Backup - A simple button for copying the harddrive of the Ground Server to another attached drive over USB.
- Data Hive - View data saved from other devices sent to your Ground Server and manage alerts.
- Sensor Pack - A collection of drivers for commonly used sensors.


## How can you help?

### Join the conversation
Currently we have a [Ground Computing listserv on Google Groups](https://groups.google.com/forum/#!forum/groundcomputing) but we are most passionate about having this project incubated at Public Lab. Lets discuss these possibilities on this Research Note on PublicLab.org.

### What would you use the Open Ground SDK for?
We are really excited to get feedback from a community of folks working on ideas we've never thought of. Your ideas will shape how we approach the Open Ground SDK so we really encourage your input and brainstorming!

### How can we raise funds to support development of this? Your thoughts?
While we think doing the proposed GroundHog distro and the Open Ground SDK is a great idea, we're not sure where we are going to raise the funds to support ourselves to get this work done. Would it be wise to do a Kickstarter? A Reverse Bounty? Do you know of a project we could work on that would result in building GroundHog and ultimately the Open Ground SDK?

### What license should we follow? Your thoughts?
All of the projects I've worked on could not have been possible without the Open Source contributions of those who came before me and I intend to contribute back. For the Fido project we picked the [AGPL license](http://www.gnu.org/licenses/agpl-3.0.html) which I think best represents my intentions of my work remaining a part of the commons. This means that Open Source products that build upon this base will never have to worry about another company piggy backing off their contributions to the commons without also giving back. This is the license I find appealing but what's your opinion? I'm very interested in hearing the opinions of others who are interested in being contributors to this movement.

### What do you think about these names?
Open Ground, GroundHog, etc. These are all our first ideas on names. What do you think?