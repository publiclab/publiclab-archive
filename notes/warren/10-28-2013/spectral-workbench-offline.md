---
title: Spectral Workbench Offline
tagnames: spectrometer, spectralworkbench, offline
author: warren
path: /notes/warren/10-28-2013/spectral-workbench-offline.md
nid: 9677
uid: 1

---

# Spectral Workbench Offline

by [warren](../profile/warren) October 28, 2013 23:31

October 28, 2013 23:31 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench), [offline](../tag/offline)

I spoke with some Firefox OS folks at Mozfest this weekend about the "offline manifest" system in modern browsers, and was able to put together a basic offline mode for Spectral Workbench. 

How it works: If you log into Spectral Workbench, you will from then on be able to go to http://SpectralWorkbench.org _whether or not you have an internet connection_, on most modern browsers, including on smartphones. It will tell you you're offline but the Capture interface will still work. 

However, it obviously cannot save data, and instead will prompt you to download it as images, which you must save and take notes about for later uploading, graphing, etc.

Have fun!