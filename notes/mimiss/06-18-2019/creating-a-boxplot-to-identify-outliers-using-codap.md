---
title: "Creating a Box Plot to Identify Potential Outliers Using CODAP"\ntagnames: 'data, activity:education, environmental-data, data-analysis, data-logging-visualization, data-visualization, activity:data-analysis, codap, presenting-data, activity:presenting-data'
author: mimiss
path: /notes/mimiss/06-18-2019/creating-a-boxplot-to-identify-outliers-using-codap.md
nid: 19730
uid: 579821

---

![](https://publiclab.org/public/system/images/photos/000/032/980/original/Screen_Shot_2019-06-18_at_10.27.45_AM.png)

# Creating a Box Plot to Identify Potential Outliers Using CODAP

by [mimiss](../profile/mimiss) | June 18, 2019 16:29

June 18, 2019 16:29 | Tags: [data](../tag/data), [activity:education](../tag/activity:education), [environmental-data](../tag/environmental-data), [data-analysis](../tag/data-analysis), [data-logging-visualization](../tag/data-logging-visualization), [data-visualization](../tag/data-visualization), [activity:data-analysis](../tag/activity:data-analysis), [codap](../tag/codap), [presenting-data](../tag/presenting-data), [activity:presenting-data](../tag/activity:presenting-data)

----

[You can also access this as a Google Doc here](https://docs.google.com/document/d/181Q5Mry0WVmh5nQot8NaQ5nhlG22bj6Zr4zjcULEhsA/edit). Print or create a copy to follow along and record your observations.

## Outliers
Sometimes a dataset can contain extreme values that are outside the range of what is expected and unlike the other data. Outliers can have different causes, such as:

- Measurement or input error
- Data corruption
- True outlier observation

No precise way to define or identify outliers exists in general because of the specifics of each dataset. Instead, you have to interpret the raw data and determine whether or not a data point is an outlier. There are statistical models that we can use to identify these unlikely data-points as outliers.

_Note_: Just because a model suggests that a value is an outlier doesn't mean it should be immediately thrown out. A good strategy to consider is plotting the set of outliers on their own to see if there is a systematic relationship or a pattern to the outliers. If you can identify a pattern, then perhaps these values are not true outliers and can be explained.

## Box Plots (Box-and-Whisker Plots)

Box Plots provide a way to visualize the distribution of a dataset. It uses 5 numbers to summarize "most" of a distribution, and then plots any outliers that it does not cover. Those five numbers are

- The median, showing the value of a typical observation, represented as a line in the interior of the box.
- The 25th and 75th percentiles, represented as the lower and upper endpoints of the box. The 25th percentile is a number such that 25% of the data is less than that number. Likewise, 75% of the data are less than the 75th percentile (so 25% are above it).
  - These two numbers are chosen so the box represents the spread in the "middle half" of the data.
  - The distance from the 25th to the 75th percentiles is known as the "interquartile range" and abbreviated as IQR.
- The Box Plot extends outside of the box showing the variability outside the upper and lower quartiles. An arm extends out of each side of the box.
- Each arm extends no more than 1.5 times the IQR and ends at an observed value.

Here is an example of a Box Plot:

![Labelled example of a Box Plot](/i/32982.png "Screen_Shot_2019-06-18_at_10.27.45_AM.png")

##Creating a BoxPlot with CODAP

While you can calculate the numbers by hand, creating this graph with the help of software (such as Google Sheets, Microsoft Excel, or on a graphing calculator) can save time and increase accuracy. Today, we'll create our BoxPlot in an online software called "Common Online Data Analysis Platform", or [CODAP](https://codap.concord.org). If you'd like to use another software or create your BoxPlot by hand, checkout the resources below.

- [Creating a Box and Whisker Plot By Hand](https://www.purplemath.com/modules/boxwhisk.htm) from Purple Math
- [Creating a Box and Whisker Plot in Microsoft Excel](https://support.office.com/en-gb/article/create-a-box-plot-10204530-8cdf-40fe-a711-2eb9785e510f) from Microsoft Support
- [Using GoogleSheet's Candlestick Plot](https://support.google.com/docs/answer/9146870?hl=en) from Google Support
- [Making a BoxPlot on a TI-84 Calculator](http://studenthelp.cpm.org/m/TI-84/l/569736-ti-84-box-plots) from CPM Student Tutorials

Getting started with CODAP is simple. From the homepage, [https://codap.concord.org](https://codap.concord.org), click "Try CODAP" to open a new document. You can easily import data from a GoogleSheet or upload a document. To learn more about CODAP and its features, check out the [CODAP Startup Guide](https://drive.google.com/file/d/0B4WJLGBIc_35N01aTlBRNG9aTDA/view).

![CODAP Home Page with &quot;Try CODAP&quot; Button Highlighted](/i/32983.png "Screen_Shot_2019-06-18_at_10.52.14_AM.png")

Once you've imported your data, create a graph by pressing the Graph Button.

![Photo showing CODAP software with &quot;Graph&quot; Button Highlighted](/i/32984.png "Screen_Shot_2019-06-18_at_10.56.27_AM.png")

To add data to your graph, drop a "Numeric Attribute", or chart label, like "Water\_Temperature" onto the X-Axis of your Graph. To create the Box Plot, click the ruler and select "Box Plot". This will create an overlay of a Box Plot like the one below.

![An example of. Box Plot in the CODAP software](/i/32985.png "Screen_Shot_2019-06-18_at_10.58.19_AM.png")

To remove the data points and view only the Box Plot, Click the paintbrush on the graph menu and change the color of the Data Points to white. Hovering over a piece of the boxplot, like the 75th Percentile above, will display the numeric value. You can select all of the datapoints in a section of the BoxPlot by clicking that section of the BoxPlot.

Outliers are displayed as a cross on the graph. In the example above, you can see a single outlier on the right side of the graph. Clicking on the cross on the graph highlights the datapoint in the chart for further analysis.

##Record Your Observations

Create a chart like the one below for each variable of interest to record your observations.

![Chart for recording data distribution information and outliers.](/i/32986.png "Screen_Shot_2019-06-18_at_11.27.35_AM.png")