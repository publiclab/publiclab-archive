---
title: Testing a Phant Data Repository on Cloud9
tagnames: phant, data-management, cloud, cloud9, data-logging-visualization
author: donblair
path: /notes/donblair/11-03-2015/easy-sensor-data-hosting-your-own-phant-data-repository-via-cloud9.md
nid: 12357
uid: 43651

---

# Testing a Phant Data Repository on Cloud9

by [donblair](../profile/donblair) November 03, 2015 15:58

November 03, 2015 15:58 | Tags: [phant](../tag/phant), [data-management](../tag/data-management), [cloud](../tag/cloud), [cloud9](../tag/cloud9), [data-logging-visualization](../tag/data-logging-visualization)

[Edit 11/8: an earlier title for this was "Your Own Data Repository on Cloud9" -- but I've since found out that Cloud9 is not set up to allow for persistent hosting.  For that, one needs to host Phant using another approach, e.g. like digitalocean.com, or Amazon EC2 (or perhaps Heroku?).  I'm exploring digitalocean.com -- will post about that soon.]

# 1. Sign up

Go to: https://c9.io/

(You can use a github login if you like)

[![sign_in.png](https://i.publiclab.org/system/images/photos/000/012/349/medium/sign_in.png)](https://i.publiclab.org/system/images/photos/000/012/349/original/sign_in.png)

# 2. Create a workspace

[![create_workspace.png](https://i.publiclab.org/system/images/photos/000/012/350/medium/create_workspace.png)](https://i.publiclab.org/system/images/photos/000/012/350/original/create_workspace.png)

# 3. Name the workspace

(don't need a template)

[![name_workspace.png](https://i.publiclab.org/system/images/photos/000/012/351/medium/name_workspace.png)](https://i.publiclab.org/system/images/photos/000/012/351/original/name_workspace.png)

# 4. Find the command line on the bottom of the page

[![reach_commandline.png](https://i.publiclab.org/system/images/photos/000/012/352/medium/reach_commandline.png)](https://i.publiclab.org/system/images/photos/000/012/352/original/reach_commandline.png)

# 5. Install phant

> npm install -g phant

[![install.png](https://i.publiclab.org/system/images/photos/000/012/355/medium/install.png)](https://i.publiclab.org/system/images/photos/000/012/355/original/install.png)

# 6. Run phant

[![phant.png](https://i.publiclab.org/system/images/photos/000/012/356/medium/phant.png)](https://i.publiclab.org/system/images/photos/000/012/356/original/phant.png)


[![running.png](https://i.publiclab.org/system/images/photos/000/012/357/medium/running.png)](https://i.publiclab.org/system/images/photos/000/012/357/original/running.png)

# 7. Preview application 

[![preview_application.png](https://i.publiclab.org/system/images/photos/000/012/353/medium/preview_application.png)](https://i.publiclab.org/system/images/photos/000/012/353/original/preview_application.png)

[![live_preview.png](https://i.publiclab.org/system/images/photos/000/012/358/medium/live_preview.png)](https://i.publiclab.org/system/images/photos/000/012/358/original/live_preview.png)

# 8. Interact via browser

[![phant_for_real.png](https://i.publiclab.org/system/images/photos/000/012/359/medium/phant_for_real.png)](https://i.publiclab.org/system/images/photos/000/012/359/original/phant_for_real.png)








