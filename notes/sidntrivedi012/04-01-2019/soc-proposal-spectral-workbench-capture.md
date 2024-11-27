---
nid: 18922
title: SoC Proposal : Spectral Workbench Capture
path: public/static/notes/sidntrivedi012/04-01-2019/soc-proposal-spectral-workbench-capture.md
uid: 572743
tagnames: software,gsoc,soc,response:13975,rgsoc-2019,gsoc-2019,soc-2019,soc-2019-proposals,soc-2019-projects
---

# SoC Proposal : Spectral Workbench Capture

## About me

Name: Siddhant N Trivedi

Affiliation: Jaypee Institute of Information Technology, NOIDA, India.

Location: Noida, India

Github: [https://github.com/sidntrivedi012](https://github.com/gauravano)

LinkedIn: [www.linkedin.com/in/siddhantntrivedi](http://www.linkedin.com/in/gauravano)

Email: [sidntrivedi012@gmail.com](mailto:sidntrivedi012@gmail.com)

Portfolio: https://sidntrivedi012.netlify.com

Gitter: sidntrivedi012

IRC : sidntrivedi

Project : [Spectral Workbench Capture Library](https://publiclab.org/wiki/gsoc-ideas#Spectral+Workbench+Capture)

I am Siddhant, an Open Source Enthusiast, a passionate Web Developer and a learner who is curious to learn new things and build things which can benefit the society. Currently, I am pursuing my Undergraduation (B.Tech) in Information Technology from Jaypee Institute of Information Technology, Noida, India.

## Project description

### Abstract/summary (<20 words):

Refactoring, Testing and Bundling of the "capture" feature of the Spectral Workbench web app in a standalone Javascript Library with an API with the app around it written in React.

### Aims to solve

The project, if implemented will solve the following problems:

- **Independent Library for Spectrometry :** It will provide an independent Javascript library which can be used by anyone in his/her web/console/command line application and even on Embedded Systems like Raspberry Pi for using the capture feature which is implemented in Spectral Workbench. Thus, it will give a strong boost to the DIY principle which is one of the fundamentals of Public Lab.
- **Efficient development of Spectral Workbench :** Like Spectral-workbench.js is the Javascript heart of graphing of Spectral Workbench, so the Capture library will resemble the capture functionality of the Spectal Workbench. Improving the library will in a way improve the working of the app. Thus, the repository of Spectral Workbench can be used to develop and debug the Rails issues while the capture part can be taken care of in the library's repository. It will easen the development process of Spectral Workbench.
- **Ease of usage (Maintenance of Software Modularity) :** As mentioned [here](https://publiclab.org/notes/warren/01-18-2018/software-outreach-modularity-is-great-for-collaboration#Versioning+and+cross-repository+work) by @jywarren, With the making of a libraries like these that can be used for spectrometry, various environmentalists who want a "Go-to" mechanism for spectrometry in their application, can use its code as it is now not hidden within the big codebase of the webapp but is kept in a clean manner in a separate repository and has active contributions from the community.
- **Easier for newcomers to contribute :** We see that Spectral Workbench experiences less contributions from newcomers as compared to other projects. Having some part of its code in a separate library which is being used in it may attract the new community members. To add, I'll try to open as many first-timers-only issues as possible.

### Approach

**1\. Standalone...but how ??**

The main aim of the project is to refactor the javascript part of the capture functionality into a new standalone library that can can be used in any application for implementing it. Refactoring is a tyresome work but really productive and rewarding task.

I'll be copying the file capture.js from the app folder of Spectral Workbench and adding it to a new repository.

**2\. Refactoring everything to follow ES6\.**

ES6 comes up with many new features like Classes, Promises, Arrow functions etc. And it is known to be faster too. Using it in our library code will be extremely helpful and will help in making the functionality speedy and efficient.

**3\. Adding Babel and ESLint**

Since we will be using ES6, we need to add Babel as a transpiler to ES5\. Babel will allow us to use ES6 which, in a way gives us the feasibility to use the latest developments in Javascript which really easen up the development process without worrying about the browsers to integrate that features, polyfills etc.

The config for Babel and eslint may look somewhat like this -

![image description](/i/31304.png "Screenshot_from_2019-04-03_12-07-12.png")

Besides checking a certain coding style, linters are excellent tools for finding certain classes of bugs, such as those related to variable scope. Assignment to undeclared variables (these leak into the global scope, contaminating it and possibly causing very difficult to find bugs) and use of undefined variables are examples of errors that are detectable at lint time. Thus, adding an ESLint will surely make the development process much easier.

![image description](/i/31305.png "Screenshot_from_2019-04-03_12-25-45.png")

I have enabled JSX also since we will be using React to make the app for the library. The documentation of ESlint though says that supporting JSX syntax is not the same as supporting React. React applies specific semantics to JSX syntax that ESLint doesn't recognize. And so, we may have to use "eslint-plugin-react" for using ESLint on React code.

Having discussed with the community, will also add a javascript style-guide to our code as well as in the ESLint config which will help the new-comers in easily understanding the codebase

**4\. Writing tests**

Since, it is important to have Unit tests for our project in order to ensure that modifications to our code don't break existing functionality, so will be using Jasmine testing framework to build unit-tests for the application.

**5\. Adding Browserify to bundle the files.**

In order to speed up the performance of the library which will in a way give a boost to the performance of the Spectral Workbench Web-app, I will be bundling the stylesheets and the javascript files using Browserify. Though, we can also try [Gulp](https://gulpjs.com/) or [Webpack](https://webpack.js.org/).

**6\. Publishing it to npm.( Make its npm module)**

Having reached a certain checkpoint towards completion in the development, testing and bundling of the library, will work on publishing it to the npm repository and thus, make its npm module which can be easily used in any Node.js project.

**7\. The standards to be followed for making API.**

It is said - "The API is like an artist performing on stage, and its users are the audience ". A singer must have a good connection with the audience in order to give a decent performance. Similarly, an API also must have such endpoints which are easily understandeable and from which the programmer can easily derive the work it performs. I will be making a REST API for the library. URLs may look like these:

- List of Spectrums
  - GET [http://www.example.org/api/v1/spectrums.json](http://www.example.gov/api/v1/magazines.json)
- Filtering
  - GET [http://www.example.org/api/v1/spectrums.json?name=Test spectrum&sort=desc](http://www.example.gov/api/v1/magazines.json?year=2011&sort=desc)
- A single spectrum in JSON format
  - GET [http://www.example.org/api/v1/spectrums/1234.jso](http://www.example.gov/api/v1/magazines/1234.json)n

**8\. Sample Flow chart for API**

![image description](/i/31017.png "api_flowchart_(1).png")

**9\. Writing tests for API**

There are many frameworks to test APIs, some like Postman even offer an extensive environment for API Testing. But, in order to maintain consistency in the codebase, I will be using Jasmine for testing the APIs.

**10**. **Analysing the features and components required in the app.**

Discussion with the mentor regarding the features, React components and modules needed to be implemented in the App

**11\. Making the App using the required UI modules of React.**

Will make the app using React.js by implementing the components and features discussed with the mentor.

**12\.** **Making the library work in all browsers.**

As discussed in #87 , some of the functionalities of the capture part of the project do not work in all browsers like Firefox, Edge , Opera etc. Will work on these issues and come out with a solution to make the library work similarly on all the platforms.

**11\.** **Using Semantic versioning for version naming.**

A very important component of every software is its versioning. I propose to use Semantic Versioning for this library as well as API. It works like this -

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards-compatible manner, and
3. PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

# Timeline/milestones

#### May 6 - May 27 ( Community Bonding Period )

- Will discuss my timeline with the mentor and understand the codebase of Spectral-workbench to a better extent in order to find out how to refactor code of "capture" from it.
- Will try to implement the capture part of SWB in a separate repository with ES6 and the integration of ESlint and Babel.
- Will go through Jasmine's documentation and learn how to write tests for Javascript to a better extent.
- Will solve the current issues of Spectral-workbench & Spectral-workbench.js.
- **Outreach :** Will try to involve the community in the project by opening some (5-10) First-timers-only issues and publishing a blog on "Getting selected for GSoC with Public Lab" on May 26,2019\.

#### May 28 - June 23 ( 4 weeks ) : Integration of the library and Addition of Tests

- **Week 1 :** In the first week, I will start with the refactor of the javascript code that makes "capture" functionality work from the Rails Web App of Spectral Workbench into a separate standalone library.
- **Week 2 :** In the second week, provided the refactoring is done, I will firstly integrate a code coverage checking functionality to the project like we use [coveralls.io](https://coveralls.io/github/publiclab/plots2?branch=HEAD "https://coveralls.io/github/publiclab/plots2?branch=HEAD") in plots2\. Though Jasmine also provides a separate web page to visualise the tests. Having done this, I will start adding basic tests to the library in order to make sure that the basic functionality of the library works on the standard test-situations. If, by any chance the integration does not get completed which I will avoid, I will give some more days which I assume as the buffer time to integration and the rest time will be used to add the standard tests to the library.
- **Week 3 :** Having added some of the standard tests to the codebase, in the third week I will find some corner cases where the code fails or breaks. I will also invite any other contributor to find some race conditions or the conditions where our code breaks. Having found the conditions, I will try to implement tests for them with the help from the mentor.
- **Week 4 :** With the guidance of the mentor, if most of the tests are written, I will check the code coverage of the project and if a decent coverage has not yet reached, I will try to refine the tests and also add new tests in order to attain the best performance possible. If the code coverage report gives a decent result, I will start with my Outreach plan and discuss with the mentor regarding how to proceed ahead.
- **Outreach :** Will publish a blog on about the Need for code modularity and also how we are implementing refactoring and modularity in our project here on June 23, 2019\.

#### June 24 - June 28 ( Mid Evaluations 1 )

- **Outreach :** Will make a contributing guide([CONTRIBUTING.md](http://contributing.md/)) for Spectral-workbench-capture so that newcomers can understand the directory structure and codebase efficiently and easily. The guide will get completed within the Mid evaluations and will be submitted for review on June 29,2019 after the end of Mid- Evaluations.

#### June 29 - July 21 ( 3 weeks ) : Consolidation and Testing of API

- **Week 1 :** Will work on discussion with the mentor about the API endpoints to be made and how will we implement it. Having done this, will start working on the implementation of the API by reading the REST API development articles and docs.
- **Week 2** : Will take half week more to complete with the development of the API. After this, will start with integrating tests into the API with the Jasmine Testing framework.
- **Week 3 :** Will complete the testing part in this week and complete any feature of the API if left. Will brainstorm about what more end points can be added to the API and how can the API be made easier to use and integrate. Will also make sure that the API is versioned.
- **Outreach :** Will make 5-10 FTOs ( more if needed ) for the testing part of the library. Also, will love to review some pull requests.

#### July 22 - July 28 ( Mid Evaluations 2 )

- **Outreach :** Will write a blog about the "How to make and test an API". The blog will be published on July 28,2019\.

#### June 29 - August 18 ( 3 weeks ) : Development of a React app around Basic UI Modules.

- **Week 1 :** In this week, I will discuss with the mentor regarding the needs and the components that we have to keep in the Web App of the library. I will also prepare some mockups regarding the UI/UX of the app and approach the mentor as well as the community about their thoughts and suggestions regarding them. In this time, I will write documentation for the structure, working, usage, setup, testing, contributing etc. of the spectral-workbench-capture library which will help the community to get acknowledged with the code base faster.
- **Week 2 :** Having got the basic idea of the structure to be implemented, I will start building the React app by using the official Create-React-App boilerplate. I will implement the basic components. Will complete the UI part of the app within this week so that it can be integrated with the library in the upcoming week.
- **Week 3 :** In this week, will integrate the app with the core library and also upload the documentation written for the project on the webapp as a separate Docs page. Having done this, will work on making the library to work efficiently on all the popular browsers and the app to work adequately on all the browsers and platforms.
- **Outreach :** Will open some 10 - 15 FTOs regarding documentation, code, working, testing etc.
- Alongwith these, I can also help organize a GSoC Meetup in my college for the Open Source Developers Community where I can share the good work the Public Lab community is doing and how to contribute to Public Lab. Later I hope to organize devsprint for Public Lab where I can help some of my friends/juniors/batchmates make their contributions to the projects of Public Lab.

#### August 19 - August 26 ( Final Evaluations )

- In this period of time, will review all the parts, write documentation wherever needed and finalize the project.
- **Outreach :** Will publish a blog on "The GSoC Experience with Public Lab and the merits of Open Source." on August 25,2019 to motivate the community members to contribute and apply for it the coming year with full zeal and enthusiasm.

### Contributions to Public Lab

#### As of now, I have made the following contributions to Public Lab :

- **Comments :** I have interacted with the community and tried to help with 23 comments on various issues. - [https://kutt.it/0QllL5](https://kutt.it/0QllL5)
- **Issues Opened :** I have opened issues in these 3 projects of Public Lab.
  - Plots2 - [https://kutt.it/Ck0C1H](https://kutt.it/Ck0C1H)
  - Leaflet Environment Layers- [https://kutt.it/6j3bK5](https://kutt.it/6j3bK5)
  - Image Sequencer - [https://kutt.it/A6n1RO](https://kutt.it/A6n1RO)
- **Pull Requests Made :**
  - Leaflet-Environmental-Layers - [https://kutt.it/uFRj4Y](https://kutt.it/uFRj4Y)
  - Plots2 - [https://kutt.it/ZStwVr](https://kutt.it/ZStwVr)

### Experience

I started with my journey of programming and software development in my first year of college when the orientation of the [Open Source Developers Community(OSDC)](https://github.com/osdc) of my college took place. I started with learning HTML, CSS and Bootstrap and then took part in a hackathon organized by the Google Developers Group of our college. There, I made a website which the students can use to get all online resources of education in one portal. After that, I participated in the [Kharagpur Winter of Code](https://kwoc.kossiitkgp.org/) 2017 which has a somewhat GSoC Model and in which you have to contribute to open source projects for the winter break of the college. I passed the final evaluation in it and got this [certificate](https://drive.google.com/file/d/1kEl0mODXLGgEwvwMYhuLHxWZP2qDbGUh/view).

In my second year, I contributed to some of the projects of Open Source Developers Community of my college which helped me learn a lot. I also attended the [dgplug summer training](https://dgplug.org/summertraining18/) which helped me understand the culture of open source, the mailing list etiquettes etc.

I am also very interested about attending meetups and Linux. I recently volunteered for [DebUtsav Delhi](https://debutsav.in/) which was a conference on Debian and F/OSS. I contributed to its website and also the designs of the posters and the banners.

I think that the main reason we study Computer Science is to solve the problems that we face and thus, currently I am exploring Full-stack Web Development in order to develop solutions to some of the major problems our society faces.

---------

### Teamwork

I believe in the principle of team that "it takes both sides to build a bridge" and thus, I have tried to work as much in teams as possible. Me and my 3 more batchmates have made a github organization named ["Crypt0knights"](https://github.com/orgs/Crypt0knights/people) where we consolidate all our academic projects.

I have also participated in some hackathons where me and my team worked very co-ordially in order to develop solution to the problem statement. I have also contributed to various projects of the [Open Source Developers Community ](https://github.com/osdc)of my college and thus, know how to work in a community. Recently, I volunteered for [DebUtsav Delhi](http://www.debutsav.in) where I was guided by the organizers of the conference about the work to be done. We were a team of 25 and worked with full coordination in order to make the event a success.

### Passion

I like Public Lab a lot firstly because of the sane cause for which it is working. I belong to Delhi NCR which sometimes has an Air Quality Index(AQI) ranging from 900-1000 and thus, I know that we need to take steps to prevent pollution and save our environment. If not directly, we can empower the environmentalists who are working for it by contributing to Public Lab.

Secondly, I like the way how Public Lab welcomes the new-comers. I have learnt a lot already and am hoping to learn a lot in the future.

### Audience

There are many students/researchers/scientists/environmentalists who are not able to proceed with their research since they lack the funds to afford research-oriented equipments. The Spectral Workbench project tries to help them by providing them a Goto DIY Spectrometer free of cost which is used a lot in Solid State and Material Sciences Research. Making a Javascript library of the it will help them to use it wherever they want, maybe on Command line, or on Raspberry Pi etc. Instead of searching the codebase of the whole webapp, they can find the code they need in the form a simple and easy to use library.

### Commitment

Yes, I totally understand that this is serious commitment equivalent to a full-time job. I will give my 100% in performing each part of the project and also try to help other community members and newcomers as much as possible. I would love to contribute to Public Lab community even after the summer as I have learned so much here.

I look forward to working with the awesome community of Public Labs for a long time !!!

### Needs

Guidance of my mentors and help as well as coordination from other contributors is all I need. Rest, I will try to give as much as I can to the community since I have learnt so much from it.