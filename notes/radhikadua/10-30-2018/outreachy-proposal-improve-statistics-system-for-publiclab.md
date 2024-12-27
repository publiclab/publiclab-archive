---
title: "Outreachy proposal: Improve statistics system for publiclab"

tagnames: 'software, soc, soc-2018, rgsoc-2018, outreachy, outreachy-2018, outreachy-2018-proposals, response:17359, first-time-poster'
author: radhikadua
path: /notes/radhikadua/10-30-2018/outreachy-proposal-improve-statistics-system-for-publiclab.md
nid: 17427
uid: 556474

---

# Outreachy proposal: Improve statistics system for publiclab

by [radhikadua](../../../profile/radhikadua) | October 30, 2018 00:59

October 30, 2018 00:59 | Tags: [software](../tag/software), [soc](../tag/soc), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018), [outreachy-2018-proposals](../tag/outreachy-2018-proposals), [response:17359](../tag/response:17359), [first-time-poster](../tag/first-time-poster)

----

---------

## About me

I am a 4th year Information Technology student from Panjab University, Chandigarh, India. I have been an open source enthusiast for a couple of years. I have submitted small patches in GNOME organization in the past. I encourage everyone in my university to use linux and open source softwares in general. We celebrate Software freedom day every year in our university where we introduce open source technologies to the freshman and sophomores. I heard about Public Lab from the Outreachy itself and the best thing I love about the PublicLab community is quite active and helpful people.

**Affiliation**: Panjab University

**Location:** Chandigarh, India

---------

## Project description

