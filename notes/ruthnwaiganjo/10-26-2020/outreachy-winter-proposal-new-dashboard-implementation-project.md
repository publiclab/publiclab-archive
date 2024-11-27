---
nid: 24815
title: Outreachy proposal: New Dashboard Implementation Project
path: public/static/notes/ruthnwaiganjo/10-26-2020/outreachy-winter-proposal-new-dashboard-implementation-project.md
uid: 725565
tagnames: software,first-time-poster,outreachy-winter-2020,outreachy-2020-winter-proposals,response:24687
---

# Outreachy proposal: New Dashboard Implementation Project

## About Me

Name: Ruth Njeri

Location: Kenya

An interesting fact about me: I like trying out different recipes even though they fail most times :), I also like looking at food pictures and tasting different foods!

---------

## Project description

The Public Lab Dashboard has a new design that makes the user interface more user friendly in addition to improving the user experience. This has been done by reducing the number of items displayed on the dashboard and shifting the focus on the user as opposed to the content.

---------

## Abstract

With the latest design available. I would like to join the Public Lab's team in the implementation process using Bootstrap 4. The tasks needed for the implementation have been shared and I have grouped them into two;

Part 1: Create a new 'all posts' page.

Part 2: Implement the latest Dashboard design.

Throughout the implementation, there will be iterations of testing, review, and feedback.

---------

## Part 1: Create a new all posts page

