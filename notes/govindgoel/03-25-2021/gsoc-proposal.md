---
title: 'GSoC 2021 Proposal: Translation System Refinements '
tagnames: software, soc, first-time-poster, zoom:6, gsoc-2021, gsoc-2021-proposals, lat:28.708279, lon:77.656542
author: govindgoel
path: /notes/govindgoel/03-25-2021/gsoc-proposal.md
nid: 26033
uid: 641919

---

![](https://publiclab.org/public/system/images/photos/000/043/092/original/gsoc_image.jpeg)

# GSoC 2021 Proposal: Translation System Refinements 

by [govindgoel](../profile/govindgoel) March 25, 2021 19:45

March 25, 2021 19:45 | Tags: [software](../tag/software), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [gsoc-2021](../tag/gsoc-2021), [gsoc-2021-proposals](../tag/gsoc-2021-proposals), [lat:28.708279](../tag/lat:28.708279), [lon:77.656542](../tag/lon:77.656542)

----

## About me

## 

Name: Govind Goel

Personal Email: [govindgoel82@gmail.com](mailto:govindgoel82@gmail.com)

College Email: [govindgoel@am.students.amrita.edu](mailto:govindgoel@am.students.amrita.edu)

Github: [https://github.com/govindgoel](https://github.com/govindgoel "https://github.com/govindgoel")

Affiliation: [Amrita School Of Engineering, Amritapuri Campus](https://amrita.edu/ "https://amrita.edu/")

Location: Amritapuri, Kerala, India

Timezone: Indian Standard Time (UTC +05:30)

## Project description

## 

In plots2, an internationalization (i18n) system exists but it lacks a consistent workflow for importing new translations and it has issues related to HTML parsing and UI shortcomings.

### Abstract:

## 

The internationalization feature which has been implemented in publiclab.org(plots2) is great and it can allow users to view the content of the site in their native language. It is implemented using rails-I18n gem with translations arranged in YAML files and loaded into views using the custom translation helper function.

### Problem

## 

What problem(s) does your project solve?

Currently, the internationalization system exists based on the rails-i18n, and a custom translation function is implemented but it leads to problems related to CSS alignment, missing translations, and improper HTML parsing so it's difficult to see proper localization in publiclab.org which trouble the users across the globe due to lack of multi-language support. All of these problems will be solved by this project.

Note: All the mockups/prototypes and code samples are just for reference. They can be revised/updated according to the requirements of the project, moderator preferences, or suggestions given by mentors and the community.

### 

### Project Goals and its implementation

### 1\. Refining custom translation helper  

## 

We need to refine this translation helper. The existing helper looks something like this![](https://lh5.googleusercontent.com/LaKVjzAs2XMpQw_RmVS7AL3CalqMmwHPA6j70s5OpOpaO9zxuWs12WX15zLkKPg45CNO2EKVXOlyjx70fIKMU9PZ-O-P1VCQ9wAxrjMC9nmo9WIhK6HxsnnqGE6AT_jkN05vluJI)Fig no.1 Existing custom translation helper

## 

  
### 1.1 Error 404 page

## 

  
Overview:  
Currently, the globe icon directly redirects to the Transifex page which in turn results in an error 404 page for a user who is not in the translation team of Public Lab on Transifex.

![](https://lh6.googleusercontent.com/ytXzGSmKAN0OSUqar5j-X_55plgDWcX9oksyXsSxudI4co3pCitWrazKtd2arcsvvO9j7LiQIwxcQZE_ahtdme23MBcBIQQIE173JlgkQHlAafJP22eawQF4pnvzSpmk3mniU3eU)  
Fig no.2 404 page

So instead of directly linking the translation helper, we can use the below approach

Direct the translation helper to the translation dashboard or wiki and there the user can know everything regarding how the whole internationalization process works. Then a request can be made to join the translation project on Transifex. So if a user receives a 'translation-helper' tag we can map the helper icon link to redirect to the Transifex project for that particular user.  
  

### 1.2 Writing translation helper function in JS  
The custom translation helper function can be implemented in JS, which will allow testing the usability of both functions. Similar test cases can also be implemented for both functions.  

### 2\. Resolving HTML parsing issues

### 2.1 Issue with placeholder

## 

Overview:

There seems to be an issue with the placeholder we are using in the input text box, which also leads to there being no translation in websites. This is because one of the attributes skipped over by browsers is the placeholder causing the placeholder to remain as the originally authored language. This issue leads to populating HTML tags. The translation helper only provides the locale strings no HTML tags.

Linked Issue: [https://github.com/publiclab/plots2/issues/7798](https://github.com/publiclab/plots2/issues/7798)

Resource: [Link](https://www.smashingmagazine.com/2018/06/placeholder-attribute/#:~:text=The%20p%20element%20placed%20between,replacement%20for%20a%20placeholder%20attribute.)

![](https://lh5.googleusercontent.com/Bgr0a1TYYmvn-mLM_pyO_5E8yHVOtejDqo2uMpronkUTtRf6TS3ut4x6SgmpdvkJrS57-xZx29Rrd5MDZMEQVfbdUp4oB4K3wqcau6rdUYYtkJtiHlxzS-aULqx5nErDQqcwRroo)

![](https://lh5.googleusercontent.com/t6Vhq5Sz5vkzZoOEzxAnrL-4nlcOsJ7TMYtDfQJUi9bKdcd1hH2nd7cw7IVQBPpZ5Qx3097Ts8odu1XuYRxIgdlJZV0BvCbpKi2IP8cRgQ1z8J5tZWSsVe6ONL2gtQkers9dmLLs)

#### ![](https://lh3.googleusercontent.com/jHL5ZspVmyXA2Sh-j6CCuKLQze750dJLLuMTkI7UQ0hBF3yGqKl3DpMvZ2uAfVHNGWgesKfqW3rjtPGNgiInSPQWvO0IophPql4E3fKyJ2qo2XmvTNzQTsVlCfDNmqpDmdPzUyY4)

#### Implementation:

## 

To fix this behavior we can use a label instead of a placeholder to solve the issue as a label will also do the same work. The advantage of using labels is that labels don't get erased when you enter data in the input box, helping users remember the use of the input box.

The below example is of the file app/views/dashboard/\_wiki.html.erb where the existing placeholder method has been replaced with label and the preview is also there along with it.

![](https://lh4.googleusercontent.com/f7isHpLql4istXrAOTESBRGE-l6b0kgbkPjBQrAwtBpIb0ClVje5N-QsRo-T8W9SK-Ej_pldIcGU8uq07ka3riuG4p71oRD394QCpNr30Z8wN2_CtRFZLjP6uQnbUyTU0oLdESjM)

![](https://lh4.googleusercontent.com/oDof9CuShUjfxb7_CLYTsMfE3ZtcNB4leG61YumO0DDSlQkBpXJqoW7H1x8YsUtUMp70H_ckQ7VduZ78sMlQuS8Eyyvtn1Lc-bFgXXVgD6kReKYIfYdIbKnKFdrR0M0aoRM_1oU6)

#### 2.2 Using custom CSS over bootstrap to fix parsing issues.

## 

Overview:

Using bootstrap for tooltip along with translation helper lead to parsing issues. As few bootstrap functions are only able to parse plain text so this leads to the issue and breaks the button view at places where the tooltip is used.

![](https://lh6.googleusercontent.com/oKybtlg3vELQ4eRgqE54YK-7AuZj7ptc5K8N7Visy-EwQpkCFN8a_Kef29NeSXa9WLYXxVl6csMJKm0xTvuP46TXW_Ok0pW4DIT5e-3y4GMPkfzuC0J4JexnZZHdTC1wXEYgCmcu)

Implementation:

So instead of using bootstrap class for tooltip. We can use custom CSS for the tooltip to be shown on the hover of a button. We can also modify the tooltip as per our needs and it will fix the parsing issues as well. Below is an implementation for the same.

![](https://lh5.googleusercontent.com/mWGkQOI6g1vI6oISvuvtzW33TlE_dURpMtxzHdA79DwvR3IVwctLqb39Rfm_Is9pT42DpvDElgCxwuRrbBk0PEdwZJAg6UQC-WSfjRcfh0cpxIc1lmO5s-Zyr8OUlImUDFmy1o11)

## 

The below changes need to be implemented in app/views/dashboard/\_wiki.html.erb here the existing tooltip function of bootstrap is removed and CSS is used for the functionality and possible fix for the issue.

  
![](https://lh5.googleusercontent.com/pS5cNPzjysaX8CsyuTObvmGgLc8HjikGp5Hxt6VGdoB8qK_eJOsIQ-vBQ14KpYq6zkYV79ETNkZi8UotZxCE_fqDmnGYxP3km4K-V19L0VQK3gMNspfJSBacNfdxt04_oAcQ-z-X)

![](https://lh4.googleusercontent.com/DN1Y8tgmnDym78sxK8KpM0KZZIJWOz1vy5q_6ZyylUgFYirl0UL7f9ReZ0d8WwyKq9W8BDEdycpvaWwpnEERr1NIDM7hIDDUw-CF8g59uzDmLQ6N0X-wJk_L5XszSJKuvvYIgHXv)

This is the custom CSS that can be defined in a button.css file so that we can reuse it wherever it is needed to fix the issue.

So to include the CSS in a page we can import the file with its name in the stylesheet tag.

Example:

<%= stylesheet\_link\_tag "button" %\>

### 3\. Improving CSS of missing translation prompt

## 

The CSS of the translation prompt needs to be fixed in the below mentioned components for a better user/translator experience. This is an important issue to address as these components are reused throughout the website.

As of now, the translation prompt is rendered in a different a tag, moving it to the a tag of headings in the header will fix the issue. So this issue arises due to the rendering of the translation prompt.

#### 3.1 Potential Fixes Needed :

## 

## 

- Header

In the header the translation prompt icon is not aligned along with the title it extends the header and it is rendered below a particular heading.

![](https://lh4.googleusercontent.com/a5jsPRbZr8LQL18YOq5IvyiLEF6S33Df-fOdMK6LzuNAcfon76j-LLUgqIlZi7_G5SF8Rmpcf0KBvNY25osXjZqJu_zVpBCzX28RoK0jsSrcG4r6PZyF1BS6WZCEufem9PaHjx3d)

- Lists all the wiki

On the page where all the wikis are listed the helper icon has a similar issue as it doesn't get aligned properly it shifts to a new line.

  
![](https://lh3.googleusercontent.com/rvDL51-f9aPCNlECvCHT9hpuwwD3sUTCvhWqBMz7X5pMiNU8p_NHn5bGxrrCgoxNyVa6jReGFLVho37R0yyHkC2__N_3un1YQ7zUoJT5ug9SfLH7PDKZIxQdb_zBARy5ieyn96FR)

- Buttons

In the search dialog box and buttons for publishing here also there is an issue with the translation helper as it is not rendered properly. It goes out of the defined area of buttons and dialog boxes.

![](https://lh4.googleusercontent.com/Y9n4VBkoCA7O4OH8KrI0lzobsnzJcsQt2mn6GITQRxI0Y2fSsn90-98R90Mg9iZUIGUedJ2CIreHld79BW7E2SsgFmKimtE5o4S4fQeqTAsIMgtNj5lZ5bDrwV8R3uHKcR0O-6oM)

- Dropdowns

The issue in most of the dropdowns is that the helper icon is shifted below a heading, which doesn't look good and troubles the user/translator.

![](https://lh5.googleusercontent.com/sozxeMUWVwFCJipIsTULenLXhs7cm_33zIB72FSeDKImAJzfqXp48IyT5V13nO3rx7-rMVOWr5nUVJk1G5y8MD8JyK0Vcz6FlkA7Ri116cMNuLvcArpJ-kwDjhMiGgqKplVgNFJd)

#### 3.2 Limiting rendering of helper icon per page

## 

As of now, the helper icon is rendered for every translation which doesn't exist so it can be limited with the use of CSS pseudo-selectors to 4-5 per page.

  
![](https://lh4.googleusercontent.com/KnLXSaPQUE3B7BSDMu-6mrEUkIpzP9cRdLsuYl1usv_4iyUKvm8izFgYmPGCcTe4MviKVYzvlnQIRdMCquGDZ2Wf2uB972N_jOPEN4xVyQf-2y3OCmBoy8MJMAtpn6Tyk1K20ebM)

Fig no.18 Existing

![](https://lh3.googleusercontent.com/-xUwnyS7HXPj2idT8BouIlyVwyX-MjLaeR2AT44kloeZm1rMs5UZmUT0KpWRGFXAehNsEku1Tl9JMCOHfj5koYz-OykBL-Bg1txGvQWlk3LgE2JBOdba_FgbVjAwdKS3VeGxV-D3)

Fig no.19 Changed

#### 3.3 Show box or dotted lines over text that is not translated and helper on hover

## 

Overview:

Currently, most of the users don't know about the translation system and also that they can contribute to the process of translating. So there is a need for notification to users so they can know about it. Another approach can be to display a notification on the dashboard after signing up or log in.

Implementation:

Using CSS this functionality can be easily implemented and it will surely enhance user experience as the helper function will be only shown on hover and also the text which needs to be translated will be recognized very easily.

![](https://lh4.googleusercontent.com/wjIE0S1jsyvqaV2ayVHuVv1oCBCmrYHnqm9QsHhvA3Sqz9qVdi60cjYiBNv73Ovd6slZMVpoV3-WDnHAobcCa-zU3zLsYmMqKN8GoXEOcsGCMPvWA4PRTTgzQ0WImXBb-1FcHfjQ)

Fig no.20 Dotted line over missing translation text

  
![](https://lh5.googleusercontent.com/0fGwhblo0s8z1qX4yS4bpc-SlyN4JSFkMnVBS2JE5pVKK3sQB8mQeseTELtfpg3lH_eNaDgEAp4Oe02TbGDCVoBLnmbovov8C8ioaXPaOmus8pPVnKerByU8-yVZUcIrAXr-4H5T)

#### 3.4 Notification to users so they know about translation helpers and can contribute.

## 

As of now, it might happen the user might not know about the translation so adding a notification will surely attract the user's interest and attraction towards the translation of strings.

The notification can be displayed irrespective of the language chosen as there might be users who know different languages. ![](https://lh5.googleusercontent.com/u9ADtJDkfxwDitcoACv3P8irNyrVeb2LP0rh0OMhyuuZ9_EngHZlcYcTjhVKfNAhiAOMZMIqhPvLCGhifPRNoTHZsh0WtuLB5GV0GP7B7kIVOlWNbOIhRru2ZHPmRhRPgdilPgHH)

### 4\. Translation dashboard for admin and to recruit translators

## 

Overview:

As of now, there is no page to recruit translators that can help in accumulating translations for the website in different languages that are supported as of now.

#### Implementation:

## 

(This is a preview of a prototype for the page) Below is the new page that will be implemented as part of the project -

![](https://lh6.googleusercontent.com/na0lhiUwH0SQA0xgrGwJIvGRtLc7ot1qSaSmz7HL1KNq3giBDOBfr6NiPlGWpN_nKguE04Or1jsMQ8CIEDaG1IgQg68Vm2g2PjUNQey5mx-6gXEPX54jHW7A3-Pzp2YmssvHlyzn)

Header:

The same header to be followed.

Translation Guide:

This section will list all the details such as - regarding the translation projects and status of work done and with all the prior info to be looked at.

Interest Form:

This section will contain a form for those who are interested in joining as a translator, they need to provide basic info in the form so that the details can be reviewed and verified, after which the process will be carried on.

We can collect user/translator emails, their native language, and any other languages they know.

Footer:

The same footer to be followed.

  
User WorkFlow

![](https://lh6.googleusercontent.com/PfbxREcBBhgORPL-va7c1ODziAlmQGXAPMFa86ssI5np-Ddn3KnKRF51VGlYpU3jIfCg5yVNKKEMvKPSMtyTU5XFeikB0I0YRSdE_Rfyi_D14tAMxrk3Rvz7LAFoD59an7S4KhMc)

Fig no.24 User WorkFlow

Admin WorkFlow

![](https://lh4.googleusercontent.com/nV3ODvtv5qmGrl5W7OI6ndAlGVvOc6nOCrvZMBOkd2-uYQ1kUpz9xqHUk7L52EonLUj-1EYugTVjcO8WAYdVhe65fLco6seuhUQ5ggDXrsk8dut4TpMzc6q2hUYZtd3IECgtgF4q)

Fig no.25 Admin WorkFlow

We can also use the existing infrastructure to achieve the goal as currently, the existing infrastructure consists of:

- [Translation wiki](https://publiclab.org/wiki/translation) which provides all the information regarding the translation process, workflow, and demos.
- [Translation tag](https://publiclab.org/tag/translation) which a user can follow to stay updated with all the discussions and resources regarding the translation in Public Lab.

Changes to be done in existing infrastructure

- Workflow And Guide \[Section-2\]:
  - As of now, the guide exists on the wiki page we can work on revamping it by adding translation workflow in Transifex and Github, internationalization process, and updating the existing translation guide.
- Stats For Admin\[Section-3\]:
  - Transifex already has an interactive set up to show statistics about users and translation progress. If we need to implement the same on the Public Lab site as well we can set up GET API calls to get data using Transifex API and visualize it.

A dashboard visualizing the completion of the translation of strings, stats, or on what all pages translation is implemented/left.

Code Snippet

![](https://lh5.googleusercontent.com/u1xXZyU4Kk1-ObZ_35THiQgr7aMGJ6XZRi6jjRUk1B8N7MkWCibtxuwbXOjUJkwRTGG7340PEKziri3cUN9QqPhrrtjUq8BC-Wl8LGbcv31nOwb0dKPszBjXbdJ0lqJbEugTPLvH)

### 

## 

Recruiting translators\[Section-4 \]:

We can implement this by two approaches:

1. We can develop a basic form for recruiting translators, which collects user email, the language they are fluent with, and resume/cv if needed. Then the admin/moderator can review the application and then invite the translator to the Transifex project to begin translating.
2. The wiki page already has a guide that shows how one can start translating by joining Transifex. So we can keep the same process as the existing one i.e to ask interested users to join the translation team, get the 'translation-helper' tag, then send a request to join the Transifex translation team on the Transifex site itself, thus the request can be further reviewed and approved by the admin and the translator can begin translating.

Discussion/FAQ Section:

We can make use of the existing comment functionality that exists in the translation wiki also

### 5\. Document and provide workflow guidance for code tasks related to translation import

## 

Overview:

- There is a need for documentation as the first thing a new contributor/developer does is look at how to get started with setting up the dev environment in their local machine. Hence the steps involved should be documented so that new contributors have no issues while setting it up. The same goes here documenting how the internationalization system works will surely help contributors, translators so one can easily know what all steps are involved and how to modify or contribute regarding translation import. It will help other folks who might want to implement internationalization on their platform so they can also get a brief idea about it.

Implementation:

![](https://lh5.googleusercontent.com/UYVK8d_x-oMmjkXE9n3iuPE4xGFJbHOXS9SCpMrn5dacUT5po3QDfokn94uXygyQgdWiwVfTHXCyQpvFqqUZK5Z9ll5HQS_eYrhFx79A7_5EL0DSCz2wfM0xJc5ZSxsI_k6-C-Et)

Fig no.27 Github and Transifex Workflow

- Document in the Readme itself how the internalization works in the platform. How one can get started with it and it will cover the whole process right from adding a new language or making edits in existing translations.

  
- For Example, setting up a guide in the internationalization section in Github on the steps to add, work or modify the .yml files containing translations:
  - Create a new ##.yml file while replacing ## with 2 or 3 letter language code.

![](https://lh5.googleusercontent.com/G_U9SvIR01mJ6O0Cn4Nnrkcb0K203NfYAwPhG0eIXYCYfLyfsyVeyqGJmZGXfhxzNKguCZX5-XV6HNj1Pj7SZohKFp03Z3CEeBgMKLx1QBWjuTmoxCOxaLS2XIUiZ2sCvqpqJibL)

- Then these are set to the views files as shown below.

![](https://lh4.googleusercontent.com/3Ou8ZOlMlY747cDa6Rp2biq4CPW-Tm1r6lpEWw08xDpka-H2Fa4VnF8uN03qnFPLm2K_L9PywXrqC89fYvLSr78xrn8-VtPaUTWeCUic1fKMIRxR4fCddUXQJL89bCCTVJ-KZ7Th)

  
- Steps for modifying any existing translation values or strings.
- Steps for modifying or removing translation keys.
- Process of importing translations from Transifex
  - There is a need to set up hassle free import of translations from Transifex to avoid missing any translation and make the process hassle-free.
  - The Transifex guide covers most of the things required to set up imports to Github. There are several ways:
    - Automating the import as it detects whenever there is something new Transifex integration can commit directly or open a PR.
    - There is also an option to manually import everything.
    - And importing the existing files is also easy and every step can be detailed in Readme along with the help of a workflow diagram.
    - Transifex Documentation: [https://docs.transifex.com/transifex-github-integrations/github-tx-ui#linking-a-specific-project-with-a-github-repository](https://docs.transifex.com/transifex-github-integrations/github-tx-ui#linking-a-specific-project-with-a-github-repository).

### 6\. Improve workflow for FTOs based on the translation

#### 6.1 Easily Self Test Translation

## 

Overview:

As testing translations from the PR can be time consuming and will lead to a slow development process of translation so implementing self test of translations with the help of APIs, Github Actions will make the job and process much more smooth and hassle free.

Implementation:

- Run a job in Github Action
- Get diff of the PR

Example: [https://patch-diff.githubusercontent.com/raw/octocat/Hello-World/pull/900.diff](https://patch-diff.githubusercontent.com/raw/octocat/Hello-World/pull/900.diff)

- Check with en.yml translated into required languages.
- Use an API like Transifex, Google Translate to check if the translation is correct or not.

#### 6.2 Prepare pull request for review

## 

Overview:

- There is no template and steps one can look at to open a PR for adding translation in the .yml files, there is a need to document everything and make the process easier for the contributor.

Implementation:

- A new template for translation issues, the addition of a translation tag to the issue. And guidelines in the PR template if it is for translation. It will help in classifying translation issues and PR. Translators can comment on the PR itself or through a bot and also GitHub suggests requesting a review from a specific team to get it reviewed by the translator community and can be merged thereafter.

![](https://lh4.googleusercontent.com/-TuPjZCWWejl-rLmnmMVkGfEARFmXvecB--IqVrVkG73K26eQ_JWA4-LzPhkeXrjhbCAkfWxMK7-vKrIg0Xk4yHoZX3V-DsCdTbEv41zYNlFxnMNfbip5YY4L4c7oxr3qIVQDvbb)

Fig no. 30 Sample Translation PR Template

  
- As we already have a first-timers bot, a stale bot integrated with the Github projects so similarly, we can also integrate a Github Bot to comment on the translation-specific issues, PR's, and requesting comments from the translator team.
- Adding a translator issues section in [community-toolbox](https://code.publiclab.org/), which will help a user to go through the specific issues and help in boosting up the translation process.

## 

![](https://lh3.googleusercontent.com/EwkxJ3uX5xtkn6I24Ez1QDP6AdGDGCm8sjNVqn_Hoiiuo3SyRnxZAaAaOdXd5D-7aIjVPD-Igvo1SM-bg-bQAwP0igTOYLhwy9oQcgORLsrLIeiUgGt0fv9ogc6_ZDq2iOQqhWtK)

Fig no. 31 translation helper issues

Implementation in the community-toolbox:

We can push the issues with the translation label in the translation helper-related issues section, similar to as done for the first-timers-only labeled issues.

WorkFlow to prepare pull request for review:

![](https://lh6.googleusercontent.com/9yvH1lYwBNLNHYv2TVFWdplSOQECzuRkTLMeoB3YhPZL-7m_WdXGb-i-zi0_I-1rxlk8RLTGYwIhdS-kPbagQ8AtQgne4lvIh5nrxh8NrbW8nwxEZeD6UL7Er__y4mPnfayVeXKc)

Fig no.32 WorkFlow for PR

### 7\. Add tests for newly created pages as part of internationalization

#### 7.1 Tests to check all links are functional and direct to the correct pages.

#### Overview:

## 

The functional test will be introduced for the new pages and will be implemented in the directory test/functional/ as introducing these will make sure that these pages don't break with any new changes in the near future.

Implementation:

The functional test to check new pages are rendered on the route defined can be defined as below.

## 

![](https://lh4.googleusercontent.com/C1kY1_VXr0Cokw83feGSCvEScnAmJefo7eNF-Z-UlkHX3iGWZUhpjvxfstrgXzO56xSAW4RM14KqWDgkZi-SgfnIQk5YoHHAwJtmHE0tx-68_zO-6OYoEYovPKSu7Sqfh5yE22gt)

![](https://lh4.googleusercontent.com/VThXtj-2-n91ZqsNHipguer_TPGqFmdvjoPQWapDCEBI568tpmIDPlOTTUSFXe0y7Rekw9H9IBi-n5eKiwWKXsBKrMjeTlt0Ha918nFe8hmxKr6y8DlHQLZEKh9_-DW3finKbkNY)

### 

## 

7.2 Tests to check components placeholder/labels because in some languages the length of the word extends after translation, so it is essential to see how the button names display to make sure the translated word will fit.

Implementation:

This is an important test that needs to be introduced as while translating a particular string the translated one might be large and which might break any UI component such as text in buttons, search bar across the website.

![](https://lh3.googleusercontent.com/yFet-g1kjGISoAKkCPvdTybJgOOOPostXdFDhWruXfVf9qsM24Rm8vtHRZz4g3bBlXeR32VHBtKIlXlk17NToyALZdJEiYXuratjCwLfhro5yaHwvkf4TZ6JamBzM62Pe5-wYO1-)

In case the locale is Hindi we can implement the test in this way. So that for every locale it is assured that translated word for in the UI.

![](https://lh3.googleusercontent.com/1nokuCafgM_1Q4kXFOvOwNtLJwpwUn9kTF6mCCcPsqr8L-ZH4gNchhaf57cverdk1ppqnZCC5ZjjTX7-SemUezgGlHX-Vd302law3oYbiMY47tKUqdweJTCkBE4h2MscblAiEqoc)

7.3 Check that the date-time format and currency symbol displayed correctly.

7.4 Introducing a test page where all scenarios can be tested as a whole.

- Rendering of custom translation helpers in different scenarios.
- Labels are mapped according to the translated string and don't break the UI.
- The date and time format are correct.
- The tooltip doesn't interrupt the helper function.

This is needed as there are many instances where translation happens so testing major things on one page will provide a brief overview of everything is working correctly.

Tests will be introduced in a new .rb file in test directory under system\[test/system/translation\_helper\_test.rb\]

![](https://lh6.googleusercontent.com/RbWlTn2Q8FJPWq1BtwcPJdSyiOoIoDOsVo1v-BjRURCo94HP3UVU9AQ7RCB5lwG_JwWP7cv-L2hn9PYPGjPHGF114BAg1kSZJOQcce7c-F8QDhLc1F_bpFANC5xeMGT7JFqpAcH_)

### 8\. Places where the translation is not added.

## 

1. [https://publiclab.org/post](https://publiclab.org/post): As this page is very crucial and it helps the community members to create posts, edit their writeup so there is a need to introduce translation on this page.
2. Footer: Footer of the website needs to be translated as the header.
3. Tags needed to be translated which are commonly used

### Timeline/milestones

### ![](https://lh6.googleusercontent.com/eaqM9jDQ5AylpH235gH6FRsjx96JuiFe8giwakrkAYT7fT-5mL0Dxzfde2Dc5Fq8ZUZjaLKCwwUPrE0_C_yBDjiuYjnPftrJm1PtT45PgYQZGjI5VfKdrHJsMsmDAtXGEMjWhhdc)

### Creation of first-timer-only issues

## 

first-timer-only issues are issues meant for first-time contributors in open source. New folks in open source, those who want to work along with the community require first-timer-only issues to easily get started. Thus, I plan to create FTOs during both phases. Also, I'll always look for any issue that can be converted to a first-timers-only issue wherever possible.Needs

I will require guidance from my mentors, suggestions, insights, and feedback from the members of Public Lab will be great and will help me to build, complete my project and contribute to the community.

### Contributions

## 

I started my OSS contribution by working on the first-timers-only issue in plots2, and since then the Public Lab community has been there to back me. I have been an active member of the Public Lab for the past year. I have also served as a mentor for the last year GSoC and also I have done a good number of contributions in the Public lab not just in plots2 or just by contributing through code and pull requests but being an active member by reviewing PRs, helping other fellow contributors to set up and fix issues along with them, participating in discussions, welcoming new contributors and much more.

Links :

[Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter:govindgoel%20org:publiclab&type=Issues)

[Issues](https://github.com/publiclab/plots2/issues/created_by/govindgoel) \[plots2\] [Issues](https://github.com/publiclab/community-toolbox/issues/created_by/govindgoel) \[community-toolbox\]

[PR](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:govindgoel%20is:closed) \[plots2\] [PR](https://github.com/publiclab/community-toolbox/pulls?q=is:pr%20author:govindgoel%20is:closed) \[community-toolbox\]

[Reviewed PR's](https://github.com/publiclab/plots2/pulls?q=is%3Apr+reviewed-by%3Agovindgoel+is%3Aclosed)

---------

### Experience

## 

I am a 2nd-year student at Amrita School Of Engineering, Amritapuri Campus, and have been doing web development right from the first year itself. I have done many projects in JavaScript, React, and Ruby. I have also served as a GSoC mentor past year in PublicLab.

Projects I have worked on in the past year are mentioned below.

[amFOSS Website](https://gitlab.com/amfoss/website) - I have worked on migrating the codebase from GatsbyJS to NextJS.

[amFOSS CMS](https://gitlab.com/amfoss/cms) - CMS is a management system to manage club members such as their daily updates, leave track records, achievements. I am also one of the top contributors to cms.

[WorkFit](https://github.com/govindgoel/WorkFit) - Built under a hackathon, the main goal of the project is to keep you fit while working.

[CollegeBuddy](https://github.com/govindgoel/collegebuddy) - Connect with your fellows in college. Discuss, plan and organize anything on the platform. This project was also selected in Kharagpur Winter of Code, where I helped new contributors to taste the working of open source.

[ChatApp](https://github.com/govindgoel/ChatApp) - A basic chat app based on socket.io, react, express

---------

### Teamwork

## 

I have participated in various team competitions at different levels. I have participated in hackathons where working along with the team is the key. I have also participated and helped in organizing various college tech events along with the members of the [amFOSS](https://amfoss.in/) club which is a free and open source club of our college. Regarding PublicLab I have gained a lot of experience and guidance from every member of the PublicLab especially [](https://publiclab.org/profile/jywarren)@jywarren, @[bansal\_sidharth2996](https://publiclab.org/profile/bansal_sidharth2996) [](https://publiclab.org/profile/cess)@cess. Working in Public Lab has been a great journey for me till now and I hope the same for the future as well.

---------

### Passion

## 

I started working with Public Lab as I really loved the concept of Public lab and the work they are doing for the environment and also for the folks who are new to open source. Having a platform where people can share their ideas and research work related to the environment to other projects such as editor, image-sequencer. This shows the diversified nature and care for the environment. This is all that motivates me to work along with the community.

---------

### Audience

## 

This project will help all the users as it will provide them with the ability to translate the website content to their native language. People from remote places who care for the environment and are eager to collaborate, discuss so they will be able to make use of publiclab.org in their day-to-day life. Getting content in their native language will help them to navigate and onboard easily on the platform and make the best use of it. It will also help in increasing user daily activity.

### Commitment

## 

Yes, I fully understand that this is a serious commitment and I can devote 30-35 hours weekly for the completion of this project. Also, I don't have any major plans during the period and I will keep the mentors up to date with the university timeline while providing a work progress report every week to keep them updated with the work.