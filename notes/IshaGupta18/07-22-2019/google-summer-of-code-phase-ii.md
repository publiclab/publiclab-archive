---
title: "Google Summer of Code: Phase II"

tagnames: 'gsoc, soc, gsoc-2019, soc-2019, soc-2019-eval'
author: IshaGupta18
path: /notes/IshaGupta18/07-22-2019/google-summer-of-code-phase-ii.md
nid: 20248
uid: 568043

---

# Google Summer of Code: Phase II

by [IshaGupta18](../../../profile/IshaGupta18) | July 22, 2019 14:06

July 22, 2019 14:06 | Tags: [gsoc](../tag/gsoc), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [soc-2019-eval](../tag/soc-2019-eval)

----

###   
![](https://cdn-images-1.medium.com/max/1000/0*dTjRZQgGmdndrHiS)

So phase two of GSoC is what I call the integration phase. In phase 1, I completed the project to its standalone level, which means, it was perfectly up and running on its own, with a Heroku demo published as well [https://simple-data-grapher.herokuapp.com](https://simple-data-grapher.herokuapp.com). I also did some more refactoring and bug fixing, to get things in shape a little [https://github.com/publiclab/simple-data-grapher/pull/61](https://github.com/publiclab/simple-data-grapher/pull/61).  
Then I started with an attempt to implement an export option to Google Sheet. [https://github.com/publiclab/simple-data-grapher/issues/64](https://github.com/publiclab/simple-data-grapher/issues/64)  
This was a big struggle and unfortunately, it went down the drain. I researched a lot on how to implement the Sheets API in Node.js and how to set up credentials, but after all the efforts and trials and error, I found out that it is indeed very difficult to implement, because it's not feasible to store credentials in the browser. Here's the PR of what I did [https://github.com/publiclab/simple-data-grapher/pull/63](https://github.com/publiclab/simple-data-grapher/pull/63).

Then I decided that it's time to start integrating the library with plots, ie the main Public Lab site, so the first step, I published my library as an npm module, so that it can be installed in plots2\.[https://npmjs.com/package/simple-data-grapher](https://npmjs.com/package/simple-data-grapher)

After this, my focus shifted towards plots2\. I regularly attended my open code calls and took advice from my fellow students and mentors on the best way to do this integration. After much exploring and researching, going through Leaflet Distortable Image [https://github.com/publiclab/Leaflet.DistortableImage](https://github.com/publiclab/Leaflet.DistortableImage) and Public Lab editor [https://github.com/publiclab/PublicLab.Editor](https://github.com/publiclab/PublicLab.Editor), I started my work on the integration. Putting together everything, an entire MVC structure, setting up the routes, writing controller actions, creating new tables and views, took me a lot of time, and I had to twerk up the original library in some ways so that it can be used in Public Lab. There were a lot of discussions that were held at [https://github.com/publiclab/simple-data-grapher/issues/60](https://github.com/publiclab/simple-data-grapher/issues/60) before I could come up with a huge pull request for it   
[https://github.com/publiclab/plots2/pull/5993](https://github.com/publiclab/plots2/pull/5993).  
I created a feature where the user could provide some details, like a file title and description for the data they have uploaded, which can be saved along with the file, if the user wishes to.  
In this integration, the user could now plot charts from previously uploaded files in Public Lab, which promotes reusability and faster processing.  
I also created a page where the user can see all the files they uploaded before, along with their information, and the ability to download and delete them.  
This took most of my time, and I discussed the possible changes that should be made in this, to make it a perfect fit.  
Along with this, I was in constant discussion with Jonathan Doe from CODAP Consortium, with whom I discussed the possible integration of the CODAP export option with this library. Its a really great tool to view CSV data and analyze it, and it can also export it as a CSV file directly to your Google Drive, which was a pretty great advantage, as I was trying to do that too. So we held video calls and regularly exchanges emails, to work up a solution that would fit in with the library, and finally, after much research and trying, testing and debugging, we could come up with a method to do that, and I finally finished that work and put it in a PR [https://github.com/publiclab/simple-data-grapher/pull/66](https://github.com/publiclab/simple-data-grapher/pull/66).  
I was also working on another feature, which is supposed to come in use after the integration is completed, giving the user an ability to Publish a Graph as a Research Note. This took me a load of time to understand and I felt like a total detective looking around for code and clues and fitting the pieces in a big puzzle.   
[https://github.com/publiclab/simple-data-grapher/issues/65](https://github.com/publiclab/simple-data-grapher/issues/65)  
The mentors guided me to understand the connection with PL editor and what can be possibly done to achieve this complex feature.  
I also studied about UI testing in Puppeteer and Mocha and read some blogs for the same [https://medium.com/@tariqul.islam.rony/automated-ui-ux-testing-with-puppeteer-mocha-and-chai-800cfb028ab9](https://medium.com/@tariqul.islam.rony/automated-ui-ux-testing-with-puppeteer-mocha-and-chai-800cfb028ab9), [https://medium.com/@ankit\_m/ui-testing-with-puppeteer-and-mocha-part-1-getting-started-b141b2f9e21](https://medium.com/@ankit_m/ui-testing-with-puppeteer-and-mocha-part-1-getting-started-b141b2f9e21) and also went through the code in Leaflet Distortable Image [https://github.com/publiclab/Leaflet.DistortableImage/pull/314/files#diff-abbcc60040fe903cd1d594be5ff6019eR69](https://github.com/publiclab/Leaflet.DistortableImage/pull/314/files#diff-abbcc60040fe903cd1d594be5ff6019eR69).  
Apart from this, I looked at several designs for other designs and had on-call discussions with Lekhika and Gautami, students working on UI this summer, who also gave me some great insight into what can be done to improve the UI.  
Some designs: [https://rawgraphs.io/](https://rawgraphs.io/), [https://plot.ly/create/#/](https://plot.ly/create/#/), [https://www.chartgo.com/](https://www.chartgo.com/), [https://www.visme.co/graph-maker/](https://www.visme.co/graph-maker/).  
I created a couple of FTOs to welcome newcomers into the community.

This month, I was particularly busy with some college work for a summer course I am enrolled in, for competitive programming, which took some time as well. I also had to work on a mini project for college, which also kept me occupied for the past couple of days.

This phase was very exciting as well, although it involved more of research and communication, as compared to writing code, which was a different experience!   
Looking forward to working on more features and seeing the work go live, and really excited to carry on this amazing journey with my fellows and mentors!