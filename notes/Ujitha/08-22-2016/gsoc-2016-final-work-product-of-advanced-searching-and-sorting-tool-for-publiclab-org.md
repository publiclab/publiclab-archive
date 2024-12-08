---
title: GSoC 2016: Final Work Product of Advanced Searching and Sorting Tool for publiclab.org
tagnames: gsoc, gsoc-2016, advancedsearch, solr, sunspot, search-api, response:13397
author: Ujitha
path: /notes/Ujitha/08-22-2016/gsoc-2016-final-work-product-of-advanced-searching-and-sorting-tool-for-publiclab-org.md
nid: 13383
uid: 467748

---

# GSoC 2016: Final Work Product of Advanced Searching and Sorting Tool for publiclab.org

by [Ujitha](../profile/Ujitha) August 22, 2016 18:51

August 22, 2016 18:51 | Tags: [gsoc](../tag/gsoc), [gsoc-2016](../tag/gsoc-2016), [advancedsearch](../tag/advancedsearch), [solr](../tag/solr), [sunspot](../tag/sunspot), [search-api](../tag/search-api), [response:13397](../tag/response:13397)

###Project Details 
Project Title: Advanced Searching and Sorting Tool for publiclab.org

Project Proposal: [advanced-searching-and-sorting-tool-for-publiclab-org](https://publiclab.org/notes/Ujitha/03-12-2016/advanced-searching-and-sorting-tool-for-publiclab-org)

Link to GSoC Project: [https://summerofcode.withgoogle.com/dashboard/project/5438480599482368/overview](https://summerofcode.withgoogle.com/dashboard/project/5438480599482368/overview/)

Open source Platform Used: [Github](https://github.com)

Organization mailing list:[ https://groups.google.com/forum/?hl=en#!forum/plots-dev]( https://groups.google.com/forum/?hl=en#!forum/plots-dev)

Github Organization Page: [Publiclab](https://github.com/publiclab)

Repository Contributed to: [plots2](https://github.com/publiclab/plots2)

Languages/Framework Used: Ruby on Rails, [solr search server](http://lucene.apache.org/solr/) with [sunspot](https://github.com/sunspot/sunspot), [grape api framework](https://github.com/ruby-grape/grape),  JavaScript(jQuery), HTML/CSS


###Code Links

For this project, we used two repositories. 

1. Main Repo (upstream) - [https://github.com/publiclab/plots2](https://github.com/publiclab/plots2)
2. Primary Repo (forked from main repo) - [https://github.com/david-days/plots2](https://github.com/david-days/plots2)

Since we are implementing completely new technology to the system, one of my mentors (Bryan Bonvallet) advice was to use separate repository  for this advanced search tool and avoid technological conflicts from other contributors. Specially from other GSoC projects.

All the commits - [ https://github.com/david-days/plots2/commits/master?author=ujithaperera ](https://github.com/david-days/plots2/commits/master?author=ujithaperera)

On going pull requests 
[https://github.com/publiclab/plots2/pull/663](https://github.com/publiclab/plots2/pull/663)
[https://github.com/publiclab/plots2/pull/652](https://github.com/publiclab/plots2/pull/652)

###Project Description

####Analysed existed code base and refactored for performance. 

when i starting to contribute to publiclab, there was a normal sql query based search in the for the system. But that search was not able to cover up the current searching requirement of the system. Mainly advanced search page was needed to be improved. 

Previous advanced search page

[![Screen_Shot_2016-08-22_at_9.28.21_PM.png](//i.publiclab.org/system/images/photos/000/017/724/large/Screen_Shot_2016-08-22_at_9.28.21_PM.png)](//i.publiclab.org/system/images/photos/000/017/724/original/Screen_Shot_2016-08-22_at_9.28.21_PM.png)

As the first step I went through all the search queries in the code based and refactored them to follow up MVC architecture and modified them to make search controller small and thinner, and moved those load to model. Actually here we used separated set of classes to execute these search queries and by putting this queries in this classes (service classes) anyone can touch the search logic without braking the normal request  - response cycle. 

After this sub task, we managed to generate search results similar to last state of the system. Then we planned this search for resource based structure. with this format we can enable few more features for this advanced searching tool. Such as search logging, search history, search suggestions, etc. 

####Introducing solr search server to the system

Since Publiclab is a text based (research notes and wiki pages) system and be supportive to Q&A tool, we used advanced text searching facilities provided by sunspot. And by using one text field (like the search box in publiclab.org) we can query easily from sunspot. Sunspot is a middle ware that use to communicate with solr search server through a rails application. Hence by using sunspot libraries we were able to install solr server top of the rails rake. with the previous query setup there were less work to be done for develop solr end points. Mainly text heavy research notes and its attributes were indexed to the solr database and facilitated advanced search page from solr search results. 

With the observations of the modifications, step by step I added several additional features to the advanced search page. Few implementations got fail. But most of the tools were added to the page successfully. 

[![Screen_Shot_2016-08-22_at_9.41.48_PM.png](//i.publiclab.org/system/images/photos/000/017/727/large/Screen_Shot_2016-08-22_at_9.41.48_PM.png)](//i.publiclab.org/system/images/photos/000/017/727/original/Screen_Shot_2016-08-22_at_9.41.48_PM.png)

one of the key tool that I was Implemented is Grouping. When you do a search for a word by using advanced search page, you can category these search results according to given fields and you can deep look for this results to touch ideal result in from the list. 


[![Screen_Shot_2016-08-22_at_9.35.43_PM.png](//i.publiclab.org/system/images/photos/000/017/728/large/Screen_Shot_2016-08-22_at_9.35.43_PM.png)](//i.publiclab.org/system/images/photos/000/017/728/original/Screen_Shot_2016-08-22_at_9.35.43_PM.png)

Results are categorised for updated month

####Dynamic search page and typeahead re-design 

Real sense of the word, advanced search page is providing lot more details regarding your searching word. It's displaying results in some kind of analytical approach. If you are searching for a simple keywords all around the project, Dynamic search is the ideal one for you. 

1. simple preview
2. full coverage
3. auto-complete suggestions
4. Quick access


[![Screen_Shot_2016-08-22_at_9.36.42_PM.png](//i.publiclab.org/system/images/photos/000/017/729/large/Screen_Shot_2016-08-22_at_9.36.42_PM.png)](//i.publiclab.org/system/images/photos/000/017/729/original/Screen_Shot_2016-08-22_at_9.36.42_PM.png)


Previous typeahead was a heavy library for the system and it consumes more resources to execute the service. It was hard and time consuming to  add modifications or use typeahead with few customisations for a separate feature. Hence as a part of this project we re-design usage of typeahead and avoid heavy libraries to complete the particular requirement. 


[![Screen_Shot_2016-08-22_at_9.29.20_PM.png](//i.publiclab.org/system/images/photos/000/017/730/large/Screen_Shot_2016-08-22_at_9.29.20_PM.png)](//i.publiclab.org/system/images/photos/000/017/730/original/Screen_Shot_2016-08-22_at_9.29.20_PM.png)

Previously reload was happened after three characters, Now it's reloading for individual keyup event and more faster. 

####RESTful API for search and it's configurations

This API developed using Grape api framework and by using this api all any api user can retrieve search results through the API. Dedicated end points are designed to cover up all the API level searches and by using grape we were able to deliver the required informations to the api user. Then an user can follow the details and connect to the search tool through the API. 

### Solr Search engine and my experience. 

### GSoC experience with my mentor David and publiclab  











  