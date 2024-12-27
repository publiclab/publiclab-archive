---
title: "Graph Editor for Image-sequencer"

tagnames: 'software, gsoc, gsoc-2017, soc, soc-2017, rgsoc-2017, soc-2017-proposals, response:13975, first-time-poster'
author: calvrix
path: /notes/calvrix/04-02-2017/graph-editor-for-image-sequencer.md
nid: 14079
uid: 503867

---

![](https://publiclab.org/public/system/images/photos/000/020/016/original/Screenshot_from_2017-04-02_11-53-34.png)

# Graph Editor for Image-sequencer

by [calvrix](../../../profile/calvrix) | April 02, 2017 09:32

April 02, 2017 09:32 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [rgsoc-2017](../tag/rgsoc-2017), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975), [first-time-poster](../tag/first-time-poster)

----

(This template is for students applying to summer code programs with Public Lab. Use this link to start writing a post: [https://publiclab.org/post?n=899&tags=gsoc,gsoc-2017-proposals](https://publiclab.org/post?n=899&tags=gsoc,gsoc-2017-proposals) You can delete this line once you've started filling it out.)

---------

## About me

Name: Abhilash Verma

Email: vermaabhilash70@gmail.com

Github: [rogeredthat](https://github.com/rogeredthat)

  
**College: **BITS Pilani, Hyderabad Campus****

**Location:** Hyderabad, India

## Project description

The Image-sequencer has the potential of becoming a huge project. It can be developed as a library, with certain exposed endpoints as well as it can become a stand-alone application. My proposal mainly deals with developing it as an application without eliminating the possibility of it becoming a library. 

Even as we can brainstorm and choose to let one idea prevail over the other, a graph editor could be a valuable addition to the project. The graph editor, can be a powerful editing tool to help make complex sequences of modules that work on fed images. The graph can then be used to supply a sequence as an exported object in the library.

### Summary:

The GUI mockup, gives a brief idea of how the implementation would appear. The editor would be a workspace that can be disabled and brought up at will. The nodes of the graph would be chosen and added from a categorized list of modules. The routes between the modules could be specialized connections such as calculated values or selections when the corresponding processes are of the suggested type, or simply the output in the case of general filter modules. 

As any graph editor should be, the components are easily manageable through dragging and dropping. The autolayout feature of the-graph module also makes complicated structures a convenient deal. As can be seen in the mockup, the nodes can also be selected in any fashion to reveal sub-graphs and their corresponding outputs. 

### Problem
The image-sequencer will have a variety of modules added to it in the future. Getting to the various possibilities of actions the modules could be arranged in, will be a difficult task without a sophisticated graph editor. Hence, I propose to use an existing module by flowhub to integrate into the project.

See: [the-graph](https://www.npmjs.com/package/the-graph)

### Timeline/milestones**1st Week**

Building an environment through _React_ that wraps the editor. The application will therefore run on node. Could be routed through a router to appear on a **/graph-editor** route or something similar.   

  
**2nd Week**

Creating the module list object, storing the properties of the modules in the _process_ class of the editor. The list object will also have an exposed method, for adding to the list. The method could potentially become a post-hook for when new modules are added.**  
**

  
**3rd Week**

Finalising the GUI: Implementation of the editor, complete with _drag to resize _abilities_. _The editor should be an attachable module, easy to connect, whichever way the project goes - standalone app or library.__**  
**

  
**4th & 5th Week **Connecting the graph with the image-sequencer. The translation of the graph into the sequence, will occur here. Will start work on storing the state of the image in the node object. This way, a mouse over event on any node will display the state of the image on its output port. This will require a change in the image-sequencer build. (I have already proposed the idea of using a lower quality version for when the sequence is still being tested and constructed in issue#14 on the github project. The complete processing should be performed only when a render is being finalised.  

  
**6th Week**Finalising a demonstration. Starting work on suggested changes and bug fixes.

  
**7th Week - Final Week**

Fine tuning for final evaluation and potentially a merge.**  
**

  
### NeedsSome of the capabilities of the-graph module need to be discovered. Documentation is not available. Might need help finding relevant methods and objects.    

  
### Setup

I have forked the code base, cloned on my local machine, built it and tested it elaborately. A pull request was not possible since no change was made to the image-sequencer as the testing of the-graph and the creation of a prototype was going on in another repository.

  
---------

### Experience
I was introduced to programming at a late age of 15\. I learnt C++ for 2 years, but the lack of graphic feedback in the way primitive programming at school was taught, I was attracted to the web. I taught myself HTML, CSS, Javascript and Jquery. Javascript has become my favourite language ever since. I got introduced to back-end development and learnt PHP, SQL and Node. I prefer node, as I advocate everyone should. My github profile would show some of my front-end projects. They are not extensive but are mostly neat. The more sophisticated projects I have done are for organizations with private repositories from my internships. 

  
---------

### Teamwork  

I worked with a start-up last year, and mostly had a good rapport with everyone there. I also am a part of the Department of Technical Arts in our College. I have worked on the sites for all the major fests the college hosts. Other examples of healthy collaborations could be that with friends from the programming club on campus. 

---------

### Commitment  
I have been waiting for a full time internship that leaves something substantial at the end. Other experiences from the example I gave above, were more of redundant work than learning. I understand the commitment I am making and trust that I will devotedly complete the job at hand.