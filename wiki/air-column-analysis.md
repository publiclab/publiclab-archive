---
nid: 745
title: Air column analysis
path: public/static/wiki/air-column-analysis.md
uid: 1
tagnames: air-column-monitor,air-column,vibrations,string,windspeed
---

# Air column analysis

###Hardware###

* Acoustic pickup for reading string vibration via audio input: https://www.google.com/search?aq=f&ix=iea&sourceid=chrome&ie=UTF-8&q=acoustic+pickup
* Audio input to Android phone via headphone port: 
  * https://www.youtube.com/watch?v=sz-9mxWa2VA

##Android##

More portable but maybe harder, should start with laptop approach (below)

###Spectrum ("EQ") Android apps###

* $2: https://market.android.com/details?id=com.julian.apps.SPLMeter&hl=en
* Free: http://www.androidzoom.com/android_applications/music_and_audio/spectral-audio-analyzer_bbhl.html

###Android graphing/audio libraries and code###

* Charting: http://code.google.com/p/chartdroid/
* Audio input processing: http://stackoverflow.com/questions/7686898/reading-data-from-a-microphone-in-android-to-process-it-online

##Laptop approach##

* Android lacks low-latency audio interfaces, so maybe better to just use a laptop
  * guitar pickup direct to microphone input
  * use a simple Processing app

##Related projects/work##

* Eddy Flux (via Mathew) - <a href="http://atmos.seas.harvard.edu/lab/brazil/lbaflux.html">http://atmos.seas.harvard.edu/lab/brazil/lbaflux.html</a>
* Page 4 (via Adam) - http://nadp.sws.uiuc.edu/lib/brochures/nitrogen.pdf