---
title: Contributing to Public Lab Software
tagnames: software, guidelines, github, plots-dev, contributing, getting-started, parent:developers, response:11490, 44
author: justinmanley
path: /wiki/contributing-to-public-lab-software.md
nid: 11487
uid: 421556

---

# Contributing to Public Lab Software

by [warren](../profile/warren), [justinmanley](../profile/justinmanley)

December 19, 2014 22:45 | Tags: [software](../tag/software), [guidelines](../tag/guidelines), [github](../tag/github), [plots-dev](../tag/plots-dev), [contributing](../tag/contributing), [getting-started](../tag/getting-started), [parent:developers](../tag/parent:developers), [response:11490](../tag/response:11490), [44](../tag/44)

### Public Lab welcomes and encourages community contributions to our open source software!

This page is intended to:

1. List software projects that Public Lab has incubated and provide links to source code.
2. Collect software development guidelines and best practices for Public Lab projects.
3. Help newcomers figure out how and where to start contributing!

## Getting started

For an excellent overview of contributing to open source projects in general, check out [How to contribute to an open source project on Github](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github). 

Quick tips for getting involved with the Public Lab codebases:

1. **Set up a GitHub account and install git.**

    If you're not familiar with git, a popular version control software, you can try it out at https://try.github.io.

    Speaking of GitHub...right now, all of Public Lab's open source code is located on GitHub, a website which hosts git repositories.  Setting up a GitHub account is the first step to getting involved with Public Lab's code (and lots of other code).

2. **[Join](http://publiclab.org/wiki/mailing-lists) the Public Lab [developers mailing list](https://groups.google.com/forum/#!forum/plots-dev)**

****

## Contribution Guidelines

Public Lab software is written in many languages, and each project may have its own guidelines for contributors.  These broad guidelines should serve as general principles to guide your approach to a new Public Lab codebase.

If this is your first time contributing to open source software, or to Public Lab, see our **[Welcome page](https://publiclab.github.io/community-toolbox/#r=all)** to take your first step!

<a href="https://publiclab.github.io/community-toolbox/#r=all" class="btn btn-default btn-lg">Visit our Welcome page &raquo;</a>

Also check out this article on [GitHub flow](https://guides.github.com/introduction/flow/index.html), a routine that works great on all git projects and makes Public Lab development super smooth.  

****

## Questions

[questions:software]

## Activities

[activities:software]

****

### A sample git workflow

See [this activity](/n/15228) for a guide to **using branches and pull requests on GitHub**.

For some additional tips for different scenarios, such as if you've forgotten to make your commits in a named feature branch and need to rewind your main, [see below](#Additional+workflows)


## Public Lab Software

For an overview of Public Lab software projects, see [this list on the Developers page](/wiki/developers#Public+Lab+Software+projects)

****

## Additional workflows

### Rewinding the main branch

Sometimes you forget to make your commits on a named feature branch, and add commits to your main branch. You want to rewind the main branch back so you can pull in the latest changes from others, but you don't want to lose your work! It's all right, though -- you can follow these steps to rewind, update, and rebase your changes on top of the latest commits to Public Lab's main branch (shown here for the `plots2` repository):

1. `git checkout main` - go back to your main branch (your work is saved in the feature branch)
2. `git reset --hard 123456` -- rewind your main branch to a state before it diverged from our main (where `123456` is the commit hash just before your commits -- the latest one your history has in common with [the publiclab/plots repository's history](https://github.com/publiclab/plots2/commits/main))
3. `git pull https://github.com/publiclab/plots2.git main` -- fetch publiclab's latest main
4. `git checkout feature-branch-name` -- go back to your saved feature branch, named something more descriptive than `feature-branch-name`
5. `git rebase main` -- this just detaches your latest changes (minus the deleted one) and reattaches or "replays" them onto the latest main. If you see merge errors, try [following this guide to resolve them](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/).
6. `git push origin feature-branch-name` -- push up your newly re-based changes! (you can use `git push -f origin feature-branch-name` forces, to overwrite a PR if you've already opened one)
7. Go to https://github.com/publiclab/plots2 to look for the prompt to open a PR if you haven't already.