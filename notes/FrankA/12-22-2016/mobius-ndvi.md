---
title: "Mobius NDVI"

tagnames: 'ndvi, infrared, health, plant, infra-red, mobius-actioncam, mobius, mobius-action-cam'
author: FrankA
path: /notes/FrankA/12-22-2016/mobius-ndvi.md
nid: 13803
uid: 469049

---

![](https://publiclab.org/public/system/images/photos/000/019/125/original/Screen_Shot_2016-12-22_at_3.23.02_PM.png)

# Mobius NDVI

by [FrankA](../../../profile/FrankA) | December 22, 2016 20:00

December 22, 2016 20:00 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [health](../tag/health), [plant](../tag/plant), [infra-red](../tag/infra-red), [mobius-actioncam](../tag/mobius-actioncam), [mobius](../tag/mobius), [mobius-action-cam](../tag/mobius-action-cam)

----

[![IMG_1504.JPG](https://publiclab.org/system/images/photos/000/019/128/large/IMG_1504.JPG)](https://publiclab.org/system/images/photos/000/019/128/original/IMG_1504.JPG)

<iframe width="560" height="315" src="https://www.youtube.com/embed/XiKFT191cUg" frameborder="0" allowfullscreen></iframe>

https://youtu.be/XiKFT191cUg

Please visit the above website.

NDVI Phantom 2 with Mobius camera Blue filter - post processed using "FIJ"I software.InfraBlueNDVI. Lut. 

I wrote a macro for FIJI to post process the images... from the Mobius into : Tiff or Jpg into the type of Lut that best represented the data information I was after. Each run was producing 200+ images.. 

The processing time was 1minute 25 seconds. I then loaded the sequence into iMovie and played around with the timelapse. Using the FIJI LUTs was easy... TRY it YOURSELF.

BTW any camera with the IR filter removed / changed will give the same results.

You need the FIJI app.
 the Macro I wrote allows you to select - on the fly, your own input  AND output folder:   l have set "type" to jpeg - this works well with Imovie.

Mobius files are prefixed with IMA.. we use this to collect all the original "blue" files.
I used an IMAC for this ... 

You may need to source the  InfraBlueNVDI. lut files (Plus other luts online).. Mine was done ages ago

NDVIBlu2RedWB.lut
NDVIBlu2Red.lut
NDVI_VGYRM.lut
infraBlueNDVI.lut
NDVI_VGYRM (1).lut

name the  Macro... NDVI.txt...... MACRO TEXT BELOW: just copy and paste into a text file and save it.


 adir = getDirectory("");  
setBatchMode(true);
run("Image Sequence...", "open=[adir] file=IMA sort use");
mydir = getDirectory(""); 
run("Split Channels");
run("infraBlueNDVI");
run("Calibration Bar...", "location=[Upper Right] fill=None label=Black number=5 decimal=0 font=12 zoom=2 overlay");
run("Image Sequence... ", "format=JPEG  save=[mydir]")



run("Close All");


setBatchMode(false);





Once you have your original "BLUE" files:
OPen the  Plugins tab: Macros... Run. Then select the macro: select the input folder and files and run.

You should end up with converted files in the Results folder

drop me a line if issues:
frank.aldous@btinternet.com
