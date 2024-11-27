---
nid: 8869
title: I Got the InfraBlues - CMOS White Balance Work-around
path: public/static/notes/geobduffy/07-13-2013/i-got-the-cmos-infrablues-decrypting-custom-white-balance-settings.md
uid: 60509
tagnames: near-infrared-camera,white-balance,infragram,infrablue,cmos
---

# I Got the InfraBlues - CMOS White Balance Work-around

This is not really a song I want to be singing...
I've been testing various blue filters on a few Canon P&S cameras in collaboration with the PublicLab.org InfraBlue project and found the Canon sx230 particularly challenging to work with due to the CMOS sensor. The sx230 is fully capable of producing rich infrablue photos and NDVI images with the proper white balance  (WB) setting. However, figuring out a practical way of setting the white balance for consistent results is proving a little challenging.It seems that a very important setting in determining good or poor InfraBlue photos is WB. It's a great camera for aerial mapping and seeing as most of the cameras now available that are relatively low cost for mapping are CMOS, this is important to resolve.

With an Infrablue filter, you can't just use the normal WB auto setting or presets, you must set a custom WB.  I have successfully used white paper and a blue file folder as "white cards" with very good results on all the cameras I've tested including the sx230 but there's a catch. On the sx230, setting WB only works under certain conditions so the questions I'm trying to answer are the following:
-What are the "ideal" WB settings for infrablue NDVI on the sx230?(and probably othr CMOS cameras)
-How can we achieve consistent results?

It is still a bit unclear to me exactly what results in good or bad WB for InfraBLue on the sx230 and probably CMOS sensors in general. However, it seems that the ambient color temperature at the time of setting the custom WB, whether to a blue card or white card or grey card, has the greatest impact on the resulting InfraBlue images.
What I've discovered is that the color temperature of a very overcast day tends to result in ideal color temperature for setting custom WB on the sx230. You can immediately see the difference in the rich saturated photos with vegetation showing up in that nice orange hue. As a result the NDVI outputs are also of good quality. Setting WB in overcast conditions allows for capturing good Infrablue pictures on sunny and cloudy days, and in a variety of other lighting conditions that I've tested.
Unfortunately, if you set the WB on a sunny day, the Infrablue photos appear near monochromatic and results in unusable NDVI.
One other thing I should mention here is that when WB is set successfully and the sx230 is producing nice InfraBlues, the camera's color settings (ie natural, vivid, custom) can be used to boost the results or neutralize the saturation for that matter. If the WB is set on a sunny day this is a lost cause. No amount of additional saturation or boosting in the color settings will produce a good InfraBlue photo.

Here are some images with WB settings to depict what I am referring to in the content above. It is very obvious which photos had WB set on sunny vs cloudy days.
All pictures were taken with the sx230 using a blue card for WB, color setting was vivid, filter was Rosco #74 for all ground tests and Rosco #2007 for the aerial imagery.
It seems there are a bunch of filters that can produce good results if the camera settings are adjusted accordingly, particularly the white balance. 

Here are the settings used in Ned's Photo Monitoring Plugin:

![NDVI_LUT.jpg](https://i.publiclab.org/system/images/photos/000/000/774/medium/NDVI_LUT.jpg)



![NDVI_NedSettings.jpg](https://i.publiclab.org/system/images/photos/000/000/775/medium/NDVI_NedSettings.jpg)



![sx230_aerial_RICH.jpg](https://i.publiclab.org/system/images/photos/000/000/776/medium/sx230_aerial_RICH.jpg)

![sx230_aerial_RICH_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/000/785/medium/sx230_aerial_RICH_NDVI_Color.jpg)

![IMG_0915.JPG](https://i.publiclab.org/system/images/photos/000/000/781/medium/IMG_0915.JPG)
![IMG_0915_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/000/787/medium/IMG_0915_NDVI_Color.jpg)

![IMG_0956.JPG](https://i.publiclab.org/system/images/photos/000/000/780/medium/IMG_0956.JPG)
![IMG_0956_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/000/793/medium/IMG_0956_NDVI_Color.jpg)


![IMG_0959.JPG](https://i.publiclab.org/system/images/photos/000/000/777/medium/IMG_0959.JPG)

![IMG_0959_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/000/791/medium/IMG_0959_NDVI_Color.jpg)

![IMG_0941.JPG](https://i.publiclab.org/system/images/photos/000/000/779/medium/IMG_0941.JPG)
![IMG_0941_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/000/788/medium/IMG_0941_NDVI_Color.jpg)


![IMG_0942.JPG](https://i.publiclab.org/system/images/photos/000/000/778/medium/IMG_0942.JPG)



![IMG_0942_NDVI_Color.jpg](https://i.publiclab.org/system/images/photos/000/000/784/medium/IMG_0942_NDVI_Color.jpg)


The pattern as seen in the images above is pretty clear. "Proper" white balance settings on a Canon SX230 can result in rich Infrablue pictures and good single camera NDVI results as well.
There are many posts at flightriot.com on filter tests in addition to what is outlined above. 
I have to thank Chris Fastie and others at PublicLab for being so collaborative, informative, and just great to work with.
I hope this was helpful and I look forward to feedback and insight from PublicLab.org.


