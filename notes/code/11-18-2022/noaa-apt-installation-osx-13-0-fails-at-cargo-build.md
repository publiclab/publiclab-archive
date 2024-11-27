---
nid: 37430
title: NOAA-Apt installation OSX 13.0 fails at Cargo Build
path: public/static/notes/code/11-18-2022/noaa-apt-installation-osx-13-0-fails-at-cargo-build.md
uid: 820958
tagnames: noaa,lat:30,first-time-poster,zoom:3,lon:-100,response:24052
---

# NOAA-Apt installation OSX 13.0 fails at Cargo Build

Everything was going along really well - I was excited.  
Here is the last commands in the installation routine.  
Any and all help would be treated with immense gratefulness.  

73, Harry W9HGO - Grid DM73rj

SKCC #4647 - FIST #21825 -  NAQCC #0211 - QRP ARCI #17488 -

  
  
(base)  Downloads % cd noaa-apt-1.4.0

(base)  noaa-apt-1.4.0 % export PKG\_CONFIG\_PATH=/usr/local/lib/pkgconfig/

cargo build --release

error: Operation not permitted (os error 1) at path "/Users/tao/Downloads/noaa-apt-1.4.0/targetQ06lFa"