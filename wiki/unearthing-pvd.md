---
title: Unearthing Providence
tagnames: providence, rhode-island, style:presentation, northeast, seeks:responses, content, project, location:blurred, geo-storytelling, unearthing-pvd, zoom:9, ri
author: warren
path: /wiki/unearthing-pvd.md
nid: 21410
uid: 1

---

# Unearthing Providence

by [warren](../profile/warren), [sfrickel](../profile/sfrickel), [tmarlow](../profile/tmarlow), [srgonsalves1](../profile/srgonsalves1)

November 06, 2019 15:06 | Tags: [providence](../tag/providence), [rhode-island](../tag/rhode-island), [style:presentation](../tag/style:presentation), [northeast](../tag/northeast), [seeks:responses](../tag/seeks:responses), [content](../tag/content), [project](../tag/project), [location:blurred](../tag/location:blurred), [geo-storytelling](../tag/geo-storytelling), [unearthing-pvd](../tag/unearthing-pvd), [zoom:9](../tag/zoom:9), [ri](../tag/ri)

**A platform for historical data-driven analyses of industrial land use, story-mapping, and community organizing.**

<style>
#content p:first {
  font-size:1.8em;
  font-style: italic;
}
</style>
<br />

Welcome to *Unearthing Providence*, an interactive website designed to encourage and support public environmental history, local story mapping, and community organizing. <a href="#feedback">Join us!</a>

WHAT WE DO. *Unearthing Providence* brings urban history to life by recovering lost knowledge about past land uses in Providence and Rhode Island and making this information publicly available. We work to forge and strengthen  <a href="#related-projects">relationships</a> with Rhode Island community and social justice organizations, schools, and other academic and government partners in striving to build a more equitable, just and sustainable future for all Rhode Islanders.  

HOW WE DO IT. The heart of our project is an interactive <a href="#map">map</a> featuring site-specific <a href="#data">data</a> about every manufacturing facility that has operated in Rhode Island since the early 1950s. Soon, we will add historical information on other environmentally risky land uses such as gas stations, dry cleaners, and auto repair shops, as well as “green” land uses like urban parks, playgrounds, schools and community gardens. Using the data for  <a href="#analyses">analyses</a> of historical trends and in-depth studies of <a href="#featured-sites"> specific sites</a> promises to deepen public understanding of socio-ecological change and inform just and sustainable land use in one American city and state over the past century.

WHAT YOU CAN DO. Explore the site, <a href="#map">add a story</a> to the interactive map, post a comment, spread the word about *Unearthing Providence*. Do you have an idea about how your neighborhood could use the data to improve environmental quality in our city and state? Let us know!

WHO WE ARE. We are a collaboration between Brown University [Superfund Research Program](https://www.brown.edu/research/projects/superfund/), the [Institute at Brown for Environment and Society](https://www.brown.edu/academics/institute-environment-society/) (IBES), and [Public Lab](https://www.publiclab.org/). *Unearthing Providence* is supported by the [National Institute of Environmental Health Sciences](https://www.niehs.nih.gov/) and IBES, and with seed grants from Brown's [Office of the Vice President for Research](https://www.brown.edu/research/), the [Social Science Research Institute](https://www.brown.edu/initiatives/social-science-research/), and the [Data Science Initiative](https://www.brown.edu/initiatives/data-science/home). 

![NIEHS Logo](https://media-exp2.licdn.com/dms/image/C560BAQGwOGpkKI-39w/company-logo_200_200/0?e=1588204800&v=beta&t=35oz4PNNeCstvcFRErElT122gbVl_7B3TKBLnioGGi8) <img style="float: right;" src="https://www.brown.edu/academics/institute-environment-society/sites/brown.edu.academics.institute-environment-society/themes/ibes/img/logos/ibes-logo.png">       

****

<a id = "map"></a>
[map:layers:content:41.7:-71.5:Unearthing,toxicReleaseLayer]

<i style="color:#aaa;">Add photos and memories to help tell the story of these sites and their legacy.</i>

<a id = "featured-sites"></a>

<script>
// find map object and limit bounds/zoom
window[Object.keys(window).find(key => key.substr(0,3) === "map")]
  .setMaxBounds([
    [42.2102, -72.0204],
    [41.2272, -70.9618]
  ]).setMinZoom(9);
</script>

****

## Featured sites

The industrial sites cataloged include both currently operating and long-closed factories, jewelry manufacturers, gas stations, laundromats, and many other land uses, which may have a lasting impact on the land.

[notes:grid:unearthing-pvd-sites]

<a class="btn btn-primary" href="/post?tags=lat:41.0,lon:-71.0,unearthing-pvd,unearthing-pvd-sites&n=21350 ">Add your story</a>

<center><a href="/tag/unearthing-pvd-sites">More sites</a></center>

****

<h2 id="analyses">Analyses</h2>

A collection of in-depth research and analyses of the database are presented here, providing examples of the kinds of work the dataset makes possible. 

[notes:grid:unearthing-pvd-analyses]

<a class="btn btn-primary" href="/post?tags=lat:41.0,lon:-71.0,unearthing-pvd,unearthing-pvd-analyses&n=21350 ">Add an analysis</a>

<center><a href="/tag/unearthing-pvd-analyses">More projects</a></center>

****

![bookspines.png](/i/36369?s=o)

<h2 id="data">Where do the data come from?</h2>

We use computational techniques to extract information from historical manufacturing directories and old city directories. From these data, we can identify where industrial and other environmentally risky land uses occurred in the past, investigate how the same sites are being reused today, and identify potential sources of legacy contaminants. 

Here’s a short video that explains our basic approach: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/ut-nsDEAdcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Our data collection efforts are ongoing and can be replicated in other cities and states. Technical information on data sources, coding, and data management for academic and government researchers can be found at the [Brown Digital Repository](https://repository.library.brown.edu/studio/item/bdr:841108/)

The full dataset is [available here](https://gist.githubusercontent.com/jywarren/f76c89a8c8ae3ad3f7d28cc025834c5b/raw/6e14ab64dad7114fb8ae56e057347374b6be759b/socioeco.json) (GeoJSON format, 4.6mb)

****

<h2 id="related-projects">Relationships</h2>

One interesting part about the project we’ve developed is that it can be used as a foundation for new storytelling projects, which overlay narratives or new datasets on top of the industrial sites database (above). 

By being a part of the Public Lab network, this project links into dozens of other local environmental projects around the world, as well as [a range of environmental topics of concern](/tags) and the grassroots communities of interest that have formed around them. 

Here are some of the projects which have built on the *Unearthing Providence* dataset:

[nodes:grid:unearthing-pvd-projects]

<a class="btn btn-primary" href="/post?tags=lat:41.0,lon:-71.0,unearthing-pvd,unearthing-pvd-projects&n=21350 ">Add your project</a>

<center><a href="/tag/unearthing-pvd-projects">More projects</a></center>


****

<!-- [![cranston-printworks.jpg](/i/36277)](/i/36277?s=o) -->



****

<h2 id="feedback">Feedback</h2>

This site is under development, and we would love your feedback; please use the form below. Thank you!

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScywVs92CCRxV9M7TnzNa7fNYhxB6lJJAWNlzEb42eKShwqhg/viewform?embedded=true" width="640" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>