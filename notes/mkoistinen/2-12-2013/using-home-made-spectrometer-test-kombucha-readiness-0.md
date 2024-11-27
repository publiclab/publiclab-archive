---
nid: 5955
title: Using a home-made Spectrometer to test kombucha readiness
path: public/static/notes/mkoistinen/2-12-2013/using-home-made-spectrometer-test-kombucha-readiness-0.md
uid: 50322
tagnames: spectrometer,microbes,desktop-spectrometer,kombucha,kombucha-leather,activity:kombucha-leather,activity:spectrometer
---

# Using a home-made Spectrometer to test kombucha readiness

I discovered the spectralworkshop.org website via the complete PLOTS Kickstarter project.  It seemed like a great project and may possibly help me achieve better kombucha batches by allowing me to test if the fermenting process has run its course to a perfect batch without becoming overly bitter.

I initially created a fold-up spectrometer for my iPhone 4. It worked!  Unfortunately, it wasn't stable enough to really be useful for measuring batches and I had a serious issue with light transmission due to the poor card I had readily available.

I decided to make a larger commitment to this project by purchasing a suitable electrical conduit box, a couple of box-cutter blades and some black duct tape.  I also recycled an unused webcam, an old DVD-R and a toilet paper roll into the project.

The spectrometer works WAY better than the previous fold-up version and is stable enough to produce confidently calibrated spectra over a longer period of time.  (The only downside is the poorer resolution of the webcam vs. the iPhone 4 which has 16X more pixels, and it shows.  There is visible stair-stepping in the new spectrographs.)

<img src="http://f.cl.ly/items/3W162j2T3e0R1v0D472j/Image%202013.02.12%204:39:56%20PM.png" width="100%" alt="Inside of spectrometer." />

I did not have to alter (break/take-apart) the webcam for this project.  It is held in securely with tape.

Anyway, after calibrating the unit with a compact florescent lamp, I was able to take a set of shots including a naked halogen desk lamp, some finished batch of kombucha in a 750ml bottle and an identical bottle of the sweetened tea input into the next batch.

The desk-lamp has a built-in rotating aluminium shield which I used for exposure control.  I adjusted it so that each of the RGB channels were within normal range for the baseline reading.  Using the same light-levels, I then sampled the 750ml bottles of kombucha and sweet tea.

You can see the resulting spectra here:
<img src="http://f.cl.ly/items/05420c0F3W2c0l1t2k2o/Image%202013.02.12%204:57:43%20PM.png" width="100%" alt="Comparison of basline halogen light source, finished kombucha and input sweet tea" />
Or go to: https://spectralworkbench.org/sets/show/127

Now, it is already obvious to the naked eye that the sweet tea is much darker than the final kombucha, but how do you quantify that?  This is where the spectrometer will really help batch control.  It would appear that I should expect the liquid to become clearer in general, but mostly in the areas of green and blue.  The kombucha measured in the spectrograph above is very bitter (almost undrinkably so), so I don't want to target this, but perhaps something approaching that.  It isn't clear to me of the color shifting is a linear process, or perhaps it rapidly shifts close to these levels, then approaches the final state more slowly. Or, maybe something completely different.  We'll see.

To get set up for more regular monitoring, I measured the new batch of kombucha in its fermenting jars (in situ).  This jar is much larger/thicker (5 liters) but I was now able to increase the light levels by rotating the lamp's shield out of the way.  I was pleasantly surprised that the resulting spectrum levels was a very close match to the previously sampled sweet tea in the 750ml bottle.

See here:
<img src="http://f.cl.ly/items/2h140A2p3w2d2l1W1Q0i/Image%202013.02.12%205:10:02%20PM.png" width="100%" alt="Comparison of spectra from sweet tea in 750ml jar with ranged lighting and full lighting with sweet tea in 5L jar. Very similar!" />
or here: https://spectralworkbench.org/sets/show/128

This means that I can now monitor the progress of the batch in situ with periodic spectrographs until it reaches the right color levels.  I shall be doing this over the next 2-3 weeks.

This round of spectra won't be as useful as the next as the new batch of sweet tea was made from lemon tea whereas the finished kombucha was made from jasmine tea.  For the next batch (after this current one), I'll make sure to use lemon tea again for a proper comparison.

<h3>EXPERIMENT CONCLUSION: 02-March-2013</h3>

The batch of Kombucha was deemed done by the standard olfactory test (and it is a really good batch, yum!).  So, I've taken a final reading and I've also taken a new calibration test using the same CFL lamp used at the start of the project.

Here is a set of spectral readings that show the progression of colour change over the course of the experiment:

<img src="http://f.cl.ly/items/0D1f0i3C0n0f1J2A3y2x/Screen%20Shot%202013-03-02%20at%207.40.19%20PM.png" width="100%" alt="Various readings over the course of the Kombucha experiment" />
or here: https://spectralworkbench.org/sets/show?id=171

<strong>GENERAL OBSERVATIONS</strong>

Over the course of the experiment, the overall light transmission of the mixture increased.  This happened very quickly over the first 24-48 hours, then also slowed down.  Also, over the course of the fermentation, the spectrometer readings detected an decrease of absorption in the range 500-575nm.  At first this happened quickly, then began to slow down with no sign of a change of absorption at frequencies below 500nm (as was expected).

Also, as the experiment progressed, The resulting spectral curve appears to become less curved and more noisy.

<strong>CONJECTURE</strong>

Based on visual observation along with the spectrometry data, I believe that either the initial phase of the fermentation involves the breaking down of particulate matter suspended in the mixture, OR, that this particular matter settled out of suspension, allowing the mixture to transmit substantially more light. This appears to have required about 24-48 hours.

