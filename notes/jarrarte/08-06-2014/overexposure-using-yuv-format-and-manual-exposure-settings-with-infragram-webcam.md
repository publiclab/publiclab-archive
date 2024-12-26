---
title: "Overexposure using YUV format and manual exposure settings with Infragram webcam"\ntagnames: 'webcam, infragram, overexposure, barnstar:empiricism, exposure, yuv, manual'
author: jarrarte
path: /notes/jarrarte/08-06-2014/overexposure-using-yuv-format-and-manual-exposure-settings-with-infragram-webcam.md
nid: 11018
uid: 425714

---

![](https://publiclab.org/public/system/images/photos/000/006/083/original/thumb.jpg)

# Overexposure using YUV format and manual exposure settings with Infragram webcam

by [jarrarte](../profile/jarrarte) | August 06, 2014 14:35

August 06, 2014 14:35 | Tags: [webcam](../tag/webcam), [infragram](../tag/infragram), [overexposure](../tag/overexposure), [barnstar:empiricism](../tag/barnstar:empiricism), [exposure](../tag/exposure), [yuv](../tag/yuv), [manual](../tag/manual)

----

###What I want to do
I want to use the Infragram webcam ([link](http://store.publiclab.org/products/infragram-webcam)) in bright sunny environments, so I need to effectively control exposure. 

It seems there are some issues when using manual exposure combined with YUV format. 
This issue is not present with MPEG format.

###My attempt and results
I'm trying to use YUV format for capturing raw images. The automatic exposure settings are too bright for the tests I'm doing. However, when I change its settings to manual exposure and a minimum exposure value (value=8) the captured image is way brighter than with automatic exposure. The gamma and gain settings are also at their minimum (100 and 32, respectively). 

However, there are clear differences between capturing a MPEG stream and a YUV stream. MPEG has a much better quality, YUV over exposes some parts of the image. Here are some test captures using v4l2-ctl:

####MPEG with auto exposure
[![MPEG-auto.jpg](https://i.publiclab.org/system/images/photos/000/006/078/medium/MPEG-auto.jpg)](https://i.publiclab.org/system/images/photos/000/006/078/original/MPEG-auto.jpg)

####MPEG with manual exposure (value = 8)
[![MPEG-manual8.jpg](https://i.publiclab.org/system/images/photos/000/006/079/medium/MPEG-manual8.jpg)](https://i.publiclab.org/system/images/photos/000/006/079/original/MPEG-manual8.jpg)

####YUV with auto exposure
[![YUV-auto.jpg](https://i.publiclab.org/system/images/photos/000/006/080/medium/YUV-auto.jpg)](https://i.publiclab.org/system/images/photos/000/006/080/original/YUV-auto.jpg)

####YUV with manual exposure (value = 8)
[![YUV-manual8.jpg](https://i.publiclab.org/system/images/photos/000/006/081/medium/YUV-manual8.jpg)](https://i.publiclab.org/system/images/photos/000/006/081/original/YUV-manual8.jpg)

####v4l2-ctl settings
All images shared these settings:

[![settings.jpg](https://i.publiclab.org/system/images/photos/000/006/082/medium/settings.jpg)](https://i.publiclab.org/system/images/photos/000/006/082/original/settings.jpg)

###Questions and next steps
* Does this also happen to other Infragram webcam owners? 
* Is there other particular settings I should be considering?

###Why I'm interested
I'm interested in using this webcam in bright sunny environments, so I need to effectively control exposure. MPEG may have compression artifacts that I want to avoid, so I'm interested in capturing YUV raw frames.

###Additional info:
Google groups discussion - [link](https://groups.google.com/forum/#!topic/plots-infrared/lSwIqQPJSY8)

My notebook:
    jarrarte@jarrarte-nb:~ > inxi -F
    System:    Host: jarrarte-nb Kernel: 3.13.0-32-generic x86_64 (64 bit) Desktop: KDE 4.13.2 Distro: Linux Mint 17 Qiana
    Machine:   System: LENOVO (portable) product: 4291S3D version: ThinkPad X220
               Mobo: LENOVO model: 4291S3D Bios: LENOVO version: 8DET69WW (1.39 ) date: 07/18/2013
    CPU:       Dual core Intel Core i5-2540M CPU (-HT-MCP-) cache: 3072 KB flags: (lm nx sse sse2 sse3 sse4_1 sse4_2 ssse3 vmx) 
               Clock Speeds: 1: 800.00 MHz 2: 800.00 MHz 3: 800.00 MHz 4: 800.00 MHz
    Graphics:  Card: Intel 2nd Generation Core Processor Family Integrated Graphics Controller 
               X.Org: 1.15.1 drivers: intel (unloaded: fbdev,vesa) Resolution: 1366x768@60.0hz 
               GLX Renderer: Mesa DRI Intel Sandybridge Mobile GLX Version: 3.0 Mesa 10.1.3
    Audio:     Card-1: Intel 6 Series/C200 Series Chipset Family High Definition Audio Controller driver: snd_hda_intel
               Card-2: Z-Star Micro driver: USB Audio
               Sound: Advanced Linux Sound Architecture ver: k3.13.0-32-generic
    Network:   Card-1: Intel 82579LM Gigabit Network Connection driver: e1000e 
               IF: eth0 state: down mac: f0:de:f1:fc:30:bc
               Card-2: Intel Centrino Advanced-N 6205 [Taylor Peak] driver: iwlwifi 
               IF: wlan0 state: up mac: 8c:70:5a:8d:5d:7c
    Drives:    HDD Total Size: 256.1GB (74.9% used) 1: id: /dev/sda model: SAMSUNG_SSD_830 size: 256.1GB 
    Partition: ID: / size: 19G used: 16G (89%) fs: ext4 ID: /boot size: 457M used: 82M (19%) fs: ext2 
    RAID:      No RAID devices detected - /proc/mdstat and md_mod kernel raid module present
    Sensors:   System Temperatures: cpu: 49.0C mobo: N/A 
               Fan Speeds (in rpm): cpu: 1961 
    Info:      Processes: 240 Uptime: 20:16 Memory: 3086.9/7867.8MB Client: Shell inxi: 1.8.4 

lsusb output when plugging the webcam:
    [20256.036523] usb 2-1.2: USB disconnect, device number 6
    [20264.678411] usb 2-1.2: new high-speed USB device number 7 using ehci-pci
    [20264.812963] usb 2-1.2: New USB device found, idVendor=0ac8, idProduct=3470
    [20264.812967] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=0
    [20264.812969] usb 2-1.2: Product: USB2.0 Camera
    [20264.812971] usb 2-1.2: Manufacturer: Vimicro Corp.
    [20264.813760] uvcvideo: Found UVC 1.00 device USB2.0 Camera (0ac8:3470)
    [20264.815820] input: USB2.0 Camera as /devices/pci0000:00/0000:00:1d.0/usb2/2-1/2-1.2/2-1.2:1.0/input/input20

v4l2-ctl output:
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
    