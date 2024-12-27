---
title: "GSoC  2020 proposal: Site Wide Accessiblity on PublicLab.org"

tagnames: 'software, soc, response:13975, soc-2020, soc-2020-proposals'
author: suyash1814
path: /notes/suyash1814/03-07-2020/gsoc-2020-proposal-site-wide-accessiblity-on-publiclab-org.md
nid: 23097
uid: 652757

---

# GSoC  2020 proposal: Site Wide Accessiblity on PublicLab.org

by [suyash1814](../../../profile/suyash1814) | March 07, 2020 06:16

March 07, 2020 06:16 | Tags: [software](../tag/software), [soc](../tag/soc), [response:13975](../tag/response:13975), [soc-2020](../tag/soc-2020), [soc-2020-proposals](../tag/soc-2020-proposals)

----

# 

![](https://lh6.googleusercontent.com/POQi6-bsPQk3xuKV9l2zWrtadV1BSNFVT2gnP2an63smCTGC1I2FaHK1K4L_1y2H46aG1b-i0nhtgo4fYlVJ8zy1sMIH7tHudNB56mXAyFJ58XZwDh5IOwBF6fT58a4ttvn-Fp4y) ![](https://lh4.googleusercontent.com/ILT_P9PtPO7DrIu0O_NDrHeP73lfx8qHqJBAWYcqvcIghXCw2rHXfjGIDp1eQFSwVKoVVn3voJnwDugp4aMzM11p2-JKxRLuMSRySFHP1lhKxbf9uXA8R7YNV2hoJdDyhy5gTRuC)

---------

## About me

_Tell us about yourself!_

**Name:** Suyash Choudhary

**Github:** @sssash18 (Suyash Choudhary)

**Affiliation:** Birla Institute of Technology and Science,Pilani Pilani Campus, Rajasthan(India)

**Location:** Pilani, Rajasthan(India)

## Project description

Site Wide Accessibility on [PublicLab.org](http://PublicLab.org)

### Abstract/summary (<20 words):

Improving the site wide accessibility of [PublicLab.org](http://PublicLab.org).

Implementing some checks to ensure better accessibility in future development processes on [PublicLab.org](http://PublicLab.org).

### Problem

_What problem(s) does your project solve?_

The project aims to improve the site wide accessibility on [PublicLab.org](http://PublicLab.org) by insertion of alt-text on all images on [PublicLab.org](http://PublicLab.org), performing accessibility scans and color contrast scans(for color blindness analysis) through the use of axe-core and solve the detected issues .It would also implement certain measures through use of accesslint and axe-core to for ensuring accessibility in future development processes on [PublicLab.org](http://PublicLab.org).

### Issues to be solved

1. Generation of alt text for images.
2. ARIA implementation.
3. Accessibility issues and Color Blindness Analysis.
4. Automatic linting of pull requests.
5. Maintaining coverage for future development processes.

### Design and Implementation

### Generation of alt text automatically

#### For Images already existing in the database

### **Design**

For people with visual impairments they use screen readers for accessing the website. The screen readers in the absence of 'alt text' just read 'image' in place of the image at the site.

Therefore to generate alt text for such a large number of images on [PublicLab.org](http://PublicLab.org) 'Microsoft's Azure Computer Vision API will be used for generating alt text for existing images in the database and prompt the user for new images on new posts.

To execute the generation of the alt text following steps will be followed. First a request will be made to the 'microsoft\_computer\_vision' which in turn will return us the alt text.This will be stored in the database and will be used in the furture. So every image will make a single request and store that response in the database.

# Implementation

**Steps to generate alt-text for images :-**

This will be done with the help of 'microsoft\_computer\_vision' gem.

**Description :-**

**1\. Generating a column in images table to store the alt-text for images**  
**Migration**

```
class AddPhotoDescriptionToImages 

 def change

   add_column :images, :photo_description, :string

 end

end

```

The response of this request made by this module will be returned in a JSON format as shown below:

The above code would add a new column photo\_description in the images table.This column would save image description for each of the associated images which would be used later on for the alt text.

**2\. Adding the required gem file('microsoft\_computer\_vision')**  
**Gemfile**

```
gem 'microsoft/_computer/_vision'
```

**3\. Creating a module in to set up the API**  
A module will be created that would handle all the backend requests for analyzing a particular image and handling the responses received.  
**app/api/imagetext/imagetext.rb**

```
require 'json'

module ImageText

def describe(IMAGE_URL)
subscription_key = ENV['SUBSCRIPTION_KEY']

client = MicrosoftComputerVision::Client.new(subscription_key)

options = {

....

}

....

end

end

```

The response of this request made by this module will be returned in a JSON format as shown below:  
**result.body**

```
{  
  "tags":[  
{  
  "name":"outdoor",
  "score":0.976
},
{  
  "name":"bird",
  "score":0.95
}
  ],
  "description":{  
    "tags":[  
      "outdoor",
      "bird"
    ],
    "captions":[  
      {  
        "text":"partridge in a pear tree",
        "confidence":0.96
      }
    ]
  }
}

```

The part of the response relevant to our aim description captions{"text"}.

Now this part of the response body (descriptions{"captions"}{"text"}) will be saved in the above created column in the database for future uses.
The above module created will be included in the Image model.
Now the above setup will be used to generate alt text for two kinds of images.

```
include ImageText

```

**app/controllers/images\_controller.rb**

```
.
.
def alttext(image_id)

@image = Image.find_by(image_id)

@image.photo_description = @image.describe(@image.path)

@image.save

end
.
.

```

A method would be created in the images\_controller that would call the module method
Now this method will be called at all the places where images are rendered in the views. For example:-
**app/views/dashboard/\_node\_question.html.erb**

```
.
.
```

The below flow chart summarizes the whole process:-

![](https://lh6.googleusercontent.com/2-S46tFgyKlLB0J4nexuZE3rYMlVEsd9pu4xBNnS-vrWrr1NHI5oI6OQ7il0i44Zldj9sjr6ZtB7t_XkvJKoqG_4FITWMY3pOGUd1PNXYHCciKbCUiRAtpM4xQ5zujIN73mQpKEB)

Results of the API

This is a image taken from [PublicLab.org](http://PublicLab.org)

![](https://lh3.googleusercontent.com/TF661Ypt2t8uVbQltsdMEO4yO6px7QzGylBxXijB7gfkZuyPn5CTCaBSGkPZ5Fg2YJna16gjb8vKaVDNLFsnFNyvF-Jq-9yBcNmj139psT5uQLN2WcW4OaoIzdCGXaXocSG6ynRM)

### 

### For Images new to the database

### Design

Users posting the new images in their posts will be asked for the alt text through a form field and those alt text will be stored in the column photo\_description as created above.

Some mockups for the form field are shown below:

![](https://lh3.googleusercontent.com/Q_dwG-9waJ_JRqOtShK9WGFz_LDJg1i3zt_KlG4P-8XOiAvfAqybvqF7efwfFQ4667-Sanl68v_rFanTu_8HF2MNd2DHCbYkj89YAoB-SbAsfESf3E_4ukVUgHML193NMfrdXK3X)

### ![](https://lh6.googleusercontent.com/S9pd_G_pdEoZE1kh68Q7EnN0v-jeUjmTD1lY2CtaMRztOu1gyIgyJ0KYLTujb5kH68lX5E8tMqbQQl4U-2GkT4nDXMLkb1VI4YZUXtse8eQceRDNESnbH2Wc02GSBn97Vn2L3aA8)

### Implementation

To insert the form field following code will be inserted:

**[app](/tag/app)/views/comments/\_form.html.erb**

![](https://lh4.googleusercontent.com/VNgywZjAfIwZA8DYJE8kGyPo0C7EIDMzROLzjT7fSztKa5ZQ7b93oyJUuWOFdSDNkQZET58Iv_mFbQ_IOYkcFa09HF00wvqGf-FG73dQ2TLS4EwENHGgRB3hIHryJUDto_aKUD0w)

### 

For saving the alt text input:

[app](/tag/app)/controllers/notes\_controller.rb

![](https://lh6.googleusercontent.com/6V-Q0YycIeMMIDFUmIQvxkd13s9coWlUPaOd9NeomVGFbSTk7Y5Z0qSJXDeh5Eo4xSDvjyTvvB2_Y6ZyuzaPwfbxbSnFLpeqjag_K6K9PqSORy_ggMKzFo03A9Qd_dF3PphAZg6d)

Such areas will be identified where images are uploaded like comments, post,etc and implemented as above.**Any of the above two methods can also be used for both types of images on discussing and finalising with the mentor.**

  
### ARIA Implementation

### **Design**

Currently just native HTML can't do everything. ARIA can be used to solve accessibility issues that can't be solved by native HTML. ARIA works by augmenting and changing DOM accessibility tree. The below list shows the use of ARIA that will be used to solve the accessibility issues in [PublicLab.org](http://PublicLab.org) .ARIA attributes like aria-label, aria-describedby,etc will be used to improve the accessibility.

![](https://lh3.googleusercontent.com/XostT9MwnxeX5l6eIPl-DMlnuBjt7c32iyrSKonXxFfqvEXMKveqG-gpBNs8FS26n2Ao5eSKfpqWvJ6Lvo-Ufl0hUInWUoc_1RdS7f80B25lIUSvK05oPfuPmLqBovohrdzws0Y2)

![](https://lh6.googleusercontent.com/yi3a3sk-AdeyWWOT8GV7KF4M1qMOvWgGrEYoY_C-4NcC7LYuDvCz5iJgInmPr09xMCIDBA4JRvWxClZJdCu5TZPN7Q-RTf00nWcbtBxr4GdDZKIxuOktM9cdAAOPOUFLP1lIQ_xY)**Implementation**

# Implementation

The below list shows the use of ARIA that will be used to solve the accessibility issues in [PublicLab.org](http://PublicLab.org "http://publiclab.org/"):-

**a) aria-label for buttons with no labels**

A button with no label gives no information to the screen readers. So ARIA can be used to provide a label that is only exposed to assistive technology APIs. The use case of aria-label with search button in navigation bar is shown below:  
**app/views/layouts/header.html.erb**

![](https://lh6.googleusercontent.com/k9t1Tvv3FJ-cddY-lSgSpgjfbZNbSWg3Ioj8BSFRTDBz4akKnor6B9lTy0m5omzpG3PTzMuje9IZGaLM-mhiQbaXeEpTZ_M5H7rkB76dZ6k-MXleUs5xgvqqCR87rgkDfL9khEEP)

**b) aria-labelledby and aria-describedby for forms**

To describe the meaning of a label or to describe the user the kind of input that is required in the form, it can be done by aria-labelledby and aria-described by.For ex-

**Signup form on [PublicLab.org](http://PublicLab.org)**

In the password field for signup the accepted password has some [conditions.To](http://conditions.To) inform this to the screenreader aria-describedby will be used.

![](https://lh5.googleusercontent.com/EeQfqv2Mgewi1FIqmWV4L9B0zQ5I73pGZhv99HUy7rRA70Qrx-3zOrKnpMwBTyQ2euH9Zoib8uPX1IStfKCaSAYb81mGzvLF3XPyeesBCdu0uEjkuWVwprrYQbAymZYzke4Jmfuw)  
**c) aria-live for alert messages**  
aria-live enables us to inform about the updates immediately to the assistive technology regardless of the page position. It can be used to inform the users of the alert [messages.It](http://messages.It) will be used in two ways.

a) To inform the user of some positive alert .For example when the user has successfully logged in .For this event on the dashboard there appears a success alert dialog , so code changes for it would be:  
**app/views/dashboard/dashboard.html.erb**

![](https://lh3.googleusercontent.com/5FWHHYr3NC4OEfNEzokaChZYpd-FhQV0VBKZNrlAcwDPxSNytHE5T9BRsQPN-JrD7mOZVjjTCX0dOSr3flIeq6_AB4cRxJutYKuLLps1ra708fA87yLqvVKhk4mDhHTimloyDmVD)

Here in aria-live="polite" ,the screen reader will inform the user after finishing it's current work.

b) In case of errors aria-live="assertive" will be used ,so the screen reader will be interrupted immediately and the user will be informed about the errors.  
**All the accessibility scans will be done with the help of axe-core accessibility tool which works on guidelines of WCAG.**  
**All the above aria-changes (along with some more aria attributes) will be done with the help of a lot of 'first-timers-only' issues to expand the outreach of PublicLab.**

### Color Blindness Analysis

### **Design**

Currently the buttons and error messages shown on the website just depend on the colours, but to improve the accessibility, it would be better to involve appropriate symbols .So to improve the accessibility for color blind users, the color contrast will be improved, appropriate symbols will be inserted for each button, error messages will be incorporated with symbols.

# Implementation

**1) Solving the color contrast issues:-**  
Currently there are a lot of pages on [PublicLab.org](http://PublicLab.org) with color contrast issues.For example the navbar. The color contrast for all the links on it dont have a great contrast and is difficult to recognise for people with color blindness. Such issues will be detected by axe-core and will be solved with help of many first timers only issues to enhance the outreach of PublicLab.

![](https://lh5.googleusercontent.com/5KOMCiOrIv0FP_y3-EbKokwDqo1eVGLxgUssFmc3DJ8pWKoj6vsayqPn992JK1d3HItNjPuORr_BHIN4Ht8z3hpDbwIqsEWPq6TUowUC0XSopMiskYPafKMBnrpCSie9gBxYUH-W)

Currently only on the dashboard there are around 600 color contrast [issues. So](http://issues.So) a new set of color scheme needs to be implemented which would be decided by discussing among the community members and implementing it.

**2) Changing Dependence of buttons on symbols**  
Currently the buttons on the site just depend upon their colors .Such buttons may be not easy to recognise by some [peoples. It](http://peoples.It) will be a good idea to add relevant symbols to all major buttons for describing their role .For example the save button on edit profile has no relevant [symbol.](http://symbol.So) So it is a problem for color blind people. A symbol for it will be inserted as
**Before**

![](https://lh5.googleusercontent.com/v_MyU3kYsCyw3_HjSwIanXiewxwanSRcZtULLzgRnAPbNYuLH59s7HqDZnZz9f9WM4Q55_jXAANCH6d2vioOqvsVhm66M1O9mnd6ZtE7O1KwFsFlO2dFi4t77ars3msqpy2rhYLG)  
**After**

![](https://lh4.googleusercontent.com/lNeyur2D5bRaCfN3uuaokbC3l8sun0NePUBx2WrKj0pE3xkAGijPAdsUjGAdRNzJddzcjJAXFM5DLoVDUjVevzdd1y0sckeu0G42b1lvkMsXZs_XjBKLY315bNc7WInj2Ze62Ddt)

![](https://lh4.googleusercontent.com/J3ZqhKdBaWM8K1UCWXGek_5G1sRSc6bLHiSmWx5nWzEQ3dkhDSYMkn7JSktN1TBm28BcE6YaKZVsbhDew9De2rj5VxvHzmxK9-BbBORueGRgRAVZVnJemBechZVpJSEZ2cH3-K9s)

Similarly Currently the error and the success flash messages are just identified by their color which is not [appropriate.So](http://appropriate.So) a symbol indicating the error or success will be inserted.

![](https://lh3.googleusercontent.com/kIw97pFn7K_yiQ6YTIZGH34S_Q4YVsZYuEMe_SwiWYUpqy-D_pK5qWUQyDpOfdmI3GXfvxvNbwzefTEXh2MlBLCZIEr0N2GOmAchN1ezqalt9uYsOXixE6ToUkqUJQNYvk3g-1cC)

### 

### Automatic linting of Pull Requests

#### Design

To inform the developers about accessibility issues during the development process itself, Accesslint will be used. Accesslint CI automatically comments on pull requests informing the developer about the accessibility issues.

![](https://lh6.googleusercontent.com/rUrxOI5wr6jk7UnPt2RDDEO7_LPPSRuSiBDa8oyKxUgmlOlMw4hxs9u_IjtZCBwJQtI2kLOlPLs2AT_uyth1MuosrXr0lCghU3dtwy_6GjXPOaWW-YdRZyUcn2ZQjujhQ8wP0Msz)

#### Implementation

Currently Accesslint is only supported on circle ci, therefore circle ci will be set up in the first place.The in the file:

**#circle.yml**

![](https://lh4.googleusercontent.com/4DWAPLPa4zxJFnVnm2GY19nsBroxbmvIO0OHy7XgNf66tR4WiPyjA-rtFwLwL1FU1qhOTwisCspDjrjB2N4YZqzm1eosDhrqc0NnWC03ZpLBrKo194-L44bQDFBbZ_b9IW2fchgJ)

### Maintaining coverage for future development processes.

# Implementation

To maintain code coverage for future development process a series of accessibility tests testing all the views for accessibility issues will be added with the help of axe-matchers gem with it's RSpec integration. This testing mechanism will be developed as follows:-  
**1\. Setting up RSpec**  
**Gemfile**

```
group :development, :test do
gem ‘rspec-rails’
gem ‘axe-matchers’
end

```

**rails\_helper.rb**

```
require ‘rspec/rails’ 
require ‘capybara/rspec’
require ‘axe/rspec’

```

**Now a basic accessibility test will look like:**  
**spec/features/home/home\_spec.rb**require 'rails-helper'

```
RSpec.feature HomeController do
scenario “home page must have no accessibility issues” do
driver = Selenium::WebDriver.for :chrome
 
driver.get('http://localhost:3000/')
 
expect(page).to be_accessible
end
```

The chromedriver is already installed for travis in the existing code, so it will be used.

To run the tests in travis:

**In jobs section**

```
- name: "Accessibility tests"
```

```
  script: rspec spec spec/features
```

The output of the tests will be like:

![](https://lh5.googleusercontent.com/2CXn5fwqMB4xefae6pKCBS0imZlVfLxldlYw9ou1wGX7fVQUQDRWbTModpZmpQTcCl-9RUD6yJWTl1CVuBf4QM0_6Fg_wn1csuCpm3uJniGHNTl0kPTo87ZbcvfmhpHXtiyZujKL)

Such tests will be written for all the pages of [PublicLab.org](http://PublicLab.org) with various inclusion and exclusion clauses( like excluding the header and footer).

These all the above implementations will help [PublicLab.org](http://PublicLab.org) to be more accessible to it's users.

### Timeline/Milestones

![](https://lh5.googleusercontent.com/5C5gcpUfg7_wv-gipdHcOkLerlBrVtNF_cGVL4MHu_fK-RJMvfOgyiwzIVmcUwRvZGStz6JG9WWpp8M9eZVYOirZ5rgv_hBxRFKc6tE_lRX1i4T9m5mm-IzDeUcI4IfM13tr7Xhj)

![](https://lh3.googleusercontent.com/vCVcMofA_sq3RgCOFecmGc1K5FYXazwilMgACKvEkpWuy6n2_88K7-KywNHESsYnyj-4cF53xc0oLr6PmZZLzlqJreAj4-bsTanKJjg2HnGfGiqsR2CHE_YCWCHTf-vzNpdks-ox)

Needs

_What resources will you need: people, documentation, literature, sample data, hardware if applicable_  
I will require the guidance of mentors for this project and is open for any help by the community members. The mentor's help and support will be the biggest resource that I will require to complete this project successfully.

### First Time Contribution

I have been a active member for PublicLab since the beginning of January 2020\. I have worked on issues involving both frontend and backend work.I have also opened a good number of first timers only issues to increase the community outreach. I have also reviewed some of the first timers only issues and helped the new contributors to get started smoothly.
I have made around 17 commits till now in plots2 and have created around 43 issues in the repository and is currently working on some issues and would like to contribute even in the future.  
\*\* Recent activity:\*\*

Comments, to show overall community involvement (like helping others):  
[Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter:sssash18%20org:publiclab&type=Issues)  
Issues  
[Issues](https://github.com/publiclab/plots2/issues/created_by/sssash18)  
PRs  
[PRs](https://github.com/publiclab/plots2/pulls?q=is:pr%20author:sssash18%20is:closed)  
_Tell us how you've learned about writing software; what languages you've been learning, if you've worked on other projects, links to GitHub or other code repositories or samples._  
I am a second year student pursuing Msc. Physics + B.E Computer Science from Bits Pilani, Pilani Campus.
I have been learning Ruby on Rails for almost a year now, starting with a online Udemy course by Rob Percival and created some projects based on Ruby on Rails platform . I have also completed a course related to this project:  
[Web Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891 "https://www.udacity.com/course/web-accessibility--ud891")  
Below is shown my skillset:  
**Skills**  
**Languages**  
Ruby, Javascript, Python, C++,Java

**Web Technology**  
Ruby on Rails  
**VCS**  
Git  
I am comfortable in how to create pull requests and work in github and has become comfortable with the code base of plots2 which will help in smooth completion of the project.

### Team Work

_Describe teams you've worked with before, whether open or closed source, and in what capacity you participated. Cite examples of how you were self-motivated and self-sufficient._  
I have participated in various team events. I with one of my friend created a Tourist guide application in java.  
I have also taken part in various coding competitions in my college that require team participation .  
Regarding team participation in PublicLab, it is overwhelming and joyful to work under guidance of great community members. In just a short span of my contribution to PublicLab I have learnt a lot from @SidharthBansal, @jywarren, @cesswairaimu and all other community members . I would like to work in this awesome team in the future as well.

### Passion

_What about our projects, and Public Lab, interests you? What are you passionate about? Open science, environmental justice?_
The basic objective of PublicLab is to solve the environmental issues together and share various awesome ideas and research notes related to the environment by all the users of PublicLab. This inspires me to work for this organization.
Also through my knowledge of code I would like to solve a real life problem which could bring change in people's lives . My project on improving 'Site Wide Accessibility' inspires me a lot to make the life of the users who are not able to access the website in a normal way, a little easy .

### Audience

_Whom do you want your work to help? We especially appreciate proposals which make technologies and techniques more welcoming and friendly to those who've often been excluded._  
Through this project I would like to help the differently - abled users of [Public.org](http://Public.org) who after the project's completion would be able to access the website in a more easy and smooth manner. It would be a great feeling to help such people and making contribution to make their life a bit easy.

### Commitment

_Do you understand this is a serious commitment, equivalent to a full-time summer job? Tell us how you'll structure your schedule from day to day!_  
I fully understand the seriousness and the commitment required to complete this project and I am ready to devote myself fully to complete this project in the summers. I would be able to devote 6-7 hours daily for the completion of this project.