---
title: "Outreachy proposal: Design a new full-screen user interface for Infragram.org"

tagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: stefq1111
path: /notes/stefq1111/04-08-2022/outreachy-proposal.md
nid: 30319
uid: 792049

---

![](https://publiclab.org/public/system/images/photos/000/046/503/original/road-ge0e654c9b_1920.jpg)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [stefq1111](../../../profile/stefq1111) | April 08, 2022 23:43

April 08, 2022 23:43 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

## About Me
I am Stephanie Quintana, a self-taught, career-changing web developer living where I grew up, in rural West Texas. I studied Mathematics at the University of Texas at Austin, investigated Identity Theft for the US government and finally moved on to Event Management before becoming fascinated and enveloped in coding. I am still planning on where I would like to end up, but am thoroughly enjoying exactly where I am right now. 

## Project Description
The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. Infragram.org enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. 

## Abstract/Summary
This project will overhaul the UI of Infragram processing tool to be full-screen and **create space for new features** including pop-up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

Wireframes of proposed changes:

Please note that the following two images do not include/reflect a footer row (which will be placed below the screen UI and house the aforementioned informational panels/modals). The current state of the editor will not allow for new image upload. Please find the most current and updated wireframes and mock-ups of the proposed layout [here](https://github.com/stephaniequintana/Infragram-Bootstrap-Mockup).

![Screen Shot 2022-04-08 at 4 16 21 PM](https://user-images.githubusercontent.com/81270711/162536772-ca68a124-44e4-4dff-89bf-6128fc91d1f8.png) 

it is also worth noting that all buttons have been explicitly marked with function names and it is recommended many of these be changed to descriptive icons/SVGs for space concerns

![Screen Shot 2022-04-08 at 4 23 31 PM](https://user-images.githubusercontent.com/81270711/162536742-f502a5fc-e04e-4627-be79-bab394bbdd2f.png)

Please also see [the Bootstrap mock-up](https://github.com/stephaniequintana/Infragram-Bootstrap-Mockup) of this layout.


## Problem
Additionally, I fear that there is somewhat of a disconnect between our goals and the current site presentation. I would like to focus on areas where the verbiage is technically sophisticated and where the current documentation for new community members is not accessible enough, buried in a web of links often found deep on pages that themselves were linked to. I would like to to improve the organization of these links/information on the home page as well as in the sandbox, perhaps utilizing the "footer" row mentioned above. 

Though it was not discussed in the project description, I am also proposing to include more inviting, less technical, language throughout. For example, the "What is Infragram?" message on the current [homepage](https://infragram.org/) reads:

```
"An "infrablue" image is one in which the "red" channel of the image shows "near-infrared" light
instead of the usual red...by removing the infrared block filter and then adding a filter that 
selectively blocks red light (this is something the Public Lab Infragram kits nicely accomplish)."
```
as opposed to that of [Infragram: the Infrared Photography Project](https://www.kickstarter.com/projects/publiclab/infragram-the-infrared-photography-project/) page:

```
"Infragram is a simple, affordable near-infrared camera...its simplicity of use and 
easy-to-modify open-source hardware & software makes it a useful tool for home gardeners,
hikers, farmers, amateur scientists, teachers, artists, and anyone curious about the secret
lives of plants."
```
I believe the latter to be more informative and inviting.

## Timeline/Milestones and Further Goals
In addition to the project breakdown, I have included tasks specific to the [Outreachy timeline](https://www.outreachy.org/docs/internship/) and have utilized PL's [First-timer-only release workflow](https://publiclab.org/notes/sagarpreet_chadha/10-20-2020/first-timer-only-release-workflow) as a guide.

As the Outreachy intern, I will be working closely with the GSOC intern whose work is more JavaScript heavy and directed towards the tools on the the sandbox page of the site. 

Thus, I focus the beginning stages of the timeline to reflect the implementation of the sandbox UI first, then move on to the update of the Infragram homepage, adherring to the PL [style guide](https://docs.google.com/presentation/d/1-XHlVn3KQxSjS5WzHgc1l1qvFwqUC5f3-7GXugUP9u4/edit#slide=id.g58d9556a0e_1_523) and focusing on a minimal redesign concurrent with the [MapKnitter](https://spectralworkbench.org/) and [Spectral Workbench](https://spectralworkbench.org/) homepages.

With adjustments, I hope to concentrate the final stages (if not second half) of the period to the creation of helpful modals (Welcome, Tips, Result Interpretations, Q&As...) which can be added with the ease of Bootstrap to the (previously created) footer row of the screen UI on the sandbox page. I expect that the research and collaboration necessary to create these modals will require the most time of all the initiatives and will thus dedicate time weekly, from the beginning of the internship, towards this end.

<table>
  <tbody>
    <tr>
      <th>*</th>
      <th align="center">Week 1</th>
      <th align="center">Week 2</th>
    </tr>
    <tr>
      <td align="left">5/30 - 6/10</td>
      <td align="">
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Tips for remote work</li>
          <li>Outreachy Blog, prompt: "Introduce yourself"</li>
          <li>PL Goal Setting
            <ul>
              <li>Sandbox UI Team Discussion</li>
            </ul>
          </li>
          <li>Create Sandbox UI Wireframe
            <ul>
              <li>include space for stretch-goals/future modal additions</li>
              <li>solicit team feedback </li>
              <li>finalize Sandbox UI design</li>
            </ul>
          </li>
          <li>Identify content to be completed at later dates (modal specs)
            <ul>
              <li>Schedule community outreach initiatives for feedback of each individual modal (Help and Tips modals)</li>
            </ul>
          </li>
          <li>Begin Planning/Break-down of implementation and testing needs</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Begin UI Grid implementation
            <ul>
              <li>Create Daily PRs for individual breakdowns (toolbars, individual tool dropdowns, modals w/dummy text...)</li>
            </ul>
          </li>
          <li>Continue Planning/Break-down of implementation and testing needs of drag/drop feature</li>
          <li>Begin Outreachy Blog, prompt: "Everybody struggles"</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="left">6/13 -6/24</td>
      <td>
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Share something you're stuck on</li>
          <li>PL Goal Setting
            <ul>
              <li>Finalize UI Planning and Implementation of Screen & Canvas UI</li>
              <li>Brainstorm Community Outreach ideas and tactics for informational modals</li>
              <li>Begin Homepage Wireframe discussion</li>
            </ul>
          </li>
          <li>Collaborate w/GSOC intern on drag/drop testing</li>
          <li>Continue UI Grid implementation
            <ul>
              <li>Create Daily PRs for individual breakdowns (toolbars, individual tool dropdowns, modals w/dummy text...)</li>
            </ul>
          </li>
          <li>Begin research/design of Welcome modal</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Finalize Sandbox UI Grid implementation
            <ul>
              <li>Create Daily PRs for individual breakdowns (toolbars, individual tool dropdowns, modals w/dummy text...)</li>
            </ul>
          </li>
          <li>Solicit feedback of Welcome modal
            <ul>
              <li>Begin planning/break-up of implementation</li>
            </ul>
          </li>
          <li>Begin Homepage Wireframe</li>
          <li>Begin Outreachy Blog, prompt: " "Think about your audience"</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="left">6/27 - 7/8</td>
      <td>
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Open source conferences (Alums invited!)</li>
          <li>PL Goal Setting
            <ul>
              <li>Finalize Welcome modal testing and implementation plans</li>
              <li>Feedback/discussion on Homepage design plans</li>
            </ul>
          </li>
          <li>Begin testing and implementation of Welcome modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Finalize Homepage design 
            <ul>
              <li>solicit feedback</li>
              <li>Finalize planning/break-up implementation</li>
            </ul>
          </li>
          <li>Begin research/design of Colorize modal</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Begin Community Outreach for Help and Tips modal</li>
          <li>Finalize implementation of Welcome modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Begin implementation of Homepage break-up
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Continue research/design of Colorize modal including planning/break-up</li>
          <li>Begin Outreachy Blog: Mid-point project progress</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="left">7/11 - 7/22</td>
      <td>
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Share one "easy" project goal that took longer than expected</li>
          <li>PL Goal Setting
            <ul>
              <li>Finalize Colorize modal testing and implementation plans</li>
              <li>Continue Homepage Wireframe design plans</li>
            </ul>
          </li>
          <li>Continue implementation of Homepage break-up
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Follow-up Community Outreach for Help and Tips modal</li>
        </ul>
      </td>
      <td>
        <ul>
        <li>Finalize implementation of Homepage break-up
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Begin Implementation of Colorize modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Finalize Community Outreach for Help and Tips modal</li>
          <li>Begin Outreachy Blog, prompt: "Career opportunities"</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="left">7/25 - 8/5</td>
      <td>
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Advancing your career (Alums invited!)</li>
          <li>PL Goal Setting
            <ul>
              <li>Planning and discussion of Help and Tips modals</li>
            </ul>
          </li>
          <li>Finalize Implementation of Colorize modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Begin research/design of Help and Tips modals & integrate community outreach findings</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Continue research/design of Help and Tips modals & integrate community outreach findings</li>
        </ul>
      </td>
    <tr>
      <td align="left">8/8 - 8/19</td>
      <td>
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Networking skills</li>
          <li>PL Goal Setting
            <ul>
              <li>Finalize planning/design of Help and Tips modals</li>
            </ul>
          </li>
          <li>Begin Implementation of Help modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Finalize Implementation of Help modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Begin Implementation of Tips modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Begin Outreachy Final project progress blog post</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td align="left">Final week 8/22 - 8/26</td>
      <td>
        <ul>
          <li>Outreachy/Interns/Mentors Chat - Internship wrap up chat</li>
          <li>Finalize Implementation of Tips modal
            <ul>
              <li>Create Daily PRs for individual breakdowns</li>
            </ul>
          </li>
          <li>Descriptive write-up/follow-up of remaining pieces</li>
          <li>Create FTO issues and Break-me-ups w/listed steps</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<!--## Needs -->

## First Time Contribution
My [initial contribution](https://github.com/publiclab/plots2/pull/10803) was a good introduction into Public Lab's code base and adequately prepared me with the expected workflow and possible issues we may encounter. Unfortunately, there was a failing system test, unrelated to the PR, and the original issue was canceled/closed. The [next PR](https://github.com/publiclab/plots2/pull/10839) I completed unfortunately encountered the same type of system error as the first. It was reopened so that that error could be addressed and Tilda was able to locate the culprit. I am both impressed and grateful that Tilda was able to walk me through the needed changes for the PR to be successfully closed. I was also able to complete the process of [creating a First Time Only issue](https://github.com/publiclab/plots2/issues/10971) for new contributors and am excited about being able to offer more help to this end as the influx of interns continues with the changing seasons.

## Community Involvement
Please feel free to reference the [issues I've commented on](https://github.com/search?o=desc&q=org%3Apubliclab+commenter%3Astephaniequintana&s=&type=Issues) -
in particular, those helping to [welcome newcomers](https://github.com/publiclab/plots2/issues/10840#issuecomment-1079670539), assisting in [plots2 installation](https://github.com/publiclab/plots2/issues/10844) and providing efficient and clear detail with [troubleshooting installation issues](https://github.com/publiclab/plots2/issues/4936#issuecomment-1075936910).
My comment history on [gitter](https://gitter.im/publiclab/publiclab#) can be found by searching my under username, @stephaniequintana.

Working with and getting to know my fellow interns has been a wonderful experience. I've already connected with many new people that I am excited to work with. Specific to the Public Lab community, I also took advantage of the opportunity to participate in a few of the weekly community calls and am inspired by the motivation and dedication to our communities, all of our communities. I aspire to remain a part of this community as well.

## Experience
I began dabbling with code after the Covid shut downs in late 2020. I was a bit in awe of how basic HTML seemed and CSS was fun, demanding creativity and precision. It was JavaScript that absolutely hooked me, though. I am a problem solver, mechanically and mathematically inclined and learning JS brought out a child like excitement in me. I've been determined since to create a career for myself in this field.

I am self-taught, currently working toward completing The Odin Project's Full Stack JavaScript path sidelong the final project of Colt Steele's Web Development Bootcamp. I have also learned and have some experience with Node, Express, MongoDB, basic React, SASS and Bootstrap. I spend my free time reading programming and problem solving books and study/code 8 - 10 hrs/day. I next plan on completing the Ruby on Rails Odin path, learning Typescript and a JS framework. I am greatly motivated to finding an organization I can learn and grow with that aligns with my values and interests. 

Please see a list of my starred repositories, at https://github.com/stephaniequintana?tab=repositories, for more specific, relevant projects. Notably, the Disabled American Veteran's site is a creation made in donation to a community thrift store that benefits our local veterans and showcases my knowledge and implementation of CSS. The Let's Travel site is an example of my work with Bootstrap and multiple others demonstrate my use of JavaScript code.

## Teamwork
I have worn many hats before deciding to change career paths into coding. With each and as far back as I can recall, I have always worked well with others. I have held many positions of leadership and have been an effective and strong team player. Some of my role include:
<ul>
  <li> Coordinator - leading teams upwards of 50, planning and executing flawless set-up, service and break-down of major events in the matter of hours</li>
  <li>Head Trainer - creating and implementing a front-of-the-house training program for a multi-billion dollar corporation</li>
  <li>Team Lead - planning, organizing and promoting weekly/monthly staff activities</li>
  <li>Quality Review Coordinator - worked within team to identify root causes error trends and developed strategic plans for corrective action</li>
</ul>

## Passion
I have alway been interested in helping others. I get true joy out of teaching and motivating and I feel that service and commitment to community is the ultimate human experience. I am drawn to Public Lab because it apparent and evident that these same types of values prosper here.  

I cannot even come close to saying that I am a scientist, but I do understand the magnitude of and the ideas behind many of the visions Public Lab has been able to bring to light and I emphatically applaud the motivation and collaboration that helps make it all possible. I, myself, am passionate about problem solving. Whether it be helping a friend or a stranger, figuring equation amounts or understanding the behavior of code, I get giddy doing it. Being able to couple this with community engagement and fighting injustices is of great interest to me.

## Audience
Of course, this work is going to greatly improve the experience for all current users of the site and I am more than hopeful that our outreach efforts are successful in locating and educating as many communities and individuals facing agricultural issues as possible. As I work to help improve the tool, though, I cannot help but to envision the local farmers and ranchers in my own community that are facing hardships. I anticipate them visiting the site, quickly and effortlessly becoming aware of how the tools can help them and sharing with each other their successes and outcomes.   

## Commitment
I understand that this internship is a commitment not only in time, but also in dedication and effort.
I am available full time, from 8am to 8pm CST, and am able to structure my schedule to fit the goals and needs of the project.




  

  [1]: /i/46100.gif "bootstrap-mockup.gif"