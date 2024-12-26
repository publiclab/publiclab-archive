---
title: "oil-testing-workshop-calibration-and-scanning"\ntagnames: 'workshop, oil-testing-kit, parent:oil-testing-workshops'
author: liz
path: /wiki/oil-testing-workshop-calibration-and-scanning.md
nid: 12671
uid: 7

---

# oil-testing-workshop-calibration-and-scanning

by [warren](../profile/warren), [liz](../profile/liz)

February 08, 2016 19:25 | Tags: [workshop](../tag/workshop), [oil-testing-kit](../tag/oil-testing-kit), [parent:oil-testing-workshops](../tag/parent:oil-testing-workshops)

----

_Drafted in January 2016 by Gretchen Gehrke, Stevie Lewis, Liz Barry._

**Why (The Situation):** We want to calibrate the spectrometers we built. We want to prepare our oil samples for scanning. We want to learn how to use spectralworkbench.org. We want to scan known samples of oil to test the function of the equipment itself. We want to scan unknown samples and assemble their spectra into sets for comparing and contrasting with known samples to attempt categorization. 

**When:** two and a half (2.5) hour workshop, part of a four-part series. 

**Where:** a room with long tables, chairs, power outlets, and internet connection. 

**What (the content):** calibrate a spectrometer using a fluorescent lightbulb; safely work with ultraviolet (UV) lasers; the features of spectralworkbench.org; troubleshoot your equipment to get a clear high-quality scan; 

**For What (Achievement Based Objectives):**
 
In completing this four hour workshop, you will: 

* Meet others attending the workshop 
* Share with each other what motivated you to to participate
* Connect your spectrometer to the computer using the webcam’s cord & USB plug
* Login to spectralworkbench.org
* Look at a flourescent light bulb through the spectrometer
* Use spectralworkbench.org’s interface to set the calibration of the spectrometer
* Squeeze eyedroppers to put oil samples into cuvettes (small tubes with square sides)
* Shine a blue laser through a small container of oil, and capture the spectra the oil emits with your spectrometer and spectralworkbench.org
* Assign your calibration to your scan of oil
* “Read the rainbow” AKA the spectrum of fluorescence produced by oil 
* Gain necessary information for use in the 4th and final workshop in this series

****

###Notes for Facilitators:

<div class="alert alert-info"><b>Facilitator’s notes for before the event:</b> You must have already prepared your samples: https://publiclab.org/wiki/oil-testing-kit#Collect.</div>

**Materials Needed:**

