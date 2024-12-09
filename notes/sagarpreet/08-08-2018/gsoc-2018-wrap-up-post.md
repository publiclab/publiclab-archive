---
title: 'GSoC 2018 Wrap-Up Post'
tagnames: gsoc-2018-final, soc-2018-final, soc-2018-final-report
author: sagarpreet
path: /notes/sagarpreet/08-08-2018/gsoc-2018-wrap-up-post.md
nid: 16883
uid: 516343

---

![](https://publiclab.org/public/system/images/photos/000/026/104/original/Screen_Shot_2018-08-08_at_8.08.33_PM.png)

# GSoC 2018 Wrap-Up Post

by [sagarpreet](../profile/sagarpreet) August 08, 2018 14:39

August 08, 2018 14:39 | Tags: [gsoc-2018-final](../tag/gsoc-2018-final), [soc-2018-final](../tag/soc-2018-final), [soc-2018-final-report](../tag/soc-2018-final-report)

----

Finally, the GSoC coding period is coming to an end as I finish up my project. In this post I aim to summarize all of the work I have done during the past months.

# GSoC 2018 Work Product - Sagarpreet Chadha

* **Student** : Sagarpreet Chadha
* **Github** : [sagarpreet-chadha](http://github.com/sagarpreet-chadha)
* **Organisation** : [PublicLab](https://publiclab.org) 

# Final deliverables :

## Leaflet-Environmental-Layers

This library is a made upon the very popular LeafletJS Library and using this we can choose combinations of layers to display on map . Each layers gives some environment - related information on map in form of small markers . Each marker on clicking shows pop-up with detailed information .

* **Repository** : [Leaflet-Environmental-Layers](https://github.com/publiclab/leaflet-environmental-layers)
* **Detailed Blog-Post** : 1. [Part 1](https://publiclab.org/notes/sagarpreet/06-06-2018/leaflet-environmental-layer-library)  2. [Part 2](https://publiclab.org/notes/sagarpreet/07-16-2018/leaflet-environmental-layer-library-part-2)
* **Demo** :  [publiclab.github.io/leaflet-environmental-layers/](https://publiclab.github.io/leaflet-environmental-layers/example/index.html#3/43.00/-46.23)
* **npm** : [www.npmjs.com/package/leaflet-environmental-layers](https://www.npmjs.com/package/leaflet-environmental-layers)

## Integration of Leaflet-Environmental-Layers to mapknitter and plots2 projects 

This library is integrated to the front-page of [mapknitter.org/](http://mapknitter.org/) and to various places in [publiclab.org](https://publiclab.org) .
List of places where this library is used and corresponding github Pull Requests : 

* [mapknitter.org/](http://mapknitter.org/) 
  *  [mapknitter/issues/268](https://github.com/publiclab/mapknitter/issues/268)
  
* [publiclab.org/maps/](http://publiclab.org/maps/)
  * [plots2/issues/3165](https://github.com/publiclab/plots2/issues/3165)
  
* [publiclab.org/people/](http://publiclab.org/people/)
  * [plots2/pull/3214](https://github.com/publiclab/plots2/pull/3214)
  
* [publiclab.org/profile/warren](https://publiclab.org/profile/warren)
  * [plots2/pull/3211](https://github.com/publiclab/plots2/pull/3211)
  
* [publiclab.org/wiki/inline-maps](https://publiclab.org/wiki/inline-maps#2/42.0/-32.3)
  * [plots2/pull/3213](https://github.com/publiclab/plots2/pull/3213)

# List of contributions

  With over **86000 lines** of code and **122 commits** , and a lot of debugging over the past few months, I have gained a lot more knowledge about the codebase and internal workings of PublicLab . Here is a list of the different repositories with the commits I’ve made -
  
  * [PublicLab/Leaflet-Environmental-Layers](https://github.com/publiclab/leaflet-environmental-layers/commits?author=sagarpreet-chadha) 
  * [PublicLab/Plots2](https://github.com/publiclab/plots2/commits?author=sagarpreet-chadha)
  * [PublicLab/Mapknitter](https://github.com/publiclab/mapknitter/commits?author=sagarpreet-chadha)

# What’s left? 

Although most of my work is complete and playable, there are still a few things pending : 

1. Ability to generate permalink with url hash of currently enabled layers , which is already in progress [here](https://github.com/publiclab/leaflet-environmental-layers/issues/33) .
2. Caching of request response somewhere to reduce load on API's server , [leaflet-environmental-layers/issues/44](https://github.com/publiclab/leaflet-environmental-layers/issues/44) .

# My experience :

The community has been extremely helpful and the experience was more than I could have asked for .

The mentors are really supportive and helpful and are full of amazing ideas .

I would definitely love to keep up my involvement with PublicLab as a contributor and hopefully as a mentor as well, for the upcoming Google Code In .

# About Project :

This project is created as a part of Google Summer of Code program by [Sagarpreet Chadha](http://github.com/sagarpreet-chadha) .


**Mentors for this project :**

• Stevie Lewis

• jywarren

• Bronwen Densmore

#### Thank you !

