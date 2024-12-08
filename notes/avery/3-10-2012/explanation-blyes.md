---
title: Explanation of BLYES
tagnames: environmental-estrogen-testing
author: Avery
path: /notes/avery/3-10-2012/explanation-blyes.md
nid: 916
uid: 441

---

# Explanation of BLYES

by [Avery](../profile/Avery) March 10, 2012 19:17

March 10, 2012 19:17 | Tags: [environmental-estrogen-testing](../tag/environmental-estrogen-testing)

Below is a copy of my blog post explaining BLYES, the full post with pictures in the correct places can be found here: <a href="http://tequals0.wordpress.com/2012/02/24/blyes-bioluminescent-yeast-estrogen-assay/">tequals0.wordpress.com</a>

BLYES: BioLuminescent Yeast Estrogen Assay
Posted on February 24, 2012

It looks like I will be doing some research for The Public Laboratory, trying to develop a yeast estrogen assay, specifically with yeast (BioLuminescent Yeast Estrogen Screen: BLYES).  Yay!  The overall goal of the project is to develop a kit that can be shipped to someone so they can, at some undetermined level of accuracy, determine the estrogenicity of their water.

Estrogenicity is an important metric that is best tested in vivo.  It   There are several factors that make it very difficult to asses otherwise.  The first problem is that there are a lot of chemicals, ranging from Bisphenol-A, which is found in many plastics, to birth control pills that all have estrogenic effects.  The other problem is that the only way to test how “estrogenic” something is to test it under the conditions that would be found in the body.  This is because of the unique estrogen receptors and chemicals like Sex Hormone Binding Globulin (SHBG) that inactivate (some) estrogens that are found in different biological systems.
<img src="http://tequals0.files.wordpress.com/2012/02/diagram1.png" width="500">

Unfortunately, humans grow very slowly and there is a lot of legislation that makes it difficult to test on them, not to mention the ethical concerns.  Also, it is not one or two compounds, but thousands of chemicals (with new ones added frequently) that need to be tested.  The EPA is actually in charge of testing these things, and has two tiers.  The first tier tests if it has endocrine disrupting effects, meaning (for us) if it is estrogenic or not, and if it should move on to tier two testing.  The second tier tests how much of an effect it has at different levels.  You can read what the EPA has to say here.

BLYES seems like a good test, because tricky things like specific receptors, and blood levels of SHBG can be simulated.  BLYES is uses a genetically engineered strain of yeast.  It is S. cerevisiae, the same species as the yeast that people use to bake bread or brew beer.

YES assay system. Circles are rough sketches of the plasmid. Estrogen interacts with hER-α receptor coded by pSCW231-hER, which causes the translation and transcription of β-galactosidase, which produces a colormetric change in some substrates

BLYES is really the combination of two earlier systems, one for detecting estrogen, and one for making yeast express bacterial luciferin.  The original system was called the Yeast Estrogen Screen (YES).  It is based around two plasmids.  One contained hER-α, and is called pSCW231-hER.  I have not yet found out what pSCW231 is, but it seems that it causes hER-α to be expressed in the membrane.  The other plasmid is YRpE2, which seems to stand for “Yeast Reporter Plasmid ERE 2″, because it has two ERE elements and contains the CYC1-lacZ fusion gene.  This gene codes for β-galactosidase, which breaks down ONGP to into something yellow.  This system, when exposed to estrogen, causes the hER-α to turn on the ERE, producing β-galactosidase.  The actual assay is done after allowing the yeast to grow in the media.  The cells are exposed to ONPG, and the “yellowness” of the result is read with a spectrophotometer.

the Lux operon. LuxA and LuxB code for the luciferase enzyme, while LuxCDE code for the substrate and complex that recycle it

The other component of BLYES is bioluminescence, which comes from two plasmids.  The genes for bioluminescence were inserted into two pBEVY (plasmid for Bidirectional Expression Vectors in Yeast) plasmids.  These carry the genes luxAB on one plasmid, named pUTK407, and luxCDE and frp on another plasmid called pUTK404.  luxAB codes for the luciferase that reacts with the FMNH(2) to produce light, while the luxCDE reduces the FMNH(2) so that it can be recycled to create more light.  frp codes for the FMNH(2).  The luxCDE plasmid is constitutively on because of its promoters, (GPD and ADH1).  In pUTK404, the genes frp, and Lux genes C, D, and E have Internal Ribosome Entry Sites (IRES).  These IRES ensure that the genes are properly transcribed by the ribosomes, instead of the ribosomes creating fusion protiens of LuxCD and LuxE-FRP.

BLYES: hER-α receptor is encoded by chromosomal DNA. Activation of the receptor turns on production of luxA and luxB under the control of bidirectional EREs. This enzyme reacts with the FRP produced by the constitutively on pUTK404 plasmid. pUTK404 also encodes LuxCDE, which allows the recycling of FRP. frp, and Lux genes CDE have IRES (internal ribosome entry sites) in-between them to ensure proper transcription

The difference is that BLYES has the human Estrogen Receptor alpha (hER-α) integrated into its chromosomal DNA.  This means that it is inside the nucleus.  Additionally, it is under a constitutive promoter.  The when it binds to an estrogenic chemical, hER-α turns on a signaling pathway that activates the Estrogen Response Element (ERE) promoter.  This promoter is on a plasmid that turns on light production with lux genes (bacterial luciferin/luciferase), and this is measured by a very sensitive detector.

Since The Public Laboratory wants to make this into a kit that they can send out to people, BLYES or YES may not be a good option, because they take very sensitive tools and extra chemicals to test estrogenicity.  Towards making this kit a possibility, we may try to link ERE activation to pigment production.