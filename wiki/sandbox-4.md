---
nid: 18257
title: Sandbox 4
path: public/static/wiki/sandbox-4.md
uid: 1
tagnames: stories-test
---

# Sandbox 4

<link rel="stylesheet" href="https://idurar.github.io/vanilla-js-modal/src/modal.css" />
<script src="https://idurar.github.io/vanilla-js-modal/src/modal.js"></script>

<div id="idContent" style="display:none">
  <h3>Asking for your help</h3>
  <p>Are you a teacher in New Orleans?</p>
  <div class="container"><div class="row">
    <div class="col-6">
      <a class="btn btn-md btn-primary" href="#">Yes!</a>
    </div>
    <div class="col-6">
      <a class="btn btn-md btn-default" onClick="modal.close()">No thanks!</a>
    </div>
  </div></div>
</div>

<script>
(function() {
  setTimeout(function(){modal.open('idContent')},500)
})();
</script>


