---
title: 'Design Ideas for Expanded Q & A Project'
tagnames: software, design, gsoc, web, developers, gsoc-2016, q-and-a, ui
author: ananyo2012
path: /notes/ananyo2012/05-11-2016/design-ideas-for-expanded-q-a-project.md
nid: 13101
uid: 468506

---

![](https://publiclab.org/public/system/images/photos/000/016/254/original/question_index_page.jpg)

# Design Ideas for Expanded Q & A Project

by [ananyo2012](../profile/ananyo2012) May 11, 2016 01:55

May 11, 2016 01:55 | Tags: [software](../tag/software), [design](../tag/design), [gsoc](../tag/gsoc), [web](../tag/web), [developers](../tag/developers), [gsoc-2016](../tag/gsoc-2016), [q-and-a](../tag/q-and-a), [ui](../tag/ui)

----

Hello everyone. Here are the very early designs of the Expanded Q & A project for Publiclab.org. 

#All Questions Page
As you can see in the above image I intend to make a 3 column display for the the Questions page. Each box will contain the title of the question which will be linked to the show page of the question. It contains a list of tags related to the question. The number of tags displayed will be limited to a number of four or five.Along with the that it contains the likes/dislikes and the number of answers and number of views of the question. The time of the post is mentioned as number of days ago. This is similar to the format of Research Notes. The same type of Pagination will be kept. The Questions will be categorized as Recent and Most Popular similar to that used in research notes. There will be an additional category for ordering them as **Most Viewed** Questions.

#Questions Show Page

[![Question_Show.jpg](//i.publiclab.org/system/images/photos/000/016/115/large/Question_Show.jpg)](//i.publiclab.org/system/images/photos/000/016/115/original/Question_Show.jpg)

The Questions Show page will display the description of the question along with the title.The section just below the question description will contain the Like/Dislike buttons that will be be using the [act_as_votable](https://github.com/ryanto/acts_as_votable) gem. We can add Comments by clicking the Add comment button which will open the comment editor just below the comments section.Here is a how it will look.

[![comment_click.jpg](//i.publiclab.org/system/images/photos/000/016/116/large/comment_click.jpg)](//i.publiclab.org/system/images/photos/000/016/116/original/comment_click.jpg)

The date and time of the post along with the user will be mentioned in the right hand box. The user reputation can be given here by giving badges according to user activity(like expert, begineer etc.). This is similar to the stackoverflow model.

The Answers will be listed below the question section. The number of answers will be mentioned at the beginning of Answers section. The user who posted the question can select an answer as accepted and a accepted label will be shown below the answer. We can keep a check box for that. The answer editor will be at the end of all answers. It will similar to that of the Comments editor used in  Comments. Comments can also be added to each answer using the Add Comment button along with the Like/Dislike button.  

#The Answer Model

[![model.jpg](//i.publiclab.org/system/images/photos/000/016/094/large/model.jpg)](//i.publiclab.org/system/images/photos/000/016/094/original/model.jpg)

The User and the Node model will be related to the Answers Model using has_many relations. A Node can have multiple Answers. Also an user can have many answers associated with it. Answer will have many comments and will be related to Comment s using has_many relations. For that a new field **aid** will be added to the Comments model.

This is just the initial ideas for the Q & A Project. I will be coming up with more concrete ideas and updating this research note for more clearer view.

#Feedback
Feedback from everyone in the community is requested to make improvements to the Project. What other things are missing? What changes are needed?

Thanks and Regards!