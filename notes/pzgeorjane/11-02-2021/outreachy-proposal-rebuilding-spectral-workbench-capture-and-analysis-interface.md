---
title: Outreachy proposal: Rebuilding Spectral Workbench capture and analysis interface
tagnames: software, outreachy, first-time-poster, zoom:5, outreachy-2021, outreachy-winter-2021, lat:5.965753, lon:10.151367
author: pzgeorjane
path: /notes/pzgeorjane/11-02-2021/outreachy-proposal-rebuilding-spectral-workbench-capture-and-analysis-interface.md
nid: 28042
uid: 775513

---

# Outreachy proposal: Rebuilding Spectral Workbench capture and analysis interface

by [pzgeorjane](../profile/pzgeorjane) November 02, 2021 16:29

November 02, 2021 16:29 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:5](../tag/zoom:5), [outreachy-2021](../tag/outreachy-2021), [outreachy-winter-2021](../tag/outreachy-winter-2021), [lat:5.965753](../tag/lat:5.965753), [lon:10.151367](../tag/lon:10.151367)

## About me

_Hi, I'm Witah Georjane, a Full-Stack Developer from a remote software development school called Microverse where I mastered pair-programming skills amongst other important technical and soft skills while working on real-world projects. I've spent the last several months completely immersed in remote development, building everything from landing pages, problem-solving applications like Book Scan tools to Rails APIs. I also worked with Microverse part-time as a Technical Support Engineer and volunteered as a mentor._

_I am an aspiring leader with excellent communication skills and an ability to learn quickly, who is socially oriented, has a strong self-motivation to get to know people in all walks of life, has a natural enthusiasm for all types of ideas and projects - mine and others and is ready to do whatever it takes to achieve her goals and dreams. I am also a single mom._

_I love coding specifically because I love the puzzle-solving aspect of it, so I code daily. I only started coding a year ago and now I'm in the top 1% of active GitHub users in my country, which is a small brag but something I'm really proud of._

**Location:** _Bamenda, Cameroon._

## Project description

