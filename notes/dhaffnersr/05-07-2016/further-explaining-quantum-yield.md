---
title: Further explaining quantum yield
tagnames: 
author: dhaffnersr
path: /notes/dhaffnersr/05-07-2016/further-explaining-quantum-yield.md
nid: 13089
uid: 461120

---

# Further explaining quantum yield

by [dhaffnersr](../profile/dhaffnersr) May 07, 2016 23:29

May 07, 2016 23:29 | Tags: 

I wanted to present this as a learning tool for others who may be interested at how these calculations are arrived at, so I took some screen shots of my processin software spekwin32 because it does the quantum yield calculations for me, as long as the right data and values are entered correctly.

The first screen shot shows the window for inputting all the values, you will notice that at the top it will ask for the reference spectrum, which in this case was the fluorescein in ethanol data from the Oregon laser medical center.

Next it will ask for the sample spectrum, which is my data fluorescein in ethanol that I did on May 3rd. With the inner filter parameters the detection path length is the length of the cuvette (10cm) inner filter is calculated by taking the reference emission spectrum and subtracting it from the sample's emission spectrum to get the optical density, enter that value there.

With my program, it automatically fills in the reference intagral and the sample intagral, press OK and on the bottom left it shows the quantum yield of my sample.


[![PIC_0322.JPG](//i.publiclab.org/system/images/photos/000/015/997/large/PIC_0322.JPG)](//i.publiclab.org/system/images/photos/000/015/997/original/PIC_0322.JPG)

The next picture shows both the spectra for my data and the data for the laser center at Oregon. Remember that the Oregon sample is our reference spectrum:


[![PIC_0323.JPG](//i.publiclab.org/system/images/photos/000/015/998/large/PIC_0323.JPG)](//i.publiclab.org/system/images/photos/000/015/998/original/PIC_0323.JPG)

and finally on the bottom left corner are the results!


[![PIC_0325.JPG](//i.publiclab.org/system/images/photos/000/015/999/large/PIC_0325.JPG)](//i.publiclab.org/system/images/photos/000/015/999/original/PIC_0325.JPG)

Why is quantum yield important?

quantum yield is the ratio of the number of photons emitted to the number of photons absorbed by the sample:

The quantum yield for the decomposition of a reactant molecule in a decomposition reaction is defined as:

 \Phi = \frac{\rm \#\ molecules \ decomposed} {\rm \#\ photons \ absorbed} 
Quantum yield can also be defined for other events, such as fluorescence:[1]

 \Phi = \frac {\rm \#\ photons \ emitted} {\rm \#\ photons \ absorbed} 
Here, quantum yield is the emission efficiency of a given fluorophore.

Ultimately, the quantum yield (Φ) of a radiation-induced process is the number of times a specific event occurs per photon absorbed by the system. The "event" is typically a kind of chemical reaction.

This is primarily why I am interested in it.

I hope all this is clear enough and is helpful, any questions please, do not hesitate to ask!

Ref:
http://www.horiba.com/fileadmin/uploads/Scientific/Documents/Fluorescence/quantumyieldstrad.pdf
http://en.wikipedia.org/wiki/Quantum_yield
http://www.iss.com/resources/research/technical_notes/PC1_MeasQuantumYldVinci.html
References
1.	C.V. Bindhu, S.S. Harilal, G.K. Varier, R.C. Issac, V.P.N. Nampoori and C.P.G Vallabhan, Measurement of the absolute fluorescence quantum yield of rhodamine B solution using a dual-beam thermal lens technique. J. Phys. D: Appl. Phys. 29, 1074, 1996.
2.	R.B. Mujumdar, L.A. Ernst, S.R. Mujumdar, C.J. Lewis, A.S. Waggoner, Cyanine dye labeling reagents: sulfoindocyanine succinimidyl esters. Bioconj Chem 4, 105-111, 1993.
3.	J.R. Lakowicz, Principles of Fluorescence Spectroscopy, 2nd Ed., Kluwer Academic/Plenum Publishers, New York, London, Moscow, Dordrecht, 1999.
4.	D. Magde, G.E. Rojas, and P. Seybold, Solvent Dependence of the Fluorescence Lifetimes of Xanthene Dyes. Photochem. Photobiol. 70, 737, 1999.
5.	Vavilov, S.I., Z. Physik, 42, 311, 1927.
6.	D.M. Jameson et al. in Basic Concepts in Fluorescence, Fluorescence: Basic Concepts, Principles Aspects and some Anecdotes, Methods Enzymol. 360, 1 – 43, 2003.
7.	7. A.T.R. Williams, S.A. Winfield and J.N. Miller, Relative fluorescence quantum yields using a computer controlled luminescence spectrometer. Analyst, 108, 1067, 1983.

