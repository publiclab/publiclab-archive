---
title: Outreachy proposal
tagnames: software, soc, soc-2018, rgsoc-2018, outreachy, outreachy-2018, outreachy-2018-proposals, response:17359, first-time-poster
author: quinn-codes-synthesis
path: /notes/quinn-codes-synthesis/10-29-2018/outreachy-proposal.md
nid: 17419
uid: 553069

---

# Outreachy proposal

by [quinn-codes-synthesis](../profile/quinn-codes-synthesis) October 29, 2018 07:01

October 29, 2018 07:01 | Tags: [software](../tag/software), [soc](../tag/soc), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018), [outreachy-2018-proposals](../tag/outreachy-2018-proposals), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster)

----

## About me

**Name:** Quinn

**Pronouns:** they/them/theirs

**GitHub:** quinn-codes-synthesis

**Email:** quinn.codes.synthesis at gmail

**Discord:** Captain Brand # 0496

**Other Contact:** I'm flexible to adopting whichever methods of communication work best for the team, if they are not any of the above.

**Location:** Durham, NC, USA

**Why code?:** I'm switching careers from the field of psychology and behavioral health. My work has inspired me to look for ways that technology can improve the reliability of our healthcare data, the effectiveness of our work processes, and the quality of life and access to care our patients receive. Furthermore, I firmly believe that the world benefits when people forge unconventional, interdisciplinary career paths, allowing them to approach old problems from new and unique angles. My initial focus has been on web development mainly because of how widely accessible it is -- websites aren't limited to Android or iPhone, Windows or Mac or Linux. (It also helps that I dabbled in HTML and CSS long before I ever could have told you what a 'for loop' was, haha -- so I got a little bit of a head start on understanding the basics.)

