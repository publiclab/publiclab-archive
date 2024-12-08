---
title: GSoC 2016: Final Work Product of Expanded Q & A System for publiclab.org
tagnames: software, gsoc, web, developers, coding, barnstar:basic, gsoc-2016, q-and-a, response:13397
author: ananyo2012
path: /notes/ananyo2012/08-20-2016/gsoc-2016-final-work-product-of-expanded-q-a-system-for-publiclab-org.md
nid: 13372
uid: 468506

---

# GSoC 2016: Final Work Product of Expanded Q & A System for publiclab.org

by [ananyo2012](../profile/ananyo2012) August 20, 2016 10:36

August 20, 2016 10:36 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [web](../tag/web), [developers](../tag/developers), [coding](../tag/coding), [barnstar:basic](../tag/barnstar:basic), [gsoc-2016](../tag/gsoc-2016), [q-and-a](../tag/q-and-a), [response:13397](../tag/response:13397)

So we nearly come to the end of GSoC 2016 and its time for the Final Work Product Submission. This research note contains all the work that I completed over this summer on my Project on [Expanded Q & A system for publiclab.org](https://publiclab.org/wiki/gsoc-ideas#Expanded+Q&A+system+for+PublicLab.org).

## Project Details

**Project Title:** [Expanded Q & A system for publiclab.org](https://publiclab.org/wiki/gsoc-ideas#Expanded+Q&A+system+for+PublicLab.org)

**Project Proposal:** https://publiclab.org/notes/ananyo2012/03-25-2016/expanded-q-a-system-for-publiclab-org

**Link to GSoC Project:** https://summerofcode.withgoogle.com/projects/#4822596952522752

**Abstract/Summary:** Developing proper Q & A system for [Publiclab.org](https://publiclab.org) with improved User Experience.

**Open source Platform Used:** [Github](https://github.com/)

**Organization mailing list:** https://groups.google.com/forum/?hl=en#!forum/plots-dev

**Github Organization Page:** [Publiclab](https://github.com/publiclab)

**Repository Contributed to:** [plots2](https://github.com/publiclab/plots2)

**Languages/Framework Used:** Ruby on Rails, JavaScript(jQuery), HTML/CSS

## Code Links

**Links to all Commits:** https://github.com/publiclab/plots2/commits?author=ananyo2012

**Link to related Issues:** https://github.com/publiclab/plots2/milestone/4

**Open Pull request:**  [#40](https://github.com/publiclab/PublicLab.Editor/pull/40) on [PublicLab.Editor](https://github.com/publiclab/PublicLab.Editor)

Here is an image of the Contribution graph Starting from the very first day of GSoC Project announcement. Find it at this [link](https://github.com/publiclab/plots2/graphs/contributors)

[![contribution.png](//i.publiclab.org/system/images/photos/000/017/689/large/contribution.png)](//i.publiclab.org/system/images/photos/000/017/689/original/contribution.png)

### First-timer-only Issues

One of the good things about [plots2](https://github.com/publiclab/plots2) codebase is that it is really encouraging for first-timers who have either haven't contributed to open-source or have very little experience on it. It has some great issues labelled as `first-timer-only` which is really encouraging for first-timers. We have also made some during the summer. They can found in the link given below.

**Link to `first-timer-only` issues:** https://github.com/publiclab/plots2/labels/first-timers-only

## Project Description

Here are the list of features that I worked on throughout the summer.

### Listing all questions in the Questions Landing page

As the feature image of this post shows, you can now see all questions at https://publiclab.org/questions. The questions are listed chronologically according to the date when they were posted. The [Recently answered](https://publiclab.org/questions/answered/) tab shows all questions that have been answered recently. [The Popular](https://publiclab.org/questions/popular/) tab shows all questions arranged by the number of views. The [Liked tab](https://publiclab.org/questions/liked/) shows all questions according to the number of likes to each question.

### Searching questions

You can search questions by typing in the keyword in the search box present in the questions landing page. The search box is autocomplete and shows results as you type in. Here is a picture of the search feature.

[![search_typeahead.png](//i.publiclab.org/system/images/photos/000/017/690/large/search_typeahead.png)](//i.publiclab.org/system/images/photos/000/017/690/original/search_typeahead.png)

You can go the question directly by clicking on the link in the typeahead.

### Sorting questions by tags

You can sort questions by tags and show only specific questions tagged by the entered tagnames using the **Refine question by tags** section presnt in the sidebar of the question page. Here you can enter tags and remove tags and the questions gets sorted accordingly. Also you can clear all tags using the Clear all tags link. Here is how it looks

[![refine_tags.png](//i.publiclab.org/system/images/photos/000/017/696/large/refine_tags.png)](//i.publiclab.org/system/images/photos/000/017/696/original/refine_tags.png)

### Asking questions

For posting a new question you can type in the question title in the same search form and then Press the Ask button beside. It takes you to the question editor(login required). The question editor is the same editor that is used to post reasearch notes on publiclab.org but with a slightly customized sidebar. Here is a picture of the question editor while writing a question

[![ask_question.png](//i.publiclab.org/system/images/photos/000/017/691/large/ask_question.png)](//i.publiclab.org/system/images/photos/000/017/691/original/ask_question.png)

Here you can write questions and also edit a already created question. The questions are mainly classified as questions based on a power tags which is of the format `question:topic`. Where `topic` refers to the question topic which relates it. You can change this topic by changing the `question:question` tag which is already provided at  the tags section of the editor.

### Viewing question

On clicking the question link the question shows. Here is a picture of the question page.

[![question_show.png](//i.publiclab.org/system/images/photos/000/017/692/large/question_show.png)](//i.publiclab.org/system/images/photos/000/017/692/original/question_show.png)

Let me just give the run down of all the specific features present in the page. You can see a button named **Subscribe to answer questions on this topic**. Subscribing it notifies you on any question on this topic. Apart from that there is a **Follow** button where you can follow other tags related to this question. There is a **Star** button beside it where you can Like that question. Liking the question notifies you on any conversations and answers posted for that question. Beside that a dropdown button is present which upon clicking shows a pop up where you have the edit and delete buttons for the question.

Below that you can see the user who asked the asked along with the number of views, likes and answers. Then there is the content below which there are tags for that question along with a tag form for adding more tags.

Below that there is the answer section which is discussed separately in this post. Apart from that the sidebar displays some more information dicussed in this subsection.

#### Sidebar of question page

The sidebar contains **Ask question** buttons from where you can ask new or related question. After that the answerers fo the question are listed sorted by the no of answers. On hovering over the users the no of answers given by them is displayed. After that comes the **Related questions** section where all questions related with same tags as the question are listed.

### Answering questions

As you can see in the image above the answers section comes below the question body. You can post a new answer to the question using the Answer editor present at the end of all answers. The answer editor is similar to the question editor and contains toolbar for editing it. You can write descriptive answers on it using a markdown based editor and also post images. Here is a sample image of an answer

[![answer_accept.png](//i.publiclab.org/system/images/photos/000/017/694/large/answer_accept.png)](//i.publiclab.org/system/images/photos/000/017/694/original/answer_accept.png)

It has the answer author mentioned along with the time ago when it was posted. Edit and delete buttons are present at the right edge. An **Accept answer**  button is present below the question which shows if you are the question author. The question author can accept an answer which seems to answer his question. A green Accepted label is shown for the answer when it is accepted as you can see in the question view above. Also a green answered label is shown beside the question in the question landing page. The question author can also unaccept the answer through the same button.

You can like the answer using the **Like button**  and also share the link for the answer using the share button. The answers also contains comments that can be toggled by the **comments button** present below the answer.

### Commenting system

A new commenting system is introduced with the Q & A pages. Comments are intended for clarifications regarding the question or answer. They have limited markdown support. Here is a image of comments listed below answers

[![comments.png](//i.publiclab.org/system/images/photos/000/017/695/large/comments.png)](//i.publiclab.org/system/images/photos/000/017/695/original/comments.png)

There are two types of comments. Comments for questions and comments for answers. Comments for questions appear after the question and comments for answer appear after individual answers and can be toggled by the comments button. The authoring interface is same for both. 

The authoring interface contains a expandable comment box that increases in height as you type in.

Part from that comments are foldable and only a limited no of comments appear initially you can view more comments using the **View # more comments** button which also shows the no of comments yet to show. You can also get the link to the comments from the date that contains the comment link. In case you want to browse a specific comment and the comment is hidden in the chain the entire comments chain open up showing the comment.

### Email notifications system

Email notifications are sent to users on various events of posting a question, answer or comment. Users get custom email notifications for posting questions. email notifications are also be sent for each new answers posted, to the question author and users who liked the question and to those who also posted an answer to the question. You can mention users using the `@` symbol using their usernames. When a new comment is posted for an answer notification is sent to the answer author, those mentioned in the comment, those who liked the answer and others involved in the conversation. Creating views for these email notifications was another task while creating the email notification system.

### Q & A in User Profile

A new Questions section is included in the User Profile page. It list the Asked and Answered questions. You can go to any user profile to check this out. Checkout [my profile](https://publiclab.org/profile/ananyo2012) in publiclab.org. Here are the images for Asked and Answered questions in my profile

[![profile_asked.png](//i.publiclab.org/system/images/photos/000/017/697/large/profile_asked.png)](//i.publiclab.org/system/images/photos/000/017/697/original/profile_asked.png)


[![profile_answered.png](//i.publiclab.org/system/images/photos/000/017/698/large/profile_answered.png)](//i.publiclab.org/system/images/photos/000/017/698/original/profile_answered.png)

You can toggle between the two sections using the **Asked** and **Answered** buttons. The Answered section has a **Answers by User** toggle button that displays the link only to the answers by the user to that question below which a link to all answers are given. The section can be toggled as shown in the image above.

### Questions section in tags page

The tags page now contain a separate questions section which can be seen in this link https://publiclab.org/questions/tag/spectrometer.

Apart from that an important task was to separate out questions and reasearch notes and list them separately in different areas such as tags and Profile pages, since questions are basically notes tagged with a `question:topic` tag.

### A failed attempt to integrate friendly_id

A part of my [Project Proposal](https://publiclab.org/notes/ananyo2012/03-25-2016/expanded-q-a-system-for-publiclab-org#Timeline/milestones) mentions the use of [friendly_id](https://github.com/norman/friendly_id) for handling url changes when the title for any post changes. [plots2](https://github.com/publiclab/plots2) already had a system to handle the url formats of wiki pages, maps and research notes but it didn't update the url in case the title for them changed since in that case the old urls for them would be lost which we definitely don't want. [friendly_id](https://github.com/norman/friendly_id) had a way to handle these url changes and redirect any old urls to the new one using it's **History module**.Though I did work on it but there was a huge bug that creeped up and all the old urls were lost. Luckily PublicLab has good database backups and all data was revived after reverting some of the friendly_id changes. There are still code left to re-implement the feature if needed after we come with more good tests and careful implementation so that things like this don't happen in future.

### Few works on PublicLab Rich Editor

This was the only part of my project that I couldn't much work on. Though I have worked on some of it. The Rich Editor is a different project and the repository is at [PublicLab.Editor](https://github.com/publiclab/PublicLab.Editor). I updated the rich editor template used in the publiclab website. Also I made a Pull Request [#40](https://github.com/publiclab/PublicLab.Editor/pull/40) recently, on updating the readme of the repository. 

### Writing tests for implemented changes

Last but not the least one of the important part of my Project was to write good tests for all the implemented changes. Writing good tests is one of the necessary part for every good open project so that newly implemented changes don't break the current working of the application. Rails has its own testing framework `test::unit`. All tests for [plots2](https://github.com/publiclab/plots2) are written in it. So that is the one that was used by me during the Project. 

Also recently we setup [Jasmine](http://jasmine.github.io/2.4/introduction.html) in [plots2](https://github.com/publiclab/plots2) repository for testing javascript features. So I also wrote some javascript specs for testing some of the javascript related functionality.

## Other Issues

There are also many issues that I worked on apart from my Project before and during Coding period. These are some of the unrelated issues which I worked during Coding period apart from the Q & A Project: [#570](https://github.com/publiclab/plots2/issues/570), [#503](https://github.com/publiclab/plots2/issues/570), [#16](https://github.com/publiclab/plots2/issues/16), [#577](https://github.com/publiclab/plots2/issues/577), [#624](https://github.com/publiclab/plots2/issues/624), [#656](https://github.com/publiclab/plots2/issues/656), [#668](https://github.com/publiclab/plots2/issues/668), [#604](https://github.com/publiclab/plots2/issues/604)

## Ongoing development

Except some minor issues and some works on the [Rich Editor Project](https://publiclab.org/notes/warren/05-13-2016/progress-and-thoughts-on-the-new-rich-editor-project-and-a-preview) most work is complete as per the [Proposed Timeline](https://publiclab.org/notes/ananyo2012/03-25-2016/expanded-q-a-system-for-publiclab-org#Timeline/milestones). You can find all issues related to the Q & A project at https://github.com/publiclab/plots2/milestone/4. It also contains some `first-timer-only` issues.

The next step is working on the [PublicLab Rich Editor](https://github.com/publiclab/PublicLab.Editor). This is in its early stage and has lots to be done. A lot many ideas come up to customize its use for Q & As. I have a an open Pull Request [#40](https://github.com/publiclab/PublicLab.Editor/pull/40) in the PublicLab.Editor repository which I hope to be merged soon.

Also more ideas for improving the Q & A system and its interface is always welcome and I will always be in a hunch to solve them!

## Links to other Documentation

Apart from this I also wrote some of the documentation during my Project which can be found in the links given below

* Q & A Wiki page: https://publiclab.org/wiki/public-lab-q-and-a (This is also linked in the [Questions](https://publiclab.org/questions) Page)
* Research notes in PublicLab: https://publiclab.org/notes/ananyo2012/05-11-2016/design-ideas-for-expanded-q-a-project, https://publiclab.org/notes/ananyo2012/07-25-2016/progress-of-the-expanded-q-a-project, https://publiclab.org/notes/ananyo2012/07-02-2016/definition-for-user-streaks
* I have also made a screencast on using Q & A System that I have uploaded on Youtube. Here is the link: https://youtu.be/0meDlXXvDOs
* My open source Blog(though this is incomplete and contains only first half of my Project): https://ilovefoss.wordpress.com/category/gsoc/


That's all Folks! It was really great working with the PublicLab GSoC team throughout this summer and it was a really valuable experience for me.
