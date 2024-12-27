---
title: "NOAA-Apt installation OSX 13.0 fails at Cargo Build"

tagnames: 'noaa, lat:30, first-time-poster, zoom:3, lon:-100, response:24052'
author: code
path: /notes/code/11-18-2022/noaa-apt-installation-osx-13-0-fails-at-cargo-build.md
nid: 37430
uid: 820958

cids: 

---

# NOAA-Apt installation OSX 13.0 fails at Cargo Build

by [code](../../../profile/code) | November 18, 2022 05:24

November 18, 2022 05:24 | Tags: [noaa](../tag/noaa), [lat:30](../tag/lat:30), [first-time-poster](../tag/first-time-poster), [zoom:3](../tag/zoom:3), [lon:-100](../tag/lon:-100), [response:24052](../tag/response:24052)

----

Everything was going along really well - I was excited.  
Here is the last commands in the installation routine.  
Any and all help would be treated with immense gratefulness.  

73, Harry W9HGO - Grid DM73rj

SKCC #4647 - FIST #21825 -  NAQCC #0211 - QRP ARCI #17488 -

  
  
(base)  Downloads % cd noaa-apt-1.4.0

(base)  noaa-apt-1.4.0 % export PKG\_CONFIG\_PATH=/usr/local/lib/pkgconfig/

cargo build --release

error: Operation not permitted (os error 1) at path "/Users/tao/Downloads/noaa-apt-1.4.0/targetQ06lFa"