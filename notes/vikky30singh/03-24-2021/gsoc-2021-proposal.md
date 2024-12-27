---
title: "GSOC 2021 Proposal."

tagnames: 'first-time-poster, gsoc-2021-proposals'
author: vikky30singh
path: /notes/vikky30singh/03-24-2021/gsoc-2021-proposal.md
nid: 26020
uid: 746074
cids: 28441,28449,28476,28500
---

# GSOC 2021 Proposal.

by [vikky30singh](/profile/vikky30singh) | March 24, 2021 20:30

March 24, 2021 20:30 | Tags: [first-time-poster](/tag/first-time-poster), [gsoc-2021-proposals](/tag/gsoc-2021-proposals)

----

## About me

I am vivek singh, a 2nd year BTECH student in CSE.
Currently i am fully devoted to web development. But i have a decent knowledge of data structures and algorithms as well because i used to code on coding platforms like spoj, leetcode etc.

## Github Handle - [vivek-30](https://github.com/vivek-30)

**Location:**
Bhiwani, Haryana.

### Email - vikky30singh@gmail.com
Education - B-Tech (Computer Engineering) [currently in 2nd Year]

## Project Description - 

As we all are aware of Image Sequencer, a very cool and efficient sequencer which works in a very constructive manner with support of many strong modules and well protected by robust tests.

It has everything in it as a complete package to fire-up.

## Problem/issue -

But!!! As this sequencer is based on plain vanilla javascript, and raw HTML we have reached a kind of saturation point of it .we are compromising with the powerful features of great Technologies out there. which not only improve its current behaviour but also leaves many aspects to be covered for future reference and also give a great Compatibility with many such Technologies.

## Solution/Idea -

I did some research for this and some experiment on this and thought that we should `upgrade it to React`.

> Why React ?

You must be wondering that why to shift it to react if we have everything with us already.But Before Diving straight to conclusion i would like put some key points like -

- SEO and Performance issues are associated with it.
  see this. -

![Screenshot 2021-03-14 at 4 24 54 PM](https://user-images.githubusercontent.com/75980147/111065900-3b760e00-84e2-11eb-81fc-b4791648d571.jpg)

once converted to react we can make use of some static site generators like [Gatsby](https://www.gatsbyjs.com/) which not only solves above mentioned problem but also enhance users experience.

- One of the cool thing we are going to enjoy after this upgrade is we can make use of powerful react testing library like `cypress` whose compatibility with react is very high.

- let a user is working on a image, he did several adjustments by generating many sub-part of image. some might have the changes he wanted to work later and some to store just for reference purpose but there is no such provision for that if we have react with us we can use library like redux to save these modules for later use and it is a great feature to have.

- whenever a component need to be changed we don't have to re-render whole page we can easily update that particular part of sequencer with it easily.

- upgrading to newer version of current packages like `bootstrap` and adding some complex features like `adding dark mode` will became much more easy due to props and hooks of react.

- last but not the least upgrading it to react will leave many future scope for integrating it with latest Technology with ease.

## what more - 

Few more Changes related to performance and for better user experience that i had in my mind.which can be done with or without react - 

- current behaviour of ImageSequencer is : we add a new step By clicking on `Add Step` button or click on one of the quick-add menu shortcut.
what i thought is to attach a keyboard control on it using that we can navigate between different modules.
just like the tab switching feature of `MacOS` and it will not be limited to that only.Rather we will have the ability to move in both the direction and after stopping our pointer on one of the module shortcut it will display a default change related to that particular module in our preview image so that the user can visually experience what a particular module do or how that module will going to affect its current change on a image. we can do this with help of doubly circular linked list and instead of a single click we can listen for `dblclick` event on those quick menu tab to select one of them when we are done inspecting them.
(also feature of choosing a module with mouse will also be there as it is) .

demo for above idea -

https://user-images.githubusercontent.com/75980147/111065927-5183ce80-84e2-11eb-91ea-b8bde920be47.mov

- Add a draw (pen/pencil) kind of a tool which will be global in its scope means can be used with any module.This tool will help us draw anything on the image or help us write something on it.
This will be interactive feature to have.

- change the design for upper part of image sequencer which we are discussing about in (<a href="https://github.com/publiclab/image-sequencer/issues/1808">#1808</a>)

- use async await instead of Promises as they just leads to callback hell and that makes code look ugly, difficult to read and understand but async and await are more cleaner way to acheive the same thing we do with promises ( they are just syntactical sugar for the same)

## Contributions In PublicLab/ImageSequencer - 

- Fixed Registration Problem of Service Worker (<a href="https://github.com/publiclab/image-sequencer/pull/1807">#1807</a>) [ merged ]

- Text Alignment Made Easy And Convenient (<a href="https://github.com/publiclab/image-sequencer/pull/1804">#1804</a>) [ merged ]

- Close Webcam Automatically after clicking a picture (<a href="https://github.com/publiclab/image-sequencer/pull/1816">#1816</a>) [ merged ]

- Try To Fetch Latest Data First Then Switch To Cached One (<a href="https://github.com/publiclab/image-sequencer/pull/1819">#1819</a>) [ merged ]

- notify users for selecting empty step (<a href="https://github.com/publiclab/image-sequencer/pull/1818">#1818</a>)  [ merged ]

- fixed unable to load version problem (<a href="https://github.com/publiclab/image-sequencer/pull/1789">#1789</a>) [ merged ]

- made update Prompt responsive (<a href="https://github.com/publiclab/image-sequencer/pull/1831">#1831</a>) [ merged ]

- improved way of displaying docs-link (<a href="https://github.com/publiclab/image-sequencer/pull/1799">#1799</a>)  [ merged ]

- stopped redundant processing and fixed the working of close button (<a href="https://github.com/publiclab/image-sequencer/pull/1797">#1797</a>) [ merged ]

- notify users for failure in loading image via external URL (<a href="https://github.com/publiclab/image-sequencer/pull/1813">#1813</a>) [ merged ]

- Added Dark Mode for ImageSequencer (<a href="https://github.com/publiclab/image-sequencer/pull/1824">#1824</a>)  [ open ]

- clear input field after selecting a module/step (<a href="https://github.com/publiclab/image-sequencer/issues/1825">#1825</a>) [ issue ] 

## Why Me -

Before suggesting any change mentioned in this proposal i have worked on exactly similar to them (almost all) so that i have a clear understanding of how i will be going to accomplish such task.

Examples - 

1. In React upgrade solution i have turned my own chat application based on `Web sockets` and `nodeJs` into react version and successfully upgraded it.
Now it is much more cleaner and it became easy for me to maintain and add more features to it.

2. In draw tool solution (pencil/pen) i have added backend for gradient brush in [gpujs-real-renderer](https://www.npmjs.com/package/gpujs-real-renderer).

3. Added a [rainbow brush](https://github.com/HarshKhandeparkar/rainbow-board) (the tool i am talking about) in rainbow board

4. In Tab-Switching approach i have did something similar [here](https://github.com/tech4GT/Javascript-Applications/pull/2)
Also i have very clear understanding of many advance data structures like graphs , fenwick trees, Segment trees and many more so this solution isn't a big problem for me.

5 like wise i have searched and worked for other solution as well.

## finally - 

`Thank you sir and everyone` who have extracted their time in reading this .I know it is bit lengthy to read but i tried my best to reduce my wording and only mention those details that needs to be discussed.Thanks you so much again. ☺️.
