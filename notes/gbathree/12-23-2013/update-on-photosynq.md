---
title: 'Update on Photosynq'
tagnames: photosynq
author: gbathree
path: /notes/gbathree/12-23-2013/update-on-photosynq.md
nid: 9912
uid: 53164

---

![](https://publiclab.org/public/system/images/photos/000/002/446/original/IMG_2821.JPG)

# Update on Photosynq

by [gbathree](../profile/gbathree) December 23, 2013 19:32

December 23, 2013 19:32 | Tags: [photosynq](../tag/photosynq)

----

This is reposted from http://photosynq.org/countdown-beta-test/ if you want to see more pictures go there -

The last 2 months have seen a flurry of activity. We’ve gone through a several more iterations on the hardware, and we’re now pretty happy with the quality of the measurements and the amount of noise in the signal (see more below for specifics on that). We’ve also been working on identifying new partners, especially plant breeders in developing countries who need the tool to improve their breeding lines, and writing proposals. Finally, Sebastian has been working on improving the online graphing and analytics capabilities, which I think is amazing (my guess is the online graphing tool will be good enough that most users won’t need to export their data to open office or excel!). Oh, and we’re buying a pick and place machine (28 slots) so we can populate our own printed circuit boards in small batches… more work but less expensive and more flexible.

We also decided we like PhotosynQ with a big Q… because we want to call the actual measurement device MultispeQ and the Q really just holds the whole concept together…. maybe later we’ll make an AquaspeQ or something and that’ll really solidify things :) . Read on for other PhotosynQ news:

**Beta Test Status – email coming soon!**

Even with all the craziness, January 31st remains the target date for beginning to ship Beta test units. In the few days, beta testers will receive an email with updates on what to do next. We also hope to do a better job of communicating more about the project in the coming month so everyone stays up to date. In total we had almost 50 applicants from Thailand, Japan, Italy, Germany, and all around the US. It included farmers, hackers, engineers, citizen scientists, professors, gardeners, and nature enthusiasts. We are REALLY excited to the cool ideas and research questions that will come out of the initial group.

**Open Call: Seeking research questions for PhotosynQ Beta testers to answer**

One of the most fun parts of this project is the open ended nature of what a network of sensor-enhanced citizen scientists will actually do – what projects will people create, what questions will they ask and answer? … well, we don’t know!

Over the course of the next month, we’re going to be defining the initial projects available on PhotosynQ. For the Beta test we want projects which can use measurements taken in any location and are fairly easy to perform. For example, tracking a single leaf on a single tree over the course of a growing season to see how photosynthetic efficiency and chlorophyll content fluctuate on a daily basis. If you have any ideas, please shoot me an email at gbathree at msu dot edu .

**Updates on hardware – new measurements and specs!**

Robert has been working like crazy to get the PhotosynQ a lean, mean, low-noise low-cost measuring machine and they’ve done an amazing job. The most current version has noise of only .03% of a typical signal size… that’s 300 parts per million! We also recently eliminated a few bucks worth of parts and saved some space. Not too shabby, though we’ve got some ideas for making it a lot better down the road.

Ok, so what exactly can this thing do? Here’s the spec list and measurement types (with explanation of how they can be used and links with further explanation):

**Main Device:**

1 detector – IR filtered, very high accuracy pin photodiode (noise ~.03% of tyipcal signal)
2 measuring LEDs (current draw up to 750mA per LED, <1us rise time to turn on and off)
1 ‘actinic’ LED (current draw up to 750mA per LED, ~2us rise time to turn on and off)
1 ‘calibrating LEDs (lower power IR LED for roughly measuring thickness and/or reflectivity)
CO2 sensor, temperature and relative humidity sensors, light intensity and color temperature sensor (RGB).

_Measurement capabilities:_

Pulse Modulated Fluorescence to measure photosynthetic efficiency
Chlorophyll content to estimate nitrogen content in leaves (here’s an example study)
Leaf temperature to estimate stomatal conductance (a key response to drought conditions).
Environmental sensors (CO2, temperature, relative humidity, light intensity and color temperature (RGB)

Fluorescence, chlorophyll content, and leaf temperature are very useful and tell us about details about plant health, plant stresses, and the inner workings of photosynthesis itself.

**Spectroscopic add-on:**

1 detector – unfiltered, very high accuracy pin photodiode (noise ~.03% of tyipcal signal)
2 measuring LEDs (current draw up to 750mA per LED, <1us rise time to turn on and off)
1 ‘actinic’ LED (current draw up to 750mA per LED, ~2us rise time to turn on and off)
1 ‘calibrating LEDs (lower power IR LED for roughly measuring thickness and/or reflectivity)

_Measurement capabilities:_

Photosystem I activity (ie is photosystem 1 active or not?)
Absorbance measurements which describe:
- the electrochromic shift (ECS) due to build-up of hydrogen ions in the thylakoid (examplepaper here) and
- dark-induced relaxation kinetics (DIRK) measurements at 850 and 940nm (example paper here).

ECS, PSI activity, and DIRK are a little abstract for the every day user but are very useful measurements which usually cost a lot of money to make and give a unique inside look at exactly what is happening in the process of photosynthesis and what short, medium, and long term changes the plant is making to adjust to it’s environment.

ECS, PSI activity, and DIRK are a little abstract for the every day user but are very useful measurements which usually cost a lot of money to make and give a unique inside look at exactly what is happening in the process of photosynthesis and what short, medium, and long term changes the plant is making to adjust to it’s environment.

A little more adjusting and we’ll be ready for prime time (well… beta time at least) -