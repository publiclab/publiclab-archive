---
title: "SoC proposal: GSoC: Websocket Implementation for Real-time Usage and Sensor data and Display Library"\ntagnames: 'software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects'
author: namangupta
path: /notes/namangupta/03-02-2019/soc-proposal.md
nid: 18452
uid: 522848

---

# SoC proposal: GSoC: Websocket Implementation for Real-time Usage and Sensor data and Display Library

by [namangupta](../profile/namangupta) | March 02, 2019 14:24

March 02, 2019 14:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects)

----

## Google Summer of Code - 2019 

**Websocket Interaction for Real-time Interaction and Sensor data and Display Library**

### About me

**Name** : Naman Gupta

**Github** : [https://github.com/namangupta01](https://github.com/namangupta01 "https://github.com/namangupta01")

**LinkedIn** : [https://www.linkedin.com/in/namangupta01/](https://www.linkedin.com/in/namangupta01/ "https://www.linkedin.com/in/namangupta01/")

**Email** : 01namangupta@gmail.com

**Gitter** : namangupta01

**Location:** New Delhi

**Affiliation**: Bharati Vidyapeeth's College Of Engineering, New Delhi

I am in my final year pursuing Computer Science Engineering. I am Full Stack Developer with more than 2.5 years of Experience in this Domain.


## Project description
Websocket Interaction for Real-time Interaction and Sensor data and Display Library.


### Abstract/summary (<20 words):
Project includes two parts, First is implementing the ActionCable for implementing sockets and second is making a library for Sensor data and Display Library.

### Project Goals
1. Integrate Rails ActionCable into the Plots2 Project
2. Implement browser Notification API into the system.
3. Integrate Sockets for Notification System.
4. Integrating Websockets Notification system with Notification Api implemented into the system in 2.
5. Implement Functional, Unit and System Testing for the integration done in above steps.
6. Implement Sockets for Real-Time addition of Comments.
7. Implementation in Front-end part for real time addition of Comments.
8. Integrating the Sockets for Real-Time addition of Comments (Goal 6) with Front-end part for real time addition of Comments (Goal 7).
9. Implement Functional, Unit and System Testing for the Real-Time addition of Comments.
10. Backend implementation of show Notification History i.e a place on front-end where user can see all the notifications so that the user do not miss anything.
11. Frontend implementation for Show Notification History.
12. Integrating implementation done in 11 & 12.
13. Write unit, system and functional tests for the Show Notification History Feature.
14. Basic setup of Sensor data and display library like Basic Repo Setup and Folder Structure.
15. Add CSV parser in the library.
16. CSV Input field implementation for drag and drop and browsing upload.
17. Implementation of Uploaded CSV parsing.
18. Write tests for goal 16 & 17.
19. Integrate chart library (i.e., chart.js)
20. Implement various chart like line chart, bar chart etc present in chart.js.
21. Implement column selection for x-axis and y-axis from the csv parsed data and also implement the type of chart selection using drop-down to form the graph from the selected  columns.
22. Implement Time Slider and export options for graph for converting into the downloadable picture.
23. Write tests for goals 20, 21 & 22.
24. Get Embed code option of the chart in order to show that chart to any other place by just using the code.
25. Finally implement the library in the plots2 project.

### Problem
_As already stated above that project is divides into two parts. First is Implementation of sockets for real-time use which will help in better user interface for the users and second is Sensor data and Display Library which will help in better analysing the sensor data via visualising charts._

### Implementation

#### Integrate Rails ActionCable into the Plots2 Project
For real-time integration of Web-Sockets, we will be using ActionCable in rails. Since this is supported into the current version that we are using in plots2 backend rails code. So for integrating this we will make publishers and subscribers for different rooms which will basically subscribe to different rooms based on the conditions and publish or broadcast to those rooms.


#### Real-Time Notification System by implementing WebSockets using ActionCable in rails.

Real-Time communication is performed by Using WebSockets which is a web protocol for bidirectional communication. WebSocket is not a request-response protocol where only the client can request. It is a socket(very similar to TCP socket). Mean once the connection is open, either side can send data until the underlying connection is closed. While in HTTP, only client request server responds.

![](https://ninjasfiles.s3.amazonaws.com/0000000000001771.51)

Rails also support the implementation of WebSockets using ActionCable.
Using action cable we can implement sockets in client and server side as well. The client is subscribed to a channel also known as room and everything that broadcast to the particular room will be received by all the sockets or user present in the room or channel or we can say that to all the users who have subscribed to the room or channel.

For implementing real-time notifications we will follow the following process:

1.  First of all setup and configure the Redis which is a key-value based DB which will be used by the actioncable to store the sockets information in a key-value form. For this import the Redis adapter for using Redis and configure the Redis credentials in cable.yml.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001786.37)
	
2. Whenever a user opens the website and if he is logged in then create a channel and make a subscription of the users socket to that channel.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001773.57)
	
3. When ever new comment is added to the page find all the users that follow that page or tags used in that page and then broadcast notification those users using ActionCable.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001774.02)
	
