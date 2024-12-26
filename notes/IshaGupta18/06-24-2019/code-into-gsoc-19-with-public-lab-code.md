---
title: "<code> Into GSoC’19 with Public Lab </code>"\ntagnames: 'open-source, gsoc, soc, soc-2019'
author: IshaGupta18
path: /notes/IshaGupta18/06-24-2019/code-into-gsoc-19-with-public-lab-code.md
nid: 19840
uid: 568043

---

![](https://publiclab.org/public/system/images/photos/000/033/169/original/1_g5RBYeGe0VLB6t_ZsvO_wQ.png)

# <code> Into GSoC’19 with Public Lab </code>

by [IshaGupta18](../profile/IshaGupta18) | June 24, 2019 17:07

June 24, 2019 17:07 | Tags: [open-source](../tag/open-source), [gsoc](../tag/gsoc), [soc](../tag/soc), [soc-2019](../tag/soc-2019)

----

It's been about 1.5 months since the GSoC result was declared, and it's been a marvelous journey till now, as it will be till the end.

I was bubbling with energy from the first day itself, so I channeled it and started working on my project from that day itself. I took out my whiteboard and started plotting on how I would go on about my project. I was set up with a fresh repository by Jeff, my org's admin and was made the admin of it. Initially, I opened up a couple of issues and described what I plan to start with, basically the things that would almost definitely receive a yes from my mentors.

In my project, I am making a standalone library in HTML, CSS, and JavaScript through which, users will be able to upload CSV data through different import options (local, remote, string or Google sheet) and plot multiple graphs of different types, by selecting different columns of the imported CSV, and export the data or graphs through various export options.

The first thing I did was create the basic UI for uploading CSV files, which is what the project starts with. I had to make a pretty drag and drop input type file form to start with and I positioned everything using flex, which is a CSS's gift to all developers. 

(https://github.com/publiclab/simple-data-grapher/pull/1)

Then I moved to extract data from the uploaded CSV and parsing it with Papa Parse. Since we were using Chart.js for plotting, I decided to store data in the structure in which Chart.js can easily process it later on.

(https://github.com/publiclab/simple-data-grapher/pull/9)

But the first task was to extract some sample data and determine headers for it, and display it to the user so that they can select the columns for the X-Axis and Y-Axis, and also select the Graph Type.

This took me quite some time, as I had to properly store the data in matrices, handle a very important situation when the data didn't have any headers and assign dummy header names to the columns, create a checkbox group (for Y-Axis) and a radio button group (for X-Axis) for the user to select the columns and carefully send the selected data for plotting. 

Once the data was collected from the user, I sent it to a separate function, that would create a hash of this data, for assigning labels, each dataset with its corresponding key and the specified graph type. Finally, a graph was plotted through Chart.js and displayed to the user.

(https://github.com/publiclab/simple-data-grapher/pull/18)

This was the basic functionality, which was up and running within 2 weeks.

Then I proceeded to a feature for saving a graph as an image, which is one of the multiple export options to be implemented.

After this, I worked on a feature for adding multiple graphs from the same CSV. This took up some time as to how this will be implemented and I faced a major bug with Chart.js, as only one chart was being visible at a time, and some hovering events triggered the other graph's visibility and vice versa. I spent a lot of time debugging this but was able to finally, which felt very satisfying.  

I also created a new export option for importing data from a CSV string.

I also revamped the entire current UI, from a basic single page, single div structure where everything was in a single view, to a Bootstrap carousel design, with each step ie. 1\. Upload 2\. Select Data 3.Plotted Graph all in three slides, with pretty tables for selecting data and toggle buttons for switching between them. This UI was more intuitive to me as a user, and definitely took some thought and time to execute.

This was a pretty big PR, as a variety of work was done in it.

(https://github.com/publiclab/simple-data-grapher/pull/28)

Once again, I put in a lot of time to figure out another feature, a browsable time slider, for zooming and panning a graph, which was very important since the datasets were huge. However, despite trying a lot, experimenting with the options I had, it kept giving a new error every time, partially because of some errors on my part, and partially because of some maintenance errors, both of them were very difficult to solve.

(https://github.com/publiclab/simple-data-grapher/pull/31)

After some more work, I was recommended to refactor and organize the existing code. One of the students who is working on the same project divided the code into classes and then later I took up to resolving some bugs and adding the existing functionality to this modular code. This was also a little time taking since I had to understand the new modular code, fight with bugs, and make the functioning smooth. Meanwhile, I was also researching how to implement MVC architecture in JavaScript based libraries. Although we haven't yet implemented it, I found it really interesting to read and understand.

I opened an issue for discussing a potential idea for shifting to Plotly.js, which offers in-built features of zooming and panning, apart from other services. This was a good potential resource for enhancing our plotting abilities, and I was very much in favor of shifting to it.

(https://github.com/publiclab/simple-data-grapher/issues/34)

I also extended the library's import functions. Now the user can import data from a remote CSV file, as well as a published Google Sheet.

(https://github.com/publiclab/simple-data-grapher/pull/43)

Side by side, me and Jeff were researching on many export options as well, for the user to open their uploaded data in a third-party application or service, or download it in some form to make it more conclusive.

(https://github.com/publiclab/simple-data-grapher/issues/17)

(https://github.com/publiclab/simple-data-grapher/issues/30)

The first option I implemented was using SheetJS, which converted the uploaded CSV data to a downloadable Excel file. This was a simple feature for the user to use.

Since this is a new project, I was asked to build a community around the repository. So I spent some time creating labels, contributing and code of conduct files, issue templates to make it easier for users to report different issues, a PR template to make it easier for the reviwers to merge different PRs and in general structuring of the repo, for new comers and everyone in general to easily navigate between files and folders.

I also implemented ESlint for the project, which would really help us in maintaining a clean codebase. 

(https://github.com/publiclab/simple-data-grapher/pull/37)

Recently, there was a discussion on testing and trying to understand how tests work, in different testing frameworks, and which one should be chosen to ensure the best service for the library.

(https://github.com/publiclab/simple-data-grapher/issues/49)

I completed a gigantic PR today, which is ready for merging and aims to achieve multiple diverse goals.

(https://github.com/publiclab/simple-data-grapher/pull/59)

Firstly, I refactored a ton of code in this one. Till now, some files had functions that were interdependent on each other ie. one function calling the other, which created problems in debugging and testing. Now, all the functions are independently written, each returning the required value and assigning to the variables. A functionHandler calls all the functions in the required order. This way, if we get a bug, we can pinpoint the exact function which is causing a problem, instead of tracing the entire thing through function calls. 

I implemented plotly.js too (https://github.com/publiclab/simple-data-grapher/issues/34#issuecomment-504150539) but as suggested by Jeff before, I needed to write the code in a properly structured way, so that it is very convenient to switch between the two charting libraries. So, I wrote an adapter function, which would seamlessly switch between the two libraries, just by specifying the name of the library. To achieve this, the code for plotting with both of them is written in two different classes, and according to the parameter, an object of the required class is created and presto, we plot our charts with our favorite library!

This was really cool, as it majorly cleaned up the code and increased readability.

Next, after days of reading and debugging, I was finally able to write some unit tests for the library in Mocha js and it was a great experience. The entire process taught me how to write better code, deal with bugs and found some plot holes in the existing code. Finally, when all the tests ran, I felt really relieved.

Currently, I am beginning to work on some more documentation, another export options (let's wait for the next one ;) ) and compile some thoughts on integration with the main site!

Some work has been done, some still left, but it's been an amazing journey so far, with a lot to learn and a lot to code, all of which I am eagerly looking forward to!