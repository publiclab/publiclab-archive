---
title: "DVD Grating vs. Holographic Film"

tagnames: 'spectrometer, grating, holographic, dvd, diffraction'
author: jenjimah
path: /notes/jenjimah/06-12-2019/dvd-grating-vs-holographic-film.md
nid: 19670
uid: 505738
cids: 25002
---

![](https://publiclab.org/public/system/images/photos/000/032/838/original/versus.jpg)

# DVD Grating vs. Holographic Film

by [jenjimah](/profile/jenjimah) | June 12, 2019 08:08

June 12, 2019 08:08 | Tags: [spectrometer](/tag/spectrometer), [grating](/tag/grating), [holographic](/tag/holographic), [dvd](/tag/dvd), [diffraction](/tag/diffraction)

----

This is an extension of the spectrometer building process: [Horticultural Spectrometer Upgrade - Planning](https://publiclab.org/notes/jenjimah/04-07-2019/horticultural-spectroscope-upgrade-planning)

One of the key components of a spectrometer is the diffraction grating. The PublicLab spectrometer comes with a DVDR for the grating, but there is an option to upgrade to a holographic film. But the question was, which one is better?

TL;DR: DVD grating wins!

**Stage 1: Gathering Opinions**

1. Dave Stoft previously mentioned that DVD gratings are probably superior, due to the rigidity and that they will refract over a wider angle, which should lead to better pixel resolution. Holographic films suffer from flimsiness which may lead to warpage, and will refract over a narrower angle due to having less lines/mm. Further interesting points of discussion can be found [here](https://groups.google.com/forum/#!topic/plots-spectrometry/zxkwRR7D4ls)

2. I also inquired to Edmund Optics regarding the suitability of the holographic film for a spectrometer, here is the response:

"While this film may very well be able to get you 1nm resolution, I should note that these are not precision optics in the sense that groove shape and depth aren't controlled, so repeatability may be an issue. And you're correct, the ability of the film to flex slightly could impact the accuracy of the spectrometer. Other than that, transmission will be quite high and they are at an attractive price point for a handmade meter, which may make them worth trying at least."

\3. Amazon reviews of Rainbow Symphony's 1000 lines/mm holographic film were mixed. Some people complained that the film came smudged or fingerprinted, but others said it worked great for exactly this purpose:

![image description](/i/32829.jpg "holorating.JPG")

**Preparation of Materials**

The holographic film was carefully taped onto a firm cardboard, as previously described in:
[Horticultural-spectrometer-assembly-II](https://publiclab.org/notes/jenjimah/06-02-2019/horticultural-spectrometer-assembly-ii?_=1559501232). It is worth noting that this film had an unknown lines/mm, but I assumed it was either 500 or 1000 lines/mm since those are commonly available.

The DVD was prepared according to Mr Bumper's post [Preparing a DVD R to act as a diffraction grating](https://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating). According to the comments, instead of using water or soap, I used isopropyl alcohol to remove the purple dye, which was very effective. I also was extremely careful not to touch the grating side at all with my fingers. Tweezers were used to peel the metal foil off in a spiral motion, the same way you peel an orange in one to keep the peel in one piece, with each peel starting from the center of the DVD and working outwards slowly so the tweezers never touched the surface near the outer edge. You can see the pile of peels in the cover image. Then I cut the DVD using a ruler and a utility knife, by tracing a square I drew on a piece of paper.

![image description](/i/32831.jpg "gratingcutter.jpg")

By aligning the center of a DVD wedge with the extended line, and placing the outermost edge on the side of the square (so the square's side looks like a tangent to the DVD's outer edge), it was relatively easy to cut a nicely aligned square. I sliced it with the grating side down so my ruler wouldn't scratch the grating surface.

![image description](/i/32832.jpg "20190611_232251.jpg")

_Samples of prepared DVD R grating_

As you can see from the picture, one side of each piece retains the curve of the outer edge. This method allows you to easily distinguish which side is is the outer side on the cut pieces for future use. It's important because you want to put the part of the DVD with the largest radius in front of the camera so they are as straight as possible.

**Side by side comparison**

To compare the gratings, I took a series of images. The most telling of these the one below, which has the spectrometer aimed at the open sky, outside. This provides information about the wavelength range as well as spectral sharpness.

![Image of solar spectrum with DVD or holographic gratings](/i/32830.png "DVD_vs_Holo.png")

_A quick test of each grating in my lego spectrometer. The gratings were not fixed in place, and I haven't sealed on the cracks yet hence the light leakage in the background._

Some observations:

 - The spread of the holographic film was narrower; about 70% as wide as
   the DVDR film. 
- The DVDR spectrum was dimmer, and required a greater
   exposure (longer time/higher ISO) to achieve a similar result 
- After compensating for the DVDR spectrum being dimmer, the wavelength range
   transmitted by either grating is similar 
- The absorption lines in the solar spectrum are narrower and clearer in the DVDR grating

**Analysis**

_Why the DVDR has a wider spread?_

After learning about the equation for determining the angle of refraction out of a diffraction grating:

n λ =d sin(θ)

it makes sense why the spectra look the way they do. I simulated the refraction angles in a free ray tracing software called Beam4, assuming a collimated light beam (which is actually a simplification of what is happening; the razor slit does not collimate light, but acts more along the lines of a pinhole camera). As it turns out, the simulation showed that a 1000 lines/mm grating would produce an image about 75% of a 1351 lines/mm grating (representing the DVD), which I think is very good evidence that the holographic film was 1000 lines/mm given that the holographic film spectrum was ~70% as wide as the DVDR's!

![image description][1]

_Beam4 simulation of light refraction for diffraction gratings of 1000 and 1351 lines/mm. Axis units are in mm_

_Why the DVDR spectrum was dimmer?_

With the same amount of photons being spread over a wider angle, it makes sense why I had to expose the image more for the DVDR grating to get a similar result compared to the film. There is simply less light per pixel for any given exposure time. This could be seen as a negative, if you frequently measure dim lights, as it means the exposure times will have to be longer and the measurement process may be slower. However, other factors may be more important.

At first I thought the DVDR was less transmissive in the UV, but though the tests I saw that it was really because the DVDR had to be exposed longer to resolve very dim peaks.

_Why the DVDR spectrum has crisper peaks?_

An extremely important difference is that in the DVD images, the peaks and antipeaks were very crisp and clear. I don't think this is a resolution problem, as the holographic film spectrum still gets about 2 pixels per nanometer. But when I took multiple images and combined them as an HDR, it just became abundantly clear that the holographic film was not giving clear peaks like the DVD grating.

*DVD HDR Spectrum:*
![image description][2]
[https://spectralworkbench.org/spectrums/159927](https://spectralworkbench.org/spectrums/159927)

*Holographic film HDR Spectrum:*
![image description][3]
https://spectralworkbench.org/spectrums/159929

Note: I don't know why spectralworkbench graphs some of my spectra with points, and others with lines. 

I'll make a separate post regarding the HDR process, but the graphs and photos show that the DVDR peaks were clearly thinner and better defined.

*Wavelength Calibration*

I also noticed that during calibration, the holographic film was able to achieve a near perfect match while the DVDR spectrum did not; the longer wavelengths were much farther apart than the shorter wavelengths. However, I believe this can be fixed in software.

**Conclusions**

Overall the DVDR was superior than the holographic film in multiple categories: broader sensor coverage, more clearly defined peaks, and stability leading to an easier installation. One potential drawback is that the DVD's broader coverage is accompanied by a larger exposure requirement, but the pros outweigh the cons. 

It's possibly that the lego setup was just not optimized for the holographic film, and so may not reflect the most optimal performance of a holo grating, but overall that it was significantly easier to get a good result from the DVDR grating.

This study supports Dave's comments regarding the pro's of DVD gratings, and also the comments from Edmund Optics regarding a possible lack of quality control with the holographic film. I think that some people might have had a hard time previously with DVD gratings because they were not prepared in an optimal process. I read at least a few comments regarding people rubbing the gratings with their fingers during the cleaning process - given the miniscule scale of the gratings, this type of preparation could easily damage the gratings and render them ineffective.

Overall, DVD for the win! When I install it, it will be secured firmly in place.




  [1]: /i/32834.jpg "rays_compare.jpg"
  [2]: /i/32835.jpg "DVD_HDR.JPG"
  [3]: /i/32836.jpg "HOLO_HDR.JPG"