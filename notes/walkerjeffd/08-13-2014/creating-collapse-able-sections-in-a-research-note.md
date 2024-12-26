---
title: "Creating Collapse-able Sections in a Research Note"\ntagnames: 'website, markdown, publishing, formatting, research-notes, ui'
author: walkerjeffd
path: /notes/walkerjeffd/08-13-2014/creating-collapse-able-sections-in-a-research-note.md
nid: 11044
uid: 422528

---

# Creating Collapse-able Sections in a Research Note

by [walkerjeffd](../profile/walkerjeffd) | August 13, 2014 17:43

August 13, 2014 17:43 | Tags: [website](../tag/website), [markdown](../tag/markdown), [publishing](../tag/publishing), [formatting](../tag/formatting), [research-notes](../tag/research-notes), [ui](../tag/ui)

----

###What I want to do

See if I can use the Bootstrap collapse feature in a PL research note to create collapse-able sections. Since the PL site is based on bootstrap already, it should have the javascript available to do this.

###My attempt and results

I'm just going to copy some code from the [bootstrap docs](http://getbootstrap.com/2.3.2/javascript.html#collapse) and see if it works.

Here is the raw code I put it in this note:

    ### Experimental Setup Details 
    
    Something normal people wouldn't want to see, so its collapsed but could be expanded...
    
    <div class="accordion" id="accordion2">
      <div class="accordion-group">
        <div class="accordion-heading">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
            Show/Hide
          </a>
        </div>
        <div id="collapseOne" class="accordion-body collapse">
          <div class="accordion-inner">
            The nitty gritty details that most people wouldn't want to see go here...
          </div>
        </div>
      </div>
    </div>
    
    ### Results
    
    This section could have results that most people would want to see...
    
    <div class="accordion" id="accordion3">
      <div class="accordion-group">
        <div class="accordion-heading">
          <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo">
            Show/Hide
          </a>
        </div>
        <div id="collapseTwo" class="accordion-body collapse in">
          <div class="accordion-inner">
            The results would be shown here in un-collapsed form by default.
          </div>
        </div>
      </div>
    </div>

And here is what it looks like after rendering:

### Experimental Setup Details 

Something normal people wouldn't want to see, so its collapsed but could be expanded...

<div class="accordion" id="accordion2">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne">
        Show/Hide
      </a>
    </div>
    <div id="collapseOne" class="accordion-body collapse">
      <div class="accordion-inner">
        The nitty gritty details that most people wouldn't want to see go here...
      </div>
    </div>
  </div>
</div>

### Results

This section could have results that most people would want to see...

<div class="accordion" id="accordion3">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion3" href="#collapseTwo">
        Show/Hide
      </a>
    </div>
    <div id="collapseTwo" class="accordion-body collapse in">
      <div class="accordion-inner">
        The results would be shown here in un-collapsed form by default.
      </div>
    </div>
  </div>
</div>


###Questions and next steps

This seems to work, but requires writing the collapsed sections in HTML and also changing the CSS so the show/hide buttons are not so large. EDIT: this is only a problem in preview mode, after publishing the note, the accordian headers are ok.

A markdown extension could probably be written that provides a markdown flag of some kind (e.g. `##> Section`) as @warren suggested.
