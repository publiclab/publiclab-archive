---
title: First-timer-only release workflow
tagnames: software, developers, seeks:replications, activity:software, soc, activity:soc, lon:77, first-time-poster, lat:12, zoom:6
author: sagarpreet_chadha
path: /notes/sagarpreet_chadha/10-20-2020/first-timer-only-release-workflow.md
nid: 24773
uid: 725408

---

![](https://publiclab.org/public/system/images/photos/000/041/169/original/Screenshot_2020-10-20_at_1.54.53_PM.png)

# First-timer-only release workflow

by [sagarpreet_chadha](../profile/sagarpreet_chadha) October 20, 2020 08:26

October 20, 2020 08:26 | Tags: [software](../tag/software), [developers](../tag/developers), [seeks:replications](../tag/seeks:replications), [activity:software](../tag/activity:software), [soc](../tag/soc), [activity:soc](../tag/activity:soc), [lon:77](../tag/lon:77), [first-time-poster](../tag/first-time-poster), [lat:12](../tag/lat:12), [zoom:6](../tag/zoom:6)

----

# What is this program about?

As Outreachy season is around the corner, we wanted to come up with an interesting approach to develop industry-standard skills for interns and to make their internship period more fun!

The program will help the interns develop skills on how the versions of a software are maintained and what all steps are needed to make sure that the software package is published correctly and at the same time ensuring backward compatibility is maintained so that any production code does not break!

This program will also make sure that there is no integration problem while bumping a library in plots2 and making the entire process seamless.

## How will this work?

### ( For Javascript based projects)

1. At the start of each 2 week period, we will have a meeting and plan according to the proposals, all the features we plan to do in the coming 2 weeks.
2. For that 2 weeks, we will appoint a DEPLOYMENT LEAD (DL), whose job will be to make sure all PR' planned to go LIVE in that week are reviewed and merged to the main branch.
3. DL can tag other reviewers or/and review themself
4. Only permissions we need to give to interns will be that of adding labels, tagging reviewers.
5. While reviewing the PR, the DL has to make sure that the code in that PR has proper unit/functional tests coverage.
6. Once all the PR's planned for that week are merged to the main branch, the DL can publish the new version of that project to NPM.
7. For the first few iterations, it will be mandatory to get the PR reviewed by Outreachy mentors so that they can merge the PR.
8. After the first 2-3 iterations of each DL, we can give the interns the merging rights as well if we feel they are comfortable with the workflow.
9. In the first week of each new Deployment Lead, the intern has to first do a PATCH release and document it. This will make sure that the DL gains some experience by doing a safe release and is ready for doing minor/major releases.

How to choose a new version of the project?

Before we deep dive into how a package is published, it is of utmost importance to understand the versioning of packages. Below are some FAQs that will help us understand the DO's ✅ and DON'Ts ❎ of versioning and some common scenarios encountered after a release is made to the world.

### What are breaking changes and why we should not do them frequently?

- Breaking changes means when we do a major release by changing the X number in X.Y.Z (ex: 15.6.2 to 16.0.0)
- When downstream users upgrade the package with the new major version, then their code will break!
- Major releases can contain architectural changes, new features, and bug fixes.
- Breaking changes are inconvenient for everyone, so we try to minimize the number of major releases -- for example, React 15 was released in April 2016 and React 16 was released in September 2017; React 17 isn't expected until sometime in 2020\.
- Instead, we release new features in minor versions. That means that minor releases are often more interesting and compelling than majors, despite their unassuming name.
  - See how React maintains versioning [here](https://reactjs.org/docs/faq-versioning.html).
  - See example of webpack's recent major release ([10/10/2020](https://webpack.js.org/blog/2020-10-10-webpack-5-release/) / [tweet](https://twitter.com/TheLarkInn/status/1315062117221851136)), which contains architectural changes.

### When can we do Major release?

- if there's sure to be only a single downstream user.
- if everyone on both teams is aware and are in agreement for a major release!
- If there hasn't been a major release for a long time and doing a major release will make
  - better architectural changes and
  - will make it easy to maintain the project
  - Open possibility of adding more features which would have been difficult to do so without this major release.
- if all documentation is updated with the changes.

### Difference between Minor and Patch release?

- When releasing new features or non-critical bug fixes, we do a minor release by incrementing the Y number in X.Y.Z (ex: 15.6.2 to 15.7.0).
- When releasing critical bug fixes, we do a patch release by incrementing the Z number in X.Y.Z (ex: 15.6.2 to 15.6.3).
  - More details here:[https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)

### I have done a Major/ Minor release but there is some bug introduced now, what to do?

- It is normal to have bugs 🐛 introduced after doing a release especially after a major release.
- Make sure after you figure out the bug, you immediately do a PATCH release and document the BUG FIX.
- Example: We did a minor release of [v2.1.0](https://github.com/publiclab/plots2/pull/8135) in PL.editor project, but after doing this release we found a bug which was solved immediately in this [PR ](https://github.com/publiclab/PublicLab.Editor/pull/587).
- Finally we bumped the version to v2.1.1 [here](https://github.com/publiclab/PublicLab.Editor/pull/588) and did a PATCH release.
- See the picture below describing how only bug fixes were done to make the latest minor release stable. Source:[https://github.com/webpack/webpack/releases](https://github.com/webpack/webpack/releases)

![](https://lh3.googleusercontent.com/8PVqRBQX-sL4hYIgZgwvkB8BTkpnVpoOPwkT6YW_PCGGr6KGySVQXh5MXZZefLdQtJ8nAw3MxyVxcCvAq7lyh6194ABCBAtHrlHn2qhVR5g9juw69O8IxfMhQV2IjxivpACCb4AY)

## How to publish?

![](https://lh4.googleusercontent.com/tMDbgVjE5fMXzzngQ8Y07KzDaHSmnOnTe1iDBu4zhpHGl7pQ81tNGmPHLJBdV4x6X_LItSz_rUpvGtIN5PwOj4Q4GWQ8Qkne2YQxpdwh7awxHAQ3_POLDfUlTgGq06RKEDO3e5cn)

1. Increment the version in package.json from x.y.z to:

  - x+1.y.z if there are major changes like new features or change in syntax, etc.
  - x.y+1.z if there is a minor change like changing in some logic or upgrading dependent libraries maybe, etc
  - x.y.z+1 if there are some patches to be made like some bug is solved, etc
    - Read more here: [https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)
    - Check the official releases made by [Webpack](https://github.com/webpack/webpack/releases)

2. Make sure package-lock.json is changed if some dependencies are changed in package.json.
3. Make sure your changes are there in the dist folder.
    -  Run the build command like grunt build or npm run-script build.
4. That's it for PL.editor repo! Let's publish to npm via npm publish command.  
     - PS: this will publish the dist folder from your local and not from github.
     -  You need to create an account in npm [here](https://www.npmjs.com/signup).
     - Sign in using terminal: npm login
     - Enter your username, password and email
     - Run npm publish command
5. Make a release using npm run-script create-release
     -  This will automatically create a pretty release mentioning the authors and their PR's. More details about this command [here](https://github.com/publiclab/PublicLab.Editor/pull/617).
 ![](https://lh5.googleusercontent.com/bmJvKlMwCu0GS6X11ltU8IyxoW045UDtLBKcgmG5UVL8jIOYjJ6FGPnr3zzivXj7yHcJEo2fAQHuU8bWE5l-sTZaTdnogqAvkSEbRJl5istnMqzpICyPybTMopaoFq89yzd0LyQT)
   -  Well done till now, you have successfully published the changes to npm.      
    - You may tweet about it :)
6. Once published to npm, [dependabot](https://dependabot.com/) will make PR automatically in [plots2](https://github.com/publiclab/plots2/) to upgrade the PL editor version in package.json.
7. Assuming that proper versioning is done in PL.editor, then for minor and patch releases all checks will pass 💯  
   -  But for major release, the checks might fail which is normal 👍 .
   - For major releases, if new changes are not backward compatible then you have to do the changes in these files:
   - [https://github.com/publiclab/plots2/blob/main/app/views/editor/rich.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/editor/rich.html.erb)
8. For major releases, check into the dependabot branch or make a new PR having package upgrade changes.  
After manually changing the version in package.json, make sure to run npm install -\> this will install the latest PL editor to your local node\_modules folder.  
Now make sure that the breaking change is also added to your PR like
 -  syntax change, or
 -  if the id of some div is changed in PL.editor then the same change has to be done in [rich.html.erb](https://github.com/publiclab/plots2/blob/main/app/views/editor/rich.html.erb) file.
9. All done now 🎉 , make sure this PR is reviewed and then the integration is complete .
10. Once this PR is merged to plots2, in the next production release by Jeff and Icarito the changes will be LIVE :)
11. Celebrate on twitter? Share your username and describe your contribution in a single sentence, and @publiclab will give you a shoutout! 😍

## Week of Deployment Lead:

<Will have DL name and week for which they are incharge once Outreachy period starts\>