---
nid: 36052
title: Outreachy proposal: Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service.
path: public/static/notes/ajumpingkitty/11-04-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
uid: 818804
tagnames: software,lat:0,lon:0,outreachy,first-time-poster,zoom:1,outreachy-2022,outreachy-winter-2022
---

# Outreachy proposal: Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service.

**

## About me

__**

_**Name**: Lili Yao_

_**Email**: ajumpingkitty@gmail.com_

_**GitHub**: https://github.com/liliyao2022_

_**Location**: Canberra, Australia_

_**Time zone**: Australian Eastern Daylight Time (AEDT), UTC +11_

_**Introduction**: Hey everyone, my name is Lili Yao; I'm a frontend Developer with some backend and cloud computing knowledge. It is the first time that begun my journey into Open Source Contributions, and I am so excited._

_I come from China. I moved to Australia in 2017 to pursue a more disability-friendly environment. 2022 has been a life-changing and fantastic year for me since I decided to become a web developer, and I've finished my Udemy Full-Stack Bootcamp, where I've been trained and gained some practical experience and skills. _

_I enjoy coding and solving problems, and what's more, I love singing and making yummy food for my family!_******

## Project description**

This project sets the groundwork for working locally/offline or from a static page using the core browser-based library Leaflet. Once a visitor can paste in the URL of an Internet Archive image collection and begin making a map with it, we will extend this to include saving maps and even want to try making use of the latest in JavaScript image processing to prototype full-resolution image compositing and download in the browser.

**  
****

### Abstract/summary (<20 words):

**

Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service.  
  
**

  
### Problem

**

While I think MapKnitter Lite is an excellent tool for aerial photo viewing, and it means a lot to environment protection, I also believe there's a lot of room for improvements to better the experience of tool users. 

We are unable to detect a key like "texas-barnraising" from a longer URL like the following picture:**![image description](/i/47310.png "Screenshot_2022-11-04_at_9.50.16_am.png")

  
We can use SQL queries to accomplish the task.

\*      We need to add a geocoding search box just like the Google Maps Platform, which is shown below:![image description](/i/47311.png "Picture_1.png")

  
******

With the inspiration of the following clone code, we should do this task smoothly.**![image description](/i/47312.png "Picture_2.png")

  
******

- **

We need to add a "drag image onto the page to add" feature to the Leaflet.DistortableImage demo so people can import multiple images into maps in the demo at https://publiclab.github.io/Leaflet.DistortableImage/examples/export.html

Since the MapKnitter Lite is a public resource, and now we can only add or edit photos through the "INTERNET ARCHIVE", it would be risky if this website crashed. We'd better do its work independently. ![image description](/i/47313.png "Picture_3.png")**  
**

  
**

I have searched on stack Overflow about this task, and I believe it can be completed with my effort and my mentors' help.**![image description](/i/47314.png "Picture_4.png")

  
****\* we need to enable a button to export picture information and download its "mapknitter-saved.json" format. An HTML page with the Image embedded; however, the upload option is not working.**

**![image description](/i/47315.png "Picture_5.png")

  
# Based on the above possible JSON format, we have the basic format for it, and we need to do this with the help of the Image Sequencer package.  

![image description](/i/47316.png "Picture_6.png")

  
**

Add local saving of maps via localStorage, which we have not done yet because we might lose our work when we refresh the page. As mentors advised, we can use the same format as the "mapknitter-saved.json" mentioned above.****

\* Try to find out how to send the local images to the remote exporter and switch to the Ruby exporter in exporting demo:****![image description](/i/47317.png "Picture_7.png")

  
We need to rework the JS exporter for local use or use the existing WebGL-distort individual image export and stack them into one giant Image using pica as below:

  
![image description](/i/47318.png "Picture_8.png")

  
### Timeline/milestones

_Break your project up into small projects -- one per week!_

Week 1 (Dec 5 - Dec 9)

\* Take a deeper look at the codebase and discuss project goals with mentors.

\* Fix the existing bugs related to the MapKnitter Lite system.

\* Create FTOs.

Week 2 (Dec 12 - Dec 16)

