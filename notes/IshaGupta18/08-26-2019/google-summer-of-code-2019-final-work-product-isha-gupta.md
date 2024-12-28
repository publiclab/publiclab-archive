---
title: "Google Summer of Code 2019 - Final Work Product - Isha Gupta"

tagnames: 'open-source, gsoc, barnstar:excessive-enthusiasm, soc, gsoc-2019, soc-2019, gsoc-2019-final-report'
author: IshaGupta18
path: /notes/IshaGupta18/08-26-2019/google-summer-of-code-2019-final-work-product-isha-gupta.md
nid: 20668
uid: 568043
cids: 25377,25380,25384,25400,25404,25413,25414,25415,25416,25417,25422,25437,25444,25449,25495,25570
---

![](https://publiclab.org/public/system/images/photos/000/034/874/original/1_g5RBYeGe0VLB6t_ZsvO_wQ.png)

# Google Summer of Code 2019 - Final Work Product - Isha Gupta

by [IshaGupta18](/profile/IshaGupta18) | August 26, 2019 04:22

August 26, 2019 04:22 | Tags: [open-source](/tag/open-source), [gsoc](/tag/gsoc), [barnstar:excessive-enthusiasm](/tag/barnstar:excessive-enthusiasm), [soc](/tag/soc), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [gsoc-2019-final-report](/tag/gsoc-2019-final-report)

----

# Google Summer of Code'19 Work Product: Isha Gupta

The GSoC period might be coming to an end, but the journey is not over yet. Here's the summary so far...

## Project Details

- **Student:** Isha Gupta
- **Github:** [IshaGupta18](https://github.com/IshaGupta18)
- **Project Title:** [Sensor Data Upload & Display Libary](https://publiclab.org/wiki/gsoc-ideas#Sensor+data+upload+and+display+library)
- **Project Proposal:** [Proposal](https://publiclab.org/notes/IshaGupta18/03-04-2019/gsoc-proposal-sensor-data-upload-and-display-library)
- **Project Repository:** [Simple-Data-Grapher](https://github.com/publiclab/simple-data-grapher)
- **Organization:** [Public Lab](https://github.com/publiclab)

## Abstract/Summary

Simple-Data-Grapher is designed in a standalone repository. It is an HTML, CSS and JavaScript-based library, made in NodeJS through which a user can import CSV data, select different columns and graph types, and plot charts.

The user can import data through:
    - Local File: A file on the user's system
    - Remote File: A globally accessible file on the web
    - String: A CSV String
    - Google Sheet: A published Google Sheet

The headers are automatically detected, and assigned if not present.

A sample of the data is displayed for the user to choose columns for X and Y axes.

The user can choose from a variety of graph types, and the graphs can be plotted using PlotlyJS or ChartJS.

**Peripheral Features:**

- Download data as a spreadsheet
- Add graphs
- View and Export Data through CODAP
- Export Data to Google Drive (via CODAP)
- Save data for later use (on integration with plots2)
- Publish plotted graphs as a Research Note (on integration with plots2)
- Upload data from previously uploaded file (on integration with plots2)
- Save file description and title (on integration with plots2)
- View all uploaded files, delete and download them (on integration with plots2)

## Code Links

**Links to Pull Requests in simple-data-grapher:**  [Simple-Data-Grapher](https://github.com/publiclab/simple-data-grapher/pulls?page=1&q=is%3Apr+author%3AIshaGupta18&utf8=%E2%9C%93)

**Links to Pull Requests in plots2:** [Plots2](https://github.com/publiclab/plots2/pulls?page=1&q=is%3Apr+author%3AIshaGupta18&utf8=%E2%9C%93)

**Links to Issues in simple-data-grapher:** [Issues in SDG](https://github.com/publiclab/simple-data-grapher/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3AIshaGupta18+)

**Links to Issues in plots2:** [Issues in plots2](https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3AIshaGupta18+)

**Links to Commits in simple-data-grapher:** [Commits in SDG](https://github.com/publiclab/simple-data-grapher/commits?author=IshaGupta18)

**Links to Commits in plots2:** [Commits in plots2](https://github.com/publiclab/plots2/commits?author=IshaGupta18)

**Github Pages demo:** https://publiclab.github.io/simple-data-grapher/

**Blogs:** https://publiclab.org/profile/IshaGupta18

## Project Description

### Flow: Basic Flow of the Library

![](https://lh3.googleusercontent.com/EBhm7ICy8xLrZ0LQfYiRNXlc9nt7QHWdUN1rBk8GQVz-9KkZwcEDqjrH_BY62NCs78hGUDpH3MyFknaafds8QCgLR2PW7Li6EPmX_bkhIxnQOeeKdiqEGD6T7H5yKlpKhyqihF6I)

![](https://s3.gifyu.com/images/gif1-2019-08-20_22.02.03639ebe5d2b44c040.gif)

- **View.js:** First reads the input files through the event listeners and sends the file to Csvparser.js, then once the required information is received, it displays a sample of the data. It then takes the selected data by the user, through the `afterSampleData()` method, and goes to the plotting library, and displays the graph.

- **Csvparser.js:** Receives the file and it's format type and:

    - Parses the CSV
    - Determines headers
    - Determines a matrix for the complete data
    - Extracts sample data to be displayed to the user for selection
    - Creates a transpose of the data

- **PlotlyjsPlotter.js (default) or ChartjsPlotter.js:** Assembles the received data according to its format and plots the graph on the canvas element.

### Peripheral Features in Stand-alone
    
- **Add Graph:** It is checked at `showSampleDataXandY()`, where the number of currently plotted graphs is incremented and it is sent as a flag, where the newly plotted graph has to be appended in the chart area, and not clear the canvas.

![](https://s3.gifyu.com/images/addgraph-2019-08-20_22.05.00f89039faa159aec2.gif)

- **Create Spreadsheet:** Uses the transpose created by Csvparser.js and creates a (excel or xlsx) spreadsheet using `SheetJS` and downloads it.

- **Download as Image:** PlotlyJS offers the ability to download the graphs as an image. A feature for ChartJS was created separately.

![](https://s3.gifyu.com/images/downloadsheet-2019-08-20_22.06.279275f242339dd3cc.gif)

- **CODAP Export:** CODAP is used here to view the CSV data in a proper tabular form. From there, the user can view a summary of their data, view a more readable form of it and use other tools that CODAP's Plugin API offers. The user can also export their data as a CSV directly to their Google Drive.

![](https://s3.gifyu.com/images/codapp-2019-08-20_22.22.368e814abaf25c7bc3.gif)

### Plotlyjs v/s Chartjs

I created an `adapter function` which can easily switch between the two charting libraries, as one can be advantageous over the other in different situations.

- Plotlyjs is more extensively used than Chartjs
- Plotlyjs provides options like:
    - Zooming
    - Panning
    - Autoscaling
    - Downloading the graph as an image
    - Box and Lasso select
    - Edit graph in Plotlyjs editor
- Chartjs:
    - Better comparison
    - Better color scheme and design
    - More informative tooltips

### Flow in plots2

The basic flow remains the same as in the standalone library.

#### Features introduced on integration

- **Save the data:** The user can save their uploaded CSV and use it later for plotting.

- Associate a file title and description with the uploaded data.

![](https://s3.gifyu.com/images/saveandperuserdata-2019-08-29_22.28.31.gif)

- **Using previously uploaded data for plotting:** Users can use their previously uploaded files for plotting in simple-data-grapher.

![](https://s3.gifyu.com/images/saveandperuserdata2-2019-08-29_22.30.40.gif)

- **Per-User Data Page:** Lists down all the files a user has saved, their title & description. The user can delete as well as download the files.

![](https://s3.gifyu.com/images/saveandperuserdata3-2019-08-29_22.34.16.gif)

### Publish as a Research Note

The user can publish their plotted charts as a Research Note on Public Lab and discuss their findings.

![](https://s3.gifyu.com/images/researchnote-2019-08-26_09.56.36-1.gif)

#### Flow 

![](https://lh5.googleusercontent.com/4LJ1qzCD1WFMSmvLTR4FBaB0pF5bKRLo2MQUiP6e_1iipt7gWoxZMfjiNzc2ZRMydebksz4E4w1PUmhR90f3b0zJSHLNbnfXF5X-ScZZL-q50CLITgBEi9HUqu7aqxTXR0e38be8)

## My Experience

Working with Public Lab for about 9 months now has been a humbling experience. The community has been extremely helpful and I have enjoyed working with amazingly talented people.

I have learned so much, before and during GSoC, both about development, and how to work in different projects, and I want to continue to do so in the days to come.

I will remain active as a contributor and would love to be a mentor for the upcoming Google Code-In.

## First-Timers-Only

I have actively welcomed new-commers in plots2, and simple-data-grapher.

[Links to relevant issues in plots2](https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=label%3Afirst-timers-only+involves%3AIshaGupta18)

[Links to relevant issues in simple-data-grapher](https://github.com/publiclab/simple-data-grapher/issues?utf8=%E2%9C%93&q=+is%3Aissue+label%3Afirst-timers-only+)

## What's left

It's been one packed summer for me and I have worked on this project from scratch, one by one executing the ideas I had suggested in my proposal. But as I went along, I stumbled upon a few more additions that can be well implemented.

Some of the planning issues I have in my mind are:

- A more comprehensive UI Design, taking into account from users and making the process of uploading data handier.
[Views on this](https://github.com/publiclab/simple-data-grapher/pull/77)

- Possible integration with [MapKnitter](https://mapknitter.org), as mentioned by @ebarry on one of the Open Code Calls.

- Implement an `Update Graph` feature for the plotted graphs.

- More analysis features, showing better conclusions, like basic statistics (mean, median, etc) or export features to sensor data analyzers.

- Advancing the Graphs:

    - Adding axes details

    - Adding color variations

    - Manipulating data dynamically

    - Making the graphs more interactive and detailed

    - Optimize the code

- Building a stronger open-source community around this new project, by creating more issues and welcoming contributors.

These were a few ideas I had during the project. I would like to take them forward, and would appreciate any more ideas from the members of the community, or potentially, for the next Summer of Code to come!
