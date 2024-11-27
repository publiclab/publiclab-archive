---
nid: 15853
title: GSoC Proposal: v2 API development and third party app integrations
path: public/static/notes/sukhbir/03-02-2018/gsoc-proposal-v2-api-development-and-providing-support-to-3rd-party-app-integrations.md
uid: 525032
tagnames: software,gsoc,soc,response:13975,gsoc-2018,soc-2018,soc-2018-proposals,soc-2018-api,first-time-poster
---

# GSoC Proposal: v2 API development and third party app integrations

## About me

**Name:** Sukhbir Singh

**Github Profile:** [https://github.com/sukhbir-singh](https://github.com/sukhbir-singh)

**Affiliation:** 4th year, Dual Degree CSE, National Institute of Technology Hamirpur

**Location:** Hamirpur, Himachal Pradesh, India

**Email:** [sukhbir947@gmail.com](mailto:sukhbir947@gmail.com)

**Portfolio link:** [http://sukhbir-singh.github.io](http://sukhbir-singh.github.io)

**LinkedIn Profile:** [https://www.linkedin.com/in/sukhbir-singh/](https://www.linkedin.com/in/sukhbir-singh/)

**Time Zone:** UTC+05:30

**IRC/Gitter nick:** sukhbir

**Project(s) you're working on or want to:** plots2


## Project description

### Abstract/summary (<20 words):

To continue the development of RESTful API v2 for PublicLab website, writing tests and documentation for complete API.

### Problem

_What problem(s) does your project solve?_

Plots2 is one of the core project of Public Labs. It has seen rapid development in past few years, most of the development work was directed towards front end and its integration with backend. Alongside, the development of RESTful API is also progressed in past several years and now includes Grape/Swagger interface. 
There is a need to develop new API endpoints for using statistical data for analytical purposes, for consuming API by 3rd party applications etc. 


In this project I would like to work on to solve these API related issues and will develop these API endpoints along with proper documentation using swagger specification and to write tests.

_Why Restful API development is important?_

- API development will help in building a modular architecture of entire plots project and its separation from view layer.
- RESTful API development will help in keeping backend consistent among several iterations or upgradations of front ends and between various ruby versions.
- RESTful API development will help in expanding capabilities of backend system for PublicLabs website. By providing support to 3rd party app integrations, new innovative apps can find its way around. Some endpoints can even be useful for bots to improve its services.


The whole project is divided into 2 parts:-

**Part 1: Developing new API Endpoints with documentation using swagger system**

In this part, I aim to develop all the endpoints with caching support and rate limiting. I will also write all the documentation and tests in this part. A client application will communicate to API server directly and API server will then serve the request using redis server and database. 

[![img.png](https://publiclab.org/system/images/photos/000/024/226/large/img.png)](https://publiclab.org/system/images/photos/000/024/226/original/img.png)


This part of project includes following sub-tasks:-

1\. Migrate legacy API endpoints into the new standard Swagger system.

2\. Developing token based write API and new endpoints which will help in 3rd party app integrations.

3\. To complete documentation for existing API and new endpoints using the swagger system.


**Part 2: Developing API Endpoints for providing support to stats data**

Stats data displayed at [https://publiclab.org/stats](https://publiclab.org/stats) helps to visualise the collective open source work by the community. Statistical data is also needed for analytical purposes. Developing RESTful API endpoints for fetching stats data between input date ranges and other custom ranges will definitely help in analysis. 

In this part, I will develop RESTful API endpoints with documentation for Public Labs statistical data. This includes providing hierarchical endpoints for resources and providing support for filters like from_date, to_date, past_monts, past_years, etc. It also includes endpoints for fetching statistical data specific to entities like research notes, wiki pages, comments etc.

### Deliverable goals to this proposal

- Migrate legacy API endpoints to swagger system
- Develop new API endpoints with rate limiting and caching support
- Implement API endpoints for write API using token based system
- Write tests for all API endpoints
- Documentation of all API endpoints using swagger system
- A cache module will be also implemented to manage the cache data with namespacing and cache invalidate functionality using redis.
- Implement all endpoints for statistical data for all types of entities like wiki pages, research notes, comments etc.
- Add filtering support to stats data endpoints like date range filtering, and months, years specific filterings.


### Project Plan and Implementation


In order to identify third party applications which will consume our v2 REST API, clientID and clientSecret will be generated and stored in the database on each client’s registrations. We can also use this to provide custom limitations like max number of requests which can be made by a client within a time period etc. 

**Basic outline of project structure**

```
 ├── Gemfile

 ├── config

 │ └── routes.rb

 ├── app

 │ └── api

 │ ├── srch

 │ │ ├── api.rb

 │ │ ├── search.rb

 │ │ └── typeahead.rb

 │ ├── public

 │ │ ├── stats.rb

 │ │ └── other ruby files for public API endpoints

 │ ├── user

 │ │ └── other ruby files for user access level API endpoints

 │ ├── moderator

 │ │ └── other ruby files for moderator access level API endpoints

 │ └── admin

 │ └── other ruby files for admin access level API endpoints

 │── test

 │ └── test files for all routes

 └── all other required files like .gitignore, Dockerfile etc.
```

### API endpoints 

List of legacy APIs which needs to be migrated to new swagger system:-

1\. Notes by tag in JSON

Current URL: ​ [https://publiclab.org/tag/balloon-mapping.json](https://publiclab.org/tag/balloon-mapping.json)

New URL: ​ [https://publiclab.org/api/public/tag/balloon-mapping](https://publiclab.org/api/public/tag/balloon-mapping)

2\. Wikis by tag in XML

Current URL: ​ [https://publiclab.org/wiki/tag/place:\*.xml](https://publiclab.org/wiki/tag/place:*.xml)

New URL: ​ [https://publiclab.org/api/public/wiki/tag/place/all?format=xml](https://publiclab.org/api/public/wiki/tag/place/all?format=xml)

3\. Questions by tag in JSON

Current URL: ​ [https://publiclab.org/questions/tag/spectrometry.json](https://publiclab.org/questions/tag/spectrometry.json)

New URL: ​ [https://publiclab.org/api/public/questions/tag/spectrometry](https://publiclab.org/api/public/questions/tag/spectrometry)

4\. Maps by tag in XML

Current URL: ​ ​ [https://publiclab.org/maps/tag/gulf-coast.xml](https://publiclab.org/maps/tag/gulf-coast.xml)

New URL: ​ [https://publiclab.org/api/public/maps/tag/gulf-coast​?format=xml](https://publiclab.org/api/public/maps/tag/gulf-coast%E2%80%8B?format=xml)


Below are some endpoints which I aim to implement during summer as a part of this project. We will use REST to design these endpoints. I will accept any changes in these endpoints as per requirements of the community. 

**GET /activities/latest**

Return a list of recent community activities on Public Labs website

**URL Parameters**
**Optional:**
limit=[integer] : Max value: 100, default value: 100

offset=[integer] : The offset of the first result returned from the database, by default set to 0

type=[string]: wiki, comment etc. This will be used to get activities of particular type only.

**Sample Call:**

curl https://publiclab.org/api/public/activities/latest?limit=10&offset=2&type=wiki -X GET

**Response example:**

```
{
	"success": true,
	"trending_topics":["spectrometer", "event", "infragram"],
	"activities": [
		{
		"nid": "454",
		"type": "comment"
		"author": "username",
		},
		{
		"nid": "501",
		"type": "wiki",
		"author": "username"
		}
	]
}
```
**GET /user/{id:userid}/subscriptions**

Return list of all tag subscriptions for the user having given userid

**URL Parameters**

**Optional:**

limit=[integer] : Max value: 100, default value: 100

offset=[integer] : The offset of the first result returned from the database, by default set to 0

**Sample Call:**
curl https://publiclab.org/api/public/user/4875/subscriptions?limit=10&offset=2 -X GET

**Response example:**

```
{
  "success": true,
  "tags": [
    {
      "id": 100,
      "name": "gsoc",
      "other_people": 11
    },
    {
      "id": 124,
      "name": "rgsoc",
      "other_people": 5
    },
    {
      "id": 78,
      "name": "publiclabs",
      "other_people": 3
    }
  ]
}
```

**POST /user/me/profile**

Route to update profile information. This endpoint will return operation’s status message and status code as JSON response.

**Request Header**

"Content-Type": "application/json"

"Authentication'": "<user_token>" => This is used to authenticate the user, each user will have a unique token that can be provided to clients for authentication.

**Request Body:**

```
{
  "email": "johnbeties@gmail.com",
  "encrypted_password": "dfe48686f117b8bb8d89286b21ea90ca30dacb0e72e959610fab327a8601c4fc9ec419410eda18f6f2caaf207e 833a3cd9f60885ff1bc32927b9b19241dd6ae5",
  "Bio": "I love to play football."
}
```

**Response example:**

```
{
  "code": "200",
  "message": "Request processed successfully"
}
```

**POST /tag/subscribe**
Route to subscribe or unsubscribe a particular tag by a user. This endpoint will return operation’s status message and status code as JSON response. If specified tag is already being followed then
the request will lead to unsubscribing that tag otherwise the request will lead to subscribing that tag.

**Request Header**

"Content-Type": "application/json"

"Authentication'": "<user_token>" => This is used to authenticate the user, each user will have a unique token that
can be provided to clients for authentication.

**Request Body**

```
{
  "tag": "question:pi-camera"
}
```
**Response example:**

```
{
  "code": "200",
  "message": "Request processed successfully"
}
```

**PUT /user/question/{id:question_id}**

Route to like a question. This endpoint will return operation’s status message and status code as JSON response. If question is already being liked by the user then like will get removed otherwise the
question will be liked.

**Request Header**

"Content-Type": "application/json"

"Authentication'": "<user_token>" => This is used to authenticate the user, each user will have a unique token that can be provided to clients for authentication.

**Response example:**

```
{
  "code": "200",
  "message": "Request processed successfully"
}
```

**GET /questions/latest**

Return a list of recent questions posted on Public Labs website.
URL Parameters

**Optional:**

limit=[integer] : Max value: 100, default value: 100

offset=[integer] : The offset of the first result returned from the database, by default set to 0

orderBy=[string]: name, created_at etc. This will be used to get questions ordered in response.

**Sample Call:**
curl https://publiclab.org/api/public/questions/latest?limit=10&offset=2&orderBy=name -X GET

**Response example:**

```
{
  "success": true,
  "questions": [
    {
      "id": 1231,
      "author": "stella",
      "question_text": "Lego Spectrometer suitable for studying sunlight?",
      "timestamp": 1518797180
    },
    {
      "id": 771,
      "author": "ibanina",
      "question_text": "normal or noIR camera?",
      "timestamp": 1518797127
    }
  ]
}
```

Further, API endpoints specific to node types (note, page, wiki, etc.) can also be implemented. Below are some proposed endpoints related to nodes.

**GET /wikis/**
Return a list of wiki pages based on parameters passed. 

**URL Parameters**

**Optional:**

limit=[integer] : Max value: 100, default value: 100

offset=[integer] : The offset of the first result returned from the database, by default set to 0

orderBy=[string]: title, page_views, likes, edits etc. This will be used to get questions ordered in response.

userid=[integer]: To get wiki pages posted only by user with specified userid

**Sample Call:**
curl https://publiclab.org/api/public/wikis?limit=10&offset=2&orderBy=title&userid=5321 -X GET

**Response example:**

```
{
  "success": true,
  "wikis": [
    {
      "id": 124,
      "title": "Call for proposals",
      "author": "warren",
      "last_edited": 1518797180,
      "edits": 3,
      "page_views": 3,
      "likes": 10
    },
    {
      "id": 22,
      "title": "Community toolbox",
      "author": "warren",
      "last_edited": 1518797127,
      "edits": 1,
      "page_views": 120,
      "likes": 23
    }
  ]
}
```

We will implement similar API endpoints for all other type of nodes.


### API Endpoints for stats data

Statistical data at Public Labs plays an important role for analytical purposes. In this project, I am planning to develop following endpoints for stats data.


**GET /stats/all**
Route to fetch complete stats data

**URL Parameters**

**Optional:**

include_details=[boolean] : true or false, based on whether to include details or not.

**Sample Call:**

curl https://publiclab.org/api/public/stats/all?include_details=true \
-X GET

**Response example when include_details is true:**

```
{
  "success": true,
  "research_notes": {
    "total_count": 4757,
    "contributors_count": 1140,
    "per_week_rate": 16.48,
    "values":[ 8,5,1,0,2,4,10,11,0,2,1,4,5,2,1,0,9,12,11,15,4,2,3 ] (52 values, one value per week)
  },
  "wiki_pages": {
    "total_count": 1221,
    "contributors_count": 212,
    "per_week_rate": 10.5,
    "values": [ 0,2,1,4,5,2,1,0,9,12,11,15,4,2,3,4,1,5,7,7,4,2,4,1,1 ] (52 values, one value per week)
  },
  "comments": {
    "total_count": 12573,
    "contributors_count": 58,
    "per_week_rate": 69.38,
    "values": [ 1,0,2,4,5,1,1,0,2,1,4,5,2,8,5,1,0,1,1,15,4,9,1,2,2,3 ] (52 values, one value per week)
  },
  "wiki_edits": {
    "total_count": 12573,
    "per_week_rate": 69.38
  },
  "other_details": {
    "people_joined": 560,
    "questions_posted": 41,
    "answers": 101
  }
}
```

**Response example when include_details is false or not specified:**

```
{
  "success": true,
  "research_notes": {
    "total_count": 4757,
    "contributors_count": 1140,
    "per_week_rate": 16.48
  },
  "wiki_pages": {
    "total_count": 1221,
    "contributors_count": 212,
    "per_week_rate": 10.5
  },
  "comments": {
    "total_count": 12573,
    "contributors_count": 58,
    "per_week_rate": 69.38
  },
  "wiki_edits": {
    "total_count": 12573,
    "per_week_rate": 69.38
  },
  "other_details": {
    "people_joined": 560,
    "questions_posted": 41,
    "answers": 101
  }
}
```


**GET /stats/range**
Route to get range stats data from specified range to present time
URL Parameters

**Optional:**
past_years=[integer] : To get statistics data of last specified number of years

past_months=[integer] : To get statistics data of last specified number of months

past_weeks=[integer] : To get statistics data of last specified number of weeks

include_details=[boolean] : true or false, based on whether to include details or not

Note: If more than one of the above parameters are specified with the request, then response will be generated
for smallest date range out of these.


**Sample Call:**
curl https://publiclab.org/api/public/stats/range?past_years=2 -X GET

**Response example:**
Similar to previous response of stats/all route, but values array will contain only numbers corresponding to each week and other values are calculated on basis of range passed as parameters.


**GET /stats/date_range**
Route to get range stats data from specified range to present time
URL Parameters

**Required:**
from_date=[string] : from_date signifies starting date of the range.

to_date=[string] : to_date signifies ending date of the range.

**Optional:**
include_details=[boolean] : true or false, based on whether to include details or not

**Sample Call:**
curl https://publiclab.org/api/public/stats/date_range?from_date=10-05-2016&to_date=12-31-2016 -X GET

**Response example:**

Similar to previous response but values array will contain only numbers corresponding to each week and other values are calculated on basis of range passed as parameters.

The above shown json response can be easily integrated/exported as a csv file for analysis purposes. And further authentication can be set up with these endpoints by transferring access_tokens with each request.

API endPoints for stats data response exporting as csv format:-
GET /stats/all/csv
GET /stats/range/csv
GET /stats/date_range/csv

### Rate limiting
Rate limiting refers to limiting the max number of requests per access token by a client. Rate limiting is very important for ensuring good quality service for the API usage.

For the implementation of rate limiting, we can use redis or rake-throttle as the tool. I will discuss with mentors regarding decision of which tool is better for our purpose. If we tend to use redis, then we can follow the approach explained at https://medium.com/@pebneter/fast-and-simple-rate-limiting-with-ruby-on-rails-and-redis-68e76ba38ca4. In this approach, for every API request a counter value will be incremented and when the counter value exceeds the max allowed number of requests, we will expire the key-value pair corresponding to that client_id.


### Caching
Redis will be used for implementing caching in our Rails application. When the server gets a GET request from the client, it first checks if the required result is present in the cache, if yes, then it will return that to the client. Otherwise, a query will be sent to the database and the response will be updated in the cache then the server responds to the client.

This includes executing following tasks:-

1\. Setup development environment

Add redis gem in Gemfile

`gem 'redis'`

`gem 'redis-rails'`

`gem 'redis-namespace'`

`gem 'rack-cors'`

Update in config files

`config.cache_store = :redis_store`

Update in config/application.yml file

`redis_host: "localhost"`

`redis_port: "6379"`

`redis_namespace: "dev"`

2\. Use redis for caching in Rails application

Here is an example of basic cache implementation

```
class SampleController < ApplicationController
  def index
    json = Rails.cache.fetch('entities') do
    Post.to_json
   end
   ...
   render json: json
  end
end

```

We also need to implement namespacing as cache module for managing Redis server. I will follow some of the ideas mentioned [here](http://jameshuynh.com/cache/json/rails/2017/08/13/how-to-effectively-cache-json-in-api-rails-app/) and will adapt the changes as per the requirements.


**Cache Invalidation**

The TTL (time to live) in the cache of a key will depend upon the frequency of change of the data in the database. First, we analyze that which type of data is changing frequently and which data is changing less frequently. Data which changes less often will have larger TTL while those which are expected to change frequently will have a short TTL. When an edit request (POST, PUT, DELETE) will come to Public Labs API, update the database according to request and delete the related cache data from Redis database.

**Documentation**

At the time of writing this proposal, search and typeahead API endpoints has been documented using swagger specification in plots project. I will also document all the new API endpoints using same grape-swagger gem and swagger specification.

There are basically two approaches for API documentation using swagger specification: Top down approach and bottom up approach. In this project I tend to use top down approach but
still discuss with mentors about which approach is more suited as per our requirement.


### Outreach Plans
I was also a beginner once and it is only because of the welcoming community of Public Labs that I get to understand the plots project and able to contribute to it. During the implementation of this project in summer, I want to continue this friendly culture welcoming
all the new contributors and will help in new contributors onboarding.

For onboarding new contributors I will do following tasks:-

- Create new first-timer issues on weekly basis. As an example for some APIs, I can leave out one or two filters like sort by date etc and supply little hint in issue description.
- I will remain active on gitter and try to respond to queries/doubts related to Public Labs project.
- I have allocated some buffer period in timeline for completing the tasks incase lack behind.I will devote some portion of this buffer period for contributing to community-toolbox project of Public Labs.
- Related to some backend APIs, we can also open first timer issues related to front end tasks like to create front end components for which API is ready and tested.


### Timeline/milestones
**Week 1: (23 April - 14 May) - Community Bonding Period**

- I will read the documentation of Swagger API framework and Redis.

- Plan the workflow and discuss with mentors.

- API response required by the community and design decisions are also need to be discussed with mentors so that no bad decisions are made early in the process.

**Week 2: (14 May - 20 May)**

- Document existing API endpoints including token-based write API with swagger specification.

- Start by creating routes for new endpoints to migrate legacy APIs and write openAPI file.

**Week 3: (21 May - 27 May)**

- Implement migration of legacy code to new API endpoints.

- Create modules like public, user, admin etc. and refractor existing codebase.

**Week 4: (28 May - 4 June)**

- Implement endpoints: GET /activities/latest, GET /user/{id:userid}/subscriptions, POST /user/me/profile with tests.

**Week 5: (5 June - 11 June)**

- Implement endpoints: POST /tag/subscribe, PUT /user/question/{id:question_id}, GET /questions/latest with tests.

**Week 6: (11 June - 15 June) - Mid Term Evaluation**

-  Buffer period for testing, debugging and documentation.

**Week 7: (16 June - 22 June)**

- Implement access level (admin, user, moderator, public) filtering for REST APIs.

- Discuss API endpoint required by the community related to type of nodes.

**Week 8: (23 June - 29 June)**

- Implement endpoints related to type of nodes (wiki, comments, notes, pages).

**Week 9: (30 June - 12 July)**

- Buffer period for testing, debugging and documentation.

**Week 10: (13 July - 19 July)**

- Write blog post of progress in project till now.

- Detailed discussion about how stats data is being used for analysis purpose and change API endpoints accordingly.

**Week 11: (20 July - 31 July)**

- Plan and implement methods for getting complete stats data.

- Implement range specific API endpoints for stats data.

**Week 12: (1 August - 6 August)**

- Implement caching mechanism and rate limiting functionality for the APIs using redis.

**Week 13: (6 August - 14 August) - Final Term Evaluation**

- Bug fixings and code clean up.

**After Summer of code:**
Continue working with Public Labs organization. Will solve issues listed on github repo. Write final blog post corresponding to the work and deliverables during summer.


### Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_

Guidance from mentors will be needed. Other informations and references required by the project are available online.


### First-time contribution

Have you looked over our welcome page and are you familiar with how to make your first contribution? Have you already made it? We're eager to see that you've had a good experience making a small initial contribution to our site. Please check out our welcoming page: [https://publiclab.github.io/community-toolbox/#r=all](https://publiclab.github.io/community-toolbox/#r=all)

And paste in links to your initial contributions here so we can see!

Yes, I have already forked the existing repo of plots and successfully run it on my local machine. I have made several contributions to plots repo, some of them are already merged and others are in review.

Bugs/Issues reported ([https://github.com/publiclab/plots2/issues/created\_by/sukhbir-singh](https://github.com/publiclab/plots2/issues/created_by/sukhbir-singh)):-

[https://github.com/publiclab/plots2/issues/2356](https://github.com/publiclab/plots2/issues/2356)

[https://github.com/publiclab/plots2/issues/2352](https://github.com/publiclab/plots2/issues/2352)

[https://github.com/publiclab/plots2/issues/2328](https://github.com/publiclab/plots2/issues/2328)

[https://github.com/publiclab/plots2/issues/2324](https://github.com/publiclab/plots2/issues/2324)


Pull Requests ([https://github.com/publiclab/plots2/pulls/sukhbir-singh](https://github.com/publiclab/plots2/pulls/sukhbir-singh)):-

[https://github.com/publiclab/plots2/pull/2355](https://github.com/publiclab/plots2/pull/2355)

[https://github.com/publiclab/plots2/pull/2353](https://github.com/publiclab/plots2/pull/2353)

[https://github.com/publiclab/plots2/pull/2350](https://github.com/publiclab/plots2/pull/2350)

[https://github.com/publiclab/plots2/pull/2338](https://github.com/publiclab/plots2/pull/2338)

[https://github.com/publiclab/plots2/pull/2329](https://github.com/publiclab/plots2/pull/2329)

[https://github.com/publiclab/plots2/pull/2325](https://github.com/publiclab/plots2/pull/2325)



### Experience

_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples._

Albert Einstein once said,

> "Information is not knowledge. The only source of knowledge is experience."

I have expertise in developing web applications using Ruby on Rails, React.js, Java, and Javascript. I have started learning Ruby on Rails and Java from the second year of my college. During college, I have also developed several mobile applications.

Last summer I have worked as a Software Developer Intern at one of the fast-growing startups in Mumbai - [Cogoport](https://www.cogoport.com/), where I have worked as a full stack developer. During internship, my work mainly focuses on developing RESTful API endpoints in Ruby on Rails and developing front-end components in React.js, integrating them with the backend, fixing bugs in existing website and performance improvements. I have worked under professional developers who had experience of over 10 years in software industry.

Here is the link to my experience letter: [https://drive.google.com/file/d/1S2b4mCAgqCQBAVnhYunJYlPs31b0VGZ6/view](https://drive.google.com/file/d/1S2b4mCAgqCQBAVnhYunJYlPs31b0VGZ6/view)

I have also completed a freelancer project on Fiverr on developing scalable RESTful API for a website within 10 days for a client for which I received 5/5 rating.

Link to this fiverr gag: [https://www.fiverr.com/sukhbir947/develop-scalable-restful-api-in-ruby-on-rails-and-mongodb](https://www.fiverr.com/sukhbir947/develop-scalable-restful-api-in-ruby-on-rails-and-mongodb)

Also, I am convenor/head of android application development society of my college - AppTeam NITH. Most of the projects of AppTeam are open source on Github. Link: [https://github.com/appteam-nith](https://github.com/appteam-nith)

\## Links to some other projects I have worked on:-

\> PseudoFlipkart (2016) \[[http://pseudoflipkart.herokuapp.com/](http://pseudoflipkart.herokuapp.com/)\]

- Implemented an online shopping website. Features include user's session management, shopping cart for storing

items temporary, category wise items catalog.

\> Hackathon-Foodie (2017) \[[https://github.com/sukhbir-singh/Hackathon-foodie](https://github.com/sukhbir-singh/Hackathon-foodie)\]

- Foodie is a centralized food ordering app for restaurants near NIT Hamirpur. Implemented search feature, items cart, and integration with backend APIs.



### Teamwork

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._

Presently I am a part of AppTeam NITH, CSEC, and GLUG-NITH clubs/societies of my college. AppTeam NITH is the android society of my college. I am the lead android developer, convernor of the club. CSEC is Computer science and engineering society of my college, where our aim is to expand competitive programming culture in college. GLUG is the club that aims to promote open source development and linux usage between student developers.

In May 2017, I have mentored the winner team at "Hackathon 2.0" by AppTeam NITH which had developed a hardware hack for easing the process of hostel passout systems.

During 2 month summer Internship at [Cogoport](https://www.cogoport.com/), I have worked with a team of backend and front-end experts, product managers, and software engineers. This is the place which gets me really excited about startups. I have worked with full commitment and contibuted over 150 commits to their main website. During this period I mainly coded in ruby and javascript as their backend was written on ruby on rails framework and front end in React.js. The proof of my commitments can be seen on my [github profile](https://github.com/sukhbir-singh?tab=overview&from=2017-12-01&to=2017-12-31) calendar section under 2017 year tab. For my dedication and good work during internship, I get appreciation from co-founders in my internship [experience letter](https://drive.google.com/file/d/1S2b4mCAgqCQBAVnhYunJYlPs31b0VGZ6/view).

Currently I am the organizer of annual hackathon "[Hack On Hills](http://www.hackonhills.com)" organized in our college.



### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

Learning is the life long process and this project will also help me towards becoming better version of myself as software developer. By being a part of Public Labs community, I wanted to give my contributions towards a greater cause to better environment. I think PublicLabs is becoming a great platform for knowledge sharing related to environmental issues and other related concerns. I wanted to use my skills to help in development of such community.


### Audience

_Whom do you want your work to help? We especially appreciate proposals which make technologies and techniques more welcoming and friendly to those who've often been excluded._

My work on RESTful APIs will help the developers of 3rd party apps of PublicLabs (like bot development) in easy integrations with APIs and also provide a platform to serve for future developers and contributors as the reference for all API endpoint available for usage. Developing better 3rd party apps will lead to more people/audience engaging towards the cause. Hence, this project will ultimately help in making PublicLabs website and data more accessible, adaptive and versatile.

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

Yes, I completely understand that Gsoc is serious commitment and I am assuring you that I will give me 100% during this duration and will even contribute to PublicLabs after Gsoc. I have summer vacation holidays starting from 15 May 2018 to July end, so I can work 7-10 hours per day in summers. After July, I can give 6-8 hours per day and more hours on weekends.

I will update my progress weekly in the form of blog posts. And for the tasks related to same categories, I will create a checklist and use it for tracking progress on these category of tasks.
