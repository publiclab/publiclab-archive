---
title: Public Lab's contribution framework (deep dive 2019)
tagnames: software, blog, code, barnstar:basic, software-outreach, first-time-poster
author: sashadev-sky
path: /notes/sashadev-sky/05-16-2019/public-lab-s-contribution-framework-deep-dive-2019.md
nid: 19429
uid: 555321

---

# Public Lab's contribution framework (deep dive 2019)

by [sashadev-sky](../profile/sashadev-sky) May 16, 2019 16:18

May 16, 2019 16:18 | Tags: [software](../tag/software), [blog](../tag/blog), [code](../tag/code), [barnstar:basic](../tag/barnstar:basic), [software-outreach](../tag/software-outreach), [first-time-poster](../tag/first-time-poster)

## 7 Months

I recently reached my 7th month as a contributor to Public Lab's open source software, a milestone that, amongst other things, brought to my attention that it's now or never to write a blog post.

In the spirit of writing about something that really does deserve a full 7 months of consideration, and still keeps me thinking, I want to shine light on Public Lab's contribution framework.

Open source communities are fascinating to think about because they come in all shapes and sizes - most successful communities share certain commonalities (ie. often called "best practices"), but underneath that their foundations are a testament to achieving a specific ethos and set of goals.

Thinking about Public Lab's contribution framework, founded on 3 simple steps, has allowed me to shape my understanding of the all-encompassing open source community, and what makes Public Lab's sub-community so special.

## FTOs

