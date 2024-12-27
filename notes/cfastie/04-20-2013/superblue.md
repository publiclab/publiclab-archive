---
title: "Superblue"

tagnames: 'near-infrared-camera, nrg, ndvi, vermont, white-balance, infragram, plant-health, superblue, rosco, infragram-filters, barnstar:basic'
author: cfastie
path: /notes/cfastie/04-20-2013/superblue.md
nid: 6923
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/000/087/original/crocuscam-201335372.jpg)

# Superblue

by [cfastie](../../../profile/cfastie) | April 20, 2013 02:49

April 20, 2013 02:49 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nrg](../tag/nrg), [ndvi](../tag/ndvi), [vermont](../tag/vermont), [white-balance](../tag/white-balance), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [superblue](../tag/superblue), [rosco](../tag/rosco), [infragram-filters](../tag/infragram-filters), [barnstar:basic](../tag/barnstar:basic)

----

The new infrared camera under development at Public Lab will probably make two kinds of images that reveal how much plant growth is happening in the scene. By combining information about both the infrared and normal visible light reflected from plants, the camera can produce false color infrared images like the familiar pinkish satellite images. These are called NRG because instead of the image being composed of Red, Green, and Blue (RGB) channels, those channels display Near-infrared, Red, and Green (blue is not used).  An infrared channel can also be combined with a visible channel to compute the Normalized Difference Vegetation Index (NDVI). This quantifies the difference between light that plants use for photosynthesis (red or blue) and light they don't use (infrared).  The bigger this difference, the greater proportion of the light hitting the leaves is being absorbed to power photosynthesis. 

![BG3curve.JPG](https://i.publiclab.org/system/images/photos/000/000/088/medium/BG3curve.JPG)
![MaxMaxElph.JPG](https://i.publiclab.org/system/images/photos/000/000/089/medium/MaxMaxElph.JPG)<p></p>
<em>The Schott BG3 filter passes lots of blue light (400-500 nm) and lots of near infrared light (>700 nm), but passes very little red light (600-700 nm). 
Canon Powershots with this filter instead of the standard IR block filter record little red light in the red channel, which instead records near infrared light.</em>
<p></p>

Although the current Public Lab infrared tool includes two cameras -- one for visible light and one for infrared -- it is possible to make NDVI images with only one camera. A filter can be used to block all red light, so that the only light captured in the camera's red channel is infrared. The blue channel captures normally, so NDVI is computed using the difference between the blue and red channels. NDVI computed from satellite or aircraft data uses red light because blue light is scattered by the atmosphere and introduces unwanted variation.  At close range, this scattering is not a problem so blue light can be used to make meaningful NDVI images.

![Rosco2007.JPG](https://i.publiclab.org/system/images/photos/000/000/090/medium/Rosco2007.JPG)
![Rosco2007Ebert.JPG](https://i.publiclab.org/system/images/photos/000/000/091/medium/Rosco2007Ebert.JPG)<p></p>
<em> The Rosco #2007 VS Blue filter has a spectral transmission similar to the Schott BG3 filter. Above is their published spectral curve and Ebert's curve.</em>
<p></p>

Glass filters are available that block all red light but pass the blue end of the spectrum and also infrared light. These are expensive, so I have been experimenting with inexpensive polyester filters made for theatrical production.  [One company makes filters in many dozens of different colors](http://www.rosco.com/filters/cinegel.cfm?CategoryID=33) and publishes a spectral graph of each filter. I bought a Rosco #2007 VS Blue filter to test, which only cost about US$7.00 for a 20 x 24 inch sheet. My cousin gave me a new Canon Powershot A810 ($70-$100 on eBay) that she had picked up as swag at a conference, so I removed the IR block filter from it to make it sensitive to infrared light. I attached it to a Public Lab spectrometer ([Ebert](http://publiclab.org/notes/cfastie/2-19-2013/ebert)) and photographed spectra of halogen light passing through a piece of the Rosco filter. There is some similarity between this spectrum and the one Rosco publishes for this filter.  In Ebert's curve it appears that less of the far blue light and infrared light past 750 nm is being transmitted, but the sensitivity of my A810 falls off at both ends of the spectrum, so those parts can't be compared with the professional spectral graphs.  The important characteristic evident in all the spectral graphs is that very little red light is transmitted, but blue and infrared are.  The question is whether the cheap Rosco filter will allow the A810 to capture photos with mostly blue light in the blue channel, and mostly infrared light in the red channel. 

![Rosco_G11.jpg](https://i.publiclab.org/system/images/photos/000/000/092/medium/Rosco_G11.jpg)<p></p>
<em>Ned's G11 has a LifePixel Superblue filter (probably a Schott BG3) in front of the sensor instead of the standard IR block filter. My A810 has some Rosco blue filter taped in front of the lens.</em>
<p></p>
Ned Horning has a Canon Powershot G11 with a Schott BG3 glass filter which has been professionally installed in it where the original IR block filter used to be.  The US$250 price tag for this Superblue conversion does not include the camera, which is $250-$350 on eBay.  It captures photos which can be converted into very good NDVI images. He lent me this camera this week and I have been using it every day to shoot whatever green plants I can find outside (it's still a little brown around here). I also taped a piece of the Rosco blue filter in front of the lens of the A810 and have been taking the same shots with it.

The strong blue color that reaches the camera's sensor overpowers the standard white balance settings. I tried each white balance preset in the A810 and the photos were all purple. Then I used the A810's custom white balance  feature while filling the frame with light bouncing off a gray stone. This makes the images from the modified A810 resemble the photos from the professional Superblue G11. So just about any camera can be converted to a Superblue camera, but the custom white balance feature might be a requirement.

![WBalanceRosco.jpg](https://i.publiclab.org/system/images/photos/000/000/093/medium/WBalanceRosco.jpg)<p></p>
<em>Custom white balance is probably a requirement of cameras to be modified into NDVI cameras. Pointing the camera at anything while calibrating the white balance works. More experimentation is needed to learn how white balance affects the final NDVI image.</em>
<p></p>
Ned has a special version of his ImageJ plugin which uses the red and blue channels of a single image to compute NDVI. This makes it really easy to make NDVI images from single Superblue photos or from entire directories of them.  Some early results are below. The Rosco filter on the A810 did not produce the nice discrimination of green plants that the professional Superblue camera did. I took more photos today with different white balance which might improve the usefulness of the RoscoCam. I will put those in another note soon ([here it is](http://publiclab.org/notes/cfastie/04-21-2013/rosco)).

![Filterdaylilly.jpg](https://i.publiclab.org/system/images/photos/000/000/094/large/Filterdaylilly.jpg)
![NDVIdaylilly.jpg](https://i.publiclab.org/system/images/photos/000/000/095/large/NDVIdaylilly.jpg)

