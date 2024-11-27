---
nid: 18913
title: SoC proposal: MapKnitter Image Management & User Experience
path: public/static/notes/govindjeevan7/03-31-2019/soc-proposal-mapknitter-user-experience.md
uid: 577314
tagnames: software,gsoc,soc,response:13975,first-time-poster,rgsoc-2019,gsoc-2019,soc-2019,gsoc-19,soc-2019-proposals,lat:13.010838,lon:74.79431
---

# SoC proposal: MapKnitter Image Management & User Experience

# About me

Govind Jeevan

Affiliation National Institute of Technology Karnataka, Surathkal

Location: Cochin, India

I am a third-year computer science student from Kerala, India.  
Github: [https://github.com/govindjeevan](https://github.com/govindjeevan "https://github.com/govindjeevan")

**Project Description**

### Abstract/summary:

Improving the user experience of MapKnitter through UX Research directed UI improvements and an Image Management/Version Control system.

### Problem

1. **No Image Updation**  
Currently, the only way to update the aerial view of a location is to delete the existing image and upload the latest one. Else the two images will overlap.
2. **No Past View**  
There is no mechanism to see how a map region looked at a point of time in the past even though images of that time might have been uploaded but was replaced later.
3. **An Intimidating UI**  
The UI of map knitter is not very first-timer friendly and falls behind in aesthetics.

I consider solving these issues these integral to improving the user experience of MapKnitter.

### Timeline

I have divided the Project into two parallel flows. Image Management and UI.

**FLOW I: MapKnitter Image Management**

1. Feature to replace an image with a newer one with a version number. (May 27-May 31)
2. Allow multiple versions of an image to coexist ( Jun 1- Jun 10)
3. Feature to select a time point and display images on the map corresponding to that time point. ( Jun 11 - Jun 18 )
4. Loading images on zooming to a region. (Markers replaced by Images on zooming) ( Jun 19 - Jun 24 )
5. Exporting a collection of images by multi-select ( June 28 - July 4 )
6. Ability to set the version of an image to be shown by default ( Latest version not default ) ( July 5 - July 10 )
7. Ability to create sets from groups of images. ( July 10-July 16 )
8. Rearranging image order from the sidebar ( July 16 - July 22 )

**FLOW II: MapKnitter UI**

I consider the UX stage as part of the community bonding period. Getting to know the community and their needs and ambitions is what UX research stands for.

Understanding the actual users needs is vital for any software development project. Rather than focusing soleley on the developer commnity's suggestions in terms of issues, I intend to reach out to the user-base of mapknitter directly for their suggestions, feedback and further requirements of the application.

_**UX Stage:**_

1. User Research ( May 6 - 20 )  
Conducting user research on all stakeholders of the Mapknitter through polls and forms. (in-site if possible). Issues raised on GitHub aren't all-encompassing.
2. Analysis of User Responses ( May 20-26 )  
Understanding the needs of the user from the responses and analyzing requirements.
3. Brainstorm ( May 27- Jun 14 )  
Brainstorming for all possible solutions and alternatives (disregarding feasibility) to solve the identified needs from UX Research.
4. Must Should Could Document ( Jun 14-24 )  
A document classifying the brainstormed solutions into what "must be done", "should be done" and "could be done" in that hierarchy, after considering the feasibility and value of the solutions.

_**UI Design Stage:**_

1. Creating wireframes and prototypes of proposed design changes based on user research. ( Jun 28 - July 8 )
2. Consider and incorporate feedback on prototypes. ( July 8 - 12 )

_**UI Development, Testing, Feedback Stage:**_  
Testing using Javascript end-to-end testing framework: Cypress

1. Begin implementing all Must Requirement (July 8 - 22)
2. Continuous frontend testing, feedback and incorporation of suggestions
3. Begin implementing Should Requirements (July 26 - Aug 04 )
4. Continuous frontend testing, feedback and incorporation of suggestions
5. Begin implementing could requirements ( Aug 05 - 19 )
6. Continuous frontend testing, feedback and incorporation of suggestions.

UI Prototypes   

Subject to change after user research

  
**MapKnitter Home Screen**

![image description](/i/31499.jpg "1.jpg")  

  
Needs  

Resources I need are available on the internet in the form of documentation and tutorials. I will need active guidance from mentors regarding implementation details specific to Mapknitter.

### First-time contribution

I've been trying to read/understand the MapKnitter codebase along with the other repositories on public lab.

- Comments, to show overall community involvement (like helping others):  
[https://github.com/publiclab/mapknitter/issues/428#issuecomment-475838265](https://github.com/publiclab/mapknitter/issues/428#issuecomment-475838265)  
[https://github.com/publiclab/mapknitter/issues/428#issuecomment-475838265](https://github.com/publiclab/mapknitter/issues/428#issuecomment-475838265)  
[https://github.com/publiclab/mapknitter/issues/406#issuecomment-474708108](https://github.com/publiclab/mapknitter/issues/406#issuecomment-474708108)  
[https://github.com/publiclab/mapknitter/issues/406#issuecomment-474708108](https://github.com/publiclab/mapknitter/issues/406#issuecomment-474708108)  
[https://github.com/publiclab/mapknitter/issues/406#issuecomment474708108](https://github.com/publiclab/mapknitter/issues/406#issuecomment-474708108)  
[https://github.com/publiclab/mapknitter/issues/407#issuecomment-474986342](https://github.com/publiclab/mapknitter/issues/407#issuecomment-474986342)
- Issues opened by me:  
[https://github.com/publiclab/mapknitter/issues/449](https://github.com/publiclab/mapknitter/issues/449)
- PRs sent:  
[https://github.com/publiclab/mapknitter/pull/455](https://github.com/publiclab/mapknitter/pull/455)

[https://github.com/publiclab/mapknitter/pull/423](https://github.com/publiclab/mapknitter/pull/423)

- Merged PRs:  
[https://github.com/publiclab/mapknitter/pull/423](https://github.com/publiclab/mapknitter/pull/423)  
[https://github.com/publiclab/mapknitter/pull/398](https://github.com/publiclab/mapknitter/pull/398)

### Experience

I've learned software development through various means, including an academic course on software engineering. I have experience developing in MEAN as well as Ruby On Rails.

I have experience in UX Research and Analysis, having conducted brainstorming sessions, and prepared stakeholder maps, must-could-should documents, convergence matrices etc.

[https://blog.iris.nitk.ac.in/enriching-user-enriching-experience/](https://blog.iris.nitk.ac.in/enriching-user-enriching-experience/)

I'm used to wire-framing and preparing mockups for development using tools such as Photoshop. Being a graphic designer and video editor for various media teams, I have an eye for aesthetics in anything I design or develop.

My thorough experience in Ruby On Rails comes from developing and releasing a wide range of modules and functionalities for the University Administration Portal (MIS system) of my institute.

![](https://lh6.googleusercontent.com/ZdBKEoXy25PIB_p3uac6huXZTeF5V0bEfRLDzUubQ1q0qfZH_t2n92hQWmKKWKI_pQYHEBawzCivoR893QIBmHnegHg6jjf0zvptSVrpShyErkfg3P0yt88bEjPn6hLiR3E-dK0G)

The repository is hosted on a private institute gitlab server and my contributions can be seen from the above chart generated by gitlab. The system known as IRIS is similar to Public Labs in that it uses a Ruby On Rails core and a Js-Jquery frontend implementation. The similarity allowed me to quickly comprehend the codebase of MapKntter etc.

Similar to MapKnitter which is a leaflet based application, I have experience working on a very small scale Google Maps API based project built with the aim of aiding freshmen to get used to the locations within the campus. This was developed as a project under ACM NITK Student Chapter, of which I am a member.

[http://nitk.acm.org/trails](http://nitk.acm.org/trails)

A static website I developed for the off-road racing team of my institute that I am part of. [http://baja.nitk.ac.in/](http://baja.nitk.ac.in/)

A static website I developed for the TEDx team of my institute: [http://www.tedxnitksurathkal.in/](http://www.tedxnitksurathkal.in/)

### Teamwork

I have served as the UI/UX manager of the student team that designs, develops and maintains the University Management Portal of my Institute. It is a closed-source software which features modules such as attendance, course registration, course feedback, integration with Moodle, fee payment, on-campus internship/job portal/ hostel allotment, faculty appraisal, hostel complaints etc. An overview of this: [https://iris.nitk.ac.in/hrms/pages/about](https://iris.nitk.ac.in/hrms/pages/about)

I have been selected to lead this team (Team Lead) of 30+ designers, developers and policy teams for the next academic year and have held and worked in similar positions of responsibility in the past.

### Passion

Being completely new to the world of opensource contributions and GSoC, with a clean slate regarding which organization to apply for, there is a strong motivation behind why I chose to click on Public Labs alone. I understand what it does. I understand what it stands for.

With an aim to understand the pollution levels of a river near my home, I collected water samples from various locations in the course of the river starting from it's origin to the point before it merges with the sea.

As I had no experience in testing the water for CoD, BoD, Dissolved Solids etc, I had to depend on a laboratory to do the same for me. I understand why Public Lab does what it does as it would have enabled me to test and analyze even more such rivers back then.

[https://drive.google.com/file/d/0B1K\_PuYeHfSEYVoxVGxKUTBwalU/view?usp=sharing](https://drive.google.com/file/d/0B1K_PuYeHfSEYVoxVGxKUTBwalU/view?usp=sharing "https://drive.google.com/file/d/0B1K_PuYeHfSEYVoxVGxKUTBwalU/view?usp=sharing")

I have been a volunteer for AIESEC Bangalore in their Earth5R project which aimed to understand and resolve pollution and environmental problems in the metropolitan city of Bangalore, parallelly holding sessions in schools of underprivileged localities about sustainable practises that they can adopt easily and about reducing the use of plastic substances.

As an organization working for environmental justice, with a codebase based on Ruby On Rails, and working in the spirit of open source, I believe I made the perfect decision in choosing Public Lab as the organization to apply for.

### Audience

Public Lab is a platform that has the potential to reach out to millions of people with a similar aim. But not all of them can be assumed to be tech-savvy or to have used interfaces or a software sense that we take for granted.

With the UX and UI improvements I hope to make in the mapknitter interface, I hope to create a positive change in this respect.

### Commitment

Yes, I understand the commitment required to work on this project and willing to spend a substantial amount of time in my summer contributing to publiclab.