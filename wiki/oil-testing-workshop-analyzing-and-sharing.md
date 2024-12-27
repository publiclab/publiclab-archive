---
title: "oil-testing-workshop-analyzing-and-sharing"

tagnames: 'spectrometer, workshop, oil-testing-kit, parent:oil-testing-workshops'
author: liz
path: /wiki/oil-testing-workshop-analyzing-and-sharing.md
nid: 12672
uid: 7

---

# oil-testing-workshop-analyzing-and-sharing

by [warren](../profile/warren), [liz](../profile/liz)

February 08, 2016 20:43 | Tags: [spectrometer](../tag/spectrometer), [workshop](../tag/workshop), [oil-testing-kit](../tag/oil-testing-kit), [parent:oil-testing-workshops](../tag/parent:oil-testing-workshops)

----

_Drafted by Gretchen Gehrke, Stevie Lewis, Liz Barry._

**Why (the Situation):** We want to understand the graphs we created in Workshop 3. We want to know what are appropriate conclusions to draw from spectral information of oil. We want to clearly present and properly contextualize our conclusions. We want to share back to the community (Public Lab!) who created this workflow in order to improve it for everyone’s use in more effectively fighting petrochemical pollution.

**When:** a two and a half (2.5) hour workshop, part of a four-part series. 

**Where:** a room with tables and chairs, where groups of ~6 people can sit together. 

**What (the content):** reading graphs of spectral information. 

**For What (Achievement Based Objectives):**
In completing this four hour workshop, you will: 

* Meet others attending the workshop 
* Share with each other what motivated you to to participate
* Compare and contrast the samples you scanned and added to sets in Workshop 3
* Examine your results
* Walk through next steps of your project
* Share out your findings, ideas and questions with the Public Lab community via Research Notes. 
* Write possible uses for spectroscopy in your own work / activism

****

###Notes for Facilitators:

**Estimated Time:** two and a half hours

**Materials Needed:**

* one computer per team (with internet, and power sources)
* the saved screenshots from workshop 3
* markers and pens
* post-it notes
* 1 poster board

**Setting up the event:**
The poster board should be titled with the word “Analysis” and prepared with the words “Notes” “Questions” “Ideas” evenly spaced down the left hand side.

****

##Workshop Schedule:

1. Introduction (10 minutes)
    1. Who’s in the room
    2. Introduction to the event
2. Analyzing your data (40 minutes)
    1. Visually assess your spectra
    2. Analyze your spectra in Spectral Workbench
3. Identifying next steps (30 minutes)
    1. Finalizing your conclusions
4. Compiling your data to share (30 minutes)
    1. Posting a Research Note online
5. Wrap-up (10 minutes)

****

##Workshop Outline

###1. Introduction
              	
####1.1 Who’s in the room? (10 minutes)

Take a minute to read through the achievement based objectives on page 1 of your handout.

Go around the room, with each person introducing themselves with their name, where they’re from, and the reason they are interested in being here today. If there are really a lot of people, then as a large group say names only, and then break into smaller groups at tables to share reasons, hopes, and expectations for attending.

<div class="alert alert-info"><b>Facilitator’s heads-up:</b> If you did Workshop 2 or 3, this is the same activity, feel free to modify it, but be sure to remind people about the tools and feedback to Public Lab.</div>

1. If you have not done so yet, introduce yourself: 
    1. why you are interested in this project and 
    2. a little bit about Public Lab. 
2. Give an overview of the event goals and structure (at the top of this page)
3. Emphasize _“the tools, technology and learning that happens here is always under development. One of the major outcomes of the event is to provide constructive feedback on the learning, the activities and the tool we will build in order to improve it for future participants.”_
4. Introduce the things in the room: 
    1. Highlight the posters, markers and sticky pads available for people to put up their questions, comments, and ideas on as they work through the event.
    2. Identify the paper research notes for those who would like to take in depth notes on their steps for sharing back with the Public Lab community.

****

###2 Analyzing your data 

####2.1 Visually assess your spectra (15 minutes)

View the graphs you saved as image files in Workshop 3, or go back to spectralworkbench.org to find your sets. 

Take a close look at the spectra within each set, and assess how they look similar and how they look different.

Here are some tools to use in comparing your data (from Workshop 3). 

* Equalize the height of the spectra that are on your sets.
* Equalize the area of the spectra.
* Find the graph centers.  

Things to notice include: 

* How close together are the “center lines” you found toward the end of Workshop 3? 
* Do the shapes of the spectra look similar? 
* Do the spectra overlap with each other well, or are they offset (shifted to the right or left) from one another? 
* How closely aligned (i.e. how close on the x-axis, the wavelengths axis) are the incident light peaks (the laser light, at ~405 nm)? Is it shifted right or left? Is it the same size in all three spectra? 

As a group, talk about the visual appearance of the sets of spectra and how similar or different spectra within a given set are. 

####2.2 Analyze your spectra in Spectral Workbench (40 minutes)

Now, support these visual observations with data in Spectral Workbench. In Spectral Workbench, open one of your saved sets. You will do this exercise for each set, one set at a time. In the first set, place your cursor in the set’s spectra, and watch the legend in the upper right-hand corner, which shows the fluorescence intensities of each spectrum at the wavelength where your cursor currently is. As you move your cursor to the left or right, you will see the intensities (written as %s) change. 

