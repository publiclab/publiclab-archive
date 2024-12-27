---
title: "Outreachy proposal: Optimize perofrmance and accessibility of Public Lab content"

tagnames: 'software, soc, outreachy, first-time-poster, soc-2020, outreachy-2020, outreachy-2020-proposals, response:23084'
author: opetunde_adepoju
path: /notes/opetunde_adepoju/03-19-2020/outreachy-proposal.md
nid: 23186
uid: 672574

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/038/647/original/outi.png)

# Outreachy proposal: Optimize perofrmance and accessibility of Public Lab content

by [opetunde_adepoju](../../../profile/opetunde_adepoju) | March 19, 2020 11:40

March 19, 2020 11:40 | Tags: [software](../tag/software), [soc](../tag/soc), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [soc-2020](../tag/soc-2020), [outreachy-2020](../tag/outreachy-2020), [outreachy-2020-proposals](../tag/outreachy-2020-proposals), [response:23084](../tag/response:23084)

----

# About Me

Name: Opetunde Adepoju

Affiliation: LAUTECH

Github: [link text](https://github.com/theOpetunde)

Location: Nigeria

## Abstract (Summary)

Optimize web performance and improve web accessibility and printability of Public Lab's website and web content

# Problem

I believe we have a problem that can be classified into three "sub-problems".

**1\. Web performance and slow internet issues**

With a Page speed score of 53% and a YSlow score of 58%, the PublicLab's website has low performance compared to the average score of 72% of most websites. From my analysis through gtmetrix, I found that this is caused by 5 critical issues:

1. Large website JS file size: The current JS file size is 8.5MB (report from GTMetrix). This can be reduced by 31% when the JS code is compacted by deferring parsing of JS files and minifying JS files, without compromising the code quality.
2. Browser caching not optimally leveraged: Page load times can be improved by asking visitors to save and reuse the files included in the website. This will in turn reduce page load times for repeat visitors. As of now, this is not implemented on the Public Lab's website.
3. Image not Optimized: As of now, Public lab's website does not load appropriately sized imagees to reduce image size and increase load speed
4. Order of styles and scripts not optimized: External stylesheets and inline scripts are not correctly ordered. This in turn disables better parallelization of download and reduces browser rendering speed.
5. Too many small external CSS files that can be inlineA summary of the issues are found in the image below:

![image description](/i/38645.png "Screenshot_(6).png")

**2\. What corornavirus has to teach about web accessibility**

The pandemic has forced many companies and transactions to go online and questions like, "can a customer use the keyboard instead of a mouse to navigate through the website effortlessly?", "Can a blind user use the screen reader and get information independently?" are pertinent and all websites need to answer these questions by making web pages more accessible. Simply put, web accessibility standards need to be met. From color contrast to font size, web accessibility helps to provide ease of use for all users, especially users with disability or impairment. This is why this project takes priority in improving the web accessibility of Public Lab. I did an analysis of the PL's web accessibility with [www.boia.org](http://www.boia.org/) and found a number of issues as seen in the image below:

![image description](/i/38643.png "Screenshot_(20).png")

![image description](/i/38644.png "Screenshot_(19).png")

To put it in plain and simple text, Public Lab's website has accessibility issues such as:

- Failed color contrast pairs
- Inoperable user interface components
- Unresponsive to zoom in. The content cuts away when the website zooms in to a larger degree
- Relationship between information on the website not properly aligned

**3\. Web printability**

Web printability is just as important as web accessibility. While Public lab's website currently uses the CSS print style, we need to create safeguards to ensure this functionality remains protected from inadvertent breakage by future contributions, during the change to the wiki page and layout.

# Project Description

**AIM**

In this project, our aim is to optimize Public Lab's website performance, accessibility and printability to enable ease of use for all Public Lab website's users, especially those in areas with slow internet connection and those with impairments, for faster and easier access to the website's content, and offline accessibility. The target of the project is to increase the PageSpeed to 72% and the YSlow analysis to 73% by the end of this project.

**IMPLEMENTATION METHODS**

1\. Web performance

- compact JS file size: Reduce the JS file sizes by minifying JS code and combining necessary files
- Automatically reduce media sizes while keeping media quality: Update the CSS files to automatically reduce media sizes. This can be done by controlling page breaking
- Arrange scripts and styles optimally for faster loading time: this is a simple task to arrange the files in appropriate order to increase page load speed
- Add styles inline for styles in small external CSS files
- Eliminate unused code
- Leverage browser caching optimally for returning users: This will enable users to download lesser files while navigating through the web page.

2\. Web accessibility

- Match the right color contrast: After accessing the color contrast, there are seven failed color contrast recommendations that need to be changed. I will give a detailed report to the design team on where the loopholes are in order to implement the right color contrast and optimize the website accessibility.
- Find and follow the best web accessibility standard that suits Public lab users.
- Make the website more responsive: We will achieve this by changing the font sizes and other media content on the page from 'pixels' measurement format to 'em' measurement format.

3\. Web Printability

- Make font sizes for headings appropriate and in printable, readable format: Set texts on website to a 12-point text size for readability and printability
- Hide web-only functionality
- Control page breaking: We need to edit the CSS files such that page breaking can be prevented in print format
- Add contextual content especially in relation to links: When a page is printed sometimes the links do not appear in print-format. To solve this, we need to edit the CSS file to display the URL of linked texts in a print view.

```
```

# 

# Timelines and Milestones

The project is expected to be completed between May 20, 2020 and August 20, 2020\. Below is a breakdown of the tasks, timelines and milestones to reach as the tasks are completed.![image description](/i/38655.png "timeline1.PNG")

![image description](/i/38656.png "timeline2.PNG")

![image description](/i/38657.png "timeline3.PNG")

![image description](/i/38658.png "timeline4.PNG")

Needs

- Introduction to the community to know who to meet when I need guidance on subject matters
- Mentors' guidance on how to structure the documentation to meet the standard of Public Lab as an organization
- General support

### My contribution to Public Lab

My contribution to Public Lab began because I love what the organization is building. As someone form a marginalized area, I know how building open source science labs can transform the knowledge of students. With that in mind, I have made 3 Pull requests, two of which have been merged, and created one issue.

[https://github.com/publiclab/plots2/pull/7521](https://github.com/publiclab/plots2/pull/7521)

[https://github.com/publiclab/plots2/pull/7372](https://github.com/publiclab/plots2/pull/7372)

[https://github.com/publiclab/plots2/pull/7380](https://github.com/publiclab/plots2/pull/7380)

[https://github.com/publiclab/plots2/issues/7632](https://github.com/publiclab/plots2/issues/7632)

### Experience

I have experience working as a technical business analyst, a Django developer and a data scientist. I have worked on personal ML related projects such as:

- [Predicting Thyroid dysfunction with Machine learning](https://github.com/widslagos/predicting_blood_donation_with_logistic_regression)
- Predicting students performance from previous scores
- [Building a LogIn API](https://github.com/theOpetunde/profiles-rest-api)
- [Creating a TodoApp with Django](https://github.com/theOpetunde/todoapp-Django)

Also, I write technical blogs on [Medium](https://medium.com/@opetundeadepoju) and organize coding workshops for women in Ghana and Nigeria.

I am thankful for the opportunity to submit my proposal. It is still a work in progress and would love your contributions to make it better. Thank you very much and I look forward to your comments.