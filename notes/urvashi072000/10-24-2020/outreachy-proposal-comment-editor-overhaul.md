---
title: 'Outreachy proposal: Comment Editor Overhaul'
tagnames: software, first-time-poster, outreachy-winter-2020, outreachy-2020-winter-proposals, response:24687
author: urvashi072000
path: /notes/urvashi072000/10-24-2020/outreachy-proposal-comment-editor-overhaul.md
nid: 24806
uid: 638826

---

# Outreachy proposal: Comment Editor Overhaul

by [urvashi072000](../profile/urvashi072000) October 24, 2020 14:01

October 24, 2020 14:01 | Tags: [software](../tag/software), [first-time-poster](../tag/first-time-poster), [outreachy-winter-2020](../tag/outreachy-winter-2020), [outreachy-2020-winter-proposals](../tag/outreachy-2020-winter-proposals), [response:24687](../tag/response:24687)

----

# ABOUT ME

Name: Urvashi Gupta

Location: India

Email: <urvashi072000@gmail.com>

Github Handle: [urvashigupta7](https://github.com/urvashigupta7)

Timezone: IST (GMT + 05:30)

# PROJECT DESCRIPTION

This project aims at improving the comment editor of the Public Lab website, finding bugs, and making the comment editor consistent with all the variants. The code of the comment editor is quite entangled, complicated, and redundant, therefore these redundancies need to be removed, and code needs to be refined so that it is easy to maintain and understand.

The Comment Editor is used for the following purposes: 

-   comment

-   comment response

-   question comment

-   question comment response

-   editing all above types

-   Wiki comments

Tests need to be written to ensure that all the above mentioned comment editor variants are working properly and the functionality is not broken by any change made to any other part of code.

# STATEMENT OF MOTIVATION

I decided to choose this project because it really aligns well with my skillsets and interests. I have been a part of Public Lab community for quite a long time. So, I am very much familiar with the codebase now. This was the first open source community to which I contributed to. I am very thankful to all the mentors and maintainers of the community for being so supportive and helpful. Also, the documentation is very well written which makes it very easy to set up the project locally and start contributing to it.

#  Critical Bugs and Tests
**Bugs**

 -   We are going to assign separate comment ids for each comment box as we have done in the edit template of the comment box, So we are going to need <https://github.com/publiclab/plots2/blob/main/app/views/comments/_edit.html.erb#L50-L57> and <https://github.com/publiclab/plots2/blob/main/app/views/comments/_edit.html.erb#L50-L57> these lines of code in form template of the comment. So, my suggestion would be to make separate drag and drop (dropzone-comment.js) which has a function which accepts comment-id as one of the argument and any other argument if needed, this will help in making the comment editor more modular and reduce redundancies which can occur.

 -   Currently, the editor is initialized when the comment box is loaded on the page. Instead, I think there is another way we can do that and it will also help in preventing any kind of wrong behavior or bug. For example, let us suppose we have two comments that we have posted and we try the following steps :

       -   Click on the edit button of comment 1 (An editor for comment 1 is initialized with 
                comment id given as argument)

       -   Use the toolbar of comment 1  it will work fine.

       -   Now, Click on the edit button of comment 2  (An editor for comment 1 is initialized with 
            comment id given as argument)

       -   Use the toolbar of comment 1 again, Now the changes will occur in comment 2

       -   So, We can see that there is a critical bug in our implementation.

       To solve this I suggest we pass on comment ids to the toolbar also, and when we click on any 
        button of the toolbar let's initialize the editor which takes comment id as argument (if 
        present) 
       and then perform the button operation like bold or italic.

 -   The major challenge will be to implement these changes without breaking any part of the code because the dropzone and comment-editor has been used at various places on the website.

**System Tests**

 - Ensure when more than one comment editor is there on the page, comment content (drag and drop feature and toolbars) works fine. For example, a combination of reply to and edit comment editors.

 - We are testing the drag and drop feature for reply to comment editor as of now, but there is a need to test the edit comment editor also because both are rendered through different templates which are comments/form.html.erb and comments.edit.html.erb respectively.

 - Making changes in tests that may occur due to assigning separate comment ids to the comment editor (if any).


(There is a lot of commented code, we need to consider the use case of the code and remove that if it is not needed. For example in (assets/dragdrop.js)).


# TIMELINE/MILESTONES

Dec 1 ' 2020 - Dec 7 '2020

