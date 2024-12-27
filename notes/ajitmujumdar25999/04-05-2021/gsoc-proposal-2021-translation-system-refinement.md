---
title: "GSoC proposal 2021 : Translation System Refinement "

tagnames: 'soc, first-time-poster, gsoc-2021, gsoc-2021-proposals'
author: ajitmujumdar25999
path: /notes/ajitmujumdar25999/04-05-2021/gsoc-proposal-2021-translation-system-refinement.md
nid: 26143
uid: 654056

---

![](https://publiclab.org/public/system/images/photos/000/043/210/original/gsoc.jpeg)

# GSoC proposal 2021 : Translation System Refinement 

by [ajitmujumdar25999](../../../profile/ajitmujumdar25999) | April 05, 2021 21:17

April 05, 2021 21:17 | Tags: [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2021](../tag/gsoc-2021), [gsoc-2021-proposals](../tag/gsoc-2021-proposals)

----

-><-

---------

## About me

Name: Ajit Mujumdar

Email:[ajitmujumdar25999@gmail.com](http://ajitmujumdar25999@gmail.com)

Github:[https://github.com/imajit](https://github.com/imajit)

Affiliation:[National Institute of Technology, Karnataka](https://www.nitk.ac.in/ "https://www.nitk.ac.in/")

Location: Gujarat, India

## Project description

Setting up a workflow for importing new translations, recruiting new translators along with fixing HTML parsing and UI shortcomings by fixing CSS and helper-function related problems.

### Abstract:

Public Lab has a great feature to view some contents of the site in
different languages. We are currently using rails-I18n gem with
translations arranged in YAML files and loaded into views using the
translation helper function. I feel it is a great initiative to spread
knowledge with people of various native languages.

### Problem:

_What problem(s) does your project solve?_

Our internationalization (i18n) system exists but lacks a consistent
workflow for importing new translations, as well as suffering from some
HTML parsing and UI shortcomings.

### Project Goals and its implementation

_Break your project up into small projects -- one per week!_

Before discussing the possible ways to improve the existing workflow let's analyze the existing one:

- For a new user unaware of the translation system there is no pop-up, notification, or anything which helps him/her know about this.
- Let's say he/she finds the Translation wiki follows the step in it and becomes a Translation team member, but now all over the site he/she starts seeing globe icons redirecting to the Transifex team page with so many icons and buttons out of style it affects his/her experience.
- Let's say he/she wants to interact with the translation community share ideas, learn something new there is no community discussion platform that has such discussions as well as information on how to resolve commonly faced issues.
- Let's say he/she wants to add new translations to the site but is not familiar with Github, it will be difficult for him/her to manually merge changes. Transifex has an automated setup to merge translation but with no notes/wikis about how to merge changes there.
- Once the community starts working, we need to keep them engaged with new tasks, features to make the experience better, and ways to appreciate the contributors.

These are some of the **roadblocks** that I feel we can work on to refine the Translation system.

We can improve the existing workflow by:

### 1.Translation Dashboard:

Translation of website infrastructure is done by integrating Public Lab with Transifex. With more and more strings and languages being added, we need translators to help us translate and review translations. To streamline the process of translation, we can set up a translation community where users willing to help can join in, interact and contribute to the organization.

Currently, the pop-up about missing translation redirects users to the Transifex team's page.

**Functionalities** - To set up such a team we need these functionalities in Dashboard for recruiting and maintaining:

- Spread **awareness** about this initiative
- Make **on-boarding** to the team as simple as possible
- **Discuss** ideas, resolve queries, and record suggestions and feedback for improvement.
- **Appreciate** contributors for their efforts and keep contributors **updated** and engaged.

A brief overview of the recruitment process is :

![](https://lh5.googleusercontent.com/arwDCOPU3xqN5OdmzMS0NzS9BS_JR0fPi2btjIy0U10NYuakqkK5P8kUVl3n4XOh2LxCvubMPULWiWMyJDPDuP_PJAwVbbHHLiPKBL-JRxIM0xntw9Gn-7tihD7-7It3dEw7s-6b)

#### Recruitment Process

---------

#### Reusing existing infrastructure:

We currently have some really great resources in the form of wikis and tags that contain information about all the phases of the Translation system, what we need to do is set a workflow using these resources and align them in such a way that they are more intuitive and accessible.

![](https://lh6.googleusercontent.com/W9AxbUPx7H_gKQGd5byvKtjAwvVxC3zDiuG0KIJNfX4cpAPqytbrb8xtnhV98ETptw9gvJvFYlFFFCCI6o2lSPsWQ6DrB3-XMKg5-HPNvThyKjCL0ue05zQBhPgpsDT1t_7ZGpAf)

I can understand that it would be really great if instead of building a completely new Dashboard, we use the existing Wikis, notes, and tags to streamline the Translator Recruitment. The existing setup has:

- A [Translation wiki](https://publiclab.org/wiki/translation) that has nearly all the information one needs to know about Translations.
- A [Translation tag](https://publiclab.org/tag/translation) where one can follow all the discussions and resources about Translation in Public Lab.

This already solves two issues a Dashboard is needed for. We can add some
more information about Translation Tag and also create a new Research
note dedicated to discussions, suggestions, and queries about
Translation System. This can help us avoid maintaining a new system by using the existing resources.

Just to map out how all the functionality discussed earlier can be setup :

- **Notifications and resources**: [Translation Wiki Page](https://publiclab.org/wiki/translation) and [Translation tag](https://publiclab.org/tag/translation) which currently exists with some minor additions are good for this purpose. We also have globe-icons to redirect to Transifex team, we can redirect it to Translation Wiki which acts as Dashboard where user can find all the resources.We can also add a notification message in sidebar for users not having

```
'translation-helper'
```

in profile-tag something like

![](https://lh5.googleusercontent.com/FunRBuLRPuKpd_BGoRaACs7jZEw887rSmtxWOBexN6eGDiq11Iaq23g7wX_0LqugNHV59QW1BG1Utv9spdKw62uLFoHbJwSYZmBNh52kkffe71zHiZ4_Mm7R_zG6gtD8z9k_hX3P)
to tell them about Translation System.This can be visible when one switches from English to other Language.

- **Recruiting new translators**: We use Translation Wiki as a Dashboard.The wiki page has a step-by-step article
that shows how one can be a translator by signing up to Transifex. So
we can ask interested users to follow these steps, send a request to join
Transifex Translation team on Transifex site itself and subscribe to
Translation Tag to get all updates.
- **Discussion forum**: We can create a research note with the name
"Translation System Discussions" where we have some basic information
about Translation and in the comment section of this note can be used as a
discussion forum.Users can give suggestions, resolve queries and discuss other issues.
- **Statistics about Translation**: Transifex already has an interactive
setup to show statistics about users and translation progress.
Optionally we want to have something similar on the Public Lab site we
can set up API calls to get data using Transifex API.
- **Community Engagement**: We can keep a list of top contributors, new contributors in the Translation Wiki and users can share their experience in form of research notes with a Translation tag. Users can get updates by subscribing to Translation Tag.
- (optional) To avoid spamming of Public Lab Transifex account we can have a
simple form fill where users can share their Email-id and we can send an invitation. To invite new collaborators we can just collect the user's preferred email ID from the form and then use [Transifex invite feature](https://docs.transifex.com/teams/inviting-collaborators) to send an invitation mail. Admins can copy the email and send invite. [Removing](https://docs.transifex.com/teams/managing-and-removing-collaborators "https://docs.transifex.com/teams/managing-and-removing-collaborators") members will also have a similar workflow.

![](https://lh3.googleusercontent.com/YEvup7y8ZHK2Z7pBqha36Geg13Bg4iAZ2XsdjtsfPN4KUabj-cs6dSN9k_oWtCIMolxbaV6sZFFBtho5hqvPNwZAcN7QLj73gsadaXKvIf58aY0gVedyKzkEm-kuOAHPVdqfeu8l)

Public Lab currently has a [github-integration](https://docs.transifex.com/transifex-github-integrations/github-tx-ui#section-commit-and-pr-messages-from-transifex-on-github)
with Transifex to pull new translations and push new strings for translation to Transifex. We can extend this GitHub integration by
adding an [API integration](https://docs.transifex.com/api-3-0/introduction-to-api-3-0) with Transifex. Some API calls such as ones related to [Statistics](https://docs.transifex.com/api-3-0/introduction-to-api-3-0#statistics "https://docs.transifex.com/api-3-0/introduction-to-api-3-0#statistics") and [Team Management](https://docs.transifex.com/api-3-0/introduction-to-api-3-0#team-memberships) can be useful in Dashboard.

![](https://lh5.googleusercontent.com/ulEYhmXrGgtPmwhsAkgNTyMnaWb7pIg80BVpe7KXaku4zfOUQrihZ8rzewf0WrgdsQHEeyq5zONxNsNoa_VA9qbSGV1vWuJCeVzFc9zIh7NpsDDEUNarVTHGasH17Lr5mkLTFH85)

Translation Wiki as Dashboard

![](https://lh4.googleusercontent.com/rjU0L8meNdKkl78-W0Quv4yXovg7Rj8js0nERd2-EmW4SfB_-mcPvgzKQ8dvM1gYPNsWtqRNGj1EKgO4XPH09wPDpcruP_An5dZatuk1fZPISUhGm_28GN3C1k7TX-cu0FBfDjtZ)

Translation Tag page to access notes,questions,wikis and reach out to other team members.  
Pros of having a dashboard:

- We can have one place to find all resources, check the status of the project, and recruit new translators
- It can be a very smooth and interactive experience for new translators.

Cons:

- Currently one-click redirects us to Transifex so users familiar with Transifex might feel it more time consuming to apply on-site first and then use the invite link to join the team

---------

### 2\. FTOs issues workflow:

Many FTO issues were added as part of the Translation System Project where new contributors could understand the workflow by changing the translation function

```

t 'text to be translated'

```

to a translation helper function to translate word in case its translation exists else prompt message about missing translation.

Some of these issues are:

- As most of the contributors are new to the organization many might just change the required files but not test the changes in the local environment before pushing changes.
- There is no footer in local env and dropdown to change language is part of the footer, so to change the language one needs to use [http://localhost:3000/change\_locale/es](http://localhost:3000/change_locale/es "http://localhost:3000/change_locale/es") to switch language, and then changes are visible. Many don't know about this so don't test UI changes [issue](https://github.com/publiclab/plots2/issues/7798) this is one such issue where it would be great if contributors had tested changes locally issue could be avoided.

To streamline this process we can have a [GitHub bot](https://probot.github.io/apps/) that finds 'basic translation' kind of tag on pull requests and issues, and adds a review comment which contains:

- Best practices for changing files.
- How to test changes locally
- To attach screenshots of changes in PR
- Explaining why we are adding these changes

We can add something similar to this in the community toolbox where all issues under translation can be shown along with comments stated above as a description to the section.

![](https://lh3.googleusercontent.com/ChTpcnlSuYESSyLgVfVO3O-Pdd9MguQUgttiHiIDwLvUhN-kqf_MZhuiQt33J0PfBg2m1eSu7jDRNrTjJe-IPZNM2Z0TbsIVOJSS_LfBrUAd1W8nPlxuYE6jqh2cs0vauAhSKfsd)

Write tests for these changes to make sure the UI does not break on adding translation helper.

Adding these would make reviewing and merging these issues very efficient.

In the community box section, we can appreciate **top contributors** for their efforts.

---------

### 3\. Improving Translation Helper:

The current translation helper does not work correctly in [some cases](https://github.com/publiclab/plots2/issues/7798). We need to improve the helper to handle complex HTML parsing and strings that have escape characters.

This is the existing helper function

![](https://lh6.googleusercontent.com/FdL13UWH6HkLVdxshK_t9h6GTUmfzPeMaVR9VVBGuJmD-aUSA3rNZa87D0QYrQivPu2OxfxFRM97YQA8vlXfHW5RsSSzOTyid-2t30wHW2T67JZ4-RdHSgY_ijdcawkdghMM_BJ7)

Some fixes I can suggest for now are :

- check for escape characters and other such corner cases in the helper function itself.
- the function can be to return safe\_join or sanitize input instead of raw can help fixing issues with escape characters.
- **Translation Sandbox** - To test the js and ruby helper function on various parts of the site we can keep a dedicated page in the local environment which acts as a sandbox and has all the possible UI features where the helper function is used. This can be very helpful for contributors to check changes made in HTML, js, or ruby parts.
- Similar to a Ruby-based helper function we can set a **js-based** helper function to check if the logic when ported from ruby to js works better and resolves parsing issues.

But I feel this issue can be corrected by a bit of trial and error so I feel it can be solved once we start working on it.

---------

### 4\. Improving CSS:

Currently, if the translation of a word is missing then we have a globe icon that shows translation missing pop-up and redirects users to Transifex teams page. This icon sometimes breaks the CSS layout and appears in a lot of places.

We can add these changes to improve the CSS:

1. The globe icons are only visible to users having

```

'translation-helper'

```

tag in their profile tag so for users not having that on switching to a language other than English we can show a notification to help with translation.

This is a sample notification that we can add on top of the page or in the side-bar which can redirect the user to the translation dashboard.

![](https://lh5.googleusercontent.com/FunRBuLRPuKpd_BGoRaACs7jZEw887rSmtxWOBexN6eGDiq11Iaq23g7wX_0LqugNHV59QW1BG1Utv9spdKw62uLFoHbJwSYZmBNh52kkffe71zHiZ4_Mm7R_zG6gtD8z9k_hX3P)

2\. We use a ![](https://lh6.googleusercontent.com/CmHsT-DWhTffRlGjG1jMl4V7IZ89hmpvesz3VntAk2uf7faqI6AdERYpllWgkVL44Rt--Z73Az29puyRsZVgB3NJVTG0X6iUI1VpOM75wKkEHox-iWAq6aJHJlJi8w_Zh5t83XBV) dropdown to change the language so we can use ![](https://lh6.googleusercontent.com/ZS5mOimuA-61W3Jfswjj852pdtZmk5PLMo3eeC-ZL-i2hQuKgiwjZSsIDL8TD_pGq_HIFkrbJnrEtajtqMNdb9lA_nQZpCSK0kQ0R5xFhF7ro7XpnFOzvn0Wf7W_XUeEQm3-swEa) icon instead of ![](https://lh6.googleusercontent.com/75naeLi3rjV0ouO6I_akP3TPQKZi2v8sMhKVR240pdD3YHjlzVuDGpYE32PNHMS9TAa1bTRagyE9VlYsPqho8Gbr1bvpnzXY3h_34f0lOYSelYfYd42F9-vpcSKo7QUr1VpE5rNb) to show where translations are missing.

We can also change the pop-up message to something shorter.

![](https://lh3.googleusercontent.com/DEqnHTc1G3mm8pzPz_p1ggifhlb8RPrtnqnQGtXHbwjb3-ca8dqaCJyTM885kwAOOjr-01XlZcUsoecpxWYmqdl6AIQKCv2-_c1woukyFrcURZNtctSXC8IyseiMWw9w__G6bmNX)

Current UI

![](https://lh6.googleusercontent.com/zMhSxNeZYDQC1VYWGbt5Z-DwttgAvzSrXrMoNDIUA48RJRxdaLp-XZyF7duaS2qe9F7bK0gJzShdfkLqi1aKkAKhp7vZ_w1-w5_RY5VYwew6uWtHNCjy2iWhp-jGyuNToK3Ko4ZD)

After changes.

3\. Too many globe icons are rendered on screen, we can clean the UI a bit by reducing the number of icons to a fixed value for each page.

![](https://lh3.googleusercontent.com/DEqnHTc1G3mm8pzPz_p1ggifhlb8RPrtnqnQGtXHbwjb3-ca8dqaCJyTM885kwAOOjr-01XlZcUsoecpxWYmqdl6AIQKCv2-_c1woukyFrcURZNtctSXC8IyseiMWw9w__G6bmNX)

Current UI

![](https://lh4.googleusercontent.com/ukfmwKsk4ghDLdwbenRTMpsodAZ2Ah4hWjuAJLZtDFJ9z3zBuUU-BuRAiAp3iAUBNfuxfyyrV3n14qJ9fq-czjMkP--WJ8NWzLt8yYOyKe06uCNMVx4oWm-CxrlCp2HwOsJz0KmF)

UI with a lesser number of icons.

4.We can fix buttons and dropdown styling such that icons stay inline with the button-text.

![](https://lh5.googleusercontent.com/UTqKQlCs3QvVv8RohA14mCDu8Ycbjvyhg5I41Yx1ezRctkil2q2v7dwraErBBGl2OtMnACdN15P5ROYEhvdz7ytSMq_1cquaCtOpVlTPSr54c6a88npcp2Tgbo6LHj_P2XCQb1uS)

These are just some suggestions to improve the UI, we can do alterations to this later based on discussions.

---------

### Stretch Goals:

**Translation for Notes:**

To translate research notes we can add an option for translators to translate text in a portal similar to the one below where on one side there is an original post and on another side we can have the translated post if anyone has initially worked on it or else a fresh text area where translator can write the translation. ![](https://lh5.googleusercontent.com/wo2VXNLUVoBQ3djgg4MOkIVHZM8kYILg8f7I3dyLoQoiW4XF7I_jEJYsKimnw9P7_UIak1Lw7eZ89KUT1ZVgiTjmxll9Wq-WS8k8VWH5jTNmoGb8K1u1UTBeRvBA5vMjcbbAomgQ)

Once the translation is complete, he/she can send it for review. Once the text is reviewed based on the language selected or region of the browser we can show the option to view translated notes for users.

Pros of having self translation-review system :

- To send and receive translation to Transifex we need to share it in a .yml file but it is not possible with notes that are added on a day to basis.
- This can add value to the translation community with people and keeping the translation team engaged with new notes regularly.

Cons :

- Need to assign reviewers for translations
- Need to add more functionality to existing architecture to store data in more than one language
- Need detailed discussions about which wikis to translate, how reviewing will take place, how wikis having more than one language be shown to users.

I really want to work on this as I feel having Wikis in multiple languages can help people understand them much better but as it requires a lot of planning and discussion, I would like to discuss its feasibility during the community bonding period.

---------

[](https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration "https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration")

### Timeline/Milestones:

| Time-period | Tasks |
|-------------|-------|
| Community Bonding Period | <ul><li><p><span>Discuss implementation details with mentors</span></p></li><li><span>Decide Dashboard setup<br></span></li><li><p><span>Setup project goals&nbsp;</span></p></li><li><p><span>Prioritize critical issues </span></p></li></ul> |
| Phase 1     | <br>  |
| Week 1 (June 7, 2021 - June 14, 2021) | <ul><li><p><span>Setting up Translation Dashboard</span></p></li><li><p><span>Adding necessary resources and links for translation</span></p><span></span></li></ul> |
| Week 2 (June 14, 2021 - June 21, 2021) | <ul><li><p><span>Setting up Transifex API</span></p></li><li><p>Writing tests for new functionalities.<br></p></li></ul> |
| Week 3 (June 21, 2021 - June 28, 2021) | <ul><li><p><span>Completion of Dashboard<br></span></p></li><li><p><span>Setting up FTO workflow</span><br></p></li></ul> |
| Week 4 (June 28, 2021 - July 5, 2021) | <ul><li><p><span>Adding gitbot for translation-based FTO issues.<br></span></p></li><li><p><span>Adding Translation Section to community toolbox<br></span></p></li><li><p><span>Adding unit tests</span><br></p></li></ul> |
| Week 5 (July 5, 2021 - July 12, 2021) | <ul><li><p>Testing changes <br></p></li><li><p><span>reviewing and feedback on changes.</span></p></li><li><p><span>Documentation</span></p></li><li><p><span>code clean-up</span></p></li></ul> |
| Evaluation of Phase 1 | <br>  |
| Phase 2     | <br>  |
| Week 6 (July 12, 2021 - July 19, 2021) | <ul><li><p>Setting up Sandbox for UI changes due translation based issues.<br></p></li><li>Adding tests for sandbox<br></li></ul> |
| Week 7 (July 19, 2021 - July 26, 2021) | <ul><li><p><span>Adding JS-based helper</span><br></p></li><li><p><span>Improving translation helper function</span></p></li></ul> |
| Week 8 (July 26, 2021 - August 2, 2021) | <ul><li><p><span>Improving CSS</span></p></li><li><p><span>Correcting issues with complex HTML parsing&nbsp; </span></p></li></ul> |
| Week 9 (August 2, 2021 - August 9, 2021) | <ul><li><p><span>Reviewing changes</span></p></li><li><p><span>Writing Tests</span></p></li><li><p><span>Documentation and code clean up</span></p></li></ul> |
| Week 10 (August 9, 2021 - August 16, 2021) | <ul><li><p><span>Buffer period for reviewing and adding suggested changes</span></p></li><li><p><span>***Stretch goals </span></p></li></ul> |
| Evaluation of Phase 2 | <br>  |
| Week 11 (August 16, 2021 - August 23, 2021) | Code Submission and Final Evaluations |
| **      * - Implementation based on time constraints | <br>  |

---------

### Needs

I will require guidance from my mentors, suggestions, and feedback from all the
members of Public lab in the GSoC weeks.

---------

### Contributions

I have been contributing to public labs since January 2020, I have contributed to issues involving HTML, CSS, js, and rails. I'm familiar with the tech stack and also interacted with the mentors while solving the issues. I have tried to actively participate in discussions and give my suggestions. I'm also been active on public forums in helping out new contributors and fixing issues.

[Issues](https://github.com/publiclab/plots2/issues?q=is:issue%20author:imajit%20)

[PR](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:imajit)

[Comments](https://github.com/search?q=commenter:imajit%20org:publiclab&type=Issues)

---------

### Experience

_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples._

I'm a final year student at NITK, Surathkal and I have been in development for around 3 years.

- _I have done a 10 weeks summer internship at Intuit India where I worked on database migration and data visualization and analysis._
- _I was one of the winners at Walmart Hackathon 2020 and Smart India Internal Hackathon 2020_
- _I have been at the finals of Smart India Hackathon 2019 and 2020\._
- _I have worked on a startup related to e-commerce and advertisement._
- _I have worked on development-based projects as part of course projects and college tech-fests._
- _I have decent knowledge about js, rails, and git and I'm good at OOPs based concepts._

---------

### Teamwork

\_\__I have participated in various team hackathons at college as well as national level. I have also worked as a team on video captioning-based research work. In Public Lab, I have got a chance to learn open-source practices and work with some really helpful people especially@jwarren,@cess,@nstjean,@Uzay-G. It has been a great journey contributing to Public Lab and being a part of such an amazing community is a special feeling._

---------

### Passion

Public Lab strives to solve environmental issues and is a community platform for innovative ideas and research notes related environment.I would love to work with this organisation and contribute to the FOSS community and solve real-world issues,with refinement to translation system I hope to get more people to share their knowledge and spread it across in various languages.

---------

### Audience

This project will help in recruiting new translators for Public Lab and help new translators understand the workflow and add missing translations.

---------

### Commitment

_Yes, I fully understand that this is a serious commitment and I can 25-30 hours weekly for the completion of this project._

```
```