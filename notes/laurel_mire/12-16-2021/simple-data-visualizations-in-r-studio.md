---
title: "Simple Data Visualizations in R Studio"\ntagnames: 'data, environmental-data, data-visualization, research-curation-fellows, presenting-data, air-quality-data, data-visualization-tool, data-viz, rstudio'
author: laurel_mire
path: /notes/laurel_mire/12-16-2021/simple-data-visualizations-in-r-studio.md
nid: 28500
uid: 759178

---

# Simple Data Visualizations in R Studio

by [laurel_mire](../profile/laurel_mire) | December 16, 2021 16:34

December 16, 2021 16:34 | Tags: [data](../tag/data), [environmental-data](../tag/environmental-data), [data-visualization](../tag/data-visualization), [research-curation-fellows](../tag/research-curation-fellows), [presenting-data](../tag/presenting-data), [air-quality-data](../tag/air-quality-data), [data-visualization-tool](../tag/data-visualization-tool), [data-viz](../tag/data-viz), [rstudio](../tag/rstudio)

----

Do you have clean data, but you’re not sure where to start with data visualization? Are you curious about your data’s distribution? Want to learn about the open-source **statistical programming language R**? Using the **ggplot2** data visualization package in R, learn how to make basic plots to explore your data and powerfully communicate data-driven findings. RStudio Desktop is free and can be downloaded [here][1].

Why visualize data?

- Data visualization (or data viz) is the strongest tool of **exploratory data analysis**
 - Data viz can help you notice errors in your data that are otherwise impossible to notice
 - Data viz principles allow you to better share your findings with other community scientists, the public, and power-holding officials
<hr/>

Source: This research note uses information presented in the Harvard University Data Science: Visualization course available through EdX [here][2].
<hr/>

#Data Types
Depending on the type of data you have, different data viz techniques are appropriate. So, the first question to ask yourself is: **what type of data do I have?**

There are 2 main types of data with 2 subgroups in each:

 **Categorical data**

 - Ordinal: order matters and indicates high/low/severity
    + Ex: level of particulate matter present, spiciness of wings
 - Non-ordinal: order of categories does not matter, categories have no relation to others
    + Ex: regions of the United States, type of climate


**Numerical data**

 - Discrete: counts, whole numbers
    + Ex: population
 - Continuous: may take any value 
    + Ex: gage recordings, temperature

#Distributions
Once you determine what type of data you have, looking at its distribution is a great place to start. A dataset’s **distribution** is the most basic statistical summary of a list of objects or numbers. It is a function or description that shows the possible values of a variable and how often those different values occur. Distributions are shown, in varying degrees of complexity, through data visualizations. You can skip to the [“R Code for Different Types of Graphs”][3] section to get started right away or read on for a little background information about the ggplot2 package in R that the code uses.

#What is ggplot2?
The **ggplot2 package in R** is perfect for non-coders who still want to take advantage of the data visualization capabilities of open-source R. It allows the user to make relatively complex plots using simple code. *However, it is limited in that it will only work with data tables with observations in rows and variables in columns.*

NOTE: Before using any of the R code below, make sure to set up your script like this:
![][4]

Then, add your data by going to: File > Import Dataset > From Excel 

##The ggplot() function
Ggplot2 is the name of the package in R that holds all the functions that will allow you to make different types of data visualizations. However, just installing the ggplot2 package (as in the code above) will not actually create a graph. We also need to call the **ggplot() function** in our line of code to actually initialize the creation of a graph. This function will work with the graph components below to create various plots.

##Graph Components in ggplot2

 - Data component—what dataset do you want to visualize?
 - Geometry component—do you want to make a barplot, a scatterplot, etc?
 - Mappings—what’s on the x and y axes, what text is present?
 - Scale component—do you want your axis in logarithmic scale?
 - Labels, title, legend, style

The data component will be the first bit of code, followed by the ggplot() function which actually creates the graph, and then various layers you may choose to include to modify your graph, called layers.  Layers include the geometry, mappings, scale, labels, and whatever other features you would like to add tacked on with a “+”. 

