---
title: 'Environmental data management & analysis tools'
tagnames: software, data, data-management, environmental-data, data-analysis, platforms, data-logging-visualization, data-visualization, data-visualization-tool
author: warren
path: /notes/warren/02-17-2017/environmental-data-management-analysis-tools.md
nid: 13937
uid: 1

---

![](https://publiclab.org/public/system/images/photos/000/019/578/original/Screen_Shot_2017-02-16_at_7.44.44_PM.png)

# Environmental data management & analysis tools

by [warren](../profile/warren) February 17, 2017 01:13

February 17, 2017 01:13 | Tags: [software](../tag/software), [data](../tag/data), [data-management](../tag/data-management), [environmental-data](../tag/environmental-data), [data-analysis](../tag/data-analysis), [platforms](../tag/platforms), [data-logging-visualization](../tag/data-logging-visualization), [data-visualization](../tag/data-visualization), [data-visualization-tool](../tag/data-visualization-tool)

----

A few fellow staff members asked me to do a survey of different platforms available for storing, managing, and sharing environmental data, as well as for doing analysis; after a lot of storyboarding to develop different in-depth specifications, I began organizing a list of existing software to see how well it met these needs.

While this is a really broad set of questions, I tried to develop a set of features which folks at Public Lab might need for specific cases. I also had a lot of great input from other staff in compiling this set of needs, so thanks!

I also only looked at programs that would (ideally) not take programming skills to use, although one exception was Phant -- because the (unfinished) [Grapherate prototype](https://github.com/jywarren/grapherate/) was designed as a front-end for it.

The software I looked are:

- [photosynq.org](http://photosynq.org/)
- [isenseproject.org](http://isenseproject.org/)
- [codap.concord.org](http://codap.concord.org/)
- [phant.io](http://phant.io/)
- [plot.ly](http://plot.ly/)

### Software

Here they are! Please leave a comment if there are others you'd like to add, and any help in actually filling in the details, or in correcting mistakes, is welcome. For some of these it wasn't easy to say yes or no, but I took notes on my best attempt. Also, for some of these the answers may change as the software continues to be improved!

| Software |  | Photosynq | iSense | Codap | Phant | Phant + Grapherate (as spec'ed) | Plotly |
|----------|--|-----------|--------|-------|-------|---------------------------------|--------|
|          | Notes | Some difficulty assessing as it's designed more narrowly for leaf measurements, though with programming it can be more flexible. |        |       |       |                                 | $396/y but open source libraries |
| Audience | Programmers, field collection, scientists, community groups ...? | Programmers, scientists | Programmers, scientists, students, citizen scientists | Students, teachers | Programmers | Community groups, programmers, scientists | Scientists |
|          | Easy to use? | Hard to set up, easier to use | Hard to set up, easier to use | Hard to set up, easier to use | No    | Yes                             | Good web UI |
| Data type | CSV upload | API only  | Yes    | Yes   | Programmatic only, no UI | Yes                             | Yes    |
|          | Live from sensors | No        | Maybe with extra work | Maybe with extra work | Yes   | Yes                             | Yes    |
|          | Photo data | Upload, no analysis | Upload, no analysis | Maybe with extra work | No    | No                              | Programmatic only, no UI |
|          | Bulk photo upload | No        | No     | No    | No    | No                              | No     |
|          | Location data | Yes       | Yes    | Yes   | Possible with extra work | Yes                             | Yes, but not from photos |
|          | Lab results: csv, pdf (hard to answer without sample data) | No        | No     | No    | No    | No                              | No     |
|          | Form UI customization for data entry | with JavaScript | Yes    | Exploratory, educational | No    | Yes                             | No     |
| Support  | Documentation | Good for leaf analysis | Great video series | Thorough + legible docs | API docs, for programmers | No                              | Yes    |
|          | Long-term support infra/community | Unclear   | Institutional | Institutional | Sparkfun, healthy community | Nothing hosted, but debug/maintenance | Probably, but commercial |
|          | Independent of single host | Open source | Open source | Open source | Open source | Open source                     | Significant portions are open source, but not UI |
|          | Discursive peer support | Forums + commenting, some not fully implemented | No     | No    | No    | No                              | Some, via StackOverflow |
| Display  | Graphing | Yes       | Yes    | Yes   | Via relatively easy integrations | Yes                             | Yes    |
|          | Multiple sensors in a graph | Yes       | Yes    | Yes   | Via relatively easy integrations | Yes                             | Yes    |
|          | Map | Yes       | Yes    | Yes   | Via integrations | Yes                             | Yes    |
|          | Embeddable | No        | Yes    | Yes   | Via integrations | Yes                             | Yes    |
|          | Multiple sensors on a map | Yes       | Yes    | Yes   | Via integrations | Yes                             | Yes    |
|          | Display by project/user | Yes       | Yes    | Yes   | Yes   | Yes                             | Yes    |
|          | Associate photo with metadata/notes fields | Yes       | Yes    | No    | No    | No                              | No     |
|          | Comparison to historical/existing data | No        | No     | No    | No    | Via data importing              | No     |
|          | Contextual weather/wind/temp/humidity | Programmatically via macros | No     | Via integrations | No    | Possible with extra work        | No     |
|          | Heatmap | Yes       | Yes    | Yes   | No    | Possible with extra work        | Yes    |
|          | Threshold alerts | No        | No     | No    | No    | Possible with extra work        | Possible with extra work |
| Evidential | Changes log | Not combined but each data entry listed | Not combined but each data entry listed | No    | No    | Possible with extra work        | No     |
|          | User accounts / collaborative | Yes       | Accounts but no discussion | Accounts but no discussion | No    | Embeddable on PL                | Yes    |
|          | Checksum validation | No        | No     | No    | No    | Possible with extra work        | No     |
| Compatibility | Online | Yes       | Yes    | Yes   | Yes   | Yes                             | Yes    |
|          | Offline | Yes       | No     | No    | No    | Possible with extra work        | No     |
|          | Mac/Windows | Web-based analysis, but not input | Yes    | Yes   | Yes   | Yes                             | Yes    |
|          | Smartphone | Android   | Browser, responsive | Browser | No    | Yes                             | Probably limited interactive |
| Privacy  | Selective visibility | If complete open sourcing, could run our own instance | Could run our own instance | Could run our own instance | Could run our own instance | Possible with extra work        | Yes    |