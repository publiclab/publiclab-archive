---
title: "Bot for Publiclab"\ntagnames: 'gsoc, publiclab, irc, node, bot, gitter, soc-2017-proposals, response:13975, 123, gsoc-2017-accepted, first-time-poster'
author: ryzokuken
path: /notes/ryzokuken/02-28-2017/bot-for-publiclab.md
nid: 13972
uid: 493113

---

# Bot for Publiclab

by [ryzokuken](../profile/ryzokuken) | February 28, 2017 19:19

February 28, 2017 19:19 | Tags: [gsoc](../tag/gsoc), [publiclab](../tag/publiclab), [irc](../tag/irc), [node](../tag/node), [bot](../tag/bot), [gitter](../tag/gitter), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975), [123](../tag/123), [gsoc-2017-accepted](../tag/gsoc-2017-accepted), [first-time-poster](../tag/first-time-poster)

----

# Bot for Publiclab
---------


### Community Questionnaire

[bot-project](../../tag/question:bot-project)


**Affiliation** Jaypee Institute of Information Technology

**Location:** New Delhi, Delhi, India

### Timeline/milestones

- **Community Bonding Period**: I will dive into the specifications of the services we would require for the project. This would involve making a project on heroku, and making a test deployment to see of everything is fine, as well as registering for OAuth tokens for various services we would require, including Github.
- **May 30 - June 30 (4 weeks)**:
  - **Week 1 and 2**: Start talking to people and formulating an exact set of features everyone expects the bot to have, then working on the JSON API for Publiclab API to provide functionalities as needed and writing tests. I gave this a decent time interval because this should work even if every single requirement from the API needs to be built from scratch (however unlikely this may sound) and also because when developing the endpoints a greater emphasis would be on making it secure to avoid potential DoS attempts. If this does not take as much time as I predicted, I would start to work automatically on the next task at hand.
  - **Week 3 and 4**: Work on the chatbot facade of the bot, making the bot interact with people and talking extensively with the community in order to formulate a list of guidelines to follow when designing interactions in order to ensure that the interaction are as friendly and cordial as possible. This period would also include work on various other features that may come under the chatbot side of things, from welcoming people to mirroring messages across chatrooms to providing a list of open fto issues (which would require the Github microservice which I would be working on in a jiffy). The chatbot facade would include a core functionalty/chatbot logic for the features and include multiple microservices for the various chat platforms we would be initially required to target.
  - **Last Week to End of Month**: Phase 1 evaluations.
