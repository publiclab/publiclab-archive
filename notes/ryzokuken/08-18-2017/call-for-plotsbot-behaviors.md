---
nid: 14768
title: Call for plotsbot behaviors
path: public/static/notes/ryzokuken/08-18-2017/call-for-plotsbot-behaviors.md
uid: 493113
tagnames: google-summer-of-code,plotsbot
---

# Call for plotsbot behaviors

Due to my recent work on the publiclab API, all users can now make comments on the website by making a simple `POST` request. This feature is exciting because it allows us to program plotsbot, our cute little internal chatbot to post comments on the [publiclab.org](http://publiclab.org) website.

This allows us to program the bot to do repetitive tasks on the [publiclab.org](http://publiclab.org) website, freeing the community members who have been hitherto performing these.

I ask the community to propose ideas that can make use of this functionality and make everyone's lives easier inside the comments for this note. I will try my best to implement all of those in plotsbot.

Eg: Make the bot comment a predefined generic support message onto a research note with id `$id` by sending the bot the message - `plotsbot support $id`