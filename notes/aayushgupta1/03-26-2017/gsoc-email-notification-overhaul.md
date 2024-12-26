---
title: "GSOC - Upgrade Plot to Rails 4 and Email Notification Overhaul"\ntagnames: 'software, gsoc, gsoc-2017, soc, soc-2017, rgsoc-2017, soc-2017-proposals, response:13975'
author: aayushgupta1
path: /notes/aayushgupta1/03-26-2017/gsoc-email-notification-overhaul.md
nid: 14060
uid: 503612

---

# GSOC - Upgrade Plot to Rails 4 and Email Notification Overhaul

by [aayushgupta1](../profile/aayushgupta1) | March 26, 2017 10:24

March 26, 2017 10:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [rgsoc-2017](../tag/rgsoc-2017), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975)

----

(This template is for students applying to summer code programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=899&tags=gsoc,gsoc-2017-proposals](https://publiclab.org/post?n=899&tags=gsoc,gsoc-2017-proposals) You can delete this line once you've started filling it out.)

---------

## About me

_My name is Aayush Gupta. I am a programmer and a web developer. I code
in Ruby. I am a third year computer science student in Manipal Institute
of Technology, Manipal. I have been working with this code for 4-5 months now
and quite know it well now._

**Affiliation** Manipal Institute of Technology, Manipal

Location: Manipal, India

## Project description

I plan on upgrading the plots code from Rails 3 to
Rails 4.2 and upgrade email notifications for new features such as
reply by email, per user notification preference, scheduled email
jobs, etc.

### Abstract/summary (<20 words):

In my project I plan to upgrade the plots code
from Raills 3 to Rails 4/5 and Upgrade email notifications for new
features such as reply by email, per user notification preference,
scheduled email jobs, etc.

### Problem

The plots code uses Rails 3.2.20 which is an old
and outdated version. It lacks many features that the new Rails 4
provides. Advanced email features greatly improve usability and
user-friendliness.

### Timeline/milestones

### **May 8 - May 22 (3 Weeks)**

Community Bonding Period: Setup a slack
communcation to stay in contact with my mentor. Go through the code
thoroughly again. Give a proper idea of the process that will be
followed to go about the process to the mentor. Proper a flow diagram
of the working of the plots2 codebase and how I will go about it .

**May 30 - June 26 (4 weeks)**

This period is what I will use to fully have
Plots2 upgraded to Rails 4\.

Week 1:

Upgrade by patch versions to monitor deprecation
warnings. Currently we're on Rails 3.2.20\. Reaching 3.2.22 version
and fixing all the deprecation errors that occur during the upgrade
will be the main task of the first week after which we can look to
jumping to Rails 4.0\.

Week 2:

While upgrading from Rails 3 to Rails 4, we can
use rake task (rake app:update) which is inbuilt in [it.It](http://it.It) shoots up
an interactive session to help with the upgrade. It indicates what
all changes should be done and what all are being done. After bumping
our Rails version to Rails 4\. This task will be run to help us. All
errors will be fixed in this week and the making sure all gems work
with Ruby 2.0 as is the preferred Ruby version for Rails 4\.

Week 3 & 4:

The last two weeks before the Rails 4 milestone
achievement will be to upgrade the code to the syntax changes made in
the current version of ruby and upgrading the gems. In this period we
will also correct and implement several changes that have been
introduced in Rails 4 that concern Active Record, Active Model,
Action Pack and Active Support.

**June 26 - June 30 (1 week)**

Phase 1 evaluations.

**July 3 - July 24 (3 weeks)**

Implementation of Email Notification Overhaul

Week 1:

Keep a track locally of what the user is intrested
in and then query that from the server as a normal user request. This
is done so that the user doesn't feel that they are being spied on.
This data won't be saved on the server.

Week 2:

Work
on subscribing the users to a specific Tag that the user is
interested in. Email them of any updates on the article that they are
following, any specific tag they have subscribed to or any new
article relevant to that. Improve tag subscriptions when tags are
added late to reduce delay in sending emails.

Week 3:

Working on the reply to the comments using emails.
Use the email to recognise the person, retrieve his username and then
post it as them.

**July 24 - July 30 (1 week)**

Phase 2 evaluations.

**July 31 -- August 7 (1 week)**

**Week 4:**

**Write
and run test cases to check if all the work done in the email
notification part is working and is working. In case there is an
error, correct it and check it again.**

**August 8 - August 25 (4 weeks)**

Attempt to upgrade from Rails 4 to Rails 5\. In
this period I will also clean my code, do proper documentation if
anyone in future is working on it. Wrap up any work that remains.
Work on some bugs that, if any time is left.

**August 25 - August 29 (1 week)**

Submission of all deliverables: Upgraded
applicatication, Implementation of Email Notification and updates(all
tested, up and running)

**August 29 - September 5 (1 week)**

Final evaluation from mentor.

### Needs

\_No seperate resources would be needed as such. I would just need some guidance from my mentor.\_

### Setup

\_Have you forked the relevant codebases?

Yes, I have forked it and keep on updating from the master on a regular basis.

Link: [https://github.com/aayushgupta1/plots2](https://github.com/aayushgupta1/plots2)

I installed and run the server locally on my laptop.

I also have it set up on
_[https://ide.c9.io/aayushgupta1/aayush\_gsoc](https://ide.c9.io/aayushgupta1/aayush_gsoc)_.\_

---------

### Experience

\_I learned coding in my high school and got an interest in it since
then. Since then I am in to coding. Started on C++ to Python and
currently on Ruby.

Have you looked over our welcome page and are you familiar with how to make your first contribution? Have you already?\_

\_Yes, I have my first contribution. Rather, I have made some significant contributions to the plots code in the past.\_

---------

### Teamwork:

\_I have done an internship in L&T in the automation department
(closed source) where I worked in a team of 10 people. Did some
automation for some processes using python and some tools that they use
within the company. I liked working with the team as they were eager to
help and taught me a lot.

I have worked on github for several of my projects that I did for my college and school as a developer.

I am driven by a eagerness to learn and implement whatever I learn. I
like to implement my knowledge in the real world and make a change.\_

---------

### Passion

\_I like to use my knowledge in the real world and make a change. \_So,
I don't leave an opportunity to make a change. As you are making the
world a better place to be in, I would like to make a my contribution to
it. I like the work you do and would help you do it.\_

### Commitment:

_As I am a student, I am free during the summer for 3 months. I
will dedicate my time for this and do whatever it takes to complete this
project. I would take it as a full time job._