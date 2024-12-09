---
title: 'Outreachy proposal: Design a new full-screen user interface for Infragram.org'
tagnames: software, outreachy, first-time-poster, zoom:6, lat:6.533645, outreachy-2022, outreachy-summer-2022, lon:3.394775
author: Akanbifatimah
path: /notes/Akanbifatimah/04-13-2022/outreachy-proposal-design-a-new-full-screen-user-interface-for-infragram-org.md
nid: 30353
uid: 793806

---

![](https://publiclab.org/public/system/images/photos/000/045/721/original/pexels-pixabay-460621.jpg)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [Akanbifatimah](../profile/Akanbifatimah) April 13, 2022 14:36

April 13, 2022 14:36 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [lat:6.533645](../tag/lat:6.533645), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022), [lon:3.394775](../tag/lon:3.394775)

----

---------

## About me

My name is Fatimah Akanbi, and I'm
a full-time front-end developer with 2 years of experience. During that time, I've had
experience using Javascript, HTML, CSS, React, Bootstrap, Figma, and WordPress
in creating responsive websites and mobile applications.

This
may not sound like a lot of experience, but finishing my second year as a
developer has been a huge milestone for me. This is because I had no real
experience doing web development --- and not much programming experience in
general beyond some basic C# training I got from minoring in a few computer
science courses back in university. I also didn't have a computer science
degree since I graduated with a degree in Pure and Applied chemistry.

My transition into Tech is basically to use technology in making life easier for
others. I am a problem-solver and derive so much joy in doing so.

I have worked at bulb Africa as a frontend developer where we develop
life-changing finTech applications and also volunteered in mentoring kids in my
neighborhood on coding basics. I have also undergone a few boot camps and online
coding classes such as GADs2021, LSETF/USADF training Bootcamp, and DPD schools to
perfect my coding skills as a front-end developer.

I am strong-willed and do not shy away from responsibilities and tasks.

\*\*Location: \*\* Lagos, Nigeria

## Project description