-   Assigning separate ids for each comment box so that proper text input gets selected while using toolbars. ([Github Issue #8478](https://github.com/publiclab/plots2/issues/8478))

-   Working on Research Notes Comment Boxes and finding bugs if any.

Dec 8 '2020 - Dec 14 '2020

-   Making toolbars consistent for all variants of comment editor. ([Github Issue #8475](https://github.com/publiclab/plots2/issues/8475))

-   Refine code and remove redundancies.

Dec 15 '2020  -  Dec 21 '2020

-   Refine and improve drag and drop code. ([Github Issue #8670](https://github.com/publiclab/plots2/issues/8670))

-   Ensure drag and drop functionality works properly.

Dec 22 '2020 - Dec 28 '2020

-   Ensure comment likes are working properly. ([Github Issue #5113](https://github.com/publiclab/plots2/issues/5113) )

Dec 29 '2020 - Jan 4 '2021

-   Remove templates option for simplification.

-   Ensure Recovery is consistently working.

Jan 5 '2021  - Jan 11 '2021

-   Writing tests for the following scenarios:

-   Comment

-   Reply to comment

Jan 12 '2021 - Jan 18 '2021

-   Writing tests for the following scenarios:

-   Comment just posted(Ajax)

-   Reply to comment just posted

Jan 19 '2021 - Jan 25 '2021

-   Writing tests for the following scenarios:

-   Editing existing comments

-   Editing comments just posted 

Jan 26 '2021 - Feb 1 '2021

-   Writing tests for the following scenarios:

-   Editing comment replies

-   Editing comment replies just posted

Feb 2 '2021 - Feb 10 '2021

-   Ensure that the question's comment editor and wiki's comment editor are also working properly.

Feb 10 '2021 - Feb 18 '2021

-   Take feedback from mentors and discuss if spinning out a new library for comment editor makes sense.

-   Fix bugs if any.

Feb 19 '2021 - Mar 1 '2021

-   UI Improvements for comment-editor.

-   Final evaluation and documentation.

# PROJECT CONTRIBUTIONS

These are some of my contributions in Public Lab :

**Pull Requests**:- I have opened 7 pull requests in the plots2 repository out of which 6 are merged and one of them is open. Link to past contributions:

**Merged Pull Requests**

-   [Text Overflow in people section](https://github.com/publiclab/plots2/pull/7349)

-   [Make user card size equal](https://github.com/publiclab/plots2/pull/7412)

-   [Sort subscription tags](https://github.com/publiclab/plots2/pull/7941)

-   [Follow Popover](https://github.com/publiclab/plots2/pull/8439)

-   [Comment Error Message](https://github.com/publiclab/plots2/pull/8456) (Comment Editor issue)

-   [En translation missing](https://github.com/publiclab/plots2/pull/8481)

**Open Pull Requests**

-   [Fix three-column format](https://github.com/publiclab/plots2/pull/8657)

**Issues created**:- I have opened 5 issues in the plots2 repository. Link to the issues:

<https://github.com/publiclab/plots2/issues/created_by/urvashigupta7>

**Other Significant Contribution**

-   [Correct tag count](https://github.com/publiclab/plots2/pull/8048)

**Contributions to other open source organizations**

 **OpenRefine**

-   [Pull Requests](https://github.com/OpenRefine/OpenRefine/pulls?q=is%3Apr+is%3Aclosed+author%3Aurvashigupta7)

-   [Issues](https://github.com/OpenRefine/OpenRefine/issues?q=is%3Aissue+author%3Aurvashigupta7+is%3Aclosed)

# AVAILABILITY

I have no time commitments as of now as I mentioned in my Outreachy initial application. In case if there is any change I will inform beforehand. Thus I will be able to devote 40 hours per week during the Outreachy internship period without any other obligations.

# WHY YOU SHOULD CHOOSE ME?

I am well familiar with the technologies used in the project such as Ruby, JavaScript, Jquery, HTML, CSS, Bootstrap, React.js and hence will prove to be a suitable candidate for this project. I have gone through the codebase and I have been working on this project for a while now and plan on contributing as much as I can in the future. 

I am willing to put in efforts for the learning curve required for the accomplishment of this project. I think I'll prove to be a valid candidate for this project if selected. I plan to contribute to this and various other projects available in the future on a regular basis.

These are some of my projects which uses above mentioned technologies:

[**Contest Arena**](https://github.com/urvashigupta7/contest-arena)

-   Login using OAuth 2.0, searching codechef contest details such as problems, contest rank, submissions details and timer using contest code or contest name and an IDE for practicing contest problems

[**Atharva (Group Project)**](https://github.com/pandafy/NM394_FreshlyBuilt)

-   Fetches and processes data from Sentinel-5p satellite and then detects air pollution hotspots using spatial-auto correlation and plots source trajectories of hotspots.

-   Shows trends/changes in the pollution levels of each hotspot.

[**ThinkLog**](https://github.com/urvashigupta7/ThinkLog)

-   Full Stack web application which allows user to log in, create, edit, and delete his/her own blog.

-   Searching blogs created by other users with the feature of real-time comments and likes.

# AFTER OUTREACHY

I am very keen to work with Public Lab even after the Outreachy internship ends. I have been in touch with this community since February'2020 and loved the experience. I ensure that I'll maintain my work and keep them up to date. I will be eager to add new features if required and also if there is any room for improvements in the project I would be eager to solve that too. Being a community player, I will be eager to help newcomers in their on-boarding to the project.