4. Handling the broadcasted notification data on the client side in a function named received to show the notification. Because whenever the data is broadcasted on the server then received function of that channel is called.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001775.05)
	
5. Get the Notification Permission
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001782.31)
	
6. Implement browser notification API for displaying a notification.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001781.27)
	
	Here is the notification:
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001779.25)
	
7. Perform all the notification process in ActiveJob to perform this job in the background.

But there is one problem in the above approach which is multiple tab issue. Multiple tab issue is the issue in which whenever the user has opened multiple tabs then those tabs sockets are subscribed to the same room and everything that is broadcasted to that room will be received by all the tabs which will lead to the multiple same notifications.

There is no way in ActionCable to transmit data to a single socket. So in order to solve this issue, we can use a separate room for every tab i.e one room or channel per tab.

This will be done by using the long token as a postfix of users:id namespace as shown:

![](https://ninjasfiles.s3.amazonaws.com/0000000000001787.55)

And at the time of broadcasting, we can find all the sockets having name space of users:id as a prefix as shown.

![](https://ninjasfiles.s3.amazonaws.com/0000000000001789.01)

By doing this we can prevent multiple tab issue.


#### Testing of Notification System
In the testing of Notification System we have to test mutiple feature : 
1. Unit and Functional Testing of Browser Notification API implementation.
2. Unit and Functional Testing of Web Socket Implementation for Notification.
3. Integration testing for the Whole Notification System.


#### Real-Time addition of Comments

For Real-Time addition of Comment we will use WebSockets using ActionCable here also. Whenever a new or comment is created we will find all the peoples who are following that node and then perform Broadcasting operation in the Background using active jobs. We have to create a separate channel and add an after_create callback to call a background function which will call an active job perform function which will Broadcast to the specified users.
And on the client side subscribe to those channels for getting the data.

Steps to implement this:
1. Create a Comment Channel.
2. Whenever a user loads a particular node page than subscribe to that node’s comment channel to receive the real-time comment.
3. Add an after_create call back which will find the users following the node and then call the Active Job to perform the Broadcasting Function in the background.
4. Handle the nodes comment channel or room event on the client side.
5. Add unit, functional and system tests for real time addition of comments.

#### Show Notification History

We can also have a feature to show all the notification in case any user who were not online misses the browser notification but can go to a place where all the notification can be seen. This feature will be done in independent to the browser notification feature and will be consider as an extension of Browser Notification Feature. This feature will help user to not miss any notification and will also provide read and unread notification by highlighting them as happen on social-media sites.


------------


## Sensor data upload and display library

With the sensor data upload and display library on public lab website we can use interactive graphs to show the data. And since it is going to be the library so we can use this in any of the platform.

For making this library lets divide this into steps:

1. **Uploading on csv from local or provide online link to a csv for parsing and extracting the data to analyse**
	
	There will be two ways to uploading the csv file. One of them will be upload from local and other will be via a link of csv present online.
	
	After selecting the file from the browser menu, we will create a CSV File object which will be used for parsing in next steps.
	
2. **The next step is parsing the CSV file that we have browsed in order to extract out the data.**
	
	After we got the File object from the file browsing in First step the next step is to parse the CSV file in order to get the data for the analysis.
	
	We are going to use PAPA Parser to parse the CSV file. PAPA Parser is a famous open source CSV parser. For more information about the parser go to https://github.com/mholt/PapaParse. 
	
	After passing the File Object and callback into the parser we will receive the parsed result in out function callback’s argument which will contains the array of arrays containing the csv data. And we will have a option to look at the parsed data via open data in a model. As shown in the figure.
	
	Before Uploading CSV file :
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001793.15)
	
	After uploading CSV fIle
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001795.22)
	
	After Using View CSV data a model will be opened showing csv files data.
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001796.22)
	
	**Parsed data in the form of an Array of array**
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001797.27)
	
3. **Next step is to include a Standard Open Source Graph Library**
	
	Chart.js is a standard widely used open source graph library with wide variety of feature. We are going to use this for showing the Graphs or charts.
	
4. **Next step is to select the graph type:**
	
	After uploading the csv file, there will be a dropdown for selecting the graph type as shown :![](https://ninjasfiles.s3.amazonaws.com/0000000000001798.51)
	
5. **After selecting chart type now we have to select the columns for plotting in chart.**
	
	No of columns selected will depends upon the type of graph selected. For example: if we select the line graph type then there will be two columns selected one for X-axis and another for Y-axis. Similarly, if we select radar graph we can select multiple columns as well.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001790.56)
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001791.56)
	
