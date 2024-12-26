---
title: "Lego Spectrometer"\ntagnames: 'spectrometry, lego, parent:spectrometry, method, lego-spectrometer, activities:lego-spectrometer'
author: warren
path: /wiki/lego-spectrometer.md
nid: 15354
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/022/929/original/PC051869.JPG)

# Lego Spectrometer

by [stevie](../profile/stevie), [mimiss](../profile/mimiss), [warren](../profile/warren), [vidit](../profile/vidit)

December 11, 2017 21:21 | Tags: [spectrometry](../tag/spectrometry), [lego](../tag/lego), [parent:spectrometry](../tag/parent:spectrometry), [method](../tag/method), [lego-spectrometer](../tag/lego-spectrometer), [activities:lego-spectrometer](../tag/activities:lego-spectrometer)

----

This is the latest version of Public Lab's DIY Desktop Spectrometry Kit -- the Lego Spectrometer. It addresses issues of rigidity, sourcing, modularity, and image quality over previous versions.

We've been making and distributing [Do-It-Yourself spectrometers](/w//spectrometry) since 2011, and have been through [4 major kit versions](http://store.publiclab.org/collections/spectrometry) and hundreds of different community contributed modifications, new versions, changes, and more. 

## Get a kit

This is an open source kit, so you can just build your own -- but to **order parts for a kit**, visit the Public Lab Store:



<div style="margin:20px 0;">
<div id='product-component-ab665e9d252'></div>
    <script type="text/javascript">
    /*<![CDATA[*/

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }


      function loadScript() {
        if (!window.hasOwnProperty('shopify')) {
        shopify = true;
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
        }
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'publiclab.myshopify.com',
          storefrontAccessToken: 'ea3cc579c4c8dfc19b1de781173fc46e',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [499905232924],
            node: document.getElementById('product-component-ab665e9d252'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {},
      "compareAt": {
        "font-size": "12px"
      }
    }
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "footer": {
        "background-color": "#ffffff"
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {}
    }
  },
  "productSet": {
    "styles": {
      "products": {}
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/
    </script>
</div>


## Design goals

Over the years, we've identified a few really critical improvements that have been tough to solve:

* rigidity
* easy to source parts
* modularity - working together
* image quality

Our mission is to make it **easier, cheaper, and more accessible to do environmental monitoring**, and to do that as an open source, collaborative community. And of course part of that is cost -- while people build upon our kits with more expensive options and upgrades, we want the basic kit to be extremely affordable. 

## Quick start

[grid:lego-quickstart](../../tag/grid:lego-quickstart)

## Questions

[lego-spectrometer](../../tag/question:lego-spectrometer)

## Building your Lego Spectrometer

[lego-spectrometer](../../tag/activity:lego-spectrometer)

## Spectrometry activities

[spectrometry-sampling](../../tag/activity:spectrometry-sampling)

****

## Spectrometer calibration

[spectrometry-calibration](../../tag/activity:spectrometry-calibration)

****


[![tinkercad.png](https://publiclab.org/system/images/photos/000/022/935/large/tinkercad.png)](https://publiclab.org/system/images/photos/000/022/935/original/tinkercad.png)



_Tinkercad model, below_

## Parts

### 3D models

* Tinkercad: https://tinkercad.com/things/43IqCTHE7Iz
* Thingiverse: https://www.thingiverse.com/thing:2711528

### 3D brick models

Lots of great brick models are available here: https://printabrick.org/ and on http://thingiverse.com

* assorted standard bricks: https://www.thingiverse.com/thing:2626413
* holey bricks: https://www.thingiverse.com/thing:1095326
* sloped brick: https://www.thingiverse.com/thing:527185
* corner L brick: https://printabrick.org/bricks/2357
* brick w/ peg: https://printabrick.org/bricks/2458 (I used this instead of a 1x2 hole brick + a friction peg, because I couldn't find a model for the brick)

Brick dimensions are nicely described in this diagram from Wikipedia:

https://commons.wikimedia.org/wiki/File:Lego_dimensions.svg

Print files for the black cardstock insert can be [found here](https://publiclab.org/notes/abdul/10-19-2016/foldable-paper-spectrometer-instructions). 