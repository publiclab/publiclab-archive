---
title: "WheeTrometer 2.0"

tagnames: 'spectrometer'
author: bhickman
path: /notes/bhickman/04-21-2014/wheetrometer-2-0.md
nid: 10338
uid: 201929
cids: 8840,8855,8958,8968,8972
---

![](https://publiclab.org/public/system/images/photos/000/003/763/original/feb92014_flourescencespec2.png)

# WheeTrometer 2.0

by [bhickman](/profile/bhickman) | April 21, 2014 04:11

April 21, 2014 04:11 | Tags: [spectrometer](/tag/spectrometer)

----

WheeTrometer 2.0

##What we want to do:
We want to provide an affordable, open source spectrophotometer for measuring absorption of visible light by solutions. The goal is to have 1 nm wavelength resolution and 12 bit intensity resolution. 

##Background: 
A description of our first spectrophotometer can be [found here](http://publiclab.org/notes/bhickman/10-12-2013/ccd-diodearray-spectrometer). The wavelength resolution of this instrument was not as good as we hoped, which we believe was due to no focusing element (mirror or lenses) after the diffraction grating.   In this report, we have also altered the arrangement of the grating, collimating lens, and slit after a learning a little more about optics. 

##Attempt and results: 
The spectrophotometer is housed in a project box.  It uses a wooded base as the optical platform, a wooden cuvette holder, a slit made of two razor blades, a collimating lens, diffraction grating (1000 lines/mm), a focusing mirror, and a TSL1406R 768 X 1 element photodiode array (pda).  Data from the pda is read by a Tiva C series LaunchPad and sent to a computer. A general schematic of the spectrometer is shown below.


[![diodearray_spectrometer_FocusingMirror_2.png](https://i.publiclab.org/system/images/photos/000/003/733/medium/diodearray_spectrometer_FocusingMirror_2.png)](https://i.publiclab.org/system/images/photos/000/003/733/original/diodearray_spectrometer_FocusingMirror_2.png)



In the figure above f1 is the focal length of the collimating lens (27 mm) and f2 is the focal length of the focusing mirror (50 mm). By placing the slit a distance of f1 away from the collimating lens, the image of the slit is focused at infinity (i.e. collimates the light). Also by placing the PDA a distance of f2 away from the focusing mirror, the diverging light from the diffraction grating is focused at a position on the PDA  dependent upon the angel it is diffracted.

A couple key equations for the alignment of the spectrometer are:

	d sin(θ)=mλ	(1)
	h= ftan(α)	  (2)

In Equation 1, d is the width between the slits on the diffraction grating, θ is the angle of diffraction, m is the order of diffraction, and λ is the wavelength being diffracted. This equation allows calculation of the angle and distance of the focusing mirror from the diffraction grating so that only the wavelengths of interest are falling on the PDA.

Equation 2 is a general concave mirror equation. In Equation 2 h is the height of an image above the focal point, f is the focal length of the mirror and α is the angle of deviation from normal from the mirror (Shown below).


[![diagram.png](https://i.publiclab.org/system/images/photos/000/003/734/medium/diagram.png)](https://i.publiclab.org/system/images/photos/000/003/734/original/diagram.png)



With these two equations and a little trig (maybe a lot…) the grating, focusing mirror, and PDA can be aligned so that light of the desired wavelengths are focused on the PDA. 



A few picture of the spectrometer are shown below. 

As shown below, a hole was drilled in the top of the housing to allow insertion of a cuvette. A second hole (in the back side) allows light to enter the spectrometer. In the previous design, the light source was inside the housing. This new configuration allows for calibration using a fluorescent light, then operation using a second light source, such as a halogen lamp. Wires connecting the PDA to the LaunchPad exit via a third hole.











[![WP_20140412_014.jpg](https://i.publiclab.org/system/images/photos/000/003/751/medium/WP_20140412_014.jpg)](https://i.publiclab.org/system/images/photos/000/003/751/original/WP_20140412_014.jpg)










The cuvette holder, slit, collimating lens, and grating were mounted on a block of wood. The focusing mirror and PDA were mounted directly to the bottom piece of the project box. 

The cuvette holder (shown below) is a block of wood with two perpendicular holes, one to accept the cuvette and the other to allow light through. 

The slit was made from two razor blades mounted on a block with a hole drilled through it. The razor blades were screwed to the block, aligned, and then epoxied to keep them in place. To allow adjustment of the slit position, the block is held in place by clamping it to the wooden platform using a piece of plastic with screws on each side. The collimating lens and grating are both mounted to a third block of wood.  A hole slightly smaller than a collimating lens was drilled in this block and the lens fitted so that its edge was even with the edge of the block. The grating was simply glued to the other end of the block. 








 [![WP_20140412_007.jpg](https://i.publiclab.org/system/images/photos/000/003/752/medium/WP_20140412_007.jpg)](https://i.publiclab.org/system/images/photos/000/003/752/original/WP_20140412_007.jpg)      [![WP_20140412_005.jpg](https://i.publiclab.org/system/images/photos/000/003/753/medium/WP_20140412_005.jpg)](https://i.publiclab.org/system/images/photos/000/003/753/original/WP_20140412_005.jpg)



[![WP_20140412_008.jpg](https://i.publiclab.org/system/images/photos/000/003/754/medium/WP_20140412_008.jpg)](https://i.publiclab.org/system/images/photos/000/003/754/original/WP_20140412_008.jpg)























The focusing mirror and PDA were mounted using similar methods.  The mirror was first mounted on a piece of metal using epoxy glue as shown below. 








[![DSCN0196.JPG](https://i.publiclab.org/system/images/photos/000/003/755/medium/DSCN0196.JPG)](https://i.publiclab.org/system/images/photos/000/003/755/original/DSCN0196.JPG)












The metal plate was mounted to a piece of plastic with four screws and the plastic was mounted on an L bracket with three screws. Each of these screws had a spring spacer between the L bracket and the plastic so that the angel of the mirror could be adjusted. The other arm of the L bracket was bolted to the bottom of the project box.










[![DSCN0205.JPG](https://i.publiclab.org/system/images/photos/000/003/756/medium/DSCN0205.JPG)](https://i.publiclab.org/system/images/photos/000/003/756/original/DSCN0205.JPG)



[![WP_20140408_002.jpg](https://i.publiclab.org/system/images/photos/000/003/757/medium/WP_20140408_002.jpg)](https://i.publiclab.org/system/images/photos/000/003/757/original/WP_20140408_002.jpg)    [![WP_20140408_001.jpg](https://i.publiclab.org/system/images/photos/000/003/758/medium/WP_20140408_001.jpg)](https://i.publiclab.org/system/images/photos/000/003/758/original/WP_20140408_001.jpg)























The PDA was mounted similarly. First the PDA was mounted to a piece of plastic with two bolts, using spacers to keep a gap for the electronics. The plastic was then mounted to an L bracket which was then bolted to the bottom of the project box.






[![WP_20140412_004.jpg](https://i.publiclab.org/system/images/photos/000/003/760/medium/WP_20140412_004.jpg)](https://i.publiclab.org/system/images/photos/000/003/760/original/WP_20140412_004.jpg)








With the current design I have been able to get ~5 to 10 nm resolution. The screen shot below illustrates the performance of the spectrometer, tested using a fluorescent light. As you can see the two peaks at approx. 542 nm and 546 nm (mercury and terbium according to Wikipedia) are not resolved. 




[![feb92014_flourescencespec2.png](https://i.publiclab.org/system/images/photos/000/003/762/medium/feb92014_flourescencespec2.png)](https://i.publiclab.org/system/images/photos/000/003/762/original/feb92014_flourescencespec2.png)










##Questions and Next Steps: 
•	Use cuvette holder made by Dr. Summers (Actually fits a cuvette snugly)
•	Improve slit design. One of the major contributors to decreased resolution
•	Improve alignment of optics to further maximize resolution
•	Use a 2048 element PDA rather than the current 768 element PDA. This PDA is cheaper and may improve wavelength resolution
•	Write up the math for figuring out the alignment of the optics
•	Clean up the code and post on GitHub


##Acknowledgements:
Dr. [Jack Summers](http://publiclab.org/profile/JSummers) of Western Carolina University