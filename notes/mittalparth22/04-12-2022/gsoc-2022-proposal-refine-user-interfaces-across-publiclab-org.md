---
title: "GSoC'22 Proposal: Refine User Interfaces across PublicLab.org"

tagnames: 'software, gsoc, soc, first-time-poster, gsoc-2022, gsoc-2022-proposals, response:30348'
author: mittalparth22
path: /notes/mittalparth22/04-12-2022/gsoc-2022-proposal-refine-user-interfaces-across-publiclab-org.md
nid: 30352
uid: 785563

---

![](https://publiclab.org/public/system/images/photos/000/045/717/original/gsoc_img.png)

# GSoC'22 Proposal: Refine User Interfaces across PublicLab.org

by [mittalparth22](../../../profile/mittalparth22) | April 12, 2022 19:28

April 12, 2022 19:28 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2022](../tag/gsoc-2022), [gsoc-2022-proposals](../tag/gsoc-2022-proposals), [response:30348](../tag/response:30348)

----

## About me

**Name**: Parth Mittal

**Email**: [mittalparth22@gmail.com](mailto:mittalparth22@gmail.com), [parthmittal.201ec243@nitk.edu.in](mailto:parthmittal.201ec243@nitk.edu.in)

**Github**: [mittal-parth](https://github.com/mittal-parth)

**LinkedIn**: [https://www.linkedin.com/in/mittal-parth/](https://www.linkedin.com/in/parth-mittal-b98b50201/)

**Gitter**: mittal-parth

**Affiliation**: National Institute of Technology Karnataka Surathkal

**Field Of Study**: B.Tech in Electronics and Communication Engineering

**Location**: Bangalore, India

**Time Zone**: UTC + 05:30  

<br>
<hr/>
 
## Project description

This [project](https://publiclab.org/wiki/gsoc-ideas#Refine+User+Interfaces+across+PublicLab.org) aims at improving User Interface/User Experience (UI/UX) related features across PublicLab.org. This includes better interlinked navigation between wiki and related store pages, adding a suggestions page, developing a category tree interactive feature and other improvements that aid or enhance the overall experience on the website, particularly for educators. Some are navigational, some are stylistic, and some introduce new interfaces or ways of browsing content.

<br>
<hr/>

### Abstract/summary (<20 words):

As teachers increasingly use PublicLab.org in the classroom, we are looking to improve a collection of User Interface/User Experience (UI/UX) and related features on the platform. 

<br>
<hr/>
 
### Problem

The project can be divided into the following major goals:

  
1\. Better Interlinked navigation between wiki and store pages

2\. Template for random generator

3\. Navbar search box improvements

4\. Topic Tree

5\. Date-Picker for /tag pages

6\. Changing information hierarchy on profile pages

7\. Streamline the process for teachers becoming moderators (to be done)

#### 1\. Better Interlinked Navigation

 - ###### Backend
  The different approaches can be understood using the below flowchart:

    
  <div style="position: relative; width: 100%; height: 0; padding-top: 70.7071%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE9gNzNrpc&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

-><sub>Fig (i) - Interlinked navigation frontend flowchart</sub><-

 - ###### Frontend
  The corresponding different approaches for the frontend can be understood from the below flowchart:

  <div style="position: relative; width: 100%; height: 0; padding-top: 70.7071%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE9fW1lwa0&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

-><sub>Fig (ii) - Interlinked navigation backend flowchart</sub><-


#### 2\. Template for random generator
- ###### Backend
  Can be understood from the following process flow diagram:

  <div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
 padding-bottom: 48px; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAE9aDtD_I8&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>

-><sub>Fig (iii) - Random generator backend process flow diagram </sub><-

- The following code snippet displays a general overview of the above proposed idea:

  **`app/controllers/wiki_controller.rb`**

  <script src="https://gist.github.com/mittal-parth/0b929f6de0f006e3bc347b41fd3fefff.js"></script>

  **`app/models/tag.rb`**

  <script src="https://gist.github.com/mittal-parth/0e33618cf23bbacb471390e76e211ae5.js"></script>

 - ###### Frontend
One of the three ways can be adopted:

    **a) A list of nodes same as the look on [`/subscriptions/digest`][1]**

    ![image description][2]  

    <sub>Fig (iv) - Random generator UI: Idea-1</sub>

    Pros:
    - Consistent with the PublicLab design language as it has already been implemented on another page.
    - Offers a Call to Action to the user because of its spaced-out look.
    - Can be lazy-loaded.

    <br>
    Cons:
    - Takes up more space - would lead to a long page with a lot of scrolling.
    
     <br>

    **b) A compact grid of nodes:**

    ![image description][3] 

    <sub>Fig (v) - Random generator UI: Idea-2</sub>

    Pros:
    - Ability to insert more content in lesser space.
    - Keeps the length of the page short.
    - Can be lazy-loaded.

    <br>
    Cons:
    - Might fail to grab the user's attention because of its compact look.

    <br>

    **c) A list of cards on the sidebar:**

    ![image description][4]

    <sub>Fig (vi) - Random generator UI: Idea-3</sub>

    Pros:
    - More coherent look - preventing a long content page.
    - Grabs readers’ attention even without reading the current wiki entirely.
    - Would go well with the interlinking of products look, as discussed earlier in fig (ii) Product Slider.
    - Versatile with different types of content.

    <br>
    Cons:
    - Cannot be lazily loaded - might affect page loading speed.
    - Grabbing the attention of the user might also lead to distraction.
    - Edge case: Might look absurd on wiki pages with significantly less content as the sidebar might become longer than the main conte
    <br>

