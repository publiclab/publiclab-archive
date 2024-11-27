---
nid: 24483
title: GSoC 2020 Report: PublicLab.Editor Repair and Fortification
path: public/static/notes/keshavgarg234156/08-30-2020/gsoc-2020-report-publiclab-editor-repair-and-fortification.md
uid: 613595
tagnames: 
---

# GSoC 2020 Report: PublicLab.Editor Repair and Fortification

## About Google Summer of Code

Google Summer of Code(GSoC) is an Open Source program run by Google focused on bringing more students developers into open source software development. Students work with an open-source organization on a 3-month programming project during their break from school.

## 

## What did I do?

1. **Added Eslint, lint staged, and Husky: **Eslint is a tool for identifying and reporting patterns faced in ECMAScript/JavaScript Code, with the goal of making the code more consistent. In order to force the contributor to use Eslint before they commit their code, we will use Husky. So now this ensures that code is properly indented before it is pushed to the main branch. 
2. **Added Custom Insert text Module: I**nline Power tags are used to insert a list of notes for a given tag eg. \[notes:tagname\]. But it's difficult for a non-programmer to know the syntax for inserting it in Markdown. So the Custom Insert text Module helps in overcoming these issues. It looks like as shown in picture below![image description](/i/40741.png "f934b782a933bae8424b553334f4ab58c23bf34e.png") ![image description](/i/40743.png "bdb3bfbe04ac503dc51950bb6ff7cca1087b3e45_2_282x500.png")Now you can select from dropdown different option to insert: Notes, Nodes, Wikis, Activity, Question, and different way to Insert: Grid or List. The major difficulty that arose was inserting at live caret position, But with the consistent help from mentors, it was implemented as well. Tests were also implemented to check the syntax in both rich and markdown mode. 
3. **Added Custom Maps Module: **Similar to Custom Insert text Module Customs Maps Module was also added.  For Maps,![image description](/i/40746.png "700d23ca325bd03b5c281c83c07ec0a31780e4f4.png") we have different Option: Latitude, Longitude, and tags  
4. **Updating Bootstrap from version 3 to version 4: **PublicLab.Editor uses Bootstrap 3 and PublicLab.org uses Bootstrap 4\. There is a considerable amount of difference between both versions of Bootstrap that lead to inconsistencies. This also leads to redundancy of code. So it is being updated to Bootstrap 4\.

  
At last, I would like to thank my mentors and co-team members for consistently reviewing my work during the whole GSoC period and before that as well.