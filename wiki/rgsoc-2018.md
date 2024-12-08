---
title: rgsoc-2018
tagnames: rgsoc, rgsoc-2018, to_json
author: stella
path: /wiki/rgsoc-2018.md
nid: 15827
uid: 504749

---

# rgsoc-2018

by [stella](../profile/stella)

February 27, 2018 14:51 | Tags: [rgsoc](../tag/rgsoc), [rgsoc-2018](../tag/rgsoc-2018), [to_json](../tag/to_json)

##**RGSOC PROPOSAL: Upgrade to Rails 5.1.5**
[![log.png](https://publiclab.org/system/images/photos/000/023/735/large/log.png)](https://publiclab.org/system/images/photos/000/023/735/original/log.png)

##**About us**
We are team Akaringular composed of two awesome members:

1. Rachael Kiteme
**LinkedIn: **[https://www.linkedin.com/in/rachael-kiteme-959a23119/](null)
**GitHub: **https://github.com/rachaelkiteme
**Email:**rachaelrirrie@gmail.com 
**Twitter:** @rirrieray

2. StellaMaris Njage
**LinkedIn:** www.linkedin.com/in/stellamaris-njage-0528b1103
**GitHub:** https://github.com/StlMaris123
**Email:** stellamarisnjage@gmail.com
**Twitter:** @StlMaris
**Location: **
Nairobi, Kenya

##**Project description**
Upgrade to Rails 5.1.5

The latest Rails Upgrade has come with awesome features such as:
**a)Action Cable**
Is a framework for handling WebSockets in Rails. It’s a completely integrated solution for managing connections, a channels layer for server-side processing, and a JavaScript layer for client-side interaction. It’s incredibly easy to use, and makes designing live features like chat, notifications, and presence so much easier.
The most interesting thing about Action Cable is that you get access to entire Active Record and PORO domain model in your WebSockets work. It comes with brand-new ActionController::Renderer system that makes it trivial to render templates outside of controllers, when one want to reuse server-side templates for WebSocket responses.
default development server is switched from Webrick to Puma to enable Action Cable to run in process with the rest of the app.
**b)API mode**
Rails is not only a great choice when it comes to building a full-stack application that uses server-side rendering of HTML templates, but also a great companion for the new crop of client-side JavaScript or native applications that just needs the backend to speak JSON. The new API mode makes this clearer such that when one creates a new Rails application using rails new backend --api, gets a slimmed down skeleton and configuration that assumes that one will be working with JSON, not HTML.
By default, API mode relies on #to_json calls on model classes. But one can either use Jbuilder, Active Model Serializers, or look at the new JSONAPI::Resources project for a more advanced solution.
API mode and Action Cable are the two star features of Rails 5.1.5.
others
**-test runner reports failures inline.**
**-New Attributes API**
**-ApplicationRecord **has is born as a default parent class of all models created by the generators.
**-ActiveRecord::Relation **in_batches makes it much easier to deal with record work in batches at a time to lessen memory overloads.

##**Abstract/summary**
The project still runs on Rails 4.2

##**Problem**
The projects runs on a Rails Version that is not up to date

##**Set Up**
We have already forked the code base and installed it on our machines. We have also started making contributions in order to familiarize ourselves with the project.


##**Timeline/milestones**
**March- June:  **
Get to know our mentors and understand the project better
Be active participants of all channels of communication used in the project
Contribute to the project by solving bugs, Creating features,refactoring, creating issues (especially beginner friendly) to be solved, documentation and any other task required from us by the coaches.
**July 1 - 14**
- Update controllers and their tests
- Default rendering on the controllers
- Refactor methods and classes in the controllers

**July 15 - 28**
- Update models and mailers and tests
- Refactor the methods
**July 29th - August 4th**
- Update all the configurations and ensure that the gems are compatible with all the library versions.
- Test and refactor
**August 5th - 18th**
- Update mailers, views and services.
- Update tests and refactor the code
**August 19th - 31st**
- Update Documentation
- Code reviews
**September 1 -14th**
- Routing
- Etags 
- Tests and code refactoring
**September 15th - 28th**
- Action pack: Helpers
- Active Support
- Tests and refactoring code

**September 29th - **
- Continue working on issues
- Clean up Code
- Documentation


##**Team work**
We were course mates in college and good friends. During the four year course we could do group discussions and work together in our assignments. Rails Girls Nairobi brought us together  once more and we have since learnt to work together and improve each other.  We both live in the same City and therefore meeting and working together is very convenient for us


##**Audience**
This project will most helpful to the developers. With the new upgrade, It will be easier to refactor, remove deprecation warnings and most importantly sail a long and enjoy coding with the new code bases of Rails 5.

##**Passion**
First, It is the motivation behind the project. Doing investigations on the Environment which is a very important factor for both living and non-living things to co-exist.
Secondly, It is due to the community at Public Lab. They are very welcoming and easy to work with.

##**Commitment**
We are both ready and available to give our all during the 3 months period and also after the internship. We do understand and acknowledge that this is a serious commitment and we are ready to commit our time resource for the success of the internship. We do appreciate the benefits that come along with this internship and we would not like to waste such an opportunity.








######