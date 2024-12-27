---
title: "Infragram Point & Shoot; Time-lapse Difficulty"

tagnames: 'ndvi, time-lapse, infragram, timelapse, code, mobius, infragram-point-shoot, script, error'
author: balsip
path: /notes/balsip/04-09-2016/infragram-point-shoot-time-lapse-difficulty.md
nid: 12947
uid: 422670
cids: 14171,14174,14229
---

![](https://publiclab.org/public/system/images/photos/000/015/432/original/IMG_5069.jpg)

# Infragram Point & Shoot; Time-lapse Difficulty

by [balsip](/profile/balsip) | April 09, 2016 04:47

April 09, 2016 04:47 | Tags: [ndvi](/tag/ndvi), [time-lapse](/tag/time-lapse), [infragram](/tag/infragram), [timelapse](/tag/timelapse), [code](/tag/code), [mobius](/tag/mobius), [infragram-point-shoot](/tag/infragram-point-shoot), [script](/tag/script), [error](/tag/error)

----

I would like to set up the code on the camera to shoot on a time-lapse interval (120 seconds).

It will shoot a couple pictures at the specific interval, but will then shut off (batter has power).

Not sure what in the code is wrong, or if the problem lies elsewhere. I'm posting the code below if anyone has a minute to check it out. It would be much appreciated.

CODE:
**********************
Date time=[2016/03/24 13:10:00];date time setting,format yyyy/mm/dd hh:mm:ss

Video Mode 1 resolution=[0];Movie resolution setting,0:1080p(Large AOV),1:1080p(Small AOV),2:720p(Large AOV),3:720p(Small AOV)
Video Mode 1 Frame Rate=[2];Movie frame rate setting,1:60fps (only for 720p small AOV), 2:30fps
Video Mode 2 resolution=[3];Movie resolution setting,0:1080p(Large AOV),1:1080p(Small AOV),2:720p(Large AOV),3:720p(Small AOV)
Video Mode 2 Frame Rate=[1];Movie frame rate setting,1:60fps (only for 720p small AOV), 2:30fps

Photo Mode Capture Size=[0];set photo size,0:2304x1536,1:1920x1080,2:1280x720
Set Time Lapse Shooting=[8],0:off,1:0.25s,2:0.5s,3:1s,4:2s,5:5s,6:10s,7:30s,8:120s
Photo Flip=[0];set Photo rotate,0:off,1:flip on

Movie cycle time=[2];movie cycle time,0:3 minutes,1:5 minutes,2:10 minutes,3:15 minutes,4:max to 4G byte,
Movie Loop Recording=[0];set loop recording on or off,0:off,1:on,
Time stamp=[1];set date/time stamp on or off,0:off,1:on,
Movie sound=[1];set movie sound,0:mute,1:on,
Movie Flip=[0];set movie rotate,0:both off,1:mode 1 on and mode 2 off,2:mode 1 off and mode 2 on,3:both on,
Movie quality=[1];set movie quality,set movie data rate,0:Super,1:Standard,2:Low,
Movie high dynamic range=[0];set movie high dynamic range,0:off,1:on,2:Enhanced Brightness.

Power on=[1];set system  power on time,0:delay,1:fast
Power off=[1];set system auto power off time when system pending,0:off,1:30 seconds,2:1 minutes,3:2 minutes,
Auto Record with External Power=[0];set connect with power to start video recording automatically,0:off,1:on,
One Power Button to Auto Record=[0];set press power key to start video recording automatically,0:off,1:on,
Auto Off with External Power disconnected=[0],0:Immediately,1:delay 10s;2:record to low battery power off,
LED=[1];set LED flicker when recording,0:off,1:on,
Charge from USB Host=[0]; when connecting with USB host, charge camera or not,0:on,1:off
Lens option =[0];select lens,0:lens A,1:lens B
Light frequency =[1];set light source frequency,0:50 HZ,1:60 HZ

TV out=[0];set Tv out,0:NTSC,1:PAL,
TV Display Ratio=[0];set display ratio,0:4*3,1:16*9

Motion Detect=[0];set motion detect,0:off,1:on
Motion Detect Timeout=[2];set motion detect timeout,0:5s,1:15s,2:30s,3:60s
Motion Detect Sensitivity=[0];set motion detect Sensitivity,0:high,1:nomal,2:low

White Balance=[7];Set White Balance,0:Auto,1:Sunny,2:Cloudy,3:Tungsten,4:Fluorescent,5:Custom WB1,6:Custom WB2,7:Custom WB3
Sunny(5000-6500K) used for sunny with clear sky(Rgain=301,Ggain=256,Bgain=368);
Cloudy(9000-10000K) used for shade or heavily overcast sky(Rgain=301,Ggain=256,Bgain=384);
Tungsten(2500-3500K) used for Tungsten bulb (or called Incandescent light)(Rgain=184,Ggain=256,Bgain=711);
Fluorescent(4000-5000K) used for fluorescent lamps(Rgain=333,Ggain=256,Bgain=525);
Customized White Balance 1 Red Gain=[310],Green Gain=[500],Blue Gain=[700];
Customized White Balance 2 Red Gain=[310],Green Gain=[500],Blue Gain=[700];
Customized White Balance 3 Red Gain=[310],Green Gain=[500],Blue Gain=[700];
Set red ,green,blue gain,256 is 1x gain,value from 100 to 999;

Color Effect=[0];Set Color Effect,0:Standard,1:Mono,2:Sepia,3:Cool,4:Cooler,5:Warm,6:Warmer,7:Vivid
Exposure Value= [0] ;Exposure compensation,values from -128 to +128,In 1 increments,default value is 0,
Contrast= [0]  ;Set Contrast,values from -128 to +128,In 1 increments,default value is 0,
Saturation= [0]  ;Set Image Saturation,values from -128 to +128,In 1 increments,default value is 0,
Sharpness= [0]  ;Set Image Sharpness,values from -128 to +128,In 1 increments,default value is 0,

{TLCAM MOV:TLCAM Mobius ActionCam 2014/03/17 v1.20}
{LDTLCAM,v003}
