---
title: 'Internationalize Public Lab : GSoC 2016'
tagnames: software, gsoc, coding, hidden:response, gsoc-2016, gsoc-2016-proposals, response:12827
author: sudheesh001
path: /notes/sudheesh001/03-25-2016/internationalize-public-lab-gsoc-2016.md
nid: 12886
uid: 468998

---

![](https://publiclab.org/public/system/images/photos/000/015/209/original/localization.jpg)

# Internationalize Public Lab : GSoC 2016

by [sudheesh001](../profile/sudheesh001) March 25, 2016 06:34

March 25, 2016 06:34 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [coding](../tag/coding), [hidden:response](../tag/hidden:response), [gsoc-2016](../tag/gsoc-2016), [gsoc-2016-proposals](../tag/gsoc-2016-proposals), [response:12827](../tag/response:12827)

----

**Name**: Sudheesh Singanamalla

**Affiliation**: National Institute of Technology, Warangal & Indian School of Business, Hyderabad

**Location**: Hyderabad, India

**Email**: sudheesh95@gmail.com , ssudheesh@student.nitw.ac.in , sudheesh_1543@tep.isb.edu

**Phone**: +91-9642491155

**Project(s) you're working on or want to, i.e. Spectral Workbench or MapKnitter:** Publiclab.org

**Project title:** Internationalize publiclab.org

**Project Description:** Internationalization and having the application support multiple languages is very much required to ensure that software can be reached out to a wide population who are more comfortable in the language they know. Most open software have i18n and l10n (internationalization and localization) teams to translate the strings in the software into different other ones. i18n integration would mean the community can successfully translate the strings of the application in the language they want to. This can later be achieved / sourced from websites like crowdin or Transifex.

**Abstract/summary (<20 words):** Internationalization is the process of getting the products and services ready in a modular fashion to be translated into multiple languages so that they can easily be adapted to local languages and cultures.

**Describe the need for the project:**
Public lab currently uses tags in the format of lang:en, lang:es for telling the users about the language on the page and doesn't have an i18n or a l10n platform in place. This project would get public lab ready for sourcing l10n from the different contributors in the community. Once this project is completed, people can successfully localize different string present in the application like the header / footer etc.., using an online service like crowdin or Transifex or github to source the translations. I believe the best way to do so would be to use github as many projects with localization do the same. This also means that there are localizers in the community who successfully understand the concepts of pull requests, branches and commits and could contribute to the localization of the application.

**How will your project meet this need:**
Internationalization and localization is one of the most important features that any web application needs so that the web application can be used by a wide range of people in different countries and cultures in the languages they are familiar and comfortable with. Having this integration would ensure that the communities can contribute language translations to the project and thus increase the outreach of this project.

###What I want to do

I want ot use the ruby i18n [gem](https://github.com/svenfuchs/i18n) or [rails l10n](http://guides.rubyonrails.org/i18n.html) and build the components in the plots2 web application so that it can support localization. To do this I have the following weekly timeline to accomplish this task. I'll be blogging using the public lab system.

**Week 1:** Get accustomed to the i18n gem from ruby and integrate it with the plots2 application.

**Week 2:** Strip the contents from the header and footer templates and start with l10n of these templates

**Week 3-5:** Start to run the gem on the localization on the views/*

**Week 5-7:** It is also possible to make the l10ns on the client side using [l10n.js](https://github.com/jdm/asknot/blob/master/l10n.js) and have an i18n.po file which could be used to receive the translation contributions from the conrtibutors

**Week 7-8:** Develop an internal dashboard module within the plots2 application so that the user privileges can be leveraged to run own l10n system within the app

**Week 8 - 10:** Build the dashboard and the l10n service in the app so that its easier for contributors to build the application

**Week 10+:** Buffer period to make up for any unforeseen delays, Documentation and testings.

###My attempt and results

I've successfully set up the plots2 web application on my local computer and have contributed [2 patches](https://github.com/publiclab/plots2/pulls?q=is%3Apr+is%3Aclosed+author%3Asudheesh001) and filed [one issue](https://github.com/publiclab/plots2/issues?q=is%3Aissue+is%3Aclosed+author%3Asudheesh001) on the portal.

**Setup Have you forked the relevant codebases? Installed them in a dev environment such as Cloud9.io? Need help doing so? Please provide a link to each of the above.**

Yes i've forked the relevant codebases and successfully set it up. I use sublime text editors and have set up the ruby environment to build, run and test the plots2 application. https://github.com/sudheesh001/plots2/

**Experience Describe your technical background; what languages you use, what projects you've contributed to before, links to GitHub or other code repositories or samples. Have you read the Contributor Guidelines at https://publiclab.org/wiki/contributing-to-public-lab-software and are you comfortable submitting pull requests?**

I’ve previously contributed to a lot of organizations as a contributor and actively maintain many node and python libraries which have more than 5000+ downloads each. I’ve also created the python API for loklak.org and have been mentoring the students in Google Code In 2015 with FOSSASIA to build and enhance other libraries for loklak for ruby and node.js.

My contributions to various projects: https://gist.github.com/sudheesh001/752e4af2115568284cbc

I also maintain the gems for loklak and the python and node libraries for the same. I've previously worked on ruby for an coursera module. I've previously worked with ruby on rails and built very small applications and also with Sinatra ruby.

**Teamwork Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient.**

I have been an intern with Red Hat R&D Bangalore working on visualizations, data mining and internal tools for interfacing bugzilla and making it easier for managers to manage large teams of openshift and glusterfs, monitor the progress and the work that's happening daily or in the weekly sprint cycles.

I have also interned with the Visual Studio & Corporate Functions and Finance team at Microsoft IDC Hyderabad working on a proof of concept for a patent integration into visual studio. In my internship I had to work with a team present in multiple countries and timezones and worked with dynamically changing needs. For the functionality I had to implement, I had to also collaborate with other teams like the Windows team, automation teams and file bugs and enhancement requests. I work well with large as well as small teams. When I am stuck I generally turn to google for help and try on my own and in case even after genuinely searching for the solution and trying them out fails I reach out for help within the community.

### Why I'm interested

Internationalizing publiclab.org will help more members of the community access the content and add value to the research notes etc.., At the same time it'd also mean greater reach for public lab in areas where its peneteration has been low due to language barriers. Adding such a high value to the organization means a lot and gives a great deal of personal satisfaction to see growing and thriving communities using an open source project to its full potential.

After my GSoC period I'll continue my contributions to publiclab in terms of its code, taking part in active discussions and adding value to them while at the same time mentoring and helping newer contributors onboard the development to public lab. Open source has always been a passion to me and I would love to add more value to a new community.
