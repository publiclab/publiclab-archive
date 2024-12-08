---
title: DIY Document Scanning
tagnames: archival, tool, open_source_hardware, diybookscanner, book-scanning
author: ajawitz
path: /notes/ajawitz/06-10-2015/diy-document-scanning.md
nid: 11966
uid: 294634

---

# DIY Document Scanning

by [ajawitz](../profile/ajawitz) June 10, 2015 18:56

June 10, 2015 18:56 | Tags: [archival](../tag/archival), [tool](../tag/tool), [open_source_hardware](../tag/open_source_hardware), [diybookscanner](../tag/diybookscanner), [book-scanning](../tag/book-scanning)

###What I want to do
  I want to share various DIY techniques for digitizing hard-copy books and documents using some of the same components used for grassroots mapping (Canon Powershot cameras with CHDK firmware)
###Why I'm Interested
  I originally posted about DIY Digitization techniques in a research note entitled [DIY Time Machine](http://publiclab.org/notes/code4maine/10-07-2013/diy-time-machine) which was intended to be a lesson plan that combined archival research with grassroots mapping field work.  Recently, it came to my attention that accessing historic documentation and imagery is often very important for other PLOTs projects.  DIY Book Scanning has had an exceptionally active community of contributors for many years and have produced literally thousands of variations so it can get very overwhelming for the uninitiated.  I am creating this research note to serve as a reference for those seeking to learn more about DIY Digitization tools as they specifically apply to citizen science campaigns.
###The DIY Book Scanner
  The center of the DIY Digitization universe has been at http://www.diybookscanner.org/ since Daniel Reetz created this[ Instructable](http://www.instructables.com/id/DIY-High-Speed-Book-Scanner-from-Trash-and-Cheap-C/) in 2009.  This began a process of Open Source Hardware development that spawned thousands of iterations from the various attempts at creating an auto page-turning mechanism (which turned out to be surprisingly difficult...) to my personal favorite...  Built by my home-town librarian in Brunswick ME out of a Lobster Trap!


[![LobsterScanner.jpg](https://i.publiclab.org/system/images/photos/000/010/284/medium/LobsterScanner.jpg)](https://i.publiclab.org/system/images/photos/000/010/284/original/LobsterScanner.jpg)


  Daniel Reetz's "standard build" eventually culminated in the version known simply as [THE ARCHIVIST](http://www.diybookscanner.org/archivist/)

[![ArchivistDSC09059_full.jpg](https://i.publiclab.org/system/images/photos/000/010/282/medium/ArchivistDSC09059_full.jpg)](https://i.publiclab.org/system/images/photos/000/010/282/original/ArchivistDSC09059_full.jpg)

  The basic elements of a DIYBookScanner build include a v-shaped "cradle" to open a books pages at a 45 degree angle, transparrent glass/plastic to flatten the pages, lighting, and two Canon Powershot camera's flashed with[ CHDK](http://chdk.wikia.com/wiki/CHDK) firmware. If this sounds familiar its because the Powershot/CHDK combo is the same camera used for the [Grassroots Mapping](http://publiclab.org/wiki/balloon-mapping) rig!
  In this case, CHDK is used to create stereoscopic, side by side images using two cameras.  

###SPREADs
  Another commonality between the DIYBookScanner project and PLOTs Grassroots Mapping is the fact that they're both 50% hardware and 50% software.  So where Grassroots Mapping has MapKnitter, DIYBookScanner has[ SPREADS](https://github.com/DIYBookScanner/spreads).  I have to say, when I first posted about the "DIY Time Machine", the SPREADS software suite was only in its infancy and looking at it now I am simply blown away!  By running SPREADS on a Raspberry Pi MiniPC, the software handles nearly EVERY component of a DIYBookScanning workflow!  As described in the "Archivist" documentation (linked to earlier) SPREADS will handle-

    1. Controlling and configuring the CHDK-capable Canon Powershot cameras.

    2. Renaming the images in order.

    3. Putting the images into a zip file with appropriate metadata.
 
    4. Preparing the images for final post-processing via Spreads Server 


[![SpreadPiControllerWithFootPedalDSC09682_1024x1024.jpg](https://i.publiclab.org/system/images/photos/000/010/283/medium/SpreadPiControllerWithFootPedalDSC09682_1024x1024.jpg)](https://i.publiclab.org/system/images/photos/000/010/283/original/SpreadPiControllerWithFootPedalDSC09682_1024x1024.jpg)



###Why PLOTsters should be interested...
  If you're doing field work in a place that exists in time and space, then chances are good that somebody else has done something similar in the same place but in a different time.  99.9% of the time such historical data will be of extraordinary significance.  The problem is that maybe 89.9% of the time, such information is locked away in some local government records dept, historical society, or small archive in non-digital hard copy (or to translate for those born after 1989...  It doesn't exist yet...).  Most government archives are required by law to provide public access but usually don't allow you to take the original documents outside the room and either don't let you use their photocopier, don't have one at all, or charge by the page. Depending on the situation these obstacles can be created on purpose to retain control over the information.  The way such regulations are written however, there is nothing that says you can't bring_ your own_ digitization equipment!  Enter the _PORTABLE_ DIY Document Scanner!  

[![scanner-small.png](https://i.publiclab.org/system/images/photos/000/010/285/medium/scanner-small.png)](https://i.publiclab.org/system/images/photos/000/010/285/original/scanner-small.png)

  This particular build can be found at http://veesmee.com/fbbs/ and shares many of the same components as the full "Archivist" build but is made entirely out of flat pieces of cardboard and transparent plastic.

[![disassembled-small.png](https://i.publiclab.org/system/images/photos/000/010/286/medium/disassembled-small.png)](https://i.publiclab.org/system/images/photos/000/010/286/original/disassembled-small.png)

  While the scanning process might not go as smoothly as it would with a full machine, and would not be a recommended means of scanning "War and Peace" in its entirety, the advantage of such construction is it can pack down into a single flat folio-

[![portfolio.png](https://i.publiclab.org/system/images/photos/000/010/287/medium/portfolio.png)](https://i.publiclab.org/system/images/photos/000/010/287/original/portfolio.png)


   Researchers need only build the scanner on-site to have their own personal document digitization service!

####Other considerations-
  One needs to be aware of what kind of documents you are likely to work with.  As the name implies, the DIYBookScanner is clearly meant to scan bound books rather than single documents.  However, this shouldn't require too much modification to the standard build.  The purpose of the v-shaped "cradle" design is not only to accomodate the book binding, but to also provide the optimum angle for imaging without glare.  So to turn a DIYBookScanner into a DIYMapScanner the only modification should be to ensure a very large cradle so the largest documents will fit on one side if need be.  Any specific questions can usually find an answer by searching the forums at http://www.diybookscanner.org/forum/ or if nothing seems to turn up the community is more than accomodating to new participants!