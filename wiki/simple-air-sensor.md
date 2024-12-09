---
title: 'Simple Air Sensor'
tagnames: air-quality, air, sensors, design, open-air, air-sensing, method, air-sensors, purpleair, plantower, purple-air, particle-sensor, pms5003, simple-air-sensor
author: warren
path: /wiki/simple-air-sensor.md
nid: 18517
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/035/501/original/IMG_20190305_111130_596.jpg)

# Simple Air Sensor

by [a1ahna](../profile/a1ahna), [warren](../profile/warren), [liz](../profile/liz), [asnow](../profile/asnow)

March 11, 2019 19:29 | Tags: [air-quality](../tag/air-quality), [air](../tag/air), [sensors](../tag/sensors), [design](../tag/design), [open-air](../tag/open-air), [air-sensing](../tag/air-sensing), [method](../tag/method), [air-sensors](../tag/air-sensors), [purpleair](../tag/purpleair), [plantower](../tag/plantower), [purple-air](../tag/purple-air), [particle-sensor](../tag/particle-sensor), [pms5003](../tag/pms5003), [simple-air-sensor](../tag/simple-air-sensor)

----

**The Simple Air Sensor is an arduino-based prototyping kit for studying air quality.**   The SAS is a bare-bones air sensor, roughly modeled off of the [Purple Air](https://www2.purpleair.com/) system.  This sensor circuit uses the same type of particle detector as the #PurpleAir sensor, but only one as compared to #PurpleAir's two.  It does not include a temperature, humidity and pressure sensor while the Purple Air does.  Instead of logging results to the cloud or to the device itself, the Simple Air Sensor displays a red/yellow/green light that illustrates the PM2.5 levels it detects, but it does not convert these results into an Air Quality Index (AQI).  



This is a version that is easy to assemble (no soldering, just push wires into a breadboard), and it comes pre-programmed. We also offer this kit [assembled and ready to go, straight out of the box](https://store.publiclab.org/products/simple-air-sensor "https://store.publiclab.org/products/simple-air-sensor").


**Parts List**

1. 1 [Arduino](https://www.amazon.com/KeeYees-Module-Soldered-ATmega328P-Arduino/dp/B07H57TLRW/ref=sr_1_3?keywords=arduino%20nano%20soldered%20usb%20cable&qid=1551459803&s=gateway&sr=8-3)
2. 1 [RBG LED Light](https://www.amazon.com/EDGELEC-Tri-Color-Multicolor-Diffused-Resistors/dp/B077XD5T8P/ "https://www.amazon.com/EDGELEC-Tri-Color-Multicolor-Diffused-Resistors/dp/B077XD5T8P/")
3. 1 [Sensor](https://www.ebay.com/itm/PlanTower-High-Precision-Laser-Dust-Sensor-Module-PM1-0-PM2-5-PM10-PMS5003-G5/183583507609?hash=item2abe6e0499:g:i6IAAOSw~D5cEjKZ:rk:5:pf:1&frcectupt=true "https://www.ebay.com/itm/PlanTower-High-Precision-Laser-Dust-Sensor-Module-PM1-0-PM2-5-PM10-PMS5003-G5/183583507609?hash=item2abe6e0499:g:i6IAAOSw~D5cEjKZ:rk:5:pf:1&frcectupt=true") with cable[](https://www.ebay.com/itm/PlanTower-High-Precision-Laser-Dust-Sensor-Module-PM1-0-PM2-5-PM10-PMS5003-G5/183583507609?hash=item2abe6e0499:g:i6IAAOSw~D5cEjKZ:rk:5:pf:1&frcectupt=true)
4. 1 [Breadboard](https://www.amazon.com/gp/product/B01KKE602W/ref=ppx_yo_dt_b_asin_title_o00__o00_s00?ie=UTF8&psc=1)


<center>
<div style="margin:5px 0;">
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
            id: [1557520089197],
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
</center>

## Air Quality Monitoring

The Simple Air Sensor can be used: 

* to see immediate qualitative differences in air quality by displaying a realtime colored light readout. 
* to examine how the particulate sensor used in the closed source #PurpleAir responds to varying air conditions
* to build familiarity with the electronic components used in air sensors without having to program
* to use in groups (with 3+ sensors) to plan out placement of a PurpleAir or other more expensive sensor, with consideration for wind direction and spacing, for example.


[![55894473-266f0280-5b88-11e9-9714-f945378af5fc.gif](/i/35143)](/i/35143?s=o)

**NOTE: The colored light displayed by this sensor is not related to the [Air Quality Index (AQI) colors](https://airnow.gov/index.cfm?action=aqibasics.aqi) in any way.**


#Design Goals

Public Lab’s Simple Air Sensor is part of an effort to develop an open source project and community monitoring network that functions similarly to #PurpleAir .  Our goal is to create an open-source repository of Purple Air user’s knowledge and expertise regarding installation and troubleshooting, while creating a space for Purple Air users to communicate their findings and organize with others within the air quality monitoring network.  In this way, this kit offers an "offramp" from a corporately controlled, closed source project that lacks public forums for asking and answering questions, or for organizing and advocating around the data collected. 

This project emerged from observations that while many people share an understanding of the importance of "right to know" laws and of the purpose that transparency serves in a society, here is much less awareness of the fragility of technology, and the (inadvertent) gate-keeping role of expertise that leaves people without a pathway to "knowing how they know." This project is part of a long term effort to encourage a culture of empiricism. 

Quite a few people have built simple open source, Arduino-based devices around the cheap #plantower particulate air sensor [datasheet](http://www.aqmd.gov/docs/default-source/aq-spec/resources-page/plantower-pms5003-manual_v2-3.pdf), see: 

* @julieta's work on https://github.com/rlyehlab/eter (and [blog post](https://medium.com/read-write-participate/a-green-approach-to-open-source-in-buenos-aires-3331861a1bc1))
* @guolivar's work: https://github.com/guolivar and blog https://cona-nz.blogspot.com
* https://www.rigacci.org/wiki/doku.php/doc/appunti/hardware/raspberrypi_air


## Activities

[grid:activity:simple-air-sensor](../../tag/grid:activity:simple-air-sensor)

<a class="btn btn-primary" href="/post?tags=activity:simple-air-sensor,air-quality,simple-air-sensor,seeks:replications&title=How%20to%20do%20X">Add an activity</a>  or request an activity guide you don't see listed


## Questions


[simple-air-sensor](../../tag/question:simple-air-sensor)


****

[![IMG_20190304_170244_490.jpg](/i/30002)](/i/30002?size=original)
