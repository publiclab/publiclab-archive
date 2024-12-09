---
title: Outreachy Proposal: Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service.
tagnames: software, outreachy, first-time-poster, zoom:6, outreachy-2022, outreachy-winter-2022, lat:9.730714, lon:8.195493
author: danbadannatacha
path: /notes/danbadannatacha/11-03-2022/outreachy-proposal-improve-mapknitter-lite-for-mapmaking-with-aerial-photos-as-a-lightweight-web-service.md
nid: 36046
uid: 818333

---

![](https://publiclab.org/public/system/images/photos/000/047/277/original/frontend.JPG)

# Outreachy Proposal: Improve MapKnitter Lite for mapmaking with aerial photos as a lightweight web service.

by [danbadannatacha](../profile/danbadannatacha) November 03, 2022 02:24

November 03, 2022 02:24 | Tags: [software](../tag/software), [outreachy](../tag/outreachy), [first-time-poster](../tag/first-time-poster), [zoom:6](../tag/zoom:6), [outreachy-2022](../tag/outreachy-2022), [outreachy-winter-2022](../tag/outreachy-winter-2022), [lat:9.730714](../tag/lat:9.730714), [lon:8.195493](../tag/lon:8.195493)

----

---------

## About me

Name: Natacha E. Danbadan

LinkedIn: [https://www.linkedin.com/in/natacha-danbadan-194656199](https://www.linkedin.com/in/natacha-danbadan-194656199)

Email: [danbadannatacha@gmail.com](mailto:danbadannatacha@gmail.com)

Github: [https://github.com/Natacha-Danbadan](https://github.com/Natacha-Danbadan)

Twitter: @NDanbadan

Location: Delta, Nigeria.

Hi there, my name is Natacha E. Danbadan, I'm a Frontend Developer and I have a background in Industrial Mathematics and I've recently just began my journey into Open Source Contributions. I've been in a series of bootcamps where I've been trained and gained some practical experience and skills on Front-End Development. Overtime i have also used websites like codewars and hackerank to solve problems on Data Structures and Algorithms.

## Project description

The Project aims to adapt parts of [MapKnitter.org](http://MapKnitter.org), a complex and powerful system which allows one to upload aerial images, position/rubbersheet them in a web interface over existing map data, and share via web or composite and export for print. Thus the project would be adapting the JavaScript heart of MapKnitter to run as a lightweight service using Internet Archive image collections. Once a visitor pastes in a URL of an Internet Archive image collection, the visitor can begin making a map with it, saving the maps, and even download in the browser hence making mapknitter available locally/offline.

### Abstract/summary (<20 words):

Mapknitter Lite is a project that enables users to upload aerial images and share via web or composited export for print.

### Problem

- Add a loading spinner on the "Place" buttons so people know it's still loading the image after you press it; check presence of image.width to confirm it's finished loading.

![image description](/i/47280.jpg "pre-load_screen.JPG")

Proposed Solution: screenshot of a loading screen. Design a simple load screen as shown above that runs when the image is still loading and after loading, write codes to detect the presence of an image width hence removing the load screen and displaying the image in fu.

- Load Image thumbnails in sidebar instead of full image (we should be able to tell from the Archive's collection response which are thumbnails) so we don't overload with a huge image collection.

Proposed Solution: So since we there's already an existing function in the archive.html of the leaflet.distortableImage repository that helps us get the response, I believe being able to count the number of images uploaded would help us restructure how we display images. For instance we could say if the number of images gotten from the response is over a certain number, we would resize the images and modify them into thumbnails which would be displayed in the side bar in other to avoid loading a huge image collection.

- When opening a map, detect a key like barn raising from a longer URL like [https://archive.org/details/texas-barnraising](https://archive.org/details/texas-barnraising).

Proposed Solution: Write a function such that regardless of the URL inputed the output would still be a valid key to collection of images uploaded in the Internet archive website. I.E we would still be able to get a valid response from the URL. This could be done using window.location.pathname after which we could then split the result using ("/") to get the text as separate strings. More research would be done on this.

- Save the positions of map using local storage.

Proposed Solution: This would be done by simply using the local storage method using the idea found [here](https://stackoverflow.com/questions/40190814/how-to-save-geolocationdisplayed-with-googlemaps-in-local-storage-and-load-it)

### Timeline/milestones

Being a prospective Intern  with the guidance of my mentors and the community , I would be able to proffer solutions to the above mentioned problems within the timeline as enumerated below .

Week 1 (Dec 5 - Dec 9)

- Get acquainted and familiarize with the codebase.
- Discuss with Mentors and community members and ask questions when in doubt.

Week 2 (Dec 12 - Dec 16)

- Choose and begin work on a simple loading spinner which can easily be identified by the users that an image is still loading.
- Asks questions for clarifications and refactor codes.

Week 3 (Dec 19 - Dec 23)

- Continue work on the Loading Spinner hence ensuring that codes written are able to detect the presence of an image width hence removing the display of the loading spinner.
- Engage in community conversations, provide assistance to those that might need one and network with fellow interns.

Week 4 (Dec 26 - Dec 30)

- Test out the loading spinner and confirm its functionality.
- Discuss with Mentors and implement corrections where necessary.
- Create FTO's.

Week 5 (Jan 2 - Jan 6)

- Start work on loading of Image thumbnails in the sidebar instead of full images.
- Research on better ways to solve this and improve on already existing functions.
- Engage in community activities while lending a helping hand to those in need.

Week 6 (Jan 9 - Jan 13)

- Implement codes to load image thumbnails on the sidebar instead of full images where necessary.
- Create FTO's.

Week 7 (Jan 16 - Jan 20)

- Test out codes and ensure appropriate functionality.
- Discuss and get feedback from mentors and implement any corrections needed.

Week 8 (Jan 23 - Jan 27)

- Share ideas and discuss with Mentors on the best way to go about key detecting from a URL.
- Research on other platforms like Stack overflow.

Week 9 (Jan 30 - Feb 3) 

- Implementation of codes while using the best approach to detect the key from a URL.
- Explore the codebase of the project and get updated on changes made in files in order to be up to date and avoid conflicting issues.

Week 10 (Feb 6 - Feb 10)

- Test out codes to ensure functionality.
- Discuss with Mentors, get feedback and implement needed corrections.
- Create FTO's.

Week 11 (Feb 13 - Feb 17)

- Use local storage to save map positions.
- Test out codes for functionality.
- Engage in community discussions and help out others.

Week 12 (Feb 20 - Feb 24)

- General refactoring of codes, test out changes, ensure all bugs are fixed and work is completed on outlined tasks.
- Create FTO's.

Week 13 (Feb 27 - Mar 3)

- Continue to make contributions, update documentation, PR's networking with interns.
- Create FTO's.

### Needs

Resources I would be needing include;

- Guidance and Mentorship as this would be my first Internship on Open Source Contribution.
- Documentation of [Mapknitter.org](http://Mapknitter.org).
- Sample data of images to test out Implementation ideas.

### First-time contribution

- Comments, to show overall community involvement (like helping others): [https://github.com/search?utf8=✓&q=commenter%3Anatacha-danbadan+org%3Apubliclab&type=Issues](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Ajywarren+org%3Apubliclab&type=Issues)
- Open issues: [https://github.com/publiclab/plots2/issues/created\_by/natacha-danbadan](https://github.com/publiclab/plots2/issues/created_by/jywarren)
- [https://github.com/publiclab/plots2/pull/11539](https://github.com/publiclab/plots2/pull/11539)
- [https://github.com/publiclab/Leaflet.DistortableImage/pull/1234](https://github.com/publiclab/Leaflet.DistortableImage/pull/1234)

---------

### Experience

I've always been intrigued by colors and patterns hence my choice in Frontend development. During my last bootcamp, I worked together with a team consisting of Frontend developers, Designers and Project Managers. I and my teammates worked on a web application called Petroleum monitoring System PMMS which helps business owners and users to monitor their generators from the comfort of their home. It's main functionality is to inform owners of generators on the general state of their generators, how long it has been working, an alert that notifies them when the fuel is too low, when a generator has been knocked out and needs servicing or replacement and other real time info. My role majorly was to create visuals in terms of dashboards to show the various states of the generators. These and other projects of mine can be found here.

![image description](/i/47278.jpg "pmms.JPG")  
![image description](/i/47279.jpg "dashboard.JPG")

[https://helium-pmms.netlify.app/index.html](https://helium-pmms.netlify.app/index.html)

[https://natacha-danbadan.github.io/PMMS-/](https://natacha-danbadan.github.io/PMMS-/)

[https://natacha-danbadan.github.io/Digital-Clock-and-Alarm-/](https://natacha-danbadan.github.io/Digital-Clock-and-Alarm-/)

[https://natacha-danbadan.github.io/One-Page/](https://natacha-danbadan.github.io/One-Page/)

Recently I've been working with Tailwind and API's to solve some Frontend mentor challenges and moving to React soon.

---------

### Teamwork

I've been privileged to work as a team in previous bootcamps and currently the team lead for a group of 5 where we come together once a week to solve challenges, discuss and sharpen our tech skills. I've also worked with a team to carry out a Tech Advocacy Project during the International Day of the Girl Child, to teach and groom them on the Power of Tech. In all of these, there have been cases of fear and doubts but grit has kept me this far!

---------

### Passion

Environmental justice resonates more with me, the fact that I can influence and educate people on how to create low cost solutions for monitoring their environment for instance gathering and recycling of plastic waste, saving energy and all means a lot to me and the fact that you get to take pictures and use in a map makes it all the more fun and I'm grateful for such an opportunity.

### Audience

It would be a privilege to reach out to the common man and essentially everyone out there regardless of their location to adopt this new technology of caring for and fighting for the justice of their environment.

### Commitment

Having an understanding of what this project entails, I'm willing to be committed as I have scheduled my weekly work hours to be 30-40 hours, (8 hours per day) while taking short breaks and exercises in between. This would help improve the lives of people and also improve my skills and help me make more meaningful contributions to Open Source.