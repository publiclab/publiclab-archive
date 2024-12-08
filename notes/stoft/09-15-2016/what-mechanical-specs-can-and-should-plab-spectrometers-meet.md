---
title: What mechanical specs can and should PLab spectrometers meet?
tagnames: spectrometry, question:spectrometry, 1, question:dssk
author: stoft
path: /notes/stoft/09-15-2016/what-mechanical-specs-can-and-should-plab-spectrometers-meet.md
nid: 13451
uid: 54025

---

# What mechanical specs can and should PLab spectrometers meet?

by [stoft](../profile/stoft) September 15, 2016 19:58

September 15, 2016 19:58 | Tags: [spectrometry](../tag/spectrometry), [question:spectrometry](../tag/question:spectrometry), [1](../tag/1), [question:dssk](../tag/question:dssk)

**Abstract**

Mechanical design directly affects stability and, in the case of a spectrometer, stability is mandatory because the fundamental measurements are based on optics and the dimensions related to the wavelength of light.

Designing the materials and details of the platform and housing without first establishing the stress requirements is approaching the problems in reverse. Eg: If the product needs to withstand 25 lbs, then cardboard is not a consideration unless it has many layers. Defining the stresses means 1 - static weight and the direction(s) of force, 2) flexure, 3) vibration (and that coupling from outside to inside optics), 4) non-orthogonal force (eg. corner to corner), 5) assembly force (screw-tightening - i.e. acrylic likes to fracture, polycarbonate less so), etc....... Deciding these limits means defining the expected (and product-specified) environmental conditions.

None of this has to necessarily be elaborate; but you do need to think about and make decisions based on specs you need or want to achieve. Eg: 1) can't easily over-tighten screws and crack the housing, 2) can drop it on the floor from 3 feet and it will survive, still work and not be out of alignment, 3) can put 3 lbs of books in a backpack on top of it, 4) can pull on the unit untill the USB cable comes unplugged and the cable, camera and alignment will not suffer, etc...... There is also room for multiple product "levels" with increasing stability as there is an obvious cost difference between choosing wood vs granite as an optical platform.

**Device Configuration Levels**

So, consider just three (3) levels (mechanical stability only, not spectrometer design) as a start to the challenge:

[Note: The following detailed materials and specs are not a final definition but simply show a means for differentiating between levels. Attempting to include all material options here would be difficult.]

**Level 0:** (unacceptable)
- Cost: Primarily the webcam
- Materials: Paper, tape and velcro
- Stability: Generally unstable, signals not repeatable
- Environmental: Easily twisted, bent, misaligned, crushed, wet

**Level 1:** (minimal specs for education only)
- Cost: Similar to Level 0
- Materials: Wood, glue, tape, paper, (no velcro)
- Stability: Minimal, short-term if left untouched
- Environmental: Resists twisting and misalignment, still crushable, wet

**Level 2:** (minimal ever-day use)
- Cost: Added cost would be custom cut plastics / wood / etc
- Materials: Wood, glue, plastic, hardware, paper(light shield only)
- Stability: Moderate, multi-setup repeatability, vibration damped
- Environmental: Resists handling stress, easily mountable, not easily crushable, USB cable restraint, backpack durable, splash resistant, droppable from 1 foot, crushproof to 3 lbs

**Level 3:** (field usable)
- Cost: Potentially higher material and custom-cut costs
- Materials: Plastics, glues, hardware, some wood/paper
- Stability: Good long-term measurement repeatability, relatively immune to vibration and stress, no permanent alignment shift from induced stress
- Environmental: Rugged enough for field use w/o damage, water resistant, droppable from 3 feet, crush-proof to 10 lbs

These are only example and specific numeric values for any of the mechanical stress factor limits should be set and tied to tests which can be easily performed, again, and again, and again, ....

**A Note on Specs**

Also, it is important to remember that with ANY spec, the limit point of failure MUST EXCEED (be better than) the published spec. [Normally, there are actually several spec levels per specification; 1) component spec (the tightest), 2) assembly build test spec (a little looser spec), 3) final test limit (looser still but better than published) and 4) published spec for the user (guaranteed that ALL units, in the hands of ANY user will perform to the published spec). Eg, Component supports 10 lbs at failure, assembly supports 9 lbs at failure, final device supports 7 lbs at failure, published spec is set at 5 lbs.

