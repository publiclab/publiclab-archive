---
title: "Re-construction for ImageSequencer"

tagnames: 'software, gsoc, gsoc-2017, soc, soc-2017, rgsoc-2017, soc-2017-proposals, response:13975'
author: yachao
path: /notes/yachao/03-24-2017/re-construction-for-imagesequencer.md
nid: 14053
uid: 504397

---

![](https://publiclab.org/public/system/images/photos/000/020/013/original/Drawing1.jpg)

# Re-construction for ImageSequencer

by [yachao](../../../profile/yachao) | March 24, 2017 01:24

March 24, 2017 01:24 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [rgsoc-2017](../tag/rgsoc-2017), [soc-2017-proposals](../tag/soc-2017-proposals), [response:13975](../tag/response:13975)

----

## About me

**Name: Yachao Lu**

\*\*GitHub: \*\*[https://github.com/lvyachao](https://github.com/lvyachao)

**Affiliation: Department of Computer Science, George Washington University**

**Location: Washington, DC**

Email: [lvyachao@gmail.com](mailto:lvyachao@gmail.com)

## Project description

Image Sequencer is a image processing systems which is non-destructive: instead of modifying the original image, it creates a new image at each step in a sequence. This project not only provide a simple image processing service but also providing many possibility from its modularization. The idea of "module" can make every single function work separately and work as library. Also it shade light on lots of extension for this application.

### Abstract/summary:

### Problem

This application is on the early stage and it indeed need a lot improvement in five aspects: UI, Modularization, Testing, Use Cases and Bugs. The core functionality (progress/step control functions) is not completed yet. Among them, I think UI part and Modularization (Making modules API-ify) can be set to priority.

### What I am planning:

1\. Add a "State-Machine" framework to front-end

JavaScript State Machine ([https://github.com/jakesgordon/javascript-state-machine](https://github.com/jakesgordon/javascript-state-machine)) is one of the best state machine libraries now. The idea of state machine can help the logic of our structure (NO MATTER BACK-END OR FRONT END) even more clear and readable since about all core function is related to the "state" (steps).

Another mission of this project is want to making modules(functions) work alone without GUI but can works individually. The idea of "state" (steps) can also helps. I will take about more detail for modules "API-ify" in next subsection.

Following is a example code for state machine:

Var view = StateMachine.create({  
initial: 'menu',  
events: \[  
{ name: 'uploadedEvent', from: 'menu, to: 'uploaded' },  
{ name: 'NDVIEvent', from: 'uploaded', to: 'NDVI' },  
{ name: 'threholdEvent', from: 'NDVI', to: 'threhold' },  
{ name: 'downloadPage', from: \['uploaded', 'NDVI', 'threhold'\], to: 'final' }  
\],  
callbacks: {  
onentermenu: function() { $('#menu').show(); },  
onenterNDVI: function() { $('#NDVIPic').show(); },

onleavemenu: function() {  
$('#menu').fadeOut('fast', function() {  
fsm.transition(); //handing some render event  
});  
return StateMachine.ASYNC; // tell StateMachine to defer next state until we call transition (in fadeOut callback above)  
},  
... //Other codes appear here  
}  
});

Following is a rough structure I want to make this project be like:![image description](https://publiclab.org/system/images/photos/000/020/015/large/Drawing1.jpg "Drawing1.jpg")

2\. For "Modularization", I will focus on two things: 1.rearrange of structure of modules following the "states" structure, letting whole structure of the application more clear; 2\. Make all modules has an "output" (API-ify). Actually, making modules API-ify is quite easy to be deployed with the help of some tools like WebPack, which "export" a API for every functions.

3\. Adding a Progressive JavaScript Framework handling all the front-end events; data-binding system and form-rendering: Vue.JS. ([https://github.com/vuejs/vue](https://github.com/vuejs/vue)) (optional)

Vue.JS is a powerful and light-weight front-end javascript framework, it can set up controller functions handling all the current needs for our UI(e.g., insert, remove, form rendering). By the help of Vue.JS, I can easily finish all the "to-do-lists" on UI parts quickly and the codes for Vue.JS is so light-weight and much more readable than similar frameworks like Angular. Another benefit of setting up such a library is easy to maintain: no matter which event we want to create in the future, it will be quick and readable by the help of such library.

4\. Develop core functions for UI parts, like adding, removing, next steps, etc. (discard if not necessary)

5\. For Testing, I will designed unit tests and add my own modules that I think that will help.

Schedule of Deliverables

29 May -- 11 June

Add Vue.js environment and JS state machine and set up all the data-binding system, redesign the front-end interface.

12 -- 23 June

Write down all state control functions and core functions for controlling the image process.

Community review for works above

24 -- 30 June

Test and document existing code.

1 -- 7 July

Investigate all the existing modules code and provide solutions. I will write a list for each solution or just quick fixed them if necessary.

8 -- 18 July

Develop codes for modules parts and test.

Community review for works above

19 -- 28 July

Test and document existing code. Deployed finished demo online and collect feedbacks for existing works.

29 July -- 11 Aug

Write more modules that fits for this system

12 -- 18 August

Test all remain codes and handle unexpected bugs/problems.

### 

Open Source Development Experience

Developed and deployed Project Timbr with more than two years developing. (Now it is stored as private repository as research privacy purpose and been offline). Now I can only show two early-stage codes ([https://github.com/lvyachao/timber\_prototype](https://github.com/lvyachao/timber_prototype)) and Timbr Version 1 ([https://github.com/lvyachao/Timbr\_V1](https://github.com/lvyachao/Timbr_V1)).

Open tickets on questions/issues on repository like Graphlib, NightmareJS.

Actively forked and use 10s repositories.

Work/Internship Experience

Research Assistant on department of Computer Science, GWU, Dec 12 - Present;Web Master of JKA Karate Club of GWU, May 14 - Present

###