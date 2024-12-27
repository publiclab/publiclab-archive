---
title: "GSoC 2018: Upgrade of Public Lab to Rails 5.2"

tagnames: 'social-media, gsoc, gsoc-2018-final, soc-2018-final-report'
author: souravirus
path: /notes/souravirus/08-09-2018/gsoc-2018-rails-5-upgrade.md
nid: 16901
uid: 524509
cids: 20362,20364
---

![](https://publiclab.org/public/system/images/photos/000/026/139/original/rails5upgrade.png)

# GSoC 2018: Upgrade of Public Lab to Rails 5.2

by [souravirus](/profile/souravirus) | August 09, 2018 21:53

August 09, 2018 21:53 | Tags: [social-media](/tag/social-media), [gsoc](/tag/gsoc), [gsoc-2018-final](/tag/gsoc-2018-final), [soc-2018-final-report](/tag/soc-2018-final-report)

----

## About Me

I am Sourav Sahoo and I am currently pursuing my BTech in Computer Science from NIT Hamirpur. I was selected in GSoC for upgrading the Rails version of Public Lab website to Rails 5.2\. I am an avid web developer and also love algorithms and data structures as well. I like to innovate new things.

Email: [sahoosourav1996@gmail.com](mailto:sahoosourav1996@gmail.com)

Github:[https://github.com/Souravirus](https://github.com/Souravirus)

## Team

- Sourav Sahoo - Student
- Jeffrey Warren - Mentor
- Emmanuel Hayford - Mentor

## My Contributions

[Closed Pull Requests](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:souravirus%20is:closed)

[Currently working Pull Request](https://github.com/publiclab/plots2/pull/2659#issuecomment-411990110)

## Overview of Project

Public Lab has always been eager to keep its dependencies up to date. So, since Public Lab was using Rails 4.1, I took up the project this summer to convert the Rails version to 5.2\. The upgrade contained works like upgrading gems, correcting test errors, failures and deprecation warnings, changing documentation related to the changes and fixing the errors that were not covered in the tests.

## Division of work

- Rails 4.2 upgrade
- Rails 5.0 upgrade
- Rails 5.1 upgrade
- Rails 5.2 upgrade

## Steps followed

### Rails 4.2 upgrade

We started Rails 4.2 upgrade before GSoC. The initial steps of the upgrade were already covered by @warren. So, here I have to start by correcting the errors, failures and deprecation warnings that were caused by the tests. I took me almost one month to correct these errors. Some errors had an easy reference on the internet to correct them like converting `deliver` to `deliver_now` for the invocation of instance methods. But some errors were really difficult to correct like the changes in `assert_select` in Rails 4.2\. For example, before Rails 4.1, this assertion was working fine:

```
assert_select 'p.moderation-notice', "Hi! Just letting you know ahead of time"  
```

But in Rails 4.2, I have to found a workaround and it was:

```
assert_select 'p', "Hi! Just letting you know ahead of time"
```

Then I removed a few deprecation warnings and some failures.

So, after that, there were some reviews of the codes changed and it was merged after that.

Links: [Pull request](https://github.com/publiclab/plots2/pull/2533)

### Rails 5.0 upgrade

#### Planning the upgrade

The first step I took for the Rails 5.0 upgrade was to plan the upgrade beforehand. So, I wrote some steps to be followed before, during, and after the upgrade. My mentors also helped me during the planning phase by adding some steps and shaping the issue properly.

Link: [Planning issue](https://github.com/publiclab/plots2/issues/2714)

#### Updating the Gemfile

The coding phase of GSoC started with updating the Gemfile. There were a few conflicts while doing this but it was eventually done with the help of my mentor Emmanuel Hayford. Also, we have to remove `active-record-tableless`Gem as it was not updated for Rails 5.0\. There was another problem with updating the Rails version to 5.0.7 as the **`composite-primary-key`** gem reported the following error.

```
NameError: undefined local variable or method 'always_initialized'
```

We tackled this by downgrading Rails to 5.0.6\.

#### Correcting the tests

In this upgrade, the count of errors was much higher than Rails 4\. First of all, I added `rails-controller-testing` gem as `assigns` and `assert_template` were extracted to the `rails-controller-testing` gem. Many of the errors were removed by adding those assets to `config/initializers/assets.rb` which were not in `app/assets/javascripts/application.js` or `app/assets/stylesheets/application.css` files. Also, since `attr_accessible` was not working in Rails 5.0, so we have to give mass assignment protection at controller level.

Then there was a huge chunk of deprecation warnings related to passing parameters to HTTP requests. In the previous version, the way to pass parameters to a HTTP request was something like this:

```
get :update, id: answer.id, body: 'Some changes in answer'
```

But in Rails 5.0 we have to modify it to something like this

```
 get :update, params: { id: answer.id, body: 'Some changes' }  
```

Also, the dynamic routing was deprecated and was to be removed in Rails 5.1\. So, we removed dyanamic routing from `config/routes.rb`

At the end of removing this huge chunk of errors, failures and deprecation warnings, we finally got all the tests to pass.

Link: [Pull request](https://github.com/publiclab/plots2/pull/2726)

#### Following Rails official guide

Since most of the steps were either not applicable in our case or were performed while correcting the tests, so we had only one step to follow i.e to make an application\_record.rb file and making all models inherit from `ApplicationRecord`. This was done to make a single spot to configure app-wide model behavior.

#### Follow-up fixes

With the removal of dynamic routing from `config/routes.rb` file, there were a number of routes which were not working properly. Some of the routes were covered by the tests, so I have added routes for them during the upgrade. But many of them didn't have tests, so whenever we detected any problem while performing any action in the website, they were reported as a github issue. I use to correct these issues along with adding tests for them.

Link: [Follow-up fixes](https://github.com/publiclab/plots2/pulls?q=is%3Apr+is%3Aclosed+author%3Asouravirus+label%3Afixes)

#### Updating Documentation

Last but not the least, we have to update the documentation for the changes done. So, there were some obsolete documentation in [TESTING.md](http://TESTING.md) as well as Readme file which I corrected with the help of first-timers.

Links: [Updated Readme](https://github.com/publiclab/plots2/pull/2801), [Updated TESTING.md file](https://github.com/publiclab/plots2/pull/3116)

### Rails 5.1 upgrade

This upgrade was much smaller than Rails 5.0 upgrade, as much of the errors were already corrected as deprecation warnings in Rails 5.0 upgrade.

#### Updating the Gemfile

This time also while upgrading Rails to 5.1.6, we have some problem with `composite-primary-key` gem as it reported this error. But this was fixed by downgrading Rails to 5.1.5\.

#### Correcting Tests

First of all there were some errors related to passing parameters to HTTP requests which were not corrected in Rails 5.0 upgrade. So, these were easily tackled. Then there was a problem with openid\_controller as its parameters were not allowed for mass-assignment. So, I permitted some of the attributes of open id to be used for mass-assignment. After that, I converted `render text` to `render plain` as render text was deprecated in Rails 5.1\.

Link: [Pull request](https://github.com/publiclab/plots2/pull/2898)

#### Follow-up fixes

After doing the update, we were facing some migration issues. So, I corrected this by writing the version of Rails aside the migrations.

# 

### Rails 5.2 upgrade

This was by far the smallest upgrade ever. So, here I started with updating the Gemfile and fixing a few conflicts while updating. Then I fixed a few deprecation warnings which were because of using raw sql as method argument which was solved by wrapping the argument with Arel.sql().

```
order(Arel.sql('max(node_revisions.timestamp) DESC, node.nid'))  
```

## What didn't work for us?

There is a [memory error](https://gist.github.com/jywarren/6e06ae3a6647fadcf90dc7842416c5b9) which is frequently occurring after Rails 5.0 upgrade while running Rails test. This error usually gets removed by restarting the test. We are trying every possible way to remove this as it takes much time waiting for the tests to show up after restarting the build.

## First-timers issues

Welcoming first-timers through first-timers issue have been a great initiative by Public Lab. In this summer, I also created some first-timers issue to welcome first-timers to our codebase. Here are all my first-timers issues opened:

[https://github.com/publiclab/plots2/issues/2729](https://github.com/publiclab/plots2/issues/2729)

[https://github.com/publiclab/plots2/issues/2797](https://github.com/publiclab/plots2/issues/2797)

[https://github.com/publiclab/plots2/issues/3063](https://github.com/publiclab/plots2/issues/3063)

[https://github.com/publiclab/plots2/issues/3076](https://github.com/publiclab/plots2/issues/3076)

[https://github.com/publiclab/plots2/issues/3112](https://github.com/publiclab/plots2/issues/3112)

## Other works done

### Conversion of javascript tests from jasmine to teaspoon-mocha

The jasmine tests were not working perfectly as PhantomJS was not working with Javascript ES5 code. So, I changed the tests from jasmine to teaspoon-mocha and now its working fine.

Links:

- [Issue](https://github.com/publiclab/plots2/issues/2967)
- [Pull request](https://github.com/publiclab/plots2/pull/2997)

## Additional links

- [GSoC Pull Requests](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Asouravirus+label%3Asummer-of-code)
- [Issues](https://github.com/publiclab/plots2/issues?utf8=%E2%9C%93&q=is%3Aissue++author%3Asouravirus)
- [Commits](https://github.com/publiclab/plots2/commits?author=Souravirus)
- [Presentation](https://docs.google.com/presentation/d/1eXQoS0wJ77tX0PdxKZy-gz01wm5uqrRyv9sQfmnxfAU/edit#slide=id.g3e842de2a0_0_126)

## Conclusion

I had a great experience this summer working with Public Lab. While working with the updates, I learned many things. First of all, I got to learn how Ruby on Rails exactly works. This is because I used to work with lots of config files, tests, Gemfiles, models, and controllers. I also learned about concepts related to web, like strong parameters, HTTP requests, responses, web servers, routes, assets and many more. I also worked on three javascript projects along with the upgrades, so these also imparted a great deal of insight into javascript.

I loved working with my mentors. They were very much responsive besides their busy schedules. I used to discuss the doubts with them whenever I was struck by something and they were always ready to help me. We always kept a target to finish the work before some fixed time and this helped me a lot to complete the upgrade in time. I also loved welcoming first-timers to our community.

After the GSoC, I will be really happy to work with Public Lab. I am currently working with the transition to yarn and the graphs of the website, so I will continue completing the tasks. I will also love to take the challenges coming up with the organization.