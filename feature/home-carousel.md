---
title: "home-carousel"

tagnames: ''
author: warren
path: /feature/home-carousel.md
nid: 11759
uid: 1
cids: 
---

# home-carousel

April 20, 2015 03:24 | Tags: 

----

<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/>
<script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>

<div style="overflow:hidden;width:100%;"><div class="carousel-front">

<div><img alt="fanboat" src="/system/images/photos/000/024/687/original/barataria.jpg" /></div>
<div><img alt="oil testing" src="/system/images/photos/000/024/688/original/gowanus.jpg" /></div>
<div><img alt="barnraising at val verde" src="/system/images/photos/000/024/686/original/valverde.jpg" /></div>
<div><img alt="newtown creek" src="/system/images/photos/000/024/689/original/newtown.jpg" /></div>
<div><img alt="beach" src="/system/images/photos/000/024/685/original/beach.jpg" /></div>

</div></div>

<script>
$(document).ready(function() {
  $('.carousel-front').slick({
autoplay: true,
fade: true,
arrows: false,
speed: 2000,
adaptiveHeight: true,
autoplaySpeed: 5000
  })

// variableWidth: true,
// lazyLoad: 'ondemand',
// 
//<div><img alt="beach mapping" src="/system/images/photos/000/009/670/original/beach.jpg" /></div>

});
</script>

<style>
.carousel-front img {
  width:100%;
}
</style>

