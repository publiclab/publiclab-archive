---
title: Slider Front Page
tagnames: 
author: warren
path: /wiki/slider-front-page.md
nid: 177
uid: 1

---

# Slider Front Page

by [warren](../profile/warren)

April 18, 2011 14:09 | Tags: 

----

<div id="slider">

    <img src="/sites/default/files/plots-header.png" alt="" />

    <a href="/tool/near-infrared-camera">
      <div class="slider_text">
        <h2>Infrared vegetation monitoring</h2>
        <p>Balloon mapping with DIY infrared cameras</p>
      </div>
      <img src="http://www.publiclaboratory.org/sites/default/files/imagecache/default/parts-and-crafts-nrg_0.jpg" alt="" />
    </a>

</div>

<script type="text/javascript" src="/scripts/jquery.cycle.all.min.js"></script>

<script type="text/javascript">
$(document).ready(function() {
    $('#slider').cycle({ 
        fx: 'scrollDown', 
        speed: 3000,
        pause: 3,
    });
})
</script>

<style>
#slider {
    height:375px;
    padding: 0;  
    margin:  0;  
}
#slider img {
    top:  0; 
    left: 0 
}
#slider a, #slider img {
    height:375px;
}
.slider_text {
    position:absolute;
    left:20px;
    bottom:20px;
    display:block;
    padding:12px;
    color:white;
    background:#222;
    filter:alpha(opacity=70);   /* Internet Explorer       */
    -moz-opacity:0.7;           /* Mozilla 1.6 and below   */
    opacity: 0.7;               /* newer Mozilla and CSS-3 */
}
.slider_text p {
    margin:0;
}
#slider a {
    text-decoration:none;
}
</style>