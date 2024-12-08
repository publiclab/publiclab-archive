---
title: SoC proposal: Image-Sequencer v3: Boosting the performance and adding demonstration based on colorimetry
tagnames: software, gsoc, first-time-poster, gsoc-2019, soc-2019, soc-2019-proposals, lat:25.435801, lon:81.846311, soc-2019-projects
author: lit2017001
path: /notes/lit2017001/04-01-2019/soc-proposal-image-sequencer-v3-boosting-the-performance.md
nid: 18931
uid: 577890

---

# SoC proposal: Image-Sequencer v3: Boosting the performance and adding demonstration based on colorimetry

by [lit2017001](../profile/lit2017001) April 01, 2019 17:56

April 01, 2019 17:56 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [first-time-poster](../tag/first-time-poster), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-proposals](../tag/soc-2019-proposals), [lat:25.435801](../tag/lat:25.435801), [lon:81.846311](../tag/lon:81.846311), [soc-2019-projects](../tag/soc-2019-projects)

## About me

Name: Divy Khare

Email: [divykhare97@gmail.com](mailto:divykhare97@gmail.com), [lit2017001@iiitl.ac.in](mailto:lit2017001@iiitl.ac.in)

Phone: +91 9161212100, +91 9005670222

Primary languages: English, Hindi

College: Indian Institute of Information Technology Lucknow

Timezone: Indian Standard Time (UTC +05:30)

Country of Residence: India

Github: [Divy123](https://github.com/divy123)

### Project description

_Image Sequencer is a sequential image processing library completely written in javascript which currently supports Node.js and the browser. It has the capability of outputting the processed image at each step as well as a CLI for ease of use right from the terminal._

### Why Public Lab?

The reason is simple - I absolutely love Public Lab community. While I have been on GitHub since around last year, I had not made any "real world" contribution until I came across Public Lab. I was way too hesitant to even strike a conversation and now thanks to Public Lab, I actively participate in discussions and bug fixes. I have learnt a lot in these 4 months.

The community is extremely helping and I definitely feel that I am a part of this community and I am thankful to it. I cannot think of a better platform than Public Lab to spend my summer with.

In future, I would love to remain and be a part of Public Lab. This community is hidden gem not many know about it. One of my post GSoC plan which I have mentioned later in the proposal is related to this.

### Abstract/summary:

Goal of the project is to boost the performance of Image-Sequencer primarly by:
1). Using WebAssembly for pixel processing and many other applicable areas,
2). Using web-workers to run the project on an alternate thread
3). Editing various parts of the code based on lighthouse parameters and chrome audits.
4). Add Minify Image module.
5). Add demonstration based on calorimetry tool for detecting indoor formaldehyde concentration levels.

# Improvements and Additions to the Current Implementation


#### Colorimetry: Detection of indoor formaldehyde levels

This is a very strong use-case of detection of indoor pollutants, formaldehyde in this case followed from [this post][1]. Formaldehyde is a carcinogen and irritant commonly found in the indoor environment. For this purpose we are utilizing the following colorimeter badge 

