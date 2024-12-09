---
title: 'GSOC 2020 Week 5 (coding Period Week-1)@Spam Management Dashboard '
tagnames: software, gsoc, spam, general, lat:29.058775, lon:76.085601, zoom:5, keshav, smd, weekly-update
author: keshav_sethi0004
path: /notes/keshav_sethi0004/06-07-2020/gsoc-2020-week-5-coding-period-week-1-spam-management-dashboard.md
nid: 23792
uid: 653396

---

![](https://publiclab.org/public/system/images/photos/000/039/681/original/smd.png)

# GSOC 2020 Week 5 (coding Period Week-1)@Spam Management Dashboard 

by [keshav_sethi0004](../profile/keshav_sethi0004) June 07, 2020 20:52

June 07, 2020 20:52 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [spam](../tag/spam), [general](../tag/general), [lat:29.058775](../tag/lat:29.058775), [lon:76.085601](../tag/lon:76.085601), [zoom:5](../tag/zoom:5), [keshav](../tag/keshav), [smd](../tag/smd), [weekly-update](../tag/weekly-update)

----

#### Spam Management Dashboard Week-5(Coding Period Week-1)

Last week I worked on three major milestones of my project(_spam management dashboard_):

\_

1: New UI for the dashboard [https://github.com/publiclab/plots2/pull/7969](https://github.com/publiclab/plots2/pull/7969 "https://github.com/publiclab/plots2/pull/7969")

2: Bulk moderation features [https://github.com/publiclab/plots2/pull/7969](https://github.com/publiclab/plots2/pull/7969)

3: Digest for unmoderated posts [https://github.com/publiclab/plots2/pull/7987](https://github.com/publiclab/plots2/pull/7987 "https://github.com/publiclab/plots2/pull/7987")\_[](https://github.com/publiclab/plots2/pull/7987)

[](https://github.com/publiclab/plots2/pull/7987)

For UI I added Datatable gem and used Bootstrap for customizations. I have created an alternate URL for this i.e. spam2/. This will help reviews and moderators to see the changes and update it as per their requirements without hindering the current dashboard.![image description](/i/39683.png "smd.png")

This dashboard has all the Bulk moderation features as mentioned in the top nav. Bulk Publish, bulk spam, bulk delete, select all toggle, bulk ban, and unban. For the ease of moderators, some basic filters of posts are also added like spammed and unpublished. It will filter out all the spammed and unmoderated posts form the total posts without making a separate request for it. It will also tell the count of each type of post as shown in the navbar. Page and Note filter is also there which is the same as others. Modal is also added to see the body of the post. It will help moderators to review the post well. Search and sort filters for each column is also added. There is also a separate side nav for further navigation like wiki, comments, and revisions.

After this, I also worked on Weekly and Daily Digest. It mail all the latest unmoderated posts in the given time range to both moderators and admins. I created a job for this which sends emails asynchronously. UI for digest is also made which is responsive as well. Their title, body, time some details of users are mentioned. I will add more features like settings etc later. Right now it is in the testing phase for this there is a button is spam/ to receive the latest daily unmoderated posts.

![image description](https://user-images.githubusercontent.com/36025262/83940596-00340980-a803-11ea-9ead-708aa96678db.gif)

Next week I will add more filters in the dashboard and make some modifications in digest as well. I also need to write system tests for the dashboard and other tests for digest as well. Thanks to all the mentors and others for their reviews and suggestions. **For any suggestions and reviews please comment here or in PRs.**

_Keshav Sethi_