<br>

- ###### More suggestions - Add a User Feedback option
An additional link entitled 'Improve Suggestions' can be added to refine results based on user's interest.
This link would then open up a modal to take user input.

![image description][5]

-><sub>Fig (vii) - Improve Suggestions</sub><-

![image description][6]

-><sub>Fig (viii) - Customization modal</sub><-

Here 
<br>

- *Views* and *Likes* accept numeric input
- *Date range* displays a dropdown menu to choose from preset date ranges
- *Choose Tags* allows the user to select multiple tags. The tags would be the normal tags associated to the wiki.

<br>
<hr/>
#### 3\. Navbar search box improvements
 - ###### Backend/ Implementation
    - Since we want to manage two different ways to search, we can divide the typeahead dropdown into sections. 
    - One section with a link to "Search for this term" leading to the `/search?q=<>` page.
    - Another section displaying all the suggestions with the heading as 'Tag Pages' to indicate that all suggestions below this heading would lead to the `/tag/<>` page. This can be achieved using Bootstrap's [menu header][7]
    - Since the dropdown menu is loaded using the [Bootstrap-3-Typeahead][8] plugin, I wish to add the above two items using jQuery.

<br>

 - ###### Frontend
![image description][9]

-><sub>Fig (ix) - Navbar search box</sub><-

<br>
<hr/>

#### 4\. Topic Tree

