---
title: "Outreachy 2018: Week One"\ntagnames: 'blog, outreachy'
author: cess
path: /notes/cess/12-09-2018/outreachy-2018-week-one.md
nid: 17839
uid: 525958

---

![](https://publiclab.org/public/system/images/photos/000/028/257/original/CTD10112018213019.jpg)

# Outreachy 2018: Week One

by [cess](../profile/cess) | December 08, 2018 22:52

December 08, 2018 22:52 | Tags: [blog](../tag/blog), [outreachy](../tag/outreachy)

----

### Update

This first week I started with attending an open hour on Monday, which was awesome I got to meet members of the community and we discussed about Usability Feedback for PublicLab . Discuss is a bad term to use because I mostly listened in rather than gave ideas. But it was great to hear and see how people use the site and what could be made better and interesting features coming up like the map for the content in the site. 

I created a milestone([Extend Community Statistics system][1]) thanks @bansal_sidharth2996 for the suggestion. I like the  milestone plan, I just have to keep adding my issues there and it makes me visualize the project more and I can track my progress because the percentage of completion increases with every closed issue. 

Initially my plan for week one was to implement the download of statistics by csv and json [#963][2]. I  started working on it on Tuesday and was making awesome progress and I even got to get the data to display on a page as json and download notes and wikis as a csv and json.
But then...  
 I realized in the end a lot is gonna change in the stats controller and me writing this code now will mean I will have to rewrite everything after I am done with the stats index page. Plus I also realized that the stats controller required a some refactoring.   
Time was running out and I had to accomplish something for week 1 so I resulted to refactoring stats page[#4147][3] and also implement issue [#4137][4] which was on the questions page. This gets to give statistics on the questions asked versus the questions answered and can filter by a period say week, monthly and yearly. I do not expect a lot to change on this page during the project and this is an independent feature so implementing this seemed like a visible idea.
But all was not in vain for the the raw data stats implementation. I preserved the code I had written to download the content on stats page as json and csv so that when the page is done i will just have to find the right place to insert my code and admins and moderators will be able to download the stats in json and csv format.


### Plans for next week

- Thanks @warren for adding me as one of the reviewers. I plan to be reviewing at least  two PRs each day so I can help others get started on plots
- Finish refactoring the stats controller.
- Implement consolidation existing "range pages" like with the main stats page[#4139][5]
- Get started on caching of data weekly issue [#4138][6]


### Thoughts/Clarifications needed/Questions from mentors

- Thoughts on daru gem? I came across this [gem daru][7] which does analysis manipulation and visualization of data in Ruby. Any advice if we should consider incorporating it in the statistics page or if anyone has used it and seen its advantages.
- Caching of data weekly. I realized this issue was not clear on which pages and content exactly was to be cached. Kindly clarify on this

  [1]: https://github.com/publiclab/plots2/milestone/20
  [2]: https://github.com/publiclab/plots2/issues/963
  [3]: https://github.com/publiclab/plots2/issues/4147
  [4]: https://github.com/publiclab/plots2/issues/4137
  [5]: https://github.com/publiclab/plots2/issues/4139
  [6]: https://github.com/publiclab/plots2/issues/4138
  [7]: https://github.com/SciRuby/daru