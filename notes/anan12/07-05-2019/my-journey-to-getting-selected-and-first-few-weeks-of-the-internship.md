---
title: "My journey to getting selected and first few weeks of the internship"

tagnames: 'soc, outreachy, soc-2019, outreachy-2019'
author: anan12
path: /notes/anan12/07-05-2019/my-journey-to-getting-selected-and-first-few-weeks-of-the-internship.md
nid: 20009
uid: 577881

cids: 25077

---

![](https://publiclab.org/public/system/images/photos/000/033/526/original/image.jpeg)

# My journey to getting selected and first few weeks of the internship

by [anan12](../../../profile/anan12) | July 05, 2019 19:50

July 05, 2019 19:50 | Tags: [soc](../tag/soc), [outreachy](../tag/outreachy), [soc-2019](../tag/soc-2019), [outreachy-2019](../tag/outreachy-2019)

----

I am an open source enthusiast and have been contributing to open source for the past
few years.
Recently in February of this month, I decided to apply to Outreachy.
Outreachy provides internships to work in Free and Open Source Software (FOSS).

![image description][1]

I started off in early Feb. The first step was filling up the application form and
deciding an organization to contribute to.
I decided to contribute to Public Lab which is a DIY environmental community.

![image description][2]

  [1]: /i/33528.png "2.png"
  [2]: /i/33529.png "3.png"

The first step was to understand and install Public labs code base. The projects used
either Java script or Ruby primarily.
I was new to Ruby so understanding the project took me a while. I had to start from scratch to understand their code base.
I learnt Ruby from tutorials online and after hours of looking through the communities code I
felt I can finally contribute to it.

The first issue i solved on the public lab community was a small One line change that
changed the UI of their website.
This was just the beginning, after this I went ahead and solved various issues related to
form validation, statistics and graphs visualization, map related issues and
documentation.

While solving many issues at one go, I faced problems with different branches on
github and rebasing. I had never worked on so many issues at a time and in such a big community. 

It seemed intimidating seeing huge files and lines of code at first but
slowly with the help of my mentors I got a hang of Git workflow in Public Lab.

I really nice learning from the application phase was creating new issues for new
comers in the organization. I had a lot of fun opening easily documented new comer
issues called “First timer issues” and guiding new contributors to the community.

The next step was reviewing Pull requests. This taught me how to look at and
understand other people’s code. While working in a large community collaboration is
the key to successfully getting work done.

While opening new issue and reviewing PR’s I felt very responsible and my mentor
also kept encouraging me to take on the leadership role as well apart from just
contributing to an org.

I drafted my proposal and submitted it in April. On May 6 th I was informed I was
selected as an Outreachy Intern with Public Labs.

All the effort had indeed paid off !!

Here You can see my contributions to Public Lab

Issues created by me in Leaflet Environmental Layers:  
https://github.com/publiclab/leaflet-environmental-layers/issues/created_by/ananyaarun

PR's raised by me in Leaflet Environmental Layers
https://github.com/publiclab/leaflet-environmental-layers/pulls/ananyaarun

Issues created by me in plots2:
https://github.com/publiclab/plots2/issues/created_by/ananyaarun

PR's raised by me in plots2:
https://github.com/publiclab/plots2/pulls/ananyaarun

Issues created by me in Publiclab.editor:
https://github.com/publiclab/PublicLab.Editor/issues/created_by/ananyaarun

Internship period
I officially started the internship recently.
I am working on the project titled
“ Extend Leaflet Environmental Layers with new layer menu and layer addition workflow”

Leaflet Environmental Layers - LEL - is a collection of different environmental map
layers in an easy to use JavaScript Leaflet (https://leafletjs.com). This library is
rapidly has many new layers being added, but there is no structure or workflow to it.
When displayed the layers are not segregated conceptually and is hard for the user to
understand the current process. 
My Project aims to add additional structure to make
the display/management of leaflet environmental layers smoother and maintainable
and allow better data flow/handling.

I was about to start my Internship work, so I pulled the latest changes to my local
installation and for some reason the repo suddenly failed to build.
After 2 days of trying everything possible regarding node and npm installation and
trying to build the repo, with my mentors help I figured that it was a PR merged
about a month ago that was causing the build to fail. Accidentally redundant code had
been merged and there were issues in the ordering of scripts that caused the build to
fail.

So this lead to the first challenge of my internship – to fix this !

After a few technical challenges I faced, I was finally able to fix the code and now It
feels great to know the repo builds again when new users pull it.
I can’t wait to move ahead with my project now!
The initial application period was like the most significant project I have worked on
and learnt a lot from. That experience would be worth it even if i had not been
selected.

I know and am aware there will be challenges moving ahead with my actual
internship but I am ready to give it my thousand percent and complete my project.

All source code and code snippets can be found here
https://github.com/publiclab/leaflet-environmental-layers

My detailed proposal for this internship can be found here
https://publiclab.org/notes/anan12/04-01-2019/outreachy-proposal-extend-leaflet-
environmental-layers-with-new-layer-menu-and-layer-addition-workflow