---
title: "Mãe d'Água"\ntagnames: 'water-quality, water, tool, datalogger, list:plots-waterquality, brasil, redeinfoamazonia, maedagua, drinking-water, data-logging, method, chemicals, parent:data-logging'
author: vjpixel
path: /wiki/mae-d-agua.md
nid: 12086
uid: 420617

---

![](https://publiclab.org/public/system/images/photos/000/011/265/original/Prototipo_foto_Miguel_Peixe.jpg)

# Mãe d'Água

by [vjpixel](../profile/vjpixel), [GSan](../profile/GSan), [liz](../profile/liz)

July 21, 2015 16:04 | Tags: [water-quality](../tag/water-quality), [water](../tag/water), [tool](../tag/tool), [datalogger](../tag/datalogger), [list:plots-waterquality](../tag/list:plots-waterquality), [brasil](../tag/brasil), [redeinfoamazonia](../tag/redeinfoamazonia), [maedagua](../tag/maedagua), [drinking-water](../tag/drinking-water), [data-logging](../tag/data-logging), [method](../tag/method), [chemicals](../tag/chemicals), [parent:data-logging](../tag/parent:data-logging)

----

The project [Rede InfoAmazonia](https://publiclab.org/wiki/rede-infoamazonia) is developing "Mãe d'água - Water's mother", an open hardware to monitor water quality in real time. The project goal is to detect possible contaminants like sewage, industrial toxins and heavy metals in the water. The system will help infer accurately physicochemical properties and variables that differentiates drinkable from contaminated water.

The device will measure acidity in water by power of hydrogen (pH), oxidation reduction potential (ORP), water conductivity, water temperature and barometric pressure in the water level, which are important factors to consider when assessing water quality for human consumption.

[![IMG_20150522_181458705_HDR.jpg](https://i.publiclab.org/system/images/photos/000/010/022/medium/IMG_20150522_181458705_HDR.jpg)](https://i.publiclab.org/system/images/photos/000/010/022/original/IMG_20150522_181458705_HDR.jpg)

(Hardware development in the laboratory of Dev Tecnologia)

The hardware is modular:

- Module 1 (M1): composed by Arduino Mega, it is responsible for all processing of information captured by the sensors and the entire power supply (connected to an external source).
- Module 2 (M2): Arduino shield, designed using Eagle platform, with the barometric pressure sensor and connectors for coupling the pH, ORP, conductivity and water temperature sensors. This way, it is possible to select modules that are appropriate aiming the best cost-benefit ratio of specific desired application. This module was designed using Eagle.
- Module 3 (M3): responsible for mobile communication (2G), capable of transmitting data by Internet and by SMS to the InfoAmazonia Network internet server. As auxiliary data access strategy, the M2 also features a SD memory card slot.

The complete hardware will capture a reading of each of the sensors per hour, and send them to our remote server, which will provide visualization in an open database. A software will send SMS alert messages on water quality to people interested in being informed about the status in their community.

The development files of the project's hardware/software can be found at:

- Hardware's design: https://github.com/InfoAmazonia/rede-hardware
- Firmware: https://github.com/InfoAmazonia/rede-firmware
- Website for data visualization: https://github.com/InfoAmazonia/rede-site
- SMS backend (to receive data from the equipments and to send alerts to the communities): https://github.com/InfoAmazonia/rede-sms
