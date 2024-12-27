---
title: "GSoC 2022 Proposal - Legacy Code Deprecation"

tagnames: 'gsoc, lon:77.1, zoom:10, lat:28.6, gsoc-2022, gsoc-2022-proposals, soc-2022, soc-2022-proposal, soc-2022-proposals, gsoc-2022-proposal'
author: anirudhprabhakaran3
path: /notes/anirudhprabhakaran3/04-13-2022/gsoc-2022-proposal-legacy-code-deprecation.md
nid: 30330
uid: 751144

---

![](https://publiclab.org/public/system/images/photos/000/045/675/original/GSoC-icon-192.png)

# GSoC 2022 Proposal - Legacy Code Deprecation

by [anirudhprabhakaran3](../../../profile/anirudhprabhakaran3) | April 13, 2022 16:15

April 13, 2022 16:15 | Tags: [gsoc](../tag/gsoc), [lon:77.1](../tag/lon:77.1), [zoom:10](../tag/zoom:10), [lat:28.6](../tag/lat:28.6), [gsoc-2022](../tag/gsoc-2022), [gsoc-2022-proposals](../tag/gsoc-2022-proposals), [soc-2022](../tag/soc-2022), [soc-2022-proposal](../tag/soc-2022-proposal), [soc-2022-proposals](../tag/soc-2022-proposals), [gsoc-2022-proposal](../tag/gsoc-2022-proposal)

----

####GSoC 2022

# **Legacy Code Deprecation**

## About Me

I am Anirudh Prabhakaran, a student of National Institute of Technology, Karnataka. I am doing a major in Electronics and Communication Engineering (ECE) and a minor in Computer Science Engineering (CSE). Apart from programming, my interests include music, reading books and writing now and again, and basketball.

I have been active with the PublicLab community throughout the year, and have contributed to the code base. I have interacted with Jeff (@warren), Liz (@liz) regarding the website and with Sebastian (@icarito) regarding the systems side of PublicLab (albeit not in much detail). Due to these reasons, I believe that I am the perfect candidate to work on this complicated and necessary task.

Apart from PublicLab, I am also part of the student-built and maintained UIMS software, _IRIS-NITK_, which is built on Ruby on Rails as well.

## Project Description

Our code base retains a variety of old database models, code segments, and removing them is a delicate task involving correcting tests, restructuring the database, and more.

I am planning to do this as a 350-hour project over the course of 12 weeks.

## Abstract

The PublicLab code has a lot of old and unused models, controllers and code. The project aims to remove the old code, restructure the DB, make archival copies of all changed data, and improve the code base.

## Problem

The initial PublicLab was a Drupal website. While shifting to a Ruby on Rails app, lots of the Drupal code was deprecated, but there are still some remnants of that time. There are a few models that still have the name "Drupal" in them. Apart from the migration, as development of the app continued, some controllers and URL endpoints have become unused. The project aims to remove all those pieces of code, so that the code base can become better.

This task can be broken down the following subtasks:

1. Migrate DrupalNodeImage to native Image records
2. Revamp/deprecate Tag Aliasing
3. Refactor Legacy Gallery Code into Node Revision Body
4. Deprecate Drupal legacy database structures/naming
5. Deprecate DrupalFile and DrupalUpload tables

One of the stretch tasks I was considering was Ruby upgrade. We currently use Ruby 2.7.3, which will reach its end-of-life (EOF) on March 31, 2023\. Although this is a mammoth task, we should start looking into upgrading our Ruby version so that we can make use of the most up-to-date software.

Looking into the above problems in a bit more detail:

**1\. Migrate DrupalNodeImage to native Image records**

Some nodes are still using the Legacy main image type. We need to migrate these images to the Image record, and deprecate the model. However, the problem is that there are about 1000 nodes which use these. While migrating, we also have to take care about the fact that some nodes already have a `node.main_image_id`.

Related issue link: [https://github.com/publiclab/plots2/issues/76](https://github.com/publiclab/plots2/issues/76)

One approach to do this task is the following:

```ruby
DrupalMainImage.all.each do |dimage|:
    picture = URI.parse(dimage.file.path).open
    image = Image.new(uid: dimage.uid, remote_url: picture)
```

**2\. Refactor Legacy Gallery Code into Node Revision Body**

There is a very old leftover feature that shows a collection of images in a "gallery" at the top of a note. The plan is to add that image at the beginning of the node body and make it a part of the content itself.

A small code snippet that would achieve this goal is as follows:

```
Node.all.each do |n|
    text = ""
    n.gallery.each do |image|
        text = text + ""
    end
    rev = n.latest
    rev.body = text + rev.body
    rev.save
    node.save({})
end
```

Related issues: [https://github.com/publiclab/plots2/issues/4074](https://github.com/publiclab/plots2/issues/4074)

**3\. Deprecate Drupal legacy database structures/naming**

This covers two parts - one regarding deprecating the Answers model, and the other one about converting Map notes to normal note nodes.

For the answers model deprecation, most of the migration work has been done. The only part left is regarding the actual removal of the model, and any code that refers to that model, and related tests. We can remove the model using this:

```bash
rails destroy model Answers
```

The second part is converting the Map notes to normal notes nodes. The documentation that Jeff and others have provided is extensive, and I believe this will work:

```ruby
Node.where(type: 'map').each do |node|
  revision = node.latest
  text = node.map.field_jpg_url_value
  revision.body = text + node.latest.body
  revision.save
  node.type = 'note'
  node.save({})
end
```

After making sure all the maps have been migrated to notes, we'll have to remove any particular references to them.

Related Issues: [https://github.com/publiclab/plots2/issues/4072](https://github.com/publiclab/plots2/issues/4072)

**4\. Deprecate DrupalFile and DrupalUpload tables**
Now we have to remove the DrupalFile and the DrupalUpload tables. We can write a migration that will, for a particular node, fetch `node.files`. For every file, the link will be added to the end of the `content`.

Then, we can remove all the places that the code is being referred to. The migration will be as follows:

```ruby
Node.all.each do |n|
    rev = n.latest
    text = n.files.path.to_s
    rev.body = n.body  + text
    rev.save({})
end
```

Related Issue: [https://github.com/publiclab/plots2/issues/4076](https://github.com/publiclab/plots2/issues/4076)

## Timeline / Milestones

**Week 1 and 2**

- Get more feedback from Jeff, Tilda and the community and make a solid plan for the general deprecation process.
- Get in touch with Sebastian regarding what can be done for archiving the database, and if anything relating to systems has to be kept in mind during the process

**Week 3 and Week 4**

- Work on migrating the DrupalNodeImage records to native Image records.
- Make sure data backups are made so that no data is lost.
- Rewrite/remove tests and other pieces of code dependent on the previous table.
- Deploy to the unstable and stable servers to check if everything works as expected, and then push to production.

**Week 5 and Week 6**

- Work on converting the legacy gallery code to Node revision code
- Make sure no data is lost, and the code has been properly saved into the Node model
- Rewrite/remove any tests and other pieces of code dependent on the deprecated model
- Deploy to unstable and stable servers to check that there were no issues, and then push to production.

**Week 7 and Week 8**

- Work on deprecating legacy Drupal database structures and naming
- Get backups of any removed tables to make sure no data is lost
- Rewrite/remove any tests and other pieces of code dependent on the deprecated model
- Deploy to unstable and stable servers to check that there were no issues, and then push to production.

**Week 9 and Week 10**

- Work on deprecating DrupalFile and DrupalImage tables
- These are mostly empty backups of any removed tables to make sure no data is lost
- Rewrite/remove any tests and other pieces of code dependent on the deprecated model
- Deploy to unstable and stable servers to check that there were no issues, and then push to production.

**Week 11 and Week 12 (Strech task investigation)**

- Look into migration guides to migrate Ruby version
- Come up with a plan of action for the same
- Start creating FTOs if possible, for slowly migrating the codebase.

The last two weeks' tasks are highly ambitious and experimental. I would love to get your feedback on whether it is a good idea or not, @mentors!

## Post GSoC

Even after GSoC, I will continue contributing to and helping out the community and the codebase. This community has encouraged me a lot to take part in Open Source work, and I plan to continue working with everyone to make PublicLab even better than it is.

## Contributions

My contributions are linked below. Apart from these, I have given support to newcomers with regard to setting up the project on their local machines. During May-June 2021, when we were having lots of downtime, I tried to understand the systems side of PublicLab and had a few discussions with Sebastian.

- [Comments](https://github.com/search?q=commenter:anirudhprabhakaran3%20org:publiclab&type=Issues)
- [Issues](https://github.com/publiclab/plots2/issues?q=is:issue%20author:anirudhprabhakaran3%20)
- [Pull Requests](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:anirudhprabhakaran3)

## Experience

I have been contributing to PublicLab for the past year. I took the initiative to create proper documentation for people who wanted to contribute to our organisation during Hacktoberfest. Apart from PublicLab, I also work with Ruby on Rails for my college's UIMS software, IRIS-NITK. It is a complete student-developed and maintained software. I recently got appointed as the secretary of IRIS-LABS, which is a part of IRIS that makes solutions for our college using new technologies like Blockchain and AI/ML.

Apart from Ruby, I also have experience programming in C, C++ and Python. I am currently doing a course on Database Management Systems as part of my Computer Science minor in college.

My GitHub Profile: [anirudhprabhakaran3](https://github.com/anirudhprabhakaran3)

My LinkedIn Profile: [anirudhprabhakaran](https://linkedin.com/anirudhprabhakaran)

## Passion

I am from New Delhi, which is one of the most polluted cities in the world. I really appreciate the work that PublicLab is doing, and personally believe that democratising information about the environment and the harm we are doing to it is important to raise awareness. I'm glad that I am able to contribute to this project in every capacity possible.

## Audience

The audience for my project will primarily be the contributors. For old contributors, it will be much more simple for them to navigate around the codebase, and some complex things will be removed and replaced with much simpler code, which will help developers' ease. For new contributors, the codebase will be easier for them to understand and go through, encouraging them to contribute to the project and take up complex tasks quicker.

## Commitment

The majority of the GSoC time period will be during my summer holidays, so I will not be having any academic commitments. I will be able to completely focus on the work and be able to give around 25-30 hours every week on the project.