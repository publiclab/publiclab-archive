---
title: "GSoC Report : Tag/Topic System Refinements"

tagnames: 'gsoc, soc, lon:76, zoom:6, soc-2021, lat:27, soc-2021-final'
author: 17sushmita
path: /notes/17sushmita/08-23-2021/gsoc-report-tag-topic-system-refinements.md
nid: 27613
uid: 741338
cids: 29181,29196,29204
---

![](https://publiclab.org/public/system/images/photos/000/044/713/original/GSOC_at_PublicLab.png)

# GSoC Report : Tag/Topic System Refinements

by [17sushmita](/profile/17sushmita) | August 23, 2021 14:42

August 23, 2021 14:42 | Tags: [gsoc](/tag/gsoc), [soc](/tag/soc), [lon:76](/tag/lon:76), [zoom:6](/tag/zoom:6), [soc-2021](/tag/soc-2021), [lat:27](/tag/lat:27), [soc-2021-final](/tag/soc-2021-final)

----

**Name**: Sushmita   
**Gitter**: 17sushmita   
**Email**: 17sushmita@gmail.com   
**Github**: 17sushmita   
**Location**: New Delhi, India   
**Time Zone**: UTC+05:30   
**Mentors**: Jeffrey Yoo Warren, Naman Gupta, Ruth Waiganjo    


## Tag/Topic System: Project Overview
The Tag/Topic System is a very critical component of any content management system. It helps to keep the content organized in a way to easily searchable, indexable and view similar content by navigating to the tag's own page. It is one of the most important feature on PublicLab's Content Management Platform. Publiclab's content produced by the environmental researchers and the PublicLab community is organized by the use of tags very efficiently. 

In my GSoC project, I worked on improving the already built Tagging System, fixed bugs and added some additional features and UI changes to make the tagging system more accessible and efficient.

Check out [my GSoC project proposal](https://publiclab.org/notes/17sushmita/04-12-2021/gsoc-proposal-tag-topic-system-refinements) and [my planning issue](https://github.com/publiclab/plots2/issues/9712) to understand the basic idea about the project.

## Tag Moderation
**Problem**- There was no tag moderation and hence any user was able to add tags to any user's work which sometimes introduces spammy or unrelated tags and hence caused inefficiencies in content organization. 

**Solution**-    
Implemented Tag moderation by blocking first-time posters from adding tags to the notes except their own.

 - Hide tag form from first-time-posters and display a message instructing when they will have access to add tags on others work.    
 - Blocked requests from first-timers to add tags from backend to not allow them to add tags using javascript or API requests.    
 - Added tests for the changes introduced.    

**Learning Outcomes**-     
Learnt more about testing and dig a bit deeper into the project and understood the functioning.   
Also, learnt about REST APIs in Ruby while testing possible ways of adding tags on content other than the normal interaction using tag form UI.

**Related PRs**-    

- https://github.com/publiclab/plots2/pull/9770
- https://github.com/publiclab/plots2/issues/9774
- https://github.com/publiclab/plots2/issues/9850

## Subscription stats bug fixes
_P.S- This was one of the scariest bugs that I thought of before working on it. But after working on it, I realized I need to start fresh and therefore, I did not try to fix the query but wrote a new query and the issue was fixed, yayy!!_
**Problem**- The subscription stats page had bugs in the number of subscribers. It was showing some wrong subscribers count for all the tags.    
![image description][1]     
**Solution**-       
Fixed the query driving the subscription stats           
![image description][2]     
**Learning Outcomes**-    
Learnt a lot about Database queries and caching database queries. Came across with the concept of mocking databases for testing.

**Related PRs**-     

- https://github.com/publiclab/plots2/pull/9828

## Best Match autosuggestions
**Problem**-In autosuggestions for searching tags, existing tags were not showing up as an exact match in the search bar due to inefficient ordering of the autosuggestion results.    
![image description][3]    
**Solution**-      
Introduced Autosuggestion ordering by placing -    

- The exact match, if exists, should be placed at the top   
- followed by tags starting with the search query    
- followed by tags having search query in the mid of the word    
- and at last, the tags having search query in the last.     
 ![image description][4]    

**Learning Outcome**-      
Got to learn more about Database queries and order by different cases.     

**Related PRs**-    

- https://github.com/publiclab/plots2/pull/9879


## Refinements in Cytoscape Visualization
This was one of the most interesting changes made by me in the GSoC Project.   
**Before**-     
 ![image description][5]     

- Improved Visual Display of the Cytoscape Visualization to clearly display the clustering of the tags.    
- Improved responsiveness of the cytoscape by limiting the number of tags when displaying on small screen.    
- Implemented min and max zoom.    
- #### Sorting
    - Implemented sorting feature based on number of subscribers or no. of notes.    
    - **Sort by No. of Subscribers**- The tag with highest number of subscribers subscribed to it will have the largest radius in the Cytoscape graph followed by the lower number of subscribers. The radius of node in graph is proportional to the subscriber count of the tag.    
    - **Sort by No. of Nodes**- The tag which has been tagged in the largest number of nodes will have the largest radius of node in the Cytoscape graph. The radius of node will be proportional to the number of nodes the tag has been tagged in.    
- #### Filtering    
    - Introduced filtering of the tags on a number of subscribers![image description][6] or number of nodes.     
    - **Filter by No. of Subscribers**- Filter by number of subscribers by setting a minimum number of subscribers and displaying only tags having more number of subscribers than the threshold value.     
    - **Filter by No. of Nodes**- Filter by number of notes tagged by the tag by setting a minimum number of notes and displaying only tags having more number of notes tagged by that tag than the threshold value.     
- #### Searching     
    - **Search by Tags** - Show autosuggestions on typing in search bar and show only the searched tag and the connected tags to the searched tag.     
    - Connection(Edges) of the tag is defined by the number of notes on which the tags occur together more than a threshold value.    

**Mobile View**      
<p>
    <img src="https://user-images.githubusercontent.com/42088159/125273728-dbc22f00-e32a-11eb-8356-7484b19ddf74.jpg" width = 300>
    <img src="https://user-images.githubusercontent.com/42088159/125285904-cb18b580-e338-11eb-8270-967cf2d15736.jpg" width = 300>
</p>


**Learning Outcomes**-      
Learnt a lot while contributing to this feature.
- Learnt about the cytoscape.js library and different graph visualizations.
- Worked on UI and responsiveness of the UI.
- Learnt heavy database queries for introducing searching and sorting features.

**Related PRs**-    

- https://github.com/publiclab/plots2/pull/9902
- https://github.com/publiclab/plots2/pull/9954

## Optimised TagLocations and TagNearbyPeople API-    
**TagNearbyPeople API**    
Before -       
GET: `/api/srch/nearbyPeople?nwlat=10.0&selat=0.0&nwlng=0.0&selng=10.0`         
Time: 30.33      
![image description][7]    
After -      
GET: `/api/srch/nearbyPeople?nwlat=10.0&selat=0.0&nwlng=0.0&selng=10.0`        
Time : 2.12s      
![image description][8]    

**TagLocations API**
Before -    
GET: `/api/srch/taglocations?nwlat=52&selat=-52&nwlng=-150&selng=150`    
Time: 19.43s    
![image description][9]
After -    
GET: `/api/srch/taglocations?nwlat=52&selat=-52&nwlng=-150&selng=150`
Time: 1991ms
![image description][10]

**Learning Outcomes**-
Collaborated with @barun1024 to do some awesome detective work on the Database queries and optimised the taglocations and tagnearbypeople API to around 10 times faster than before. 
Learnt various new concepts like eager loading, n+1 problem, rails ActiveRecord deferring of queries and many more.

**Related PRs**-   

- https://github.com/publiclab/plots2/pull/9940
- https://github.com/publiclab/plots2/pull/10028

## What is left?
 - **Develop a category tree interactive feature at /topic-tree with nested topics in a tree view like: https://www.appropedia.org/Appropedia:Fundamental_category_tree**
Collaborating with @Manasa2850 on this issue to work on the server part while Manasa will be working on the client part. 

## Other Contributions   

- Ordering blogs based on when `blog` tag was added - https://github.com/publiclab/plots2/pull/10068


## Thank you
Thank you to all the mentors specially @jwarren for constantly supporting each of us and guiding us and always encouraging us throughout the journey. Also, I would like to thanks all the contributors and soc folks for making the past 10 weeks a memorable experience.

  [1]: /i/44702.png "1.png"
  [2]: /i/44703.png "2.png"
  [3]: /i/44705.png "3.png"
  [4]: /i/44706.png "Screenshot_from_2021-08-23_18-52-50.png"
  [5]: /i/44707.png "4.png"
  [6]: /i/44717.png "Screenshot_from_2021-08-23_20-28-39.png"
  [7]: /i/44708.png "5.png"
  [8]: /i/44709.png "6.png"
  [9]: /i/44710.png "8.png"
  [10]: /i/44711.png "7.png"