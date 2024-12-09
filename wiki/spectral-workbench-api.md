---
title: 'Spectral Workbench API'
tagnames: spectrometer, spectralworkbench
author: warren
path: /wiki/spectral-workbench-api.md
nid: 4343
uid: 1

---

# Spectral Workbench API

by [warren](../profile/warren)

October 11, 2012 16:46 | Tags: [spectrometer](../tag/spectrometer), [spectralworkbench](../tag/spectralworkbench)

----

# Spectral Workbench 2.0 API

The Spectral Workbench 2 API is very different from the [v1 API](/wiki/spectral-workbench-api-v1). It is structured around a series of JavaScript classes.

These are reasonably well documented [with inline comments in the source code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/), but we'll summarize the overall structure and major points here:

### Core classes

* SpectralWorkbench.js - index file for the entire API
* [SpectralWorkbench.Graph.js](#Graph) - the graph, or chart, itself - the base class for the whole display
* [SpectralWorkbench.Image.js](#Image) - the image displayed above the graph
* [SpectralWorkbench.Importer.js](#Importer) - a small class to manage import and parsing of server-side data requests into Sets and Spectra
* [SpectralWorkbench.Datum.js](#Datum) - a superclass managing data from the server and tagging of such data
  * [SpectralWorkbench.Set.js](#Set) - set-data-specific class
  * [SpectralWorkbench.Spectrum.js](#Spectrum) - similar to Set but for Spectra
* [SpectralWorkbench.Tag.js](#Tag) - basic tagging class
  * [SpectralWorkbench.PowerTag.js](#PowerTag) - more complex tagging; code common to all powertags/operations

### API classes

* SpectralWorkbench.API.js - container class for API classes
* [SpectralWorkbench.API.Core.js](#Core) - commonly used/useful API methods
* [SpectralWorkbench.API.Operations.js](#Operations) - code for specific operations that may be applied to spectra, in standardized format
* SpectralWorkbench.API.Legacy.js - API methods and backwards-compatibility for 1.0 API

### UI classes

* SpectralWorkbench.UI.Spectrum.js - Spectrum-specific UI code
* SpectralWorkbench.UI.Set.js - Set-specific UI code
* [SpectralWorkbench.UI.ToolPane.js](#ToolPane) - the class for the Pane interface itself
  * SpectralWorkbench.UI.SpectraPane.js - Panes which display a selection of spectra to use in manipulating the current Datum
  * SpectralWorkbench.UI.StepsPane.js - not yet used; Panes with sequential steps
* [SpectralWorkbench.UI.ToolPaneTypes.js](#ToolPaneTypes) - the different types of ToolPanes available
* SpectralWorkbench.UI.TagForm.js - code for the tagging form on each Spectrum page
* SpectralWorkbench.UI.Misc.js - code for "like" button

### REST API methods

There is also a [REST API](#REST+API) for accessing data in various formats programmatically. 

****

## Graph

A Graph is the basic display unit of Spectral Workbench, including at minimum a graph of some data, means to display, resize, refresh, and format the display, and perform unit conversions on that data. The Graph class is used in both spectrum and set display, and wraps a d3 line graph, using the NVD3 chart generator. 

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.Graph.js) for more detail.

## Datum

A Datum comes in two types, Spectrums and Sets. These share a number of methods, properties and behaviors.

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.Datum.js) for more detail.

## Spectrum


[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.Spectrum.js) for more detail.


## Set

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.Set.js) for more detail.

## Image

As Spectral Workbench uses an image from your spectrometer, the Image class manages the display of the image alongside the Graph class, when viewing individual spectra. Much of this class relates to the resizing and display of the spectrum image for spectra with wavelength range limits, as the image is kept aligned with the graph data as much as possible.

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.Image.js) for more detail.

## Tag

Tagging is used to categorize and describe spectra, and to make them easier to search.

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.Tag.js) for more detail.

## PowerTag

PowerTags, now known as [Operations](/wiki/spectral-workbench-operations), are a type of tag used to manipulate spectral data in a reversible way. Operations are displayed to the right side of the screen in a separate area, and ordered by timestamp. Operations typically generate [Snapshots](/wiki/spectral-workbench-snapshots) of data, which are a flat copy of the spectrum's data after all Operations up to the current one have been run. 

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/SpectralWorkbench.PowerTag.js) for more detail.

## API

The API class has three main components, the Core API, Operations, and the Legacy API.

### Core

Commonly used/useful API methods.

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/api/SpectralWorkbench.API.Core.js) for more detail.

### Operations

Code for individual operations that may be applied to spectra, in standardized format. As opposed to PowerTag, the class that defines common behaviors for all operations. 

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/api/SpectralWorkbench.API.Operations.js) for more detail.

## UI

### ToolPane

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/ui/SpectralWorkbench.UI.ToolPane.js) for more detail.


### ToolPaneTypes

[View commented code](https://github.com/publiclab/spectral-workbench.js/tree/master/src/ui/SpectralWorkbench.UI.ToolPaneTypes.js) for more detail.


****

## REST API

There are a variety of calls possible to access data programmatically with a REST API:

* Spectra are available using the buttons on each spectrum page (as shown below). They have standard URLs for:
  * JSON: https://spectralworkbench.org/spectrums/52027.json
  * CSV: https://spectralworkbench.org/spectrums/52027.csv
  * XML: https://spectralworkbench.org/spectrums/52027.xml
* Latest snapshot of a spectrum, at:
  * JSON: https://spectralworkbench.org/spectrums/latest/52027.json
  * CSV: https://spectralworkbench.org/spectrums/latest/52027.csv
  * XML: https://spectralworkbench.org/spectrums/latest/52027.xml
* Snapshots, via:
  * JSON: https://spectralworkbench.org/snapshots/2.json
  * CSV: https://spectralworkbench.org/snapshots/2.csv
  * XML: https://spectralworkbench.org/snapshots/2.xml
* Tags, via
  * JSON: https://spectralworkbench.org/tags/sky.json
  * XML: https://spectralworkbench.org/tags/sky.xml

[![sw-api.png](https://i.publiclab.org/system/images/photos/000/010/252/medium/sw-api.png)](https://i.publiclab.org/system/images/photos/000/010/252/original/sw-api.png)

###Submitting spectra via POST request

It is possible for logged-in users to POST to: https://spectralworkbench.org/spectrums

with the following parameters:

* spectrum[title]
* tags (comma delimited)
* spectrum[notes]
* dataurl (a dataurl-encoded PNG of the data)
* geotag
* lat
* lon
* device (with values like "device:dsk" which actually just become tags)
* spectrum[calibration_id] (the id -- as in the URL -- of the spectrum to "clone" a calibration from)

This could enable periodic timed submission of data. However, we discourage users from abusing the API by submitting every minute or every second, which might force us to disable this form of submitting data. Please submit only 1 pixel tall images instead of whole images, and submit a maximum of once per hour.

An periodic sampling macro (from the legacy 1.0 API) can be found here: https://gist.github.com/jywarren/4945996

****

## Units

Units are not a class, but data is passed around in a variety of contexts, and it's useful to know exactly what's being referred to. 

**Data space** is space as defined within the stored data, in JSON format. It is typically measured in units of nanometer wavelengths, but in uncalibrated spectra, this may not be available. Data is also made up of a series of points, which is almost certain to correspond to pixels in the original image, since that is where they are generated from. This means that there should be an equal number of points to the pixel width of the spectrum source image. Pixels, and therefore points, should be assumed to be equally spaced. Note that the complete data space may not be displayed due to wavelength range limits set via tagging. 

**Image space** is space measured in pixels in the original source image of the spectrum. This may not match what is displayed on a given page, as images may be scaled to fit the interface or graph. Note that the complete image space may not be displayed due to wavelength range limits set via tagging. 

**Display space** is space measured as displayed on the screen. The graph and displayed image should be of equal pixel dimensions. Display space may not map directly to data or image space, as it only displays what is not masked out due to wavelength rage limits set via tagging.

### Conversions

For example, to convert an x-coordinate `x` from image space (a pixel position in the source image) to display space (a pixel position on the screen):

1. Get the wavelength value of the coordinate with `var nm = graph.datum.pxToNm(x)` (assuming graph.datum is an instance of Spectrum)
2. Use `graph.nmToDisplayPx(nm)` to find the position in displayed graph and image, accounting for wavelength range limits if necessary.

****

## Uploading data

Spectral Workbench allows for upload of numerical spectral data in JSON or CSV formats. 

The CSV format accepted is `wavelength,intensity`, as shown here:

<pre>
400,24
410,44
420,42
430,45
440,20
</pre>

Note that it requires commas; if you need to change from spaces to commas, or otherwise tweak your format, see [this note](/notes/dhaffnersr/04-27-2016/converting-csv-files-on-windows-7-on-up-with-commas-instead-of-decimals) by @dhaffnersr.

The JSON format accepted is as follows:

<pre>
[
  { "average": 64.3,  "r": 69, "g": 46, "b": 78,   "wavelength": 269.0 },
  { "average": 35.5,  "r": 33, "g": 19, "b": 41,   "wavelength": 432.2 },
  { "average": 31.2,  "r": 33, "g": 19, "b": 41,   "wavelength": 958.5 }
]
</pre>

****

### 1.0 API

The v1.0 Spectral Workbench API has been deprecated; its documentation has been archived here: https://publiclab.org/wiki/spectral-workbench-api-v1