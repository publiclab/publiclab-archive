---
title: "GSoC19: Mapknitter Rails Upgrade "

tagnames: 'mapknitter, gsoc, soc, gsoc-2019, soc-2019, gsoc-19, soc-19, gsoc-2019-final-report'
author: kaustubh_nair
path: /notes/kaustubh_nair/08-26-2019/gsoc19-mapknitter-rails-upgrade.md
nid: 20667
uid: 577485

cids: 25382,25402

---

# GSoC19: Mapknitter Rails Upgrade 

by [kaustubh_nair](../../../profile/kaustubh_nair) | August 26, 2019 03:07

August 26, 2019 03:07 | Tags: [mapknitter](../tag/mapknitter), [gsoc](../tag/gsoc), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019), [gsoc-19](../tag/gsoc-19), [soc-19](../tag/soc-19), [gsoc-2019-final-report](../tag/gsoc-2019-final-report)

----

Hi all, I've been working with Alax Alves together on the mapknitter rails upgrade.here's a final report of all the work  done during time.

  
Increasing test coverage: We've increased mapknitter's test coverage from 50% to ~72%. Also since the introduction of rails 5, I've configured system tests and we've implemented some for testing javascript as well!

PR for increasing test coverage: https://github.com/publiclab/mapknitter/pull/610, https://github.com/publiclab/mapknitter/pull/615, https://github.com/publiclab/mapknitter/pull/951

  
Yarn upgrade: After the Rails 4 upgrade by Cess, I switched mapknitter from bower to yarn for javascript dependencies.   

PR: https://github.com/publiclab/mapknitter/pull/702, https://github.com/publiclab/mapknitter/pull/678

  
Rails 5 upgrade: I upgraded Mapknitter to rails 5 along with Alax. This took a significant amount of time since we skipped a few versions and went directly to rails 5.2.3, but it definitely made the process easier!   

PR: https://github.com/publiclab/mapknitter/pull/891

  
Rails 6 upgrade: Rails 6 upgrade was quite easy. Although we've finished it we don't have it merged yet into the main branch. This is because the debian package for rails 6 isn't out yet so we can't deploy it to the production site. It should be out once rails 6 becomes stable so it should happen soon!

PR: https://github.com/publiclab/mapknitter/pull/824

  
Other minor fixes:

I've been helping merge some dependabot PRs for upgrading javascript here: https://github.com/publiclab/mapknitter/pull/955, https://github.com/publiclab/mapknitter/pull/954, https://github.com/publiclab/mapknitter/pull/945, https://github.com/publiclab/mapknitter/pull/962, https://github.com/publiclab/mapknitter/pull/947

  
Setting up dangerbot: https://github.com/publiclab/mapknitter/pull/926

  
Future plans: Since Rails 5 is mostly stable, I'm going through the dependabot PRs and testing them. Also I'll be implementing some minor system tests for better coverage https://github.com/publiclab/mapknitter/pull/926

  
It has been a great summer at publiclab! Special thanks to @alaxallves, @warren, @sashadev-sky and others at Mapknitter!