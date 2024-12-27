---
title: "Replicating a Passive Dust Monitor & Method"

tagnames: 'sensing, wisconsin, air-quality, silica, frac-sand, pm, particle-sensing, particle-monitoring, particle, fracsand, passive-particle-monitors, passive-pm, parent:frac-sand, seeks:replications, category:build, difficulty:hard'
author: mathew
path: /notes/mathew/09-02-2015/replicating-a-passive-dust-monitor-method.md
nid: 12192
uid: 4

cids: 12489,12493,12498,13199

---

![](https://publiclab.org/public/system/images/photos/000/011/387/original/IMG_20150901_210206-edit.jpg)

# Replicating a Passive Dust Monitor & Method

by [mathew](../../../profile/mathew) | September 02, 2015 06:15

September 02, 2015 06:15 | Tags: [sensing](../tag/sensing), [wisconsin](../tag/wisconsin), [air-quality](../tag/air-quality), [silica](../tag/silica), [frac-sand](../tag/frac-sand), [pm](../tag/pm), [particle-sensing](../tag/particle-sensing), [particle-monitoring](../tag/particle-monitoring), [particle](../tag/particle), [fracsand](../tag/fracsand), [passive-particle-monitors](../tag/passive-particle-monitors), [passive-pm](../tag/passive-pm), [parent:frac-sand](../tag/parent:frac-sand), [seeks:replications](../tag/seeks:replications), [category:build](../tag/category:build), [difficulty:hard](../tag/difficulty:hard)

----

Passive dust monitors, where dust lands on a pad or in a container without any pumps, fans, electronics or moving parts, are very attractive option for [particle sensing](/wiki/particle-sensing) because they are inexpensive and can be put anywhere.  Here I'll document my efforts to replicate a published methodology that may produce data equivalent to a [Federal Reference Method](http://publiclab.org/wiki/particle-sensing#EPA+Test+Methods), and relies on fairly low cost equipment. 

###Background
_Previously..._ I looked at doing [optical scans](http://publiclab.org/notes/mathew/06-11-2014/a-first-look-at-dust-with-consumer-scanners) of [sticky pads](http://publiclab.org/notes/mathew/06-05-2014/the-development-of-stickypad-monitoring), but there was no means of extrapolating airborne particle concentrations in the PM2.5 and PM10 ranges (small dust roughly 2.5μm and 10μm in diameter). As Stevie and I asked around for low cost methods of potentially getting reliable low-cost data, Thomas Peters at the University of Iowa pointed us towards passive monitors initially developed at the University of North Carolina. [see this summary of the research](http://publiclab.org/notes/mathew/08-21-2014/low-cost-passive-aerosol-monitors) 

![Passive monitors, Wagner and Leith](https://i.publiclab.org/system/images/photos/000/006/376/original/Screen_Shot_2014-08-21_at_12.10.22_PM.png)
credit: Wagner and Leith, 2001

Originally conceived of as a means of collecting samples for a scanning electron microscope (SEM), Thomas Peters' colleague Darrin Ott came up with a novel revision, modifying the device to be scanned on a less expensive optical microscope. Ott and Peters also designed a wind and weather baffle that brought the device within the precision of a Federal Reference Method.  This method and its field deployment is documented across three papers: 
  
[Darrin K. Ott & Thomas M. Peters. A Shelter to Protect a Passive Sampler for Coarse Particulate Matter, PM10 - 2.5. Aerosol Science and Technology 42:4, 299-309 (2008)](//www.tandfonline.com/doi/pdf/10.1080/02786820802054236)

Darrin K. Ott, William Cyrs, Thomas M. Peters. Passive measurement of coarse particulate matter, PM10-2.5. Aerosol Science 39 156 – 167 (2008)

Darrin K. Ott, Naresh Kumar, Thomas M. Peters. Passive sampling to capture spatial variability in PM10–2.5. Atmospheric Environment 42  746–756 (2008)

Discussing this research with Amber Wise, she offered to help take a look at SEM and optical microscope samples at Chicago State. Together with Andrew Maselli we took a look.  Much of my analysis of the options is owed to Andrew's analysis. 

###Making Ott & Peters Passive Sampler

####tools list: 
* 3D printer (Ultimaker 2) & Laser cutter (Full Spectrum Pro)
*  at [PSU's Electronics Prototyping Lab](http://psu-epl.github.io/)
* small philips head screw driver (#4 drive)
* very small philips head screw driver (#0 drive)
* micrometer

####SEM Passive Monitor Parts List:
* 160μm Mesh [Precision EForming #75HH-160](http://www.precisioneforming.com/Portals/108/Files/PESieveProductCatalog.pdf)
* 12.7mm [SEM stub](https://www.tedpella.com/sem_html/SEMpinmount.htm)
* 12mm dia .015-.17mm thick circular cover glass for slides [#12-545-80, Fisher Scientific](https://www.fishersci.com/shop/products/fisherbrand-cover-glasses-circles-11/1254580)
* Anti-static lab wipes [#34155, Kimberly Clark](https://www.fishersci.com/shop/products/kimberly-clark-kimtech-science-kimwipes-delicate-task-wipers-7/06666a)
* [3M Post-It Flags](http://solutions.3m.com.hk/wps/portal/3M/en_HK/post-it/index/products/flags/standard_small_flags/)
* 2x 0-80 1/8” screws, [McMaster-Carr](http://www.mcmaster.com/#91772a052/=yr43ea)
* Rubber Cement
* [3D print file STL](https://i.publiclab.org/system/images/photos/000/011/410/original/cap-nolip.stl.zip)
* [Mesh laser cut file](https://i.publiclab.org/system/images/photos/000/011/408/original/mesh-cut.pdf)

_Optional?_
Polonium 210 de-ionizer such as Amstat Industries http://www.amstat.com/staticmaster-2/staticmaster-ionizers/

####Ott & Peters Housing Parts List:
* 3x 4-40 1” phillips machine screws [McMaster-Carr](http://www.mcmaster.com/#90272a115/=yr7vdv)
* 6x 4-40 nuts ,  I used 1/4” wide, 3/32” high [McMaster-Carr](http://www.mcmaster.com/#90480a005/=yr7xfc)
* 3x 4-40 wing nuts [McMaster-Carr](http://www.mcmaster.com/#90866a005/=yr7vi7)
* 3x #6 0.12” ID, 0.25” OD, .047”-.077” thick rubber washer [McMaster-Carr](http://www.mcmaster.com/#90133a005/=yr2stg) (or similar thickness rubber, i used rubber)
* 3/32” thick 12” x 12”  acrylic sheet [McMaster-Carr](http://www.mcmaster.com/#8589k31/=yr7z1x)
* 1/8” ID, 11/32” OD rubber grommet (for 1/16” thick panel) [McMaster-Carr](http://www.mcmaster.com/#9600k17/=yr81i2)
* Loc-Tite or superglue.
* [Laser cut file (in mm)](https://i.publiclab.org/system/images/photos/000/011/411/original/Ott_plate_housing.svg)




####SEM Cap Design & Production notes
Beginning this project I had only a few diagrams and incomplete parts lists spread across [Ott & Peters 2008] and [Wagner and Leith 2001]

In the diagrams its hard to see all the dimensions and parts needed:

[![Screen_Shot_2015-07-30_at_1.18.36_PM.png](https://i.publiclab.org/system/images/photos/000/011/381/medium/Screen_Shot_2015-07-30_at_1.18.36_PM.png)](https://i.publiclab.org/system/images/photos/000/011/381/original/Screen_Shot_2015-07-30_at_1.18.36_PM.png)
[Ott & Peters 2008]

At the end of the project I made this 2D cross-section and top view drawing of the dimensions of my printable cap using [QCAD](http://qcad.org/en/) (print files are in the parts list):

[![Screen_Shot_2015-09-01_at_9.28.51_PM.png](https://i.publiclab.org/system/images/photos/000/011/386/medium/Screen_Shot_2015-09-01_at_9.28.51_PM.png)](https://i.publiclab.org/system/images/photos/000/011/386/original/Screen_Shot_2015-09-01_at_9.28.51_PM.png)


But I started by taking notes using [Skitch](https://evernote.com/skitch/).  This is a compilation of: Wagner & Leith 2001, Ott et al 2008, Ott & Peters 2008, 

[![Screen_Shot_2015-07-30_at_1_18_36_PM.png](https://i.publiclab.org/system/images/photos/000/011/383/medium/Screen_Shot_2015-07-30_at_1_18_36_PM.png)](https://i.publiclab.org/system/images/photos/000/011/383/original/Screen_Shot_2015-07-30_at_1_18_36_PM.png)

I then made a quick 3D model in [123D](http://usa.autodesk.com/autodesk-123d/) and 3D printed it, but it didn't fit on the SEM stub.

[![IMG_20150901_212109.jpg](https://i.publiclab.org/system/images/photos/000/011/385/medium/IMG_20150901_212109.jpg)](https://i.publiclab.org/system/images/photos/000/011/385/original/IMG_20150901_212109.jpg)

I was about to print a model that was a little bit wider, when I decided to check with a micrometer that my original had shrunk-- 4% vertically and 6% horizontally in the printing process-- and I put that stretch into the print. **Use a micrometer to check the actual print dimensions of your print and adjust the print accordingly**

####Mesh
The mesh that is recommended in the literature is described as having "holes of conical cross section and dimensions of 160 μm (top diameter) and 225 μm (bottom diameter)... (Buckbee-Mears, St. Paul, Inc.)" Unfortunately, Buckbee-Mears is out of business, replaced by Precision Eforming of Cortland, NY.  Calling around to different mesh suppliers, I was unable to find a mesh of this description.  i therefore purchased Precision Eforming's mesh (linked above).  It does not appear to match the description.  Here I annotated in QCAD an image Andrew made in the Electron Microscope:

[![Screen_Shot_2015-09-01_at_7.43.40_PM.png](https://i.publiclab.org/system/images/photos/000/011/388/medium/Screen_Shot_2015-09-01_at_7.43.40_PM.png)](https://i.publiclab.org/system/images/photos/000/011/388/original/Screen_Shot_2015-09-01_at_7.43.40_PM.png)

[![Screen_Shot_2015-09-01_at_9.55.12_PM.png](https://i.publiclab.org/system/images/photos/000/011/389/medium/Screen_Shot_2015-09-01_at_9.55.12_PM.png)](https://i.publiclab.org/system/images/photos/000/011/389/original/Screen_Shot_2015-09-01_at_9.55.12_PM.png)

Will that matter? We'll see... I hope the effect won't be significant. **Recommendations on mesh sourcing would be helpful.  **

Cut the mesh into a 16mm circles. [Here's a cut file](https://i.publiclab.org/system/images/photos/000/011/408/original/mesh-cut.pdf) for a 3" square of mesh, making 20.  I haven't tested the laser cutter with it yet, I cut this square out and trimmed it by hand.  It shows in the frayed edges. Adhere the mesh to the top of the cap:

[![IMG_20150901_205527.jpg](https://i.publiclab.org/system/images/photos/000/011/394/medium/IMG_20150901_205527.jpg)](https://i.publiclab.org/system/images/photos/000/011/394/original/IMG_20150901_205527.jpg)

I used rubber cement, because they recommended spray adhesive, and spray adhesive is usually a rubber cement, but I think its messy and makes sticky aerosols.  I only applied adhesive to the cap, never the mesh, and in a thin coat.  It still clung to some dirt, giving the discoloration you see above.

####Ott & Peters wind baffle 

I started from this model and a description of parts in Ott & Peters 2008, and compiled the above list of parts.

[![Screen_Shot_2015-07-30_at_1.17.42_PM.png](https://i.publiclab.org/system/images/photos/000/011/382/medium/Screen_Shot_2015-07-30_at_1.17.42_PM.png)](https://i.publiclab.org/system/images/photos/000/011/382/original/Screen_Shot_2015-07-30_at_1.17.42_PM.png)
[Ott & Peters 2008]

I made this [cut file](https://i.publiclab.org/system/images/photos/000/011/395/original/Ott_plate_housing.svg), with all the cuts in the description, annotated here in mm:

[![Screen_Shot_2015-09-01_at_10.28.13_PM.png](https://i.publiclab.org/system/images/photos/000/011/397/medium/Screen_Shot_2015-09-01_at_10.28.13_PM.png)](https://i.publiclab.org/system/images/photos/000/011/397/original/Screen_Shot_2015-09-01_at_10.28.13_PM.png)

If you convert these dimensions into US units, its a 5" circle up top and an 8" circle below. crucial to the design, but not pictured, is a thin groove on the underside of the top plate to catch rain drops.

[![IMG_20150901_203738.jpg](https://i.publiclab.org/system/images/photos/000/011/390/medium/IMG_20150901_203738.jpg)](https://i.publiclab.org/system/images/photos/000/011/390/original/IMG_20150901_203738.jpg)

The distance between the two plates of 1.6cm is arrived at fairly easily by using 1" screws and standard 3/32" acrylic and 3/32" thick nuts in the parts list.  The screws should extend slighly below the thickness of two 3/32" nuts: 

[![IMG_20150901_220541.jpg](https://i.publiclab.org/system/images/photos/000/011/391/medium/IMG_20150901_220541.jpg)](https://i.publiclab.org/system/images/photos/000/011/391/original/IMG_20150901_220541.jpg)

Use nuts to hold the bottom plate down.  Set nuts to rest the top plate on, and drip Loc-Tite or super glue on this set to hold them in place:

[![IMG_20150901_205623.jpg](https://i.publiclab.org/system/images/photos/000/011/392/medium/IMG_20150901_205623.jpg)](https://i.publiclab.org/system/images/photos/000/011/392/original/IMG_20150901_205623.jpg)

###In Use

[![IMG_20150901_204602.jpg](https://i.publiclab.org/system/images/photos/000/011/398/medium/IMG_20150901_204602.jpg)](https://i.publiclab.org/system/images/photos/000/011/398/original/IMG_20150901_204602.jpg)

Clean a slide cover with the wipes and place in the cap:

[![IMG_20150901_205105.jpg](https://i.publiclab.org/system/images/photos/000/011/399/medium/IMG_20150901_205105.jpg)](https://i.publiclab.org/system/images/photos/000/011/399/original/IMG_20150901_205105.jpg)

Put the SEM stub in, and screw the 0-80 screws down:

[![IMG_20150901_205140.jpg](https://i.publiclab.org/system/images/photos/000/011/400/medium/IMG_20150901_205140.jpg)](https://i.publiclab.org/system/images/photos/000/011/400/original/IMG_20150901_205140.jpg)

[![IMG_20150901_205331.jpg](https://i.publiclab.org/system/images/photos/000/011/401/medium/IMG_20150901_205331.jpg)](https://i.publiclab.org/system/images/photos/000/011/401/original/IMG_20150901_205331.jpg)

Flip it over and cover the mesh with a 3M Post-It flag to protect it from dust:

[![IMG_20150901_205556.jpg](https://i.publiclab.org/system/images/photos/000/011/402/medium/IMG_20150901_205556.jpg)](https://i.publiclab.org/system/images/photos/000/011/402/original/IMG_20150901_205556.jpg)

Place it in the wind baffle and put the top on, and screw down the wing nuts (substituted here with stand-offs):

[![IMG_20150901_210206-edit.jpg](https://i.publiclab.org/system/images/photos/000/011/403/medium/IMG_20150901_210206-edit.jpg)](https://i.publiclab.org/system/images/photos/000/011/403/original/IMG_20150901_210206-edit.jpg)

Place somewhere in an unrestricted airflow to be measured, and cover back up with a Post-It Flag when done.  More on the procedure in [Eric J Sawvel's 2013 PhD Thesis](http://ir.uiowa.edu/etd/5053/)

###A sketch at analysis:
Two methods of analysis are under consideration, Wagner and Leith's Scanning Electron Microscope (SEM) and Ott et al.'s optical method.  The optical method would be much cheaper, and its automation means sampling more particles, potentially a source of increased accuracy [Ott et al 2008].

Under a Scanning Electron Microscope (SEM) and a graphite SEM stub, particles 2.5μm are just barely viewable:

[![SND_on_carbon4.jpg](https://i.publiclab.org/system/images/photos/000/011/404/medium/SND_on_carbon4.jpg)](https://i.publiclab.org/system/images/photos/000/011/404/original/SND_on_carbon4.jpg)
 
[![SND_on_carbon6.jpg](https://i.publiclab.org/system/images/photos/000/011/405/medium/SND_on_carbon6.jpg)](https://i.publiclab.org/system/images/photos/000/011/405/original/SND_on_carbon6.jpg)

They are easily seen on the slide at 20x with a much broader field of view.

[![20xfrac_snd18-edit.jpg](https://i.publiclab.org/system/images/photos/000/011/407/medium/20xfrac_snd18-edit.jpg)](https://i.publiclab.org/system/images/photos/000/011/407/original/20xfrac_snd18-edit.jpg)

[![Screen_Shot_2015-09-01_at_11.15.33_PM.png](https://i.publiclab.org/system/images/photos/000/011/412/medium/Screen_Shot_2015-09-01_at_11.15.33_PM.png)](https://i.publiclab.org/system/images/photos/000/011/412/original/Screen_Shot_2015-09-01_at_11.15.33_PM.png)

### Next steps
Our next steps are figuring out how to systematically sample the slide and use ImageJ's particle counting system to automate counting.  Ott and Peters sampled 70% of the collection surface.  How much should we sample/Do we need to sample?

We may also want to try polarized light microscopy for silica identification.

On the design side, the screws on the bottom of the cap are annoying.  a better solution can be found, I'm sure. 


####Additional Citations:
3. Jeff Wagner and David Leith. Passive Aerosol Sampler. Part I: Principle of Operation. Aerosol Science and Technology 34: 186– 192 (2001)

4. Jeff Wagner and David Leith. Passive Aerosol Sampler. Part II: Wind Tunnel Experiments. Aerosol Science and Technology 34: 193– 201 (2001)
 