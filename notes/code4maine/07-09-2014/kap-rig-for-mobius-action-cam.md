---
title: KAP Rig for Mobius Action Cam
tagnames: kite-mapping, grassrootsmapping, citizen-science, mobius, mobius-action-cam, kap-rigs, response:10162, mini-kite-kit, mini-balloon-kit, activity:photo-rig, activity:mobius, activity:mini-balloon-kit, activity:mini-kite-kit, activity:lightweight-photo-rig
author: ajawitz
path: /notes/code4maine/07-09-2014/kap-rig-for-mobius-action-cam.md
nid: 10670
uid: 294634

---

![](https://publiclab.org/public/system/images/photos/000/005/192/original/Mobius_Foam.png)

# KAP Rig for Mobius Action Cam

by [ajawitz](../profile/ajawitz) July 09, 2014 23:53

July 09, 2014 23:53 | Tags: [kite-mapping](../tag/kite-mapping), [grassrootsmapping](../tag/grassrootsmapping), [citizen-science](../tag/citizen-science), [mobius](../tag/mobius), [mobius-action-cam](../tag/mobius-action-cam), [kap-rigs](../tag/kap-rigs), [response:10162](../tag/response:10162), [mini-kite-kit](../tag/mini-kite-kit), [mini-balloon-kit](../tag/mini-balloon-kit), [activity:photo-rig](../tag/activity:photo-rig), [activity:mobius](../tag/activity:mobius), [activity:mini-balloon-kit](../tag/activity:mini-balloon-kit), [activity:mini-kite-kit](../tag/activity:mini-kite-kit), [activity:lightweight-photo-rig](../tag/activity:lightweight-photo-rig)

----

###What I want to do
  I want to design an aerial photography rig specifically for the [Mobius Action Cam](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=3&cad=rja&uact=8&ved=0CGkQFjAC&url=http%3A%2F%2Fwww.rcgroups.com%2Fforums%2Fshowthread.php%3Ft%3D1904559&ei=r9S9U_iyI8fZoATZuoDoCQ&usg=AFQjCNG7nwSfKrqRVqneySdKrsj338-8yg&sig2=6k91YVmioNckV9CcKAkMeg&bvm=bv.70138588,d.cGU) .  The camera's slim design requires a vertical mounting position while most KAP rigs appear to be designed for horizontal mounted cameras like Powershots.  I would like to examine popular grassroots mapping techniques such as the [PET Bottle Rig](http://publiclab.org/wiki/pet-bottle-rubber-band-rig), [Floating Camera Rig](http://publiclab.org/notes/eustatic/03-12-2014/floating-camera-rig) and [Picavet suspension](http://www.arch.ced.berkeley.edu/kap/equip/picavet.html) in order to adapt to the Mobius Cam's unique capabilities.

###Why I'm interested
####Mobius Actioncam= The Real Deal!
With so many articles and online debates over whether or not the Mobius Actioncam is a "GoPro killer", the results of this project proved to me the Mobius lives up to all the hype and possibly more!  
#####Affordability- 
I was initially attracted to the camera's affordability, which at around $60-$80 is still less than half of the cheapest GoPro model.  Before the Mobius, I always had to sacrifice picture quality for versatility in that I never wanted to risk my higher quality cameras in aerial applications because the cost of replacing them in the event of a crash would be too high.
#####Size
The Mobius is small enough to fit on a medium-sized quadrotor and I actually found the need to ADD weight to its Kite Rig!
#####Versatility
This may be the most important factor that ranks the MAC above the rest.  The simplicity of the MAC in both hardware and software makes it the perfect hacker-friendly tool.  The only real setup software is a "config.txt" file which can be edited manually or by using various user-contributed GUI tools. The fact that no Linux/Python GUI has been created yet signals to me that the larger hacker community (beyond RC or photo enthusiasts) has yet to discover it.  I expect the range of options to increase exponentially as more hackers discover it.
The same can be said for versatility of the hardware, where the ability to use different lens modules, add extension cables, and connect to FPV transmitters has made it the camera of choice for RC hobbyists.  Again it only seems a matter of time before the Arduino/Raspberry Pi community gets their hands on it...


###Initial  attempts 
The attempt has been documented in full at- http://publiclab.org/notes/code4maine/06-25-2014/kap-test-for-invasives-monitoring-project

My design specifications have two basic requirements.  It must be-

  A. Able to accomodate the Mobius Action Cam
  B. Provide some protection from water damage in case of crash ocean landing.

Initially, I was hoping to 3D Print a custom mount design but my Printrbot Simple decided it wanted to be completely rebuilt from the ground up... A task I'm not exactly jumping in anticipation for...
So my next idea was to use a transparent plastic dry-bag, in combination with the floating KAP rig design by PLOTS contributor eustatic- http://publiclab.org/notes/eustatic/03-12-2014/floating-camera-rig. That way I could just use the dry-bag to simultaneously waterproof and suspend the camera inside the foam shell-


[![Mobius_Rig_v1.jpg](https://i.publiclab.org/system/images/photos/000/005/188/medium/Mobius_Rig_v1.jpg)](https://i.publiclab.org/system/images/photos/000/005/188/original/Mobius_Rig_v1.jpg)


The immediate problem was aligning the lens with the plastic covering tightly enough so as to not interfere with the pictures... Again, the vertical shape of the Mobius proved challenging as there was no way to make it fit flush within a flat dry-bag. I tried using multiple tube shapes to form a kind of scaffold that the plastic could wrap around smoothly but nothing worked... Ultimately, I settled on the tapered-flat shape of a medicine bottle from Target.


[![Mobius_Rig_v1.jpg](https://i.publiclab.org/system/images/photos/000/005/189/medium/Mobius_Rig_v1.jpg)](https://i.publiclab.org/system/images/photos/000/005/189/original/Mobius_Rig_v1.jpg)


Its possible this could've done the trick with enough tweaking but before I got too far I discovered a purpose-built weather-cover for the wide-angle Mobius cam is actually for sale by the official US distributor for Mobius. 
  As I have the Wide Angle Lens version, it was previously difficult to find a weather cover for this model since there was no way to seal the angled lens.  Apparently, designers discovered that you could protect the essential electronics without having to actually cover up the lens itself.  The result is a pretty compact little silicon covering-

[![WeatherCover.jpg](https://i.publiclab.org/system/images/photos/000/005/190/medium/WeatherCover.jpg)](https://i.publiclab.org/system/images/photos/000/005/190/original/WeatherCover.jpg)

The cover doesn't protect against full immersion however, so it might still be necessary to combine the covering with a flotation device like the foam rig I was working with before.  This still leaves me with the problem of gravity however, and none of the existing rubber band harnesses appear to be suitable.  
   The weather cover allows room to attach the mini-tripod mount if necessary and I've been toying with the idea of mounting the tripod mount onto a basic gimbal-bracket configuration.  If it could be set up to allow forward and backward movement without any lateral moves, there might be enough weight to keep it facing downwards through the force of gravity alone.  Such a design would require a simple bracket shape and could include additional electronic components (GPS, Altimeter,etc?) to keep the camera weight balanced.  


[![Mobius_Foam.png](https://i.publiclab.org/system/images/photos/000/005/191/medium/Mobius_Foam.png)](https://i.publiclab.org/system/images/photos/000/005/191/original/Mobius_Foam.png)


  Much depends on whether the bracket is attached on the inside or outside of the foam cover, and much experimentation will have to go into weight balancing in case of crash landing.  Ideally, the weight would shift towards the top of the foam cover, so as to keep the walls upright.  This might require some kind of rubber grommet or plug to close the hole where the line is attached.

You can find the Sketchup Model below or on the 3D Warehouse at https://3dwarehouse.sketchup.com/model.html?id=ubdc93476-2302-465a-a305-6fbca9a5d9cf 
 If anyone would like to improve on it, they are strongly encouraged to do so or  I can convert to any other 3D format if that would be helpful- 

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=ubdc93476-2302-465a-a305-6fbca9a5d9cf&width=400&height=300&etp=im" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="400" height="300" allowfullscreen></iframe>



EDIT: I might give [this 3D Printed Gimbal](http://www.thingiverse.com/thing:216558) a try-

[![PrintedGimbal.png](https://i.publiclab.org/system/images/photos/000/005/200/medium/PrintedGimbal.png)](https://i.publiclab.org/system/images/photos/000/005/200/original/PrintedGimbal.png)



 Another thing I like about the size of the Mobius is I can print out a lot more components for it on the relatively small build space of the Printrbot Simple.  Unfortunately, in my case it also means rebuilding my Printrbot to bring it up to date with the 2014 upgrades...  Printrbot giveth, Printrbot taketh away....

 ###Results Update (7/24)

   Thanks in large part to recommendations by Warren in the comments thread below, I was able to make the final modifications for my new design to get flying again!  
   First I needed to ensure the camera would be fully water protected since the silicon sleeve is only intended to protect from rain and leaves a large opening in the bottom through which water could easily enter if submerged.  Still, it does solve the trickiest issue, which is how to protect the sensitive electronics without covering up the lens.  The remaining opening could then be sealed with plastic wrap-

[![Mobiuswrap.jpg](https://i.publiclab.org/system/images/photos/000/005/484/medium/Mobiuswrap.jpg)](https://i.publiclab.org/system/images/photos/000/005/484/original/Mobiuswrap.jpg)

The following annotated pictures should give a good idea of how the rig came together-

[![MobiusAnnotated1.png](https://i.publiclab.org/system/images/photos/000/005/490/medium/MobiusAnnotated1.png)](https://i.publiclab.org/system/images/photos/000/005/490/original/MobiusAnnotated1.png)

[![MobiusAnnotate2.png](https://i.publiclab.org/system/images/photos/000/005/491/medium/MobiusAnnotate2.png)](https://i.publiclab.org/system/images/photos/000/005/491/original/MobiusAnnotate2.png)


[![MobiusAnnotated3.png](https://i.publiclab.org/system/images/photos/000/005/492/medium/MobiusAnnotated3.png)](https://i.publiclab.org/system/images/photos/000/005/492/original/MobiusAnnotated3.png)