- **June 30 - July 28 (4 weeks)**:
  - **Week 1**: Working on the Publiclab microservice.
  - **Week 2**: Working on the Github microservice.
  - **Week 3 and 4**: Working on providing an interface for the chatbot facade right on the [Publiclab.org](http://Publiclab.org) webapp and integrating some existing features (such as the current chat and the part where people post issues on Github) right into the facade.
  - **Last Week to End of Month**: Phase 2 evaluations.
- **July 28 - August 29 (4 weeks)**:
  - **Week 1 and 2**: Write more detailed tests and finishing up and polishing last weeks' work in general. Regarding the tests, I suppose wiriting unit tests for every functionality and a few integration tests (one for each microservice in general) would work fine.
  - **Week 3 and 4**: Working on integrating various 3rd party services. This can be quite open ended and would depend on feature requests and feedback.
  - **Last Week and End of Month**: Final evaluation.

---------

## Why

Being an active and welcoming open source community, Publiclab requires a chatbot for a variety of purposes, including the automation of some critical but uninteresting jobs.

Some examples include:

- Normal chatbot functionality (greeting new users, fetching some important data real quick, etc) (can be expanded to add features as and when required)
  - We could add a cool karma system (freeCodeCamp's bot uses brownie points) that rewards members for helping others out by awarding them points and taking away for unhelpful behavior.
- Gitter-IRC sync (currently being handled by matrixbot)
- Automated PR reviews (currently being handled by dangerbot) (let's keep in mind that our solution would be very specific to our needs and highly extensible. Also, as it comes as a 'service' among many handled by the bot, it would fit in perfectly with all our other features)
- Automated reviews for critical documents on the Publiclab website (would need more information for this)
- Keeping track of open issues/assigned issues etc. (this would allow a user to say, print out all the current fto issues right in the chatroom, or maybe print out all the issues some other user is assigned to) (all these can be ideally done using Github's interface, but sometimes you need to demonstrate something and this may come in handy in such situations)

## How

We would most probably built such a bot (only if we choose to do so) on Node. Not only does Node sound quite natural for such an application, but it also works quite well when interacting with multiple APIs. We could host the bot on heroku or somewhere similar for a start and perhaps move to our own servers somewhere down the line (if feasible). We could sprinkle NLP at places because (I feel) it is not very important in our context. I have had experience using NLTK in Python and using it in conjunction with a chatbot running Node, but the NodeJS packages are getting better, and we could try a more native solution if we're feeling adventurous.

## Case 1: Very Simple Bot

A very simple bot would help guide users on the site and mainly automate generic community interaction.  
**Working Example:** FreeCodeCamp's famous CamperBot would (when someone would say "Hello, World!" in the chat) greet them and welcome them to their community (It was recently brought to my notice that this functionality has been removed from CamperBot). However, what we are seeking to achieve here is not as aesthetic or cosmetic as CamperBot (I mean, don't take me wrong, but just greeting newbies wouldn't really get work done. We need to actually help them get started. I realize it always depends on the person as well as their motivations, but there are certainly a few generic suggestions that apply to everyone, right?)

**Example Interactions:**

- Person: `Hey everyone!`  
Bot: (maybe make it check a database to confirm if the person is indeed a new member in order to avoid spamming the chat channel)  
`Hey, #{Person}! Welcome to Publiclab. Click (here)[...wiki...] to access our wiki. Here's a list of few wiki articles to get you started. Feel free to contact @liz or @stevie on this chat if you have any issues.`  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:** None
- Person: `Hello, World!`  
Bot: (same old drill)  
`Hello, #{Person}! Welcome to Publiclab. Please go through our (Contribution Guidelines)[...guidelines...] and (Code of Conduct)[...] in order to start contributing. If you are new to open source software, take a look at our (first-timers-only)[...] issues. Check out our (README)[...] in order to setup the project locally or if you're unable to do so, feel free to ask @jywarren to grant you free access to Cloud9. If you are still facing any problems, feel free to ask.`  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:** None (although we could add some stuff right here using the Github API, for starters, I feel strongly that just putting in links would be sufficient)

## Case 2: A Slightly Advanced Bot

This slightly advanced bot would do little more than the simpler version than to provide help regarding help on very specific issues. In other words, this is just a version of the simpler bot with a lot more help cases than the utterly generic.

**Example Interactions:**

- Person: `@bot help spectrometry`  
Bot: `Hey, #{Person}! I see you needed help with spectrometry. We have a (wiki entry for spectrometry)[...], make sure to check it out. Also, you can refer to the (Wikipedia entry for spectrometry)[...] for additional information.`  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/)) also, this could be added to a minimal chat interface right on the publiclab website. This might seem like a lot of work, but it would be super helpful if people could ask such basic questions right from the website.  
**External Data Required:**  
Publiclab API: Search for wiki by keyword
- Person: `@bot help bower`  
Bot: `Hey, #{Person}! I see you needed help with bower. Take a look into bower's (official documentation)[...]. Also there are Github wiki entries regarding setting up bower on the following of our projects:`
  - `(plots2)[...]`
  - `(PublicLab.Editor)[...]`
- Person: `@bot help bower installation`  
Bot: `Hey, #{Person}! Bower's official documentation has an (installation section)[...].`  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:**  
Google/Wikipedia API: Search for a keyword and link to the appropriate webpage.

## Case 3: A full-fledged useful bot

This is a bot that builds on top of the other two but rather than just helping members, it actually performs real functionality as it interacts with APIs (Github and plots2 API seems okay for now). What this does is add unlimited possible "features" that can be added to the bot that involve calling these APIs.

**Example Interactions:**

- Person: `Hey, @jywarren.`  
Jeff: `Welcome to Publiclab, #{Person}. Take a look at our first-timers-only issues in order to begin contributing.`  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:** None

Jeff: `@bot issues first-timers`  
Bot: `We currently have the following first-timers-only issues:`

- `publiclab/plots2#1301`
- `publiclab/plots2#1198`
- `...`  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:**  
Github API: Search issues by label
- Ujjwal: `@bot issues unassigned`  
Bot: `The following issues are currently open and unassigned:`
  - `publiclab/plots2#1340`
  - `publiclab/plots2#1339`
  - ...  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:**  
Github API: Search issues by assigned status
- Person: `@bot pull-request add-for-review 1338`  
Bot: `Pull request publiclab/plots2#1338 has been marked as finished, and has been added for reviewal. Our reviewers team will look into it shortly. Thank you for your contribution.`
- Person: `@bot pull-request add-for-review 1338`  
Bot: `Pull request publiclab/plots2#1338 could not be added for reviewal as Danger reported the following problems with your pull request:`
  - `This pull request doesn’t link to a issue number. Please refer to the issue it fixes (if any) in the format: Fixes #123.`
  - `You have added multiple commits. It’s helpful to squash them if the individual changes are small.`
  - ...  
**Location:** Chatroom ([https://chat.publiclab.org/](https://chat.publiclab.org/))  
**External Data Required:** None (we could run Danger on the bot itself rather than running it on Travis, this way, people could choose when their PRs are ready for automated review, and this would further reduce the time travis takes)
- Liz: `@bot notes awaiting-moderation`  
Bot: `The following notes are awaiting moderation:`
  -