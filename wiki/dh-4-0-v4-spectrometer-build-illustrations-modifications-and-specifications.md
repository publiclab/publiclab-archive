---
title: "DH 4.0 v4 Spectrometer Build Illustrations, Modifications and Specifications"

tagnames: ''
author: dhaffnersr
path: /wiki/dh-4-0-v4-spectrometer-build-illustrations-modifications-and-specifications.md
nid: 13415
uid: 461120

---

![](https://publiclab.org/public/system/images/photos/000/017/898/original/DH_spectrometer_sept_3_view_2.png)

# DH 4.0 v4 Spectrometer Build Illustrations, Modifications and Specifications

by [dhaffnersr](../profile/dhaffnersr)

September 03, 2016 22:48 | Tags: 

----

This is what my spectrometer looks like at the present moment...


This is the view with the forward face cover on. ( it would be covered when doing fluorescence spectra, then you would remove the plug on the side for your 90 degree angle.) do the opposite for absorption spectra, remove the front cover and place the plug back in the side.

[![DH_spectrometer_sept_3_view_2.png](//i.publiclab.org/system/images/photos/000/017/899/large/DH_spectrometer_sept_3_view_2.png)](//i.publiclab.org/system/images/photos/000/017/899/original/DH_spectrometer_sept_3_view_2.png)

The cuvette holder is designed to accommodate both forward facing geometry and perpendicular geometry ( 90 degree) as well.

[![DH_spectrometer_sept_3.png](//i.publiclab.org/system/images/photos/000/017/900/large/DH_spectrometer_sept_3.png)](//i.publiclab.org/system/images/photos/000/017/900/original/DH_spectrometer_sept_3.png)

I replaced the old JDEPC-ov04 webcam with the more recent modification from the same company, with the one you can purchase now from Plab store. The JDEPC-ov05 and removed its IR filter. I will be posting it's specifications here also, I preformed the same theoretical calculation for resolution below, with the new values of 0.06mm slit width and the same DVD grating of 2770 lines using 532nm as my resolution wavelength: 

1 X 0.25mm X 2770lines = 692.5 
R = 532/692.5
R = 0.76

So I have a theoretical bandwidth of 0.76nm. Using a DPSS 150mW portable laser, I re-imaged my spectral bandwidth for a more practical value, by gathering the FWHM value of; 0.25227 for the DPSS 532nm green laser. 

The main goal for this project has 4 points:

_1) To build a rugged and reliable low cost spectrometer with readily available parts 

_2) A spectrometer capable of producing consistent and professional quality results in the field, home or Lab 

_3) A device with upgradeable capabilities 

_4) A device with minimal setup and prep time/ i.e., just plug it in and run!

CMOS Camera Module: JDEPC-OV05

cmos camera focal length is now calibrated at 152.39mm (camera focal eye to forward face of cuvette holder.)

Measurements between the slit to cmos camera eye are not as important as precise alignment of camera to DVD grating and DVD grating to slit entrance, so with this in mind, the camera is now at 40 deg relative to slit entrance and DVD grating is at same (40 deg) relative to cmos camera eye.

The ruling density of the DVD grating is 8.5 GB which equates to 2770 lines per mm. The slit width is now 0.06mm and a spectral bandwidth of 0.76, using the new Gillette razor blade design I made. Project box dimensions are: 190mm X 109mm X 55mm.

Slit width dimensions are: 25mm in length, Cmos camera from slit: 88mm Camera angle: 40 degrees DVD grating angle: 40 degrees. Entrance coupler for slit and cuvette holder: 44mm in Diameter.

Wavelength range = 353nm – 693nm (reliably)

**Specifications for the JDEPC-OV05 CMOS camera:**

[![JDEPC-ov05_sheet_1.png](//i.publiclab.org/system/images/photos/000/017/901/large/JDEPC-ov05_sheet_1.png)](//i.publiclab.org/system/images/photos/000/017/901/original/JDEPC-ov05_sheet_1.png)

[![JDEPC-ov05_sheet_2.png](//i.publiclab.org/system/images/photos/000/017/902/large/JDEPC-ov05_sheet_2.png)](//i.publiclab.org/system/images/photos/000/017/902/original/JDEPC-ov05_sheet_2.png)

[![JDEPC-ov05_sheet_3.png](//i.publiclab.org/system/images/photos/000/017/903/large/JDEPC-ov05_sheet_3.png)](//i.publiclab.org/system/images/photos/000/017/903/original/JDEPC-ov05_sheet_3.png)

[![JDEPC-ov05_sheet_4.png](//i.publiclab.org/system/images/photos/000/017/904/large/JDEPC-ov05_sheet_4.png)](//i.publiclab.org/system/images/photos/000/017/904/original/JDEPC-ov05_sheet_4.png)

[![JDEPC-ov05_sheet_5.png](//i.publiclab.org/system/images/photos/000/017/905/large/JDEPC-ov05_sheet_5.png)](//i.publiclab.org/system/images/photos/000/017/905/original/JDEPC-ov05_sheet_5.png)

I have been also working on a far more stable entrance slit design and decided to include it with the build instructions. I have tested it several times and will post my results, I made one for my 0.12mm slit and my 0.09mm slit.

The slit I am using now is the 0.09mm one.

[![slit_design_pic_1.png](//i.publiclab.org/system/images/photos/000/017/918/large/slit_design_pic_1.png)](//i.publiclab.org/system/images/photos/000/017/918/original/slit_design_pic_1.png)

[![slit_design_pic_2.png](//i.publiclab.org/system/images/photos/000/017/919/large/slit_design_pic_2.png)](//i.publiclab.org/system/images/photos/000/017/919/original/slit_design_pic_2.png)

[![slit_design_pic_3.png](//i.publiclab.org/system/images/photos/000/017/920/large/slit_design_pic_3.png)](//i.publiclab.org/system/images/photos/000/017/920/original/slit_design_pic_3.png)

[![slit_design_pic_4.png](//i.publiclab.org/system/images/photos/000/017/921/large/slit_design_pic_4.png)](//i.publiclab.org/system/images/photos/000/017/921/original/slit_design_pic_4.png)

[![slit_design_pic_5.png](//i.publiclab.org/system/images/photos/000/017/922/large/slit_design_pic_5.png)](//i.publiclab.org/system/images/photos/000/017/922/original/slit_design_pic_5.png)

[![slit_design_pic_6.png](//i.publiclab.org/system/images/photos/000/017/923/large/slit_design_pic_6.png)](//i.publiclab.org/system/images/photos/000/017/923/original/slit_design_pic_6.png)

[![slit_design_pic_7.png](//i.publiclab.org/system/images/photos/000/017/924/large/slit_design_pic_7.png)](//i.publiclab.org/system/images/photos/000/017/924/original/slit_design_pic_7.png)

**Supply source for blackout material and the aluminum black tape I used:**

http://www.thorlabs.com/newgrouppage9.cfm?objectgroup_id=190 – blackout materials ect.,

T205-1.0 - AT205 Black Aluminum Foil Tape 1" x 81' (25 mm x 25 m) Roll Cost-$28.80 a roll









