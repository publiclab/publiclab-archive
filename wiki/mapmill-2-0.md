---
nid: 10623
title: MapMill 2.0
path: public/static/wiki/mapmill-2-0.md
uid: 1
tagnames: software,mapmill,mockups,wireframes
---

# MapMill 2.0

##NWF Grant Application for MapMill Redevelopment:

Public Lab and Northeastern' Social Science Environmental Health Research Institute received a grant to redevelop Map Mill, inspired by the work of Open Street Maps Humanitarian Team and FEMA's collaboration using the tool during Hurricane Sandy. Here are the aims of the grant.

###Preparing Crowdsource Disaster Response to Fracking Emergencies
Proposal to
**New World Foundation**

Public Lab and SSEHRI propose to develop and test an innovative, crowd source infrastructure for rapid public responses to emergencies related to the Shale Gas Industry. Online open source tools are transforming disaster response by enabling the public to augment federal agencies in providing and directing assistance. Using a Public Lab tool, during Hurricane Sandy, Open Street Maps Humanitarian Team (HOT OSM) collaborated with FEMA to organize 6000 online volunteers to sort and map images of the damage. The project helped to rapidly identify damaged areas and target FEMA’s relief effort. We propose to further develop this infrastructure into a stable crowdsource tool to help with disaster response related to fracking. 

###Aim 1: Technical Infrastructure Development
Project Lead: Public Lab
1.1 Further develop and stabilize MapMill for crowd sorting of images of emerging disasters. Public Lab’s existing image sorting tool MapMill will be developed for emergency response by enabling rapid uploading of large image sets, tagging features for sorting the images and export of crowd results into easily readable maps.
1.2 Develop a Fracking Disaster Response team with one member from SSEHRI, Public Lab and OSM tasked to facilitate use of MapMill for the next emergency event.

###Aim 2: Documentation and Testing of Infrastructure
Project Lead: SSEHRI
2.1 To assist in integrating MapMill into FEMA’s disaster response more systematically, we will interview and network with OSM and FEMA members who participated in the Hurricane Sandy crowd sourcing efforts. These interviews will inform the project design and implementation.
2.2. To pilot test and evaluate MapMill emergency response infrastructure, we will test interface with civil air patrol images of Colorado’s 2013 flooding by coordinating a volunteer group of oil and gas activist to sort the images. The September 2013 flooding in Colorado caused open-air oil and gas waste pits to overflow and has damaged oil and gas facilities. This Aim will validate MapMill against available regulatory estimates of the damage. 

Broader Impacts: The increasing frequency of severe weather events and underfunding of public agencies requires the development of low cost, effective responses to emerging environmental disasters that produces data useful to communities, academics, nonprofits and regulatory agencies. Building on the collaboration of between FEMA and OpenStreet Map’s using MapMill during Hurricane Sandy, this project tests, expands, documents, and evaluates a rapid mapping approach that could be expanded affordably to other cases of disaster damage


###MapMill Hurricane Sandy Tagging Interface
[![MapMill_Sandy_Tagging.jpg](https://i.publiclab.org/system/images/photos/000/006/025/medium/MapMill_Sandy_Tagging.jpg)](https://i.publiclab.org/system/images/photos/000/006/025/original/MapMill_Sandy_Tagging.jpg)

###Review of Similar Projects
https://docs.google.com/presentation/d/1ohABt2dFJjCVc3wNvSetSPwbLjZoitsN8Uf8zOLRX28/edit#slide=id.p12

###**Design Recommendations**
https://docs.google.com/document/d/1K0xBneDnw8sjnMmQ-iAH-eziIAYTCIKhZX0jc3qa2BU/edit



###Wireframes:


[![IMG_20140627_095708_2.jpg](https://i.publiclab.org/system/images/photos/000/005/006/large/IMG_20140627_095708_2.jpg)](https://i.publiclab.org/system/images/photos/000/005/006/original/IMG_20140627_095708_2.jpg)


[![IMG_20140627_095716_2.jpg](https://i.publiclab.org/system/images/photos/000/005/007/large/IMG_20140627_095716_2.jpg)](https://i.publiclab.org/system/images/photos/000/005/007/original/IMG_20140627_095716_2.jpg)

##Workflow
1) Front Page is the landing page for a user

2) If the user wants to upload a new set

2.1) He inputs the info into the form

2.2) He clicks "Upload"

2.3) If he is not yet logged in, needs to login via PublicLab's OpenID system

2.4) Gets to the "Upload Page"

2.4.1) Selects (or drag-and-drop) pictures to upload

2.4.2) Thumbnails are generated

2.4.3) User selects pictures to be uploaded

2.4.4) User clicks "Upload selected"

2.5) User lands on "List view of site"


3) Clicking on an image in List view allows "Per image" visualization


4) Other user arrives at home page
4.1) Can browse sites
4.2) Can select sites, lands on "List view of site"
4.3) Can use "Per image" visualization

###Questions
- Should there not be a per image visualization BEFORE uploading, so to preview, select or discard images? If yes, how does this "plug in" into the workflow?
- Is it permitted to upload pictures if there is no existing PublicLab OpenID for the user in question?
- Are there other identities (other OpenID providers) allowed?
- Is the "61% done" graphic in the "List view of site" referring to the upload progress?
- "Share" will share what? The link to the whole "site", an image, both?
- "Share" should share where? (Facebook, G+, Twitter, LinkedIn?)
- The current functionality of showing (random?) pics on the landing page, where a user can qualify an image, is not needed anymore?
- What about modifying an existing set? What functions would be allowed? (Edit Metadata, upload more pics, delete pics, etc?)

 

