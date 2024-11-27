---
nid: 26138
title: GSoC 2021 Proposal: Legacy Code Deprecation
path: public/static/notes/gauravsingh2699/04-05-2021/gsoc-2021-proposal-legacy-code-deprecation.md
uid: 746843
tagnames: software,soc,lat:20,lon:70,zoom:4,gsoc-2021,gsoc-2021-proposals
---

# GSoC 2021 Proposal: Legacy Code Deprecation

## GSoC 2021: Legacy code deprecation

## About me

**Name:** Gaurav Singh

**Email:** [gauravsingh2699@gmail.com](mailto:gauravsingh2699@gmail.com), [gauravsingh.191it218@nitk.edu.in](mailto:gauravsingh.191it218@nitk.edu.in)

**Github:** [https://github.com/gaurav2699](https://github.com/gaurav2699)

**LinkedIn:** [https://www.linkedin.com/in/gaurav-singh-848600171/](https://www.linkedin.com/in/gaurav-singh-848600171/)

**Gitter:** gaurav2699

**Affiliation:** National Institute of Technology, Karnataka

**Study Year:** 2nd year

**Field of study:** Information Technology

**Location:** New Delhi, India

**Timezone:** Indian Standard Time (UTC +05:30)

## Project description

Deprecate old database models and code segments and also correct the tests and restructure the database. Along with that, produce archival export of the data that is deleted and merge deprecated content into standard ones.

### Abstract/summary (<20 words):

There are several old database models and their references. They need to be deprecated and merged into different tables. Along with that, the associated tests and other code related to them should be removed.

### Problem

Public Lab used to be a Drupal Site before it was shifted to be a Ruby on Rails website. While most of the legacy Drupal stuff are deprecated, there are still several models with drupal names. Along with that, there are several models and content types that are just unnecessary and cumbersome and should be removed for cleaner code and faster servers. Hence, this project would involve deprecating all the legacy code and models. Also, it will involve merging those deprecated content type into standard content types.

### Implementation Plan

The Deprecation part can be divided into six major parts:

1. Deprecate the Answer model and merge it into the comments table.
2. Deprecate the drupal\_content\_type\_map model and merge all nodes having map types to notes content type nodes.
3. Deprecate the DrupalFiles and DrupalUpload Table and append the file path to the node body.
4. Deprecate Tag Aliasing. Add a parent field of a tag(if exists) to the list of subtags and delete all references of parents.
5. Deprecate DrupalNodeMainImages and create new native image records from the path of the DrupalNodeMainImages.
6. Deprecate DrupalContentFieldImageGallery and insert the images at the start of the node revision body.

There will be tests that will fail after deleting each of the models. Those tests will need to be rewritten or restructured.

Let's talk about each part in detail:

### A. Answer to Comments

The Answer model and Comments model both are very easy to confuse, as they have a lot of duplicated code. Along with that, they require double maintenance. Hence there is a need to deprecate the answer model and merge it into the comments model. The basic approach of this would be to write rails migration to migrate all the records from answers to comments. Then delete all reference of answers and change the references accordingly.

To generate a migration we can use the command

```
rails g migration MoveColumnDataToCommentsTable
```

And in the migration file

![](https://lh4.googleusercontent.com/S9_AQ8wXCQjmcii7thYxZXPKU091wN_99bEpI2kwwHBeeu82_qMh8rWPNm6c6UnS5UT87Jz70LWzAp3KSWz4k-gjTo2jVLcNP3KYVjcOxoZ7nsbJ3bMzgYk6Q5euB2fPgg0YaxXU)

Since most of the migration work for the answers table to comments table has already been done, this step which involves the migration might not be necessary.

Comments table before:

![](https://lh6.googleusercontent.com/YYpX-7GMKBoISDpo10qM22crohKxTDqaoZK9VoK2u42RP9JCrw0_z68Iq0sLOgtdqTjfPb1lZ2IrNYhOvzShXMRaSbbwfNqQq3tDzVIHeQUiOOw4J39V18BAo0sKLk6zpw1URlH_)

Comments table after migrating the only record in answer table:

![](https://lh6.googleusercontent.com/Ns-hv15NVlcHjFl9btfco8pyAxdT_88LHZ1c9DRf-P_B97Uy3YMeaDnutYleRew9ZUe-k4WPQ3eR2FY7AimZO4WX9RqpOg6RQ6dHLUSFHhD1LIMLFio8nJsbb0SO_HTSM1HUB847)

Now that the migration part is over, we will have to delete the answer model.

The command for generating the migration is:

```
rails destroy model Answers
```

```
rails g migration DropTableAnswers
```

Now the final step will be to remove and modify(if necessary) all references like tests of the answers model from the following files:

[https://github.com/publiclab/plots2/blob/93415927cfbbf10bf42bff24eb542395e00f7103/test/functional/questions\_controller\_test.rb#L69](https://github.com/publiclab/plots2/blob/93415927cfbbf10bf42bff24eb542395e00f7103/test/functional/questions_controller_test.rb#L69)

[https://github.com/publiclab/plots2/blob/6faac02ddadd6a2d4ee03a60dee498969124604a/test/unit/comment\_test.rb#L157-L176](https://github.com/publiclab/plots2/blob/6faac02ddadd6a2d4ee03a60dee498969124604a/test/unit/comment_test.rb#L157-L176)

[https://github.com/publiclab/plots2/blob/6faac02ddadd6a2d4ee03a60dee498969124604a/app/controllers/stats\_controller.rb#L66-L72](https://github.com/publiclab/plots2/blob/6faac02ddadd6a2d4ee03a60dee498969124604a/app/controllers/stats_controller.rb#L66-L72)

### B. DrupalContentTypeMap to Nodes

There are several nodes with node type='map' which connects to the model DrupalContentTypeMap. We can instead migrate all the 'map' type nodes to the 'notes' type nodes. All the information from the DrupalContentTypeMap model can be merged into the node revision body.

This can be done with the following migration script which is generated similarly as above:

![](https://lh4.googleusercontent.com/E25qTaACb25umRtwPlIDjPazgH0BkhoubeBg0Q-VynsIl9Ee_LIOjyfGFSTD1zSpZ_6m1JHq3-1-DP1Z2EvxahMNY0xxfgWLq_3s3uDCCvKVMmqamhE_o8TNQqAwE59lg9XuVgp_)

Node table before the migration:

![](https://lh3.googleusercontent.com/aPQT4KDOR17-KtRA4L5_qHvf-BnvkqaUxKDYURE4MiBZA2cs8kn8QJaKhmX5lAHndXGE3jzo4huUty5PUzw_no_SmVdJ4FH3KGmJxWES2PvG6em1_yiJAVEiUpr5xbUSKZW5c4cS)

Node Table after the migration:

![](https://lh6.googleusercontent.com/3cbyPpZDhcpivZBnHuzNlogDJqgMSeo8HY-2BlxuT7fqwg1v8xc5hX00hP3vhFNqf8S2iq2jYlQu_rfxo8aMLn_y4UG_MX9FmNTC6kgohkU_ZlspvP9PE3mCEG4Q67FGIJMIznPJ)

Then we can deprecate the DrupalContentTypeMap model with

```
rails destroy model DrupalContentTypeMap   
rails g migration DropTableDrupalContentTypeMap  
```

Now we can remove the references of Map like the stuff in

[https://github.com/publiclab/plots2/blob/master/app/views/map/](https://github.com/publiclab/plots2/blob/master/app/views/map/)

### C. DrupalFiles to Node Body

Now we have to get rid of DrupalFiles and DrupalUploads. This one is fairly straightforward and similar to the previous one.

This involves fetching the files of each node and appending them to the bottom of the content of the respective node. We will create a similar migration file and then write the following code:

![](https://lh4.googleusercontent.com/EO_asw8DDA0t64X7DthUF6XiQsM--rrYopi3wRLeYHqRncjK7-RyCUu4hoF49mQm8MKt54cDLX-9EuM6zwQQbBXXypJLK0AADfs4gg3-jMj9V88_K2lRlcUAKIDW_hmR466BFlny)

Now each node body will be appended by the file path.

After this, we can deprecate DrupalFiles and DrupalUpload, by the following command

```
rails destroy model DrupalFiles   
rails g migration DropTableDrupalFiles

rails destroy model DrupalUploads   
rails g migration DropTableDrupalUploads  
```

Now we can remove these files and lines

[https://github.com/publiclab/plots2/blob/master/app/models/drupal\_file.rb](https://github.com/publiclab/plots2/blob/master/app/models/drupal_file.rb)

[https://github.com/publiclab/plots2/blob/master/app/models/drupal\_upload.rb](https://github.com/publiclab/plots2/blob/master/app/models/drupal_upload.rb)

[https://github.com/publiclab/plots2/blob/master/app/models/node.rb#L79](https://github.com/publiclab/plots2/blob/master/app/models/node.rb#L79)

### D. Tag Aliasing

The current Tag Aliasing system in Public Labs is very fragile, has a lot of cumbersome code and is difficult to maintain. Hence, there is a need to deprecate the tag aliasing system and migrate it to automated retagging system.

The basic approach for this would be to use Rails migration script to find the parent tag of each tag, and if it exists, then add that parent tag to all the nodes bearing the original tags. Then, we can manually add all the parent tags to the list of subtags. Finally, we can remove the parent field and all its references

So similarly, we can create a migration file and write the script as:

![](https://lh3.googleusercontent.com/CrHUqSAvtHIq5IyJ_R26fkSxIoLdvgH4Pv6F1e-lX9mk5YTbSWnHcI-YjJEjwWNExrKkurepbNfTCHo8F0Ga7lbfBuSXAAHt-qst1-02IrHj1vdfnRj2LFGkWug5OGrj2sidDZzI)

Now we can manually add the parents tag to the list of subtags here

[https://github.com/publiclab/plots2/blob/d7a021d25cca367e1162cea73863c5fe9fe9bd6a/app/models/node.rb#L850-L855](https://github.com/publiclab/plots2/blob/d7a021d25cca367e1162cea73863c5fe9fe9bd6a/app/models/node.rb#L850-L855)

Now for the last step, we have to remove all references to parents and delete the parent field. The column can be removed from the table by running the following command on the terminal

```
rails generate migration remove_parent_from_term_data parent:string
```

Few places where references for the parent column can be found are:

[https://github.com/publiclab/plots2/blob/ee46fe0adf85ba4b64fca68cd844fa05d8eeaa42/app/controllers/tag\_controller.rb#L473-L486](https://github.com/publiclab/plots2/blob/ee46fe0adf85ba4b64fca68cd844fa05d8eeaa42/app/controllers/tag_controller.rb#L473-L486)

[https://github.com/publiclab/plots2/blob/876d0fc084064aaecc23f8003630d7d1ab858fa1/test/unit/node\_tag\_test.rb#L47-L96](https://github.com/publiclab/plots2/blob/876d0fc084064aaecc23f8003630d7d1ab858fa1/test/unit/node_tag_test.rb#L47-L96)

[https://github.com/publiclab/plots2/blob/ac9c85e50c042d3922295c49a6047c3f2f591085/test/functional/tag\_controller\_test.rb#L185-L191](https://github.com/publiclab/plots2/blob/ac9c85e50c042d3922295c49a6047c3f2f591085/test/functional/tag_controller_test.rb#L185-L191)

### E. DrupalNodeMainImages to Native Image Records

There are several nodes with old drupal image type. We need to deprecate all the DrupalNodeMainImage legacy code and create a new native image record for all those images.

The basic approach for this would be to first find out all the nodes that use the old format image type, then run a migration to create a new native image from the path. Finally deprecate the drupal\_main\_image model and its references and tests.

There are over 1000 Drupal Image types in the public lab database.

The migration script for the implementation could look like:

![](https://lh6.googleusercontent.com/tkoDZivywV1TnhJSkXC5zmKoM2kRqbN4apamQ4Lb7GR2T1a-7nmxDJdinvFQrk-lNkRGi2V530C4HjJSaLbjJFOAmQmudw5c6WFVTItenXiaNxGAeR-aH_qH1PjEfeGnIVHgHq8B)

Now we can deprecate the DrupalNodeMainImage model and all the DrupalMainImage code like in:

[https://github.com/publiclab/plots2/blob/master/app/models/drupal\_main\_image.rb](https://github.com/publiclab/plots2/blob/master/app/models/drupal_main_image.rb)

[https://github.com/publiclab/plots2/blob/master/app/models/node.rb#L309-L327](https://github.com/publiclab/plots2/blob/master/app/models/node.rb#L309-L327)

### F. DrupalContentFieldImageGallery to Node

Public Lab has a very old leftover feature that shows images in a gallery on top of a note. The gallery is stored in the DrupalContentFieldImageGallery model. Now, there is a need to deprecate this model, and to ensure that the images can still be displayed, we can just insert the image code on top of the node body. So essentially, each image's HTML code will be inserted on top of the node revision body. We can do this by generating a migration script.

We can implement this by using this migration script:

![](https://lh3.googleusercontent.com/KMhtTnz_KavJ_db6qw2khWqWVNCp8M4hNTkDXU47R-421TtKW7khbQBTLt1ucHZL3_78A5yYSmhBfa7V4dF4K2fcMyO7bMu5coqY0BEUZAHkOdxStFWYWkPdXuCddh2-r1fuVPaq)

Now this migration script will put the path of each image in the gallery of the node to the start of the node body. Now, we can deprecate DrupalContentFieldImageGallery model and the table and all its references. We can then delete gallery code from files like node.rb.

Before deprecating all the above models, we should export the database to prevent accidental loss of data, which we can delete if necessary. We can export the database with the simple command like:

```
sudo mysqldump --add-drop-table -u admin -p`cat /etc/psa/.psa.shadow` dbname > dbname.sql
```

### Timeline/Milestones

### ![](https://lh5.googleusercontent.com/pgXVd05FrGobqOj7uPSblmLEDPs0PU-ZouhIl7waUJUcquZWmsWRBNY4-cEpjLMMQBumkYYqnsWtH2aKWh9UICO8QD_RWqmCY8FSUKMXj-X4SHgRCyWcI3usuPo9GmXZopj1PaK9)

### ![](https://lh6.googleusercontent.com/5qmFFjn1VAdB8JMmd7-XKCMdEAm_9q5hduepIYBreZO6CiJfg4THpnkpLOog5uO_lvmiI4rczKoCFpYYi9GT0pvyRCnx7GdsaiQhF8SAqp6sIhPlaZowxuzBePHFFeKF2dl_9Xav)

### Post GSoC

After the completion of the GSoC project, I will continue to be a part of the Public Lab community and the Open Source community. I will devote as much time as I can towards Open Source development to work with creative minds on challenging real-world problems while benefiting millions of users around the world.

### Needs

I will require guidance, support and feedback from all the mentors and every one part of the community at Public Lab.

### Contributions

I started my open source journey with Public Lab and I believe it is the most welcoming organisation for newcomers. Ever since joining this amazing community, I have made several contributions to Public Lab in the form of Pull requests, issues, helping other contributors, and welcoming the newcomers to Public Lab, and I will continue to contribute to Public Lab in the future.

Links:

- [Comments](https://github.com/search?utf8=%E2%9C%93&q=commenter%3Agaurav2699+org%3Apubliclab&type=Issues)
- [Open Issues](https://github.com/publiclab/plots2/issues/created_by/gaurav2699)
- [Merged PRs](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Agaurav2699+is%3Aclosed)
- [Open PRs](https://github.com/publiclab/plots2/pulls?q=is%3Apr+author%3Agaurav2699+is%3Aopen)

### 

### FTO issues

Public Lab is a community-driven organisation and it's a very welcoming organisation to the newcomers. The creation of FTO's really helps the beginner contributors to get started with contributing to the organisation and hence it's an integral part of Public Labs. I will try to create several FTO issues for simple tasks in this project. For example, this project involves a lot of removal of model related code after deprecating and migrating the model, and we can create one FTO issue for each section of code to be removed. There are around 15 files from where code removal is necessary, so we can have more than 20 sections of code to be removed. Thus, this results in at least 20 First Timers Only issues that can be created from this project.

### Experience

I am very passionate about programming and building new and exciting things. My favourite backend framework is Ruby On Rails and have worked on several projects in them. Along with that, I develop in Django and NodeJS too.

My few of my Notable Projects are:

• [Library Management System](https://github.com/gaurav2699/Library_Management) : A library Management System made using Ruby on Rails.

• [Auction Web application](https://github.com/gaurav2699/Auction_App) : An Auction application made using Ruby on Rails where users can bid for products posted by other users.

• [Mailer](https://github.com/gaurav2699/Mailer) : Made a Mailer interface using Ruby on Rails, where admin can send mail to selected users or filtered users based on location, etc.

• [NEAT Implementation](https://github.com/gaurav2699/NEAT-Implementation) : Studied and implemented the NeuroEvolution of Augmenting Topologies to improve AI in games and tested it in a game. Made using Javascript with Flappy Bird game as demo.

• [NES Emulator](https://github.com/gaurav2699/NES-Emulator) : Made a Nintendo Entertainment System Emulator from scratch using C++ and OpenGL.

• [Accent Classification ](https://github.com/gaurav2699/Accent-Classification-1): Made an Accent classification Application based on Geographical location using Deep learning and web scraping.

• [DBSCAN Clustering and SINR](https://github.com/gaurav2699/ClusteringAndSINR) : Implemented DBSCAN clustering algorithm in ns3 for D2D and UE nodes, and calculation for SINR values of each cluster where each D2D node starts after 1 second.

• [Multithreaded Chat room web server](https://github.com/gaurav2699/multithreaded-chatroom-webserver)- made a multithreaded chat room web server using C++ and socket programming.

All projects available on github : [https://github.com/gaurav2699](https://github.com/gaurav2699)

### Teamwork

I am a Web developer in [IRIS, NITK](https://iris.nitk.ac.in/hrms/) which is a student run organisation made in Ruby On Rails for developing and expanding a digital portal that ensures that all administrative, academic and alumni related procedures take place methodically in the college. I worked in various modules like Group Management System and Calendar Management System, where my work also included deprecating few models and migrating the data to another model, which is similar to this project.

I interned in Winter 2020 at [Ari](https://www.aricampus.co/), which is a startup in NITK Surathkal for bicycle sharing platforms. I designed and implemented the Admin Panel using Firebase and bootstrap.

I have also interned at PSUP, which is also a startup in NITK Surathkal, where I developed Authentication and User models in Django.

Along with that, I am part of the web team of [ECell, NITK](https://ecell.nitk.ac.in/) where I develop and maintain their website.

### Passion

I really love what Public Lab has been doing for the environment. I am from New Delhi, India which is one of the most polluted cities in the world, hence I really believe there is a great need for environmental awareness.

Along with that, I really love how welcoming Public Lab is to the newcomers. I have learnt a lot while contributing to Public Lab, and hope to have a great learning experience in the future too.

### Audience

This project will mainly help the developers and contributors of Public Lab, as it will make the code less cumbersome and more readable. The drupal models are confusing to the new contributors and hence removing these will help the Public lab codebase be more readable.

### Commitment

As I will be having my summer holidays during most of the coding period of GSoC, I will not have any academic work or any other commitments. Thus I can commit most of my time to Public Lab. I can easily devote around 25 hours per week for Public lab. I look forward to contributing and working with Public Lab.