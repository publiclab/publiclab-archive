---
title: GSOC Report:  full-screen UI and video upload on Infragram.org
tagnames: infragram, gsoc, google, water-quality, multispectral-imaging, infragram.org, lat:1.010689, lon:9.997558, zoom:6, 2022
author: forcha
path: /notes/forcha/08-28-2022/gsoc-report-full-screen-ui-and-video-upload-on-infragram-org.md
nid: 34908
uid: 791076

---

![](https://publiclab.org/public/system/images/photos/000/047/077/original/infragram-logo-removebg-preview_%281%29.png)

# GSOC Report:  full-screen UI and video upload on Infragram.org

by [forcha](../profile/forcha) August 28, 2022 21:30

August 28, 2022 21:30 | Tags: [infragram](../tag/infragram), [gsoc](../tag/gsoc), [google](../tag/google), [water-quality](../tag/water-quality), [multispectral-imaging](../tag/multispectral-imaging), [infragram.org](../tag/infragram.org), [lat:1.010689](../tag/lat:1.010689), [lon:9.997558](../tag/lon:9.997558), [zoom:6](../tag/zoom:6), [2022](../tag/2022)

----

Name: Forcha Pearl Fri  
Gitter: forchapeatl  
Email: [forchapearl1@gmail.com](mailto:forchapearl1@gmail.com)  
Github: forchapeatl  
Location: Cameroon, Buea  
Time Zone: UTC+01:00  
Mentors: Jeffrey Yoo Warren, Tilda Udufo

## **Overview : Full-screen UI and video upload on [Infragram.org](http://Infragram.org)**

Infragram enhances environmental research capacity by providing a convenient and low cost method to monitor plant health.

During the GSOC2022 period I worked on.

- Delivering video file to the the WebGL texture for analysis.
- Added multiple resolution selection functionality on webcam streams, video files and Image files.
- Included Video controls (pause, play and sleek ) to manage and regulate video files during analysis.
- Added webcam streaming functionality on IOS browsers (Chrome and Safari ).
- Added functionality to record current analysis and download video file locally.
- Included and perform testing on the Infragram User Interface

For more understanding here is my [GSOC propoal](https://summerofcode.withgoogle.com/programs/2022/projects/rP8hthBg) and [milistone/planning issue](https://github.com/publiclab/infragram/issues/418)

###**Delivering video file to the the WebGL texture for analysis** ( Process Video File Locally)

- **Problem:** The was no option for users to monitor plant health from video files as the previous Infragram could only handle Images and Webcam streams.
- **Solution:** ![image description](https://user-images.githubusercontent.com/24577149/187096890-986dca75-f87a-4a46-bd04-3174d031e537.png)
- Initialized getusemedia API for streaming video file.
- Add functionality to upload video file and append to DOM
- Differentiated between video and Image files.
- Passed Video to WebGL texture for processing.

**Related PRs**

- [https://github.com/publiclab/infragram/pull/445](https://github.com/publiclab/infragram/pull/445 "https://github.com/publiclab/infragram/pull/445")

###**Added multiple resolution selection functionality on webcam streams, video files and Image files**

-** Problem:** A low resolution video file or Camera stream provides less details. Hence the vegetative analysis will fall on an inaccurate margin.

- Solution:
- ![image description](https://user-images.githubusercontent.com/24577149/187182253-28d94df1-4e2a-4aea-8ac1-89367309f11a.png)

Allow selection of multiple video resolutions

- Defined standard resolution attributes of canvas height and width QVGA (300 x 200) , VGA (800 x 600), HD (1920 x 1080) and FULL HD (7680 x 4320).
- Set CSS styling of canvas element at a constant 800 x 600\.
- Added function to adjust HTML width and height attributes of canvas by user selected resolution.

**Related PRs**

- [https://github.com/publiclab/infragram/pull/446](https://github.com/publiclab/infragram/pull/446)

###**Included Video controls (pause, play and sleek ) to manage and regulate video files during analysis.**

-** Problem:** Due to the addition of our new video processing functionality. There exist a need to regulate the current file under analysis.

-**Solution:**

![image description](https://user-images.githubusercontent.com/24577149/187098350-9944bea1-eaea-4013-aa02-b749e36fe07b.png)

With the help of video controls (play , pause and sleek) our problem can easily be solved.

- Created CSS styling for Sleek bar and play/Pause buttons.
- Get current video time frame and attached it to sleek bar progress.
- Attached video pause and play events to existing video file and play /pause buttons.
- Added toggle functionality between pause and play buttons to improve user experience.

**Related PR**

- [https://github.com/publiclab/infragram/pull/445](https://github.com/publiclab/infragram/pull/445)

###**Added webcam streaming functionality on IOS browsers (Chrome and Safari )**

-**Problem:** Previous WebRTC Adapter does notsupport webcam streaming on ios versions greater than 13.0.

-** Solution: ** ![image description](https://user-images.githubusercontent.com/24577149/188118409-13051ac1-c067-4dca-b605-96d68bb2ca0b.png)

- Use MediaDevices.getUserMedia() API to enable webcam streaming on IOS chrome and IOS safarri.
- Use Infagram versioning to ensure compatibility between the new and old interfaces/features

Related PRs
[https://github.com/publiclab/infragram/pull/442](https://github.com/publiclab/infragram/pull/442)

###**Added functionality to record current analysis and download video file locally.**

-**Problem:** There was a need to save the current analysis for future use.

**![image description](https://user-images.githubusercontent.com/24577149/185115265-ac810ae4-bb76-4feb-b5b1-886cdb6d56b1.png)**

![image description](https://user-images.githubusercontent.com/24577149/188629746-59ca4fab-7d24-4207-931b-89ba1fdb9029.png)

-**Solution:** Record the canvas texture and download.

**Related PRs:**

[https://github.com/publiclab/infragram/pull/446](https://github.com/publiclab/infragram/pull/446 "https://github.com/publiclab/infragram/pull/446")

###**Included and perform testing on the Infragram User Interface**
- **Problem:** We had to ensure that the Infragram UI works exactly as indented.
-**Solution:** 
![image description](https://user-images.githubusercontent.com/24577149/186757058-7b412b6a-b529-4952-b514-839ab0a94272.png)

**Related PRs**

- [https://github.com/publiclab/infragram/pull/449](https://github.com/publiclab/infragram/pull/449)
- [https://github.com/publiclab/infragram/pull/453](https://github.com/publiclab/infragram/pull/453)

##Outcome:
Infragram users (IOS inclusive) can upload videos while selecting the desired resolution for plant health analysis. The converted video can be downloaded and stored locally for future reference.

##What is left
- Include Canvas Zooming and Panning
- Add file Drag and Drop functionality
 
##**Thank You**
This work would have not been possible without the support and constructive advice  of public lab's research director @warren. Many thanks to outreachy intern @@stefq1111  for designing a user mobile friendly user interface. Finally , thanks to @@mathildaudufo and @cess at the public lab community and everyone else who helped out.

