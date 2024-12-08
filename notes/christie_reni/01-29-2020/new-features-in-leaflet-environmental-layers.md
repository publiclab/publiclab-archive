---
title: New UI features in Leaflet Environmental Layers
tagnames: blog-submission
author: christie_reni
path: /notes/christie_reni/01-29-2020/new-features-in-leaflet-environmental-layers.md
nid: 22425
uid: 630062

---

# New UI features in Leaflet Environmental Layers

by [christie_reni](../profile/christie_reni) January 29, 2020 18:03

January 29, 2020 18:03 | Tags: [blog-submission](../tag/blog-submission)

Leaflet environmental layers library has some new features for browsing layer data. Among them is the new layers menu that replaces leaflet's default layers control and a minimal mode control that changes how markers are rendered on the map.

#### Layers Menu

The new layers menu shows more layer information when compared to the default layer control used previously. Each layer has a short description of the type of data the layer has and also displays whether a layer has near-real-time or real-time data as 'NRT/RT'.![image description](https://publiclab.org/i/37812.png "layer-menu.png")

There is an info button on each layer that displays more information about the data for that layer in a modal that can be dismissed.

![image description](https://publiclab.org/i/37814.png "info.png")

If a layer accepts reports or contributions from the community, it displays a report or a contribute button so that a user can go to the report or contributing page right from the LEL map.

![image description](https://publiclab.org/i/37811.png "crisner.github.io_leaflet-environmental-layers_example_index.html_(6).png")

Layers from the same source are now grouped. These groups can be expanded to show the layers that are part of it. The layers are also filtered out if the map view does not intersect with the layers' extents that consist of its bounds and zoom.

![image description](/i/37815.png "crisner.github.io_leaflet-environmental-layers_example_index.html_(3).png")

When the map's view intersects with another layer's extents while a user is browsing the map, a notification is displayed near the layers menu button displaying the number of new layers in the view. These layers can be accessed in the layers menu.

![newmarker](https://user-images.githubusercontent.com/29401459/72167496-39518480-33f1-11ea-8f7d-a891d8fe1252.gif)

#### Minimal mode

This feature was added to make it easier to move around and explore the map when a large set of data was displayed on the map. The default mode view is the regular view where the map renders icons associated with each layer. These icons may be images of types such as png or svg. The map becomes noticeably slow to move when there are a lot of markers loaded on the map.

![image description](/i/37819.png "127.0.0.1_5500_example_index.html_(17).png")

The minimal mode loads small circles as marker icons with colours associated with each layer. These markers are light on the page and the lag if any is barely noticeable. These minimal mode markers also attempt to improve the view's clarity which in the default mode would look crowded obstructing the markers of other layers from view.

![image description](/i/37820.png "127.0.0.1_5500_example_index.html_(16).png")

![image description](/i/37821.png "crisner.github.io_leaflet-environmental-layers_example_index.html_(8).png")

The controls for this can be found on the left side of the map below the zoom controls. Clicking on the top button loads the default markers on the page while clicking on the button with the circle-dot icon replaces the regular markers with Leaflet's circle markers which extends the [path](https://leafletjs.com/reference-1.6.0.html#path "https://leafletjs.com/reference-1.6.0.html#path") class.

![image description](https://publiclab.org/i/37816.png "crisner.github.io_leaflet-environmental-layers_example_index.html_(7).png")

Other features such as the ability to search the map, and generate embed code have been added but the layers menu and the minimal mode feature have been the bigger feature additions to the LEL library.