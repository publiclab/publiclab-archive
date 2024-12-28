---
title: "UI Wireframe for Profile Page"

tagnames: 'design, wireframes, ui, ideas, outreachy, profile, outreachy-2019, ui-designs, outreachy-proposals'
author: lekhidugtal
path: /notes/lekhidugtal/03-13-2019/ui-wireframe-for-profile-page.md
nid: 18537
uid: 577754
cids: 22135,22155,22164,22237,22243,25279
---

![](https://publiclab.org/public/system/images/photos/000/030/055/original/Untitled_%286%29.png)

# UI Wireframe for Profile Page

by [lekhidugtal](/profile/lekhidugtal) | March 13, 2019 16:11

March 13, 2019 16:11 | Tags: [design](/tag/design), [wireframes](/tag/wireframes), [ui](/tag/ui), [ideas](/tag/ideas), [outreachy](/tag/outreachy), [profile](/tag/profile), [outreachy-2019](/tag/outreachy-2019), [ui-designs](/tag/ui-designs), [outreachy-proposals](/tag/outreachy-proposals)

----

I created some rough wirefarmes for profile section.  
Regarding the profile, we had so much data that it took me a ton of hours to think than in actually applying. The information was huge and regarding architecture I had no clue. I needed to ensure that I don't miss out anything. And yet with so much data, the UI doesn't look messy. I walked-through various designs to ensure the consistency.

I used WYSIWYG concept to ensure that even mockup and prototype will be the same.

In the end, the information architecture I decided was following :

The section for research, questions, answers as it's already there in the pages. The positioning for it is almost the same.  
I didn't add icons for now but they'll be there.  
![image description](/i/30046.png "Untitled_(4).png")

I aligned them a bit , so they look uniform which is not present in earlier one.  
credits to jywarren's profile. because I needed a profile with a lot of data and mine didn't had that.

The main part of the profile page is map, along the bio or info and the your contribution map. I only had my one desktop screen and i had to assign them all along with the profile picture and other data... We can't shift them anywhere or give them small blocks covering the pages.

I took GIthub's UI as an example as they are the collection of repository of codes and publiclab org is the collection of research notes and etc, So I started brainstorming some ideas. But it was naught.  
You must be wondering Why ?

\* Github has small line bio but publiclab org don't.  
\* Publiclab org uses maps for the position but Github don't

But the desktop size was same. And I can't squeeze the contribution map to sqaure as they'll remain rectangle.  
So I came across a solution of controlling my information architecture with input-controls ie : toggle buttons.

Why ?  
Because

![image description](/i/30048.png "Untitled_(5).png")  
But all the data was the required important information.

In the below picture, I used toggle buttons to toggle between the map, contribution graph map and the bio.  
I tried to go for a way which is not "just a design" but is possible while implementing.  
Fig1 : For bio  
Fig 2 : Map  
Fig3 : Contribution graph

Fig1 : The big paragraph text is the bio. it could be as detailed one want. And Even if the bio is empty. It doesn't matter as it won't affect other part.

![image description](/i/30050.png "wiki_(Copy).png")

Fig2 : The lady in the map is not necessary, I just wanted to show the position in map. I used a full map instead of a square to take advantage of space and use it.

The lady in the map is from here \>\>\> [https://designmodo.com/maps-websites/](https://designmodo.com/maps-websites/)

![image description](/i/30052.png "wiki_(Copy)_(1).png")

Fig3 : This contribution graph map and some questions aksed and etc.  
The design here is not key part rather positioning is.  
The contribution graph is of an image found online .  
The questions asked part got little bit unaligned.

![image description](/i/30053.png "wiki_(Copy)_(2).png")

Most importantly , For comparison :

![image description](/i/30054.png "Untitled_(6).png")

As only one component in above is changed in all three of them, It doesn't affect the other part of UI. And even is the person hasn't uploaded the bio and other info. But the contribution graph will be always there . Though it will be empty. So when we'll open default profile page, the first thing coming into the view would be the graph.

These were some wireframes with some rough edges.  
If anyone can tell me a better way to use the space ,with no cluttering, and show all the data in the screen,  
Then do suggest your opinions XD.  
This design is one of ideas for my 2019 outreachy proposal. I'll uploading them individually, So i can have some awesome suggestions for all XP.

I'll be drafting them in my final proposal altogether.

Thanks a ton for reading.