In your group, you will identify the wavelengths at which different things occur, and you will record those wavelengths on a piece of paper. This takes good teamwork! Have one person slowly move the cursor across the spectra, another person paying close attention to the intensities legend in the upper right hand corner, and one person recording values on the paper. 

In each set, find: 

1. the wavelength of the center point of each spectrum in a set. Do this by clicking “More Tools” and select ‘Find graph “centers” only between 410-700nm’. Center lines will appear on the spectra. Move the cursor to overlap with the center-line for each spectrum and record the wavelength where that occurs. 

2. the wavelength at which each spectrum has the highest intensity. Do this by slowly moving the cursor across the spectra and closely watching the intensity for each spectrum to find the highest points. Note that this can require close attention, especially if the spectra have broad peaks. For spectra with broad maxima (i.e. the same high intensity for a range of wavelengths), record the range of wavelengths for the highest intensity.

3. the wavelengths at any changes in slope of the spectrum. For example, if there is a distinct dip, or a place where the curve becomes more steep, record the wavelengths at which those changes occur for each spectrum in a set. 

With your group, compare your findings for each of the characteristics listed above. How far apart are the center lines? Do the spectra have similar wavelengths for their maximum intensities? Do the other characteristics of the spectra (such as valleys and slope changes), occur at similar wavelengths? 

Repeat this section for the rest of your sample sets. 

Remember back to Workshop 1 when we discussed precision. Since each spectrum in a set is the same oil sample, comparison of those spectra inform us about the precision of our method. How precise is our method for measuring the fluorescence spectra of oil samples? Is our method more precise for one type of oil than another? Which kinds of oils had the best precision, and which had the worst? Do you have any ideas about why that might be? 

####2.3 Possible issues

Spectra in a set don’t always match up exactly. Some reasons for this are:

* The intensity of your light source was different. 
* One of your samples is more diluted than another.
* See more [tips here](https://publiclab.org/wiki/spectral-workbench-usage).

####2.4 Compare across sets (15 minutes)

First, visually compare the different sets. Using the same characteristics as in part **2.1**, note the similarities and differences in the spectra of different kinds of oil. Discuss your comparisons as a group. 

Now, reference the data you determined in step **2.2** about the wavelengths at characteristic places in the spectra. How similar are the graph centers, peak wavelengths, and slope changes in the different kinds of oil? 

Look at the range of wavelengths for a given characteristic (e.g. wavelength at maximum peak intensity) within a single set, and compare that against the wavelengths for that same characteristic in other sets. 

* Based on a single characteristic, can you discern the different kinds of oil? 
* For example, if the only information you were given were that an oil sample had its maximum fluorescence intensity at 540nm, could you group it into one type of oil sample as opposed to another? 
* What if you compared shapes and other characteristic wavelengths? 

Discuss your analyses as a group. 

Once you have finished analyzing your results, take five minutes to brainstorm notes, questions, and ideas on the analyzing process. 

Post these up on the poster board. 

These will be reviewed compiled at the end of the workshop and posted back to Public Lab.

****
**------ (10 minute break) ------**
****

###3. Identifying next steps 

####3.1 Finalizing your conclusions (30 minutes)

Revisit the question you identified in [Workshop 2](/wiki/oil-testing-workshop-build-a-spectrometer). 

Choose one person to type notes from the discussion. These notes will be used during the last activity of this workshop, posting a research note. 

Discussion Prompts:
 
* What did we learn?
* Were our questions answered? If not, what would we need to do to further explore the questions?
* Did any new questions arise? 
* How can the information be used? 
* Who can use the information?
* Where do we want to take this project next? 

High accuracy depends on calibration. What would have happened if you had improperly calibrated? HINT: the relative precision would still be the same, but the accuracy would be much different. 

****

###4 Compiling your data to share 

####4.1 Posting a Research Note online (30 minutes)

While you may have been posting research notes along the way on the progress of the workshops, this activity is as a final wrap up/reflection time on the project in sharing it out with the Public Lab community. 

Follow these steps to post a Research Note: 
 
* Log into PublicLab.org. 
* On your dashboard you will see the most recent research notes people have posted. 
* On the top left hand corner of the screen, click the button “Write a research note.” You will be able to drag and drop the images of your graphs into the textbox.

####4.2 Tips for improving your research note

Research notes can include information such as:

* **Introduction:** to the project and the question explored (Workshop 1)
* **Methods:** how participants worked to answer the question from workshop 1 (What was done in workshops 2 and 3) 
* **Results:** The graphs and information you compiled in Activity 1 today. 
* **Discussion:** The discussion can include anything you’d like to mention about the results or the process you went through to get them. Below are some prompts of useful information to include in the discussion: 
  * Experience using the oil testing kit
  * Questions that arose along the way
  * Ideas for improving the kit
  * Ideas for future use of the kit
  * Information you were able to gather about your results
  * Things you learned
  * Things you would like to learn more about or have questions about 
  * etc. 

####4.3 Make a plan for the next steps in your oil testing project

Based on the point you arrived at while writing your research note, think forward about what the very next step is that needs to happen. What about the couple steps after that? What schedule would you like to set for these steps? 

Most importantly, welcome to the Public Lab community! We want to hear from you, so reach out anytime to the spectroscopy group at plots-spectrometry@googlegroups.com. All of the people who wrote this workshop are on that list, which means you already know people there!