In general, a line of code making a graph in ggplot2 will follow this format:
	*Your data* %>% ggplot() + *Layer1: geometry component* + *Layer2* + *Layer3*

While your data, ggplot(), and Layer 1 are all necessary pieces, Layer2 and so on are optional depending on how you want to modify and customize your graph. They will also vary depending on your geometry component (or what type of graph you’re making). Before making your graph, always use a ? before the function you want to use and press enter. This will pull up more information about a particular function and show what layers can be added on to customize. For example, use “?ggplot” to see more information on using the ggplot2 package.

#R Code for Different Types of Graphs
Below is some sample code for making simple graphs to visualize your data. *Pieces of code that will need to be plugged in based on your own data are in italics.* For more information on presenting environmental data and different types of graphs, check out [🎈 Public Lab: Presenting Environmental Data.][5]

##For categorical data...

####**Frequency Table** - prop.table() function
 - The distribution of categorical data will describe the proportions of each category, and a **category frequency table** is the simplest form of a distribution you can make.
 - Sample code: prop.table(table(*column*$*row*)
    + Note: this does NOT need the ggplot2 package

####**Barplot** - geom_col() and geom_bar() functions
 - When your data fits in multiple different categories, a barplot will easily visualize the distribution
 - geom_col() function makes the heights of the bar represent values in the data
 - geom_bar() function makes the height of the bar proportional to the number of cases in each group

##For numerical data...

####**Scatterplot** - geom_point() function
 - Sample code: *Your data* %>% ggplot() + geom_point(aes( x = *name of variable within your data you want to be on the x axis*, y = *name of variable within your data that you want to be on the y axis*)
 - Add ons for geom_point() function:
    + geom_text(aes( *what you want your x axis to be labelled*, *what you want your y axis to be labelled*, label = *the column holding what you want each data point to be labelled*)

####**Histogram** - geom_histogram() function
 - Sample code: *Your data* %>% ggplot(aes( x = *your chosen x variable*) + geom_histogram()
 - Add ons: 
    + you can change the bin width of your histogram with geom_histogram(binwidth = 1)
    + Add a fill color with geom_histogram(fill = “blue”)

####**Smooth density plot** - geom_density() function
 - Sample code: *Your data* %>% ggplot(aes(x = *variable to graph*)) + geom_density()
 - Add a fill color: *Your data* %>% ggplot(aes(x = *variable to graph*)) + geom_density(fill = “blue”)

##Additional Layers to Add On:
 - xlab() and ylab() functions will add labels to your x and y axes, respectively
 - ggtitle(“*Title*”) to add a title to your plot
 - scale_x_continuous(trans= “log10”) to transform the scale of your x axis to a logarithmic scale
    + scale_y_continuous(trans=”log10”) does the same for the y axis
 - filter() function will filter your data to only include chosen variables
    + For example, to filter a dataset called “Heights” by a variable “sex” to only include “Male”, use the code: Heights %>% filter(sex == “Male”) %>% ggplot(aes(x = height)) + geom_histogram()

<br>

Using the sample codes here, you should be on your way to visualizing and better understanding your data. I’m an R rookie, so please comment below any fixes, other tips for data visualization in R, or troubleshooting.

#Further Reading and Resources
 - [Introduction to Data Science by Rafael A. Irizarry][6]
 - [RStudio Cheatsheets][7]
    + RStudio IDE Cheatsheet breaks down the R basics and the R window
 - [Quick R by Datacamp][8]
 - [R Questions on Stack Overflow][9]

  [1]: https://www.rstudio.com/products/rstudio/download/
  [2]: https://pll.harvard.edu/course/data-science-visualization?delta=3
  [3]: https://publiclab.org/notes/laurel_mire/12-16-2021/simple-data-visualizations-in-r-studio#R+Code+for+Different+Types+of+Graphs
  [4]: /i/45239.png "beginningcode.PNG"
  [5]: https://publiclab.org/wiki/presenting-data
  [6]: https://www.dbooks.org/introduction-to-data-science-5592475697/
  [7]: https://www.rstudio.com/resources/cheatsheets/
  [8]: https://www.statmethods.net/
  [9]: https://stackoverflow.com/questions/tagged/r