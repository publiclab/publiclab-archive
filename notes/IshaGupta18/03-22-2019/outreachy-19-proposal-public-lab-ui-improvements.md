---
title: "Outreachy'19 Proposal: Public Lab UI Improvements"

tagnames: 'software, soc, outreachy, response:17359, soc-2019, outreachy-2019, outreachy-2019-proposals'
author: IshaGupta18
path: /notes/IshaGupta18/03-22-2019/outreachy-19-proposal-public-lab-ui-improvements.md
nid: 18806
uid: 568043

---

![](https://publiclab.org/public/system/images/photos/000/030/462/original/Copy_of_PublicLab_mockups.jpg)

# Outreachy'19 Proposal: Public Lab UI Improvements

by [IshaGupta18](../../../profile/IshaGupta18) | March 22, 2019 03:53

March 22, 2019 03:53 | Tags: [software](../tag/software), [soc](../tag/soc), [outreachy](../tag/outreachy), [response:17359](../tag/response:17359), [soc-2019](../tag/soc-2019), [outreachy-2019](../tag/outreachy-2019), [outreachy-2019-proposals](../tag/outreachy-2019-proposals)

----

## About Me

Name: Isha Gupta

Affiliation: Indraprastha Institute of Information Technology, Delhi

Location: Delhi, India

## Project Description

### Abstract/ Summary (<20 words)

Public Lab UI improvements

## Problem

Public Lab has various features well divided into different pages. There are some pages that need improvement in their design so as to increase user interaction and make them use the website to the fullest.

## Implementation

### Initialisation: Making card partials for different types of cards

-   Card Design- People's Page
![](https://lh5.googleusercontent.com/719ZTyPQzSb-H_4Y2nTZRMsxFxDpzsz6oD9dYDHVWRuXfHvdO2Oqgvbq9E-Il8X4p4wU8OFiRyQHQq17p4fllEtDvbcEeMu_qWhpYwy_UfKV_ABEuGr4JTZA3alxl-OEtvq8Jmh_)

-   Card Design- Tag's Page

![](https://lh6.googleusercontent.com/eHP_l3D_mNpA07cqEQjKqq9Gk6L9s2MAm8WHvMaxb6f5XzgOE5lAaAl9GzJQ01GdS2rNOKYRlGDXIOv88afJvny_CXCPuZ6f1fW6PjRgHAxR2kD1yUz5PWJTZJco_Mki06HYZLDn)

-   Card Design- Question and Answer
![](https://lh6.googleusercontent.com/30XHia4tXzMCsCaGy_dcnHTRpBQZoKCG_HFL-SgvzzwJe7mo8ytWTV8DZf__TAjVInR6ZGxi9N57PV24aVyq5MJYOL1Zx-vTIyGJ2fPPLjxplmWB1ctfO0exlRTqRSyBpPkGwQqf)

-   Card Design- Research notes and Wikis
![](https://lh6.googleusercontent.com/Bxk7x-JtGI66LX7g2eTI12oiishgr-6CLHnhitJZf_167IwekH5xU_hOrl5RGa6-c1PENpsxpPKBk9kpfvR_HXj4GL9kP5NdvNF0Bo6VF30Qzo4lLZMjyVnQXLt2CCp3pTJ8vqVz)

-   Card Design- Comments
![](https://lh3.googleusercontent.com/Jc8JZCbjT6xMj2MgqDWST82Z0qiWAk2TzzZT-HDBt_2EtdnF8H3JIPWOllMkTmMEJYZk52zt-a0mWsvljfUTNSTxtkFs08dNWRd_BWrC4Q6TWKHafG8-0ulAohUfxJhbqu1mHJ_v)

### Part 1: Profile Page

-   Features which can be present on a profile page:

	-   user's data should be encapsulated into a single page

	-   the user should be able to access their activities easily.

	-   The current design is too cluttered, although it includes all the information.

	-   This information, if organized in a better and more appealing way, will interest the user more.

	-   Utilize the available space to the maximum, but not overcrowd the page.

-   I think that the current amount of information is a lot to be present on just one page and we can represent it in a much more organized manner

-   Suggested Changes:
![](https://lh6.googleusercontent.com/DgLnfXBDTbCCuy7hBj0ZhZhUFg9j-ObpECq9lG2KWQsSy0YQMLrN5n9IDOCZur8ez_SNyypK5YXQuQ1mMv6oZwT8NusMIehljT3SrQeS3E9zHveQZQ1Q70HkQ1emcZbgMt1w5JXB)

1.  Firstly, we get rid of the activity graph, as there are very few users who have a proper activity graph, which looks good, but most of them have a sparsely populated and it basically looks like an empty grid and doesn't offer many conclusions.
![](https://lh4.googleusercontent.com/HHM7OjEnYUUjIti3XhBlc5CASJ4Jtids2cTalHqlHt7FpoZkwE77kkTyYXTJXKCHtf-C47UNew_4JX-IiUhJk16W9sHqNwINr1XUry5vfVS7ymBUr4itbOyjZ_5smcsJueIrfYlC)

V/S

Even a very active user has a less populated activity graph\
![](https://lh6.googleusercontent.com/oybc5holFfDpojN1d91ZzZvy8GhuTZKOClxoulYgGLkfWjzAZDgQy9trLD8s1RNyivBODuly3IhUdWa1otNZO75WuV6HXf35Jf5-X0_Y_Vebc51Kooq-6n2unpRimDFffXJ22uTC)

2. In the sidebar, we waste too much space to show a profile picture and associated tags in a vertical column. The profile picture's size can be reduced and the tags can be put in a box in one place. This way, we can increase the size of the rest of the page and get rid of the sidebar. We also show the user's basic information in a more concise manner now.\
![](https://lh6.googleusercontent.com/YeqULAHg1hFBDLrvwk4dY9CJ9h5Opzy_YJ1Fkty19is96HUudwGgLIbCOegCm7GVdOhB_n_ke_Y35CHqDnVUS3S7kMAn2_bubzwgUc9vxS36kMzf0fntX7-tQmt_J7tj6RDkaojO)

3. The cards in each of the tabs like research, wikis, questions etc are too cluttered

![](https://lh5.googleusercontent.com/JFQbwwGlBqAzJ629ayv6rCgRkVNK8Ke9HtxDsQ0kopclYRm6en8GwRkj-qZoZZBDaXY9ZDMOQtwMXVuCevGoYLjzUBR7DYoeIKJUMhPMRNouUbff9B_bFUJBv_-4kD033y9sLI0I)

This should be changed to show 3 cards per row with a little more information about the node, also the less important nodes are given as links in the about me section, so as to not overwhelm the user with a lot of stuff on the page.
![](https://lh5.googleusercontent.com/fLz7URVktsGzU4P9h0K4O3GQeupDdGZ0o0o5AJMywy79qBwP6ShPWRunOZAS4e6NBPYWxfARuGYnyhmFY1CPyB2arbegwyyxd6YUcTAP7b45z6H8WYuPdfkE_No8II7Rb85AiEyL)

4. In the proposed design, a "Tell us about yourself" placeholder text has been inserted for those who haven't written their bio. For those who have, this will contain the text and a "Read More" button which will collapse that div and display all the information about the person. This will save space and also, won't be too empty for people have a little to write in their bio.

5. The size of the map has been reduced because not everyone sets their location and it shouldn't take up a quarter of the space in the page. The map is but below the bio to give the information about the user in one place.

![](https://lh5.googleusercontent.com/gumPTkVqTZN2b8ahjeyRRl-MI59Q4k-AmNQfKs0lIj3qMYuaNFjOBsU7BGtdFBz34IRA1DRbcBq0rRLLIaEOgtmJPhxYjWPcnVPa_FMJA3851KzxvpQZt2X4ZFymajxHzg-vGJvY)

6. A map interface to display recent individual content on a map

-   Deprecating the activity graph, we present a more interactive graph which would contain nodes of different activities by the user.

-   This graph would look something like the one that is implemented for tags. < <https://publiclab.org/tags> >

-   Instead of fixing this map on the profile page, a toggle button that would toggle the User's location and User's activity graph will be implemented.

-   Clicking on a node in the graph will open the corresponding research note/question/comment etc in a new tab.

-   There will be color differentiation for different types of post.

![](https://lh5.googleusercontent.com/7E0k-HdjRg1rS6yw8d3pNqfy20nBi_YzKKutAil7Tv72R2Gnht1XJP4tWOmtVXlYOFwHeaJpUEDc2IR6qFMhTYVZz7YgrUu-ZJ2VPwTkHTT76mnw8_xUiZkffzUtt243Sy9F_PWp)

Complete View:

![](https://lh6.googleusercontent.com/nCZCniic57hPf5_8LZ3eK5cqIX3rJNcVDmNJkhfrqWV8cSson8zduLkuqUhfwPFzXZ_Xs7ifD2okq5WkWSK4uCQJ4sLGd9PB9TcE1NYLccRWveMfQIAO8i0S521fzo6a1dqQiDLl)

### Part 2: Dashboard

-   Currently, the dashboard shows different kinds of notes like:

	-   Comments

	-   Questions

	-   Questions which have been answered

	-   Research notes

	-   Events

-   They are shown in the order of how recently they were posted.

-   The problem with this is, not every user is interested in everything that is happening on the site. Dashboard is a feature for the signed up users.

-   The idea of a dashboard is to provide a personalized experience to the site's members and give them information about topics they are interested in and are relevant to them.

-   This is very important so that the user doesn't miss out on the updates on things they have subscribed to.

-   If the user wants to "unsubscribe" to a particular post or tags contained in that post, clicking on the cross button on the card will:

-   Unsubscribe the user with that post ie the function to unsubscribe will be called and the user will be unsubscribed to this, after which the post will be removed from the dashboard.

-   The card will slide out of the dashboard and next card will appear.![](https://lh4.googleusercontent.com/XP8EoeqNc_y1tZVCim4J9ujSTnpuO3ojQihq4tXnyWrjeQ8c_ClMExLd1iVh222Wbeoy6Z0gjfMHCfcs3JgDYZQkHtvI85kIfooVACPCIfmKVY1GclsnBl3xiBJVqROIG82pYPBH)

-   Another problem with the current design is the lack of consistency. There is a mixture of different kinds of posts and the color differentiation is

	-   Not proper to tell which post is of what type

	-   Doesn't look appealing to the user because of the structure in which the dashboard is made.

-   To solve this, card display should be used (which is being used at multiple places in the new design) and each card should be clearly marked with what kind of post it is.

-   The sidebar should include a map containing the location of the user, below which, the activity related to that place is mentioned. This would encourage the user to be more involved in what goes on at PL.
![](https://lh4.googleusercontent.com/E1iP8zuHguWnMMeMboZs7_u7-Ker70899IAfo04w1Kl0CyruGOS7yjSZqw-THow580U_xauuT3wMwIVUKCGRoN-6ZszxqKUBzROUQYw-ikJp3DbW3Zh-_6ckyRig_uYnnGy7cx0w)

-   People get motivated to see active contributors. In the implementation of "Featured Users" , the most active users should be displayed. This should be displayed in the sidebar, and the users who share location with the current user should be marked with a star.

-   To generate the interest of users, we add a "Trending" activity section that would suggest some tags for subscription that can subscribed using the multiple tag subscribe button.

![](https://lh4.googleusercontent.com/ReDwe3soVfKo0SeRHc2fWgHysoxtoF2i9EeJ-iAea4ciou0WXJSAEP3LcAqLL_I-gh14oxQW-ornSgtz_6soSmy1zjkXRCvEfuL6koNL1H-mLz6r-CXk4Q5o98kjD4gAcScnimYB)

-   A "Recent Activity" section in which all the posts, in decreasing order of their dates are displayed.\
![](https://lh4.googleusercontent.com/H2Zp7UbI05JlJkJ4RZy8HPh8igiBv62NLZ6AoHoYLYuB-LMubnYzFIZ9noZMHPIfkiXDcnpfP42L19pD7wk_Do5wEfmp5jqjk6uZ8FH32U1U0_C6Xz6X-IsAhnqmGgfRUyWg6zCO)

-   We can implement a "Recommended Tags" feature which would show some tags based on user's history and make them available for multiple subscription:

-   For this we can using caching at user's system.

-   Or we can keep a count of many times some tags were visited and suggest tags according to that.\
![](https://lh4.googleusercontent.com/oFdbQsPCNnh5z7MUQmhmrudVu9dbk-AOjx0m1qYNuVeYbUdeQ6ioRXY0Qif5WQXBbjmDZytxX2pc8Pik0yLHiNRxtZl6DRT21qvcDCyDa_LvSiqtBHp9w75x5d5FSt7bXc1H_bWU)

-   For NEW MEMBERS:

	-   During Sign Up, we ask the user to subscribe to some tags.

	-   When the user successfully signs up, they are subscribed to those tags.

	-   The dashboard is then displayed to them according to their preferences.

	-   This way, the user's interest is maintained in the site from the very beginning.\
![](https://lh4.googleusercontent.com/doGtbHwLKzLT6-zWNDZLd72WNsuqjTok-y6fgadfx11AvlzsqA4irLWBrs14xiriW5toyJujyMA8RM1KsOMLalal7K_wAgA0Yt_zQHZF9iec2qADuiD7THOQvhSkdx7EKr8L1bQ-)

-   Immediately after the sign up is completed (and we have the user in our database), we show the above modal and the user subscribes to the tags.

	-   The selection will be done through hidden checkboxes.

	-   A request is sent to a function written in subscription_controller.rb that subscribes the user to these tags and redirect them to the dashboard (instead of the subscriptions page, which is the normal flow).



Complete View:

![](https://lh6.googleusercontent.com/kQcY50ZqG09ZHIje0TFjqj_9f4AaNg0ijfMSj8a8p6hajWtBEePppgD4pnlzpJGVcCa1mlQY83gYwP4Z2WyN4b0mWM_2--9OdjOOqArZmzmKqabNFPAFaGUW7KATjBd0bmLDhrOi)

]

### Part 3: Questions page

-   Current Questions' page is very cluttered and in one go, the user doesn't get the idea of what can be done here or how to efficiently retrieve information.

-   There are 2 parts to redesigning this page:

	-   Asking a question

	-   Getting answers

-   Asking a Question:

-   Right now, asking a question doesn't help the user in writing a good question, and doesn't offer proper space to do so:

-   To give the user a better experience:
![](https://lh6.googleusercontent.com/dw60pmKfPHpVdViYcVGwMffwLNgkccfthpKAmGmjzvdfvH9pg2JXCajbeH-NvKE2PEB07oQ5ptFiy1mDoJkIVN4S0wTH6NReLdPMIjGcTLyFXmNjE-Y_sYTTMCjYBbGER7CtkUUx)

-   Convert the field to an entire text area

-   Autocomplete inside the text area, when the user begins to type

-   Give a tooltip/accordion/collapse to give tips on how to write a good question.￼![](https://lh5.googleusercontent.com/uGgh1-h4NwlgNrOoM5ceCWc4rT5OuVOqcXDCYS4rTrI2PH3gik-dHvJDxq1O292xDywLOg0mB77ZHXdkkr32IvtI6diSUrulyuw998QS9w_khVxRSwc3VGkz5R87Fx5VQ5EOTVVs)

-   Getting answers:

	-   "Trending Topics" tags can be displayed and on clicking on a tag from there, questions having that tag are displayed. There will be a small text box to enter the topic (with autocomplete), and corresponding questions could be displayed.

	-   Each card will contain only the questions related to that tag.
	![](https://lh6.googleusercontent.com/m1-CUrUDzPasWZ3yUheO-0rMYAy5WAb1HCgcb3sNFP1q2LYeLpH5vksRN9Vihx4BE3XXeD9IJxHvu_gxfWFxo0IpFFtIVk8NpqIxDawdVKbywwnLEMgtrNyNJr0XWGBOYIzVgD5b)

### Part 4:  Subscription stats page

-   The current subscription stats page is a big JSON containing tags as keys and the number of users subscribed to them as values.

-   To organize it into more conclusive data, number of subscriptions can be grouped in intervals and displayed like this:

-   Corresponding to every interval, are a couple of tags having those many subscription.![](https://lh4.googleusercontent.com/_pFNXtnkw_IryXPS1DHFIjkalMKe2Fjd2cICgjv7yvoxPrwYRIOx-YQ_gI1FjCtbZonrPNWO2P2_OyEcqXfYX-e4Iai5ebOct0R5QIDxenxyh1Fp3nFo9AZehBuOXZvg3bARbxGy)

-   On clicking a bubble, it expands and shows all the tags which have subscriptions lying in that range.

-   The size of the bubble (expanded or contracted) is proportional to the number of tags.

-   This makes a pure data page interactive and more informative.

-   Some work is in progress on this at < <https://github.com/publiclab/plots2/issues/4603> >

![](https://lh5.googleusercontent.com/3uPiZzMzzbPUF4wxm2Q1LupNdRbxnGuJiqdeYyee7Qe4LnU3gtueHi4Hk0Y96aXJVu9ALuu6BshFcLfefUuWCwurLbJsxp35EQ5GnHve3TtVrs5CMemAP48sGMoBeJ47f_S_RFzQ)

-   For doing this we will have to write a function that iterates over the JSON hash puts each tag in it's correct interval along with

-   The JSON data will be preserved in another route.

### Part 5: Per Tag Page

-   Currently the per tag page gives some information about the tag, some related tags to subscribe to and the activity involving that tag.

-   But we see that the page is too cluttered up, with all options at one place.

-   To improve this UI, we firstly need to give some space to different elements.

-   The "read more" will be a collapse and display the text about the tag.

-   Next, we need to put up the notes related to this tag. We can do it in the same way as proposed in the Profile Page design ie: Displaying each post in cards design.![](https://lh6.googleusercontent.com/7zw_F-srXDkLK6j0E9X2LWVbmWdeuguuDuEUQmuFj9tEw4oiL7R8HxRMoeVdDndZHZx_k4Z5hWh69IOXxVJRDCowSDLU5e0SZWR4yeeaE4vng4CVju0DjsdZVcCBqPuxYkVNQVTo)

-   We will be having a toggle button in Questions' tab that would toggle between "Recommended Questions" and "Featured Questions" which would give the suggested and best questions on that tag.\
![](https://lh4.googleusercontent.com/Ishuvh0K8ZTeaJnnlx0mp2QIwcasxVNu69lLVoysyODnZa_zYZYJ4ADbyc2jgf0OPOi1Oa0bBYh-4-k1B2hbcznvm9dYzIqumBeUlyd3yZS6msM38fI2uWMJPvfyVTo6PGt5ivFK)

### Part 6: People's Page

-   People's page arranges the users according to how recent their activity is.

-   It also shows a map that has pins to the location of the users with most recent activity.

-   Currently, the data is displayed in rows in table, but the problem with that is:

-   It's not space efficient.

-   It looks too simple

-   It's static data

-   Users viewing this page should be able to follow users from here itself, so there should be a follow button next to each user (it should be marked if the user is already being followed by the current user)

-   Instead of table, card display should be used.

![](https://lh3.googleusercontent.com/mb6avox2DWUfQ62-IeBRFe3ReEylSlvfakqICS35-2hnj6UHB2-gMjfCQSpOklp3acYJ84IFVc0qoX0Byb0yN6TgRO2BLiKlczjdMCEzMyOF7QjgShC8p5wBNbR2cKmV20LutIQQ)


### Part 7: Adding template selection when creating Wiki page

-   When a user creates their wiki page, they should be given a choice of a template to start with.

-   This makes it easy for the user to create a post.\
![](https://lh4.googleusercontent.com/NKYkmiE5nJIRBQVU2a4fUOqz4W6jb86I-Hc0eBBvWjyyu3Z5L1Ix-k4adsVUuWbXjShqSIfIZaciYPvyy0cr-SllqhbHWmDG3wdn5ZwrMTXewF-OOTl_RO-66wZuDTi_BjE5twGZ)

-   On selecting a template, the textarea in the editor will be filled with the template body and heading.

-   This can be achieved by simply sending a request on template selection and rendering the text to set as a default value in the textarea.

### Part 8: Search interface

-   Current interface is too plain and simple.

-   We can modify it to promote more searching by our users

![](https://lh6.googleusercontent.com/13b-59tbD4_08WOvHHI4AbyutT8TJvzKSNaEyT5idtsvB9XPQGOFG3V6PaBigIF4diGiZDZR4NciIL_Bj2VwXAhwGG8zLAbWzNMpQ-xqEs9eI3mqtAT9fT_TZTUoDWGnEd6sD5nf)

### Part 9: Search results

-   The current search results' All Content tab looks very raw in terms of its tables.

-   The rest of the tabs have a card format.

-   To improve the All Content tab, we can organize it in table like panels, which are:

	-   Better organized

	-   Better looking

-   More informative\
![](https://lh4.googleusercontent.com/m4CcAKOzFQhZEZF0B3Cv-f8SPUiOLLP4CUoLcZCVdgI118SPCzbB1hKs2B27nWKwbv7SenR3-AGwiMgSf7_vG9apjeNpadPfDHPCO41cStmzqMs9wlqmxfTIBEAJXaX5uaRO3ssj)

-   "More results" will open the tab of the corresponding heading and show all the results there.

## Timeline
PS: I would be opening atleast 2 FTOs every week. Also, smaller and more related tests with each design will be implemented along the way itself, so as to ensure a smooth flow.
Card Design: Current design for displaying different types of nodes (research notes, questions, comments, tag information etc) is very cluttered and unbounded. To resolve this, each node will now be represented through a card format, with basic information on the card and different types of nodes having different options in a popover. 

| Time Period | Work |
|------|------|
| May 20- May 21 | People's Page |
| May 22- May 23 | Tag's Page |
| May 24- May 25 | Question and Answer |
| May 26- May 27 | Research notes and Wikis |
| May 28- May 29 | Comments |

Profile page implementation

| Time Period | Work |
|------|------|
| May 30- June 1 | About Section: Will contain basic user information (profile picture, follow links, RSS feed), the user's bio and location |
| June 2- June 4 | Circular Tabs: Redesigning existing tabs to a more organized format, all nodes will have a card format now. Tags: Tags that the user follows and the most active tags for the user to follow |
| June 5- June 6 | Activity Graph: Deprecating the activity graph, we present a more interactive graph which would contain nodes of different activities by the user.|

Dashboard implementation

| Time Period | Work |
|------|------|
| June 7- June 9 | Right sidebar: User's location, using which, we display featured projects in that area. Also, some featured/most active users for the current user to follow, with the nearby users starred. |
| June 10- June 15 | Personalized Dashboard: Not every user is interested in everything that is happening on the site.The idea of a dashboard is to provide a personalized experience to the site’s members and give them information about topics they are interested in and are relevant to them. This is very important so that the user doesn’t miss out on the updates on things they have subscribed to. Sign Up tags: During Sign Up, we ask the user to subscribe to some tags .When the user successfully signs up, they are subscribed to those tags. The dashboard is then displayed to them according to their preferences. |
| June 16- June 21 | Recent Activity Dashboard in which all the posts are displayed in decreasing order of their dates.
 & Tags: Recommended tags specifically for the user to follow (history-based) and Trending tags on the site & Alignment of the entire dashboard |
| June 22- June 24 | FTOs, Documentation, Blog, Reviewing PRs |



Questions' Page

| Time Period | Work |
|------|------|
| June 25- June 27 | Asking a question: Bigger Text area with autocomplete |
| June 29- July 1 | Recommended questions: Questions containing tags to which user is subscribed & Featured Questions: The best questions asked on the site |
| July 2- July 5 | Questions' Page- Tag Based searching (searchbox with autocomplete and some click-on suggested tags) |

Individual Tag Page

| Time Period | Work |
|------|------|
| July 6- July 8 | Tag information, Subscribing, Asking a question on that tag and Related tags |
| July 9- July 11 | Circular tabs with different kind of nodes and card display |

People's page

| Time Period | Work |
|------|------|
| July 12- July 16 | Arrange users according to their activity and display in card format to give more information about the user, as compared to current design. Also, display a map with pins to the location of most active users. |

Subscription Stats Page: Display Subscription stats in a more informative way

| Time Period | Work |
|------|------|
| July 17- July 19 | Subscription Stat's Page- Code to put tags in class intervals |
| July 20- July 24 | Subscription Stat's Page- Interactive Bubbles (each bubble containing all the tags which have subscriptions in that interval) and Static tags (some leading tags against each bubble) |

Wiki Templates

| Time Period | Work |
|------|------|
| July 25- July 29 | Wiki Templates for the user to choose to start a wiki page with |

Search Page and Search Results

| Time Period | Work |
|------|------|
| July 30- July 31 | Search Box with autocomplete |
| August 1- August 5 | Search Result page with card format for each category and table panels for all content and sidebar panel for different tabs |

Wrapping Up

| Time Period | Work |
|------|------|
| August 6- August 10 | Integrating Tests and minor debugging |
| August 11- August 15 | Finishing incomplete PRs and refinement |
| August 16- August 19 | FTOs, Final Documentation, Blog, Reviewing PRs |
| August 20 | Final report compilation |


## Needs

I would be needing the guidance of mentors and I am open to any kind of help or input from other contributors.

## Contributions to Public Lab

I have been actively contributing to Public Lab since December and I have worked on different types of issues, from minor to major and involving different aspects of the project (frontend and backend both). I am an active member of the community and have helped my fellow members with their issues and also opened some first-timers-only issues to welcome new contributors. I have made about 16 commits to the plots2 repository and I am well-versed with the codebase. I have also tried to expand MapKnitter to welcome new contributors and am in a discussion on some projects there as well.

I am working on some issues currently as well and hope to continue to do so!

Here are the issues reported by me:

<https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3AIshaGupta18>

Here are my merged PRs:

<https://github.com/publiclab/plots2/commits?author=IshaGupta18>

Weekly-Checkin opened by me:

<https://github.com/publiclab/plots2/issues/4844>

![](https://lh5.googleusercontent.com/YWghTa8KqPaquaOdtksL9-7k93wMD391ztNvAXW83BxZF4WJ6aBPx6WOJImdKAdKBnDB7mboHMMBpVYhBlEjA03XI-7cMzshjFsTK2tjcHrwSYmHGCBHEWv2KPt_1eW9KTsbYDh4)

Some activity on Mapknitter:

<https://github.com/publiclab/mapknitter/issues/338>

<https://github.com/publiclab/mapknitter/issues/327>

## Experience

I am a first-year undergrad pursuing CSE at my college.

I am a part of the core team of Google Developer Student Club, which trains young developers on mobile and web development, and is an excellent platform to organize community workshops and showcases, apart from learning new technologies.

I have worked with Ruby on Rails for about 7 months now, which I learned at Coding Ninjas (<https://codingninjas.in/courses/classroom-web-development-course>) , which has taught me RoR from scratch so I am well-versed with the platform. I am also comfortable with Data structures and algorithms and am fluent in C++, Java, and Python.

Apart from this, at the front end, I have worked with and confident in HTML, CSS, JavaScript, and Bootstrap.

I am a member of the development club of my college, Byld where I get to organize and attend sessions about upcoming technologies.

In school, I was part of the cyber society, and have participated in numerous inter-school competitions.

## Teamwork

I have worked in several group projects in my school and college, especially on IoT and on environmental projects in school called "Vasudha" (meaning Earth in English) every alternate year that dealt with a specific type of environmental problems like the issue of non-biodegradable poly bags, global warming, waste management etc. and required us to conduct surveys, analyze the results and propose solutions.

Apart from this, in open source, I have contributed to Public Lab only which has shown me how powerful a community is and how helpful people are. I felt so motivated when I my peers helped me in merging my PRs and I felt so good in helping them and welcoming newcomers to work out their solutions.

I get self-motivated whenever a bug is resolved and I move towards completion of some task I am doing. The best feeling is however, when one of my PRs gets merged. I feel confident about the fact that something I coded is being used somewhere.

## Passion

Living in one of the most polluted cities in India, and pollution, which has always given me the sneezes through my childhood, Public Lab very much gets me interested in making the world a much cleaner place.

I am passionate about solving real-life problems, things that help people, even in the tiniest possible way.

I have always been interested in designing things, the reason why I pursued Photoshop was to see creativity come to life. Through this project as well, I want to use that creativty to make solid designs and make user experience better.

## Audience

Since this project is all about UI, the target audience is the entire user base who uses Public Lab. For the community to expand and things to grow, a good user interface is required, to improve user experience, so that users are able to use the site to its best purpose. 

## Commitment

I completely understand that proceeding forward with this project and completing it is a very serious commitment and I will be fully dedicated to completing it because I am very excited in creating something new and useful and would be more than happy to work on it!
