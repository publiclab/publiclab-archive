---
title: "GSOC-18 Email notification overhaul."

tagnames: 'software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, soc-2018-email, gsoc-2018-final, first-time-poster'
author: vidit
path: /notes/vidit/02-16-2018/gsoc-18-email-notification-overhaul.md
nid: 15750
uid: 517093
cids: 18709,18762,18903,18934,18946,18984,18986,18987,18988,19007,19011,19016,19043,19051,19106,19117,19175,19207,19224,19225,19960,20005,20008,20022,23348,23349,23566,23567,23569,23570
---

# GSOC-18 Email notification overhaul.

by [vidit](/profile/vidit) | February 16, 2018 21:17

February 16, 2018 21:17 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [gsoc-2018](/tag/gsoc-2018), [soc-2018](/tag/soc-2018), [soc-2018-proposals](/tag/soc-2018-proposals), [soc-2018-email](/tag/soc-2018-email), [gsoc-2018-final](/tag/gsoc-2018-final), [first-time-poster](/tag/first-time-poster)

----

## About me

**Name** Vidit Chitkara

**Affiliation** Guru Gobind Singh Indraprastha University, New Delhi, India-110078

**Location** Delhi, India-110034

**Github** [ViditChitkara](https://github.com/ViditChitkara)

**Email** [chitkara.vidit@gmail.com](mailto:chitkara.vidit@gmail.com)

**LinkedIn** [linkedin.com/in/vidit-chitkara-22656a13b/](https://www.linkedin.com/in/vidit-chitkara-22656a13b/)

**Project Title** Email Notification Overhaul

**Gitter** ViditChitkara

### Project description

Email notification overhaul.

### Abstract/summary (<20 words):

Reply to comments by email, send weekly digests to Publiclab users and a separate dashboard to handle digest settings.

### Problem

The aim of this project is to help users to have a better User experience and have better involvement with PublicLab. The project aims to achieve the following milestones:-

- Reply to comments by email
- Daily digests for users (This would help getting all the preferred content at one place).
- Users will be able to configure digest related settings.

### Implementation

**1\. REPLY TO COMMENTS BY EMAIL:** In the current implementation of plots 2, one needs to visit the website (to a particular node) in order to reply to comments or simply comment. One of the better implementations could be, to use the mailman gem which would help us reply via email. We need to follow the following steps:-

1. Add mailman gem to gemfile and do bundle install to install the dependencies.
2. Now we need a script to configure the mailman settings. This would go in the script folder (script/mailman\_server).
3. There could be 3 methods through which we could receive an email, we could use pop3 as the method. Pop3 would
require receiver's information such as username, password, etc. The script would now extract the incoming mails in the
form of a message object and then redirect it to a "receive\_mail" method in Comment model.
4. The "receive\_mail (message)" method would contain logic regarding the comment. It could be implemented as:-  
i) Identify node id from message subject using appropriate regex (something like- /^#(\\d+)$/).  
ii) Identify user from message object. (message object provides a message.from method to identify sender's email).  
iii) Identify the comment body from the message object. The message.body.decoded method gives us the comment body.

![image description](https://publiclab.org/system/images/photos/000/023/746/large/gsoc-4.png "gsoc-4.png")

**2\. Creating comment from received and decoded mail by mailman and design plan for them** Now that we have all the necessary information required for making a comment, we need to follow the following steps to create a comment:-

1. Firstly we need a email\_reply (boolean) column in the comments model to identify between normal comments and reply by email comments. So a new migration file would be made which would add the email\_reply column to the comments table.
2. The next step would be to execute a create query on Comment model for the identified node. The query would be like node.comments.create(user: user, body: body, email\_reply: true)
3. The last step would be to render the comment on the associated node with an icon to differentiate between normal and email replies. A working screenshot of this step is shown in the following screenshot.

![image description](https://publiclab.org/system/images/photos/000/023/747/large/gsoc-1.png "gsoc-1.png")![image description](https://publiclab.org/system/images/photos/000/024/023/large/gsoc-flowchart-1.png "gsoc-flowchart-1.png")

**3\. Daily digest Email design:**  
A basic template of daily digest mail is shown in the following screenshots:-  
![image description](https://publiclab.org/system/images/photos/000/023/748/large/gsoc-2.png "gsoc-2.png")  
![image description](https://publiclab.org/system/images/photos/000/023/749/large/gsoc-3.png "gsoc-3.png")

This part could be broken down into the following parts:-

- A separate method, e.g. "send\_digest(user,top\_picks)", where user and top\_picks are method arguments corresponding to Publiclab user and their subscriptions/digest notes respectively. This method would go in the subscription.rb file.
- A possible design for the digest is shown in the above screenshot.
- A method is already there in user.rb (content\_followed\_in\_period(start\_time,end\_time)) which gives us the digest notes. These notes would be passed (as top\_picks) in the 'send\_digest' method in subscription mailer.

**4\. Using activejob for sending digest mails:**

Sending daily digests to thousands of users per day (by creating a basic synchronous request to server) would not be feasible at all. We require a service that can make asynchronous requests, so that there is not much load on the servers. Rails provide a built in service for handling asynchronous tasks known as "active-job". "Active job" is a framework for declaring jobs and making them run on a variety of queuing backends. These jobs can be everything from regularly scheduled clean-ups, to billing charges, to mailings. Anything that can be chopped up into smaller units of work and run in parallelly.  
Currently we are using rails 4.1.16 in the Publiclab app, which does not support activejob. So we first need to upgrade our app from rails 4.1.16 to version 4.2.6 (a stable release of rails 4.2.6).  
For queuing and executing jobs in production we need to set a queuing backend. We can use "Resque" as the adapter for handling background tasks. Resque is a redis backed library for creating background jobs, placing those jobs on multiple queues and processing them later.  
Since we require to send digest emails daily to multiple users, there should be a scheduler which schedules activejobs at a particular time everyday. For this purpose we can us the whenever gem. Whenever is a Ruby gem that provides a clear syntax for writing and deploying cron jobs. The following architecture and steps explain the basic flow of sending daily digests using activejob:![image description](https://publiclab.org/system/images/photos/000/024/011/large/arch-final-final.png "arch-final-final.png")

a) Whenever gem creates a cron job which calls the job every 24 hours. A schedule.rb file needs to be created in the config folder. Here, all the jobs are schedule. e.g:-

```
every :day, at: ‘12:20’ do  
    runner “DailyDigestJob.perform_later”  
end
```

b). Since there are thousands of mails which are going to be rolled out at once, they would be called asynchronously by resque (queuing backend). For making an activejob, there is a jobs folder in the app folder. For each worker a separate file is created (daily\_digest\_jo.rb in our case). All the logic which needs to be executed asynchronously resides here in a "perform" method.

```
class DailyDigestJob ```