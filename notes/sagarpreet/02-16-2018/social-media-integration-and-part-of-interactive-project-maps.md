---
title: "GSoC proposal: Social Media Integration and Leaflet-Layers Library ."

tagnames: 'software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, gsoc-2018-final, first-time-poster'
author: sagarpreet
path: /notes/sagarpreet/02-16-2018/social-media-integration-and-part-of-interactive-project-maps.md
nid: 15744
uid: 516343
cids: 18448,18466,18467,18471,18475,18476,18481,18488,18513,18517,18526,18527,18528,18595,18614,18717,18719,18720,18728,18731,18736,18737,18738,18739,18740,18741,18750,18836,18868,18885,18943,18981,18982,19032,19058,19059,19060,19061,19066,19068,19091,19098,19107,19115,19129,19131,19155,19204
---

![](https://publiclab.org/public/system/images/photos/000/024/007/original/header_gif.gif)

# GSoC proposal: Social Media Integration and Leaflet-Layers Library .

by [sagarpreet](/profile/sagarpreet) | February 16, 2018 05:09

February 16, 2018 05:09 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018), [soc-2018-proposals](/tag/soc-2018-proposals), [gsoc-2018-final](/tag/gsoc-2018-final), [first-time-poster](/tag/first-time-poster)

----

## About me

Name :	      Sagarpreet Chadha

Github :	      [https://github.com/sagarpreet-chadha][1]

LinkedIn :	      [https://www.linkedin.com/in/sagarpreet-chadha-786378125/][2]

Affiliation :     Delhi Technological University , India

Location :      Delhi , India

Email :	      chadha.sagarpreet97@gmail.com	

Project Title : Social Media Integration and Leaflet-Layers Library .

Gitter : 	     sagarpreet-chadha 

Portfolio :      [https://sagarpreet-chadha.github.io/][3] 

I am in my pre-final year studying Computer Science Engineering (BTech) from Delhi Technological University , India . Originally I am from a small village in **Punjab** , India but currently living in **Delhi** , India to complete my studies .  

##  Project description : 

I would love to work on Social Media Integration and part of Interactive Project Maps .
 
### Abstract/summary (<20 words):

*Adding replies from twitter post to the original node on PublicLab and also adding answers from PublicLab node to twitter as comments . Also improving the interactive maps used in PublicLab website .*

### Problem :
_What problem does your project solve?_

**PART 1 of the project :**   (Milestone :  [Social Media Integration][4]  )

People are increasingly engaging with Public Lab community and questions via Twitter . This project helps in : 

1.) Generating more content to Public Lab website .

2.) Notifying the author of the node when someone comments on the corresponding tweet of the node , as an email is send to the author because that comment is added as a comment to the original node in PL website .

3.) helping people to know more about the Public Lab community .

4.) Automating a general reply to each comment on a tweet of the form - “Thank you John Doe for your reply .”

5.) Posting all the answers from a node on Public Lab website as a comment to the corresponding post on twitter of the form - “Warren added an answer to your node on publiclab.org ”.

**PART 2 of the project :** (Milestone :  [Geographic features][5])

1.) Adding a map using leaflet javascript library to show nearby projects . 

2.)  Making all the maps used on PL website to dynamically load markers by making API . This API can be used for other useful purposes .

3.) Solving the issues related to security , i.e , not showing the markers when the zoom level exceeds the precision level of the location given by the user . 

4.) Showing project related attributes on marker and using different markers to show Projects to avoid any kind of confusion  .

5.) Solving the issue of infinite scrolling and dragging of maps to make use of maps more friendly and smooth .

6.) Making an alternate list-view of map showing nearby projects .

### Implementation

**PART 1 of the project :** 

I have already worked with Rails RSS Feed generator and integration with IFTTT recipes to generate Tweets with images .

The first step would be to change the format of the Tweets generated by IFTTT to start with a unique number (which can be the ‘uid’ of that node) , for fast searching of that node from our database.

Then using the Twitter gem , we can write an algorithm to fetch the recent replies to a tweet by @PublicLab . 

Then storing the tweet ids of these replies in a our database so that they are not processed the next time our algorithm runs .
 Also storing the tweet id of the parent post which is used to post the answers from PL website to this post as a comment . 

This algorithm will be written as RAKE file in /lib folder and then using Whenever gem (we will also be using this gem for generating EMAIL - DIGEST) we can execute this rake file after every finite interval of time .

Advantages : 

1.) We are just storing the Tweet-ids and hence less space is used . 

2.) We are making a RAKE file and hence not changing the core code . 

**Pseudo-code for the Algorithm :-)**

![image description][6]

------------

I have created this **Demo project** : 

A.) Add a comment to this tweet here : 

[https://twitter.com/Sagarpreet_07/status/961854112450068483][7]

B.) Your comment would be shown here within 10 minutes : (To be more precise it runs every XX : X7 UTC time)

[https://pure-eyrie-27023.herokuapp.com/tweets/test][8]

C.) Also an automated reply to that comment will be generated on twitter .

