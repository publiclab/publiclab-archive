---
title: "Outreachy proposal:  Extend community collaboration statistics and visualization system"

tagnames: 'software, soc, soc-2018, rgsoc-2018, outreachy, outreachy-2018, outreachy-2018-proposals, response:17359'
author: cess
path: /notes/cess/10-24-2018/outreachy-proposal.md
nid: 17368
uid: 525958

---

![](https://publiclab.org/public/system/images/photos/000/027/130/original/stat.jpg)

# Outreachy proposal:  Extend community collaboration statistics and visualization system

by [cess](../../../profile/cess) | October 24, 2018 09:15

October 24, 2018 09:15 | Tags: [software](../tag/software), [soc](../tag/soc), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018), [outreachy-2018-proposals](../tag/outreachy-2018-proposals), [response:17359](../tag/response:17359)

----

---------

## About me

**Name:** Ceciliah Wairimu

**Email:** [cessmbuguar@gmail.com](mailto:cessmbuguar@gmail.com)

**Location:** Nairobi, Kenya.

**Github:** cesswairimu

**Gitter:** cess

**Twitter:** cesswairimu254

**Affiliation:** Rails Girls Nairobi(Coach/Organizer)

I am an open source lover, user and contributor. I graduated last
year with a degree in Computer Science and Technology. I first heard of
PublicLab about a year ago. I was privileged to be in one of the Open
hour(Events) on May this year which was an awesome experience and loved
the discussions, ideas, solutions and the people. I published a post
here during Mozilla Global sprint as a call to get contributors to my
project which was participating in Global Sprint and the support I received was amazing. I am also an organizer and mentor of a Rails Girls chapter in Nairobi, Rails Girls Nairobi, where we coach and introduce people(mostly ladies but gents are also welcome) to Rails, then Ruby, then Open source in that order.

## Project description

Extend community collaboration statistics and visualization system

### Abstract/summary (<20 words):

_Provide an easy and friendly way of collecting community statistics
and provide an appealing display of the insights and trends._

### Problem

There is a lot of data and content being added in PublicLab each day and there is a need to be able to best analyze and assess activities happening using the Statistics system and provide a way to best answer pragmatic questions. There is also a need to display and represent these statistics in a useful and appealing way.  

### Timeline/milestones

**Milestone1: Back-end sub-projects to collect data  
Week 1:**

