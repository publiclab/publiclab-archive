---
title: "GSoC!proposal:  UX/UI QoL Improvements"

tagnames: 'software, soc, lat:0, lon:0, first-time-poster, zoom:2, gsoc-2021, gsoc-2021-proposals'
author: eightballocto
path: /notes/eightballocto/04-13-2021/gsoc-proposal-ux-ui-qol-improvements.md
nid: 26225
uid: 751770

cids: 28808

---

# GSoC!proposal:  UX/UI QoL Improvements

by [eightballocto](../../../profile/eightballocto) | April 13, 2021 19:03

April 13, 2021 19:03 | Tags: [software](../tag/software), [soc](../tag/soc), [lat:0](../tag/lat:0), [lon:0](../tag/lon:0), [first-time-poster](../tag/first-time-poster), [zoom:2](../tag/zoom:2), [gsoc-2021](../tag/gsoc-2021), [gsoc-2021-proposals](../tag/gsoc-2021-proposals)

----

# About me  

My name is Michelle; I'm located in a quaint small town in South Dakota. I'm currently a student at Lake Area Technical Institute majoring in Computer Information Systems as a Programming Specialist. My specific interest in the field of programming/development is web development, both back-end and front-end.

---------

  
# Project description

This project is mainly aimed towards the plots2 repository, and aims to improve the site's performance and overall accessibility for all users.

  
---------

## Navigation  

- Re-organization of the navigation bar
  - Align some items/links to the left, others to the right, depending on their purpose
  - Merge "Store" and "Donate" into a drop-down menu titled "Support Us"
    - Alternatively, have them be in a visible "group" aligned accordingly in the navigation bar.
  - The "search" bar should be moved to the far right and be toggled as either a tooltip or a drop-down via an icon
- The "Public Lab" header text should link to the home page, not the dashboard.
  - Hovering over Topics should reveal a menu that is similar in style to the other drop-down menus
    - General, high-profile topics will be listed, with the last item being "All Topics" separated by a divider.
    - Alternatively, animate it to be a sliding-toggle animation
      - Clicking outside of the area should close this menu
- Hovering over "Dashboard" should bring up the drop-down menu instead of just having it be triggered by the user's icon

## Pages  

- Projects
  - Change it to be an overview of the most high-profile projects, similar to how "activities" are listed on the dashboard, instead of just a list.
  - Limit the amount of "projects" shown to 12 at once and paginate
- People
  - Limit amount of "people" displayed at once to 8; paginate
- Events
  - Three options could be considered to make the page easier to navigate:
    - 1\. Separate large sections into subpages
    - 2\. Move table of contents to top of page
    - 3\. "Hide" content until the user scrolls down, only then will it be loaded
  - Limit amount of "events" displayed at once to 12; paginate
- Dashboard
  - Limit amount of "activities" shown at once to 24 with existing pagination
  - "Issue brief" should be moved to the "Share Your Work" drop-down menu
  - "Questions" tab should show the most recent questions within the past day, hour, or week.
    - Limit to 5 at once; do not paginate, instead, link to the full "Questions" page
  - Add a search component to "Activity" to search for posts or comments by tag names
    - Possibly make it collapsible like the header search bar

## Miscellaneous

- If a special event is being held, announce it via a dismissable fixed message located at the top of the site (globally)
- Messages such as those indicating login success or failure should be floating, not fixed.
  - Alternatively, automatically dismiss these "flash" messages after a period of time.

  
---------

# Abstract/summary

This project aims to make the user experience more enjoyable by fixing or tweaking aspects of the user interface. These changes could also be helpful for users exclusively using a keyboard because of the reduced item count and UX changes.

  
---------

# Problem

The most prominent issue that would be addressed here would be issues with the UX being overall unintuitive and clumsy for the average user; feedback from my peers indicates that this is the most common complaint, along with the site being slow---that of which can be solved by limiting the items as per the ideas presented above.

  
---------

# Timeline/milestones

- Week 1 & 2 --- complete navigation fixes and tweaks
  - Alignment/rearrangement
  - Movement of "Store" and "Donate" to separate drop-down
  - Link header text to home page instead of dashboard
  - Add additional trigger for dashboard drop-down menu
  - Implement collapsible search bar
- Week 3 & 4 --- Modify "Projects" page + "People" page
  - Projects
    - Re-organization of content in preparation
    - Create area of component(s) displaying high profile projects, taking into account the item limit
  - People
    - Limit the amount of items displayed on the "People" page to speed up rendering
