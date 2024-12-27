---
title: "[GSOC PROPOSAL DRAFT] MapKnitter Enhancements."

tagnames: 'mapknitter, gps, gsoc, gsoc-2014, coding, first-time-poster'
author: xvidun
path: /notes/xvidun/03-07-2014/gsoc-proposal-draft-mapknitter-enhancements.md
nid: 10138
uid: 421168
cids: 8445,8446,8447,8448,8449,8463,8467,8492,8493,8635,8669,8734
---

![](https://publiclab.org/public/system/images/photos/000/003/181/original/Neyyar.png)

# [GSOC PROPOSAL DRAFT] MapKnitter Enhancements.

by [xvidun](/profile/xvidun) | March 07, 2014 20:54

March 07, 2014 20:54 | Tags: [mapknitter](/tag/mapknitter), [gps](/tag/gps), [gsoc](/tag/gsoc), [gsoc-2014](/tag/gsoc-2014), [coding](/tag/coding), [first-time-poster](/tag/first-time-poster)

----

Name: Vidhun K.

Affiliation:Degree - B-Tech Computer Science

Location: India

Email: xvidun@gmail.com

Phone: +91 9524281789

Project(s) you're working on or want to: MapKnitter

Project title: Enhancements to MapKnitter.


##Project description

**Summary:**

This project will work on MapKnitter to enhancing the upload interface and working to improve general interface with bootstrap. Project will also focus on adding feature to auto-knit images using the EXIF metadata from images.

**Describe the need your project fulfills:**

  *  Enhance the upload interface to support drag/drop and multiple uploads. This can reduce the waiting time drastically and would be helpful for people working on a mobile device.
  *  When knitting an image it would be good if there was some data available on the images from the region an image is knitted to. This way the uploaded image can be compared and reviewed based on the reference.
  * The current process of geo-referencing is quite simple and straightforward. The problem arises when required to upload and knit multiple images, which is troublesome and also time consuming. This project aims to make the MapKnitting process easy on the end users.

**How will your project meet this need:**

  * First issue that this project will look into is about interface enhancement, some of the key points for interface enhancement are.
      - Using a drag and drop upload interface.
      - Handling multiple image uploads.
      - List all uploaded images off map letting the user select the required ones to knit.
      - Retrieve and display a list of "Other images from this region" sorted with time to display to the user.
      - Make system wide enhancements to the interface using bootstrap. Working on modelling the home page can be a start.
  * Knitting multiple images using the current approach will not be easy as the users will have to scale, rotate and move the image to the right position on the map. This process can be simplified if we could use the EXIF metadata as much as possible to approximately guess the location of the image in the map. This way the user will have to make only slight alterations depending on the error in the GPS recordings. Even if EXIF data was not present we can fall back to the manual approach. 

**Auto placement and auto-rectification approach:**
Sample EXIF that would be usefule(Iphone):

| EXIF | Value |
--- | --- |                                          
| GPS Latitude Ref | North
|GPS Longitude Ref | West
|GPS Altitude Ref | Above Sea Level
|GPS Img Direction Ref | True North
|GPS Img Direction | 346.4727273
|GPS Altitude | 1222 m Above Sea Level
|GPS Latitude | 37 deg 44' 10.80" N
|GPS Longitude | 119 deg 35' 58.80" W

  + Placing the image in the right position depending on latitude and longitude,
  + Rotating the image depending on the image direction.
  + Investigate a method to find the ratio of scale to the image height with reference to the map. Using this we can either scale the image or zoom in/out the map.
  * If Anish's project on porting Image Distortion to leaflet goes through it will be necessary for this project to work in coordination. This will be acheived with regular discussions and keeping track or the project progress.

**Timeline/milestones:**

Throughout the development process I will be recording the ongoing development on a blog(once a week), making it easier for the mentor to track my progress.

  * Precoding Period (upto may 19):
    - Get a familiar with MapKnitter and the codebase. 
    - Investigate and learn the required tools required for the project. 
    - Bond with community while identifying required resources for learning or help.
    - Plan a basic approach to solving the project problems noting and clarifying on the issues involved.
    - Investigate and learn possible libraries that can be used like Jquery-file-upload and extracting EXIF metadata, doing some reading on EXIF and TIFF would do.

  * May 19 - June 5:

    - Work on the implementation for drag and drop functionality probably using the Jquery-File-Upload plugin, can be decided on later.
    - Implement feature to upload multiple images and list them off map and select them when required.
    - Work on bootstrap to  improve the general interface in mapknitter.
    - Options for user to view sorted list of images from the particular region.

  * June 5 - June 10:

    - Final touch on the implementation is made and basic documentation, code review, testing and bug fixing is done.

  * June 11 - June 21:

    - Works on the auto Geo referencing implementation is started. 
    - Initial works like extracting EXIF data from image, collecting data that can be used is done optionally notify the user on the required EXIF metadata that will be used to Knit the image.

  * June 21 - July 5:

   - Implement the basic functionality for placing the image according to latitude and longitude while testing alongside.

  * July 5 - July 20: (2 day break)

    - Work on rotating the Image depending on the true direction in the EXIF with reference to the map.

  * July 20 - August 11: 

    - Implement feature to rectifying the image(scale) depending on the altitude EXIF meta data.
    - Work on correcting image based on the tilt.
 
  * Upto August 21:

    - Test the overall code, fix bugs, document the areas that are necessary while getting ready for the final evaluations.

**What broader goal is your project working towards?**

To make MapKnitter more accessible and therefore getting more open geo referenced data.

**What resources will you need: **

* People: To point me in the right direction regarding the code base and learning resources.
* Sample Data: Some EXIF containing sample data (Android / Iphone / skycamera)

##Experience
For the past 3 months or so I have learning and hacking around with rails framework while falling in love with it. I’ve learnt rails from various resources incuding [Michael Hartl tutorial](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book), Railscasts, Rails zombies for best practices. I’ve come to a better understanding of rails with a couple of good and bad experiences on the learning curve. I use the vim with rails-vim plugin for development.
I’ve have decent experience using javascript and also worked with some of the responsive frameworks like Foundation, some bootstrap.
I use git for my workflow productivity and code collobaration extensively.
This project will mostly depend on javascript, therefore I will learn and become sufficient for the project using the pre-coding period.

Some of the open projects I’ve worked on:
I’m relatively new to open source and therefore don’t have any major contributions yet, looking forward to this summer to learn, create and collaborate.

  * Integrated the [dogecoin](https://github.com/xvidun/bitcoin-ruby) support for the bitcoin ruby gem.
  * Worked on a simple [kick-start](https://github.com/xvidun/Kick-Starter) application using devise for authentication with Openid for google, facebook and twitter.
  * Added a bitcoin payment and donation functionality for the[ privly-web](https://github.com/xvidun/privly-web) stack. Used the [blockchain bitcoin-receive api](http://blockchain.info/api/api_receive) for this.
  * Contributed to creating the college tech fest website in 2012.

##Teamwork
The idea of working with a team and collaborating on different ideas keeps me self motivated and my overall productivity is at its peak. There were several college programmes like conducting workshops, college projects where I had to work in a team. 

  * Working in projects involved working with different people on different level and areas of expertise. This meant that everyone had to give their part to and work on fresh ideas to bring out a successful project. 
  * Conducting workshops in college was on a whole different level of teamwork, where we had to contact different professors for ideas and suggestions. The hardest part would have been publicizing the event not losing confidence along the way. 
  * Environmental science project to collect household and industrial data to analyze the efficiency of solar cells done by splitting the team into different groups to reach out and get maximum data.

##Expertise
I’m particularly interested in Open source software and have been using them extensively for the past three years. I have have experience working with OOP(c, java, python, ruby) and web technologies(Ruby On Rails and Php(CodeIgniter).
Apart from this I love algorithms and datastructures, to sometimes work on it in my free time.
For expertise relevant to this project I have decent experience working with rails and some javascript. This means that I will have to use the pre-coding period as efficiently as possible to learn everything including the libraries that would be required for this project.

  * My [github](https://github.com/xvidun) profile.
  * My [stackoverflow](http://stackoverflow.com/users/3082075/xvidun).

##Interest
Although I have interests towards environmental justice I have no major contributions yet. In an effort to work for environmental justice I’ve participated in some of the city clean drives conducted in the college. I have worked on a team based project to collect data to analyze the efficiency of solar cells.

##Audience
The prime audience for this technology would be lay users. This project will completely benefit the lay users by making a user friendly and a faster map knitting experience hiding the underlying stack of its working. With the success of this project the user can simply drag drop an image and let the software work out most of the assumptions of the position of the image in the reference map.

##Context
MapKnitter although having a good interface for knitting can be made better with this project. This means that there would be more lay users that will be able to use the software, which is a great thing.

##Ongoing involvement
This summer will help me collaborate with different people from the community, these connections will introduce me and get me started in making contributions and join volunteering efforts. This would also help me in getting involved in the various other open data efforts and help me in working on the areas that interests me.

  * Post gsoc, I looking into long-term contributions to public lab. Apart from the technical contributions, It would be awesome to  volunteer for cartography collective considering that my native is a eco-hub it would be helpful for environmentalists to analyze the real time cartography data. This would not be an easy task considering the lack of awareness but would interesting though to form a community of local members involved in making team driven aerial photographs. 
  * After a successful summer, I will make complete efforts to maintain and develop the software written during the summer. This way I will make any enhancements when a new idea for the existing system comes up. I came across a [research note](http://publiclab.org/notes/mathew/03-14-2014/mapknitter-annotations-gsoc) posted be user mathew on adding annotations to MapKnitter, looks like an interesting thing to work on for MapKnitter.
  * Apart from this I will involve in collaborating with working with developers from the Public Lab in improving and writing software for Public Lab efforts. This summer will provide me with the necessary resources in terms of knowledge and connections to help me get involved post gsoc.

##Commitment
I can give around 35 - 40 hours per week for the summer coding. 
This summer I look forward to create, learn and make life long connections and contributing to Public Lab for GSoC gives me the exact opportunity. I will set aside all other activities as far as possible during the summer although I have to take some breaks in between(3 days max) and I had reflected them in the timeline as accurately as possible. Even if I have to take emergency breaks I will inform my mentor before hand and make up for the coding activity in the later days. 
For this GSoC, I am looking to get permission to stay back in the college(hostel) during summer so that I can give my time free from interruptions and will also have the necessary resources and also the working environment ready to work with maximum productivity.