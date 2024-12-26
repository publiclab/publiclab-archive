---
title: "Honlian 60s LED nail polish hardener, various LED fluorescence updates"\ntagnames: 'spectrometer, oil, ultraviolet, fluorescence, led, oil-testing-kit, cuvette-frame, response:12716, response:12818, response:12725, response:12722, activity:spectrometry-sampling'
author: warren
path: /notes/warren/03-10-2016/honlian-60s-led-nail-polish-hardener-various-led-fluorescence-updates.md
nid: 12823
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/014/697/original/IMG_20160309_150758-2.jpg)

# Honlian 60s LED nail polish hardener, various LED fluorescence updates

by [warren](../profile/warren) | March 10, 2016 00:04

March 10, 2016 00:04 | Tags: [spectrometer](../tag/spectrometer), [oil](../tag/oil), [ultraviolet](../tag/ultraviolet), [fluorescence](../tag/fluorescence), [led](../tag/led), [oil-testing-kit](../tag/oil-testing-kit), [cuvette-frame](../tag/cuvette-frame), [response:12716](../tag/response:12716), [response:12818](../tag/response:12818), [response:12725](../tag/response:12725), [response:12722](../tag/response:12722), [activity:spectrometry-sampling](../tag/activity:spectrometry-sampling)

----

_A nail polish hardening, USB-powered UV lamp at 398nm, for under $4. Read on!_

###What I want to do

I've been continuing to test cheap LED electronics for use in the Oil Testing Kit, even as we discuss the pros and cons of ultraviolet LED lighting in [this great thread](/notes/stoft/02-23-2016/405nm-led-vs-laser) in a post by @stoft. One of the takeaways so far is that some published research shows that lower wavelength input (excitation) light can yield more distinctive data when comparing crude oil fluorescence spectra. That is, a 350nm light source causes more clear differences between different oils than a 400 or 450nm light source. 

After @dhaffnersr posted [a great comparison of LED vs. laser pointers](/notes/dhaffnersr/02-23-2016/baseline-comparisons-using-09mm-slit-uv-flashlight-and-uv-laser-pointer), I ordered a 385nm and a 365nm high-brightness LED, and send one of each to @ethanbass in the hopes that he'll be able to test and compare them. I'm happy to order more, but you can get them here at about $8 each:
    
* http://www.mouser.com/Search/ProductDetail.aspx?R=LTPL-C034UVH365virtualkey57820000virtualkey859-LTPL-C034UVH365
* http://www.mouser.com/Search/ProductDetail.aspx?R=VLMU3500-385-060virtualkey61370000virtualkey78-VLMU3500-385-060

We're hoping lower wavelengths will also overlap less with the region we're trying to measure fluorescence in (also discussed in @stoft's post's comments, above). 

###Redesign of cuvette stack

Anyhow, on the construction side, I had been [trying to build an enclosure for an Adafruit Trinket](/notes/warren/01-25-2016/ongoing-design-of-compact-cuvette-frame), an Arduino compatible tiny 3.3v microcontroller, which I was using to power a 405nm LED i'd bought. The stack (which would go inside the cuvette frame exterior I documented here](/notes/warren/01-25-2016/ongoing-design-of-compact-cuvette-frame)) looks like this, and might still be useful if we go with a smaller component (I did find some, which I'll talk about in a bit):


[![IMG_20160219_193029.jpg](//i.publiclab.org/system/images/photos/000/014/696/medium/IMG_20160219_193029.jpg)](//i.publiclab.org/system/images/photos/000/014/696/original/IMG_20160219_193029.jpg)


[![IMG_20160219_191839.jpg](//i.publiclab.org/system/images/photos/000/014/698/medium/IMG_20160219_191839.jpg)](//i.publiclab.org/system/images/photos/000/014/698/original/IMG_20160219_191839.jpg)


[![IMG_20160219_192454.jpg](//i.publiclab.org/system/images/photos/000/014/699/medium/IMG_20160219_192454.jpg)](//i.publiclab.org/system/images/photos/000/014/699/original/IMG_20160219_192454.jpg)




###Cheaper, off-the shelf parts

But in the same comment thread above from @dhaffnersr's post, I'd found a few products which cost around $4, were USB powered, and had an on-off switch, which are designed to cure nail polish with UV light. These are great, and I ordered some to see what wavelength they are, and if they were bright enough. The answer: the white one pictured in the lead image is definitely bright enough, and is ~398nm. You can get that one for $3.84 here: http://www.ebay.com/itm/201481504603


I also found one that is just a tiny USB stick with 2 LEDs on it, which was at about 403nm, but much dimmer. But a promising form-factor for very small work:


[![IMG_20160309_185039.jpg](//i.publiclab.org/system/images/photos/000/014/700/medium/IMG_20160309_185039.jpg)](//i.publiclab.org/system/images/photos/000/014/700/original/IMG_20160309_185039.jpg)

The data is here, showing the bigger white one at 398nm with and without a vial of fish oil (just to proof of concept the fluorescence) and the 403nm tiny board (called Perfect Prime):

<iframe width='100%' height='550px' style='border:none;' src='//spectralworkbench.org/sets/embed2/3209'></iframe>

Data here: https://spectralworkbench.org/sets/3193

Anyhow, I then tried shoehorning the white LED device into the cuvette frame, such that it's bright enough, the button is accessible, and the cord fits. It worked all right, actually, and is MUCH less complex than the build above (note, there's a cuvette in there, with fish oil in it):


[![IMG_20160309_170741.jpg](//i.publiclab.org/system/images/photos/000/014/701/large/IMG_20160309_170741.jpg)](//i.publiclab.org/system/images/photos/000/014/701/original/IMG_20160309_170741.jpg)



Also, kudos to Brian Degger (@briandegger) and Jeff Hecht (@jeffh) for suggesting the nail polish curing LEDs back in December: https://groups.google.com/d/msg/plots-spectrometry/VNragturGYg/kXjwJYWsBAAJ


###Why I'm interested

Ideally the lower wavelength 365nm LEDs will work. But this one is already edging out of the important range (published research such as [the Downare and Mullins 1995 piece](/notes/stoft/02-23-2016/405nm-led-vs-laser#c13827) discards data within 30nm of the excitation wavelength, so that'd get us 430nm+, whereas 365nm would get us 395nm+ -- although we don't know how narrow bandwidth their source light was). And this is a very very easy thing to use -- no soldering or electronics necessary, and it even has an auto-off after 30 seconds or so. So I just want to know, and who knows, maybe we could swap out the LED or something. 



###Questions and next steps

Can we reproduce oil grading using either one of these off-the-shelf LED setups, or with a lower wavelength LED? Can we make a very easy-to-construct, reliable and bright cuvette frame for fluorescence work? 

We need to test out these various LEDs, and @dhaffnersr's recent [post on the consistency of LED wavelengths](/notes/dhaffnersr/03-08-2016/tested-9-400nm-uv-leds-today-these-are-the-results) also means we can't take the exact wavelength for granted between LEDs, even from a single manufacturer -- at least more than to within about 8nm. It remains to be seen what effect this has on fluorescence values. 