---
title: "Search in 2019"\ntagnames: 'website, search, code, wwg, ui'
author: liz
path: /notes/liz/05-20-2019/search-in-2019.md
nid: 19466
uid: 7

---

![](https://publiclab.org/public/system/images/photos/000/032/349/original/Search-mockup.png)

# Search in 2019

by [liz](../profile/liz) | May 20, 2019 18:38

May 20, 2019 18:38 | Tags: [website](../tag/website), [search](../tag/search), [code](../tag/code), [wwg](../tag/wwg), [ui](../tag/ui)

----

*above: mockup of a new Search interface*

Hi everyone! 

Do you search for content on PublicLab.org? Do you search for Public Lab content using other search engines?

Many people contribute to Search on PublicLab.org, including valued developers like Camila Araújo, Stéfanni Brasil, Isha Gupta, Avkaran Singh, David Days, Ujitha Perera, Jeff Warren, and many more. 

Together, we've been developing functionality and user interfaces, and testing how different approaches perform. There are many aspects of search, from the huge improvements to the API from last summer to the upcoming design work on search results display, to the subtle "debounce" timing optimizations in our autocompletion UI. 

**In 2019, we'll be breaking down the remaining Search project into a few separate parts:** 

- refining user interface (UI) designs for Search with Lekhika Dugtal and Gautami Gupta https://github.com/publiclab/plots2/issues/5708 (See all summer projects here: 
 https://github.com/publiclab/plots2/issues/5684, see all UI projects here: https://publiclab.org/ui). 

- Evaluating different /kinds/ of search and how they can be integrated into a unified search system, including [tag search](https://github.com/publiclab/plots2/issues/5719), featured search results, and results from Google full-text search. We're also cleaning up the [Search Milestone](https://github.com/publiclab/plots2/milestone/11)

- Breaking out the in-progress "advanced search" interface as an alternative UI to test and compare different search functionalities in a systematic way (was /search, now moving to /search/advanced)

- Developing and maintaining a set of 'test searches' which we can use to evaluate different search approaches on an ongoing basis. More on **Test searches**: As part of our testing, we have filled in detailed notes on a [spreadsheet](https://docs.google.com/spreadsheets/d/1VKOXUgIscX0aCBxjOrZBgAMJsemy2Y6FoTzufIn8FE0/edit#gid=0) about what specific search terms we've used (and want to be able to use) to try to find specific pages using various approaches. Keeping very detailed notes on this will enable us to write tests that will help optimize and protect the Search function in the future from other code changes that may inadvertently affect it. If there are pages that *need* to show up when certain terms are searched for, this is the place to document that! It is also a good dataset for assessing "how good" different search settings or approaches are for the kinds of things we most want Search to help people find. 

Thanks! Looking forward to hearing from you!