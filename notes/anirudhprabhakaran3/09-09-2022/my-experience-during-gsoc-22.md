---
title: "My experience during GSoC '22"

tagnames: 'gsoc, lon:77.2, zoom:10, lat:28.6'
author: anirudhprabhakaran3
path: /notes/anirudhprabhakaran3/09-09-2022/my-experience-during-gsoc-22.md
nid: 34947
uid: 751144

cids: 

---

# My experience during GSoC '22

by [anirudhprabhakaran3](../../../profile/anirudhprabhakaran3) | September 09, 2022 11:57

September 09, 2022 11:57 | Tags: [gsoc](../tag/gsoc), [lon:77.2](../tag/lon:77.2), [zoom:10](../tag/zoom:10), [lat:28.6](../tag/lat:28.6)

----

# Hello!

Hi everyone! I am Anirudh Prabhakaran. Over the summer, I have been working with PublicLab as a contributor to the Google Summer of Code (GSoC '22) program. As the end is near, I would like to reminisce about my experience, key takeaways, and how this experience has changed me.

Please refer to [this link](https://github.com/publiclab/plots2/issues/11185) for a reference to my work as part of GSoC. If you want to know about my contributions to PublicLab in general, you can check that out [here](https://github.com/publiclab/plots2/pulls?q=%20is:pr%20author:anirudhprabhakaran3%20 "https://github.com/publiclab/plots2/pulls?q=%20is:pr%20author:anirudhprabhakaran3%20").

I want to go through the various phases of my journey, and in the end, I'll consolidate all my learnings and takeaways.

  
### The Proposal

The GSoC journey starts with a proposal. I spent quite some time working on it, and by the end of the process, I was pretty confident. There were a few factors that were in my favour. When I started writing my proposal, I had quite a good idea about the codebase. This experience helped me pick out a complex, more extended and more enjoyable project.

Another thing that helped me entirely a bit was my familiarity with Ruby on Rails. Since the project uses that tech stack, it was easy for me to understand what needed to be done quickly. I believe that these things helped me a lot!

  
## Planning

After my proposal was accepted, the planning phase started. My project was almost exclusively made up of database migrations and file deletions, which have significant implications if it goes wrong! Securing data was the foremost priority. I took the time to clearly understand what changes I'll be making, what database tables I'll be editing or deprecating, and how to ensure no data is lost.

  
A few chats with Sebastian, PublicLab's systems administrator, taught me how backups are made and maintained in the PublicLab systems. This conversation was quite relieving for me, as he mentioned that there are frequent backups made. If something goes wrong, we will be able to revert it (of course, only to a certain extent.)

  
After that, I started doing the implementation!

  
## Coding

After clearly analysing what needed to be done, I started picking up tasks. Unfortunately, due to unforeseen circumstances and a bout of poor health, I couldn't stick to the deadlines I set for myself as rigorously as I wanted.

**1. Map Nodes:** This was the first task I implemented. In PublicLab, most user content is a "node". There are various nodes - notes, wiki, questions, etc. One of these types of nodes is map nodes. The goal was to migrate all these map nodes to normal note nodes and include the map as an `iframe` in the node body.

However, I did have a problem with this. After this was approved and merged, all the map nodes would have been converted to note nodes, including the URLs. This would mean that previous links to these pages would be broken. Another MR was made to solve this.

**2. DrupalImageGallery:** There was a feature in the website that was a remnant of the old Drupal days. You could create an "image gallery" for your note, and that would be displayed at the top of the note. The plan was to remove the ImageGallery and add these images at the top of the note body as images in HTML.

**3. Answers:** The beast that was finally tamed. PublicLab had a system of questions and answers, and these answers were stored in this model. A few years back, all the answers were migrated to comments, paving the way for the model's deprecation. My job was to remove this model and all references from the codebase.

**4. DrupalFile:** Again, one of the remnants from the good ol' Drupal days. All files attached to a node were stored as DrupalFiles and corresponding DrupalUploads. A decision was made to migrate these links from files to hyperlinks inside the node body. The links would be added to the end of the model as a list of links to different files. This task is currently in progress, with around 70-80% of the work completed and under review. The only part left is to create an MR that will delete the model files from the Rails app.

**5. DrupalNodeImages:** The one that got away. I was unable to work on this particular issue. However, I do plan on completing this soon!

## Lessons Learnt

During coding and completing these tasks, I learnt a few valuable lessons that I am sure would stay with me for the entirety of my software engineering life!

**1. Use null safety!** Do not trust the data on production servers. There will be wild inconsistencies and the information on which you test your code locally. Make sure you use as many checks as possible in your migrations so that you do not end up running unwanted scripts or end up being unable to run your code because of some exceptional data.

**2. Do not remove dependencies in the same MR!** Although this is quite obvious in retrospect, I ended up calling a function in a migration which I had removed in the same commit. It worked on my local system (as I had run the migration before I removed the file), and we also missed this subtle thing during code reviews. When we tested it out on the testing server, it didn't run (obviously). Jeff spent a considerable part of the next day trying to fix the issue, which led to many impromptu commits to the main branch, and the problem was finally resolved. (Thanks, Jeff!)

**3. Test, test and test!** Testing is usually a part of the codebase that developers rarely write. I do not think I have written a single line of test code in my software projects. However, over the summer, I came to appreciate the test suite that has been made so meticulously by so many people at PublicLab. Before pushing it to GitHub for review, I could verify and edit much of the code I had written. This helped me deliver clean, functional code to my mentors for review directly instead of going through more iterations of local testing by various people.

While working on the Answers model, nearly every test failed. This led me to go through the testing suite, learn MiniTest, debug the code, edit the test statements and data to match the new schema, and much more. From now onwards, I am sure that I will make testing a much more integral part of my software engineering journey.

## In Conclusion

The experience I had over the summer was one of the best of my life, and I am very grateful for the opportunity that was given to me. I learned a lot, both in breadth and depth, about Ruby, Rails and MySQL (the database that PublicLab uses). Working with such a diverse team of people was also excellent, and I doubt when I'll get such an opportunity again. The weekly calls were always fun, and everyone was responsive and helpful during meets and on the Element chat.

I wish to thank Jeff, Cess and Tilda for going through my MRs promptly and giving me helpful feedback. That helped me not only with the current MR but with the future MRs I made as well. Thanks to Sebastian for sitting and clearing the doubts I had initially about the systems set up and the database setup of PublicLab. It helped me make an action plan that would be the smoothest to implement.

And finally, I would like to thank the team at PublicLab, for making such a resource available, maintaining it and updating it religiously. Thank you for considering me capable enough to undertake such a significant project. I look forward to interacting with you again and contributing to PublicLab to make it even bigger and better. 

Until my next commit!