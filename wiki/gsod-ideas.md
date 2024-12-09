---
title: GSoD Ideas
tagnames: documentation, gsoc, google, parent:gsoc, wwg, gsod
author: warren
path: /wiki/gsod-ideas.md
nid: 19139
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/039/224/original/gsod.png)

# GSoD Ideas

by [bansal_sidharth2996](../profile/bansal_sidharth2996), [geekychaser](../profile/geekychaser), [rexagod](../profile/rexagod), [gauravano](../profile/gauravano), [warren](../profile/warren)

April 22, 2019 15:24 | Tags: [documentation](../tag/documentation), [gsoc](../tag/gsoc), [google](../tag/google), [parent:gsoc](../tag/parent:gsoc), [wwg](../tag/wwg), [gsod](../tag/gsod)

----

This is the ideas page for Public Lab's [Google Season of Doc program](/gsod), programs for technical writer fellows to work on free and open source projects. 

**Important** -- if you're new to Public Lab software contributing, see our **[Welcome page](https://code.publiclab.org#r=all)** and our [Contributing page](/wiki/contributing-to-public-lab-software)

## Get in touch

We love :heart: to hear from new contributors! Reach out on **[the developer mailing list](https://groups.google.com/group/plots-dev)** - or in [our chat room](/chat). We've embedded a small chatroom right here:

<iframe style="border:none;" width="100%" height="350px" src="https://chat.publiclab.org"></iframe>


## Contribution guidelines

Our [Contributing to Public Lab Software](/wiki/contributing-to-public-lab-software) page has our preferred guidelines for submitting changes. Please read it over!

We also love it when students show that they can work well with us by trying a `first-timers-only` issue, and even **submitting a pull request**. This gives us confidence that you've read our contribution guidelines and would be ready to jump into a project. To get started, see our welcome page:

> Welcome page: https://code.publiclab.org/#r=all

****

### How to post a proposal

(for technical writers)

Please first leave a comment on the post below, and tell us what you're interested in and a bit about your experience. It's also great to hear if you've forked [one of our codebases](/wiki/developers)) and installed it on your computer [or a test environment](). Done with that? How about running tests? Tell us how far you've gotten, and ask us for help -- we're happy to help you get started!
Kindly add tag `gsod` to your proposals 

### `plots2` system diagram and roadmap

**Part of:** https://github.com/publiclab/plots2

**Description:** PublicLab.org's codebase is described in a diagram of database models in our README, and documented in our data model README at https://github.com/publiclab/plots2/blob/master/doc/DATA_MODEL.md. But we need a better explanation and documentation of the major systems, not just the data model. This project will expand on the diagram to map out major systems such as:

* editor
* comment editor
* tagging UI/API
* standard node conventions
* login system
* revisions

It will also recap our roadmap for the codebase, including efforts to deprecate old code (https://github.com/publiclab/plots2/issues/956), consolidate and reorganize JavaScript code, and expand and extend our test suite. Finally, it will show interconnections between our different project repositories such as `PublicLab.Editor`, `inline-markdown-editor`, `image-sequencer`, `leaflet-environmental-layers`, `leaflet-blurred-location` and leaflet-blurred-location-display`. 

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

[prompt:text:plots2 system diagram mentor names here]

****



### `plots2` Ruby and JavaScript style guidelines

**Part of:** https://github.com/publiclab/plots2

**Description:** Coding style and consistency needs work and supporting documentation in our projects, and this project will include both clarity on which styles we follow, distinctions between recommendations and requirements, and guidance on running and using Rubocop or other linting and style review systems. It will also include providing supportive and non-negative style tips and feedback at key junctures such as automated PR reviews, and develop a re-usable issue workflow for taking up style-related issues in the `first-timers-only` system.

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

* Emily 
[prompt:text:plots2 style guide mentor names here]

****



### `plots2` UI style and usage guide

**Part of:** https://github.com/publiclab/plots2

**Description:** We have a new UI Style Guide under development, and this project will expand, annotate, and document it, with examples, for those looking to add new pages and interfaces to our site. 

Read more at: (coming soon)

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript, Ruby on Rails

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren
* Cess
[prompt:text:Notifications system mentor names here]

****



### `leaflet-environmental-layers` layer API and contributing guide

**Part of:** https://github.com/publiclab/leaflet-environmental-layers

**Description:** 


Read more at: 

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

[prompt:text:LEL contributing guide mentor names here]

****




### `ImageSequencer` module API and contributing guide

**Part of:** https://github.com/publiclab/leaflet-environmental-layers

**Description:** 


Read more at: 

**List:** plots-dev@googlegroups.com, https://publiclab.org/chat

**Prerequisites:** JavaScript

**Difficulty Level:** medium

**Potential mentors:**

* Jeff Warren

[prompt:text:IS contributing guide mentor names here]

****