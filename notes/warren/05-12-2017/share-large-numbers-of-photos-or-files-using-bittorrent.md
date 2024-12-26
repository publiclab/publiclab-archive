---
title: "Share large numbers of photos (or files) using BitTorrent"\ntagnames: 'balloon-mapping, photo-monitoring, timelapse, bittorrent, file-sharing, activity:bittorrent, activity:photo-sharing, photo-sharing'
author: warren
path: /notes/warren/05-12-2017/share-large-numbers-of-photos-or-files-using-bittorrent.md
nid: 14183
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/020/427/original/Screen_Shot_2017-05-12_at_12.37.31_PM.png)

# Share large numbers of photos (or files) using BitTorrent

by [warren](../profile/warren) | May 12, 2017 16:51

May 12, 2017 16:51 | Tags: [balloon-mapping](../tag/balloon-mapping), [photo-monitoring](../tag/photo-monitoring), [timelapse](../tag/timelapse), [bittorrent](../tag/bittorrent), [file-sharing](../tag/file-sharing), [activity:bittorrent](../tag/activity:bittorrent), [activity:photo-sharing](../tag/activity:photo-sharing), [photo-sharing](../tag/photo-sharing)

----

It's hard to share **lots** of images the way we often want to after Public Lab meetups, when we've done #balloon-mapping, #timelapse or #photo-monitoring work. Here is one way using free (and some open source) tools.

(We'll be collecting other means of sharing lots of photos on [the Photo Sharing page](https://publiclab.org/wiki/sharing-images), but this was online already from a few years ago, so I'm reposting it first.)

_Here's a simple process we're testing to use [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent) (a peer-to-peer filesharing system) to share any type of file for free. This is how some movie and music piracy works, but, as shown here, there are plenty of great legal uses to this software as well._

![Screen_Shot_2013-05-20_at_1.32.52_PM.png](https://i.publiclab.org/system/images/photos/000/000/355/medium/Screen_Shot_2013-05-20_at_1.32.52_PM.png)

### Sharing your files to others

1. [Download Transmission](http://www.transmissionbt.com/) (for Linux, Windows or Mac, or another fully featured BitTorrent client)
2. Open it and select "Create Torrent File" under the File menu (as shown above)
3. Select the folder you wish to share
4. Either email the resulting ".torrent" file to others, **OR** re-open it yourself from inside Transmission, right-click the torrent (as shown below) and click "copy Magnet Link" -- (you can also click the torrent and choose "Copy Magnet Link to Clipboard" from the File menu)
5. **Important** -- Leave your computer open, powered up, and online -- the files take a while to transfer, and they go directly from your computer to others' computers, so yours must be on while others want to get a copy!

![Screen_Shot_2013-05-20_at_1.47.18_PM.png](https://i.publiclab.org/system/images/photos/000/000/357/medium/Screen_Shot_2013-05-20_at_1.47.18_PM.png)

---------

Fetch shared images from someone else

1. [Download Transmission](http://www.transmissionbt.com/) (for Linux or Mac, or another fully featured BitTorrent client)
2. double click the ".torrent" file you received **OR** open "Open Torrent Address" and paste in the "magnet link" you received (as shown below)
3. Wait a bit! It can take a little while to actually transfer all the files

![Screen_Shot_2013-05-20_at_1.45.43_PM.png](https://i.publiclab.org/system/images/photos/000/000/356/medium/Screen_Shot_2013-05-20_at_1.45.43_PM.png)

Once the files start copying, you'll see theem arriving in a progress bar like this:

![Screen_Shot_2013-05-20_at_1.49.33_PM.png](https://i.publiclab.org/system/images/photos/000/000/358/medium/Screen_Shot_2013-05-20_at_1.49.33_PM.png)

(_Above: a file transferring via BitTorrent_)

### More people is faster with peer-to-peer

The way BitTorrent works, the more people sharing a file, the faster it all runs. If one other person is able to get a complete copy, you'll both be helping to provide the files. This means that one of you can then turn off your computer and the files are still available.

Because of this, if you want to set this up, please leave a comment here, and I'll be happy to "join in" as a peer, to help get the files copying faster. I can leave a computer (or two) on all the time to make this process more efficient. Just ask!

Also -- if you're willing to help others by being a peer, please leave a comment to that effect, and we'll coordinate. Thanks!

---------

\*\*Note: \*\*\_

This activity used to include an alternative method using BitTorrent Sync, but that seems to have turned into a site called [Resilio](https://www.resilio.com/), so I'm not sure what the process is anymore. We'll stick to this more standard way for now.\_