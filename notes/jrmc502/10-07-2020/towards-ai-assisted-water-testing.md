---
title: (Towards) AI-Assisted Water Testing
tagnames: water-quality, wheestat, first-time-poster, zoom:4, ai, lat:38.833881, lon:-104.821363, machine-learning
author: jrmc502
path: /notes/jrmc502/10-07-2020/towards-ai-assisted-water-testing.md
nid: 24713
uid: 705531

---

# (Towards) AI-Assisted Water Testing

by [jrmc502](../profile/jrmc502) October 07, 2020 19:15

October 07, 2020 19:15 | Tags: [water-quality](../tag/water-quality), [wheestat](../tag/wheestat), [first-time-poster](../tag/first-time-poster), [zoom:4](../tag/zoom:4), [ai](../tag/ai), [lat:38.833881](../tag/lat:38.833881), [lon:-104.821363](../tag/lon:-104.821363), [machine-learning](../tag/machine-learning)

---------

# 

# 

# ******The****Problem**

Crisis
like [Flint](https://www.nrdc.org/stories/flint-water-crisis-everything-you-need-know) and [Newark](https://www.nrdc.org/newark-drinking-water-crisis) highlight the lack of effective large-scale water quality
assurance and the huge human cost this has. Current testing options such as [lab testing](https://www.amazon.com/-/es/prueba-plomo-potable-hogar-seguro/dp/B01LW96XBO/ref=sr_1_9?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=lead%20in%20water%20test&qid=1606348277&sr=8-9) and [test strips](https://www.amazon.com/-/es/dp/B089551H6Y/ref=sr_1_4?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=lead%20in%20water%20test&qid=1606348277&sr=8-4) are expensive, single use and heavily rely on expertise. Since water
quality changes throughout the day and the seasons, multiple tests are
necessary for a real assessment of heavy-metal contamination. Thus, there is to
date no test that can help answering the question: is there lead in my water?

**The
(idea for a) Solution**

\*\*Note this are just my initial research notes, far from a finalized working device. Wanted to share anyway even after a summer with limited resources (thanks Covid) to gauge interest, get feedback and possibly find collaborators\*\*

\*\*Highly recommend familiarizing yourself with the [WheeSat](https://publiclab.org/notes/jrmc502/10-07-2020/towards-ai-assisted-water-testing) and the [Standard Additons Method](https://www.jove.com/v/10201/method-of-standard-addition#:~:text=The%20method%20of%20standard%20addition,interfere%20with%20analyte%20measurement%20signals.&text=This%20is%20performed%20by%20adding,analyte%20solution%20to%20the%20sample.) before reading further\*\*

Deployable,
inexpensive, quick and accurate are the characteristics that makes analytical electrochemistry the branch of science that can perhaps provide an answer. Digital,
inexpensive potentiostats like the [WheeSat](https://publiclab.org/notes/jrmc502/10-07-2020/towards-ai-assisted-water-testing) (used as base for our project, shootout to Prof. Summers for being so awesome!) have proven to be effective tools at an extremely low price-point.
Additionally, (almost) ready-to-go screen printed electrodes ('SPEs') (such as [https://www.palmsens.com/product/italsens-is-hm/](https://www.palmsens.com/product/italsens-is-hm/))
virtually eliminate the need for electrode preparation and conditioning thereby eliminating yet another technical hurdle. However,
there is one last challenge remaining: Anodic Strip Voltammetry ('ASV', the technique used to measure chemicals like lead) isn't really a
term that comes up in every day parlance so in order for it to be effective, it
has to be more "user friendly": that is, doable even if you don't have a degree
in electrochemistry. That is where our work and cutting-edge advances in
embedded-AI come in. The idea is the following:

![image description](/i/41094.png "Untitled_Diagram_(1).png")

By
turning the problem of parameter optimization for generation of voltammograms
(the experimental part" of ASV) into an ML problem, we can leverage
pre-existing hardware and software solutions in a way that the need for
electrochemical knowledge is virtually eliminated.

**Turning
electrochemistry problem into an ML problem**

We
base our work partying from the standard-addition method followed by a two-step
strip voltammetry protocol. The two
steps are:

Step 1\. Pre-concentration (a very simple set-up than can be easily automated),
biasing the working electrode to +5V as and pre-concentrating for several
minutes. This potential is more than enough for all possible species detectable
with SV and SPE, including lead, mercury, arsenic (see [https://link.springer.com/article/10.1007/s00604-015-1651-0/tables/3](https://link.springer.com/article/10.1007/s00604-015-1651-0/tables/3 "https://link.springer.com/article/10.1007/s00604-015-1651-0/tables/3"))

Step2\. Strip Voltammetry.

The
idea here is that the voltammogram (the plot of interest) generated will start from pre-set parameters,
and then the resulting (potentially "bad") voltammogram will be categorized based
on features (things like shape, angle, patterns in values, etc) determined by the
pre-trained ML model. After being categorized, new, better experimental
parameters will be decided, and the experiment will be run again until a "good"
voltammogram is achieved.

![image description](/i/41096.png "overall.png")

**Machine
Learning for this Application**

While
writing a custom ML model for this application could certainly be an option, the
"smart" way is to implement and adapt open-source pre-existing ML models which for
which we then simply provide the training data set. By pre-training we can also
minimize the hardware requirements to the bare minimum which improves deployability
and cost. We consider various Google and TensorFlow available APIs, for which
the latter has some promising computationally inexpensive embedded solutions.

A
big reason why we believe this can work even with little training is because of
the sampling space. While water is an extremely complicated matrix with parameters
that vary widely, the behavior changes "predictably" and we know enough about
the main parameters to consider: conductivity, pH and temperature. Consider the
following Pourbaix Diagram:

![image description](/i/41093.png "pourbaix.png")

By far, the largest question remainin is: how many data points do we need to train the model? While some experiments are still necessary to provide an answer, the hope is that "not too many" are needed, and by implementing different, improved ML models the goal is to keep that number low, with perhaps a few hundred water samples needed to sample the whole space. The effect of instrumental drift also remains to be determined and dealt with.

A
vague statement made above is that the sequential experiment will stop once a "good"
voltammogram is achieved. This is a classic basic problem in computer vision in
which a match index can be easily computed. In general, you can ask imaging
software (like imageJ) to tell you the percentage match between two shapes. Since
a "good" voltammogram presents a bell curve at each species of interest (at
given potentials), we can implement this solution in an straightforward manner.

**Improved
Deployment: Inexpensive and wireless**

One of the main reasons why we decide to take this
embedded-AI approach was because under this scheme we don't need the deployed
system to carry heavy computations and can therefore work with a very basic,
inexpensive "brain". We pre-train the model and then we load it onto the
device, and it is then ready to go!

Now that we were working with the RaspberryPi system
we can take the next step and leave behind our computers and just take our
phones. As the python code is loaded in the RaspberryPi, we created an Android
app which connects to the Raspberry Pi and the has a button to execute the
[main.py](http://main.py) and then the results are spat our in the screen of your phone. Neat! Here are the [files](https://github.com/josecastro502/AWT) and this is the [post with the instructions](https://publiclab.org/notes/jrmc502/10-07-2020/towards-ai-assisted-water-testing-instructions).

The repository also includes a mock app ('barebones', apk file) that 'talks' with the Raspberry, in the future that is the type of interface we would like to use. This mock app only works for Android (for now) and it was developed on a Linux environment (app development isn't that friendly for your information) so may not be the easiest to adapt/implement.

![image description][1]

  [1]: /i/42085.png "mockApp.png"