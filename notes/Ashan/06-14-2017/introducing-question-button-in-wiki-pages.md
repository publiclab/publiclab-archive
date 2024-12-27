---
title: "Introducing Question Button in Wiki Pages"

tagnames: 'website, gsoc, demo, rich-wikis, gsoc-2017, soc, soc-2017, questions'
author: Ashan
path: /notes/Ashan/06-14-2017/introducing-question-button-in-wiki-pages.md
nid: 14536
uid: 502016

---

![](https://publiclab.org/public/system/images/photos/000/020/789/original/Selection_015.png)

# Introducing Question Button in Wiki Pages

by [Ashan](../../../profile/Ashan) | June 14, 2017 09:49

June 14, 2017 09:49 | Tags: [website](../tag/website), [gsoc](../tag/gsoc), [demo](../tag/demo), [rich-wikis](../tag/rich-wikis), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [questions](../tag/questions)

----

### What is this feature
In PublicLab wiki pages are used very often to collect information, do documentations, to give instructions on projects and etc. Under my gsoc project I'm trying to make wiki pages more interactive. One step for that is to give wiki readers ability to ask questions easily regarding the wiki. Follow I describe how you can test it and hope you could give me some feedback.
 
### How to test
Once you are logged in and reading a wiki page, copy and paste this -> `?raw=true` at the end of the address (URL) in your browser and hit enter (return). So your URL will look something like following.

[![Selection_014.png](https://publiclab.org/system/images/photos/000/020/790/large/Selection_014.png)](https://publiclab.org/system/images/photos/000/020/790/original/Selection_014.png)



What it does is, it breaks the wiki into separate sections using paragraphs. Then when you move your mouse pointer below of a paragraph you will see small pencil and question icons pop up as follows.

[![Selection_015.png](https://publiclab.org/system/images/photos/000/020/791/large/Selection_015.png)](https://publiclab.org/system/images/photos/000/020/791/original/Selection_015.png)



Then when you click the question icon, a new question form will open in a new tab. That question form will automatically have a power tag to indicate that this is a question regarding the wiki page you were reading. So you does not need to worry about linking the question to correct wiki page. And there I’m setting some two other tags also because I’m trying make a relationship with the question and the subsection also. After posting your question, you can notify it to other users by placing a new power tag in the wiki. For an example if you were reading a wiki page whose title is `Data Logging` , then placing a inline tag like `[ question:data-logging ]` (without spaces) in the wiki will display the question you just posted.
