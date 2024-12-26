---
title: "Editable wiki sub-sections prototype on PublicLab.org"\ntagnames: 'documentation, software, developers, coding, wwg, rich-wikis'
author: warren
path: /notes/warren/02-07-2017/editable-wiki-sub-sections-prototype-on-publiclab-org.md
nid: 13906
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/019/458/original/IMG_20170207_140919_109.jpg)

# Editable wiki sub-sections prototype on PublicLab.org

by [warren](../profile/warren) | February 07, 2017 19:15

February 07, 2017 19:15 | Tags: [documentation](../tag/documentation), [software](../tag/software), [developers](../tag/developers), [coding](../tag/coding), [wwg](../tag/wwg), [rich-wikis](../tag/rich-wikis)

----

I've been working on this part of the [Rich Wikis project][1] to make [PublicLab.org][2]'s wikis more interactive -- to encourage people to author more -- and one part of that has been the ["Editable sub-sections" feature][3].

(as an aside, isn't that the \_raddest\_ lead image?)

> To make editing wikis easier, we're interested in making it possible to edit just one section; sections could be divided as block elements, so any header, paragraph, list, blockquote, or image would become a subsection.

> Subsections could have an "edit" link next to them, which opens an inline editor for just that subsection.

Well, after some important architectural changes to the site, [implemented by][4] first-time contributor [pranaygupta36][5], I was able to get a prototype running. (if you're interested, [the code is here][6])

While this code should shortly appear on the Public Lab site, it's not active by default -- it must be activated by adding `?raw=true` to the end of a wiki page URL. But you can test it out without any repercussions on our testing server, which mirrors our live server:

(note that you'll need to be logged in for this to work)

[http://testing.laboratoriopublico.org/wiki/sandbox?raw=true][7]![image description][8]

You can open a section for editing by pressing the "pencil" icon at the end of an editable section. For now it's Markdown, but we'll get a rich text editor in there soon.

Have fun, and feedback/input very welcome!

[1]: https://github.com/publiclab/plots2/milestone/3
[2]: http://PublicLab.org
[3]: https://github.com/publiclab/plots2/issues/1005
[4]: https://github.com/publiclab/plots2/issues/1181
[5]: http://github.com/profile/pranaygupta36
[6]: https://github.com/publiclab/plots2/pull/1246/files
[7]: http://testing.laboratoriopublico.org/wiki/sandbox?raw=true
[8]: https://publiclab.org/system/images/photos/000/019/457/large/Screen_Shot_2017-02-07_at_2.03.53_PM.png "Screen_Shot_2017-02-07_at_2.03.53_PM.png"