---
title: GSoC Submission for Leaflet Blurred Location Part 2
tagnames: gsoc, leaflet, soc, gsoc-2018-final, soc-2018-final-report
author: mridulnagpal
path: /notes/mridulnagpal/08-10-2018/gsoc-submission-for-leaflet-blurred-location-part-2.md
nid: 16906
uid: 497953

---

![](https://publiclab.org/public/system/images/photos/000/026/143/original/Display.png)

# GSoC Submission for Leaflet Blurred Location Part 2

by [mridulnagpal](../profile/mridulnagpal) August 10, 2018 14:57

August 10, 2018 14:57 | Tags: [gsoc](../tag/gsoc), [leaflet](../tag/leaflet), [soc](../tag/soc), [gsoc-2018-final](../tag/gsoc-2018-final), [soc-2018-final-report](../tag/soc-2018-final-report)

----

### Project proposal: [https://publiclab.org/notes/mridulnagpal/01-22-2018/leaflet-blurred-location](https://publiclab.org/notes/mridulnagpal/01-22-2018/leaflet-blurred-location)[](https://publiclab.org/notes/mridulnagpal/03-01-2017/map-of-projects)

### Organisation: PublicLab ([publiclab.org](http://publiclab.org))

### Project repo: [https://github.com/publiclab/leaflet-blurred-location-display](https://github.com/publiclab/leaflet-blurred-location/)

### Commit History:

Link to all the commits I have made:

[https://github.com/publiclab/leaflet-blurred-location-display/pulls?q=is%3Apr+is%3Aclosed](https://github.com/publiclab/leaflet-blurred-location-display/pulls?q=is%3Apr+is%3Aclosed)

[https://github.com/publiclab/leaflet-blurred-location/commits?author=mridulnagpal](https://github.com/publiclab/leaflet-blurred-location/commits?author=mridulnagpal&before=d8a1e75a3d25baec406b2109a881b472d5ad1b24+35)

### Language: Javascript

### Working demo:

[https://publiclab.github.io/leaflet-blurred-location/examples/](https://publiclab.github.io/leaflet-blurred-location/examples/)

[https://publiclab.github.io/leaflet-blurred-location-display/examples/](https://publiclab.github.io/leaflet-blurred-location/examples/)

### Project Description

This project is an extension of last year's GSoC project. In this summer I have added various new functionalities to the existing leaflet-blurred-location library and created another library to display locations saved by leaflet-blurred-location in a tricky way so that no information is leaked without the user's permission. This project involved refactoring of the existing code and adding CodeClimate to the repository as well. New UI tools were also added to leaflet-blurred-location along with resolving some previous bugs as well.   

For leaflet-blurred-location-display, almost the whole repository was set up and integrated with leaflet-blurred-location to provide a demo. The demo for leaflet-blurred-location-display is live with all the features of leaflet-blurred-location as well.

## Options  
  
### Basic  
  
| Option         | Use                | Usage (Default)                  |  
|----------------|--------------------|----------------------------------|  
| currPrecision       |To set the current precision for extraction from the map|\`options.currPrecision = 2\`|  
|list (testing)            |To input all the locations saved on the map along with a pop up text|\`options.locations = \[\[35.3, 39.2, "Popup Text"\],\[35.3554, 39.2623, "Popup Text"\]\]\`|  
|currBoxUpperLeft           |To set location of upper left corner of selected square|\`options.currBoxUpperLeft = \[35.35, 39.26\]\`|  
  
  
### API  
  
| Methods         | Use                | Usage (Example)|  
|-----------------|--------------------|----------------|  
|`getBlurredLocations()`       | Used to get the locations fit to display according to given map parameters.|  `blurredLocationDisplay.getBlurredLocations() //This would return the list of all locations fit to display`|  
|`showPopUp()`       | Used to show a pop up for all the locations fit to be displayed. The pop up text will be mentioned in the input itself|`blurredLocationDisplay.showPopUp() //This would show pop ups of all locations fit to display`|  
  
  
### Features  
  
| Feature         | Use                                                        |  
|-----------------|------------------------------------------------------------|  
| **'Blurred' location display** | Your exact location won't be posted, only the grid square it falls within will be shown till the level of precision you have set to your location.|  
| **'Blurred' human-readable location display** | The name of the location you added will be displayed till the level of precision you set as the extent of address depends on the precision level you currently are on. For instance for precision 0 only the country name will be provided as you zoom in precision will increase and so will the address details, such as state, city, etc. |