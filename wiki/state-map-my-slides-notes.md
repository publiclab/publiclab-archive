---
title: State of the Map, my slides & notes
tagnames: balloon-mapping, grassrootsmapping, kite-aerial-photography, open-street-map, osm
author: mathew
path: /wiki/state-map-my-slides-notes.md
nid: 4420
uid: 4

---

# State of the Map, my slides & notes

by [mathew](../profile/mathew)

October 15, 2012 22:33 | Tags: [balloon-mapping](../tag/balloon-mapping), [grassrootsmapping](../tag/grassrootsmapping), [kite-aerial-photography](../tag/kite-aerial-photography), [open-street-map](../tag/open-street-map), [osm](../tag/osm)

I was at State of the Map US all weekend (Oct 13-14, 2012).  Many wonderful presentations on OSM, check out the notes especially on storytelling and historical maps, which hold lessons and collaboration suggestions for us as we review map annotation.

-------------------------
<b>TJ Maciak</b> 
##Beyond Base Maps: Beautiful Thematic Maps##
maciaktj@gvsu.edu

works for community research institute, MAPAS 2.0
johnson center community research institute, in grand rapids


mapnik for thematic maps..
* used tilecache to hold images,  OGCServer in Mapnik 

NNIP national Neighborhood Indicators partnership
pull data from NNIP
sheela martin at PSU, open indicators

###Open Indicators Consortium###
Weave "Web-based Analysis and Visualization Environment
integrates bar charts too
* downfall-- uses flash
* moving to open layers

end result: able to drop thematic data below OSM streets!

----------------------------------
##Flightstats, showing airports, weather, and plane tracks##

<b>Wm Leler</b>

-----------------------

##Using OSM to build a National Park Service base Map##
<b>Mamata K. Akela</b>

builds basemaps with bing, esri, google, mapbox
printed graphical products still not in GIS system

using Inkscape for icons! yay open source graphics!

working to partner with OSM and create NPS specific tags to limit displays to managed trails (for liability)

@npmap
@mamataakella

-----------------------------------------------

##maps as storytelling devices within your CMS##
<b>sean larkin</b>
ThinkShout, Inc. Portland-based, lots of Drupal

client: [The Intertwine Alliance](http://theintertwine.org)

use leaflet for tiles
built custom layers, drupal metadata and slideshows.

"an adventure is a collection of parks and trails.  can combine parks and trails in their adventure, add photos and text."
maps in the sidebar,

stack:
drupal site, leaflet, mapbox tiles, drupal vector data

drupals's database abstraction layer doesn't support geo-extensions...

-------------------------------------

##it all starts with an editor##
richard@systemeD.net

by default, potlatch, databse postgreSQL, renderer, Mapnik

improve usability by banning Potlatch, everything that's not JOSM
"we need more germans"
"Along the pike" how to add cycleways in Potlatch 2
* most people have never used a vector graphics app
Merkaartor, cut down JOSM

Potlatch-- name comes from the newsletter of french anarchists called the letterist international

now looking at Dojo for editing, looking for "modeless UI", but interested in a "tutorial mode"

###don't code? our documentation is terrible, please help!###

----------------------------------------

##Historical Mapping##
<b>Martin Gilbert</b>

similar: HOT, OSMBuildings, Oakland crimespotting, Pleades, pelagios, meograph, pastmapper

soylent problem, history is people

Mikel Maron has started OSM-Historical community, building tags and advice

###"Frankie Roberto's Deck is te word on OSM history tags for Manchester"###

"The playa on OSM Mikel Maron"

ESRI puts state lines in their basemap... not helpful historically

San francisco on Pastmapper, OldSF.org

geoCommons.org , Civil War battles

danvk.org historic maps

mapstory.org

gecon.yale.  another dataset.

-----------------------------------------------------
##make maps into objects##
<b>Nikki from Softcities.net</b>

"mapkins" and blanket maps

-------------------------------------------------------

##Satellite Maps for Your App##
<b>Nathan Vander Wilt</b>
Argyle Tiles
argyl.es
ter
the goal: building the other tab, satellite data (actually aerial ras data)

###raster sources: ###
* NASA,
** small scale, km/px

* USDA
** large scale, 1m/px
 
* USGS
** partner, clearinghouse, up to 10cm/px
** nationalmap.gov
** sometimes university/county mirrors

* state/city agencies
** watch copyright!

* tiles.argyl.es/z/x/y

###how to tile make?###
GDAL... yikes.

--------------------------------------
###Humanitarian Openstreetmap Team HOT###
<b>Kate Chapman</b>
membership gives you first shot at work/internships
join the mailing list

LearnOSM.org

Hot "Vacations"
volunteer somewhere for 2-3 weeks and teach skills to new people

###World Bank Disaster Risk Management###
<b>Robert Soden</b>
"Global facility for disaster reduction and recovery"
resilience to natural hazards and climate change... understanding risk modeling, impact modeling

"disasters are the interactions of naturally produced hazards and societally produced hazards"

Causes: Weak social networks, poorly constructed settelments and infrastructure, environmental degredation, corrupt and dysfunctional government institutions

exposure: "buildings, populations, livestock"
hazard X exposure X vulnerability = Risk

Location and structural charateristics of societal assets for which we would like to reduce or transfer risk.

partners for data model validation: CAPRA UNISDR GEM USGS

community mapping and open data...

can we use OSM to record historical data and keep track of historic change?

----------------------------

##OSM & K-12 Ed##
<b>Jeff Meyer</b>
jeff@gwhat.org
@gwathistory

STEM drives the train, but Social Studies explain large-scale problems

###why OSM? Price is right...###
* multidisciplinary project-based activities
* OSM central data store makes a difference.
* creaton promotes long-term retention
* collaboration encouraged sevelopment of social interaction skills

-------------------------------

##Telenav##

TTL routing...

####Offically announce html5 OSM navigaton [scoutosm.telnav.com](http://scoutosm.telnav.com)####

----------------------------------

##Changemonger: Human consumable OSM Data##
<b>Serge Wroclawski</b>
part of activities streams...
idea to have