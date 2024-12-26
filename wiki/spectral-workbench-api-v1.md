---
title: "Spectral Workbench API v1"\ntagnames: 'software, spectral-workbench, development, spectral-workbench-api, parent:spectral-workbench-api'
author: warren
path: /wiki/spectral-workbench-api-v1.md
nid: 12626
uid: 1

---

# Spectral Workbench API v1

by [warren](../profile/warren)

January 27, 2016 15:07 | Tags: [software](../tag/software), [spectral-workbench](../tag/spectral-workbench), [development](../tag/development), [spectral-workbench-api](../tag/spectral-workbench-api), [parent:spectral-workbench-api](../tag/parent:spectral-workbench-api)

----

<div class="warning">The v1.0 Spectral Workbench API has been deprecated; for up-to-date documentation, please see the <a href="/wiki/spectral-workbench-api">Spectral Workbench API page</a></div>

****

##Purpose##

The API (starting with the macro system, below) will make it possible for anyone to develop new functions, like:

* displaying a set of wavelengths (and their intensities) for, say, a contaminant you're looking for
* displaying a ratio of wavelength x to wavelength y -- say, for normalized differential vegetation index (NDVI)
* display intensity at 600nm and indicate intensity at 600nm for the last 10 measurements
* calling up, averaging, and displaying the average of all spectra [tagged with "oliveoil"](https://spectralworkbench.org/tag/oliveoil) or whatever
* graph intensity at wavelength X over time, for the past Y weeks
* save spectra periodically
* develop a better spectrum matching function (find nearest match)
* make a function which can auto-recognize a CFL spectrum and offer to auto-calibrate

##Macros##

We're building a simple API so people can write macros without a lot of fuss. There are 2 places to use macros - in the "Analyze" interface and in the "Capture" interface. The former is for performing operations on **existing** data, the latter for manipulating data while actually using your spectrometer. Both use the same library and have access to many (but not all) of the same functions.

A simple macro saving and sharing system is now live at: https://spectralworkbench.org/macros

###Getting started###

To create a macro we have a simple editor you can enter JavaScript code into. The basic template (copy paste this and build on it!) is like this:

    setup: function() {
        // code to run on startup
        $W.add_button("My Button",function(){ do_something() })
      },
      draw: function() {
        // code to run every frame
      }

If you are already logged into Spectral Workbench, you can begin by clicking here: https://spectralworkbench.org/macros/new

A very simple command to run in the macro console (works as of Oct 14 2012) would be:

    setup: function() { window.open($W.canvas.toDataURL(),'_newtab').focus()}

Which opens a new tab with the current image data as a PNG. For now, you can use any of the below variables and methods in a Javascript console such as found in Chrome, Safari, or Firebug on Firefox.

###Variables and methods###

A range of variables and methods will be available to use in your macros. To start with, you can read through the existing framework here: 

https://github.com/jywarren/spectral-workbench/blob/master/webserver/public/javascripts/capture.js

* **$W.data** - returns a nested array of wavelength/intensity pairs, as floats and integers between 0-255, respectively. Example to come; intensities are separated by R, G, and B channels.
* **$W.mode** - "rgb" or "average", i.e. whether we're currently looking at color channel data or the averaged "monochrome" data
* **$W.markers** - an array of markers at certain wavelengths, as input by the user. Later we'll make it easy to add new markers (see _upcoming_ section below)
* **$W.notify(string msg,string type,boolean expire)** - alert the user with a message (msg) of type "notify", "warning" or "error" shown in green, yellow, or red respectively. Defaults to expire = true, which means it disappears after 2 seconds.
* **$W.getIntensity(obj data,int x)** - Get the intensity from 0-255 for a given x-position in the video frame. Use as follows:

    $W.getIntensity($W.data[0].data,200) // fetches intensity for x-position of 200 px

* **$W.calibrate(id,x1,w1,x2,w2)** - calibrates the spectrum with id *id*, using wavelength/pixel pairs. Integer x1 is a position in the x-axis of the spectrum image (origin left) with a known wavelength position of (decimal) w1. x2 and w2 follow the same convention and the two positions are used to linearly interpolate the calibration. __Note that this occurs only on the server side, and if you have loaded a spectrum, it will not reflect the new calibration until you re-load it from the server.__
* **$W.saveSpectrum()** - saves the current spectrum of data and brings up the Save dialog.
* **$W.getWavelength(int col)** - returns wavelength as a decimal for the x-axis position given in "col"
* **$W.toggle_mode()** - switch from "rgb" to "average" mode or back
* **$W.show_rgb()** - switch from "average" to "rgb" mode
* **$W.show_average()** - switch from "rgb" to "average" mode
* **$W.add_spectrum(int id)** - fetches data from a spectrum with the given ID, and displays it in the graph for comparison
* **$W.excerptCanvas()** - returns a PNG (data url) of the current waterfall display image
* **$W.getCrossSection()** can now be overwritten to collect a different cross section of the raw video feed: https://github.com/jywarren/spectral-workbench/blob/master/webserver/public/javascripts/capture.js#L152 You basically get a frame from the video, and need to source from it to write a new row of pixels onto the top row of the waterfall display. 
* **$W.mark()** - _currently for capture interface only, which we should change to be for analysis as well_ - add a new marker to monitor the intensity at this wavelength. Uses prompt() so requires user interaction, which we should also change.
* **$W.dialog(title,body,[)** - _for analyze only_ - 
* **$W.calibrated** - _analyze only_ - true/false, whether the spectrum is calibrated. Calculated at page load time, so if it's been done through a macro and the page hasn't loaded, don't trust it. Conversely, if you are writing macros, and you calibrate, update this value to reflect that!

###Saving client-side processed data

You should also be able to manipulate the JSON representation of data on the client side and save it to the server using the following URL format: 

`https://spectralworkbench.org/spectrums/<id>/save`

where `<id>` is the spectrum ID, and the request includes POST parameters: 

* `tags` - an optional comma-delimited series of tags
* `data` - an optional JSON array of data, in the format Spectral Workbench provides it (see RESTFUL JSON download below)

###Upcoming variables and methods

* **$W.add_button(string label,function action)** - adds a new button to the interface which has the given label and triggers the given action

###Examples###

Please add your own if you like:

**Saving image data offline**

<script src="https://gist.github.com/3889063.js"> </script>
