---
title: "Lighting Your Sample"

tagnames: 'raspberry-pi, with:kgradow1, with:warren, microscope, activity:microscopy, raspberry-pi-cameras, activity:microscope, with:wmacfarl, with:bmela, activity:basic-microscope, series:basic-microscope, activity:community-microscope-assembly'
author: partsandcrafts
path: /notes/partsandcrafts/02-26-2018/4-lighting-your-sample.md
nid: 15817
uid: 66014
cids: 18818,20961
---

![](https://publiclab.org/public/system/images/photos/000/023/722/original/image10.jpg)

# Lighting Your Sample

by [partsandcrafts](/profile/partsandcrafts) | February 26, 2018 17:46

February 26, 2018 17:46 | Tags: [raspberry-pi](/tag/raspberry-pi), [with:kgradow1](/tag/with:kgradow1), [with:warren](/tag/with:warren), [microscope](/tag/microscope), [activity:microscopy](/tag/activity:microscopy), [raspberry-pi-cameras](/tag/raspberry-pi-cameras), [activity:microscope](/tag/activity:microscope), [with:wmacfarl](/tag/with:wmacfarl), [with:bmela](/tag/with:bmela), [activity:basic-microscope](/tag/activity:basic-microscope), [series:basic-microscope](/tag/series:basic-microscope), [activity:community-microscope-assembly](/tag/activity:community-microscope-assembly)

----

# Why Is Light Important?

Lighting is conceptually relatively straightforward but extremely important for microscopy. We see by observing light reflected off of objects. Because the sample we are trying to look at under our microscope is very small it reflects a very small amount of light. This means that we need to light the sample very well with a very bright light so that we get enough light through our magnification optics to provide us with a visible image.

\*\*

There are two basic ways that people illuminate samples to examine under microscopes -- transmitted light microscopy and reflected light microscopy. With transmitted light microscopy, a thin and translucent sample is placed between a bright light and the microscope lens so that the light passes through the sample. With reflected light microscopy, a very bright light is set up on the same side of the sample as the lens and the light bounces off the sample rather than passing through it.

Reflected light microscopy can be used to examine objects that are not thin and translucent, but is more difficult and complex to set up. We are limiting our investigation to transmitted light microscopy for now.

# How It Works

The important thing about the illumination is that it be a small, very bright point light source. We want all of our light to be going into a very narrow aperture at the top of the microscope objective lens. Almost any light source will do, as long as it is bright enough and we can easily point it into the lens. You can either use one you have lying around, buy one, or make one.

# Buy a Light

The easiest thing to use is some kind of bright goose-neck task-light with a single bright LED. but most of the ones I've seen have an array of many dimmer LEDs instead. I experimented with a desk-lamp I had lying around, but found that the array of many LEDs made it very difficult to line up a single LED to shine directly on the sample.

\*\*  
\*\*

![](https://lh5.googleusercontent.com/hHz3c-jbzysqB9jlrkhFrZ6w3LBC9Z30kOuV0nioQg9Xfb_eZL4ckrhY552qOgzSJEzxSxqjAm17grSFsyFv81SDLifHQSP5jGTuTjSMR2XfgLGHnK24BiVAQOC5qwecb6fkVQdE)

![](https://lh4.googleusercontent.com/vAii3ib5HsO8PzOfbFfAzKUxKTZVTynRpffpjs2lHJMpj_Sze7rjCuWRCL8EtDEURlDGxQ3rD3qqcr6bD3aCIF9GIsTHU1NVrBxHpz1KecHTg1CkdIpHr8W-HdSRF1XnqfD530MQ)

Cell phone flashlights work very well, since they are usually a single very bright LED, and a gooseneck cell-phone holder like this -- [https://smile.amazon.com/Aduro-Solid-Grip-Adjustable-Universal-Smartphone/dp/B01HDZJ1ZE/ref=sr\_1\_3?s=wireless&ie=UTF8&qid=1511647101&sr=1-3](https://smile.amazon.com/Aduro-Solid-Grip-Adjustable-Universal-Smartphone/dp/B01HDZJ1ZE/ref=sr_1_3?s=wireless&ie=UTF8&qid=1511647101&sr=1-3) -- would probably work well as an illumination stand.

This is also a good light-source -- [https://www.amazon.com/I-MU-Flexible-Gooseneck-Brightness-Gray-White/dp/B071Y3P8ZC/](https://www.amazon.com/I-MU-Flexible-Gooseneck-Brightness-Gray-White/dp/B071Y3P8ZC/) It's USB powered and so can either be powered from the Raspberry Pi if you use a micro-USB to USB adapter like this -- [https://www.amazon.com/Micro-USB-OTG-Adapter-Cable/dp/B00D8YZ2SA](https://www.amazon.com/Micro-USB-OTG-Adapter-Cable/dp/B00D8YZ2SA), or you can power it from a separate USB port/power adapter.

We decided that the cheapest thing to do would be just to wire up a single bright LED to a power source and glue it to a piece of flexible wire. You could save yourself this step by finding an already existing suitable light source.

Our build for this involves 2 AA batteries, a battery holder with a built-in switch, some extra wires, a length of coat-hanger wire and some hot glue. This is very far from the optimal way to build this, but it works. Coat-hanger wire is actually a bit more rigid than we need and should be replaced with a more flexible wire that could more easily be wrapped around things to be held in place. This would make the light easier to use and would probably also eliminate the need for the hot-glue.

# Make Your Own

This is a very simple circuit to build. We simply attach a bright white LED to a pair of AA batteries in a battery holder. LEDs are light-emitting-diodes, and will produce light when electricity flows through them. As diodes they only allow current to flow in one direction so you have to make sure that you have wired the correct wires from your battery pack to the correct legs of the LED.

Theoretically LEDs should always be wired up in series with a current-limiting resistor, but experimentally the bright white LEDs we are using seem to do just fine with 2 AA batteries and no resistor.

##1. Attach longer wires to battery holder

The wires coming off of the battery pack are not quite as long as we would like them to be so we start by attaching extra lengths of wire. If you have a soldering iron you should solder these connections but if you don't you can get away with just twisting the wires together as snugly as you can. Do this for both the red and black wires.

![](https://lh6.googleusercontent.com/v2qZmXKnVRAad_q8RuTkfl8Ai1yvcReYnyoN0RBh7TZx5D9N59PnU9sJDNfni5AB2vc5detGhvheHX_fEDxcWYgQ0CEeeq705nr4q7un51__Tfmtw00dR3ksmckN9tKManPj_f_R)

\*\*  
\*\*

![](https://lh5.googleusercontent.com/ibE_durVbSPUBIWB6JJLvwsy0KbHUCpliCc0ly4qq4XjorK8J95-_Opll3rs5PBsgWq0R10hJtU_Nw29vrU5GYNUYn5JMlYlvM0SvaziBccCHBsSe_2ieQhDe4yohn4FrbA63i3U)

##2. Attach wires to LED

The red wire goes to the long leg of the LED. The black wire goes to the short leg. Again, if you have a soldering iron you should use it, otherwise you can just twist the wires together.

![](https://lh3.googleusercontent.com/iqG2C6S0IbJDvPo9Ns_gP40nnaUvWq0D22YB8dLU5eGvb0DqKYTcVA9wLEhmHuqvMAN5T0Wo1S25wVAhkjwNbCHLFurlUc7qwYk5_Wd7KAxnzEexrWV8ixb5oI4W-OOyBN-qjwqv)

##3. Wrap LED legs around structural wire

If your wire is insulated (coated in something non-conductive, such as paint) you can attach the LED to the end of the wire just by wrapping the LED legs around it. If not you'll need to attach it with some kind of adhesive taking care not to let the legs of the LED touch the bare metal structural wire.

![](https://lh3.googleusercontent.com/CDLpfbteZTlh2oluc3I3B7rmVroacKqSm6bespVwXFKRvVBgk0HVwro69EA_RhdoN5scmw7BmG_neZdtu2aBF2qoT_qsKRz10I2ZZ4DOEwlhlJn6NTIfGv4gsc97lwJhCB63BNIB)

##4. Wrap electrical wires around structural wire and structural wire around battery pack

This is just to contain the wires and make sure they don't get too tangled or cause a short-circuit. Again, if the structural wire is not insulated you will need to make sure that they exposed metal parts of your electrical wiring don't touch the bare metal structural wire. You will also need to make sure that the bare metal electrical connections between the black wires don't touch the connections on the red wires.

![](https://lh6.googleusercontent.com/M5L5HMvLP_w64tg80G7tUw500tlhAd-pbAN-a3LaxPsios6GIQAFOaeZw7I4iFaUUkx9E7DcQb1fe-suzUZygzaLdeyTpLbmj_ds7awIF2cBoFCSKDKN55psZLzGWlvK7sNO8pgQ)

##5. Glue it snugly in place

Nothing fancy about this step. Just use a lot of hot glue.

![](https://lh4.googleusercontent.com/XRpwR5CU8md6LY7ShHZxUcYOABwM96HD1nIebfcPTZ_woIGCbDbW0pnrTQ2E82rSe0XSZh5bKuIxtOvfiPL-MyS79dDmC89qOk8eilUau7Cg4i1lUuyZSkmZj-sx1cnpyLy8LiKV)

##6. Test it out!

You should be able to shine the light straight down into the microscope lens.

![](https://lh6.googleusercontent.com/AsGU284S05K0AFzX7e7E2jOhSwVq_7PUgucBTInJGf6SyLMU2aKtxCkUqzb9hGfj7Z0ku3hzGheNam_0BreEMwyPsViJuYOIWAzVGC2gWzavZS2rpLklMktBvygrWSmB14prKGfJ)

![](https://lh4.googleusercontent.com/TGAJWJpRkkON0LDSBhxQZ6A7QUSgEwr66vapygzUthMQUnqInRcn8wMl72N3h_G5xSly-uxxO3srXbquOcLtVwDjra0m_RgRgSCNilyx3iCokwWtjfLpIYRXpJRKTIMHwqdiEy61)