---
title: "GSoC 2020 Proposal – Implementation of better printability of posts and wiki pages"

tagnames: 'content, soc, project, location:blurred, lat:44, first-time-poster, soc-2020-proposals, soc-2020-proposal, abstract, lon:8, place:italy'
author: susannadiv
path: /notes/susannadiv/03-10-2020/gsoc-2020-proposal-implementation-of-better-printability-of-posts-and-wiki-pages.md
nid: 23115
uid: 670493
cids: 26462,26463,26480,26498,26544,26566,26570,26582,26583
---

![](https://publiclab.org/public/system/images/photos/000/038/400/original/GSoC_-_Vertical_Narrow_-_Gray_Text_-_White_BG.png)

# GSoC 2020 Proposal – Implementation of better printability of posts and wiki pages

by [susannadiv](/profile/susannadiv) | March 10, 2020 17:11

March 10, 2020 17:11 | Tags: [content](/tag/content), [soc](/tag/soc), [project](/tag/project), [location:blurred](/tag/location:blurred), [lat:44](/tag/lat:44), [first-time-poster](/tag/first-time-poster), [soc-2020-proposals](/tag/soc-2020-proposals), [soc-2020-proposal](/tag/soc-2020-proposal), [abstract](/tag/abstract), [lon:8](/tag/lon:8), [place:italy](/tag/place:italy)

----

About me

**Full Name:** Susanna Di Vita

**Affiliation:** University
of Genoa, UNIGE - member of the IANUA-ISSUGE Excellence Academic Program
(admission requires a perfect GPA score)

**Degree:** Bachelor
of Science in in Computer Science

**Email:** [susanna.divita.2@gmail.com](mailto:susanna.divita.2@gmail.com)

**GitHub:** [https://github.com/SusannaDiV](https://github.com/SusannaDiV)

**LinkedIn:** [https://www.linkedin.com/in/susannadiv/](https://www.linkedin.com/in/susannadiv/ "https://www.linkedin.com/in/susannadiv/")

**Location:** Genova,
Italy

#Abstract \#

Improving printability of posts and wiki pages to enable dissemination of knowledge on paper. Implementing page-specific preview and Optimized for print option to improve user experience while outputting [PublicLab.org](http://PublicLab.org)'s content on paper.

#Project description#

The aim of the project is twofold: a) to optimize the pre-existing default view for printing;
b) to create both a preview page and a new CSS stylesheet for a print-specific
page view.

As for a), both
better readability via font resizing, augment of contrast through switching to
b/w, improve ink economy by removing unnecessary shading, prevent cutoff text and
better blank space management through proper adjustment of size borders and suitable
redefinition of page breaks - allow improved default view for printing. Such
improvement leads to both better readability and accessibility of printed wiki
pages. Then, it allows reduced environmental impact of paper-based outputting,
with lower consumption of both ink and paper. Deliverables include both
improved handling of printed links through visualization of link targets and
upgraded hiding of unnecessary page elements of today's version - like e.g. the
navigation content in the footer. Success relies on suitable regrouping of
information as well as on careful handling of page breaks.

As for b), the
project is concerned with the creation of a new a print-specific page view
stylesheet and with the addition of a "Printable Version" button that links to a
Print-Specific Page Preview written in JavaScript. The latter button allows
production of specific print-optimized and content-oriented pages, with possible margin adjustement in case of binder storage. In both cases, I aim at providing
the user with a seamless reading experience; this
is achieved by producing a text-to-page view that results in files containing
only necessary information. Deliverables include an advanced hiding strategy for
redundant page elements and safeguard enforcement of both functionalities against
unintentional breakage at the hand of future contributors.

# Issues to be solved

**Optimization default view for printing**

1. Defining side borders and font sizes
2. Optimizing color and contrast
3. Improve hiding strategy for unnecessary layout
elements
4. Reducing the usage of page
breaks and preventing text cutoff
5. Refining hypertextual link display
6. Adding print-exclusive messages

**Implementation of a print-specific page view**

