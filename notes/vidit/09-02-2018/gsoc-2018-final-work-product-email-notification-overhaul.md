---
title: "Gsoc 2018: Final Work Product - Email notification overhaul"

tagnames: 'software, gsoc, gsoc-2018, soc-2018, gsoc-2018-final, soc-2018-final-report, email-notification-overhaul, customized-digest, emojification'
author: vidit
path: /notes/vidit/09-02-2018/gsoc-2018-final-work-product-email-notification-overhaul.md
nid: 17039
uid: 517093

---

![](https://publiclab.org/public/system/images/photos/000/026/426/original/gsoc-2.png)

# Gsoc 2018: Final Work Product - Email notification overhaul

by [vidit](../../../profile/vidit) | September 02, 2018 16:13

September 02, 2018 16:13 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [gsoc-2018-final](../tag/gsoc-2018-final), [soc-2018-final-report](../tag/soc-2018-final-report), [email-notification-overhaul](../tag/email-notification-overhaul), [customized-digest](../tag/customized-digest), [emojification](../tag/emojification)

----

```
## GSoC 2018 (Email Notification Overhaul)
<div align="center">
  <img width="200px;" src="https://user-images.githubusercontent.com/22616017/44048533-39d0a55e-9f4f-11e8-8c50-ccec1ab0f4e4.jpeg">
  <img src="https://user-images.githubusercontent.com/22616017/44048712-cf4d2468-9f4f-11e8-9cb9-66b5e88463a8.png">
</div>

- **Name**: Vidit Chitkara 
- **Github**: [Vidit Chitkara](https://github.com/viditchitkara) 
- **Organisation**: [Public Lab](https://publiclab.org/)

## Aim
To incorporate feature of recurring digest emails based on user [preferences](https://publiclab.org/settings) and [subscriptions](https://publiclab.org/subscriptions). The project involved complex cron scheduling and incorporation of a queuing backend to support background tasks. 

## Project

### Digest Emails

#### Integration of Redis and Sidekiq
Redis is a key value based database which is used to support queuing backends like sidekiq. [Sidekiq](https://sidekiq.org/) is  a queuing backend used to run background jobs and their scheduling. It also provides a dashboard to monitor the tasks running in background.
- A ruby gem called "Sidekiq" was integrated
- Redis was added as a part of docker compose (used for deployment purposes)

<img width="1438" alt="ss-gsoc" src="https://user-images.githubusercontent.com/22616017/43995501-25f4497a-9dcc-11e8-8897-754923fd5b4e.png">

Pull Requests: [#2738](https://github.com/publiclab/plots2/pull/2738 "#2738"), [#2772](https://github.com/publiclab/plots2/pull/2772 "#2772"), [#2782](https://github.com/publiclab/plots2/pull/2782 "#2782")

#### A mailer was deployed along with a simple email template
A job was created which runs in background to send digest emails. The profile page consists of link to test the feature. Unit tests were written accordingly.

Pull Requests: [#2711](https://github.com/publiclab/plots2/pull/2711 "#2711")

#### Finally the User Interface of digest email template was improved using bootstrap styling

![gsoc-2](https://user-images.githubusercontent.com/22616017/43995475-dc5a08cc-9dcb-11e8-9f28-4939e8851eb5.png)

Pull request: [#3113](https://github.com/publiclab/plots2/pull/3113 "#3113")

### Emojification
- Emoji autocomplete feature was incorporated for all the textareas and textfields. Horsey js library was used to make the autocomplete feature!
- Like via multiple reaction feature was introduced. This feature included polymorphic associations in models. This helps to reuse the like model to operate on answers as well as questions or any note.

#### Emoji Autocomplete
PRs: [#2832](https://github.com/publiclab/plots2/pull/2832 "#2832")

#### Like via multiple reactions
PRs: [#2869](https://github.com/publiclab/plots2/pull/3079 "#3079"), [#2926](https://github.com/publiclab/plots2/pull/2926 "#2926"), [#2999](https://github.com/publiclab/plots2/pull/2999 "#2999")

<img width="233" alt="ss2" src="https://user-images.githubusercontent.com/22616017/43995541-abc7c7ac-9dcc-11e8-876e-cbda0428b917.png">

<img width="734" alt="ss3" src="https://user-images.githubusercontent.com/22616017/43995547-b68ff9ca-9dcc-11e8-9e99-060e8ef4ec04.png">

------------

## PRs and Commits

- [Pull Requests](https://github.com/publiclab/plots2/pulls?q=is%3Apr+label%3Asummer-of-code+author%3AViditChitkara+is%3Aclosed)
- [Commits](https://github.com/publiclab/plots2/commits?author=viditchitkara)

## Mentors  

- Jeffrey Warren
- Stevie Lewis
- Amanda Snow
```