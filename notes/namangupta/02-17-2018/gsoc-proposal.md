---
title: "GSoC proposal: Email integration Project"

tagnames: 'software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, soc-2018-email, gsoc-2018-final, first-time-poster'
author: namangupta
path: /notes/namangupta/02-17-2018/gsoc-proposal.md
nid: 15755
uid: 522848

---

# GSoC proposal: Email integration Project

by [namangupta](../../../profile/namangupta) | February 17, 2018 20:27

February 17, 2018 20:27 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [soc-2018-email](../tag/soc-2018-email), [gsoc-2018-final](../tag/gsoc-2018-final), [first-time-poster](../tag/first-time-poster)

----

(This template is for students applying to summer code programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=899&tags=soc,soc-2018,soc-2018-proposals](https://publiclab.org/post?n=899&tags=soc,soc-2018,soc-2018-proposals) You can delete this line once you've started filling it out.)

---------

## About me

**Name:** Naman Gupta

**Affiliation:** Guru Gobind Singh Indraprastha University, New Delhi, India-110078

**Location:** Delhi, India-110034

Github: namangupta01

**Email:** [01namangupta@gmail.com](mailto:01namangupta@gmail.com)

**LinkedIn:** [https://www.linkedin.com/in/namangupta01/](https://www.linkedin.com/in/namangupta01/)

**Project:** Email Integration Project

**Web Link:** [http://www.namangupta.me/](http://www.namangupta.me/)

## Project description

_Email integration project_

### Abstract/summary:

Implementing delayed background jobs, cron jobs for sending daily/weakly/monthly/ trending email digest to the subscribers.

Reply-by-email to comments feature.

### Introduction

The current implementation of Email System in PLOTS2 doesn't implement Active Jobs i.e queue feature because it is currently using rails 4.1\. And rails 4.1 doesn't implement Active Jobs on its own. We have to ways to resolve this either include activejob gem or upgrade to rails 4.2 (we will go with this). So currently, mails are sended synchronously. And if the sending of mail is failed due to some reason or we don't want to send the mail at the time of request/response or if we want that a mail should be sent after (1 day or any specific period of time) we can't implement it now.

Sometimes, we have to run jobs at particular intervals to, say, backup logs, send emails, etc. In rails application we can schedule such tasks using the whenever gem.

For integrating cron jobs with the plots2 we can implement whenever gem which will be very useful in sending daily "batch digest" email to the subscribers. We can specify the time when the email should be sent. More details on implementation is in Implementation part.

Another feature is the reply-by-email feature using [mailman gem](https://github.com/mailman/mailman) which currently have three types of receivers: Standard Input, Maildir, and POP3\. POP3 is used most often.

Another feature that we can implement is of reply by tweet which is very convenient and easy for the user to do.

### Project Goals

During this GSoC season I would deliver:

- Including Active Jobs in project.
- Implementing whenever gem to work with Active Jobs to perform delayed jobs.
- Implementing [mailman](https://github.com/mailman/mailman) gem which will be used in reply-to-comment via email feature.
- Implementing reply-to-comment via email feature.
- a user interface for managing digest settings and email notification settings.
- Reply by tweet feature.

---------

### Implementation

**3.1 Including Active Jobs**

Currently, plots2 is using rails 4.1 and rails 4.1 don't implements Active Jobs so it should be updated to rails 4.2 so that we can use delayed jobs with the help of Active Jobs. On which i am currently working.

---------

**3.2 Implementing whenever gem**

For implementing cron jobs with our application we can use whenever gem. The steps for implementing this gem are specified below :

1\. Include whenever gem in Gemfile

2\. Type command `wheneverize .` in the root folder of the application which will create an initial `config/schedule.rb`

3\. After typing above command also type command `whenever` which will create a file `schedule.rb`

4\. Now edit the schedule.rb file to add cron jobs. The best things about whenever gem is that it makes it easy to write cron jobs in simple ruby language.

- For Example:

```
every 1.day, at: '4:30 am' do  
 runner "MyMailer.send_daily_digest.deliver_later"  
end

every 1.day, at: '4:30 am' do  
 runner "MyModel.task_to_run_at_four_thirty_in_the_morning"  
end

every 3.hours do # 1.minute 1.day 1.week 1.month 1.year is also supported  
 runner "MyModel.some_process"  
 rake "my:rake:task"  
 command "/usr/bin/my_great_command"  
end
```

5\. Now run command `whenever --update-crontab` update the `schedule.rb` file and to enjoy cron jobs.

**3.3 Implementing mailman gem**

User will receive an email whenever he is being mentioned in a comment or whenever someone is commenting in the node that the user is following. And if he wants to comment or want to reply the comment, this feature would make it very easy for him because he don't have to open the website and then comment. He can directly reply via email using this feature.

This feature can be implemented with the help of [mailman](https://github.com/mailman/mailman) gem. Mailman is an incoming mail processing micro framework that support POP3 and Maildir support, that works with rails "out of the box".

**Implementation steps:**

1\. Add mailman gem in gemfile and then do bundle install.

2\. Now we need to add a script in script/mailman\_server. This script will configure the mailman setting.

3\. Currently, there are three types of receivers in mailman: Standard Input, Maildir and POP3\. POP3 is very commonly used so we will use POP3 receiver.

4\. POP3 receiver is enabled when the Mailman.config.pop3 hash is set in script/mailman\_server. This will poll every minute by default. Polling time can also be changed. After new messages are processed, they will be deleted from the server by default but if we want to save them we can also save them.

5\. We have rails environment present in script/mailman\_server which means we can access rails models there.

6\. script/mailman\_server also contains a module which will run when a mail is received. As specified above we can use our models there because rails environment is there. Here's the screenshot of how the whole script/mailman\_server looks like.

![image description](https://publiclab.org/system/images/photos/000/024/181/large/Screen_Shot_2018-03-26_at_2.34.15_AM.png "Screen_Shot_2018-03-26_at_2.34.15_AM.png")

7\. Now receive\_mail function in comment model will contain the code for finding node and Sender email, so that the comment can be created. So the question comes, how we will decode the node Id and how we will get the sender's email. We will get sender's email from the From of the mail which contains the sender's email address and we will get the node id from the subject of the email. For example, subject would be like publiclab node #1; here 1 is the node id, so we will use regex to find out the node id and then add comment to the node. This is exactly same that happens in Github where issue or pull request id is used in subject.

8\. Add a icon when displaying comment to differentiate between normal comment and reply by email comment.

**3.3 Implementing feature reply by tweet**

Reply by tweet is an amazing feature that would led users to reply to any node via tweet. Currently, we are posting every node at [http://twitter.com/publiclab](http://twitter.com/publiclab) (using [IFTTT.com](http://IFTTT.com)). We can easily do it by using Twitter Webhooks.

\*\*  
\*\*

**Implementation Steps:**

1\. We will use Twitter \*\*Web-hooks \*\*Api ( [Webhook api](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/overview) ) to get all the things happening on the public lab twitter account whether it is tweets, reply, mentions and lots more.

2\. Using web hooks, we will get all the data in real time, no polling is to be done using any gem, in polling permanent connection is made between twitter and server using sockets by handshaking of our server and twitter.

3\. As we will get all the activities happening on twitter including reply, the next thing is to identify the node.

4\. Now, all we need to find out to which node does the tweet belongs. This can be done in two ways. First way is creating a new model via migration to save the node vs key i.e in [ift.tt/2G6IK69](https://t.co/M42Xvh4Lup "http://ift.tt/2G6IK69"), 2G6IK69 is the key which we will store in reference to the tweet and we will store node\_id in reference to the node. Or, secondly we can tweet an tweet\_id\_ along with the tweet and save tweet\_id and node\_id in our database.

5\. As we will receive reply using web hooks, we just have to identify the tweet to which the reply belongs which can easily be find by the service provide by twitter.

6\. After identifying, we can add comment in our database.

7\. We can also add a icon to differentiate between reply-by-tweet comment and normal and reply-by-tweet comment.

Reference links:

[https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-standard-all](https://developer.twitter.com/en/docs/accounts-and-users/subscribe-account-activity/api-reference/aaa-standard-all)

About webhooks: [https://stackoverflow.com/questions/20644019/what-is-a-webhook-and-why-should-i-care](https://stackoverflow.com/questions/20644019/what-is-a-webhook-and-why-should-i-care)

---------

### 

### Timeline/Milestones

Community Bonding Period \[23 April to 14 May\] -\> Get to know team and the mentors and also start discussing, analyzing the areas and discussing the work with mentors.

\[14 May to 20 May\] -\> I have my exams from 14 may to 22 may so my working frequency will be less in this period (from 21 may to 22 may).

\[21 May to 27 May\] -\> I will start working on including active jobs so that further work of performing delayed jobs can be done.

\[28 May to 3 June\] -\> I will start working on the feature to include whenever gem so that we can perform weekly/email/monthly/ trending email digest.

\[4 June to 10 June\] -\> I will start working on implementing the feature to implement mailman gem so that we have an reply by email feature.

Phase one evaluation \[11 June to 17 June\] -\> Working on creating Mailers for digest.

\[18 June to 24 June\] -\> Start writing tests of what is done till now.

\[25 June to 1 July\] -\> Integrate twitter webhooks to get **realtime** activity from twitter of what happening on the publiclab twitter account.

\[2 July to 15 July\] -\> I will start making model and writing documentations and working on logic to add comment on a particular node.

\[16 July to 22 July\] -\> Finally working on improving code structure and working on view of how the comment looks.

\[23 July to 29 July\] -\> Writing tests of the code written up till now.

\[30 July to 6 August\] -\> Finally take a week to scrub code, improve documentation, etc.

---------

### Experience

I have been working on the the Web Technology from more than 1.5 year. And have developed many applications on rails as well as on other technology.

I have also worked as Tech Head in Google Developers Group - BVCOE which is a technical community and also took various workshops and sessions as mentor on different technology.

I have also worked as Teaching Assistant for Web Development Course (which is a Ruby On Rails course) in **Coding Ninjas** ([www.codingninjas.in](http://www.codingninjas.in)) where my job was to mentor the student and help them in their Web Projects.

I am currently working as Web Developer Intern in Edusquare and working on building their online test platform for preparing for prestigious Engineering Entrance Exams in India. These platforms are build using various technology -- Ruby On Rails, Python, Flask, AngularJs and Backbone Js.

---------

### TeamWork

I have been actively volunteering in various community where i have showed my skills of teamwork and hard work. I am currently volunteering in Google Developers Community and i have also organised hackathon in my college and worked as one of the organiser.

---------

### Open Source Contribution

I have been working on the open source projects from the past eight months. I have contributed to organisations like Public Labs and OpenSUSE.

---------

### Passion

_The things that interest me the most about public lab is the science and environments because i am very passionate and have very deep interest in science particularly in physics --understanding how the law works in nature._

### Audience

This project will make the publiclab user experience good whether it is reply by email feature or getting daily/weekely/ monthly/treading email digest to the subscribers.

### Commitment

_Yes, i do understand this is a serious commitment and i will give my full dedication and commitment to this project ._