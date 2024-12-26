---
title: "Webcam Conversion to (Near-) Infrared"\ntagnames: 'near-infrared-camera, nir, infrared, webcam, near-infrared, ir, conversion, filter, activity:infrared-camera-conversion'
author: JoshMc
path: /notes/joshmc/10-12-2012/webcam-conversion-near-infrared.md
nid: 4389
uid: 995

---

![](https://publiclab.org/sites/default/files/5593190_0.jpg)

# Webcam Conversion to (Near-) Infrared

by [JoshMc](../profile/JoshMc) | October 13, 2012 03:12

October 13, 2012 03:12 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [nir](../tag/nir), [infrared](../tag/infrared), [webcam](../tag/webcam), [near-infrared](../tag/near-infrared), [ir](../tag/ir), [conversion](../tag/conversion), [filter](../tag/filter), [activity:infrared-camera-conversion](../tag/activity:infrared-camera-conversion)

----

UPDATE:  My previous image server has shut down, so I've uploaded them to a new host, so you can see them here:  http://s1127.photobucket.com/user/Josh_McIlvain/slideshow/Webcam%20IR%20Conversion

For a while I've been wanting to convert a point-and-shoot digital camera to an IR camera by removing the built-in IR blocking filter and replacing it with and IR-pass filter.  However, as a practice run (and to make sure the results will be as fun as I hope they will be) I decided to start with a webcam.

The webcam I used was a Logitech C270, but it seems like most recent Logitech cameras (it's 10/12/12 while I'm writing this) are pretty similar inside.  From my research online it looks like they used to attach the IR blocking filter to the lens, but now they're attaching them to the CCD housing, which is unfortunate because the CCD is much more sensitive.  More on that below.

Basically, this document is mostly going to be pictures with minimal wording for explanations.  If you have any questions or think something should be clarified, feel free to post in the comments.  

But first, a very important note:  the home-made IR pass filter I used is made from developed 35mm film.  If you've searched the internet, the majority of of sites you find will tell you to use <em>unexposed</em> or <em>underexposed</em> developed film.  THIS IS NOT CORRECT.  You MUST use <strong>EXPOSED</strong> (some will call it over-exposed) developed film.  This means THE FILM MUST FIRST BE FULLY EXPOSED TO LIGHT, THEN DEVELOPED.  If you already have some old film negatives, you can use the end-pieces that were exposed when loading/unloading the film.  If you don't, you can either A) buy some film, pull it out of it's container and expose it to light, and get it developed (more expensive), or B) go to a store that develops film on-site and ask if they have any end pieces laying around (cheaper).

Again, I'll clarify YOU MUST USE DEVELOPED FILM THAT HAS BEEN <strong>EXPOSED TO FULL LIGHT</strong> BEFORE IT WAS DEVELOPED.  Unexposed developed film appears mostly clear, because it lets a lot of visible light through.  Exposed developed film appears opaque to your eyes, because it blocks visible light.  This is exactly what you want for a IR-pass filter:  let infrared light through, and block visible light.  You can use unexposed developed film, but it will let almost all visible light through, and won't give you infrared pictures.  

<em>I'll discuss this more at the end, but obviously if you plan to use your webcam in a spectrometer setup, you probably won't want to use any visible light filter, otherwise it will only be useful for a very small range of near-infrared.</em>

So, without further ado...

<img src="http://just.razzi.me/photos/810279/61ff548.jpg" alt="" />

<img src="http://just.razzi.me/photos/810278/43796cf.jpg" alt="" />

<img src="http://just.razzi.me/photos/810277/be79462.jpg" alt="" />
I used a size "0" phillips screw driver.

<img src=" http://just.razzi.me/photos/810276/7f3b92e.jpg" alt="" />
You can't see them really well in this picture, but two screws hold the circuit board down, one in the bottom left and one at the top right.

<img src="http://just.razzi.me/photos/810275/63a6f6a.jpg" alt="" />

<img src="http://just.razzi.me/photos/810274/f00da05.jpg" alt="" />

