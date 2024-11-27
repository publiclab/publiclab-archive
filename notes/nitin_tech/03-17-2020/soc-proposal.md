---
nid: 23161
title: SoC proposal: 
path: public/static/notes/nitin_tech/03-17-2020/soc-proposal.md
uid: 610628
tagnames: software,soc,response:13975,first-time-poster,soc-2020,soc-2020-proposals
---

# SoC proposal: 

GSoC '19 Project Proposal

Public Labs: Editor repair and fortification

---------

## **About me**

Full Name: Nitin Bhasneria

Email: [nitinbhasneria360@gmail.com](mailto:nitinbhasneria360@gmail.com) n[bhasneria@mt.iitr.ac.in](mailto:nbhasneria@mt.iitr.ac.in)

GitHub: NitinBhasneria

LinkedIn: Nitin Bhasneria - [https://www.linkedin.com/in/nitin-bhasneria-9083b1174](https://www.linkedin.com/in/nitin-bhasneria-9083b1174)

Affiliation: Indian Institute of Technology Roorkee, Roorkee

Location: Uttarakhand, India

Project: DIAL: Editor repair and fortification

Timezone: UTC +5:30 India Time Zone

---------

## **Project description**

The main aim of the project is to improve users' experience in using Public Lab Editor. Currently, the editor has so many bugs present. These bugs will be removed in this project. The editor will be made responsive so that it can work perfectly in any device. New features such as geotagging, improved Docs and tooltips will boost the user experience and make the editor more interactive and less difficult for the users

---------

### **Abstract/summary (<20 words):**

Improving the Public Lab Editor at [https://publiclab.org/post](https://publiclab.org/post) and making bug free.

---------

### **Problem**

\*\*

### The Title Bar:\*\*

1\. The title bar used to give the title for the post or any notes. This also contain a feature by which the titles draw others into your work by adding them. But you will see them sticking which is not good. When you change the title it will take time to reload the suggestion.

2\. Also, when the person is added there is no way to see the added person or to remove them, this makes it useless when we are editing it. There should be the added person names written on the bottom with a remove person button.

### **MainImageModule Fix**

1\. When you open the editor and try to upload the image, the image uploading process will be shown in the blue bar. After this, the uploaded image will be shown in the short screen in image pop up but you will see that the image shown in the pop-up is some overlapping image instead it should contain the image with a low size of the original image. **  
**

![](https://lh4.googleusercontent.com/tlsbAA7qRVabMF548GHeCgk-jI420suq0QZ940QNkLbts600V-5odWS5EXiObcMPGe65AIuJmEVkjifA0QyPb2jxjIBp1ywc2LQvK_dT-FfhKtcQUGanFTkmj8VLMa-GPLwaXKQ8)

2\. Also, If we upload a wrong image there is no way to remove that image. For this problem, the remove image button should be added. 

3\. After uploading the image the "choose file" button should be changed to "select another image".

4\. After uploading you can see the image is overlapping with "Drag the image here", this is looking very weird and so should be removed.

5\. The image should also magnify on clicking the pop-up, by this the user can view the image if they want to recheck it.

  
\*\*

---------

### Image Upload in Editor Module:

1\. If you try to upload the image with your guide to the project, that is, in the editor, you will find that drag and drop of the image is not working properly.

2\. If you try to upload an image with the attachment button then to the following shown error occurs.

![](https://lh5.googleusercontent.com/BCm7QUTQMVmaGP-Zh7nHBaH-hc22jBg_NQV52PzA-eXSvYoXe_2f4N_uOjxKA5rUiMmfScZkonhA_zlX2clPHWpklu4lZctQ6CodkxadAH0Kk2hKBeDFJ9FffCDe3hrWEm6xt76F)  

3\. If you drag and drop the image at the Main Image Module place you will find while dragging the image the editor box turns to grey which is not a good experience to the user while uploading the image.

  
### Editor Module text error:

1\. If we talk about the EditorModule or editor box, if you try to edit any text with bold, italic, quotes, header or any other button you will see the selected text will work as you want but if you click it many a time it will lag behind and will not work fine as before. Maybe it became bold and it will be bold and bold will not be turned into normal on further clicks.

2\. Similarly, if you click any of the buttons like header or bold or quotes it will give some texts with it but on further click, the text won't disappear itself. We should manually remove the text which is not good user experience.

3\. There is no proper alignment of the text. The alignment buttons should be added.

4\. Further, if you write a big para and scroll this up the toolbar sticks at the bottom, which looks like it has some glitch or something. The expected behavior should be that it should stick to it only up to the EditorModule.

![](https://lh5.googleusercontent.com/tzp7Gp2034-3Rd51UPAHpdlz6nRr6xOUMgDodausDdwUgh768rYvM743m2_KpAgwF2ElumUE4hapi1GiaUBvkL7NWjsK-bqM41hItyAu-o0Yq0ZGr0EyyqbM__RKkFizajn9-lyz)  

5\. The hyperlinks are just for seeing they are of no use in the editor, the expected behavior is they should be worked in the editor too and so the user can check the links working fine.

  
### CSS Problems:

1\. This is the one of the main problems as it directly deals with the interaction of the user. Editor is less responsive due to which it degrades the user experience when using the editor on different devices. 

![](https://lh3.googleusercontent.com/nc4BwmU2hW9MJqh54RMb7kezOrvlYEs2lGcX0s47adj4wTknNxYCcql-cYb5Gf5JKSNQZpNs64hNYn7-7aZ4kndXatbB6sClGLARIrgXlqRKCQV3NCUlKcJAkTFzvA5KecmQasOv)

![](https://lh3.googleusercontent.com/ubeRE_FysD_FeTOiL6xWfFZvHAX27fODyyWpddeoe03Uuw9cTKhPCo-mrX45ECrh4qVoW3OQE0nj3FnKpbPU5i-KQHYjCPeP5yxRi3wfIHT0H3zn3fvJrrr42ROMfI9HZHUjZp6X)  

### Tag Module (Tag Integration)

1\. The tag module that is in Zone 5, this zone is used to tag other posts or things as tags connect your work with similar content, and make your work more visible. Now, if the user by mistake takes some wrong post or person which doesn't even exist then the user can't know if they have tagged the right post or wrong. Also, no suggestion for tagging is there anything either right or wrong word can be tagged.  

### Additional Features

### 

1\.  Invite Response.

If you want a response or feedback to your post with a particular person you can use this feature.

2\. Co-Authoring.

By this feature, you can add co-authors of the post or research note.

3\. Event data (calendar selector, RSVP).

4 . Data Embedding.

By this feature, the pasted data can be formatted in the style you wanted. You can choose the chart style. Suppose you have your research notes or post written on some other editor now you have to post this for which you have to use this editor should have the data embedding feature.

5\. List or tables can be added in the toolbar of the editor so as if someone has to insert the table so they can do it successfully.

### **Documentation tooltips for proper interaction.**

1\. Proper guidance to everything makes it easier and comfortable for the users to use the feature. If you see there are no proper tooltips provided. By adding the hover tooltips in each module the interaction with the user will increase which will result in a better experience for users.

2\. Read more buttons are not provided in some modules, even if in some module it is there it is no use. A big siki page opens in some, this makes it little messy for the user to guide themselves to the right thing and they are stuck there thinking if they are at the right place and reading the right thing or not. So the improvement of these documents will increase the guidance to the module in a big manner. We can also provide a separate pop-up to the read more instead of sending them to other page.

  
### 

\*

### **Timeline/milestones**

| Time Period<br> | Tasks<br> |
|-----------------|-----------|
| 18 May - 24 June | <ul><li><p><span>Start solving issues.</span></p></li><li><p><span>Potential CSS bugs will be fixed.</span></p></li><li><p><span>Also, go through the merged and in-progress port PR’s to have a better understanding and discuss doubts related to it with mentors.</span></p></li></ul> |
| 25 June - 8 June<br> | <ul><li><p><span>New potential bugs will be outlined which results in a bad experience for users.</span></p></li><li><p><span>Code lines will be improved and made more versatile and will be included in developer-facing.</span></p></li><li><p><span>The bugs of suggestion will be improved in TitleModule and will be made perfect for the use.</span></p></li></ul> |
| 8 June - 15 June<br> | <ul><li><p><span>Image upload bugs of the MainImageModule and also of the EditorModule will be solved and made properly aligned and pop-up work.</span></p></li><li><p><span>The title bar will be updated and bugs will be removed.</span></p></li><li><p><span>More functions such as colors of the text, bold percent, underline will be added.</span></p></li><li><p><span>Just like the EditorModule, a simple text editor will be provided for the TitleModule.</span></p></li></ul> |
| <p><span>Phase 1 Evaluations</span><span>&nbsp;</span></p><p><span>15 June -19 June</span></p><div><span><br></span></div> | Review the changes with mentors and start working on the responsiveness and tooltip documentations.<br> |
| 20 June - 26 June <br> | <ul><li><p><span>The editor will be made responsive.</span></p></li><li><p><span>Fix remaining bugs and regressions.</span></p></li></ul> |
| 27 June - 3 July<br> | <ul><li><p><span>Documentation tooltips will be added for each Module usage.</span></p></li><li><p><span>The </span><span>TagsModule</span><span> will be improved by providing the Tag Integration and EditorModule will be improved, having the functionality of bold, italic, etc in a perfect and non-sticking way.</span></p></li><li><p><span>Documentation of the entire code will be made for the ease of maintainability and UI improvement.</span></p></li></ul> |
| 7 July - 13 July <br> | <ul><li><p><span>All the modules will be made more interactive for the users by including hover tooltips and help links to the <a href="http://puliclab.org/wiki" id="1584460104938" data-toggle="tooltip" title="" data-original-title="http://puliclab.org/wiki">puliclab.org/wiki</a>.</span></p></li><li><p><span>Fix remaining bugs and regressions.</span></p></li></ul> |
| <p><span>Phase 2 Evaluation</span><span>&nbsp;</span></p><p><span>14 July- 17 July</span></p><div><span><br></span></div> | Discussing changes with mentors and finalizing the changes for the evaluation.<br> |
| 18 July - 24 July<br> | <ul><li><p><span>Feedback sections will be added for the user to give feedback, which can be reviewed to make the editor better.</span></p></li><li><p><span>Fix remaining bugs and regressions.</span></p></li></ul> |
| 25 July - 31 July<br> | Review and test already Editor. Fix bugs, errors, and warnings. Release activities.<br> |
| 1 August  - 9 August<br> | Review the entire work done during summers and make necessary documentation.<br> |
| 10 August - 17 August<br> | <p><span>Make a final submission and discuss future aspects with mentors and the community, which will include:-</span></p><p><span>&nbsp;● Discussion on repair work remaining to be done other than this project.&nbsp;</span></p><p><span>● Reviews from the entire community regarding the impact of this project, for drafting better instances, if required in the future.</span></p> |
| <br>            |           |

### **Needs**

Guidance of the mentors and all the members will be very helpful in approaching the problems. Suggestions regarding the project and the approach for the ideas will be really helpful.

---------

### **First-time contribution**

I am an active contributor to Public Lab for the last three months and now I am quite comfortable working with the code base of Public Lab. Now I am familiar with publiclab/plots2 and I know how it works, which would help me in improving the Public Lab editor.

- Comments:[https://github.com/search?utf8=✓&q=commenter%3ANitinBhasneria+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues "https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues")
- Open issues: [https://github.com/publiclab/plots2/issues/created\_by/](https://github.com/publiclab/plots2/issues/created_by/jywarren)NitinBhasneria
- Closed PRs: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3ANitinBhasneria+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Ajywarren+is%3Aclosed)

---------

### Experience

I am a second year student pursuing B.Tech in MT from Indian Institute Of Technology, Roorkee, India.

I knew C++ firstly which built my interest in coding. After which in college I started web-development. In this I learnt python, php, django, node.js, javascript, react.js, HTML, CSS, ruby and rails. I have done many project which are uploaded in github.

Following are some of my other major involvements:

Hackathon 2018

❏ 3 days long competition os development.

❏ I contributed in the js and built the app which works for the club seating arrangements and tells the remaining slots which are updated every minute.

Alumni Website

❏ Being a part of the Institute Alumni Relations Cell (IARC) of IIT Roorkee, I contributed to the new official alumni website of the campus, coded using the Django framework of python.

Raionzo Website

❏ Working as a frontend and backend developer for official website of Raionzo ,an

initiative of Institute Alumni Relations Cell.

❏ Using Reactjs for frontend and Django for backend development.

NSS Website

❏ Working as a frontend developer for official website of National Service Scheme

under development.

❏ Using html and css for frontend development.

---------

### Teamwork

As mentioned in experience the Hackathon '18, Alumini website, Raionzo website and NSS website were the team participation competition. In this competitions, I came to know how this code base project works in a team. Also, I knew the benefits of team work in development. Team participation can build self esteem, promote social interaction and help one gain a sense of responsibility. If we talk about public labs, I found that the members are so responsive and helpful. I learnt many things from these people. The guidance was so precious for me.

---------

### Passion

When I first encountered a public lab on september 2019, I saw the working of a public lab and with this I got to know how open source works. When I knew how open source work I loved it. The response from the members of the public lab encouraged me very much as they helped and guided me. These things from the public lab made me know more about it. After this I knew about what exactly public lab work for and the search of mine encouraged me more. As I found here people share their ideas and research work related to the environment, which is really necessary and a good thing for today's time. This many things in a public lab is all what I am passionate about.

---------

### Audience

I wish my project would help people who lack in technology as nowadays the one who knows tech is more likely to grow than others. My projects aim to help the people to grow. I want to make my projects such that it is open to all people and it encourages the people who do not use this tech or fear to use or unable to use due to lack of knowledge.

---------

### Commitment

Yes, I truly understand this commitment. My summer vacations are starting from 1 May to 15 July, in that period I can give about 45-50 hours per week and after college starts, I will be able to manage 35-40 hours a week. I have no other commitments for the summer vacations, so I can devote most of my time to GSoC.