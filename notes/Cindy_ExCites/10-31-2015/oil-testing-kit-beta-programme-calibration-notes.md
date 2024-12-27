---
title: "Oil testing kit Beta programme - Calibration notes"

tagnames: 'spectrometer, calibration, fluorescence, spectrometer-calibration, oil-testing-kit, oil-testing-kit-beta, response:12348, oil-testing-kit-beta-calibration, replication:13410'
author: cindy_excites
path: /notes/Cindy_ExCites/10-31-2015/oil-testing-kit-beta-programme-calibration-notes.md
nid: 12349
uid: 1083
cids: 12805,12806,12856,12857,13072,13082
---

![](https://publiclab.org/public/system/images/photos/000/012/288/original/Spectral_workbench_calibration_success.png)

# Oil testing kit Beta programme - Calibration notes

by [cindy_excites](/profile/cindy_excites) | October 31, 2015 22:15

October 31, 2015 22:15 | Tags: [spectrometer](/tag/spectrometer), [calibration](/tag/calibration), [fluorescence](/tag/fluorescence), [spectrometer-calibration](/tag/spectrometer-calibration), [oil-testing-kit](/tag/oil-testing-kit), [oil-testing-kit-beta](/tag/oil-testing-kit-beta), [response:12348](/tag/response:12348), [oil-testing-kit-beta-calibration](/tag/oil-testing-kit-beta-calibration), [replication:13410](/tag/replication:13410)

----

###[Oil testing kit Beta programme](http://publiclab.org/notes/ygzstc/07-14-2015/oil-testing-kit-beta-program) - Calibration notes


Contributors: @TedF and @cindy_excites

Date: 31/Oct/2015

Here we document our experience using [Spectral workbench](https://spectralworkbench.org/) to calibrate the [Public Lab Spectrometer 3.0](http://publiclab.org/wiki/desktop-spectrometry-kit-3-0), which we assembled using [the instructions](http://publiclab.org/wiki/desktop-spectrometry-kit-3-0) provided there. We also put forth a few humble suggestions, including a "for dummies" outline of our steps.

**1) Aligning the 'spectrum'**
When first trying to capture spectra, we noticed the line was not straight. We opened the spectrometer's black cardboard frame to tweak the DVD fragment and improved the angle:

[![Crooked_spectra.png](https://i.publiclab.org/system/images/photos/000/012/266/medium/Crooked_spectra.png)](https://i.publiclab.org/system/images/photos/000/012/266/original/Crooked_spectra.png)

Still not satisfied with the angle of the refracted line, we reopened the spectrometer to adjust the angle of the DVD fragment:

[![Aligned_spectra.png](https://i.publiclab.org/system/images/photos/000/012/267/medium/Aligned_spectra.png)](https://i.publiclab.org/system/images/photos/000/012/267/original/Aligned_spectra.png)

 This is what it looks like on the inside:

[![IMG_4125.JPG](https://i.publiclab.org/system/images/photos/000/012/268/medium/IMG_4125.JPG)](https://i.publiclab.org/system/images/photos/000/012/268/original/IMG_4125.JPG)

(I admit that since I did not understand why the DVD fragment didn't have to cover the whole of the 'mid hole' of the '[diffraction grating angle](https://i.publiclab.org/system/images/photos/000/008/916/original/IMG_20150210_145742-ed-labeled2.png)' I covered the whole thing. Maybe it will come back and nip us in the butt! However, I did this because as you will read below, I had qualms about the DVD fragment's quality due to unsatisfactory separation. If the quality of the DVD fragment turns out to be problematic, I'll try @ethanbass's recommendation with [MrBumper's method](http://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating)).

Success! We used the lamp from a phone - shining it directly into the slit - to check this.
At first I thought this misalignment was due to the DVD not having been peeled/separated properly:

[![IMG_4122.JPG](https://i.publiclab.org/system/images/photos/000/012/269/medium/IMG_4122.JPG)](https://i.publiclab.org/system/images/photos/000/012/269/original/IMG_4122.JPG)

Does it matter if it still refracts the light? What is good enough for a DVD fragment?
Here is our piece of DVD:

[![IMG_4120.JPG](https://i.publiclab.org/system/images/photos/000/012/270/medium/IMG_4120.JPG)](https://i.publiclab.org/system/images/photos/000/012/270/original/IMG_4120.JPG)

**2) Working with Spectral workbench…**

[![Spectral_workbench_calibration_success.png](https://i.publiclab.org/system/images/photos/000/012/271/medium/Spectral_workbench_calibration_success.png)](https://i.publiclab.org/system/images/photos/000/012/271/original/Spectral_workbench_calibration_success.png)

**_a) What is that little red lightbulb telling me??_**

[![Spectral_workbench_-_red_lightbulb_crp.jpg](https://i.publiclab.org/system/images/photos/000/012/272/medium/Spectral_workbench_-_red_lightbulb_crp.jpg)](https://i.publiclab.org/system/images/photos/000/012/272/original/Spectral_workbench_-_red_lightbulb_crp.jpg)

When trying to capture the light of a CFL lightbulb, we noticed that that the 'Detected fluorescent light' bulb symbol turned red. We searched the website for guidance on this but couldn't immediately find anything…). We assumed that it meant that fluorescent light had been detected… although it did not always turn red when capturing our diffused light… Does it warn for overexposure instead…? 

The [youtube video on calibration](https://www.youtube.com/watch?v=iVirJ4By0MI) on the '[Spectral workbench usage' page](http://publiclab.org/wiki/spectral-workbench-usage) is very easy to follow even though it features the previous version of Spectral workbench. However, I'm wondering if for the absolute beginner, it might be useful to have visual guide: a screenshot of the new Spectral workbench interface with little arrows pointing to what the different buttons do.

**_b)  Figuring out how/when to capture spectra…_**

It took us a little while to get acquainted with the site; we did not really know what exact steps to follow and without background knowledge or points of reference. However, in the end we made it and decided to create a "Calibration for dummies" version of our steps. Might be useful for the absolute beginner :O

i) We arrive at [Spectral workbench](spectralworkbench.org/) using the Firefox browser (seems to work better than Chrome). We share our camera labelled "USB 2.0 Camera" as opposed to the integrated camera:

[![Spectral_workbench_-_camera_sharing_menu.png](https://i.publiclab.org/system/images/photos/000/012/273/medium/Spectral_workbench_-_camera_sharing_menu.png)](https://i.publiclab.org/system/images/photos/000/012/273/original/Spectral_workbench_-_camera_sharing_menu.png)

[![Spectral_workbench_-_camera_sharing.png](https://i.publiclab.org/system/images/photos/000/012/274/medium/Spectral_workbench_-_camera_sharing.png)](https://i.publiclab.org/system/images/photos/000/012/274/original/Spectral_workbench_-_camera_sharing.png)

ii) We shine light from a CFL bulb at the spectrometer's slit. We see the live image on the top left and the video row on the centre screen. We click "Begin capturing"

iii) With a steady 'flow' of light into the spectrometer, we get continuous rows of colour bands on the central spectral field. When happy with the output of this, we click the blue "Save" button on the left:

[![Spectral_workbench_-_successful_spectral_capture_using_plastic_bag.png](https://i.publiclab.org/system/images/photos/000/012/275/medium/Spectral_workbench_-_successful_spectral_capture_using_plastic_bag.png)](https://i.publiclab.org/system/images/photos/000/012/275/original/Spectral_workbench_-_successful_spectral_capture_using_plastic_bag.png)

We receive message "Spectrum was successfully created". Yey!

_NOTE:_ Our original capture returned an error message "You must be logged in". We repeated the procedure and we received an error message warning that our spectrum is overexposed. We click the link to "how to fix this" [ http://publiclab.org/wiki/spectral-workbench-usage#Overexposure ]. We opt for using a diffuser - a plastic bag (a clear one, not a milky one):

[![IMG_4127.JPG](https://i.publiclab.org/system/images/photos/000/012/276/medium/IMG_4127.JPG)](https://i.publiclab.org/system/images/photos/000/012/276/original/IMG_4127.JPG)

iv) We then proceed to calibrate by clicking the blue "Calibrate" button on the bottom left.

**_c) Calibration procedure_**

_Step 1:_
A pop-up appears instructing us to select the middle blue band of our spectrum; we click "Begin":

[![Calibration_procedure_1of5.png](https://i.publiclab.org/system/images/photos/000/012/277/medium/Calibration_procedure_1of5.png)](https://i.publiclab.org/system/images/photos/000/012/277/original/Calibration_procedure_1of5.png)

_Step 2:_
We move the cursor and place it on the peak of the curve for the middle blue band as instructed:

[![Calibration_procedure_2of5.png](https://i.publiclab.org/system/images/photos/000/012/278/medium/Calibration_procedure_2of5.png)](https://i.publiclab.org/system/images/photos/000/012/278/original/Calibration_procedure_2of5.png)

_Step 3:_
Once selected, a next pop-up appears instructing us to select the green band. We click "Finish":

[![Calibration_procedure_3of5.png](https://i.publiclab.org/system/images/photos/000/012/279/medium/Calibration_procedure_3of5.png)](https://i.publiclab.org/system/images/photos/000/012/279/original/Calibration_procedure_3of5.png)

_Step 4:_
We move the cursor and place it on the peak of the curve for the green band as instructed.

_NOTE:_ The second pop-up confused us at first: we were not ready to "finish" as we had not selected our green band. This prompted us to click outside the box only to realise that we'd lost the calibration. In terms of usability, it might be best to have the blue button say "Next" and then a third pop-up saying "Finish", which then leads to the appearance of the "Great! Calibrated" message at the top of the page:

[![Calibration_procedure_4of5.png](https://i.publiclab.org/system/images/photos/000/012/280/medium/Calibration_procedure_4of5.png)](https://i.publiclab.org/system/images/photos/000/012/280/original/Calibration_procedure_4of5.png)

[![Calibration_procedure_5of5_great_calibrated.png](https://i.publiclab.org/system/images/photos/000/012/281/medium/Calibration_procedure_5of5_great_calibrated.png)](https://i.publiclab.org/system/images/photos/000/012/281/original/Calibration_procedure_5of5_great_calibrated.png)

_Step 5:_ optional
Out of curiosity we clicked on the "Find similar" button - fifth to the right of the "Calibrate" button and got this:

[![Calibration_procedure_-_closest_match.png](https://i.publiclab.org/system/images/photos/000/012/282/medium/Calibration_procedure_-_closest_match.png)](https://i.publiclab.org/system/images/photos/000/012/282/original/Calibration_procedure_-_closest_match.png)

We also clicked on "Compare" - fourth to the right of the "Calibrate" button:

[![Calibration_procedure_-_compare.png](https://i.publiclab.org/system/images/photos/000/012/283/medium/Calibration_procedure_-_compare.png)](https://i.publiclab.org/system/images/photos/000/012/283/original/Calibration_procedure_-_compare.png)

[![Calibration_procedure_-_compare_output.png](https://i.publiclab.org/system/images/photos/000/012/284/medium/Calibration_procedure_-_compare_output.png)](https://i.publiclab.org/system/images/photos/000/012/284/original/Calibration_procedure_-_compare_output.png)

**_d) Next steps_**

Now (we suppose) we can select our best calibration capture when testing spectra from our [cuvette](http://publiclab.org/notes/Cindy_ExCites/10-07-2015/oil-testing-kit-beta-programme-assembly-cuvette-frame):

[![Calibration_-_next_steps_1.png](https://i.publiclab.org/system/images/photos/000/012/285/medium/Calibration_-_next_steps_1.png)](https://i.publiclab.org/system/images/photos/000/012/285/original/Calibration_-_next_steps_1.png)

[![Calibration_-_next_steps_2.png](https://i.publiclab.org/system/images/photos/000/012/286/medium/Calibration_-_next_steps_2.png)](https://i.publiclab.org/system/images/photos/000/012/286/original/Calibration_-_next_steps_2.png)

[![Calibration_-_next_steps_3.png](https://i.publiclab.org/system/images/photos/000/012/287/medium/Calibration_-_next_steps_3.png)](https://i.publiclab.org/system/images/photos/000/012/287/original/Calibration_-_next_steps_3.png)


**Other research notes in this series:**

[Oil testing kit Beta programme - Package content](http://publiclab.org/notes/Cindy_ExCites/10-07-2015/oil-testing-kit-beta-programme-package-content)

[Oil testing kit Beta programme - Assembly: cuvette frame](http://publiclab.org/notes/Cindy_ExCites/10-07-2015/oil-testing-kit-beta-programme-assembly-cuvette-frame)

[Oil testing kit Beta programme - Assembly: spectrometer](http://publiclab.org/notes/Cindy_ExCites/10-31-2015/oil-testing-kit-beta-programme-assembly-spectrometer)
