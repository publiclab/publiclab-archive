---
title: "New servers for a long-term PLOTS data archive"

tagnames: 'website, archive, webworkinggroup'
author: warren
path: /notes/warren/9-10-2012/new-servers-long-term-plots-data-archive.md
nid: 3725
uid: 1

cids: 1309,1312

---

![](https://publiclab.org/sites/default/files/IMG_0627.JPG)

# New servers for a long-term PLOTS data archive

by [warren](../../../profile/warren) | September 11, 2012 02:10

September 11, 2012 02:10 | Tags: [website](../tag/website), [archive](../tag/archive), [webworkinggroup](../tag/webworkinggroup)

----

Stefan "Dogi" Unterhauser and I have been scrounging parts for a redundant and off-site RAID archive -- a giant collection of hard disks (up to 42 altogether) to store the growing PLOTS map and data archive. We're already starting to max out the built-in disks on the main PLOTS server, and storage on Amazon S3 is getting quite expensive -- $155 per month was our most recent bill.

We're going to be using the recently announced Amazon Glacier, but also want to control and have access to our own system. The "reused" servers were found and donated from a variety of sources and so far we've managed to cobble together 9 TB of redundant storage for only about $530. We expect it'll last a year or so before we'll need to start replacing parts, but there's also plenty of room for expansion. Here are some photos after hours of moving giant racks, carrying over a hundred of pound of servers and parts, and running lots of tests. Shown is only one of the 3 xServe RAIDs, one of the servers, and a fibre channel switch. 