---
title: Reflecting on the Depth Sensor Build
tagnames: gulf-coast, water, neworleans, flood, stormwater, gulfcoast, with:mimibell, depth
author: stevie
path: /notes/stevie/06-06-2016/reflecting-on-the-depth-sensor-build.md
nid: 13170
uid: 422561

---

# Reflecting on the Depth Sensor Build

by [stevie](../profile/stevie) June 06, 2016 14:31

June 06, 2016 14:31 | Tags: [gulf-coast](../tag/gulf-coast), [water](../tag/water), [neworleans](../tag/neworleans), [flood](../tag/flood), [stormwater](../tag/stormwater), [gulfcoast](../tag/gulfcoast), [with:mimibell](../tag/with:mimibell), [depth](../tag/depth)

May 16-19, 2016, Propeller, Public Lab, IDIYA, and Water Works hosted an event to invite community members to participate in a flood sensor build challenge. The premise was that flood sensing could help the City of New Orleans track where street flooding is occurring throughout the city, which will help public safety, City services, and the community stay safe and make informed decisions during rainstorms. (For background information on this issue see the [Depth/Flood sensing in New Orleans wiki](https://publiclab.org/wiki/depth-flood-sensing-in-new-orleans))



###Day One:
The first day of the event included a panel with two representatives from the city, an engineer from Public Works, and the founder of I See Change. Some of the questions discussed included: 

- Why is it hard to track street flooding?
- What would be helpful to do your job?
- What information would you want a flood sensor to collect? 
- Other issues that complicate this?
- How do you deal with crowd sourcing data?
- Benefits and drawbacks to having sensors vs. crowdsourcing data?

People who came to this event also explored the questions: 

- What happens in your neighborhood when it rains?
- How are you impacted by street flooding? 
- Where are you seen street flooding this year?


[![20160516_191955.jpg](//i.publiclab.org/system/images/photos/000/016/514/large/20160516_191955.jpg)](//i.publiclab.org/system/images/photos/000/016/514/original/20160516_191955.jpg)


####Takeaways: 
The panelists discussed challenges of shared governance, validating data, and the limitations of social media reports. The City perspective included wanting to gather as much data as possible at the lowest cost, noting examples of other cities that used sensors to collect everything from weather data to whether gunshots were fired. Of those who attended many people discussed issues around how they were personally affected by flooding, these included: transportation issues and the safety around it, flooded cars, hidden potholes, clogged street drains, sewage overflows, property damage, and related stress. Issues they noted through the city were: traffic problems, EMS delays, commercial flooding, and closing schools. 



##The Build Days

### Build Day One

[![20160517_210925.jpg](//i.publiclab.org/system/images/photos/000/016/513/large/20160517_210925.jpg)](//i.publiclab.org/system/images/photos/000/016/513/original/20160517_210925.jpg)

In the second day of the event participants gathered at the IDIYA maker space to build out a version of a depth sensor that uses an [adafruit ultrasonic rangefinder](https://www.adafruit.com/products/981?q=ultrasonic%20rangefinder&). 

IDIYA started the workshop out with an introduction to arduino, over the next two days, makers from IDIYA finished this project and brought a version to the last day reflection. The tool that came out of this is probably able to measure changes in water depth up to a millimeter in accuracy, however, its power needs and price was slightly more than the tool explored in the second day.

####The Conversations

[![20160518_184720.jpg](//i.publiclab.org/system/images/photos/000/016/515/large/20160518_184720.jpg)](//i.publiclab.org/system/images/photos/000/016/515/original/20160518_184720.jpg)
 
There were several questions around :: What were the real issues behind the problem? Here are some major issues that were identified:

- Emergency alerts for people driving 
   - “is the underpass flooded?”
- City in EMS 
   -“can the emergency vehicles go this way?”
- Local neighborhood catchment basin issues 
   - Is my catchment basin working? 
- Storm drain problems 
   - Why is my side of the street flooded and yours not? 
- Model verification (city’s understanding of where the problems are)
   - Does the model the city uses work?
- Can we use the model to make predictions about flooding. 
   - Putting evidence behind your claims - Useing data to support your claim.
      - For individuals: What evidence do I need to convince the city I have a local problem, get the to fix it?
      - For the city: Can I trigger FEMA funding based on standing water levels 
- Understanding local system for local management 
   - Is there a pattern or simple fix, like perhaps we need a local campaign to clean storm drains?

###Build Day Two

The second build day we met at IDIYA again and built out the [Public Lab Coqui](https://publiclab.org/wiki/coqui) version. Unlike day one, this version is based off a breadboard design with basic circuitry and uses a capacitor to detect the depth of water. 


####The Conversations

[![2016-06-06_09.13.13.jpg](//i.publiclab.org/system/images/photos/000/016/512/large/2016-06-06_09.13.13.jpg)](//i.publiclab.org/system/images/photos/000/016/512/original/2016-06-06_09.13.13.jpg)

_Rami Diaz's design for a sensor that could indicate the presence of water_ 


If you break down the questions that were asked in build day one, it becomes clear that we’re looking for different tool options to answer different questions. For example: 

**Emergency: can I use the underpass?** </br> 
What sensor: simple local switch  </br> 
What data communications modality: local display, blinking sign  </br> 
Power: low power, only turns on when switch is flipped  </br> 
Data Access: no need  </br> 
Format: Flooded man image  </br> 
Where to put them? Only in underpasses  </br> 

**Model verification, is the model the city uses correct?**  </br> 
What sensor: higher precision sensor  </br> 
What data communications modality: local data storage </br> 
Power: higher power </br> 
Data Access: city </br> 
Format: calibrated water data </br> 
Where to put them? Cross section, triangulate them  </br> 

**EMS, where can the emergency vehicles go?**  </br> 
What sensor: simple, but robust sensor  </br> 
What data communications modality: real time communication  </br> 
Power: higher level  </br> 
Data Access: only EMS or city  </br> 
Format: custom  </br> 
Where to put them? Based on the model </br> 


###Last day, event wrap up

[![20160519_183907.jpg](//i.publiclab.org/system/images/photos/000/016/510/large/20160519_183907.jpg)](//i.publiclab.org/system/images/photos/000/016/510/original/20160519_183907.jpg)


In our wrap up event we hosted a roundtable discussion. For those who attended the build days, it became clear that we had not picked one simple question that we wanted a tool to help us advocate for. However, as one participant put it, “building clarified where there were still open questions.” So for the last day we posed the question:: “What is the **one question** you want a flood sensor to answer?” Below is what we heard:
 
- In which type of storm event (5,10,15 yr) does this street flood and to what depth?
- How high above sea level is my street
- Where are the catch basins that are non-functional/blocked/need repair
- Where is the surface water across the city right now?
- Measure depth of water- flooding at canal depth or groundwater or rain garden.
- Is water at or above the curb?
- Depth of flooding, what is the effect of cleaning my catch basin on the amount of flooding by my house?
- Focus on simplest useful system that generates easy to interpret data. 
- First if there is water- then linking characteristic examples for example impact cars? - - Above 6 inches? At a certain level?
- Where are the choke points in our drainage network
- I want to compare multiple sensors in one neighborhood
- Which areas are dealing with the largest volumes of water
- I want people/neighborhoods tho need the most help to get the money resources for flooding, this needs to be backed up by data
- What is the groundwater level at this location? Needs to be time stamped for weather tracking
- What is the extent of flooding, to verify model and to indicate problem areas
- Cheap network of many sensors deployed across large area
- Is my personal property in danger?
- Where is the flooding so bad that the street is impassible for a pedestrian
- Is it flooding too much to drive?
- Which pollutants or chemicals are present in the water
- Can I drive safely down a street?
- How water in one part of the city affect other parts of the city. 


###Major takeaways:: 

Over the course of the four days, a lot happened. It was exciting to see interest from so many stakeholders coming to the table on the issue. One thing that was noticeable was that: of the people who came on the first day and spoke on the panel about the issue, only one came to the build days where we dove deeper into the questions and how to address them. Several underlying issues emerged such as:

- what questions are important?
- to who are the questions important to?
- who is responsible for creating the tools?
- who is responsible for solving the problems?

From a Public Lab point of view, participants who define the problems statement should also be the ones who help to work towards the answer. They know the issue best, are vested in the outcome and can further articulate the necessities and nuances of solving the problem as we work through tool development ideas.  As we progressed into the event from the first day, different flood sensing questions came up, and each could potentially have a tool array that fit the use the best. 

Participants who came to the event had different needs, interests and expectations in what everyone:

- brought with them to the event
- thought would be at the event
- had for a background coming in
- needed to learn to participate
- wanted to do at the event, and
- thought would come out of the event.

Some expectations people had included: 

- To learn about flooding issue
- Make a sensor that previously existed with clear plans
- Think about what could be like to make a sensor that addressed a specific issue
- Participating in a “Make event style”
- Pitch a depth sensor model to the city
- Include people on the question and issue 

While everyone got something out of the event, having a broad needs, interests and expectations made it challenging. 


###Notes on organizing the event:: 

Some things went really well, some things could have gone better, but that’s characteristic of any event! Some of the challenges we had in organizing the event were:

####Overarching:: 

- Funding:: through so many people were interested in the issue and the idea, it was challenging to fundraise for the event, and we did it on a shoestring. 
- Leave enough time in prep to spend half of your planning time on getting the word out about the event. A number of our project partners dropped off and organizing it was challenging, this left us short out outreach about it. 
- Clearly define what each day will look for your participants and partners.

####Reflections: were we to do this again...:

Before the event: 

- Ensure that we have people with all backgrounds and interests
- Plan to host the event over the course of a month, not a week. . OR potentially consider a day-long Saturday event, so that we have the same participants throughout. 
- Clearly articulate the nature of the event in advertising with the desired outcomes and expectations we seek to fulfill.
- Articulate that those who set the “expectations” of the event must be active in the entire event process

During the event:

- Define the problem statement and questions with participants.
- Find a way to catch people up as they come in as to:
   - where we are in the process, 
   - what has happened and 
   - where we’re hoping to go.  
- As we are in different places to question a design, find a way for newcomers to participate to participate in a meaningful way that allows for new ideas without derailing the process underway 
