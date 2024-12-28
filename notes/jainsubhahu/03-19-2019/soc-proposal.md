---
title: "SoC proposal: Community-toolbox"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals'
author: jainsubhahu
path: /notes/jainsubhahu/03-19-2019/soc-proposal.md
nid: 18780
uid: 558495
cids: 22235,23329,23338,23343,23346,23414,23757,23790,23920
---

![](https://publiclab.org/public/system/images/photos/000/030/298/original/screenshot-code.publiclab.org-2019.03.20-01-49-15.png)

# SoC proposal: Community-toolbox

by [jainsubhahu](/profile/jainsubhahu) | March 19, 2019 20:19

March 19, 2019 20:19 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [first-time-poster](/tag/first-time-poster), [rgsoc-2019](/tag/rgsoc-2019), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [soc-2019-proposals](/tag/soc-2019-proposals)

----

(This template is for students applying to summer code programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals](https://publiclab.org/post?n=899&tags=soc,soc-2019,soc-2019-proposals) You can delete this line once you've started filling it out.)

---------

## About me

**Name:** Subhahu Jain

**Github:** [https://github.com/subhahu123](https://github.com/subhahu123)

**LinkedIn:** [www.linkedin.com/in/jainsubhahu](http://www.linkedin.com/in/jainsubhahu)

**Affiliation** IP University , Delhi

**Location:** Delhi

## Project description

As we know community toolbox plays a big role for newcomers to the open source . It provides a good start to newcomers to work on project by providing issues or bugs for first- timers which will give them a good start.
The ideas includes Moving to mvc , adding service worker ( for PWA ) , language translator plugin ( different language ) , documentation , testing and adding some new features like filter by repos , language( like js,ruby ) and lot more\_

### Abstract/summary (<20 words):

we can divide the implementation work in three parts

**1\.** Move To MVC Framework ( using angular ) and add video slider ( beginners videos )

**2\.** Add new features like filters and toggling view , service worker, language translator

**3\.** Adding testing , documentation and Fixing bugs ( only necessary ).

### Problem

Currently newcomers get list of issues which is not sorted according to their needs . Adding filteration allow them to select issues according to their choice and skills ( language they know ) . will make a pwa apps so that it works offline also.

### Implementation

#### **Move to MVC Framework ( angular )**

Currently project is not based upon the MVC framework .I will convert this project to MVC using Angular Framework . This will allow us to easily bind data with html or document for painting it .
By using angular ( MVC ) we can track or divide the entire page into different section or components . So that it become easy for developers to work with the project to add new features to it . I will shift everything to angular like urlhashing , local storage etc.
Everything will implemented in angular as our current project have.

I have created a `demo version` of community toolbox ( with angular)

**[https://swipper-view-fix-complete-issue-complete-notcolor.stackblitz.io/](https://swipper-view-fix-complete-issue-complete-notcolor.stackblitz.io/)**  
[![screenshot-stackblitz.com-2019.03.21-15-33-04.png](/i/30336)](/i/30336?s=o)

---------

---------

#### **Add video slider ( for beginners videos )**

Will add the video slider section to website `for beginners` so that before starting contribution they can learn the required or necessary things that one should need to know before jumping into open source like `git`, `github` , `how to make pr` etc. We can create our own channel or playlist ( on youtube ) or can include the hardcoded video url.

REFerence : [link text](https://github.com/publiclab/community-toolbox/pull/153) ( [https://github.com/publiclab/community-toolbox/pull/153](https://github.com/publiclab/community-toolbox/pull/153) )  
[![screenshot-user-images.githubusercontent.com-2019.03.21-15-38-13.png](/i/30337)](/i/30337?s=o)

---------

---------

### **Adding new Features**

#### **Adding filters and toggling view**

**Add filter in the contributors** ( dropdown )

- `filter` by repo
- `sort` by no. of contribution ( `commits` )

![Kitten](/i/30333.png "A cute kitten")

---------

**Add search bar in filter**

![image description](/i/31248.png "screenshot-github.com-2019.04.08-00-45-42.png")

**Add filter in issues** ( dropdown )

![image description](/i/31247.png "screenshot-github.com-2019.04.08-00-56-49.png")

- filter by `repo`
- filter by `language` ( like js or ruby ,html )
Add filter in the issues so that beginners can select issues according to projects and language ( like js or ruby )

---------

---------

#### **List | card UI view**

Will make a `toggle` button by which we can toggle between the `card` and `list view` according to our needs . so we can have a good view and can also use it for copying the list of contributors

Reference : [link text](https://github.com/publiclab/community-toolbox/pull/145) ( h[ttps://github.com/publiclab/community-toolbox/pull/145](http://ttps//github.com/publiclab/community-toolbox/pull/145 "http://ttps//github.com/publiclab/community-toolbox/pull/145") ) ( jywarren comment )

---------

[![Peek_2019-03-21_14-47.gif](/i/30335)](/i/30335?s=o)

---------

---------

#### **Adding the language translator**

Internationalization is the process of designing and preparing your app to be usable in different languages. Localization is the process of translating your internationalized app into specific languages for particular locales.
We are going to use the angular i18n attribute with a custom id, by doing this every translation unit generated by the i18n extractor tool is more readable and easy to maintain. We are also going to add a description and a meaning to the i18n attribute, this helps angular to improve the accuracy of the translation.

![image description](/i/31245.jpg "angular-internationalization-i18n-multi-language-app-fb.jpg")\*\*  
\*\*

\*\*  
\*\*![image description](/i/31246.png "screenshot-publiclab.org-2019.04.08-01-06-53.png")

Will add the google language translator plugin to have the website in various language
so non-native english person can have a knowledge about our website .

---------

---------

#### **Add service worker ( for pwa )**

![image description](/i/31249.png "sw-cache.png") A service worker is a type of web worker. It's essentially a JavaScript file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.
Will add service worker to website so that it can work offline also. so if someone is out of internet he/she can still use the website .  
![Kitten](/i/30338.jpg "A cute kitten")

---------

---------

#### **Add modal view of contributors**

**Suggested by jywarren**

Will add the modal view for contributors so if any one clicks on contributor , it will open a modal view of it with contributor details
It will include:

- contibutions
- issue list

---------

---------

#### **Add themes**

Will add a different variety of themes to the website so anyone can the view according to their needs.

#### **Adding surge for continuous deployment**

![image description](/i/31252.png "Screen-Shot-2018-01-02-at-12.12.30-AM.png")

Surge is static web publishing for Front-End Developers, right from the CLI.
Surge is a CLI to deploy any directory to the web with just one command. Simply type surge from the root of your project
we will be using surge for continuous deployment of our website
it will deploy website for every PR ( pull request ) also so that other developers can easily review it .

![image description](/i/31253.png "screenshot-github.com-2019.04.08-01-56-58.png")

#### **Adding Test**

![image description](/i/31239.png "1_EKbZZOcx2IfRAe4bYF_eeQ.png")
As we move forward there is a possiblity that our project has some bugs which we need to fix
So we also have to write tests which will automatically detect that whether changes are breaking the project or not.
All tests file have an `.spec.ts` extension where we will write tests using `@angular/testing` package

#### **Adding codecov for coverage report of testing**

![image description](/i/31250.png "8226205.png")

Codecov is a reporting tool that is intended to process any coverage report format into a format that is standard across Codecov. You may change the configuration of how Codecov processes reports and expresses coverage information.
The code coverage percentages let you estimate how much of your code is tested.
To Run Execute : ng build --no-watch --code-coverage

![image description](/i/31251.png "screenshot-angular.io-2019.04.08-01-34-53.png")

#### **Documentation**

Add documentation of how we are extracting data from api according to requirements

tutorial of how to deploy project to firebase , heroku, or using github pages

#### **Create FTO issue**

Fix the necessary bugs But will skip some small issues for begineers which we can later open them for first-timer issue

### Timeline or Milestones

  
![image description](/i/31254.png "screenshot-docs.google.com-2019.04.08-02-27-44.png")

  
  
### First-time Contribution

Links to show my recent activity:

- Comments, to show overall community involvement (like helping others): [https://github.com/search?utf8=✓&q=commenter%3Asubhahu123+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Asubhahu123+org%3Apubliclab&type=Issues)
- Open issues: [https://github.com/publiclab/image-sequencer/issues/created\_by/subhahu123](https://github.com/publiclab/image-sequencer/issues/created_by/subhahu123) , [https://github.com/publiclab/community-toolbox/issues/created\_by/subhahu123](https://github.com/publiclab/community-toolbox/issues/created_by/subhahu123)
- Closed PRs: [https://github.com/publiclab/community-toolbox/pulls?q=is%3Apr+author%3Asubhahu123+is%3Aclosed](https://github.com/publiclab/community-toolbox/pulls?q=is%3Apr+author%3Asubhahu123+is%3Aclosed)
- Open PRs: [https://github.com/publiclab/community-toolbox/pulls/subhahu123](https://github.com/publiclab/community-toolbox/pulls/subhahu123)

### Experience

i started programming 1.5 year back with competitive programming on codechef . My first language was C language , then i slowly starts to move towards the web development with HTML and CSS and then javascript , angular and typescript .

My first project was a webiste which was for GCI participants .
My previous project was a front-end of a search engine which was based on angular and yacy-grid .

### Teamwork

Recently i have taken part in team event which was `smart india hackathon` , where we was required to solve a problem based on it we have to make our presentation or proposal

### Passion

I m passionate about programming like competitive programming . i love solving probelms . publci lab is very helpful for beginners to get into the open source because of constant momentum , responsive people , variety of projects etc.

### Audience

My project will be helpful for the developers who want to work on the project because of MVC . Moreover , it also provide more features to beginners to get started into the world of open source .

### Commitment

Yes, I understand that. I would be fully commited to my work.I will be in touch with my mentors and other co-developers on Gitter as well as on GitHub.I will work for more than 48 hours per week(8+ hours a day).
