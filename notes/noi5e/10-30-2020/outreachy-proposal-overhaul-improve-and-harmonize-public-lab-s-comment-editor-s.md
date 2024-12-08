---
title: Outreachy Proposal: Overhaul, Improve, and Harmonize Public Lab's Comment Editor(s)!
tagnames: software, first-time-poster, response:23084, outreachy-winter-2020, outreachy-2020-winter-proposals, response:24687
author: noi5e
path: /notes/noi5e/10-30-2020/outreachy-proposal-overhaul-improve-and-harmonize-public-lab-s-comment-editor-s.md
nid: 24869
uid: 726270

---

# Outreachy Proposal: Overhaul, Improve, and Harmonize Public Lab's Comment Editor(s)!

by [noi5e](../profile/noi5e) October 30, 2020 07:21

October 30, 2020 07:21 | Tags: [software](../tag/software), [first-time-poster](../tag/first-time-poster), [response:23084](../tag/response:23084), [outreachy-winter-2020](../tag/outreachy-winter-2020), [outreachy-2020-winter-proposals](../tag/outreachy-2020-winter-proposals), [response:24687](../tag/response:24687)

---------

## About Me

**Name:** Will (GitHub & Gitter: noi5e)

  
## Summary

I want to improve the various comment editors used throughout Public Lab. There seem to be stylistic and functional inconsistencies between, for example, the Question Editor and the Research Editor. Also, very basic functionality seems to be missing from some of the editors. 

  
For example,  I've just discovered that in the Question Editor, image upload from a  local source is broken, at least for me. See gif below:

  
![image description](https://publiclab.org/i/41362.gif)

  
  
### Timeline/milestones

I've browsed through the docs and research that Public Lab has concerning future Comment Editor improvements. There's a lot to do, and I'm aware that as an intern, I can only do what's realistic within a given timeframe. So I made this rough internship schedule prioritizing pervasive, and/or urgent issues in the earlier weeks.

  
Another thing is that I appreciate about Public Lab is that contributors are encouraged to give back by making first-timer-only issues, and posting comments on others' pull requests and issues. It takes a lot of work to write up issues and motivate others to work on them-- but doing so is powerful because it leverages collective energy. In other words, I made this timeline knowing that writing code directly and hacking away at problems (as much as I love doing that), would be just one part of my duties.

  
I'm thinking each week listed below would be a mix of some of the following:

  
- Working on personal pull requests.
- Writing Tests: From prior dev experience, I agree with this project's Outreachy write-up that testing is crucial. I also think it's a good way for me to leave a long-lasting impact in this codebase until well after the internship ends.
- Going through issues, and breaking them down into modular issues, including FTO ones.
- Helping other contributors complete their PRs via group chat and GitHub.
- Direct feedback from Outreachy mentor
- Team meetings

**Week 1: DEC 1 - DEC 7**

**Focus: Write System Tests to Discover High Priority Bugs**  

Test-writing is a good way to get familiar with the codebase, and lay a good foundation for work to come.

1. write system tests that confirm basic functionality for multiple comment editor scenarios across the various editors: comments in questions, wiki, research, etc.
2. discover more high priority bugs and make issues for each
3. start and work on personal PRs

**Week 2: DEC 8 - DEC 14**

**Focus: Write System Tests to Discover High Priority Bugs (Overflow Week)**

  
**Week 3: DEC 15 - DEC 21**

**Focus: Find, Solve, and Write Up Critical Bugs**

I'd like to browse through existing issues and make new issues & submit PRs for ones that are most debilitating for basic functionality. For example browsing through GitHub issues and other writeups, I see:

1. Image upload via link doesn't work in 3 out of 5 editors
2. Assign unique CSS IDs to comment text inputs: https://github.com/publiclab/plots2/issues/8478
3. Remove templates button from several editors
4. Auto-save and recovery has issues in several editors
5. Standardizing format toolbar across editors: https://github.com/publiclab/PublicLab.Editor/issues/627

**Week 4: DEC 22 - DEC 28**

**Focus: Find, Solve, and Write Up Critical Bugs (Overflow Week)**

  
**Week 5: DEC 29 - JAN 4**

**Focus: Image Upload**

Example issues:

1. Image upload via link not working
2. Research Editor: lead image is tiled
3. Question Editor: Image upload fails

**Week 6: JAN 5 - JAN 11**

**Focus: Image Upload (Overflow Week)**

  
**Week 7: JAN 12 - JAN 18**

**Focus: Rich Text Entry**

Example issues:

1. Wiki Editor: display text in rich text while writing
2. Wiki Editor: toggle button to display rich text preview
3. Weird toolbar format, and scrolling position when in rich text mode

**Week 8: JAN 19 - JAN 25**

**Focus: Rich Text Entry (Overflow Week)**

  
**Week 9: JAN 26 - FEB 1**

**Focus: Save & Preview Text**

Example issues:

1. Question & Research Editor: add button to preview post before submission
2. Issues with Save & Recovery icon styling & position
3. Issues with "Save content and share as a link"

**Week 10: FEB 2 - FEB 10**

**Focus: Save & Preview Text (Overflow Week)**

  
**Week 11: FEB 11 - FEB 18**

**Focus: Tie Up Loose Ends**

Do some of all the above, with increasing focus on test-writing, issue-making, ie. transitioning smoothly out of internship

  
Also, maybe focus more on personal vanity projects I will have been working on relevant to the comment editor.

  
For example, I've noticed in drafting this proposal that certain rich text features don't function ideally, or as how most people would be used to them in other contexts (like Google Docs): eg. making bullet points, inserting images drops the image in a weird location (ie. not where I last had the cursor), auto-detection of "http" to create links.

  
Something I'd love to work on if it's pertinent: hashtag auto-suggestion:![image description](https://publiclab.org/i/41364.gif)

  
  
**Week 12: FEB 19 - MAR 1**

**Focus: Tie Up Loose Ends (Overflow Week)**

###   

### Contributions

- My FTO contribution: [https://github.com/publiclab/plots2/issues/8545](https://github.com/publiclab/plots2/issues/8545 "https://github.com/publiclab/plots2/issues/8545") (Refactor error messages to get rid of dynamic\_form gem)
- I claimed this issue, then confirmed that it had already been completed: [https://github.com/publiclab/plots2/issues/3440](https://github.com/publiclab/plots2/issues/3440)
- I made this FTO issue which broke down a larger existing issue, and helped six people make their first contribution: https://github.com/publiclab/plots2/issues/8587
- I've done extensive research on this more complicated issue for my 2nd contribution and have a PR on the way: [https://github.com/publiclab/plots2/issues/8618](https://github.com/publiclab/plots2/issues/8618)

  
---------

### Open Source & Teamwork Experience

**OUTREACHY & MOZILLA:** I applied to the spring round of Outreachy, and made contributions to Mozilla's Firefox Voice project, which was meant to be a Siri-like voice-activated extension for Firefox.

- **Notable contribution: **Firefox Voice: Enable "Turn selection into link" in Google Docs: [https://github.com/mozilla-extensions/firefox-voice/pull/1565](https://github.com/mozilla-extensions/firefox-voice/pull/1565)
- I had to do some deep research and strategy for this contribution, which added 150 lines and did a lot of DOM magic so users could turn selected text into link in Google Docs with a single voice command.

  
**CHINGU:** I made some contributions to this group project via Chingu, which teams  up randomly selected developers with each other to brainstorm and make  full apps.

- **Site: **[https://jobtrackr.netlify.app/](https://jobtrackr.netlify.app/)
- **GitHub:** [https://github.com/iqbal125/jobtrackr\_client](https://github.com/iqbal125/jobtrackr_client "https://github.com/iqbal125/jobtrackr_client") & [https://github.com/iqbal125/jobtrakr\_server](https://github.com/iqbal125/jobtrakr_server)
- My most significant contributions here were to front-end architecture (making React components & containers), and styling.

---------

### Expertise

The bulk of my experience is working with React and associated stacks. Even though I'm a quick study for many things, I have the most experience with the following:

  
React

NodeJS

webpack

D3

MongoDB

Postgres + other SQL databases

PHP & WordPress 

  
### Portfolio

As a self-taught developer, I've made a bunch of full-stack apps for learning's sake. For example, I made this app that uses the Yelp API so you can "check in" to local restaurants:

  
![image description](https://publiclab.org/i/41366.gif)

  
Honestly,  I really need to refactor this code because it is buggy and not fully  reflective of my current ability, but here is the repository: https://github.com/noi5e/nightlife\_app

  
The main takeaway here is that I have experience with all aspects of a given website, having built full apps "from scratch" numerous times for my own learning:

- Databases
- Data Visualization
- RESTful APIs
- User Authentication
- Responsive web styling
- Testing

  
---------

### Passion

I have a strong interest in environmentalism. I'm an avid hiker and  amateur naturalist in the place I live, the Bay Area of California. I  like the idea of working in civic tech and find its potential  application in the lives of everyday people to be exciting. Why not work  on something that you would find useful in your own life? I've  been at Public Lab for just a short while, but I love how encouraging  everyone is of first-time contributors and newer developers. It really  seems like a place which encourages mentorship and learning.

  
### Commitment

I understand that this will be equivalent to a full-time job, and I'm  happily prepared to make the internship a priority in my life for the  sake of my own growth! Being a self-taught developer, I know I have the  discipline and organizational skills it will take to succeed as an  intern.

  
As an intern, I'd like to start the  working day running by tackling the most difficult & complex tasks  first (coding & working on pull requests), then transitioning to  test-writing, meetings, and softer skills next. I'd also make sure to  set aside some time each day to study parts of Public Lab's stack I'm  not as familiar with (Rails for example).