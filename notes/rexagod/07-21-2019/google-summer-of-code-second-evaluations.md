---
title: Google Summer of Code: Second Evaluations
tagnames: gsoc, soc, gsoc-2019, soc-2019, soc-2019-eval
author: rexagod
path: /notes/rexagod/07-21-2019/google-summer-of-code-second-evaluations.md
nid: 20223
uid: 564358

---

# Google Summer of Code: Second Evaluations

by [rexagod](../profile/rexagod) July 21, 2019 18:23

July 21, 2019 18:23 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-eval](../tag/soc-2019-eval)

----

# Public Lab: Second Evaluations

> Programs must be written for people to read, and only incidentally for machines to execute.

And just like that we've arrived upon the second evaluations! I've had the immense pleasure and opportunity to switch and work between a vast array of issues and projects during the past weeks, which made me realize the importance for a developer to be well-acquainted with a diverse set of tools and expertise in utilizing them to their needs! In this post, I'll throw some light on the different things I've had the pleasure of working on, with due respect to all of my mentors, who made these humongous tasks seem like a cool summer breeze!

Let's get started!

Okay, so other than the regular reviewing and first-timers stuff, I was engaged in the following projects.

- **[Jest integration for CI testing automation](https://github.com/publiclab/matcher-cli/commit/9f273bfd9806b534b42a28a46e86173b023524d7)**

Wrote Jest tests for verifying successful fetch attempts for the `matcher.js` module. These tests run on a virtual page that is setup in the CI's localhost and on a successful exit code, a screenshot of that page is posted back into the respective PR on GitHub via Travis (or whatever CI you're using). A snippet of two of such tests is given below.

```javascript
describe('Built-in modules', () => {
  beforeAll(async () => {
    await page.goto(`http://127.0.0.1:8088/demo/index.html`);
  });

  it('corners: all key-points detected', async () => {
    expect(context('corners')).not.toBeNull();
  });

  it('matches: all rich matches found', async () => {
    expect(context('matches')).not.toBeNull();
  });
});
```

- **[Keymapper improvements to pave way for stalled PRs](https://github.com/publiclab/Leaflet.DistortableImage/pull/243)**

Made final changes to the keymapper PR, which has been open for a while now. Getting this one in will allow merging of many of my other PRs that have been around for the same time and require very little or no changes. These are:

- [Sub-menus implementation](https://github.com/publiclab/Leaflet.DistortableImage/pull/225)
- [EXIF functionality](https://github.com/publiclab/Leaflet.DistortableImage/pull/169)
- [Reveal functionality](https://github.com/publiclab/Leaflet.DistortableImage/pull/155)
- **[matcher.js integration into Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage/pull/312)**

Implemented [`stitcher`](https://github.com/publiclab/Leaflet.DistortableImage/blob/d4ce53adc505f2958e832c56b07a3d176060ecee/src/util/matcher/stitcher.js) and [`projector`](https://github.com/publiclab/Leaflet.DistortableImage/blob/d4ce53adc505f2958e832c56b07a3d176060ecee/src/util/matcher/projector.js) modules for auto-locating overlays based on their EXIF coordinates and Leaflet UI helpers for graphic renders on overlays, respecively. For more details, [see this](https://github.com/publiclab/Leaflet.DistortableImage/pull/312/commits).

- **[Getters and Setters for `matcher.js`](https://github.com/publiclab/matcher-core/pull/6)**

Refactored older `tick` implementation in the `matcher.js` library into smaller methods, namely `findPoints` and `findMatchedPoints` which would allow for improved code readability and specificity. These methods return all the detected corners, and the overlapping matches between the two images, respectively. `findPoints` is actually faster by a few hundred milliseconds as compared to `findMatchedPoints`, since the latter has the computational overhead of running the algorithm to overlap images and find matches among them, which takes more time.

- **Image-sequencer integration of matcher.js**

A demonstrative module integration for `matcher.js` to show beginners and experienced devs the practical steps to follow in order to integrate it into a library. The implementation is in it's final stages, and I'll soon push a PR for the same once my [doubt](https://github.com/publiclab/image-sequencer/issues/1181) is resolved. I also had the idea of making a `matcher.js` API that people could straight away pass images and params in, and get points back! Let's see what feedback this gets, which will be essential for its implementation, if it happens.

- **Caching mechanism for matcher.js**

Implemented a caching mechanism that allows the algorithm to only run once, that's it! For a bit more detail and interesting insights on the same, [read my comment here](https://github.com/publiclab/matcher-core/issues/4#issuecomment-508223240).

- **[Prepping up docs from a lesser in-depth but more user-friendly POV](https://github.com/publiclab/matcher-core/pull/6/commits)**

Complex libraries require super simple documentation, which I think the `matcher.js` library could finally be close to having thanks to @jywarren who constantly guided me along the way! This may not seem much, having to do nothing with code but only docs, but a library is only as good as its documentation, which is indeed critical in a library's overall growth.

- **Simpler constructor and corresponding documentation**

Again, thanks to @jywarren's observant eye, I was able to change the initial `matcher.js` constructor from this,

```javascript
Promise.resolve(new orbify('/path/to/img1.jpg', '/path/to/img2.jpg', {
	browser: true,
	params: {
		lap_thres: 35,
		eigen_thres: 40,
		blur_size: 4,
		matchThreshold: 50
	}
}).utils).then(function (utils) {
	callback(utils);
});
```

to this,

```javascript
  new Matcher('/path/to/img1.jpg', '/path/to/img2.jpg',
  async function (r) {
    document.getElementById('res').innerHTML = JSON.stringify(await r);
  }, {
      browser: true,
      caching: true,
      leniency: 30,
      params: {
        lap_thres: 30,
        eigen_thres: 35
      }
    });
```

with the addition of type checks and a simplistic callback function that simplifies one's engagement with this library. This, although a small change, makes the library look really nice from a semantic POV while keeping a check on the order of things, thanks a ton, @jywarren!

- **[Fix user reported bugs](https://github.com/publiclab/Leaflet.DistortableImage/pull/358)**

User engagement is something that is of immense value here and Public Lab strives to resolve any bugs or issues that the users might be facing. Recently, @molangmuir10 suggested some changes and reported some bugs for the MK/LDI UI/UX (thanks!) which (documented [here](https://github.com/publiclab/Leaflet.DistortableImage/issues/306)) were acted upon today [here](https://github.com/publiclab/Leaflet.DistortableImage/pull/358), and are up for @jywarren's and @sashadev-sky's review.

Yup! Pretty much this is almost everything I've been around for the past few weeks, and these are in the absolute final stages, if not done with already, which makes me excited all the amazing stuff that `async`s us to be `await`ed for the next evaluations (get it?)! It's been an exciting journey till now, and I'm affirmative that it'll be even more astounding and full of commits, reviews, and PRs for the next month as well!

And as always, thank you for giving this a read, ciao!