_Any questions? Just ask! A more in-depth 'about me' also exists [here](https://github.com/publiclab/plots2/issues/3679#issuecomment-429252146)._

## Project description

Extend community collaboration statistics and visualization system for [PublicLab.org](http://PublicLab.org)

### Abstract/summary (<20 words):

Aggregate site and user data in a visually appealing, user-friendly, and resource-efficient manner.

### Problem

Public Lab is by no means lacking in statistical information and displays. However, due to the process of adding on features by many different collaborators over the span of years, this information is not always displayed in a consistent and easily navigable manner. This project aims to polish existing features and introduce new ones, such as integrating the site's tagging system with a statistical filtering system.

### Timeline/milestones

_The below is all based off of the suggestions listed on the Public Lab project description on the Outreachy website. But if my shorthand for a sub-project description isn't clear, please ask!_

\*\*  
\*\*

**Week 0: Research and Preparation**

"Week 0" is not just a programming joke -- there's an entire month in between now and when the internship is due to start. In my downtime during/after my current job, I plan to study up on the code behind similar projects and take note of their strengths, weaknesses, pitfalls. I will also be continuing my studies of Ruby on Rails. This will allow me to hit the ground running from the very start of Week 1\.

(If selected for this internship, my work hours will be reduced to below 20h/wk beginning December 1st, allowing me to focus on Public Lab full-time.)

\*\*  
\*\*

**Week 1: Community Engagement/Mockups**

Introduce myself. Ask questions. Poll the site's users and the people involved behind the scenes -- what is working well about our current metrics pages? What changes would help you most? Where do you run into trouble or frustration? Notes. Follow-up questions.

Take what we've learned so far and design a few different possible layouts for polished metrics pages. Get feedback as above; refine designs. Perhaps a few different skins users can choose between if we're feeling particularly ambitious or ahead on time? (Or maybe that's just my inner graphic design nerd talking.) It helps to have an overview of "this is what the finished project should look like" to compare to, and to give motivation to keep building towards the end goal. Start breaking down the most needed/desired features into smaller components, e.g. as below.

\*\*  
\*\*

**Weeks 2 and 3: Back-End Sub-Projects #1 and #2**

\#1: providing new statistics on questions asked vs answered and #2: Display tags most used in a given time period.

I plan to have each week with one sub-project as the focus, but if possible I'd like to try having another sub-project paired with it as something to jump back and forth between. For example, if I get stuck on one project and I'm waiting to hear back from a mentor, I can jump into work on the other project to stay productive. (If not, I can always stick to one project a week.)

**Weeks 4 and 5: Back-End Sub-Projects #3 and #4**

\#3: Default display of contributors "for all time" and script to go back through posts and tag first-timer posts with `first-time-poster` tag retroactively so they show up at [https://publiclab.org/tag/first-time-poster,](https://publiclab.org/tag/first-time-poster,) to improve stats on first-time posting and also #4: consolidation of existing range pages with main stats page

Same as above, different sub-projects.

**Weeks 6 and 7:** **Back-End Sub-Projects #5 and #6**

\#5: provide downloadable JSON/CSV from stats pages and #6: Weekly caching of data to address potential performance issues

These seemed to make the most sense to go last out of the proposed back-end projects. This is specifically because earlier weeks will have us introducing coding to record new statistics. With these done afterward, we shouldn't have to return to these down the line to include the work of projects #1-4, because they can be integrated from the start.

---------

#### **Milestone 1: Back-End Sub-Projects done! Yay!**

**Weeks 8 and 9: Statistics-per-tag sectioning**

Sub Project #7: display stats on a per-tag basis and Sub Project #8: Display list of subscribers for each tag

I would list "Closer mirroring between stats and tags pages" as a ninth sub-project, but my goal here is to edit the design to be similar as I'm working my way through each of the other projects above.

---------

#### **Milestone 2: Statistics-per-tag done! Whoohoo!**

\*\*  
\*\*

**Weeks 10, 11, and 12: Interface design and stretch goal**

Sub Project #9: Bar graph icons as links to the appropriate stat pages ans Sub Project #10: Date selector for stats ranges and Sub Project #11: Click a bar graph to open that collection of items in a view.

Confession: I put this last because I think I will find them to be the easiest tasks out of the bunch; most of my experience is focused on front end work and design work. Putting these projects near the end allows for less crunch if other projects run over their allotted time, because theoretically interface/design work should take me less time.

Stretch goal is making the system compatible with GrimoireLab.

### Needs

I'm great at independent learning. When I run into trouble, it would be most helpful if mentors could help me figure out what questions to ask of resources like Stack Overflow in order to get the answers I need, without outright giving it away. I'll ask follow-up questions as needed and will likely ask for frequent feedback i.e., "I was thinking of setting this sub-project up like x, y, z -- what do you think?" Or, "here's where I'm at now, do you have any comments or critique?"

### First-time contribution

[https://github.com/publiclab/plots2/pull/3672](https://github.com/publiclab/plots2/pull/3672) -- my first contribution. Thanks to jywarren for the help!

Learned: working with git, visual studio code, making a new branch for a feature rather than writing it on master, setting up a linux virtual machine environment compatible with ruby on rails and the other necessary features for Public Lab

[https://github.com/publiclab/plots2/issues/3701](https://github.com/publiclab/plots2/issues/3701) -- my second contribution. Found and documented a first-timers-only issue for fellow Outreachy participant Codeama to work on!

Learned: Writing up and properly formatting a github issue, how the plots2 repo connects different files to one another (i.e. how a css file connects to its related file in ruby), how to record a "diff" of my code on my local copy of a repo so that it can be read and used by someone else.

### Experience

[https://github.com/quinn-codes-synthesis](https://github.com/quinn-codes-synthesis) -- direct link to github

I've dabbled in HTML, CSS, and general design/layout/illustration stuff since I was young, but it wasn't until this past May that I started dedicated study of Javascript, more advanced HTML/CSS, and recently Ruby. I also have experience as a user of many open source software programs such as GIMP, Firefox, LibreOffice, several open source learn-to-code websites... the list goes on.

Additionally, I am a daily user (through my job) of a closed-source software company called Sigmund Software. They have two products, Sigmund (executable) and Aura (in-browser), through which we access the electronic medical records of our patients. As you might imagine, this involves sorting through a lot of data every day, and trying to find the most efficient ways to access and display what we need at any given moment. Working with this software is actually a lot of my inspiration to get into coding, because I am full of ideas for what I'd like to see the software do and ways I wish the programs could display data differently. I wanted to learn to code so that I could have insight into what it was like on "the other side" of a program like that one -- and then I discovered that I like programming so much, I want to make it a career!

---------

### Teamwork

This is my first time working with a team of others as a programmer/developer. Let's make it a great experience, together!

Outside of that, I have extensive experience working with teams, ranging from several years on customer service teams, to years working on group projects in college, to working on a huge interdisciplinary collaborative team through my current workplace (a hospital). I've spent the last few years in an upper 'tier' of my role, which means that I mentor and train people in the junior tiers, periodically serve on an on-call rotation, and take on "shift leader" duties once to twice a week.

---------

### Passion

Public Lab's culture of being welcoming and collaborative is really appealing. Public Lab made these values obvious from my very first introduction to the organization. I've spent the last 3+ years working for a company that literally has "Collaborative" in its name, so I definitely live and breathe this kind of thing and I'm glad to see that Public Lab does, also.

In addition -- I can see that Public Lab is trying to make a positive change in the world. I think that is probably true of most open source software, but my impression so far is that Public Lab has gone to great lengths to try and make itself welcoming and accessible, above and beyond what many might consider. I got into psych and healthcare out of a desire to make a positive impact, especially for those less fortunate -- and that still holds true today. It's not enough to just "be a programmer" -- I want to be a programmer for a worthy cause!

### Audience

This is a great topic -- I'd love to ensure any changes I make to Public Lab are user-friendly and accessible. Part of the reason I want to reach out to the community in my first week is to see if there are any barriers to using Public Lab that we can break down while (re)building the above features. For instance, someone who is color-blind might need a special theme in order to see certain graphs well. Someone who uses a screen-reader will have challenges that are unique and must be coded for specially, especially when it comes to working with the display of data. People with older computers or slow connections might have trouble accessing sites that rely on a lot of scripts or dependencies simultaneously. The deaf and hard of hearing need subtitles or a transcript for any information communicated by sound, i.e. video tutorials. And those who aren't very tech savvy need a clean, simple interface that won't overload them with information. They might need clearly labeled options to make text and buttons larger, and helpful tooltips. (Honestly, I could easily spend the full 3 months of the internship just talking about accessibility and design and how they go hand in hand!)