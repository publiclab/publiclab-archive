---
nid: 11196
title: Options for Low-Cost LIDAR 
path: public/static/notes/code4maine/09-28-2014/options-for-low-cost-lidar.md
uid: 294634
tagnames: sensors,lidar,opendronemap
---

# Options for Low-Cost LIDAR 

###What I want to do
 I want to research the current availability of low-cost [LIDAR](http://en.wikipedia.org/wiki/Lidar) sensors and their potential integration into existing citizen science/grassroots mapping efforts.

###Why I'm interested
  The use of laser rangefinding devices has produced nothing short of a revolution in fields ranging from archeology to land use and geology.  For example, high-end expeditions in places like Angkor Wat and Guatemala have used LIDAR to uncover ancient structures that have been hidden beneath the rainforest for thousands of years.  Yet, like many other research methods, only well-funded institutions have been able to afford the underlying technology.
  It is precisely such characteristics that make this technology ripe for disruption!

###My attempt and results
  A quick search through past PLOTS discussions reveals that such a capability is indeed highly desirable across the spectrum of citizen science, but until recently it seems that the phrase "affordable LIDAR" was somewhat relative.  For example a "[hobby LIDAR](http://www.miremadi.com/styled/LDR-M10.html)" has been available for roughly $400, and this may indeed make the technology accessible to far more organizations than would have previously, but my definition of "accessible technology" would require a price range of under $100.

  Sure enough, it does indeed appear that such a device called LIDAR-Lite successfully met its [crowdfunding goal](http://www.dragoninnovation.com/projects/32-lidar-lite-by-pulsedlight) and will soon be available for $72 at https://store.3drobotics.com/products/lidar-lite/.

  According to a post on [Hackaday](http://hackaday.com/2014/01/23/lidar-with-leds-for-under-100/) 


  >it can sense objects out to 40 meters with 5% 95% accuracy, communicates  to any microcontroller over an I2C bus, and is small enough to fit inside any project.

###Questions and next steps
I am interested in hearing if others have looked into such a capability, if other options are available, and/or how it might be integrated into existing projects.  The fact that the LIDAR-Lite communicates over the i2C bus means it should be feasible to incorporate into my [design for a low-cost mapping UAV](http://publiclab.org/notes/code4maine/08-05-2014/aerial-mapping-drone-for-under-60) alongside the camera.  As such a vehicle can be programmed to fly a plotted flight plan, it potentially allows for more precise calibration between LIDAR, Infrared and standard imagery.

  LIDAR can also be incorporated into non-powered mapping platforms such as balloons or kites though it would entail the addition of a MiniPC or microcontroller and the additional weight required by batterries etc... 

###UPDATE-6/29/15
  The LiDAR-LITE is now widely available for less than $100 through many different outlets.  I should be receiving one by tomorrow 6/30/15!
   Since this note was originally published, I have been developing a quadrotor to serve as a test bed for various sensors and components that will eventually be incorporated into my build for a low-cost flying wing UAV.  The quadcopter was far easier to build as the platform's popularity produces more readily available components and documentation.  Nevertheless, it has taken me almost a full year to get to the point I am at now.
  At present, the quad is equipped with a full GPS navigation system running on a Flip32+ Flight Controller (incl. Magnetometer and Digital Compass).  A 3D Printed camera gimbal can be automatically set to keep the Mobius Action Cam positioned downward.  
[![Quadradome.jpg](https://i.publiclab.org/system/images/photos/000/010/468/medium/Quadradome.jpg)](https://i.publiclab.org/system/images/photos/000/010/468/original/Quadradome.jpg)

   All that remains before it should be ready for first flight is a new RC Transmitter as my Dx5e is too limited in its controls.  After I achieve first flight, I intend to create a detailed research note with step by step instructions aimed at non-experts so they can hopefully avoid a full year of trial and error of their own!

  Platforms I will be testing include the LiDAR-LITE with a Raspberry Pi A+, Open Source transmitter firmware including OpenTX and OpenLRS as well as various aerial mapping configurations with the Mobius ActionCam.

  Fingers Crossed that the first flight isnt also the quad's first crash!
