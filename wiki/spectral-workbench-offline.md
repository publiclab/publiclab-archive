---
nid: 4212
title: Spectral Workbench offline
path: public/static/wiki/spectral-workbench-offline.md
uid: 1
tagnames: spectrometer,spectralworkbench
---

# Spectral Workbench offline

[Spectral Workbench](https://spectralworkbench.org) may be used offline once it is loaded in your browser. To do so, visit:

https://spectralworkbench.org/capture/offline

Once you've visited the above address, you will be able to access that page even without an internet connection, as long as you use the same browser. This should also work on smartphones. 

Not all features will be available in Offline mode, since some rely on an internet connection to retrieve relevant data. But you'll be able to save your spectra as images and upload them later if you need.

****

###Updating

To update your offline site, you must reconnect to the internet and visit the above address. Wait for 30 seconds and you should be prompted to load a new version by refreshing the page. 

###How it works

Spectral Workbench's Offline mode uses [HTML5's offline manifest feature](https://en.wikipedia.org/wiki/The_cache_manifest_in_HTML5) to store a copy of a portion of the Live Capture interface in your browsers's cache. 