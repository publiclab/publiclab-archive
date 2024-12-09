---
title: Browser-based Arduino data transfer and control using the WebAudio API and headphone jack
tagnames: software, gsoc, coding, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827
author: diadatp
path: /notes/diadatp/03-25-2016/browser-based-arduino-data-transfer-and-control-using-the-webaudio-api-and-headphone-jack.md
nid: 12888
uid: 468811

---

# Browser-based Arduino data transfer and control using the WebAudio API and headphone jack

by [diadatp](../profile/diadatp) March 25, 2016 15:24

March 25, 2016 15:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [coding](../tag/coding), [hidden:response](../tag/hidden:response), [gsoc-2016](../tag/gsoc-2016), [gsoc-2016-proposals](../tag/gsoc-2016-proposals), [response:12827](../tag/response:12827)

----

**Name:** Bittu N

**Affiliation (school/degree)** BITS-Pilani, K K Birla Goa Campus /  B.E. Electronics and Electrical Engineering & M.Sc. Physics

**Location (where you are):** Bangalore, India (GMT +5:30)

**Email:** admin@diadatp.com

**Phone:** +91-800-722-96-00

**Project title**: Browser-based Arduino data transfer and control using the WebAudio API and headphone jack

## Project description

** Abstract/summary (<20 words): ** To communicate over an audio cable with a sensor board from a laptop or smartphone directly from within a browser.

### Describe the need your project fulfills:

As I understand it, the Public Lab community aspires to provoke change by providing inexpensive, open source and easy to use tools and techniques that help the public investigate their environment. The backbone of this effort is the volunteers who actually build the large body of environmental data. Making data collection easier and as painless as possible for volunteers can help the effort by reducing the barrier to entry for the non technical. To this end, a cheap and easy to use platform for data collection is required. Such a platform could benefit a large number of volunteer based data collection projects.

### How will your project meet this need?:

This project proposes the design of a robust audio based Browser-Arduino data link, released under an OSS licence. In addition, a Firmata implementation will be provided to ease the development of projects based on this technique. The proposed solution only requires that the data collector have access to a modern web browser and a device with an audio port. This should ensure accessibility to a very large section of the population.

Moreover, due to the clean sheet design, the resulting simple and clean code base will yield benefits to projects outside of Public Lab.
As a strech goal, an audio based bootloader will be explored to ease maintenance and firmware upgrades of data collection nodes.

### What broader goal is your project working towards?

The underlying motivation of this project mirrors that of the Public Lab program, ie. to create an ecosystem focused on ”civic science” in which open source tools and methods generate knowledge about environmental health. To facilitate this goal the barrier to entry must be lowered, and this proposal is an attempt at just that. To enable the layman to participate in real and relevant science.

### Deliverables:

These are stages during the project that can be used to check that appropriate progress is being made. A more detailed timeline is available in the next section. These deliverables have been defined keeping in mind that they are measurable and explicit.

#### Review of Pre-existing Implementations [required]:
This deliverable is the simplest of them all but is essential for a successful implementation as it gives form to the testing phase of the development cycle. A good review will contain a detailed analysis of other projects and set benchmarks based on them (in the form of measurable metrics such as bit rate). It will also contain a list of common pitfalls and novel techniques used in other projects. It should take no more than two days.

#### Data Communication Core [required]:

This deliverable represents a bare minimum requirement for this proposal and must be imple- mented. The heart of the controller core is the logic that would be responsible for the following tasks:

• Maintaining the FIFOs for send and receive.
• Handling interrupts from the ADC and queing packets to be sent.
• Calibration of data link and determining optimal baud rate.
• Calculating error detection codes and stuffing into send FIFO in a timely manner.

It is important to decide wisely which encoding scheme to adopt as the analog pins must not be too occupied such that data collection itself is not possible. A baseline of 1.2 kBaud has been established and must be met.

#### Arduino Library and Documentation [required]:
This deliverable represents a bare minimum requirement for this proposal and must be implemented.

#### Firmata Implementation [required]:
Firmata[3] is a generic protocol for communicating with microcontrollers from software on a host computer and is intended to work with any host computer software package. It takes the leg work out of designing a custom software protocol layer and makes it easier for developers to implement ideas rather than worry about low level communication/control.

The idea is to implement Firmata compatible library for the Arduino communication would require implementation of an subclass of Arduino’s Stream[2] base class. It would be simply plugged in here.

#### Tutorial on A Basic Data Logger Using this Project [required]:

As this project is geared towards both the general public and developers, a tutorial must be written so that developers can create viable data logging solutions. A tutorial explaining a simple data logging project (perhaps a temp. sensor) all the way from hardware design and BOM to the Javascript API and FIrmata capabilities.

#### Preliminary Work Towards Audio Bootloader [strech]:

