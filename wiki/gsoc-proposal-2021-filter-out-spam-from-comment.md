---
nid: 26224
title: GsOc Proposal 2021: Filter out spam from comment.
path: public/static/wiki/gsoc-proposal-2021-filter-out-spam-from-comment.md
uid: 751723
tagnames: gsoc,soc,location:blurred,lat:28,lon:77,place:india,zoom:6,gsoc-2021-proposals
---

# GsOc Proposal 2021: Filter out spam from comment.

**About Me **
Name: Emogene Lukoye

**Location: **
Kenya

An interesting fact about me:
 I like researching the truth in everything I find interesting!

**Project description **
Currently, the admin can't filter out spam replies in the comment section as described in issue #8854 in the plots2 repository. Instead of the replies being filtered out by the moderator, the following issues were found:

_1. A message pops up stating  "are you sure? The user will no longer be able to login or publish, and their content will be hidden…".
2. Comments replies' don't show on the moderator's spam dashboard.
3.  Active users posting replies to comments don't show up as active users in the User moderation dashboard. 
The solution implemented so far:  written tests to fix the issue is really fixed._

**Abstract **
With guidance from the discussion formed around issue # 8854, I would like to join the team in helping to fix this issue by: 
_Part 1: Signing up to Akismet, getting API key and adding the Akismet gem to the gemfile.
Part 2: Configuring the API key needed by the gem and adding columns to the comment table.
Part 3: Refactoring code in the comment's model and controller files.
Part 4: Ensure approved comments and false-positive are comments show up on the admin's dashboard_

Each part will be reviewed, tested and feedback from mentors implemented before moving ahead. 

**Part 1: Adding Akismet to the project.**
Akismet is a WordPress plugin that has an API suited for filtering out spam messages from the back-end with rails. Akismet is capable of learning from mistakes so everyone can benefit from the API.
To use the API key we need to sign-up for an Akismet account. It isn't free but signing up through the developer's portal gives you access.

[![Screenshot_(27).png](/i/43285)](/i/43285?s=o)

At this point, we can get out API key from an email sent by Akismet. We will use this for the gem configuration.

**Part 2: Adding Akismet to the project.**
Setting up the rakismet can be done by following the rakismet set -up instructions on their GitHub Repo. Set up requires the API key and website domain name.


[![Screenshot_(29).png](/i/43287)](/i/43287?s=o)

We need to modify the comment's table by adding a few columns needed by the gem

[![Screenshot_(28).png](/i/43288)](/i/43288?s=o)

Here :
_user_ip is the address of the commenter.
user_agent is the user agent string of the web browser submitting the comment, usually the HTTP_USER-AGENT.
Referrer is the content of HTTP_REFERE header_
_approved column shows comments that have been approved or not using boolean values of true or false._
the Comment.update_all sets all comments as approved by default.

**Part 3: Refactoring code in the comment's model and comment's controller.**
In the comment's model, we can create a request method that will be used in the controller to request for the user_ip,user_agent and referrer.


[![Screenshot_(34).png](/i/43292)](/i/43292?s=o)


Rakismet looks for specific attributes that should be added to the model folder as seen above which are used to check if a comment reply is spam. A **before_create:check_for_spam **action is added to the model to check if the comment being created is spam.
In the controller file, while creating the comment, the request action checks if the comment is spam and notifies the user.

[![Screenshot_(33).png](/i/43291)](/i/43291?s=o)



Part 4: Ensure approved comments and false positives show up on the admin's dashboard.
For this, we can create a query to the database for all the approved and rejected comments and display them on the admin's dashboard.

[![Screenshot_(32).png](/i/43290)](/i/43290?s=o)


for the false positives, we add a link to the admin's view that will show if the comment is a ham according to the rakismet gem. We add the following methods to the model. The Akismetor updates the Akismet API that the comment is a false positive or it has been approved as a valid comment.

[![Screenshot_(31).png](/i/43289)](/i/43289?s=o)



Since this is a restful design, it will be implemented through the comments resource in the routes.rb file for the approved and rejected comments.

**Timeline/milestones **
_May 24 - 30_
-Sign Up for the Akismet account.
-Ensure the API Key is available for use
-Add the rakismet gem to the Gemfile.
Create FTO's and review PR.

_June 1 - 7_
-Configure Akismet according to the Docs.
-Add columns to the comments table 
-Fix any migration errors that might arise.
Create FTO's and review PR.
_June 8 - 14_

-Implement Akismetor plugging
-Write tests
-Create FTO's and review PR.

_June 15- 21_
-Ensure Akismetor pugin is working
-Ensure written  tests are passing
-Create FTO's and review PR.

_June 22 - 30_
-Refactor the comments model code.
-Ensure written  tests are passing
-Create FTO's and review PR.

_July 1 - 7_
-Refactor the comments controller code.
-Ensure written  tests are passing
-Create FTO's and review PR.

__July 8 - 14_
-Work on user dashboard to display the correct message
-Ensure written  tests are passing
-Create FTO's and review PR.

_July 15 - 22_
-Work on the admin dashboard to display the correct message
-Ensure written  tests are passing
-Create FTO's and review PR.

_July 23 - 31_
-Add approved comments to the admin dashboard
-Ensure written  tests are passing
-Create FTO's and review PR.

_Aug 1 - 7_
-Implement ham for spams that are false positives.
-Ensure written  tests are passing
-Create FTO's and review PR.

_Aug 8 - 14_
-Add a link to the show ham spams on the admin dashboard.
-Ensure written  tests are passing
-Create FTO's and review PR.

_Aug 15 - 21_
-Implement code admin to see active users on the dashboard.
-Ensure written  tests are passing
-Create FTO's and review PR.

_Aug 22 - 30_
-Check to see that all implemented changes are working smoothly across different devices.
-Do a final sweep to ensure all tests are passing.
so final sweep to ensure all feedback has been documented.
-Create FTO's and review PR.
-Write a blog to document my journey and for learning purposes.

Additional Tasks - Work on the issues label help wanted/ high priority.

**Needs**
 I would appreciate any feedback and guidance from assigned mentors and other collaborators.

**Contributions so far**
[First-timers only](https://github.com/publiclab/plots2/pull/9452)
[FTO issue created](https://github.com/publiclab/plots2/issues/9474)
[Currently working on](https://github.com/publiclab/plots2/issues/9450)
 
**Experience**
I have been coding for a year now and my first framework to learn was Ruby on Rails. I have been looking to improve my rails skills through open source and I am loving it so far. I also know a bit of JavaScript and React. I have been learning through remote collaboration and pair programming, using lots of loom video, GitHub PR and slack. This has made it easy to start working on open source. I am looking forward to growing my skills in the next three months like never before.












