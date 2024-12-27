---
title: "GSoC 2020 proposal: Spam Management Dashboard"

tagnames: 'software, plots2, gsoc, google, spam, dashboard, first-time-poster, dial, zoom:6, soc-2020, soc-2020-proposals, soc2020, lat:28.362672, lon:75.586146, keshav, smd'
author: keshav_sethi0004
path: /notes/keshav_sethi0004/03-12-2020/gsoc-2020-proposal-spam-management-dashboard.md
nid: 23129
uid: 653396

---

![](https://publiclab.org/public/system/images/photos/000/038/498/original/download.jpeg)

# GSoC 2020 proposal: Spam Management Dashboard

by [keshav_sethi0004](../../../profile/keshav_sethi0004) | March 12, 2020 17:12

March 12, 2020 17:12 | Tags: [software](../tag/software), [plots2](../tag/plots2), [gsoc](../tag/gsoc), [google](../tag/google), [spam](../tag/spam), [dashboard](../tag/dashboard), [first-time-poster](../tag/first-time-poster), [dial](../tag/dial), [zoom:6](../tag/zoom:6), [soc-2020](../tag/soc-2020), [soc-2020-proposals](../tag/soc-2020-proposals), [soc2020](../tag/soc2020), [lat:28.362672](../tag/lat:28.362672), [lon:75.586146](../tag/lon:75.586146), [keshav](../tag/keshav), [smd](../tag/smd)

----

Name: Keshav Sethi

Email: [f20170657@pilani.bits-pilani.ac.in](mailto:f20170657@pilani.bits-pilani.ac.in)

Github: [https://github.com/keshavsethi](https://github.com/keshavsethi)

Affiliation: [Birla Institute of Technology and Sciences, Pilani (Bits Pilani)](https://www.bits-pilani.ac.in/)

Location: Rajasthan, India

Timezone: Indian Standard Time (UTC +05:30)

## Project description

Improving the Spam Management Dashboard at [Publiclab.org/spam](http://publiclab.org/spam) and implementing various features like Bulk moderation, weekly digest, automating tagging of posts, etc.

### Abstract/summary

This project focuses on the improvement of the Spam management dashboard [https://publiclab.org/spam](https://publiclab.org/spam) and makes the user interface much more refined so that it becomes easier for moderators to approve or mark some posts as spam. This will consist of core features like Bulk moderation, Daily/weekly digest, automatic tagging of posts, advanced tables, flagged comments/posts review, My queue review, moderation rules and other relevant information, finding old inactive accounts/spam and removing them and better automatic way of spam detection. All these features will make moderation easier and faster for moderators and improve the quality of content at Public Lab.

### Problem

Currently there is no feature of bulk moderation at PL thus it becomes a hectic task for moderators to approve/reject certain posts one by one. Moreover there is no feature for the digest of flagged posts and the moderator always has to visit the portal for moderation. Currently moderation is completely manual and requires a moderator for spam management. Even the task management among moderators is not up to the mark. Old and inactive spam accounts also need moderation. All these problems will be solved by this project related to the spam management dashboard.

Note: All the mockups/prototype and code samples are just for reference. They can be revised/updated according to the requirements of the project, moderator preferences and suggestions given by mentors.

### Project Goals and its implementation

(_Design is explained in later parts of the proposal_)

### 1\. Bulk Moderation:

This will help moderators to approve/ban/spam n number of users/posts/comments in one click. This is supported by manual selection, overall search option where a moderator can search user/tag/comment/word etc, sort and other techniques.

Full page search/specific search and apply bulk action (sample preview)

![image description](/i/38472.png "Screenshot_from_2020-03-12_18-59-50.png")

For this Data Tables which is a plug-in for the jQuery JavaScript library can be used. Here moderator can go for a specific search, regex search, dynamic sorting and dynamic per page view.

_For example_: A moderator wants to moderate all the flagged posts of a certain user. Here Moderator can search a keyword of a username or any pattern. All the matched rows will appear and moderators can select all the searched rows in one click and take any bulk action.![image description](/i/38474.png "Screenshot_from_2020-03-12_20-09-00.png")

_After putting Donate and Stats into spam with bulk moderation(preview)_![image description](/i/38475.png "Screenshot_from_2020-03-12_20-09-07.png")

**Features of bulk moderation are explained in detail:**

- **Body Filter**: Filtering in Bulk Moderation is smart as it allows the user to input multiple words (space separated) and will match a row containing those words, even if not in the order that was specified (this allows matching across multiple columns). Here columns of the bulk moderation table include Author, Title, Type of content, Checkbox and an action button. This will filter through all pagination pages and supports regex also.
- **Column sorting**: Multiple columns can be ordered at the same time taking one column as reference. Every column will have features of storing in both ascending and descending order. If a moderator wants to sort only wikis then it can be searched then sorted. This feature can help in extracting out relevant information in every possible way.
- **Dynamic pagination**: Moderators can change pagination according to their wish for example there are 10 rows per page then it can be changed according to the moderator's wish.
- **State Save**: It also has the option of being able to save the state of a table (its paging position, ordering state, etc) so that it can be restored when the user reloads a page, or comes back to the page after visiting a sub-page.
- **Child rows**: we can attach various child rows to a parent row in the Data Table. This can be used to show additional information about a row like tags, time of posting, etc.
- **Bulk actions**: After filtering and selecting desired posts, the moderator can act with bulk actions i.e. Bulk publish, user ban and marking as spam.![image description](/i/38679.png "Screenshot_from_2020-03-21_00-52-56.png")

Note: All these bulk moderation features can be accessed only by Admins and moderators.

### 2\. Daily/Weekly Digest:

All the posts which have the largest number of flags i.e. based on count will be sent in as a daily digest or weekly digest based on settings of the moderator. This can also be extended later with tagged posts. In that digest moderator can also review all through read more link.

A separate method, e.g. "send\_digest(moderator,flag\_comment)", where moderator and flagged comments are method arguments corresponding to Public Lab moderators and their subscriptions/digest notes respectively. This method would go in the subscription.rb file. A method is already there in user.rb (content\_followed\_in\_period(start\_time,end\_time)) which gives us the digest notes. These comments would be passed (as flag\_comment) in the 'send\_digest' method in the subscription mailer. For this we need a service that can make asynchronous requests, so that there is not much load on the servers. Rails provide a built-in service for handling asynchronous tasks known as "active-job"

For scheduling of digests whenever gem can be used Whenever gem creates a cronjob which calls the job every 24 hours.

Digests provide different interfaces based on the preference of moderators in settings

1. Digests to remind moderators to come to moderate spam. This interface will contain all the details present in the dashboard as explained in later parts of UI design like pending moderation requests, count split up and following tagged posts moderation requests.
2. Digests containing all the following tags posts/comments. This interface will contain all the posts which are tagged with tags that are being followed by a moderator. (The Queue)
3. Digests containing all the flagged tags posts/comments. This interface will contain all the posts which are flagged in order of flag count. (Flag posts)

![image description](/i/38476.png "Screenshot_from_2020-03-12_20-16-58.png")![image description](/i/38477.png "Screenshot_from_2020-03-12_20-17-01.png")

_Note: Moderators will have all the ability to set its frequency and type of interface. These settings will be dynamic as multiple digests can be obtained by a single moderator._

For UI of the digest moderation\_digest.html.erb file will contain the template of the email/digest.

![image description](/i/38810.png "Screenshot_from_2020-03-30_13-21-04.png")

### 3\. Automatic tagging of posts:

Comments and wikis can be divided into word and sentences and each word is assigned with a score and according to total criteria each post/comment can be tagged with spam/positive/negative and other tags.

![image description](/i/38478.png "Screenshot_from_2020-03-12_20-17-06.png")![image description](/i/38680.png "Screenshot_from_2020-03-21_00-59-53.png")

If the score is between the following criteria a tag can be assigned to them.

![image description](/i/38479.png "Screenshot_from_2020-03-12_20-17-10.png")

![image description](/i/38681.png "Screenshot_from_2020-03-21_01-00-08.png")

This is the word.json file where a sample of words are given some score according to their sentiment and nature. This can be updated by moderators in the setting page. This can act like automatic scanning of words in comments/posts where malicious and unwanted words can be automatically scanned and nature can be predicted

Example: Suppose a comment has the content "go for shopping at [xyz.tk](http://xyz.tk "http://xyz.tk/")". Here all the dots, commas, etc will get separated and only words array will be compared with words.json and a total score will be given. As in this example tk has a score of -30 so it is marked as spam. This will help to avoid long readings of posts and comments and detect obvious spam easily. All the words which are unacceptable by PL policy can be given a very high score and a new category can be made to ban authors of that comments/posts automatically.

_Note: All the posts will be tagged with some tag like spam etc. These tags will be represented by a different color scheme like spam with red, positive with green and negative with grey. This will help in a better view and understanding of the moderator._

Goal Extension: This goal can be extended in the future by adding a comment classifier or some ML model which is a completely different project. There are various services like Akismet(and other paid services) which can be used for automatic tagging of posts. But before ML, platform for manual spam management is required which is more reliable than any other method.

### 4\. The Queue:

This feature has all the posts where the moderator is mentioned as a tag and that tag must be followed by that moderator(go through the example for better understanding). The tagging of a post is done by the user and my queue will have all the posts where the tag is mentioned which is followed by the moderator. All features of /spam/wiki will be on this page like bulk moderation, ban user, approve, spam, etc. This page will improve task management and make moderation easier.

![image description](/i/38481.png "Screenshot_from_2020-03-12_20-17-14.png")

Moderators can change their tag preference in the settings section where either admin can allot tags or moderators can change its tag.

**_For example_** a user mentioned "something\_xyz\_abc" as a tag in the post/comment. Moderator is also following that tag i.e. "something\_xyz\_abc". This post/comment will appear in the queue section as this post is followed/allotted by the moderator. This will improve task management and make moderation easier.

Task management: The queue will help in task management. Suppose there are 2 moderators A and B. A is following a few tags like air quality, water, etc and B is following tags like gsoc, tech software, etc. In their queue section A will receive posts related to air, water, etc and A can moderate those in queue section while B can moderate posts related to tech,gsoc, etc. This will help in better management of tasks by growing a moderation team with responsibility sharing features like tag filtered moderation and digest.

Note: This is similar to a subscription page but it can be used for moderation. All the features of Bulk moderation will be there.

### 5\. Flagged post:

Flagged posts are dangerous among all posts thus it requires the maximum attention of moderators. According to the number of counts of flags by users on posts can be listed in the flagged section. All these posts will be sorted based on flag count. This flag feature is used by other sections of PL but not in the moderation tool. This section will have all the features of /spam/wiki like bulk moderation, ban user, approve, spam, etc. Most flagged posts will also be sent to moderators in the form of daily/weekly digest.![image description](/i/38482.png "Screenshot_from_2020-03-12_20-17-17.png")

For this flag\_count can be maintained and all the flagged comments/posts can be sorted according to their count in the spam/flag

![image description](/i/38483.png "Screenshot_from_2020-03-12_20-24-31.png")

### 6\. Settings and banned user list:

Daily digest, bulk moderation the features require preferences of moderator/user like digest frequency, pagination on each page, tag followed Apart from this it will also contain a list of banned users with an option to unban them and list of moderators for future reference. This will ease unbanning users and provide users with help in future tagging of moderators.

The section will contain all the moderation rules for better moderation

![image description](/i/38484.png "Screenshot_from_2020-03-12_20-27-33.png")

Sample preview of modal(ban/mod/rules)

This is sample code for following certain tag by moderator for getting my Queue

![image description](/i/38485.png "Screenshot_from_2020-03-12_20-27-35.png")

Policy for banning a user: Users can be banned if the count of spam posts/comments exceeds a certain limit (eg 5) but the moderator has the right to ban or unban any user at any point in time.

![](/i/38682.png "Screenshot_from_2020-03-21_01-12-02.png")

### 7\. Insight section for moderators :

In insight section moderator can see the stats on how many posts have been moderated, approved, spam detected etc. This will motivate moderators to improve their stats and motivate users to write quality posts and get the most approved posts. For this Chartkick gem can be used, a click on publish/spam/ban button database of count will be updated and it will be reflected on the chart. The chart will be fully responsive and informative.![image description](/i/38487.png "Screenshot_from_2020-03-12_20-27-47.png")

### 8\. Education features and "Invites" :

"Invites" can be sent to users from educators to bypass moderation so that they can post without approval of the moderator. This will facilitates public lab internal work for example teacher at Public lab may want to invite students to write posts, but can pre-authorize them to bypass our spam moderation system by sharing a special code in a link, like [https://publiclab.org/invite/123456](https://publiclab.org/invite/123456) which would allow them to post directly i.e without approval of moderator.

Invite link will open a modal which has a link to post, content details, details from teacher and some moderation rules. Different rights can be given to students regarding posting and commenting without moderation

[https://publiclab.org/post?invite=123456](https://publiclab.org/post?invite=00000 "https://publiclab.org/post?invite=00000") (posting right from invite)

(Users posting with this url can post with status which bypass moderation)

This link will let users to write a post bypassing moderation. This link can be allotted by moderator in the user page(user is explained in the design detail section where moderator can change user roles like ban, unban, etc). Users can be tagged with an invite URL post and users who are invited will receive notification as done with a normal post.

All Invite link will get expire in a week which can be changed in settings page as explained in design section

_Note: This feature can be enabled or disabled by moderator at any time in the settings page._

### Overall UI Improvements and Design Details

![image description](/i/39226.jpg "spamdashboard.jpg")

(This is a preview of a prototype for All posts)

At the left there is a navbar for spam management dashboard with content as follows:

**Dashboard**: This contains Moderator details where all the basic details like User ID, statistics etc are present. Statistics involves posts(wikis and revisions) moderated, comments moderated, posts/comments pending to moderate, followed tags and count of posts with each tag. This will give an overall idea of daily tasks of moderation to a moderator.

**All posts**: This page contains all the posts of all users which are banned, marked spam, published, hidden. This is for future reference of posts. This is for moderation at a general level i.e any moderator or admin can see all the posts. This will be used for manual referencing of posts. Example There are thousands of posts published so any moderator can see posts and refer to why some posts are banned and hidden while some are published.

**Bulk moderation**: This page will contain all the wikis/revisions/comments which are left to moderate(pending posts which are requested to get published), This page will have all the features of bulk moderation as mentioned in its implementation part.

**Flagged posts**: All the posts which are flagged and they are sorted according to their flag count. (All the features of bulk moderation will also be there)

**The queue**: This section contains all the posts/comments whose tags are followed by the moderators. (All the features of bulk moderation will also be there)

**Wiki**: This page contains wiki with all the features of Bulk moderation. This is filtered with only wikis. (All the features of bulk moderation will also be there)

**Revision**: This page contains only Revisions with all the features of Bulk moderation. This is filtered with Revisions. (All the features of bulk moderation will also be there)

**Comments**: This page contains only comments with all the features of Bulk moderation. This is filtered with comments. (All the features of bulk moderation will also be there)

**Users**: This page contains a list of all the users who are banned and who are active. In this page moderator can unban or ban a user. This will also help in future reference. (All the features of bulk moderation will also be there)

**Insight**: This page contains all statistics of moderators in graphical format as mentioned in its implementation.

**Settings**: This page contains all the preferences of the moderator like digest preference, follow tags, update inappropriate word list for automatic tagging of posts.

Note:

1. The navbar on the left can be hidden with a button to widen the area of data table which will increase its visibility
2. There will be different tabs for all the features like select all, select none, ban user, publish, spam and ban, hide, etc. This will help moderators to do all tasks in one click.

### Timeline/Milestones

![image description](/i/38805.png "Screenshot_from_2020-03-30_04-28-51.png")

![image description](/i/38806.png "Screenshot_from_2020-03-30_04-28-57.png")

### Needs

I will require guidance from my mentors and suggestions from all the members of public lab which will help me to complete my project.

### Contributions

I have been an active member of Public Lab since December 2019\. I have done a good number of contributions in the Public lab especially in plots2\. My major area of contribution in plots2 is spam management and I have contributed in both frontend and backend. I have received major help from all the mentors and tried to improve my contributions. I have also made a good number of first timmer issues. I have made around 10 commits till now and have created around 15 issues in the public lab. I am currently working on some issues and will continue to work in the future as well.

Links :

[Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter:keshavsethi%20org:publiclab&type=Issues "https://github.com/search?utf8=%E2%9C%93&q=commenter:keshavsethi%20org:publiclab&type=Issues")

[Issues](https://github.com/publiclab/plots2/issues/created_by/keshavsethi "https://github.com/publiclab/plots2/issues/created_by/keshavsethi")

[PR](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:keshavsethi%20is:closed "https://github.com/publiclab/plots2/pulls?q=is:pr%20author:keshavsethi%20is:closed")

### Experience

I am a 3rd-year student at Bits Pilani and I have been doing web development for 2.5 years. I have done many projects in JavaScript, angular and Ruby. I have done 3 months internship at Sun mobility, Bangalore where I worked on their asset management software and battery tracking system. This software was made in JavaScript and angular7\. I have also won the Smart India Hackathon 2019 where I build Tsunami prediction and alert mechanism. This project was built on JavaScript and Django. I have also worked with some startups and worked on their software management. I have also worked on some college projects and college fest websites. I learned Ruby from Udemy(Rob Percival) and made some projects like blogging software, Instagram clone, etc. I have a solid understanding of the syntax of Ruby and stronghold on OOP. I am also familiar with MVC, RESTful and some gems like Chartkick, Resque, etc. I have a proficient understanding of code versioning tools like git etc.

### Team Participation

I have participated in various team competitions at different levels. As I have mentioned I worked in a smart network team during my internship and SIH 2019 was also a team event. I have also participated in various college team events. Regarding Public lab I have gained a lot of experience and guidance from every member of public lab especially @[bansal\_sidharth2996](https://publiclab.org/profile/bansal_sidharth2996 "https://publiclab.org/profile/bansal_sidharth2996") @VladimirMIkulik @cess @jwarren @nstjean. Working with a community like Public lab is truly an honor for me.

### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_

I really love the concept of Public lab and the work they are doing for the environment. A platform where people can share their ideas and research work related to the environment is really a necessity of today's generation. Even the public lab community motivates me to work towards the environment as they are really hardworking and focused on their goals. Apart from plots2 - map knitter, spectral workbench, kites, balloons and other products are assets to our society. Love for the environment and mother nature inspires me to work for this organization. I believe that this platform needs better content and spam moderation is required for this. It will improve the quality of content and reliability of content as well.

### Audience

_Whom do you want your work to help? We especially appreciate proposals that make technologies and techniques more welcoming and friendly to those who've often been excluded._

This project will help all the users as it will provide them quality content and no spam/negative comments. I will also help all the moderators and make their tasks easier.

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_

Yes, I fully understand that this is a serious commitment and I can devote 40-45 hours weekly for the completion of this project.