---
title: "post-chooser"

tagnames: 'choose-screen'
author: warren
path: /feature/post-chooser.md
nid: 24228
uid: 1
cids: 
---

# post-chooser

July 28, 2020 16:12 | Tags: [choose-screen](/tag/choose-screen)

----

<div id="choose-screen">

    <div class="centered-row text-center title">
      <h2>What kind of new content do you want to create?</h1>
    </div>

    <div class="centered-row center-float">

      <a href="/post" class="btn btn-primary choose-box">
        Research Note
      </a>

      <a href="/questions/new" class="btn btn-primary choose-box">
        Question
      </a>

      <a href="/wiki/new" class="btn btn-primary choose-box">
        Wiki page
      </a>

    </div>

</div>


  <style>
    body, body>.container, body>.container>.row {
      margin: 0;
      padding: 0;
      width: 100vw;
      max-width: 100%;  }
    body>.container {
      padding-top: 0px;
    }
    .footer {
      margin: 0;
    }
    #choose-screen { 
      padding: 0;
      margin: 0;
      width: 100%;
      height: 65vh;
      background:rgba(255,255,255,1);
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
    }
    .alert {
      z-index: 600;
    }
    #choose-screen h2 {
      font-size: 1.8em;
      font-family: 'Junction Light';
      margin-bottom: 1em;
    }
    #choose-screen .center-float {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      margin-bottom: 5vw;
    }
    #choose-screen .choose-box {
      width: 240px;
      height: auto;
      margin: 10px;
      padding: 10px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
    }

    @media (max-width: 800px) {
      #choose-screen {
        height: 70vh;
      }
      #choose-screen .center-float {
        flex-flow: column nowrap;
      }
      #choose-screen .choose-box {
        width: 300px;
        height: auto;
        font-size: 1.2em;
      }
    }
    @media (max-width: 300px) {
      #choose-screen {
      }
      #choose-screen h2 {
        font-size: 1.4em;
      }
      #choose-screen .choose-box {
        width: 95vw;
        font-size: 1.2em;
      }
    }
  </style>

  <script>

    // set the map just under the navbar
    setTopPadding();
    $(window).resize(setTopPadding);
    function setTopPadding() {
      $('.body-container').css('padding-top', $('#header').css('height'));
    }


    const urlparams = window.location.search;
    const urlhash = window.location.hash;

    for (var link of document.getElementsByClassName("choose-box")) {
      var newurl = link.getAttribute("href") + urlhash + urlparams;
      link.setAttribute("href", newurl);
    }

  </script>