- The topics and subtopics mentioned on [https://publiclab.org/wiki/topics][10] can be used to group topics.
 - I wish to achieve the UI using Bootstrap’s [Collapse][11] component. Each major topic would form the headers of the accordion, and subtopics will be displayed when the accordion opens.
 
     ![image description][12]

-><sub>Fig (x) - Topic Tree</sub><-

 - However, each major topic here (say, water) also has its own wiki ([https://publiclab.org/water-quality][13]). Since clicking on the major topic now opens or closes the accordion, it wouldn't be intuitive for the user to click on only the text to read about the major topic. Thus, we could also have each major topic's wiki as a subtopic inside the accordion. This may require some renaming like soil -> soil-quality to avoid repetition/ambiguity.
 - A new route and controller action for /topic-tree will also be required.

<br>
<hr/>

#### 5\. Date Picker for /tag/__ pages

- An option named *custom* can be added to the current list of options in the drop-down menu of *Sort By*.
 - This would then trigger a modal to allow the user to choose a date range. I wish to achieve it using Bootstrap modals. Here is a look at the possible UI:
 
    ![image description][14]

    <sub>Fig (xi) - Date Picker custom</sub>

    ![image description][15] 

    <sub>Fig (xii) - Date Picker modal</sub>

 - The backend code would use the past month and past year columns/options. I propose using jQuery to pass the selected range to query parameters for easier filtering.

<br>
<hr/>

#### 6\. Changing information hierarchy on profile pages
- ###### Backend
    The current nodes are fetched via [this line][16]

    **`/app/views/tag/_profileCard.html.erb`**

    <script src="https://gist.github.com/mittal-parth/3b8dea0a7194befa1720a80dd3d32005.js"></script>

   The definition of find_nodes_by_type can be found [here][17]:

    **`/app/models/tag.rb`**
    
    <script src="https://gist.github.com/mittal-parth/719a670042b22084bec1fd875a79a669.js"></script>


    This can be modified to have an optional author_id parameter to fetch records that are authored by the user only.

    **`/app/views/tag/_profileCard.html.erb`**

    <script src="https://gist.github.com/mittal-parth/2062148948fa3f2497a0833a8886b2d8.js"></script>

    **`/app/models/tag.rb`**

    <script src="https://gist.github.com/mittal-parth/a21aaae03bd47efce22c73ace79d3dd1.js"></script>

 - ###### Frontend
The output produced on the profile page would be like this:

    ![image description][18]

    <sub>Fig (xiii) - Information hierarchy on profile pages comparison</sub>

    Since the all posts would be by the same user now, the name of the user can be removed as well, which would appear like this:

    ![image description][19]

    <sub>Fig (xiv) - Information hierarchy on profile pages suggested look</sub>

<br>
<hr/>

### Timeline/milestones

![image description][20]

-><sub>Fig (xv) - Timeline</sub><-


<br>
<hr/>


### Post GSoC
After completing the GSoC project, I would catch up with any issues or needs that might arise with the implemented project. I intend to continue being part of the Public Lab community by helping maintain the plots2 repository, assisting newcomers, opening new issues and reviewing PRs.

<br>
<hr/>

### Needs

I would like and appreciate constant guidance, support and feedback from my mentors and others involved in the community regarding my work. 
I would need the dataset of all the nodes on the PublicLab website to discuss about the threshold values for the random generator. I would also require the collection IDs of the product collections on the Public Lab Store (depending on the approach adopted for the interlinking of products).

<br>
<hr/>

### First-time contribution

I have been an active member of the community since January 2022. From the beginning, PublicLab has been a very welcoming, supportive and fast-moving community. I have made my contributions through Pull Requests, Issues, Weekly Community Check-Ins, and being active on Gitter for the plots2 project.  



Links:

 - [Comments][21] 
 - [Issues][22] 
 - [PRs][23]

<br>
<hr/>

### FTO Issues

Since my project involves a lot of UI changes, minor issues are bound to be left behind. I will be using this as an opportunity to create as many first-timer issues as possible to welcome newcomers. Since there are multiple approaches to a goal, predicting an exact number of issues would be difficult. However, some of them that cover a broader range are as follows:

 - Convert plain string to translation string at various places wherever
   required.
 - Alignment issues
 - Issues regarding responsiveness

<br>
<hr/>

### Experience

I love creating new and exciting projects through programming and I have experience working with Ruby on Rails, Django, Bootstrap and React. Here are some of my notable projects:

 - [College Inventory Management System][24] - Full Stack Web Application to
   facilitate sharing of resources in college clubs. The system provides
   access to specific features based on roles, namely, Admin, Convener
   and Member.
 - [Cash Flow Minimiser][25] - Front-end application to help users visualise
   and minimise cash flow among multiple transactions. It utilises Min
   Heaps to achieve optimal time complexity.
 - [Progressive Web Application with OAuth 2.0][26] - An application that can
   be installed offline as a PWA, allows Sign-In with Google using
   OAuth, media and Speech-to-Text input.

<br>
<hr/>

### Teamwork

 - I am a full-stack Web Developer at [IRIS, NITK][27], an online student-led
   Information Management System (MIS) portal developed on Ruby on
   Rails, digitizing all administrative and academic activities within
   my college. I have worked on developing a multi-role approval flow
   system, adding conditional fields support to the Forms module,
   refactoring and enhancing the Faculty Appraisal Module - all of which
   included lots of UI/UX work and constant collaboration with the team.
 - Previously, I have also contributed to the open-source organisation
   Zulip. Here is a [link][28] to my contributions at Zulip.
 - I am part of the Google Developer Student Clubs at my college where I
   have helped organise various tech-related events.


<br>
<hr/>


### Passion

I really appreciate how PublicLab tools help make the world a better place. I resonate with the project as solving real-world problems has always been at the forefront.

Secondly, I love how the community is very supportive and welcoming to newcomers. I have always received quick responses and constructive feedback from the community, which is the best part about it. I also like the concept of Weekly Community Check-Ins as it feels like we are a well-knit community even though we have never physically met each other.


<br>
<hr/>


### Audience

Since the project is concerned with UI/UX changes, it would impact almost everyone using the PublicLab.org website. Importantly, it would enhance the experience of educators using the website.

<br>
<hr/>

### Commitment

Since I am entitled to no other major commitment during my summer holidays, I plan to give 40-45 hours/week till July 17th. Thereafter, I can devote 15-20 hours/week due to my academic work. However, I would ensure to make up for it by working for longer duration during the vacation.

<br>

  [1]: https://publiclab.org/subscriptions/digest
  [2]: /i/45702.jpg "Suggestions_page.jpg"
  [3]: /i/45703.jpg "Suggestions_page_grid.jpg"
  [4]: /i/45704.jpg "Suggestions_page_sidebar.jpg"
  [5]: /i/46140.jpg "Improve_suggestions.jpg"
  [6]: /i/46142.jpg "Suggestions_user_input_modal.jpg"
  [7]: https://getbootstrap.com/docs/4.0/components/dropdowns/#menu-headers
  [8]: https://github.com/bassjobsen/Bootstrap-3-Typeahead
  [9]: /i/46135.jpg "Navbar_new.jpg"
  [10]: https://publiclab.org/wiki/topics
  [11]: https://getbootstrap.com/docs/4.3/components/collapse/
  [12]: /i/46134.jpg "Topic_Tree_new.jpg"
  [13]: https://publiclab.org/water-quality
  [14]: /i/45711.jpg "Date_picker_1.jpg"
  [15]: /i/45712.jpg "Date_picker_2.jpg"
  [16]: https://github.com/publiclab/plots2/blob/main/app/views/tag/_profileCard.html.erb#L10
  [17]: https://github.com/publiclab/plots2/blob/main/app/models/tag.rb#L96-L111
  [18]: /i/45714.jpg "Info_Hierarchy_collage_2.jpg"
  [19]: /i/45715.jpg "Info_Hierarchy_After_2.jpg"
  [20]: /i/45716.jpg "Timeline.jpg"
  [21]: https://github.com/publiclab/plots2/issues?q=commenter:mittal-parth
  [22]: https://github.com/publiclab/plots2/issues?q=is:issue%20author:mittal-parth
  [23]: https://github.com/publiclab/plots2/pulls?q=is:pr%20author:mittal-parth
  [24]: https://github.com/mittal-parth/Inventory-Management-Django
  [25]: https://github.com/mittal-parth/Cash-Flow-Minmiser
  [26]: https://github.com/mittal-parth/To-Do-App-2.0
  [27]: https://iris.nitk.ac.in/about_us
  [28]: https://github.com/zulip/zulip/pulls?q=is:pr%20author:mittal-parth