**[DRAFT] Level-2 Tests**

Because of the expanding interest in improving stability @warren suggested I propose some methods to observe spectrometer stability which might demonstrate the difference between prototype designs. This is a good idea because, so far, my wood-based prototype provides only one data point and science works best with more data.

1) The simplest reference point is, again, achieved using a CFL as a wavelength-calibrated reference. Assuming two designs are being compared (the original and an upgrade) the reference spectra should be taken using the same criteria.

[Note, there will thus be one specific wavelength-calibrated CFL reference spectra per device which will be used for calibrating the test spectra and for comparison of all tests performed on that device.]

[Note: It is better to control the signal level in the camera by adjusting the distance to the source, rather than attempting to use an attenuator.]

2) All other measurements would also be performed with the same CFL, placed at the same distance to the device to avoid most variations of the source. It might be easiest to have all devices perform each of the same tests at the same time to keep the configurations consistent.

3) The data for each subsequent test is thus a CFL spectra, taken under the same uniform conditions for each device as is reasonably possible. The spectra for each test condition will have the same Reference CFL wavelength calibration (for that device) as described in #1 above.

4) The spectra of interest, for extracting measurement values, is only the "combined" RGB spectra. However, another set of values could also be of interest; measuring the Blue trace for the blue peak, the Green trace for the green peak and the Red trace for the red peak. Having both the raw and calibrated spectra for each test, the data is all there for later analysis.

5) Each acquired spectra (raw and calibrated) should be kept for additional observations as other tests are devised. However, the data of interest, to be extracted from each spectra, might initially be just a few values -- perhaps just extract measurements on 3 peaks: a) peak nm, b) peak intensity (not normalized) and c) FWHM in nm (width of a peak in nm at 50% of peak maximum) and log this data to a spreadsheet as the tests are performed.

6) Mechanical changes can affect several spectral characteristics and separating specific cause and effect is not likely to be obvious or easy. However, some correlations seem likely. a) Twist - can causing misalignment which affects both intensity and peak nm, b) Dropping - could cause a peak nm offset by displacement of camera relative to the slit, c) Cable tug - could affect camera position affecting spectral band position in the image (so intensity) as well as peak nm, etc.

7) Some form of measurement repeatability could be performed as well. Even just performing the same, simple, "ideal" measurement setup several times might show sensitivity to a repeat configuration. Perhaps the same configuration and measurement performed by different users would be useful.

8) A bit more subjective is the observation of the ability to resolve the double-green peak. Clearly some device builds have produced spectra where that peak is singular and rather "wide" but at the other end is the "measure" of the details visible in the green peak. Some quantitative measures could be calculated at a later time; for now, just a simple visual might prove interesting.

**[DRAFT] Some Possible Level-2 Mechanical Tests**

0) **Reference:** Device on bench, weight with small book, adjust only the CFL (position and distance) for best spectra, capture and calibrate wavelength. Use this Ref Cal for all subsequent tests.

1) Hand-Position: Fiddle with the device then set on bench (no weight), align toward CFL, let go and take spectra.

2) **Hand-Held:** Hold in the hand and orient toward CFL, take spectra. Might try this several times and with with several users w/o specific instruction so as to observer user variations.

3) **Twist:** Place on bench, align to CFL, hold camera end, 'twist' slit end of housing, take spectra. Repeat for opposite twist.

4) **Drop:** Drop the device onto the bench, from N-feet, several times and then position on bench, align to CFL, add book weight and take spectra. [ The height of N-Feet is also a survivibility test. One device of each type, which is eligible for destruction, could be dropped (and then measured), from progressively greater height until it fails. ] [This is usually one of the more exciting tests ;-)]

5) **Cable:** Position on table, align, hold camera end, take spectra (as reference for this specific test), pull on cable, re-take spectra as comparison.

6) **Vibration:** Position on table, align to CFL, take spectra as reference for this test, place cell phone (on vibrate) on top of device, get ready to take spectra, call the phone and take the spectra when the phone rings. (Could also just use a mechanical alarm clock or some small mechanical toy....)

7) **Weight:** First test the device approximate load bearing capacity using a stack of similar-weight books -- only up to the number which the device can still easily hold. Then take 3 spectra; eg. 1 book, 5 books, 10 books.

