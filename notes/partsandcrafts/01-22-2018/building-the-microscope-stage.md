---
nid: 15585
title: Building a Basic Microscope Stage
path: public/static/notes/partsandcrafts/01-22-2018/building-the-microscope-stage.md
uid: 66014
tagnames: raspberry-pi,with:kgradow1,with:warren,microscope,pi-camera,microscopes,activity:microscopes,with:wmacfarl,activity:pi-camera,with:bmela,activity:basic-microscope,basic-microscope,series:basic-microscope
---

# Building a Basic Microscope Stage

# Why use the Hackteria stage?

The microscope stage holds the optics, the sensor, and the sample together in a fixed geometric relationship. The optics have to be lined up with the sensor in the camera and with the sample on the sample-holder. The sample holder needs to be held in place a slight distance away from the end of the objective lens and must be movable up and down. By moving the sample tiny distances closer to and further away from the lens we can get bring image into focus.

Hackteria [has developed](https://hackteria.org/wiki/index.php/DIY_microscopy) a nice simple stage that you can laser cut from 1/4 inch plywood or acrylic. If you'd like help finding materials or getting one, leave a comment below or [ask a question on this page](/basic-microscope).

---------

![](https://lh4.googleusercontent.com/Xc1OoWKcM3lqsvOnl0yf6gOmvB7NXMU-M6BxumAr9_MmBra-aj9kO_GYT36-8IQJUUMFEdhKD-u9Z7BPH9o33XZxvfg4UB8c202UDYF2G-I-j_K5PTdy4IOu4V0rpPQBHYTidLDX)

We use a modified version of the Hackteria laser cut microscope stage -- [https://hackteria.org/wiki/Laser-cut\_microscopy\_stages](https://hackteria.org/wiki/Laser-cut_microscopy_stages). We used this design as our base because we found that it was pretty easy for people to successfully build and because the OpenSCAD template files they make available were easy to modify.

# 

# How to modify the template

Starting with the Hackteria openSCAD file, available here, [https://www.thingiverse.com/thing:1057872](https://www.thingiverse.com/thing:1057872), we made a few changes to fit our design:

**1\. Raise sample holder plate**

The Hackteria stage is designed for using a particular set of webcam optics which are significantly shorter than the objective and tube that we are using, so we've increased the height of the backplate so you can put the sample holder higher.

**2\. Increase size of sample hole**

The square hole in the sample-holder plate that allows light to pass through the sample into the lens was just barely large enough to fit the optics we are using. We made the hole bigger to make the build a bit more forgiving.

**3\. Add holes for camera mounting bolts**

We wanted to be able to anchor the Raspberry Pi camera to the baseplate so we added two holes in the plate for mounting the camera to the stage with M3 bolts.

**4\. Increased size of focus bolt**

The Hackteria stage uses a bolt which moves the stage up and down as the focus mechanism. We found that it was easier to make fine focus adjustments with a larger bolt so we increased the size of the hole to fit the carriage bolts we had lying around.

---------

### Design files

The resulting openSCAD file is here:

[http://partsandcrafts.org/pi\_microscope/Hackteria\_Microscope\_Modified\_for\_picam.scad](http://partsandcrafts.org/pi_microscope/Hackteria_Microscope_Modified_for_picam.scad)

We used openSCAD to export the file as an .svg and then we had to scale that file up in inkscape to get to the appropriate dimensions. The unscaled .svg file is here:

[http://partsandcrafts.org/pi\_microscope/hacktera\_modified\_exported.svg](http://partsandcrafts.org/pi_microscope/hacktera_modified_exported.svg)

We scaled the initial output of the .svg export up to have an x-dimension of 7 inches and then sent this file to our laser cutter. You may need to experiment with various dimensions and scaling factors for your equipment and materials. Our scaled up and ready-to-cut .svg file is here:

[http://partsandcrafts.org/pi\_microscope/hackteria\_modified\_for\_cut.pdf](http://partsandcrafts.org/pi_microscope/hackteria_modified_for_cut.pdf)

Since the width of many of the cuts is directly related to the thickness of the materials you are using, you may need to play with various aspects of these settings to get your project to snap together correctly.

We used ¼" plywood (which can be anywhere between 3/16" and 5/16" thick.) Since the actual dimensions of the rest of the project are pretty forgiving you can scale the stage up or down to get a snug fit with your chosen material pretty freely without too much trouble.

If you are using a very different thickness of material you should adjust the "Base Material" and "Plate Material" parameters of the OpenSCAD file and export to svg from there.

---------

# Build the microscope stage

![](https://lh6.googleusercontent.com/HpI5tu6JuQGQBVV3mn_sz7_pLJpNd83_Xxx0Q2Iivrhz3ZW3BRJIh7TxuWrwaG179crAlzObbDWTh_IIdBzMbbyXxr30d_2nVYTx5NLujZ3Y_zfp1NaZu8jZfCY0aEkefxKtgxwk)

Building the stand is pretty straightforward. You will press-fit the laser-cut pieces together and secure them with nuts and bolts. If you are following our guide you will already have the camera and tube mounted to the baseplate and it will look like this:

**NOTE:** You may find it easier to build the stage with the objective unscrewed and the Raspberry Pi Zero W unplugged. If that's the case, back it up to Step 4 and start building the stage!

![](https://lh3.googleusercontent.com/jriZTO8XDTHJHoqwh4EL9xnr1Y1m22q0t-hZx8PE_F2gW25yUR8SdIlgA56zqbkl09J4CZIoeAhib26EyUlM7k46uLyds0M6ubzeiOVW-qfz6E-yoOYoecczVc2ovx1svOZmJfMr)

### 

# 1\. Attach backplate-holder to baseplate

The backplate-holder is about 1" tall and fits snugly in the rectangular holes in the baseplate. It has two holes through it for bolts to attach it to the sliding back-plate and is held in place with a nut and bolt vertically through a hole in the bottom of the baseplate.

![](https://lh3.googleusercontent.com/BBJ1cGn-HzoJig1A8SWtguAD4_CQRRCdrcQ1ZAq99QLSWffp8aANEncvNJuvOSCqzJ4nGAGwMgi_jM2Yho6cD9WGbePL-W_PnvKiTnsrL3eEWgpIt61nVpUPpvXu8rmGNyND50wG)

### 

# 2\. Attach the sliding backplate to the backplate-holder

### 

Bolt the backplate to the backplate-holder using bolts and washers. You should be able to slide the backplate up and down along the bolts and tighten them to hold it in place to adjust the height of the sample-holder. Make sure to use washers between the bolt-head and the backplate.

![](https://lh5.googleusercontent.com/z7CNWvFwe7f9lk9h4j0v5aCBaHbg8YECwsk4GvTx-r2G2-iVImv7lLziIQURn6iJ7rrLuNt9ue4Hc_VyCbeEUN6EJ5ZmZQNrXk0FMSaftdt_OqaTZFklFLdBVblJwWa7Qv-6vJzC)

![](https://lh5.googleusercontent.com/JeWPtMbjWP83LSOCh_a8H-su5hNHMGhX2jQCwgT3vrnZ8kLoJSAPl8EEvjERb8lNBmqG7ypGzGGLihpfxTsORZkoSxp5_1PcwTkm2r06x9GRmZfBA79jx_SQeHMDPOwhNTuh856C)

### 

# 3\. Attach the sample-holder to the backplate

The sample-holder wants to sit ever-so-slightly above the tip of the optics that you are using. You should be able to get approximately any desired height by sliding the backplate up and down along its rails and picking different notches for the sample-holder.

Once you've determined the correct notch height to use you can secure the sample holder with a nut and bolt. This is probably also a good time to reattach the microscope objective!

![](https://lh4.googleusercontent.com/B61_PGxTA85n7oQIARgXpVUf_V895K0Su8wzJMWq1OF4BGKpLMrj-Q_JY9h_KgI1FHk9zm0AdXUGC6QNEXCSuCmz-P0GNJL9kaxilvjXDwzg06IjwbJnLxKaLLQkm6XgPybYGvLs)

### 

# 4\. Add feet

Our microscope stage now has screws sticking out of the bottom so it doesn't sit flat on the table. We will add stick-on felt furniture pads to the bottom corners of the stage. These will allow the microscope to sit flat on a table and because they are soft they will also dampen vibrations between the table and the microscope.

Vibrations can be a big problem when you're trying to adjust sample placement or focus because the movement of the vibration is also magnified by our microscope so very small disturbances on the table make for very large disturbances in the magnified image.

![](https://lh6.googleusercontent.com/cV9_a3sWHvNTPG-d_CCUl-zEwlWtEX5kHvPiGwhbgmRjvYunbqCeFvngfqOtE3svK7431EZv2_xfPc-Izh38QvZh4_DdfXD7JyAT1iyWBaYb7J2aoAlGaSvGZqnf1OF3ybfQARlZ)

### 

# 5\. Add focus knob and tensioning band

We will use a carriage bolt as a focusing knob. When the bolt turns the threads will cause the table to move up or down slightly based on whether we are tightening or loosening the bolt.

We will put a rubber band around the baseplate and the sample-holder as well. This will keep the sample-holder in tension pulled towards the baseplate which will make the focus knob more predictable and will minimize the effects of random movements and vibrations.

If your camera is not currently plugged into your Raspberry Pi you should plug it in now because it's easier to do so before we place the bolt and rubber band in the way.

![](https://lh3.googleusercontent.com/RtZQFYIflgJXjq7M9cHTpdE17C5cWtVNQI3AJej07vqrCzUpH3aM0gPoMnFgBfzaK7V_4Y3Mh1yxCFosxL7jPuVjvUSIXPILrJV5pst6j4UmuYoeqLTBaeRWHnvEPC8LzA1e2oJL)

![](https://lh4.googleusercontent.com/ec4Hwq4m5wvpdptOxjWXloZAaFrmhBUmtxJ0Ftk_FRT-eFpp9eVAn7hpLSWKn4URPjOlgyMySY7vHK-jscjq4NiiW4CsuW_zWdf4fE2w-YtNBXsZd9ACAN2cqIqle5m70aWvOo7J)

### 

# 6\. Add magnet to baseplate.

Newer prototypes of this stage have a hole for a neodymium magnet in the baseplate.  A 3/8" neodymium disk magnet should press-fit into this hole directly below the carriage bolt.  This magnet will hold the carriage bolt in place so that it is always connecting the stage and the baseplate while still allowing it to turn freely to focus.

The rubber-band generally applies enough for for the system to work without the magnet but we believe the magnet just makes it all a little bit easier, so we're testing it out.

# Done!

And you're done! At this point you should be able to turn the bolt and see the stage move up and down around the lens.