---
nid: 23268
title: GSoC 2020 proposal:Public Lab: Leaflet Environmental Layers (LEL): time slider UI
path: public/static/notes/Dhiraj24/03-31-2020/gsoc-2020-proposal-public-lab-leaflet-environmental-layers-lel-time-slider-ui.md
uid: 553642
tagnames: first-time-poster
---

# GSoC 2020 proposal:Public Lab: Leaflet Environmental Layers (LEL): time slider UI

Public Lab: Leaflet Environmental Layers (LEL): time slider UI  
  
  

- Name: Dhiraj Sharma
- GitHub username: [https://github.com/Dhiraj240](https://github.com/Dhiraj240)
- Email: dhiraj.8.sharma@gmail.com
- Location: Pune India

- Time Zone: UTC+05:30
- Slack: Dhiraj
- Gitter: @Dhiraj240
- RSS Feed: [https://dhiraj240.github.io/posts/](https://dhiraj240.github.io/posts/)
- Possible Mentors: Jeff Warren, Emily Ashley, Sagarpreet Chadha, Divy Khare  
  
  

# 

#   
  
  

## Project Description:

- Leaflet environmental layers is a plugin that offers different environmental maps for people to use. It has different overlays that are made possible by pulling the data from various sources. It is in a healthy state right now but there are definitely some places for improvements. Time slider UI is one of those improvements that could use some help and it can enhance the user experience of LEL to a great extent.  

Technical Details:

- Segregation of time attributes..
- Mocks built on my system as a standalone project not on leaflet.
- ![](https://lh3.googleusercontent.com/UzITC3dPDi23EYTQPLLim7KobGtrKdHKBNlM9fPrxj_p78kDfxJjnlG63KonTVh6FFi47ly44MjIUjAoKzOCIIPTmy0LwjB3SrezSbgtGP5Y3UbCIDqTj9o0MclJYCYHBB30B1Zb)
- The similar above attributes instead of dollar can be added as heat maps
- The code development is very easy here hence i haven't focused on writing it.

Better UI can be developed as below with a decade chart

- ![](https://lh6.googleusercontent.com/0l14wezXBQkgncGQXnoMvxHb7QaY4as9nVkGCUQn3DndIvNd-J70Cge-gTpG9fxSOmaFwclZlIxEX-e2KwilHX84cfDgx4C75oXtO2PNGspP3a2cCYbD6SwdTUxj4WZciU-1DAsm)
- Make the time slider generic so that it can be used with any layer with any data json
- I would be using [https://www.smashingmagazine.com/2017/07/designing-perfect-slider/](https://www.smashingmagazine.com/2017/07/designing-perfect-slider/)

- Moreover the advance development once i achieve would be to show the proper details after decade chart.Like below.
- ![](https://lh3.googleusercontent.com/nlEQInMHMTOUcyvdDlTGuIGq2wZs6h6bUT53i99o6xdPgrsvsQ7wJo9Q99hgbPyREgIML_LZb3zx0xByeFgdF5gtXBuO5_molDK05oKP5mUtZwn7X5LQwZype286w9kcIFvaYign)
- This will be used for Air Quality and every attribute to show the better experience to the user.  
  
  

- For Testing Jasmine will be used at each phase.
- ![](https://lh5.googleusercontent.com/Sj34hxnwkaOjXjmELwOUOkQHsXziS8ldep3rF720qkD4rNHLShimjvvJR07OgF0EjdUkECF7hedUU2hV1YbzwOcBzpr5PgGLZqWK0ObTOIQW_ivUeMcK7-wlJ913wl24aFnMs25F)  

## Schedule of Deliverables

Community Bonding Period (May 4th - June1st):

- Get familiar with the codebase
- Learn more leaflet
- Build a mockup.
- Read on more UI/UX design
- More research on similar websites  
  

CODING PHASE 

Coding Phase (June1st to July 3rd):

| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week&nbsp;</span></p>| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Tasks</span></p>| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Goals</span></p>|
| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week 1-2</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(June 1th - June 15th)</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Build initial mockup for air quality attribute.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Check latent time attributes in the overall codebase.</span></p></li></ul>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Build and test it.</span></p></li></ul>|
| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week 3-4</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(June 16 th - July 1st)</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Apply to all attributes the same design</span></p></li></ul>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Build and test it.</span></p></li></ul>|
| <br><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(Phase 1 Eval.)</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Provide deliverables and write blogs</span></p></li></ul>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Blog as a Gist of work</span></p></li></ul>|
  
  

Coding Phase II(July 3rd - July 31st)

| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week&nbsp;</span></p>| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Tasks&nbsp;</span></p>| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Goals</span></p>|
| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week 1-2</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(July 3rd - July 15th)&nbsp;</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Use the decade chart on time slider.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Look for all types of json.</span></p></li></ul>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Completion of the decade chart on time slider.</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Get them tested</span></p></li></ul>|
| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week 3-4</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(July 15th - July 31st)</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Merge all and have it working with the robust fixes</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Blog post</span></p></li></ul><br>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Get the system working</span></p></li></ul>|
  
  

Coding Phase II(July 31st - August 20th)

| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week&nbsp;</span></p>| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Tasks&nbsp;</span></p>| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 14pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Goals</span></p>|
| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week 1</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(July 31st - August 7th)&nbsp;</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Work on jasmine tests alongside</span></p></li><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Merge all in the</span></p></li></ul><p dir="ltr" style="line-height:1.2;margin-left: 36pt;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">main branches.</span></p>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Get the system working.</span></p></li></ul>|
| <p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Week 2- Final</span></p><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;"><span style="font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">(August 7th - August 20th)</span></p><br>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Add final Readme.md and write final blog posts.</span></p></li></ul><br>| <ul style="margin-bottom: 0px;"><li dir="ltr" style="list-style-type: disc; font-size: 12pt; font-family: Nunito, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre;"><p dir="ltr" style="line-height:1.2;margin-top:0pt;margin-bottom:0pt;" role="presentation"><span style="font-size: 12pt; background-color: transparent; font-variant-numeric: normal; font-variant-east-asian: normal; vertical-align: baseline; white-space: pre-wrap;">Implementation and integration in final stage</span></p></li></ul>|
  

Why are you the right person to work on this project?

- I am Dhiraj Sharma from Army institute of Technology Pune India, currently in the final year of my Bachelor of Engineering in Electronics and Telecommunication department.
- I have been contributing to open source since last 2 years and was selected as a Student Developer in the Summer of Code in Space program organised by the European Space Agency. I was among 17 selected developers where I worked on Java, Networking and motion compensation algorithm deployment for Solar flares prediction. I had also used docker containers and sphinx documentation to write the technical aspects of the project.
- I am a Core Developer in coala where I used python programming for linting tools, used antlr and worked on lexer, parser combination for python based libraries.Moreover i reviewed more than 25+ PRs.
- I have worked on a coala, coala-bears project where I merged a patch for the PHP composer, which is helpful in linting the PHP based code. Apart from this I solved some CI errors. I have added language definitions for antlr.g4 grammar files in coala repository and this helped in linting the grammar files related code analysis.I am working on ANTLR i.e Another tool for language recognition where it has been integrated with coala and written in python.I have added a parser for the antlr g4 language to recognize the python grammar files.I am in mentors team of Public Lab organization where I am reviewer and create newcomer issues for people who are new to opensource. 
- I was appointed as [Google Code-In 2018 mentor](https://drive.google.com/file/d/0B2RtT3skwlZraDRjSzdmUDJBV2xPY3BrcDBhY29oWnRVVkpB/view?usp=sharing) mentor in coala.
- I am also a part of Public Lab organisation's mentor and review team where worked on frontend using react and backend using rails.
- Here I was appointed as Google Summer of Code 2019 mentor for a React.js project [https://github.com/publiclab/spectral-workbench.js](https://github.com/publiclab/spectral-workbench.js).
- Please check my[github profile](https://github.com/Dhiraj240) you can simulate through my contribution graph for different organisations and my[gitlab profile](https://gitlab.com/Dhiraj240?nav_source=navbar) where i contributed python code for coala organisation more than[7000 lines](https://gitlab.com/coala/bears/coala-antlr/merge_requests/40/diffs?commit_id=1763800df5158a33f0f6cc6b42ad983c33815587) .
- I am comfortable in working with new technologies in order to enhance my skill set.
- I am the only[Microsoft Student Partner](https://drive.google.com/file/d/0B-2S7-X-7_CtMU1MNTdpRnVFY3ZlaHBzMllNQjBJV1gtZmM4/view?usp=sharing) from my college where I have got subscriptions to datacamp, pluralsight and other technical websites where I have done MOOC courses on Machine Learning using python, a proper course structure for python programming language including libraries like argparse, tensorflow etc.I have followed up with Andrew Ng ML course and[Data Science track](https://www.datacamp.com/tracks/data-scientist-with-python) of datacamp.I have secured Data Science internship with Dr. Sukant Khurana where he published my[final blog on medium](https://medium.com/beatbluewhalechallenge/iot-to-help-patients-with-alzheimers-and-dementia-c72385f9b286) and the[certificate of merit](https://drive.google.com/file/d/1iLK7E3138XiyZmdU7TKmA1F6h0Kk6Rsi/view?usp=sharing) was provided by him to me.
- I got to know about the open source contribution during a contest i.e Girlscript      Summer of Code in my summer vacation in 2018 where I was declared as a winner for[GitBot](https://github.com/Dhiraj240/GitBot-v1) which uses python programming, use of slackclient python package and[web development based projects](https://github.com/GirlScriptSummerOfCode/GirlScript_India/pull/16). You can check my[blog](https://medium.com/@dhiraj240) for this project,[certificate](https://drive.google.com/file/d/0B-2S7-X-7_CtZVRKa2dRcThScnFhRWtLdXZkZjJrQ2RjRWlN/view?usp=sharing) and[upstream merged pull requests](https://github.com/wtfpython-web/wtfpython-web/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclose+author%3Adhiraj240).
- I have been working on decent projects using python language to make[django application and its Rest-API framework](https://github.com/Dhiraj240/APIs-for-Media/tree/master/API_toolkit) .
- I have published a research paper on IEEE Xplore Digital Library where my topic of research was["Wireless Power Transfer"](https://ieeexplore.ieee.org/document/8537297).
- I had an experience with programming in my school days where I worked on Java and My SQL to build a feedback system using JDBC.I followed the programming knowledge in my engineering too due to which I secured summer internship in Bharat Electronics Limited in Ghaziabad for 2 months where I worked on Database Management system to design database schemas using My SQL. Apart from this I learnt PCB Designing, various oscillators, amplifiers circuit, radar communication and electronics core development. I got hands-on experience using the Border Surveillance system and built a prototype using the Arm microcontroller where I interfaced LCD, Buzzer.  

- I have also done a "Web Development" internship where I worked on a project to develop web portals for rural people use. I worked on PHP login session control and created a responsive website using bootstrap, html, css,javascript having web forms. I used PHP+Mysql db connection with a cloud platform using ajax to handle the uploads done in form like photos etc. I had built up web form validation using PHP SMTP.  

- The second hackathon was held in IIT Delhi where I designed a special pot which had NASA recommended plants like aloe vera, exhaust fan (fixed below roots), Raspberry Pi and gas sensor. I designed a decision tree using Machine Learning for providing the information to users to use certain things which can improve indoor air quality. My team was among the top 5 selected projects where I received a grant of Rs.25,000 and winning amount of Rs.10,000\.  

- I have done an internship in Wipro India Limited.
- Making clusters of sentences with the same percentage similarity using NLP and increasing the software speed through the use of parallel computing.
- First the document is cleaned using scrubbing which includes removing noise, lemmatization, removing numbers and then comparing the resulting sentence using a spacy module.
- The speed of comparison is increased using distributed systems using apache spark which uses master slave configuration where data.Below is a repository link.
- [https://github.com/Dhiraj240/NLP](https://github.com/Dhiraj240/NLP)  
  

Open Source Contributions

For Public Lab:

I have been contributing to Public Lab since 2 years and part of mentor and review teams.

[https://github.com/Dhiraj240?tab=overview&from=2018-11-01&to=2018-11-30&org=publiclab](https://github.com/Dhiraj240?tab=overview&from=2018-11-01&to=2018-11-30&org=publiclab)  

For corobo repo:

- Merged PR:[https://github.com/coala/corobo/commits/master?author=dhiraj240](https://github.com/coala/corobo/commits/master?author=dhiraj240)

For coala repo :

- Merged PR:[https://github.com/coala/coala/commits/master?author=dhiraj240](https://github.com/coala/coala/commits/master?author=dhiraj240)
- Issue opened:[https://github.com/coala/coala/issues/5834](https://github.com/coala/coala/issues/5834)
- Reviewed PRs:[https://github.com/coala/coala/pulls?utf8=%E2%9C%93&q=is%3Aissue+reviewed-by%3Adhiraj240+](https://github.com/coala/coala/pulls?utf8=%E2%9C%93&q=is%3Aissue+reviewed-by%3Adhiraj240+)

For coala-bears repo: 

- Merged PR:[https://github.com/coala/coala-bears/commits/master?author=dhiraj240](https://github.com/coala/coala-bears/commits/master?author=dhiraj240)
- Reviewed PRs:[https://github.com/coala/coala-bears/pulls?q=is%3Apr+reviewed-by%3Adhiraj240](https://github.com/coala/coala-bears/pulls?q=is%3Apr+reviewed-by%3Adhiraj240)  

For coAST repo: 

- PRs:[https://github.com/coala/coAST/pulls/dhiraj240](https://github.com/coala/coAST/pulls/dhiraj240)
- Issues Opened:[https://github.com/coala/coAST/issues/created\_by/dhiraj240](https://github.com/coala/coAST/issues/created_by/dhiraj240)
- Reviewed PRs:[https://github.com/coala/coAST/pulls?q=is%3Apr+reviewed-by%3Adhiraj240](https://github.com/coala/coAST/pulls?q=is%3Apr+reviewed-by%3Adhiraj240)

For coala-antlr repo: 

- PRs:[https://gitlab.com/coala/bears/coala-antlr/merge\_requests?scope=all&utf8=%E2%9C%93&state=all&author\_username=Dhiraj240](https://gitlab.com/coala/bears/coala-antlr/merge_requests?scope=all&utf8=%E2%9C%93&state=all&author_username=Dhiraj240)

antlr/grammars-v4 upstream repo:

- Merged PR:[https://github.com/antlr/grammars-v4/pull/1292](https://github.com/antlr/grammars-v4/pull/1292)  
  

Girlscript Summer of Code:

- [https://github.com/Dhiraj240/GirlScript\_India](https://github.com/Dhiraj240/GirlScript_India)
- [https://github.com/Dhiraj240/GitBot-v1](https://github.com/Dhiraj240/GitBot-v1)  
  

Summer of Code in Space:

- [https://socis.esa.int/socis-2019/students/](https://socis.esa.int/socis-2019/students/) 
- You can check my name in above link, there i was 16 top selected developers.  
  

Commitments:

- As of now, I am placed as a Data Engineer in a good firm during campus placement.
- In this last semester of my final year, I am looking for such great opportunities where I can devote my precious time in staying on the track. 
- Moreover, I have no setbacks and will finish the required work on time once I get selected.
- More advantage is that I am not having any exams to clash with my coding phases.
- Everything is sorted and I can devote a lot of time here.
- I can give 40 hours per week because here in India we have weekend holidays where I can utilize much of my time.  

Why this project?  

- I am from the Electronics & Telecommunication branch where I have Microcontroller and Microprocessors in my curriculum.
- I have worked on LPC 2148 Arm 7, Arduino boards, Raspberry Pi 3 in IOT subject, 8051 and MSP 430\.  

- Moreover I had worked on Digital Signal Processing pipeline structure and used algorithms like FFT, DFT, DTFT and compression algorithms too.
- This project entitles a great interest due to my understanding of the subject which engulfs me to be with it even after gsoc.  

- Rather I have a good grasp over python language and its virtual environment work.
- I know writing unittest and several coding and design patterns in python due to my previous open source organisation experience and internship in Wipro India Limited on NLP task to automate using pyspark.
- Previously i have stated my web development experiences too which is suffice that i will be a good fit.