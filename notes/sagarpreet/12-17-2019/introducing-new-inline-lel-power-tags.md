---
title: Introducing new inline LEL power tags
tagnames: mapping, leaflet, location:blurred, lat:28, lon:77, leaflet-environmental-layers
author: sagarpreet
path: /notes/sagarpreet/12-17-2019/introducing-new-inline-lel-power-tags.md
nid: 21773
uid: 516343

---

![](https://publiclab.org/public/system/images/photos/000/037/125/original/Screenshot_2019-11-09_at_3.06.06_PM.png)

# Introducing new inline LEL power tags

by [sagarpreet](../profile/sagarpreet) December 17, 2019 05:20

December 17, 2019 05:20 | Tags: [mapping](../tag/mapping), [leaflet](../tag/leaflet), [location:blurred](../tag/location:blurred), [lat:28](../tag/lat:28), [lon:77](../tag/lon:77), [leaflet-environmental-layers](../tag/leaflet-environmental-layers)

----

Inline maps are a form of inline power tags which you can read more about on the power tags page. These will display any content tagged with lat:____ and lon:____ tags showing location, near the provided coordinates. You can read more about these inline power tags [here][1].

These new inline Power tags integrate the [Leaflet-Environmental-Layers][2]: 

1. Add Leaflet-Environmental-Layers which are added by default on map:  
`[map:layers::23:77:mapknitter,odorreport,eonetFiresLayer,asian,clouds]`

[map:layers::23:77:mapknitter,odorreport,eonetFiresLayer,asian,clouds]

2. Add Leaflet-Environmental-Layers along with Public Lab People layer (people are in the form of black markers) :  
`[map:layers:people:23:77:mapknitter,odorreport,eonetFiresLayer]`

[map:layers:people:23:77:mapknitter,odorreport,eonetFiresLayer]

3. Add Leaflet-Environmental-Layers along with Public Lab posts layer (posts are in the form of black markers) :  
`[map:layers:content:23:77:mapknitter,odorreport,eonetFiresLayer]`

[map:layers:content:23:77:mapknitter,odorreport,eonetFiresLayer]

4. Add Leaflet-Environmental-Layers along with Public Lab tags layer (tags are in the form of black markers) :  
`[map:layers:tag:infragram:23:77:eonetFiresLayer,mapknitter]`

[map:layers:tag:infragram:23:77:eonetFiresLayer,mapknitter]


**We can use any combination of layers from  Leaflet-Environmental-Layers in the above inline Power tags .** 

Please note that it is very important to use the layer name exactly as listed down here :

* purpleLayer

* toxicReleaseLayer

* pfasLayer

* aqicnLayer

* osmLandfillMineQuarryLayer

* Unearthing

* purpleairmarker

* skytruth

* fractracker

* odorreport

* mapknitter

* openaq

* luftdaten

* opensense

* Power

* Petroleum

* Telecom

* Water

* wisconsin

* fracTrackerMobile

* income

* americanIndian

* asian

* black

* multi

* hispanic

* nonWhite

* white

* plurality

* clouds

* cloudsClassic

* precipitation

* precipitationClassic

* rain

* rainClassic

* snow

* pressure

* pressureContour

* temperature

* wind

* city

* eonetFiresLayer

The significance of each layer can be found here :

https://publiclab.org/notes/sagarpreet/06-06-2018/leaflet-environmental-layer-library

Thank you!

Best,

[Sagarpreet][3] 

[@Sagarpreet_07][4]

  [1]: https://publiclab.org/wiki/inline-maps#
  [2]: https://github.com/publiclab/leaflet-environmental-layers
  [3]: http://github.com/sagarpreet-chadha
  [4]: https://twitter.com/Sagarpreet_07