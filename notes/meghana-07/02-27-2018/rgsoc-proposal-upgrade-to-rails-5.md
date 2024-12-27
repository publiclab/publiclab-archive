---
title: "RGSoC proposal: Upgrade to Rails 5"

tagnames: 'software, gsoc, soc, response:13975, gsoc-2018, soc-2018, rgsoc-2018, soc-2018-proposals'
author: meghana-07
path: /notes/meghana-07/02-27-2018/rgsoc-proposal-upgrade-to-rails-5.md
nid: 15826
uid: 526196

---

# RGSoC proposal: Upgrade to Rails 5

by [meghana-07](../../../profile/meghana-07) | February 27, 2018 14:03

February 27, 2018 14:03 | Tags: [software](../tag/software), [gsoc](../tag/gsoc), [soc](../tag/soc), [response:13975](../tag/response:13975), [gsoc-2018](../tag/gsoc-2018), [soc-2018](../tag/soc-2018), [rgsoc-2018](../tag/rgsoc-2018), [soc-2018-proposals](../tag/soc-2018-proposals)

----

---------

## About me

Names: Ritika Gupta and Meghana Chaudhary

Affiliation: The Northcap University, Gurgaon, Haryana

Location: Gurgaon,India

Email: [ritikagupta1998@gmail.com](mailto:ritikagupata1998@gmail.com), [meghanach98@gmail.com](mailto:meghanach98@gmail.com)

Github: https://github.com/ritika98, https://github.com/meghana-07

Both of us are second year students pursuing B.tech in Computer
Science Engineering.

## Project description

### Abstract/summary (<20 words):

To migrate the current project from Rails 4 to Rails 5 to keep up with the dependencies.

### Problem

There
is a need to upgrade from Rails 4.1 to Rails 5.0 because:

Improved
Performance

Faster
than previous versions

System
tests (baked-in support for writing Capybara tests)

Yarn
Support (Managing JavaScript dependencies)

Symbol
garbage collection

Parameterised mailers

Encrypted
secrets

Less memory usage

Rails API(The
rails-API gem has been merged into Rails. It allows you to generate API-only
Rails app and strips out all the middleware that you don't need in an app that
generates JSON responded instead of HTML.

Ruby
on Rails 5 gives us many new features that we can use for development.

### Timeline/milestones

Week 1 (July 1 to July 8)

Review and understanding
the codebase of the website.

Week 2 (July 9 to July 15)

Testing of code

Week 3 (July 16 to July 22)

Updating ruby to
2.3.1(Rails 5 require Ruby 2.2.2 or greater)

Updating gem dependencies
to Rails 5

Updating Rail binaries and
configurations)

Week 4(July 23 to July 29)

Generating the db/Schema
file again(Rails moved oreign and unique indexes to
inside the create\_table
methods)

Updating the new
application classes(ApplicationRecord(models)

• ApplicationMailer(mailers)

• ApplicationJob(jobs)

Validation changes to
Belongs to relations(Rails 5 has changed the belongs\_to relation
to require presence by default.)

Week 5 (July 30 to August 5)

Halt Callback chain-throw(:abort)

(Active Record or Active
Model callbacks no longer halt when returning
false.)

Deprecaution warning for
Hashes (Parameters do not inherit from Hash in Rails 5)

Testing HTTP methods (using
keywords and positional arguments)

(ActionController::TestCase has changed, so on your controller
tests or request tests, even if you
use rspec-rails)

Week
6 (August 6 to August 12)

Rails Controller Testing

XML
Serialization

Autoloading
check

Wildcard
matching for Template dependencies

Week
7:(August 13

to August 19)

Changing
default test case

Changing
RecordTagHelper to external gem

Removing
unwanted gems

Changing
protect\_from\_forgery defaults

Using
byebug instead of debugger

Access
to config/secret.yml using strings to be changed

Week
8: 2 weeks(August 20 to September 2)

Making
changes to the documentation

Testing
the code

Fixing
tests and deprecauted features

Week
8: (September 3 to September 9)

Reviewing
the changes done

Final
testing

Week
9:(September 10 to September 16)

Final
submission of project and code evaluation

We will update the code base before start upgrading to Rails
5 .

Deprecations before upgrading to rails 5 are as follows:

Active Record:-

1\. Removed `quoted_locking_column` method as it isn't used anywhere.

2\. Removed `ConnectionAdapters::SchemaStatements#distinct`, as it is no longer used by internals.

3\. Deprecated `rake db:test:*` tasks as the test database is now automatically
maintained.

4\. Deprecated unused `ActiveRecord::Base.symbolized_base_class` and `ActiveRecord::Base.symbolized_sti_name` without replacement.

Active Model:-

`Validator#setup` should be done manually in the validator's constructor.

Active Support:-

1\. Explicitly convert the value into an AS::Duration,i.e. `5.ago` =\> `5.seconds.ago` (Deprecated `Numeric#{ago,until,since,from_now}`).

2\. Require `active_support/core_ext/object/json` instead of the require path `active_support/core_ext/object/to_json`.

3\. Removed `ActiveSupport::JSON::Encoding::CircularReferenceError`. This feature has been extracted into the [activesupport-json\_encoder](https://github.com/rails/activesupport-json_encoder) gem.

4\. Removed `ActiveSupport.encode_big_decimal_as_string` option. This feature has been extracted into the [activesupport-json\_encoder](https://github.com/rails/activesupport-json_encoder) gem.

5\. Deprecate custom `BigDecimal` serialization.

### Needs

All the documentations required for upgrading are available
online. We will also be needing a mentor to guide us.

### First-time contribution

Both of us are complete beginners to open source contribution.Some of the first time contributions that we have are as follows:-

https://github.com/publiclab/plots2/pull/2566 , https://github.com/publiclab/plots2/pull/2559  

### Experience

### 

We have significant knowledge about C,C++,Java and Data
structures.Currently we are studying Ruby, and also learning rails and
JavaScript. Both of us are complete beginners to open source contribution and
we feel public lab would be best for us as a stepping stone towards open source
contributions.

### Teamwork

We are roommates since the first day of college. We have worked
together on 2 small college projects. So both of us have a great
understanding.Through this project, we really wish to further develop our
skills and enter the world of coding full time.

---------

### Passion

Public Labs allows one to learn without any barriers and to
connect with people having new ideas, creative projects worldwide. It motivates
us to make more and more contribution.

### Audience

Both of us feel that bringing technologies and techniques together
would make the world a better place to live in for everyone.

### Commitment

If we get selected, we would be completely devoted to our project.