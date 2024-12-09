---
title: 'Universal Hardware Registry?'
tagnames: open-hardware, hardware, units, mayan-codex
author: donblair
path: /notes/donblair/12-15-2015/universal-hardware-registry.md
nid: 12519
uid: 43651

---

![](https://publiclab.org/public/system/images/photos/000/013/344/original/codex.png)

# Universal Hardware Registry?

by [donblair](../profile/donblair) December 15, 2015 16:33

December 15, 2015 16:33 | Tags: [open-hardware](../tag/open-hardware), [hardware](../tag/hardware), [units](../tag/units), [mayan-codex](../tag/mayan-codex)

----

Hi all!

[WARNING: this idea is not fully thought through. Would love your thoughts!]

### Motivations 

One issue that arises in electronic environmental instrumentation is: calibration.  You put a device out in the world, and -- things always fall apart a little. Metal probes corrode, materials degrade, and you end up with a temperature measurement, say, that is off by X degrees.  

Actually, this problem starts even earlier:  while a lot of factories will do some basic testing to make sure that their devices are "accurate to within +/-1 Y (measurement units)", it's really best practice to check this number yourself before deploying.  And further:  you can often do a lot *better* than their stated accuracy, but finding out exactly how off you are, and calibrating.  

But okay, so you calibrate your temperature probe, and let's say that you see that, to get better measurements, you should multiply its readings by 1.5.  What do you do with that number?  Do you program the electronic instrument you're using to report values from that probe (I'M LOOKING AT YOU, ARDUINO/RIFFLE/MICROCONTROLLERS) to multiply every reading by 1.5?  This is a possibility, but it means you need to know how to program the electronic instrument / Arduino, and you need to reprogram it every time you recalibrate the (constantly corroding) instrument.

Instead, what I've often heard suggested is:  keep track of the calibration information for your temperature probe, have the electronic instrument report its "raw" value, and do all the conversations and compensations when you're doing your data analysis.  

This seems sensible, because usually it's easier to transform numbers when you're doing data analysis (you were likely setting up to do that anyway -- it's often on a full-fledged, easily scriptable computer / spreadsheet / online database, etc).  But the trouble now is that you need to keep track of the particular temperature probe that you were using, and associate your calibration number to it ... 

It gets even more interesting.  When you want to get *really* accurate and precise, you need to worry not just about individual probes, but about entire *instruments* -- the impact of which probes are hooked up to the instrument, how the instrument is situated in an enclosure, and especially, the effect of temperature on e.g. the instrumentation circuitry (timing crystal "clocks" vary with temperature, so our digitization schemes will start to drift as the temperature changes, changing the values we get) ...

### A Universal Registry?

So what you need is a way to easily store some metadata about your hardware.  In the simplest case, it might be:  "last time I measured, this temp probe's numbers ought to be measured by 1.5 to get a true reading"  

So, at minimum, you need to "name" your temperature probe -- some serial number that will be unique to it -- and you need to be able to associate some data with that name.  It won't always be a single number, it might be an equation -- some people like to do more complex corrections to achieve greater accuracy over a wider range.  

Additionally, some sensors out there are great within a certain range of parameters -- air sensors vis a vis humidity, say -- but fail outside them, and their numbers should no longer be trusted outside that range.  This sort of registry could record that fact. 

Then, you'd want to make it easy for folks who are doing data analysis to query this registry and get the "correction factor" back.  In general, making this algorithmic, so that your data corrections happen automatically, is not easy.  But at least at first version of this registry could offer plain text metadata describing your last calibration procedure.  And if someone e.g. is using R or Matlab, it could contain a snippet of code in those languages to make the corrections.

This almost makes me think that a simple software repository structure like Git, or github's gists, could accomplish what's wanted here ...

Anyway, it seems an interesting problem that could be ameliorated by online infrastructure of the sort that has been put together at Public Lab.  A universal hardware registry, where every hardware part is given a unique ID.  This could be done for cardboard enclosures, too.  For webcams that you purchase off the shelf.  We won't run out of numbers -- we can make more.  We just need to keep track of them.

I also like the idea that any object that we use as part of an instrument gets "named", and has a "history" ... this tends to encourage re-use, and to discourage us of thinking of plastic and metal and paper objects as things that we ought to just throw away.  It would be so cool to have e.g. a barcode on such objects and be able to look up some of the uses it has been put to.  If someone took the time, it could even have some information about the "embedded energy / materials" in the object, in some units that made sense "This object required 10 Liters of water to make ..."

What do y'all think?  @tonyc @mathew is there already some system like this, designed for recycled hardware, say, in existence? 

pl_codex noes ur hardware
