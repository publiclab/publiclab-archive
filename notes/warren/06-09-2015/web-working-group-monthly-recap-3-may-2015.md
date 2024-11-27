---
nid: 11963
title: Web Working Group Monthly Recap 3: May 2015
path: public/static/notes/warren/06-09-2015/web-working-group-monthly-recap-3-may-2015.md
uid: 1
tagnames: mapknitter,web-development,software,plots2,spectral-workbench,web-wg,wwg,response:11734,webwg
---

# Web Working Group Monthly Recap 3: May 2015

Web Working Group Monthly Recap 3: May 2015

It's been a quieter month than usual for the Web Working Group, at least as far as coding has gone. The big events were [last week's OpenHour](/wiki/openhour), (which actually happened in June, but let's not wait a month to celebrate it!) where fellow WWG member @btbonval, @justinmanley, and others showed up and we talked a lot about our efforts over the past year to open up PL's codebases and make them easier to contribute to.

There was also a good bit of buzz [about Leaflet.DistortableImage and MapKnitter 2.0](http://publiclab.org/notes/warren/05-29-2015/openaerialmap-open-imagery-network-public-lab-s-mapknitter) around [the 2015 State of the Map](http://publiclab.org/notes/smathermather/06-08-2015/opendronemap-openaerialmap-and-mapknitter), which is great, and has resulted in our committing to [adopt the Open Imagery Network's standard for metadata](https://github.com/publiclab/mapknitter/issues/178) -- which will get us listed in their imagery directory. 

@justinmanley published a great overview of MapKnitter 2 and Leaflet.DistortableImage in a post entitled, excellently, "The Magic Behind MapKnitter: Leaflet:DistortableImage": http://publiclab.org/notes/justinmanley/05-21-2015/the-magic-behind-mapknitter-leaflet-distortableimage


[![mapknitter-auto.gif](https://i.publiclab.org/system/images/photos/000/010/260/large/mapknitter-auto.gif)](https://i.publiclab.org/system/images/photos/000/010/260/original/mapknitter-auto.gif)



###MapKnitter

Part of the excitement about MapKnitter revolved around the completion of @anishshah101's past summers' work on GPS auto-placement of images, where we used a Google Maps altitude service to calculate the height of the camera above ground level. We're [talking to folks from OpenTerrainMap to see if we can use open data](https://github.com/publiclab/mapknitter/issues/176) for that feature as well. 

There's still [an outstanding bug with EXIF orientation tags](https://github.com/publiclab/mapknitter/issues/181), but many images work pretty well. Here's two that've been auto-placed:

<iframe src="https://mapknitter.org/embed/gps-test-2" style="border:none;width:100%;height:400px;"></iframe>

Overall, only 8 issues were closed on MapKnitter, however -- [read more in Github Pulse](https://github.com/publiclab/mapknitter/pulse/monthly):

* https://github.com/publiclab/mapknitter/issues/172 deletion inconsistencies bug - 12 days ago 
* https://github.com/publiclab/mapknitter/issues/168 Outline mode makes images not entirely transparent - 12 days ago
* https://github.com/publiclab/mapknitter/issues/159 Altitude considerations for autoplacement enhancement - 18 days ago 
* https://github.com/publiclab/mapknitter/issues/177 Legacy annotations missing annotations - 18 days ago 
* https://github.com/publiclab/mapknitter/issues/143 Firefox map not responding to commands bug - May 5
* https://github.com/publiclab/mapknitter/issues/173 maps not shown on PublicLab.org profile page - May 4 
* https://github.com/publiclab/mapknitter/issues/164 Export map taking long bug exporting on May 1 
* https://github.com/publiclab/mapknitter/issues/170 Auto place picture with skycam app crash the map bug


###PublicLab.org

Just 5 issues were closed -- [read more in Github Pulse](https://github.com/publiclab/plots2/pulse/monthly)

* https://github.com/publiclab/plots2/issues/282 Re-design of the Blog page 19 days ago
* https://github.com/publiclab/plots2/issues/281 Slippy map of Archived maps URL error 26 days ago
* https://github.com/publiclab/plots2/issues/276 Main header image fails to upload in edit mode bug May 1 
* https://github.com/publiclab/plots2/issues/277 Parent tags no longer showing up bug - May 1 
* https://github.com/publiclab/plots2/issues/145 site hangs on /search/mapknitter; optimize bug - May 1


###SpectralWorkbench

SW hasn't seen any activity this past month -- but again, we're hoping to get that re-started soon as my commitments to the WhereWeBreathe and Open Air projects wind up: https://github.com/publiclab/spectral-workbench/pulse/monthly

Thanks to everyone and have a great week! 