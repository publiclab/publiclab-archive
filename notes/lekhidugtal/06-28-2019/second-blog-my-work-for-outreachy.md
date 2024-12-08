---
title: Second Blog: My work for outreachy
tagnames: design, blog, soc, ui, summer-of-code, outreachy, soc-2019, outreachy-2019
author: lekhidugtal
path: /notes/lekhidugtal/06-28-2019/second-blog-my-work-for-outreachy.md
nid: 19912
uid: 577754

---

# Second Blog: My work for outreachy

by [lekhidugtal](../profile/lekhidugtal) June 28, 2019 18:01

June 28, 2019 18:01 | Tags: [design](../tag/design), [blog](../tag/blog), [soc](../tag/soc), [ui](../tag/ui), [summer-of-code](../tag/summer-of-code), [outreachy](../tag/outreachy), [soc-2019](../tag/soc-2019), [outreachy-2019](../tag/outreachy-2019)

Last month, I started my Outreachy journey with publiclab. It's been a great learning experience so far. Today, I'll be telling more about what tasks did I accomplish in the complete month.

So once again who am I ?
Hey everyone, This is Lekhika Dugtal. An undergrad student at IIITA and currently an outreachy intern at Publiclab.

I'll be explaining What and How I worked for my project under Outreachy.

What's my Outreachy Project ?
My main focus for Outreachy intern project is based on UI Redesign of plots2, which is public lab's main knowledge exchange platform based on ruby on rails.
All the work is done collaboratively by me and other contributors of the project.

We have divided the project of outreachy into various parts on the basis of sections. As the project is knowledge exchange platform, So the various sections include ---

1\. Dashboard section

2\. Profile section

3\. Tags section

4\. Individual tags section

5\. Question section

6\. People section

7\. Search Section etc.

In the last one month of outreachy, we have finished the following sections --- People, Question, Tags sections and the work on other sections is going on.

#### People Section ( Completed)

![image description](/i/33373.png "earlier_people.png")

**Older UI**

![image description](/i/33374.png "now_people.png")

**New UI**

The people section is list of all people registered in the platform. It gives a brief detail of when has person recently contributed in platform. And how much time ago, that person has joined the platform. Earlier the UI was a a simple table and list of people being shown in the form of rows.
As per the style guide, the new design was card design. Cards are a convenient means of displaying content composed of different types of objects. And considering we have to show various similar objects whose size or supported actions can vary considerably, like profile photos or information of user. It was a good design and method.

#### Tag Section ( Completed)

![image description](/i/33376.png "Screenshot_from_2019-06-30_10-14-50.png")

**Older UI**

![image description](/i/33375.png "now_cards.png")

**New UI**

The New Tag section was a card based design. We followed Bootstrap4for it. The cards need to show all the recent Notes based on that tag along with author. It showed that how many people are discussing over that tag and much more information. There was a small section featuring popular tags. A second column of the page showed a stats graph showing the link that how often some tags are used with each other.

#### Questions Section ( Ongoing)

![image description](/i/33377.png "earlier_question.png")

**Current UI**

![image description](/i/33378.jpeg "now_question.jpeg")

**New UI on shadow interface**

For this section, we tried something new called testing on shadow page before pushing the code over actual production code. The New design was page on shadow interface with different route and was implemented side by side instead of directly replacing the older code. Later we can try out testing with users regarding the new designs. There can be self-tests or other stuff facilitated in real-time by a designer.
New design which has been implemented right now in shadow interface

#### Individual Tags section (Ongoing)

![image description](/i/33379.png "Screenshot_from_2019-06-30_10-11-59.png")

**Current UI**

![image description](/i/33380.png "now_indi_tag.png")

**New UI which is being worked on**

The Individual section had many bugs and breaks due to recent bootstrap4 upgrade for whole platform. Thus we decided to directly implement the New design over older one rather than testing it before on shadow interface.

#### Searchbar and Search Results Section (Ongoing)

![image description](/i/33381.png "search_earlier.png")

** Current UI**

![image description](/i/33382.png "now_search.png")

**New UI which is being worked on**

This part could be considered as huge section consisting of various new features. Feature like Google Custom Search is supposed to be added beside the already existing intra-search queries for enhancements and betterment of search results. The features results for search terms and related tags in the top of the search results will be implemented. This New Design is a step towards better display of search results.

The sections left are Dashboard and Profile Section.
Both the section consist of huge information and massive change in Design. Thus they were left for later part of timeline of intern.

This work has been done under an awesome collaboration. All the section were divided further into smaller parts and those parts were resolved in form of Patches or Pull Requests.

I did came across problems and breaks. But there always been mentors and other participants forward for help in resolving it.

The team is amazing and support from mentors and reviewing team is immense. It's great to be a part of such amazing team.

Thanks for giving it a read ❤.