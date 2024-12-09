---
title: Search
tagnames: search, style:nobanner, style:minimal
author: warren
path: /wiki/search.md
nid: 19093
uid: 1

---

# Search

by [mimiss](../profile/mimiss), [warren](../profile/warren)

April 17, 2019 23:20 | Tags: [search](../tag/search), [style:nobanner](../tag/style:nobanner), [style:minimal](../tag/style:minimal)

----

<div>
<script>

var search, onSearchReady = function() {
  if (!search) search = google.search.cse.element.render({div:'google'});
  console.log(search)
}

window.__gcse = {
  //parsetags: 'explicit',
  callback: onSearchReady
};

(function() {
  var cx = '008366342703784425914:_p25pf-gy_w';
  var gcse = document.createElement('script'); gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
})();

</script>

<div id="google" gname="searchBox" resultsUrl="https://publiclab.org/wiki/search" ></div>

</div>