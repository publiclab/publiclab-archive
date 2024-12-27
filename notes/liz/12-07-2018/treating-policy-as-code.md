---
title: "Treating policy as code"

tagnames: 'writing, lead, versioning, policy'
author: liz
path: /notes/liz/12-07-2018/treating-policy-as-code.md
nid: 17825
uid: 7

---

# Treating policy as code

by [liz](../../../profile/liz) | December 06, 2018 21:59

December 06, 2018 21:59 | Tags: [writing](../tag/writing), [lead](../tag/lead), [versioning](../tag/versioning), [policy](../tag/policy)

----

There are some discussions going on about how we might approach environmental regulation as a community -- understanding it, critiquing it, improving it -- here are my thoughts:

Many folks are familiar with online, collaborative writing platforms like GoogleDocs that offer detailed version tracking and line-by-line commenting. Etherpad is another example, it's the open source equivalent that runs every "Talk" page on publiclab.org. Some people may also be familiar with online platforms offering the same features for collaborating on more specialized text (programming code) such as [github.com][1]. There are some experiments emerging in the legislative space attempting to use the simplest line-by-line commenting features to collaboratively build a broader understanding of and organize response to existing texts, for example, in NYC, where activists are organizing public discussion on specific policy points in the City Charter as part of the [Charter Revision Commission][2] process: [https://via.hypothes.is/https://sites.google.com/view/nyccharterreadinggroup][3]. These are parts of a trend of democracy activists around the world running experiments to involve greater numbers of people in contributing to “governance beyond the vote” by collaboratively writing the documents of governance such as constitutions and legislation. For some examples, visit: [https://catalog.crowd.law/][4]. Huge amounts of work have gone into making progress at this scale, and it's been a long time coming--for a glimpse into an earlier moment in legislative collaboration and version control, see this [2012 post by SunlightFdn][5] full of passionate prototypes and broken links. 

I was clued in by Digital Humanities professor [Jo Guldi][6] to an approach called “text mining” used to compare and analyze large bodies of words such as parliamentary debate transcripts ([Barron, Huang, Spang, and Dedeo, 2018][7]) and legal texts ([Funk and Mullen, 2018][8]). If this sounds interesting, consider checking out some of the methods described by Julia Silge in
__[Text Mining with R][9]__. Overhearing our discussion, @Bronwen The Librarian offered an analog precedent for text mining called a “concordance,” a kind of index that assists in engaging in a quantitative way with text (think The Bible), such as how many times a certain word appears. Quantitative approaches to text can offer tracing of lineage, such as what was written first and went on to influence many others, and track subtle changes over time, for instance in tone or other indicators of culture change. 

### What does this have to do with Public Lab?
I'd offer that an open culture approach to policy and regulation might experiment with BOTH text analysis on existing policy AND detailed version tracking + line-by-line feedback for collaboratively developing future policy. This would be consistent with the way Public Lab extends open culture practices of transparency and scaffolding interaction to specialized domains in order to broaden participation. Some may recall me muttering the phrase "the regulatory landscape is more fragmented than the ecological landscape." Our community collaborates to share knowledge about environmental health issues across regions; this translocal collaboration should include policy, and we need a set of tools that enables us to compare, analyze, and track policy points that correlate with best (and worst) environmental health outcomes. 

### Quick start
Yesterday, in conversation with @read_holman, the Public Lab Fellow who is leading a nationwide [lead data initiative][10], we briefly experimented with making a spreadsheet where we could add attributes to policy text. He started to explain just a few of the relevant attributes that would be needed to visualize variation in regulatory approach alongside health outcomes in the cities he's engaging which include Houston, Tuscon, Detroit, etc. In the screenshot below, see the columns we mocked up for `level of government`, domain (or `gov't silo` such as housing, environment, utility, etc), etc:  
![image description][11]

The columns above are just a sketch of a first draft meant to invite more people into brainstorming on this idea. I suspect it is possible that text mining could identify patterns in policy by taking other attributes into account and comparing across regions. What if we paired up domain experts like @read_holman (who works on lead and public health) with text miners to seek patterns? Are there certain policies that exist at some levels of government that disrupt the function of otherwise good policy that exists at other levels? Can we identify types of policy approaches that are easily gamed, underminable by elected officials, or have been shown to repeatedly fail somewhere along the way to protecting public health from lead? Can we map these patterns and organize to address this?

### Integrating decentralized publics into centralized policy-making processes
Stepping aside from what patterns text mining may unearth, here are three more basic options for structuring public engagement around policy: 

* Perhaps if text miners collaborate with domain experts to sort out and organize the policy in machine readable ways for the purpose of their analysis, a secondary yield might be that it becomes easier for the rest of us to simply compare policy on the same topic from different municipalities, and to structure public comment around specific policy points that appear again and again in cities, county, and state policy.  
* Separately, somewhere in the world, it is likely that some open source group is already running workable, scalable public policy discussions supported by text in accessible formats with line-by-line commenting, and maybe accompanied by some visualizations. We could look into these approaches (by saying hi to some folks featured in [Crowd Law Catalog][12]!) and try one or two.
* Lastly, we could at least try using the same version control and line-by-line commenting tools for environmental health policy that we already use for other writing. This is so 2012, but yet it would still be more helpful to use Github to organize efforts to broaden comprehension and collaboration than a pile of PDFs. 

I would be excited to see some experiments along these lines. I would be even more excited to hear your ideas! What do you think?

  [1]: http://github.com
  [2]: https://www1.nyc.gov/site/charter/index.page
  [3]: https://via.hypothes.is/https://sites.google.com/view/nyccharterreadinggroup
  [4]: https://catalog.crowd.law/
  [5]: https://sunlightfoundation.com/2012/09/27/on-legislative-collaboration-and-version-control/
  [6]: https://www.joguldi.com/
  [7]: https://www.pnas.org/content/115/18/4607
  [8]: https://academic.oup.com/ahr/article-abstract/123/1/132/4840258
  [9]: https://www.oreilly.com/library/view/text-mining-with/9781491981641/
  [10]: https://publiclab.org/wiki/the-lead-data-collaborative-overview
  [11]: /i/28150.png "Screen_Shot_2018-12-06_at_3.18.01_PM.png"
  [12]: https://catalog.crowd.law/