**![image description](https://publiclab.org/i/27138.png "json.png")**

- Provide downloadable JSON and CSV data from various stats page  
For JSON
Create an exporter class that accepts a model record and spits out a JSON(so that it can be reused anywhere else in the application)(maybe make a folder in lib/ called export filename json.rb)
Make a new method that will be handling json downloads def download_as_json in the app/controllers/stats_controller.rb and its corresponding tests at test/functional/stats_controller.rb or maybe a method for each node i.e(def download_wiki_json, def download_note_json)
Create a template app/views/stats that will convert the stats to json and add a button at app/views/stats/index that links to the page 
For CSV
There is these two gems that look good on paper gem 'lp_csv_exportable' and 'to_csv-rails' but have no regular maintence but that might mean they are stable? Investigate if any of them is stable enough and can handle ruby and rails update without breakage. Consider the pros and cons of using a gem  to just using the Ruby CSV  class.A method in the stats_controller def download_as_csv, and its corresponding template on views/stats/, a link on the page from stats index page that takes an parameter(e.g notes) and converts and download data in a CSV file
have the implementation at lib/export/csv.rb


**Week 2:**

**![image description][1]**

- Implement new statistics on the no. of questions answered versus questions asked  
This will be a method in questions_controller that combines the functionality of index and answered method and will probably pass it a parameter(date/range) and will display the questions created(asked) within the period range and the ones answered within the same range(def 
The range maybe a drop-down with common ranges(e.g past week, month, quarter, year) or a date range with calendar  where one selects a range of time to filter the questions asked vs the questions answered. Most likely make a week a default. This will be rendered in the questions index page.

- Implement weekly caching of data to address the performance issues that may result from collating so much data.  
Some of the references I will use are https://guides.rubyonrails.org/caching_with_rails.html and  https://scotch.io/tutorials/how-to-improve-website-performance-with-caching-in-rails 
Most likely this will be a shared partial caching  for the different nodes 
Configure environments(prod alone but dev will be configured during this development for testing purposes) for caching config/environments ``config.action_controller.perform_caching = true`` and will be implemented in the different nodes partials e.g app/views/notes/_notes.html.erb
But shall consult with the mentors to see if there is a better caching method or maybe using gem redis  is better.

**Week 3:**

- Consolidation existing "range pages" like with the main stats page  
Implement a date picker that one can select dates and filter data between the range selected. This will be done in the stats_controller(maybe improve the range method or create a new one all together) a method that takes start_date and end_date  as parameters and filters within that period. A date picker will be implemented in the stats index page

**Week 4:**

- Implement displaying tags most used in a given period  
In the above description add a text for the 10(or more) most used tags in the range selected, this will be implemented in the stats controller(same way the notes range is done on the `range` method)

- Implement default display of contributors "for all time" on the /stats page  
By default render all the contributors count in the system. When the range filter above is implemented, filter the number of contributors who contributed within that period


**Milestone 2: A new section of the stats page called "Statistics per tag"**

**Week 5:**

- Template/mockup design of the Statistics page
- Implement display of stats on a per-tag basis, via standard model functions with unit tests  
Implement a kind of stats show page where you see all the statistics for a tag. Implemented in the stats_controller a method(per_tag) and tests at test/functional/stats_controller_test.rb. A template at app/view/stats/per_tag.html.erb which displays all the  wikis, notes and questions asked with a corresponding tag. url at  stats/tag_name(add in routes)

**Week 6:**

- Implement a list displaying subscribers for each tag based on subscriptions.  
Possibly have a list of all the subscription tags, their subscriptions and count rendered in a table in a descending order(count).
Implemented at stats_controller. A method (subscriptions_list) that renders all the tags in desc order of count. Tests for the methods in test/functional/stats_controller_test
A template at views/stats/subscriptions_list.html.erb that has a table of the subscriptions in descending order.

- Implement closer mirroring between stats pages and tag pages through a "graph" icon on the tag pages  
Make the page design on the stats pages to be similar to tag pages design

**Week 7:**

- Script to go back through posts and tag first-timer posts with first-time-poster tag, retroactively  
Write a script to through all posts and check if the contributors are posting for the first time(possibly to be run every 12 or 24 hours)  script to be created in lib/ folder. Maybe have a cron job that triggers the script every 12/24 hours.

**Milestone 3: Interface Design**

**Week 8:**

- Implement small "bar graph" icons around site which lead to appropriate pages in the stats system with font-awesome  
To be implemented in the stats/index page.

- Implement a date range selector for stats range.  
Implement the date time picker on the webpage as described in week 3. Use bootstrap-datepicker library.

**Week 9:**

- Implement ability to click bar graphs to open that actual collection of items in a view.  
Add links on the graphs on views/stats/index to corresponding collection of items(e.g notes, wikis) on their pages.

**Milestone 4: Stretch goals**

**Week 10:**

- Make statistics system compatible with (or readable by) GrimoireLab  
A python api that fetches data and displays it using grimoirelab. Resources https://chaoss.github.io/grimoirelab-tutorial/ and https://github.com/chaoss/grimoirelab-perceval
Make a folder in app/api namely grimoire where all the related files will be created.

**Week 11:**

 - Implement a script to go back through posts and tag first-timer posts with first-time-poster tag, retroactively so they show up at       to improve stats on first-time posting  
Graph the results over time to be done in the tag show page(maybe refine the existing graph).

- Implement any requests on improvement of the project from the community


**Week12:**

- Improving the project and fixing break points

**A proposal of the statistics page**

\*\*\*\*![image description](/i/27174.png "plot.png")

### Needs

Documentation, which most are on the internet such as font-awesome documentation, implementation of GrimoireLab.

Mentors and reviewers which plots2 contributors has been giving me amazing support with.

### First-time contribution
https://github.com/publiclab/plots2/pull/3912  
https://github.com/publiclab/plots2/pull/3911  
[https://github.com/publiclab/plots2/pull/3711](https://github.com/publiclab/plots2/pull/3711)  
[https://github.com/publiclab/plots2/pull/3614](https://github.com/publiclab/plots2/pull/3614)  
https://github.com/publiclab/plots2/issues/3915

My first contribution to plots2 [https://github.com/publiclab/plots2/pull/2059](https://github.com/publiclab/plots2/pull/2059)

---------

### Experience

I learned about software development in the University and sampled a
couple of languages like Java, C# and PHP. During my internship in year 3
of University(2016), I interned at a Company that was using Ruby as its core,
and I was introduced to Ruby then. I have been learning Ruby since
then with Sinatra and Rails as my primary frameworks. Last year I joined Agileventures where I have been contributing to open source projects for charities. I am also one of the maintainers of [Mpesa-stk gem](https://rubygems.org/gems/mpesa_stk) which is a gem that allows online mobile payments on behalf of customers using STK

Some links to contributions

- [Local Support](https://github.com/AgileVentures/LocalSupport/commits?author=cesswairimu)
- [Mpesa-stk](https://github.com/mboya/mpesa_stk/commits?author=cesswairimu)
- [Code9ty](https://github.com/code9ty/website/commits?author=cesswairimu)

---------

### Teamwork

I am a member of [AgileVentures](https://www.agileventures.org/)
which is a charity, crowd-sourced learning community and project development for
charities. Here, I work in a team in development of projects,
sprinting, scrums, pairing-sessions and mob sessions.

Being an organizer of Rails Girls Nairobi we mostly have teams which
we work with and switch up after two weeks. Within these teams we have
tasks that are divided among the group members and work together to
finish them in the period set.\_\_

---------

### Passion

I am passionate about open source and with PublicLab, I love and relate to the commitment of the community to facilitate ways to solve environmental and social problems using DIY science which enables one to replicate a research and tweak it to solve his/her needs. Open sourcing the research and ideas to the community at large. The ability of anyone in the community to create content and share. Bringing together different people, scientists, activists, technologists and many more. Like the Open Hour I attended was so awesome because they were different people in different fields and different places and each giving their experiences from their perspectives. In short, the fact that the software I write could improve someone's life and environment and I believe every person deserve fresh air and environmental hazard free environmental and the fact that PublicLab is already facilitating this...Is totally liberating.

### Audience

This project will make the viewing of statistics and activities of the community, and assessing them in different ranges of time easy. This will help in assessing the trends of the community and possibly be able to assist in community planning.

  [1]: /i/27491.png "plots.png"