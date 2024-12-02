---
nid: 12639
title: Tiny spectromter - Hacking a LASER barcode scanner
path: public/static/notes/shubham/02-01-2016/tiny-spectromter-hacking-a-laser-barcode-scanner.md
uid: 460486
tagnames: spectrometer,ccd,reflection,pocket,sized,barcode,scanner,mirror,front
---

# Tiny spectromter - Hacking a LASER barcode scanner

##So what is it about

As we know there are primarily two types of barcode scanners - CCD based and Laser based. CCD based essentially contains a CCD to take a digital 'pic' of the barcode and processing it. They are obsolete now, as there must be a physical contact between the scanner and the barcode. Laser based contains a optical assembly which uses a laser beam that scans the whole barcode region with a help of a rotating mirror; a focusing mirror is used to focus the beam onto a photodiode.

##Come to the point man!

So, if we can replace the rotating mirror with a piece of reflection grating (or simply paste a grating on the mirror) we already have what we need - grating, focusing mirror, detector. All we need to make is a slit, which can be easily done. I can't do it as I dont have experience of hacking electronics but I believe this is achievable by someone who could play with arduino and stuff. 

##Further questions

How expensive is it to get the front reflection mirror? Can it be made by normal silver salt dipping method (using for conventional looking mirror), and not painting it with a protective paint? I guess that would be very cheap method if its possible.

##Finding partner

Is there anyone who would like to partner with me for a project of this kind - making a pocket-sized spectrometer. I am looking for someone adept at electronics (and may be MATLAB too). 

##Image

[![IMG-20160129-WA0000.jpeg](//i.publiclab.org/system/images/photos/000/014/017/original/IMG-20160129-WA0000.jpeg)](//i.publiclab.org/system/images/photos/000/014/017/original/IMG-20160129-WA0000.jpeg)

###About the image
It shows the optical assembly. Golden colored metal is the laser, copper colored is the motor, golden colored glasses are mirrors - plane and focusing. Steel-type container in the left side of the above image contains the photodiode.