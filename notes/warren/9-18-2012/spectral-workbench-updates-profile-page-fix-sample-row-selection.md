---
nid: 3864
title: Spectral Workbench updates: profile page fix & sample row selection
path: public/static/notes/warren/9-18-2012/spectral-workbench-updates-profile-page-fix-sample-row-selection.md
uid: 1
tagnames: spectrometer,spectralworkbench
---

# Spectral Workbench updates: profile page fix & sample row selection

Many folks have been uploading images of spectra but the website was not specific about where it was going to take a slice to graph. Now there's a note [on the upload page](https://spectralworkbench.org/spectrums/new). This will be helpful for spectra like:

* https://spectralworkbench.org/spectra/show/703
* https://spectralworkbench.org/spectra/show/695
* https://spectralworkbench.org/spectra/show/673

However, even more convenient (although still pretty shabby in interface) is the button you'll see below your spectra now which lets you "set sample row". This has a terrible interface but we'll be revising the whole spectrum view page for a new "analysis page" soon -- the important part is that you can enter a row # and it will sample your image at that # of rows from the top. So the following spectrum suddenly has data, whereas before it was reading the black data from the top row of the image:

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/spectra/embed/695'></iframe>

I also fixed the profile page link and made some other small tweaks, including [adding a blog link](http://publiclaboratory.org/notes/spectralworkbench) to the top, which just leads to the Public Lab website and shows all research notes tagged with "spectralworkbench". That way I can write updates here.

I haven't had a lot of time to write code recently but don't worry, we have a lot of big plans for the software and things should be getting much easier as we go!