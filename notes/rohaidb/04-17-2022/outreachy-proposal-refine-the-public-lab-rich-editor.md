---
title: "Outreachy Proposal - Design a new full-screen user interface for Infragram.org"

tagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: rohaidb
path: /notes/rohaidb/04-17-2022/outreachy-proposal-refine-the-public-lab-rich-editor.md
nid: 30446
uid: 792896
cids: 30049,30056,30072,30081
---

![](https://publiclab.org/public/system/images/photos/000/045/933/original/Main_Page.png)

# Outreachy Proposal - Design a new full-screen user interface for Infragram.org

by [rohaidb](/profile/rohaidb) | April 17, 2022 05:02

April 17, 2022 05:02 | Tags: [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [outreachy-2022](/tag/outreachy-2022), [outreachy-summer-2022](/tag/outreachy-summer-2022)

----

---------

## About me

My name is Rohaid Bakheet and I am an Outreachy applicant.

**Affiliation**: Outreachy

**Location:** South East United States

## Project description

### To redesign the UI of Infragram, the site needs to be split up and contained to relevant topics.

### Problem

The issue being solved is making the Infragram site easier to navigate and understand for new and returning users.

### Timeline/milestones

- **Week 1**: Getting familiar with the code base and UI, as well as working with the community to take in feedback and any comments. This week will also be spent refining this plan and talking to mentors.

---------

- **Week 2**: Adding a main bar for the key sections of information that a new user would want. Also, the main page would be reformatted to include a blurb on what Infragram is and what the site is for, moving the two pictures of an example Infragram photo lower on the page, and placing two buttons that directs the user to the Upload page and to the About page.
- The reason the main page needs to be reformatted is that the main page is cluttered with a lot of links and images with no clear focus on where a user can start. By cutting down the information on the main page to only recent uploads and a summary, it's less distracting.
- The header bar of buttons also neatly partitions the site, while also allowing users to go to different sections of the website without having to go back to the main page.
- Also, since getting familiar with the code base would require some time, I feel that this workload is appropriate for the second week._![image description](/i/45896.png "Main_Page.png")_
- **Week 3**:The main page will have a slideshow feature to see recent Infragram uploads and the gallery page will now include all the images that have been uploaded.![image description](/i/45899.png "Gallery_Page_2.png")![image description](/i/45900.png "Gallery_Page_3.png")
- As the gallery isn't so much of a new feature as it is moving the gallery section from the main page to a new one, the original code can be re-used. Also, setting the display count per page is a quality of life feature that users would appreciate.

---------

- **Week 4**: This week will be spent on getting feedback from the community and tweaking according to the commentary.

---------

- **Week 5**: The upload page will be reformatted to include a drag and drop window, as well as re-arranging the control settings. The Quick Start modal will add a cancel button as the link is too small and easily looked over. The gallery section will also be removed as it already has it's own page._![image description](/i/45903.png "Upload_Page_Screen_1.png")![image description](/i/45901.png "Upload_Page_Screen.png")_
- **Week 6**: The settings button will have a settings modal open when it's clicked. This will compact all the settings on the usual Infragram page, as well as adding labels and descriptions. After this change is pushed, the rest of the week will be spent getting community feedback and tweaking changes.![image description](/i/45904.png "Settings_Page.png")
- **Weeks 7 and 8**: Moving the FAQ section to it's own page, adding a New Post button and a short description. As the FAQ section leads to the Public Labs page, it might take extra time to trouble shoot and implement the necessary changes.
- With the time remaining left on Week 8, the image page will be reworked, and the menu bar will be formatted to match the style of the rest of the site._![image description](/i/45921.png "Forum_Page.png") ![image description](/i/45922.png "Picture_Page.png")_
- **Weeks 9 & 10**: There will be a description box added to allow for submitter's to include details regarding where the picture was taken, when, and any other information they see fit. This description will show up on the image page.
- I think this addition will aid users and specifically climate scientists, as currently the information given for each image is only the upload date, time, username and the photo itself. Providing the context of the photo itself could lead to wider community discussion.
- This addition is given 2 weeks as this will require working with the backend of the website to allow for additional information, and this addition is placed at the very end of the project incase of possible delays and is not necessary overall. This addition would also require community feedback and remove.

---------

- **Weeks 11 & 12**: Filling out / planning the About page as well as the Contribute page. As the Learn More button on the Infragram page currently points to a page on Public Lab, I feel that it would be more cohesive to move that information to the actual site, as well as organizing it. Unfortunately, I'm not sure how to approach this so I'd appreciate any feedback from community and members.
- The Contribute page would be helpful for anyone who wants to contribute to Infragram, whether through Outreachy, GSOC, or working solo in open source. I wasn't aware of Infragram or Public Lab before applying, and those who post to Infragram may not be aware that they can contribute to the project as well. Having a page dedicated to giving contributers a guide to making a difference can increase involvement and improve the site as well.

---------

- **Weeks 13**: Taking in community feedback, implementing changes, as well as finishing up documentation.

### Needs

---------

Since this project is big and my first internship/open source project, I'd like to receive guidance from mentors. I'd also need documentation regarding the site, how it's built, and how the backend works.

### First-time contribution

---------

- **Comments, to show overall community involvement (like helping others)**: I don't have a link for this, but I contribute and talk frequently in the [https://gitte](https://gitter.im/publiclab/publiclab)[r.im/publiclab/publiclab](https://gitter.im/publiclab/publiclab) chat.
- **Closed PRs**:[https://github.com/publiclab/plots2/pull/10969](https://github.com/publiclab/plots2/pull/10969 "https://github.com/publiclab/plots2/pull/10969")

---------

### Experience

I have a Bachelor's in Computer Science. In university, I learned Javascript, C#, CSS, and HTML. I've worked on 2 different websites, all with Javascript, CSS, and HTML.

I worked on a team of four with a client to build a website that allowed professor's to upload games for their students. I made a demo game out of JS, CSS, HTML as well as Mozilla Together.js. The Github link for this project can be found [here](https://github.com/peterhalpin/coefficient).

I also worked on setting up an online database to keep track of my and my coworker's skills for potential clients at my university. I worked with 2 other coworkers and I visually represented the data, implemented a search bar, and allowed for screen reader accessibility. The link for this project can be found [here](https://skillstree.applab.unc.edu/ "https://skillstree.applab.unc.edu/").

---------

### Teamwork

Outside of the projects I listed in Experience, I've worked on 6
demo games. On all of them, I worked in teams of 4 or larger. All of the code is open source, and 4 out of 6 of the projects are hosted on my Github. Outside of
programming, for 5 of the projects, I was in charge of planning, communicating with
team members, and making sure we adjusted for any setbacks. I find it important that all team members are on the same page and conflicts are resolved immediately as progress will be held back otherwise.

---------

### Passion

I applied for this project specifically because it dealt with the environment. As climate change is increasingly devastating the environment, I find it imperative to lend my skills where I can. I also wanted to work on Infragram because it is relatively free and easily accessible to the general public and I want to be a part of projects like this.

### Audience

I want my work to help out anyone who wants to learn more about the environment and climate change. By simplifying and making the main website easier to navigate, it makes the website friendlier to new users and will lead to an increase of awareness in climate change.

### Commitment

Yes, I am aware that this will be a full-time job. I plan to work a 36 hour work week, and will spend 6 hours/ 6 days a week. I choose to spread it out over the entire week as I don't have other obligations, and I believe 6 hours is good for work-life balance.