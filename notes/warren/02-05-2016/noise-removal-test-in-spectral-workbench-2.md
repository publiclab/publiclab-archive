---
nid: 12659
title: Baseline noise removal test in Spectral Workbench 2
path: public/static/notes/warren/02-05-2016/noise-removal-test-in-spectral-workbench-2.md
uid: 1
tagnames: spectrometry,spectral-workbench,operations,noise-reduction,spectral-workbench-2
---

# Baseline noise removal test in Spectral Workbench 2

###What I want to do

I want to test out some of the [new tools](/wiki/spectral-workbench-tools) in [Spectral Workbench 2](https://spectralworkbench.org) and see if we can do some useful things like reducing noise in spectra.

###My attempt and results

Some spectra have high baseline noise -- whether due to the webcam itself, or due to stray light in the spectrometer.

I used a Transform operation with the expression `Math.max(A-0.15,0)+(0.15*Math.max(A-0.15,0))` to subtract out data that falls below 15% -- and the way I did it also spreads the remaining data evenly from 0-100%. You can see the difference before and after the noise reduction here:

<iframe width='100%' height='550px' style='border:none;' src='//spectralworkbench.org/sets/embed2/3163'></iframe>

Basically, this:

* takes the average and subtracts 15%: `A-0.15`
* cuts off anything that falls below zero: `Math.max(A-0.15,0)`
* adds back a proportion of 15% based on if the original value was >15%: `+(0.15*Math.max(A-0.15,0))`

The last part is not perfect; if the original value is 100%, it only adds back a maximum of 85% of 15%, which drops the final value by 2.25% versus the original. This is shown at the highest peaks of the comparison graph, but the effect is most prominent only at the very highest peaks. I could remove this with a more complex expression, but it seems not worth it to me.

Try it out yourself by forking these two and tweaking the operation yourself: https://spectralworkbench.org/sets/show2/3163