---
nid: 25507
title: Know Your Audience - [Outreachy & Public Lab Internship] Blog #3
path: public/static/notes/noi5e/01-20-2021/know-your-audience-outreachy-public-lab-internship-blog-3.md
uid: 726270
tagnames: coding,blog-submission,outreachy,outreachy-2020
---

# Know Your Audience - [Outreachy & Public Lab Internship] Blog #3

Hi again readers! It's time for another blog as one of the Outreachy interns at Public Lab. The theme of this week as selected by the organizers of my internship is *'Think About Your Audience'*.

I have to start this blog post by getting something off my chest. I was in our weekly Zoom internship meeting with some of the staff at Public Lab. It was my turn to present, and I was sharing my screen and going through the Public Lab website. I wanted to demonstrate a unique quirk of the comment form system&mdash;which I've been working on for the past seven weeks&mdash;and ask people if we could remove a certain piece of functionality.

I opened up one of the research notes at the top of the page, and scrolled down to the comment form. *Oh wait*, I said to myself, *I want to demonstrate something in the edit comment form, but I haven't yet posted a comment that I can edit on this page. I'll need to do that*. I scrolled all the way down to the *Post Comment* form. *Hmm, what do I type in for this comment?* I asked myself, as everyone patiently watched me on screenshare.

