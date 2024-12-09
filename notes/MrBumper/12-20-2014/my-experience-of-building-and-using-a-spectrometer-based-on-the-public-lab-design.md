---
title: 'My experience of building and using a spectrometer based on the Public Lab design'
tagnames: desktop-spectrometry-kit, first-time-poster
author: MrBumper
path: /notes/MrBumper/12-20-2014/my-experience-of-building-and-using-a-spectrometer-based-on-the-public-lab-design.md
nid: 11488
uid: 432766

---

# My experience of building and using a spectrometer based on the Public Lab design

by [MrBumper](../profile/MrBumper) December 20, 2014 17:37

December 20, 2014 17:37 | Tags: [desktop-spectrometry-kit](../tag/desktop-spectrometry-kit), [first-time-poster](../tag/first-time-poster)

----

I originally posted the following to the Sepctrometry thread, which prompted a number of useful comments. Liz Barry, director of community development at PL, asked me to copy post here. Based on the comments I received I have added the odd note, so what was quite a long post .... is now even longer!
____________________
 
I had ordered a Public Lab spectrometer kit, which I received here in the UK a couple of days ago. However I got impatient waiting for it to arrive so I went ahead and built my own using a Logitech C310 HD web cam.

I bought a black plastic box about 8 by 4.5 by 2.5 inches and cut two pieces of 1 by 1 inch aluminium angle as mounts for the camera and the diffraction grating. The two angle pieces are fixed to the box by bolts such that they can be swivelled and I can experiment a little with angles. I used a small office butterfly clip to hold the diffraction grating on to the angle. The reflective surfaces of the aluminium are covered with black card. ... 

Note - Using the butterfly clip means I can very easily change the holographic film diffraction grating for, for example a piece with a different line spacing or for a chunk of DVD. The slit on my build is interchangeable / variable. I have two sliding aluminium support plates bolted on either side of a largish rectangular hole in the box. I can use these to clamp either two pieces of black card I can slide back and forth to make an adjustable slit, or I can clamp in one of the printed slits available from PL. 

I encountered my first problem with the diffraction grating. I tried splitting several DVD-Rs but tended to wind up with the aluminium silvering stuck to the wrong half. In the small places where the aluminium had stayed with the top half I still had a layer of photo sensitive dye tinting the clear sections purple. Successful separation of the DVD may be brand specific.I recently split the DVD that came with the PL kit and that split a little better. I will try using DVD material in the future, but instead I bought some Edmund Optics 1000 lines per mm holographic film (DVD material gives you 1,351 lpmm). .... 

See my research note on removing silvering and dye from a DVD-R: <a href="http://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating">Preparing a DVD-R to act as a diffraction grating</a>

Note - I did find a US school project on the web, where they experimented with CDs and DVDs as diffraction gratings. They apparently were able to remove the aluminium silvering by rubbing down some adhesive packing tape onto the separated surfaces. The silvering would then come away with the tape when they peeled it off. BTW - I don't know if it makes any difference to the perfomance of the spectrometer if the grooved side of the DVD diffraction grating is either facing towards or away from the camera lens. Or for that matter whether the holographic film I used has sides and is best one way round. I suspect the answer is yes, and the 'grooves' should be toward the camera lens.

There is a question here over the transmission efficiency of the diffraction grating. So far as I understand it there is no procedure for calibrating the amplitude response of the spectrometer. Now this isn't so bad if the amplitude response remains relatively flat across the spectrometers range, but looking at the efficiency curves for commercial diffraction gratings it seems that response normally isn't flat and can vary by as much as 40% over their useful range. This has to be corrected for in spectrometer design / software. Now I have no idea how flat the response of a chunk of DVD or a piece of holographic film might be. I have tried asking Edmond Optics about their holographic film but they have not responded. ....

Note - I do have some plots of daylight and fluorescent lighting I captured a fair while ago using a spectrometer that was part of a Microvision Superspot 100, an instrument designed for the measurement and analysis of computer displays. If I compare these with the plots I get from my DIY spectrometer, the DIY plots look remarkably similar. So it would seem that the amplitude response of the DIY spectrometer is at least not horribly distorted. 

