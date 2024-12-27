---
title: "GSoC proposal: Mapknitter Upgrade to Rails 6"

tagnames: 'software, gsoc, soc, response:13975, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, lat:23.241346, lon:72.421875'
author: singhav
path: /notes/singhav/04-07-2019/gsoc-proposal-mapknitter-upgrade-to-rails-6.md
nid: 18992
uid: 552080
cids: 23741,23791
---

![](https://publiclab.org/public/system/images/photos/000/031/223/original/Upgrade.jpeg)

# GSoC proposal: Mapknitter Upgrade to Rails 6

by [singhav](/profile/singhav) | April 07, 2019 10:53

April 07, 2019 10:53 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [rgsoc-2019](/tag/rgsoc-2019), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [soc-2019-proposals](/tag/soc-2019-proposals), [lat:23.241346](/tag/lat:23.241346), [lon:72.421875](/tag/lon:72.421875)

----

### About me

**Name: Avkaran Singh**

**Email:** [avkaransingh357@gmail.com](mailto:avkaransingh357@gmail.com)

**GitHub:** [https://github.com/avsingh999](https://github.com/avsingh999)

**Publiclab:** singhav

**Google Code-In Mentor-2018** @publiclab

**LinkedIn:** [https://www.linkedin.com/in/avkaran-singh-a1ba3613b/](https://www.linkedin.com/in/avkaran-singh-a1ba3613b/)

**Affiliation:** Indian Institute of Information Technology, Vadodara

**Location:** Gandhinagar, Gujarat, India

## Project description

I would like to upgrade maknitter Rails version 3.2 to 6.0 which is the latest version of Rails and also I want to write Code Coverage Test for maknitter and want to fix all bugs in mapknitter.

### Abstract/summary (<20 words):

In this summer I want to work on upgrading the code of mapknitter repository rails 3.2 to rails 6.0 The project would have many challenges because currently mapknitter in rails 3.2\. So need to changes step by step to converting rails 3.2 to 6.0\.

### Problem

#### Idea

Upgrades MapKnitter to Rails 6

#### Current State of the Problem

Currently, Mapknitter is running on Rails on 3.2 and Ruby 2.4.6 which is the old version of Rails Currently Rails new Release version 6 of Rails. So Version by Version Rails added a new feature in every version of rails and improve some of the code and features of rails. So Maknitter also upgrading newly feature adding this year in GSoC So mapknitter Upgrade the rails version also It would be great and helpful to those people who are working on mapknitter and extending the functionality of mapknitter.

#### Rails 6

Rails upgrading new version time by time and it's latest beta 3 version of rails is 6.0\. Some details about rails 6.0.there many new releases in rails 6.0

#### Rails with Ruby

Rails generally stay close to the latest released Ruby version when it's released:

- Rails 6 requires Ruby 2.5.0 or newer.
- Rails 5 requires Ruby 2.2.2 or newer.
- Rails 4 prefers Ruby 2.0 and requires 1.9.3 or newer.
- Rails 3.2.x is the last branch to support Ruby 1.8.7\. Support for all of the previous Ruby versions has been dropped officially. we should upgrade as early as possible.

#### Project Goals

- Rails upgrade
  - Rails 3.2 =\> Rails 4.0
  - Rails 4.0 =\> Rails 4.1
  - Rails 4.1 =\> Rails 4.2
  - Rails 4.2 =\> Rails 5.0
  - Rails 5.0 =\> Rails 5.1
  - Rails 5.1 =\> Rails 5.2
  - Rails 5.2 =\> Rails 6.0
- UI update and collaborate with others
- Fix existing deprecation warnings
- Write Test Coverage for new Rails 6.0 Unit testing Functional testing
- JS API endpoints of MapKnitter, write Functional Test
  - Karma, Jasmine, Mocha, QUnit
- Code Clean up after upgrade to Rails 6.0
- Generate Code Coverage Report
- Add git tools
  - codeclimate, codacy, codecov

### Implementation

I want to complete my Project Goals.

#### Rails Upgrade

To upgrade the version of rails So we will not Upgrade rails directly to rails 3.2 to rails 6.0 because Lot of error and conflict will occur So we upgrade rails version by version. And according to that version Update also ruby version.

- **Change Rails version in Gemfile:** Simply change the Rails version in Grmfile

```
gem 'rails', 'rails_version'
```

- **Update Rails dependencies:** Install all dependency with new Rails Version

```
bundle update rails
```

- **Updating Configuration Files:** Minor Rails version updates seldom require changes to configuration files. Major Rails updates often change configuration files. If we don't make the required configuration file changes, we'll likely see deprecation warnings when we launch a Rails application. Rails provide a `rails rails:update` task to update configuration files. The `rails rails:update` will identify every configuration file in our application that differs from a new Rails application. When it detects a conflict, it will offer to overwrite your file. When `rails rails:update` offers to overwrite a file, enter d (for "diff") and review the differences.
As an alternative, check out [RailsDiff](http://railsdiff.org/3.2.22.5/4.0.13), which provides an overview of the changes in a basic Rails app between example 3.2 and 4.0 (or any other source/target versions).
- **Migrate Database:** After these change might have changes in some rails database so need to migrate rails database.

```
rails db:migrate
```

- **Run Test:** After updating Rails and configuration files, run test suite and write more test for every new rails upgrade.

#### Rails Unit testing

Write unit test case of mapknitter rails because version by version update rails app so there will be error occur so need to add write all possible test need to more and more reach test coverage. write the test case for Comment, export, map, node, tag, user, pagination
**Example:** Only login user can delete own post but anonymous can't delete the post

#### Rails Functional testing

Functional Testing is probably more important than Unit Tests as they test that the many components of our application are working together correctly.
A Functional Test making a request to a Controller action and then asserting that the request is handled correctly. This will typically involve interacting with multiple components of our application such as Mailers, Queues, and the Database.

#### Code Coverage

I would like to generate a code coverage report for Ruby, to know how many lines/blocks/arcs of your code are executed while the automated tests are running. And here is `SimpleCov` gem for ruby to generate code coverage report for ruby
For use:
Gem simply **SimpleCov** add to gemfile

```
gem 'simplecov', require: false, group: :test
```

**install**

```
bundle install
```

**Example:**

![image description](/i/31234.png "simple.png")

#### JS API endpoints of MapKnitter, write Functional Test

Mapknitter is a free, open-source tool for combining and positioning images into a composite image map. So user uploads own aerial photographs. So we need to add some unit Test and Functional Testing for then **Example:** only image upload, Image position, image display at diff. Sizes etc. So I would like to suggest some JS Library Write Test case coverage

- **Karma:** Karma is not a testing framework, nor an assertion library. Karma just launches an HTTP server and generates the test runner HTML file. Karma allows testing our code on real browsers and real devices such as phones, tablets. It starts the browsers and runs the tests on them.karma is a test runner for JavaScript. karma support jasmine and mocha.
- **Jasmine:** Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, Node.js projects, or anywhere that JavaScript can run.
- **Mocha:** Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting while mapping uncaught exceptions to the correct test cases.
- **Chai:** Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- **PhantomJS:**
PhantomJS is said to be a headless browser because there is no involvement of browser while executing the JavaScript code. The execution will not be seen in the browser display, but on the command line prompt. The functionalities like CSS Handling, DOM Manipulation, JSON, Ajax, Canvas, SVG, etc., will all be taken care at the command prompt. PhantomJS does not have a GUI and hence, all its execution takes place at the command line.
- **QUnit:**
QUnit is a powerful, easy-to-use JavaScript unit testing framework. It's used by the jQuery, jQuery UI, and jQuery Mobile projects and is capable of testing any generic JavaScript code, including itself!

#### Code Clean up and Comments after upgrade to Rails

After Rails app upgrade there can be useless code so after every upgrade step I will try to remove that useless code and Try to well commented code.

#### Git tools (codeclimate, codacy)

- **CodeCliemate**
Code Climate combines line-by-line test coverage reports, technical debt assessments, and style checks in every pull request so that your team only merges clear, maintainable, and well-tested code.
- **Codacy**
Codacy is an automated code analysis/quality tool that helps developers ship better software, faster. With Codacy, you get static analysis, cyclomatic complexity, duplication, and code unit test coverage changes in every commit and pull request.

### Timeline/milestones

- **phase 1 (May 27, 2019 - June 28, 2019)**

![image description](/i/31225.png "phase1.png")

- **phase 2 (June 28, 2019 - July 26, 2019)**

![image description](/i/31230.png "phase2.png")

- **phase 3 (July 26, 2019 - August 26, 2019)**

![image description](/i/31226.png "phase3.png")

### Needs

All documentation and blogs are available on the internet. So with those documentations, Blogs, and help of mentors, I will complete this project. If I need Help I will ask to in publiclab gitter channel and Mentor

### First-time contribution

**Comments, to show overall community involvement (like helping others):**

[https://github.com/search?q=commenter%3Aavsingh999+org%3Apubliclab&type=Issues](https://github.com/search?q=commenter%3Aavsingh999+org%3Apubliclab&type=Issues)

**Open issues:**

[https://github.com/publiclab/plots2/issues/created\_by/avsingh999](https://github.com/publiclab/plots2/issues/created_by/avsingh999)

[https://github.com/publiclab/mapknitter/issues/created\_by/avsingh999](https://github.com/publiclab/mapknitter/issues/created_by/avsingh999)

[https://github.com/publiclab/image-sequencer/issues/created\_by/avsingh999](https://github.com/publiclab/image-sequencer/issues/created_by/avsingh999)

[https://github.com/publiclab/leaflet-environmental-layers/issues/created\_by/avsingh999](https://github.com/publiclab/leaflet-environmental-layers/issues/created_by/avsingh999)

[https://github.com/publiclab/spectral-workbench.js/issues/created\_by/avsingh999](https://github.com/publiclab/spectral-workbench.js/issues/created_by/avsingh999)

[https://github.com/publiclab/community-toolbox/issues/created\_by/avsingh999](https://github.com/publiclab/community-toolbox/issues/created_by/avsingh999)

**Open PRs:**

[https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aavsingh999+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Aavsingh999+is%3Aclosed)

[https://github.com/publiclab/mapknitter/pull/432](https://github.com/publiclab/mapknitter/pull/432)

[https://github.com/publiclab/mapknitter/pull/451](https://github.com/publiclab/mapknitter/pull/451)

[https://github.com/publiclab/leaflet-environmental-layers/pull/131](https://github.com/publiclab/leaflet-environmental-layers/pull/131)

[https://github.com/publiclab/leaflet-environmental-layers/pull/127](https://github.com/publiclab/leaflet-environmental-layers/pull/127)

[https://github.com/publiclab/infragram/pull/41](https://github.com/publiclab/infragram/pull/41)

[https://github.com/publiclab/infragram/pull/51](https://github.com/publiclab/infragram/pull/51)

## ![image description](/i/31233.png "pubg.png")

### Experience

I start my coding with learn c,c++ in the first semester and completed lab assignment after I started competitive coding and gradually move to learn other languages while competitive coding learn Java, Python,Ruby, from hacker Rank and youtube tutorial and Blog after this, I Introduce with Open SOurce GitHub, GitLab So, I started learn new Technology and framework Django, Flask, Ruby, React, Angular, Vue. and contribute to many organization and repository. I can adjust my self in any type of technology and can learn quickly new technology which is required to complete that task. While learning and Institute I have worked in many projects with this Technology with Team and my Own Project

- **[File Share & chatting in Java](https://github.com/rockstar777/file_sharing) :**
In this project Send file from one computer to another computer client can chat with another client and can send file to another client see history.
- **[Attendance System](https://github.com/avsingh999/Attendence "https://github.com/avsingh999/Attendence")**
Attendance System web app for Teacher and Student
Where Teacher can take student Attendance and Student can  
see their attendance.
- **[Profilee](https://github.com/avsingh999/Profilee "https://github.com/avsingh999/Profilee")**
Social media app
- **NGO Website**
Revamped live client website with additional features
Job forum, Discussion forum, Authentication, Donation
- **[Air-Writer](https://youtu.be/oETG5ljCjaI)**
It was Hardware Project. In this project, Computers to recognize letters or numbers which are written in the air
Used to develop cost-effective technologies for blind people, Handicap Teacher

### Teamwork

In File sharing Project, NGO Website and Air writer that was Team project which was a 6,6 member and 3 member groups in 3 rd year - 5th Sem. SO I work with every team member and discuss ideas with every team member and also I lead my Team in Air writer Project(Summer Design Project). I divide the work to every member with his ability and willingness to work which he wants to work. I also help/solve Problem and Error in Each project

### Passion

My passion is coding and I started my contributor in publiclab with plots2 project which was very helpful to improve my experience in Open Source after I got a mentorship in GCI it was very awesome position at the public lab. SO this thing makes me more interest in the publiclab and I also like especially mapknitter and image sequencer Project.

### Audience

My project would help maknitter website to load faster and therefore would enhance the user experience with the website and updating version of maknitter 1 to makitter 2\.

### Commitment

Yes, I understand the commitment to this project and would try my level best for making this project successful. I know that GSoC is a full-time internship program and if selected for GSoC, I will not take any other internships. So, I will give my full time to this project.

---------