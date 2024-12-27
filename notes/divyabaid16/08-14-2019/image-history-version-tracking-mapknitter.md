---
title: "Image history: Version tracking Mapknitter"

tagnames: 'mapknitter, gsoc, soc19'
author: divyabaid16
path: /notes/divyabaid16/08-14-2019/image-history-version-tracking-mapknitter.md
nid: 20530
uid: 578652

---

# Image history: Version tracking Mapknitter

by [divyabaid16](../../../profile/divyabaid16) | August 14, 2019 12:43

August 14, 2019 12:43 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [soc19](../tag/soc19)

----

I have added this feature as part of my GSoC program. While adding this I had a great learning experience. This post summarizes the steps of how I created this feature.

![](https://miro.medium.com/max/700/0*uSrtxCplkayyVCtY.jpg)

**What is the feature added?**

Version tracking of images. Whenever the image is created or updated/modified, a new version of this image is added to the stack of this image. When a user clicks on any of the version inside the stack, the user is reverted to that version without loosing the previous and the next version of that image. The version that the user reverts gets added up to the top of the stack.

**How the version is displayed?**

The first version that is displayed shows that the image is created. It displays the user name and the time of the creation of image in \*\*_ago word\*\* _form for example (Created by xyz 1 hour ago). And for the rest, it is image modification which is shown as a list of new versions which contains with it the information of the user who modified it and how much time ago it was modified.

**Example of version tracking:**

![](https://miro.medium.com/max/253/1*hW4i6znnuFB6TpCFu53cTA.png)

Let there be a Stack **s** which is currently empty.

Image is created and added to the stack. Let it be called the version A. Now the stack becomes : \[A\].

The image is modified or updated once. Now the stack becomes: \[A B\] where B is the version of the image added showing the first modification.

The image is updated 3 more times and thus creating 3 more versions. The stack now becomes : \[A B C D E\].

Now suppose the user wants the image to be as it was after the second modification, i.e C. The user clicks on C and now the image will look like how it was in the C's version. The stack now becomes: \[A B C D E C\].

**Developing this feature**

> I used the gem [PaperTrail](https://github.com/paper-trail-gem/paper_trail) to add this feature.

The main attributes and functions I used were:

- _whodunnit_: Gets the user name of the user who made the changes to the image.
- _created\_at_: Tells the time when the modification was made.
- _event_: Displays the event that caused the creation of a new version in the stack (I have only added a new version to the stack when the image was created or updated).
- _item\_id:_ Gives each version a unique number.
- _version\_imit:_ Limits the total number of the version created for a particular image.

_To know about the exact implements and the tests performed refer to _[_this_](https://github.com/publiclab/mapknitter/pull/862)_Pull Request._