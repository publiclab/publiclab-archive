---
title: 'Cleaning and Organizing Environmental Data'
tagnames: status:under-development, method, environmental-data, presenting-data, air-quality-data, data-cleaning
author: bhamster
path: /wiki/data-cleaning.md
nid: 28318
uid: 664477

---

# Cleaning and Organizing Environmental Data

by [bhamster](../profile/bhamster)

November 30, 2021 23:19 | Tags: [status:under-development](../tag/status:under-development), [method](../tag/method), [environmental-data](../tag/environmental-data), [presenting-data](../tag/presenting-data), [air-quality-data](../tag/air-quality-data), [data-cleaning](../tag/data-cleaning)

----

_Lead image: Clean Data by Gene Stroman from the [Noun Project](https://thenounproject.com), CC BY_

<hr>

After you’ve collected environmental data from a sensor, monitor, or other piece of equipment, one of the next steps is to organize and “clean” it!

Cleaning includes making sure the dataset is complete and consistent. Organizing the data into a table in a meaningful way gets it ready for making charts, graphs, and other visualizations. Below are some resources on cleaning data, including making tables of tidy data.

<hr>

### Making tables of tidy data

<img style="width: 70%; height: 70%" src="https://publiclab.org/i/45058?s=o" alt="Stylized text providing an overview of Tidy Data. The top reads “Tidy data is a standard way of mapping the meaning of a dataset to its structure. - Hadley Wickham.” On the left reads “In tidy data: each variable forms a column; each observation forms a row; each cell is a single measurement.” There is an example table on the lower right with columns ‘id’, ‘name’ and ‘color’ with observations for different cats, illustrating tidy data structure.">

<br>

<img style="width: 70%; height: 70%" src="https://publiclab.org/i/45059?s=o" alt="There are two sets of anthropomorphized data tables. The top group of three tables are all rectangular and smiling, with a shared speech bubble reading “our columns are variables and our rows are observations!”. Text to the left of that group reads “The standard structure of tidy data means that “tidy datasets are all alike…” The lower group of four tables are all different shapes, look ragged and concerned, and have different speech bubbles reading (from left to right) “my column are values and my rows are variables”, “I have variables in columns AND in rows”, “I have multiple variables in a single column”, and “I don’t even KNOW what my deal is.” Next to the frazzled data tables is text “...but every messy dataset is messy in its own way. -Hadley Wickham.">

_Images: Illustrations from the [Openscapes](https://www.openscapes.org/) blog “[Tidy Data for reproducibility, efficiency, and collaboration](https://www.openscapes.org/blog/2020/10/12/tidy-data/)” by Julia Lowndes and Allison Horst, [CC BY](http://creativecommons.org/licenses/by/4.0/)_ 

<br>
<br>

An example of “tidy data” from an air quality sensor might look like this:

<img style="width: 50%; height: 50%" src="https://publiclab.org/i/45062?s=o" alt="An example of tidy air quality data in a table. There are four columns of variables with names and units 'id', 'date (dd-mm-yy)', 'time (hh:mm:ss)', and 'PM2.5 concentration (micrograms per meter cubed)'. There are four rows of data.">

<br>

_**Each variable forms a column**_: sensor ID number, date, time, and the air quality measurement of particulate matter are individual variables. Each variable gets its own column in the table. The column header at the top lists the variable name and its units of measurement.

_**Each observation forms a row**_: this sensor took an air quality measurement every minute. Each measurement gets its own row in the table. 

_**Each cell is a single measurement**_: each block in the table shows one piece of data---one time, one PM measurement, etc.

<br>
<hr>

### Cleaning data

_More to come here!_

<br>
<hr>

### Questions on organizing and cleaning data

Questions tagged with `question:data-cleaning` will appear here

[data-cleaning](../../tag/question:data-cleaning)

<br>

### Activities

Activity posts tagged with `activity:data-cleaning` will appear here

[data-cleaning](../../tag/activity:data-cleaning)

<br>

<hr>

### More resources on organizing and cleaning data
 
+ [Formatting Data Tables in Spreadsheets](https://datacarpentry.org/spreadsheets-socialsci/01-format-data/) and [OpenRefine for Data Cleaning](https://datacarpentry.org/openrefine-socialsci/): guidance and exercises from a [workshop session](https://marwahaha.github.io/2019-05-30-nas/) by Data Carpentry.
+ “[Clean Up Messy Data](https://handsondataviz.org/clean.html),” chapter 4 from the open-access web edition of _Hands-On Data Visualization: Interactive Storytelling from Spreadsheets to Code_, by Jack Dougherty and Ilya Ilyankou.
+ Wickham, H. 2014. **Tidy Data**. Journal of Statistical Software, 59(10), 1–23. [LINK to paper](https://doi.org/10.18637/jss.v059.i10).