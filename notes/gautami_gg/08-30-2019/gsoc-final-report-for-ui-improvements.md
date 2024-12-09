---
title: GSoC Final Report for UI Improvements
tagnames: gsoc-2019-final-report
author: gautami_gg
path: /notes/gautami_gg/08-30-2019/gsoc-final-report-for-ui-improvements.md
nid: 20724
uid: 579624

---

![](https://publiclab.org/public/system/images/photos/000/035/074/original/1_g5RBYeGe0VLB6t_ZsvO_wQ.png)

# GSoC Final Report for UI Improvements

by [gautami_gg](../profile/gautami_gg) August 30, 2019 06:42

August 30, 2019 06:42 | Tags: [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

----

\*\*Project Title \*\*: UI Improvements to [PublicLab website](https://publiclab.org/research).

Mentors : Jeffrey Warren, Gaurav Sachdeva, Atibhi, Emmanuel Hayford, Sidharth, Mayank Pathela-1

\*\*Student \*\*: Gautami Gupta (gautamigupta54@gmail.com)

Project Repository : [https://github.com/publiclab/plots2](https://github.com/publiclab/plots2)

###Project Details :

I was given the task to revamp the UI of the PublicLab website. I collaborated with Lekhika in this project. Our main aim was to improve the UI of the following pages : [People's page](https://publiclab.org/people#2/23.0/4.0/BL1), [Questions page](https://publiclab.org/questions), [Individual Tags page](https://publiclab.org/tag/air-quality), [Profile page](https://publiclab.org/profile/gautami_gg), [Tags page](https://publiclab.org/tags), [Dashboard](https://publiclab.org/dashboard) and [Main front page](https://publiclab.org/). We created issues for each page and then add checklist of tasks and assigned them to ourselves. This method has proved to be great in synchronising and breaking up of tasks.

For keeping a track of the to-do issues and completed issues/PR, we created a [github project](https://github.com/publiclab/plots2/projects/10) and a main [planning issue](https://github.com/publiclab/plots2/issues/5739) which helped us record our progress. Technologies which I mainly worked on were Ruby on Rails, Bootstrap, CSS and HTML.

### Planning issues for each page : 

- [People's page](https://github.com/publiclab/plots2/issues/5707)
- [Search results page](https://github.com/publiclab/plots2/issues/5708)
- [Questions page](https://github.com/publiclab/plots2/issues/5733)
- [Individual Tags page](https://github.com/publiclab/plots2/issues/5890)
- [Profile's page](https://github.com/publiclab/plots2/issues/6001)
- [New sidebar design](https://github.com/publiclab/plots2/issues/6005)
- [Dashboard design](https://github.com/publiclab/plots2/issues/6072)
- [New Front page design](https://github.com/publiclab/plots2/issues/6155)
- [Follow up bugs](https://github.com/publiclab/plots2/issues/6097)

### Other issues I have worked on : 

- [First timer only issues](https://github.com/publiclab/plots2/issues?q=is%3Aopen+is%3Aissue+author%3Agautamig54+label%3Afirst-timers-only)
- Front page design([link to the issue](https://github.com/publiclab/plots2/issues/6169))
  - Header and topics in footer implementation submitted as a gist :

![](https://lh4.googleusercontent.com/8dOy5CcCihAK-t5QOzvpoOg-ylgArmoiXWNTqqaSxLRXFJ3sGTCKu17daUqAxZfK2TbzcocVetjrdlgIBNcubOXBwrxvbYqTil51I_MGhplnCSRa45JFtrrGNZRi0tRar3enZPLB)

### Features I implemented for the new UI of the website : 

#### Merged PRs: 

- "Add user's location" functionality on the people's page, clicking on which, a modal appears through which a user can add their location. ([link to the PR](https://github.com/publiclab/plots2/pull/5757))

![](https://lh3.googleusercontent.com/9Gn5DSJ6lB1OTyt-0ZBbhzp9YwupduI5OpavXGpP98dz4Desu3ZmRml5H1WMP_X6lZ_YKQacyxilet7Sf5QObWAfzOhGC8QmkW_dBAmMSszFPDadpleKvVMQGdyvRox1EeVEDUvj)

- An ellipsis feature on the people's card, which encapsulated information about the user like # of research notes/wikis, joined time etc. ([link to the PR](https://github.com/publiclab/plots2/pull/5806))

![](https://lh5.googleusercontent.com/kmYZRIZDWLrmKl3Nt1PhaPia0h-IQBOuk1ON5ZQJPjd-A8NdB2rvZAFcS9GgkCqVY41Ud4vSKfDLrMcQnuyJXpSrF_FTnMsZh0zrbJcw99kism7Skxx_ikmJG6BV3HBnjbzqaZBo)

- The design for the text area, for any user to submit questions which eventually links to the questions form. ([link to the PR](https://github.com/publiclab/plots2/pull/5805))

![](https://lh6.googleusercontent.com/k6KBcrd3LUsLPSE0SCTEFs0zjuLUdlvgdgwrgjJfNEUjRIyNREZRaAxBxCx69rt7tZO3H9tugmiw4Utwa_KTCNqn3MG7Cwhs4DDs5O2c3AJYwD8vB6DQIJhgUBh7UMiOb4I6XE1O)

- Fixing the orientation on tags page.([link to the PR](https://github.com/publiclab/plots2/pull/5864))
- Adding a recent question section on the questions page which has a list of recent 3 question links.([link to the PR](https://github.com/publiclab/plots2/pull/5912))

![](https://lh5.googleusercontent.com/3oVyQj3etuqKEuSA_ynLjJHTP25gEXhGq810Y0ubeqVraFTytl30SH3f0hKYiX4RXCCtyzbMRe0ZlJ0_FY7oaq0qJB8IPvP75OBV86-gLlCtJUFXsAqzJoNRUSXxcnp7DMjFNZPn)

- Adding the main tags card to the header in the new design which is card consisting of tag name, tag's wiki link, 2 lines of wiki content and an ellipsis which has information like, stats, RSS feed, follow/unfollow buttons etc. ([link to the PR](https://github.com/publiclab/plots2/pull/5938))

![](https://lh4.googleusercontent.com/9FwAERtK6oQ8M0Jc0JDtE3pMpoFoBNW9Kp23ValhJAC1VoMCrBNUJ6BQrj8w6ErEHxMM3fv2Tv9H6Q7Ly2siMKGtYTdlweK9x4L_6OsA9SwofFo8vwGcAJmLGdEeBkVjHniUUuoJ)

- Adding a sidebar to the individual tags page as per the new design. It has a map, link to people's page and related tags.([link to the PR](https://github.com/publiclab/plots2/pull/5995))

![](https://lh5.googleusercontent.com/ttmGSXIjFVQWNAxu6h8tT7z6dSm1vN1BfV-CchaeauCjWVFgEU0uYub31FFDred0naS3l42cL0DJHTwrE2KnkvSHdXH1mWfNtvSkjdZkkuFIldV3Gj5G896-vzoGkQfBPpweNz4w)

- Correcting the edit profile form which happened due to Bootstrap 4 update ([link to the PR](https://github.com/publiclab/plots2/pull/6115))

![](https://lh4.googleusercontent.com/toyq2gT5vOvPxxHM20dqpFFqZB0r1p9tn2pRlLNpynD255dVQhMW01KymNQ6Izp9gfeNJORYNgkua8Fh5OZ3apH8U2JgHSaap-JHUfBWPeHCbLNm8A-v5GVfKC9tz_RJhJOqfiug)

- Aligning the disoriented stats page ([link to the PR](https://github.com/publiclab/plots2/pull/5578))

#### Pending PRs: 

- Restricting the display of user bio to 100 characters on the profile page and adding a read more and read less link. ([link to the PR](https://github.com/publiclab/plots2/pull/6129))(ready to merge)

- Building topics cards for the sidebar which has information about the number of people following the topic, subscribe button and an ellipsis encapsulating the remaining info about the topic.([link to the PR](https://github.com/publiclab/plots2/pull/6124))(ready to merge)

![](https://lh3.googleusercontent.com/pdIhoHp7sFFf2fmYUBEmq-GD0jpMm6w3h4CXqwtvwcRQhcBPP8dUXBBWcXiO6I3486MnOzy5KxLWrcAPbsIA4we7OplUZnUzvYOcchbrKeUg_OnrG7PzpS5mU6OM8hq-2t9NC03f)

- Building a modal which has options of templates form of post, question or issue on the Individual tags page. I have implemented the desktop screen version, what is remaining is the making the modal responsive.([link to the PR](https://github.com/publiclab/plots2/pull/6114))

![](https://lh6.googleusercontent.com/qRz7L3WXyK-Fvgbs2kKf7apBkycmFAVSsJtcwyqkYgcSR_sIENizYq1yhSEjhY5m9EccrQf2uc3oY6EeB2FR7DG-3cAHroINAj2Q8SrwLZoyubebGC0uSJOc9GIZ-ZlM026VXC-A)

- Adding login/signup modal on the new questions page. ([link to the PR](https://github.com/publiclab/plots2/pull/5860))(ready for merge)
- Dashboard new design implementation.([link to the PR](https://github.com/publiclab/plots2/pull/6229))

![](https://lh4.googleusercontent.com/CpMmhI-hAOBjw-0AHgvDgU-M4NbzEpxytgBEOL1euOllahMhK0nmAzIwmm_rkq0Q4RsmI63trDADAHvwy-vOXlAPTJSmpfLQJDnIPXhO-4BFUKUmFTEDn6frQCAL-X7I1Z9GISGp)

![](https://lh5.googleusercontent.com/ORNKzN6CBJ_cuZq0LpJ0uN3IJwbFPPYSAYXg-QGXZmzW8_K5rhA2y-dsTULYUOe0jL_X-UT9Qy9mAt-OZB2QOTEPCfX7R24SYHtKiIJPmB-xlOJU2eepJwUP2MamrAMyhoYfAsYO)

### Future work : 

Even though GSoC has come to an end, I will be working on completing the front page and the dashboard which are not completely implemented. Also, since the UI revamp has a lot of corner cases which were left out, I will be working on the bugs in the UI as well. I would also like to work on redesigning the blog page which wasn't mentioned as our task for the summer. PublicLab is now converting their website pattern to be completely topic based, which requires a lot of brainstorming in the case of corner cases and their implementation. I will be a part of PublicLab in the future and will help in the UI improvements of the website.