![badgelittle](https://user-images.githubusercontent.com/31225007/55720389-59958280-5a1e-11e9-8583-ccd633558af6.JPG)

After having an image of the above badge in appropriate light and framing conditions, we can have the ratio of avearge of pixles of both sides of this badge which can serve as a basis of indoor pollution levels.

For this, we first need to correct the crop module which is broken right now as discussed in [#987][2].
**This I will be doing in the month of April, 2019 only as soon as possible**

Next at the end of summers, having fixed everything that is needed for developing for this beautiful use-case earlier, 
we can build a demonstration library over Image-sequencer itself which will involve following steps:

- Installing Image Sequencer for the project.
- Taking the image as input and producing an instance of the sequencer object.
- Applying crop to have the left half of image (as default) which can be customized by the user and averaging the pixles with average pixel module.
- Applying import-image to reenter the image again to have the right part.
- Applying crop to have the right half of image(as default) which can be customized by the user and averaging the pixles with 
   average pixel module.
- Determining the ratio of average of the red channels of the respective instances and output the ratio to the user which will be 
   the indication of the formaldehyde results.

A screenshot from the issue under discussion is as follows:

![55443860-44ce7000-5582-11e9-9127-724c10146d76](https://user-images.githubusercontent.com/31225007/55731640-26f88380-5a38-11e9-93f3-5ac78d87cee3.png)

What we are planning to do can be seen in the visual provided here as under:

![Colorimetry tool (1) (1)](https://user-images.githubusercontent.com/31225007/55737422-cae72c80-5a42-11e9-9846-23174fd96d19.jpg)


After this  we can plan to have various demos realting to the above and I will love to work towards a smartphone app, which we will be discussing at that time. Also, since I have worked with react native that works sfor both ios and android, I think that can be good option.


#### Using WebAssembly for accelerating PixelManipulation

The PixelManipulation.js code is heavily used almost by all the modules provided. The purpose of this project is to enhance the performance of the code by converting it to WebAssembly.

So for this part I will be converting the complete PixelManipulation function to C code and then compile it to wasm using emscripten(A toolchain for compiling to asm.js and WebAssembly, built using LLVM, that lets you run C and C++ on the web at near-native speed without plugins). It not only compiles the given C code to wasm but also provides glued js files which can be directly used in place of native JS code. A visual workflow can be seen here:

![Untitled Diagram](https://user-images.githubusercontent.com/31225007/55032564-28d54680-5037-11e9-9ac1-47fb9a11f048.png)

To the code part, the function PixelManipulation will still be created and our glued-js file can be required inside that. Now the C code written can be passed getPixels function from this file which we can utilize there to perform various tasks.

Also after this the currently implemented modules can be converted to C and compiled to WebAssembly wherever it can be like many modules implement their own extraManipulation(), changePixel() functions such as Draw-Rectange Module, Gamma Correction Module et cetra.

I will also be adding various tests regarding WebAssembly implementations and on a personal interest basis, would love to demonstrate the difference of speed we can attain with the help of one of the tests.

#### Using node-web-workers to run sequencer code asynchronously

The Run.js used inside run() function can be broken into sveral independent threads a required.

For better compatibilty, I will be using [threads](https://www.npmjs.com/package/threads "https://www.npmjs.com/package/threads") npm module which is much reliable as they say :

> Uses web workers when run in browsers and child processes when run by node.js. Also supports browsers which do not support web workers.

Now the parts of code which can be put in the threads can be:

```javascript
    /* can be an independent thread where we pass json_q as data and it returns the changed json_q */
  function filter(json_q) { 
      if (json_q[0] == 0 && ref.steps.length == 1)
        delete json_q[0];
      else if (json_q[0] == 0) json_q[0]++;
      var prevstep = ref.steps[json_q[0] - 1];
      while (
        typeof prevstep == "undefined" ||
        typeof prevstep.output == "undefined"
      ) {        
        prevstep = ref.steps[--json_q[0] - 1];
      }
    
    return json_q;
  }
```

The implemeted code will be

```javascript
const spawn = require('threads').spawn;

const thread = spawn(function(input, done) {
// Everything we do here will be run in parallel in another execution context.
//filter function original code here that manipulates json_q here
done(json_q);
});

thread
.send(json_q)
// The handlers come here: 
.on('message', function(response) {
  json_q = response;
  // call drawSteps here by spawning a new thread here similar to this
  thread.kill();
})
.on('error', function(error) {
  console.error('Worker errored:', error);
})
.on('exit', function() {
  console.log('Worker has been terminated.');
});
```

Similarly, we can have drawStep function broken into parts and implemented to worker threads which do not have DOM manipulation as we cannot manipulate DOM inside the workers.

After this we can look into several parts of code of sequencer to implement this.

#### Using imagemin module for image minification.

Image minification module will be added for the users which can have following two use-cases:

1. For those users, who want an optimized image.
2. For some users who want to have faster results on image processings. For this, we can add an option for optimized version where like load-image we can have this module loaded at the starting.

An example showing the implementation is stated as under:

```javascript
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
 
(async () => {
    const files = await imagemin(['images/*.{jpg,png}'], 'build/images', {
        plugins: [
            imageminJpegtran(),
            imageminPngquant({quality: '65-80'})
        ]
    });
 
    console.log(files);
    //=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();
```

Now since the image has to be stored in a file to proceed with the module descibe above, we can have 'fs' module to do this for us.
An overall description to the whole process can be seen here:

![Untitled Diagram (1)](https://user-images.githubusercontent.com/31225007/55643688-68e3b880-57f1-11e9-96a8-8d1c2a902dc1.png)

Also I will be adding various tests and a documentation section for the same.

#### Adding tests, code-coverage and documentation

- I will be adding tests including both unit and UI tests for various parts of the code.

- And after that I will be adding code coverage as discussed here [#774][3] and add various html badges for the same.For this I will be using:
https://codecov.io/

- Next I will be writing documentation for various parts of code involving utilities and different use-cases. We can also have demonstrations of various real-world use cases. For this, we can plan to have demo GIFs and step to step guides et cetra.
  
## Current issues on github which will be closed: [#829][4], [#400][5], [#837][6], [#871][7], [#774][8], [#979][9]

### Linting

Since linting makes us write not only readable but reliable code as well, the code written would be properly linted in order to be less error-prone and to provide better readability.

### Commenting

Adding comments makes code much easier to understand not only for a new contributor but also for the reviewers, I would add proper and efficient comments so as to make the code easier to understand. I would also add comments to various parts of code already written, I come across during coding and exploration period where ever it needs to be for the new contributors to have a self-explained code.

### Pre-GSoc Plans

Here, I will try to solve the issues and help other contributors doing so. Also I will be exploring more and more on webassembly and webworkers to get comfortable while working on it and open fto's and help new comers get their first PR merged.

**Adding to the above, I will be resolving any of the bugs in the crop module and prepare a library platform for calorimetry project.**

### Timeline/milestones (May 6 - Aug 26)

My End-semester exams will last till May 14th and since this comes under the community bonding period, I will try my level best to catch up with all the communication threads during this period and will be a very actively participating member post this.

A Link to my academic Calendar: [IIITL:Academic-Calendar](https://www.iiitl.ac.in/academics/academic-calendar)

ALSO, I WILL BE ADDING  CODE-COVERAGE TO THE PROJECT DURING THIS PERIOD.

#### Weeks 1,2 (May 27 - June 9)

Transform native Js in PixelManipulation code to C and compile to WebAssembly.
Also include the compiled WebAssembly to the original codebase.

#### Week 3 (June 10 - June 16)

Discuss, explore and contribute to other parts of code including various modules where the heavy pixel processing can be done with WebAssembly.

#### Weeks 4,5 (June 17 - June 29)

Complete new Module Implementation with wasm and emscripten.
Also writing various tests related to WebAssembly not only ensuring proper functioning of code but also acting as a speed comparator.

This also includes the first phase evaluation from June 24 to June 28\.

#### Week 6 (June 30 - July 6)

Add 'Minify\_image' module and write appropriate tests.

#### Week 7 (July 7 - July 14)

Write documentation for above module and add documentation for all newly added features. Help clearing any of the bugs if existing, discuss and implement UI improvements that can be done. Also work to increase performance based on lighthouse and chrome audits.

#### Week 8,9 (July 15 - July 29)

Implement web workers for Run.js and explore and discuss other parts of code where using workers can enhance the performance with their async behaviour with mentors.

This also included the second phase evaluation from July 22 to July 26\.

#### Week 10 (July 30- Aug 5)

Implement all the new workers as discussed above with mentors.

#### Week 11 (Aug 5 - Aug 12)

Complete any work related to web workers as necessary. Also start colorimetry project work structure which involves creating the basic workflow using sequencer.

#### Week 12 (Aug 12 - Aug 19)

Complete any remaining work and implement remaining features like enhancing lighthouse based factors and also improving documentation as much as possible. Complete Colorimetry work structure.

#### Final Evaluations 

Final Evaluations from August 19 to August 26 and create a simple UI for colorimeter issue which will be enhanced with time.

### Needs

_I would dedicate myself to make Image-Sequencer more and more performance efficient by implementing all the above-mentioned tasks and more as I will be able to figure out. Any help or review by other contributors would be highly appreciated._

### Contributions

I have been actively participating in contributing towards this project since quite some time and have found a greatly helping and super-friendly team I love to work with.

This is my fork of the project: [https://github.com/divy123/image-sequencer](https://github.com/divy123/image-sequencer)

Below is a non-exhaustive list of my most notable contributions to the project

#### UI Improvements

- Disable save-sequence button when no steps are added (Merged PR [#462][10])
- Added insert button for every step to insert steps in between two steps (Merged PR [#545][11])
- Added thumbnails to insert Preview (Merged PR [#653][12])
- Adds textarea input to blend module (Built PR [#717][13])

#### Module Contributions

- Added "Add QR" module (Merged PR [#736][14])

#### Documentation and bug fixes

- Added documentation for several modules in [Modules.md](http://Modules.md) and added a link to the Documentation in info.json for every Module. (Merged PR [#555][15])
- Fixed various bugs related to running tests locally. (Merged PRs [#683][16], [#677][17])
- Updated [README.md](http://README.md) to include importJSON() utility.(Merged PR [#744][18]),
- Fixed quick buttons issue(Merged PR [#905][19])

#### New Feature Implementation and Utility Contributions

- Added a utility function to parse inputs given in % and convert them to pixels.Further used this function to parse input coordinates in crop and overlay modules if in %.(Merged PR [#592][20])
- Added getSteps() on sequencer which can be used to get steps array anywhere sequencer is accessible.(Merged PR [#777][21])
- Stop loading of blend module if the offset input is unavailable(Merged PR [#654][22])
- Added search functionality in choose Module select( Merged PR [#750][23])

### Contributions to unit and UI testing

- Added tests for notify() by mocking console.log()(Merged PR [#686][24])
- Added test for Meta-Modules (WIP)

### Performance (Part of GSoC Idea)

- Restructured Core API and changed all tests involved.(Merged PR [#824][25])

Apart from this detected and raised issues:
[#177][26], [#753][27], [#678][28], [#544][29], [#471][30], [#470][31], [#854][32], [#959][33]

Also reviewed following PRs:

[#865][34], [#792][35], [#782][36], [#776][37], [#778][38], [#967][39], [#869][40], [#655][41], [#908][42], [#881][43], [#959][44]

[Full List of PRs and Issues submitted](https://github.com/publiclab/image-sequencer/issues?utf8=%E2%9C%93&q=author:divy123%20)

---------

### Experience

I am a Node.js and React based web developer, a javascript lover.

I have worked on Aparoksha(annual technical fest of IIIT Allahabad) Campus Ambassador React based web-app and have made some projects both for my personal learning and for my college which are as follows:

### Canvas-Wasmwas

This is a simple practice project based on WebAssembly which draws an animation of 500 randomly colored circles on a canvas colliding with the edges of the container where the selection of colors, the velocity of circles is a C code compiled to web assembly using emscripten.

**GitHub Link:** [https://github.com/Divy123/canvas-wasmvas](https://github.com/Divy123/canvas-wasmvas)

### Flash\_Cards

This is a mobile app built with react-native built for both android and ios.

The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

**GitHub link:** [Flash\_Cards](https://github.com/Divy123/Flash_Cards)

### A weather forecast terminal app using Node.js

The app accepts place as city name or exact location attributes such as coordniates as a parameter to fetch the weather forecast for that location

Github Link: [weather-app](https://github.com/Divy123/weathera-app)

### Would-You-Rather game

This is a simple game based on react and redux.
The game goes like this: A user is asked a question in the form: "Would you rather \[option A\] or \[option B\] ?". Answering "neither" or "both" is against the rules.

In this app, users will be able to answer questions, see which questions they haven't answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

**GitHub link:** [Would\_You\_Rather](https://github.com/Divy123/would-you-rather-game)

### Teamwork

I was a part of the **FOSS wing of the GeekHaven organization** where we make aware the freshmen of the institute about various technologies prevailing and emerging around the globe and how open source has largely affected their atmosphere in every possible positive sense and how they can contribute towards the same. Here is a link to the website:

[Foss Society](https://geekhaven.iiita.ac.in/foss/)

All the code written here is open source.
I have also worked on **Aparoksha Campus Ambassador** admin app based on React and Redux working with my seniors. I have also worked on signup and login system for Q/A portal in collaboration with my Geekhaven colleagues. It was a node based registration system.

I am also the coordinator of technical society of my Institute: Axios. We have made the placement website for the institute and currently working on institute's main website which is a private repo currently.

Github Link: [Axios:The technical Society of IIIT Lucknow](https://github.com/axios-iiitl)

I understand the importance of teamwork in any great project and Image-Sequencer member team being a super friendly one, has always motivated me towards the same.

---------

### Passion

I am a javascript lover, practitioner, and an Image processing enthusiast. Manipulating pixels by applying various mathematical operations and getting a great new visual effect is just \*\*WOW \*\*. I also admire the way we can apply image processing in real life to get various types of information from plant and soil health to particles in water and add QRs or detect and decode them by just pressing buttons. The super-friendly behavior of the community and 'always ready to help' members have made such a great working environment which always keeps on motivating me towards open source contributions.

### Audience

I believe this project can be helpful to small scale farmers and peasants where the health of their crops and soil can be analyzed and especially in a country like India where a majority of the people cannot afford to buy expensive equipment and pay loads of money for analysis.

Since the project is also proceeding towards other real-world cases like particle-identification, quantified color differentiation between two patches on a chemical test strip, it can be quite a useful tool for environmental scientists and researchers providing them a handy visual tool they can use for various purposes.

### Commitment

I would love to completely commit myself towards the project, understanding the dedication it requires I promise to dedicate any amount of time it takes for the program and since the program is happening during my summer breaks, I would be able to fulfill my tasks within time.

### Other GSoC Organisations

I have not applied to any other organizations except Public Lab.
This is also my first GSoC.

### Post GSoC plans

Here, after having improved on performance of the project, I will proceed working towards **various real-world use cases like in [#979][45]**. This not only adds to a contribution for various environmental causes but is also a source of great learning for me as well.

In addition to continuing working and improving on the project (like exploring and adding more performance-related features, add more documentation support , new UI implementations, maybe switching to a UI library like React or others as suitable et cetra), I would also love to keep contributing to Public Lab and other open source projects and learn as I grow.

I realize that Public Lab is a hardworking and modest organization. It is a community where we let the people investigate environmental concerns by using inexpensive DIY techniques which in my terms is of high social and environmental importance and myself being a member of Public Lab and an active contributor of Image Sequencer promise to spread the word of awareness so that the purpose may be sound to a large plethora of people.

I will begin by writing a manual for step by step usage of image Sequencer in
regard to all its feature. This will ensure that people actually find and
come across Image Sequencer and Public Lab. I will also work on spreading the word by writing Quora answers, making blog posts on platforms such as Medium.
The main part of this improvement is making Image Sequencer as much performance-efficient as possible and to make it more and more user-friendly... Maybe next GCI we can make more and more themes for the project.

I will definitely try to make my juniors and batch mates in college aware
about open source and encourage them to start contributing as well by organising several awareness programs and meetups.

#### Outreach

I strongly believe in sharing knowledge and collective growth, thus I have always tried to encourage other contributors and newcomers to contribute to the project through opening FTO(First Timers Only) issues and I would continue to do so. I will allow for newcomers to contribute to the project by breaking up tasks into smaller pieces and opening FTO issues for easier tasks. I would love to work with other people on the project and will try to make the project as developer friendly as possible.

_I am no GPU or software developing expert, but I am a firm
follower of - always follow the 50%-50% rule... 50% of
the required work you should know how to do or at least how to approach, the
other 50% you should have no idea about but be really eager to learn. I have
carefully planned my work and I am more than just eager to learn._

  [1]: https://publiclab.org/notes/haines241/03-06-2018/smart-form-badge-lighting-analysis-experiments
  [2]: https://github.com/publiclab/image-sequencer/issues/987
  [3]: https://github.com/publiclab/image-sequencer/issues/774
  [4]: https://github.com/publiclab/image-sequencer/issues/829
  [5]: https://github.com/publiclab/image-sequencer/issues/400
  [6]: https://github.com/publiclab/image-sequencer/issues/837
  [7]: https://github.com/publiclab/image-sequencer/issues/871
  [8]: https://github.com/publiclab/image-sequencer/issues/774
  [9]: https://github.com/publiclab/image-sequencer/issues/979
  [10]: https://github.com/publiclab/image-sequencer/pull/462
  [11]: https://github.com/publiclab/image-sequencer/pull/545
  [12]: https://github.com/publiclab/image-sequencer/pull/653
  [13]: https://github.com/publiclab/image-sequencer/pull/717
  [14]: https://github.com/publiclab/image-sequencer/pull/736
  [15]: https://github.com/publiclab/image-sequencer/pull/555
  [16]: https://github.com/publiclab/image-sequencer/pull/683
  [17]: https://github.com/publiclab/image-sequencer/pull/677
  [18]: https://github.com/publiclab/image-sequencer/pull/744
  [19]: https://github.com/publiclab/image-sequencer/pull/905
  [20]: https://github.com/publiclab/image-sequencer/pull/592
  [21]: https://github.com/publiclab/image-sequencer/pull/777
  [22]: https://github.com/publiclab/image-sequencer/pull/654
  [23]: https://github.com/publiclab/image-sequencer/pull/750
  [24]: https://github.com/publiclab/image-sequencer/pull/686
  [25]: https://github.com/publiclab/image-sequencer/pull/824
  [26]: https://github.com/publiclab/image-sequencer/issues/177
  [27]: https://github.com/publiclab/image-sequencer/issues/753
  [28]: https://github.com/publiclab/image-sequencer/issues/678
  [29]: https://github.com/publiclab/image-sequencer/issues/544
  [30]: https://github.com/publiclab/image-sequencer/issues/471
  [31]: https://github.com/publiclab/image-sequencer/issues/470
  [32]: https://github.com/publiclab/image-sequencer/issues/854
  [33]: https://github.com/publiclab/image-sequencer/issues/959
  [34]: https://github.com/publiclab/image-sequencer/pull/865
  [35]: https://github.com/publiclab/image-sequencer/pull/792
  [36]: https://github.com/publiclab/image-sequencer/pull/782
  [37]: https://github.com/publiclab/image-sequencer/pull/776
  [38]: https://github.com/publiclab/image-sequencer/pull/778
  [39]: https://github.com/publiclab/image-sequencer/pull/967
  [40]: https://github.com/publiclab/image-sequencer/pull/869
  [41]: https://github.com/publiclab/image-sequencer/pull/655
  [42]: https://github.com/publiclab/image-sequencer/pull/908
  [43]: https://github.com/publiclab/image-sequencer/pull/881
  [44]: https://github.com/publiclab/image-sequencer/pull/959
  [45]: https://github.com/publiclab/image-sequencer/issues/979