---
nid: 11005
title: Recap: July 31 New Orleans oil testing meetup
path: public/static/notes/stevie/08-01-2014/recap-july-31-new-orleans-oil-testing-meetup.md
uid: 422561
tagnames: gulf-coast,spectrometer,calibration,workshop,fluorescence,event,oil-response-toolkit,crude,workshops,tarball,oil-testing-kit,exposure,with:warren,with:mathew,propeller,w,propellergulf-coast,with:mathe,replication:11046
---

# Recap: July 31 New Orleans oil testing meetup

Last night we held a meetup (organized by Stevie) to work on the emerging [Oil Testing Kit](/wiki/oil-testing-kit) with folks from the New Orleans area. Our main goals were to start connecting with local contributors and collaborators, and to prototype and improve the Kit itself -- especially the sampling methods. 

[![IMG_20140731_182826.jpg](https://i.publiclab.org/system/images/photos/000/005/797/medium/IMG_20140731_182826.jpg)](https://i.publiclab.org/system/images/photos/000/005/797/original/IMG_20140731_182826.jpg)

Mathew ( @mathew ), Jeff ( @warren ) and Stevie ( @stevie ) set up four different tables based around the **Construct, Collect, Scan, & Compare** stages of the testing procedure, which helped to situate the workshop activities in the overall oil testing process. People could build and improve spectrometers, prepare samples, scan them in pre-built spectrometers, and compare the results at the four corresponding tables. 

[![IMG_20140731_203252.jpg](https://i.publiclab.org/system/images/photos/000/005/781/medium/IMG_20140731_203252.jpg)](https://i.publiclab.org/system/images/photos/000/005/781/original/IMG_20140731_203252.jpg)[![IMG_20140731_203236.jpg](https://i.publiclab.org/system/images/photos/000/005/782/medium/IMG_20140731_203236.jpg)](https://i.publiclab.org/system/images/photos/000/005/782/original/IMG_20140731_203236.jpg)[![IMG_20140731_203226.jpg](https://i.publiclab.org/system/images/photos/000/005/784/medium/IMG_20140731_203226.jpg)](https://i.publiclab.org/system/images/photos/000/005/784/original/IMG_20140731_203226.jpg)

We also posted sheets with these four labels, inviting people to contribute to the research process by asking questions, listing problems, and making suggestions -- which helped to situate the activities in the overall research arc in the Public Lab community.  Participants took the invitation-- we recieved good feedback and did not prompt participants to take notes and modify the instructions and procedures we presented.

[![IMG_20140731_191430.jpg](https://i.publiclab.org/system/images/photos/000/005/798/medium/IMG_20140731_191430.jpg)](https://i.publiclab.org/system/images/photos/000/005/798/original/IMG_20140731_191430.jpg)


###Takeaways:

Both the "4 steps" approach to activities and the suggestion posters were a big success -- the event was informal, but still structured, and people asked important questions like "does weathering affect the spectra of oil samples?" and "why is it important to calibrate the spectra on spectral workbench?"

We had an idea for how to do this even better -- to print out "paper research notes" with a line for people to write their name or PublicLab.org username (for credit) so that the workshop itself is kind of like a real-life version of contributing to PublicLab.org. (it could include a Creative Commons notice at the bottom, too!)

Jeff ( @warren ) did a quick sketch of what this "Paper Research Note" could look like:

[![IMG_20140801_145750_2.jpg](https://i.publiclab.org/system/images/photos/000/005/799/medium/IMG_20140801_145750_2.jpg)](https://i.publiclab.org/system/images/photos/000/005/799/original/IMG_20140801_145750_2.jpg)

The process-based table layout was also great, and laying it out as a kind of timeline for the testing process itself really helped people understand where each step fit into the larger process.

###Research questions:

**Brightness**

We struggled a great deal with getting enough fluorescent light from the sample to register on the webcams, although they seemed bright to the naked eye. We tried moving the laser up and down, left and right, but only ever got low (~10%) brightness... not really enough to work with and below the hoped-for 25%: https://spectralworkbench.org/analyze/spectrum/31699

Finally, we used a [smartphone spectrometer](/wiki/smartphone-spectrometer) which was **much** more sensitive (https://spectralworkbench.org/analyze/spectrum/31708), but didn't have a live interface like the webcam-based versoin. Going back to the Desktop Spectrometer, we added reflective material around the sample bottle which helped amplify the brightness, but was still not very satisfactory. It seems like we need to think about sourcing a more sensitive camera for the kit, perhaps?


[![tmp_19144-IMG_20140801_165626-583698273.jpg](https://i.publiclab.org/system/images/photos/000/005/807/medium/tmp_19144-IMG_20140801_165626-583698273.jpg)](https://i.publiclab.org/system/images/photos/000/005/807/original/tmp_19144-IMG_20140801_165626-583698273.jpg)



**Testing bought oil samples**

One goal was to test some of [the crude oil samples we'd bought online](/notes/warren/05-03-2013/crude-oil-samples-for-purchase-online), for comparison. We used the new sampling bottles with a built-in brush (see below). Surprisingly, only a fraction of a drop was enough to get strong fluorescence, easily visible to the eye. But the brightness issues discussed above stopped us from getting clear spectra of them except with the smartphone spectrometer. We'll try to calibrate those and share them soon.

**Swabbing tarballs directly**

We had tried to test an idea to simplify the sample preparation process (and some new empty nail polish bottles we'd found) by cutting out the "soaking" step and just directly swabbing suspected samples with a mineral oil-covered brush. But with the tarball sample we had, we had difficult getting enough of the sample in the bottle just by dissolving it and rubbing the brush on it. It seems like a "soaking in oil" step to make a kind of dark slurry may be neccessary with some samples, so we can't always ditch the extra step. Too bad -- the tests in Portland weeks ago had suggested otherwise.

[![IMG_20140731_183705.jpg](https://i.publiclab.org/system/images/photos/000/005/791/medium/IMG_20140731_183705.jpg)](https://i.publiclab.org/system/images/photos/000/005/791/original/IMG_20140731_183705.jpg)


**New sample bottles**

We had purchused several types of new sample bottles, one that was a nail polish bottle with a brush included, one that was smaller with a cap and the origional bottles which are no longer being sold. We found that, although the nail polish bottles make taking samples easier with the brush included, there was a question that arose of whether the brush itself was fluorescing. Also, the bottle walls were slightly curved and we wondered if that scattered the laser too much. Suprisingly, we also found that when these beveled bottles were angled towards their side, the spectra sometimes came through more clearly. Perhaps the laser light that escapes from the bottle edges is directed away from the camera?

###Issues lists:

We collected a great deal of comments, ideas, suggestions and issues:

* adding a reflective liner (from a sun chips bag!)
* a variety of suggestions for clarifying the instructions on the Desktop and Foldable spectrometer kits -- we'll post them as a followup note!
* we've collected and will address various calibration issues on Spectral Workbench: https://github.com/publiclab/spectral-workbench/issues/6
* the brushes in the nail polish bottles are gummed, so they should be thoroughly rinsed before use
* we put drops of the purchased crude samples, and chunks of the tarballs, on note paper before swabbing them, in order not to put mineral oil back into the sample bottles. This created some gross waste material.
* we discussed using ethanol, methanol, or other solvents instead of mineral oil but did not test this out
* there was a question that some of the specs might have had slits that were too narrow
