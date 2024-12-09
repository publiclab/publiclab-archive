---
title: 'Indoor microbiome sampler (vacuum adapter)'
tagnames: 3d-printing, indoor, low-cost, indoor-air-quality, with:haines241, microbiome
author: nshapiro
path: /notes/nshapiro/04-15-2019/indoor-microbiome-sampler-vacuum-adapter.md
nid: 19058
uid: 380298

---

![](https://publiclab.org/public/system/images/photos/000/031/505/original/title_image.png)

# Indoor microbiome sampler (vacuum adapter)

by [nshapiro](../profile/nshapiro) April 15, 2019 00:10

April 15, 2019 00:10 | Tags: [3d-printing](../tag/3d-printing), [indoor](../tag/indoor), [low-cost](../tag/low-cost), [indoor-air-quality](../tag/indoor-air-quality), [with:haines241](../tag/with:haines241), [microbiome](../tag/microbiome)

----

**Indoor microbiome sampler (vacuum adapter)**

By Gabby Reich, Sarah Haines, Karen Dannemiller, and Nick Shapiro

Recent expansions in next-generation DNA sequencing methods and research are illuminating the intricately entwined exchanges between humans, pets, chemicals, and indoor microbiomes. Understanding the identity and diversity of microbes that comprise the indoor microbiomes is, for example, progressively indicating the fungal causal mechanisms of associations between [dampness and asthma][1] development and how globally rising CO2 levels have [increased the allergenicity][2] of common fungi. As North Americans spend 90% of their time indoors, apprehending the full complexity of indoor environments is key to a robust understanding of human health.  While the practices of DNA extraction are complex and require a highly controlled lab environment, and high-throughput genetic sequencing remains expensive, simplifying and reducing costs in the sampling process can decrease financial and technical barriers to sampling. Reducing the price and complexity of indoor microbiome sampling enables community scientists to collect robust field samples, freeze them, and send them to a partnering lab for analysis. A low-cost and community science-friendly method additionally reduces the financial and logistical hurdles in developing non place-based indoor microbiome study designs, such as studying microbiomes across specific building types, proximity to infrastructures, or with specific air purifiers.

**The vacuum adapter**

Following her work using aquarium pumps with inverted diaphragms to pull known quantities of air through color changing tubes in order to [quantify domestic formaldehyde][3] levels, Karen Dannemiller sought out another widely available consumer product that could provide the suction needed to pull indoor microbiomes into a small filter. Sarah Haines worked with Dr Dannemiller to develop a 3D printed ring insert that fits into the hose of a Mighty Mite vacuum based on a previous adapter. Their adapter turns a common consumer device into a tool to quantify microbiome diversity and concentration, allowing sampler kits to be shipped cheaply without heavy and expensive scientific vacuum devices. Below is their original design.  

![First Adapter][4]

.STL filer downloadable [here][5]. 

This initial design was an excellent proof of concept but had two design shortcomings 1) sometimes the filter would get sucked into the vacuum requiring the vacuum to be modified by drilling a hole in the vacuum hose and inserting a rod just beneath the end of the filter to prevent its movement and 2) the fit between the adapter and the filter is extremely tight (to reduce the likelihood of it coming loose). Needing to modify the vacuum to collect samples is not viable for community science, and inserting the filter into the adapter was difficult—some worried they would either break the adapter or the filter when pushing it into position. To facilitate transitioning this innovation from cost savings for professional scientists to accessibility for community scientists, Gabby Resch and Nicholas Shapiro iterated on the design. They added long slender arms with angled tips to hold the filter in place, and slightly enlarged the opening of the adapter to ease insertion and removal of the filter. They additionally added a larger face plate so that the adapter could be used on a wider range of vacuums, up to and including the large openings of shop-vacs. After five iterations the filter fit smoothly into the adapter, did not get sucked into the belly of the vacuum for both domestic and shop vacuums, and did not require any modification of the vacuum hose.

![Extended adapter][6]

.STL file downloadable [here][7].

.blend file downloadable [here][8].

In the latest version, the arms are still 1/4 to 1/8 of an inch too long. In large opening vacuums, like shop-vacs, the filter will move down a small distance but it won’t be pulled through. A design imperfection but not one that is mission critical. In domestic models the smaller diameter hoses press in on the adapter arms and we did not observe any filter movement. 

Shapiro and Resch measured the openings of 13 different domestic vacuum models across 8 different manufacturers in Toronto and the adapter fit all models. 

To sample an indoor microbiome with this method you will need:

 - A domestic or shop vacuum
 - Print the above file (use 100% infill in your printer settings just to be safe)
 - Filters to collect the sample (we used [these][9])
 - As many zip-top poly bags as samples you plan to collect
 - Some nitrile or latex gloves for handling the filter
 - Alcohol swabs to sterilize the filter before using it
 - A medium binder clip (sterilized) to hold the collected sample folded shut
 - A template for mapping out 2 square meters for the sample site

You will need to work with a laboratory, such as Brooklyn Bio or Dannemiller’s lab,  to analyze the samples and optimize the collection protocol. 

![Using the adapter][10]

Elizabeth Lara collecting a sample with the adapter and a conventional vacuum. 

  [1]: https://onlinelibrary.wiley.com/doi/abs/10.1111/ina.12072
  [2]: https://onlinelibrary.wiley.com/doi/abs/10.1111/gcb.12219
  [3]: https://onlinelibrary.wiley.com/doi/abs/10.1111/ina.12024
  [4]: /i/31509.png "Screen_Shot_2019-04-14_at_5.05.06_PM.png"
  [5]: https://drive.google.com/file/d/1A1-rlR1Dd6lRGxFU2EaWHIRn7GeVzcYR/view?usp=sharing
  [6]: /i/31511.png "title_image.png"
  [7]: https://drive.google.com/file/d/1ctYxSRW_lUg3HKq6RBRQe6h5lWcwANLx/view?usp=sharing
  [8]: https://drive.google.com/open?id=1ctYxSRW_lUg3HKq6RBRQe6h5lWcwANLx
  [9]: https://www.fishersci.com/shop/products/whatman-high-performance-cellulose-extraction-thimbles-30/09656k#?keyword=09-656K
  [10]: /i/32309.jpeg "IMG_3517.jpeg"