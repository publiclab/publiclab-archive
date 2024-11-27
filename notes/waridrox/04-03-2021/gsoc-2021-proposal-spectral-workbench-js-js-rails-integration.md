---
nid: 26134
title: GSoC 2021 Proposal: spectral-workbench.js JS/Rails integration
path: public/static/notes/waridrox/04-03-2021/gsoc-2021-proposal-spectral-workbench-js-js-rails-integration.md
uid: 745996
tagnames: soc,first-time-poster,gsoc-2021,gsoc-2021-proposals
---

# GSoC 2021 Proposal: spectral-workbench.js JS/Rails integration

# About Me

Name: [Mohammad Warid](https://www.linkedin.com/in/mohd-warid-b64187a3/)

Email: [mohdwarid4@gmail.com](mailto:mohdwarid4@gmail.com), [mohammadwarid\_2k19en038@dtu.ac.in](mailto:mohammadwarid_2k19en038@dtu.ac.in)

Github: [https://github.com/waridrox](https://github.com/waridrox)

Project Title: [spectral-workbench.js JS/Rails integration](https://github.com/publiclab/spectral-workbench.js/issues/219#partial-discussion-header:~:text=Integrate%20new%20Capture%20interface%20with%20upstream%20Rails%20application)

Affiliation: [Delhi Technological University](http://dtu.ac.in/)

Location: Delhi, India

Timezone: Indian Standard Time (UTC +05:30)

Field of study: Environmental Engineering

# Project Description

---------

## Abstract/Summary (<20 Words)

Improving live-capture interface at Spectral Workbench at [https://publiclab.github.io/spectral-workbench.js/examples/new-capture/](https://publiclab.github.io/spectral-workbench.js/examples/new-capture/) to incorporate fetching of recent spectral calibrations and saving the user data after login.

## Problems

Currently, Public Lab has a renowned web app to collect, analyse the spectral data obtained from Public Lab DIY spectrometers and other spectrometers that can even be shared with the community. Its main purpose is to bring cost-effective spectral science close to anyone who wants to experience or learn no matter what their education background is.

To achieve this there are 2 key components -

1. Spectral workbench.js library which can be incorporated into any app
as a standalone library and can be custom tuned according to the
needs.
2. Spectral workbench ruby on rails web app which integrates the above
library to provide even more features like user login to save the
spectral data to a database, calibrating the spectral data using a
base spectrum dataset to enhance the spectral data acquired after
the capturing. This data then, can even be exported to different
file formats like JSON, CSV, CSV (raw) and XML pertaining to the
requirements of the user.

The latest spectral workbench web app though, doesn't have a proper workflow to fetch recent calibrations which the old spectral workbench app had but which was not greatly integrated with the Rails backend code. This has led us to a lack of consistency across the spectral workbench web app, with users landing on different versions and getting their spectral data analysed and facing issues.

To overcome this shortcoming, we need to adapt the current spectral workbench app's live capture and calibration application code to make it compatible with the Rails server drawing some insights from the legacy code to meet the modern standards. In addition to this, we can make some enhancements to make the current version more user-friendly.

## Project Goals and its implementation

**NOTE** - _All the mockups/prototype and code samples are just for reference. They can be revised/updated according to the requirements of the project, moderator preferences and suggestions provided by mentors._

_Workflow is explained in the later part of the proposal_

## 1\. Capture code re-visited

- The current capture code at
[https://github.com/publiclab/spectral-workbench/blob/main/app/views/capture/index.html.erb](https://github.com/publiclab/spectral-workbench/blob/main/app/views/capture/index.html.erb)
is devoid of using the spectral workbench.js library for capturing
the spectral data in the live capture feed.
- The graphical interface integration on the other hand, in spectral
workbench rails app already utilises the spectral workbench.js
library.
- This inconsistency has led to the capture code of the
spectralworkbench app to use unnecessary disorganised JS code to
achieve the result.

_Graphical interface integration in spectral workbench app utilising the spectral workbench.js library._

[![calibrated.jpg](/i/43179)](/i/43179?s=o)

- Thus, the capture code would be replaced with the new capture code
utilising the pre-existing spectralworkbench.js library after adding
the necessary enhancements to integrate the capture functionality in
the rails app drawing some insights from the graphical spectral
interface feature.
- This would then be stored in a beta file like
`/app/views/capture/index2.html.erb` to avoid breaking
functionalities in the current version.

## 2\. Need for calibration

- To ensure that the original recorded spectral data obtained is in the
best possible state, the user needs to calibrate it with a reference
spectrum.
- A CFL spectrum is generally recommended as one can distinguish the
peaks for the RGB colours easily thereby adjusting and making the
original parent spectrum more accurate.
- To better make the user understand about the calibration and its
benefits, they shall be directed to appropriate blog posts /
resourceful video links that will help them to understand the need
for calibration in the first place and calibrate their spectral data
accordingly.

## 3\. Login Prompt

- In order to save, share or calibrate the spectral data, the user must
be logged in to avail these functionalities.
- Thus, a prompt regarding the login authentication should be set up to
encourage users to create an account on spectral workbench app and
contribute their spectral data to a massive open source database.

[![Screenshot_2021-04-04_at_2.35.24_AM.png](/i/43127)](/i/43127?s=o)

_Sample Login prompt from legacy spectral workbench app that may require some tweaking before implementing in the current app._

## 4\. Fetching recent calibrations

1. Apart from the aforementioned recommended calibration spectrum, the
users should be able to create and choose any other suitable
calibration from their end, as and when required.
2. To accomplish this, the spectral data will need to be saved into a
database, and when the option is selected to calibrate the original
spectral data, then the corresponding calibration data will be
superimposed onto to the original spectral data to generate the new
calibrated spectral data.
3. This would require the user to log-in the app in order to link and
store the data into the database with their respective accounts.
Users can also revisit their saved data anytime in the future.
4. The user can also fork calibrations from other users and apply them to their test data to better suit the alignment of the RGB peaks.
5. Thus, in summary, the reference calibration needs to be added by the
user, stored in the database and fetched in the next step before it
is applied to the original spectrum.
6. Fetching the recent calibrations would involve querying the data
from the database which would then be represented in the form of a
dropdown or a list where the user can choose the desired calibration
result with ease and proceed forward.

More importantly though, while integrating the fetching of recent calibrated spectral data to the app the following pointers need to be considered -

- The fetched calibrated data contains a unique calibration id provided
at the time of saving.
- The fetched data contains a name of the calibration spectrum.
- The fetched calibrated data also needs to be segregated according to
the type of calibration if the user wishes applies the calibration
after forking the data.
- Time of calibration should be displayed which would change
dynamically.

[![Using_spectrum_210762_test2_(captured_2_days_ago)_as_a_calib.jpg](/i/43176)](/i/43176?s=o)

_Calibration dropdown example representing the newly fetched calibrated data_

**The above implementation steps can be better visualised in the proposed workflow:**

[![Data_flow_diagram_(2).jpg](/i/43177)](/i/43177?s=o)

- Before fetching the recent calibrations, the user needs to store the
data in the db even if the data is uncalibrated.
- After saving the calibrated data in a db, the recent calibrations
would be fetched and displayed in a dropdown.

This can be achieved by working on the following pseudo code:

[![carbon_(8).png](/i/43180)](/i/43180?s=o)

With the backend controller directing the spectral data to the rails app -

[![carbon_(9).png](/i/43181)](/i/43181?s=o)

## 5\. User feedback for new calibration added or deleted

[![Screenshot_2021-04-08_at_10.38.32_PM.jpg](/i/43178)](/i/43178?s=o)

- The app is able to fetch the recent calibrations every 10 seconds.
- It would be helpful to notify the users that a new calibration has
been added to the dropdown list by using the [rails Action
cable](https://guides.rubyonrails.org/action_cable_overview.html)
WebSockets to seamlessly integrate in the app that would change the
title of the browser tab to something like -
**"New Spectral Calibration added / deleted."** or create a noty notification for the same on the current browser tab.

[![Browser-Title-Bar-Animation.gif](/i/43186)](/i/43186?s=o)

## 6\. Scaling of x-axis (wavelength) on live capture interface

- Sometimes, due to a wide/narrow range of distribution of the spectral
wavelength in the live spectral graph interface, scaling may be
required.
- Thus, the live spectral graph should be able to scale the original
graph after multiplying by a scaling factor taken as an input by the
user or if there are calibrations already calibrated by the user,
then the user should be able to apply those calibrations which will
update the wavelength values on the x-axis accordingly.

[![scaling_x.png](/i/43132)](/i/43132?s=o)

_Scaling factor input prompt_

---------

[![scaling_sine.png](/i/43133)](/i/43133?s=o)

_Scaling factor analogy in sin(3x) graph. Due to the scaling factor, i.e. 3, the values have been shifted that would otherwise lie on their original position as denoted by the graph of sin(x)._

[![current_x-axis.png](/i/43130)](/i/43130?s=o)

_Absence of scaled x-axis which should denote the wavelength in nm._

[![proposed_x-axis.png](/i/43131)](/i/43131?s=o)

_Proposed fix in accordance with legacy spectral workbench app._

There should also be labels stating **Intensity** and **Wavelength** that is represented by the x-axis and the y-axis.

## 7\. Other Enhancements / Deliverables

### Support for rear camera on mobile devices

- We live in a mobile-first world where smartphone is more accessible
than ever. Currently, the live capture interface takes the front
camera of the smartphones as the only input to capture the spectral
data.
- This camera view may prove to be difficult for the users since it
involves aligning the spectrum without any sort of feedback.
- Thus, rear camera support would be added to ease the spectral capture
process on mobile devices after which the user would be able to get
the precise alignment of the spectrum due to increased reliability of
the preview on their screens.

### iOS devices support

- Due to various security and incompatibility reasons in Safari web
browsers on iOS with WebRTC, live capture feed is unable to load on
spectral workbench.
- Fortunately, this problem has now been fixed with MobileSafari/WebKit
on iOS 11\. Thus, support for iOS devices would be added to increase
the user base thereby increasing the community involvement with the
app.

### Warn user before leaving web pages with unsaved changes

- The current behaviour in the spectral workbench app on the saving
spectrum page and other web pages, when the users accidentally leaves
the web page or reloads, doesn't prompt the users if they are sure
about leaving the web page.

[![save_behaviour.png](/i/43134)](/i/43134?s=o)

- This may lead to accidental loss of user data which can be prevented
by handling a `beforeunload` event to show prompts before exiting the
web page -

[![beforeunload.png](/i/43136)](/i/43136?s=o)

### Small UI elements fixes

[![Screenshot_2021-04-06_at_2.28.24_PM.png](/i/43151)](/i/43151?s=o)

_Imperfect alignment of cross-section line when rotate video option is selected in the live capture interface._

_And other fixes related to element alignment and overall theming of the app._

### Implementing accessibility features

#### Accessibility with keyboard

- To further ensure maximum compatibility for the users on the spectral
workbench app, we can implement keyboard accessibility and follow
keyboard accessibility guidelines.
- The idea is that certain users navigate the internet using a keyboard
rather than the mouse. This is achieved by pressing the _Tab_ button
to navigate across various elements on a website (or _Shift+Tab_ to
navigate back one step) and interacting with the elements like menus,
links, form fields, buttons and controls by pressing keys like
_Enter_, _space_, _arrow keys_, etc.

[![accessibility.png](/i/43139)](/i/43139?s=o)

Sample website displaying sections on a webpage whose elements can be accessed just by hitting some commonly used keys like _Tab_ or _arrow keys_.

#### Using contrasting colours for better readability

- A quick analysis of the spectral workbench website on the _[Axe web
accessibility
tool](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)_
highlights areas where there are colour contrast issues.

[![Adobe_Post_20210411_2257430.7410498120319227.png](/i/43229)](/i/43229?s=o)

- This may be unsatisfactory for people with visual impairments and
should thus be fixed in accordance with the [WCAG guidelines](https://webaim.org/articles/contrast/#ratio:~:text=WCAG%202%20%22Contrast%20Ratio%22,-In) to make
the app even more accessible.

### Testing

- Since in the project, there is an involvement of user login
authentication, capturing the spectrum (from live camera feed using
sample clip / adding the spectrum as an image), adding the
calibration, updating the database with the calibration data and
finally applying the calibration to the spectral data, system tests
would make the most sense here as we can then check upon the whole
functionality of the app with these operations in one go.
- Apart from this unit tests and functional tests will be added
wherever applicable.

---------

## Timeline

**Community Bonding period --**

- Discuss project goals and deliverables with mentors along with features that have to be removed/need to be added to the new version.
- Create GitHub projects milestones to have structured milestone criteria that needs to be met.
- Go through the code-base thoroughly and issues, set priorities for issues people using the software are facing and work on fixing thereby implementing them in the new code-base.

[![project-2021-04-11_16-04_PM.jpg](/i/43230)](/i/43230?s=o)

## Contributions

I have been a fairly active member contributing wherever I possibly can across different repositories of PublicLab. More importantly, I've learnt how an active community works by helping each other out through engaging in discussions for ideas, reviewing PR's of other contributors, opening first-time-only issues for new contributors and also helping each other out with errors.

[Comments](https://github.com/search?p=1&q=commenter:waridrox%20org:publiclab&type=Issues&utf8=%E2%9C%93)

[Issues](https://github.com/issues?q=is:issue%20author:waridrox%20archived:false%20org:publiclab%20is:open)

[Pull Requests](https://github.com/pulls?q=is:pr%20author:waridrox%20archived:false%20org:publiclab%20is:open)

[Reviewed PRs](https://github.com/publiclab/plots2/pulls?q=is:pr%20reviewed-by:waridrox%20is:closed%20)

#### Creation of FTOs

FTOs or `first-timer-only-issues` are issues undertaken by newcomers to contribute and get familiar with the process of making a PR.
Having started contributions with PublicLab through a FTO issue myself, I believe newcomers joining the community would be looking for the same.
Thus, I plan to create FTOs mostly during the first evaluation phase and before the final evaluation ranging from minor UI changes to small feature additions. Besides the aforementioned dates, I'll keep my eyes open for any issues that can be converted to FTOs wherever possible.

## Experience

I've primarily worked with web development technologies in the past associated with JS. Here's a glimpse of some of my projects -

- [Travel Planner](https://github.com/waridrox/travel-app) - A full stack app leveraging various APIs to
plan out travel destinations.
- [News Article Evaluation](https://github.com/waridrox/news-article-evaluation) - Evaluates a news article with NLP to
draw conclusion.
- [Markdown live preview](https://github.com/waridrox/md-live-preview) - A markdown preview app that renders
markdown text to standard HTML in real-time.
- [Recipe App](https://github.com/waridrox/recipe-app) - An app to search and find food recipes.
- [Flash Type](https://github.com/waridrox/flash-type) - Allows the user to test their typing speed.

Apart from this, I've been a scholarship recipient of Udacity's front end [nanodegree](https://confirm.udacity.com/26N6P69L) program and a [contributor](https://github.com/pulls?q=is:pr%20author:waridrox%20archived:false%20org:moja-global%20is:closed "https://github.com/pulls?q=is:pr%20author:waridrox%20archived:false%20org:moja-global%20is:closed") to other open-source environment focused org.

Since this project would involve Ruby on Rails to some extent, I have started learning and grasping the basic concepts of this amazing language, thereby realising the benefits of the MVC pattern. By the end of community bonding period, I assure to be sufficiently proficient in the language and make this project a success!

## Team participation

I have participated in a few events where team coordination is the utmost necessity. Some of them include SIH internal hackathon and HackIIITD. I am also associated with CUBIX, a Rubik's cube society at my college that focuses on organising speed-cubing competitions and teaches people how to solve different rubik's cube puzzles.

## Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

Being an environmentalist from within, I do like technology and the idea that it is universal and can be applied anywhere. Taking this belief forward, I came across the open source culture and how people from different backgrounds come together to contribute to something meaningful. I'm intrigued by topics like climate change, air and water pollution, surveying and sustainability. This idea drove me to contribute to organisations focusing to bring about an impact on the environment sector. That's when I came across PublicLab, and it has been a great experience since then to get associated with such a welcoming community and see how different technologies are contributing towards environmental investigation to solve real life problems. It's truly an honour for me to work on this project, something I believe would create an impact on the lives of people!

## Audience

_Whom do you want your work to help? We especially appreciate proposals that make technologies and techniques more welcoming and friendly to those who've often been excluded._

This project will ease the process of researchers and curious people alike who are involved with using spectral workbench as a platform to analyse their spectral data and draw some meaningful insights out of their analysis. Furthermore, people who are using spectral-workbench.js library in their projects would benefit from the added features.

## Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

Yes, I fully understand the commitment expectations. This summer I don't have other plans to work upon and due to the ongoing pandemic, it's very likely that my university will not reopen. But if something clashes, I'll still be able to devote upwards of 20-25 hours a week to compensate for the losses in advance if required. Moreover, I will keep the mentors up to date with the fresh university timeline while providing a work progress report every week to keep them updated with my work.

## Needs

All I require, is the support and guidance from mentors and contributors of this engaging community. Thanks :)