---
title: "GSoC 2021 : Translation System Refinement"\ntagnames: 'soc, soc-2021, soc-2021-final, response:26143'
author: ajitmujumdar25999
path: /notes/ajitmujumdar25999/08-21-2021/gsoc-2021-translation-system-refinement.md
nid: 27611
uid: 654056

---

# GSoC 2021 : Translation System Refinement

by [ajitmujumdar25999](../profile/ajitmujumdar25999) | August 21, 2021 22:20

August 21, 2021 22:20 | Tags: [soc](../tag/soc), [soc-2021](../tag/soc-2021), [soc-2021-final](../tag/soc-2021-final), [response:26143](../tag/response:26143)

----

# Problems

Our internationalization (i18n) system exists but lacks a consistent
workflow for importing new translations, as well as suffering from some
HTML parsing and UI shortcomings.

# Approach

I started off by looking for more details about the existing work, I tried to understand the intent and ideas discussed for the project. The issues discussing the goals of the project were really helpful to understand the project in detail. There was a lot of groundwork done in the project which gave me a good head-start. One challenge here was to use the existing work and build on it without breaking the existing flow.

After I had a good understanding of what is required, I jotted down the requirements into tasks in my planning issue. I started out with a brief outline but as I started working on each task I further divided it into sub-tasks which was very helpful in completing the task one step at a time and was also made reviewing them and tracking my progress a bit easy.

My project was mainly in 3 domains - fixing the UI of the project, making it robust by adding more tests and setting the workflow to import and export strings. This gave me great exposure to various parts of the project and I was able to interact with many people who have worked on it. By discussing my ideas and ways to implement them, I got to learn new ways to solve problems and elegant and concise ways to implement ideas.

Whenever I was stuck, mentors and other contributors would chime in their opinions and always be available to resolve the issue. Timely feedbacks were very helpful to me in keeping track of my project. Like there was a time when I was stuck with a test and was not working as I expected it to. I made a Work-in-progress pull request and then mentors and other reviewers helped me out with possible errors and alternative implementations, and in some time I got to the correct solution.

By completing small tasks regularly, I completed most of my work in the given time and also learn new things related to RoR and open source practices in general.

# Outcomes

- The UI breaks have been fixed for the translation team members.
- The changes fix the globe icons not being in line with the buttons in the navigation bar and search bar not visible in some places.
- The UI looks more clear with a reduced number of globe icons and the pop-up message is a bit more explanatory now.
- We can now regularly update the site with new translations as they are added to the Transifex.
- Importing and exporting new strings is completely automated.
- First-time contributors have more issues to work on with new issues related to the translation system coming up in good number.
- Reviewing changes is much easier in local development with the option to quickly switch on translation team members mode.
- Parallel UI so that changes for the translation team UI do not affect other users' experiences.

# Future goals

I would like to continue working on the Public Lab translation system project and some other projects too. I would like to share some ideas that I feel can improve the existing project and be helpful to more people.

1. **Content Translation** - With a great translation team, we can have some important wikis and notes translated in other languages so that work done can reach out to more people. We can also add an option for the author to publish his/her work in more than one language. This might require a lot of reviewing and a lot of new setups to manage these notes/wikis written in multiple languages.
2. **Machine learning-based translations** - We can implement a machine learning-based model that translates strings into multiple languages. The strings are merged after reviewing only so wrongly translated strings won't be merged and it can speed up the process considerably.

Both these ideas require a lot of planning and discussions about implementations but I feel that they can good additions to the current project.

I would like to thank all the contributors and mentors who helped me this summer especially Jeff, Liz, Cess, Will, Sneha, Keshav, Ruth and Gaurav for helping me out.