---
title: "Outreachy proposal: MapKnitter.org Spam Management system"

tagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: Akinkunmi02
path: /notes/Akinkunmi02/04-10-2022/outreachy-proposal-mapknitter-org-spam-management-system.md
nid: 30327
uid: 793513

cids: 29972,30057,30087

---

# Outreachy proposal: MapKnitter.org Spam Management system

by [Akinkunmi02](../../../profile/Akinkunmi02) | April 10, 2022 00:01

April 10, 2022 00:01 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

---------

## About me

Hi, I'm Azeez Ibrahim, a self-taught Full-Stack Developer with experience in Ruby, Python, and Javascript. \__I have gathered hands-on experience working in freelancing roles. I have acquired skills in most phases of software development including professional experience with industry best practices(Git Flow, Linters, Pair Programming, OOP, SOLID, MVC, TDD) and mastering mainstream technologies in web development(Python, Ruby on Rails, React/Redux, JavaScript(ES6), SQL and ORMs) by building 20+ real-world projects. I also have some projects which I have worked on the production._

_I am an aspiring leader with excellent communication skills and an ability to learn quickly, who is socially oriented, has a strong self-motivation to get to know people from all walks of life, has a natural enthusiasm for all types of ideas and projects - mine and others and is ready to do whatever it takes to achieve his goals and dreams. I am also an orphan looking for opportunities to better myself and become an instrument of change in my society._

_I love coding specifically because I love coding because it gives me fulfillment at the end of the day. I call myself code-blooded because coding is more than a career for me, it is my way of life. I want to solve problems, work with an amazing team of developers to create ground-breaking solutions_

**Location:** Lagos, Nigeria

## Project description