- Week 5 --- Modify "Events" page
  - Re-organize, remove, or truncate content on the "Events" page depending on group/community consensus
  - Limit the amount of items displayed on the "Events" page to speed up rendering
- Week 6 & 7 --- Modify "Dashboard" page
  - Move "Issue Brief" to "Share your Work" drop-down menu
  - Show most recent questions under "Questions" tab while providing links to the questions, as well as a link to the "Questions" page itself
  - Add (collapsible) search menu that allows the user to choose between three options for searching: activity name, user, or tag name.
- Week 8 & 9 --- Implementing miscellaneous features
  - Implement "special event" banner
    - Make sure that administrators are able to assign/create these via some kind of dashboard
  - Modify behavior of some "flash" messages such as log-in success, failure, etc.
    - Log-in --- floating, fade
    - "Welcome" messages and other similar pop-ups --- fade when dismissed, or dismiss automatically after a period of time  

Note: New implementations will have tests associated with them, as well as existing features being modified, so more or less time might be required. This is just a roadmap of how things are \*expected\* to go, feature-wise.

  
---------

# Needs

For this project to be successful, I'll need sample data to fill the database (to test the item limiting) and a little guidance on writing tests, as well as the Rails framework --- I do know Ruby, and I am familiar with ORM frameworks, but I have never worked with Rails before in-depth. I'll also need community input on whether some design choices are appropriate or not 

(see roadmap above)  

---------

# Contribution(s)

- Comments
  - [https://github.com/publiclab/plots2/issues/9474#issuecomment-816069784](https://github.com/publiclab/plots2/issues/9474#issuecomment-816069784)
  - [https://github.com/publiclab/plots2/issues/9441#issuecomment-816102748](https://github.com/publiclab/plots2/issues/9441#issuecomment-816102748)
  - [https://github.com/publiclab/plots2/issues/9471#issuecomment-816112176](https://github.com/publiclab/plots2/issues/9471#issuecomment-816112176)
  - [https://github.com/publiclab/plots2/issues/9441#issuecomment-816133478](https://github.com/publiclab/plots2/issues/9441#issuecomment-816133478)
- Open issues
  - [https://github.com/publiclab/plots2/issues/9475](https://github.com/publiclab/plots2/issues/9475)
  - [https://github.com/publiclab/plots2/issues/9476](https://github.com/publiclab/plots2/issues/9476)
- Closed PRs 
  - [https://github.com/publiclab/plots2/pull/9446](https://github.com/publiclab/plots2/pull/9446)
  - [https://github.com/publiclab/plots2/pull/9483](https://github.com/publiclab/plots2/pull/9483)

# Experience

I'm currently working on a project (on hold right now) that entails a Discord bot with a gacha-like trading card game that seeks to improve participation in a server's community. I've been working to learn web frameworks like Angular, Vue, and React. My strongest languages right now are PHP, HTML/CSS, JavaScript, and Python. Some other languages that I have knowledge of are Java, C#, Ruby, SQL (MySQL and MSSQL). I have knowledge with a few frameworks such as CakePHP, ASP.NET, JQuery, and Windows forms/.NET. I haven't had a lot of opportunities to contribute to open-source code; a lot of my work has been within the context of schoolwork.  

Angular Demo w/routing:  
[https://github.com/eightballocto/CanaryMedia](https://github.com/eightballocto/CanaryMedia)

This is incomplete, styling and other features are yet to be added.  

---------

# Teamwork  

Recently, I was involved in a major semester project for my college. We were able to work together to create an application for a fictional publishing company, and we were able to communicate among one another through messages, reminders, and calls. Even now, I talk with my peers about programming and I help them occasionally with their debugging affairs.  
  

---------

# Passion  

I am a web developer; it's always been my passion since I was a young teen. Designing something pleasing to the eyes and wiring up the internals has always been a rewarding experience to me. However, environmental justice is also my passion; I'm a strong supporter of wildlife reservations for wildlife and flora. In my state, South Dakota, where industrialization and economy are the biggest priorities among the loudest voices, I want to be the voice of dissent against the aggressive destruction of habitat and pollution/overharvesting of natural resources in the name of dollars.

# Audience  

My work is aimed at the general user base, making the experience more enjoyable and intuitive for all that use it. Everyone who has a passion for environmental justice should be able to use this site without having any hassle, and I believe my changes will help improve the user experience

---------

# Commitment  

I understand that this is a major commitment; luckily, for most of my summer, I haven't much of anything to do. On a typical day, I will do a morning routine and then work on whatever is most priority, or entertain myself with some of my hobbies. If accepted, I will dedicate my mornings and afternoons to this project (about 9AM CDT --- 4PM CDT)