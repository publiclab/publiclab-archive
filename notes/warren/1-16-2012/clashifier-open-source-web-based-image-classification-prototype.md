---
title: 'Clashifier: open source, web based image classification prototype'
tagnames: oil, image-interpretation, classification, clashifier, training, identifying-oil
author: warren
path: /notes/warren/1-16-2012/clashifier-open-source-web-based-image-classification-prototype.md
nid: 692
uid: 1

---

![](https://publiclab.org/sites/default/files/classification.png)

# Clashifier: open source, web based image classification prototype

by [warren](../profile/warren) January 16, 2012 20:54

January 16, 2012 20:54 | Tags: [oil](../tag/oil), [image-interpretation](../tag/image-interpretation), [classification](../tag/classification), [clashifier](../tag/clashifier), [training](../tag/training), [identifying-oil](../tag/identifying-oil)

----

I've been puttering around on this project for a little while (started at WhereCamp Boston last fall) called Clashifier - it's intended to help people "train" a "model" of different land types by drawing on an example image. Then it tries to extrapolate that model to color any image by the same "training"

this is completely experimental but I wrote up a simple version which does not do a very good job, but is a pretty nice starting point, and I thought some of the programming-inclined on the list might be interested, as well as some of the remote sensing people. Code can be found at:

http://github.com/jywarren/clashifier

And look at nice pictures here:

Training by "drawing" on an image: https://www.flickr.com/photos/jeffreywarren/6704268799/
Clashifier trying to colorize an image: https://www.flickr.com/photos/jeffreywarren/6704267823

As you can see it's not very good ... yet! But there is potential to, say, view whole map datasets through this, and be able to:

* quantify a certain type, like "what percent wetlands is in this picture?"
* identify things automatically, like "how many oil slicks are there here?" or maybe even "are there any crops with striperust infections?"

I've made it a bit modular so that we can add better classification approaches to improve it -- right now it's just based on "dumb" cartesian distance in each color band.

This generated quite a thread of discussion on the mailing list: https://groups.google.com/forum/#!topic/publiclaboratory/AgB-dxEQqBQ

<a href="https://www.flickr.com/photos/jeffreywarren/6704268799/" title="Clashifier interface for classifying pixels by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7160/6704268799_9e55b7c7b1.jpg" width="500" height="410" alt="Clashifier interface for classifying pixels"></a>

Another example of training: 

<a href="https://www.flickr.com/photos/jeffreywarren/6697161133/" title="Clashifier prototype by jeferonix, on Flickr"><img src="https://farm8.staticflickr.com/7001/6697161133_406e21fa4d.jpg" width="500" height="333" alt="Clashifier prototype"></a>