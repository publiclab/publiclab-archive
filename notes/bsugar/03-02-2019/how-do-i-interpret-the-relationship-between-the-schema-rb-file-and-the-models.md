---
nid: 18446
title: How do I interpret the relationship between the schema.rb file and the models?
path: public/static/notes/bsugar/03-02-2019/how-do-i-interpret-the-relationship-between-the-schema-rb-file-and-the-models.md
uid: 217812
tagnames: visualization,code,answered,question:website,programming
---

# How do I interpret the relationship between the schema.rb file and the models?

I'm trying to create a database schema diagram (a.k.a entity relationship diagram) of the PLOTS database using the [data model](https://github.com/publiclab/plots2#data-model) in conjunction with the [schema.rb](https://github.com/publiclab/plots2/blob/master/db/schema.rb.example) file. I found a program online called [dbdiagram.io](https://dbdiagram.io) program which allows you to upload schema.rb files to create these diagrams, and also export them as .sql files (which is nice if you'd prefer to use [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)).

There are three things that I am seeking more information about regarding the PLOTS [schema.rb](https://github.com/publiclab/plots2/blob/master/db/schema.rb.example) and models file:

1) While there are [answer models](https://github.com/publiclab/plots2/blob/master/app/models/answer.rb), [question controllers](https://github.com/publiclab/plots2/blob/master/app/controllers/questions_controller.rb "https://github.com/publiclab/plots2/blob/master/app/controllers/questions_controller.rb"), and [question views](https://github.com/publiclab/plots2/tree/master/app/views/questions), am I correct in understanding that a "question" is actually just a [research note with a power tag](https://github.com/publiclab/plots2/blob/master/app/models/node.rb#L840)?

2a) Take, for example, the [comment model](https://github.com/publiclab/plots2/blob/master/app/models/comment.rb). Does the image below reflect the accompanying code?

2b) How does the last line _has\_many :likes, :as =\> :likeable_ fit into the picture? There are functions in the model for [liked\_by, likers, emoji\_likes, and user\_reactions\_map](https://github.com/publiclab/plots2/blob/35ce7ae283cdd3d6f286254b8df9edb3149e45ee/app/models/comment.rb#L196) but how are the likes connected to the comments model?

```
<p></p><p>class Comment &lt; ApplicationRecord</p><p>&nbsp; include CommentsShared # common methods for comment-like models</p><p>&nbsp; belongs_to :node, foreign_key: 'nid', touch: true, counter_cache: true</p><p>&nbsp; # dependent: :destroy, counter_cache: true</p><p>&nbsp; belongs_to :user, foreign_key: 'uid'</p><p>&nbsp; belongs_to :answer, foreign_key: 'aid'</p><p>&nbsp; has_many :likes, :as =&gt; :likeable</p>
```

![image description](/i/29665.png "comments_model.png")