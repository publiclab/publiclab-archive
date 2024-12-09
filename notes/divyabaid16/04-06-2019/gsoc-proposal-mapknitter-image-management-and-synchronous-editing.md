---
title: 'GSoC proposal: Mapknitter Image Management and Synchronous Editing'
tagnames: software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects
author: divyabaid16
path: /notes/divyabaid16/04-06-2019/gsoc-proposal-mapknitter-image-management-and-synchronous-editing.md
nid: 18976
uid: 578652

---

![](https://publiclab.org/public/system/images/photos/000/031/164/original/mapknitter-yarn.png)

# GSoC proposal: Mapknitter Image Management and Synchronous Editing

by [divyabaid16](../profile/divyabaid16) April 06, 2019 11:20

April 06, 2019 11:20 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [rgsoc-2019](../tag/rgsoc-2019), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects)

----

\*\*

## About me

Name: Divya Baid

Github: [d](https://github.com/divyabaid16)[ivyabaid16](https://github.com/divyabaid16)

LinkedIn: [divya-baid](https://www.linkedin.com/in/divya-baid)

Public Lab: [divyabaid16](https://publiclab.org/profile/divyabaid16)

Affiliation: The LNM Institute of Information Technology, Jaipur

Degree: Communication and Computer Engineering

Location: Jaipur, India

## Project description

**Mapknitter Image Management:**  
MapKnitter is based around the upload of images, the positioning of those images on a map, and the compositing of those images into map export formats. This project idea focuses on the systems for tracking changes on those images, collecting them into sets, storing image history, and other improvements which we hope will simplify and reconfigure the MapKnitter codebase.

**Mapknitter Synchronous Editing:**  
A long-sought feature of MapKnitter is the ability to collaborate in real time on image upload and placement as if it were Google Docs. This will involve changes from the MapKnitter codebase to the Leaflet.DistortableImage front-end image distortion UI.

### Abstract/summary (<20 words):

**Implement Mapknitter Image Management and Synchronous Editing as mentioned in #300**\*\*

---------

### Problems

The proposed idea solves issues like  
1\. Image ordering in sidebar  
2\. Selection of multiple images to export  
3\. Toggle view option to select your images and all images  
4\. Fix the issues with Download button  
5\. Real time multi user image placement  
6\. Low latency API using sockets  
7\. Issues like #382  
8\. Testing, Documentation and many more.

### MapKnitter Image Management

It will focus to improve mainly two sections :

- Image sidebar
- Image export

**Image sidebar**

![](https://lh3.googleusercontent.com/IQNvv8SkaNtRtnO5nra1l76GIrppCCr5TzmRFSHyCEndTha7ObDGUebxSjTdys4Gv9H8OOHRWolKmAJS--mNZIoUApzWvKXkHW6O8uD8pGpoaGflZrExfdh_CMTOBtVQc_wpZn5G)

When the image is uploaded, it gets stored in order in which they are uploaded.

Some of the features that need to be added here:

1\. Option to sort the image based on the size of the file, name and the time of upload. These can be arranged in descending as well as ascending order based on the user's requirements.

This will make it easy for the users to find the image.

![](https://lh4.googleusercontent.com/YMLUJGphE3zDiU3qcZ6JMIqNKB7J-9k2YEy9AoXeraCIz2LZORtGA1BzB-9tkWK5uFj28XUBy8nbK4aPMlpSoeCNs3iY80C1e_mkk-0L1ITh53C2Hop0gwp1cEdHK53Lf3eiGSuI)

2\. An icon of trash to delete the image in the sidebar itself. Currently, if anyone else except the author inserts an image, the image is inserted but the user other than the author is not able to delete that. So, I will fix this by inserting a delete button for the other user to delete the image uploaded by them.

I guess it is related to #84, would love to brainstorm more about this!

![](https://lh4.googleusercontent.com/MltJLoanPlwoy1DbI7ajKAl_8-mVGEIIqfgbdPFb3twvaPN2AowD9YyfhTHvm8QQ86gKeyhb_7U_Ff_hHtwsAXJFGxANFk7e-saX780NnDxUo0FaOJgdkLzrNnjvS6dggRN6AZ0P)

3\. Option to add a small comment or caption to a particular image. This can be thought of something like a description of the image.

4\. Addition of image history to each image

- Option to upload a new version of an image.

There can be an icon to upload a new version of the image. When the user uploads a new version, the old version is overridden and its history is stored.

- If the user wants to go back to the previous version the user is free to go and will be reverted back.
- ![](https://lh6.googleusercontent.com/khU86khaaIOi-67B-LdUSnFFB14RImc-tea2Gxzez4wh8Nyl3rCVlpEBWftvVbI9r0kWLykDPiJAQyjkZ8TRf6g7g_O02cZqb3mVyn7PuO5RDRMlbXadj7LFs3jrxw0zKQXq4vvx)

![](https://lh6.googleusercontent.com/JGWC6jSs1dhfGX4WlS_-GvJfUli0n7llFCYKbgS_ju5UK4vBLNSXZK4k_tXUTFdAyTkjOyNNwchuu6GeoNJUonDtciiIF7Z9XtoF2EpL3uM_Rdz7PkXboFZdx8qaGSt4Aobqj7ty)

- Version history of the image can be viewed, deleted or restored depending on the need of the user.

5\. A toggle option to view images as a list view (show details of the images like date of modification, size, history) or the icon view (showing just the name). Modification and deletion of an image can be done from the list view.

6\. Currently, the Download option is not working properly. Some users can download one image of other users but can't download other images. Option to download a particular image from the image sidebar and an option to rename the image while downloading.

**Images Export**

![](https://lh6.googleusercontent.com/XCle_mk3bxYpOYe8X-ysgv4Avh1FTsQw9lESyHs6-hvFrn7LkHUfkBD1SVgYDHpp7iIim861j4wT0FIALcfjqn6YtFZ9gVCkw5l7WAZzirMoIxFf7Oug1TBxBRwnhCesQtRQ5RSj)

Some of the features which we may add in the Export section are:

1\. On clicking on start export, a modal list should appear showing the list of images along with the option to select all images. The user can select the images which he/she wishes to export, after which, the image can be downloaded.

![](https://lh6.googleusercontent.com/HRKtoDq484k4t7qucnE9WbwqJV3b5eOXYUVk1wF_Iuvm-5wCC7e5TQHz-96lelssLsrV9vn9dpTTX1hQCd2lwuYrSvbGYA6wxvHdjfkak03jdT8hejDfUTEFNeS7COZpcEwzisoy)

2\. A user can select whether to send the knitted images via email, so we'll add an option to send the knitted images exported by the user via an email after the export is complete.

3\. I think it might be better if we disable advanced options while the export is going on.

4\. When the export is complete, the user might be not aware of how to Download the knitted images, so we might somehow ask the user to Download from the download button after the export is complete.

5\. All other features will be added after proper discussion and brainstorming.

**Top right Settings button:**

![](https://lh3.googleusercontent.com/K6rLfLispD3a32m7C-_sDHwJm94BPLBuHeov6IKcDmX1XeVQZsXhl_hKHHzVXKxSyRP07tzQ1ewEfWZ_YDG6iqKYhaI3CwONPgyqw-6kVY82RM9f4qSKBXphFdbFR_Ke3_bvWTFX)

- The top right settings button, it shows the delete option if the author of the map clicks on it, it shows an empty modal if any other user clicks on this button. This way it doesn't look good. I think the better option would be to disable it to other user or add a message saying something like "You're not allowed to access it".

**Comments section:**

- We'll add the options to include emojis in the comment section and the ability to react with emojis on other's comments, just like the comment section of [publiclab.org](http://publiclab.org).

The Mapknitter should refresh background images while we drag a particular image.

Nowadays, filters are very popular to use with the images so we'll add a feature in the Mapknitter by which a user can apply filters to the images with the help of [Image Sequencer](https://github.com/publiclab/image-sequencer). With the help of discussions and brainstorming, we will decide how to do this.

### MapKnitter Synchronous Editing:

The algorithm used behind the scenes for merging collaborative edits from multiple peers is called operational transformation.

**Operational transformation (OT)** is a technology for supporting a range of collaboration functionalities in advanced collaborative software systems and Google uses this algorithm for collaborative editing for Google Docs, Google Slides, Wave, etc.

#### **Real Challenge**:

Handling concurrent editing in a multi-user environment gracefully is very challenging. However, a few simple steps can simplify this problem. The main problem with collaborative editing is concurrency control to the document are not commutative. This needs to be causally ordered before applying either by undoing history or by transforming the operations (operational transformation) before applying them to make them seem commutative.

#### **Latency:**

Introducing latency between the client and server is where the problem arises.  
Latency in a collaborative editor introduces the possibility of version conflicts.  
Here, **Operational Transformation** will come into the action.

For example,

Starting Client's state:

```
ABCD
```

Starting Server's state:

```
ABCD
```

Let's say the client enters X between 'C' and 'D', the operation would look something like this :

```
insert(X,3) //where 3 is the position where x is going to be added (0=A, 1=B, 2=C ..)
```

And at the same time, Server deletes B, the operation would be :

```
delete(B,1)
```

What actually should happen is that the client and server should both end with ACXD but in reality, the client ends with

```
ACXD
``` 

```
Starting Document State -\> ABCD
"Insert 'X'" operation at offset 3 [local] -\> ABCXD
"Delete 'B'" operation at offset 1 [remote] -\> ACXD
```

but the server ends with ACDX

```
Starting Document State -\> ABCD  
"Delete 'B'" operation at offset 1[local]-\> ACD  
"Insert 'X'" operation at offset 3[remote]-\> ACDX
```

Obviously, ACXD != ACDX and the document which is shared now is in wrong state.

Now, Operational Transformation algorithm comes to the rescue.

**Operational Transformation (OT)** is an algorithm/technique for the transformation of operations such that they can be applied to documents whose states have diverged, bringing them both back to the same state.

How does it work?

- Every change (insertion or deletion) is represented as an operation. An operation can be applied to the current document which results in a new document state.
- To handle concurrent operations, we use the transform function that takes two operations that have been applied to the same document state (but on different clients) and computes a new operation that can be applied after the second operation and that preserves the first operation's intended change.

If we apply OT, Client will see :

```
Starting Document State -\> ABCD  
"Insert 'X'" operation at offset 3[local]-\> ABCXD  
"Delete 'B'" operation at offset 1[transformed]-\> ACXD  
```

and Server will see :

```
Starting Document State -\> ABCD  
"Delete 'B'" operation at offset 1[local]-\> ACD  
"Insert 'X'" operation at offset 2[transformed]-\> ACXD //Transform function would add add it in the new (3 - 1 = 2) position  
```

The transform function is used to build a client-server protocol that can handle collaboration between **any number of clients**.  
Choosing a Client-Server architecture will allow scouting a large number of clients without actually complicating the environment.  
This source of truth also forces the client to wait for the server to acknowledge the operation that the client has just sent which would mean that the client always stays on the server's OT path.

This would help in keeping a single history of operations without actually having to keep a mirror of the state for each client that is connected. That would eventually mean the number of clients that are connected to the server would have only one single copy of the document on the server.

![](https://lh4.googleusercontent.com/W-CcQsAF20uNbNRdc2lowvl5Enf1oqhhDI97p8CUKDxKeg-MvZ78XCETrVnRHjI5AZoey9mm-Yy4j8GpWiC5Udr-1H-iI0ZEqKD0Ge1SHztyNdE64bkcy1ttuPl81A08ghTiNlNX)

CRDTs Vs OT:

CRDTs are newer collaboration methods that fit some specific kinds of editors really well and they are getting even better. We'll brainstorm to choose a method.

To implement the concept of Operational Transformation, web sockets are used. Web Sockets are used to send data from one user to the other which helps in providing speed, security and removes lag, which may arise due to polling.

API to create a new web socket object:

![](https://lh3.googleusercontent.com/YUw4NftWo6wyl4gWE8oTCWXxy3BfFOjj6Ho6DQ2wYT6_gwu_Jm0A0UZ2fcIWvB6mBttEo7QrYtB89A72GJ-vUOoqt_zcHzs5tfSDScNRu5SDU1-988PbMA7f0yC1YstpYRjc_0qS)

Also,

[YJS ](http://y-js.org/) may be used as it is a free, open-source JavaScript framework for offline-first p2p shared editing on structured data like text, rich text, JSON, or XML.

![](https://lh4.googleusercontent.com/T17fCOEKX2ZlNUR5GwYh5a4oLfqzbLlZYPyhVeGTBljjW3-RdpPgA7TWuLb6-tNR8bVP5Lk2PBBmA2wkgovT07qVsmk2lVa6Ew6TxH0yoQhUysMKW4Ad67BeYs6CW2FUFFyuzXjv)

**Low latency:**

- Async as much as possible

Any processing and particularly any I/O that is not absolutely necessary for building the response would be done outside the critical path.

- Parallelize as much as possible

Processing and particularly any I/O that can happen in parallel should be done in parallel.

- More ideas will be taken into account while brainstorming.

Consistent, good design makes using the APIs easy and intuitive and indicates to end consumers that we're respectful of their time and needs, all of which go a long way in improving our relationship with our technical audience.

This will be taken care of when designing the API. Thorough testing of API will be done in order to enable users a seamless experience. I will use [Postman](https://www.getpostman.com/) for manual testing purpose.

**Testing:**

- As testing is very important for any project, we'll need to test many of the above features in Javascript, we'll use [Jasmine](https://jasmine.github.io/) for that as suggested by Warren.
- I'll try to write as many tests as time permits in order to increase our project's test coverage.

![](https://lh3.googleusercontent.com/jGdPNWCX71WoAaXCSvCOTcGdhI1xFkBJPib3fA_m0tfVm-WdXEPOWN56I-3SiLNEmI6TR5q68STdTU4pAAC8l4c3cUkMLTDqaPn0gGg7sxpeCuhsOrIfKXOIT6tpzTaAqLgng7Cn)

**Documentation:**

- We'll write good, easy to read and understandable documentation for downstream use by other libraries.
- I'll devote some of the time especially to properly document all the stuff which we'll build.

**Edit rejection:**

- I will create the issues to brainstorm about the implementation of this feature, that is, how exactly are we going to implement this, and after that, I'll start working on this once we brainstorm everything related to this.

**History Tracking:**

- As I have already mentioned above that we're going to track image history/reversion, I'll implement this once the priority work is over.

\###Timeline/Milestones:

- **May 6 to 27:**

During and before this period, I will try to solve some issues and complete pending PRs. Apart from that, I will open up planning issues to discuss in detail the implementation of Mapknitter Image Management and Mapknitter Synchronous Editing as #300 has many sections. I will also work on issues like #428, etc.

- **May 28 to June 3: Image Sidebar**

I will work to implement the ordering of images in the sidebar as mentioned above.

- **June 4 to 10:**

If approved by the mentors, will work to add an option which adds an optional caption to the image. Also, will start the work on #382\.

- **June 11 to 17:**

Will implement a toggle option to view your images and all images. ( images uploaded by other users )

Again, upon the discussions with mentors, will add a toggle option to view images as a list view or icon view.

- **June 18 to 23:**

Will add the option to download and rename the image, will also add an option to delete multiple images by something like checkboxes. Moreover, will implement remaining work on image sidebar as required. #300

- **June 24 to 28: Evaluation Period-1**

Meanwhile, I will prepare a blog about my GSoC experience and project with Public Lab.

- **June 29 to July 5: Image Export**

Will implement the ability to select multiple images to export as mentioned above upon the prior approval of the mentors.

- **July 6 to 12:**

Will rename Warpable to Image. If approved, will add an option to enable users to get the knitted map via email directly after the export. Also, will disable the Advanced options button while the export is going on if mentors agree, and will highlight the download button after the export has been finished in order to make it more user-friendly.

- **July 13 to 19:**

I will create a new model ImagePlacement to store the corner coordinates, user id, timestamp. Will implement the top right settings button so that it doesn't show anything when users other than the author selects it. Will add emojis/reactions in the comments section if the mentors agree.

- **July 20 to 21:**

Continue the work on #382\.

- **July 22 to 26: Evaluation Period-2**

Meanwhile, I will prepare a second blog to elaborate and explain the work which I have done.

- **July 27 to August 2:**

After prior brainstorming about OT/CRDTs/Sockets and libraries like[Y-JS](http://y-js.org/). Will start the work to implement low latency API for real-time multi-user collaboration using sockets as mentioned above.

- **August 3 to 9:**

Will continue the work to implement Google Docs like real-time image placements.

- **August 10 to 18:**

Will work to Implement the features like history tracking of the image, edit rejection while the image is locked. Will implement functionalities like Temporary unlocking of images for 1 hour or 1 day as mentioned in #84\.

- **August 19 to 26: Final Evaluation**

Will implement tests using [Jasmine](https://jasmine.github.io/) for JavaScript. Complete the documentation and wrap up all the remaining work. Moreover, I will prepare a blog post about my work and experience at Public Lab as a GSoC student.

Apart from these milestones, I will create some FTOs and review some PRs each week in order to welcome new contributors.

### Needs

Documentation of Y-JS, Sockets to study their implementation.

Guidance and support of mentors and everyone attached to this community.

Documentation and other resources that is easily available.

### First-time contributions

**In plots2**

Pull requests:

- Open: [https://github.com/publiclab/plots2/pulls/divyabaid16](https://github.com/publiclab/plots2/pulls/divyabaid16)
- Merged: [https://github.com/publiclab/plots2/commits?author=divyabaid16](https://github.com/publiclab/plots2/commits?author=divyabaid16)

Issues created: [https://github.com/publiclab/plots2/issues/created\_by/divyabaid16](https://github.com/publiclab/plots2/issues/created_by/divyabaid16)

My involvement in the community ( in the form of comments ): [https://github.com/search?p=1&q=commenter%3Adivyabaid16+org%3Apubliclab&type=Issues&utf8=%E2%9C%93](https://github.com/search?p=1&q=commenter:divyabaid16%20org:publiclab&type=Issues&utf8=%E2%9C%93)  

**In Mapknitter**

Pull requests: Open and Merged: [https://github.com/publiclab/mapknitter/pulls/divyabaid16](https://github.com/publiclab/mapknitter/pulls/divyabaid16)

Issues created: [https://github.com/publiclab/mapknitter/issues/created\_by/divyabaid16  
](https://github.com/publiclab/mapknitter/issues/created_by/divyabaid16 "https://github.com/publiclab/mapknitter/issues/created_by/divyabaid16")

---------

### Experience

I'm a third-year undergraduate student and have explored a lot of things throughout my college life. In the first year, I started out with C and C++. I have been coding throughout and have a good knowledge of data structure and algorithms.

In the meantime, I started developing the interest in Web Development when I learned several web technologies with the help of FreeCodeCamp. Hence, I learned many things which includes HTML, CSS, JavaScript, jQuery, ReactJS and now, it's Ruby on Rails too :D

Apart from these, I have knowledge of Python, Flask, MySQL, SQLite, RESTful APIs and I am always willing to explore new technologies.

Currently,

- I am a **mentor at Learn IT Girl, 4th Edition** which is an initiative to guide and bring girls in tech inspired by the Anita Borg's vision of bringing 50% women in computing by 2020\.
- Also, I am working as a **teaching assistant** in the Data Structure and Algorithms Lab to help the juniors.

Previously, I have worked as a **teaching assistant** in the Electronics-I Lab to guide the juniors.

I am an active participant and mentor in my college's computer club Cybros with the help of which I like to share my knowledge to the juniors. I have always encouraged them to participate in coding events & to get involved with the open source. I have always tried to help my juniors with their regular lab exercise, projects, etc and assisted them in every possible way.

## Achievements

- **Winner of Smart India Hackathon**, 2019, software edition, organised by the Government of India
- **Received Merit-based scholarship** in the first and second semester of my college.

### Projects

- **Productivity Analysis using Outlook email data:** In a team of 6 members, Built an Email Analyzer tool with Python, Flask, Networkx and a bit of nltk which Analyse organizational productivity & efficiency based on Outlook email data. It uses the concept of Social Network Analysis. Given the email data, it generates a pdf report which provides info about employees who are doing how much productive work. It sends an email to the client containing the report.
- **E-commerce Web App:** Built an E-commerce site using React.JS, jQuery, HTML, CSS, etc and deployed it using Netlify. [Here](https://ecommerce-phone-divya.netlify.com) is the link of the deployed web site. The [source code](https://github.com/divyabaid16/E-commerce-React) of the website has been hosted on Github.
- **IMDB Search:** Using Python and its libraries including Beautiful Soup I wrote the Python script to get the list of top 50 movies in a given year and get their genre(s) and rating(s). [Here](https://github.com/divyabaid16/IMDB-Search) is the link to the project.
- **Sachin Data Visualisation:** Data Visualization on Sachin Tendulkar's One Day International cricket career and hosted it using Netlify. [Here](https://sachin-d3js.netlify.com/) is the link to the web page. [Here](https://github.com/divyabaid16/Sachin-Data-Visualization) is the link of source code. Technologies used are D3.JS, React.JS, HTML, CSS, jQuery.
- **Random Quote Machine:** Built a Random Quote Machine using HTML, CSS, JavaScript, fetched JSON data from a Forismatic API. [Here](https://codepen.io/divyabaid/full/pVvNLN) is the link to the project.

### Research Project

In a team of 2, using the concepts of Artificial Intelligence, we're trying to build a Seismocardiography based system for the remote monitoring of the health of the heart in order to curb the health-related problems faced by the people all over the world. Technologies used are Arduino board, accelerometer, C, Python, Bluetooth module HC-05\.

### Certifications

- **Algorithmic Toolbox** by University of California, San Diego & Higher School of Economics on Coursera
- **Certificate of Recognition** by GirlScript Foundation
- **Certificate of Achievement "Learn IT Girl!" 3rd Edition** by Learn IT Girl
- **Certificate of completion of SEO** by Udemy

#### Contributions in other organizations

| <br>Organization | Link to PRs | Period |
|------------------|-------------|--------|
| Mozilla          | [PRs](https://github.com/pulls?utf8=%E2%9C%93&q=is:pr%20author:divyabaid16%20archived:false%20user:mozilla%20) | Feb 2018 - April 2018 |
| FOSSASIA         | [PRs](https://github.com/pulls?utf8=%E2%9C%93&q=is:pr%20author:divyabaid16%20archived:false%20user:fossasia) | December 2018 |

### Teamwork

I have always been a team player throughout. I had learned the importance of teamwork and group work since I was a child. Playing outdoor games and other extra-curricular activities taught me that.

In the **Smart India Hackathon Software Edition 2019** with my team of a total of 6 members. We were declared the winners of our problem statement and it as all possible because of our combined hard work and efforts of the entire team.

Apart from that, most of our projects at University are performed in a team. I have worked with a team of 2, 3 to a team of 10\. With so many people supporting and advising you, learning becomes faster and things become easier to understand.

In **Public Lab** too, I'm loving the efforts everyone is making to encourage each and everyone and the collaboration with which things are going on is simply amazing.

---------

### Passion

I like building various stuff using different technologies depending on the feedback of the people. I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of our community.

Open source has always been great. You get to learn so much just by looking at different people and various code base. This is so encouraging.

Public lab as always been a welcoming and a very supportive community for everyone belonging here including the newcomers. This support has helped me to come this way and helped me complete many contributions. I never felt as if I was a newcomer, instead, I was part of many discussions that felt so great.

I aspire to work further with our community and be an asset here.

### Post-GSoC

I will continue the contributions to [PublicLab.org](http://PublicLab.org) as by doing so it helps me to learn many things and I would love to utilise the power of open source in order to serve the underserved communities. I will like to guide and bring new contributors to this community as this will help us to achieve and fulfil the vision of Public Lab.

**More importantly**, if the community approves, I will be happy to coordinate a conference or a workshop in our University's annual techno-management fest [Plinth](https://www.plinth.in) which will help students to get involved with the community and will increase the Public Lab's outreach.

### Audience

The audience will be the fellow developers and the Mapknitter users which will use the API and experience the image management as well as the real time multi user collaborative placement while knitting the map!

### Commitment

I will work to implement all the stuff mentioned above with utmost dediction. I will work for more than 40 hours per week in order to finish the project on or before time.