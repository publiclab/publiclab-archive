---
nid: 18467
title: Findings from UI Analysis of PL website
path: public/static/notes/sylvan/03-04-2019/findings-from-ui-analysis-of-pl-website.md
uid: 540012
tagnames: design,request,ui,pin:ui
---

# Findings from UI Analysis of PL website

I've been conducting an analysis of the Public Lab website's UI. In this analysis I've included [Ann's UI interviews](https://docs.google.com/presentation/d/11xzNp0BFis2ovAJLLPHV6tVw1eYFFQL4QutPnrjiAf4/edit#slide=id.g4e10f26701_1_1), [Eva's redesigns,](https://publiclab.org/profile/edie_blues) [mockups of potential changes to the website,](https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2_4zc/edit#slide=id.g4e2261b4b2_0_0 "https://docs.google.com/presentation/d/1TCZoTfuhamRVrUak8aDgqJAwSgyhRtZg2Pgacl2_4zc/edit#slide=id.g4e2261b4b2_0_0") people's GitHub conversations, and my own heuristic review. (Here's a [nice page describing what heuristic review is.)](https://www.usability.gov/how-to-and-tools/methods/heuristic-evaluation.html "https://www.usability.gov/how-to-and-tools/methods/heuristic-evaluation.html") The analysis is guided by two key main website goals: 1) demonstrate what Public Lab is and what it does and 2) demonstrate what a given user can do with Public Lab.

**High-level of summary of what I've found so far**

- New users don't know understand what Public Lab is and does.
- Existing users can't find what they need.
- Homepage
  - does not provide enough information to engage different audiences: newbie, repeat users who wants to learn more about projects, etc, repeat user who wants to contribute, searching for kits, searching for tools. Experts users are better off.

- Dashboard is not actionable enough. Its purpose and use should be better defined. (Eva has done some nice work on it [here](https://publiclab.org/notes/edie_blues/12-13-2018/public-lab-dashboard-new-design-ideas).)
  - Need to be rethought and re-prioritized. Consider engage the community in a way similar to what we plan to do with the Homepage.
- Search needs to be improved. Who does it serve? If it only helps the most experienced users currently, consider removing it from the navigation bar until it works better.
- Tools are hard to find and are something people are interested in. They should be highlighted more, especially, MapKnitter, Spectral Workbench, and Infragram.
- Similarly some people really want kits but they are hard to find and, once found, hard to navigate through. What about a [layout like this](https://scratchx.org/#extensions)?

**Recommendations to Address Concerns**

Overall, work towards simplicity and clarity. More specifically:

- Users need a clearer layout of information over all and less unnecessary (or lower priority) information.
  - Define purpose for each section and page and only include what is necessary for it.
  - Define a set of page layouts and their users. Then modify pages to follow layouts.
  - If it doubt, leave it out. If you can't, put it on a separate page in the section and then link to it.
  - Imagine you are new to the page. What are you looking for, where does your eye go (does your eye know where to go?, and can you find what you need?
- Create a Style Guide and engage the community to contribute to its design and then to use it. Could start with content page type. Also collection page type later.

A Style Guide could include

- Redesign front page
- Redesign dashboard page.
- Page types by content and with examples, [similar to this](https://www.uccs.edu/webstyle/page-types) or [to this](https://styleguide.iu.edu/pattern-library/page-types/index.html).
- It should define the style of all elements (typography, icons, color) but even more important, should suggest how to incorporate the elements through description and examples.

**Request for Help**

My next step is to sort and categorize the issues I've found and create actionable GitHub issues based on them. Before I do that, I wanted to share what I've been working on and see if anyone has any feedback on it. Does this feel right to you? What does or doesn't? If you are someone who picks up issues on GitHub, what can I do to make them most actionable for you?