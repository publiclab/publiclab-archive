---
title: "Mãe d'água - Rede InfoAmazonia "

tagnames: 'water-quality, list:plots-waterquality, brasil, parent:open-water, redeinfoamazonia, maedagua, lang:pt, list:publiclab-portugues, south-america'
author: GSan
path: /wiki/mae-d-agua-rede-infoamazonia.md
nid: 11843
uid: 426547
cids: 
---

![](https://publiclab.org/public/system/images/photos/000/010/033/original/Prototipo_foto_Miguel_PeixeDSCF1505.jpg)

# Mãe d'água - Rede InfoAmazonia 

by [GSan](/profile/GSan), [Markos](/profile/Markos), [vjpixel](/profile/vjpixel), [Gina](/profile/Gina)

May 26, 2015 22:30 | Tags: [water-quality](/tag/water-quality), [list:plots-waterquality](/tag/list:plots-waterquality), [brasil](/tag/brasil), [parent:open-water](/tag/parent:open-water), [redeinfoamazonia](/tag/redeinfoamazonia), [maedagua](/tag/maedagua), [lang:pt](/tag/lang:pt), [list:publiclab-portugues](/tag/list:publiclab-portugues), [south-america](/tag/south-america)

----

###Notas de pesquisas relacionadas:
http://publiclab.org/notes/GSan/08-26-2015/mae-d-agua-indice-de-qualidade-water-mother-quality-index
###Related research notes
http://publiclab.org/notes/GSan/08-26-2015/mae-d-agua-indice-de-qualidade-water-mother-quality-index

##Mãe d'Água - Chico Mendes V1.1.0 - 2014
O projeto Rede InfoAmazonia desenvolveu um hardware aberto de monitoramento de qualidade da água em tempo real, o "Mãe d'Água". 

Projeto: Rede InfoAmazonia;
Desenvolvimento e consultoria: @GSan;
Desenvolvimento e produção DEV Tecnologia.

O objetivo do projeto é detectar possíveis contaminantes como esgoto ou toxinas industriais e metais pesados na água. O sistema será capaz de ajudar a inferir, com precisão, variáveis físico-químicas que ajudam a distinguir uma água potável da água contaminada.

The Rede InfoAmazonia project is developing an open hardware monitoring water quality in real time, the "Mother Water". 

Projetc: Rede InfoAmazonia;
Developmet and consulting: @GSan;
Developmet and production: DEV Tecnologia.


The goal of the project is to detect possible contaminants such as sewage or industrial toxins and heavy metals in the water. The system will be able to help infer accurately physicochemical variables that help distinguish a drinking water contaminated water.


[![maedagua001.jpg](https://i.publiclab.org/system/images/photos/000/011/291/medium/maedagua001.jpg)](https://i.publiclab.org/system/images/photos/000/011/291/original/maedagua001.jpg)

(protótipo v0.1 equipe Rede InfoAmazonia)


O dispositivo possui funcionalidades de medição de acidez da água pelo potencial hidrogeniônico (pH), potencial de redução da oxidação (ORP), condutividade elétrica, temperatura da água e pressão barométrica no nível da água, variáveis que auxiliam na inferência da qualidade da água para consumo humano. 

The device has measuring features of acidity of the water by hydrogenic potential (pH), oxidation reduction potential (ORP), conductivity, water temperature and barometric pressure in the water level, variables that help the inference of water quality for human consumption.

[![IMG_20150522_181458705_HDR.jpg](https://i.publiclab.org/system/images/photos/000/010/022/medium/IMG_20150522_181458705_HDR.jpg)](https://i.publiclab.org/system/images/photos/000/010/022/original/IMG_20150522_181458705_HDR.jpg)

(Desenvolvimento de hardware no laboratório da Dev Tecnologia)

O hardware foi projetado em plataforma (Eagle) e licenças abertas, de forma modular:

- Módulo 1 (M1): composto por um Arduino Mega, responsável por todo o processamento das informações capturadas pelos sensores e pela alimentação de energia do conjunto (conectado a uma fonte externa). 
- Módulo 2 (M2): um shield para Arduino que possui o sensor de pressão barométrica e conectores para acoplamento dos sensores de pH, ORP, condutividade e temperatura da água. Desta forma modular, é possível selecionar os sensores a serem utilizados visando o custo benefício da aplicação específica desejada. 
- Módulo 3 (M3): responsável pela comunicação celular (2G), capaz de transmitir os dados por SMS para um servidor de Internet da Rede InfoAmazonia. Como estratégia auxiliar de acesso aos dados, o M2 também possui espaço para cartão de memória SD.

The hardware is designed to platform (Eagle) and open licenses, in a modular way:

- Module 1 (M1): composed of an Arduino Mega, responsible for all processing of information captured by the sensors and the entire power supply (connected to an external source).
- Module 2 (M2): A shield for Arduino that has the barometric pressure sensor and connector for coupling the sensors pH, ORP, conductivity and water temperature. This modular, it can select the sensor to be used aiming at the cost benefit of specific desired application.
- Module 3 (M3): responsible for cellular communication (2G), capable of transmitting data by SMS to an Internet server InfoAmazonia Network. As auxiliary data access strategy, the M2 also features SD memory card space.



O hardware completo será capaz de captar uma leitura de cada um dos sensores por hora, e enviá-las a um servidor remoto, que disponibilizará as leituras efetuadas em uma base de dados aberta. Em seguida, um software enviará mensagens de alerta sobre a qualidade da água por SMS para celulares de pessoas interessadas em ser informados sobre a qualidade da água em sua comunidade.

The complete hardware is able to capture a reading of each of the sensors per hour, and send them to a remote server, which will provide readings taken in an open database. Then software will send warning messages about the quality of water by SMS to mobile phones of people interested in being informed about the water quality in their community.

[![maedagua100.png](https://i.publiclab.org/system/images/photos/000/011/292/medium/maedagua100.png)](https://i.publiclab.org/system/images/photos/000/011/292/original/maedagua100.png)

(Mãe d'água versão 1.0)



Os arquivos de desenvolvimento do hardware/software do projeto podem ser encontrados em:

- Desenho do hardware: https://github.com/InfoAmazonia/rede-hardware
- Firmware: https://github.com/InfoAmazonia/rede-firmware
- Site para visualização dos dados: https://github.com/InfoAmazonia/rede-site
- Backend de SMS (utilizado para receber leituras dos equipamentos e para enviar alertas para a população): https://github.com/InfoAmazonia/rede-sms

The hardware development files / design software can be found at:

- Hardware design: https://github.com/InfoAmazonia/rede-hardware
- Firmware: https://github.com/InfoAmazonia/rede-firmware
- Site for data visualization: https://github.com/InfoAmazonia/rede-site
- Back-end SMS (used to get equipment readings and to send alerts to the population): https://github.com/InfoAmazonia/rede-sms

#Some Parameters of Water Quality

##pH

The pH of a solution is the negative logarithm of the hydrogen ion "activity":
                                      pH = −log (H+)
Note: In dilute solutions, the hydrogen ion activity is approximately equal to the hydrogen
ion concentration.

As the pH scale (0 to 14 - no units for pH) is a logarithmic scale, this means that the change of 1 unit in pH scale corresponds to a variation of "10 times" in the concentration of H+.

The pH of water is a measure of the acid–base equilibrium and, in most natural
waters, is controlled by the carbon dioxide (CO2)–bicarbonate(HCO3-)–carbonate(CO3-2) equilibrium system. An increased carbon dioxide concentration will therefore lower pH, whereas a decrease will cause it to rise. 

Temperature will also affect the equilibria and the pH. In pure water, a decrease in pH of about 0.45 occurs as the temperature is raised by 25 °C.  The pH of most drinking-water lies within the range 6.5–8.5. 

Natural waters can be of lower pH, as a result of, for example, acid rain or higher pH in limestone areas.

The concentration of protons in water (i.e., the pH) is often the critical variable determining water quality and chemistry in both natural systems, such as lakes and rivers, and engineered systems, such as drinking water distribution systems. 

The "speciation" of many dissolved species, solubility of many minerals, and association (sorption) of dissolved species with solid surfaces all are controlled by pH. For example, the base ammonia (NH3(aq) ) is toxic to fish, but its concentration versus that of its acidic counterpart, ammonium (NH4+ ), depends on a solution’s pH. 

Acid deposition (acid rain) lowers the pH of lakes and streams and promotes the dissolution of aluminosilicate minerals in poorly "buffered" soils resulting in high concentrations of dissolved aluminum that can be toxic to fish. In drinking water, pH is critically important because the acid form of the disinfectant, free chlorine (hypochlorous acid, HOCl), is much more potent than the basic form (hypochlorite, OCl− ). This must be balanced by the fact that a lower pH can lead to dissolution of metal pipes carrying the water and cause taste, odor, and toxicity problems for consumers. 

(Source: Water Chemistry - An Introduction to the Chemistry of Natural and Engineered Aquatic Systems, page 268)

###Health effects of pH

The effects of acids and alkalis depend on the strength of the acid or alkali and the concentration. 

Strong concentrated acids or alkalis are corrosive, whereas dilute and weak acids and alkalis are not corrosive. 

pH alone is not the primary determinant of adverse effects, and in water, acids and alkalis are normally extremely dilute. 

The pH of stomach fluid, which contains hydrochloric acid, is between 1.0 and 3.5, with a mean of approximately 2.0, and there is a range of commonly encountered foods that are also of low pH. These include lemon juice, with a pH of 2.4, and vinegar, with a pH of 2.8. Because these are weak acids, they pose no threat to health from their consumption. 

A direct relationship between human health and the pH of drinking water is  impossible to ascertain, because pH is so closely associated with other aspects of water quality, and acids and alkalis are weak and usually very dilute. 

However, because pH can affect the degree of corrosion of metals as well as disinfection efficiency, any effect on health is likely to be indirect and due to increased ingestion of metals from plumbing and pipes or inadequate disinfection.

Although pH usually has no direct impact on water consumers, it is one of the most important operational water quality parameters. 

Careful attention to pH control is necessary at all stages of water treatment to ensure satisfactory water clarification and disinfection. 

For effective disinfection with chlorine, the pH should preferably be less than 8.0. The pH of the water entering the distribution system must be controlled to minimize the corrosion of water mains and pipes in household water systems. Failure to do so can result in the contamination of drinking-water and in adverse effects on its taste, odour and appearance.

The optimum pH will vary in different supplies according to the composition of the water and the nature of the construction materials used in the distribution system, but is often in the range 6.5–9.5. 

Extreme pH values can result from accidental spills, treatment breakdowns and insufficiently cured cement mortar pipe linings. 

It is not considered to be necessary to propose a health-based guideline value for pH.
(Source:
www.who.int/entity/water_sanitation_health/dwq/chemicals/ph_revised_2007_clean_version.pdf)

###Efeitos do pH na saúde:

Os efeitos dos ácidos e bases dependem da força e da concentração do ácido ou da base. Ácidos e bases, fortes e concentrados são corrosivos enquanto que ácidos e bases fracas e diluídos não são corrosivos.
Apenas o pH (isoladamente) não é o principal determinante de efeitos adversos, e na água, ácidos e bases estão normalmente extremamente diluídos. 

O pH do suco gástrico, que contém ácido clorídrico, situa-se entre 1,0 e 3,5, com média de cerca  de 2,0, e há vários alimentos que também apresentam baixo pH. Ex: suco de limão, com um pH de 2,4, e o vinagre, com um pH de 2,8. Como são ácidos fracos o seu consumo não representa uma ameaça para a saúde. 

Não é possível estabelecer uma relação direta entre o pH da água e a saúde humana, pois o pH está intimamente associada com outros aspectos da qualidade da água, e os ácidos e bases presentes são fracos e, geralmente, muito diluídos.

No entanto, como o pH pode afetar o grau de corrosão de metais, bem como da eficiência de desinfecção, qualquer efeito sobre a saúde é provavelmente indireta, devido à maior ingestão de metais oriundos da tubulação metálica ou devido à desinfecção inadequada.

Conclusões

Embora o pH geralmente não tenha um impacto direto sobre os consumidores de água, é um dos mais importantes parâmetros operacionais de qualidade de água. O controle de pH é necessário em todas as fases de tratamento de água para assegurar uma clarificação satisfatória da água e uma desinfecção eficiente. Para a desinfecção efetiva com o cloro, o pH deve estar preferencialmente abaixo de 8,0. 

O pH da água que entra no sistema de distribuição tem de ser controlada para minimizar a corrosão das tubulações de água no sistema de distribuição doméstico. 

O descontrole do pH pode resultar na contaminação da água potável e de efeitos adversos sobre o odor, sabor e aparência.

O pH ótimo pode variar em diferentes materiais de acordo com a composição da água e da natureza dos materiais de construção utilizados no sistema de distribuição, mas é muitas vezes na faixa de 6,5-9,5. 

Valores extremos de pH podem resultar de derramamentos acidentais, falhas de tratamento e desgaste do cimento usado nas tubulações.

Não é considerado necessário propor um valor de orientação do pH com base na saúde.

Fonte: www.who.int/entity/water_sanitation_health/dwq/chemicals/ph_revised_2007_clean_version.pdf
