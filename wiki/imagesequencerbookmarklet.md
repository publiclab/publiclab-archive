---
title: ImageSequencerBookmarklet
tagnames: ndvi, sidebar:none, image-sequencer
author: tech4gt
path: /wiki/imagesequencerbookmarklet.md
nid: 15666
uid: 523178

---

# ImageSequencerBookmarklet

by [warren](../profile/warren), [Aisha](../profile/Aisha), [tech4gt](../profile/tech4gt)

February 02, 2018 16:26 | Tags: [ndvi](../tag/ndvi), [sidebar:none](../tag/sidebar:none), [image-sequencer](../tag/image-sequencer)

----

## Leaflet plugin

This function has since been integrated into a standard Leaflet plugin, which you can find here:

https://github.com/publiclab/leaflet-multispectral

## Add Bookmarklet

This utility inverts all the images on a page and serves as a quick demo for the Image Sequencer library.

Images on the page must have [access allowed with a CORS 'Access-Control-Allow-Origin' header](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

Please drag the button below to your bookmarks bar to add the bookmarklet.

<a class="btn btn-primary btn-outline-primary" href="javascript:(function()%7Bfunction%20callback()%7Bvar%20sequencer%20%3D%20ImageSequencer()%3Bsequencer.replaceImage(%22img%22%2C%22invert%22)%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fpubliclab.github.io%2Fimage-sequencer%2Fdist%2Fimage-sequencer.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()">Image Sequencer Invert</a>


## NDVI

This bookmarklet processes any [Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage) image with the #NDVI equation and applies a colormap:

<a class="btn btn-primary btn-outline-primary" href="javascript:(function()%7Bfunction%20callback()%7Bvar%20sequencer%20%3D%20ImageSequencer()%3Bsequencer.replaceImage(%22.leaflet-image-layer%22%2C['ndvi','colormap'])%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fpubliclab.github.io%2Fimage-sequencer%2Fdist%2Fimage-sequencer.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()">Image Sequencer NDVI/Leaflet</a>


## MapBox/Leaflet maps

Runs NDVI and a colormap on Leaflet tiles:

<a class="btn btn-primary btn-outline-primary" href="javascript:(function()%7Bfunction%20callback()%7BImageSequencer().replaceImage(%22.leaflet-layer:first img%22%2C['ndvi','colormap'])%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fpubliclab.github.io%2Fimage-sequencer%2Fdist%2Fimage-sequencer.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()">Image Sequencer NDVI/Leaflet</a>
