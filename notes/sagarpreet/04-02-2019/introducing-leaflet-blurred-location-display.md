---
title: "Introducing Leaflet Blurred Location Display Library ."\ntagnames: 'website, blog, leaflet, location, lat:28, lon:77, location-privacy, f3'
author: sagarpreet
path: /notes/sagarpreet/04-02-2019/introducing-leaflet-blurred-location-display.md
nid: 18933
uid: 516343

---

![](https://publiclab.org/public/system/images/photos/000/030/972/original/Screenshot_2019-04-02_at_12.53.20_PM.png)

# Introducing Leaflet Blurred Location Display Library .

by [sagarpreet](../profile/sagarpreet) | April 02, 2019 08:02

April 02, 2019 08:02 | Tags: [website](../tag/website), [blog](../tag/blog), [leaflet](../tag/leaflet), [location](../tag/location), [lat:28](../tag/lat:28), [lon:77](../tag/lon:77), [location-privacy](../tag/location-privacy), [f3](../tag/f3)

----

_Hello everyone ,_

_Public Lab takes utmost care in making sure that the location of a person is exposed to the extend he/she wants . Hence we here at Public Lab are working on giving people the power to safely share their location on the web ._

_I am happy to announce two new libraries that we are working for the past few weeks that helps in achieving this vision of ours ._

_In this post , i wish to introduce these new Public Lab open source software projects on Location Privacy ._

# Leaflet Blurred Location Display :

Leaflet-blurred-location-display (LBLD) is an extension of leaflet-blurred-location (LBL) and does the following:

- Cleverly displays your location, keeping your privacy settings in mind .
- Color code the markers on the map according to the precision .
- Shows heat map to analyze number of people at different rectangles of the grid .
- Fetches data from remote API or you may pass array of coordinates directly into LBLD API .

The demo is live :

1.) Shows Public Lab users location :

[https://publiclab.github.io/leaflet-blurred-location-display/examples/index.html](https://publiclab.github.io/leaflet-blurred-location-display/examples/index.html)

2.) Shows how some locations (markers) are not shown at different zoom levels :

[https://publiclab.github.io/leaflet-blurred-location-display/examples/example.html](https://publiclab.github.io/leaflet-blurred-location-display/examples/example.html)

**So at Lower zoom levels , irrespective of the precision of coordinates you shared - your marker is visible on map . But as you zoom in to higher zoom levels , lower precision markers are removed .**

To see details on how to use the LBLD library in your project , jump over to our github page : [https://github.com/publiclab/leaflet-blurred-location-display](https://github.com/publiclab/leaflet-blurred-location-display "https://github.com/publiclab/leaflet-blurred-location-display")

### FEATURES AT GLANCE :

#### 1.) Lower the precision , Greater the privacy :

The red markers corresponds to coordinates \[23.1 , 77.1\] , \[20.1 , 76.1\] having precision of 1 . At lower zoom level 5\*\*\*\* , these red markers are visible on map . ![image description](/i/30975.png "Screenshot_2019-04-02_at_1.21.49_PM.png")

But as you zoom in to level 6 , these red markers are removed from the map whereas other high precision markers are still visible .  
![image description](/i/30976.png "Screenshot_2019-04-02_at_1.25.31_PM.png")

---------

#### 2.) Color Coding of the markers :

![image description](/i/30980.png "Screenshot_2019-04-02_at_1.30.08_PM.png")

According to the precision of the coordinates , different colors are given to the markers .

Precision = 0 , Blue colored markers .

Precision = 1 , Red colored markers .

Precision = 2 , Orange colored markers .

Precision = 3 , Green colored markers .

Precision = 4 , Black colored markers .

Precision = 5 , Grey colored markers .

Precision \>= 6 , Yellow colored markers .

Also clicking the markers shows a pop-up telling the precision :  
![image description](/i/30981.png "Screenshot_2019-04-02_at_1.31.33_PM.png")

---------

#### 3.) Heat map :

**Greater the markers in a region , Darker the color .**

We wanted to give an easy visualization power , so we implemented this grid heat map .

![image description](/i/30983.png "Screenshot_2019-04-02_at_1.43.52_PM.png")

The default color of grid is : #F3F0C0

If number of markers are in range [1,10] , the color is : #FFA500

If number of markers are in range [11,15] , the color is : #faff05

If number of markers are in range [16,25] , the color is : #FF6347

If number of markers are in range [26,35] , the color is : #FF4500

If number of markers are in range [36,45] , the color is : #FF0000

If number of markers are greater than 45 , the color is :#8B0000

NOTE : Clicking on each rectangle shows the pop-up showing number of markers in that rectangle .

---------

#### 4.) Custom API and JSON parser :

You can pass your own API link to fetch data and show it on the map . Also you need to pass a JSON parser function to parse your API . See our Github page to know more details !

---------

---------

# Blurred-Location library :

_A JavaScript library to help manage variable location privacy through a "blurred location" model ._

This library is an independent module which gives many mathematical functions that one can use on any map (not necessary Leaflet map!) .
The library is thoroughly tested using Jasmine framework .

Jump over to the github page for more details of each mathematical function : [https://github.com/publiclab/blurred-location](https://github.com/publiclab/blurred-location)

The npm link is : [https://www.npmjs.com/package/blurred-location](https://www.npmjs.com/package/blurred-location)

---------

If you have any suggestions or any doubts regarding the use of this library , kindly open an issue [here](https://github.com/publiclab/leaflet-blurred-location-display/issues "https://github.com/publiclab/leaflet-blurred-location-display/issues") .

**I personally thanks** @warren **for mentoring me and giving all these awesome ideas .**

##### Sagarpreet Chadha

#### Thank you :)