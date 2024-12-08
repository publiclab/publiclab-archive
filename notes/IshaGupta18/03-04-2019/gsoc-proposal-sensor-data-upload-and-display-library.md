---
title: GSoC proposal: Sensor data upload and display library 
tagnames: software, gsoc, soc, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, response:18440, soc-2019-projects
author: IshaGupta18
path: /notes/IshaGupta18/03-04-2019/gsoc-proposal-sensor-data-upload-and-display-library.md
nid: 18463
uid: 568043

---

# GSoC proposal: Sensor data upload and display library 

by [IshaGupta18](../profile/IshaGupta18) March 04, 2019 17:13

March 04, 2019 17:13 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [response:18440](../tag/response:18440), [soc-2019-projects](../tag/soc-2019-projects)

## About Me

Name: Isha Gupta

Affiliation: Indraprastha Institute of Information Technology, Delhi

Github: @IshaGupta18 (https://github.com/IshaGupta18)

Blog:https://medium.com/@ishagupta1828 

Location: Delhi, India


## Project Description

### Abstract/ Summary (<20 words)

Sensor data upload and display library

## Problem

-   The problem with CSV data is:

	-   The data size is huge

	-   The data can't be easily interpreted

	-   No conclusion can be drawn from it without converting it to a more readable form

-   This is an important task in the research field as most of the data is in CSV format.

-   Public Lab collects data for its sensors and utilities like MapKnitter, Spectral Workbench etc. in CSV format.

-   In the research field, the task at hand should be thinking about new ideas and not putting that time in analysing raw data, irrespective of the fact whether you're a programmer or a non-programmer.

-   **To make it easier for them to manage data and make the data more conclusive, a JavaScript + HTML based library should be developed to organize CSV sensor data into informative graphics like charts.**

-   The library will be built and used as a feature on Public Lab but will remain as a standalone tool to be integrable.

-   It would be developed separately like the Rich Editor (<https://github.com/publiclab/PublicLab.Editor>) or Inline Markdown Editor (<https://github.com/publiclab/inline-markdown-editor>).

### Index

1.  ### Description of features

2.  ### Flow

3.  ### Part 1: Uploading CSV file through drag-and-drop

4.  ### Part 2(a): Getting the uploaded file from input field

5. ### Part 2(b): Using previously uploaded files

6.  ### Part 3: Parsing

7.  ### Part 4: Displaying Sample data and getting columns selected

8.  ### Part 5: Getting ALL the data

9.  ### Plotting the Graphs

10. ### Browsable Time Slider

11. ### Displaying per-user data

12. ### Exporting CSV files to Google Sheets

13. ### Plotting Multiple Graphs from within the same sheet (using different columns' combination)

14. ### Publish as a Research Note

15. ### Saving Chart as an Image

16. ### Timeline

17. ### More About Me

### Description of Features:

1.  A simple menu for choosing the graph type

	1.  **Different graph types** with the best-suited color theme can be displayed:

		-  Bar

		-  Pie

		-  Line

		-  Radar

		-  Doughnut

		-  Scatter

2.  **Display the CSV data's columns and give the user the option to choose the columns for which the graph should be plotted:**

	1.  A CSV file is usually very cluttered and not all columns out of it are useful.

	2.  The column headers with a couple of leading values should be displayed for the user to select the respective columns for X and Y axes to plot the data.

	3.  The labels for the axes will be picked up from column header titles.

	4.  The options given to the user for plotting should be simple and not too elaborate, for the purpose is just plotting the data on an environmental platform and too many features may drive the user away. This means that with some basic selections, the user should be presented with a graph.

3.  **A browsable/movable slider to display data in a graph:**

	1.  During a particular time period (if time is the quantity on the x-axis).

	2.  In a particular range of values scaled according to the range of data on the x-axis.

	3.  Selecting the particular range or setting the slider value will magnify the graph for that region, giving a sharper look at the plot in that region.

4.  A single click that **converts the uploaded file into a Google Sheet** and opens it in a new tab available for export. (using Google Sheets API importdata function)

5.  **Displaying per-user data**:

	1.  A per-user record table showing a list of all CSVs uploaded by him/her in a separate page on Public Lab. Link <publiclab.org/data/username>

	2.  The record table will have a Download link for each CSV so that the user can download the uploaded CSV file(s).

	3.  The user can also delete a CSV file from his record table.

	4. The user can also view the published note which he might have made with the plotted graph.

6. The user can **plot multiple graphs for the CSV file on the same page**, using an "Add Graph" button. This would help facilitate better analysis and comparisons between different data sets.

7. An option to **publish the plotted chart as a research note**, so that other users can view it and discuss on it via comments and blogs, and is also made available for them to use and subscribe to.

8. The user can also **create charts from files they have uploaded before.** At the time of plotting, they will be given an option to create charts from their previously uploaded CSVs. This promotes reusability of data.

9. Each graph plotted is given an **option to be saved as an image.** This makes it very convenient for the user to have the analysed data in an easy and accessible form.

### Implementation

### Flow:

1.  **Upload the CSV** file through a form submission for the currently logged in user (AJAX).

-   The file is uploaded(local or remote) and saved asynchronously against the current user.

-   This file is saved in a one-to-many (since one user can upload multiple files for multiple graphs from his/her account) relationships table for the user.

-   This file is saved in the bucket in the database of the server using paperclip. (available for retrieval).

2.  **Get the uploaded file and parse:**

-   The uploaded file is **retrieved from the form** and **parsed** using Papa Parse at the **client side.**

-   The uploaded file can be at the client's system or it can be a remote file, both are good to be handled by Papa Parse.
										OR
-   **Upload file from previously uploaded file** and pass the url to the parsing function.

3.  A **sample of the data is displayed** from the file

-   We get all the data in the parsed form.

-   We want to show the column header names and some sample data for the user to choose the columns which will be used for plotting a graph.

-   We display a sample of the data (say first 10 rows) for selecting the columns.

4.  Getting the **names of required columns and type of graph**

-   We now get the names of the required columns for plotting from the user through checkboxes and radio buttons.

-   The user selects the axes of the columns.

-   The user selects the type of graph to be plotted from a graph menu.

5.  Data is compiled

-   The selected columns complete data, along with the graph types is combined in one JSON hash.

-   This hash is made available to Chart.js for plotting.

6.  Chart.js plots the graph with the given data and finally displays it!

![](https://lh6.googleusercontent.com/Ind_CjWeC2Nz9W-yO4wq0Sm97sebU6tyyjDMwksDAgrKwp2-8gewCezNa73Br0ylIuliuRcpMjoS2oTSg2HPysAjlc0W4c7sIE2q2SlEwQ0yClFxteldcVJG4Ymn-dqo8mb342Wj)

### Part 1: Uploading CSV file through drag-and-drop and remote file

-   We make an **input type="file"** form which facilitates drag-drop-feature as well.(<https://github.com/publiclab/plots2/pull/4538>).

-   The form will be designed in such a way for the user to conveniently upload the file or drag it and drop it there.

-   There will also be a text field, for the user to give the link of a remote file.

-   In Plots2, we use **Paperclip** gem for uploading and saving files.

<<https://github.com/publiclab/plots2/blob/6ea587e24f87fce9e1901744b72b15ec0ac48687/app/views/users/_create_form.html.erb#L43>> has been used here for uploading optional profile picture at the time of sign-up.

![](https://lh6.googleusercontent.com/y2RZRJq8UjhVZoF3XKWw96yTjBgmXGwk_c6tY0l4--F0hcNK-S6gvoVHYskbjGw772l2God5Uq6-Mtij8V3GH2rWU2YLvp1ASEnTA9cfjdW12_zOpbXTEJ8ZnUXULDygD5AG4xL9)

-   So once the file is dropped in the drop-zone for uploading or the link of a remote file is pasted in the text field and the upload button is clicked, it is saved against the user asynchronously in the table created (described later).

-   On clicking the Upload CSV button:

	-   An AJAX request is sent to the controller action that would save the uploaded file against the user.

	-   A success value is returned to show that the action has been successfully executed.

-   The following design is the upload part of the page where the Sensor Data library is implemented.

-   The "Plot charts from your files" button has been described later.

![](https://lh3.googleusercontent.com/42DLWrVBCZT11gLO68aQUVg6Y_ykYd55UqIxlWwGduFZ7QNzUNhkggEJSee1F9f9TDl-tTTPCpraXQLZOtcA8a-dxhQn7JcI8Fmm4HD4PHmb3MhMPvFdy7W_TBfhfLZ-4QmZLqZd)

### Part 2(a): Getting the uploaded file from input field

-   The uploaded file is extracted from the drag-drop input field and is made available for the parsing function.![](https://lh5.googleusercontent.com/3JOEbpenRPSWhxPrgaw1OzrpLkUk-E0HdA1w_lbZoY4svHweAwtvhPBkeWMiyDYnjyZaMz0u2EFqZRAkSJDVY4vRU5-ofKczRve8GtSS_mYu6hUDgL0tbuM7mrCwWSlOMvJXuco1)

-   The remote file URL is also extracted from the text-field.

![](https://lh5.googleusercontent.com/EI6ku5lPZqHVUhO-Cuura0mNj1V0D7uXdr8ZdzbvJI6Km6CpLjYdk929Ye8UubDO-WsqRD9oIffmgFvvqoVEcGhY73IK7rOKBowl_cjOpyf9AQ-0bXbhmkQKBNQ4L2t_-4zMYQvx)

-   In the above 2 cases, only one of the 2 variables ie "file" and "file_remote" will hold a value. We will check which of them is not null and pass it on to the parsing function.

-   The user can also choose from his/her previously uploaded files (described later).

	-   In this case, none of the above two cases happens.

	-   We simply get the path of the previously uploaded file from the server and pass it to the parsing function.

#### OR

### Part 2 (b) Using previously uploaded files

#### (Part 1 and Part 2(a) are skipped if this is followed)![](https://lh6.googleusercontent.com/cLPuY9armj_xOSw7hiygRVlEsZqHl9iE2f5OaM66i5RNvKxQUyeWeUgMPM_6W8JA8FeaSyQCpQtbWDU82yMWuq0yD180lZ4CBE7edz6fpcRnGZYafcTDRDBTuqTlxV6fE5ObDgJh)

-   For the ease of the user and to promote reusability, the user can plot charts from the CSV files they uploaded previously.

-   These files are the ones that are saved against the user when they first uploaded them.

-   This list is displayed on the same page where the user can upload the CSV file, so that the reusability option is available at the time of upload.

-   After clicking on the upload button:

	-   A request is made to the server to get the path of the corresponding file (in the same way, when it was made to fetch per user data).

	-   The file's path is then sent to the parsing function for parsing.

![](https://lh4.googleusercontent.com/1gHU6fxgOOvqtB51EFbHjpQpYgrd4eh0_Q6-Vw2Iw7xoQtn4HW1bhiACyLviSpknGAogV3XmKRlpY-3i52PmRbRWxpyB5ViitAZIlN8zvL7v_c0wr11tnu7uBBkRra3gD6oK54jm)

### Part 3: Parsing

-   We will be using Papa Parse, which is very powerful JavaScript library that parses CSV files at the client-side (ie in the user's browser)

-   To include Papa Parse, we'll use it's CDN:

https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.6.3/papaparse.js

-   We'll keep **download: true** for both remote and local files to be accessible to Papa Parse.

-   It can handle large sized files. To do this, we will be traversing the file **row-by-row** so that the entire file is not loaded into the memory in one go and the browser doesn't crash.

-   We can also enable a worker thread(**worker : true**), just to be on the precautionary side.


-   We will enable **dynamicTyping: true**  so that all data-types of the file data can be taken into account and kept as it is, not all of them as strings.

![](https://lh5.googleusercontent.com/r3jTvKxuTApFicqNHWv8hpRz-YyjqpvK_mG8jVe8QZx0nR68-vVG90_TyhW8wK8-S5_qk5G7GthLTpDPsXLwJq3X1AmO_36ANtKVS9KCbfPoA_KF6sWeqIQ0LqsP2F0-uC3nNMkw)

-   To **get the header names**, we can apply a technique:

	-   The first row, if it contains the header names, then all the elements in that row will be of the same data type (mostly string).

	-   If that doesn't happen, we assign dummy column names like col1,col2 etc.

	-   This needs to be done to display the sample data and get the columns selected.

-   **Detecting timestamps**

	-   To detect timestamps in the CSV, we can apply a string manipulation function on the first row of the CSV. The function will check the cell's string my slicing it and getting it into a common date time format like yyyy-mm-dd or hh-mm-ss.

	-   If this is found to be true, we'll check for a couple of more values in that column which will ensure that the entire column has time stamps and can be potentially used for a range of time slider.

	- This column will be selected by default for the X-axis when the column selection data is displayed.

### Part 4: Displaying Sample data and getting columns selected

-   We will display some sample data to the user and ask him/her for the columns to be selected, for which a graph will be plotted.

-   Since for X axis, only a single column can be selected, that will be implemented through radio buttons.

-   For Y axis, multiple columns can be selected, so this will be implemented through checkbox selection.

-   The graph type will be selected by the user through a graph menu (described later)

![](https://lh5.googleusercontent.com/kwtyiptm3N6EmBC05MaIqRytz7z44MoYYv-ug4uqVIM6h3ha_xbvq4oeiffvLeJIUoPcqCeiPGTvMTiTv3tf1U8g03DcZTgBcZwtRwSwr7KmT_eCBTQiiOyptmIFPRFGTjbvjvET)

(When labels for X-axis to be selected)

![](https://lh5.googleusercontent.com/moAdO7IrZuLUA3OkfzwWgjkARmfdoQ5jKCKA3HI6g7-dMS94qQAzsR2pOgfO7qAVdTxgdnLvaWdMKfke-hqeD1bmhNmBoUl9ODUULSQ-lP0WxpI6c5SXoCOYaphxcUVn0UFq94c_)

(When labels for Y-axis to be selected)

![](https://lh5.googleusercontent.com/i-XmEtyizClL28NsDc7mk3b8kGu1NF2-q9gar_Ert7530HafTHk-j9hLFPfM7bIIL3KYDtzz799gh_blgAbYotkTpxYm7Wre5rkDwxzMlM_LrUjPpd99XZyiE7r8wHF4upy0bTEy)

![](https://lh5.googleusercontent.com/BNCzpkJHGa0KFDrO_cHIM2bzIoB6tUlKCfK-YyEPC33gZXtAEiIdB1I7Ov67QY-4HYSbJDzr3i_lXoFYSbab96zdl9Z79yCjHc2lCNSGcOW5Xq768BNfAmPI0haGS_E9VkpO5Vz3)

-   The "Add Description" button will open up a popover, where the user can add a title and a small description about the graph being plotted.

-   This information will be saved against this CSV and can be displayed along with per user data.

-   This information will also be displayed along with the graph and will be useful if the user wishes to publish it as a research note.

![](https://lh4.googleusercontent.com/xUFmTSPs7R6B3Grlzb4dLdNLTKHQO-XlWDS3CPsA9uOq1MY6nBQiiKYXANMq_MpEcpUssgTR1tBvuUbQpKPxAzCYplxU9t2qnix9k9eF5u7u6NH1I0EI24cYm7Ibfrjhpu0YkOin)

-   We now need all the data to plot the graph

### Part 5: Getting ALL the data

-   We have the column names for which we have to plot the charts and we have the graph type. We now need to get all the data (not just sample) for those columns and compile it into a hash form, so that chart.js can easily extract the information and do the plotting.

-   To do this, we just have to pick out the required columns from the parsed data.

-   The JSON data will be of the following format:

![](https://lh5.googleusercontent.com/dnQc-htYMg-ClKrz5OAwpxBU-s2cuqeEMaEJ4895Ji9zbkEjWn41qQJfH95awgEjrJzOjXRQKmrOT2RgjIwAsQXKPejwsSanSriUtAKBIuElrDms8ywpQhAws1bh3JaQTKCrcZ8D)

-   X-Axis has one array of values or labels.

-   Multiple data sets can be plotted using chart.js so for the Y-Axis, the user can select multiple columns and they will be taken as arrays of values.

-   With all the data in our hand, we can now give it to Chart.js for plotting.

### Part 6: Plotting and displaying the graph!

-   With the final, parsed data, we finally use Chart.js to plot the graph and display it to the user!

### Plotting the Graphs

Moving to the more graphics part of the project, we now see how exactly we'll be plotting our graphs.

For this, we'll be using Chart.js, a javascript library designated especially for graph plotting.

We can use the CDN available for chart.js:

<https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.js>

We will be using this version of CDN because moment.js is already included in Plots2, so we don't need to use the bundled version, because it will reduce the page loading speed.

Including it as script tag:\
![](https://lh3.googleusercontent.com/bkj7Spw0iVP5YpCasZCIMfEbP_UUUaBX0PGHdiRf7-iWIphEpvm2gi1hau4f1fVI6rUe90NViS9WxDlMSpR6GSuhdwuw97KW-4B-dYR96C4ZGjVvrRtc-E2dgYRrCfj8mZKN5juP)

It has a variety of different configurations for displaying data through graphs and offers numerous graph types for the user to choose from.

Simple working in correspondence to the data we have:

-   We will get the JSON data in a compiled form after parsing with labels for x-axis as values and set(s) of values for y-axis as values and the label name say "dataset1" as keys for y-axis values.

-   The JSON will also have the type of graph to be plotted, which the user selects from the graph menu. The Graph Menu will provide basic graph types, with some sub-categories of each graph type that will be useful for the users and easy for them to understand.

-   We'll be using simple Chart.js documentation code <https://github.com/chartjs/Chart.js> and design it according to our needs and what all things to include while plotting the graph like:

	-   Color Scheme

	-   Tooltip design

	-   Information in tooltips

	-   Labels on Axes

	-   Legends

-   The graphs can be made responsive by wrapping the "canvas" element in a container div and setting it's position as relative.

-   Below is the skeletal script for plotting function of graphs. The options part is for the design and will be written tailor-made for our site!

![](https://lh3.googleusercontent.com/J6kpUcNZYhUEmeQ0BsiruPGQqk9EPTGwpweo6ynPRKfnao_bi1oeoazJSiH9Zla4VehdIKS_I55URpTI3HXzS0CXjbXHYv5kR_kmfcZ7OKUOwu6i4eZAkUMjlz8qIIzHnUg1HjQ-)

Different kinds of design options

This is how the menu will look like:
![](https://lh6.googleusercontent.com/LKX8paTRpkp7sSzyXCW07BRtX_-srjeGSCeFQR5sdm3CZ6Ok3VDfuEuEkih1836Gs_iStakIbCNdQUmm-bkNPPaC9Ji49XdxVJk7eymWukPmnZOZYCUa13LWbhGf95DLdoZeQNEJ)

-   On clicking on a graph of a type, that type will be selected.

-	The graph options on the graph menu act like just hidden radio buttons and are sent as a parameter along with the selected columns and the type is used conveniently by Chart.js. However, the most frequently used chart type in sensor data is line, so that will be the default selection.


-   With all the information in hand (ie Column names for the axes and the graph type), we would finally plot the graph. On click of the "Plot Graph" button.

![](https://lh4.googleusercontent.com/vQ6xZyC7baGlNy17VZodsKH1HsY5pLNhyit2b7pJNXAnsm2txNia70FPPMecAj81hxKZcwrOg5iGY9t_rC4wc52NfKgGbzkO33nGJCEL-q-Wwukuo735eREXYk21hZxUFxmcfclu)

-   The features of the buttons above are described later.

### Browsable Time Slider

-   A time slider or a range slider is used to select a particular range of data and zoom in to the graph in that range.

-   It is typically useful in CSV files where the data size is usually large and a slider helps in giving a better insight of the graphical analysis.

It can be implemented through a plug-in designed for Chart.js library which is easy to use and integrate with our Sensor data library.

Github Link: <<https://github.com/schme16/Chart.js-RangeSlider/>>

The design will be changed and twerked up in accordance with the design scheme of the charts.

Here's how it looks in functioning :

![](https://lh5.googleusercontent.com/N-sXOU3qveM-kEhC2RjwhM5dW12eYitfeCAZ7qgFlN05cthiIIYU30DFpWR1btBcxhnfC5q7SGy5InREp6i5MbqXZsbS2HLrEl8hZponn69v5-1x2U6ZDepGNDEP1ZNajlLGQfXy)

![](https://lh3.googleusercontent.com/lYnVZeWmj0fMUAmxHUurtgiZZzMq0uBMwNxoz2UHfmDnJy7LWUgwXd08l9Evjr8rKd5npiUuqlXLu88VbZ9NNls7PajU0bArx9b3I739oFd6BaObJ7iV9L3S1Gq_iu3EJWn5zkgi)

To integrate into the graph-plotting JS file, we simply need to create a new class:

![](https://lh5.googleusercontent.com/JhwI3o-MK41gM_DAsCg4zGpzE-S9sNRybTDUfnORRckApiJ6PTOyntZz99GDU07WOkkVOzFEmO6kv0NN4PjEj8DIYhzTpb_OvCq6jAnjRM7G2j6EyzM6tDhvtZYPEGQQPd-kCrLo)

Here a and b would be the the values we initially want the slider to be set to, which should logically be the extreme values of the dataset, as initially we would be displaying all the data in the range and the user can adjust it according to their view frame.

The code will not be used directly and will be implemented separately so that no extra bugs are introduced and it is tailor-made according to our library.

These dependencies are needed to be resolved, only the noUISlider is the new one here:

-   jQuery

-   Chart.js

-   noUISlider

###Per-Day View

-   For some kinds of data, like purple dust sensor data, we need a per-day view, because the quantity being measured changes around the same time everyday and dividing the graph in separate days for that gives a better analysis.

-   In this, the CSV file will be of the format:\
![](https://lh4.googleusercontent.com/P2NxudRqI7JuBNyWerQ9OOTPgNy3ujvcBlI9pB64s3L_ctIUOFryJEiK0KGny0OIixdsoABOG1zlM4NwRIBJjDJ-N_1w0N7tHhAoo-srmnBiWCZfnOCqEzi38fNjOKewW2oIhPWS)

-   So once the user selects the dates for plotting, we can show a checkbox with the title "Per-Day View".

-   If this checkbox is checked, then the user doesn't have to select the graph type (in this case there will be multiple line graph and will be automatically selected) and each line of the graph will have a different colour for each date.

-   On the x-axis, the parameter could be time/hours of the day so that the user can get a view of the data at different points of time (and zoom it using the slider).

![](https://lh4.googleusercontent.com/5CvTzWIM8HFCcU9wmrCHtqfWGMMAZYIssfDTRfxW4x4Ax5NfZytkYFJNYAIlTrmQ2x_xKYNnFzvW-k_U3NJ7HMHOas_x_ZFaAjypMB2nrNESJEMTSBUdvDhRv_QU4bOra81mytiE)

### Displaying per-user data

![](https://lh3.googleusercontent.com/4Bl0sxqmL1MdfWbYVyWZ6lsD53GKj0Qp95mYM6USCf7e0DXOnpWEP7pQyo-e8wuAA2_EqTZqhtHDcuavisEM0mZU17CgcfBUYvz6xfRF3N0U4cFJ5ZlR9fmmNYE9jh-geRpF_FS9)

Link: https://publiclab.org/data/username

-   This page will display a list of all the CSV files uploaded by a particular user and a link for each of them to be downloaded.

-   The files will be stored in a bucket in the server using paperclip at the time of upload and will be retrieved from there.

-   For doing this, we will be implementing a one-to-many relationship between a user and CSV files (one user can have multiple files).

-   So a user: has_many files and a file belongs_to a user.

-	Although a similar relation table for images is already in use, a new table is preferred so that the uploaded files can be used more efficiently for all intended purposes, which might be a little restricted if the image model is used. Also, since the image model is there, the structure of the CSVFile model will be on similar lines and the skeletal can be constructed easily with the available code.

-   PS: The user model is already created, this will just be an addition to it.

![](https://lh4.googleusercontent.com/RQzZqx9zcvo3Y2sfNXm58FwGi8Lnn3ES_3eKk0EWWdJ0isfO7mG5BSAShFQABu0rB3q1to3bHDOyo23ZPW2x3F_oKqosmtOF-la-b1Oyu0LcGNe7GWXa79dfbOSfFpLPpL3ZEdjj)

(foreign_key is to link both the tables)

So we will create a new table called CSVFile which will have 4 columns, name:

1.  File Id

2.  User Id (the user to which the file belongs)

3.  File Name

4.  Path/location of the file in the server (or in the remote server)

To generate the table:

**rails generate model CSVFile file_name:string, user_id:integer, path:string**

The migration would look something like this:

![](https://lh5.googleusercontent.com/vLIB19ou3QnCZ5XFEluE5Q3fuRNztK-vaJpG3jUCmaRMh0o_ueyeSJo1rLMJPItycC2TE3hy7wt_E8I_MN4yzSqq9k9KkCbP4daA9xdoYJhUYMc9fhKIYXVILpV3ukOkVerdx5yZ)

Storage

-   Saving the file (the file is received at the time of upload via AJAX form submission):

![](https://lh6.googleusercontent.com/owbrzRkv8JlDaFG03aSpVVe4BclvBSMmKXpoH75S8obeF_V8Rz0102k5kQ8fMpVoLQCohMNfaIfFiKoKJItGE2kSIJ-5JI7WI4Y4sfd4JGJtg_5yVOT-pGDKMMvZWnkoMYMZVHO5)

-   There will be a download icon button against the name of the file and on clicking on it:

	-   A function will be written in the user model file and in the function, the corresponding file name will be searched in the relationship table, something like the profile_image column:

	-   The file path will be returned by this function and will be put in the download icon's  href parameter and will be made available for download.![](https://lh5.googleusercontent.com/cmTauRD_Me65v12RKL9rqFiRXXldCxrRQ0Rwkwy2n-knS9lV8lUim53vmzM9ghPeSNLLFro01DD983BA1o7Uqj1Bdk_MwnOypRSmgnFa2-PcpXYb_sg_ueIeGjrttl5SZgyD5edQ)

-   There will also be a "Delete File" button next to each file.

	-   If the user wishes to remove a file from his database, he can do so by clicking on that button.

	-   To do this, in the CSVFile controller:![](https://lh6.googleusercontent.com/xfoJKrPOyy3qhdfLWStuvZxn30AhB_CVoOU57Ajt4B5VYgMKnGwoyrsnvc0qjvvNGGD0WQuElXMI2y_XkVngAy9FOpjLSuKm_0QDwfR7W-muZkjSxMyI5E3eOvIFedPMA6a1-ols)

-	There will also be a link to the research note the user might have published at the time of plotting (described later).

### Exporting CSV files to Google Sheets

-   Google Sheets API helps in creating CSV files to Google Sheets and exporting them

Flow:\
![](https://lh5.googleusercontent.com/M3fArxZcHQcUQzpKtJs4AIzRf2NeDeqp5NevN-Gh1yrb3dELD4SazSjKe5TeMlmorTt5ZMF4kFo-gv1pcG3fa5-OeGvO8i4cp6XoMSUUadt_Vk4k8GwSYMG9ysKgfrWn_HqoHLYG)

-   Here, we can export the CSV file data to a Google Sheet and open the newly created sheet through the API in a new tab.

-   This is because, since it is a Google Sheet, the exported sheet will require the user to login with their Google accounts (most of the users have a Google account) and then they can view the sheet and edit it as well.

-   To create a new sheet through API:\
![](https://lh5.googleusercontent.com/13LXJNn65spxsanG35EgYY9iBjLz63KWjlaaLLdDJi0-R5CgGwZLelRnKY94uUiSmRsIXVOQhyraJi1ZCEBac0VsGKdovXbg6uaGxG_XDNKP9xu_I48ovkoZGH8_g5-qUuls-aMd)

-   To import the CSV data into the file we will use IMPORTDATA(url) function.

-   The url will be the path of our CSV file stored in our server.\
![](https://lh5.googleusercontent.com/JRx_1xsX0A3NbqqPmvWNDOtbKDhPf3xqugCtKIKb0-984bZ2Xu-Hb2HiPE-ygUjhA8u5cssTBePra_WLmu8jItqYnLAwEXChGe81bGMhBCpMPcfEqj0dfd7eTWRdUaq0R29pDRQa)

-   When we create a sheet, an instance of the spreadsheet is returned as the response, and that JSON contains 'spreadsheetUrl' parameter which has the url of the spreadsheet. We simply open the created sheet in a new tab.![](https://lh6.googleusercontent.com/tJVghppegjxLZYpKJS1b584uCOOrQe5VRsD4qx0Cw7jTol0rW2dLb_ajcEo7Lxloo20i9fxZMoFbSQGcqghfJtBKZfjcUFXgTAF-3FScquWrZMw06dCxlsyyLG1ixRnmSJ_dkyO6)

### Plotting Multiple Graphs from within the same sheet (using different columns' combination)

-   To facilitate better analysis, we can provide multiple graph plotting on a single page, something like what is shown below. This would allow the user to compare graphs easily as there are in the same page.

-   This would also enable them to create a report-like format, which can be used later.

 ![](https://lh3.googleusercontent.com/13l-UXJ5mNp7hjcKC1bJ0wBBXxNfxVPY_kBTULpvgzRsGn6bezMYlzv6a1QBOtUADr7YGKWNw-COmRH9iXfVdfWF4K_34manrKqShglswSC4iEZ5GIHR23kM9oemfClqc7nkKWB8)

-   Once the file is parsed and we have displayed the columns for selection, we display a "Add Graph" button next to Plot Graph button. This is because, once the user has selected the columns and graph type for the first data, he/she can choose to plot the graph or add another graph.

-   Whenever the user clicks on the "Add Graph" button, number of graphs (n, initialized with 1) is incremented by 1 and the user then selects the dataset and graph type for the next graph.

![](https://lh4.googleusercontent.com/sbK58C89lxIhtDpQ5jjpUwkwu8xm1rD1sWDia1eQWJF5iFeQJhaMiFYoSjSZCFmcTJAelzD9tWTA_HCWHN7uETxDBYkpDMte-hvWIF9_W2Q9C5luDAJJ6H41GK2g_i9Rm0DkZ4mE)

-   We get a different hash for each selected column set, we will just have to run that loop the number of times selected by the user. This will be light to do, since we just need to pick out the columns that are already parsed.

-   We will dynamically create canvas elements using JavaScript and run that loop n times to create n multiple graphs!

 ![](https://lh5.googleusercontent.com/WE23CSWao-VZZTtvewXu4ioqB2eSTWlWzmGafy1jSdaonQ0ez-PKWm3Y4LW7o95SH9l9h2wEvqR5lJY_JlXvHUNfEg0r27CZma8Pf1bvrJlQRC9rfq6Swf3k43wHKkvTVESscs8Q)

### Publish as a Research Note

-   To increase the usage of the plotted graphs and to get multiple perspectives on the analysed data, there should be an option to publish the charts as a research note.

-   This way, other users will be able to view it and discuss around it via comments and blogs.

-   To do this, we will put the produced charts in a partial.

-   That partial will be available for rendering in:

	-   The view which is displayed once the user clicks "Plot Graph".

	-   In the <https://github.com/publiclab/plots2/blob/master/app/views/notes/show.html.erb>  which shows the published research note.

-   When a user creates a new research note, the Public Lab editor (which is also a stand alone library) comes into play (<https://github.com/publiclab/plots2/blob/master/app/views/editor/rich.html.erb>)

-   A similar task will be performed, when the user clicks on the publish button, the partial (which was being displayed ) will be fetched by the plots2/app/views/notes/show.html.erb file and a new note will be created and published.

![](https://lh6.googleusercontent.com/lhMG2903kZC2U9B-RwMwkyGHv5Tv7O7zi16h5l8Tz_wTfNqzrYX4MlRwBb-uSjPDk7py2KB3J-Vuci7BWudK9kXlyIw_I9aD7rzZ3JmDithebrMcHLq3taGg3tPNdFBOffWZMk6c)

### Creating charts from previously uploaded files
![](https://lh6.googleusercontent.com/cLPuY9armj_xOSw7hiygRVlEsZqHl9iE2f5OaM66i5RNvKxQUyeWeUgMPM_6W8JA8FeaSyQCpQtbWDU82yMWuq0yD180lZ4CBE7edz6fpcRnGZYafcTDRDBTuqTlxV6fE5ObDgJh)

-   For the ease of the user and to promote reusability, the user can plot charts from the CSV files they uploaded previously.

-   These files are the ones that are saved against the user when they first uploaded them.

-   This list is displayed on the same page where the user can upload the CSV file, so that the reusability option is available at the time of upload.

-   After clicking on the upload button:

-   A request is made to the server to get the path of the corresponding file (in the same way, when it was made to fetch per user data).

-   The file's path is then sent to the parsing function for parsing.

-   After the selection, the normal flow of showing the sample data and plotting the chart continues.

### Saving Chart as an Image

-   We can save the chart as JPEG image, for the user to download it as a copy.

-   We can convert any HTML canvas element to an image format using JavaScript's toDataURL() function. ![](https://lh6.googleusercontent.com/mH4Y1BGJOFTebamr7mHEYlO-Mho_B9962r13zNW_K3K-QwhxUBb8_XpVsex0hlTQ3E8h2fGXOZidRYxXxCZ-XzdaQhiD8tHiV2QpXpwsbSpbSl_DKPaC4BCoSA4s-fFSLD-dfDrR)

![](https://lh6.googleusercontent.com/Y24n-xtY5l_i0l9QYhhn8Q9SFAebMjSI7nqUVs8KnolQjD_fE2sYht4SKMxCf1cWhj1bW7fqQ25c9pUgnOhR3kTFiO7vqqvDnYi5ddKHDLuddu1u-woQGM9SzS3zcv2BNqFfhZcQ)

-   This provides the link to the image file that can be downloaded.

-   This url is set as the href attribute of button and on clicking on it, the chart is saved as an image on the user's machine.

## Timeline

Ps: At the end of each week, I'll be creating at least 2 FTOs to welcome new contributors!

![](https://lh5.googleusercontent.com/amyNPHfOaqwmVODQuBO3YUhpn95xIn8hu1JaQ07CK068S1e83eSet3ZA9hWmGBV9B8kjjZT4m5Tes3e1e8YYqbuBBCVvRzCrwb8Nmi3_V5QTyIfuTFwJkdkQQKAHrCNfakoW2mLm)

![](https://lh3.googleusercontent.com/GlNM0RYjHpAiBfFS4qcw8UftCizWTtgQzEifo2jf3qHseqhqMsxr6sa3gS0HMNJrk3AUvOcJteUP9iuFE_WZBh5Y_zXYhSaMsBgj5OgXQw1x4Opd-mXbV0O0myQqkpire4cWdoVw)

## Needs

I would be needing the guidance of mentors and I am open to any kind of help or input from other contributors.

## Contributions to Public Lab

I have been actively contributing to Public Lab since December and I have worked on different types of issues, from minor to major and involving different aspects of the project (frontend and backend both). I am an active member of the community and have helped my fellow members with their issues and also opened many first-timers-only issues to welcome new contributors. I have also helped in reviewing and expanding the community during the peak time (<https://publiclab.org/notes/gauravano/03-29-2019/software-community-growth-through-first-timers-only-issues>) .

I have made about 20 commits to the plots2 repository and raised about 11 issues and I am well-versed with the codebase. I have also tried to expand MapKnitter to welcome new contributors and am in a discussion on some projects there as well.

I am working on some issues currently as well and hope to continue to do so!

Here are the issues reported by me:

<https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3AIshaGupta18>

Here are my merged PRs:

<https://github.com/publiclab/plots2/pulls?utf8=%E2%9C%93&q=is%3Amerged+author%3AIshaGupta18+is%3Aclosed+>

Weekly-Check In opened by me:

<https://github.com/publiclab/plots2/issues/4844> 

![](https://lh5.googleusercontent.com/x5j01rn93oyPYSEm_iq7x8H1MPhJdH-Rbhs51KWK488uHpoa5aEBeBjfod_uhJIHqUdhm6YvRc9MU_0P4kmIwvBic515hOfRvwxa00ZBHcvvdw3AVK18mS0eaEPGMNiVtGI9uUfK)

Some activity on Mapknitter:
<https://github.com/publiclab/mapknitter/issues?utf8=%E2%9C%93&q=is%3Aissue+involves%3AIshaGupta18+>

## Experience

I am a first-year undergrad pursuing CSE.

Being a part of the core team of Developer Student Club, through which I get to learn a lot about new and upcoming technologies, working together as a team towards finding solutions to real world problems and the experience of implementing and expanding my skill set to build things.

I started with basic JavaScript like creating a dragbox: <https://github.com/IshaGupta18/dragbox>

And a basic ping-pong game: <https://github.com/IshaGupta18/ping-pong>

Then I moved towards a little advanced JavaScript and learnt how to use AJAX and fetch data from APIs

<https://github.com/IshaGupta18/JQueryAJAX>

After this, I made a chatting engine in one of my Ruby on Rails projects using websockets for the users to chat in a common room:

<https://github.com/IshaGupta18/my-connecti/tree/master/connecti-chat>

I have worked with Ruby on Rails for about 7 months now, which I learned at Coding Ninjas (<https://codingninjas.in/courses/classroom-web-development-course>) , which has taught me Ruby on Rails from basic to advanced level so I am well-versed with the platform.

I started with some basic projects to become comfortable with Ruby first: <https://github.com/IshaGupta18/Hangman-Ruby>

Then I began creating some basic projects in Ruby on Rails to get an idea of the folder structure and the MVC structure:

<https://github.com/IshaGupta18/basic-june>

Then I learnt authentication with devise gem for user management:

<https://github.com/IshaGupta18/devise-project>

Finally, when I was thorough with the working of the platform, I created a bigger project, called connecti which is fully functional blogging engine with user authentication, oAuth, mails, many-to-many relationships between users, using AJAX for loading and also a JavaScript based chatting engine.

<https://github.com/IshaGupta18/my-connecti>

I am also comfortable with Data structures and algorithms and am fluent in C++, Java, and Python.

Apart from this, at the front end, I have worked with and confident in HTML, CSS and Bootstrap.

I made a basic resume landing page using HTML and CSS:

<https://github.com/IshaGupta18/ResumeHTMLCSS>

I am a member of the development club of my college, Byld where I get to organize and attend sessions about upcoming technologies.

In school, I was part of the cyber society, and have participated in numerous inter-school competitions.

## Teamwork

Open Source is a place where people work together as a team even if people don't know each other that well or have never met. Running a project as a community shows how much we can do together, and how little we can do alone.

In open source, I began my journey with Public Lab which has shown me how powerful a community is and how helpful people are. During the initial stages when I was working to resolve my first issue and had so many doubts, I didn't feel hesitant or unwelcomed in seeking help, because people were always ready to help me. I felt immense joy when my first PR was merged and I knew I couldn't have done it without the community members.

I felt so motivated when I my peers helped me in merging my PRs and I felt so good in helping them by giving my best.

When I became more settled in the community, I felt that it was time to give it back to the community by welcoming newcomers, helping them create their first PRs and getting them merged and it felt terrific to see the community expanding.

Apart from this, I have worked in several group projects in my school and college, especially on IoT and on environmental projects in school called "Vasudha" (meaning Earth in English) every alternate year that dealt with a specific type of environmental problems like the issue of non-biodegradable poly bags, global warming, waste management etc. and required us to conduct surveys, analyze the results and propose solutions.

I feel motivated to resolve bugs and solve problems because that gives me a chance to use my skill set in making something productive. I have loved computers and working with them since I was little and nothing gives me more happiness than writing code for a community, where people share the same passion.

## Passion

Today I see a lot of pollution in the city where I live and spent my childhood in, and it causes me so much distress, to see that the Average Air Quality index has risen to an alarming value of 296, which is responsible for causing so many diseases around me. The situation wasn't so bad when I was younger, and to see it change so drastically makes me very inclined towards Public Lab. Public lab interests me because of its research and development in the environmental field and the way everyone here is enthusiastic and determined to solve environmental problems. I feel that even if I am able to contribute a little towards this organization, it will be my first step towards helping create a cleaner picture and do more in this field. I am passionate about solving real-life problems, things that help people, even in the tiniest possible way.

## Audience

Even in this fast moving world, there are people who still are not very comfortable with using computers to their best use. Through this project, I want to target the non-programmers in making use of the data they have and turning it into something more conclusive, useful and informative, with ease and without losing focus on their task and getting the analysis part done quicker.

## Commitment

I completely understand that proceeding forward with this project and completing it is a very serious commitment and there are still a lot of things that need to be done in the project and I am really looking forward to exploring them and will be fully dedicated to completing it because I

am very excited in creating something new and useful and would be more than happy to work on it!