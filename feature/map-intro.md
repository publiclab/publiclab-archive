---
nid: 23615
title: map-intro
path: public/static/feature/map-intro.md
uid: 1
tagnames: 
---

# map-intro

<div class="map-intro">
  <span style="float:right;margin-top:-14px;" onclick="$('.map-intro').toggle()"><i style="color:#888;" class="fa fa-times"></i></span>
  <h3>Public Lab by region</h3>
  <p>This is a map of people, posts, and pages on PublicLab.org. Use the upper-left menu to view nearby environmental data as well.</p>
</div>
<style>
.map-intro {
  max-width: 400px;
  position:absolute;
  bottom: 30px;
  left: 30px;
  background: white;
  padding:30px 20px 20px;
  z-index: 999;
  border-radius: 6px;
}
.map-intro p {
  color: #888;
}
@media screen and (max-width: 630px) {
  .map-intro {
    bottom: 130px;
  }
}
</style>