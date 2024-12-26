---
title: "Used the PiNoIR camera with blue filter for my experiment in order to obtain the values of NIR and Red region, now i wanted  to know  what out put we are getting is right or wrong?"\ntagnames: 'ndvi, parrot, sky, crop, drone, red, pinoir, purple, opencv, dark, orange, first-time-poster, columns, rows, compute, based, grey, yellow, pink, imageprocessing, crophealth, picam, vegetativeindex'
author: harshitha
path: /notes/harshitha/01-16-2020/used-the-pinoir-camera-with-blue-filter-for-my-experiment-in-order-to-obtain-the-values-of-nir-and-red-region-now-i-wanted-to-know-what-out-put-we-are-getting-is-right-or-wrong.md
nid: 22327
uid: 654540

---

# Used the PiNoIR camera with blue filter for my experiment in order to obtain the values of NIR and Red region, now i wanted  to know  what out put we are getting is right or wrong?

by [harshitha](../profile/harshitha) | January 16, 2020 05:42

January 16, 2020 05:42 | Tags: [ndvi](../tag/ndvi), [parrot](../tag/parrot), [sky](../tag/sky), [crop](../tag/crop), [drone](../tag/drone), [red](../tag/red), [pinoir](../tag/pinoir), [purple](../tag/purple), [opencv](../tag/opencv), [dark](../tag/dark), [orange](../tag/orange), [first-time-poster](../tag/first-time-poster), [columns](../tag/columns), [rows](../tag/rows), [compute](../tag/compute), [based](../tag/based), [grey](../tag/grey), [yellow](../tag/yellow), [pink](../tag/pink), [imageprocessing](../tag/imageprocessing), [crophealth](../tag/crophealth), [picam](../tag/picam), [vegetativeindex](../tag/vegetativeindex)

----

Hello... I am an engineering student working on a project based on NDVI calculation to monitor crop health. I used the PiNoIR camera with a blue filter for my experiment in order to obtain the values of the NIR and the Red region. I used the following code to extract the required values and to calculate the NDVI. But in the output image, the empty regions (the area where no leaves are present as shown in the below figure) and ground have higher NDVI values. The shadowed regions are shown in the range from 0.5 to 0.6\. I wanted to know whether the output is correct and what corrections can be done in the -code in order to correct the error. The code is given below.  

from PIL import Image

import numpy as np

import cv2

from cv2 import imread

from matplotlib import cm

rgb\_matrix =cv2.imread('inputimg.jpg')

w=rgb\_matrix.shape\[1\] #columns

h=rgb\_matrix.shape\[0\] #rows

print(w)

print(h)

#Compute ndvi values for each pixel

#NDVI=(NIR-R)/(NIR+R)

res=\[\]

for i in range(h):

row=\[\]

for
j in range(w):

val=rgb\_matrix\[i\]\[j\]

n=val\[2\]

r=val\[1\]

num=((int(n)-int(r))) 

den=((int(n)+int(r)))

if(den == 0):

r=0.0

else:

r=np.divide(num,den)

row.append(r)

res.append(row)

print('Done')

#based on NDVI values, give different
colors for easier identification

for i in range(h):

for j in range(w):

if(res\[i\]\[j\] \>=-1 and res\[i\]\[j\] <0):

rgb\_matrix\[i\]\[j\]=\[128,128,128\]
#grey

elif(res\[i\]\[j\]\>=0 and res\[i\]\[j\]<0.2):

rgb\_matrix\[i\]\[j\]=\[64,255,0\]
#parrot green

elif(res\[i\]\[j\]\>=0.2 and res\[i\]\[j\]<0.3):

rgb\_matrix\[i\]\[j\]=\[125,255,255\]
#yellow

elif(res\[i\]\[j\]\>=0.3 and res\[i\]\[j\]<0.4):

rgb\_matrix\[i\]\[j\]=\[0,128,128\]
#dark green

elif(res\[i\]\[j\]\>=0.4 and res\[i\]\[j\]<0.5):

rgb\_matrix\[i\]\[j\]=\[255,255,0\]
#sky blue

elif(res\[i\]\[j\]\>=0.5 and res\[i\]\[j\]<0.6):

rgb\_matrix\[i\]\[j\]=\[255,51,153\]
#purple

elif(res\[i\]\[j\]\>=0.6 and res\[i\]\[j\]<0.7):

rgb\_matrix\[i\]\[j\]=\[0,128,255\]
#orange

elif(res\[i\]\[j\]\>=0.7 and res\[i\]\[j\]<0.8):

rgb\_matrix\[i\]\[j\]=\[255,43,255\]
#pink

elif(res\[i\]\[j\]\>=0.8 and res\[i\]\[j\]<0.9):

rgb\_matrix\[i\]\[j\]=\[40,40,255\]
#red

else:

rgb\_matrix\[i\]\[j\]=\[255,0,0\]
#dark blue

cv2.imwrite('outputimg.jpg',rgb\_matrix) 

print("Completed!!") 

(Ignore the indentation errors)

  
![image description](http://input%20image)![image description](http://output%20image)