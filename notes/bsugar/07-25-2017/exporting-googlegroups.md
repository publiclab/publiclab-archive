---
title: "Exporting GoogleGroups"\ntagnames: 'community-metrics, community-mapping, mailing-lists, evaluation, activity:evaluation'
author: bsugar
path: /notes/bsugar/07-25-2017/exporting-googlegroups.md
nid: 14679
uid: 217812

---

![](https://publiclab.org/public/system/images/photos/000/021/210/original/Screen_Shot_2017-07-25_at_2.58.41_AM.png)

# Exporting GoogleGroups

by [bsugar](../profile/bsugar) | July 25, 2017 07:52

July 25, 2017 07:52 | Tags: [community-metrics](../tag/community-metrics), [community-mapping](../tag/community-mapping), [mailing-lists](../tag/mailing-lists), [evaluation](../tag/evaluation), [activity:evaluation](../tag/activity:evaluation)

----

---------

![image description][1]

---------

**---Dictated, not read---**

A wonderful thing has befallen us!  

@icarito discovered a [tool to export GoogleGroups data](https://github.com/henriquebastos/googlegroupexporter)!!  
  
I'll leave the instructions to the various pages for the time being. I followed directions to a T without issue but feel free to ask questions below if you get stuck.  I'll do a more detailed write up later.    
  
1) Download Python \>= 3.5  I use Anaconda, and since other tutorials regarding this subject will be in Anaconda Python 2.7, you might find it easier to install [that version](https://conda.io/docs/install/full.html).   
  
2) After installing Anaconda 2.7, we'll need to install Anaconda Python \>= 3.5 and we'll want to do it such that it will not overwrite the 2.7 installation.  This can be done by following the directions [here](https://conda.io/docs/py2or3.html).  
  
3) This will also require having the web inspector installed on your browser of choice.  As a rule I do not use Chrome for an unhealthy obsession with thinking I can stick it to the (G)man.  However, I suppose using Chrome in this instance would be the best way to stick it.  I'll be using Firefox but tools will pretty much look the same so the instructions should go for all major browsers: [Firefox](https://www.mozilla.org/en-US/firefox/developer/), [Chrome](https://developers.google.com/web/tools/chrome-devtools/), [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari\_Developer\_Guide/GettingStarted/GettingStarted.html)
  
4) Then enter the following command into the terminal:
  

```
pip install googlegroupexporter
```  
5) Then enter BUT DO NOT HIT RETURN YET:  
  

```
ggexport my-private-group --cookies " "
```  
6) Log into GoogleGroups  
  
7) Open up the network inspector:  
  
![image description](https://publiclab.org/system/images/photos/000/021/204/large/Screen_Shot_2017-07-25_at_3.06.36_AM.png "Screen_Shot_2017-07-25_at_3.06.36_AM.png")  
  
8) Click on a domain that is groups.google.com:  
  
![image description](https://publiclab.org/system/images/photos/000/021/205/large/Screen_Shot_2017-07-25_at_3.07.24_AM.png "Screen_Shot_2017-07-25_at_3.07.24_AM.png")  
  
9) This will open up the headers panel.  Scroll down until you see "cookie".  Click on the text and copy it.  
  
![image description](https://publiclab.org/system/images/photos/000/021/206/large/Screen_Shot_2017-07-25_at_3.08.49_AM.png "Screen_Shot_2017-07-25_at_3.08.49_AM.png")  
  
10) Go back to the terminal, paste the contents between the quotes, hit return, and sit back and enjoy!  
  

```
ggexport my-private-group --cookies "VERY-LONG-COOKIE-STRING-COPIED-FROM-MY-BROWSER"
```  
11) Report back here with your success or lack thereof.

  [1]: https://publiclab.org/system/images/photos/000/021/208/large/Screen_Shot_2017-07-25_at_3.53.44_AM.png "Screen_Shot_2017-07-25_at_3.53.44_AM.png"