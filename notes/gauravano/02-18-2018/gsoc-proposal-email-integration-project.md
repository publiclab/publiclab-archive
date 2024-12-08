---
title: GSoC Proposal: Draft Feature & Email Integration Project
tagnames: software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, soc-2018-email, gsoc-2018-final, first-time-poster
author: gauravano
path: /notes/gauravano/02-18-2018/gsoc-proposal-email-integration-project.md
nid: 15757
uid: 515081

---

# GSoC Proposal: Draft Feature & Email Integration Project

by [gauravano](../profile/gauravano) February 18, 2018 00:24

February 18, 2018 00:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [soc-2018-email](../tag/soc-2018-email), [gsoc-2018-final](../tag/gsoc-2018-final), [first-time-poster](../tag/first-time-poster)

## About me

**Name:**        Gaurav Sachdeva

**Github:**      [https://github.com/gauravano](https://github.com/gauravano)

**LinkedIn:**    [www.linkedin.com/in/gauravano](http://www.linkedin.com/in/gauravano)

**Email:**       [sachdeva.gaurav1997@gmail.com](mailto:sachdeva.gaurav1997@gmail.com)

**Portfolio:**   [gauravsachdeva.me](http://gauravsachdeva.me)

**Gitter:**      Gauravano

**Affiliation:** Guru Gobind Singh Indraprastha University, Delhi, India

**Location:**    Delhi, India

I am a passionate Web Developer, Open source enthusiast, and a programmer.Currently, I am pursuing BTech in Information Technology from Bharati Vidyapeeth's College of Engineering( affiliated to GGSIPU), Delhi.I am in my pre-final year.

## Project description

I have some great ideas for Weekly/monthly digest and reply-by-email to comments on site and would love to work on Email Integration project for this summer.

### Abstract/summary (<20 words):

Implementing daily "batch digest" email subscriptions, reply-by-email to comments, UI for managing digest and notification settings and feature of sharing secret link of unpublished draft to other participants for review.

### Problem

This project aims at solving following problems:-

1. Reply-by-email to comments on the PublicLab website using Mailman ([https://github.com/publiclab/plots2/issues/214](https://github.com/publiclab/plots2/issues/214))

2. Daily "batch digest" email subscriptions using Rails ActiveJob ([https://github.com/publiclab/plots2/issues/1119](https://github.com/publiclab/plots2/issues/1119))

3. A user interface for managing digest settings and email notification settings [https://github.com/publiclab/plots2/issues/213](https://github.com/publiclab/plots2/issues/213)

4. Unpublished draft of research note for review by participants through secret link 
[https://github.com/publiclab/plots2/issues/2307](https://github.com/publiclab/plots2/issues/2307)

Related issues are at: [https://github.com/publiclab/plots2/milestone/9](https://github.com/publiclab/plots2/milestone/9)

## Implementation
----------

### **Part I**: **Reply-by-email to comments** on the PublicLab website using Mailman
--------------

This part would be solved by using [mailman](https://github.com/mailman/mailman) gem. I have made a demo website and deployed it on Heroku to show the working of mailman gem and how it will work on our website.  

**Demo 1: Fetching emails from an email account.** The demo website is hosted at [https://mail-man-test.herokuapp.com](https://mail-man-test.herokuapp.com) . The website shows the demo of how emails are fetched from Gmail account but with mailman fetching from any email service provider is easy.Youtube video showing the demo is at [https://www.youtube.com/watch?v=gMV4n4Hs7OA](https://www.youtube.com/watch?v=gMV4n4Hs7OA)

**Demo 2: Replying by Email to comment.** The demo website is at [https://mail-man-test.herokuapp.com/articles](https://mail-man-test.herokuapp.com/articles) .In this website I have made an article like research note, there is a button near that saying "Sent yourself this article".You need to enter Email Id and Name and just click on "Send", you will receive an Email containing that article.Now check your inbox for mail containing the article, and reply to the mail, write your comments in the email body and send it. Now, go back to the website again and wait for 1 minute (as mailman has default polling time of 1 min) and then refresh the page. You'll see that your comment will appear beneath the article (Last in all the comments).Check out demo video showing the implementation of Reply-by-email.

**Demo of Reply by Email to Comment:-**
<iframe align="center" width="560" height="315" src="https://www.youtube.com/embed/b768EOUf6sg?rel=0" frameborder="0" allowfullscreen=""></iframe>

**Demo website link:** [https://mail-man-test.herokuapp.com/articles](https://mail-man-test.herokuapp.com/articles)

### Implementation Steps:-
 
 1. Add `mailman` gem to the Gemfile 
 
 2. Mailman will run in its own process I will write a script to run it in the application’s script directory.I am referencing it as mailman_server

 3. Initially, the mailman_server script will look something like this:-

```ruby
#!/usr/bin/env ruby
require "rubygems"
require "bundler/setup"
require "mailman"

Mailman::Application.run do
  default do
puts "Received: #{message.subject}" 
  end
end
```

We start the server by calling `Mailman::Application.run` and pass it a block. In this block, we define what Mailman calls routes. These determine how the incoming mail is handled. We’ve used a default route in above example which will be called for every email that’s recieved.
Now, how the replied emails sent by users are fetched here so that those emails can be used to generate comments after processing.

Here comes role of mailman gem - 
Mailman provides us 3 receiver options: POP3, IMAP, HTTP. I would be discussing POP3 in this page. Now, setting up the POP3 configuration is also simple.This is the example:-

```ruby
Mailman.config.pop3 = {
  server: 'pop.gmail.com',
  port: 995,
  ssl: true,
  username: ENV["GMAIL_USERNAME"],
  password: ENV["GMAIL_PASSWORD"]
}
```

## 4. Class Routing:
Instead of defining routes here in the script ,I will redirect the mails to the function in a Model where inside the function email is processed i.e., corresponding `nid`(node ID) is found using subject of the recieved email, we can use REGEX Expression to decode the nid or can also be done by equating the title of node with subject of email, after performing some operations on subject.Example of Model recieving method :-

```ruby
class Article < ActiveRecord::Base
  def self.receive_mail(message)
    article_id = message.subject[/^Update (\d+)$/, 1]
    if article_id.present?
      Article.update(article_id, body: message.body.decoded)
    else
      Article.create! subject: message.subject, body: message.body.decoded, from: message.from.first
    end
  end
end
```

4.1 After the node is found the recieved email's body is used for creating the content of the comment

4.2 Using sender's email ID, user  is found from database.

4.3 A boolean term is also added in the database and marked true if the comment is generated through this process so that at time of rendering comments an email symbol can be attached.
Finally, a new comment in the name of user, containing the email body corresponding to the node would be created successfully .

## 5. Logging
Logging is always beneficial and can come to our rescue anytime so I would enable logging by setting `Mailman.config.logger`to a Logger instance. Example:
```ruby
Mailman.config.logger = Logger.new('logs/mailman.log')
```

## 6. Polling :clock2:
Polling is the process of checking for the new emails from the server. By default, polling time is 60 seconds i.e., arrival of new emails in the account(gmail account) is checked after every 60 seconds.We can easily change the polling time by mentioning poll interval like this :
```ruby
Mailman.config.poll_interval = 90 # setting poll interval as 90 seconds
```

## 7. Exception Handling
What if some error pops up due to some bad/uncompatible email then what would happen,mailman server would crash in no time :scream: . We can validate in model function that comment is created only if node is found and many other validations.But, to be sure that server doesn't crash, we can add rescue clause to avoid any such instance,so that solves our problem :smile:. Example:
```ruby
Mailman::Application.run do
  default do
    begin
      Article.receive_mail(message)
    rescue
      Mailman.logger.error "Exception occurred while receiving message:\n#{message}"
      Mailman.logger.error [e, *e.backtrace].join("\n")
    end
  end
```
And,that completes the comment creation process using the recieved email.The resultant script would look something like this:

```ruby
# script/mailman_server
#!/usr/bin/env ruby
require "rubygems"
require "bundler/setup"
require "mailman"

Mailman.config.logger = Logger.new("log/mailman.log")

Mailman.config.pop3 = {
  server: 'pop.gmail.com',
  port: 995,
  ssl: true,
  username: ENV["GMAIL_USERNAME"],
  password: ENV["GMAIL_PASSWORD"]
}

Mailman::Application.run do
  default do
    begin
      Article.receive_mail(message)
    rescue Exception => e
      Mailman.logger.error "Exception occurred while receiving message:\n#{message}"
      Mailman.logger.error [e, *e.backtrace].join("\n")
    end
  end
end
```

## Some Scenarios to handle

### 1. Unidentified Email ID
Firstly, the subject of the email received is checked and node ID is extracted from the subject. If subject is proper and node ID exists in database then Email ID is searched in database.In case the Email ID is not found then , an automated email would be sent to the unidentified user prompting him to sign up or update his profile with latest Email ID, so in automated Email all these steps would be presented to them.

### 2. Spam emails
If someone tries to spam our mailbox by sending multiple emails having same body then,an email would be send to moderator for marking user's profile as spam.Also,some user may try to send multiple emails with different body in that case body of the email is checked.Discussion on this can be done.

### 3. Empty Email body
As many email clients still allow sending email with empty body so we have to handle them too. In this case too, we can send automated reply to the user if he is identified - humbly asking them to include text in the email body.


**Flowchart** showing overview of the steps of implementation. Detailed implementation steps, Exception handling,etc. are in 
[gist](https://gist.github.com/Gauravano/172cc187d7300808a212f51130bb1b83)

---------
<p align="center">
<img align="center" src ="https://user-images.githubusercontent.com/20878070/37374272-49ce9466-2740-11e8-8bec-4131dc38341e.png" />
</p>

**Detailed Implementation of Reply by Email to Comment:** [https://gist.github.com/Gauravano/172cc187d7300808a212f51130bb1b83](https://gist.github.com/Gauravano/172cc187d7300808a212f51130bb1b83)
 

### **Part 2:** **Weekly Digest of User**
-------------

### Implementation Steps:-

**1. Creation of method in subscription_mailer.rb for sending email to the user.**
Example:

```ruby
  def sending_digest(user)
     @notes = user.content_followed_in_period(Time.now - 1.week, Time.now) # for weekly digest 
     @user = user
     mail(to: user.email, subject: "Your Weekly digest").deliver
  end
```

In user.rb ,there is method content_followed_in_period(start time, end time) which takes two arguments start time and end time, this function gives us nodes corresponding to the subscribed tag which were updated or created during the specified time interval.Then, nodes would be displayed in the email.

**2. Creating the sending_digest.html.erb file which would contain the template of the email.**
Here's the sample email design:

![demo_mail](https://user-images.githubusercontent.com/20878070/37965279-269360f6-31e2-11e8-8c83-1ad70e063cd2.png)

![mail_1](https://user-images.githubusercontent.com/20878070/37965278-265e47c2-31e2-11e8-9bdf-2a6a4a18d69f.png)
![mail_](https://user-images.githubusercontent.com/20878070/37965277-25ecbb52-31e2-11e8-9adb-eae12f429cf5.png)

Current design carries only 3 buttons and a link to settings page in footer but more buttons can be added.

![send_digest3](https://user-images.githubusercontent.com/20878070/37851715-f4900458-2f05-11e8-8185-7968a561a4a5.png)

**3. Creating a job in app/jobs for sending the digest to the users**

## What is ActiveJob and why we need it?
We use rake tasks for migration, setting up the database and for many more functions,so we can also use rake tasks for sending digests,  but we will not use it. As we want to send emails to a large number of users and using rake task for that would slow down the other processes as the priority would be given to  rake task, but we don't want that.So, here comes the use of [Active Job](http://edgeguides.rubyonrails.org/active_job_basics.html).

Active Job is a framework for declaring jobs and making them run on a variety of queuing backends. These jobs can be everything from regularly scheduled clean-up tasks,to mailing digest, subscription emails and many more. So, activejob will help us to send emails to multiple users asynchronously so there would be minimum affect on the performance of other processes.  

Our project plots2 currently uses rails 4.1.16 which doesn't support activejob. But, thanks to [@Souravirus](https://github.com/Souravirus) ,we are making progress in upgradation to rails 4.2.9 which would allow us to use activejobs.


 **3.1 Creation of Job** 

 Let's see an example job for sending digest:

 ```ruby
 class SendDigestJob < ApplicationJob
   queue_as :default   

   def perform(*args)
     User.all.each do | user |
       SubscriptionMailer.sending_digest(user)
     end
   end
 end
 ```

 In above example,a job class is there namely SendDigestJob,and default queue is used. Most of the adapters support multiple   queues. With Active Job, we can schedule the job to run on a specific queue, such as low_priority or high_priority queue.


**3.2 Execution of Job on queueing backend**

  For enqueuing and executing jobs in production, we need to set up a queuing backend, that is we need to decide for a 3rd-party queuing library that Rails should use. Rails itself only provides an in-process queuing system, which only keeps the jobs in RAM. If the process crashes or the machine is reset, then all outstanding jobs are lost with the default async backend. This may be fine for smaller apps or non-critical jobs, but most production apps will need to pick a persistent backend.
 
Active Job has built-in adapters for multiple queuing backends (Sidekiq, Resque, Delayed Job and others).I prefer to use Resque and Sidekiq from my experience. In plots2, I would use [Resque](https://github.com/resque/resque) gem which is a Redis-backed Ruby library for creating background jobs, placing them on multiple queues, and processing them later.

First I will install resque gem and then,I will define in config/application.rb that which adapter to use. Example:

```ruby
  class Application < Rails::Application
    config.active_job.queue_adapter = :resque
  end
end
```


 **4. Final Step: Calling the SendDigestJob weekly** 

This can be achieved by [whenever](https://github.com/javan/whenever) gem that provides a clear syntax for writing and        deploying cron jobs.
 
First, install whenever gem by writing `gem 'whenever', require: false` and then running wheneverize . which would create   schedule.rb where we would write all the cron jobs in friendly syntax. For calling our job, schedule.rb file would be:
 
```ruby
 set :output, "log/cron_log.log" # For logging 
 
every 1.week, at: '12pm' do 
  runner "SendDigestJob.perform_later" # call to job
end
```

And, this would finally call our SendDigestJob present in app/jobs and then from there job would be enqueued in the specified queue for execution.

## Testing of Daily batch digest

1. In the testing period of Weekly digest, I would be sending digest daily to all the moderators, selected contributors and    admin of Public Labs and would attach a form with it where they can provide their suggestions.

2. Test for the job would also be written which would ensure that job gets enqueued correctly, their behaviour and working    of other entities like Redis and Resque gem.

Flowchart showing overview of the steps of implementation. Detailed implementation steps are in [gist](https://gist.github.com/Gauravano/47e92995fcb104e57236d3a6f64b6c9e)

---------

## Overview of Implementation instructions of the process:
-------
<p align="center">
<img align="center" src ="https://user-images.githubusercontent.com/20878070/37675204-b1b00e7a-2c9a-11e8-967d-6972b6a9ee70.png" />
</p>

## Diagrammatic representation of the Process
-------
<p align="center">
<img align="center" src ="https://user-images.githubusercontent.com/20878070/37675037-3c326c9c-2c9a-11e8-9e5f-ffc216af0be5.png" />


</p>

**Detailed Implementation of Weekly batch digest :** [https://gist.github.com/Gauravano/47e92995fcb104e57236d3a6f64b6c9e](https://gist.github.com/Gauravano/47e92995fcb104e57236d3a6f64b6c9e)

 

### **Part 3:** **UI for managing digest settings and email notification settings**
-------------

## Implementation
------------

**1. Storing user specific settings:**
There are two methods for storing setting values specific to user by - creating settings table and user-specific tags

  **1.1 Creating settings table:** As we are expanding our website publiclab.org fastly by adding lots of new features, settings table is the preferable alternative. In this, a setting table would be made having following columns (for now) - mail_comment, mail_likes, mail_wiki_edit, mail_self_comment, digest_weekly, onscreen_notify, more can be added. All these columns would be of type boolean.
  
  **1.2 Creation of tags:** The settings can also be saved by the creation of power tag corresponding to each setting so power tag would look like: `weekly_digest:true`, `mail_likes:false`,etc. We save many data currently using tags like user location - `lat:23.67`,`lon:67.09` tags, user's social media profiles using tags like `twitter:username` and much more so this system is easy to incorporate.

**2. Backend :**-
  
 2.1 Making two new methods in users_controller - one for handling get request which would render the page and other for          handling post request which would handle the updation of settings.  
   
 2.2 Setting of two new routes one for getting settings page and other for posting settings to the controller.
  

**3. Design for Settings page:** Here is the view of settings page :-

![ui_setting_screen2](https://user-images.githubusercontent.com/20878070/37797927-44903f7e-2e41-11e8-9d37-5ef3f71b0c0c.png) 


Here's the **working demo of the settings feature** page:

![ui_settings2](https://user-images.githubusercontent.com/20878070/37797928-44caff74-2e41-11e8-925b-36e91080c3b0.gif)


### **Part 4:** **Unpublished draft of research note for review by participants**
-------------

## Implementation
------------
(Before implementing below steps,viewing draft by user only -  would be completed , I am already working on this and it would be complete before the start of GSoC coding period)

1. Adding a new field token in Node model

2. A button in `views/notes/show.html.erb` would be added which would be visible to author only. This button with name 'Generate secret link' would call the method in notes_controller.

3. A method in `notes_controller` which would generate a 16 bit token if token for that node is not present in database and then it would render that token through JavaScript.

4. A `token.js.erb` file which would append the link after the button using AJAX.

5. Now, author can share this link to any user whose review is required on the draft.

**Demo of the sample work-flow:** 

![secret_url](https://user-images.githubusercontent.com/20878070/37879066-0a0d0584-3090-11e8-8f18-f924a865a04e.gif)
  
  
## Timeline
-------
Due to my exams nearly from 15 May - 1 June, I wouldn't be able to do major tasks so I have planned for some minor tasks in that period. 

Academic planner : [http://ipu.ac.in/pubinfo/acacalaft170717.pdf](http://ipu.ac.in/pubinfo/acacalaft170717.pdf)

Keeping in view the Outreach I will make some FTO issues, corresponding to some tasks and those tasks are highlighted by the ![example label](https://gh-label-svg.now.sh/label.svg?color=FFFF66&text=Outreach) tag

![timeline-gsoc80 1](https://user-images.githubusercontent.com/20878070/37899791-1a5e90fe-310a-11e8-84aa-e38164bc7e62.png)


### Detailed work division of major parts of timeline

**1. Discussing the timeline with mentors, reading gem documentation**
   1. Reviewing timeline closely and taking mentor's suggestion to improve
   2. Planning about the time when meeting and discussion could take place
   3. Reading all the gem documentation again and listing exceptions and their handling mechanism
   
**2. Unpublished draft of research note for review by participants**
   1. Adding new field in Node model and method in `notes_controller.rb` for handling post request
   2. Making JS file for addition of secret link and addition of button on `views/notes/show.html.erb`

**3. Testing of Unpublished draft part** 	
   1. Test for verifying method call
   2. Test for verifying working of secret link
   3. Functionality tests of the feature in different user roles

**4. Generation of design of comment if generated via E-mail**, Creating migration for adding a boolean type column in comment table which would store if the comment is generated via email or not

**5. Implementation of Reply by Email to comment**
   1. Installation of mailman gem
   2. Writing script ,defining logs file, setting polling time, etc.
   3. Writing method for receiving call from the script in `models/comment.rb`
  
**6. Testing of Reply by Email and integration of script** 	
   1. Handling Exceptions
   2. Tests for verifying the functionality of server and feature
 
**7. Writing job and setting Resque gem**
   1. Writing job
   2. Installation of Resque gem and enqueing job
   3. Installation of whenever gem and completing the backend

**8. Finalizing the template of digest with community**	
   1. Finalizing Digest design with input from  community members and representatives
   2. Implementing design

**9. Testing of Digest and Redis integration**
   1. Testing of email design on different E-mail clients
   2. Writing tests for the Job
   3. Installation of Redis on docker container
   4. Sending test emails and taking review
  
**10. UI settings for digest and other features**	
    1. Creation of settings table for storing fields
    2. Generation of two methods for handling GET and POST request - for page rendering and storage of settings                    respectively.
    3. Designig the settings page
   
**11. Testing of settings and handling any exceptions**	
    1. Writing functional tests
    2. Creating links in email for manipulation of settings
  
 The above parts can further be divided into smaller chunks. While implementation, I will try to further divide each task ,so that it could be easily reviewed and other newcomers can also try them.
 
-------

## Outreach Plan
---------
Open Source is all about collaboration with other developers, and learning from each other so, I would love to involve other first-time contributors to my project. These are some of the things I have decided upon:-
 
* I have given some thought on the parts of my project and have marked those parts where I can open FTO issues or FTO- candidate.  In my timeline, there is a Tags section, there I have used ![example label](https://gh-label-svg.now.sh/label.svg?color=FFFF66&text=Outreach) tag, for highlighting those parts.Also, at time of execution more issues from other parts can also be opened.

* I would write blogs, describing my journey with PublicLab, the importance of open source, and about my GSoC experience with PublicLab - selection in GSoC, work till that point, etc. I would publish my blog posts on following dates:-
  1. On 30th April, 2018 - Journey with Public Lab and selection
  2. On 15th June, 2018 - Work done till then and experience
  3. On 8th August, 2018 - Overall GSoC experience with public Lab and Importance of Open Source


* I can organize an Open Source talk session with my society BVPCSI (where I am technical head ) to teach students basic Github, encourage students to participate in Open source and introduce them to PublicLab which is one of the best option for newcomers to start their journey.   

--------

## Needs
-------
I would require the guidance of mentors and help from other contributors is always welcome :)

-------

## Setup
--------
I have forked and built plots2 repository and I also update my fork on regular basis.

--------

## Experience
--------
I have started my development journey from first-year of college with learning Android development from my college seniors. I have developed many android applications and participated and been appreciated in Google Hackathon (part of Android with Applied CS course) for most creative app organized at Google,  Gurgaon,  India. In the second year, I started to explore Web development by started learning Ruby on Rails. My interest has grown in web development so I continued building more web applications and also started to learn more new languages and frameworks. Today, I develop web applications in React, Java, JavaScript, nodeJS, Wordpress, etc. My majority of projects are in Ruby on Rails and I prefer using it because any web application can be built faster in Rails than any other framework. All of my projects can be found at my Github handle 

Currently, I am working as a web developer intern in a biotech startup PurSolutions (www.puresoluble.com). PurSolutions is a 
biotechnology company located in Nashville, TN which provides cytoskeletal proteins for research and industrial purposes.

I have also worked as a Teaching Assistant in a start-up, namely, Coding Ninjas (www.codingninjas.in) for their Data Structures with Java course.So, I have good knowledge of Data Structures too.

I am also Technical Head of my college computer society BVPCSI, where I am responsible for organizing technical events, workshops, codelabs, etc. for college students.

I  contribute to plots2 in  Public  Lab  ,helped many contributors and have also welcomed many first-timers to the community.

----------

## Contributions to Public Lab :
-----------
I am contributing in the Public Labs community from the past 7 months and now become well familiar with the plots2 codebase. I have done about 29 commits and have reported nearly 16 issues, and looking forward to many more. I have been consistently active in the community helped many contributors and have also welcomed many first-timers to the community. I am also part of the Public Lab [reviewer](https://github.com/orgs/publiclab/teams/reviewers/) team. My contributions to the Public Labs  are listed below :

Merged Pull Requests :
https://github.com/publiclab/plots2/commits?author=gauravano

Issues reported by me :
https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Agauravano

--------------

## Teamwork
---------
I have developed many projects in team, and always gave my best for the success of my team as I believe that success of any project depends more on coordination between team members. I have played the role of team leader in most of the projects I was/am part of. I am big fan and regular participant of hackathons as they push one to show their skills in limited time as well as train one to be a good team player. As I am technical head of [BVPCSI](https://www.facebook.com/bvcoecsi/) so been regular in organizing tech events, codelabs , etc., this position also help me to become a good team player and leader.

## Passion
---------
I love contributing to the open source communities. I also take part in Open source events like Hacktoberfest. I like the  Public Lab because the members of this community are very welcoming and helping. I got to learn so much here and looking forward to learn much more.

---------

## Audience
---------

Email have now become an important part of our life and play an essential role in spreading ideas. In Public Lab , we have many different types of Emails - new node creation, comments , answer ,etc. and now its time that we design our **Email digest** which would inform user about the latest activity in the community on daily or weekly basis. It would be user specific so will gain the user's attention .

* It would be helpful in growth of the community as digest would be user's interest specific . People would get all the topics of their interest at one place. 

**Reply by Email to Comment** would allow user to comment to the article just by replying back to the email and that comment would be automatically added in the comment section of that node. Seems quite exciting , right !. Many big tech giants use this feature, a good example is GitHub.

* This feature would allow user to reply to the question, comment on research note,reply to answer, etc. without opening the PublicLab website, making whole experience fast and convenient for the user.

**Settings menu** would allow user to customize his experience with PublicLab, it would allow user to enable/disable digest, to send emails on wiki edits, email on another user liking their post and so on.

**Sharing secret link** feature would allow users to collaborate easily by just sending each other secret link of their research notes and then they can review other's work.

---------

## Commitment
---------
Yes, I understand that this is serious commitment equivalent to a full-time job. I will give my best in performing each part of the project and also try to help other community members and newcomers as much as possible. I would love to contribute to PublicLab community even after the summer as I have learned so much here .


I look forward to working with awesome community of Public Labs for long time !!!
**Gaurav Sachdeva ( Gauravano )**

--------


**External File Links:**

Demo Video showing fetching of Emails: https://www.youtube.com/watch?v=gMV4n4Hs7OA

Demo Website on which fetching can be tried in corresponding to the video: https://mail-man-test.herokuapp.com

Demo video showing Reply by Email to Comment: https://youtu.be/b768EOUf6sg

Demo Website where Reply by Email to comment can be tried: https://mail-man-test.herokuapp.com/articles

GIF showing the working and design of settings menu: http://gauravsachdeva.me/GSoC2018/ui_settings2.gif

GIF showing the working of Secret link sharing of unpublished draft: http://gauravsachdeva.me/GSoC2018/secret_url.gif 

Timeline page: http://gauravsachdeva.me/GSoC2018/timeline.html

Gist for Reply by Email to comment: https://gist.github.com/Gauravano/172cc187d7300808a212f51130bb1b83

Gist for Weekly/daily batch digest: https://gist.github.com/Gauravano/47e92995fcb104e57236d3a6f64b6c9e

Gist of the proposal: https://gist.github.com/Gauravano/cfd6b30edfd68402522b504b968a094a

Link at which proposal is at Public Labs website: https://publiclab.org/notes/gauravano/02-18-2018/gsoc-proposal-email-integration-project
