---
nid: 12566
title: config file for kits mobius cameras
path: public/static/notes/tonyc/01-06-2016/config-file-for-kits-mobius-cameras.md
uid: 447491
tagnames: kite-mapping
---

# config file for kits mobius cameras

###What I want to do
settle on the best default configuration for shipping Mobius ActionCam cameras for use in aerial photography.

###My attempt and results
<a href="//i.publiclab.org/system/images/photos/000/013/534/original/SYSCFG.TXT"><i class="icon icon-file"></i> SYSCFG.TXT</a>

basic decisions:

The points worth metnioning:

Default Mode=[2];set power-on default mode,0:Video Mode 1,1:Video Mode 2,2:Photo Mode


PHOTO MODE
Photo Set Time Lapse Shooting=[5],0:off,1:0.25s,2:0.5s,3:1s,4:2s,5:5s,6:10s,7:30s,8:Custom
Photo Time stamp=[0];set date/time stamp on or off,0:off,1:on,

Power on=[1];set system  power on time,0:delay,1:fast
Power off=[0];set system auto power off time when system pending,0:off,1:30 seconds,2:1 minutes,3:2 minutes,
Auto Record with External Power=[0];set connect with power to start video recording automatically,0:off,1:on,
One Power Button to Auto Record=[0];set press power key to start video recording automatically,0:off,1:on,
Auto Off with External Power disconnected=[0],0:Immediately,1:delay 10s;2:delay 30s;3:delay 60s;4:record to low battery power off;5:change to motion detect;
LED=[1];set LED flicker when recording,0:off,1:on,
Charge from USB Host=[0]; when connecting with USB host, charge camera or not,0:on,1:off
Lens option =[0];select lens,0:lens A,1:lens B,2:lens C
Light frequency =[1];set light source frequency,0:50 HZ,1:60 HZ
Web camera mode =[0];set web camera mode,0:USB video class(Mjpg codec),1:USB video and audio class(H.264 codec)
Web camera Flip=[0];set web camera rotate,0:off,1:flip on
Customized file characters=[REC_];set video 4 free characters of video file


Enable Manual AE Lock or AWB Lock = [1]; 0: Not enabled; 1: AE Lock and AWB Lock; 2: AE Lock only; 3: AWB Lock only.
(Long 3 sec. Mode button press required to turn AEL or AWBL on)
White Balance=[0];Set White Balance,0:Auto,1:Sunny,2:Cloudy,3:Tungsten,4:Fluorescent,5:Custom WB1,6:Custom WB2,7:Custom WB3

###Questions and next steps
Gather thoughts from folks who do this a lot. What do you think? What would you do differently if selling these to general population?

###Why I'm interested
Ready to start selling these cameras in the store, as standalone and as part of kite kits. Want to settle on the best way to make them functional as aerial rigs without requiring someone to edit a config file.