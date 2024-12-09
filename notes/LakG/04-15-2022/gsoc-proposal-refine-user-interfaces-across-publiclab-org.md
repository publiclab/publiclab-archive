---
title: GSoC"proposal: Refine User Interfaces across PublicLab.org 
tagnames: software, gsoc, soc, first-time-poster, lat:20, lon:70, zoom:5, gsoc-2022, gsoc-2022-proposals
author: LakG
path: /notes/LakG/04-15-2022/gsoc-proposal-refine-user-interfaces-across-publiclab-org.md
nid: 30433
uid: 794832

---

![](https://publiclab.org/public/system/images/photos/000/045/813/original/gsoc.png)

# GSoC"proposal: Refine User Interfaces across PublicLab.org 

by [LakG](../profile/LakG) April 15, 2022 22:32

April 15, 2022 22:32 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [lat:20](../tag/lat:20), [lon:70](../tag/lon:70), [zoom:5](../tag/zoom:5), [gsoc-2022](../tag/gsoc-2022), [gsoc-2022-proposals](../tag/gsoc-2022-proposals)

----

---------

## About me

_Hey, I am a sophomore currently pursuing undergraduate in computer sciences. I am very enthusiastic about web development. Be it the 2px extra padding in the navbar or an extra unused variable in my java script file, I have eyes sharp enough to not let them pass through the final code. My expertise train runs on the rails of HTML,CSS powered by the fuel of JavaScript. I enjoy Contributing to open source organizations whole heartedly. Apart from that I love reading novels in my free time._

Affiliation Guru Gobind Singh Indraprastha University

Location: North India

## 

## Project description

Public Lab is impacting a lot of lives around the world. As mentioned, a lot of organizations, institutes, individuals access the Public Lab website for a lot of their work. A good User Interface can play a crucial role in such situations. With My project I intend to make various minor UI changes throughout the website to improve the overall style quotient of the interface and enhance the user experience.

### 

### Abstract/summary

Improved engagement by re-surfacing old content and increase in user retention time by making plenty of minor UI Changes.

### 

### Problem

_With my project I intend to have a solution for the following problems:_

- Improvised Content suggestion - Based on the search results, instead of displaying results just sorted by date, a mechanism can be put in place to suggest users articles and posts with has a better user engagement first. Different metrics such as likes count, number of views, can be trial tested to find out the best set. This will result in improved user retention on the website as they are likely to spend more time on the website.

- Uniform Cards sizes - On the people's page of Public Lab, the users card are not of same height. This is because the number of badges assigned to each user is not same. Here's an example of the concerned problem. ![image description](https://publiclab.org/i/45744.png "photo1.png")

- To tackle the above problem, cards of the users can be made of equal height by setting the height value such that it utilizes 100% of the available space instead of just fitting the content. The current asymmetricity in the card size leaves a bad impression on the users. I have talked about this problem in detail in the following [issue](https://github.com/publiclab/plots2/issues/11052) on GitHub, also mentioning corrective steps.
- Incorporate more tags on user cards - as per the current implemented model on the website, the user cards on the people's page shows at most 3 tags at a time which are associated with the user on the page. Here's a screen snap demonstrating the same. ![image description](https://publiclab.org/i/45758.png "gsoc2.png")Instead of this we can add a graphical element such as a plus sign after the last tag, hovering over which will result in a popup containing other popular tags of the user. A graphical explanation of the same is attached below.![image description](/i/45894.png "photo3.png")

  
**Timeline/milestones**

Before GSoC Period - Till 20th May

- Staying Active within the community through gitter.
- Reviewing PRs to familiarize myself with the code.
- Contributing with FTOs for other community members

Community Bonding (20 May, 2022 - 12 June, 2022)

- Transition from GitPod to setup the development Environment locally.
- Connect better with the community and attend Public Lab open calls to understand better the requirements.
- Discuss the Project with mentors regarding the UI changes to be implemented by presenting proper wireframe diagrams

Week 1 (13 June, 2022 - 19 June, 2022 )

- Start working on making card sizes uniform.
- Make corresponding UI changes.
- Create Unit Tests for changes made
- Take feedback from mentors and improve.

Week 2 (20 June, 2022 - 26 June, 2022)

- Implement the uniform card sizing.
- Start working on incorporating more tags
- Make corresponding UI changes.
- Create Tests for the changes made.
- Seek feedback from mentors and improve.

Week 3 (27 June, 2022 - 3 July, 2022)

- Continue working on incorporating more tags
- Make required UI changes.
- Write unit tests for the changes made.
- Take feedback from mentors and improve.
- Contribute with FTOs for fellow contributors.

Week 4 (4 July, 2022 - 10 July, 2022)

- Start working on improvised content suggestion.
- Take feedback from community for finding the efficient algorithm.
- Create FTO's whenever possible.
- Take feedback from mentors and improve.

Week 5 (11 July, 2022 - 17 July, 2022)

- Continue working on improvised content suggestion.
- Make corresponding UI changes.
- Create Tests for the changes made.
- Contribute with FTOs.
- Take feedback from mentors and improve.

Week 6 (18 July, 2022 - 24 July, 2022)

- Implement improvised content suggestion.
- Create unit tests for the changes made.
- Start documenting the changes made in the form of a report
- Seek feedback from mentors.

Week 7 (25 July, 2022 - 29 July, 2022)

- Submit Phase 1 evaluation.
- Start working on interlinked navigation.
- Contribute with FTOs.

Week 8 (1 August, 2022 - 7 August, 2022)

- Work on suggestions received post phase 1 evaluations.
- Continue working on interlinked navigation.
- Make corresponding UI changes.
- Write unit tests for the changes made.
- Seek feedback from the community members and mentors.
- Contribute with FTOs for fellow contributors.

### Needs

_Whatever you work on, all you need is a dedication to work. I bring the non-comparable determination with me on the table. Apart from that, I will be requiring the valuable guidance of the mentors. For finding the most efficient method of content suggestion I may require feedback from fellow community members to understand what approach works the best._

### First-time contribution

- Comments, to show overall community involvement: [https://github.com/publiclab/plots2/issues/10915#issuecomment-1095553078](https://github.com/publiclab/plots2/issues/10915#issuecomment-1095553078)
- Open issues: [https://github.com/publiclab/plots2/issues/11052](https://github.com/publiclab/plots2/issues/created_by/jywarren)
- Closed PRs: none at the moment but I am hopeful of having one very soon.

---------

### Experience

I believe in doing practice more than studying while learning something new. I realized I have written my first program when on clicking on trial.exe displayed "hello world" on my terminal. There's no looking back from there. I am a web development enthusiast. I love spending countless hours working with JavaScript. HTML and CSS. I also have working proficiency in Python. Here I have attached two of my projects close to my heart.

- JavaScript based [User-Authentication System](https://github.com/void-ness/WebDev/tree/main/log%20in%20form) - I have tried to implement my own user authentication system. In the portal the user is required to enter his username and password, if the pair matches the credentials stored in backend, the user authentication is successful. Else it prompts an error.
- Tech Stack -- JavaScript, HTML, CSS, Node.js, Express.js

  
- JavaScript based Responsive [Tic-Tac-Toe game](https://github.com/void-ness/TicTacBruh) - While learning the concepts of responsiveness, I created an adaptation of a Tic Tac Toe Game. It offers users a wide number of functionalities some of which are -- keeping a track of scores, changing the background color to a randomly selected color out of 16 million options, and various other options.
- Tech Stack -- JavaScript, Bootstrap 4, HTML, CSS3

---------

### Teamwork

_I have an experience of working as a team lead in one of the student subchapters at my university. I have lead groups of students to organize various webinars and hackathons to empower students. I have contributed to the community by making their official website from mockups provided. I have been selected as a contributor to Girlscript Summer of code open source program and my contributions are in the fields of web development and data analysis._

---------

### Passion

I have deep respect for every individual doing their part in trying to save our precious environment. With Public Lab, I feel my visions of Greener Environment and using of tech for the welfare of the society merge. I appreciate the resources provided through Public Lab to various organizations/communities/individuals for tracking of various environmental problems. I have been given an opportunity to learn about so many powerful programming languages and passionate about giving back to the community by contributing to open source. I am very environment conscious. I believe in the mantra that billions of people around the globe bring about a even a minor change in their day to day activities to protect the environment can contribute significantly when the contributions are to be combined.

### Audience

_With my solutions, I intend to provide a better user experience to every individual out there who believes in doing good for the environment, one who has decided to take the first step towards it. Such individuals needs to be provided with a good user experience. I strongly believe in uplifting of under privileged people by the use of technology._

### Commitment

_I don't have any other prior commitments during the contributing period and assure you to work whole heartedly during the whole duration of the program. I understand the responsibility being given to me and will thrive to become an inseparable part of the community. I will be available to work full time during the whole time period of GsoC._