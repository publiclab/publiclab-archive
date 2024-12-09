---
title: 'Using the infragram webcam in Linux'
tagnames: webcam, infragram, linux, v4l2, uvc, first-time-poster
author: jarrarte
path: /notes/jarrarte/08-06-2014/using-the-infragram-webcam-in-linux.md
nid: 11017
uid: 425714

---

# Using the infragram webcam in Linux

by [jarrarte](../profile/jarrarte) August 06, 2014 14:19

August 06, 2014 14:19 | Tags: [webcam](../tag/webcam), [infragram](../tag/infragram), [linux](../tag/linux), [v4l2](../tag/v4l2), [uvc](../tag/uvc), [first-time-poster](../tag/first-time-poster)

----

###What I want to do
I want to use the infragram webcam ([link](store.publiclab.org/products/infragram-webcam)) with a Linux Mint or Ubuntu notebook. I'm also testing it in a Beaglebone Black with a Debian system.

###My attempt and results
Sometimes the webcam is not recognized by the system.
When I plug the camera the system logs that a new USB device is present, and it even creates a new /dev/video1 file:

    [20256.036523] usb 2-1.2: USB disconnect, device number 6
    [20264.678411] usb 2-1.2: new high-speed USB device number 7 using ehci-pci
    [20264.812963] usb 2-1.2: New USB device found, idVendor=0ac8, idProduct=3470
    [20264.812967] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=0
    [20264.812969] usb 2-1.2: Product: USB2.0 Camera
    [20264.812971] usb 2-1.2: Manufacturer: Vimicro Corp.
    [20264.813760] uvcvideo: Found UVC 1.00 device USB2.0 Camera (0ac8:3470)
    [20264.815820] input: USB2.0 Camera as /devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.0/input/input20

However, when I try to open the camera using qv4l2 (Graphical Qt v4l2 control panel) it fails. 
I've noticed that sometimes, querying the camera capabilities using v4l2-ctl when failing helps fixing the issue (that is, if qv4l2 fails to open the camera, query the capabilities with v4l2-ctl and then try again with qv4l2). 

When I can't access the camera, it seems to take much longer querying (seconds vs millis). This is the output in the syslog file:

    [16330.374501] uvcvideo: Failed to query (GET_DEF) UVC control 2 on unit 2: -110 (exp. 2).
    [16330.674580] uvcvideo: Failed to query (GET_DEF) UVC control 2 on unit 2: -110 (exp. 2).
    [16330.974356] uvcvideo: Failed to query (GET_DEF) UVC control 2 on unit 2: -110 (exp. 2).
    [16331.274247] uvcvideo: Failed to query (GET_DEF) UVC control 2 on unit 2: -110 (exp. 2).
    [16331.574006] uvcvideo: Failed to query (GET_DEF) UVC control 3 on unit 2: -110 (exp. 2).
    [16331.874070] uvcvideo: Failed to query (GET_DEF) UVC control 3 on unit 2: -110 (exp. 2).
    [16332.173979] uvcvideo: Failed to query (GET_DEF) UVC control 3 on unit 2: -110 (exp. 2).
    [16332.473871] uvcvideo: Failed to query (GET_DEF) UVC control 7 on unit 2: -110 (exp. 2).
    [16332.773797] uvcvideo: Failed to query (GET_DEF) UVC control 7 on unit 2: -110 (exp. 2).
    [16333.073503] uvcvideo: Failed to query (GET_DEF) UVC control 7 on unit 2: -110 (exp. 2).
    [16333.373581] uvcvideo: Failed to query (GET_DEF) UVC control 6 on unit 2: -110 (exp. 2).
    [16333.673645] uvcvideo: Failed to query (GET_DEF) UVC control 6 on unit 2: -110 (exp. 2).
    [16333.973284] uvcvideo: Failed to query (GET_DEF) UVC control 6 on unit 2: -110 (exp. 2).
    [16334.273084] uvcvideo: Failed to query (GET_DEF) UVC control 11 on unit 2: -110 (exp. 1).
    [16334.573067] uvcvideo: Failed to query (GET_DEF) UVC control 11 on unit 2: -110 (exp. 1).
    [16334.872967] uvcvideo: Failed to query (GET_DEF) UVC control 11 on unit 2: -110 (exp. 1).
    [16334.897363] uvcvideo: Failed to query (GET_DEF) UVC control 9 on unit 2: -32 (exp. 2).
    [16335.196669] uvcvideo: Failed to query (GET_DEF) UVC control 9 on unit 2: -110 (exp. 2).
    [16335.496572] uvcvideo: Failed to query (GET_DEF) UVC control 9 on unit 2: -110 (exp. 2).
    [16335.796658] uvcvideo: Failed to query (GET_DEF) UVC control 4 on unit 2: -110 (exp. 2).
    [16336.096384] uvcvideo: Failed to query (GET_DEF) UVC control 4 on unit 2: -110 (exp. 2).
    [16336.396473] uvcvideo: Failed to query (GET_DEF) UVC control 4 on unit 2: -110 (exp. 2).
    [16336.696247] uvcvideo: Failed to query (GET_DEF) UVC control 5 on unit 2: -110 (exp. 1).
    [16336.996278] uvcvideo: Failed to query (GET_DEF) UVC control 5 on unit 2: -110 (exp. 1).
    [16337.296167] uvcvideo: Failed to query (GET_DEF) UVC control 5 on unit 2: -110 (exp. 1).
    [16337.596045] uvcvideo: Failed to query (GET_CUR) UVC control 11 on unit 2: -110 (exp. 1).
    [16337.895798] uvcvideo: Failed to query (GET_CUR) UVC control 11 on unit 2: -110 (exp. 1).
    [16338.195878] uvcvideo: Failed to query (GET_CUR) UVC control 11 on unit 2: -110 (exp. 1).
    [16338.495666] uvcvideo: Failed to query (GET_DEF) UVC control 8 on unit 2: -110 (exp. 2).
    [16338.795502] uvcvideo: Failed to query (GET_DEF) UVC control 8 on unit 2: -110 (exp. 2).
    [16339.095472] uvcvideo: Failed to query (GET_DEF) UVC control 8 on unit 2: -110 (exp. 2).
    [16339.395376] uvcvideo: Failed to query (GET_DEF) UVC control 1 on unit 2: -110 (exp. 2).
    [16339.695277] uvcvideo: Failed to query (GET_DEF) UVC control 1 on unit 2: -110 (exp. 2).
    [16339.895491] uvcvideo: Failed to query (GET_DEF) UVC control 1 on unit 2: -32 (exp. 2).