I tried to understand the optical design of the PL spectrometer to see if I could calculate better angles for my build, but I still haven't worked out if the PL design was carefully thought out, or just thrown together empirically to see what worked reasonably well with the simplest possible construction. I ended up setting my camera and film at 45 degrees like the PL, although now I have the kit I can see that the angle is not as I thought it was because the slit is actually offset a little. The camera of course has to be set at an angle to the slit because otherwise it would view the direct light from the slit and that would tend to wipe out the exposure. ...

Note - It would be great if the original designers of the PL kit could comment on this. I would really like to know why they chose the angles and arrangement of camera relative to the diffraction grating that they did. As I understand transmissive diffration gratings, if they are placed at right angles to a beam of light they pass some of the light straight through and some is diffracted to either side into to two spectra. The spectra are diffracted at an angle known as the dispersion angle (I guess that is a mean angle of the visible wavelengths probably for green). The dispersion angle for the Edmonds holographic 1000 lpmm film is apparently 36 degrees from the normal. Angling the film from the normal increases the width of dispersion. There are some equations for grating dispersion and It doesn't look too difficult to calculate the angles but I haven't tried that yet. 

The business of focussing the camera is rather confusing. The assembly instructions with the kit don't mention focussing or doing anything to adjust the camera. They don't even say to remove the small sticky protection tab over the lens.
Then there are various bits of contradictory advice hidden away on the web site about focussing. I did see the comment about focussing at the slit distance, qualified by the fact that the cameras supplied with the kit cannot focus at the slit distance for the kit. I haven't tried that with the kit yet but it's a bit annoying if true. I seem to be able to focus the Logitech on the slit in my black box build.... 

Note - see my comment below. The Sanmtch camera will focus perfectly well at the slit distance in the PL kit.

Getting your build light tight and with minimum reflections; can be quite tricky. I noticed I got light leaks through the edges of the lid on the PL kit conduit box. Putting a slight reverse bend in the lid and then being careful tightening the two screws seems to have solved that.
I mean to get around to lining the inside of my black box build with black velvet, since if I use a really strong light source and crank the exposure I can see some of the inner details of the box on the camera output.

Something else I did not realise until I had played around with the spectrometer for a while is that is important to have the right camera settings and Spectral Workbench does not provide any method of setting the camera, or even mention it. After poking around the PL web site again I found some comments about disabling camera auto exposure using a command line. I tried that and got various error messages (I'm running Ubuntu 14.10 and Firefox version 34). Eventually I managed to install the Gtk UVC Video Viewer.

Gtk UVC Video Viewer has a GUI with a number of useful settings. I have found I can launch Gtk UVC and turn off auto white balance, set exposure to manual and adjust the exposure slider to get a spectral image without saturation (judged by eye). I can then close Gtk UVC and the settings will persist while I open Spectral Workbench. This is crucial to getting good results. SW will saturate quite easily on the red, green of blue while the white average remains almost flat line. Maybe there is a way around that. Perhaps it really needs two displays - one for RGB and one for White. The white can then perhaps be scaled to show a useful peak. ....

Note - As one of the comments to my original post pointed out, specific cameras may have different features and for example, it may not be possible to adjust exposure through the Gtk UVC Video Viewer for some cameras. It seems to me this is almost essential to be able to get good captures without clipping. Adjusting the intensity of a light source to avoid clipping is quite tricky. I have not yet tried the camera that comes with the PL kit to see how it responds to the Gtk UVC Video Viewer.

I have had a great deal of trouble with opening a PL account and then logging in to Spectral Workbench. I have to open the Firefox Advanced settings - network tab and clear my web content and user data every single time before logging in to PL. If I don't do that I just get a 499b error when I try to log in to Spectral Workbench. ....

Note - Jeff Warren at PL is working with me on this. It seems at the moment to be a problem with the local cacheing of my Firefox browser.

The other problem I have is with calibration. I can calibrate my plot from a CFL just fine and the wavelength X axis appears. But when I capture data from other light sources and indicate that I want to use my previous CFL data for calibration nothing happens, the X axis remains as uncalibrated. Is this a current bug or is there a user setting I have missed? I have to work around that by exporting CSV files and creating spreadsheets, where I can just copy the wavelength data across from my CFL plot. ...

Note - This was a bug in SW and Jeff has now fixed it. Yeh! Jeff.