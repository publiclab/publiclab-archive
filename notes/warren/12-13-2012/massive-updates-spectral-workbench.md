---
title: Massive updates to Spectral Workbench
tagnames: spectrometer, spectralworkbench, kickstarter
author: warren
path: /notes/warren/12-13-2012/massive-updates-spectral-workbench.md
nid: 5188
uid: 1

---

![](https://publiclab.org/sites/default/files/front-page.png)

# Massive updates to Spectral Workbench

by [warren](../profile/warren) December 13, 2012 20:48

December 13, 2012 20:48 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench), [kickstarter](../tag/kickstarter)

----

If you've used [Spectral Workbench](https://spectralworkbench.org) recently, you may have noticed the frenetic pace of changes over the past week. Wholly revised interfaces such as the above front-page screenshot, as well as a vastly improved (but still in-progress) mobile interface for the site (largely using Bootstrap) have accompanied bugfixes and other revisions.

<a href="https://www.flickr.com/photos/jeffreywarren/8248338738/" title="Spectral Workbench new interface by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8345/8248338738_3141d1cba9.jpg" width="500" height="412" alt="Spectral Workbench new interface"></a>

The improvements have been largely focused on first-time users, since [close to 2000 Kickstarter backers](http://kickstarter.com/projects/jywarren/public-lab-diy-spectrometry-kit) will soon be receiving their kits and plugging them in for the first time. We want their experience to be as painless (and fun!) as possible. With this in mind we've added tips, help buttons, and other guides throughout the site. But we'll also be relying on our existing community of DIY spectrometrists to help newcomers out!

<a href="https://www.flickr.com/photos/jeffreywarren/8265007159/" title="SpectralWorkbench.org mobile front page by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8206/8265007159_edd8dd3045.jpg" width="281" height="500" alt="SpectralWorkbench.org mobile front page"></a><a href="https://www.flickr.com/photos/jeffreywarren/8269786273/" title="Spectral Workbench mobile (iOS 6) upload form by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8338/8269786273_8e2fe74e40.jpg" width="332" height="492" alt="Spectral Workbench mobile (iOS 6) upload form"></a>

###iOS and Android uploading

One big improvement is that on mobile devices without the live video API our mobile site has made use of, we are automatically [directing users to upload an image of a spectrum](https://spectralworkbench.org/upload), and prompting them to do so with their native camera app. Until more mobile browsers support the MediaStream webcam API (as [Opera Mobile does](https://play.google.com/store/apps/details?id=com.opera.browser)), this will allow anyone on Android or iOS 6+ to use the mobile webapp. We are also taking the first steps in developing a native iOS app to enable live capture, but we've found the native camera app technique to work fairly well. 

<a href="https://www.flickr.com/photos/jeffreywarren/8265880290/" title="Initial screen on new mobile live capture interface by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8356/8265880290_1ed418a84e.jpg" width="281" height="500" alt="Initial screen on new mobile live capture interface"></a>

On Opera Mobile the interface for live capturing is [also being improved](https://spectralworkbench.org/capture/beta), although it's not yet ready for prime time so we are leaving the [existing interface up for now](https://spectralworkbench.org/capture).

###Tags and contributors listings

For an exciting look at how many people have been uploading and what kinds of spectra they've been contributing, take a look at the [new listings for Contributors](https://spectralworkbench.org/contributors) (showing everyone who's uploaded to SpectralWorkbench) [and Tags](https://spectralworkbench.org/tags) (showing a ranked listing of top tags):

<a href="https://www.flickr.com/photos/jeffreywarren/8269806681/" title="Spectral Workbench contributors by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8501/8269806681_4d6b67294c.jpg" width="500" height="298" alt="Spectral Workbench contributors"></a>