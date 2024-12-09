---
title: Authoring Help
tagnames: help, authoring, markdown, authoring-help, parent:website
author: warren
path: /wiki/authoring-help.md
nid: 6897
uid: 1

---

# Authoring Help

by [laurel_mire](../profile/laurel_mire), [bhamster](../profile/bhamster), [liz](../profile/liz), [magnitia](../profile/magnitia), [bsugar](../profile/bsugar), [sawaddeekub48](../profile/sawaddeekub48), [warren](../profile/warren), [Omar2106](../profile/Omar2106), [rudolf455](../profile/rudolf455), [aryanbhasin](../profile/aryanbhasin), [ananyo2012](../profile/ananyo2012), [natalie](../profile/natalie), [mollydanielsson](../profile/mollydanielsson), [jenniferdsara](../profile/jenniferdsara), [cfastie](../profile/cfastie), [bodacea](../profile/bodacea)

April 19, 2013 01:26 | Tags: [help](../tag/help), [authoring](../tag/authoring), [markdown](../tag/markdown), [authoring-help](../tag/authoring-help), [parent:website](../tag/parent:website)

----

### Intro video

<iframe width="560" height="460" src="//www.youtube.com/embed/rsy__zTTh8c" frameborder="0" allowfullscreen></iframe>

Research notes are kind of like a shared blog where you can show the things you've made to other Public Lab folx, ask questions, propose ideas, or post events. 

### Formatting

