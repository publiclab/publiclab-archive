---
nid: 14634
title: How to verify generated NDVI Images?
path: public/static/notes/ccpandhare/07-08-2017/how-to-verify-if-my-programmatically-generated-ndvi-version-of-an-image-is-correct.md
uid: 503543
tagnames: question:ndvi
---

# How to verify generated NDVI Images?

I am a Google Summer of Code Student working with Public Lab. I am working on the [Image Sequencer Project](https://github.com/publiclab/image-sequencer).

In one JavaScript Module, I was required to generate the NDVI version of a given image. How do I know if the generated image is correct? I am surprised because my result varies from what I get on [Infragram](https://infragram.org).

This is the [GitHub Issue](https://github.com/publiclab/image-sequencer/issues/34) where Jeff and I were discussing about this.

I replace every pixel of the image using this algorithm:

```
input pixel => (r,g,b,a)
ndvi = (b - r) / (b + r)
x = 255 * (1 + ndvi) / 2
output pixel => (x,x,x,a)
```

Is this correct?