* *Youtube Video showing the Demo :*
<iframe width="560" height="315" src="https://www.youtube.com/embed/nm7DzQ4uBWI?rel=0" frameborder="0" allowfullscreen></iframe>


--------------


**PART 2 of the project :** 

Some of the existing issues i would like to solve :

[Location-security][9]

[Refresh map on panning and zooming][10]

[Infinite scrolling and panning of maps][11]

[Different Layers on Leaflet map](https://github.com/publiclab/plots2/issues/2486)

[SkyTruth Alerts and Full screen (in Progress)](https://github.com/publiclab/plots2/pull/2451)

[Inline map showing incorrect nodes](https://github.com/publiclab/plots2/issues/2254)

I have already worked with the leaflet javascript library to add the **/people map** and the **/profile map** and have made the API to dynamically load markers in /people map . In the same way we can show the near-by projects . 

To standardise the use of maps across PublicLab website , we should create a JS library .

I have created this **demo JS library** and published to **npm** :

GITHUB :
https://github.com/sagarpreet-chadha/Leaflet_learning

 NPM :
https://www.npmjs.com/package/leaflet-learning

 DEMO : 
https://sagarpreet-chadha.github.io/Leaflet_learning/
 
**DOCS OF THE Leaflet JS library :**

1.) Creating an instance / object : 

            var PLmap = new MainModule() ;

 2.) Attributes for modifying maps :
         


[![Screen_Shot_2018-03-22_at_10.10.18_PM.png](https://publiclab.org/system/images/photos/000/024/134/large/Screen_Shot_2018-03-22_at_10.10.18_PM.png)](https://publiclab.org/system/images/photos/000/024/134/original/Screen_Shot_2018-03-22_at_10.10.18_PM.png)

**Description :** 


[![Screen_Shot_2018-03-22_at_10.37.43_PM.png](https://publiclab.org/system/images/photos/000/024/144/large/Screen_Shot_2018-03-22_at_10.37.43_PM.png)](https://publiclab.org/system/images/photos/000/024/144/original/Screen_Shot_2018-03-22_at_10.37.43_PM.png)




[![Screen_Shot_2018-03-22_at_10.24.18_PM.png](https://publiclab.org/system/images/photos/000/024/139/large/Screen_Shot_2018-03-22_at_10.24.18_PM.png)](https://publiclab.org/system/images/photos/000/024/139/original/Screen_Shot_2018-03-22_at_10.24.18_PM.png)



3.) To add Single - Layer Map : 

           PLmap.SkyTruth(op) ;
       	     
           PLmap.MapKnitter(op) ; 
	 
           PLmap.ToxicRelease(op) ; 
	
           PLmap.WaterReport(op) ; 
    
            and many more !


4.) To add Map with Layer button on top-right corner of map to choose combination of layers :

        PLmap.MultiLayers("SkyTruth" , "MapKnitter") ;
      
        PLmap.MultiLayers("SkyTruth" , "ToxicRelease" , "WaterReport") ; 
     
        and various other combinations !


5.) To add a CUSTOM map with your own API :
This Map can be used for : 
  
  * People Map : to show recent contributors to PublicLab.org 
  * Project Map : to show near-by projects from the current location of the user . 
  * People-Community Map : to show near-by PublicLab community people .  
 

         PLmap.CustomMap(op , "https://" + URL OF API   + ".json") ;


6.) To add Map with only 1 marker :
This Map can be used in various places across the PL website mainly : 
 
 *  Profile Map . 

        PLmap.Singleton(op) ; 

------------



The final UI of this new map will be (can be modified as per my mentors convention) : 	

  **Profile Map showing Near By Projects with a different marker .**

![image description][12]

**Page showing near by Projects in both views : map view and a list view .**

![image description][13]

**Map showing one of the Layer of various layers .**

[![LeafletLibGIF.gif](https://publiclab.org/system/images/photos/000/024/126/large/LeafletLibGIF.gif)](https://publiclab.org/system/images/photos/000/024/126/original/LeafletLibGIF.gif)



**Map showing button to choose various layers with different markers for each layer .**


[![header_gif.gif](https://publiclab.org/system/images/photos/000/024/128/large/header_gif.gif)](https://publiclab.org/system/images/photos/000/024/128/original/header_gif.gif)







**Map showing FULL-SCREEN option .**


[![fullscreen_gif.gif](https://publiclab.org/system/images/photos/000/024/127/large/fullscreen_gif.gif)](https://publiclab.org/system/images/photos/000/024/127/original/fullscreen_gif.gif)




-----------------

### Timeline/milestones

The detailed timeline is linked below : 

![timeline1][14]
![timeline2][15]

### Needs

All the resources I will be requiring are on the internet such as Twitter gem documentation , leaflet documentation , etc .  And I would of course require the guidance of my mentor.

### Setup

 I have forked and built plots2 . I have been contributing to PublicLab community from the past 6 months and am quite comfortable with the codebase .


---------

### Experience

I am extremely passionate about developing applications and have worked hard to attain the required set of knowledge and skills . 

I also work as a Teaching Assistant where i teach people the basics of Web development using Ruby on Rails and Javascript and help them to enter the world of open-source and to make their first contribution .

Also i like to go to various Hackathons and have recently won a hackathon where my team developed a product for children with cognitive disability . (Organised by Read-Alliance , held in NASSCOM office , Delhi)

I am also a recipient of Google India Challenge Scholarship . 

##### Contributions to Public Lab :

I have done about 32 commits and have reported about 24 issues .
My contributions to PublicLab repository are listed below : 

[![Screen_Shot_2018-03-22_at_10.52.22_PM.png](https://publiclab.org/system/images/photos/000/024/145/large/Screen_Shot_2018-03-22_at_10.52.22_PM.png)](https://publiclab.org/system/images/photos/000/024/145/original/Screen_Shot_2018-03-22_at_10.52.22_PM.png)



Merged Pull Requests : 

[https://github.com/publiclab/plots2/commits?author=sagarpreet-chadha][16]

Issues reported : 

[https://github.com/publiclab/plots2/issues/created_by/sagarpreet-chadha][17]

I still remember the first contribution i made to PublicLab :)

[![Screen_Shot_2017-10-12_at_11.53.08_PM.png](https://publiclab.org/system/images/photos/000/024/146/large/Screen_Shot_2017-10-12_at_11.53.08_PM.png)](https://publiclab.org/system/images/photos/000/024/146/original/Screen_Shot_2017-10-12_at_11.53.08_PM.png)



---------

### Teamwork

Throughout my academic career , I have been consistently praised as focused by my professors and peers . While working on academic and extracurricular projects , I have developed proven leadership , technical , and teamwork skills .
I like to work in a team and have developed various projects with my college mates .
Also as i am a regular hackathon participant , i have the experience of working in a team .


---------

### Passion

Belonging from a place having fresh air , pure water and green environment , and currently living in one of the most polluted city in the world - Delhi  , Yes Public Lab interests me a lot and i wish to be the part of the PublicLab family for a very long time . 

 As Larry Page once said- *“If you’re changing the world, you’re working on important things. You’re excited to get up in the morning .”*

-------
### My Outreach - Plan to bring more newcomers during my Summer Project : 

Since I am a Teaching Assistant for https://www.codingninjas.in/  , I am planning to hold free sessions for students where we can promote OSS . I will also encourage them to fork the PL repo and solve FTO issues and send a PR for the same . 

Same session will also be conducted in my university .

In this way we would not only get more developers on-board but it will also help students explore the Open-Source world as well . 

--------------

### Audience

This project will be helpful for **people engaging with Public Lab via twitter** . 

It will also help **twitter-savvy people to follow their PL tweets** of interests very closely .

The contributions by **existing Public Lab users** will be visible on twitter which will reach more audience and at the same time attract more users to Public Lab community .

This project will also help people who wants to know about the **various projects near them** . The project will also focus on **location-security** .

------

### Commitment

*I can assure you that if i get selected to work with Public Lab this summer , I will definitely try my level best to make this project successful and will love to continue working with Public Lab even after the summer .* 

--------

#### External Links : 

1.) Youtube video :

[https://www.youtube.com/watch?v=nm7DzQ4uBWI][18]

2.) Demo Website : 

[https://pure-eyrie-27023.herokuapp.com/tweets/test][19]

3.) Tweet URL : 

[https://twitter.com/Sagarpreet_07/status/961854112450068483][20]

*Looking forward to working with you .*

*Sagarpreet Chadha .*

  [1]: https://github.com/sagarpreet-chadha
  [2]: https://www.linkedin.com/in/sagarpreet-chadha-786378125/
  [3]: https://sagarpreet-chadha.github.io/
  [4]: https://github.com/publiclab/plots2/milestone/10
  [5]: https://github.com/publiclab/plots2/milestone/7
  [6]: https://publiclab.org/system/images/photos/000/023/710/large/FlowChart.png "FlowChart.png"
  [7]: https://twitter.com/Sagarpreet_07/status/961854112450068483
  [8]: https://pure-eyrie-27023.herokuapp.com/tweets/test
  [9]: https://github.com/publiclab/plots2/issues/2201#issuecomment-363250234
  [10]: https://github.com/publiclab/plots2/issues/1934
  [11]: https://github.com/publiclab/plots2/issues/2248
  [12]: https://publiclab.org/system/images/photos/000/023/591/large/profile_page_ipiccy.png "profile_page_ipiccy.png"
  [13]: https://publiclab.org/system/images/photos/000/023/592/large/new_page_ipiccy.png "new_page_ipiccy.png"
  [14]: https://publiclab.org/system/images/photos/000/023/623/large/Timeline1.png "Timeline1.png"
  [15]: https://publiclab.org/system/images/photos/000/023/624/large/Timeline2.png "Timeline2.png"
  [16]: https://github.com/publiclab/plots2/commits?author=sagarpreet-chadha
  [17]: https://github.com/publiclab/plots2/issues/created_by/sagarpreet-chadha
  [18]: https://www.youtube.com/watch?v=nm7DzQ4uBWI
  [19]: https://pure-eyrie-27023.herokuapp.com/tweets/test
  [20]: https://twitter.com/Sagarpreet_07/status/961854112450068483