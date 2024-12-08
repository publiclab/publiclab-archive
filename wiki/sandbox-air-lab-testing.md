---
title: sandbox-air-lab-testing
tagnames: 
author: bhamster
path: /wiki/sandbox-air-lab-testing.md
nid: 25034
uid: 664477

---

# sandbox-air-lab-testing

by [bhamster](../profile/bhamster)

November 10, 2020 23:15 | Tags: 

If you’ve collected an air sample and want to know what chemicals are present, the next step is **sending the sample to a lab for analysis**. 

Your grab sample might be contained in a [Tedlar bag](/notes/kgradow1/06-03-2020/grab-sampling-with-tedlar-bags) (using a [bucket monitor](/notes/Shannon/05-14-2020/the-bucket-updating-and-open-sourcing-a-community-air-monitoring-tool)) or in a canister, for example. You can learn more about grab samples on this [air sampling page](/wiki/air-sampling) and in this section on “[Types of samples](/wiki/start-enviro-monitor-study#Types+of+Samples).”

<div class="alert alert-info" role="ToC">
We’ve collected some resources and guidance on lab analysis below, focusing on air grab samples. You’ll find:
<br>
<ul>
<li><a href="https://publiclab.org/wiki/sandbox-air-lab-testing#How+will+the+lab+analyze+your+air+sample?" class="alert-link">What the lab will do</a> with your sample</li>
<li><a href="https://publiclab.org/wiki/sandbox-air-lab-testing#Finding+an+environmental+lab+to+analyze+your+sample" class="alert-link">A list of labs</a> that can analyze air samples, and what kinds of <a href="https://publiclab.org/wiki/sandbox-air-lab-testing#Questions+to+ask+the+testing+lab" class="alert-link">questions to ask</a> to ensure the lab is a good match for your project</li>
<li><a href="https://publiclab.org/wiki/sandbox-air-lab-testing#Other+preparation+and+considerations" class="alert-link">Additional preparation</a> to consider before you send in a sample</li>
<li>What you can do after getting your <a href="https://publiclab.org/wiki/sandbox-air-lab-testing#Getting+your+lab+results+back" class="alert-link">lab results</a> back</li>
<li><a href="https://publiclab.org/wiki/sandbox-air-lab-testing#Community+questions+about+air+sample+analysis" class="alert-link">Community questions</a>  about air sample analysis</li>
</ul>
</div>

Much of the guidance here was drawn from two excellent resources: the original [Bucket Brigade Manual](https://publiclab.org/i/39437) from Communities for a Better Environment, and [Statistics for Action air quality resources](https://sfa.terc.edu/using/options/air.html).
<br>
<br>
<hr>

## How will the lab analyze your air sample?

The methods and equipment that the lab will use to analyze your sample will depend on the chemicals you want to detect and the kind of container holding the sample. 

_Example 1_:
To detect volatile organic compounds (VOCs) in a grab sample, many labs in the US use methods described within [EPA method TO-15](https://publiclab.org/notes/kgradow1/08-01-2020/what-is-epa-method-to-15). The testing equipment for this method applies [gas chromatography and mass spectrometry](http://www.scientific.org/tutorials/articles/gcms.html) (GC-MS) as complementary ways to determine which VOCs are in the sample and at what amount. The gas chromatographer separates the air sample into individual components, while the mass spectrometer identifies the chemical makeup of each component.  

For an air sample in a Tedlar bag, a special fitting connects the GC-MS equipment to the sample bag. Not all environmental labs have this capability, and may accept air samples in canisters instead.

_Example 2_: 
Detecting sulfur compounds in an air sample uses different methods. Standard methods include ASTM D5504 and EPA method 15/16. A gas chromatographer (GC) that separates the different components of the air sample is paired with a device that detects sulfur compounds. Example devices you might see described include a sulfur chemiluminescence detector (SCD) or flame photometric detector (FPD).

The sampling container shouldn’t have any metal exposed to the sample, as sulfur may react with the metal surface. Tedlar bags should have plastic fittings and canisters should be lined with a non-reactive material. 
<br>
<br>

## Finding an environmental lab to analyze your sample

The environmental labs and specific US locations listed in the table below are capable of testing air samples collected in Tedlar bags. 

Lab name|Locations|Tests for VOCs?|Tests for sulfur?|Estimated cost per sample|
---------------------|----------------|----------------|--------------|------------
[ALS (Australian Laboratory Services)](https://www.alsglobal.com/en)|Salt Lake City, UT; Simi Valley, CA|**✅**&nbsp; by TO-15|**✅**&nbsp; by ASTM D5504|$195 for VOCs; $250 for sulfur
[Air Technology Laboratories](http://airtechlabs.com/)|City of Industry, CA|**✅**&nbsp; by TO-15|**✅**&nbsp; by ASTM D5504|$200 for VOCs; $185 for sulfur
[Eurofins](https://www.eurofins.com/environment-testing/environment-laboratories/)|Folsom, CA; Garden Grove, CA|**✅**&nbsp; by TO-15|**❌**|$100-$135 depending on specific VOCs
[Pace Analytical](https://www.pacelabs.com/index.html)|Minneapolis, MN; Some testing in Nashville, TN|Select VOCs in Tedlar bags|**❌**|Contact lab to specify VOCs and get a quote

<br>

You could also contact local or state environmental agencies and ask them if they recommend any labs or have a list of labs they’d be willing to share.

_If you know of additional commercial, university, or other labs that can analyze samples in Tedlar bags, please [edit this wiki](https://publiclab.org/wiki/edit/sandbox-air-lab-testing) and add it to the table!_
<br>
<br>

### Questions to ask the testing lab

The chemicals that labs can test for and the methods they use will vary from lab to lab, and certifications will vary between states. Below are some example questions you might consider asking a lab to determine if they can meet your project’s particular needs.
<br>

**What compounds can the lab test for?**

+ Can the lab test for specific compounds you want to detect?
+ Volatile organic compounds (VOCs) and sulfur are common kinds of compounds to look for in an air grab sample taken near oil refineries or chemical plants. If you don’t have an exact compound you’re looking for, you can start by asking if the lab will test for these.
+ How sensitive are the tests for the compounds you’re interested in? Will they detect very low levels?
<br>

**What methods does the lab use to test air samples?**

+ What method does the lab use to test for VOCs? 
    + If they use EPA method TO-15, does the analysis cover [all 97 chemicals listed in the method](https://publiclab.org/notes/kgradow1/08-01-2020/to-15a-searchable-list-of-pollutants) or only a subset?
    + While EPA method TO-15 is commonly used for VOCs, other methods include Photochemical Assessment Monitoring Stations (PAMS) Protocol paired with EPA Method18 (see an example in the [Citizens for a Healthy Community air sampling guide](http://www.chc4you.org/wp-content/uploads/2019/10/CHC_AirSampling_Guidebook_LowRes.pdf)). 
    + You might want to ask the lab about the methods they support and suggest for any specific VOCs you’re interested in.
+ If the lab can test for sulfur compounds, what method do they use? ASTM D5504 and EPA method 15 or 16 are common methods.
+ You might want to ask for a copy of the lab’s standard operating procedures (SOP) for these methods.
<br>

**What is the lab’s certification or accreditation status?**

+ It’s not an easy question! Certifications or accreditations will vary by lab, methods used by the lab, and state. What you’ll use the lab results for can also determine which certifications matter. For example, if you plan to submit the results to a state agency, you’ll need to follow any air guidelines set in that state. The [comments in this post](https://publiclab.org/questions/stevie/10-19-2017/where-do-you-send-air-grab-samples-to-for-testing) bring up some considerations and idiosyncrasies about certifications. 
+ Ask the lab if they are certified for the methods and chemicals relevant to your project, and whether that applies to the state in which you took your sample. 
<br>

**How soon do you need to have the sample analyzed after collection?**

+ This period of time is called the “holding time.”
+ In general, sulfur samples need to be analyzed within 24 hours, and VOCs within 72 hours. 
+ Coordinate with the lab ahead of time so they know your sample is coming and will have time to get the testing equipment ready.
+ Avoid sending samples right before a weekend when many labs are closed.
<br>

**How much will analysis cost?**
 
+ The exact cost will vary depending on the specific chemicals you’re testing for. See the table above for some example cost estimates.
<br>

**Does the lab require duplicate samples?**

+ Duplicate samples are taken at the same time as your test sample, in a separate container with a separate sampling device. 
<br>

**When can you expect to receive results back?**

+ A turnaround time of 1-2 weeks is typical.
+ The importance of turnaround time will depend on the goals of your sampling:
    + If you’re sampling to raise awareness of an ongoing issue, a longer turnaround time might be acceptable.
    + If you’re sampling during specific release events and would like to notify community members, agencies, or media of results that might indicate a health hazard, a shorter turnaround time might be necessary.
<br>

**Does the lab have experience working with individual community members?**

Labs will have different amounts of experience working with industry, government agencies, professional consultants, and individual community members. It’s important to ask questions that will help you to feel comfortable working with them. For example:

+ Has the lab worked with individual community members before?
+ Can an individual set up an account with the lab?
+ Does the lab provide any support or services for interpreting results?
<br>

**What supporting materials can the lab provide ahead of time?**

+ Some labs provide instructions or guides for air sampling.
+ Most labs will provide a **Chain of Custody** record that you can print out and start filling out when you take your sample. The record will document who has held the sample as it goes from one location to another, and you’ll send it in with your sample.
<br>
<br>

## Other preparation and considerations

**Shipping your sample**: have a shipping carrier and location in mind ahead of time so you can send the sample to the lab quickly. You’ll likely need to use overnight shipping to get the sample to the lab well within the holding time (see above).
<br>
<br>

## Getting your lab results back

The lab will send you a report stating the name and amount of chemicals found in your sample. What these results mean isn’t always obvious!

+ If you have the ability and funds, it might be helpful to work with an experienced consultant or air quality engineer who can help interpret the lab results.
+ A local university or college might also have faculty who are willing to help interpret lab results.
+ **Statistics for Action** (SfA) has [accessible activities](https://sfa.terc.edu/materials/activities.html) on how to understand, analyze, and communicate your data. 
    + Example: [A First Look at Technical Documents](https://publiclab.org/notes/kgradow1/11-09-2020/a-first-look-at-technical-documents) by SfA
+ The Toxics Action Center also has a [guide to interpreting test results](https://communityactionworks.org/wp-content/uploads/Workbook4-InterpretingTestResults.pdf). 

<br>

## Community questions about air sample analysis

Have others in the Public Lab community asked a question similar to yours? Do you have a question to ask or answer to offer? Check out and post questions below.

[questions:air-lab-testing]

<br>

_Do you have any other tips or experiences to share for air sample analysis? Please [edit this wiki](https://publiclab.org/wiki/edit/sandbox-air-lab-testing) page or [post a research note](https://publiclab.org/post?tags=air-sampling,air-lab-testing)!_

<hr>

## Follow the bucket monitor on Public Lab 

**This post is part of the Bucket Monitor project.**

For more information, see our [introduction](https://publiclab.org/notes/Shannon/05-14-2020/the-bucket-updating-and-open-sourcing-a-community-air-monitoring-tool) and [project overview](https://publiclab.org/wiki/bucket-monitor-project-page).

Subscribe to the tag "bucket-monitor" to get updates when we post new material.

[Subscribe to get updates on this project
](https://publiclab.org/subscribe/tag/bucket-monitor)