Extend community collaboration statistics and visualization system for [publiclab.org](http://publiclab.org)

---------

### Abstract/summary (<20 words):

Improve UX as well as backend for community statistics data.

---------

### Problem

plots2 is a collaborative knowledge-exchange platform in Rails. It offers easy to use platform on which people can create notes and wiki on which like minded people can explore and discuss things with each other. It has a metrics system on which statistics and insights into community trends and activity can been seen. It's quite powerful but due to addition of new features over the time, lot of pieces are spread here and there, making bit bad user experience. Also it has some performance concerns which needs to be addressed properly. So, I plan to improve the whole statistics system.

---------

### Timeline/milestones

**Community Bonding Period**

This time will be utilized for:

- Discussing and perfecting the UI as well as architecture of the Statistics system
- Working on other issues which are unrelated to this proposal
- Brushing up my Ruby on Rails skills
- Getting familiar with project's code base
- Write up scripts to go back through posts and tag first-timer posts with `first-time-poster` tag

December

- Week 2: Add new routes and setup basic file structure and layout for new stats page development.
- Week 3: Add up "General Stats" as it is from old layout.
- Week 4: Create backend GET APIs using Grape for requesting JSON/CSV data for all graphs along with unit tests.

January

- Week 1: Continue work on last week's backend APIs.
- Week 2: Add support for range and tags specification in those APIs.
- Week 3: Implement caching for "All time" data and setup read only db connections.
- Week 4: Select js chart library and add "No. of subscribers per tag" chart.

Feb

- Week 1: Add all the range based charts but without "range" and "tags" feature.
- Week 2: Implement tags feature on frontend side and add "download" button for charts.
- Week 3: Implement range feature on frontend side.
- Week 4: Implement on bar click functionality for charts.

March

- Week 1: Deprecate old views and redirect them to new one with smooth transition.

---------

### User Interface

You can check out the UI mockups that I have created at [https://app.moqups.com/radhikadua/9nqXCzGzQK/view](https://app.moqups.com/radhikadua/9nqXCzGzQK/view). On the first page, you can find the general stats which are not based on time range. These stats include total no. of contributors, users, answers, comments, questions etc. On that page, you can click on "Range based stats", where user will be presented all the tags and the time range. According to these two parameters, it will generate charts below those widgets. You can click on "blog" tag to see charts for that tag. I have used sample data for these mockups.

I couldn't display some features in the mockups due to technical limitations.

1. When user will click on date picker, it will allow user to pick up date range.
2. You can click on ![](https://lh3.googleusercontent.com/ph1mLH7llyUNUM2ObQXAc3M_AN48PVd4_D7LwgO6fJyrBPLwDiP1W7j-uGkwduiCUAO5sPkrO0abVMc9Cbma6oP4slcfS2UDO0xeaqjsUxnQGjIxkVgR7Vfyo7gNa7UMhLco_D_C)icon to download the raw stats data. After clicking on this icon, you will be displayed option to select data format(csv, json).
3. You can click on individual bar in the chart which will display a popup in which nodes from that time range would be shown.

I'm attaching the screenshots here for reference.

![](https://lh5.googleusercontent.com/vYp99kfO0ajb0VLpzLMwGVgNIunfaVY4k8ms16CvVgGKDOUZDHw6j2njxULLm2fTuhIQXUXEt5wLtaZ0I0FgqIOLvokIVVYwUzLK5z0pC9X-zbmTfavGsBn3wWVdqBl2Le1XelRz)

---------

![](https://lh5.googleusercontent.com/Rba-dOhh2UPnOnJvaWvrjti7Y39zNwgw2SghEl9ZgndyAmChhrH__FdNMoEk5aiEhKVin1n92mz_nD9zzoGLl0SLxsAVChu7VLO0Uc_C42paLpVhSVTPWof9yHJn2SgKhRifhITE)

---------

**![](https://lh5.googleusercontent.com/SVYpTfZ2X6A0AoHmgML1mHBHrSRmd9NlWbhef7dZlX88NN1IqQjpWq7kX9WOouclE-zQIMZYVs0fcTYVfPuGovINHepV7JUwvZ6LywYNV3o_Ufg8nGVOHfFDORLGS6oa5vVCh4PG)**

---------

### Implementation

I'll start the development on the new routes at /stats/new. According to my UI implementation details, I'll just add one page where all the stats would be shown. So, other than API calls, there would be just one view. In that view, all the data for the general statistics page will be filled in by rails views and for the "Range based" stats, all data would be fetched using AJAX calls.

All the old links like [https://publiclab.org/stats/range/10-05-2015/10-05-2016](https://publiclab.org/stats/range/10-05-2015/10-05-2016) or [https://publiclab.org/stats?time=September%2026,%202017%2022:43](https://publiclab.org/stats?time=September%2026,%202017%2022:43) will have permanent redirect to the new views.

To reduce the load on site, I propose following two ideas.:

1. I'm not sure about the production configuration right now but we can add in slave db to which we will only create read only connections. We should use data from that db for serving requests for stats, otherwise main db would have lot of load and overall performance would be degraded.
2. We can cache the data we want to serve. I found that caching views in Ruby on Rails is quite easy but we also have option for user by which they can select date range for which they want to see the stats and caching that data isn't possible since date ranges can have large no of combinations. I will discuss and try to come up with more complex caching technique if required.

If time allows, I'll implement plugin in the GrimoireLab project and submit it to them so that data can be fetched using perceval tool.

---------

#### Request flow:

1. User opens `/stats`:
GET request to backend to which backend responds with cached view. So, no hit to the db. In that cached view, all the non-range based stats would already be filled in. Also, in the "No. of subscribers per tag" chart, user will just be able to see count of subscribers but won't be able to see who all are subscribed to it, hence preserving privacy of the users.
2. User clicks on "Range based charts" (needs better name ?) option:
Send `n` no. of AJAX requests where `n` is no. of charts, to the backend and backend responds with JSON data for each request. I can think about accumulating the data into one single request in case it improves performance. This JSON data will also be cached in the backend.
3. User clicks on "Download" button:
UI will send the request to same backend endpoint to which it had sent earlier to receive JSON data. That endpoint can also take optional query parameter `format` to describe format in which data has to be downloaded. Again that download data won't have any user specific information in respect to protecting user's privacy, just accumulated stats would be available to be downloaded. So, this way we don't have to limit this functionality only to moderators and adminstrators, instead have it available to end user too.
4. User clicks on specific "Tag" or specifies time range in the calendar widget:
GET request to the same endpoint will be sent with query parameters: tag, start\_date, end\_date. Backend will have to query the database because it's not possible to cache all the possible combinations. So, it will query db and return results in the same format. But for database, I can use `slave/readonly` db (if we have one configured ? Or I can learn about setting up a new one if required.), so that it doesn't increase production load.
5. User clicks on specific "bar" in the charts:
Depending on the bar clicked in the graph, we will send request to the backend in which we will return data which would contain `node_id`, `title`, `link` etc depending on the node type. Request for this API end would be much smaller and we won't need to cache this up.

All the selections related to tags and range would be saved in the browser URL. So, one can also share or bookmark the URL.

#### Routes for the above flow would look like this:

---------

```
get 'stats' => 'stats#index'
```

(Served by rails views)

---------

```
get 'stats/:type' => 'stats#type'
```

(Used by AJAX calls. Returns json or csv.)

Response:
`[ {x: 1, y: 2}, {x: 2, y: 10} ]`

Query parameters for above routes:

- `download`: If this parameter is passed, then backend will respond with response header related to downloading this file.
- `format`: `csv` or `json`, response would be in given format.
- `tag`: Nodes which have this tag specified, would be considered for returned data.
- `start_date`: Default value would be date on which first node was created.
- `end_date`: Default as well as max value for end\_date would be `yesterday's` date.

---------

```
get 'stats/:type/data' => 'stats#type_data'
```

(Used by AJAX calls. Returns json or csv.)

Response:
`[ {node_id: 1, title: "Note 1", link: "/notes/link"}, {node_id: 2, title: "Note 2", link: "/notes/link2"} ]`

Query parameters for above routes:

- `tag`: Nodes which have this tag specified, would be considered for returned data.
- `date`: Date on which user clicked in the bar charts.

---------

So, this way, above API would be generic to support all the operations. And all the statistics related UI would be at one place.

Most probably I'll be using charts.js library. Here's some sample code describing the way I'll be implementing things.

    <canvas id="myChart" width="400" height="400"></canvas>
    <script>
    var ctx = document.getElementById("myChart").getContext('2d');

    function getGraphData(type, tag, start_date, end_date) {
        return $.ajax({
                url: "/stats/${type}",
                type: "get",
                data: {
                    format: "json",
                    tag: tag,
                    start_date: start_date,
                    end_date: end_date,
                },
                success: function(response) {
                    // response: [
                    //    {x: 1, y: 2},
                    //    {x: 2, y: 10},
                    // ]
                    // resolve promise here
                    ...
                },
        });
    }

    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: getGraphData(type, tag, start_date, end_date),
        onClick: function (activeElements) {
            // Single element in case of bar chart
            var element = activeElements[0];
            // Fetch data from server
            $.ajax({
                url: "/stats/${type}/data",
                type: "get",
                data: {
                    format: "json",
                    tag: tag,
                    date: element.date,
                }
                success: function(response) {
                    // response: [
                    //    {node_id: 1, title: "An awesome note", link: "/notes/link"},
                    //    {node_id: 2, title: "An awesome note 2", link: "/notes/link2"},
                    // ]
                    // Show modal to user using above data
                    ...
                },
            });
        }
    });


---------

#### Code distribution:


    app/
      assets/
        stats.js - It will include charts library util functions which can be called from index.html.erb
      controllers/
        stats_controller.rb - It will have `index` renderer which will render index.html.erb and other util functions used in the index.html view.
      api/
        stats.rb - It will include GET APIs which will specify formatter and be called through AJAX. All the business logic related functions will called inside the API functions.
      /lib/
        stats.rb - Module which contains business logic and will be imported in the api/stats.rb
      views/
        stats/
          index.html.erb - It will contain all the initial view related code when user opens /stats
      models/ - There doesn't exist any model for stats right now


---------

### Contributions

Contributions I have made in this project are as following:

1. [https://github.com/publiclab/plots2/pull/3759](https://github.com/publiclab/plots2/pull/3759) (Merged)
2. [https://github.com/publiclab/plots2/pull/3775](https://github.com/publiclab/plots2/pull/3775) (Merged)
3. [https://github.com/publiclab/plots2/pull/3801](https://github.com/publiclab/plots2/pull/3801) (Merged)
4. [https://github.com/publiclab/plots2/issues/3798](https://github.com/publiclab/plots2/issues/3798) (Deferred to new contributors)
5. [https://github.com/publiclab/plots2/issues/3524](https://github.com/publiclab/plots2/issues/3524) (In review)
6. [https://github.com/publiclab/plots2/issues/3869](https://github.com/publiclab/plots2/issues/3869) (In review)
7. [https://github.com/publiclab/plots2/issues/3870](https://github.com/publiclab/plots2/issues/3870) (In review)
8. [https://github.com/publiclab/plots2/issues/3384](https://github.com/publiclab/plots2/issues/3384) (In review)
9. [https://github.com/publiclab/plots2/issues/3628](https://github.com/publiclab/plots2/issues/3628) (In review)

---------

### Other obligations

I have my semester exams in the first two weeks of December (Dec 01 - Dec 11 tentatively), but I have adjusted my schedule accordingly. Also, I'll account for the delay if and when it arises by working extra during the coding period.

---------

### Experience

The first programming language I learned was C++ and even now it's my favourite programming language. I learned basic data structures/algorithms and implemented them in C++. Reading books to get the basic concepts helped me a lot and then implementing the codes helped clearing all my doubts. Once I completed the basics in C++, it became easy to move onto any other programming language. I practiced coding for few months that later helped me solve bugs and write optimize and efficient codes. I contributed in open source that helped me in dealing with big codebase. I participated and won in few hackathons where I learned new technologies used by other teams in their projects. I attended some conferences where I got to learn many new fascinating things that made me more excited to learn new emerging technologies.

Some projects:

- Tracking breathing rate using camera: [https://github.com/Radhikadua123/breathing-rate](https://github.com/Radhikadua123/breathing-rate)
- Face Recognition: [https://github.com/Radhikadua123/Face-recognition](https://github.com/Radhikadua123/Face-recognition)
- Automatic Light system for homes : [https://github.com/Radhikadua123/automatic\_light\_system](https://github.com/Radhikadua123/automatic_light_system)
- Aid For Blind: [https://github.com/Radhikadua123/HINT2017](https://github.com/Radhikadua123/HINT2017)
- Air Pollution Prediction : Closed source

---------

### Teamwork

I was a former summer intern in Samsung IOT lab in IIT Delhi for Celestini project. I worked on air pollution prediction using IOT analytics based on estimators. In this project, we were a team of two members with awesome mentors to help us throughout the project.
I was a former summer intern at [variance.ai](http://variance.ai) where I worked on few projects including tracking breathing rate using camera by using Eulerian Video Magnification algorithm. In this project, we were a team of 5 members and we all had a healthy discussion on topics and helped each other throughout the internship. I have also worked in a team of 4-5 members in many college projects.

---------

### Passion

I love contributing to the open source projects and feel very happy when my work is used by many people and I am also part of a projects which will be used by many people. The best thing I love about the PublicLab community is quite active and helpful people. From my personal experiences, the difficulties I faced and hurdles which I had to cross, to make my first patch online, are much lower in this community as compared to others. I got to learn a lot in this project and looking forward to learn much more from the experienced mentors.

### Audience

This project will help in the analysis of trends using contributor statistics giving insights of research posts, comments, questions and answers asked by contributors. The analysis and insights will help the organization to come with some decisions and help in proper planning corresponding to the trends observed.