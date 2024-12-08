---
title: PM 2.5 Air Quality Index for Keller, Texas
tagnames: analysis, air-quality, maps, dust, pm, texas, air-sensors, purpleair, replication:17007
author: jiteovien
path: /notes/jiteovien/08-28-2018/pm-2-5-air-quality-index-for-keller-texas.md
nid: 17012
uid: 540008

---

# PM 2.5 Air Quality Index for Keller, Texas

by [jiteovien](../profile/jiteovien) August 28, 2018 21:23

August 28, 2018 21:23 | Tags: [analysis](../tag/analysis), [air-quality](../tag/air-quality), [maps](../tag/maps), [dust](../tag/dust), [pm](../tag/pm), [texas](../tag/texas), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [replication:17007](../tag/replication:17007)

I downloaded Purple Air data for Keller, Texas, as described in the [Download & Analyze Purple Air Data activity](https://publiclab.org/notes/jiteovien/08-28-2018/download-analyze-your-purple-air-data).

I was curious over the course of 1 week, what percentage of the time are people that live in Keller, Texas. being exposed to "Good", "Moderate", "Unhealthy for sensitive groups" or "Unhealthy" categories on the AQI index. This seemed especially relevant as I've learned about how the EPA federally regulates particulate matter from conversations with the Rhode Island Department of Environmental Management. They essentially look for short term spikes when the air is questionable. If it is below the EPA limit, then the state is compliant with federal standards. However, what the states aren't really held accountable for in their air quality monitoring is if certain parts of the state are living with more prolonged exposure to mediocre air while other parts of the state have pristine air - and whether or not to do anything to more evenly distribute the environmental burden.

Sidenote: I do recognize that this data is only for 1 week so it may not be representative for typical exposures in Keller.

This is a typical AQI chart for the United States that I've used in my analysis:  
![image description](/i/26372.png "Screen_Shot_2018-08-28_at_4.35.56_PM.png")

This data is for the week of Aug 21-28, 2018\. First I referenced this website that has a [conversion chart for mass concentrations into AQI](https://aqicn.org/calculator/) that I have included below.

![image description](/i/26375.png "Screen_Shot_2018-08-28_at_12.04.40_PM.png")

Then, I created the charts using excel. I'm not an excel pro but with some googling I was able to figure out some formulas that would get me what I wanted. For the PM 2.5 column of data I essentially asked excel to tally how often the AQI was above the endpoints for each AQI category from the above image (12, 35.5, 55.5 etc). Below is a screenshot of one of the formulas:

![image description](/i/26376.png "Screen_Shot_2018-08-28_at_5.13.52_PM.png")

The colors on the following pie charts may be a bit confusing but essentially, for the first 3 pie charts, I wanted to identify how often the AQI is in _one area_ of the chart vs another _area_, as opposed to comparing each individual category on the same chart.

This pie chart shows that the air is only in the best AQI category - "Good"- for 3% of the time over the course of the week. ![image description](/i/26373.png "Pie1.png")

This pie chart shows that the air in Keller is typically in the "Good" or "Moderate" category over the course of the week. 93% of the time.

![image description](/i/26374.png "Pie2.png")

This pie chart shows that the air in Keller is _never_ in the "Unhealthy" (for everyone) category, 0%. Or, in other words, the air is always either "Good", "Moderate" or "Unhealthy for sensitive groups". ![image description](/i/26380.png "Pie3.png")