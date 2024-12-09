---
title: Adventures in Geocoding: Getting lat/lng data for EWG's PFA pollution map
tagnames: water, map, pfas, geocode
author: ephemeralwaves
path: /notes/ephemeralwaves/03-09-2019/adventures-in-geocoding-getting-lat-lng-data-for-ewg-s-pfa-pollution-map.md
nid: 18499
uid: 47284

---

# Adventures in Geocoding: Getting lat/lng data for EWG's PFA pollution map

by [ephemeralwaves](../profile/ephemeralwaves) March 09, 2019 02:13

March 09, 2019 02:13 | Tags: [water](../tag/water), [map](../tag/map), [pfas](../tag/pfas), [geocode](../tag/geocode)

----

To add a layer to the [leaflet-environmental-layers](https://github.com/publiclab/leaflet-environmental-layers) I figured I needed the latitude and longitude of the sites of contamination.

The first issue I had was that the data was write protected, meaning I could not modify it and hence use their google sheet to put in the latitude and longitude, so I made a copy of their data on my own account.

To get this I looked up 'geocode' and came across a whole slew of proprietary and pay for services to accomplish this goal. Since the data was in a google excel like sheet I did find a [script](https://github.com/nuket/google-sheets-geocoding-macro) to convert the location into lat/lng. The problem was that the location column had county or city and state data which isn't the most precise piece of data I had for figuring out lat/lng. The first column in the data is the common name for the contamination site. I decided this alongside the location column was probably what I should use to figure out the lat/lng.

I found the [csvgeocode npm module](https://github.com/veltman/csvgeocode "https://github.com/veltman/csvgeocode") helpful in extracting the data. One note though is you do need an google API key and have to enable geocoding on it for the tool to work. It can be used as a simple command line tool to take in the csv file and output it to another csv file.

#### Data

- Original PFA Data via [Northeastern SSEHRI PFAS Contamination Site Tracker](https://docs.google.com/spreadsheets/d/1HxLAzOmFdMh7V-mey4ExTPsnNKarEcGG6klBWZH8auA/edit?usp=sharing)
- The [modified PFA data](https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7uc-fX21FbLMakqCwAIT0gZ_oVmH3hYNxprkIw12l7te5IheUO2_TeEjRA07ZyEXeDQqx9tQCfuQn/pubhtml) that includes lat/lng

I also looked through the EWG source code and found a couple geojson files which can be used. One is the same PFAS data that needs to be geocoded, so I 've already done that above ([PFAS geojson file](https://www.ewg.org/interactive-maps/2017_pfa/PFAS_7_19_2018.geojson))

- The other is the [EPA tap water detections geojson file](https://www.ewg.org/interactive-maps/2017_pfa/UCMR_systems_1_2_2019.geojson "https://www.ewg.org/interactive-maps/2017_pfa/UCMR_systems_1_2_2019.geojson") which can be incorporated into the map.