---
title: "Brainstorming "coffee analytics" system for coffee shops"

tagnames: 'spectrometer, coffee, sampling, eyedropper'
author: warren
path: /notes/warren/08-06-2013/brainstorming-coffee-analytics-system-for-coffee-shops.md
nid: 8973
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/001/042/original/coffee-analytics.jpg)

# Brainstorming "coffee analytics" system for coffee shops

by [warren](../../../profile/warren) | August 06, 2013 22:28

August 06, 2013 22:28 | Tags: [spectrometer](../tag/spectrometer), [coffee](../tag/coffee), [sampling](../tag/sampling), [eyedropper](../tag/eyedropper)

----

Lots of folks have talked about using spectrometers in coffee shops, and I know several of our [countertop models](/notes/warren/04-17-2013/final-countertop-spectrometer-design) went to coffee shops. Of course, I had a great (if brief) opportunity to [try some coffee spectrometry at Toscanini's](/notes/warren/8-29-2012/testing-coffee-spectra-toscaninis) in Cambridge, MA last year, but I've been pondering what it'd look like in a slightly more streamlined form, and speculating about other possibilities. The above sketch shows a few of these, which I'll talk a bit about here.

![7890162056_04ca29e1b7_b.jpg](/system/images/photos/000/001/044/medium/7890162056_04ca29e1b7_b.jpg)

_Coffee, about to spill all over, in a countertop spectrometer at Toscanini's_

###Fast sampling

Pour-over brewing nowithstanding, I think countertop sampling has got to be super fast. It can't involve carefully measuring milliliters of sample, transferring small amounts into cuvettes, twiddling a dimmer, etc. So after thinking about it a lot, I came up with 2 ideas. First, use a fixed light source, like a white LED, which is a pretty obvious way to standardize light input. Second, use a glass eyedropper **as the sample container** -- since we're not doing laser spectroscopy, a round container isn't as big a problem -- and if we set up the sample chamber correctly, the dropper can simply completely block the light from entering the slit. This seems pretty promising, and the whole thing could be built into a nice, tidy box which just has a hole on the top, as illustrated above. It'd only take a couple seconds to eyedrop some of your coffee from an espresso or a pourover, and stuff it into the scanner.

![Screen_Shot_2013-08-06_at_6.29.12_PM.png](/system/images/photos/000/001/045/medium/Screen_Shot_2013-08-06_at_6.29.12_PM.png)

###Printouts

I used an Adafruit receipt printer last year at MakerFaire NYC to print out spectra as we collected them, which was pretty cool. I think it could be improved upon though -- and if you got a receipt with a spectrum graph and a URL to look up your coffee's data at, that would be really cool! You could even add each coffee to a set, and look at a graph of your coffee over time. 

![coffee-3.jpeg](/system/images/photos/000/001/043/original/coffee-3.jpeg)

