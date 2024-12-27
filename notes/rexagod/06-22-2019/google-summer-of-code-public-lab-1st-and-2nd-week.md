---
title: "Google Summer of Code @ Public Lab: 1st and 2nd Week"

tagnames: 'gsoc, progress, soc, gsoc-2019, soc-2019'
author: rexagod
path: /notes/rexagod/06-22-2019/google-summer-of-code-public-lab-1st-and-2nd-week.md
nid: 19814
uid: 564358

cids: 24866,24870,25083,25084

---

# Google Summer of Code @ Public Lab: 1st and 2nd Week

by [rexagod](../../../profile/rexagod) | June 22, 2019 21:03

June 22, 2019 21:03 | Tags: [gsoc](../tag/gsoc), [progress](../tag/progress), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019)

----

# Public Lab: 1st & 2nd Week

> From refactoring an 7-year-old library, to embedding node support into it, while optimizing it for browser, the first two weeks started off as one of the most interesting but crucial stages of my timeline, and yet somehow, we made it work.

I wouldn't be wrong to say that this period of Google Summer of Code at Public Lab was indeed, in my case, rather epiphanic. I'll explain.

Other than reviewing PRs and making FTOs, most of my time spent at Public Lab right till the first evaluation, required me to essentially work on a "pattern-mining" library, called `matcher.js`, which would initially consist of just a single module called [`matcher-core`](https://github.com/publiclab/matcher-core) that would help users in searching for rich matches across two images, but interestingly grew to encompass another library, a [`matcher-cli`](https://github.com/publiclab/matcher-cli) module, which was originally built to pass custom commands to manipulate the test environment and monitor changes on a local server, and with time, would power Public Lab's first ever headless-driven test written to support Continuous Integration platforms, including cross-posting.

## [`matcher-core`](https://github.com/publiclab/matcher-core)

The [`matcher-core`](https://github.com/publiclab/matcher-core) module works on [Oriented FAST and Rotated BRIEF (ORB)](http://www.willowgarage.com/sites/default/files/orb_final.pdf) algorithm and was developed at OpenCV labs by Ethan Rublee, Vincent Rabaud, Kurt Konolige, and Gary R. Bradski in 2011, as an efficient and viable alternative to SIFT and SURF. ORB was conceived mainly because SIFT and SURF are patented algorithms. ORB, however, is free to use.

The idea of abstracting such a sophisticated piece of code, and mending it to Public Lab's custom needs seemed ambitious to say the least, and of course, the implementation proved to be my primary concern for the first few days.

```javascript

/* a simpler, yet much better way
* that Eugene kept in mind during
* the initial implementations
*/

// the snippet below analyzed all pixels for corners, but initialized `matchT` only for the rich matches

let i = 640 * 480;
      while (--i >= 0) {
        screenCorners[i] = new jsfeat.keypoint_t(0, 0, 0, 0, -1);
        matches[i] = new matchT();      
      }
```

As a matter of fact, all the code that was written in the first week unfortunately did not meet my expectations, i.e., I had initially tried to couple ORB's FAST and BRIEF features with `Uint8ClampedArray`s instead of the original `matchT` structures, which did not seem to work out very well, because although the time complexity was reduced (in some cases, by ~700ms), I had to add a property for every paramenter which was passed, which ended up taking a lot of space than I anticipated initially. Imagine processing a small `640x320` image with a 307200-sized array each element consisting of its repective `RGBA` data along with pixel-dependent 4 parameters, that's about 307200 \* 4 values \* 4 parameters \* 8 Bits = 4.915 Megabytes! That was way more than expected and indicated the fact that I had to shift all my calculations, modifications, everything while keeping the `matchT` structure in mind, because in all honesty, this was the only solution that efficiently employed `JavaScript-specific` features to reduce the aforementioned induced complexity, so I went with that.

Now that I come to think of it, maybe Eugene faced the same problem as well?

So more or less, this meant that any change that I brought to the library, which affected the pixel arrays in an way whatsoever, had to consider the negative affects (if any), that it caused to them, and if the these were more than I could mend, I had to come up with a different approach.

By the next mid-week I had a custom optimized version of the algorithm, and the only reason I believe things moved so fast was because my first step was to modularize the whole library, each component isolated, yet working together, without which, this would have taken me entire two weeks!

Altering each component one-by-one, I felt a need to observe the changes that would be incurred if I changed each parameter to every finite value they could possibly be assigned to, but to do that I would've needed to individually each different set of configuration on my rig atleast a 5 blur\_sizes \* 100 lp\_thresholds \* 100 eigen\_values \* 100 matchThresholds = 5,000,000 runs for every configuration! As surprising as it may sound, I actually did not have that kind of time. At all.

So to automate tasks such as the above, and even more complex ones as they came, to find out the best configuration (from variables, functions to non-primitive types) for the [`matcher-core`](https://github.com/publiclab/matcher-core), I came up with an idea.

## [`matcher-cli`](https://github.com/publiclab/matcher-cli)

The [`matcher-cli`](https://github.com/publiclab/matcher-cli) module was never originally included in my proposal, but it was a beneficial add-on that had to be made, and also interested me a great deal, so I got to work.

What [`matcher-cli`](https://github.com/publiclab/matcher-cli) aims to do is pretty simple and straight-forward: Control every aspect of [`matcher-core`](https://github.com/publiclab/matcher-cli), right from the command-line interface. In detail, however, this means that [`matcher-cli`](https://github.com/publiclab/matcher-cli) will utilize `puppeteer` to take absolute control over the headless environment it creates. This environment is then deployed on a port which will house a `Chromium` instance, running the user's configuration of the `matcher-core` library in one of it's pages. These "virtual pages" can then be scraped for immense testing improvements and debugging, since one will be able to _actually see_ the visual impacts of their code base inside the headless environment once it gets deployed.

```javascript
  //  allows for dynamic assignment of commands to their respective functions

  if (eval(`commands.${query}`) !== undefined) {
    eval(`commands.${query}()`);
  } else if (eval(`summoner.${query}`)) {
    console.log(eval(`summoner.${query}`));
  } else {
    error(`Invalid command: "${query}", exiting...\n`);
    process.exit();
  }
```

This module will work based on different "commands" as they get defined in the [`matcher-commands.js`](https://github.com/publiclab/matcher-cli/blob/main/src/matcher-commands.js) entry point. Commands will execute to trigger their respective linked functions, which can be any operation the user wants to perform once the virtual pages are setup. In order to generalize this library for the users, I started of by removing off all my older custom code to conduct experiments with the core, and rather including useful and simple commands that the users will frequent.

So I began adding the basic `clear` and `update` functionality for the CLI. `clear`, as one can easily discern, cleans out the console screen and is a pretty simple command itself, nothing complex. Although, my main motive behind setting up such a basic command was so that users can actually look at its implementation and learn how easy it is to ship your own commands to `matcher-cli`! Moving on to my favorite command, if that's a thing, the `update` command can prove helpful for all the non-technical users who don't want to `git pull` or `npm update` every release of the module, or spend hours fixing bugs, all they need to do is run `matcher update` and all of their files, along with the latest (or pinned) versions of dependencies will be compared against the code base, and all the discrepancies can be resolved. Other than these, some of the more "complex" commands can be found in [`matcher-summon.js`](https://github.com/publiclab/matcher-cli/blob/main/src/matcher-summon.js), namely, `corners` and `matches`, that search the virtual pages for detected matches and rich matches, respectively, under the current configuration of the core.

This has been pretty much what I've been doing for the past two weeks, and to for the future, I'll focus on setting this up on Continuous Integration platforms, integrating `core` and a Leaflet UI for the same into [`Leaflet.DistortableImage`](https://github.com/rexagod/Leaflet.DistortableImage/commits/rexa-soc-ldi), setting up Jest to run (headless) tests, and get both of my libraries forked!

Thank you for giving this a read, ciao!