---
title: "Outreachy proposal: Education-related usability upgrades"

tagnames: 'software, outreachy, first-time-poster, outreachy-proposals, outreachy-summer-2021, outreachy-2021, outreachy-proposals-2021'
author: mathildaudufo
path: /notes/mathildaudufo/04-26-2021/outreachy-education-related-usability-upgrades.md
nid: 26348
uid: 751138
cids: 28621,28624,28650,28651,28652,28660,28662,28692,28694
---

![](https://publiclab.org/public/system/images/photos/000/043/482/original/outreachy-logo.png)

# Outreachy proposal: Education-related usability upgrades

by [mathildaudufo](/profile/mathildaudufo) | April 26, 2021 12:09

April 26, 2021 12:09 | Tags: [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [outreachy-proposals](/tag/outreachy-proposals), [outreachy-summer-2021](/tag/outreachy-summer-2021), [outreachy-2021](/tag/outreachy-2021), [outreachy-proposals-2021](/tag/outreachy-proposals-2021)

----

## About me

Name: Tilda Udufo

Github: [https://github.com/TildaDares](https://github.com/TildaDares)

Email: [mathildaudufo@gmail.com](mailto:mathildaudufo@gmail.com "mailto:mathildaudufo@gmail.com")

Timezone: GMT + 1

Location: Nigeria

## Project description

Due to the growing community of educators using [PublicLab.org](http://PublicLab.org) content management system, the project aims to tackle a collection of systems, features, and fixes focused on educational users, and incorporating feedback from a community of educators. This project will include changes and fixes to the draft saving system, co-authorship model, and changes to username autocompletion scripts, all culminating in a smoother and more coherent system for educators across the US gulf coast who are working with students on environmental justice topics.

### Abstract/summary (<20 words):

Improvement of educational-related usability with functionalities that make it easy for educators to share knowledge to their students and pursue environmental justice.

### Problem

1. Separate author names with commas instead of 'with'. Replacing 'with' with a comma in  
[show.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/notes/show.html.erb#L37) will solve this. This could be a FTO issue for first-time contributors to work on.

![image description](https://publiclab.org/i/43379.png "Screenshot_2021-04-14_at_19.13.40.png")

![image description](https://publiclab.org/i/43381.png "Blog_Post.png") 2\. Add listing of draft posts to user profile pages. The fix would be to create a method in [tag.rb](https://github.com/publiclab/plots2/blob/main/app/models/tag.rb) that runs a where query on the Node table to select only nodes with a type of 'note' and a status of 3\. I'll write a unit test to check if `Tag.find_drafts` returns all of the `profile_user`'s drafts.

![image description](https://publiclab.org/i/43382.png "Screenshot_2021-04-14_at_12.06.03.png")

![image description](https://publiclab.org/i/43383.png "test_'Tag._find_drafts_returns_all_of_the_profile_user_drafts_do.png")

The link to the drafts page would be displayed among the user's activity ( research notes, wiki edits e.t.c). This location is perfect because it is easy to keep track of the number of drafts, it is easily accessible to the `profile_user` and it conforms with the style guide. The drafts would only be displayed if the `current_user` is the `profile_user`.

![image description](https://publiclab.org/i/43384.png "_admin_has.png")

I'll be using the font-awesome edit icon for the drafts page because it visually explains that this post is editable. The ellipsis menu will have a publish button so that users can publish their posts from the drafts page. 
![image description][1]

The present draft-post page looks like this:

![image description][2]
I do not think a draft post should have a comment section. Users should not be able to post comments until the draft has been published. Another issue is that if the warning alert message is cancelled/closed, users can no longer publish their drafts because that is the only place the `publish` button can be found.
Implementing all these changes would result in this:

![image description][3]

This way users will always be able to publish their notes even when the alert is closed and placing the `publish` button in the same location as the title of the post makes it easy for users to find.

3\. Add Bootstrap tooltips explaining latitude/longitude tags. The fix would be to add a method in [tag.rb](https://github.com/publiclab/plots2/blob/main/app/models/tag.rb) that checks if a tag is a location tag. I also added a delay of 500ms to give users enough time to click the location privacy link. I'll write a unit test for the `is_a_location_tag?` method.![image description](https://publiclab.org/i/43385.png "Screenshot_2021-04-15_at_22.59.13.png")

![image description](https://publiclab.org/i/43386.png "Screenshot_2021-04-16_at_00.21.50.png")

![image description](https://publiclab.org/i/43387.png "Pasted_Graphic_2.png")

![image description](https://publiclab.org/i/43389.png "This_is_a_geographical_tag_for_placing_this_content_on_a_map._Please_visit.png")

![image description](https://publiclab.org/i/43388.png "test_returns_true_if_tag_is_a_location_tag_do.png")

4\. Refine the display of co-authored posts on profile pages. To be honest I was a little undecided on what approach to take for this project task. Changing the co-authorship model would involve lots of changes since research notes, questions and wikis all have the co-authorship functionality. But I finally came up with a solution that would not involve too many changes:

```
<p></p><p>coauthored_tag = "with:" + name.downcase</p><p><span>&nbsp;</span><span>Node.where('node.uid = ? OR term_data.name = ? OR term_data.parent = ?', uid, coauthored_tag.to_s,       </span><span>coauthored_tag.to_s).order('created DESC')</span></p>
```

This would allow co-authored posts to be displayed and counted as regular posts on a co-author's profile page.

5\. Include high-relevance usernames in autocompletion results while typing into comment boxes. I'll be using [https://guides.rubyonrails.org/caching\_with\_rails.html](https://guides.rubyonrails.org/caching_with_rails.html) and [https://github.com/ichord/At.js/wiki](https://github.com/ichord/At.js/wiki) as documentation.

![image description](https://publiclab.org/i/43390.png "Ethan_Ethan_email.com.png")

6\. Refine design and details of newly relaunched dashboard with community input. The newly relaunched dashboard is amazing but there are a couple of improvements I think should be made if the community agrees.

a)	`Follow more Topics` card:  
![image description](https://publiclab.org/i/43391.png "Follow_more_topics.png")

- There's too much space between the card-header and the card-body. I think the `padding` on the card-body can be reduced so that it looks compact.

- I think using a different background colour for this card makes the site look more narrative. Users are able to differentiate between the main content and an aside. A different but non-distracting colour can be used for this.

- The card-header and card-body are not aligned. Removing padding from the card-body would fix this.

- The `Follow more Topics` card should also be made non-collapsible on desktop screens. The whole point of the collapsible card was to make it mobile responsive so since desktop screens have a larger width and more space the collapsible button is no longer serving it's purpose.

- `Click to add topics, or learn more` link: When a user looks at the first text in the card-body 'Click to add topics, or learn more', they might be a little confused. What are they supposed to click on? What if they are using a mobile phone and they cannot click? Where does the learn more link lead to? Using a more descriptive link will provide users with the proper context of where clicking the link will take them. The learn more link also leads nowhere. I'd suggest a fix but I have no idea what that line is supposed to do or mean so I'll just leave that for now and discuss that later with the community.

This is what the `Follow more topics` card would look like with all of these changes applied (except for the last point).

![image description](https://publiclab.org/i/43392.png "Follow_more_topics.png")

b)	`Add your location` button:

![image description](https://publiclab.org/i/43394.png "Screenshot_2021-04-22_at_15.16.44.png")

The `Add your Location` button looks out of place because it is not aligned with the featured blog post on the dashboard. This can be fixed by adding a `margin-top` to the button. So it looks like this:

![image description](https://publiclab.org/i/43395.png "Screenshot_2021-04-22_at_15.18.35.png")

c)	`Click to start following` link:  

![image description](https://publiclab.org/i/43399.png "Screenshot_2021-04-22_at_14.44.32.png")

- The text is very small. Users will find it hard to see this at the bottom of the page.

- Screen readers announce only the text within the hyperlink, so using vague or non-descriptive links like ‘following’ creates a barrier that does not allow visually impaired users to use the site. Web Accessiblity in Mind (WebAIM) has written [guidelines on hyperlink text](https://webaim.org/techniques/hypertext/#screen_readers).
Furthermore, a lot of users make use of their mobile phones to access the web so using 'click' makes the user focus on their mouse instead of the interface and implies that other modes of website navigation are not supported. I think using 'Follow more [topics that interest you][4]' is more action-oriented and provides information when read out of context. 
Also, I think the underscores before and after the text were meant to be horizontal lines with the text in the middle.

d)	Topic Cards:

![image description](https://publiclab.org/i/43401.png "Screenshot_2021-04-22_at_14.49.50.png")

-	Hovering on the `New post` button changes the text colour to a dark colour making it hard for the text to be seen.

![image description](https://publiclab.org/i/43403.png "Screenshot_2021-04-22_at_14.51.22.png")

The solution would be to change the background colour instead of the text colour on hover.

- There's a lot of space between each topic card

![image description](https://publiclab.org/i/43408.png "About_us_Store.png")

Reducing the `padding-top` for each topic card will fix this.![image description](https://publiclab.org/i/43409.png "Now_post__.png")

- Number of topic followings: Each topic card displays the number of users/people following that topic as a link. This link is misleading because a user will probably tap/click on that link with the aim of viewing the users following that topic when in fact the link leads to the url of the topic. This can be fixed by changing the url to [https://publiclab.org/contributors/tagname](https://publiclab.org/contributors/tagname') so that when users tap/click on the number of followings it shows them the people following the topic.

![image description](https://publiclab.org/i/43407.png "new-york-city_11_Following.png")

e)	`Share your work` button: I do not know why this button was removed but I think it should be brought back. On the new dashboard, the only way a user can create a post is when they click on the new post button on the topic cards. But what if the user is not following any topic, how do they create a new post? This is the reason why I think the `Share your work` button should be in the new dashboard. This way users can create a new post right from their dashboard without stressing themselves looking for that button. The `Share your work` button would be added under the `Follow more Topics` card. This way the button does not disrupt the flow of the page.
![image description](/i/43418.png "Screenshot_2021-04-22_at_21.52.23_copy.png")

Another thing I'd like the community to consider is placing the `share your work` button in the profile picture's dropdown menu. Placing this button there ensures that the user can create a post from any page on the website. This will improve the UX of [PublicLab.org](https://publiclab.org/).

![image description][5]

f) The featured Public Lab blog post has an alignment issue. Adding a margin-top to the 'From Public Lab blog' will fix this.

![image description][6]

7\. Moving the new v2 Dashboard redesign to be the default Dashboard, and moving the legacy dashboard to /v2/dashboard. This task is divided into four:

- Renaming all routes from v2/dashboard to dashboard
- Rename the folder views/dashboard\_v2 to dashboard
- Rename the dashboard\_v2 action in the home\_controller to dashboard
- Rename all references to dashboard\_v2 or v2/dashboard in the tests folder files to dashboard and dashboard

Each one of these tasks would make good FTOs

8\. Continued CSS/style refinements to the new beta print templates. There are a few minor issues I think need to be fixed.

- Headings and paragraphs should be aligned
![image description](https://publiclab.org/i/43411.png "Contributing.png")
- Color of links needs to be more pronounced so that users/readers are able to tell the difference between an ordinary text and a link. A deeper shade of blue will work.  
![image description](https://publiclab.org/i/43414.png "Screenshot_2021-04-19_at_15.19.38.png")
- It would also look nice if the `🎈 Public Lab: Print` at the top of the page was centred.

![image description][7]

9\. Add table of contents under an icon for wiki/markdown pages. I'll be using [tocbot](https://github.com/tscanlin/tocbot) library for this task. The library requires each heading to have an id. So I followed @warren suggestion and used a css selector to fetch all the headings and add unique ids before running the table of contents code. The documentation is very easy to understand and the usage is even easier. The only thing I had to do was run `yarn add tocbot` and then add this line `import * as tocbot from 'tocbot'` to [application.js][8]

![image description](https://publiclab.org/i/43415.png "where_to_render_the_table_of_contents.png")

The menu will include headings and subheadings. This is not the final look of the menu, a few stylings can still be added. I think a fixed menu should also be considered so that the user does not have to scroll all the way up to access the menu.

![image description](https://publiclab.org/i/43416.gif "Screen_Recording_2021-04-17_at_15.14.16.gif")

10\. Accessibility: Making all of these features/fixes accessible for everyone is a very important part of this project.

### Timeline/milestones

![image description](https://publiclab.org/i/43417.png "Screenshot_2021-04-23_at_00.41.38.png")

### Needs

Availability of mentors to give feedback on PRs, answer questions and clear confusions.

### First-time contribution

First Time Contribution: [https://github.com/publiclab/plots2/pull/9387](https://github.com/publiclab/plots2/pull/9387)

FTOs I opened: https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3ATildaDares+label%3Afirst-timers-only

PRs: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3ATildaDares]( https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3ATildaDares)

[https://github.com/publiclab/PublicLab.Editor/pull/710](https://github.com/publiclab/PublicLab.Editor/pull/710)

Recent Activity: [https://github.com/search?p=2&q=commenter%3ATildaDares+org%3Apubliclab&type=Issues](https://github.com/search?p=2&q=commenter%3ATildaDares+org%3Apubliclab&type=Issues)

### Experience

I started learning Ruby on Rails last year during the pandemic. During this time I gave all my attention and time to sharpening my web development skills and since then I have developed a number of projects with HTML, CSS, Javascript, React, Bootstrap, Ruby and Ruby on Rails.

One of the projects I worked on is a Facebook clone. I learnt a lot from this project but most importantly I learnt how to write better code. The project was larger than most of my other projects, so clean code was essential.

Github Repo: [https://github.com/TildaDares/odin-facebook](https://github.com/TildaDares/odin-facebook)

Live: [https://sheltered-lowlands-27506.herokuapp.com/](https://sheltered-lowlands-27506.herokuapp.com/)

I also made a flight booker app where users can search and book flights (not real flights). I learnt how to dynamically generate dropdown lists and how to seed databases. I used HTML, CSS, Bootstrap and Ruby on Rails to develop this app.

Github repo: [https://github.com/TildaDares/odin-flight-booker](https://github.com/TildaDares/odin-flight-booker "https://github.com/TildaDares/odin-flight-booker")

Live: [https://evening-ravine-67117.herokuapp.com](https://evening-ravine-67117.herokuapp.com/)

### Teamwork

During my two years in school studying for an Advanced Diploma in Software Engineering I worked with assigned groups on school projects. We worked on a Furniture Website where I was tasked with developing the front-end of the site. Consistent communication between my team mates and I was an essential part of the success of the project.

We also had to work on a Baby Store android app in which I prepared the documentation of the project.

### Passion

Ever since I can remember I've been surrounded by trees and animals (poultry). Most times when I'm returning from school, there would always be someone seated under the shade of our tree at the entrance of the house. Everyone was always drawn to our compound because of the trees, it gave them some kind of comfort, peace and protection. The birds we reared in a free range system, showed me the importance of having a clean environment as easy access to clean water and provision of healthy food at specific times of the day ensured the survival of the birds, especially the chicks. They also add beauty and watching them go about their daily activities is intriguing. I am very passionate about my environment and helping to save it is more than just an internship, it's purpose.

My development in coding grew because I had free access to classes, videos and the likes on the internet. If these were limited to only a specific class of people, then my software development would have been stunted and I believe this experience applies to other people also. So, open science or environmental justice? I am passionate about both.

### Audience

I live in Lagos which is one of the most polluted cities in Africa, I also hail from Delta state where oil spillage has greatly limited farming and fishing activities of the residents, so I know how important education about the environment is. Public Lab is a community filled with people who genuinely care about their environment and are making significant contributions to help the environment. I love Lagos and empathise with Deltans and the fact that I'm working on a project that makes it easier for students and researchers in Nigeria and all over the world have access to information about their environment and techniques and technologies to make it better makes the future seem brighter. So this project is for everyone who is trying to save their environment by sharing their knowledge.

### Commitment

_My schedule is completely free so I'll always be available. I'll be working for 40 – 45 hours from Mon-Fri._

  [1]: /i/43426.png "Screenshot_2021-04-23_at_11.23.58.png"
  [2]: /i/43427.png "Screenshot_2021-04-23_at_11.33.56.png"
  [3]: /i/43428.png "Screenshot_2021-04-23_at_11.52.50.png"
  [4]: https://nowhere.com
  [5]: /i/43429.png "Screenshot_2021-04-23_at_12.01.44.png"
  [6]: /i/43474.png "Screenshot_2021-04-26_at_09.45.38.png"
  [7]: /i/43463.png "Screenshot_2021-04-24_at_02.05.55.png"
  [8]: https://github.com/publiclab/plots2/blob/main/app/javascript/packs/application.js