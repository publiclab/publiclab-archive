---
title: GSoC proposal: v2 API development | Grape | Swagger Specification
tagnames: software, gsoc, grapes, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, rest-api, rails-api, swagger, soc-2018-api
author: Raounak
path: /notes/Raounak/02-21-2018/gsoc-proposal-v2-api-development.md
nid: 15790
uid: 525706

---

# GSoC proposal: v2 API development | Grape | Swagger Specification

by [Raounak](../profile/Raounak) February 21, 2018 09:11

February 21, 2018 09:11 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [grapes](../tag/grapes), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [rest-api](../tag/rest-api), [rails-api](../tag/rails-api), [swagger](../tag/swagger), [soc-2018-api](../tag/soc-2018-api)

## Why do this project?

- Public Lab is gaining popularity over time. We have our current API which serves the current purpose of client-side consumption.
- As we have many projects like social media integration which will eventually grow the data, so it would be better if we could come up with a more stable version of our API. It will help Public Lab in terms of growing its popularity as more and more developers start making their apps which will consume Public Lab's API.
- It would help in making 3rd party app integration which would lead to more apps around Public Lab's vision.
- We would have a centralized database and can make multiple front-ends (Android, IOS, SPA) based on their specific ideas by consuming the API. Also, the scalability and maintenance of business logic can be easily done, because we will be focusing on a centralized system.

# 

### Why Use OpenAPI?

The ability of APIs to describe their own structure is the root of all awesomeness in OpenAPI. Once written, an OpenAPI specification and Swagger tools can drive your API development further in various ways:

