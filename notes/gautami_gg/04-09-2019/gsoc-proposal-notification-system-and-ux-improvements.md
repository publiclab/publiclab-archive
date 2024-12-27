---
title: "GSoC Proposal : Notification System and UX Improvements"

tagnames: 'gsoc, gsoc-proposal, summer-of-code'
author: gautami_gg
path: /notes/gautami_gg/04-09-2019/gsoc-proposal-notification-system-and-ux-improvements.md
nid: 19012
uid: 579624

cids: 23841,23842,23873,24129

---

![](https://publiclab.org/public/system/images/photos/000/031/358/original/1_g5RBYeGe0VLB6t_ZsvO_wQ.png)

# GSoC Proposal : Notification System and UX Improvements

by [gautami_gg](../../../profile/gautami_gg) | April 09, 2019 16:23

April 09, 2019 16:23 | Tags: [gsoc](../tag/gsoc), [gsoc-proposal](../tag/gsoc-proposal), [summer-of-code](../tag/summer-of-code)

----

###About Me:

Name: Gautami Gupta

Affiliation: Integrated Masters in Computer science at International Institute of Information Technology, Bangalore

Location: Bangalore, India

Github: [https://github.com/gautamig54](https://github.com/gautamig54)

Email: [Gautami.Gupta@iiitb.org](mailto:Gautami.Gupta@iiitb.org)

###Project:

Public Labs Notification System and UX Improvements

###Detailed Problem Statement:

####Notification System

Notification system mainly consists of two parts, In-app Navbar Notifications and Web Push Notifications. I plan to undertake each as follows:

- In-app Navbar Notifications: Currently, notifications regarding likes/comments on a post for a user are sent out through emails and there is no notification drop-down on the navbar. I will be implementing a notification feature for each user on the navbar.
- Real-Time Notifications and Web Push Notifications : I will build a system on publiclab/plots2 for triggering Web Push Notifications for desktop when new comments/likes or posts are created using Notifications API provided by Mozilla or W3C and Real Time Notification System by ActionCable.

####Other enhancements I would implement:

As mentioned by the mentors, the above project can be included with other contributions for the GSOC summer duration. Therefore I would like to suggest certain improvements in User Experience.

- Back-end improvements
  - Reducing response time of the web pages
  - Faster CI (Continuous Integration) Pipeline by reducing time for test suite in Travis CI.
- Accessibility
- Internationalization
- Keyboard Shortcuts

###Implementation:

####In-app Navbar Notifications:

Notifications provide an overview of the user related activities on the website. It helps in increasing user engagement and personalization of the website for each user.

Notifications for the below events/actions will be shown to the user:

- People who liked or commented on the user's post
- Wikis/notes published related to the tags/people a user follows.
- People who started following a user
- Since Public Lab is a platform for posting environmental related issues, implementing a feature to track environmental issues nearby a user and notify those users about it would be very useful.

There are various gems to build an in-app navbar notification system like :

- [notifications](https://github.com/rails-engine/notifications)
- [activity\_notifications](https://github.com/simukappu/activity_notification)
- [public\_activity](https://github.com/chaps-io/public_activity)

I will prefer using activity\_notifications gem with ActiveRecord ORM as default configuration to implement the In-app Notification System as it works smoothly with Rails 4.2+ versions and hence compatible with Rails version 5.0, as it has a wide scope of customizing notification system.

####Real Time Notifications and Web Push Notifications:

Web Push notifications are important because it helps users engage more with the website even when they are not online or not using the web application. After we implement a system of getting notifications in the prior task, we can more forward with the client-server system for web push notifications.

I plan to implement the Web Push Notification System using the APIs provided by Mozilla or W3C.

I will be implementing real-time notification system using ActionCable. ActionCable is a built-in library in rails with both server-side and client-side components to push data through web-sockets. It works in the form of Publications and Subscriptions for communicating between server and client. When a particular action occurs and publishes a message then another system (user end) subscribed to the message will receive it as a notification and display it as a Real-time Notification on the desktop.

![](https://lh5.googleusercontent.com/l5FXmY4GmDRL2aurHDfsn4QiRhZBLB3n6B1La1X9kK1FTEhmz4GyG67UBGKC3h_iDkw1eYgOtUtpyDlLagNh4Nyc006-qmfWHOl8CLPZs1q8YwhlN2SuUA850t3a5P_KRdDh8CZy)

While pushing a Web-Push notification to the desktop, the user (Chrome or Firefox), rails application server and the Web Push server will interact with each other.

![](https://lh4.googleusercontent.com/bkPlIkSsb-JC27ZrV3m-8X4v1rd3izU_PA9XqNMUPGOTVziysbz1yJjdpUjC3qABItx9CwOHs2NsqK19lWIAy5-qEFKzwSfFdUEOL4dsIB3Hy08_JuK1_e5BhX7BdRVdKEOMPp_q)

- To start with implementations of Real-Time Notification System, we first have to decide upon the subscription adapter in config/cable.yml to store the sockets' details. There are three adapters available for end-users.
  * Async Adapter : The async adapter is intended for development/testing and should not be used in production.

![](https://lh4.googleusercontent.com/w2nl5BI4NVEBZWpG8Y-b-2bfo7SMGnsmDPQI2CI2cnJ5hA_1k6ymykb_wo3tCttV0NCWyo6CQCNuWY9Nnvhc54B7vvBYh-6tTOF4sWFH89IO4J0eY2vhCYFrEd2Ncfm8j1Fkqq0p)
  
  * Redis Adapter : The Redis adapter requires users to provide a URL pointing to the Redis server. Additionally, a channel\_prefix may be provided to avoid channel name collisions when using the same Redis server for multiple applications.

![](https://lh4.googleusercontent.com/orvuufYhtQDKClNF9nm_r-wHnFYpcaW1smykSmn3g2p-Cs50yHI95Ef0l0RC1WwsR_qXRg7RGlUWoOQiQTpoEhJuK04XJIimbVIHqCo4LZ6wNSSmJNNpNIU8SAIZOFVOwE-8m5pP)
  
  * Postgres Adapter : The PostgreSQL adapter uses Active Record's connection pool, and thus the application's config/database.yml configuration, for its connection.

- Next, we create a channel which defines our web socket by running

$rails g channel notifications which creates a .rb file and a JavaScript coffee file. The former handles our server-side logic while the later is our client-side JavaScript.

![](https://lh5.googleusercontent.com/7pQxbHq-nkalZmSTxlPrD1askNM9bAL8Ovx4boKxvWrNSfwppFRFjteJi-zYJI_F-_sDxi6CNqvxDyFFktqtjEHcdgWKfPrylckN8nk7vgfwMR2Vx19SzG6Q-TvbBBhrMol85vUo)

- Next, we ask for the user's permission if he/she wants to receive notifications.

![](https://lh5.googleusercontent.com/whno_1GSyvgKdDdQ_iyY5Dt_l6rxESv1ovHnc8tw2lmgbQK01lLDvrB73rh3X8sQiFQRMGd02QjvHkXbiO1byg0nUqsoOILx1PTg97pwqAIUcTG3dgUmFjLJUiqZFNyjrjbBS7Fb)

- Now on the client-side, if the user accepts web push notifications, the user will receive a notification containing an event (like, comments, post etc) and then we'll prepend that event to the events in the activity log.

![](https://lh3.googleusercontent.com/sDZgUStNrK9V5Ungl7Gt5OVrCVfI43TTmaHkoyAqXU9lDoFirQr8h0Cg0YE_1ZqidNCs0C7U1gIhV-wpUGNYxCZ4LgQJbiIwUY_ltyNnfqMc0J9yHUfY7CqnxkTkuEd7nj_AyRa_)

- Since Public Lab is a production application and there is real-time updation of events, it is important to create jobs to handle the broadcasting of notifications. We do this by $ rails g job NotificationsBroadcast

The broadcast is being invoked by 'NotificationsChannelandaandabroadcast\_to\` method.

![](https://lh5.googleusercontent.com/0TfO57dQinNpwWF7D8E0Ux_ohmBDABq23HhEo_OdlGCJWS5FZxwsgyrKoLxz7035U0Uom5b1sMc7CZI4Sb6FPPvcLiQI-SVZZlzZvqoHBc9pT93bTE1IXtuxPzKcAet5jj2WAZnp)

- Lastly, I will perform the above job (NotificationsBroadcast) after an event has been successfully saved to our database.

![](https://lh3.googleusercontent.com/oybkJ3al3h92NBnKOuKZV7lo8anwWQSvC-SqBinqm6a1FA1wffj3MfpJXTkSw-3o3e9JU9H9K6qAu9TauUBhBKhghf8wTG0EY8OgJm0UVqs-De5DM9AbdiJtmWNmfiBI-lenTR50)

#####Testing :

To test ActionCable, the default spec rails server will not work. Therefore, I will use action-cable-testing gem to facilitate testing actioncable connections in rspec.

###UX Improvements:

####- Back-end improvements :

- Reducing the response time of the website :

The website has a lot of queries due to which it takes a lot of time to load any page. I will change the raw SQL queries to ActiveRecord rails queries which will reduce latency and optimize the queries.

Also, I noticed that a lot of queries have been repeated which further reduces the response time of a webpage. We can define instance variables or helper functions and use them instead of writing complicated queries.

I have given solutions to optimize two of the SQL queries which improves the response time of dashboard and used Solr and Sunspot to improve the search feature. I will also optimize queries for tags page, questions/answers page, events page, notes/wiki pages etc.

For example, I simplified a query for extracting hidden\_nids and coauthor\_nids in [app/controllers/home\_controller.rb](https://github.com/publiclab/plots2/blob/master/app/controllers/home_controller.rb) .

The queries took 10ms to load with no data. Initially the queries were :

![](https://lh6.googleusercontent.com/k8c0cvqwmXcijyLVTcuHI_9VCT8RMrdP96Qfi4RrdhwZKEFs5kW_KGd3EX7L3gr6i40M-b7aK0EKIf6BE71trjKCYJFsxb0ZinbcDBaXhVAmw_O9wFn3uAdvf8v3nNcHJ8bfx3_G)

![](https://lh5.googleusercontent.com/XaqmBHVDiIUvK0gvWoyT_72m_yHSYgaSPGafsjKt_OCI_epD9o8xMcNPVnvDG5dv9C8TNj3NdzbcbLRu2-f-XAF9l7Dg4_Hu12V-95BdbzHoIAf6ktY4X8z82wiMuik3E91B38_y)

I have defined a function has\_tag (name) in [app/models/node.rb](https://github.com/publiclab/plots2/blob/master/app/models/node.rb).

![](https://lh4.googleusercontent.com/ixhk4nJDwN4_gB1DLD8ou9dUAVnmE7Ok2xu3Ign2D7rRExtQbcRfy3jRIuFfZ_AawPSvFr15uEHYYTCMlIPb7yTHXdzzVFyPzgw77yyPh9_WQE7tyupXuNuVVTgVFJsQ0Vso0g1o)

And replaced the above two queries with :

![](https://lh6.googleusercontent.com/Fuv0oPA9XklWvri-6OkyIgI781vIIGZqL-vkwi5m0fEqGB8yoCZgFhKgyS4CMxT9SjZ5IHbEtVgXmK6QTevIjdypLrubbydJ3juHiA5q6GGKUwS_qTSZS-RPa9NfCE_dliUr2zYk)

![](https://lh3.googleusercontent.com/tVSUDDgr1K3VOdwXbA6emkaEOqtFpfBgh8hHUI6ede9vj5icj5vYhLhP1Z9OH7gazwrsJyuz12DLVeHAzAyvUXsilatwg4odmrvFyd7caUSFjkd1-Hl7BgMasjpCqWKzsPuUM9it)

This reduced the response time of these queries to 4.9ms, which is almost half of the current response time.

Again, the same complicated query for extracting hidden\_nids was repeated in [app/controllers/application\_controller.rb](https://github.com/publiclab/plots2/blob/master/app/controllers/application_controller.rb) . The same solution could be applied here as well.

Next, I noticed that the search feature of the website takes a lot of time to return search results. The reason behind this is, every time we search for a word/post/users, it is looked up in the entire database without any optimization. ([app/service/search\_service.rb](https://github.com/publiclab/plots2/blob/master/app/services/search_service.rb))

I would like to suggest "Search with Solr and Sunspot gem" to optimize the search feature. Solr is an OpenSource Search platform based on Apache Lucene and Sunspot is a ruby integration for solr and has excellent support for Rails. Following are the steps involved:

- Install "sunspot\_rails" gem and generate configuration file.
- Searchable method for keyword search ![](https://lh6.googleusercontent.com/0JGVf834XipJX1pOxk6bZzqss7qSEPTk9thu4M-YFIYXg1X8jUh6pEIWS6gmKkQnbGzVe8hg5wGmAKueAHCmQp0ujMo_U-IaVFCQYrozw2AGh8Sfkl5o54T9tJPVZ-Zc2zjNxyKp)

The text here means that we're creating a field that's fulltext-searchable. It'll be broken apart into individual keywords, and then those keywords will be matched against the words in keyword search queries.

- Run rake sunspot:reindex to get the existing data into solr.
- Next, adding new action to the controller which will handle search queries.

![](https://lh5.googleusercontent.com/lGaIS6l1qFHO6ajzbuSmG64GZowaeVQlDJutPDSQFVBFjZ30inOJpswu7nlcB2dtg9YzhmfwCX8clE8Yl-EsiBcwXAdkNGnd5rReCkDEqgCkLzK75A1vgffzSu-OVToUAnNAFZ1T)

- Install "sunspot\_solr" gem to run Solr server in development.
- Start the Solr server by : bundle exec rake sunspot:solr:start
- Faster CI Pipeline:

Problem:

Slow Travis ci pipeline:

Currently, running all the test suite takes around 15 mins, this is happening mainly because all the gems are getting installed for every PR.

Solution:

Travis CI configuration for public labs pipeline already uses Docker containers which help in coming up with the solution which is based on Docker APIs. Docker Volume, a feature provided by the Docker community which helps in persistent data of containers. Using Docker volumes we will store the gems inside persistent ruby gems container. So now, we don't have to install gems again and again. Then we can hook containers to ruby gems container using a docker-compose file. In the case of new gems being added in the Gemfile, we will do bundle install on the ruby gems container and that will install only the new added gem.

####- Front-end improvements :

- Accessibility :

As Public Lab is focusing on crowd-sourcing data, in my opinion, the website should be accessible to all kinds of users. Therefore, there must be special features on the website for specially abled people. It would not only make the website usable for the specially abled, but also create a sense of positivity among all other users. The World Wide Web Consortium (W3C)'s Web Accessibility Initiative (WAI) is trying to improve the accessibility of the World Wide Web (WWW or Web) for people with specific needs. These are the main areas to look at, regarding the accessibility features:

- Web Content Accessibility (WCC)
- Authoring Tools Accessibility (ATC)
- User Agent Accessibility (UAA)

Proposed Features:

- Provision of giving an "alt" attribute to the image uploads (WCC)

This would help the visually impaired users using screen readers to understand an on-page image. Moreover, if an image fails to load for some reason, this text will be displayed in place of the image.

- Provision of giving captions to the uploaded videos (WCC)

Captions are a text form of audio information in video and animations. This feature will prove beneficial to the partially or completely hearing-impaired users. It will also make the videos understandable in places with loud noises, or where the sound has to turned off.

- A special ToolBar for the partially visually-impaired users (UAA)

It includes the following features:

- Background Color Option: There will be an option of changing the background color of the web pages to suit the needs of color blind people.
- Text Formatting: Customizing the font style and line spacing of the web page.

<p align="center">
<img src="https://lh5.googleusercontent.com/sS0-mRaATe9w6yKN-SfdAp5jiPbxgz_onMXhjTQiQXoczf8pn11twb8XYaD6cpc6LEptySpPncapgcg1LPyQEktEu-7Ct0-WC72wKjNrCB9a_6-EnJ1DMhJLmjyISEtqjO78m1za"></p>
<p align="center">Special Toolbar</p>
<br>


- Internationalization:

    Internationalization means designing and developing in a way that removes barriers to localization or international deployment. This accessibility feature will enable the website to be accepted worldwide, in various language, cultural and other requirements of users across the globe.

    Proposed Features:

    - Multi-lingual support for the website using i18n API. This provides an option to translate the webpage in any language as chosen by the user, thus making the website readable to all the users across the world.
    - Date and Time formatting. This would make the events and other calendar notifications come up in the local time-zone and date format, making it easy for the users to interpret and commit to the timelines.

- Keyboard Shortcuts:
    
    Keyboard shortcuts help the users perform tasks quickly. This gives a convenient substitute to the users to perform these tasks. I plan to create the following shortcuts using JavaScript:
    - Submit a post/wiki/question/answer
    - Link to Profile page
    - Link to Dashboard
    - Search the website
    - Print current wiki onto your system

###Timeline/Milestones:

Community Bonding Period : May 7 - May 26

- Understand Existing Code base.
- Discuss with the mentor about the best way to go about the implementation.

![image description](/i/31355.png "Screen_Shot_2019-04-09_at_10.06.27_PM.png")

![image description](/i/31356.png "Screen_Shot_2019-04-09_at_10.06.35_PM.png")

![image description](/i/31357.png "Screen_Shot_2019-04-09_at_10.06.43_PM.png")

###Contributions to Public Lab:

- [Pull requests](https://github.com/publiclab/plots2/pulls/gautamig54)
- [Issues created by me](https://github.com/publiclab/plots2/issues/created_by/gautamig54)
- [My other activities ](https://github.com/publiclab/plots2/search?q=commenter%3Agautamig54+org%3Apubliclab&type=Issues)

### Experience:

####Technology stack :
 Ruby on Rails, Bootstrap, React js, Python, Javascript, HTML, CSS, Java, C, C++, Shell scripting, Ocaml, Prolog, Mysql, Postgresql, Git

####Operating Systems : 
macOS, Windows, Ubuntu

####Courses : 
Software Development, Programming Languages, Operating Systems, Machine Learning, Networking, Visual Recognition, Automatic Speech Recognition, DBMS, Design and Analysis of Algorithms, Data structures

####Projects :

- [Platform for Legal Queries](https://github.com/gautamig54/LawHub-LearnIt-Girl)(Ruby on Rails)

A bridge between common people and lawyers. This website provides information about a case,e.g. what sections are enforced, what judgments have been passed etc. One can also hire lawyers here

- Abstract text summarizing (Neural Network and Deep Learning).

A research project which focuses on abstractive summarization of a transcript using ANN(Artificial Neural network), RNN(Recurrent Neural Network) and LSTM(Long Short Term Memory networks)

- [San Francisco Crime Classification](https://github.com/gautamig54/SanFrancisco-Crime-Classification) (Machine Learning)

Predicting the crime in the city according to the time and location using multi class softprob with XGBoost.

- [Blog](https://github.com/gautamig54/blog_g) (Ruby on Rails)

Implementing functionalities like user authentication, search bar, filtering etc.

- [Mini Cab aggregator](https://github.com/gautamig54/mini-cab-aggregator) (Java)

GUI and OOPs implementation. Booking a cab depending on the minimum distance of the cab from the pickup point. Pickup and the destination points are set by clicking on the screen.

- [BattleShip Game](https://github.com/gautamig54/battleship) (Python)

A multiplayer battleship game with GUI (pygame).

###Teamwork:

"None of us is as smart as all of us." --Ken Blanchard

I have worked in teams of sizes varying from two to twenty. In my college, I have got to be a team member as well as a team manager of the events/projects. I have worked in many academic projects of courses like Programming Languages, Machine Learning, Software engineering etc. which usually have 3-4 members.

I have taken part in many hackathons like FlipKart grid, SIH, AngelHack etc where we had to work in collaboration.

I was the designing head of the TEDxIIITBangalore where I managed a team of 20 people working on different tasks.

I am also a part of Alumni Committee, Internet Committee and the head of Dance Club of my college, IIIT Bangalore.


###Passion:

I have always been a technophile and an avid learner. I delved into programming at the age of 15\. I have developed a lot of interest in open source community. It all began from designing creative web pages, and now I have explored various tools for full stack development. I worked on a range of domains varying from Deep Learning to Web Development. I have always wanted to make a change in the society and I understood that in this era of automation and the extent to which people are dependent on the technical boons, pursuing this field can be my way of making a change. And hence, the idea behind Public Lab is to to mark a change and improve the environmental conditions attracted me to contribute to the project.

Public Lab provides me an opportunity to interact with experienced mentors from different parts of the globe. I always wanted to contribute to live projects and Outreachy provides a platform to be a part of innovative and creative projects.

###Audience:

Public Lab being an environmental research organization, the main audience of it would be environmentalists. Other than that, Public Lab also facilitates environmental justice issues by monitoring the environment and advising communities facing any such issue. This invites users from all sectors, be it from a MNC or from a small community. Thus, to facilitate the user experience, one must look from the perspective of all users. My plans for the implementing the notification system and UX improvements take into account all the users of Public Lab. I plan to make the UX efficient so that users find it easy to use and have an overall great experience using the website.

###Commitment:

I'm confident that with this plan and with the right guidance from the mentors on how to proceed and how they want to implement the above features, I can improve Public Lab and make significant contributions in both Backend and Frontend. I will be fully devoted to the organization as I do not have any other commitments to work on in the timeframe of GSoC programme. I shall be devoting 40-45 hours per week.

Public Lab provides a very open and encouraging work culture. Through Public Lab, not only will I gain knowledge but also it will be a delightful experience and a matter of honour to be a part of such a renowned organization while working on such a noble cause.