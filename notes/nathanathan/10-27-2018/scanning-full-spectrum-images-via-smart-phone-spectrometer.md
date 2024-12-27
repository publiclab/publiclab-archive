---
title: "Scanning Full Spectrum Images via Smart Phone Spectrometer"

tagnames: 'spectrometer'
author: nathanathan
path: /notes/nathanathan/10-27-2018/scanning-full-spectrum-images-via-smart-phone-spectrometer.md
nid: 17413
uid: 365600
cids: 21020,21021
---

![](https://publiclab.org/public/system/images/photos/000/027/321/original/tempsnip.png)

# Scanning Full Spectrum Images via Smart Phone Spectrometer

by [nathanathan](/profile/nathanathan) | October 27, 2018 18:50

October 27, 2018 18:50 | Tags: [spectrometer](/tag/spectrometer)

----

#### Objective

Create an image where each pixel contains values for every stop captured by a spectrometer rather than just value for red green and blue.

#### Materials
Public lab smart phone spectrometer, Moto x4 phone, and image processing software. This approach should work with other spectrometers and video capture devices too. I will eventually open source the code I'm using for this when it's cleaned up and in a more complete state.

#### Procedure

1\. Use the smart phone spectrometer to capture a video of a well illuminated scene where the spectrometer is slowly panned from the top to the bottom of the region of interest. Keeping the panning at a uniform speed will reduce the amount of distortion in the final image. A mechanical device could be useful here.

  
2\. The resulting video will likely have a warped spectrum rather than one spread across a horizontal line. For instance, this is a frame from one of my videos where the spectrum is spread across an arc:![image description](/i/27322.png "unwarped.PNG")

  
Use image processing software to correct for the warping and any rotational error so that the spectrum is completely horizontal. I used the OpenCV distortion function with parameters I determined by eyeballing the result. In future work, this step could be automated. The next image shows the undistorted spectrum with a blue line that was horizontal in the original image to illustrate the amount of warping:![image description](/i/27323.png "warped.PNG")

  
Note that there is still some warping that is causing the top of the spectrum to be wider than the bottom. The next steps I have planned are to remedy this.

  
3\. Scan through each frame of the video and append a horizontal line of pixels to the resulting image where each channel is set to the intensities of a horizontal line across the undistorted spectrum.

#### Results

Below is a reconstructed image of my kitchen window/sink.The red, blue and green channels where chosen from single steps in the corresponding sections of the spectrum. Any pixel in the image could be sampled to view a full spectrum. I applied some vertical stretching to correct for some warping caused an insufficient the number of frames.![image description](/i/27324.png "tempsnip.png")

There are some obvious misalignment in the color channels around the edges. This is mostly caused by the warping issue I mentioned in step two of the procedure. Camera shake is causing some distortion that is visible along the window frame in the center of the image. The camera I am using is also causing some issues. It cannot pick up low light levels so many areas appear completely dark that would be illuminated in a normal image (this was taken in sunlight). Furthermore, there are some gaps in the spectrum that it captures between the RGB bands. 

#### Next Steps

Try to create another image with better undistortion and a slower, steadier panning motion.