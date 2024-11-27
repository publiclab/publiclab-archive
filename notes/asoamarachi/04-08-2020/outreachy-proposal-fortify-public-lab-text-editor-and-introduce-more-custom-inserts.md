---
nid: 23339
title: Outreachy proposal: Fortify Public Lab Text Editor and Introduce More Custom Inserts
path: public/static/notes/asoamarachi/04-08-2020/outreachy-proposal-fortify-public-lab-text-editor-and-introduce-more-custom-inserts.md
uid: 671968
tagnames: software,soc,outreachy,first-time-poster,image,soc-2020,outreachy-2020,outreachy-2020-proposals,response:23084
---

# Outreachy proposal: Fortify Public Lab Text Editor and Introduce More Custom Inserts

## About me

Name: Amarachi Shulammite Aso

Location: Nigeria

Project description

This project is divided into two phase: fixing current issues with the Public Lab Text Editor and Introducing more Custom Inserts.

The first phase - fixing current issues with the Public Lab Text Editor, includes Interface improvements and Development process refinement.

The second phase - Introducing more Custom Inserts will include creating an intuitive way for users to add advanced contents such as maps, tables, and lists of content from elsewhere on the [PublicLab.org](http://PublicLab.org) website.

### Abstract/summary (<20 words):

### Problem

What problem(s) does your project solve?

# Phase 1:

Fix for current issues

- Toolbar positioning & stickiness issue #394: Toolbar position gets fixed once user scrolls past the "markdown" button, in rich text mode, making it appear in place where it is not needed. Like it does below:![](https://lh6.googleusercontent.com/nLDUKHQuSwF496JACCnHEDGVUwx3-olLtTly_O9MU9a_STc-xQMVOtrD_XHraYmjJrbmyYZNTTnhQZjtcALf_ASVcGo7PbaqlK2MATrAgJlnOZII9tf_bxH4Cnz2P1P0bXZA5SNz)

The positioning here should be made relative, allowing the textarea to have a scrollbar once input gets too long, like we have in the markdown mode. Text area's initial hight however shouldn't be as long as is in markdown mode currently, neither as short as it is in Rich text mode currently.

If after carrying out user testing/interview, and report shows that having the toolbar at the bottom of the textarea is problematic, we would reposition the toolbar to the top of the textarea to make it more easily accessible when a user is typing.

- Inserting into lists and tables issue #128: Inserting any element that is not normal text (e.g an image) resets numbering of list in Markdown mode, causing the next item to get numbered from 1 again.

Like a user has shown here: ![](https://lh6.googleusercontent.com/pus0w8cUQ9iJVgXTId-14tVYpdJyrlVIbTinZiIabb1auuJ7t7MuawTpWTUcceLGMTc8vH-TiejBgTzwZEcsl1jJx5tlhY_jLDNzq6rQiK4TkBaLXwqju73HWDJVklUBxplp9efk)

This is happening because in woofmark inserting elements like a table or an image would also insert a new line, causing a previous list to end. A way around this would be to use the start= attribute of HTML numbered list to tell the editor where to start numbering our next line from, as is described here [https://github.com/bevacqua/woofmark/issues/66](https://github.com/bevacqua/woofmark/issues/66)

The better place to make this fix is at the woofmark library level. Since this library is no longer actively maintained but the Public Editor depends on it, We would ask for permission to start maintaining the library if the maintenance can be outsourced, for at least during the internship period, or ask if our patches can be reviewed on a regular basis by the library maintainers during the internship. With this permission in place, we can also solve other bugs found in the editor directly upstream, in woofmark.

- Document and develop solutions for bold-ing errors issue #307: The expected behaviour for each of the text editing tools is to get selected once it has been clicked on and get Unselected when clicked the second time. But the Editor is inconsistent with deactivating Bold-ing once it has been activated.

A fix for this would be to make changes to the editor in Woofmark so that it correctly removes the bolding property from the next Text in line each time it detects that the B command has been clicked the second time - which is supposed to mean deactivating it.

This same error occurs with italics and can be solved exactly the same place in Woofmark.

- Implement a way to exit out of block elements: In Rich text mode, a user is able to exit a block quote, but cannot in Markdown mode.

Code blocks on the other hand can't be exited out of both in rich text mode and in markdown.

- Making text into header and back: Once a Header is created it can't be converted back into text. A fix would be to make selecting/highlighting a Header Text and clicking on H to toggle the text between Header and text.
- Un-centering of Centered text: Since the command for centering text is included in the editor, there should also be commands to align contents to the left and to the right. That is the case with most rich text editors. Google docs for example:

![](https://lh3.googleusercontent.com/5yEa4snzRgRJuOD0jzgcu_91hj0iMuvatcKQvtB7Ar2zSFnHI4saFgOLf8lMYH6fp5Nr-zzFCyk9Y77809SbR43q6B1spTwuNhwXeOmRnBd-N5WJ4gHQ8tVHDwBGltIQQJPjcT7R)This way, text can be re-aligned to any position after it has been centered.

Interface Improvement

- Make toolbar responsive: Toolbar gets cropped on smaller screens: ![](https://lh6.googleusercontent.com/GTZQbEvmV5QtqG3AZ7tLMlpuF0TvDwTddSsyo4QxHMmXy69CC_w_I_0xtvY8-6jbYfpG9HhVgdMPAtFND_1-DPq8GzjcVkNTf_YD7AgLq-Whny1XP5ilmeeNW6Ino_aj6Bl3Ro8_)

We should rather use flex-wrap to make the tools fall under the next row as screen gets smaller.

This is what it will look like:

![](https://lh6.googleusercontent.com/3XQU9e-FMt7AbWnLgOYyYfs2dEHFqOEeckRYqiwKitzl7SIMmNs7sf5D_AlkQyTJvehy69s5Iz5715ysZjPNP6QAgTOvFCAXna1yfPZwmbjoruKnHrZOgYIYgIkjx998yPnQ6wqe)

- Add hover tooltip to all tools: to all tools not already having hover tooltip on the editor, and to the new tools that will get added for introducing more custom inserts.
- Refine footer bar of the editor: footer bar appears a bit too big, and on smaller screens occupies too much space and makes it difficult to impossible for user to see what they are typing.

(Already started working on this)

- Refine pop-up for image upload and file attachment in body text area.

![](https://lh4.googleusercontent.com/sHHcMM17N-djSIwpoN4mDT_6H2WAHabDD0eyXiaUaGjDkCJjK7iO-g7Qm5ila2MpnCSJPAj0W6aPcB1I07F3CYFBq_AY9Csg3xr7z2INAx-IcfQk3VAoNzg9cIXw4WWILgVyhpwG)

The background colors of these buttons is what will be changed on hover. Same will be applied for attachment popup.

Development Process refinement.

- Write test for every new functionality added (e. g the new custom inserts) and for existing features not having a test. This will include test for "making text into headers and back"
- User Interface testing using jest and Puppeteer.
- Develop a workflow for documenting bugs: The existing workflow for documenting bugs or issues on publiclab repositories [https://publiclab.org/wiki/issues](https://publiclab.org/wiki/issues) is not enough to help users sufficiently dcument the many times hard to reproduce bugs in the editor. Proper documentation for bugs found in the editor may mean that users can without too much search find the option to report the bugs they come accross and also be able to upload screenshots, screen recordings, GIFs and any visual media that shows these bugs occurring or their output after they have occurred.

To help users find the option to report bugs easily, we'll create a button for reporting bugs at the end of the editor, before the footer, like here:![](https://lh3.googleusercontent.com/WxrsykX70V_lLxG68SbJIjC6LJWu3YSaU9adnwhET1cfzFrJMOPdDS2AsJEkI_B1C4KYsFrL2iOHVzcVNd_Sh9MKifyJT-Y43DNNze0mkAEz1slPrFEslT-k9ZVMwie084HIdgJH)

Which will take the user to the page where they can submit thier bug report.

The below picture is an overview of what the page will look like and what information it will collect.

![image description](/i/39144.png "bug-report.png")

- Create a workflow that welcomes new contributors and makes contributing to Publiclab.Editor intuitive. Making creation of new-comer-friendly issues and integral part of development on the Publiclab.Editor repo, will go a long way in attracting quality contributors.

Also create new issue labels for describing the complexity of a problem, so that potential contributors can choose what issue is right for them. New labels will be "difficulty:easy" "difficulty:medium" "difficulty:hard".

- Configure and use jest built-in code coverage.

# Phase 2: Customized Editor Inserts.

- Inline grid/powertags generator: With the below simple UI, users will be able to include advanced contents to their posts. Contents here include maps, tables and lists of contents from elsewhere on the [publiclab.org](http://publiclab.org) website.

This new inserts will be an extension of the Rich text module.

An ellipsis icon will be appended to the exiting toolbar, from which the options to include these inserts can be selected. Like is shown below:![image description](/i/39145.png "new-custom.png")

On map, for adding Tags and Preset Layers, a tooltip will be presented, showing that the user can Optionally add tags or preset layers if they need it. This will help users who may not understand why the Tag and Preset Layer options are there to know that they can skip inputting them if they don't need it, and only input longitude and latitude. Tooltip will look like this:

For Add tag:

![](https://lh6.googleusercontent.com/Z9cUn32T5AR72jiQbD6rcUt2hNXaffv6XP2qhTl9zK7Am6Fn_cna8ZsSXkrxhi-RV_B-lG11suOm5WmFOiP1jvxLa77q9n-yjLhwKah5TFwxbwCoEvYBQzK6p67oGCVhsxrahFHe)

For Preset layers:

![](https://lh4.googleusercontent.com/pUShqy2B0nw4KriHU2wcHDNqf1Mu0A1HhiGxOv2D3Qowo6AK6inQWIKBspdB6ngQUiTun_suZnxkJdHiTxHZc3MRRkEK7XLqfxcW3KbDBijXPV1Kcs59KRRDzlz4CMd5oEOtJipE)

- Create new module for mapping short code syntax to the UI for adding advanced contents.
- Carry out user interview and testing on [lookback.io](http://lookback.io) with volunteers from the community. This will enable us measure how intuitive it is to use the new custom inserts as well as usability of the editor in general at the point of carrying out test.

### Timeline/milestones

I have broken up the project task into smaller tasks that can be completed in each week of the internship. For each week I'll be available to work Monday to Friday, during work hours and at night when need be.

May 19 - 25:

• Write UI test using jest and Puppeteer.

• Configure and use Jest built-in code coverage.

• Include ESlint to project.

26 - 1th of June:

- Fix stickiness of toolbar
- Make toolbar responsive
- Make background color of all tools the same.

2nd - 8th:

- Write test for Bold-ing error.
- Fix bold-ing error

9th - 15th:

- Fix inserting into list issue.
- Write test for converting to Header and back.
- Fix error with converting to Header and back.

16th - 22nd:

- Include submodule for Left alignment and Right alignment.

23rd - 29th:

- Create First-time-only issues.
- Create template for documenting hard to reproduce bugs.
- Create template for documenting issues with the tags d⇔ict--y:easyd⇔ict̲y:easy d⇔ict--y:mediumd⇔ict̲y:medium d⇔ict--y:hardd⇔ict̲y:hard

30th - 6th of july:

- Implement a way to exit out of quote in markdown and out of code block in both markdown and rich editing mode.

7th - 13th:

- Create user interface for new custom inserts.

14th - 20th:

- Create module extension for inline map.

21th - 27th:

- Create module extension for advanced grid.

28th - 3rd of august:

- Develop workflow for documenting bugs 

4th - 10th:

- Carry out user test and interview using [lookback.io](http://lookback.io/).

11th - 18th:

- Make adjustments to editor based on report gathered from user testing.
- Create first-time-only issues.
- Document work on editor so far.

### Needs

- ### Regular feedback on pull requests
- Availability of mentors to help clear any confusions if I happen to have any.

### First-time contribution

Here is link to my first time contribution on public lab:

[https://github.com/publiclab/plots2/pull/7659](https://github.com/publiclab/plots2/pull/7659)

You can use links like these to show recent activity:

Recent activity:

[https://github.com/search?utf8=%E2%9C%93&q=commenter%3AShulammite-Aso+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3AShulammite-Aso+org%3Apubliclab&type=Issues)

Issues including first-time-only created on plots2:
[here](https://github.com/publiclab/plots2/issues/created_by/Shulammite-Aso)

Issues created on Publiclab.Editor:

[here](https://github.com/publiclab/Publiclab.Editor/issues/created_by/Shulammite-Aso)

Closed pull requests on Publiclab.editor:
[here](https://github.com/publiclab/Publiclab.Editor/pulls?q=is%3Apr+author%3AShulammite-Aso+is%3Aclosed)

---------

### Experience

I started learning to write code over a year and three months ago after I had to end my course; psychology, in the University.

I started with learning front end web development with javaScript, HTML and CSS. Over this period I have built out projects using javascript and some of its libraries like react and jquery. Most of which were assessments for courses I was taking, some my personal projects.

Two personal projects I have built out include:

A currency converter app:[https://frosty-raman-46ca87.netlify.com/](https://frosty-raman-46ca87.netlify.com/) which I have also built as a progressive web app. With code here: [https://github.com/Shulammite-Aso/currency-converter](https://github.com/Shulammite-Aso/currency-converter)

And [https://shulammite-aso.github.io/PsycheSmart-Africa-/](https://shulammite-aso.github.io/PsycheSmart-Africa-/) which currently is a simple jquery and bootstrap website.

I have also taken part in a hackathon where we had built [OTem](https://github.com/claretnnamocha/TEM)
, an event scheduler web app for tech communities in my town. The app would basically help these communities to schedule meet-ups so that they don't clash with the meet-up of another community, especially where it is most likely that they share members.

---------

### Teamwork

I've worked with teams, where I have collaborated with other members to achieve great goals, and contineously.

One example of a team I work with is as a member of the four community leads and co-founders of Women-Pro-Tech which has now become part of a Google Women-Tech-Makers group.

Bringing WTM (Women Tech Makers) to my town meant that we worked to stay very active as a tech community. My part in making that happen centered around in taking the lead in making the community an active one. This meant that i make rosters of activities to be held in our online chat group and to assign the activity to other members who are willing to carry them out. Because everyone of the leads have other things doing apart from running the community, it was sometimes difficult to keep up and doing with community engagements. Part of my job was to remind every other person to try to do their part, while also being the one having to remind my own self to do my part. This often meant that i stay high on self-motivation

---------

### Passion

I love community. I love community service, and although I have never really taken part in community or open science, I still connect a lot with the general goal of public lab as an organization.

Maybe because I have also run or help to run a free and open community myself, where our goal was to create awareness about certain conditions and help people live better and quality life. One of them is a cancer awareness group and the other is PsycheSmart Africa, where we basically created awareness too and made information about mental illnesses and neurodevelopmental disorders like Autism easily available available to the people.

### Audience

Public is a community where members collaborate to solve environmental problems. The public lab editor and the wiki are the primary means community members put out there works; whether it's a research note, to post an event or whether it's a question they want to ask. Making he editor bug free and introducing other simple ways to include contents will result in good editing experience for these users.

This project will also make getting started contributing to Publiclab.Editor a lot easier for new contributors. So even the developers will benefit.

### Commitment

I understand this to be a very serious commitment and see it as a full time job while it last. And since I have no other serious time commitment during the summer, I have planned to work five days in a week; Monday to Friday, during work hours and at night when need be.