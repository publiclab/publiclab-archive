---
title: "Cultivating Community Through Cultivating Data"

tagnames: 'community-metrics, data, evaluation, networks, community-analysis'
author: bsugar
path: /notes/bsugar/03-30-2019/cultivating-community-through-cultivating-data.md
nid: 18838
uid: 217812

cids: 

---

![](https://publiclab.org/public/system/images/photos/000/030/900/original/plots_doc_home_med.png)

# Cultivating Community Through Cultivating Data

by [bsugar](../../../profile/bsugar) | March 25, 2019 00:28

March 25, 2019 00:28 | Tags: [community-metrics](../tag/community-metrics), [data](../tag/data), [evaluation](../tag/evaluation), [networks](../tag/networks), [community-analysis](../tag/community-analysis)

----

**Code:**

[Github Repository](https://github.com/skilfullycurled/plots-cultivating-community) (contains some nice images which you can look forward to!)

**Activities:**

[Database As Network](https://publiclab.org/notes/bsugar/04-29-2019/part-i-how-to-create-a-relational-diagram-of-the-public-lab-database "https://publiclab.org/notes/bsugar/04-29-2019/part-i-how-to-create-a-relational-diagram-of-the-public-lab-database") [(Part I)](https://publiclab.org/notes/bsugar/04-29-2019/part-i-how-to-create-a-relational-diagram-of-the-public-lab-database)[  
Database As Network (Part II)](https://publiclab.org/notes/bsugar/04-30-2019/part-ii-how-to-create-a-relational-diagram-of-the-public-lab-database)

**Questions:**  
[How do I interpret the relationship between the schema.rb file and the models?](https://publiclab.org/questions/bsugar/03-02-2019/how-do-i-interpret-the-relationship-between-the-schema-rb-file-and-the-models "https://publiclab.org/questions/bsugar/03-02-2019/how-do-i-interpret-the-relationship-between-the-schema-rb-file-and-the-models")[  
How are the Q&A's tied together in the website database?](https://publiclab.org/questions/bsugar/04-15-2019/how-are-the-q-a-s-tied-together-in-the-website-database "https://publiclab.org/questions/bsugar/04-15-2019/how-are-the-q-a-s-tied-together-in-the-website-database")

**Prior Work:**

[First draft of tag graph](https://publiclab.org/notes/liz/09-15-2016/first-draft-of-tag-graph "https://publiclab.org/notes/liz/09-15-2016/first-draft-of-tag-graph")  
[How was the tag graph visualization made?](https://publiclab.org/questions/bsugar/01-25-2018/how-was-the-tag-graph-visualization-made "https://publiclab.org/questions/bsugar/01-25-2018/how-was-the-tag-graph-visualization-made")  
[GitHub Issues(s): 1502](https://github.com/publiclab/plots2/issues/1502 "https://github.com/publiclab/plots2/issues/1502")  
[Jupyter Notebook: Network Analysis of GoogleGroups  
](https://github.com/skilfullycurled/plots-googlegroups "https://github.com/skilfullycurled/plots-googlegroups")

[  
](https://github.com/skilfullycurled/plots-googlegroups "https://github.com/skilfullycurled/plots-googlegroups")

  
**Cultivating Data, Cultivating Community:** The Production of Community Through Data at Public Lab

This is the main page for the documentation of a project I am working on to understand the relationships between:

a) The data produced by a community and how that community is reflected in the data it produced.

b) The nature of a community that produces data, and the way the data reflects the community that produced it.

While these are the same things said in a different order, both orders are required to answer the question. The first puts the community at the center of the question, and the second the data. However, the circle only gets more vicious. The nexus of this production is the website which has been built to support and encourage a community by the very community it is built to support.

To address this question, I pull from three sources of inspiration:

1. [Yanni Loukissas's](http://loukissas.lmc.gatech.edu/) who argues that since ["All data are local"](/i/30896.pdf "Taking_Big_Data_apart_local_readings_of_composite_media_collections.pdf"), "we should be asking: where do Big Data come from and how do the local
conditions of their creation shape subsequent research and practice?"
2. [Maximillian Schich's](http://schich.info/) conceptualization of [databases as networks](/i/30898.pdf "Schich_Revealing_Matrices_2010.pdf") where "the chosen data model convention interrelates with the available data".
3. [Maximillian Schich](http://schich.info/) and [Michele Corsica's](http://www.michelecoscia.com) approach to looking at data on a [micro, meso, and global](http://www.michelecoscia.com/wp-content/uploads/2012/08/exploring.pdf) levels.

Their work leads me to investigate the core questions of the project through four different vantage points:

**Collection**

Output: Basic exploratory data analysis (graphs and quantities over time)

Addresses: What are the site(s) of collection and their purpose (i.e., the different features of the website and the data that it generates) and how much content have they generated (e.g., number of notes, wiki edits, comments, and so on) over time in terms of quantity).

**Database**

Output: Data model and matrix (see examples by Schich from Revealing Matrices at the end of the document).

Addresses: How has the data, devoid of semantic meaning, changed in the database over time (e.g. quantity of nodes (e.g., comments, research notes, tags, wiki pages etc.), and quantity of edges (e.g., comments on a research note, tags on a wiki page).

**Categorization**

Output:Tag Co-occurance Graphs

Addresses: How are the topics on the site linked together, and how have the topics structurally changed over time?

**Community**

Output:Interaction Graph

Addresses: How has the structure of the community changed overtime (e.g. has it become denser)? Where in the community are hubs for information? Where are the bridges? How have subgroups changed (clusters)? How many people have moved closer to the core from the periphery and visa versa?

**Contributions**

There has been a fair amount of work on open source peer
production communities (software maintainers, wikipedia, fandom sites).
Public Lab is unique in that it functions as a research community
wherein the way the knowledge produced is directly tied to the
production of the community. Wikipedia is designed to produce knowledge
by a community, but the site wasn't specifically built to encourage a
specific type of community that produces knowledge.  
Therefore, I hope to have the following impacts:

a) Contribute to the generation of research by my own community about my own community  
b) In documenting my process, provide replicable methods for others in the community to learn.  
c) Present some new metrics by which to measure the the influence of
building a site with the design of a community in mind.  
d) Articulate an additional way for the community to understand itself.  
e) In documenting my process

**Evaluation**

Ideally, through the feedback on the process and visualizations that the site makes possible (a complicated way of saying "comments" and "answers to questions". Also, if anyone would be interested in partaking in a conversation about the results vis a vis their own experience, that would be great. Perhaps an OpenHour would be a good place to discuss? Also, I would like to overlay the release of upgrades to the site with time based data. For example, how/did an existing aspect of data change when the "like" feature was introduced (beyond the fact that now there were "likes" of course").