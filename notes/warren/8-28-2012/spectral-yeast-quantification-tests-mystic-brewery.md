---
title: 'Spectral yeast tests at Mystic Brewery'
tagnames: spectrometer, yeast, brewing, quantitative, absorption-spectrometry, beer
author: warren
path: /notes/warren/8-28-2012/spectral-yeast-quantification-tests-mystic-brewery.md
nid: 3547
uid: 1

---

![](https://publiclab.org/sites/default/files/IMG_0570.JPG)

# Spectral yeast tests at Mystic Brewery

by [warren](../profile/warren) August 28, 2012 22:02

August 28, 2012 22:02 | Tags: [spectrometer](../tag/spectrometer), [yeast](../tag/yeast), [brewing](../tag/brewing), [quantitative](../tag/quantitative), [absorption-spectrometry](../tag/absorption-spectrometry), [beer](../tag/beer)

----

Today, Will (from Public Lab collaborator [Parts & Crafts](http://partsandcrafts.org)) and I visited Brian at [Mystic Brewery](http://mystic-brewery.com), a small brewery outside of Boston, because he's a biochem PhD and had some ideas about using a spectrometer to streamline their yeast counting. We did some encouraging tests with the [countertop spectrometer prototype](http://www.kickstarter.com/projects/jywarren/public-lab-diy-spectrometry-kit).

<a href="https://www.flickr.com/photos/jeffreywarren/7883102550/" title="Brian measuring out some wort by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8301/7883102550_7d80d96513_m.jpg" width="240" height="180" alt="Brian measuring out some wort"></a><a href="https://www.flickr.com/photos/jeffreywarren/7883102076/" title="Barrels of Mystic beer! by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8446/7883102076_657cae1c2b_m.jpg" width="240" height="180" alt="Barrels of Mystic beer!"></a>

Mystic's beers are great (I did some research ahead of time :-P).  Brian and the Mystic crew propagate (aka cultivate) their own yeast, which is part of what makes their beer so distinctive. They keep it temperature controlled and bubble air through it and do a daily yeast cell count manually on a microscope!

<a href="https://www.flickr.com/photos/jeffreywarren/7883121494/" title="Manual yeast cell counting with a microscope by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7267/7883121494_f17f78cf79_m.jpg" width="240" height="180" alt="Manual yeast cell counting with a microscope"></a><a href="https://www.flickr.com/photos/jeffreywarren/7883120972/" title="Yeast cell counting with a microscope! by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7120/7883120972_577c2fda15_m.jpg" width="240" height="180" alt="Yeast cell counting with a microscope!"></a>

Brian used to work at a big brewery, where they had a visible-range spectrometer ($$$) and would use the amount of absorption at 600 nanometers as a measure of yeast quantity, which is much faster than counting dozens or hundreds of cells by hand. So we poured a pre-fermentation wort into a petri dish and compared it to a middle-of-fermentation sample.

<a href="https://www.flickr.com/photos/jeffreywarren/7883113994/" title="Testing wort with SpectralWorkbench by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8437/7883113994_1e1ccc4659.jpg" width="500" height="375" alt="Testing wort with SpectralWorkbench"></a>

We used the [new "darkroom-style" interface at Spectral Workbench](https://spectralworkbench.org/capture?alt=true) (see below) on the latest Chrome, and the [readings were nice and clear](https://spectralworkbench.org/sets/show/26).

<a href="https://www.flickr.com/photos/jeffreywarren/7876264252/" title="Spectral Workbench new interface by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8434/7876264252_9004126f5b.jpg" width="500" height="304" alt="Spectral Workbench new interface"></a>

We talked about a possible way to skip daily yeast counts by first finding a correlation -- both measuring the intensity at 600nm and doing cell counts, and comparing the results. Once the relationship between absorption at 600 nm and cell count is established, daily spectral scans would likely be enough and weekly cell counts could confirm this. Anyhow I have to lend Brian a spectrometer as soon as we've built a few more, and he can start collecting more data. But the data we collected (below) shows that there's a very broad-band difference between pre and post fermentation, so it's likely we could get quantitative pretty easily, especially on the same device. 

<iframe width='500px' height='400px' border='0' src='https://spectralworkbench.org/sets/embed/26?height=400'></iframe>

Though apparently not many small breweries cultivate their own yeast in this way, we talked about how spectral analysis could be used simply for consistency in color. But Brian pointed out that many of the molecules responsible for taste would be most detectable in the double-bond region, which is outside the range of our device. 

Remember -- if you have case studies with a spectrometer you'd like to share, [post them on this site](/note/add) or send them to jeff@publiclaboratory.org and we'll feature them [on the Kickstarter page](http://www.kickstarter.com/projects/jywarren/public-lab-diy-spectrometry-kit)!

<a href="https://www.flickr.com/photos/jeffreywarren/7883100568/" title="Brian looking scientific by jeferonix, on Flickr"><img src="https://farm9.staticflickr.com/8296/7883100568_9fe27dd2c9.jpg" width="500" height="375" alt="Brian looking scientific"></a>