---
nid: 13698
title: Computer Vision: Auto selecting blob area from image
path: public/static/notes/kaushalsingh/11-13-2016/computer-vision-auto-selecting-blob-area-from-image.md
uid: 496664
tagnames: matlab,computer-vision,question:computer-vision
---

# Computer Vision: Auto selecting blob area from image

###I need average pixel value of centre most blob in the image?

####I am trying to develop auto calibration plugin for reflectance measurement, for which I need average pixel value value of centre blob in the image. As of now I am converting this image to binary, and able to identify different blobs in image. But, I want that central blob getting identified some how. Maybe we can take help of surrounding 6 small blobs.

####Here is the original image if someone needs: https://drive.google.com/open?id=0B9kvfpiOcM1EWnhJeGtBZ3A4eTg
    I = imread('BLOB.TIF');
    Ibw = ~im2bw(I, 0.75);
    Ifill = imfill(Ibw,'holes');
    Iarea = bwareaopen(Ifill, 500);

    stat = regionprops(Ifinal,'boundingbox');
    imshow(I); hold on;
    for cnt = 1 : numel(stat)
        bb = stat(cnt).BoundingBox;
        rectangle('position',bb,'edgecolor','r','linewidth',2);
    end
####Thank you 