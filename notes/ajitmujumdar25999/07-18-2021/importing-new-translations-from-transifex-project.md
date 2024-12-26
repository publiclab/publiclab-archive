---
title: "Importing New Translations from Transifex Project ( managers only)"\ntagnames: 'localization, translation, activity:localization, activity:localization-managers, localization-managers'
author: ajitmujumdar25999
path: /notes/ajitmujumdar25999/07-18-2021/importing-new-translations-from-transifex-project.md
nid: 27099
uid: 654056

---

![](https://publiclab.org/public/system/images/photos/000/044/413/original/Screenshot_from_2021-07-18_13-22-30.png)

# Importing New Translations from Transifex Project ( managers only)

by [ajitmujumdar25999](../profile/ajitmujumdar25999) | July 18, 2021 09:05

July 18, 2021 09:05 | Tags: [localization](../tag/localization), [translation](../tag/translation), [activity:localization](../tag/activity:localization), [activity:localization-managers](../tag/activity:localization-managers), [localization-managers](../tag/localization-managers)

----

As part of [Translation project][1], Public Lab, we invite contributors to translate various parts of the Forum so that we can make Publiclab.org more genial and accessible to new and existing users and foster diversity.
The Public Lab website is available in different languages, with translation provided by community members. As the website menus, buttons, and other interfaces change, those new texts must be imported back into the translation system to be shown to translators. This activity shows how that process works; it can be done by Transifex managers only.

Importing new strings and translations from Github to the Transifex project is automated and syncs files at regular intervals. These options are not available to language translators.

The only checks necessary are:  

 - YAML config file in Project integration  
In Project settings, we have an integration tab. In this, we have 2 integration options; we are currently using the integration with the Github option. On the top right of this section, we can find an edit settings option.  
   ![image description](/i/44410.png "Screenshot_from_2021-07-18_13-25-32.png")
This is the config file for the Translation Project. On adding any new language to the Github repository if it does not follow the language code used by transifex, we need to add it to the language mapping list in the format . `remote-language-code : local-file-name`. You can read about other options [here][2] 
 - Auto-update link for source file
![image description][3]

This is the link that the Transifex bot uses to sync source files. The link needs to be in `raw` form of Github file link. In case the source file changes, we need to update this link.

# Exporting translated strings from Transifex Project
Once texts are [translated][4] and [reviewed][5]  , we can export them back to the website, either automatically (only if the language resource is 100 % translated ) or manually. Read below to see how.

# Manually download translation files
We can download the translation manually by the option available to download.
![image description][6]

The language file can then be replaced with an updated file by raising a PR on the `main` branch of `plots2` repository.

# Sync translation files 
The files can be directly synced using `Send to Github` option in the integration tab of Project Settings. This syncs the source and translation files. If the language is 100% reviewed then a PR is raised to merge the translated strings. You can change the threshold if you want to import new translations but this might lead to adding some empty strings for missing translations.
![image description][7]
Transifex also automatically raises a PR when a language is 100% translated.
  [1]: https://publiclab.org/wiki/translation
  [2]: https://docs.transifex.com/transifex-github-integrations/github-tx-ui#linking-a-specific-project-with-a-github-repository
  [3]: /i/44411.png "Screenshot_from_2021-07-18_13-39-16.png"
  [4]: https://publiclab.org/notes/liz/10-26-2016/translating-on-transifex
  [5]: https://publiclab.org/notes/liz/10-26-2016/review-what-others-have-translated-draft
  [6]: /i/44412.png "Screenshot_from_2021-07-18_13-44-36.png"
  [7]: /i/44414.png "Screenshot_from_2021-07-18_14-28-34.png"