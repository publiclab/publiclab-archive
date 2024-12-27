---
title: "Initial experience: SX260HS with gps"

tagnames: 'kite-mapping, chdk, gps, sx260hs'
author: patcoyle
path: /notes/patcoyle/2-21-2013/initial-experiences-sx260hs-gps.md
nid: 6083
uid: 77

cids: 3527,3528,3531,3541,3542,15004

---

![](https://publiclab.org/sites/default/files/SX260HS flight tracks.jpg)

# Initial experience: SX260HS with gps

by [patcoyle](../../../profile/patcoyle) | February 21, 2013 21:55

February 21, 2013 21:55 | Tags: [kite-mapping](../tag/kite-mapping), [chdk](../tag/chdk), [gps](../tag/gps), [sx260hs](../tag/sx260hs)

----

I picked up a used Canon SX260HS which has built-in gps ($189.99 including shipping from a seller on Amazon).

I fiddled with it for a while before I learned that in continuous mode, the inital gps coordinates are applied to all the subsequent images (appears similar to focus and exposure in this mode). 

I used Mathew Lippincott's tip for CHDK installation tool, <a href="http://zenoshrdlu.com/stick/stick.html">STICK by Dave Mitchell</a>.

I remembered Conservation Drones have used Canon Powershot SX230 HS or Canon IXUS 220 HS cameras and <a href="http://conservationdrones.org/hardware/">found their tips helpful</a>. I downloaded and used their intervalometer script, informed by their links to documentation of camera set-up by <a href="http://dronemapper.com/">Dronemapper</a> who offers fee-based cloudbased autostitching of geotagged aerial imagery as does <a href="http://">Pix4D</a>.

After reviewing script setup for CHDK I got the intervalometer running and did a short flight with new Delta Levitation from <a href="http://brooxes.com/">brooxes.com</a> (Brooks Leffler confirmed the notice that it had changed ownership, and wrote, "...the new owner, Ken Conrad, is a longtime kite merchant and an early KAPer. He pushed me into designing my first kit, so it's meet and right for him to take over brooxes.com.  He'll take good care of you..."). I used the 110lb test Dacron lineon 8" hoop winder, from the Public Lab mapping kit. This is lighter than reccommended by brooxes.com, but felt like had lots of margin on the test strength.

I have included screenshot of metdata from LLNL, which is within a half mile from the flight location, since I had my first crash with a Delta. Glad I had the new camera in juice bottle rig when it came down hard in ACE Train parking lot. At flight time, metdata shows the winds at 10 meters were between 6-7 m/sec (12-15 mph) which is pretty heavy for the Delta. I had also noticed the kite wanted to tilt to the right, earlier in the flight. As I brought it in, it did so fast and I was unable to recover.

UPDATE 3-16-13: I wrote to Ken, who has taken over brooxes.com: I didn't realize it till tonight, but there was a QC problem with the Delta I recently got. I started to fly this evening and one of the outboard edges folded. I thought that odd, checked and saw the sections of the spar were separated. Then I realized that edge didn't have the pocket sewn, so the spar was loose and the sections had separated.

I think this also explains the nasty crash I had the first time I flew it. I put a <a href="http://flic.kr/s/aHsjEjVTKr">few photos up so you can see the issue</a>. 

Ken, replied: Sorry to learn of the sewing defect in your Levitation Delta, but it's a good thing you discovered it before you lifted a KAP rig! I will forward your photos and comments to our contacts at Into the Wind, I'm sure they will appreciate the feedback.

Yes I agree it was a lapse in QC, as that sewing wasn't completed. As you say, the fix is simple. If you are up for it, the quickest way to be flying your Levitation Delta again is for you to make that simple repair - mark the same location on the sleeve, remove the spar, sew the stop. For your time, I'd be glad to apply $10 credit on your next www.brooxes.com purchase. Otherwise, we'll do it - your choice. Just remove all the spars, pack the kite skin in a padded envelope and mail to us. Let us know what you decide to do.

I replied: Sewing sounds like best bet. Do you have suggestions on thread and technique? I've not done any kite sewing.

Ken replied: Sure, Pat, kite sewing is like most other sewing. The fabric can be slicker, but since the ripstop is stabilized it is easy to handle in a machine. The seam is so short you could do it by hand, but if you have a sewing machine in the house I'd use it. Either way, use 8 to 10 stitches per inch and backstitch at the ends to lock the stitching. For this kind of work Mettler Metrosene thread would be fine, Joann Fabrics and every sewing store sells this brand. You know once you take it on it won't be a big deal.

Thanks for the link to your full report at Public Laboratory. Would you believe I just received a refurbed Canon SX260 a couple days ago, which I bought from Canon USA  http://shop.usa.canon.com/webapp/wcs/stores/servlet/product_10051_10051_298647_-1/product_10051_10051_339207_-1 . So, I really enjoyed reading reading you write-up! I used some GPS logging with on RC models and am looking forward to having it with my KAPing, also that nice 25mm lens and CHDK control.

I saw the comment a guy posted to your page about his Levitation Delta leaning to the side... in my experience that doesn't sound right or good. At the times that has happened to me when I'm KAPing, I got the kite and rig down as quickly as I could and figured out what was happening, hopefully before the kite took a dive. There are some tricks to balance and stabilize an unbalanced delta, but it's always better to be sure the kite is reliable and has earned your trust before you lift your rig. I totally agree with your analysis of your kite's problem and the appropriate fix. If this kite doesn't shape up after the sewing repair, I will want to trade it out for another.
END UPDATE

The main image shows good agreement between the gps track exported from the images and from an external gps tracker (QStarz BT-Q1300S, with  1 sec interval).

I also include screenshots from <a href="http://activityworkshop.net/software/gpsprune/">GpsPrune</a>, a free, open source, cross-platform program to view and edit coordinate data like GPS tracks. It shows tracks and waypoints overlaid onto OSM maps and can convert between popular data formats, as well as being able to correlate photos with the GPS data. There is a vertical offset in the gps data from the SX260HS compared with the QStarz data and the GoogleEarth parking lot ground elevation data (~560 feet). But, in both cases the maximum height above ground level is ~170-200 feet. The low altitude results in part of the distortion in the stitched map, as do oblique imagery and user skill.

<a href="https://mapknitter.org/map/view/ace-vasco-road-train-station">Quick Mapknitter map here</a> and below:
<iframe style="border:none;" width="500" height="375" src="http://archive.publiclaboratory.org/leaflet/?tms=https://mapknitter.org/tms/ace-vasco-road-train-station/&lat=37.6972115854&lon=-121.7173834425"></iframe> 