Longer term observation and spectrometry reveals an overal shift in the color of the mixture from a reddish/brownish to more of a yellowish/orangish.  It was expected that the mixture would eventually allow the transmission of bluer frequencies (< 500nm), but this never occurred and may indeed be the difference between the initial "reference batch" of kombucha being made with Jasmine plants and this batch being made with Lemon plants.  An alternative explanation would be that if left to ferment well past its optimum flavour, more blue light may have been transmitted.  The previous, reference batch was indeed well past its optimum flavour.

As far as the noisier spectral curve observation, I would like to believe that this is due to the mixture becoming richer in terms of chemical composition.  Or perhaps this is the opposite. conclusion to draw.  Perhaps it should be that the mixture is becoming less rich and there is more of a certain few chemicals allowing their transmissive signatures to appear through the average noise of the original sweet tea mixture.  Or finally, perhaps the wavy spectral curves are a result of debris floating between the camera and the slit.

<strong>ISSUES THAT ENCUMBERED THIS EXPERIMENT</strong>

<strong>DVD-R as a diffraction grating</strong>

The current construction of the spectrometer involves a sector of a DVD-R disk with the foil removed.  This served wonderfully as a starter spectrometer component, but there are limitations it presents, namely: poor light transmissivity and a curved pattern on the substrate which can make capturing the same light-levels for the entire visible spectrum tricky.

<strong>Lack of auto-ranging tools</strong>

Considering the rather large changes in transmissivity of the kombucha mixture over the course of fermentation, it has become very important to make light-level adjustments along the way.  This means that the levels of light are different from one reading to the next.  Therefore, any conclusions drawn from the resulting data must be made with comparisons made relative to light intensity. It would be most helpful of spectralworkbench.org included some form of auto-ranging tool when using the "compare" tool.  Some consideration should be made when implementing such a feature to understand whether it is more beneficial to auto-range against the absolute peak of intensity, or if this ranging should be made against the peak of intensity for any given channel.  I can foresee issues with either approach, so more exploration should be performed in this area.

<strong>Calibration Drift</strong>

When comparing the CFL-lamp source spectra taken before and after the experiment, it is obvious that there was some calibration drift.  It isn't entirely clear what the source of the drift is, but it measures out to about 6nm over 19 days.  Clearly for future experiments that span multiple days, a more reliable means of fixing the calibration is required.

<strong>Chrome/Webkit</strong>

Part-way through the experiment, Chrome no longer would present the "Options" menu for selecting the correct video feed to send to the spectralworkbench.org website.  At this point, photos needed to be taken and submitted.  This is an inferior means of submitting spectral data, because submitting photo after photo is an extremely unpractical means to ensure that all three color channels are within range and not over-exposed.  With the live video feed submissions, the RGB channels can be monitored live to get an optimal reading before taking a submission.  This issue is still unresolved.  It is entirely unclear what this would stop working, to my knowledge, I did not update Chrome during the course of the experiment.  I will likely discontinue submitting data to spectralworkbench.org until this issue can be resolved.

<strong>spectralworkbench.org</strong>

For two days part-way through the experiment, spectralworkbench.org no longer accepted photo uploads from me of any sort.  Upon returning to the site on the 3rd day, it appears that these submissions were present, even though during submission, an error screen was presented to the user (me).  This issue appears to be resolved.

<strong>NEXT STEPS</strong>

At this point, I will forgo new readings on the new current batch of kombucha. This will buy me 2-3 weeks to prepare for the next experiment where, hopefully, I can address a number of the shortcomings that prevented me from getting the results I wanted from the first experiment.  In no particular order, here's the changes I intend to make:

<strong>Proper diffraction grating</strong>

I have ordered and should receive soon a 1000 lines/mm sheet of diffraction grating.  This will replace the DVD-R-sourced, and rather curved diffraction grating in use now.  I doubt it will be received for the current, new batch of kombucha, so I will plan to have the new equipment in place for the next batch (in about 3 weeks from this writing).

<strong>Tighter construction of the spectrometer</strong>

Once the new diffraction grating arrives, I will reconstruct and re-calibrate the spectrometer components.  I intend to use more tape within the device to lock down the camera better currently, it remains fixed on one spot via its own friction-locked ball- and other joints.  I also plan to leave the device to settle for several days before employing it.  I think this will help a lot maintain the same calibration over 2 or more weeks.

I also intend to reduce the width of the narrow slit.  This should compensate for the extra transmissivity of the new diffraction grating as well as reduce the amount of baffling required to get the light levels correct.  As a nice side effect, I should get sharper spectral readings.

This may help to identify specific chemical spectral signatures to put to rest the mystery around the wavier spectral curves towards the end of the fermenting cycle.

<strong>Mid-experiment re-calibrations</strong>

I would like to find a way to perform CFL-based recalibration during the experiment.  Currently, in an effort to avoid touching the spectrometer or disturbing the kombucha, I did not attempt to do this. Perhaps with a more fixed-calibration spectrometer, moving the spectrometer to take mid-experiment calibration readings will be less of an issue.

<strong>Correct the Chrome video-source issue</strong>

This has to be a priority.  Since I use Chrome in my daily routine and work, I suspect that I should instead fine another browser that will provide the required functionality and use it only for future experiments since I obviously broke something in Chrome along the way.

<strong>Store all source data</strong>

Even when I am able to successfully use live video feeds into spectralworkbench.org, I will also take a photo from the video stream as a permanent record of the reading.  This should serve me well in the event of that my web browser prevents me from continuing the experiment with the same type of data (live feed).