An audio link based bootloader for Atmel microcontrollers could be useful for on field firmware upgrades. It reduces the barrier to entry for the developers as they would not need to install any drivers to program their boards. The design will be such that if a certain hardware condition is met, the bootloader waits for data on the audio interface and loads it into the remaining part of the flash memory. If the condition is not met, control is passed to the loaded firmware and operations go on as usual. The bootloader being very complex must be very well designed and tested. This is the reason that this deliverable is optional.

### Timeline/Milestones:

#### [Community Bonding] April 22, 2016 - May 22, 2016
• Interact with the community members and familiarise myself with the community’s culture.
• Conduct a survey requesting information about the needs of specific projects.
• Identify projects under Public Lab that would benefit from this work.
• Start a blog about the project to help my mentor track my progress (apart from weekly emails).
Deliverables: Summary of the survey results and re-tuning of project requirements in line with feedback from Public Lab’s other projects.

#### [Week 1] May 23, 2016 - May 29, 2016
• Complete the review of pre-existing implementations and present it in the form of a technical report. No more than two days.
• Complete characterising (resolution, stack space, CPU load, etc.) the signal processing capabilities of the Arduino UNO, specifically the following: FSK, Direct Digital Synthesis and FFT.

Deliverables: Blog post summarising the review of current implementations and benchmarks. Technical report on the capabilities of the Arduino UNO.

#### [Week 2] May 30, 2016 - June 5, 2016
• Make prototypes of support circuits such as opamps and lowpass filters for the different encoding schemes.
• Begin work implementing the data encoding schemes on the Arduino and determine the maximum symbol rates and Bit Error Rate.
• Begin work characterising the capabilities of a standard PC soundcard. (Help from Public Lab members, more data = better idea of average case.)

Deliverables: Git commit of implemented code and blog post about progress so far consisting of schematics results obtained.

#### [Week 3] June 6, 2016 - June 12, 2016
• Based on symbol rate and BER from last week, settle on two encoding schemes (one for guaranteed operation and one for high data rate).
• Design a basic packet format with simple error detection codes keeping in mind the prop- erties of the medium.
• Implement this packet format on an Arduino UNO and run tests (using a simple WebAudio test rig) overnight to calculate reliability BER.
• Begin work on the a Javascript abstraction layer for the data link.

Deliverables: Blog post specifying the packet format and results from the testing. Git commit detailing the packet format and it’s implementation.

#### [Week 4] June 13, 2016 - June 19, 2016
• Any bugs encountered up to this point or basic deliverables not implemented yet to be completed by the end of the week.
• Begin work assessing the optimisations possible and implement time sensitive parts in assembly language.
• Make decisions about interrupts, which timers to use and which pins will be optimal (feedback from other projects).
• Complete the Javascript abstraction layer, without complete documentation.

Deliverables: Rock solid, bug free (as much as humanly possible) implementation of data link, complete with assembly optimisations. Git commits of the code so far.

#### [Week 5 - Midterm Evaluations] June 20, 2016 - June 26, 2016
• Begin work on Arduino library, encapsulating this project.
• Mentors and students submit their evaluations of one another.

Deliverables: Student’s evaluation of mentor. Broad structure of the Arduino Library implementation.

#### [Week 6] June 27, 2016 - July 3, 2016
• Complete work on the Arduino library (ie. Stream subclass) and showcase compatibility by running standard Arduino demos.

Deliverables: Git commit of Arduino library without documentation and blog post detailing demos.

#### [Week 7] July 4, 2016 - July 10, 2016
• Document Arduino library and begin writing tutorial on it’s use.
• Now that the Arduino framework is ready, the work on the Firmata implementation can begin.
• Implement the Firmata Protocol on the Arduino platform and explore modifications to the available Javascript client.

Deliverables: Git commit of documentation and Firmata implementation. Tutorial as a blog post.

#### [Week 8] July 11, 2016 - July 17, 2016
• Integrate Javascript abstraction layer into the Firmata client and begin testing.
• Write a small demo for data collection.
• Finalize the physical layout and send PCB designs in for professional fabrication.

Deliverables: Git commit of modified Firmata client, runnable in a supported browser.

#### [Week 9] July 18, 2016 - July 24, 2016
• Write a detailed tutorial for the project and set a roadmap for future development with this project’s codebase.

Deliverables: Blog post of the tutorial.

#### [Week 10] July 25, 2016 - July 31, 2016
• Work on strech goals, namely the bootloader.
• PCBs should arrive, begin testing final designs.

Deliverables: Detailed breakdown of bootloading process and outline of requirements/limitations.

#### [Week 11] August 1, 2016 - August 7, 2016
• Work on strech goals, namely the bootloader.

Deliverables: Preliminary tests and discussion. No code.

