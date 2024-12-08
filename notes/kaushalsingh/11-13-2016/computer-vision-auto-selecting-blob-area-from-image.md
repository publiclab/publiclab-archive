---
title: Computer Vision: Auto selecting blob area from image
tagnames: matlab, computer-vision, question:computer-vision
author: kaushalsingh
path: /notes/kaushalsingh/11-13-2016/computer-vision-auto-selecting-blob-area-from-image.md
nid: 13698
uid: 496664

---

# Computer Vision: Auto selecting blob area from image

by [kaushalsingh](../profile/kaushalsingh) November 13, 2016 03:54

November 13, 2016 03:54 | Tags: [matlab](../tag/matlab), [computer-vision](../tag/computer-vision), [question:computer-vision](../tag/question:computer-vision)

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