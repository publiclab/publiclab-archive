---
title: "GSOC 2019 wrapup "

tagnames: 'google-summer-of-code, summer-of-code, gsoc-19, gsoc-final-eval, gsoc-2019-final-report'
author: vidit
path: /notes/vidit/08-26-2019/gsoc-2019-wrapup.md
nid: 20676
uid: 517093

---

# GSOC 2019 wrapup 

by [vidit](../../../profile/vidit) | August 26, 2019 12:07

August 26, 2019 12:07 | Tags: [google-summer-of-code](../tag/google-summer-of-code), [summer-of-code](../tag/summer-of-code), [gsoc-19](../tag/gsoc-19), [gsoc-final-eval](../tag/gsoc-final-eval), [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

----

## GSoC 2019 (Synchronous Image Placement)

[![](https://user-images.githubusercontent.com/22616017/44048533-39d0a55e-9f4f-11e8-8c50-ccec1ab0f4e4.jpeg)](https://user-images.githubusercontent.com/22616017/44048533-39d0a55e-9f4f-11e8-8c50-ccec1ab0f4e4.jpeg) [![](https://user-images.githubusercontent.com/22616017/44048712-cf4d2468-9f4f-11e8-9cb9-66b5e88463a8.png)](https://user-images.githubusercontent.com/22616017/44048712-cf4d2468-9f4f-11e8-9cb9-66b5e88463a8.png)

- Name: Vidit Chitkara
- Github: [Vidit Chitkara](https://github.com/viditchitkara)
- Organisation: [Public Lab](https://publiclab.org/)

## Aim

To make a synchronous image placement feature (in [https://github.com/publiclab/mapknitter](https://github.com/publiclab/mapknitter "https://github.com/publiclab/mapknitter")) just like google docs. The aim was to make the users collaboratively work on the same map with live changes reflecting on their respective browsers.

  
#### Mentor Support

All my mentors Jeff, Aman, Siddharth were very helpful during the entire summer of code period. In the earlier phases I needed a lot of ideas and brainstorming sessions to get my project going. The mentors were always there when I needed any help. Also, this project would not have been possible without @alaxallves 's help. Not only his rails 5 pr but he also helped me with many bug fixes, new ideas, the foreman gem concept and tons of other things as well!! I enjoyed the team work we did to make this project a success. Still some bits and pieces left in this feature although the deployable part is already merged into development branch which soon be released on unstable and finally on production. Can't wait to see that. 

  
## Project

#### Integration of Action Cable and addition of concurrent\_editing\_channel

My project was dependent on rails 5 or above, so I started building a PR on top of the rails 5 pull request. My first step was to integrate rail's actioncable configuration. Most of the code had to be in a single pull request. Also, created a few channels at the backend (given by actioncable) to handle all the business logic and a few channels at the javascript side to catch and throw events from each browser.

The pr involved the following steps which most probably sums up the entire project:-

- Used rails' action-cable to create a [concurrent\_editing\_channel.rb](https://github.com/publiclab/mapknitter/blob/development/app/channels/concurrent_editing_channel.rb "https://github.com/publiclab/mapknitter/blob/development/app/channels/concurrent_editing_channel.rb") which has all the backend logic regarding the channel's connection with various users and broadcasts the various image related changes on this very channel. A basic action setup cable has also been done with files like cable.js, app/assets/javascripts/channels/concurrent\_editing.js, etc. These are responsible for handling the broadcasts on the browser.
- A few changes in [Map.js](https://github.com/publiclab/mapknitter/blob/main/app/assets/javascripts/mapknitter/Map.js) file to update the map on each user's browser as it receives the updated data.
- Basic connection logic in [connection.rb](https://github.com/publiclab/mapknitter/blob/development/app/channels/application_cable/connection.rb)
- Used the action-cable-testing gem to write tests for actioncable and related features.
- A few test fixture fixes.

Pull Request: [https://github.com/publiclab/mapknitter/pull/805](https://github.com/publiclab/mapknitter/pull/805 "https://github.com/publiclab/mapknitter/pull/805")

  
#### A few add-ons

The above PR didn't cater for addition and deletion of an image. Added that in this pull request.  

Pull Request: [https://github.com/publiclab/mapknitter/pull/957](https://github.com/publiclab/mapknitter/pull/957 "https://github.com/publiclab/mapknitter/pull/957")  

  
#### Testing

[Action Cable testing](https://github.com/palkan/action-cable-testing "https://github.com/palkan/action-cable-testing") gem is an awesome gem which gives us some great features for action cable and channel testing. We incorporated this gem in the mapknitter project and wrote tests for the same.

  
Related files:-

[https://github.com/publiclab/mapknitter/blob/development/test/channels/connection\_test.rb](https://github.com/publiclab/mapknitter/blob/development/test/channels/connection_test.rb "https://github.com/publiclab/mapknitter/blob/development/test/channels/connection_test.rb")  

[https://github.com/publiclab/mapknitter/blob/development/test/channels/concurrent\_editing\_channel\_test.rb](https://github.com/publiclab/mapknitter/blob/development/test/channels/concurrent_editing_channel_test.rb "https://github.com/publiclab/mapknitter/blob/development/test/channels/concurrent_editing_channel_test.rb")  

  
  
#### A working prototype of the product

[![gsoc-gif-1](https://user-images.githubusercontent.com/22616017/63625728-19761b80-c61e-11e9-8f8c-375de708c984.gif)](https://user-images.githubusercontent.com/22616017/63625728-19761b80-c61e-11e9-8f8c-375de708c984.gif)[![gsoc-gif-2](https://user-images.githubusercontent.com/22616017/63625833-7a9def00-c61e-11e9-8fa8-400bf88c9358.gif)](https://user-images.githubusercontent.com/22616017/63625833-7a9def00-c61e-11e9-8fa8-400bf88c9358.gif)

---------

##   

## Parts still to be worked:-

Although the part already merged into development branch is deployable but still we need to give user permissions on map like when to turn the live-editing on and so on. Secondly, we need to show the last edit is done by which user (we'll probably do that with the image revisions). 

  
Work going on in:

[https://github.com/publiclab/mapknitter/pull/937](https://github.com/publiclab/mapknitter/pull/937 "https://github.com/publiclab/mapknitter/pull/937")  

  
## Documentation and support:-

The most important thing I felt while coding this project was the documentation, since, a lot of additional code was added to the codebase so to explain the action cable flow (a bit complex) with the help of comments and a readme. We can work to improve the language in that readme. 

  
[https://github.com/publiclab/mapknitter/pull/805/files#diff-d702dff9032a745e74cd9e06283e997e](https://github.com/publiclab/mapknitter/pull/805/files#diff-d702dff9032a745e74cd9e06283e997e)

  
  
## Mentors

- Jeffrey Warren
- Aman jain
- Sidharth