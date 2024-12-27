---
title: "Use Git and GitHub to contribute and improve Public Lab software"

tagnames: 'web-development, software, developers, code, coding, github, with:bsugar, activity:software, activity:soc, git, activity:developers, activity:coding, activity:git, activity:github'
author: warren
path: /notes/warren/11-22-2017/use-git-and-github-to-contribute-and-improve-public-lab-software.md
nid: 15228
uid: 1

cids: 23921,23923,23930,24729,28254,29554,31351

---

![](https://publiclab.org/public/system/images/photos/000/022/536/original/Screen_Shot_2017-11-22_at_3.08.13_PM.png)

# Use Git and GitHub to contribute and improve Public Lab software

by [warren](../../../profile/warren) | November 22, 2017 20:09

November 22, 2017 20:09 | Tags: [web-development](../tag/web-development), [software](../tag/software), [developers](../tag/developers), [code](../tag/code), [coding](../tag/coding), [github](../tag/github), [with:bsugar](../tag/with:bsugar), [activity:software](../tag/activity:software), [activity:soc](../tag/activity:soc), [git](../tag/git), [activity:developers](../tag/activity:developers), [activity:coding](../tag/activity:coding), [activity:git](../tag/activity:git), [activity:github](../tag/activity:github)

----

Public Lab software is written in many languages, and each project may have its own guidelines for contributors. These broad guidelines should serve as general principles to guide your approach to a new Public Lab codebase, using Git and the collaborative coding website [GitHub](https://github.com).

Our welcoming page for new contributors is here: [https://publiclab.github.io/community-toolbox/](https://publiclab.github.io/community-toolbox/) -- please check it out!

### Contributing using git

Check out this article on [GitHub Flow](https://guides.github.com/introduction/flow/index.html), a routine that works great on all `git` projects and makes Public Lab development super smooth.

![image description](https://publiclab.org/system/images/photos/000/022/534/large/images.duckduckgo.jpg)

### A sample git workflow

Let's say that a developer and PublicLab community member named Susan decides that she wants to add a feature to `plots2` ([PublicLab.org](http://PublicLab.org)). Here's what Susan's workflow might look like:

1. Susan [forks](https://help.github.com/articles/fork-a-repo/) the [publiclab/plots2](https://github.com/publiclab/plots2) repo on GitHub.
2. Susan [clones](http://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#Cloning-an-Existing-Repository) the forked repository susan/plots2\. This downloads a copy of Susan's version of plots2 to her computer.
3. She creates a branch for the new feature (a _feature branch_). Let's say that Susan wanted users to be able to tag maps. She might then create and checkout a new branch called `add-map-tags` with: `git checkout -b add-map-tags`.
4. Susan develops the new feature in the `add-map-tags` feature branch, making commits (and running tests) as she goes.
5. When Susan is done developing the new feature, she switches back to the master branch of her own repository: `git checkout main`, and then pulls the latest version of plots2 down from the `publiclab repo` with `git pull https://github.com/publiclab/plots2.git main`.
6. Susan applies her new feature on top of the latest version of plots2: From the `add-map-tags` branch, she runs `git rebase main`. This is the great strength of doing development in a feature branch - it allows Susan to merge her changes into the latest public version of plots2 on her own computer and to [resolve any conflicts](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/) locally.
7. After rebasing, Susan's local feature branch `add-map-tags` contains the latest version of plots2 with her new feature added on top. The new feature is ready, so Susan pushes her feature branch up to her own remote repository with `git push origin add-map-tags` and [submits a pull request on GitHub](https://help.github.com/articles/using-pull-requests/) from that to publiclab's master branch.
8. Susan discusses her code with others. After any questions or change requests have been resolved, Susan's request is merged in, and her contribution becomes part of [PublicLab.org](http://publiclab.org/)!

---------

### Best practices

A few notes - some git best practices that will make all of our lives easier:

- Remember to pull from main before you start working on a new feature. This helps keep your local repository in sync with the code that everyone else is working on. If you've forgotten to, [see below for how to recover without losing your work](#Rewinding+the+master+branch).
- Always do development in a feature branch (again, [see below](#Rewinding+the+master+branch) if you've forgotten). This makes it much easier for project maintainers to merge your contributions into the trunk. The name of your branch is displayed when it is merged in to the main trunk, which means that it serves as built-in documentation for your feature. This works great when you give your feature branches descriptive names! Some example branch names:
  - donation-button-redesign
  - markdown-package-update
  - fix#44 (fixes GitHub issue #44 in this repository)
- Open a pull request early! In fact, feel free to open a pull request as soon as you start working on a new feature or bugfix. GitHub's pull request pages make it easy to see progress that's been made on an issue, and it's a great way to start an open and ongoing discussion with the project's maintainers and other contributors about your work.

For some additional tips for different scenarios, such as if you've forgotten to make your commits in a named feature branch and need to rewind your master, [see **Additional Workflows** on this page](/wiki/contributing-to-public-lab-software#Additional+workflows)

We're happy to help! Please feel free to ask questions here, or at [https://publiclab.org/wiki/developers](https://publiclab.org/wiki/developers)