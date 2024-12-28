---
title: "Revised 3D printable mini spectrometer"

tagnames: 'spectrometer, spectrometry, intensity-calibration, absorption, absorption-spectrometry, hardware, activity:spectrometry, vis-spectroscopy, 3d-print, build:13865, lat:1.655043, lon:3.863525'
author: B-winters
path: /notes/B-winters/12-14-2018/revised-3d-printable-mini-spectrometer.md
nid: 17891
uid: 563397
cids: 21584,21585,21586,23369,23370,29377,29379
---

![](https://publiclab.org/public/system/images/photos/000/030/513/original/camera_spectrometer.jpg)

# Revised 3D printable mini spectrometer

by [B-winters](/profile/B-winters) | December 14, 2018 00:00

December 14, 2018 00:00 | Tags: [spectrometer](/tag/spectrometer), [spectrometry](/tag/spectrometry), [intensity-calibration](/tag/intensity-calibration), [absorption](/tag/absorption), [absorption-spectrometry](/tag/absorption-spectrometry), [hardware](/tag/hardware), [activity:spectrometry](/tag/activity:spectrometry), [vis-spectroscopy](/tag/vis-spectroscopy), [3d-print](/tag/3d-print), [build:13865](/tag/build:13865), [lat:1.655043](/tag/lat:1.655043), [lon:3.863525](/tag/lon:3.863525)

----

I used the [3D printed mini spectrometer](https://publiclab.org/notes/rthalman/01-19-2017/3d-printed-mini-spectrometer) from @rthalman and made some changes to improve performance and ensure it would serve my purposes well. The parts simply need to be printed on a consumer-grade 3D printer and cleaned as is typical for each specific printer model. I used methylene chloride to solvent weld the phone case to the grating holder, but this is not strictly necessary as there is a peg and hole combo that holds it all together reasonably well. In the exploded view of the pieces below, you can see how each piece fits together. Otherwise, the parts simply slide together as shown.

![image description](/i/28339.png "Screen_Shot_2018-12-13_at_5.32.23_PM.png")

From left to right: flashlight cradle (blue), flashlight adapter (dark grey), universal cuvette holder (orange), cuvette mockup (clear blue), cuvette cover (black), slit tube (light grey, as produced exactly by @rthalum), tube adapter (light blue), grating mount (dark blue), phone holder (green, for iPhone 6s and modified from a design made by Quentin MAURIN on [Onshape.com](http://Onshape.com))

The figure below is the first print of this system:![image description](/i/28344.jpeg "IMG_0242.jpeg")

On the left end of the universal cuvette holder you may notice a small slot, this is for a piece of white paper or similar to serve as a gain filter. The grating mount takes a 1000 blazes/mm grating mounted in a standard projection slide (2 inches x 2 inches). I purchased my grating on [Amazon.com](http://Amazon.com) in a pack of 10 for roughly $10\.

It is worth noting that I have already modified the design to flip it 90 degrees and make the use of the phone a bit more comfortable. See figure below:

![image description](/i/28340.png "Screen_Shot_2018-12-13_at_5.08.04_PM.png")

I have not yet printed this configuration, but am excited to see it come together. While I was working on this I realized a simple modification to the flashlight adapter would allow for a 90 degree signal geometry, which could theoretically be used for fluorescence. See figure below:![image description](/i/28341.png "Screen_Shot_2018-12-13_at_5.07.08_PM.png")

In this configuration, the signal enters the cuvette from the side of the instrument and signal is collected as before.

Here is one of the images I was able to collect with the horizontal system:![image description](/i/28345.jpeg "IMG_0237.jpeg")

And here is one crudely collected by rotating the apparatus 90 degrees to the vertical configuration and then taping the flashlight adapter to the end. Call it a proof of concept.![image description](/i/28346.jpeg "IMG_0256.jpeg")

The black streaks in the image are likely due to the use of a completely plastic printed slit. I intend to modify this design to include a slit made from two razor blades and will report back when I have accomplished this. In the meantime I will utilize the row averaging feature of SpectralWorkbench to help compensate for fluctuations. Additionally, I plan to use the same rows of data each time.

Perhaps I should have started with this, but the initial rationale for designing such an instrument was my imminent study abroad course in Ecuador including the Amazon rainforest, the high altitude cloud forest, and the Galapagos islands. I am working with an undergraduate student to develop a crude study of the soils in each location. We plan to test the ability of unamended and biochar amended soil in the capture of several food colors (these will serve as admittedly poor analogues for organic decomposition products). This instrument and SpectralWorkbench will be used in the analysis of the collected spectra, but you'll have to wait for the data as we don't leave until early January and will not return until late January 2019\.

Thanks for taking a look!

**22 March 2019 Update:** We were able to use both the visible spectrometer and the fluorimeter in the Amazon, but we planned to use an iOS device as the detector (iPhone 6s) and that interface with spectralworkbench seemed to be buggy. We were able to collect the images without any issue, but uploading them to the spectralworkbench archives proved to be impossible especially with spotty internet in Ecuador. We were, however, excited to discern visible differences in the water samples we ran through several soil columns and we were delighted to see visible signs of fluorescence using a blue LED to excite chlorophyll extracted with ethanol from leaf cuttings. There was a strong and unique signal in the red region as expected.

Upon returning home to St. Paul, I set about improving the design and addressing the software issues. I had initially wanted to integrate the iOS devices as a way to allow users to bring their own device and thus simplify, but that has not worked well. I have seen the software work better on Android devices, but don't own one and can't test it. In the end, I opted to integrate a USB ELP camera I purchased on Amazon instead. This interface appears to work much better with SpectralWorkbench. The STL files are linked below. Other changes include removing the slit from the printed slit tube and using either metal foil tape or a LASER cutter to make slits in cardboard, there is a slot in the slit tube to insert the slit, but the old slit tube can still be used instead. Additionally, there is a small cradle designed for an optical filter to be placed between the cuvette and the slit, this is designed for 1" optics, but optics need to be placed in the cradle. Let me know how it works and please suggest changes.

  
![image description](/i/30497.png "Untitled.png")

CAD image of the updated 3D-printable spectrophotometer with USB ELP camera mount.![image description](/i/30499.jpg "IMG_1352.JPG")

Picture of the 3D-printable spectrophotometer with USB ELP camera installed and with new flashlight/fluorescence adapter combo along with LASER and LED penlights used for excitation.

Here's the original STL print files (in inches):[Flashlight\_Adapter.stl](/i/28351.stl), [Cuvette\_Cover.stl](/i/28352.stl), [Flashlight\_Cradle.stl](/i/28353.stl), [Fluorimeter\_Adapter.stl](/i/28354.stl), [Grating\_and\_Phone\_Mount.stl](/i/28355.stl), [iPhone\_6s\_Case.stl](/i/28356.stl), [Slit\_Tube.stl](/i/28357.stl "https://publiclab.org/i/28357.stl"), [Tube\_Support\_Bracket.stl](/i/28358.stl), [Universal\_Cuvette\_Holder.stl](/i/28359.stl)

Zip file with original STL files in mm:[Original\_STL\_files.zip](/i/30512.zip)

Here's the updated STL files as of 22 March 2019 (in inches):[Universal\_Cuvette\_Holder.stl](/i/30500.stl), [Camera\_Base.stl](/i/30501.stl), [Flashlight\_Cradle.stl](/i/30502.stl), [Camera\_Lid.stl](/i/30503.stl), [Cuvette\_Cover.stl](/i/30504.stl), [Flashlight\_Adapter.stl](/i/30505.stl), [flashlight\_cap.stl](/i/30506.stl), [fluorescence\_cap.stl](/i/30507.stl), [Grating\_Mount.stl](/i/30508.stl), [Slit\_Tube.stl](/i/30509.stl), [Tube\_Support\_Bracket.stl](/i/30510.stl)

Zip file containing all of the 22 March updates in mm rather than inches:[Updated\_spec\_in\_mm.zip](/i/30511.zip)