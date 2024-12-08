---
title: GSoC Proposal - Email Notifications Overhaul
tagnames: software, gsoc, gsoc-2017, soc, soc-2017, soc-2017-proposals, response:13975
author: Khamba
path: /notes/Khamba/03-13-2017/gsoc-proposal-email-notifications-overhaul.md
nid: 14004
uid: 503974

---

# GSoC Proposal - Email Notifications Overhaul

by [Khamba](../profile/Khamba) March 13, 2017 07:06

March 13, 2017 07:06 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975)

---------

## About me

Hi, My name is Saurabh Sikchi and I am a third year student of Computer Science and Engineering. I have been working with Ruby and Ruby on Rails for about 2 years.

Github: [Khamba](https://github.com/Khamba)

**Affiliation:** BITS Pilani K. K. Birla Goa Campus

**Location:** Goa, India

## Project description

### Abstract/summary (<20 words):

Upgrade email notifications for new features such as reply by email, per user notification preference, scheduled email jobs, etc.

### Problem

Advanced email features greatly improve usability and user-friendliness.

### Timeline/milestones

Total Time: May 22nd to August 21st, 2017 = 13 weeks

Notification Preferences for users - 2 weeks

Improve tag subscriptions when tags are added late - 2 weeks

Reply by email to comments - 3 weeks

Sign Up Offers to auto subscribe you to the tags you were looking at - 2 weeks

There are still 4 weeks left. What else can I add here?

### Needs

Mentorship.

### Setup

_Have you forked the relevant codebases?_

Yes. ([https://github.com/Khamba/plots2](https://github.com/Khamba/plots2))

_Installed them in a dev environment such as [Cloud9.io](http://Cloud9.io)?_

I have installed it on my local computer.

---------

### Experience

Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples.

I start learning web development in PHP and ruby in my first year. As time passed, I fell more in love with ruby than PHP, so I stuck with that. After learning rails, I started freelancing and working as a contract based developer. A lot of my projects are hosted on my github ([https://github.com/Khamba](https://github.com/Khamba))

---------

_Have you looked over our welcome page and are you familiar with how to make your first contribution? Have you already?_

Yes, I have.

My pull request submission that was merged: [https://github.com/publiclab/plots2/pull/1321](https://github.com/publiclab/plots2/pull/1321)

My pull request that is yet to be merged (Edit: Now Merged.): [https://github.com/publiclab/plots2/pull/1330  
](https://github.com/publiclab/plots2/pull/1330)

I raised a new issue: [https://github.com/publiclab/plots2/issues/1331](https://github.com/publiclab/plots2/issues/1331)

Accepted solution to the issue submitted: [https://github.com/publiclab/plots2/pull/1334](https://github.com/publiclab/plots2/pull/1334)

---------

### Teamwork

I have worked in a team environment before, as a web developer under a project manager. I believe in writing descriptive tests and well-documented code so that others on the team don't face inconvenience.

In open source, I have contributed to the plutus gem ([https://github.com/Khamba/plutus](https://github.com/Khamba/plutus)), but that contribution was minor and I want to contribute something more useful.

---------

### Passion

What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?

I truly admire what [publiclab.org](http://publiclab.org) does to bring more transparency and accessibility to science and environmental research. Public participation and on-the-ground community work is the best way forward to address real life environmental issues.

### Audience

_Whom do you want your work to help? We especially appreciate proposals which make technologies and techniques more welcoming and friendly to those who've often been excluded._

I want my work to help the day-to-day users of [publiclab.org](http://publiclab.org). Features such as replying by email will be extremely helpful for people who are busy and cannot access the website at the time.I also want my work to help the core contributors of plots2\. They will have some nice features added to the codebase, and I will get to learn from the work.

---------

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

I do understand that this is a full time commitment. Since, these will be summer vacations I will have a lot of free time on my hands. Dedicating enough time to Public Lab will not be a problem.

---------

---------

#### Reply by Email to Comments

I read your [suggestion](https://github.com/publiclab/plots2/issues/214#issue-58435330) about using [mailman](https://github.com/mailman/mailman) for this. I want to propose an alternative - [griddler](https://github.com/thoughtbot/griddler). Griddler seems to more maintained. The last commit on mailman was approximately 2 years ago, and on griddler it was 2 weeks ago. What do you think?

Plan:

Add griddler and an adapter gem(more on this adapter gem in a while) to your application's Gemfile.

Griddler requires a route for the endpoint which receives POST messages.

In routes.rb, add

```
mount_griddler('/email/incoming') # or whatever incoming email path suits us
```

In config/initializers/griddler.rb

```
Griddler.configure do |config|
  config.processor_class = CommentByEmail
  config.email_class = Griddler::Email
  config.processor_method = :create_reply 
  # (A method on CommentByEmail class)
  config.reply_delimiter = '-- REPLY ABOVE THIS LINE --'
  config.email_service = :googleapps
   # this is the adapter. I will write the adapter myself.
end
```

In app/email\_processors/comment\_by\_email.rb

```
class CommentByEmail
  def initialize(email)
    @email = email
  end

  def create_reply
    current_user = User.find_by_email(@email.from[:email])
    @node = Node.find(@email.headers[:node_id])
    if current_user && @node
      @comment = @node.add_comment({ uid: current_user.uid,body: @email[:body]})
      if @comment.save
        @comment.notify(current_user)
      else
        # Should we notify the user of failure here?
      end
    end
  end
end
```

About the adapter:

Griddler already has adapters for some popular mail services. However, I noticed that plots2 is using google apps and I intend to write an adapter for g-apps myself by taking cues from the earlier adapters:

[https://github.com/r38y/griddler-postmark/blob/master/lib/griddler/postmark/adapter.rb](https://github.com/r38y/griddler-postmark/blob/master/lib/griddler/postmark/adapter.rb)

[https://github.com/bradpauly/griddler-mailgun/blob/master/lib/griddler/mailgun/adapter.rb](https://github.com/bradpauly/griddler-mailgun/blob/master/lib/griddler/mailgun/adapter.rb)

Ok then, I guess that is it for now for reply by email. Any additions or modifications?

#### Notification Preferences for Users

I was thinking of a simple solution of making a `user_notification_preference` model.

`ruser has_one user_notification_preference`

`user_notification_preference belongs_to ruser`

UserNotificationPreference will have fields -

```
comments:boolean (default: true)

subscriptions:boolean (default:true)

likes:boolean (default:true)
```

Then we can provide additional options in edit profile form with three checkboxes.

Every notify method in the models will be modified with a conditional. For example, `Comment#notify` will go from:

```
def notify_users(uids, current_user)
  DrupalUsers.find(:all, :conditions => ['uid IN (?)',uids]).each do |user|
    if user.uid != current_user.uid
      CommentMailer.notify(user.user,self).deliver
    end
  end
end
```

to:

```
def notify_users(uids, current_user)
  DrupalUsers.find(:all, :conditions => ['uid IN (?)',uids]).each do |user|
    if user.uid != current_user.uid && user.user_notification_preference.comments? # check if user wants to receive comment mails
      CommentMailer.notify(user.user,self).deliver
    end
  end
end
```

#### Sign Up Offers to Auto Subscribe you to the Tags you were Looking at

I agree with you that it would be better to do this on the client side.

> some method like getNodeTags() which returns an array of tagnames, I guess? And a way to histogram them, to find the most common of them, like mostCommonTags() which returns an array.

What if we store a hash/object with the tag name as key and the number of times user has visited it as the value?

```
function setTags(tagNames){
  var storedTags = JSON.parse(localStorage.getItem('tags'));
  storedTags ? storedTags : {}
  tagNames.map(function(tagName){
    storedTags[tagName] = storedTags[tagName] ? storedTags[tagName] + 1 : 1
    // if we have already stored the tag, increment by 1
    // else set it to one.
  });
  localStorage.setItem('tags', JSON.stringify(storedTags));
}
```

Then we can implement a getMostCommonTags function:

```
function getMostCommonTags(){
  var storedTags = JSON.parse(localStorage.getItem('tags'));
  if(!storedTags){
    return []; // Or should we return something else, in case no tags are stored?
  }
  // Now we convert storedTags hash to array of 2 element arrays [ key, obj[key] ]
  // for sort purposes
  var sortable = []
  for(tagName in storedTags){
    if(storedTags.hasOwnProperty(tagName)){
      sortable.push([ tagName, storedTags[tagName] ])
    }
  }
  sortable.sort(function(a, b){ // reverse sort
	  return b[1]-a[1];
	});
  return sortable.slice(0, 3); // 3 or how many ever tags we want
}
```

These tags can then be submitted with the sign up form, and added in users\_controller#create

```
def create
  ...
  @user.add_to_lists(['publiclaboratory'])
  if(params[:tags])
    params[:tags].each do |tag|
      @user.user_tags.build(value: tag)
    end
  end
  flash[:notice] = I18n.t('users_controller.registration_successful').html_safe
  ...
end
```

What are your thoughts?

#### Improve Tag Subscriptions when Tags are Added Late

I read your solution and although I agree with it, I kind of like your first solution [here](https://github.com/publiclab/plots2/issues/64) more - a 20 minute delay in sending the email.
It's a good practice to handle email sending asynchronously. I also think this solution will be simpler, require lesser code and will be easier to understand for future contributors. What do you think?