<img src="http://just.razzi.me/photos/810273/5593190.jpg" alt="" />
I didn't get a picture taken before I took the IR blocking filter off, but it was glued to the ledge just above the CCD shown in this photo.  <strong>To remove it without damaging the CCD I first heated the glue with a hairdryer for about a minute to loosen the glue</strong>.  This step is very important, if you don't loosen that glue, you'll probably damage the CCD when trying to pry out the filter.  After the glue was loose, I used a sharp pocketknife (a razor blade would work well too) to carefully pry out the filter.  Even with my precautions, the filter still broke as I removed it, because it's very brittle.  You can also see at the top right corner where I dented the plastic a bit with my knife.

<img src="http://just.razzi.me/photos/810272/d6fe49e.jpg" alt="" />
Next, the focus of the lens had to be adjusted, because the filter was removed.  Alternatively you could replace the filter with a different filter of exactly the same thickness, but I didn't have one, so I adjusted the focus.  It comes glued into place.  I would have liked to use the hairdryer again here to loosen the glue, but I didn't have it with me.  Instead I scored the glue with my pocketknife a bit then twisted hard and it popped loose.  You still should be careful with this piece, but it's not nearly as sensitive as the CCD.

<a href="http://razzi.me/p/810271"><img src="http://just.razzi.me/photos/810271/8a7031d.jpg" width="700" height="525" alt="Uploaded on Razzi.me" /></a>
Once the glue is free, you can adjust the focus by screwing the lens in or out.

<a href="http://razzi.me/p/810270"><img src="http://just.razzi.me/photos/810270/442fcf5.jpg" width="700" height="525" alt="Uploaded on Razzi.me" /></a>

At this point, it's good to check the CCD for fragments of the filter.  I plugged it into my computer, and you can see it was pretty dirty.  I wiped it off gently with a DRY q-tip.  It's important to remove any dust, filter fragments, hairs of yours that have fallen out during the process, etc.  Then you can screw the lens back in and adjust the focus.

<a href="http://razzi.me/p/810289"><img src="http://just.razzi.me/photos/810289/2a2aaf1.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>

<img src="http://just.razzi.me/photos/810275/63a6f6a.jpg" alt="" />

<a href="http://razzi.me/p/810286"><img src="http://just.razzi.me/photos/810286/44d4190.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>

<a href="http://razzi.me/p/810285"><img src="http://just.razzi.me/photos/810285/93e77ba.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>

<a href="http://razzi.me/p/810284"><img src="http://just.razzi.me/photos/810284/d745f2b.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>
The above three pictures are intermediate stages of my attempts to focus the lens.  It's not perfect, because at close range things get a little blurry, but for objects far away it's pretty clear, and I decided to mainly go for longer distance shots anyway.

<a href="http://razzi.me/p/810269"><img src="http://just.razzi.me/photos/810269/f0918cd.jpg" width="700" height="525" alt="Uploaded on Razzi.me" /></a>
Once I had it focused, I put it all back together.  Then, I took two pieces of OVEREXPOSED DEVELOPED 35mm film and taped them over the lens of the webcam.  If I wanted something more permanent, I could put these inside somewhere where they would be protected, but I wanted the ability to let visible light in or block it with the filter at will.

It does take two pieces of film to block out most of the visible light.  With only a single piece, the CCD was still able to pick up about half the visible light.  See the pictures below.

<a href="http://razzi.me/p/810283"><img src="http://just.razzi.me/photos/810283/cc84003.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>
Internal IR blocking filter removed, but no visible-light blocking filter added yet.

<a href="http://razzi.me/p/810282"><img src="http://just.razzi.me/photos/810282/58532df.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>
A single piece of OVEREXPOSED DEVELOPED 35mm film blocks some of the visible light, while allowing infrared light to pass.

<a href="http://razzi.me/p/810281"><img src="http://just.razzi.me/photos/810281/f44fd87.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>
Two pieces of film block most of the visible light.

<a href="http://razzi.me/p/810280"><img src="http://just.razzi.me/photos/810280/57d8722.jpg" width="640" height="480" alt="Uploaded on Razzi.me" /></a>
One of the first things I noticed was that while all of the overhead lights appeared to be the same brightness in the visible spectrum, some were drastically brighter or dimmer than the others in the near-infrared.  I don't know enough about fluorescent lighting to say why, but I thought it was interesting.


-------------------------------------------


I'll add more to this note as I play with this webcam some more.  It's important to note that technically, it only picks up "near-infrared" light, because that's all the CCD is sensitive to.  I plan to use this webcam (without the film filter) in my next spectrometer, and I'll do a test of just how far into the infrared it can go when I've got that built.  
