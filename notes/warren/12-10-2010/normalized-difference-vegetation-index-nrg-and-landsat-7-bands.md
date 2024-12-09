---
title: 'Normalized Difference Vegetation Index, NRG, and Landsat 7 bands'
tagnames: near-infrared-camera, ndvi, landsat, satellite-imagery
author: warren
path: /notes/warren/12-10-2010/normalized-difference-vegetation-index-nrg-and-landsat-7-bands.md
nid: 23
uid: 1

---

# Normalized Difference Vegetation Index, NRG, and Landsat 7 bands

by [warren](../profile/warren) December 11, 2010 01:18

December 11, 2010 01:18 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [ndvi](../tag/ndvi), [landsat](../tag/landsat), [satellite-imagery](../tag/satellite-imagery)

----

OK, for reference, NDVI is often based on Landsat images. Landsat 7 (the current landsat) has these bands:

<p><strong>Spectral sensitivity of Landsat 7 Bands:</strong></p>
<table border="2" cellpadding="4" align="left">
<tbody>
<tr>
<td>
<p>Band</p>
</td>
<td>Wavelength Interval</td>
<td>
<p>Spectral Response</p>
</td>
</tr>
<tr>
<td>1</td>
<td>0.45-0.52 µm</td>
<td>Blue-Green</td>
</tr>
<tr>
<td>2</td>
<td>0.52-0.60 µm</td>
<td>Green</td>
</tr>
<tr>
<td>3</td>
<td>0.63-0.69 µm</td>
<td>Red</td>
</tr>
<tr>
<td>4</td>
<td>0.76-0.90 µm</td>
<td>Near IR</td>
</tr>
<tr>
<td>5</td>
<td>1.55-1.75 µm</td>
<td>Mid-IR</td>
</tr>
<tr>
<td>6</td>
<td>10.40-12.50 µm</td>
<td>Thermal IR</td>
</tr>
<tr>
<td>7</td>
<td>2.08-2.35 µm</td>
<td>Mid-IR</td>
</tr>
</tbody>
</table>
<p style="clear: both;">Meaning it captures an image for each range of wavelengths.&nbsp;</p>
<p>NDVI is probably Band 4 for near-infrared, and Bands 1-3 for visible light. But I did find that often vegetative imagery is presented in what's called "NRG" -- that is, instead of Red-Green-Blue, those colors are swapped for Near-infrared-Red-Green. That means near-infrared (which correlates to plants) is in red color, and brighter red correlates positively with NDVI... that is to say bright red color in an NRG, which is the most infrared and the least Red+Green, means the healthiest plants.</p>
<p>Like this: <a href="http://landsat.gsfc.nasa.gov/education/compositor/graphics/tokyo_432.jpg" title="http://landsat.gsfc.nasa.gov/education/compositor/graphics/tokyo_432.jpg">http://landsat.gsfc.nasa.gov/education/compositor/graphics/tokyo_432.jpg</a></p>
<p>I read a bit more about it here: <a href="http://landsat.gsfc.nasa.gov/education/compositor/" title="http://landsat.gsfc.nasa.gov/education/compositor/">http://landsat.gsfc.nasa.gov/education/compositor/</a> (scroll down to the RGB=NRG section)</p>
<p>So we can totally do that -- in a sense, with a regular digital camera paired with a modified-for-IR camera, we have the Landsat Bands 1-4, and actually a little beyond 4 as well.</p>
