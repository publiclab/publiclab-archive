---
nid: 15074
title: Update firmware on the Mobius Action Cam
path: public/static/notes/warren/10-20-2017/update-firmware-on-the-mobius-action-cam.md
uid: 1
tagnames: infrared,infragram,mobius-actioncam,mobius,infragram-point-shoot,mobius-action-cam,multispectral-analysis,activity:infragram,activity:mobius,activity:mobius-action-cam,activity:infragram-point-shoot
---

# Update firmware on the Mobius Action Cam

If you're having trouble setting the white balance on your Mobius Action Cam (used in the [Infragram Point & Shoot](/wiki/infragram-point-shoot)), you may need to update the firmware. This should take 5-10 minutes, and you'll need a micro SD card.

Your Mobius camera uses a micro SD card. If you purchased your camera [from the Public Lab store](https://store.publiclab.org/collections/diy-infrared-photography) you should not need to install any additional files as we install them for you we ship the cameras.

If you did not order your item from the Public Lab store, or if you have been directed for some reason to download these files, then you will first want to copy this `.bin` file onto your SD card [FWTLCAM.BIN](https://publiclab.org/system/images/photos/000/018/527/original/FWTLCAM.BIN)**Note: **if new releases of this firmware are made available by the Mobius manufacturer, please post in the comments and we'll update!

  
After that has been copied onto the SD card and the card has been placed into the camera:

1. Hold the power button down until the LED starts quickly flashing blue.
2. You will see that it will continue flashing blue for some time, and then the LED will become yellow.
3. Once it is yellow, press the power button again to turn the camera off.

### Additional resources

Download the v1.20 firmware here (Copied in from the [Infragram Point & Shoot page](/wiki/infragram-point-shoot)):

[__ Mobius\_FW\_V1.20.zip](https://i.publiclab.org/system/images/photos/000/005/103/original/Mobius_FW_V1.20.zip)

Also see these notes, excerpted from [RCGroups.com](http://www.rcgroups.com/forums/showthread.php?t=1904559):

```
    1. Download the firmware .zip archive file and un-zip it. Copy the actual firmware file (always named FWTLCAM.BIN as noted above) from it's identifying folder into the camera's flash card root directory (the one that opens when the camera connects as a removable drive). This can be done with the card in the camera connected to the computer as a Removable Drive, or externally in a card reader. But do NOT rename the file. If you do, the camera will not install it!
    2. Disconnect the camera and turn it off.
    3. Insert the flash card containing the new firmware file into the camera (if not already in the camera).
    4. Press the Power button until the BLUE LED turns on and begins to flash. RELEASE THE POWER BUTTON AS SOON AS LED FLASHING BEGINS! If you keep pressing it longer, you may turn off the camera before the update process is done. DO NOT PRESS ANY BUTTONS WHILE THE INSTALLATION IS IN PROGRESS (about 20 sec. to complete)
    5. To confirm the firmware is being loaded into the camera, the BLUE LED will continue to blink during the upload process.
    6. When the FW installation is complete, the BLUE LED will turn off for about 2 sec. and the YELLOW LED will then turn on solid, indicating the FW file is has been automatically deleted from the memory card.
    7. You're done! The camera will be in the normal start-up standby mode ready for use.`
```