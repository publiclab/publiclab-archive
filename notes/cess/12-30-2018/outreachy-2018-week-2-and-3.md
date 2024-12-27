---
title: "Outreachy 2018 Week 2 and 3"

tagnames: 'blog, outreachy, outreachy-2018'
author: cess
path: /notes/cess/12-30-2018/outreachy-2018-week-2-and-3.md
nid: 18026
uid: 525958

cids: 21608,21617,21620,21622,21623

---

![](https://publiclab.org/public/system/images/photos/000/028/550/original/w1.jpg)

# Outreachy 2018 Week 2 and 3

by [cess](../../../profile/cess) | December 30, 2018 12:21

December 30, 2018 12:21 | Tags: [blog](../tag/blog), [outreachy](../tag/outreachy), [outreachy-2018](../tag/outreachy-2018)

----

##Updates
The last two weeks have been quite good. I have made some progress. 

I manged to refactor the statistics controller by using scopes in the user, node and revision models so that the queries are quite simple hence less code.
e.g 
This was one instance variable on the statistics controller.

```
@weekly_notes = Node.select(%i(created type status))
      .where(type: 'note', status: 1, created: @time.to_i - 1.weeks.to_i..@time.to_i)
      .count(:all)
```

I made some scopes in the Nodes controller 

```
 scope :status_one, -> { where(status: 1) }
 scope :weekly, -> { status_one.where("created > ?", (Time.now - 7.days).to_i) }
```

Which changed the method to 

```
 @weekly_notes = Node.weekly.select(:type).where(type: 'note').count(:all)  
```


 You can now select a range to view statistics on the `/stats/range` page. You can do it for past week, month, year or select from a calendar.

![image description][1]  


 You can also see the statistics on the number of questions answered and asked within a certain period on `/questions`. 
![image description][2]  


I am finishing up on moving statistics methods in the user model to a concern so that its not so long. I am almost done just fixing code climate issues on refactoring some code blocks.

##Everybody Struggles

Last week Outreachy requested we share our struggles and the mentors to also share about their struggles. Thanks to the community for sharing your struggles and  making me see that I am not alone. [Here](https://github.com/publiclab/plots2/issues/4369) is a link to the week check-in where some of the contributors shared their struggles.

Here is some of my struggles.

- I struggled with was date-picker positioning..sounds pretty simple but it was a pain to get it to appear where I wanted, asked for help from the community though the suggestions I got did not solve it I had to make some comprises.

- Another major struggle was a brakeman issue User controlled method execution it looked critical to ignore. I tried to tweak it a couple of times and much much later solved it by making the method a private method.

- Currently I am struggling on getting to refactor some two methods that gets code climate complaining. The methods look similar but have varying parts.



##Next weeks plans:
Now that the statistics controller is looking a little cleaner, I will be implementing the new ui design for `/stats` page. I am currently working on a mockup and will attach it here for input when am done. Later on, after the new ui is up, I will  implement downloads of stats as csv and json.

  [1]: /i/28547.png "refac.png"
  [2]: /i/28548.png "past_year.png"