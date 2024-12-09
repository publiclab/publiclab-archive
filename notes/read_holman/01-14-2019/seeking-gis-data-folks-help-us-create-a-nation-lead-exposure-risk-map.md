---
title: 'Seeking GIS / Data folks: Help us create a nation Lead Exposure Risk map.'
tagnames: mapping, blog, request, lead, risk, risk-assessment, data-science
author: read_holman
path: /notes/read_holman/01-14-2019/seeking-gis-data-folks-help-us-create-a-nation-lead-exposure-risk-map.md
nid: 18118
uid: 540243

---

# Seeking GIS / Data folks: Help us create a nation Lead Exposure Risk map.

by [read_holman](../profile/read_holman) January 14, 2019 22:51

January 14, 2019 22:51 | Tags: [mapping](../tag/mapping), [blog](../tag/blog), [request](../tag/request), [lead](../tag/lead), [risk](../tag/risk), [risk-assessment](../tag/risk-assessment), [data-science](../tag/data-science)

----

Background on lead at: publiclab.org/lead

---

**Overview**

Quite a bit of public data exists now that, if brought together, can paint the picture of lead exposure within neighborhoods across the country. This information is useful to a couple audiences: Concerned citizens can see what their risk is; this is general. More specifically and strategically: Community scientists and activists can prioritize where they work. And Public Health officials can prioritize where they work.

There are a few efforts out there, but much of it is local (particular to one city and/or state), or is incomplete or due for an upgrade. We’re seeking data scientists, epidemiologists, and GIS folks to build on these efforts. 

The output is a simple map with lead risk scores presented by a geographical unit (census track, neighborhood, etc). The effort should be done in the open and documented (presumably on github, but maybe also here on publiclab.org).

If this is interesting to you, let us know and we can figure out how to work together.

--- 

**The following are examples of work in this area. Each is useful and has strengths but (I think) insufficient.**

##Example 1: Washington State Department of Health

![image description][1]

Source: https://fortress.wa.gov/doh/wtn/WTNPortal/#!q0=4718

Childhood Lead Risk Map
For this measure we combined two variables: Percent people living below the 125% Federal Poverty Level (FPL) and Percent Housing built before 1980 (and weighted by era built).

Information About the Data
In addition to the census of every U.S. household every 10 years, as required by the U.S. Constitution, the Census Bureau has a sub-sample, yearly survey called the American Community Survey (ACS). This representative sample-based survey gathers characteristics for a subset of the entire population of the U.S. each year.

You can find supporting documentation on code lists, subject definitions, data accuracy, and statistical testing on the ACS website, Data and Documentation section. You can find sample size and data quality measures (including coverage rates, allocation rates, and response rates) on the ACS website in the Methodology section.

##Example 2: Vox (with Washington State Department of Health)
![image description][2]

Source: https://www.vox.com/a/lead-exposure-risk-map 
Github: https://github.com/voxmedia/data-projects/tree/master/vox-lead-exposure-risk

From the article: “The trouble is that exposure risk is surprisingly difficult estimate, due to a variety of state-by-state differences in reporting standards. So we worked with epidemiologists in Washington state to estimate risk levels in every geographic area in America…

Our map uses a methodology that Washington State’s Department of Health pioneered earlier this year to estimate kids’ risk of lead exposure in different neighborhoods. Their mission was to determine how to focus scarce public health dollars on the kids most at risk of being poisoned by lead. We worked with one of the chief epidemiologists who created the map, Rad Cunningham, to replicate the state’s methodology nationally and apply it to all 72,241 census tracts in the United States.”

##Example 3: Reuters

![Screen shot of national map made by Reuters][3]

Source: https://www.reuters.com/investigates/special-report/usa-lead-testing/#article-off-the-charts 

From the article: “Most U.S. states disclose data on the percentage of child blood tests that show elevated levels of lead. Yet this data, often for statewide or county-wide populations, is too broad to identify neighborhoods where children face the greatest risk.

Instead, Reuters sought testing data at the neighborhood level, in census tracts or zip code areas, submitting records requests to all 50 states.

U.S. census tracts are small county subdivisions that average about 4,000 residents apiece. Zip codes have average populations of 7,500. In each area, a relatively small number of children are screened for lead poisoning each year.

Reuters found 2,606 census tracts, and another 278 zip code areas, with a prevalence of lead poisoning at least twice Flint’s rate."

  [1]: /i/28825.png "Screen_Shot_2019-01-14_at_2.49.27_PM.png"
  [2]: /i/28824.png "Vox_map_screenshot.png"
  [3]: /i/28823.png "Screen_Shot_2019-01-14_at_2.45.04_PM.png"

---

If you're a data guru, GIS epidemiologist, or just someone who wants to contribute to this effort, post a comment below or *reach out to Read Holman at read@publiclab.org*. Thanks!