---
title: SoC proposal: Expanding Community Toolbox
tagnames: gsoc, soc, soc-2020, soc-2020-proposals
author: icode365
path: /notes/icode365/03-17-2020/soc-proposal-expanding-community-toolbox.md
nid: 23157
uid: 553778

---

![](https://publiclab.org/public/system/images/photos/000/038/571/original/banner.png)

# SoC proposal: Expanding Community Toolbox

by [icode365](../profile/icode365) March 17, 2020 07:48

March 17, 2020 07:48 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [soc-2020](../tag/soc-2020), [soc-2020-proposals](../tag/soc-2020-proposals)

----

## About Me

**Name:** Rishabh Rawat

**Github:** [https://github.com/rishabh570](https://github.com/rishabh570)

**LinkedIn:** [https://www.linkedin.com/in/rishabh570](https://www.linkedin.com/in/rishabh570)

**Email:** [icode365@gmail.com](mailto:icode365@gmail.com)

**Location:** New Delhi, India

**Affiliation:** Maharaja Surajmal Institute of Technology, GGSIPU

**Degree:** Bachelor of Technology in Electronics and Communication Engineering

## Project Description

Community Toolbox is a platform dedicated to community growth and getting insights on organization-wide activities. It follows Model-View-Controller (MVC) like pattern and has unit tests and documentation for getting started with the project. As of now, it is flexible enough that any user/organization can use it just by changing the configurations. So, now is the perfect time to expand Community Toolbox to support GitLab projects as well. Also, introducing some other features that will help in further improving the quality and performance of the website.

## Abstract/Summary

The project aims to add support for Gitlab, increase code quality with unit tests and making code flat (avoiding nested thenables) with async/await, improve the website's performance and some features like showing FTO pull requests' authors, a new way of showing FTO issues (shuffle), hall of fame issues, collapsible divs for different lists along with documentation and creating FTO issues as the project progresses.

## Timeline/Milestones

![image description](/i/38554.jpg "timeline_gsoc_2020.jpg")

## Implementation

### Adding support for GitLab

As of now, the community toolbox contains a config file that enables it to be flexible to any user/organization and can be adopted easily by anyone. But it is the case only for GitHub projects and is not able to host anything other than that. The goal of this feature is to make community toolbox flexible enough so that it can support any platform without having to restructure everything from the ground up.

The basic idea behind the implementation is to make different utilities for different platforms which are loosely coupled and the community-toolbox.js file can easily choose the utility according to the platform chosen in the config file.

![image description](/i/38555.png "adapter.png")

#### Adding a new platform

There are 2 steps to add a new platform,

1. Create the utilities (in the controller layer) for that platform.
2. Add that platform to the import resolver.

#### Selecting a platform

For selecting one of the available platforms, the end-user will only need to change the config file.

As different platforms have a different way of structuring the requests and the response objects are also completely different, we cannot simply reuse the current code as it is, to support any other platform. That's why creating separate utilities for different platforms and plugging the one which is currently needed is a better way of approaching it.

#### Steps:

##### Using async/await to make code flat, small, easier-to-read.

Currently, the code does not use async/await. While there is nothing wrong with the current approach, the code could be more concise and easier-to-read. Let's take an example of initialize function present in community-toolbox.js file.

**Without async/await:**

![image description](/i/38556.png "async-await-before.png")

**With async/await:**

![image description](/i/38557.png "async-await-after.png")

It would be a good first step towards making the code modular and would improve code quality.

##### Add a config file for platform selection.

For selecting the desired platform, a config file (named platform.js ) would be present at the root of the project which would be the only file that the end-user will need to edit according to their needs.
It would contain all the required information that is needed to successfully run the project for that platform. For instance, we don't need any specific information for using GitHub but we need the user ID of the user/org for using GitLab.

- For GitHub:

![image description](/i/38558.png "platform-github.png")

- For GitLab:

![image description](/i/38559.png "platform-gitlab.png")

##### Restructure the naming convention of the keys in the database.

As we are going to support multiple platforms, we need to restructure the naming conventions for the keys we use for the indexedDB database. For instance, we use "repos" for storing the repositories' list as of now, but if the selected platform is GitLab, then we cannot use the aforementioned repositories' list because the object structure for that would be different than what GitLab offers and it would result in an error.
So, we need to restructure the way we name the keys and writing supporting documentation for the naming conventions would be a good follow-up.

##### Add import resolver which helps in selecting the required utility.

As we would have multiple utilities for various different platforms, we need a way to plug the utility that is required by the current platform. This can be done with the help of an import resolver which will import only the required utilities. This is where the loose coupling of utilities comes into play.

![image description](/i/38560.png "import-resolver.png")

##### Add UI and issues layer for GitLab.

Once we reach this milestone, we would have all the pre-requisites in place and now we can focus on creating another layer of utility for GitLab. At this point, we will start by making the UI layer and all the issues related layer. This would help in plugging the required UI functions to show the data to the user. As the data sent by GitHub and GitLab is different, we cannot use the same UI modules that we currently have, for both of them. This is basically the main reason for writing separate utilities for every platform that will get added in the future.
After the changes, the structure of UI module would look something like,

![image description](/i/38561.png "ui.png")

For issues, GitLab doesn't allow fetching issues for the whole org at once if the request is not authenticated. It requires a Personal Access Token to do that and it is not what we want in our use-case. So, here we need some strategy to show stale issues, fto and fto-candidate issues for the whole org when "#r=all" is selected by the user.

One possible way could be to continue to show all the issues repository-wise and when "#r=all" is selected, make a fresh call to fetch issues from the top 15-20 repositories. As the rate-limit of GitLab API 10 requests/second, it is possible and it would also promise fresh list every time.

##### Add contributors layer for GitLab.

After we have created the UI and all the issues related layer for GitLab, we would start working on the contributors' layer. We are not using any library for fetching the data from GitLab API as we do in GitHub (github-api-simple library), we will simply use "axios" for the requests and handling the responses ourselves.
As a follow-up, we can change all the network requests that we make in the current code using "fetch" to use "axios" because it cuts down the redundant code that you need to write while using fetch.
In this utility, some files are not required that are currently present for GitHub, like the one which fetches all the contributors for a particular repository (fetchAllRepoContribs.js) because of GitLab API takes care of that.

##### Add recent contributors layer for GitLab.

After adding the contributors' layer, the only part remaining would be the recent contributors' layer and we would have our GitLab utility ready to use after achieving this milestone. As I mentioned before, there are only two steps for adding a new platform and at this stage, both of those will get finished. So, we will have our GitLab layer ready to use.
Overall, the controller layer would have platform-specific modules that will contain all the required utility files for that module. Similar to the UI module, it would contain two sub-modules for GitHub and GitLab.

![image description](/i/38562.png "recent-contribs-util.png")

##### Write unit tests for the GitLab layer.

Just like we have unit tests for our controller layer, we will create tests for the newly created GitLab layer and that may also require restructuring the test suites. After this stage, we would be able to deploy & test this big feature in production.

##### Add the documentation for the changes.

Finally, documenting the changes regarding the GitLab layer would highlight how to add support for a new platform, how to use existing platforms and all the required changes in other parts of the projects.

### Hall of fame issues

The idea for this was discussed in [this](https://github.com/publiclab/community-toolbox/issues/257) issue thread. This would take the shape similar to other issues list that are currently present on the website. The way to go about it is adding a "hall-of-fame" label to the issues that are potential candidates for the same. A list at the bottom of the page would be showing these issues so that people can take it up if they want to resolve some of the old ones!

![image description](/i/38563.png "hall-of-fame.png")

### Collapsible divs for lists

As the data showed on the website is growing, the scroll is only getting longer & longer. Keeping in mind that not everyone would be looking for every single detail that is shown on the page, we could have collapsible divs which would help in a long scroll problem.

![image description](/i/38564.gif "collapsible.gif")

Here, we will need some way of indicating that this div is currently collapsed (or not) so that people know that it needs to be clicked to show or hide the list.

### Shuffled FTO issues

The idea of this is to implement a mechanism for shuffling unclaimed FTO issues which would help in avoiding clashes and will also reduce the long list of FTOs. Currently, the list shows all the FTO issues for a particular repository whether claimed or not.
One way could be to check if there is any PR open for it but that would not be reliable because it is not guaranteed for a claimed issue to have an open Pull Request as well.
The main roadblock for this is to know which issues are claimed and which are not. Any suggestions are welcome. The UI would be the last thing to discuss in this but it could look something like,

![image description](/i/38565.gif "shuffle-issues.gif")

### Improve website performance, accessibility, and PWA

As the report of Audit states in the chrome developer tools (shown below), there are a couple of steps that need to be taken to improve the performance, accessibility and progressive web app (PWA) state for the website. Currently, the first meaning paint renders at around 10sec which can be improved by following the guidelines shown in the report.
Some of the measures that can be taken are,

- Render blocking javascript,
- Minification of files,
- Minimizing the main thread work, etc.

Other than improving performance, there are some other steps that need to be taken to improve the accessibility of the website. Some of those include,

- Taking care of best practices,
- Meta tags, and
- some manual checks.

Here are some of the things pointed out by the Audit report,

![image description](/i/38567.png "audit-1.png")

![image description](/i/38568.png "audit-2.png")

### Show a list of people working on FTO issues

Just like the list of FTO issue authors, it would be great to see newcomers working on FTO issues and it will also help them in quick reviews and guidance from the community. We can utilize the issue object to find if there's any pull request open related to that issue. GitHub provides this information in the issue object and GitLab also has its way of showing the related merge request.

![image description](/i/38569.png "fto-pr-github.png")

![image description](/i/38570.png "fto-pr-gitlab.png")

By utilizing this information, we can generate a list of people working on a fto/fto-candidate issue.

## Needs

I'll be needing the guidance of my mentor(s) and the community.

## Contributions

- [Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Arishabh570+org%3Apubliclab&type=Issues)

### Contributions to Community Toolbox

- [Pull Requests](https://github.com/publiclab/community-toolbox/pulls?q=is%3Apr+author%3Arishabh570),
- [Issues](https://github.com/publiclab/community-toolbox/issues?utf8=%E2%9C%93&q=is%3Aissue+author%3Arishabh570+)

### Contributions to other repositories

- **Issues:**
  - [plots2](https://github.com/publiclab/plots2/issues/created_by/rishabh570)
  - [image-sequencer](https://github.com/publiclab/image-sequencer/issues/created_by/rishabh570)
- **Pull Requests:**
  - [image-sequencer](https://github.com/publiclab/image-sequencer/pulls?q=is%3Apr+author%3Arishabh570+is%3Aclosed)
  - [leaflet-environmental-layers](https://github.com/publiclab/leaflet-environmental-layers/pulls?q=is%3Apr+author%3Arishabh570+is%3Aclosed)

## Experience

I am currently in my final year of Engineering and I've been contributing to PublicLab since Oct 2018\. I've worked on various personal projects & currently working on a node.js command line utility which show the live cricket match stats on the terminal ([https://github.com/rishabh570/cricfeed](https://github.com/rishabh570/cricfeed)).
During my summer internship at Malik Ventures I have worked on two of their projects (harvin.academy and [radixhealthcare.org](http://radixhealthcare.org)) which required the knowledge of node.js/express framework, mongoDB database. I have also worked with coding blocks as a part of their annual summer of code event named Bountiful Open Source Summer (BOSS) and ranked in top 10 winners.
Some of my other personal projects include Django based website named refresher ([https://github.com/rishabh570/refresher](https://github.com/rishabh570/refresher)), python based CLI app that tells about famous landmarks near you ([https://github.com/rishabh570/aroundme](https://github.com/rishabh570/aroundme)) and a firefox add-on for dynamic themes ([https://github.com/rishabh570/themed](https://github.com/rishabh570/themed)).

## Teamwork

I have participated in various team hackathons and events. As a part of my summer internship with Malik Ventures, I've worked with a team of 6 engineers on two fullstack projects (harvin.academy) and ([radixhealthcare.org](http://radixhealthcare.org)). I've also worked with PublicLab as a student developer during Google Summer of Code 2019 and mentored students during Google Code-In 2018\.

## Passion

Working with PublicLab helped me learn & implement things which really impacts people and the trust and support from mentors helps in moving forward with the project. With this project, I would love to expand the reach of community toolbox and make it available to people outside of GitHub.

## Audience

This project would help in extending the reach of community toolbox to a larger group of people so that platforms don't restrict people from adopting it.

## Commitment

Yes, I understand that it is a big commitment and I will be fully commited to the project.