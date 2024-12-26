---
title: "Outreachy Proposal: Optimize Performance and Accessibility of Public Lab Content."\ntagnames: 'app, soc, first-time-poster, soc-2020-proposals, outreachy-2020, outreachy-2020-proposals'
author: itm2017004
path: /notes/itm2017004/03-12-2020/outreachy-proposal-optimize-performance-and-accessibility-of-public-lab-content.md
nid: 23130
uid: 667155

---

# Outreachy Proposal: Optimize Performance and Accessibility of Public Lab Content.

by [itm2017004](../profile/itm2017004) | March 12, 2020 18:01

March 12, 2020 18:01 | Tags: [app](../tag/app), [soc](../tag/soc), [first-time-poster](../tag/first-time-poster), [soc-2020-proposals](../tag/soc-2020-proposals), [outreachy-2020](../tag/outreachy-2020), [outreachy-2020-proposals](../tag/outreachy-2020-proposals)

----

## About me

Name: Sneha Mishra

Affiliation Indian Institute Of Information Technology, Allahabad (India)

Location: India

## Project description

Optimize Performance and Accessibility of Public Lab Content.

### Problem

The project aims to improve the performance and accessibility of Public Lab Content. In the current scenario, the performance of the public lab website is a bit slow due to multiple javascript files and third party code blockage. The accessibility needs to be improved upon using WAI-ARIA standards. Apart from this, some of public lab users reference content made through our community while they're offline or away from computer devices. This requires us to introduce print styles and optimisations allowing the wiki pages and other website posts to be printed well. The project is divided into three phases-

