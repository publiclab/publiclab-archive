---
nid: 12092
title: Introducing the calibration plugin for ImageJ/Fiji
path: public/static/notes/nedhorning/07-22-2015/introducing-the-calibration-plugin-for-imagej-fiji.md
uid: 133
tagnames: near-infrared-camera,ndvi,imagej,infragram,infrared-photography,response:12021,ndvi-calibrate,midopt,activity:infragram,location:blurred,activity:photo-monitoring-plugin,lat:41.449,lon:31.76
---

# Introducing the calibration plugin for ImageJ/Fiji

Last month I wrote a research note (http://publiclab.org/notes/nedhorning/06-30-2015/automating-ndvi-calibration) about progress made toward automating the calibration of digital photos for the purpose of creating NDVI images. This note reports on the next step which was to write an ImageJ/Fiji plugin to make this method more accessible. 

The plugin works quite well on both RAW and JPEG images. For RAW images I first convert to TIFF using the following dcraw command: “dcraw -r 1 1 1 1 -o 0 -q 0 -4 -T CRW_1530.DNG” where “ CRW_1530.DNG” is the name of the RAWS file created using CHDK. This seems to do a pretty good job preserving the raw pixel values. 

There are two plugins. The first calculates calibration parameters and the second applies those parameters to a directory of images. One caveat for now is that the images to be corrected must have the same camera settings (shutter speed, ISO...) as the image which was used to calculate the calibration parameters. 

The plugins have two options. The fist allows you to subtract a percentage of the NIR pixel values from the visible pixel values. This is useful since the visible channel records both visible and NIR light. There is also an option to apply a correction to remove the effect of the gamma correction that is applied by the camera when using JPEG images. The default value of 2.2 should work since it seems as if most digital images created by point-and-shoot cameras use the sRGB color space. The gamma correction at this point is quite simple (correctedValue = pow(pixelValue, gammaValue) but I may use a more accurate correction in the future. It is not necessary to use the gamma correction when using raw images. 

The first plugin assumes there is a calibration target in the image that can be used to calculate calibration coefficients and that the reflectance properties of target are known. It is recommended that at the very least a bright (although not so bright that image bands are saturated) and dark reference calibration target be in the image but additional targets can be used. I have been using tar paper for the dark target and printer paper for the bright target since I have spectral reflectance data for those materials (see http://publiclab.org/notes/nedhorning/05-01-2014/improved-diy-nir-camera-calibration for more information). 

Before running the plugin you must create a comma-separated variable (CSV) file with the reflectance values for each of the reference targets in the image that you want to use to calculate the calibration coefficients. The rows of the CSV file correspond to the targets and the columns are the target reflectance values for the visible and near-infrared wavelengths that correspond with the camera filter being used. For example the following is what my CSV file looks like.  
0.86696300, 0.90032700   
0.04748605, 0.05665055  

The first line is the bright target reflectance values corresponding to the visible band wavelengths (I used the reflectance at 660 nm) and the near-infrared wavelengths (reflectance at 850 nm) respectively. The second line are the visible and nir reflectance values for the dark target. There is no limit to the number of targets that can be used but at least two are required. The reflectance values in the CSV file will be used to calculate a linear regression between the target reflectance values and the pixels values in the image of the calibration targets. 

When you are ready to do the calibration you must first open the image to be calibrated in ImageJ and select a region of interest (ROI) for each of your reference targets using the ROI Manger in ImageJ (Analyze=>Tools=>ROI Manager). The ROIs will be used to select pixels from the image and the average pixel value will be used to calculate the linear regression with the target reflectance values saved in the CSV file. The order of the ROIs in the ROI Manager list  (the left panel in the ROI Manager window) is important. The first (top) ROI corresponds to the first line in the CSV file, the second ROI is for the second line in the CSV file and so on. The ROI selection tools are the left-most icon on the ImageJ menu bar. I usually use the rectangle selection tool but any of the tools can be used. 

Once the ROIs are selected run the first calibration plugin and the calibration parameters will be calculated. Next you can run the second plugin to apply those parameters to a directory of photos and save the floating point TIFF and or color JPEG NDVI images to your computer. 

I'm looking for people willing to test this out. It is still a beta version. I need to clean up the code and I will likely make some changes as time goes on but this version seems to be working well for me. I have been very impressed with the results – even correcting JPEG images. I uploaded two test JPEG images and the target reflectance reference file to the Github “downloads=>testData directory. On my computer it takes about 10 seconds to calibrate each photo but I'm certain that time can be reduced with more clever processing methods. 

This latest version of the Photo Monitoring plugin and the updated user guide can be downloaded from my Github page: https://github.com/nedhorning/PhotoMonitoringPlugin. Go the the “downloads” directory and download the file “Photo_Monitoring.jar”. Fiji can be downloaded from http://fiji.sc/Downloads. To install the plugin copy the “Photo_Monitoring.jar” file to the Fiji “plugins” directory. If you want to use the other functions that are part of the Photo Monitoring plugin you should also download and copy the other jar files from the plugin downloads page.

The next step for the plugin is to implement methods to compensate for different camera settings such as shutter speed, ISO and aperture so it is only necessary to to reduce the need to calibrate for each unique set of camera settings. 

My next research note will use the calibration plugins to compare a series of different filters. If I figure out an easy way to record a video I'll post a video of the calibration process. 
