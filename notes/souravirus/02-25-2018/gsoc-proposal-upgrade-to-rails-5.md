---
title: 'GSoC proposal: Upgrade to Rails 5'
tagnames: software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, gsoc-2018-final, first-time-poster
author: souravirus
path: /notes/souravirus/02-25-2018/gsoc-proposal-upgrade-to-rails-5.md
nid: 15814
uid: 524509

---

# GSoC proposal: Upgrade to Rails 5

by [souravirus](../profile/souravirus) February 25, 2018 18:59

February 25, 2018 18:59 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [gsoc-2018-final](../tag/gsoc-2018-final), [first-time-poster](../tag/first-time-poster)

----

![image description](https://lh4.googleusercontent.com/yX-T0wgORDtO-W7Ambzb9yVBLtZ-M2pxfaVFWSJDIIfdd8lj4iMDaC5D9PGIogq-YfPUHC0rNHPjJXWnt7QTOywZd_VI0exdawj7CMSru6-e6PGz0maCccEgQXLZSGFT4GLt4kX_ "Rails.png")

## About me

Name: Sourav Sahoo

Email: [sahoosourav1996@gmail.com](mailto:sahoosourav1996@gmail.com)

Github:[https://github.com/Souravirus](https://github.com/Souravirus)

LinkedIn:[https://www.linkedin.com/in/sourav-sahoo-65a616117/](https://www.linkedin.com/in/sourav-sahoo-65a616117/)

Gitter username: souravirus

Affiliation: National Institute of Technology, Hamirpur

Location: Hamirpur, Himachal Pradesh, India

CS Junior at NIT Hamirpur. Fascinated by Algorithm and Data Structures. I love building things through different technologies. I like building projects in web development.

## Project description

Public lab is currently running its website on rails 4.1\. I would love to upgrade the code of plots2 into rails 5.0 and then to rails 5.1\.

### Abstract/summary (<20 words):

In this summer I want to work on upgrading the code of plots2 repository to rails 5.0 and rails 5.1\. The project would have many challenges to conquer like converting the code of website compatible to rails 4.2 , writing tests for the whole website, finding gems compatible to rails 5.0 and then converting the code into rails 5.0 and then to rails 5.1 .

### Problem

As we know rails in constantly being upgraded and the latest stable version of it is rails 5.0.1 . So, why should we move to rails 5\. Here are some details about rails 5.0:

- First major release in three years
- Faster
- Less memory usage
- Less time doing garbage collection

#### How is it possible?

##### Efficient Garbage Collection :

- Rails 5 uses Ruby 2.2.2 which does garbage collection of symbols and also uses incremental garbage collection which means 2x faster and less memory usage.
- Previously, that meant that Ruby would periodically go through all the objects in memory, mark the ones that were still fresh or being used, and then make a second pass to remove the unmarked objects from memory.
- Well, now, in Ruby 2.2, we get incremental Garbage Collection. And the basic idea is to break up the scanning and removal of objects so that the process happens incrementally, not all in one big sweep.
- So while the total work and the total time may still be the same, it's broken up among many smaller operations.
- And the result is that Ruby feels much faster to use, and therefore so does Rails.

##### Improvements in rails itself

In addition to these speed improvements in Ruby, Rails itself has gotten faster as well.

- The core team has optimized common operations, the code has fewer dependencies on other code in libraries, and there are fewer object allocations to memory. And overall you'll find that the development environment feels much faster.
- The development environment uses Puma web server now, instead of using Webrick.
- Previously development mode used to check the modification time of all of your files in your project to know if anything had changed so that it could automatically reload the development environment for you.
- But now, there is a file system monitor, which notifies Rails whenever something changes.
- There is no more requirement to check the modification times of all the files.
- And that makes development feel snappier when you are working.
- And on top of these performance improvements, Ruby on Rails 5 gives us many new features that we can use for development.  

### Keeping up with the world

Also, one more problem is  Rails has removed support for version below rails 3.0\. So, it would be great if we upgrade rails application as soon as possible.

### Implementation

There are three ways to upgrade rails application:

1. **Stop the world**: In this method, everyone starts working on rails update and stops any other work.
2. **Long-lived upgrade branch**: Developers make a new branch and start upgrading the application.
3. **Incremental upgrade**: Get the application working with multiple versions of Rails and incrementally fix compatibility problems by conditionalizing code to produce the same behavior in the old and new version.

In case of a small app, we would have gone for dropping everything and doing the rails update or giving a branched update. But since public lab is a big community and we have many PRs merged per day. So, I have planned to update publiclab/plots2 from rails 4.2 to rails 5.0 and from rails 5.0 to rails 5.1 incrementally.

Here are the steps here about how will I do it.

First of all, before executing the following steps, we have to delete the Gemfile.lock from the git itself. To do this, what we have to do is:

```
git rm Gemfile.lock
```

Then ignore the file by adding it to your .gitignore.

We have done this because on a stable app - Gemfile.lock stores the exact version of libraries that are used. This is good for normal use, but we need our gem to be able to be bundle install-ed against any version of Rails. Removing the Gemfile.lock allows us to do that.

#### Running Multiple Gemfiles:

First of all, I will change the Gemfile so that it can load a different version of rails. I will add this code to run the code with different rails version. Here is the code snippet if I am to write an incremental update from rails 4.1.16 to 4.2.10:

```

rails_version = ENV["RAILS_VERSION"] || "default"  
rails = case rails_version  
when "master"  
  {github: "rails/rails"}  
when "default"  
  ">= 4.1.16"  
else  
  "~> #{rails_version}"  
end  
  
gem "rails", rails  
  
```

So, now when I have to run the website in rails 4.2.10, I will just write:

```
RAILS_VERSION=4.2.10 bundle update
```

Let's say, now I have to run tests in rails 4.2.10, I will just run

```
RAILS_VERSION=4.2.10 bundle exec rake test
```

#### Running against multiple version of travis:

For this, I have to add different environment variables to run Travis in different environments. For eg. I have to run Travis for rails 4.1.16 and rails 4.2.10, so this is how I will add two different environments:

```

env:

- “RAILS_VERSION=4.1.16”
- “RAILS_VERSION=4.2.10”

```

While we're testing against different versions of Rails, let's make sure we're testing against different versions of Rubies too. So, this is how I added different Ruby versions in .travis.yml:

```
rvm:  
	- 2.3.0  
	- 2.3.0
```

Now since we have added a new environment to the plots2 repository, the tests might be failing. So, now since users contributions will be tested for multiple environments, we have to allow failures in the initial phase but later when all tests have passed in the newer version, the failures will not be allowed. So to allow failures, what I will do is, in .travis.yml I will add this code:

```
matrix:  
  allow_failures:  
    - env: "RAILS_VERSION=3.0.0"  
      rvm: 2.0.0
```

Also, I will have to modify the docker-compose.yml file so that it takes RAILS\_VERSION from the environment. I will do this by modifying the build inside web:

```

web:  
     build:  
     context: .  
     args:  
     	 - RAILS_VERSION=${RAILS_VERSION}

```

Now I will also add these lines in Dockerfile so that it would take the RAILS\_VERSION from the arguments of the build command.

```

ARG RAILS_VERSION

ENV RAILS_VERSION=$RAILS_VERSION
```

So, this results in 2 tests in Travis and the first passes because it is in rails 4.1.16 and the second test fails because it is in rails 4.2.10\.

![](https://lh4.googleusercontent.com/tBuNiP8f1Ju9HcogXQ2EUF3YZrDFo36ja6w8rz5hueFhP6RXDJIa5r2lpPs7Tin7yUmHd5rQSNwrvJOX_iWfxJ_xmeAXU8Eo_Nq4JN3P7TE3ernrqohWTbELCTNiN2NBKGrcN6XT)

#### Main processes to follow:

Once the prerequisites in place, I will follow roughly this process:

##### Research

I will do the research in the community bonding period. I will read the [Rails upgrade guide](http://guides.rubyonrails.org/upgrading_ruby_on_rails.html) thoroughly as I have to refer it back too often. I will also refer to some of the blogs regarding the rails update and also youtube videos.

Some blog links are:

1. [http://guides.rubyonrails.org/4\_2\_release\_notes.html](http://guides.rubyonrails.org/4_2_release_notes.html)
2. [http://edgeguides.rubyonrails.org/5\_0\_release\_notes.html](http://edgeguides.rubyonrails.org/5_0_release_notes.html)
3. [http://guides.rubyonrails.org/5\_1\_release\_notes.html](http://guides.rubyonrails.org/5_1_release_notes.html)
4. [http://railsapps.github.io/updating-rails.html](http://railsapps.github.io/updating-rails.html)
5. [https://hashrocket.com/blog/posts/how-to-upgrade-to-rails-5](https://hashrocket.com/blog/posts/how-to-upgrade-to-rails-5)

Some youtube links are:

1. [https://www.youtube.com/watch?v=j\_1im6QV44w&t=398s](https://www.youtube.com/watch?v=j_1im6QV44w&t=398s)
2. [https://www.youtube.com/watch?v=I-2Xy3RS1ns&t=649s](https://www.youtube.com/watch?v=I-2Xy3RS1ns&t=649s)

##### Initial Exploration

After doing research, I have to get the app booting under target version of rails. I will have to update the Gemfile until it works out. As of now, the update to rails 4.2 didn't had any issues with gems as they were easily available, But for rails 5.0 update I have to find some alternate gems or have to update the gems myself in there repository. Here is the error [log ](https://docs.google.com/document/d/1cKMxbzR3Gs5bCB0n5VBxx0h3guXmcbga9g8I5dxNLP4/edit?usp=sharing) while doing bundle update in rails 5.0.3 environment. So, the gems I have to update or find an alternate are :

1. activerecord-session\_store
2. paperclip
3. protected\_attributes (Actually it is not supported in Rails 5.0)
4. authlogic-oid
5. composite\_primary\_keys
6. friendly\_id
7. grape
8. grape-swagger-entity
9. jbuilder
10. passenger

##### Following the steps of updating the rails code

In this step, I will follow the steps given in [Rails upgrade guide](http://guides.rubyonrails.org/upgrading_ruby_on_rails.html) and other references for conversion from rails 4.2.10 to 5.0 and from rails 5.0 to rails 5.1\. Here in this step, I have to find the deprecated code and replace it with a new code. I also have to modify the tests for the changed code.

##### Fixing tests and conditional logic

This step would require much amount of work as I have to make the tests pass in the current code as well as the new commits being given regularly. Each change would be a new Pull Request as I have done in [https://github.com/jywarren/plots2/pull/261](https://github.com/jywarren/plots2/pull/261) while updating from rails 4.1 to rails 4.2 .

We also will require conditional updating of code as updating the code directly in an incremental update might not work in the previous version. So we have to give conditional logic wherever necessary as we have done in the Gemfile.

Another example can be that of protected\_attribute gem, we can include it in when rails version lesser than rails 5.0 :

```
 if ENV["RAILS_VERSION"] != "5.0.3"  
     gem 'protected_attributes'  
 end
```

Also in the rails 5.0 app, we can define how our test application can run. So, if we want to use the sorted order of the tests, we could define it something like this:

```
 if ENV["RAILS_VERSION"] != "5.0.3"  
     gem 'protected_attributes'  
 end  
```

##### Fixing operational problems

Once all the tests are passing, it's time to test the upgrade with some live traffic. This will show operational problems which we need to fix in the live version of our update. In this stage, I have to solve many issues that are related to upgradation of rails given by the users. Also since I am giving an incremental update, we would also face many problems while running multiple versions at the same time. The problems would arise because both apps would be writing to and reading from same database caches and cookies.

![](https://lh3.googleusercontent.com/fKR0lJDOolAe_cNIpNqzT4T15Vs605BNF5m8aORB-bzinz9TUSyKBxo1EuFjjusaeosinzkVb-aeoGtSkbyWbyNScerRyX0eMD-VnlmyPOBNxGdequZ0FrTtoga0U9KmTu-mBxD-)

##### Rolling out to the new version

Finally, after doing the aforesaid process, we would gradually rollout to the newer version. Also tackling the errors related to newer version meanwhile.

##### Removing the obsolete code

After rolling out to the newer version, we have to take out time for removing the code from the previous version. These conditionalised codes would be in many places. So, I have to track these in previous commits and delete them. At last, we would be fine to move on. Cheers!!

### Timeline/milestones

#### Community Bonding (April 24 - May 14)

In this period, I will be spending time with understanding the codebase of the website in a more detailed manner as it would be much needed for upgrading the codebase. I would also be taking help from mentor whenever there is some problems understanding the code. I would also take a note where there is need of adding tests to the plots2 repository.

#### Phase 1 (May 14 - June 15)

Upgrading the code fully from rails 4.1 to rails 4.2\. Actually many steps for updating has been already done in the pull request [https://github.com/publiclab/plots2/pull/1832](https://github.com/publiclab/plots2/pull/1832) , but many tests are still failing and the website is still broken. So I will complete the updating of the plots2 repository to rails 4.2 in this phase.

Then I will be covering the whole code of plots2 repository with tests related to rails so that when changing the code from rails 4.2 to rails 5.0\. I would be sure that my changes are correct. This would also ensure that code is not broken when it is used in the future.

#### Phase 1 Evaluation (June 11 - June 15)

Evaluation of application to rails 4.2

#### Phase 2 (June 16 - July 13)

Upgrading the code of publiclab/plots2 repository from rails 4.2 to rails 5.0\. The steps followed would be following:

- Updating Gemfile
- Finding alternatives for deprecated gems or updating the gems itself
- making new Application classes and making models to inherit from them
- validation changes
- changing halting callback changes
- adding rails controller testing
- enabling/disabling autoloading
- xml serialisation
- Using byebug instead of debugger
- Using wildcards in test files to shorten them
- A new way of mass assignment as is given[here. ](https://rubyplus.com/articles/3281-Mass-Assignment-in-Rails-5)
- Correcting errors, failures and depreciation warnings.
- Updating Documentation like Readme for the changes done
- Taking issues from the modified website deployed
- Rolling over to modified website

I would also need mentors decision before changing any of the configurations in this phase.

#### Phase 2 Evaluation (July 9 - July 13)

Evaluation of the web application upgraded to rails 5.0

#### Phase 3(July 14 - August 6)

Complete any pending work for the previous upgrade and upgrading the code of public lab/plots2 from rails 5.0 to rails 5.1 . The steps followed would be following:

- Updating Gemfile
- Finding alternatives for deprecated gems or updating the gems itself
- Changing all the occurrences of HashWithDifferences with ActiveSupport:HashWithDifferences.
- Correcting errors, failures and Depreciation warnings.
- Updating Documentation like Readme for the changes done
- Taking issues from the modified website deployed
- Rolling over to modified website

In this period, along with the updating, I will be taking care of the issues that we will be facing while using the updated site.

I also want to write a blog about the updating process I have implemented for public lab website which will be beneficial for future rails updaters. I would like to publish it in [public lab](https://publiclab.org/) website.

#### End Term Evaluation (August 6 - August 14)

Submission of the project and final mentor evaluation

#### Post GSOC

Continue working in public lab as I have been working since February 4\. I was also working with the graphs of the website. I can continue working on it, if it isn't completed. I would also be working on any issues related to the updating of the website.

#### Weekly timeline

#### ![image description](https://publiclab.org/system/images/photos/000/024/192/large/Screenshot_from_2018-03-26_15-36-13.png "Screenshot_from_2018-03-26_15-36-13.png")

![image description](https://publiclab.org/system/images/photos/000/024/193/large/Screenshot_from_2018-03-26_15-36-27.png "Screenshot_from_2018-03-26_15-36-27.png")

#### 

### Outreach Program

I can surely make many first-timers issues as there many easy tasks in my project. I can make many first-timers issue on replacement of code, replacement of Gems and many other simple tasks. I can make the involvement of first-timers in the removal of obsolete code after updating to new version.

### Needs

All documentation are available on the internet. So with those documentations and help of mentors, I would be completing my project until the end of summers.

### Contribution

- I have been contributing to Public lab from February of this year. I have also started becoming comfortable with the codebase.
- My merged commits include[https://github.com/publiclab/plots2/commits?author=souravirus ](https://github.com/publiclab/plots2/commits?author=souravirus)
- My open PRs include [https://github.com/publiclab/plots2/pulls/Souravirus](https://github.com/publiclab/plots2/pulls/Souravirus)
- My issues reported include [https://github.com/publiclab/plots2/issues/created\_by/Souravirus](https://github.com/publiclab/plots2/issues/created_by/Souravirus)
- I am currently working to improve the graphs of the whole project which I have started by improving the graphs on user profiles and graphs on stats page.
- I have also currently added a PR in plots 2 repository related to upgradation to rails 4.2\. Here is the link [https://github.com/publiclab/plots2/pull/2533](https://github.com/publiclab/plots2/pull/2533)
- Here is my contribution graph to plots repository

- ![](https://lh6.googleusercontent.com/YX8zRQ1lVnk1v_F2_AefiNMxQrF_yTdtZ5gwUR0lVlLRtfQHg9KYibQKhk-cVfKlSfKI7R8pA87S8UyaiWqLiZnOI4p2GkRm7cgfmR9bBlRdZ8XzdFJpNDRlF3hX8YVFTfvEUxPb)

### Experience

I have been working on web development since I was a sophomore. Previously I used PHP as the backend for web development. Some of my notable projects in this field are :

Confession site:

- confession site for all the students of NIT Hamirpur
- made during NIMBUS - techfest of NIT Hamirpur for team .exe
- made for students to confess their feelings to anyone or anything in college
- Project link:[confession-site](https://github.com/Teamexe/confession-site)
- Live website:[confession-site](http://exe.nith.ac.in/confess/)

Placement guide:

- an easy platform to facilitate recruitment process for the students of NIT, Hamirpur
- included information about students and companies
- included page for quiz questions
- included an email application
- Project link:[placement-guide](https://github.com/Souravirus/placement-guide)

I also contributed to an event named[Paradox](https://github.com/Teamexe/Paradox-2017) which is a fun event organized during Nimbus of NIT Hamirpur.

### Teamwork

- Volunteered for Software Freedom Day organized by GLUG NITH for the year 2016 and 2017
- Participated in 3 hackathons organized in NIT Hamirpur
- Conducted workshop on git, Linux and command line and bash for team .exe for the freshmen of NIT Hamirpur with two other teammates
- Created projects like confession website and organized paradox with team members of team .exe
- Problem setter and tester of heuristics - a monthly coding contest of CSEC NITH

### Passion

I really love the project in Public lab especially the kite mapping and balloon mapping. I am an avid web developer and would love to contribute to Public lab this summer.

### Audience

My project would help public lab website to load faster and therefore would enhance the user experience with the website. Also, updating rails will ensure more security and fast loading of the Public Lab website. Rails also have removed support for version below rails 3.0\. So, it would be great if we upgrade rails application as soon as possible.

### Commitment

Yes, I understand the commitment to this project and would try my level best for making this project successful. I know that GSoC is a full-time internship program and if selected for GSoC, I will not take any other internships. So, I would devote my full time to this project.