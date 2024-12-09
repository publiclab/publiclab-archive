---
title: 'Setting up MapKnitter'
tagnames: mapknitter, gsoc, gsoc-2014, barnstar:basic, mapknitter-development
author: justinmanley
path: /notes/justinmanley/09-01-2014/setting-up-mapknitter.md
nid: 11095
uid: 421556

---

![](https://publiclab.org/public/system/images/photos/000/006/540/original/installingMapKnitter.png)

# Setting up MapKnitter

by [justinmanley](../profile/justinmanley) September 01, 2014 20:49

September 01, 2014 20:49 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [gsoc-2014](../tag/gsoc-2014), [barnstar:basic](../tag/barnstar:basic), [mapknitter-development](../tag/mapknitter-development)

----

### How to set up MapKnitter from scratch ###

It can be tough to get MapKnitter up and running.  It should be as easy as:

1. Clone repository from GitHub
2. Install ruby dependencies from `Gemfile` using Bundler.
3. Download static assets using bower.
4. Run MapKnitter using passenger: `passenger start -p 3000`.

In practice, it's more complicated than this, in part because MapKnitter relies on old versions of ruby, rails, and other dependencies, and this causes conflicts and strange errors.

Here's what I had to do to get the [latest version of MapKnitter](https://github.com/manleyjster/mapknitter/commit/e3962af4327958ec8c476f83cd21003ce1c15730) ([refactored to use Bundler, bower, Sprockets, etc](http://publiclab.org/notes/justinmanley/08-19-2014/mapknitter-annotations-interface-refactoring-underway#Overview)) up and running on our server at [test.publiclab.org](test.publiclab.org:3000).

1. `git clone <repo> mapknitter`
2. `cd mapknitter`
3. `bundle install # install ruby gems using Bundler`
4. If you don't have nodejs and bower installed, you'll need both to run the latest version of MapKnitter.  I had trouble installing node, but finally got it to work using:
    `sudo su`
    `curl -sL https://deb.nodesource.com/setup | bash -` (as per [installing-node.js-via-package-manager](https://github.com/joyent/node/wiki/installing-node.js-via-package-manager))
    `apt-get install nodejs`
    `exit # leave sudo shell - don't want to be in there too long.`
5. `sudo npm install -g bower`
6. `bower install`
7. At this point, I tried to run MapKnitter, but got a bunch of errors.  After reading [this answer](http://stackoverflow.com/questions/15349869/undefined-method-source-index-for-gemmodule-nomethoderror) on StackOverflow, I finally figured out that these errors (complaints about source_index begin undefined for Gem:Module) had to do with incompatibilities between the version of Ruby and Rails that MapKnitter is built with and the latest version of rubygems.  The solution was:
    `rvmsudo rvm rubygems 1.8.25 --force`
    Note that the `--force` flag tells `rvm` to install version `1.8.25` of `rubygems` even though that is lower than the version currently installed.
8. Set up config files.  For me, this was as simple as:
    `cp ./config/database.yml.example ./config/database.yml`
    `cp ./config/config.yml.example ./config/config.yml.example`
9. Set up database:
    `rake db:migrate`
10. Run MapKnitter:
    `bundle exec passenger start -p 3000`
    This is if passenger is installed locally using bundler.  If passenger is installed globally, you can simply run `passenger start -p 3000`.
11. I had trouble uploading images once MapKnitter was running; passenger logged errors with the `image_science` gem, which complained that `FreeImage.h` was missing.  I fixed this by installing the freeimage library:
    `sudo apt-get install libfreeimage3 libfreeimage-dev`

All done!
   