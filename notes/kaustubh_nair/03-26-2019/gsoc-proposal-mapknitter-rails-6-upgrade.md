---
title: GSoC Proposal: Mapknitter Rails 6 upgrade
tagnames: mapknitter, gsoc, soc, first-time-poster, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects
author: kaustubh_nair
path: /notes/kaustubh_nair/03-26-2019/gsoc-proposal-mapknitter-rails-6-upgrade.md
nid: 18873
uid: 577485

---

# GSoC Proposal: Mapknitter Rails 6 upgrade

by [kaustubh_nair](../profile/kaustubh_nair) March 26, 2019 20:28

March 26, 2019 20:28 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [soc-2019-projects](../tag/soc-2019-projects)

### About me

**Name**: Kaustubh Nair

**Github**: [kaustubh-nair](https://github.com/kaustubh-nair)

**Email**: [](https://github.com/kaunair "https://github.com/kaunair")[kaustubh.nair108@gmail.com  
](http://mailto:kaustubh.nair108@gmail.com "http://mailto:kaustubh%2Enair108@gmail.com/")

**Affiliation**: International Institute of Information Technology, Bangalore

**Location:** Bangalore, India

## Project description

### Abstract/summary :

In this project, my primary intention is to upgrade Mapknitter to Rails 6\. Other small features are increasing test coverage and improving CI.

### Deliverables

The following features should have been implemented at the end of GSoC

- Codeclimate set up
- Dangerbot set up
- Increased test coverage
- Redundant code removed
- Upgrade to latest stable version of Rails ( most likely 6) for MapKnitter
- Upgrade to latest Ruby version supported by Rails 6 for Mapknitter
- System tests configured for Travis and Dangerbot

We are expecting a few features to be implemented before the GSoC period starts. So in case I end up ahead of schedule, I shall perform the same upgrades on `spectral-workbench`

### Implementation/Details

1. **Test Coverage** - Tests are important since they will show specific errors and guide us to what is exactly wrong and where the code is failing. If we don't have tests covering a breaking change, it will take more time to track and understand the change, thus wasting time. (Relevant issue: #304) Currently, we have some basic unit and functional tests.
The test coverage for `mapknitter` is currently at around [60%](https://coveralls.io/github/publiclab/mapknitter). I would aim to reach around 80% coverage before starting the upgrade.
2. **CI improvements** - I shall set up Codeclimate which is really useful for code review and integrate it with travis. I will follow the Codeclimate [documentation](https://docs.codeclimate.com/docs) for this.
I will also fix Dangerbot for code and PR review.(Relevent PR: [https://github.com/publiclab/mapknitter/pull/306](https://github.com/publiclab/mapknitter/pull/306)). I shall follow the [documentation](https://danger.systems/guides/getting_started.html) for this as well.
3. **Code Cleanup** - After we have considerable test coverage, I shall proceed to clean up and remove redundant sections in the code. A list of features will be found on this Github [issue](https://github.com/publiclab/mapknitter/issues/513)
4. **Rails upgrade workflow** - The idea is to roll out upgrades in as small pull requests as possible. We should upgrade rails to the closest target version each time for minimum conflicts and errors.

The path that I will follow is,

1. **Rails 3.2 =\> Rails 4.2**
2. **Rails 4.2 =\> Rails 5.0**
3. **Rails 5.0 =\> Rails 5.1**
4. **Rails 5.1 =\> Rails 5.2**
5. **Ruby 2.4.4 =\> Ruby 2.5.0**
6. **Rails 5.2 =\> Rails 6.0**

We should be going to Rails 4.0 and 4.1 before jumping directly to 4.2\. But while trying to [upgrade](https://github.com/publiclab/mapknitter/pull/482) `mapknitter` to Rails 4, I realized that Ruby 2.4 and Rails 4 are not compatible. (Ref: [https://github.com/rails/rails/issues/27670](https://github.com/rails/rails/issues/27670)). The closest available version is Rails 4.2.8

#### Workflow

  
![image description](https://publiclab.org/i/30778.png "Screenshot_20190326_232137.png")

a. **Upgrade Rails**: First of all we should upgrade the rails gem to the closest target version.

For this we need to change the rails version in the Gemfile. For example,

```
   gem 'rails', '~>4.2.11' 
```

b. **Upgrade gems**: Next, we should upgrade the gem dependencies to the latest version. Before doing this, we need to first relax versions of all the gems in the Gemfile so that their versions can be updated. Now gems can be upgraded by running,

```
   bundle update
```

c. **Update rails config**: Once all the dependencies are installed and compatible with each other, we need to start updating the code. I will start by first fixing the config files. For this, we can use [RailsDiff](http://railsdiff.org/) which shows the configuration changes between rails versions.

We can also use the [rake update task](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#the-update-task) that is provided by rails for dealing with changes in old files and creation of new files. This is done by running

```
   rake rails:update
```

d. **Fix errors in test**: Due to change in rails version, there is a possibility that the tests will encounter syntax and other kinds of errors. This needs to be fixed before running the tests.

e. **Run tests**: Tests will be my primary way of finding out breaking points in the code. I will be fixing the code until all the tests pass. Useful reference guides during this process will be the [Upgrade Guides](https://guides.rubyonrails.org/upgrading_ruby_on_rails.html)and [Release Notes](https://guides.rubyonrails.org/4_2_release_notes.html)., which are amazingly documented.

f. **Fix deprecation warnings**: I will try to fix all deprecation warnings before proceeding to the next upgrade since it will make things easier in the future. We can also configure the test environment to raise an exception during deprecation warnings by add the following line to `test.rb`

```
   config.active_support.deprecation = :raise
```

This makes it easier to spot and fix deprecation warnings

g. **Finding and fixing bugs not covered by tests**: Since our tests suite might not cover everything, It is possible to encounter unexpected bugs. For this we can implement the upgrade to the `unstable` branch for testing before merging it to main. We can take help from the community for testing the upgrade. I will write tests for any such bugs found and then proceed to fix them.

1. **Configuring system tests** - It will be really useful for `mapknitter` to support system tests. I will be integrating system tests with Travis and Dangerbot once `mapknitter` is up to Rails 5\. The implementation will be similar to what has been done in [plots2](https://github.com/publiclab/plots2/pull/4888)

## Timeline

**Community Bonding Period (May 6 - May 27)**: During this time, and prior to this,I will be performing the prerequisites for the Rails upgrade mentioned above.

This includes:

- Expanding test coverage
- Setting up codeclimate and dangerbot
- Removing redundant code

**Phase 1 (May 28 - June 24)**: Upgrade to Rails 4.2

**Phase 2 (June 25 - July 22)**: Upgrade to Rails 5.2

**Phase 3 (July 23 - August 25)**: Upgrade to Ruby 2.5, Rails 6, Set up system tests

**Weekly timeline**

Week 1: Upgrade to Rails 4.2 - Update Gems, Fix tests

Week 2: Upgrade to Rails 4.2 - Fix tests, Fix deprecation warnings and other bugs.

Week 3: Upgrade to Rails 4.2 - Fix tests, Fix deprecation warnings and other bugs.

Week 4: Buffer period ( For fixing bugs if necessary. Else move on to next milestone)

Week 5: Upgrade to Rails 5 - Update Gems, Fix tests

Week 6: Upgrade to Rails 5 - Fix tests, Fix deprecation warnings and other bugs.

Week 7: Buffer period ( For fixing bugs if necessary. Else move on to next milestone)

Week 8: Upgrade to Rails 5.1

Week 9: Upgrade to Rails 5.2

Week 10: Upgrade to Ruby 2.5

Week 11: Upgrade to Rails 6

Week 12: Set up system tests and clean up code

Week 13: Set up System tests

### First-time contribution

#### Comments, to show overall community involvement (like helping others):

[https://github.com/search?utf8=✓&q=commenter%3Akaustubh-nair+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Akaustubh-nair+org%3Apubliclab&type=Issues)

#### Issues

- [Empty pages on search results](https://github.com/publiclab/plots2/issues/4871 "https://github.com/publiclab/plots2/issues/4871")
- [Environment variables not loading on travis for external PRs](https://github.com/publiclab/mapknitter/issues/491 "https://github.com/publiclab/mapknitter/issues/491")
- [Code cleanup](https://github.com/publiclab/mapknitter/issues/513)

#### Pull Requests

- [Setting up Coveralls](https://github.com/publiclab/mapknitter/pull/431)
- [Prevent multiple builds on Travis](https://github.com/publiclab/mapknitter/pull/494)
- [Increasing test coverage](https://github.com/publiclab/mapknitter/pull/467)
- [Switch to Yarn from Bower](https://github.com/publiclab/mapknitter/pull/357)
- [Fix map of maps](https://github.com/publiclab/mapknitter/pull/354)
- [Add image urls to map json](https://github.com/publiclab/mapknitter/pull/352 "https://github.com/publiclab/mapknitter/pull/352")
- [Show grid of notes with thumbnails](https://github.com/publiclab/plots2/pull/3970)
- [Add reactions to images](https://github.com/publiclab/mapknitter/pull/344)
- [Fix regex for node shared](https://github.com/publiclab/plots2/pull/3815)
- [Fix regex for emojis in square brackets](https://github.com/publiclab/plots2/pull/3721)

### Experience

I have been working on Ruby on Rails for around a year and a half ([Check out my github repos!).](https://github.com/kaustubh-nair?tab=repositories)

Also
I have been working as a backend developer with a startup for around 9
months. Currently, most of the medical records in India are handwritten
and thus decentralized. We aim to provide a platform that used
technology to make healthcare in India easier. i have gathered
considerable skill in the Rails, Docker, and Devops while working here.

Projects:

[Contribution Tracker](https://github.com/zense/Contribution-Tracker)-
I made this project for Zense as a kind of scoreboard for tracking
contributions. It uses the github api to track commits, prs and issues
to the organization.

[Twitter Clone](https://github.com/kaustubh-nair/Simple-Twitter-Clone)- Twitter implemented using Django as part of my semester project with 2 other classmates.

### Teamwork

I'm an active part of our _college_ developers' club [Zense](https://zense.co.in/).
Zense tries to promote learning through team projects and sessions. We
use software to try and fix problems in our college and society. [Here's a link to our github page.](https://github.com/zense)

### Passion

I'm really interested
in Public Lab. The thing that amazes me the most about this
organization is how welcoming and empowering this community is! I'd love
to work with Public Lab and help the Open Source Community grow.

### Audience

My project is targeted towards the entire publiclab community.
Upgrading rails will ensure rolling out new features will be less time
consuming and easier. Upgrading rails is a great benefit for everyone!

### Commitment

I understand that it is a serious commitment and I shall be spending around 5-6 hours of work daily for this project.