---
nid: 20321
title: Google Summer of Code: Phase 2 Evaluation
path: public/static/notes/icode365/07-26-2019/google-summer-of-code-phase-2-evaluation.md
uid: 553778
tagnames: gsoc,community-toolbox,gsoc-2019,soc-2019,soc-2019-eval
---

# Google Summer of Code: Phase 2 Evaluation

It's been a great learning experience working on community-toolbox so far. Some features really ask you a lot of questions like how good is the compatibility, are structural changes breaking the desired code maintainability or do we really have to adopt a different way to achieve things for the sake of efficient performance. I really love that. User's convenience and easy to read code must go hand in hand.

Okay, so all of my work is listed below for quick reference.

### Stale Issues List ([217](https://github.com/publiclab/community-toolbox/pull/217 "https://github.com/publiclab/community-toolbox/pull/217"))

This list shows some issues that have not been updated for the "past 10 days", with the help of this list these issues get people's attention so that anyone can help or contribute towards it.

![image description](/i/34133.png "stale.png")

### Project portability ([216](https://github.com/publiclab/community-toolbox/pull/216 "https://github.com/publiclab/community-toolbox/pull/216"))

So in order to make the project portable i.e., any user/organization can use community-toolbox just by changing the configuration present in the `config.json` file, they just need to populate the fields with their desired links and info and this results in a customized user/org specific landing page. Field present in config.json are,![image description](/i/34140.png "config.png")

### Night mode theme ([221](https://github.com/publiclab/community-toolbox/pull/221 "https://github.com/publiclab/community-toolbox/pull/221"))

This enables the user to switch to the theme of his choice. It helps people visiting the website at night.

![image description](/i/34134.png "night.png")

### Dropdown for navigation ([219](https://github.com/publiclab/community-toolbox/pull/219 "https://github.com/publiclab/community-toolbox/pull/219"))

This feature helps the user to navigate to any repository of his choice through the dropdown so that he doesn't have to type in the URL bar. It adds to the convenience of the end-user. Moreover, it is needed because if a person chooses to visit the mobile PWA version of the site, he won't be having a URL bar there and in that case, he would be lost if there's no other option to navigate through the repositories. So it is implemented keeping that in mind.

![image description](/i/34135.png "drop.png")

### FTO authors list ([225](https://github.com/publiclab/community-toolbox/pull/225 "https://github.com/publiclab/community-toolbox/pull/225"))

This is a list showing the names of First-Timers-Only issue authors. This is to thank these people and to encourage everyone to go ahead and write FTO issues so that we keep on welcoming people.

![image description](/i/34136.png "fto.png")

### Copy to Clipboard button ([232](https://github.com/publiclab/community-toolbox/pull/232 "https://github.com/publiclab/community-toolbox/pull/232"))

This is a simple utility which helps a ton when someone needs to mention a group of people.

![image description](/i/34137.png "ctc.png")

### Notifications for the user's knowledge ([236](https://github.com/publiclab/community-toolbox/pull/236 "https://github.com/publiclab/community-toolbox/pull/236"))

This is implemented so that the user remains in sync whenever there's an unexpected error in the backend due to network/API quota limitations. This will help in letting the user know that there's an error so that he doesn't keep on reloading/waiting for some response.

![image description](/i/34138.png "notification.png")

### Filter options for recent contributors' list ([238](https://github.com/publiclab/community-toolbox/pull/238 "https://github.com/publiclab/community-toolbox/pull/238"))

This is a recent implementation which is not merged yet. Now there are some filtering options available in the recent contributor' section so that people are able to see the data for the "past 6 months" starting from "last week". This also provides sorting on the basis of recency and alphabetical order.

![image description](/i/34139.gif "filter.gif")

### Leaderboard ([235](https://github.com/publiclab/community-toolbox/pull/235 "https://github.com/publiclab/community-toolbox/pull/235"))

This is work-in-progress yet. At first, I implemented it as a standalone feature but quickly realized that this should go as an in the filter options list because of the fact that both (recent contributors list and leaderboard) lists show the exact same data which at a quick glance looks duplicate list.
In order to make this as easily comprehensible as possible, I and @warren decided to incorporate it in the filter options tile itself. So this work is dependent on "Filter options for recent contributors' list" one.

### Progressive web app with data fallback support

I'm currently working on building the Progressive Web App (PWA) for `code.publiclab.org`. It requires building a service worker with appropriate use of policy among various ones like cache first, network first, the cache then network one, the network then cache and mutual fallback policy.
It also requires storing the latest version of the data from the database to the cache so that if the user wants to visit the website when offline, he can at least see the cached data.

Another part of this feature is the ability to add the website to the home screen of the phone so that it can be used as a standalone app.

### Permalinks

Also, Permalinks is another feature that we've decided to add to the site. It will increase convenience even more I believe. Currently, we use `url−hash` for fetching hash values from the URL which helps us know about the data to show but it turns out that this can't go with the concept of permalinks so we might end up trading `url-Hash` for permalinks. That means we might need some other way to navigate through and let the information flow to the back-end for everything to work. I'm thinking of storing the URL values somewhere instead of a hash, like maybe in localStorage...This needs some discussion.

---------

Much more things coming up, looking forward to learning much more and contribute even more. Excited for this. Thanks!!!