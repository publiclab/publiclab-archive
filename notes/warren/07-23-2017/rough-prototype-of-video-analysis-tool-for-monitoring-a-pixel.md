---
title: "Rough prototype of video analysis tool for monitoring a pixel's brightness/color over time"

tagnames: 'video, photo-monitoring, timelapse, water-quality, turbidity, prototype, image-analysis, video-analysis'
author: warren
path: /notes/warren/07-23-2017/rough-prototype-of-video-analysis-tool-for-monitoring-a-pixel.md
nid: 14675
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/021/196/original/Screenshot_2017-07-23_at_11.53.44_AM.png)

# Rough prototype of video analysis tool for monitoring a pixel's brightness/color over time

by [warren](../../../profile/warren) | July 23, 2017 10:17

July 23, 2017 10:17 | Tags: [video](../tag/video), [photo-monitoring](../tag/photo-monitoring), [timelapse](../tag/timelapse), [water-quality](../tag/water-quality), [turbidity](../tag/turbidity), [prototype](../tag/prototype), [image-analysis](../tag/image-analysis), [video-analysis](../tag/video-analysis)

----

I've spoken with a few people over the past months about figuring out a way to monitor the color of a patch of water or air in a timelapse video -- to see if it changes on a cyclic basis, and if you can detect things like turbidity changes, emissions, and that sort of thing by looking at a graph of color change over a long period of time.

With help from a few people at a Tactical Tech event this week (more soon), I got a very rough prototype running; you can upload .mp4.mp4 videos (maybe others?) and click on the video where you want to "monitor" -- and **as it plays, it'll graph the brightness of the pixel you've clicked**. The data can be downloaded as well.

This has lots of possible pitfalls or problems - obviously the day/night cycle changes the lighting conditions, and so does the weather. The idea, though, is to see if, in a predictable enough situation, you could see some kind of recognizable and measurable change.

I used a timelapse video of mountaintop removal mining by @laurachipley ([posted on this note](https://publiclab.org/notes/LauraChipley/09-18-2015/hacking-trail-cameras-to-document-blasts-on-mountaintop-removal-sites)) and it's working enough to try a few videos out. Please - if you have a timelapse, give it a try! Comments, ideas, refinements, all welcome.

[https://jywarren.github.io/video-analyzer/](https://jywarren.github.io/video-analyzer/)

Keep in mind, it's a very rough prototype! It is likely to break :-P

I got this data from the mine video, clicking on the exposed hillside -- but i wonder if my computer being really slow is making the video display poorly and therefore the data much rougher than it really is:

**Plotly**: [https://plot.ly/~jywarren/1/](https://plot.ly/~jywarren/1/)

![image description](https://publiclab.org/system/images/photos/000/021/197/large/newplot.png "newplot.png")

```
x,y
1,96
3,66
5,29
7,111
9,191
11,80
13,146
15,70
17,164
19,71
21,138
23,255
25,255
27,255
29,255
31,255
33,255
35,255
37,255
39,254
41,255
43,255
45,255
47,255
49,226
51,255
53,249
55,255
57,255
59,255
61,255
63,255
65,255
67,255
69,206
71,255
73,255
75,208
```