---
title: "Google Summer of Code 2019 Public Lab Final Work Product: Pranshu Srivastava"

tagnames: 'gsoc, soc, gsoc-2019, soc-2019, gsoc-19, soc-19, gsoc-2019-final-report, barnstar:javascript-enthusiasm'
author: rexagod
path: /notes/rexagod/08-25-2019/google-summer-of-code-2019-public-lab-final-work-product-pranshu-srivastava.md
nid: 20666
uid: 564358

cids: 25389,25390,25420,25710

---

![](https://publiclab.org/public/system/images/photos/000/034/873/original/fwp.png)

# Google Summer of Code 2019 Public Lab Final Work Product: Pranshu Srivastava

by [rexagod](../../../profile/rexagod) | August 25, 2019 23:43

August 25, 2019 23:43 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [gsoc-19](../tag/gsoc-19), [soc-19](../tag/soc-19), [gsoc-2019-final-report](../tag/gsoc-2019-final-report), [barnstar:javascript-enthusiasm](../tag/barnstar:javascript-enthusiasm)

----

## Project Details

- Title: [`matcher.js` library and `Leaflet.DistortableImage` overhaul](https://publiclab.org/notes/rexagod/03-11-2019/gsoc-proposal-mapknitter-orb-descriptor-w-auto-stitching-pattern-training-and-live-video-support-and-ldi-revamp-major-ui-enhancements)
- Repositories created (and contributed to): [`matcher-core`](https://github.com/publiclab/matcher-core/) and [`matcher-cli`](https://github.com/publiclab/matcher-cli/)
- Repositories contributed to: [`Leaflet.DistortableImage`](https://github.com/publiclab/Leaflet.DistortableImage)

## Project Description

### [`matcher-core`](https://github.com/publiclab/matcher-core/)

`matcher-core` essentially employs the ORB[(Oriented FAST and Rotated BRIEF)](http://www.willowgarage.com/sites/default/files/orb_final.pdf) algorithm to mine patterns using the well-known [FAST(Features from Accelerated Segment Test)](http://homepages.inf.ed.ac.uk/rbf/CVonline/LOCAL_COPIES/AV1011/AV1FeaturefromAcceleratedSegmentTest.pdf) keypoint detector and the [BRIEF(Binary Robust Independent Elementary Features)](https://www.cs.ubc.ca/~lowe/525/papers/calonder_eccv10.pdf) descriptor technologies, which provide appreciable performance boosts on low computational costs.

### [`matcher-cli`](https://github.com/publiclab/matcher-cli/)

A Node-based CLI utility for headlessly testing custom matcher-core configurations, this module eases any development process on the matcher-core library by allowing the user to run a set of commands on their locally deployed Chromium environment in a headless manner, i.e., right from the CLI, without the need to open the browser whatsoever, be it testing, demonstration, debugging issues, etc. `matcher-cli` enables headless support for all of these tasks, and can easily integrate with your choice of CI to automate any of the above tasks right inside your CI.

### [`Leaflet.DistortableImage`](https://github.com/publiclab/Leaflet.DistortableImage)

A Leaflet extension to distort images -- "rubbersheeting" -- for the [MapKnitter.org](http://mapknitter.org) ([src](https://github.com/publiclab/mapknitter)) image georectification service by [Public Lab](http://publiclab.org). Leaflet.DistortableImage allows for perspectival distortions of images on the client-side.

## Project Demonstrations

### [`matcher-core`](https://github.com/publiclab/matcher-core/)

Watch the `matcher-core` in action by mapping two 4K images this [demo](https://publiclab.github.io/matcher-core/).

### [`matcher-cli`](https://github.com/publiclab/matcher-cli/)

Run the following command inside your terminal for an interactive demo.

```bash
$ bash <(curl -s https://gist.githubusercontent.com/rexagod/6e1a2cfdc18e1b12ff8d64b5d4e6985a/raw/e5cf33c9bb2427f25d8394d0e007cabc40a8a5da/cli-demo.sh)
```

### [`Leaflet.DistortableImage`](https://github.com/publiclab/Leaflet.DistortableImage)

Checkout the `stitcher` and `projector` helper modules for `matcher-core` in action [here](https://rexagod.github.io/Leaflet.DistortableImage/examples/) by enabling `matcher.js` from the bottom-left. The current progress is demonstrated [here](https://publiclab.github.io/Leaflet.DistortableImage/examples/) which I got the opportunity to contribute to for some time as well.

## Project Involvement

Being welcoming in nature, the `README.md`s below have been catered from a contributor's perspective, and include almost every resource a contributor would require in order to get started with these.

- [`matcher-core`](https://github.com/publiclab/matcher-core/blob/main/README.md)
- [`matcher-cli`](https://github.com/publiclab/matcher-cli/blob/main/README.md)
- [`Leaflet.DistortableIamge`](https://github.com/publiclab/Leaflet.DistortableImage/blob/main/README.md)

FTOs can be found below.

- [`matcher-core`](https://github.com/publiclab/matcher-core/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)
- [`matcher-cli`](https://github.com/publiclab/matcher-cli/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)
- [`Leaflet.DistortableIamge`](https://github.com/publiclab/Leaflet.DistortableImage/issues?q=is%3Aopen+is%3Aissue+label%3Afirst-timers-only)

## Project Leftovers and Future Plans

- [`matcher-core`](https://github.com/publiclab/matcher-core/)
  - Implementing streams for data flow between sockets. This would immensely reduce noise, and speed up the load time. The idea's pretty simple, send the `utils` promise directly to the socket in the form of a stream and resolve it there and then.
  - Rebasing [`rexa-soc-ldi`](https://github.com/rexagod/Leaflet.DistortableImage) after we shift to ES6\.
  - Containerized build through Docker on the CI.
  - More (unique) headless automated tasks (other than tests, for eg., crossposting back to the PR on each build, etc.) on the CI.
  - Rebasing [`matcher-module`](https://github.com/publiclab/image-sequencer/pull/1226) once we modify image-sequencer for asychronous modules (as proposed to `@jywarren`).
- [`matcher-cli`](https://github.com/publiclab/matcher-cli/)
  - Vorpal was incorporated for a better understanding of the codebase, but takes a bit to load. Implementing Vorpal's APIs purely in Node would definitely bring up the loading time, but it would be a tradeoff for code abstractions.
  - Generalize standard methods and expose APIs to gain flexibility.
- [`Leaflet.DistortableIamge`](https://github.com/publiclab/Leaflet.DistortableImage/)
  - PWA conversion! Perhaps take a step further and integrate electron as well.
  - In-browser drag and drop functionality.
  - Headless tests on CI.

## Project Overall Contribution

- `matcher-core`
  - [PRs](https://github.com/publiclab/matcher-core/pulls)
  - [Issues](https://github.com/publiclab/matcher-core/issues)
  - [Commits](https://github.com/publiclab/matcher-core/graphs/contributors)
- `matcher-cli`
  - [PRs](https://github.com/publiclab/matcher-cli/pulls)
  - [Issues](https://github.com/publiclab/matcher-cli/issues)
  - [Commits](https://github.com/publiclab/matcher-cli/graphs/contributors)
- `Leaflet.DistortableImage`
  - [PRs](https://github.com/publiclab/Leaflet.DistortableImage/pulls?q=is%3Apr+rexagod)
  - [Issues](https://github.com/publiclab/Leaflet.DistortableImage/issues?utf8=%E2%9C%93&q=is%3Aissue+rexagod+)
  - Commits on my [fork](https://github.com/rexagod/Leaflet.DistortableImage/commits/rexa-soc-ldi) and on [main](https://github.com/publiclab/Leaflet.DistortableImage/graphs/contributors).

## Project Experience

The Public Lab community has supported me througout the duration, and even before this Summer of Code began, and granted me such a great opportunity to work among such brilliant and supportive people, for which I'll always be obliged to them. I've undoubtedly learnt numerous stupendous concepts throughout my time here, and perfected my passion for JavaScript through the guidance of my mentors, who were always there to support me, motivate me, and help me push my limits, for which I'll always be thankful.

Thank you, Public Lab, for such a fascinating experience, I'd love to continue being a part of and keep on contributing to this amazing community!