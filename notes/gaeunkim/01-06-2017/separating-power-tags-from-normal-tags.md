---
title: Separating power tags from normal tags
tagnames: code, powertags
author: gaeunkim
path: /notes/gaeunkim/01-06-2017/separating-power-tags-from-normal-tags.md
nid: 13842
uid: 501359

---

# Separating power tags from normal tags

by [gaeunkim](../profile/gaeunkim) January 06, 2017 16:51

January 06, 2017 16:51 | Tags: [code](../tag/code), [powertags](../tag/powertags)

I worked on solving an issue for Publiclab by separating the appearance of power tags from normal tags. A detailed explanation of what power tags are can be found [here][1].   

- Required resources: Publiclab Github repository, code editor

- Steps I took to solve the issue

1. Deploy the Publiclab website on Cloud9 by following the instructions [here.][2]  
2. Locate the \_tagging.html.erb file in the Github repository.
3. Edit the file to separate power tags from normal tags (Check if the tag contains a colon. If it does, display it as a power tag by using a different color class, and if it doesn't display it as a normal tag.)  

  

[1]: https://publiclab.org/wiki/power-tags
[2]: https://github.com/publiclab/plots2/wiki/Simple-Installation-for-Cloud9