#### [Week 12] August 8, 2016 - August 14, 2016
• A buffer week for potential delays in the following: design corrections/changes, code reviews and documentation.

#### [Final Week] August 15, 2016 - August 23, 2016
• Complete documentation for code written since midterm evaluations.
• Submit sample code to the mentors along with detailed blog post about experience so far.

Deliverables: All required deliverables completed and accessible publically. Blog post detailing the project.

#### [Mentors Submit Evaluations] August 24, 2016 - August 29, 2016
• Review of student code samples and verdict from mentors if the students have successfully completed their Google Summer of Code 2016 project.

### What resources will you need: people, documentation, literature, sample data, hardware?

I have access to Arduino boards and electronics components from a personal inventory and from my local hackerspace. It would be helpful if the latest implementation could tested (perhaps every two week) on computers available to the members of the Public Lab team.

### Setup

As suggested by Jeffrey, I set up a small WebAudio demo to showcase my aptitude for Javascript and electronics. The demo is for a bit of Javascript that draws the letter ”P” on an oscilloscope in XY mode. It is available here https://jsfiddle.net/9jrgcztm/.
I have read all relevant contributor related documents from Public Lab as well as Arduino’s Style Guide for Writing Libraries[1].

### Experience
I am well versed with electronics design (especially embedded systems) and prototyping tech- niques (schematic placement, routing and PCB etching). I have a few years of experience with the Arduino ecosystem and have worked with microcontrollers from all major brands including TI, Microchip and Atmel. As a result I have very good familiarity with C/C++ and am comfortable writing latency sensitive sections in assembly. I was exposed to the practical side of electronics design during my internships at electronics OEMs, Gram Power India and eXcel Energy Solutions.
Additionally, I have experience in the design of communication systems and have completed courses in it as part of my college curriculum. This includes theoretical analysis of the system all the way down to it’s physical implementation.

### Teamwork

During my internship at Gram Power (a closed source electronics OEM), I followed the coding style guidelines of the organization and integrated well into the established team. I was sub- sequently given the responsibility of testing and merging conflicts on the feature development branch. As a result of this, I am well versed with the git pull request, compare and merge flow. An interesting outcome of my time at the company is my understanding of revision control of hardware designs.

I believe working in a group unit benefits the quality of the design even if the other members are only passively/indirectly observing one’s cont. I plan on taking regular feedback about the direction and speed of development. This should help minimize the chances of unexpected hiccups and development delays.

Moreover, as the requirements of this project are closely derived from the needs of the community, I will take continuous feedback from the community and ensure that my thought process is well documented.

### Expertise

I have completed two internships at electronics manufacturers and multiple personal projects. I was also a part of the team that went on to the finals of e-Yantra, an all India embedded systems competition. I have a good working knowledge of hardware debugging and a basic idea about mechanical design.

### Interest

I’m not sure if this counts, but I used to contribute to the SETIhome project with spare computing time.

### Audience

This project is geared towards the non technical public, both developers and end users. Simple and clear documentation will help the not so technically inclined developers to design fully functional solutions to be used by the layman. By staying withing the Arduino ecosystem, the requisite skill level is kept at a minimum.

### Context

The idea of contributing to open source and empowering people to help themselves is tempting. I identify with the Public Lab effort and OSS in general, which is why this opportunity is so exciting.

### Ongoing Involvement

After the summer is over, I intend to regularly contribute to the Public Lab program and be involved in the mailing lists and developer IRC. I will of cource maintain this project’s documentation and help others realise solutions with it. Additionally, I plan on contributing more open source boards to help realise the main goals.

A few of Public Lab’s projects caught my eye and I hope to use my skills as a Physics student and trained experimentalist to at least translate/interpret scientific papers and keep everyone up to date on the latest findings.

### Commitment
I understand that this is a serious commitment. I don’t have any other major commitments and will devote at least 48 hours a week during the entire tenure.
One of the requirements of this project is that it is accessible to the most number of people. It will take a lot of testing to ensure that the design will function in the real world across a multitude of devices and I am ready to put in the effort.

### References

[1] Arduino - apistyleguide. https://www.arduino.cc/en/Reference/APIStyleGuide. (Ac-
cessed on 03/25/2016).
[2] Arduino - stream. https://www.arduino.cc/en/Reference/Stream. (Accessed on
03/25/2016).
[3] firmata/protocol: Documentation of the firmata protocol. https://github.com/firmata/
protocol. (Accessed on 03/25/2016).
[4] Ye-Sheng Kuo, Sonal Verma, Thomas Schmid, and Prabal Dutta. Hijacking power and bandwidth from the mobile phone’s audio interface. In Proceedings of the First ACM Sym- posium on Computing for Development, ACM DEV ’10, pages 24:1–24:10, New York, NY, USA, 2010. ACM.
8
