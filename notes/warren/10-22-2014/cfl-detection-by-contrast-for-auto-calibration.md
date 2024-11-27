---
nid: 11296
title: CFL detection by contrast, for auto-calibration
path: public/static/notes/warren/10-22-2014/cfl-detection-by-contrast-for-auto-calibration.md
uid: 1
tagnames: spectrometer,calibration,cfl,spectrometer-calibration,spectral-workbench,gsoc,spectral-workbench-api,oil-testing-kit
---

# CFL detection by contrast, for auto-calibration

###What I want to do

I was thinking we might be able to do a crude but very fast CFL detection by measuring the amount of contrast in spectra, so I wrote a script (could have used the API but wanted it to be loaded by default) to try it out. I ended up being a little more complex once I tried it out on a lot of spectra; I discarded sections with low slope, too. 

[![continuous.png](https://i.publiclab.org/system/images/photos/000/007/606/medium/continuous.png)](https://i.publiclab.org/system/images/photos/000/007/606/original/continuous.png)

###My attempt and results

So it kind of measures how spiky a spectrum is, and does an OK job! It could use some tweaking and testing. My thought was to run this "cheap" method, then run a more complex matching if we have higher confidence that it's a CFL.

Try it out at https://spectralworkbench.org/capture (you may be prompted to reload the page once the cache clears) -- there's a little "lightbulb" button that will turn red if it thinks you're looking at a CFL. 

Screenshots would be nice either if it works well or if it doesn't, to debug. 

###Questions and next steps

@sreyanth - does your code have a "degree of confidence" that it's found a CFL? Like, say it finds blue and green, but red doesn't match up. Is there some way to have a 'threshold' where it's like "yes, this is a CFL"?

###Why I'm interested

In any case the dream is that the capture interface auto-detects a CFL and prompts you to auto-calibrate (the latter using @sreyanth's new code)
