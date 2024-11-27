---
nid: 23144
title: GSOC Proposal : Printability of posts and wiki pages
path: public/static/notes/rbothra77/03-15-2020/gsoc-proposal-printability-of-posts-and-wiki-pages.md
uid: 568534
tagnames: gsoc,printability,first-time-poster,gsoc-2020
---

# GSOC Proposal : Printability of posts and wiki pages

Name : Rishabh Kumar Bothra

Affiliation(school/degree) 4th yr, Btech, Computer Science at Northern India Engineering College, India

Location(Where you are) : New Delhi, India(GMT +5:30)

Email : [rbothra77@gmail.com](mailto:rbothra77@gmail.com)

LinkedIn Profile : [https://www.linkedin.com/in/geekychasser/](https://www.linkedin.com/in/geekychasser/)

Projects you're working on or want to : Plots2

Project Description

Abstract/Summary(<20 words)

Customizing wiki pages and posts to make it print effective

adding feature to get page downloaded in pdf format

How will the Project meet this need ?

The project's need is to give users the ability to print wiki pages, posts, newsletters, blog etc

with specific page view integration i.e. different orientations example : landscape, portrait, black & white etc.

Secondly, the project will ultimately give a better experience and control to print a specific page or to download a page into PDF.

Time-frame :

Phase 1 Work Period (May 18 -June 19 16:00 UTC)

May 18 - May 24 Deciding the required elements for research note page and building basic canvas for it.

May 25 - May 31 Fixing the elements into canvas in suitable manner for print

June 1 - June 8 Writing least possible CSS for making the canvas more print friendly

June 9 - June 15 Bug fixes and documentation of the first evaluation

Evaluation (June 15 16:00 UTC -June 19 16:00 UTC)

Writing research note on the first evaluation of the GSOC Proposal

June 20 - June 26 Building a 'p' button to initiate print process in research notes

June 26 - July 01 Completion of print in research notes and final check if its working perfectly in all the cases

July 1 - July 9 Handling power tag content for print and related issues

July 10 - July 21 Building same canvas print for newsletter, wiki pages, profile.

July 22 - July 28 Fixing the bugs (if any) while checking at all different pages.

July 29 - August 31 Making the code clean and adding some basic CSS for profile page printing to make it more print-friendly

Evaluation (August 6 - August 14 16:00 UTC)

Writing final Evaluation research note according to GSOC guidelines and checking that all tests pass or any Bug fixes in the code and submitting final evaluations

: Print :

This would include a print modal with some customization option and an option to download the page in pdf format.

This would also include documentation of the properties changes for each page.

: Implementation :

Approach 1 :

Modifying print.css and creating different css files for different pages such as research, wiki, notes etc.

Current the print.css file present in app/assets/stylesheet is not working correctly.

Screenshots of pages with current print.css

![](https://lh3.googleusercontent.com/GEByOr6w5F4GgNIWPPVHMhMLEm3CBd5xIIj9ZJF51riMKfR3KNNsrZaW9ljkrJ8WiMq8zGR5HpUMI51xdIxCl2pGnAR_imiGC1KHjC9fgjx6ORJqKdRHW_qd_2e7qnTfBoCV6Lah)

:: unformatted information on page with lost of white spaces.

![](https://lh4.googleusercontent.com/iqCHQiiG7TLoIIngAjBGWEaAIYtXtyFkHkC9A4HdBx3cwvWb_4KKJEo-j6KCRlCXq-ToWzq94oevQYh-f7BhbAYjCrpQ3rQX-wsqV98tCoLN2kC5bcJrR123xWxQJuGoj0x6JHIt)

:: I tried printing out some pages but they look really unconvincing to even read them.

-\> This can be handled and improved by removing footers from pages.

-\> Removing all the extra margins and spaces.

Giving some default margins

```
<p></p><p><span>@page {</span></p><p><span>&nbsp;&nbsp;margin: 20px;</span></p><p><span>}</span></p>
```

but this needs to be handled differently for all other pages.

Pros for the Approach 1:

1. Easy to implement
2. Can directly run with ctrl+p command

Cons for the Approach 1:

1. Need to implement separately for all the pages.
2. It could behave abruptly if any changes to styling is done in future.
3. It could not give a good result in case of some dynamic features.
4. Overall CSS is quite difficult to maintain and change over time to time.

Approach 2:

First off, we'll need to create a "canvas" to paint on since the page we want to print already has its own DOM filled with elements that we may or may not need. Elements like the header, footer, call-to-action buttons, unused filters, navigation bars, tab bars, backgrounds, and large images, etc. may not serve much of a purpose on a printed page.

In a traditional way we would have hide these elements in our print.css but this may only serve 50% for our needs.

Why not traditional css approach :

1. Altering the DOM for printing may be fine for basic pages, but the solution is not scalable. If a page has a layout beyond just a few simple elements, print.css file can quickly grow in both size and complexity.
2. Site content typically has to stay in the same general area for printing. We can use something like Flexbox's order and flex-direction properties to shift items around a bit, but we quickly run into limitations.
3. we have to maintain your print styles in addition to your pages. If we add new elements to a page, your print styles will have to account for them as well.

Now looking beyond this traditional way i thought of creating a "Blank canvas" and the first option which came to my mind was `windows.open`. This approach may work, but we now have to consider pop-up blockers, sizing and positioning the new window, and the need to destroy the window once the user is done.

So next and best way to create Blank Canvas is creating an iframe.

We will diving the whole process in 5 functions :

1. print() : this function prints the current page by creating an empty/hidden iframe and executing the print command.
2. generate\_print\_layout() : dynamically gathers body and footer html to be injected into the iframe.
3. generate\_header\_html() : imports CSS from the current DOM to be applied to the iframe header.
4. generate\_global\_css() : adds global classes like margins, image dimensions, and table breaking, to be present on every page.

We need to divert our thinking from what is useful when a user is surfing online to what is useful for a user with a physical, printed copy of our information.

While constructing the new page, remember to keep the use cases in mind here. Why do users really need to print this page? What are they doing with the paper? Do they need space to write notes? The page as-is on the web is probably not very useful on paper. No buttons will work, nor will the background images do much more than waste ink.

Here goes the overview of code :

```
<p></p><p><span>generatePrintLayout: function () {</span></p><br><p><span>&nbsp;&nbsp;&nbsp; </span><span>let html = '';</span></p><br><p><span>&nbsp;&nbsp;&nbsp; </span><span>html += '''';</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;// We can also make it dynamic by extracting original headers from rendering page</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;html += this.generate_global_css(); // for generating global css</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;html += this.generateFooterHtml(); // for generating footer if needed</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;return html;</span></p><p><span>&nbsp;&nbsp;},</span></p>
```

```
<p></p><p><span>generateGlobalCss: function () {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// adding any global css we want to apply to all print pages</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>let css = '</span></p><br><p><span>&nbsp;&nbsp;&nbsp; </span><span>// global css</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>css += 'body { padding: 40px 24px; }';</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>css += 'table tr { page-break-inside: avoid; }';</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>css += 'table td { vertical-align: top; padding: 4px 8px;}';</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>css += 'img { height: 100px !important; width: 100px !important; }';</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>css += '@page { margin: 0.8cm; }';</span></p><br><p><span>&nbsp;&nbsp;&nbsp; </span><span>// creating dialogue box informations into tables makes it more readable and print</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;friendly</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>css += '';</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>return css;</span></p><p><span>&nbsp;&nbsp;},<br></span></p>
```

Now this iframe can not be directly printed from ctrl+p so overriding this function as:

```
<p></p><p><span>document.addEventListener("keydown", function (event) {</span></p><p><span>&nbsp;&nbsp;if((event.ctrlKey || event.metaKey) &amp;&amp; event.key == "p") {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp; </span><span>Page.print();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp; </span><span>event.preventDefault();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp; </span><span>return false;</span></p><p><span>&nbsp;&nbsp;&nbsp; </span><span>}</span></p><p><span>} , false);</span></p>
```

Cons of Approach 2 :

This feature can be implemented as a (custom) "print" button on your site, but it will not cover printing through the default browser methods `right click ->print` and File -\>Print`. The`windows.open()\` method can apply changes before the print job begins, but there is no way to cancel or override the default browser print job.

What is the broader goal for this project ?

Some of our users reference content made through our community while they're offline or away from computer devices. So this will enable

dissemination of the knowledge on paper.

What resources will you need: people, documentation, literature, sample data, hardware if applicable?

The contributors, mentors and the team members of the open source community are the most relevant resources

for completion of the project. Also, I will be learning more from their official documentation. I believe my Mentors

guidance will perhaps be the greatest resource for me.

Getting more people involved in open projects is not an easy task. Lowering the barrier for non-technical people will lower the effort that

needs to be taken to get enough volunteers. As a side-effect, more people get in contact with science and they will see that it does not

need an academical background to be a scientist. This surely is a benefit in multiple ways.

Setup

Have you forked the relevant codebases? Installed them in a dev environment such as [Cloud9.io](http://Cloud9.io)? Need help doing so?

Please provide a link to each of the above.

Yes, I have forked the GitHub repo and deployed it on my local machine.

Experience

Describe your technical background; what languages you use, what projects you've contributed to before,

links to GitHub or other code repositories or samples. Have you read the Contributor Guidelines at

[https://publiclab.org/wiki/contributing-to-public-lab-software](https://publiclab.org/wiki/contributing-to-public-lab-software) and are you comfortable submitting pull requests?

Skills and expertise:

Languages C, C++, Javascript, Python

Web Technologies Angular, NodeJS, Ruby on Rails and related skills

DBMS MySQL, MongoDB

Version Control System Git

Yes, I have read the Contributors

More than 15 Merged pull requests for various suggestions, bug fixes, issues on plots2

[https://bit.ly/39lC5De](https://bit.ly/39lC5De)

Over 45 issues, bugs, suggestions reported by me

[https://bit.ly/2HaFEAj](https://bit.ly/2HaFEAj)

Bunch of first-timers-only issues created

[https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Ageekychasser+label%3Afirst-timers-only](https://github.com/publiclab/plots2/issues?q=is%3Aissue+author%3Ageekychasser+label%3Afirst-timers-only)

and many more

There are also many existing issues and pull requests currently in progress by me.

### Teamwork

Describe teams you've worked with before, whether the open or closed source and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient.

I have been to lots of Hackathons and participated in a team. I learned how to work in a team and how to collaborate on a single project in hackathons and when I further started contributing to Public Labs it gave me great exposure to work on a huge codebase that too with lots of people working together.

I found it really motivating to get guidance from great developers like @warren ,@[bansal\_sidharth2996](https://publiclab.org/profile/bansal_sidharth2996 "https://publiclab.org/profile/bansal_sidharth2996") ,@Cess. I was able to start with open source only because of their help.

### Expertise

Would you describe yourself as especially good at or interested in some aspect of coding or problem solving, or open source science? Provide examples and links. Are you particularly suited to this proposed project?

I have more than 1 year of experience in web development, I have also worked closely with 2 startups and developing the product from scratch. I love participating in Hackathons as developing something new in a very short span of time feels really exciting and also results in great learning.

I was shortlisted for a sponsored trip to Finland for Oulu Health Hack 2018\.

I am also a Beta level Microsoft student partner, I love conducting seminars and sessions to engage more students to open source and related technologies.

I have worked on similar kind of project to generate PDFs in printable format as freelancing work. So, I think I am suitable for this project.

### Commitment

Yes, I am fully aware that it is a full-time summer[](http://internship.as/) internship. As it is of three months duration and it's a small period of duration, so, I will only choose those online courses which are related to the completion of my project. Also, Google is paying me for it, hence, I am fully committed to working on it throughout the summer. I will give my 100% to it.