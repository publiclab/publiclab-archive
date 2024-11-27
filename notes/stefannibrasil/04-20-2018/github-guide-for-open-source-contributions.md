---
nid: 16176
title: Github guide for Open Source Contributions
path: public/static/notes/stefannibrasil/04-20-2018/github-guide-for-open-source-contributions.md
uid: 525300
tagnames: open-source,software,developers,code,coding,barnstar:basic,github,activity:software,git,activity:developers,activity:coding
---

# Github guide for Open Source Contributions

I've always wanted to contribute to Open Source projects and I am proud to say that recently I achieved that by doing my first code contributions to some cool projects! There are lots of resources online about contributing to Open Source Projects, especially from [Github][1], but it doesn't hurt writing another one, right? And writing this Guide will help me because now I don't have to search the commands every time :)

For me, the hardest part was finding a project where I felt welcomed as a beginner and comfortable with the technology used. I was looking at the [Rails Girls Summer of Code][2] projects and after some days, I started doing contributions to Public Lab and [If me][3] organizations.

If I am in any position of giving an advice, I'd say to look out for projects that you feel comfortable and that makes sense to you and to your learning path. It probably isn't a good idea to start contributing to the Linux kernel, if you are learning how to program, for example.

You can take a look at the open Issues and choose one that you want to work. If you think you can work on an Issue, for example, but need to clarify some things, go ahead and ask the team! :)

Another thing that is helpful in this discovery adventure is to read the documentation. Providing a careful documentation usually says a lot about the team communication and organization.

I like to follow these two guides from [Lucas Mazza][4] and [Thoughtbot][5] to help me with Git in my contributions. I recommend you to read these two before going further.

## Setting our application

Now that we have selected the project and selected an Issue to work on, we must go to their repository and click on the 'Fork' button:

![image description][6]


This will create a new repository in our Github Account with the current state of the application. You can see it by clicking on your account's repositories. That's the repository where we'll add our changes, instead of playing with the original. This is good because it guarantees that we'll never affect the original repository, so we won't be afraid of breaking something and focus on our work :)

Now, on our local machine, we clone our forked project (remember to modify the personal info with yours):

```
git clone git@github.com:stefannibrasil/plots2.git
```

The next step is to make sure everything is running okay, following the project Installation guide. After that, we can go ahead and create a new branch in our forked repository:

```
git checkout -b 'my-new-branch'
```

It's up to you if you want to create a new branch or work on your local master. I prefer always having a branch for each new feature.

Now we have everything ready for our actual work! Remember to write good commit messages and provide good context for the reviewers while doing them. This post[2] helped me a lot with that :)

## Submitting our changes

When we are done with our changes, the next step is to open a Pull Request to say that we want to merge our changes into the original code. Normally, visiting the Github project page after pushing changes from a local branch will put a notice with the branch name.

I find it easier to open the Pull Request just clicking on 'Compare & Pull Request':

![image description][7]


But if that doesn't happen, you can do that by clicking on 'New pull request' and search for your branch there.

**Note:** If you aren't done yet but you want to know if you are on the right path, you can always open a new PR to get some feedback. Just add a '[WIP] - Add new feature' to its name and ask for a review.

## Keeping our forked repository updated

Because other people are making modifications to the code at the same time, our forked repository needs to get these changes frequently, so we will always have the updated code to work on.

We can do that by adding the project repository as one of our remote repositories. We can copy the link provided in the original repository 'clone or download' button and run the following command:

```
git remote add upstream git@github.com:publiclab/plots2.git
```

Now if we run
```
git remote -v
```

we should have two remote repositories listed, ours and the project's:

```
origin git@github.com:stefannibrasil/plots2.git (fetch)
origin git@github.com:stefannibrasil/plots2.git (push)
upstream https://github.com/publiclab/plots2.git (fetch)
upstream https://github.com/publiclab/plots2.git (push)
```

Now run these on master:

```
git fetch upstream # to retrieve new work done by ther people
git rebase upstream/master # to rebase upstream into your master
git push origin master
 ```

If that ran smoothly, you must see that your forked repository is even with the original:

![image description][8]


If you've created a branch as I did, run the following command to also rebase your branch with the updated master:

```
git checkout my-new-branch
git rebase master/my-new-branch
```

Now we have our repository updated and that will decrease the number of conflicts in the future. If conflicts happen, it's not the end of the world. Git usually provides helpful messages about the errors to guide you while solving them (and Google, always).

## Some notes
After doing your first Open source contribution you'll likely find out that the code that you change is just half of the work. You need first to communicate with the team, see if you understand the problem and ask for help, for example.

But don't worry if you don't feel ready to do any of this. **Don't let that hold you back**. If the project you choose is beginner-friendly, the team will help you with anything that you need. Besides, you'll learn a lot from this experience, trust me.

Another note that I want to share is a video from [Eileen][9]. She talked a little about her Open Source experience developing a [feature for Rails 5.1][10].

And that's it for today. I hope you find this Guide useful. If you have anything to suggest or add, please, add a comment below :)

  [1]: https://opensource.guide/how-to-contribute/
  [2]: https://teams.railsgirlssummerofcode.org/projects
  [3]: https://github.com/ifmeorg/ifme/pulls?utf8=%E2%9C%93&q=%20is:pr%20author:stefannibrasil
  [4]: http://afterhours.io/git-field-guide.html
  [5]: https://robots.thoughtbot.com/keeping-a-github-fork-updated
  [6]: https://publiclab.org/system/images/photos/000/024/668/large/fork-example.png "fork-example.png"
  [7]: https://publiclab.org/system/images/photos/000/024/669/large/pull-request.png "pull-request.png"
  [8]: https://publiclab.org/system/images/photos/000/024/670/large/updated_repository.png "updated_repository.png"
  [9]: https://twitter.com/eileencodes
  [10]: https://www.youtube.com/watch?v=sSn4B8orX70