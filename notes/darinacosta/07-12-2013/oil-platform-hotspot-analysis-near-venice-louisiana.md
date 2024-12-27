---
title: "Oil Platform Hotspot Analysis near Venice, Louisiana"

tagnames: 'gulf-coast, louisiana, oil, gis'
author: darinacosta
path: /notes/darinacosta/07-12-2013/oil-platform-hotspot-analysis-near-venice-louisiana.md
nid: 8858
uid: 170106
cids: 6318
---

![](https://publiclab.org/public/system/images/photos/000/000/766/original/djacosta_oilplatformhotspotanalysis_v1.jpg)

# Oil Platform Hotspot Analysis near Venice, Louisiana

by [darinacosta](/profile/darinacosta) | July 12, 2013 20:05

July 12, 2013 20:05 | Tags: [gulf-coast](/tag/gulf-coast), [louisiana](/tag/louisiana), [oil](/tag/oil), [gis](/tag/gis)

----

The Gulf Restoration Network team conducted an analysis of high-density clusters, or "hotspots", of Outer Continental Shelf (OCS) oil platforms in the Gulf of Mexico that are located within 50 miles of Venice, Louisiana. The team also analyzed these hotspots for National Response Center (NRC) oil spill reports that were issued between 2010 and 2013. This study was done using ArcMap 10 software. 

**Brief methodology:
**
Datasets used:

-Outer Continental Shelf Oil Platforms
http://www.data.boem.gov/homepg/data_center/mapping/geographic_mapping.asp

-NRC Reports 2010-2013
http://oilspill.labucketbrigade.org/reports/download

-Plaquemines Parish Designated Places
http://arcdata.esri.com/data/tiger2000/tiger_download.cfm

These datasets were brought into an ArcMap workspace. The NRC reports were geocoded. A centerpoint was created from the “Designated Places” layer for the entry listed in the “NAME00” field as “Boothville-Venice”. A 50 mile circular buffer polygon was created using this centerpoint. A 30x30 fishnet polygon layer was created using the buffer layer as a spatial reference. A “double” field was created in the “Platforms” attribute table named “FORCOUNT”. Using the Field Calculator, all entries were populated with the number “1”. The Platforms layer was spatially joined to the fishnet, and the attributes were summarized as “Sum”. Using this joined layer, the “Hot Spot Analysis (Getis-Ord Gi*)” tool was run. “FORCOUNT” was selected as the input field. The standard deviation of this analysis was symbolized. The boundaries of individual hotspots were visually selected, and a layer was created based on these boundaries. The geocoded NRC reports that fell within each bounded hotspot were spatially selected in order to arrive at the count.