* a large clean space for people to work (long tables work well)
* one computer per person or team constructing the spectrometer 
* internet connection (preferably with google chrome)
* a power source that can support all your computers
* newspaper to cover the tables 
* 3 poster boards
* markers and pens
* sticky notes
* paper research notes (insert link)
* a plugged in compact fluorescent light bulb 
* the Public Lab Spectrometer 3.0 that was constructed in workshop 2
* the oil testing kit add on (if you do not have the add-on kit, including:
  * a 405nm blue/violet laser pen: $3 from Alibaba, or for purchasing singles here 
  * cuvettes (1-2 per sample)
  * droppers (1 per sample)
  * protective eye gear
  * gloves
* known samples such as specific oil samples, for example 80W90 and 20W50 (these also come with the kit)
* unknown sample (such as runoff water from the road, black tar like substances found on the beach etc.)

**Setting up the event:**

* Line your tables with newspaper
* Two of the poster boards should be prepared with the words “Notes” “Questions” “Ideas” evenly spaced down the left hand side. Each poster boards will also carry one of the titles: “Calibration” and “Scanning.” Put these on the wall. Leave the third poster board blank and hang it on the wall as well.
* Set up computer stations for each working group along with the spectrometers they built in workshop 2. Provide each group with the oil testing kit add-on or materials in it. 
* Put pens, markers, paper research notes and sticky notes around for people to use to take notes. 

****

##Workshop Schedule:

1. Introduction (10 minutes)
    1. Who’s in the room
    2. Introduction to the event
2. Calibrating your spectrometer (20 minutes)
    1. Log into spectralworkbench.org
    2. Connect your spectrometer to your computer
    3. Scan your first fluorescent bulb
    4. Reflect on the calibration process
3. Sampling (1 hour 30 minutes)
    1. Setting up for safe scanning!
    2. Scanning samples 
    3. Creating sets
4. Wrap up (10 minutes)

****

##Workshop Outline

###1. Introduction 

####1.1 Who’s in the room? (10 minutes)

Go around the room, with each person introducing themselves with their name, where they’re from, and the reason they are interested in being here today. If there are really a lot of people, then as a large group say names only, and then break into smaller groups at tables to share reasons, hopes, and expectations for attending.

<div class="alert alert-info"><b>Facilitator’s heads-up:</b> If you did Workshop 2, this is the same activity, feel free to modify it, but be sure to remind people about the tools and feedback to Public Lab.</div>

1. If you have not done so yet, introduce yourself: 
    1. why you are interested in this project and 
    2. a little bit about Public Lab. 
2. Give an overview of the event goals and structure (at the top of this page)
3. Emphasize _“the tools, technology and learning that happens here is always under development. One of the major outcomes of the event is to provide constructive feedback on the learning, the activities and the tool we will build in order to improve it for future participants.”_
4. Introduce the things in the room: 
    1. Highlight the posters, markers and sticky pads available for people to put up their questions, comments, and ideas on as they work through the event.
    2. Identify the paper research notes for those who would like to take in depth notes on their steps for sharing back with the Public Lab community.

****

###2. Calibrating your spectrometer

**Quick overview:** Calibration turns a device for looking at rainbows into an instrument that can measure the wavelength of spectral data. We calibrate our spectrometer by looking through it at a common light source with well-known peaks -- a fluorescent bulb. Once we save this image, we can use the [SpectralWorkbench.org](https://spectralworkbench.org) interface to match-up two of our peaks with the corresponding two peaks in the reference spectrum. Picking these two points of correspondence scales the X-axis of our image and adds units to our graph. This is the wavelength calibration process. When using a calibrated spectrometer, we can know the true location (measured in nanometers) of the peaks and troughs of future scans we make. 

**Two important notes:**

1. We are not calibrating the intensity of the light on the Y-axis, although that is the goal of [ongoing work](/tag/gain-calibration) as of February 2016.
2. Whenever the physical relationship of the pieces of your spectrometer changes (if anything is bent or moved, such as the camera, the DVD, or the slit), then you must recalibrate. 


####2.1 Log into Spectral Workbench

* Ask your group if there’s anyone with a publiclab.org username. 
* If no one has one, choose someone to create one for themselves at https://publiclab.org/signup 
* Go to https://spectralworkbench.org and log in. You will be directed through the PublicLab.org site; just keep clicking through until you are back to Spectral Workbench and your username shows up in the upper right-hand corner. 

####2.2 Connect your spectrometer to your computer via Spectral Workbench

FACTS: each spectrometer has to be calibrated before it is used. 

Choose one person at the table to read the following text out loud: 

> Calibration helps us to make sure the readings of an instrument are consistent. For example, if this were a scale, we would want to make sure that when it read that something weighed two pounds, the item you were weighing was really two pounds. Because we know certain colors always show up at the same place on the nanometer scale (recall from [Workshop 2](/wiki/oil-testing-workshop-build-a-spectrometer)), the way we calibrate a spectrometer is by using a known type of light as a reference. In this case, we use a compact fluorescent light, where there is a clear green light peak at 546 nanometers. By shining the compact fluorescent light into our spectrometer, and graphing the color peaks on Spectral Workbench, we can measure our future samples against that known calibration of the compact fluorescent light. In this way, we know our future scans will be accurate. 

Individually, write down any questions you have about these concepts and discuss as a group. Going through the activity may help clarify, and afterwards if you still have questions, you can email _plots-spectrometry@googlegroups.com_.

****

Follow the following 4 steps to connect your spectrometer to your computer: 

1. Plug the cord into a USB port on your computer 
2. In an internet browser (we strongly recommend Chrome for reasons that will later become clear), navigate to https://spectralworkbench.org (make sure you’re logged in! See **2.1**)
3. On https://spectralworkbench.org, click “Capture Spectra”. 
4. Make sure it is working:
    1. If you see black or just a light line of color, you will know you are using the correct camera (i.e. not the built-in one on your computer) and you are ready to proceed.
    2. If you see yourself, you need to switch the input camera by using the button on the right under the picture that says “change camera.”
    3. If you still see yourself, use Chrome’s address bar to “allow” or “enable” the camera on your spectrometer from the browser’s address bar. Once you are seeing the rainbow image from your spectrometer on Spectral Workbench, you are ready to proceed. 


####2.3 Scan your first fluorescent bulb

Follow the following 4 steps to take your first scan of a fluorescent light bulb: 


1. Hold the front end of the spectrometer (where the slit is) towards the lit compact fluorescent light bulb. Make sure the color line that appears on your image appears straight, as in the example from the calibration page on Spectral Workbench.
    1. **Troubleshooting information:** if the colors are really not straight, you can open up your spectrometer and try to move the angle of the DVD slightly.
2. Once your color line is straight, click the middle of it to position the yellow line directly through it, as in the example.
3. Click the button “begin capture”, and once you do so, you (and perhaps a partner) will need to hold the spectrometer steady.
4. Once you click “begin capture”, you will see a new page where the “live feed” of your spectra is coming through. You may have to work to re-align your equipment to see a clear spectra of all the colors -- then, click the blue “save” on the left of the screen.
5. This will open a new page where you will see your calibration and can fill in some information about it. Title the spectra “CFL Calibration” and click the button “save and calibrate later.”
6. On the new page, click the blue “calibrate” button below your sample. This will walk you through matching your sample (the above bar) to the example scan (the below bar) so the colors line up.
7. Leave these pages open in your browser.

Additional calibration directions can be found on this wiki page: http://publiclab.org/wiki/spectral-workbench-calibration 

####2.4 Reflect on the calibration process

Once you have finished calibrating your spectrometers, take five minutes and brainstorm notes, questions, and ideas on the calibration process. Post these up on the poster board. These will be reviewed and compiled at the end of the workshop and posted back to Public Lab. If you still have questions, you can email plots-spectrometry@googlegroups.com.

****
**------ (10 minute break) ------**
****

###3. Sampling 

####3.1 Setting up for safe scanning! (90 minutes)

YOU MUST REVIEW AND FOLLOW THESE SAFETY GUIDES (10 minutes)

* Do not turn on the laser unless it is in your testing frame and be sure to never look directly at the light. Even looking at the beam indirectly can be damaging to your eye.
* Always wear your safety glasses when working with oil samples, suspected oil samples and the laser. 
* The materials that come in the beta kit are hazardous and should only be handled with gloves in a well ventilated area. Here are the Material Safety Data Sheet (MSDS) for each oil type included in the Oil Testing Kit: [MSDS_5W30_motor_oil_Hess.pdf](https://i.publiclab.org/system/images/photos/000/010/860/original/MSDS_5W30_motor_oil_Hess.pdf), [MSDS_20W50_Gulfpride.pdf](https://i.publiclab.org/system/images/photos/000/010/861/original/MSDS_20W50_Gulfpride.pdf), [MSDS_crude_oil_sweet_Hess.pdf](https://i.publiclab.org/system/images/photos/000/010/863/original/MSDS_crude_oil_sweet_Hess.pdf), [MSDS_80W90_Lucas.pdf](https://i.publiclab.org/system/images/photos/000/010/862/original/MSDS_80W90_Lucas.pdf), [MSDS_Diesel_fuels_Hess.pdf](https://i.publiclab.org/system/images/photos/000/010/864/original/MSDS_Diesel_fuels_Hess.pdf), [MSDS_gasoline_Hess.pdf](https://i.publiclab.org/system/images/photos/000/010/865/original/MSDS_gasoline_Hess.pdf)


####3.2 Scanning samples (50 minutes)

<div class="alert alert-info"><b>Facilitator speaking notes</b> Recap what you prepared ahead of time during Sample Prep https://publiclab.org/wiki/oil-testing-kit#Collect.</div>

The Public Lab community advises to scan each sample 3 times. Following this rule, a rough time estimate would be that a first time user can achieve the scanning of 3 unique samples in an hour. 

As we learned in [Workshop 1](/wiki/oil-testing-workshop-design-an-experiment) (Experimental Design), taking triplicate samples of each one of your materials will increase the accuracy of your results. 

1. Identify which of your oil samples are “knowns” and begin with them. 
2. Use the dropper to fill the cuvette with your sample to the line above where it curves in (just over halfway full)
3. Place your sample in the sample holder on your oil testing kit add-on
4. Place the cover over the sample
5. Press and hold the button on the laser. 


6. Return to the open “capture” tab on spectralworkbench.org. There you will see your spectra. Ideally, you want your spectra line to fall between 25-75%. 
    1. Look at the top line of the graph -- Is it yellow? It turns yellow when your are peaks touching or getting cut off by this line. If the top line is yellow, you need to dim your spectra by using the physical dimmer on the oil testing kit add-on. The higher you pull the dimmer, the less light it lets in. 
7. Once you’ve captured a good spectra, click “Save” and title it the name (whatever it is you’re sampling) and the number 1.
8. Leave this tab open and repeat steps 1-5 with the same samples naming the consecutive ones (Sample name)2, and (Sample name)3. For example Diesel1, Diesel2 and Diesel3. 


####3.3 Creating sets (30 minutes) 

1. Once you have all three scans of one sample, click the “Compare” button on your most recent scan (Sample3). This will let you search for (by ID) and add your previous samples to the graph. Then use "Save as a set" under the "Compare" tab -- see https://publiclab.org/wiki/spectral-workbench-usage#Sets.
2. On the New Set page that comes up, give some information about the set you’re creating. For example, you’ll want to title it with the sample name, for example "Diesel Set for Oil Testing" or "Unknown Set for Oil Testing". To add additional spectra, at the bottom of the page for the new set you’ve just created, you can click “Add to set” 
3. Press the “Equalize Area” button under the cog icon below the set name, which will equalize the light intensities of your three samples.
4. Take a screenshot of your graph and save it with the name of your sample in a place you will be able to find it later. We will return to these graphs in [Workshop 4](/wiki/oil-testing-workshop-analyzing-and-sharing) to publish your results research note on Public Lab. 

Follow all the steps of activity 3B for all of your samples. More notes on scanning can be found on this wiki: https://publiclab.org/wiki/oil-testing-kit#Scan)

Once you have finished scanning your samples, take five minutes and brainstorm notes, questions, and ideas on the scanning process. Have participants post these up on the poster board. These will be reviewed compiled on the end of the workshop and posted back to Public Lab

Individually, what do you remember from [Workshop 1](/wiki/oil-testing-workshop-design-an-experiment) about taking multiple samples? Why is this important?

****

###4. Reflection and Wrap up

Send one person from the entire group to take notes on the poster board while everyone reflects on the day’s activities through the following questions: 

* what was hard?
* what was easy?
* what questions are you left with?
* what questions are you inspired to explore?
* any other takeaways you’d like to share with the Public Lab community?

Choose someone from the group to write up their experience as a Public Lab Research Note.

<div class="alert alert-info"><b>Facilitator’s notes for after the event:</b> Compile the notes that were left on the poster boards and your experiences facilitating this event so that others may learn from hearing about your experiences with the kit and workshop. Post them to the Public Lab wiki and put a link to it on the bottom of this page: https://publiclab.org/wiki/oil-testing-event</div>
