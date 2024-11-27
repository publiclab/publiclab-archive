---
nid: 17220
title: How was the frequency response graph interpreted in @cfastie blogpost, and how the computation of the NDVI was derived?
path: public/static/notes/manueldun/10-04-2018/how-was-the-frequency-response-graph-interpreted-in-cfastie-blogpost-and-how-the-computation-of-the-ndvi-was-derived.md
uid: 553569
tagnames: question:ndvi,tsl2561
---

# How was the frequency response graph interpreted in @cfastie blogpost, and how the computation of the NDVI was derived?

@cfastie made a blog post that intereses me as I need to measure NDVI with micro controllers.

  
The questions that a need to understand  are:

  
- How to interpret frequency response graphs?
- How did you come up with the computation of the NDVI this code? (code bellow)

```
     tsl1.getLuminosity (&broadband1, &infrareda);
     infrared1 = infrareda*1.5;
     float vis1 = broadband1-infrareda;    
     NDVI1 = (infrared1 - vis1) / (infrared1 + vis1); ```

- I could just use this code but i want to be sure I Know what I am doing, Thanks.