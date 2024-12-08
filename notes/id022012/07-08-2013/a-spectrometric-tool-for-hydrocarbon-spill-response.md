---
title: A Spectrometric Tool for Hydrocarbon Spill Response
tagnames: spectrometer, uv, oil, laser, fluorescence, spill, quebec, canada, municipal, led, aqueous, hydrocarbon, optic, fiber, petroleum, first-time-poster
author: id022012
path: /notes/id022012/07-08-2013/a-spectrometric-tool-for-hydrocarbon-spill-response.md
nid: 8759
uid: 60504

---

# A Spectrometric Tool for Hydrocarbon Spill Response

by [id022012](../profile/id022012) July 08, 2013 23:33

July 08, 2013 23:33 | Tags: [spectrometer](../tag/spectrometer), [uv](../tag/uv), [oil](../tag/oil), [laser](../tag/laser), [fluorescence](../tag/fluorescence), [spill](../tag/spill), [quebec](../tag/quebec), [canada](../tag/canada), [municipal](../tag/municipal), [led](../tag/led), [aqueous](../tag/aqueous), [hydrocarbon](../tag/hydrocarbon), [optic](../tag/optic), [fiber](../tag/fiber), [petroleum](../tag/petroleum), [first-time-poster](../tag/first-time-poster)

**Feasibility study for rapid, low cost, in situ visible light spectrum measurement and analysis of artificially induced fluorescence in aqueous samples as a mean to detect, identify and quantify light to medium fuels and oils.**

## Introduction

As an environment field technician for the City of Québec, Canada, ((*) see note below), one of my tasks is emergency chemical product and hydrocarbon spill response, the latter of which is the most frequent.

During such an intervention, identifying the product(s) contained in the spill is of prime importance in that it enables the response team to search for its source quickly and efficiently in order to properly link the source of the spill with the spill itself. This implies being able to rapidly detect,  identify, and establish the concentration of the product. 

To this end, I wish to develop, in collaboration with the Public Labs Community, a set of open source spectrometric tools (hardware and software). More specifically, my preliminary literature reviews as well as Warren's proof of concept regarding hydrocarbon detection using laser induced fluorescence in an aqueous sample (see http://publiclab.org/notes/warren/05-14-2013/laser-oil-fluorescence-proof-of-concept), have influenced me to investigate the possibility of using this very method along with proper data management macros.

This on site analysis would not aim replacing a certified laboratory analysis, rather it would act as a preliminary source of information prior to the full fledged product identification and quantification conducted by a government approved lab.

Since, often times, the source of the spill and the spill site can be at a relatively far distance through rain and sanitary sewer networks as well as city waterways, knowing the type of product would enable narrowing down the search of the source to certain sectors.

During the search, technicians use visual and olfactory indicators to detect the presence of the contaminant. The addition of a cheap, reliable, and portable spectrometric measurement device would help consolidate the detection process. Also, with sufficient resolution and identification capabilities, the spilled product could be differentiated from other similar products already in the sewer or waterway.

Finally, quantifying its concentration could help in assessing its impact on the infrastructures or waterways facilitating adequate mitigation measures.


##My attempt and results

Will be explained in details in future posts.

##Questions and next steps

This project can only be built upon a solid spectrometric data acquisition and analysis framework. Among the different tools that will be required are:

- A light source that can induce a fluorescence pattern in the visible spectrum. Among those I am currently considering are UV lasers and LEDs;

- A mean for delivering the light into the sample. Some materials such as glass are know to have a cutoff wavelength past which some types of light i.e. UVs are not transmitted. In this particular case, near-UV/UV light could be within the appropriate range needed to provoke fluorescence, hence allowing it to reach the sample is a necessary basis for this method to succeed. Among possible delivery methods, A sample vessel that would enable light to be directly delivered inside the sample by optic fibers will be considered.

- Advanced calibration and spectrum analysis module for Spectral Workbench (Parallel spectrum analysis, spectrum grouping, reference spectrum comparison, baseline establishment, statistical quality control framework).

- A qualified modular design enabling the usage of different light sources such as lasers, LEDS, halogens, sun and so on and the means for a repeatable and comparable delivery of the light to the sample / sample vessel. Once again, I think optic fiber can be of help in that 1) It is widely available at relatively low cost 2) standard connectors/tools for conveying and manipulating the signal already exist (i.e. for audio application) 3) As mentioned above, if I am not mistaken, optic fibers enables delivery of a wider range wavelength to the sample and / or detector (camera) thus widening the detection bandwidth.

- Many, many other things yet to be cogitated.

_Nota Bene_

(*) Although I wish to eventually use the technology we develop here in the context of my work, I want to point out that the work that I accomplish with Public Labs is done on my own time.

