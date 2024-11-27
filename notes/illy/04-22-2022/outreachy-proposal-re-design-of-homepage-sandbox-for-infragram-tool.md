---
nid: 30577
title: Outreachy proposal: Re-design of Homepage & Sandbox for Infragram tool
path: public/static/notes/illy/04-22-2022/outreachy-proposal-re-design-of-homepage-sandbox-for-infragram-tool.md
uid: 793723
tagnames: software,outreachy,first-time-poster,outreachy-2022,outreachy-summer-2022
---

# Outreachy proposal: Re-design of Homepage & Sandbox for Infragram tool

## About me

**Name**: Ilona S.

**Wireframe with comments to home-page:** [https://whimsical.com/home-page-HuEHSfcQ5qMcFCC4WsDRhJ](https://whimsical.com/home-page-HuEHSfcQ5qMcFCC4WsDRhJ)

**Wireframe with comments to Infragram:** [https://whimsical.com/sandbox-Q9jgzq1rg39eoiB9BKQAW](https://whimsical.com/sandbox-Q9jgzq1rg39eoiB9BKQAWg)

**Wireframe - mobile first design Infragram:** [https://whimsical.com/sandbox-mobile-version-6LAQegye2CxLcSHcrWAUwR](https://whimsical.com/sandbox-mobile-version-6LAQegye2CxLcSHcrWAUwR)

**Github:** [https://github.com/illyShelly](https://github.com/illyShelly)

**Gitter:** @illyShelly

---------

  
Hello, my name is Ilona. I discovered coding and this web development word a few years ago. My background is Economics and finance. I attended coding bootcamp and gained some knowledge from the Front-End developer + React programme. I was part of the Startup Incubator program in Lisbon. It was great experience, but the main focus was on research of the market, lectures, presentations. So, after a while I came back to coding again. Practising logic, dive into algorithm and data structure when learning new skills on Udemy or MOOC courses.\_

---------

**Project description**

Designing a new full-screen user interface for [Infragram.org](http://Infragram.org) The Infragram project brings together a range of different efforts to make Do-It-Yourself **plant health** comparisons possible with infrared photography. [Infragram.org](http://Infragram.org) enables people with _Infragram-modified cameras to upload photos for analysis_ and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen and create space for new features like multiple resolutions of video, dragging in a recorded video instead of a still image for conversion, and pop up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

---------

**Abstract/summary (<20 words):**

Re-design UI of [Infragram.org](http://Infragram.org) to make it full-responsive, apply new colour scheme, layouts of UI components as well as functional Drag & Drop feature across different browsers.

---------

![image description](/i/46582.png "home_page_top.png")

---------

**Link to my wireframe with added comments:**

I provide the wireframe made in [Whimsical.com](http://Whimsical.com "http://whimsical.com/") with provided comments to the main parts of the homepage and Infragram Sandbox - first round idea (links above).

---------

What problems(s) does your project solve?

- **mobile first approach** - fully responsive on smaller devices,
- modern & intuitive **navigation** throughout the page (incl. navbar and footer, working logo),
- broken layouts, many links and **redirections** incl. 404 links,
- choosing 2 main **font families** and adequate **font size** for each component,
- more user-friendly app with **a walk-through** - even for total newbies,
- simplify and **re-build UI components** - e.x.: cards (with the same height and width corresponding to the size of the window), Q&A (length, btn positioning - small improve as part of my first FTO)
- **improve main message** - whole story behind the idea & call to action,
- optional - could add **examples with solution** after analysis of taken pictures,
- using Bootstrap 5 and Fontawesome icons (e.x.)

**Cards example:**![image description](/i/46440.png "card_parts.png")

**Re-design of Q&A:**

![image description](/i/46442.png "questions_part.png")

---------

-><-

**Footer example:**

**![image description](/i/46583.png "Home_page_2x-8.png")**

---------

**Mobile design:**

![image description](/i/46611.png "Sandbox_-_mobile_version_2x-3.png")

---------

---------

**Timeline/milestones:**

---------

As a potential intern I would appreciate mentors inside and recommend how to improve and be more efficient with the project. As well as, I would love to contribute to PublicLab apps and help others with FTO, which helps me so much to overcome fear that I could break something. I'd like to extend the translation .yml file for new languages to make it available to people without knowing English. I hope I will be able to full-fill all goals in the given time.

| Weeks | Description |
|-------|-------------|
| Week 0 - preface time<br> | - going through codebase, <br>- continue contribution into PublicLab apps,<br>- brush up knowledge of JS |
| Week 1<br>(30th May - 5th June) | - research and deeper understanding of the application (UX),<br>- know how the app/code works - testing,<br>- discussion with mentors and community,<br>- Outreachy commitments - blog and Meetup |
| Week 2 <br>(6th June - 12th June) | - homepage mockup UI/UX (possibly in Figma),<br>- have discussion with mentors & implement new ideas from others in the public community,<br> |
| Week 3<br>(13rd June - 19th June) | - discuss colour scheme for a new homepage and UI elements,<br>- new font for websites or choose the main 2 which suits the best,<br>- building UI components (nav, banner, cards, questions, footer, …)<br><br> |
| Week 4<br>(20th June - 26th June) | - separate homepage into sections,<br>- discussion with community to make easy and intuitive walk-through especially for new users,<br> |
| Week 5<br>(27th June - 3rd July) | - get feedback and apply changes,<br>- modals content and videos,<br>- Q & A part |
| Week 6<br>(4th July - 10th July) | - infragram page mockup UI/UX,<br>- discussion with mentors and others in the public community<br> |
| Week 7<br>(11th July - 17th July) | - choose colour scheme,<br>- build UI components for Infragram - main part and sidebar/toolbar,<br>- get feedback - have discussion for improvements<br><br> |
| Week 8<br>(18 July - 24th July) | - make responsive website without applied JS yet,<br>- start co-operate, if not earlier, with CSoC intern |
| Week 9<br>(25th July - 31st July) | - get users (community) feedback,<br>- resolve bugs and implement their ideas,<br>- make pop up window to welcome users & walk through steps |
| Week 10<br>(1st August - 7th Aug) | - work with GSoC applicant on the implementation of the backend part,<br>- solving bugs, reiterate (apply changes),<br>- go ‘live’ with the page to check it’s functionality |
| Week 11<br>(8th August - 14 Aug) | - apply main JS part,<br>- drag & drop feature with cooperation with other intern,<br>- check functionality, responsiveness for most devices and across main browsers |
| Week 12<br>(15th Aug - 21st Aug)<br> | - implement changes, solving bugs, <br>- have discussion with mentors,<br>- finalise app to have fully functional JS feature implemented,<br>- apply changes into documentation |

| Week 13 (22nd Aug - 28th Aug) - Complete all work, PR's, testing all features; update documentation

---------

### Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_

I would appreciate guidance and mentorship. It will be my first official internship into open source project as well as in web development. I'd like to discuss my ideas with others within the community and know their opinion to be sure we can get the most within the short time period.

Even though I have some basic knowledge of JS, until the beginning of the contribution phase I want to deep-dive into JS problematic, as well as to go through the code base to fully understand how the application functions.

I had some trouble using Infragram on my iPhone and had some issues in my browser. I'd like to find out whether some improvements could be done. So, the testing should be part of the proces for sure. And also helpful to understand the app properly.

---------

### First-time contribution

My first contribution was #10912: [https://github.com/publiclab/plots2/pull/10912](https://github.com/publiclab/plots2/pull/10912) to add space for button in Q&A section.

I created **FTO's** for others as well:

**#10982** to improve UI in Plots2 repo in the question part: [https://github.com/publiclab/plots2/issues/10982](https://github.com/publiclab/plots2/issues/10982) , **#1629** Correct typo in Mapknitter: [https://github.com/publiclab/mapknitter/issues/1629](https://github.com/publiclab/mapknitter/issues/1629)

---------

**My activity and interactions** with others (like helping others):

[https://github.com/search?q=commenter%3Aillyshelly+org%3Apubliclab&type=](https://github.com/search?q=commenter:illyshelly%20org:publiclab&type=)

| PR | Status | <br> |
|----|--------|------|
| [Improve and correct UI + media query of question and alert in show.html.erb](https://github.com/publiclab/plots2/pull/11054) | <div class="d-flex mt-1 text-small color-fg-muted"><span>waiting</span></div> | <br> |
| [Create a new cz.yml file for Czech lang with initial translation](https://github.com/publiclab/plots2/pull/10921)<br> | approved | <br> |
| [Add space for q&a btns under the frame visible in mapknitter etc.](https://github.com/publiclab/plots2/pull/10912)<br> | approved<br> | <br> |
| [display select btn for all actions in Spam2](https://github.com/publiclab/plots2/pull/10905 "https://github.com/publiclab/plots2/pull/10905")<br> | approved<br> | <br><br> |

- **Closed PRs**: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aillyshelly+](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aillyshelly+)

---------

### Experience

_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples._

\_I like nice & sleek designs. This is the web application we work together as a team during a bootcamp programme. Focusing on chemicals in diet. The functionality: scan QR code on the product and get info about additives and proportions of fat, carbohydrates, proteins as well as salt, fibre etc. \_

_My part was mostly working on a mockup in Figma, choosing the colour scheme, making functional svg icons - where I wanted to change their background colours based on the risk/calculated logic (green, orange, red) as well as additives buttons and their description. Plus other debugging and refactoring of Ruby code in RoR app using Heroku service._

_I made some basic apps in RoR as well as a basic React app when I won the Udacity course - Web Developer. I did some UX/UI course._

_Last few months I spent my time with CS50 course focusing on Computer Science knowledge, basic C and Python + JS._

![image description](/i/46430.png "eatamina.png")

---------

### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

_I had some personal experience working in a team during my bootcamp when building RoR apps. Fully remote experience when I won Udacity course helping others to debug their code or explaining to them the functionality._

_I was part of Start-up incubator programs in Lisbon until the Covid hit. I worked with various professionals from different parts of the world while learning new things and exploring new markets._

---------

### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

_I am very interested in nature and the protection of animals. I am concerned about the huge consumption and usage of plastic and microplastic especially found in water, food etc (based on new findings). The problem with water because of inefficient rain and snow in Europe is starting to cause problems not just for farmers but for the general public. So, thanks to the Outreachy and Publiclab I could discover simple and helpful technology which could make a big difference for people without expensive tools or budget._

### 

---------

**Audience**

_Whom do you want your work to help? We especially appreciate proposals which make technologies and techniques more welcoming and friendly to those who've often been excluded._

\_I would like to achieve not just a new fully responsive application with nice design but especially to make it available to people interested in environmental issues, who are total newbies without any scientific background and not so technical savvy. So some guidance, simplicity of steps taken as well as examples to fully understand the purpose of this app. \_

### 

---------

**Commitment**

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

_I am keen to start and fully contribute and take responsibility for the project. I can work from Monday to Friday upto 40 hours (if necessary longer). I want to contribute as well as improve my skills especially when it has such a good impact on people's life._