**Designing a new full-screen user interface for [Infragram.org](http://Infragram.org)**

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. [Infragram.org](http://Infragram.org) enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen and create space for new features like multiple resolutions of video, dragging in a recorded video instead of a still image for conversion, and pop up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

### Abstract/summary (<20 words):

### Problem

1\. Poor UI of [infragram.org](http://infragram.org) Home page ![image description](/i/45766.png "revamb_of_home_page.PNG")![](alt=)

2\. Poor CSS styling (Padding, Font size, font color, font-weight, letter-spacing, etc) on the header in [https://infragram.org/sandbox/index.html](https://infragram.org/sandbox/index.html)

![image description](/i/45770.png "poor_css_styling_in_UI.PNG")

3\. Absence of Cross-browser drag-and-drop feature and
Welcome Modal box for better user-experience.

![image description](/i/45772.png "cross_browser_usage.PNG")

4\. Helpful links hidden within unnoticeable buttons in
the UI of [https://infragram.org/sandbox/index.html](https://infragram.org/sandbox/index.html).

![image description](/i/45771.png "poor_css_styling_in_UI_link.PNG")  
The URL embedded in **_Camera_** Link highlighted above should be in an **about** button instead as it contains information about the infragram camera and more of its usage.

  
### 

### \*\*Proposed

Solutions\*\*

Enable Cross browser drag and drop Feature using HTML5,bootstrap4 and vanilla Javascript  
  

HTML CODE SNIPPET![image description](/i/46065.png "drag1.PNG")

  
JavaScript code snippet![image description](/i/46066.png "DRAG2.PNG")

  
![image description](/i/46067.png "drag3.PNG")

  
Resulting UI

  
![image description](/i/46069.gif "ezgif.com-gif-maker.gif")

  
1\. Redesign the [infragram.org](http://infragram.org/) page to a full screen with a toolbar, solicit and
incorporate input from the user community taking to cognizance features from bootstrap 4\.

2\. Add enough spacing and styling to links in the UI for a
better user experience.3\.
Move the Q&A feature into a Help menu, allow cross-browser
drag-and-drop on the entire page instead of just selecting an image, and add a popup "Welcome" modal box which guides your first few steps
based on the tutorial at [https://publiclab.org/n/15075](https://publiclab.org/n/15075 "https://publiclab.org/n/15075") and
more at [https://publiclab.org/infragram#Activities](https://publiclab.org/infragram#Activities) to
improve
the layout of [infragram.org](http://infragram.org) .

4\. Add the URL embedded in _**camera**_ link
In the Welcome Modal box proposed above (3) as it contains basic information on
how to use infragram.

5\. Embed the sandbox URL instead in the _**About
Infragrammer**_ Link, as there are no features in its present
embedded URL.

6\. Add a background tutorial video on how to use infragram on the [infragram.org](http://infragram.org)
Home page.

  
  
### 

\*\*

PROPOSED REVAMB OF [INFRAGRAM.ORG](http://INFRAGRAM.ORG) \*\*

### 

![image description](/i/45775.jpeg "WhatsApp_Image_2022-04-14_at_1.42.50_PM.jpeg")

PROPOSED REVAMB OF \*\*[https://infragram.org/sandbox/index.html](https://infragram.org/sandbox/index.html) \*\*

![image description](/i/45776.jpeg "WhatsApp_Image_2022-04-14_at_1.42.49_PM.jpeg")\*\*  
\*\*

### Timeline/milestones

_Break your project up into small projects -- one per week!_

|

**Weeks**
|

**Tasks**
|
|

**Week 1**
|

Work with mentors to
complete onboarding to the publicLab and infragram community.

Learn about and
understand the existing UI, its flow, and goals and test various different use
cases while effectively Communicating with the community on my understanding
of how the flow works and making sure I completely understand the goals of
this tool.
|
|

**Week 2 & 3**
|

Create a working
wireframe that includes

- cross-browser drag-and-drop on
the entire page instead of just selecting an image,
- moving Q&A feature into a
Help menu,
- adding a popup "Welcome" modal
box which guides the first few steps based on tutorials.

and solicit feedback
from the community.

Communicate with the
google summer of code intern on the corresponding project.

Make corresponding UI changes

Effect all
suggestions and create a final working wireframe for the project.

---------

|
|

**Week 4**
|

Communicate with the
google summer of code intern on the corresponding project.

Transition project
from bootstrap 3 to bootstrap 4\.

Create a working
"mockup" interface with Bootstrap elements (that is not hooked up to JS yet).

Solicit feedback from
the community and make corresponding changes.

|
|

**Week 5**
|

Iterate with user
feedback.

Effect all suggestions and corrections from the feedback.

Communicate with the
google summer of code intern on the corresponding project for suggestions.

Effect all UI changes.

|
|

**Week 6**
|

Work with the
google summer of code intern on corresponding project in Implementing
solutions highlighted in **Problem
solution** 2 & 4 above.

Solicit feedback from the community.

|
|

**Week 7 & 8**
|

Work with the google
summer of code intern to Implement the new interface in HTML/JS.

Ensure each feature/function still works.

Raise possible FTOs for newcomers.

Solicit feedback from mentors and community members.

|
|

**Week 9**
|

Create documentation
for new features, and updates in new [infragram.org](http://infragram.org) UI.

Work with google
summer of code intern and solicit reviews from mentors.

Effect changes from
suggestions.

|
|

**Week 10**
|

Raise FTOs to address
solutions highlighted in **problem
solution** 5 above.

Solicit feedback from
mentors and community Members

Effect changes from suggestions.

|
|

**Week 11**
|

Ensure new features /
Functions still works.

Raise possible FTOs for newcomers

|
|

**Week 12**
|

Pick up the possible tasks
from the [link](https://sequencer.publiclab.org/examples/#steps= "https://sequencer.publiclab.org/examples/#steps=")[](https://sequencer.publiclab.org/examples/#steps=)here

Create a wireframe
and solicit feedback from the community.

|
|

**Week 13**
|

Work on creating
design mockups for a new colorized popup modal window to describe each color
map and offer thumbnails.

Implement suggestions from feedback.

Raise Possible FTOs
for newcomers to the community.

|

### 

### Needs

_Collaboration with google summer of code intern and mentorship from mentors and community memebers._

### 

### First-time contribution

- Comments, to show overall community involvement (like helping others):[https://github.com/search?utf8=✓&q=commenter%3Aakanbifatimah+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Aakanbifatimah+org%3Apubliclab&type=Issues "https://github.com/search?utf8=%E2%9C%93&q=commenter%3Aakanbifatimah+org%3Apubliclab&type=Issues")
- Open issues:[https://github.com/publiclab/plots2/issues/created\_by/akanbifatimah](https://github.com/publiclab/plots2/issues/created_by/akanbifatimah "https://github.com/publiclab/plots2/issues/created_by/akanbifatimah")
- Closed PRs:[https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aakanbifatimah+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aakanbifatimah+is%3Aclosed "https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aakanbifatimah+is%3Aclosed")

### Experience

I attended a hybrid
coding Bootcamp program- the bulb-Africa Fellowship, where I worked on personal
Projects, was Introduced to the tech meetup scene, learned soft skills needed to be a
better team player at work, and mastered every aspect of skills required to
become a professional programmer. My stacks are as follows:

Front-End: React JS,
JavaScript, HTML5, CSS3, Bootsrap, Figma, WordPress

Back-End, Tools &
Methods: Node JS, Git, GitHub, Chrome Dev Tools

Professional: Remote
Pair-Programming, Teamwork, Mentoring, Problem-Solving, and effective communication.

I have built over 40
projects and contributed to both open and closed source projects, this can be found in my GitHub repo [https://github.com/akanbifatimah?tab=repositories](https://github.com/akanbifatimah?tab=repositories)

---------

### Teamwork

\_During my fellowship coding boot camp, we were given
the task to complete a group capstone project which involved collaboration
between Product Managers, UI designers, and software engineers remotely. We
engaged in stand-ups to discuss the progress of our work and \_took turns in working as either a navigator or a driver while sharing
our screens. _This always pushed me hard to complete my task and
taught me how to effectively communicate my progress, blocks to my team members,
this has generally improved my performance as a software developer and ability
to work with people from a diverse range of cultures from any part of the world._

---------

### Passion

\_  
My experience as a chemistry student has helped in shaping my awareness of the impact of environmental hazards on the existence of life. I completely resonate with PublicLab's mission of "_Pursuing environmental justice through community science and open technology_". I am passionate about how infragram would help farmers determine the best planting seasons for their produce thereby saving them loss. I am also passionate about how PublicLab creates tools that are low cost, easy to use, and built through public participation and collaboration and how these tools have supported a large network of practitioners across various fields of science.

### Audience

\_  
Looking at making infragram more user-friendly as a DIY tool for Agriculturists, environmentalists, health scientists, and any individual/community interested in making the environment and its components safe and healthy for all.\_

### Commitment

\_I understand this is a serious commitment and confirm my availability to work as a full-time summer job giving it all my time and dedication. I intend to work 9hrs a day (Ihr tea break/lunch) / 5 times weekly during the duration of this internship. With my past experience as a software engineer and my breakdown of tasks/ weekly goals, I am confident I would complete the project. \_