---
title: "Hacked Infragram Raspberry Pi camera now on the International Space Station"

tagnames: 'ndvi, nasa, filter, raspberry-pi, infragram, rosco, blog, infragram-filters, space, pi-camera, esa, iss, space-station, astro-pi'
author: warren
path: /notes/warren/04-02-2018/hacked-infragram-raspberry-pi-camera-now-on-the-international-space-station.md
nid: 16052
uid: 1
cids: 19289,19292,19299
---

![](https://publiclab.org/public/system/images/photos/000/024/296/original/ISS-Feature3.jpg)

# Hacked Infragram Raspberry Pi camera now on the International Space Station

by [warren](/profile/warren) | April 02, 2018 15:43

April 02, 2018 15:43 | Tags: [ndvi](/tag/ndvi), [nasa](/tag/nasa), [filter](/tag/filter), [raspberry-pi](/tag/raspberry-pi), [infragram](/tag/infragram), [rosco](/tag/rosco), [blog](/tag/blog), [infragram-filters](/tag/infragram-filters), [space](/tag/space), [pi-camera](/tag/pi-camera), [esa](/tag/esa), [iss](/tag/iss), [space-station](/tag/space-station), [astro-pi](/tag/astro-pi)

----

_(Reposted from the [Rosco company blog](http://www.rosco.com/spectrum/index.php/2018/03/rosco-filter-helps-students-observe-earths-vegetation-from-space/) with permission)_

> _This blog post covers an exciting development over at the Astro Pi Challenge, which builds on work by Public Lab contributor @nedhorning, @cfastie, and [many others](https://publiclab.org/contributors/infragram) from the [Infragram](https://publiclab.org/infragram) project, (including collaborators from [Farm Hack](http://farmhack.org/)) from the past few years. We are currently [working in partnership](https://publiclab.org/aren) with [NASA's AREN project](https://www.globe.gov/web/aren-project/) on the Infragram platform and the [Image Sequencer](https://publiclab.org/image-sequencer) project designed specifically for this kind of hacked [Raspberry Pi camera](https://publiclab.org/pi-camera)! Great job, folks!_

[The European Astro Pi Challenge](https://astro-pi.org/) gives students the opportunity to run science experiments using two Astro Pi Computers that are aboard the International Space Station. Russian Soyuz Mission MS-08 recently delivered [upgrades for the Astro Pi Computers](https://www.raspberrypi.org/blog/astro-pi-upgrades-launch/) -- including some Rosco color filters -- that will allow some of those students to conduct their own observations of our planet's vegetation while safely at home on Earth.

<blockquote><p>LIFTOFF! <a href="https://twitter.com/astro_ricky?ref_src=twsrc%5Etfw">@Astro_Ricky</a>, <a href="https://twitter.com/Astro_Feustel?ref_src=twsrc%5Etfw">@Astro_Feustel</a> and <a href="https://twitter.com/OlegMKS?ref_src=twsrc%5Etfw">@OlegMKS</a> launched at 1:44pm ET in their Soyuz spacecraft. The trio will travel on a two day journey before reaching their new home on <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw">@Space_Station</a> this Friday. Watch: <a href="https://t.co/OSmfzUKd1f">https://t.co/OSmfzUKd1f</a> <a href="https://t.co/D6IZwTtQpW">pic.twitter.com/D6IZwTtQpW</a></p>&mdash; NASA (@NASA) <a href="https://twitter.com/NASA/status/976515612863156224?ref_src=twsrc%5Etfw">March 21, 2018</a></blockquote>

The Astro Pi Computers include many different sensors to collect data, but one of them is equipped with an infrared, [Pi NoIR Camera from Raspberry Pi](https://www.raspberrypi.org/products/pi-noir-camera-v2/) that enables the students to observe Earth's vegetation health and growth from space. A Pi NoIR Camera features the same technical properties as a standard camera, except that it has the IR filter removed so that it can perceive the infrared spectrum of light.

[image description](https://publiclab.org/system/images/photos/000/024/294/large/ISS-1b-600x376.jpg "ISS-1b-600x376.jpg")

_Astro Pi computer equipped with Pi NoIR Camera_

The upgrades that recently arrived at the I.S.S. included some Rosco #2007 Storaro Blue filters that have been modified for installation onto the Astro Pi Computer. The R2007 filter was laser-cut to friction-fit onto the 12 inner heatsink pins on the base of the Astro Pi unit and positioned so that the aperture of the Pi NoIR Camera is properly covered.

![image description](https://publiclab.org/system/images/photos/000/024/295/large/ISS-2b-600x179.jpg "ISS-2b-600x179.jpg")

_Raspberry Pi Camera -- laser cutting the R2007 filter -- Astro Pi Computer with R2007 filter installed_

Some of the student teams taking part in the Astro Pi competition are investigating the health of vegetation on Earth. Having learned that plants grow through photosynthesis, what they're learning now is how photosynthesis translates into color reflectance. Healthy plants reflect a significant amount of infrared energy, which is invisible to the naked eye. Most of the visible spectrum (predominantly blue and red wavelengths) is absorbed, with some green light reflected. This accounts for the green color that we see in healthy vegetation. As stress in plants increases, photosynthesis slows down or stops, infrared wavelengths are absorbed and more visible red light is reflected, which accounts for the "browning" of unhealthy vegetation.

![image description](https://publiclab.org/system/images/photos/000/024/298/large/SED-Curves_550-vegetation-b-1.jpg "SED-Curves_550-vegetation-b-1.jpg")

The R2007 filter absorbs most of the red and green wavelengths while allowing the blue and near-IR sections of the spectrum to pass onto the camera's sensor. By examining the data in this "infra-blue" energy, the Astro Pi Computer can evaluate the photosynthetic activity of plants by calculating the ratio of blue and infrared light that is reflected from plants to determine the [Normalised Difference Vegetation Index](https://publiclab.org/wiki/ndvi) (NDVI). The students back on Earth can use this NDVI measurement to assess plant-health around the world.

![image description](https://publiclab.org/system/images/photos/000/024/297/large/ISS-4d-600x227.jpg "ISS-4d-600x227.jpg")

_Image setup (L), resulting NDVI image (r) (via @nedhorning)_

Since the R2007 filters have only just arrived at the International Space Station, we don't have any of the imagery the Astro Pi Computers will capture yet. The image above from [publiclab.org](https://publiclab.org/wiki/ndvi), however, uses a similar technique and is an excellent example of what that NDVI imagery might look like. Note how the healthy grass registers blue/green, while the dead grass in the upper left corner registers green/yellow/red. You can find more information about this NDVI experiment and learn how to shoot your own NDVI imagery on [this Public Lab webpage](https://publiclab.org/notes/nedhorning/10-30-2013/red-vs-blue-filters-for-ndvi).

If you'd like more information about Raspberry Pi and how their affordable, easy-to-use technology is encouraging kids around the world to code computers -- even in space -- visit [www.raspberrypi.org](https://www.raspberrypi.org/). To learn more about the filter products used in these experiments, be sure to explore our [Rosco Color Filters webpage](http://www.rosco.com/products/catalog/filters-diffusions-products?field_product_type_target_id=136).