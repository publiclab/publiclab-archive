---
title: sandbox-streamline-coqui
tagnames: 
author: mimiss
path: /wiki/sandbox-streamline-coqui.md
nid: 20360
uid: 579821

---

# sandbox-streamline-coqui

by [mimiss](../profile/mimiss)

July 30, 2019 18:07 | Tags: 

This is a guide to building the Coqui, version 2 - a compact and slightly refined version of the [Coqui water conductivity sensor from this post](https://publiclab.org/notes/ashkaya/09-17-2016/build-a-coqui-a-simple-water-conductivity-sensor). The Coqui is named after a small frog, because instead of producing numerical output, it makes a noise.

It's pretty easy to build, and in this tutorial, we'll walk you through building it with an extra small (cute) breadboard. The pieces are quite small, but you should be able to assemble it in 20 minutes or less.

You'll need the parts in one Coqui kit, [available in the Public Lab store](https://store.publiclab.org/products/coqui), or you can look below to find the parts yourself. An older kit parts list can be [found here](https://publiclab.org/notes/ashkaya/09-17-2016/build-a-coqui-a-simple-water-conductivity-sensor).

[![IMG_20190118_205609_421.jpg](/i/34202)](/i/34202?s=o)(size=medium)

##Parts List 
1. Breadboard
2. Piezo
3. Ceramic Capacitor
4. Single Timer
5. Resistor
6. Photocell
7. Green Terminal Block
8. Assorted Jumper Wires
9. 8-Male to Male Jumper Wires
10. Batteries & Holder

##Fritzing diagram 
Here's a standard Fritzing diagram of the circuit by @zengirl2 which makes a good handout. If you're familiar with Fritzing, it can help you go through step by step. If Fritzing isn't for you, check out the step-by-step photos below.

[![Coqui3.19_bb.png](/i/34204)](/i/34204?s=o)


##Step 1 

Lay out all the parts of the kit. The kit sold in the Public Lab Store comes with extra parts, especially extra wires. 

[![OI000058.jpg](/i/34206)](/i/34206?s=o)

##Step 2

Place the black 8-legged piece so it straddles the center "trough". It has a "right way up" too - see the next image.

This piece is the timer, called a "555 timer". Once we finish, it will generate fast pulses of electricity which will sound like a hum.

[![OI000059-1.jpg](/i/34207)](/i/34207?s=o)

Here see the little circle indicating the right way up:

[![OI000059-1.jpg](/i/34209)](/i/34209?s=o)

##Step 3 

Place one wire across the timer diagonally, from the 2nd leg down on the left, to the 3rd down on the right, as shown. Use a short wire, but if it won't stay in, try one a little longer.

The legs should go securely into the holes shown; you may need to use your fingernail to push them in. Wiggle it a bit if it doesn't go in at first.

[![OI000060.jpg](/i/34210)](/i/34210?s=o)

## Step 4 

Now add a second wire across diagonally the other way, from the top right-side to the bottom left side. It'll be a bit longer than the last wire.

[![OI000061.jpg](/i/34211)](/i/34211?s=o)

##Step 5 

Now place the small tube-shaped component (a resistor) at the top row, bridging the trough. (sometimes it'll be blue, but you can tell it from the colored stripes). Once connected, this will help slow the pulses from the timer so they aren't too high frequency. The direction you plug it in doesn't matter.

This component (and some of the others) may go in easier, or stay in easier, if you trim the legs with a pair of wire clippers. A big pair of scissors can work too. 

[![OI000062.jpg](/i/34212)](/i/34212?s=o)

##Step 6 

Now we connect the right side of the resistor to the 3rd leg down the left side of the timer as shown in the next image. You can just plug it in, but it helps a bit to make the "J" or backwards "G" shape shown here, to keep things tidy.

[![OI000063.jpg](/i/34213)](/i/34213?s=o)

##Step 7 

Now add a straight wire from the second top left row (one below the resistor, so not connected to it!) down to the 2nd left-side leg of the timer, as shown in the next image.

[![OI000064.jpg](/i/34215)](/i/34215?s=o)

##Step 8 

Now we add the small flat yellow component, called a capacitor. It stores a little bit of electricity, which builds up until it the timer emits a pulse. Connect it from the 2nd top left row (right next to the last wire) down to the top left leg of the timer, as shown in the next image. It doesn't matter which direction for this type of capacitor.

I found that it was helpful to make it into a "wide legs stance" as shown in the last image.

[![OI000065.jpg](/i/34216)](/i/34216?s=o)

##Step 9 

Now add the big round black button-shaped component, the buzzer. Called a piezo buzzer, it is the "speaker" in this circuit. Connect it to the top left leg of the timer and the leg that's 3rd down from the top left, as shown in the next image. The direction you plug it in doesn't matter.

[![OI000066.jpg](/i/34217)](/i/34217?s=o)

##Step 10 
Now we need to add the probe wires, which you'll dip into water to test it. Two longer ones, connected together, work best, but you can also tape two together. They plug into the top left row and the row below it.

Note on light sensor: we've included one more component in most kits, a very flat component with a squiggle of metal printed on the top. That's a light sensor, and if you want to try the circuit out without water at first, you can plug it in instead of these probes, and it'll detect light instead of conductivity. Once you have it working, you can swap back.

[![OI000067.jpg](/i/34218)](/i/34218?s=o)

##Step 11 
Now we plug in a battery. This time, which wire goes where is important. The red wire is + (plus), and connects to the bottom left leg of the timer (or any space directly to the left of it -- remember how the rows are connected in sets of 5!). The black wire is - (negative), and goes to the top left leg of the timer, as shown in the next image.

[![OI000074.jpg](/i/34219)](/i/34219?s=o)

##Testing it out 
Now you're ready to dip the probe wires into some water. You can try tap water, distilled water, and salt water (like contact solution).

Protecting the circuit 
Over time, the wires can come out. If you're totally sure about it, you can put a bunch of hot glue over the circuit, but it seems a shame to cover up. Or you could tape wires down. It can help to peel off the backing and stick the whole thing into a box, like a cut-in-half water bottle.

Read about more you can do with the Coqui on this page, including activities and upgrades!

https://publiclab.org/coqui