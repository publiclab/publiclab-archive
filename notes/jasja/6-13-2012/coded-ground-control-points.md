---
title: 'Coded ground control points'
tagnames: balloon-mapping, kite-mapping, ground-control-points, registration, activity:aerial-photography, activity:ground-control-points, activity:aerial-mapping
author: Jasja
path: /notes/jasja/6-13-2012/coded-ground-control-points.md
nid: 2476
uid: 835

---

![](https://publiclab.org/sites/default/files/coded_GCP.jpg)

# Coded ground control points

by [Jasja](../profile/Jasja) June 13, 2012 21:26

June 13, 2012 21:26 | Tags: [balloon-mapping](../tag/balloon-mapping), [kite-mapping](../tag/kite-mapping), [ground-control-points](../tag/ground-control-points), [registration](../tag/registration), [activity:aerial-photography](../tag/activity:aerial-photography), [activity:ground-control-points](../tag/activity:ground-control-points), [activity:aerial-mapping](../tag/activity:aerial-mapping)

----

Ground control point targets are useful to stitch photos on uniform or repeatitive landscapes. They can be made from cardbord plates, cloth etc. See for example <a href="http://publiclaboratory.org/wiki/mapping-curriculum-ground-control-point-targets">this note</a>.

However, on very uniform areas, even ground control points may not help: photos of green patches of grass with identical control points are hard to tell apart. In such situations, a coded ground control point marker comes in handy. 

A simple approach I thought up over coffee with Thomas Groen is to make a paper sheet with a 3x3 grid of black-or-white squares, forming a binary code of 9 positions. The codes in the photo above for example are numbers 000.000.001 and 000.000.101 (when white = 1, black = 0).

Paper sheets with codes can be generated easily with some easy code, such as this script for <a href="http://processing.org/">Processing</a>:
 
<pre>
<span style="color: #7E7E7E;">//&nbsp;Coded&nbsp;ground&nbsp;control&nbsp;points&nbsp;//</span>

<span style="color: #CC6600;">import</span> processing.pdf.*;

<span style="color: #CC6600;">size</span> (297, 420,PDF, <span style="color: #006699;">"GCPs.pdf"</span>); <span style="color: #7E7E7E;">// setup for A3 standard sheets</span>
<span style="color: #7E7E7E;">//&nbsp;load&nbsp;font'</span>
<span style="color: #CC6600;">PFont</span> font;
font&nbsp;=&nbsp;<span style="color: #CC6600;">loadFont</span>(<span style="color: #006699;">"Georgia-12.vlw"</span>);

<span style="color: #CC6600;">int</span> achtergrond = 200; <span style="color: #7E7E7E;">// sets background</span>

<span style="color: #CC6600;">for</span> (<span style="color: #CC6600;">int</span> teller = 0; teller <= 98; teller = teller +1) { 

&nbsp;&nbsp;<span style="color: #CC6600;">background</span>(achtergrond);
&nbsp;&nbsp;<span style="color: #CC6600;">String</span> <span style="color: #CC6600;">str</span> = <span style="color: #CC6600;">binary</span>(teller, 9);
&nbsp;&nbsp;<span style="color: #CC6600;">println</span>(<span style="color: #CC6600;">str</span>);
&nbsp;&nbsp;<span style="color: #CC6600;">for</span> (<span style="color: #CC6600;">int</span> i = 0; i < 3; i = i+1) {
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #CC6600;">for</span> (<span style="color: #CC6600;">int</span> j = 0; j < 3; j = j+1) {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #CC6600;">stroke</span>(achtergrond);
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #CC6600;">fill</span>(achtergrond*(<span style="color: #CC6600;">int</span>(<span style="color: #CC6600;">str</span>.<span style="color: #CC6600;">charAt</span>(j+i*3))-48));
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #CC6600;">rect</span>(4+96*j, 4+96*i, 95, 95);
&nbsp;&nbsp;&nbsp;&nbsp;}
&nbsp;&nbsp;}
&nbsp;&nbsp;<span style="color: #7E7E7E;">// draw scalebar of 250 mm long</span>
&nbsp;&nbsp;<span style="color: #CC6600;">fill</span>(1, 1, 1);
&nbsp;&nbsp;<span style="color: #CC6600;">stroke</span>(1);
&nbsp;&nbsp;<span style="color: #CC6600;">rect</span>(23, 308, 250, 94);

&nbsp;&nbsp;<span style="color: #7E7E7E;">// draw cross for GPS capture"</span>
&nbsp;&nbsp;<span style="color: #CC6600;">stroke</span> (achtergrond);
&nbsp;&nbsp;<span style="color: #CC6600;">strokeWeight</span>(2);
&nbsp;&nbsp;<span style="color: #CC6600;">line</span>(149-20,354,149+20,354);
&nbsp;&nbsp;<span style="color: #CC6600;">line</span> (149, 354-20,149, 354+20);

&nbsp;&nbsp;<span style="color: #7E7E7E;">// add text </span>
&nbsp;&nbsp;<span style="color: #CC6600;">fill</span>(100);
&nbsp;&nbsp;<span style="color: #CC6600;">textFont</span>(font, 6);
&nbsp;&nbsp;<span style="color: #CC6600;">text</span>(<span style="color: #006699;">"jasjavliegt.nl "</span>, 40,330);
&nbsp;&nbsp;<span style="color: #CC6600;">text</span>(<span style="color: #006699;">"Nr. "</span>+teller, 40,350);
PGraphicsPDF&nbsp;pdf&nbsp;=&nbsp;(PGraphicsPDF)&nbsp;g;&nbsp;&nbsp;<span style="color: #7E7E7E;">// Get the renderer</span>
&nbsp;pdf.nextPage();&nbsp;&nbsp;<span style="color: #7E7E7E;">// Tell it to go to the next page</span>
}
<span style="color: #CC6600;">exit</span>();

</pre>