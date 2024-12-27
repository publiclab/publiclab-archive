---
title: "How are the Q&A's tied together in the website database?"

tagnames: 'database, data, code, question:website, programming'
author: bsugar
path: /notes/bsugar/04-15-2019/how-are-the-q-a-s-tied-together-in-the-website-database.md
nid: 19064
uid: 217812

---

# How are the Q&A's tied together in the website database?

by [bsugar](../../../profile/bsugar) | April 15, 2019 06:06

April 15, 2019 06:06 | Tags: [database](../tag/database), [data](../tag/data), [code](../tag/code), [question:website](../tag/question:website), [programming](../tag/programming)

----

**ANSWER BELOW IN COMMENTS!**

I've been working with some of the data from the website (in beta) and have noticed something peculiar for which I cannot find any pattern to explain. The short story is that given the fact that all answers can also be found as a comment (let's call them "anscoms" for now), there are _36 anscoms unattached to any question (25 questions are missing) and 173 unique ids from 502 anscoms that are not also found in the answers._

Put differently, if you enter the nid of one of 36 "anscoms" (25 unique nid's) in the list of questions, you will not find a question, and if you enter the nid of one of 515 "anscoms" (173 unique nid's) in the list of answers, you will not find an answer. Of those 515 "anscoms", 13 are replies.

A few premises:

QUESTIONS:

1. A "question" is a "note" with a powertag of question:some\_tag. Therefore, a question will appear in both a list of all notes from the website as well as a list of questions.
2. All "questions" are "notes" but not all "notes" are "questions".
3. For every one "question" there exists one and only one "note" that is the same as that "question".
4. This "question" and "note" share the same "nid" (node id).

ANSWERS:

1. An "answer" is also a "comment" (I'm not clear on what distinguishes it).
2. All "answers" are "comments" but not all "comments" are "answers".
3. Some "comments" are in reply to an "answer".
4. "Comments" in response to a "question" can be threaded.
5. "All "answers" have an "id" (or elsewhere, "aid") in the list of "answers".
6. Not all "comments" that are either also "answers" or "comments" in response to a "question" have an "aid".

So.

---------

**Example 1:** [Is anyone doing any work with fungi? or bioremediation?](https://publiclab.org/questions/mushroomman/12-05-2016/is-anyone-doing-any-work-with-fungi-or-bioremediation)

_Question Data:_

|  | csv | nid | uid | title |
|--|-----|-----|-----|-------|
| 0 | questions | 13745 | 498969 | Is anyone doing any… |

|  | csv | nid | uid | title |
|--|-----|-----|-----|-------|
| 0 | notes | 13745 | 498969 | Is anyone doing any… |

_Answer Data:_

|  | csv | nid | uid | aid | accepted | content |
|--|-----|-----|-----|-----|----------|---------|
| 0 | answers | 13745 | 499993 | 149 | False    | Hey Mushroomman!.. |
| 1 | answers | 13745 | 237313 | 251 | False    | I’m late to the party… |

|  | csv | nid | uid | cid | aid | reply_to | thread | content |
|--|-----|-----|-----|-----|-----|----------|--------|---------|
| 0 | comments | 13745 | 579767 | 22223 | 149 | 22382    | NaN    | Hello Jlmaybach… |
| 1 | comments | 13745 | 499993 | 22382 | 0   | 0        | /01    | Hey Mushroomman!.. |
| 2 | comments | 13745 | 237313 | 22481 | 0   | 0        | /01    | I’m late to the party… |

---------

**Analysis:** This is pretty much what I'd expect of that question. As stated above, each question is also a single note, each answer has a separate ID. I'm inferring that they are answers because they are on the top level of the thread. While I might expect to see a corresponding "aid" in the "comments", it makes sense that the reply (first row in "comments") is associated with both the "answer" (aid 149) "comment" (cid 22382). Good times.

---------

**Example 2:** [Have you tried any good DIY microscope dyes or stains?](https://publiclab.org/questions/mimiss/04-01-2019/have-you-tried-any-good-diy-microscope-dyes-or-stains)

_Question Data:_

|  | csv | nid | uid | title |
|--|-----|-----|-----|-------|
| 0 | questions | 18930 | 579821 | Have you tried any good… |

|  | csv | nid | uid | title |
|--|-----|-----|-----|-------|
| 0 | notes | 18930 | 579821 | Have you tried any good… |

_Answer Data:_

|  | csv | nid | uid | aid | accepted | content |
|--|-----|-----|-----|-----|----------|---------|
| 0 | answers |     |     |     |          |         |

|  | csv | nid | uid | cid | aid | reply_to | thread | content |
|--|-----|-----|-----|-----|-----|----------|--------|---------|
| 0 | comments | 18930 | 1   | 23584 | 0   | 0        | 01/    | We’ve used watercolors |
| 1 | comments | 18930 | 579821 | 23589 | 0   | 23584    | 02/    | Do you have any photos |
| 2 | comments | 18930 | 1   | 23593 | 0   | 0        | 03/    | Yes, the purple ones in |
| 3 | comments | 18930 | 237313 | 23594 | 0   | 0        | 04/    | Can you give a quick pointer |
| 4 | comments | 18930 | 579821 | 23634 | 0   | 23584    | 05/    | Staining is used mostly with |

---------

**Analysis:** Here's where it gets confusing. Based on the first example, my expectation would be that at the very least, I would expect comments 0, 2, and 3 to appear in the answers dataset each with their own "aid". I would also expect that comments 1 and 4 would have "aid" of the 0th (comment 23584) element were it in the answers table above. Instead, none of the comments appear in the answers table at all, and none of them have aid's.

---------