\* Choose and begin work on an easy change to improve the tool, detect a key like "texas-barnraising" from a longer URL like [https://archive.org/details/texas-barnraising](https://archive.org/details/texas-barnraising).

\* Ask questions for clarification and make changes based on mentors' feedback.

\* Create FTOs.

Week 3 (Dec 19 - Dec 23)

•          Add a geocoding search box (where users can type a location, and it moves the map view) to the demo so that upon creating a map, users can navigate to a specific place

•          Engage in community conversations, and confirm its functionality with mentors.

\* Create FTOs.

Week 4 (Dec 26 - Dec 30)

•          Add a "drag image onto the page to add" feature to the Leaflet.

•          Discuss with Mentors and implement corrections where necessary.

•          Create FTOs.

Week 5 (Jan 2 - Jan 6)

•          Start to work on the current map state to be exported to a downloadable "mapknitter-saved.json" format

•          Research more about JSON format.

•          Communicate in the community and mentors regularly.

- Create FTOs.

Week 6 (Jan 9 - Jan 13)

- Implement codes to load and test the principles in different development environments.
- Create FTOs.

Week 7 (Jan 16 - Jan 20)

- Add local saving of maps via localStorage using the same format as "mapknitter-saved.json".

\* Write tests for all changes introduced.

\* Make changes based on the feedback of mentors.

Week 8 (Jan 23 - Jan 27)

\* Improve the display of local saving maps.

\* Share ideas and discuss with Mentors the best way to display local saving maps.

\* Make changes based on the feedback of mentors.

Week 9 (Jan 30 - Feb 3)

- Start to work on switching to Ruby exporter in exporting demo
- Search for how to send the local images to the remote exporter.
- Create FTOs.

Week 10 (Feb 6 - Feb 10)

- Work on upstream Node-based cloud export service offline in the export demo; switch to Ruby-based service, for now, #751
- Discuss with Mentors, get feedback and implement needed corrections.
- Create FTOs.

Week 11 (Feb 13 - Feb 17)

- Rework the JS exporter for local use
- Research server-side multi-threaded Node code and ask for assistance from mentors.
- Create FTOs and help other community members.

Week 12 (Feb 20 - Feb 24)

- Buffer week - complete any pending task.
- Create FTOs.

Week 13 (Feb 27 - Mar 3)

\* Use the existing WebGL-distort individual image export and stack them into one giant Image using [https://github.com/nodeca/pica](https://github.com/nodeca/pica) 

\* make a conclusion and make changes based on mentors' feedback.

\* Create FTOs.

### Needs

I want to receive feedback on my PRs from the mentors who will help me improve the quality of my work and, in turn, complete the project effectively.

I would also research different platforms and communicate with my team to complete all these tasks with 100% effort.

### First-time contribution

I have been working with Public Lab on the plots2 repository since October 2022\. These are my contributions

[Merged Pull Requests](https://github.com/liliyao2022?tab=overview&from=2022-10-01&to=2022-10-31)

- 2 merged PRs - these PRs solve a variety of issues like fixing typos, adding new features

- _Open Pull Requests_
- Six open PRs. Refactoring deprecated code, debugging.
-   
_FTOs Created_

- I finished my FTOs
- 5 FTOs created to help newcomers start their Public Lab journey.

_[Issues](https://github.com/publiclab/Leaflet.DistortableImage/issues?q=is%3Aissue+is%3Aclosed+author%3Aliliyao2022)_

- Seven issues were created to add new features/report bugs in Leaflet.DistortableImage
- - _Reviewed PRs_

- I have reviewed several pull requests and helped in the onboarding of newcomers.

---------

### Experience

I have been doing web development with HTML and JavaScript for the past year.****

1, (ONLINE) Layers of State in complex React Apps [https://www.meetup.com/canberrajs/events/288371953/](https://www.meetup.com/canberrajs/events/288371953/)

Learned about the state management in modern React apps from App State through to individual Component State and all the layers in between.

3, my personal project

[https://github.com/liliyao2022/news-release-system-display-page](https://github.com/liliyao2022/news-release-system-display-page "https://github.com/liliyao2022/news-release-system-display-page").

I accomplished this project mainly in JavaScript, React, HTML, CSS, and git as a version control system after I finished my Full Stack Bootcamp at Udemy. I practised and gained knowledge about different HTML tags and attributes, and I also used material UI and ant design for the style and layout of the website. After development, I used git to deploy the project and commit changes.

4, I also have completed a responsive e-commerce website and personal profile using React, JavaScript, CSS, HTML, and git.

Below is a commercial website project for a restaurant owner I took part in 2022\. I honed my frontend skills using JavaScript, CSS, and HTML and improved my communication skills through teamwork.

http://www.ohsama.com.au/

---------

### Teamwork

When I was doing the project I mentioned above #3, I was responsible for the homepage CSS and HTML parts. Although facing many challenges, my team members and I kept searching and communicating about all issues daily. Sometimes, my partners became upset about bugs, I encouraged them to keep fighting, and I also told myself that everything was figure-out-able in the end. Project #4 is a commercial website designed for a restaurant owner to boost her business. After talking through her ideas, I worked with the UI designers closely to finish this job. I learned so much about frontend coding and communication skills.

---------

### Passion

I like the Public Lab community and the work they've been doing to protect the environment. And I appreciate how newcomers are welcomed and encouraged to contribute to the project by FTOs created by mentors and community folks. My love for the environment, passion for contributing to Open Source, and the chance to learn new coding skills inspire me to work on this project.****

  
### Audience

Using inexpensive DIY techniques, we seek to change how people see the world in environmental, social, and political terms---the project # Leaflet.DistortableImage focuses on taking care of our environmental issues through digital aerial photos as a lightweight web service. Everyone can use it, and everyone will benefit from it.

### Commitment

I am available to work full-time throughout the internship.