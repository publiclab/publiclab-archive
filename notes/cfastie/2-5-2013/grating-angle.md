---
title: "Grating angle"

tagnames: 'spectrometer, vermont, diffraction-grating, entrance-slit, ebert, focus, barnstar:empiricism, lego'
author: cfastie
path: /notes/cfastie/2-5-2013/grating-angle.md
nid: 5892
uid: 554
cids: 3339,3340,3344,3346,3347,3352,3353,3354,3356,3357,3367,3387,10436,10440
---

![](https://publiclab.org/sites/default/files/legomanframe.jpg)

# Grating angle

by [cfastie](/profile/cfastie) | February 05, 2013 16:40

February 05, 2013 16:40 | Tags: [spectrometer](/tag/spectrometer), [vermont](/tag/vermont), [diffraction-grating](/tag/diffraction-grating), [entrance-slit](/tag/entrance-slit), [ebert](/tag/ebert), [focus](/tag/focus), [barnstar:empiricism](/tag/barnstar:empiricism), [lego](/tag/lego)

----

<em>Image above: Lab assistant operating the SpectroBench 2000.</em>

<strong>Introduction</strong>

I thought it was going to be easy to build a new version of the Public Lab spectrometer, but some discussion at the PLOTS-spectrometry group and some comments on research notes made me doubt my understanding of how distance between the entrance slit and the grating, or the angle of the grating, affected performance. So I built an optical bench to observe how these things interacted.

<iframe width="540" height="304" src="https://www.youtube.com/embed/TsAuPoEp9RU?rel=0" frameborder="0" allowfullscreen></iframe>

<strong>Methods</strong>

I used 1000 lines/mm grating film for the diffraction grating. The entrance slit was formed from the facing edges of two box cutter blades, and I tested two different slit widths of about 0.15 and 0.25 mm (these slit widths are too narrow for me to measure accurately).  A second trial at about 0.25 mm was made after readjusting the width, so width might have differed between these trials.  I moved the grating along the optical bench in 1-3 cm increments so it was from 14 cm to 45 cm from the entrance slit. At each position I rotated the grating until the image of the spectrum of a compact fluorescent lamp appeared to be sharpest. I measured the angle of the grating (<em>g</em>) with a Starrett machinist's protractor with 1° gradations. I also recorded the angle at which I was looking at the grating (<em>v</em>) to view the sharpest spectrum. This was the angle between a line perpendicular to the slit-grating axis and the line from my eye to the twin mercury lines at 578 and 580 nm. 

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8448290666/" title="spectroPlan2 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8229/8448290666_b5fee584d6.jpg" width="500" height="276" alt="spectroPlan2"></a><p></p>
Schematic for the bench measurements. I varied the distance between the entrance slit and the grating (D) and at each distance measured the angles <em>g</em> and <em>v</em> which revealed the sharpest spectrum. Angle <em>n</em> was calculated as |90-(g+v)|.</div>

<strong>Results</strong>

The angle at which the grating must be positioned for the sharpest spectral image varies between 45° and 66° depending on the distance between the entrance slit and the grating.  The angle at which the grating must be viewed for the sharpest spectrum is not perpendicular to the grating, and varies with distance from the entrance slit.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8445440409/" title="gratingAnglesC by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8509/8445440409_291725f676.jpg" width="500" height="125" alt="gratingAnglesC"></a><p></p>
The grating angle (<em>g</em>) that produces the sharpest spectral image, and the best angle for viewing that image (<em>v</em>), depend on the distance between the entrance slit and the grating (D).  These results are for an entrance slit of 0.15mm.</div>

The relationship between slit-grating distance and grating angle appears to be non-linear. Both grating angle and viewing angle are most sensitive to slit-grating distance at the near (14-20 cm) and far (40-45 cm) ends of the distance range tested.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8445358271/" title="Grating angle and view angle by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8373/8445358271_faa9e915ae.jpg" width="500" height="360" alt="Grating angle and view angle"></a><p></p>
Grating angle (<em>g</em>) and view angle (<em>v</em>) using a slit width of about 0.15 mm. The grating angle for the sharpest spectrum depends on the distance between entrance slit and grating, and is most sensitive to distance at the near and far ends of the range tested.</div>

The two trials with a slit width of about 0.25 mm did not produce highly similar results.  However, the general pattern of the grating angle approaching 45° as slit-grating distance approaches 50 cm was confirmed.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8446768537/" title="gratinganglegraphboth25 by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8476/8446768537_5085a4cd26.jpg" width="500" height="181" alt="gratinganglegraphboth25"></a><p></p>
Replicate trials of angle measurements using a slit width of about 0.25 mm. </div>

Viewing the spectrum so that the mercury lines at 578 and 580 nm are centered in the image requires a view angle that is not perpendicular to the grating. The angle approaches perpendicular as the slit-grating distance approaches 50 cm.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8446445716/" title="degreeNormal by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8494/8446445716_9b34102017.jpg" width="500" height="269" alt="degreeNormal"></a><p></p>
Offset from perpendicular (to the grating) for the viewing angle for trials with two slit widths. This is angle <em>n</em>  in the schematic above.</div>

<strong>Discussion</strong>

<em>Physical explanation for these results</em>.  I am a biologist.  I have no idea how to explain these results.

<em>Implications for spectrometer design</em>.  Grating angle is most sensitive to variations in slit-grating distance for the shortest (14-20 cm) and longest (40-45 cm) distances tested. A medium distance of about 30 cm might make it easier to find a grating angle that produces a sharp spectrum.  This angle is about 50°.

Results for the wider entrance slit (0.25 mm) were less consistent than for the narrower slit. This might be because a narrower slit requires a more precise grating angle, and it was obvious to me when the grating had been rotated to that angle. A wider slit produces a sharp spectrum over a larger range of grating angles, so it is harder to determine the optimum angle. Therefore, building a spectrometer is easier with a wider entrance slit because precise alignment is less critical.  But if the optimum angle for a narrower slit is found, the spectral peaks will be better resolved. 

To view the visible light spectrum when the grating is rotated for maximum sharpness, it is necessary to look at the grating at an angle other than perpendicular to it.  For a slit-grating length of about 30 cm, the best view is about 10° from perpendicular. This suggests that the camera in a spectrometer should be aimed at this angle. However, the typical camera lens has a sufficiently wide angle of view and collects light from a range of incident angles, so this adjustment might not be important.

<strong>Conclusions</strong>

A reasonable design for a spectrometer might have the specifications illustrated below.

<div class="caption center"><a href="https://www.flickr.com/photos/chrisfastie/8447072415/" title="spectroPlanDim by Chris Fastie, on Flickr"><img src="https://farm9.staticflickr.com/8351/8447072415_4d879894f5.jpg" width="500" height="320" alt="spectroPlanDim"></a> <p></p>
Proposed design specifications for spectrometer.</div>