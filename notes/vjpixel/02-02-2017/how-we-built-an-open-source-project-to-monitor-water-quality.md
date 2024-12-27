---
title: "How we built an open source project to monitor water quality"

tagnames: 'water-quality, list:plots-waterquality, brasil, parent:open-water, report, redeinfoamazonia, maedagua'
author: vjpixel
path: /notes/vjpixel/02-02-2017/how-we-built-an-open-source-project-to-monitor-water-quality.md
nid: 13900
uid: 420617

cids: 16144,16145,16146

---

![](https://publiclab.org/public/system/images/photos/000/019/423/original/DSC_0117-1024x576.jpg)

# How we built an open source project to monitor water quality

by [vjpixel](../../../profile/vjpixel) | February 02, 2017 23:02

February 02, 2017 23:02 | Tags: [water-quality](../tag/water-quality), [list:plots-waterquality](../tag/list:plots-waterquality), [brasil](../tag/brasil), [parent:open-water](../tag/parent:open-water), [report](../tag/report), [redeinfoamazonia](../tag/redeinfoamazonia), [maedagua](../tag/maedagua)

----

In December 2016, InfoAmazonia finished the first phase of a project to develop an open source device. The initiative, awarded by in the Google Impact Challenge Brazil 2014, proposed to establish an independent pilot network of urban and riverside communities in the Amazon to monitor water quality.  

In early 2014, InfoAmazonia was researching devices to promote environmental participatory monitoring. Several devices to collect data and analyze air quality were identified, such as [Smart Citizen Kit][1], [DustDuino][2], and [Air Quality Egg][3]. At that time, the only open source and low cost gadget to monitor water quality was the [Riffle][4]. This finding inspired us to develop a device with a similar goal, and it encouraged us to develop the InfoAmazonia Network (Rede InfoAmazonia).  

In the first semester, we conducted preliminary research and met with water quality experts in Brazil and the USA to understand what water parameters had to be monitored and what sensors needed to be developed to do that. Our challenge was to improve knowledge and life quality of the riverside populations.  

The project was officially launched on July, 2014\. Google's engagement was beyond financial investment on the project, we also had strategic support of Google employees and of [SITAWI Finanças do Bem][5] e [Cria Global][6], hired by the company.  
  

On September, we organized a hackathon about monitoring of water quality in which we addressed issues such as public data and development of open source hardware. Our goal was to map people interested in the subject and to exchange knowledge with them. [Viságuas][7] [is one of the products of that gathering. This ][7]data visualization application analyses [the connection between water sources and water related diseases in the Brazilian Amazon][8]. The results guided us to define that the Santarém region would be the best for the implementation of the project (initially we had planned to deploy the pilot project in  Manaus).  

The excitement about the subject was so great that the participants suggested that we should organize a new event. On September 2014 we organized a hackathon on water quality in São Paulo.  

At the end of this year our team had the first meetings with Saúde e Alegria (PSA) and with the Secretariats of Environment of Santarém and Belterra. In March 2015 the team carried out a field trip to present the project to local communities. In partnership with PSA and the Secretariats of the Environment, we held workshops on water quality monitoring and citizen journalism for leaders of seven riverside communities in Santarém. In this trip, we also started a partnership with the Electronic Media Laboratory of the Federal University of the West of Pará (UFOPA).  

All this time, and in 2015, we did research and benchmark of many equipment (especially of the [Waspmote Plug & Sense! Smart Water][9]). The creation, development and testing of hardware prototypes were done in partnership with [Dev Tecnologia. The hardware, ][10]named [Mãe d'Água][11] (Mother of Water), was the key element of a system that connected the sensors to an online platform. The platform received, stored and presented the data collected in real-time.  

In October 2015, we held a cycle of workshops in Santarém to train and promote the engagement of volunteers. First there was a basic training in electronics to connect with people interested in open technologies, and in then we presented an overview of the project, of the equipment functions and installation. As a group we were able to anticipate challenges that would later be imposed in deployment. Additionally we also offered a citizen journalism workshop to motivate participants about the importance of using journalistic methods for producing and distributing content.  

Still in the third field trip, we [implemented the Mãe d´Água in 18 points][12] in Santarém, Belterra and Mojuí dos Campos. As part of the process of appropriation of knowledge, the installation was carried out by the communities members themselves under the guidance of the team of Rede InfoAmazonia. To celebrate and share the experience this journey, we produced a [video to spread the initiative][13].  

After deployment in the water reservoirs, the data was immediately available in project website. Clearly, the data collected remotely was not compatible with the tests previously done in laboratory. Before the equipment could be produced on a large scale, we need to invest more time in laboratory and field tests to increase the reliability.  

During the two last years, our team participated in several events to share the project and learn from similar experiences. Among them are the 1st International Seminar on Participatory Monitoring for the Management of Biodiversity (Manaus, 2014), the [VI Latin American Meeting on Community Water Management][14] (Olmué, Chile, 2015); and the [Barnraising][15] [(2015)][15], organized by the Public Lab in New Orleans, USA. In the latter, during a round-table on water quality monitoring equipment, there was a consensus that Mãe d'Água is the most complete open source equipment in development to perform this function.  

During last phase of the project, in 2016, we aimed to ensuring the use of the legacy of the project. We have [established a partnership][16] with UFOPA's Institute of Science and Technology of Water (ICTA) and Engineering and Geosciences (IEG), focusing on the transfer of knowledge and equipment so that the technology could  be incorporated into its research projects.  

The ease of exchange and the availability of information also attracted researchers from the IFPA (Federal Institute of Pará), Indonesia Speleological Society, and other institutions interested in exploring Mãe d'Água. Enthusiasts of several parts of the world are using and expanding the knowledge and technology produced in those two years.  

Once the reliability of the data collected by the equipment is high enough, it can be produced in scale to serve communities around the world, especially those using alternative sources of water supply.  

We believe that our contribution in this period was to demonstrate the possibilities of using open hardware and citizen science to cover information gaps on social and environmental issues. The motivation to bring awareness about quality of drinking water still drives us to move forward.  

If you want to know more details about the InfoAmazonia Network and Mãe d´Água, go to the online [data storage and visualization platform][17].You can also stay informed about the project and follow related news, joining the [Facebook ][18]Page.  

If you are interested in replicating the system we developed, access the following links:

- [Hardware][19] schematics;
- [Firmware][20] code;
- [Data platform][17] code.  

If you're interested in reading our milestone reports (the we sent to the funder), you can download them:

- [1st Narrative Report][21]
- [2nd Narrative Report][22]
- [3rd Narrative Report][23]
- [4th Narrative Report][24]
- [Final Financial Report][25]

[1]: https://smartcitizen.me
[2]: http://dustduino.org/
[3]: http://airqualityegg.com/
[4]: https://publiclab.org/wiki/riffle
[5]: https://www.sitawi.net/
[6]: https://criaglobal.com/
[7]: http://visaguas.infoamazonia.org/
[8]: http://infoamazonia.blogosfera.uol.com.br/2014/09/10/qualidade-da-agua-na-amazonia-e-pior-que-no-resto-do-pais/
[9]: http://www.libelium.com/products/plug-sense/
[10]: http://devtecnologia.com.br/
[11]: http://infoamazonia.blogosfera.uol.com.br/2015/07/06/rede-infoamazonia-cria-o-mae-dagua-para-monitorar-a-qualidade-dagua/
[12]: http://infoamazonia.blogosfera.uol.com.br/2015/11/24/comunidades-do-rio-tapajos-passam-a-monitorar-qualidade-dagua-com-sensor/
[13]: https://www.youtube.com/watch?v=4t60jJCaQEM
[14]: http://www.clocsas.org/
[15]: https://publiclab.org/wiki/barnraising
[16]: https://infoamazonia.org/pt/blog/portugues-infoamazonia-e-ufopa-firmam-parceria-para-pesquisar-uso-de-sensores-de-qualidade-dagua/
[17]: https://github.com/InfoAmazonia/rede-site
[18]: https://www.facebook.com/groups/846911972056730/
[19]: https://github.com/InfoAmazonia/rede-hardware
[20]: https://github.com/InfoAmazonia/rede-firmware
[21]: https://drive.google.com/open?id=0B5ibqXlACRTrei1RM2FXNGU2a1k
[22]: https://drive.google.com/open?id=0B5ibqXlACRTrbUZHSk53WGk5VHc
[23]: https://drive.google.com/open?id=0Bz4dKKlCBT-EMDhZeXZ3aXRJQjg
[24]: https://drive.google.com/open?id=0Bz4dKKlCBT-EUW9hdURYMldCWU0
[25]: https://drive.google.com/open?id=0Bz4dKKlCBT-ETW5ISUhFOWJQemc