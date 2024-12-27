---
title: "GSoC proposal: Mapknitter ORB Descriptor (w/ auto-stitching, pattern training, and live video support) and LDI revamp (major UI enhancements)"

tagnames: 'software, gsoc, soc, response:13975, first-time-poster, rgsoc-2019, gsoc-2019, soc-2019, soc-2019-proposals, soc-2019-projects'
author: rexagod
path: /notes/rexagod/03-11-2019/gsoc-proposal-mapknitter-orb-descriptor-w-auto-stitching-pattern-training-and-live-video-support-and-ldi-revamp-major-ui-enhancements.md
nid: 18515
uid: 564358
cids: 22114,22118,22140,22141,22146,22147,22148,22149,22163,22169,22183,22195,22204,22226,22242,23337,23342,23344,23361,23368,23688,23689,23691,23771,23773,23778,23805,23814,23824,23993,24000,24013,24100
---

![](https://publiclab.org/public/system/images/photos/000/030/001/original/untitled_%281%29.jpg)

# GSoC proposal: Mapknitter ORB Descriptor (w/ auto-stitching, pattern training, and live video support) and LDI revamp (major UI enhancements)

by [rexagod](/profile/rexagod) | March 11, 2019 15:08

March 11, 2019 15:08 | Tags: [software](/tag/software), [gsoc](/tag/gsoc), [soc](/tag/soc), [response:13975](/tag/response:13975), [first-time-poster](/tag/first-time-poster), [rgsoc-2019](/tag/rgsoc-2019), [gsoc-2019](/tag/gsoc-2019), [soc-2019](/tag/soc-2019), [soc-2019-proposals](/tag/soc-2019-proposals), [soc-2019-projects](/tag/soc-2019-projects)

----

## About me

Name : Pranshu Srivastava

Email : [rexagod@gmail.com](mailto:rexagod@gmail.com)

Github : [https://github.com/rexagod](https://github.com/rexagod)

Proposal: Includes [MapKnitter UI](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+UI) and [Microscope live stitching, auto-stitch in MapKnitter (magnetic attraction)](https://publiclab.org/wiki/gsoc-ideas#Microscope+live+stitching,+auto-stitch+in+MapKnitter+(magnetic+attraction))

Student year: Sophomore (second-year student)

Field of study: Computer Science Engineering, B.Tech.

Affiliation : Jaypee Institute of Information Technology, India

Location : Noida, India

## Project description

### Abstract

Employing machine learning techniques to incorporate an ORB desciptor (w/ auto-stitching, live video support) in order to enable better pattern matching along with some major LDI UI (and API) enhancements.

### Aims to solve

**Both of the projects listed below are detailed descriptively in the implementations section**

**[Oriented FAST and Rotated BRIEF (ORB) Descriptor](https://publiclab.org/wiki/gsoc-ideas#Microscope+live+stitching,+auto-stitch+in+MapKnitter+(magnetic+attraction))**

- Currently, the user has to manually "stitch" similar looking images in order to form a larger one. We aim to automate this cumbersome process in the following sequence.
  - First, using some of the advanced machine learning techniques, mostly "Oriented FAST and Rotated BRIEF", i.e., ORB detection, offered by the JSFeat (JavaScript Computer Vision) Library the algorithm will understand _how similiar_ any two images passed to it are, showing the corresponding outputs (keypoints, matches, good matches, gaussian blur and grayscale intensity) for each pair to the user. Also, a "training process" will be initiated every x seconds to better recognize and discover even more keypoints in the image, leaving lesser room for failed attempts at each iteration.
  - Second, on the basis of the above details the user can choose to "stitch" the images which itself, will be an automated process, and the "auto-stitcher" `ToolbarAction` will proceed to automatically stitch them together (using the Auto-Stitcher module, detailed below).
  - Lastly, for better accuracy, the user themselves can intervene and make small adjustments if they wish to obtain precise results.
- Public Lab will also showcase a live video ORB matcher, that learns from an image passed to it, and goes on to find that particular pattern in the live video feed! At each step, the most efficient params will be considered, so as to maintain the maximum render FPS possible. This can be applied to various areas of interest, for eg., a particular minute organism can easily be detected if the video feed from the microscope was supplied to this module and compared against an image of it (downloaded from the net, or uploaded from user's local), or a prominent object in space using the satellite's live feed, the possibilities are endless!

**[Mapknitter UI enhancements](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+UI)**

Currently, the `Leaflet.DistortableImage` repository serves as the supporting image distortion library of the `Mapknitter` repository hence proving itself to be an essential part of it. We'll be implementing some major core changes as per the planning issue describes [here](https://github.com/publiclab/Leaflet.DistortableImage/issues/126 "https://github.com/publiclab/Leaflet.DistortableImage/issues/126"), which will definitely prove beneficial to the user in terms of better accessibility and interactivity. Work regarding this already in progress and can be checked out [here](https://github.com/publiclab/Leaflet.DistortableImage/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Arexagod+ "https://github.com/publiclab/Leaflet.DistortableImage/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Arexagod+").

### Implementation

**[Oriented FAST and Rotated BRIEF (ORB) Descriptor](https://publiclab.org/wiki/gsoc-ideas#Microscope+live+stitching,+auto-stitch+in+MapKnitter+(magnetic+attraction))**

**Dividing this into subparts,**

a) **Microscope live-tracking:** We can modify the algorithm to adapt to just a single image and train only on that rather than depending on the live video feed to train itself, in short, this will allow the user to provide an image (pattern) as an input and the tracker will then attempt to find that pattern in the feed every x seconds in a loop (currently set to 2s). On finding appropriate matches the tracker will filter the number of "good matches" and if they are above a certain threshold, display "matched".

![Screenshot from 2019-03-09 19-36-13](https://user-images.githubusercontent.com/33557095/54072595-db20b600-42a2-11e9-9b9c-a2280ed446b6.png)

**Live-tracking in action!** (do let me know if the .gif is taking way too long to load)

[![Peek-2019-03-09-18-10.gif](https://s2.gifyu.com/images/Peek-2019-03-09-18-10.gif)](https://gifyu.com/image/3kLF)
Few points of interest above that one should notice are that the no matter the orientation, ORB will recognize image pattern if they are even partially visible. Also, notice how it confirms a match case even when some portion of the coaster was cut off.

b) **ORB Algorithm (currently in beta, [click here](https://orb-deploy-8j90kc7vv.now.sh/) to check it out!):** We can enhance the current ORB algorithm in the following ways in order to better fit Public Lab's utilization.
- [a simplified version of the] Currently proposed ORB structure, built on @warren's suggestions, is depicted below. Note that this is based off of the review [here](https://publiclab.org/notes/rexagod/03-11-2019/gsoc-proposal-mapknitter-orb-descriptor-w-auto-stitching-pattern-training-and-live-video-support-and-ldi-revamp-major-ui-enhancements#c23688), and satisfies the queries in that particular comment. The actual implementation in all practicality, will be much more detailed, but still draws inspiration from the snippet below.

````js
function ORBMatcher() {
  this.findPoints = findPoints;
  this.findMatchedPoints = findMatchedPoints;
  this.projectPointsInto = projectPointsInto;
  this.renderer = renderer;
  return this;
}

function findPoints(img) { //extracts [RGBA] info about every pixel in an image passed to it
  //img is an `Image()` instance
  var canvas = document.createElement("CANVAS");  //notice we aren't appending this anywhere (offscreen)
  //TC is a temporary canvas used to extract [RGBA] data for each pixel of image
  var TC = node.getContext("2d");
  TC.drawImage(img,0,0,img.width,img.height); //faster than putImageData
  canvas.parentElement.childElement(canvas); //remove canvas since we are done with canvas APIs
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //imgData contains `0-255` "clamped" points in a Uint8ClampedArray (refer MDN)
  //for eg., if the image is of the resolution 640x480, this array will have 1228800
  //elements (307200x4), where all are "clamped" (rounded off) to have a value
  //between 0-255, and every set of 4 elements represents the R,G,B, and A values
  //for every single pixel, i.e., 307200 pixels
  var imgData = TC.getImageData(0, 0, primary_image.width, primary_image.height);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //finally, we can extract the data about every single pixel, which also removes
  //the need for having a `Stateful` module (saving space as well) since we
  //now already have everything we need
}

// construct correspondences for inliers
// var correspondences_obj;
// for (var i = 0; i < count; ++i) {
//  var m = matches[i]; //`match_t()` construct:176
//  var s_kp = screen_corners[m.screen_idx]; //`keypoint_t()` construct:175
//  var p_kp = pattern_corners[m.pattern_lev][m.pattern_idx];
//  pattern_xy[i] = { "x": p_kp.x, "y": p_kp.y }; //==>X (img1points)
//  screen_xy[i] = { "x": s_kp.x, "y": s_kp.y };  //==>Y (img2points)
// }
// correspondences_obj = {"X":pattern_xy,"Y":screen_xy};
function findMatchedPoints(X,Y) {
  var good_matches_locatorX=[];
  var good_matches_locatorY=[];
  var strong_inliers=0;
  var xk=0;
  var yk=0;
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //assuming we have already constructed correspondences from imageData as
  //described above and X and Y hold the `pattern_idx`(image1points) and
  //`screen_idx`(image2points) of the matches array for every
  //pixel respectively for each pixel in { "x": p_kp.x, "y": p_kp.y }
  //and { "x": s_kp.x, "y": s_kp.y } formats for X and Y respectively (please refer to the image above)
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //find respective homographic transforms for both of the models (X and Y)
  //run ransac homographic motion model helper on motion kernel to find
  //*only* the strong inliers (good matches) excluding away all the others
  //(works on static models as well)
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var mm_kernel = new jsfeat.motion_model.homography2d();
  var homo3x3 = new jsfeat.matrix_t(3, 3, jsfeat.F32C1_t);
  var ransac_param = new jsfeat.ransac_params_t(num_model_points,reproj_threshold, 0.5, 0.99);
  var match_mask = new jsfeat.matrix_t(500, 1, jsfeat.U8C1_t)
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (jsfeat.motion_estimator.ransac //runs once for static models and iterates if motion is detected
   (ransac_param,
    mm_kernel,
    X,
    Y,
    strong_inliers,
    homo3x3,
    match_mask))
  {
     for (var i = 0; i < count; ++i) {
         if (match_mask.data[i]) {
           X[strong_inliers].x = X[i].x;
           X[strong_inliers].y = X[i].y;
           Y[strong_inliers].x = Y[i].x;
           Y[strong_inliers].y = Y[i].y;
           good_matches_locatorX[xk++]= X[i];
           console.log(X[strong_inliers]); //==>{x: 359, y: 48},i.e., a matched point in X space
           good_matches_locatorY[yk++]= Y[i];
           console.log(Y[strong_inliers]); //==>{x: 65, y: 309},i.e., the corresponing point in Y space
           strong_inliers++;
         }
     }
     mm_kernel.run(X, Y, homo3x3, strong_inliers); //run kernel directly with inliers only
  }
  var matched_points = {
    "good_matches_X": good_matches_locatorX,
    "good_matches_Y": good_matches_locatorY,
    "matches_count": strong_inliers
  };
  return matched_points; //store location of all good matches in both models (images), X and Y, as well as their count
}

function projectPointsInto(matched_points,canvas,match_thres_percentage=30,expected_good_matches=5) {
  var good_matches = matched_points.matches_count; //from above fn.
  if (num_matches) { //from `match_pattern` utility fn.
   if (good_matches >= num_matches * match_thres_percentage/100) //we have a match!
   renderer.lines(canvas, matches, num_matches);  //picks X/Y data from matches and num_matches which are GLOBALS
   if (good_matches >= expected_good_matches) //in case of a solid match when results are as we expected or even better
   renderer.box(canvas);
   //we can stop iterations here completely for performance issues
  }
}

var renderer = { //gets hoisted
  lines: function(canvas, matches, num_matches) {
   render_matches(canvas, matches, num_matches);
  },
  box: function(canvas) {
   render_pattern_shape(canvas);
  }
}

//declarations and calls

var matcher = new ORBMatcher();

var imageA = new Image();
imageA.src = "imageA.jpg";
var imageB = new Image();
imageB.src = "imageB.jpg";

var imageDataA = matcher.findPoints(imageA);
var imageDataB = matcher.findPoints(imageB);
//construct correspondences
var matcherData = matcher.findMatchedPoints(X_,Y_);
var canvas = querySelector("#deploy-canvas").getContext("2d");
matcher.projectPointsInto(matcherData,canvas);
````

![mnpyr](https://www.pyimagesearch.com/wp-content/uploads/2015/03/pyramid_example.png)

- Large Data files solution: For large images ranging from 10-15mb, we can downsample the image data matrix into a smaller one, while carefully preserving most of the inliers. `JSFeat` implements the `Gaussian Pyramid` method of downsampling a large image to a smaller one in it's `pyrdown` API, i.e., `jsfeat.imgproc.pyrdown(source:matrix_t, dest:matrix_t);`. Here we can set the destination matrix to as few rows and columns which will allow us to process things faster while not sacrificing the important inliers in the image, as is evident from the final (smallest) image in the image pyramid above.
- Proposed change in the search algorithm: Instead of starting from the first row and column, I believe a better approach would be starting from the means, i.e, if the image is of the resoulution 640x480, we can start our search from the `imgData`'s pixel info at row,col of [320][240] and moving out in a circular (vignette) fashion. This approach is based on the fact that majorly the images have meaningful data, or inlier clusters count maximum at the center, rather that at the borders. To stop the execution, refer to the `projectPointsInto` fn. in which we can do the same in case `good_matches >= expected_good_matches`, where `expected_good_matches` is a custom threshold, and can be adjusted to reduce performance issues as well.
- Determining the "confidence" of each point match structure: The "confidence" for each point is currently being calculated in the `match_pattern()` util. fn. and can be returned to the `getMatches` fn. (refer snippet above). We might want to note that the "confidence" we are talking about here corresponds to the standards set by the `match_threshold` and ranges between 0-127. The measure of a point being above or below the `match_threshold` is currently a property of **every** single point, so if two points were, say, to be in a pair, both of their `best_dist` (confidence factors) would be the same.
- Completely remove all the video instances since we won't be working with any video formats whatsoever _inside_ the LDI UI.
- Add support for training process to occur b/w images rather than a video and image.
- Calibrations and adjustments below can be employed to maximize ORB coverage while reducing outliers at the same time. But what exactly are these and why do we need them?
  - **Gaussian blurring:** Reduces noise (outliers) by blurring the modified input `img_u8`(8-bit conversion).
![Screenshot from 2019-03-09 20-18-41](https://user-images.githubusercontent.com/33557095/54073076-ff7f9100-42a8-11e9-8541-eecb07b00216.png)
  - **Grayscale method:** Converting every pixel to a 0 (black) or 1 (white) value for way better performace and evaluation.
![Screenshot from 2019-03-09 20-31-14](https://user-images.githubusercontent.com/33557095/54073213-7f5a2b00-42aa-11e9-948c-58d5daef42a9.png)
  - **Match threshold application:** Specify matching standards (how high/low should the ORB expect the match instensity to be in order for it to be a good match).
![Screenshot from 2019-03-09 20-37-39](https://user-images.githubusercontent.com/33557095/54073287-5c7c4680-42ab-11e9-96dc-e138dfa84687.png)

> The idea is to separate the image into two parts; the background and foreground. Select initial threshold value, typically the mean 8-bit value of the original image. Divide the original image into two portions; Pixel values that are less than or equal to the threshold; background.
>
> Based on this, we need to consider two more thresholds, which are available under the YAPE06 module, originally designed by CVLab, Switzerland.

- **Eigen threshold application:** Specify how similar two pixels should be in order for the ORB to perceive them as "lying in the same cluster".
![Screenshot from 2019-03-09 23-58-04](https://user-images.githubusercontent.com/33557095/54075630-9d825400-42c7-11e9-8b95-fbeec469b71a.png)
- **Laplacian threshold application:** Defines the rate of change of intensity of the pixels that should be perceived by the ORB as "noisy".
![Screenshot from 2019-03-09 23-55-57](https://user-images.githubusercontent.com/33557095/54075631-9d825400-42c7-11e9-8cf1-61788e44e702.png)
- Finally, we can modularize this technique into a custom PL module that accepts two images and runs the algorithm against them. Refer (d) to look over the current proposed steps we can take after this.

c) **Auto-Stitcher module:** The auto-stitcher module will accept two images, the two most recently clicked images (as of now) and then then proceed to "stitch" those together as per the instructions passed on to it. We can, as an initial implementation, add a functionality to this module that allows the user to attach an image in any of the four major directions, after which the user themselves can make little changes to those images if need be. Since it wasn't merged at the time of writing this, I didn't implement this using the "multiple-image" selection feature, but am in the favor of shifting from the "last two latest-clicked images" to selecting any two images as per user's convenience and passing those down to the Stitcher, thus improving the module's overall accessibility. An `undo` function can be easily implemented as well using the recent `addTool` API of the `Leafet.DistortableImage` which triggers and adds an undo button to the menu bar every time the user `stitches` two images, and is removed upon undoing the stitch action. We can display a soft popup here to notify the user of the stitch since alert would be a bit "obstructing". I also believe that we should implement the `AS` module until after we have successfully abstracted away our polylines one, then using that build the `AS` on top of it.

```javascript
// an instance that "traces" the last two latest-clicked images
var Tracer = L.DistortableImage.Tracer = L.DistortableImage.Tracer || {};
```

```javascript
initialize: ...
//previous image (constructing param being {}) is available in this scope
overlay.Tracer = Tracer;
Tracer = overlay._corners;
//current image that is clicked is available in this scope
```

![carbon](https://user-images.githubusercontent.com/33557095/54076151-1c7a8b00-42ce-11e9-88a8-622fde3acf6c.png)

[![autostitcher--road.gif](https://s2.gifyu.com/images/autostitcher--road.gif)](https://gifyu.com/image/3ksN)

d) **Integrating (b) and (c):** We can incorporate the ORB and Stitcher modules to work together in real-time in the MK UI. Whenever the user selects two images for comparison, the images are first passed down to the ORB module that displays all the relevant information about that particular pair of images in a modal. After this the user can select whatever pair fits best and choose to "stitch" them together in a user-defined orientation (right, left, top, bottom) with respect to the original image using the Auto-Stitcher.

![modal](https://user-images.githubusercontent.com/33557095/54071978-62b5f700-429a-11e9-9080-14ecd905f37b.png)

That being said, I am well familiar with [Leaflet's polylines](https://leafletjs.com/reference-1.4.0.html#polyline) and think that replacing `JSFeat`'s inbuilt methods with Leaflet's (@warren's suggestion) shouldn't be a problem at all, since we already have the indices of all the good matches, which brings me to another very important aspect of this library, the {x,y} image space conversion to `LatLng` objects. This can be achieved by a `Scale function`, that takes in the {x,y} coordinates of the matched points, and encapsulates them to <LatLng> points. What I'm proposing here is, the extensive use of the following "scaling" formula, which can be used to convert the image space points to latitudes and longitutes, hence easily being able to pinpoint the desired location on the image using the Leaflet library, and thus being able to use those coordinates in a ton of different Leaflet APIs.

![Scaling](https://user-images.githubusercontent.com/33557095/55764987-4a98e980-5a8b-11e9-8f17-44d2672250d7.jpeg)

Converting image coordinates to `LatLng` object properties: For the "scaled" width we can, `x_image_to_lat = {|obj2.x-obj1.x|/image_width} * imagespace_x`. Similarly, for the "scaled" height we can, `y_image_to_lng = {|obj3.x-obj1.y|/image_height} * imagespace_y`.

**[Mapknitter UI enhancements](https://publiclab.org/wiki/gsoc-ideas#MapKnitter+UI)**

This is currently under progress, and most of the points in the **[projects and compatibility section](https://github.com/publiclab/Leaflet.DistortableImage/issues/126#issue-406401098)** have been or are getting resolved [over in the PRs](https://github.com/publiclab/Leaflet.DistortableImage/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Arexagod+) which I've submitted till now. I do aim to incorporate the appropriate modifications to my remaining open PRs as per @warren's suggestions and get them merged speedily and the remaining ones as well. You can checkout the follow-ups on the [original planning issue](https://github.com/publiclab/Leaflet.DistortableImage/issues/126#issuecomment-467174502) as well.

Also, based on @warren's review, I think we can actually **encapsulate all the "matching functions" in a different module, while constructing the UI (`AutoStitcher`+`Lines`+`Boxes`) using a different one**. This would also make the testing part more convenient, and improve the resuseability of the components as well.

### Timeline

- **27th May to 23rd June: Introduce and integrate two new PL modules (w/ blog posts on both dates)**
  - **Week 1 and 2: ORB and Auto-Stitcher modules (w/ FTOs on each weekend)**
    - Starting off with the most exciting aspects of my proposal, the ORB and Auto-Stitcher modules will be implemented from scratch and solidified along the way (details above), while keeping in mind to make these effective yet simplistic, so that newer contributors who find this interesting can easily contribute to this. I will also be **fully** documenting both of these modules to make the code as readable and easily understandable as possible, especially the Oriented FAST and Rotated BRIEF (ORB) module. That being said, I, under the guidance of my mentor, will execute appropriate measures to refine these modules so that they perfectly fit in with Public Lab's coding standards, practices, and community expectations.
  - **Week 3 and 4: Integrate modularized ORB+AS and Microscope web-based live demo (w/ PR reviews on each weekend)**
    - Although I've proposed a way to integrate ORB+AS into LDI above, I am and will be open to newer and better ideas that might be suggested by my mentor during my GSoC period. As is discernible, this will be a more work-focused period, and throughout this duration I will work on a **modularized** integration in order to maintain the readability of the codebase.
    - The Microscope web-based demo will implement an abstract flavor of the ORB different from its native or LDI implementation. For this purpose, I'll be customizing the ORB almost from the bottom-up, to change its current behavior of depending on user to train itself whenever prompted from the video feed to completely discarding that approach and rather train itself from a specific image supplied to it, so that it could find the desired patterns in the live feed, as is demonstrated the `.gif` above. It may also be worth noting that this will be a PL standalone module, unless until suggested otherwise.
 - **24th June to 28th June: Evaluations**
- **29th June to 21st July: Testing and Debugging Phase (w/ blog posts on both dates)**
  - **Week 1 and 2: General Debugging at LDI's #87 (w/ FTOs on each weekend)**
    - This period will consist of different approaches to resolve the issues (todos, lower priority, and leftovers) over at LDI #87\. These bugs have been in the system for a while now, and need to eradicated as soon as possible to build a neat codebase to attract more contributions in the future and less dangling errors in the future.
  - **Week 3: Unit Tests w/ Jasmine (w/ PR reviews on each weekend)**
    - Initially proposing the opportunity to write extensive tests for the ORB, AS, and the Microscopic live-feed modules, but willing to write exhaustive unit tests for different potential LDI modular fragments, however my mentor sees fit.
- **22nd July to 26th July: Evaluations**
- **27th July to 25th August: LDI UI revamp (w/ blog posts on both dates)**
  - **Week 1 and 2: LDI #126 (w/ FTOs on each weekend)**
    - During this period I will be looking forward to completely solving the remaining planning issues, i.e., finishing off the projects section and implementing the assorted utility functions, a step closer to the next major release of LDI!
  - **Week 3 and 4: Uncommon issues (w/ PR reviews on each weekend)**
    - I will finish off my GSoC journey by working on some of the uncommon issues such as Cross-browser testing for the `Toolbar` module by generating heap snapshots across various combinations of OS and browser versions. I'm currently considering different ways to implement this but this method looks the most promising and solid. Other than this, I will work on implementing a couple of [unique approaches](https://medium.com/@sarahelson81/save-time-on-manual-cross-browser-testing-3772be756e68) that'll further guarantee the end-to-end functionality of PL's components and will also be easier for the new comers to quickly participate in! Also, I'll also look over the menu placement and image deletion (and specific ordering) issues which have been showing unexpected behaviour for a while now.

### Needs

Only the guidance of my mentor, everything else that I require is either online, or on my local.

### Contributions

**At the time of writing this down, my contributions have been as follows.**

![Screenshot from 2019-03-10 02-41-12](https://user-images.githubusercontent.com/33557095/54077453-797e3d00-42de-11e9-85a4-47f4e8ae989f.png)

- Pull Requests (53 total, 46 closed, 7 open): [Navigate](https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3Arexagod+archived%3Afalse+user%3Apubliclab "https://github.com/pulls?q=is%3Aopen+is%3Apr+author%3Arexagod+archived%3Afalse+user%3Apubliclab")
- Issues -- FTOs (17 issues): [Navigate](https://github.com/issues?q=is%3Aissue+author%3Arexagod+archived%3Afalse+label%3Afirst-timers-only+is%3Aclosed)
- Issues -- Overall (31 issues): [Navigate](https://github.com/issues?q=is%3Aissue+author%3Arexagod+archived%3Afalse+user%3Apubliclab)
- Comments (on 148 issues): [Navigate](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Arexagod+org%3Apubliclab&type=Issues)
- Review Requests (19 PRs): [Navigate](https://github.com/pulls?q=review-requested:rexagod%20user:publiclab)

### Experience

**Comfortable with:** C, CPP, JS, SH.

**Achievements**

- Mentored at [KWoC](https://kwoc.kossiitkgp.org) organized by KOSS, IIT Kharagpur, accessible [here](https://kossiitkgp.org/public-files/KWoC/2018-Certificates/KWoC18-Pranshu%20Srivastava.pdf) (2018).
- JS Core at [GDG JIIT Noida](https://github.com/GDGJIITNOIDA) (2019) and [JIITODC Noida](https://github.com/JIITODC "https://github.com/JIITODC") (2019).
- Secured 1st rank at DevFest organized by [GDG JIIT Noida](https://github.com/GDGJIITNOIDA) (Google Developer Groups, now Developer Student Clubs) (2017).
- Secured 1st rank at Website Designing Competition (WDC) organized by [GDG JIIT Noida](https://github.com/GDGJIITNOIDA) (2017).

### Teamwork

- Interned towards the end of my first year as a Front-end developer at Profformance Technologies Pvt. Ltd. for their product, Xane, a React chatbot for HR purposes. The team strength wasn't much, about 25 people or so, and after a couple of months, I adapted to a work-from-home option to manage it with my studies, while visiting occasionally to attend meetings and other events. Throughout the duration of my internship here, I was introduced to the corporate etiquettes and productive practices that helped me realize the importance of time and priority management. I employed these techniques into my daily lifestyle to stay motivated and focused towards my project, as is discernable [here](https://github.com/publiclab/PublicLab.Editor/files/2948966/Pranshu.Certi.pdf) too.
- I am a member of JavaScript core team at Google DSC JIIT. I've been teaching JS (Vanilla, React, and Node.js) to my peers for some time now which has helped me to stay updated with the latest API changes as well, while coordinating with rest of the team throughout.
- I also mentor a lot of enthusiastic students about OSS through JODC, working collaboratively with a lot of local tech societies like DSC-BVP, I take workshops and talks to bridge the gap between newcomers and development and spread awareness for FOSS. I am a teaching assistant here as well.

### Passion

![Screenshot from 2019-03-10 02-37-11](https://user-images.githubusercontent.com/33557095/54077394-9108f600-42dd-11e9-9be8-84812c7a245f.png)

To start this off, I cannot stress how joyous I am when I realize that my code is actually improving the very surroundings that we live in! It's really an amazing feeling to "give back" to nature in such a unique way, which has become my passion and should be everyone else's too! Having said that, what interested me most about Public Lab's projects was the substantial, caring, and progressive community, which actively helped me clear away my doubts and learn new and interesting things throughout my journey with Public Lab, which I very much plan to extend for the many years to come!

### Audience

My project will directly help all users (students, researchers, etc.) working in all kinds of fields that relate to studying, examining and experimenting with maps in many different ways possible, as described in various sections above. Also, it will help them recognize patterns that might often be "overlooked" by the human eye and thus extract credible information from live-video feeds, ranging from microscopic experiments to satellite broadcasts to cost-effective visual sensors for the visually impaired.

The best thing about this is that all of it is open-sourced and free, so people from all over the world, no matter what their current social or financial status is, can use this to meet their needs, and even make it better!

### Commitment

I do understand that this requires serious commitment, and since the day I joined Public Lab I've structured every single day to revolve around only two priorities, i.e., PL and college, actually in that order (I like it here!), which has enabled me to make about 185 contributions since mid-December! Also, I'd like to mention that I will, as I have done previously, continue to actively interact with the newer contributors and provide insight and any help that I can regarding their PRs and issues during (and after) my GSoC period. Hence, I firmly believe that I will deliver my assignments with commitment and promptness, given that I get selected!

**Thank you!**