[](http://SpectralWorkbench.org)_[SpectralWorkbench.org](http://SpectralWorkbench.org) is a web-based application to collect, archive, share, and analyze spectral data, for Public Lab DIY spectrometers and other spectrometers, in the form of images with associated JSON data. It makes use of a JavaScript library which may be used independently or as a library within the larger Ruby on Rails application. Following two big projects to build a modern version of the "capture" interface for collecting data from a smartphone camera, and reworking and integrating that new interface into the Rails app, the project now aims to complete the upgrades by adding all previous features back into the new system, as well as build on the new systems to add new features and abilities._

### Abstract/summary (<20 words):

### _Building a modern version of the Spectral Workbench capture interface to collect data from a smartphone camera_

### Problem

1\. **Reconnect broken routes**

When we click on the contributor's name on the Recent Spectra Section, it takes us to an error link whereas if you open the contributor's spectra and click on the contributor name, you would actually be redirected to the right link.

The fix here will be to copy the correct link from the contribution page and insert it on the Recent Spectra Section.

![](https://lh4.googleusercontent.com/5VYM89MGjEZfNLbo7ow7IFbGCHiHG5dHCP9buKc35aoeSg7jqUGzf6zxKHBYR9xDDi1stWOYQLrTAo59ZJqBRV0CdxBoV5ZaZ_ajo8xiEwKrh-NGGkNo7gHzT85m0cBAkG8ebqNw)

![](https://lh4.googleusercontent.com/xW-lX4FSanCqcLF6JsEV8q36t4PFo7fCyA5pmbSfV-iCRR2dRt_QD7waHPbf9XiruHMazTqOXWnWEg69m8-Vb1g72VvcaABqLEG6EOvv08xJmfAyfFyz8kNJLnT8nWavg6S94pwn)

2\. **Public Lab Spectral Workbench not listing spectra for comparison or calibration**

This issue was reported that it wasn't pulling up spectra for copying calibration or building sets & comparisons. The "Copy Calibration" box shows, but the spinning circle continuously spins without any spectra showing up. It doesn't seem possible to calibrate or compare.![image description](/i/45027.png "img1.png")

3\. **Large unnecessary white space below the footer.** ![image description](/i/45028.png "img2.png")

4\. **Read more link under the proposals template not working**

5\. **Protect routes with functional tests**

This format can be used for a routes test to protect the routes:

```
test "test user_sessions create route" do 
      assert_routing({ path: '/user_sessions', method: :post }, { controller: 'user_sessions', action: 'create' })
end
```

6\. **Debug Safari compatibility and confirm iOS compatibility**

Safari web extensions can be used to debug Safari compatibility and confirm iOS compatibility. This extension provides a number of features for compatibility with other browsers and a good developer experience while ensuring the safety and privacy that users expect. The extension implementation or planned approach, manifest.json key usage, and selected JavaScript APIs for incompatibilities can all be reviewed, and suggestions and workarounds for potential issues can be gotten.

To review our Implementation Plan, we keep in mind that Safari web extensions support both the chrome.\* and browser.\* namespaces. So we can use them appropriately for browser compatibility. Safari web extensions support both the callback and Promise approaches for asynchronous APIs. We will make sure to use the most suitable approach for our code quality and browser compatibility. Safari ignores file URL schemes in manifest permissions. Its implementation can be adjusted if we use them.

Since Safari web extensions generally ignore any unsupported manifest keys, we may need to develop workarounds or alternative approaches for any incompatibilities. We can check for the following keys in the manifest and take action where needed:

- background: In iOS, we must set the persistent attribute to false.
- permissions.webRequestBlocking: Not supported. Use permissions.webRequest instead for macOS only
- tabs: Extension must have host permission.
- update\_url: Not supported. Handle Safari web extension updates with the App Store.
- windows: windows.create, windows.remove, and windows.update not supported in iOS.

7\. **Develop setting to increase capture image resolution above currently fixed 640px**

We can use the Image Capture API. It is an API to capture still images and configure camera hardware settings. It is available in Chrome 59 on Android and desktop. There is also the [ImageCapture polyfill library](https://github.com/GoogleChromeLabs/imagecapture-polyfill) for larger compatibility.

The API enables control over camera features such as zoom, brightness, contrast, ISO, and white balance. Best of all, Image Capture allows accessing the full resolution capabilities of any available device camera or webcam, compared to previous techniques for taking photos on the Web that use video snapshots, which are lower resolution than that available for still images.

An ImageCapture object is constructed with a MediaStreamTrack as the source. The API has then two capture methods takePhoto() and grabFrame() and ways to retrieve the capabilities and settings of the camera, and to change those settings. The Image Capture API gets access to a camera via a MediaStreamTrack obtained from getUserMedia():

```
navigator.mediaDevices.getUserMedia({video: true})
  .then(gotMedia)
  .catch(error => console.error('getUserMedia() error:', error));

function gotMedia(mediaStream) {
  const mediaStreamTrack = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(mediaStreamTrack);
  console.log(imageCapture);
}

```

8\. **Prototype a "reduce noise with time averaging" function within the JS library**

Web Audio DAW (WadJS), a Javascript library for manipulating audio can use the Web Audio API for dynamic sound synthesis. It's like jQuery for your ears. We can reduce noise by using the filter constructor as follows:

- we create a wad, which can represent anything that makes a sound, such as an mp3 file, an oscillator, or even live microphone input. The simplest use case is loading and playing a single audio file.

```
let bell = new Wad({source : 'https://www.myserver.com/audio/bell.mp3'});
bell.play();
bell.stop();
```

- WadJS supports two types of panning: stereo-panning, and 3d-panning. Stereo-panning works the same way panning works in most audio software. With stereo panning, we can specify the left/right balance of the sound using a number between 1 and -1\\. A value of 1 means the sound is panned hard-right, and a value of -1 means the sound is panned hard-left.

With 3d-panning, we don't directly set the left/right stereo balance. Rather, the panning setting describes the distance of the sound source from the audio listener. Any time we would pass in a panning parameter (either to the constructor, the play() method, or the setPanning() method), we can pass it in as a three-element array to specify the X, Y, and Z location of the sound. We can set the panning to arbitrarily high or low values, but it will make the sound very quiet since it's very far away. When using 3d-panning, there are two different panning models that can be used. The HRTF panning model is of higher quality, but the equal power panning model is more performant. If not given, the equal power panning model can be used.

```
var saw = new Wad({
    source        : 'sawtooth',
    panning       : [0, 1, 10],
    panningModel  : 'HRTF',
    rolloffFactor : 1 // other properties of the panner node can be specified in the constructor, or on play()
})
```

The filter constructor argument can be passed an object or an array of objects. If an array is passed, the filters are applied in that order. Whichever form is passed to the constructor should also be passed to the play argument

```
filter: [
    {type : 'lowpass', frequency : 600, q : 1, env : {frequency : 800, attack : 0.5}},
    {type : 'highpass', frequency : 1000, q : 5}
]
```

# 

# 

# 

# 

# 

## Timeline/milestones  

| Week | Task |
|------|------|
| Week 1 | locally install and run code, complete onboarding to Public Lab |
| Week 2 | reconnect broken routes |
| Week 3<br> | protect routes with functional tests |
| Week 4&5<br> | debug Safari compatibility and confirm iOS compatibility |
| Week 6<br> | Open fto to reduce space below the footer and change links under Outreachy proposal templates |
| Week 7&8<br> | develop setting to increase capture image resolution above currently fixed 640px |
| Week 9&10<br> | reconnect and refine “Compare spectra” and “Find Similar” functions within the Rails app |
| Week 11<br> | create documentation for setup and initialization of capture interface |
| Week 12<br> | Allow different input resolutions & prototype a “reduce noise with time averaging” function within the JS library |
| Week 13<br> | Pick up further possible tasks from [here](https://github.com/publiclab/spectral-workbench.js/issues/159) |

## Needs

_I was so overwhelmed and even still overwhelmed with the lots of materials and resources we had to go through as a new contributor to the project. But with the continuous mentorship guidance, we received that pointed us to the right sources, this project would be a great success._

## First-time contribution

- Comments, to show overall community involvement (like helping others): [https://github.com/search?utf8=✓&q=commenter%3AGeorjane+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter:Georjane%20org:publiclab&type=Issues)
- Open issues: [https://github.com/publiclab/plots2/issues/created\\\_by/Georjane](https://github.com/publiclab/plots2/issues/created%5C_by/Georjane)
- Closed PRs: [https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3AGeorjane+is%3Aclosed](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:Georjane%20is:closed)

---------

## Experience

_

I attended Microverse, an online coding school, to master every aspect of skills a professional programmer should have, from technical skills to soft skills. My stacks are as follows:  

Front-End: React JS, JavaScript, HTML5, CSS3

Back-End, Tools & Methods: Ruby on Rails, Node JS, Git, GitHub, Mobile/Responsive Development, RSpec, TDD, Chrome Dev Tools

Professional: Remote Pair-Programming, Teamwork, Mentoring, Problem-Solving, Communication_

_Architectural: AutoCad, ROBOT for Structural Analysis, Conception, and Design of projects.  
_  

_I built a \[Bookscan Tool\]([http://wordradar.gitradar.com/](http://wordradar.gitradar.com/)) from scratch for a PHP \[Word Voyage\]([https://wordvoyage.com/](https://wordvoyage.com/ "https://wordvoyage.com/")) website that we are currently upgrading_

_

I also worked on my final capstone project, \[Hotels & Resorts\]([https://keen-fermat-a31782.netlify.app/](https://keen-fermat-a31782.netlify.app/)) where I used Ruby on Rails API for the backend and React JS for the front end. You can find the code on GitHub, [here](https://github.com/Georjane/redux_hotels_and_resorts)

More of my interesting projects are been showcased in my [Portfolio](https://witahgeorjane.tech/) and all my public repository projects are on [Github](https://github.com/Georjane)_[](https://github.com/Georjane)

[](https://github.com/Georjane)[](https://github.com/Georjane)

[](https://github.com/Georjane)[](https://github.com/Georjane)

[](https://github.com/Georjane)

## Teamwork

_

Pair-programming and Teamwork are top of the list of soft skills I learned while coding. 90% of projects I worked on were in collaboration with partners from diverse cultural backgrounds. We took turns in working as either a navigator or a driver while sharing our screens. We would work on requested changes on our projects were being approved._

_I also worked in a team made up of 5 people from different countries with me being the only female in the team. We met every morning for our daily morning scrum meetings and in the evening for our evening standup meetings. During the morning scrum, we would take turns in presenting the projects we were working on and receive or give positive feedback on the project. At times we would do mob programming that entailed working on a coding challenge from Hackerrank or Leetcode together. This made coding fun and interesting. Every week, one of us would volunteer to be the scrum master. This was my favorite role to play, where I would create GitHub issues, take done scrum notes, and hold my team members accountable for both their absence and progress. This position always pushed me hard to top up my game since I was responsible for the progress of the others._

---------

## Passion

_Understanding that Public Lab is a community where one can learn how to investigate environmental concerns using DIY techniques amongst other effective solutions, immediately presented the perfect opportunity for me to apply the knowledge I acquired while studying for my Master's degree in Civil Engineering where I worked on so many projects addressing sustainable development solutions to environmental issues. This project is a perfect blend of my Civil Engineering and Software Development knowledge and I would be so excited to seize this opportunity to positively impact the environment through my contributions._

## Audience

_This work is for the Public Lab open network made up of community organizers, educators, technologists, researchers working to create low-cost solutions for environmental issues, and open source contributors like myself trying to make the world a better place in our own way one code at a time._

## Commitment

_I am available for 40hours during the week. I can work from 9 am to 5 pm GMT+1 which gives me a perfect balance between work and family as a single mom._