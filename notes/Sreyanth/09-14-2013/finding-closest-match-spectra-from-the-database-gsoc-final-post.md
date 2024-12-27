---
title: "Finding closest match spectra from the database (GSoC) - Final Post!"

tagnames: 'spectrometer, spectralworkbench, spectrometry, gsoc-2013, spectral-matching, closest-match'
author: Sreyanth
path: /notes/Sreyanth/09-14-2013/finding-closest-match-spectra-from-the-database-gsoc-final-post.md
nid: 9330
uid: 96713
cids: 6928,6930,6937
---

![](https://publiclab.org/public/system/images/photos/000/001/560/original/Title_pic.png)

# Finding closest match spectra from the database (GSoC) - Final Post!

by [Sreyanth](/profile/Sreyanth) | September 14, 2013 21:03

September 14, 2013 21:03 | Tags: [spectrometer](/tag/spectrometer), [spectralworkbench](/tag/spectralworkbench), [spectrometry](/tag/spectrometry), [gsoc-2013](/tag/gsoc-2013), [spectral-matching](/tag/spectral-matching), [closest-match](/tag/closest-match)

----

Continuing with my previous research notes [1, 2], which discuss about the whereabouts of my project, this note describes the project implementation highlighting the various features that are provided:

1. [Finding closest match spectra from the database (GSoC) - work done so far](http://publiclab.org/notes/Sreyanth/07-29-2013/finding-closest-match-spectra-from-the-database-gsoc-work-done-so-far)

2. [Find closest match spectra from database - GSoC project](http://publiclab.org/notes/Sreyanth/06-24-2013/find-closest-match-spectra-from-database-gsoc-project)

I would like to let you know that I have successfully completed the project and integrated it into the Spectral Workbench and am eagerly waiting for an official announcement!


##What I wanted to do

**A Scalable Spectral Matching Mechanism**. With this in place, the users will be able to see some results which show up when the system finds some similar spectra in the database. This helps the user explore and learn more about his uploaded spectrum. 

I now introduce my implementation of such a system which I wrote for the Spectral Workbench, with the help of my mentor, Jeffrey Warren, supported by Google's Summer of Code 2013!


##How it works?

You will now see a 'Find Similar' button on all the analyze pages (something like spectralworkbench.org/analyze/spectrum/spectrum_id) of the spectra. 


[![new_on_analyze_page.png](https://i.publiclab.org/system/images/photos/000/001/562/large/new_on_analyze_page.png)](https://i.publiclab.org/system/images/photos/000/001/562/original/new_on_analyze_page.png)


On clicking this, you will be taken to the matching interface (which will be: spectralworkbench.org/match/search/spectrum_id). This interface will be used to interact with the database for finding closest matches.


[![Match_interface.png](https://i.publiclab.org/system/images/photos/000/001/563/large/Match_interface.png)](https://i.publiclab.org/system/images/photos/000/001/563/original/Match_interface.png)


As you will see, there will be some results already, and the graph on the page shows all those matches. You can click on the remove link beside any spectrum on the graph to clear it from the graph. Also, you have a 'Clear plot' button to clear the entire graph, so that you can compare the results as you wish. For that purpose, you can click on the good old 'Compare' button which will be preloaded with the results. If you want to compare with some spectrum which is not listed as a match, you can search for it using the search option and compare it!

Now, we have something called 'fit'. This determines how close the returned matches are to the main spectrum in the question. The lower the fit, the closer is the match.


[![idea.png](https://i.publiclab.org/system/images/photos/000/001/572/large/idea.png)](https://i.publiclab.org/system/images/photos/000/001/572/original/idea.png)


In the above image, the width of the search band is what we are referring to by 'fit'. For more details about the method, please refer to my note [here](http://publiclab.org/notes/Sreyanth/07-29-2013/finding-closest-match-spectra-from-the-database-gsoc-work-done-so-far).

Now, lets see how the 'fit' parameter changes the results.

Consider the matching page for spectrum: [431](https://spectralworkbench.org/match/search/431) as shown below.


[![431_90.png](https://i.publiclab.org/system/images/photos/000/001/564/large/431_90.png)](https://i.publiclab.org/system/images/photos/000/001/564/original/431_90.png)


This page is showing that fit = 90. This has been automatically selected by the system to display a good number of matches. You can always change this and see the results change in the graph. As simple as that. So lets go ahead and see how this changes the results.

I obtain this when I change the fit parameter to 85:


[![431_85.png](https://i.publiclab.org/system/images/photos/000/001/565/large/431_85.png)](https://i.publiclab.org/system/images/photos/000/001/565/original/431_85.png)


See that some matches which were in the previous image aren't seen here! Now lets change the fit to 100 and see how it works.


[![431_100.png](https://i.publiclab.org/system/images/photos/000/001/566/large/431_100.png)](https://i.publiclab.org/system/images/photos/000/001/566/original/431_100.png)


Simple. Isn't it? If you would like to, you can even go ahead an click on "Save as set" button and it will be saved as a new set of spectrums! 


##What can this do? And what it can't?

As described in my previous note [[2](http://publiclab.org/notes/Sreyanth/07-29-2013/finding-closest-match-spectra-from-the-database-gsoc-work-done-so-far)] it searches for the matches in the close vicinity of the spectrum, both above and below it. But to account for the x-shift problem, where the spectrum may be shifted in the +ve or -ve X-direction, i.e., either to left or right of the expected position (this may be mostly due to differences capturing conditions), I have averaged the relative intensity values for every overlapping bins so that the curve gets smoother.

Due to the averaging, and higher fit parameter there will be some false positives reported. Like this one: [Finding Neon](http://publiclab.org/notes/cfastie/09-14-2013/finding-neon) by Chris Fastie. We still need to use some filtering techniques for the matches (something like peak matching/counting etc.,). But without deciding what to do for it, we want to collect details about some other issues with the system and we plan to solve them appropriately.

Also, as [straylight](http://publiclab.org/profile/straylight) pointed out (commented on this post), the matching algorithm only works for the calibrated spectra and only searches for the closest matches among those calibrated ones.

##Anything else?

Yes. I take this section to introduce you to another special feature -- **Live Matching** (which is still in prototype level with much accuracy on the way).

From now, you will see a "Start Live Matching!" button on the [capture](https://spectralworkbench.org/capture) page. Like this one


[![live_match_button.png](https://i.publiclab.org/system/images/photos/000/001/567/medium/live_match_button.png)](https://i.publiclab.org/system/images/photos/000/001/567/original/live_match_button.png)


After clicking on it, you will be shown the closest matches the system is able to for the spectra you are just about to capture. This opens, in my opinion, way to various interesting experiments!

If there are some matches, then something like this will be seen:


[![live_match_found.png](https://i.publiclab.org/system/images/photos/000/001/568/medium/live_match_found.png)](https://i.publiclab.org/system/images/photos/000/001/568/original/live_match_found.png)


If there are no matches, then you will see:


[![live_no_matches.png](https://i.publiclab.org/system/images/photos/000/001/569/medium/live_no_matches.png)](https://i.publiclab.org/system/images/photos/000/001/569/original/live_no_matches.png)


Sorry if you keep on seeing "No matches found" message. This feature will be improved in the days to come. If you feel that this feature is distracting you from your work, you can click on 'Stop' link displayed with a message like "Refreshing in 5 secs (Stop)" and everything will be as it was before!


##What has changed from the previous note?

In the previous note, which can be found [here](http://publiclab.org/notes/Sreyanth/07-29-2013/finding-closest-match-spectra-from-the-database-gsoc-work-done-so-far), I introduced a working prototype of the system and we received a great response and suggestions. I followed those and implemented them accordingly -- including narrowing down the bin size, using all the data points available, making use of overlapping bins etc.

##Final words

Yep! The project has come to an end. **All's well that ends well.** 

I had no idea of what I was about to face when I took up this project. I realized sooner that this is no Image Processing problem (see my note [here](http://publiclab.org/notes/Sreyanth/06-24-2013/find-closest-match-spectra-from-database-gsoc-project)) and was lucky enough to come up with an approach to do this mathematically. Now, I know what a spectrum is. I know what calibration means. And most importantly I contributed a small feature to the scientists, teachers, amateur physicists, students out there who are interested in spectral analysis.

I was and am always excited about this project, but many times was discouraged by my experiments which were failing horribly. Thanks to my mentor, [Jeffrey Warren](http://publiclab.org/profile/warren) who always motivated me to do more and in a correct way. Thanks Jeff. 

A community is what makes opensource so special! And I am very lucky to be backed by some of the most interesting and innovative people. I enjoyed taking suggestions from them. 

Thanks [Dave](http://publiclab.org/profile/stoft), who made things very tough for me in the initial days (as I was unable to understand when he said something like _bin_, _over exposure_), but now, I enjoy exchanging emails with him on a regular basis about my project! His contributions to the project are invaluable. 

Special thanks to [Chris Fastie](http://publiclab.org/profile/cfastie) and Nathan McCorkle for suggesting features and helping me find out various bugs. Thanks to Bob, who offered a helping hand along with Jeff and Dave during my pre-GSoC period to help me structure my proposal. Also special thanks to the Earthquake Bolt Barnstar, [Liz Barry](http://publiclab.org/profile/liz), who was quite active and for mentioning "Sreyanth - Developing killer features for spectral workbench" in a presentation about Public Lab. Thanks to the Dev Manager, Becki Chall who acted promptly by forwarding various details about GSoC deadlines and updates as a GSoC Administrator for Public Lab. Thank you guys for making my first ever GSoC a wonderful experience! 

Also, my sincere apologies for some recent bugs which unintentionally popped up (that have been reported recently) due to my code edits. Sorry for the inconvenience caused.

And, last, but not the least, thanks to **you** who patiently read this lengthy note! Should you have any issues, queries or suggestions, please feel free to contact me at _sreyanth@gmail.com_.

Thanks everyone!

Sreyanth