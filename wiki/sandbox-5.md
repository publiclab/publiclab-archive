---
nid: 21650
title: sandbox-5
path: public/static/wiki/sandbox-5.md
uid: 1
tagnames: content
---

# sandbox-5

Testing map:

[map:layers:content:44:-91:aqicnLayer,osmLandfillMineQuarryLayer,purpleairmarker,toxicReleaseLayer,fracTrackerMobile]

<script>
$('.leaflet-map').addClass('inline-fullwidth-content');
</script><style>
/* breaks out of #content div and presents edge-to-edge content without absolute positioning */
.inline-fullwidth-content {
  width:100vw;
  margin:0 calc((100% / 2) - 50vw);
}
@media (min-width: 992px) {
  .inline-fullwidth-content {
    margin:0 calc((133% / 2) - 50vw);
  }
}
</style>