---
title: "Outreachy proposal: Design a new full-screen user interface for Infragram.org"\ntagnames: 'software, outreachy, first-time-poster, outreachy-2022, outreachy-summer-2022'
author: shubhangi_student_eee20
path: /notes/shubhangi_student_eee20/04-14-2022/outreachy-proposal-design-a-new-full-screen-user-interface-for-infragram-org.md
nid: 30376
uid: 793820

---

![](https://publiclab.org/public/system/images/photos/000/045/748/original/INFRAGRAM%283%29.png)

# Outreachy proposal: Design a new full-screen user interface for Infragram.org

by [shubhangi_student_eee20](../profile/shubhangi_student_eee20) | April 14, 2022 12:31

April 14, 2022 12:31 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [outreachy-2022](../tag/outreachy-2022), [outreachy-summer-2022](../tag/outreachy-summer-2022)

----

## **About me**

I'm Shubhangi, an Electrical Engineering undergraduate at IIT (BHU), Varanasi.

Here are my details:

**Full name-** Shubhangi Choudhary

**University-** Indian Institute of Technology (BHU), Varanasi

**Course Major-** Electrical Engineering

**Year of Graduation-** 2024

**GitHub-** [https://github.com/shubhangi013](https://github.com/shubhangi013)

**LinkedIn-** [https://www.linkedin.com/in/shubhangi-choudhary-32a347205/](https://www.linkedin.com/in/shubhangi-choudhary-32a347205/)

**Contact No-** +91-7895870753

**Slack handle-** Shubhangi

**Primary email -** [shubhangi.student.eee20@itbhu.ac.in](mailto:shubhangi.student.eee20@itbhu.ac.in)

**Secondary email-** [choudharyshubhangi13@gmail.com](mailto:choudharyshubhangi13@gmail.com)

**Location-** IIT (BHU), Varanasi, U.P., India

I am an avid developer and love playing CTFs. I started out with development on May '21 with the basics. Later, over the months, I explored various technologies. Via a course I undertook, I practiced the MERN stack and by being a part of the website teams of various college bodies and hackathons, I got my hand dirty on other technologies, like Django, and Vue.js, Angular, etc.

From writing code that runs applications to the manipulation of code, I've come a long way with programming. I've been contributing to open-source projects since June'21\. Along the way, which was full of coding, learning, and contributing, I contributed to a diverse range of projects, including security applications and end-user applications.

I am currently a part of the Club of Programmers, IIT (BHU), where I got selected because of the quality of code I wrote during CSoC (COPS Summer of Code).

---------

## **Project description**

The Infragram project brings together a range of different efforts to make Do-It-Yourself plant health comparisons possible with infrared photography. [Infragram.org](http://Infragram.org) enables people with Infragram-modified cameras to upload photos for analysis and conversion using techniques like NDVI (used in satellite imaging analysis). It also allows for live streaming from a modified webcam. This project will overhaul the UI of Infragram to be full-screen and create space for new features like multiple resolutions of video, dragging in a recorded video instead of a still image for conversion, and pop up panels with Q&A, tips, tutorials, and more, so that they can feature more helpful guidance text.

---------

### **Abstract/summary (<20 words):**

To create and implement a new and improved full-screen UI for Infragram with cross-browser drag and drop.

---------

### **Problem**

To make Infragram reach a wider audience, we need to aim for it to be both user-friendly as well as developer-friendly. Both of these revolve around how well the Interface of the application is. As a user, I felt like the generic blue color palette looks very bland and unpleasing to the eyes. There are other issues as well. For example, the contents of the footer are not center-aligned, whereas the rest of the application is center-aligned. There is uneven padding and the fonts used are not user-friendly.

![](https://lh4.googleusercontent.com/LlgOf4PwB51Mpgi-_zOg1RmHi1Q3DBOka3T5UDIq1fs72et-MhEkYHB5aznG10stHWqErsdGX0xy5gxlhxprRyF81WVtIZS4-e7VvXg0zeJPT6KV-snpvgI0dMn5djDoFzSRZS7J)

![](https://lh5.googleusercontent.com/5NAMhOkxl9euYU3kzTTKirD6pi1ZcDH8FLHSg-htkOgxWuy_4bNOv1P3tbkDIQgYPkfrXoUxKVkb4XrUNO58DTAqRp3bmOpD5uZElhWz4HGDr6OuAjVnNd-jLTF5e3FN1OUz-Lsv)

The application is currently not responsive and this is a major problem as can be seen :![](https://lh6.googleusercontent.com/Ckht8yDmiLmsy61Th5cQ_Y3sw-CFkzaq6es7TW7-vrJZneIr9BOpaVFm2t78D7WKRE6ypoiCZUHXLG4ckVJNys5pjjmp7AEmODf2hcMxviTxu3WbEYVYQb6gbGNhfHbd5w1-vmV9)

![](https://lh6.googleusercontent.com/mTCRCgj9EV4-oJmVZXRKBkgaTN5QX0R4F7mJCM-Vq1j5ZFnJ1FY6hCqg_TcmUFmaUto1mdN-a4EW0yU0uyconq8Wn-FTqpBLBSwQ0cyAuwB1IKl0q14T7XXKoxFpO95yBmZdJAPx)

---------

### **Mockup/solution**

With my approach, I've tackled all the 3 major changes suggested in the idealist ([https://www.outreachy.org/outreachy-may-2022-internship-round/communities/public-lab/#design-a-new-full-screen-user-interface-for-infrag](https://www.outreachy.org/outreachy-may-2022-internship-round/communities/public-lab/#design-a-new-full-screen-user-interface-for-infrag "https://www.outreachy.org/outreachy-may-2022-internship-round/communities/public-lab/#design-a-new-full-screen-user-interface-for-infrag") ):

- I have designed the entire UI, keeping in mind Bootstrap v4\. I have added a welcome modal that guides the user.
- I have shifted the QnA into the help bubble that would be ever-javpresent on every window of the application
- I have added cross-browser drag-and-drop instead of just selecting
an image. It can be noted that I've worked with cross-browser
compatibility of the drag and drop feature earlier in my project as well
([https://file-transfer-app.vercel.app/](https://file-transfer-app.vercel.app/) )

An implementation of which can be found here:

( this is just the code snippet, you can find the entire file and other relevant files here: https://github.com/shubhangi013/MERN-frontend/blob/main/src/components/DropZoneComponent.tsx)

```
return (
    <div {...getrootprops()}="" classname="box p-6 w-full">
        <input {...getinputprops()}="">
        <div classname="flex flex-col items-center justify-center border-2 dark:border-white border-purple-900  rounded-xl">
          <img src="/images/folder.png" alt="folder" classname="image" draggable="false">
{
  isDragReject? <p>Sorry unaccepted file format</p>
  :
  &lt;&gt;
      <p classname="dark:text-gray-300 text-gray-800">DRAG AND DROP HERE!</p>
        <p classname="mt-2 text-base dark:text-gray-300 text-gray-800">Drop you files except PDFs :(!</p>
  

}
        
        </div>
      </div>
)<br>
```

I used the npm package https://www.npmjs.com/package/react-dropzone . This is supported by the browsers mentioned here : https://browserslist.dev/?q=ZGVmYXVsdHM%3D. We can discuss with the community and decide which library or framework we'll be using for the implementation of cross-browser drag and drop. 

A good reference could be : https://qawithexperts.com/article/javascript/best-javascript-drag-and-drop-library/229

  
![](https://lh6.googleusercontent.com/ZAhewQYQBcWsOPzDFbm0hWyFcSJxoCw2q1gjEFSq5__YtAEnSZ0r60vtgq8dg7vYUs6MuGz7qmIPTqYqIjzlFEK2u94dHz5SmbTSxlu-8zll-4owo654-XqU85wLgVE6FC0k7GuR)

![](https://lh6.googleusercontent.com/Muneo8bcRqrwfDx0YDhfVH6WTApz7AhhYLF70VNX-7KhXwhrQdc6CHrpD0fgeXf6qcuamK3OGHp_T6Ub1MH5DKbefkYYsdjzyVGqmf-qorTAqqALMm9quwquWBY4DUq_mIDWFNFv)

![](https://lh6.googleusercontent.com/t_KMCkOi4b-phar3pxuguW_qsB_WlS92NXD_vlmR1I3vSYiU3ooDdwDQM1PgdM7F1MUDC_y2M1RXLOZnw0QYNCW5CMTBZ9ZmdyU-fN0AA2kIsbmBXrVjcpkS-Q9Nsilej5Q9UbF7)![image description](/i/45966.png "INFRAGRAM6(1).png")

**  
**

**How does my design make Infragram accessible to all?**

Well I know the importance of accessibility myself and read more about it from here: [https://www.adjust.com/blog/how-to-make-an-app-accessible/](https://www.adjust.com/blog/how-to-make-an-app-accessible/)
Let us look at how my design is accessible by breaking the concept into parts:

- Learning: The welcome modal has the purpose of welcoming the users and making the application less intimidating. By being descriptive with the instructions, we can make the application 'intellectually' accessible to more people. An extended goal could be to translate the modal into different languages so that the application becomes more inclusive
- Sight: The colors are not straining to the eyes and the fonts are impactful. I can implement text-to-speech for the welcome modal if needed. It can be noted that my design has visual cues that are subtle and very visible.
- Hearing: Since currently, there are no audio cues in the application, the application is already accessible in this sense.
- Mobility: The application has subtle triggers to open a certain function. The mobile port is touch-friendly. The drag and drop is an example of less mobility with maximum output

---------

### **Timeline/milestones**

---------

**Week 1**

_May 30- Jun 4_

- Discuss and get a review on the pending pull requests
- Write a blog and post it
- Discuss how communication would be carried throughout the internship period
- Update the Bootstrap version to 4 by using an online converter like ([http://upgrade-bootstrap.bootply.com/](http://upgrade-bootstrap.bootply.com/) ) or entirely create a new UI by starting with v4

**Week 2**

_Jun 5- Jun 11_

- Get feedback on and discuss the mockup prepared
- Discuss use cases for the updated mockup
- Create a repository for the new UI and start setting up the environment

**Week-3**

_July 12- Jun18_

- Set up the HTML and CSS for the mockup
- Add basic elements like the footer and sidebars
- Create FTOs wherever possible

**Week-4**

_Jun 19- Jun 25_

- Discuss the text content of the welcome modal and other helping modals
- Set up other elements like the help bubble and the corresponding pop up
- Add Javascript wherever needed
- Create FTOs wherever possible

**Week-5**

_Jun 26- Jul 2_

- Create final non-functioning mockup using minimal JavaScript and mostly HTML and CSS
- Document the UI changes to make hooking with JavaScript easier

**Week-6**

_Jul 3-Jul 9_

- Implement final mockup and start hooking it with JavaScript by collaborating with possible GSoC accepted student
- Start with src and hook ui first
- Discuss with the community and fix bugs
- Create FTOs for the bug fixing wherever possible

**Week-7**

_Jul 10-Jul 16_

- Hook io and processors and complete these functionalities
- Allow cross-browser drag and drop
- Fix bugs and create FTOs when needed

**Week-8**

_Jul 17- Jul 23_

- Clean the code and use a uniform casing system to name files
- Hook the rest of the UI with the JS
- Fix bugs in the cross-browser drag and drop

**Week-9**

_Jul 24- Jul 30_

- Buffer week for hooking JS and completing the mockup
- Make the mockup functional completely

**Week-10**

_Jul 31- Aug 6_

- Collaborate with the GSoC intern to discuss final functional UI

**Week-11**

_Aug 7- Aug 13_

- design a new colorize popup modal window to describe each colormap
- Implement thumbnails

**Week-12 & Week-13**

_Aug 14- Aug 23_

- Complete all pending tasks and get pending Pull Requests merged

---------

### Needs

I will need :

- People: a diverse group of people who can review my suggestions and help me improve on them

---------

### **Contributions**

I did go through the welcome page of Public Lab and have made my first contribution. My first merged Pull Request in Public Lab is #10775\.

In fact, I have contributed to both the documentation and the UI code of Infragram. I have the following Pull Requests Merged/approved in the Infragram repository:

| Pull Request<br> | Status<br> | Description<br> |
|------------------|------------|-----------------|
| [https://github.com/publiclab/infragram/pull/266](https://github.com/publiclab/infragram/pull/266) | Merged<br> | <p><span>Aligned the images in the Readme to the</span></p><p><span>center and added corresponding alt text</span></p> |
| [https://github.com/publiclab/infragram/pull/268](https://github.com/publiclab/infragram/pull/268) | Merged     | <p><span>remove the “thumbnail generation” code</span></p><p><span>and corresponding stale code</span></p> |
| [https://github.com/publiclab/infragram/pull/293](https://github.com/publiclab/infragram/pull/293) | Merged     | removed the unnecessary and vague logs |
| [https://github.com/publiclab/infragram/pull/326](https://github.com/publiclab/infragram/pull/326) | Merged     | as per this [discussion](https://github.com/publiclab/infragram/issues/318#issuecomment-1089250561 "https://github.com/publiclab/infragram/issues/318#issuecomment-1089250561"), added the FTO template |
| [https://github.com/publiclab/infragram/pull/368](https://github.com/publiclab/infragram/pull/368) | Approved   | corrected the text in the quickstart modal |

I have also already made a few UI changes which are on hold:

| Pull Request<br> | Description |
|------------------|-------------|
| <p><a href="https://github.com/publiclab/infragram/pull/202"><span></span></a><a href="https://github.com/publiclab/infragram/pull/202" title="">https://github.com/publiclab/infragram/pull/202</a></p> | <p><span>Added the QnA in a panel in order to make</span></p><p><span>it more mobile-friendly</span></p> |
| [https://github.com/publiclab/infragram/pull/209](https://github.com/publiclab/infragram/pull/209) <br> | <p><span>redesigned footer without any additional</span></p><p><span>dependencies</span></p> |
| <br>             | <br>        |

I have also opened issues while contributing to Infragram:

| Issue<br> | Status<br> |
|-----------|------------|
| [https://github.com/publiclab/infragram/issues/288](https://github.com/publiclab/infragram/issues/288) | Open<br>   |
| [https://github.com/publiclab/infragram/issues/318](https://github.com/publiclab/infragram/issues/318)<br> | Open<br>   |
| [https://github.com/publiclab/infragram/issues/329](https://github.com/publiclab/infragram/issues/329) | Open<br>   |
| [https://github.com/publiclab/infragram/issues/208](https://github.com/publiclab/infragram/issues/208) | Open<br>   |
| [https://github.com/publiclab/infragram/issues/265](https://github.com/publiclab/infragram/issues/265) | Closed<br> |
| [https://github.com/publiclab/infragram/issues/289](https://github.com/publiclab/infragram/issues/289) | Closed<br> |

I've also been actively involved in the community and have helped contributors who reached out to me to get them started. For example:

- [https://github.com/publiclab/infragram/pull/369](https://github.com/publiclab/infragram/pull/369)
- I have also opened a FTO issue to help new contributors get started: [https://github.com/publiclab/infragram/issues/391](https://github.com/publiclab/infragram/issues/391)

Apart from these, I have contributed to security applications as well.

---------

### **Experience**

I started out in competitive programming wherein I used to code in C++ and C. After that, I got fascinated with CTFs and Machine Learning, for which I had to use Python3\. Eventually, I ended up developing an interest in Software Development. Starting off with basics (HTML, CSS, and JavaScript), I later moved to frameworks and technologies built around Node.js. Following are the frameworks, technologies, and languages I've used, apart from the aforementioned:

1. React
2. MongoDB
3. Express.js
4. Node.js
5. Django
6. Angular
7. TypeScript
8. Next.js
9. Figma

I have worked with CSS libraries and frameworks like Bootstrap and Material UI as well. I have been working with Figma for over a year now and it is my go-to tool for designing and implementing mockups.I have made high-fidelity prototypes using Figma as well.

You can find them here:

- [Novac](https://www.figma.com/file/wJaMG8KqUyT15E3MyNRccj/NOVAC-UI%2FUX)
- [Addicfree](https://bit.ly/3llbnlR)

Here you can find all the projects I've been working on and contributing to:[https://github.com/shubhangi013](https://github.com/shubhangi013)

You can find my resume here: [https://drive.google.com/file/d/1PQTL2D9qzgi9-38fqiyQEZ17h0OX1d9E/view?usp=sharing](https://drive.google.com/file/d/1PQTL2D9qzgi9-38fqiyQEZ17h0OX1d9E/view?usp=sharing)

I am a quick learner and very keen on expanding my horizons to newer technologies. If the project requires a skill I need to learn, I will give my 100% to practicing it.

---------

### **Teamwork**

I have been a part of many project teams and know how to work with different members on software development projects. To name a few:

- Added the very crucial Degree Verification page on the Student Alumni Interaction Cell's website. The page has many visitors and helps the alumni to get their degrees verified. I was motivated to make the website as friendly for the alumni as possible.
- Worked on the front end of COPS Hackalog. A platform for conducting hackathons. While I was in my 1st year, I saw how important hackalog was for the institute. With absolute zero experience in TypeScript, I volunteered to be a part of the team that was migrating code from JavaScript to TypeScript. My pull request got merged and later, I worked with several projects on TypeScript, which I learned by myself.
- With a team of other sophomores, led by the seniors, built the entire frontend of the website of Prastuti (The technical fest of the Department of Electrical Engineering, IIT (BHU), Varanasi) from scratch. It was after 2 years that Prastuti was being organized and we had this motivation to make the website, the face of the fest, as good as possible.
- As a member of the Club of Programmers, IIT (BHU), I've undertaken tutorials as well as workshop sessions for which I, along with my team, had to curate assignments as well. As someone who learned various programming languages and tools by myself, I know what a beginner needs and I utilized this while making assignments for the students.

I have been contributing to various open-source projects which have taught me a lot about teamwork and how to 'code and collaborate' as well as build on the feedback given by the community.

---------

### **Passion**

I have been passionate about open-source projects since the day I started contributing. It's a healthy community that promotes mutual learning and growth. When I came across Public Lab, I was intrigued by the activity on its Gitter. I have never seen such a community that actively helps the contributors and promotes discussion.

I started my contribution to Public Lab by opening issues and Pull Requests on the Infragram repository. Later while tackling an issue assigned to me as a beginner-friendly issue, the mentors were extremely helpful and patient with me, while I made mistakes with indentation, they were the ones to be patient and teach me. The pull request got merged and I decided to give back to this lovely community.

The area I live in is predominantly dependent on agriculture and plant health. While growing up, I've seen struggles as well as happy moments being dependent on crop health. Infragram as a project encompasses plant health and the very prominent 'DIY (Do It Yourself)' strategy. It is built on simple JavaScript and runs complex image manipulation very easily. I am passionate about effective software design, user experience, and giving back to the community. So, Infragram is the one for me. :)

---------

### **Audience**

Plant health plays a vital role in literally everything we do. From breathing to consuming food, it all revolves around how healthy plants around us are.

"Threats to plant health pose challenges to population health, productivity, and prosperity across the globe. " This is an extract from the case studies I read while reading about plant health. One can find these [here](https://onehealthoutlook.biomedcentral.com/articles/10.1186/s42522-021-00038-7).

Most of Asia and Africa depend on staple crops and to make it easier for them to use such an application, it becomes really important to have a user-friendly interface that makes navigation easier. I have used a color palette that is less straining to the eyes and fonts that are impactful. The design overall is really focused to make Infragram a go-to stop for every beginner who wants to take benefit from its applications.

I believe in first becoming the user of an application and then the developer who can improve the user experience. When I used Infragram, I felt like it is an application with a lot of potential that goes unnoticed because of the way it is presented to us. How I have designed the interface is to make it more friendly for the users as well as the developers.

---------

### **Commitment**

I do not have any commitments for the entire summer. I will be dedicating the vacation to contributing to making Infragram a user-friendly application so that it can be utilized to its maximum potential. I have been a part of many college societies and clubs since my first year and managed my love for programming, academics, and club activities pretty decently. Since now I am in much fewer clubs, I will use the time management skills to structure my day such that I will be able to dedicate maximum time to Infragram.