---
title: How to evaluate low cost air quality sensors
tagnames: air-quality, sensors, pm, particulate-matter, activity:sensors, air-sensors, purpleair, purple-air, collocation, air-sensor-eval
author: jiteovien
path: /notes/jiteovien/08-29-2018/how-to-evaluate-low-cost-air-quality-sensors.md
nid: 17020
uid: 540008

---

# How to evaluate low cost air quality sensors

by [jiteovien](../profile/jiteovien) August 29, 2018 21:45

August 29, 2018 21:45 | Tags: [air-quality](../tag/air-quality), [sensors](../tag/sensors), [pm](../tag/pm), [particulate-matter](../tag/particulate-matter), [activity:sensors](../tag/activity:sensors), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [purple-air](../tag/purple-air), [collocation](../tag/collocation), [air-sensor-eval](../tag/air-sensor-eval)

The Environmental Protection Agency (EPA) has a pretty good [powerpoint](https://www.epa.gov/sites/production/files/2018-01/documents/collocation_instruction_guide.pdf) that details the process of evaluating an air quality sensor. While there are research studies that have evaluations of several different types of sensors, these types of characterizations may not reflect the sensor that you have and the environment you are using it in. I wanted to summarize this process here on the Public Lab site while also offering some reflections on my experience doing this.

**Why would I need to evaluate my low cost sensor?**

- You want to know what types of conditions are best for using your low cost sensor
- You just bought a low cost sensor and you want to gain more confidence using it.
- You have data from a low cost sensor that you want to use as argument but others are questioning the validity of its readings

**How might you want to evaluate performance?:**

- Test in different environments (rain, dry, hot, cold) and see if you notice inexplicably high or low readings.
- Collocation with a Federal monitor

**Test in different environments:**

This is a hard thing to do and would likely require a robust lab setup. However if this is of interest, I would recommend doing this evaluation in an indoor area where you anticipate that the PM levels will be relatively constant. To vary something like humidity in an easy way, you could place a wet sponge on or near the sensor, and track the humidity levels with a humidity sensor.

**Collocation with a Federal Monitor:**

Collocation is the process by which a reference monitor and non-reference sensor (such as an optical sensor) are operated at the same time and place under real world conditions for a defined evaluation period.

_Step 1:_ Choose what brand (or brands) of low cost sensor you want to test. If possible, acquire at least 2-3 of each brand. This is because electronics typically do have variation in performance. If you evaluate several of each one then you can estimate how wide that variation is.

_Step 2:_ Contact your State's Environmental Department - Air Quality Monitoring division.

Find your state's department [here](https://www.epa.gov/home/health-and-environmental-agencies-us-states-and-territories).

I worked with the Rhode Island Department of Environmental Management this summer. They were very willing to work with me. They gave me access to data that the general public cannot access, and allowed me access to their federal reference monitors. My general impression is that these people generally care about the environment and are eager to help explore research questions that they usually can't pursue because of EPA's strict requirements.

If possible, ask if you can work specifically with a Federal Equivalent Method (FEM) sensor. These log hourly data, as opposed to Federal Reference Method (FRM) sensors that log 24 hour averages. The more data points you have, the better you can evaluate your sensor. Also, ensure upfront that they will make sure you can get access to the FEM/FRM data because this is not always straightforward.

_Step 3:_ Making measurements

Some things to consider when you actually go to collocate and collect data

- Make sure you've thought about your power supply. I had to go back one day to bring an extension cord.
- Take notes! Log the date and time of your data collection. Log anything that comes up as a concern or issue
- Make sure your data storage works well
  - If it is wifi-based, you will need to find a wifi signal that you can use where you are collecting data
  - If it is an SD card, check to make sure it logs to the SD card in a neat format. For example, it is easy for numbers to get jumbled which will make it painful to analyze
- Check the weather
  - Before considering how temperature or humidity affect readings, I would suggest doing a comparison when the weather is relatively consistent.
  - If you do want to see how it operates in different weather, however, think about enclosures or larger shelters that will not affect the sensor's operation. You especially want to ensure not to block the sensor inlet or outlet.

_Step 4:_ Comparing your Data

First, you need to get access to the data at your collocation site. There is a way to download some data from the EPA's [website](https://www.epa.gov/outdoor-air-quality-data/download-daily-data) but there are often lags. Depending on your state, the website may not have the time period you are looking for. Ask the people you are working with at your state's environmental department if they can help with this. All of the air quality forecasters have access to a site that has the raw daily data. If you ask nicely, they should be able to get it to you in excel files.

The EPA has an excel tool called [MAT](https://www.epa.gov/sites/production/files/2018-01/macro_analysis_tool.xlsm) that is meant for this use.

Alternatively, if you feel confident in your Excel skills, you can do this comparison on your own. Or use any other tools you like.

When looking at your sensor's data, try to identify outliers or "bad" readings. The PPT (linked at the top) is more specific about what to look for.

Then you'll want to identify how often your data and the Federal data correlate by doing something called a linear regression. A linear regression is a statistical method that allows us to summarize and study relationships between two continuous variables - in our case, the reference monitor mass concentrations and your sensor's mass concentrations. The linear regression will yield two values - an 'R^2' value and a slope-intercept equation in the form y = m\*x+b. A value of R^2 close to 1 is desired. The slope-intercept equation can then be used to calibrate your sensor to an 'adjusted concentration' such that it will report closer to the reference monitor's data. The PPT explains this very well but I've included a screenshot below.

![image description](/i/26385.png "Screen_Shot_2018-08-29_at_12.58.31_PM.png")

_Step 5:_ If you don't like your R^2 value, brainstorm things that might be causing your readings to be inaccurate. Is the inlet getting a steady stream of air? Does the software have an error? Are you converting your measurements using the right values? Is the sensor intended for how you are using it?