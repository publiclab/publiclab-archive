---
title: "Mapknitter synchronous editing - GSOC 2019, phase 2 work"

tagnames: 'mapknitter, gsoc, soc-2019, gsoc-19, soc-2019-eval, soc-2019-blog, synchronous-editing, action-cable'
author: vidit
path: /notes/vidit/07-25-2019/mapknitter-synchronous-editing-gsoc-2019-phase-2-work.md
nid: 20313
uid: 517093

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/034/125/original/gsoc-phase-2-image.png)

# Mapknitter synchronous editing - GSOC 2019, phase 2 work

by [vidit](../../../profile/vidit) | July 25, 2019 18:05

July 25, 2019 18:05 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [soc-2019](../tag/soc-2019), [gsoc-19](../tag/gsoc-19), [soc-2019-eval](../tag/soc-2019-eval), [soc-2019-blog](../tag/soc-2019-blog), [synchronous-editing](../tag/synchronous-editing), [action-cable](../tag/action-cable)

----

**Phase two** of Google Summer of Code 2019 was a great learning experience for me. The phase involved some great ideas, brainstorming and coding. For the first few days, it was just the brainstorming which I think was the most important part since the idea was relatively raw and required to be given some thought. We first started with deciding about how should we handle all the synchronous requests while editing images on a map. We ultimately decided Action Cable as a medium for carrying out all the synchronisation and real-time work.  

**Action Cable** had its dependencies on Rails 5 so I made a [pull request](https://github.com/publiclab/mapknitter/pull/805) out of the current rails 5 development branch. This would be a long PR because most of the work is strongly dependent on action cable so most of the basic setup would be done in this.

Till now Action Cable has been successfully implemented and the basic synchronous editing of images is in a working state. Which means that if there are multiple users on a map and one edits an image on their browser, then all other users' maps will get updated in real time(who are online and working collaboratively). This updation part was done by making a few code changes in mapknitter's map.js library which handles all the image placement, size, position, rotations, etc.

The next few **things which have to be integrated** to the existing pull request before it gets merged are:-

1. The conditional editing part which could be thought of a similar feature as of google docs where author has the ability to make the doc (map in our case) as editable, comment-able, readable only. We may start off just by making it editable and readable abilities.
2. Making an image momentarily locked while a user is editing on the image or maybe just give an option on the image to lock it for editing along with the various tools we have in image's editing toolbar. We may create a few first-timer issues for this, since it is quite independent from the current un-deployed work.
3. Finally deploy this system to production and look for how the system's responding with a lot of users and quite a heavy load.

There were **some great ideas** on the feature by Alax who has been working on rails updates along with Kaustubh. I was able to build my Pull request over the rails 5 pr which was quite stable to work upon. We had some **fruitful discussions** with Jeff, Divya Baid and Sasha through which the work was able to get some acceleration. Had some great experience during phase 2, looking forward to phase 3 now.

Related issues and prs to the project:-

[https://github.com/publiclab/mapknitter/issues/609](https://github.com/publiclab/mapknitter/issues/609)

[https://github.com/publiclab/mapknitter/issues/804](https://github.com/publiclab/mapknitter/issues/804 "https://github.com/publiclab/mapknitter/issues/804")

[https://github.com/publiclab/mapknitter/issues/593](https://github.com/publiclab/mapknitter/issues/593 "https://github.com/publiclab/mapknitter/issues/593")

[https://github.com/publiclab/Leaflet.DistortableImage/issues/328](https://github.com/publiclab/Leaflet.DistortableImage/issues/328 "https://github.com/publiclab/Leaflet.DistortableImage/issues/328")

[https://github.com/publiclab/mapknitter/pull/805](https://github.com/publiclab/mapknitter/pull/805)