PublicLab.org uses **Markdown**, a simple way to add formatting to web pages. You can [read about Markdown here](http://daringfireball.net/projects/markdown/), but if you want to keep things simple, you can just write in plain text and things should "just work".

A great list of available Markdown syntax can be found here: http://daringfireball.net/projects/markdown/syntax

_Note: The Daring Fireball section on carriage returns differs slightly from the Public Lab markdown. A single carriage return will suffice to bring the text to a new line.  When you want a space between paragraphs, end the line with two or more spaces and  add two carriage returns._

See formatting you like & want to replicate on your own research note or wiki? Click the edit button  [![edit_button.png](/i/46692)](/i/46692?s=o) at the top right of any wiki page to see its Markdown language & copy for your own use!


To preview the formatting of your content, click "Preview" at the bottom of the editing window.

### PDF embedding

We have a PDF embedding "widget" that can be used in wiki pages and research notes, but it's a little particular in formatting:

For research notes, [you can use this link](/post?n=17362)

For wiki pages, [you can use this link](/wiki/new?n=17362)


### Advanced formatting

#### Hyperlinks

To embed a link in clickable text, type the text in square brackets directly followed by the url in parentheses (or use the link button above):  

`[Click here for PublicLab](http://publiclab.org/home)`  

This is displayed as: 

[Click here for PublicLab](http://publiclab.org/home)

You can also use relative links within the wiki.  Beginning a link with a forward slash connotes that you want to start after publiclab.org.   For example, suppose you were on the following wiki page:

`http://publiclab.org/wiki/relative-links`

and you wanted to link to someone's user profile.  The following:

`[username](/profile/username)`

would be displayed as: [username](/profile/username)


#### LaTeX Math

The LaTeX Math is a syntax that allows you to construct and replicate mathematical formulas in a research note, comment, question, etc.

In order to tell LaTeX what part of the text contains mathematical elements, you need to use _delimiters_.

To write a math formula in the same line as the text, use the delimiter `$...$` or `\(...\)`

To display a formula separately in a new line, use the delimiter `$$...$$`

**Always** enclose your entire equation in `<p> </p>` tags

Here is an example of a simple equation:

`<p> $a=x^2$ </p>`

would produce:

<p> $a=x^2$</p>

To write more complicated formulas, you need to familiarize yourself with the syntax for the math constructs you want to use.

For eg. the syntax for a fraction is: `\frac{numerator}{denominator}`

Hence, writing `$$a=\frac{3}{x}$$ `

would produce  
$$a=\frac{3}{x}$$ 

Here is a link containing most of the syntax supported by LaTeX: http://www.auburn.edu/~tamtiny/Symbols.pdf

Go ahead and explore the syntaxes for various math constructs and symbols, and then write your first LaTeX math equation!


#### Images

To add an image to the post body:  

* Place the cursor where you want an image to be.
* Drag and drop a jpg, png, or gif file to that place.
* Don't move the cursor until the upload completes (or do, but the image will place where the cursor is once the upload completes). 
* Some code like this will appear:  

`[![filename.jpg](made )]`    `(https://i.publiclab.org/system/images/photos/000/001/446/original/filename.jpg)`  

* Change the word "medium" to "large" to display a larger image, or to "thumb" to display a smaller image.  
* Click "Preview" at the bottom to preview the image.

For lead images, simply drag the image into the indicated region. You can also add an image by clicking the 
[![add_image_button.png](/i/46792)](/i/46792?s=o) icon on the bottom toolbar. 

There is an image upload limit of 10mb.


#### Captions

* To add a figure caption under an image, place the image code as above.
* Directly after the last closing parenthesis, enter two line breaks.
* On the next line enter your caption. Start and end your caption with an `_underscore_` if you want to make the text italic.
* Directly after the caption, enter two line breaks (to separate your caption from following text).


#### Lists

Make a bulleted list by starting with *a blank line* and then starting each line with `*, +, or -` followed by a space:

`* Balloons`  
`* Kites`  
`* Poles`  

Will display as:

* Balloons
* Kites
* Poles

For numbered lists, *after a blank line* start each item with any number, a period, and a space:

`1. Balloons`  
`7. Kites`  
`4. Poles`  

Will display as:  

1. Balloons
7. Kites
4. Poles

To override automatic renumbering and list-making, add a backslash `\` between the number and the period:

`1\. Balloons`  
`7\. Kites`  
`4\. Poles`  

Will display as:  

1\. Balloons
7\. Kites
4\. Poles


To indent a line, indent it at least four spaces for each indent

1. Mapping tools
    1. Balloons
    2. Kites
    3. Poles
2. Spectral tools
    1. Spectrometer
    2. Infragram

#### Code
 
To enter short (single line) examples of code (html, markdown, Javascript, etc) so that it will not be interpreted, begin and end the text with backtick quotes (`) (on an American keyboard, that's on the key with the tilde ~; on a British keyboard it's usually in the top left-hand corner of the keyboard, with the |):

`<div></div>`

To enter larger blocks of code, indent each line 4 spaces.

####Buttons and other HTML

See many examples of buttons on [this post](http://publiclab.org/lists) or stick an "edit this wiki page" button in line by simply adding `edit` in square brackets. 

For example, the code below would create this button <a class="btn btn-primary btn-lg" href="https://publiclab.org/subscribe/tag/mine-reclamation">Follow mine reclamation</a>

[![button2.png](/i/46798)](/i/46798?s=o)


#### Tables

To create this: 

[![Screen_Shot_2015-01-04_at_3.40.36_PM.png](https://i.publiclab.org/system/images/photos/000/008/562/medium/Screen_Shot_2015-01-04_at_3.40.36_PM.png)](https://i.publiclab.org/system/images/photos/000/008/562/original/Screen_Shot_2015-01-04_at_3.40.36_PM.png)

...use this type of markdown where cells are separated by pipes and rows are separated by carriage returns: 

`rawRed|rawGreen|rawBlue`

`-------------------------|---------------------|-------------------------`

`944|471|287`

`195|157|142`


#### Power tags

[Power tags](/wiki/power-tags) are an advanced feature which can add extra functions and layout options to your wiki pages (and sometimes research notes). 

#### Foldaways

**Foldaways** allow authors to hide sections of text in a kind of "accordion fold" and provide a link to reveal the hidden content. To use them, enclose your text between `[fold :FOO]` and `[unfold ]` tags, where FOO is the text to use for the reveal link. In this example, remove the spaces after "fold" and "unfold" to make this work -- I inserted it to stop the foldaway from working. For example, once you remove the spaces after "fold" and "unfold":

````
Hello world!

[fold :Show more text]

Hello, hidden world!

[unfold ]

````

will display as:

Hello world!

[fold:Show more text]

Hello, hidden world!

[unfold]

****

#### Alert Flags

* Green alert flag: alert alert-success
* Blue alert flag: alert alert-info
* Red alert flag: alert alert-danger

For example, to display the green alert flag below, use the code:

[![green_alert_2.png](/i/46796)](/i/46796?s=o)

<div class="alert alert-success">Learn more about the new <a href="https://publiclab.org/notes/warren/02-10-2016/announcing-spectral-workbench-2">Spectral Workbench 2</a>.

</div>

To display the red alert bar below, use this code:

[![red_alert.png](/i/46797)](/i/46797?s=o)

<div class="alert alert-danger">testing new red bar in "alert-danger" for Bootstrap v4</div>


Read more about using colored alert bars at: https://getbootstrap.com/docs/4.0/components/alerts/

****

...this is a wiki... help flesh this out! [edit]