My [first PR ever](https://github.com/publiclab/image-sequencer/pull/413) was Oct. 16th, 2018, where I completed what is known in some beginner-friendly OSS communities as an "FTO" (First Timers Only) issue. The labels we use for these, which you might find across Github, are "first-timers-only" and "good first issue". To this day, I have opened 21 of these issues myself.

FTO issues are the glue that holds PL's framework together, and teach us invaluable lessons about open source community and culture. (More on this later).

---------

## Workflow

PL follows a 3 step process for initiating new members:

1. A new contributor completes a guided "FTO" issue
2. Then they complete any regular issue, often labeled "help wanted"
3. Lastly, they open their own FTO and help guide a new contributor through it

**these 3 steps are incredibly well thought out.**

---------

**Primer - Openness**

One of the most admirable and celebrated aspects of open source is the various acts of kindness amongst contributors in a community. Open source communities make learning an inherently social process, so contributors share an interest in mutual aid and interaction.

Although socialization is inherent, communities still bear the responsibility to facilitate an optimal environment for it. The foundation a community lays down for workflow and culture shapes contributors' interactions.

Public Lab's approach works on the principle of **openness**. Openness as a paradigm of organization:

---------

---------

**This:** _Openness is an overarching concept or philosophy that is characterized by an emphasis on transparency and free, unrestricted access to knowledge and information, as well as collaborative or cooperative management and decision-making rather than a central authority.
[![](https://duckduckgo.com/assets/icons/favicons/wikipedia.2x.png)More at Wikipedia](https://en.wikipedia.org/wiki/Openness)_

**Includes this (open source software):** _4\. [computing](https://en.wiktionary.org/wiki/computing#Noun) degree of accessibility to view, use, and modify computer code in a shared environment with legal rights generally held in common and preventing proprietary restrictions on the right of others to continue viewing, using, modifying and sharing that code._

---------

---------

But also openness as a community mantra (ie. receptiveness, kindness, patience).

As the landscape of open source software changes rapidly, with more users joining Github in 2018 than in its first 6 years combined, some communities lead the way in developing a new collaborative model for this uncharted territory.

PL's workflow is exemplary of how this is done. Its approach is multi-faceted, but the focus here is on its ability to **cleverly weave community values into its foundational workflow**, which carries the most palpable benefits. 

Its workflow is a **cycle of reciprocity,** in which every contributor experiences both ends. From a contributor's first contribution, an air of gratitude starts spreading which they'll carry on.

This is summarized well by the wise words of Google's Summer of Code [mentor guide](https://google.github.io/gsocguides/mentor/open-source-culture.html):

_"Consider treating every patch like it is a gift. Being grateful is good for both the giver and the receiver, and invigorates the cycle of virtuous giving"_

This cycle starts with step 1\.

---------

#### _Step 1_

provides the opportunity to learn about PL's community culture firsthand while working through an FTO guided by another contributor. This can often be a contributor's first pull request ever, which is one of the toughest milestones in contributing to OSS. Two notable ways PL empowers contributors through its culture of kindness and gratitude:

- [Welcome bot](https://github.com/apps/welcome): each new contributor receives a congratulatory message on their first PR: 

![image description](/i/32273.png "Screen_Shot_2019-05-15_at_7.23.02_PM.png")

- Every FTO receives feedback from reviewers or maintainers. Commenting something as small as "thank you" makes an impact. **Surprisingly, this is not necessarily standard etiquette across open source communities**.

---------

---------

**A quick anecdote**: _featuring a community that suffers from the absence of any structured empowerment system_

Recently, I stumbled upon some incorrectly translated Russian-language configuration files for a platform-specific i18n community. I opened two PRs. Shortly after, they were merged without any communication exchanged besides these notifications:

![image description](/i/32280.jpg "russian_edited-1.jpg")

It's not that I wanted a gold star. My main problem with this was that the process felt like a side conversation with myself rather than a community contribution, which is not a sought after experience in OS.

*Communi*cation is an axiomatic part of a *communi*ty; this is not a revelation. Any communication is good (a merged pull request is a whole lot better than nothing), but not all communication is the same.

Despite having about 400 contributors and 3,500 stars, the repository still has a number of translation inaccuracies that a single, motivated contributor could fix. It is not meeting its full potential because its large contributor pool is not, well, contributing much after a few initial PRs.

Side note: **full respect to this community and what they have accomplished**. This anecdote only serves to point out the opportunity cost of expending less resources on contributor engagement, and that contributor participation is not something that's guaranteed to a community.

---------

---------

#### _Step 2_

provides the opportunity to rinse and repeat the Git workflow learned from the FTO, with the added challenge and opportunity to create and implement self-directed code improvements.

---------

#### _Step 3_

creating your own FTO, provides the opportunity to give back to the community - specifically by guiding new contributors through the same process you just worked through recently.

The result is a community in which the contributors are passionate about helping out: see the [free response results](https://publiclab.org/notes/liz/04-15-2019/report-2019-software-contributors-survey#Anything+else+you) of PL's contributor survey.

It also creates an atmosphere of mutual support in which contributors experience being both the supported and the supporter. The implications behind this are important. Contributors that make it to the supporter side and open an FTO typically share a common understanding - that every contributor here is challenging themselves to take on new things and grow, regardless of experience level. The prospect of airing one's work in public feels less intimidating within the community. It is completely reframed as a means of connecting to a community, and materializes one of the key benefits of open source: shared knowledge.

---------

## Sustainability

PL's community expansion has largely been self-sustainable so far.

As each new member is expected to add at the very least one new FTO, the community grows exponentially.

As cited in PL's [2019 community report](https://publiclab.org/notes/liz/04-15-2019/report-2019-software-contributors-survey):

> _"we have grown over 400% in the past year to approximately 500 contributors over the total lifetime of the project."_

More importantly, contributors proceed to take on leadership roles, such as joining the "reviewers" team, at a pace that reasonably matches growth. A system of distributed responsibility reminiscent of how a blockchain is governed pans out.

Setting a clear path for contributors to be able to advance to the role of a "reviewer" is an important aspect of openness that leads to sustainability, as it creates an incentive for contributors to become more deeply involved in the community. In PL, this path is the completion of the workflow.

These same contributors always go the extra mile. Off the top of my head, projects spearheaded by contributors in the last few months include: a weekly [check-in system](https://github.com/publiclab/plots2/blob/master/doc/CHECKINS.md "https://github.com/publiclab/plots2/blob/master/doc/CHECKINS.md") (implemented by myself and [refined](https://github.com/publiclab/plots2/issues/5627) by @bsugar), revamping the [community contributor page](https://code.publiclab.org/#r=all), updating countless documentation to clarify information for newcomers, establishing a monthly open hour call, and most recently - a [system for tracking FTOs](https://github.com/publiclab/plots2/issues/4963) (by @gauravano, appointed community coordinator).

The benefit of self-sustainability is critical to understanding that the trend towards openness has benefits previously unreachable with an old leadership model (What comes to mind is a repo advertising "New maintainer wanted" on Github after the old network is exhausted):

![image description](/i/32321.jpg "maintainerswanted2.jpg")

---------

## Open Source in 2019

PL's community growth aligns with a general growth trend in open source. Consider the [2018 Github stats](https://octoverse.github.com/), such as that 1/3 of all pull requests ever were created in 2018\.

As more new contributors look for a fit in an open source community on Github than ever before, openness is a useful mantra to follow in 2019 if an organization seeks to inspire new contributors, scale (relatively) organically, and has the flexibility to restructure.

To ensure the consistent application of a community's desired open source practices, this framework for open governance needs to be built on a tailored and well thought out foundation. Public Lab's simple workflow and emphasis on a positive, supportive culture is a great example of how one community approaches structuring their foundation, managing contributor growth and ethos.