1. Creating an "Optimized for print" button
2. Implementing Print-Specific Page preview
3. Hiding unnecessary page elements --
Advanced (decorative images, videos and other iframes)
4. Handling blank gaps from iframe removal
5. Usage of CSS filters for environmentally friendly graphs
6. Background replacement with border highlining
7. Supplementary options for binder storage

# Timeline/Milestones

![image description](/i/38414.png "Annotazione_2020-03-10_202842.png")![image description](/i/38415.png "Annotazione_2020-03-10_202910.png")

During the Community
Bonding period I will keep familiarizing with the codebase by reading the documentation,
solving issues and making contributions. I will also align myself with [PublicLab.org](http://PublicLab.org)'s
community by getting to know its members and discussing planning details with my
mentors.

The result of the
first evaluation would be a completely optimized default view for printing. The
deliverables in the second phase evaluation
will be a fully optimized CSS print default stylesheet and a Page-Specific Print
preview implementation.
The creation of universally applicable and intuitively named CSS rules will promote the reusability of components within [PublicLab.org](http://PublicLab.org)'s codebase.

# Testing Strategy

The testing stage will be greatly simplified by the separation of print and screen CSS rules in different files. Such separation enables the implementation of a time-optimized testing strategy, in which changes made to the print.css stylesheet will be instantly visible on screen just after reloading (therefore cutting out the need for constantly PDF-exporting and browser-previewing for layout checking).

The page print-out emulation will be achieved by both isolating the print and screen CSS rules and temporarily switching the stylesheets loaded by the main's HTML link tags.
After isolating the HTML link tags responsible for loading the CSS stylesheets

![image description](/i/38734.png "z.png")

I am going to switch temporarily their respective media attributes (from "screen" to "print" and vice versa):![image description](/i/38737.png "y.png")

This will allow me to employ the commonly browser-shipped Developer Tools in order to navigate the newly modified layout elements as if I were testing the default screen-version of the webpage.

I am going to access Chrome's Developer Tools by selecting the Developer Tools\>More Tools\>Rendering panel and by changing the "Emulate CSS Media" option to print. Once the tests are finished, the original corresponding attributes will be restored.

# Implementation

# Adjusting Side Borders and Font Sizes

The current
stylesheet produces pages with a non-centered body because of disproportionate
margins. Unnecessary padding before the h1 tags also needs to be
removed:

![image description](/i/38417.png "Annotazione_2020-03-10_203544.png")

In order to get rid
of all of the unnecessary blank space at the beginning of the first page when
printed, I'll need to target it with the :first page pseudo-class:

![image description](https://publiclab.org/i/38420.png "Annotazione_2020-03-10_203958.png")

As for
the font sizing, it's vital to keep in mind that printers require different
units for the font size than the monitor; thus, I am going to convert pixels
into points. A font size of 12pt - which corresponds to 16px - is considered optimal for content readability; h1, h2, h3 and h4 will be scaled accordingly.

![image description](/i/38419.png "Annotazione_2020-03-10_203918.png")

A simplified margin management system for the following regular pages will be provided by integrating Paper CSS, an extremely light-weight library for automatic indentation and padding width setting.

Both the border
definition and the font size will be applied for both parts of the project, as
they both represent the optimal layout consideration in print settings.

Note:
the font resizing will not affect the number of pages being needed to be
printed, as pace break optimization and hiding of unnecessary elements will minimize
that.

# Color and contrast optimization

Changing the color scheme to black font on white background not only
provides a higher contrast, but it's also preferred by most people due to the
expense of colored toner. Furthermore,
by converting the body's color to black the printer understands that no shading
is necessary - which improves ink economy. Here is part of the code that would
make the text in the body black, and get rid of any background color for best
printing results:

And here is its effect:

![image description](https://publiclab.org/i/38403.png "Annotazione_2020-03-10_124251.png") ![image description](https://publiclab.org/i/38416.png "Annotazione_2020-03-10_203106.png")

# Improve hiding strategy for unnecessary layout elements

By hiding some
elements, it is possible to provide users with a better way to print and to
keep anything unnecessary from the hard copy. The
current print.css stylesheet removes and collapses some of the redundant
content with display: none. However, unnecessary elements like the navigation
content in the footer and the embedded chatroom form still appear in the hard
copy. ![image description](/i/38422.png "Annotazione_2020-03-10_204249.png")

Also, the
code segments appear to be scattered across the file. I intend to improve code
readability by rearranging them in an orderly manner.

# Page break avoidance strategy

It is much easier for the users to
organize their printouts if key information is grouped together and not spread
across multiple pages. Not to mention, printer output should ideally use as few pages as possible with regards to the environmental impact inherent to
paper-based outputting of information.

The three CSS
attributes page-break-before, page-break-after, and page-break-inside allow you
to decide exactly where a print page will be broken. Currently only the page-break-after
attribute is being employed; it is to set a break after every thematic change
of content (defined by the
tag). However, this results in terrible
blank space management, as less than one third of the physical page usually ends
up containing data from the site.![image description](/i/38440.png "a.png")

The newer and fully
browser-supported CSS3 properties break-before, break-inside break-after allow
better control on how page, column, or region breaks behave before and after an
element. They do so by allowing more values to be set than the old always/avoid.
Examples of the new values include auto and avoid page; breaks are permitted
but not forced in the former, while the latter avoids entire pages break
whenever possible. The value avoid-page is preferable whenever page breaks are
to be specified, since it allows the user to use as little paper as possible
while still avoiding page breaks within grouped data such as tables, images or
unordered lists:

![image description](/i/38423.png "Annotazione_2020-03-10_204402.png")

A possible implementation for the CSS stylesheet would be the following:

![image description](/i/38424.png "Annotazione_2020-03-10_204436.png")

In order to prevent
cutoff text, I am going to make use of the **windows** and \*\*orphans\*\* properties; the
former and the latter specify the minimum number of blocks to be shown on top
and at the bottom of the page respectively.

The
box-decoration-break property controls element borders across pages. When a quotes
section block has an inner page break it will be possible to either split its
layout or clone it, by replicating the margin, padding, and border.

![image description](/i/38425.png "Annotazione_2020-03-10_204541.png")

I would like to
stress the point that page break control is little more than a suggestion to
the browser. There's no guarantee a break will be forced or avoided because the
layout is restricted to the confines of the paper.

# Hypertextual link handling

As links cannot be
clicked on a piece of paper, I am going to display their behavior through the
visualization of link targets. I am also going to refine hypertextual
link display by highlighting the links with colors and rightfully placed
brackets so that they get
noticed. I'll implement this functionality as follows:

![image description](/i/38426.png "Annotazione_2020-03-10_204623.png")

# Part 2 - Implementation of page-specific view

# Creation of "Optimized for printing" button and Page-Specific Preview functionality

In order to ameliorate user's
experience on printing [PublicLab.org](http://PublicLab.org) content, I am going to create an
"Optimized for printing" button. When clicked, it will create a "printer
friendly" version of the document.

Firstly, I am going to add the
print-friendly button in between the tags right under the main
header:

![image description](/i/38427.png "Annotazione_2020-03-10_204832.png")

Right after that, I am going to
add the HTML link to the "Optimized for printing" stylesheet:

![image description](/i/38428.png "Annotazione_2020-03-10_204844.png")

I discuss the
details of "Optimized for printing" stylesheet implementation in the next
paragraph. This stylesheet is responsible for the production
of the ready-to-print files with only text, titles, and important images the button
refers to.

Moreover, I am going
to implement a print-optimized, page-specific preview in JavaScript. The
resulting page will automatically switch to using the "Optimized for printing"
stylesheet usage, while showing a welcoming message to the user. I have
accumulated relevant JavaScript experience in previous autonomous and
course-work related projects. Here is a part of the code which I've already
written and which I am going to adjust in order to satisfy this project's
page-specific needs. The fact that a separate
print-preview.js file contains all information about the Specific-Page
Print-Preview safeguards the functionality of the latter. ![image description](https://publiclab.org/i/38407.png "Annotazione_2020-03-09_162312.png")

Lastly, I'll
incorporate the JavaScript into the HTML tag with this link:

![image description](/i/38429.png "Annotazione_2020-03-10_204857.png")

The functionality of
both the default and the print-oriented CSS stylesheets is ensured to be
protected from inadvertent breakage by future contributors (during changes to
the wiki and layout), thanks to the fact that CSS Screen and Print styles are located in entirely separate files and only  the latter will be applied in addition to the screen
styling when printed. Alternatively, this project's print styles can be
included within the existing style.css file by using @media rules; this might
be useful for overriding background related screen stylings, as seen in the
"Background replacement with border highlining" and "Color inversion for dark
image backgrounds through CSS filters" paragraphs.

# Hiding Unnecessary Elements - Advanced

Many areas of a website can't be
printed in the Optimized for Printing as they either don't provide any relevant
information or clutter the resulting page taking the attention away from the
main body. The goal is to achieve seamless reading
experience on paper by printing out only
the most important content - it being the main text and the headers, not the
exact web page. Thus, I am going to hide all areas that are not relevant, like the
navigations, the pagination, the sidebar, the tags, and the categories, the
comments, the share button, and other redundant elements.

![image description](/i/38430.png "Annotazione_2020-03-10_205109.png")

Users will not want to print decorative and non-essential images and
backgrounds. Therefore, I have considered a default where all images are hidden
unless they have a `print` class:

![image description](/i/38431.png "Annotazione_2020-03-10_205122.png")

# Hiding Videos, Comment Boxes and other iframes

Displaying forms like embedded
chatrooms and comment boxes or integrated videos on a printed piece of paper servers
no purpose and only wastes space, especially in the Optimized for Printing view
where any idle space should be dedicated for displaying the main content.
However, when setting the iframes on display: none, blank gaps remain. I'll
employ the following code to hide iframes and remove the consequential
whitespace, as well as videos entirely.

![image description](/i/38433.png "Annotazione_2020-03-10_205136.png")

# Color inversion for dark image backgrounds through CSS filters

Printed images and graphs should ideally use dark colors on a light
background to have better ink economy. In order to allow people to include darker graphs and
images in their contributions without having to worry about ink usage, I'll employ CSS filters
for handling the color adjustments and eventual inversion of darker bitmaps.
Example code:

![image description](/i/38434.png "Annotazione_2020-03-10_205159.png")

![image description](/i/38435.png "Annotazione_2020-03-10_205944.png")

# Background replacement with border highlighting

The
backgrounds of quote sections and call-out boxes are often denoted by slightly darker
grey scale shades. It is however possible to both save ink - by avoiding
unnecessary shading - and highlight the text within said sections by replacing
their backgrounds with just the borders:![image description](/i/38740.png "w.png")

![image description](https://publiclab.org/i/38411.png "Annotazione_2020-03-10_193121.png")

# Addition of supplementary print-exclusive messages

Printed
wiki articles or other [PublicLab.org](http://PublicLab.org)'s posts may require additional information
which would not be necessary on-screen. Such
print-exclusive messages could be used to display copyright, URL, timestamps or
other extra information, that I will collect by asking the community directly. Since CSS content property can be employed to append
text to ::before and ::after pseudo-elements, I'll be able to integrate said
information on every printed page.

![image description](/i/38437.png "Annotazione_2020-03-10_210318.png")

For
page-specific information, I am going to implement the use of classes such as
print to ensure its content will be hidden on screen:

![image description](/i/38438.png "Annotazione_2020-03-10_210500.png")

The corresponding CSS will look something like:

![image description](/i/38741.png "c.png")

# Supplementary options for binder storage

If pages are intended to be stored in a binder, it is necessary to modify the main body's positioning for every other page; this can be achieved by manipulating margin width differently for odd and even numbered pages. I am going to define such alternative margins by targeting specific pages through CSS Paged media (@page).

![image description](/i/38439.png "Annotazione_2020-03-10_210531.png")

# Needs

While working on the above-mentioned tasks, I will
constantly submit my progress to community members for feedback. Suggestions
from the mentors at least once a week will be highly appreciated and would be
enough to complete the project successfully.

# Teamwork experience

_Describe teams you've worked with before, whether
open or closed source, and in what capacity you participated. Cite examples of
how you were self-motivated and self-sufficient._

I've won the Industry 4.0 Innovation HI40 Award while competing as
Project Manager and group coordinator. My team an I developed a fully
functional Flooding Alert System in less than 6 hours, complete with remote water
and humidity sensor management and a responsive mobile application in React Native
for alert display. I have also led a
cross-functional 2-person team focused on modernizing Ansaldo STS' Intranet front-end
using JavaScript, Ruby on Rails, HTML5 and CSS3 styling. I had been given this
opportunity after being chosen out of 260 participants nationwide for this
2-month professional development program for high-achieving student talent in
tech, based on leadership potential and academic success. After organizing the
workload so to finish ahead of schedule, my team and I carried out translations
of both software documentation and production directives. Under my guidance we
have been awarded "Best Presentation" by the CEO Andy Barr out of 50 teams for
the most exhaustive display of archived results.

# Relevant experience and First time contribution

I'm currently a
second-year BSc Computer Science 4.0 GPA student at the University of Genova
(UNIGE), Italy. I am also a member of the IANUA-ISSUGE Excellence Academic
Program (admission requires a perfect GPA score). In addition to the above, I
also have 4 autonomous JavaScript, HTML5, CSS3, React, Node.js, Ruby on Rails, GraphQL,
Express.Js and Angular frontend projects on my GitHub account.

Further skills
include good working knowledge of C++, C (with GnuPlot), Python, SQL, Linux/Unix
Scripting, OCaml, Java and Git Version Control.

This will be my first non-trivial contribution both to [PublicLab.org](http://PublicLab.org "http://publiclab.org/") and to open
source; I'm currently working on this issue: [https://github.com/publiclab/plots2/issues/7613](https://github.com/publiclab/plots2/issues/7613); [https://github.com/publiclab/plots2/pulls/Tlazypanda](https://github.com/publiclab/plots2/pulls/Tlazypanda).

# Passion

_What
about our projects, and Public Lab, interests you? What are you passionate
about? Open science, environmental justice?_

I envisioned my Flooding Alert System project after my native city had been
subjected to two catastrophic floods in less than 5 years. Excess runoff from rain could
not be soaked by the ground as building speculation had paved most of
the city's land. Damages amounted to millions of euros, and most people didn't
manage to save the belongings that they had stored in basements and ground-level
store warehouses as they didn't initially know that waste-mud was filtering through cracks in uneven pavements. After learning about
[PublicLab.org](http://PublicLab.org)'s mission to provide open-source solutions for solving environmental
issues, I have been inspired to join the community to help extend the reaching of
open science and environment-related research notes. I aspire to apply the
coding knowledge I gained from both the coursework and personal projects to positively
affect people's lives through making [PublicLab.org](http://PublicLab.org)'s free content more accessible
on paper.

# Audience

_Whom do you want your work to help? We especially
appreciate proposals which make technologies and techniques more welcoming and
friendly to those who've often been excluded._

Amelioration of user's printing experience shall provide users with disabilities whom either find it
difficult to use a screen or cannot be exposed to the blue light generated from
monitors for prolonged time with access to [PublicLab.org](http://PublicLab.org)'s content. The adjustments regarding the font size
shall also enhance readability for visually impaired users. Paper-based dissemination of knowledge permits both the accessing to information in areas with poor connectivity and
the utilization of said data in dangerous or dirty conditions where internet
devices might not be permitted. Plus, this optimization would also help the environment
as less pages will be needed for printing, while simultaneously consuming less
ink for the same amount of paper-outputted data. Finally, in case of binder storage, optimized margin management shall be helpful in office settings.

# Commitment

I am fully aware of
the importance of the commitment required to complete this project. I am ready
to devote myself to its completion within the deadlines by committing to spend 6
to 8 hours a day or more, if necessary.