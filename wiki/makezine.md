---
title: "Makezine"

tagnames: ''
author: warren
path: /wiki/makezine.md
nid: 10556
uid: 1

---

# Makezine

by [donblair](../profile/donblair), [warren](../profile/warren)

June 12, 2014 18:59 | Tags: 

----

Draft article for Make Magazine by Don Blair & Jeff Warren

Sourcing images from: 

* http://publiclab.org/wiki/foldable-mini-spectrometer
* http://publiclab.org/wiki/oil-testing-kit

Still needs:

* description of SpectralWorkbench.org software
* photos of collecting sample from street
* better description/illustration of capturing spectrum in a dark box
* illustration of unknown X compared to known A and B samples, in lasered bottles and on a graph

****

##Homebrew Pollution Testing with a DIY Spectrometer

_by Don Blair and Jeff Warren_

We hear about pollution in the news, see it in urban waterways like Brooklyn's Gowanus Canal, and from smokestacks at factories and refineries. But how could we better measure pollution and understand the hazards it poses without specialized scientific equipment and expertise, and without breaking the bank? 

If you thought "do it yourself", you're not alone. Three years of open source collaboration by members of Public Lab have resulted in some pretty neat environmental monitoring tools, many inspired by the BP oil disaster in 2010. 

<div class="well">
<h3>What's Public Lab?</h3>

<p>Public Lab is a community anyone can join -- at PublicLab.org, and at regular events in chapters around the world. It's a bit like a cross between the Homebrew Computer Club and Greenpeace -- hackers and makers, but with an environmental health mission!</p> 
</div>

###Reading rainbows

