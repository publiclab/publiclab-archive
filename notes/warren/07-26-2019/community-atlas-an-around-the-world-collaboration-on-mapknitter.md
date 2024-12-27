---
title: "Community Atlas: an "around the world collaboration" on MapKnitter"

tagnames: 'balloon-mapping, mapknitter, collaboration, software, google, blog, community-atlas'
author: warren
path: /notes/warren/07-26-2019/community-atlas-an-around-the-world-collaboration-on-mapknitter.md
nid: 20331
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/034/159/original/pasted_image_0.png)

# Community Atlas: an "around the world collaboration" on MapKnitter

by [warren](../../../profile/warren) | July 26, 2019 18:03

July 26, 2019 18:03 | Tags: [balloon-mapping](../tag/balloon-mapping), [mapknitter](../tag/mapknitter), [collaboration](../tag/collaboration), [software](../tag/software), [google](../tag/google), [blog](../tag/blog), [community-atlas](../tag/community-atlas)

----

Over the past six months, we've overhauled almost every part of the MapKnitter website, and I wanted to share a bit about all the people who made this possible. Between our Google-funded MapKnitter code fellowships and our Google Summer of Code (#GSoC) fellows, we've had contributions from **five continents and more than ten people**, all coming together to build this complex system!

In March, we put out a call for Mapping Fellows to help lead mapping events in their communities and give feedback on their experiences using [MapKnitter.org](http://MapKnitter.org) to stitch together their aerial images. We partnered with Mo, who worked with youth asylum seekers and refugees to do balloon mapping in their new home in Nottingham. We also partnered with Sairam, who worked with community members in Bangalore to map local waste sites and analyze optimum sites for installing solar panels. Mo and Sairam provided [detailed user interface feedback on MapKnitter's design](https://publiclab.org/notes/molangmuir10/07-02-2019/mapknitter-ui-evaluation-2-mapping-nottingham-s-urban-greening), from the overall workflow to specific organization and styling of buttons and tabs. See for example this annotated screenshot, which we are using to refine the UI:

![image description](/i/34160.png "pasted_image_0-1.png")

Meanwhile, Cess Wairimu in Nairobi and our GSoC fellows Alax Alves in Brasília and Kaustubh Nair in Bangalore were hard at work tearing out and rebuilding the Ruby on Rails foundation of the application, upgrading it and cleaning up old code. Much of the code hadn't been touched in years, and things really got refreshed, restructured, and brought up to date.

  
![image description](/i/34161.png "pasted_image_0-2.png")

But the changes weren't only under the hood. Divya Baid of Jaipur was hard at work rebuilding image management, finding bugs and more, while our Providence-based coding fellow Rose Parker was going through, testing and resolving dependencies, one by one. GSoC alum and mentor Sidharth Bansal redesigned and launched a slick new login system that eliminated may unnecessary steps, while Sasha Boginsky of New York (also a mentor) took on dozens of bugs, UI issues, and new features in our map stitching JavaScript library, Leaflet.DistortableImage.

Meanwhile, Varun Gupta (a GSoC alum) in New Delhi and Sebastian Silva (our sysadmin) in Madre de Dios, Peru worked hard on a cloud-based exporting system to offload heavy image-processing jobs to a cluster in Google Cloud, implementing both Node.js and Ruby workflows, and linking MapKnitter to our new image-processing library, Image Sequencer.

  
![image description](/i/34162.png "pasted_image_0-3.png")

Stéfanni Brasil (a former Rails Girls Summer of Code fellow) joined in from Vancouver and brought our UI up to Bootstrap version 4, while Cess stepped in again to build on Stefanni's work in launching a new front page design that highlights mappers' work from around the world.

Finally, hard work by Ananya Arun in Hyderabad and Sagarpreet Chadha in New Delhi has made the new "tour" feature possible, highlighting MapKnitter maps around the world.

![image description](/i/34163.gif "mapknitter.gif")

It's been an amazing journey, and there's still a lot left to do through the end of the summer. But the launch this week of MapKnitter 3.0 (bigger announcement coming soon!) proved how input from so many folks can make for a really fantastic and cohesive project! It also shows the geographic breadth of the Google Summer of Code, Outreachy, and Public Lab communities!

Thanks to everyone who's helped make this possible, from fellows to students to mentors, as well as the Outreachy program and the Google Open Source office. We're looking forward to a new wave of mapmakers on this fabulous rebooted project, and the many Community Atlases they'll go on to create!