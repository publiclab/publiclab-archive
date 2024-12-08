---
title: Extensible OSS
tagnames: software, development
author: sashadev-sky
path: /notes/sashadev-sky/08-12-2019/extensible-oss.md
nid: 20513
uid: 555321

---

# Extensible OSS

by [sashadev-sky](../profile/sashadev-sky) August 12, 2019 20:19

August 12, 2019 20:19 | Tags: [software](../tag/software), [development](../tag/development)

Leaflet brands itself as an extensible library; it has readable source code, thorough documentation, and a large plugin ecosystem. "Extensible" was just another adjective to me before I started working on Leaflet.DistortableImage (LDI). Now its synonymous to an invitation to build things outside of the box.

Here's a simple, yet clever, example used in LDI:

**L.Map.BoxZoom** ---\> **L.Map.BoxSelector**

---------

-><-

A handler I wrote for Leaflet.DistortableImage to address multiple image selection. It creates a temporary bounding box on shift + drag to target a large area of images for selection. Build time: ~10 min.![image description](/i/34507.gif "bx.gif")

The actual implementation is used by Leaflet as a 'boxZoom' handler for zooming into the selected area. Extending it for a completely different purpose was fun and relatively simple.

How is this any more interesting than the Bootstrap 4 checkbox alignment bug you created a temporary solution for? Leaflet's extensible API allows you to implement new ideas without having to resort to hacky or unmaintainble solutions. In fact, their API encourages and helps you do this efficiently.

More importantly, a solution is more interesting when there are multiple perspectives. I am starting to see LDI being used by others to develop completely different ideas, and thinking about how I can make our API more extensible as well.