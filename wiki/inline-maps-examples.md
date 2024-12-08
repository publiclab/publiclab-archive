---
title: Inline maps examples
tagnames: parent:inline-maps, inline-maps
author: warren
path: /wiki/inline-maps-examples.md
nid: 22995
uid: 1

---

# Inline maps examples

by [warren](../profile/warren)

March 03, 2020 18:00 | Tags: [parent:inline-maps](../tag/parent:inline-maps), [inline-maps](../tag/inline-maps)

This page demonstrates how to use an embedded iframe to do more customized interactive maps, if the [inline maps](/inline-maps) system does not provide enough customizability. 

The following is a map embedded using an `<iframe>` in HTML (actually [this page](https://github.com/publiclab/leaflet-environmental-layers/blob/master/example/unearthing-pvd.html)), followed by a `<script>` tag which affects the rendered map (in this case, simply to make it full-width on the page). 

To see how this works, view [this page's code here](https://publiclab.org/notes/raw/inline-maps-examples).

<iframe class="leaflet" src="https://jywarren.github.io/leaflet-environmental-layers/example/unearthing-pvd" style="border:0;height:450px;position: absolute;width: 100vw;"></iframe>

<script>function resizeMap() { console.log('go');$('iframe.leaflet').css('margin-left', -($('body').width() - $('.container').width())/2); }; resizeMap();$(window).on('resize', resizeMap); </script>

<div style="height: 460px;">&nbsp;</div>