- A new 'all posts' page. This is based on the '/tags/' design.
![image description][1]
- The main aim of the redesign is to make the whole application standard, I agree with using the tag page as a model for the 'all posts' page. I look at it as a form of 'filter' for the posts.
- A new URL '/dashboard/all' I think this makes sense because the posts page shows additional information such as comments and naming the URL '/research' does not cover the entire scope of the page.
- A comments tab that leads to the comments section that displays each comment as a card.
![](https://lh4.googleusercontent.com/PK5fGs2ugdR6L2OKXkJAqM7ZFFqWnYbosY3JH2gHcTiHxwXBz7nUH5LPnsMLKRC9kZYzJFwbVQ7DMk7dGoP-pfNI2AH9QcNTGSIiM9fPNzCEofpG43RfR8DEpg0exIXEO5JSVVcV)

Perhaps the comments cards could have the profile image and a description of when the commenter was active. Like the image below;

![](https://lh4.googleusercontent.com/UGmoSZ65MIoXjsWh_YCznuTBauKlMlXVJmD5CZiaPbYnf_MpFdaFzyioyvn0SkLdjsDqG_8v63nEsIM_3HdKYsp6gK5pzXTqLJ3mfL0MQEa93hLcgaey99X_r-vv-3Km9spac5OP)

![](https://lh4.googleusercontent.com/UXjS5zGPpJ60gsR22THwQ_c-f9Zv7OcgdNcvjjJYhBuL8VqPOUmqMdpd1Lb_OZbWGZ0-2MZyU53RHv6Rfdytsu8di_7f8jBCx9k0bwoJNfotJAhl3Lkm-lxUqfwi1hoCeupDqEnK)

- The current suggestion is that the "all posts" will not have a sort by function but I think it should be present because a user may want to view posts with the most views and highest likes in all tags and this will be possible in the posts page.

- Also, a user might find it interesting to see which posts have the highest number of comments to find out which topics have the most interaction.

![](https://lh6.googleusercontent.com/JLHug9uJm0dBN_eIKA5WMZnMnyM6kDBvDMcrwydYPn8HQt_1tt-UxTsY3QhHauIRPUxKLeHDIT9Dm1bhEGMnPi4hpEUm6mwdFe92zPuWxX3Tc4QGfFegFFygCJwojkj8sxmmBqCI)

- Linking the all posts section in the Dashboard section. My suggestion would be adding it before the Follow more topics section since it is an additional link to all posts with all topics. ![](https://lh4.googleusercontent.com/Stp2dMT8AzM1bOtUEkghfFrN1vuOGlltpjzxGINZd9gtz_1oJEJ1LLCVGc4ZMus0FbZoKPfbHbAlrSjT-fxpKmMEiCpdVA8hhck0pYerMBav_VZJMk8tuEN1kzvnJBS8knuUeSHN)

with the whole Dashboard View

![](https://lh6.googleusercontent.com/sESmpQLMdi1C5yumXcsVZK9itjqkX7wuQ2Au_bRRp9dij_iT02AVZlfv1jSAR6gKEiKjgQ_3ihnYvZLMMxr-6eAE2PAXIdL9n0M76VSRTfRIRy9cfcP4arsPUl5eDkdvgqE5Dwr8)

---------

## Part 2: Implement the latest Dashboard Design

- This is the latest Dashboard design;

![](https://lh4.googleusercontent.com/NybaxmPz3nP5z_FPYfzgnmr6sHCv6jz9p6T5Ej7RP1tBZkBL7pmGA8w_0c8avz1dpQ2viL2tJatCCKLV038O5787RqLnWXBqUyl7tVCi7XVfzy3VgCVTO9vX6ATQKZAeOZHc9DcM)

- It will initially contain a new URL '/dashboard2', that will be tested before implementation![](https://lh5.googleusercontent.com/Ib17NJZoDDug1sw54DQ1aI1tS66FlkYtgzIa27HSueCe1rRqR_HDiR0ehvuJrxVmCBJTaRdwHPRvgzJD-OwNote0g-mbjPsKV-xkiPFMQZnNlSFdWx-I0KYI2hNjLPbLfzZqhcDI)
- It will display a list of topics the user has subscribed to.
- Displays a list of more topics to follow on the collapsible sidebar.
  - If a user is following less than 3 topics, a suggestion to follow more featured topics will be displayed.

![](https://lh5.googleusercontent.com/p0U9INC6vZXcyD4XEg-Ml1yRM8G6d_dtnhSdDpOCuu-bfm-ngz0oTlgZob0tsd861j042rHJepQrMR8uxsEUMNrxEWPxRETaStvrNfkKcR82oszARrtr7qpOEWUA2npKlZqMZbZg)

- Add a link to features for the admins. Either on the navbar or beneath the Follow Topics section. I think it should be present on the navbar, that way, the admin has access to the features page throughout different pages.

![](https://lh3.googleusercontent.com/_Z0KrShCy1-TRr_eiJ_o9mF0mLAWikt8LfCbyTHkUwRqIKtP7uDJrSqWdBeOvrn651WCBU93WaRdEK-i2Fa8I3H4RdLCq_DeeC2j4zDgt6rh23z5HcMRar-ozzrjw7pA5zMlZW-S)

or

![](https://lh3.googleusercontent.com/fsOAz5fJ_OI-Rn1BjcUb9uFDaxUYqktPc-ZUzNn9xg9Cdt-Nng8ta6TiTPT5vcMPs-cYfuo8dqQ4XldO8mNX0XkZASE0_8J8pFEfypMdXounoYSWdvt9FUSESJYBAI3lbPcYLK4x)

- Mobile responsiveness that collapses the "follow more topics section" and lists additional topics the user can follow beneath with a notice to follow more topics if the user follows 3 or less.

![](https://lh5.googleusercontent.com/K1sdYF7QbJYV3TrDMsAebW-k3gEp-BXIUj2QyG9JH95FUVh6U8_LrrfwY-SrQD7j_WEbkVOZjyb1OnlmpFb865pqviPs2R483cmYUoGUaKCzkg2Nt65Kcd6Vx8NC3-31_zIPkLPA)

- Enabling the use of autocomplete on the topics search at the sidebar, which will be similar to search in the tags page which uses typeahead.

![](https://lh3.googleusercontent.com/yGcCBgUbMZ_Jsy5PaOVg0ue6kXV7dR1sjgfwSpxN_suXcNAwSGu2bCfX3gQ0xzZ5mvhPPnMJSHCuNN_5dR3gGOfiZNd6c9Ph-J5A7THw-ubUgGtg6idXzvhAPGHKGEsztzGLMMS7)

- Enable following of tags synchronously in the first iteration. Implement after using Ajax if time allows. In addition to using Ajax to add or remove subscribed topics.
- The 'add location' button will work as it currently does in the tags page, with a pop up of the map and a reload of the page when saving.![](https://lh6.googleusercontent.com/2x00BOktFVDrJdioeWhJhCZlW4nUxpe2b2zH8btyvxkBWcsVBin6iz8fHGjYkcRmAmCqc8-zG2nCcON4IEGXBT43eidBcKCWDoPmIRw50mbhrdB-t-iDixPWiVQyrubw6B8wJ5U9)
- Once a user has entered their location, the nearby location will be displayed, with a button to view on a map.

![](https://lh6.googleusercontent.com/7A3t_4J5vnNVGksrC82YM9nK9n-Zeal4tOVsiUgEa1fVQenk2QYI3-T0LqMjsanZR8g4nbyOkpBF11W38a-0ehwZftOrzv5J60DXrvDdodRF85K0polS_aKj4KF_9JK_qbM_oTi3)

- The new dashboard will have trending topics displayed at the bottom of the page.![](https://lh5.googleusercontent.com/T4ck7Hiqyi9PaMVnJt1KLgV7LH3wlt_0gTFraVPPJkV-D8w9DfB_Jj6A-UnK-14qXCX9Mv40a2B-42pzeTOkvWEOgiuoBmhMaIO6Y28lvu9pVMgwCQH9uNp-76n4rZILaLeV6qpC)
- Display a blog topic pinned at the top of the dashboard, and look into allowing a user to subscribe to it via email possibly by adding a subscribe button, or on the list after a user clicks on the ellipses on the right side.

![](https://lh4.googleusercontent.com/bLkov3KaYZLOv2WB4io4VkNoybeTDfo32kWsgVn0p4FixOQjFIGqSERzXf-evGOZyVX4ll38rmMGeYPFuGoFxuaCLpxFr4Ia25-_fwzqOL-Y3l8WbipPkj8hzmVXAQ3AA-fOcuSY)
---------

### Translation

There's an existing translation key for the current Dashboard. I intend to re-use this for the new Dashboard. 

```
 dashboard:
_node_comment:
  commented_on: "commented on"
  comments: "comments"
    _sidebar:
      wiki: "Wiki"
      discussion_list: "Discussion lists"
      all: "All"
      public_laboratory: "Public Laboratory"
      grassroots_mapping: "Grassroots Mapping"
      spectrometry: "Spectrometry"
      infrared: 'Infrared'
      air_quality: "Air Quality"
      water_quality: "Water Quality"
      developers: "Developers"
    _activity:
      activity: "Activity"
      all_updates: "All updates"
      dropdown:
        all: "All"
        research_notes: "Research notes"
        questions: "Questions"
        events: "Events"
        comments: "Comments"
        wiki: "Wiki"
      from_other: "From other"
      community_scientists: "community scientists"
      past_week: "in the past week"
      your_work: "Your work"
      share_work: "Share your work"
    dashboard:
      from_blog: "From the <a href='%{url}'>Public Lab Blog</a>"
      by: "by"
    _node_question:
      post_answer: "Post an answer"
      question: "Question"
    _node_wiki:
      new_page_by: "New page by"
      new_edit_by: "New edit by"
      changes: "Changes"
    _header:
      share_work: "Share your work"
      dropdown:
        share_activity: "Share a step-by-step activity"
        share_research_note: "Share a research note"
        ask_question: "Ask a question"
        post_event: "Post an event"
```

There are parts of the current Dashboard translation that will not apply to the new Dashboard design, such as the Activity section;

```
    _activity:
      activity: "Activity"
      all_updates: "All updates"
      dropdown:
        all: "All"
        research_notes: "Research notes"
        questions: "Questions"
        events: "Events"
        comments: "Comments"
        wiki: "Wiki"
```

I intend to work with the maintainers of the project in determining if:

 1. The current Dashboard translation should be re-used with /dashboard2
 2. After /dashboard2 has been adopted, whether the translation keys that are not needed should be discarded.

 A task for this has been added(Determine what parts of the Dashboard require new translation keys) which is a good candidate for an FTO. 

For the `All Posts`page translations, part of the tag's translations will be used since the `All Posts` page is similar to the tag page. A task for this has been created (Identify translations to reuse for the 'All Posts' page in addition to new ones needed)

```
 tag:
    blog:
      the_public_lab: "The Public Lab"
      blog: "Blog"
      stories_from_community: "stories from the Public Lab community"
      about_the_blog: "About the blog"
      research: "Latest updates"
      methods: "Methods"
      following: "Following"
      unfollow: "Click to unfollow"
      follow: "Follow"
      no_results: "No results found; try searching for '%{search}'"
      advanced_search: "Or try an <a href='%{url}'>advanced search</a>"
      by: "by"
      views: "views"
      read_more: "Read more"
      spam: "Spam"
```
---------

### Testing

A majority of the tests written will be functional for both the Dashboard and 'All Posts' page. Additionally, new system tests will be written for the Dashboard and All Posts page once discussed, since system tests are slow to run.

A TODO will be marked to remove the old Dashboard tests once the new Dashboard has been fully tested and approved. Snippets of the current System and Functional tests for the Dashboard and "All Posts" page are attached below.

##### Dashboard

- Functional

```
  test "should get research if not logged by /dashboard" do
    get :dashboard
    assert_redirected_to :research
    get :research
    assert_response :success
  end
```

(Test pinned blog on the page)

```
  test "check tag show page and confirm pinned post" do
    UserSession.create(users(:bob))

    # add a "pin" tag so this post should appear first
    nodes(:activity).add_tag('pin:blog', users(:bob))
    get :show,
        params: {
          id: 'blog'
        }

    assert_template :show
    assert assigns[:notes]
    assert assigns[:pinned_nodes]
    assert assigns[:pinned_nodes].first.has_tag('pin:blog')
    assert_response :success
  end
```

- System

```
  test "User can flag a node from dashboard" do
    visit '/'
    click_on 'Login'
    page1 = nodes(:one)
    fill_in("username-login", with: "Bob")
    fill_in("password-signup", with: "secretive")
    click_on "Log in"
    visit '/dashboard'
    find("#flag_node#{page1.id}").click()
    assert find("div.alert", text: "Node flagged.")
  end
```

##### Post

-Discuss with project maintainers whether system tests such as access to the 'All Posts' page and tests for certain elements within the page like 'Nearby Location' are required.

- Functional
     - Write functional tests similar to the tags page that relates to the 'All Posts' page since both 
        pages will have similar designs.

```
  test "should list only question in question view" do
    tag = tags(:question)

    get :show, params: { id: tag.name }

    questions = assigns(:questions)
    expected = [nodes(:question), nodes(:question2)]
    assert_not_nil assigns(:questions)
    assert (questions & expected).present?
  end

```
---------

### Accessibility

- The current Dashboard views contains some Aria roles that will be re-used for the new dashboard page.

```
    <button
      class="btn btn-outline-secondary btn-sm dropdown-toggle"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
```

- The "All Posts" page will also initially contain some Aria roles such as adding labels.
```
<button aria-label="More settings" >
```
- Keyboard navigation, for instance, using tab index.
```
 <input aria-label="Type your topic" type="search" tabindex="1">
```
- Maintain the semantic structure of the pages, by using element tags that describe the content such as header tags and button tags. For example, using a button tag to create a button as opposed to the span element that will not be easily read by accessibility readers.

The accessibility section will be implemented when creating mockups and implementing the views.

---------

### Timeline/milestones

Dec 1 - 7

- Create the new 'All Posts' URL
- Implement the mockup design for the 'All Posts' page
- Identify translations to reuse for the 'All Posts' page in addition to new ones needed.
- PR reviews and creating FTO issues in addition to other issues.

Dec 8 - 14

- Complete the 'Comments' tab section
- Write up tests on code implemented so far within the 'All Posts' page.
- PR reviews and creating FTO issues in addition to other issues.

Dec 15 - 21

- Plug-in real data in the rest of the tabs; Research notes, Questions, Wiki pages.
- PR reviews and creating FTO issues in addition to other issues.

Dec 22 - 28

- If approved, implement the sort functionality in the 'All Posts page'
- Implement mobile responsiveness on the 'All Posts' page.
- PR reviews and creating FTO issues in addition to other issues.

Dec 29 - Jan 4, 2021

- Implement the new 'Dashboard route'
- Implement the Dashboard mockup design.
- Determine what parts of the Dashboard require new translation keys(FTO issue)
- PR reviews and creating FTO issues in addition to other issues.

Jan 5 - 11

- Begin plugging in real data;
- Display a list of topics a user has subscribed to.
- Implement page that is displayed once a user clicks on 'Post' on the topics card.
- PR reviews and creating FTO issues in addition to other issues.

Jan 12 - 18

- Add logic to display a notice if a user has followed 3 or fewer topics.
- Add a link to the features page for admins.
- Add tests for implementation completed so far.
- PR reviews and creating FTO issues in addition to other issues.

Jan 19 - 25

- Resolve odd line folding on individual posts in topic cards(once I get clarity on this task.)
- Display blog topic at the top of the dashboard list, excluding it from the subscribed list.
- PR reviews and creating FTO issues in addition to other issues.

Jan 26 - Feb 1

- Look into blog subscription using email by adding a button or an option after the ellipses on the left is clicked.
- PR reviews and creating FTO issues in addition to other issues.

Feb 2 - 8

- Implement typeahead on the search bar on the 'Follow more topics' section.
- Implement mobile responsiveness on the dashboard page.
- PR reviews and creating FTO issues in addition to other issues.

Feb 9 - 15

- Implement following of tags synchronously.
- Implement tests for code implemented so far.
- PR reviews and creating FTO issues in addition to other issues.

Feb 16 - 23

- Implement code for the 'add location' button to work.
- Implement code to display location if a user has entered their location.
- Implement code to view location on a map.
- PR reviews and creating FTO issues in addition to other issues.

Feb 24 - March 2

- Add a list of trending topics at the bottom of the page.
- Test the Dashboard implementation done so far with the mentors to see if it can replace the main Dashboard page.
- Look at the translation keys from the old Dashboard no longer being used and add an FTO issue to remove them.
- Assess the accessibility of the pages.
- Implement any feedback from the test done.
- Implement Following of tags and add or remove subscribed topics using AJAX.
- PR reviews and creating FTO issues in addition to other issues.

Additional Tasks
- Remove old Dashboard tests(good fto issue)

---------

### Needs

I would be happy to receive continuous feedback on the implementations I deliver.

Currently, I am seeking clarity some of the tasks listed for the dashboard implementation;

- Resolve odd line folding on individual posts in topic cards. I'm not sure what 'odd line folding means

![](https://lh3.googleusercontent.com/ONU1p9PJuIHxzlN4MyUHJGG_hbVPWpeuAGOd9hDmYBFCDRMBIPXTWFV-HMmtNIoMQwx_Rl3Ar0K6Q0we4PvCL8-d78tYRe1KGcFOdawRt_fU9-Jl4kcVZ-6b3DebSo-DESNESbiT)

---------

### First-time contribution

- I made my first contribution on October 9th
  - [My First timer contribution](https://github.com/publiclab/plots2/pulls?q=is%3Apr+is%3Aclosed+author%3ARuthNjeri)
- I picked up another challenging issue to work on, that I am currently testing.
  - [Current task](https://github.com/publiclab/plots2/pull/8620)
- I have also opened 2 First-timer issues to help others begin collaborating on Public Lab. In addition to suggesting another one.
  - [First timer Issues I've created](https://github.com/publiclab/plots2/issues?q=is%3Aopen+is%3Aissue+author%3ARuthNjeri+label%3Afirst-timers-only) (open)
  - [First timer Issues I've created](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3ARuthNjeri+label%3Afirst-timers-only+is%3Aclosed) (closed)
  - [First timer issue I helped create ](https://github.com/publiclab/plots2/issues/8516)

---------

### Experience

I have been learning and worked with a team in delivering features in Ruby on Rails for about one year. I left the team to seek opportunities that would further enable my skills and learning goals.

I have participated in a Rails Girls workshop to guide new learners in creating their first Rails application.

Throughout my time learning how to code, I have always wanted to learn more about open source and making a contribution. This new experience will be beneficial in my open-source goals.

Some of the coding projects I have implemented include;

-  [Maintenance Tracker Application](https://github.com/RuthNjeri/UI-Maintenance-Tracker). An application that tracks maintenance requests.
-  [Problem-solving](https://github.com/RuthNjeri/Problem-Solving) a collection of algorithm implementation using Ruby.
- [Alexandria](https://github.com/RuthNjeri/alexandria) an e-commerce site for selling books.
- [Ruby Web APIs](https://github.com/RuthNjeri/Ruby-Web-APIs) a guide to developing efficient Ruby web APIs using the Ruby Web APIs book.

---------

### Teamwork

I volunteer with an organization called [KamiLimu](https://www.kamilimu.org/) that mentors students pursuing technical courses in University and College. I have been part of the management team for about two years. I assist in running the communication and PR in addition to mentoring about three students currently.

Throughout my participation with Public Lab, I have collaborated with other candidates in reviewing their pull requests, assisting in debugging failed builds, and discussing with the Public Lab maintainers on the implementation of tasks.

- [Reviewed Closed PRs](https://github.com/publiclab/plots2/pulls?q=is%3Apr+is%3Aclosed+reviewed-by%3ARuthNjeri)
- [Reviewed Open PRs](https://github.com/publiclab/plots2/pulls?q=is%3Apr+is%3Aopen+reviewed-by%3ARuthNjeri)

---------

### Passion

I love that the main aim of Public Lab which is democratizing science is also ingrained in the development of the application. The community is friendly and are open to helping each other without judgement.

In my current goal to begin contributing to open source, I believe that joining the public Lab community will provide a great learning environment.


---------

### Audience

The new dashboard and 'all post' design implementation will be beneficial to the Public Lab community. It will be easier to navigate the pages and simple enough to understand for new members joining the community.

The list of tasks needed for the project can also be implemented by first-time contributors such as creating new routes.

---------

### Commitment

I am currently available to commit to Public Lab fully throughout the duration of the internship period.

  [1]: /i/41270.png "Untitled_design.png"