6. **After selecting columns we can now have generated chart**
Now after selecting the columns from the drop down we will generate chart . The chart will be plotted between the columns selected between in the above x-axis and y-axis drop down. As shown in the figure.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001799.02)
	
7. Write Tests for the csv parsing, column selection, graph selection and graph plotting.
	
8. Export Option for Graph to convert in to the Downloadable picture format like JPEG, PNG.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001899.14)
	
9. Implement Embed code option which will just convert the graph into the link and this link can be inserted anywhere and the graph will be accessible. Example is shown in the fig.
	
	![](https://ninjasfiles.s3.amazonaws.com/0000000000001900.16)
	
10. **There will be multiple chart supported from line, bar, area to radar and Pie. And all this will be easy to integrate by just using id and then call a function with this id as this id to embed the this library in any of the page. **





### Timeline/milestones
| Time Duration | Work to be Done |
| ---- | ---- |
|  27 May to 2 June | Basic Action Cable Setup in Plots 2 project and Implementation of Browser Notification API |
| 3 June to 9 June |  Implementing Sockets for Notification and Integration of Notification Sockets with Browser Notification |
| 10 June to 17 June  | Writing tests, Opening Corresponding FTOs on the previous week work and outreach |
| 18 June to 23 June  |  Implementing Sockets for Comments and Real-Time comment frontend and writing corresponding unit and functional tests |
| 24 June to 30 June  | Integrating sockets of comments with Frontend |
| 1 July to 7 July  | Writing corresponding integration and system tests and Opening FTOs on previous weeks work, outreach |
| 8 July to 14 July  | Basic Setup of Sensor data and upload library project, reading and exploring more about chart.js |
| 15 July to 21 July  | Implement uploading of files, csv parsing feature and Integrate Chart.js library |
| 22 July to 28 July  | Write unit and functional tests for previous weeks work, opening ftos and outreach |
| 29 July to 4 August  |  Implement various charts of Chart.js in the modular form and add functional tests for those modules |
| 5 August to 11 August  | Work on Chart selection and column selection based on graph for plotting graph |
| 12 August to 18 August  |  Add export options for csv data in the library and write functional and unit tests for the previous week and this week work |
| 19 August to 25 August  |  Integrate this library into the Plots 2 and show the lists of csv data uploaded |

### Contributions

I have been contributing to PublicLab from more than a year now and have also worked with PublicLab in GSoC 2018. Link to my contributions are:
[https://github.com/publiclab/plots2/pulls/namangupta01](https://github.com/publiclab/plots2/pulls/namangupta01)
[https://github.com/publiclab/plots2/issues/created_by/namangupta01](https://github.com/publiclab/plots2/issues/created_by/namangupta01)

I have build many advanced features in Plots2 like reply_by_email, reply_by_tweet etc.

Not only in code, I am also contributing in Public Lab outreach by conducting Seminars, Workshops and Webinars and helping people to get into and contributing in Open Source Softwares.

Me along with my friends conducted webinars where we explained of getting started with FOSS Community like Public Lab and guide to GSoC -- of course Public Lab was the main highlight in the Webinar where we explained about Public Lab user friendliness for First Time Contributors, explained the call for proposal page on Public Lab Website etc and various Active Public Lab projects.

Here is the link to the webinars:
[https://www.youtube.com/watch?v=BNhBd_WfKVA&t=637s](https://www.youtube.com/watch?v=BNhBd_WfKVA&t=637s)

[https://www.youtube.com/watch?v=7U7NbL0V0Zk&t=2407s](https://www.youtube.com/watch?v=7U7NbL0V0Zk&t=2407s)

### Experience
I am a Full Stack Developer with more than 2.5 years of Experience.
I have been contributing to PublicLab from December 2017 and have also worked with PublicLab in GSoC 2018 as a Student Developer. And also worked as Google Code-in 2018 mentor with Public Lab. And currently, working as Outreach Mentor with Public Lab. I have previously worked as Project Development Intern in [Tata Consultancy Service (TCS)](https://www.tcs.com/ "Tata Consultancy Service (TCS)") where i worked on making an Online Code Evaluation Platform using RoR, Js, Docker, Shell Scripting, sandboxing. I have also worked in many startups where I worked on many technology like Angular, Flask, Docker, Node, Ruby on Rails etc. I have also worked as Teaching Assistant in a Full Stack Web Development Course at [Coding Ninjas](https://codingninjas.in).

Currently, I am working in Indias most loved edu-tech startup [Coding Ninjas](https://codingninjas.in) where I am working as Software Engineer Intern and working on the technology like: Node, WebSockets, Angular, Ruby on Rails, Docker etc. where I have worked on making features like peer to peer Video Calling, Chatting etc.

### Teamwork

As stated above, I have worked with Public Lab and many Companies where I used to work in team which concludes that I am strong team player.

### Passion

I am passionate about solving general problems using technology.