---
title: Wavelength range limiting in Spectral Workbench
tagnames: spectrometer, web-development, software, spectral-workbench, oil-testing-kit, response:12108
author: warren
path: /notes/warren/08-06-2015/wavelength-range-limiting-in-spectral-workbench.md
nid: 12125
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/011/051/original/Screenshot_2015-08-06_at_3.24.39_PM.png)

# Wavelength range limiting in Spectral Workbench

by [warren](../profile/warren) August 06, 2015 19:39

August 06, 2015 19:39 | Tags: [spectrometer](../tag/spectrometer), [web-development](../tag/web-development), [software](../tag/software), [spectral-workbench](../tag/spectral-workbench), [oil-testing-kit](../tag/oil-testing-kit), [response:12108](../tag/response:12108)

----

Just a quick announce -- after [the big revision of Spectral Workbench went live](/notes/warren/07-31-2015/sneak-preview-of-new-spectral-workbench-sets-display) last week, I also posted a few new features, including one we'd [discussed on the mailing list](https://groups.google.com/forum/#!topic/plots-spectrometry/n_OIBNKmvFY) -- range limiting. 

Now, you can tag spectra that you own with a tag in the format `range:min-max` -- as in, `range:400-800` -- to highlight a region you want to use in your analysis. For example, if your device has wide swaths of unusable range above and below your spectrum, [as in this spectrum](https://spectralworkbench.org/spectrums/55072), you can have only a narrower band shown in sets. 


[![Screenshot_2015-08-06_at_3.38.14_PM.png](https://i.publiclab.org/system/images/photos/000/011/052/large/Screenshot_2015-08-06_at_3.38.14_PM.png)](https://i.publiclab.org/system/images/photos/000/011/052/original/Screenshot_2015-08-06_at_3.38.14_PM.png)



I haven't yet figured out if we're going to "mute" data outside that range when viewing just one spectrum, but it seems likely -- we'll show a notice too saying "this spectrum is being displayed only between 400-800 nanometers. View entire dataset" or something. 

This is also important as any "equalizing" or other processing of the set will run only on the range of spectrum data displayed, so for example in the [Oil Testing Kit procedure](/wiki/oil-testing-kit#Oil+Testing+Kit+Beta+procedure), we'll be able to set the range to not include the laser peaks, making equalizing height or area more consistent. 

Once you've added a tag, any sets displaying the spectrum with the new 2.0 sets display, to be made default soon, will only show this range. See, for example, https://spectralworkbench.org/sets/show2/2446

<iframe width='100%' height='700px' style='border:none;' src='https://spectralworkbench.org/sets/embed2/2446'></iframe>

As compared to a screenshot of the previous, unclipped set:

![before](https://i.publiclab.org/system/images/photos/000/010/943/large/Screen_Shot_2015-07-30_at_8.53.03_PM.png)

****

In other news, I've done a very very preliminary backwards-compatible port of the Macros system to the new 2.0 graphing system, which means we can run a somewhat buggy "equalize height" script, resulting in this case in the following (screenshot, as the macro doesn't currently save the equalized height):

[![Screenshot_2015-08-06_at_3.26.05_PM.png](https://i.publiclab.org/system/images/photos/000/011/050/large/Screenshot_2015-08-06_at_3.26.05_PM.png)](https://i.publiclab.org/system/images/photos/000/011/050/original/Screenshot_2015-08-06_at_3.26.05_PM.png)

I'm not totally sure why the dips to zero occur, but I'll figure it out soon. 