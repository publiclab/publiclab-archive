---
title: "Using Fluxtream to look at Speck Data"

tagnames: 'visualization, data, dust, silica, speck'
author: mathew
path: /notes/mathew/06-05-2014/using-fluxtream-to-look-at-speck-data.md
nid: 10532
uid: 4

---

![](https://publiclab.org/public/system/images/photos/000/004/543/original/Screen_Shot_2014-06-05_at_3.23.26_PM.png)

# Using Fluxtream to look at Speck Data

by [mathew](../../../profile/mathew) | June 05, 2014 22:26

June 05, 2014 22:26 | Tags: [visualization](../tag/visualization), [data](../tag/data), [dust](../tag/dust), [silica](../tag/silica), [speck](../tag/speck)

----

###What I want to do
Document how to upload data from a Speck to CMU's analysis program [Fluxtream.org](https://fluxtream.org/welcome).  Fluxtream is a data visualization service aimed at the quantified self community, tracking personal sensor, calendar, and geodata. 

###GUI instructions
If your Speck is still connected on Mac, Linux or Windows, you can do enter (with your username and password):
Host: fluxtream.org
Username: USER
Password: PASSWORD

[![Speck_Gateway_Interface.jpg](https://i.publiclab.org/system/images/photos/000/004/539/medium/Speck_Gateway_Interface.jpg)](https://i.publiclab.org/system/images/photos/000/004/539/original/Speck_Gateway_Interface.jpg)

But if the Speck isn't connected, like, say, you mailed it to [The North East Barnraising](http://publiclab.org/wiki/barnraising-northeast-2014), you'll see this:

[![Screen_Shot_2014-06-04_at_3.46.20_PM.png](https://i.publiclab.org/system/images/photos/000/004/540/medium/Screen_Shot_2014-06-04_at_3.46.20_PM.png)](https://i.publiclab.org/system/images/photos/000/004/540/original/Screen_Shot_2014-06-04_at_3.46.20_PM.png)

###Command line instructions
I e-mailed the Speck team and Chris Bartley rapidly whipped up nstructions to me. 

Chris Wrote:

OK, here's what to do--these instructions assume you're using a Mac:

_Mathew's Note: I bet the only difference on linux is where the data ends up. ie on the Mac it automatically places it in the user directory /CREATELab/Speck_

0) Find the directory containing the data downloaded by the Speck Gateway GUI app.  It should be under your user home directory, with a path such as ~/CREATELab/Speck/SpeckSOME_BIG_LONG_NUMBER_HERE.  It should have both a data_samples.csv file and a "database" directory in there.  My Speck has an ID of "43261603040414000000", so the path for mine is ~/CREATELab/Speck/Speck43261603040414000000.  In that directory, create a text file called "config.txt" and put this into it, but make sure to change the Speck ID to whatever yours is:

id=43261603040414000000
protocol-version=2

1) Download the zip-file version of the gateway and unzip (ok, yeah, everything you need is technically already packaged up in the GUI version, but it's a pain to get at it):

 http://specksensor.org/software/speck-gateway.zip

2) Open a terminal window and cd to the directory containing all the jars you just unzipped.

3) We'll now launch the command line version of the gateway.  Take this command, and modify it by replacing YOUR_USERNAME_HERE and YOUR_SPECK_ID_HERE with appropriate values, and then run it:

java -Djna.library.path=. -Djava.library.path=. -jar speck-applications.jar --command-line --config=/Users/YOUR_USERNAME_HERE/CREATELab/Speck/SpeckYOUR_SPECK_ID_HERE/config.txt

4) You should see the main menu--something like this:

[![PastedGraphic-3.png](https://i.publiclab.org/system/images/photos/000/004/535/medium/PastedGraphic-3.png)](https://i.publiclab.org/system/images/photos/000/004/535/original/PastedGraphic-3.png)

5) Type "c" and hit ENTER.  With luck, you should see messages like this:

[![PastedGraphic-4.png](https://i.publiclab.org/system/images/photos/000/004/536/medium/PastedGraphic-4.png)](https://i.publiclab.org/system/images/photos/000/004/536/original/PastedGraphic-4.png)

6) Type "u" and hit ENTER to specify the host to which you want to upload (fluxtream.org) and your username and password.   As with the Speck Gateway GUI, you can also choose the device name.

[![Screen_Shot_2014-06-05_at_12.07.28_PM.png](https://i.publiclab.org/system/images/photos/000/004/538/medium/Screen_Shot_2014-06-05_at_12.07.28_PM.png)](https://i.publiclab.org/system/images/photos/000/004/538/original/Screen_Shot_2014-06-05_at_12.07.28_PM.png)

7) After submitting the host, login, and device name, the upload should begin!  It'll upload in chunks of 500 samples at a time.  At any time during upload, you can check on the upload stats by typing "s" and hitting ENTER.  

8) You should eventually see a message saying "No samples found which need to be uploaded.  Will retry in 15 seconds."  That just means it's done.  This command line app isn't very smart--it doesn't know that more samples won't get added, so it just keeps trying every 15 seconds.  Just type "q" and hit ENTER to quit.

Your data should now be in Fluxtream!

###
Here is a normal weekday.  I don't know what the 3AM spike is, but there is a clear peak around rush hour, tapering out and then building right before 5pm.  

[![Screen_Shot_2014-06-05_at_2.31.47_PM.png](https://i.publiclab.org/system/images/photos/000/004/541/medium/Screen_Shot_2014-06-05_at_2.31.47_PM.png)](https://i.publiclab.org/system/images/photos/000/004/541/original/Screen_Shot_2014-06-05_at_2.31.47_PM.png)

Here's a Sunday.  Notice there is no morning peak, but afternoon (when people return from out of town) particulates pick back up again. 

[![Screen_Shot_2014-06-05_at_2.33.05_PM.png](https://i.publiclab.org/system/images/photos/000/004/542/medium/Screen_Shot_2014-06-05_at_2.33.05_PM.png)](https://i.publiclab.org/system/images/photos/000/004/542/original/Screen_Shot_2014-06-05_at_2.33.05_PM.png)
