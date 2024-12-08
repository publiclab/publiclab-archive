---
title: GSOC 2017 FINAL REPORT;  EMAIL NOTIFICATIONS OVERHAUL
tagnames: gsoc, google-summer-of-code, gsoc-2017, soc, soc-2017, response:14788
author: stella
path: /notes/stella/08-24-2017/gsoc-2017-final-report.md
nid: 14790
uid: 504749

---

# GSOC 2017 FINAL REPORT;  EMAIL NOTIFICATIONS OVERHAUL

by [stella](../profile/stella) August 24, 2017 18:53

August 24, 2017 18:53 | Tags: [gsoc](../tag/gsoc), [google-summer-of-code](../tag/google-summer-of-code), [gsoc-2017](../tag/gsoc-2017), [soc](../tag/soc), [soc-2017](../tag/soc-2017), [response:14788](../tag/response:14788)

##EMAIL NOTIFICATIONS
The main aim of the project was to manage too many notifications for subsequent edits and new taggings on nodes. [This](https://publiclab.org/notes/stella/04-03-2017/email-notification-overhaul) is the original proposal to the project
###Work Done
**- Email notifications without scheduling**

This involved sending emails t tag subscribers on new tagging, found [here](https://github.com/publiclab/plots2/issues/396). The issues were broken into the following subsections:

  * Check whether a user has gotten any notification regarding new node creation or any of its tagging.
  * Check the tags on a node.
  * Get the list of users following the new tag.
  * Check that for each of the users following the new tag, none is following the existing tags. 
  * Tests for the above conditions.

**Tag addition Notification**

  This used the above conditions to send notifications. It was done in the following steps: 

  * Create a mailer template with the notification information.
  * Trigger for the new notifications.
  * Tests for the notifications.
[Here](https://github.com/publiclab/plots2/commits?author=StlMaris123) is the summary of the work merged.

###Unmerged Work 

**Precursor to active Jobs**

This checks the nodes which are liked, updated, commented upon and posted within the past given period of time time.

###Future work to be done

**- Active Job Scheduling**

Active Job is a framework for declaring jobs and making them run on a variety of queuing backends. This has been broken down and more elaborated [here](https://github.com/publiclab/plots2/issues/1584)


