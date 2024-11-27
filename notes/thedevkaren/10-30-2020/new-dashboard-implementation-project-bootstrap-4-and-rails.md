---
nid: 24873
title:  New Dashboard Implementation Project: Bootstrap 4 and Rails
path: public/static/notes/thedevkaren/10-30-2020/new-dashboard-implementation-project-bootstrap-4-and-rails.md
uid: 727770
tagnames: outreachy,first-time-poster,outreachy-2019,zoom:6,outreachy2019-proposals,lat:9.081999,lon:8.675277
---

#  New Dashboard Implementation Project: Bootstrap 4 and Rails

## <b>About Me</b>

- Name : <em>Efereyan Karen Simisola</em> <br>
- Location : <em>Nigeria</em> <br>
- Timezone : <em>GMT + 1 </em> <br>
- Github : <em>KarenEfereyan</em><br>
- Twitter : <em>EfereyanK</em><br>
- Portfolio : <b>https://karenefe.netlify.app</b>
- Random Fact : Sleeping is my hobby. Oh well, because my future depends on my dreams, so I go to sleep.

## <b>Project Description</b>

This project is the implementation of an entirely new and refined dashboard for the Public Lab site using Bootstrap 4 and Rails. As it stands, the current [dashboard](https://publiclab.org/dashboard) is a little bit clumsy and hard to use especially for first-timer users as there are lots of items on the dashboard.

The project can be seen as broadly divided into three categories.

In the first phase, a lot of work has gone into creating a [style guide](https://publiclab.org/notes/warren/05-07-2019/introducing-a-draft-style-guide-for-public-lab) to describe the common components, especially the card component that will be a regular feature of the new dashboard design. The new design is based entirely on Bootstrap 4.

The second phase will see to the creation of a new page whose components and reusable UI patterns will follow the style guide and provide a new alternative to the existing [dashboard](https://publiclab.org/dashboard), giving users and overview of the recent activity on the site, with specific emphasis on different topical forums or interest groups that the site users follows. In the case that a site user follows very few or none of the interest groups present, they will be encouraged to.

The third phase introduces a deliberation of implementing the entire new design in React. This migration or implementation in React would be highly dependent on the strength of an intern's previous knowledge with React.

## <b>Abstract</b>

With the designs in the new [style guide](https://docs.google.com/presentation/d/1-XHlVn3KQxSjS5WzHgc1l1qvFwqUC5f3-7GXugUP9u4/edit?ts=5cab5403#slide=id.g577da2d6cf_0_0) in mind,
I would help in implementing the new dashboard design by doing the following :

1. Make a new page to display 'all posts'
2. Implement the new dashboard design

### <b>Phase 1 : Make a new page to display 'all posts'</b>

A new page will need to be created to hold all the posts held in the previous dashboard when the new design has been implemented.

[![all-posts.jpg](/i/41371)](/i/41371?s=o)

As can be seen in the photo above,

- The design of the new posts page will be modelled based on the /tags route.

- I think that the little Water quality box on the top of the tabs for Research notes, questions, wiki pages and people should be removed. This page holds the list of all the posts and so should be kept as such.

- On the topic of choosing the route to which the list of posts should belong, I think that a new route like /posts will be a good idea.

- The suggestion is that a function to sort posts by isn't needed. I think though that it might be helpful to have a way of sorting through posts by, at the very least, the most popular and the most recently uploaded posts.

There are some hindrances or notes that should be deliberated on here, however. For example, are the list of posts going to be grouped by means of the tags? In that case, the route might be /tag/posts, in which case, it will give a list of all posts on the given tag. In this case, clicking on a post should take one to a route that looks like this /tag/posts/tagPostTitle which will be the main posts from the list of posts with that tag.

On the other hand, are the lists of posts just random? consisting of posts from different tags? In that case, the route will just be /posts and the user knows he/she can find posts from different tags on that route. Then clicking on a given post will load that post with a title that relates to the tag to which it belongs.

- The people's tab should be turned into a comments tab as it was in the previous implementation

[![all-posts-2.jpg](/i/41372)](/i/41372?s=o)

- As can be seen in the image above, the cards for the different posts differ in size which is not great for consistency.
  I think using cards of predetermined width and height will be perfect

- Some posts have the pin icon while others do not. Removing from all or adding to all will ensure consistency

- When the little three dots are clicked, it opens up another small panel with the likes, number of views, date of creation, and a read more button. It is distracting. Perhaps, in addition to the blog title, a little snippet from the blog content, preferably not spanning the entire width of the card should be added with a 'read more' link at the end which when clicked should take one to the individual post. That will allow us to remove the three small dots. That would make the cards even more simplistic and more appealing

[![all-posts-3.jpg](/i/41373)](/i/41373?s=o)

- Perhaps the pagination component could also be made to take the full width on every device while preserving the paddings and margins added to ensure readability.

[![comment-name.jpg](/i/41374)](/i/41374?s=o)

- Currently, both the comment author and the blog post title about which the comment was made are both in blue which makes it a little difficult to differentiate them. It might be helpful to have the comment author in a different color, maybe light gray along with an image of the author and probably the time of making the comment.

[![all-posts-4.jpg](/i/41375)](/i/41375?s=o)

- The comments section on the individual post looks good to me. Maybe another icon or a span of edited could be added to help the commenter make changes to his previous comment. That would prevent situations where a reply to a comment doesn't really make sense or fit in the context of the comment because the comment has been edited without an indication to other users.

- A link to see all posts should be added to the dashboard. It might be put before the card suggesting more topics that the site user might want to follow as seen in the image below.

[![view-posts.jpg](/i/41376)](/i/41376?s=o)

### <b>Phase 2 : Implement the new dashboard design</b>

[![view-posts.jpg](/i/41376)](/i/41376?s=o)

The currently accepted design for the new dashboard can be seen above.

- A new route /dashboard2 will be created for the purpose of testing the implementation all through its duration while ensuring that the current dashboard is not broken yet

[![dashboard.jpg](/i/41377)](/i/41377?s=o)

- Resolve odd line folding on individual posts in topic cards

- A list of topics that the user has subscribed to should be displayed. Suggestions on more topics to follow are on the right column of the dashboard, excluding those that the user has already subscribed to.

  - If a site user is subscribed to 3 topics or less, a suggestion to subscribe to more topics, maybe in form of an alert should be added.

- Allow admins to configure content to display without codebase changes by adding a [dynamic feature](https://github.com/publiclab/plots2/blob/main/doc/DATA_MODEL.md#features) in the sidebar, under the list of topics, and at the top of the page, preferably in the navigation bar at the /features route. A sample image is displayed below.

[![topic-list.png](/i/41378)](/i/41378?s=o)

- Ensure that the new dashboard is mobile responsive, looking good on small screens as well. This is achieved by collapsing the 'more topics to follow' feature, except the site user is currently subscribed to 3 topics or less.

[![mobile.png](/i/41379)](/i/41379?s=o)

- Connect topics search to autocomplete dropdown, similar to the one at /tags. The current suggestion is to enable auto-complete when a site user searches for a topic. This will give new users an idea of the topics that a search can be made around. But, it can also get messy, quickly. Especially, when there are a lot of suggestions in the dropdown. The user can get overwhelmed quickly. I think that the topics under the 'featured topics' section are a good starting point for new site users to get started with.

[![dropdown.png](/i/41380)](/i/41380?s=o)

- Make new topics to follow work synchronously first, with /subscribe/tag/water-quality URLs. Circle back at end of the project to implement AJAX if time available. Also, consider using AJAX to add/remove new topics that were recently subscribed to, and a button to allow a site user to re-follow the topic.

- Configure the “add location” button to work similarly to how it now works on the tags page. However, when a new location has been successfully added, the page should be reloaded with a new popup of the map.

[![location.png](/i/41381)](/i/41381?s=o)

- Once the new location is added, I will connect the 'Nearby activity' button, which will lead to a map view of recent posts, along with another button to view the location on a map.

[![view-map.png](/i/41382)](/i/41382?s=o)

- A list of trending topics and those recommended for the site users will be at the bottom of the page, as is in the new dashboard design

[![trending.png](/i/41383)](/i/41383?s=o)

- A choice blog should be pinned to the top of the dashboard topics list. This will whet the appetite of the user and might encourage him/her to follow more topics if they find the pinned one interesting. The pinned blog should be excluded from the subscribed lists below to prevent duplicate displays. The site users should be allowed to subscribe to blog updates by email using the subscribe system, by clicking on the three small ellipses. It should be noted though that the blog will be an exception to normal topics display as displayed on the dashboard in that only the blog will have an option to be subscribed to.

I will collaborate with the project maintainers to :

1. Assess and discuss whether the new dashboard now fulfills basic needs and can replace the old dashboard already. If that is true, serious consideration will be made to allow the newly designed dashboard to now show on the /dashboard route instead of /dashboard2 route.

2. Discuss where each post button on the topic cards should lead to.

3. Go through a series of testing to ensure all implementations work as expected.

### <b>Timeline / Project Milestones</b>

#### December 1 - 3 (Development Environment Setup)

- Set up my development environment(Install all necessary dependencies)

- Reading up on the codebase and getting some general well-rounded context overview on the project as a whole

- Studying up on how to do testing, which will be a regular feature all throughout the internship duration

#### December 4 - 7 (Creating All Posts Route)

- Create a new page for all posts at the /posts routes

- Implement the design of the new posts page using the tags page as a model unless new clarifications come up before then

- Determine if the /posts page will give a list of all posts that fall into a tag category or have one level deeper route, like /posts/tag for site users to see a list of posts that fall into a given tag category. I suggested this above.

- Depending on the outcome of the above discussion, I will go on and make the implementation.

- Creating some first-timer issues and supporting beginners in making contributions either by PR reviews or general conversations around the issue they are tackling.

#### December 8 - 14 ( Creating Comments Tab Section )

- Replace people's tab with comments tab on the new 'all posts' page

- Determine how to efficiently layout comment entries in card format. Use bootstrap 4 card components to layout the fields, author, link to the node, no of comments on the parent node, and time posted.

- Deliberate on whether to add a sort by recency function on the all posts page is necessary and implement based on the outcome of deliberation

- Test features up to that point and work on any issues that arise.

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

#### December 15 - 21 (More Work on All Posts Page)

- Fill in the rest of the tabs for all posts page, including the Research notes, questions, wiki pages from existing API data.

- Ensure all API additions do not have issues and fix any issues that do arise.

#### December 22- 29 ( Creating temporary dashboard route)

- Creating a new /dashboard2 route to start implementing agreed features from previous weeks.

- Adding a link from the new dashboard to all the posts. It might be put before the card suggesting more topics

- Test implementations up to this point

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

#### December 30 - January 5 ( Resolving odd line folding )

- Display a list of topics that the user has subscribed to.

- Conclude what to do regarding the small popup describing the number of likes, comments, and views on individual topics

- Resolve odd line folding on individual posts in topic cards

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### January 6 - 13 (Mainstream testing)

- Under the guidance of project maintainers, do some mainstream testing of implementations up to this point

- Add test for old-line folding to confirm it has actually been resolved

- Add accessibility tests including responsiveness for the dashboard to ensure it looks good on mobile screens as well.

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### January 14 - 21 ( Implementing dynamic feature for admins)

- Add the route of a feature to the navbar to allow admins configure content

- Add alerts for users subscribed to three topics or less and encourage and suggest more topics for them to follow.

- Add tests for implementation so far

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### January 22- 29 ( Pinned Blog Post to Dashboard List )

- Display a predetermined blog as a pin to the top of the dashboard topics list

- Implement logic to exclude the pinned blog from all other blog topics the site user has subscribed to. Duplicate displays are never an option

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### January 30 - February 5 ( Blog Updates By Email)

- Code up logic to perhaps allow site users to get blog updates via their email

- Deliberate on whether or not to allow the feature of auto-suggestion of topics when a user searches for them.

- Implement the auto-suggest feature or not based on the outcome of the above deliberation

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### February 6 - 13 ( AJAX Features and Dashboard Work Continues)

- Implement the following topics synchronously using AJAX.

- Consider using AJAX to add/remove new topics that were recently subscribed to, and a button to allow a site user to re-follow the topic.

- Test implementations of the dashboard at this point

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### February 14 - 21( Adding Location Features: Updates and more.....)

- Configure the “add location” button to work. Site users should be able to look for their location using automatic geolocation, typing in coordinates, or just typing in their location.

- Implement logic for map popup and reload on location selection.

- Implement logic for a map view of recent posts when a location is loaded using the Nearby activity button

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### February 22- 29 ( Trending and Suggestion Topic at Dashboard Bottom)

- Add the feature for trending and suggested topics at the bottom of the dashboard

- Test the implementations of the dashboard and all posts page in mainstream batches to ensure everything works as expected.

- Work with project maintainers to decide if the dashboard implementation is a phase good enough that it can be used to overwrite the main /dashboard route

- Deliberate on where the post button on topic cards should lead to and implement the outcome from the maintainers

- Creating first-timer issues and collaborating with first-time contributors by reviewing PRs or providing any requested helpful assistance.

### February 30 - March 2 ( Finishing ....)

- Take a look back at the project abstract at the beginning of the internship

- How far was I able to fulfill the goals I set out to?

- Any final feedback from my mentors? I would gratefully accept them all

- Final testing of all aspects of implementation to ensure that everything works as it should.

- Complete any stretch goals that may arise during the course of the project

- Write a final blog to cap my experience through the internship

### Needs

I would appreciate receiving continued, and helpful feedback on all my delivered implementations as I deliver throughout the duration of working on the project.

I am seeking some clarity and some more information on this particular project task

- Resolve odd line folding on individual posts in topic cards

### First Time Contribution

- My [first-time contribution](https://github.com/publiclab/plots2/pull/8578) was merged on October 17

- I opened this [issue](https://github.com/publiclab/plots2/issues/8698) on October 29

- I helped a new contributor work on this [issue](https://github.com/publiclab/plots2/issues/8516)

### <em>Experience</em>

I have been actively coding since the beginning of the year. I started out with HTML and CSS and went on to learning Javascript while building many personal projects on the way.

I have been lately enthused with open source and all the possibilities that it holds out, especially for beginners like me. Working on this project via outreachy will take me one step closer to my open-source goals.

Here are some of the projects I have worked on :

1. My portfolio built with HTML, CSS, and Javascript. I had a bunch of small-sized projects and I wanted to showcase them in an orderly fashion. So I applied my knowledge of those technologies and came up with this. I will be revamping it soon using Reactjs

- Github Code: https://github.com/KarenEfereyan/My-Portfolio
- Live Link: https://karenefe.netlify.app/

2. A covid 19 tracker app built in React. It allows users to see global rates of infections, deaths, and recoveries of the covid 19 pandemic globally and also filter the search by country

- Github Code:https://github.com/KarenEfereyan/covik-19-tracker
- Live Link: https://covik-19-tracker.vercel.app/

3. A simple ejs template-based todo list. It allows you to create custom lists for different task categories. You can add a new task, check it off, and delete tasks. It also has a database to ensure that your data is persisted

- Github Code: https://github.com/KarenEfereyan/GetItDone
- Live Link: https://github.com/KarenEfereyan/GetItDone

4. A simple Simon Javascript game. The game is simple but very brain tasking. It requires a lot of focus and helps to break the boredom

- Github Code: https://github.com/KarenEfereyan/Simon-Game
- Live Link: https://simon-game-seven.vercel.app/

5. A simple blogging application. Allows you to create new blog posts, fetch all blogs, fetch a given blog by means of data persistence using databases.

- Github Code: https://github.com/KarenEfereyan/Blog
- Live Link: https://karen1blog.herokuapp.com/

### <em>TeamWork</em>

I have interned with Hng where I had to work in teams of 20+ people at a time. I have learned how to collaborate well with others in large projects.

I lead a team of developers in Code Clan Nigeria in creating knowledge. This includes scheduling and scavaging for speakers to give awesome talks, creating tutorials and AMAs.

I was part of the core team for Developer Student Clubs at my University in the last year, where I took the role of a program manager. My duties, at the least, included making sure that I managed every part of the numerous programs we organized. I had to ensure that we secured locations wand got them ready, that refreshments were available for the attendees and I also had to work closely with other core team members to ensure that all our programs were a success.

I also have some experience contributing to the Meshery open source project. There, I enjoy the privilege of making my little contribution but also helping to review the contributions of other newcomers.

In my little time at Public lab also, I have greatly benefited from the very welcoming community here and the willingness to help each other that I have seen here is very contagious. I have been privileged to work along with and help others with their first-time contributions just as I received help with mine.

### <em>Audience</em>

Publiclab is a community where members collaborate to solve environmental problems. The dashboard is the first point of call for site users. Thus, implementing these new changes to the dashboard will ease its use for users and make the application not only very understandable but also fun to use.

### <em>Passion</em>

I am passionate about people. I like to get involved in endeavors that revolve around people. In the domain of software development, I am passionate about open-source, because, by means of it, our aim is really focused on people. Open source to me means building with people in mind, by the people, and for the people. By means of open source, everyone has something to offer. It doesn't matter how much you know, all that matters is that you want to improve the lives of others.

### <em>Commitment </em>

I am currently available to commit to Public Lab fully throughout the duration of the internship period.
