---
title: First Pass Bucket Build
tagnames: air-quality, bucket-brigade, global-community-monitor, air-sampling, lat:42, lon:-70, zoom:6, bucket-monitor, parent:bucket-monitor
author: kgradow1
path: /notes/kgradow1/07-03-2020/bucket-monitor-prototype.md
nid: 24090
uid: 297929

---

# First Pass Bucket Build

by [kgradow1](../profile/kgradow1) July 03, 2020 20:21

July 03, 2020 20:21 | Tags: [air-quality](../tag/air-quality), [bucket-brigade](../tag/bucket-brigade), [global-community-monitor](../tag/global-community-monitor), [air-sampling](../tag/air-sampling), [lat:42](../tag/lat:42), [lon:-70](../tag/lon:-70), [zoom:6](../tag/zoom:6), [bucket-monitor](../tag/bucket-monitor), [parent:bucket-monitor](../tag/parent:bucket-monitor)

\##Purpose

We finished the first pass bucket build this week! This build is definitely a work in progress, and I'm still waiting for some parts to come in. My goal for this week is to see if I can build a simple version of the bucket that will hold a vacuum and get familiar with how it comes together to help inform any updates or substitutions we may need to make going forward. This is not a full assembly walkthrough -- that will come later!

\##What is the bucket monitor?
The bucket is a ["grab sample" tool](https://publiclab.org/wiki/air-sampling) that allows you to test gases in your air. The original version used a Home Depot bucket, a Tedlar bag, a small vacuum, and a simple valve. There have been different versions over the years but they all work the same way:

- The vacuum sucks air out of the bucket.
- The valve is opened and a sample of the air is pulled into the Tedlar bag
- The bag is removed and sent to a lab for analysis.

![image description](/i/40061.gif "bucket_gif.gif")

For 20+ years, the bucket has been a critical tool for frontline communities looking to test their air. Public Lab and [Fair Tech Collective](https://www.fairtechcollective.org/) are working to open source the manual so that people who want to use this tool can easily source the parts. If you'd like to learn more, you can visit the [bucket monitor wiki page](https://publiclab.org/wiki/bucket-monitor).

For this build I referenced the [original bucket manual](https://publiclab.org/i/39437) from [Communities for a Better Environment](http://www.cbecal.org/) (reposted with permission), as well as additional reference material shared by Global Community Monitor. Here are my notes! If you have feedback or suggestions, please drop them in the comments.

\##Building the Bucket Lid

The bucket consists of three parts: a container (bucket), a Gamma Seal lid with an intake and outtake valve, and a hose connection to a vacuum pump. You will also need a Tedlar bag to capture your sample. Most of the heavy lifting happens in the bucket lid where the intake port, outtake port, and window are located.

![image description](/i/40064.jpg "Three_Parts_(8).jpg")

![image description](/i/40069.jpg "Three_Parts_(11).jpg")

\##Overview: How It Works
<iframe width="700" height="400" src="https://www.youtube.com/embed/4XzWdkb2w90" frameborder="0" allowfullscreen=""></iframe>. 

\##Issue 1: A Leaky Bucket
<iframe width="700" height="400" src="https://www.youtube.com/embed/75MaCnEoi-Y" frameborder="0" allowfullscreen=""></iframe>. 

## Parts Used in This Build

**Bucket Lid**

- [Gamma seal bucket lid](https://www.homedepot.com/p/Leaktite-5-gal-Screw-Top-Lid-5GAMMA6/203205720)
- [Swagelok Stainless Steel Bulkhead Union for 3/16" tubing](https://www.swagelok.com/en/catalog/Product/Detail?part=SS-300-61)
- [Swagelok Brass Bulkhead for 3/8" tubing](https://www.swagelok.com/en/catalog/Product/Detail?part=B-600-61) ([sub 3/8" brass compression coupling](https://www.homedepot.com/p/Everbilt-3-8-in-OD-Compression-Brass-Coupling-Fitting-800759/207176323))
- [Swagelok Stainless Steel Plug for 3/16" bulkhead](https://www.swagelok.com/en/search?Ntt=SS-300-p&language=en)
- [3/8" washer (2)](https://www.homedepot.com/p/Everbilt-3-8-in-Zinc-Flat-Washer-100-Pack-807230/204373312)
- [1/2" washer (2)](https://www.homedepot.com/p/1-2-in-Zinc-Plated-Flat-Washer-25-Pack-802334/204276390)
- [2 3/4" x 2 3/4" plexiglass](https://www.amazon.com/CalPalmy-Plexiglass-Crafting-Projects-Protective/dp/B082CXB1Q4/ref=sr_1_1_sspa?crid=K0XLQUWATT0U&dchild=1&keywords=acrylic%20sheets%20for%20crafts&qid=1593804709&sprefix=acrylic%20sheet,aps,147&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWExIVFpGTzM1QTlSJmVuY3J5cHRlZElkPUEwNDI5NTAxMjg1UUcwTzhFQlRSQiZlbmNyeXB0ZWRBZElkPUEwNzY5Nzg2MjdNN1ZEOVQ1Q09WVyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=)
- [Dynaflex sealant](https://www.homedepot.com/p/DAP-Dynaflex-230-Clear-5-5-oz-Premium-Indoor-Outdoor-Sealant-18860/202097444)

**Other Parts**

- [5-gallon round plastic bucket](https://www.homedepot.com/p/The-Home-Depot-5-Gal-Homer-Bucket-3-Pack-05GLHD2/100672960)
- [Tedlar sample bag, 5L or 10L capacity](https://www.skcinc.com/catalog/product_info.php?cPath=200000000_202000000_202000450_202000451&products_id=777)
- [12-24" of polyethylene (PE) tubing, 3/8" OD 1/4" ID](https://www.homedepot.com/p/Everbilt-3-8-in-O-D-x-1-4-in-I-D-x-25-ft-Polyethylene-Tubing-301762/207144264)
- [small hose clamp](https://www.homedepot.com/p/Everbilt-3-8-7-8-in-Stainless-Steel-Hose-Clamp-10-pack-670655E/202262869)
- [Vacuum pump](https://www.amazon.com/OBEST-Quick-Fill-Inflatables-Inflatable-Batteries/dp/B07TNYTR7D/ref=asc_df_B07TNYTR7D/?tag=hyprod-20&linkCode=df0&hvadid=366299675268&hvpos=&hvnetw=g&hvrand=11849353165809304077&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9002244&hvtargid=pla-806679871395&psc=1&tag=&ref=&adgrpid=77371235758&hvpone=&hvptwo=&hvadid=366299675268&hvpos=&hvnetw=g&hvrand=11849353165809304077&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9002244&hvtargid=pla-806679871395) ([sub oil siphon](https://www.amazon.com/Manual-Siphon-Pump-Kit-Automotive/dp/B07WR7PVR2/ref=sr_1_9?dchild=1&keywords=handheld%20siphon&qid=1593804965&s=sporting-goods&sr=1-9))

**Tools Needed for Assembly**

- [Power drill](https://www.homedepot.com/p/RYOBI-12-Volt-Lithium-Ion-Cordless-3-8-in-Drill-Driver-Kit-with-12-Volt-Battery-and-Charger-HJP004L/300981190)
- [Drill and](https://www.homedepot.com/p/DEWALT-Black-and-Gold-Drill-Bit-Set-14-Piece-DWA1184/205952637) [spade bits](https://www.homedepot.com/p/Bosch-Chisel-Point-Spade-Drill-Bit-Set-10-Piece-SB0010/204415169)
- [1/2" wrench](https://www.homedepot.com/p/Husky-1-2-in-12-Point-SAE-Full-Polish-Combination-Wrench-HCW12/202916147)
- [5/8" wrench](https://www.homedepot.com/p/Husky-5-8-in-12-Point-SAE-Full-Polish-Combination-Wrench-HCW58/202916149)
- [9/16" wrench](https://www.homedepot.com/p/Husky-9-16-in-12-Point-SAE-Full-Polish-Combination-Wrench-HCW916/202916148)
- [Hacksaw](https://www.homedepot.com/p/Husky-10-in-Close-Quarters-Hacksaw-80-522-111/304583784)
- [Vice grip pliers](https://www.homedepot.com/p/Milwaukee-10-in-Torque-Lock-Curved-Jaw-Locking-Pliers-with-Durable-Grip-48-22-3410/205017478)
- [Packing tape](https://www.amazon.com/Scotch-Heavy-Shipping-Packaging-142-700-H/dp/B003FYLW9Q/ref=sr_1_9?dchild=1&keywords=packing%20tape&qid=1593805156&sr=8-9)

## Reflections

**Crash course in compression couplings**.
The biggest challenge was understanding how compression couplings work -- in particular, the Swagelok nut and ferrule couplings that are used for the intake and outtake ports. I had to talk to three different people before I found someone who was familiar with this fitting and was able to show me how it worked. The distributor suggested that we may be able to get away with a lower-end part as long as it's still stainless steel, since we are connecting it to the plastic fitting on the bag vs. a steel pipe. So that's promising! 3/16" Swagelok bulkheads are not commonly stocked and it's an expensive part, so if we can find a cheaper distributor, that will help bring down the price.

**Testing parts for the outtake port**.
It took me about a week and a half to source all the parts with the exception of the 3/8" brass bulkhead from Swagelok for the outtake port and the cap for the intake port. I'm still waiting for both of these parts. It takes a long time to get parts in a pandemic! Given that, I decided to test out a 3/8" brass compression coupling, which is a standard part that you can find in any hardware store. This worked well. I'm going to test the Swagelok bulkhead fitting once it comes in, but I expect we will go with the compression coupling since it's significantly cheaper and works well.

**Which vacuum is the best?**.
Per discussion with @missmiss, I tried out both a manual pump and an electric camping pump. The original version calls for a specialized pump from Radio Shack that is now unavailable, but luckily the electric pump worked just fine. I used the tube from the oil siphon and connected them with a small hose clamp. This worked great! That's a relief. I was worried this would be hard to find.

\*\*Acrylic window is a barrier \*\*.
Lastly, I tried swapping out the acrylic window for a piece of recycled plastic, since the acrylic is very hard to cut with a hacksaw. It didn't work well. My window didn't stick, and I wasn't able to get a good seal. Honestly, I feel like it might make sense to just lasercut these parts. We could also go with a clear bucket (or a clear lid) but that will drive up the cost of parts considerably.

\##Troubleshooting

**Sealing the bucket**.
The biggest challenge was getting a good seal on my intake and outtake port, as well as issues with inflating the bag. The sealant I used did not adhere well, and it was challenging to get a good seal on the bucket. In future builds, I'm going to try sanding down these connections before gluing.

**Always bring a spare!**.
The main problem, obviously, was that I ripped my Tedlar bag. I was pleased to see that you can attach a regular old plastic bag for testing, which I am going to include in the documentation. Even so, I'm honestly not sure why I was unable to get inflation on the bag. It's possible I'm just missing something about how this valve works.

\##Questions

- If I sand the connections, will I get a better seal?
- Am I doing something wrong with the Tedlar bag?
- Can I use a cheaper brass fitting for the outtake valve?
- Does the 3/16" bulkhead have to be Swagelok or can it be any stainless steel?

If you have feedback or suggestions, please drop them in the comments!

**This post is part of the Bucket Monitor project.**

For more information, see our [introduction](https://publiclab.org/notes/Shannon/05-14-2020/the-bucket-updating-and-open-sourcing-a-community-air-monitoring-tool) and [project overview](https://publiclab.org//wiki/bucket-monitor "https://publiclab.org//wiki/bucket-monitor").

Subscribe to the tag "bucket-monitor" to get updates when we post new material.

[Subscribe to get updates on this project](https://publiclab.org/subscribe/tag/bucket-monitor)