- Design-first users use [Swagger Codegen](https://swagger.io/swagger-codegen/) to generate a server stub for your API. The only thing left is to implement the server logic -- and your API is ready to go live!
- Using [Swagger Codegen](https://swagger.io/swagger-codegen/) to generate client libraries for your API in Ruby languages.
- Using [Swagger UI](https://swagger.io/swagger-ui/) to generate interactive API documentation that lets our users try out the API calls directly in the browser.
- And more! Check out the [open-source](https://swagger.io/open-source-integrations/) and [commercial tools](https://swagger.io/commercial-tools/) that integrate with Swagger.

> So I think till now you are convinced that moving on a REST API with the swagger specification is a good option for community. Now lets dive deep into the _problem_ and _solution_.

# 

# 

# 

---------

# About Me

---------

**Developer | Designer | Mentor | Speaker**

> A passionate software developer who uses Ruby to express in code is what defines me.

I am in the field of Web-development form past 3 years and I am loving it. Currently, I am a pursuing my undergraduation in Computer Science and working as a software developer in a company(Namyata). I provide services in Web-development and DevOps. When I am not coding you will probably find me on a football field.

- Affiliation: Maharaja Surajmal Institute of Technology. ([http://msit.in/](http://msit.in/))
- Location: New Delhi, India
- LinkedIn: [https://www.linkedin.com/in/raounak-sharma/](https://www.linkedin.com/in/raounak-sharma/)
- GitHub: [https://github.com/Ronaq13](https://github.com/Ronaq13)
- Email: [raounaqsharma@gmail.com](mailto:raounaqsharma@gmail.com)
- Personal Website: [https://www.raounak-sharma.com](https://www.raounak-sharma.com)
- YouTube Channel: [https://www.youtube.com/channel/UC6Ayv7\_2TJ15HhyGR6nXxXg](https://www.youtube.com/channel/UC6Ayv7_2TJ15HhyGR6nXxXg)

# 

---------

# Project description

---------

## Abstract

Migration of older API code into the new standard Swagger system, and to make new API endpoints available for the statistical data.

## Problem

Things I want to cover up in this project are:

- Writing new code for API to meet standards of the Swagger system.
- Making the API with best practices, so that it can be easily maintained and can serve for heavy traffic.
- Make new API endpoints available for the statistical data, provide at [https://publiclab.org/stats](https://publiclab.org/stats).
- After making this API, we can easily consume the statistical data of public lab for analysis, which further generates many possibilities.

> Apart from the above I would also like to handle the DevOps part of this API.

# 

# 

---------

# Implementation

---------

### Swagger Specification

There are two approaches:

- A top-down approach where you would use the [Swagger Editor](http://editor.swagger.io/) to create your Swagger definition and then use the integrated [Swagger Codegen](https://swagger.io/swagger-codegen) tools to generate server implementation.
- A bottom-up approach where you have an existing REST API for which you want to create a Swagger definition. Either you create the definition manually (using the same Swagger Editor mentioned above), or if you are using one of the supported frameworks (JAX-RS, node.js, etc), you can get the Swagger definition generated automatically for you.

We will be using top-down approach for our new endpoints. These endpoints are mainly of statistical endpoints. These endpoints will be new so it is better to follow swagger specification right from the beginning. For this, there will be the following steps:

1\. Logical Design of Statistical Data providing endpoints. In this section first I will brainstorm on how the endpoints should be created i.e, the nesting nature of them and classifying them.

2\. Writing them on specification file.

3\. Generating Code for the corresponding endpoints with the parameters as specified in particular endpoint.

4\. Testing the expected behavior until a satisfactory level has achieved.

5\. Documentation and blogs of the features added or updated.

![image description](https://publiclab.org/system/images/photos/000/023/995/large/flow-chart-1.png "flow-chart-1.png")

### 

### 

### 

### Current State

### 

1. We are on Swagger version
2. We are using 'grape-swagger\` gem to build our specification file at a route of /api/swagger\_doc in JSON format.
3. From there we are using 'grape-swagger-rails a l o n g w i t h alongwithgrape-swagger-ui\` to take that JSON representation of our specification file to make an HTML page for that at routes of /api/docs.

(So we have already had some basic implementation of swagger in our app.)

### New State (After Project completion)

1\. Newly added API file will also follow the latest openAPI approach

2\. I will use the grape's domain-specific language to make the API of the new module like a statistical module.

3\. Then by \*\*grape-swagger, \*\*I will make a specification file for it, in JSON format at route '/api/swagger\_doc'

4\. Moving to the latest version (version 3) for specification.

(How I will implement a new module is explained in next section)

### Statistical Integration

Currently, we are showing our statistical data on [https://publiclab.org/stats](https://publiclab.org/stats). Here it is rendered inside an HTML view. In this section, I will provide an endpoint to this in JSON response. It will involve the following steps:

1\. Categorising the statistical endpoints and nesting them logically.

2\. On the basis of the first step new endpoints will be added to existing statistical routes and if required the current statistical routes will be improved accordingly.

3\. Specification file will be updated accordingly.

4\. The code will be generated from the specification file and will be updated as per our requirements.

5\. Testing will be done on the various routes added and updated.

6\. If the response is not up to the good level, go to step 1\.

![image description](https://publiclab.org/system/images/photos/000/024/002/large/flow-21.png "flow-21.png")

![image description](https://publiclab.org/system/images/photos/000/024/004/large/flow-22.png "flow-22.png")

# 

# 

### Deep dive into making it

# 

1\. There will be two files in making this feature work. First one is app/api/stats.rb and the second one will be app/services/stats\_service.rb

2\. The very first (stats.rb) will have a class inheriting from Grape::API class.

3\. Now I will use the features of the grape framework to make the endpoints (described earlier) of statistical usage.

4\. While describing the endpoints I will use stats\_service.rb to do the heavy lifting work in terms of making a call to the database and fetching the data. The file stats.rb will use the object of stats\_service.rb to make calls to the database. This will help in making logic clean.

4\. This class will be mounted to the root class where are adding swagger documentation.

5\. From there the gem grape-swagger-rails will take the class stats.rb and makes its documentation.

6\. I want to change the api URL from {host}/api/{anything} to [https://api](https://api).{subdomain}/v1/{anything} (This depends on mentor's suggestion)

### CSV Support (For Analysist)

At present, there is no support for CSV endpoints. I want to add a functionality in which you get the CSV file having data as per your requirements. This can be included as:

1\. Making an endpoint on which all of the available data columns can be seen. \[public URL\]

--\> Now if the user is logged in then proceed further. This authentication will be done on a token basis. **This step is required because we can't give out our data to anybody. If needed we can use authorization to limit it to a specific set of people.**

2\. Select which columns you want in your CSV file and hit the URL (example: /api/v1/csv?{list of params}) with the column names. These name will go in parameters.

3\. At the backend, we catch this on a method in our controller (Grape method in this case).

4\. From there we will use a custom service which will make the CSV file from it, which is having only those columns.

5\. This file will send back as a response to the client.

### Token Support for Stateless Nature

I will use the following gems to implement this feature. rack-cors gem is already there in Gemfile.

```ruby
gem 'active_model_serializers'  
gem 'rack-cors'  
gem 'knock'  
gem 'jwt'
```

After adding these gems to Gemfile I will do **bundle install.**

2\. Then we will run some generators :

rails generate knock:install

rails generate knock:token\_controller user

This will generate the controller `user_token_controller.rb` and add the required route to our `config/routes.rb` file.

3\. Now we will configure the knock file, as follow:

```ruby
| | Knock.setup do |config||
| | 
|
| |   # Set how long a login token is valid.|
| |   config.token_lifetime = 1.week|
| |   config.token_signature_algorithm = 'HS256'|
| |   config.token_secret_signature_key = -> { Rails.application.secrets.secret_key_base }|
| |   config.not_found_exception_class_name = 'ActiveRecord::RecordNotFound'|
| |   |
| | end|
```

4\. The controller section of the API will be going in a separate file, which will inherit from Grape::API. And other API files will inherit from it. All the authentication and token related functions will live here and other files can use it by \*\*before\_action \*\*helper.

For example, the root file will look like:

```
# This would give us authentication methods
include Knock::Authenticable

# For authorization also
def authorize_as_admin
  return_unauthorized unless !current_user.nil? && current_user.is_admin?
end
```

then in any controller or API file we can use:

```
# If we have set token auth on User model
before_action :authenticate_user, only: [:auth]
```

5\. Since all the code has now been setup for our Token authentication we will start making some routes like /get\_token to get token and then start testing.

A POST request to /get\_token with credentials will return a JWT token, which client can send in Authorization header in every request to consume API.

---------

# Timeline/milestones

---------

Following is the chronological sequence of this project, that I have planned. These are the sequence of screenshots if you want to see the actual one please hit this [link.](https://www.sutori.com/story/gsoc-v2-api-development)

The very first card in the timeline consists of Preliminary Tasks ( April 1 - May 10 )

![image description](https://publiclab.org/system/images/photos/000/023/964/large/timeline-3.png "timeline-3.png")![image description](https://publiclab.org/system/images/photos/000/023/966/large/timeline-4.png "timeline-4.png")![image description](https://publiclab.org/system/images/photos/000/023/968/large/timeline-5.png "timeline-5.png")![image description](https://publiclab.org/system/images/photos/000/023/970/large/timeline-6.png "timeline-6.png")![image description](https://publiclab.org/system/images/photos/000/023/972/large/timeline-7.png "timeline-7.png")![image description](https://publiclab.org/system/images/photos/000/023/974/large/timeline-8.png "timeline-8.png")![image description](https://publiclab.org/system/images/photos/000/023/976/large/timeline-9.png "timeline-9.png")![image description](https://publiclab.org/system/images/photos/000/023/978/large/timeline-10.png "timeline-10.png")![image description](https://publiclab.org/system/images/photos/000/023/980/large/timeline-11.png "timeline-11.png")![image description](https://publiclab.org/system/images/photos/000/023/986/large/timeline-12.png "timeline-12.png")

# 

---------

# Needs

---------

All the things I will need to refer are available on the internet, but I will be needing mentor's point of view on the good practice and security of our API. I will try my best to solve the errors on my own and will need mentor's help only in rare cases.

# 

## First-time contribution

I am a first-time contributor to Public Labs. And yes I have gone through the welcome page and have set up the project accordingly. I have done my contribution to OpenSUSE organization before.

I have already started contributing to the following projects:

1\. Plot2 (Rails App) : [https://github.com/publiclab/plots2/issues/2469](https://github.com/publiclab/plots2/issues/2469)

... (more coming)

I am well experienced with the open source contribution and how it works and have contributed to several opensource organization like OpenSUSE. I am providing this information just to clarify that I may not have contributed a lot before in Public Lab, but on my experience and skill set, I can assure you that I can do this project.

I have heard that Public labs welcome new contributors and it is a very enriching experience for them. This is the thing which drives me, as a software contributor in this good.

# 

---------

# Experience

---------

Computer Science and Mathematics are my interest right from school day when I was introduced to C++. Since then I started playing around with programming and building some personal and academic projects in C++. I always wonder why there are so many algorithms to do the same work, this thing puts me in the situation where I started finding the difference in between all these algorithms. (Mainly of graphs and link-list).

Then in the college, I got my love, Ruby. Things were so simple as compared to C++, after that, I dig deep into this language and tried things like Meta-programming. I also try my hands on JavaScript, Python, and TypeScript.

After that I started doing web development and it's been 2 years, and I have done the following things:

- I have worked in 3 startups as a Web developer intern. (Experience letter are on my website)
- I have worked in fields like UI/UX (While making dashboard in Angular-JS), Backend-development (Rails-5), Browser simulation testing (selenium + Watir), making REST-full JSON API in Rails-5
- Currently, I am working as a software developer in a company (Namyata), where I am making the full product for them which includes Angular-5 PWA (Lighthouse score: 86) for front-end and Rails-5 JSON API for the back-end.
- I am handling both production and testing servers of the company which is on Elastic Beanstalk of AWS.

Experience Letter (UI/UX): [https://www.dropbox.com/s/q7f9bomwzydv3zi/Aviate\_softwares.pdf?dl=0](https://www.dropbox.com/s/q7f9bomwzydv3zi/Aviate_softwares.pdf?dl=0)

Experience Letter (Rails Monolithic app): [https://www.dropbox.com/s/uq4ae2zfxi83em0/gyandhan.jpeg?dl=0](https://www.dropbox.com/s/uq4ae2zfxi83em0/gyandhan.jpeg?dl=0)

Experience Letter (Rails Rest API): [https://photos.app.goo.gl/Qp83ViprnrvIU6mq2](https://photos.app.goo.gl/Qp83ViprnrvIU6mq2)

## Academic

I am a University Topper and have studied the core of computing. Subjects includes Fundamental of computing, C, Physics, how the network works and actually what is the problem we are facing now in terms of technology trends and data.

## Hackathons

I have been a part of many hackathons including regional hackathons of various universities(Hack@DTU, Hack@NSIT and many more) in nearby cities and also international ones like AngleHack. One of my driving force to learn new technologies has come from there. Those sleepless nights with code have really pushed me to make the best software possible.

## Mentor

1. I was the coach at Rails Girls workshop held in Pune, on 21st January 2018\.
2. I am currently a coach of 3 teams in Rails Girls Summer of Code.

## Speaker

- I was the lightning talk speaker at RubyConf India 2018\.
- I am one of the main speakers in RubyConf Kenya 2018\. (Link: [http://rubyconf.nairuby.org/2018](http://rubyconf.nairuby.org/2018))

> I build maintainable and market stable products, and take the responsibility of the project/product I am working on. For your satisfaction, you can check the feedbacks of my clients on my Personal website or on my LinkedIn. (link above).


I have set-up the development environment on my local machine. I have also worked on following issues
1. https://github.com/publiclab/plots2/issues/2469

Pull request submitted:
1. https://github.com/publiclab/plots2/pull/2500
2. https://github.com/publiclab/image-sequencer/pull/195

So I have experience and setup both plot2 and image-sequencer. On those basis I can say I have familiar with the development phase of Public Lab.





# 

# 

---------

# Teamwork and self-motivation

---------

I have worked in a team several times:

- In my first internship, it was a team of two. Me and senior developer, in that I learned the importance of regular update from both the sides (Junior and senior developer).
- In my second internship, it was a team of 4 developers and I learned what other developers (Data science interns) and clients actually need from web developers. I understand the importance of clean and to the point git commit messages, and actually how branches work in git and GitHub. I also learned more about version control when I started contributing in OpenSource.
- In my current company I am leading a team of 3 members in which I handle design/front-end interns, here I understand that things changes very fast, and regular updates and git commit history is much important than we think.

> So keeping the above experience in mind I think, I can work in a team without disturbing the mentor for common bugs and simple things which I can google. Git commits messages are to the point and relevant so that it won't create a problem in future

## Self Motivation

Going into various hackathons, attending conferences and being a mentor, it is my responsibility to teach the right thing. And for the same, I work hard in order to understand the things and deliver them in the correct manner.

- I am a big fan of a book "Software developer lifecycle manual - by John Sonmez", this is one of my great self-motivation boosters.
- I have done 10+ online courses (you can see certificates on Linkedln), to keep me up to the standards time to time.
- I have worked remotely many times. So I have the experience to keep up the things even when they do not work as we expect.

# 

---------

# Passion

---------

After some alarming dangers to our environment people around the world started doing something to improve the environmental conditions around them. But it didn't have that much effect as they expected because people around the world didn't communicate with each other and lack of support will bring down anybody.

> I want these people to connect and support each other so that a **major** change could take place.

Public Lab is what is what we all are looking for. Public Lab can help me in to join this league of DIY people. As I am a software developer I am ready to give them full software support as per their needs. I am also impressed by the different fields of people in the community.

I strongly believe that with people having this much of experience in different fields, we can definitely build something awesome, and I want to be a part of that.

# 

---------

# Audience

---------

I think the project will improve the performance of the API, which will lead to the better serving of the clients. With the statistical data endpoints, we can make apps to better monitor the data and to improve data analysis on some low power devises. Also, we can make this data available for 3rd party integration and people from around the world can access it for their own usage.

I will keep my code as per the industry standards i.e more modular, more test driven so that there will be no problem in further development.

# 

---------

# Commitment

---------

I believe that this work needs attention and hard-work equivalent to a full-time job and I am ready to deliver that. My main motive is to complete the work before time and also get some time for feedback and production bug fixing.

# 

---------

# What to expect after completion

---------

1. A very well written code in terms of modularity, test-driven development, best-practice, no robocop offense.
2. Well explained documentation.
3. Example Usage show in the documentation.
4. Video tutorial on how to consume application on various front-end frameworks.
5. Blogs at various steps of development.

And an increase in clients consuming our API for their products/projects.

Can't wait to start working on this.

Thank you

Raounak Sharma