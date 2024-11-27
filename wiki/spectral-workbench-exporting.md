---
nid: 4213
title: Spectral Workbench exporting
path: public/static/wiki/spectral-workbench-exporting.md
uid: 1
tagnames: spectrometer,spectralworkbench
---

# Spectral Workbench exporting

###How to get data out of [Spectral Workbench](http://spectralworkbench)###

There are CSV, XML, and JSON exports available for any spectrum, even those which haven't yet been calibrated. They are available on the "show spectrum" pages such as: https://spectralworkbench.org/analyze/spectrum/913

Look on the left side under the title, as in this screenshot:

![Screen_Shot_2013-05-14_at_10.48.03_AM.png](https://i.publiclab.org/system/images/photos/000/000/269/medium/Screen_Shot_2013-05-14_at_10.48.03_AM.png)

###Bulk queries

You can download data in bulk on the Tag page, which includes links to recent spectra in XML or JSON format on a per-tag basis. For example:

https://spectralworkbench.org/tag/laser.json
https://spectralworkbench.org/tag/cfl.xml

It only displays the most recent 24, but you can go back by "page" using:

https://spectralworkbench.org/tag/cfl.xml?page=3
https://spectralworkbench.org/tag/cfl.xml?page=4
https://spectralworkbench.org/tag/cfl.xml?page=5

###CSV format description###

The CSV output is a 5 column comma separated text file. The first row contains text headers. Subsequent rows contain data in increasing wavelength order.

Column 1 contains the wavelength in nm.

Column 2 contains the average reflectance/transmittance/emissivity as a raw value integer in the range [0,255] as read. This value has not been converted to physical units and does not distinguish between reflectance and emissivity.

Columns 3, 4, and 5 are in the same format as column 2 and represent the red, green, and blue channels as read from the spectrum image.