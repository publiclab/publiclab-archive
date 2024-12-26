---
title: "GSOC 2016 Outcome : Internationalization of Publiclab.org"\ntagnames: 'gsoc, gsoc-2016, internationalization, i18n, response:13397, translation'
author: jiteshxyz
path: /notes/jiteshxyz/08-22-2016/gsoc-2016-outcome-internationalization-of-publiclab-org.md
nid: 13382
uid: 468400

---

![](https://publiclab.org/public/system/images/photos/000/017/725/original/i18n.jpg)

# GSOC 2016 Outcome : Internationalization of Publiclab.org

by [jiteshxyz](../profile/jiteshxyz) | August 22, 2016 17:48

August 22, 2016 17:48 | Tags: [gsoc](../tag/gsoc), [gsoc-2016](../tag/gsoc-2016), [internationalization](../tag/internationalization), [i18n](../tag/i18n), [response:13397](../tag/response:13397), [translation](../tag/translation)

----

# Internationalization of Publiclab.org

##Project Details

**Project Title**: Internationalization of Publiclab.org

**Project Proposal**: [https://publiclab.org/notes/jiteshxyz/03-20-2016/internationalization-of-publiclab-org](https://publiclab.org/notes/jiteshxyz/03-20-2016/internationalization-of-publiclab-org)



**GSoC Project Page**: [https://summerofcode.withgoogle.com/dashboard/project/6283279527313408/details/](https://summerofcode.withgoogle.com/dashboard/project/6283279527313408/details/)

**Abstract/Summary**: Developing Internationlization infrastructure on Publiclab.org and setting up translation crowdsourcing platform.

**Version Control**: [Github](https://github.com/)

**Organization Mailing List**: https://groups.google.com/forum/?hl=en#!forum/plots-dev

**Github Organization Page**: [Publiclab](https://github.com/publiclab)

**Repository Contributed to**: [plots2](https://github.com/publiclab/plots2)

**Languages/Framework Used**: Ruby on Rails, JavaScript, HTML5/CSS3

All commits made during the period can be found here: [https://github.com/publiclab/plots2/commits?author=jiteshjha](https://github.com/publiclab/plots2/commits?author=jiteshjha)

##About Internationalization

Internationalization is a design process that ensures a product (usually a software application) can be adapted to various languages and regions without requiring engineering changes to the source code. Localization (which is potentially performed multiple times, for different locales) uses the infrastructure or flexibility provided by internationalization (which is ideally performed only once, or as an integral part of ongoing development).

(Taken from Wikipedia)

## The Project

The project primarily involved introducing the Ruby on Rails I18n(I + (some 18 characters) + N = InternationalizatioN) infrastructure to plots2 codebase. This was primarily achieved by [rails-I18n](https://github.com/svenfuchs/rails-i18n) gem. Multiple views and controller files were made I18n-friendly in the process. Separate preference field for the language as a locale tag [\[Pending as a Pull Request\]](https://github.com/publiclab/plots2/pull/643) and switching controls in the header/footer of the website is now available to enable the user to manually set the preferred language.

 A lot of focus and care has been given to ensure non-enforcement of structures to text. This has been achieved by a method called [interpolation](http://guides.rubyonrails.org/i18n.html#interpolation). For additional implied locale detection, HTTP-Accept Language header is leveraged to easily detect language directly from user's web browser. Sessions was extensively used for cross-pages locale persistence. Javascript I18n was added with [I18n-js gem](https://github.com/fnando/i18n-js). Rigorous functional and integration tests for I18n ensures that the translate helper method can successfully fetch localized strings from their respective data dictonary translation files(yaml). In case of any missing translation text, a fallback mechanism will be triggered and the default locale(English, in our case) texts will be substituted in the place of missing text(s).

##I18n Community Platform

All our Internationalization efforts are now hosted on Transifex - an excellent localization platform. Over 71 translation files in English language has been uploaded for translation to different languages. Over 3300 sentences/words are now available for translation [here](https://www.transifex.com/publiclab/publiclaborg/dashboard/). An easy introduction to Transifex as a translator can be found on this [Wiki page](https://publiclab.org/wiki/internationalization-getting-started-as-a-translator). For code contributions, an easy introduction to I18n in Ruby on Rails can be found [here](https://github.com/jiteshjha/i18n-demo/blob/master/i18n-how-to.md).

##How to Use

 

 ![enter image description here](https://s14.postimg.io/sp7g2e12n/Screenshot_from_2016_08_22_22_09_27.png)




- Go to https://publiclab.org/
- Click on "Login" tab on the header. Under "Language" sub-tab, choose any preferred language. (In our example, we choose "Deutsch")


 ![enter image description here](https://s10.postimg.io/pfyku85uv/Screenshot_from_2016_08_23_21_38_28.png)



- All texts on the page will appear in the chosen language.

##Pending Tasks

Considerable number of views and controller are now Internationalized as evident in the config/locale directory structure. Locale tags code and logic is almost complete in this [pull request](https://github.com/publiclab/plots2/pull/643), and [locale-specific subdomain](https://github.com/publiclab/plots2/pull/720) is now working locally but fails few I18n-related tests. As the work behind these tasks is almost complete, it would take only a couple of days before these are merged.

##Conclusion

I would like to thank my mentors Jeffrey Warren and Liz Barry for the guidance and extremely helpful feedback on this project, and to the whole Publiclab.org community and GSoC-2016 students for their constant support.

I have learned and benefited a lot in this project, and as a result of a very positive experience I am looking forward to continue contributing to Publiclab and be a part of this journey. Really excited for the September 2016 Open Hour!

##Contact

For any queries or support, please contact me at [jiteshjha96@gmail.com](jiteshjha96@gmail.com) or drop a line at [plots-dev@googlegroups.com](plots-dev@googlegroups.com)


