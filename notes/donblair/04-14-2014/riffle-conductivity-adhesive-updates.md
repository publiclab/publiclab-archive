---
title: RIFFLE: Conductivity + Adhesive updates
tagnames: water, quality
author: donblair
path: /notes/donblair/04-14-2014/riffle-conductivity-adhesive-updates.md
nid: 10308
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/003/652/original/riffle-conductivity.png)

# RIFFLE: Conductivity + Adhesive updates

by [donblair](../profile/donblair) April 14, 2014 17:52

April 14, 2014 17:52 | Tags: [water](../tag/water), [quality](../tag/quality)

----

Some quick updates on some [RIFFLE](http://openwaterproject.io) prototyping we've been doing ...

After some great conversations with the CREATE lab at CMU about their 
- [CATTFish](http://www.engadget.com/2012/10/25/airbot-and-waterbot-help-localize-pollution-data-collection-vid/) water quality sensor prototype, we decided to simply our conductivity measurement electronics, basing our design on theirs.  A description follows.

First, we were testing out our process for 'potting' the RIFFLE sensor electronics -- i.e., gooping it all up with adhesive to protect it from the surrounding water.  We're using a special, optically-clear adhesive, and the hope is that this particular material will not only protect the electronics from water, it'll allow us to shine LEDs through the adhesive into the water (thus the 'special, optically clear' part) and measure the amount of light that is reflected back -- a way of assessing optical water properties like turbidity (potentially related to the amount of 'undesirable stuff' in the water).  

Some initial 'potting' tests are depicted here:

[![threeLittleRiffles.png](https://i.publiclab.org/system/images/photos/000/003/650/medium/threeLittleRiffles.png)](https://i.publiclab.org/system/images/photos/000/003/650/original/threeLittleRiffles.png)

We're still nailing down the best way of doing this -- some ways of preparing the adhesive seem to leave little bubbles that obscure the optics -- but a few of our trials have produced really nice results.  You can't see it so well in the dim picture, but the adhesive in the one on the right has formed a nicely-clear adhesive window.  More updates on optimizing that process, anon.

One thing we *did* nail down at this point was:  our two-wire conductivity design is a royal pain to assemble.  We got to thinking about alternatives, and came up with the idea of using stainless steel (stainless in order to avoid corrosion) screws, instead of parallel wires, for our conductivity measurement.

So Ben quickly removed the 'grooves' that had held the nichrome wires, and added some holes to accommodate some screws.  The two holes closest to the 'camera' in the 3D mockup below are the screw holes -- the idea being that the top screw 'pads' are exposed to water, and the bottom shaft of the screws are inside the adhesive, where they are connected electrically to the remote board:

[![piglet.png](https://i.publiclab.org/system/images/photos/000/003/649/medium/piglet.png)](https://i.publiclab.org/system/images/photos/000/003/649/original/piglet.png)

We're calling this the 'Deranged Piglet Edition'.  If you'd like to play with the design using openscad, here's the design file: <a href="https://i.publiclab.org/system/images/photos/000/003/655/original/water-quality.scad"><i class="icon icon-file"></i> water-quality.scad</a>

Okay, so now if you imagine looking at that cap from above, with the screws on the left, that'll allow for a discussion of the new conductivity circuit.  Note that we have a Public Lab logo on the very top of the 3D Riffle cap, so that's why you're seeing boots in the diagram:

[![riffle-conductivity.png](https://i.publiclab.org/system/images/photos/000/003/651/medium/riffle-conductivity.png)](https://i.publiclab.org/system/images/photos/000/003/651/original/riffle-conductivity.png)

(You should also imagine that the electronics depicted is all contained inside the yellow cap. Maybe this was a silly way to draw it.)  Here's the idea ...

- First focus on the part of the circuit that begins at the "IN" (at the top), connects to a resistor, R, and then to a screw (The white circle with a has across it).  Up until that screw, all of the electronics is inside the waterproof cap, and we connect to the bottom part of the screw inside the cap; the top part of the screw, however, is sitting the water.
- The "IN" pin is connected to the RIFFLE electronics hardware, and we can control the voltage on that pin: we can program it to be at e.g. 0 Volts, or 3.3 Volts, etc.
- The other screw (the lower one in the diagram) also has its head in the water, and sits close to that the first screw.
- Inside the waterproof cap, we connect that lower screw to some other electronics.  For now, focus on the capacitor, C.

Let's say we start out with "IN" at 0 Volts, and the capacitor "uncharged". What happens if we suddenly program "IN" to be at 3.3 Volts?

- Applying 3.3 Volts on "IN" means that we'll charge the capacitor, C:  charge flows from "IN", through R, and to one of the screws outside the cap, sitting in the water.  Then it jumps through the water, across to the other screw that's sitting in the water -- and the down the wire to the capacitor C, charging C up.

The rate at which the capacitor charges, though, depends on the rate at which current can flow through this circuit.  And that rate is determined by the resistance, which is a combination of the resistance we put in the circuit (R) and the **electrical resistance of the water between the screws**. Whee!

So, if we can measure the time it takes for the capacitor C to charge up, we're essentially measuring how easy it is to pass current through the water.  And this is (with some additional, unexciting math) what we're looking for when we're trying to measure the 'conductivity' of the water.  This electrical property tells us something about how much 'stuff' is dissolved in the water -- bits of various materials, salt, etc -- and this is one way of getting a basic picture of the 'quality' of the water.  

And so the rest of the circuit is just some added electronics for measuring the rate of charging the Capacitor, C.  We pick a reference voltage, Vref, and we compare the voltage across the capacitor (Vout) to Vref (using a 'comparator' -- the triangle device in the circuit).  When Vref >= Vout (which will happen at some point as the capacitor is charging), we get a signal at "OUT" telling us that we've charged the capacitor C to a certain point.  The time it takes for Vout to equal Vref is then our basic measurement of the 'charging time' of the Capacitor, and thus (through some other math) the 'conductivity' of the water.

(Note:  in reality, we need to 'charge' and 'discharge' the capacitor repeatedly, measuring the charging time over and over again, in order to have current flow both ways between the screws, and not 'polarize' the system -- which would affect our readings, and would tend to corrode the screws.  More on this in a later note.)

Okay, so with this approach in mind, let's test it out!  To avoid having to print out the entire 3D RIFFLE cap each time, we designed a smaller version of the cap, just big enough to hold the two screws:

[![conductivityJig.png](https://i.publiclab.org/system/images/photos/000/003/653/medium/conductivityJig.png)](https://i.publiclab.org/system/images/photos/000/003/653/original/conductivityJig.png)

(And here's the design file to play with: 
<a href="https://i.publiclab.org/system/images/photos/000/003/654/original/conductivity-jig.scad"><i class="icon icon-file"></i> conductivity-jig.scad</a>)

Ben printed out his design, attached the screws to some wire probes, and here's what it looked like:

[![IMG_20140414_111540.jpg](https://i.publiclab.org/system/images/photos/000/003/656/medium/IMG_20140414_111540.jpg)](https://i.publiclab.org/system/images/photos/000/003/656/original/IMG_20140414_111540.jpg)

[![IMG_20140414_111529.jpg](https://i.publiclab.org/system/images/photos/000/003/657/medium/IMG_20140414_111529.jpg)](https://i.publiclab.org/system/images/photos/000/003/657/original/IMG_20140414_111529.jpg)

Then he tested it out!

And ... huh?  We got some really weird results, which we don't yet understand:

[![figure_1.png](https://i.publiclab.org/system/images/photos/000/003/647/medium/figure_1.png)](https://i.publiclab.org/system/images/photos/000/003/647/original/figure_1.png)

More on this soon, but suffice to say that the lower part of that graph is what we'd been interpreting as something like the 'conductivity vs time', and this data is sampled once per minute, starting last night at around 9 pm, and ending this morning around 10 AM. Rather than staying at a steady value, it was always drifting upwards ... until it seemed to plateau after being allowed to sit overnight.  Weird.  We've been thinking: maybe it's an effect of temperature? Maybe it's something to do with the material of the screws (we were just using some non-stainless screws, which had been sitting around ...)

So today, as an experiment, Ben decided to use some stainless steel wire he had on hand, and make an alternative rig:

[![IMG_20140414_111553.jpg](https://i.publiclab.org/system/images/photos/000/003/658/medium/IMG_20140414_111553.jpg)](https://i.publiclab.org/system/images/photos/000/003/658/original/IMG_20140414_111553.jpg)

[![IMG_20140414_111320.jpg](https://i.publiclab.org/system/images/photos/000/003/659/medium/IMG_20140414_111320.jpg)](https://i.publiclab.org/system/images/photos/000/003/659/original/IMG_20140414_111320.jpg)

He tested it out quickly this morning, and it yielded a much nicer, stable signal (it may look noisy, until you realize that the noise is at the same level as the 'noise' in the previous plot -- we've zoomed in considerably ... i.e., this would appear like a flat line on that earlier plot):

[![T316-steel-wire.png](https://i.publiclab.org/system/images/photos/000/003/648/medium/T316-steel-wire.png)](https://i.publiclab.org/system/images/photos/000/003/648/original/T316-steel-wire.png)

Is this because we switched back to a 'two wire' geometry?  Is this because the screws we used had some weird stuff / residue on them?  We've got two stainless steel screws coming in the mail on Wednesday ... more tests then!

## UPDATE ##

Check out our new results in [this research note](http://publiclab.org/notes/donblair/04-16-2014/riffle-confronting-confusing-corrosion-condundrums)!
