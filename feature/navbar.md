---
title: navbar
tagnames: e8e8e8
author: warren
path: /feature/navbar.md
nid: 21542
uid: 1

---

# navbar

November 20, 2019 22:43 | Tags: [e8e8e8](../tag/e8e8e8)

----

      <li class="nav-item">
          <a class="nav-link topics-nav-link" href="javascript:void(0);">Topics</a>

<div class="topicsNav d-none">
  <h3 style="color:#444;">Topics</h3>

  <div class="row">
    <div class="col-md-3">
      <ul>

        <li><a href="/tag/agriculture">Agriculture</a></li>
        <li><a href="/tag/air-quality">Air quality</a></li>
        <li><a href="/tag/climate-change">Climate change</a></li>
        <li><a href="/tag/disaster-response">Disaster response</a></li>
        <li><a href="/tag/education">Education</a></li>

      </ul>
    </div>
    <div class="col-md-3">
      <ul>

        <li><a href="/tag/indoor-air-quality">Indoor air quality</a></li>
        <li><a href="/tag/land-use">Land use</a></li>
        <li><a href="/tag/law-and-policy">Law and policy</a></li>
        <li><a href="/tag/lead">Lead</a></li>
        <li><a href="/tag/microplastics">Microplastics</a></li>

      </ul>
    </div>
    <div class="col-md-3">
      <ul>

        <li><a href="/tag/noise">Noise</a></li>
        <li><a href="/tag/odor">Odor</a></li>
        <li><a href="/tag/oil-and-gas">Oil and gas</a></li>
        <li><a href="/tag/organizing">Organizing</a></li>
        <li><a href="/tag/soil">Soil</a></li>

      </ul>
    </div>
    <div class="col-md-3">
      <ul>

        <li><a href="/tag/stormwater">Stormwater</a></li>
        <li><a href="/tag/transportation">Transportation </a></li>
        <li><a href="/tag/waste">Waste</a></li>
        <li><a href="/tag/water-quality">Water quality</a></li>
        <li><a href="/tag/wetlands">Wetlands</a></li>

      </ul>
    </div>
  </div>

    <div class="row">
      <div class="col-md-12">
        <p style="text-align:center;padding-top:30px;padding-bottom:30px;">
          <a href="javascript:void(0);" onclick="$('.topicsNav').toggleClass('d-sm-block');">close</a> | 
          <a  style="color:#222;text-decoration:underline;" href="/topics">All topics &raquo;</a>
        </p>
      </div>
    </div>

          </div>
        </li>

<!-- for mobile, just anchor link down to footer, or to /topics, and keep the list hidden at narrow widths -->
<script>
$('.topics-nav-link').click(function topicsToggle(e) {
  if ($(window).width() < 768) {
    window.location.hash = "#footer-topics";
    $('.navbar-toggler').click();
  } else {
    $('.topicsNav').toggleClass('d-sm-block');
  }
  e.preventDefault();
});
</script>

<style>
.topicsNav {
  width: 100%;
  position: absolute;
  left: 0;
  margin-top: 10px;
  background: #e8e8e8;
  padding: 20px;
}
.topicsNav h3 {
  clear: both;
  text-align: center;
  padding: 20px;
}
.topicsNav a {
  color: #888;
}
.topicsNav .navbar-topics-footer {
  padding: 20px;
}
.topicsNav h6 a {
  color: #444;
}
.topicsNav .col-md-3 h6 {
  color: black;
}
.topicsNav .col-md-3 li a{
  color: #808080;
}
.topicsNav .col-md-3 li {
    margin-top: 2px;
    padding: 0;
    list-style: none;
}
</style>
