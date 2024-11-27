---
nid: 20224
title: GSoC '19: Mapknitter Rails upgrade, Phase II
path: public/static/notes/kaustubh_nair/07-21-2019/gsoc-19-mapknitter-rails-upgrade-phase-ii.md
uid: 577485
tagnames: gsoc,soc,gsoc-2019,soc-2019,gsoc-19,soc-2019-eval
---

# GSoC '19: Mapknitter Rails upgrade, Phase II

For GSoC 19, here's my update for Phase 2 of the project Mapknitter Rails upgrade. The work as been going amazing and we are quite ahead of schedule!

# Rails 5

The Rails 5 upgrade is finished completely. We've fixed all known bugs and it works perfectly locally. But we're facing some issues with asset loading on unstable, possibly due to Jenkins. Alax is looking into this issue at the moment. Hopefully this should be fixed soon and we can deploy Rails 5 to the live site!

My commits to the upgrade can be found here: [https://github.com/publiclab/mapknitter/pull/685/commits](https://github.com/publiclab/mapknitter/pull/685/commits)

# Rails 6

The Rails 6 upgrade is almost finished. We've made the configuration changes, fixed all the tests, and got it passing on Travis :) We're looking at making some enhancements such as replacing sprockets with webpacker. We're testing Rails 5 on unstable right now, so once it is ready and deployed, Rails 6 should follow along pretty soon.

Link to PR: [https://github.com/publiclab/mapknitter/pull/824](https://github.com/publiclab/mapknitter/pull/824)

# Codecov

I've helped set up Codecov on plots2 ( [https://github.com/publiclab/plots2/pull/5954](https://github.com/publiclab/plots2/pull/5954)). Also we're facing some inconsistencies on Codecov reporting on Mapknitter. The test coverage for some files unexpectedly drop to zero, even though no changes were made to those files. I've spent more than a week trying all kinds of fixes, but to no avail :/ I think this is being caused due to splitting of tests on Travis, because of which Codecov is not merging the split reports properly. We might dig around a little bit more, but I noticed a few other open source repos facing the same issue. I'm thinking of contacting Codecov support and letting them know about the issue if we don't find a solution on this.

Link to issue: [https://github.com/publiclab/mapknitter/issues/810](https://github.com/publiclab/mapknitter/issues/810)

Link to PRs: [https://github.com/publiclab/mapknitter/pull/837](https://github.com/publiclab/mapknitter/pull/837) , [https://github.com/publiclab/mapknitter/pull/830](https://github.com/publiclab/mapknitter/pull/830) , [https://github.com/publiclab/mapknitter/pull/749](https://github.com/publiclab/mapknitter/pull/749)

#### Following up on Phase 1 feedback

We have been carefully recording the changes we've made on the upgrades. Once Rails 5 is ready to be published, we'll be releasing a detailed changelog highlighting all the cool new features we've introduced in Rails 5, Jenkins and Travis for the community to have a look.

Thanks! :')

####