_[MapKnitter.org](http://MapKnitter.org) is a free and open-source software created and run by Public Lab to upload your own aerial photographs._

\_MapKnitter can accept maps from any image source, but it particularly lends itself to making maps with balloons and kites. The manual process of making maps with MapKnitter differs greatly from automated aerial imaging systems. In those systems, the imaging is of higher precision and processed with spatial and telemetry data collected along with the imagery, typically at higher altitudes and with consistent image overlap in the flight path sequence. \_Spam is any kind of unwanted, unsolicited digital communication that gets sent out in bulk. Often spam is sent via email, but it can also be distributed via text messages, phone calls, or social media.

[Publiclab.org](http://Publiclab.org) has a range of spam management tools and systems but [MapKnitter.org](http://MapKnitter.org) has persistent spam, even though users rely on [PublicLab.org](http://PublicLab.org) to log in. The proposal aims to create a spam management system for Mapknitter by integrating it with the Public lab system to create a tool that will be like a unified visual style between the systems, implementing user status restrictions for moderated users and maps, and more.

\_

### Abstract/summary (<20 words):

### Problem

_1\. Dashboard Creation: A dashboard is a visual display of all needed/required data which can be used in all kinds of different ways with the primary intention of getting access to information or deducing information from the data supplied. Mapkinitter Spam management dashboard will consist of information like the user info(username); which can also be the map author, map tags, is\_map\_banned, etc. In addition, we can have some quick actions buttons on each map record to do a quick ban on a particular user map._

_From the project, there is a gallery function in the maps controller that returns the list of maps, from these list, we can get the corresponding active record relation on every maps._

```
def all_maps
  maps = Maps.all
end
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
```

![image description](/i/45957.jpg "dash_board_desing.jpg")

The dashboard view can have headers just like the image above

```
2. Dashboard Authorization: The controller to view all records on the dashboard will have before_action authorization to see if the user is a moderator. If the user is not a moderator, then you don't have access to view the dashboard._

<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
```

# check if the current user is a moderator on the application controller

def validate\_user\_is\_moderator
return false unless current\_user

if current\_user.role == 'moderator'
true
else
'User needs to be moderator to access this page'
end
end

```

_On the view controller, we can have an authorization like the sample below_

<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
```

before\_action : validate\_user\_is\_moderator, only: [:view_maps]

```_
_

_3.Link __publiclab.org/spam2 to the MapKnitter spam dashboard: The controller that will handle the //spam2 endpoint will be redirected to the mapknitter spam dashboard. We can have a method below that redirects to mapknitter spam dashboard  
_

<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
```

def spam2
redirect ('[https://mapknitter.org/spam](https://mapknitter.org/spam "https://mapknitter.org/spam")')

```_
_

_4\. List of banned maps by a banned user: A route like //spam2/banned//maps can handle the list of banned maps a user has. This route controller will check if the user is banned, the bring out the list of maps the user has_

_5\. Button to spam all maps a user has: A route like  mapknitter.org/spam/user/ can be used to spam every maps a user has. This route controller fetches all maps created by the user and mark it all has spam._

_6\. Forbid login by users who've been banned on MapKnitter, by setting their status to 0: The user model on the mapknitter project needs to updated by adding an extra column for status. This status column will be updated by an enum _

<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
```

enum status: {
active: 1,
banned: 0
}

```

_7.  Regularly check (hourly? daily?) (when running current_user function) if users have been banned from publiclab.org (via an API call): This feature can be handled by creating a column that records a timestamp for the last time we checked a given user status, and as part of the "current_user" check (which is where we see if they are logged in, and is called regularly), we check if that timestamp is more than 1 hour old. If it is, we update the status and, if necessary, ban them. This is a lightweight solution thats decreases back-end system complexity, and it does not contain much logic to manage.
  
### Timeline/milestones

_Break your project up into small projects -- one per week!_

See this page for guidance on breaking your plan up into small, self-contained parts: [https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration](https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration)  

| Week | Task |
|------|------|
| Week 1 | locally install and run code, complete onboarding to MapKnitter<br> |
| Week 2 & 3| Update the user model by adding status to the model.  |
| Week 2 & 3 <br> | create a cron job that updates this column to 0 if the user is banned on publiclar.org. |
| Week 4 <br> | update the all_maps routes to only accept moderators and add a route on publiclab that links to mapknitter spam dashboard |
| Week 5 <br> | create a route that gets all maps records and also create a corresponding view that renders the list of these records.<br> |
| Week 6 <br> | reconnect broken routes |
| Week 7 <br> | protect broken routes with functional test |
| Week 8 <br> | create a route that displays list of all banned users with their corresponding maps they created |
| Week 9 <br> | create button that updates the list of user maps and mark the maps has spam & create a view to see the listof banned users with a corresponding link to their maps|
| Week 10 <br> | create a function that check if a user is banned or not. The function will be required on the mapknitter homepage. If a user is banned, the user is not allowed to the platform |
| Week 11 <br> | create documentation for setup<br> |
| Week 12 <br> | Pick up further possible tasks from [here](https://github.com/publiclab/mapknitter/issues)<br> |
  
  

  
### Needs

_I was so overwhelmed and even still overwhelmed with the lots of materials and resources we had to go through as a new contributor to the project. But with the continuous mentorship guidance, we received that pointed us to the right sources, this project would be a great success_  

### First-time contribution

Upon joining the project, I did not only make initial contributions alone, I went ahead to also help other contributors create a step by step process on hold they can reolve the plot2 repo issues on gitpod, provided assistance on issues and the channels and also help in creating new FTOs for other contributors. See links below for contribution my contibutions on plot2 and mapknitter projects.

- Comments, to show overall community involvement (like helping others): [https://github.com/search?q=commenter%3Akunmi02+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Akunmi02+org%3Apubliclab&type=Issues)
- Open issues: [https://github.com/publiclab/plots2/issues/created\_by/kunmi02](https://github.com/publiclab/plots2/issues/created_by/kunmi02)
- Closed PRs: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Akunmi02+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Akunmi02+is%3Aclosed), [https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3Akunmi02+is%3Aclosed](https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3Akunmi02+is%3Aclosed)

---------

### Experience

_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples.  
_

_\__

_  
_

_I attended Microverse, an online coding school, to master every aspect of skills a professional programmer should have, from technical skills to soft skills. My stacks are as follows:_

_  
_

_Front-End: React JS, JavaScript, HTML5, CSS3_

_  
_

_Back-End, Tools & Methods: Python, Ruby on Rails, Node JS, Git, GitHub, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools_

_  
_

_Professional: Remote Pair-Programming, Teamwork, Mentoring, Problem-Solving, Communication\__

_\__  

_  
_

_I built a \[Url Shortner Tool\](https://github.com/kunmi02/url-shortner/) from scratch for using Ruby on Rails_

_\__

__

_More of my interesting projects are been showcased in my Portfolio and all my public repository projects are on [Github](https://github.com/kunmi02) _

---------

### Teamwork

_Pair-programming and Teamwork are top of the list of soft skills I learned while coding. I have been working remotely for over 2 years with so many developers from diverse cultural backgrounds. We took turns in working as either a navigator or a driver while sharing our screens. We would work on requested changes on our projects were being approved._

__

_I also worked in a team made up of 3 people from different countries . We met every morning for our daily morning standup meetings. During the morning standup, we would take turns in sharing what we worked on the previous day and also discuss what we will be working on today while not forgetting to share if we have any blocker delaying our prgress. At times we would do mob programming that entailed working on a coding challenge from Hackerrank or Leetcode together.  Sometimes, we do pair reviews on our PRs. This made coding fun and interesting. Every week, one of us would volunteer to be the scrum master. This was my favorite role to play, where I would create GitHub issues, take done scrum notes, and hold my team members accountable for both their absence and progress. This position always pushed me hard to top up my game since I was responsible for the progress of the others._

---------

### Passion

_Understanding that Public Lab is a community where one can learn how to investigate environmental concerns using DIY techniques amongst other effective solutions, immediately presented the perfect opportunity for me to apply the knowledge I acquired while studying for my Bachelor's degree in Computer Science where I worked on so many projects addressing Open science issues. This project is a perfect blend of my Computer Science degree and Software Development knowledge and I would be so excited to seize this opportunity to positively impact the environment through my contributions._  

_  
_

### Audience

_This work is for the Public Lab open network made up of community organizers, educators, technologists, researchers working to create spam management issue to make sure that details are actually true and confirmed, and open source contributors like myself trying to make the world a better place in our own way one code at a time_  

### Commitment

_I am available for 40 hours during the week. I can work from 9 am to 5 pm GMT+1 which gives me a perfect balance between work and life._<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor"></div>
<div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div>
```