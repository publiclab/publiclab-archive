---
title: Tips for adding images to your Notes and Wiki pages
tagnames: 
author: rjstatic-admin
path: /wiki/how-add-images-to-your-notes-and-wiki-pages.md
nid: 658
uid: 391

---

# Tips for adding images to your Notes and Wiki pages

by [rjstatic](../profile/rjstatic), [rjstatic-authenticated](../profile/rjstatic-authenticated)

December 22, 2011 19:29 | Tags: 

----

<style type='text/css'> #content-area h2 { background: #EEE; padding: 10px; border-color: #CCC; border-width: 0 0 0 15px; border-style: solid; margin: 30px 0px 0px 0px;}
</style>

## Insert pictures from Flickr
Find the Flickr image you want to insert, click on the "Share" button, select "Grab the HTML/BBCode", select the "Medium 500" option, and copy the text in the text box.
<a href="https://www.flickr.com/photos/publiclaboratory/6556096695/" title="Embed code from Flickr by publiclaboratory, on Flickr"><img class='frame' src="https://farm8.staticflickr.com/7174/6556096695_0542f7b0bc.jpg" width="500" height="446" alt="Embed code from Flickr"></a>

Then paste that text into the Body of your post.
<img class='frame' width=500 src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 5.11.42 PM.png">

## Insert pictures from image files attached to the Wiki/Note/Tool page you are working on. 

### Step 1 - Click "Choose File" to select your file and then click "Attach" 
You'll find the "Choose File" button in "File Attachments" below the place where you type out the Body of your post.
<img class="frame" src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 2.35.01 PM.png" width=500>

### Step 2 - Copy the URL of the image you just uploaded
<img class="frame" src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 5.11.42 PM.png" width=500>

### Step 3 - Add that image URL to an IMG tag in your post
<img class="frame"  src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 2.44.54 PM.png" width=500>


## Formatting your image
### Step 1 - Correct Width - Make sure the maximum width of your images are 500 pixels wide

Here is an image that is so wide that it's running into the right side bar. Eek!
<img class="frame"  src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 2.51.31 PM.png" width=500>

### Step 2 - Add class class class!
Add a class to the image tags to format them. 

- class='floatright'
The "floatright" class will push the image to the right and let text flow around it.  Here's the floatright class being used in an Anchor tag (a link) that wraps our image.

<img class="frame"  src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 3.36.28 PM.png" width=500>
The result.
<img class="frame"  src="https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 3.33.30 PM.png" width=500>

- class='frame'
The frame class will add margin and two subtle borders to your image.  Below is a picture of the code to do this while it is itself using the frame class.

<img class='frame' src='https://publiclab.org/sites/default/files/Screen Shot 2011-12-22 at 4.46.11 PM.png' width=500>