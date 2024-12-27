---
title: "Build a sound-generating Coqui conductivity sensor (new version!)"

tagnames: 'water-quality, conductivity, coqui, activity:coqui, sound, with:zengirl2, with:asnow, pin:activity:coqui, activity:one-cranston'
author: warren
path: /notes/warren/03-01-2019/build-a-sound-generating-coqui-conductivity-sensor.md
nid: 18313
uid: 1

cids: 21995,22018,25104,25105,25664

---

![](https://publiclab.org/public/system/images/photos/000/032/336/original/OI000071_copy.jpg)

# Build a sound-generating Coqui conductivity sensor (new version!)

by [warren](../../../profile/warren) | February 08, 2019 00:09

February 08, 2019 00:09 | Tags: [water-quality](../tag/water-quality), [conductivity](../tag/conductivity), [coqui](../tag/coqui), [activity:coqui](../tag/activity:coqui), [sound](../tag/sound), [with:zengirl2](../tag/with:zengirl2), [with:asnow](../tag/with:asnow), [pin:activity:coqui](../tag/pin:activity:coqui), [activity:one-cranston](../tag/activity:one-cranston)

----

This is a guide to building the Coqui, version 2 - a compact and slightly refined version of the [Coqui water conductivity sensor from this post](https://publiclab.org/notes/ashkaya/09-17-2016/build-a-coqui-a-simple-water-conductivity-sensor). The Coqui is named after a small frog, because instead of producing numerical output, it makes a noise.

It's pretty easy to build, and in this tutorial, we'll walk you through building it with an extra small (cute) breadboard. The pieces are quite small, but you should be able to assemble it in 20 minutes or less.

You'll need the parts in one Coqui kit, [available in the Public Lab store](https://store.publiclab.org/products/coqui), or you can look below to find the parts yourself. An older kit parts list [can be found here](https://publiclab.org/notes/ashkaya/09-17-2016/build-a-coqui-a-simple-water-conductivity-sensor).

![image description](/i/29231.jpg "IMG_20190123_132635_151.jpg")

### Parts List

1\. [Breadboard](https://www.amazon.com/gp/product/B01KKE602W/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1)

2\. [Piezo](https://www.digikey.com/product-detail/en/tdk-corporation/PS1240P02BT/445-2525-1-ND/935930)

3\. [Ceramic Capacitor](https://www.digikey.com/product-detail/en/vishay-bc-components/K104Z15Y5VE5TL2/BC1148CT-ND/286770)

4\. [Single Timer](https://www.digikey.com/product-detail/en/texas-instruments/TLC555CP/296-1857-5-ND/277502)

5\. [Resistor](https://www.amazon.com/gp/product/B072BL2VX1/ref=ox_sc_act_title_1?smid=A2WWHQ25ENKVJ1&psc=1)

6\. [Photocell](https://www.digikey.com/product-detail/en/advanced-photonix/PDV-P8104/PDV-P8104-ND/480611)

7\. [Green Terminal Block](https://www.digikey.com/product-detail/en/on-shore-technology-inc/OSTVN02A150/ED10561-ND/1588862)

8\. [Assorted Jumper Wires](https://www.amazon.com/gp/product/B07CJYSL2T/ref=ox_sc_mini_detail?ie=UTF8&psc=1&smid=ASCJ5KR72MQDG)

9\. 8-Male to Male Jumper Wires

10\. Batteries & Holder

  
![image description](/i/32337.jpg "IMG_20190118_205609_421.jpg")

### 9 steps

This image shows all nine steps to assembly in a single image, and can be used to run a workshop almost by itself! But we'll walk through the steps one by one below.

### Fritzing diagram

Here's a standard Fritzing diagram of the circuit by @zengirl2 which makes a good handout. If you're familiar with Fritzing, it can help you go through step by step. The photos below also work, though!

[![Coqui3.19_bb.png](/i/29915)](/i/29915)

### Step 1

Lay out all the parts of the kit. The kit sold in the Public Lab Store comes with extra parts, especially extra wires. Shown are wires of the lengths needed; the rest are extras. We included some that hold their shape when bent, and some that don't; shown here are ones that do hold their shape, and we find the others get a bit messy and hard to read after installation (see [some pictures here](https://publiclab.org/notes/imvec/06-08-2018/adding-a-jack-to-the-coqui)).

**Note on colors:** unfortunately, we haven't found that the wire colors don't always represent the same length wires, so please go by length, not by color. Sorry!\*\*Bending wires: \*\*see how we've bent the longest wire into a kind of "C" or "G" shape; this'll make sense in a minute when you see how it gets plugged in.

[![image description](/i/29232.jpg "OI000058.jpg")](/i/29232.jpg?size=original)

Step 2

Place the black 8-legged piece so it straddles the center "trough". It has a "right way up" too - see the next image.

This piece is the timer, called a "555 timer". Once we finish, it will generate fast pulses of electricity which will sound like a hum.

[![image description](/i/29233.jpg "OI000059.jpg")](/i/29233.jpg?size=original)

Here see the little circle indicating the right way up:

![image description](/i/29657.jpg "OI000059.jpg")

### Step 3

Place one wire across the timer diagonally, from the 2nd leg down on the left, to the 3rd down on the right, as shown. Use a short wire, but if it won't stay in, try one a little longer.

The legs should go securely into the holes shown; you may need to use your fingernail to push them in. Wiggle it a bit if it doesn't go in at first.

[![image description](/i/29234.jpg "OI000060.jpg")](/i/29234.jpg?size=original)

### Step 4

Now add a second wire across diagonally the other way, from the top right-side to the bottom left side. It'll be a bit longer than the last wire.

[![image description](/i/29235.jpg "OI000061.jpg")](/i/29235.jpg?size=original)

Note that the rows are all connected horizontally in sets of five, so when we put in wires next to one another in a row, they get connected. The connections are as shown by the lines in this image:

![image description](/i/29659.jpg "OI000058.jpg")

### Step 5

Now place the small tube-shaped component (a resistor) at the top row, bridging the trough. (sometimes it'll be blue, but you can tell it from the colored stripes). Once connected, this will help slow the pulses from the timer so they [aren't too high frequency](https://publiclab.org/notes/liz/11-02-2018/how-can-we-adjust-the-frequency-of-the-coqui). The direction you plug it in doesn't matter.

This component (and some of the others) may go in easier, or stay in easier, if you trim the legs with a pair of wire clippers. A big pair of scissors can work too. You could try a nail clipper too... maybe?

[![image description](/i/29236.jpg "OI000062.jpg")](/i/29236.jpg?size=original)

### Step 6

Now we connect the right side of the resistor to the 3rd leg down the left side of the timer as shown in the next image. You can just plug it in, but it helps a bit to make the "J" or backwards "G" shape shown here, to keep things tidy.

[![image description](/i/29238.jpg "OI000063.jpg")](/i/29238.jpg?size=original)

### Step 7

Now add a straight wire from the second top left row (one below the resistor, so not connected to it!) down to the 2nd left-side leg of the timer, as shown in the next image.

[![image description](/i/29239.jpg "OI000064.jpg")](/i/29239.jpg?size=original)

### Step 8

Now we add the small flat yellow component, called a capacitor. It stores a little bit of electricity, which builds up until it the timer emits a pulse. Connect it from the 2nd top left row (right next to the last wire) down to the top left leg of the timer, as shown in the next image. It doesn't matter which direction for this type of capacitor.

I found that it was helpful to make it into a "wide legs stance" as shown in the last image.

[![image description](/i/29240.jpg "OI000065.jpg")](/i/29240.jpg?size=original)

### Step 9

Now add the big round black button-shaped component, the buzzer. Called a piezo buzzer, it is the "speaker" in this circuit. Connect it to the top left leg of the timer and the leg that's 3rd down from the top left, as shown in the next image. The direction you plug it in doesn't matter.

I flattened it a bit so you can see better, and I kind of like it like that.

[![image description](/i/29241.jpg "OI000066.jpg")](/i/29241.jpg?size=original)

### Step 10

Now we need to add the probe wires, which you'll dip into water to test it. Two longer ones, connected together, work best, but you can also tape two together. They plug into the top left row and the row below it.

**Note on light sensor:** we've included one more component in most kits, a very flat component with a squiggle of metal printed on the top. That's a light sensor, and if you want to try the circuit out without water at first, you can plug it in instead of these probes, and it'll detect light instead of conductivity. Once you have it working, you can swap back.

[![image description](/i/29242.jpg "OI000067.jpg")](/i/29242.jpg?size=original)

### Step 11

Now we plug in a battery. You can use 2 AA batteries, just one, or a 9-volt battery. More power (9v is more than two AAs) will be louder. This time, which wire goes where is important. The red wire is + (plus), and connects to the bottom left leg of the timer (or any space directly to the left of it -- remember how the rows are connected in sets of 5!). The black wire is - (negative), and goes to the top left leg of the timer, as shown in the next image.

[![image description](/i/29243.jpg "OI000074.jpg")](/i/29243.jpg?size=original)

### Testing it out

Now you're ready to dip the probe wires into some water. You can try tap water, distilled water, and salt water (like contact solution).

### Protecting the circuit

Over time, the wires can come out. If you're totally sure about it, you can put a bunch of hot glue over the circuit, but it seems a shame to cover up. Or you could tape wires down. It can help to peel off the backing and stick the whole thing into a box, like a cut-in-half water bottle.

Read about more you can do with the Coqui on this page, including activities and upgrades!

[https://publiclab.org/coqui](https://publiclab.org/coqui)

[![image description](/i/29230.jpg "IMG_20190123_132522_143.jpg")](/i/29230.jpg?size=original)