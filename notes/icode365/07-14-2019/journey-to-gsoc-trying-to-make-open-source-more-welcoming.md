---
title: Journey to GSoC '19: Making community toolbox more welcoming
tagnames: software, gsoc, google-summer-of-code, summer-of-code
author: icode365
path: /notes/icode365/07-14-2019/journey-to-gsoc-trying-to-make-open-source-more-welcoming.md
nid: 20098
uid: 553778

---

# Journey to GSoC '19: Making community toolbox more welcoming

by [icode365](../profile/icode365) July 14, 2019 13:04

July 14, 2019 13:04 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [google-summer-of-code](../tag/google-summer-of-code), [summer-of-code](../tag/summer-of-code)

So I started my journey with PublicLab last year with my first-timer contribution being adding the support for multi-repository contributors view in community-toolbox. That first contribution helped me learn about the project's code and its workflow to a great extent and seeing my work published on the live version of the website was the most satisfying feeling :).

![image description](/i/33662.png "Screenshot_from_2019-07-14_17-35-06.png")

That encouraged me to contribute more and I was getting more & more interested in the project with the passage of time. The best thing over all other good things is how newcomer friendly the project is. I've contributed to other open source organizations before but I've never found any organization having a whole project dedicated to helping newcomers and encouraging them. This is really how an open source organization should be, I thought. After contributing a little and making several first-timer-only issues I decided to apply as a mentor for Google Code-In 2018 which gave me a different perspective to look at things. It was a great experience and I came to know how to convey the message to another person so that he/she can actually follow up on it and not be more confused than before. I got so much to learn in such a short period of time which is the beauty of open source I believe.

---------

I was having an awesome learning experience while contributing to community-toolbox, so it was during this summer, I thought of participating in Google Summer of Code '19 to expand my knowledge more and to experience how to build things with community support in the real world within deadlines. By far, I must say this is one of the best industry experience a college student can get.

Here are some of the things I implemented in my first month of participation,

- Refactoring the codebase ([213](https://github.com/publiclab/community-toolbox/pull/213 "https://github.com/publiclab/community-toolbox/pull/213")), this helps in making the code more readable and maintainable. As the project is slowly growing, we needed this to be able to maintain and grow the site with the least possible hurdles. Here's the refreshed project's \`src/\` folder,

![image description](/i/33755.png "refactor.png")

  
- Changed the source of the default welcome page to a config.json file ([216](https://github.com/publiclab/community-toolbox/pull/216)). This enables any user/organization to adopt the project for their own needs.

![image description](https://publiclab.org/i/33756.png "config.png")

  
- Added the list of stale issues across PublicLab ([217](https://github.com/publiclab/community-toolbox/pull/217)). This will let people know if there's an issue across our org which hasn't been updated for the past 10 days so that any person can easily notice them & give their valuable inputs. Here's a screenshot of how it looks,

![image description](/i/33758.png "stale.png")

  
- Added a dropdown to navigate around repositories ([219](https://github.com/publiclab/community-toolbox/pull/219 "https://github.com/publiclab/community-toolbox/pull/219")). This will let people navigate around repositories using the dropdown provided which aims to reduce user's effort of providing the repo name in URL.

![image description](/i/33759.png "drop.png")

  
- Added a night theme ([221](https://github.com/publiclab/community-toolbox/pull/221)). This gives the user an option to switch to a dark/night theme and also remembers the user's choice of theme for his every visit

![image description](/i/33760.png "night.png")

  
- Added a list of first-timer-only authors ([225](https://github.com/publiclab/community-toolbox/pull/225)). This is added to encourage people to make "first-timer-only" issues and to appreciate everybody's effort which actually helps in welcoming new people to our organization. Here's a screenshot showing this,

![image description](/i/33761.png "fto.png")

  
- Changed urlHash.js source for compatibility ([229](https://github.com/publiclab/community-toolbox/pull/229)),
- Added a copy to clipboard button for contributors' names in the contributors' section of the page ([232](https://github.com/publiclab/community-toolbox/pull/232 "https://github.com/publiclab/community-toolbox/pull/232")). This feature enables everyone to copy the names of the contributors at once which is very useful in some use cases like when people want to mention/tag contributors in the check-ins.

![image description](/i/33762.png "ctc.png")

  
There are many things in the making which will hopefully help community-toolbox to be a better place for people new to open source and for developers who want to contribute to the project, by making the code more readable and maintainable.

Thanks!!!