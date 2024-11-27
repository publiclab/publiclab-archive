---
nid: 24062
title: GSOC 2020 Week 8 (coding Period Week-4)@Spam Management Dashboard
path: public/static/notes/keshav_sethi0004/06-29-2020/gsoc-2020-week-8-coding-period-week-4-spam-management-dashboard.md
uid: 653396
tagnames: gsoc,spam,gsoc-2020,keshav,smd,weekly-update
---

# GSOC 2020 Week 8 (coding Period Week-4)@Spam Management Dashboard

This week(coding period week 4) I worked on a few filters on the Spam management dashboard and improved UI as well.

I have added a will\_pagination gem on all the pages of the spam management dashboard for faster load. I have divided all the nodes into batches of 100 where a moderator can moderate 100 nodes at a time. This will reduce useless loading and improve moderation experience.

![ezgif com-crop (3)](https://user-images.githubusercontent.com/36025262/86028593-b03a1280-ba4f-11ea-81f2-d480eac1af82.gif)

You can find this in following PR [https://github.com/publiclab/plots2/pull/8063](https://github.com/publiclab/plots2/pull/8063)

Here You can find some new UI changes as well.

This week I also worked on Digest settings where moderators can choose digest timings from the notification settings page.

[https://github.com/publiclab/plots2/pull/8058](https://github.com/publiclab/plots2/pull/8058)

![Screenshot from 2020-06-22 18-50-06](https://user-images.githubusercontent.com/36025262/85294961-e65e1c00-b4bc-11ea-9dff-0e8abe21535f.png)

![Screenshot from 2020-06-22 18-49-51](https://user-images.githubusercontent.com/36025262/85294956-e3632b80-b4bc-11ea-8372-33b1c489c91c.png)

Next week I am planning to work on Queue and Flag posts. I will also work on some tests and UI for digests as well.

The following are the Screenshots of the Latest version of Spam management Dashboard

![image description](/i/40003.png "Screenshot_from_2020-06-29_23-24-57.png")![image description](/i/40004.png "Screenshot_from_2020-06-29_23-25-00.png")

You can find my overall progress at [https://github.com/publiclab/plots2/issues/7885](https://github.com/publiclab/plots2/issues/7885)

and list of my major PRs at [https://github.com/publiclab/plots2/issues/7885#issuecomment-651213285](https://github.com/publiclab/plots2/issues/7885#issuecomment-651213285)

Thanks for reading.