- **Analysing and improving current performance**: The goal of this phase is to analyse current website performance through [WebpageTest](https://www.webpagetest.org/) and Google [PageSpeedInsight](https://developers.google.com/speed/pagespeed/insights/) by studying waterfalls.This current performance will then be optimized using techniques like compression of js files, removing unused css and text visibility during webfont load.
- **Printability of Wiki Pages and posts and accessibility**: The goal of this phase is to introduce print specific stylesheets and optimizations such that the Wiki Pages and other website posts are printed in a beautiful manner. The accessibility can be improved by studying the semantic structure of the webpage and adopting WAI-ARIA standards.
- **Documentation of Accessibility Guide**: The goal of this phase is to create an accessibility guide which would go along with existing style guide thus ensuring further code maintainability.

### Phase 1: Analysing and improving current performance and accessibility:

On testing the [Publiclab.org](http://Publiclab.org) website using [PageSpeedInsight](https://developers.google.com/speed/pagespeed/insights/), here are the [results](https://developers.google.com/speed/pagespeed/insights/?url=publiclab.org)-

![image description](https://lh6.googleusercontent.com/t0TcxR6ZPj-LEOtbU0L5bbpUkN0UEnIG6w3isRr_YXJRk5n9P4Vlu2nPSJXRdcoP-TsSwBSNg8auBTTYfUrd3xNvaa8HUfDTgpWGXT7sbwvJhV9ZR106wU5NcMhyBoIzxtd8eY0i "Screenshot_from_2020-03-10_11-17-48.png")

According to PageSpeedInsight, the page has a slow speed as compared to other pages. On further investigation done by PageSpeedInsight, these were the suggestions -

![](https://lh5.googleusercontent.com/o4nsKPWeKHPehekm_lnZUcD0oOSKQgYyBm5f_K3TV9IJnnXLw3gU2-5T6S6nwx5NhqXtEe6ffc-fZJjcJm7AMexjC_USWm_UI74Cp62_PWN2gPbLiFqVIEKGQaaHTixVknDdR9He)

**Eliminate Render Blocking resources**: Resources like the css and js files which were not critical can be deferred. All critical files can be unified into one to reduce network requests.

On checking the coverage tab of developer tools in Google Chrome, I noticed that the font awesome script was called twice and only a section of the code was used which can be combined in the normal stylesheet to prevent loading unused css code. Apart from this, many of the files had many unused bytes which can be considered non-critical. Optimizing the application.js file can help in reducing the time for loading by 6 seconds (precisely 6030 ms).

![](https://lh6.googleusercontent.com/Zd974dt4w0CnHthscjxiTrvNGqvj-LBXkv9-7mJDg9RqA4aJ1uC6HYNandMFPMn4vUQDOpgngmhAvy5ZkeUIOew4rtKSSd1Ku6OXXM3V08-xB0x8dp42EmKMB4V5e7CIXsVruz8_)

**Minify JS**: The next way for Optimizing involves minifying the existing javascript files. This can save up to 2.7 seconds.![](https://lh4.googleusercontent.com/H9jcoNYmy9_Y0C_47AzbDIPyMh540OnfXY0hLn0k8wBYkz7JPZnj3I9jc3g3e3g_9xRUcp5_pCmd9F0ckof-YEctJVAZxCct2QcYURrzdwnOrF8ybEFRhBbXFUw7qZ2m8lahRXdb)

On further investigation, I found out that the gem 'uglifier' which is used for minifying js is present in the gem file but is not used for compression by using it in the config/production.rb file as documented [here](https://guides.rubyonrails.org/asset_pipeline.html). For minifying css, the sassc-rails gem can be upgraded to sass-rails 6 which wraps sassc-rails under its hood as mentioned [here](https://github.com/rails/sass-rails/pull/424).

![](https://lh6.googleusercontent.com/JjXz7-3OLP-B7ltPi90H_uUueD8APE0JerWxg8SAzZMZXNjgDYJuA1jlnfjGzlYA--ghqPB2CyyJqyftcTgAXtGtiMKhhp3Q_WpTQy-gLahGz-8y5qi1edS5__RlQiqSjS-tK9TB)

**Video formats for animated content**: Large GIFs are inefficient for delivering animated content. By converting the [jewelry\_district-loop.gif](https://publiclab.org/system/images/photos/000/037/766/medium/jewelry_district-loop.gif) to video, we can save 2.7 seconds. We can add the following code to the video to mimic gif behaviour which implies that it will play in a loop, automatically and the video is silent.

```
<video autoplay loop muted playsinline> 
 <source src="my-animation.webm" type="video/webm"> 
 <source src="my-animation.mp4" type="video/mp4"> 
</video> 
```

**Next-gen Image formats**: Image formats like JPEG 2000, JPEG XR, and WebP often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. So some images like [gowanus.jpg](https://publiclab.org/system/images/photos/000/024/688/original/gowanus.jpg) can be converted to these formats to save up to a second.

### Phase 2: Printability of posts and wiki pages and accessibility:

**Accessibility**: On testing the accessibility of the website using Wave from webaim, here are the [results](https://wave.webaim.org/report#/https://publiclab.org/).

![](https://lh6.googleusercontent.com/Gv6vRtjle4-6xhQ6gArfSTf8ydN9TC6mwJ11Mx_xx4DiMY3GBscH9WSaePDRtmhS32LjTH3DFBQxfuv3EkHxb5BwbnPUDjg1QGEqVcJ8xil2eqdnyE0VtlEhS-j6NhyUD2nBESDQ)

Following are some techniques that might help with accessibility.

**Alternative text for image and linked images**: Without alternative text, the content of an image will not be available to screen reader users or when the image is unavailable. For example, the image in the card of note lacks alt-text. This can be added as a model field for the users to fill while publishing the note.

https://gist.github.com/Tlazypanda/f70f0a54a702e74a30e742db8025019b

**Form labels**: If a form control does not have a properly associated text label, the function or purpose of that form control may not be presented to screen reader users. For example in the /questions route the ask your question form lacks the label which can be fixed by adding it as follows.

https://gist.github.com/Tlazypanda/10c34d3b4796c7c9a856c0659011f313

**ARIA Elements**: Add proper aria labels and descriptions wherever possible. If for the above example we don't want to add any form label but still want it to be accessible , we can add ARIA labels as follows.

https://gist.github.com/Tlazypanda/4f944065c0bfa9c9a084a099ef3cf30c

**Text Resizability**: For users who might want to zoom the text for reading, proper text resizability has to be maintained. Here is a screenshot of 200% text zoom on [publiclab.org](http://publiclab.org). The join button and description of Publiclab are not visible here.

![](https://lh5.googleusercontent.com/khNlnACIkpgw-4BaEAGm2F2X8jjnCnpYJZ6tDQyQcGR8KOdYITY_h7nty4cEtFjaRNXqk7S2Bln-oLykHJDi-mXduJBimrowpJLhWLumNFBI-Wz4QkYbtkgCrI1FPWX9Y1ywlADk)

**Printability**: 

While checking out the print view, these are some of the observations - 

**Design/Results** :

On testing the printability, the best way to incorporate was to have a separate pdf view for the html page. After looking for resources, one of the solutions was to incorporate the wicked\_pdf and wkhtmltopdf gems for rendering html to pdf format. Details of this can be found [here](https://www.pdftron.com/blog/rails/how-to-generate-pdf-with-ruby-on-rails/). On testing wkhtmltopdf on Public Lab here are the results-

![](https://lh5.googleusercontent.com/-b9Qz8U7uk26F_mPLFOSBlKjgoErzANqTMCxhjXsHcLi4Rm0hwqjTx4pWO6BUsSfSrg2_iMClOrIr3Ip7uOvEBteOvNMWh7JkRbnN5N_-ye4PquoOInfeT985w8hhR5fXOa4we_J)


Currently the pdf documents all the sections of html code but we can specify our stylesheet for the particular view to only show sections that are relevant for printing.

**Implementation** :

**Setting up wkhtmltopdf**: For this we have to add the following ruby gems-

```
# Gemfile
# rails-generate-pdf/Gemfile
gem 'jquery-rails'
gem 'bootstrap', '~> 4.1.3'
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary'
```
For the pages that we need to add this we need to modify the controller by adding this method -
```
def show
        @post = scope.find(params[:id])

        respond_to do |format|
            format.html
            format.pdf do
                render pdf: "Post No. #{@post.id}",
                page_size: 'A4',
                template: "post/show.html.erb",
                layout: "pdf.html",
                orientation: "Landscape",
                lowquality: true,
                zoom: 1,
                dpi: 75
            end
        end
    end

    private
        def scope
            ::Post.all.includes(:post_items)
        end
```

Now in the html template , we can add the stylesheet by using the helper from wicked\_pdf to reference stylesheet like this where the name of the css file is 'post\_pdf' (app/assets/stylesheets/post\_pdf.scss)  - 

```
<%= wicked_pdf_stylesheet_link_tag "post_pdf" %>
``` 
Now the stylesheet can be modified to set the following properties to ensure that the pdf layout is printed beautifully and only relevant content is printed.

  
**Topics section at Bottom**: This section can be removed by applying a css class to it and setting the display to none.

![](https://lh4.googleusercontent.com/ykybaMB5sUQgzLF6falCgu9HAvAtI9QP-KCtuiz-0N6ZimaCW3Yt0DlYt6WhvyKKh7NKRRHJn524-Zr915ut7L5xTBl3NUxjaQ_HYveRKBRteHSTM417smE2p7YHXajCykzZFfGG)

**Links**: The links are now visible just as they would be rendered in the html page. A better approach would be to make the links a bit more contrasting by having a darker color for the same.

| 

a:link, a:visited {color: #781351}|

![](https://lh6.googleusercontent.com/uBCtwZvX1P95ic8V_XQsMTb3niZk5-33zphPM8vTLUHUgQ8brGadwj1bcviMVutp-Wrtv7uUaCCEnGnfJ3IhDEj0jks-XQDbWi0TSrVMWf6HorfeU4-IHuKL_RzSXwOUdK4qSvPu)

**Footnotes**: A footnotes section can be added at the bottom of the page providing all the links given in the wiki page.

**Image Transformations**: Images can be scaled down to a certain width to promote uniformity throughout the printed material by applying css transformations.For example-

| 

.image-50 {  
width: 50%  
}  
  
img {     
display: block;  
margin-bottom: 1em;         
}|

**Tables**: In the current scenario, Tables are rendered as they are in the printed document with the scrollbar hiding content.CSS can be modified to print it in a proper tabular format.

![](https://lh4.googleusercontent.com/EVGAe3OhH7g3BILlMN2SHx31xreVygutdj2nQaBYmMpv6Gshmgq8IQSBnt5YOUpOLLd2zMIg4tCp2d60XP2PpVH6WF2bTdro01NjG8Az8EY2vSU9l-LFx9NAh34mUgUAwiYYs2-4)

**Color Contrast**: Currently the color contrast is poor and a new color scheme needs to be adopted for achieving the background and content ratio of 4.5:1\.

### Phase 3: Documentation of Accessibility Guide:

This involves documentation of all features implemented for accessibility and ensuring that these features are safeguarded on the further development of the project. Some of the features are as follows

- Making sure the semantic structure remains in order.
- Navigation is consistent throughout the website and can be accessed through the keyboard.
- Text resizing is possible up to 200% without loss of function or content.
- Color contrast ratio between text and background is 4.5:1\.
- ARIA roles such as labels and descriptions used wherever possible

### Timeline/milestones

This project starts on May 20, 2020, and ends August 20 2020\. The following table has the tasks to be completed laid down by the weeks.

<table>
  <tr>
   <td>Tasks
   </td>
   <td>Weeks
   </td>
  </tr>
  <tr>
   <td>Detailed Analysis of Current website performance through Pagespeed insight, webpage test and other tools
   </td>
   <td>May 19-27
   </td>
  </tr>
  <tr>
   <td>Improvement of Current Performance : Eliminating third party code blockage.
   </td>
   <td>May 27- June 10
   </td>
  </tr>
  <tr>
   <td>Improvement of Current Performance : CSS and JS minification and elimination of unused code.
   </td>
   <td>June 10-17
   </td>
  </tr>
  <tr>
   <td>Improvement of Current Performance : Converting gifs and images into webm and next-gen image formats respectively.
   </td>
   <td>June 17-24
   </td>
  </tr>
  <tr>
   <td>Accessibility tests using WAVE and printability test through inbuilt firefox print test on all webpages.
   </td>
   <td>June 24- July 1
   </td>
  </tr>
  <tr>
   <td>Improving Accessibility : Adding form labels and adding alt text for Images.
   </td>
   <td>July 1-8
   </td>
  </tr>
  <tr>
   <td>Improving Accessibility : Adding ARIA roles (labels, descriptions, alert) wherever possible. 
   </td>
   <td>July 8-15
   </td>
  </tr>
  <tr>
   <td>Improving Accessibility : Checking text resizability on all pages and ensuring no content is hidden.
   </td>
   <td>July 15-22
   </td>
  </tr>
  <tr>
   <td>Printability : Removing topics section and improving links color.
   </td>
   <td>July 22-29
   </td>
  </tr>
  <tr>
   <td>Printability : Footnotes section and image transformations
   </td>
   <td>July 29-Aug 5
   </td>
  </tr>
  <tr>
   <td>Printability : Table rendering and color contrast discussion.
   </td>
   <td>Aug 5-12
   </td>
  </tr>
  <tr>
   <td>Documentation of Accessibility Guide
   </td>
   <td>Aug 12-16
   </td>
  </tr>
  <tr>
   <td>Finishing up: Creating FTOs, Getting pull requests reviewed and merged
   </td>
   <td>Aug 16-18
   </td>
  </tr>
</table>

### Needs

- Guidance from the mentors on the pull requests and how to approach the problem.
- Documentation will be available online.
- No other requirements.

### First-time contribution

I have been contributing to Public lab since January and these are some of my contributions.

Pull Requests :- I have opened 21 [pull requests](https://github.com/publiclab/plots2/pulls/Tlazypanda) in Plots 2 repository out of which 18 are merged, 1 is approved and 1 is closed. Here is some of my work-

[https://github.com/publiclab/plots2/pull/7609](https://github.com/publiclab/plots2/pull/7609)

[https://github.com/publiclab/plots2/pull/7609](https://github.com/publiclab/plots2/pull/7609)

[https://github.com/publiclab/plots2/pull/7572](https://github.com/publiclab/plots2/pull/7572)

[https://github.com/publiclab/plots2/pull/7286](https://github.com/publiclab/plots2/pull/7286)

Issues created:- I have opened 32 [issues](https://github.com/publiclab/plots2/issues/created_by/Tlazypanda) in the plots2 repository. Out of these there are 11 [ftos ](https://github.com/publiclab/plots2/issues?q=is%3Aopen+is%3Aissue+author%3ATlazypanda+label%3Afirst-timers-only)to help fellow newcomers in Opensource to contribute easily to Public Lab.Here are some of those issues-

[https://github.com/publiclab/plots2/issues/7591](https://github.com/publiclab/plots2/issues/7591)

[https://github.com/publiclab/plots2/issues/7590](https://github.com/publiclab/plots2/issues/7590)

[https://github.com/publiclab/plots2/issues/7529](https://github.com/publiclab/plots2/issues/7529)

[https://github.com/publiclab/plots2/issues/7567](https://github.com/publiclab/plots2/issues/7567)

---------

### Experience

I am a third year student pursuing B.Tech in Information Technology + MBA(IT) from Indian Institute Of Information Technology, Allahabad, India.

I have a knack for building products that help empower people. Below are some of the projects that I have worked on :-

[Care](https://github.com/Tlazypanda/Hack36)-An NLP based chatbot that through intents help ease the lives of elderly people and people with disabilities by allowing them to :-

- Buy prescription drugs online through blockchain thus ensuring trustless and secure payments.
- Facial recognition allows them to remember their fellow caregivers.
- Object detection that allows them to find objects around them.
- News and weather updates on their request.

[BabySteps](https://github.com/Tlazypanda/babysteps)- Built for SheHacks 16 hr hackathon held at IIIT Allahabad -BabySteps is a platform that aims to help pregnant women find timely treatment and explore curated content during their months of pregnancy. It has an api built with drf, a portal made to communicate between doctors and patients and a frontend website in react. The USP of the project is a chatbot made with dialogue flow with webhooks configured in Node Js and can comprehend Hindi as well as English and also book appointments, yield dietary information and answer general queries. The project is currently in ongoing progress and was built for shehacks 2019,IIITA.

[SheSafe](https://github.com/Ace-Bansal/SheSafe)- Runners Up in Prototype Hackathon held at IIITA - project aims to provide a platform for women safety. It has a react frontend and a chatbot for reporting harassment of any kind, an android app that allows SOS feature to emergency contacts in case of emergency, and a js webscript built using google maps api that aims to find the safest path between two points using k-means clustering.

Here is the link to my Github profile:

[](https://github.com/Tlazypanda)@Tlazypanda

Below is shown my skillset:

Skills

Languages:

C, Go, Java, Ruby, Javascript, Python, C++

Web Technology:

Django, Flask, Ruby on Rails

Other Technologies:

AWS, Blockchain, ML

---------

### Teamwork

I am the Chapter Leader for Pyladies in Allahabad. I have also organized Djangogirls Allahabad to teach underprivileged women how to code. Apart from this, I am a technical writer for Code Like A Girl Community.

Apart from this, I have been a part of Girlscript Community, which is a Non Profit Organization helping women pursue careers in tech by organizing free workshops across India. I have also mentored in Google Code-In for Systers, Anita Borg Organization.

I have also participated in hackathons with my team for building products empowering people. I have also worked in remote teams before as an intern.

As for Publiclab , I have had an amazing experience contributing here. The community members have been extremely helpful and have guided and mentored me in my journey of Open Source. Special thanks to @VladmirMikulic,@jywarren,@SidharthBansal,@cesswairaimu,@gauravno and @nstjean who have taken time to guide and mentor me.Looking forward to more amazing contributions ahead.

---------

### Passion

Publiclab is an organization that spreads knowledge and addresses the current environmental issues through this massive userbase who together bring change and promote sustainability.

I have teamed up with a lot of nonprofit organizations like Lean In India, Djangogirls, Pyladies and Girlscript to bring change wherever possible. I have always been passionate about making sure our environment is sustainable and spreading the message so that our future generations can see Earth for what it really is and not the polluted mess that we are making out of it. I am an avid lover of nature and animals and with pollution affecting these animals natural habitats, it is high time all of us join hands and genuinely do whatever we can to help. For this, it is extremely important that people across the globe are aware of and acknowledge the importance of this. Publiclab has done an exceptional job in making all this information accessible and at the touch of a button.

Originally belonging to Odisha, which is one of the poorest states Of India and also home to the largest tribal population in India, I often used to find big corporations trying to set up plants to exploit our mineral resources dumping the waste in the nearby water bodies. Our people never wanted this and realized the importance of our environment, hence I believe this mission holds quite a lot of importance in my heart.


As for my project, I hope the project allows people with slow net speeds, specially-abled people across the globe access the website with ease.

### Audience

This project aims to help people who are specially-abled to access the website in a more friendly and easier manner. This would also help people in rural areas with slow net connectivity better access the website on improving the current performance of the website. Lastly, for people who want to spread knowledge among their peers this project will allow them to print media properly. All-in-all, I most sincerely hope that this project brings some change and promotes inclusion.