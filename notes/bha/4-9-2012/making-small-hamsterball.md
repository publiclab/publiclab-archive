---
title: 'Making a small hamsterball'
tagnames: indoor-air-quality-mapping, hamster-ball, air-quality
author: bha
path: /notes/bha/4-9-2012/making-small-hamsterball.md
nid: 1634
uid: 280

---

# Making a small hamsterball

by [bha](../profile/bha) April 09, 2012 18:42

April 09, 2012 18:42 | Tags: [indoor-air-quality-mapping](../tag/indoor-air-quality-mapping), [hamster-ball](../tag/hamster-ball), [air-quality](../tag/air-quality)

----

From the Jeff's idea, Byeongwon Ha and Sara Wylie are trying to make a small hamsterball, which powered by arduino. 

<img src="http://byeongwonha.com/Media/PLOTS/IMG_9441.JPG" width ="400" height ="300" alt="This is a set of the small hamsterball" />

<iframe width="420" height="315" src="https://www.youtube.com/embed/PSB_JT0_X_Y?rel=0" frameborder="0" allowfullscreen></iframe>
<br />
Originally, wheels are for cars. 

<iframe width="420" height="315" src="https://www.youtube.com/embed/RW1_zIgn2Nw?rel=0" frameborder="0" allowfullscreen></iframe>
<br />
But in my project, the wheels function as support parts. 

<iframe width="420" height="315" src="https://www.youtube.com/embed/HHrlofdY8XM?rel=0" frameborder="0" allowfullscreen></iframe>
<br />
Due to the size of the ball, I need to make inside parts smaller. 

Using the battery without case. 

Also, Dart Sensor(Formaldehyde sensor)needs 5V. Unfortunately, The small microcontroller, JeeNode provides only 3V. There are two options, Use RBBB Kit. http://shop.moderndevice.com/products/rbbb-kit

Or Use Lilypad. http://www.sparkfun.com/search/results?term=lilypad&what=products

Lilypad is small and thin. But the problem is that 9V is too big to use in Lilypad. Using another battery can make the size bigger. 

I think that RBBB is more reasonable.

If you have any suggestion, let me know. 
--------
We made progress.

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4477.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4479.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

By using sandblaster, we made the hamsterball translucent to make RGB led colors mixed well. But it didn't work well :(

  
<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4480.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

What is inside the hamsterball?

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4482.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

Open the hamsterball!

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4483.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

Lego, wires, a sensor... Get rid of a wheel to dissemble the machine. 

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4484.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />



<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4485.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

And divide into two parts. At first, Sensor and Arduino part. 

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4487.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

Secondly, Gear and Motor part. 

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4489.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

a cutting-edge tiny RBBB with RGB led, MQ-135 sensor and a tiny breadboard. 

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4490.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

Two gears can be interlocked by using lego blocks. 

<img src="http://byeongwonha.com/Media/PLOTS/resize/DSC_4493.jpg" width ="450" height ="300" alt="This is a set of the small hamsterball" />

RGB LED in detail. 

Problems we encountered:

To run the motor and the sensor circuit we need to use either the computer as a power source of 4 AA batteries. Instead of a 9V battery.  With the 9 V battery the servo motor did not run properly and the LED blinked. Unfortunately using the AA batteries meant that the battery pack could not fit entirely inside the hamster ball.

As we couldn't fit the battery pack into the ball so we used the wires as a leash for the hamster ball.

Using the battery pack as a leash lead to a second problem, as when the ball turns the power connection is twisted and can come loose. Once the connection is loose the power would turn off.

Findings:

1) A larger hamster ball is preferable because:

a: It is hard to get the components in an out, they have to be assembled in the ball, which isn't so hard if you use lego.

b: we can't fit the necessary batteries

2) the servo motor in test runs appears to be not powerful enough to turn the ball, a larger ball will also mean we can use a larger motor.

3) The sanded ball did not defuse the light as well as we hoped. Our test showed that you can still clearly see the two different LED through the ball.   