---
title: Getting help in a coding project
tagnames: gsoc, code, software-outreach, soc, gsoc-2019, soc-2019
author: warren
path: /notes/warren/06-27-2019/getting-help-in-a-coding-project.md
nid: 19900
uid: 1

---

# Getting help in a coding project

by [warren](../profile/warren) June 27, 2019 21:47

June 27, 2019 21:47 | Tags: [gsoc](../tag/gsoc), [code](../tag/code), [software-outreach](../tag/software-outreach), [soc](../tag/soc), [gsoc-2019](../tag/gsoc-2019), [soc-2019](../tag/soc-2019)

At times we've all been stuck even in trying to help out, because of the complexity of a project. But we have a great community who's willing to offer support! I wanted to share some thoughts on how **good documentation of a problem** can help when asking for help!

The biggest issue with asking for help is that people looking into a problem for the first time need to get **oriented** and need enough information to help you out.

With this in mind, you may be able to get better and faster help with a few tips:

1. **Clearly document the your goal**, as well as what is blocking it: what did you expect to see? What did you actually see, and where? Was it an error message or did something just not happen? A screenshot or Gif could help, and/or console output!
2. **Illustrate your errors:** show code in a pull request (PR), in context. Use Travis tests that run on a PR to demonstrate exactly the issue, using good permalinks to point at exact lines, and/or copying the errors into a comment.
3. **Help people reproduce what you're seeing:** either by linking to the live site, linking to a GitHub Pages demo on your own repository, or giving instructions to running the code in your PR.

Here's an example of inline quoting of lines of code:

  
![image description](/i/33300.png)

You can do this by using the "..." menu in the left margin while viewing a file in GitHub:![image description](/i/33301.png "Screen_Shot_2019-06-27_at_5.45.54_PM.png")

  
This will help reviewers "sync up" to the problem quickly and get to the problem solving faster.  

But there's more! Once you have the above documentation clearly presented, you can reach out to people in other projects as well, even outside Public Lab, to ask for help.

For example, see this concise but very clear ask to the folks in the Grape project:

[https://github.com/ruby-grape/grape/issues/1890](https://github.com/ruby-grape/grape/issues/1890)

which links back to a very carefully documented issue in plots2:

[https://github.com/publiclab/plots2/issues/5951](https://github.com/publiclab/plots2/issues/5951)

Which includes code links, excerpts, screenshots, links to live code running on the live site, and gives people everything they need to understand the problem and try it out themselves.

Finally, if you're really not sure what is causing the error, consider **writing a test** to demonstrate the failure so others can reproduce it.

And if the problem is blocking you, try to develop more parallel work strategies so that one blockage (though well documented as above) doesn't stop the whole project! Keep up the great work, and share your own ideas below!