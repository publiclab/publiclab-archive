---
title: "GSoC 2017: Final Report on Wiki Discussion"

tagnames: 'software, gsoc, google-summer-of-code, gsoc-2017, soc, soc-2017, response:14788'
author: Ashan
path: /notes/Ashan/08-23-2017/introducing-inline-commenting-for-wiki-pages.md
nid: 14781
uid: 502016

---

# GSoC 2017: Final Report on Wiki Discussion

by [Ashan](../../../profile/Ashan) | August 23, 2017 16:36

August 23, 2017 16:36 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [google-summer-of-code](../tag/google-summer-of-code), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [response:14788](../tag/response:14788)

----

[](null)First of all let me give some overall details of my GSoC project as following described features are results of GSoC 2017 program.

### Project Details
**Project Proposal:** [ https://publiclab.org/notes/wiki-discussion](https://publiclab.org/notes/Ashan/03-13-2017/wiki-discussion)

**GSoC Project Link :** [https://summerofcode.withgoogle.com/projects/#5979137115160576](https://summerofcode.withgoogle.com/projects/#5979137115160576)

**Contributions made :** [for publiclab/plots2](https://github.com/publiclab/plots2/commits?author=aspriya) and [ for publiclab/inline-markdown-editor](https://github.com/publiclab/inline-markdown-editor/commits?author=aspriya)

**Repository Host :** [GitHub](https://github.com/)

**PublicLab's GitHub Organization :** [publiclab](https://github.com/publiclab/)

**Repositories to which contributions were made :** [publiclab/plots2](https://github.com/publiclab/plots2), [publiclab/inline-markdown-editor](https://github.com/publiclab/inline-markdown-editor)

**Languages and Frameworks :** ```Ruby```, ```Rails```, ```HTML```, ```CSS```, ```jQuery```, ```javascript```

**Project Planner GitHub Issue :** This GitHub issue has a checklist of all my contributions during GSoC with references to all pull requests -- [work plan](https://github.com/publiclab/plots2/issues/1438)


## Inline Commenting
Under phase 3, I implemented the feature called `inline-commenting` for wiki pages. It is described follow:

### What is this feature
In PublicLab, wiki pages are used very often to collect information, do documentations, to give instructions on projects and etc. Under my gsoc project I'm trying to make wiki pages more interactive. One step for that is to give wiki readers ability to add comments on sub-section basis. You can think of subsections as seperate paragraphs.
 
### How to test
Once you are logged in and reading a wiki page, click the green pensil icon in the tab menu. It's the button to change the wiki page in to inline rich wiki editor.

What the inline rich wiki editor does is, it breaks the wiki into separate sections using paragraphs. Then when you move your mouse pointer below of a paragraph you will see small pencil, question and comment icons pop up as follows.


[![inline_button_set.png](https://publiclab.org/system/images/photos/000/021/398/large/inline_button_set.png)](https://publiclab.org/system/images/photos/000/021/398/original/inline_button_set.png)



Then when you click the comment icon, a new inline comment form will appear below of that particular paragraph. In there you can add comments related to that paragraph. Following image displays an example for that.


[![inline_comment_form.png](https://publiclab.org/system/images/photos/000/021/399/large/inline_comment_form.png)](https://publiclab.org/system/images/photos/000/021/399/original/inline_comment_form.png)



After that when you click publish button in the form, the comment will be posted and appear below of the paragraph as shown in the following image. As you can see, in the comment there will be name of the person who posted the comment and time he/she posted.


[![inline_comment_added.png](https://publiclab.org/system/images/photos/000/021/400/large/inline_comment_added.png)](https://publiclab.org/system/images/photos/000/021/400/original/inline_comment_added.png)



When inline comment button clicked again, all will be hidden from your sight as displaying inline comments for all paragraphs at once misguide the attention from wiki page original content. When you need to read/view inline comments for a perticular paragraph or want to post a comment regarding that paragraph, you can click again the inline comment button.

A simple workthrough video for the above discussed inline commenting can be found by navigating to following youtube link:
https://www.youtube.com/watch?v=GjsVmNXftFk

### NOTE:
THIS FEATURE IS NOT YET PUBLISHED TO LIVE SITE. THIS RESEARCH NOTE IS FOR INTRODUCING UPCOMING FEATURE.


## Future Work:

I still have the inline sugggestion feature to be completed and I'm currently working on that feature in a separate branch.

And in above described inline-commenting feature, although a inline comment can be set, still there is no any button to delete an inline comment. That also has to be implemented.