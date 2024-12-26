---
title: "Grassroots Mapping Forum: Notes on process and automation  pt.1"\ntagnames: ''
author: mathew
path: /notes/mathew/5-10-2012/grassroots-mapping-forum-notes-process-and-automation-pt1.md
nid: 1953
uid: 4

---

![](https://publiclab.org/sites/default/files/Screen shot 2012-05-10 at 2.45.38 PM.png)

# Grassroots Mapping Forum: Notes on process and automation  pt.1

by [mathew](../profile/mathew) | May 10, 2012 23:05

May 10, 2012 23:05 | Tags: 

----

As we prepare for regular releases of Grassroots Mapping Forum, myself and [Jeff](/people/warren) have been looking at ways to simplify the process.  This note is background on our choices and their difficulties.  Part 2 gets to the functional issues of how to actually use our template system.

There are several issues in print production:
* picking a print format
* formatting properly for print
* laying out the page to be readable and aesthetically pleasing
* allocating finite print space to multiple contributors.  

Although involved, I don't consider the first three issues as particularly hard (only time consuming), because they are largely technical. Once solved, they're solved. The third issue, of allocating space between multiple contributors is the hardest part and a continuous process with no single solution.  That's why the top position at a newspaper is the editor in chief. Solutions to this issue are addressed in part 2.  the rest of this note compiles experiences and strategies used to address the first three issues.

**picking a print format**
No matter what the publication, it will only be affordable for mass production if the format is known ahead of time, and the format is chosen to conserve resources. With issue 1 of GM Forum, we picked a good print format for a large wall map-- [a full broadsheet](http://en.wikipedia.org/wiki/Broadsheet)-- and worked backwards from there. We did not, however, consider the constraints of mailing.  This lead to print costs of around $1 per forum but mailing and handling costs in excess of $5 as we mailed them out one at a time ($0.40 envelope + 1.48 shipping +$3.00 handling + transaction fees).  
***subscription model*** so we've moved to a subscription model and robomailing.  This is that white or yellow label you'll find glued to the front of a magazine delivered to your house.  By printing directly for mailing we hope to save money on the second issue.  This means, however, reserving space on the folded front and back covers for labeling, and doing a layout that won't compromise our map printing space.  We therefore are looking at two broadsheets, one as a cover for the map to protect it during shipping, and the other for the actual map.  

**Formatting and page layout**
Formatting properly for print solved by working within the print boundaries, making sure all colors are in [greyscale](http://en.wikipedia.org/wiki/Greyscale) or [CMYK formats](http://en.wikipedia.org/wiki/CMYK_color_model), and [adjusting rich blacks](http://en.wikipedia.org/wiki/Rich_black) so the colors don't bleed through.  This can all be done with scissors, glue, and a photo enlarger, or with "traditional" digital tools like Adobe Suite, Quark, or LaTEX. We used the Adobe suite for the first Forum, because it made coordinating with the printer easier.  

***Layout***
Laying out the newspaper page to be readable and aesthetically pleasing way is usually solved by laying down a strict [grid](http://en.wikipedia.org/wiki/Grid_(page_layout)).  This allows one to easily calculate the number of characters of text needed to fill a specific area, and the space that titles, images, and columns will occupy.  The page area can therefore be defined completely irrespective of content.  Smashing Magazine has [a good article](http://www.smashingmagazine.com/2008/02/11/award-winning-newspaper-designs/) on different newspaper examples.  I collect newspapers I like while traveling and reverse engineer their grids with a [typographic ruler](http://www.microtype.com/resources/mtruler.pdf).

***Typography***
Typography is an art and gets fairly complex.  I like to stick to simple typography and easy fonts.  This is complicated by trying to find open source fonts to meet both our mission and the accessibility of our process.  There are three types of fonts on your computer- fonts you have a license to use but not distribute, embedded fonts in documents that you can't edit, and open fonts that can be used and distributed.  Open fonts are the hardest to find and there is no central repository.  PLOTS uses several [League of Movable Type](http://www.theleagueofmoveabletype.com/) fonts.  By combining League fonts Raieway, ChunkFive, and the  OS typeface Gilliam, I was able to create a complete "Gill Sans" font package without using Gill Sans.  Hats off to the folks at RCA who created [sans guilt](http://ospublish.constantvzw.org/foundry/sans-guilt/) but its just not functional without bolds, obliques, etc.  It would be really nice if someone made a no-fooling Gill Sans package, now that the font is in the public domain.  For body text I'm using OFL Sorts Mill Goudy, also from the League of Movable type.

***Automation of Print and Layout***
We've looked at using [Newspaper Club](Other options we've looked at include [Newspaper Club](http://www.newspaperclub.com/) as a web layout service and printer, but they will not solve our issues of distribution cost, and are printed in the UK, while most of our subscribers are in the US.

We've also looked at using web to PDF export tools, but they don't easily deal with the issue of negotiating for space on a page, which is central.  Two good looking options are [feedjournal](http://www.feedjournal.com/Publisher.html) and [Five Filters](http://fivefilters.org/pdf-newspaper/).

Go to Part 2 on the templates used in making Grassroots Mapping Forum