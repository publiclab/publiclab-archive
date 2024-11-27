---
nid: 13733
title: Set up your development environment in Cloud9
path: public/static/notes/liz/11-30-2016/set-up-your-development-environment-in-cloud9.md
uid: 7
tagnames: software,web,developers,wwg,activity:software
---

# Set up your development environment in Cloud9

**This activity is for people looking for a simple way to get started with the code that runs this website, publiclab.org.**

Cloud9, at [http://c9.io](https://c9.io), can be used to set up a complete development environment, for free, in the cloud -- including Git and a test suite, so you can make changes and create pull requests. 

These instructions are for PublicLab.org, but there are similar instructions available for Spectral Workbench and MapKnitter (coming soon). Each is listed in that project's README file.

Unfortunately, Cloud9 **now [requires an invite](https://groups.google.com/forum/#!topic/plots-dev/iy6_-F2tNis) unless you enter a credit card**. Email plots-dev@googlegroups.com to ask for a free invite from our team! Then proceed with the following steps:

1. Visit [https://c9.io](https://c9.io) with the email invite you receive, and create a new account. (not via GitHub, as that'll erase your free invite code from the URL!)
2. Fork the https://github.com/publiclab/plots2 repository to your own GitHub account, creating a `yourname/plots2` project. (or the corresponding project you're working on)
3. Back in Cloud9, name your project, then (order important!) choose the Ruby template, THEN enter `yourname/plots2` (or the corresponding project) in the "Clone from Git or Mercurial URL" field, and press Create Workspace
4. In the command line prompt at the bottom of the page, type `./install_cloud9.sh` and press enter.
5. Enter your username when prompted, and click "Run Project" when it's done.
6. You're done! Go to the URL shown!

Up-to-date versions of these instructions are available in the README of each project; for PublicLab.org, that's at https://github.com/publiclab/plots2/#simple-installation-with-cloud9