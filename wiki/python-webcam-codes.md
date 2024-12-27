---
title: "Python Webcam Codes"

tagnames: 'software, infragram, python, parent:multispectral-imaging'
author: paulokemperfilho
path: /wiki/python-webcam-codes.md
nid: 11031
uid: 426653

---

# Python Webcam Codes

by [paulokemperfilho](../profile/paulokemperfilho)

August 11, 2014 04:35 | Tags: [software](../tag/software), [infragram](../tag/infragram), [python](../tag/python), [parent:multispectral-imaging](../tag/parent:multispectral-imaging)

----

###This page is a draft to host some simple codes in order to speed up coding development in Python for the Infragram Webcam.

The codes presented here are are based on OpenCV 2 library for video processing and Numpy for array math (Numpy arrays are supported by OpenCV 2).
**Note**: These codes were designed for the Infragram Webcam using Rosco #2007 filter, which means that the blue channel contains blue light information, while the red channel contains red/infrared.

###Basic Functions
####NDVI function
The color code for this function is different from the one used at infragram.org so to have a smooth transition from negative NDVI values to positive NDVI values (on the website it toggles from cyan to green). In this version, the color scale is smoother, which hides noise near zero NDVI.

    import numpy as np #arrays and math
    import cv2 #opencv library

    #-------------------------------------------
    #----------------NDVI Function--------------
    #-------------------------------------------

    #NDVI Calculation
    #Input: an RGB image frame from infrablue source (blue is blue, red is pretty much infrared)
    #Output: an RGB frame with equivalent NDVI of the input frame
    def NDVICalc(original):
        "This function performs the NDVI calculation and returns an RGB frame)"
        lowerLimit = 5 #this is to avoid divide by zero and other weird stuff when color is near black

        #First, make containers
        oldHeight,oldWidth = original[:,:,0].shape; 
        ndviImage = np.zeros((oldHeight,oldWidth,3),np.uint8) #make a blank RGB image
        ndvi = np.zeros((oldHeight,oldWidth),np.int) #make a blank b/w image for storing NDVI value
        red = np.zeros((oldHeight,oldWidth),np.int) #make a blank array for red
        blue = np.zeros((oldHeight,oldWidth),np.int) #make a blank array for blue

        #Now get the specific channels. Remember: (B , G , R)
        red = (original[:,:,2]).astype('float')
        blue = (original[:,:,0]).astype('float')

        #Perform NDVI calculation
        summ = red+blue
        summ[summ<lowerLimit] = lowerLimit #do some saturation to prevent low intensity noise

        ndvi = (((red-blue)/(summ)+1)*127).astype('uint8')  #the index

        redSat = (ndvi-128)*2  #red channel
        bluSat = ((255-ndvi)-128)*2 #blue channel
        redSat[ndvi<128] = 0; #if the NDVI is negative, no red info
        bluSat[ndvi>=128] = 0; #if the NDVI is positive, no blue info


        #And finally output the image. Remember: (B , G , R)
        #Red Channel
        ndviImage[:,:,2] = redSat
        
        #Blue Channel
        ndviImage[:,:,0] = bluSat

        #Green Channel
        ndviImage[:,:,1] = 255-(bluSat+redSat)
        
        return ndviImage;

####DVI Function
This is the non-normalized version. Most of the times it has no significant difference from NDVI, but for people interested in it here it is.

    import numpy as np #arrays and math
    import cv2 #opencv library

    #-------------------------------------------
    #----------------DVI Function---------------
    #-------------------------------------------

    #DVI Calculation
    #Input: an RGB image frame from infrablue source (blue is blue, red is pretty much infrared)
    #Output: an RGB frame with equivalent DVI of the input frame
    def DVICalc(original):
        "This function performs the DVI calculation and returns an RGB frame)"

        #First, make containers
        oldHeight,oldWidth = original[:,:,0].shape; 
        dviImage = np.zeros((oldHeight,oldWidth,3),np.uint8) #make a blank RGB image
        dvi = np.zeros((oldHeight,oldWidth),np.int) #make a blank b/w image for storing DVI value
        red = np.zeros((oldHeight,oldWidth),np.int) #make a blank array for red
        blue = np.zeros((oldHeight,oldWidth),np.int) #make a blank array for blue

        #Now get the specific channels. Remember: (B , G , R)
        red = (original[:,:,2]).astype('float')
        blue = (original[:,:,0]).astype('float')

        #Perform DVI calculation
        dvi = (((red-blue)+255)/2).astype('uint8')  #the index

        redSat = (dvi-128)*2  #red channel
        bluSat = ((255-dvi)-128)*2 #blue channel
        redSat[dvi<128] = 0; #if the NDVI is negative, no red info
        bluSat[dvi>=128] = 0; #if the NDVI is positive, no blue info


        #And finally output the image. Remember: (B , G , R)
        #Red Channel
        dviImage[:,:,2] = redSat
        
        #Blue Channel
        dviImage[:,:,0] = bluSat

        #Green Channel
        dviImage[:,:,1] = 255-(bluSat+redSat)
        
        return dviImage;

### Example Code
Using the above functions (not pasted in the following code for brevity), a simple code to output the NDVI, DVI and Raw stream from webcam is presented. A snapshot function is also available.

    #-------------------------------------------
    #----------------Main Function--------------
    #-------------------------------------------

    cv2.namedWindow("preview NDVI")
    vc = cv2.VideoCapture(0)

    if vc.isOpened(): # try to get the first frame
        rval, frame = vc.read()
        height = vc.get(3) #get height
        width = vc.get(4) #get width
        #Text Related
        x = int(width/2)
        y = int(2*height/3) 
        text_color = (255,255,255) #color as (B,G,R)
        font = cv2.FONT_HERSHEY_PLAIN
        thickness = 2
        font_size = 2.0
    else:
        rval = False

    while rval:
        ndviImage = NDVICalc(frame)
        dviImage = DVICalc(frame)

        cv2.putText(frame, "Raw Image", (x,y), font, font_size, text_color, thickness, lineType=cv2.CV_AA)
        cv2.putText(ndviImage, "NDVI Image", (x,y), font, font_size, text_color, thickness, lineType=cv2.CV_AA)
        cv2.putText(dviImage, "DVI Image", (x,y), font, font_size, text_color, thickness, lineType=cv2.CV_AA)
        
        newFrame = np.concatenate((ndviImage,dviImage,frame),axis=1)
        cv2.imshow("preview NDVI", newFrame)

        rval, frame = vc.read()

        key = cv2.waitKey(1)&0xFF #get a key press
        if key == ord('q'): #q for quitting
            break
        elif key == ord('p'): #p for printscreen
            curtime = datetime.datetime.now()
            formattedTime = curtime.strftime("%Y%m%d-%H-%M-%S.jpg")
            print 'filename:%s'%formattedTime
            cv2.imwrite(formattedTime,newFrame)
            print "Screenshot taken!"

    # When everything done, release the capture
    vc.release()
    cv2.destroyAllWindows()