---
title: "Everybody Struggles! - [Outreachy & Public Lab Internship] Blog #2"\ntagnames: 'outreachy, outreachy-2020'
author: noi5e
path: /notes/noi5e/01-08-2021/everybody-struggles-outreachy-public-lab-internship-blog-1.md
nid: 25436
uid: 726270

---

![](https://publiclab.org/public/system/images/photos/000/042/352/original/passedout.jpg)

# Everybody Struggles! - [Outreachy & Public Lab Internship] Blog #2

by [noi5e](../profile/noi5e) | January 08, 2021 08:49

January 08, 2021 08:49 | Tags: [outreachy](../tag/outreachy), [outreachy-2020](../tag/outreachy-2020)

----

Happy 2021! It's time for another blog as one of the [Outreachy](https://www.outreachy.org) interns here at [Public Lab](https://www.publiclab.org). Every two weeks, the Outreachy organizers suggest a new topic for our blogposts. The theme of this post is: ***GETTING STUCK***. 

They elaborate further on this theme:

> When you model that you (a successful accepted Outreachy intern) get stuck, that helps the next round of Outreachy applicants and interns see that it's okay to get stuck. Everybody struggles!

I can see the reasoning here, and I like it. Looking back on various jobs I've had, I can see that in many of them, there was always pressure (even a little bit) as a worker to act as if I was so competent that I didn't need to ask for help. 

Unfortunately, in the long run, I don't believe this is sustainable for organizations because obviously *everyone* in the organization is going to need help at some point! Another way you could describe "*asking for help*" is that it's just the process by which members of an organization teach and learn among themselves. Doesn't that sound like a great place to work?

On the opposite side of the spectrum, this comic demonstrates what it can feel like to be working in a place where nobody does this, and everyone overcompensates by speaking jargon, or trying to appear busy:

![Untitled-12-300x281.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1610093798139/p1ZTdPnwH.png)

**In some settings, it feels awkward to ask for help, because you don't want to risk humiliation!** Luckily, I don't feel this way at Public Lab.

### The Troubles I've Seen
I have to admit that I'm a bit late with this blog post. I've been working hard on my project, which is an [overhaul of Public Lab's comment editor](https://github.com/publiclab/plots2/issues/8775). I guess that I feel driven in some way to make the most of the internship, learn as much as I can, and do the best I can to make sure that my impact is a positive one. 

However, I'm seeing that it's hard, and possibly a little unhealthy for my cortisol levels to keep that enthusiastic drive going at 100% all the time. So I appreciate being able to write these blog posts, slow down a bit, and reflect on what I've learned. *Gosh, I guess it's in my interest to not procrastinate on writing these posts!*

I talked in my first post about how one of my core values is [persistence](https://noi5e.hashnode.dev/intro-and-core-values-outreachy-and-public-lab-internship-blog-1). One of the things I've learned in my first month as an intern is that persistence, while certainly a great personal trait, can definitely lead me on a wild goose chase sometimes. I wouldn't say that my persistence is a drawback, but I will admit that it sometimes turns into a stubbornness that won't let go or take a break. Sometimes that's troublesome, because I *"just really want to know why this thing doesn't work the way I want it to, darnit!"*

![index.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1610094908496/8s4lmnyY8.jpeg)

### System Tests
This past month, I've been writing a lot of new system tests for the comment editor. For non-programmers that might be reading this, I would describe a system test this way:

> Let's say you were a programmer at facebook, and your job is to fix bugs in the code. For example, you wouldn't want there to be a bug where you like a photo of a party, and somehow the bug copies that photo ten times into a message and sends it to your grandmother. *Weird example I know, but I'm sure stuff this weird does happen on some websites*.

> One way of testing this bug would be to actually go through the motions yourself: liking photos, then checking your messages to see if anything got through to Grandma. This might work fine if you were pressed for time, and were pretty confident in the bug fixes you'd made... But what if your fix didn't work and you kept having to tweak the code, then check your likes and messages repeatedly? That would actually be pretty time consuming in the long run.

> That's where system tests come in. The computer can do the whole 'check likes, check messages' sequence really quickly, and efficiently. Public Lab's site is built with Rails, a web framework. When I run `rails test:system` in Rails, the system test basically starts a *headless* browser. A headless browser is a browser that runs in the background **without** a visual output to the monitor. The system test still simulates typing and mouse clicks, but it does it in the way a computer would... *"Click on the element that has inner text, 'Publish'!"* All of this is done much faster than any person could ever do. Neat huh?

### The Red Herring
I didn't really understand all of this when I started out. I had some understanding of what testing involved, but didn't yet know the distinction between let's say, [unit tests](https://www.geeksforgeeks.org/difference-between-unit-testing-and-system-testing/), and system tests. The latter is much more holistic, and usually involves simulating the same actions a user would take. 

It took a while, at least the first three weeks of the internship, for this to really sink in. When I first started, the tests I wrote were still pretty abstract. I was trying to find every which way a comment could be submitted through the site.

In fact, I got into a big mess of **stuckness** when I started writing a test for editing comments, and I tried to approach it from the most complicated way I knew:

>*"Hmm... What would it be like if instead of typing text into a comment form and pressing Publish, I tried to submit a comment directly by making an XHR request to /comments/edit using our addComment script?*

**Answer:** What would it be like? Not very fun! In fact, I found out it feels more like this:

![why-has-god-e26345.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1610094018934/9Tuk9FUbh.jpeg)

By approaching the test in this way, I was ignoring the main point of system tests. They're meant to simulate how a user would interact with a website as a visual, intuitive thing, and not how a robot would parse chunks of data. (*Mmm... chunks of data*)

Accordingly, I went down a serious rabbit hole. My test wasn't working, and I really thought that if I persisted, I could probably just **make it work**:

1. Why is the test failing?
2. I think the comment edit saved, but why isn't it appearing on the page?
3. Usually comment edits refresh the page, how come the page isn't refreshing here?
4. Maybe the GET request is improperly formed?
5. Nah, I checked and it seems fine.
6. Wait a second, if I log the requests in the console, it's supposed to be a POST request, not a GET request! Okay, I solved it!
7. Nope, I didn't get it. 
8. Changing to a POST request does absolutely nothing. 
9. Wait a second... There's an authenticity token embedded in the form! That must be the missing link! It must be some weird Rails thing. What if I send that with the request?
10. That does absolutely nothing either.
11. Why did I even think that would refresh the page for me, which is the whole point of this?

And so on and so forth. You can follow the whole epic saga on GitHub [here](https://github.com/publiclab/plots2/issues/8810#issuecomment-747867020). My mentor Jeffrey was pretty patient with my multiple requests for help, and he offered many ways of approaching the problem that were useful (more on that in a bit).

Still though, at the end of the day, as much as I wanted to solve the mystery of the not-refreshing page, I had to turn in the towel. I still don't really get what happened *(although I might be tempted to take a look again after the internship ends)*. Moreover, to add salt to the wound, it finally dawned on me what a system test was, and how my test with its weird, unlikely premise was **not it**. All that work with nothing to show!

![4XWHArp.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1610094942890/ukF80T2_-.png)

I won't say that it was a waste of time, because I don't believe in such a thing. But I think if I could choose again, I'd rather have more fun making progress coming up with a solution that would be of use to someone, something that solves a challenging (but not too hard) bug. The question is: is that a realistic thing to hope for, 100% of the time? Maybe in programming, like in life, we have to go through the swamp to learn something, and that's just inevitable. And maybe even valuable?

### Silver Lining
Actually, come to think of it, and I swear that I only realized it through writing this post, there **was** a real silver lining to that whole affair. I was having trouble wrapping my mind around what was going on with the test, and Jeffrey suggested that I debug the JavaScript in the browser console. I read that and I said to myself... *"Wait a second... You can debug... JavaScript... In the browser console?!?! WHOA!"*

![unnamed.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1610094237939/aNNC-N-a0.jpeg)

I think for Jeffrey it was probably a pretty standard thing. And honestly, for someone who says that they know JavaScript, I really should have known this by now. But for whatever reason, I'd never put 2 + 2 together in that way. 

I knew that all websites are built with HTML, JavaScript, and CSS. I knew that you could open up a [browser console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console), and type in little programming commands like `2 + 2` and get `4`. But for some reason, I just never connected all the dots and understood that if I wanted to know the value of a certain variable on a page at a given time, I could just open up the `console.log(variable)` and see for myself!

This little lesson has helped me out a lot in the internship... It still didn't help me understand the initial problem! But that little gem of knowledge helped me with everything afterward, and Rails tests in general.

Rails is written in a programming language called [Ruby](https://www.ruby-lang.org/en/), which I've been growing to love. Its syntax is fairly intuitive and actually resembles English grammar more than any other language I know. However when writing system tests, there are times where you have to interface with a given web page in ways that only JavaScript could do. Here's what it looks like (the page.execute_script part): 

![Screen Shot 2021-01-08 at 12.26.52 AM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1610094430382/xqVLMzkHB.png)

The problem with this is that if an error occurs in your JavaScript, you would never know about it! The JavaScript has no way of relaying that error back to Rails. It's like throwing something into a black hole, or like that horror movie scenario where the friend descends into the basement and never comes back... Very unsettling! And hard to debug!

What I feel like when I'm trying to figure out what my JavaScript is doing, with Rails as an intermediary:

![800wm.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1610094810068/EJ-MC55HC.jpeg)

Anyway, Jeffrey's advice to debug things in the console really helps in these situations. If something goes wrong with the JavaScript, I just open up Public Lab's site, open the corresponding page, and start logging things in the console. I'm almost slapping my head at how 'Duh!' this all is in retrospect... But it's a good reminder that sometimes we just really need other people's help, and that's nothing to be ashamed of! In fact, it can really teach us a lot.

Maybe other people, perhaps even non-programmers, can relate to this feeling of epiphany I had? I definitely welcome comments on this :)

- [Part 1 of this blog series](https://noi5e.hashnode.dev/intro-and-core-values-outreachy-and-public-lab-internship-blog-1)
- *[Connect with me on LinkedIn](https://www.linkedin.com/in/will-gutierrez-8097275/)*
- *[Track my progress in real-time at Public Lab's repo!](https://github.com/publiclab/plots2/issues/8775)*
- *[My GitHub Profile](https://github.com/noi5e)*