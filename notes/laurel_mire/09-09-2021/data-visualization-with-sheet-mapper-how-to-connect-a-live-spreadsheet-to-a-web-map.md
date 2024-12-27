---
title: "Data Visualization with Sheet Mapper: How to connect a live spreadsheet to a web map"

tagnames: 'mapping, mapbox, web-mapping, data-visualization, research-curation-fellows, presenting-data, activity:presenting-data, air-quality-data, data-visualization-tool, activity:air-quality-data'
author: laurel_mire
path: /notes/laurel_mire/09-09-2021/data-visualization-with-sheet-mapper-how-to-connect-a-live-spreadsheet-to-a-web-map.md
nid: 27717
uid: 759178

cids: 29238,29243

---

![](https://publiclab.org/public/system/images/photos/000/044/787/original/SheetMappercover.PNG)

# Data Visualization with Sheet Mapper: How to connect a live spreadsheet to a web map

by [laurel_mire](../../../profile/laurel_mire) | September 09, 2021 19:27

September 09, 2021 19:27 | Tags: [mapping](../tag/mapping), [mapbox](../tag/mapbox), [web-mapping](../tag/web-mapping), [data-visualization](../tag/data-visualization), [research-curation-fellows](../tag/research-curation-fellows), [presenting-data](../tag/presenting-data), [activity:presenting-data](../tag/activity:presenting-data), [air-quality-data](../tag/air-quality-data), [data-visualization-tool](../tag/data-visualization-tool), [activity:air-quality-data](../tag/activity:air-quality-data)

----

## Purpose

I recently attended a session of [Greenpeace's Data Activist Co-op](https://www.greenpeace.org/usa/toolkits/data-activist-co-op-sessions/?utm_source=ea&utm_medium=email&utm_campaign=data-coop-reminder&sourceid=1011201&emci=4ba200b0-cd01-ec11-b563-501ac57b8fa7&emdi=6651cf63-2f04-ec11-b563-501ac57b8fa7&ceid=4157627#day-1-%E2%80%94-tuesday) where **Marena Brinkhurs****t** from Mapbox gave a great **technical tutorial of their free Sheet Mapper tool**. Sheet Mapper is a data visualization tool that takes data points in a spreadsheet format and displays them on a web map. Once set up, the map will update as more data is added to the spreadsheet. This is a relatively simple data visualization technique useful for any location-based information such as points of odor complaints, sites for soil testing, locations of community resources, etc.

**These steps will help quickly turn data in a spreadsheet into an interactive map conveying points of interest and their corresponding data.**

The session followed [this set of instructions](https://docs.google.com/document/d/1mTcOnU_90YN4rp8RV7todfDCVvS77edHaXcYFP551DU/edit#)--"[Coop Activity Instructions](https://docs.google.com/document/d/1mTcOnU_90YN4rp8RV7todfDCVvS77edHaXcYFP551DU/edit#)_"_ ---to create an Activist ATLAS to connect people and projects from across the world. (Feel free to add your name, location, expertise, and what you're interested in learning to this "geospatial rolodex" linked in the instructions linked above!) Though I'm paraphrasing for simplicity's sake, check out the full instructions for more info or troubleshooting. **All credit goes to Marena from Mapbox and Greenpeace!**

_Note: You must have latitude and longitude coordinates for each data point. But fear not! Marena also shared a super easy resource for geocoding (finding the latitude and longitude corresponding to a location/address) linked below._

---------

## Open-source tools used

1. [Sheet Mapper](https://www.mapbox.com/impact-tools/sheet-mapper/) from Mapbox
2. [Nominatim](https://nominatim.openstreetmap.org/ui/search.html) (for geocoding)
3. Google Sheets
4. [GitHub](https://github.com/) (for hosting your web map)

---------

## Step 1: Create free accounts for...[](https://account.mapbox.com/auth/signup/?route-to=%22https://account.mapbox.com/%22)

- [Mapbox](https://account.mapbox.com/auth/signup/?route-to=%22https://account.mapbox.com/%22)
- [](https://accounts.google.com/signup/v2/webcreateaccount?service=wise&continue=http%3A%2F%2Fdrive.google.com%2F%3Futm_source%3Den&ltmpl=drive&dsh=S1460230431%3A1624977491663037&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp)[Google Drive](https://accounts.google.com/signup/v2/webcreateaccount?service=wise&continue=http://drive.google.com/?utm_source=en&ltmpl=drive&dsh=S1460230431:1624977491663037&gmb=exp&biz=false&flowName=GlifWebSignIn&flowEntry=SignUp) (so you can make a google sheet)
- [](https://github.com/signup?return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D78a2ba87f071c28e65bb%26redirect_uri%3Dhttps%253A%252F%252Fcircleci.com%252Fauth%252Fgithub%253Freturn-to%253D%25252F%26scope%3Drepo%252Cuser%253Aemail%26state%3DS32Je4ZJF-iaivaZfWcKwf-730OH5v6fLxc1dBktlCsSZEUXN_p_8M0LJWSQEoPOZUoYS2PaRxcY9iyh&source=oauth)[GitHub](https://github.com/signup?return_to=/login/oauth/authorize?client_id=78a2ba87f071c28e65bb&redirect_uri=https%253A%252F%252Fcircleci.com%252Fauth%252Fgithub%253Freturn-to%253D%25252F&scope=repo%252Cuser%253Aemail&state=S32Je4ZJF-iaivaZfWcKwf-730OH5v6fLxc1dBktlCsSZEUXN_p_8M0LJWSQEoPOZUoYS2PaRxcY9iyh&source=oauth)

## Step 2: Get your spreadsheet ready

1. You must have geospatial data (or data tied to a specific location) in a Google Sheet to utilize this tool.
     + Open an Excel or CSV file in Google Sheets by going to File\>Import\>Upload

2. Set sharing settings to 'Anyone with the link can view'
     + Click green 'Share' box in top right corner\>Click 'Change to anyone with the link'



  + Sharing settings should appear like below![](https://lh3.googleusercontent.com/INLs6_1c9xDQnDmTzzgT7FcQeUOhvyKO8NvcgLPvtiqR4OFOlxTZ8RotOeUQSxmlKh4uZm9t0XqOAyLCZDSJ4VobKNjsMQ3KMt5m9Exq9O7pNb1f2l3N9WaoEerZJ05rtuHhplaB=s0)

  + Click 'Done' to save


## Step 3: Get your data ready

1. Make sure your spreadsheet has fields (or columns) for "Latitude" and "Longitude"

     + To make things simpler, avoid spaces in all your column headings


2. Get latitude and longitude for data point locations

     + Marena used [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), an open and free resource for geocoding

     + Search an address in the search bar

     + Click 'Details'\>Copy coordinates listed in "Centre Point" row\>Paste into your spreadsheet in corresponding "Latitude" and "Longitude" columns

     + _Note: I had some trouble with Nominatim---it has no forgiveness for typos and does not return addresses in unincorporated parts of cities. I got around the second issue by only using the street address and county and/or state (omitting city). If anyone has another resource for geocoding please share!_


## Step 4: Create useable link to your spreadsheet

1. Use this link as a template: [https://docs.google.com/spreadsheets/d/{key}/gviz/tq?tqx=out:csv&sheet={sheetname}](https://docs.google.com/spreadsheets/d/%7Bkey%7D/gviz/tq?tqx=out:csv&sheet=%7Bsheetname%7D)
2. Replace {key} with your Google Sheet ID and {sheet\_name} with the name of your sheet. 
 
  **To find your Google Sheet ID:**

  + In Google Sheets, click green 'Share' button in top right corner\>'Copy link' on pop-up box\>Paste link into notepad or scratch document

  + Find Google Sheet ID within link (ID will begin after 'spreadsheets/d/' and end before '/edit')![](https://lh4.googleusercontent.com/hzNxarBE3Q5QYR-0dtfC0jU8BK5f8KgbynE3tZSro4KSkSUKqKYbgVglg2xnpl7GDDuT-iyif0vMUsMkB6dZdXJwZ7SonB6WCKCiecBBsCHRjecVQpxtPTJgW82bEq-EJ4v7zKKP=s0)

  **To find the name of your sheet:**

  + This is the name of the tab on Google Sheets holding your data

  + By default, the name is Sheet1 but can be renamed to anything. (Again, avoid using spaces in sheet names just like column headings.)

**Here is an example of a ready-to-go link to a sample spreadsheet with a sheet named "Data":**

[https://docs.google.com/spreadsheets/d/](https://docs.google.com/spreadsheets/d/%7Bkey%7D/gviz/tq?tqx=out:csv&sheet=%7Bsheetname%7D)[1AapPkLcdYlDekOjGDoK5Ma-8Tnv41Bst04exT3uQ57w](https://docs.google.com/spreadsheets/d/1AapPkLcdYlDekOjGDoK5Ma-8Tnv41Bst04exT3uQ57w/edit?usp=sharing)[/gviz/tq?tqx=out:csv&sheet=Data](https://docs.google.com/spreadsheets/d/%7Bkey%7D/gviz/tq?tqx=out:csv&sheet=%7Bsheetname%7D)

_Note: omit brackets in template above_

## Step 5: Set up your web map code

1. Open any text editor and create a file called "index.html"
     + _Note: For Windows, a common text editor is Notepad++. For Macs, Text Edit. Any program that produces .txt file format will work._
2. Paste Mapbox's [demo code](https://github.com/mapbox/impact-tools/blob/master/spreadsheet-to-map/index.html) available on GitHub into your new "index.html" file
3. Add your Mapbox access token to demo code
     + Open [Mapbox](https://www.mapbox.com/) and sign in
     + Scroll to Access tokens and click "+ Create a token"
     + Name your project and click "Create token"
     + _Note: See [this link](https://labs.mapbox.com/education/impact-tools/sheet-mapper/#add-your-mapbox-access-token "https://labs.mapbox.com/education/impact-tools/sheet-mapper/#add-your-mapbox-access-token") from Mapbox for more info about restricting access to certain URLs for added protection_
     + Back in your text editor, find "YOUR TURN: add your Mapbox token" (around Row 94) and replace the highlighted portion below with your personal access token from Mapbox![](https://lh4.googleusercontent.com/8sG4jUuKb3Q2lNvUIugKxqcmEzJ3OPX2LfwTnbfM0t39EHvYRU45N474LRrfzw7enc1JvocPvQITqcCgCWuJyYzSd1DNCGQbJG0NikFcP4gDnof6C5ZmP6XzS96-gs3HGKRD2ZG1=s0)
4. Add a basemap style
     + Mapbox has several different base maps to choose from or you can design your own. Choose a [Mapbox-designed map style](https://docs.mapbox.com/api/maps/#styles "https://docs.mapbox.com/api/maps/#styles") and copy its Style URL
     + A few lines below your access token, you'll find a place to input your chosen Mapbox Style URL:![](https://lh3.googleusercontent.com/oXAAIOMgUPFqwKTg2zCIipVymZxmxqoRHyK-W7_LzDVezpS-l4eReYdSjqXhghw5L8GGe93152LumUtx_ZEfaq9pjLtso42gAaNz-oeJrQMDvHrLewMfhSnhTvV8AZWto3x7oPKg=s0)
5. Connect your spreadsheet to your web map code
     + Replace the highlighted portion of your web map code below with your link from the end of Step 4\.
     + Existing demo code:![](https://lh3.googleusercontent.com/92mSSUhaLjmTTE3C-H16Hs1d-S2odmUA8890Q0mHmMfpfDRf6b4cnmKsig5ZR_Hxxo21CzBJlcD_XXWNlMaBcJ-W5P6WymRnxClZuNrdVttZAbeqpbzAQ97WppRF3Gq1yC0QeVyu=s0)
     + Updated code with my spreadsheet link:![](https://lh4.googleusercontent.com/VZ9_pg2rkeM3Wa4lLkqqep7dF3NPJlxlVtUmL9-whU0WkCIf103ZFZEIOxe0VdVImEutRTME4VUDueMxFvQnG10A3K5JjOJYhDwTkbwe5aORKJYu7Jnj8JgG3hOL5sMovvB1v1To=s0)
6. Add columns from your spreadsheet to pop-up when users click a location on your web map
     + Find "//You can adjust the values of the popup to match the headers of your CSV" in the demo code.
     + Replace 'Address' and 'Phone' with columns from your spreadsheet you want to display. ![](https://lh6.googleusercontent.com/oZJHYcfGjsWbD9fqFJtt9wCkTxjll52dZB2TSGpMxchOknlnLC4bTjd4K0IRPOfMvsmKo3yGrow8qo5JhhgcO8HrS9oELKfvTXmqOlf_jIDTkni5OeJCdSmGMc3uva-rX81u3Ye6=s0)
     + I changed mine to match my spreadsheet columns "CityName" and "Population"![](https://lh6.googleusercontent.com/z2En8ENiOKc9C5_NyfQ6iUd66a85t8eoMaMMvZwBvk6hyR3UXh4XBTBwnQTGyxw7S3i6xzt9s6_oFi7ySclNd5MALqoxEIrkgWsmEP1XPg6wuP-c1R0bOdWc_1sv2ILYnpU1EF_e=s0)

## Step 6: Host your web map with GitHub

## 

_Note: I've copied this portion of the tutorial almost exactly from Greenpeace's "[Coop Activity Instructions](https://docs.google.com/document/d/1mTcOnU_90YN4rp8RV7todfDCVvS77edHaXcYFP551DU/edit#)" google doc which pulls heavily from Mapbox's [Sheet Mapper Education Lab](https://labs.mapbox.com/education/impact-tools/sheet-mapper/#add-popups). This begins at Greenpeace's Step 8 under the heading "Hosting your web map with GitHub."_

1. [Create a new GitHub Repository](https://labs.mapbox.com/education/how-to-host-a-web-map/GitHub/#create-a-new-github-repository)
     + Open [GitHub](https://github.com/)
     + Select 'Create a new repository'
     + Name it for your map project (this will be visible in the URL)
     + Make the repository 'Public'
     + Under "Initialize this repository with:", check 'Add README file'
     + Select 'Create Repository'
2. Create a new file
     + Select the 'Add file' drop down menu
     + Select 'Create new file' and name the new file 'index.html'.
     + Paste in your html code from you text editor document to the blank index.html file next to the 1
     + Once you've finished inputting your code, scroll down to the bottom of the page and select 'Commit New File'
3. Enable GitHub Pages
     + Go to the repository's Settings, which you access using the gear symbol in the upper right hand corner
     + Scroll down to the section labeled 'GitHub Pages' and change the source branch selection from 'none' to 'master' and select save
     + _Note: The above two steps have changed. GitHub Pages now has its own tab accessible on the left side of the webpage. There is also no 'master' source branch selection, only 'None' and 'main'. I changed mine to 'main' and everything worked out fine._
4. After a minute or two, your GitHub Page URL will be published online.
     + It will look something like HTTPS:// \[YOUR GITHUB NAME\].github.io/\[YOUR REPOSITORY NAME\]/
     + You can find your URL by navigating back to the GitHub Pages section in your repository settings.

#### Optional:

To further customize your map, check out the last page of [Greenpeace's Co-op Activity Instructions](https://docs.google.com/document/d/1mTcOnU_90YN4rp8RV7todfDCVvS77edHaXcYFP551DU/edit#) \*\*

---------

## Wrap up\*\*

And there you have it! :tada: You should have a brand new web map that live-updates with your data spreadsheet. If you need or want to edit the code for your web map, go back to GitHub, click on your repository, click on your "index.html" file, and click on the pencil icon in the top right of the box.

Here is a link to the [practice web map I made](https://lmire.github.io/Test/ "https://lmire.github.io/Test/")! These steps create a very basic map with simple data conveyed, but I have found it's a quick and relatively easy jumping off point for visualizing data. Let me know how it works out for you and if you have any tips or tricks! :smiley: