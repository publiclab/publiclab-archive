---
nid: 7790
title: infragram-webapp-dev
path: public/static/wiki/infragram-webapp-dev.md
uid: 43651
tagnames: near-infrared-camera,infragram,app
---

# infragram-webapp-dev

![infrapix.png](https://i.publiclab.org/system/images/photos/000/000/369/medium/infrapix.png)

### Using Flask, Twitter Bootstrap, and Heroku

- Followed this brilliant intro to setting up a web app on Heroku, using Flask and Twitter Bootstrap: http://ryaneshea.com/lightweight-python-apps-with-flask-twitter-bootstrap-and-heroku

- Trick for getting matplotlib to install after numpy -- see:
https://gist.github.com/mt3/3680810

- Direct to S3 uploads: https://devcenter.heroku.com/articles/s3-upload-python

- Code of uploading files using Flask:
http://flask.pocoo.org/docs/patterns/fileuploads/

- General info on using python on Heroku:
https://devcenter.heroku.com/articles/python

- Info on setting up a virtualenv and flask on dreamhost:
http://wiki.dreamhost.com/Passenger_WSGI
http://wiki.dreamhost.com/Flask

- using Flask and boostrap:
https://github.com/mbr/flask-bootstrap and 
http://www.andrewsturges.com/2012/08/installing-twitter-bootstrap-in-flask-09.html

- using Flask and jQuery file upload:
https://github.com/blueimp/jQuery-File-Upload/wiki/Flask

- basic file uploads with Flask:
http://flask.pocoo.org/docs/patterns/fileuploads/

- great introduction to flask:
http://flask.pocoo.org/docs/quickstart/

- nice example of using Flask to upload to S3:
http://thefort.org/a/using-flask-flask-wtf-and-boto-to-handle-file-uploads-to-amazon-s3/

- entire monogdb based image upload system
https://github.com/DarkSector/profilebuilder

- setting up a virtualenv and flask on dreamhost:
http://wiki.dreamhost.com/Flask
and
http://wiki.dreamhost.com/Passenger_WSGI
and http://www.ricksresources.com/2012/07/writing-wsgi-apps-on-dreamhost-shared-hosting/ and http://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world

- handling oversized file sizes in flask / catching errors:
http://flask.pocoo.org/docs/patterns/fileuploads/

###Craig's code for doing the ndvi conversion
- StuporBlue to NDVI conversion: https://gist.github.com/cversek/5616453

- Tunable gaussian HSV colormap functions: https://gist.github.com/cversek/5622365

###Image Processing in Python
- relevant tutorial for using matplotlib for image processing:
http://matplotlib.org/users/image_tutorial.html

- relevant tutorial for generating color maps from vectors in matplotlib:
http://www.scipy.org/Cookbook/Matplotlib/ColormapTransformations

- default colormaps in matplotlib:
http://www.scipy.org/Cookbook/Matplotlib/Show_colormaps

### Discussion threads on processing NDVI in this manner, appropriate color tables, etc:

-https://mail.google.com/mail/u/0/#search/craig/13ec4525bc160f90?compose=13ec886588389872
- https://groups.google.com/group/plots-infrared/browse_thread/thread/dcf3a9a0518ec55e
- https://groups.google.com/group/plots-infrared/browse_thread/thread/3c4ebab96e9a90ac

### Test app on Heroku
- http://infrapix.herokuapp.com/
- https://github.com/dwblair/infrapix

### Installing into Local Virtualenv Development Environment
Install base system packages (Debian based OSes)
    sudo apt-get install python-dev python-virtualenv libpng-dev libfreetype6-dev

Create a virtual environment and activate it
    virtualenv venv --distribute
    source venv/bin/activate

Note that your command-line prompt may now be prepended with "(venv)".  Now packages installed using `pip` will only be in this environment.  Use the command `deactivate` to exit this mode.
Finish installing dependencies
    pip install flask flask-sijax numpy matplotlib pillow

Check out [the code](https://github.com/dwblair/infrapix) or [website](http://www.intellectsoft.net) from GitHub
    sudo apt-get install git
    git clone https://github.com/dwblair/infrapix.git

Run locally
    cd infrapix
    python runLocally.py

Open browser to url http://127.0.0.1:5000/ to test the web app!

### test images for command-line utility

![river.jpg](https://i.publiclab.org/system/images/photos/000/000/476/medium/river.jpg)

### resultant images from command-line utility

![river_NDVI.jpg](https://i.publiclab.org/system/images/photos/000/000/477/medium/river_NDVI.jpg)


