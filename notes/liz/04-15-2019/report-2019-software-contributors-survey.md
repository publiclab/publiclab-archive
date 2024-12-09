---
title: Report: 2019 Software Contributors Survey
tagnames: community-metrics, software, web, code, evaluation, survey, with:warren, wwg, diversity, response:15093, inclusion
author: liz
path: /notes/liz/04-15-2019/report-2019-software-contributors-survey.md
nid: 19070
uid: 7

---

# Report: 2019 Software Contributors Survey

by [liz](../profile/liz) April 15, 2019 13:58

April 15, 2019 13:58 | Tags: [community-metrics](../tag/community-metrics), [software](../tag/software), [web](../tag/web), [code](../tag/code), [evaluation](../tag/evaluation), [survey](../tag/survey), [with:warren](../tag/with:warren), [wwg](../tag/wwg), [diversity](../tag/diversity), [response:15093](../tag/response:15093), [inclusion](../tag/inclusion)

----

Public Lab has received support for students to work on Public Lab software projects via [Google's Summer of Code program](https://summerofcode.withgoogle.com/) -- 2019 is our sixth great year of open source coding with GSoC! In 2017 and 2018 we also joined the [Rails Girls Summer of Code program](https://railsgirlssummerofcode.org/), and in 2018 we participated in [Outreachy](https://outreachy.org/) through sponsorship by the United Nations Foundation DIAL OSC program. This is a key way that we are able to develop our collaborative platform at [PublicLab.org](http://PublicLab.org), as well as other Public Lab coding projects such as MapKnitter and Image Sequencer.

As part of our diversity and inclusion work, we especially welcome contributions from people from groups underrepresented in free and open source software, and our code outreach programs and strategies (documented at [https://publiclab.org/software-outreach](https://publiclab.org/software-outreach)) have helped to dramatically expand our code contributor community in size, diversity, and productivity; we have grown over 400% in the past year to approximately 500 contributors over the total lifetime of the project. Our community survey shows that ~33% of respondents identify as female or non-binary, which compares favorably with [OpenSourceSurvey.org](http://OpenSourceSurvey.org)'s report that only 4% of the broader open source community are identifying so. In addition, 87% of our community identify as non-white. As there is little comparable data from FOSS communities (read on to find how you can help!), we looked to published statistics from the staff of large tech corporations: 39% of [Google](https://googleblog.blogspot.com/2014/05/getting-to-work-on-diversity-at-google.html) staff identify as non-white, 43-47% of [Facebook](https://newsroom.fb.com/news/2014/06/building-a-more-diverse-facebook/) staff identify as non-white.

Our participation in GSoC, Google Code-In, Outreachy, RGSoC and in initiatives such as the First-Timers-Only movement have made this all possible, and we are especially grateful to the GSoC program for supporting our work in this space, by funding 9 (!) fellows for the summer of 2018, allowing us to expand our outreach programs. This has also enabled us to collect and promote our successful outreach and inclusion strategies through our [software outreach blog](https://publiclab.org/blog/series:software-outreach) and our welcome page platform, [Community Toolbox](https://code.publiclab.org#r=all) ([source code](https://github.com/publiclab/community-toolbox)). For 57% of this year's respondents, Public Lab was their first experience contributing to open source code. Welcome!

---------

#### Quick links

- [The survey questions](https://forms.gle/oCte2JYAcDWe2tx37) in an non-functional template form (we can make you a copy of this form if you like)
- [Draft version](/questions/warren/10-25-2017/help-with-a-standard-mini-evaluation-for-assessing-software-outreach-efforts) and discussion on survey design

---------

## About the survey

The open period for the 2019 Software Contributors Survey spanned from January 14 to March 21, a two month time period as requested by our most active software community members. This period was then extended one week to reach a new wave of contributors attracted during the Outreachy application opportunity. This community segment of Public Lab uses chat channels (Gitter and IRC) to communicate and platforms (Github) to coordinate work. The survey was distributed [via a Github issue](https://github.com/publiclab/plots2/issues/4614) providing context and a link to the [Google Form](https://goo.gl/forms/4VVMO8dOijRj6BUA3) survey. During the survey period, the issue was pinned to the top of the /plots2 repository, weekly reminders were sent via the Weekly Community Check-in (another Github issue), occasional all group encouragements to respond were sent to the chatroom, and there was targeted outreach to individuals by mentioning their names in the comments of the survey's github issue. In this time period, 63 individuals responded out of a possible ~500 contributors, a 12.6% response rate.

The survey was derived from the All Community Survey designed by the University of California Davis for Public Lab, adjusted for the segment of the Public Lab community active in software contribution, while remaining aligned to the overall [Public Lab Logic Model](https://publiclab.org/notes/liz/10-05-2018/creating-public-lab-s-logic-model). Questions generally fall into the following three categories: **demographics** (age, gender, race and ethnicity, geography), **participation** (discovery, type, frequency, motivation), and **satisfaction** with the community and with community building approaches like the first-timers-only ladder. The survey was anonymous. Raw data is shared here in aggregate visualizations, EXCEPT for any long-text responses and contact info, because they could be personally identifiable.

---------

## Data: Demographic

### What is your age range?

Approximately 86% of this community segment is between 18 and 35 years of age. Close to 13% are under 18 which has relevance to Public Lab's educational initiatives. 1.6% of respondents were over the age of 35\.

![age-range](/i/31517.png)

### How do you identify your gender?

Around 63.5% of respondents identified as male. A third (33.3%) identified as female. 1.6% of respondents identified as non-binary. 1.6% of respondents preferred not to say.

![gender self-identification](/i/31518.png)

### Do you identify yourself as a member of a minority racial ethnicity, or tribal group in the area you live?

This was a binary, yes/no question:

- 19% of respondents identify themselves as a member of a minority racial ethnicity or tribal group in the area they live.
- 81% did not identify themselves in this way.

![identify-minority-locally][14]

### How do you identify your race (or ethnicity)? Check all that apply:

We put a lot of effort into crafting the categories for this question, becoming active in online forums dedicated to diversity and inclusion (D&I) such as [Mozilla](https://wiki.mozilla.org/Diversity_and_Inclusion_Strategy_for_Participation) and [drnikki](https://drnikki.github.io/open-demographics/). This question was phrased "check all that apply;" in addition "multi-ethnic" was provided as one of the category options. Upon reviewing the answers, we feel this question could still be significantly improved. Reasons:

- 39 respondents identified with the description "Asian," and one wrote in a self-description as "Indian," however, it is relevant to note that in a subsequent question 33 respondents wrote in "India" as their country of residence. "Asian" thus appears to not be an appropriate level of detail: the software community might be better served with to-be-determined subcategories.
- Two additional respondents added their own race (or ethnicity) category. One respondent wrote in a self-description as "Arab;" another respondent wrote in "North-African / African-Arab."

Overall, 87% of our community identify as non-white. As there is little comparable data from FOSS communities (read on to find how you can help!), we looked to published statistics from the staff of large tech corporations: 39% of [Google](https://googleblog.blogspot.com/2014/05/getting-to-work-on-diversity-at-google.html) staff identify as non-white, 43-47% of [Facebook](https://newsroom.fb.com/news/2014/06/building-a-more-diverse-facebook/) staff identify as non-white. Github's own statistics report that 80% of contributors on Github are from outside of the US with China and India being 2nd and 3rd biggest source of contributors after the United States (see [https://octoverse.github.com/people](https://octoverse.github.com/people)).

![identify as race or ethnicity](/i/31521.png)

### What is your country of residence and zip code / postal code?

The geographic regions identified by respondents were aggregated into the following categories:

- Africa (4)
- Antarctica (0)
- Asia (34)
- Central America and the Caribbean (0)
- Europe (5)
- North America (6)
- Oceania and Australasia (0)
- South America (2)

!\[where live\][21]

---------

## Data: Participation

### How did you first learn about Public Lab?

This question allowed "check all that apply" and respondents used this opportunity to identify many types of first contact moments.

63 respondents selected / offered 87 responses to this question. We are aware that answers to this question depend on timing of the survey, as in "off season" numbers captured in the first quarter of the year as compared to during summer when Summer of Code programs are active. Each Summer of Code program has its own survey processes that stand alone, however, it should be considered how to integrate those responses with this overall report.

!\[first heard about\][22]

By far the largest category was "I was exploring beginner-friendly projects and found your project" at 34 responses, followed by a close tie for second and third place: "A friend / acquaintance" (AKA "word of mouth") at 15 responses, and "On GitHub/GitLab/npmjs.org or another code hosting site" at 14 responses. Social Media and Searching the web were mentioned 4 times each.

Only mentioned twice: "In a workshop, bootcamp, training, or class" and "Heard about / attended an in-person event locally or through another organization," once as the single means of discovery and once as part of a multi-choice answer.

Only mentioned once: Note that the category "Saw Public Lab material (a box, a tool, a printed newsletter, etc)" **only appeared once, as one respondent's answer among other categories**, meaning it was never the sole way that a software contributor discovered Public Lab.

Never mentioned: Learning about Public Lab via "News coverage," "Store," or "Email" were chosen zero times as the means of discovery for the software contributor community. Despite this, word of mouth remains the 2nd biggest category, and we expect that as the repo grows so will the word of mouth category.

| **Standard Categories:** | **Count** | **Appearing** |
|--------------------------|-----------|---------------|
| I was exploring beginner-friendly projects and found your project | 34        | –             |
| A friend / acquaintance  | 15        | –             |
| On GitHub/GitLab/npmjs.org or another code hosting site | 14        | –             |
| Social Media (Twitter, Facebook, Instagram, YouTube, etc) | 4         | –             |
| Searched the web and found a reference to Public Lab | 4         | –             |
| In a workshop, bootcamp, training, or class | 2         | _once in a multi-choice answer_ |
| Heard about / attended an in-person event locally or through another organization | 2         | _once in a multi-choice answer_ |
| Saw Public Lab material (a box, a tool, a printed newsletter, etc) | 1         | _only in a multi-choice answer_ |

Of multichoice answers, half the respondents choose "I was exploring beginner-friendly projects and found your project" and "On GitHub/GitLab/npmjs.org or another code hosting", and one third chose "I was exploring beginner-friendly projects and found your project" and "A friend / acquaintance."

| **MULTI-CHOICE COUNTS** | **Count** |
|-------------------------|-----------|
| I was exploring beginner-friendly projects and found your project | 9         |
| A friend / acquaintance | 7         |
| On GitHub/GitLab/npmjs.org or another code hosting site | 6         |
| Searched the web and found a reference to Public Lab | 3         |
| Social media (Facebook, Twitter, Instagram, YouTube, etc) | 3         |

Of write-in answers, respondents who wrote in _only_ wrote-in, and did not select any existing categories. The write-in responses name specific programs: RailsGirls, Outreachy, Google Code-in, and in one case a personal hardware pursuit, which perhaps indicates the strong brand associations of people encountering us through organized programs that form a respondent's primary identification/orientation to the open source world.

| **WRITE-INS of specific programs or projects** | **Count** |
|------------------------------------------------|-----------|
| Outreachy: “Outreachy,” “Outreachy website,” “Outreachy Internship website” | 4         |
| Google Code Programs: “GSoC,” “At GCI’19,” “Google Code-in,” “Through Google Code-in” | 3         |
| RailsGirls: “rgsoc,” “Through RGSoC (Slack channel)” | 2         |
| Hardware: “I was working on a wireless sensor networks project which was based on air pollution and water pollution through sensors. At that time I found publiclab.” | 1         |

### On average how often do you do the following?

This question offered many types of activities for engagement with at various frequencies:

!\[How Often 1of 2\][23]
!\[How Often 2 of 2\][24]

A close reading yields several insights into the software contributor segment:

- The types of activity with the highest "never" response rate were in the "in-person event" and "physical kit usage" -- 12%-20% of software contributors have never done these activities, often considered the mainstay of the overall Public Lab community.
- The activity most frequently engaged in by software contributor respondents was "talk to someone in the Public Lab community": two/thirds of respondents report doing this weekly.
- Of all responses, (after "never," which appeared in 43% of responses), "weekly" was the second most common frequency reported, appearing 33% of the time across all activity types.
- Regarding the frequency of engaging in any particular activity, more than half of respondents report doing 4+ activities on a weekly basis, and one third of respondents reported doing 2+ activities on a monthly basis.

We interpret the prevalence of weekly frequency of action to be associated with Agile practices:

!\[Numbers of Activities by Time\][25]

| **WRITE-INS RESPONSES of specific activities** | **Count** |
|------------------------------------------------|-----------|
| Write code: “I contribute,” “Contribute to plots2 for 10-12 hours each day,” “I contribute to the open source projects specifically plots2 and image-sequencer” | 3         |
| Participate in the software community: “make FTOs,” “Help new contributors - once in a month,” “participate in Public Lab’s software community daily :)” | 3         |
| Review code: “/review/merge PR’s,” “Review PR” | 2         |
| Social Media–Public Lab twitter, youtube, facebook: “I follow and engage with Public Lab on Twitter” | 1         |

Recommendations for future adjustments to the survey itself to better understand our various community segments: This standard option in the participation frequency question -- "Contribute to [publiclab.org](http://publiclab.org) or [github.com/publiclab](http://github.com/publiclab) (Add to the wiki, post a research note, ask a question, leave a comment)" may need to be subdivided to better assess activity by PL's various community segments. It also seems that now that Public Lab has invested in a Communications Manager staff position, that assessing community segment activity with social media would be suitable; therefore, in future surveys consider adding a standard option -- "Follow or Interact with Public Lab social media." Next time, add a frequency option for "Daily."

---------

## Project Descriptions

At this point in the survey, two thirds of the original respondents (40/63) continued on.

Below is the set of 13 projects offered, numbered by how many respondents report contributing to them. Note: there were no write-in additions to this set:

| **Project Name** | **Number of Respondents reporting working on this project** |
|------------------|-------------------------------------------------------------|
| PLOTS2           | 32                                                          |
| Image Sequencer  | 15                                                          |
| PublicLab.Editor | 8                                                           |
| Leaflet-environmental-layers | 7                                                           |
| Community Toolbox | 6                                                           |
| Mapknitter       | 6                                                           |
| Leaflet-blurred-location | 3                                                           |
| Infragram-js     | 3                                                           |
| Inline-markdown-editor | 3                                                           |
| Spectral Workbench | 2                                                           |
| Leaflet.DistortableImage | 1                                                           |
| Plotsbot         | 1                                                           |
| WebJack          | 0                                                           |

About half of these contributors reported contributing to a single repo, the other half reported contributing to two or more repos. At the upper end, five contributors reported contributing to four or more repos (up to 11 repos!).

Of the 32 respondents reporting contributing to PLOTS2, 16 contributors contribute only to PLOTS2 repo, another 16 contributors contribute to PLOTS2 and at least one other repo. This is the most common profile.

---------

## Data: Motivation

### Why did you choose to work with us?

44 respondents answered this question, phrased as a "check all that apply" for these options:

- It was friendly
- It was easy
- I was interested in the project goals
- I wanted to help others
- I wanted to build my own skills
- Someone asked me
- It was part of an assignment
- I needed something I got through participating
- I needed something to work so I helped make/fix/finish it
- I was compensated financially
- Other / WRITE-IN -- there were no write-in responses

Tied for the top were options 1, 3, and 5 -- "It was friendly," "I was interested in the project goals," and "I wanted to build my own skills."

!\[Why work with PL\][26]

44 respondents identified a total of 172 motivations. Most respondents identified 4-5 co-present motivations, as shown in this histogram:

!\[Histogram Of Motivations\][27]

Note: Combinations of motivations were not analyzed.

Recommendations for future adjustments to the survey itself to better understand our various community segments:

- Add a more specific option than "I wanted to build my own skills" about career trajectory being the reason for choosing to work with Public Lab.
- Add a more specific option about the diversity of our community being the reason for choosing to work with Public Lab.
- Consider the ordering of options, which currently start from the easiest to relate to and increase in subtlety. Did this influence people to click the easier to understand options?

### Please describe a Public Lab project you work on (challenges, successes, etc).

Free text response. Comments that solely mentioned a specific codebase without any other information or valence have been deleted (8 of 23 responses). The following quotes have been stripped of identifying wording:

Comments that noted positive experiences (9/15)

- \[REDACTED Project Name\], good learning experience , got well aquainted with public labs codebase in the process. Great guidance from jywaren in the process !
- I contributed to a lot of things on Github. I'll describe the [REDACTED] I wrote. It was my first time writing in Ruby, the other members were very supportive and kind! I was so proud when I finally completed the tests!
- Very friendly behaviour
- I started working in this repository during Code-in and became very interested in it. [REDACTED]. Recently I've been a bit too busy to work on anything code related.
- I've been contributing code to fix issues as well as creating new issues and reviewing others' work. It's been challenging in that it's a complex codebase for me, but I've been able to successfully navigate it to deliver my tasks.
- Friendly and welcoming community, fast reviews and people willing to help incase you are stuck.
- [REDACTED] is a great software project and it is growing immensely and sometimes it's hard to keep track of how things are changing.
- The Public Lab project I like to work on is [REDACTED]. The community is friendly as it welcomes new comers and helps them solve and venture the era of open source. Sometimes the issue is quite difficult but from the issue heading it seems to be easy.
- I am having a great experience at PublicLab. I have worked on [REDACTED] and \[REDACTED\] so far. The community is welcoming and it was easy to solve first-timer-issue. I also created some first timers to welcome other users. I faced difficulty in help-wanted issues but with help of sidharth basnal and jywarren and all other mentors I was able to complete those, contributing to development of the project. Getting my PRs merged gives me a sense of achievement, motivating to contribute more. PublicLab is great community and I am really happy to be a part of such helping and lively community.

Comments that noted concerns: (5\*/15). \*3 out of these 5 also noted positive aspects:

- I joined Public Lab as a web designer. My main project is [REDACTED]. I really like the project and the team is very friendly and welcoming. The only challenge would be lack of feedback or clarity at some points of the project, but generally it's all been pretty smooth.
- I have made minimal contributions to the projects and my experience was bitter sweet. Sweet because the maintainers are very responsive on emails and github conversations. It was bitter experience the fact that I couldn't connect with members of the community on IRC and so it sometimes feels like I'm sorry If this sounds offensive but for lack of a better word it felt like we're blackbox communicating to each other . Based on my past experiences, having face to face community meetings has proven to be a great source of my motivation to contribute to the team. I believe there's a likelihood that such meetings might exist but I am just not aware of them.
- I worked in making the [REDACTED] and while doing so I was facing difficulty in passing the correct arguments to correct functions.
- Integration and setting up the initial frame is always tricky and time consuming
- I worked on [REDACTED] mainly over the past few weeks. Initially getting started with the dev environment and basically finding an issue to start with was hard. But after that everything moved smoothly and in the process i got to learn and understand a lot.

One comment in particular made observations and proposed improvements to our onboarding process and code maintenance project overall: (1/15)

- Challenges:
  1. Automating the installation - Getting started with a Rails project can be a headache sometimes. I think if we solve this challenge, then we can increase number of contributors.
  2. A issue manager is required for plots2 which can help the maintainers and also new-contributors in getting started. Community toolbox can be implemented with new features for this.
- Successes:
  - Everyday with each new commit or PR or issue , there is a success as we shift towards identifying a issue or solving a problem or some new feature. So, everyday's a new success story.

### How often do you work on this project?

More than three quarters of respondents (29 / 38) reported working on this project weekly:

| **Frequency** | **Number of Respondents** |
|---------------|---------------------------|
| I work on / for this project once a week | 29                        |
| Other         | 4                         |
| I work on / for this project once a quarter | 2                         |
| I have not worked on / for this project this year but I have in the past | 2                         |
| I work on / for this project once a month | 1                         |
| I work on / for this project once a year | 0                         |

!\[How Often\][28]

Recommendations for future adjustments to the survey itself to better understand our various community segments:

- Consider why "Other" appeared as the second most popular option
- Add a frequency option for "Daily"

### Do you plan to continue contributing to this project?

Of 40 respondents, an overwhelming 90% of respondents say they plan to continue contributing to this project:

!\[Keep Contributing\][29]

### How would you rate the effectiveness of this project's efforts at welcoming new contributors?

75% percent of respondents say the project is "Very Effective" at welcoming new contributors:

!\[image description\][30]

---------

## First Timers Only

### Did you complete a first-timers-only (FTO) issue?

Of 40 respondents, over 86% say they completed a First Timers Only issue:

!\[Completed FTO\][31]

### Did you feel the FTO issues you completed better prepared you to contribute to the project?

!\[Did FTO prepare you\][32]

### How would you rate the effectiveness of this project's efforts at welcoming new contributors?

Of 41 respondents, 75% said this project was "very effective", and no one scored the efforts as less than "effective." Comparing the 13.6% of respondents who did not do an FTO issue to the 86% of respondents that did complete an FTO reveals that those who did not do an FTO rated the effectiveness of the project's efforts to welcome newcomers noticeably lower:

![NewcomerWelcomingnessByIfDidFTO][33]

### Was this the first open source project you contributed to?

Of 42 responses, 64.3% reported that Public Lab was the first open source project they contributed to! Welcome!

!\[image description\][34]

### Did you make any FTO issues? How many?

Of 39 respondents:

| **Number** | **Frequency** |
|------------|---------------|
| None       | 15            |
| 1 issue    | 4             |
| 2 issues   | 5             |
| 3 issues   | 2             |
| More than 3 | 13            |

Creating First Timers Only Issues generates momentum that results in most people who have created any FTO issues creating more than 3:

!\[image description\][35]

### Did you feel that creating your own FTO issues for others supported your ability to contribute?

The data here strongly supports the utility of First Timers Only issues for their creators as well for those who complete them:

!\[was FTO useful for you to create\][36]

### Did you feel creating or completing FTO issues made you a better software contributor in general?

Only slightly less strong than the responses to "FTO issues supported my ability to contribute to this project," is the high level of agreement with the statement that "creating or completing First Timers Only issues makes one a better software contributor in general:"

![DoFTOsmakebetter][37]

---------

## Concluding thoughts

### Anything else you'd like to tell us about your experience with Public Lab?

The free text answers were overwhelmingly supportive (:

- The community of public labs is a extremely active and helpful community. I love working here, as I am learning a lot of new things and my work is getting appreciated. Thank you so much everyone !
- It's an awesome community and amazing support from members. Thanks for letting me be a part of this community. I'll continue to contribute to public-labs as much as I can and as long as I can. Thanks
- Absolutely love working here!
- The community is super friendly and helpful. I see people working night and day to achieve publiclab's mission and I truly appreciate it!
- Joining this community is a game-changer for aspiring software developers
- You are doing a great job of collecting information and inviting people to contribute in their own way. I think what you are doing is very valuable and important.
- Great community, very friendly, an awesome introduction to open source.
- Even though I have not had time to contribute in the last few weeks, I have learnt and grown. Thanks to the current maintainers for the work you're doing.
- The community is great, one of the best I have seen out there.
- Contributing to PublicLab is amazing!
- It was a great experience working on open source for the first time. It really challenged me sometimes but once the issue is solved, it gives happiness. I really got know how people are using technology to solve problems and has opened many new doors of life and also has improved my thinking process drastically
- I really like the community. They're polite and welcoming to newcomers like me and they've got tons of diversity.
- The community as a whole has been very supporting and I'd surely continue contributing to this project because of the kindness I've been shown.
- Overall my experience has been wonderful. The community members are great and really help and encourage us to contribute. New comers are treated with atmost respect and really get a chance to dive into the world of open source. Project has good documentation and community members are always willing to help us find and solve bugs. Look forward to learn and contribute more to this community.
- It has a very supportive community that is best suited for beginners to get started with open source.
- Public Lab is awesome!
- I like to work for public lab very much. Currently I am working with [REDACTED]. I also learn new things while working for Public Lab. That motivates me to work on different things.
- The experience is amazing and it feels so awesome to help and have help of such amazing people around the world and trying to make community better .
- This is a great initiative. Measuring and analyzing pollution -- is a very very required thing in the near future.
- Thank you!
- I love to be of service and admire what you do!
- Its awesome
- It feels great contribute and be a part of this beautiful community. The maintainers and members are welcoming and do their best to help others, especially jywarren and sidharth bansal

One comment regarding excessive notifications:

- Over the past few weeks its felt a bit overbearing when 10 emails are popping up in my inbox every day even though I haven't been contributing that frequently recently.

Really valuable note about FTO issues by a respondent who did not complete an FTO issue:

- It's great that there are FTO issues, but I didn't find any available. There seems to be a lot of first timers here and high demand for the issues! I think there is demand to have a greater number of FTO issues. In addition, it might be worth asking people who are NOT first time, not to take the issues if there is such high demand for them.

## Report Conclusions

This survey has revealed a few clear signals:

- Those who complete FTO issues rate the project's welcomingness more highly
- The majority of respondents report between 4 and 5 co-present motivations for contributing to Public Lab.
- 90% (!) of respondents indicate they intend to continue contributing

About the survey itself:

- Reflecting on the 12.6% response rate (63/~500 contributors), although this is "not too bad" in the world of surveys, we aspire to raise the response rate in the future, specifically to make sure there are no barriers to hearing from people who might be less likely to answer with glowing feedback, and to be able to more confidently assert that the results of a survey are applicable to this community segment as a whole.
- Regarding demographics, we conclude that the Public Lab software community would be better served with some sub-categories to further parse out the category "Asian," however, this will be complicated no matter what, here are some preliminary options:
  - Create "Indian" as one of the categories
  - Consider "nested checkboxes" that could help to segment, which could offer options within "Asian" such as "South Asian (Asian)" "Southeast Asian (Asian)" and similar breakouts for other identities. However, some feel that dividing Asia into North/South/East/West can be confusing
  - Add category for Middle East
  - Consider what other categories, or nested categories might be needed
- Also in the demographic section, we are considering asking rural, suburban, urban, and intend to coordinate with OpenDemographic work on these categories
- To the question, "How did you hear about Public Lab?" add an option for "the Google Summer Of Code website"
- In the Participation by Activity & Frequency question,
  - Subdivide this Activity option: "Contribute to [publiclab.org](http://publiclab.org) or [github.com/publiclab](http://github.com/publiclab) (Add to the wiki, post a research note, ask a question, leave a comment)"
  - Add this Activity option: "Follow or Interact with Public Lab social media"
  - Add a frequency option for "Daily"
- In the Motivation question:
  - Improve the wording of "I needed something I got through participating" to be understandable to someone who needed a functionality from software, and helped to realize it by collaborating.
  - Add a more specific option than "I wanted to build my own skills" about career trajectory being the reason for choosing to work with Public Lab.
  - Add a more specific option about the diversity of our community being the reason for choosing to work with Public Lab: "Is the diversity of the community an attribute that led you to contribute to Public Lab?"
  - Add another question: "Does seeing profile images/photos at [code.publiclab.org](http://code.publiclab.org) of people who are not all white males an attraction to people who are themselves not white males to contribute to open source at Public Lab?"
- In the First Timers Only Issues section, add the following options:
  - "Tried to complete a First Timers Only issue"
  - "Did not take a First Timers Only issue up"
  - "Couldn't find a First Timers Only issue available"

As growth trends point ever higher (consider the 2018 Github stats: [https://octoverse.github.com/](https://octoverse.github.com/) that 1/3 of all Pull Requests ever were created in 2018), the Public Lab Software Community is discussing amongst itself the creation of a long-term plan for keeping continued growth viable through a strong reviewers team and other resources.

In the long term, the hypothesis which we most hope to pursue answers to is _"Does the work we put into Diversity and Inclusion drive the growth rate and success of our community?"_ We are also wondering _"Do more and friendlier people create better code?"_ however, this survey does not address these topics.

**Do you want to run a survey like this in your own community?** We are hoping that other communities take up this survey and add to what the open source world knows about itself. We will be updating the survey according to the points made above, and sharing a version that you can copy for your own use. Stay tuned!

[14]: /i/31519.png =300x
[21]: /i/31522.png =300x
[22]: /i/31523.png =600x
[23]: /i/31524.png =800x
[24]: /i/31525.png =700x
[25]: /i/31526.png =800x
[26]: /i/31527.png =800x
[27]: /i/31528.png =800x
[28]: /i/31529.png =800x
[29]: /i/31530.png =400x
[30]: /i/31531.png =400x
[31]: /i/31532.png =400x
[32]: /i/31533.png =400x
[33]: /i/31534.png =800x
[34]: /i/31535.png =400x
[35]: /i/31536.png =800x
[36]: /i/31537.png =400x
[37]: /i/31538.png =800x