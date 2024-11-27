---
nid: 19093
title: Search
path: public/static/wiki/search.md
uid: 1
tagnames: search,style:nobanner,style:minimal
---

# Search

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