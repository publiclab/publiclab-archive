---
title: GSoC proposal: v2 API development
tagnames: software, gsoc, soc, response:13975, gsoc-2018, soc-2018, soc-2018-proposals, soc-2018-api, implementation:
author: rishabh07
path: /notes/rishabh07/03-04-2018/gsoc-proposal-v2-api-development.md
nid: 15858
uid: 526576

---

# GSoC proposal: v2 API development

by [rishabh07](../profile/rishabh07) March 04, 2018 07:47

March 04, 2018 07:47 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [soc-2018-proposals](../tag/soc-2018-proposals), [soc-2018-api](../tag/soc-2018-api), [implementation:](../tag/implementation:)

----

## About me

Name : **Rishabh Kumar Singh**

Github: [https://www.github.com/rishabhptr](https://www.github.com/rishabhptr)

Email: rishabhptr@gmail.com

Web: [http://www.rishabhptr.me](http://www.rishabhptr.me/)

Gitter: **rishabhptr**

**Affiliation**: Guru Gobind Singh Indraprastha University, Delhi, India

**Location**: Delhi, India


<br><br>

## Project description

V2 API development and 3rd party app integrations.



### Abstract/summary

Further development of the RESTful API to migrate old legacy code to the new Swagger system that we are using and make new end points along with documentation and 3rd party app integrations.

<br>

**Problem**

We already have a RESTful API which includes a Grape/Swagger interface with documentation but now we need to migrate the older API code onto this new Swagger interface. Also we need to provide more endpoints for the statistical data that exists at Public lab website.

Additionally we need to provide 3rd party app integrations.

----------

-   We are using grape-swagger gem for our RESTful API services and already providing end-points using it for various search interfaces. But we also have various end points that exists in the legacy API which exist at different locations in the code,these would be need to be migrated to this new system and possibly consolidated at a single location in the code.
    
-   Apart from this we need to provide more endpoints for the overall statistical data based on time ranges. This too needs to needs to implemented in the new swagger system along with proper documentation and requires tests to be written.
    
-   We already have a token-based API system where-in user(or bots) can post comments using API by using a user access-token that is accessible on user profile, we need to further develop and this feature so that we can provide more 3rd party integrations to our application based on abilities of a user i.e we need to authenticate user status (user, moderator, admin) and provide further more actions to perform.
    

----------


## Implementation:

<br>
# Swagger

-   Swagger specification( OpenAPI specification) is a definition standard for RESTful API's. It is widely used as it provides a good interface for both developing and consuming API's.
    
-   Not only it makes the API's easier for a human to understand but also it makes it machine readable, which means that the same documentation can be used by tools to display the API, generate servers and client. Some of such tools are Swagger-UI and Swagger Code-gen.
    

## Grape

Grape is a API micro-framework in ruby which is widely used on frameworks such as rails and Sinatra for the various features it provides such as.

-   Raising custom exceptions.
    
-   Versioning
    
-   Authentication
    
-   Support multiple formats.
    
-   Helps organise code by organising end points in a module - resources hierarchy ,much like one would do in routes.rb
    

  
<br><br>


**Grape-Swagger**

![](https://lh6.googleusercontent.com/gK1k3eUdj77j7xKd-J0QzBKTjyEnmEKxAAC6fWO7KhHC2veZTrkSmtgy4hahj4SPfXWFl45XQ6tm0wk2LA7CwbWK6eq1TaN72Vzeoc-QshmYDrDSJdpyF-9dRcgG8yH4A_ytIAXr)


<br>
When we are already using Grape for developing our API, we can use grape-swagger gem which helps in automatically generating **swagger-compliant** documentation which can be seen in Swagger-UI.

The way this works is :

1.  We mount all the different modules in a single root class inheriting from `Grape::API` . This is where we can mount the various modules of our API.
    

Presently, we have have this root file as `api.rb` and we have mounted our two modules which we have made using grape: `Srch::Typeahead` and `Srch::Search`.

<br>

Then we can use `add_swagger_documentation`  in our root file to provide user-information of our whole API sub-system, select where mount the swagger documentation( normally at `/swagger/doc`) etc.

1.  We can describe our API modules in different files and their individual end points indicating their use also describing the parameters and response options such as `showCount` and `pageNum` to implement pagination of response.
    
2.  Mounting the documentation route in config/routes.rb `mount GrapeSwaggerRails::Engine, at: "/location"`
    

  
  <br>
  
```
    Example:  
    module  API  
    module  V1  
      
    class  API < Grape::API  
    prefix 'api'  
    format  :json  
      
    mount API::V1::res1 //end-points defined in res1.rb  
    mount API::V1::res2 //end-points defined in res2.rb  
      
    add_swagger_documentation format: :json,  
							  api_version: 'v1',  
    hide_documentation_path: ..,  
    mount_path: '/swagger_doc',  
    models: [ ... ],  
    info: { ..(General info to be mentioned }
  
    end 
    end  
```
  
<br>
The documentation can be generated by the `desc` provided in defining these modules in separate file. Now, presently all above steps are already done and swagger documentation is already live at `api/docs`.

The two modules made using `Grape::API` are `srch` and `typeahead` where the the former provides detailed information using a search string across all models in the project and the latter provides pointers for better searches and `Tags`,`Users`,`Nodes` etc.

These are located in `api` folder and their utility classes `search_service` and `typeahead_service` which contain helper function for running search queries in database are located in services folder. Therefore the swagger documentation of them is already made live as both are mounted on API root class.


<br><br>
**Migrate old API code:**

We have **legacy end points**  `eg.: notes by tags, wikis by tags, rss feeds etc` which were not made using Grape hence are isolated from this system so they need to be implemented in this system and be included in our swagger documentation.

Currently these endpoints are directly mentioned in our routes.rb file and directed to controllers where we serve data based on request format. But it would be better to move them to the API part of the codebase.

 
These could exist as separate modules which would help clean up the code rather than having their implementation spread across the code base.


The required steps would be:

1.  To Create separate modules with appropriate `:resources` and their `end-points`.
    
2.  Define helper functions if needed in utilities class under services folder.
    
3.  Handle serialization of output, pagination etc.
    
4.  Mount these modules to API root class along with other modules.
    
5.  Add Unit and functional test for these endpoints.
    
6.  Implementing error handling for these requests.
    
<br>

One idea, that can be used while implementing this is the Versioning feature of Grape wherein we can have two separate versions of API which can be indicated in different ways, one of them being in the header. `/:version/resource/method.:format` This way we could work with a different version while developing and have only one version afterwards which ensures we don't break anything.


We would need to create new folder for `v2` and mount in the API root class.

1.  Then we can include the already existing modules in this folder.
    
2.  In Step 2, we move legacy end points under appropriate modules.
    
3.  Initially these end points will be available at `https://www.publiclab.org/api/srch/v2/'...'/:id.:format`
    
4.  After development and testing our newly added endpoints we can remove v2 and this can be the only version.
    
5.  The reason for doing this in case we were to make changes to already existing files, we don't end up breaking anything and can get the changes integrated in pieces.
    

<br>
The legacy endpoints are: All these below mention end points would require separate modules under `/api` folder.

-   Notes by tag in JSON: [https://publiclab.org/tag/balloon-mapping.json](https://publiclab.org/tag/balloon-mapping.json)
    
-   Wikis by tag in XML: [https://publiclab.org/wiki/tag/place:*.xml](https://publiclab.org/wiki/tag/place:*.xml)
    
-   Questions by tag in JSON:[https://publiclab.org/questions/tag/spectrometry.json](https://publiclab.org/questions/tag/spectrometry.json)
    
-   Maps by tag in XML: [https://publiclab.org/maps/tag/gulf-coast.xml](https://publiclab.org/maps/tag/gulf-coast.xml)
    

<br>
For all these endpoints we can can files where the item to searched is the resources and search parameter which is a tag can be specified using params.

The new endpoints would be:

`https://publiclab.org/api/srch/notes?tag=balloon-mapping`

`https://publiclab.org/api/wiki/tag/place:*`

`https://publiclab.org/api/srch/questions?tag=spectrometry`

`https://publiclab.org/api/srch/maps?tag=gulf-coast`

Wildcard matches: `https://publiclab.org/api/tag/event:*`

(We can specify response format in specification file and also send through request too.)

Helper functions for these endpoints which are spread across the code base would be moved under services folder.


![](https://lh5.googleusercontent.com/fO_T8qmAPViR9JI26riSPy0FqDROb5uPBNo_2N94JhyLvMzcmyJ7Uf3fyTUW4itZIB1pJ3UH_o7aaTlxxxtZkuaq5VMZXujRu7M0fNsQ75wdsJbCJB9D5H8zBGzCpSC6IqjGo8MA)




<br><br>

**Add Statistical end-points:**

We have lots of stats data at [https://publiclab.org/stats](https://publiclab.org/stats) we should implement in our API.

1.  Using the above described approach we can add the various end points for `research notes published,wiki-pages , comments made etc`. where the user can fetch query these based on a time-period, search period like tag,author etc.
    
2.  These end-points need to be nested under appropriate `:resources` `eg:/questions/tag/..,\tag\`etc
    
3.  Because of bulk of data it would be advisable to include optional start date and end date parameters in the request.
    
4.  We would need to add the required tests for these too testing their response.
    
5.  These can be included as different resources in our API .
    
6.  Stats module can then have different endpoints which can have filter in params such as start_date, end_date, week_no, year etc.
    


<br>

**Example for stats endpoints**:

`www.publiclab.org/api/stats/notes/all?start_date=''&end_date=''`

`www.publiclab.org/api/stats/wiki/all?year=2017`

`www.publiclab.org/api/stats/wiki/title?year=2015`

`www.publiclab.org/api/stats/comment/user=bob&year=2015`



Fetching these records would require new functions to run queries to fetch the data, all the required helper functions would go under separate files in services folder to help maintain modularity.

We will also implement error handling through proper error messages.

This feature would also require unit and functional tests for testing the functioning of these new end points.

As this can serve variety of purposes to Public Lab users we would need to specify default format for these types of responses which are easier for someone to comprehend.




<br>
**Format:**

We are serving response in various formats such as .xml, rss feeds ,json etc and there are some formats we could still add such as .csv.

-   For csv , rails have a pre-existing library which can be included using `require csv` and by adding a `respond_to` for csv format we should we able to generate specific columns passed through params in the API and also provide download for the same.
    
-   We can add this response format in grape by `format: csv` but we will need to add a CSV formatter of the response.
    
-   By this we can serve the response in csv format for specific columns requested and the file can be automatically downloaded which would be convenient for someone without a technical background.

-   Through select columns it would be possible to serve csv data in a format such that it can be easily modelled by using a plotting library, so we can even write a script to automate generating charts based on contributions/data at Public Labs and uploading them to a location.
    
<br>
  

## Documentation and Integration of Token-based API

We need to add documentation for our pre-existing token system which already includes a feature to post comments by sending the token in the request header from where it is fetched and on `@user && @user.token = token` we proceed with adding the comment through the user account.

Now coming back to our new v2 API proposed here, one more important aspect left uncovered is authentication via as we may want to restrict some endpoints specially the stats endpoints.

Grape supports a variety of authentication methods , token-based authentication being one of those. But we actually don't require most of these steps of generating a token through `SecureRandom` , assigning the user a token every time etc because we already have a unique token for every user accessible through his/her profile page.

So, in our Grape Specification files, we could use these token in requests and for the endpoints that we would want to secure we can use `authenticate! `helper in these end-points to verify the token and identify the user, which would help us expose some endpoints to user with predefined roles.

```
def  authenticate!
error!('Unauthorized. Invalid or expired token.', 401) unless current_user.role == "admin" || current_user.role == "moderator"
end  
 
def  current_user  
`# find token. Check user.`  
token = params[:token]  
if token  
  @current_user = User.find_by_token(token)  
else  
  false  
end  
end
```

Implement additional features to the Token based API

1.  Also I would be creating new end-points implementations for this token feature such as making a login request through token, marking a new post as spam/approving it,suggesting title change, adding default tags by sending them through API requests.
    
2.  These will also be added to the Grape-Swagger system.
    
3.  These features can help in integration with 3rd party tools and bots for moderating/interacting with Public labs.
    

I will add the required tests and new documentation based on any new features added to this system.


<br><br>

### Outreach Plan:

-   This API project is a very important for Software Outreach because through API’s we open new ways to connect to our project. It helps people with different backgrounds utilize the resources accumulated at Public Labs during the past many
years.

-   I will break up my project into modules and follow a test driven development so that I can get my code integrated in pieces.

-   I will create first-timer-issues along the along the way and after the project which could help improving on implementation and descriptions of features along with get people started with Open-Source in general.


<br><br>

### Timeline/milestones

I would be requiring a week break for my end terms examination which I will cover up in the subsequent weeks.

**Community Bonding Period (April 23 -- May 14)** : Focusing on learning more about the Community, and how this project can help different categories of users in the Community.Discuss with mentors new additions to the API features which could benefit the people involved with the initiative.

**(May 14 - May 21)**: Start creating new modules for legacy end-points along with proper description of their parameters in a new version of API.

**(May 21 - May 28)**: Work on implementing helper functions for the backend of these end-points and writing tests for these functions.

**(May 28 - June 4)**: **Break for end semester exams**.

**(June 4 - June 11)**: Add required tests for the new API requests testing their response.

**(June 11 - June 15)**[Phase 1 evaluation]: **Legacy end-points would be migrated into new swagger based API system.**

**(June 15 - June 22)**: Start adding modules for implementing stats end-points along with all the required functions and parameters to filter this result.

**(June 22 - June 29)**: Work on CSV formatter for providing response in csv format that can also be downloaded. Working on ways regarding how filtering this data can help model it in a visual representation.

**(June 29 - July 9**): Add tests for the stats feature and provide documentation for the new API system upto this point.

**(July 9 - July 13)**[Phase 2 evaluation]: **API would be updated with new endpoints with different response format along with swagger documentation.**

**(July 13 - July 20)**: Work on documenting the present state of the token feature and add implementation for using this token as authentication in our API. Start adding some new implementation in our token-based API provide more actions in the website, including new features that were developed in the project in past few months.

**( July 20 - July 27)**: Add more tests that can be required and use this as buffer period . Work on contributing to any API related issue that is being discussed.Create some first-timers-only issues.

**( July 27 - August 6)**: I will use this time to fine tune the code base and solve any bug that could have come up and prepare final updated documentation describing entire work done in this project and how developers and users alike can benefit from the new system.

<br>


### Needs

All the documentation regarding swagger-grape is available online and also some documentation for the pre-existing API code in code base already exists. I would of course require the guidance of my mentor.
<br>


### First-time contribution

I have made some contributions in public labs in the time span of last 2-3 months.

Issues: [https://github.com/publiclab/plots2/issues/created_by/rishabhptr](https://github.com/publiclab/plots2/issues/created_by/rishabhptr)

[https://github.com/publiclab/plots2/issues/2010](https://github.com/publiclab/plots2/issues/2010)

[https://github.com/publiclab/plots2/issues/2224](https://github.com/publiclab/plots2/issues/2224)

[https://github.com/publiclab/plots2/issues/2226](https://github.com/publiclab/plots2/issues/2226)

[https://github.com/publiclab/plots2/issues/2285](https://github.com/publiclab/plots2/issues/2285)

Pull requests: [https://github.com/publiclab/plots2/pulls?utf8=✓&q=is%3Apr+is%3Aclosed+author%3Arishabhptr](https://github.com/publiclab/plots2/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed+author%3Arishabhptr)

[https://github.com/publiclab/plots2/pull/1815](https://github.com/publiclab/plots2/pull/1815)

[https://github.com/publiclab/plots2/pull/1969](https://github.com/publiclab/plots2/pull/1969)

[https://github.com/publiclab/plots2/pull/2225](https://github.com/publiclab/plots2/pull/2225)

[https://github.com/publiclab/plots2/pull/2227](https://github.com/publiclab/plots2/pull/2227)

[https://github.com/publiclab/plots2/pull/2286](https://github.com/publiclab/plots2/pull/2286)

----------
<br>
### Experience

I had been learning web development using HTML,CSS, JavaScript from my second year of college and last year I started with Ruby on Rails using it as a back-end and I am still enjoying working with it because it enables you to get things done faster and has rich community along with actively maintained packages(gems) for providing different functionalities.I have made some small projects in Ruby on Rails during my learning process when following various online courses.

Prior to that I had some experience in Android development , networking and working with cloud services.

From past 6 months I have been actively contributing to Open-Source organizations such as OpenSUSE and Public lab which has really helped with get comfortable with the framework even more as they both have projects on Ruby on Rails.

----------
<br>
### Teamwork

Last year I had been a part of team that worked on a Android Application for providing students with resources for Math Olympiads. My contribution generally comprised of generating the backend of the application and providing integration to the various services and libraries that were being used. This helped me to understand the importance of working in team and how to work with different parts of code and integrating it with what others have worked upon.

Also I have participated in various hackathons and competitions with other team members from my college.

----------
<br>
### Passion

Environmental degradation is a alarming situation which is becoming a even more dangerous threat over the past few decades. Seeing that how at Public lab, people with different set of skills have come together to volunteer to make a change in the present scenario motivates me to make a contribution myself that can actually create some impact in this field even though at a small scale as I believe that is what true essence of Open Source is.
<br>
### Audience

Public lab hosts a large scale of information and with this project this information can be made more accessible through the REST API and with the new endpoints and integrations, the services offered can made more reachable in various forms.

Also with swagger system and additional documentation along with separating the API code from the rest of the code it would be easier for developers for utilizing these interfaces and enable future developers to easily build upon this system.
<br>
### Commitment

Yes, I understand that this is a full time commitment. If selected I would not have any other job apart from this and would be able to chip in 6-8 hours every day for this. I would also be blogging throughout the process and making notes on the website about the functioning of the new API system and how it can server different users.

I would however need 7 days for my exams that would lie in between the stipulated time frame but I would make up for it by putting in extra work after the exams