When the BP spill happened, folks were finding tarballs, sheens, and sheets of goopy oil all across the Gulf Coast. Early on, while using balloons to take aerial photos of the spill (http://publiclab.org/wiki/balloon-mapping), BP was dismissing any oil sighting which didn't have "official" lab tests backing it up. But testing was expensive, and slow. 

Back then, I actually remember Googling "how to identify oil" -- as crazy as that sounds -- and seeing that """""""""scientists""""""""" often use spectroscopy to ID samples. What's spectroscopy, we asked? Well, it's a little like a barcode scanner for materials -- a technique to fingerprint the color of a material, split up into a rainbow, or spectrum. Here's how it works:

When light passes through a prism or a diffraction grating, the different wavelengths of light (red, green, blue, etc) will be 'bent' and emerge at different angles, in a very predictable pattern --  The blue light is the most 'bent', the red light the least -- so that if you look at the resulting pattern of light (on a screen, or with a camera), you get a nice 'rainbow':

[![prism2.gif](https://i.publiclab.org/system/images/photos/000/004/767/medium/prism2.gif)](https://i.publiclab.org/system/images/photos/000/004/767/original/prism2.gif)

Fun, eh?  But it gets better!  It turns out every chemical interacts with light in its own unique way:  the molecules that make up any chemical will have their own, favorite wavelengths of light which they like to absorb.  So, for example, if you shine white light through a container of some gas (Hydrogen, say), and then pass the light that emerges on the other side through a prism, you'll notice that certain parts of the rainbow are 'missing' ...

[show graphic of similar to above, but light is now passing through a gas sample before hitting the prism, and we see that certain parts of the rainbow don't make it through]

Because every molecule has its unique set of 'absorption lines', we can use these absorption lines as a sort of 'fingerprint' for that molecule:  we can look at what parts of the rainbow are missing, and deduce what molecule must have been present.  (You can imagine that this becomes more complicated when multiple species of molecules might be present ... but folks have figured that one out.)

[show something like below graphic, but for 'absorption' lines]
[![achilles.elements.gif](https://i.publiclab.org/system/images/photos/000/004/768/medium/achilles.elements.gif)](https://i.publiclab.org/system/images/photos/000/004/768/original/achilles.elements.gif)

Another way of depicting this same 'absorption wavelength' information is to plot the intensity of light that emerges on the other side of the prism as a function of wavelength (intensity on the vertical axis, with greater intensity at the top; wavelength increasing from left to right across the horizontal axis).  When we do that, we see that there are certain 'dips' in the intensity graph, where the absorption lines are:

[show sample spectrum with clear absorption lines]

So, here's the really neat part: """scientists""" have been doing this trick for a wide range of materials, and they've developed 'libraries' of absorption lines for various materials -- from simple molecules, like hydrogen and sodium, to really complex molecules -- like crude oil!  So if we take a sample of a material, and shine light through it, we can compare the spectrum we get ...

[show setup with unknown material generating a spectrum, and comparing the spectrum to three 'known' spectra from a library, with the material 'identified' because of similarity of the spectrum]

... and if we get a match, that's a pretty good indication that we've identified the unknown material.  

Back to the problem with which we began: we found a little bit of an oil-like substance on the beach -- what is it?  If we put the material in a jar, shine light through it, and use the pattern of light that emerges to figure out what it is?  Let's try!

[create image like the one below, but for now omit the 'flourescence' part -- just show different spectra emerging from different samples ... ]

[![tmp_IMG_20140607_140449_2_2-1429490354.jpg](https://i.publiclab.org/system/images/photos/000/004/551/medium/tmp_IMG_20140607_140449_2_2-1429490354.jpg)](https://i.publiclab.org/system/images/photos/000/004/551/original/tmp_IMG_20140607_140449_2_2-1429490354.jpg)


###First: build your own spectrometer!

When we first set out to make a spectrometer, we'd found this great blog post from the [Inter-University Centre for Astronomy and Astrophysics in Pune, India](http://www.iucaa.ernet.in/~scipop/Obsetion/spectro/pizza_box_sp.htm), showing how to make a spectrometer from a pizza box, a digital camera, and a piece of a CD-ROM. That sounded like something we could work with!

A spectrometer is, actually, essentially just a box with a prism in it. A slit at one end allows a shaft of light in, which hits the prism, or in this case, a "diffraction grating" -- formed by the fine track lines on our DVD (a clever hack!). The light is split up by color -- that is, wavelength -- and we put a carefully placed webcam in the box to record the spectrum. A well-placed hole lets us use a smartphone, if we want to make a portable device, or if you want to just look into it with the naked eye.  

For identifying oils, like crude oil, motor oil, or even extra-virgin olive oil, you'll need a UV light to make the oil fluoresce -- different oils glow different colors, so you can use their spectral "signature" almost like a fingerprint. 

[![design.jpg](https://i.publiclab.org/system/images/photos/000/004/683/medium/design.jpg)](https://i.publiclab.org/system/images/photos/000/004/683/original/design.jpg)

Here you can see our basic spectrometer design -- carefully copy it onto a sheet of thick black card paper. You can cut it out and trace it, photocopy it, or just measure it out anew. A downloadable PDF is available here in case you have access to a laser cutter: http://publiclab.org/wiki/foldable-mini-spectrometer

Fold along the dotted lines -- thinly dotted lines are "mountain" folds, dashed lines are "valley" folds. For thicker paper, you can score along the lines for a cleaner fold -- set a ruler along the line and press hard with a ballpoint pen or a closed pair of scissors (could use illustration). 

Fold the flaps over on the outside as shown -- it's easier to tell if the edges are sealed that way. Tape or glue them shut carefully -- the less light that gets into the box, the easier it'll be to get a clear spectrum. 

[![split.jpg](https://i.publiclab.org/system/images/photos/000/004/684/medium/split.jpg)](https://i.publiclab.org/system/images/photos/000/004/684/original/split.jpg)

Now cut the DVD-R into quarters. It should now be relatively easy to separate the 2 layers of plastic -- one with more reflective film, the other usually purplish but transparent. Keep the transparent side, and cut out an approximately one inch square from along the formerly outer edge of the disc.  

[![door.jpg](https://i.publiclab.org/system/images/photos/000/004/685/medium/door.jpg)](https://i.publiclab.org/system/images/photos/000/004/685/original/door.jpg)

Keeping the outer edge of your disc fragment oriented as shown, tape it to the inside of the "door" left on the spectrometer, covering the small square window. Then tape or glue the door shut. 

[![onphone.jpg](https://i.publiclab.org/system/images/photos/000/004/686/medium/onphone.jpg)](https://i.publiclab.org/system/images/photos/000/004/686/original/onphone.jpg)

Now you have to connect it to a camera. You can test it out first by looking through it at an angle while it's pointed at a fluorescent light -- or just tape it to the back of your smartphone or webcam. You should see something like this:

[![cfl.jpg](https://i.publiclab.org/system/images/photos/000/004/687/thumb/cfl.jpg)](https://i.publiclab.org/system/images/photos/000/004/687/original/cfl.jpg)

###Use it!

Your spectrometer is now ready to be calibrated! The colored lines you see are what we call the "hello world" of DIY spectrometery -- your first spectrum: mercury vapor! This is why the inside of fluorescent bulbs is toxic -- the vapor is excited by electric current and emits colored light, which your eye blends together into white light. 

[![sun-full.png](https://i.publiclab.org/system/images/photos/000/004/688/medium/sun-full.png)](https://i.publiclab.org/system/images/photos/000/004/688/original/sun-full.png) [![sun.png](https://i.publiclab.org/system/images/photos/000/004/689/medium/sun.png)](https://i.publiclab.org/system/images/photos/000/004/689/original/sun.png)

If you point your spectrometer at the sky, you won't see such clear lines -- the sun is a "continuous" or full-spectrum light source, while mercury vapor has discrete spectral lines due to the orbits of the electrons in its atoms. However, if you look closely, or if your webcam [has no infrared blocking filter](/wiki/webcam-filter-removal), you can see some *absorption* lines in the solar spectrum, due to gases like C02, H20, or O3 in the atmosphere. These were discovered in the 1800s, and are known as the [Fraunhofer lines](https://en.wikipedia.org/wiki/Fraunhofer_lines). 

###Analysis

Using the online [SpectralWorkbench.org](https://spectralworkbench.org) software, you can scan materials in real time with an Android phone (and the Firefox browser -- Chrome has some bugs with choosing which camera to use) or using a webcam on your desktop (most modern browsers). 

The software allows you to calibrate ...

like an equalizer. 

###Advanced uses: identifying oils

[![tmp_IMG_20140607_140449_2_2-1429490354.jpg](https://i.publiclab.org/system/images/photos/000/004/551/medium/tmp_IMG_20140607_140449_2_2-1429490354.jpg)](https://i.publiclab.org/system/images/photos/000/004/551/original/tmp_IMG_20140607_140449_2_2-1429490354.jpg)


What's this all good for? Well, as we mentioned earlier, Public Lab originally begin designing this device to identify pollutants like crude oil. You can try this technique yourself with extra-virgin olive oil, which, like crude or motor oil, fluoresces when illuminated with a blue laser. We use the same laser you'll find in a Blu-Ray player -- you can buy them online, often labelled as violet or 405 nanometer lasers. A strong ultraviolet light can also work. 

[![oils](https://i.publiclab.org/sites/default/files/imagecache/default/IMG_0907.JPG)](https://i.publiclab.org/sites/default/files/IMG_0907.JPG)

We'll walk you through how to attempt an identification of motor oil from the edge of a street drain. Runoff from cars can leave residues in the gutter or just around the lip of a street drain. Before analyzing it, though, you'll need to prepare your sample a bit. If you're using olive oil, you can skip this step, although you may want to dilute your oil in mineral oil to make it more transparent. 

####You'll need:

* mineral oil or baby oil from a pharmacy
* cotton swabs
* latex or rubber gloves
* [blue/violet "405 nanometer" laser](http://www.ebay.com/itm/like/350812684726?lpid=82)

[![IMG_0878.JPG](https://i.publiclab.org/system/images/photos/000/003/228/medium/IMG_0878.JPG)](https://i.publiclab.org/system/images/photos/000/003/228/original/IMG_0878.JPG)

[![IMG_0887.JPG](https://i.publiclab.org/system/images/photos/000/003/232/medium/IMG_0887.JPG)](https://i.publiclab.org/system/images/photos/000/003/232/original/IMG_0887.JPG)

Put on your gloves, take a cotton swab, and dip it in mineral oil. With it still wet, rub it on where you suspect motor oil has accumulated. Dip it in a small bottle filled with mineral oil. You'll need to repeat this step until the mineral oil takes on a slight yellow color -- which may not happen if there is no oil. 

[![IMG_0889.JPG](https://i.publiclab.org/system/images/photos/000/003/234/medium/IMG_0889.JPG)](https://i.publiclab.org/system/images/photos/000/003/234/original/IMG_0889.JPG)

Now that you have a sample prepared, you can move indoors, as we'll need to work a bit in the dark. Carefully shine your blue laser or UV light through the bottle of sample. Don't look at the light too much, as it can hurt your eyes! It really helps to have a square glass bottle -- an octagonal jam jar or any small jar with flat sides works well, and you can find some on the Public Lab store at http://store.publiclab.org. 

If the sample glows brightly, we suspect that it contains oil, although there are substances (like chlorophyll or some dyes) which may also fluoresce. What you really need to do is compare your sample to some similarly-prepared samples with and without your suspected contaminant, to see which it's closest to.

This process is still being refined and proven out -- Public Lab is a collaborative research community open to anyone, and we've worked for years to develop these tools, but they're still evolving. See how this works, and sign up at PublicLab.org to offer suggestions, ideas, and critiques of the process to improve it. Our community is built on the contributions of members, whose improvements are incorporated into our kits and shared freely under open hardware licenses.  

****

###Outline

A. Super brief intro to Public Lab: 

* Homebrew Computer Club + Greenpeace
* BP oil spill -- local pollution everywhere!

B. Spectroscopy: Reading rainbows

* Early days: Googling "how do you identify oil?"
* "shazam for materials" -- "barcode scanner" -- tricorder
* Crash course! Light => prism => equalizer (Popsci graphic)

C. Now, make one!

[C would make a nice stepwise section with illustrations or photos]

* Basically a box
* A new way to use a DVD
* Cut it out, copy it, or download it
* Detector: webcam or phone, or your eye!

D. Use it! 

* "Hello World" -- mercury in a fluorescent light; calibrate it!
* Point it at the sky -- re-discover the Frauenhofer lines: CO2, H20

E. Advanced uses:

* Burn some salt, detect sodium!
* Blu-ray laser or UV spectroscopy for IDing oils