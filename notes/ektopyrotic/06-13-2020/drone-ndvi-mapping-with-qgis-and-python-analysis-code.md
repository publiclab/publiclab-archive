---
nid: 23838
title: Drone NDVI Mapping with QGIS and Python Analysis Code
path: public/static/notes/ektopyrotic/06-13-2020/drone-ndvi-mapping-with-qgis-and-python-analysis-code.md
uid: 699450
tagnames: 3d,ndvi,photography,infrared,photogrammetry,remote,software,near-infrared,sensing,science,plants,camera,vegetation,environment,gis,coding,python,physics,imaging,model,engineering,zoom:2,modelling,visualsfm,cacti,succulents,qgis,quantum,lat:53.330872,lon:-6.328125
---

# Drone NDVI Mapping with QGIS and Python Analysis Code

Video Link:[https://www.youtube.com/watch?v=b7xnBecL\_DQ&feature=youtu.be](https://www.youtube.com/watch?v=b7xnBecL_DQ&feature=youtu.be)Code Link: [https://github.com/MuonRay/QGISPython/blob/master/NDVIQGISWithMapLegend.py](https://github.com/MuonRay/QGISPython/blob/master/NDVIQGISWithMapLegend.py "https://github.com/MuonRay/QGISPython/blob/master/NDVIQGISWithMapLegend.py")  
  
In this work I showcase the creation and use of Near-Infrared (NIR) TIF orthomosaic datasets made using UAV (drone) photography and photogrammetry which can be analysed in QGIS using a Normalised Differential Vegetation Index (NDVI) processing in the Python console in QGIS. This is comparable to the analysis done using satellite imagery, such as Sentinel-2, however using a 4K NIR converted camera on a drone flying at a maximum height of 70 meters means that we can get up to 1cm pixel resolution on the ground, allowing for very accurate remote sensing of areas of interest.  
QGIS itself a free geomatics software package with a lot of functionality with regards to creating custom code recipes for analysis of datasets acquired using Earth-monitoring satellites and/or drones. There are a lot of interesting add-ons for QGIS, going from simple codes that allow for a cursory editing of a dataset to improve contrast or in more complex applications such as the Orfeo toolbox for machine learning. QGIS, being opensource means that there is large online community of professionals who use its features in research and industry alike and regularly update the different applications of this impressive piece of software.   
Scripts that run in QGIS are written in Python code with a particular syntax native to QGIS that allows it to call its image processing libraries, which work on TIFs with greater ease than Python standalone scripts alone would and do not create lossy conversions as experienced with Python standalone coding libraries when processing TIF data. There is also options to save the processed images with a defined dpi ratio to preserve the image quality when saving to PNG or JPEG files for viewing completed maps outside of the program.   
I would highly recommend using QGIS in conjunction with drone imaging and I am eager to explore some of the more in-depth of its applications further, in particular with respect to the classification and potential of the Orfeo machine learning toolbox.