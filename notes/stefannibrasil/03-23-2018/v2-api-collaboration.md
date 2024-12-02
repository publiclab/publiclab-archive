---
nid: 16015
title: v2 API collaboration
path: public/static/notes/stefannibrasil/03-23-2018/v2-api-collaboration.md
uid: 525300
tagnames: soc-2018-api,question:soc-2018-api
---

# v2 API collaboration

Hello, everyone!

I was thinking about start working on something related to the API, but as @warren pointed, it would be great if we could articulate the work since we all want to work on the same feature.

There are some things that we can work:

- Write unit tests for the back-end to various APIs by writing Services, like these: https://github.com/publiclab/plots2/blob/master/app/services/typeahead_service.rb

- Refactor more of the SearchService and Search endpoint to improve/standardize the web search function: https://github.com/publiclab/plots2/blob/master/app/api/srch/search.rb + https://github.com/publiclab/plots2/issues/2421

What do you think? Any ideas on how we work together here? Do you wanna add another improvement? I was thinking about writing unit tests for the typeahead_service.rb, if anyone else wants to collaborate, let's talk!

@milaaraujo @Raounak @rishabh07 @sukhbir