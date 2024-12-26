---
title: "Research Paper: Correlating NDVI with Lichen Responses to Air Pollution"\ntagnames: 'ndvi, nir, spectrometry, air-quality, photosynthesis, academic-journal, lichen, research-curation-fellows, bioindicators'
author: fongvania
path: /notes/fongvania/04-25-2022/research-paper-correlating-ndvi-with-lichen-responses-to-air-pollution.md
nid: 30586
uid: 754846

---

![](https://publiclab.org/public/system/images/photos/000/046/514/original/8418527367_20acb1828c_b.jpg)

# Research Paper: Correlating NDVI with Lichen Responses to Air Pollution

by [fongvania](../profile/fongvania) | April 25, 2022 06:50

April 25, 2022 06:50 | Tags: [ndvi](../tag/ndvi), [nir](../tag/nir), [spectrometry](../tag/spectrometry), [air-quality](../tag/air-quality), [photosynthesis](../tag/photosynthesis), [academic-journal](../tag/academic-journal), [lichen](../tag/lichen), [research-curation-fellows](../tag/research-curation-fellows), [bioindicators](../tag/bioindicators)

----

*Cover Image: Photo by Ken-ichi Ueda,  [Flickr][1], [CC BY-NC 2.0][2]*

A 2001 paper titled "[Photosynthesis, Chlorophyll Integrity, and Spectral Reflectance in Lichens Exposed to Air Pollution](https://www.researchgate.net/publication/11938950_Photosynthesis_Chlorophyll_Integrity_and_Spectral_Reflectance_in_Lichens_Exposed_to_Air_Pollution)" identifies the relationship between elemental concentrations in _Ramalina lacera_ lichen (pollutants the lichen has absorbed from the air), and how well the lichen performs photosynthesis. This study is interesting because it is one of few studies that examines spectral reflectance (what wavelengths a specimen reflects) in lichen bioindicators, and it can serve as a "proof-of-concept" for a method that can be implemented with community science tools. More specifically, this method would involve using near-infrared camera or a spectrometer to calculate the [normalized difference vegetation index (NDVI)](https://publiclab.org/ndvi), a measure of vegetation health, of lichen specimens, which could then be transformed into information about pollutants in the air.

This note summarizes the methods and results from this study and offers ideas for modification for a community science application.

## METHODS

The study determined elemental concentration of lichen via [inductively coupled plasma atomic emission spectrometry (ICP--AES)](https://publiclab.org/notes/read_holman/12-12-2018/list-of-methods-for-lead-detection-monitoring#Laboratory-based+testing+methods+%28most+expensive,+most+reliable%29), which is a common approach for lichen elemental analysis.

The study also measured various indicators of photosynthetic ability, including the following:

- Chlorophyll content: Measured after extraction with a solvent
- Integrity of chlorophyll: Chlorophyll 'a' and phaeophytin 'a' concentrations were determined with a spectrophotometer , and the ratio is a proxy for chlorophyll integrity because phaeophytin can interfere with photosynthesis. Read more [here](https://www.alsenvironmental.co.uk/media-uk/pdf/datasheets/drinking-water/the-analysis-for-chlorophyll-a-and-phaeophytin_td_uk.pdf)
- Chlorophyll Fluorescence: [Chlorophyll fluorescence---a practical guide](https://academic.oup.com/jxb/article/51/345/659/652534) has a good overview of how this analysis works, but fundamentally, the more fluorescence (emitted light), the lower the ability of the lichen to photosynthesize. This is measured with a fluorometer.
- Net Photosynthetic Rate: CO2 exchange rate of the lichen is measured with a infrared gas analyzer.
- Spectral Reflectance and NDVI: The average reflectance of the lichen in the near infrared (NIR)
range, wavelengths between 800-1000nm, with a Li-Cor LI 1800 field spectrometer.

## RESULTS

The study found a positive correlation between photosynthetic rate, chlorophyll content, NDVI, and K (potassium) content. It also found an inverse correlation between NDVI and Ba, Cr, Cu, and Ni content, which is in line with studies showing that heavy metals like Cu and Pb have detrimental impacts on lichen health and photosynthetic ability. The following quotes from the paper summarize related, promising work comparing NDVI with elemental concentrations:
<br>
![image description](/i/46516.jpg "photo_1.jpg")![image description](/i/46517.jpg "photo_2.jpg")

## NDVI, Lichens, and Community Science

This paper and related research indicate that community science methods using [NIR imaging](https://publiclab.org/wiki/ndvi) (using a modified camera or off-the-shelf NIR camera) and/or [spectrometry](https://publiclab.org/wiki/tag/parent:spectrometry) with lichen to calculate NDVI can be a viable proxy for relative air pollutant concentration. Possible methods include: 

- Comparing NDVI for the same species of lichen sampled in various locations to air monitor data to develop a response curve for pollutants of interest, then use the response curve to estimate level of pollutants for lichen sampled in areas without a reference monitor.
- Comparing compare the NDVI of lichen sampled in a "clean" air area with that of lichen sampled near polluted areas to determine the relative severity of the pollution. 

Note that NDVI analysis will not provide measurements of pollutants in the air, rather, it is most useful to compare relative lichen health within a geographic region with similar weather, rain, and sun conditions. Care should be taken to minimize non-air quality-related effects that would impact the NDVI, including, but not limited to, differences in lichen species, temperature, precipitation, and insolation. Additional research quantifying the impact of these and other non pollution-related parameters is needed to adjust for these effects and draw out only the pollution-related effects on relative NDVI.

Garty, J. & Tamir, O & Hassid, I & Eshel, Amram & Cohen, Y & Karnieli, Arnon & Orlovsky, L... (2001). Photosynthesis, Chlorophyll Integrity, and Spectral Reflectance in Lichens Exposed to Air Pollution. Journal of environmental quality. 30\. 884-93\. 10.2134/jeq2001.303884x.


  [1]: https://www.flickr.com/photos/ken-ichi/8418527367
  [2]: https://creativecommons.org/licenses/by-nc/2.0/