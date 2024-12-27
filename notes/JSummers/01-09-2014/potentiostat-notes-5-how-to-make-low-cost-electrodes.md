---
title: "Potentiostat Notes 5:  How to make low cost electrodes."

tagnames: 'water-quality, potentiostat, cheapstat, tool, wheestat, activity:potentiostat, electrodes, potentiometry, pin:wheestat'
author: JSummers
path: /notes/JSummers/01-09-2014/potentiostat-notes-5-how-to-make-low-cost-electrodes.md
nid: 9932
uid: 304279

cids: 8007,9419,9425,12109,12819,12820,12821,12822,12823,12825

---

![](https://publiclab.org/public/system/images/photos/000/002/501/original/DSCN0502.JPG)

# Potentiostat Notes 5:  How to make low cost electrodes.

by [JSummers](../../../profile/JSummers) | January 09, 2014 17:24

January 09, 2014 17:24 | Tags: [water-quality](../tag/water-quality), [potentiostat](../tag/potentiostat), [cheapstat](../tag/cheapstat), [tool](../tag/tool), [wheestat](../tag/wheestat), [activity:potentiostat](../tag/activity:potentiostat), [electrodes](../tag/electrodes), [potentiometry](../tag/potentiometry), [pin:wheestat](../tag/pin:wheestat)

----

###What I want to do
This note reviews some basics about electrodes and discusses how you can make your own at low cost.  The electrodes are for use in electrochemistry and are intended to be used with a [potentiostat](http://publiclab.org/wiki/potentiostat).
####My attempt and results
**Working and Counter Electrodes**:  People use a variety of different things for working and counter electrodes.   [Here](http://www.basinc.com/mans/EC_epsilon/EC_FAQs/faqelec.html) is a link to a web page by a company called BASi that makes electrochemistry equipment.  BASi has a really nice, concise and well written [online manual](http://www.basinc.com/mans/EC_epsilon/) that is  a good resource for things electrochemical.   
The metals in the photo below (platinum and gold foil and some silver wire) are commonly used and may not be as expensive as you think.  The two pieces of foil started out life as 1 inch squares and cost about $100 each.  That said, we usually use carbon as our working electrode because carbon does not reduce water as readily as many metals (like Pt), allowing us to go to more negative voltages.  The nice thing about platinum is that it is easy to clean.  You just throw it in concentrated nitric acid and everything that is not platinum goes away.  Mercury is supposed to allow negative voltages as well as carbon, but I don't needlessly expose myself to anything that will just make me crazier.  

[![DSCN0513.JPG](https://i.publiclab.org/system/images/photos/000/002/505/medium/DSCN0513.JPG)](https://i.publiclab.org/system/images/photos/000/002/505/original/DSCN0513.JPG)
 
Below is a photograph of some commercially available electrodes.  From left to right are a glassy carbon and platinum [electrode from BASi](http://www.basinc.com/products/ec/sve.php) and a printed carbon electrode from Pine Instruments.  The [printed electrode](http://www.pineinst.com/echem/products.asp?categoryID=31) has all three electrodes (working, counter, and reference) all on one card and these are fairly inexpensive (~$30 / 10 pack).  Notice that we have soldered wires to the card that attach to the potentiostat leads (don't buy the connecting attachment).

[![DSCN0511.JPG](https://i.publiclab.org/system/images/photos/000/002/506/medium/DSCN0511.JPG)](https://i.publiclab.org/system/images/photos/000/002/506/original/DSCN0511.JPG)

If you are on a really tight budget, I recommend graphite sticks.  We bought ours from [Graphitestore.com](http://graphitestore.com/items_list.asp/action/prod/prd_id/25/cat_id/22).  Cost is about $30 for a dozen 12" rods.  They work fine right out of the newspaper they come wrapped in, but I recommend insulating them so you don't short circuit your cell.  To insulate the rods, we dip them in candle wax.  Yup, just like dipping candles (TIP - give the carbon plenty of time to come to melted wax temperature so the wax doesn't separate when it cools).   The photo below shows three electrodes used in an electrochemical experiment.  The working and counter electrodes are carbon sticks that have been dipped in wax.  The tape shows you which end was not immersed in wax.  That is where you attach the alligator clips that lead to the potentiostat.  Of course, you need to remove the wax from the bottom surface of the carbon stick so that it contacts the test solution.  We sand it off with fine sandpaper, then polish the surface by rubbing it on paper.  Given how lazy we are about preparing our electrodes, it is kind of amazing that it works.  Of course, we are not trying to get the ultra-low detection and ultra-high reproducibility that state-of-the-art scientists are capable of.  

[![DSCN0514.JPG](https://i.publiclab.org/system/images/photos/000/002/507/medium/DSCN0514.JPG)](https://i.publiclab.org/system/images/photos/000/002/507/original/DSCN0514.JPG)

The third electrode in the figure above is the reference electrode, subject of the following discussion:

**Reference Electrode Theory**: The reference electrode (RE) needs to have a well-defined and stable electrochemical potential. While no current is supposed to pass through the RE, any current that does is not supposed to affect the voltage of the electrode.  These days, I think that most people use Ag/AgCl reference electrodes, as they are cheap and don't require a nasty pool of mercury.  An inexpensive RE can be made from a piece of silver wire coated with silver chloride and suspended in a chloride containing solution. The operating premise is that the voltage of the electrode is determined by the energy difference between the metal and the metal chloride salt.  If an electron is removed from the electrode, one atom of silver metal is converted to Ag+ and a chloride ion is picked up from solution to give AgCl.  If an electron is added to the electrode, it goes on a Ag+ ion in the AgCl layer to give another atom of silver metal and a chloride ion is lost to the solution.  In this way, the chemical composition that determines the voltage of the electrode remains constant.

**Fabricating Reference Electrodes**:  The first step in building our reference electrodes is to cut glass tube to length.  I use three millimeter ID standard wall glass tube.  To cut glass tube, you first score it using a carbide tipped tool (the red router bit in the main image) where you want it to break.  The scratch doesn't have to be deep or go all the way around the tube.  You then apply a little spit to the scratch (don't ask why,  just do it).  Grasp the tube in both hands.  Your thumbs should be about an inch apart.  The scratch on the tub should be on the surface away from your thumbs and be half way between them (that is, it should be pointed away from you).  To reiterate, the spacial order goes like this: your eyeballs, your eye protection, your thumbs, your glass tube, the scratch on the tube.  Push with your thumbs to bend the tube away from you and it will break cleanly at the scratch.  Fire polishing the ends of the tube with a propane torch should give you a rounded edge that will not cut you when you use it (I say should because we use an oxygen / natural gas setup).  As described by Yee and Chang (reference below), we use a molecular seive for the solution junction that separate the reference electrode from the test solution.  A molecular seive is a porous ceramic pellet that can be used to exchange ions with solutions.  This is the label on the bottle that we use:

[![Sieves_bottle.jpg](https://i.publiclab.org/system/images/photos/000/002/502/medium/Sieves_bottle.jpg)](https://i.publiclab.org/system/images/photos/000/002/502/original/Sieves_bottle.jpg)


The main image of this note shows several cut tubes, each with a sieve glued to the end.  We have used epoxy and super glue on separate occasions.  Both work fine.  I dip the end of the tube in glue, then stick a seive ball to it.  Ben covers the whole thing in glue and sands it down after it dries (given the high rates of leakage at the joint that I experience, Ben might have the better method).  After the glue dries, fill the tube with saturated potassium chloride solution and put it in a capped container containing this same solution.   The seive needs to stand in solution for a few days (weeks?) to equilibrate with the salt solution. 

[![DSCN0505.JPG](https://i.publiclab.org/system/images/photos/000/002/503/medium/DSCN0505.JPG)](https://i.publiclab.org/system/images/photos/000/002/503/original/DSCN0505.JPG)

Once the seive has had time to equilibrate, a silver wire is inserted in the open end of the tube, down into the KCl solution.  The wire should be thick enough to take abuse.  I use 0.64 mm diameter 99.9 % metals based wire from Alfa Aesar (cat no [43325](http://www.alfa.com/en/catalog/43325), $42 for 2 meters).  For accurate values, the silver is oxidized while immersed in chloride salt solution (if accurate voltages are not necessary, you dont need to do this.  The silver oxide that comes as standard issue on this metal will give a stable voltage). I am told the AgCl coating can be achieved by dipping the wire in bleach (need ref).  Alternatively, Inamdar, et al, recommend the following: Connecting your silver wire to the positive terminal of a 3 volt battery and immerse it in .05 M KCl solution, connect the other battery terminal to a different wire and immerse that one in the same solution, give it about ten min to form the gray-white AgCl layer and remove.     
[![DSCN0507.JPG](https://i.publiclab.org/system/images/photos/000/002/504/medium/DSCN0507.JPG)](https://i.publiclab.org/system/images/photos/000/002/504/original/DSCN0507.JPG)

The last steps are to insert the silver wire into the cell and cap it.  We use rubber septa made for 5mm NMR tubes as caps.  Just poke a hole through it with a needle and then push the wire through.  You could put glue or wax in the top, but that would make it hard to re-fill the solution.
**IMPORTANT NOTE** Store your reference electrode in a capped bottle with the seive end immersed in saturated KCl.  If it dries out, the electrode will not work (until you equilibrate it again). If some of the water evaporates you may get salt crystals inside the cell (or crusty stuff around the outside).  Not a big deal.  Just add water so that the thing doesn't dry out.

###Questions and next steps
No question, no next steps.  
###References:
- Inamdar, S. N., Bhat, M. A., Haram, S. K., "Construction of Ag/AgCl Reference Electrode from Used Felt-Tipped Pen Barrel for Undergraduate Laboratory", J. Chem. Ed., 2009, 86, 355.
- Yee, S., Chang, O. K., "A Simple Junction for Reference Electrodes", J. Chem. Ed., 1988, 65, 129