Similar to [lorem ipsum](https://en.wikipedia.org/wiki/Lorem_ipsum), there must be some kind of term for the sort of nonsensical sentences that programmers use in [system tests](https://noi5e.hashnode.dev/everybody-struggles-outreachy-and-public-lab-internship-blog-2) to test out comment forms, create dummy user accounts, passwords, and the like. 

Anyway, in the moment, I decided to default to the phrase that I've been using these past couple of months for any kind of dummy comment: 

> *Poo*

I don't know why I've chosen this word to fill out countless comment forms while testing the site. I can't be the only one who does things like this! Programming is so detail-oriented and brain-intensive. Maybe my subconscious is trying to find ways to cut loose and be silly. 

Anyway, you might be able to guess where this story's heading. **I forgot that our website sends everyone on a comment thread an email whenever someone posts a reply**. These emails include the full comment body text. Just a few minutes later, while we were still meeting, our project manager told us that someone had contacted her just minutes after I made the *Poo* comment. They wanted to know if I could possibly NOT spam user discussions in the future talking about poo, and move all further such comments to our dedicated testing site.

# 🤦🏽🤦🏽🤦🏽

### Know Your Audience
I mention this story not just to laugh at my own mistakes, but because I think it illustrates something about Public Lab that's different from other websites. I'm conditioned to think of the Internet as a place which is largely anonymous, with seemingly (sometimes disturbingly) little accountability. I like that Public Lab has an intimate, very involved community made up of the kind of people who would say something whenever they notice something that's off.

One of my favorite memories from this internship was sitting in on an [OpenHour](https://publiclab.org/openhour), which is a live seminar that Public Lab hosts every month. The theme of December's OpenHour was [*Take Back Your Air!*](https://www.youtube.com/watch?v=EYkzs3i15z4), and was centered on the use of a DIY air-monitoring tool called The Bucket. I think it's cool that The Bucket seems relatively low-tech and low-cost&mdash;it basically looked like a plastic bucket from a hardware store fitted out with some other parts. A group of about 30 people were assembled on the call, including environmental activists from Durban, South Africa who had used The Bucket to monitor their local air.

As a programmer, it's appealing to me to work for a group of people who are so passionate, and tightly-knit to the extent that they can share a Zoom call together. It means that I'm much more likely to see the effects of the changes that I make, and receive community feedback in real time. I'm sure this is different from working on an enterprise-level project where it would probably feel more like I was working on **a tiny, microscopic cog in a giant machine.**

### What I've Been Doing
The single goal of my internship is to fix bugs and improve the state of Public Lab's Comment Editor. This project initially appealed to me because it was so... I don't know the word... *tactile*? Easily explainable? 

I think most people on the street can understand what a Comment Editor is. Some other open-source projects I've worked on are a little more abstract:

> Purpose: show metrics and insights to help meet release criteria.

That's not a knock against these projects! I'm sure that very abstract, high-level projects like these save a lot of time or brainpower in the aggregate. I'm just saying that it's nice to work on a Comment Editor and be able to easily explain to my friends and loved ones what I've been working on full-time for the last two months.

The Comment Editor is VERY frequently used by Public Lab's userbase. It's the medium by which important conversations happen, discussing the research notes, wikis, and questions that comprise the content and lifeblood of the site. I don't think I fully realized the extent of this until *Poo-gate* happened.

### Cross-Wiring Bugs
I have to say that the Comment Editor still has a **LOT** of funny quirks that need some loving attention and care. For this last month, I was working on what we call *cross-wiring* bugs. What are those? Let's say that you wanted to reply to another person's comment on your research note. You'd take the following steps:

1. Click on 'Reply to this commment...' to open up a comment form.
2. You want to upload an image to your comment, so you drag & drop an image into the form.
3. Naturally, you would expect that this image would end up in the Reply comment form, right?
4. **Surprise!** It doesn't. Instead, you hunt around for the image, and it's ended up in the MAIN comment form at the bottom of the page. Of all places!

See [this video of a similar bug](https://user-images.githubusercontent.com/4361605/105230414-27351680-5b1a-11eb-8a00-675dd8d79848.mov) in action. Rich-text (bold, italic, & link insert) changes are made in the Reply comment form, but they end up in the Edit comment form.

These bugs happen because of how the Comment Editor code handles what programmers call [state management](https://en.wikipedia.org/wiki/State_management). I think of a website's *state* like a book of records that can tell you what's currently going on with the website. Things like:

- Is the user logged in?
- Did they click this button?
- Did they fill out some text in this form?
- What was the last form that they interacted with?

You can imagine how much more confusing *state* would be if there were TWO of these master record books floating around instead of just ONE. Like, let's say that someone made the change in one book, but forgot to update it in the second book. The two books would fall out of sync with each other. In a nutshell, inconsistencies like these can lead to cross-wiring bugs like the ones above.

Over time, with many people contributing to a large project, inconsistencies like these can pile up on top of each other and become tightly-wound knots. As a programmer, I sometimes feel like I'm a masseuse and I'm trying to get these tight muscle-knots to relax and fall into place again.

![bf002270f9dcb9e0cbcdd15fdb4d1644.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1611183036218/v-Hx1d-2d.jpeg)

What does this look like in real life? Let's just say that I've gotten really good at taking notes:

![Screen Shot 2021-01-20 at 2.26.15 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1611183064330/TvMM_BH2K.png)

### Readability
Maybe you've guessed this already by how long and rambling my blogposts are, but I've done a fair amount of writing both professionally and for fun. I never knew before I started this internship how important writing and reading comprehension is when it comes to programming. Like, writing and reading actual English language, and not just binary `1`s and `0`s.

![index.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1611183076682/KeL6Wv4GK.jpeg)

Sometimes the important `aha!` moment when I'm fixing bugs is simply discovering the **NAME** of something. Like, programmers use a common vocabulary of concepts, and when I discover something's **NAME**, then it becomes much easier to Google said **NAME** and see all the bugfixes and articles programmers have written about this mysterious thing.

Like, let's say I was looking at this particular line:

`likes_map = likes.where.not(emoji_type: nil).includes(:user).group_by(&:emoji_type)`

This a database query that pulls a list of all the likes on a given comment, the usernames of all the people that clicked like, and their specific reactions (Smile! 😊 Laugh! 😂 Hooray! 🎉).

What puzzled me when I first read this line was the `&.` in this part:

`.group_by(&:emoji_type)`

I knew that `.group_by` meant that the results of this database query would return something like this:

```
😊 => { "will", "matt", "tiffany" }
😂 => { "sharif", "cisco" }
🎉 => { "irene" }
```

But what did that `&.` mean? Typing `&.` into Google [didn't return too many useful results](https://www.google.com/search?sxsrf=ALeKk01th64qFkW1L34XAYynL5c5DqPVxw%3A1611175949415&ei=DZgIYPz0GMnN0PEP2pKIqAo&q=%26.&oq=%26.&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEdQhJqNAliim40CYMWejQJoAHADeACAAb8BiAHIApIBAzAuMpgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwi8r4qRsqvuAhXJJjQIHVoJAqUQ4dUDCAw&uact=5).

When I realized that `&.` is actually what's known in programming as an [operator](https://en.wikipedia.org/wiki/Operator_(computer_programming)), that narrows the field considerably because then I can Google `&. ruby operator` instead and return a more specific set of results:

![Screen Shot 2021-01-20 at 2.09.53 PM.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1611183095956/GeZfH2sJs.png)

Aha! `&.` is known as the **safe navigation** operator! Building a strong vocabulary of concepts like these over time helps me to become a more knowledgeable developer. 

When I was a kid, I noticed that other kids didn't like to read the instruction manuals included in their video games before playing. Me? **I read video game instruction manuals religiously.** I think this weird personality quirk is still helping me presently in this internship.

![wii-user-manual_o_589112.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1611183137225/YQmrwmiHi.jpeg)

### Code Golf
I recently learned about [code golf](https://en.wikipedia.org/wiki/Code_golf), which describes an interesting programming philosophy that I've been thinking about lately.

> Code golf is a type of recreational computer programming competition in which participants strive to achieve the shortest possible source code that implements a certain algorithm.

For example, here's a computer program that prints the first 100 digits of Pi:
`;''6666,-2%{2+.2/@*\/10.3??2*+}*'1000<~\;`

That's it! That's the entire script!

Compare that with this script:
```
import sys
from time import time
from mpmath import mp

digits = int(sys.argv[1])
mp.dps = digits

print("Pi is approximately equal to:")

start_time = time()
print(mp.pi)
end_time = time()
seconds = end_time - start_time

print("Done, {} digits in {} seconds".format(digits, seconds))
```

When I first started out as a programmer, my programming resembled the first script more: trying to very clever in very little space. Later, I started to work more on open source and group projects, and I realized that it was way more important to write code that was **readable** by other people. 

In terms of this internship, I've been trying to learn how to break my projects into smaller chunks that are more readable by my mentor and others who are reviewing my code.

For example, one of my first major pull requests was this [giant lunker](https://github.com/publiclab/plots2/pull/8897) with 46 comments, 23 commits, and 10 files changed.

At first I felt proud of doing such a *big* thing... But then I realized that it's probably pretty overwhelming for my mentor and coworkers to sift through something like that. Someone, a real human being like me, has to read through my proposed changes before they accept them and merge them into the codebase. **As a programmer, why would I not do my best to make that whole process as stress-free and readable as possible?**

- [Part 2: Everybody Struggles!](https://noi5e.hashnode.dev/everybody-struggles-outreachy-and-public-lab-internship-blog-2)
- [Part 1: Intro & Core Values](https://noi5e.hashnode.dev/intro-and-core-values-outreachy-and-public-lab-internship-blog-1)
- *[Connect with me on LinkedIn](https://www.linkedin.com/in/will-gutierrez-8097275/)*
- *[Track my progress in real-time at Public Lab's repo!](https://github.com/publiclab/plots2/issues/8775)*
- *[My GitHub Profile](https://github.com/noi5e)*