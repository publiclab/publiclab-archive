---
title: "Scripting Raspberry Pi to boot and shoot timelapse photos "\ntagnames: 'near-infrared-camera, raspberry-pi, infragram, barnstar:basic, status:review-me, category:build, activity:timelapse, difficulty:hard'
author: mathew
path: /notes/mathew/11-03-2013/scripting-raspberry-pi-to-boot-and-shoot-timelapse-photos.md
nid: 9719
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/002/106/original/10635780826_b21940d831_o.jpg)

# Scripting Raspberry Pi to boot and shoot timelapse photos 

by [mathew](../profile/mathew) | November 03, 2013 02:06

November 03, 2013 02:06 | Tags: [near-infrared-camera](../tag/near-infrared-camera), [raspberry-pi](../tag/raspberry-pi), [infragram](../tag/infragram), [barnstar:basic](../tag/barnstar:basic), [status:review-me](../tag/status:review-me), [category:build](../tag/category:build), [activity:timelapse](../tag/activity:timelapse), [difficulty:hard](../tag/difficulty:hard)

----

###What I want to do
I wanted to setup my Raspberry Pi to automatically boot and start shooting photos, so I could use it for aerial photography. I'd previously modded a pi camera to pull out the infrared filter, but the Raspberry Pi foundation had [sent me a pre-production model of the NoIR Pi cam](http://www.raspberrypi.org/archives/tag/pi-noir).  I took photos with the #74 filter and it worked great.

As this process was the first stage in making a stripped-down camera version of the raspberry pi, i didn't want it to load processor/memory/battery intensive processes; I wanted to auto-boot into command line mode.  I got it all working, below are some instructions.

This was a five-step process: 1) make a timelapse script, 2) make the script boot on login, and 3) set the Pi to automatically login on boot, 4) put it in a box with a battery, 5) go flying.

###My attempt and results

Here's my pi in a box with battery pack, using an old stand-alone gamecube monitor:
<a href="https://www.flickr.com/photos/14397636@N07/9925653364/" title="spectrometer pieces by mathew.lippincott, on Flickr"><img src="https://farm6.staticflickr.com/5506/9925653364_d1f32f252d.jpg" width="500" height="375" alt="spectrometer pieces"></a>

I got everything to work and [went flying with Rich Burton](http://www.diydrones.com/profiles/blogs/raspberry-pi-noir-and-public-lab-get-a-lift) and his [HooperFly quadcopter](hooperfly.com).  It couldn't go as high as I really wanted to go, but it was very steady, quick, and returned great photos.

<a href="https://www.flickr.com/photos/14397636@N07/9925636116/" title="spectrometer pieces by mathew.lippincott, on Flickr"><img src="https://farm6.staticflickr.com/5485/9925636116_b9525defdf.jpg" width="375" height="500" alt="spectrometer pieces"></a>

<a href="https://www.flickr.com/photos/14397636@N07/9925614526/" title="spectrometer pieces by mathew.lippincott, on Flickr"><img src="https://farm3.staticflickr.com/2831/9925614526_978c620726.jpg" width="375" height="500" alt="spectrometer pieces"></a>

#####Precautions:#####
in case I screwed up I made another user:
<pre><code>
sudo useradd {USERNAME}
sudo passwd {USERNAME}
</code></pre>

If anything went wrong, I used the command CTRL-ALT-F2 to start a new terminal and login as a different user and edit any of my scripts from a different session. This happened a bunch before i got the settings right.

#####Timelapse#####
I started by writing and checking a timelapse script.  I copied the work done by [Andrew Back at Design Spark](http://designspark.com/blog/time-lapse-photography-with-the-raspberry-pi-camera).  I changed around the directory and made the script shoot PNGs instead of JPGs to lower the image compression.

I created a script in the /etc/init.d directory, because this is where background processes are kept:

<pre><code>
sudo nano ~/etc/init.d/timelapse.ch
</code></pre>

This is the script:
<pre><code>
#!/bin/bash
#for automatically taking timelapse photos

ROLL=$(cat /home/pi/Desktop/images)

SAVEDIR=/home/pi/Desktop/images/timelapse

while [ true ]; do

filename=$ROLL-$(date -u + "%d%m%Y_%H%M-%S").png

raspistill -o $SAVEDIR/$filename

#sleep for 10 ten seconds

sleep 10;

done;
</code></pre>

You will have to change the permissions to make it executable:
<pre><code>
sudo chmod ugo+x/etc/init.d/timelapse.sh
</code></pre>

you can test the script then by typing:
<pre><code>
bash timelapse.sh
</code></pre>

#####Boot and Autorun#####
I then needed setup the pi to auto-login on boot, and load the script.

I setup an autologin starting with info from [AK Eric](http://www.akeric.com/blog/?p=1976) who summarized and condensed [this thread on the Raspberry Pi forums](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=29&t=7192).  The suggested line to add to inittab clearly wasn't right.  I found a different set of instructions on [Stackexchange](http://raspberrypi.stackexchange.com/questions/3873/auto-login-with-gui-disabled-in-raspbian), and a discussion thread on the issue on the Raspberry Pi Forums.  After fixing the issue using the info from Stackexchange, I shared back to [the Forum issue](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=91&t=44801&p=409769#p409769).

go to inittab:
<pre><code>
sudo nano ~/etc/inittab
</code></pre>

find the line:
<pre><code>
1:2345:respawn:/sbin/getty --noclear 38400 ttyl
</code></pre>

comment it out (#) and below add the line :
<pre><code>
1:2345:respawn:sbin/getty --autologin {USERNAME} --noclear 38400 tty1
</code></pre>

save and close (CTRL X)

go to:
<pre><code>
sudo nano ~/.bashrc
</code></pre>
go to the last line and add:
<pre><code>
echo .bashrc : Running /etc/init.d/timelapse.sh
bash etc/init.d/timelapse.sh
</code></pre>

###Questions and next steps

I'd wanted to shoot RAW, but RAW shooting is pretty new and looked like more work than I was up for.  [Here's the discussion on the 'Pi forums](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=43&t=44918&start=50) and [the RAW code on github](https://github.com/illes/raspiraw)

I also wanted to be able to [SSH into my Pi](http://nathanhfox.com/2013/07/31/configuring-the-raspberry-pi-as-a-headless-ethernet-to-computer-tether-w-internet-sharing-to-macbook-pro/) so I could modify it while "headless" (no screen/keyboard) in the field.  I didn't quite get that setup.

I also looked at changing the directory to load onto an external SD card, but had difficulty consistently recognizing and saving to it.  I had trouble writing to Fat32 memory cards, so ended up formatting a card using ext4, a linux file system. The problem with using ext4 is that the permissions have to be changed to allow each user on each system access. Its not a good camera-memory card format, and required plugging the card into my other linux box to read.  I'd like to figure out how to use standard FAT32 cards… But here's how to format an SD card for ext4:
<pre><code>
dmesg | tail
</code></pre>
found it as sdd:sdd1, unmounted it:
<pre><code>
sudo umount /dev/sdd
</code></pre>
then formatted it:
<pre><code>
sudo mkfs.ext4  'pisd'  /dev/sdd
</code></pre>


