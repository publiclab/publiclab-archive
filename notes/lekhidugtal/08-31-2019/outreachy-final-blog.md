---
title: Outreachy Final Blog : An awesome Journey
tagnames: design, blog, barnstar:basic, blog-submission, soc, ui, summer-of-code, outreachy, outreachy-2019, gsoc-2019-final-report
author: lekhidugtal
path: /notes/lekhidugtal/08-31-2019/outreachy-final-blog.md
nid: 20736
uid: 577754

---

![](https://publiclab.org/public/system/images/photos/000/034/988/original/o.png)

# Outreachy Final Blog : An awesome Journey

by [lekhidugtal](../profile/lekhidugtal) August 31, 2019 12:32

August 31, 2019 12:32 | Tags: [design](../tag/design), [blog](../tag/blog), [barnstar:basic](../tag/barnstar:basic), [blog-submission](../tag/blog-submission), [soc](../tag/soc), [ui](../tag/ui), [summer-of-code](../tag/summer-of-code), [outreachy](../tag/outreachy), [outreachy-2019](../tag/outreachy-2019), [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

----

Here in this post I would be summing up my contribution for this summer.
We do have this one single link to checkout the whole contribution in project -

https://github.com/publiclab/plots2/projects/10

### What was the aim ?
My project was about revamping the design of various sections pages, sidebar etc. Me and gautamig did it together. We divided an issue of one section into small checklists and get ourselves assigned with those small parts and then starting working on it.
We have covered Tags, People,Profile,Individual tags, Questions pages along with sidebar. Along with that, it included various bug-fixing.

### What I did and What I learnt ?
The first section we covered in the summer of code was people's section as we had already begin working on the major parts. I started off with my parts which were addition of cards for the list of users which included info and other stuff. [#5740](https://github.com/publiclab/plots2/pull/5740). It was great experience with review process and working on responsiveness  (@~_@~). After that I moved forward with small fixes of responsiveness. [#5754](https://github.com/publiclab/plots2/pull/5754).
Then till now, we had a card with details like user info but not tags the user is associated with. So I added in the most recent tags by user on its card [#5765](https://github.com/publiclab/plots2/pull/5765).
![image description][1]
![image description][2]

Gautami completed her portions and then we went to next section.

Yay !! Done with one section. (✖╭╮✖)

The next Section was Questions section , I created a new shadow page for questions page and added first section which included few info [#5787](https://github.com/publiclab/plots2/pull/5787). The idea of shadow thing still looks so COOL !!! (⊙⊙)(☉_☉)(⊙⊙)
![image description][3]

 After that I added featured Question part  [#5861](https://github.com/publiclab/plots2/pull/5861) for which I took bit of time as it included changes in lots of cells (^_^;). I need to check the whole path of calling and adding a shadow function in back-end for popular questions only. We needed to show two features questions and this was third section for questions part.
![image description][4]

Yay !! Done with with another one  (✖╭╮✖)

Then we went to Individual Section page.
I started off with [#5903](https://github.com/publiclab/plots2/pull/5903) absolute fixing of wikis page if included for that tag in background and if not then add default grey with the addition of followers to that particular tag. I guess this PR of mine did create lots of bugs and broke many major things. (. _ . )( . _ .)(⌣̩̩́_⌣̩̩̀)
![image description][5]

Then we went onto to next, I moved forward to as per new design draft changing navs, tabs to dropdowns and vice versa. One of that included distincting between notes questions [#5925]
(https://github.com/publiclab/plots2/pull/5925). 
I wrote my very first extra-small screenshot test here after checking out the code written by jywarren. (✖╭╮✖)  It was of getting redirected to tag page, clicking the button and getting a screenshot of dropdown.
![image description][6]

This is another design change of side-vertical search results [5851](https://github.com/publiclab/plots2/pull/5851)
![image description][7]

And then then then, I moved to next part which was actually something major [#5948](https://github.com/publiclab/plots2/pull/5948). Its not one or two anymore but changing the design of all the cards with all the info for that particular page. I did this kind of work into parts before. But here i went for all in one go. (︶︿︶) And it also included changing the UI test as per new design.
![image description][8]
![image description][9]
Woah !! Done with another one  (✖╭╮✖)

And Finally we came to profile section. I tried something completely new here. _へ__(‾◡◝ )>  I tried building whole profile page in one single go [#5990](https://github.com/publiclab/plots2/pull/5990). (︶︿︶)
 No taking small cases anymore. It was long review process with a lot of requested changes. As it was building up whole section in one PR , so lots of bugs and problems were there (~ _ ~;). And finally after 26 days, It was merged :'). Hurray !! ♪
![image description][10]
![image description][11]
![image description][12]


(✖╭╮✖)

Me and Gautami tried to do various portions altogether. As the portions were dependent on each other and we had to wait for some parts. till that time, I went for sidebar. It was addition of toggle icons :smile: [#6011](https://github.com/publiclab/plots2/pull/6011), We can't leave our sidebar out when all his siblings sections are upgrading with new designs ¯\(°_o)/¯
![image description][13]

Ohk !! trying to build profile page in one go left some features (⌣̩̩́_⌣̩̩̀) and bugs.
Then addition of some buttons and info required as per new design [#6079](https://github.com/publiclab/plots2/pull/6079). And after that addition of popular tags by that user to be shown on its profile section was added [#6120](https://github.com/publiclab/plots2/pull/6120).

I did few small bug-fixes of bootstrap upgrades : [5755](https://github.com/publiclab/plots2/pull/5755),[5756](https://github.com/publiclab/plots2/pull/5756), [#5767](https://github.com/publiclab/plots2/pull/5767), [5772](https://github.com/publiclab/plots2/pull/5772) (˘⌣˘ )

Also, few of the bug-fixing because of the new designs - [5766](https://github.com/publiclab/plots2/pull/5766)

And more than that, I somehow created lots of bugs ¯\(° _ o)/¯, And thus created many first-timer and other bug issues for others to get them fixed. (҂⌣̀ _ ⌣́)
 
First-timers are: [First-timer only issues link](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3ACleverFool77+is%3Aclosed+label%3Afirst-timers-only)

Otherwise, we have lot more issues - [Click to see issues](https://github.com/publiclab/plots2/issues/created_by/CleverFool77)

And some of the recent PRs which are still under revewing process (・_・;) - [#6103](https://github.com/publiclab/plots2/pull/6103) One of them is fixing the mismatch working of subscribe button as earlier we were subscribing to related tags but not that particular tags. And having dropdown for related tag. And if a user is subscribed, then we should have post option. 
![image description][14]

[#6217](https://github.com/publiclab/plots2/pull/6217) And another is addition of all the extra info of questions,notes,wiki to sidebar into `...`
![image description][15]
![image description][16]

### What is left
So Right now, we have one main section left which is Dashbaord. I'll keep on contributing. So My next target is dashboard now. (@~_@~). 

### 

I had an awesome collaboration with Gautami. Special shoutout to @warren for being such a patient mentor.(ø_ø)
Thanks to mentors for solving and answering the silly questions I asked.

And Thanks to PublicLab for being such a wonderful community.

I guess I did miss various openhour calls sessions and was not much of active speaker if attended. (˘_˘٥)

I'll keep on contributing to PublicLab in future too.
Thanks !!

  [1]: /i/35054.png "Screenshot_from_2019-09-02_17-29-49.png"
  [2]: /i/35067.png "Screenshot_from_2019-09-02_17-27-53.png"
  [3]: /i/35055.png "Screenshot_from_2019-09-02_22-56-40.png"
  [4]: /i/35056.png "Screenshot_from_2019-09-02_22-56-05.png"
  [5]: /i/35057.png "Screenshot_from_2019-09-02_23-02-37.png"
  [6]: /i/35058.png "Screenshot_from_2019-09-02_23-02-46.png"
  [7]: /i/35059.png "Screenshot_from_2019-09-03_00-04-41.png"
  [8]: /i/35060.png "Screenshot_from_2019-09-02_22-58-32.png"
  [9]: /i/35061.png "Screenshot_from_2019-09-02_23-00-05.png"
  [10]: /i/35064.png "Screenshot_from_2019-09-02_23-07-49.png"
  [11]: /i/35062.png "Screenshot_from_2019-09-02_23-05-31.png"
  [12]: /i/35063.png "Screenshot_from_2019-09-02_23-05-50.png"
  [13]: /i/35065.png "Screenshot_from_2019-09-02_23-53-24.png"
  [14]: /i/35066.gif "subg.gif"
  [15]: /i/35068.png "Screenshot_from_2019-08-30_17-20-00.png"
  [16]: /i/35069.png "Screenshot_from_2019-08-30_17-19-54.png"