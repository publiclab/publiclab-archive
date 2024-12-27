---
title: "Outreachy proposal: MapKnitter.org Spam Management system"

tagnames: 'mapknitter, software, outreachy, first-time-poster, lat:12.971598, lon:77.594562, zoom:6, outreachy-2022, outreachy-summer-2022, newauthor'
author: ranavivek_me19
path: /notes/ranavivek_me19/04-22-2022/outreachy-proposal-mapknitter-org-spam-management-system.md
nid: 30575
uid: 794295
cids: 30122,30160,30163,30180
---

# Outreachy proposal: MapKnitter.org Spam Management system

by [ranavivek_me19](/profile/ranavivek_me19) | April 22, 2022 10:47

April 22, 2022 10:47 | Tags: [mapknitter](/tag/mapknitter), [software](/tag/software), [outreachy](/tag/outreachy), [first-time-poster](/tag/first-time-poster), [lat:12.971598](/tag/lat:12.971598), [lon:77.594562](/tag/lon:77.594562), [zoom:6](/tag/zoom:6), [outreachy-2022](/tag/outreachy-2022), [outreachy-summer-2022](/tag/outreachy-summer-2022), [newauthor](/tag/newauthor)

----

# About me

Name: Aayushi Singh

Github: [https://github.com/asaayushisingh](https://github.com/asaayushisingh)

Location: Bangalore, Karnataka

Hello everyone, I'm Aayushi Singh, a self-taught developer from India. I am an undergrad student for a Bachelor of Engineering and have worked on various interesting projects including websites and other interesting applications under various organizations and communities.

## Project description

MapKnitter is software developed by Public Lab to help you turn your photos into maps! It's SUPER easy to use and runs in the browser. They make aerial photos from the user-submitted images that float over our site's MapKnitter servers, running at [http://publiclab.org/mapknitter .](http://MapKnitter%20is%20a%20software%20developed%20by%20Public%20Lab%20to%20help%20you%20turn%20your%20photos%20into%20maps!%20It%E2%80%99s%20SUPER%20easy%20to%20use%20and%20runs%20in%20the%20browser.%20We%20make%20aerial%20photos%20from%20the%20user-submitted%20images%20that%20float%20over%20our%20site%E2%80%99s%20MapKnitter%20servers,%20running%20at%20http://publiclab.org/mapknitter%20.) The manual process of making maps with MapKnitter differs greatly from automated aerial imaging systems. In those systems, the imaging is of higher precision and processed with spatial and telemetry data collected along with the imagery, typically at higher altitudes and with consistent image overlap in the flight path sequence.MapKnitter is user-friendly since all you need to understand how it works is a browser. It's also great because anyone can use both their desktop and their mobile phones to access the tool.

# Abstract/summary (<20 words):

To make changes to the website [MapKnitter.org](http://mapknitter.org/) and make it more illustrative and user-friendly and build an effective spam management system for [MapKnitter.org](http://mapknitter.org/).

# Problem

- **Display information about each map, such as the author's status, how many images it has, whether images have been placed, whether the author is new**

This page provides all sorts of info related to the author's status, number of images, and comments on them, providing an overall comprehensive overview of the content held by an author.

![image description](/i/46393.jpg "aaa.jpg")

---------

On this page, the tag of New Author with other tags will also be depicted as per the description. For that, we need to create Hashtags for Map Post.

When an author creates a new map post with a description like this: "I love #mapknitter, I am an #NewAuthor". I expect our system will also create 2 hashtags with the names are mapknitter and NewAuthor.

Step 1: Extract Hashtags from the description of the Map Post

Add an instance method to the Post model to extract hashtags:

![image description](/i/46417.jpg "7eb5bd97-cce4-4e15-8199-611b3e27191f.jpg")

This method will return to an array of name hashtags. For example

![image description](/i/46418.jpg "bbaec9dc-ed8a-4c80-b2e1-352aa68bf012.jpg")

Step 2: Add a callback to create hashtags after creating a Map Post.

Active Record supports a lot of useful callbacks. We use the after\_commit callback for our MapPost model, this callback is called after a post has been created, updated, or destroyed. But now, we just want to trigger this callback when a post is created, so we add more: on option for specific to create action.

![image description](/i/46419.jpg "a4c32653-a9fe-4a0d-99ee-af0d79530d93.jpg")

Define this callback in the Post model:![image description](/i/46420.jpg "cff342c3-94ae-44e6-8a0c-d0b8a6e487d5.jpg")

The create\_hash\_tags method will be called after a post is created.

- **Check via the Public Lab API whether the currently logged-in user is a moderator to determine if they can view the spam table**

We can use Custom Middleware to implement this option, instead of an API to fetch the details of the role on each request to our rails application with a specific account, we don't have to change our routes.rb.

First, use ActiveSupport::CurrentAttributes. It will simplify the per-request attributes access.![image description](/i/46422.jpg "11078bce-8431-4a9f-ae39-9e3ccd760bfc.jpg")

Then our AccountMiddlreware will identify an Account by the id, and update the request path accordingly.

![image description](/i/46423.jpg "155fa794-ac8b-41d3-b050-1fbc0c75d797.jpg")

NOTE: request.script\_name is required to overwrite other links on the page. Otherwise, the new link will be: /projects/new w/o the account\_id

- **Add a link/tab from [publiclab.org/spam2](http://publiclab.org/spam2) to the MapKnitter spam dashboard**

![image description](/i/46426.png "aayu.png")\*\*

In the Public Lab spam management dashboard, there is a section that lists links to other sites that provide additional information regarding issues in the community. For example, on the right-hand side, there is a link to Mapknitter (link), which serves as an effective tool for managing spam posts in the Public Lab forum.

- **Display a list of any maps banned, [PublicLab.org](http://PublicLab.org) user has (if any) when they are banned**

![image description](/i/46389.png "banned_new.png")

Once a moderator bans a single author successfully, they will be redirected to a page displaying all the maps of the banned author. We can use the kaminari gem (an implementation of the blazing-fast infinite scroll for Ruby on Rails applications) to improve page loading times and make it efficient. It will consist of the information about the map and no of images with the preview of frequent 3 images in the card. Only Moderator will be able to see what is present inside the banned maps.

We can notify certain people about a map whenever it is banned.

Just create 'banned\_maps\_mailer.rb' in app/mailers/ folder.\*\*

![image description](/i/46406.png "carbon.png")

In our Map model, we can use an after-commit to send an email when the banned attribute of the map model is made true.![image description](/i/46407.png "carbon_(1).png")

---------

- **Offer a button to spam all maps by that user in one click, like [mapknitter.org/spam/user/](http://mapknitter.org/spam/user/)**

![image description](/i/46394.jpg "aaaaa111111.jpg")

Once a moderator bans a single author successfully, they will be redirected to a page displaying all the maps of the author. The moderator will be able to click on a Spam All Maps button to bulk-spam all the maps belonging to that author.

- Forbid login by users who've been banned on MapKnitter, by setting their status to 0

![image description](/i/46395.png "oops_1.png")

As shown above, a message appears telling the banned users that they cannot be login.

The device comes with various features of forbidding certain users from signing in, the method is called active\_for\_authentication? Create a column called is\_active for the User model. Then add the code below to the User model:![image description](/i/46424.jpg "41b248dd-e5ee-40d5-9954-434b7fe88360.jpg")

- **Regularly check (hourly? daily?) (when running the current\_user function) if users have been banned from [publiclab.org](http://publiclab.org) (via an API call)**

We can Use the Devise gem of Rails to do the regular check. As we know Devise is composed of 10 modules in it, which will make it easier for us to handle other stuff like locking the account after a specified number of failed sign-in attempts by Lockable, expiring sessions that have not been active in a specified period of time by Timeoutable along with the support of Omniauthable.

# Timeline/milestones![image description](/i/46410.png "tab.png")![image description](/i/46411.png "ta2.png")

# Needs

A diverse community that will help me review the changes and guide me with better solutions.

# First-time contribution

---------

---------

- Overall community involvement (like helping others):**[](https://github.com/search?q=commenter:asaayushisingh%20org:publiclab&type=Issues)**[https://github.com/search?q=commenter%3Aasaayushisingh+org%3Apubliclab&type=Issues](https://github.com/search?q=commenter:asaayushisingh%20org:publiclab&type=Issues)
- FTO : [https://github.com/publiclab/infragram/pull/370](https://github.com/publiclab/infragram/pull/370 "https://github.com/publiclab/infragram/pull/370")
- PRs merged(3),approved(1) and reviewed(4):[https://github.com/publiclab/mapknitter/pulls?q=is%3Apr+author%3Aasaayushisingh](https://github.com/publiclab/mapknitter/pulls?q=is:pr%20author:asaayushisingh)
- Issue raised:[https://github.com/publiclab/mapknitter/issues/created\_by/asaayushisingh](https://github.com/publiclab/mapknitter/issues/created_by/asaayushisingh)

# Experience

I started contributing to open source in 2020 and learned a lot about software development during my tenure at the Center of Innovation Incubation and Entrepreneurship [(CIIE BMSCE](https://ciie.bmsedu.in/ "https://ciie.bmsedu.in/") ). I used to lead a separate developer's community as part of this role there, which was especially rewarding. I got introduced to React, JavaScript/TypeScript, Ruby on Rails, Docker, DevOps, and other related technologies that are essential to building websites or apps, and I found it rather challenging coming from a mechanical background. However, after seeing how these supplies were used for projects to help simplify people's lives in all kinds of ways, I grew quite fond of technology.

During my time as a technical intern at [Las Innovations](https://www.linkedin.com/company/continuum-research-labs/?originalSubdomain=in "https://www.linkedin.com/company/continuum-research-labs/?originalSubdomain=in"), I got familiarise with 3D surveying and aerial mapping which helps in solving problems faced in modern industries regarding human safety, they aim at solving the same using Robust Unmanned Systems with our diverse products and provide remote access to people

During my time as a full-stack developer at [Bigbuddy.in](https://www.bigbuddy.in/ "https://www.bigbuddy.in/"), I used Ruby on Rails for their project stack and helped them with some new functionality. Along with working alongside developers from different educational backgrounds, I also developed my own knowledge of development from the ground up.

During the pandemic, I started writing technical articles - [https://hashnode.com/@asaayushi](https://hashnode.com/@asaayushi "https://hashnode.com/@asaayushi"), which gave me a new edge on how communities can help each other out by sharing their knowledge and experiences.

### Teamwork

Working collaboratively with a team that learns from one another is one of the most fulfilling ways of working. As a part of [BigBuddy](https://www.bigbuddy.in/ "https://www.bigbuddy.in/"), I have experienced exactly this kind of environment and it has helped me grow tremendously over the past couple of months I have been here. One of my main responsibilities here is to optimize the user experience and develop and maintain various pre-existing components as well as redefine internal tools and make them easy for everyone to use.

While I am never tired of learning -- at [CIIE BMSCE](https://ciie.bmsedu.in/) -- my main goal at CIIE is to learn new skills by leading the community innovatively. I used to lead a separate developer's community as part of this role there, which was especially rewarding. I got introduced to HTML/CSS, React, JavaScript/TypeScript, Ruby on Rails, Docker, DevOps, and other related technologies that are essential to building websites or apps, and I found it rather challenging coming from a mechanical background.

### Passion

The internet is a blank canvas. Public Lab is an open science and environmental justice community committed to making this canvas less white, and more green and appropriate for the future.

A person's passion is what drives them to pursue opportunities and activities without reservation. We all want to help the world and make it a better place. But it's hard to know where to start! To the rescue comes open science: the idea of using advances in technology, data analytics, and citizen science. My development in programming accelerated because of the fact that I have unlimited access to instructional videos, blogs, tutorials, and articles on the internet. If these were reserved for a single demographic such as people who went to college for Computer Sciences majors only, then a valuable opportunity for knowledge would be inhibited and I think this holds true for other people like me.

Before stumbling across PublicLab, I was convinced that combating environmental injustice was largely impossible for those living in poor communities, other low-income earners, and even communities living with environmental pollution issues. I now realize that these types of barriers can be overcome by the average individual and community group due to the wealth of readily available data monitoring tools from Public Labs at [http://publiclab.org/wiki/mapkitter](http://publiclab.org/wiki/mapkitter). So, should I go for open science or environmental justice? I would love to do both at some point.

### Audience

This project is for the Public Lab open network that consists of community organizers, educators, technologists, and researchers working to create an issue management platform so that truth-seekers can verify facts more efficiently, and open source contributors like myself who want to make the world a better place in our own way by MapKnitter allows communities to monitor environmental injustice on a global level. It shows how implementing small tasks can be useful, and in the long run, it contributes to bigger changes by creating code for collaborative environmental advocacy projects. I want to contribute to its continued success by creating applications that help improve the community's day-to-day experience by managing their spam effectively.

### Commitment

During the summer months, I'll be devoting my time to contributing to the Mapknitter by making it more user-friendly and easy to use.I do understand that this is a full-time commitment, and I am readily available to work for 60-66 hours every week from 9 AM to 8 PM GMT+1\.

---------

---------