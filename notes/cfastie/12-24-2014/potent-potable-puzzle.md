---
title: "Potent Potable Puzzle"

tagnames: 'near-infrared-camera, nir, holiday, absorption, infragram, happy-holidays, response:11489'
author: cfastie
path: /notes/cfastie/12-24-2014/potent-potable-puzzle.md
nid: 11496
uid: 554
cids: 11002,11003,11004,11418
---

![](https://publiclab.org/public/system/images/photos/000/008/533/original/4IRbevWrat87_Named.jpg)

# Potent Potable Puzzle

by [cfastie](/profile/cfastie) | December 24, 2014 18:42

December 24, 2014 18:42 | Tags: [near-infrared-camera](/tag/near-infrared-camera), [nir](/tag/nir), [holiday](/tag/holiday), [absorption](/tag/absorption), [infragram](/tag/infragram), [happy-holidays](/tag/happy-holidays), [response:11489](/tag/response:11489)

----

Unfortunately, there were no correct answers submitted to the [Holiday Whodunit](http://publiclab.org/notes/cfastie/12-21-2014/holiday-beverage-whodunit), so nobody won the new car.  
.  
[![carwithbow2.jpg](https://i.publiclab.org/system/images/photos/000/008/529/thumb/carwithbow2.jpg)](https://i.publiclab.org/system/images/photos/000/008/529/original/carwithbow2.jpg)  
.  
The correct answer is D, the glass on the right is Chianti. Here is how you might have guessed that.

From Clue #1 you know that the photo of four glasses is a near infrared (NIR) photo. Also the filename of the photo has the string “Wrat87” in it, and the photo has the tag “Wratten87” in the EXIF header. Wratten 87 is a type of filter that transmits only near infrared light, so a reasonable assumption is that the photo is pure near infrared. 

From Clue #2 you know that the glasses include two dark beverages (coke and wine) which are mostly water, and also pure water.

From Clues #3 and #4, you know that both Coca-Cola and Chianti appear to be mostly transparent to near infrared light. 

So you can **eliminate Glass A** from contention – Glass A is too dark to be Chianti in NIR light. One down, two to go.

If Coca-Cola and Chianti, which are mostly water, are quite translucent in NIR, then water is probably similar. In fact, pure water probably transmits more NIR than water that has sugar and pigment and who knows what in it. So of the three remaining glasses (B, C, D), the most clear is probably water. 

So you can **eliminate Glass C** – it is probably the water. Two down, one to go.

In photos taken with a Wratten 25A Infragram camera, the blue channel is mostly pure near infrared light.  If you isolate the blue channel in these photos, you have a good facsimile of near infrared photos.  
.  

[![NIR4panGS2k.jpg](https://i.publiclab.org/system/images/photos/000/008/531/medium/NIR4panGS2k.jpg)](https://i.publiclab.org/system/images/photos/000/008/531/original/NIR4panGS2k.jpg)  
*The blue channel of a Wratten 25A Infragram photo is mostly NIR and looks just like a pure NIR photo taken with a Wratten 87 camera. This comparison is the best confirmation of that statement I have seen.*  
.  

From these blue channels, or just from the Wratten 25A photos, it appears that Coca-Cola is darker than Chianti.  This could be an artifact of exposure or glass size, but it could be a real difference.

Assuming the Chianti transmits more NIR than Coca-Cola, **Glass D must be the Chianti** – It is lighter than glass B.  
.  

[![4BevRGBNIR2pan.jpg](https://i.publiclab.org/system/images/photos/000/008/532/large/4BevRGBNIR2pan.jpg)](https://i.publiclab.org/system/images/photos/000/008/532/original/4BevRGBNIR2pan.jpg)  
*These are smaller glasses and are in a different order than the original puzzle photo, but the same patterns are evident. The lower photo is taken with a 720 nm IR filter which is similar to Wratten 87.*  
.  
The logic above does not prove that Glass D is Chianti, but is a good starting point for further investigation. A good detective would proceed to intimidate the suspects until the guilty one slipped up, broke down, and confessed.  

I was quite surprised by how transparent Coke and Chianti are to NIR light. A spectrogram of light transmission through these liquids should show much higher values in the NIR region than in the visible. I did not find this pattern in any spectra of these liquids at spectralworkbench.org presumably because consumer cameras are not as sensitive to NIR as to visible light.  In this case, an Infragram camera provides better information about the question than a DIY spectrometer (Even though Infragram cameras are also consumer cameras.  Hmm, a puzzle.). 

Although soy sauce absorbs a lot more NIR than Chianti or Coke, it is much more translucent to NIR than to visible light. Below is an NIR photo of soy sauce in front of a window.  I don't know the physics behind this phenomenon that dark liquids transmit so much NIR light.  Another puzzle.  
.  

[![IRbevWrat87-560-34.jpg](https://i.publiclab.org/system/images/photos/000/008/534/medium/IRbevWrat87-560-34.jpg)](https://i.publiclab.org/system/images/photos/000/008/534/original/IRbevWrat87-560-34.jpg)  
*Soy sauce in a small glass with strong back lighting. The window frame visible in the glass is not a reflection but is being transmitted through the soy sauce. Taken with a Wratten 87 filter.*  
.  

Enjoy your dark beverages responsibly this holiday, and don't forget to take your Infragram camera to cocktail hour (#lifeoftheparty).