This is the output of the v4l2-ctl command when working OK:

    jarrarte@jarrarte-nb:~ > sudo v4l2-ctl -d 1 --all
    Driver Info (not using libv4l2):
            Driver name   : uvcvideo
            Card type     : USB2.0 Camera
            Bus info      : usb-0000:00:1d.0-1.2
            Driver version: 3.13.11
            Capabilities  : 0x84000001
                    Video Capture
                    Streaming
                    Device Capabilities
            Device Caps   : 0x04000001
                    Video Capture
                    Streaming
    Priority: 2
    Video input : 0 (Camera 1: ok)
    Format Video Capture:
            Width/Height  : 1280/720
            Pixel Format  : 'MJPG'
            Field         : None
            Bytes per Line: 0
            Size Image    : 1843200
            Colorspace    : Unknown (00000000)
    Crop Capability Video Capture:
            Bounds      : Left 0, Top 0, Width 1280, Height 720
            Default     : Left 0, Top 0, Width 1280, Height 720
            Pixel Aspect: 1/1
    Streaming Parameters Video Capture:
            Capabilities     : timeperframe
            Frames per second: 30.000 (30/1)
            Read buffers     : 0
                         brightness (int)    : min=-10 max=10 step=1 default=-28672 value=-10
                           contrast (int)    : min=0 max=20 step=1 default=36873 value=20
                         saturation (int)    : min=0 max=10 step=1 default=6 value=6
                                hue (int)    : min=-5 max=5 step=1 default=-28672 value=-5
     white_balance_temperature_auto (bool)   : default=1 value=1
                              gamma (int)    : min=100 max=200 step=1 default=41110 value=100
                               gain (int)    : min=32 max=48 step=1 default=45088 value=32
               power_line_frequency (menu)   : min=0 max=2 default=1 value=1
          white_balance_temperature (int)    : min=2800 max=6500 step=1 default=47460 value=2800 flags=inactive
                          sharpness (int)    : min=0 max=10 step=1 default=36868 value=10
             backlight_compensation (int)    : min=0 max=1 step=1 default=45056 value=1
                      exposure_auto (menu)   : min=0 max=3 default=3 value=3
                  exposure_absolute (int)    : min=8 max=16384 step=1 default=512 value=8 flags=inactive
  
When it's not recognized, the command doesn't ouput the lines after "Read buffers" line.

###Questions and next steps
* Is this a camera compatibility problem?
* Is this a UVC (unified video class) problem?
* Is this a V4L2 (Video for Linux 2) problem?

###Why I'm interested
I'm interested in using this webcam, but I need it to be reliable!