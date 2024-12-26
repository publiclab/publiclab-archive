---
title: "Bad NDVI Results from Pi NOIR with Blue Filter"\ntagnames: 'ndvi, raspberry-pi, infragram, infrablue, pi, question:infragram, rpi, raspberry, white, balance, noir, first-time-poster, ndvi-white-balance, infrapi'
author: nstarli
path: /notes/nstarli/10-08-2019/bad-ndvi-results-from-pi-noir-with-blue-filter.md
nid: 21117
uid: 581160

---

# Bad NDVI Results from Pi NOIR with Blue Filter

by [nstarli](../profile/nstarli) | October 08, 2019 20:49

October 08, 2019 20:49 | Tags: [ndvi](../tag/ndvi), [raspberry-pi](../tag/raspberry-pi), [infragram](../tag/infragram), [infrablue](../tag/infrablue), [pi](../tag/pi), [question:infragram](../tag/question:infragram), [rpi](../tag/rpi), [raspberry](../tag/raspberry), [white](../tag/white), [balance](../tag/balance), [noir](../tag/noir), [first-time-poster](../tag/first-time-poster), [ndvi-white-balance](../tag/ndvi-white-balance), [infrapi](../tag/infrapi)

----

![image description](/i/35631.jpg "image03.jpg")

NGB Photo acquired after white balance procedure

![image description](/i/35632.jpg "2019-10-08T19_02_15.854Z.jpg")

NDVI image using the infragram sandbox![image description](/i/35634.jpg "2019-10-08T20_52_22.899Z_fastie.jpg")

NDVI using cfastie colormap

I am taking some images of maize plants using the Raspberry Pi NoIR camera using the blue filter that it is sold with from the rpi website. I have set the white balance (awb\_gains) of the camera using the technique in the previous note of pointing the camera at deep blue origami paper and taking those awb settings then setting awb\_mode to off and setting the gains to the previously adjusted gains settings using the origami paper. Above is the NGB image acquired (this looks pretty good, plant material is a yellowish-orange color). However, when I run this image through the infragram sandbox and my own NDVI processing code, I am getting bad results, shown below the NGB image.

To give some more information on the setup. We are taking the images indoors under flourescent lights (however we are next to a large sunny window so should be getting IR I think?) and the surface below the plant is dark gray carpet. At first I thought that we did not have enough IR light, however, if that were the case wouldn't all the NDVI values just be equal to 1 or -1? It looks like all the values are in the green and yellow range.