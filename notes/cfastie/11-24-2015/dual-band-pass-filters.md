---
title: 'Dual bandpass filters'
tagnames: ndvi, infrared, filter, infragram, plant-health, response:12134, dualband, midopt
author: cfastie
path: /notes/cfastie/11-24-2015/dual-band-pass-filters.md
nid: 12442
uid: 554

---

![](https://publiclab.org/public/system/images/photos/000/013/016/original/interferencefiltersfigure8.jpg)

# Dual bandpass filters

by [cfastie](../profile/cfastie) November 24, 2015 04:01

November 24, 2015 04:01 | Tags: [ndvi](../tag/ndvi), [infrared](../tag/infrared), [filter](../tag/filter), [infragram](../tag/infragram), [plant-health](../tag/plant-health), [response:12134](../tag/response:12134), [dualband](../tag/dualband), [midopt](../tag/midopt)

----

*Above: I don't really understand how interference filters work, and I'm pretty sure the person who drew this diagram didn't either. [source](http://www.olympusmicro.com/primer/techniques/fluorescence/interferencefilterintro.html)*

Plant health indices like NDVI are based on a comparison of the amount of visible light versus near infrared (NIR) light that is reflected from leaves. Often two cameras are used to capture separate photos of visible and NIR light. Because of the way consumer digital cameras are designed, it is possible to modify one so that a single camera can capture both visible and NIR images every time a photo is taken. Single cameras generally do a poor job separating visible and NIR light, so this approach is inferior to a dual camera system. Kites can lift two or more cameras even in light winds, but most UAVs (drones) costing less than $1000 cannot do so safely. So there is much interest in single camera NDVI systems even though results from dual camera systems are substantially more useful for plant health analysis. 

NDVI is traditionally derived from satellite data which include images in several different wavelengths. The standard bands used for NDVI are a red band between 600 and 700 nm (but usually only 50 to 90 nm wide) and an NIR band somewhere between 700 and 1000 nm.

[![Sensorbands.jpg](//i.publiclab.org/system/images/photos/000/013/017/medium/Sensorbands.jpg)](//i.publiclab.org/system/images/photos/000/013/017/original/Sensorbands.jpg)  
*Since the first LANDSAT was launched in 1972 (far left), the bands available for computing NDVI have varied. The NIR band has varied more than the red band. Both have usually been narrower bands than those typical of DIY NDVI systems made from consumer cameras (far right).* 

Consumer digital cameras capture three photos every time the shutter is pressed. Each photo captures light which is mostly a single color (red, green, or blue) but can also include a little bit of all colors. The three photos (color channels) are combined to make a normal photo.

[![CCDSpectResp.jpg](//i.publiclab.org/system/images/photos/000/013/018/medium/CCDSpectResp.jpg)](//i.publiclab.org/system/images/photos/000/013/018/original/CCDSpectResp.jpg)  
*The wavelength range of each color channel of a digital camera includes most visible wavelengths (400-700nm) but is dominated by a single color (a ~100nm range of wavelengths).*

When the filter which blocks near infrared light (which would ruin normal photos) is removed from consumer cameras, all three color channels capture NIR light in addition to the single color normally captured.

[![NikonD200_SpectralResponseCCD.jpg](//i.publiclab.org/system/images/photos/000/013/019/thumb/NikonD200_SpectralResponseCCD.jpg)](//i.publiclab.org/system/images/photos/000/013/019/original/NikonD200_SpectralResponseCCD.jpg)
[![Canon_450D_Spectral_Response.jpg](//i.publiclab.org/system/images/photos/000/013/020/thumb/Canon_450D_Spectral_Response.jpg)](//i.publiclab.org/system/images/photos/000/013/020/original/Canon_450D_Spectral_Response.jpg)  
*Two examples of the spectral sensitivity of consumer cameras after the IR block filter has been removed. All three color channels also capture NIR light to varying degrees depending on the wavelength of the NIR light.*

Photos from cameras without their IR block filters are not useful for plant health analysis because visible and NIR light is mixed in each channel. By adding a new filter, it is possible to allow only one type of light to be captured by a channel. For example, if a red filter replaces the IR block filter, no blue or green light can reach the sensor and only NIR light will be captured in the blue and green channels. The red channel will capture NIR, but also red light, and the two will be mixed in an unknown proportion. So although this modified camera can capture a mostly pure NIR image (e.g., in the blue channel) it cannot also capture a mostly pure visible image.

[![W25A_curve.jpg](//i.publiclab.org/system/images/photos/000/013/021/medium/W25A_curve.jpg)](//i.publiclab.org/system/images/photos/000/013/021/original/W25A_curve.jpg)  
*A long pass red filter (the curve for a Wratten 25 is shown) passes red light and also longer NIR wavelengths, but does not pass most green and blue light. In modified consumer cameras, the green and blue channels can capture rather pure NIR images. The red channel will capture red light, but also much NIR which will be mixed with it in a proportion dependent upon the sensitivity of the particular camera to NIR.*

Another type of filter can accomplish the same thing, but can pass much narrower bands of the desired colors. Interference or dichroic filters are not just colored glass which absorbs the unwanted wavelengths, but are constructed of thin layers of glass with reflective material between the layers. By selecting the reflective materials and thickness of each layer, all unwanted colors can be prevented from passing through. This allows not only the transmission of very narrow bands of color, but the transmission of multiple bands.

[![660850peaks.JPG](//i.publiclab.org/system/images/photos/000/013/022/medium/660850peaks.JPG)](//i.publiclab.org/system/images/photos/000/013/022/original/660850peaks.JPG)  
*Transmission curve for a dual bandpass dichroic filter. Only red light (620 to 700 nm) and mid-range NIR light (810 to 900 nm) are transmitted, and as much as 90% of those wavelengths are transmitted. No other colors can pass through this filter.*

When the dual bandpass filter above is used on a camera without its NIR block filter, the captured photos are similar to those captured with a Wratten 25 filter (figure above).  However, much narrower bands of each color (red and NIR) will be captured because no other light can enter the camera. Compared to the result with a Wratten 25 filter, the width of these bands will be much more similar to the satellite data used to derive NDVI.

Although the captured bands are narrower, the problem of mixed red and NIR light persists. The camera’s blue and green channels will receive very little visible light, so most of what they capture will be NIR. But the red channel will capture lots of both red and NIR light. 

So dual band dichroic filters solve one of the important problems with DIY NDVI systems (wavelength bands are too wide) but not the other one (visible and NIR are mixed). The filters do not pass as much light, so the fast shutter speeds desired for aerial photography may not be possible (the photo below was taken at ISO 80, 1/50 second, f/2). The primary obstacle to DIY use of dichroic filters is cost (typically $100 to $400 per filter). 


[![72IRcutAWB2k.JPG](//i.publiclab.org/system/images/photos/000/013/023/medium/72IRcutAWB2k.JPG)](//i.publiclab.org/system/images/photos/000/013/023/original/72IRcutAWB2k.JPG)  
*Normal color photo of a test scene for comparing filters. Taken with a PowerShot S110 with its internal IR block filter removed, but with another IR block filter screwed onto a filter tube in front of the lens.*

[![82_660-850CWB.JPG](//i.publiclab.org/system/images/photos/000/013/024/medium/82_660-850CWB.JPG)](//i.publiclab.org/system/images/photos/000/013/024/original/82_660-850CWB.JPG)  
*Test scene captured with a dual bandpass filter with a transmission curve similar to the one in the figure above (this one has peaks centered on 660 nm and 850 nm). Before this photo was taken, a custom white balance was performed using a piece of red origami paper in the sun.*

[![82_660-850NDVI.JPG](//i.publiclab.org/system/images/photos/000/013/025/medium/82_660-850NDVI.JPG)](//i.publiclab.org/system/images/photos/000/013/025/original/82_660-850NDVI.JPG)  
*NDVI image from the photo above. NDVI values on the color bar range from -1 to +1.*
