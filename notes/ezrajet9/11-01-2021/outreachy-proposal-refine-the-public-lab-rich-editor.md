---
title: 'Outreachy proposal: Refine the Public Lab Rich Editor'
tagnames: zoom:6, lon:30, outreachy-winter-2021, clear
author: ezrajet9
path: /notes/ezrajet9/11-01-2021/outreachy-proposal-refine-the-public-lab-rich-editor.md
nid: 28016
uid: 776386

---

![](https://publiclab.org/public/system/images/photos/000/045/015/original/form.png)

# Outreachy proposal: Refine the Public Lab Rich Editor

by [ezrajet9](../profile/ezrajet9) November 01, 2021 10:24

November 01, 2021 10:24 | Tags: [zoom:6](../tag/zoom:6), [lon:30](../tag/lon:30), [outreachy-winter-2021](../tag/outreachy-winter-2021), [clear](../tag/clear)

----

# About me

_I am Tumusiime Ezra, Computer Science finalist at Mbarara
University of Science and Technology, Uganda-Africa. During 2018, I got
introduced to basic programming using C, later on started on web
development in the same year where we looked at PHP, HTML, CSS and basic
JavaScript. With this little introduction, a passion for advanced
programming sparked in me, I enrolled for ALC-GADS in 2019 where I quit
from the Project Phase after acquiring maximum skills in basic-advanced
JavaScript, Responsive design, CSS, Bootstrap and APIs._

In 2019, I also received introduction of basic to advanced Java
programming which introduced me to OOP. I also obtained the basics of
Python which I gained a lot of interest in, self-taught myself a full
framework of Django and git. All these gave me enthusiasm to start
working on real-world scaling projects like [Nonix Uganda backend API](https://nonix.herokuapp.com/api/hotels/), my personal projects like [LAMS](https://lams.caninesafaris.com) and [my final year project at university](https://yieldupp.herokuapp.com) in 2021\.
I was also selected as a mentor of the GADS-ALC 2021 where I am still volunteering as a mentor upto date.
I also worked as an intern instructor for internship students at Empower Youth In Technology(2021).

I love discovering, programming, teaching, outing, watching movies and networking.

**Location:** Uganda

## Project description

This project covers a lot of small hiccups that are observed on the
current post page of the blog using the public lab' rich text /markup
editor.

### Abstract:

The projects looks at re-using the user's saved coordinates for
default address, avoiding staking of tooltips, adding keyboard shortcuts
to close tooltips, and adding a reset/clear option on both the whole
form and the editor alone.

### Problem

As introduced in the project description, this project looks at three issues that are discussed below. [The public lab](https://publiclab.org/post?tag=blog)
editor is a powerful yet easy to use editor that supports both Rich
Text and Markup, and other great features such as embedding files,
locating the authors by coordinates

**Prob 1: unsable location coordinates.**

When one creates an account on the public lab, they access the button below which requests them to add location as shown below.

![image description](https://publiclab.org/i/44983.png "mapbutton.png")

When clicked, it first opts the user to allow the system to have
access to their location, when the user does, the model below is
presented to them.![image description](https://publiclab.org/i/44984.png "maplocfull.png")

This form is almost similar to the form that is available on the post
page. However, from the above page, if the user had already selected
location addresses, they are shown in the field however India keeps
selected in the map field.

However, even when a user selects the coordinates or chooses to use
their current, the system presents a save button which should actually
save the address for future reference(hopefully that's the case).

With the above background, the same user who saved the address
coordinates attempts to create a blog and are still presented with the
same section of adding location cordinates with India still selected as
shown below.![image description](https://publiclab.org/i/44985.png "form.png")

**Suggested solution**

Now at this point, that's where this project suggests reusing the
saved location coordinates. While a user trying to create, the incoming
profile should be checked if it contains a saved location, if it does,
an option of use my current location can be provided which should be
auto selected by default on the map. Unless the user chooses to adjust
it, it can be used as their default location.

The project suggests the following adjustments in the location section.![image description](https://publiclab.org/i/44988.png "firstupdate.png")

The project tends to follow the following procedures/flow on every incoming profile to the post creation page  
![image description](https://publiclab.org/i/44989.png "flowchart.png")

The rest of the project location is very fine and can be fully
maintained but with this upgrade, users who have saved their location
can now reuse it through this way unless they wish to change it.

**Prob 2: Stacking of tooltips.**

Whereas this may not seem to be a big issue, it may become an issue
when it comes to accessibility. Tooltips provide a seamless and smooth
way to extend the current selection. They are highly preferred over
models and other alert types because of being very light. I hope these
and more reasons are why they were chosen to be used in the editor under
editor tools **Attachment** and **Table**.

Illustration of the usage of these tooltips.

![image description](https://publiclab.org/i/44994.png "tooltips.png")

This usage seems fine, however, when one clicks to open any other
tool that opens a tooltip, it too, opens and gets stacked on top of the
existing one. This denies the user access to the previously opened
tooltip, that stays in some persistent state till one clicks its parent
button.

Illustration of the problem

![image description](https://publiclab.org/i/44995.png "tooltips2.png")

**Suggested solutions.**

**1\. Adding esc event listener.**

This can be added on the button to toggle any open tooltip

Simple Algorithm for esc.

```

1. If user opens a tooltip
2. Add opened tooltip to a stack
3. If user presses esc key: [Listen to esc key press]
4. If stack is not empty: [Check if there are open tooltips in the stack]<br>
5. Remove last added tooltip from the stack.
6. Return new stack

```

**2\. Prevent opening of more than one tooltips at ago**

We can also achieve this very step by also closing any existing open
tooltips if user opens a new tooltip. This will ensure that there will
never be more than one tooltip open at the same time.

Simple algorithm for the feature.

```

1. Is user opening a new tooltip? \[Listen for when the user is trying to open a new tooltip\]
2. close existing opened tooltips
3. open the newly requested tooltip
4. stop

```

**3\. Adding alt-tab event listener to switch between opened tooltips**  
Using this procedure, we can persist the current behavior, but allow
users to switch between/among opened tooltips. This may even be more
flexible and adorable over all the previous procedures I suggested.

Algorithm for this

```

1. User opened a tooltip?\[listen to opening a tooltip event\]
2. add open tooltip in a stack/array
3. User presses alt+tab ? \[listen to when the user clicks on the alt + tab keys\]
4. currently focused tooltip loses focus
5. next tooltip in array/stack gains focus
6. current tooltip shifts to the end of the array
7. next tooltip shifts to the beginning of the array
8. stop

```

Through these steps above, we can now flexibly switch among/between
tooltips. (Idea inspired by Ubuntu's way of switching between windows)

**3\. Resetting and saving drafts --\>also known as forgiving**

Not every time the user wants to start writing they actually do
finish. At times writers may change their idea on the way and end up
wanting to choose another topic or trash the current one. This on our
platform is suggested to be done two ways.

3.1 Saving drafts instead of publishing.

Currently outreachy applicants are working on their proposal(if you
are reading this line, then you are looking at one). However, writing a
proposal is not something you achieve in a minute, one writes, breaks,
comes back, and resumes. The current approach is that once you start
writing, you publish your content to be live, then you may later edit it
along. This may look good to your mentors who will instantly view your
proposal as you work on it.

However, this may also lead to posting half-baked proposals that are not ready for publishing.

**Suggested solution.**![image description](https://publiclab.org/i/44996.png "savedraft.png")

With the above, save draft put in place, one can have on their menu an additional link for their saved blogs as below![image description](https://publiclab.org/i/44997.png "mydrafts.png")

With now this in place, one can one on their article, save it, find
it in their drafts and update it to make it better and better, when they
feel, it is complete, they publish it.

Also, the editor(text area is currently not forgiving), one has to
press ctrl+A to highlight everything or them to clear, therefore, this
project further suggests the change below on the current editor.![image description](https://publiclab.org/i/44998.png "clear.png")

With #clear in place, one can smoothly reset the data of everything in the textarea by just one click.

### Timeline/milestones

| Week<br> | Coverage |
|----------|----------|
| Week 1 Dec-6 to Dec 12 2021(community bonding)<br> | Get familiar with the code base, preparing my environment(gathering requirements)<br> |
| Week 2 Dec-13 to Dec 19 2021<br> | Create an issue and start discussing on reusing the location.<br>Gather enough guidance and sources to be ready to start on coding the project<br> |
| Week 3 Dec-20 to Dec-27 2021<br> <br> | Implement reusing the saved location coordinates.<br>Submit a PR, close the above issue<br> |
| Week 4 Dec-28 to Jan-3 2022 | Create another issue and start discussing on removal of stacking of tool-tips in the editor.<br>Gather enough guidance and sources to be ready to start on coding the project |
| Week 5 Jan-4 to Jan-11 2022 | Work on the tooltips.<br>Create their PR<br>Close the above issue.<br> |
| Week 6 Jan 12 to Jan 19 2022<br> | Create another issue and start discussing on the resetting functionality<br>Gather enough guidance and sources to be ready to start on coding the project<br>Subdivide the project into two - Adding the drafts section, and resetting the page and editor by button click.<br>Create two independent issues tickets.<br> |
| Week 7 Jan 20 to Jan 27 2022 | Workon adding  reset button on the whole form and on the editor<br>Close issue about resetting with a PR<br> |
| <br>     | <br>     |

## Drafting the drafts page.

| Time frame<br> | Tasks<br> |
|----------------|-----------|
| Week 8 Jan 28 to when the project is complete<br> | Workon drafts.<br>Updating UIs accordingly<br>Design the drafts page<br><br><br> |

## Finalising

If time permits, I will finally draft a report for the whole project
covered. This will highly depend on how long I will take drafting the
drafts page.

### Needs

_This project seems huge for a first-timer, therefore, more montor
guidance, more help from other participants will be of my rescue. The
rest of the content is really available already._

Since the project covers some portion that is going to interuct,
with the backend, creating saved but unpublished articles as drafts,
someone from the backend would be a plus on to team up.  
  

### First-time contribution

I worked on my [FTO-issue](https://github.com/publiclab/plots2/issues/10339) and solved it with [this PR](https://github.com/publiclab/plots2/pull/10340).

However in the process, I have also contributed to other open source projects like Fedora web apps, django

---------

### Experience

I have experience working with JavaScript, JQuery and AJAX. I have
also a working experience with Python with its frameworks of Django and
Django RestFramework.  
  

_Worked on real-world projects such [YieldUp](https://yieldupp.herokuapp.com/), which is both web and mobile written in Python, Django and JS(JQuery), [nonixuganda](https://guests.nonixuganda.com/) which is react powered, [nonixuganda-api](https://nonix.herokuapp.com/admin/) and my personal project [AfricanTalks](https://africantalks.nonixuganda.com/) alongside its backed on [AfricanTalks-api](https://africantalks.herokuapp.com/admin/login/?next=/admin/)._

---------

### Teamwork

_I have teams and collaborated with other members in varous
aspects. As part of my career, I was part of the committee which headed
programming under the umbrellas programming club and MUCOSA in our
university._

_I also was on the first GDSC team that introduced the club/association in our campus. I was the teams Events lead._

I discovered thay alot is always achieved in a group and that's what
inspired to convert my final year project to open source so that we can
achieve bigger.  
  

---------

### Passion

Am inspired by the motivation behid PublicLab, keeping a friendly
eco-environment for everyone. Also, I have great passion in solving
problems that serve a bigger community and as of this result, I have
started working on some JS libraries which will be released soon, for
use to solve problems I found while working with JS.  
  

### Audience

Currently, everyone posting an article on our platform is my target
scoope, am ensuring that they have a friendly experience with the
platform. These people are many, therefore, my audience is really wide!  
  

### Commitment

Except a few breaks during the holiday season which are just 3 or
less days, otherwise, I commit myself to be available throughout the
whole internship season.